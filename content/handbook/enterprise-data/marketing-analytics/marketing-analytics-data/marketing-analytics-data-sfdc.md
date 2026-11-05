---
title: Marketing Analytics データ - SFDC モデル
description: >-
  SFDC モデルグルーピングは、Salesforce ソースオブジェクトから構築されたモデルを指定するために使用されます。
upstream_path: "/handbook/enterprise-data/marketing-analytics/marketing-analytics-data/marketing-analytics-data-sfdc/"
upstream_sha: "ab93800e4c241789ac67785899fa20ffa1eb0854"
translated_at: "2026-11-05T14:56:31.098154+00:00"
translator: claude
stale: false
lastmod: "2026-11-04T20:19:30+01:00"
---

## Mart_crm_attribution_touchpoint {#mart_crm_attribution_touchpoint}

アトリビューションタッチポイントマートは、Marketo Measure（Bizible）のアトリビューションタッチポイントデータの統合リポジトリです。アトリビューションタッチポイントは、SFDC の Opportunity に関連付けられたタッチポイントです。このマートを使用すると、どちらかのライフサイクル全体を通じて Opportunity またはアカウントごとのエンゲージメントを分析できます。

### ユースケース {#use-cases}

1. 帰属 ARR
1. 特定のステージでのタッチポイント

### 主要フィールド {#key-fields}

1. アトリビューションタッチポイント
   1. SFDC の Opportunity に関連付けられた Bizible（Marketo Measure）を通じて取得されたエンゲージメントの記録
1. Net ARR
   1. 定義
1. アトリビューションモデル
   1. [Bizible 定義](https://experienceleague.adobe.com/en/docs/marketo-measure/using/introduction-to-marketo-measure/overview-resources/marketo-measure-attribution-models)
   1. リニア
      1. レコードに関連するすべてのタッチポイントに均等に配分されたウェイト/アトリビューション
1. Is MGP Channel Based
   1. First Order については少なくとも 2 つのユニークなマーケティングチャネルタッチポイント、Growth オポチュニティについては少なくとも 3 つのユニークなマーケティングチャネルタッチポイントが、パイプライン作成日前 365 日間の範囲内にある
1. Is MGP Opportunity
   1. Is MGP Channel Based = TRUE かつ Sales Qualified Source = SDR
1. GitLab モデルウェイト
1. タイムディケイモデルウェイト
1. データ駆動モデルウェイト
1. タッチポイントセールスステージ
   1. タッチポイントが発生したセールスファネルステージ
1. Is FMM Influenced
   1. 特定のタッチポイントが FMM の取り組みによって影響を受けているかどうか
1. Is FMM Sourced
   1. 特定のタッチポイントが FMM の取り組みからソーシングされているかどうか

### 主要指標 {#key-metrics}

1. 帰属ウェイト
   1. 参照しているアトリビューションモデルに基づく特定のタッチポイントのウェイト
1. 帰属 Net ARR
   1. 参照しているアトリビューションモデルに基づく帰属 Net ARR

### データ系統 {#data-lineage}

1. データは SFDC と Bizible/Marketo Measure からソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_attribution_touchpoint?g_v=1&g_i=%2Bmart_crm_attribution_touchpoint%2B)で確認できます

### DBT ソリューション {#dbt-solution}

dbt ソリューションは RAW ソースデータからディメンショナルモデルを生成します。例外は、特定の dbt モデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド                  | ビジネスロジック   |
|------------------------|------------------|
| touchpoint_sales_stage | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L114) |
| is_mgp_opportunity     | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common/facts_sales_and_marketing/fct_crm_attribution_touchpoint.sql#L191) |
| is_fmm_influenced      | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L322) |
| is_fmm_sourced         | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L331) |

## Mart_crm_event {#mart_crm_event}

SFDC イベントマートは SFDC からのイベントデータの整理・フォーマットされた統合です。イベントは SFDC のアクティビティの一形態で、通常は会議（デジタルまたは対面）に関連しています。

### ユースケース {#use-cases-1}

1. Opportunity ライフサイクルにおけるイベントのボリューム/タイムライン
1. Opportunity を Closed Won に向けて進めるための特定のイベントの有効性

### 主要フィールド {#key-fields-1}

1. sales_dev_rep_*
   1. SFDC からの関連する Sales Dev Rep とその Manager の情報

### 主要指標 {#key-metrics-1}

1. イベント数（`dim_crm_event_pk`）

### データ系統 {#data-lineage-1}

1. データは SFDC からソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_event?g_v=1&g_i=%2Bmart_crm_event%2B)で確認できます

### DBT ソリューション {#dbt-solution-1}

dbt ソリューションは RAW ソースデータからディメンショナルモデルを生成します。

## Mart_crm_person {#mart_crm_person}

SFDC のリードとコンタクトを統合された Person オブジェクトにシームレスに組み合わせたもの。このマートを使用すると、両方の SFDC オブジェクトに 1 つのテーブルで素早く簡単にアクセスできます。また、Bizible/Marketo Measure、Marketo、その他の GitLab Tech Stack ソースからの ID の情報も統合されています。

### ユースケース {#use-cases-2}

1. 特定のファネルステージにある人数
1. ファネルを通じた特定の人物レコードの進行
1. あるファネルステージから次へのコンバージョン

### 主要フィールド {#key-fields-2}

1. `Dim_crm_person_id` - 各人物レコードのユニークサロゲートキー

### 主要指標 {#key-metrics-2}

1. MQL 数
1. Inquiry 数
1. Inquiry から MQL へのコンバージョン

### データ系統 {#data-lineage-2}

1. データは SFDC からソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_person?g_v=1&g_i=%2Bmart_crm_person%2B)で確認できます

### DBT ソリューション {#dbt-solution-2}

dbt ソリューションは RAW ソースデータからディメンショナルモデルを生成します。例外は、特定の dbt モデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド                     | ビジネスロジック   |
|---------------------------|------------------|
| is_lead_source_trial      | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_person.sql#L250) |
| is_abm_tier_inquiry       | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common/facts_sales_and_marketing/fct_crm_person.sql#L420) |
| is_abm_tier_mql           | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common/facts_sales_and_marketing/fct_crm_person.sql#L447) |
| person_first_country      | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_prep/prep_crm_person.sql#L584) |
| is_exclude_from_reporting | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_prep/prep_crm_person.sql#L608) |

## Mart_crm_tasks {#mart_crm_tasks}

SFDC タスクマートは SFDC からのタスクデータの整理・フォーマットされた統合です。タスクは通常、Sales Dev または Sales チームによる実行されたアクションや行われたエンゲージメントに関するメモです。

### ユースケース {#use-cases-3}

1. Opportunity ライフサイクルにおけるタスクのボリューム/タイムライン
1. Opportunity を Closed Won に向けて進めるための特定のタスクの有効性

### 主要フィールド {#key-fields-3}

1. sales_dev_rep_*
   1. SFDC からの関連する Sales Dev Rep とその Manager の情報

### 主要指標 {#key-metrics-3}

1. タスク数（`dim_crm_task_pk`）

### DBT 系統 {#dbt-lineage}

1. データは SFDC からソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_task?g_v=1&g_i=%2Bmart_crm_task%2B)で確認できます

### DBT ソリューション {#dbt-solution-3}

dbt ソリューションは RAW ソースデータからディメンショナルモデルを生成します。

## Mart_crm_touchpoint {#mart_crm_touchpoint}

Person/バイヤータッチポイントマートは、Marketo Measure（Bizible）の Person/バイヤータッチポイントデータの統合リポジトリです。Person/バイヤータッチポイントは、組織が重要/取得可能なエンゲージメントに対して設定したルールに基づいて Person（リード/コンタクト）に関連付けられたエンゲージメントです。

### ユースケース {#use-cases-4}

1. 特定のステージでのタッチポイント
1. レコードごとのタッチポイント

### 主要フィールド {#key-fields-4}

1. バイヤー（Person）タッチポイント
   1. SFDC の Person（リード/コンタクト）に関連付けられた Bizible（Marketo Measure）を通じて取得されたエンゲージメントの記録
1. アトリビューションモデル
   1. [Bizible 定義](https://experienceleague.adobe.com/en/docs/marketo-measure/using/introduction-to-marketo-measure/overview-resources/marketo-measure-attribution-models)
   1. リニア
      1. レコードに関連するすべてのタッチポイントに均等に配分されたウェイト/アトリビューション
1. Is FMM Influenced
   1. 特定のタッチポイントが FMM の取り組みによって影響を受けているかどうか
1. Is FMM Sourced
   1. 特定のタッチポイントが FMM の取り組みからソーシングされているかどうか

### 主要指標 {#key-metrics-4}

1. 帰属ウェイト
   1. 参照しているアトリビューションモデルに基づく特定のタッチポイントのウェイト

### データ系統 {#data-lineage-3}

1. データは SFDC と Bizible/Marketo Measure からソーシングされています
1. 完全な系統は[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_touchpoint?g_v=1&g_i=%2Bmart_crm_touchpoint%2B)で確認できます

### DBT ソリューション {#dbt-solution-4}

dbt ソリューションは RAW ソースデータからディメンショナルモデルを生成します。例外は、特定の dbt モデル内で実装されたビジネスロジックに基づいて計算される以下のフィールドです:

| フィールド             | ビジネスロジック   |
|-------------------|------------------|
| is_fmm_influenced | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L311) |
| is_fmm_sourced    | [モデル内で定義済み](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L320) |
