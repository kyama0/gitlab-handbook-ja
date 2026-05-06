---
title: "フィーチャーストア"
description: "GitLabのSnowflakeネイティブのML機能管理・サービング・取得のためのフィーチャーストア。"
upstream_path: /handbook/enterprise-data/platform/feature-store/
upstream_sha: d638a3d5418a620365f135648ea547e0992abbf1
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

## フィーチャーストア

フィーチャーストアは、機械学習特徴量の管理・計算・サービングを行うGitLabの中央集権的なシステムです。Snowflakeのネイティブフィーチャーストアとパラメーター化されたSQL ユーザー定義関数（UDF）を使用して、事前にすべての履歴データを計算することなく、任意の日付とルックバックウィンドウに対してオンデマンドで特徴量を生成します。

ソースコードは[snowflake-feature-store](https://gitlab.com/gitlab-data/data-science-projects/snowflake-feature-store)プロジェクトにあります。

### 仕組み

特徴量は3つのパラメーター（`FEATURE_DATE`、`LOOKBACK_WINDOW_VALUE`、`LOOKBACK_WINDOW_UNIT`）を受け入れるSQL UDFとして定義されます。UDFがデプロイされると、システムは渡されたパラメーターの値に基づいて動的ビューを作成し、そのビューをSnowflakeのフィーチャーストアのFeature Viewとして登録します。データサイエンティストは、必要なfeature views、モデリング対象を定義するspineクエリ、ユースケースの日付/ルックバックパラメーターを指定することで特徴量を取得します。

データフロー: `既存のdbtテーブル → UDF（パラメーター化されたSQL）→ 動的ビュー → Feature Views → フィーチャーストアAPI → Python / Jupyter`

### 主要概念

#### エンティティ

エンティティはfeature viewのプライマリキー（Joinキー）です。フィーチャーストアは現在2つのエンティティをサポートしています:

- `dim_namespace_id` — GitLabネームスペース識別子
- `dim_crm_account_id` — アカウント識別子

エンティティは`entities/entities.yaml`で定義され、デプロイ時にSnowflakeに登録されます。

#### Feature Views

Feature Viewは単一のUDFに裏付けられた関連する特徴量の名前付きコレクションです。各feature viewはドメイン固有の`feature_views.yaml`ファイルで設定されます:

```yaml
feature_views:
  namespace_product_stage:
    version: "1.0"
    udf_name: "NAMESPACE_PRODUCT_METRICS_UDF"
    entity: "dim_namespace_id"
    timestamp_col: "feature_date"
    description: "Monthly product adoption metrics for namespaces"
    updated_by: "kdietz"
    updated_at: "2026-04-15"
```

#### UDF（ユーザー定義関数）

UDFは特徴量計算ロジックを含むSQL関数です。すべてのUDFは3つのパラメーターを持つ標準的なシグネチャに従います:

```sql
CREATE OR REPLACE FUNCTION MY_FEATURE_UDF(
    FEATURE_DATE DATE DEFAULT CURRENT_DATE() - 1,
    LOOKBACK_WINDOW_VALUE INT DEFAULT 1,
    LOOKBACK_WINDOW_UNIT VARCHAR DEFAULT 'month'
)
RETURNS TABLE(
    dim_namespace_id VARCHAR,
    feature_date DATE,
    ...
)
LANGUAGE SQL
AS $$ ... $$;
```

3つのパラメーターはすべてのUDFシグネチャに必要です（SQL本体で使われない場合も含む）。エンティティ列はfeature view間で一貫性を保つために常に`VARCHAR`にキャストする必要があります。

#### 特徴量の説明

各feature viewには、すべての出力列をドキュメント化するコンパニオンYAMLファイルがあります:

```yaml
descriptions:
  feature_A: "Description of Feature A"
  feature_B: "Description of Feature B"
```

## 特徴量ドメイン

特徴量は保守性と発見可能性のためにビジネスドメインごとに整理されています:

| ドメイン | 説明 | Feature Viewの例 |
|--------|-------------|----------------------|
| `product` | 製品の使用状況、採用 | `namespace_product_usage`, `namespace_duo_saas_usage` |
| `sales` | 商談、活動、請求 | `account_sales_activities` |
| `customer_success` | 顧客ヘルスとエンゲージメント | `account_health_scores` |
| `support` | サポートチケットメトリクス | `account_support_tickets` |
| `marketing` | マーケティングアトリビューション | `account_marketing_touchpoints` |

各ドメインディレクトリは次の構造に従います:

```console
features/{domain}/
├── feature_views.yaml               # Feature view定義
├── descriptions/                    # feature viewごとのドキュメント
│   └── {feature_view_name}.yaml
└── udfs/                            # SQL UDF
    └── {feature_view_name}.sql
```

### リポジトリ構造

```console
snowflake-feature-store/
├── notebooks/
│   ├── update_feature_store.ipynb   # 特徴量のデプロイ（開発ワークフロー）
│   └── serving_features.ipynb       # MLモデル用の特徴量取得
├── src/
│   ├── feature_store_manager.py     # コアオーケストレーター
│   ├── update_features.py           # デプロイ用CLIエントリポイント
│   ├── detect_changes.py            # Gitベースの変更検出
│   ├── ci_deploy.py                 # CI/CDラッパー
│   └── utils/
│       ├── config_loader.py         # YAML設定管理
│       └── udf_type_validator.py    # UDF戻り型検証
├── features/{domain}/               # ドメイン整理された特徴量
├── entities/entities.yaml           # エンティティ定義
├── config/snowflake_config.yaml     # 環境設定
├── .gitlab-ci.yml                   # CI/CDパイプライン
├── Dockerfile                       # CI用コンテナ
└── pyproject.toml                   # Python依存関係
```

### 環境

フィーチャーストアは3つの環境を使用します:

| 環境 | データベース | 目的 | ワークフロー |
|-------------|----------|---------|----------|
| **Dev** | `{ROLE}_PROD` (例: `KDIETZ_PROD`) | 個人の開発とテスト | `notebooks/update_feature_store.ipynb`を使用 |
| **Staging** | 共有CI環境 | 本番前の検証 | MR CIパイプライン経由でトリガー |
| **Production** | `FEATURE_STORE.SF_FEATURE_STORE` | 本番特徴量サービング | `main`へのマージ時に自動的にデプロイ |

### はじめに

#### 前提条件

- Python 3.12+
- JupyterLab、Jupyter Notebook、またはVSCode
- 適切な権限を持つSnowflakeアカウント
- Snowflake接続のためのdbtプロファイル設定

#### インストール

```bash
git clone https://gitlab.com/gitlab-data/data-science-projects/snowflake-feature-store.git
cd snowflake-feature-store
uv sync
./.venv/bin/jupyter lab build --minimize=False
./.venv/bin/jupyter lab --port=8888
```

#### Snowflake接続

ユースケースに応じて`~/.dbt/profiles.yml`にエントリを追加します。

**特徴量のサービング（本番への読み取り専用アクセス）:**

```yaml
gitlab-snowflake:
  outputs:
    feature_store_serve:
      type: snowflake
      threads: 8
      account: gitlab
      user: YOUR_EMAIL@GITLAB.COM
      role: YOUR_ROLE
      database: FEATURE_STORE
      warehouse: DEV_XS
      schema: SF_FEATURE_STORE
      authenticator: externalbrowser
```

**特徴量の開発または修正（個人の開発データベース）:**

```yaml
gitlab-snowflake:
  outputs:
    feature_store_dev:
      type: snowflake
      threads: 8
      account: gitlab
      user: YOUR_EMAIL@GITLAB.COM
      role: YOUR_ROLE
      database: {ROLE}_PROD
      warehouse: DEV_XS
      schema: SF_FEATURE_STORE
      authenticator: externalbrowser
```

### 開発ワークフロー

特徴量の追加または修正は、ローカル開発、ステージング検証、本番デプロイの3段階のプロセスに従います。

#### ステップ1: ローカル開発

すべての特徴量開発は、個人のSnowflakeデータベースと`update_feature_store.ipynb`ノートブックを使用してローカルで開始します。

**特徴量ファイルを作成または修正する:**

1. **UDF** — 適切なドメインの`udfs/`ディレクトリにSQLファイルを追加または編集します:

    ```sql
    -- features/product/udfs/my_new_feature.sql
    CREATE OR REPLACE FUNCTION MY_NEW_FEATURE_UDF(
        FEATURE_DATE DATE DEFAULT CURRENT_DATE() - 1,
        LOOKBACK_WINDOW_VALUE INT DEFAULT 1,
        LOOKBACK_WINDOW_UNIT VARCHAR DEFAULT 'month'
    )
    RETURNS TABLE(
        dim_namespace_id VARCHAR,
        feature_date DATE,
        my_feature_column NUMBER
    )
    LANGUAGE SQL
    AS
    $$
    SELECT
        CAST(dim_namespace_id AS VARCHAR) AS dim_namespace_id,
        FEATURE_DATE AS feature_date,
        COUNT(*) AS my_feature_column
    FROM some_dbt_table
    WHERE event_date BETWEEN
        DATEADD(LOOKBACK_WINDOW_UNIT, -LOOKBACK_WINDOW_VALUE, FEATURE_DATE::DATE)
        AND FEATURE_DATE::DATE
    GROUP BY 1
    $$;
    ```

2. **Feature view設定** — `features/{domain}/feature_views.yaml`にエントリを追加します:

    ```yaml
    feature_views:
      my_new_feature:
        version: "1.0"
        udf_name: "MY_NEW_FEATURE_UDF"
        entity: "dim_namespace_id"
        timestamp_col: "feature_date"
        description: "Description of what this feature view captures"
        updated_by: "your_name"
        updated_at: "2026-04-15"
    ```

3. **特徴量の説明** — `features/{domain}/descriptions/my_new_feature.yaml`を作成します:

    ```yaml
    descriptions:
      my_feature_column: "Description of this specific feature column"
    ```

4. **エンティティ**（必要な場合）— 新しいエンティティを使用する場合は`entities/entities.yaml`に追加します。

**開発データベースにデプロイする:**

`notebooks/update_feature_store.ipynb`を開き、`PROFILE_TARGET = "feature_store_dev"`を設定します。次に`DEPLOY_MODE`を設定します:

- `"incremental"` — `origin/main`に対するgit diffを使用して変更を自動検出し、影響を受けたビューのみをデプロイ
- `"full_refresh"` — すべてのfeature viewをゼロからデプロイ
- `"manual"` — `MANUAL_FEATURE_VIEWS`にリストされたビューのみをデプロイ

#### ステップ2: ステージング検証

変更がローカルで動作したら、ブランチをプッシュしてマージリクエストを開きます。

- **`staging-feature-store-changes-incremental`** — MRで変更されたfeature viewを検出してステージングスキーマにデプロイ
- **`staging-feature-store-changes-full-refresh`** — すべてのfeature viewをステージングにゼロからデプロイ

#### ステップ3: 本番デプロイ

MRが`main`にマージされると、本番パイプラインが自動的に実行されます:

- **`deploy-feature_store-incremental`** — すべてのマージで自動実行
- **`deploy-feature-store-full-refresh`** — 完全な再デプロイが必要な場合の手動ジョブ

### 特徴量のサービング

MLモデルのトレーニングまたは推論のために特徴量を取得するには、`notebooks/serving_features.ipynb`を使用します。

#### 1. Feature Viewsを定義する

```python
feature_views_dict = {
    "namespace_product_stage": "1.0",
    "namespace_information": "1.0"
}
```

#### 2. Spineクエリを定義する

```python
spine_query = """
SELECT CAST(dim_namespace_id AS VARCHAR) AS dim_namespace_id,
       '2025-05-27'::TIMESTAMP AS snapshot_date
FROM PROD.common_prep.prep_namespace_order_trial
WHERE order_start_date BETWEEN '2024-03-17' AND '2025-05-27'
  AND trial_type IN (1, 4, 5, 7)
"""
```

#### 3. ルックバックウィンドウを設定する

**グローバル（すべてのfeature viewに同じ）:**

```python
lookback_window_value = 6
lookback_window_unit = "month"
```

#### 4. `serve_features`を呼び出す

```python
from gitlabds import serve_features

combined_features = serve_features(
    session=session,
    feature_store=fs,
    feature_views_dict=feature_views_dict,
    spine_df=spine_query,
    feature_date=snapshot_date,
    lookback_window_value=lookback_window_value,
    lookback_window_unit=lookback_window_unit,
    spine_timestamp_col="snapshot_date",
    include_feature_view_timestamp_col=False
)
```

### CI/CDパイプライン

`.gitlab-ci.yml`は`build` → `staging` → `deploy` → `security`の4段階のパイプラインを定義します。

#### 変更検出

CIパイプラインは`src/detect_changes.py`を使用してgit SHAを比較し、どのfeature viewが変更されたかを正確に判断します。

### トラブルシューティング

#### UDF型の不一致

UDFの宣言された戻り型が実際の出力型と一致しない場合、デプロイ中の検証でこれを検出します。

#### 権限

フィーチャーストアは本番デプロイに`FEATURE_STORE_PRODUCER`ロールを使用します。

#### よくある問題

- **エンティティID型エラー**: UDFでエンティティ列を常に`VARCHAR`にキャストしてください
- **パラメーターの欠如**: 3つのUDFパラメーターすべてが存在する必要があります
- **エンティティをまたいだJoin**: 同じエンティティを共有するfeature viewのみが`serve_features`呼び出し時に結合できます
