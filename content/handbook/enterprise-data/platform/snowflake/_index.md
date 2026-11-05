---
title: "Snowflake ガイド"
description: "Snowflake データウェアハウスガイド"
upstream_path: "/handbook/enterprise-data/platform/snowflake/"
upstream_sha: "ab93800e4c241789ac67785899fa20ffa1eb0854"
translated_at: "2026-11-05T14:38:43.466178+00:00"
translator: codex
stale: false
lastmod: "2026-11-04T20:19:30+01:00"
---

## 概要と目的 {#what-and-why}

[Snowflake](https://www.snowflake.com/en/)は私たちの Enterprise Data Warehouse（EDW）であり、[Enterprise Data Platform](/handbook/enterprise-data/platform/#our-data-stack)のコアテクノロジーです。

## Snowflake には何が含まれますか？ {#what-does-snowflake-contain}

Snowflake には私たちのすべての分析データが含まれており、[データソース](/handbook/enterprise-data/platform/#data-sources)が利用可能な元のデータ/生データのセットを定義します。

## 関連コンテンツ {#related-content}

- [アクセス](/handbook/enterprise-data/platform/#warehouse-access)
- [サポートポータルへのアクセス](/handbook/enterprise-data/platform/#snowflake-support-portal-access)
- [コンピュートリソース](/handbook/enterprise-data/platform/#compute-resources)
- [データマスキング](/handbook/enterprise-data/platform/#data-masking)
- [バックアップ](/handbook/enterprise-data/platform/#backups)
- [AI 関数ガイド](/handbook/enterprise-data/platform/snowflake/snowflake-ai-function/snowflake-ai-function.md)
- [Snowflake CLI](/handbook/enterprise-data/platform/snowflake/snowflake-cli/)

## 現在のアクセスモデル {#current-access-model}

Snowflake アクセスは、アカウント履歴と必要なアクセスレベルに応じたハイブリッドモデルで運用されています。

### 現在のアクセスアーキテクチャ {#current-access-architecture}

GitLab における Snowflake アクセスは、複数のシステムが連携して機能する形で分割されています。

- **Lumos** は Snowflake アクセスのリクエストと承認のソリューションとして機能します。
- **Okta SCIM** は Lumos リクエストが承認されたときに Snowflake ユーザーを作成または更新し、（ラッパー）ロールを割り当てます。
  - `SNOWFLAKE_ANALYST_OKTA`（基盤となる `SNOWFLAKE_ANALYST` ロールを継承）
  - `SNOWFLAKE_ANALYST_SAFE_OKTA`（基盤となる `SNOWFLAKE_ANALYST_SAFE` ロールを継承）
- **Permifrost** は、基本的なアナリストロールを超えるすべてのカスタム、チーム固有、および拡張 Snowflake 認可に関する信頼できる唯一の情報源であり続けます。これには機能別ロール（例: `analyst_marketing`）と開発用データベースへのアクセスが含まれます。これは Lumos（`Customer User`）経由、または [アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/)経由でリクエストできます。
- **Snowflake SSO**: ログインタイルと SSO アクセスを提供します。

Okta SCIM パスは、Analyst と Analyst SAFE という**2 つのアクセスレベルのみ**を対象としています。この 2 つのロールを超えるものはすべて、[Permifrost](/handbook/enterprise-data/platform/permifrost/)プロセスで管理されます。

### Okta SCIM が対象外とする範囲 {#where-okta-scim-stops}

Okta SCIM プロビジョニングパスは、**Analyst** と **Analyst SAFE** という 2 つのベースラインアクセスレベルのみを対象に設計されています。

1. **SCIM 導入前からのユーザー**: Okta SCIM の実装前から Snowflake アカウントが存在していた場合、Okta SCIM はそのアカウントをプロビジョニングしません。
2. **カスタムロールまたは拡張ロール**: チーム固有のロール（例: `analyst_marketing`）、機能別ロール（例: `analyst_core`）、または開発用データベースへのアクセスが必要な場合、それらは Permifrost プロセスを通じて別途管理されます。
3. **複数の管理方式のロールを持つユーザー**: Lumos 管理のベースラインロールと Permifrost 管理のカスタムロールの両方を持つユーザーは、両方のシステムに存在します。Lumos と Permifrost は別々のレイヤーであり、相互に自動でミラーリングされることはありません。

## ログイン {#logging-in}

Okta から Snowflake にログインします。

## UI のナビゲーション {#navigating-the-ui}

[Snowflake Web インターフェイスのクイックツアー](https://docs.snowflake.com/user-guide/ui-snowsight-quick-tour)には、UI に関する包括的なドキュメントがあります。

## Snowflake アカウント設定 {#snowflake-account-configuration}

### ABORT_DETACHED_QUERY {#abort_detached_query}

[ABORT_DETACHED_QUERY](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query)パラメーターはアカウントレベルで `True` に設定されています。

接続が失われたにもかかわらず、クエリが実行を試み続け、完了しないケースがよくあります。このような場合にクエリを実行し続けることには意味がなく、価値もありません。5 分間の猶予期間があります。5 分以内に接続が修復されない場合、ウェアハウスが不要に実行され続けないよう、実行を停止します。

## データ鮮度 {#data-freshness}

データの鮮度を監視するため、`MonteCarlo` の自動モニターを活用しています。

## Snowflake ウェアハウスのサイズ選択ガイド {#snowflake-warehouse-sizing-guide}

### 主要原則 {#key-principles}

1. **すべての開発作業ではデフォルトで `XS` から始めます**。これはすべての環境（Snowsight、Tableau、ローカル dbt 開発など）に適用されます。特定のクエリやワークフローで必要になった場合にのみサイズアップし、その後はサイズダウンします。

2. **過剰プロビジョニングの重要なシグナル**: XS より大きいウェアハウスでクエリを実行しているにもかかわらず 30 秒未満で完了する場合、クレジットを無駄にしている可能性があります。

### ウェアハウスのサイズ選択早見表 {#warehouse-sizing-quick-reference}

| ウェアハウス | ユースケース | スキャンされたパーティション | 大まかな行数 | 目標クエリ時間 |
|-----------|----------|-------------------|-----------------|-------------------|
| **XSmall (XS)** | すばやい検索、単一行クエリ、小規模集計、dbt テスト | <4,000 | 0〜500M レコード | <2 分 |
| **Small (S)** | ダッシュボードクエリ（事前集計済み）、軽量分析、アドホックな探索 | 2,000-8,000 | 250M〜1B レコード | 30 秒〜2 分 |
| **Medium (M)** | 標準的な分析、中程度の複雑さの結合、典型的な dbt モデル | 4,000-16,000 | 500M〜3B レコード | 30 秒〜3 分 |
| **Large (L)** | 重い分析、複雑な変換処理、大規模テーブルスキャン | 8,000-32,000 | 1B〜5B レコード | 1〜10 分 |
| **XLarge (XL)** | 非常に大規模なデータ処理、複雑な ETL、複数テーブルの結合 | 16,000-64,000 | 2B+ レコード | 2〜30 分 |
| **4XL+** | 本番ワークロード向けの大規模な変換処理（例: Snowplow のバックフィル） | 128,000+ | 5B+ レコード | 10+ 分 |

**注:**

- 行数の範囲は、ウェアハウスサイズを過大評価しがちな**非常に大まかな目安**です。3B 行のテーブルでも 1 週間にフィルターすれば、`M` ではなく `XS` で十分な場合があります。これらは手早い出発点としてのみ提供しています。
- より正確なサイジングには、Snowflake Solutions Architects が提供する範囲に基づく `partitions_scanned` を使用してください。これは [`explain` コマンド](https://www.chaosgenius.io/blog/snowflake-explain-guide/)で確認できます。つまり `explain select * from my_table where my_filter;` です。

### 判断フレームワーク: サイズアップするタイミング {#decision-framework-when-to-size-up}

より正確なウェアハウス選択のために、次の 3 つの変数を検討してください。

#### 1. テーブルサイズ（出発点） {#1-table-size-starting-point}

<details>
<summary>クリックして展開</summary>

テーブルのレコード数に基づく出発点のウェアハウスサイズについては、上記の Markdown テーブルを参照してください。

**必ず最初にテーブルサイズを確認してください:**

```sql
SELECT COUNT(*) FROM your_table;
```

</details>

#### 2. フィルター選択性（より小さいままでいられるか？） {#2-filter-selectivity-can-you-stay-smaller}

<details>
<summary>クリックして展開</summary>

##### 時間範囲フィルター（最も強力） {#time-range-filters-most-powerful}

時間ベースの述語は、通常、時系列データで最も選択性が高いものです。

- **1 日〜1 週間**: 非常に大きなテーブルでも **XS** で実行できる場合があります
- **2〜4 週間**: ベーステーブルサイズに応じて **S** または **M** を検討します
- **4 週間超**: テーブルサイズが主要な要因になります

##### その他の選択性の高いフィルター {#other-selective-filters}

- **選択性が高い**（例: `event_action`、`app_id`）: パーティションプルーニングに非常に有効です。ブール値のフラグもプルーニングに有効な場合があります
- **選択性が低い**（`user_id`、`event_id` などのカーディナリティの低いフィールド）: スキャン量への影響は最小限です
- **クラスタリングキーのフィルター**（例: `behavior_at`）: テーブルのクラスタリングと揃っている場合に最も効果的です

**プロのヒント:** 開発中は、結果セット全体の実体化を避けるために `LIMIT` 句を追加してください。

</details>

#### 3. クエリ複雑性（より多くのパワーが必要か？） {#3-query-complexity-need-more-power}

<details>
<summary>クリックして展開</summary>

- **単純なスキャン**: フィルター + 集計 → 推奨サイズのままにします
- **負荷の高い処理**: 大規模な結合、ウィンドウ関数、複雑な集計 → **1 段階サイズアップ**
- **複数テーブルの結合**: 特にフィルターされていないディメンションを伴う場合 → **1〜2 段階サイズアップ**

</details>

### 実例: `mart_behavior_structured_event` {#real-examples-mart_behavior_structured_event}

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

**XS が機能する理由:** 3 日間の時間範囲 + 特定の event_action = 小規模なスキャン

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

**XS が機能する理由:** 集計により結果セットが減り、2 週間の時間範囲は扱いやすいため

</details>

<details>
<summary>例 3: M が必要（大きな結合 + 広い範囲）</summary>

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

**M が必要な理由:** 大規模な結合 + フィルターされていないディメンションにはより多くのメモリが必要なため

</details>

## VS Code の Snowflake 拡張機能 {#vs-code-snowflake-extension}

VS Code から Snowflake を使用するには、拡張機能ペインから [Visual Studio Code 用の Snowflake 拡張機能](https://docs.snowflake.com/en/user-guide/vscode-ext)をインストールします。

**セットアップ:**

1. まず、ブラウザーで Okta 経由で Snowflake UI にログインできることを確認します。
2. VS Code 左サイドバーの Snowflake アイコンをクリックし、次の内容でサインインします。
   - **Account Identifier:** `gitlab`
   - **Auth Method:** Single sign-on
   - **Username:** GitLab の完全なメールアドレス
3. **Sign in** をクリックします。Okta ウィンドウが開きます。SSO を完了し、VS Code に戻ります。

接続したら、Snowflake パネルのドロップダウンを使用してロールとウェアハウスを設定します。

そこから、VS Code で任意の `.sql` ファイルを開き、Web UI に触れずに直接クエリを実行できます。
