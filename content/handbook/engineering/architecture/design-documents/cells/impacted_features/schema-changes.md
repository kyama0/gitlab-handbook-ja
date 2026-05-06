---
stage: enablement
group: Tenant Scale
title: 'Cells: スキーマ変更'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/schema-changes/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---


{{% alert %}}
このドキュメントは作業中であり、Cells 設計の非常に初期の状態を表しています。重要な側面は未だ文書化されていませんが、将来的に追加する予定です。これは Cells のアーキテクチャの一候補であり、実装するアプローチを決定する前に代替案と比較検討するつもりです。このアーキテクチャを採用しないと決定した場合でも、そのドキュメントを保持し、このアプローチを選択しなかった理由を記録します。
{{% /alert %}}


独自のデータベースを所有する複数の Cell を導入すると、Postgres と Elasticsearch へのスキーマ変更プロセスが複雑になります。
今日でも、変更がゼロダウンタイムデプロイに準拠するよう注意する必要があります。
たとえば、[カラムを削除する場合は 3 つの別々のデプロイメントにわたって変更を行う必要があります](https://docs.gitlab.com/ee/development/database/avoiding_downtime_in_migrations.html#dropping-columns)。
必要なマージリクエスト数を削減するためにこのような変更を支援する `post_migrate` などのツールがありますが、異なるバージョンで稼働する複数の Rails アプリケーションをデプロイする場合には複雑になります。
この問題は、すべての Cell 間で `users` 関連テーブルを共有する計画など、共有データベースで特に解決が難しくなります。

Cells の主要なメリットの一つは、異なる顧客を異なるバージョンの GitLab で実行できることかもしれません。
現在のカナリアアーキテクチャよりもさらに柔軟性を持たせるために、すべての顧客より前に自分たちの Cell を更新することを選択するかもしれません。
しかし、このことはスキーマ変更がさらに多くのバージョンの後方互換性サポートを必要とすることを意味し、スキーマ変更に追加のステップが必要になることで開発が遅くなる可能性があります。

## 1. 定義

## 2. データフロー

## 3. 提案

## 4. 評価

## 4.1. メリット

## 4.2. デメリット
