---
title: '検索'
description: 'Zendesk 内での検索に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/searching/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、Zendesk 内で項目 (チケット、ユーザー、組織など) を検索するためのリファレンスを提供します。

## 検索の制限

検索結果が 1000 件を超えると表示される場合がありますが、UI で使用しているソート方法に基づき最初の 1000 件のみアクセスできることに注意してください。

## 基本検索 {#basic-search}

基本検索を行うには、Zendesk 内のいずれかのページの右上にある虫眼鏡アイコンをクリックします。これにより、検索を入力できるテキストボックスが表示されます。[高度な検索](#advanced-searching) で詳述する方法を使わない場合、これは入力したテキストに対して Zendesk 内の様々な項目に対し、緩いテキストマッチング (大文字小文字を区別しないファジーマッチとも知られる) を行います。

検索クエリを入力した後、キーボードの Enter / Return キーを押します。

これにより、検索結果ページが表示されます。検索結果はタブで分けられたセクションに分割されています:

- Tickets
- Articles
- Users
- Organizations

これらの検索結果を共有したい場合は、白い `Copy link` ボタンを使って、共有用に検索を再現するリンクを作成できます。

## 高度な検索 {#advanced-searching}

これは Zendesk の検索言語を使ってより具体的な情報を検索することについて説明します。すべての結果は [基本検索](#basic-search) 内のものと同じように表示されます。これは、基本検索が行う緩いテキストマッチングを超えて検索を絞り込みたい場合に最適です。

### 否定の使用

検索項目の前にマイナス記号を付けることで、否定検索を行えます。これは「NOT」スタイルの検索を行います。

例として、`spam` タグを_含まない_項目を見つけたい場合、`-tags:spam` とします。

### タグでの検索

特定のタグを持つオブジェクトを検索するには、単純に以下の構文を使用します:

`tags:tag_name`

例として、`skip_2fa_automation` タグを使用するオブジェクトを見つけるには:

`tags:skip_2fa_automation`

これに対する否定検索を行うには、前にマイナスを付けます:

`-tags:tag_name`

複数のタグを持つオブジェクトを検索したい場合は、ダブルクォートで囲みます:

`tags:"tag_name tag_name"`

例として、`gold` と `sev1` の_両方の_タグを含むすべてのオブジェクトを見つけたい場合、以下のようにします:

`tags:"gold sev1"`

### 比較演算子 {#comparison-operators}

比較演算子は以下のとおりです:

| 演算子 | 意味                  |
|:--------:|--------------------------|
| `:`      | 等しい                 |
| `<`      | より小さい                |
| `<=`     | 以下    |
| `>`      | より大きい             |
| `>=`     | 以上 |

### 組織での検索

以下の形式で組織で検索できます:

`organization:name_of_organization`

何が表示されるかはオブジェクトのタイプによって異なります:

- チケットの場合、その組織が所有するチケットが表示されます
- ユーザーの場合、その組織に関連付けられたユーザーが表示されます
- 組織の場合、その組織が表示されます

### チケット専用のメソッド

### ID での検索

ID で検索するには、検索ボックスに ID 値だけを入力して検索します。実行すると、ブラウザでチケットが開かれます。

#### 優先度での検索

チケットの優先度で検索するには、以下の構文を使います:

`priority{operator}name`

優先度名 (および順序) は次のとおりです:

1. low
1. normal
1. high
1. urgent

これらの値は上記の順序に基づいて序数的に比較されます

#### ステータスでの検索

チケットのステータスで検索するには、以下の構文を使います:

`status{operator}name`

ステータス名 (および順序) は次のとおりです:

1. new
1. open
1. pending
1. hold
1. solved
1. closed

これらの値は上記の順序に基づいて序数的に比較されます

#### 日付での検索

日付を使った検索を行うには、検索したい特定の日付オブジェクトを使用します。チケットの場合:

| オブジェクト | 関連する内容 |
|--------|-----------------|
| `created` | チケットが作成された日付 |
| `updated` | チケットの最新の更新日付 |
| `due_date` | チケットの期限チケットフィールドの値 |
| `solved` | チケットが解決された日付 (複数回 solved に移された場合は最新のもの) |

これは [比較演算子](#comparison-operators) と組み合わせて使い、`YYYY-MM-DD` という日付形式で検索を行います。

例として、2023 年 12 月 18 日以降に作成されたすべてのチケットを見つけるには、`created>2023-12-18` とします

#### カスタムチケットフィールドでの検索

カスタムチケットフィールドで検索するには、以下の形式を使います:

`custom_field_{id}:value`

ここで `{id}` はチケットフィールドの ID です。これはチケットフィールドの ID を知る必要があるため、直感的ではないかもしれません。これに最適なリソースは、チケットフィールドの ID 値を見つける支援を Customer Support Operations チームに (Slack 経由で) 求めることです。

#### 満足度評価での検索

満足度評価に基づいてチケットを検索するには、以下の形式を使います:

`satisfaction:value`

可能な値は以下のとおりです:

- bad - コメントなしの不満足評価
- badwithcomment - コメントありの不満足評価
- good - コメントなしの満足評価
- goodwithcomment - コメントありの満足評価
- offered - 調査が送信されたが回答されていない

#### 提出者での検索

チケットの提出者で検索するには、以下の形式を使います:

`submitter:search`

ここで `search` は以下のいずれかです:

- ユーザーのメール
- ユーザーの名前
- ユーザーの ID
- 用語 `me` (自分自身を検索)

#### 依頼者での検索

チケットの依頼者で検索するには、以下の形式を使います:

`requester:search`

ここで `search` は以下のいずれかです:

- ユーザーのメール
- ユーザーの名前
- ユーザーの ID
- 用語 `me` (自分自身を検索)

#### 担当者での検索

チケットの担当者で検索するには、以下の形式を使います:

`assignee:search`

ここで `search` は以下のいずれかです:

- エージェントのメール
- エージェントの名前
- エージェントの ID
- 用語 `me` (自分自身を検索)

### 組織専用のメソッド

#### カスタム組織フィールドでの検索

カスタム組織フィールドで検索するには、以下の形式を使います:

`field_api_name{operator}query`

一般的な組織フィールド API 名は以下のとおりです:

| フィールド                       | 用途                                   | Zendesk インスタンス |
|-----------------------------|--------------------------------------------------|------------------|
| `account_owner` | 組織のアカウントマネージャー | 両方 |
| `aar` | 組織の年間経常収益 (ARR) | Global |
| `arr` | 組織の年間経常収益 (ARR) | US Government |
| `assigned_se` | 組織に割り当てられたサポートエンジニアのユーザー ID | Global |
| `technical_account_manager` | 組織のカスタマーサクセスマネージャー | 両方 |
| `support_level` | 組織の最高サポートレベル | 両方 |
| `health_score` | 組織の Gainsight ヘルススコア | 両方 |
| `seats_decimal` | 組織のライセンスシート最大数 | Global |
| `number_of_seats` | 組織のライセンスシート最大数 | US Government |
| `salesforce_id` | 組織の 18 文字の Salesforce アカウント ID | 両方 |
| `sfdc_short_id` | 組織の 15 文字の Salesforce アカウント ID | 両方 |
| `solutions_architect` | 組織のソリューションアーキテクト | US Government |

例:

ARR が 1000 未満の組織を検索する:

`aar<1000`

### ユーザー専用のメソッド

#### メールでの検索

ユーザーをメールで見つけるには、以下の形式を使います:

`email:email_address`

例として、`jcolyer@example.com` というメールを持つ Zendesk のユーザーを見つけるには、`email:jcolyer@example.com` とします

#### カスタムユーザーフィールドでの検索

カスタムユーザーフィールドで検索するには、以下の形式を使います:

`field_api_name:query`

一般的なユーザーフィールド API 名は以下のとおりです:

- `gitlab_username` - エージェントの GitLab.com ユーザー名
- `gitlab_user_id` - エージェントの GitLab.com ユーザー ID

例として、GitLab.com のユーザー名が jcolyer のユーザーを見つけるには:

`gitlab_username:jcolyer`

### 高度な検索項目の組み合わせ

複数の高度な検索項目をスペースで区切ることで、より絞り込まれた検索を作成できます。

例として、`customer` タグを含み、ステータスが `new` のすべてのチケットを見つけるには `tags:customer status:new` とします。

### 例

#### 例 1

タスク:

- サポートの優先地域は AMER (ID 値 `360018253094` を使うカスタムフィールド)
- 組織のサポートレベルは ultimate
- 満足度評価は不満足 (コメントあり)

`custom_field_360018253094:americas__usa tags:ultimate satisfaction:badwithcomment`

#### 例 2

タスク:

- new、solved、closed を除くすべてのチケットステータス
- 担当者は Jason
- SaaS Account 問題タイプは Namesquatting (ID 値 `360011793260` を使うカスタムフィールド)

`-status:new -status:solved -status:closed assignee:Jason custom_field_360011793260:namesquatting_requests`

#### 例 3 {#example-3}

タスク:

- Salesforce ID に基づいて Zendesk で組織を見つける

Salesforce アカウントには実は 2 つの形式の ID があり、標準の 18 文字の値と短縮された 15 文字の値です。Zendesk 組織にはその_両方_の値が含まれているため、どちらかを使ってアカウントを見つけることができます:

- 18 文字の ID 値に基づく場合:
  `salesforce_id:ABCDEFGH0123456789`
- 15 文字の ID 値に基づく場合:
  `sfdc_short_id:ABCDEFGH0123456`

アスタリスクを使ってワイルドカード検索を行うこともできます。15 文字の値を持っている場合、以下のようにすることもできます:

`salesforce_id:ABCDEFGH0123456*`

#### 例 4

タスク:

- アカウントの Salesforce ID に基づいて L&R IR チケットを見つける

[例 3](#example-3) で詳述したように、特定の Salesforce アカウントには 2 つの値があります。L&R IR では、それが提出された Salesforce アカウントを見つけるためのカスタムフィールドがありますが、2 つのうちどちらが使われたかを知るのは困難です。そのため、ワイルドカード検索で 15 文字の値を使うのが最良です。18 文字の値しか持っていない場合は、ID から最後の 3 文字を削除します (例えば `ABCDEFGH0123456789` の場合、最後の 3 文字を削除して `ABCDEFGH0123456` にします)。これを使い、(調べている Zendesk インスタンスに応じて) 以下の検索のいずれかを行います:

- Zendesk Global:
  `custom_field_6978327875612:ABCDEFGH0123456*`
- Zendesk US Government:
  `custom_field_11717220820372:ABCDEFGH0123456*`

## 便利なリンク

- [Zendesk 検索リファレンス](https://support.zendesk.com/hc/en-us/articles/4408886879258-Zendesk-Support-search-reference)

## よくある問題とトラブルシューティング

このセクションは必要に応じて項目が追加されていく生きたセクションです。
