---
title: "Snowflake ガイド"
description: "Snowflake データウェアハウスガイド"
upstream_path: "/handbook/enterprise-data/platform/snowflake/"
upstream_sha: "d638a3d5418a620365f135648ea547e0992abbf1"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

## 概要と目的

[Snowflake](https://www.snowflake.com/en/) は私たちのエンタープライズデータウェアハウス（EDW）であり、[エンタープライズデータプラットフォーム](/handbook/enterprise-data/platform/#i-classfas-fa-cubes-fa-fw--text-orangeiour-data-stack)のコアテクノロジーです。

## Snowflake に含まれるもの

Snowflake にはすべての分析データが含まれており、[データソース](/handbook/enterprise-data/platform/#data-sources)が利用可能な元データ/生データのセットを定義しています。

## 関連コンテンツ

- [アクセス](/handbook/enterprise-data/platform/#warehouse-access)
- [サポートポータルアクセス](/handbook/enterprise-data/platform/#snowflake-support-portal-access)
- [コンピューティングリソース](/handbook/enterprise-data/platform/#compute-resources)
- [データマスキング](/handbook/enterprise-data/platform/#data-masking)
- [バックアップ](/handbook/enterprise-data/platform/#backups)
- [AI 関数ガイド](/handbook/enterprise-data/platform/snowflake/snowflake-ai-function/snowflake-ai-function.md)

## ログイン

Okta から Snowflake にログインしてください。

## UI のナビゲート

[Snowflake の Web インターフェースのクイックツアー](https://docs.snowflake.com/user-guide/ui-snowsight-quick-tour)で UI に関する包括的なドキュメントが提供されています。

## Snowflake アカウント設定

### ABORT_DETACHED_QUERY

[ABORT_DETACHED_QUERY](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query) パラメーターはアカウントレベルで `True` に設定されています。

接続が失われてクエリが実行を続けるが完了しないケースがよくあります。このような場合、クエリが実行し続けることは意味がなく、価値を追加しません。5分間の猶予期間があります。接続が5分で復旧しない場合は、ウェアハウスが不必要に実行しないよう実行が停止されます。

## データ鮮度

`MonteCarlo` の自動モニターを活用してデータの鮮度を監視しています。

## Snowflake ウェアハウスサイジングガイド

### 主要な原則

1. **すべての開発作業ではデフォルトで `XS` から開始する**（Snowsight、Tableau、ローカル dbt 開発など、すべての環境）。特定のクエリやワークフローが必要とする場合にのみサイズアップし、その後サイズダウンしてください。

2. **過剰プロビジョニングの主なシグナル**: XS より大きいウェアハウスでクエリを実行しているが 30 秒未満で完了する場合、クレジットを無駄にしている可能性があります。

### ウェアハウスサイジングクイックリファレンス

| ウェアハウス | ユースケース | スキャンパーティション数 | 概算レコード数 | 目標クエリ時間 |
|-----------|----------|-------------------|-----------------|-------------------|
| **XSmall (XS)** | クイックルックアップ、単一行クエリ、小さな集計、dbt テスト | <4,000 | 0-5億レコード | 2分未満 |
| **Small (S)** | ダッシュボードクエリ（事前集計済み）、軽量な分析、アドホック探索 | 2,000-8,000 | 2.5億-10億レコード | 30秒-2分 |
| **Medium (M)** | 標準的な分析、中程度の複雑さの JOIN、典型的な dbt モデル | 4,000-16,000 | 5億-30億レコード | 30秒-3分 |
| **Large (L)** | 重い分析、複雑な変換、大きなテーブルスキャン | 8,000-32,000 | 10億-50億レコード | 1-10分 |
| **XLarge (XL)** | 非常に大規模なデータ処理、複雑な ETL、マルチテーブル JOIN | 16,000-64,000 | 20億以上のレコード | 2-30分 |
| **4XL+** | 本番ワークロードの大規模変換（例: Snowplow バックフィル） | 128,000以上 | 50億以上のレコード | 10分以上 |

**注意:**

- レコード数の範囲はウェアハウスサイズを**大幅に過大評価することの多い非常に大まかなガイドライン**です。3億行のテーブルを1週間でフィルタリングすると、`M` ではなく `XS` しか必要ない場合があります。クイックな参照としてのみ提供しています。
- より正確なサイジングには、`partitions_scanned`（Snowflake ソリューションアーキテクトが提供する範囲）を使用してください。[`explain` コマンド](https://www.chaosgenius.io/blog/snowflake-explain-guide/)で確認できます: `explain select * from my_table where my_filter;`

### 判断フレームワーク: サイズアップするタイミング

より正確なウェアハウス選択のために、以下の3つの変数を考慮してください:

#### 1. テーブルサイズ（出発点）

<details>
<summary>クリックして展開</summary>

テーブルレコード数に基づいた開始ウェアハウスサイズについては上記のマークダウンテーブルを参照してください。

**常にテーブルサイズを最初に確認してください:**

```sql
SELECT COUNT(*) FROM your_table;
```

</details>

#### 2. フィルターの選択性（小さいままでいられるか？）

<details>
<summary>クリックして展開</summary>

##### 時間範囲フィルター（最も強力）

時間ベースの述語は時系列データに対して通常最も選択的です:

- **1日-1週間**: 大規模なテーブルでも **XS** で実行できます
- **2-4週間**: ベーステーブルサイズに応じて **S** または **M** を検討してください
- **4週間以上**: テーブルサイズが主要な要因になります

##### その他の選択的フィルター

- **高い選択性**（例: `event_action`、`app_id`）: パーティションプルーニングに優れています。ブールフラグもプルーニングに効果的な場合があります
- **低い選択性**（低カーディナリティフィールド、例: `user_id`、`event_id`）: スキャンサイズへの影響は最小限
- **クラスタリングキーフィルター**（例: `behavior_at`）: テーブルクラスタリングと整合している場合に最も効果的

**ヒント:** 完全な結果セットのマテリアライゼーションを避けるために開発中は `LIMIT` 句を追加してください。

</details>

#### 3. クエリの複雑さ（より多くのパワーが必要か？）

<details>
<summary>クリックして展開</summary>

- **シンプルなスキャン**: フィルター + 集計 → 推奨サイズに留まる
- **重い操作**: 大きな JOIN、ウィンドウ関数、複雑な集計 → **1レベルアップ**
- **マルチテーブル JOIN**: 特にフィルタリングされていないディメンションとの場合 → **1-2レベルアップ**

</details>

### 実例: `mart_behavior_structured_event`

これらの例は、最大テーブルの1つでも `XS` で十分な場合があることを示しています:

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

**XS で機能する理由:** 3日間の時間ウィンドウ + 特定の event_action = 小さなスキャン

</details>

<details>
<summary>例 2: XS が許容範囲（集計、2週間範囲）</summary>

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

**XS で機能する理由:** 集計により結果セットが削減され、2週間のウィンドウは管理可能

</details>

<details>
<summary>例 3: M が必要（大きな JOIN + 広い範囲）</summary>

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

**M が必要な理由:** 大きな JOIN + フィルタリングされていないディメンションでより多くのメモリが必要

</details>

## VS Code の Snowflake 拡張機能

VS Code から Snowflake を使用するには、拡張機能ペインから [VS Code 用の Snowflake 拡張機能](https://docs.snowflake.com/en/user-guide/vscode-ext)をインストールしてください。

**セットアップ:**

1. まず、ブラウザで Okta 経由で Snowflake UI にログインできることを確認してください。
2. VS Code の左サイドバーの Snowflake アイコンをクリックして、以下でサインインしてください:
   - **アカウント識別子:** `gitlab`
   - **認証方法:** シングルサインオン
   - **ユーザー名:** GitLab の完全なメールアドレス
3. **サインイン** をクリックすると、Okta ウィンドウが開きます。SSO を完了して VS Code に戻ってください。

接続後、Snowflake パネルのドロップダウンを使用してロールとウェアハウスを設定してください。

そこから、VS Code で任意の `.sql` ファイルを開き、Web UI に触れることなく直接クエリを実行できます。
