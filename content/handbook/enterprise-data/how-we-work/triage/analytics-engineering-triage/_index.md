---
title: "Analytics Engineering トリアージガイド"
upstream_path: "/handbook/enterprise-data/how-we-work/triage/analytics-engineering-triage/"
upstream_sha: "ab93800e4c241789ac67785899fa20ffa1eb0854"
translated_at: "2026-11-05T14:56:31.098154+00:00"
translator: claude
stale: false
lastmod: "2026-11-04T09:48:40+01:00"
---

## 概要 {#overview}

Analytics Engineers は週次でトリアージ業務をローテーションします。ローテーションは週単位でアサインされますが、トリアージ担当者はシフト中の**日々のモニタリング**、**Issue の処理**、**コミュニケーション**に責任があります。このガイドでは、毎日何が必要か、Issue の対処方法、ローテーション終了時に完了すべき事項を説明します。

**トリアージはローテーション中の優先事項です。** トリアージ責任にできる限り時間と努力を注いでください。アクティブなトリアージ Issue がない場合にのみ、業務運営や OKR 関連のタスクに取り組んでください。

## トリアージローテーションスケジュール {#triage-rotation-schedule}

トリアージはすべての Analytics Engineers が参加するローテーションで年単位で編成されています。新しいチームメンバーは、シニアリティとチームのニーズに応じて、チームに参加してから 1〜2 四半期後にローテーションに追加されます。

アサインされた週のトリアージを完了できない場合は、別のチームメンバーとスワップを調整していただけます。

## 日々の責任 {#daily-responsibilities}

### パイプラインの状態監視 {#monitor-pipeline-health}

毎日 **#analytics-pipelines** チャンネルを確認します：

- Airflow の失敗  
- Monte Carlo の異常  

失敗を検出した場合：

1. [**既存の Issue を検索**](https://gitlab.com/gitlab-data/analytics/-/issues?sort=created_date&state=opened&label_name%5B%5D=Triage%3A%3AAnalytics&first_page_size=20)して、失敗がすでに追跡されているか確認します。
2. **Issue を作成または更新**します：
   - 根本的な原因が共通する場合は、関連する失敗を 1 つの Issue にまとめます。
   - 重複せず、既存の Issue にコンテキストを追加します。
   - 新しい失敗については、[AE Triage Errors](https://gitlab.com/gitlab-data/analytics/-/issues/new?issuable_template=Triage:%20Errors%20AE%20)テンプレートを使用して、個別の根本原因ごとに 1 つの Issue を作成します。
3. **週次トリアージ Issue にリンク**します：
   - 新規・既存のすべての関連 Issue を現在の週のトリアージ Issue にリンクします。
   - Issue が複数の週にまたがる場合は、関連するトリアージ Issue のそれぞれにリンクします。

#### 毎日の dbt 実行中の失敗 {#failures-during-the-daily-dbt-run}

毎日の `dbt-models` タスクは約 08:45 から 14:35 UTC まで実行され、Analytics Engineers が失敗の通知を受け取るのは実行が終了したときだけです。より早く対応できるように、Monte Carlo の [**EARLY MODEL FAILURE NOTIFICATION**](https://getmontecarlo.com/monitors/7e651fe4-919c-48e6-ae42-2c1ff9863aa7/monitor-details)モニターは、実行が続いている間にモデルが初めて失敗したとき、**#analytics-pipelines** に投稿します（平日、30 分ごと、`wk_*` モデルを除く）。

通知が発生した場合：

- トリアージ担当者、またはオンラインの AE が、失敗したモデルに応じて次の対応を簡単に評価します。実行終了まで待てるか、早めに対応する価値があるかを判断します
- アラート自体の Issue は作成しないでください。実行が終了したら、通常のトリアージフローを通じて失敗したモデルの Issue が作成されます
- Monte Carlo ではデータサンプリングがオフになっているため、アラートにはモデル名が表示されません。確認するには、[今日の dbt 実行でこれまでに失敗したモデル](#models-that-failed-so-far-in-todays-dbt-run)を実行してください

#### トリアージからの Issue の処理 {#processing-issues-from-triage}

トリアージ中に Issue が作成された場合：

1. **自分自身にアサイン**：検出された失敗から作成されたすべての Issue は、最初はトリアージ担当者にアサインされます。
2. **トリアージと検証を完了**します：
   - ログ、エラーメッセージ、モニタリングアラートを使用して問題を明確にドキュメント化します。
   - スコープを調査し、根本的な原因を特定します。
   - 将来のオーナーのためのコンテキストを保持するために、関連する SQL クエリと出力を Issue に貼り付けます。
3. **調査して解決を試みる**
   - トリアージ担当者としての主な責任は、Issue の可能な根本原因を特定することです。
   - 自分のスキルセット内で潜在的な修正をデバッグ、テスト、探索します。
   - 修正が [**3 Issue ポイント未満**](/handbook/enterprise-data/how-we-work/#issue-pointing)と予測される場合は、自分自身で修正を実装してください。
   - 試みたアプローチ、所見、関連する SQL クエリ（機密/MNPI データを除く）を含め、調査を記録します。
4. **エスカレーション**
   - 根本的な原因または必要な修正がドメインの専門知識を明らかに超える場合、**または**作業が **3 Issue ポイント**を超える場合は Issue を再アサインします。
   - 修正が **3 ポイント以上**の場合は、Analytics Engineering Manager にアサインと優先順位付けを決定するようタグ付けします。
   - エスカレーションする際は、調査した内容、除外した内容、根本的な原因と考えられる内容、Issue の再アサインが必要な理由の簡潔なサマリーを含めます。

#### ステークホルダーとのコミュニケーション {#communication-with-stakeholders}

パイプラインの失敗が発生した場合、ステークホルダーへの積極的なコミュニケーションが不可欠です。私たちの目標は、ステークホルダーが自分自身で問題に気づく前に通知することです。

すべての失敗がインシデントに該当するわけではありません。失敗が正式なインシデント管理プロセスを必要とするかどうかを判断するには、[インシデント基準](/handbook/enterprise-data/data-governance/incident-management/)を確認してください。不確かな場合は、過剰にコミュニケーションする方向で行動してください。

### ステークホルダーが作成した新しい Issue のレビュー {#review-new-issues-created-by-stakeholders}

1. `Team::Analytics Engineering` および `workflow::1 - triage and validation` ラベルが付いたアナリティクスプロジェクトの新しい Issue とリクエストをモニタリングします。[アナリティクス Issue](https://gitlab.com/gitlab-data/analytics/-/issues?sort=created_date&state=opened&label_name%5B%5D=Team%3A%3AAnalytics%20Engineering&label_name%5B%5D=workflow%3A%3A1%20-%20triage%20%26%20validation&first_page_size=100)をラベルと作成日でフィルタリングできます。必要なコンテキストがあれば、回答または方向性を提供します。リクエストに別のオーナーが必要な場合は、チームマネージャーに通知してオーナーをアサインし、イテレーションにスケジュールしてもらいます。Issue がトリアージされたら、`workflow::2 - waiting for prioritization` に移行できます。
2. `clean-up::review` ラベルで作成された Issue をモニタリングして、[ステークホルダーが Issue を正しいチームにルーティングするのを支援します](/handbook/enterprise-data/how-we-work/triage/#label-enforcement)。[このボード](https://gitlab.com/gitlab-data/analytics/-/boards/9924098?label_name[]=clean-up%3A%3Areview)を使用して Issue を見つけることができます。

3. [`External Request` ラベルが付いた Issue](https://gitlab.com/gitlab-data/analytics/-/issues?sort=created_date&state=opened&label_name%5B%5D=External%20Request&first_page_size=100)をレビューします。トリアージボットは、ステークホルダーのリクエストを素早く見つけられるように、Data team 外の人が作成した Issue にこのラベルを追加します。Data team 外からのマージリクエストには、[`External MR`](https://gitlab.com/gitlab-data/analytics/-/merge_requests?state=opened&label_name%5B%5D=External%20MR)ラベルと、スタイルガイド、テスト手順、AI エージェントのセットアップを案内するコメントが付けられます。仕組みについては、[外部からのコントリビューション](/handbook/enterprise-data/how-we-work/triage/#external-contributions)を参照してください

### 業務終了時のコミュニケーション {#end-of-day-communication}

#analytics-pipelines に簡単な業務終了時のアップデートを投稿してください。これにより、勤務時間終了後にインシデントが発生した場合、他のチームメンバーがコンテキストを把握して適切に対応できます。

## 週の終わりのまとめ {#end-of-week-wrap-up}

トリアージ週の終わりに：

- ローテーション中に解決された Issue をクローズします。
- オープンのままの Issue に対して、現在のステータスと次のステップを含むアップデートを提供します。
- 次のトリアージ担当者が自分の週を始める際にどこから引き継ぐべきかがわかるよう、**#analytics-pipelines** に週の終わりの引き継ぎメッセージを投稿します。

## 便利なクエリ {#useful-queries}

トリアージや開発でよく使うクエリです。実行する前に、`SET` 文の値を置き換えてください。

### 今日の dbt 実行でこれまでに失敗したモデル {#models-that-failed-so-far-in-todays-dbt-run}

今日のスケジュール済み `dbt-models` 実行でこれまでに失敗したすべてのモデルを、失敗時刻の早い順に一覧表示します。結果が `prod.workspace_data.dbt_node_executions` に反映される前の、実行が続いている間に使用してください。このクエリは、最大 45 分の遅延がある `snowflake.account_usage.query_history` を読み取り、Snowflake クエリの失敗に起因する失敗のみを検出します。Workspace（`wk_*`）モデルは除外されます。

```sql
WITH failed_queries AS (
  SELECT
    REGEXP_SUBSTR(query_text, '"node_name": "([^"]+)"', 1, 1, 'e', 1) AS failed_model,
    CONVERT_TIMEZONE('UTC', end_time)::TIMESTAMP_NTZ                  AS failed_at,
    error_code,
    LEFT(error_message, 500)                                          AS error_message
  FROM snowflake.account_usage.query_history
  WHERE start_time >= DATEADD(hour, 8, CONVERT_TIMEZONE('UTC', CURRENT_TIMESTAMP())::DATE)
    AND user_name = 'AIRFLOW'
    AND query_tag = 'dbt'
    AND execution_status <> 'SUCCESS'
    AND query_text LIKE '%"runner": "dbt__dbt-models__%__scheduled__%'
    AND query_text LIKE '%"resource_type": "model"%'
    AND query_text NOT LIKE '%"node_name": "wk^_%' ESCAPE '^' -- skip workspace (wk_*) models
)

SELECT
  failed_model,
  MIN(failed_at)                    AS first_failed_at,
  MIN_BY(error_code, failed_at)     AS error_code,
  MIN_BY(error_message, failed_at)  AS error_message,
  COUNT(*)                          AS failed_queries
FROM failed_queries
GROUP BY failed_model
ORDER BY first_failed_at
```

### クエリプロファイル {#query-profile}

Snowsight のクエリプロファイルの基になる、生成された行数や演算子ごとの所要時間などの演算子レベルの統計を返します。遅いモデルの負荷が高いステップを見つけるために使用してください。過去 14 日間に完了したクエリで使用できます。

```sql
SELECT *
FROM TABLE(GET_QUERY_OPERATOR_STATS('<query_id>'));
```

### 指定期間のウェアハウス負荷 {#warehouse-load-during-a-time-window}

指定した期間にウェアハウスクラスターで実行されたクエリと、それぞれのクエリが使用したクラスターの割合、キューでの待ち時間を一覧表示します。遅いクエリが他の処理と競合していなかったか確認するために使用してください。

```sql
SET wh_name = 'TRANSFORMING_XL';
SET cluster_number = 1;
SET start_time = '2026-01-01 09:00:00'::TIMESTAMP_LTZ;
SET end_time = '2026-01-01 10:00:00'::TIMESTAMP_LTZ;

SELECT
  start_time,
  end_time,
  query_id,
  cluster_number,
  total_elapsed_time,
  query_load_percent,
  queued_overload_time,
  query_retry_time,
  query_retry_cause
FROM snowflake.account_usage.query_history
WHERE warehouse_name = $wh_name
  AND cluster_number = $cluster_number
  AND execution_time <> 0
  AND start_time <= $end_time -- overlaps the window
  AND end_time >= $start_time
ORDER BY start_time DESC;
```

### 開発環境と本番環境で異なる列 {#columns-that-differ-between-dev-and-prod}

あるテーブルについて、prod と自分の `<USER>_PROD` 開発用データベースの一方にのみ存在する列を一覧表示します。MR を作成する前にモデルの変更を確認したり、開発環境のビルドが prod と一致しない理由を調べたりするために使用してください。

```sql
SET table_schema = 'COMMON';
SET table_name = 'DIM_DATE';
SET dev_columns = (SELECT CURRENT_USER() || '_PROD.INFORMATION_SCHEMA.COLUMNS');

WITH prod_cols AS (

  SELECT column_name
  FROM prod.information_schema.columns
  WHERE table_schema = $table_schema
    AND table_name = $table_name

), dev_cols AS (

  SELECT column_name
  FROM identifier($dev_columns)
  WHERE table_schema = $table_schema
    AND table_name = $table_name

)

SELECT
  COALESCE(prod_cols.column_name, dev_cols.column_name)                  AS column_name,
  IFF(dev_cols.column_name IS NULL, 'missing in dev', 'missing in prod') AS difference
FROM prod_cols
FULL OUTER JOIN dev_cols
  ON prod_cols.column_name = dev_cols.column_name
WHERE prod_cols.column_name IS NULL
  OR dev_cols.column_name IS NULL
ORDER BY difference, column_name;
```

### 開発用データベースのクリーンアップ {#clean-up-your-dev-databases}

ある変更のために作成したテーブルは、その作業を終えた後も開発用データベースに残ります。その後、関連する修正に取り組む際、再ビルドしない上流モデルを dbt がそれらの古いテーブルから読み込むため、結果が prod の内容ではなく以前の変更を反映することがあります。クエリはローカルでは正しく見えても、マージ後には異なる動作をします。クリーンな開発用データベースから始めれば、クエリするすべてのテーブルが現在取り組んでいる変更のためにビルド（またはクローン）されたものになります。

このクエリは、自分の `<USER>_PREP` および `<USER>_PROD` 開発用データベース内の各スキーマについて、`PUBLIC`、`INFORMATION_SCHEMA`、`<USER>_PREP.TEST` を残して、`DROP SCHEMA` コマンドを生成します。コマンドを生成するだけなので、内容をレビューしてから、必要なものをコピーして実行してください。[dbt ガイド](/handbook/enterprise-data/platform/dbt-guide/#local-environment)で推奨されているとおり、開発サイクルの開始時または終了時に実行してください。

```sql
SET username = CURRENT_USER();
SET prep_db = (SELECT $username || '_PREP');
SET prod_db = (SELECT $username || '_PROD');
SET prep_information_schema = (SELECT $username || '_PREP.INFORMATION_SCHEMA.SCHEMATA');
SET prod_information_schema = (SELECT $username || '_PROD.INFORMATION_SCHEMA.SCHEMATA');
USE ROLE identifier($username);
USE WAREHOUSE dev_xs;

SELECT 'DROP SCHEMA ' || $prep_db || '.' || schema_name || ';' AS drop_command
FROM identifier($prep_information_schema)
WHERE schema_name NOT IN ('PUBLIC', 'INFORMATION_SCHEMA', 'TEST')

UNION ALL

SELECT 'DROP SCHEMA ' || $prod_db || '.' || schema_name || ';' AS drop_command
FROM identifier($prod_information_schema)
WHERE schema_name NOT IN ('PUBLIC', 'INFORMATION_SCHEMA');
```
