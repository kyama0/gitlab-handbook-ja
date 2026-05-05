---
title: "プロトセル"
status: ongoing
creation-date: "2026-02-15"
authors: [ "@tkuah", "@sxuereb" ]
coaches: [ "@tkuah", "@sxuereb" ]
owning-stage: "~devops::tenant scale"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/protocells/
upstream_sha: 4c7d94ca4f485376c886b7c2b9575091c8b7d3cf
translated_at: "2026-04-27T06:00:00Z"
translator: claude
stale: false
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">ongoing</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/tkuah" class="text-blue-600 hover:underline">@tkuah</a>, <a href="https://gitlab.com/sxuereb" class="text-blue-600 hover:underline">@sxuereb</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/tkuah" class="text-blue-600 hover:underline">@tkuah</a>, <a href="https://gitlab.com/sxuereb" class="text-blue-600 hover:underline">@sxuereb</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::tenant scale</span></td>
<td class="px-3 py-2 border border-gray-300">2026-02-15</td>
</tr>
</tbody>
</table>
</div>


## 概要

プロトセルは[レガシーセル](../cells/goals.md#legacy-cell)のデータベースを水平スケーラビリティによって解放します。

組織は論理的な境界として、セルは物理的な境界として機能します。

このデザインドキュメントは 3 つの主要なコンポーネントを統合します: 組織、組織の移行、セル。

進捗は[ワーキングエピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/1616)で追跡されています。

## 動機

GitLab.com は共有データベースを持つ単一のモノリシックインスタンスとして運営されており、根本的なスケーラビリティのボトルネックが生じています。

GitLab が成長するにつれて、レガシーセルのデータベースは増加する負荷とキャパシティの制約に直面しています。

プロトセルはこれを解決するために水平スケーラビリティを以下の方法で実現します:

- **論理的な分離**: 組織は顧客データと操作の明確な論理的境界を提供します。
- **物理的な分散**: セルは複数の自己完結した GitLab インスタンスに組織を分散させることを可能にします。
- **スケーラビリティ**: 複数のセルが独立して動作し、レガシーセルの負荷を取り除き、成長を可能にします。
- **機能パリティ**: すべてのデプロイメントモデル（GitLab.com、セルフマネージド、Dedicated）にわたって一貫した機能を維持します。

### ゴール

- 組織を論理的な境界として導入し、データ分離を可能にする組織の分離を実現する。
- セルフマネージドと Dedicated デプロイメントでインスタンスと組織の 1:1 マッピングを確立する。
- GitLab.com で複数の自己完結した GitLab インスタンスをセルとしてデプロイし、各セルが複数の組織をホストできるようにする。
- クロス組織の操作がパブリック API を使用して分離境界を維持することを確保する。
- すべてのデプロイメントモデルにわたる組織とセルの機能パリティを実現する。
- [レガシーセル](../cells/goals.md#legacy-cell)のデータベースを解放する。

### 非ゴール

- 個々の機能の詳細な実装仕様。
- 地域的なコンプライアンス。
- マルチクラウドサポート。
- 組織の負荷再分散。
- グローバル管理者。
- グローバル設定。

## 提案

![プロトセルの柱](/images/engineering/architecture/design-documents/protocells/protocells_pillars.png)

[ソース](https://excalidraw.com/#json=kIOOzXyJ-snh5P_pK0RGX,xrCYj2lKaXxB79YySTBtbg)

プロトセルは 3 つの柱の上に構築されています:

**1. 組織**: [組織の分離](../organization/isolation.md)と共に論理的な境界として組織を導入します。

これにより、データと操作が組織の境界を越えることが防がれます。組織コンテキストの解決がすべてのリクエストに対して確立されます。

セルフマネージドと Dedicated では、[組織 ADR](../organization/decisions/007_self_managed_dedicated_single_organization.md) を通じてインスタンスと組織の 1:1 マッピングが確立されます。

**2. 組織の移行**: [組織データ移行](../organization-data-migration/index.md) デザインドキュメントを通じて、セル間での組織の移動を可能にします。

このツールはレガシーセルから新しいセルへの組織の移行をサポートします。インフラストラクチャ全体での水平スケーラビリティと負荷分散を可能にします。

**3. セル**: [セルデザインドキュメント](../cells/index.md) を通じて、GitLab.com で複数の自己完結した GitLab インスタンスをセルとしてデプロイします。

各セルは複数の組織をホストできます。セルは独自のデータベースとインフラストラクチャを持つ独立した GitLab インスタンスとして動作します。

[ルーティングロジック](../cells/http_routing_service.md) は組織に基づいてリクエストを適切なセルに誘導します。

この取り組みは、[データ保持](../../guidelines/data_lifecycle/data_retention.md) などのレガシーセルのデータベースをサポートするための他の補完的な取り組みを排除するものではありません。

## 設計と実装の詳細

### 論理的境界と物理的境界

アーキテクチャは 2 種類の境界を区別します:

**論理的境界（組織）**: データシャーディング境界（例: PostgreSQL、Gitaly）とアクセス制御を定義します。

組織はすべての GitLab 機能とデータの分離単位です。

**物理的境界（セル）**: インフラストラクチャの分散を定義します。

セルは複数の組織をホストできる自己完結した GitLab インスタンスです。

この分離により以下が可能になります:

- 組織が論理構造を変更することなくセル間を移動できる。
- 複数の組織が単一のセルでインフラストラクチャを共有できる。
- クロス組織の操作がパブリック API を使用できる。

### 組織スコープの操作

ほとんどの操作は組織にスコープされる必要があります。

これにより、機能が論理的境界内で動作し、分離を維持することが確保されます。

### クロス組織の操作

複数の組織にまたがるすべての操作はパブリック API を使用しなければなりません。

これにより以下が確保されます:

- 適切な認証と認可の境界。
- デプロイメントモデル全体での一貫した動作。
- 組織間の明確な関心の分離。

クロス組織の操作の例:

- ユーザー認証とセッション管理。
- 共有リソースへのパブリック API アクセス。
- GitLab.com での管理操作。

### デプロイメントモデル

#### GitLab.com

- 複数のセル、各セルが複数の組織をホスト。
- 組織は分離の単位。
- セルは物理的な分散の単位。
- デフォルト組織が既存ユーザーの後方互換性を提供。

#### セルフマネージドと Dedicated

- 組織ごとに単一インスタンス（1:1 マッピング）。
- 組織は論理的な境界を提供。
- インスタンスは物理的な境界を提供。
- GitLab.com と比較してシンプルな運用モデル。

## 依存関係

このデザインドキュメントは 3 つの主要なデザインドキュメントに依存しています:

- **[セルデザインドキュメント](../cells/index.md)**: 複数の自己完結した GitLab インスタンスをデプロイするためのアーキテクチャを定義します。
- **[組織デザインドキュメント](../organization/index.md)**: 組織モデルと論理的境界としての役割を定義します。
- **[組織データ移行デザインドキュメント](../organization-data-migration/index.md)**: セル間での組織の移行のためのツールとプロセスを定義します。

## 機能パリティ

機能パリティは顧客が既存の機能を維持することを確保するために必要です。これらの取り組みは以下に焦点を当てます:

- [**組織の機能パリティ**](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/1871): すべてのデプロイメントモデルにわたって組織が一貫した機能を持つことを確保します。
- [**セルの機能パリティ**](https://gitlab.com/gitlab-org/architecture/readiness/-/blob/main/templates/platform_strategy/cells.md): セルが本番使用に必要なすべての GitLab 機能をサポートすることを確保します。

## 代替ソリューション

### 複数の独立したインスタンス

**メリット:**

- インスタンス間の完全な分離。
- 運用がシンプル。

**デメリット:**

- 共有リソースや機能がない。
- 複数のインスタンスの管理が困難。
- 統合された GitLab エクスペリエンスを提供しない。

## リンク

- [ワーキングエピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/1616)
- [セルデザインドキュメント](../cells/index.md)
- [組織デザインドキュメント](../organization/index.md)
- [組織の分離](../organization/isolation.md)
- [組織データ移行](../organization-data-migration/index.md)
- [組織 ADR: セルフマネージドと Dedicated の単一組織](../organization/decisions/007_self_managed_dedicated_single_organization.md)
