---
title: "Environment Service: API"
description: "Environment Service の呼び出し元、Provider manager、Admission Controller、設定のための API の提案。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/environment_service/api/
upstream_sha: ae7cb222d67ee0dd31f3319c8c70f0fabda2633b
lastmod: "2026-11-17T07:34:44-08:00"
translated_at: "2026-11-17T21:44:36.076738+00:00"
translator: codex
stale: false
---

{{< engineering/design-document-header >}}

このページでは、[Environment Service](_index.md) の API の提案を説明します。未解決の契約は、ブループリントの[未解決の質問](_index.md#open-questions)に記載しています。

## 呼び出し元 {#callers}

呼び出し元は、環境の操作、Run、状態の監視に `Environment` を使います。

現在の `EnvironmentSpec` に含まれるのは、インラインの Runner 仕様だけです。参照する[環境定義](_index.md#environment-definitions)の API は、未解決です。

```protobuf
edition = "2023";
package gitlab.environment;

import "google/protobuf/duration.proto";
import "google/protobuf/struct.proto";
import "google/protobuf/timestamp.proto";
import "gitlab/function/function.proto"; // align with the Function API during implementation

option features.field_presence = IMPLICIT;

// Create, Stop, Start, Terminate, Run, and CancelRun require request_id.
// Scope each ID to the authenticated caller, RPC, and workload owner or target resource.
// Retries return the original acceptance; reusing an ID with different contents is rejected.
// Authorization context comes from verified credentials, not workload fields.
service Environment {
  rpc Create(CreateRequest) returns (CreateResponse);
  // Reject stop/resume before acceptance when the assigned manager lacks support.
  rpc Stop(StopRequest) returns (StopResponse);
  rpc Start(StartRequest) returns (StartResponse); // resumes a stopped environment
  rpc Terminate(TerminateRequest) returns (TerminateResponse);

  rpc Run(RunRequest) returns (RunResponse); // requires a ready environment
  rpc CancelRun(CancelRunRequest) returns (CancelRunResponse);

  // Watches send current state first, then updates. Closing a watch does not cancel work.
  // A watch sends the latest state, not every past transition; slow watchers may skip intermediate states.
  // Reconnecting returns the stored final result while it is within the retention period.
  rpc WatchEnvironment(WatchEnvironmentRequest) returns (stream WatchEnvironmentResponse);
  rpc WatchRun(WatchRunRequest) returns (stream WatchRunResponse);

  // Requires a ready environment and a manager supporting CAPABILITY_EXEC; reject unsupported requests before starting.
  // After a disconnect, the process may still be running or have made changes. Do not execute it again automatically.
  rpc Exec(stream ExecRequest) returns (stream ExecResponse);
}

message CreateRequest {
  string request_id = 1;
  EnvironmentSpec spec = 2;
  WorkloadContext workload_context = 3; // optional admission context; does not grant compute access
  repeated Capability required_capabilities = 4; // placement requires all listed capabilities
}
message CreateResponse {
  string environment_id = 1;
}

message WorkloadContext {
  // Admission Controllers decide whether a request without repository details is acceptable.
  RepositoryContext repository = 1;
}
message RepositoryContext {
  string id = 1; // opaque repository identifier; not an access scope or workload owner
  string ref = 2; // branch or tag ref when relevant, such as refs/heads/main
  string commit_sha = 3; // exact revision when relevant
}
// Derived by the service from verified authorization, not accepted as unsigned Create arguments.
// Credential format, lifetime, refresh, and revocation are not defined by this message.
message AuthorizationContext {
  string owner_scope_id = 1; // e.g. "scope-p42" for one workload owner; used for fair sharing
  repeated string scope_chain = 2; // e.g. ["scope-p42", "scope-g7", "scope-o3", "scope-instance"]
  bool protected_work = 3;
}

message EnvironmentSpec {
  // Required. The selected manager's registration kind must support this specification.
  oneof kind {
    RunnerEnvironmentSpec runner = 1;
  }
}
message RunnerEnvironmentSpec {
  repeated string tags = 1; // matched against Provider tags
  Image image = 2;
  repeated Service services = 3;
}
message Image {
  string name = 1;
  repeated string entrypoint = 2;
  repeated string command = 3;
  string user = 4;
  string platform = 5;
  PullPolicy pull_policy = 6;
}
enum PullPolicy {
  PULL_POLICY_UNSPECIFIED = 0; // use the manager's configured policy
  PULL_POLICY_ALWAYS = 1;
  PULL_POLICY_IF_NOT_PRESENT = 2;
  PULL_POLICY_NEVER = 3;
}
message Service {
  Image image = 1;
  repeated string aliases = 2;
  map<string, string> variables = 3;
}
enum Capability {
  CAPABILITY_UNSPECIFIED = 0;
  CAPABILITY_STOP_START = 1;
  CAPABILITY_EXEC = 2;
}

message StopRequest {
  string request_id = 1;
  string environment_id = 2;
}
message StopResponse {}

message StartRequest {
  string request_id = 1;
  string environment_id = 2;
}
message StartResponse {}

message TerminateRequest {
  string request_id = 1;
  string environment_id = 2;
}
message TerminateResponse {}

message RunRequest {
  string request_id = 1;
  string environment_id = 2;
  gitlab.function.Function function = 3;
  Parameters params = 4;
  google.protobuf.Duration timeout = 5; // positive and within limits; defaults if omitted; includes preparation and delegated work
}
message RunResponse {
  string run_id = 1;
}
message Parameters {
  string name = 1;
  map<string, string> env = 2;
  map<string, gitlab.function.Value> inputs = 3;
  map<string, ScopeVars> scopes = 4;
  string work_dir = 5;
}
message ScopeVars {
  map<string, google.protobuf.Value> vars = 1;
}

message CancelRunRequest {
  string request_id = 1;
  string run_id = 2;
}
message CancelRunResponse {}

message WatchEnvironmentRequest {
  string environment_id = 1;
}
message WatchEnvironmentResponse {
  string environment_id = 1;
  EnvironmentPhase phase = 2;
  string message = 3;
  // Provider manager observation time for reported changes; service observation time for service-originated changes.
  google.protobuf.Timestamp observed_at = 4;
  google.protobuf.Timestamp stored_at = 5; // when Environment Service durably stored this update
  uint64 version = 6; // increases for every stored state change, including phase, reachability, and cleanup
  string reason = 7; // machine-readable detail
  bool provider_manager_reachable = 8;
  bool cleanup_pending = 9; // resources may remain even after failure
}
enum EnvironmentPhase {
  ENVIRONMENT_PHASE_UNSPECIFIED = 0;
  ENVIRONMENT_PHASE_WAITING = 1;
  ENVIRONMENT_PHASE_CREATING = 2;
  ENVIRONMENT_PHASE_READY = 3;
  ENVIRONMENT_PHASE_STOPPING = 4;
  ENVIRONMENT_PHASE_STOPPED = 5;
  ENVIRONMENT_PHASE_STARTING = 6;
  ENVIRONMENT_PHASE_TERMINATING = 7;
  ENVIRONMENT_PHASE_TERMINATED = 8;
  ENVIRONMENT_PHASE_FAILED = 9; // unusable; cleanup may still be pending
}

message WatchRunRequest {
  string run_id = 1;
}
message WatchRunResponse {
  string run_id = 1;
  RunStatus status = 2;
  map<string, gitlab.function.Value> outputs = 3; // populated on success
  int32 exit_code = 4 [features.field_presence = EXPLICIT]; // absent if no exit was observed
  string message = 5;
  // Provider manager observation time for reported changes; service observation time for service-originated changes.
  google.protobuf.Timestamp observed_at = 6;
  google.protobuf.Timestamp stored_at = 7; // when Environment Service durably stored this update
  uint64 version = 8; // increases for every stored Run state or result change
  string reason = 9;
}
enum RunStatus {
  RUN_STATUS_UNSPECIFIED = 0;
  RUN_STATUS_PENDING = 1; // accepted, execution not yet confirmed
  RUN_STATUS_RUNNING = 2;
  RUN_STATUS_CANCELING = 3;
  RUN_STATUS_SUCCESS = 4; // relationship to Function errors and nonzero exit codes is an open question
  RUN_STATUS_FAILURE = 5; // includes lost results; does not prove execution stopped
  RUN_STATUS_TIMEOUT = 6;
  RUN_STATUS_CANCELED = 7;
}

message ExecRequest {
  oneof payload {
    ExecStart start = 1; // first message only
    bytes stdin = 2;
  }
}
message ExecStart {
  string environment_id = 1;
  repeated string command = 2;
  string work_dir = 3;
}
message ExecResponse {
  oneof payload {
    bytes stdout = 1;
    bytes stderr = 2;
    int32 exit_code = 3; // final response after process exit
  }
}
```

## Provider manager {#provider-managers}

マネージャーは、`ProviderManagerRegistry` を呼び出し、設定済みの Provider の下に登録して、状態を報告します。Environment Service は、そのマネージャーの接続を通じて、`ProviderManager` にコマンドを送信します。コマンドは受け付けを確認し、報告が結果を確認します。

登録種別によって、マネージャーがサポートする環境仕様が決まります。`RunnerRegistration` は、`RunnerEnvironmentSpec` をサポートします。1 つの登録種別が複数の仕様をサポートし、異なるマネージャー実装で使用できます。

ケイパビリティは任意の機能です。報告する各ケイパビリティは、サポートするすべての仕様で動作する必要があります。

```protobuf
edition = "2023";
package gitlab.environment.provider;

import "google/protobuf/duration.proto";
import "google/protobuf/timestamp.proto";
import "gitlab/environment/environment.proto";
import "gitlab/function/function.proto";

option features.field_presence = IMPLICIT;

service ProviderManagerRegistry {
  // Retrying the same registration returns the original Provider, manager, and session IDs.
  rpc Register(RegisterRequest) returns (RegisterResponse);
  // Stops new assignments without releasing existing ones.
  rpc Unregister(UnregisterRequest) returns (UnregisterResponse);
  // Check the reporting manager against the stored assignment; save before acknowledging.
  // Cleanup reports must not erase a failure recorded by the service.
  rpc ReportEnvironment(ReportEnvironmentRequest) returns (ReportEnvironmentResponse);
  // Check the reporting manager and sequence; save before acknowledging.
  // Late reports cannot replace final results. Retain results until acknowledged.
  rpc ReportRun(ReportRunRequest) returns (ReportRunResponse);
  rpc ReportMetrics(ReportMetricsRequest) returns (ReportMetricsResponse);
}

// Environment Service calls these methods on the assigned manager.
service ProviderManager {
  // A lost reply cannot permit reassignment. Creation rejection releases capacity only if no resources were created.
  rpc CreateEnvironment(CreateEnvironmentRequest) returns (CreateEnvironmentResponse);
  rpc StopEnvironment(StopEnvironmentRequest) returns (StopEnvironmentResponse);
  rpc StartEnvironment(StartEnvironmentRequest) returns (StartEnvironmentResponse);
  rpc TerminateEnvironment(TerminateEnvironmentRequest) returns (TerminateEnvironmentResponse);
  rpc Run(RunRequest) returns (RunResponse);
  rpc CancelRun(CancelRunRequest) returns (CancelRunResponse);
  // Returns every environment still held by this manager, including creation not yet started,
  // and deletion reports not yet acknowledged. Acknowledged existing environments are included.
  // Complete both lists before new assignments or execution. Keep newer reports.
  // Cancellation and termination of known assignments may proceed during recovery.
  // If resources cannot be accounted for, fail listing rather than return an empty list.
  rpc ListEnvironments(ListEnvironmentsRequest) returns (ListEnvironmentsResponse);
  // Returns unfinished Runs, even if acceptance was acknowledged, and completed results not yet acknowledged.
  // Completed Runs may be removed after their results are acknowledged. Absence does not permit re-execution.
  rpc ListRuns(ListRunsRequest) returns (ListRunsResponse);
  // After a stream failure, the process may still run or have made changes. Do not execute it again automatically.
  rpc Exec(stream gitlab.environment.ExecRequest) returns (stream gitlab.environment.ExecResponse);
}

// Registration authenticates membership of an existing Provider; it does not create one.
message RegisterRequest {
  string request_id = 1; // new for each registration; reused on retry
  string provider_manager_id = 2; // stable under this Provider across reconnects; not a credential
  repeated gitlab.environment.Capability capabilities = 3;
  // Required. Reject missing or unrecognized kinds.
  oneof kind {
    RunnerRegistration runner = 4;
  }
}
// Supports EnvironmentSpec.runner.
message RunnerRegistration {}
message RegisterResponse {
  string provider_id = 1; // identifies the existing configured Provider
  string provider_manager_id = 2; // stable identity for this manager under the Provider
  // New for a replacement registration; retries of the same Register return the original ID.
  // Calls must be associated with this authenticated registration; binding is an open question.
  string session_id = 3;
}
message UnregisterRequest {}
message UnregisterResponse {}

// Resource IDs identify what to act on; these IDs identify the assignment and the action.
message CommandContext {
  string provider_id = 1;
  string provider_manager_id = 2; // selected manager; another manager must not execute this command
  string placement_id = 3; // same for all commands under one assignment; changes only for a new assignment attempt
  string command_id = 4; // unique per action, such as stop or resume; unchanged on delivery retry
}
message CreateEnvironmentRequest {
  CommandContext context = 1;
  string environment_id = 2;
  gitlab.environment.EnvironmentSpec spec = 3;
}
message CreateEnvironmentResponse {}

message StopEnvironmentRequest {
  CommandContext context = 1;
  string environment_id = 2;
}
message StopEnvironmentResponse {}

message StartEnvironmentRequest {
  CommandContext context = 1;
  string environment_id = 2;
}
message StartEnvironmentResponse {}

message TerminateEnvironmentRequest {
  CommandContext context = 1;
  string environment_id = 2;
}
message TerminateEnvironmentResponse {}

message RunRequest {
  CommandContext context = 1;
  string environment_id = 2;
  string run_id = 3; // assigned by Environment Service, never executed twice
  gitlab.function.Function function = 4;
  gitlab.environment.Parameters params = 5;
  google.protobuf.Duration timeout = 6; // execution limit; its start time and retry behavior are open questions
}
message RunResponse {}

message CancelRunRequest {
  CommandContext context = 1;
  string run_id = 2;
  string environment_id = 3;
}
message CancelRunResponse {}

// Returned with a gRPC error when the manager confirms it did not act on the command.
message CommandRejection {
  string command_id = 1;
  string reason = 2;
  string message = 3;
}

message ReportEnvironmentRequest {
  EnvironmentState state = 1;
}
message ReportEnvironmentResponse {}
message EnvironmentState {
  string environment_id = 1;
  EnvironmentPhase phase = 2;
  string reason = 3;
  string message = 4;
  google.protobuf.Timestamp timestamp = 5; // when the manager observed the change
  uint64 sequence = 6; // ignore older observations, including across reconnects
}
enum EnvironmentPhase {
  ENVIRONMENT_PHASE_UNSPECIFIED = 0;
  ENVIRONMENT_PHASE_CREATING = 1;
  ENVIRONMENT_PHASE_READY = 2;
  ENVIRONMENT_PHASE_STOPPED = 3;
  ENVIRONMENT_PHASE_TERMINATED = 4;
  ENVIRONMENT_PHASE_FAILED = 5;
}

message ReportRunRequest {
  RunState state = 1;
}
message ReportRunResponse {}
message RunState {
  string run_id = 1;
  RunStatus status = 2;
  map<string, gitlab.function.Value> outputs = 3;
  int32 exit_code = 4 [features.field_presence = EXPLICIT];
  string reason = 5;
  string message = 6;
  google.protobuf.Timestamp timestamp = 7; // when the manager observed the change
  uint64 sequence = 8; // ignore duplicate or older Run updates, including across reconnects
}
enum RunStatus {
  RUN_STATUS_UNSPECIFIED = 0;
  RUN_STATUS_RUNNING = 1;
  RUN_STATUS_SUCCESS = 2; // relationship to Function errors and nonzero exit codes is an open question
  RUN_STATUS_FAILURE = 3; // includes unrecoverable execution/result loss, with a reason
  RUN_STATUS_TIMEOUT = 4;
  RUN_STATUS_CANCELED = 5;
}

message ReportMetricsRequest {
  ManagerMetrics metrics = 1;
}
message ReportMetricsResponse {}
message ManagerMetrics {
  // Periodic full counts, not changes since the previous report.
  // Count failed/terminating resources under ready or stopped until deletion is confirmed.
  int32 environments_creating = 1; // includes accepted creation commands before resource creation starts
  int32 environments_ready = 2;
  int32 environments_stopped = 3;
  int32 environments_capacity = 4; // total limit, not free capacity
  uint64 sequence = 5; // ignore older capacity reports
}

message ListEnvironmentsRequest {
  string page_token = 1; // empty starts a new listing; otherwise continues the same saved view
}
message ListEnvironmentsResponse {
  string snapshot_id = 1; // every page in this listing describes the same saved view of the manager's state
  repeated EnvironmentState environments = 2;
  string next_page_token = 3; // empty when all pages have been returned
}
message ListRunsRequest {
  string page_token = 1; // empty starts a new listing; otherwise continues the same saved view
}
message ListRunsResponse {
  string snapshot_id = 1; // every page uses the same saved Run view, separate from the environment listing
  repeated RunState runs = 2;
  string next_page_token = 3; // empty when all pages have been returned
}
```

## Admission Controller {#admission-controllers}

### 設定 {#configuration}

認可された呼び出し元は、Environment Service が提供する `AdmissionControllerConfiguration` を使って、コントローラーの設定を作成し、そのスコープを管理します。実行時の登録は、設定済みコントローラーの ID を使います。設定の作成やスコープの選択は行いません。

既存の [Runner controllers API](https://docs.gitlab.com/api/runner_controllers/) は、インスタンスまたはインスタンス Runner のスコープをサポートします。この提案では、スコープをコントローラーに保持し、この Environment Service が提供する特定の Provider、またはすべての Provider を対象とします。既存の Runner スコープの Provider への対応付けは、未解決です。認証情報の管理は、[Runner controller tokens API](https://docs.gitlab.com/api/runner_controller_tokens/)と同様に、別のものとして維持します。

```protobuf
edition = "2023";
package gitlab.environment.admission.configuration;

option features.field_presence = IMPLICIT;

// Mutations save configuration before replying. Scope request_id to caller, RPC, and controller if present.
// Retries return the original response; reusing an ID with different contents is rejected.
service AdmissionControllerConfiguration {
  rpc Create(CreateControllerRequest) returns (CreateControllerResponse);
  rpc Get(GetControllerRequest) returns (GetControllerResponse);
  // Returns only controllers the caller is authorized to view.
  rpc List(ListControllersRequest) returns (ListControllersResponse);
  // Replaces the complete configuration; authorize state changes and every configured scope.
  rpc Update(UpdateControllerRequest) returns (UpdateControllerResponse);
}

message CreateControllerRequest {
  string request_id = 1;
  ControllerSpec spec = 2;
}
message CreateControllerResponse {
  Controller controller = 1;
}
message GetControllerRequest {
  string controller_id = 1;
}
message GetControllerResponse {
  Controller controller = 1;
}
message ListControllersRequest {
  string page_token = 1;
}
message ListControllersResponse {
  repeated Controller controllers = 1;
  string next_page_token = 2; // empty when all pages have been returned
}
message UpdateControllerRequest {
  string request_id = 1;
  string controller_id = 2;
  ControllerSpec spec = 3;
}
message UpdateControllerResponse {
  Controller controller = 1;
}

message Controller {
  string controller_id = 1; // same ID returned by runtime registration
  ControllerSpec spec = 2;
}
message ControllerSpec {
  string description = 1;
  ControllerState state = 2;
  // Either all placements or one or more Provider scopes, never both.
  // No scopes means no checks, even when enabled or in dry-run mode.
  repeated ControllerScope scopes = 3;
}
enum ControllerState {
  CONTROLLER_STATE_UNSPECIFIED = 0; // defaults to disabled
  CONTROLLER_STATE_DISABLED = 1; // receives no checks
  CONTROLLER_STATE_ENABLED = 2; // approval is required for matching placements
  CONTROLLER_STATE_DRY_RUN = 3; // record outcomes without blocking or rejecting placement
}
message ControllerScope {
  // Exactly one scope is required.
  oneof kind {
    AllProviders all = 1; // placements on any Provider served by this Environment Service
    string provider_id = 2;
  }
}
message AllProviders {}
```

### 実行時の登録とアドミッションチェック {#runtime-registration-and-admission-checks}

Admission Controller は、`AdmissionControllerRegistry` を呼び出して登録し、`AdmissionController.AdmitEnvironment` ストリームを開いてチェックを受信します。両方のサービスを、Environment Service が提供します。

```protobuf
edition = "2023";
package gitlab.environment.admission;

import "gitlab/environment/environment.proto";

option features.field_presence = IMPLICIT;

// Credentials identify an existing controller configuration; registration announces runtime presence.
service AdmissionControllerRegistry {
  // Retrying the same registration returns the original controller and session IDs.
  rpc Register(RegisterRequest) returns (RegisterResponse);
  // Stops new checks; required approval is not waived.
  rpc Unregister(UnregisterRequest) returns (UnregisterResponse);
}

service AdmissionController {
  // Controller opens the stream; service sends one request, controller returns one decision.
  // Missing, invalid, or failed responses never approve an enforced check; the environment stays waiting for retry.
  // After the decision, close this stream and open another to wait for the next request.
  rpc AdmitEnvironment(stream AdmitEnvironmentResponse) returns (stream AdmitEnvironmentRequest);
}

message RegisterRequest {
  string request_id = 1; // new for each registration; reused on retry
}
message RegisterResponse {
  string controller_id = 1; // identifies the existing controller configuration
  // Identifies this runtime registration; retries of the same Register return the original ID.
  // Session binding and replacement with multiple running instances are open questions.
  string session_id = 2;
}
message UnregisterRequest {}
message UnregisterResponse {}

message AdmitEnvironmentRequest {
  string environment_id = 1;
  string provider_id = 2; // proposed Provider, not an assignment
  string provider_manager_id = 3; // proposed manager; approval applies to this placement
  gitlab.environment.WorkloadContext workload_context = 4;
  gitlab.environment.EnvironmentSpec spec = 5;
  repeated gitlab.environment.Capability required_capabilities = 6;
  gitlab.environment.AuthorizationContext authorization = 7; // verified by the service
  // Source IP observed on the manager connection or supplied by a trusted ingress, never self-reported.
  string provider_manager_connection_ip = 8;
}
message AdmitEnvironmentResponse {
  AdmissionDecision decision = 1;
  string reason = 2; // machine-readable rejection reason
  string message = 3; // human-readable explanation
}
enum AdmissionDecision {
  ADMISSION_DECISION_UNSPECIFIED = 0; // invalid; never approval
  ADMISSION_DECISION_APPROVE = 1; // all required controllers must approve
  ADMISSION_DECISION_REJECT_PROVIDER = 2; // consider other eligible Providers
  ADMISSION_DECISION_REJECT_REQUEST = 3; // fail the environment request
}
```

## Provider の設定 {#provider-configuration}

認可された呼び出し元は、Environment Service が提供する `ProviderConfiguration` を使って、Provider を作成し、設定します。設定は、マネージャーの接続とは独立して永続化します。この草案は、認証情報の発行を定義しません。

```protobuf
edition = "2023";
package gitlab.environment.provider.configuration;

option features.field_presence = IMPLICIT;

// Mutations save configuration before replying. Scope request_id to caller, RPC, and Provider if present.
// Retries return the original response; reusing an ID with different contents is rejected.
service ProviderConfiguration {
  rpc Create(CreateProviderRequest) returns (CreateProviderResponse);
  rpc Get(GetProviderRequest) returns (GetProviderResponse);
  // Returns only Providers the caller is authorized to view.
  rpc List(ListProvidersRequest) returns (ListProvidersResponse);
  // Replaces the complete configuration; authorize changes to access scopes.
  rpc Update(UpdateProviderRequest) returns (UpdateProviderResponse);
}

message CreateProviderRequest {
  string request_id = 1;
  ProviderSpec spec = 2;
}
message CreateProviderResponse {
  Provider provider = 1;
}
message GetProviderRequest {
  string provider_id = 1;
}
message GetProviderResponse {
  Provider provider = 1;
}
message ListProvidersRequest {
  string page_token = 1;
}
message ListProvidersResponse {
  repeated Provider providers = 1;
  string next_page_token = 2; // empty when all pages have been returned
}
message UpdateProviderRequest {
  string request_id = 1;
  string provider_id = 2;
  ProviderSpec spec = 3;
}
message UpdateProviderResponse {
  Provider provider = 1;
}

message Provider {
  string provider_id = 1;
  ProviderSpec spec = 2;
}
message ProviderSpec {
  // At least one match is required; an empty allowed-scope list is rejected.
  // E.g. ["scope-g7"], matching work whose verified scope chain contains "scope-g7".
  repeated string allowed_scope_ids = 1;
  repeated string tags = 2; // must include every tag requested by the work
  bool accept_untagged = 3;
  bool protected_only = 4; // requires protected_work in verified authorization context
  bool paused = 5; // stops new assignments, not operations on existing environments
  SchedulingPolicy scheduling_policy = 7; // explicit; independent of scope ID types
}
enum SchedulingPolicy {
  SCHEDULING_POLICY_UNSPECIFIED = 0;
  SCHEDULING_POLICY_OLDEST_FIRST = 1;
  SCHEDULING_POLICY_FAIR_SHARE = 2; // prefer owners with fewer active environments, then older requests
}
```
