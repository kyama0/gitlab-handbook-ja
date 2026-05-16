---
title: "Snowflake のクラスタリング"
description: "Snowflake のクラスタリングを正しく責任を持って使用するためのガイド"
upstream_path: "/handbook/enterprise-data/platform/snowflake/clustering/"
upstream_sha: "d638a3d5418a620365f135648ea547e0992abbf1"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-22T08:10:40+00:00"
---

Snowflake は[クラスタリング](https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions)をサポートしています。これは、ユーザーがマイクロパーティション内のデータを整理することでクエリパフォーマンスを最適化できる強力な機能です。クラスタリングにより、特に頻繁にアクセスされる列を持つ大きなテーブルのデータ取得効率が大幅に向上します。

## クラスタリングの仕組み

Snowflake のクラスタリングは以下のように機能します:

1. 1つ以上の列をクラスタリングキーとして定義する
2. これらのキーに基づいてマイクロパーティション内のデータを再編成する
3. 新しいデータが追加または変更されてもクラスタリング順序を維持する

このプロセスにより、Snowflake のクエリオプティマイザーが関連するデータをすばやく見つけて取得でき、スキャンする必要があるデータ量を削減します。

## クラスタリングのメリット

- クエリパフォーマンスの向上
- コンピューティングコストの削減
- 不要なマイクロパーティションのより良いプルーニング
- データ整理の強化

## クラスタリングのコスト

- テーブルがクラスタリングされるたびに（通常は full-refresh 時）大きな初期コストが発生する
- クラスタリング順序を維持するための継続的な更新に対する限界的なメンテナンスコスト

## クラスタリングを使用する場合

モデルに `incremental_backfill_date` 変数が含まれている場合、完全更新しないよう設定する必要があります。バックフィル DAG がランダムな順序で月を再処理し、ソートされていないテーブルになるため、これらのモデルは大きな再クラスタリング費用が発生する可能性があります。`mart_behavior_structured_event` がその例です。

追加の設定なしに完全更新できるモデルは、dbt がクラスタリングされたテーブルを生成するため、通常の方法でクラスタリングできます。

クラスタリングの使用を検討してください:

- テーブルが大きい（通常 1 TB 以上）場合
- 特定の列を頻繁にクエリする場合
- dbt、Snowsight、Tableau でクエリのパフォーマンスの問題が発生している場合。クエリが選択するテーブルをクラスタリングすることでクエリパフォーマンスが向上します。
- WHERE 句や JOIN でよく使用される高カーディナリティの列がある場合

## クラスタリングの実装方法

### dbt の構文

```sql
cluster_by=['column1','column2'],
automatic_clustering='true'
```

クラスターキーと automatic_clustering 設定はモデルに追加して、モデルが再構築された場合にデフォルトで自動クラスタリングが有効になるようにする必要があります。自動クラスタリングが有効になる前に、増分モデルの full-refresh が必要です。

### SQL による手動適用

テーブルの手動クラスタリングは、以下の SQL コマンドを実行することで実現できます。ただし、この方法は dbt モデルには推奨されません。dbt を通じてテーブルが削除・再作成された場合、クラスタリングが維持されないためです。dbt モデルでは、適切で持続的なクラスタリングを確保するために、先に説明した dbt コードを使用することが推奨されます:

```sql
ALTER TABLE your_table CLUSTER BY (column1, column2, ...);
```

自動クラスタリングは `RESUME RECLUSTER` コマンドを使用して有効にする必要があります。
例えば:

```sql
ALTER TABLE sales CLUSTER BY (date, region) RESUME RECLUSTER;
```

## クラスタリングの監視

Snowflake はクラスタリングを監視するためのシステム関数を提供しています:

```sql
SELECT SYSTEM$CLUSTERING_INFORMATION('your_table');
```

この関数はテーブルのクラスタリング状態に関する有益な情報を返します。情報の解釈方法のいくつかの例は [Snowflake ドキュメント](https://docs.snowflake.com/en/sql-reference/functions/system_clustering_information#examples)で確認できます。

理想的には、`average_overlaps` は 1 未満で、`average_depth` は約 1 であるべきです。高い数値はテーブルが適切にクラスタリングされていないことを示します。

### クラスタリングコストの監視

自動クラスタリングのコストとアクティビティを監視するには、`automatic_clustering_history` テーブルをクエリします。以下にクエリの例を示します:

```sql
SELECT 
    start_time,
    end_time,
    table_name,
    schema_name,
    database_name,
    credits_used,
    num_bytes_reclustered,
    num_rows_reclustered,
    DATEDIFF('minute', start_time, end_time) AS duration_minutes
FROM snowflake.account_usage.automatic_clustering_history
WHERE table_name = 'FCT_BEHAVIOR_STRUCTURED_EVENT'  -- Replace with your table name
    AND schema_name = 'COMMON'                       -- Replace with your schema
    AND database_name = 'PROD'                       -- Replace with your database
    AND start_time >= '2025-12-17'                   -- When clustering was enabled
ORDER BY start_time DESC;
```

主要なメトリクス:

`credits_used`: 自動クラスタリング操作によって消費された Snowflake クレジット
`num_bytes_reclustered`: 再編成されたデータ量（バイト単位）
`num_rows_reclustered`: 再編成された行数
`duration_minutes`: クラスタリング操作にかかった時間

## ベストプラクティス

1. クエリパターンに基づいてクラスタリングキーを賢明に選択する
2. クラスタリングを定期的に監視する
3. テーブルが小さい場合や頻繁な更新がある場合はクラスタリングを再検討する
4. クラスタリングに関連する追加のストレージとメンテナンスコストに注意する
5. 自動クラスタリングが有効なテーブルがクローンされる場合、クローンされたバージョンでは自動クラスタリングがオフになります

クラスタリングを理解し適切に実装することで、Snowflake クエリのパフォーマンスを大幅に向上させ、データウェアハウス操作を最適化できます。
