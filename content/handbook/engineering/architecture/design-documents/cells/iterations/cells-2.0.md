---
stage: core platform
group: Tenant Scale
title: 'Cells: 2.0'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/iterations/cells-2.0/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T10:00:00Z"
translator: claude
stale: false
---

**注記:** Cells 1.0、1.5、2.0 というフェーズ名は Protocells に置き換えられています。ただし、このコンテンツは参考資料として引き続き有用かもしれません。

このドキュメントは [Cells 1.5](cells-1.5.md) の上に構築された Cells 2.0 の技術的な提案について説明します。

Cells 2.0 のターゲットは、セル型アーキテクチャでパブリックおよびオープンソースの貢献モデルをサポートすることです。

## はじめに

Cells 2.0 は GitLab.com のパブリックおよびオープンソース Organization をターゲットとしています:

1. 既存のユーザーは GitLab.com の残りの部分から分離されたパブリック Organization を作成できる。
1. 単一のユーザーが異なる Cell にある多くの Organization のメンバーになれる。
1. ユーザーは Cell をまたいでパブリックプロジェクトに貢献できる。

開発とインフラストラクチャの観点から、以下の目標を達成したいと考えています:

1. ユーザーの介入なしで、またはユーザーのワークフローを変更することなく、Cell 間でパブリック Organization を移行できる。
1. ルーティングソリューションにより、多くの Organization と同時にシームレスなやり取りができる。
