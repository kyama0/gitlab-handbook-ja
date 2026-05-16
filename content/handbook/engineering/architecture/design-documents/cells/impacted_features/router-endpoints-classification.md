---
stage: enablement
group: Tenant Scale
title: 'Cells: ルーターエンドポイントの分類'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/router-endpoints-classification/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---


{{% alert %}}
このドキュメントは作業中であり、Cells 設計の非常に初期の状態を表しています。重要な側面は未だ文書化されていませんが、将来的に追加する予定です。これは Cells のアーキテクチャの一候補であり、実装するアプローチを決定する前に代替案と比較検討するつもりです。このアーキテクチャを採用しないと決定した場合でも、そのドキュメントを保持し、このアプローチを選択しなかった理由を記録します。
{{% /alert %}}


すべてのエンドポイントを分類することは、GitLab インストールのロードバランサーに到達するリクエストを、そのリクエストを処理できる Cell に適切にルーティングするために不可欠です。
各 Cell は各リクエストをデコードし、どの Cell に属するかを分類できる必要があります。

GitLab は現在、数百のエンドポイントを実装しています。
このドキュメントでは、Rails がこの情報を効率的に提供できるようにするために実装できるさまざまな技術について説明します。

## 1. 定義

## 2. データフロー

## 3. 提案

## 4. 評価

## 4.1. メリット

## 4.2. デメリット
