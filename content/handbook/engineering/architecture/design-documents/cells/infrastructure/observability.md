---
title: "Cells: フリートにおける Cells の可観測性"
status: proposed
creation-date: "2024-02-02"
authors: [ "@igorwwwwwwwwwwwwwwwwwwww", "@reprazent", "@abrandl" ]
coach: ""
approvers: [ "@nduff", "@stejacks-gitlab", "@abrandl" ]
owning-stage: "~devops::platforms"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/infrastructure/observability/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T10:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/igorwwwwwwwwwwwwwwwwwwww" class="text-blue-600 hover:underline">@igorwwwwwwwwwwwwwwwwwwww</a>, <a href="https://gitlab.com/reprazent" class="text-blue-600 hover:underline">@reprazent</a>, <a href="https://gitlab.com/abrandl" class="text-blue-600 hover:underline">@abrandl</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/nduff" class="text-blue-600 hover:underline">@nduff</a>, <a href="https://gitlab.com/stejacks-gitlab" class="text-blue-600 hover:underline">@stejacks-gitlab</a>, <a href="https://gitlab.com/abrandl" class="text-blue-600 hover:underline">@abrandl</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::platforms</span></td>
<td class="px-3 py-2 border border-gray-300">2024-02-02</td>
</tr>
</tbody>
</table>
</div>


## 概要

複数の Cell をデプロイする際には、単一の Cell の状態を把握できる必要がありますが、フリート全体とそのパフォーマンスの集約ビューも必要です。Cell の可観測性の間に十分な分離が必要であり、グローバルまたは Cell ローカルな監視スタックが困難な状況でも Cell を監視し続けることができます。

デプロイする監視ツールはすべての Cell で一貫している必要があり、加えた変更はサイズや数に関わらずすべての Cell に適用できる必要があります。

このドキュメントでは、そのようなシステムの要件について説明します。[Cells 1.0](../iterations/cells-1.0.md) イテレーションを対象としています。

## 動機

### 目標

1. ステークホルダーにアラートと可観測性データ（ログとメトリクス）へのアクセスを提供する。
1. Cell ローカルの可観測性スタックをプロビジョニングする。

### 非目標

1. Cell のユーザー（例: Organization の管理者）に可観測性データを提供しません。これは運用目的のみのものです。

## 提案

### 要件

1. 各 Cell は完全にローカルな可観測性スタックを持ち、独立してアクセス可能で、独立して動作します。

   1. ログへの独立したアクセス（例: BigQuery、Google のログエクスプローラー、Elasticsearch、GCS アーカイブ）。
   1. メトリクスへの独立したアクセス。
   1. アラートは Cell ごとに評価されます。
   1. キャパシティプランニング。
   1. エラーバジェットメトリクス。
   1. SIRT: Devo へのログ配信（例: アプリケーションログ、Syslog、クラウドおよびインフラストラクチャ監査ログ）。
   1. VM 上の Osquery。
   1. すべての VM および Kubernetes ノード上の Wiz Runtime Agent。

1. Cell メトリクスの設定は、Cell のアーキテクチャと想定ワークロードに基づいたデフォルトを使用します。これは Cell の設定の一部です。
1. Cell ローカルの可観測性スタックのプロビジョニングと変更管理は、標準の Cells デプロイメントプロセスに統合される必要があります。これにより再現性が確保されます。デプロイメントには可観測性の設定とインフラストラクチャの変更のみが含まれる場合があります。
1. グローバルコンポーネント（例: Cells Router、AI Gateway）の可観測性は、既存のグローバル可観測性スタックによって管理されます。
1. Cell での可観測性の設定方法は、Dedicated テナントと同じである必要があります: メトリクスカタログを使用します。

### 望ましい機能

以下は Cells 1.0 のスコープで「あると望ましい」機能です。Cells のデプロイメントを拡大するにつれて、ハード要件になる可能性があります。

1. 各 Cell へのファンアウトにより、データの重複保存を避ける統一されたグローバル（クロス Cell）ビュー。ステークホルダーは最初は Cell ごとのベースで Cell ローカルの可観測性データにアクセスできます。
1. エラーバジェットレポートは初期実装のスコープ外です。メトリクスは記録されますが、ステージグループのエラーバジェットレポートにはまだ含まれません。
1. これにより、GitLab Dedicated のメトリクスをグローバル可観測性スタックで利用可能にするための道が開かれます。ただし、最初は Cell ローカルアクセスに焦点を当てているため、これはこの可観測性イテレーションのスコープではありません。

   **理由:** グローバルな可観測性が必要であるため、GitLab Dedicated からのすべてのメトリクスが、ダッシュボードへのアクセス権を持つすべての人が利用できることになります。これはすべての Dedicated のメトリクスに対して許可されない可能性があります。そのため、ステージグループのエラーバジェットを含むグローバルスタックにそれらのメトリクスを組み込む前に、その対処方法を検討する必要があります。

## 設計と実装の詳細

Cells のデプロイメントは、GitLab Dedicated 環境の作成と管理にも使用される [Instrumentor](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor) を効果的に使用します。
Instrumentor は AWS と GCP へのデプロイが可能ですが、Cells では GCP のみが対象となります。
Cell 環境のデプロイ方法の詳細については、[デプロイメントブループリント](deployments.md#deployment-coordinator-and-cell-cluster-coordinator)を参照してください。

### 最初の Cell デプロイに向けての準備: 基本的な可観測性

Instrumentor を通じて作成された環境には、[`tenant-observability-stack` モジュール](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor/blob/de8f7220366fc8a284dac14cab708fb55b0c790d/common/modules/tenant-observability-stack/main.tf#L1)から管理される一連の可観測性機能が含まれています。
以下の機能は、Instrumentor によって作成された環境（GCP）でサポートされています。

1. [`kube-prometheus-stack`](https://artifacthub.io/packages/helm/prometheus-community/kube-prometheus-stack) を使用した Cell ローカルメトリクス（Kubernetes 上の Prometheus、Grafana）。
1. GET メトリクスカタログのデプロイメント（ダッシュボード、記録ルール、アラート）。
1. エクスポーター（`cert-exporter`、`redis-exporter`）。

デフォルトでは、GCP ベースの環境は現在ロギングに Cloud Logging を使用しています。

最初の Cell 環境をデプロイする準備ができたら、これらの機能をすぐに利用できることが期待できます。

### 次のイテレーション: 可観測性の基盤を完成させる

Cells の基本的な可観測性のサポートを完成させるために、以下の手順を実施します。

1. OBS0: [tenant-observability-stack を独自のモジュールとして抽出する](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/3539)
1. OBS1: [Instrumentor から独立して Cell の可観測性設定を更新するデプロイメント自動化](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1337)
1. OBS2: [Cell ローカルの Prometheus をグローバル Alertmanager に接続する](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1338)
1. OBS3: [Elastic Cloud を使用した Cells のロギングを実装する](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1339)

#### OBS0: tenant-observability-stack を独自のモジュールとして抽出する

Issue: [#3539](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/3539)

Scalability::Observability チームが迅速なイテレーションサイクルを行えるように、Instrumentor コードベースから可観測性関連の側面を分割して抽出し、別のモジュールで管理したいと考えています。
Cells の可観測性実装を担う個別の Terraform モジュール [observability-cell-stack](https://gitlab.com/gitlab-com/gl-infra/terraform-modules/observability/observability-cell-stack) を作成します。

これは組織的な観点から恩恵を受けることが期待されます。なぜなら、他のチームからのコードレビューに直接依存せずに、より迅速に変更をイテレーションできるようになるからです。
目標は、Instrumentor が管理する Cells 環境への注入などに使用できる、明確に定義されたインターフェース（パラメーター）を持つ一貫性のあるモジュールを提供することです。
早い段階での開発において、個々の変更をテストするために完全な Instrumentor サンドボックスを経由する必要がないため、テストの側面も改善されることが期待されます。

モジュールを Instrumentor から抽出するアイデアは、Cells の取り組みの一環としてより広く適用可能です。
抽出されたモジュールの共通構造を実装することを計画しており、他のチームが同様のアプローチを取れるようにします。

#### OBS1: Cell の可観測性設定の管理

Epic: [&1337](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1337)

記録ルール、アラート、ログインデックス定義などの可観測性設定を更新する際、これらの更新を環境全体の再デプロイとは独立して Cell に適用する必要があります。
Cell でこの設定を独立して更新するために、設定のライフサイクルを Instrumentor から切り離し、代わりに Kubernetes オペレーターを使用して設定をリフレッシュすることを計画しています。

現在、Instrumentor では [GET メトリクスカタログ](https://gitlab.com/gitlab-com/runbooks/blob/180a5b96670abd6cc2e2ceda395e7eb6752b5bf1/reference-architectures/get-hybrid/README.md#L1)などの可観測性設定が Instrumentor 自体にベンダー化されています。
Instrumentor は設定の一部に対して[オーバーライドを定義](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor/-/blob/main/metrics-catalog/gcp/overrides/gitlab-metrics-options.libsonnet)できます。
実際の[設定は生成されてチェックイン](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor/-/tree/main/metrics-catalog/gcp/config)され、環境にデプロイされます。

環境全体から独立して設定を更新するために、リクエストに応じて、または設定の新バージョンのリリース時にこの設定をリフレッシュする仕組みを実装することを計画しています。
設定バージョンは Instrumentor リリースおよび OBS0 で抽出された `tenant-observability-stack` モジュールのバージョンとは独立していることに注意する価値があります。

このセクションは、設定を更新する必要があるタイミングと方法の具体的な側面で詳細化する必要があります。
メトリクスとロギングの設定については、それぞれ別途詳細化できます。

#### OBS2: グローバル Alertmanager へのアラートのルーティング

Epic: [&1338](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1338)

Cell からのアラートを処理するために、これらをグローバル Alertmanager（`alerts.gitlab.net` インスタンス。[#4645](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/4645)にも関連）にルーティングする必要があります。
アラートには Cell 識別子が含まれている必要があり、Cell 環境全体でアラートを区別できるようにし、常に正しい Cell ローカルの監視スタック（例: Grafana リンクなど）にリンクを戻す必要があります。

これは GitLab Dedicated にも関連します。[#4645](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/4645) を参照してください。

このセクションは、より詳しく理解が深まるにつれて詳細化する必要があります。

#### OBS3: Elastic Cloud を使用した Cells のロギング

Epic: [&1339](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1339)

GitLab.com で使用するのと同様の方法で Elastic Cloud と GCS を使用することを目指しています。

この部分をより詳細化するにあたって、以下の側面を検討する必要があります:

1. Cell ごとの Elastic Cloud デプロイメントのプロビジョニング
1. Elastic Cloud と GCS にログを取り込むためのロギングパイプラインのデプロイ
1. pub-sub を使用して SIRT がログを SIEM に取り込むことを調整する

以下の質問に答える必要があります:

- ロギング: ログの収集と転送にどのテクノロジーを使用するか（例: fluentd、vector）？目標は GitLab Dedicated（[#5037](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/5037) も参照）と Cells に同じログ取り込み/転送メカニズムを使用することですが、ログを永続化するために異なる宛先をサポートできる可能性があります。

### 対処すべき質問

設計を詳細化し実装を進めるにあたって、以下の質問に答えるようにする必要があります。

- 保持ポリシーはどのようなものか？
- スケーラビリティ、信頼性、DR の特性は？
- このシステムのコストを左右するものは何か？
- ダッシュボードとの統合はどのように行うか？
- ディスカバリーと認証はどのように機能するか？

### 技術選択

Cells 環境では、現在 GitLab.com 本番環境で使用しているものと同じテクノロジースタックを使用することを目標としています。

これは、Cells への移行を、私たちがまだ使用していない異なるテクノロジーやツールのトライアルや移行のために活用しないということを意味します。これは新しいテクノロジーを全体的に導入する能力を制限するものではありませんが、Cells 環境が .com での選択から大幅に逸脱しないようにしたいと考えています。

Cells 1.0 では、始めるために .com よりもスケーラビリティの低いアプローチを採用することが許容されます。

## 代替ソリューション

候補間のトレードオフを検討し、特定のテクノロジーが選択された理由を述べる必要があります。
