---
stage: enablement
group: Tenant Scale
title: 'Cells: グローバル検索'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/global-search/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

このドキュメントは作業中であり、Cells 設計の非常に初期の状態を示しています。重要な側面はまだ文書化されていませんが、今後追加する予定です。これは Cells に対して考えられるアーキテクチャの一つであり、どのアプローチを実装するかを決定する前に代替案と比較検討する予定です。このアプローチを実装しないと決定した場合でも、そのアプローチを選ばなかった理由を記録するため、このドキュメントは保持されます。

</div>


複数の Cell を導入する際、それらの Cell に関連するすべてのサービスを分離する予定です。これには Elasticsearch が含まれるため、現在のグローバル検索機能は機能しなくなります。すべての Cell をまたいだ集約検索を実装することは可能かもしれませんが、特にページネーション（各検索に対して正しいオフセットとページ番号を設定する必要がある）を開始すると、すべての Cell にわたってファンアウト検索を行うことはパフォーマンス的に困難になる可能性があります。

## 1. 定義

## 2. データフロー

## 3. 提案

Cells の最初のバージョンはグローバル検索をサポートしない可能性が高いです。その後、人気のあるユースケースをサポートするためのグローバル検索の構築が価値あるかどうかを検討するかもしれません。

## 4. 評価

## 4.1. メリット

## 4.2. デメリット
