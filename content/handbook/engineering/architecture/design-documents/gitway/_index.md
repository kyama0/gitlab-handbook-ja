---
title: "Gitway"
description: "すべてのリポジトリデータの入口となる Git ゲートウェイサービスのアーキテクチャ提案です。"
status: proposed
creation-date: "2026-09-01"
authors: [ "@jcaigitlab" ]
approvers: [ ]
owning-stage: "~group::gitaly"
participating-stages: [ "~group::gitaly" ]
toc_hide: false
upstream_path: /handbook/engineering/architecture/design-documents/gitway/
upstream_sha: 52419353ea755a1ac823553385f8636ff2fcde17
lastmod: "2026-10-26T14:07:21-04:00"
translated_at: "2026-11-01T08:35:16+00:00"
translator: codex
stale: false
---

{{< engineering/design-document-header >}}

これは提案です。イテレーションを続けており、まだ確定した設計ではありません。

## 概要 {#summary}

Gitaly と GitLab Rails モノリスは互いに深く結合しています。
リポジトリデータは Gitaly に存在しますが、Rails を通じてアクセスされ、
GitLab Project の Rails モデルに結び付いています。

これが、API ファーストの Git インフラストラクチャや、エージェント規模の
ストレージの開発を妨げています。

このブループリントは、すべてのクライアントと
Gitaly の間に位置する Git ゲートウェイ、**gitway** を提案します。これにより、GitLab の Git データを「サービスとしてのリポジトリ」に変えます。
Rails モノリスのような内部クライアントも、API
クライアントやエージェントのような外部クライアントも、Gitway の
API を通じてサービスとして Git リポジトリにアクセスします。

クライアントは UUID でリポジトリを指定し、Git 操作を要求します。リポジトリの
保存、配置、レプリケーションの方法は、サービス境界の内側の実装の詳細です。

```mermaid
architecture-beta
    service terminal(internet)[Developer terminal]
    service rails(server)[GitLab Rails]
    service agent(internet)[Coding agent]

    group repos(cloud)[Git Repositories as a Service]

    service gitway(server)[gitway] in repos

    group nodes(cloud)[Gitaly Node] in repos
    service gitaly(server)[Gitaly service] in nodes
    service disk(disk)[Repository storage] in nodes

    terminal:B --> T:gitway
    rails:R --> L:gitway
    agent:T --> B:gitway

    gitway:R --> L:gitaly
    gitaly:R -- L:disk
```

## 動機：明確な API 境界 {#motivation-clean-api-boundaries}

現在、明確なリポジトリ API 境界はありません。リポジトリという概念は
Rails と Gitaly にまたがり、壊れやすいスプリットブレイン状態を生んでいます。事実上、Rails
がリポジトリディレクトリです。さらに、Gitaly がリポジトリの保存に使用する
ディスクパスを実際に*決定*しています。このため、Git
バックエンドの発展は煩雑です。ストレージレイアウトを変更するには、Rails のコード
変更と、場合によっては移行も必要になるためです。

この結合により、Git ストレージのイテレーションが難しくなっています。
Rails と Gitaly の間の契約から、ディスクパスなどの内部の詳細が漏れ出しています。
そのため、ディスクパスを不透明なトークンとして扱い、内部の目的で
書き換えるといった、不自然な設計上の選択を迫られます。

また、オブジェクトプールのようなケースでも脆弱さを生みます。本来、ストレージの最適化は
Raas（サービスとしてのリポジトリ）だけが扱い、Rails が知る必要はないのに、
そのライフサイクルを Rails が扱っているためです。

明確な API 境界があれば、双方は API 境界の反対側の
内部実装の詳細を気にせずに、イテレーションを行い、機能を開発できます。

## 目標 {#goals}

- Rails だけでなく、あらゆるクライアントにリポジトリ操作を公開する、
  独立した Git ゲートウェイです。
- `Project` から独立した、第一級のリソースとしてアドレス指定できるリポジトリです。
- 移行作業を最小限に抑えるため、Rails が gRPC で Gitway と通信し続けられる
  gRPC パススルーから始めます。
- 移行中も、最小限の変更で既存の Rails 機能を動作させ続けます。

## 提案 {#proposal}

Gitway は「サービスとしてのリポジトリ」の API 境界となる Go サービスです。
移行作業を最小限に抑えるため、Rails は引き続き gRPC で Gitway と
通信します。他のクライアントは HTTP で Gitway と通信します。GitLab の
主要なリポジトリディレクトリとして機能します。

```mermaid
flowchart LR
    Rails[GitLab Rails]
    Clients[API clients and agents]

    subgraph Raas[Repositories as a service &lpar;Raas&rpar;]
        direction LR
        subgraph Gitway[gitway]
            direction TB
            GRPC[gRPC server<br/>passthrough]
            REST[HTTP server<br/>REST API]
            DB[(PostgreSQL<br/>repositories)]
            GRPC -->|resolve UUID| DB
            REST -->|resolve UUID| DB
        end

        Gitaly[Gitaly]

        GRPC -->|gRPC| Gitaly
        REST -->|gRPC| Gitaly
    end

    Rails -->|gRPC| GRPC
    Clients -->|HTTP| REST
```

## 設計と実装の詳細 {#design-and-implementation-details}

### データモデル {#data-model}

Gitway が主に扱うデータモデルはリポジトリです。

|id|storage_name|name|description|owner_id|metadata|state|
|--|------------|-------------|----|-----------|--------|--------|
|9b2f4c1e-3d5a-4f88-b7c6-1a2e5d90f331|default|gitaly|A gRPC golang service for Git data|21|{"relative_path":"@hashed/ce/ea/ceead675…7b71.git"}|ready|
|1f6a8e77-0c34-4b91-8d52-6e9b4a17c5de|default|packhorse|A high throughput Git cache|21|{"relative_path":"@hashed/73/47/73475cb4…8049.git"}|deleted|
|c47e0d2a-8b19-4e6f-9a03-5f7d1c88b204|default|gitlab|GitLab is the open-source DevSecOps platform that provides a complete software development lifecycle toolchain|21|{"relative_path":"@hashed/5a/3c/5a3ca21d…721d.git"}|deleted|

### 認証 {#authentication}

Gitway は認証しません。Workhorse が引き続き Rails で認証し、
Gitway に到達するヘッダーにメタデータを渡します。Gitway は、その
メタデータヘッダーをそのまま Gitaly に渡します。

将来のイテレーションでは、Gitway が認証のために GATE と統合する可能性があります。

### 透過的な gRPC パススルー {#transparent-grpc-passthrough}

Gitway は、Rails が Gitaly と通信するための透過的な gRPC パススルーとなる
gRPC サーバーを備えます。Rails の接続先を Gitway に向ければ、単に別の Gitaly サーバーとして見えるため、
Gitway への移行作業を最小限に抑えられます。Gitway は
ヘッダーと gRPC protobuf リクエストをそのまま Gitaly に転送し、
レスポンスをプロキシして返します。

### HTTP REST API {#http-rest-api}

Gitway は、リポジトリ操作の API を公開する HTTP サーバーも
備えます。

#### リポジトリの CRUD 操作 {#repository-crud-operations}

```plaintext
POST   /v1/repositories
GET    /v1/repositories/{id}
DELETE /v1/repositories/{id}
```

`GET /v1/repositories` によるコレクションの一覧取得は、最初の
イテレーションの後に延期します。上記の各エンドポイントは、`uuid` で指定する単一のリポジトリに作用するため、
呼び出しの認可は、その 1 つのリポジトリに関する問題です。コレクションの読み取りには
そのような手掛かりがありません。誰がリポジトリを列挙できるか、
結果の範囲をどう限定するかを決める必要があります。その決定が最初のイテレーションを妨げるべきではありません。

#### リポジトリの基本操作 {#repository-primitives}

```plaintext
GET    /v1/repositories/{id}/refs
PATCH  /v1/repositories/{id}/refs/{name}
GET    /v1/repositories/{id}/blobs/{oid}
GET    /v1/repositories/{id}/trees/{ref}
...
GET    /v1/repositories/{id}/info/refs?service=git-upload-pack
POST   /v1/repositories/{id}/git-upload-pack
POST   /v1/repositories/{id}/git-receive-pack
```

リポジトリは第一級のリソースになります。`Project` 行なしで、エージェントのワークスペース、
アーティファクトストア、ドキュメントごとのリポジトリ、内部サービスの Git 基盤として
利用できます。

Rails モノリス（および他のサービスやクライアント）から見ると、
リポジトリは uuid によって一意に識別されます。

## 開発フェーズ {#development-phases}

想定している開発フェーズは次のとおりです。

### フェーズ 1：純粋な gRPC プロキシとして Gitway をデプロイ {#phase-1-deploy-gitway-as-a-pure-grpc-proxy}

最も単純な目標は、Gitaly への純粋なパススループロキシとして
Gitway を .com にデプロイすることです。Workhorse、Rails、Zoekt、その他の
クライアントと統合しますが、処理は行いません。

GitLab Saas などの既存インスタンスでは、すべてのストレージの接続先を、
gitway ノード群にリバースプロキシする gitway ロードバランサーに向けます。

変更前：

```ruby

gitlab_rails['repositories_storages'] = {
    'default'  => { 'gitaly_address' => 'tcp://gitaly1.internal:8075' },
    'storage1' => { 'gitaly_address' => 'tcp://gitaly1.internal:8075' },
    'storage2' => { 'gitaly_address' => 'tcp://gitaly2.internal:8075' },
  }

```

変更後：

```ruby

gitlab_rails['repositories_storages'] = {
    'default'  => { 'gitaly_address' => 'tcp://gitway.internal:8075' },
    'storage1' => { 'gitaly_address' => 'tcp://gitway.internal:8075' },
    'storage2' => { 'gitaly_address' => 'tcp://gitway.internal:8075' },
  }

```

### フェーズ 2：Gitway をリポジトリディレクトリにする {#phase-2-gitway-becomes-the-repository-directory}

Gitway はリポジトリディレクトリになるため、データソースを持つようになります。
保存が必要なデータの[スキーマ](#data-model)は、こちらです。

これにはデータ移行が必要ですが、できる限り遅延移行することを
目指します。

移行の両側、Rails 側と Gitway 側を
考えます。

#### Rails 側 {#rails-side}

現在、Rails データベースにはリポジトリ情報が含まれています。Rails の
`project_repositories` テーブルは次のとおりです。

| 列 | 型 |
|--------|------|
|id|bigint|
|shard_id|bigint|
|disk_path|character varying|
|project_id|bigint|
|object_format|smallint|

`project_repositories`、
`pool_repositories`、`snippet_repositories`、`group_wiki_repositories`、
`project_wiki_repositories`、`design_management_repositories` など、他にも同様のテーブルがあります。これらの
テーブルはそれぞれ、リポジトリと、Gitaly ノード上の保存場所に関する
同様の情報を含んでいます。

目標は、Rails データベースからリポジトリに関する知識を
取り除くことです。リポジトリのメタデータを含むテーブルに
`uuid` 列を追加するだけで、これを実現できると考えます。

| 列 | 型 |
|--------|------|
|id|bigint|
|shard_id|bigint|
|disk_path|character varying|
|project_id|bigint|
|object_format|smallint|
|uuid|uuid|

`uuid` 列には、遅延移行と一括移行の両方で
値を設定します。

#### Gitway 側 {#gitway-side}

Gitway 側では、アクティブなリポジトリについて、Rails からリポジトリに対する
読み取りまたは書き込みの gRPC 呼び出しを受けるたびに、Gitway の `repositories` テーブルに
行を upsert することで、*遅延*
移行を実現できます。これが「初回登録」の呼び出しで、Gitway が
データストアに新しいリポジトリ行を挿入した場合、Gitway はレスポンスヘッダーにも
メタデータとして `uuid` を挿入し、Rails は自身の `uuid` 列を
バックフィルできます。

非アクティブなリポジトリについては、プロジェクトの代わりに無害な読み取り RPC を
発行するだけで、上記のプロセスを開始できます。

#### Workhorse {#workhorse}

Workhorse は HTTP リクエストを Rails と Gitaly に転送します。
Raas（サービスとしてのリポジトリ）は Rails から独立して機能する想定なので、
Gitway に向かう HTTP リクエストが Rails を経由する必要は
ないはずです。

代わりに、Workhorse は Rails を通じて認証した後、URL の一致パターンに基づき、
HTTP リクエストを Gitway に直接ルーティングできます。

これは、クローン用の git-upload-pack リクエストを Gitaly に直接ルーティングする方法と
同様のパターンになります。

#### 移行経路 {#migration-paths}

次のフローチャートは、各種の移行経路を示します。

```mermaid
flowchart TD
    A[Repository] --> B{"1. Existing or New?"}

    B -->|New| N["2. Repository lifecycle RPCs create and<br/>modify entries in Gitway's DB"]
    N --> Z["6. Gitway owns repository identity"]

    B -->|Existing| C{"3. Active or inactive?"}

    C -->|Active| D["4a. Backfill a Gitway DB record<br/>if one doesn't already exist"]
    C -->|Inactive| E["4b. Separate process calls Gitway<br/>to create the repository"]

    D --> F["5. Backfill Rails DB with the uuid of<br/>the Gitway repository directory"]
    E --> F
    F --> Z
```

[4a] アクティブなリポジトリの Gitway DB レコードをバックフィルするには、Rails からの
あらゆる呼び出しでデータベースを確認し、まだレコードが存在しなければ
DB レコードを作成するだけです。`project_repositories` などの Rails DB テーブルも
バックフィルする必要があります。これには複数の方法があります。たとえば、次のような方法です。

1. Gitway が gRPC トレーラーで `uuid` フィールドを返します。Rails はこの
   `uuid` フィールドの有無を確認し、存在する場合は sidekiq ジョブを通じて
`project_repositories` などのテーブルに `uuid` を upsert します。
2. Gitway のバックグラウンドプロセスが、この `uuid` とリポジトリを指定して、Rails の新しい内部エンドポイントを
   呼び出し、適切なテーブルに
`uuid` を upsert する sidekq ジョブを開始します。

[4b] 非アクティブなリポジトリについては、[4a] を開始する別のプロセスが
必要です。おそらく、すべてのプロジェクト/リポジトリに読み取り RPC を送る方法が
最も簡単です。こうすれば、非アクティブなリポジトリ用の新しいコードパスを開発する
必要がありません。

## 計測と課金 {#metering-and-billing}

すべての Git トラフィックは Gitway を通過するため、Gitaly を変更せずに
リポジトリの使用量を計測できます。Gitway は独自の課金システムを構築しません。
使用量イベントを GitLab の既存の
[使用量課金パイプライン](https://gitlab.com/gitlab-org/monetization/docs/-/blob/main/src/content/docs/concepts/usage-billing.md)に送信します。
これは AI Gateway が GitLab Credits に使用するものと同じです。

```mermaid
flowchart LR
    Clients["Rails, Workhorse,<br/>gitlab-shell"]

    subgraph GW[gitway]
        direction TB
        Proxy["gRPC passthrough and<br/>sidechannel splice"]
        Meter["Meter<br/>aggregate per root namespace,<br/>project, and RPC"]
        Proxy -->|"usage, OK RPCs only"| Meter
    end

    Gitaly[Gitaly]
    Collector["Billing collector<br/>Snowplow"]

    subgraph Billing[Usage billing pipeline]
        direction TB
        Raw[("ClickHouse<br/>raw_billing_usage_events")]
        Enriched[("ClickHouse<br/>usage_billing_enriched")]
        Wallet[("PostgreSQL<br/>wallet transactions")]
        Zuora[Zuora overage]
        Raw -->|enrichment| Enriched
        Enriched -->|consumption| Wallet
        Wallet -->|overage submission| Zuora
    end

    Clients -->|"gRPC + x-gitlab-* metadata"| Proxy
    Proxy -->|gRPC| Gitaly
    Meter -->|"HTTP POST, billable_usage event"| Collector
    Collector --> Raw
```

### 計測 {#metering}

Gitway は、自身を通過するバイトを使用量としてカウントします。単項 RPC とストリーミング
RPC では、呼び出し元に転送するレスポンスメッセージを gRPC パススルーで
カウントします。fetch するバイトの大半は gRPC をまったく経由せず、
サイドチャネルを経由するため、Gitway は `splice` 内でもカウントします。ここでは
`pumpToDownstream` が Gitaly のバイトを呼び出し元にコピーして返します。

Gitway が RPC の成否を把握できるのは、サイドチャネルの処理が終わり、Gitaly が
ステータスを返した後です。そのため、各 RPC のカウントを別に保持し、
Gitaly が RPC を `OK` で完了した場合にのみ、現在の集計期間に加算します。
失敗またはキャンセルされた RPC の使用量は破棄します。

Gitway は RPC ごとにイベントを送信しません。たとえば 5 分という固定の
期間で使用量をメモリ上に集計します。この期間は設定オプションではなく定数として
指定します。使用量はルート名前空間、プロジェクト、RPC ごとに集計し、各イベントの
`metadata` 内の名前空間、プロジェクト、RPC を正確に保ちながら、
RPC 数よりはるかに少ないイベント数に抑えます。集計期間が終了すると、Gitway はキーごとに
1 つのイベントを送出します。シャットダウン時には進行中の集計期間を閉じ、エミッターが
フラッシュする前に送出します。Gitway がクラッシュすると進行中の集計期間の使用量は失われるため、
二重課金ではなく過少課金になります。

Gitway の課金対象については、Monetization と合意する必要があります。候補は、呼び出し元に
提供したバイト数、RPC 数、またはその両方です。上記のカウント方法は
いずれにも対応します。

### イベントの送出 {#emitting-events}

Gitway は課金 API を直接呼び出しません。HTTP 経由で Snowplow イベントを
課金コレクターに送信します（本番環境では `https://billing.prdsub.gitlab.net`、
ステージング環境では `https://billing.stgsub.gitlab.net`）。各イベントには
[`billable_usage`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/billable_usage/jsonschema)
コンテキストを含めます。Data Insights Platform（DIP）は、これらのイベントを ClickHouse の
`raw_billing_usage_events` に格納します。そこからは課金パイプラインが引き継ぎ、
Gitway はそれ以上関与しません。

1. エンリッチメントで料金の倍率を適用します。
2. 消費処理で顧客のウォレットからクレジットを差し引きます。
3. 課金期間の終了時に超過分を Zuora に送信します。

配信は送り切りです。イベントに対して課金されたかどうかを Gitway に知らせる
レスポンスはありません。Gitway の役割は、正しい顧客に紐付けて各イベントを一度送信することです。
`event_id` による重複排除はパイプラインに任せます。

したがって、二重課金を防ぐのは `event_id` であり、イベントのリトライを通じて
同じ値を維持する必要があります。最新の `billable_usage` スキーマ
（`1-1-1`）では `event_id` が UUIDv4 であることを要求するため、Gitway は
イベントの内容から UUIDv5 として導出できません。代わりに、集計期間を
閉じてイベントを構築する際にランダムな UUIDv4 を一度生成し、すべてのリトライで
その ID を保持します。そのため、再送でも同じ ID が含まれ、パイプラインが
重複を破棄します。

コレクター URL、アプリ ID、レルム、デプロイの種類、インスタンス ID は
デプロイごとに固定されているため、リクエストではなく Gitway の
設定から取得します。

イベントは次のようになります。

```json
{
  "event_id": "<uuidv4>",
  "event_type": "gitway_fetch_transfer",
  "unit_of_measure": "MiB",
  "quantity": 1843.27,
  "realm": "SaaS",
  "deployment_type": ".com",
  "root_namespace_id": 9970,
  "timestamp": "2026-10-02T10:05:00Z",
  "metadata": {
    "namespace_id": 9970,
    "project_id": 278964,
    "grpc_method": "/gitaly.SmartHTTPService/PostUploadPackWithSidechannel"
  }
}
```

Monetization と課金単位について合意するまでは、イベントの種類と計量単位は
仮のものです。`metadata` には課金の説明となるコンテキストを含めますが、
料金計算には使用しません。AI Gateway がモデル名とトークン数をそこに
記録するのと同様です。Gitway では、使用量を発生させた名前空間、プロジェクト、
RPC がこれに当たります。

### 課金イベントの認可 {#authorizing-billing-events}

課金イベントはそれぞれ顧客に課金するため、信頼でき、正しく顧客に紐付けられた
イベントだけがパイプラインに到達する必要があります。そのために 2 つの保証が必要です。

1 つ目は、イベントが Gitway から送られたという保証です。コレクターは認証済みの
経路でのみ課金イベントを受け付け、
[JWT ベースの認証](https://gitlab.com/groups/gitlab-org/-/work_items/21284)
が唯一サポートされる送信方法です。Gitway はクラウドの ID から有効期間の短い OIDC トークンを
発行します。GCP では、サービスアカウントを使用して
`IAMCredentials.GenerateIdToken` で発行します。コレクターを対象者として、
トークンを `Authorization: Bearer <jwt>` として送信します。DIP の認証
プロキシは、イベントを受け付ける前に署名とクレームを検証します。Go の
labkit エミッターがトークンの発行、キャッシュ、付与を処理します
（[labkit!319](https://gitlab.com/gitlab-org/labkit/-/merge_requests/319)）。

これは、GitLab が運用するクラウドインフラストラクチャ上で Gitway が動作することを前提とします。
GitLab.com は GCP 上で動作し、上記のサービスアカウントを使用します。Dedicated は
AWS 上で動作し、同じ SDK の実装により、インスタンスの IAM ロールから
`STS.GetWebIdentityToken` を通じてトークンを発行します。Self-Managed の Gitway は顧客の
インフラストラクチャ上で動作し、コレクターが信頼する ID を持たないため、
課金イベントを直接送信できません。Self-Managed の使用量をどのように課金パイプラインに届けるか、
そもそも Gitway が Self-Managed の使用量を計測するかは、Self-Managed 向けの計測を構築する前に
Monetization と解決すべき未決事項です。

2 つ目は、イベントが正しい顧客に紐付けられるという保証です。送出前に、
Gitway は、パイプラインがイベントを顧客に紐付けるために必要な属性がすべて
存在することを確認します。`realm`、`deployment_type`、そして SaaS では `root_namespace_id`、
Dedicated では `unique_instance_id` が必要であり、Self-Managed も計測する
場合は同様です（上記の未決事項を参照）。これらのいずれかが欠けた
イベントには課金できないため、Gitway は送信せずに破棄し、メトリクスとして
カウントします。Gitway が events-sidecar を通じて送出する場合（[転送](#transport)を
参照）、サイドカーの
[API 検証](https://gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/events-sidecar/-/blob/main/api/openapi.yaml)
でも同じルールを適用します。

名前空間とプロジェクトはリクエストのメタデータから取得し（[顧客への紐付け](#attribution)を
参照）、Gitway は呼び出し元を信頼する範囲でのみ、そのメタデータを
信頼します。Gitaly は共有認証トークンを持つ呼び出し元、すなわち Rails、Workhorse、
gitlab-shell だけを受け付け、Gitway は Gitaly が `OK` で完了した RPC だけを
計測します。そのトークンを持たない呼び出し元は任意のメタデータを送れますが、
リクエストを成功させられないため、課金イベントを作成できません。
信頼するコンポーネントが誤ったメタデータを転送すれば、使用量の紐付け先が誤ることになります。
これらの値の唯一の情報源は Rails であり、Workhorse と gitlab-shell は
変更せずに転送します。

### 顧客への紐付け {#attribution}

Gitway は認証を行わず、Gitaly の protobuf も解析しないため（[認証](#authentication)を
参照）、それ自体では課金先を判断できません。
Rails が各 RPC で gRPC メタデータとして提供します。AI Gateway や Duo Workflow Service に
すでに送信しているものと同じキーを使用します。

- `x-gitlab-root-namespace-id`
- `x-gitlab-namespace-id`
- `x-gitlab-project-id`

SaaS では、`billable_usage` にルート名前空間が必要です。Dedicated の紐付けには、
Gitway の設定から取得する `unique_instance_id` を使用します。Self-Managed も
同様に紐付けますが、計測するかどうかは未決です（[課金イベントの認可](#authorizing-billing-events)を
参照）。Workhorse と gitlab-shell は Gitaly の呼び出しを
自ら構築しません。`/internal/allowed` と Workhorse API の
レスポンスを通じて Rails から受け取ります。そのため Rails は、これらの値をその
レスポンスに含める必要があり、両クライアントは Gitway に転送する必要があります。Gitway が
これらをどの範囲で信頼するかについては、[課金イベントの認可](#authorizing-billing-events)を
参照してください。

### 転送 {#transport}

Gitway がコレクターに到達する方法は 2 つあります。その選択は
[gitway#11](https://gitlab.com/gitlab-org/gitway/-/work_items/11)で追跡しています。

- **直接送信。** Gitway は、labkit を通じてすでに
  依存している `labkit/v2/events/snowplow` を使用し、課金コレクターに直接送信します。
  [labkit エミッター](https://gitlab.com/gitlab-org/labkit/-/blob/master/v2/events/snowplow/emitter.go)
  はバッファリング、リトライ、シャットダウン時のフラッシュをすでに処理するため、Gitway が
  それらを構築する必要はありません。
- **Theseus events-sidecar 経由。**
  [events-sidecar](https://gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/events-sidecar)
  は準備が整っており、単一の
  [`event_construct`](https://gitlab.com/gitlab-org/iglu/-/blob/master/public/schemas/com.gitlab/event_construct/jsonschema/1-0-0)
  ペイロードから課金イベントと分析イベントをまとめて送信します。Gitway はこのペイロードを `127.0.0.1:8130` のサイドカーに送信し、
  サイドカーが検証して、契約、リトライ、課金イベントに責任を持ちます。
  採用するには、
  [サイドカーとサービスのどちらを選ぶかの決定](https://gitlab.com/groups/gitlab-org/theseus/-/work_items/2#note_3932032848)を待つ必要があります。
  Pod の終了猶予期間は、Gitway とサイドカーの両方が処理を完了する時間を
  確保する必要もあります。

どちらの方法も、同じ ClickHouse テーブルに同じイベントを生成します。顧客への紐付け、
カウント、集計は、どちらでも同じです。

## その他の設計上の考慮事項 {#other-design-considerations}

### Geo レプリケーション {#geo-replication}

現在、`Project` のないリポジトリは Geo から見えません。Geo の
レプリケーションチェーンのすべての接続は、Rails のコンテナーモデルをキーとしています。

- **変更イベント**は `Repositories::PostReceiveWorker` の最後で発生します。
  このワーカーは `gl_repository` からコンテナーを解決し、
  `Repository#log_geo_updated_event` を通じて対応するレプリケーターにディスパッチします。認識できない
  コンテナークラスでは例外が発生します。
- 各セカンダリのトラッキングデータベースにある**レジストリ行**は、
  `model_record_id` をキーとし、レプリケーション可能な型ごとに 1 つのテーブルがあります。
- **同期**は HTTPS 経由の `git fetch` です。プロジェクトの
  `full_path` から作成した URL を使用し、同じパスにスコープを限定した Geo JWT で認可し、
  プライマリサイトの Git HTTP の入口で終端します。

#### 新しいレプリケーション可能な型 {#a-new-replicable-type}

Gitway が所有するリポジトリは、Geo のセルフサービスフレームワークを使用します。

| 要素 | 形態 |
|-------|-------|
| Rails モデル | 新しい薄い `gitway_repositories` テーブルです。UUID、検証用の列、タイムスタンプを持ちます。プロジェクト、ルート、名前空間は持ちません。Geo がレジストリ行とイベントのキーにできるレコードを持つためだけに存在します。 |
| レプリケーター | `Geo::GitwayRepositoryReplicator` です。`remote_url` をオーバーライドして Gitway を指定し、`jwt_authentication_header` をオーバーライドして、パスではなく UUID にスコープを限定します。 |
| 変更シグナル | Gitaly の既存の post-receive コールバックを変更せずに使用します。以下を参照してください。 |
| 存在シグナル | Rails 自身が `POST /v1/repositories` と `DELETE /v1/repositories/{id}` の呼び出しを発行するため、その経路でレプリケーション可能な行を upsert するか、削除済みの印を付けます。コレクションのエンドポイントができたら、それを列挙するリコンサイラーをずれに備えた安全策とする想定です。 |
| 転送 | 変更しません。セカンダリは、Gitway がすでに公開する `info/refs` と `git-upload-pack` の基本操作を使い、プライマリから HTTPS 経由で fetch します。 |

Geo がすでに提供するその他の機能はすべて、そのまま引き継がれます。レジストリの状態、
リトライとバックオフ、ログカーソル、整合性ワーカー、同期ワーカーです。

```mermaid
sequenceDiagram
    participant Gitaly as Gitaly (primary site)
    participant Rails as Rails (primary)
    participant Sec as Geo secondary
    participant GW as Gitway (primary site)

    Gitaly->>Rails: /internal/post_receive
    Rails->>Rails: PostReceiveWorker resolves the Gitway repository type
    Rails->>Rails: replicator publishes EVENT_UPDATED
    Rails-->>Sec: event replicated
    Sec->>GW: git fetch over HTTPS (Geo JWT)
    GW-->>Sec: upload-pack
```

Gitaly は現在とまったく同じように `/internal/post_receive` を呼び出し続け、
その呼び出しがキューに入れるワーカーから Geo イベントが引き続き発生します。

新しく作成されたリポジトリをコピーするため、Gitway は指定した `uuid` でリポジトリを作成する
API エンドポイントを公開します。これにより、あるセルから別のセルへの移動時に、この API を
呼び出して Gitway にリポジトリを作成させ、
移動元のセルから Git データを fetch できます。

### 組織の移行（Org Mover） {#organization-migration-org-mover}

[Org Mover](../organization-data-migration/decisions/003_org_mover_architecture.md)
は、組織をある Cell から別の Cell に移動します。現在は、Rails の
リポジトリテーブルを行ごとにコピーし、主キーを保持しながら、`shard_id` を
移動先のセルに存在するストレージに再マッピングします。

Gitway がリポジトリディレクトリになると、重要な行は Gitway の
データベースに存在するため、Org Mover は Gitway の状態もコピーする必要があります。Gitway は
セルの外部や複数セルにまたがるサービスではなく、セルの一部としてデプロイするため、各セルは
それぞれ独自の Gitway と Gitway データベースを持ち、移動では
移動元のセルの Gitway から移動先のセルの Gitway に行をコピーします。

これを実現するため、Org Mover は Rails データベースのリポジトリデータと
同様の方法を取り、代わりに Gitway データベースの行をコピーできます。その時点で
ストレージの再マッピングが必要であれば、それも実行できます。

Gitway DB の各リポジトリ行の `uuid` は、セル間で保持する
必要があります。これはシステム内の各リポジトリの一意の識別子であり、
Rails データベースなどの他のデータストアからも参照されるためです。

### Project のシャード移行 {#shard-migration-for-projects}

短期的には、Project のシャード移行は Rails を通じて機能します。一方、Gitway リポジトリの
シャード移行はサポートしません。長期的には
[新しい Git バックエンド](/handbook/engineering/architecture/design-documents/scaling-git/)により、シャード移行が不要になるためです。

[新しい Git バックエンド](/handbook/engineering/architecture/design-documents/scaling-git/)は、Gitaly をステートレスにすることを目指しています。信頼できる唯一の情報源が
オブジェクトストレージになるため、リポジトリは固定的に割り当てられることなく、
1 つ以上の Gitaly ノード上に実体化できます。これにより、シャード移行は
不要になります。
