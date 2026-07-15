---
title: "Artifact Registry ADR 012: 使用状況データ収集"
owning-stage: "~devops::package"
description: "SaaS およびセルフマネージドのデプロイにまたがるプロダクトアナリティクスとビジネスインテリジェンスのために、Artifact Registry が使用状況データを収集する方法に関する決定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/012_usage_data_collection/
upstream_sha: "f469f09c3347a37927c75866af3d2611a5421062"
lastmod: "2026-07-14T09:51:51+01:00"
translated_at: "2026-07-16T06:24:10+09:00"
translator: codex
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## コンテキスト

Artifact Registry は、プロダクトアナリティクス、ビジネスインテリジェンス、課金のために使用状況データの収集を必要とします。使用状況データは、重要な問いに答えます。どのアーティファクトフォーマットが最も採用されているか、何個のアーティファクトがプッシュ/プルされているか、ストレージが時間とともにどう増加するか、何人のユニークユーザーがレジストリを利用しているか、仮想リポジトリのキャッシュヒット率はどうなっているか、といった問いです。

Artifact Registry は、Rails モノリスの外部にデプロイされるスタンドアロンの Go サービスです（[ADR-006](006_technology_stack.md)）。GitLab の主要なインストルメンテーションフレームワークである [Internal Event Tracking](https://docs.gitlab.com/ee/development/internal_analytics/)（Snowplow をバックエンドとする）は、Rails モノリスとの統合を中心に設計されています。サテライトサービスから使用状況データを収集するには、意図的な戦略が必要です。

収集はすべてのデプロイタイプで機能しなければなりません。

- **GitLab.com (SaaS)**: マルチテナントで GitLab が運用するインフラ。アナリティクスパイプラインへのフルアクセスがある
- **Self-Managed**: 顧客がホストするインスタンス。データ収集は顧客のオプトインに依存する
- **GitLab Dedicated**: GitLab が管理するシングルテナントのクラウドインスタンス。データ収集の観点では機能的にセルフマネージドと類似している

### Snowplow を介した Internal Event Tracking

GitLab の主要なインストルメンテーションフレームワークです。イベントは Snowplow コレクターに送信され、仮名化を伴う AWS パイプラインを経由し、データレイクに到達して Snowflake データウェアハウスに取り込まれます。SaaS では常に利用可能で、セルフマネージド/Dedicated では GitLab 18.0 以降で顧客のオプトインにより利用可能です。

Go サテライトサービス向けに、[LabKit v2](https://gitlab.com/gitlab-org/labkit) はネイティブな Snowplow トラッカー（`v2/events/snowplow/`）を提供しており、次の機能があります。

- [`custom_event`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/custom_event/jsonschema/1-0-0) スキーマを使用したカスタム使用状況イベント。型付けされ、スキーマ検証された属性を運ぶために、1 つ以上の自己記述カスタムコンテキストを付加する。
- [`billable_usage`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/billable_usage/jsonschema/1-0-2) スキーマを使用した課金対象の使用状況イベント。このスキーマには `organization_id`、`realm`、`deployment_type`、`quantity`、`unit_of_measure` のファーストクラスフィールドがある。
- 自動リトライと FIFO キュー管理を備えた非同期バッチ送信
- エミッターの可観測性のための組み込み Prometheus メトリクス
- インメモリのイベントストレージ（10,000 イベントの容量）とオーバーフロー保護

これは他のサテライトサービス（AI Gateway、GitLab Language Server）でも使用されているのと同じメカニズムであり、Go サービスにとって組織として推奨されるパスです。

### カスタムイベントのコンテキストスキーマ

すべての AR カスタムイベントは、スコープごとに層を成す 2 つのコンテキストを付加します。

- **[`gitlab_standard/1-1-8`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/gitlab_standard/jsonschema/1-1-8)** — 共通の ID および環境フィールド（`environment`、`realm`、`instance_id`、`deployment_type`、`organization_id`、`user_id`）。AR イベントをモノリスイベントと同じウェアハウスの列に格納し、プロダクト横断の分析を可能にする。
- **[`artifact_registry_context/1-0-0`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/artifact_registry_context/jsonschema/1-0-0)** — AR 固有のディメンション: `ar_instance_version`（必須）、`ar_namespace_id`（ネームスペース UUID）と `ar_namespace_slug`、`format`、`repository_kind`（`hosted`/`virtual`/`remote`）、`repository_id`（リポジトリ UUID）と `repository_name`、`cache_hit`、`upstream_type`（`hosted`/`remote`）。ネームスペースとリポジトリは、それぞれ UUID と人が読める識別子を保持する。UUID は安定した結合キーであり、ネームスペース UUID は AR ネームスペースの粒度における課金の結合キーでもある。これは、スラッグは顧客にとって不変であるものの、管理上の再取得（スクワッティング紛争、法的請求）によって変更される可能性があるためである。

イベント固有の単発フィールド（例: `auth_method`、`deletion_type`、`artifacts_removed_count`）は、いずれのコンテキストでもなく、イベント自身の `custom_event` ペイロードに入れます。

## 決定

**Artifact Registry は、LabKit v2 Snowplow トラッカーを唯一の使用状況データ収集メカニズムとして使用します。** イベントは Go サービスから Snowplow コレクターのエンドポイントに直接送出されます。アナリティクスのデータフローに Rails モノリスとの統合は不要です。

これは、MVP に対してイベントレベルのプロダクトアナリティクスを提供する最もシンプルなパスです。他の Go サテライトサービス（AI Gateway、GitLab Language Server）ですでに採用されているアプローチを踏襲しています。集計メトリクスの収集（例: Service Ping 経由）は意図的にスコープ外としています。Snowplow をオプトアウトするセルフマネージドインスタンスに対する将来的なニーズが生じた場合は、フォローアップの ADR で対応できます。

### LabKit v2 Snowplow を介したイベントレベルのトラッキング

**何を追跡するか**（初期セット。イテレーションで拡張する）。すべてのイベントは、カスタムコンテキストとして `gitlab_standard/1-1-8` と `artifact_registry_context/1-0-0` の両方を運びます。共通フィールド（`organization_id`、`realm`、`deployment_type`、`instance_id`、`environment`、`user_id`）は `gitlab_standard` に由来するため、以下では再掲しません。イベント固有の単発フィールドは、イベント自身の `custom_event` ペイロードに入れます。

| イベント | `artifact_registry_context` フィールド | イベントペイロード（単発）フィールド |
|---|---|---|
| `artifact_registry_artifact_pushed` | `format`、`repository_kind=hosted`、`repository_id`、`ar_namespace_id` | `auth_method` |
| `artifact_registry_artifact_pulled` | `format`、`repository_kind`（`hosted`/`virtual`）、`repository_id`、`ar_namespace_id`、`cache_hit`（virtual のみ） | `auth_method` |
| `artifact_registry_artifact_deleted` | `format`、`repository_kind`、`repository_id`、`ar_namespace_id` | `deletion_type`（`manual`/`lifecycle_policy`） |
| `artifact_registry_repository_created` | `format`、`repository_kind`、`repository_id`、`ar_namespace_id` | — |
| `artifact_registry_repository_deleted` | `format`、`repository_kind`、`repository_id`、`ar_namespace_id` | — |
| `artifact_registry_virtual_cache_miss` | `format`、`repository_kind=virtual`、`repository_id`、`ar_namespace_id`、`upstream_type`（`hosted`/`remote`） | — |
| `artifact_registry_lifecycle_policy_executed` | `format`、`repository_kind`、`repository_id`、`ar_namespace_id` | `artifacts_removed_count` |

AR ネームスペースは [ADR-022](022_namespace_decoupling.md) のスラッグアンカーされたエンティティであり、1 つの Organization が複数の AR ネームスペースを所有できます。[課金設計ドキュメント](https://gitlab.com/gitlab-org/architecture/usage-billing/-/merge_requests/27) は計量境界を AR ネームスペースに設定しているため、イベントは（`artifact_registry_context` 内の）`ar_namespace_id` を運び、同じ粒度で課金データときれいに結合します。（`gitlab_standard` 内の）`organization_id` は、ネームスペース横断のロールアップをサポートします。

**設定**: Snowplow コレクターのエンドポイントはサービス構成ファイルで提供されます。SaaS ではこれは `snowplowprd.trx.gitlab.net` を指します。オプトインしたセルフマネージドおよび Dedicated インスタンスでは、同じコレクターを指すように設定されます。オプトアウトしたインスタンスでは、エミッターは無効化されます（イベントは送信されません）。

**カバレッジ**: SaaS（常時）、セルフマネージドおよび Dedicated（顧客のオプトインによる。デフォルトはオプトアウト）。

**データの宛先**: イベントは標準的な Snowplow パイプライン（コレクター、エンリッチャー、仮名化、S3）を経由して Snowflake データウェアハウスに流れます。カスタムなパイプラインインフラは不要です。

### 運用メトリクス（非プロダクト）

Artifact Registry はすでに、Prometheus メトリクス（リクエストレイテンシ、エラー率、コネクションプールの統計）に LabKit v2 を使用しています。これらはインフラのダッシュボードやアラートで消費される運用メトリクスであり、プロダクトアナリティクスではありません。完全を期すためにここで触れていますが、使用状況データ収集の決定の一部ではありません。

LabKit の Snowplow エミッター自体が Prometheus メトリクス（エンキュー数、送信成功/失敗、バッチ配信時間、キュー深度）を公開しており、イベントパイプラインの健全性に対する運用上の可視性のために登録すべきです。

## 結果

### ポジティブ

1. **初日からの完全な SaaS カバレッジ**: LabKit v2 の Snowplow トラッカーは本番で実証済みであり、追加のインフラなしにイベントレベルの粒度を提供する
2. **シンプルで単一パスのインストルメンテーション**: 1 つのメカニズム、1 つのコードパス。アナリティクスのデータフローのために Rails モノリスと調整する必要がない
3. **Organization スコープのコンテキスト**: 課金イベントのペイロードに `organization_id` が含まれ、Artifact Registry の Organization アンカーアーキテクチャに整合する（[ADR-001](001_organizations_as_anchor_point.md)）
4. **デフォルトでのプライバシー**: イベントは GitLab の既存の仮名化パイプライン（HMAC-SHA256）を経由し、追加のプライバシーエンジニアリングは不要
5. **カスタムインフラ不要**: 既存の Snowplow パイプラインと Snowflake ウェアハウスを使用する
6. **課金対応**: LabKit v2 の課金トラッカーが、realm、unit of measure、quantity のフィールドとともに、Artifact Registry SKU の使用量ベース課金への直接的なパスを提供する
7. **サテライトサービスの前例に整合**: AI Gateway と GitLab Language Server はすでに LabKit v2 Snowplow を直接使用している。Artifact Registry も同じパターンに従う。

### ネガティブ

1. **LabKit v2 と iglu の最低バージョン依存**: カスタムイベントにカスタムコンテキストを送出するには、それをサポートする LabKit v2 リリースが必要であり、また `artifact_registry_context` スキーマが Snowplow エンリッチメントパイプラインにデプロイされてから、それを使用する AR イベントが検証を通過する。
2. **Snowplow オプトアウトインスタンスからのデータなし**: Snowplow 転送をオプトアウトするセルフマネージドおよび Dedicated インスタンスは、使用状況データを一切提供しない。これは顧客の明示的なオプトアウトを踏まえれば、MVP では許容できる。オプトアウトインスタンスの集計カバレッジがプロダクト要件となった場合は、フォローアップの ADR で Service Ping 統合を追加できる。
3. **インメモリイベントバッファのリスク**: LabKit v2 の Snowplow エミッターはインメモリストレージ（最大 10,000 イベント）を使用する。プロセス再起動時にイベントは失われる。Artifact Registry の想定イベント量では、これは許容できる。イベントはアナリティクスデータであり、トランザクションレコードではない。エミッターの Prometheus メトリクスが、オーバーフローやドロップ率の可視性を提供する。

## 検討した代替案

### 代替案 1: すべてのイベントを Rails モノリス経由でルーティング

#### アプローチ

Artifact Registry が、内部 API を介してすべての使用状況イベントを Rails モノリスに送信します。モノリスはその後、既存の Rails 統合された Snowplow パイプラインを使用して、レジストリに代わって `track_internal_event()` 呼び出しを発火します。

#### 選択しなかった理由

1. **密結合**: 追跡されるすべてのアクションがモノリスへの API 呼び出しを必要とし、クリティカルパス上にアナリティクスのランタイム依存性を生むか、またはサービス間にバックグラウンドジョブキューを生む
2. **レイテンシと可用性のリスク**: モノリスが遅いか利用不可の場合、イベント追跡が劣化またはブロックする。LabKit のインプロセスエミッターは、追跡を外部サービスから切り離す
3. **不要な間接参照**: LabKit v2 は、モノリスが内部的に使用するのと同じ Snowplow トラッカーを提供しており、仲介者の必要性をなくす
4. **サテライトサービスのアンチパターン**: 他の Go サービス（AI Gateway、GitLab Language Server）はすでに Snowplow イベントを直接送出している。Rails 経由のルーティングは、確立されたパターンからの後退になる

### 代替案 2: ClickHouse への OpenTelemetry (OTLP)

#### アプローチ

[CI Job Telemetry](/handbook/engineering/architecture/design-documents/ci_job_telemetry/) パターンに従い、ClickHouse に書き込む OTEL Collector に OTLP トレース/メトリクスを送出します。アナリティクスストアとして Snowflake の代わりに ClickHouse を使用します。

#### 選択しなかった理由

1. **異なるユースケース**: CI Job Telemetry は、運用パフォーマンストレース（ジョブステージのスパンレベルのタイミング）に OTLP を使用する。Artifact Registry の使用状況データはプロダクトアナリティクス（誰が何をどれだけ使うか、採用トレンド）である。これらはクエリパターンも消費者も異なる別のドメインである
2. **ClickHouse の可用性**: ClickHouse はまだすべてのデプロイタイプで広く利用できるわけではない。Snowplow/Snowflake は確立されたプロダクトアナリティクスインフラである
3. **組織的な整合性**: Analytics Instrumentation チームが Snowplow パイプラインと Snowflake ウェアハウスを所有している。プロダクトアナリティクスの消費者（プロダクトマネージャー、データアナリスト）は Snowflake にクエリする。ClickHouse を使用すると、確立されたワークフローの外に新しいクエリインフラとデータモデルを構築する必要が生じる
4. **将来の互換性**: ClickHouse が標準のプロダクトアナリティクスストアになった場合、LabKit v2 の Snowplow イベントは、アプリケーションコードを変更することなくパイプラインレベルで再ルーティングできる。この決定は将来の OTLP 採用と相互排他的ではない

### 代替案 3: セルフマネージドオプトアウトカバレッジのために Service Ping 統合を追加

#### アプローチ

Snowplow に加えて、Rails モノリスが毎週の Service Ping 組み立て時にクエリして集計メトリクスを収集する内部 API を Artifact Registry に公開します。これにより、Snowplow イベント転送をオプトアウトしたインスタンスに対しても、集計カバレッジが提供されます。

#### 選択しなかった理由

1. **カーディナリティの問題**: Service Ping のペイロードは、フラットなスカラーメトリクス（メトリクスごと、週ごとに 1 つの数値）に集計される。Artifact Registry の興味深いディメンション（フォーマット、リポジトリの種類（hosted/virtual/remote）、認証方法、Organization、上流の種類）は、クロス集計するとメトリクスのバリエーションが膨大に膨れ上がる。これを Service Ping でモデル化するには、カーディナリティをフラット化する（分析的価値を失う）か、数百の事前集計されたメトリクス YAML 定義を登録する（運用負担）かのいずれかが必要になる。Snowplow イベントは、ディメンションが各イベントとともにウェアハウスに格納されるため、高いカーディナリティを自然に扱える。
2. **高価な SQL 集計**: Service Ping は、ライブデータベースに対する SQL クエリでメトリクスを計算する。Artifact Registry のテーブル（アーティファクト、blob 参照、キャッシュエントリ）はネームスペースでパーティション分割され、GitLab.com スケールでは数十億行に成長する（[ADR-007](007_database_schema.md)、[ADR-003](003_system_requirements.md)）。毎週の Service Ping メトリクスを埋めるためのネームスペース横断の `COUNT`/`SUM` クエリは、サイクルごとに大量のデータをスキャンする。Snowplow がすでに本番データベースに触れることなくウェアハウスから同じ情報を提供するのに、正当化する必要のない高価な操作である。
3. **Redis カウンターインフラの回避**: ライブ SQL の代替は、すべてのアーティファクト操作でインクリメントされ Service Ping が読み取る Redis ベースのカウンターを維持することである。これは Rails モノリスが HyperLogLog や Redis HLL メトリクスに使用するパターンである。ここでこれを採用すると、新しい運用依存性（Redis カウンター、有効期限処理、Redis フラッシュ時の復旧セマンティクス）と、すべてのプッシュ/プルのホットパスにおける新しいインストルメンテーション面が追加される。Snowplow はすでに同じインストルメンテーションポイントでこのデータを捕捉するため、Redis カウンター層は純粋な重複になる。
4. **サービス間の調整**: YAML メトリクス定義のために Rails モノリスチームへの依存性を追加する。これは、この ADR で回避しようとしているサービス間結合の一種である。
5. **限定的なギャップ**: Snowplow をオプトアウトするセルフマネージド顧客は、データを共有しないことを明示的に選択している。カバレッジのギャップは限定的であり、顧客の意図に整合している。
6. **将来の選択肢を閉ざさない**: このオプションは、プロダクトがオプトアウトインスタンスの集計カバレッジを必要とする場合のフォローアップとして利用可能なまま残る。オプトアウト率に関するデータが得られた時点で、別の ADR がトレードオフを再検討できる。

## 実装シーケンス

1. **Phase 1 (MVP)**: LabKit v2 Snowplow トラッカーを統合する。`gitlab_standard` と `artifact_registry_context` を付加して、コアアクション（プッシュ、プル、削除、リポジトリ作成）のイベントを送出する。エミッターの Prometheus メトリクスを登録する。ステージングで両方のコンテキストが入った状態で、イベントが Snowflake に到着することを検証する。
2. **Phase 2 (課金)**: 課金対象のアクション（ストレージ消費、アーティファクト転送）の課金イベントを `billable_usage/1-0-2` スキーマに準拠して送出する。AR ネームスペース ID（[課金設計ドキュメント](https://gitlab.com/gitlab-org/architecture/usage-billing/-/merge_requests/27) が設定する計量境界）は、スキーマの `entity_id` フィールドで運ばれ、カスタムイベント上の `ar_namespace_id` と一致するため、アナリティクスと課金データがきれいに結合する。Phase 1 とは独立。
3. **Phase 3 (イテレーション)**: プロダクトアナリティクスの要求に基づいてイベントカバレッジを拡張する（仮想リポジトリの使用パターン、ライフサイクルポリシーの有効性、フォーマット固有の採用）。繰り返し現れる AR 固有のディメンションがファーストクラスのウェアハウス列に値する場合は、`artifact_registry_context` を拡張する（新しいマイナーバージョン）。

## 参考資料

- [LabKit v2 Snowplow Tracker](https://gitlab.com/gitlab-org/labkit/-/tree/main/v2/events/snowplow) — サテライトサービスで使用される Go Snowplow クライアント
- [Iglu `custom_event` schema 1-0-0](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/custom_event/jsonschema/1-0-0) — カスタムイベントペイロードのスキーマ
- [Iglu `billable_usage` schema 1-0-2](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/billable_usage/jsonschema/1-0-2) — 課金対象使用状況イベントペイロードのスキーマ（`organization_id` を含む）
- [Iglu `gitlab_standard` schema 1-1-8](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/gitlab_standard/jsonschema/1-1-8) — AR カスタムイベントに付加される共通の ID/環境コンテキスト
- [Iglu `artifact_registry_context` schema 1-0-0](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/artifact_registry_context/jsonschema/1-0-0) — AR 固有のコンテキストスキーマ（[iglu!190](https://gitlab.com/gitlab-org/iglu/-/merge_requests/190) でマージ）
- [labkit!498](https://gitlab.com/gitlab-org/labkit/-/merge_requests/498) — LabKit v2 の Snowplow トラッカーにカスタムコンテキストサポートを追加
- [labkit#103](https://gitlab.com/gitlab-org/labkit/-/work_items/103) — LabKit v2 のカスタムコンテキストサポートの追跡 work item（labkit!498 で解決）
- [Usage Billing Design Doc !27](https://gitlab.com/gitlab-org/architecture/usage-billing/-/merge_requests/27) — AR ネームスペースを計量境界に設定する。アナリティクスイベントは課金データと結合するために `ar_namespace_id` を運ぶ
- [ADR-022: Namespace Decoupling](022_namespace_decoupling.md) — AR ネームスペースを Rails ネームスペースとは異なるスラッグアンカーされたエンティティとして定義する
- [Internal Analytics Documentation](https://docs.gitlab.com/ee/development/internal_analytics/) — GitLab のアナリティクスインストルメンテーションガイド
- [Event Data Collection for Self-Managed and Dedicated](https://docs.gitlab.com/administration/settings/event_data) — セルフマネージドの Snowplow 収集に関する設定とプライバシーの詳細（18.0 以降）
- [Customer Product Usage Events FAQ](/handbook/legal/privacy/product-usage-events-faq/) — セルフマネージドのイベント収集、オプトアウトの仕組み、17.11→18.0 のロールアウトに関する顧客向け FAQ
- [Customer Product Usage Information](/handbook/legal/privacy/customer-product-usage-information/) — Service Ping、Snowplow、License Sync のデータ収集に関するプライバシーおよび法的フレームワーク
- [Internal Events Data Flows](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/technical-blueprint/current-state/internal-events-data-flows/) — デプロイタイプ横断のイベント収集のシーケンス図
- [Analytics Instrumentation Infrastructure](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/infrastructure/) — Snowplow と Service Ping のインフラの詳細
- [CI Job Telemetry Design Document](/handbook/engineering/architecture/design-documents/ci_job_telemetry/) — OTLP ベースのテレメトリアプローチ（検討した代替案）
- [ADR-001: Organizations as Anchor Point](001_organizations_as_anchor_point.md) — Organization スコープのアーキテクチャ
- [ADR-006: Technology Stack](006_technology_stack.md) — Go 言語と LabKit v2 の採用
- [ADR-009: API Design](009_api_design.md) — Management API と Client API の構造
