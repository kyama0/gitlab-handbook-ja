---
title: データベースエンジニアリング
upstream_path: /handbook/engineering/development/database/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T04:38:02Z"
translator: claude
stale: false
---

このページはデータベースアプリケーションエンジニアリングに関するページであり、このトピックに関するリソースへの入り口となっています。

Enablement の [Database Team](/handbook/engineering/data-engineering/database-excellence/database-frameworks/) も参照してください。

## GitLab の開発

データベースに関するガイドラインは [データベースガイドラインの開発ドキュメント](https://docs.gitlab.com/ee/development/#database-guides) を参照してください。

### GitLab におけるデータベースの役割

データベースに特化した主要なジョブロールが 2 つあります:

1. [バックエンドエンジニア（データベース）](/job-description-library/engineering/backend-engineer/) - Development 所属
2. [Database Reliability Engineer](/job-description-library/engineering/infrastructure/database-reliability-engineer/) - Infrastructure 所属

バックエンドエンジニア（データベース）は、GitLab コードベースにおけるアプリケーション側の改善および基盤となるデータベース作業に集中するソフトウェアエンジニアリングロールです。

Database Reliability Engineer は、Reliability Engineering チーム内から GitLab.com のデータベースインフラを対象として運用するオペレーショナルロールです。

#### データベースメンテナー

[GitLab コードベース](https://gitlab.com/gitlab-org/gitlab) において、データベースメンテナーはデータベース関連の変更をレビューし、[データベースレビューガイドライン](https://docs.gitlab.com/ee/development/database_review.html) を適用することで [コードレビュープロセス](https://docs.gitlab.com/ee/development/code_review.html) に貢献します。彼らは通常、データベースクエリとそのパフォーマンス、データベーススキーマ設計、データベースマイグレーションについての議論に参加します。

データベースメンテナーのロール:

* バックエンドエンジニアの追加ロールとして設定されることが多いです。
* 他の [GitLab メンテナー](/handbook/engineering/workflow/code-review/#maintainer) と同じ定義に従います。
* GitLab.com およびそのデータベースインフラに対する運用責任を伴いません。この責任は [Database Reliability Engineer](/job-description-library/engineering/infrastructure/database-reliability-engineer/) に属します。
* インシデント管理 Issue への参加は期待されません。
* [レビュー所要時間](https://docs.gitlab.com/ee/development/code_review.html#review-turnaround-time) として 2 営業日を遵守します。

データベースレビューへの参加に興味がある場合は、まず [データベースメンテナープロセス](/handbook/engineering/workflow/code-review/#project-maintainer-process-for-gitlab-database) を確認してください。レビュワーのためのすべてのリソースが含まれています。

## 推奨リンクとリファレンス資料

### GitLab リソース

* データベースオフィスアワーは隔週で開催され、[GitLab チームミーティングカレンダー](/handbook/tools-and-tips/#gitlab-team-meetings-calendar) で確認できます。
* GitLab Unfiltered の [Database Office Hours プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Kp-kqXeiF7fF7cFYaKtdqXM) でデータベースオフィスアワーの動画を視聴できます。

### 書籍

*(順不同)*

* I. Ahmed, G. Smith 他: "[PostgreSQL 10 High Performance: Expert techniques for query optimization, high availability, and efficient database maintenance.](https://www.amazon.com/dp/1788474481)" (2018)
* Hans-Jürgen Schönig: "[Mastering PostgreSQL 11](https://www.amazon.com/Mastering-PostgreSQL-techniques-fault-tolerant-applications/dp/1789537819)" (2018)
* Markus Winand: "[SQL Performance Explained](https://sql-performance-explained.com/)"
* Dimitri Fontaine: "[The Art of PostgreSQL](https://theartofpostgresql.com/)" - [GitLab チームメンバー向けに仮想トレーニングが利用可能です。](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/23)
* Alex Petrov: "[Database Internals](https://www.databass.dev/)"

### その他のリソース

* [公式 PostgreSQL メーリングリスト](https://www.postgresql.org/list/)、特に `pgsql-general`
* [Postgres Weekly](https://postgresweekly.com)
* [Planet PostgreSQL](https://planet.postgresql.org)
* [SQL Indexing and Tuning e-Book](https://use-the-index-luke.com/)（"Use The Index Luke" としても知られています）
* [Scaling PostgreSQL](https://www.scalingpostgres.com/) の週次ショー
* [PostgreSQL EXPLAIN クエリプラン](https://www.pgmustard.com/docs/explain) の操作とフィールドの詳細ドキュメント
* PostgreSQL に関するあらゆることを扱う週次ポッドキャスト [postgres.fm](https://postgres.fm)
