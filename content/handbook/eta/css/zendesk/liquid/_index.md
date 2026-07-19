---
title: 'Liquid 言語'
description: 'Zendesk の Liquid 言語に関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/liquid/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T08:09:48+09:00"
translator: codex
stale: false
---

このガイドでは、Zendesk で Liquid テンプレート言語を使用するためのリファレンスを提供します。Liquid により、トリガー、自動化、テーマで動的コンテンツを利用できます。このページでは、一般的な変数、関数、実用例を扱います。

## Liquid 言語とは

Liquid は、[Shopify が作成したオープンソースのテンプレート言語](https://github.com/Shopify/liquid)で、Ruby で記述されています。テーマやページなどでより動的なコンテンツを利用できるようにするために使用します。

## Zendesk で Liquid を使用する方法

Zendesk では、Liquid を主にトリガー、自動化、拡張機能で利用しています。これにより、より動的なメッセージ（コメント、URL など）を実現できます。Liquid 言語を完全に使いこなすには時間がかかる場合があります。特に多くの機能があり、頻繁に更新されるためです。

## 変数の展開

テキストまたは出力に値を挿入するには、変数、関数、または値の名前を二重波かっこで囲みます。

例として、チケットのリクエスター名を出力する場合は、次の形式になります。

- 入力: `Greetings {{ticket.requester.name}}`
- 出力: `Greetings John Doe`

同じ方法で関数も使用できます。たとえば、メッセージに自分のロールを入れつつ、大文字化したい場合は、次の形式になります。

- 入力: `My role is {{current_user.role | capitalize }}`
- 出力: `My role is Fullstack Engineer`

## コードブロック

コードブロック（一般的なループ、代入、条件分岐など）を使用するには、行を `{%` で開始し、`%}` で終了します。

たとえば、チケットのコメントに対するループを開始する場合は、`{% for comment in ticket.comments %}` のようにします。

## 一般的な変数

| オブジェクトの種類 | 変数 | 説明 |
|-------------|----------|-------------|
| 現在のユーザー | `current_user` | 現在のユーザーを参照するユーザー オブジェクト |
| ユーザー | `name` | ユーザーのフルネーム |
| ユーザー | `first_name` | ユーザーの名 |
| ユーザー | `last_name` | ユーザーの姓 |
| ユーザー | `email` | ユーザーのメールアドレス |
| ユーザー | `details` | ユーザーの詳細テキストボックス |
| ユーザー | `notes` | ユーザーのメモテキストボックス |
| ユーザー | `id` | ユーザーの Zendesk ID |
| ユーザー | `organization` | ユーザーの組織オブジェクト |
| ユーザー | `custom_fields.gitlab_user_id` | ユーザーの GitLab ユーザー ID（カスタム ユーザーフィールド） |
| ユーザー | `custom_fields.gitlab_username` | ユーザーの GitLab ユーザー名（カスタム ユーザーフィールド） |
| ユーザー | `custom_fields.xxxxx` | xxxxx という名前のユーザーフィールドに対するユーザーの値 |
| 組織 | `id` | 組織の Zendesk ID |
| 組織 | `name` | 組織の名前 |
| 組織 | `details` | 組織の詳細テキストボックス |
| 組織 | `notes` | 組織のメモテキストボックス |
| 組織 | `custom_fields.salesforce_id` | 組織の Salesforce ID |
| 組織 | `custom_fields.arr` | 組織の ARR |
| 組織 | `custom_fields.technical_account_manager` | 組織の CSM |
| 組織 | `custom_fields.account_owner` | 組織の AM |
| 組織 | `custom_fields.org_region.title` | 組織のリージョン |
| 組織 | `custom_fields.support_level.title` | 組織のサポートレベル |
| 組織 | `custom_fields.xxxxx` | xxxxx という名前の組織フィールドに対する組織の値 |
| エージェント | `name` | エージェントの名前 |
| エージェント | `role` | エージェントのロール |
| エージェント | `email` | エージェントのメールアドレス |
| エージェント | `signature` | エージェントの署名 |
| チケット | `assignee` | チケットの担当者（ユーザー オブジェクト） |
| チケット | `ccs` | チケットで CC されているユーザーの配列 |
| チケット | `due_date` | チケットの期日（日付のみ） |
| チケット | `due_date_with_timestamp` | チケットの期日（タイムスタンプ付き） |
| チケット | `followers` | チケットをフォローしているユーザーの配列 |
| チケット | `id` | チケットの Zendesk ID |
| チケット | `in_business_hours` | チケットが現在スケジュールの営業時間内かどうかを示すブール値 |
| チケット | `link` | HTTP プロトコルを含むチケットの URL |
| チケット | `requester` | チケットのリクエスター（ユーザー オブジェクト） |
| チケット | `organization` | チケットの組織（組織オブジェクト） |
| チケット | `status` | チケットのステータス |
| チケット | `ticket_field_xxxxxx` | ID が xxxxxx のチケットフィールドに対するチケットの API 値 |
| チケット | `ticket_field_option_title_xxxxxx` | ID が xxxxxx のチケットフィールドに対するチケットのドロップダウンタイトル値 |
| チケット | `ticket_field_360019949920` | チケットの未承認ユーザーフィールド値（Zendesk Global） |
| チケット | `ticket_field_360017383799` | チケットの期日に関するメモの値（Zendesk Global） |
| チケット | `ticket_field_360012194220` | チケットのパートナートラブルシューティング値（Zendesk Global） |
| チケット | `ticket_field_360020735339` | チケットの CC リクエスト値（Zendesk Global） |
| チケット | `ticket_field_360012194200` | チケットの組織メール（パートナー）の値（Zendesk Global） |
| チケット | `ticket_field_360018253094` | チケットのサポートの優先リージョンの値（Zendesk Global） |
| チケット | `ticket_form` | チケットのフォーム |
| チケット | `url` | HTTP プロトコルを含まないチケットの URL |
| チケット | `title` | チケットの件名 |
| チケット | `comments` | チケットのコメントの配列 |
| チケット | `public_comments` | チケットの公開コメントの配列 |
| 満足度 | `current_rating` | チケットの現在の満足度評価 |
| 満足度 | `rating_section` | ユーザーに満足度調査を依頼するために送信される書式設定済みブロック |
| 満足度 | `current_comment` | チケットの現在の満足度コメント |

[さらに多くの変数](https://support.zendesk.com/hc/en-us/articles/4408886858138-Zendesk-Support-placeholders-reference)を使用できますが、GitLab で使用するものの中では、これらが圧倒的に一般的です。

### チケットフィールド ID の確認

これには管理者レベルのアクセスが必要になる場合が多いため、支援が必要な場合は Customer Support Systems チームに連絡することをおすすめします。

## 一般的な関数

| 関数 | 説明 |
|----------|-------------|
| [slice](https://shopify.github.io/liquid/filters/slice/) | 部分文字列を返す |
| [split](https://shopify.github.io/liquid/filters/split/) | 区切り文字に基づいて文字列を配列に分割する |
| [url_encode](https://shopify.github.io/liquid/filters/url_encode/) | 文字列を URL エンコードされた文字に変換する |
| [url_decode](https://shopify.github.io/liquid/filters/url_decode/) | url_encode でエンコードされた文字列をデコードする |
| [first](https://shopify.github.io/liquid/filters/first/) | 配列内の最初の項目 |
| [last](https://shopify.github.io/liquid/filters/last/) | 配列内の最後の項目 |
| [join](https://shopify.github.io/liquid/filters/join/) | 配列内の項目を結合する |
| [capitalize](https://shopify.github.io/liquid/filters/capitalize/) | 文字列の最初の文字を大文字にする |
| [upcase](https://shopify.github.io/liquid/filters/upcase/) | すべての文字を大文字にする |
| [downcase](https://shopify.github.io/liquid/filters/downcase/) | すべての文字を小文字にする |
| [size](https://shopify.github.io/liquid/filters/size/) | オブジェクトのサイズを返す。文字列の場合は文字数、配列の場合は項目数 |
| [lstrip](https://shopify.github.io/liquid/filters/lstrip/) | 文字列の左側から空白を削除する |
| [rstrip](https://shopify.github.io/liquid/filters/rstrip/) | 文字列の右側から空白を削除する |
| [strip](https://shopify.github.io/liquid/filters/strip/) | 文字列の左側と右側の両方から空白を削除する |
| [remove](https://shopify.github.io/liquid/filters/remove/) | 文字列内の項目を削除する |
| [replace](https://shopify.github.io/liquid/filters/replace/) | 項目を置換する |
| [sort](https://shopify.github.io/liquid/filters/sort/) | 配列内の項目をアルファベット順に並べ替える |
| [truncate](https://shopify.github.io/liquid/filters/truncate/) | 文字列を短縮する |
| [uniq](https://shopify.github.io/liquid/filters/uniq/) | 配列から重複する項目を削除する |

## 一般的なタグ

| タグ | 説明 |
|-----|-------------|
| assign | 変数に値を代入する |
| blank | "nil" または "null" と同じ |
| capture | テキストを変数に取り込む |
| break | ループを終了する |
| continue | ループ内の残りのコードをスキップし、次のイテレーションを開始する |

## 条件分岐

| 条件分岐 | 使用可能な演算子 |
|-------------|---------------------|
| if..elsif..else..endif | `==` `!=` `<>` `<` `<=` `>` `>=` `contains` `and` `or` |
| unless..endless | `==` `!=` `<>` `<` `<=` `>` `>=` `contains` `and` `or` |
| case..when..else..endcase | N/A |

## ループ

| ループ | 構文 |
|------|--------|
| for | `for x in y`, `for x in y limit:5`, `for x in y offset:3`, `for x in y reversed` |
| cycle | `cycle "apple", "banana", "cherry"` |

## 例

### ドキュメント Issue 作成トリガー

これをトリガーで使用し、最新コメントの作成者、タイトル、説明を特定してドキュメント Issue を作成します。

```string
{% for comment in ticket.comments limit:1 offset:0 %}
  {% assign author = comment.author.custom_fields.gitlab_user_id %}
  {% assign lines = comment | url_encode | split: "%0A" %}
  {% for line in lines %}
    {% assign first_five = line | slice: 0,5 %}
    {% if first_five == 'Title' %}
      {% assign title = line | url_decode | split: ': ' | last %}
    {% endif %}
  {% endfor %}
  {% assign description = comment | split: 'Description:' | last | join: '\n' %}
{% endfor %}
```

行ごとの内訳:

1. チケットコメントに対する `for` ループを開始し、上限を 1 イテレーションに設定します（つまり最新の 1 件だけを取得します）
1. 変数 `author` に値を代入します
   - 値はコメント作成者の GitLab ユーザー ID（カスタム ユーザーフィールド）にします
1. 変数 `lines` に値を代入します
   - これにより `comment` を関数 url_encode に渡し、文字列を URL セーフ形式にエンコードします
   - これにより URL エンコードされた文字列を split 関数に渡し、区切り文字 `%0A` で分割した配列に変換します
1. `lines` 変数に格納された配列に対する `for` ループを開始します
1. 変数 `first_five` に値を代入します
   - これにより `line` を slice 関数に渡し、最初の 5 文字を返します
1. `first_five` の値が `Title` であることを条件とする `if` ブロックを宣言します
1. 変数 `title` に値を代入します
   - これにより `line` を関数 url_decode に渡し、url_encode が先に行ったことを元に戻します
   - これを split 関数に渡し、区切り文字 `:` で分割した配列に変換します
   - これを last 関数に渡し、配列の最後の項目を返します
1. `if` ブロックを終了します
1. 2 つ目の `for` ループを終了します
1. 変数 `description` に値を代入します
   - これにより `comment` を split 関数に渡し、区切り文字 'Description:' で分割した配列に変換します
   - これを last 関数に渡し、配列の最後の項目を返します
   - これを join 関数に渡し、区切り文字 `\n` を使用して項目を結合します
1. 最初の `for` ループを終了します

### 時間外メッセージを表示するか判断する

これを使用して、チケットが現在営業時間内かどうかに基づき、テキストブロックを表示するかどうかを判断します。

```string
{% if ticket.in_business_hours == 'false' %}
  <li>You indicated in this ticket, #{{ticket.id}}, a "Preferred Region for Support." The current time is outside of that region's standard business hours. You can rest assured that this ticket will be addressed by the next available engineer in the selected region. It is important that you understand when you may expect a reply regarding this case. Please see the linked handbook section for more information regarding the <a href='https://about.gitlab.com/support/#effect-on-support-hours-if-a-preferred-region-for-support-is-chosen' target='_blank'>effect of using Preferred Region</a>.<br />During the course of this ticket if you require assistance outside of the selected region's standard business hours please feel free to reply asking one of our support engineers to set this ticket's preferred region to "All regions".</li>
{% endif %}
```

行ごとの内訳:

1. チケットが営業時間内ではないことを条件とする `if` ブロックを宣言します
1. テキストブロックを表示します
   - これにより、Liquid 変数 `{{ticket.id}}` を使用してチケットの ID を挿入します
1. `if` ブロックを終了します

### SSAT Issue 作成トリガー

これを、顧客が残した SSAT 評価に基づいて Issue を作成するトリガーの一部として使用します。これは、チケットで使用しているフォームを特定し、チケットフォームに対応する GitLab Issue タグを含む、使用する変数を設定するために使用されます。

```string
{% assign form = ticket.ticket_form %}

{% if form == 'GitLab.com User Accounts and Login Issues' %}
  {% assign form = 'form::GitLab.com' %}
{% elsif form == 'Support for GitLab.com' %}
  {% assign form = 'form::GitLab.com' %}
{% elsif form == 'Support for a self-managed GitLab instance' %}
  {% assign form = 'form::Self-managed' %}
{% elsif form == 'Licensing and Renewals Problems' %}
  {% assign form = 'form::Upgrades & Renewals' %}
{% elsif form == 'Contact the Security team' %}
  {% assign form = 'form::Security' %}
{% elsif form == 'Other Request' %}
  {% assign form = 'form::Other' %}
{% else %}
  {% assign form = 'form::GitLab Community Edition' %}
{% endif %}
```

行ごとの内訳:

1. 変数 `form` に値を代入します
   - 値はチケットのフォームにします
1. 間隔を空けるための空行です（必須ではなく、見た目をよくするためだけのものです）
1. `form` の値が `GitLab.com User Accounts and Login Issues` であることを条件とする `if` ブロックを宣言します
1. 変数 `form` に値を代入します
1. `form` の値が `Support for GitLab.com` であることを条件とする `elsif` ブロックを宣言します
1. 変数 `form` に値を代入します
1. `form` の値が `Support for a self-managed GitLab instance` であることを条件とする `elsif` ブロックを宣言します
1. 変数 `form` に値を代入します
1. `form` の値が `Licensing and Renewals Problems` であることを条件とする `elsif` ブロックを宣言します
1. 変数 `form` に値を代入します
1. `form` の値が `Contact the Security team` であることを条件とする `elsif` ブロックを宣言します
1. 変数 `form` に値を代入します
1. `form` の値が `Other Request` であることを条件とする `elsif` ブロックを宣言します
1. 変数 `form` に値を代入します
1. `else` ブロックを宣言します
1. 変数 `form` に値を代入します
1. `if` ブロックを終了します

## 便利なリンク

- [Liquid GitHub リポジトリ](https://github.com/Shopify/liquid)
- [Liquid ドキュメント](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
- [Zendesk プレースホルダーリファレンス](https://support.zendesk.com/hc/en-us/articles/4408886858138-Zendesk-Support-placeholders-reference)

## 一般的な問題とトラブルシューティング

これは必要に応じて項目が追加される継続的なセクションです。
