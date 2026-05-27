---
title: '検索'
description: 'Zendesk 内での検索に関するドキュメント'
date: 2025-12-26
upstream_path: /handbook/security/customer-support-operations/zendesk/searching/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、Zendesk 内で項目（チケット、ユーザー、組織など）を検索するためのリファレンスを提供します。

## 検索の制限

検索結果が 1000 件を超えると表示される場合がありますが、（UI で使用しているソート方法に基づき）最初の 1000 件のみアクセスできることに注意してください。

## 基本検索 {#basic-search}

基本検索を行うには、Zendesk 内の任意のページの右上にある虫眼鏡アイコンをクリックします。これにより、検索を入力できるテキストボックスが表示されます。[アドバンスド検索](#advanced-searching)で詳述する方法を使用しない場合、これは入力したテキストに対して Zendesk のさまざまな項目とのゆるいテキストマッチ（ファジーかつ大文字小文字を区別しないマッチとも呼ばれます）を行います。

検索クエリを入力したら、キーボードの enter/return キーを押します。

これにより検索結果ページが表示されます。検索結果はタブ付きのセクションに分かれています。

- Tickets
- Articles
- Users
- Organizations

これらの検索結果を共有したい場合は、白い `Copy link` ボタンを使用して、共有用に検索を再現するリンクを作成できます。

## アドバンスド検索 {#advanced-searching}

これは、Zendesk の検索言語を使用してより具体的な情報を検索する方法を扱います。すべての結果は、[基本検索](#basic-search)の結果とほぼ同様に表示されます。これは、基本検索が行うゆるいテキストマッチを超えて検索を絞り込む必要がある場合に最適です。

### 否定の使用

検索項目の前にマイナス記号を付けることで、否定による検索ができます。これにより、その項目に対して「NOT」スタイルの検索を行います。

例として、`spam` タグを含ま *ない* 項目を見つけたい場合は、`-tags:spam` とします。

### タグによる検索

特定のタグを持つオブジェクトを検索するには、次の構文を使用するだけです。

`tags:tag_name`

例として、`skip_2fa_automation` タグを使用しているオブジェクトを見つけるには、次のようにします。

`tags:skip_2fa_automation`

前にマイナスを付けることで、この否定を検索できます。

`-tags:tag_name`

複数のタグを持つオブジェクトを検索したい場合は、それらをダブルクォートで囲みます。

`tags:"tag_name tag_name"`

例として、`gold` と `sev1` の *両方の* タグを含むすべてのオブジェクトを見つけたい場合は、次のようにします。

`tags:"gold sev1"`

### 比較演算子 {#comparison-operators}

比較演算子は次のとおりです。

| 演算子 | 意味                  |
|:--------:|--------------------------|
| `:`      | 等しい                 |
| `<`      | より小さい                |
| `<=`     | 以下    |
| `>`      | より大きい             |
| `>=`     | 以上 |

### 組織による検索

次の形式を使用して組織で検索できます。

`organization:name_of_organization`

これで表示されるものはオブジェクトの種類によって異なります。

- チケットの場合、その組織が所有するチケットを表示します
- ユーザーの場合、その組織に関連付けられたユーザーを表示します
- 組織の場合、その組織を表示します

### チケット専用の方法

### ID による検索

ID で検索するには、検索ボックスに ID の値を（単独で）入力して検索するだけです。そうすると、ブラウザでチケットが開きます。

#### 優先度による検索

チケットの優先度で検索するには、次の構文を使用します。

`priority{operator}name`

優先度の名前（と順序）は次のとおりです。

1. low
1. normal
1. high
1. urgent

これらの値は上記の順序に基づいて序数的に比較されます。

#### ステータスによる検索

チケットのステータスで検索するには、次の構文を使用します。

`status{operator}name`

ステータスの名前（と順序）は次のとおりです。

1. new
1. open
1. pending
1. hold
1. solved
1. closed

これらの値は上記の順序に基づいて序数的に比較されます。

#### 日付による検索

日付を使用して検索するには、検索したい特定の日付オブジェクトを使用します。チケットの場合は次のとおりです。

| オブジェクト | 紐づくもの |
|--------|-----------------|
| `created` | チケットが作成された日付 |
| `updated` | チケットの直近の更新の日付 |
| `due_date` | チケットの期限チケットフィールドの値 |
| `solved` | チケットが解決された日付（複数回 solved に移動した場合は直近のもの） |

これを[比較演算子](#comparison-operators)と組み合わせて、`YYYY-MM-DD` の日付形式を使用して検索を行います。

例として、2023 年 12 月 18 日以降に作成されたすべてのチケットを見つけるには、`created>2023-12-18` とします。

#### カスタムチケットフィールドによる検索

カスタムチケットフィールドで検索するには、次の形式を使用します。

`custom_field_{id}:value`

ここで `{id}` はチケットフィールド ID です。これはチケットフィールド ID を知っている必要があるため、直感的でない場合があります。これに最適なリソースは、チケットフィールドの ID 値を見つける手助けについて Customer Support Operations チームに（Slack 経由で）相談することです。

#### 満足度評価による検索

満足度評価に基づいてチケットを見つけるには、次の形式を使用します。

`satisfaction:value`

可能な値は次のとおりです。

- bad - コメントなしの低評価
- badwithcomment - コメントありの低評価
- good - コメントなしの高評価
- goodwithcomment - コメントありの高評価
- offered - アンケートは送信されたが回答されていない

#### 送信者による検索

チケットの送信者で検索するには、次の形式を使用します。

`submitter:search`

ここで `search` は次のいずれかにできます。

- ユーザーのメール
- ユーザーの名前
- ユーザーの ID
- `me` という用語（自分自身を検索します）

#### 依頼者による検索

チケットの依頼者で検索するには、次の形式を使用します。

`requester:search`

ここで `search` は次のいずれかにできます。

- ユーザーのメール
- ユーザーの名前
- ユーザーの ID
- `me` という用語（自分自身を検索します）

#### 担当者による検索

チケットの担当者で検索するには、次の形式を使用します。

`assignee:search`

ここで `search` は次のいずれかにできます。

- エージェントのメール
- エージェントの名前
- エージェントの ID
- `me` という用語（自分自身を検索します）

### 組織専用の方法

#### カスタム組織フィールドによる検索

カスタム組織フィールドで検索するには、次の形式を使用します。

`field_api_name{operator}query`

一般的な組織フィールドの API 名は次のとおりです。

| フィールド                       | 用途                                   | Zendesk インスタンス |
|-----------------------------|--------------------------------------------------|------------------|
| `account_owner` | 組織の Account Manager | 両方 |
| `aar` | 組織の年間経常収益（ARR） | Global |
| `arr` | 組織の年間経常収益（ARR） | US Government |
| `assigned_se` | 組織の Assigned Support Engineer のユーザー ID | Global |
| `technical_account_manager` | 組織の Customer Success Manager | 両方 |
| `support_level` | 組織の最高サポートレベル | 両方 |
| `health_score` | 組織の Gainsight ヘルススコア | 両方 |
| `seats_decimal` | 組織の最大ライセンスシート数 | Global |
| `number_of_seats` | 組織の最大ライセンスシート数 | US Government |
| `salesforce_id` | 組織の 18 文字の Salesforce アカウント ID | 両方 |
| `sfdc_short_id` | 組織の 15 文字の Salesforce アカウント ID | 両方 |
| `solutions_architect` | 組織の Solutions Architect | US Government |

例:

ARR が 1000 未満の組織を検索する場合:

`aar<1000`

### ユーザー専用の方法

#### メールによる検索

ユーザーをメールで見つけるには、次の形式を使用します。

`email:email_address`

例として、Zendesk で `jcolyer@example.com` というメールを持つユーザーを見つけるには、`email:jcolyer@example.com` とします。

#### カスタムユーザーフィールドによる検索

カスタムユーザーフィールドで検索するには、次の形式を使用します。

`field_api_name:query`

一般的なユーザーフィールドの API 名は次のとおりです。

- `gitlab_username` - エージェントの GitLab.com ユーザー名
- `gitlab_user_id` - エージェントの GitLab.com ユーザー ID

例として、GitLab.com のユーザー名が jcolyer のものを見つけるには、次のようにします。

`gitlab_username:jcolyer`

### アドバンスド検索項目の組み合わせ

複数のアドバンスド検索項目をスペースで区切ることで組み合わせ、より絞り込んだ検索を作成できます。

例として、`customer` タグを含み、ステータスが `new` のすべてのチケットを見つけるには、`tags:customer status:new` とします。

### 例

#### 例 1

タスク:

- 優先サポート地域が AMER（ID 値 `360018253094` を使用するカスタムフィールド）
- 組織のサポートレベルが ultimate
- 満足度評価が低評価（かつコメントあり）

`custom_field_360018253094:americas__usa tags:ultimate satisfaction:badwithcomment`

#### 例 2

タスク:

- new、solved、closed を除くすべてのチケットステータス
- 担当者が Jason
- SaaS Account の問題タイプが Namesquatting（ID 値 `360011793260` を使用するカスタムフィールド）

`-status:new -status:solved -status:closed assignee:Jason custom_field_360011793260:namesquatting_requests`

#### 例 3

タスク:

- Salesforce ID に基づいて Zendesk の組織を見つける

Salesforce アカウントには実際には 2 つの形式の ID があり、標準の 18 文字の値と短縮された 15 文字の値です。Zendesk の組織には *両方の* 値が含まれているため、どちらを使ってもアカウントを見つけられます。

- 18 文字の ID 値に基づく場合:
  `salesforce_id:ABCDEFGH0123456789`
- 15 文字の ID 値に基づく場合:
  `sfdc_short_id:ABCDEFGH0123456`

アスタリスクを使用してワイルドカード検索を利用することもできます。そのため、15 文字の値を持っている場合は、次のようにもできます。

`salesforce_id:ABCDEFGH0123456*`

#### 例 4

タスク:

- アカウントの Salesforce ID に基づいて L&R IR チケットを見つける

[例 3](#example-3)で詳述したとおり、所与の Salesforce アカウントには持ち得る値が 2 つあります。L&R IR には、それが提出された Salesforce アカウントを見つけるために使用できるカスタムフィールドがありますが、2 つのうちどちらが使用されたかを知るのは難しい場合があります。そのため、15 文字の値をワイルドカード検索で使用するのが最善です。18 文字の値しかない場合は、ID から末尾の 3 文字を削除します（つまり、`ABCDEFGH0123456789` だった場合、末尾の 3 文字を削除して `ABCDEFGH0123456` にします）。それを使って、次のいずれかの検索を行います（どの Zendesk インスタンスを見ているかに応じて）。

- Zendesk Global:
  `custom_field_6978327875612:ABCDEFGH0123456*`
- Zendesk US Government:
  `custom_field_11717220820372:ABCDEFGH0123456*`

## 役立つリンク

- [Zendesk 検索リファレンス](https://support.zendesk.com/hc/en-us/articles/4408886879258-Zendesk-Support-search-reference)

## よくある問題とトラブルシューティング

これは生きたセクションであり、必要に応じて項目が追加されます。
