---
title: '組織フィールド'
description: 'Zendesk 組織フィールドに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/organizations/fields/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
lastmod: "2026-05-26T12:05:00-05:00"
translated_at: "2026-05-26T00:00:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk 組織フィールドの作成、編集、管理方法について説明します。管理者は [管理者タスク](#administrator-tasks) セクションを確認してください。

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/organizations/fields)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/organizations/fields)
- `CustSuppOps Zendesk Test Suite Generator` を有効化

{{% /alert %}}

## 組織フィールドを理解する

### 組織フィールドとは

組織フィールドは、Zendesk の組織に紐付くカスタムフィールドです。（チケットに表示される）チケットフィールドとは異なり、組織フィールドは組織そのものに関する情報を保存します。

### 組織フィールドの管理方法

Zendesk は UI を通じて組織フィールドを管理する完全な方法を提供していますが、私たちはより厳密にバージョン管理された方法論を採用しています。これにより、定められたレビュープロセスや、必要に応じたロールバックの実行などが可能になります。

そのため、私たちは同期リポジトリを利用しています。

### 組織フィールドのタイプ

GitLab で最もよく使用するタイプは次のとおりです:

| 名前 | API タイプ値 | 目的 | 使用例 |
|------|----------------|---------|------------------|
| Checkbox | `checkbox` | 単一の true/false オプション | 「Self-Managed - Ultimate entitlement」 |
| Date | `date` | 日付選択用 | 「Expiration date」 |
| Decimal | `decimal` | 小数を使用する数値用 | 「ARR associated」 |
| Drop-down | `dropdown` | 1 つの選択を許可するドロップダウン用 | 「Highest plan level」 |
| Multi-select | `multiselect` | 複数の選択を許可するドロップダウン用 | 「Subscription levels purchased」 |
| Numeric | `integer` | 小数を使用しない数値用 | 「Number of seats」 |
| Regex | `regexp` | 正規表現による検証が必要なテキスト形式のフィールド用 | 「Salesforce contact ID」 |
| Text | `text` | 自由形式のフィールド用 | 「Account Manager」 |

完全なリストについては、[Zendesk ドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types) を参照してください。

### 現在の組織フィールド

現在のフィールドについて、データのソースは次の 3 つの領域のいずれかです:

- Salesforce: データが Salesforce アカウントから直接来ることを意味します
- Zendesk-Salesforce 同期: データが [Zendesk-Salesforce 同期](/handbook/security/customer-support-operations/zendesk-salesforce-sync/) を通じて決定されることを意味します
- エージェント: エージェントによって（通常は内部リクエストフォームを通じて）リクエストされることを意味します

<details>
<summary>Zendesk Global の場合</summary>

| API キー値 | フィールド名 | タイプ | 目的 | 値のソース |
|---------------|------------|------|---------|-----------------|
| `account_owner` | Account Owner | Text | Account Manager (AM) の名前を表示する | Salesforce |
| `account_type` | Account Type | Drop-down | アカウントのタイプを表示する | Salesforce |
| `am_project_id` | AM Project ID | Text | コラボレーションプロジェクトの gitlab.com プロジェクト ID | エージェント |
| `aar` | ARR | Decimal | アカウントの Annual Recurring Revenue (ARR) | Salesforce |
| `assigned_se` | Assigned SE | Text | Assigned Support Engineer (ASE) の Zendesk ユーザー ID | エージェント |
| `technical_account_manager` | Customer Success Manager | Text | Customer Success Manager (CSM) の名前 | Salesforce |
| `migration_date` | Date to Migrate | Date | 組織が別のインスタンスに移行する日付 | Zendesk-Salesforce 同期 |
| `org_in_escalated_state` | Escalated State | Checkbox | 組織がエスカレーション状態にあるか | Salesforce |
| `expiration_date` | Expiration date | Text | サブスクリプションの最新の有効期限 | Salesforce |
| `support_level` | GitLab Plan | Drop-down | サブスクリプションの最上位プラン | Salesforce |
| `ignore_deletion` | Ignore deletion | Checkbox | 削除プロセスがこの組織をスキップすべきか | Zendesk-Salesforce 同期 |
| `mark_for_deletion` | Mark for deletion | Checkbox | 削除プロセスがこの組織をレビューすべきか | Zendesk-Salesforce 同期 |
| `migrating` | Migrating | Checkbox | 組織が新しいインスタンスに移行中か | Zendesk-Salesforce 同期 |
| `seats_decimal` | Number of Seats | Decimal | サブスクリプションの最大シート数 | Salesforce |
| `partner_customer` | Partner Customer | Checkbox | アカウントが OEM パートナー由来か | Zendesk-Salesforce 同期 |
| `org_region` | Region | Drop-down | 組織が属するリージョン | Salesforce |
| `restricted_account` | Restricted Account | Checkbox | アカウントに法的制限があるか | Salesforce |
| `salesforce_id` | Salesforce ID | Text | 18 文字の Salesforce アカウント ID | Salesforce |
| `sales_segmentation` | Sales Segmentation | Text | アカウントの規模（従業員数に基づく） | Salesforce |
| `sfdc_short_id` | SFDC Short ID | Text | 15 文字の Salesforce アカウント ID | Salesforce |
| `solutions_architect` | Solutions Architect | Text | Solutions Architect (SA) の名前を表示する | Salesforce |
| `sub_edu` | Subscription: Community - EDU | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_oss` | Subscription: Community - OSS | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_community_other` | Subscription: Community - Other | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_consumption_cicd_minutes` | Subscription: Consumption - CI_CD Minutes | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_consumption_eap` | Subscription: Consumption - Enterprise Agile Planning | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_consumption_duo_enterprise` | Subscription: Consumption - GitLab Duo Enterprise | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_consumption_duo_amazon_q` | Subscription: Consumption - GitLab Duo powered by Amazon Q | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_consumption_duo_premium` | Subscription: Consumption - GitLab Duo Premium | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_consumption_storage` | Subscription: Consumption - Storage | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_dotcom_premium` | Subscription: GitLab.com - Premium | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_dotcom_ultimate` | Subscription: GitLab.com - Ultimate | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_gitlab_dedicated` | Subscription: GitLab Dedicated | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_sm_premium` | Subscription: Self-Managed - Premium | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_sm_ultimate` | Subscription: Self-Managed - Ultimate | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_ss_ase` | Subscription: Support Services - ASE | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_ss_growth` | Subscription: Support Services - Success Advanced | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_ss_enterprise` | Subscription: Support Services - Success Signature | Checkbox | エンタイトルメント情報 | Salesforce |
| `support_hold` | Support Hold | Checkbox | アカウントに保留があるか | Salesforce |

</details>
<details>
<summary>Zendesk US Government の場合</summary>

| API キー値 | フィールド名 | タイプ | 目的 | 値のソース |
|---------------|------------|------|---------|-----------------|
| `emergency_support_24x7` | 24x7 Emergency Support | Checkbox | 24x7 エンタイトルメントを持っているか | Zendesk-Salesforce 同期 |
| `account_owner` | Account Owner | Text | Account Manager (AM) の名前を表示する | Salesforce |
| `account_type` | Account Type | Drop-down | アカウントのタイプを表示する | Salesforce |
| `am_project_id` | AM Project ID | Integer | コラボレーションプロジェクトの gitlab.com プロジェクト ID | エージェント |
| `arr` | ARR | Decimal | アカウントの Annual Recurring Revenue (ARR) | Salesforce |
| `assigned_se` | Assigned SE | Text | Assigned Support Engineer (ASE) の Zendesk ユーザー ID | エージェント |
| `technical_account_manager` | Customer Success Manager | Text | Customer Success Manager (CSM) の名前 | Salesforce |
| `migration_date` | Date to Migrate | Date | 組織が別のインスタンスに移行する日付 | Zendesk-Salesforce 同期 |
| `org_in_escalated_state` | Escalated State | Checkbox | 組織がエスカレーション状態にあるか | Salesforce |
| `expiration_date` | Expiration Date | Text | サブスクリプションの最新の有効期限 | Salesforce |
| `ignore_deletion` | Ignore deletion | Checkbox | 削除プロセスがこの組織をスキップすべきか | Zendesk-Salesforce 同期 |
| `market_segment` | Market Segment | Text | アカウントの規模（従業員数に基づく） | Salesforce |
| `mark_for_deletion` | Mark for deletion | Checkbox | 削除プロセスがこの組織をレビューすべきか | Zendesk-Salesforce 同期 |
| `migrating` | Migrating | Checkbox | 組織が新しいインスタンスに移行中か | Zendesk-Salesforce 同期 |
| `number_of_seats` | Number of Seats | Integer | サブスクリプションの最大シート数 | Salesforce |
| `restricted_account` | Restricted Account | Checkbox | アカウントに法的制限があるか | Salesforce |
| `salesforce_id` | Salesforce ID | Text | 18 文字の Salesforce アカウント ID | Salesforce |
| `sfdc_short_id` | SFDC Short ID | Text | 15 文字の Salesforce アカウント ID | Salesforce |
| `solutions_architect` | Solutions Architect | Text | Solutions Architect (SA) の名前を表示する | Salesforce |
| `sub_consumption_duo_enterprise` | Subscription: Consumption - GitLab Duo Enterprise | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_consumption_duo_amazon_q` | Subscription: Consumption - GitLab Duo powered by Amazon Q | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_consumption_duo_premium` | Subscription: Consumption - GitLab Duo Premium | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_gitlab_dedicated` | Subscription: GitLab Dedicated | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_sm_premium` | Subscription: Self-Managed - Premium | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_sm_ultimate` | Subscription: Self-Managed - Ultimate | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_ss_ase` | Subscription: Support Services - ASE | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_usgov_12x5` | Subscription: US Government - 12x5 | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_usgov_24x7` | Subscription: US Government - 24x7 | Checkbox | エンタイトルメント情報 | Salesforce |
| `support_hold` | Support Hold | Checkbox | アカウントに保留があるか | Salesforce |
| `support_level` | Support Level | Drop-down | サブスクリプションの最上位プラン | Salesforce |

## 管理者タスク

{{% alert title="Note" color="primary" %}}

- このセクションのすべての項目には Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### 組織フィールドを表示する

Zendesk で組織フィールドを表示するには:

1. Zendesk インスタンスの管理ダッシュボードに移動する
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Configuration > Organization fields` に移動する
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/configuration/organization_fields)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/configuration/organization_fields)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/configuration/organization_fields)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/configuration/organization_fields)

注: アクティブでない組織フィールドを表示したい場合は、`Filter` ボタンをクリックしてアクティブフィルターを変更する必要があるかもしれません。

### 組織フィールドを作成する

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして対応に取りかかる前に標準プロセスを通してください）。
- **注**: `key` と `type` 属性はフィールドが作成された後は変更できないため、慎重に選択してください。

{{% /alert %}}

組織フィールドの作成には、同期リポジトリで MR を作成する必要があります。実際に行う変更はリクエスト自体によって異なります。具体的な内容は組織フィールドのタイプによって異なります。

**注:** よく使用するフィールドタイプのテンプレートを示しています。その他のタイプ（date、decimal、textarea、multiselect、regexp）については、`type` 属性を適宜変更し、タイプ固有の要件については [Zendesk フィールドドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types) を参照してください。

**ヒント:** 下の各フィールドタイプをクリックすると、そのテンプレートが表示されます。

<details>
<summary>checkbox</summary>

```yaml
---
title: 'Your Title Here'
previous_title: 'Your Title Here'
description: 'Your description here'
key: 'Your API key name here'
type: 'checkbox'
active: true
position: 1 # Integer representing organization field position, controls display order on organization page (lower numbers appear first)
tag: 'tag_to_add_when_checked' # Added onto the organization when the checkbox is checked, field is not present for other types
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
key: 'Your API key name here'
type: 'text'
active: true
position: 1 # Integer representing organization field position, controls display order on organization page (lower numbers appear first)
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
key: 'Your API key name here'
type: 'integer'
active: true
position: 1 # Integer representing organization field position, controls display order on organization page (lower numbers appear first)
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
key: 'Your API key name here'
type: 'dropdown'
active: true
position: 1 # Integer representing organization field position, controls display order on organization page (lower numbers appear first)
regexp_for_validation: null # Always null unless "regexp"
custom_field_options:
- name: 'Name of option'
  value: 'tag_option_uses'
- name: 'Name of option 2'
  value: 'tag_option_uses_2'
```

</details>

ピアが MR をレビューして承認した後、MR をマージできます。次のデプロイが発生すると、Zendesk に同期されます。

### 組織フィールドを編集する

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして対応に取りかかる前に標準プロセスを通してください）。
- **注**: `key` と `type` 属性はフィールドが作成された後は変更できません。

{{% /alert %}}

組織フィールドを編集するには、同期リポジトリで MR を作成する必要があります。実際に行う変更はリクエスト自体によって異なります。

ピアが MR をレビューして承認した後、MR をマージできます。次のデプロイが発生すると、Zendesk に同期されます。

#### 組織フィールドのタイトルを変更する

組織フィールドのタイトルを変更する必要がある場合は、現在の値を `previous_title` 属性にコピーしてから `title` 属性を変更します。これにより、同期が更新対象の組織フィールドを引き続き特定できるようになります。

### 組織フィールドを無効化する

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして対応に取りかかる前に標準プロセスを通してください）。

{{% /alert %}}

組織フィールドを無効化するには、同期リポジトリで MR を作成する必要があります。この MR で、対応するアクションに対して次のことを行ってください:

1. ファイルを `active` フォルダから `inactive` フォルダに移動する
1. `active` 属性の値を `false` に変更する

ピアが MR をレビューして承認した後、MR をマージできます。次のデプロイが発生すると、Zendesk に同期されます。

### 組織フィールドを削除する

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして対応に取りかかる前に標準プロセスを通してください）。

{{% /alert %}}

同期リポジトリは削除を実行しないため、Zendesk 自体を通じてこれを行う必要があります。

組織フィールドを削除するには:

1. [組織フィールドページ](#viewing-organization-fields) に移動する
1. 削除したい組織フィールドを特定して名前をクリックする
   - `Filter` ボタンをクリックしてアクティブフィルターを変更する必要があるかもしれません
1. ページの右上にある `Actions` をクリックする
1. `Delete` をクリックする
1. ポップアップで `Delete` をクリックして変更を送信する

### 例外デプロイを実行する

組織フィールドの例外デプロイを実行するには、該当する組織フィールドの同期プロジェクトに移動し、スケジュールパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより組織フィールドの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後に組織フィールドの変更が反映されない

組織フィールドは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが行われたとき）にのみデプロイされます。
