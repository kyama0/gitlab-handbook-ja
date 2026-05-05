---
title: ダッシュボードカスタマイズフレームワーク
status: "ongoing"
creation-date: "2025-06-16"
authors: [ "@jiaan" ]
coaches: [ "@ahegyi" ]
dris: [ "@lfarina8", "@nicholasklick" ]
owning-stage: "~devops::analytics"
participating-stages: [ "~devops::analytics", "~devops::security risk management" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/dashboard_customization_framework/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/jiaan" class="text-blue-600 hover:underline">@jiaan</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ahegyi" class="text-blue-600 hover:underline">@ahegyi</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/lfarina8" class="text-blue-600 hover:underline">@lfarina8</a>, <a href="https://gitlab.com/nicholasklick" class="text-blue-600 hover:underline">@nicholasklick</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::analytics</span></td>
<td class="px-3 py-2 border border-gray-300">2025-06-16</td>
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
  - [ダッシュボードレイアウト](#dashboard-layout)
  - [パネル](#panels)
  - [フィルター](#filters)
  - [カスタマイズの永続化](#customization-persistence)
- [はじめに](#getting-started)
- [静的ダッシュボードからのアップグレード](#upgrading-from-static-dashboards)

## 概要

このドキュメントは[ダッシュボードレイアウトフレームワーク](../dashboard_layout_framework/_index.md)によって確立されたダッシュボードの基盤を基に構築されており、GitLab 全体でユーザー主導のダッシュボード作成とパーソナライゼーションを可能にするダッシュボードカスタマイズフレームワークのアーキテクチャを概説しています。

ダッシュボードカスタマイズフレームワークは、ユーザー主導のダッシュボードレイアウトのカスタマイズを可能にする Vue コンポーネントと UI パターンを提供します。ユーザーはこれを使用してパネルの追加/削除、要素の配置とサイズ変更、テキストの編集、パーソナライズされたダッシュボード設定の保存ができます。フレームワークはダッシュボード設定がどこに保存されるかについては不問であり、カスタマイズのユーザーエクスペリエンスのみに焦点を当てています。

カスタマイズ可能なダッシュボードコンポーネントは、既存のダッシュボードレイアウトフレームワークのユースケースへのドロップイン代替品です。内部的にはダッシュボードレイアウトコンポーネントをラップし、GitLab の Pajamas デザインシステムに沿ったユーザー主導のカスタマイズを可能にするように機能を拡張します。

## 動機

現在、ダッシュボードは貴重なインサイトを提供していますが、その性質は静的です。ユーザーは自分のワークフロー、責任、またはユーザーロールに最も関連するメトリクスに焦点を当てるためにダッシュボードをパーソナライズすることができません。これにより、顧客にとって分析ツールとしてのダッシュボードの有効性が大幅に低下しています。

ユーザーカスタマイズがなければ、プロダクトチームは常に変化するユーザーペルソナ、ユースケース、組織の要件を満たすために複数のダッシュボードを予測、設計、継続的にメンテナンスする必要があります。これは大きなメンテナンス負担とリソース配分の課題を生み出し、チームはコア機能の開発やデータ品質の改善に集中する代わりに、ダッシュボードのレイアウトとビジュアライゼーションの構築と更新に相当な時間を費やさなければなりません。

### 目標

- ユーザーが特定のニーズに合わせてダッシュボードレイアウト、パネルの選択、設定をパーソナライズできるようにする
- アプリケーション全体で一貫した UX を提供するための、ユーザー主導のダッシュボードカスタマイズの UI パターンを確立する
- ユーザーの満足度とエクスペリエンスを向上させるカスタマイズが可能な GitLab 全体でカスタマイズフレームワークを採用する
- カスタマイズフレームワークはダッシュボードレイアウトフレームワークのユースケースへのドロップイン代替品でなければならない
- 静的ダッシュボードの明確なアップグレードパスと、チームが既存のダッシュボードにカスタマイズを統合する方法を概説する

### 対象外

ダッシュボードカスタマイズフレームワークは以下を含みません：

- 定義されたパネルのビジュアライゼーション外での[データ探索](../gitlab_data_exploration/_index.md)
- [ダッシュボードをナビゲーションに配置する場所の定義](https://gitlab.com/gitlab-org/gitlab/-/issues/536612)
- ダッシュボード設定の保存方法や保存場所の定義

## 提案

モジュラーダッシュボードの基盤[エピック](https://gitlab.com/groups/gitlab-org/-/epics/18072)に従ってチームがダッシュボードレイアウトにユーザーカスタマイズを拡張できるよう、新しいカスタマイズ可能なダッシュボードコンポーネントを作成します。コンポーネントは既存のダッシュボードレイアウトコンポーネントのユースケースへのドロップイン代替品でなければなりません。コンポーネントはダッシュボードレイアウトコンポーネントをラップし、コアダッシュボードレイアウトコンポーネントの機能と API を維持しながら、一貫したダッシュボードカスタマイズ UX を提供するために機能を拡張する必要があります。

## 設計と実装の詳細

フレームワークはダッシュボードレイアウトに新しい編集状態を追加し、ユーザーはダッシュボードをカスタマイズするためにその状態に入ることができます。ユーザーがダッシュボードレイアウトの編集を終了すると、ダッシュボードは静的ダッシュボードの状態に戻る必要があります。ユーザーが行った変更は静的状態で保持される必要があります。ユーザーにはボタンまたはセカンダリオプションを通じて編集状態に戻るオプションが提供される必要があります。保存された変更は、次にダッシュボードを読み込む際にすべての認証済みユーザーに表示される必要があります。

![dashboard_customization_framework_outline](/images/engineering/architecture/design-documents/dashboard_customization_framework/dashboard_customization_framework_outline.png)

### ダッシュボードレイアウト

編集していない場合：

- ダッシュボードは静的ダッシュボードと同じように動作します
- 編集アクションはダッシュボードの変更を行える権限を持つ認証済みユーザーが利用できます

編集中：

- ユーザーはタイトルと説明を編集できます
- ユーザーは未保存の変更を破棄してダッシュボードを元の状態に戻すことができます
- ユーザーが変更の保存を選択すると、ダッシュボードは変更された設定を生成します
- 未保存の変更が失われる場合、ダッシュボードは警告メッセージを表示します
- カスタムインターフェイスを介して新しいまたは GitLab 提供のビジュアライゼーションを追加できます（オプション）

### パネル

編集していない場合、パネルは静的ダッシュボードと同じように見え、動作します。

編集中：

- パネルをドラッグして新しいグリッド位置にスナップできます
- パネルを新しい高さと幅にリサイズできます
- パネルを削除できます（オプション）

### フィルター

編集していない場合、ダッシュボードレベルのフィルターは静的ダッシュボードと同じように見え、動作する必要があります。

編集中、フレームワークは視覚的な混雑を減らすためにデフォルトでダッシュボードレベルのフィルターを非表示にする必要があります。

### カスタマイズの永続化

フレームワークはダッシュボード設定の永続化方法を定義しておらず、コンシューマーはこの機能の実装に責任を持ちます。永続化はダッシュボードの基盤ロードマップ[エピック](https://gitlab.com/groups/gitlab-org/-/epics/18072)の一部として今後のフレームワーク機能として計画されています。カスタマイズの永続化は以下に準拠する必要があります：

- ダッシュボードへのカスタマイズは、永続化された変更イベントでトレース可能でなければなりません
- カスタマイズはダッシュボード設定オブジェクトを使用して保存する必要があります。ダッシュボードレイアウト[ドキュメント](https://docs.gitlab.com/development/fe_guide/dashboard_layout_framework/#basic-implementation)の例を参照してください

## はじめに

_TODO: 関連する開発者ドキュメントセクションへのリンクを追加してください: https://gitlab.com/gitlab-org/gitlab/-/issues/549982_

## 静的ダッシュボードからのアップグレード

_TODO: 関連する開発者ドキュメントセクションへのリンクを追加してください: https://gitlab.com/gitlab-org/gitlab/-/issues/549982_
