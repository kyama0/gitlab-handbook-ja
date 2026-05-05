---
title: "プロダクトマネージャー向けデータ"
upstream_path: /handbook/enterprise-data/organization/programs/data-for-product-managers/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T08:00:00Z"
translator: claude
stale: false
---

このページは、GitLab のプロダクトマネージャーが利用可能なデータと、そのデータを使ってプロダクトの利用状況を把握する方法を理解するためのものです。主に「データをどのように消費するか」と「どのようなデータが利用可能か」の 2 つのトピックを取り上げます。

## GitLab でデータを消費する方法

GitLab のデータスタックのユーザー向け部分は、Snowflake データウェアハウスに接続された BI ツール Tableau で構成されています。データチームハンドブックの [Tableau ハンドブックページ](/handbook/enterprise-data/platform/tableau/)には、GitLab の幅広い利用者向けの Tableau に関する一般情報が掲載されています。

### プロダクトマネージャー向けの便利なリンク

ブックマークしておくことをお勧めするリンクを以下に示します：

- [データガイド](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/)：データの使い方に関する参考ガイド
- [DBT ドキュメント](https://dbt.gitlabdata.com/#!/overview)：データモデルのドキュメント
- [Service Ping メトリクス辞書](https://metrics.gitlab.com/)：Service Ping メトリクスの定義とメタデータ
- [Service Ping ドキュメント](https://docs.gitlab.com/ee/development/internal_analytics/service_ping/)
- [Snowplow イベント辞書](https://metrics.gitlab.com/events/)：Snowplow イベントの定義とメタデータ
- [プロダクトデータインサイト ハンドブック](/handbook/product/groups/product-analysis/)：プロダクトデータインサイトチームに関する情報
- [Tableau ドキュメント](/handbook/enterprise-data/platform/tableau/)：Tableau の使い方に関する情報とガイド
- [Analytics Instrumentation クイックリンク](/handbook/product/product-processes/analytics-instrumentation-guide/#quick-links)
- [内部イベントトラッキングのクイックスタートガイド](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/quick_start.html)：イベントトラッキングの計装方法と GitLab の内部トラッキングシステムに関するコンテキストの包括的な手順
- [使用データ計装 Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Usage%20Data%20Instrumentation)：機能の使用状況を追跡したいプロダクトマネージャーまたはエンジニアリングチーム向けの Issue テンプレート

### Tableau へのアクセス取得

Tableau へのアクセスを取得するには、[こちら](/handbook/enterprise-data/platform/tableau/#access)の手順に従い、Lumos 経由でアクセスをリクエストしてください。

- 独自のチャートとダッシュボードを作成するには、Creator または Explorer ライセンスが必要です。Tableau のライセンスタイプについては[こちら](/handbook/enterprise-data/platform/tableau/#capabilities)をご覧ください。

### 公開データソース

公開済みの Tableau データソースは、SQL やモデリングを記述することなく Tableau ユーザーがチャートを作成できる優れた方法です。データチームは、公式の「認定済み」バッジを持つ複数の公開データソースを Tableau に作成しています。

![Tableau 認定データソース](/images/enterprise-data/programs/data-for-product-managers/tableau_certified_data_sources.png)

たとえば、`Mart Ping Instance` を使用して Service Ping の ping レベルの詳細を確認できます。

### どのようなテーブルが利用可能かを確認するには？

データチームはデータ変換レイヤーとして [dbt](https://www.getdbt.com/) というツールを使用しています。dbt の優れた機能の 1 つが dbt docs で、スキーマ内のすべてのモデルのドキュメントを自動的に作成します。私たちの dbt docs インスタンスは[こちら](https://dbt.gitlabdata.com/#!/overview)で確認できます。

- Tableau では、データソースペインで Snowflake への接続を形成すると、クエリ可能なすべてのテーブルのリストが表示されます。
  - ![Tableau データソースペインのテーブル表示](/images/enterprise-data/programs/data-for-product-managers/tableau_list_of_tables.png)
- 各データソースはテーブルに対して明確な命名規則を持っています（詳細は[以下の GitLab プロダクトマネージャー向け主要データソース](#key-data-sources-for-product-managers-at-gitlab)を参照）。
  - Service Ping モデルには名前に `ping_instance` が含まれます（例：`dim_ping_instance`、`mart_ping_instance_metric_monthly`）
  - GitLab.com Postgres DB イベントモデルは `fct_event` または `mart_event` で始まります（例：`fct_event_user_daily`、`mart_event_namespace_monthly`）
  - GitLab.com Postgres DB テーブルレプリカはソーステーブル/コンテンツにちなんで命名されます（例：`dim_merge_request`、`dim_namespace`）
  - Snowplow モデルには名前に `behavior` が含まれます（例：`mart_behavior_structured_event`、`fct_behavior_website_page_view`）

#### dbt docs に情報を更新・追加するには？

[gitlab-data analytics プロジェクト](https://gitlab.com/gitlab-data/analytics)で更新または作成したいファイルを見つける必要があります。変更を作成する際は[SQL スタイルガイド](/handbook/enterprise-data/platform/sql-style-guide/)を必ず読んで従ってください。テーブルの説明や情報のみを更新したい場合は `schema.yml` ファイルを探します。テーブルの構造を実際に変更したい場合は `*.sql` ファイルになります。

次に、ブランチを作成し、`dbt Model Changes` テンプレートを使用して[gitlab-data analytics プロジェクト](https://gitlab.com/gitlab-data/analytics)にマージリクエストを提出します。ブランチと MR を作成する際は[データチームのワークフロー](/handbook/enterprise-data/how-we-work/#merge-request-workflow)に従い、適切な[データチームラベル](/handbook/enterprise-data/how-we-work/#issue-labeling)を使用してください。

### ヘルプを得るには？

詰まったり質問がある場合は、[#data Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C8D1LGC23)でヘルプを求めてください。多くの PM がデータ関連の専門知識を持ち、一般的なプロダクトデータの質問に素早くアシストできるため、#g_、#s_、または #product チャンネルにも質問をクロスポストすることをお勧めします。

- 質問の背景を伝えることが役立ちます。知りたいことだけでなく、_なぜ_それを知りたいのかも伝えることで、より効率的な回答の方法を示してもらえます。
- このドキュメントはベストプラクティスのガイドとして機能することを目的としています。このコンテンツでヘルプが必要なときに学んだことを追加してください。

必要に応じて、[プロダクトデータインサイトプロジェクト](https://gitlab.com/gitlab-data/product-analytics/-/issues/new)で Issue を作成し、[プロダクトデータアナリスト](/handbook/product/groups/product-analysis/#team-members)に割り当てることもできます。PDI チームとの協力方法については[こちら](/handbook/product/groups/product-analysis/#working-with-us)をご覧ください。

## 機能トラッキングの計装ガイダンス

GitLab PM として、あなたはチームの機能のメトリクスを定義・追跡する責任があります。このガイドでは、成功するためのプロセス、ツール、リソースを説明します。

### 機能トラッキング計装のクイックリンク

- [イベントおよびメトリクス定義ファイルを自動的に作成する CLI ジェネレーター](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/quick_start.html#defining-event-and-metrics)：要件を収集し、イベントとメトリクスの定義ファイルを自動生成し、エンジニアが実装・テストするためのすぐに使えるコードを生成するインタラクティブ CLI
- [内部イベントトラッキングのクイックスタートガイド](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/quick_start.html)：イベントトラッキングの計装方法と GitLab の内部トラッキングシステムに関するコンテキストの包括的な手順
- [はじめての標準コンテキストフィールド](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/standard_context_fields.html)：内部イベントトラッキングに含まれる各標準コンテキストフィールドとその意図に関するドキュメント
- [使用データ計装 Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Usage%20Data%20Instrumentation)：機能の使用状況を追跡したいプロダクトマネージャーまたはエンジニアリングチーム向けの Issue テンプレート
- [プロダクトデータインサイト パフォーマンス指標チャート Issue テンプレート](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=PI%2520Chart%2520Help)
- [プロダクトデータインサイト アドホック分析 Issue テンプレート](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Ad%2520Hoc%2520Request)

### セルフサービス機能トラッキングダッシュボード

新しい機能または最近変更された機能の分析ニーズがこれらのダッシュボードで満たされる場合、プロダクトデータインサイト（PDI）Issue の作成をスキップできます：

- [PD: 集約プロダクト使用メトリクス](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting)
- [PD: プロダクト使用メトリクス（.com と Service Ping）](https://10az.online.tableau.com/#/site/gitlab/workbooks/2478263/views)
- [PD: ファームグラフィックプロダクトメトリクス使用](https://10az.online.tableau.com/#/site/gitlab/workbooks/2137023/views)
- [PD: サブスクリプション機能使用トレンド](https://10az.online.tableau.com/t/gitlab/views/PDSubscriptionFeatureUsageTrends_17032798065680/ActiveSubscriptionUsageTrends)
- [AI レポーティング](https://10az.online.tableau.com/t/gitlab/views/AIGatewayReporting/Overview)

### 機能トラッキング計装のプロセス

1. 分析要件の計画

   **オーナー：プロダクトマネージャー**
   - 計測対象を決定することから始めます：
     - 機能の成功を示すユーザー行動は何か？
     - プロダクトの意思決定に役立つメトリクスは何か？
     - チームの KPI に必要なデータポイントは何か？
   - 既存のダッシュボードですべてのニーズが満たされない場合は、追加の分析をリクエストするためにプロダクトデータインサイト（PDI）Issue を作成します。[プロダクトデータインサイト（PDI）Issue](https://gitlab.com/gitlab-data/product-analytics/-/issues/new)

1. 計装 Issue の作成

   **オーナー：プロダクトマネージャー**

   オプション A：CLI ジェネレーターを使用して計装 Issue の要件を生成する
   - [CLI ジェネレーターツール](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/quick_start.html#defining-event-and-metrics)を使用します
   - メリット：
     - イベントとメトリクスの定義ファイルを自動生成します
     - すぐに使える計装コードを生成します
     - エンジニアの実装時間を削減します
     - GitLab のトラッキング標準との一貫性を確保します

   オプション B：使用データ計装 Issue テンプレートを使用してメトリクス要件を記述する
   - [使用データ計装 Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Usage%2520Data%2520Instrumentation)を使用します
   - メトリクスプロパティを確認するために[割り当てられたプロダクトアナリスト](/handbook/product/groups/product-analysis/#team-members)にタグ付けします

1. トラッキングの実装

   **オーナー：エンジニア**
   - 内部イベントトラッキングのマージリクエスト（MR）を作成します
   - 使用データ計装 Issue で定義された仕様に従って新しいメトリクスを実装します

1. テストと検証

   **オーナー：エンジニア**
   - [ローカルテスト](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/local_setup_and_debugging.html)を実施します
   - Analytics Instrumentation チームメンバーにレビューを依頼します
   - テストイベントが Issue で定義されたプロパティと一致することを確認します

1. 分析の作成

   **オーナー：プロダクトアナリスト**
   - ユーザーおよびイベント粒度の GitLab.com データ（Snowplow）を必要とする分析では、MR マージの 1〜2 週間後にデータ収集が分析に十分な状態になります
   - 集約されたセルフマネージドおよび Dedicated データ（Service Ping）を必要とする分析では、Service Ping メトリクスのバージョン採用要件のため、MR マージの 6〜8 週間後にデータ収集が分析に十分な状態になります
   - PDI Issue で指定された要件を完了させます（該当する場合）

### AI 機能の特別な考慮事項

AI Gateway を経由してルーティングされる機能を計装する際は、以下のガイドラインに従ってください：

1. AI Gateway 経由でルーティングされる新機能をユニットプリミティブとして表現します
   - 新しい独自機能は[ユニットプリミティブ](https://gitlab.com/gitlab-org/cloud-connector/gitlab-cloud-connector/-/tree/main/config/unit_primitives)として表現するべきです
   - 新しいユニットプリミティブを追加するには、~"group::cloud connector" に連絡します

1. 新しいユニットプリミティブのトラッキングを設定します
   - 追跡すべき必要なフィールドを ~"group::analytics instrumentation" に連絡します
   - AI Gateway 計装の詳細については、[ドキュメント](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/quick_start.html#internal-events-on-other-systems)を参照してください
   - 計装が完了すると、ユニットプリミティブフレームワークを使用した AI Gateway イベントは：
     - ユーザーによってブロックできません
     - すべてのデプロイタイプでイベント粒度で追跡されます

1. より詳細なレポーティングのために
   - 広い機能粒度での AI Gateway への「リクエスト」以上の詳細が必要な場合は、[内部イベントトラッキング](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/quick_start.html)を使用します
   - 内部イベントは、行動ファネルまたはより詳細なレポーティングのユースケースに対して `correlation_id` を使用してユニットプリミティブイベントに接続できます

1. AI Gateway データの表示
   - [AI レポーティング](https://10az.online.tableau.com/t/gitlab/views/AIGatewayReporting/Overview)は、~"group::analytics instrumentation" によって計装されると新しいユニットプリミティブリクエストを自動的に表示します
   - 追加の分析は[プロダクトデータインサイト（PDI）Issue](https://gitlab.com/gitlab-data/product-analytics/-/issues/new)を作成してリクエストできます

### 主要な連絡先とリソース

- 機能トラッキングプロセスに関する質問は、#g_monitor_analytics_instrumentation に連絡してください。
- Analytics Instrumentation チームは社内プロダクト機能トラッキングシステムを所有しています。

このプロセスに従い、関係する役割を理解することで、PM は機能のメトリクスを効果的に計装・追跡し、データドリブンな意思決定とプロダクト改善を実現できます。

## GitLab のプロダクトマネージャー向け主要データソース {#key-data-sources-for-product-managers-at-gitlab}

プロダクト使用データには 3 つの主要なデータソースがあります：

- **Service Ping**（セルフマネージド、Dedicated、GitLab.com 向け）
- **GitLab.com Postgres データベース**（GitLab.com 向け）
- **Snowplow（内部イベント）**（セルフマネージド、Dedicated、GitLab.com および AI/DAP 向け）

各データソースには固有の注意点、機能、制限があります。データまたは PDI チームが PM に最初に確認することは通常「セルフマネージドと GitLab.com のどちらに興味がありますか？」です。質問へのアプローチと利用可能なデータソースは、この 2 つで大きく異なります。セルフマネージドの提供はアクティブな顧客が多いですが、GitLab.com の提供ははるかに詳細なデータを分析に使用できます。

### Service Ping（バージョンアプリ）

[Service Ping](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html) は、GitLab がさまざまなデプロイオプション全体の顧客から週次集計情報を収集するために構築したカスタムツールです：

- セルフマネージド：自社のハードウェアでプロダクトをホストする顧客。
- GitLab Dedicated：各顧客が GitLab チームによってホスト・管理される独自の隔離された GitLab インスタンスを取得する、完全マネージドのシングルテナント SaaS 提供。
- GitLab.com：マルチテナントの SaaS 提供。

#### 主要概念

- Service Ping はインストールレベルでデータを収集・報告します。セルフマネージドおよび GitLab Dedicated の顧客の場合、週に 1 インストールあたり 1 ping です。単一の大規模インストールである GitLab.com では、Service Ping の報告は引き続き Service Ping フレームワーク内の単一 ping として発生し、GitLab.com エコシステム全体を表します。（言い換えれば、デプロイタイプやインストールサイズに関係なく、インストールレベルでデータを受け取ります）。
- Service Ping は特定のイベント/アクション（別名メトリクス）の事前集計カウントを提供します。メトリクスはすでに集計されているため、より詳細なレベル（例：ユーザーレベル、プロジェクトレベルなど）での分析はできません。
- Service Ping の送信はオプションですが、デフォルトでオンになっています。
  - 毎月 ping を正常に送信する有料サブスクリプションのパーセンテージは[このチャート](https://10az.online.tableau.com/t/gitlab/views/PaidSubscriptionServicePingOpt-InRate/PaidSubscriptionServicePingOpt-InRate)で確認できます。未ライセンス（Core/Free）ユーザーのオプトイン率は不明ですが、同じ率であると仮定します。一部のインストールがデータ送信をブロックする理由については[こちら](https://gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/internal/-/issues/291#note_276741996)の詳細情報をご覧ください。
  - すべての顧客から ping を受け取るわけではないため、月次レポーティングではギャップを埋めるために推定を適用します。推定方法論については社内ハンドブック[こちら](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/xmau-analysis/estimation-xmau-algorithm/)をご覧ください。
- 顧客は、メトリクスを報告するためにメトリクスが計装された GitLab のバージョンを採用する必要があります。たとえば、メトリクスが 17.3 に追加された場合、バージョン 17.3 以上の顧客のみがメトリクスを報告します。つまり、メトリクスを報告する顧客が十分に増えるまでに数ヶ月かかる可能性があります。
  - GitLab バージョンの採用は[このダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/2298821/views)で追跡できます。
- Ping は毎日 Snowflake に追加されます。月の 2 日までに前月のすべてのデータが利用可能になるはずです。

#### 主要カラム

- `ping_deployment_type` は、セルフマネージド、Dedicated、GitLab.com の使用を区別するのに最適なカラムです。
  - `ping_delivery_type` を使用する場合、Dedicated と GitLab.com の両方が `SaaS` に含まれることに注意してください。
- `metrics_path` カラムを使用して関心のあるメトリクスをフィルタリングします。より詳細なメトリクスレベルの詳細とメタデータは [Service Ping メトリクス辞書](https://metrics.gitlab.com/)で確認できます。
- 月次レポーティングでは、インストールごとに月ごとに受け取る最後の ping に限定します。クエリを `is_last_ping_of_month = TRUE` でフィルタリングできます
- 私たちはよく「インストール」について話したり、`dim_installation_id` カラムを参照したりします。「インストール」とは `dim_instance_id`/`uuid` と `dim_host_id` のユニークな組み合わせです。
  - 単一の「インスタンス」（`dim_instance_id`/`uuid`）が複数のホストを持つことができるため、「インストール」を使用します。

#### 例

GitLab.com を除外して月の最後の ping に限定する ping レベルの詳細を提供するクエリの例：


{{% details summary="セルフマネージドおよび Dedicated の Ping レベル詳細" %}}
```sql
SELECT *
FROM common_mart.mart_ping_instance
WHERE ping_created_date_month = DATEADD('month', -1, DATE_TRUNC('month', CURRENT_DATE)) --last completed month
  AND ping_deployment_type != 'GitLab.com'
  AND is_last_ping_of_month = TRUE
LIMIT 1000
;
```
{{% /details %}}


月とデプロイタイプ別のメトリクスレベルレポーティングを提供するクエリの例：


{{% details summary="月とデプロイタイプ別 Service Ping メトリクス" %}}
``` sql
SELECT
  ping_created_date_month,
  ping_deployment_type,
  metrics_path,
  SUM(monthly_metric_value) AS monthly_metric_value,
  COUNT(DISTINCT IFF(monthly_metric_value > 0, dim_installation_id, NULL)) AS installation_count --count of installations reporting usage that month
FROM common_mart.mart_ping_instance_metric_monthly --this model already filters to the last ping of the month
WHERE ping_created_date_month BETWEEN DATEADD('month', -6, DATE_TRUNC('month', CURRENT_DATE)) AND DATEADD('month', -1, DATE_TRUNC('month', CURRENT_DATE)) --last 6 complete months
  AND metrics_path = 'usage_activity_by_stage_monthly.secure.sast_scans' --arbitrary metric, switch this out for metric of interest
GROUP BY 1,2,3
ORDER BY 1,2
;
```
{{% /details %}}


### GitLab.com Postgres データベース

GitLab.com は GitLab がホストする GitLab インスタンスであるため、インスタンスの Postgres データベースへのアクセスがあり、その一部を Snowflake データウェアハウスにロードできます。つまり、GitLab.com 上でのプロダクトの使い方を非常に詳細に把握できます。

- バックエンドにテーブルを作成するプロダクトの任意の部分（[スキーマ](https://gitlab.com/gitlab-org/gitlab/-/blob/master/db/structure.sql)ファイルを参照）は、1 日に 3 回ウェアハウスと同期する ELT ジョブに追加できます。その後、必要なのは dbt ベースモデルを構築して Tableau でアクセス可能にすることだけです。

#### テーブルまたはカラムがデータウェアハウスにない場合は？

ELT プロセスは、インポートしたいカラムとテーブルを明示的に指定することで機能します。つまり、分析のためにデータウェアハウスに含めたいカラムやテーブル全体が欠落している可能性があります。
その場合は、以下の 2 つのテンプレートのいずれかを使用して、インポートしてほしい内容を知らせるデータ Issue を作成してください：

1. テーブル全体をインポートする必要がある場合は、[新規データソーステンプレート](https://gitlab.com/gitlab-data/analytics/-/work_items/new?description_template=%5BNew%20Request%5D%20New%20Data%20Source)を使用します
2. 既存のテーブルにカラムを追加する必要がある場合は、[新規データカラムテンプレート](https://gitlab.com/gitlab-data/analytics/-/work_items/new?description_template=%5BNew%20Request%5D%20New%20Data%20Column)を使用します

その前に、テーブル/カラムが本当に[本番スキーマ](https://gitlab.com/gitlab-org/gitlab/-/blob/master/db/structure.sql)の一部であることを確認してください。

#### GitLab.com データを使用した Service Ping のレプリケーション

- Service Ping はデータを `installation` レベルでのみ集計するため、GitLab.com では `namespace` レベルで情報を見たいことが多く、あまり有用ではありません。たとえば、GitLab.com で 4 万人がステージを使用していることを知ることはある程度有用ですが、より多くのコンテキストが知りたいはずです（彼らは無料か有料か？どのプランを利用しているか？パワーユーザーはいるか、使用は均等に分布しているか？）
- しかし、GitLab.com Postgres データベースにアクセスできるため、多くの Service Ping メトリクスを namespace レベルまたはユーザーレベルでレプリケートできます。
- [このモデル](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_event_valid)は、GitLab.com 向けに namespace レベルで一部の Service Ping メトリクスをレプリケートする方法の例です。このモデルは Tableau の `Mart Event Valid` という公開データソースとして利用可能です。

#### 例

GitLab.com の日別 UMAU を生成するクエリの例：


{{% details summary="GitLab.com 日別 UMAU" %}}
``` sql
SELECT
  event_date,
  COUNT(DISTINCT dim_user_id) AS umau
FROM common_mart.mart_event_user_daily
WHERE event_date >= CURRENT_DATE-30
  AND is_umau = TRUE
GROUP BY 1
ORDER BY 1
;
```
{{% /details %}}


有料 GitLab.com の月別 GMAU を生成するクエリの例：


{{% details summary="有料 GitLab.com 月別 GMAU" %}}
``` sql
SELECT
  event_calendar_month,
  group_name,
  user_count
FROM common_mart_product.rpt_event_xmau_metric_monthly
WHERE event_calendar_month BETWEEN DATEADD('month', -6, DATE_TRUNC('month', CURRENT_DATE)) AND DATEADD('month', -1, DATE_TRUNC('month', CURRENT_DATE)) --last 6 complete months
  AND is_gmau = TRUE
  AND user_group = 'paid'
ORDER BY 2,1
;
```
{{% /details %}}


### Snowplow

Snowplow Analytics は、高度なデータ分析のために複数のプラットフォームからデータを収集できるオープンソースのエンタープライズイベントレベルの分析プラットフォームです。

- すべての Snowplow イベントで `user_id` を仮名化しており、イベントを特定のユーザー（または GitLab.com Postgres DB）に関連付けることができません。
  - また、PII や RED データの可能性のある情報を削除するためにページ URL も仮名化します。
- セルフマネージドおよび Dedicated インストールは、18.0 からイベントレベルデータの送信を開始しました。

#### 主要概念

- Service Ping と同様に、Snowplow データはセルフマネージドおよび Dedicated インストールのバージョン採用に依存します。つまり、データを受け取り始めるには、GitLab のバージョンが採用されるのを待つ必要があります。
  - 注意：GitLab.com は常に GitLab の最新バージョンを使用しているため、計装がデプロイされるとすぐにデータの収集を開始します。
- Snowplow イベントの `user_id` の仮名化は制限事項ですが、迅速なフィードバックにより、Snowplow は機能の採用と使用を測定する効果的なデータソースです。
  - 注意：機能と関与するユーザー数をカウントすることはまだ可能で、ほとんどのユースケースに十分です。ただし、そのユーザーが誰かはわかりません。
- セルフマネージドおよび Dedicated インストールの場合、イベントレベルデータの送信はオプションですが、デフォルトでオンになっています。
  - イベントレベルデータのオプトイン率は[このダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/3294705/views)で確認できます。
  - 唯一の例外は、ユーザーがすべてのデプロイタイプ（セルフマネージド、Dedicated、GitLab.com）で Snowplow イベントのオプトアウトができない AI イベントです。
- Snowplow イベントはユーザーによってブロックできます（AI イベントを除く）。

#### 計装

Analytics Instrumentation は[内部イベントトラッキング](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/)を構築しており、Snowplow イベントの計装方法を案内します。始めるには、[内部イベントトラッキングのクイックスタートガイド](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/quick_start.html#quick-start-for-internal-event-tracking)を使用してください。

Snowplow イベントが計装されたら、検証プロセスの一部として、新たに計装されたイベントが正しく機能しているかテストする必要があります。PM 自身が毎回検証を行うわけではないですが、仕組みを理解しておくと便利です。Snowplow イベントのテストについては、[こちらの内部イベントドキュメント](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/local_setup_and_debugging.html)で詳しく学べます。

#### Tableau でのイベントの可視化

計装したデータは、チャートで可視化できると最も有用です。チャートの作成については、ハンドブックの [Tableau セクション](/handbook/enterprise-data/platform/tableau/)を参照してください。

- まず、[Snowplow イベント探索ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/2294309)で Snowflake に正しく保存されているか確認します（注：データ量がかなり大きいため、ダッシュボードの読み込みにはお時間がかかります）。フィルターを使用してイベントを見つけることができます。異なる属性の値が不明な場合は、[イベント定義](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/event_definition_guide.html)にキャプチャされているはずです。確認できない場合は、エンジニアリングマネージャーに確認してください。
- イベントが適切に保存されていることを確認したら、データをクエリして可視化する準備ができています！毎日数百万件のイベント（ページビュー、構造化イベント）を収集しているため、データセット全体のクエリはかなり遅くなります。このデータソースを簡単に探索できるように、いくつかの小さなテーブルを作成しました：
  - [`common_mart.mart_behavior_structured_event`](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_behavior_structured_event)：すべての構造化イベントを含む（内部イベントトラッキングで計装されたもの）
  - [`common.fct_behavior_website_page_view`](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_behavior_website_page_view)：すべてのページビューを含む
  - [`common.fct_behavior_unstructured_event`](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_behavior_unstructured_event)：すべての非構造化イベントを含む（クリックイベント、フォーム送信などを含む）

#### 例


{{% panel header="**プロのヒント：クエリの最適化**" header-bg="info" %}}
Snowplow モデルはかなり大きく、クエリが遅くなる場合があります。クエリを高速化するには、`WHERE` ステートメントで日付（`behavior_at`）フィルターを使用してください。
{{% /panel %}}


過去数日間の上位 100 件の Snowplow イベントを表示するクエリの例：


{{% details summary="上位 100 件の Snowplow イベント" %}}
``` sql
SELECT
  event_action,
  COUNT(*) AS event_count
FROM common_mart.mart_behavior_structured_event
WHERE behavior_at >= CURRENT_DATE-3
GROUP BY 1
ORDER BY 2 DESC
LIMIT 100
;
```
{{% /details %}}


過去数日間の上位 100 件の閲覧ページを表示するクエリの例（URL が仮名化されていることに注意）：


{{% details summary="上位 100 件の閲覧ページ" %}}
``` sql
SELECT
  page_url,
  COUNT(*) AS page_view_count
FROM common.fct_behavior_website_page_view
WHERE behavior_at >= CURRENT_DATE-3
GROUP BY 1
ORDER BY 2 DESC
LIMIT 100
;
```
{{% /details %}}


### その他のデータソース\*\*

- **Zuora**
  - Zuora はサブスクリプション情報と ARR、シート数などの主要メトリクスの SSOT（唯一の真実のソース）です。
- **Customers Dot（CDot）データベース**
  - CDot はトライアルを含む Fulfillment 関連データの SSOT です。
- **Sheetload**
  - 独自の Google Sheets をデータウェアハウスにロードできます。詳細は[こちら](https://internal.gitlab.com/handbook/enterprise-data/platform/pipelines/#sheetload)をご覧ください。

## Analytics Instrumentation

[Analytics Instrumentation](https://about.gitlab.com/direction/monitor/analytics-instrumentation/) はプロダクト組織の一部であり、データおよびプロダクトデータインサイトチームとは完全に独立しています。ただし、これらのチームは Customer Product Adoption pod として密接に連携しています。

- Analytics Instrumentation チームメンバーは、GitLab.com とセルフマネージドの両方においてデータ収集の [DRI](/handbook/people-group/directly-responsible-individuals/) です。彼らは Service Ping と Snowplow を所有しています。以下のような質問の場合は彼らに相談します：
  - セルフマネージド向けの新しいメトリクスをどのように計装するか？
  - Service Ping への追加のベストプラクティスは何か？
  - GitLab.com 上のフロントエンドインタラクションを追跡するために Snowplow/内部イベントを使用するには？
  - サーバーサイドのイベントを追跡するために Snowplow/内部イベントを利用できるか？
