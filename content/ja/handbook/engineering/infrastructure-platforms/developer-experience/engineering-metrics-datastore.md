---
title: "エンジニアリングメトリクスデータストア"
description: "Developer Experience セクションが使用するエンジニアリングメトリクスデータストアの概要。CI 実行、テスト実行、コードカバレッジ、パフォーマンステスト、Issue、マージリクエストのデータを網羅しています"
upstream_path: /handbook/engineering/infrastructure-platforms/developer-experience/engineering-metrics-datastore/
upstream_sha: 6a459a3ca969603754a3b5133342edb804d3012c
translated_at: "2026-04-28T17:23:43Z"
translator: claude
stale: false
---

## インスタンス

Developer Experience セクションは、大規模なエンジニアリングメトリクスデータの保存とクエリのために [ClickHouse](https://clickhouse.com/) インスタンスを使用しています。ClickHouse は分析ワークロードに最適化された列指向データベースであり、保持するデータ（CI 実行、テスト実行、コードカバレッジ、パフォーマンステスト、Issue、マージリクエスト）に適しています。

データベース、テーブル、マテリアライズドビュー、スキーマの技術文書については、[Developer Experience ClickHouse データベースカタログ（内部限定）](https://gitlab.com/gitlab-org/quality/engineering-productivity-infrastructure/-/blob/main/docs/clickhouse/databases.md)を参照してください。

### インスタンスの詳細

| プロパティ | 値 |
|----------|-------|
| **ホスティング** | ClickHouse Cloud |
| **インスタンス名** | CI_AND_TEST_METRICS |

### データ保持

ほとんどのデータは **1 年間**保持されます。コードカバレッジなど一部のデータセットは **3 ヶ月間**保持されます。

## ダッシュボード

このデータストアによって動作するダッシュボードは [Developer Experience ダッシュボード](./dashboards)ページに掲載されています。

## アクセス

ClickHouse インスタンスは内部向けであり、GitLab チームメンバーがアクセスできます。アクセスをリクエストするには、[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/)を提出してください。
