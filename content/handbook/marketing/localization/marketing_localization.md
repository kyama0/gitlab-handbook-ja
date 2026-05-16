---
title: "マーケティングローカリゼーション"
description: about.gitlab.com を複数言語で提供することを可能にする、GitLab のマーケティングローカリゼーションプロセスとインフラストラクチャの概要。
upstream_path: /handbook/marketing/localization/marketing_localization/
upstream_sha: 768e1a6af6ab56133195582e6a0b17d225df15f7
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-05T15:21:29+01:00"
---

## マーケティングローカリゼーション

私たちのウェブサイトは現在 6 言語で提供されています。当社のウェブサイトページの翻訳済みコンテンツは [about-gitlab-com](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com/-/tree/main/content) プロジェクトに保存されています。マーケティングコンテンツのローカリゼーションに関するさらなる技術的詳細については、[Digital Experience のローカリゼーションベストプラクティスチームのハンドブックページ](/handbook/marketing/digital-experience/engineering/localization/) をご覧ください。

### ローカライズ済みウェブサイトのリスト

| 言語 | ローカライズ済みランディングページ | ステータス |
| ------ | ------------ | ------ |
| フランス語 | https://about.gitlab.com/fr-fr/ | 公開中 |
| 日本語 | https://about.gitlab.com/ja-jp/ | 公開中 |
| ドイツ語 | https://about.gitlab.com/de-de/ | 公開中 |
| イタリア語 | https://about.gitlab.com/it-it/ | 公開中 |
| ブラジルポルトガル語 | https://about.gitlab.com/pt-br/ | 公開中 |
| スペイン語 | https://about.gitlab.com/es/ | 公開中 |

### 国際版ブログ

GitLab のブログは日本語、フランス語、ドイツ語で提供されており、それぞれ専任の Content Manager がいます:

| 言語 | URL | Content Manager |
| ------ | ------------ | ------ |
| JA | https://about.gitlab.com/ja-jp/blog/ | [Megumi Uchikawa](https://gitlab.com/muchikawa) |
| FR | https://about.gitlab.com/fr-fr/blog/ | [Maud Leuenberger](https://gitlab.com/maud-L) |
| DE | https://about.gitlab.com/de-de/blog/ | [Hendrik Breuer](https://gitlab.com/hbreuer-ext) |

### キャンペーン用コンテンツの翻訳

通常、Integrated Marketing チームが現在のキャンペーンや地域ニーズに基づき、どの翻訳が必要かを決定します。ローカライズされたキャンペーンは現在、[統合キャンペーンプロセス](/handbook/marketing/campaigns/#campaign-planning) に従っています。Integrated Marketing チームは、統合キャンペーンのコンテンツローカリゼーションを担当します。

### 言語の好みによるセグメンテーション

利用可能な場合に好みの言語でコンテンツやイベントを提供できるよう、Marketo に `Language Preference` セグメンテーションを作成しています。これらのセグメントを編集できるのは Marketing Ops のみです。このセグメンテーションで利用可能な言語は [Marketo ページ](/handbook/marketing/marketing-operations/marketo/#segmentations) に記載されています。利用可能な言語のいずれかで提供されているフォームに当社ウェブサイト上で記入したり、キャンペーンに反応したりすると、その人物は `Language Preference` セグメントに追加されます。

### 翻訳済み URL の構造

翻訳済みのページはすべて、特定の言語専用のサブフォルダに配置されます。これらのサブフォルダは [ISO 639-1 コード](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) を使用します。

### hreflang タグ

検索エンジンは `hreflang` タグを使用して、翻訳済みページの正規バージョンを判定します。私たちは翻訳済みページに `hreflang` を使用します。

`hreflang` タグは `<link rel="alternate"` という宣言で始まり、URL `href={{url}}` を追加し、`hreflang={{language ISO}}` で終わります。

ドイツ語に翻訳された URL の hreflang タグの例を以下に示します。

`<link rel="alternate" href="https://about.gitlab.com/de-de/warum/nutze-continuous-integration-fuer-schnelleres-bauen-und-testen/" hreflang="de" />`

サイトの正規バージョンは `about.gitlab.com` 上の米国英語版です。ページタイトルの下に各バージョンを追加し、それぞれに該当する言語を明記してリンクする必要があります。[Google が提供している例](https://developers.google.com/search/docs/advanced/crawling/localized-versions?visit_id=637504000817145606-3833240924&rd=1) を以下に示します:

```html
<head>
 <title>Widgets, Inc</title>
  <link rel="alternate" hreflang="en-gb"
       href="https://en-gb.example.com/page.html" />
  <link rel="alternate" hreflang="en-us"
       href="https://en-us.example.com/page.html" />
  <link rel="alternate" hreflang="en"
       href="https://en.example.com/page.html" />
  <link rel="alternate" hreflang="de"
       href="https://de.example.com/page.html" />
 <link rel="alternate" hreflang="x-default"
       href="https://www.example.com/" />
</head>
```

Google プロパティ全体でペナルティを避けるために、私たちのリポジトリのデフォルトページを正規バージョンとして宣言する必要がある点に留意することが重要です。

Aleyda Solis は [`hreflang` タグを構築するための便利なツール](https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/) を保守しており、参考として利用することもできます。
