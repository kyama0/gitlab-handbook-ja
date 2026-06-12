---
title: "GitLab CD: Deployment Execution"
status: proposed
creation-date: "2026-03-25"
authors: [ "@josephburnett" ]
coach: []
approvers: []
owning-stage: "~devops::deploy"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_cd/cd_execution/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
lastmod: 2026-06-11T13:14:37-07:00
translated_at: "2026-06-11T00:00:00Z"
translator: claude
stale: false
model: claude-opus-4-7
---

{{< engineering/design-document-header >}}

このドキュメントは、Argo Rollouts を用いた GitLab CD の Beta 版デプロイ実行パスについて説明します。オンボーディング（Environment 接続、application-environment のセットアップ、マニフェスト検証）、協調的なマルチサービスデプロイ（SHA ピン留め、パラメータオーバーライド、カナリア進行）、そして任意の過去の VersionSet へのロールバックを扱います。

これは Deployment Execution チームのドキュメント、すなわち実行レイヤーのドキュメントです。Rails のドメインモデルは GitLab CD: Rails で説明されています。本ドキュメントではそれを再説明しません。デプロイフローが必要とするドメインエンティティ（`VersionSet`、`Environment`、`Rollout`、`Deployment`）を参照しつつ、それ以外はクラスターに対して実行される内容に焦点を当てます。

Argo CD Core と Argo Rollouts は **前提条件** です。クラスターオペレーターがそれらをインストールします。GitLab CD は GitLab Agent for Kubernetes（`agentk`）を通じて稼働中のクラスターに接続します。コントローラーのインストールや管理は行いません。これは意図的なスコープ境界です。私たちは Environment をオンボードしますが、それらをプロビジョニングはしません。

Argo Rollouts は、プログレッシブデリバリーのための Kubernetes コントローラーです。GitLab はロールアウト戦略を所有します。Argo Rollouts は `ReplicaSet` のメカニクスを所有します。Argo CD Core は GitOps のリコンサイラーです。これは Git の状態をクラスターに同期します。GitLab CD は Argo CD を特定のコミット SHA にピン留めし、いつ進めるかを制御します。リコンサイラーが自動同期することはありません。

デプロイのアクチュエーションは **Deploy Driver** を通じて実行されます。Deploy Driver は KAS にロードされるバイナリではありません。Ruby gem として配布される宣言的なデータです。すなわち、マニフェスト、`Starlark` ワークフローのセット、そして 2 つの config スキーマです。マニフェストはエントリーポイントです。ドライバーに名前を付け、ドライバーがどのパイプラインステップを実行できるかを宣言し、ワークフローおよびスキーマファイルを指し示します。Beta 版ではちょうど 1 つのドライバー、すなわち Argo Rollouts ドライバーが存在し、これは Deployment Execution チームが構築し、モノリスがインポートします。詳細は後述します。

クラスターに触れるすべての処理（オンボーディング、デプロイ、観測）は AutoFlow ワークフローとして実行されます。Rails はドメインモデルを所有します。AutoFlow は実行を所有します。イベントがそれらを接続します。

これは [GitLab CD System](../gitlab_cd/) 設計のサブドキュメントです。[Application Entity PRD](https://gitlab.com/groups/gitlab-org/-/work_items/21247)、[AutoFlow engine](https://gitlab.com/groups/gitlab-org/-/work_items/21235)、および [GitLab Events Platform](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18106) について理解していることを前提とします。

## 課題 {#the-problem}

GitLab CD は、ワークロード定義を所有することなく、また GitLab CI や GitLab のソース管理を必須とすることなく、プログレッシブロールアウト、ヘルス観測、そして人間が介在する承認とともに Kubernetes へデプロイする必要があります。

デプロイ先は Kubernetes クラスター内の Argo `Rollout` CR です。ワークロード定義は Git リポジトリに存在します。Beta 版ではリポジトリは GitLab ホスト型です。外部フォージ（GitHub、Bitbucket）はゴールであり、その多くはファイルの読み取りとコミットのための API を公開しているため、`git` バイナリが必要になることはまれですが、必要な場合には一部の Function は Runner スタイルの実行環境を必要とします。Argo CD Core は Git の状態をクラスターの状態にリコンサイルします。GitLab Agent for Kubernetes（`agentk`）はクラスター接続とイベント観測を提供します。AutoFlow はワークフローをオーケストレーションします。

ワークロード定義（コンテナの引数、リソース制限、マニフェストそのもの）は外部にあり、GitLab CD にとって不透明です。これはユーザーの Git リポジトリ内、ドライバーの背後に存在します。Rails が決してモデル化することはありません。

## アーキテクチャ {#architecture}

### 構成原則 {#organizing-principle}

GitLab CD は、*どのバージョン* を *どこで* 実行し、*どのようにロールアウトするか* を決定します。リコンサイラーは特定のコミットにピン留めされた単純な適用器です。ユーザーは自身のリポジトリ、自身の Git ワークフロー、自身のマニフェスト構造を所有します。GitLab CD はデプロイのライフサイクルを所有します。

### 実行に関連するドメインエンティティ {#execution-relevant-domain-entities}

完全なドメインモデルは GitLab CD: Rails に存在します。デプロイフローはそのうち 4 つの概念を必要とします。

- **VersionSet** — `(Version, Service)` ペアのイミュータブルなセット。Rollout は 1 つの VersionSet をプロモートします。Rollout の進行に応じて変化することはありません。
- **Environment** — 名前付きのデプロイ先（development、staging、production）。Rails はこれに対してバージョン管理されたドライバーバインディングを保存します。すなわち `driver_ref` と不透明な `driver_config` blob（Environment config。Argo ドライバーの場合はクラスター agent id）です。
- **Rollout** — 1 つの VersionSet を、単一の AutoFlow ワークフローのもとで 1 つ以上の Environment（staging、次に production、次に…）にわたってプロモートし、完了するまで environment から environment へ移動します。Rollout は作成時に、その VersionSet、パイプライン（flow definition）バージョン、ドライバーバインディングをピン留めします。それらすべてがイミュータブルです。
- **Deployment** — `(service, environment)` ごとのアクチュエーション。状態はドメインイベントによって駆動されます。

ロールバックは新しい Rollout であり、既存の Rollout 上の状態ではありません。ユーザーは過去の VersionSet をターゲットとする新しい Rollout を作成します。古い Rollout のレコードが変更されることは決してありません。

### イベントパス {#event-paths}

3 つの別個のイベントパスがあります。それらが交差することはありません。

**Registry events** は、Events Platform を通じて Sidekiq ワーカーに流れます。これらは CD テーブル内に Version と VersionSet を作成します。AutoFlow は関与しません。

**Cluster events**（Argo `Rollout` の status 変化、Argo CD `Application` の sync status）は、`agentk` から AutoFlow へ流れます。ドライバーの `Starlark` が `k8s.watch`（push）または `k8s.get`（poll）を呼び出し、Function は `agentk` を通じてオブジェクトに到達します。AutoFlow が唯一のコンシューマーです。生のクラスター状態を解釈する他のシステムはありません。他のコンシューマーが必要とする場合は、後でこれらを Events Platform 経由でルーティングできます。

**CD domain events** は、AutoFlow から Events Platform を通じて Sidekiq ワーカーに流れます。これらは CD テーブル内の状態を更新し、ダッシュボードを駆動し、監査ログに供給します。これらは実装非依存であり、Kubernetes の用語ではなく CD の用語で何が起きているかを記述します。

注: イベントは一時的なトランスポートです。CD Rails テーブルがシステムオブレコードです。CD が履歴のためにイベントプラットフォームをリプレイすることはありません。ドメインイベントがテーブルを更新し、テーブルが真実を保持します。

```text
Registry events:
  Artifact Registry -> webhook/poll -> Events Platform -> Sidekiq -> CD tables
  (Version, VersionSet creation. No AutoFlow.)

Cluster events:
  agentk -> k8s.watch / k8s.get (CD Function) -> AutoFlow (sole consumer)
  (Argo Rollout phase changes. The driver Starlark subscribes or polls.)

CD domain events:
  AutoFlow -> Events Platform -> Sidekiq -> CD tables
  (rollout.started, deployment.started, gate_reached, healthy, etc.)
  (Same path as registry events. Implementation-agnostic.)
```

### Rails から AutoFlow へのインターフェイス {#rails-to-autoflow-interface}

Rails は、KAS 上の `StartWorkflow` gRPC エンドポイントを通じて AutoFlow と通信します。これは命令的なインターフェイスです。すなわち「ここにワークフローがある、それを実行せよ」です。

```protobuf
service AutoFlow {
  // Reactive: match event to handlers in a flow project.
  rpc CloudEvent(CloudEventRequest) returns (CloudEventResponse);

  // Imperative: run a workflow.
  rpc StartWorkflow(StartWorkflowRequest) returns (StartWorkflowResponse);
}

message StartWorkflowRequest {
  string workflow_id = 1;           // caller-chosen, for idempotency
  bytes starlark = 2;               // the driver's deployment workflow
  map<string, string> secrets = 3;  // Git credentials, registry tokens — resolved live by reference
}

message StartWorkflowResponse {
  string workflow_id = 1;           // confirmed, stored
}
```

既存の `CloudEvent` RPC はリアクティブです。イベントを送信すると、AutoFlow がそれを flow project 内で定義されたハンドラーにマッチさせます。`StartWorkflow` は異なります。Rails はドライバーの `Starlark` を直接サブミットします。AutoFlow はそれを実行するだけです。

呼び出しは同期的ですが高速です。ワークフローが永続化された時点で返り、完了した時点ではありません。これがトランザクション契約です。200 が返されれば、そのワークフローが何らかの形で、非同期に処理されることがわかります。Rails はそれをトリガーしたエンティティ（Environment、Rollout）に `workflow_id` を保存します。ワークフローの実行に伴い、ドメインイベントが Events Platform を通じて戻ってきます。

`workflow_id` は冪等性のために呼び出し側が選択します。KAS が永続化と応答の間でクラッシュした場合、Rails は同じ ID でリトライします。

### `Starlark` はコンパイルターゲットではなくインタープリターである {#the-starlark-is-an-interpreter-not-a-compiler-target}

Beta 版には汎用的な YAML/JSON-to-`Starlark` コンパイラはありません。私たちは create 時にインテントをターゲット固有のプログラムへ変換しません。

その代わり、ドライバーは手書きのターゲット固有な `Starlark` ワークフローを 1 つ配布します。それは実行時に入力（VersionSet、Environment config、Application-Environment config、パイプライン config）を *解釈* します。同じ `Starlark` が、Argo ドライバーを使用するすべての Rollout に対して実行されます。それは config を読み取って動作します。Rollout ごとのコード生成はありません。

これにより可動部品が誠実に保たれます。異なるデプロイメカニズムは、独自の手書き `Starlark` と独自の config スキーマを持つ異なるドライバーであり、新しいコンパイラバックエンドではありません。汎用的なコンパイルは将来の可能性であり、Beta 版ではありません。

### イベントの冪等性 {#event-idempotence}

すべてのアクティビティは冪等でなければなりません。ワークフローの保証は常に at-least-once です。

あるアクティビティがイベントを emit し、Rails がそれを処理したが、AutoFlow がアクティビティ結果を記録する前にクラッシュした場合、リプレイ時にイベントが再 emit されます。Rails も冪等でなければなりません。イベントは具体性によって冪等性を達成します。`gate_reached` は `deployment_id + weight` を保持するため、「Deployment X が 25% ゲートに到達した」を 2 回処理しても no-op になります。イベントの内容そのものが冪等性キーです。別個の重複排除インフラは不要です。

注: `emit` は（`run` を通じて呼び出される）アクティビティでなければならず、裸の関数呼び出しであってはなりません。さもなければリプレイがイベントを再 emit してしまいます。アクティビティキャッシュがそれを冪等にします。私たちは「ゲート N を越えて進め」と言い、「次のゲートへ進め」とは決して言いません。具体的なターゲットこそがリプレイを安全にするものです。

## Deploy Driver {#the-deploy-driver}

Deploy Driver は、Ruby gem として配布される宣言的なデータです。マニフェストはエントリーポイントです。

```json
{
  "ref": "argo-rollouts",
  "supported_pipeline_steps": ["deploy", "pause", "approval", "analysis"],
  "environment_schema": "environment.json",
  "application_environment_schema": "application_environment.json",
  "workflows": {
    "onboarding": "onboarding.star",
    "application_environment_setup": "app_env_setup.star",
    "deploy": "deploy.star"
  }
}
```

それは以下を保持します。

1. **マニフェスト。** ドライバーに名前を付け、ドライバーが実行できるパイプラインステップ（`supported_pipeline_steps`）を宣言し、ワークフローおよびスキーマファイルを指し示します。Rails は、パイプラインが作成される際に、そのステップが `supported_pipeline_steps` のサブセットであることを検証するため、不一致はデプロイの途中ではなく作成時に失敗します。
2. **`Starlark` ワークフローのセット。** オンボーディング、application-environment セットアップ、デプロイは別個のワークフローです。これらは AutoFlow 上で実行され、config と VersionSet を読み取り、組み込みの CD Functions を呼び出してクラスターに対してアクチュエートします。
3. **Environment config スキーマ。** ドライバーが environment に到達するために必要なもの、すなわち environment レベルの接続です。Argo ドライバーの場合はクラスター agent id です。UI は Environment ごとに 1 回これを収集します。Rails はそれを Environment のドライバーバインディング上の不透明な `driver_config` として保存します。
4. **Application-Environment config スキーマ。** 与えられた application を与えられた environment にデプロイするとはどういうことかを表すもの。Argo ドライバーの場合は、ロールアウト戦略、そしてロードバランシングが有効かどうかとどの種類かです。UI はこれを `(application, environment)` ペアごとに収集します。1 つの application は複数の environment にデプロイでき、それぞれ異なる config を持ちます。

Beta 版ではちょうど 1 つのドライバー、すなわち Argo Rollouts ドライバーが存在し、これは Deployment Execution チームが構築し、モノリスがインポートします。Rails はマニフェストとスキーマを読み取り、リフレクションによって config UI をレンダリングし、ユーザー入力をそれらに対して検証し、ワークフローを AutoFlow にサブミットします。gem は CD Rails モデルから厳密に分離されたままです。Rails がドライバー内部に手を伸ばすことはなく、ドライバーがドメインモデルに手を伸ばすこともありません。

### 組み込み CD Functions {#the-built-in-cd-functions}

ドライバーの `Starlark` は、小さな組み込み CD Functions のセットを呼び出します。これらは古い `cd.deploy.*` 組み込み Functions を置き換えます。汎用的な deploy インターフェイスも go-plugin もありません。Beta 版では Functions は Go であり、GitLab Relay に直接インポートされ、in-process で実行されます。これらは gRPC ではなく、OCI や remote Functions はまだありません。それらは後回しにされています。（agent#883 と epic [&22116](https://gitlab.com/groups/gitlab-org/-/work_items/22116) を参照。）

| Function | 目的 |
|---|---|
| `git.read_file` | Git リポジトリの ref からファイルを読み取ります — 例えば Argo の `Rollout` または `Application` マニフェスト。 |
| `git.commit` | Git リポジトリにファイル変更をコミットします（GitOps リポジトリを desired state に更新します）。新しい SHA を返します。 |
| `argo.sync` | Argo CD の `Application` に特定の SHA へ同期するよう指示します。auto-sync はオフであり、CD が状態を SHA から SHA へ進めます。 |
| `argo.promote` | Argo `Rollout` を pause/stop ポイントを越えて進めます。冪等でなければなりません — stop ポイントは識別可能なため、リプレイが二重に進めることはありません。 |
| `k8s.get` | `agentk` を通じて Kubernetes オブジェクトを取得します。Beta 版ではここで約 30 秒のポーリングループを使用します。 |
| `k8s.watch` | `agentk` を通じた Kubernetes オブジェクトイベントへのプッシュベースのサブスクリプション。Beta 版では `k8s.get` ポーリングの後回しにされています。 |

`emit` がこのセットを締めくくります。これは CD ドメインイベントを Events Platform に publish します。リプレイの冪等性のため `run` を通じて呼び出されます。

### ドライバーがデプロイをアクチュエートする仕組み {#how-the-driver-actuates-a-deployment}

GitOps の状態は SHA から SHA へ進みます。ドライバーは `git.read_file` で現在のマニフェストを読み取り、desired state を計算し（VersionSet からイメージバージョンをピン留めし、Application-Environment config から `spec.strategy` を生成する）、`git.commit` でそれをコミットし、`argo.sync` で Argo CD に新しい SHA へ同期するよう指示します。そこから Argo `Rollout` CR を観測し、`argo.promote` で各 pause ポイントを越えて進めます。

注: `argo.promote` は冪等でなければなりません。stop ポイントは識別可能であるため、すでに進行済みのロールアウトに対して promote を再実行するリプレイは no-op になります。これがカナリアメカニズムです。コントローラーは各ステップで無期限に pause し、ドライバーがその特定の stop ポイントを越えて promote したときにのみ進みます。

### トレードオフ: パラメータオーバーライド対純粋な GitOps {#tradeoff-parameter-overrides-versus-pure-gitops}

Argo ドライバーは、イメージバージョンをコミットする代わりに、Argo CD のパラメータオーバーライドを通じて設定できます。これらは sync 時にレンダリングされ、Helm、Kustomize、プレーン YAML で動作します。ドライバーはユーザーのリポジトリ構造を理解する必要がありません。

トレードオフ: パラメータオーバーライドは Git に保存されないため、ソースリポジトリがデプロイ済みの内容を正確に反映しません。Argo CD 自身のドキュメントは、これが純粋な GitOps においてはアンチパターンとみなされると指摘しています。GitLab CD のテーブルは、すべての Deployment について SHA と変数値（secret を除く）をスナップショットし、完全な point-in-time の監査記録を提供します。コミット状態パス（`git.commit` 後に `argo.sync`）は GitOps として純粋な代替手段です。同じドライバーで、Application-Environment config がどちらかを選びます。

### 将来の拡張: owned branch モデル {#future-extension-owned-branch-model}

SHA ピン留めは、将来の「owned branch」モデルの基盤です。これは、GitLab CD が独自のデプロイブランチを保持し、独自のスケジュールでユーザーのソースブランチからマージし、リコンサイラーをそのブランチ上の SHA にピン留めするものです。ドライバーの Functions は変わりません。`git.commit` と `argo.sync` が単に異なるブランチに対して動作するだけです。

## Rails と Deployment Execution の間のインターフェイス {#the-interface-between-rails-and-deployment-execution}

このインターフェイスはバイナリ API ではなく、スキーマのセットです。3 つのスキーマが契約を定義します。

- **パイプライン config スキーマ**（後述）。
- **Environment config スキーマ**。
- **Application-Environment config スキーマ**。

2 つのドライバー config スキーマは、UI アノテーション付きの JSON Schema です。`gitlabUi` キーワードが `widget`、`label`、`description`、`enumLabels` を保持します。ウィジェットには、agent ピッカー、text/number/checkbox/select、そして JSON Schema の `if`/`then` を通じた条件付きフィールドが含まれます。Rails はこれらのスキーマをリフレクションすることで config UI をレンダリングし、ユーザー入力をそれらに対して検証します。フィールドの意味を理解することはありません。

Deployment Execution チームが 3 つのスキーマすべてを定義します。Rails のドキュメントが完全なアノテーション語彙を所有します。GitLab CD: Rails を参照してください。ここでは契約を述べれば十分です。Deployment Execution がスキーマを定義し、Rails がリフレクションによってそれらをレンダリング・検証し、どちらの側も相手のフィールドをハードコードしません。

### パイプライン config {#pipeline-config}

パイプライン config は、汎用的でドライバー不変なデータ構造です。これは、任意のドライバーから分離された独自の gem に存在し、Deployment Execution チームが所有し、ドライバー gem が依存します。ドライバーの `supported_pipeline_steps` は、この gem が定義するステップ型から引かれます。ステップ型を追加するには、それをパイプライン gem に追加します。ドライバーは、自身のワークフローがそれを実行できるようになった時点でオプトインします。スキーマはすべてのパイプライン、すべてのドライバーで同じです。Argo 固有のパイプライン config はありません。

パイプラインの **deploy ノード** は 2 つのものを保持します。すなわち、汎用的な CD パラメータ（どの Environment か、順序、ゲート）と、**不透明な Application-Environment config blob** を保持するスロットです。Argo ドライバーの場合、それはトラフィック分割戦略とロードバランシングの選択です。Rails はその blob を、ドライバーの Application-Environment スキーマに対してレンダリング・検証する以上には内省しません。blob は別個のテーブルではなく、deploy ノード内に埋め込まれて存在します。

したがって分担はクリーンです。パイプライン構造は汎用的で Rails がそれを理解します。ノードごとの deploy config はドライバー固有で、Rails はそれをリフレクションによって検証される不透明なデータとして扱います。

## オンボーディング {#onboarding}

オンボーディングには 2 つのフェーズがあります。Rails がドメインエンティティを作成し（同期的、トランザクショナル）、次に AutoFlow が接続性を検証しユーザーの設定を検証します（非同期、永続的、ポリシー統制）。何もインストールされず、最初のデプロイまでクラスター内に何も作成されません。

### フェーズ 1: ドメインエンティティの作成 (Rails) {#phase-1-domain-entity-creation-rails}

ユーザーがオンボーディングフォームに入力します。Rails は 1 つのトランザクションでドメインエンティティ（Application、artifact ソースを持つ Service、Environment、Environment ごとのドライバーバインディング）を作成します。ドライバーバインディングは、`driver_ref` と、ドライバーの Environment config スキーマをリフレクションして UI が収集した Environment config を保持します。完全なエンティティモデルは GitLab CD: Rails にあります。

すべてのエンティティが即座に存在します。ただ、まだ ready でないだけです。

### フェーズ 2: environment のオンボーディング (AutoFlow) {#phase-2-environment-onboarding-autoflow}

Rails がドライバーのオンボーディングワークフローをサブミットします。Argo ドライバーの場合、`agentk` の接続性をチェックし、両方のコントローラーが稼働中であることを確認します。これは、よく知られたオブジェクトに対する `k8s.get` を通じて行われます。

```starlark
result = run("k8s.get", {
    "agent_id": environment.agent_id,
    "kind": "Deployment",
    "namespace": "argo-rollouts",
    "name": "argo-rollouts",
})

if not result.found:
    run("emit", {
        "type": "com.gitlab.cd.environment.not_ready",
        "data": {"environment_id": environment.id, "reason": "argo-rollouts controller not found"},
    })
    fail("argo-rollouts controller not found")

run("emit", {
    "type": "com.gitlab.cd.environment.ready",
    "data": {"environment_id": environment.id},
})
```

異なるドライバーは異なるものをチェックします。Lambda ドライバーであれば IAM 認証情報とリージョンアクセスを検証します。ドメインモデルはそれを知らず気にもしません。ただドライバーバインディングを保存し、ドライバーの `Starlark` をサブミットするだけです。

ユーザーに代わってコントローラーをインストール・管理することはスコープ外です。そのパスは以前に失敗しています（GMA v1/v2）。私たちは、所有していないクラスターをまたいだ数千のインストールを運用するキャパシティを持たず、ユーザーは私たちが診断できない問題について私たちを責めることになります。GitLab CD は Environment に接続します。それらをプロビジョニングはしません。

### フェーズ 3: application-environment のセットアップ (AutoFlow) {#phase-3-application-environment-setup-autoflow}

Environment が ready になると、ドライバーは各 application のマニフェストを宣言された service に対して検証します。Git からマニフェストを読み取り、Argo `Rollout` CR をパースします。

```starlark
manifest = run("git.read_file", {
    "repo_url": app_env.manifest_repo_url,
    "ref": app_env.manifest_ref,
    "path": app_env.manifest_file_path,
})

rollout = parse_yaml(manifest)
declared = [s.container_name for s in app_env.services]
found = [c["name"] for c in rollout["spec"]["template"]["spec"]["containers"]]

if sorted(declared) != sorted(found):
    run("emit", {
        "type": "com.gitlab.cd.application_environment.not_ready",
        "data": {"application_environment_id": app_env.id, "reason": "container mismatch"},
    })
    fail("container mismatch")

run("emit", {
    "type": "com.gitlab.cd.application_environment.ready",
    "data": {
        "application_environment_id": app_env.id,
        "rollout_name": rollout["metadata"]["name"],
        "rollout_namespace": rollout["metadata"]["namespace"],
    },
})
```

ドライバーはマニフェストを読み取り、`Rollout` CR をパースし、そのコンテナ名が宣言された service と一致することを検証します。Rails は、後のデプロイワークフローで使用するために、発見された名前と namespace を永続化します。

既存の Argo CD `Application` の場合、セットアップワークフローは auto-sync がオフであることも確認します。GitLab CD が sync の発生タイミングを制御するため、auto-sync のままにされた Application はドライバーと衝突します。ワークフローは `spec.syncPolicy` をチェックし、自動 sync がオンの場合は `not_ready` を emit するため、不一致はデプロイの途中ではなくセットアップ時に表面化します。

Argo CD `Application` CR 自体は最初のデプロイ時に作成されます。GitLab CD が sync の発生タイミングを制御できるよう、`syncPolicy` なしで設定されます。ユーザーの Git リポジトリとワークフローは手を付けられません。

### 既存ワークロードのオンボーディング {#onboarding-existing-workloads}

SHA ピン留めにより、既存ワークロードのオンボーディングが大幅に容易になります。すでに Argo CD Application を持つユーザーは、以下を行うだけで済みます。

1. 自身の Application で auto-sync を無効にする（または GitLab CD にやらせる）。
2. GitLab CD を既存の `Application` CR に向ける。
3. GitLab CD が `targetRevision` とパラメータオーバーライドを引き継ぐ。

マイグレーションも、ダウンタイムも、リコンサイラーとの衝突もありません。ユーザーが auto-sync を元に戻した場合にドリフトを表示できるよう、GitLab CD はリコンサイルされた SHA についての更新を emit すべきです。

### ユーザーが提供するもの対 GitLab が生成するもの {#what-the-user-provides-versus-what-gitlab-generates}

| 項目 | ユーザーが提供 | GitLab が生成 |
|---|---|---|
| Argo CD Core | クラスターにインストール済み | — |
| Argo Rollouts controller | クラスターにインストール済み | — |
| Argo CD `Application` CR | マニフェストリポジトリの URL と認証情報とファイルパス | 初回デプロイ時にドライバーが作成 |
| Artifact sources | コンテナ名とレジストリ URL と認証情報 | — |
| Rollout strategy | カナリアステップ、ゲート、ロールバックポリシー（Application-Environment config） | デプロイ時にドライバーが生成する `spec.strategy` YAML |

クラスターの前提条件: 稼働中の `agentk` に加えて、Argo CD Core と Argo Rollouts がインストールされていること。それ以外のすべてはドライバーを通じて流れます。

ワークフローが失敗した場合（不正な認証情報、到達不能なクラスター、誤ったファイルパス）でも、ドメインエンティティは依然として存在します。ユーザーは UI で問題を修正してリトライします。ワークフローは失敗したステップからリプレイされます。

## ヘルスステータスの監視 {#health-status-monitoring}

デプロイワークフローは 1 つのものを観測します。すなわち Argo `Rollout` CR です。sync の確認はドライバーの関心事です。`argo.sync` は、desired SHA が Argo CD `Application` CR に適用され sync が進行中になった時点で返ります。その時点以降、ワークフローは進行のために `Rollout` CR を監視します。

### Argo Rollout のステータス {#argo-rollout-status}

`Rollout` CR はカナリア進行の詳細を提供します。

- `status.phase` — `Healthy`、`Progressing`、`Paused`、`Degraded`
- `status.currentStepIndex` — カナリアがどのゲートに到達したか
- `status.pauseConditions` — ロールアウトが pause している理由（例えば `CanaryPauseStep`）
- `status.message` — 人間が読める status

これがワークフローの状態機械を駆動するものです。`Paused` はゲートに到達したことを意味し、`Healthy` はデプロイが完了したことを意味し、`Degraded` は何かがうまくいかなかったことを意味します。

### Argo CD Application のステータス (ドライバー内部) {#argo-cd-application-status-driver-internal}

ドライバーは、`argo.sync` から返る前に与えられた SHA が sync 済みであることを確認するために、`Application` CR を内部的に使用します。`status.sync.revision` がピン留めされた SHA と一致することが、ドライバーが自身の変更が反映されたことを知る方法です。ワークフローはランタイムのヘルスのために `Rollout` CR を監視します。`Application` CR はドライバー自身の sync チェックです。

## デプロイフロー {#the-deployment-flow}

### ステップ 1: 新しいバージョンの検出 {#step-1-new-version-detected}

artifact ソースが新しいコンテナイメージバージョンを検出します。ソースはさまざまです。

- GitLab Container Registry は、Events Platform を通じて内部イベントを emit します。
- 外部レジストリ（ECR、Artifactory）は webhook を送信するか、GitLab によってポーリングされます。

イベントは [Events Platform](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18106) を通じて Rails 内の CD Sidekiq ワーカーに流れます。

ワーカーは CD テーブルを参照します。

1. このレジストリとイメージに一致する artifact ソースを持つ Service はどれか。
2. 一致する各 artifact ソースに新しい Version レコードを作成する。
3. 影響を受ける各 Application について、新しい VersionSet を組み立てる。すなわち、すべての Service について最新の Version を集める。

VersionSet がこれで利用可能になります。**まだデプロイは発生しません。** AutoFlow は関与しません。

### ステップ 2: ユーザーが Rollout を作成する {#step-2-user-creates-a-rollout}

ユーザー（またはポリシー）が、1 つ以上の Environment にわたって VersionSet をプロモートすることを決定します。これにより、状態 `Pending` の Rollout レコードが CD テーブル内に作成されます。Rollout は作成時に、VersionSet、パイプライン（flow definition）バージョン、ドライバーバインディングをピン留めします。その時点から、それらすべてがイミュータブルになります。

Rails は、`StartWorkflow` を通じて 1 つのワークフローを AutoFlow にサブミットします。すなわち、Rollout のピン留めされた config を入力とする、ドライバーのデプロイ `Starlark` です。単一のワークフローが、完了するまで environment から environment へと VersionSet をプロモートします。Rails は Rollout 上に `workflow_id` を保存します。

ロールバックも同じように動作します。ユーザーは過去の VersionSet をターゲットとする新しい Rollout を作成します。メカニズムは同一です。同じドライバー、同じワークフロー、過去の VersionSet です。すべての VersionSet が CD テーブル内に保存されているため、任意の時点へのロールバックが常に利用可能です。ロールバックが既存の Rollout を変更することは決してありません。それは新しい Rollout です。

### ステップ 3: rollout の協調 {#step-3-rollout-coordination}

Rollout ワークフローは、Environment を順番に（staging、次に production、というように）またいで VersionSet をプロモートします。1 つの Environment 内では、各 Deployment（`(service, environment)` ごとに 1 つ）のゲートを駆動し、それらすべてが各ゲートに到達するのを待ち、すべてがそろったときにのみ次のゲートに進みます。

```starlark
run("emit", {
    "type": "com.gitlab.cd.rollout.started",
    "data": {"rollout_id": rollout.id},
})

for environment in rollout.environments:
    for gate in pipeline.gates:
        for deployment in deployments_for(environment):
            advance_one(deployment, gate.weight)

        for deployment in deployments_for(environment):
            wait_for_event(
                type="com.gitlab.cd.deployment.gate_reached",
                filter={"deployment_id": deployment.id, "weight": gate.weight},
            )

        run("emit", {
            "type": "com.gitlab.cd.rollout.gate_reached",
            "data": {"rollout_id": rollout.id, "environment_id": environment.id, "weight": gate.weight},
        })

    for deployment in deployments_for(environment):
        wait_for_event(
            type="com.gitlab.cd.deployment.healthy",
            filter={"deployment_id": deployment.id},
        )

run("emit", {
    "type": "com.gitlab.cd.rollout.healthy",
    "data": {"rollout_id": rollout.id},
})
```

各 Deployment は自身のペースで進みます。soak 期間が異なり、ヘルスチェックのタイミングが異なります。Rollout は、次のゲートに移る前に Environment 内の全員が追いつくのを待ち、次の Environment に移る前に Environment が healthy になるのを待ちます。これにより、同一のタイミングを強制することなく協調が得られます。

いずれかの Deployment が `degraded` を報告した場合、ワークフローは進行を停止し、失敗を表面化します。復旧は、過去の VersionSet をターゲットとする新しい Rollout（ロールバック）です。既存の Rollout 上にロールバック状態はありません。承認は Deployment ごとではなく、Rollout レベルで発生します。

### ステップ 4: デプロイ実行 {#step-4-deployment-execution}

各 Deployment は、単一の `(service, environment)` ペアのアクチュエーションです。ドライバーの `Starlark` は現在のマニフェストを読み取り、新しいバージョンをピン留めし、コミットし、sync し、その後 Rollout 協調の指示に従って一度に 1 ゲートずつカナリアを進めます。

```starlark
run("emit", {
    "type": "com.gitlab.cd.deployment.started",
    "data": {"deployment_id": deployment.id},
})

# Read current desired state, pin the new versions from the VersionSet,
# and generate the canary strategy from the Application-Environment config.
manifest = run("git.read_file", {
    "repo_url": app_env.manifest_repo_url,
    "ref": app_env.manifest_ref,
    "path": app_env.manifest_file_path,
})
desired = pin_versions(manifest, version_set)
desired = apply_strategy(desired, app_env.config)  # opaque app-env blob, interpreted here

sha = run("git.commit", {
    "repo_url": app_env.manifest_repo_url,
    "branch": app_env.manifest_branch,
    "path": app_env.manifest_file_path,
    "content": desired,
    "message": "Deploy %s to %s" % (version_set.id, environment.name),
})

run("argo.sync", {
    "agent_id": environment.agent_id,
    "app_name": app_env.app_name,
    "app_namespace": app_env.app_namespace,
    "revision": sha,
})

while True:
    rollout_cr = run("k8s.get", {
        "agent_id": environment.agent_id,
        "kind": "Rollout",
        "namespace": app_env.rollout_namespace,
        "name": app_env.rollout_name,
    })

    phase = rollout_cr["status"]["phase"]

    if phase == "Paused":
        step_index = rollout_cr["status"]["currentStepIndex"]
        weight = pipeline.gates[step_index].weight

        run("emit", {
            "type": "com.gitlab.cd.deployment.gate_reached",
            "data": {"deployment_id": deployment.id, "weight": weight},
        })

        advance = wait_for_event(
            type="com.gitlab.cd.deployment.advance",
            filter={"deployment_id": deployment.id},
        )

        if pipeline.gates[step_index].soak_duration:
            sleep(seconds=pipeline.gates[step_index].soak_duration)

        # Idempotent: re-running against an already-advanced stop point is a no-op.
        run("argo.promote", {
            "agent_id": environment.agent_id,
            "rollout_name": app_env.rollout_name,
            "rollout_namespace": app_env.rollout_namespace,
            "step_index": step_index,
        })

    elif phase == "Healthy":
        run("emit", {
            "type": "com.gitlab.cd.deployment.healthy",
            "data": {"deployment_id": deployment.id},
        })
        break

    elif phase == "Degraded":
        run("emit", {
            "type": "com.gitlab.cd.deployment.degraded",
            "data": {"deployment_id": deployment.id},
        })
        break

    else:  # Progressing
        sleep(seconds=30)  # Beta polls; k8s.watch replaces this loop later.
```

ワークフローがクラスターに直接触れることは決してありません。ターゲット固有のすべて（カナリア戦略の生成、マニフェストのコミット、Argo CD の sync、pause を越えた進行）は、ドライバーの Functions と `Starlark` の中にあります。ワークフローは desired state を記述し、status に反応します。

`Degraded` の場合、Deployment ワークフローは emit して終了します。カナリア自体を中止することはありません。Rollout 協調が Application レベルで何をするかを決定します。典型的には失敗を表面化し、整合性を保つためにユーザーがロールバック Rollout を作成できるようにします。

#### 生成される戦略 {#the-generated-strategy}

ドライバーは、すべてのトラフィック増分が無期限の `pause: {}` でゲートされるカナリア戦略を生成します。コントローラーが自力で進むことは決してできません。

5%、25%、50%、100% にステップを持つ Application-Environment config の場合は次のようになります。

```yaml
spec:
  strategy:
    canary:
      steps:
        - setWeight: 5
        - pause: {}
        - setWeight: 25
        - pause: {}
        - setWeight: 50
        - pause: {}
        - setWeight: 100
        - pause: {}
```

各 `argo.promote` が 1 つの pause をクリアし、コントローラーを 1 ゲート進めます。promote は冪等です。stop ポイントがどの pause かを識別するため、すでにクリアされた pause に対するリプレイは何もしません。

#### 観測: 今はポーリング、後で watch {#observation-poll-now-watch-later}

Beta 版では、デプロイワークフローは `k8s.get` を用いて約 30 秒ループで `Rollout` CR をポーリングします。シンプルで、機能します。

`k8s.watch` は push による置き換えです。`agentk` を通じたサブスクリプションが `Rollout` status イベントを `signal_channel` 経由で AutoFlow に push し、ワークフローにクラスターとの密接な接続を与えます。それは Beta 版ではポーリングループの後回しになっています。それが実現すると、ループ本体は sleep する代わりにチャンネルで select し、フローの残りは変わりません。push イベントは次のようになります。

```json
{
  "specversion": "1.0",
  "type": "com.gitlab.cd.argo.rollout.status_changed",
  "source": "/agents/42/namespaces/production/rollouts/payments-api",
  "data": {
    "agent_id": 42,
    "rollout_name": "payments-api",
    "namespace": "production",
    "phase": "Paused",
    "current_step_index": 1,
    "stable_rs": "abc123",
    "current_pod_hash": "def456",
    "pause_conditions": [{"reason": "CanaryPauseStep"}],
    "abort": false
  }
}
```

### ステップ 5: ロールバック {#step-5-rollback}

ロールバックは、過去の VersionSet をターゲットとする新しい Rollout です。既存の Rollout 上にロールバック状態はなく、既存の Rollout レコードが変更されることは決してありません。ドライバーは、過去の VersionSet のバージョンで同じデプロイ `Starlark` を実行します。それは過去の desired state をコミットして sync します。Argo コントローラーは stable テンプレートを検出し、カナリアステップを実行せずに `Healthy` までファストトラックします。

ロールバックは abort とは別物です。abort はカナリアを停止し、Argo `Rollout` を `Degraded` のまま残し、新しい（失敗した）バージョンが依然として spec に存在します。ロールバックは desired state を known-good な VersionSet に再び向けます。コントローラーは stable テンプレートを認識し、即座に `Healthy` とマークします。

| 操作 | メカニズム | 結果 |
|---|---|---|
| Abort | ドライバーが `status.abort: true` をパッチします | `Degraded`。stable RS が配信します。新しいバージョンは依然として spec にあります。 |
| Rollback | 過去の VersionSet をターゲットとする新しい Rollout を作成し、コミットして sync します | `Healthy`。コントローラーが stable テンプレートを検出し、ステップをスキップします。 |
| Retry | ドライバーが `status.abort: false` をパッチします | 同じ新しいバージョンでカナリアをステップ 0 から再開します。 |

デフォルトのロールバックポリシー: 新しいロールバック Rollout は、`Failed` 時には即座に作成され、`Degraded` 時には 30 分後に作成されます（Service は起動時に一時的に不安定になることがあります）。どちらも Application レベルで設定可能です。

### Human-in-the-loop {#human-in-the-loop}

HITL は 2 つのレベルで機能します。

**ワークフロー内のインライン。** ドライバーの `Starlark` は承認ゲートを直接エンコードできます。すなわち、`com.gitlab.cd.approval.resolved` が到着するまでパークする `wait_for_event` です。ユーザーはこれをパイプライン config の一部として設定します（「50% で承認を要求する」）。

**Function 呼び出しの周りのポリシー。** AutoFlow は、すべての `run` 呼び出しでポリシー（インスタンスから organization、group、project へ継承され、加えてワークフローに埋め込まれたもの）を評価します。ポリシーは任意の Function について承認を要求できます。例えば「production に対するすべての `argo.sync` 呼び出しは承認を必要とする」です。ワークフローは透過的にパークします。

両方のメカニズムは同じプリミティブを使用します。すなわち、パークし、イベントを emit し、承認イベントを待ち、リプレイする、です。

## 組み込み Function のまとめ {#built-in-function-summary}

Beta 版ではすべての Functions が GitLab Relay 内で実行されます。すなわち Go であり、in-process でインポートされます。これらは gRPC ではありません。これらは軽量でなければなりません。Relay は共有のコントロールプレーンであり、ワークロード環境ではありません。OCI および remote Functions は後回しにされています。

AutoFlow が Runner 統合を持てば、任意の Function を Runner 環境にオフロードできます。ワークフローは変わりません。`run("argo.sync", ...)` は、Relay がそれを in-process で実行しようと、Runner にディスパッチしようと、同じように動作します。

| Function | 実行場所 | 目的 |
|---|---|---|
| `emit` | Relay -> Events Platform | CD ドメインイベントを公開します。リプレイの冪等性のため `run` を通じて呼び出されます。 |
| `git.read_file` | Relay (in-process) | Git リポジトリの ref からファイルを読み取ります。 |
| `git.commit` | Relay (in-process) | Git リポジトリにファイル変更をコミットします。新しい SHA を返します。 |
| `argo.sync` | Relay -> `agentk` | Argo CD の `Application` を特定の SHA へ同期します。 |
| `argo.promote` | Relay -> `agentk` | Argo `Rollout` を pause/stop ポイントを越えて進めます。冪等です。 |
| `k8s.get` | Relay -> `agentk` | Kubernetes オブジェクトを取得します。Beta 版ではこれでポーリングします。 |
| `k8s.watch` | Relay -> `agentk` | Kubernetes オブジェクトイベントへのプッシュサブスクリプション。Beta 版では後回しにされています。 |

## 構築すべきもの {#what-needs-to-be-built}

| コンポーネント | ステータス | 備考 |
|---|---|---|
| AutoFlow engine | 構築中 | `run`、`sleep`、`wait_for_event` を備えた永続的なワークフロー。[gitlab-org/cluster-integration/gitlab-agent#821](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/work_items/821) |
| `AutoFlow.StartWorkflow` RPC | 新規 | Rails がドライバーの `Starlark` を送信するための命令的な gRPC エンドポイント。 |
| Events Platform | 設計中 | KAS を通じた CloudEvent バス。[gitlab-com/content-sites/handbook!18106](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18106) |
| Argo Rollouts Deploy Driver (Ruby gem) | 新規 | マニフェスト、`Starlark` ワークフロー（オンボーディング、app-env セットアップ、デプロイ）、および Environment と Application-Environment の config スキーマ。Deployment Execution が構築し、モノリスがインポートし、CD モデルとは分離して保たれます。 |
| Rails の CD テーブル | 新規 | GitLab CD: Rails を参照。 |
| CD Sidekiq ワーカー | 新規 | Events Platform から CD ドメインイベントを消費し、CD テーブル内のエンティティ状態を更新します。 |
| `Gitlab::Kas::Client#start_workflow` | 新規 | `StartWorkflow` の Rails 側 gRPC クライアント。`send_autoflow_event` のパターンに従います。 |
| 組み込み CD Functions | 新規 | Beta 版では `git.read_file`、`git.commit`、`argo.sync`、`argo.promote`、`k8s.get`。`k8s.watch` は後回し。Go であり、Relay 内で in-process。[&22116](https://gitlab.com/groups/gitlab-org/-/work_items/22116) |
| `emit` Function | 新規 | CloudEvent を Events Platform に公開します。 |
| `k8s.watch` プッシュサブスクリプション | 後回し | Relay 内部から interest をプッシュし、`agentk` にイベントをプッシュバックさせ、ワークフロー終了時にクリーンアップします。Beta 版のポーリングループを置き換えます。@ash2k が実現可能であることを確認済みです。 |

## 未解決の問題 {#open-questions}

**Event-to-workflow matching.** `wait_for_event` は AutoFlow のプリミティブとして定義されていますが、受信した CloudEvent をパーク中のワークフローにマッチさせるメカニズムはまだ設計されていません。この設計はそれに依存しています。Rollout-to-Deployment 協調はイベントを使用し、承認イベントはパーク中のゲートを起こし、`k8s.watch`（実現時）はデプロイワークフローを起こします。マッチングシステム（サブスクリプションベース？ フィルタリング付きのファンアウト？ workflow id によるインデックス付き？）は、[AutoFlow](https://gitlab.com/groups/gitlab-org/-/work_items/21235) 設計の一部である必要があります。

**`k8s.watch` push subscriptions.** [Graph API](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/blob/master/doc/graph_api.md) は今日 pull ベースです。`k8s.watch` は push を必要とします。すなわち、Relay の内部からサブスクリプションを登録し、`agentk` にイベントを push して戻させ、ワークフロー終了時にクリーンアップします。@ash2k がこれが実現可能であることを確認済みです。Beta 版のポーリングループの後回しになっています。

**Argo CD Application CR creation.** ドライバーは最初のデプロイ時に `Application` CR を作成します。既存ワークロードをオンボードするユーザーは、GitLab CD を既存の CR に向けます。それが正しいデフォルトか、それともユーザーが常に CR を提供することを望むか。@gabrielengel_gl からの入力待ちです。

**Policy engine.** ポリシーは Cedar になり、Auth Stack（AUTH-014 ADR）によって評価されます。それが `run()` のインターセプトとどう整合するか（例えば「production の全 `argo.sync` 呼び出しに承認を要求する」）は、依然として別途検討中です。

**Strategy generation UI.** Rails は、ドライバーのスキーマをリフレクションして Application-Environment config UI をレンダリングします。生成される `spec.strategy` YAML は実装の詳細です。ユーザーはカナリアステップとゲート動作を設定し、YAML を設定することは決してありません。

**External Git forges.** Beta 版は GitLab ホスト型のマニフェストリポジトリをサポートします。GitHub、Bitbucket、その他のフォージはゴールです。その多くは読み取りとコミットのための API を公開していますが、認証情報モデル（personal token、project token、OAuth）、認証情報がどうスコープされるか、API では不十分な場合に `git` バイナリがどこで実行されるかは、いずれも設計作業を必要とします。secret はスキーマのスコープ外です。それらは参照によってライブで解決され、Rollout に固定されることは決してありません。

**Workload references.** Argo Rollouts は、インラインの `spec.template` だけでなく、別個の Deployment を指す `spec.workloadRef` をサポートします。Beta 版のスコープに含めるか、明示的に除外するか。@gabrielengel_gl からの入力待ちです。

**Log visibility.** 誰がデプロイログを見るか、そしてどう見るか。CD デプロイワークフローは、任意の AutoFlow ワークフローと同じ方法でログを出力するため、AutoFlow レイヤーで対処します。
