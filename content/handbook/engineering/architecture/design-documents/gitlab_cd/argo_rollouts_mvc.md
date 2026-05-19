---
title: "Argo Rollouts による Kubernetes デプロイ — MVC"
status: proposed
creation-date: "2026-03-25"
authors: [ "@josephburnett" ]
coach: []
approvers: []
owning-stage: "~devops::deploy"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_cd/argo_rollouts_mvc/
upstream_sha: ec55f130cc95389b6faf798cebffd864abdbb4c5
translated_at: "2026-04-27T08:55:32Z"
translator: claude
stale: false
lastmod: "2026-04-21T15:27:06-07:00"
---


{{< engineering/design-document-header >}}


## 概要

このドキュメントは Argo Rollouts を使用した GitLab CD の MVC デプロイパスを説明しています。オンボーディング（Environment 接続、Service-Environment のセットアップ、マニフェスト検証）、バージョン検出、調整されたマルチサービスデプロイ（SHA ピン留め、パラメーターオーバーライド、カナリアの進行）、および以前の任意のバージョンセットへのロールバックをカバーします。

Argo CD Core と Argo Rollouts は**前提条件**です。クラスターオペレーターがインストールします。GitLab CD は GitLab Agent for Kubernetes（`agentk`）を介して実行中のクラスターに接続します。コントローラーをインストールまたは管理しません。これは意図的なスコープの境界です: 私たちは Environment をオンボードするのであって、プロビジョニングするわけではありません。

Argo Rollouts はプログレッシブデリバリー用の Kubernetes コントローラーです。GitLab はロールアウト戦略を所有します。Argo Rollouts は ReplicaSet のメカニクスを所有します。Argo CD Core は GitOps リコンサイラーです。Git の状態をクラスターに同期します。GitLab CD は Argo CD を特定のコミット SHA に固定し、いつ進めるかを制御します。リコンサイラーは自動同期しません。

デプロイのアクチュエーションは **デプロイプラグイン**（Fleeting と同じ HashiCorp go-plugin パターンを使用して KAS にロードされた Go バイナリ）を通じて実行されます。GitLab は Argo CD + Argo Rollouts 用のゴールデンパスプラグインを提供します。ユーザーは独自のプラグインを持ち込めます。プラグインは不透明です。外部からは単なる `Set` / `Get` / `Subscribe` / `Unsubscribe` インターフェースです。

クラスターに触れるすべてのもの（オンボーディング、デプロイ、観察）はコンパイルされた AutoFlow ワークフローとして実行されます。Rails はドメインモデルを所有します。AutoFlow は実行を所有します。イベントがそれらを接続します。

これは [GitLab CD システム](../gitlab_cd/)設計のサブドキュメントです。[Application Entity PRD](https://gitlab.com/groups/gitlab-org/-/work_items/21247)、[AutoFlow エンジン](https://gitlab.com/groups/gitlab-org/-/work_items/21235)、および [GitLab Events Platform](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18106) に精通していることを前提としています。

## 問題

GitLab CD は、ワークロード定義を所有せず、GitLab CI や GitLab ソースコントロールを必要とせずに、プログレッシブロールアウト、ヘルス観察、ループ内人間の承認で Kubernetes にデプロイする必要があります。

デプロイターゲットは Kubernetes クラスター内の Argo Rollout CR です。ワークロード定義は Git リポジトリ（GitLab、GitHub、または Bitbucket がサポートする任意の Git サーバー）に存在します。Argo CD Core は Git の状態をクラスターの状態にリコンシリエーションします。GitLab Agent for Kubernetes（`agentk`）はクラスター接続とイベント観察を提供します。AutoFlow はワークフローをオーケストレーションします。

## アーキテクチャ

### 組織化の原則

GitLab CD は **どのバージョン**が**どこで**、**どのようにロールアウトされるか**を決定します。リコンサイラーは特定のコミットに固定されたダムアプライヤーです。ユーザーは自分のリポジトリ、Git ワークフロー、マニフェスト構造を所有します。GitLab CD はデプロイライフサイクルを所有します。

### イベントパス

3 つの異なるイベントパスがあります。それらは交差しません。

**レジストリイベント**は Events Platform を通じて Sidekiq ワーカーに流れます。これらは CD テーブルにバージョンとバージョンセットを作成します。AutoFlow は関与しません。

**クラスターイベント**（Argo Rollout ステータスの変更、Argo CD アプリケーション同期ステータス）は agentk からデプロイプラグインを通じて AutoFlow に流れます。ワークフローは `cd.deploy.subscribe` を呼び出し、プラグインは agentk との Graph API サブスクリプションを登録し、agentk は生のリソース更新をプラグインにプッシュし、プラグインはそれらを CloudEvents に変換して KAS に渡して AutoFlow のイベントマッチングレイヤーにルーティングします。AutoFlow が唯一のコンシューマーです。他のシステムは生のクラスター状態を解釈しません。他のコンシューマーが必要な場合は、後で Events Platform を通じてルーティングできます。

**CD ドメインイベント**は AutoFlow から Events Platform を通じて Sidekiq ワーカーに流れます。これらは CD テーブルの状態を更新し、ダッシュボードを駆動し、監査ログを供給します。これらは実装に依存しません。Kubernetes の用語ではなく、CD の用語で何が起きているかを説明します。

```plaintext
レジストリイベント:
  Artifact Registry → webhook/poll → Events Platform → Sidekiq → CD テーブル
  (バージョン、バージョンセットの作成。AutoFlow は関与しない。)

クラスターイベント:
  agentk → デプロイプラグイン (KAS 内) → AutoFlow (唯一のコンシューマー)
  (Argo Rollout フェーズの変更。プラグインが Graph API サブスクリプションを保持し CloudEvents に変換。)

CD ドメインイベント:
  AutoFlow → Events Platform → Sidekiq → CD テーブル
  (onboarding.complete, deployment.started, gate_reached, healthy, など)
  (レジストリイベントと同じパス。実装非依存。)
```

### Rails → AutoFlow インターフェース

Rails は KAS の `StartWorkflow` gRPC エンドポイントを通じて AutoFlow と通信します。これは命令的なインターフェースです: 「コンパイルされたワークフローがあります、実行してください。」

```protobuf
service AutoFlow {
  // リアクティブ: フロープロジェクト内のハンドラーにイベントを一致させる。
  rpc CloudEvent(CloudEventRequest) returns (CloudEventResponse);

  // 命令的: コンパイルされたワークフローを実行する。
  rpc StartWorkflow(StartWorkflowRequest) returns (StartWorkflowResponse);
}

message StartWorkflowRequest {
  string workflow_id = 1;           // 呼び出し元が選択、冪等性のため
  bytes starlark = 2;               // コンパイルされたワークフロー
  map<string, string> secrets = 3;  // Git 認証情報、レジストリトークンなど — Runner インテグレーションまでの暫定措置
}

message StartWorkflowResponse {
  string workflow_id = 1;           // 確認済み、保存済み
}
```

既存の `CloudEvent` RPC はリアクティブです。イベントを送信し、AutoFlow はフロープロジェクトで定義されたハンドラーにマッチングします。`StartWorkflow` は異なります。Rails はすでに考えを済ませています。CD コンパイラーが Starlark を生成しました。AutoFlow はそれを実行するだけです。

呼び出しは同期的ですが高速です。ワークフローが完了してからではなく、永続化されてから返します。これがトランザクション契約です: 200 を受け取ったら、それは何らかの方法で非同期で処理されることがわかります。Rails はそれをトリガーしたエンティティ（Environment、Service-Environment、Rollout、Deployment）に `workflow_id` を保存します。ドメインイベントはワークフローが実行されるにつれて Events Platform を通じて流れ戻ります。

`workflow_id` は冪等性のために呼び出し元が選択します。KAS が永続化と応答の間にクラッシュした場合、Rails は同じ ID で再試行します。

### コンパイル

ユーザーは CD UI でインテント（カナリア重みステップ、ゲートの動作、ロールバックポリシー）を設定します。GitLab はこれをターゲット非依存の説明として CD テーブルに保存します。

Rails がワークフロー（オンボーディング、デプロイ）を必要とする場合、**CD コンパイラー**がこのインテントを Starlark に変換します。コンパイラーはターゲット固有です。Argo Rollouts を使用した Kubernetes の場合、アーティファクト、重み、ターゲット設定で `builtin://cd.deploy.set` を呼び出す Starlark を生成します。観察のために `builtin://cd.deploy.subscribe` / `builtin://cd.deploy.unsubscribe`、ドメインイベントのために `builtin://emit` を生成します。デプロイプラグインが残りを行います。

コンパイラーは適切な箇所に `builtin://emit` 呼び出しを配置します。これらは CD ドメインイベントを発行します。`onboarding.complete`、`deployment.started`、`gate_reached`、`healthy`、`degraded` など。コンパイラーは CD セマンティクスを知っています。AutoFlow は Starlark を実行するだけです。Rails はイベントを消費するだけです。

この分離が重要です。別のターゲットは異なる Starlark を生成する異なるコンパイラーを使用しますが、ドメインイベントは同じままです。ダッシュボード、監査ログ、CD テーブルはデプロイがどのように行われたかを気にしません。

[Application Entity PRD](https://gitlab.com/groups/gitlab-org/-/work_items/21247) は Desired State Source を定義します。Services で「バージョン」が OCI パッケージ化されたマニフェスト（データベーススキーマ、Crossplane CRD、Terraform プラン）であり、デプロイメントが直接適用するもの。データベースマイグレーションにカナリア進行はありません。そのソースタイプのコンパイラーはよりシンプルな Starlark を生成します: プル、適用、確認、完了。AutoFlow + 組み込み + ドメインイベントのパターンは機能します。ただし異なるコンパイラーターゲットであり、このドキュメントではカバーされていません。

注意: `builtin://emit` はベア関数呼び出しではなく、アクティビティ（`run` で呼び出される）でなければなりません。そうでなければリプレイが再度イベントを発行します。アクティビティキャッシュにより冪等になります。`deployment_id + weight` で `gate_reached` が 2 回処理されても何も起きません。イベントコンテンツ自体が冪等性キーです。「次のステップに進む」とは言わず、「ステップ N を過ぎたところに進む」と言うべきです。

### イベント冪等性

すべてのアクティビティは冪等でなければなりません。ワークフローの保証は少なくとも 1 回、常にそうです。

アクティビティがイベントを発行し、Rails がそれを処理するが、AutoFlow がアクティビティ結果を記録する前にクラッシュした場合、リプレイでイベントが再発行されます。Rails も冪等でなければなりません。イベントは特定性を通じて冪等性を実現します: `gate_reached` は `deployment_id + weight` を伝えるので、「デプロイメント X が 25% ゲートに達した」が 2 回処理されても何も起きません。イベントコンテンツ自体が冪等性キーです。別の重複排除インフラは必要ありません。

## デプロイプラグイン

デプロイのアクチュエーションは **デプロイプラグイン**（Fleeting と同じ HashiCorp go-plugin パターンを使用して KAS にロードされた Go バイナリ）を通じて実行されます。各プラグインは 1 つのデプロイメカニズムをターゲットにします: ゴールデンパスプラグインは Argo CD + Argo Rollouts をラップします。Lambda プラグインは AWS SDK 呼び出しをラップできます。Desired State プラグインは Crossplane CRD を直接適用できます。

外部からは、プラグインは不透明です。4 つの RPC を公開します。単一のターゲットをアクチュエート、読み取り、観察するために必要なすべてです。

### インターフェース

```protobuf
service DeployPlugin {
  // ターゲットをこのようにする。
  rpc Set(DesiredState) returns (Result);

  // 現在の状態を読み取る。
  rpc Get(Target) returns (ObservedState);

  // 状態の変化への関心を登録する。イベントは非同期で流れ戻る。
  rpc Subscribe(Target) returns (Subscription);

  // サブスクリプションを解放する。
  rpc Unsubscribe(SubscriptionId) returns (Ack);
}

message Target {
  map<string, string> target_config = 1;  // 呼び出し元には不透明
}

message DesiredState {
  repeated ArtifactVersion artifacts = 1;
  int32 weight = 2;                       // 0-100
  map<string, string> target_config = 3;  // Target と同じ契約
}

message ArtifactVersion {
  string name = 1;       // どこに適用するか
  string type = 2;       // "oci_image", "git_sha", "ami", ...
  string reference = 3;  // 特定のバージョン
}
```

`Set` は収束的です: 「世界をこのようにしてください。」プラグインは現在の状態を発見して差分を適用します。ステートレスで冪等です。同じ `DesiredState` で `Set` を 2 回呼び出しても何も起きません。

`Get` は現在の状態を一度読み取ります。

`Subscribe` は関心を登録します。プラグインは状態が変化するにつれてイベントを KAS に非同期でプッシュし、KAS はそれらを AutoFlow のイベントマッチングレイヤーにルーティングします。`Unsubscribe` は登録を解放します。プッシュを持たないターゲットはこれらを実装しません。コンパイラーはプラグインの機能を知り、代わりに `Get` + `sleep` ポーリングループを発行します。

`target_config` は呼び出し元には不透明です。4 つすべての RPC で同じ契約です。ターゲットは、アクチュエート、読み取り、観察のいずれの場合でも同じものです。Argo CD + Argo Rollouts プラグインの場合、`agent_id`、`app_name`、`app_namespace`、`rollout_name`、`rollout_namespace`、および `artifact_map`（例: `{"manifests": "targetRevision", "server": "image.tag"}`）を伝えます。Lambda プラグインは `region`、`function_name`、`alias` を伝えます。コンパイラーとプラグイン間の契約は protobuf インターフェースの外側にあります。Fleeting の `plugin_config` と同じパターンです。

### ライフサイクル

プラグインは Fleeting と同様に、KAS で長時間実行されるサブプロセスとして実行されます。4 つの CD 固有の組み込みで起動および管理されます。

- `builtin://cd.deploy.set` — `Set` を呼び出し、結果を返す。
- `builtin://cd.deploy.get` — `Get` を呼び出し、結果を返す。
- `builtin://cd.deploy.subscribe` — `Subscribe` を呼び出し、サブスクリプションハンドルを返す。
- `builtin://cd.deploy.unsubscribe` — `Unsubscribe` を呼び出し、登録を解放する。

これらは AutoFlow が見る**唯一の** CD 固有の組み込みです。AutoFlow 自体はデプロイについて何も知りません。アクティビティを見るだけです。組み込みはプラグインを隠します。プラグインはターゲットを隠します。

### 設計のポイント

- **強い型付け。** フィールドレベルの後方互換性を持つ protobuf インターフェース。スキーマの進化が実際に可能です。
- **呼び出し元には不透明。** コンパイラーとプラグインはアーティファクト名と `target_config` キーについての契約を共有します。他の誰もがプラグインをブラックボックスとして扱います。
- **重みがカナリア進行を駆動する。** コンパイラーは連続した重み（5、25、50、100）で `Set` を呼び出します。プラグインはデルタを計算します。最初の呼び出しで Argo CD Application CR を作成するか、`targetRevision` をパッチするか、一時停止条件をクリアするかどうか。安定と一致する重みの設定はロールバックです。プラグインはマッチを検出して高速化します。
- **プッシュまたはポーリング、同じプラグイン。** コンパイラーはターゲットごとに使用形状を選択します。プッシュ可能なプラグインは `Subscribe` + `wait_for_event` を取得します。ポーリングのみのプラグインは `sleep` + `Get` を取得します。同じプラグインタイプ、同じ `target_config`、異なるコンパイル済み Starlark。
- **サブスクリプションのクリーンアップ。** コンパイラーはすべての `Subscribe` をワークフロー終了時の `Unsubscribe` と対にします。AutoFlow は異常終了時にもクリーンアップします。ワークフローを生き延びるサブスクリプションはリークです。
- **バージョンは空かもしれません。** マニフェストのみの変更（リソース制限、環境変数、プローブ）は、リコンサイラーが GitLab CD が SHA ピンを更新するときのみ進めるため、プログレッシブデリバリーを経由します。すべての環境変更がロールアウト保護を受けます。

### トレードオフ: パラメーターオーバーライド vs 純粋な GitOps

ゴールデンパスプラグインは Argo CD パラメーターオーバーライドを使用してイメージバージョンを設定します。これらは同期時にレンダリングされます。Helm、Kustomize、プレーン YAML で機能します。プラグインはユーザーのリポジトリ構造を理解する必要がありません。

トレードオフ: パラメーターオーバーライドは Git に保存されないため、ソースリポジトリはデプロイされているものを正確に反映しません。Argo CD 自身のドキュメントは、これが純粋な GitOps ではアンチパターンと見なされると指摘しています。GitLab CD のテーブルは各 Deployment の SHA + 変数値（シークレットを除く）のスナップショットを記録し、完全な時点監査記録を提供します。

### 将来の拡張: 所有ブランチモデル

SHA ピン留めは、GitLab CD が独自のデプロイブランチを維持し、独自のスケジュールでユーザーのソースブランチからマージし、そのブランチの SHA にリコンサイラーをピン留めする将来の「所有ブランチ」モデルの基盤です。プラグインインターフェースは変わりません。`git_sha` アーティファクトが異なるブランチを指すだけです。

## エンティティモデル

[Application Entity PRD](https://gitlab.com/groups/gitlab-org/-/work_items/21247) が完全なデータモデルを定義します。これらのエンティティはいずれも GitLab プロジェクトのバッキングを必要としません。CD は独自のデータを持つ独自のモジュールです。このフローに関連するエンティティ:

- **Application** — グループ内の Services の名前付きグループ化。純粋なデータ。
- **Service** — 単一のデプロイ可能な単位。1 つ以上の Artifact Sources を持つ。
- **Artifact Source** — アーティファクトの取得元（GitLab コンテナレジストリ、ECR、Artifactory など）。
- **Version** — Artifact Source から検出された特定のアーティファクトバージョン。
- **Version Set** — Application 内のすべての Services の Version のキュレーションされたセット。新しい Version が出現すると自動的に作成される。デプロイをトリガーしない。
- **Environment** — `agent_id` を介してクラスターに関連付けられた名前付きデプロイターゲット（dev、staging、production）。接続性と前提条件を確認するオンボーディングワークフローを持つ。
- **Service-Environment** — Service と Environment の結合。Rollout マニフェストを読み取って検証するセットアップワークフローを持つ。
- **Rollout** — Version Set を Environment にデプロイする行為。Services 全体の Deployments を調整する。調整ワークフローを持つ。
- **Deployment** — 単一の Service-Environment ペアの Rollout を追跡する。デプロイワークフローを持つ。ドメインイベントによって駆動される状態。

### ワークフローを持つエンティティ

4 つのエンティティがその背後に AutoFlow ワークフローを持ちます。

| エンティティ | ワークフロー | 内容 |
|---|---|---|
| Environment | オンボーディング | クラスター接続を確認し、Argo CD Core + Argo Rollouts がインストールされていることを確認する。 |
| Service-Environment | セットアップ | Rollout マニフェストを読み取り、Artifact Sources に対してコンテナマッピングを検証する。 |
| Rollout | 調整 | ターゲットパーセンテージを設定し、すべての Deployments が各ゲートに到達するのを待ち、ロールバックを処理する。 |
| Deployment | 実行 | デプロイプラグインを呼び出してデプロイをアクチュエートし、進行を観察し、gate_reached / healthy / degraded をシグナルする。 |

各エンティティは `StartWorkflow` が返す `workflow_id` を保存します。オンボーディングが完了するまで、Environment は Service-Environments のための準備ができていません。セットアップが完了するまで、Service-Environment は Deployments のための準備ができていません。

### エンティティの削除

GitLab CD は CD テーブルからクラスターへの削除を**伝播しません**。Application の削除は「GitLab はこれの管理を停止します」を意味します。Argo CD アプリケーション、Argo Rollout、実行中のワークロードは実行を続けます。これは重要です: GitLab CD から移行するユーザーはダウンタイムを強いられるべきではありません。

削除 UX はアクティブなデプロイが存在する場合に警告し、明示的な確認を要求します。Application 名を入力させます（リポジトリ削除と同じ）。削除はスケジューリングされ、即座ではありません。Application 名は削除後に再使用できます。削除された Applications は UUID と以前の名前で監査証跡に残ります。履歴は保存されます。

Deployment エントリ自体は削除できません。それらは履歴的なイベントであり、ユーザーが作成したエンティティではありません。

### シークレットのスコープ

**アプリケーションシークレット**（実行中のコンテナが使用するデータベースパスワード、API キー）はオペレーターが既存のツール（Vault、external-secrets-operator、または手動）を介して管理します。GitLab CD はアプリケーションシークレットを管理しません。

**デプロイシークレット**（Git 認証情報、レジストリトークン）は MVC 用に CD テーブルに保存され、`StartWorkflowRequest` の `secrets` フィールドを介して AutoFlow に渡されます。組み込みはワークフローのシークレットマップから必要なものを取り出します。これは暫定措置です。AutoFlow が Runner インテグレーションを持つようになると、デプロイシークレットは Runner のシークレットバックエンド（Vault、クラウド KMS など）を使用し、このフィールドは削除されます。

## オンボーディング

オンボーディングには 2 つのフェーズがあります: Rails がドメインエンティティを作成し（同期、トランザクション）、その後 AutoFlow が接続性を確認してユーザーの設定を検証します（非同期、耐久性あり、ポリシー管理）。最初のデプロイまで、クラスターには何もインストールされず、何も作成されません。

### フェーズ 1: ドメインエンティティの作成（Rails）

ユーザーがオンボーディングフォームを入力します。Rails はすべてを 1 つのトランザクションで作成します。

- Application（または既存のものを選択）
- Artifact Sources を持つ Service（コンテナ名 + レジストリ URL + コンテナごとの認証情報）
- Environment（または既存のものを選択）— 名前 + `agent_id`
- Service-Environment の設定 — マニフェストリポジトリ URL、認証情報、ファイルパス、ロールアウト戦略

すべてのエンティティはすぐに存在します。ただし準備ができていません。

### フェーズ 2: Environment オンボーディング（AutoFlow）

Rails はオンボーディングワークフローをコンパイルして送信します。これは Environment スコープでの 1 つの `Get` 呼び出しです。プラグインがそのターゲットに対して「準備完了」が何を意味するかを決定します。

```python
observed = run("builtin://cd.deploy.get", {
    "plugin": "argo-rollouts",
    "target_config": {"agent_id": environment.agent_id},
})

if not observed.ready:
    run("builtin://emit", {
        "type": "com.gitlab.cd.environment.not_ready",
        "data": {"environment_id": environment.id, "reason": observed.reason},
    })
    fail(observed.reason)

run("builtin://emit", {
    "type": "com.gitlab.cd.environment.ready",
    "data": {"environment_id": environment.id},
})
```

Argo CD + Argo Rollouts プラグインの場合、Environment スコープでの `Get` は agentk 接続性を確認し、両方のコントローラーが実行中であることを確認します。Lambda プラグインの場合、IAM 認証情報とリージョンアクセスを確認します。ワークフローは知らず、気にしません。

ユーザーのためにコントローラーをインストールおよび管理することはスコープ外です。そのパスは以前に失敗しました（GMA v1/v2）。私たちは所有していないクラスターの何千ものインストールを操作する能力がなく、ユーザーは私たちが診断できない問題のせいで私たちを責めることになります。GitLab CD は環境に接続します。プロビジョニングはしません。

### フェーズ 3: Service-Environment セットアップ（AutoFlow）

Environment が準備完了になると、Rails は各 Service-Environment のセットアップワークフローをコンパイルして送信します。フェーズ 2 と同じ形状です。Service-Environment スコープでの 1 つの `Get` 呼び出し:

```python
observed = run("builtin://cd.deploy.get", {
    "plugin": "argo-rollouts",
    "target_config": {
        "agent_id": environment.agent_id,
        "manifest_repo_url": service.manifest_repo_url,
        "manifest_repo_credentials": service.manifest_repo_credentials,
        "manifest_file_path": service.manifest_file_path,
        "expected_containers": ",".join([s.container_name for s in service.artifact_sources]),
    },
})

if not observed.ready:
    run("builtin://emit", {
        "type": "com.gitlab.cd.service_environment.not_ready",
        "data": {"service_environment_id": service_environment.id, "reason": observed.reason},
    })
    fail(observed.reason)

run("builtin://emit", {
    "type": "com.gitlab.cd.service_environment.ready",
    "data": {
        "service_environment_id": service_environment.id,
        "rollout_name": observed.rollout_name,
        "rollout_namespace": observed.rollout_namespace,
    },
})
```

Argo CD + Argo Rollouts プラグインは Git からマニフェストを読み取り、Rollout CR を解析し、そのコンテナ名が宣言された Artifact Sources と一致することを検証します。準備完了/未完了と発見された Rollout 名とネームスペースを返します。Rails はそれらを後のデプロイワークフローで使用するために Service-Environment に保存します。

Argo CD Application CR 自体は、最初のデプロイ時にデプロイプラグインによって作成されます。GitLab CD がいつ同期するかを制御できるように、`syncPolicy` なしで設定されます。ユーザーの Git リポジトリとワークフローは影響を受けません。

### 既存のワークロードのオンボーディング

SHA ピン留めにより、既存のワークロードのオンボーディングが大幅に簡単になります。すでに Argo CD Applications を持つユーザーは、以下を行うだけです。

1. Application の自動同期を無効にする（または GitLab CD にさせる）。
2. GitLab CD を既存の Application CR に向ける。
3. GitLab CD が `targetRevision` とパラメーターオーバーライドを引き継ぐ。

マイグレーション不要、ダウンタイム不要、リコンサイラーとの戦い不要。GitLab CD は調整された SHA に関する更新を発行し、ユーザーが自動同期を再び有効にした場合のドリフトを表示できるようにすべきです。

### ユーザーが提供するものと GitLab が生成するもの

| 内容 | ユーザーが提供 | GitLab が生成 |
|---|---|---|
| Argo CD Core | クラスターにインストール済み | — |
| Argo Rollouts コントローラー | クラスターにインストール済み | — |
| Argo CD `Application` CR | マニフェストリポジトリ URL + 認証情報 + ファイルパス | 最初のデプロイ時にデプロイプラグインが作成 |
| Artifact Sources | コンテナ名 + レジストリ URL + 認証情報 | — |
| ロールアウト戦略 | カナリアステップ、ゲート、ロールバックポリシー | `spec.strategy` YAML はデプロイ時にプラグインが生成 |

クラスターの前提条件: 実行中の agentk と Argo CD Core と Argo Rollouts がインストールされていること。その他はすべてデプロイプラグインを通じて処理されます。

ワークフローが失敗した場合（認証情報が不正、クラスターに到達できない、ファイルパスが間違っている）、ドメインエンティティはまだ存在します。ユーザーは UI で問題を修正して再試行します。ワークフローは失敗したステップからリプレイされます。

## ヘルスステータスのモニタリング

デプロイワークフローは 1 つのものを観察します: Argo Rollout CR。同期確認はプラグインの問題です。`cd.deploy.set` は望ましい状態が Argo CD Application CR に適用されて同期が実行中になってから返します。その時点から、ワークフローは進行のために Rollout CR を監視します。

### Argo Rollout ステータス

Rollout CR はカナリア進行の詳細を提供します。

- `status.phase` — Healthy、Progressing、Paused、Degraded
- `status.currentStepIndex` — カナリアが到達したゲート
- `status.pauseConditions` — ロールアウトが一時停止している理由（例: `CanaryPauseStep`）
- `status.message` — 人間が読めるステータス

これがワークフローのステートマシンを駆動するものです。Paused はゲートに到達したことを意味し、Healthy はデプロイが完了したことを意味し、Degraded は何かが間違っていることを意味します。

### Argo CD Application ステータス（プラグイン内部）

プラグインは Application CR を内部で使用して、`Set` から返る前に特定の SHA が同期されたことを確認します。ピン留めされた SHA に一致する `status.sync.revision` が、パッチが適用されたかをプラグインが知る方法です。ワークフローはこれを見ません。プラグインの詳細です。

コンテナ名の検証はプラグインの `Get` 内でオンボーディング中の早期健全性チェックとして Service-Environment スコープで行われます。ランタイムのヘルスは Rollout CR から来ます。

## デプロイフロー

### ステップ 1: 新しいバージョンの検出

Artifact Source が新しいコンテナイメージバージョンを検出します。ソースはさまざまです。

- GitLab コンテナレジストリは Events Platform を介して内部イベントを発行します。
- 外部レジストリ（ECR、Artifactory）は Webhook を送信するか、GitLab によってポーリングされます。

イベントは [Events Platform](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18106) を通じて Rails の CD Sidekiq ワーカーに流れます。

ワーカーは CD テーブルを参照します。

1. このレジストリとイメージに一致する Artifact Source を持つ Service はどれか？
2. 一致する各 Artifact Source に新しい **Version** レコードを作成する。
3. 影響を受ける各 Application に対して、新しい **Version Set** を組み立てる — すべての Service の最新バージョン。

Version Set が利用可能になりました。**デプロイはまだ行われません。** AutoFlow は関与しません。

### ステップ 2: ユーザーが Rollout を作成する

ユーザー（またはポリシー）が Version Set を Environment にデプロイすることを決定します。これにより `Pending` 状態の **Rollout** レコードが CD テーブルに作成されます。Rollout には `Pending` 状態の Service ごとに 1 つの **Deployment** レコードが含まれます。

Rails は 2 レベルのワークフローをコンパイルします。

1. Services 全体を調整する **Rollout ワークフロー** — 各ゲートでターゲットパーセンテージを設定し、すべての Deployments がそれに到達するのを待つ。
2. 実際のカナリア進行を実行する Service-Environment ごとの **Deployment ワークフロー**。

両方とも `StartWorkflow` を介して AutoFlow に送信されます。Rails は `workflow_id` を各エンティティに保存します。

ロールバックも同じ方法で機能します。ユーザーは以前の任意の Version Set をターゲットにした新しい Rollout を作成できます。メカニズムは同一です — 同じワークフロー、以前のアーティファクト。すべての Version Set は CD テーブルに保存されているため、任意のポイントへのロールバックが常に可能です。

### ステップ 3: Rollout 調整

Rollout ワークフローはゲートを駆動します。各 Deployment に何パーセントをターゲットにするかを伝え、すべてが到達するのを待ちます。

```python
run("builtin://emit", {
    "type": "com.gitlab.cd.rollout.started",
    "data": {"rollout_id": rollout.id},
})

for gate in gates:
    # すべての Deployments に進むよう指示
    for deployment in rollout.deployments:
        run("builtin://emit", {
            "type": "com.gitlab.cd.deployment.advance",
            "data": {
                "deployment_id": deployment.id,
                "target_weight": gate.weight,
            },
        })

    # すべての Deployments がターゲットに到達するのを待つ
    for deployment in rollout.deployments:
        ev = wait_for_event(
            type="com.gitlab.cd.deployment.gate_reached",
            filter={
                "deployment_id": deployment.id,
                "weight": gate.weight,
            },
        )

    # すべての Deployments がターゲットに — Rollout レベルのゲート
    run("builtin://emit", {
        "type": "com.gitlab.cd.rollout.gate_reached",
        "data": {"rollout_id": rollout.id, "weight": gate.weight},
    })

# すべての Deployments が healthy を報告するのを待つ
for deployment in rollout.deployments:
    ev = wait_for_event(
        type="com.gitlab.cd.deployment.healthy",
        filter={"deployment_id": deployment.id},
    )

run("builtin://emit", {
    "type": "com.gitlab.cd.rollout.healthy",
    "data": {"rollout_id": rollout.id},
})
```

各 Deployment は独自のペースでターゲットに到達します — 異なるソーク期間、異なるヘルスチェックのタイミング。Rollout は次のゲートに移る前に全員が追いつくまで待ちます。これにより同一のタイミングを強制せずに調整が実現されます。

いずれかの Deployment が `degraded` を報告した場合、Rollout ワークフローはアプリケーションレベルの一貫性を維持するためにすべての Deployments のロールバックを開始します。ロールバック承認は Deployment ごとではなく、Rollout レベルで行われます。

### ステップ 4: デプロイ実行

各 Deployment ワークフローは単一の Service-Environment のメカニクスを処理します。デプロイプラグインを呼び出してデプロイをアクチュエートし、クラスターイベントを介して進行を観察します。

```python
run("builtin://emit", {
    "type": "com.gitlab.cd.deployment.started",
    "data": {"deployment_id": deployment.id},
})

artifacts = [{"name": "manifests", "type": "git_sha", "reference": deployment.sha}]
for v in versions:
    artifacts.append({"name": v.name, "type": "oci_image", "reference": v.full_image_reference})

target_config = {
    "agent_id": environment.agent_id,
    "app_name": service_environment.app_name,
    "app_namespace": service_environment.app_namespace,
    "rollout_name": service_environment.rollout_name,
    "rollout_namespace": service_environment.rollout_namespace,
    "artifact_map": service_environment.artifact_map,
}

# このターゲットの状態変化をサブスクライブ
subscription = run("builtin://cd.deploy.subscribe", {
    "plugin": "argo-rollouts",
    "target_config": target_config,
})

# 最初のゲートでアクチュエート。プラグインは必要に応じて Application CR を作成し、
# targetRevision をピン留めし、パラメーターオーバーライドを適用し、同期する。
run("builtin://cd.deploy.set", {
    "plugin": "argo-rollouts",
    "artifacts": artifacts,
    "weight": gates[0].weight,
    "target_config": target_config,
})

while True:
    ev = wait_for_event(
        type="com.gitlab.cd.argo.rollout.status_changed",
        filter={
            "rollout_name": service_environment.rollout_name,
            "namespace": service_environment.rollout_namespace,
            "agent_id": environment.agent_id,
        },
    )

    phase = ev["data"]["phase"]

    if phase == "Paused":
        step_index = ev["data"]["current_step_index"]
        weight = gates[step_index].weight

        run("builtin://emit", {
            "type": "com.gitlab.cd.deployment.gate_reached",
            "data": {
                "deployment_id": deployment.id,
                "weight": weight,
            },
        })

        # Rollout ワークフローがこのゲートを過ぎるよう指示するのを待つ
        advance = wait_for_event(
            type="com.gitlab.cd.deployment.advance",
            filter={"deployment_id": deployment.id},
        )
        next_weight = advance["data"]["target_weight"]

        if gates[step_index].soak_duration:
            sleep(seconds=gates[step_index].soak_duration)

        run("builtin://cd.deploy.set", {
            "plugin": "argo-rollouts",
            "artifacts": artifacts,
            "weight": next_weight,
            "target_config": target_config,
        })

    elif phase == "Healthy":
        run("builtin://emit", {
            "type": "com.gitlab.cd.deployment.healthy",
            "data": {"deployment_id": deployment.id},
        })
        break

    elif phase == "Degraded":
        run("builtin://emit", {
            "type": "com.gitlab.cd.deployment.degraded",
            "data": {"deployment_id": deployment.id},
        })
        break

    elif phase == "Progressing":
        continue

run("builtin://cd.deploy.unsubscribe", {
    "plugin": "argo-rollouts",
    "subscription_id": subscription.id,
})
```

ワークフローはクラスターに直接触れません。ターゲット固有のすべて（`targetRevision` のパッチ、パラメーターオーバーライドの適用、一時停止条件のクリア、最初の呼び出し時の Application CR の作成）はプラグイン内に存在します。ワークフローは望ましい状態を説明し、イベントに反応するだけです。

`Degraded` 時、Deployment ワークフローは発行して終了します。カナリー自体を中断しません。Rollout 調整ワークフローがアプリケーションレベルで何をするかを決定します — 通常、一貫性を保つためにすべての Deployments のロールバックを開始します。

#### 生成された戦略

ゴールデンパスプラグインは、すべてのトラフィック増分が無限の `pause: {}` でゲートされるカナリー戦略を生成します。コントローラーは独自に進めることができません。

ユーザーが 5%、25%、50%、100% のステップでロールアウトを設定した場合:

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

より高い重みを持つ連続した `Set` 呼び出しが一時停止をクリアし、コントローラーが一度に 1 つのゲートを進めます。

#### ゴールデンパスプラグインの Subscribe の動作

`builtin://cd.deploy.subscribe` はプラグインの `Subscribe` を呼び出します。ゴールデンパスプラグインは登録を、`target_config` の Rollout CR にスコープされた agentk の Graph API サブスクリプションメカニズムを介した Kubernetes ウォッチに変換します。agentk はインフォーマーを開始し、各 `.status` の変更でプラグインが CloudEvent を KAS に発行します:

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

AutoFlow が唯一のコンシューマーです。パークされた `wait_for_event` にイベントをマッチングし、ワークフローをリプレイします。ワークフローが（何らかの理由で）終了すると、`Unsubscribe` が登録を解放します。コンパイラーが発行した呼び出しによる明示的な解放、または AutoFlow が異常終了時のクリーンアップによる暗黙的な解放です。

Lambda または Cloud Run プラグインの `Subscribe` はまったく実装されないかもしれません。コンパイラーはそれを知っており、代わりに `cd.deploy.get` + `sleep` のポーリングループを発行します。ターゲットごとに Starlark が異なります。プラグインインターフェースは異なりません。

### ステップ 5: ロールバック

ロールバックは別のデプロイです — 同じワークフロー、以前のアーティファクト。コンパイラーは、前の Version Set の CD テーブルに記録された SHA とパラメーター値で `cd.deploy.set` を発行します。プラグインは望ましい状態が安定した ReplicaSet と一致することを検出し、カナリーステップを実行せずに `Healthy` に高速化します。

ロールバックは中断とは異なります。中断はカナリーを停止し、Argo Rollout を `Degraded` のままにし、新しい（失敗した）バージョンがまだ spec にあります。ロールバックは spec を既知の良好なバージョンに戻します。コントローラーは安定したテンプレートを認識し、即座に `Healthy` とマークします。

| 操作 | メカニズム | 結果 |
|---|---|---|
| 中断 | プラグインが `status.abort: true` をパッチ | `Degraded`。安定した RS がサービング中。新しいバージョンがまだ spec にある。 |
| ロールバック | 以前の Version Set のアーティファクトで重み 100 で `cd.deploy.set` | `Healthy`。コントローラーが安定したテンプレートを検出し、ステップをスキップ。 |
| 再試行 | プラグインが `status.abort: false` をパッチ | 同じ新しいバージョンでステップ 0 からカナリーを再開。 |

デフォルトのロールバックポリシー: `Failed` 時に即座にロールバック、`Degraded` 時に 30 分後にロールバック（Services は起動時に一時的に不安定になる場合がある）。両方とも Application レベルで設定可能です。

### ループ内人間

HITL は 2 つのレベルで機能します。

**ワークフロー内でインライン。** コンパイラーは承認ゲートを直接エンコードできます。`com.gitlab.cd.approval.resolved` が到着するまでパークする `wait_for_event`。ユーザーはこれをロールアウト戦略の一部として設定します（「50% で承認が必要」）。

**関数呼び出しに対するポリシー。** AutoFlow はすべての `run` 呼び出しでポリシー（インスタンス → 組織 → グループ → プロジェクト、またはワークフロー内でインライン化されたもの）を評価します。ポリシーは任意の関数に承認を要求できます — 例: 「production に対するすべての `cd.deploy.set` 呼び出しは承認が必要」。ワークフローは透過的にパークします。

両方のメカニズムが同じプリミティブを使用します: パーク、イベント発行、承認イベントを待つ、リプレイ。

## 組み込み関数のサマリー

すべての組み込みは MVC 用に KAS で実行されます。軽量である必要があります。KAS は共有コントロールプレーンであり、ワークロード環境ではありません。

デプロイ組み込み（`cd.deploy.*`）は KAS でデプロイプラグインバイナリをロードし、gRPC 経由で呼び出します。プラグインはターゲット固有の作業を行います — クラスター PATCH、クラウド SDK 呼び出し、マニフェスト解析、インフォーマーサブスクリプションなど。AutoFlow はそのいずれも見ません。

AutoFlow が Runner インテグレーションを持つようになると、どの組み込みも Runner 環境にオフロードできます。ワークフローは変わりません。`run("builtin://cd.deploy.set", ...)` は、KAS がインプロセスで実行するか、Runner にディスパッチするかに関わらず同じように機能します。

| 関数 | 実行場所 | 目的 |
|---|---|---|
| `builtin://emit` | KAS → Events Platform | CD ドメインイベントを公開する。リプレイ冪等性のために `run` で呼び出す。 |
| `builtin://cd.deploy.set` | KAS → デプロイプラグイン | プラグインで `Set(DesiredState)` を呼び出す。デプロイをアクチュエートする。 |
| `builtin://cd.deploy.get` | KAS → デプロイプラグイン | プラグインで `Get(Target)` を呼び出す。現在の状態を読み取る。Environment と Service-Environment スコープでの準備完了確認にも使用。 |
| `builtin://cd.deploy.subscribe` | KAS → デプロイプラグイン | プラグインで `Subscribe(Target)` を呼び出す。状態変化への関心を登録する。イベントは CloudEvents として流れ戻る。 |
| `builtin://cd.deploy.unsubscribe` | KAS → デプロイプラグイン | プラグインで `Unsubscribe(SubscriptionId)` を呼び出す。登録を解放する。 |

## 構築が必要なもの

| コンポーネント | ステータス | 備考 |
|---|---|---|
| AutoFlow エンジン | 構築中 | `run`、`sleep`、`wait_for_event` を持つ耐久性ワークフロー。[gitlab-org/cluster-integration/gitlab-agent#821](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/work_items/821) |
| `AutoFlow.StartWorkflow` RPC | 新規 | Rails がコンパイルされた Starlark ワークフローを送信するための命令型 gRPC エンドポイント。 |
| Events Platform | 設計中 | KAS を通じた CloudEvent バス。[gitlab-com/content-sites/handbook!18106](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18106) |
| CD コンパイラー（Argo Rollouts ターゲット） | 新規 | Environment オンボーディング、Service-Environment セットアップ、Rollout 調整、Deployment 実行用の Starlark を生成する。 |
| Rails の CD テーブル | 新規 | Application、Service、Artifact Source、Environment、Service-Environment、Version、Version Set、Rollout、Deployment。 |
| CD Sidekiq ワーカー | 新規 | Events Platform から CD ドメインイベントを消費し、CD テーブルのエンティティ状態を更新する。 |
| `Gitlab::Kas::Client#start_workflow` | 新規 | `StartWorkflow` 用の Rails 側 gRPC クライアント。`send_autoflow_event` のパターンに従う。 |
| デプロイプラグインフレームワーク | 新規 | KAS での go-plugin ベースの gRPC インターフェース。Fleeting と同じパターン。長時間実行プラグインサブプロセス。プラグインライフサイクル、バージョニング、OCI 配布を処理する。 |
| デプロイプラグイン protobuf インターフェース | 新規 | `Set`、`Get`、`Subscribe`、`Unsubscribe`。安定した、バージョン管理された契約。 |
| ゴールデンパス Argo CD + Argo Rollouts プラグイン | 新規 | Application CR を作成し、`targetRevision` をピン留めし、パラメーターオーバーライドを適用し、`spec.strategy` を生成し、agentk を通じた PATCH によりカナリー進行を駆動し、Argo Rollout CR ステータスを CloudEvents にブリッジする不透明な Go バイナリ。 |
| Graph API プッシュサブスクリプション | 新規 | プラグインが特定の Kubernetes リソースへのエージェントごとの関心を登録できるよう KAS の Graph API を拡張する。サブスクリプション設定が agentk にプッシュされ、ステータスの変更がプラグインにプッシュバックされ、CloudEvents に変換され、ワークフロー終了時にクリーンアップ。 |
| `builtin://emit` | 新規 | Events Platform に CloudEvent を公開する。 |
| `builtin://cd.deploy.set` / `.get` / `.subscribe` / `.unsubscribe` | 新規 | デプロイプラグインをロードし、gRPC 経由で対応する RPC を呼び出し、結果を返す。 |

## オープンクエスチョン

**イベント to ワークフローのマッチング。** `wait_for_event` は AutoFlow プリミティブとして定義されていますが、受信 CloudEvent をパークされたワークフローにマッチングするメカニズムはまだ設計されていません。この設計はそれに大きく依存しています — クラスターイベントが Deployment ワークフローを起動し、Rollout から Deployment への調整はイベントを使用し、承認イベントがパークされたゲートを起動します。マッチングシステム（サブスクリプションベース？ フィルタリングを持つファンアウト？ ワークフロー ID によるインデックス？）は [AutoFlow MVC](https://gitlab.com/groups/gitlab-org/-/work_items/21235) 設計の一部である必要があります。

**Graph API プッシュサブスクリプション。** [Graph API](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/blob/master/doc/graph_api.md) は現在プルベースです — クライアントが接続してストリーミングします。ゴールデンパスデプロイプラグインはプッシュが必要です: KAS 内からサブスクリプションを登録し、agentk がイベントをプラグインにプッシュバックし、プラグインのアンロード時にクリーンアップします。@ash2k はこれが実現可能であると確認しています。設計に必要なもの: プラグインが関心を登録するための KAS 側 API、サブスクリプション設定の永続化、関連するエージェントへのプッシュ、クリーンアップのセマンティクス。フォローアップとして追跡中。

**Argo CD Application CR の作成。** ゴールデンパスプラグインは最初のデプロイ時に Application CR を作成します。既存のワークロードをオンボードするユーザーは GitLab CD を既存の CR に向けます。これが適切なデフォルトですか、それともユーザーに常に CR を提供させるべきですか？@gabrielengel_gl からの意見を待っています。

**ポリシーエンジン。** ポリシーは Auth Stack（AUTH-014 ADR）によって評価される Cedar になります。それが `run()` インターセプションとどのように合致するか — 例: 「すべての production `cd.deploy.set` 呼び出しは承認が必要」 — は別途検討中です。

**戦略生成 UI。** CD UI はユーザーにカナリーステップとゲートの動作を設定させる必要があります。生成された `spec.strategy` YAML は実装の詳細です — ユーザーはそれを見るべきではありません。

**外部 Git 認証。** デプロイプラグインはマニフェストを読み取り Argo CD の同期を設定するために Git 認証情報が必要です。認証情報モデル（パーソナルトークン、プロジェクトトークン、OAuth）と認証情報が Service-Environment ごとにどのようにスコープされるかは設計作業が必要です。

**CD コンパイラー設計。** コンパイラーはターゲット非依存のロールアウト設定をターゲット固有の Starlark に変換します。入力スキーマ、コンパイラーアーキテクチャ、新しいターゲット（Desired State Sources を含む）の追加方法はここでは説明されていません。

**ワークロード参照。** Argo Rollouts はインライン `spec.template` だけでなく、別の Deployment を指す `spec.workloadRef` をサポートします。MVC のスコープですか、明示的に対象外ですか？@gabrielengel_gl からの意見を待っています。
