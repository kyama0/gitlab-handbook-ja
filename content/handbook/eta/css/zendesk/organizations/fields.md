---
title: '組織フィールド'
description: 'Zendesk 組織フィールドに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/organizations/fields/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T08:46:00+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk 組織フィールドを作成、編集、管理する方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/organizations/fields)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/organizations/fields)
- `CustSuppOps Zendesk Test Suite Generator` が有効

{{% /alert %}}

## 組織フィールドを理解する

### 組織フィールドとは

組織フィールドは、Zendesk の組織に添付されるカスタムフィールドです。チケットに表示されるチケットフィールドとは異なり、組織フィールドには組織自体に関する情報が保存されます。

### 組織フィールドの管理方法

Zendesk は UI を通じて組織フィールドを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバックの実行などが可能になります。

このため、同期リポジトリを使用しています。

### 組織フィールドの種類

GitLab で最もよく使用する種類は次のとおりです:

| 名前 | API タイプ値 | 目的 | 使用例 |
|------|----------------|---------|------------------|
| チェックボックス | `checkbox` | 単一の true/false オプション | 「Self-Managed - Ultimate entitlement」 |
| 日付 | `date` | 日付選択用 | 「有効期限」 |
| 小数 | `decimal` | 小数を使用する数値用 | 「関連する ARR」 |
| ドロップダウン | `dropdown` | 1 つの選択を許可するドロップダウン用 | 「最高プランレベル」 |
| 複数選択 | `multiselect` | 複数選択を許可するドロップダウン用 | 「購入済みサブスクリプションレベル」 |
| 数値 | `integer` | 小数を使用しない数値用 | 「シート数」 |
| 正規表現 | `regexp` | Regex 検証が必要なテキスト形式フィールド用 | 「Salesforce 連絡先 ID」 |
| テキスト | `text` | 自由形式フィールド用 | 「アカウントマネージャー」 |

完全な一覧については、[Zendesk のドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types)を参照してください

### 現在の組織フィールド

現在のフィールドでは、データソースは次の 3 つの領域のいずれかです:

- Salesforce: データは Salesforce アカウントから直接取得されます
- Zendesk-Salesforce sync: データは[Zendesk-Salesforce sync](/handbook/eta/css/zendesk-salesforce-sync/)を通じて決定されます
- エージェント: エージェントからリクエストされます（通常は内部リクエストフォーム経由）

<details>
<summary>Zendesk Global 用</summary>

| API キー値 | フィールド名 | タイプ | 目的 | 値のソース |
|---------------|------------|------|---------|-----------------|
| `account_owner` | Account Owner | Text | Account Manager (AM) の名前を表示する | Salesforce |
| `account_type` | Account Type | Drop-down | アカウントのタイプを表示する | Salesforce |
| `am_project_id` | AM Project ID | Text | コラボレーションプロジェクトの gitlab.com プロジェクト ID | エージェント |
| `aar` | ARR | Decimal | アカウントの年間経常収益 (ARR) | Salesforce |
| `assigned_se` | Assigned SE | Text | Assigned Support Engineer (ASE) の Zendesk ユーザー ID | エージェント |
| `technical_account_manager` | Customer Success Manager | Text | Customer Success Manager (CSM) の名前 | Salesforce |
| `migration_date` | Date to Migrate | Date | 組織が別のインスタンスに移行する日付 | Zendesk-Salesforce sync |
| `org_in_escalated_state` | Escalated State | Checkbox | 組織がエスカレーション状態にあるかどうか | Salesforce |
| `expiration_date` | Expiration date | Text | サブスクリプションの最新の有効期限 | Salesforce |
| `support_level` | GitLab Plan | Drop-down | サブスクリプションの最高レベルプラン | Salesforce |
| `ignore_deletion` | Ignore deletion | Checkbox | 削除プロセスでこの組織をスキップするかどうか | Zendesk-Salesforce Sync |
| `mark_for_deletion` | Mark for deletion | Checkbox | 削除プロセスでこの組織をレビューするかどうか | Zendesk-Salesforce Sync |
| `migrating` | Migrating | Checkbox | 組織が新しいインスタンスに移行中かどうか | Zendesk-Salesforce Sync |
| `seats_decimal` | Number of Seats | Decimal | サブスクリプション内の最大シート数 | Salesforce |
| `partner_customer` | Partner Customer | Checkbox | アカウントが OEM パートナーのものかどうか | Zendesk-Salesforce sync |
| `org_region` | Region | Drop-down | 組織が属するリージョン | Salesforce |
| `restricted_account` | Restricted Account | Checkbox | アカウントに法的制限があるかどうか | Salesforce |
| `salesforce_id` | Salesforce ID | Text | 18 文字の Salesforce アカウント ID | Salesforce |
| `sales_segmentation` | Sales Segmentation | Text | アカウントの規模（従業員数に基づく） | Salesforce |
| `sfdc_short_id` | SFDC Short ID | Text | 15 文字の Salesforce アカウント ID | Salesforce |
| `solutions_architect` | Solutions Architect | Text | Solutions Architect (SA) の名前を表示する | Salesforce |
| `sub_edu` | Subscription: Community - EDU | Checkbox | 利用資格情報 | Salesforce |
| `sub_oss` | Subscription: Community - OSS | Checkbox | 利用資格情報 | Salesforce |
| `sub_community_other` | Subscription: Community - Other | Checkbox | 利用資格情報 | Salesforce |
| `sub_consumption_cicd_minutes` | Subscription: Consumption - CI_CD Minutes | Checkbox | 利用資格情報 | Salesforce |
| `sub_consumption_eap` | Subscription: Consumption - Enterprise Agile Planning | Checkbox | 利用資格情報 | Salesforce |
| `sub_consumption_duo_enterprise` | Subscription: Consumption - GitLab Duo Enterprise | Checkbox | 利用資格情報 | Salesforce |
| `sub_consumption_duo_amazon_q` | Subscription: Consumption - GitLab Duo powered by Amazon Q | Checkbox | 利用資格情報 | Salesforce |
| `sub_consumption_duo_premium` | Subscription: Consumption - GitLab Duo Premium | Checkbox | 利用資格情報 | Salesforce |
| `sub_consumption_storage` | Subscription: Consumption - Storage | Checkbox | 利用資格情報 | Salesforce |
| `sub_dotcom_premium` | Subscription: GitLab.com - Premium | Checkbox | 利用資格情報 | Salesforce |
| `sub_dotcom_ultimate` | Subscription: GitLab.com - Ultimate | Checkbox | 利用資格情報 | Salesforce |
| `sub_gitlab_dedicated` | Subscription: GitLab Dedicated | Checkbox | 利用資格情報 | Salesforce |
| `sub_sm_premium` | Subscription: Self-Managed - Premium | Checkbox | 利用資格情報 | Salesforce |
| `sub_sm_ultimate` | Subscription: Self-Managed - Ultimate | Checkbox | 利用資格情報 | Salesforce |
| `sub_ss_ase` | Subscription: Support Services - ASE | Checkbox | 利用資格情報 | Salesforce |
| `sub_ss_growth` | Subscription: Support Services - Success Advanced | Checkbox | 利用資格情報 | Salesforce |
| `sub_ss_enterprise` | Subscription: Support Services - Success Signature | Checkbox | 利用資格情報 | Salesforce |
| `support_hold` | Support Hold | Checkbox | アカウントが保留中かどうか | Salesforce |

</details>
<details>
<summary>Zendesk US Government 用</summary>

| API キー値 | フィールド名 | タイプ | 目的 | 値のソース |
|---------------|------------|------|---------|-----------------|
| `emergency_support_24x7` | 24x7 Emergency Support | Checkbox | 24x7 の利用資格を持つかどうか | Zendesk-Salesforce sync |
| `account_owner` | Account Owner | Text | Account Manager (AM) の名前を表示する | Salesforce |
| `account_type` | Account Type | Drop-down | アカウントのタイプを表示する | Salesforce |
| `am_project_id` | AM Project ID | Integer | コラボレーションプロジェクトの gitlab.com プロジェクト ID | エージェント |
| `arr` | ARR | Decimal | アカウントの年間経常収益 (ARR) | Salesforce |
| `assigned_se` | Assigned SE | Text | Assigned Support Engineer (ASE) の Zendesk ユーザー ID | エージェント |
| `technical_account_manager` | Customer Success Manager | Text | Customer Success Manager (CSM) の名前 | Salesforce |
| `migration_date` | Date to Migrate | Date | 組織が別のインスタンスに移行する日付 | Zendesk-Salesforce sync |
| `org_in_escalated_state` | Escalated State | Checkbox | 組織がエスカレーション状態にあるかどうか | Salesforce |
| `expiration_date` | Expiration Date | Text | サブスクリプションの最新の有効期限 | Salesforce |
| `ignore_deletion` | Ignore deletion | Checkbox | 削除プロセスでこの組織をスキップするかどうか | Zendesk-Salesforce Sync |
| `market_segment` | Market Segment | Text | アカウントの規模（従業員数に基づく） | Salesforce |
| `mark_for_deletion` | Mark for deletion | Checkbox | 削除プロセスでこの組織をレビューするかどうか | Zendesk-Salesforce Sync |
| `migrating` | Migrating | Checkbox | 組織が新しいインスタンスに移行中かどうか | Zendesk-Salesforce Sync |
| `number_of_seats` | Number of Seats | Integer | サブスクリプション内の最大シート数 | Salesforce |
| `restricted_account` | Restricted Account | Checkbox | アカウントに法的制限があるかどうか | Salesforce |
| `salesforce_id` | Salesforce ID | Text | 18 文字の Salesforce アカウント ID | Salesforce |
| `sfdc_short_id` | SFDC Short ID | Text | 15 文字の Salesforce アカウント ID | Salesforce |
| `solutions_architect` | Solutions Architect | Text | Solutions Architect (SA) の名前を表示する | Salesforce |
| `sub_consumption_duo_enterprise` | Subscription: Consumption - GitLab Duo Enterprise | Checkbox | 利用資格情報 | Salesforce |
| `sub_consumption_duo_amazon_q` | Subscription: Consumption - GitLab Duo powered by Amazon Q | Checkbox | 利用資格情報 | Salesforce |
| `sub_consumption_duo_premium` | Subscription: Consumption - GitLab Duo Premium | Checkbox | 利用資格情報 | Salesforce |
| `sub_gitlab_dedicated` | Subscription: GitLab Dedicated | Checkbox | 利用資格情報 | Salesforce |
| `sub_sm_premium` | Subscription: Self-Managed - Premium | Checkbox | 利用資格情報 | Salesforce |
| `sub_sm_ultimate` | Subscription: Self-Managed - Ultimate | Checkbox | 利用資格情報 | Salesforce |
| `sub_ss_ase` | Subscription: Support Services - ASE | Checkbox | 利用資格情報 | Salesforce |
| `sub_usgov_12x5` | Subscription: US Government - 12x5 | Checkbox | 利用資格情報 | Salesforce |
| `sub_usgov_24x7` | Subscription: US Government - 24x7 | Checkbox | 利用資格情報 | Salesforce |
| `support_hold` | Support Hold | Checkbox | アカウントが保留中かどうか | Salesforce |
| `support_level` | Support Level | Drop-down | サブスクリプションの最高レベルプラン | Salesforce |

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### 組織フィールドを表示する

Zendesk で組織フィールドを表示するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Configuration > Organization fields` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/configuration/organization_fields)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/people/configuration/organization_fields)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/configuration/organization_fields)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/configuration/organization_fields)

注記: 非アクティブな組織フィールドを表示する場合は、`Filter` ボタンをクリックしてアクティブなフィルターを変更する必要がある場合があります

### 組織フィールドを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。
- **注記**: フィールドの作成後は `key` 属性と `type` 属性を変更できないため、慎重に選択してください

{{% /alert %}}

組織フィールドを作成するには、同期リポジトリで MR を作成する必要があります。正確な変更内容はリクエスト自体によって異なります。正確なコンテンツは組織フィールドの種類によって異なる場合があります。

**注記:** 一般的なフィールドタイプのテンプレートを表示します。その他のタイプ（date、decimal、textarea、multiselect、regexp）では、`type` 属性を適宜変更し、タイプ固有の要件について[Zendesk フィールドのドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types)を参照してください。

**ヒント:** 下の各フィールドタイプをクリックすると、テンプレートが表示されます。

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

ピアが MR をレビューして承認した後、MR をマージできます。次回のデプロイ時に Zendesk に同期されます。

### 組織フィールドを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。
- **注記**: フィールドの作成後は `key` 属性と `type` 属性を変更できません

{{% /alert %}}

組織フィールドを編集するには、同期リポジトリで MR を作成する必要があります。正確な変更内容はリクエスト自体によって異なります。

ピアが MR をレビューして承認した後、MR をマージできます。次回のデプロイ時に Zendesk に同期されます。

#### 組織フィールドのタイトルを変更する

組織フィールドのタイトルを変更する必要がある場合は、現在の値を `previous_title` 属性にコピーしてから、`title` 属性を変更します。これにより、同期は更新対象の組織フィールドを引き続き特定できます。

### 組織フィールドを非アクティブ化する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。

{{% /alert %}}

組織フィールドを非アクティブ化するには、同期リポジトリで MR を作成する必要があります。この MR では、対応するアクションに対して次を実行してください:

1. ファイルを `active` フォルダーから `inactive` フォルダーに移動します
1. `active` 属性の値を `false` に変更します

ピアが MR をレビューして承認した後、MR をマージできます。次回のデプロイ時に Zendesk に同期されます。

### 組織フィールドを削除する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。

{{% /alert %}}

同期リポジトリは削除を実行しないため、Zendesk 自体を使用してこれを行う必要があります。

組織フィールドを削除するには:

1. [組織フィールドページ](#viewing-organization-fields)に移動します
1. 削除する組織フィールドを特定し、その名前をクリックします
   - `Filter` ボタンをクリックしてアクティブなフィルターを変更する必要がある場合があります
1. ページ右上の `Actions` をクリックします
1. `Delete` をクリックします
1. ポップアップで `Delete` をクリックして変更を送信します

### 例外デプロイを実行する

組織フィールドの例外デプロイを実行するには、対象の組織フィールド同期プロジェクトに移動し、スケジュール済みパイプラインページに移動して、同期項目の再生ボタンをクリックします。これにより、組織フィールドの同期ジョブがトリガーされます。

## 一般的な問題とトラブルシューティング

### マージ後に組織フィールドの変更が表示されない

組織フィールドは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行された場合）にのみデプロイされます
