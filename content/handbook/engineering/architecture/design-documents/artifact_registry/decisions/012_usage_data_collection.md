---
title: "Artifact Registry ADR 012: 使用状況データ収集"
owning-stage: "~devops::package"
description: "SaaS およびセルフマネージドのデプロイにまたがるプロダクトアナリティクスとビジネスインテリジェンスのために、Artifact Registry が使用状況データを収集する方法に関する決定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/012_usage_data_collection/
upstream_sha: c6f416c14ee9f53cb671d49ff11a9671c68d9326
lastmod: 2026-06-09T19:10:50+01:00
translated_at: "2026-06-09T00:00:00Z"
translator: claude
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## Context

Artifact Registry は、プロダクトアナリティクス、ビジネスインテリジェンス、課金のために使用状況データの収集を必要とします。使用状況データは、重要な問いに答えます。どのアーティファクト形式が最も採用されているか、いくつのアーティファクトがプッシュ・プルされているか、ストレージが時間とともにどう増加するか、いくつのユニークユーザーがレジストリと対話するか、仮想リポジトリのキャッシュヒット率はどうなっているか、といった問いです。

Artifact Registry は、Rails モノリスの外部にデプロイされるスタンドアロンの Go サービスです（[ADR-006](006_technology_stack.md)）。GitLab の主要な計測フレームワークである [Internal Event Tracking](https://docs.gitlab.com/ee/development/internal_analytics/)（Snowplow をバックエンドとする）は、Rails モノリスとの統合を中心に設計されています。サテライトサービスから使用状況データを収集するには、意図的な戦略が必要です。

収集はすべてのデプロイタイプにわたって機能しなければなりません。

- **GitLab.com（SaaS）**: マルチテナントで GitLab が運用するインフラ。アナリティクスパイプラインへのフルアクセスがあります
- **Self-Managed**: お客様がホストするインスタンス。データ収集はお客様のオプトインに依存します
- **GitLab Dedicated**: GitLab が管理するシングルテナントのクラウドインスタンス。データ収集の観点では機能的に self-managed と類似しています

### Internal Event Tracking via Snowplow

GitLab の主要な計測フレームワークです。イベントは Snowplow コレクターに送信され、仮名化を伴う AWS パイプラインを通過し、データレイクに到達して Snowflake データウェアハウスに取り込まれます。SaaS では常に利用可能であり、self-managed/Dedicated では GitLab 18.0 以降でお客様のオプトインにより利用できます。

Go サテライトサービス向けに、[LabKit v2](https://gitlab.com/gitlab-org/labkit) はネイティブな Snowplow トラッカー（`v2/events/snowplow/`）を提供しており、次の機能があります。

- [`custom_event`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/custom_event/jsonschema/1-0-0) スキーマを使用したカスタム使用状況イベント用の `TrackEvent`。型付き・スキーマ検証済みの属性を運ぶために、各イベントとともに自己記述型のカスタムコンテキストを添付できます。
- [`billable_usage`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/billable_usage/jsonschema/1-0-2) スキーマ（`iglu:com.gitlab/billable_usage/jsonschema/1-0-2`）を使用した課金対象の使用状況トラッキング用の `TrackBillingEvent()` / `TrackBillingEventWithOptionalInput()`。このスキーマには、`organization_id`、`realm`、`deployment_type`、`quantity`、`unit_of_measure` のためのファーストクラスなフィールドがあります。LabKit v2 の構造体はスキーマに 1:1 でマッピングされます。
- 自動リトライと FIFO キュー管理を伴う非同期バッチ送信
- エミッターの可観測性のための組み込み Prometheus メトリクス
- インメモリのイベントストレージ（10,000 イベントの容量）とオーバーフロー保護

これは他のサテライトサービス（AI Gateway、GitLab Language Server）が使用しているのと同じメカニズムであり、組織として Go サービスに推奨される経路です。

### Open question: context schema for custom events

LabKit v2 の `TrackEvent` API は、現在カスタムイベントにいかなるコンテキストも添付しません。`custom_event` スキーマを持つ自己記述型のイベントペイロード（`ue_px`）のみを送信し、`cx`（コンテキスト）フィールドは設定されません。カスタムコンテキストは、アナリストにクエリ可能な型付き・スキーマ検証済み・ファーストクラスのウェアハウス列を与えます—それらがなければ、AR イベントは同じウェアハウスモデルを使って他の GitLab イベントと一緒に分析できません。`TrackBillingEvent` は `cx` を設定しますが、`billable_usage` コンテキストのみです。

Artifact Registry イベントに適切なコンテキスト（複数の場合あり）は、[labkit#103](https://gitlab.com/gitlab-org/labkit/-/work_items/103) と、関連する議論 [labkit!450](https://gitlab.com/gitlab-org/labkit/-/merge_requests/450) で検討中です。有力な選択肢は次のとおりです。

- **[`gitlab_standard`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/gitlab_standard/jsonschema/1-1-8) を再利用する** — モノリスが発行するイベントに添付されるコンテキストです。普遍的なフィールド（`environment`、`realm`、`instance_id`、`deployment_type`、`organization_id` など）について、AR データをモノリスイベントと同じウェアハウス列に取り込めます。ただし、いくつかのフィールドは AR のドメインに合いません（`project_id`、`namespace_id`、`ultimate_parent_namespace_id` は Rails モノリスのセマンティクスを運び、AR の Organization に紐づくモデルと衝突します。AI/ML やフィーチャーフラグのフィールドは無駄な荷物です）。また、課金データとの結合に不可欠な `ar_namespace_id` のためのフィールドがありません。
- **1 つ以上のカスタム Artifact Registry コンテキストを定義する** — AR のドメインに合わせた iglu スキーマ（複数の場合あり）で、`organization_id`、`ar_namespace_id` などの識別子と、イベント固有のディメンション（format、kind、auth_method、リポジトリ識別子など）をカバーします。セマンティクスがよりクリーンでフィールドの不一致がない一方、スキーマの設計とメンテナンスが必要です。
- **両方を一緒に添付する** — Snowplow イベントは複数のコンテキストを運べます。普遍的なサブセットには `gitlab_standard` を使用し、AR 固有のディメンションにはカスタム AR コンテキストを使用します。

カスタム AR コンテキストが有力な方向性です。この ADR は最終決定を先取りするものではありません。labkit#103 が着地したら、AR はそれが生み出すコンテキスト（または組み合わせ）を採用します。

## Decision

**Artifact Registry は、唯一の使用状況データ収集メカニズムとして LabKit v2 Snowplow トラッカーを使用します。** イベントは Go サービスから Snowplow コレクターのエンドポイントへ直接発行されます。アナリティクスのデータフローのために Rails モノリスとの統合は不要です。

これは、MVP のためにイベントレベルのプロダクトアナリティクスを提供する最もシンプルな経路です。これは、他の Go サテライトサービス（AI Gateway、GitLab Language Server）で既に使用されているアプローチを踏襲しています。集約メトリクスの収集（たとえば Service Ping 経由）は意図的にスコープ外です。Snowplow をオプトアウトする self-managed インスタンスについて将来的なニーズが生じた場合は、フォローアップの ADR で対処できます。

### Event-Level Tracking via LabKit v2 Snowplow

**何をトラッキングするか**（初期セットの例。反復的に拡張）:

| イベント | 属性 |
|---|---|
| `artifact_registry_artifact_pushed` | `format`、`kind`（hosted）、`organization_id`、`ar_namespace_id`、`auth_method` |
| `artifact_registry_artifact_pulled` | `format`、`kind`（hosted/virtual）、`organization_id`、`ar_namespace_id`、`auth_method`、`cache_hit`（virtual のみ） |
| `artifact_registry_artifact_deleted` | `format`、`kind`、`organization_id`、`ar_namespace_id`、`deletion_type`（manual/lifecycle_policy） |
| `artifact_registry_repository_created` | `format`、`kind`、`organization_id`、`ar_namespace_id` |
| `artifact_registry_repository_deleted` | `format`、`kind`、`organization_id`、`ar_namespace_id` |
| `artifact_registry_virtual_cache_miss` | `format`、`upstream_type`（remote/hosted）、`organization_id`、`ar_namespace_id` |
| `artifact_registry_lifecycle_policy_executed` | `format`、`organization_id`、`ar_namespace_id`、`artifacts_removed_count` |

すべてのイベントは `organization_id` と `ar_namespace_id` の両方を運びます。AR namespace は [ADR-022](022_namespace_decoupling.md) で導入された slug に紐づくエンティティで、1 つの organization が複数の AR namespace を所有できます。[課金設計ドキュメント](https://gitlab.com/gitlab-org/architecture/usage-billing/-/merge_requests/27) はメータリング境界を AR namespace に設定しているため、アナリティクスイベントは同じ粒度で課金データとクリーンに結合できるよう、`ar_namespace_id` を運ぶ必要があります。`organization_id` は namespace をまたいだロールアップのために保持されます。

属性は、各イベントに添付された Snowplow カスタムコンテキストを介して運ばれます。具体的なスキーマ（1 つ以上のカスタム AR コンテキスト、オプションで `gitlab_standard` と組み合わせ）は labkit#103 で検討中です（[Open question](#open-question-context-schema-for-custom-events) を参照）。

**構成**: Snowplow コレクターのエンドポイントは環境変数を介して提供されます（LabKit の慣習に従う）。SaaS では `snowplowprd.trx.gitlab.net` を指します。オプトインした self-managed および Dedicated インスタンスでは、同じコレクターを指すよう構成されます。オプトアウトしたインスタンスでは、エミッターは無効化されます（イベントは送信されません）。

**カバレッジ**: SaaS（常時）、self-managed および Dedicated（お客様のオプトインによる。デフォルトはオプトアウト）。

**データの宛先**: イベントは標準の Snowplow パイプライン（コレクター、エンリッチャー、仮名化、S3）を通って Snowflake データウェアハウスに流れます。カスタムのパイプラインインフラは不要です。

### Operational Metrics (Non-Product)

Artifact Registry は既に Prometheus メトリクス（リクエストレイテンシー、エラー率、コネクションプールの統計）のために LabKit v2 を使用しています。これらは、インフラのダッシュボードやアラートで消費される運用メトリクスであり、プロダクトアナリティクスではありません。完全性のためにここで言及していますが、使用状況データ収集の決定の一部ではありません。

LabKit Snowplow エミッター自体が Prometheus メトリクス（エンキュー数、送信の成功/失敗、バッチ配信時間、キューの深さ）を公開しており、イベントパイプラインの健全性を運用上可視化するために登録すべきです。

## Consequences

### Positive

1. **初日からのフルな SaaS カバレッジ**: LabKit v2 の Snowplow トラッカーは本番で実証済みであり、追加のインフラなしにイベントレベルの粒度を提供します
2. **シンプルで単一経路の計測**: 1 つのメカニズム、1 つのコードパス。アナリティクスのデータフローのために Rails モノリスと調整する必要がありません
3. **Organization スコープのコンテキスト**: LabKit v2 の課金イベント構造には `OrganizationID` が含まれており、Artifact Registry の Organization に紐づくアーキテクチャ（[ADR-001](001_organizations_as_anchor_point.md)）と整合します
4. **デフォルトでプライバシー保護**: イベントは、追加のプライバシーエンジニアリングなしに GitLab の既存の仮名化パイプライン（HMAC-SHA256）を通ります
5. **カスタムインフラ不要**: 既存の Snowplow パイプラインと Snowflake ウェアハウスを使用します
6. **課金対応**: LabKit v2 の `TrackBillingEvent` は、realm、unit of measure、quantity のフィールドを備え、Artifact Registry SKU の使用量ベース課金への直接の経路を提供します
7. **サテライトサービスの先例と整合**: AI Gateway と GitLab Language Server は既に LabKit v2 Snowplow を直接使用しています。Artifact Registry は同じパターンに従います。

### Negative

1. **`TrackEvent` のカスタムコンテキストがまだサポートされていない**: LabKit v2 の `TrackEvent` は、現在カスタムコンテキストの添付をサポートしていません。[labkit#103](https://gitlab.com/gitlab-org/labkit/-/work_items/103) / [labkit!450](https://gitlab.com/gitlab-org/labkit/-/merge_requests/450) が着地するまで、AR は型付き・スキーマ検証済みの属性を持つ本番イベントを発行できません—アナリティクスはこの LabKit の作業にゲートされます。これは、すべての Go サテライトサービスに影響する LabKit v2 の制約です。課金イベント（`TrackBillingEvent`）は影響を受けません—既に `billable_usage` コンテキストを添付しており、それには `organization_id` がファーストクラスのフィールドとして含まれています。
2. **Snowplow をオプトアウトしたインスタンスからのデータなし**: Snowplow の転送をオプトアウトした self-managed および Dedicated インスタンスは、使用状況データをまったく提供しません。お客様の明示的なオプトアウトを考えると、これは MVP では許容できます。オプトアウトしたインスタンスの集約カバレッジがプロダクト要件になった場合は、フォローアップの ADR で Service Ping 統合を追加できます。
3. **インメモリのイベントバッファのリスク**: LabKit v2 の Snowplow エミッターはインメモリストレージ（最大 10,000 イベント）を使用します。イベントはプロセスの再起動時に失われます。Artifact Registry の想定されるイベント量では、これは許容できます—イベントはトランザクション記録ではなくアナリティクスデータです。エミッターの Prometheus メトリクスが、オーバーフローやドロップ率を可視化します。

## Alternatives Considered

### Alternative 1: Route All Events Through the Rails Monolith

#### Approach

Artifact Registry は、内部 API を介してすべての使用状況イベントを Rails モノリスに送信します。モノリスは、既存の Rails 統合 Snowplow パイプラインを使用して、レジストリに代わって `track_internal_event()` 呼び出しを発火します。

#### Why Not Chosen

1. **密結合**: トラッキングされるすべてのアクションがモノリスへの API 呼び出しを必要とし、クリティカルパス上でアナリティクスのランタイム依存を生むか、サービス間にバックグラウンドジョブキューを生みます
2. **レイテンシーと可用性のリスク**: モノリスが遅いまたは利用不可の場合、イベントトラッキングが劣化またはブロックします。LabKit のインプロセスエミッターは、トラッキングを外部サービスから切り離します
3. **不要な間接層**: LabKit v2 は、モノリスが内部で使用するのと同じ Snowplow トラッカーを提供しており、仲介者の必要性をなくします
4. **サテライトサービスのカウンターパターン**: 他の Go サービス（AI Gateway、GitLab Language Server）は既に Snowplow イベントを直接発行しています。Rails 経由でルーティングすることは、確立されたパターンからの後退になります

### Alternative 2: OpenTelemetry (OTLP) to ClickHouse

#### Approach

[CI Job Telemetry](/handbook/engineering/architecture/design-documents/ci_job_telemetry/) のパターンに従い、ClickHouse に書き込む OTEL コレクターに OTLP のトレース/メトリクスを発行します。Snowflake の代わりにアナリティクスストアとして ClickHouse を使用します。

#### Why Not Chosen

1. **異なるユースケース**: CI Job Telemetry は、運用パフォーマンスのトレース（ジョブステージのスパンレベルのタイミング）のために OTLP を使用します。Artifact Registry の使用状況データはプロダクトアナリティクス（誰が何をどれだけ使うか、採用傾向）です。これらは、異なるクエリパターンと消費者を持つ異なるドメインです
2. **ClickHouse の可用性**: ClickHouse は、すべてのデプロイタイプでまだ普遍的に利用可能ではありません。Snowplow/Snowflake は確立されたプロダクトアナリティクスインフラです
3. **組織的な整合**: Analytics Instrumentation チームが Snowplow パイプラインと Snowflake ウェアハウスを所有しています。プロダクトアナリティクスの消費者（プロダクトマネージャー、データアナリスト）は Snowflake にクエリします。ClickHouse を使用すると、確立されたワークフローの外で新しいクエリインフラとデータモデルを構築する必要があります
4. **将来の互換性**: ClickHouse が標準のプロダクトアナリティクスストアになった場合、LabKit v2 の Snowplow イベントは、アプリケーションコードを変更せずにパイプラインレベルで再ルーティングできます。この決定は、将来の OTLP 採用と相互排他的ではありません

### Alternative 3: Add Service Ping Integration for Self-Managed Opt-Out Coverage

#### Approach

Snowplow に加えて、Rails モノリスが週次の Service Ping アセンブリ時にクエリして集約メトリクスを収集する内部 API を Artifact Registry に公開します。これにより、Snowplow イベント転送をオプトアウトしたインスタンスについても集約カバレッジを提供できます。

#### Why Not Chosen

1. **カーディナリティの問題**: Service Ping のペイロードはフラットなスカラーメトリクス（週ごと・メトリクスごとに 1 つの数値）に集約されます。Artifact Registry の興味深いディメンション—format、リポジトリの kind（hosted/virtual/remote）、認証方式、organization、upstream type—は、クロス集計すると多数のメトリクスバリアントに爆発します。これを Service Ping でモデル化するには、カーディナリティをフラット化する（分析的価値を失う）か、数百の事前集約メトリクス YAML 定義を登録する（運用負荷）必要があります。Snowplow イベントは、ディメンションがウェアハウス内で各イベントとともに保存されるため、高いカーディナリティを自然に扱えます。
2. **高価な SQL 集約**: Service Ping は、ライブデータベースに対する SQL クエリでメトリクスを計算します。Artifact Registry のテーブル（artifacts、blob references、cache entries）は namespace でパーティション分割され、GitLab.com の規模では数十億行に成長します（[ADR-007](007_database_schema.md)、[ADR-003](003_system_requirements.md)）。週次の Service Ping メトリクスを埋めるための namespace をまたいだ `COUNT`/`SUM` クエリは、サイクルごとに大量のデータをスキャンします—Snowplow が本番データベースに触れることなくウェアハウスから同じ情報を既に提供しているのに、正当化する必要のない高価な操作です。
3. **Redis カウンターインフラの回避**: ライブ SQL の代替は、すべてのアーティファクト操作でインクリメントされ、Service Ping によって読み取られる Redis ベースのカウンターを維持することです。これは、Rails モノリスが HyperLogLog と Redis HLL メトリクスに使用しているパターンです。ここでそれを採用すると、新しい運用上の依存（Redis カウンター、有効期限の処理、Redis フラッシュ時の復旧セマンティクス）と、すべての push/pull のホットパスにおける新しい計測面を追加することになります。Snowplow は同じ計測ポイントでこのデータを既にキャプチャしているため、Redis カウンター層は純粋な重複になります。
4. **サービス間の調整**: YAML メトリクス定義について Rails モノリスチームへの依存を追加します。これは、この ADR で避けようとしているサービス間の結合の一種です。
5. **限定的なギャップ**: Snowplow をオプトアウトする self-managed のお客様は、データを共有しないことを明示的に選択しています。カバレッジのギャップは限定的であり、お客様の意図と整合しています。
6. **閉ざされたわけではない**: このオプションは、プロダクトがオプトアウトインスタンスの集約カバレッジを必要とする場合、フォローアップとして引き続き利用可能です。オプトアウト率に関するデータが得られた時点で、別の ADR がトレードオフを再検討できます。

## Implementation Sequence

1. **Phase 1（コンテキストスキーマの解決）**: [labkit#103](https://gitlab.com/gitlab-org/labkit/-/work_items/103) と関連する議論 [labkit!450](https://gitlab.com/gitlab-org/labkit/-/merge_requests/450) を追跡・貢献し、サテライトサービス向けに LabKit v2 の `TrackEvent` がどのコンテキスト（またはコンテキストの組み合わせ）を添付すべきかを解決します。AR イベントが本番に着地する前に決定に至ることで、後のスキーマ移行を回避できます。普遍的なフィールドは最初のイベントから選択されたコンテキストで送信され、AR 固有の属性は最初から正しく配置されます。
2. **Phase 2（MVP）**: LabKit v2 Snowplow トラッカーを統合します。Phase 1 で選択されたコンテキストを添付して、中核アクション（push、pull、delete、リポジトリ作成）のイベントを発行します。エミッターの Prometheus メトリクスを登録します。コンテキストが設定された状態で、ステージング環境でイベントが Snowflake に到達することを検証します。Phase 2 は Phase 1 に依存します—本番の AR アナリティクスは LabKit のコンテキストサポートとともに出荷され、それより前ではありません。
3. **Phase 3（課金）**: 課金対象アクション（ストレージ消費、アーティファクト転送）に対して `TrackBillingEvent` 呼び出しを計測します。課金イベントは、`organization_id` をファーストクラスのフィールドとする `billable_usage` 1-0-2 スキーマに準拠します。AR namespace ID—[課金設計ドキュメント](https://gitlab.com/gitlab-org/architecture/usage-billing/-/merge_requests/27) によって設定されたメータリング境界—は、`BillingEventOptionalInput` の `entity_id` フィールドを介して運ばれ、カスタムイベントに添付された `ar_namespace_id` と一致するため、アナリティクスと課金のデータがクリーンに結合します。このフェーズは Phase 1 のコンテキスト解決から独立しています。
4. **Phase 4（イテレーション）**: プロダクトアナリティクスのリクエストに基づいてイベントカバレッジを拡張します。仮想リポジトリの使用パターン、ライフサイクルポリシーの有効性、形式別の採用についてのメトリクスを追加します。

## References

- [LabKit v2 Snowplow Tracker](https://gitlab.com/gitlab-org/labkit/-/tree/main/v2/events/snowplow) — サテライトサービスが使用する Go Snowplow クライアント
- [Iglu `custom_event` schema 1-0-0](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/custom_event/jsonschema/1-0-0) — `TrackEvent` ペイロードのスキーマ
- [Iglu `billable_usage` schema 1-0-2](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/billable_usage/jsonschema/1-0-2) — `TrackBillingEvent` ペイロードのスキーマ（`organization_id` を含む）
- [Iglu `gitlab_standard` schema 1-1-8](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/gitlab_standard/jsonschema/1-1-8) — カスタムイベント用の候補コンテキストの 1 つ。再利用かカスタム AR コンテキストかは labkit#103 で決定中
- [labkit#103](https://gitlab.com/gitlab-org/labkit/-/work_items/103) — オープンな作業項目: サテライトサービス向けに LabKit v2 の `TrackEvent` がどのコンテキストスキーマを添付すべきか
- [labkit!450](https://gitlab.com/gitlab-org/labkit/-/merge_requests/450) — `gitlab_standard` 対カスタム AR コンテキストの進行中の議論
- [Usage Billing Design Doc !27](https://gitlab.com/gitlab-org/architecture/usage-billing/-/merge_requests/27) — AR namespace をメータリング境界に設定。アナリティクスイベントは課金データと結合するために `ar_namespace_id` を運ぶ
- [ADR-022: Namespace Decoupling](022_namespace_decoupling.md) — AR namespace を Rails namespace とは異なる slug に紐づくエンティティとして定義
- [Internal Analytics Documentation](https://docs.gitlab.com/ee/development/internal_analytics/) — GitLab のアナリティクス計測ガイド
- [Event Data Collection for Self-Managed and Dedicated](https://docs.gitlab.com/administration/settings/event_data) — self-managed の Snowplow 収集（18.0+）の構成とプライバシーの詳細
- [Customer Product Usage Events FAQ](/handbook/legal/privacy/product-usage-events-faq/) — self-managed イベント収集、オプトアウトの仕組み、17.11→18.0 のロールアウトに関するお客様向け FAQ
- [Customer Product Usage Information](/handbook/legal/privacy/customer-product-usage-information/) — Service Ping、Snowplow、License Sync データ収集のプライバシーおよび法的フレームワーク
- [Internal Events Data Flows](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/technical-blueprint/current-state/internal-events-data-flows/) — デプロイタイプ別のイベント収集のシーケンス図
- [Analytics Instrumentation Infrastructure](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/infrastructure/) — Snowplow と Service Ping のインフラの詳細
- [CI Job Telemetry Design Document](/handbook/engineering/architecture/design-documents/ci_job_telemetry/) — OTLP ベースのテレメトリーアプローチ（検討された代替案）
- [ADR-001: Organizations as Anchor Point](001_organizations_as_anchor_point.md) — Organization スコープのアーキテクチャ
- [ADR-006: Technology Stack](006_technology_stack.md) — Go 言語と LabKit v2 の採用
- [ADR-009: API Design](009_api_design.md) — Management API と Client API の構造
