---
title: フォーリンデータラッパーとパーティショニングによる PostgreSQL 11 シャーディング
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/fdw-sharding/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

## フォーリンデータラッパーとパーティショニングによる PostgreSQL 11 シャーディング

このドキュメントは、フォーリンデータラッパーとパーティショニングを組み合わせた探索的なテストの結果を記録しています。アイデアは、パーティションをフォーリンテーブルとして実装し、他の PostgreSQL クラスターをシャードとして機能させてデータのサブセットを保持させることです。

### 背景

[PostgreSQL 11 の宣言的パーティショニング](https://www.postgresql.org/docs/11/ddl-partitioning.html)を使用すると、テーブルを水平方向にスライスできます。つまり、トップレベルのテーブルを通常通りに扱いながら、内部では複数のパーティションにデータを整理します。これらは、トップレベルのテーブルにアタッチされている通常のテーブルと考えることができます（PostgreSQL のテーブル継承に似ています）。

パーティショニングを実装するには、パーティショニングキーとパーティショニング方法（ハッシュまたはレンジベース — [ドキュメント](https://www.postgresql.org/docs/11/ddl-partitioning.html#DDL-PARTITIONING-OVERVIEW)で詳細を確認）を選択します。どちらの方法でも、パーティションにはパーティショニングキーの値のサブセットのみのデータが含まれます。クエリがパーティショニングキーのフィルターを含む場合にのみ、パーティショニングの恩恵を受けられます。その場合、クエリプランナーは特定のクエリでスキャンが必要なパーティションを静的に導出します。最良の場合、クエリを満たすために1つのパーティションのみをスキャンし、他のすべてのパーティションを除外します。

標準の PostgreSQL パーティショニングは、すべてのパーティションを均等に同じ物理クラスター上に作成します。したがって、パーティショニングは複数のクラスターにデータを分散させる組み込みの方法ではありません。代わりに、論理的なデータ整理と分割を実装しますが、データの分散をネイティブにサポートしません。ここで[PostgreSQL フォーリンデータラッパー](https://www.postgresql.org/docs/12/postgres-fdw.html)が登場し、ローカルデータベースの通常のテーブルにアクセスするのと同様にフォーリンテーブルにアクセスする方法を提供します。私たちの探索的スキームでは、各パーティションがフォーリンテーブルであり、別のデータベースに物理的に存在します。これを「シャード」と呼びます。シャードはまったく別のデータベースクラスターに存在することもできます。

PostgreSQL コミュニティには、今後のバージョンでネイティブ PostgreSQL に[シャーディング機能を組み込むためのロードマップ](https://wiki.postgresql.org/wiki/Built-in_Sharding)があります。

### 初期セットアップ

このデモでは、スキーマのセットアップ手順を説明します。

<figure class="video_container">
  <iframe src="https://www.youtube.com/watch?v=MiZFtM84x44" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

この例では、以前の例と同様に `issues` テーブルを選択しました。パーティショニングキーとして `project_id` を選択し（すでに利用可能なため）、HASH(project_id) ベースのパーティショニングで[トップレベルテーブルを再作成します](https://gitlab.com/gitlab-org/gitlab/-/blob/611126f9ea4f27be3e597aa2384a801319db1793/db/migrate/20200429095943_partition_issues_table.up.sql):

```sql
CREATE TABLE public.issues (
    id integer NOT NULL,
    title character varying
    -- ...
    project_id integer,
    -- ...
) PARTITION BY HASH (project_id);
```

次のステップとして、実際のパーティショニングされたデータを格納するために[2つのシャードを準備します](https://gitlab.com/gitlab-org/gitlab/-/blob/611126f9ea4f27be3e597aa2384a801319db1793/db/migrate/20200429095943_partition_issues_table.up.sql#L65)。2つのローカルデータベース `shard1, shard2` です — これらは別の PostgreSQL クラスターに存在することもできます。

```sql
CREATE EXTENSION IF NOT EXISTS postgres_fdw;

CREATE SERVER IF NOT EXISTS shard1 FOREIGN DATA WRAPPER postgres_fdw OPTIONS (dbname 'shard1', host '...');
CREATE SERVER IF NOT EXISTS shard2 FOREIGN DATA WRAPPER postgres_fdw OPTIONS (dbname 'shard2', host '...');
```

次に進んで[ローカルデータベースにパーティションを作成します](https://gitlab.com/gitlab-org/gitlab/-/blob/611126f9ea4f27be3e597aa2384a801319db1793/db/migrate/20200429095943_partition_issues_table.up.sql#L73)。これらをフォーリンテーブルとして作成し、`shard1, shard2` に分散させることに注意してください:

```sql
CREATE FOREIGN TABLE parts.issues_0 PARTITION OF public.issues FOR VALUES WITH (modulus 8, remainder 0) SERVER shard1;
CREATE FOREIGN TABLE parts.issues_1 PARTITION OF public.issues FOR VALUES WITH (modulus 8, remainder 1) SERVER shard2;
-- ...
```

ローカルデータベースの準備は完了しましたが、まだ[シャードに実際のテーブルを作成する](https://gitlab.com/gitlab-org/gitlab/-/blob/611126f9ea4f27be3e597aa2384a801319db1793/db/sharding/shards_template.sql)必要があります。各パーティションに対して、`shard1, shard2` データベースにインデックスとともに通常のテーブルを作成します。

この時点での制限は、同じシャードに存在しないテーブルへのフォーリンキーをこれらのテーブルに追加できないことです。

このセットアップで、次のようなクエリを実行し、リモートシャードに存在する1つのパーティションのみにアクセスするのを確認できます:

```sql
SELECT *
FROM issues
WHERE project_id = ?
```

通常通り `issues` テーブルで作業を続けられます。クエリに不変条件をさらに追加した場合、それらはシャードにプッシュダウンされます。

### スキーママイグレーション

既存のスキーマを変更するために、[カラムの追加](https://gitlab.com/gitlab-org/gitlab/-/tree/611126f9ea4f27be3e597aa2384a801319db1793/db/sharding/add_column)と[削除](https://gitlab.com/gitlab-org/gitlab/-/tree/611126f9ea4f27be3e597aa2384a801319db1793/db/sharding/drop_column)の2つの例を議論しました。

<figure class="video_container">
  <iframe src="https://www.youtube.com/watch?v=nt4Khi9Gr3o" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

マイグレーションの例では、フォーリンテーブルのスキーマが実際のテーブルのサブセットである必要があるという意味で調整が必要です。カラムを追加する場合、まずシャードの実際のテーブルすべてにカラムを追加し、後でフォーリンテーブルにカラムを追加することでこれを可視化します（カラムを削除する場合は逆順）。

### 参照テーブル

これまで、シャードにはパーティショニングされたデータの通常のテーブルのみが含まれていました。そのデータは、シャード上に存在しないデータを参照することができません。例えば、シャーディングされておらず、シャード全体でグローバルに利用可能にしたい `users` テーブルがあるかもしれません。

このステップでは、論理レプリケーションを使用して選択されたテーブルをシャード全体にレプリケートし、ローカルで利用可能にする方法を探索します。これにより、シャードに直接接続し、参照テーブルとパーティションの1つに直接作業できます。ただし、実際に興味のあるデータのパーティションを保持しているシャードを知っている必要があります。

<figure class="video_container">
  <iframe src="https://www.youtube.com/watch?v=ztQtNmSYmEo" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

この例では、両方のシャードに論理レプリケーションスロットを設定し、`user, projects` の2つのテーブルを公開します。シャードでは、パブリケーションをサブスクライブして参照テーブルのローカルレプリケーションを開始します。

これにより、次のようなクエリを実行できます:

```sql
SELECT *
FROM users
JOIN issues_0 as issues -- これは単一のパーティションに注意！
WHERE users.id = ? AND issues.title ~* ?
```

もちろん、メインデータベースでもこれは可能です。シャードで直接より多くのクエリを実行するオプションとしてこれを探索してきました。実際にどれほど有用かはまだわかりません。

### まとめ

これはフォーリンデータラッパーとパーティショニングを組み合わせた探索でした。PostgreSQL は複数の物理クラスターにデータを分散させるシャーディングと分散をネイティブにはサポートしていません（まだ）。フォーリンデータラッパーはリモートサーバーからデータを読み取るためのツールとして機能し、データの分散に使用できます。

ただし、このセットアップは古典的な PostgreSQL セットアップと比べて多くの複雑さと制限を伴います:

1. フォーリンサーバーへの接続詳細を維持する必要がある。
2. クラスター全体で一貫したスキーマを維持することが難しい。
3. フォーリンキーはローカルでのみサポートされる。
4. データがリモートにある場合、パーティショニングキーが利用できない際のオーバーヘッドリスクが高まる。
5. フォーリンテーブルへのプッシュダウンが行われない場合、特定のサブ最適なジョインとフィルターのリスクがある。
6. クエリで複数のシャードにアクセスする必要がある場合のパフォーマンス低下。
7. クエリの計画時間と実行時間のバランスを取ることの難しさ。
8. 各シャードは独自の HA クラスターを必要とする。
9. [フォーリンテーブルの並列スキャンがない。](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/53#note_334748021)
10. 参照テーブルへの更新はメインクラスターに行く必要があり、書き込みスケーラビリティのボトルネックと単一障害点を生み出す。
11. グローバルなトランザクション管理がない。

このアプローチから本当にメリットを得るには、関連するテーブルを同じ次元でシャーディングし、シャードでクエリを直接実行できるようにする必要があります。

GitLab の多様なアクセスパターンを考えると、アプリケーション全体のシャーディングキーに合意し、競合するアクセスパターンに対処する前（例: サービスの抽出や分離によって）には、これは実現不可能に思えます。

幸い、パーティショニングはデータを物理的に分散させることによる複雑さの多くを導入せずに、同様の問題に対処するための基盤です。そのため、アプリケーション全体でパーティショニングを導入することは、一般的により拡張性の高いデータベースソリューションに向けたイテレーション的な取り組み方です。

パーティショニングの基礎を導入し、アプリケーションがこのパターンをより広く活用できるようにするための最初のステップとして、[監査ログのデータベース設計](https://gitlab.com/groups/gitlab-org/-/epics/320)に取り組む予定です。

---

著者: [Andreas Brandl](https://gitlab.com/abrandl)
