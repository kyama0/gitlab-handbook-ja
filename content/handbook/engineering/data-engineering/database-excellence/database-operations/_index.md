---
title: "Database Operations チーム"
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-operations/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-07T17:41:36+00:00"
---

## ミッション

GitLab の Database Operations チームのミッションは、GitLab.com 用の PostgreSQL データベースエンジンのライフサイクル全体を構築、運用、所有、進化させることです。

チームは、データベースエンジンとそのサポートサービスの信頼性、スケーラビリティ、パフォーマンス、セキュリティの所有に焦点を当てています。チームは、複雑さを減らし、効率を改善し、新しい機能をより速く提供するために、適切な場合に [Runway](/handbook/engineering/infrastructure-platforms/gitlab-delivery/runway/) サービスとクラウドベンダーマネージド製品の上にサービスを構築することを目指すべきです。

チームは、サービスに対して行う決定を導くために [エンジニアリング原則](/handbook/engineering/development/principles/) を使用します。チームは明示的にセルフホスト製品の責任を持っていませんが、本番で GitLab のためにデータベースエンジンを実行することから学んだ教訓を、製品、開発、サポートチームに還元して、GitLab での全体的なお客様体験を改善する、またセルフマネージドのお客様が複雑なデータベースエンジンの Issue に遭遇したときにサポートチームと協業する必要があります。

## チームメンバー

{{< team-by-manager-slug "rmar1" >}}

## オーナーシップ

### サービス

私たちが主に責任を持つシステムとサービス:

- PostgreSQL Core (VM)
- PostgreSQL Core (PGaaS) (近日中)
- PostgreSQL High Availability および Load Balancing (例: Patroni、PGBouncer、consul、PostgreSQL Replication など)
- PostgreSQL Disaster Recovery (バックアップ/リストアおよびその他の手法)
- Database Observability (Prometheus インストルメンテーション、ワークロード分析など)
- GitLab アプリケーションのサポートとトラブルシューティング、特に PostgreSQL エコシステムの使用および相互作用に関連するもの。

- Self-Hosted Clickhouse (近日中)

私たちが明示的に所有していないシステムまたはサービス:

| システム名 | 説明 | オーナーとサポート | 追加情報/オープンな質問 |
|-------------|-------------|------------------------|---------------------------|
| Redis | キャッシング、レートリミット、sidekiq キューイングなどのユースケースがいくつかある。 | [Tenant Scale](/handbook/engineering/infrastructure-platforms/tenant-scale/) | [Redis アーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/#redis-architecture) |
| Data チームシステム |          | Data チーム |                          |
| セルフマネージドデータベース |           | セルフマネージドサポート |               |

## 便利なリンク

|   |   |
|---|---|
| バックログ | [DBO Status](https://gitlab.com/groups/gitlab-com/gl-infra/data-access/dbo/-/epics/13) |
| ロードマップアイデア | [Now-Next-Later](https://gitlab.com/groups/gitlab-com/gl-infra/data-access/dbo/-/epic_boards/2066770) |
| 私たちに連絡 | [`#g_database_operations`](https://gitlab.enterprise.slack.com/archives/C02K0JTKAHJ) <br> `@gitlab-org/data-access/dbo` |
| 週次アジェンダ | [週次 APAC および EMEA/AMER](https://docs.google.com/document/d/1d8YrRO4Vw_pHXohgwq-lEBM75ihMtkLpcd2_cFa6Yrs/edit#) |

## チームへの連絡方法

1. 障害と顧客の緊急事態: [エスカレーションプロセス](/handbook/engineering/data-engineering/database-excellence/help/#step-4-escalate-to-database-excellence) を使用してください
1. 顧客の Issue: [こちら](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?related_item_id=undefined&type=ISSUE&description_template=SupportRequestTemplate-DatabaseOperations) で RFH Issue を開いてください
1. プロジェクト作業やその他のリクエスト: [チーム Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/data-access/dbo/dbo-issue-tracker/-/issues/new?related_item_id=undefined&type=ISSUE&description_template=New_DBO_Project) で Issue を開いてください

## パフォーマンス指標

[パフォーマンス指標メトリクス](/handbook/engineering/infrastructure/performance-indicators/#key-performance-indicators) を使って、私たちが貢献する価値を測定します。

GitLab.com の [可用性](/handbook/engineering/infrastructure/performance-indicators/#gitlabcom-availability) と
[パフォーマンス](/handbook/engineering/infrastructure/performance-indicators/#gitlab-com-performance) に関する Infrastructure 部門の KPI に加えて、Database Operations チームは以下を追跡しています:

- バックアップとリカバリの SLO
- 一般的なデータベース可用性 (アップタイム)

## 主要な技術スキル

チームは以下のさまざまなレベルの専門知識を持つ Database Operations エンジニアで構成されています:

- 大規模本番環境での PostgreSQL のサポート。
- Chef、Ansible、Terraform などのツールを使ったインフラ自動化と構成管理。
- PostgreSQL の内部、チューニングと最適化、SQL と PL/pgSQL。

## 共通リンク

道を見つけやすくするために、便利または重要なリンクのリストを以下で見つけることができます。

### モニタリングおよびパフォーマンス関連ツール

以下のツールが役立つ場合があります:

- [Postgres Checkup](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues?label_name%5B%5D=postgres-checkup): PostgreSQL データベースのステータスに関する詳細なレポート。
- [Private Grafana](https://dashboards.gitlab.net/): アプリケーションとシステムレベルのパフォーマンスデータの両方のため。
- [Performance Bar](https://docs.gitlab.com/ee/administration/monitoring/performance/performance_bar.html): GitLab で `pb` と入力すると、ページの上部にパフォーマンスメトリクスを含むバーが表示されます。このツールは、実行されたクエリとそのタイミングを表示するのに特に便利です。

Postgres パフォーマンス問題を特定し、より深く掘り下げたい場合は、これらの runbook とダッシュボードをお勧めします。これらは、ダッシュボードの理解方法を説明する runbook とともに、一緒に使用するのが最適です。

ダッシュボード:

- [Postgres ノードパフォーマンス概要 (高レベル)](https://dashboards.gitlab.net/d/postgres-ai-node-performance-overview)
- [Postgres 集計クエリパフォーマンス分析](https://dashboards.gitlab.net/d/postgres-ai-NEW_postgres_ai_02)
- [Postgres 単一クエリパフォーマンス分析](https://dashboards.gitlab.net/d/postgres-ai-NEW_postgres_ai_03)
- [Postgres 待機イベント分析](https://dashboards.gitlab.net/d/postgres-ai-NEW_postgres_ai_04)

Runbook:

- [Postgres ノードの高レベルパフォーマンス分析とトラブルシューティング](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/single-node-high-level.md?ref_type=heads)
- [Postgres 待機イベント分析 (別名 Active Session History; ASH ダッシュボード)](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/wait-events-analisys.md)
- [Postgres 用 SQL クエリ分析と最適化](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/query-analysis.md)

### ダッシュボード

以下の (プライベート) Grafana ダッシュボードは、データベーススペシャリストにとって重要/便利です:

- [PostgreSQL Overview](https://dashboards.gitlab.net/d/000000144/postgresql-overview?orgId=1&var-prometheus=Global&var-environment=gprd&var-type=patroni)
- [Patroni Overview](https://dashboards.gitlab.net/d/patroni-main/patroni-overview?orgId=1)
- [Patroni CI Overview](https://dashboards.gitlab.net/d/patroni-ci-main/patroni-ci-overview?orgId=1)
- [PgBouncer Overview](https://dashboards.gitlab.net/d/pgbouncer-main/pgbouncer-overview?orgId=1)
- [PgBouncer CI Overview](https://dashboards.gitlab.net/d/pgbouncer-ci-main/pgbouncer-ci-overview?orgId=1)
- [GitLab Triage](https://dashboards.gitlab.net/d/RZmbBr7mk/gitlab-triage?orgId=1)
- [PostgreSQL Bloat](https://dashboards.gitlab.net/d/000000224/postgresql-bloat?orgId=1&refresh=5m)
- [PostgreSQL Disk IO](https://dashboards.gitlab.net/d/pEfSMUhmy/postgresql-disk-io?orgId=1&var-environment=gprd&var-prometheus=Global&var-type=patroni&var-node=patroni-main-2004-01-db-gprd.c.gitlab-production.internal&from=now-7d&to=now)
- [Host stats](https://dashboards.gitlab.net/d/bd2Kl9Imk/host-stats?orgId=1)
- [Tuple Statistics](https://dashboards.gitlab.net/d/000000167/postgresql-tuple-statistics?from=now-3h&to=now&var-prometheus=Global&var-environment=gprd&var-type=patroni&orgId=1&refresh=5m)
- [Postgres ノードパフォーマンス概要 (高レベル)](https://dashboards.gitlab.net/d/postgres-ai-node-performance-overview)
- [Postgres 集計クエリパフォーマンス分析](https://dashboards.gitlab.net/d/postgres-ai-NEW_postgres_ai_02)
- [Postgres 単一クエリパフォーマンス分析](https://dashboards.gitlab.net/d/postgres-ai-NEW_postgres_ai_03)
- [Postgres 待機イベント分析](https://dashboards.gitlab.net/d/postgres-ai-NEW_postgres_ai_04)

### ドキュメント

- [何にダウンタイムが必要か?](https://docs.gitlab.com/ee/update/with_downtime.html)
- [データベースインデックスの追加](https://docs.gitlab.com/ee/development/database/adding_database_indexes.html)
- [Post Deployment Migrations](https://docs.gitlab.com/ee/development/database/post_deployment_migrations.html)
- [Background Migrations](https://docs.gitlab.com/ee/development/database/batched_background_migrations.html)
- [SQL Migration Style Guide](https://docs.gitlab.com/ee/development/migration_style_guide.html)
- [SQL Query Guidelines](https://docs.gitlab.com/ee/development/sql.html)
- [Infrastructure runbook とドキュメント](https://gitlab.com/gitlab-com/runbooks#postgresql)
