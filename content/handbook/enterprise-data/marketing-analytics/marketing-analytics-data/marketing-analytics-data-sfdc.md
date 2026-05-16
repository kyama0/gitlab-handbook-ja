---
title: マーケティングアナリティクスデータ - SFDCモデル
description: >-
  SFDCモデルグルーピングは、Salesforceソースオブジェクトから構築されたモデルを指定するために使用されます。
upstream_path: "/handbook/enterprise-data/marketing-analytics/marketing-analytics-data/marketing-analytics-data-sfdc/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-27T16:37:34+01:00"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Mart_crm_attribution_touchpoint

アトリビューションタッチポイントマートは、Marketo Measure（Bizible）のアトリビューションタッチポイントデータの統合リポジトリです。アトリビューションタッチポイントは、SFDCのOpportunityに関連付けられたタッチポイントです。このマートを使用すると、どちらかのライフサイクル全体を通じてOpportunityまたはアカウントごとのエンゲージメントを分析できます。

### ユースケース

1. 帰属ARR
1. 特定のステージでのタッチポイント

### 主要フィールド

1. アトリビューションタッチポイント
   1. SFDCのOpportunityに関連付けられたBizible（Marketo Measure）を通じて取得されたエンゲージメントの記録
1. Net ARR
   1. 定義
1. アトリビューションモデル
   1. [Bizible定義](https://experienceleague.adobe.com/en/docs/marketo-measure/using/introduction-to-marketo-measure/overview-resources/marketo-measure-attribution-models)
   1. リニア
      1. レコードに関連するすべてのタッチポイントに均等に配分されたウェイト/アトリビューション
1. Is MGP Channel Based
   1. First Orderについては少なくとも2つのユニークなマーケティングチャネルタッチポイント、Growthオポチュニティについては3つのユニークなマーケティングチャネルタッチポイントが、パイプライン作成日から365日以内にある
1. Is MGP Opportunity
   1. Is MGP Channel Based = TRUEかつSales Qualified Source = SDR
1. GitLabモデルウェイト
1. タイムディケイモデルウェイト
1. データ駆動モデルウェイト
1. タッチポイントセールスステージ
   1. タッチポイントが発生したセールスファネルステージ
1. Is FMM Influenced
   1. 特定のタッチポイントがFMMの取り組みによって影響を受けているかどうか
1. Is FMM Sourced
   1. 特定のタッチポイントがFMMの取り組みからソーシングされているかどうか

### 主要指標

1. 帰属ウェイト
   1. 参照しているアトリビューションモデルに基づく特定のタッチポイントのウェイト
1. 帰属Net ARR
   1. 参照しているアトリビューションモデルに基づく帰属Net ARR

### データ系統

1. データはSFDCとBizible/Marketo Measureからソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_attribution_touchpoint?g_v=1&g_i=%2Bmart_crm_attribution_touchpoint%2B)で確認できます

### DBTソリューション

dbtソリューションはRAWソースデータからディメンショナルモデルを生成します。例外は、特定のdbtモデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド                  | ビジネスロジック   |
|------------------------|------------------|
| touchpoint_sales_stage | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L114) |
| is_mgp_opportunity     | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common/facts_sales_and_marketing/fct_crm_attribution_touchpoint.sql#L191) |
| is_fmm_influenced      | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L322) |
| is_fmm_sourced         | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L331) |

## Mart_crm_event

SFDCイベントマートはSFDCからのイベントデータの整理・フォーマットされた統合です。イベントはSFDCのアクティビティの一形態で、通常は会議（デジタルまたは対面）に関連しています。

### ユースケース

1. Opportunityライフサイクルにおけるイベントのボリューム/タイムライン
1. OpportunityをClosed Wonに向けて進めるための特定のイベントの有効性

### 主要フィールド

1. sales_dev_rep_*
   1. SFDCからの関連するSales Devレプとそのマネージャーの情報

### 主要指標

1. イベント数（`dim_crm_event_pk`）

### データ系統

1. データはSFDCからソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_event?g_v=1&g_i=%2Bmart_crm_event%2B)で確認できます

### DBTソリューション

dbtソリューションはRAWソースデータからディメンショナルモデルを生成します。

## Mart_crm_person

SFDCのリードとコンタクトを統合されたPersonオブジェクトにシームレスに組み合わせたもの。このマートを使用すると、両方のSFDCオブジェクトに1つのテーブルで素早く簡単にアクセスできます。また、Bizible/Marketo Measure、Marketo、その他のGitLabテックスタックソースからのIDの情報も統合されています。

### ユースケース

1. 特定のファネルステージにあるpeople数
1. ファネルを通じた特定のpersonレコードの進行
1. あるファネルステージから次へのコンバージョン

### 主要フィールド

1. `Dim_crm_person_id` - 各personレコードのユニークサロゲートキー

### 主要指標

1. MQL数
1. Inquiry数
1. InquiryからMQLへのコンバージョン

### データ系統

1. データはSFDCからソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_person?g_v=1&g_i=%2Bmart_crm_person%2B)で確認できます

### DBTソリューション

dbtソリューションはRAWソースデータからディメンショナルモデルを生成します。例外は、特定のdbtモデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド                     | ビジネスロジック   |
|---------------------------|------------------|
| is_lead_source_trial      | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_person.sql#L250) |
| is_abm_tier_inquiry       | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common/facts_sales_and_marketing/fct_crm_person.sql#L420) |
| is_abm_tier_mql           | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common/facts_sales_and_marketing/fct_crm_person.sql#L447) |
| person_first_country      | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_prep/prep_crm_person.sql#L584) |
| is_exclude_from_reporting | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_prep/prep_crm_person.sql#L608) |

## Mart_crm_tasks

SFDCタスクマートはSFDCからのタスクデータの整理・フォーマットされた統合です。タスクは通常、Sales DevまたはSealesチームによる実行されたアクションや行われたエンゲージメントに関するメモです。

### ユースケース

1. Opportunityライフサイクルにおけるタスクのボリューム/タイムライン
1. OpportunityをClosed Wonに向けて進めるための特定のタスクの有効性

### 主要フィールド

1. sales_dev_rep_*
   1. SFDCからの関連するSales Devレプとそのマネージャーの情報

### 主要指標

1. タスク数（`dim_crm_task_pk`）

### DBT系統

1. データはSFDCからソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_task?g_v=1&g_i=%2Bmart_crm_task%2B)で確認できます

### DBTソリューション

dbtソリューションはRAWソースデータからディメンショナルモデルを生成します。

## Mart_crm_touchpoint

Person/バイヤータッチポイントマートは、Marketo Measure（Bizible）のPerson/バイヤータッチポイントデータの統合リポジトリです。Person/バイヤータッチポイントは、組織が重要/取得可能なエンゲージメントに対して設定したルールに基づいてPerson（リード/コンタクト）に関連付けられたエンゲージメントです。

### ユースケース

1. 特定のステージでのタッチポイント
1. レコードごとのタッチポイント

### 主要フィールド

1. バイヤー（Person）タッチポイント
   1. SFDCのPerson（リード/コンタクト）に関連付けられたBizible（Marketo Measure）を通じて取得されたエンゲージメントの記録
1. アトリビューションモデル
   1. [Bizible定義](https://experienceleague.adobe.com/en/docs/marketo-measure/using/introduction-to-marketo-measure/overview-resources/marketo-measure-attribution-models)
   1. リニア
      1. レコードに関連するすべてのタッチポイントに均等に配分されたウェイト/アトリビューション
1. Is FMM Influenced
   1. 特定のタッチポイントがFMMの取り組みによって影響を受けているかどうか
1. Is FMM Sourced
   1. 特定のタッチポイントがFMMの取り組みからソーシングされているかどうか

### 主要指標

1. 帰属ウェイト
   1. 参照しているアトリビューションモデルに基づく特定のタッチポイントのウェイト

### データ系統

1. データはSFDCとBizible/Marketo Measureからソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_touchpoint?g_v=1&g_i=%2Bmart_crm_touchpoint%2B)で確認できます

### DBTソリューション

dbtソリューションはRAWソースデータからディメンショナルモデルを生成します。例外は、特定のdbtモデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド             | ビジネスロジック   |
|-------------------|------------------|
| is_fmm_influenced | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L311) |
| is_fmm_sourced    | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L320) |
