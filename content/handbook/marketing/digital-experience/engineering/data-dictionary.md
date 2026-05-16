---
title: データディクショナリー
description: >-
  私たちの目標は、Marketing サイトのタグ付けに使用するデータ属性のキーと値の一貫性を確保することです。これにより、適切にフォーマットされたイベントデータが dataLayer に追加され、Google Analytics へ送信されるようになります。
upstream_path: /handbook/marketing/digital-experience/engineering/data-dictionary/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-05-01T10:36:34Z"
translator: claude
stale: false
lastmod: "2026-01-08T16:59:33-05:00"
---

## デジタル定義集

私たちの目標は、Marketing サイトのタグ付けに使用するデータ属性のキーと値の一貫性を確保することです。これにより、適切にフォーマットされたイベントデータが dataLayer に追加され、Google Analytics へ送信されるようになります。

## データ属性の利用方法

Marketing サイトのすべてのリンクには、次の 2 つのデータ属性を持たせる必要があります:

- `data-ga-name`
- `data-ga-location`

無料トライアルボタンでの使用例は次のとおりです:

### HTML

```html
<a href="/free-trial/" data-ga-name="free trial" data-ga-location="header">Get free trial</a>
```

### HAML

```ruby
%a{href: '/free-trial', :"data-ga-name" => "free trial", :"data-ga-location" => "header"}
```

または好ましくは:

```ruby
= link_to "Get free trial", "/free-trial", :"data-ga-name" => "free trial", :"data-ga-location" => "header"
```

### Name 属性とは何ですか？

`name` は、ボタン/リンク/入力などが英語で示している内容、あるいは指している先を表す必要があります。

例として、それぞれ異なる顧客ページへ誘導する一連の「Learn more」リンクがあるページの場合、`name` は `goldman sachs link` のような形になります。*注意:* 小文字を推奨します。

### Location 属性とは何ですか？

`location` 属性の目的は、同じページ内に同じ `name` を持つ複数のリンクが存在する場合に、それらを区別することです。`location` 属性は主にトップページ向けです（現行のトップ 50 ページについては[このリンク](https://gitlab.com/groups/gitlab-com/marketing/digital-experience/-/epics/80)を参照）。優先度の低いページについては、`name` 属性のみで十分です。

| Key | 定義 | 例 |
| --- | ---------- | ------- |
| nav | このリンクはページのナビゲーション内にあります。 | `data-ga-location="nav"` |
| header | このリンクはページのヘッダー内にあります。 | `data-ga-location="header"` |
| body | このリンクがページのメイン本文内（hero でも nav/footer でもない）でその種類で唯一のものである場合、body を使用できます。 | `data-ga-location="body"` |
| {{section}} | この種類のリンクが本文内に複数ある場合、その特定のリンクが見つかるセクションについて説明的な名前を付けることを検討してください。例: "features" や "benefits"。 | `data-ga-location="features"` |
| footer | これはページのフッター内のリンク用です。フッターは紫色の背景の最下部セクションです。 | `data-ga-location="footer"` |

### ユーティリティ

Markdown をハイライトしないファイル内に含まれる Markdown のリンクを見つけやすくするために、開発者は次の[正規表現](https://en.wikipedia.org/wiki/Regular_expression) を使用できます:

```text
(?:__|[*#])|\[(.*?)\]\(.*?\)
```
