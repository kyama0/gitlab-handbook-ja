---
title: 'ユーザーフィールド'
description: 'Zendesk ユーザーフィールドに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/users/fields/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T07:33:00+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk ユーザーフィールドを作成、編集、管理する方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/users/fields)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/users/fields)
- `CustSuppOps Zendesk Test Suite Generator` が有効

{{% /alert %}}

## ユーザーフィールドを理解する

### ユーザーフィールドとは

ユーザーフィールドは、Zendesk のユーザープロフィールに添付されるカスタムフィールドです。チケットに表示されるチケットフィールドとは異なり、ユーザーフィールドにはユーザー自身に関する情報が保存されます。

### ユーザーフィールドの管理方法

Zendesk は UI を通じてユーザーフィールドを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバックの実行などが可能になります。

このため、同期リポジトリを使用しています。

### ユーザーフィールドの種類

GitLab で最もよく使用する種類は次のとおりです:

| 名前 | API タイプ値 | 目的 | 使用例 |
|------|----------------|---------|------------------|
| チェックボックス | `checkbox` | 単一の true/false オプション | 「PTO 中のユーザー」 |
| 日付 | `date` | 日付選択用 | 「有効期限」 |
| 小数 | `decimal` | 小数を使用する数値用 | 「関連する ARR」 |
| ドロップダウン | `dropdown` | 1 つの選択を許可するドロップダウン用 | 「最高プランレベル」 |
| 複数行 | `textarea` | 複数行が必要な自由形式フィールド用 | 「アカウントマネージャーのメモ」 |
| 複数選択 | `multiselect` | 複数選択を許可するドロップダウン用 | 「購入済みサブスクリプションレベル」 |
| 数値 | `integer` | 小数を使用しない数値用 | 「GitLab.com ユーザー ID」 |
| 正規表現 | `regexp` | Regex 検証が必要なテキスト形式フィールド用 | 「Salesforce 連絡先 ID」 |
| テキスト | `text` | 自由形式フィールド用 | 「希望するニックネーム」 |

完全な一覧については、[Zendesk のドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types)を参照してください

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### ユーザーフィールドを表示する

Zendesk のユーザーフィールドを表示するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Configuration > User fields` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/configuration/user_fields)

注記: 非アクティブなユーザーフィールドを表示する場合は、`Filter` ボタンをクリックしてアクティブなフィルターを変更する必要がある場合があります

### ユーザーフィールドを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。

{{% /alert %}}

ユーザーフィールドを作成するには、同期リポジトリで MR を作成する必要があります。正確な変更内容はリクエスト自体によって異なります。正確なコンテンツはユーザーフィールドの種類によって異なる場合があります。

**注記:** 一般的なフィールドタイプのテンプレートを表示します。その他のタイプ（date、decimal、textarea、multiselect、regexp）では、`type` 属性を適宜変更し、タイプ固有の要件について[Zendesk フィールドのドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types)を参照してください。

**ヒント:** 下の各フィールドタイプをクリックすると、テンプレートが表示されます。

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

ピアが MR をレビューして承認した後、MR をマージできます。次回のデプロイ時に Zendesk に同期されます。

### ユーザーフィールドを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。

{{% /alert %}}

ユーザーフィールドを編集するには、同期リポジトリで MR を作成する必要があります。正確な変更内容はリクエスト自体によって異なります。

ピアが MR をレビューして承認した後、MR をマージできます。次回のデプロイ時に Zendesk に同期されます。

#### ユーザーフィールドのタイトルを変更する

ユーザーフィールドのタイトルを変更する必要がある場合は、現在の値を `previous_title` 属性にコピーしてから、`title` 属性を変更します。これにより、同期は更新対象のユーザーフィールドを引き続き特定できます。

### ユーザーフィールドを無効化する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。

{{% /alert %}}

ユーザーフィールドを無効化するには、同期リポジトリで MR を作成する必要があります。この MR では、対応するアクションに対して次の操作を行う必要があります:

1. ファイルを `active` フォルダーから `inactive` フォルダーに移動します
1. `active` 属性の値を `false` に変更します

ピアが MR をレビューして承認した後、MR をマージできます。次回のデプロイ時に Zendesk に同期されます。

### ユーザーフィールドを削除する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。

{{% /alert %}}

同期リポジトリは削除を実行しないため、Zendesk 自体から削除する必要があります。

ユーザーフィールドを削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Configuration > User fields` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/configuration/user_fields)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/configuration/user_fields)
1. 削除するユーザーフィールドを見つけて名前をクリックします
   - `Filter` ボタンをクリックしてアクティブなフィルターを変更する必要がある場合があります
1. ページ右上の `Actions` をクリックします
1. `Delete` をクリックします
1. ポップアップで `Delete` をクリックして変更を送信します

### 例外デプロイを実行する

ユーザーフィールドの例外デプロイを実行するには、該当するユーザーフィールド同期プロジェクトに移動し、スケジュールパイプラインページで同期項目の再生ボタンをクリックします。これにより、ユーザーフィールドの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にユーザーフィールドの変更が表示されない

ユーザーフィールドは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行された場合）にのみデプロイされます
