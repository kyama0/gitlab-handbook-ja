---
stage: enablement
group: Tenant Scale
title: 'Cells: デプロイアーキテクチャ'
status: rejected
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/rejected/deployment-architecture/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">rejected</span></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
</tr>
</tbody>
</table>
</div>


_このブループリントは [インフラストラクチャブループリント](../infrastructure/index.md) によって取って代わられました_

このセクションでは、GitLab.com の既存のデプロイアーキテクチャを説明し、期待される Cells アーキテクチャと対比します。

## 1. Cells 以前 - モノリシックアーキテクチャ

![Cells 以前のデプロイ](/images/engineering/architecture/design-documents/cells/rejected/diagrams/deployment-before-cells.drawio.png)

この図は、Cells アーキテクチャ導入前の GitLab.com のデプロイコンポーネントを簡略化して表しています。
この図は意図的に、アーキテクチャの概要に関連しないサービス（Cloudflare、Consul、PgBouncers など）を省略しています。
これらのサービスは、Cloudflare を除いて Cell ローカルとみなされます。

コンポーネントブロックは以下のとおりです。

- 独立してデプロイできる個別のコンポーネント。
- 他のコンポーネントから独立しており、幅広いバージョン互換性を提供するコンポーネント。

アプリケーションレイヤーのサービスは以下のとおりです。

- 強く相互接続されており、同じバージョンのアプリケーションで実行する必要があります。
  詳しくは [!131657](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131657#note_1563513431) を参照してください。
- 各サービスは多くのノードで実行され、十分なスループットを提供するために水平スケールされます。
- API（REST、gRPC）、Redis、または DB を使用して他のサービスとやり取りするサービスです。

依存サービスは以下のとおりです。

- まれにかつ選択的に更新されます。
- クラウドマネージドサービスを使用する場合があります。
- 各サービスはクラスタ化されており、高可用性を提供するために異なるアベイラビリティゾーンにまたがって実行される場合があります。
- オブジェクトストレージは、事前署名 URL が提供される場合にユーザーが直接アクセスすることもできます。

## 2. 開発用 Cells - アプリケーションの Cellular アーキテクチャへの適応

![開発用 Cells のデプロイ](/images/engineering/architecture/design-documents/cells/rejected/diagrams/deployment-development-cells.drawio.png)

**開発用 Cells** の目的は、導入された変更をテストおよび検証するために、本番に近いアーキテクチャをモデル化することです。
これは、[リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/index.html) の上で Cells をテストすることで実現できます。
詳しくは [#425197](https://gitlab.com/gitlab-org/gitlab/-/issues/425197) を参照してください。

[Cells 以前](#1-cells-以前---モノリシックアーキテクチャ) との違いは以下のとおりです。

- Cells によってルーティングサービスが開発されています。
- 開発用 Cells は、すべての補助サービスを管理するオーバーヘッドなしに Cells のプロトタイピングを可能にするために、開発環境でのみ実行することを意図しています。
- 開発用 Cells は、分割する必要のある重要なサービスのみに焦点を当てることで、GitLab.com アーキテクチャを簡略化して表現します。
- 開発用 Cells は本番環境での使用を意図していません。
- クラスタ全体のデータ共有は、Cell 1 のメインデータベース（PostgreSQL メインデータベースおよび Redis ユーザーセッションデータベース）への読み書き接続で行われます。

## 3. 初期の Cells デプロイ - モノリシックアーキテクチャから Cells アーキテクチャへの変換

![初期の Cells デプロイ](/images/engineering/architecture/design-documents/cells/rejected/diagrams/deployment-initial-cells.drawio.png)

[開発用 Cells](#2-開発用-cells---アプリケーションの-cellular-アーキテクチャへの適応) との違いは以下のとおりです。

- Cells によってクラスタ全体データプロバイダーが導入されます。
- クラスタ全体データプロバイダーは Cell 1 とともにデプロイされ、クラスタ全体のデータに直接アクセスできます。
- クラスタ全体のデータベースはメイン PostgreSQL データベースから分離されます。
- クラスタ全体データプロバイダーは、ユーザーデータ、ユーザーセッション（現在 Redis セッションクラスターに保存）、ルーティング情報、クラスタ全体の設定をすべての Cell にわたって保存および共有する責任を持ちます。
- クラスタ全体のデータベースへのアクセスは非同期で行われます:
  - 読み取りアクセスは常にデータベースレプリカを使用します。
  - データベースレプリカは Cell とともにデプロイされる場合があります。
  - 書き込みアクセスは専用のクラスタ全体データプロバイダーサービスを使用します。
- 追加の Cell は、[GitLab Dedicated 型](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated/index.html)のコントロールプレーンを介してデプロイ、アップグレード、維持されます。
- 各 Cell は可能な限り多くのサービスを独立して実行することを目指します。
- Cell は独自の Gitaly クラスターを実行することも、共有 Gitaly クラスターを使用することも、その両方も可能です。
  詳しくは [!131657](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131657#note_1569151454) を参照してください。
- GitLab が提供する共有ランナーは、Cell でローカルに実行されることが期待されます。
- インフラストラクチャコンポーネントはクラスタ全体で共有され、異なる Cell が使用する場合があります。
- Elasticsearch サービスをクラスタ全体で実行するか Cell ローカルで実行するかはまだ決定されていません。
- **GitLab Pages - `gitlab.io`** コンポーネントのスケールについての決定を延期します。
- **Registry - `registry.gitlab.com`** コンポーネントのスケールについての決定を延期します。

## 4. ハイブリッド Cells デプロイ - 初期の完全な Cells アーキテクチャ

![ハイブリッド Cells のデプロイ](/images/engineering/architecture/design-documents/cells/rejected/diagrams/deployment-hybrid-cells.drawio.png)

[初期の Cells デプロイ](#3-初期の-cells-デプロイ---モノリシックアーキテクチャから-cells-アーキテクチャへの変換) との違いは以下のとおりです。

- Cell N と Cell 1 の結合を除去します。
- クラスタ全体データプロバイダーは Cell 1 から分離されます。
- クラスタ全体のデータベース（PostgreSQL、Redis）はクラスタ全体データプロバイダーで実行されるように移動されます。
- クラスタ全体のデータへのすべてのアプリケーションデータアクセスパスはクラスタ全体データプロバイダーを使用します。
- 一部のサービスは Cell 間で共有されます。

## 5. ターゲット Cells - 完全に分離された Cells アーキテクチャ

![ターゲット Cells のデプロイ](/images/engineering/architecture/design-documents/cells/rejected/diagrams/deployment-target-cells.drawio.png)

[ハイブリッド Cells デプロイ](#4-ハイブリッド-cells-デプロイ---初期の完全な-cells-アーキテクチャ) との違いは以下のとおりです。

- ルーティングサービスが [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/index.html) と [GitLab コンテナレジストリ](https://docs.gitlab.com/ee/user/packages/container_registry/index.html) をサポートするように拡張されます。
- 各 Cell はすべてのサービスを分離して持ちます。
- 一部の Cell が[ハイブリッドアーキテクチャ](#4-ハイブリッド-cells-デプロイ---初期の完全な-cells-アーキテクチャ)に従うことが許可されます。

## サービスの分離

各サービスはその要件、スケールに関連するリスク、配置（クラスタ全体または Cell ローカル）、および Cell 間でのデータ移行能力への影響について個別に検討できます。

### クラスタ全体サービス

| サービス | タイプ | 使用 | 説明 |
|---------|-------|------|------|
| **ルーティングサービス** | GitLab 製 | クラスタ全体データプロバイダー | すべての GitLab SaaS ドメインからのリクエストを Cell にリダイレクトできる汎用ルーティングサービス |
| **クラスタ全体データプロバイダー** | GitLab 製 | PostgreSQL、Redis、イベントキュー？ | ユーザープロファイルとルーティング情報をすべてのクラスタ化されたサービスに提供する |

アーキテクチャに従い、上記のサービスはクラスタ全体で実行する必要があります。

- これらは Cells アーキテクチャによって導入された追加のサービスです。

### Cell ローカルサービス

| サービス | タイプ | 使用 | クラスタ全体から Cell への移行 | 説明 |
|---------|-------|------|--------------------------|------|
| **Redis クラスター** | マネージドサービス | ディスクストレージ | 問題なし | Redis はユーザーセッション、アプリケーションキャッシュ、Sidekiq キューを保持するために使用されます。そのデータのほとんどは Cell にのみ適用されます。 |
| **GitLab ランナーマネージャー** | マネージドサービス | API、Google Cloud VM インスタンスを使用 | 問題なし | API と CI ジョブの実行に大幅な変更が必要 |

アーキテクチャに従い、上記のサービスは Cell ローカルで実行する必要があります。

- Cell ローカルサービスが保持するコンシューマーデータは別の Cell に移行可能である必要があります。
- サービスによって生成されるコンピュートは相当なものであり、[単一 Cell の障害](../goals.md#high-resilience-to-a-single-cell-failure)の影響を軽減することが強く求められます。
- Cells アーキテクチャの観点からクラスタ全体でサービスを実行するのは複雑です。

### ハイブリッドサービス

| サービス | タイプ | 使用 | クラスタ全体から Cell への移行 | 説明 |
|---------|-------|------|--------------------------|------|
| **GitLab Pages** | GitLab 製 | ルーティングサービス、Rails API | 問題なし | `.gitlab.io` またはカスタムドメインで CI 生成ページを提供する |
| **GitLab レジストリ** | GitLab 製 | オブジェクトストレージ、PostgreSQL | 分割の場合は非自明なデータ移行 | GitLab コンテナレジストリを提供するサービス |
| **Gitaly クラスター** | GitLab 製 | ディスクストレージ、PostgreSQL | 問題なし: Gitaly ノードのバランスを調整する組み込みの移行ルーティン | Gitaly は Git リポジトリデータを保持します。多くの Gitaly クラスターをアプリケーションで設定できます。 |
| **Elasticsearch** | マネージドサービス | シャーディングで多くのノードが必要 | 時間がかかる: クラスターをゼロから再構築する | すべてのプロジェクトにまたがる検索 |
| **オブジェクトストレージ** | マネージドサービス | | 単純ではない: バケット間で選択的に移行するのはかなり困難 | GitLab が提供するすべてのユーザーおよび CI アップロードファイルを保持する |

アーキテクチャに従い、上記のサービスはクラスタ全体または Cell ローカルのいずれかで実行することが許可されます。

- ハイブリッドサービスをクラスタ全体で実行する能力は、一部のサービスが共有されるため、Cell 間でのデータ移行の作業量を減らす可能性があります。
- クラスタ全体で実行されるハイブリッドサービスは、[単一 Cell の障害](../goals.md#high-resilience-to-a-single-cell-failure)によって引き起こされる影響が増大するため、Cell の可用性とレジリエンスに悪影響を与える可能性があります。

| サービス | タイプ | 使用 | クラスタ全体から Cell への移行 | 説明 |
|---------|-------|------|--------------------------|------|
| **Elasticsearch** | マネージドサービス | シャーディングで多くのノードが必要 | 時間がかかる: クラスターをゼロから再構築する | すべてのプロジェクトにまたがる検索 |
| **オブジェクトストレージ** | マネージドサービス | | 単純ではない: バケット間で選択的に移行するのはかなり困難 | GitLab が提供するすべてのユーザーおよび CI アップロードファイルを保持する |

アーキテクチャに従い、上記のサービスはクラスタ全体または Cell ローカルのいずれかで実行することが許可されます。

- 上記のサービスをクラスタ全体で実行する能力は、一部のサービスが共有されるため、Cell 間でのデータ移行の作業量を減らす可能性があります。
- クラスタ全体で実行されるハイブリッドサービスは、[単一 Cell の障害](../goals.md#high-resilience-to-a-single-cell-failure)によって引き起こされる影響が増大するため、Cell の可用性とレジリエンスに悪影響を与える可能性があります。
