---
title: "データベースオペレーションチーム"
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-operations/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T04:23:44Z"
translator: claude
stale: false
---

## ミッション

GitLab のデータベースオペレーションチームのミッションは、GitLab.com 向けに PostgreSQL データベースエンジンのライフサイクル全体を構築・運用・所有・進化させることです。

チームはデータベースエンジンとそのサポートサービスの信頼性、スケーラビリティ、パフォーマンス、セキュリティの所有に注力しています。チームは複雑さを軽減し、効率を向上させ、新機能をより迅速に提供するために、適切な場合は [Runway](/handbook/engineering/infrastructure-platforms/gitlab-delivery/runway/) サービスやクラウドベンダーのマネージドプロダクトを活用してサービスを構築するよう努めています。

チームは [エンジニアリング原則](/handbook/engineering/development/principles/) を活用して、サービスに関する意思決定を行います。チームは明示的にはセルフホスト製品の責任を持ちませんが、大規模な本番環境で GitLab のデータベースエンジンを運用して得た教訓を、製品・開発・サポートチームにフィードバックし、GitLab の顧客体験全体を向上させ、またセルフマネージドの顧客が複雑なデータベースエンジンの Issue に直面した際にサポートチームと協力します。

## チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/data-engineering/database-excellence/database-operations/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 所有範囲

### サービス

私たちが主に責任を持つシステムおよびサービス:

- PostgreSQL コア（VM）
- PostgreSQL コア（PGaaS）（近日公開）
- PostgreSQL 高可用性とロードバランシング（例：Patroni、PGBouncer、consul、PostgreSQL レプリケーションなど）
- PostgreSQL ディザスタリカバリ（バックアップ/リストアおよびその他の手法）
- データベースオブザーバビリティ（Prometheus インストゥルメンテーション、ワークロード分析など）
- GitLab アプリケーションのサポートおよびトラブルシューティング（特に PostgreSQL エコシステムとの使用・連携に関連するもの）

- セルフホスト型 Clickhouse（近日公開）

私たちが所有しないシステムまたはサービス:

| システム名 | 説明 | オーナーおよびサポート担当 | 補足情報/未解決の質問 |
|-------------|-------------|------------------------|---------------------------|
| Redis | キャッシング、レート制限、Sidekiq キューイングなど複数のユースケースがあります。 | [Tenant Scale](/handbook/engineering/infrastructure-platforms/tenant-scale/) | [Redis アーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/#redis-architecture) |
| データチームのシステム |          | データチーム |                          |
| セルフマネージドデータベース |           | セルフマネージドサポート |               |

## 有用なリンク

|   |   |
|---|---|
| バックログ | [DBO Status](https://gitlab.com/groups/gitlab-com/gl-infra/data-access/dbo/-/epics/13) |
| ロードマップアイデア | [Now-Next-Later](https://gitlab.com/groups/gitlab-com/gl-infra/data-access/dbo/-/epic_boards/2066770) |
| 連絡方法 | [`#g_database_operations`](https://gitlab.enterprise.slack.com/archives/C02K0JTKAHJ) <br> `@gitlab-org/data-access/dbo` |
| 週次アジェンダ | [Weekly APAC and EMEA/AMER](https://docs.google.com/document/d/1d8YrRO4Vw_pHXohgwq-lEBM75ihMtkLpcd2_cFa6Yrs/edit#) |

## チームへの連絡方法

1. 障害および顧客の緊急事態: [DBO エスカレーションプロセス](dbre-escalation-process)をご利用ください
1. 顧客の Issue: [こちら](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?related_item_id=undefined&type=ISSUE&description_template=SupportRequestTemplate-DatabaseOperations)から RFH Issue を作成してください
1. プロジェクト作業およびその他のリクエスト: [チームの Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/data-access/dbo/dbo-issue-tracker/-/issues/new?related_item_id=undefined&type=ISSUE&description_template=New_DBO_Project)に Issue を作成してください

## パフォーマンス指標

私たちは [パフォーマンス指標メトリクス](/handbook/engineering/infrastructure/performance-indicators/#key-performance-indicators) を使用して貢献する価値を測定しています。

インフラストラクチャ部門の GitLab.com の [可用性](/handbook/engineering/infrastructure/performance-indicators/#gitlabcom-availability) および [パフォーマンス](/handbook/engineering/infrastructure/performance-indicators/#gitlab-com-performance) に関する KPI に加えて、データベースオペレーションチームは以下を追跡しています。

- バックアップおよびリカバリ SLO
- データベース全体の可用性（稼働時間）

## 主要な技術スキル

チームはさまざまなレベルの専門知識を持つデータベースオペレーションエンジニアで構成されています。

- 大規模な本番環境での PostgreSQL サポート。
- Chef、Ansible、Terraform などのツールを使用したインフラストラクチャの自動化および構成管理。
- PostgreSQL の内部構造、チューニング＆最適化、SQL および PL/pgSQL。

## 共通リンク

以下に役立つリンクや重要なリンクを掲載しています。

### モニタリング＆パフォーマンス関連ツール

次のツールが役立ちます:

- [Postgres Checkup](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues?label_name%5B%5D=postgres-checkup): PostgreSQL データベースの状態に関する詳細レポート。
- [Private Grafana](https://dashboards.gitlab.net/): アプリケーションレベルおよびシステムレベルのパフォーマンスデータ。
- [Performance Bar](https://docs.gitlab.com/ee/administration/monitoring/performance/performance_bar.html): GitLab で `pb` と入力するとページ上部にパフォーマンスメトリクスのバーが表示されます。実行されたクエリとそのタイミングを確認するのに特に役立ちます。

Postgres のパフォーマンス問題を特定し、さらに詳しく調査したい場合は、以下のランブックとダッシュボードを推奨します。ランブックがダッシュボードの理解方法を説明しているため、これらは一緒に使用するのが最適です。

ダッシュボード:

- [Postgres ノードパフォーマンス概要（高レベル）](https://dashboards.gitlab.net/d/postgres-ai-node-performance-overview)
- [Postgres 集計クエリパフォーマンス分析](https://dashboards.gitlab.net/d/postgres-ai-NEW_postgres_ai_02)
- [Postgres 単一クエリパフォーマンス分析](https://dashboards.gitlab.net/d/postgres-ai-NEW_postgres_ai_03)
- [Postgres 待機イベント分析](https://dashboards.gitlab.net/d/postgres-ai-NEW_postgres_ai_04)

ランブック:

- [Postgres ノードの高レベルパフォーマンス分析とトラブルシューティング](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/single-node-high-level.md?ref_type=heads)
- [Postgres 待機イベント分析（別名 Active Session History; ASH ダッシュボード）](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/wait-events-analisys.md)
- [Postgres 向け SQL クエリ分析と最適化](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/query-analysis.md)

### ダッシュボード

以下の（プライベート）Grafana ダッシュボードはデータベーススペシャリストにとって重要または有用です。

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
- [Postgres ノードパフォーマンス概要（高レベル）](https://dashboards.gitlab.net/d/postgres-ai-node-performance-overview)
- [Postgres 集計クエリパフォーマンス分析](https://dashboards.gitlab.net/d/postgres-ai-NEW_postgres_ai_02)
- [Postgres 単一クエリパフォーマンス分析](https://dashboards.gitlab.net/d/postgres-ai-NEW_postgres_ai_03)
- [Postgres 待機イベント分析](https://dashboards.gitlab.net/d/postgres-ai-NEW_postgres_ai_04)

### ドキュメント

- [ダウンタイムが必要なものは何ですか？](https://docs.gitlab.com/ee/update/with_downtime.html)
- [データベースインデックスの追加](https://docs.gitlab.com/ee/development/database/adding_database_indexes.html)
- [デプロイ後マイグレーション](https://docs.gitlab.com/ee/development/database/post_deployment_migrations.html)
- [バックグラウンドマイグレーション](https://docs.gitlab.com/ee/development/database/batched_background_migrations.html)
- [SQL マイグレーションスタイルガイド](https://docs.gitlab.com/ee/development/migration_style_guide.html)
- [SQL クエリガイドライン](https://docs.gitlab.com/ee/development/sql.html)
- [インフラストラクチャのランブックとドキュメント](https://gitlab.com/gitlab-com/runbooks#postgresql)
