---
title: ダッシュボードレイアウトフレームワーク
status: "ongoing"
creation-date: "2025-04-08"
authors: [ "@rob.hunt", "@jiaan" ]
coaches: [ "@ahegyi" ]
dris: [ "@lfarina8", "@nicholasklick" ]
owning-stage: "~devops::analytics"
participating-stages: [ "~devops::analytics", "~devops::security risk management" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/dashboard_layout_framework/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->

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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/rob.hunt" class="text-blue-600 hover:underline">@rob.hunt</a>, <a href="https://gitlab.com/jiaan" class="text-blue-600 hover:underline">@jiaan</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ahegyi" class="text-blue-600 hover:underline">@ahegyi</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/lfarina8" class="text-blue-600 hover:underline">@lfarina8</a>, <a href="https://gitlab.com/nicholasklick" class="text-blue-600 hover:underline">@nicholasklick</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::analytics</span></td>
<td class="px-3 py-2 border border-gray-300">2025-04-08</td>
</tr>
</tbody>
</table>
</div>


<!--
Don't add a h1 headline. It'll be added automatically from the title front matter attribute.

For long pages, consider creating a table of contents.
-->

## 目次

- [概要](#summary)
- [動機](#motivation)
  - [目標](#goals)
  - [対象外](#non-goals)
- [提案](#proposal)
- [設計と実装の詳細](#design-and-implementation-details)
  - [グリッド](#the-grid)
  - [パネル](#panels)
  - [ビジュアライゼーション](#visualizations)
  - [フィルター](#filters)
  - [エラー処理](#error-handling)
- [はじめに](#getting-started)
- [既存ダッシュボードの移行](#migrating-existing-dashboards)

## 概要

ダッシュボードは顧客がデータと対話する方法の中心にあります。顧客がデータを理解し、ビジネスニーズを満たすためにデータを活用できる手段です。

しかし GitLab では、ダッシュボードは常に本質的に機能に焦点を当てており、ダッシュボードを_どのように_構築するかを指示する明確な UX ガイダンスや共通の UI フレームワークがありませんでした。その結果、顧客に対して GitLab 全体で一貫性のないユーザーエクスペリエンスが生じています。また開発チームにとっては、既存のダッシュボードを簡単に交換または再利用する方法がなく、開発時間とメンテナンスコストの増加につながっています。

~"group::platform insights" は GitLab での統合ダッシュボードビジョンの設計、開発、実装をリードしています。このビジョンは[ダッシュボードワーキンググループ](../../../../company/working-groups/dashboards.md)から始まり、2023 年 3 月にダッシュボードとは何かの基礎を築いた新しい[Pajamas ダッシュボードパターン](https://design.gitlab.com/patterns/dashboards/)にまとまりました。

それ以来、~"group::platform insights" はアナリティクス機能スペース向けの[初期ダッシュボードフレームワーク](https://docs.gitlab.com/development/fe_guide/analytics_dashboards/)を開発しました。これは[プロダクトアナリティクス](https://docs.gitlab.com/development/internal_analytics/product_analytics/)の初期作業を基に構築されました。フレームワークは ~"group::optimize" によって[バリューストリームダッシュボード](https://docs.gitlab.com/user/analytics/value_streams_dashboard/)と[AI インパクトアナリティクス](https://docs.gitlab.com/user/analytics/ai_impact_analytics/)に採用され、現在は[セキュリティダッシュボード](https://docs.gitlab.com/user/application_security/security_dashboard/)向けに開発中です。

[この作業](https://gitlab.com/groups/gitlab-org/-/epics/13801)の次のステップは、ダッシュボードフレームワークの基盤を固め、UI/UX に合わせ、ダッシュボードフレームワークがサポートする機能を確認することです。以下について明確なガイダンスが必要です：

- ダッシュボードとは何か何でないか、ダッシュボードが提供すべき機能。
- 既存の機能と新しい機能内でダッシュボードフレームワークを使用する方法。
- ダッシュボードフレームワーク使用時に従うべきガイドライン。
- ダッシュボードフレームワークと広範なダッシュボード UI/UX へのコントリビューション方法。

## 動機

[データの統合とインサイトの取り組み](https://gitlab.com/gitlab-org/architecture/gitlab-data-analytics/design-doc)の一環として、GitLab でのデータ提供を統合・標準化することを目指しています。この作業の核心部分は、顧客がデータと対話してビジネスニーズを満たすためのインサイトを得る方法に向けて UI/UX を調整することです。標準化されたダッシュボードフレームワークの実装と採用は、このニーズを満たすうえで大きく貢献するとともに、より明確なビジュアルと AI 統合で既存の提供物を拡充する基盤を提供します。

### 目標

- ダッシュボードレイアウトとは何か、その機能、フレームワークの使い方に関する明確なガイドライン。
- 既存ダッシュボードの明確な移行パスの概説。
- 特にデータが分析に使用されている GitLab 全体でのダッシュボードフレームワークの採用。
- 特定の機能に縛られない不可知論的なダッシュボードフレームワーク。エンジニアがダッシュボードを迅速かつ効率的にセットアップして使用するために必要なツールを提供します。
- [ダッシュボードナビゲーションの再構成](https://gitlab.com/groups/gitlab-org/-/epics/16940)に向けてダッシュボードフレームワークの使用をリンクします。

### 対象外

- ~"group::platform insights" はすべての可能な機能、データソース、ビジュアライゼーションタイプ、またはダッシュボードを実装するわけではありません。これらは ~"group::platform insights" のサポートを受けた機能チームによって推進されます。
- ダッシュボードレイアウトフレームワークは定義されたパネルのビジュアライゼーション外での[データ探索](https://gitlab.com/gitlab-org/gitlab/-/issues/536187)を含みません。
- ダッシュボードレイアウトフレームワークはダッシュボード自体の構成要素のみで、ダッシュボードの[ユーザー主導のカスタマイズ](https://gitlab.com/gitlab-org/gitlab/-/issues/536610)を含みません。
- ダッシュボードレイアウトフレームワークは[ナビゲーション内のダッシュボードの配置場所](https://gitlab.com/gitlab-org/gitlab/-/issues/536612)を定義しません。

## 提案

上記の目標と動機を踏まえ、GitLab 内で Pajamas ガイドラインに準拠したダッシュボードを効率的に開発するために必要なコア機能、UI、UX を提供するダッシュボードレイアウトフレームワークを概説したいと思います。以下の構造はこれに含まれるもの、およびその機能方法を説明します。

## 設計と実装の詳細

![dashboard_layout_framework_outline](/images/engineering/architecture/design-documents/dashboard_layout_framework/dashboard_layout_framework_outline.png)

### ダッシュボードレイアウト

[ダッシュボードレイアウト](https://design.gitlab.com/storybook/?path=/docs/dashboards-dashboards-layout--docs)コンポーネントは、GitLab 全体での UI 一貫性を確保するために[設定より規約](../../../../product/product-principles.md#convention-over-configuration)アプローチに従い、ダッシュボードエクスペリエンスのための構造化された、意見のある基盤を提供します。レイアウトは位置、スペーシング、視覚的階層について厳格な規約を適用しますが、そのコンテンツは完全に設定可能であり、機能チームとユーザーは構造化されたフレームワーク内で独自の[グリッド](#the-grid)レイアウトと[パネル](#panels)コンテンツを定義できます。この設計哲学により、プラットフォーム全体で一貫したユーザーエクスペリエンスを維持しながら、ダッシュボードの迅速な開発が可能になります。

### グリッド

[グリッド](https://design.gitlab.com/patterns/dashboards/)のデザイン定義に沿って、パネルをスナップする行と列のクロスブラウザシステムが必要です。パネルは決定論的でユーザーフレンドリーな方法でリサイズおよび再配置できる必要があります。

グリッド自体は 12 列をサポートし、無制限の行数を持ちます。グリッドパネルは最大 12 列幅にでき、1 行あたり 1〜12 パネルが可能です。パネルの高さは 1 行から無制限まで設定でき、必要に応じて任意の行数にまたがることができます。

グリッド内の各パネルの最小高さは、パディング、タイトル、および基本的なコンテンツを表示できる高さです。

[ミディアムブレークポイント](https://design.gitlab.com/product-foundations/layout#breakpoints)では、グリッドは単一列に折りたたまれる必要があります。これにより、すべてのパネルが完全に縦方向のレイアウトに移動します。単一列に縮小することで、各パネルのコンテンツが小さなビューポートのページで窮屈に見えることなくレンダリングするためのスペースが確保されます。

グリッドにパネルがない場合は空の状態をレンダリングする必要があります。

このグリッドとして [Gridstack](https://gridstackjs.com/) を使用することを推奨します。これは MIT ライセンスのオープンソースライブラリで、グリッド構造と、決定論的でクロスブラウザフレンドリーな方法でのグリッドアイテムの変更とリサイズをサポートします。

将来代替手段に移行する必要がある場合に備えて、フレームワーク設定は Gridstack に直接紐付けない必要があります。必要に応じた移行を容易にするために、グリッド設定オプションを抽象化します。

### パネル

[パネル](https://design.gitlab.com/storybook/?path=/docs/dashboards-dashboards-panel--docs)は、ユーザーがデータと対話するためのコンテキストインターフェイスを提供するラッピングモジュラーコンテナです。
各パネルには以下が含まれます：

- タイトル
- 補足的な三次情報のためのツールチップ（オプション）
- コンテキストアクションのケバブメニュー（オプション）
- コンテキストエラー/警告/情報のインジケーター（オプション）
- パネルがビジュアライゼーションデータを取得中の読み込み状態（オプション）
- コンテンツエリア

各パネルは[グリッド](#the-grid)に従ってリサイズでき、コンテンツがパネルのサイズを超えた場合はスクロール可能です。

### ビジュアライゼーション

ビジュアライゼーションとは、データのグラフィカルな表現をレンダリングするコンポーネントを指します。ダッシュボードレイアウトフレームワークはビジュアライゼーションのコンテンツ、およびビジュアライゼーションがデータを取得・処理する方法については不問です。

一般的な例としては以下が挙げられます：

- [GitLab UI の実装](https://design.gitlab.com/storybook/?path=/docs/charts-chart--docs)を使用した ECharts ベースのビジュアライゼーション
  - ビジュアライゼーションには ECharts の実装によってはaxis、凡例、その他クリック可能な要素が含まれる場合があります。
- [GitLab UI](https://design.gitlab.com/storybook/?path=/docs/base-table-table--docs)（またはライトバージョン）を使用したテーブル
  - ビジュアライゼーションにはキーセットページネーション、ソート、内部検索が含まれる場合があります。
- テキストまたは Markdown ベースのコンテンツ。

### フィルター

フィルタリングはコンセプトとしてまだ[UX の検討が続いて](https://gitlab.com/gitlab-org/gitlab/-/issues/521751)いますが、基本的な実装はサポートされており、フレームワークのコンシューマーは[ダッシュボードレイアウト](#dashboard-layout)と[パネル](#panels)コンポーネント内のフィルタースロットを利用できます。フレームワークはフィルターを配置するスロットを提供しますが、フィルターとその状態変化を該当するパネルとビジュアライゼーションに適用するのはエンジニアの責任です。

フィルターには 2 つのタイプとレベルがあります：

- **ダッシュボード：** ダッシュボード内のすべてのパネルとビジュアライゼーションに適用されるグローバルフィルター。フィルターがビジュアライゼーションで機能しない場合、ユーザーは UI を通じて通知される必要があります。この通知がどのように見えるかはまだ検討中です。
- **パネル：** ダッシュボードのコンテキスト内で結果を絞り込むためのパネルごとのフィルター。これらのフィルターはダッシュボードレベルのフィルターによって設定された制約を尊重し、その中で動作する必要があります。たとえば、ダッシュボードレベルのフィルターが過去 7 日間にデータを制限している場合、パネルレベルのフィルターはユーザーがこの範囲外の日付範囲を選択できないようにする必要があります。パネルが特定のフィルター範囲に制限されている場合（たとえば過去 24 時間のデータのビジュアライゼーションのみを表示できるパネル）は、パネルはユーザーに視覚的に示し、制限を説明する必要があります。

ダッシュボードユーザーはフィルターをブックマークすると便利なことがあります。これをサポートするために、エンジニアはフィルターを URL と同期し、[`UrlSync` コンポーネント](https://gitlab.com/gitlab-org/gitlab/blob/master/app/assets/javascripts/vue_shared/components/url_sync.vue)を使用できます。

### エラー処理

エラーが発生した場合、UI は有用なエラーメッセージを表示し、利用可能な場合は修正手順を含める必要があります。可能な場合、エラーは再試行ボタン、またはユーザーへの次のステップを提供する必要があります。

ページレベルのエラーには[Pajama のアラートコンポーネント](https://design.gitlab.com/components/alert)を使用する必要があります。

エラーはエラーが発生した場所に表示される必要があります：

- ダッシュボード全体 - エラーメッセージでダッシュボードグリッドを置き換えます。
- グローバルフィルター - グローバルフィルターの上に表示します。ただし、フィルターの選択が特定のパネルに固有のエラーを引き起こす場合は、エラーはパネルのエラー状態内に表示されます。

パネルごとのフィルターとパネル固有のエラーには、パネルのエラー状態を使用する必要があります。パネルのエラー状態は以下を行います：

- 色とアイコンでパネルにエラーがあることを強調表示します。
- エラーの詳細と、該当する場合は再試行ボタンとともにユーザーができることを説明するツールチップを表示します。
- パネルのコンテンツをコンテキストエラーメッセージに置き換えます。

## はじめに

[開発ドキュメント](https://docs.gitlab.com/development/fe_guide/dashboard_layout_framework)を参照してください。

## 既存ダッシュボードの移行

[開発ドキュメント](https://docs.gitlab.com/development/fe_guide/dashboard_layout_framework#migration-guide)を参照してください。
