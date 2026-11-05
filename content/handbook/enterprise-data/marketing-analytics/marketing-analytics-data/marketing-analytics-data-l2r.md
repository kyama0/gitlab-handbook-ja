---
title: Marketing Analytics データ - L2R モデル
description: >-
  L2R モデルグルーピングは、コアとなる Lead to Revenue モデルとそこから直接構築されたモデルで構成されています。
upstream_path: "/handbook/enterprise-data/marketing-analytics/marketing-analytics-data/marketing-analytics-data-l2r/"
upstream_sha: "ab93800e4c241789ac67785899fa20ffa1eb0854"
translated_at: "2026-11-05T14:56:31.098154+00:00"
translator: claude
stale: false
lastmod: "2026-11-04T20:19:30+01:00"
---

## Rpt_lead_to_revenue {#rpt_lead_to_revenue}

Lead to Revenue レポートは、主要なライフサイクルオブジェクト/マートの統合です: Person、Opportunity、Account、および両タイプの Bizible タッチポイント。結合されたオブジェクトに関するほぼすべての Sales と Marketing の指標とデータのワンストップショップです。ファネルの進行分析、データポイントと指標のコホート化、そしてリード作成からオポチュニティのクローズまでの真のファネルを 1 つのテーブルから作成することができます。

### ユースケース {#use-cases}

1. 特定のレコードのファネルステージの進行
1. 特定のファネルステージにあるレコードのカウント
1. ファネルステージ間の平均速度
1. 特定の属性に関するデータのコホート化

### 主要フィールド {#key-fields}

1. `lead_to_revenue_id` - このモデル内のユニーク行を識別するサロゲートキー
1. `[kpi]_date_range_*` - KPI 固有の日付集計
1. `bizible_mql_*` - MQL 日付の直前に発生した TP に関する Bizible TP データ
1. `bizible_most_recent_*` - 人物/オポチュニティの最新 TP に関する Bizible TP データ

### 主要指標 {#key-metrics}

1. ファネルステージ別のレコード数
1. 特定のファネルステージ間のタッチポイント数
1. ファネル全体の速度
1. ファネルステージのコンバージョン率

### データ系統 {#data-lineage}

1. データは SFDC からソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_lead_to_revenue)で確認できます

### DBT ソリューション {#dbt-solution}

dbt ソリューションは RAW ソースデータからディメンショナルモデルを生成します。例外は、特定の dbt モデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド              | ビジネスロジック   |
|--------------------|------------------|
| lead_to_revenue_id | モデル内で定義済み |
| [kpi]_date_range_* | モデル内で定義済み |

## Rpt_l2r_campaign_interactions {#rpt_l2r_campaign_interactions}

L2R キャンペーンインタラクションレポートテーブルは、人物/バイヤーおよびアトリビューション/オポチュニティタッチポイントと関連するマートフィールドの主要な UNION 結合を使用してベーステーブルを導出します。そこから、日時フィールドと関連するディメンションに対してさまざまな計算が実行されます。

### ユースケース {#use-cases-1}

L2R は GitLab のキャンペーンレポーティングのベーステーブルです。タッチポイントを組み合わせることで、ファネルのトップから Influenced SAO までの単一ビューを作成できます。メール、コンテンツ、有料メディアの取り組みのコンフォーマンスの追跡に使用されます。

### 主要フィールド {#key-fields-1}

1. `Person_order_type`
   1. is_first_order_person SFDC フィールドに基づく人物レコードの派生オーダータイプ
1. `Touchpoint_type`
   1. 特定のタッチポイント/レコードが Person/バイヤーまたは Opportunity/アトリビューションタッチポイントであるかの識別子
1. `カスタムアトリビューションフィールド（例: custom_sao）`
   1. モデル内の他の条件に基づくオポチュニティのタッチポイントのカスタムモデルウェイトを合計するための計算
1. `Person_status_change`
   1. あるステータスから別のステータスへの人物レコードの進行を示す派生フィールド
1. `Is_mdf_campaign`
   1. レコードに関連するキャンペーンに MDF 資金があるかどうかを示す T/F フラグ
1. `report_opportunity_*`
   1. 適切な場所での履歴スナップショットデータを活用したオポチュニティのレポートベースの属性を示す派生フィールド
1. `Is_sales_dev_owned_record`
   1. レコードが SFDC の Sales Dev Rep によって所有されているかどうかを示す T/F フラグ
1. `*_date_range_*`
   1. 特定のレコードの特定のファネルステージの日付の事前定義された日付集計

### 主要指標 {#key-metrics-1}

1. ディメンション別（キャンペーンタイプ、日付、オーダータイプなど）のレコード数/KPI 合計
1. 特定のステージでのまたは特定のキャンペーンからのタッチポイント数
1. アトリビューションモデルとディメンション別の組み合わせ加重 Net ARR またはアトリビューションタッチポイント

### データ系統 {#data-lineage-1}

1. データは SFDC と L2R からソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_l2r_campaign_interactions)で確認できます

| フィールド                                       | ビジネスロジック   |
|---------------------------------------------|------------------|
| カスタムアトリビューションフィールド（例: custom_sao） | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L176) |
| person_status_change                        | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L979) |
| is_mdf_campaign                             | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L1022) |
| report_opportunity_*                        | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L1034) |
| is_sales_dev_owned_record                   | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L1062) |

## Rpt_l2r_campaign_interactions_paid_account {#rpt_l2r_campaign_interactions_paid_account}

現在の支払いアカウントのみにフィルタリングされた rpt_l2r_campaign_interactions のフィルタリング版。

### ユースケース {#use-cases-2}

L2R は GitLab の顧客固有のキャンペーンレポーティングのベーステーブルです。タッチポイントを組み合わせることで、ファネルのトップから Influenced SAO までの単一ビューを作成できます。メール、コンテンツ、有料メディアの取り組みのコンフォーマンスの追跡に使用されます。

### 主要フィールド {#key-fields-2}

1. `Person_order_type`
   1. is_first_order_person SFDC フィールドに基づく人物レコードの派生オーダータイプ
1. `Touchpoint_type`
   1. 特定のタッチポイント/レコードが Person/バイヤーまたは Opportunity/アトリビューションタッチポイントであるかの識別子
1. `カスタムアトリビューションフィールド（例: custom_sao）`
   1. モデル内の他の条件に基づくオポチュニティのタッチポイントのカスタムモデルウェイトを合計するための計算
1. `Person_status_change`
   1. あるステータスから別のステータスへの人物レコードの進行を示す派生フィールド
1. `Is_mdf_campaign`
   1. レコードに関連するキャンペーンに MDF 資金があるかどうかを示す T/F フラグ
1. `report_opportunity_*`
   1. 適切な場所での履歴スナップショットデータを活用したオポチュニティのレポートベースの属性を示す派生フィールド
1. `Is_sales_dev_owned_record`
   1. レコードが SFDC の Sales Dev Rep によって所有されているかどうかを示す T/F フラグ
1. `*_date_range_*`
   1. 特定のレコードの特定のファネルステージの日付の事前定義された日付集計

### 主要指標 {#key-metrics-2}

1. ディメンション別（キャンペーンタイプ、日付、オーダータイプなど）のレコード数/KPI 合計
1. 特定のステージでのまたは特定のキャンペーンからのタッチポイント数
1. アトリビューションモデルとディメンション別の組み合わせ加重 Net ARR またはアトリビューションタッチポイント

### データ系統 {#data-lineage-2}

1. データは SFDC からソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_l2r_campaign_interactions_paid_account?g_v=1&g_i=\%2Brpt_l2r_campaign_interactions_paid_account%2B)で確認できます

### DBT ソリューション {#dbt-solution-1}

dbt ソリューションは RAW ソースデータからディメンショナルモデルを生成します。例外は、特定の dbt モデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド                                       | ビジネスロジック   |
|---------------------------------------------|------------------|
| カスタムアトリビューションフィールド（例: custom_sao） | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L176) |
| person_status_change                        | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L979) |
| is_mdf_campaign                             | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L1022) |
| report_opportunity_*                        | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L1034) |
| is_sales_dev_owned_record                   | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L1062) |

## Rpt_l2r_community_data {#rpt_l2r_community_data}

Zuora、Opportunity、Lead To Revenue データを結合してコミュニティ所有のオポチュニティとその関連データポイントに焦点を当てた Tableau 固有のテーブル。

### ユースケース {#use-cases-3}

1. コミュニティ主導の KPI の計算
1. コミュニティプロジェクト（SKU）別の KPI の分割

### 主要フィールド {#key-fields-3}

1. `Community_data_type` - このレコードが属する 3 つのコミュニティプロジェクトのどれかを決定するための SKU（product_rate_plan_id）のグルーピング
1. `Number_of_seats` - 特定のアカウント/ネームスペースのユーザーシートのカウント
1. `*_date_range_*` - KPI ステージ固有の日付集計
1. `Is_last_segment_version` - 問題のレコードが請求チャージの最新バージョンかどうかを示す T/F フラグ
1. `Subscription_order` - アカウントごとのサブスクリプションのインクリメント番号
1. `Is_first_subscription_institution` - 問題のレコードが特定のアカウントの最初のサブスクリプションかどうかを示す T/F フラグ

### 主要指標 {#key-metrics-3}

1. ディメンション別の Number_of_seats
1. アカウントごとのサブスクリプション数
1. ディメンション別の時間の経過に伴うサブスクリプション/オポチュニティのコンバージョン率

### データ系統 {#data-lineage-3}

1. データは SFDC からソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_l2r_community_data?g_v=1&g_i=\%2Brpt_l2r_community_data%2B)で確認できます

### DBT ソリューション {#dbt-solution-2}

dbt ソリューションは RAW ソースデータからディメンショナルモデルを生成します。例外は、特定の dbt モデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド                             | ビジネスロジック   |
|-----------------------------------|------------------|
| Community_data_type               | モデル内で定義済み |
| Number_of_seats                   | モデル内で定義済み |
| Subscription_order                | モデル内で定義済み |
| Is_first_subscription_institution | モデル内で定義済み |

## Rpt_l2r_prospects {#rpt_l2r_prospects}

rpt_lead_to_revenue のフィルタリングされたビューで、First Order Prospects に完全に焦点を当てた Tableau 固有のテーブル。

### ユースケース {#use-cases-4}

1. 特定のレコードのファネルステージの進行
1. 特定のファネルステージにあるレコードのカウント
1. ファネルステージ間の平均速度
1. 特定の属性に関するデータのコホート化

### 主要フィールド {#key-fields-4}

1. `lead_to_revenue_id` - このモデル内のユニーク行を識別するサロゲートキー
1. `[kpi]_date_range_*` - KPI 固有の日付集計
1. `bizible_mql_*` - MQL 日付の直前に発生した TP に関する Bizible TP データ
1. `bizible_most_recent_*` - 人物/オポチュニティの最新 TP に関する Bizible TP データ

### 主要指標 {#key-metrics-4}

1. ファネルステージ別のレコード数
1. 特定のファネルステージ間のタッチポイント数
1. ファネル全体の速度
1. ファネルステージのコンバージョン率

### データ系統 {#data-lineage-4}

1. データは SFDC からソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_l2r_prospects?g_v=1&g_i=%2Brpt_l2r_prospects%2B)で確認できます

### DBT ソリューション {#dbt-solution-3}

dbt ソリューションは RAW ソースデータからディメンショナルモデルを生成します。例外は、特定の dbt モデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド | ビジネスロジック |
|--------------------|------------------|
| `lead_to_revenue_id` | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_lead_to_revenue.sql#L699) |
| `kpi_date_range_*` | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_lead_to_revenue.sql#L703) |

## Wk_rpt_l2r_cohort_model {#wk_rpt_l2r_cohort_model}

現在 WIP の Tableau 固有のテーブルで、ファネルステージ間の速度とラグタイムを事前計算して rpt_lead_to_revenue データをコホート化します。コホート化されたコンバージョン率と KPI カウントの決定に完全に焦点を当てています。

### ユースケース {#use-cases-5}

1. コホート化された速度、コンバージョン率、KPI カウントの計算

### 主要フィールド {#key-fields-5}

1. `lead_to_revenue_id` - このモデル内のユニーク行を識別するサロゲートキー
1. `[kpi]_date_range_*` - KPI 固有の日付集計
1. `Kpi_to_kpi_days` - 特定の KPI/ファネルステージ間のラグタイム（日数）。コンバージョン速度も表します。

### 主要指標 {#key-metrics-5}

1. ファネルステージ別のレコード数
1. 特定のファネルステージ間のタッチポイント数
1. ファネル全体の速度
1. ファネルステージのコンバージョン率

### データ系統 {#data-lineage-5}

1. データは SFDC からソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.wk_rpt_l2r_cohort_model?g_v=1&g_i=%2Bwk_rpt_l2r_cohort_model%2B)で確認できます

### DBT ソリューション {#dbt-solution-4}

dbt ソリューションは RAW ソースデータからディメンショナルモデルを生成します。例外は、特定の dbt モデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド              | ビジネスロジック   |
|--------------------|------------------|
| lead_to_revenue_id | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_lead_to_revenue.sql#L699) |
| [kpi]_date_range_* | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_lead_to_revenue.sql#L703) |
| kpi_to_kpi_days    | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/workspaces/workspace_marketing/restricted_safe/wk_rpt_l2r_cohort_model.sql#L112) |
