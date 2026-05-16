---
title: "Cells と Dedicated の違い"
stage: core platform
group: Tenant Scale
authors: [ "@skarbek" ]
coach: "@andrewn"
status:
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/infrastructure/diff-between-dedicated/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-05-21T18:01:46+00:00"
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/skarbek" class="text-blue-600 hover:underline">@skarbek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/andrewn" class="text-blue-600 hover:underline">@andrewn</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
</tr>
</tbody>
</table>
</div>


## 既存の参考資料

1. [Cell イテレーション](../index.md#cells-iterations)、特に Cell 1.0
1. [GitLab Dedicated](https://about.gitlab.com/dedicated/)
1. [GitLab Dedicated 技術ドキュメント](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/)

## GitLab Dedicated との差分

GitLab Dedicated はゼロから開始して安定したサービスのみを実行する機会がありました。
GitLab.com はベータ機能や GitLab Dedicated にはない補助機能を実行しています。

### 高度な検索

**GitLab Dedicated が行っていること:**

Dedicated はテナントに AWS OpenSearch をプロビジョニングするために GET ツールに依存しています。
アプリケーションはこの機能を活用するように自動的に GET によって設定されます。

**GitLab.com が現在行っていること:**

GitLab.com は 2 つのアイテムを活用しており、そのうち 1 つは `group::Global Search` によって活発に開発されています。
顧客ベースの大半にアプリケーションレベルの検索機能を提供する Elasticsearch クラスターがあります。
これは現在、コード検索だけでなく GitLab アプリケーション内で検索可能なあらゆるものを検索するために使用されています。
Global Search チームは最終的にコード検索機能を置き換えるための追加機能として Zoekt の使用をテストしています。

**GitLab.com Cells が行うこと:**

[Dedicated の関連 Issue](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/4111)

### キャパシティプランニング

**GitLab Dedicated が行っていること:**

[Tamland](https://gitlab-com.gitlab.io/gl-infra/tamland/) が使用されています。

**GitLab.com が現在行っていること:**

[Tamland](https://gitlab-com.gitlab.io/gl-infra/tamland/) が使用されています。

**GitLab.com Cells が行うこと:**

[Tamland](https://gitlab-com.gitlab.io/gl-infra/tamland/) が同様に活用されます。
[Dedicated 向けの作業](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1118)は完了しています。
Cell に向けて有効にするためにわずかな作業が必要な場合があります。

### Redis

**GitLab Dedicated が行っていること:**

Dedicated は Redis に [GCP Memorystore](https://cloud.google.com/memorystore) 製品を活用しています。
_この作業は進行中ですが、GitLab Environment Toolkit によってサポートされています。_

**GitLab.com が現在行っていること:**

.com のスケールでは、責任と役割に応じたターゲット設定の構成を持つ Redis のデプロイメントが約 13 あります。
これらの Redis のデプロイメントは、標準の Redis デプロイメントとレプリカおよび Redis クラスターの間でも異なります。
このサービスを需要に合わせてスケールする際のさまざまなペインポイントを解決した優先化された作業に基づいたミックスアンドマッチがあります。

**GitLab.com Cells が行うこと:**

Cell は .com よりはるかに小さな GitLab のインストールであるため、.com 向けに拡張したのと同じほど Redis インフラストラクチャを拡張する必要はないはずです。
選択された参照アーキテクチャは、需要に対して十分にサイズ調整された Redis デプロイメントをデプロイするべきです。
最初の Cell セットが顧客トラフィックを受け取る際の Redis の動作へのオブザーバビリティを注意深く監視して、改善が必要な領域を判断する必要があります。

### シークレット管理

**GitLab Dedicated が行っていること:**

Dedicated はシークレット管理に Google Secret Manager を活用しています。
Dedicated では 2 種類のシークレットが活用されています: テナントごとに固有のシークレットと、環境ごとに共有されるシークレットです。
後者は、Amp などを使用したテナントの管理に厳密に使用されます。
したがって、各 GitLab インストールには独自のシークレットセットがあり、いくつかの設定アイテムはそのクラウドプロバイダーのシークレットサービスを使用して保存されています。
Dedicated のテナントプロビジョニングツールである Instrumentor は、さまざまなステージ間で必要なシークレットのみを認識して共有します。

**GitLab.com が現在行っていること:**

.com は VM 上の Chef 実行のためのシークレット管理のラッパーとして KMS をすでにシンプルなアイテムに活用しています。
ほとんどのシークレットは HashiCorp Vault にプッシュされており、インフラストラクチャのさまざまな部分が VM と Kubernetes インストールの間で共有されるアイテムにこのサービスを使用しています。

**GitLab.com Cells が行うこと:**

プロビジョニングシークレットと共有インフラストラクチャシークレットは Hashicorp Vault で管理され、テナント管理（Amp、CI など）に厳密に使用されます。
各 Cell は Google Secret Manager で管理される独自のシークレットセットを持ちます。
Kubernetes シークレットは [External Secrets オペレーター](https://external-secrets.io/)によって Google Secret Manager から同期されます。

[議論中](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25076)。

### HAProxy

**GitLab Dedicated が行っていること:**

HAProxy は使用されていません。
代わりに、クラウドロードバランサーを活用して適切な基礎リソースにトラフィックを向ける GitLab Helm チャートの一部としてデプロイされたイングレスに依存しています。
各テナントは独自のインストールを持ち、顧客トラフィックがルーティングされる分離されたエンドポイントがあります。

フロントエンドワークロードを処理するデプロイメントは、Helm チャートで管理・デプロイされる `webservice` と呼ばれる単一のサービスによって処理されます。

さらに以下では、将来的に CloudFlare の導入について言及しており、これが最終的に HAProxy を必要とせずにさまざまな WAF 機能を提供します。

**GitLab.com が現在行っていること:**

HAProxy は CloudFlare の後ろと Google ロードバランサーのセットの後ろに位置しています。
主な目的はフロントエンドトラフィックのターゲットクラスターへのトラフィックルーティングを提供し、トラフィック管理のための多数のルールを提供することです。
この管理のいくつかはさまざまな基準に基づいたスロットリングまたはリクエストブロッキングです。
`registry.gitlab.com`、Pages エンドポイント、CI トラフィックなどの専用エンドポイントを処理するいくつかの HAProxy フリートがあります。

Helm チャートの高度な機能を活用して、多数のフロントエンド `webservice` をデプロイしており、ターゲットトラフィックを提供するグループに分割されています。
HAProxy は多数のルールでこれらのトラフィックのグループ分けを分割するように設定されています。
これらのグループは今日 `api`、`git`、`internal-api`、`web`、`websockets` として知られています。

**GitLab.com Cells が行うこと:**

GitLab Cells はリクエストが適切なクラスターにクライアントを向けるためにルーティングを必要とする新しいレイヤーを導入します。
[ルーティングサービス](../http_routing_service.md)がすべてのリクエストを傍受することが予定されています。
このレイヤーは現在の HAProxy 設定の上にあります。
[ルーティングサービス](../http_routing_service.md)の後ろでは、GitLab Helm チャートの一部としてデプロイされた既存のイングレスメソッドを活用する予定です。
リクエストはフロントエンドのイングレス設定に直接向かいます。
CloudFlare のファイアウォールルールとして設定できる場合、HAProxy で設定されたさまざまなトラフィックルールを評価する必要があります。
理想的には、Cells アーキテクチャでは HAProxy が不要になります。

Helm チャートはフロントエンドの Pod をデプロイするために使用され、Dedicated が今日行っているものを模倣して 1 つのみデプロイされます。

### アセットルーティング

**GitLab Dedicated が行っていること:**

アセットは `webservice` と呼ばれるフロントエンドサービスによって提供されます。
GitLab Helm チャートによってデプロイされた `webservice` Pod。

**GitLab.com が現在行っていること:**

アセットは Team Delivery が所有するデプロイメント手順の一部として Google Cloud Storage バケットにデプロイされます。アセットは CloudFlare によって管理される特定のルーティング設定によって提供されます。
これにより、`webservice` デプロイメントが静的アセットの提供から解放され、それらのサービスはリクエストの処理に集中できます。

**GitLab.com Cells が行うこと:**

アセットのデプロイメントは変更されません。このプロセスは CloudFlare と同じままです。

### Cloudflare

**GitLab Dedicated が行っていること:**

CloudFlare はまだ関与していません。
Dedicated に WAF ソリューションを導入するための作業が進行中です。

**GitLab.com が現在行っていること:**

CloudFlare はネイティブおよびカスタムのファイアウォール、DNS、トラフィックルーティング管理を提供する最初の防御ラインです。

**GitLab.com Cells が行うこと:**

[ルーティングサービス](../http_routing_service.md)の使用により CloudFlare の使用は技術的に拡大します。
.com エントリポイントは変更されず、[ルーティングサービス](../http_routing_service.md)の追加以外にこのサービスへの変更はないはずです。

### コンテナレジストリ

**GitLab Dedicated が行っていること:**

Dedicated は GitLab Registry サービスをデプロイして設定するために Helm チャートを活用しています。
Registry サービスは GitLab Environment Toolkit によって管理されるストレージバケットによってバックアップされています。

**GitLab.com が現在行っていること:**

.com は Container Registry サービスをデプロイして設定するために同じ GitLab Helm チャートを活用しています。
バッキングストレージは [`config-mgmt`](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt) リポジトリにある独自の Terraform メカニズムによって設定されています。

Container Registry は[オンラインガベージコレクション](https://docs.gitlab.com/ee/administration/packages/container_registry_metadata_database.html)のために PostgreSQL データベースを使用しており、データベースのマイグレーションは[Kubernetes Job](https://gitlab.com/gitlab-org/charts/gitlab/-/blob/8a6a34b8db7a41eaff463d0353a2e876ebc41458/charts/registry/templates/migrations-job.yaml) によって管理され、手動ロールバックの可能性があります。

Container Registry はキャッシュレイヤーとして Redis も使用しています。

**GitLab.com Cells が行うこと:**

[議論中](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/4130)

### メール配信

**GitLab Dedicated が行っていること:**

_作業進行中。_ [Issue 2481 を参照](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/2481)

- 送信: [AWS `SES` 製品](https://aws.amazon.com/ses/)を活用して送信メールを対象とすることが予定されています。
- 受信: [受信メール](https://docs.gitlab.com/ee/administration/incoming_email.html)はサポートされていません。

**GitLab.com が現在行っていること:**

- 送信: メールはサードパーティの [Mailgun](https://www.mailgun.com/) によって処理されます。
- 受信: メールは設定されたインボックスに届いたメールを監視して Sidekiq ワーカーに適切に向ける [webhook 配信メソッド](../email-ingestion/#webhook-delivery-method-recommended)によって GitLab アプリケーションで処理されます。

**GitLab.com Cells が行うこと:**

送信: プロバイダーとの強い関係を持ち、変更を望まないため、引き続き Mailgun を使用します。
Dedicated プロビジョナーは最小限の設定変更で Mailgun/サードパーティ送信メールゲートウェイをサポートできます。
受信: [議論中](https://gitlab.com/gitlab-org/gitlab/-/issues/442161)

### PostgreSQL

**GitLab Dedicated が行っていること:**

単一の RDS インスタンスがデプロイされます。

**GitLab.com が現在行っていること:**

GitLab Rails コードベースのいくつかの機能のスケールを処理するために、データベースは 3 つの PostgreSQL クラスターに分割されました。
ほとんどのデータストレージを処理する `main` クラスター、すべての CI 関連データを処理する `ci`、そして最後に `embedding` データベースです。
別の PostgreSQL クラスターへの[さらなる分解](https://gitlab.com/gitlab-org/gitlab/-/issues/427973)も評価しています。

各データベースの前には接続プーラーとして PgBouncer のセットがあります。

**GitLab.com Cells が行うこと:**

何をするかは別の[ブループリント](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/144238)で作業中です。

### 埋め込みデータベース

**GitLab Dedicated が行っていること:**

GitLab Dedicated は埋め込みデータベースを使用しておらず、まだ実験段階です。

**GitLab.com が現在行っていること:**

[pgvector](https://github.com/pgvector/pgvector) を実行する PostgreSQL クラスターがデプロイされています。
埋め込みデータは GitLab のコンテンツ（Issue、エピック、マージリクエスト）をベクトル化してそのデータを検索、推薦、異常検出、分類、バックログのクリーンアップ、重複排除、その他の AI 関連のことに使用できる場所に保存するためのものです。

**GitLab.com Cells が行うこと:**

埋め込みデータベースはまだ実験的であり、Cells 1.0 のスコープを減らすために Cell ではサポートしません。

### GitLab Pages

**GitLab Dedicated が行っていること:**

ついにリリースされました！

**GitLab.com が現在行っていること:**

GitLab Pages は .com のアクティブな機能です。

**GitLab.com Cells が行うこと:**

[Cells 1.0](https://gitlab.com/gitlab-org/gitlab/-/blob/cfc0b476301097580d348e054b0ba4f721d4a9df/doc/architecture/blueprints/cells/iterations/cells-1.0.md#L476-479) では GitLab Pages を有効にしないため、現時点ではスコープ外です。

### VM 設定管理

**GitLab Dedicated が行っていること:**

VM の管理はすべて GitLab Environment Toolkit によって処理されます。
マシンのプロビジョニングには Terraform を使用し、VM の設定には Ansible を使用します。

**GitLab.com が現在行っていること:**

.com は VM の設定管理に Chef を活用し、シークレット管理のための Vault との統合と VM の設定管理のための複雑なロール構造を Chef に組み込んでいます。

**GitLab.com Cells が行うこと:**

GitLab Dedicated ツールを再利用し、Chef を削除します。

### 障害復旧

**GitLab Dedicated が行っていること:**

既存のドキュメントを参照:

- [バックアップからの RTO/RPO](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/engineering/restore-from-backups-rto-rpo.html)
- [リカバリーガイド](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/runbooks/regional-failure-recovery.html)

**GitLab.com が現在行っていること:**

既存のドキュメントを参照:

- [ランブック](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/disaster-recovery)

**GitLab.com Cells が行うこと:**

ブループリントは[後の時点](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25118)で作成されます。

### フィーチャーフラグ

**GitLab Dedicated が行っていること:**

フィーチャーフラグはあまり活用されておらず、積極的に推奨されていません。
特別なユースケースのためのオーバーライドメカニズムが存在します。
これはビジネス上の決定であり、技術的な制限ではないことに注意してください。

**GitLab.com が現在行っていること:**

エンジニアが安全に変更をロールアウトできる[かなり複雑なプロセス](https://gitlab.com/gitlab-org/gitlab/-/blob/b6336d771249dbee6da5cf65fa49b85834d493e3/doc/development/feature_flags/index.md)があります。

**GitLab.com Cells が行うこと:**

ChatOps は最終的に Cell をサポートするよう拡張されます。
[エピック 12797](https://gitlab.com/groups/gitlab-org/-/epics/12797) は追加された機能を提供するために作成されました。
Iteration Cells 1.0 では作業は行われません。

### デプロイメント

**GitLab Dedicated が行っていること:**

テナントインストールにフィードされるすべてのコンポーネントはバージョン管理されています。
契約ごとに、バージョンアップグレード、インフラストラクチャへの変更、アプリケーションへの設定変更などのメンテナンスを実行するための機会を提供するメンテナンスウィンドウが顧客と定義・合意されます。
これを利用するツールは事前に本番以外のテナントで広範なテストが行われます。

**GitLab.com が現在行っていること:**

専任チーム [Delivery](../../../infrastructure/team/delivery/) が GitLab の新しいバージョンを 1 日に複数回管理・デプロイする一連のツールの責任を持っています。
デプロイメントのリスク管理を支援するために Canary と Main という複数のステージが活用されています。

**GitLab.com Cells が行うこと:**

[Delivery](../../../infrastructure/team/delivery/) はこれの初期開発の責任を持ち続けます。
この作業を取り巻く[現在のブループリント](deployments.md)は、リスクを管理するためにリングデプロイメントの概念を導入しています。

### サブネット

**GitLab Dedicated が行っていること:**

Dedicated はすべてのテナントに対して意図的に重複する IP CIDR の静的リストを使用します。
サブネットは顧客からのニーズがある場合に設定可能です。

**GitLab.com が現在行っていること:**

さまざまな GCP プロジェクトと環境にまたがって、ドキュメント、Terraform コード、VPC ピアリングがすべて結束して機能するようにする非常に厳密かつ慎重に管理されたダンスが行われています。

**GitLab.com Cells が行うこと:**

[議論中](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25069)

### Kubernetes

**GitLab Dedicated が行っていること:**

GitLab Environment Toolkit によって管理され、単一の Kubernetes クラスターがスピンアップされます。
GitLab Helm チャートによって管理され、完全な GitLab インストールがデプロイされます。
Instrumentor には、同じクラスターにインストールされるオブザーバビリティスタックのツールが含まれています。

**GitLab.com が現在行っていること:**

クラスターは `config-mgmt` リポジトリを通じて Terraform で手動設定されます。
これらのクラスターへの何かのデプロイメントは、デプロイされた GitLab アプリケーションワークロードを管理、保守、観測するために必要なさまざまなツールをデプロイする少なくとも 3 つのリポジトリを通じて管理されます。

**GitLab.com Cells が行うこと:**

[議論中](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25068)

### SRE のマシンへの root アクセス

**GitLab Dedicated が行っていること:**

VM:

Ansible によって管理: [Identify-Aware Proxy](https://cloud.google.com/compute/docs/connect/ssh-using-iap) を使用した [SSH](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/runbooks/tenant-ssh.html)（内部リンク）の混在。
これは[ブレークグラス手順](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/engineering/breaking_glass.html)（内部リンク）と共に使用される必要があります。

Kubernetes:

`kubectl`: [ブレークグラス手順](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/engineering/breaking_glass.html)（内部リンク）。

**GitLab.com が現在行っていること:**

VM:

- Chef によって管理された VM: ユーザーと SSH キーは Chef によって管理され、root アクセスでマシンに SSH するためのバスチオンが必要です。
- Rails コンソール: 読み取り専用アクセスのための Rails コンソールをスピンアップするために [Teleport](https://gitlab.com/gitlab-com/runbooks/-/blob/8197f6cdb6aa8e7230600a9e59ee4f447a8543f5/docs/teleport/Connect_to_Rails_Console_via_Teleport.md) を使用しています。
- `psql`: [Teleport](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Database_Console_via_Teleport.md?ref_type=heads) を使用しています。

Kubernetes:

- `kubectl`: Chef によってキーが管理されるバスチオンサーバー、その後 [`gcloud`](https://gitlab.com/gitlab-com/runbooks/-/blob/8197f6cdb6aa8e7230600a9e59ee4f447a8543f5/docs/kube/k8s-oncall-setup.md#kubernetes-api-access) をセットアップします。
- GKE VM: ノードへのアクセスに [Google の OS Login](https://cloud.google.com/compute/docs/oslogin) を使用します。

**GitLab.com Cells が行うこと:**

VM:

- Ansible によって管理: GitLab Dedicated と同じ
- Rails コンソール: [議論中](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25124)
- `psql`: [議論中](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25124)

Kubernetes:

- `kubectl`: GitLab Dedicated と同じ
- GKE VM: GitLab Dedicated と同じ

### オブザーバビリティ

**GitLab Dedicated が行っていること:**

.com で活用しているのと同じメトリクスセットを使用するオブザーバビリティスタックが Instrumentor にバンドルされ、テナントの Kubernetes クラスターにインストールされたオブザーバビリティスタックにデプロイされます。
これにはアラート、ページング、ダッシュボード提供、予測のための適切なルールがすべて含まれています。
一部のメトリクスは欠けていますが、不足しているところで完全なカバレッジをもたらすために作業が進められています。

すべてのテナントのメトリクスのグローバルビューは存在しません。

ロギングは AWS テナントには AWS OpenSearch を使用し、GCP テナントには Google Cloud Logging を使用することによって管理されます。

**GitLab.com が現在行っていること:**

さまざまな GCP プロジェクトにまたがる Prometheus と Mimir の大規模なインストールがさまざまな手段で管理されています。
すべてのダッシュボード、アラート、Pages を設定するために Runbooks リポジトリを活用しています。

当然、Grafana インストールがすべての必要な環境からのリモート書き込みデータを含む大規模な Mimir 設定と通信するため、グローバルビューが提供されます。

ログは、Virtual Machine と Kubernetes クラスターの両方の `fluentd` によって PubSub にデータを送信し、Kibana を使用して表示する Elasticsearch に取り込まれることで管理されます。
CloudFlare、GKE、HAProxy などの一部のサービスはデータが多すぎるため、Stackdriver または BigQuery のどちらかの Google のロギングソリューションに依存しています。

**GitLab.com Cells が行うこと:**

[議論中](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/143672)

### Camoproxy

**GitLab Dedicated が行っていること:**

未使用。

**GitLab.com が現在行っていること:**

[go-camo](https://github.com/cactus/go-camo?tab=readme-ov-file#how-it-works) はカスタム [Helm チャート](https://gitlab.com/gitlab-com/gl-infra/charts/-/tree/main/gitlab/camoproxy?ref_type=heads)によってデプロイされています。`go-camo` は HTTP ベースのリソースから HTTPS に画像を提供するために使用されます。

**GitLab.com Cells が行うこと:**

[議論中](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25125)

### 証明書

**GitLab Dedicated が行っていること:**

GitLab Dedicated は [`cert-manager`](https://cert-manager.io/)、Let's Encrypt、NGINX を使用して証明書を発行・[管理](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/runbooks/certmanager.html)します。

**GitLab.com が現在行っていること:**

GitLab.com は[証明書](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/certificates/cloudflare.md)に Cloudflare を使用し、Grafana などの補助サービスには `cert-manager` と GCP 証明書の混在を使用しています。

**GitLab.com Cells が行うこと:**

GitLab.com では引き続き Cloudflare を使用するため、Cloudflare の証明書を継続して使用できます。

### osquery

**GitLab Dedicated が行っていること:**

osquery はインストールされません。

**GitLab.com が現在行っていること:**

osquery インストールを管理するための [Chef クックブック](https://gitlab.com/gitlab-cookbooks/gitlab-osquery)があります。

**GitLab.com Cells が行うこと:**

Cell アーキテクチャへのデプロイに活用されているデプロイメントメソッドと互換性のあるツールを開発する必要があります。

**osquery がカバーすること:**

osquery はすべての Virtual Machine をカバーします。今日カバーされている例にはバスチオンノード、HA Proxy ノードなどがあります。

**osquery が必要な理由:**

1. **可視性:** 特に VM と Kubernetes クラスター内で何が起こっているかについて、まだ非常に少ない可視性しかありません。
1. **コンプライアンス要件:** コンプライアンスは Kubernetes やレガシー VM などの環境でのアクションに明確な洞察を持つことを要求します。
1. **インシデント調査:** 過去に報告されたインシデントは、悪意のあるコマンドの前後に実行されたコマンドの検出と調査の欠如により、いくつかの欠落した調査が残されています。

### Wiz Runtime Sensor

**GitLab Dedicated が行っていること:**

Wiz は使用されていません。

**GitLab.com が現在行っていること:**

Wiz Runtime Sensor は .com に導入されている新しいツールです。Wiz Runtime Sensor は、アプリケーション/ワークロードによって実行された疑わしいアクションに関する findings を syscall をリッスンして生成する、軽量な eBPF ベースのエージェントです。詳細は Wiz Runtime の[内部ハンドブックページ](https://internal.gitlab.com/handbook/security/infrastructure_security/tooling/wiz-sensor/)を参照してください。

この執筆時点では、本番環境にはデプロイされておらず、まだステージング環境でテスト中です。現在、[Helm チャート](https://gitlab.com/gitlab-com/gl-infra/k8s-workloads/gitlab-helmfiles/-/tree/master/releases/wiz-sensor?ref_type=heads)を使用してデプロイされています。

**GitLab.com Cells が行うこと:**

このツールを活用する場合、Cell に適したデプロイメント方法を再作成する必要があります。
現在活用されているデプロイメントメソッドは Cell アーキテクチャには十分ではありません。

**Wiz Runtime Sensor がカバーすること:**

Wiz Runtime Sensor は Kubernetes クラスターに `DaemonSet` としてデプロイされます。`DaemonSet` はすべてのノードにセンサーを追加します。Wiz Runtime Sensor は悪意のあるスクリプトの実行、機密ファイルへのアクセス/変更、コンテナエスケープの試みなどの悪意のあるアクションの syscall を観察します。

**Wiz Runtime Sensor が必要な理由:**

1. **可視性:** 特に VM と Kubernetes クラスター内で何が起こっているかについて、まだ非常に少ない可視性しかありません。
1. **コンプライアンス要件:** コンプライアンスは Kubernetes やレガシー VM などの環境でのアクションに明確な洞察を持つことを要求します。
1. **インシデント調査:** 過去に報告されたインシデントは、悪意のあるコマンドの前後に実行されたコマンドの検出と調査の欠如により、いくつかの欠落した調査が残されています。
