---
title: 'ユーザーフィールド'
description: 'Zendesk のユーザーフィールドに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/users/fields/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
lastmod: "2026-05-26T12:05:00-05:00"
translated_at: "2026-05-26T18:30:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk ユーザーフィールドの作成・編集・管理方法を説明します。管理者は [管理者タスク](#administrator-tasks) のセクションを確認してください。

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/users/fields)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/users/fields)
- `CustSuppOps Zendesk Test Suite Generator` 有効

{{% /alert %}}

## Understanding user fields

### What are user fields

ユーザーフィールドは、Zendesk のユーザープロファイルに付随するカスタムフィールドです。（チケットに表示される）チケットフィールドとは異なり、ユーザーフィールドはユーザー自身に関する情報を保存します。

### How we manage user fields

Zendesk は UI 経由でユーザーフィールドを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、設定されたレビュープロセスや、必要に応じたロールバックの実行などが可能になります。

そのため、私たちは同期リポジトリを活用しています。

### Types of user fields

GitLab で私たちが最も一般的に使用するタイプは以下のとおりです:

| 名前 | API タイプ値 | 目的 | 使用例 |
|------|----------------|---------|------------------|
| Checkbox | `checkbox` | 単一の true/false オプション | "User on PTO" |
| Date | `date` | 日付選択用 | "Expiration date" |
| Decimal | `decimal` | 小数を使用する数値用 | "ARR associated" |
| Drop-down | `dropdown` | 1 つの選択を許可するドロップダウン用 | "Highest plan level" |
| Multi-line | `textarea` | 複数行を必要とする自由形式のフィールド用 | "Account manager notes" |
| Multi-select | `multiselect` | 複数の選択を許可するドロップダウン用 | "Subscription levels purchased" |
| Numeric | `integer` | 小数を使用しない数値用 | "GitLab.com user ID" |
| Regex | `regexp` | Regex 検証が必要なテキスト形式のフィールド用 | "Salesforce contact ID" |
| Text | `text` | 自由形式のフィールド用 | "Preferred nickname" |

完全な一覧については、[Zendesk のドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types) を参照してください。

## Administrator tasks

{{% alert title="Note" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### Viewing user fields

Zendesk でユーザーフィールドを表示するには:

1. 該当する Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Configuration > User fields` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/configuration/user_fields)

注: 非アクティブなユーザーフィールドを表示したい場合は、`Filter` ボタンをクリックしてアクティブフィルターを変更する必要があるかもしれません。

### Creating a user field

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。

{{% /alert %}}

ユーザーフィールドを作成するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。具体的な内容は、ユーザーフィールドのタイプによって異なります。

**注:** 一般的なフィールドタイプのテンプレートを示しています。その他のタイプ（date、decimal、textarea、multiselect、regexp）については、`type` 属性を適宜変更し、タイプ固有の要件については [Zendesk のフィールドドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types) を参照してください。

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

ピアレビューで承認された後、MR をマージできます。次のデプロイが発生したときに、Zendesk へ同期されます。

### Editing a user field

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。

{{% /alert %}}

ユーザーフィールドを編集するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。

ピアレビューで承認された後、MR をマージできます。次のデプロイが発生したときに、Zendesk へ同期されます。

#### Changing the title of a user field

ユーザーフィールドのタイトルを変更する必要がある場合は、現在の値を `previous_title` 属性にコピーしてから `title` 属性を変更します。これにより、同期処理が更新対象のユーザーフィールドを引き続き特定できるようになります。

### Deactivating a user field

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。

{{% /alert %}}

ユーザーフィールドを無効化するには、同期リポジトリで MR を作成する必要があります。この MR で、対応するアクションに対して以下を行う必要があります:

1. ファイルを `active` フォルダーから `inactive` フォルダーへ移動します
1. `active` 属性の値を `false` に変更します

ピアレビューで承認された後、MR をマージできます。次のデプロイが発生したときに、Zendesk へ同期されます。

### Deleting a user field

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、これは Zendesk 自体で行う必要があります。

ユーザーフィールドを削除するには:

1. 該当する Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Configuration > User fields` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/configuration/user_fields)
1. 削除したいユーザーフィールドを見つけて、その名前をクリックします
   - `Filter` ボタンをクリックしてアクティブフィルターを変更する必要があるかもしれません
1. ページ右上の `Actions` をクリックします
1. `Delete` をクリックします
1. ポップアップで `Delete` をクリックして変更を送信します

### Performing an exception deployment

ユーザーフィールドの例外デプロイを実行するには、該当するユーザーフィールドの同期プロジェクトに移動し、スケジュールされたパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、ユーザーフィールドの同期ジョブがトリガーされます。

## Common issues and troubleshooting

### Not seeing user field changes after a merge

ユーザーフィールドは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行されたとき）にのみデプロイされます。
