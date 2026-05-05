---
stage: enablement
group: Tenant Scale
title: 'Cells: グループ転送'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/group-transfer/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

このドキュメントは作業中であり、Cells 設計の非常に初期の状態を表しています。重要な側面は未だ文書化されていませんが、将来的に追加する予定です。これは Cells のアーキテクチャの一候補であり、実装するアプローチを決定する前に代替案と比較検討するつもりです。このアーキテクチャを採用しないと決定した場合でも、そのドキュメントを保持し、このアプローチを選択しなかった理由を記録します。

</div>


TL;DR

## 1. 定義

## 2. データフロー

## 3. 提案

この問題を [direct transfer](https://docs.gitlab.com/ee/user/group/import/index.html) を使用して解決するための [調査](https://gitlab.com/gitlab-org/gitlab/-/issues/458338) が進行中です。

## 4. 評価

## 4.1. メリット

## 4.2. デメリット

Direct transfer はユーザーを移行しないため、ユーザーは複数の Cell に存在できません。つまり Cells 1.0 において、Cell をまたぐ移行では、ユーザーによる貢献はすべてインポートを実行したユーザーに帰属されます。
