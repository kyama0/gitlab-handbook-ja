---
stage: core platform
group: Tenant Scale
title: "Cell: 1.5"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/iterations/cells-1.5/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-21T08:26:37+02:00"
---

**注記:** Cells 1.0、1.5、2.0 というフェーズ名は Protocells に置き換えられています。ただし、このコンテンツは参考資料として引き続き有用かもしれません。

このドキュメントは [Cells 1.0](cells-1.0.md) の上に構築された Cells 1.5 の技術的な提案について説明します。

Cells 1.5 のターゲットは、SaaS GitLab.com 提供を使用する既存のエンタープライズ顧客向けの移行ソリューションを提供することです。

## はじめに

Cells 1.5 は既存のエンタープライズ顧客をターゲットとしています:

1. GitLab.com レガシー Cell の既存の顧客であり、Organization モデルを使用したい。
1. 自分の Organization を GitLab.com の残りの部分から分離させたい。
1. グループとプロジェクトはプライベートであることが意図されている。

開発とインフラストラクチャの観点から、以下の目標を達成したいと考えています:

1. Organization モデルに移行した顧客は互いから分離される。
1. ユーザーは[複数の Organization のメンバーになれる](../organization/#organizations-on-cells-15-fy25q3-fy25q3)。
1. ユーザーの介入なしで、またはユーザーのワークフローを変更することなく、レガシー Cell から別の Cell に Organization を移行できる。
1. 移行後にルーティングソリューションが顧客を正しい Cell に動的にルーティングできる。

長期的には以下の目標を達成したいと考えています:

1. 提案されたアーキテクチャは、ユーザーが多くの Organization とやり取りする機能を実装することを妨げてはならない。
1. Cell は Organization を Cell 間で移動することで再バランシングできる。
