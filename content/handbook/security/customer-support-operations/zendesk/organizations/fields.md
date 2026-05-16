---
title: '組織フィールド'
description: 'Zendesk 組織フィールドに関するドキュメント'
date: 2025-12-30
upstream_path: /handbook/security/customer-support-operations/zendesk/organizations/fields/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T23:27:10Z"
translator: claude
stale: false
lastmod: "2026-02-12T20:47:52+00:00"
---

このガイドでは、GitLab における Zendesk 組織フィールドの作成・編集・管理方法について説明します。管理者は [管理者タスク](#administrator-tasks) のセクションを確認してください。

{{% alert title="技術詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/organizations/fields)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/organizations/fields)

{{% /alert %}}

## 組織フィールドを理解する

### 組織フィールドとは

組織フィールドは、Zendesk の組織に紐付くカスタムフィールドです。チケットフィールド (チケットに表示される) とは異なり、組織フィールドは組織自体に関する情報を保持します。

### 組織フィールドの管理方法

Zendesk は UI から組織フィールドをフルに管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これによって、定型化されたレビュープロセスや、必要に応じたロールバック等が可能になります。

そのため、私たちは同期リポジトリを利用しています。

### 組織フィールドの種類

GitLab で最もよく使われる種類は以下です:

| 名称 | API のタイプ値 | 用途 | 利用例 |
|------|----------------|------|--------|
| Checkbox | `checkbox` | 単一の true/false オプション | "Self-Managed - Ultimate entitlement" |
| Date | `date` | 日付選択用 | "Expiration date" |
| Decimal | `decimal` | 小数を含む数値用 | "ARR associated" |
| Drop-down | `dropdown` | 1 件選択可能なドロップダウン用 | "Highest plan level" |
| Multi-select | `multiselect` | 複数選択可能なドロップダウン用 | "Subscription levels purchased" |
| Numeric | `integer` | 小数を含まない数値用 | "Number of seats" |
| Regex | `regexp` | Regex 検証が必要なテキスト型フィールド用 | "Salesforce contact ID" |
| Text | `text` | 自由記述フィールド用 | "Account Manager" |

完全な一覧については [Zendesk のドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types) を参照してください。

### 現在の組織フィールド

現在のフィールドについて、データのソースは以下 3 つの領域のいずれかです:

- Salesforce: データが Salesforce アカウントから直接来ているもの
- Zendesk-Salesforce 同期: データが [Zendesk-Salesforce 同期](/handbook/security/customer-support-operations/zendesk-salesforce-sync/) によって決定されているもの
- Agents: エージェントから (通常は内部リクエストフォーム経由で) 要求されたもの

<details>
<summary>Zendesk Global の場合</summary>

| API キーの値 | フィールド名 | タイプ | 用途 | 値のソース |
|--------------|-------------|--------|------|-----------|
| `account_owner` | Account Owner | Text | アカウントマネージャー (AM) の名前を表示 | Salesforce |
| `account_type` | Account Type | Drop-down | アカウントの種類を表示 | Salesforce |
| `am_project_id` | AM Project ID | Text | コラボレーションプロジェクト用の gitlab.com プロジェクト ID | Agents |
| `aar` | ARR | Decimal | アカウントの Annual Recurring Revenue (ARR) | Salesforce |
| `assigned_se` | Assigned SE | Text | 割り当てられたサポートエンジニア (ASE) の Zendesk ユーザー ID | Agents |
| `technical_account_manager` | Customer Success Manager | Text | カスタマーサクセスマネージャー (CSM) の名前 | Salesforce |
| `migration_date` | Date to Migrate | Date | 組織が別インスタンスへ移行する日付 | Zendesk-Salesforce 同期 |
| `org_in_escalated_state` | Escalated State | Checkbox | 組織がエスカレーション状態にあるかどうか | Salesforce |
| `expiration_date` | Expiration date | Text | サブスクリプションの最新有効期限 | Salesforce |
| `support_level` | GitLab Plan | Drop-down | サブスクリプションのうち最上位のプランレベル | Salesforce |
| `ignore_deletion` | Ignore deletion | Checkbox | 削除プロセスがこの組織をスキップすべきかどうか | Zendesk-Salesforce 同期 |
| `mark_for_deletion` | Mark for deletion | Checkbox | 削除プロセスがこの組織をレビューすべきかどうか | Zendesk-Salesforce 同期 |
| `migrating` | Migrating | Checkbox | 組織が新しいインスタンスへ移行中かどうか | Zendesk-Salesforce 同期 |
| `seats_decimal` | Number of Seats | Decimal | サブスクリプションのうち最大シート数 | Salesforce |
| `partner_customer` | Partner Customer | Checkbox | アカウントが OEM パートナーからのものかどうか | Zendesk-Salesforce 同期 |
| `org_region` | Region | Drop-down | 組織が属するリージョン | Salesforce |
| `restricted_account` | Restricted Account | Checkbox | アカウントに法的制限があるかどうか | Salesforce |
| `salesforce_id` | Salesforce ID | Text | 18 文字の Salesforce アカウント ID | Salesforce |
| `sales_segmentation` | Sales Segmentation | Text | アカウントの規模 (従業員規模に基づく) | Salesforce |
| `sfdc_short_id` | SFDC Short ID | Text | 15 文字の Salesforce アカウント ID | Salesforce |
| `solutions_architect` | Solutions Architect | Text | ソリューションアーキテクト (SA) の名前を表示 | Salesforce |
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
| `support_hold` | Support Hold | Checkbox | アカウントに保留があるかどうか | Salesforce |

</details>
<details>
<summary>Zendesk US Government の場合</summary>

| API キーの値 | フィールド名 | タイプ | 用途 | 値のソース |
|--------------|-------------|--------|------|-----------|
| `emergency_support_24x7` | 24x7 Emergency Support | Checkbox | 24x7 のエンタイトルメントを持つかどうか | Zendesk-Salesforce 同期 |
| `account_owner` | Account Owner | Text | アカウントマネージャー (AM) の名前を表示 | Salesforce |
| `account_type` | Account Type | Drop-down | アカウントの種類を表示 | Salesforce |
| `am_project_id` | AM Project ID | Integer | コラボレーションプロジェクト用の gitlab.com プロジェクト ID | Agents |
| `arr` | ARR | Decimal | アカウントの Annual Recurring Revenue (ARR) | Salesforce |
| `assigned_se` | Assigned SE | Text | 割り当てられたサポートエンジニア (ASE) の Zendesk ユーザー ID | Agents |
| `technical_account_manager` | Customer Success Manager | Text | カスタマーサクセスマネージャー (CSM) の名前 | Salesforce |
| `migration_date` | Date to Migrate | Date | 組織が別インスタンスへ移行する日付 | Zendesk-Salesforce 同期 |
| `org_in_escalated_state` | Escalated State | Checkbox | 組織がエスカレーション状態にあるかどうか | Salesforce |
| `expiration_date` | Expiration Date | Text | サブスクリプションの最新有効期限 | Salesforce |
| `ignore_deletion` | Ignore deletion | Checkbox | 削除プロセスがこの組織をスキップすべきかどうか | Zendesk-Salesforce 同期 |
| `market_segment` | Market Segment | Text | アカウントの規模 (従業員規模に基づく) | Salesforce |
| `mark_for_deletion` | Mark for deletion | Checkbox | 削除プロセスがこの組織をレビューすべきかどうか | Zendesk-Salesforce 同期 |
| `migrating` | Migrating | Checkbox | 組織が新しいインスタンスへ移行中かどうか | Zendesk-Salesforce 同期 |
| `number_of_seats` | Number of Seats | Integer | サブスクリプションのうち最大シート数 | Salesforce |
| `restricted_account` | Restricted Account | Checkbox | アカウントに法的制限があるかどうか | Salesforce |
| `salesforce_id` | Salesforce ID | Text | 18 文字の Salesforce アカウント ID | Salesforce |
| `sfdc_short_id` | SFDC Short ID | Text | 15 文字の Salesforce アカウント ID | Salesforce |
| `solutions_architect` | Solutions Architect | Text | ソリューションアーキテクト (SA) の名前を表示 | Salesforce |
| `sub_consumption_duo_enterprise` | Subscription: Consumption - GitLab Duo Enterprise | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_consumption_duo_amazon_q` | Subscription: Consumption - GitLab Duo powered by Amazon Q | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_consumption_duo_premium` | Subscription: Consumption - GitLab Duo Premium | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_gitlab_dedicated` | Subscription: GitLab Dedicated | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_sm_premium` | Subscription: Self-Managed - Premium | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_sm_ultimate` | Subscription: Self-Managed - Ultimate | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_ss_ase` | Subscription: Support Services - ASE | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_usgov_12x5` | Subscription: US Government - 12x5 | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_usgov_24x7` | Subscription: US Government - 24x7 | Checkbox | エンタイトルメント情報 | Salesforce |
| `support_hold` | Support Hold | Checkbox | アカウントに保留があるかどうか | Salesforce |
| `support_level` | Support Level | Drop-down | サブスクリプションのうち最上位のプランレベル | Salesforce |

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は Zendesk への `Administrator` レベルのアクセスを必要とします。

{{% /alert %}}

### 組織フィールドを表示する {#viewing-organization-fields}

Zendesk 上の組織フィールドを表示するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (本番)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (サンドボックス)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (本番)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (サンドボックス)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Configuration > Organization fields` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/configuration/organization_fields)
   - [Zendesk Global (サンドボックス)](https://gitlab1707170878.zendesk.com/admin/people/configuration/organization_fields)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/configuration/organization_fields)
   - [Zendesk US Government (サンドボックス)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/configuration/organization_fields)

注: 非アクティブな組織フィールドを表示したい場合は、`Filter` ボタンをクリックしてアクティブフィルターを変更する必要があるかもしれません。

### 組織フィールドを作成する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue (Feature Request、Administrative、Bug 等) が存在する場合のみ実施してください。存在しない場合は、まず Issue を作成し、標準プロセスを通してから着手してください。
- **注**: フィールド作成後は `key` と `type` 属性を変更できないので、慎重に選んでください。

{{% /alert %}}

組織フィールドを作成するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト次第です。組織フィールドのタイプによって正確な内容は異なります。

**注:** よく使われるフィールドタイプ向けのテンプレートを示しています。その他のタイプ (date、decimal、textarea、multiselect、regexp) については、`type` 属性を適宜変更し、タイプ固有の要件については [Zendesk のフィールドドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types) を参照してください。

**ヒント:** 下のフィールドタイプをクリックすると、それぞれのテンプレートが見られます。

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

ピアがレビューして MR を承認した後、MR をマージできます。次のデプロイが行われると、Zendesk に同期されます。

### 組織フィールドを編集する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue (Feature Request、Administrative、Bug 等) が存在する場合のみ実施してください。存在しない場合は、まず Issue を作成し、標準プロセスを通してから着手してください。
- **注**: フィールド作成後は `key` と `type` 属性を変更できません。

{{% /alert %}}

組織フィールドを編集するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト次第です。

ピアがレビューして MR を承認した後、MR をマージできます。次のデプロイが行われると、Zendesk に同期されます。

#### 組織フィールドのタイトルを変更する

組織フィールドのタイトルを変更する必要がある場合、現在の値を `previous_title` 属性にコピーしてから `title` 属性を変更します。これにより、同期処理が引き続き対象の組織フィールドを特定して更新できます。

### 組織フィールドを非アクティブ化する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue (Feature Request、Administrative、Bug 等) が存在する場合のみ実施してください。存在しない場合は、まず Issue を作成し、標準プロセスを通してから着手してください。

{{% /alert %}}

組織フィールドを非アクティブ化するには、同期リポジトリで MR を作成する必要があります。この MR では、対応するアクションに対して以下を行ってください:

1. ファイルを `active` フォルダから `inactive` フォルダに移動する
1. `active` 属性の値を `false` に変更する

ピアがレビューして MR を承認した後、MR をマージできます。次のデプロイが行われると、Zendesk に同期されます。

### 組織フィールドを削除する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue (Feature Request、Administrative、Bug 等) が存在する場合のみ実施してください。存在しない場合は、まず Issue を作成し、標準プロセスを通してから着手してください。

{{% /alert %}}

同期リポジトリは削除を行わないため、これは Zendesk 自体から行う必要があります。

組織フィールドを削除するには:

1. [組織フィールドのページ](#viewing-organization-fields) に移動します
1. 削除したい組織フィールドを見つけて名前をクリックします
   - `Filter` ボタンをクリックしてアクティブフィルターを変更する必要があるかもしれません
1. ページ右上の `Actions` をクリックします
1. `Delete` をクリックします
1. ポップアップの `Delete` をクリックして変更を送信します

### 例外的なデプロイを実施する

組織フィールドの例外デプロイを実施するには、対象の組織フィールド同期プロジェクトに移動し、スケジュールパイプラインのページに行き、同期項目の再生ボタンをクリックします。これにより、組織フィールドの同期ジョブがトリガーされます。

## 一般的な問題とトラブルシューティング

### マージ後に組織フィールドの変更が反映されない

組織フィールドは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中 (または例外デプロイが行われた場合) にのみデプロイされます。
