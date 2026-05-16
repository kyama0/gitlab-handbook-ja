---
title: "Runway: GitLab のための PaaS"
status: ongoing
creation-date: "2023-07-31"
authors: [ "@igorwwwwwwwwwwwwwwwwwwww", "@ggillies" ]
coach: "@andrewn"
approvers: [ "@marin", "@fzimmer" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/runway/
upstream_sha: 4b2a1defc6e0116cecb1f346d7dc1d679e674d3f
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---

<!-- Blueprints often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/igorwwwwwwwwwwwwwwwwwwww" class="text-blue-600 hover:underline">@igorwwwwwwwwwwwwwwwwwwww</a>, <a href="https://gitlab.com/ggillies" class="text-blue-600 hover:underline">@ggillies</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/andrewn" class="text-blue-600 hover:underline">@andrewn</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/marin" class="text-blue-600 hover:underline">@marin</a>, <a href="https://gitlab.com/fzimmer" class="text-blue-600 hover:underline">@fzimmer</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300">2023-07-31</td>
</tr>
</tbody>
</table>
</div>


## まとめ

Runway は GitLab の内部 Platform as a Service であり、チームがサービスを迅速かつ安全にデプロイ・運用できるようにすることを目的としています。

## 動機

<!--
This section is for explicitly listing the motivation, goals and non-goals of
this blueprint. Describe why the change is important, all the opportunities,
and the benefits to users.
-->

このイニシアチブの根本的な動機は[Service Integration ブループリント](../gitlab_ml_experiments/)に記載されています。このブループリントは、その提案で提示された戦略的要件の実装と見なすことができます。

### 目標

<!--
List the specific goals / opportunities of the blueprint.
-->

- インフラ管理、スケーリング、監視についてあまり心配することなくサービスをデプロイしたい開発チームのため。
- ステートレスであり、需要に応じてオートスケーリングできるサテライトサービスに焦点を当てています。
- 効率的な体験を提供するために既存の GitLab 機能とツールとの統合を目指します。

### 非目標

<!--
Listing non-goals helps to focus discussion and make progress. This section is
optional.
-->

- GitLab モノリスのホスティング: モノリスは非常に特殊な要件を持つ複雑なアプリケーションであり、スコープ外です。モノリスのデプロイは Delivery チームが所有しており、[Cells](http://localhost:1313/handbook/engineering/architecture/design-documents/cells/index.md) などの他のツールやイニシアチブがこの領域を対象としています。
- 任意の GCP リソース: よく使用される GCP リソースのサブセットをサポートする可能性がありますが、サポートするものは選択的に行います。より多くの柔軟性が必要な場合は、代わりに [GitLab Sandbox](../../../../infrastructure-standards/realms/sandbox/) プロジェクトをリクエストすることをお勧めします。
- 任意の Kubernetes リソース: マネージドプラットフォームとして、基盤となるデプロイメカニズムをあまり多く公開しないことを目指します。これにより、よくサポートされたサブセットを持ち、プロバイダーを変更する柔軟性が得られます。特殊な要件がある場合は、独自の Kubernetes クラスターを取得する方が良い選択肢かもしれません。

## 提案

<!--
This is where we get down to the specifics of what the proposal actually is,
but keep it simple!
-->

Runway はサービスを Docker イメージとしてパッケージ化して本番環境にデプロイする手段です。GitLab CI/CD および他の GitLab プロダクト機能を活用してこれを実現します。

## 設計と実装の詳細

<!--
This section should contain enough information that the specifics of your
change are understandable.
-->

Runway の設計は、時間の経過とともに変更・置き換えできる方法で個々のコンポーネントを切り離すことを目的としています。

### アーキテクチャ

![Runway Architecture](/images/engineering/architecture/design-documents/runway/runway-architecture.png)

[図のソース](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/uploads/a6b6646efaa084937ef1f961ad902b59/runway-arch.key)

[初期アーキテクチャディスカッション](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/7)

### Provisioner

Provisioner は、サービスアカウントとシステムの残りの部分が必要とする最小限のリソースを作成する特権コードです。

このプロセスは「実験空間を作成してください」というリクエストを受け取り、その空間に必要な最小限のインフラをスタンプアウトすることを担当します。空間が不要になった場合の廃止もカバーします。

- 現在 Terraform がベースです。
- Terraform は provisioner プロジェクトの CI で実行されます。
- Terraform の状態を GitLab Terraform 状態バックエンドに保存します。

### Reconciler

Reconciler はシステムの中核です。（サービス定義と現在のバージョンに基づいた）世界の望ましいビューを作成し、実際の状態との差分を見つけ、その差分を適用することを担当します。

サービスの新しいバージョンをデプロイすることは、Reconciler を呼び出すことです。

このプロセスはサービス開発者からアーティファクト（例: Docker イメージ）を受け取り、それをランタイムに持ち込むことを担当します。これにはロールアウト戦略、ロールバック、カナリア、マルチ環境プロモーション、および失敗したデプロイの診断ツールが含まれます。これらの機能の一部はランタイムに委譲される場合もあります。既存のコードベースをデプロイに接続する標準的な方法もあるべきです。

- 現在 Terraform がベースです。
- Terraform はデプロイメントプロジェクトの CI で実行され、サービスプロジェクトからのダウンストリームパイプラインとしてトリガーされます。
- Terraform の状態をデプロイメントプロジェクトの GitLab Terraform 状態バックエンドに保存します。

Reconciler とのユーザー向けの統合は [`ci-tasks/service-project/runway.yml`](https://gitlab.com/gitlab-com/gl-infra/platform/runway/ci-tasks/-/blob/main/service-project/runway.yml) を介して行われます。これはサービスプロジェクトが CI 設定に含めるバージョンロックされた CI タスクです。

### Runtime

Runtime は実際にサービスワークロードをスケジュールして実行することを担当します。Reconciler は Runtime をターゲットとします。Runtime はある程度のテナント分離でオートスケールされたコンピューティングリソースを提供します。また、オプションでワークロードに到達できるエンドポイントを公開します。このエンドポイントには DNS 名があり、TLS で暗号化されます。

- 現在 Cloud Run がベースです。
- より多くの柔軟性が必要な場合、[Knative](https://knative.dev/docs/) が移行先として有力です。

サービスは HTTP ポートを公開する必要があり、ステートレスである必要があります（インスタンスをオートスケーリングできるようにするため）。他の実行モデル（例: スケジュールされたジョブ）は将来サポートされる可能性があります。

#### Runtime で使用されるイメージ

Runway によってデプロイされるイメージは、サービスを担当するチームによって構築されます。好きな方法でイメージを構築し、サービスプロジェクトの GitLab コンテナレジストリ内に保持できます。Runway デプロイメントプロセスの一部として、このイメージは Cloud Run に使用される前に [GCP Artifact Registry](https://cloud.google.com/artifact-registry) にミラーリングされます。これには2つの理由があります:

1. Cloud Run は GCP Artifact Registry からのみイメージを使用できます。
1. これにより、何らかの理由で将来イメージタグが変更されても（エラーによって）、Runway 内で実行されているイメージは影響を受けません。

#### GCP プロジェクトレイアウト

Runway は現在3つの環境（dev、staging、production）に基づいた共有 GCP プロジェクトを使用しています。これらの GCP プロジェクトは:

- Dev: `runway-dev-527768b3`（IT [HackyStack](../../../../infrastructure-standards/realms/sandbox/) によって管理）
- Staging: `gitlab-runway-staging`（[reliability](https://gitlab.com/gitlab-com/gl-infra/config-mgmt/-/tree/master/environments/runway-staging?ref_type=heads) によって管理）
- Production: `gitlab-runway-production`（[reliability](https://gitlab.com/gitlab-com/gl-infra/config-mgmt/-/tree/master/environments/runway-production?ref_type=heads) によって管理）

### Runway で使用されるドキュメントとスキーマ

Runway が機能するためには、2つの JSON/YAML ドキュメントが使用されます。それらは:

1. Runway インベントリモデル。現在 Runway にオンボーディングされているサービスプロジェクトを対象とします。[こちら](https://gitlab.com/gitlab-com/gl-infra/platform/runway/provisioner/-/blob/main/inventory.json?ref_type=heads)にあります。ドキュメントの検証に使用されるスキーマは[こちら](https://gitlab.com/gitlab-com/gl-infra/platform/runway/runwayctl/-/blob/main/schemas/service-inventory/v1.0.0-beta/inventory.schema.json?ref_type=heads)にあります。このドキュメントスキーマの変更に対して後方互換性は保証されません。これは Runway チームが内部的にのみ使用するためであり、Runway サービスのプロビジョニング/プロビジョニング解除に使用される実際のドキュメントは1つだけです。

1. Runway Service モデル。Runway ユーザーがサービスをデプロイするために Runway に必要な設定を渡すために使用されます。サービスプロジェクト内の `.runway/runway.yml` にあります。[例はこちら](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/.runway/runway.yml?ref_type=heads)。ドキュメントの検証に使用されるスキーマは[こちら](https://gitlab.com/gitlab-com/gl-infra/platform/runway/runwayctl/-/blob/main/schemas/service-manifest/v1.0.0-beta/manifest.schema.json?ref_type=heads)にあります。継続的に改善と変更を加えることを目指しますが、同じ `kind/apiVersion` 内のすべての変更は後方互換性が必要です。破壊的な変更を行うために、スキーマの新しい `apiVersion` がリリースされます。全体的な目標は [API 変更のための Kubernetes モデル](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api_changes.md)をコピーすることです。

Runway ユーザーが GitLab CI を通じた Runway による自動デプロイのために使用する [GitLab CI テンプレート](https://gitlab.com/gitlab-com/gl-infra/platform/runway/ci-tasks)もあります。ユーザーは使用している CI テンプレートと Runway のバージョンが最新であることを確認するために [Renovate ボット](https://gitlab.com/gitlab-com/gl-infra/common-ci-tasks/-/blob/main/renovate-bot.md)などのツールを使用することが推奨されます。Runway チームはリリースされたすべてのバージョンの Runway をサポートします。ただし、セキュリティ Issue が特定された場合を除きます。この場合、Runway ユーザーは通知を受け取り次第、できるだけ早く Issue の修正を含む Runway のバージョンに更新することが求められます。

### シークレット管理

シークレット管理については、既存の HashiCorp Vault セットアップとの統合を目指します。Vault から Runtime が最もよく統合するシークレットストアにシークレットを同期します。Cloud Run では Google Secret Manager を使用します。Kubernetes では external-secrets を使用して Kubernetes Secret オブジェクトに同期します。

次の高レベルの図は、runway による消費のための Vault 内のシークレットの提案セットアップを示しています。全体的なアイデアはトップレベルのネームスペース（`/runway`）が Vault に作成され、以下のようなロールとポリシーが設定されます:

- Runway チームメンバーはネームスペースに対する完全な権限を持つ。
- CI で実行される runway provisioner は `runway/env/$environment/service` に新しいサービスネームスペースを作成/変更/削除する能力を持つ。現在必要な環境は dev、staging、production です。
- runway reconciler サービスアカウントと GitLab チームメンバーは、デプロイのためにシークレットを読み取るために `runway/env/$environment/service/$runway_service_id` への読み取り専用アクセスが必要です。
- runway reconciler は Vault 内のシークレットを Cloud Run のネイティブシークレット統合を介した消費のために Google Secrets Manager にミラーリングします。

![Runway Vault Architecture](/images/engineering/architecture/design-documents/runway/runway_vault_4_.drawio.png)

図のソース: `https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/architecture/blueprints/runway/img/runway_vault_4_.drawio`

### Runway コンポーネント間のアイデンティティ管理、認証、認可

Runway の目標は、runway コンポーネント自体の内部に長期間有効なシークレットやトークンに依存しないことです。これを達成するために、runway のすべての部分は以下の方法で互いに認証します。

#### サービスプロジェクトから runway デプロイメントプロジェクトへ

これは GitLab のダウンストリームパイプライントリガーによって処理されます。このため、すべての権限は GitLab 自体（および GitLab への API 呼び出しは短命の `CI_JOB_TOKEN` を使用）で処理されます。[CI_JOB_TOKEN 許可リスト](https://docs.gitlab.com/ee/ci/jobs/ci_job_token.html#add-a-group-or-project-to-the-job-token-allowlist)を活用して、デプロイメントプロジェクトとサービスプロジェクトが API 呼び出し（例: サービスプロジェクトの環境の更新）で対話できるようにします。

#### デプロイメントプロジェクトから GCP クラウドへ

デプロイメントプロジェクトの GitLab CI パイプラインは GCP と通信して Runway Service のクラウドリソースをプロビジョニングおよび変更することを担当します。これは Runway provisioner でのセットアップを活用して [OpenID Connect](https://docs.gitlab.com/ee/ci/cloud_services/google_cloud/index.html) 経由で行われ、デプロイメントプロジェクトが制限された権限を持つ GCP サービスアカウントとして認証できるようにします。

#### Reconciler から GCP クラウドへ

Reconciler（`terraform` をラップする `runwayctl`）はデプロイメントプロジェクトの GitLab CI 内で実行されます。これは各 Runway サービスに対して設定された特定のサービスアカウントを使用し、その作業に必要な GCP API を操作する権限のみを持ちます。この認証は上述の GitLab CI によって処理されます。

### 可観測性

可観測性については[別のブループリント](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/76)で対応します。

## 代替ソリューション

<!--
It might be a good idea to include a list of alternative solutions or paths considered, although it is not required.
-->

### 非管理型 GCP プロジェクト

マネージドプラットフォームを構築する代わりに、チームに GCP プロジェクトを与えて自由に使わせることができます。実際、いくつかのサービスではそうしてきました。優れた分離と柔軟性をもたらします。しかし、このアプローチにはいくつかの問題があります:

- **Infrastructure-as-Code の欠如:** 既存の構造がないため、チームは Terraform または同様の IaC ツールを使用せずに UI でクラウドリソースを作成する傾向があるかもしれません。これにより変更の監査と複数の環境でのインフラの再プロビジョニングが非常に困難になります。
- **拡散:** 適切でデフォルト設定がなければ、すべてのサービスがサービスのデプロイに独自のアプローチを開発する必要があります。これにより、他の人がこれらのサービスに貢献することも非常に困難になります。
- **スケーラブルでない設計:** 任意の VM を作成できることで、水平スケーラビリティを考えずに単一のマシンにサービスを同居させることが誘惑になる場合があります。

### 非管理型 Kubernetes クラスターまたはネームスペース

カスタムプラットフォームを構築する代わりに、Kubernetes をプラットフォームとして決定し、チームに独自のクラスターまたは共有クラスターの独自のネームスペースを持たせることができます。

このアプローチの課題:

- **GKE のベースラインコスト:** 管理費は月額70ドルです。多くの環境でトラフィックが少ないサービスを多数持つことを目指す場合、サービスごとの別のクラスターはコスト効率が良くありません。これは共有クラスターを使用したいことを示唆しています。
- **開発者の親しみやすさ:** Kubernetes は人気が高まっていますが、最も開発者に優しいインターフェースではありません。多くの概念と抽象化を把握する必要があります。「このコンテナをデプロイしてポートをください」のようなより狭いインターフェースは柔軟性が少ないですが、参入障壁がはるかに低いです。

Runway がこの方向により多く進化することは十分あり得ます。

### サービスごとの GCP プロジェクト

GCP プロジェクトはリソース分離とコスト帰属のための非常に強固な基盤を提供します。理想的にはそのようなモデルを活用したいと思います。しかし、共有リソースがないことはサービスごとに相当なベースラインコストをもたらします。

GKE を利用したい場合、クラスターごとの管理費が月額70ドルになることで、サービスの最小コストが月額140ドルになる可能性があります。小規模なサービスにとって、これはコスト効率が良くありません。

GKE なしで Kubernetes を実行することが考慮すべき代替案です。しかし、その場合は Kubernetes のデプロイ自体を管理し、GKE との差分を把握し続ける必要があります。

Cloud Run を小規模サービスに、GKE を大規模サービスに使用することが考慮すべき別の代替案です。しかし、これは Cloud Run との互換性を維持する必要があり、機能の観点から最小公倍数に限定される可能性があります。

ハイブリッドも可能です（例: Runway サービスに独自のプロジェクトを提供）が、共有リソースがある限り、リソースごとの権限制御を実装する必要があります。
