---
title: "Artifact Registry ADR 012: 使用状況データ収集"
owning-stage: "~devops::package"
description: "SaaS およびセルフマネージドのデプロイにまたがるプロダクトアナリティクスとビジネスインテリジェンスのために、Artifact Registry が使用状況データを収集する方法に関する決定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/012_usage_data_collection/
upstream_sha: "2dd9d315aff1d685e3f27ab47a69d8faa01d31fa"
translated_at: "2026-05-18T18:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-18T13:31:14+02:00"
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## コンテキスト

Artifact Registry は、プロダクトアナリティクス、ビジネスインテリジェンス、課金のために使用状況データの収集を必要としています。使用状況データは、重要な質問に答えます: どのアーティファクトフォーマットが最も多く採用されているか、いくつのアーティファクトが push および pull されているか、ストレージは時間とともにどう成長しているか、レジストリと対話するユニークユーザーは何人か、仮想リポジトリのキャッシュヒット率はどうなっているか。

Artifact Registry は、Rails モノリス外にデプロイされるスタンドアロンの Go サービスです ([ADR-006](006_technology_stack.md))。GitLab の主要な計装フレームワーク — Snowplow をバックエンドとする [Internal Event Tracking](https://docs.gitlab.com/ee/development/internal_analytics/) — は、Rails モノリス統合を中心に設計されています。サテライトサービスから使用状況データを収集するには、計画的な戦略が必要です。

収集はすべてのデプロイタイプで機能する必要があります:

- **GitLab.com (SaaS)**: アナリティクスパイプラインへのフルアクセスを持つ、マルチテナントの GitLab 運用インフラ
- **セルフマネージド**: データ収集が顧客のオプトインに依存する、顧客がホストするインスタンス
- **GitLab Dedicated**: GitLab が管理するシングルテナントのクラウドインスタンス。データ収集の目的では機能的にセルフマネージドと類似

### Snowplow を介した Internal Event Tracking

GitLab の主要な計装フレームワーク。イベントは Snowplow コレクターに送信され、疑似化処理を含む AWS パイプラインを通過してデータレイクに着地し、Snowflake データウェアハウスに取り込まれます。SaaS では常時利用可能で、セルフマネージド/Dedicated では GitLab 18.0+ から顧客のオプトインで利用可能です。

Go サテライトサービス向けには、[LabKit v2](https://gitlab.com/gitlab-org/labkit) がネイティブな Snowplow トラッカー (`v2/events/snowplow/`) を提供しています。機能は次のとおりです:

- [`custom_event`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/custom_event/jsonschema/1-0-0) スキーマを使用したカスタム使用状況イベント用の `TrackEvent`。自己記述型のカスタムコンテキストを各イベントとともに添付して、型付きでスキーマ検証された属性を運ぶことができます。
- [`billable_usage`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/billable_usage/jsonschema/1-0-2) スキーマ (`iglu:com.gitlab/billable_usage/jsonschema/1-0-2`) を使用した課金可能な使用状況追跡用の `TrackBillingEvent()` / `TrackBillingEventWithOptionalInput()`。このスキーマには `organization_id`、`realm`、`deployment_type`、`quantity`、`unit_of_measure` の第一級フィールドがあります。LabKit v2 の構造体はスキーマに 1:1 でマッピングされます。
- 自動再試行と FIFO キュー管理を備えた非同期バッチ送信
- エミッターの可観測性のための組み込み Prometheus メトリクス
- オーバーフロー保護付きのインメモリイベントストレージ（10,000 イベント容量）

これは他のサテライトサービス（AI Gateway、GitLab Language Server）が使用するのと同じメカニズムであり、Go サービスにとって組織的に推奨される経路です。

### 未解決の問題: カスタムイベントのコンテキストスキーマ

LabKit v2 の `TrackEvent` API は現在、カスタムイベントにコンテキストを添付しません。`custom_event` スキーマを持つ自己記述型イベントペイロード (`ue_px`) のみを送信し、`cx` (contexts) フィールドは設定されません。カスタムコンテキストはアナリストに、型付きでスキーマ検証された第一級ウェアハウスカラムをクエリのために提供します — これがないと、AR イベントは同じウェアハウスモデルを使用して他の GitLab イベントと一緒に分析できません。`TrackBillingEvent` は `cx` を設定しますが、`billable_usage` コンテキストのみが対象です。

Artifact Registry イベントの適切なコンテキスト（または複数のコンテキスト）は、[labkit#103](https://gitlab.com/gitlab-org/labkit/-/work_items/103) および [labkit!450](https://gitlab.com/gitlab-org/labkit/-/merge_requests/450) の関連議論で検討されています。主な選択肢は次のとおりです:

- **[`gitlab_standard`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/gitlab_standard/jsonschema/1-1-8) を再利用** — モノリスから発行されるイベントに添付されるコンテキスト。AR データを、ユニバーサルフィールド (`environment`、`realm`、`instance_id`、`deployment_type`、`organization_id` など) についてはモノリスイベントと同じウェアハウスカラムに取り込みますが、いくつかのフィールドが AR のドメインに合いません (`project_id`、`namespace_id`、`ultimate_parent_namespace_id` は、AR の Organization に紐付くモデルと衝突する Rails モノリスのセマンティクスを持ち、AI/ML およびフィーチャーフラグフィールドは無駄になります)。また、課金データとの結合に不可欠な `ar_namespace_id` のフィールドがありません。
- **1 つ以上のカスタム Artifact Registry コンテキストを定義** — AR のドメインに合わせて調整された Iglu スキーマで、`organization_id`、`ar_namespace_id`、およびイベント固有のディメンション（フォーマット、種類、auth_method、リポジトリ識別子など）のような識別子をカバーします。よりクリーンなセマンティクス、フィールドのミスマッチなし。ただしスキーマの設計と保守が必要です。
- **両方を一緒に添付** — Snowplow イベントは複数のコンテキストを運べます。ユニバーサルなサブセットには `gitlab_standard` を、AR 固有のディメンションにはカスタム AR コンテキストを使用します。

カスタム AR コンテキストが主導的な方向性です。この ADR は最終決定を先取りせず、labkit#103 が着地したら、AR はそれが生成するコンテキスト（またはその組み合わせ）を採用します。

## 決定

**Artifact Registry は、LabKit v2 の Snowplow トラッカーを使用状況データ収集の唯一のメカニズムとして使用します。** イベントは Go サービスから Snowplow コレクターのエンドポイントに直接発行されます。アナリティクスデータフローのために Rails モノリスとの統合は必要ありません。

これは、MVP のためにイベントレベルのプロダクトアナリティクスを提供する最も単純な経路です。他の Go サテライトサービス（AI Gateway、GitLab Language Server）ですでに使用されているアプローチを反映しています。集約メトリクス収集（たとえば Service Ping 経由）は意図的にスコープ外とします。Snowplow をオプトアウトするセルフマネージドインスタンス向けに将来必要性が生じた場合は、フォローアップ ADR で対処できます。

### LabKit v2 Snowplow を介したイベントレベルのトラッキング

**何を追跡するか**（初期セットの例、反復的に拡張）:

| イベント | 属性 |
|---|---|
| `artifact_registry_artifact_pushed` | `format`、`kind` (local)、`organization_id`、`ar_namespace_id`、`auth_method` |
| `artifact_registry_artifact_pulled` | `format`、`kind` (local/virtual)、`organization_id`、`ar_namespace_id`、`auth_method`、`cache_hit` (virtual のみ) |
| `artifact_registry_artifact_deleted` | `format`、`kind`、`organization_id`、`ar_namespace_id`、`deletion_type` (manual/lifecycle_policy) |
| `artifact_registry_repository_created` | `format`、`kind`、`organization_id`、`ar_namespace_id` |
| `artifact_registry_repository_deleted` | `format`、`kind`、`organization_id`、`ar_namespace_id` |
| `artifact_registry_virtual_cache_miss` | `format`、`upstream_type` (remote/local)、`organization_id`、`ar_namespace_id` |
| `artifact_registry_lifecycle_policy_executed` | `format`、`organization_id`、`ar_namespace_id`、`artifacts_removed_count` |

すべてのイベントは `organization_id` と `ar_namespace_id` の両方を持ちます。AR namespace は [ADR-022](022_namespace_decoupling.md) で導入された slug に紐付くエンティティであり、1 つの organization は複数の AR namespace を所有できます。[課金設計ドキュメント](https://gitlab.com/gitlab-org/architecture/usage-billing/-/merge_requests/27) は計量境界を AR namespace に設定しているため、アナリティクスイベントは課金データとクリーンに同じ粒度で結合できるよう、`ar_namespace_id` を持つ必要があります。`organization_id` はクロス namespace のロールアップ用に保持されます。

属性は、各イベントに添付された Snowplow カスタムコンテキストによって運ばれます。具体的なスキーマ（1 つ以上のカスタム AR コンテキスト、オプションで `gitlab_standard` との組み合わせ）は labkit#103 で検討されています（[未解決の問題](#open-question-context-schema-for-custom-events) を参照）。

**設定**: Snowplow コレクターのエンドポイントは環境変数経由で提供されます（LabKit の慣例に従う）。SaaS では、これは `snowplowprd.trx.gitlab.net` を指します。オプトインしたセルフマネージドおよび Dedicated インスタンスでは、同じコレクターを指すように設定されます。オプトアウトしたインスタンスでは、エミッターは無効化されます（イベントは送信されません）。

**対象範囲**: SaaS（常時）、セルフマネージドと Dedicated（顧客のオプトインあり、デフォルトはオプトアウト）。

**データ送信先**: イベントは標準の Snowplow パイプライン（コレクター、エンリッチャー、疑似化、S3）を通じて Snowflake データウェアハウスに流れます。カスタムパイプラインのインフラは必要ありません。

### 運用メトリクス（非プロダクト）

Artifact Registry はすでに LabKit v2 を Prometheus メトリクス（リクエストレイテンシ、エラーレート、コネクションプール統計）に使用しています。これらはインフラのダッシュボードとアラートが消費する運用メトリクスであり、プロダクトアナリティクスではありません。完全性のためにここで言及しますが、使用状況データ収集の決定の一部ではありません。

LabKit Snowplow エミッター自体は、イベントパイプラインの健全性に対する運用上の可視性のために登録すべき Prometheus メトリクス（エンキュー数、送信成功/失敗、バッチ配信時間、キュー深度）を公開します。

## 結果

### ポジティブ

1. **初日からの完全な SaaS カバレッジ**: LabKit v2 の Snowplow トラッカーは本番環境で実証済みで、追加のインフラなしでイベントレベルの粒度を提供する
2. **シンプルな単一経路の計装**: 1 つのメカニズム、1 つのコードパス。アナリティクスデータフローのために Rails モノリスとの調整は不要
3. **Organization スコープのコンテキスト**: LabKit v2 の課金イベント構造には `OrganizationID` が含まれており、Artifact Registry の Organization に紐付くアーキテクチャ ([ADR-001](001_organizations_as_anchor_point.md)) と整合する
4. **デフォルトでのプライバシー**: イベントは追加のプライバシーエンジニアリングなしに、GitLab の既存の疑似化パイプライン（HMAC-SHA256）を通じて流れる
5. **カスタムインフラ不要**: 既存の Snowplow パイプラインと Snowflake ウェアハウスを使用
6. **課金準備完了**: LabKit v2 の `TrackBillingEvent` は、realm、unit of measure、quantity のフィールドとともに、Artifact Registry SKU の使用量ベースの課金への直接的な経路を提供する
7. **サテライトサービスの先例に整合**: AI Gateway と GitLab Language Server はすでに LabKit v2 Snowplow を直接使用している。Artifact Registry も同じパターンに従う。

### ネガティブ

1. **`TrackEvent` でのカスタムコンテキストは未サポート**: LabKit v2 の `TrackEvent` は現在、カスタムコンテキストの添付をサポートしていません。[labkit#103](https://gitlab.com/gitlab-org/labkit/-/work_items/103) / [labkit!450](https://gitlab.com/gitlab-org/labkit/-/merge_requests/450) が着地するまで、AR は型付きでスキーマ検証された属性を伴う本番イベントを発行できません — アナリティクスはこの LabKit 作業に依存します。これはすべての Go サテライトサービスに影響する LabKit v2 の制限です。課金イベント (`TrackBillingEvent`) は影響を受けません — すでに `billable_usage` コンテキストを添付しており、`organization_id` を第一級フィールドとして持っています。
2. **Snowplow オプトアウトインスタンスからのデータなし**: Snowplow 転送をオプトアウトするセルフマネージドおよび Dedicated インスタンスは、まったく使用状況データを提供しません。顧客が明示的にオプトアウトしているため、MVP では許容されます。オプトアウトインスタンスの集約カバレッジがプロダクト要件になる場合は、フォローアップ ADR で Service Ping 統合を追加できます。
3. **インメモリイベントバッファのリスク**: LabKit v2 の Snowplow エミッターはインメモリストレージを使用します（最大 10,000 イベント）。プロセス再起動時にイベントは失われます。Artifact Registry の予想されるイベントボリュームでは、これは許容されます — イベントはアナリティクスデータであり、トランザクションレコードではありません。エミッターの Prometheus メトリクスがオーバーフローやドロップ率の可視性を提供します。

## 検討した代替案

### 代替案 1: すべてのイベントを Rails モノリス経由でルーティング

#### アプローチ

Artifact Registry はすべての使用状況イベントを内部 API 経由で Rails モノリスに送信します。モノリスは既存の Rails 統合 Snowplow パイプラインを使用して、レジストリに代わって `track_internal_event()` を呼び出します。

#### 選択しなかった理由

1. **密結合**: 追跡された各アクションがモノリスへの API 呼び出しを必要とし、アナリティクスに対するクリティカルパス上のランタイム依存性、またはサービス間のバックグラウンドジョブキューが作成される
2. **レイテンシと可用性のリスク**: モノリスが遅いまたは利用できない場合、イベントトラッキングが劣化またはブロックされる。LabKit のインプロセスエミッターは、外部サービスからトラッキングを切り離す
3. **不要な間接化**: LabKit v2 はモノリスが内部で使用するのと同じ Snowplow トラッカーを提供しているため、中間者が不要になる
4. **サテライトサービスのカウンターパターン**: 他の Go サービス（AI Gateway、GitLab Language Server）はすでに Snowplow イベントを直接発行している。Rails 経由のルーティングは確立されたパターンからの後退になる

### 代替案 2: ClickHouse への OpenTelemetry (OTLP)

#### アプローチ

[CI Job Telemetry](/handbook/engineering/architecture/design-documents/ci_job_telemetry/) パターンに従う: OTLP トレース/メトリクスを OTEL Collector に発行し、ClickHouse に書き込みます。Snowflake の代わりに ClickHouse をアナリティクスストアとして使用します。

#### 選択しなかった理由

1. **異なるユースケース**: CI Job Telemetry は運用パフォーマンストレース（ジョブステージのスパンレベルタイミング）に OTLP を使用します。Artifact Registry の使用状況データはプロダクトアナリティクス（誰が何をどれくらい使用するか、採用トレンド）です。これらは異なるドメインであり、異なるクエリパターンと消費者を持ちます
2. **ClickHouse の可用性**: ClickHouse はまだすべてのデプロイタイプで普遍的に利用できるわけではありません。Snowplow/Snowflake は確立されたプロダクトアナリティクスインフラです
3. **組織的整合**: Analytics Instrumentation チームが Snowplow パイプラインと Snowflake ウェアハウスを所有します。プロダクトアナリティクスの消費者（プロダクトマネージャー、データアナリスト）は Snowflake にクエリします。ClickHouse の使用は、確立されたワークフロー外で新しいクエリインフラとデータモデルを構築することを要求します
4. **将来の互換性**: ClickHouse が標準のプロダクトアナリティクスストアになった場合、LabKit v2 の Snowplow イベントはアプリケーションコードを変更せずにパイプラインレベルで再ルーティングできます。この決定は将来の OTLP 採用と相互排他的ではありません

### 代替案 3: セルフマネージドオプトアウトカバレッジのために Service Ping 統合を追加

#### アプローチ

Snowplow に加えて、Rails モノリスが週次の Service Ping アセンブリ時にクエリして集約メトリクスを収集する内部 API を Artifact Registry に公開します。これにより、Snowplow イベント転送をオプトアウトするインスタンスでも集約カバレッジが提供されます。

#### 選択しなかった理由

1. **カーディナリティの問題**: Service Ping ペイロードはフラットなスカラーメトリクスに集約されます（メトリクスあたり週あたり 1 つの数値）。Artifact Registry の興味深いディメンション — フォーマット、リポジトリの種類（local/virtual/remote）、認証方法、organization、upstream type — はクロス集計されると多数のメトリクスバリアントに分裂します。これを Service Ping でモデル化するには、カーディナリティを平坦化（分析的価値を失う）するか、数百の事前集約メトリクス YAML 定義を登録（運用負担）する必要があります。Snowplow イベントは、ディメンションがウェアハウスで各イベントとともに保存されるため、高カーディナリティを自然に処理します。
2. **高コストな SQL 集計**: Service Ping は本番データベースに対する SQL クエリを通じてそのメトリクスを計算します。Artifact Registry のテーブル（artifacts、blob references、cache entries）は namespace でパーティション化され、GitLab.com スケールでは数十億行に成長します ([ADR-007](007_database_schema.md)、[ADR-003](003_system_requirements.md))。週次の Service Ping メトリクスを生成するためのクロス namespace の `COUNT`/`SUM` クエリは、毎サイクル大量のデータをスキャンする — Snowplow がすでに本番データベースに触れずに同じ情報をウェアハウスから提供しているのに、正当化する必要のない高コストな操作です。
3. **Redis カウンターインフラを避ける**: ライブ SQL の代替は、すべてのアーティファクト操作でインクリメントされ、Service Ping によって読み取られる Redis ベースのカウンターを維持することです。これは Rails モノリスが HyperLogLog と Redis HLL メトリクスに使用するパターンです。ここでこれを採用すると、新しい運用依存性（Redis カウンター、有効期限処理、Redis フラッシュ時の回復セマンティクス）と、すべての push/pull のホットパスでの新しい計装サーフェスが追加されます。Snowplow はすでに同じ計装ポイントでこのデータをキャプチャしているため、Redis カウンターレイヤーは純粋な重複になります。
4. **クロスサービスの調整**: YAML メトリクス定義のために Rails モノリスチームへの依存が追加されます。これは、この ADR で避けようとしているクロスサービス結合の種類です。
5. **境界のあるギャップ**: Snowplow をオプトアウトするセルフマネージド顧客は、明示的にデータを共有しないことを選択しています。カバレッジギャップは境界があり、顧客の意図と整合しています。
6. **将来も検討可能**: このオプションは、プロダクトがオプトアウトインスタンスの集約カバレッジを必要とする場合に、フォローアップとして利用可能なままです。オプトアウト率のデータが得られたら、別の ADR でトレードオフを再検討できます。

## 実装シーケンス

1. **フェーズ 1（コンテキストスキーマの解決）**: [labkit#103](https://gitlab.com/gitlab-org/labkit/-/work_items/103) と [labkit!450](https://gitlab.com/gitlab-org/labkit/-/merge_requests/450) の関連議論を追跡・貢献し、サテライトサービス向けに LabKit v2 の `TrackEvent` が添付すべきコンテキスト（または複数コンテキストの組み合わせ）を解決する。AR イベントが本番に着地する前に決定に到達することで、後のスキーマ移行を回避: ユニバーサルフィールドは最初のイベントから選択されたコンテキストで送信され、AR 固有の属性は最初から正しく配置される。
2. **フェーズ 2（MVP）**: LabKit v2 Snowplow トラッカーを統合する。コアアクション（push、pull、delete、リポジトリ作成）に対して、フェーズ 1 で選択されたコンテキストを添付してイベントを発行する。エミッターの Prometheus メトリクスを登録する。ステージング環境でコンテキストが設定された状態でイベントが Snowflake に到達することを検証する。フェーズ 2 はフェーズ 1 に依存する — 本番 AR アナリティクスは LabKit コンテキストサポートとともに出荷され、その前ではない。
3. **フェーズ 3（課金）**: 課金可能なアクション（ストレージ消費、アーティファクト転送）に対して `TrackBillingEvent` 呼び出しを計装する。課金イベントは `billable_usage` 1-0-2 スキーマに準拠し、`organization_id` を第一級フィールドとして持つ。AR namespace ID — [課金設計ドキュメント](https://gitlab.com/gitlab-org/architecture/usage-billing/-/merge_requests/27) によって設定された計量境界 — は `BillingEventOptionalInput` の `entity_id` フィールド経由で運ばれ、カスタムイベントに添付された `ar_namespace_id` と一致してアナリティクスと課金データがクリーンに結合される。このフェーズはフェーズ 1 のコンテキスト解決とは独立している。
4. **フェーズ 4（イテレーション）**: プロダクトアナリティクスのリクエストに基づいてイベントカバレッジを拡張する。仮想リポジトリ使用パターン、ライフサイクルポリシーの有効性、フォーマット固有の採用のメトリクスを追加する。

## 参考資料

- [LabKit v2 Snowplow Tracker](https://gitlab.com/gitlab-org/labkit/-/tree/main/v2/events/snowplow) — サテライトサービスが使用する Go Snowplow クライアント
- [Iglu `custom_event` スキーマ 1-0-0](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/custom_event/jsonschema/1-0-0) — `TrackEvent` ペイロードのスキーマ
- [Iglu `billable_usage` スキーマ 1-0-2](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/billable_usage/jsonschema/1-0-2) — `TrackBillingEvent` ペイロードのスキーマ（`organization_id` を含む）
- [Iglu `gitlab_standard` スキーマ 1-1-8](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/gitlab_standard/jsonschema/1-1-8) — カスタムイベントの候補コンテキストの 1 つ。再利用するか、カスタム AR コンテキストを使用するかは labkit#103 で決定中
- [labkit#103](https://gitlab.com/gitlab-org/labkit/-/work_items/103) — 未解決の作業項目: LabKit v2 の `TrackEvent` がサテライトサービス向けに添付すべきコンテキストスキーマ
- [labkit!450](https://gitlab.com/gitlab-org/labkit/-/merge_requests/450) — `gitlab_standard` 対カスタム AR コンテキストの進行中の議論
- [Usage Billing Design Doc !27](https://gitlab.com/gitlab-org/architecture/usage-billing/-/merge_requests/27) — AR namespace を計量境界として設定。アナリティクスイベントは課金データと結合するために `ar_namespace_id` を運ぶ
- [ADR-022: Namespace Decoupling](022_namespace_decoupling.md) — Rails namespace とは区別される slug 紐付きエンティティとして AR namespace を定義
- [Internal Analytics ドキュメント](https://docs.gitlab.com/ee/development/internal_analytics/) — GitLab のアナリティクス計装ガイド
- [Event Data Collection for Self-Managed and Dedicated](https://docs.gitlab.com/administration/settings/event_data) — セルフマネージドの Snowplow 収集の設定とプライバシーの詳細 (18.0+)
- [Customer Product Usage Events FAQ](/handbook/legal/privacy/product-usage-events-faq/) — セルフマネージドイベント収集、オプトアウトの仕組み、17.11→18.0 のロールアウトに関する顧客向け FAQ
- [Customer Product Usage Information](/handbook/legal/privacy/customer-product-usage-information/) — Service Ping、Snowplow、License Sync データ収集のプライバシーおよび法的フレームワーク
- [Internal Events Data Flows](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/technical-blueprint/current-state/internal-events-data-flows/) — デプロイタイプにまたがるイベント収集のシーケンス図
- [Analytics Instrumentation Infrastructure](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/infrastructure/) — Snowplow と Service Ping のインフラ詳細
- [CI Job Telemetry Design Document](/handbook/engineering/architecture/design-documents/ci_job_telemetry/) — OTLP ベースのテレメトリアプローチ（検討した代替案）
- [ADR-001: Organizations as Anchor Point](001_organizations_as_anchor_point.md) — Organization スコープのアーキテクチャ
- [ADR-006: Technology Stack](006_technology_stack.md) — Go 言語と LabKit v2 の採用
- [ADR-009: API Design](009_api_design.md) — Management と Client API の構造
