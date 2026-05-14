---
title: "エンジニアリングアナリティクスデータガイド"
description: 主要なエンジニアリングデータソースとデータモデルの概要
upstream_path: /handbook/product/groups/product-analysis/engineering/data-guide/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

## はじめに

Product Data Insights は、エンジニアリングが製品をどれだけうまく構築できているかを理解するために、アナリティクス機能を構築・進化させ、インサイトを作成する責任を持っています。この文脈での「うまさ」は、効率性とコストの観点で測定されます。

## データソース

メトリクスを支える具体的なデータソースを探索することで、アナリティクスに深く入り込んでください。

- [GitLab.com](https://internal.gitlab.com/handbook/enterprise-data/platform/pipelines/saas-gitlab-com/) データは、MR Rate やパフォーマンス KPI などのメトリクスのレポーティングに使用されます
- [Workday](https://www.myworkday.com/gitlab/) は GitLab の現在の中央 HRIS で、チームメンバーがどのグループに属しているかを判断するためにこのデータを使用します。
- Zendesk データは、Customer Support のメトリクスを支えるために使用されます。

## MR と Issue のカウント方法

ほとんどのエンジニアリングメトリクスでは、内部プロジェクト、具体的には製品に影響を与えるプロジェクトのみをレポートしています。「内部」と見なされるものは、2 つのファイルで定義されます:

- [internal_gitlab_projects.csv](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_data/internal_gitlab_projects.csv)
- [internal_gitlab_namespaces.csv](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_data/internal_gitlab_namespaces.csv)

プロジェクトまたは名前空間がこれらの CSV のいずれかにリストされていない場合、それらのデータは取得しません。それは、タイトル、ラベル、説明などが表示されないことを意味します。プロジェクトまたはグループを含めたい場合は、MR を開いてアナリストに ping する必要があります。ファイルに具体的にリストされたプロジェクトと名前空間のみがデータに含まれます (子グループは別途追加する必要があります)。MR がマージされたら、その時点以降、新しいグループ/プロジェクトのデータが取得されるようになります (履歴のバックフィルはありません)。ソースおよび下流のモデルのフルリフレッシュも行う必要があります (バックフィル[例の Issue](https://gitlab.com/gitlab-data/analytics/-/issues/22244))。「内部」とは何かについての詳細は[こちら](https://internal.gitlab.com/handbook/enterprise-data/platform/pipelines/#internal-only-filtering)を参照してください。その後、エンジニアリングメトリクスをさらに絞り込み、製品に直接影響を与えるプロジェクトに焦点を当てます。それらは以下のファイルにリストされています。

- [projects_part_of_product.csv](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_engineering/projects_part_of_product.csv)

現在、以下の名前空間がメトリクスに含まれています:

| 名前空間名 | 名前空間パス |
|-----------------|-----------------|
| GitLab.org | gitlab-org |
| GitLab.com | gitlab-com |
| GitLab Chef Cookbooks | gitlab-cookbooks |
| GitLab components | components |

### よくある質問

| 質問        | 解決策        |
|-----------------|-----------------|
| 私のプロジェクトの Issue が表示されません    | プロジェクトを上記の seed ファイルに含める必要があります。    |
| Issue は表示されますが、メタデータが表示されません    | 内部プロジェクトのデータのみが取り込まれます。   |
| ラベルが流れて表示されません    | ラベルが作成されているグループ/プロジェクトを確認してください。グループ/プロジェクトは seed ファイルにリストされている必要があります。    |

## データモデル

このセクションでは、多くのダッシュボードを支えるよく使われるデータモデルを共有します。

### workspace_engineering.engineering_merge_requests

- **説明**: このテーブルは、製品に直接影響を与えるすべてのマージリクエストにフィルタリングされています。
- **粒度**: マージリクエストごとに 1 行
- **ドキュメント**: https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.engineering_merge_requests

### workspace_engineering.internal_merge_requests

- **説明**: このテーブルは、GitLab のすべての内部マージリクエストにフィルタリングされています
- **粒度**: マージリクエストごとに 1 行
- **ドキュメント**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.internal_merge_requests)

### workspace_engineering.engineering_issues

- **説明**: このテーブルは、製品に直接影響を与えるすべての Issue にフィルタリングされています。
- **粒度**: Issue ごとに 1 行
- **ドキュメント**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.engineering_issues)

### workspace_engineering.internal_issues

- **説明**: このテーブルは、GitLab のすべての内部 Issue にフィルタリングされています
- **粒度**: Issue ごとに 1 行
- **ドキュメント**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.internal_issues)

### workspace_engineering.internal_notes

- **説明**: GitLab.com の Epics、Issues、Merge Requests からのノートを含むテーブル。名前空間 ID と最上位の親名前空間 ID を含みます。
- **粒度**: Issue ごとに 1 行
- **ドキュメント**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.internal_notes)

### workspace_engineering.agg_mttr_mttm

- **説明**: このテーブルは Mean Time to Resolve (MTTR) と Mean Time to Merge (MTTM) を計算します
- **粒度**: Issue ごとに 1 行
- **ドキュメント**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.agg_mttr_mttm)

### workspace_engineering.issues_history

- **説明**: gitlab.com の内部 Issue の年齢メトリクスと関連メタデータを含むテーブル。Engineering Allocation や Corrective Actions などのために、内部作業の進捗を追跡するのに使用されます。これらのメトリクスは個々の Issue について日次レベルで利用可能で、そこから集計できます
- **粒度**: Issue ごと、日ごとに 1 行
- **ドキュメント**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.issues_history)

### workspace_engineering.merge_request_rate

- **説明**: 部署とグループごとのマージリクエストレートを含むモデル。
- **粒度**: 粒度レベル (部署、グループ) ごと、月ごと、MR レートごとに 1 行
- **ドキュメント**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.issues_history)

### workspace_engineering.open_merge_request_review_time

- **説明**: 部署とグループごとのマージリクエストレートを含むモデル。
- **粒度**: MR ごと、日ごとに 1 行
- **ドキュメント**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.open_merge_request_review_time)

## Zendesk データ

### PREP.zendesk.zendesk_ticket_audits_source

- **説明**: チケットごとの SLA ポリシーと優先度
- **粒度**: 監査ごとに 1 行
- **ドキュメント**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.zendesk_ticket_audits_source)

### PREP.zendesk.zendesk_tickets_source

- **説明**: Zendesk チケットデータ
- **粒度**: 監査ごとに 1 行
- **ドキュメント**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.zendesk_tickets_source)

### PREP.zendesk.zendesk_ticket_metrics_source

- **説明**: Zendesk チケットデータ
- **粒度**: 監査ごとに 1 行
- **ドキュメント**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.zendesk_ticket_metrics_source)

### PREP.zendesk.zendesk_sla_policies_source

- **説明**: SLA ポリシー
- **粒度**: 監査ごとに 1 行
- **ドキュメント**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.zendesk_sla_policies_source)

### workspace_engineering.zendesk_frt

- **説明**: First Reply Time (FRT) メトリクスを計算するために構築されたモデル。
- **粒度**: Zendesk チケットごとに 1 行
- **ドキュメント**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.zendesk_frt)

## 追加のリソース

- [Data governance](/handbook/sales/field-operations/data-intelligence/data-governance/)
- [Data quality](/handbook/enterprise-data/data-governance/data-quality/)
- [Data Team Handbook](/handbook/enterprise-data/)
- [DBT Docs](https://dbt.gitlabdata.com/#!/overview) - このリソースには、利用可能なすべての dbt モデルに関する包括的なドキュメントが含まれています。これは私たちのモデルを理解するための素晴らしい出発点です。具体的なエンジニアリングアナリティクスモデルについては、出発点として「よく使われるデータモデル」セクションを参照してください。
- Data チームが管理する [Data Guides](/handbook/enterprise-data/data-governance/data-catalog)。
- [データパイプラインのドキュメント](/handbook/enterprise-data/platform/pipelines/) は技術的に興味のあるアナリスト向けです。このページでは、各データソースと抽出の詳細について説明しています。連絡先
- [Tableau Developer Guide](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/) - 日付の取り扱い、ハンドブックの埋め込み、一般的なヒントとコツ
- [Tableau Style Guide](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/tableau-style-guide/)

### リポジトリショートカット

- [Performance Indicator ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/performance_indicators?ref_type=heads)
- [Performance Indicator ページショートコード](https://gitlab.com/gitlab-com/content-sites/handbook/-/tree/main/layouts/partials/performance-indicators)
- [Performance Indicator ページジェネレーター](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/layouts/shortcodes/performance-indicators.md?ref_type=heads&plain=1)
- [Performance Indicator ページ](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/performance_indicators?ref_type=heads )

質問がある場合は、`#g_engineering_analytics` にお気軽にお寄せいただくか、私たちのチーム宛に[新しい Issue](https://gitlab.com/gitlab-org/quality/engineering-analytics/team-tasks/-/issues/new) を開いてください。
