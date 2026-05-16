---
title: "SQL スタイルガイド"
description: "GitLab における SQL 記述の規約とガイドライン"
upstream_path: "/handbook/enterprise-data/platform/sql-style-guide/"
upstream_sha: "b751749fb746d2e0131db68b13218fc2e08cf6b2"
translated_at: "2026-04-29T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-09-03T10:40:33+02:00"
---

## SQL スタイルガイド

このガイドは SQL の標準を定めており、SQLFluff リンターとコードレビューによって適用されます。このスタイルガイドが対象とするコード変更は、dbt を使用して行われたものです。

Data Team 以外の方や、dbt 以外で SQL を開発している方は、リンティングツールの適用が難しい場合があることをご承知ください。ただし、このガイド内のガイダンスに従うことは歓迎します。

### 使い方

私たちは、人々が開発中にこのガイドに示されたスタイルを使用することを期待しています。CI パイプラインは手動でしか実行されないため、施行はレビュー時に行われることが引き続き想定されます。将来的には、すべての変更でパイプラインが実行され、最終的にはパイプラインの通過が必須となります。

以前のスタイルガイドは、リンターがサポートしていない混在インデントスタイルを使用していたため、すべてのモデルは最初のチェックで失敗する可能性があります。モデルを変更の過程で通常通り作業しながら新しいスタイルに更新していく意図があります（すべてのルールが自動施行できるわけではないため、明示的なカラムエイリアス化など）。これにより変更を管理しやすく保てます。

### SQLFluff

SQLFLuff は dbt のようなテンプレートツールと連携する SQL リンターです。私たちはこれを使用して、記述する SQL の基本的な構造とスタイルを定義し、その構造とスタイルのレビューを著者の手に委ねます。SQLFluff は dbt 開発環境に含まれており、リンティングプロセス中に dbt テンプレートエンジンを使用します。次のコマンドで使用できます：

```console
sqlfluff lint models/path/to/file/file-to-lint.sql
```

dbt の Python 仮想環境にいる場合は、dbt モデル名を指定した `make` コマンドを使用できます：

```console
make lint-models MODEL="model_name"
```

dbt コマンドを使用してリントするファイルのリストを取得することもできます：

```console
sqlfluff lint $(dbt list --model model_name --output path)
```

dbt を使用してテンプレート化されていない SQL を記述している場合は、SQLFluff をスタンドアロン Python パッケージとして直接インストールして使用できます。

```console
pip install sqlfluff
sqlfluff lint path/to/file/file-to-lint.sql
```

SQLFluff には、可能な場合にルール違反に修正を適用する `fix` コマンドが含まれています。すべてのルール違反が自動修正可能ではないため、`fix` コマンドを使用した後に `lint` コマンドを実行してすべてのルール違反が解決されていることを確認することをお勧めします。

- [SQLFluff ドキュメント](https://docs.sqlfluff.com/en/latest/index.html)
- [SQLFluff デフォルト設定](https://docs.sqlfluff.com/en/stable/configuration/default_configuration.html)

#### デフォルト設定からの変更

- ダイアレクトを Snowflake に設定
- テンプレーターを dbt に設定
- 以下のルールを除外：
  - L016 行の長さ
  - L031 FROM または JOIN 句のテーブルエイリアスなし
  - L034 SELECT 文での単純ターゲットと計算の順序
- SELECT 文内でのカラムエイリアスの整列
- ハンギングインデントの使用を除外
- タブサイズを 2 スペースに設定
- キーワード、データ型、関数を常に大文字にする
- テーブルエイリアスを最低 4 文字に設定

Data Team が使用する設定ファイルは [GitLab Data Team リポジトリ](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/.sqlfluff)にあります。

### 一般的なガイダンス

- コード行数を少なくするために最適化しないでください。改行は安価ですが[脳の時間は高価です](https://www.getdbt.com/blog/write-better-sql-a-defense-of-group-by-1)。

- [DRY 原則](https://www.getdbt.com/blog/guide-to-dry)に親しんでください。dbt では CTE、Jinja、マクロを活用し、Sisense ではスニペットを活用してください。同じ行を 2 回入力した場合、2 箇所でメンテナンスが必要です。

- 一貫性を保ってください。何かを行う最善の方法が不明な場合でも、コード全体で同じ方法で行えば、読みやすく、必要に応じて変更しやすくなります。

- 明示的にしてください。何かを明示的に定義することで、期待どおりに動作し、次の人（あなた自身かもしれません）が SQL を明示的にすると理解しやすくなります。

### ベストプラクティス

- タブを使用しないでください — スペースのみを使用します。エディターがタブをスペースに変換するよう設定してください。詳細は[オンボーディングテンプレート](https://gitlab.com/gitlab-data/analytics/-/blob/master/.gitlab/issue_templates/Team%3A%20Data%20Onboarding.md)を参照してください。

- 長いコード行（80〜100 文字）は新しい行に折り返してください。

- Snowflake では不正確な結果を生成するため、結合で `USING` コマンドを使用しないでください。この件のフォーラムディスカッションを見るにはアカウントを作成してください。[このトピックに関するフォーラムディスカッション](https://community.snowflake.com/s/question/0D50Z00008WRZBBSA5/bug-with-join-using-)。

- 以下の関連ステートメントの違いを理解し、適切に使用してください：
  - `UNION ALL` と `UNION`
  - `LIKE` と `ILIKE`
  - `NOT` と `!` と `<>`
  - `DATE_PART()` と `DATE_TRUNC()`

- カラムやテーブルにエイリアスを付ける場合は `AS` 演算子を使用してください。

- インライン加算 `date_column + interval_column` より `DATEDIFF` を優先してください。この関数はより明示的で、より広い範囲の日付部分で機能します。

- `<>` より `!=` を優先してください。`!=` は他のプログラミング言語でより一般的で、「等しくない」と読め、私たちが話す方法に近いためです。

- `column ILIKE '%Match%'` より `LOWER(column) LIKE '%match%'` を優先してください。これにより、予期しない結果につながる大文字の混入の可能性を減らします。

- いずれかが十分な場合は `HAVING` より `WHERE` を優先してください。

### コメント

- モデルで単一行コメントを作成する場合は `--` 構文を使用する
- モデルで複数行コメントを作成する場合は `/*  */` 構文を使用する
- コメントを作成する際は文字行制限を尊重する。コメントが長すぎる場合は新しい行またはモデルドキュメントに移動する
- dbt モデルドキュメントが利用可能な場合は活用する
- SQL で行われた計算には何が起こっているかの簡単な説明と、利用可能であればメトリクス（およびその計算方法）を定義するハンドブックへのリンクを含める
- `TODO` コメントを残す代わりに、改善のための新しい Issue を作成する

### 命名規則

- `id`、`name`、`type` のような曖昧なフィールド名には、常に何を識別または命名しているかのプレフィックスを付けてください：

    ```sql
    -- 推奨
    SELECT
        id    AS account_id,
        name  AS account_name,
        type  AS account_type,
        ...

    -- vs

    -- 非推奨
    SELECT
        id,
        name,
        type,
        ...

    ```

- すべてのフィールド名は [スネークケース](https://en.wikipedia.org/wiki/Snake_case) にしてください：

    ```sql
    -- 推奨
    SELECT
        dvcecreatedtstamp AS device_created_timestamp
        ...

    -- vs

    -- 非推奨
    SELECT
        dvcecreatedtstamp AS DeviceCreatedTimestamp
        ...

    ```

- ブール型フィールド名は `has_`、`is_`、または `does_` で始めてください：

    ```sql
    -- 推奨
    SELECT
        deleted AS is_deleted,
        sla     AS has_sla
        ...


    -- vs

    -- 非推奨
    SELECT
        deleted,
        sla,
        ...

    ```

- タイムスタンプは `_at` で終わり、常に UTC にしてください。
- 日付は `_date` で終わらせてください。
- 日付を切り捨てる場合は、切り捨てに応じてカラムに名前を付けてください。

    ```sql

    SELECT
        original_at,                                        -- 2020-01-15 12:15:00.00
        original_date,                                      -- 2020-01-15
        DATE_TRUNC('month',original_date) AS original_month -- 2020-01-01
        ...


    ```

- カラム名として `date` や `month` などのキーワードを避けてください。

### 参照規則

- テーブルを結合して両方のテーブルのカラムを参照する場合は以下を検討してください：
  - テーブル名が短い（20 文字以下程度）場合は、エイリアスの代わりに完全なテーブル名を参照する（可能であれば CTE の名前を変更し、最後に説明的なエイリアスを検討する）
  - 簡単にナビゲートできるよう SELECT 文の各カラムをテーブル名/エイリアスで修飾する

    ```sql
    -- 推奨
    SELECT
        budget_forecast.account_id,
        date_details.fiscal_year,
        date_details.fiscal_quarter,
        date_details.fiscal_quarter_name,
        cost_category.cost_category_level_1,
        cost_category.cost_category_level_2
    FROM budget_forecast_cogs_opex AS budget_forecast
    LEFT JOIN date_details
        ON date_details.first_day_of_month = budget_forecast.accounting_period
    LEFT JOIN cost_category
        ON budget_forecast.unique_account_name = cost_category.unique_account_name


    -- vs

    -- 非推奨
    SELECT
        a.account_id,
        b.fiscal_year,
        b.fiscal_quarter,
        b.fiscal_quarter_name,
        c.cost_category_level_1,
        c.cost_category_level_2
    FROM budget_forecast_cogs_opex a
    LEFT JOIN date_details b
        ON b.first_day_of_month = a.accounting_period
    LEFT JOIN cost_category c
        ON b.unique_account_name = c.unique_account_name
    ```

- 特殊文字を含むカラムや大文字小文字を区別するカラムなど、必要な場合にのみダブルクォートを使用してください。

    ```sql
        -- 推奨
        SELECT
            "First_Name_&_" AS first_name,
            ...

        -- vs

        -- 非推奨
        SELECT
            FIRST_NAME AS first_name,
            ...

    ```

- JSON へのアクセスには[ブラケット構文](https://docs.snowflake.com/en/user-guide/querying-semistructured#bracket-notation)を優先してください。

    ```sql
        -- 推奨
        SELECT
            data_by_row['id']::bigint as id_value
            ...

        -- vs

        -- 非推奨
        SELECT
            data_by_row:"id"::bigint as id_value
            ...
    ```

- 明示的な結合ステートメントを優先してください。

    ```sql
        -- 推奨
        SELECT *
        FROM first_table
        INNER JOIN second_table
        ...

        -- vs

        -- 非推奨
        SELECT *
        FROM first_table,
            second_table
        ...
    ```

- `LATERAL FLATTEN` でも明示的な結合ステートメントを優先してください。ただし、現在のコードベースはこの慣行を一貫して守っていないことに注意してください。

    ```sql
        -- 推奨
        SELECT
            data.value,
            source.uploaded_at
        FROM source
        INNER JOIN LATERAL FLATTEN(input => source.jsontext['data']) AS data
        ...

        -- vs

        -- 非推奨
        SELECT
            data.value,
            source.uploaded_at
        FROM source,
            LATERAL FLATTEN(input => source.jsontext['data']) AS data
        ...
    ```

### 共通テーブル式（CTE）

- [CTE は SQL をより読みやすくし、パフォーマンスが高い](https://www.alisa-in.tech/post/2019-10-02-ctes/)ため、サブクエリよりも CTE を優先してください：

    ```sql
    -- 推奨
    WITH important_list AS (

        SELECT DISTINCT
            specific_column
        FROM other_table
        WHERE specific_column != 'foo'

    )

    SELECT
        primary_table.column_1,
        primary_table.column_2
    FROM primary_table
    INNER JOIN important_list
        ON primary_table.column_3 = important_list.specific_column

    -- vs

    -- 非推奨
    SELECT
        primary_table.column_1,
        primary_table.column_2
    FROM primary_table
    WHERE primary_table.column_3 IN (
        SELECT DISTINCT specific_column
        FROM other_table
        WHERE specific_column != 'foo')

    ```

- 他のテーブルを参照するには CTE を使用してください。
- CTE はクエリの先頭に置いてください。
- パフォーマンスが許す限り、CTE は単一の論理的な作業単位を実行するべきです。
- CTE 名はわかりやすさを保ちながらできるだけ簡潔にしてください。
  - `replace_sfdc_account_id_with_master_record_id` のような長い名前を避け、CTE にコメントを付けた短い名前を優先してください。これにより結合でのテーブルエイリアス化を避けられます。
- 複雑または注目すべきロジックを持つ CTE はファイル内にコメントし、dbt ドキュメントに記載してください。
- 複数のモデルで重複している CTE は独自のモデルに抽出してください。

### 集計

- 非集計カラムを最初に、集計カラムをその後に続ける形で SELECT 文のカラムを並べてください：

    ```sql
    -- 推奨
    SELECT
        customer_id,
        customer_name,
        order_date,
        product_category,
        COUNT(*) AS order_count,
        SUM(order_amount) AS total_amount,
        MAX(order_date) AS latest_order_date
    FROM orders
    -- 以下のいずれかを使用
    GROUP BY customer_id, customer_name, order_date, product_category
    GROUP BY 1, 2, 3, 4
    {{ dbt_utils.group_by(n=4) }}

    -- vs

    -- 非推奨
    SELECT
        COUNT(*) AS order_count,
        customer_id,
        SUM(order_amount) AS total_amount,
        customer_name,
        MAX(order_date) AS latest_order_date,
        order_date,
        product_category
    FROM orders
    GROUP BY customer_id, customer_name, order_date, product_category
    ```

- dbt モデルで `GROUP BY` 句を記述する際は、集計を**明示的かつ意図的に**するアプローチを優先してください。これは [group_by dbt マクロ](https://github.com/dbt-labs/dbt-utils?tab=readme-ov-file#group_by-source) および明示的または位置参照のカラム参照を使用することで実現できます。集計ロジックの重要な変更を隠す可能性があるため [GROUP BY ALL](https://docs.snowflake.com/en/sql-reference/constructs/group-by#label-group-by-all-columns) は**避けてください**。

    ```sql
    -- 推奨
    SELECT
        customer_id,
        region,
        SUM(revenue) AS total_revenue
    FROM {{ ref('orders') }}
    -- 以下のいずれかを使用
    {{ dbt_utils.group_by(n=2) }}
    GROUP BY customer_id, region
    GROUP BY 1, 2

    -- vs

    -- 非推奨
    SELECT
        customer_id,
        region,
        SUM(revenue) AS total_revenue
    FROM {{ ref('orders') }}
    GROUP BY ALL
    ```

### データ型

- デフォルトのデータ型を使用し、エイリアスは使用しないでください。詳細は [Snowflake のデータ型サマリ](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types)を参照してください。デフォルトは：
  - `DECIMAL`、`NUMERIC`、`INTEGER`、`BIGINT` などの代わりに `NUMBER`
  - `DOUBLE`、`REAL` などの代わりに `FLOAT`
  - `STRING`、`TEXT` などの代わりに `VARCHAR`
  - `DATETIME` の代わりに `TIMESTAMP`

    この例外はタイムスタンプです。`TIME` より `TIMESTAMP` を優先してください。`TIMESTAMP` のデフォルトは `TIMESTAMP_NTZ` でタイムゾーンを含みません。

- 論理データ型には `BOOLEAN` を優先: `1`/`0` の代わりに `TRUE`/`FALSE`。

### 関数

- `NVL` より `IFNULL` を優先してください。
- 単一行の `CASE` 文より `IFF` を優先してください：

    ```sql
    -- 推奨
    SELECT
        IFF(column_1 = 'foo', column_2,column_3) AS logic_switch,
        ...

    -- vs

    -- 非推奨
    SELECT
        CASE
            WHEN column_1 = 'foo' THEN column_2
            ELSE column_3
        END AS logic_switch,
        ...
    ```

- ブール文の選択には `IFF` を優先してください：

    ```sql
    -- 推奨
    SELECT
        IFF(amount < 10,TRUE,FALSE) AS is_less_than_ten,
        ...
    -- vs

    -- 非推奨
    SELECT
        (amount < 10) AS is_less_than_ten,
        ...
    ```

- 可能な場合は繰り返しの `CASE` 文を簡略化することを優先してください：

    ```sql
    -- 推奨
    SELECT
        CASE field_id
            WHEN 1 THEN 'date'
            WHEN 2 THEN 'integer'
            WHEN 3 THEN 'currency'
            WHEN 4 THEN 'boolean'
            WHEN 5 THEN 'variant'
            WHEN 6 THEN 'text'
        END AS field_type,
        ...

    -- vs

    -- 非推奨
    SELECT
        CASE
            WHEN field_id = 1 THEN 'date'
            WHEN field_id = 2 THEN 'integer'
            WHEN field_id = 3 THEN 'currency'
            WHEN field_id = 4 THEN 'boolean'
            WHEN field_id = 5 THEN 'variant'
            WHEN field_id = 6 THEN 'text'
        END AS field_type,
        ...

    ```

- `date_part` より明示的な日付関数を優先し、`extract` より `date_part` を優先してください：

    ```sql
    DAYOFWEEK(created_at) > DATE_PART(dayofweek, 'created_at') > EXTRACT(dow FROM created_at)
    ```

- [`DATEDIFF`](https://docs.snowflake.net/manuals/sql-reference/functions/datediff.html) 関数を使用する際は日付部分の間隔に注意してください。この関数は整数の間隔の結果のみを返します。

### サンプルコード

このサンプルコードは SQLFluff リンターで処理され、スタイルガイドが適用されています。

```sql

WITH my_data AS (

  SELECT my_data.*
  FROM prod.my_data_with_a_long_table_name AS my_data
  INNER JOIN prod.other_thing
  WHERE my_data.filter = 'my_filter'

),

some_cte AS (

  SELECT DISTINCT
    id                                                       AS other_id,
    other_field_1,
    other_field_2,
    date_field_at,
    data_by_row,
    field_4,
    field_5,
    LAG(
      other_field_2
    ) OVER (PARTITION BY other_id, other_field_1 ORDER BY 5) AS previous_other_field_2
  FROM prod.my_other_data

),
/*
This is a very long comment: It is good practice to leave comments in code to
explain complex logic in CTEs or business logic which may not be intuitive to
someone who does not have intimate knowledge of the data source. This can help
new users familiarize themselves with the code quickly.
*/

final AS (

  SELECT
    -- This is a singel line comment
    my_data.field_1                                              AS detailed_field_1,
    my_data.field_2                                              AS detailed_field_2,
    my_data.detailed_field_3,
    DATE_TRUNC('month', some_cte.date_field_at)                  AS date_field_month,
    some_cte.data_by_row['id']::NUMBER                           AS id_field,
    IFF(my_data.detailed_field_3 > my_data.field_2, TRUE, FALSE) AS is_boolean,
    CASE
      WHEN my_data.cancellation_date IS NULL
        AND my_data.expiration_date IS NOT NULL
        THEN my_data.expiration_date
      WHEN my_data.cancellation_date IS NULL
        THEN my_data.start_date + 7 -- There is a reason for this number
      ELSE my_data.cancellation_date
    END                                                          AS adjusted_cancellation_date,
    COUNT(*)                                                     AS number_of_records,
    SUM(some_cte.field_4)                                        AS field_4_sum,
    MAX(some_cte.field_5)                                        AS field_5_max
  FROM my_data
  LEFT JOIN some_cte
    ON my_data.id = some_cte.id
  WHERE my_data.field_1 = 'abc'
    AND (my_data.field_2 = 'def' OR my_data.field_2 = 'ghi')
  GROUP BY 1, 2, 3, 4, 5, 6
  HAVING COUNT(*) > 1
  ORDER BY 8 DESC
)

SELECT *
FROM final

```

### その他の SQL スタイルガイド

- [Brooklyn Data Co](https://github.com/brooklyn-data/co/blob/main/sql_style_guide.md)
- [dbt Labs](https://github.com/dbt-labs/corp/blob/main/dbt_style_guide.md)
- [Matt Mazur](https://github.com/mattm/sql-style-guide)
- [Kickstarter](https://gist.github.com/fredbenenson/7bb92718e19138c20591)
