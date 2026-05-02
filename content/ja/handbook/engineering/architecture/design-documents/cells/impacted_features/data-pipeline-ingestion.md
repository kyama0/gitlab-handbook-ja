---
stage: enablement
group: Tenant Scale
title: 'Cells: データパイプラインインジェスチョン'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/data-pipeline-ingestion/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

このドキュメントは作業中であり、Cells 設計の非常に初期の状態を示しています。重要な側面はまだ文書化されていませんが、今後追加する予定です。これは Cells に対して考えられるアーキテクチャの一つであり、どのアプローチを実装するかを決定する前に代替案と比較検討する予定です。このアプローチを実装しないと決定した場合でも、そのアプローチを選ばなかった理由を記録するため、このドキュメントは保持されます。

</div>


Cells アーキテクチャは、データ分析に使用するために Postgres から Snowflake にデータをエクスポートする現在の [データパイプライン](https://internal.gitlab.com/handbook/enterprise-data/platform/pipelines/saas-gitlab-com/) に大きな影響を与えます。このデータパイプラインは多くのユースケースを満たしています（例：SAAS サービスピング、Gainsight メトリクス、SAAS プラットフォームのレポーティングと分析）。

## 1. 定義

## 2. データフロー

現在のデータパイプラインは、CDC メカニズムを通じてデータを取得できないことにより（データ品質の問題を引き起こす）制限されており、Postgres データベースをポーリングして新しいレコードと更新されたレコードを探すか、特定のテーブルのデータを完全に抽出することで動作しており、多くのオーバーヘッドが発生します。現在、データパイプラインは `main` データベースと `ci` データベースの両方のスナップショットから作成された 2 つのインスタンスに対して実行されます。これは本番データベースへの負荷を避けるために行われています。Cells アーキテクチャでは Postgres インスタンスが増えるため、現在のパイプラインはすべての Postgres インスタンスからデータを取得するようにスケールできません。今後のデータパイプラインの要件は以下の通りです：

- すべての Cell からすべての CDC（挿入、更新、削除）をキャプチャし、N 個の Cell に対して自動的にスケールするプロセスが必要です。
- 重大な障害や、データ異常の根本原因分析の場合に、データのキャッチアップができるデータベースインスタンスへの（直接または間接の）アクセスが必要です。
- データインジェスチョンを遅延させるインシデントをアラートするための監視が必要です。

## 3. 提案

## 4. 評価

## 4.1. メリット

## 4.2. デメリット
