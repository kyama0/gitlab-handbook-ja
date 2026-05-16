---
title: "カスタムロールを実現するために必要な権限変更"
status: proposed
creation-date: "2023-03-10"
authors: [ "@jessieay", "@jarka" ]
coach: "@grzesiek"
approvers: [ "@hsutor", "@adil.farrukh" ]
owning-stage: "~devops::manage"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/permissions/
upstream_sha: 4c7d94ca4f485376c886b7c2b9575091c8b7d3cf
translated_at: "2026-04-27T06:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/jessieay" class="text-blue-600 hover:underline">@jessieay</a>, <a href="https://gitlab.com/jarka" class="text-blue-600 hover:underline">@jarka</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/hsutor" class="text-blue-600 hover:underline">@hsutor</a>, <a href="https://gitlab.com/adil.farrukh" class="text-blue-600 hover:underline">@adil.farrukh</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::manage</span></td>
<td class="px-3 py-2 border border-gray-300">2023-03-10</td>
</tr>
</tbody>
</table>
</div>


## 概要

現在、GitLab の権限システムは、私たちの静的な[ロールベースアクセス制御システム](https://docs.gitlab.com/ee/user/permissions.html#roles)のバックエンド実装の詳細です。

%15.9 では、カスタムロール機能の顧客向け MVC を[発表しました](https://about.gitlab.com/blog/2023/03/08/expanding-guest-capabilities-in-gitlab-ultimate/)。この MVC では、デフォルトの GitLab Guest ロールをベースに、カスタムロールに単一の権限（`read_code`）を追加する機能が導入されました。この MVC は、GitLab 認可フレームワークから既存の権限を取り出し、カスタムロールがそれを `true` に設定している場合に有効化することで[実装されました](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/106256)。

MVC 以降、Auth グループはより多くの権限をカスタマイズ可能にする作業を開始し、最終的には*すべての*権限をカスタマイズ可能にすることを目標としています。

この作業の計画を始めるにあたり、2 つの大きな課題があります:

1. GitLab の権限システムは安定した後方互換性のある API ではありません。しかし[カスタムロール機能は現在の権限システムの上に構築されています](https://gitlab.com/gitlab-org/gitlab/-/issues/352891#note_993031741)。これは、カスタムロールが権限を安定した後方互換性のある API として依存することを意味します。したがって、現在のアーキテクチャを継続するのであれば、権限システムへのアプローチを変える必要があります。
1. 権限の数が膨大（700 以上）であること、コードベース全体にわたって権限チェックが重複していること、そしてセキュリティにとって権限が重要であること（エラーのコストが非常に高い）から、権限システムのリファクタリングは困難です。

このブループリントでは、これらの課題それぞれについてさらに詳しく説明し、対処するための道筋を提案します。

## カスタムロールとは何か？

私たちの権限システムは 6 つのデフォルトロール（Guest、Reporter、Developer、Maintainer、Owner）をサポートしており、ユーザーはプロジェクトまたはグループごとに割り当てられますが、変更することはできません。カスタムロールは、現在のシステムが静的であるという問題を解決するものです。

カスタムロールを使用すると、顧客は独自のロールを定義し、希望する権限を付与できます。作成するすべてのロールに対して、権限のセットを割り当てることができます。たとえば、新しく作成された「Engineer」ロールは `read code` と `admin merge requests` を有効にしながら、`admin issues` などの権限は無効にすることができます。

## 動機

このプランが重要なのは、[カスタムロールプロジェクト](https://gitlab.com/groups/gitlab-org/-/epics/4035)の現在のアーキテクチャが、私たちの現在の権限システムである [Declarative Policy](https://gitlab.com/gitlab-org/ruby/gems/declarative-policy) の上に構築されているためです。Declarative Policy は新しい権限を低コストで追加できるため、`gitlab-org/gitlab` コードベースに[700 以上の権限](https://gitlab.com/gitlab-org/gitlab/-/issues/393454#more-context)という現在の状態をもたらしました。[権限ドキュメント](https://docs.gitlab.com/ee/user/permissions.html)でさえ、200 行以上の表があり、各行が固有の「権限」を表しています。これまで、コード内の権限の増殖は管理可能でした。なぜなら、これらのチェックはパブリック API の一部ではないからです。しかし、カスタムロールによって、それが変わりつつあります。

現在の認可チェックは[アプリケーションコード全体に重複して散在していることが多い](https://gitlab.com/gitlab-org/gitlab/-/issues/352891#note_958192650)です。単一の Web リクエストに対して、ユーザーがページ要素を見られるかどうかを決定するために UI でいくつかの権限チェックが行われ、ユーザーがルートにアクセスできるかどうかを決定するために Rails コントローラーでさらにいくつかの権限チェックが行われ、ページロードの一部として実行される他の Ruby サービスクラスにもさらにいくつかの権限チェックが散在しているかもしれません。このアプローチは、「多層防御」の手段として[GitLab 開発者ドキュメントで推奨されています](https://docs.gitlab.com/ee/development/permissions/authorizations.html#where-should-permissions-be-checked)。

しかし、カスタムロールのコンテキストでは、このアプローチは機能しません。グループ管理者がカスタムロールを通じてユーザーに単一のアクションを実行できるようにしたい場合、そのグループ管理者は単一の、適切に名前付けられた権限をトグルして、カスタムロールを持つユーザーがリソースを表示または更新できるようにできるはずです。これは、単一の Web リクエストに対して、適切に名前付けられた権限が 1 つだけチェックされることを確保しなければならないことを意味します。そして、その権限のために付与されるアクセスは、管理者がユーザーに意図以上のアクセスを与えないように、比較的安定していなければなりません。そうでなければ、カスタムロールの作成と管理が過度に複雑になり、セキュリティ上の悪夢となります。

Auth グループは機能として権限を所有していますが、各チームはドメイン領域に関連する権限のセットを所有しています。`gitlab-org/gitlab` コードベースの一角として。その結果、`gitlab-org/gitlab` コードベースに貢献するすべてのエンジニアリングチームが権限に触れます。これは、権限の将来に関する明確なガイドラインを提供し、これらのガイドラインの執行を自動化することがさらに重要であることを意味します。

### ゴール

- カスタムロールを通じてすべての権限をカスタマイズできるようにする。
- GitLab の権限システムをパブリック API として価値あるものにする。
- 権限の命名と一貫性を改善する。
- 権限の総数を 700 以上から 100 未満に削減する。
- 権限に関連するリファクタリングのリスクを低減する。
- ユニットテストとドキュメント以外の方法で動作を評価する手段を持つことで、権限のリファクタリングを容易にする。
- 個々の権限の所有権を追跡し、DRI が所有する権限に関連する変更について相談できるようにする。
- 権限の動作のための SSoT を作成する。
- 権限ドキュメントの自動生成を行う。

### 非ゴール

- 既存の権限システムをリファクタリングする間、カスタムロールプロジェクトを無期限に停止する（これは Ultimate 機能として高い需要がある）。
- 権限システムの完全な書き直しまたは再構築を行う（顧客価値を提供せずに多大な先行投資が必要）。
- 機能完全に到達することなく、カスタムロールを繰り返し作業する（「どこにも到達しないイテレーション」）。

## 提案

1. すべての新しい権限が命名規則に従っていることを保証するリンターを導入する。
1. 既存の権限を統合することで、権限の総数を 700 以上から 100 未満に削減する。
1. 各権限の所有権タグを導入し、その権限を更新するすべての MR の所有グループによるレビューを必須にする。
1. コードから権限ドキュメントを生成するための Rake タスクを作成し、権限の Single Source of Truth を持てるようにする。

## 代替ソリューション

### 何もしない

メリット:

- 長い議論やアーキテクチャ計画が不要
- 前進する中で有機的に権限システムを改善する方法を発見できるかもしれない

デメリット:

- 権限システム全体についての考え方のブループリントなしにカスタムロール機能を構築するのは遅い
- 戦略的に重要なビジョンなしにイテレーションを重ねると、権限システムが保守不可能なコードに陥る可能性がある

### 現在の権限システムをそのままにして、並列システムを構築する

代わりに、カスタムロール用に既存のシステムと並列の Declarative Policy ベースのシステムを構築する。

メリット:

- 既存システムの大規模なリファクタリングよりも新しいシステムを設計・構築する方が速い
- Auth チームがこの新しいシステムを完全に所有できる

デメリット:

- 2 つのシステムの維持が必要
- 追加された新しい「通常の」権限ごとに、カスタムロールシステムへの並列追加が必要。これにより、カスタムロールとデフォルトロール間で機能パリティを持つことが難しくなる。
- カスタムロールで既存の RBAC システムを置き換える（カスタムロール機能の最終的なゴール）のは、レガシー権限システムを廃止する必要があるため、このアプローチではより困難になる。

### 既存の権限をカスタム権限にバンドルする

カスタムロール API に「カスタム権限」を使用する。

メリット:

- 既存システムの大規模なリファクタリングよりも新しいシステムを設計・構築する方が速い
- Auth チームがこれらの新しいバンドル権限を所有できる

デメリット:

- 権限のバンドルは細かさが低い；カスタム権限の目標は細粒度のアクセスを可能にすること。
- 追加された新しい「通常の」権限ごとに、カスタムロールのバンドル権限への並列追加が必要。これにより、カスタムロールとデフォルトロール間で機能パリティを持つことが難しくなる。

## 用語集

- **RBAC**: ロールベースアクセス制御；「個々のユーザーのロールに基づいてネットワークアクセスを制限する方法」。RBAC は GitLab が使用するアクセス制御の方法。
- **デフォルトロール**: GitLab ユーザーがグループ分けされる 5 つのカテゴリ：Guest、Reporter、Developer、Maintainer、Owner（[ドキュメント](https://docs.gitlab.com/ee/user/permissions.html#roles)）。デフォルトロールは権限のグループと考えることができる。
- **Declarative Policy**: GitLab が認可ロジックを定義するために使用する[コードライブラリ](https://gitlab.com/gitlab-org/ruby/gems/declarative-policy/)。
- **権限**: ロールを持つユーザーが持つ特定の権能。たとえば、Developer はマージリクエストを作成できるが Guest はできない。[権限ドキュメント](https://docs.gitlab.com/ee/user/permissions.html#project-members-permissions)にリストされている各行は「権限」を表すが、Declarative Policy の[ability](https://gitlab.com/gitlab-org/ruby/gems/declarative-policy/-/blob/main/doc/defining-policies.md#invocation) と 1:1 対応しているとは限らない。ability は GitLab コードベースで権限が表現される方法である。
- **アクセスレベル**: デフォルトロールを表す整数値。アクセスの決定とグループ階層における継承されたユーザーアクセスの計算に使用される（[ドキュメント](https://docs.gitlab.com/ee/api/access_requests.html#valid-access-levels)）。

## リソース

- [カスタムロール MVC 発表](https://github.blog/changelog/2021-10-27-enterprise-organizations-can-now-create-custom-repository-roles/)
- [カスタムロールのランチアンドラーンメモ](https://docs.google.com/document/d/1x2ExhGJl2-nEibTaQE_7e5w2sDCRRHiakrBYDspPRqw/edit#)
- [権限のドキュメント自動生成に関する調査](https://gitlab.com/gitlab-org/gitlab/-/issues/352891#note_989392294)。
