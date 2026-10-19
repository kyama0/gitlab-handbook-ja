---
title: "Artifact Registry ADR 012: 使用状況データ収集"
owning-stage: "~devops::package"
description: "SaaS および Self-Managed のデプロイにまたがるプロダクトアナリティクスとビジネスインテリジェンスのために、Artifact Registry が使用状況データを収集する方法に関する決定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/012_usage_data_collection/
upstream_sha: dae94b0752e749cce0ad81e818ba66cae5ba4a11
lastmod: "2026-10-16T15:13:41+02:00"
translated_at: "2026-10-19T10:12:40Z"
translator: codex
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## コンテキスト {#context}

Artifact Registry は、プロダクトアナリティクス、ビジネスインテリジェンス、課金のために使用状況データの収集を必要とします。使用状況データは、重要な問いに答えます。どのアーティファクトフォーマットが最も採用されているか、何個のアーティファクトがプッシュ/プルされているか、ストレージが時間とともにどう増加するか、何人のユニークユーザーがレジストリを利用しているか、仮想リポジトリのキャッシュヒット率はどうなっているか、といった問いです。

Artifact Registry は、Rails モノリスの外部にデプロイされるスタンドアロンの Go サービスです（[ADR-006](006_technology_stack.md)）。GitLab の主要なインストルメンテーションフレームワークの [Internal Event Tracking](https://docs.gitlab.com/ee/development/internal_analytics/)（Snowplow をバックエンドとする）は、Rails モノリスとの統合を中心に設計されています。サテライトサービスから使用状況データを収集するには、意図的な戦略が必要です。

収集はすべてのデプロイタイプで機能しなければなりません。

- **GitLab.com (SaaS)**: マルチテナントで GitLab が運用するインフラ。アナリティクスパイプラインへのフルアクセスがあります
- **Self-Managed**: 顧客がホストするインスタンス。データ収集は顧客のオプトインに依存します
- **GitLab Dedicated**: GitLab が管理するシングルテナントのクラウドインスタンス。データ収集の観点では機能的に Self-Managed と類似しています

### Snowplow を介した Internal Event Tracking {#internal-event-tracking-via-snowplow}

GitLab の主要なインストルメンテーションフレームワークです。イベントは Snowplow コレクターに送信され、仮名化を伴う AWS パイプラインを経由し、データレイクに到達して Snowflake データウェアハウスに取り込まれます。SaaS では常に利用可能で、Self-Managed/Dedicated では GitLab 18.0 以降で顧客のオプトインにより利用可能です。

Go サテライトサービス向けに、[LabKit v2](https://gitlab.com/gitlab-org/labkit)はネイティブな Snowplow トラッカー（`v2/events/snowplow/`）を提供しており、次の機能があります。

- [`custom_event`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/custom_event/jsonschema) スキーマを使用したカスタム使用状況イベント。型付けされ、スキーマ検証された属性を運ぶために、1 つ以上の自己記述カスタムコンテキストを付加します。
- [`billable_usage`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/billable_usage/jsonschema) スキーマを使用した課金対象の使用状況イベント。このスキーマのファーストクラスフィールドには、課金キー（`billing_entity_type` と `billing_entity_id` のペア、`root_namespace_id`、`unique_instance_id`）、`realm`、`deployment_type`、`quantity`、`unit_of_measure` が含まれ、さらにスキーマがモデル化していないディメンション用の自由形式の `metadata` オブジェクトがあります。
- 自動リトライと FIFO キュー管理を備えた非同期バッチ送信
- エミッターの可観測性のための組み込み Prometheus メトリクス
- インメモリのイベントストレージ（10,000 イベントの容量）とオーバーフロー保護

これは他のサテライトサービス（AI Gateway、GitLab Language Server）でも使用されているのと同じメカニズムであり、Go サービスにとって組織として推奨されるパスです。

### カスタムイベントのコンテキストスキーマ {#context-schemas-for-custom-events}

すべての AR カスタムイベントは、スコープごとに層を成す 2 つのコンテキストを付加します。

- **[`gitlab_standard`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/gitlab_standard/jsonschema)** — 共通の ID および環境フィールド（`environment`、`realm`、`instance_id`、`deployment_type`、`organization_uuid`、`user_id`）。Artifact Registry は Organization の UUID のみを保存するため（[ADR-022](022_namespace_decoupling.md)）、`organization_uuid` を設定し、数値の `organization_id` は決して設定しません。AR イベントをモノリスイベントと同じウェアハウスの列に格納し、プロダクト横断の分析を可能にします。
- **[`artifact_registry_context`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/artifact_registry_context/jsonschema)** — AR 固有のディメンション: `ar_instance_version`（必須）、`ar_namespace_id`（ネームスペース UUID）と `ar_namespace_slug`、`format`、`repository_kind`（`hosted`/`virtual`/`remote`）、`repository_id`（リポジトリ UUID）と `repository_name`、`cache_hit`、`upstream_type`（`hosted`/`remote`）。ネームスペースとリポジトリは、それぞれ UUID と人が読める識別子を保持します。UUID はアナリティクス用の安定した結合キーです。これは、スラッグは顧客にとって不変であるものの、管理上の再取得（スクワッティング紛争、法的請求）によって変更される可能性があるためです。

イベント固有の単発フィールド（例: `auth_method`、`deletion_type`、`artifacts_removed_count`）は、いずれのコンテキストでもなく、イベント自身の `custom_event` ペイロードに入れます。

## 決定 {#decision}

**Artifact Registry は、LabKit v2 Snowplow トラッカーを唯一の使用状況データ収集メカニズムとして使用します。** イベントは Go サービスから Snowplow コレクターのエンドポイントに直接送出されます。アナリティクスのデータフローに Rails モノリスとの統合は不要です。

これは、MVP に対してイベントレベルのプロダクトアナリティクスを提供する最もシンプルなパスです。他の Go サテライトサービス（AI Gateway、GitLab Language Server）ですでに採用されているアプローチを踏襲しています。集計メトリクスの収集（例: Service Ping 経由）は意図的にスコープ外としています。Snowplow をオプトアウトする Self-Managed インスタンスに対する将来的なニーズが生じた場合は、フォローアップの ADR で対応できます。

### LabKit v2 Snowplow を介したイベントレベルのトラッキング {#event-level-tracking-via-labkit-v2-snowplow}

**何を追跡するか**（初期セット。イテレーションで拡張する）。すべてのイベントは、カスタムコンテキストとして `gitlab_standard` と `artifact_registry_context` の両方を運びます。共通フィールド（`organization_uuid`、`realm`、`deployment_type`、`instance_id`、`environment`、`user_id`）は `gitlab_standard` に由来するため、以下では再掲しません。

| イベント | `artifact_registry_context` フィールド | イベントペイロード（単発）フィールド |
| --- | --- | --- |
| `artifact_registry_artifact_pushed` | `format`、`repository_kind=hosted`、`repository_id`、`ar_namespace_id` | `auth_method` |
| `artifact_registry_artifact_pulled` | `format`、`repository_kind`（`hosted`/`virtual`）、`repository_id`、`ar_namespace_id`、`cache_hit`（仮想リポジトリのみ） | `auth_method`、`delivery_mode`（`proxy`/`redirect`） |
| `artifact_registry_artifact_deleted` | `format`、`repository_kind`、`repository_id`、`ar_namespace_id` | `deletion_type`（`manual`/`lifecycle_policy`） |
| `artifact_registry_namespace_created` | `ar_namespace_id` | — |
| `artifact_registry_repository_created` | `format`、`repository_kind`、`repository_id`、`ar_namespace_id` | — |
| `artifact_registry_repository_deleted` | `format`、`repository_kind`、`repository_id`、`ar_namespace_id` | — |
| `artifact_registry_virtual_cache_miss` | `format`、`repository_kind=virtual`、`repository_id`、`ar_namespace_id`、`upstream_type`（`hosted`/`remote`） | — |
| `artifact_registry_lifecycle_policy_executed` | `format`、`repository_kind`、`repository_id`、`ar_namespace_id` | `artifacts_removed_count` |

#### pull イベントが発火するタイミング {#when-a-pull-event-fires}

上のカタログはディメンションを示しますが、タイミングは示しません。レスポンスのステータスがコミットされた後に失敗する可能性があるため、「ダウンロード成功」は曖昧です。各フォーマットのスライスはその曖昧さを独自に解決していたため、読み取り結果が分岐していました。ルールは、**各配信モードが観測できる最も強いシグナルを報告する**ことです。

[ADR-005](005_artifact_delivery_mode.md)は 2 つのモードを定義します。モードはインスタンスレベルのデフォルトであり、常に利用可能な ネームスペースごとのオーバーライドがあるため、同じアーティファクトでも、提供するネームスペースに応じていずれのルールでもカウントされ得ます。イベントは設定値ではなく、レスポンスが実際にどのように配信されたかを記録します。

1. **プロキシモード**： サービスがバイトをストリーミングするため、配信が完了したかを把握できます。ペイロードのコピーが正常に完了した後にのみイベントが発火します。レスポンスステータスのコミット後にクライアントの接続が切断された場合やストレージ読み取り障害が起きた場合、部分転送はダウンロードではないため何も発行しません。
1. **リダイレクトモード**： サービスはクライアントに署名付きストレージまたは CDN URL を渡し、転送を確認しません。サービスがリダイレクトを発行した時点でイベントが発火します。それが唯一観測可能なタイミングであり、プロダクトの使用状況として 1 回の pull としてカウントします。

プロキシモードをリダイレクトのルールまで下げると、サービスが保持している配信シグナルを捨てることになります。一方、リダイレクトモードをプロキシのルールまで上げることは不可能です。

したがって、2 つのモードは異なる信頼度を持ちます。リダイレクトモードの pull は過大計上する可能性があります（クライアントがリダイレクトに従わない場合があります）。また、過小計上する可能性もあります（1 つの署名付き URL が TTL 内に複数の転送を提供でき、CDN が 1 回のオリジンフェッチから多くのクライアントに提供できるためです）。上のカタログに従い、イベントペイロードはモードを運ぶため、分析で両者を分離できます。両者を合計すると信頼度の水準が混ざります。特に請求対象の数量はリダイレクトモードのイベントに依拠できず、ストレージまたは CDN のアクセスログが必要です。

AR ネームスペースは [ADR-022](022_namespace_decoupling.md)のスラッグをアンカーとするエンティティであり、1 つの Organization が複数の AR ネームスペースを所有できます。[課金設計ドキュメント](https://gitlab.com/gitlab-org/architecture/usage-billing/design-doc/-/merge_requests/27)は計量境界を AR ネームスペースに設定しています。課金対象イベントの `ar_namespace_id` は `billable_usage.metadata` に、アナリティクスイベントでは `artifact_registry_context` に含まれるため、両方のデータセットを同じ粒度で集計できます。`organization_uuid`（`gitlab_standard` 内）は、ネームスペース横断のロールアップをサポートします。

**設定**： Snowplow コレクターのエンドポイントはサービス構成ファイルで提供されます。SaaS ではこれは `snowplowprd.trx.gitlab.net` を指します。オプトインした Self-Managed および Dedicated インスタンスでは、同じコレクターを指すように設定されます。オプトアウトしたインスタンスでは、エミッターは無効化されます（イベントは送信されません）。

**カバレッジ**： SaaS（常時）、Self-Managed および Dedicated（顧客のオプトインによる。デフォルトはオプトアウト）。

**データの宛先**： イベントは標準的な Snowplow パイプライン（コレクター、エンリッチャー、仮名化、S3）を経由して Snowflake データウェアハウスに流れます。カスタムなパイプラインインフラは不要です。

### 運用メトリクス（非プロダクト） {#operational-metrics-non-product}

Artifact Registry はすでに、Prometheus メトリクス（リクエストレイテンシ、エラー率、コネクションプールの統計）に LabKit v2 を使用しています。これらはインフラのダッシュボードやアラートで消費される運用メトリクスであり、プロダクトアナリティクスではありません。完全を期すためにここで触れていますが、使用状況データ収集の決定の一部ではありません。

LabKit の Snowplow エミッター自体が Prometheus メトリクス（エンキュー数、送信成功/失敗、バッチ配信時間、キュー深度）を公開しており、イベントパイプラインの健全性に対する運用上の可視性のために登録すべきです。

## 結果 {#consequences}

### ポジティブ {#positive}

1. **初日からの完全な SaaS カバレッジ**： LabKit v2 の Snowplow トラッカーは本番で実証済みであり、追加のインフラなしにイベントレベルの粒度を提供します
2. **シンプルで単一パスのインストルメンテーション**： 1 つのメカニズム、1 つのコードパス。アナリティクスのデータフローのために Rails モノリスと調整する必要がありません
3. **Organization スコープのコンテキスト**： すべてのイベントが `gitlab_standard.organization_uuid` を運び、Organization アンカーアーキテクチャに整合します（[ADR-001](001_organizations_as_anchor_point.md)）。サービスは UUID のみを保存するため、数値の `organization_id` フィールドは設定されません。課金の結合キーには、`billing_entity_type`／`billing_entity_id` のペア（SaaS。ネームスペースの課金アンカーから取得。[ADR-007](007_database_schema.md)）と `unique_instance_id`（Self-Managed および Dedicated）を使用します
4. **デフォルトでのプライバシー**： イベントは GitLab の既存の仮名化パイプライン（HMAC-SHA256）を経由し、追加のプライバシーエンジニアリングは不要です
5. **カスタムインフラ不要**： 既存の Snowplow パイプラインと Snowflake ウェアハウスを使用します
6. **課金対応**： LabKit v2 の課金トラッカーが、realm、測定単位、数量のフィールドとともに、Artifact Registry SKU の使用量ベース課金への直接的なパスを提供します
7. **サテライトサービスの前例に整合**： AI Gateway と GitLab Language Server はすでに LabKit v2 Snowplow を直接使用しています。Artifact Registry も同じパターンに従う。

### ネガティブ {#negative}

1. **LabKit v2 と iglu の最低バージョン依存**： カスタムイベントにカスタムコンテキストを送出するには、それをサポートする LabKit v2 リリースが必要であり、また `artifact_registry_context` スキーマが Snowplow エンリッチメントパイプラインにデプロイされてから、それを使用する AR イベントが検証を通過します。
2. **Snowplow オプトアウトインスタンスからのデータなし**： Snowplow 転送をオプトアウトする Self-Managed および Dedicated インスタンスは、使用状況データを一切提供しません。これは顧客の明示的なオプトアウトを踏まえれば、MVP では許容できます。オプトアウトインスタンスの集計カバレッジがプロダクト要件となった場合は、フォローアップの ADR で Service Ping 統合を追加できます。
3. **インメモリイベントバッファのリスク**： LabKit v2 の Snowplow エミッターはインメモリストレージ（最大 10,000 イベント）を使用します。プロセス再起動時にイベントは失われます。Artifact Registry の想定イベント量では、これは許容できます。イベントはアナリティクスデータであり、トランザクションレコードではありません。エミッターの Prometheus メトリクスが、オーバーフローやドロップ率の可視性を提供します。

## 検討した代替案 {#alternatives-considered}

### 代替案 1: すべてのイベントを Rails モノリス経由でルーティング {#alternative-1-route-all-events-through-the-rails-monolith}

#### アプローチ {#approach}

Artifact Registry が、内部 API を介してすべての使用状況イベントを Rails モノリスに送信します。モノリスはその後、既存の Rails 統合された Snowplow パイプラインを使用して、レジストリに代わって `track_internal_event()` 呼び出しを発火します。

#### 選択しなかった理由 {#why-not-chosen}

1. **密結合**： 追跡されるすべてのアクションがモノリスへの API 呼び出しを必要とし、クリティカルパス上にアナリティクスのランタイム依存性を生むか、またはサービス間にバックグラウンドジョブキューを生みます
2. **レイテンシと可用性のリスク**： モノリスが遅いか利用不可の場合、イベント追跡が劣化またはブロックします。LabKit のインプロセスエミッターは、追跡を外部サービスから切り離す
3. **不要な間接参照**： LabKit v2 は、モノリスが内部的に使用するのと同じ Snowplow トラッカーを提供しており、仲介者の必要性をなくす
4. **サテライトサービスのアンチパターン**： 他の Go サービス（AI Gateway、GitLab Language Server）はすでに Snowplow イベントを直接送出しています。Rails 経由のルーティングは、確立されたパターンからの後退になります

### 代替案 2: ClickHouse への OpenTelemetry (OTLP) {#alternative-2-opentelemetry-otlp-to-clickhouse}

#### アプローチ {#approach-1}

[CI Job Telemetry](/handbook/engineering/architecture/design-documents/ci_job_telemetry/) パターンに従い、ClickHouse に書き込む OTEL Collector に OTLP トレース/メトリクスを送出します。アナリティクスストアとして Snowflake の代わりに ClickHouse を使用します。

#### 選択しなかった理由 {#why-not-chosen-1}

1. **異なるユースケース**： CI Job Telemetry は、運用パフォーマンストレース（ジョブステージのスパンレベルのタイミング）に OTLP を使用します。Artifact Registry の使用状況データはプロダクトアナリティクス（誰が何をどれだけ使うか、採用トレンド）です。これらはクエリパターンも消費者も異なる別のドメインです
2. **ClickHouse の可用性**： ClickHouse はまだすべてのデプロイタイプで広く利用できるわけではありません。Snowplow/Snowflake は確立されたプロダクトアナリティクスインフラです
3. **組織的な整合性**： Analytics Instrumentation チームが Snowplow パイプラインと Snowflake ウェアハウスを所有しています。プロダクトアナリティクスの消費者（Product Manager、Data Analyst）は Snowflake にクエリします。ClickHouse を使用すると、確立されたワークフローの外に新しいクエリインフラとデータモデルを構築する必要が生じる
4. **将来の互換性**： ClickHouse が標準のプロダクトアナリティクスストアになった場合、LabKit v2 の Snowplow イベントは、アプリケーションコードを変更することなくパイプラインレベルで再ルーティングできます。この決定は将来の OTLP 採用と相互排他的ではない

### 代替案 3: Self-Managed オプトアウトカバレッジのために Service Ping 統合を追加 {#alternative-3-add-service-ping-integration-for-self-managed-opt-out-coverage}

#### アプローチ {#approach-2}

Snowplow に加えて、Rails モノリスが毎週の Service Ping 組み立て時にクエリして集計メトリクスを収集する内部 API を Artifact Registry に公開します。これにより、Snowplow イベント転送をオプトアウトしたインスタンスに対しても、集計カバレッジが提供されます。

#### 選択しなかった理由 {#why-not-chosen-2}

1. **カーディナリティの問題**： Service Ping のペイロードは、フラットなスカラーメトリクス（メトリクスごと、週ごとに 1 つの数値）に集計される。Artifact Registry の興味深いディメンション（フォーマット、リポジトリの種類（ホスト型／仮想／リモート）、認証方法、Organization、上流の種類）は、クロス集計するとメトリクスのバリエーションが膨大に膨れ上がる。これを Service Ping でモデル化するには、カーディナリティをフラット化する（分析的価値を失う）か、数百の事前集計されたメトリクス YAML 定義を登録する（運用負担）かのいずれかが必要になります。Snowplow イベントは、ディメンションが各イベントとともにウェアハウスに格納されるため、高いカーディナリティを自然に扱える。
2. **高価な SQL 集計**： Service Ping は、ライブデータベースに対する SQL クエリでメトリクスを計算します。Artifact Registry のテーブル（アーティファクト、blob 参照、キャッシュエントリ）はネームスペースでパーティション分割され、GitLab.com スケールでは数十億行に成長する（[ADR-007](007_database_schema.md)、[ADR-003](003_system_requirements.md)）。毎週の Service Ping メトリクスを埋めるためのネームスペース横断の `COUNT`/`SUM` クエリは、サイクルごとに大量のデータをスキャンします。Snowplow がすでに本番データベースに触れることなくウェアハウスから同じ情報を提供するのに、正当化する必要のない高価な操作です。
3. **Redis カウンターインフラの回避**： ライブ SQL の代替は、すべてのアーティファクト操作でインクリメントされ Service Ping が読み取る Redis ベースのカウンターを維持することです。これは Rails モノリスが HyperLogLog や Redis HLL メトリクスに使用するパターンです。ここでこれを採用すると、新しい運用依存性（Redis カウンター、有効期限処理、Redis フラッシュ時の復旧セマンティクス）と、すべてのプッシュ/プルのホットパスにおける新しいインストルメンテーション面が追加される。Snowplow はすでに同じインストルメンテーションポイントでこのデータを捕捉するため、Redis カウンター層は純粋な重複になります。
4. **サービス間の調整**： YAML メトリクス定義のために Rails モノリスチームへの依存性を追加します。これは、この ADR で回避しようとしているサービス間結合の一種です。
5. **限定的なギャップ**： Snowplow をオプトアウトする Self-Managed 顧客は、データを共有しないことを明示的に選択しています。カバレッジのギャップは限定的であり、顧客の意図に整合しています。
6. **将来の選択肢を閉ざさない**： このオプションは、プロダクトがオプトアウトインスタンスの集計カバレッジを必要とする場合のフォローアップとして利用可能なまま残る。オプトアウト率に関するデータが得られた時点で、別の ADR がトレードオフを再検討できます。

## 実装シーケンス {#implementation-sequence}

1. **フェーズ 1（MVP）**: LabKit v2 Snowplow トラッカーを統合します。`gitlab_standard` と `artifact_registry_context` を付加して、コアアクション（プッシュ、プル、削除、リポジトリ作成）のイベントを送出します。エミッターの Prometheus メトリクスを登録します。ステージングで両方のコンテキストが入った状態で、イベントが Snowflake に到着することを検証します。
2. **フェーズ 2（課金）**: 課金対象のアクション（ストレージ消費、アーティファクト転送）に対し、`billable_usage` スキーマに準拠した課金イベントを送出します。SaaS では `billing_entity_type` と `billing_entity_id` が支払者を識別します（AR は、ネームスペースに保存されたペアから両方の値を取得します。[ADR-022](022_namespace_decoupling.md)）。`root_namespace_id` はスキーマで必須とされ、ペアが存在しない場合に CustomersDot がフォールバックとして使用するため、SaaS のイベントに残します（AR はペアだけを保存するため、タイプが `top_level_group` の間は `billing_entity_id` を `root_namespace_id` としても送信し、タイプが変わるとスキーマで許容されている `null` を送信します）。Self-Managed と Dedicated では `unique_instance_id` を使用し、`ar_namespace_id`（[課金設計ドキュメント](https://gitlab.com/gitlab-org/architecture/usage-billing/design-doc/-/merge_requests/27)で定める計量境界）は イベントの `metadata` オブジェクトに `feature_qualified_name` とともに含めます。課金パイプラインはトップレベルの `billable_usage` フィールドと `metadata` のみを読み取り、Snowplow カスタムコンテキストは読み取らないため、AR 固有の課金ディメンションは `metadata` に置き、`artifact_registry_context` には置きません。フェーズ 1 とは独立しています。
3. **フェーズ 3（イテレーション）**： プロダクトアナリティクスの要求に基づいてイベントカバレッジを拡張する（仮想リポジトリの使用パターン、ライフサイクルポリシーの有効性、フォーマット固有の採用）。繰り返し現れる AR 固有のディメンションがファーストクラスのウェアハウス列に値する場合は、`artifact_registry_context` を拡張する（新しいマイナーバージョン）。

## 参考資料 {#references}

- [LabKit v2 Snowplow Tracker](https://gitlab.com/gitlab-org/labkit/-/tree/main/v2/events/snowplow) — サテライトサービスで使用される Go Snowplow クライアント
- [Iglu `custom_event` スキーマ](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/custom_event/jsonschema) — カスタムイベントペイロードのスキーマ
- [Iglu `billable_usage` スキーマ](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/billable_usage/jsonschema) — 課金対象使用状況イベントペイロードのスキーマ（課金キー: `billing_entity_type`、`billing_entity_id`、`root_namespace_id`、`unique_instance_id`）
- [Iglu `gitlab_standard` スキーマ](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/gitlab_standard/jsonschema) — AR カスタムイベントに付加される共通の ID/環境コンテキスト
- [Iglu `artifact_registry_context` スキーマ](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/artifact_registry_context/jsonschema) — AR 固有のコンテキストスキーマ（[iglu!190](https://gitlab.com/gitlab-org/iglu/-/merge_requests/190)でマージ）
- [labkit!498](https://gitlab.com/gitlab-org/labkit/-/merge_requests/498) — LabKit v2 の Snowplow トラッカーにカスタムコンテキストサポートを追加
- [labkit#103](https://gitlab.com/gitlab-org/labkit/-/work_items/103) — LabKit v2 のカスタムコンテキストサポートの追跡作業アイテム（labkit!498 で解決）
- [使用量課金設計ドキュメント !27](https://gitlab.com/gitlab-org/architecture/usage-billing/design-doc/-/merge_requests/27) — AR ネームスペースを計量境界に設定します。課金対象イベントは `ar_namespace_id` を `metadata` 内に、アナリティクスイベントは `artifact_registry_context` 内に含めます
- [ADR-022: ネームスペースの分離](022_namespace_decoupling.md) — AR ネームスペースを Rails ネームスペースとは異なるスラッグアンカーされたエンティティとして定義します
- [内部アナリティクスドキュメント](https://docs.gitlab.com/ee/development/internal_analytics/) — GitLab のアナリティクスインストルメンテーションガイド
- [Self-Managed と Dedicated のイベントデータ収集](https://docs.gitlab.com/administration/settings/event_data) — Self-Managed の Snowplow 収集に関する設定とプライバシーの詳細（18.0 以降）
- [顧客のプロダクト使用状況イベントに関する FAQ](/handbook/legal/privacy/product-usage-events-faq/) — Self-Managed のイベント収集、オプトアウトの仕組み、17.11→18.0 のロールアウトに関する顧客向け FAQ
- [顧客のプロダクト使用状況情報](/handbook/legal/privacy/customer-product-usage-information/) — Service Ping、Snowplow、License Sync のデータ収集に関するプライバシーおよび法的フレームワーク
- [内部イベントデータフロー](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/technical-blueprint/current-state/internal-events-data-flows/) — デプロイタイプ横断のイベント収集のシーケンス図
- [Analytics Instrumentation のインフラストラクチャ](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/infrastructure/) — Snowplow と Service Ping のインフラの詳細
- [CI Job Telemetry 設計ドキュメント](/handbook/engineering/architecture/design-documents/ci_job_telemetry/) — OTLP ベースのテレメトリアプローチ（検討した代替案）
- [ADR-001: アンカーポイントとしての Organization](001_organizations_as_anchor_point.md) — Organization スコープのアーキテクチャ
- [ADR-006: 技術スタック](006_technology_stack.md) — Go 言語と LabKit v2 の採用
- [ADR-009: API 設計](009_api_design.md) — Management API と Client API の構造
