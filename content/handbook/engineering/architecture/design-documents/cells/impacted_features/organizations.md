---
stage: enablement
group: Tenant Scale
title: 'Cells: Organization (組織)'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/organizations/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---


{{% alert %}}
このドキュメントは作業中であり、Cells 設計の非常に初期の状態を表しています。重要な側面は未だ文書化されていませんが、将来的に追加する予定です。これは Cells のアーキテクチャの一候補であり、実装するアプローチを決定する前に代替案と比較検討するつもりです。このアーキテクチャを採用しないと決定した場合でも、そのドキュメントを保持し、このアプローチを選択しなかった理由を記録します。
{{% /alert %}}


Cells アーキテクチャの主要な設計の一つは、グループ間の強固な分離です。
[Organization ブループリント](../../organization/) で説明されている Organization は、システムの残りの部分から分離された多数のグループを結合するための、妥当な UX を提供する方法です。

## 1. 定義

Cells は、単一の Organization に属するすべてのグループとプロジェクトを単一の Cell にのみ保存できることを要求します。なぜなら、Cell はローカルに保持するデータにのみアクセスでき、他の Cell からの情報を読み取る能力が非常に限られているためです。

Organization を持つ Cells は、Organization 間の強固な分離を要求します。

これは、Todo、プロジェクトを選択するドロップダウン、他の Issue やプロジェクトへの参照、または GitLab に存在するその他のソーシャル機能など、さまざまなユーザー向け機能に重大な影響をもたらします。
今日、これらの機能はシステム全体の任意のものを参照できました。
Organization の導入により、これは禁止されます。

この問題の定義は、Organization をシステムに強固に分離するために必要な工数と影響を明らかにすることを目指しています。影響を受ける機能とそのデータ処理フローを含みます。
目的は、実装時に一貫して、単一の Cell に存在する Organization 間のデータ漏洩を回避できるようにすることです。

## 2. 提案

[Organization ブループリント](../../organization/) を参照してください。
