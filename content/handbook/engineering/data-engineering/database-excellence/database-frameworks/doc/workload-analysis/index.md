---
title: GitLab.com のワークロード分析
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/workload-analysis/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-19T13:56:02-06:00"
---

## GitLab.com のワークロード分析

このドキュメントでは、GitLab.com のデータベースワークロードをより深く理解するためのいくつかのアプローチについて説明します。既存の監視ソリューションに加えて、データベースワークロードに関するいくつかの追加の視点を提供することを目的としています。

### インデックスの肥大化

[過去の調査](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/database/postgres/bloat/#index-analysis)で、GitLab.com は btree インデックスの肥大化に大きく悩まされていることを確認しました。つまり、時間の経過とともに、一部のインデックスは理想的なサイズをはるかに超えて成長する傾向があります - 必要以上のスペースを占有し、時間とともに効率が低下します。インデックスの理想的なサイズは最もコンパクトな表現です。これはインデックスが新しく構築された場合に当てはまりますが、多くの場合、通常のインデックスへの更新はこのコンパクトな表現を維持できません。

GitLab.com では、以前にデータベースの肥大化を詳細に監視することを導入しました。これは個々のテーブルとインデックスの肥大化ヒューリスティックに基づいています。これは推定値のみであり、誤差は非有界ですが、通常はデータベースの肥大化に関する良い洞察を提供しており、個々の肥大化レベルを決定するためにインデックスとテーブルを完全に再構築する（例: `VACUUM FULL` を使用する）よりもはるかにコストが低いです。この推定のおかげで、Prometheus を通じて利用可能なメトリクスを公開し、この [Grafana ダッシュボード](https://dashboards.gitlab.net/d/000000224/postgresql-bloat?orgId=1&refresh=5m)で最もよく確認できます。

これらの統計を集計すると、インデックスの肥大化（黄色の線）が時間とともに着実に増加する一方、テーブルの肥大化（緑の線）はほぼ一定に保たれていることがわかります。以下のグラフは約 3 ヶ月間（2020 年初頭）を示しており、インデックスの肥大化が 240 GB から 600 GB 以上に増加しています。

![index-bloat-1](/images/engineering/data-engineering/database-excellence/database-frameworks/doc/workload-analysis/workload-analysis/index-bloat-1.png)

数ヶ月後、2020 年夏には、全体的なインデックスの肥大化が 1.3 TB 以上に蓄積されました（以下参照）。テーブルの肥大化も大幅に増加していることに注意してください - ただし、それはその期間中にデータマイグレーションが処理していた単一のテーブルによるものでした（したがって、それは予想されていました）。当時の全体的なデータベースサイズ 8.5 TB と比較すると、インデックスの肥大化は総サイズの約 15% を占めていました。このスペースはほとんど無駄で、メモリを占有しています。

![index-bloat-3](/images/engineering/data-engineering/database-excellence/database-frameworks/doc/workload-analysis/workload-analysis/index-bloat-3.png)

9月初旬に [pg_repack](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/database/postgres/bloat/#design-1) の手動呼び出しによってこれを対処し始めました（インデックスの肥大化の落ち込みと垂直の緑の線がそれを示しています）。秋の再パック作業の全体的な影響は以下に示されています。複数のステップで、インデックスの肥大化をより許容できるレベルまで正常に下げました - 1 TB 以上のスペースを解放しました。データマイグレーションが完了した後、テーブルの肥大化も除去しました - さらに 1 TB 以上の追加スペースを解放しました（緑の線）。

![index-bloat-2](/images/engineering/data-engineering/database-excellence/database-frameworks/doc/workload-analysis/workload-analysis/index-bloat-2.png)

#### 長期的なインデックス肥大化への対処

インデックスの肥大化への対処は自動化する必要があることを認識しました。これにより、手動での努力なしに、より高い頻度でこの問題に対処でき、最終的には時間とともに健全なインデックス肥大化の状態を維持できます。

GitLab の大規模なセルフマネージドインストールもこの問題に悩まされると予想しています。そのため、GitLab に同梱されるリインデックス機能を開発しました。現在、GitLab.com にロールアウトされており、成功すれば、その機能はデフォルトで GitLab で利用可能かつ有効になります。

リインデックスの実装は、[インデックスの肥大化の大部分が通常の（非ユニーク）btree インデックスから生じている](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/database/postgres/bloat/#index-analysis)という事実に基づいています。これらは、長時間のロック状況のリスクなしに、比較的簡単に再作成できます。

1. 一時的な名前を使用して同じ定義で新しいインデックスを作成する（`CONCURRENTLY` オプションを使用したインデックス作成）
2. 元のインデックスと新しく作成したインデックスを入れ替える
3. 元のインデックスを削除する

このアプローチは、主キーをサポートするインデックスには使用できません。幸いなことに、これはいずれにせよ多くのインデックスの肥大化を処理する必要がある場所ではないため、今すぐこの問題を解決する必要はありません。

PostgreSQL 12 が必要になれば、そこで導入された[同時リインデックス機能](https://paquier.xyz/postgresql-2/postgres-12-reindex-concurrently/)を活用できるようになります。さらに、PostgreSQL 12 では [btree ストレージの節約に関して大幅な改善](https://www.cybertec-postgresql.com/en/b-tree-index-improvements-in-postgresql-v12/)が行われており、最終的にその恩恵を受けることが期待されます。

このサイクルで、GitLab.com でこの機能を一時的に有効にしました。関数インデックスに関する問題を発見し、[インシデント](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2885)につながりました。根本的な問題は、関数インデックスのサブセットに追加の統計が必要なことです。これらの統計は元のインデックスを削除することで削除されます。したがって、元のインデックスを削除する前に明示的にインデックスを再構築する必要があります。これにより、同じ問題を抱える PostgreSQL 12 の機能 `REINDEX CONCURRENTLY` に関する興味深い[会話](https://www.postgresql.org/message-id/flat/CAFcNs%2BqpFPmiHd1oTXvcPdvAHicJDA9qBUSujgAhUMJyUMb%2BSA%40mail.gmail.com)が生まれました。リインデックスアプローチの修正はこの [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/272997) で追跡されています。

リインデックスは、cron ジョブを通じてトリガーされる Rake タスク内にあります。GitLab.com では、週末だけこのタスクを実行することで健全なインデックス肥大化レベルを維持できると期待していますが、最終的にはこのジョブをより頻繁に低優先度のバックグラウンドタスクとして実行できるようにしたいと考えています。

今後、%13.6 では、[優れたインデックス選択戦略](https://gitlab.com/gitlab-org/gitlab/-/issues/258576)と[オブザーバビリティ](https://gitlab.com/gitlab-org/gitlab/-/issues/273198)[機能](https://gitlab.com/gitlab-org/gitlab/-/issues/263463)を追加することでこの機能を改善していく予定です。

##### 関連リンク

1. [自動リインデックス epic](https://gitlab.com/groups/gitlab-org/-/epics/3989)
2. [データベース肥大化ダッシュボード](https://dashboards.gitlab.net/d/000000224/postgresql-bloat?orgId=1&refresh=5m)
3. [インデックス肥大化の調査（2019 年）](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/database/postgres/bloat/#index-analysis)

### pg_stat_statements に基づく高解像度 Top-K クエリ分析

データベースワークロードを詳細に理解するために、pgBadger などのツールを使用して洞察に富んだレポートを生成できます。この分析は postgres ログ出力に基づいており、通常2つの制限があります。

1. ワークロードの一部のみをカバーする: Postgres は低速なクエリのみをログに記録するように設定されています（GitLab.com では `log_min_duration_statement = 1s`、したがって >= 1s のランタイムのみがログに記録されます）。より速いクエリは分析の対象外ですが、全体的なワークロードに大きく貢献する可能性があります。
2. 全期間を集計する: タイミングとその他のメトリクスは、通常、与えられたログの完全なタイムスパンにわたって測定および集計されます。これにより、平均的なワークロードを理解できます: たとえば、観察時間中（数日になる可能性もある）に最も時間がかかったクエリがわかります。これは比較的均質なワークロードにはうまく機能しますが、スパイクが多いワークロードでは機能が低下し、頻度は低いが影響の大きいクエリを効果的に隠してしまいます。

例として、毎時 cron ジョブが数分間非常に高価なクエリを実行することを考えてみましょう。ディスクから大量のデータを読み込み、ほとんどのキャッシュを無効化し、高い CPU を引き起こします。しかし、1日全体に集計されたこれらの統計を見ると、これが効果的に隠されます。他のより頻繁なクエリが統計を支配することも珍しくありません。さらに悪いことに、これらの高頻度のクエリはしばしば最適化が難しい場合があります。

データベースワークロードをどのように見るか考えてみましょう。たとえば、プライマリデータベースインスタンスとそのワークロードを対象にしているとします。最も多くのレコードを取得するクエリと、ディスクから最もデータを読み込むクエリをより詳細に理解したいとします（例として）。

`pg_stat_statements` を使用すると、この情報はデータベースで実行されたほぼすべてのクエリに対してクエリごとに容易に利用できます（設定可能なしきい値があり、現在は最大 `pg_stat_statements.max = 5,000` クエリを追跡しています）。つまり、このアプローチはログベースのアプローチよりも実際のワークロードについてはるかに詳細な洞察を提供し、上記の懸念点 (1) を効果的に対処します。

#### 高解像度 Top-K アプローチ

このアプローチは懸念点 (2) に対処します: 非常に短い期間（30 秒程度）であっても「問題のある」と見なされたクエリを追跡する方法を提供します。

まずいくつかのことを紹介してから、分析がどのように機能するかを概説します。

*スナップショットとスナップショット頻度*: このアプローチは、30 秒のスナップショット間隔などの高い頻度で `pg_stat_statements` のスナップショットを取ることに基づいています。

*タイムフレームと差分*: 連続する2つのスナップショット間の時間により、利用可能なメトリクスに関してそれらのスナップショット間の差分を計算できます。たとえば、この時間中に特定のクエリが返した行の総数を理解できます。

*メトリクス `x` による問題のあるクエリ*: クエリは、特定のタイムフレームで `x` による Top-K クエリに含まれている場合、特定のメトリクス `x` で特定のタイムフレームに問題があると見なされます。たとえば、特定のタイムフレームでの合計実行時間による上位 10 クエリを見ることがあります - それらが問題のあるクエリと見なされます。

*クエリの問題カウント*: クエリが問題として現れた総回数を追跡し、これを*ストライクカウント*と呼びます。

##### 方法論

分析はいくつかのステップを実行します。

1. 希望する頻度で、拡張された期間にわたって特定のデータベースホストから `pg_stat_statements` のスナップショットを収集する。
2. 各タイムフレームについて、関連するメトリクスごとに問題のあるクエリを計算し、それらの問題を追跡する。
3. 関連するメトリクスごとに、合計時間中に問題（`ストライクカウント > 0`）があったすべてのクエリのリストを提供する。

このアプローチでは、1つのタイムフレーム（例: 30 秒）のみ問題と見なされていたクエリも結果として表示されます。

##### 実装例と結果

概念実証の実装は [gitlab-org/database-team/highres-stat-statements](https://gitlab.com/gitlab-org/database-team/highres-stat-statements) で利用可能です。

サンプルレポートはこの[シート](https://docs.google.com/spreadsheets/d/15C8chcgqTGDsKxg22M06WQUwSH4herugRlSQ7Jj8LQU/edit#gid=1953020943)にあります（GitLab 内部リンク）。これは 30 秒間隔で 32 分間 GitLab.com のプライマリから取得したスナップショットに基づいています。

##### `pg_stat_statements` と Marginalia

Marginalia はデータベースクエリにその起源をアノテーションする Ruby gem です。たとえば、Sidekiq ジョブとウェブリクエストに対して、各クエリの横に次のような SQL コメントが表示されます。

1. Sidekiq: `/*application:sidekiq,...,jid:...,job_class:AuthorizedProjectUpdate::UserRefreshWithLowUrgencyWorker*/`
2. Web: `/*application:web,controller:issues,action:related_branches,correlation_id:...*/`

この情報は `pg_stat_statements` に保持されます。Sidekiq ジョブ、コントローラー、またはコントローラーアクションにわたって集計するために使用できます。

上記と同じ方法論に従いながら、「エンドポイント」（Sidekiq ジョブクラスまたはコントローラーアクション）に基づいて集計することで、同様の方法で問題のあるエンドポイントを見つけることができます。

これも gitlab-org/database-team/highres-stat-statements に実装されています。上記と同じデータに基づくサンプルレポートはこの[シート](https://docs.google.com/spreadsheets/d/1-NyzDUCXcUqL_LhFCpOgJkrmVbvlp9DlfUrPSLzUThU/edit?usp=sharing)にあります（内部リンク）。

すべてのクエリが Marginalia によって十分にアノテーションされているわけではないようです。`application:web` のみで、それ以上の情報がないクエリがいくつかあります。このアプローチを使用したい場合は、クエリの十分な割合が適切なアノテーションを持つようにすることを確認する必要があります。

### pgBadger の使用

pgBadger はログデータに基づいて集計レポートを生成するために使用できます。GitLab.com では、詳細を説明する[ランブック](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/pgbadger_report.md)に従うことができます。

上記のとおり、これはログ分析に基づいており、詳細が不足しています（遅いクエリのみがログに記録される）。それでも、このツールをツールベルトに持つことは有用で、遅いクエリについて推論する良い方法を提供します。

GitLab.com プライマリのサンプルレポートは[こちら](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/92#note_436770927)にあります（内部リンク）。
