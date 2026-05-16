---
owning-stage: "~devops::verify"
title: "Runner integration for CI Steps."
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_steps/runner-integration/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---

## 非目標

この提案は、ターゲット環境への Step Runner バイナリのデプロイメントや、以下に説明する Step Runner gRPC サービスの起動には対応しません。提案の残りの部分は、Step Runner バイナリがターゲット環境に存在し、gRPC サービスが実行されてローカルソケットでリッスンしていることを前提としています。同様に、この提案は `Step Runner` サービスのライフサイクル管理、サービスが死んだ場合の再起動方法、またはアップグレードの処理には対応しません。

関連するブループリントは [Deployment and Lifecycle Management](service-deployment.md) を参照してください。

## Steps Service gRPC 定義

Step Runner サービスの gRPC 定義は以下の通りです:

```proto
service StepRunner {
    rpc Run(RunRequest) returns (RunResponse);
    rpc FollowSteps(FollowStepsRequest) returns (stream FollowStepsResponse);
    rpc FollowLogs(FollowLogsRequest) returns (stream FollowLogsResponse);
    rpc Finish(FinishRequest) returns (FinishResponse);
    rpc Status(StatusRequest) returns (StatusResponse);
}

message Variable {
    string key = 1;
    string value = 2;
    bool file = 3;
    bool masked = 4;
}

message Job {
    repeated Variable variables = 1;
    string job_id = 2;
    string pipeline_id = 3;
    string build_dir = 4;
    repeated string token_prefixes = 5;
}

message Masking {
    repeated string phrases = 1;
    repeated string token_prefixes = 2;
}

message RunRequest {
    string id = 1;
    string work_dir = 2;
    map<string,string> env = 3;
    Masking masking = 4;
    Job job = 5;
    string steps = 6;
}

message RunResponse {
}

message FollowStepsRequest {
    string id = 1;
}

message FollowStepsResponse {
    StepResult result = 1;
}

message FollowLogsRequest {
    string id = 1;
    int32 offset = 2;
}

message FollowLogsResponse {
    bytes data = 1;
}

message FinishRequest {
    string id = 1;
}

message FinishResponse {
}

message Status {
    string id = 1;
    bool finished = 2;
    int32 exit_code = 3;
    google.protobuf.Timestamp start_time = 4;
    google.protobuf.Timestamp end_time = 5;
}

message StatusRequest {
    string id = 1;
}

message StatusResponse {
    repeated Status jobs = 1;
}
```

Runner は上記の gRPC サービスを通じて Step Runner と対話します。このサービスは実行環境のローカルソケット上で起動します。Runner はまずエグゼキューター固有のプロトコルを介してターゲット環境に接続し、次に提供された `proxy` コマンドを使用して `gRPC` サービスに接続し、Runner から Step Runner への `gRPC` リクエストを透過的にトンネルします（[Proxy コマンド](#proxy-コマンド)を参照）。これは Nesting が専用の Mac インスタンスで gRPC サービスを提供するのと同じ方法です。このサービスには 5 つの RPC（`Run`、`FollowSteps`、`FollowLogs`、`Finish`、`Status`）があります。

`Run` はステップの初期配信です。`FollowSteps` はステップ結果トレースのストリーミングレスポンスをリクエストします。`FollowLogs` は同様に、ステップの実行の一部として実行されるプロセスが書き込む出力（`stdout`/`stderr`）と Step Runner 自体が生成するログのストリーミングレスポンスをリクエストします。`Finish` はリクエストの実行を（まだ実行中の場合）停止し、できるだけ早くリソースをクリーンアップします。`Status` は指定されたジョブのステータス、またはジョブが指定されていない場合は Step Runner サービスのすべてのアクティブなジョブ（完了したが `Finish` されていないジョブを含む）のステータスを一覧表示します。`Status` は例えばクラッシュ後に Runner が回復するために使用できます。

Step Runner gRPC サービスは複数の `Run` ペイロードを同時に実行できます。つまり、`Run` への各呼び出しは新しいゴルーチンを開始し、完了するまでステップを実行します。`Run` への複数の呼び出しを同時に行うことができます。

ステップが実行されるにつれて、ステップ結果トレースとサブプロセスのログを GitLab Runner にストリームバックできます。これにより Runner（または任意の呼び出し元）が実行を追跡できます。ステップ結果トレースについてはステップレベルで（`FollowSteps`）、サブプロセスと Step Runner のログについては書き込まれたとおりに（`FollowLogs`）追跡できます。ログは[特定のフォーマット](#ログフォーマット)で書き込まれ、機密トークンは Step Runner によって Runner にストリームされる前に[マスク](#マスキング)されます。

`Status` を除くすべての API は冪等です。つまり、同じパラメーターで同じ API を複数回呼び出しても同じ結果が返されます。例えば、同じ `id` で `Run` が複数回呼び出された場合、最初の呼び出しのみがジョブリクエストの処理を開始し、後続の呼び出しは成功ステータスを返しますが、それ以外は何もしません。同様に、同じ `id` で `Finish` を複数回呼び出すと、最初の呼び出しで関連するジョブが終了して削除され、後続の呼び出しでは何もしません。

サービスはクライアントが正しく動作することを前提としてはならず、`Follow` API のいずれかを呼び出さないクライアントや途中で接続を切断するクライアント、また対応する `Run` リクエストに対して `Finish` を呼び出さないクライアントを処理できる必要があります。このため、`Step Runner` プロセスは定期的にスキャンを実行して、古いジョブやランアウェイ/スタックしたジョブを特定して削除する必要があります。古いジョブとは、一定時間前に完了したジョブ（`Finish` されていない）です。ランアウェイジョブとは、出力を生成せずに長い時間実行されているジョブです。

最後に、ステップを以下の Runner エグゼキューターに統合することを容易にするために、ステップは `Run`/`Follow*`/`Finish` API の実行を調整し、`Follow*` 呼び出しが接続を失った場合に step-runner サービスへの再接続を処理するためのクライアントライブラリを提供することが推奨されます。

## RunRequest パラメーター

ステップは [step.go](https://gitlab.com/gitlab-org/step-runner/-/blob/main/schema/v1/step.go) の JSON シリアライズ版として `RunRequest.Steps` フィールドで Step Runner に配信されます。Runner 自体によるステップ定義の処理は不要です。`id` フィールドは `Step Runner` サービスで実行される各リクエストを一意に識別します。`RunRequest.Env` フィールドには、各ステップが実行される際に環境に注入される環境変数が保持されます。

オプションの `Job` パラメーターには対応する CI ジョブの選択されたパラメーターが含まれます。`Job` には対応する CI ジョブのビルドディレクトリが含まれます。`Job.BuildDir` は `RunRequest.WorkDir` にコピーされ、リクエストのすべてのステップはそのディレクトリで実行されて既存のジョブスクリプトの動作が保持されます。`RunRequest` には CI ジョブの環境変数（CI 設定のジョブおよびグローバルレベルで定義された `variables`）も含まれます。Runner が `RunRequest` を行う場合、変数は `Job.Variables` に含まれる必要があり、`RunRequest.Env` は空のままにしておく必要があります。実行リクエストが処理されると、ファイル型変数はファイルに書き込まれ、変数は展開されて `RunRequest.Env` にコピーされ、`Job` フィールドはリクエストの残りから破棄されます。変数は実行環境内のオブジェクト（他の環境変数やパスなど）を参照する可能性があるため、Step Runner サービスによって展開される必要があります。これにはファイル型変数も含まれ、従来の Runner ジョブ実行と同じパスに書き込まれる必要があります。同様に、`Job.Variables` からマスクすべきフレーズを抽出して `Masking.Phrases` を埋め、`Job.TokenPrefixes` を `Masking.TokenPrefixes` にコピーする必要があります。

Runner 以外のクライアントがステップを実行したい場合、`Job` フィールドを省略でき、その場合 `Masking` と `Env` フィールドは呼び出し元が直接埋める必要があります。

## ログフォーマット

`FollowLogs` API が発行するログ行は次のフォーマットを持つ必要があります:

```plaintext
    <timestamp> <stream> <stdout/stderr> <append flag> <message>
```

これは[このマージリクエスト](https://gitlab.com/gitlab-org/gitlab-runner/-/merge_requests/4591)で Runner に導入されたのと同じログフォーマットです。このフォーマットを生成するために使用されるロギングライブラリは `GitLab Runner` と `Step Runner` の間で共有される必要があります。

## マスキング

`Step Runner` は機密変数またはトークンのマスキングを担当します。これは生のログメッセージが上記のログフォーマットにフォーマットされる前に行われる必要があります。変数のマスキングに使用されるライブラリは `GitLab Runner` と `Step Runner` の間で共有される必要があります（関連する[モジュール](https://gitlab.com/gitlab-org/gitlab-runner/-/blob/main/helpers/trace/internal/tokensanitizer/token_masker.go)[を参照](https://gitlab.com/gitlab-org/gitlab-runner/-/blob/main/helpers/trace/internal/masker/masker.go)）。

## Proxy コマンド

`Step Runner` バイナリには、（一般的にテキストベースの）`stdin`/`stdout`/`stderr` ベースのプロトコルから gRPC サービスへのデータをプロキシするコマンドが含まれます。このコマンドは gRPC サービスと同じホストで実行され、`stdin` から入力を読み取り、ローカルソケットを通じて gRPC サービスに転送し、同じソケットを通じて gRPC サービスから出力を受け取り、`stdout`/`stderr` を通じてクライアントに転送します。このコマンドにより、クライアント（Runner など）は SSH や `docker exec` などの `stdin`/`stderr`/`stdout` ベースのプロトコルを介して `gRPC` サービスに透過的にトンネルできます。これにより、Docker イメージで Step Runner サービスの gRPC ポートを公開したり、VM で SSH ポートフォワーディングを設定する必要がなくなり、Runner は確立されたプロトコル（SSH や `docker exec`）を使用して `Step Runner` と対話できます。`stdout` は `Step Runner` サービスからの応答を書き込むために使用し、`stderr` は `proxy` コマンド自体から発生するエラーのために使用する必要があります。

## エグゼキューター

GitLab Runner が各 Runner エグゼキューターで Step Runner に接続する方法を示します:

### インスタンス

インスタンスエグゼキューターは現在と同様に SSH 経由でアクセスされます。ただし、bash シェルを起動してコマンドをパイプインする代わりに、[proxy コマンド](#proxy-コマンド)を呼び出します。このコマンドは既知の場所にある Step Runner ソケットに接続します。Runner はその後 `gRPC` 呼び出しを直接行い、`SSH` 接続を通じて透過的に `gRPC` サービスにトンネルできます。これは Runner が専用の Mac インスタンスで VM を作成するために Nesting サーバーを呼び出す方法と同じです。

これには Step Runner がジョブ実行環境に存在して起動していることが必要です。

### Docker

同じ要件（Step Runner が存在し gRPC サービスが実行されている）は Docker エグゼキューター（および `docker-autoscaler`）にも当てはまります。ただし、コンテナ内の gRPC サービスに接続するために、Runner はコンテナに `docker exec` してプロキシコマンドを実行し、コンテナ内の gRPC サービスに接続します。クライアントはその後 `docker exec` の `stdin` に書き込めます。これは透過的に gRPC サービスにプロキシされ、gRPC サービスからの応答を含む `stdout/stderr` から読み取れます。

### Kubernetes

Kubernetes ノードの Kubelet は、実行中の Pod のコンテナでプロセスを開始する exec API を公開しています。これを使用して `exec create` ブリッジプロセスを作成し、Docker エグゼキューターと同様に呼び出し元が Pod 内で `gRPC` 呼び出しを行えるようにします。

この保護された Kubelet API にアクセスするには、Pod の exec サブリソースを提供する Kubernetes API を使用する必要があります。呼び出し元は `/exec` が末尾に付いた Pod の URL に POST して、双方向バイトストリーミングのために SPDY プロトコルへの接続をネゴシエートできます。したがって GitLab Runner は Kubernetes API を使用して Step Runner サービスに接続してジョブペイロードを配信できます。

これは `kubectl exec` の動作方法と同じです。実際、SPDY ネゴシエーションなどの内部の多くは `client-go` ライブラリとして提供されています。そのため、Runner は kubectl にシェルアウトするのではなく、必要なライブラリをインポートして Kubernetes API を直接呼び出せます。

歴史的に Kubernetes エグゼキューターの弱点の一つは、単一の exec を通じてジョブ全体を実行することでした。これを軽減するために Runner は既存のシェルプロセスに「再接続」して中断したところから再開できる attach コマンドを使用します。

ただし、Step Runner ではこれは必要ありません。exec は長時間実行する gRPC プロセスへのブリッジを確立するだけだからです。接続が切断された場合、Runner は別の接続を exec して `follow` などの RPC 呼び出しを続けることで「再接続」するだけです。
