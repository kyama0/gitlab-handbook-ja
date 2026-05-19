---
title: "データベース"
controlled_document: true
upstream_path: "/handbook/engineering/infrastructure-platforms/database/"
upstream_sha: "6a459a3ca969603754a3b5133342edb804d3012c"
translated_at: "2026-04-28T16:26:29Z"
translator: claude
stale: false
lastmod: "2026-04-22T12:58:30+10:00"
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## GitLab におけるデータベース信頼性

データベース信頼性エンジニア（DBRE）のグループは、GitLab.com を運用する Reliability Engineering チームに所属しています。私たちはインフラストラクチャと GitLab のプロダクトにおけるデータベース信頼性の側面を最も重視しています。

私たちは可能な限りデータ駆動の観点からデータベース信頼性にアプローチするよう努めています。そのため、以下でサービスレベル目標を定義することから始め、GitLab.com に対して現在維持することを目標としているサービスレベルをドキュメント化しています。

## データベース SLO

私たちは[サービスレベル目標](https://en.wikipedia.org/wiki/Service_level_objective)（SLO）を使用して、データベースのパフォーマンスと信頼性の側面について検討します。SLO を「アーキテクトとオペレーターによるコミットメントであり、それらのコミットメントを満たすためのシステムの設計と運用を導くもの」[^1] と考えています。

### バックアップとリカバリ

バックアップとリカバリには 2 つの SLO があります:

| SLO               | 現在のレベル | 定義 |
| ----------------- |:----------:| ---:|
| `DB-DR-TTR`       | 8 時間      | 災害時のフルデータベースバックアップからの最大回復時間 |
| `DB-DR-RETENTION` | 14 日間     | GCS の[マルチリージョン](https://cloud.google.com/storage/docs/storage-classes#standard)ストレージクラスでリカバリ目的のバックアップを保持する日数 |

主要なバックアップ戦略は、すべてのデータベースクラスターの時間ごとの増分ディスクスナップショット（ブロックレベル）を取ることです（これらは[マルチリージョン標準永続ディスクスナップショット](https://docs.cloud.google.com/compute/docs/disks/snapshots)です）。
また、データベースファイルの週次フルバックアップ（データベースレベル）と、別のマルチリージョン Google Cloud Storage バケットに保存される日次増分バックアップを含む二次バックアップ戦略も実装しています。さらに、すべての先行書き込み（トランザクション）ログデータを GCS に継続的にアーカイブし、いずれかのバックアップ戦略（ブロックレベルまたはデータベースレベル）を使用したポイントインタイムリカバリ（PITR）を可能にしています。[ディザスタリカバリの詳細はこちら](/handbook/engineering/gitlab-com/policies/disaster-recovery/)

回復時間には、ベースラインバックアップから PITR を実行する時間と、特定のポイントインタイム（災害の直前）までのトランザクションログアーカイブの回復時間が含まれます。

私たちは `DB-DR-RETENTION` 日以内の任意のポイントインタイムに回復できます。

### 高可用性

[GitLab.com では 99.95% 以上の可用性を維持](/handbook/engineering/infrastructure-platforms/production/)しています。PostgreSQL データベースについては、以下の SLO を定義しています:

| SLO            | レベル      | 定義 |
| -------------- |:-----------:| ----------:|
| `DB-HA-UPTIME` | 99.9%       | 一般的なデータベース可用性 |
| `DB-HA-PERF`   | p99 < 200ms | データベースクエリ実行時間の 99 パーセンタイルがこのレベル以下 |
| `DB-HA-LOSS`   | 60 秒       | プライマリ障害時に許容される最大データ損失 |

`DB-HA-UPTIME` が 99.9% であることで、月間約 45 分のダウンタイムが許容されます。アップタイムとは、他のデータベース SLO を維持しながら、データベースクラスターがアプリケーションからのクエリに応答できることを意味します。

計画的なダウンタイムに対して月間 45 分のダウンタイムバジェットを確保していますが、ダウンタイムをできるだけ低く抑えるよう努めています。ダウンタイムバジェットはシステムに変更を導入するために使用できます。バジェットが使い果たされた場合（計画的または非計画的に）、変更の導入を停止し、可用性に集中します（SRE の[エラーバジェット](https://landing.google.com/sre/book/chapters/embracing-risk.html)に似ています）。

`DB-HA-PERF` については、クエリの 99% が 200ms 以内に完了するべきです。

`DB-HA-LOSS` では、レプリケーションラグの上限が必要です。プライマリへの書き込みは、セカンダリ（または PITR アーカイブ）にレプリケーションされるまでリスクがあると見なされます。

## 共通リンク

よく使われるリンクを以下に示します。

### モニタリング & パフォーマンス関連ツール

データベーススペシャリストとして、以下のツールが非常に役立ちます:

- [Postgres Checkup](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues?label_name%5B%5D=postgres-checkup): PostgreSQL データベースの状態に関する詳細なレポート
- [Private Grafana](https://dashboards.gitlab.net/): アプリケーションとシステムレベルの両方のパフォーマンスデータ
- [Performance Bar](https://docs.gitlab.com/ee/administration/monitoring/performance/performance_bar.html): GitLab で `pb` と入力すると、ページ上部にパフォーマンスメトリクスのバーが表示されます。このツールは実行されたクエリとその実行時間を表示するのに特に便利です
- [Sherlock](https://docs.gitlab.com/ee/development/profiling.html#sherlock): Performance Bar に似たツールですが、開発環境向けです。Sherlock はバックトレースと実行されたクエリの `EXPLAIN ANALYZE` の出力を表示できます。`env ENABLE_SHERLOCK=1 bundle exec rails s` で Rails を起動することで有効化できます
- <https://explain.depesz.com/> は `EXPLAIN ANALYZE` の出力を視覚化するためのツールです

### ダッシュボード

以下の（非公開の）Grafana ダッシュボードはデータベーススペシャリストにとって重要/有用です:

- [PostgreSQL データベース概要](https://dashboards.gitlab.net/d/000000144/postgresql-overview?orgId=1)
- [Patroni PostgreSQL HA クラスター概要](https://dashboards.gitlab.net/d/patroni-main/patroni3a-overview?orgId=1)
- [PgBouncer データベースプロキシ概要](https://dashboards.gitlab.net/d/PwlB97Jmk/pgbouncer-overview?orgId=1)

### ドキュメント

基本的に <https://docs.gitlab.com/development/database> 以下のすべてが対象ですが、特に以下のガイドが重要です:

- [ダウンタイムが必要なものは何ですか?](https://docs.gitlab.com/ee/update/with_downtime.html)
- [データベースインデックスの追加](https://docs.gitlab.com/ee/development/database/adding_database_indexes.html)
- [デプロイ後マイグレーション](https://docs.gitlab.com/ee/development/database/post_deployment_migrations.html)
- [バックグラウンドマイグレーション](https://docs.gitlab.com/ee/development/database/batched_background_migrations.html)
- [SQL マイグレーションスタイルガイド](https://docs.gitlab.com/ee/development/migration_style_guide.html)
- [SQL クエリガイドライン](https://docs.gitlab.com/ee/development/sql.html)
- [インフラストラクチャのランブックとドキュメント](https://gitlab.com/gitlab-com/runbooks#postgresql)

その他の開発関連ガイドについては <https://docs.gitlab.com/ee/development/> を参照してください。

[^1]: 「Database Reliability Engineering」、O'Reilly Media、2017 年より
