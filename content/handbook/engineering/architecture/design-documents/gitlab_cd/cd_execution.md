---
title: "GitLab CD: デプロイメント実行"
status: proposed
creation-date: "2026-03-25"
authors: [ "@josephburnett" ]
coach: []
approvers: []
owning-stage: "~devops::deploy"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_cd/cd_execution/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-11T13:14:37-07:00
translated_at: "2026-06-12T21:12:19Z"
translator: claude
stale: false
---

{{< engineering/design-document-header >}}

このドキュメントは、Argo Rollouts を使用した GitLab CD の Beta デプロイメント実行経路について記述します。オンボーディング（Environment 接続、application-environment セットアップ、マニフェスト検証）、協調的なマルチサービスデプロイメント（SHA ピン留め、パラメーターオーバーライド、カナリア進行）、そして任意の以前の VersionSet へのロールバックをカバーします。

これは Deployment Execution チームのドキュメント、つまり実行レイヤーです。Rails のドメインモデルは GitLab CD: Rails で記述されています。このドキュメントはそれを再記述しません。デプロイメントフローが必要とするドメインエンティティ（`VersionSet`、`Environment`、`Rollout`、`Deployment`）を参照し、それ以外はクラスターに対して実行されるものに焦点を絞ります。

Argo CD Core と Argo Rollouts は **前提条件** です。クラスターオペレーターがそれらをインストールします。GitLab CD は、GitLab Agent for Kubernetes（`agentk`）を通じて稼働中のクラスターに接続します。コントローラーのインストールや管理は行いません。これは意図的なスコープの境界です。私たちは Environment をオンボードしますが、それらをプロビジョニングしません。

Argo Rollouts は、プログレッシブデリバリーのための Kubernetes コントローラーです。GitLab がロールアウト戦略を所有します。Argo Rollouts が `ReplicaSet` のメカニクスを所有します。Argo CD Core は GitOps リコンサイラーです。Git の状態をクラスターに同期します。GitLab CD は Argo CD を特定のコミット SHA にピン留めし、いつ進行するかを制御します。リコンサイラーが自動同期することはありません。

デプロイメントのアクチュエーションは **Deploy Driver** を通じて実行されます。Deploy Driver は KAS にロードされるバイナリではありません。これは Ruby gem として提供される宣言的なデータです。マニフェスト、`Starlark` ワークフローのセット、そして 2 つの設定スキーマです。マニフェストがエントリポイントです。ドライバーに名前を付け、ドライバーが実行できるパイプラインステップを宣言し、ワークフローファイルとスキーマファイルを指し示します。Beta ではドライバーはちょうど 1 つ、Deployment Execution チームによって構築され monolith にインポートされる Argo Rollouts ドライバーです。詳細は後述します。

クラスターに触れるすべて（オンボーディング、デプロイメント、観測）は、AutoFlow ワークフローとして実行されます。Rails がドメインモデルを所有します。AutoFlow が実行を所有します。イベントがそれらを接続します。

これは [GitLab CD システム](../gitlab_cd/) 設計のサブドキュメントです。[Application Entity PRD](https://gitlab.com/groups/gitlab-org/-/work_items/21247)、[AutoFlow エンジン](https://gitlab.com/groups/gitlab-org/-/work_items/21235)、[GitLab Events Platform](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18106) に精通していることを前提とします。

## 課題

GitLab CD は、ワークロード定義を所有せず、GitLab CI や GitLab ソース管理を必要とせずに、プログレッシブロールアウト、ヘルス観測、human-in-the-loop の承認を伴って Kubernetes へデプロイする必要があります。

デプロイメントターゲットは、Kubernetes クラスター内の Argo `Rollout` CR です。ワークロード定義は Git リポジトリに存在します。Beta ではリポジトリは GitLab ホスト型です。外部 forge（GitHub、Bitbucket）は目標です。ほとんどはファイルの読み取りとコミットのための API を公開しているため、`git` バイナリが必要になることはまれですが、一部の Functions では必要な場合に Runner スタイルの実行環境が必要になります。Argo CD Core が Git の状態をクラスターの状態にリコンサイルします。GitLab Agent for Kubernetes（`agentk`）がクラスター接続とイベント観測を提供します。AutoFlow がワークフローをオーケストレーションします。

ワークロード定義（コンテナの引数、リソース上限、マニフェストそのもの）は、GitLab CD にとって外部かつ不透明です。これはユーザーの Git リポジトリに、ドライバーの背後に存在します。Rails はそれを決してモデル化しません。

## アーキテクチャ

### 構成原理

GitLab CD は *どのバージョン* が *どこで* 実行され *どのようにロールアウトされるか* を決定します。リコンサイラーは、特定のコミットにピン留めされた愚直な適用器です。ユーザーは自身のリポジトリ、自身の Git ワークフロー、自身のマニフェスト構造を所有します。GitLab CD はデプロイメントのライフサイクルを所有します。

### 実行に関係するドメインエンティティ

完全なドメインモデルは GitLab CD: Rails に存在します。デプロイメントフローはそのうちの 4 つの概念を必要とします。

- **VersionSet** — `(Version, Service)` ペアの不変なセット。Rollout は 1 つの VersionSet をプロモートします。Rollout が進行しても変化しません。
- **Environment** — 名前付きのデプロイメントターゲット（development、staging、production）。Rails はそれに対してバージョン管理されたドライバーバインディングを保存します。`driver_ref` と不透明な `driver_config` blob（Environment 設定 — Argo ドライバーの場合はクラスターエージェント id）です。
- **Rollout** — 1 つの VersionSet を 1 つ以上の Environment（staging、次に production、次に ...）にわたって、単一の AutoFlow ワークフローのもとでプロモートし、完了するまで環境から環境へと移動します。Rollout は作成時に、その VersionSet、そのパイプライン（フロー定義）バージョン、そのドライバーバインディングをピン留めします。そのすべてが不変です。
- **Deployment** — `(service, environment)` ごとのアクチュエーション。状態はドメインイベントによって駆動されます。

ロールバックは、既存の Rollout 上の状態ではなく、新しい Rollout です。ユーザーは以前の VersionSet をターゲットとする新しい Rollout を作成します。古い Rollout のレコードは決して変化しません。

### イベント経路

3 つの異なるイベント経路があります。それらは交わりません。

**Registry イベント** は Events Platform を通じて Sidekiq ワーカーに流れます。これらは CD テーブルに Version と VersionSet を作成します。AutoFlow は関与しません。

**Cluster イベント**（Argo `Rollout` のステータス変化、Argo CD `Application` の同期ステータス）は `agentk` から AutoFlow に流れます。ドライバーの `Starlark` が `k8s.watch`（プッシュ）または `k8s.get`（ポーリング）を呼び出します。この関数は `agentk` を通じてオブジェクトに到達します。AutoFlow が唯一のコンシューマーです。他のどのシステムも生のクラスター状態を解釈しません。他のコンシューマーが必要とするなら、後でこれらを Events Platform 経由でルーティングできます。

**CD ドメインイベント** は AutoFlow から Events Platform を通じて Sidekiq ワーカーに流れます。これらは CD テーブルの状態を更新し、ダッシュボードを駆動し、監査ログに供給します。これらは実装非依存です。Kubernetes の用語ではなく CD の用語で何が起きているかを記述します。

注: イベントは一時的なトランスポートです。CD の Rails テーブルがシステムオブレコードです。CD は履歴のために Events Platform をリプレイすることは決してありません。ドメインイベントがテーブルを更新し、テーブルが真実を保持します。

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

### Rails から AutoFlow へのインターフェース

Rails は、KAS 上の `StartWorkflow` gRPC エンドポイントを通じて AutoFlow と通信します。これは命令的なインターフェースです。「これがワークフローだ、実行せよ」。

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

既存の `CloudEvent` RPC はリアクティブです。イベントを送信し、AutoFlow がそれをフロープロジェクトで定義されたハンドラーに一致させます。`StartWorkflow` は異なります。Rails がドライバーの `Starlark` を直接サブミットします。AutoFlow はそれをただ実行します。

この呼び出しは同期的ですが高速です。ワークフローが永続化された時点で返り、完了した時点ではありません。これがトランザクション的な契約です。200 が返ってきたら、そのワークフローが非同期にいずれかの形で処理されることがわかります。Rails はそれをトリガーしたエンティティ（Environment、Rollout）に `workflow_id` を保存します。ワークフローの実行に伴い、ドメインイベントが Events Platform を通じて流れ戻ります。

`workflow_id` は冪等性のために呼び出し元が選択します。KAS が永続化と応答の間にクラッシュした場合、Rails は同じ ID で再試行します。

### `Starlark` はインタープリターであり、コンパイルターゲットではない

Beta には汎用の YAML/JSON から `Starlark` へのコンパイラはありません。作成時に意図をターゲット固有のプログラムへと翻訳することはしません。

代わりに、ドライバーは手書きでターゲット固有の `Starlark` ワークフローを 1 つ提供します。それは実行時にその入力を *解釈します*。VersionSet、Environment 設定、Application-Environment 設定、そしてパイプライン設定です。Argo ドライバーを使うすべての Rollout に対して同じ `Starlark` が実行されます。設定を読み取り、行動します。Rollout ごとのコード生成はありません。

これにより可動部分が健全に保たれます。異なるデプロイメントメカニズムは、独自の手書き `Starlark` と独自の設定スキーマを持つ異なるドライバーであり、新しいコンパイラバックエンドではありません。汎用コンパイルは将来の可能性であり、Beta ではありません。

### イベントの冪等性

すべてのアクティビティは冪等でなければなりません。ワークフローの保証は常に at-least-once です。

あるアクティビティがイベントを発行し、Rails がそれを処理したが、AutoFlow がアクティビティの結果を記録する前にクラッシュした場合、リプレイ時にイベントが再発行されます。Rails も冪等でなければなりません。イベントは具体性によって冪等性を実現します。`gate_reached` は `deployment_id + weight` を持つので、「Deployment X が 25% のゲートに到達した」を 2 回処理しても no-op です。イベントの内容そのものが冪等性キーです。別個の重複排除インフラは不要です。

注: `emit` はアクティビティでなければならず（`run` を通じて呼び出される）、裸の関数呼び出しであってはなりません。さもなければリプレイがイベントを再発行してしまいます。アクティビティキャッシュがそれを冪等にします。私たちは「ゲート N を超えて進め」と言い、決して「次のゲートへ進め」とは言いません。具体的なターゲットこそがリプレイを安全にするものです。

## Deploy Driver

Deploy Driver は、Ruby gem として提供される宣言的なデータです。マニフェストがエントリポイントです。

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

これは次を担います。

1. **マニフェスト。** ドライバーに名前を付け、ドライバーが実行できるパイプラインステップ（`supported_pipeline_steps`）を宣言し、ワークフローファイルとスキーマファイルを指し示します。Rails は、パイプラインが作成されるときにそのステップが `supported_pipeline_steps` の部分集合であることを検証するので、不一致はデプロイ途中ではなく作成時に失敗します。
2. **`Starlark` ワークフローのセット。** オンボーディング、application-environment セットアップ、デプロイメントは別々のワークフローです。これらは AutoFlow 上で実行され、設定と VersionSet を読み取り、組み込み CD Functions を呼び出してクラスターに対してアクチュエートします。
3. **Environment 設定スキーマ。** ドライバーが環境に到達するために必要なもの、つまり環境レベルの接続です。Argo ドライバーの場合はクラスターエージェント id です。UI が Environment ごとに 1 回これを収集します。Rails はそれを Environment のドライバーバインディング上の不透明な `driver_config` として保存します。
4. **Application-Environment 設定スキーマ。** 特定のアプリケーションを特定の環境にデプロイするとは何を意味するか。Argo ドライバーの場合は、ロールアウト戦略と、ロードバランシングが有効かどうか、そしてどの種類かです。UI が `(application, environment)` ペアごとにこれを収集します。アプリケーションは複数の環境にデプロイされ得て、それぞれで異なる設定を持ちます。

Beta ではドライバーはちょうど 1 つ、Deployment Execution チームによって構築され monolith にインポートされる Argo Rollouts ドライバーです。Rails はマニフェストとスキーマを読み取って設定 UI をリフレクションによってレンダリングし、ユーザー入力をそれらに対して検証し、ワークフローを AutoFlow にサブミットします。gem は CD の Rails モデルから厳密に分離されたままです。Rails がドライバーの内部に手を伸ばすことはなく、ドライバーがドメインモデルに手を伸ばすこともありません。

### 組み込み CD Functions

ドライバーの `Starlark` は、小さな組み込み CD Functions のセットを呼び出します。これらは古い `cd.deploy.*` 組み込み Functions を置き換えます。汎用のデプロイインターフェースも go-plugin もありません。Beta では Functions は Go であり、GitLab Relay に直接インポートされプロセス内で実行されます。これらは gRPC ではなく、OCI や remote Functions はまだありません。それらは延期されています。（agent#883 と epic [&22116](https://gitlab.com/groups/gitlab-org/-/work_items/22116) を参照。）

| Function | 目的 |
|---|---|
| `git.read_file` | ある ref における Git リポジトリからファイルを読み取る — 例えば Argo `Rollout` または `Application` マニフェスト。 |
| `git.commit` | Git リポジトリへのファイル変更をコミットする（GitOps リポジトリを望ましい状態に更新する）。新しい SHA を返す。 |
| `argo.sync` | Argo CD `Application` に特定の SHA への同期を指示する。自動同期はオフであり、CD が SHA から SHA へ状態を進める。 |
| `argo.promote` | Argo `Rollout` を pause/stop ポイントを超えて進める。冪等でなければならない — stop ポイントは識別可能なので、リプレイが二重に進めることはない。 |
| `k8s.get` | `agentk` を通じて Kubernetes オブジェクトを取得する。Beta はここで約 30 秒のポーリングループを使う。 |
| `k8s.watch` | `agentk` を通じた Kubernetes オブジェクトイベントへのプッシュベースのサブスクリプション。Beta では `k8s.get` ポーリングの背後に延期される。 |

`emit` がこのセットを締めくくります。CD ドメインイベントを Events Platform に公開します。リプレイの冪等性のために `run` を通じて呼び出されます。

### ドライバーがデプロイメントをアクチュエートする方法

GitOps の状態は SHA から SHA へ進みます。ドライバーは `git.read_file` で現在のマニフェストを読み取り、望ましい状態を計算し（VersionSet からイメージバージョンをピン留めし、Application-Environment 設定から `spec.strategy` を生成する）、`git.commit` でそれをコミットし、`argo.sync` で Argo CD に新しい SHA への同期を指示します。そこから Argo `Rollout` CR を観測し、`argo.promote` で各 pause ポイントを超えて進めます。

注: `argo.promote` は冪等でなければなりません。stop ポイントは識別可能なので、すでに進行したロールアウトに対して promote を再実行するリプレイは no-op です。これがカナリアのメカニズムです。コントローラーは各ステップで無期限に pause し、ドライバーがその特定の stop ポイントを超えて promote したときにのみ進行します。

### トレードオフ: パラメーターオーバーライド対純粋な GitOps

Argo ドライバーは、イメージバージョンをコミットする代わりに Argo CD のパラメーターオーバーライドを通じて設定できます。これらは同期時にレンダリングされ、Helm、Kustomize、プレーンな YAML で動作します。ドライバーはユーザーのリポジトリ構造を理解する必要がありません。

トレードオフ: パラメーターオーバーライドは Git に保存されないので、ソースリポジトリは実際にデプロイされているものを正確には反映しません。Argo CD 自身のドキュメントは、これが純粋な GitOps にとってアンチパターンとみなされると注記しています。GitLab CD のテーブルは、すべての Deployment について SHA と変数値（シークレットを除く）をスナップショットし、完全な時点監査記録を提供します。コミット状態の経路（`git.commit` の後に `argo.sync`）が GitOps として純粋な代替です。同じドライバーで、Application-Environment 設定がどちらを選ぶかを決めます。

### 将来の拡張: 所有ブランチモデル

SHA ピン留めは、GitLab CD が独自のデプロイブランチを維持し、独自のスケジュールでユーザーのソースブランチからマージし、そのブランチの SHA にリコンサイラーをピン留めする、将来の「所有ブランチ」モデルの基盤です。ドライバーの Functions は変わりません。`git.commit` と `argo.sync` が異なるブランチに対して動作するだけです。

## Rails と Deployment Execution の間のインターフェース

このインターフェースはバイナリ API ではなく、スキーマのセットです。3 つのスキーマが契約を定義します。

- **パイプライン設定スキーマ**（後述）。
- **Environment 設定スキーマ**。
- **Application-Environment 設定スキーマ**。

2 つのドライバー設定スキーマは、UI アノテーション付きの JSON Schema です。`gitlabUi` キーワードが `widget`、`label`、`description`、`enumLabels` を持ちます。ウィジェットには、エージェントピッカー、text/number/checkbox/select、そして JSON Schema の `if`/`then` による条件付きフィールドが含まれます。Rails はこれらのスキーマをリフレクションして設定 UI をレンダリングし、ユーザー入力をそれらに対して検証します。フィールドの意味は理解しません。

Deployment Execution チームが 3 つのスキーマすべてを定義します。Rails のドキュメントが完全なアノテーション語彙を所有します。GitLab CD: Rails を参照してください。ここでは契約を述べれば十分です。Deployment Execution がスキーマを定義し、Rails がリフレクションによってそれらをレンダリングし検証し、どちらの側も相手のフィールドをハードコードしません。

### パイプライン設定

パイプライン設定は、汎用でドライバー不変なデータ構造です。これは独自の gem（どのドライバーからも分離されたもの）に存在し、Deployment Execution チームが所有し、ドライバー gem がそれに依存します。ドライバーの `supported_pipeline_steps` は、この gem が定義するステップタイプから選ばれます。ステップタイプを追加するには、それをパイプライン gem に追加します。ドライバーは、そのワークフローがそれを実行できるようになった時点で 1 度オプトインします。スキーマはすべてのパイプライン、すべてのドライバーで同じです。Argo 固有のパイプライン設定はありません。

パイプラインの **deploy ノード** は 2 つのものを持ちます。汎用の CD パラメーター（どの Environment か、順序、ゲート）と、**不透明な Application-Environment 設定 blob** を保持するスロットです。Argo ドライバーの場合はトラフィック分割戦略とロードバランシングの選択です。Rails は、ドライバーの Application-Environment スキーマに対してその blob をレンダリングし検証する以上の内省はしません。blob は別個のテーブルではなく deploy ノードに埋め込まれて存在します。

つまり分担は明快です。パイプライン構造は汎用で Rails がそれを理解します。ノードごとの deploy 設定はドライバー固有で、Rails はそれをリフレクションによって検証する不透明なデータとして扱います。

## オンボーディング

オンボーディングには 2 つのフェーズがあります。Rails がドメインエンティティを作成し（同期的、トランザクション的）、次に AutoFlow が接続性を検証しユーザーの設定を検証します（非同期、耐久性あり、ポリシー統制下）。何もインストールされず、最初のデプロイまでクラスター内には何も作成されません。

### フェーズ 1: ドメインエンティティの作成（Rails）

ユーザーがオンボーディングフォームに記入します。Rails は 1 つのトランザクションでドメインエンティティを作成します。Application、アーティファクトソースを伴う Services、Environment、そして Environment ごとのドライバーバインディングです。ドライバーバインディングは、`driver_ref` と、UI がドライバーの Environment 設定スキーマをリフレクションして収集した Environment 設定を保持します。完全なエンティティモデルは GitLab CD: Rails にあります。

すべてのエンティティが即座に存在します。ただ、まだ準備ができていないだけです。

### フェーズ 2: 環境オンボーディング（AutoFlow）

Rails がドライバーのオンボーディングワークフローをサブミットします。Argo ドライバーの場合、`agentk` の接続性をチェックし、両方のコントローラーが稼働中であることを確認します。これは既知のオブジェクトに対する `k8s.get` を通じて行われます。

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

異なるドライバーは異なるものをチェックします。Lambda ドライバーは IAM 認証情報とリージョンアクセスを検証するでしょう。ドメインモデルはそれを知らず気にもしません。ドライバーバインディングを保存し、ドライバーの `Starlark` をサブミットするだけです。

ユーザーに代わってコントローラーをインストールし管理することはスコープ外です。その経路は以前失敗しています（GMA v1/v2）。私たちは、所有していないクラスターにまたがる何千ものインストールを運用する能力を持たず、ユーザーは結局、私たちが診断できない問題で私たちを非難することになります。GitLab CD は Environment に接続します。それらをプロビジョニングしません。

### フェーズ 3: application-environment セットアップ（AutoFlow）

Environment が準備できたら、ドライバーは各アプリケーションのマニフェストを宣言された services に対して検証します。Git からマニフェストを読み取り、Argo `Rollout` CR をパースします。

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

ドライバーはマニフェストを読み取り、`Rollout` CR をパースし、そのコンテナ名が宣言された services と一致することを検証します。Rails は、後のデプロイメントワークフローで使うために、発見された名前と namespace を永続化します。

既存の Argo CD `Application` の場合、セットアップワークフローは自動同期がオフであることも確認します。GitLab CD は同期がいつ起こるかを制御するので、自動同期のままになっている Application はドライバーと衝突します。ワークフローは `spec.syncPolicy` をチェックし、自動同期がオンなら `not_ready` を発行するので、不一致がデプロイ途中ではなくセットアップ時に表面化します。

Argo CD `Application` CR そのものは最初のデプロイで作成されます。GitLab CD が同期のタイミングを制御するように `syncPolicy` なしで設定されます。ユーザーの Git リポジトリとワークフローは乱されません。

### 既存ワークロードのオンボーディング

SHA ピン留めにより、既存ワークロードのオンボーディングは大幅に容易になります。すでに Argo CD Applications を持つユーザーは、次のことだけをすればよいです。

1. Application の自動同期を無効にする（または GitLab CD にやらせる）。
2. GitLab CD を既存の `Application` CR に向ける。
3. GitLab CD が `targetRevision` とパラメーターオーバーライドを引き継ぐ。

マイグレーションも、ダウンタイムも、リコンサイラーとの衝突もありません。GitLab CD は、ユーザーが自動同期を再びオンにした場合にドリフトを表示できるよう、リコンサイルされた SHA についての更新を発行すべきです。

### ユーザーが提供するものと GitLab が生成するもの

| 何を | ユーザーが提供 | GitLab が生成 |
|---|---|---|
| Argo CD Core | クラスターにインストール済み | — |
| Argo Rollouts コントローラー | クラスターにインストール済み | — |
| Argo CD `Application` CR | マニフェストリポジトリ URL と認証情報とファイルパス | 最初のデプロイ時にドライバーが作成 |
| アーティファクトソース | コンテナ名とレジストリ URL と認証情報 | — |
| ロールアウト戦略 | カナリアステップ、ゲート、ロールバックポリシー（Application-Environment 設定） | デプロイ時にドライバーが生成する `spec.strategy` YAML |

クラスターの前提条件: 稼働中の `agentk` と、インストール済みの Argo CD Core および Argo Rollouts。それ以外のすべてはドライバーを通じて流れます。

ワークフローが失敗した場合（不正な認証情報、到達不能なクラスター、誤ったファイルパス）でも、ドメインエンティティは依然として存在します。ユーザーは UI で問題を修正し、再試行します。ワークフローは失敗したステップからリプレイされます。

## ヘルスステータスの監視

デプロイメントワークフローは 1 つのものを観測します。Argo `Rollout` CR です。同期の確認はドライバーの関心事です。`argo.sync` は、望ましい SHA が Argo CD `Application` CR に適用され同期が進行中になった時点で返ります。そこから先、ワークフローは `Rollout` CR の進行を監視します。

### Argo Rollout のステータス

`Rollout` CR はカナリア進行の詳細を提供します。

- `status.phase` — `Healthy`、`Progressing`、`Paused`、`Degraded`
- `status.currentStepIndex` — カナリアがどのゲートに到達したか
- `status.pauseConditions` — ロールアウトが pause している理由（例えば `CanaryPauseStep`）
- `status.message` — 人間が読めるステータス

これがワークフローの状態機械を駆動します。`Paused` はゲートに到達したことを意味し、`Healthy` はデプロイメントが完了したことを意味し、`Degraded` は何かがうまくいかなかったことを意味します。

### Argo CD Application のステータス（ドライバー内部）

ドライバーは `Application` CR を内部的に使い、`argo.sync` から返る前に特定の SHA が同期されたことを確認します。`status.sync.revision` がピン留めされた SHA と一致することが、ドライバーが自身の変更が反映されたことを知る方法です。ワークフローはランタイムのヘルスのために `Rollout` CR を監視します。`Application` CR はドライバー自身の同期チェックです。

## デプロイメントフロー

### ステップ 1: 新しいバージョンの検出

アーティファクトソースが新しいコンテナイメージバージョンを検出します。ソースはさまざまです。

- GitLab Container Registry は Events Platform を通じて内部イベントを発行します。
- 外部レジストリ（ECR、Artifactory）は Webhook を送信するか、GitLab によってポーリングされます。

イベントは [Events Platform](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18106) を通じて Rails の CD Sidekiq ワーカーに流れます。

ワーカーは CD テーブルに問い合わせます。

1. このレジストリとイメージに一致するアーティファクトソースを持つ Services はどれか?
2. 一致する各アーティファクトソースに新しい Version レコードを作成する。
3. 影響を受ける各 Application について、新しい VersionSet を組み立てる — すべての Service について最新の Version。

VersionSet が利用可能になりました。**デプロイメントはまだ起きません。** AutoFlow は関与しません。

### ステップ 2: ユーザーが Rollout を作成する

ユーザー（またはポリシー）が、1 つ以上の Environment にわたって VersionSet をプロモートすることを決定します。これは状態 `Pending` の Rollout レコードを CD テーブルに作成します。Rollout は作成時に VersionSet、パイプライン（フロー定義）バージョン、ドライバーバインディングをピン留めします。その時点からそのすべてが不変です。

Rails は `StartWorkflow` を通じて 1 つのワークフローを AutoFlow にサブミットします。ドライバーのデプロイメント `Starlark` に、Rollout のピン留めされた設定を入力として渡します。この単一のワークフローが、完了するまで VersionSet を環境から環境へとプロモートします。Rails は Rollout に `workflow_id` を保存します。

ロールバックも同じように動作します。ユーザーは以前の VersionSet をターゲットとする新しい Rollout を作成します。メカニズムは同一です。同じドライバー、同じワークフロー、以前の VersionSet です。すべての VersionSet は CD テーブルに保存されているので、任意の時点へのロールバックが常に利用可能です。ロールバックは既存の Rollout を決して変化させません。新しい Rollout です。

### ステップ 3: ロールアウトの協調

Rollout ワークフローは、VersionSet を Environment にわたって順番にプロモートします。staging、次に production、というように。1 つの Environment 内では、各 Deployment（`(service, environment)` ごとに 1 つ）のゲートを駆動し、それらすべてが各ゲートに到達するのを待ち、すべてが揃ったときにのみ次のゲートへ進みます。

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

各 Deployment は自身のペースで進みます。異なるソーク期間、異なるヘルスチェックのタイミングです。Rollout は、次のゲートに移る前に Environment 内の全員が追いつくまで待ち、次の Environment に移る前に Environment が healthy になるまで待ちます。これにより、同一のタイミングを強制することなく協調が得られます。

いずれかの Deployment が `degraded` を報告した場合、ワークフローは進行を止め、失敗を表面化させます。回復は、以前の VersionSet をターゲットとする新しい Rollout（ロールバック）です。既存の Rollout にロールバック状態はありません。承認は Deployment ごとではなく Rollout レベルで行われます。

### ステップ 4: デプロイメント実行

各 Deployment は、単一の `(service, environment)` ペアのアクチュエーションです。ドライバーの `Starlark` は現在のマニフェストを読み取り、新しいバージョンをピン留めし、コミットし、同期し、そして Rollout の協調が指示するとおりに一度に 1 つのゲートずつカナリアを進めます。

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

ワークフローはクラスターに直接触れることは決してありません。ターゲット固有のすべて（カナリア戦略の生成、マニフェストのコミット、Argo CD の同期、pause を超えた進行）は、ドライバーの Functions と `Starlark` の中にあります。ワークフローは望ましい状態を記述し、ステータスに反応します。

`Degraded` の場合、Deployment ワークフローは発行して終了します。カナリア自体を中止することはしません。Rollout の協調が Application レベルで何をするかを決定します。通常は失敗を表面化させ、ユーザーが整合性を保つためにロールバック Rollout を作成できるようにします。

#### 生成される戦略

ドライバーは、すべてのトラフィック増分が無期限の `pause: {}` でゲートされたカナリア戦略を生成します。コントローラーは決して自力で進行できません。

5%、25%、50%、100% のステップを持つ Application-Environment 設定の場合:

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

各 `argo.promote` が 1 つの pause をクリアし、コントローラーを 1 つのゲート進めます。promote は冪等です。stop ポイントがどの pause かを識別するので、すでにクリアされた pause に対するリプレイは何もしません。

#### 観測: 今はポーリング、後で watch

Beta では、デプロイメントワークフローは `k8s.get` で約 30 秒のループで `Rollout` CR をポーリングします。シンプルで動作します。

`k8s.watch` はプッシュの置き換えです。`agentk` を通じたサブスクリプションで、`Rollout` ステータスイベントを `signal_channel` 経由で AutoFlow にプッシュバックし、ワークフローにクラスターとの密な接続を与えます。それは Beta ではポーリングループの背後に延期されています。それが実装されたら、ループ本体は sleep する代わりにチャネルで select し、フローの残りは変わりません。プッシュイベントは次のようになります。

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

### ステップ 5: ロールバック

ロールバックは、以前の VersionSet をターゲットとする新しい Rollout です。既存の Rollout にロールバック状態はなく、既存の Rollout のレコードは決して変化しません。ドライバーは以前の VersionSet のバージョンで同じデプロイメント `Starlark` を実行します。以前の望ましい状態をコミットして同期します。Argo コントローラーは安定したテンプレートを検出し、カナリアステップを実行せずに `Healthy` へと高速に進みます。

ロールバックは abort とは異なります。Abort はカナリアを止め、Argo `Rollout` を `Degraded` のまま、新しい（失敗した）バージョンを spec に残します。ロールバックは望ましい状態を既知の正常な VersionSet に再び向けます。コントローラーは安定したテンプレートを認識し、即座に `Healthy` とマークします。

| 操作 | メカニズム | 結果 |
|---|---|---|
| Abort | ドライバーが `status.abort: true` をパッチ | `Degraded`。安定 RS が稼働中。新しいバージョンはまだ spec にある。 |
| Rollback | 以前の VersionSet による新しい Rollout、コミットおよび同期 | `Healthy`。コントローラーが安定テンプレートを検出し、ステップをスキップ。 |
| Retry | ドライバーが `status.abort: false` をパッチ | 同じ新しいバージョンでステップ 0 からカナリアを再開。 |

デフォルトのロールバックポリシー: `Failed` 時には即座に新しいロールバック Rollout が作成され、`Degraded` 時には 30 分後に作成されます（Services は起動時に一時的に不安定なことがあります）。どちらも Application レベルで設定可能です。

### Human-in-the-loop

HITL は 2 つのレベルで機能します。

**ワークフロー内のインライン。** ドライバーの `Starlark` は承認ゲートを直接エンコードできます。`com.gitlab.cd.approval.resolved` が到着するまで停止する `wait_for_event` です。ユーザーはこれをパイプライン設定の一部として構成します（「50% で承認を要求する」）。

**Function 呼び出し周りのポリシー。** AutoFlow は、すべての `run` 呼び出しでポリシー（インスタンスから組織、グループ、プロジェクトへと継承され、ワークフローに埋め込まれたものも含む）を評価します。ポリシーは任意の Function に承認を要求できます。例えば「production に対するすべての `argo.sync` 呼び出しには承認が必要」。ワークフローは透過的に停止します。

どちらのメカニズムも同じプリミティブを使います。停止し、イベントを発行し、承認イベントを待ち、リプレイします。

## 組み込み Function のまとめ

Beta ではすべての Functions が GitLab Relay で実行されます。Go であり、プロセス内でインポートされます。これらは gRPC ではありません。これらは軽量でなければなりません。Relay は共有のコントロールプレーンであり、ワークロード環境ではありません。OCI と remote Functions は延期されています。

AutoFlow が Runner 統合を持てば、任意の Function を Runner 環境にオフロードできます。ワークフローは変わりません。`run("argo.sync", ...)` は、Relay がそれをプロセス内で実行しようと Runner にディスパッチしようと、同じように動作します。

| Function | 実行場所 | 目的 |
|---|---|---|
| `emit` | Relay -> Events Platform | CD ドメインイベントを公開。リプレイの冪等性のために `run` を通じて呼び出される。 |
| `git.read_file` | Relay（プロセス内） | ある ref における Git リポジトリからファイルを読み取る。 |
| `git.commit` | Relay（プロセス内） | Git リポジトリへのファイル変更をコミットする。新しい SHA を返す。 |
| `argo.sync` | Relay -> `agentk` | Argo CD `Application` を特定の SHA に同期する。 |
| `argo.promote` | Relay -> `agentk` | Argo `Rollout` を pause/stop ポイントを超えて進める。冪等。 |
| `k8s.get` | Relay -> `agentk` | Kubernetes オブジェクトを取得する。Beta はこれでポーリングする。 |
| `k8s.watch` | Relay -> `agentk` | Kubernetes オブジェクトイベントへのプッシュサブスクリプション。Beta では延期。 |

## 構築が必要なもの

| コンポーネント | ステータス | 備考 |
|---|---|---|
| AutoFlow エンジン | 構築中 | `run`、`sleep`、`wait_for_event` を伴う耐久性のあるワークフロー。[gitlab-org/cluster-integration/gitlab-agent#821](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/work_items/821) |
| `AutoFlow.StartWorkflow` RPC | 新規 | Rails がドライバーの `Starlark` をサブミットするための命令的 gRPC エンドポイント。 |
| Events Platform | 設計中 | KAS を通じた CloudEvent バス。[gitlab-com/content-sites/handbook!18106](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18106) |
| Argo Rollouts Deploy Driver（Ruby gem） | 新規 | マニフェスト、`Starlark` ワークフロー（オンボーディング、app-env セットアップ、deploy）、そして Environment と Application-Environment の設定スキーマ。Deployment Execution が構築し、monolith がインポートし、CD モデルから分離して保つ。 |
| Rails 内の CD テーブル | 新規 | GitLab CD: Rails を参照。 |
| CD Sidekiq ワーカー | 新規 | Events Platform から CD ドメインイベントを消費し、CD テーブルのエンティティ状態を更新する。 |
| `Gitlab::Kas::Client#start_workflow` | 新規 | `StartWorkflow` のための Rails 側 gRPC クライアント。`send_autoflow_event` のパターンに従う。 |
| 組み込み CD Functions | 新規 | Beta では `git.read_file`、`git.commit`、`argo.sync`、`argo.promote`、`k8s.get`。`k8s.watch` は延期。Go、Relay 内でプロセス内実行。[&22116](https://gitlab.com/groups/gitlab-org/-/work_items/22116) |
| `emit` Function | 新規 | CloudEvent を Events Platform に公開する。 |
| `k8s.watch` プッシュサブスクリプション | 延期 | Relay 内部から interest をプッシュし、`agentk` にイベントをプッシュバックさせ、ワークフロー終了時にクリーンアップする。Beta のポーリングループを置き換える。@ash2k がこれが実現可能であることを確認済み。 |

## 未解決の問い

**イベントからワークフローへのマッチング。** `wait_for_event` は AutoFlow のプリミティブとして定義されていますが、到着した CloudEvent を停止中のワークフローにマッチングするメカニズムはまだ設計されていません。この設計はそれに依存しています。Rollout から Deployment への協調はイベントを使い、承認イベントは停止したゲートを起こし、`k8s.watch`（実装されたら）はデプロイメントワークフローを起こします。マッチングシステム（サブスクリプションベース? フィルタリング付きのファンアウト? ワークフロー id によるインデックス?）は [AutoFlow](https://gitlab.com/groups/gitlab-org/-/work_items/21235) 設計の一部である必要があります。

**`k8s.watch` プッシュサブスクリプション。** [Graph API](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/blob/master/doc/graph_api.md) は今日プルベースです。`k8s.watch` にはプッシュが必要です。Relay 内部からサブスクリプションを登録し、`agentk` にイベントをプッシュバックさせ、ワークフロー終了時にクリーンアップします。@ash2k がこれが実現可能であることを確認済みです。Beta のポーリングループの背後に延期されています。

**Argo CD Application CR の作成。** ドライバーは最初のデプロイで `Application` CR を作成します。既存ワークロードをオンボードするユーザーは、GitLab CD を既存の CR に向けます。それが正しいデフォルトでしょうか、それともユーザーが常に CR を提供することを望むでしょうか? @gabrielengel_gl からの意見を待っています。

**ポリシーエンジン。** ポリシーは Cedar になり、Auth Stack（AUTH-014 ADR）によって評価されます。それが `run()` のインターセプト（例えば「production のすべての `argo.sync` 呼び出しに承認を要求する」）とどう整合するかは、依然として別途検討中です。

**戦略生成 UI。** Rails はドライバーのスキーマをリフレクションして Application-Environment 設定 UI をレンダリングします。生成される `spec.strategy` YAML は実装の詳細です。ユーザーはカナリアステップとゲートの挙動を構成し、YAML そのものは決して構成しません。

**外部 Git forge。** Beta は GitLab ホスト型のマニフェストリポジトリをサポートします。GitHub、Bitbucket、その他の forge は目標です。ほとんどは読み取りとコミットのための API を公開していますが、認証情報モデル（personal トークン、project トークン、OAuth）、認証情報のスコープのされ方、API では不十分なときに `git` バイナリがどこで実行されるか、これらすべてに設計作業が必要です。シークレットはスキーマのスコープ外です。それらは参照によってライブで解決され、Rollout に凍結されることは決してありません。

**ワークロード参照。** Argo Rollouts は、インラインの `spec.template` だけでなく、別個の Deployment を指す `spec.workloadRef` をサポートします。Beta のスコープか、明示的にスコープ外か? @gabrielengel_gl からの意見を待っています。

**ログの可視性。** 誰がデプロイメントログを見るか、そしてどう見るか。CD デプロイメントワークフローは、任意の AutoFlow ワークフローと同じ方法でログを記録するので、AutoFlow レイヤーで整理します。
