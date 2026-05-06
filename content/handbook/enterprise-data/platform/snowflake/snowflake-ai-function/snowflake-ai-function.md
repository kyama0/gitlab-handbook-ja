---
title: "Snowflake AI Functions: 利用とコスト管理ガイド"
description: "GitLab の Enterprise Data Platform において、コストとトークン消費を管理しながら Snowflake AI Functions を効果的に活用する方法"
upstream_path: "/handbook/enterprise-data/platform/snowflake/snowflake-ai-function/snowflake-ai-function/"
upstream_sha: "b751749fb746d2e0131db68b13218fc2e08cf6b2"
translated_at: "2026-04-29T10:00:00Z"
translator: claude
stale: false
---

## 目次

- [Snowflake AI Functions とは](#what-is-snowflake-ai-functions)
- [目的](#purpose)
- [前提条件](#prerequisites)
- [トークンとクレジットの理解](#understanding-tokens-and-credits)
- [利用可能な AI Functions](#available-ai-functions)
- [Snowflake AI Functions: 固定価格と変動価格](#snowflake-ai-functions-fixed-vs-variable-pricing)
- [⚡ クイックスタートチェックリスト](#-quick-start-checklist)
- [はじめ方: 3 ステップアプローチ](#getting-started-3-step-approach)
- [私のトークン使用量は適切か？](#is-my-token-usage-reasonable)
- [高度な利用方法と最適化](#advanced-usage--optimization)
- [モニタリングとサポート](#monitoring--support)
- [緊急アクセス制御手順 - Data Platform チーム](#emergency-access-control-procedures---data-platform-team)
- [AI Functions アクセス管理 - 標準オペレーション](#ai-functions-access-management---standard-operations)
- [関連リソース](#related-resources)

## Snowflake AI Functions とは

Snowflake AI Functions はビルトインの機械学習機能で、データアナリストやエンジニアが[Enterprise Data Warehouse](/handbook/enterprise-data/platform/snowflake/) 内で直接高度な分析を実行できるようにします。これらの関数は Snowflake のネイティブ AI/ML 機能を活用し、外部ツールや複雑なモデルデプロイを必要とせずにインサイトを提供します。

### Snowflake の AI Functions により GitLab チームメンバーは以下を実行できます

- テキストデータに対する感情分析
- 非構造化データからのインサイト抽出
- 予測と分類の生成
- インテリジェントなデータ処理によるデータ品質の向上
- ビジネス意思決定のための Time-to-insight の加速

⚠️ 重要なコスト上の注意: AI Functions はトークンベースの課金を使用しており、標準のウェアハウスクレジットとは別に計算されます。大規模なデータセットを処理する前に必ずコストを見積もってください。

## 目的

このガイドは、コスト管理を維持しながら Snowflake AI Functions を効果的に使用するための包括的なガイダンスを提供します。トークンベースの課金モデルであることから、GitLab のデータプラットフォームで責任を持って使用するには、コストへの影響を理解することが不可欠です。

⚠️ Tableau と BI ツール: AI Functions を直接呼び出さないこと

Snowflake Cortex AI functions は、Tableau やその他の BI ツールから直接呼び出してはなりません。そうすると、クエリが実行されるたびに AI functions が再実行され、予測不能なコストと一貫性のない結果を引き起こします。具体的なリスクは以下のとおりです：

- **クレジットの際限ない消費**: ダッシュボードの読み込み、フィルタの変更、スケジュール更新のたびに AI function が再実行されます。つまり、利用者の多い 1 つのダッシュボードが、全閲覧者にわたって 1 日に何千回もの AI 呼び出しを発生させる可能性があります。
- **コストの不可視性**: クレジット消費は実行ごとに積み上がり、使用状況レポートに現れるまで警告が出ません。予算策定や予測がほぼ不可能になります。
- **非決定論的な出力**: `COMPLETE` のような生成関数は実行ごとに異なる結果を返すため、同じ行がセッション、ユーザー、更新をまたいで異なる値を表示します。
- **監査不能性**: クエリ実行時に計算された結果は確認・検証・再利用できません。

**正しいアプローチ:** AI functions を制御されたパイプラインで一度実行し、結果を Snowflake テーブルに永続化します。BI ツールはその事前計算済みテーブルに接続します。新しいソース行が来るたびに出力テーブルを更新・増分更新するには、dbt モデル、Airflow パイプライン、または Snowflake タスクを使用します。これにより、クレジットが単一の予測可能なバッチで消費され、結果がすべてのユーザーに対して安定・一貫したものとなり、複数のワークブックやダウンストリームモデルで再利用できます。

## 前提条件

Snowflake AI Functions を使用する前に、以下を確認してください：

- **Snowflake アクセス**: [Warehouse Access](/handbook/enterprise-data/platform/#warehouse-access) プロセスに従ってください
- **必要なロール**: `CORTEX_FUNCTIONS` アカウントロール — [Cortex AI アクセスの取得方法](/handbook/enterprise-data/platform/snowflake/snowflake-ai-function/snowflake-ai-credits-alert/#how-to-get-cortex-ai-access) を参照してください
- **ウェアハウスアクセス**: 適切なコンピューティングウェアハウス（`dev_xs`、`dev_m`、または `reporting`）へのアクセス
- **コスト意識**: トークンベースの課金への影響の理解

## トークンとクレジットの理解

### トークンとは？

トークンは AI モデルが処理するテキストの最小単位で、約 4 文字または英語/テキストの単語の 3/4 に相当します。
例：

- "Hello" = 約 1 トークン
- "Analyze this text" = 約 3 トークン
- 典型的なメール（200 語）= 約 270 トークン
- GitLab の Issue の説明（500 語）= 約 670 トークン

### クレジットとは？

クレジットは、AI サービスとコンピューティングリソースに対する Snowflake の課金単位です。

<b>クレジットレート:</b> Snowflake はサービスタイプに応じて 2 つの異なるレートで Cortex AI クレジットを課金します：

| サービスタイプ | 相対クレジットレート | 対象 |
|---|---|---|
| **AI_INFERENCE** | 1x（基本レート）| 単一目的のステートレスな AI SQL 関数呼び出し — `COMPLETE()`、`SENTIMENT()`、`SUMMARIZE()`、`TRANSLATE()`、`EMBED_TEXT()`、`AI_CLASSIFY()`、`AI_FILTER()` など |
| **AI_SERVICES** | 約 10x | 高レベルのオーケストレートされたサービス（リクエストごとに複数の LLM 呼び出し）— Cortex Analyst、Cortex Agent、Cortex Code (CoCo)、Cortex Search |

> **注**: 正確なレートについては、アカウントの `SNOWFLAKE.ORGANIZATION_USAGE.RATE_SHEET_DAILY` をクエリしてください。

<b>変換:</b> モデルによってチャージされるレートが異なります（100 万トークンあたり）

<b>[現在のモデルレート](https://www.snowflake.com/legal-files/CreditConsumptionTable.pdf) (100 万トークンあたりのクレジット):</b>

- `mistral-7b:`     0.12 クレジット/100 万トークン
- `mixtral-8x7b:`    0.22 クレジット/100 万トークン
- `llama3.1-70b:`    1.21 クレジット/100 万トークン
- `llama3.3-70b:`     1.21 クレジット/100 万トークン
- `claude-4-sonnet:`  2.55 クレジット/100 万トークン
- `deepseek-r1:`      1.03 クレジット/100 万トークン
- `snowflake-arctic:` 0.84 クレジット/100 万トークン

<b>クレジット使用例</b>

| モデル | 100 万トークンあたりのクレジット | 1,000 万トークンのクレジット |
|-------|---------------------------|------------------------|
| mistral-7b | 0.12 | 1.2 |
| llama3.1-70b | 1.21 | 12.1 |
| claude-4-sonnet | 2.55 | 25.5 |

*AI_SERVICES（Cortex Agent、Analyst、Code）は AI_INFERENCE レートの約 10 倍のクレジットを消費します。正確なレートは `RATE_SHEET_DAILY` を参照してください。

### トークンベース課金の理解

Snowflake AI サービスはトークンベースの課金を使用しており、標準のウェアハウスクレジット課金とは異なります：

- **AI クレジット**: トークン使用量（入力 + 出力トークン）に依存
- **ウェアハウスクレジット**: 実行時間とウェアハウスサイズに基づく別課金
- **トークン計算**: 使用する特定のモデルと処理するテキストの長さに基づく
- **コスト変動性**: モデルによってトークン消費レートが異なる

**例**: Large ウェアハウスで 1 時間クエリを実行すると、100 件でも 100,000 件でも同じウェアハウスクレジットがかかります。一方、AI function のコストは処理するテキスト量に直接比例します。

## 利用可能な AI Functions

Snowflake は CORTEX 名前空間を通じていくつかの AI functions を提供しています：

### テキスト分析関数

| 関数 | 目的 | コスト（クレジット/100 万トークン） | GitLab の典型的なユースケース |
|----------|---------|-------------------------|--------------------------|
| `SNOWFLAKE.CORTEX.SENTIMENT` | テキストの感情を分析 | 0.08 | 顧客フィードバック、サポートチケットのムード |
| `SNOWFLAKE.CORTEX.EXTRACT_ANSWER` | テキストから回答を抽出 | 0.08 | Issue の根本原因抽出、機能要件 |
| `SNOWFLAKE.CORTEX.SUMMARIZE` | テキストの要約を生成 | 0.10 | MR の要約、リリースノートの生成 |
| `SNOWFLAKE.CORTEX.TRANSLATE` | 言語間の翻訳 | 1.50 | 国際化分析 |
| [`SNOWFLAKE.CORTEX.COMPLETE`](https://internal.gitlab.com/handbook/enterprise-data/platform/ai_to_data/technical_documentation_ai_to_data/#snowflake-cortex-complete) | テキスト補完/生成 | 0.05-12.00* | コンテンツ生成、分類 |

*選択するモデルによって異なります

### COMPLETE 関数で利用可能なモデル

| モデルティア | 例 | コスト範囲 | 適した用途 |
|------------|----------|------------|----------|
| **Budget** | `mistral-7b`、`llama3.1-8b` | 0.05-0.12 | 大量の単純なタスク、分類 |
| **Balanced** | `mixtral-8x7b`、`llama3.1-70b` | 0.22-1.21 | ほとんどの汎用タスク |
| **Performance** | `llama3.3-70b`、`snowflake-arctic` | 0.84-1.21 | 複雑な分析、微妙な推論 |
| **Premium** | `claude-4-sonnet`、`mistral-large2` | 1.95-2.55 | 顧客向けコンテンツ、最高品質 |

💡 **コストのヒント**: 可能な限り特化関数（SENTIMENT、SUMMARIZE、EXTRACT_ANSWER）を使用してください — 同じタスクに COMPLETE を使うより 3〜30 倍安価です！

## Snowflake AI Functions: 固定価格と変動価格

### 固定価格関数

これらの関数は**固定コスト** — モデル選択は不要で、一定価格です：

**基本関数**

| 関数 | コスト（クレジット/100 万トークン） | 目的 |
|----------|-------------------------|---------|
| `SNOWFLAKE.CORTEX.SENTIMENT` | 0.08 | 感情分析 |
| `SNOWFLAKE.CORTEX.EXTRACT_ANSWER` | 0.08 | テキストから Q&A 抽出 |
| `SNOWFLAKE.CORTEX.SUMMARIZE` | 0.10 | テキスト要約 |
| `SNOWFLAKE.CORTEX.GUARD` | 0.25 | コンテンツ安全フィルタリング |

**高度な関数**

| 関数 | コスト（クレジット/100 万トークン） | 目的 |
|----------|-------------------------|---------|
| `SNOWFLAKE.CORTEX.AI_TRANSCRIBE` | 1.30 | 音声からテキストへの変換 |
| `SNOWFLAKE.CORTEX.AI_CLASSIFY` | 1.39 | 高度な分類 |
| `SNOWFLAKE.CORTEX.AI_FILTER` | 1.39 | インテリジェントなデータフィルタリング |
| `SNOWFLAKE.CORTEX.TRANSLATE` | 1.50 | 言語翻訳 |
| `SNOWFLAKE.CORTEX.AI_AGG` | 1.60 | AI 搭載集計 |
| `SNOWFLAKE.CORTEX.AI_SENTIMENT` | 1.60 | 拡張感情分析 |
| `SNOWFLAKE.CORTEX.AI_SUMMARIZE_AGG` | 1.60 | 集計要約 |
| `SNOWFLAKE.CORTEX.ENTITY_SENTIMENT` | 1.60 | エンティティレベルの感情 |
| `SNOWFLAKE.CORTEX.AI_EXTRACT` | 2.55 | 高度なデータ抽出 |

## 変動価格関数（モデル選択が必要）

これらの関数は**モデル選択が必要**で、コストは選択内容によって異なります：

| 関数カテゴリ | 価格範囲（クレジット/100 万トークン） | 目的 |
|-------------------|--------------------------------|---------|
| `SNOWFLAKE.CORTEX.COMPLETE` | 0.05 - 12.00 | テキスト生成、補完、カスタムタスク |
| `SNOWFLAKE.CORTEX.EMBED_TEXT_768` | 0.03 | 基本的なテキスト埋め込み（768 次元） |
| `SNOWFLAKE.CORTEX.EMBED_TEXT_1024` | 0.05 - 0.07 | 高度なテキスト埋め込み（1024 次元） |
| `SNOWFLAKE.CORTEX.EMBED_IMAGE_1024` | 0.06 | 画像とテキストの埋め込み |

## ⚡ クイックスタートチェックリスト

AI functions を使用する前に：

- [ ] **本日のクレジット使用量を確認する**（下記のモニタリングクエリを参照）
- [ ] **可能な場合は特化関数から始める**（SENTIMENT、SUMMARIZE）— 3〜30 倍安価
- [ ] **初期テストにはバジェットモデルを使用する**（mistral-7b）
- [ ] **常に小さなサンプルでテストしてから**完全なデータセットを処理する

## はじめ方: 3 ステップアプローチ

### ステップ 1: まずサンプルデータでテストする

関数の動作とトークン消費を理解するために、常に小さなサンプルから始めてください：

```sql
-- サンプルデータで感情分析をテストする
SELECT 
    email,
    SNOWFLAKE.CORTEX.SENTIMENT(email) as sentiment_score,
    SNOWFLAKE.CORTEX.COUNT_TOKENS('mistral-7b', email) as tokens_used
FROM RAW.AIRFLOW_STITCH.AB_USER
SAMPLE (10 ROWS)
ORDER BY tokens_used DESC;
```

- 注: SENTIMENT の場合、トークンカウントは不要（固定コスト関数）
- トークンカウントは主に COMPLETE 関数に適用されます

### ステップ 2: 完全実行前にコストを見積もる

データセット全体を処理する前に推定コストを計算してください：

```sql
-- 全テーブル処理前の推定コストを計算する
WITH sample_estimate AS (
    SELECT 
        COUNT(*) as sample_rows,
        SUM(SNOWFLAKE.CORTEX.COUNT_TOKENS(
            'mistral-7b',
            'Your prompt here: ' || your_column
        )) as sample_tokens
    FROM your_table
    SAMPLE (100 ROWS)  -- 100 行をサンプリング
),
cost_projection AS (
    SELECT 
        sample_tokens,
        sample_rows,
        (SELECT COUNT(*) FROM your_table) as total_rows,
        sample_tokens * total_rows / sample_rows as estimated_total_tokens
    FROM sample_estimate
)
SELECT
    estimated_total_tokens / 1000000 as estimated_million_tokens,
    estimated_million_tokens * 0.12 as estimated_credits  -- 現在のレートを確認
FROM cost_projection;
```

### ステップ 3: 管理されたバッチで処理する

大規模なデータセットの場合、管理可能なバッチでデータを処理してください：

```sql
-- データを日次バッチで処理する
SELECT
    date_day,
    issue_id,
    SNOWFLAKE.CORTEX.COMPLETE(
        'mistral-7b',
        'Categorize this GitLab issue: ' || title || '. Categories: bug, feature, documentation'
    ) as issue_category
FROM RAW.AIRFLOW_STITCH.AB_USER
WHERE date_day = '2024-01-01'  -- 1 日ずつ処理する
ORDER BY issue_id;
```

## 私のトークン使用量は適切か？

### 日次使用量の計画: 今日何を処理できるか？

コストを管理するため、Cortex AI アクセスを持つ各ユーザーには、[Cortex AI クレジットモニタリングシステム](/handbook/enterprise-data/platform/snowflake/snowflake-ai-function/snowflake-ai-credits-alert/) によって強制される日次クレジット予算があります。これらのハード予算は安全網です。Snowflake Cortex のコストは意図せず急速に増加する可能性があるためです。制限は Data Platform チームへのリクエストにより調整できます。

**あなたの日次予算: 50 クレジット（デフォルト）** | **00:00 UTC にリセット**

**日次制限の施行（自動）**

モニタリングシステムは 30 分ごとに使用量を確認し、自動的に対応します：

- **DIRECT ユーザー**（Permifrost 経由で `CORTEX_FUNCTIONS` が付与されている場合）: 100% を超えると**自動的にアクセスが失効**します。次回の Permifrost 実行時に復元されます。
- **INHERITED ユーザー**（`SNOWFLAKE_DB` ロール経由でアクセス）: 自動失効**できません**。トリアージャーに手動介入の通知が送られます。

| ゾーン | 使用クレジット | 対応 |
|------|--------------|--------------|
| **安全** | 0〜24 クレジット（< 50%） | 対応なし |
| **監視** | 25〜37 クレジット（50〜74%） | ログのみ — メールなし |
| **警告** | 37〜44 クレジット（75〜89%） | メール通知が送信される |
| **緊急** | 45〜49 クレジット（90〜99%） | 緊急メールが送信される |
| **重大** | 50+ クレジット（100%+） | アクセス失効（DIRECT）またはトリアージャーエスカレーション（INHERITED） |

しきい値、コストへの影響、エスカレーション手順の詳細については、[Cortex AI クレジットモニタリングシステム](/handbook/enterprise-data/platform/snowflake/snowflake-ai-function/snowflake-ai-credits-alert/) ハンドブックを参照してください。

クイック確認: 今日何クレジット残っているか？

```sql
SELECT USER_NAME, STATUS, CREDITS_USED_TODAY, DAILY_HARD_LIMIT,
       CREDITS_REMAINING, PERCENTAGE_USED, CREDIT_SOURCES
FROM RAW.CORTEX_MONITORING.CURRENT_USAGE_MONITOR
WHERE USER_NAME = CURRENT_USER();
```

## 高度な利用方法と最適化

### トークンカウントのベストプラクティス

- Snowflake のビルトイン関数（SNOWFLAKE.CORTEX.COUNT_TOKENS）を使用してトークン推定を常に検証してください。

- プロンプトとデータを行ごとに連結して、トークン使用量を正確に計算してください：

```sql
SELECT
    SUM(
        SNOWFLAKE.CORTEX.COUNT_TOKENS(
            'llama3.1-70b',
            'fixed prompt text here ' || data_column
        )
    ) AS total_token_usage
FROM your_table;
```

**重要なルール:** トークン数は（プロンプト + データの）完全に連結された文字列で数え、別々には数えないでください。トークン境界、区切り文字、エンコードの違いによる ±5% の推定誤差を防げます。

各行の組み合わせた文字列でトークン数を数え、全行で合計してください：

```sql
SELECT
    SUM(
        SNOWFLAKE.CORTEX.COUNT_TOKENS(
            'llama3.1-70b',
            'your prompt here ' || your_column
        )
    ) AS precise_token_estimation
FROM your_table;
```

### コスト最適化の戦略

**1. 関数選択の優先順位**

- 第 1 選択: 可能な場合は特化関数（SENTIMENT、SUMMARIZE、EXTRACT_ANSWER）を使用する
- 第 2 選択: COMPLETE 関数にはバジェットモデル（mistral-7b、llama3.1-8b）を使用する
- プロンプトを短くし、可能な限り入力データのサイズを制限する

**2. データの前処理**

- AI functions の前に WHERE 句を適用してデータ量を削減する
- 意味のあるコンテンツのみを処理する（空または非常に短いテキストをフィルタリング）

**3. スマートバッチング**

- 類似データをまとめて処理して一貫性を保つ
- リアルタイム処理ではなく日次バッチを使用する
- 結果を保存・再利用して再処理を避ける

### トークン使用量の比較

トークン使用量はモデルによって大きく異なります。実用的な比較を示します：

```sql
-- 同じテキストで異なるモデルのトークン使用量を比較する
WITH sample_text AS (
    SELECT 'Analyze customer feedback for product improvement opportunities' as text
)
SELECT 
    'mistral-7b' as model,
    SNOWFLAKE.CORTEX.COUNT_TOKENS('mistral-7b', text) as token_count
FROM sample_text
UNION ALL
SELECT 
    'llama3.1-70b' as model,
    SNOWFLAKE.CORTEX.COUNT_TOKENS('llama3.1-70b', text) as token_count
FROM sample_text
UNION ALL
SELECT 
    'mixtral-8x7b' as model,
    SNOWFLAKE.CORTEX.COUNT_TOKENS('mixtral-8x7b', text) as token_count
FROM sample_text;
```

![トークン使用量比較](/images/enterprise-data/snowflake-ai-function/model_comparison.png)

**選択戦略:** 初期テストには mistral-7b から始め、精度要件が追加コストを正当化する場合にのみアップグレードしてください。

## モニタリングとサポート

### 日次使用量の追跡

日次制限（デフォルト: 50 クレジット）に対する日次クレジット消費を監視してください。リアルタイムのスナップショットにはモニタリングビューを使用してください：

```sql
SELECT USER_NAME, STATUS, CREDITS_USED_TODAY, DAILY_HARD_LIMIT,
       CREDITS_REMAINING, PERCENTAGE_USED, CREDIT_SOURCES
FROM RAW.CORTEX_MONITORING.CURRENT_USAGE_MONITOR
WHERE USER_NAME = CURRENT_USER();
```

完全なモニタリングシステム、しきい値、トリアージャー手順については、[Cortex AI クレジットモニタリングシステム](/handbook/enterprise-data/platform/snowflake/snowflake-ai-function/snowflake-ai-credits-alert/) ハンドブックを参照してください。

### 高コストクエリの特定

```sql
SELECT
    u.NAME AS USER_NAME,
    DATE(cai.USAGE_TIME) AS USAGE_DATE,
    cai.MODEL_NAME,
    SUM(cai.TOKEN_CREDITS) AS TOTAL_CREDITS,
    SUM(cai.TOKENS) AS TOTAL_TOKENS,
    COUNT(*) AS REQUEST_COUNT
FROM SNOWFLAKE.ACCOUNT_USAGE.CORTEX_AISQL_USAGE_HISTORY cai
JOIN SNOWFLAKE.ACCOUNT_USAGE.USERS u ON cai.USER_ID = u.USER_ID
WHERE u.NAME = CURRENT_USER()
  AND cai.USAGE_TIME >= DATEADD('day', -30, CURRENT_TIMESTAMP())
GROUP BY u.NAME, DATE(cai.USAGE_TIME), cai.MODEL_NAME
ORDER BY TOTAL_CREDITS DESC
LIMIT 10;
```

### よくある問題のトラブルシューティング

#### 高いトークン消費量

**問題: 日次クレジット制限に近づいている、または超過している**

**診断ステップ:**

- どの関数が最もクレジットを消費したかを確認する
- プロンプトの効率性を確認する
- モデル選択の妥当性を確認する

解決策:

- 可能な場合は特化関数に切り替える
- 初期分析にはバジェットモデル（mistral-7b、llama3.1-8b）を使用する
- より積極的なデータフィルタリングを実装する
- 小さく管理可能なバッチで処理する

#### 関数のタイムアウト

**問題: AI function クエリが失敗またはタイムアウトする**

解決策:

- より大きなコンピューティングウェアハウスを使用する（dev_xs の代わりに dev_m）
- バッチサイズを削減する（10,000 件の代わりに 1,000 件を処理）
- プロンプトを簡素化して処理の複雑さを軽減する
- 複雑なクエリを複数のステップに分割する

#### 不一致な結果

**問題: AI functions が変動する、または予期しない出力を返す**

解決策:

- より具体的で構造化されたプロンプトを使用する
- 一貫性を高めるためにプロンプトに例を含める
- より高精度なモデルへのアップグレードを検討する
- 結果の検証とリトライロジックを実装する

## 緊急アクセス制御手順 - Data Platform チーム

**対象者**: Data Platform チームの管理者のみ。
**目的**: アカウント全体の Cortex AI functions の緊急ロックダウン。
**警告**: これらの手順はアカウント**すべてのユーザー**の AI functions を無効にします。

### 非常ボタン: アカウント全体の Cortex 即時シャットダウン

<div style="border: 3px solid red; background-color: #fff0f0; padding: 15px; border-radius: 5px; margin-bottom: 15px;">

<p style="color: red; font-weight: bold; font-size: 1.2em;">Cortex AI クレジット消費が制御不能になり、アカウント全体を即座にシャットダウンする必要がある場合は、ACCOUNTADMIN として次の単一コマンドを実行してください：</p>

```sql
USE ROLE ACCOUNTADMIN;
ALTER ACCOUNT SET CORTEX_MODELS_ALLOWLIST = 'None';
```

<p>これにより、アカウント内のすべてのユーザーとロールに対して、すべての Cortex AI モデルの呼び出しが即座にブロックされます。アローリストが復元されるまで、どの Cortex 関数（<code>COMPLETE</code>、<code>SENTIMENT</code>、<code>SUMMARIZE</code>、Cortex Agents、Cortex Analyst、Cortex Code など）も動作しません。</p>

</div>

> **これが主要な制御である理由:** SNOWFLAKE は APPLICATION であり、データベースロールの失効は信頼性がありません — 2020 年以前のレガシーグラントは個別に失効できず、`SNOWFLAKE_DB` は外科的に制限できない広範な継承アクセスを提供します。`CORTEX_MODELS_ALLOWLIST` パラメータは、アクセスパス（DIRECT、INHERITED、または LEGACY）にかかわらず、すべての Cortex モデル呼び出しを普遍的にブロックする**唯一の**制御です。詳細は [Cortex アクセスアーキテクチャ](#cortex-access-architecture) を参照してください。

**シャットダウンが有効になったことを確認する:**

```sql
SHOW PARAMETERS LIKE 'CORTEX_MODELS_ALLOWLIST' IN ACCOUNT;
-- 'None' と表示されるはず
```

### 非常ボタンを使用するタイミング

- 暴走コスト: アカウント全体の Cortex 支出が許容しきい値を超えて加速している
- AI functions を含むセキュリティインシデント
- 即時停止のコンプライアンスまたは法的要件
- ユーザーごとの自動モニタリングが不十分な場合（例: 多数のユーザーが同時にスパイクしている）

### 復元（インシデント解決後）

アクセスを復元する前に**ビジネスの承認が必要**です。

#### ステップ 1: モデルアローリストの再有効化

```sql
USE ROLE ACCOUNTADMIN;
ALTER ACCOUNT SET CORTEX_MODELS_ALLOWLIST =
    'claude-4-sonnet,snowflake-arctic,snowflake-arctic-embed-m-v1.5,llama3.1-8b,llama3.1-70b,llama3.3-70b,mistral-7b,arctic-translate,arctic-extract,arctic-sentiment,arctic-parse-document,arctic-extract-answer,arctic-summarize';

SHOW PARAMETERS LIKE 'CORTEX_MODELS_ALLOWLIST' IN ACCOUNT;
```

> **アローリストのモデルティア:**
>
> | ティア | モデル | 理由 |
> |------|--------|-----------|
> | **本番** | `claude-4-sonnet`、`snowflake-arctic`、`snowflake-arctic-embed-m-v1.5` | AIRFLOW パイプラインと埋め込みワークフローで積極的に使用 |
> | **コスト効率** | `llama3.1-8b`、`llama3.1-70b`、`llama3.3-70b`、`mistral-7b` | 汎用開発向けの低コストオープンモデル |
> | **管理関数エイリアス** | `arctic-translate`、`arctic-extract`、`arctic-sentiment`、`arctic-parse-document`、`arctic-extract-answer`、`arctic-summarize` | [BCR-2220](https://docs.snowflake.com/en/release-notes/bcr-bundles/2026_02/bcr-2220) で必要 — 管理 AI 関数がアローリストを適用する |

**すべてのモデルを許可**（ロックダウン前の状態に戻す）場合：

```sql
ALTER ACCOUNT UNSET CORTEX_MODELS_ALLOWLIST;
```

#### ステップ 2: モニタリングタスクの再開

```sql
ALTER TASK RAW.CORTEX_MONITORING.MONITOR_CORTEX_USAGE_TASK RESUME;
ALTER TASK RAW.CORTEX_MONITORING.RESTORE_DAILY_ACCESS_TASK RESUME;
```

#### ステップ 3: 復元の確認

```sql
SELECT SNOWFLAKE.CORTEX.COMPLETE('llama3.1-8b', 'Restoration test');
-- 成功するはず

SELECT COUNT(*) AS monitored_users
FROM RAW.CORTEX_MONITORING.USER_THRESHOLDS
WHERE IS_ACTIVE = TRUE;
```

### インシデント後の対応

1. **文書化**: トリアージ Issue に取られたすべてのアクション、タイムライン、根本原因を記録する
2. **ステークホルダーへの通知**: ロックダウン/復元ステータスを確認する
3. **しきい値の確認**: インシデントがコスト主導の場合、ユーザーごとの制限を引き下げることを検討する
4. **ランブックの更新**: 新たな知見を[トリアージャーランブック](/handbook/enterprise-data/platform/snowflake/snowflake-ai-function/snowflake-ai-credits-alert/)に追加する

## AI Functions アクセス管理 - 標準オペレーション

### Cortex アクセスアーキテクチャ

Snowflake の `SNOWFLAKE` オブジェクトは（通常のデータベースではなく）**APPLICATION** です。これは Cortex データベースロールがどのように付与され、継承され、失効されるかに重要な影響を与えます。3 つの異なるアクセスパスがあります：

| パス | ロール | メカニズム | 失効可能か | モニタリング施行 |
|------|------|-----------|------------|----------------------|
| **DIRECT** | `CORTEX_FUNCTIONS` | Permifrost が 6 つの Cortex データベースロールを個別に付与 | 可能 — ユーザーごとの失効/復元 | 制限超過時の自動失効 |
| **INHERITED** | `SNOWFLAKE_DB` | `USAGE ON APPLICATION SNOWFLAKE` → 37+ のすべてのデータベースロール | `SNOWFLAKE_DB` をユーザーから失効することによってのみ可能（すべての SNOWFLAKE アクセスが壊れる） | トリアージャー通知（自動失効不可） |
| **LEGACY** | さまざまなグループロール | 2020 年以前の `USAGE ON DATABASE SNOWFLAKE` グラントが APPLICATION 管理メタデータになったもの | **不可** — `REVOKE` は成功を返すが効果なし | N/A — これらはメタデータアーティファクトであり、有効なアクセスではない |

**現在 `USAGE ON APPLICATION SNOWFLAKE` を持つロール**（有効な継承 Cortex アクセスを持つ唯一のロール）：

| ロール | 付与日 | 目的 |
|------|---------|---------|
| `SYSADMIN` | 2019-05-08 | トップレベル管理者 |
| `SNOWFLAKE_DB` | 2020-03-09 | ユーザーロール向けの統合 SNOWFLAKE アクセス |
| `READ_ALL` | 2020-06-11 | 読み取り専用アクセスロール |
| `SNOWFLAKE_ACCOUNT_USAGE` | 2022-11-01 | アカウント使用状況ビュー |
| `DATA_OBSERVABILITY` | 2025-10-09 | データ可観測性ツール |

**レガシーグラント（失効不可）:** `SHOW GRANTS OF DATABASE ROLE SNOWFLAKE.CORTEX_USER` には、2019 年のタイムスタンプを持つ ANALYST_PEOPLE、ANALYST_SALES、DATA_MANAGER、ENGINEER、PRODUCT_MANAGER、REPORTER_SENSITIVE、TRANSFORMER が表示されます。これらは、これらのロールが直接 `USAGE ON DATABASE SNOWFLAKE` を持っていた時（2020 年 3 月の SNOWFLAKE_DB 統合時に失効）の APPLICATION 管理メタデータです。個々の `REVOKE DATABASE ROLE` コマンドは成功を返しますが、これらのエントリは削除されません。これらは有効なアクセスを**表していません** — これらのロールが Cortex アクセスを持つのは、上記の 5 つのロールのいずれかから継承している場合のみです。

> **重要なポイント:** `CORTEX_MODELS_ALLOWLIST` アカウントパラメータは、すべてのアクセスパスにわたって Cortex を普遍的にブロックする**唯一の**制御です。データベースロールの失効は SNOWFLAKE APPLICATION には信頼性がありません。

### アクセスプロビジョニング

Cortex AI アクセスは 2 つのパスで管理されます：

**パス 1: DIRECT — Permifrost 経由の `CORTEX_FUNCTIONS`（推奨）**

これはガバナンスされた、ユーザーごとに制御可能なパスです。モニタリングシステムはこのパスのユーザーのアクセスを自動的に失効・復元できます。

1. [`snowflake-permissions`](https://gitlab.com/gitlab-data/snowflake-permissions) リポジトリでマージリクエストを開く
2. `roles.yml` の `member_of:` でユーザーのロールに `CORTEX_FUNCTIONS` を追加する
3. マージ — Permifrost が自動的にグラントを適用する

**パス 2: INHERITED — `SNOWFLAKE_DB` 経由**

`SNOWFLAKE_DB` のメンバーであるロールは、すべての Cortex ロールを含むすべての SNOWFLAKE データベースロールを継承します。このパスは外科的に制限**できません** — Cortex を失効させるには `SNOWFLAKE_DB` を完全に削除する必要があり、ACCOUNT_USAGE ビューやその他の SNOWFLAKE オブジェクトへのアクセスが壊れます。モニタリングシステムはこれらのユーザーを自動失効ではなくトリアージャーエスカレーションで処理します。

詳細については、[Cortex AI アクセスの取得方法](/handbook/enterprise-data/platform/snowflake/snowflake-ai-function/snowflake-ai-credits-alert/#how-to-get-cortex-ai-access) を参照してください。

### モデルレベルのアクセス制御（アローリストガバナンス）

`CORTEX_MODELS_ALLOWLIST` アカウントパラメータは、呼び出し可能な Cortex AI モデルを制御します。変更できるのは `ACCOUNTADMIN` のみです。

**現在のステータス:** `ALL`（制限なし）。**推奨:** コスト管理と不正なモデル使用防止のため、以下のアローリストを適用してください。

```sql
USE ROLE ACCOUNTADMIN;

-- 承認済みモデルアローリストを適用する
ALTER ACCOUNT SET CORTEX_MODELS_ALLOWLIST =
    'claude-4-sonnet,snowflake-arctic,snowflake-arctic-embed-m-v1.5,llama3.1-8b,llama3.1-70b,llama3.3-70b,mistral-7b,arctic-translate,arctic-extract,arctic-sentiment,arctic-parse-document,arctic-extract-answer,arctic-summarize';

-- 確認
SHOW PARAMETERS LIKE 'CORTEX_MODELS_ALLOWLIST' IN ACCOUNT;
```

| ティア | モデル | 理由 |
|------|--------|-----------|
| **本番** | `claude-4-sonnet`、`snowflake-arctic`、`snowflake-arctic-embed-m-v1.5` | AIRFLOW パイプラインと埋め込みワークフローで積極的に使用 |
| **コスト効率** | `llama3.1-8b`、`llama3.1-70b`、`llama3.3-70b`、`mistral-7b` | 汎用開発向けの低コストオープンモデル |
| **管理関数エイリアス** | `arctic-translate`、`arctic-extract`、`arctic-sentiment`、`arctic-parse-document`、`arctic-extract-answer`、`arctic-summarize` | [BCR-2220](https://docs.snowflake.com/en/release-notes/bcr-bundles/2026_02/bcr-2220) で必要 — 管理 AI 関数がアローリストを適用する |

**ブロック済みモデル**（アローリストにない）: `claude-3-5-sonnet`、`claude-3-7-sonnet`、`claude-sonnet-4-5`、`claude-sonnet-4-6`、`mixtral-8x7b`、`mistral-large2`、`deepseek-r1`。これらは高コストの Claude バリアントまたは未使用のモデルです。

**動作のしくみ:**

- `ALL`（デフォルト）— すべてのモデルを許可（制限なし）
- `None` — すべてのモデルをブロック（[非常ボタン](#emergency-access-control-procedures---data-platform-team)）
- コンマ区切りリスト — リストされたモデルとエイリアスのみ許可

すべてのモデルを許可（制限を削除）する場合：

```sql
ALTER ACCOUNT UNSET CORTEX_MODELS_ALLOWLIST;
```

**更新タイミング:** 四半期ごと、または新しい Cortex ユースケースをオンボーディングする際に確認してください。モデルはコスト影響評価後にのみ追加してください。

### アクセスのテスト

```sql
USE ROLE <username>;
SELECT SNOWFLAKE.CORTEX.COMPLETE('llama3.1-8b', 'Hello, world!');
-- ユーザーが CORTEX_FUNCTIONS を持っていれば成功するはず
```

### ヘルプの取得

1. **Data Team サポート**: [analytics プロジェクト](https://gitlab.com/gitlab-data/analytics/-/issues) に Issue を作成する
2. **Slack チャンネル**:
   - 一般的な質問と使用支援は `#data-team`
   - 技術的な問題は `#data-engineering`
   - 緊急のモニタリングアラートは `@dataplatformtriage`
3. **コストに関する懸念**: コスト最適化のガイダンスや制限調整については Data Platform チームに連絡する
4. **モニタリングシステム**: しきい値、手順、ランブックについては [Cortex AI クレジットモニタリングシステム](/handbook/enterprise-data/platform/snowflake/snowflake-ai-function/snowflake-ai-credits-alert/) を参照する

## 関連リソース

### GitLab 内部リソース

- [Snowflake ガイド](/handbook/enterprise-data/platform/snowflake/) - メイン Snowflake ドキュメント
- [dbt ガイド](/handbook/enterprise-data/platform/dbt-guide/) - データ変換のベストプラクティス
- [SQL スタイルガイド](/handbook/enterprise-data/platform/sql-style-guide/) - SQL コーディング標準
- [Data Platform 概要](/handbook/enterprise-data/platform/) - Enterprise Data Platform アーキテクチャ
- [AI を使ったデータとのインタラクション](https://internal.gitlab.com/handbook/enterprise-data/platform/ai_to_data/)

### 外部ドキュメント

- [Snowflake Cortex AI Functions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/llm-functions)
- [Snowflake AI Function 価格](https://docs.snowflake.com/en/user-guide/cost-understanding-ai-features)
- [Snowflake パフォーマンス最適化](https://docs.snowflake.com/en/user-guide/performance-query)

これらのガイドラインを一貫して適用することで、チームはコストを管理しながら Snowflake AI 機能を効果的に活用できます。
