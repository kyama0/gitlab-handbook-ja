---
title: "P&L 配分"
description: "P&L 配分ドキュメント"
upstream_path: /handbook/engineering/infrastructure-platforms/cost-management/cloud-finops/
upstream_sha: 6a459a3ca969603754a3b5133342edb804d3012c
translated_at: "2026-04-28T15:53:35Z"
translator: claude
stale: false
---

## データパイプラインの概要

Google Cloud Platform（GCP）の請求書 P&L（損益）配分パイプラインは、生の GCP 請求データを取得し、各行アイテムを分析およびレポーティングのために P&L カテゴリに配分します。GCP コストを P&L カテゴリ（無料、内部、有料）と GitLab プラン（Free、Ultimate、Premium など）ごとに毎日の概要を提供します。

パイプラインは以下の主要なステップで構成されています:

1. GCP 請求の行アイテムにクレジットを組み合わせて最終的な請求額を計算する（`fct_gcp_billing_line_item`）
2. P&L カテゴリと GitLab プランごとの使用率を計算し、FP&A と FinOps からのインプットに基づいて既知の無料/有料/内部コストに適用する（`prep_gcp_billing_attribute_ratio_daily`、`prep_repo_storage_ratio_daily`、`prep_container_registry_ratio_daily`、`prep_ci_build_artifact_ratio_daily`、`prep_ci_runner_ratio_daily`、`prep_haproxy_ratio_daily`、`prep_pubsub_ratio_daily`）
3. 組み合わせた P&L マッピングを生の GCP データに適用し、各行アイテムに最適なマッチを見つける（`mart_gcp_billing_line_item`）
4. ルックバックマッピングを生の GCP データに適用する（`rpt_gcp_billing_lookback`）
5. ルックバックマッピングを適用し、P&L カテゴリ別の最終配分コストを出力し、Tableau での探索のために階層を適用する（`rpt_gcp_billing_line_item_with_lookback`）

## リネージ

### ステップ 1: GCP 請求の行アイテム

まず、GCP 請求の行アイテム（`summary_gcp_billing_source`）にクレジット（`prep_gcp_billing_credit`）を組み合わせて、真の `net_cost` を計算します。

### ステップ 2: P&L メトリクスの定義

次のステップは、既知の GCP ユースケースのメトリクスを計算し、実際のコストにこれらの比率を適用することです。

これらのメトリクスの定義は FinOps と FP&A が所有し、さまざまなソースから提供されます:

1. GitLab.com: 使用時の名前空間の GitLab プランに使用量をマッピングすることで、`plan` と `pl_category` ごとのさまざまな GitLab 機能（CI ランナー、リポジトリストレージなど）の実際の使用量の日次比率を計算する
2. GCP 請求属性: シートロードに基づいて、GCP フォルダー、プロジェクト、ラベルなどを `pl_category` にマッピングし、提供された比率を適用する
3. Prometheus（`periodic_queries`）: HAProxy エグレスバイト使用量の日次比率を計算し、バックエンドマッピングのシートロードに基づいて `pl_category` にマッピングする

| モデル名    | ソース |   メトリクス定義    |
|-----------|--------|--------------|
|`prep_ci_build_artifact_ratio_daily`    |GitLab プロジェクト統計|    日次でのプラン/P&L カテゴリごとのビルドアーティファクト使用率 |
|`prep_repo_storage_ratio_daily` |  GitLab プロジェクト統計|   日次でのプラン/P&L カテゴリごとのリポジトリストレージ使用率 |
|`prep_container_registry_ratio_daily`    | GitLab プロジェクト統計|    日次でのプラン/P&L カテゴリごとのコンテナレジストリ使用率 |
|`prep_ci_runner_ratio_daily`   | GitLab CI ランナーアクティビティ |    日次でのランナータイプ/プラン/P&L カテゴリごとの ci.minutes での CI 消費率 |
|`prep_gcp_billing_attribute_ratio_daily`|  シートロード  | 親フォルダー別 GCP プロジェクト、特定の GCP プロジェクトコスト、P&L カテゴリにマッピングされたインフラストラクチャラベル別 GCP リソース |
|`prep_haproxy_ratio_daily` |    Prometheus、シートロード |    日次でのバックエンドごとのギガバイト単位のネットワーク使用量 |
|`prep_pubsub_ratio_daily`|   手動  |    日次の PubSub 使用量 |

### ステップ 3: GCP 行アイテムの最初の帰属

次に、`mart_gcp_billing_line_item` で、以下の識別子（重要度の高い順）に基づいて最適なマッチを選択し、各 GCP 行アイテムをメトリクスに帰属させます:

- GCP フルパス
- GCP サービス説明
- GCP SKU 説明
- インフラストラクチャラベル
- 環境ラベル
- ランナーラベル
- GCP プロジェクト ID

最適なマッチが選択されると、行は P&L カテゴリと GitLab プランに分割されます。使用量と net_cost フィールドは、`ステップ 2` で計算されたメトリクス使用量のパーセントに基づいて調整されます。

### ステップ 4: ルックバックの計算

ルックバックマッピングは、更新された P&L 配分を過去のデータに遡って適用するために使用されます。これにより、P&L レポートの時間的な一貫性が確保されます。Google の Cloud Billing データでは、コミット費用は引き続き適格なコンピュートリソースを使用しているプロジェクトで発生します。特定のコスト領域に P&L 分割を適用すると、コミット使用割引（CUD）の行がマッピングされず、同じパラメーターを振り返ることでマッピングしなければなりません。

適用する Committed Use Discount には 2 種類あります:

- **Flex CUD**: Google Cloud Platform で使用の柔軟性を提供するタイプのコミット使用割引。
- **T2D**: コミット使用割引のコンテキストで、特定のタイプの Google Cloud Platform リソースまたはサービスを指す。

これらの 2 つのルックバックは `rpt_gcp_billing_lookback` で生成され、CUD の行アイテムを定義するルールに基づいて各タイプの CUD の請求 net_cost の日次比率を計算します。

### ステップ 5: ルックバックの適用とレポートフィールドの生成

最後のステップは、`ステップ 3` で計算された CUD ルックバックに基づいて、`mart_gcp_billing_line_item` で以前に帰属された行を再帰属させることです。GCP 行アイテムとルックバックマッピングの間の最適なマッチを見つけ、同じ属性に基づくマッチを優先します。

最後に、`product_category`、`finance_sku_type`、階層列などのレポート用フィールドを導出します。
