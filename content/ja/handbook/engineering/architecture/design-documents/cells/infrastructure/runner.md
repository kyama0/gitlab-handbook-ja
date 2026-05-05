---
title: 'Cells: Runner'
owning-stage: "~devops::verify"
group: Runner
creation-date: "2024-07-10"
authors: [ "@rehab", "" ]
coach:
approvers: ["@josephburnett", "@tmaczukin", "@amknight", "@skarbek"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/infrastructure/runner/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T10:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/rehab" class="text-blue-600 hover:underline">@rehab</a>, <a href="https://gitlab.com/" class="text-blue-600 hover:underline">@</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/josephburnett" class="text-blue-600 hover:underline">@josephburnett</a>, <a href="https://gitlab.com/tmaczukin" class="text-blue-600 hover:underline">@tmaczukin</a>, <a href="https://gitlab.com/amknight" class="text-blue-600 hover:underline">@amknight</a>, <a href="https://gitlab.com/skarbek" class="text-blue-600 hover:underline">@skarbek</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::verify</span></td>
<td class="px-3 py-2 border border-gray-300">2024-07-10</td>
</tr>
</tbody>
</table>
</div>


このブループリントは、セル型アーキテクチャにおける Runner サービスのアーキテクチャとロードマップについて説明します。

## はじめに

[GitLab Runner](https://docs.gitlab.com/runner/) は、他の GitLab.com サービスと比較して比較的プロビジョニングと更新が容易なサービスです。

現在、[SaaS Runners](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/ci/runners/index.md) と [Dedicated Runners](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/architecture/blueprints/dedicated-runners-beta.md?ref_type=heads) の 2 つの典型的なセットアップがあります。後者は [GRIT](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit) の実装によって強化された優れたセットアップです。

[Cell のフィロソフィー](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/architecture/blueprints/cells/infrastructure/index.md#philosophy)に従って、Runner サービスは Cell ローカルサービスを実装するための最適な候補であり、その[コードベース](https://gitlab.com/gitlab-org/gitlab-runner/)への変更はほとんど必要ありません（_TBC_）。

[Cells 1.0](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/architecture/blueprints/cells/iterations/cells-1.0.md) では、新しい顧客が最初の Cell に登録することが期待されており、このイテレーションでは、Runner のプロビジョニングに Dedicated [ベータリリース](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/architecture/blueprints/dedicated-runners-beta.md?ref_type=heads#dedicated-runners-beta)の一環として行われた既存の作業を活用します。

### アーキテクチャ

![Cell Runner の図](/images/engineering/architecture/design-documents/cells/diagrams/term-cell-runner.drawio.png)

- Cell と Runner の間には 1:n の関係があります。つまり、1 つの Cell は多くの Runner を持てますが、Runner は 1 つの Cell にのみ登録されます。
- Legacy Cell（GitLab.com）は [config-mgmt](https://gitlab.com/gitlab-com/gl-infra/config-mgmt) と [chef-repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo) で管理された Runner を使用していますが、Cells は GRIT を組み込んだ [Transistor](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/transistor/) に似たセットアップを使用しています。

注記: 現在 Runner のリファレンスアーキテクチャはありませんが、参考にできるリンクをいくつか示します:

- [GitLab-runner/docs/fleet_scaling](https://gitlab.com/gitlab-org/gitlab-runner/-/blob/main/docs/fleet_scaling/index.md)
- [Create a test framework for testing runner fleet autoscaling configurations](https://gitlab.com/gitlab-org/gitlab/-/issues/458311)
- [Document jump start configurations for an autoscaled runner fleet on Google Compute](https://gitlab.com/gitlab-org/gitlab/-/issues/458313)
- [Runner Fleet Scaling and Configuration Best Practices Center](https://gitlab.com/groups/gitlab-org/-/epics/8952)

### プロビジョニング

Cells は Dedicated に似たプロビジョニング設計とツールを採用することが期待されています。この場合、Runner は [Transistor](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/transistor/) に似たツールを利用します。Transistor は簡潔に言えば、Terraform モジュールとバッシュスクリプトのコレクションです。

Transistor の[開発ガイドライン](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/transistor/-/blob/main/DEVELOPMENT.md)に詳細な情報がありますが、Runner のプロビジョニングステップの簡略版は以下のようになります:

1. Runner モデルを生成する。
1. 次のいずれかのステップで Runner をプロビジョニングする:
    - ./bin/prepare、./bin/onboard/、./bin/provision を実行する。
    - または、[Switchboard の MR を作成](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/sandbox/switchboard_runners/#triggering-a-deployment-via-merge-request)し、上記のスクリプトを順番に実行する。

Runner のデプロイメントパイプラインは、Instrumentor が GitLab インスタンスをデプロイした後の下流パイプラインとしてトリガーできます。これには、下流パイプラインがトリガーされる前に Instrumentor（または Switchboard 内のより上位のジョブなど）が Runner モデルを生成することが必要です。

#### Cells と Dedicated の違い

Dedicated チームは Runner が登録されている GitLab インスタンスへのアクセスが制限されていますが、Cells ではそうではありません。

SRE チームは Cell を完全に所有・管理するため、登録トークンの管理に外部との調整は必要なく、プロビジョニングスクリプトを使用して自動化できるステップとなります。

### デプロイメント

理想的には、Cells: Runner は Cell 内の他のサービスと同様に管理されるべきです。

現時点では、GitLab.com SaaS Runners は [GitLab.com グランドデプロイヤー](https://ops.gitlab.net/gitlab-com/gl-infra/deployer)と混同しないよう注意が必要な、Runner グループが実行・維持する個別のアドホック[デプロイヤーツール](https://gitlab.com/gitlab-com/gl-infra/ci-runners/deployer/)を持っています。

Cells では、Runner サービスは Dedicated に似たツールを利用します。これは他のサービスと同様であり、可視性、可観測性、保守性を確保します。Dedicated の Runner は GRIT に強く依存しており、最終的に Dedicated と Cells の両方が利用する[ブルーグリーンメカニズム](https://gitlab.com/groups/gitlab-org/ci-cd/runner-tools/-/epics/1)を導入することが約束されています。

### 可観測性

Dedicated における Runner の可観測性は現在進行中の作業です。Runner は他のサービスと同様に扱われ、現在 GitLab.com で使用されている記録ルールとダッシュボードを使用するべきです。

## ロードマップ

[ツールの集中化](index.md#philosophy) を維持するために、2 つの未解決の質問があります:

1. 最終的に [Transistor](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/transistor/) を [Instrumentor](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor/) に統合し直すことについてどう思うか？

Transistor と Instrumentor を組み合わせると、「Runner への変更が全 Instrumentor デプロイメントプロセスを経由する必要があり、非常にコストが高く遅くなる可能性がある」（@amknight、2024）。さらに、両プロジェクトをモジュラー式に保つことで、QA テストプロセスが分離されているためより効率的で安全なリリースプロセスが可能になります（@skarbek、2024）。

1. Runner のデプロイメントを Cell 内の他の GitLab サービスのデプロイメントに組み込むことについてどう思うか？

[プロビジョニング](runner.md#provision)で述べているように、これを実現するために下流パイプラインを使用できる可能性があります。

### イテレーション [WIP]

#### Cells 1.0

`small` タイプの Linux Runner が利用可能になります。

#### Cells 1.5

#### Cells 2.0

## FAQ [WIP]

**Q1**

A1

**Q2**

A2

## 参考

- @amknight (2024): [!146768 (comment 1823581090)](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/146768#note_1823581090)
- @skarbek (2024):[!146768 (comment 1819418987)](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/146768#note_1819418987)
