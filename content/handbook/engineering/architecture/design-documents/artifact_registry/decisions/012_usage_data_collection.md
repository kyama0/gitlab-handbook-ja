---
title: "Artifact Registry ADR 012: 使用状況データ収集"
owning-stage: "~devops::package"
description: "SaaS およびセルフマネージドのデプロイにまたがるプロダクトアナリティクスとビジネスインテリジェンスのために、Artifact Registry が使用状況データを収集する方法に関する決定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/012_usage_data_collection/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
lastmod: 2026-06-10T09:52:28+02:00
translated_at: "2026-06-12T12:00:00Z"
translator: claude
stale: false
model: claude-opus-4-7
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## コンテキスト {#context}

Artifact Registry には、プロダクトアナリティクス、ビジネスインテリジェンス、請求のための使用状況データ収集が必要です。使用状況データは重要な問いに答えます。どのアーティファクト形式が最も採用されているか、いくつのアーティファクトがプッシュおよびプルされているか、ストレージが時間とともにどのように増加するか、いくつの一意なユーザーがレジストリと対話するか、仮想リポジトリのキャッシュヒット率はどのようなものか、といった問いです。

Artifact Registry は、Rails モノリスの外部にデプロイされるスタンドアロンの Go サービスです（[ADR-006](006_technology_stack.md)）。GitLab の主要なインストルメンテーションフレームワークである [Internal Event Tracking](https://docs.gitlab.com/ee/development/internal_analytics/)（Snowplow がバックエンド）は、Rails モノリスの統合を中心に設計されています。サテライトサービスから使用状況データを収集するには、意図的な戦略が必要です。

収集はすべてのデプロイタイプにまたがって機能する必要があります。

- **GitLab.com (SaaS)**: マルチテナント、GitLab が運用するインフラで、アナリティクスパイプラインへのフルアクセスを持つ
- **Self-Managed**: 顧客がホストするインスタンスで、データ収集は顧客のオプトインに依存する
- **GitLab Dedicated**: GitLab が管理するシングルテナントのクラウドインスタンスで、データ収集の目的ではセルフマネージドと機能的に類似する

### Snowplow を介した Internal Event Tracking {#internal-event-tracking-via-snowplow}

GitLab の主要なインストルメンテーションフレームワークです。イベントは Snowplow コレクターに送信され、仮名化を伴う AWS パイプラインを通過し、データレイクに到達して Snowflake データウェアハウスに取り込まれます。SaaS では常に利用可能で、セルフマネージド/Dedicated では GitLab 18.0 以降で顧客のオプトインにより利用可能です。

Go サテライトサービスの場合、[LabKit v2](https://gitlab.com/gitlab-org/labkit) はネイティブな Snowplow トラッカー（`v2/events/snowplow/`）を次の機能とともに提供します。

- [`custom_event`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/custom_event/jsonschema/1-0-0) スキーマを使用するカスタム使用状況イベント。型付けされ、スキーマ検証された属性を運ぶために、1 つ以上の自己記述的なカスタムコンテキストが添付されます。
- [`billable_usage`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/billable_usage/jsonschema/1-0-2) スキーマを使用する請求可能な使用状況イベント。このスキーマには、`organization_id`、`realm`、`deployment_type`、`quantity`、`unit_of_measure` のファーストクラスフィールドがあります。
- 自動再試行と FIFO キュー管理を備えた非同期バッチ送信
- エミッターの可観測性のための組み込み Prometheus メトリクス
- オーバーフロー保護を備えたインメモリイベントストレージ（10,000 イベントの容量）

これは他のサテライトサービス（AI Gateway、GitLab Language Server）で使用されているのと同じメカニズムであり、Go サービスにとって組織的に推奨されるパスです。

### カスタムイベントのためのコンテキストスキーマ {#context-schemas-for-custom-events}

すべての AR カスタムイベントは、スコープごとに階層化された 2 つのコンテキストを添付します。

- **[`gitlab_standard/1-1-8`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/gitlab_standard/jsonschema/1-1-8)** — 普遍的な ID と環境のフィールド（`environment`、`realm`、`instance_id`、`deployment_type`、`organization_id`、`user_id`）。AR イベントを、クロスプロダクト分析のためにモノリスのイベントと同じウェアハウス列に配置します。
- **[`artifact_registry_context/1-0-0`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/artifact_registry_context/jsonschema/1-0-0)** — AR 固有のディメンション: `ar_instance_version`（必須）、`ar_namespace_id`、`format`、`repository_kind`（`hosted`/`virtual`/`remote`）、`repository_id`、`cache_hit`、`upstream_type`（`hosted`/`remote`）。`ar_namespace_id` をファーストクラスの列として運び、アナリティクスが AR namespace の粒度で請求データときれいに結合されるようにします。

イベント固有の一回限りのもの（例: `auth_method`、`deletion_type`、`artifacts_removed_count`）は、いずれのコンテキストでもなく、イベント自身の `custom_event` ペイロードに入ります。

## 決定 {#decision}

**Artifact Registry は LabKit v2 Snowplow トラッカーを唯一の使用状況データ収集メカニズムとして使用します。** イベントは Go サービスから Snowplow コレクターのエンドポイントに直接送信されます。アナリティクスデータフローのために Rails モノリスの統合は不要です。

これは、MVP に対してイベントレベルのプロダクトアナリティクスを提供する最もシンプルなパスです。他の Go サテライトサービス（AI Gateway、GitLab Language Server）ですでに使用されているアプローチを反映しています。集約されたメトリクス収集（例: Service Ping 経由）は意図的に範囲外です。Snowplow をオプトアウトするセルフマネージドインスタンスに対する将来的な必要性が生じた場合は、フォローアップの ADR で対処できます。

### LabKit v2 Snowplow を介したイベントレベルの追跡 {#event-level-tracking-via-labkit-v2-snowplow}

**何を追跡するか**（初期セット、反復的に拡張）。すべてのイベントは、カスタムコンテキストとして `gitlab_standard/1-1-8` と `artifact_registry_context/1-0-0` の両方を運びます。普遍的なフィールド（`organization_id`、`realm`、`deployment_type`、`instance_id`、`environment`、`user_id`）は `gitlab_standard` から来るため、以下では繰り返しません。イベント固有の一回限りのものは、イベント自身の `custom_event` ペイロードに入ります。

| イベント | `artifact_registry_context` フィールド | イベントペイロード（一回限り）フィールド |
|---|---|---|
| `artifact_registry_artifact_pushed` | `format`、`repository_kind=hosted`、`repository_id`、`ar_namespace_id` | `auth_method` |
| `artifact_registry_artifact_pulled` | `format`、`repository_kind`（`hosted`/`virtual`）、`repository_id`、`ar_namespace_id`、`cache_hit`（virtual のみ） | `auth_method` |
| `artifact_registry_artifact_deleted` | `format`、`repository_kind`、`repository_id`、`ar_namespace_id` | `deletion_type`（`manual`/`lifecycle_policy`） |
| `artifact_registry_repository_created` | `format`、`repository_kind`、`repository_id`、`ar_namespace_id` | — |
| `artifact_registry_repository_deleted` | `format`、`repository_kind`、`repository_id`、`ar_namespace_id` | — |
| `artifact_registry_virtual_cache_miss` | `format`、`repository_kind=virtual`、`repository_id`、`ar_namespace_id`、`upstream_type`（`hosted`/`remote`） | — |
| `artifact_registry_lifecycle_policy_executed` | `format`、`repository_kind`、`repository_id`、`ar_namespace_id` | `artifacts_removed_count` |

AR namespace は [ADR-022](022_namespace_decoupling.md) の slug を起点とするエンティティです。1 つの組織は複数の AR namespace を所有できます。[請求設計ドキュメント](https://gitlab.com/gitlab-org/architecture/usage-billing/-/merge_requests/27)はメータリングの境界を AR namespace に設定しているため、イベントは（`artifact_registry_context` 内の）`ar_namespace_id` を運び、同じ粒度で請求データときれいに結合します。（`gitlab_standard` 内の）`organization_id` は namespace 横断のロールアップをサポートします。

**設定**: Snowplow コレクターのエンドポイントは環境変数経由で提供されます（LabKit の慣例に従う）。SaaS では、これは `snowplowprd.trx.gitlab.net` を指します。オプトインするセルフマネージドおよび Dedicated インスタンスでは、これは同じコレクターを指すように設定されます。オプトアウトするインスタンスでは、エミッターは無効になります（イベントは送信されません）。

**カバレッジ**: SaaS（常時）、セルフマネージドおよび Dedicated（顧客のオプトインあり、デフォルトでオプトアウト）。

**データの宛先**: イベントは標準の Snowplow パイプライン（コレクター、エンリッチャー、仮名化、S3）を通って Snowflake データウェアハウスに流れます。カスタムパイプラインインフラは不要です。

### 運用メトリクス（非プロダクト） {#operational-metrics-non-product}

Artifact Registry はすでに Prometheus メトリクス（リクエストレイテンシ、エラー率、コネクションプールの統計）に LabKit v2 を使用しています。これらはインフラのダッシュボードとアラートで消費される運用メトリクスであり、プロダクトアナリティクスではありません。完全性のためにここで言及していますが、使用状況データ収集の決定の一部ではありません。

LabKit Snowplow エミッター自体は、イベントパイプラインの健全性に対する運用上の可視性のために登録すべき Prometheus メトリクス（エンキュー数、送信の成功/失敗、バッチ配信の所要時間、キューの深さ）を公開します。

## 結果 {#consequences}

### ポジティブ {#positive}

1. **初日からの完全な SaaS カバレッジ**: LabKit v2 の Snowplow トラッカーは本番で実証されており、追加のインフラなしにイベントレベルの粒度を提供します
2. **シンプルな単一パスのインストルメンテーション**: 1 つのメカニズム、1 つのコードパス。アナリティクスデータフローのための Rails モノリスとの調整は不要です
3. **組織スコープのコンテキスト**: 請求イベントのペイロードには `organization_id` が含まれ、Artifact Registry の組織を起点とするアーキテクチャ（[ADR-001](001_organizations_as_anchor_point.md)）に整合します
4. **デフォルトでプライバシー**: イベントは追加のプライバシーエンジニアリングなしに GitLab の既存の仮名化パイプライン（HMAC-SHA256）を通って流れます
5. **カスタムインフラ不要**: 既存の Snowplow パイプラインと Snowflake ウェアハウスを使用します
6. **請求対応**: LabKit v2 の請求トラッカーは、realm、計測単位、数量のフィールドとともに、Artifact Registry SKU の使用状況ベースの請求への直接的なパスを提供します
7. **サテライトサービスの先例に整合**: AI Gateway と GitLab Language Server はすでに LabKit v2 Snowplow を直接使用しています。Artifact Registry は同じパターンに従います。

### ネガティブ {#negative}

1. **LabKit v2 と iglu の最小バージョン依存**: カスタムイベントにカスタムコンテキストを発行するには、それをサポートする LabKit v2 のリリースが必要であり、それを使用する AR イベントが検証を通過する前に、`artifact_registry_context` スキーマが Snowplow エンリッチメントパイプラインにデプロイされている必要があります。
2. **Snowplow をオプトアウトしたインスタンスからのデータなし**: Snowplow 転送をオプトアウトしたセルフマネージドおよび Dedicated インスタンスは、使用状況データをまったく提供しません。顧客が明示的にオプトアウトしていることを考えると、これは MVP では許容できます。オプトアウトしたインスタンスの集約カバレッジがプロダクト要件になった場合、フォローアップの ADR で Service Ping 統合を追加できます。
3. **インメモリイベントバッファのリスク**: LabKit v2 の Snowplow エミッターはインメモリストレージ（最大 10,000 イベント）を使用します。イベントはプロセスの再起動時に失われます。Artifact Registry の予想されるイベントボリュームでは、これは許容できます。イベントはアナリティクスデータであり、トランザクションレコードではありません。エミッターの Prometheus メトリクスがオーバーフローやドロップ率への可視性を提供します。

## 検討した代替案 {#alternatives-considered}

### 代替案 1: すべてのイベントを Rails モノリス経由でルーティングする {#alternative-1-route-all-events-through-the-rails-monolith}

#### アプローチ {#approach}

Artifact Registry は、内部 API 経由ですべての使用状況イベントを Rails モノリスに送信します。次にモノリスが、既存の Rails 統合された Snowplow パイプラインを使用して、レジストリに代わって `track_internal_event()` 呼び出しを発火します。

#### 選択しなかった理由 {#why-not-chosen}

1. **密結合**: すべての追跡されるアクションがモノリスへの API 呼び出しを必要とし、クリティカルパス上のアナリティクスのランタイム依存関係、またはサービス間のバックグラウンドジョブキューを作り出します
2. **レイテンシと可用性のリスク**: モノリスが遅いまたは利用不可の場合、イベント追跡が低下またはブロックされます。LabKit のインプロセスエミッターは、追跡をあらゆる外部サービスから分離します
3. **不要な間接化**: LabKit v2 は、モノリスが内部的に使用するのと同じ Snowplow トラッカーを提供し、仲介者の必要性を排除します
4. **サテライトサービスのカウンターパターン**: 他の Go サービス（AI Gateway、GitLab Language Server）はすでに Snowplow イベントを直接発行しています。Rails 経由のルーティングは確立されたパターンからのリグレッションになります

### 代替案 2: OpenTelemetry (OTLP) から ClickHouse へ {#alternative-2-opentelemetry-otlp-to-clickhouse}

#### アプローチ {#approach-1}

[CI Job Telemetry](/handbook/engineering/architecture/design-documents/ci_job_telemetry/) パターンに従います。ClickHouse に書き込む OTEL Collector に OTLP のトレース/メトリクスを発行します。Snowflake の代わりに ClickHouse をアナリティクスストアとして使用します。

#### 選択しなかった理由 {#why-not-chosen-1}

1. **異なるユースケース**: CI Job Telemetry は OTLP を運用パフォーマンスのトレース（ジョブステージのスパンレベルのタイミング）に使用します。Artifact Registry の使用状況データはプロダクトアナリティクス（誰が何をどれだけ使用するか、採用傾向）です。これらは異なるクエリパターンと消費者を持つ異なるドメインです
2. **ClickHouse の可用性**: ClickHouse はまだすべてのデプロイタイプで普遍的に利用可能ではありません。Snowplow/Snowflake は確立されたプロダクトアナリティクスインフラです
3. **組織的な整合**: Analytics Instrumentation チームが Snowplow パイプラインと Snowflake ウェアハウスを所有しています。プロダクトアナリティクスの消費者（プロダクトマネージャー、データアナリスト）は Snowflake をクエリします。ClickHouse を使用すると、確立されたワークフローの外で新しいクエリインフラとデータモデルを構築する必要があります
4. **将来の互換性**: ClickHouse が標準のプロダクトアナリティクスストアになった場合、LabKit v2 の Snowplow イベントはアプリケーションコードを変更せずにパイプラインレベルで再ルーティングできます。この決定は将来の OTLP 採用と相互排他的ではありません

### 代替案 3: セルフマネージドのオプトアウトカバレッジのために Service Ping 統合を追加する {#alternative-3-add-service-ping-integration-for-self-managed-opt-out-coverage}

#### アプローチ {#approach-2}

Snowplow に加えて、Rails モノリスが毎週の Service Ping アセンブリ中にクエリして集約メトリクスを収集する内部 API を Artifact Registry に公開します。これにより、Snowplow イベント転送をオプトアウトしたインスタンスに対しても集約カバレッジが提供されます。

#### 選択しなかった理由 {#why-not-chosen-2}

1. **カーディナリティの問題**: Service Ping のペイロードはフラットなスカラーメトリクス（週ごとのメトリクスあたり 1 つの数値）に集約されます。Artifact Registry の興味深いディメンション（format、リポジトリの種類（hosted/virtual/remote）、認証方法、組織、upstream の種類）は、クロス集計すると多数のメトリクスバリアントに爆発します。これを Service Ping でモデル化するには、カーディナリティをフラット化する（分析的価値を失う）か、数百の事前集約されたメトリクス YAML 定義を登録する（運用負担）必要があります。Snowplow イベントは、ディメンションが各イベントとともにウェアハウスに保存されるため、高カーディナリティを自然に処理します。
2. **高価な SQL 集約**: Service Ping は、ライブのデータベース上の SQL クエリでメトリクスを計算します。Artifact Registry のテーブル（アーティファクト、blob 参照、キャッシュエントリ）は namespace でパーティション化されており、GitLab.com 規模で数十億行に増加します（[ADR-007](007_database_schema.md)、[ADR-003](003_system_requirements.md)）。毎週の Service Ping メトリクスを埋めるための namespace 横断の `COUNT`/`SUM` クエリは、サイクルごとに大量のデータをスキャンします。Snowplow がすでに本番データベースに触れることなくウェアハウスから同じ情報を提供しているのに、正当化する必要のない高価な操作です。
3. **Redis カウンターインフラの回避**: ライブ SQL の代替案は、すべてのアーティファクト操作でインクリメントされ、Service Ping によって読み取られる Redis ベースのカウンターを維持することです。これは Rails モノリスが HyperLogLog と Redis HLL メトリクスに使用するパターンです。ここでそれを採用すると、新しい運用依存関係（Redis カウンター、有効期限処理、Redis フラッシュ時の復旧セマンティクス）と、すべてのプッシュ/プルのホットパスでの新しいインストルメンテーションサーフェスが追加されます。Snowplow はすでに同じインストルメンテーションポイントでこのデータをキャプチャしているため、Redis カウンター層は純粋な重複になります。
4. **サービス間の調整**: YAML メトリクス定義のために Rails モノリスチームへの依存関係を追加します。これはこの ADR で回避しようとしているサービス間の結合の一種です。
5. **限定的なギャップ**: Snowplow をオプトアウトするセルフマネージドの顧客は、データを共有しないことを明示的に選択しています。カバレッジのギャップは限定的であり、顧客の意図に整合しています。
6. **閉ざされていない**: このオプションは、プロダクトがオプトアウトしたインスタンスの集約カバレッジを必要とする場合、フォローアップとして引き続き利用可能です。オプトアウト率に関するデータが得られれば、別の ADR がこのトレードオフを再検討できます。

## 実装シーケンス {#implementation-sequence}

1. **フェーズ 1 (MVP)**: LabKit v2 Snowplow トラッカーを統合します。コアアクション（プッシュ、プル、削除、リポジトリ作成）のイベントを `gitlab_standard` と `artifact_registry_context` を添付して発行します。エミッターの Prometheus メトリクスを登録します。両方のコンテキストが入力された状態でイベントがステージングの Snowflake に到達することを検証します。
2. **フェーズ 2 (請求)**: 請求可能なアクション（ストレージ消費、アーティファクト転送）の請求イベントを、`billable_usage/1-0-2` スキーマに準拠して発行します。[請求設計ドキュメント](https://gitlab.com/gitlab-org/architecture/usage-billing/-/merge_requests/27)によって設定されたメータリング境界である AR namespace ID は、スキーマの `entity_id` フィールド経由で運ばれ、カスタムイベントの `ar_namespace_id` と一致して、アナリティクスと請求データがきれいに結合されます。フェーズ 1 とは独立しています。
3. **フェーズ 3 (イテレーション)**: プロダクトアナリティクスのリクエストに基づいてイベントカバレッジを拡張します。仮想リポジトリの使用パターン、ライフサイクルポリシーの有効性、形式固有の採用などです。再発する AR 固有のディメンションがファーストクラスのウェアハウス列を正当化する場合、`artifact_registry_context` を拡張します（新しいマイナーバージョン）。

## 参考資料 {#references}

- [LabKit v2 Snowplow Tracker](https://gitlab.com/gitlab-org/labkit/-/tree/main/v2/events/snowplow) — サテライトサービスが使用する Go Snowplow クライアント
- [Iglu `custom_event` schema 1-0-0](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/custom_event/jsonschema/1-0-0) — カスタムイベントペイロードのスキーマ
- [Iglu `billable_usage` schema 1-0-2](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/billable_usage/jsonschema/1-0-2) — 請求可能な使用状況イベントペイロードのスキーマ（`organization_id` を含む）
- [Iglu `gitlab_standard` schema 1-1-8](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/gitlab_standard/jsonschema/1-1-8) — AR カスタムイベントに添付される普遍的な ID/環境コンテキスト
- [Iglu `artifact_registry_context` schema 1-0-0](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/artifact_registry_context/jsonschema/1-0-0) — AR 固有のコンテキストスキーマ（[iglu!190](https://gitlab.com/gitlab-org/iglu/-/merge_requests/190) でマージ）
- [labkit!498](https://gitlab.com/gitlab-org/labkit/-/merge_requests/498) — LabKit v2 の Snowplow トラッカーにカスタムコンテキストのサポートを追加
- [labkit#103](https://gitlab.com/gitlab-org/labkit/-/work_items/103) — LabKit v2 のカスタムコンテキストサポートの追跡作業項目（labkit!498 で解決済み）
- [Usage Billing Design Doc !27](https://gitlab.com/gitlab-org/architecture/usage-billing/-/merge_requests/27) — AR namespace をメータリング境界として設定。アナリティクスイベントは請求データと結合するために `ar_namespace_id` を運ぶ
- [ADR-022: Namespace Decoupling](022_namespace_decoupling.md) — AR namespace を Rails namespace とは異なる slug を起点とするエンティティとして定義
- [Internal Analytics Documentation](https://docs.gitlab.com/ee/development/internal_analytics/) — GitLab のアナリティクスインストルメンテーションガイド
- [Event Data Collection for Self-Managed and Dedicated](https://docs.gitlab.com/administration/settings/event_data) — セルフマネージド Snowplow 収集の設定とプライバシーの詳細（18.0 以降）
- [Customer Product Usage Events FAQ](/handbook/legal/privacy/product-usage-events-faq/) — セルフマネージドのイベント収集、オプトアウトの仕組み、17.11→18.0 のロールアウトに関する顧客向け FAQ
- [Customer Product Usage Information](/handbook/legal/privacy/customer-product-usage-information/) — Service Ping、Snowplow、License Sync のデータ収集に関するプライバシーと法的フレームワーク
- [Internal Events Data Flows](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/technical-blueprint/current-state/internal-events-data-flows/) — デプロイタイプにまたがるイベント収集のシーケンス図
- [Analytics Instrumentation Infrastructure](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/infrastructure/) — Snowplow と Service Ping のインフラの詳細
- [CI Job Telemetry Design Document](/handbook/engineering/architecture/design-documents/ci_job_telemetry/) — OTLP ベースのテレメトリアプローチ（検討した代替案）
- [ADR-001: Organizations as Anchor Point](001_organizations_as_anchor_point.md) — 組織スコープのアーキテクチャ
- [ADR-006: Technology Stack](006_technology_stack.md) — Go 言語と LabKit v2 の採用
- [ADR-009: API Design](009_api_design.md) — 管理 API とクライアント API の構造
