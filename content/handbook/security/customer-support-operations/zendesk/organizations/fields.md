---
title: '組織フィールド'
description: 'Zendesk の組織フィールドに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/organizations/fields/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
lastmod: 2026-05-26T12:05:00-05:00
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab で Zendesk の組織フィールドを作成、編集、管理する方法について説明します。管理者は [管理者タスク](#administrator-tasks) セクションを確認してください。

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/organizations/fields)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/organizations/fields)
- `CustSuppOps Zendesk Test Suite Generator` 有効

{{% /alert %}}

## 組織フィールドを理解する

### 組織フィールドとは

組織フィールドは、Zendesk の組織に紐づくカスタムフィールドです。チケットフィールド（チケットに表示される）とは異なり、組織フィールドは組織そのものに関する情報を格納します。

### 組織フィールドの管理方法

Zendesk は UI を介して組織フィールドを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセスや、必要に応じたロールバックの実行などが可能になります。

そのため、私たちは同期リポジトリを利用しています。

### 組織フィールドの種類

GitLab で最もよく使われる種類は次のとおりです。

| 名前 | API のタイプ値 | 用途 | 利用例 |
|------|----------------|---------|------------------|
| Checkbox | `checkbox` | 単一の true/false オプション | "Self-Managed - Ultimate entitlement" |
| Date | `date` | 日付の選択用 | "Expiration date" |
| Decimal | `decimal` | 小数を使う数値用 | "ARR associated" |
| Drop-down | `dropdown` | 1 つの選択を許可するドロップダウン用 | "Highest plan level" |
| Multi-select | `multiselect` | 複数の選択を許可するドロップダウン用 | "Subscription levels purchased" |
| Numeric | `integer` | 小数を使わない数値用 | "Number of seats" |
| Regex | `regexp` | 正規表現による検証が必要なテキスト形式のフィールド用 | "Salesforce contact ID" |
| Text | `text` | 自由形式のフィールド用 | "Account Manager" |

全種類の一覧については、[Zendesk のドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types) を参照してください。

### 現在の組織フィールド

現在のフィールドについて、データのソースは次の 3 つの領域のいずれかです。

- Salesforce: データが Salesforce アカウントから直接取得されることを意味します
- Zendesk-Salesforce 同期: データが [Zendesk-Salesforce 同期](/handbook/security/customer-support-operations/zendesk-salesforce-sync/) によって決定されることを意味します
- エージェント: エージェントによって（通常は社内のリクエストフォームを介して）リクエストされることを意味します

<details>
<summary>Zendesk Global の場合</summary>

| API キー値 | フィールド名 | タイプ | 用途 | 値のソース |
|---------------|------------|------|---------|-----------------|
| `account_owner` | Account Owner | Text | Account Manager (AM) の名前を表示 | Salesforce |
| `account_type` | Account Type | Drop-down | アカウントの種類を表示 | Salesforce |
| `am_project_id` | AM Project ID | Text | コラボレーションプロジェクトの gitlab.com プロジェクト ID | エージェント |
| `aar` | ARR | Decimal | アカウントの年間経常収益 (ARR) | Salesforce |
| `assigned_se` | Assigned SE | Text | Assigned Support Engineer (ASE) の Zendesk ユーザー ID | エージェント |
| `technical_account_manager` | Customer Success Manager | Text | Customer Success Manager (CSM) の名前 | Salesforce |
| `migration_date` | Date to Migrate | Date | 組織が別のインスタンスへ移行する日付 | Zendesk-Salesforce 同期 |
| `org_in_escalated_state` | Escalated State | Checkbox | 組織がエスカレーション状態にあるかどうか | Salesforce |
| `expiration_date` | Expiration date | Text | サブスクリプションの最新の有効期限 | Salesforce |
| `support_level` | GitLab Plan | Drop-down | サブスクリプションの中で最も高いプランレベル | Salesforce |
| `ignore_deletion` | Ignore deletion | Checkbox | 削除プロセスがこの組織をスキップすべきかどうか | Zendesk-Salesforce 同期 |
| `mark_for_deletion` | Mark for deletion | Checkbox | 削除プロセスがこの組織を確認すべきかどうか | Zendesk-Salesforce 同期 |
| `migrating` | Migrating | Checkbox | 組織が新しいインスタンスへ移行中かどうか | Zendesk-Salesforce 同期 |
| `seats_decimal` | Number of Seats | Decimal | サブスクリプション内のシート数の最大値 | Salesforce |
| `partner_customer` | Partner Customer | Checkbox | アカウントが OEM パートナーからのものかどうか | Zendesk-Salesforce 同期 |
| `org_region` | Region | Drop-down | 組織が属するリージョン | Salesforce |
| `restricted_account` | Restricted Account | Checkbox | アカウントに法的制限があるかどうか | Salesforce |
| `salesforce_id` | Salesforce ID | Text | 18 文字の Salesforce アカウント ID | Salesforce |
| `sales_segmentation` | Sales Segmentation | Text | アカウントの規模（従業員数に基づく） | Salesforce |
| `sfdc_short_id` | SFDC Short ID | Text | 15 文字の Salesforce アカウント ID | Salesforce |
| `solutions_architect` | Solutions Architect | Text | Solutions Architect (SA) の名前を表示 | Salesforce |
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
| `support_hold` | Support Hold | Checkbox | アカウントにホールドがあるかどうか | Salesforce |

</details>
<details>
<summary>Zendesk US Government の場合</summary>

| API キー値 | フィールド名 | タイプ | 用途 | 値のソース |
|---------------|------------|------|---------|-----------------|
| `emergency_support_24x7` | 24x7 Emergency Support | Checkbox | 24x7 のエンタイトルメントを持つかどうか | Zendesk-Salesforce 同期 |
| `account_owner` | Account Owner | Text | Account Manager (AM) の名前を表示 | Salesforce |
| `account_type` | Account Type | Drop-down | アカウントの種類を表示 | Salesforce |
| `am_project_id` | AM Project ID | Integer | コラボレーションプロジェクトの gitlab.com プロジェクト ID | エージェント |
| `arr` | ARR | Decimal | アカウントの年間経常収益 (ARR) | Salesforce |
| `assigned_se` | Assigned SE | Text | Assigned Support Engineer (ASE) の Zendesk ユーザー ID | エージェント |
| `technical_account_manager` | Customer Success Manager | Text | Customer Success Manager (CSM) の名前 | Salesforce |
| `migration_date` | Date to Migrate | Date | 組織が別のインスタンスへ移行する日付 | Zendesk-Salesforce 同期 |
| `org_in_escalated_state` | Escalated State | Checkbox | 組織がエスカレーション状態にあるかどうか | Salesforce |
| `expiration_date` | Expiration Date | Text | サブスクリプションの最新の有効期限 | Salesforce |
| `ignore_deletion` | Ignore deletion | Checkbox | 削除プロセスがこの組織をスキップすべきかどうか | Zendesk-Salesforce 同期 |
| `market_segment` | Market Segment | Text | アカウントの規模（従業員数に基づく） | Salesforce |
| `mark_for_deletion` | Mark for deletion | Checkbox | 削除プロセスがこの組織を確認すべきかどうか | Zendesk-Salesforce 同期 |
| `migrating` | Migrating | Checkbox | 組織が新しいインスタンスへ移行中かどうか | Zendesk-Salesforce 同期 |
| `number_of_seats` | Number of Seats | Integer | サブスクリプション内のシート数の最大値 | Salesforce |
| `restricted_account` | Restricted Account | Checkbox | アカウントに法的制限があるかどうか | Salesforce |
| `salesforce_id` | Salesforce ID | Text | 18 文字の Salesforce アカウント ID | Salesforce |
| `sfdc_short_id` | SFDC Short ID | Text | 15 文字の Salesforce アカウント ID | Salesforce |
| `solutions_architect` | Solutions Architect | Text | Solutions Architect (SA) の名前を表示 | Salesforce |
| `sub_consumption_duo_enterprise` | Subscription: Consumption - GitLab Duo Enterprise | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_consumption_duo_amazon_q` | Subscription: Consumption - GitLab Duo powered by Amazon Q | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_consumption_duo_premium` | Subscription: Consumption - GitLab Duo Premium | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_gitlab_dedicated` | Subscription: GitLab Dedicated | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_sm_premium` | Subscription: Self-Managed - Premium | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_sm_ultimate` | Subscription: Self-Managed - Ultimate | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_ss_ase` | Subscription: Support Services - ASE | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_usgov_12x5` | Subscription: US Government - 12x5 | Checkbox | エンタイトルメント情報 | Salesforce |
| `sub_usgov_24x7` | Subscription: US Government - 24x7 | Checkbox | エンタイトルメント情報 | Salesforce |
| `support_hold` | Support Hold | Checkbox | アカウントにホールドがあるかどうか | Salesforce |
| `support_level` | Support Level | Drop-down | サブスクリプションの中で最も高いプランレベル | Salesforce |

## 管理者タスク

{{% alert title="Note" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### 組織フィールドの表示

Zendesk で組織フィールドを表示するには:

1. 対象の Zendesk インスタンスの管理ダッシュボードへ移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Configuration > Organization fields` へ移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/configuration/organization_fields)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/configuration/organization_fields)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/configuration/organization_fields)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/configuration/organization_fields)

注: 非アクティブな組織フィールドを表示したい場合は、`Filter` ボタンをクリックしてアクティブフィルターを変更する必要がある場合があります。

### 組織フィールドの作成

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして作業に取りかかる前に標準プロセスを通します）。
- **注**: フィールドの作成後は `key` と `type` の属性を変更できないため、慎重に選択してください。

{{% /alert %}}

組織フィールドを作成するには、同期リポジトリで MR を作成する必要があります。実際に行う変更は、リクエストそのものによって異なります。具体的な内容は、組織フィールドのタイプによって変わる場合があります。

**注:** 一般的なフィールドタイプのテンプレートを示しています。その他のタイプ（date、decimal、textarea、multiselect、regexp）については、`type` 属性をそれに応じて変更し、タイプ固有の要件については [Zendesk のフィールドドキュメント](https://support.zendesk.com/hc/en-us/articles/4408838961562-About-custom-fields-and-custom-field-types) を参照してください。

**ヒント:** 以下の各フィールドタイプをクリックすると、そのテンプレートが表示されます。

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

ピアが MR をレビューして承認したら、MR をマージできます。次回のデプロイが発生すると、Zendesk に同期されます。

### 組織フィールドの編集

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして作業に取りかかる前に標準プロセスを通します）。
- **注**: フィールドの作成後は `key` と `type` の属性を変更できません。

{{% /alert %}}

組織フィールドを編集するには、同期リポジトリで MR を作成する必要があります。実際に行う変更は、リクエストそのものによって異なります。

ピアが MR をレビューして承認したら、MR をマージできます。次回のデプロイが発生すると、Zendesk に同期されます。

#### 組織フィールドのタイトルの変更

組織フィールドのタイトルを変更する必要がある場合は、現在の値を `previous_title` 属性にコピーしてから、`title` 属性を変更します。これにより、同期は更新対象の組織フィールドを引き続き特定できます。

### 組織フィールドの非アクティブ化

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして作業に取りかかる前に標準プロセスを通します）。

{{% /alert %}}

組織フィールドを非アクティブ化するには、同期リポジトリで MR を作成する必要があります。この MR では、対応するアクションに対して次のことを行います。

1. ファイルを `active` フォルダーから `inactive` フォルダーへ移動します
1. `active` 属性の値を `false` に変更します

ピアが MR をレビューして承認したら、MR をマージできます。次回のデプロイが発生すると、Zendesk に同期されます。

### 組織フィールドの削除

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして作業に取りかかる前に標準プロセスを通します）。

{{% /alert %}}

同期リポジトリは削除を実行しないため、これは Zendesk 自体を介して行う必要があります。

組織フィールドを削除するには:

1. [組織フィールドのページ](#viewing-organization-fields) へ移動します
1. 削除したい組織フィールドを見つけて、その名前をクリックします
   - `Filter` ボタンをクリックしてアクティブフィルターを変更する必要がある場合があります
1. ページ右上の `Actions` をクリックします
1. `Delete` をクリックします
1. ポップアップで `Delete` をクリックして変更を送信します

### 例外デプロイの実行

組織フィールドの例外デプロイを実行するには、対象の組織フィールド同期プロジェクトへ移動し、スケジュールされたパイプラインのページへ移動して、その同期項目の再生ボタンをクリックします。これにより、組織フィールドの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後に組織フィールドの変更が反映されない

組織フィールドは `Standard` デプロイタイプに従うため、通常のデプロイサイクル時（または例外デプロイが実行されたとき）にのみデプロイされます。
