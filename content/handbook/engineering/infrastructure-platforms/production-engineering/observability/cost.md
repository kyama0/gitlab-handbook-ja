---
title: "Observability スタックのコスト"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/observability/cost/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T02:14:34Z"
translator: claude
stale: false
lastmod: "2025-09-18T16:00:12+00:00"
---

## Elastic Cloud のコスト（Snowflake）

**ビューの場所**
ビューは [こちら](https://app.snowflake.com/ys68254/gitlab/#/elasticcloud-cost-breakdown-dPmMm74OV) で確認できます。

**アクセス要件**
ダッシュボードを閲覧するには、`SNOWFLAKE_ANALYST` として Snowflake へのアクセスが必要です。アクセスを取得するには以下の手順に従ってください。

1. **アクセスリクエスト（AR）を作成する**: [提供されているテンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/30250) を使用して AR を提出してください。
2. **マージリクエスト（MR）を作成する**: AR が承認されたら、[MR を作成](https://gitlab.com/gitlab-data/analytics/-/merge_requests/10402/diffs) して自分自身に権限を付与してください。提供されているテンプレートと手順を使用してください。

アクセスを取得したら、ダッシュボードを閲覧および実行できるようになります。

**ビューの構築方法**
Elastic Cloud のビューは SQL クエリ（Snowflake のワークシート）を使用して構築されています。メインクエリは `gitlab-logs-prod` デプロイのビリングテーブルから SKU ごとの Elastic Cloud サービスの日次コストデータを取得します。このデータを日付、SKU、日次コストで整理して費用の追跡と分析を支援します。これらのビジュアライゼーションは再利用可能で、他の Snowflake ダッシュボードにも統合できます。

**ビューの表示内容**

1. **SKU 別内訳（日次）**: SKU ごとの日次 ECU 支出を表示します。
2. **ECU 支出（月次）**: 各月の SKU ごとの合計 ECU 支出を表示します。
3. **データ転送別内訳**: ノード間、受信、送信を含むデータ転送に費やされた日次 ECU を表示します。
4. **ECU バーンダウン（日次）**: 日次 ECU 支出のバーンダウンチャートを提供します。2024年2月16日（Snowflake でこのデータの記録を開始した時点）の合計 ECU から開始します。
5. **推定 ECU 枯渇**: 残高を日次平均コストで割って計算された推定 ECU 枯渇日を表示する表です（日次平均コストは各日の日次コストを合計してからこれらの合計を平均することで求められます）。

## GKE/GCP コスト（Grafana）

**ビューの場所**
ビューは [こちら](https://dashboards.gitlab.net/d/9367c839-db0c-4e71-a97b-a0824087d159/gke-cluster-metering?orgId=1&from=now-2d&to=now&timezone=utc&var-project=gitlab-ops&var-cluster=ops-gitlab-gke&var-namespace=$__all&var-deployment=$__all) で確認できます。

**ビューの構築方法**

1. **GKE クラスターコストと使用量の計算**
   このクエリは GKE クラスターのコストを評価し、BigQuery の `gke_usage_metering.gke_cluster_resource_usage` テーブルと GCP ビリングエクスポートのデータを使用して名前空間ごとの CPU/メモリ使用量を追跡します。コストは名前空間ごとの加重平均リソース使用量に基づいて計算されます。

2. **GCP SKU リソースクエリ**
   このクエリは、ツール（例: Mimir、Sentry）に関連するすべての GCP SKU リソースと、その説明および日次価格をリストアップします。

3. **ノードエクスポーター**
   ノードエクスポーターはメトリクスを出力します。主に関心があるのはリクエストと利用リソースです。このデータをビューで使用して無駄を計算します。

**ビューの表示内容**

- **GKE 運用コスト**: GKE フットプリント内の各可観測性名前空間の日次コストを表示します。
- **GCP 運用コスト**: ロードバランサーのデータ処理やストレージスナップショットなど、SKU ごとのさまざまな GCP サービスのコストを内訳します。
