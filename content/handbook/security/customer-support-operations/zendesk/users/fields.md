---
title: 'ユーザーフィールド'
description: 'Zendesk のユーザーフィールドに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/users/fields/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、GitLab における Zendesk のユーザーフィールドの作成、編集、管理方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/users/fields)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/users/fields)
- `CustSuppOps Zendesk Test Suite Generator` を有効化

{{% /alert %}}

## ユーザーフィールドを理解する

### ユーザーフィールドとは

ユーザーフィールドは、Zendesk のユーザープロファイルに関連付けられたカスタムフィールドです。チケットフィールド（チケット上に表示される）とは異なり、ユーザーフィールドはユーザー自身に関する情報を保存します。

### ユーザーフィールドの管理方法

Zendesk は UI を通じてユーザーフィールドを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセスや、必要に応じてロールバックを行う能力などが得られます。

そのため、同期リポジトリを利用しています。

### ユーザーフィールドのタイプ

GitLab で最もよく使うタイプは以下のとおりです。

| 名前 | API type 値 | 用途 | 使用例 |
|------|----------------|---------|------------------|
| Checkbox | `checkbox` | 単一の true/false オプション | "User on PTO" |
| Date | `date` | 日付選択用 | "Expiration date" |
| Decimal | `decimal` | 小数を含む数値用 | "ARR associated" |
| Drop-down | `dropdown` | 1 つの選択を許可するドロップダウン用 | "Highest plan level" |
| Multi-line | `textarea` | 複数行が必要なフリースタイルフィールド用 | "Account manager notes" |
| Multi-select | `multiselect` | 複数の選択を許可するドロップダウン用 | "Subscription levels purchased" |
| Numeric | `integer` | 小数を含まない数値用 | "GitLab.com user ID" |
| Regex | `regexp` | 正規表現の検証が必要なテキストスタイルフィールド用 | "Salesforce contact ID" |
| Text | `text` | フリースタイルフィールド用 | "Preferred nickname" |

完全なリストについては、[Zendesk のドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types)を参照してください。

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### ユーザーフィールドを表示する

Zendesk でユーザーフィールドを表示するには:

1. Zendesk インスタンスの管理ダッシュボードに移動
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Configuration > User fields` に移動
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/configuration/user_fields)

注意: 非アクティブのユーザーフィールドを表示したい場合は、`Filter` ボタンをクリックしてアクティブフィルターを変更する必要がある場合があります。

### ユーザーフィールドを作成する

{{% alert title="警告" color="warning" %}}

- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成して標準プロセスを通してから対応してください。

{{% /alert %}}

ユーザーフィールドを作成するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容は依頼自体によって異なります。具体的な内容はユーザーフィールドのタイプによって異なる場合があります。

**注意:** 一般的なフィールドタイプ向けのテンプレートを示します。その他のタイプ（date、decimal、textarea、multiselect、regexp）については、`type` 属性をそれに応じて変更し、タイプ固有の要件については [Zendesk フィールドのドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types)を参照してください。

**ヒント:** 以下の各フィールドタイプをクリックすると、そのテンプレートが表示されます。

<details>
<summary>checkbox</summary>

```yaml
---
title: 'Your Title Here'
previous_title: 'Your Title Here'
description: 'Your description here'
type: 'checkbox'
active: true
position: 1 # Integer representing user field position, controls display order in user profile (lower numbers appear first)
tag: 'tag_to_add_when_checked' # Added onto the user when the checkbox is checked
regexp_for_validation: null # Always null unless "regexp"
custom_field_options: null # Always null unless "dropdown" or "multiselect"
```

</details>
<details>
<summary>text</summary>

```yaml
---
title: 'Your Title Here'
previous_title: 'Your Title Here'
description: 'Your description here'
type: 'text'
active: true
position: 1 # Integer representing user field position, controls display order in user profile (lower numbers appear first)
regexp_for_validation: null # Always null unless "regexp"
custom_field_options: null # Always null unless "dropdown" or "multiselect"
```

</details>
<details>
<summary>integer</summary>

```yaml
---
title: 'Your Title Here'
previous_title: 'Your Title Here'
description: 'Your description here'
type: 'integer'
active: true
position: 1 # Integer representing user field position, controls display order in user profile (lower numbers appear first)
regexp_for_validation: null # Always null unless "regexp"
custom_field_options: null # Always null unless "dropdown" or "multiselect"
```

</details>
<details>
<summary>dropdown</summary>

```yaml
---
title: 'Your Title Here'
previous_title: 'Your Title Here'
description: 'Your description here'
type: 'dropdown'
active: true
position: 1 # Integer representing user field position, controls display order in user profile (lower numbers appear first)
regexp_for_validation: null # Always null unless "regexp"
custom_field_options:
- name: 'Name of option'
  value: 'tag_option_uses'
- name: 'Name of option 2'
  value: 'tag_option_uses_2'
```

</details>

ピアによるレビューと承認後、MR をマージできます。次のデプロイ時に、Zendesk に同期されます。

### ユーザーフィールドを編集する

{{% alert title="警告" color="warning" %}}

- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成して標準プロセスを通してから対応してください。

{{% /alert %}}

ユーザーフィールドを編集するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容は依頼自体によって異なります。

ピアによるレビューと承認後、MR をマージできます。次のデプロイ時に、Zendesk に同期されます。

#### ユーザーフィールドのタイトルを変更する

ユーザーフィールドのタイトルを変更する必要がある場合、現在の値を `previous_title` 属性にコピーしてから `title` 属性を変更します。これにより、同期は更新対象のユーザーフィールドを引き続き特定できます。

### ユーザーフィールドを非アクティブ化する

{{% alert title="警告" color="warning" %}}

- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成して標準プロセスを通してから対応してください。

{{% /alert %}}

ユーザーフィールドを非アクティブ化するには、同期リポジトリで MR を作成する必要があります。この MR では、対応するアクションに対して以下を行います。

1. ファイルを `active` フォルダから `inactive` フォルダに移動
1. `active` 属性の値を `false` に変更

ピアによるレビューと承認後、MR をマージできます。次のデプロイ時に、Zendesk に同期されます。

### ユーザーフィールドを削除する

{{% alert title="警告" color="warning" %}}

- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成して標準プロセスを通してから対応してください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、これは Zendesk 自体経由で行う必要があります。

ユーザーフィールドを削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Configuration > User fields` に移動
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/configuration/user_fields)
1. 削除したいユーザーフィールドを見つけて名前をクリック
   - `Filter` ボタンをクリックしてアクティブフィルターを変更する必要がある場合があります
1. ページ右上の `Actions` をクリック
1. `Delete` をクリック
1. ポップアップの `Delete` をクリックして変更を送信

### 例外デプロイを実施する

ユーザーフィールドの例外デプロイを実施するには、対象のユーザーフィールド同期プロジェクトに移動し、スケジュールパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これによりユーザーフィールドの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にユーザーフィールドの変更が見えない

ユーザーフィールドは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実施された場合）にのみデプロイされます。
