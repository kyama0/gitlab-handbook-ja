---
title: マーケティングアナリティクスデータ - L2Rモデル
description: >-
  L2Rモデルグルーピングは、コアLead to Revenueモデルとそこから直接構築されたモデルで構成されています。
upstream_path: "/handbook/enterprise-data/marketing-analytics/marketing-analytics-data/marketing-analytics-data-l2r/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-27T16:37:34+01:00"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Rpt_lead_to_revenue

Lead to Revenueレポートは、主要なライフサイクルオブジェクト/マートの統合です: Person、Opportunity、Account、および両タイプのBizibleタッチポイント。結合されたオブジェクトに関するほぼすべてのセールスとマーケティングの指標とデータのワンストップショップです。ファネルの進行分析、データポイントと指標のコホート化、そしてリード作成からオポチュニティのクローズまでの真のファネルを1つのテーブルから作成することができます。

### ユースケース

1. 特定のレコードのファネルステージの進行
1. 特定のファネルステージにあるレコードのカウント
1. ファネルステージ間の平均速度
1. 特定の属性に関するデータのコホート化

### 主要フィールド

1. `lead_to_revenue_id` - このモデル内のユニーク行を識別するサロゲートキー
1. `[kpi]_date_range_*` - KPI固有の日付集計
1. `bizible_mql_*` - MQL日付の直前に発生したTPに関するBizible TPデータ
1. `bizible_most_recent_*` - person/opportunityの最新TPに関するBizible TPデータ

### 主要指標

1. ファネルステージ別のレコード数
1. 特定のファネルステージ間のタッチポイント数
1. ファネル全体の速度
1. ファネルステージのコンバージョン率

### データ系統

1. データはSFDCからソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_lead_to_revenue)で確認できます

### DBTソリューション

dbtソリューションはRAWソースデータからディメンショナルモデルを生成します。例外は、特定のdbtモデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド              | ビジネスロジック   |
|--------------------|------------------|
| lead_to_revenue_id | モデル内で定義済み |
| [kpi]_date_range_* | モデル内で定義済み |

## Rpt_l2r_campaign_interactions

L2Rキャンペーンインタラクションレポートテーブルは、person/バイヤーおよびアトリビューション/opportunityタッチポイントと関連するマートフィールドのプライマリunionを使用してベーステーブルを導出します。そこから、日時フィールドと関連するディメンションに対してさまざまな計算が実行されます。

### ユースケース

L2RはGitLabのキャンペーンレポーティングのベーステーブルです。タッチポイントを組み合わせることで、ファネルのトップからInfluenced SAOまでの単一ビューを作成できます。メール、コンテンツ、有料メディアの取り組みのコンフォーマンスの追跡に使用されます。

### 主要フィールド

1. `Person_order_type`
   1. is_first_order_person SFDCフィールドに基づくpersonレコードの派生オーダータイプ
1. `Touchpoint_type`
   1. 特定のタッチポイント/レコードがPerson/バイヤーまたはOpportunity/アトリビューションタッチポイントであるかの識別子
1. `カスタムアトリビューションフィールド（例: custom_sao）`
   1. モデル内の他の条件に基づくopportunityのタッチポイントのカスタムモデルウェイトを合計するための計算
1. `Person_status_change`
   1. あるステータスから別のステータスへのpersonレコードの進行を示す派生フィールド
1. `Is_mdf_campaign`
   1. レコードに関連するキャンペーンにMDF資金があるかどうかを示すT/Fフラグ
1. `report_opportunity_*`
   1. 適切な場所での履歴スナップショットデータを活用したopportunityのレポートベースの属性を示す派生フィールド
1. `Is_sales_dev_owned_record`
   1. レコードがSFDCのSales Devレプによって所有されているかどうかを示すT/Fフラグ
1. `*_date_range_*`
   1. 特定のレコードの特定のファネルステージの日付の事前定義された日付集計

### 主要指標

1. ディメンション別（キャンペーンタイプ、日付、オーダータイプなど）のレコード数/KPI合計
1. 特定のステージでのまたは特定のキャンペーンからのタッチポイント数
1. アトリビューションモデルとディメンション別の組み合わせ加重Net ARRまたはアトリビューションタッチポイント

### データ系統

1. データはSFDCとL2Rからソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_l2r_campaign_interactions)で確認できます

| フィールド                                       | ビジネスロジック   |
|---------------------------------------------|------------------|
| カスタムアトリビューションフィールド（例: custom_sao） | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L176) |
| person_status_change                        | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L979) |
| is_mdf_campaign                             | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L1022) |
| report_opportunity_*                        | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L1034) |
| is_sales_dev_owned_record                   | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L1062) |

## Rpt_l2r_campaign_interactions_paid_account

現在の支払いアカウントのみにフィルタリングされたrpt_l2r_campaign_interactionsのフィルタリング版。

### ユースケース

L2RはGitLabの顧客固有のキャンペーンレポーティングのベーステーブルです。タッチポイントを組み合わせることで、ファネルのトップからInfluenced SAOまでの単一ビューを作成できます。メール、コンテンツ、有料メディアの取り組みのコンフォーマンスの追跡に使用されます。

### 主要フィールド

1. `Person_order_type`
   1. is_first_order_person SFDCフィールドに基づくpersonレコードの派生オーダータイプ
1. `Touchpoint_type`
   1. 特定のタッチポイント/レコードがPerson/バイヤーまたはOpportunity/アトリビューションタッチポイントであるかの識別子
1. `カスタムアトリビューションフィールド（例: custom_sao）`
   1. モデル内の他の条件に基づくopportunityのタッチポイントのカスタムモデルウェイトを合計するための計算
1. `Person_status_change`
   1. あるステータスから別のステータスへのpersonレコードの進行を示す派生フィールド
1. `Is_mdf_campaign`
   1. レコードに関連するキャンペーンにMDF資金があるかどうかを示すT/Fフラグ
1. `report_opportunity_*`
   1. 適切な場所での履歴スナップショットデータを活用したopportunityのレポートベースの属性を示す派生フィールド
1. `Is_sales_dev_owned_record`
   1. レコードがSFDCのSales Devレプによって所有されているかどうかを示すT/Fフラグ
1. `*_date_range_*`
   1. 特定のレコードの特定のファネルステージの日付の事前定義された日付集計

### 主要指標

1. ディメンション別（キャンペーンタイプ、日付、オーダータイプなど）のレコード数/KPI合計
1. 特定のステージでのまたは特定のキャンペーンからのタッチポイント数
1. アトリビューションモデルとディメンション別の組み合わせ加重Net ARRまたはアトリビューションタッチポイント

### データ系統

1. データはSFDCからソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_l2r_campaign_interactions_paid_account?g_v=1&g_i=\%2Brpt_l2r_campaign_interactions_paid_account%2B)で確認できます

### DBTソリューション

dbtソリューションはRAWソースデータからディメンショナルモデルを生成します。例外は、特定のdbtモデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド                                       | ビジネスロジック   |
|---------------------------------------------|------------------|
| カスタムアトリビューションフィールド（例: custom_sao） | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L176) |
| person_status_change                        | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L979) |
| is_mdf_campaign                             | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L1022) |
| report_opportunity_*                        | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L1034) |
| is_sales_dev_owned_record                   | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_l2r_campaign_interactions.sql#L1062) |

## Rpt_l2r_community_data

Zuora、Opportunity、Lead To Revenueデータを結合してコミュニティ所有のオポチュニティとその関連データポイントに焦点を当てたTableau固有のテーブル。

### ユースケース

1. コミュニティ主導のKPIの計算
1. コミュニティプロジェクト（SKU）別のKPIの分割

### 主要フィールド

1. `Community_data_type` - このレコードが属する3つのコミュニティプロジェクトのどれかを決定するためのSKU（product_rate_plan_id）のグルーピング
1. `Number_of_seats` - 特定のアカウント/ネームスペースのユーザーシートのカウント
1. `*_date_range_*` - KPIステージ固有の日付集計
1. `Is_last_segment_version` - 問題のレコードが請求チャージの最新バージョンかどうかを示すT/Fフラグ
1. `Subscription_order` - アカウントごとのサブスクリプションのインクリメント番号
1. `Is_first_subscription_institution` - 問題のレコードが特定のアカウントの最初のサブスクリプションかどうかを示すT/Fフラグ

### 主要指標

1. ディメンション別のNumber_of_seats
1. アカウントごとのサブスクリプション数
1. ディメンション別の時間の経過に伴うサブスクリプション/オポチュニティのコンバージョン率

### データ系統

1. データはSFDCからソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_l2r_community_data?g_v=1&g_i=\%2Brpt_l2r_community_data%2B)で確認できます

### DBTソリューション

dbtソリューションはRAWソースデータからディメンショナルモデルを生成します。例外は、特定のdbtモデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド                             | ビジネスロジック   |
|-----------------------------------|------------------|
| Community_data_type               | モデル内で定義済み |
| Number_of_seats                   | モデル内で定義済み |
| Subscription_order                | モデル内で定義済み |
| Is_first_subscription_institution | モデル内で定義済み |

## Rpt_l2r_prospects

rpt_lead_to_revenueのフィルタリングされたビューで、First Order Prospectsに完全に焦点を当てたTableau固有のテーブル。

### ユースケース

1. 特定のレコードのファネルステージの進行
1. 特定のファネルステージにあるレコードのカウント
1. ファネルステージ間の平均速度
1. 特定の属性に関するデータのコホート化

### 主要フィールド

1. `lead_to_revenue_id` - このモデル内のユニーク行を識別するサロゲートキー
1. `[kpi]_date_range_*` - KPI固有の日付集計
1. `bizible_mql_*` - MQL日付の直前に発生したTPに関するBizible TPデータ
1. `bizible_most_recent_*` - person/opportunityの最新TPに関するBizible TPデータ

### 主要指標

1. ファネルステージ別のレコード数
1. 特定のファネルステージ間のタッチポイント数
1. ファネル全体の速度
1. ファネルステージのコンバージョン率

### データ系統

1. データはSFDCからソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_l2r_prospects?g_v=1&g_i=%2Brpt_l2r_prospects%2B)で確認できます

### DBTソリューション

dbtソリューションはRAWソースデータからディメンショナルモデルを生成します。例外は、特定のdbtモデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド | ビジネスロジック |
|--------------------|------------------|
| `lead_to_revenue_id` | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_lead_to_revenue.sql#L699) |
| `kpi_date_range_*` | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_lead_to_revenue.sql#L703) |

## Wk_rpt_l2r_cohort_model

現在WIPのTableau固有のテーブルで、ファネルステージ間の速度とラグタイムを事前計算してrpt_lead_to_revenueデータをコホート化します。コホート化されたコンバージョン率とKPIカウントの決定に完全に焦点を当てています。

### ユースケース

1. コホート化された速度、コンバージョン率、KPIカウントの計算

### 主要フィールド

1. `lead_to_revenue_id` - このモデル内のユニーク行を識別するサロゲートキー
1. `[kpi]_date_range_*` - KPI固有の日付集計
1. `Kpi_to_kpi_days` - 特定のKPI/ファネルステージ間のラグタイム（日数）。コンバージョン速度も表します。

### 主要指標

1. ファネルステージ別のレコード数
1. 特定のファネルステージ間のタッチポイント数
1. ファネル全体の速度
1. ファネルステージのコンバージョン率

### データ系統

1. データはSFDCからソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.wk_rpt_l2r_cohort_model?g_v=1&g_i=%2Bwk_rpt_l2r_cohort_model%2B)で確認できます

### DBTソリューション

dbtソリューションはRAWソースデータからディメンショナルモデルを生成します。例外は、特定のdbtモデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド              | ビジネスロジック   |
|--------------------|------------------|
| lead_to_revenue_id | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_lead_to_revenue.sql#L699) |
| [kpi]_date_range_* | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/restricted_safe/rpt_lead_to_revenue.sql#L703) |
| kpi_to_kpi_days    | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/workspaces/workspace_marketing/restricted_safe/wk_rpt_l2r_cohort_model.sql#L112) |
