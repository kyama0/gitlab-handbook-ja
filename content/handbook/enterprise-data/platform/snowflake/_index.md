---
title: "Snowflake ガイド"
description: "Snowflake データウェアハウスガイド"
upstream_path: "/handbook/enterprise-data/platform/snowflake/"
upstream_sha: ce9fa1b620ec7b7d82d870744ba32e7c4c1fef1c
translated_at: "2026-06-24T07:51:36+09:00"
translator: codex
stale: false
lastmod: "2026-06-23T10:43:07+02:00"
---

## 概要と目的

[Snowflake](https://www.snowflake.com/en/) は私たちの Enterprise Data Warehouse（EDW）であり、[Enterprise Data Platform](/handbook/enterprise-data/platform/#i-classfas-fa-cubes-fa-fw--text-orangeiour-data-stack)のコアテクノロジーです。

## Snowflake には何が含まれますか？

Snowflake には私たちのすべての分析データが含まれており、[Data Sources](/handbook/enterprise-data/platform/#data-sources) が利用可能なオリジナル／raw data のセットを定義します。

## 関連コンテンツ

- [Access](/handbook/enterprise-data/platform/#warehouse-access)
- [Support Portal Access](/handbook/enterprise-data/platform/#snowflake-support-portal-access)
- [Compute Resources](/handbook/enterprise-data/platform/#compute-resources)
- [Data Masking](/handbook/enterprise-data/platform/#data-masking)
- [Backups](/handbook/enterprise-data/platform/#backups)
- [AI Function Guide](/handbook/enterprise-data/platform/snowflake/snowflake-ai-function/snowflake-ai-function.md)

## 現在のアクセスモデル {#current-access-model}

Snowflake アクセスは、アカウント履歴と必要なアクセスレベルに応じたハイブリッドモデルで運用されています。

### 現在のアクセスアーキテクチャ

GitLab における Snowflake アクセスは、複数のシステムが連携して機能する形で分割されています。

- **Lumos** は Snowflake アクセスのリクエストと承認のソリューションとして機能します。
- **Okta SCIM** は Lumos リクエストが承認されたときに Snowflake ユーザーを作成または更新し、（wrapper）ロールを割り当てます。
  - `SNOWFLAKE_ANALYST_OKTA`（基盤となる `SNOWFLAKE_ANALYST` ロールを継承）
  - `SNOWFLAKE_ANALYST_SAFE_OKTA`（基盤となる `SNOWFLAKE_ANALYST_SAFE` ロールを継承）
- **Permifrost** は、ベースラインの analyst ロールを超えるすべてのカスタム、チーム固有、および拡張 Snowflake 認可に関する信頼できる唯一の情報源であり続けます。これには functional roles（例: `analyst_marketing`）と dev database access が含まれます。これは Lumos（`Customer User`）経由、または [Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/) 経由でリクエストできます。
- **Snowflake SSO**: ログインタイルと SSO アクセスを提供します。

Okta SCIM パスは、Analyst と Analyst SAFE という**2 つのアクセスレベルのみ**を対象としています。この 2 つのロールを超えるものはすべて、[Permifrost](/handbook/enterprise-data/platform/permifrost/) プロセスで管理されます。

### Okta SCIM が対象外とする範囲

Okta SCIM プロビジョニングパスは、**Analyst** と **Analyst SAFE** という 2 つのベースラインアクセスレベルのみを対象に設計されています。

1. **Pre-SCIM users**: Okta SCIM の実装前から Snowflake アカウントが存在していた場合、Okta SCIM はそのアカウントをプロビジョニングしません。
2. **Custom or extended roles**: チーム固有のロール（例: `analyst_marketing`）、functional roles（例: `analyst_core`）、または dev database access が必要な場合、それらは Permifrost プロセスを通じて別途管理されます。
3. **Mixed-role users**: Lumos 管理のベースラインロールと Permifrost 管理のカスタムロールの両方を持つユーザーは、両方のシステムに存在します。Lumos と Permifrost は別々のレイヤーであり、相互に自動でミラーリングされることはありません。

## ログイン

Okta から Snowflake にログインします。

## UI のナビゲーション

[Snowflake Quick Tour of the Web Interface](https://docs.snowflake.com/user-guide/ui-snowsight-quick-tour) には、UI に関する包括的なドキュメントがあります。

## Snowflake アカウント設定

### ABORT_DETACHED_QUERY

[ABORT_DETACHED_QUERY](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query) パラメーターは account level で `True` に設定されています。

接続が失われたにもかかわらず、クエリが実行を試み続け、完了しないケースがよくあります。このような場合にクエリを実行し続けることには意味がなく、価値もありません。5 分間の猶予期間があります。5 分以内に接続が修復されない場合、warehouse が不要に実行され続けないよう、実行を停止します。

## データ鮮度

データの鮮度を監視するため、`MonteCarlo` の自動 monitors を活用しています。

## Snowflake Warehouse サイジングガイド

### 主要原則

1. **すべての開発作業ではデフォルトで `XS` から始めます**。これはすべての環境（Snowsight、Tableau、ローカル dbt 開発など）に適用されます。特定のクエリやワークフローで必要になった場合にのみサイズアップし、その後はサイズダウンします。

2. **過剰プロビジョニングの重要なシグナル**: XS より大きい warehouse でクエリを実行しているにもかかわらず 30 秒未満で完了する場合、credits を無駄にしている可能性があります。

### Warehouse サイジング早見表

| Warehouse | ユースケース | スキャンされたパーティション | 大まかな行数 | 目標クエリ時間 |
|-----------|----------|-------------------|-----------------|-------------------|
| **XSmall (XS)** | すばやい lookup、単一行クエリ、小規模集計、dbt tests | <4,000 | 0〜500M レコード | <2 分 |
| **Small (S)** | Dashboard queries（事前集計済み）、軽量分析、ad-hoc exploration | 2,000-8,000 | 250M〜1B レコード | 30 秒〜2 分 |
| **Medium (M)** | 標準的な分析、中程度の複雑さの join、典型的な dbt models | 4,000-16,000 | 500M〜3B レコード | 30 秒〜3 分 |
| **Large (L)** | 重い分析、複雑な transformations、大規模 table scans | 8,000-32,000 | 1B〜5B レコード | 1〜10 分 |
| **XLarge (XL)** | 非常に大規模なデータ処理、複雑な ETL、multi-table joins | 16,000-64,000 | 2B+ レコード | 2〜30 分 |
| **4XL+** | 本番ワークロード向けの大規模 transformations（例: Snowplow backfills） | 128,000+ | 5B+ レコード | 10+ 分 |

**注:**

- 行数の範囲は、warehouse サイズを過大評価しがちな**非常に大まかな目安**です。3B 行のテーブルでも 1 週間にフィルターすれば、`M` ではなく `XS` で十分な場合があります。これらは手早い出発点としてのみ提供しています。
- より正確なサイジングには、Snowflake Solutions Architects が提供する範囲に基づく `partitions_scanned` を使用してください。これは [`explain` command](https://www.chaosgenius.io/blog/snowflake-explain-guide/) で確認できます。つまり `explain select * from my_table where my_filter;` です。

### 判断フレームワーク: サイズアップするタイミング

より正確な warehouse 選択のために、次の 3 つの変数を検討してください。

#### 1. テーブルサイズ（出発点）

<details>
<summary>クリックして展開</summary>

テーブルの record count に基づく出発点の warehouse サイズについては、上記の markdown table を参照してください。

**必ず最初にテーブルサイズを確認してください:**

```sql
SELECT COUNT(*) FROM your_table;
```

</details>

#### 2. フィルター選択性（より小さいままでいられるか？）

<details>
<summary>クリックして展開</summary>

##### 時間範囲フィルター（最も強力）

時間ベースの述語は、通常、時系列データで最も選択性が高いものです。

- **1 日〜1 週間**: 非常に大きなテーブルでも **XS** で実行できる場合があります
- **2〜4 週間**: ベーステーブルサイズに応じて **S** または **M** を検討します
- **4 週間超**: テーブルサイズが主要な要因になります

##### その他の選択性の高いフィルター

- **選択性が高い**（例: `event_action`、`app_id`）: partition pruning に非常に有効です。boolean flags も pruning に有効な場合があります
- **選択性が低い**（`user_id`、`event_id` などの low cardinality fields）: scan size への影響は最小限です
- **Clustering key filters**（例: `behavior_at`）: テーブルの clustering と揃っている場合に最も効果的です

**プロのヒント:** 開発中は、full result set materialization を避けるために `LIMIT` 句を追加してください。

</details>

#### 3. クエリ複雑性（より多くのパワーが必要か？）

<details>
<summary>クリックして展開</summary>

- **Simple scans**: Filters + aggregations → 推奨サイズのままにします
- **Heavy operations**: Large joins、window functions、complex aggregations → **1 段階サイズアップ**
- **Multi-table joins**: 特に unfiltered dimensions を伴う場合 → **1〜2 段階サイズアップ**

</details>

### 実例: `mart_behavior_structured_event`

これらの例は、私たちの最大級のテーブルの 1 つであっても、`XS` で十分な場合があることを示しています。

<details>
<summary>例 1: XS で十分（狭い時間範囲の場合）</summary>

```sql
-- 51 seconds on DEV_XS
-- No LIMIT, but highly filtered time range (3 days)
SELECT *
FROM PROD.COMMON_MART.MART_BEHAVIOR_STRUCTURED_EVENT
WHERE BEHAVIOR_AT BETWEEN '2025-01-01' AND '2025-01-03'
  AND event_action = 'check_policy_scope_for_security_policy'
  AND app_id = 'gitlab';
```

**XS が機能する理由:** 3 日間の time window + specific event_action = small scan

</details>

<details>
<summary>例 2: XS が許容可能（集計、2 週間の範囲）</summary>

```sql
-- 49 seconds on DEV_XS
-- Aggregation with moderate time range
SELECT
    event_action,
    COUNT(*) AS ct
FROM PROD.COMMON_MART.MART_BEHAVIOR_STRUCTURED_EVENT
WHERE BEHAVIOR_AT BETWEEN '2025-02-01' AND '2025-02-15'
GROUP BY ALL
HAVING ct > 50
ORDER BY ct DESC;
```

**XS が機能する理由:** Aggregation により result set が減り、2 週間の window は扱いやすいため

</details>

<details>
<summary>例 3: M が必要（大きな join + 広い範囲）</summary>

```sql
-- 71 seconds on DEV_M
-- Joins 2TB fact table (filtered) with 260GB dimension (unfiltered)
SELECT *
FROM prod.common.fct_behavior_website_page_view fct
JOIN prod.common.dim_behavior_website_page dim
  ON fct.dim_behavior_website_page_sk = dim.dim_behavior_website_page_sk
WHERE behavior_at >= CURRENT_DATE - 7
  AND dim.app_id = 'docs'
LIMIT 10000;
```

**M が必要な理由:** Large join + unfiltered dimension にはより多くのメモリが必要なため

</details>

## VS Code Snowflake extension

VS Code から Snowflake を使用するには、Extensions pane から [Snowflake Extension for Visual Studio Code](https://docs.snowflake.com/en/user-guide/vscode-ext) をインストールします。

**セットアップ:**

1. まず、ブラウザーで Okta 経由で Snowflake UI にログインできることを確認します。
2. VS Code 左サイドバーの Snowflake アイコンをクリックし、次の内容でサインインします。
   - **Account Identifier:** `gitlab`
   - **Auth Method:** Single sign-on
   - **Username:** GitLab の完全なメールアドレス
3. **Sign in** をクリックします。Okta ウィンドウが開きます。SSO を完了し、VS Code に戻ります。

接続したら、Snowflake パネルの dropdowns を使用して role と warehouse を設定します。

そこから、VS Code で任意の `.sql` ファイルを開き、web UI に触れずに直接クエリを実行できます。
