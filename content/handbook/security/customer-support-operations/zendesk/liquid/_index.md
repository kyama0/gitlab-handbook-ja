---
title: 'Liquid 言語'
description: 'Zendesk の Liquid 言語に関するドキュメント'
date: 2025-12-23
upstream_path: /handbook/security/customer-support-operations/zendesk/liquid/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T23:27:10Z"
translator: claude
stale: false
lastmod: "2026-02-12T20:47:52+00:00"
---

このガイドでは、Zendesk で Liquid テンプレート言語を使用するためのリファレンスを提供します。Liquid はトリガー、オートメーション、テーマでの動的なコンテンツを可能にします。本ページでは一般的な変数、関数、実用的な例について説明します。

## Liquid 言語とは

Liquid は [Shopify が作成し、Ruby で書かれたオープンソースのテンプレート言語](https://github.com/Shopify/liquid) です。テーマ、ページ等で、より動的なコンテンツを実現するために使用されます。

## Zendesk での Liquid の使い方

Zendesk では、Liquid を最も一般的にトリガー、オートメーション、エクステンションで利用しています。これによってより動的なメッセージ (コメント、URL 等) が可能になります。Liquid 言語は機能が豊富で頻繁に更新されるため、フル活用するための学習には時間がかかることがあります。

## 変数の埋め込み

テキスト/出力に値を挿入するには、変数/関数/値の名前を二重の波括弧で囲みます。

例として、チケット要求者の名前を出力するには、以下のスタイルに従います:

- 入力: `Greetings {{ticket.requester.name}}`
- 出力: `Greetings John Doe`

この方法で関数も使用できます。例として、自分のロールをメッセージに入れたいが大文字化されていることを保証したい場合、以下のスタイルに従います:

- 入力: `My role is {{current_user.role | capitalize }}`
- 出力: `My role is Fullstack Engineer`

## コードブロック

コードブロック (ループ、代入、条件分岐などで一般的) を使用するには、`{%` で行を始めて `%}` で終えます。

例として、チケットコメントのループを開始するには `{% for comment in ticket.comments %}` のように記述します。

## 一般的な変数

| オブジェクトタイプ | 変数 | 説明 |
|--------------------|------|------|
| Current User | `current_user` | 現在のユーザーを参照するユーザーオブジェクト |
| User | `name` | ユーザーのフルネーム |
| User | `first_name` | ユーザーの名 |
| User | `last_name` | ユーザーの姓 |
| User | `email` | ユーザーのメールアドレス |
| User | `details` | ユーザーの詳細テキストボックス |
| User | `notes` | ユーザーのノートテキストボックス |
| User | `id` | ユーザーの Zendesk ID |
| User | `organization` | ユーザーの組織オブジェクト |
| User | `custom_fields.gitlab_user_id` | ユーザーの GitLab ユーザー ID (カスタムユーザーフィールド) |
| User | `custom_fields.gitlab_username` | ユーザーの GitLab ユーザー名 (カスタムユーザーフィールド) |
| User | `custom_fields.xxxxx` | xxxxx という名前のユーザーフィールドのユーザー値 |
| Organization | `id` | 組織の Zendesk ID |
| Organization | `name` | 組織の名前 |
| Organization | `details` | 組織の詳細テキストボックス |
| Organization | `notes` | 組織のノートテキストボックス |
| Organization | `custom_fields.salesforce_id` | 組織の Salesforce ID |
| Organization | `custom_fields.arr` | 組織の ARR |
| Organization | `custom_fields.technical_account_manager` | 組織の CSM |
| Organization | `custom_fields.account_owner` | 組織の AM |
| Organization | `custom_fields.org_region.title` | 組織のリージョン |
| Organization | `custom_fields.support_level.title` | 組織のサポートレベル |
| Organization | `custom_fields.xxxxx` | xxxxx という名前の組織フィールドの組織値 |
| Agent | `name` | エージェントの名前 |
| Agent | `role` | エージェントのロール |
| Agent | `email` | エージェントのメール |
| Agent | `signature` | エージェントの署名 |
| Ticket | `assignee` | チケットの担当者 (ユーザーオブジェクト) |
| Ticket | `ccs` | チケットの CC に入っているユーザーの配列 |
| Ticket | `due_date` | チケットの期限日 (日付のみ) |
| Ticket | `due_date_with_timestamp` | チケットの期限日 (タイムスタンプ付き) |
| Ticket | `id` | チケットの Zendesk ID |
| Ticket | `in_business_hours` | チケットが現在スケジュール時間内にあるかどうかのブール値 |
| Ticket | `link` | HTTP プロトコル付きのチケット URL |
| Ticket | `requester` | チケットの要求者 (ユーザーオブジェクト) |
| Ticket | `organization` | チケットの組織 (組織オブジェクト) |
| Ticket | `status` | チケットのステータス |
| Ticket | `ticket_field_xxxxxx` | ID xxxxxx のチケットフィールドのチケット API 値 |
| Ticket | `ticket_field_option_title_xxxxxx` | ID xxxxxx のチケットフィールドのチケットドロップダウンタイトル値 |
| Ticket | `ticket_field_360019949920` | チケットの未承認ユーザーフィールド値 (Zendesk Global) |
| Ticket | `ticket_field_360017383799` | チケットの期限日ノート (Zendesk Global) |
| Ticket | `ticket_field_360012194220` | チケットのパートナートラブルシューティング値 (Zendesk Global) |
| Ticket | `ticket_field_360020735339` | チケットの CC リクエスト値 (Zendesk Global) |
| Ticket | `ticket_field_360012194200` | チケットの組織メール (パートナー) 値 (Zendesk Global) |
| Ticket | `ticket_field_360018253094` | チケットのサポート優先リージョン値 (Zendesk Global) |
| Ticket | `ticket_form` | チケットのフォーム |
| Ticket | `url` | HTTP プロトコルなしのチケット URL |
| Ticket | `title` | チケットの件名 |
| Ticket | `comments` | チケットのコメントの配列 |
| Ticket | `public_comments` | チケットのパブリックコメントの配列 |
| Satisfaction | `current_rating` | チケットの現在の満足度評価 |
| Satisfaction | `rating_section` | ユーザーへ満足度調査をリクエストするためのフォーマット済みブロック |
| Satisfaction | `current_comment` | チケットの現在の満足度コメント |

[他にも多数](https://support.zendesk.com/hc/en-us/articles/4408886858138-Zendesk-Support-placeholders-reference) 使用可能ですが、これらは GitLab で最も一般的に使用されているものです。

### チケットフィールド ID を特定する

これは多くの場合管理者レベルのアクセスが必要となるので、Customer Support Operations チームに支援を求めるのが最善です。

## 一般的な関数

| 関数 | 説明 |
|------|------|
| [slice](https://shopify.github.io/liquid/filters/slice/) | 部分文字列を返す |
| [split](https://shopify.github.io/liquid/filters/split/) | 区切り文字に基づいて文字列を配列に分割する |
| [url_encode](https://shopify.github.io/liquid/filters/url_encode/) | 文字列を URL エンコードされた文字に変換する |
| [url_decode](https://shopify.github.io/liquid/filters/url_decode/) | url_encode によってエンコードされた文字列をデコードする |
| [first](https://shopify.github.io/liquid/filters/first/) | 配列の最初の項目 |
| [last](https://shopify.github.io/liquid/filters/last/) | 配列の最後の項目 |
| [join](https://shopify.github.io/liquid/filters/join/) | 配列内の項目を結合する |
| [capitalize](https://shopify.github.io/liquid/filters/capitalize/) | 文字列の最初の文字を大文字にする |
| [upcase](https://shopify.github.io/liquid/filters/upcase/) | 文字列のすべての文字を大文字にする |
| [downcase](https://shopify.github.io/liquid/filters/downcase/) | 文字列のすべての文字を小文字にする |
| [size](https://shopify.github.io/liquid/filters/size/) | オブジェクトのサイズを返す。文字列なら文字数、配列なら項目数 |
| [lstrip](https://shopify.github.io/liquid/filters/lstrip/) | 文字列の左から空白を削除 |
| [rstrip](https://shopify.github.io/liquid/filters/rstrip/) | 文字列の右から空白を削除 |
| [strip](https://shopify.github.io/liquid/filters/strip/) | 文字列の左右両方から空白を削除 |
| [remove](https://shopify.github.io/liquid/filters/remove/) | 文字列から項目を削除 |
| [replace](https://shopify.github.io/liquid/filters/replace/) | 文字列内の項目を置換 |
| [sort](https://shopify.github.io/liquid/filters/sort/) | 配列内の項目をアルファベット順にソート |
| [truncate](https://shopify.github.io/liquid/filters/truncate/) | 文字列を短くする |
| [uniq](https://shopify.github.io/liquid/filters/uniq/) | 配列から重複する項目を削除 |

## 一般的なタグ

| タグ | 説明 |
|------|------|
| assign | 変数に値を代入する |
| blank | "nil" や "null" と同じ |
| capture | テキストを変数にキャプチャする |
| break | ループを抜ける |
| continue | ループ内の残りのコードをスキップして次のイテレーションを開始する |

## 条件文

| 条件文 | 利用可能な演算子 |
|--------|-------------------|
| if..elsif..else..endif | `==` `!=` `<>` `<` `<=` `>` `>=` `contains` `and` `or` |
| unless..endless | `==` `!=` `<>` `<` `<=` `>` `>=` `contains` `and` `or` |
| case..when..else..endcase | N/A |

## ループ

| ループ | 構文 |
|--------|------|
| for | `for x in y`, `for x in y limit:5`, `for x in y offset:3`, `for x in y reversed` |
| cycle | `cycle "apple", "banana", "cherry"` |

## 例

### ドキュメンテーション Issue 作成トリガー

これは、最新コメントの作成者・タイトル・説明を判断してドキュメンテーション Issue を作成するためにトリガーで使用しました。

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

1. チケットコメントに対する `for` ループを開始し、イテレーション数を 1 に制限する (最新のものだけを取得する意味)
1. 変数 `author` に値を代入する
   - 値はコメント作成者の GitLab ユーザー ID (カスタムユーザーフィールド) になります
1. 変数 `lines` に値を代入する
   - これは `comment` を url_encode 関数に渡して、文字列を URL セーフ形式にエンコードします
   - そして url_encode された文字列を split 関数に渡し、区切り文字 `%0A` で分割した配列にします
1. `lines` 変数に格納された配列に対する `for` ループを開始する
1. 変数 `first_five` に値を代入する
   - これは `line` を slice 関数に渡し、最初の 5 文字を返します
1. `first_five` の値が `Title` であることを条件とする `if` ブロックを宣言する
1. 変数 `title` に値を代入する
   - これは `line` を url_decode 関数に渡し、url_encode が以前行ったことを取り消します
   - これを split 関数に渡し、区切り文字 `:` で分割した配列にします
   - これを last 関数に渡し、配列の最後の項目を返します
1. `if` ブロックを終了する
1. 2 番目の `for` ループを終了する
1. 変数 `description` に値を代入する
   - これは `comment` を split 関数に渡し、区切り文字 'Description:' で分割した配列にします
   - これを last 関数に渡し、配列の最後の項目を返します
   - これを join 関数に渡し、区切り文字 `\n` で項目を結合します
1. 最初の `for` ループを終了する

### 営業時間外メッセージを表示すべきか判断する

これは、チケットが現在営業時間内かどうかに基づいてテキストブロックを表示するか判断するために使用しました。

```string
{% if ticket.in_business_hours == 'false' %}
  <li>You indicated in this ticket, #{{ticket.id}}, a "Preferred Region for Support." The current time is outside of that region's standard business hours. You can rest assured that this ticket will be addressed by the next available engineer in the selected region. It is important that you understand when you may expect a reply regarding this case. Please see the linked handbook section for more information regarding the <a href='https://about.gitlab.com/support/#effect-on-support-hours-if-a-preferred-region-for-support-is-chosen' target='_blank'>effect of using Preferred Region</a>.<br />During the course of this ticket if you require assistance outside of the selected region's standard business hours please feel free to reply asking one of our support engineers to set this ticket's preferred region to "All regions".</li>
{% endif %}
```

行ごとの内訳:

1. チケットが営業時間外であることを条件とする `if` ブロックを宣言する
1. テキストのブロックを表示する
   - これは liquid 変数 `{{ticket.id}}` 経由でチケットの ID を挿入します
1. `if` ブロックを終了する

### SSAT Issue 作成トリガー

これは、顧客が私たちに残す SSAT 評価に基づいて Issue を作成するトリガーの一部として使用しました。これは、チケットが使用しているフォームを判断し、チケットフォームに対応する GitLab Issue タグを含む変数を設定するために使用されます。

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

1. 変数 `form` に値を代入する
   - 値はチケットのフォームになります
1. スペース用の空白行 (必須ではなく、見栄えを良くするだけ)
1. `form` の値が `GitLab.com User Accounts and Login Issues` であることを条件とする `if` ブロックを宣言する
1. 変数 `form` に値を代入する
1. `form` の値が `Support for GitLab.com` であることを条件とする `elsif` ブロックを宣言する
1. 変数 `form` に値を代入する
1. `form` の値が `Support for a self-managed GitLab instance` であることを条件とする `elsif` ブロックを宣言する
1. 変数 `form` に値を代入する
1. `form` の値が `Licensing and Renewals Problems` であることを条件とする `elsif` ブロックを宣言する
1. 変数 `form` に値を代入する
1. `form` の値が `Contact the Security team` であることを条件とする `elsif` ブロックを宣言する
1. 変数 `form` に値を代入する
1. `form` の値が `Other Request` であることを条件とする `elsif` ブロックを宣言する
1. 変数 `form` に値を代入する
1. `else` ブロックを宣言する
1. 変数 `form` に値を代入する
1. `if` ブロックを終了する

## 有用なリンク

- [Liquid GitHub repo](https://github.com/Shopify/liquid)
- [Liquid documentation](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
- [Zendesk placeholders reference](https://support.zendesk.com/hc/en-us/articles/4408886858138-Zendesk-Support-placeholders-reference)

## 一般的な問題とトラブルシューティング

これは生きたセクションで、必要に応じて項目が追加されていきます。
