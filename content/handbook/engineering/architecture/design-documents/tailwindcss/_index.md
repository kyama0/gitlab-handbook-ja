---
title: "CSS ユーティリティクラスの生成を Tailwind CSS に委任する"
status: ongoing
creation-date: "2023-12-21"
authors: [ "@peterhegman", "@svedova", "@pgascouvaillancourt" ]
approvers: [ "@samdbeckham" ]
owning-stage: "~devops::manage"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/tailwindcss/
upstream_sha: d5f4aa38819ae2b572eb32e0d967394d0361a975
translated_at: "2026-04-27T10:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">ongoing</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/peterhegman" class="text-blue-600 hover:underline">@peterhegman</a>, <a href="https://gitlab.com/svedova" class="text-blue-600 hover:underline">@svedova</a>, <a href="https://gitlab.com/pgascouvaillancourt" class="text-blue-600 hover:underline">@pgascouvaillancourt</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/samdbeckham" class="text-blue-600 hover:underline">@samdbeckham</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::manage</span></td>
<td class="px-3 py-2 border border-gray-300">2023-12-21</td>
</tr>
</tbody>
</table>
</div>


## 概要

GitLab でのスタイリングは主に CSS ユーティリティクラスに依存しています。これらは一般的に単一の CSS プロパティを定義するクラスであり、加算的に適用することで要素の外観を変更できます。
私たちは [GitLab UI](https://gitlab.com/gitlab-org/gitlab-ui) プロジェクトで必要なユーティリティを生成するための独自ツールを開発しましたが、そのアプローチには多くの欠点があることが明らかになりました。これらは [Tailwind CSS](https://tailwindcss.com/) フレームワークにそのタスクを委任することで回避できます。

このイニシアティブでは、Tailwind CSS で既存のユーティリティを置き換えられるよう、既存のユーティリティを非推奨にする必要があります。

## 動機

2019 年 6 月、[RFC#4](https://gitlab.com/gitlab-org/frontend/rfcs/-/issues/4) を通じて CSS ユーティリティクラスの使用を統一しました。このRFCでは、サイレントクラスの概念が導入され、ユーティリティは手動で定義された SCSS ミックスインのコレクションから生成されることになりました。

これはうまく機能してきましたが、いくつかの注意点がありました：

- **開発オーバーヘッドの増加**: 新しいユーティリティが必要な場合は、[GitLab UI](https://gitlab.com/gitlab-org/gitlab-ui) プロジェクトに手動で追加する必要があります。その後、`@gitlab/ui` の新しいバージョンがリリースされ、コンシューマープロジェクトにインストールされるまで待つ必要があります。
- **不整合**: ユーティリティの命名方法を確認するツールがなかったため、多くの不整合がライブラリに入り込み、非常に予測不可能になりました。最も顕著な例は、モバイルファーストのユーティリティが多数を占める中でデスクトップファーストのユーティリティが導入されたことで、ソースを見る以外に前者と後者を区別する方法がありませんでした。
- **ユーティリティライブラリとそのコンシューマー間の断絶**: ユーティリティがライブラリに追加されると、`@gitlab/ui` を使用する_どの_プロジェクトでも利用可能になります。その結果、必要としないプロジェクトにも一部のユーティリティが含まれます。逆に、すべてのコンシューマーが特定のユーティリティを使用しなくなった場合、CSS バンドルサイズを減らすために削除できる可能性がありますが、その可視性がありません。
- **限られたオートコンプリート**: 既存のライブラリのオートコンプリートを設定することは可能ですが、ユーティリティバンドルに限定されます。対照的に、Tailwind CSS のオートコンプリートはオンデマンドアプローチに沿っており、すべてのユーティリティを即座に利用可能にします。さらに、IDE 拡張機能により、特定のユーティリティが適用する値を示すことで理解が深まります。

このアーキテクチャ変更の一環として、CSS ユーティリティを生成するためのカスタムビルドソリューションを廃止し、そのタスクを [Tailwind CSS](https://tailwindcss.com/) に委任することでこれらの問題を緩和しています。

以前 [RFC#107](https://gitlab.com/gitlab-org/frontend/rfcs/-/issues/107) でも議論されていたことは注目に値します。RFC は好意的に受け入れられました。提起されたいくつかの懸念は、実装方法ではなく CSS ユーティリティアプローチ全体に関するものでした。このイニシアティブの目的は、ユーティリティクラスへの依存を疑問視することでは_なく_、実装を統合してエンジニアが CSS ユーティリティを扱う際の効率を向上させることです。

### なぜ Tailwind CSS なのか？

Tailwind CSS を選択した理由をいくつか示します：

- 多くの本番アプリで実戦テストされ、健全なコミュニティを持つ長期的なプロジェクトです。
- Tailwind CSS は適切にメンテナンスされ、肥大化することなく進化し続けています。
- すべての技術スタックにうまく統合されます
  - Ruby on Rails プロジェクトは [`tailwindcss-rails` Gem](https://tailwindcss.com/docs/guides/ruby-on-rails) を活用できます。
  - Nuxt アプリは [`tailwindcss` モジュール](https://nuxt.com/modules/tailwindcss) をセットアップできます。
  - より一般的なフロントエンドスタックは [`tailwindcss` Node モジュール](https://tailwindcss.com/docs/installation) を使用できます。

### 目標

このブループリントの目標は、CSS ユーティリティクラスを扱う際の開発者エクスペリエンス（DX）を改善することです。このイニシアティブの結果として、大幅に低下した開発オーバーヘッドにより、フロントエンドエンジニアの効率が向上するはずです。

### 非目標

上記の動機で述べたように、これは既存のアーキテクチャの決定を改善することに焦点を当てており、新しいデザインで置き換えることではありません。したがって：

- CSS の書き方やプロジェクト内でスタイルを適用する方法を見直すことを_目指していません_。
- ユーザー向けの改善に焦点を当てていません。この変更は主に開発者エクスペリエンスの向上です。効率の向上が間接的にユーザーエクスペリエンスを改善する可能性はありますが、それは私たちの主な意図ではありません。

## 提案

GitLab UI と GitLab の_両方_で Tailwind CSS をセットアップします。意図は、メインの Tailwind CSS 設定を GitLab UI に持つことです。このステップでは、Pajamas に準拠した設定プロパティ（カラー、スペーシングスケールなど）を維持します。GitLab の Tailwind CSS セットアップは GitLab UI のセットアップから継承します。ここでの微妙な点は、GitLab では GitLab コードベースと `@gitlab/ui` Node モジュールの両方をスキャンすることです。これにより、GitLab UI は CSS ユーティリティを公開する必要がなくなりますが、それが依存するユーティリティは GitLab で引き続き生成されます。CSS ユーティリティを使用し Tailwind CSS ベースのバージョンにアップグレードする必要がある他のプロジェクトにも同様のセットアップを導入する必要があります。

### 長所

- 新しいユーティリティを追加するための煩雑なワークフローを排除しています。別のプロジェクトに貢献してリリースサイクルを待つことなく、すぐにユーティリティを使用できるはずです。
- 命名が大きな Tailwind CSS プロジェクトで決定される予測可能なライブラリを導入しています。エンジニアが知っているように、物事の命名は難しく、これを確立されたプロジェクトに任せるのが最善です。
- エンジニアは Tailwind CSS のドキュメントを参照して、どのユーティリティが利用可能でどのように使用するかを知ることができます。GitLab UI のソースコードを読む必要はもうありません。
- Tailwind CSS はコンシューマーのコードベースをスキャンして必要なユーティリティを生成するため、実際に必要なユーティリティのみを生成し、CSS バンドルサイズを管理下に置くことができます。ただし、これには注意が必要です：Tailwind CSS は非常に柔軟であり、開発者定義の値を含むさまざまなユーティリティを生成することが可能であり、Tailwind CSS の機能をどのように採用するかによっては大きなユーティリティバンドルが生じる可能性があります。
- 私たちがサポートするユーティリティのオートコンプリートとプレビューを提供する堅牢な IDE 統合の恩恵を受けます。

### 短所

- セットアップの増加: CSS ユーティリティを必要とする各プロジェクトに Tailwind CSS をセットアップする必要があり、環境によって煩雑さが異なります。
- 各プロジェクトに開発依存関係が 1 つ増える。
- クラス名を動的に構築するための文字列補間が使用できない（Tailwind CSS は必要なクラスを生成するためにフルネームを参照する必要がある）。
- 移行が必要になる：既存の CSS ユーティリティライブラリの使用を壊さないようにする必要があり、非推奨/移行プロセスが必要になる。

## 設計と実装の詳細

既存のライブラリからの移行を壊さないよう、イテレーティブなアプローチを取っています。ここで提案されるパスは意図的に粗削りです。すべてに対応する万能のソリューションではなく、途中でいくつかのケースに対応して調整が必要になる可能性があることを認識しています。

基本的なプロセスは以下のとおりです：

1. ベース Tailwind 設定は `@gitlab/ui` で定義され、`tailwind.defaults.js` としてエクスポートされます。この設定はブレークポイント、カラー、スペーシング、フォントサイズ、その他すべてのプロジェクトで一貫している必要がある設定を定義します。
1. `gitlab-org/gitlab` には、`@gitlab/ui/tailwind.defaults.js` をプリセットとして使用する `tailwind.config.js` ファイルがあり、すべての設定が継承されます。`content` プロパティは、`gitlab-org/gitlab` と `@gitlab/ui` の Vue、JS、HAML、Ruby ファイルをスキャンするよう設定されています。
1. [scripts/frontend/tailwind_all_the_way.mjs](https://gitlab.com/gitlab-org/gitlab/-/blob/c1b1ac2a6282f0f2a6b8b43d212079829ec8d3d3/scripts/frontend/tailwind_all_the_way.mjs) は Tailwind ユーティリティと `@gitlab/ui` ユーティリティを比較します。完全に一致しないユーティリティは `gitlab-org/gitlab` の `config/helpers/tailwind/css_in_js.js` に追加されます。完全に一致するユーティリティは Tailwind によって自動的に生成されます。
1. `config/helpers/tailwind/css_in_js.js` は `tailwind.config.js` でインポートされ、[`addUtilities`](https://tailwindcss.com/docs/plugins#static-utilities) 関数を使用してこれらのユーティリティを登録します。
1. `gitlab-org/gitlab` のレガシーユーティリティの使用は Tailwind の同等品に段階的に移行されます。これにより `config/helpers/tailwind/css_in_js.js` が縮小します。
1. `@gitlab/ui` のレガシーユーティリティの使用は Tailwind の同等品に移行されます。`@gitlab/ui` にレガシーユーティリティの使用が残っていなければ、`config/helpers/tailwind/css_in_js.js` は空になり、サポートツールとともに削除できます。
1. すべての SCSS ユーティリティミックスインが `@gitlab/ui` から削除され、メジャーバージョンがリリースされます。
