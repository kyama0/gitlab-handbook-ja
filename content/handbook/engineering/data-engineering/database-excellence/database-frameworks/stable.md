---
title: データベースグループ ステーブルカウンターパート
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-frameworks/stable/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T04:23:44Z"
translator: claude
stale: false
---

## 概要

Core Platform 部門の中心的な考え方は、他のチームがデータベースなどの分野でより自立できるよう支援することです。データベースグループは、データベース設計、クエリの効率化、データベースツールなどの分野でサポートを提供するために存在します。他のグループにデータベースの専門知識を提供する際の効率を高め、[責任の分散](https://en.wikipedia.org/wiki/Diffusion_of_responsibility)を避けるために、データベースのステーブルカウンターパートのリストと各チームメンバーが担当する専門領域を提供しています。

### ステーブルカウンターパート

データベースに関するサポートが必要な場合は、以下の表で該当領域を担当するステーブルカウンターパートをご確認ください。担当者が記載されていない場合は、[#g_database](https://gitlab.slack.com/archives/CNZ8E900G) Slack チャンネルまで直接お問い合わせください。

#### ステーブルカウンターパートの責務

1. トピックをフォローし、最新の更新を把握する（全員が全てを把握する必要がなくなるため効率が向上します）
1. 各グループと積極的に協力する（例：データベース設計の実装）
1. トピックからの作業を私たちのグループに落とし込み、必要に応じてグループの他のメンバーに参加を依頼する

| 機能（アルファベット順） | ステーブルカウンターパート | GitLab ハンドル |
| --- | --- | --- |
| [AI Tanuki Bot](https://gitlab.com/groups/gitlab-org/-/epics/10234) | Matt Kasa | @mattkasa |
| [Background Migrations](https://gitlab.com/groups/gitlab-org/-/epics/6751) | Diogo Frazão | @dfrazao-gitlab |
| [CI Partitioning](https://gitlab.com/groups/gitlab-org/-/epics/7522) | Simon Tomlinson | @stomlinson |
| [Consumables Management（ストレージ、コンピュート、シート、使用量など）](https://about.gitlab.com/direction/fulfillment/#fulfillment-sections-current-focus-fy22-q3) | Kras Angelov | @krasio |
| [Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/) | Simon Tomlinson | @stomlinson |
| [Database Testing Framework](https://docs.gitlab.com/ee/architecture/blueprints/database_testing/) | Matt Kasa | @mattkasa |
| [Database query intercepter](https://gitlab.com/gitlab-org/database-team/query-intercepter) | Jon Jenkins | @jon_jenkins |
| [Embeddings Database](https://gitlab.com/groups/gitlab-org/-/epics/10240) | Matt Kasa | @mattkasa |
| [Primary Key Migrations](https://gitlab.com/groups/gitlab-org/-/epics/4785) | Kras Angelov | @krasio |
| [Table Size Reduction](https://gitlab.com/groups/gitlab-org/-/epics/6211) | Simon Tomlinson | @stomlinson |
| [Vulnerability Management](https://about.gitlab.com/direction/software_supply_chain_security/) | Simon Tomlinson | @stomlinson |
| [Work Items](https://docs.gitlab.com/ee/architecture/blueprints/work_items/) | Matt Kasa | @mattkasa |
