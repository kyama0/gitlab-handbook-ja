---
title: "Quote to Cash"
description: "GitLabのQuote to Cashシステムとプロセス"
upstream_path: "/handbook/company/quote-to-cash/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: claude
stale: false
---

## 概要

Quote-to-Cash（O2C）プロセスは`顧客アカウント管理`、`注文処理`、`請求`、`売掛金`の機能を包括しています。このプロセスの調整はEnterprise Applicationsチームが所有しています。

このページはクロスファンクショナルなページであり、Quote to Cash（Q2C）システムと基盤となるデータシステムおよびプロセスの情報源として機能することを目的としています。

効率的なQuote-to-Cashシステムは、GitLabサブスクリプションの購入、有効化、管理を可能な限り簡単にします。

- `顧客満足度`を向上させ、`GoToMarket（GTM）プロセスを合理化`し、会社の`収益成長`を加速させます。
- すべてのソースシステムにわたる最も重要なビジネスオブジェクト/エンティティのデータ間の`一貫性`を確保します。
- すべてのコアビジネスに重要なオブジェクトの`マスターデータオブジェクト`は、すべてのシステムにわたって同じ定義とデータを持ちます。
- すべてのデータソースシステム間に適切な`調整/同期`が存在します。ZuoraとCustomerDot、SFDCとGitLab.comの間、およびZuora Billing Object ModelとCustomersDotの1:1マッピングが含まれます。
- `データ品質`を向上させ、有料ネームスペースへの転換の旅、特定のネームスペースの最初の有料サブスクリプション、無料/トライアルから有料への転換分析などを理解するための`単一の系譜`を確保します。

## チーム

Quote-to-Cashシステムのプロジェクトとイニシアチブは、多くの場合、機能やチームをまたぐ密接な連携が必要です。最も頻繁に関与するチームは：[Enterprise Applications](/handbook/business-technology/enterprise-applications/)、[Billing Ops](/handbook/finance/accounting/finance-ops/billing-ops/)、[Fulfillment](/handbook/engineering/development/fulfillment/)、[Field Operations](/handbook/sales/field-operations/)、[Support](/handbook/support/)、[Data](/handbook/enterprise-data/)。

## システム

Q2Cシステムは、Salesforce、Zuora（CPQ、360、Billing、Revenue）、CustomersDot、NetSuiteなどのいくつかのシステムで構成されています。

### Salesforce

- SalesforceはCRMツールとして、顧客のリード、コンタクト、アカウント、商談、見積もりの管理に使用されています。
- SalesforceはGitLabの[Enterprise Applications](/handbook/business-technology/enterprise-applications/)チームが所有し、プロセスオーナーからの変更を実装します。
- [見積もりプロセス](/handbook/sales/field-operations/order-processing/#quote-configuration)自体は[Deal Deskチーム](/handbook/sales/field-operations/sales-operations/deal-desk/)が所有しています。

### Zuora CPQ

- Zuora CPQは、Sales Assistedのディールに使用するConfigure、Price、Quoteツールです
- Zuora CPQはSalesforceのマネージドパッケージで、見積もり承認のために[Enterprise Applications](/handbook/business-technology/enterprise-applications/)によって拡張されています
- [見積もり承認プロセス](/handbook/sales/field-operations/order-processing/#standard-quote-approval)自体は[Deal Deskチーム](/handbook/sales/field-operations/sales-operations/deal-desk/)が所有しています。

### Zuora 360

- Zuora 360はZuoraとSalesforce間のストックコネクターで、ZuoraサブスクリプションinformationをSalesforceに転送します。
- Zuora 360のジョブは[Enterprise Applications](/handbook/business-technology/enterprise-applications/)が所有しており、アドオンと更新ディールのためのSalesforceにおけるZuoraサブスクリプションデータの拡張も[Enterprise Applications](/handbook/business-technology/enterprise-applications/)が所有しています。
- [アドオン](/handbook/sales/field-operations/sales-operations/deal-desk/#amend-subscription-quote)と[更新](/handbook/sales/field-operations/sales-operations/deal-desk/#renew-subscription-quote)プロセスは[Deal Deskチーム](/handbook/sales/field-operations/sales-operations/deal-desk/)が所有しています。

### Zuora Billing

- Zuoraは請求と収益ツールとして、顧客サブスクリプション、支払い、請求書の管理に使用されています。
- ZuoraはGitLabの[Enterprise Applications](/handbook/business-technology/enterprise-applications/)チームが所有しています。
- 請求プロセス自体は[Billing Operations](/handbook/finance/accounting/finance-ops/billing-ops/)チームが所有しています

### Zuora Revenue

- Zuora Revenueは、新しいASC 606およびIFRS 15収益基準を含む現在および将来の米国GAAPに準拠した自動収益認識アプリケーションです。

### CustomersDot（顧客ポータル）

- CustomersDotは顧客がサブスクリプションを管理するためにログインする際に使用されます
- GitLabのエンジニアがCustomersDotを作成し、[Fulfillmentチーム](/handbook/engineering/development/fulfillment/)が所有しています
- CustomersDotはZuoraと統合して、セルフサービスの購入とサブスクリプション管理を可能にします

### NetSuite

- NetSuiteは会社のEnterprise Resource Planning（ERP）システムで、主にFinanceチームが管理しています。
- このプラットフォームにより、多次元レポートと多通貨・多事業体レポートが可能になります。総勘定元帳がここに存在し、すべての財務活動が最終的に記録されており、会社の財務状況を報告するために重要です。

## アーキテクチャ

![ltc-landscape](/images/company/ltc-landscape.png)

## データオブジェクト

### 同等のデータオブジェクト

この表はシステム間の同等のデータオブジェクトを示しています：

| GitLab           | CustomersDot     | Zuora        | SFDC                |
|------------------|------------------|--------------|---------------------|
| Organization     | BillingAccount   | Account      | BillingAccount      |
| User             | User             | Contact      | Contact             |
| -                | Order            | Order        | 商談と主要見積もり |
| -                | Subscription     | Subscription | Subscription |
| License          | License          | -            | -                   |
| -                | Cloud Activation | -            | -                   |

注意：SFDCでは、[SFDC BillingAccount](https://help.salesforce.com/s/articleView?id=sf.blng_billing_accounts.htm&type=5)はSFDC Accountと同じではありません。[SFDC AccountはBillingAccountを複数持つことができます](https://architect.salesforce.com/diagrams/framework/data-model-notation#Record_Type_Entity)。

注意：CustomersDotのOrderオブジェクトはZuoraのOrderオブジェクトと同じではなく、定義が異なります。CustomerDotのOrderはZuoraのOrderよりも、ZuoraのSubscriptionに近いです。CustomersDotのOrderオブジェクトについては、さらなるアーキテクチャと定義の作業が必要です。

### CustomerDotオブジェクトモデル

以下は新しく提案されたデータアーキテクチャのデータベースERDの焦点を絞ったビューです。

```mermaid
erDiagram
  CustomersDotUser ||--o{ CustomersDotBillingAccountMembership : "has many"
  CustomersDotUser ||--o{ ZuoraContact : "has many"
  CustomersDotBillingAccount ||--o{ CustomersDotBillingAccountMembership : "has many"
  CustomersDotBillingAccount ||--o{ CustomersDotCloudActivation : "has many"
  CustomersDotBillingAccount ||--o{ CustomersDotLicense : "has many"
  CustomersDotBillingAccount ||--o{ CustomersDotOrder : "has many"
  CustomersDotBillingAccount ||--|| GitLabOrganization : "has one"
  CustomersDotCloudActivation ||--o{ GitLabCloudActivation : "has many"
  CustomersDotLicense ||--o{ GitLabLicense : "has many"
  CustomersDotUser ||--|| GitLabUser : "has one"
  CustomersDotOrder ||--o{ CustomersDotSubscription : "has many"
  CustomersDotSubscription ||--|| ZuoraSubscription : "has one"
  GitLabUser ||--o{ GitLabMember : "has many"
  GitLabOrganization ||--o{ GitLabMember : "has many"
  GitLabOrganization ||--o{ GitLabLicense : "has many"
  GitLabOrganization ||--o{ GitLabCloudActivation : "has many"
  ZuoraAccount ||--o{ ZuoraContact : "has many"
  ZuoraAccount ||--o{ ZuoraPaymentMethod : "has many"
  ZuoraAccount ||--o{ ZuoraOrder : "has many"
  ZuoraAccount ||--o{ ZuoraSubscription : "has many"
  ZuoraOrder ||--o{ ZuoraSubscription : "has many"
  ZuoraAccount ||--|| CustomersDotBillingAccount : "has one"
  SFDCAccount ||--o{ ZuoraAccount : "has many"
  SFDCAccount ||--o{ CustomersDotBillingAccount : "has many"

  CustomersDotBillingAccount {
    bigint id
    string zuora_account_id
    string zuora_account_name
    string zuora_account_number
    string zuora_account_entity
    string zuora_account_vat_id
    string salesforce_account_id
    timestamp created_at
    timestamp updated_at
  }
  CustomersDotBillingAccountMembership {
    bigint id
    bigint user_id
    bigint billing_account_id
    timestamp created_at
    timestamp updated_at
  }
  CustomersDotUser {
    int id
    string first_name
    string last_name
    datetime created_at
    datetime updated_at
    string email
    string encrypted_password
    string reset_password_token
    datetime reset_password_sent_at
    datetime remember_created_at
    integer sign_in_count
    datetime current_sign_in_at
    datetime last_sign_in_at
    inet current_sign_in_ip
    inet last_sign_in_ip
    string provider
    string uid
    string country
    string state
    string city
    string zip_code
    string vat_code
    string company
    boolean billable
    string access_token
    string confirmation_token
    datetime confirmed_at
    datetime confirmation_sent_at
    string unconfirmed_email
    string address_1
    string address_2
    string company_size
    string authentication_token
    string phone_number
    boolean login_activated
    string refresh_token
    datetime_with_timezone access_token_expires_at
    datetime_with_timezone token_refresh_last_attempted_at
  }
  CustomersDotCloudActivation {
    bigint id
    bigint billing_account_id
    string activation_code
    string subscription_name
    boolean super_sonics_aware
    datetime seat_utilization_reminder_sent_at
    timestamp created_at
    timestamp updated_at
  }
  CustomersDotLicense {
    bigint id
    bigint billing_account_id
    uuid license_file_md5
    bigint creator_id
    datetime_with_timezone created_at
    datetime_with_timezone updated_at
    datetime_with_timezone last_synced_at
    datetime_with_timezone next_sync_at
    integer users_count
    integer previous_users_count
    integer trueup_quantity
    date expires_at
    date starts_at
    date trueup_from
    date trueup_to
    boolean trial
    boolean cloud_licensing_enabled
    string plan_code
    string plan_name
    string zuora_subscription_id
    string email
    string name
    string company
    string zuora_subscription_name
    text notes
    text license_file
    datetime_with_timezone activated_at
    boolean auto_renew_enabled
    boolean seat_reconciliation_enabled
    boolean operational_metrics_enabled
    boolean reconciliation_completed
    boolean offline_cloud_licensing_enabled
  }
  CustomersDotOrder {
    int id
    bigint billing_account_id
    string zuora_product_rate_plan_id
    string zuora_subscription_id
    string zuora_subscription_name
    date start_date
    date end_date
    integer quantity
    datetime created_at
    datetime updated_at
    string gl_namespace_id
    string gl_namespace_name
    string amendment_type
    boolean trial
    datetime last_extra_ci_minutes_sync_at
    string zuora_account_id
    datetime increased_billing_rate_notified_at
    boolean reconciliation_accepted
    integer trial_extension_type
    string source
    datetime_with_timezone seat_overage_notified_at
    datetime_with_timezone auto_renew_error_notified_at
  }
  CustomersDotSubscription {
  }
  ZuoraAccount {
    string crm_id
  }
  ZuoraContact {
  }
  ZuoraSubscription {
  }
  ZuoraPaymentMethod {
  }
  SFDCAccount {
  }
  GitLabLicense {
  }
  GitLabCloudActivation {
  }
  GitLabOrganization {
  }
  GitLabMember {
  }
  GitLabUser {
  }
  ```

### Zuora Billing Object Model

Zuoraは[Zuoraのビリングオブジェクトモデル](https://knowledgecenter.zuora.com/Get_Started/Zuora_business_object_model)の関係図を提供しています。

![Zuora Billing Object Model](/images/company/zuora_billing_object_model.png)

システム間のデータ問題を減らすため、ZuoraビリングオブジェクトモデルとCustomersDotの1:1マッピングを確保することを目標としています。

### ZuoraとSalesforceの統合オブジェクトモデル

[Zuora CPQ](https://knowledgecenter.zuora.com/Zuora_CPQ/Zuora_CPQ_Object_Model/Zuora_CPQ_Object_Model)はZuoraとSalesforceを接続するために使用されます。

![Zuora Salesforce ERD](/images/company/zuora_salesforce_erd.jpeg)

### 請求アカウントマスターデータオブジェクト

`BillingAccount`は、支払い顧客の最も重要なアカウント情報（連絡先情報、支払い条件、支払い方法など）を保持するコアビジネスエンティティです。この情報は、サブスクリプション、修正、請求書や支払いなどのトランザクションを追跡するために使用されます。このマスターデータオブジェクトのデータは、有料顧客の請求情報をよりよく理解するため、いくつかのGTM、製品使用状況、データサイエンスの傾向モデルで積極的に使用されています。

まず、`BillingAccount Entity`の`Conformed Dimension`を開発するために、ZuoraビリングアカウントとCDotビリングアカウントのデータアーキテクチャの整合性の向上に焦点を当てました。

CDotの`Customer`モデルには、個人ユーザー（Contact）と組織（Account）の両方を表す既知の設計上の欠陥があります。このエピックの調査は[このSpikeIssue](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/1874)に記載されています。

## プロジェクト

以下は、Quote to Cashチームがシステムをより適切に整合させるために実施しているアーキテクチャプロジェクトです。

### Fulfillmentデータアーキテクチャ計画

FulfillmentチームはQuote 2 Cashシステム、特にCustomersDotを、より高い信頼性、持続可能性、柔軟性を促進する方法で再アーキテクチャを進めています。このハンドブックページは、機能部門ページとアーティファクトへのリンクを持つQ2CシステムのSSOTとして機能します。

1. Fulfillment SSOTプラン: [data_architecture](/handbook/company/quote-to-cash/#billing-account-master-data-object)
1. Central Data Team SSOTプラン: [data_architecture](/handbook/company/quote-to-cash/#data-architecture-plan)
1. Sales Systems SSOTプラン: 追加予定
1. Enterprise Apps SSOTプラン: [data_architecture](/handbook/company/quote-to-cash/#billing-account-master-data-object)

Zuoraはサブスクリプションが購入された後の`Zuora Account`と`Zuora Contact`データのソースオブトゥルースとして機能します。購入前には、ユーザーがCDotに登録し、`CustomersDotBillingAccount`（まだ存在しないため）に関連付けられていない`CustomersDotUser`レコードが作成されます。購入後、`CustomersDotBillingAccount`レコードが関連する`CustomersDotBillingAccountMembership`とともに作成されます。

`CustomersDotUser`/`ZuoraContact`および`CustomersDotBillingAccount`/`ZuoraAccount`情報は、ユーザーが直接CDotやZuora（あるいはSFDCを通じて間接的に）で編集できるため、CDotとZuora間でのデータ同期に注意が必要です。特に、ZuoraコールアウトをCDotとZuora間の`CustomersDotBillingAccount`と`CustomersDotUser`レコードの同期に使用できない場合、[Zuoraカスタムイベント](https://knowledgecenter.zuora.com/Zuora_Platform/Extensibility/Events_and_Notifications/AB_Custom_Events)を検討します。

CDotの`CustomersDotUser`レコードは1つのメールアドレスに紐付けられています。このメールアドレスは複数の`ZuoraAccount`に関連付けられており、したがって複数の`ZuoraContact`を持つことができます。各`ZuoraContact`は独立して変更できます。例えば、請求管理者が米国の請求エンティティのContact Aのアドレスを変更したいと思うかもしれませんが、同じメールアドレスに関連付けられたContact B（欧州の請求エンティティ用）のアドレスは変更しないかもしれません。この理由から、コンタクトメタデータは最終的に`CustomersDotBillingAccountMembership`モデルに格納される可能性がありますが、スコープを減らすためにまずは軽量に保ちます。最初はZuoraからこのデータを取得します。

#### CustomersDot BillingAccount管理

[CustomersDot BillingAccountの導入](https://gitlab.com/groups/gitlab-org/-/epics/8331)

- [CustomersDot管理におけるBill To / Sold To連絡先管理の改善](https://gitlab.com/groups/gitlab-org/-/epics/9831) - 完了
- [イテレーション1A: CustomersDot BillingAccountとUsersをZuoraオブジェクトに整合させる](https://gitlab.com/groups/gitlab-org/-/epics/8950) - 完了
- [イテレーション1B: 単一のCustomersDot BillingAccountが複数のCustomersDot Usersを持てるようにする](https://gitlab.com/groups/gitlab-org/-/epics/8951) - 90%完了
- [イテレーション1C: 単一のCustomersDot Userが複数のBillingAccountsを持てるようにする](https://gitlab.com/groups/gitlab-org/-/epics/8986) - 未着手
- [イテレーション1D: レガシーデータオブジェクトのクリーンアップ](https://gitlab.com/groups/gitlab-org/-/epics/8949) - 未着手

#### 背景

このエピックでは、ZuoraBillingAccountsとの整合性を高めるためのCustomersDotのデータアーキテクチャの改善に焦点を当てています。CDotの`Customer`モデルには、ZuoraContactual（個人ユーザー）とZuoraAccount（組織）の両方を表す既知の設計上の欠陥があります。

#### 問題

現在のCustomersDot（CDot）は、いくつかの異なる機能を果たすデータオブジェクト`Customer`（例：`customers` DBテーブル）を持っています：

- CustomersDotにログインできるメールアドレスを持つユーザー
- 名前、メール、住所などのメタデータを持つ会社内の特定の人物に関連する連絡先情報
- 会社名を含むZuoraアカウントに関連付けられた会社情報

Zuoraアカウントは、多くのユーザーやコンタクトを持つことができる会社/顧客アカウントにマッピングされることに注意することが重要です。特定の1人のユーザーにマッピングすべきではありません。現在のアーキテクチャでは、`zuora_account_id`は複数のCustomerと共有できますが、これは理想的ではありません。Zuoraのデータ構造とビジネスモデルを正確に反映するアーキテクチャが必要です。CustomersDotでは、[ZuoraのBillingオブジェクトモデル](https://knowledgecenter.zuora.com/Get_Started/Zuora_business_object_model)を正確に反映するデータアーキテクチャが必要です。

#### これから恩恵を受けるIssueの例

1. [CDot Issue #3626](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/3626)
1. [GL Issue #332236](https://gitlab.com/gitlab-org/gitlab/-/issues/332236)
1. [Epic #2160](https://gitlab.com/groups/gitlab-org/-/epics/2160)
1. [CDot Issue #242](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/242)
1. [CDot Issue #695](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/695)
1. [GL Issue #338546](https://gitlab.com/gitlab-org/gitlab/-/issues/338546)

#### 計画

Zuoraのデータ構造をより反映させるために、CustomersDotのデータアーキテクチャにいくつかの新しいモデルを追加することをお勧めします。

最も重要なのは、CDotには`CustomersDotBillingAccount`（別名「会社」/「請求エンティティ」）のモデルがないことです。このモデルを追加することで、現在の`CustomersDotCustomer`モデルにあるBillingAccountレベルに属するデータを分離できます（以下の例を参照）。また、現在の命名がSalesforceの[Salesforce Customer](https://developer.salesforce.com/docs/atlas.en-us.240.0.object_reference.meta/object_reference/sforce_api_objects_customer.htm)の定義とは異なるため混乱を招くことから、`CustomersDotCustomer`モデルを`CustomersDotUser`に名称変更します。

- `zuora_account_id`
- `company_name`
- `vat_code`
- `salesforce_account_id`

さらに、`CustomersDotBillingAccount`と`CustomersDotUser`モデル間に結合テーブル（例：`billing_account_memberships`テーブル）を追加することで、`CustomersDotBillingAccount`が複数の`CustomersDotUser`を持てるようになります。同様に、`CustomersDotUser`は多くの`CustomersDotBillingAccount`に関連付けることができます。

このデータ構造で、CDotは`CustomersDotBillingAccount`と`CustomersDotUser`のデータ構造を、CDotのユーザーが`ZuoraAccount`のサブスクリプションを表示/管理するためのアクセス権を持つべきかどうかを判断する方法として考慮する必要があります。CDotはZuoraに依存して、`ZuoraAccount`のコンタクトが誰であるか、およびそのメタデータ（名前、住所など）のソースオブトゥルースを提供することができます。

現在、CDotはサブスクリプションアカウントに関連するSoldToコンタクト用の`CustomersDotUser`レコードを作成します。このエピックでは、同じサブスクリプションアカウントのBillToコンタクト用にも`CustomersDotUser`レコードを作成することができますが、これは要件ではありません。これにより、両方のタイプのコンタクトがCDotにログインしてアカウントのサブスクリプションを管理できるようになります。

#### CustomersDot UserをなぜCustomersDot BillingAccountと多数関連付けられるようにするのか？

`CustomersDotUser`を単一の`CustomersDotBillingAccount`にのみ関連付けることを検討しましたが、以下の理由から多対多マッピング機能を構築すべきと判断しました：

1. Zuoraは現在、1人のユーザーが複数の請求アカウントにマッピングできることを許可しています。
1. 本番環境ではこれがすでに起きている例が見られます（[Zuoraでは現在1800人以上のユーザーアカウントが複数のBillingAccountにマッピングされています](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/938#note_1136376435)）。

これを有効にすることで、CustomersDotとZuoraの間でパリティが実現します。

更新：CDotはZuoraビリングモデルに整合させるために`BillingAccount`、`BillingAccountMembership`、`BillingAccountContact`モデルを追加しました。

#### ソースオブトゥルース

Zuoraはサブスクリプションが購入された後の`ZuoraAccount`と`ZuoraContact`データのソースオブトゥルースとして機能します。購入前には、ユーザーがCDotに登録し、`CustomersDotBillingAccount`（まだ存在しないため）に関連付けられていない`CustomersDotUser`レコードが作成されます。購入後、`CustomersDotBillingAccount`レコードが関連する`CustomersDotBillingAccountMembership`とともに作成されます。

`CustomersDotUser`/`ZuoraContact`および`CustomersDotBillingAccount`/`ZuoraAccount`情報は、ユーザーが直接CDotやZuora（あるいはSFDCを通じて間接的に）で編集できるため、CDotとZuora間でのデータ同期に注意が必要です。特に、ZuoraコールアウトをCDotとZuora間の`CustomersDotBillingAccount`と`CustomersDotUser`レコードの同期に使用できない場合、[Zuoraカスタムイベント](https://knowledgecenter.zuora.com/Zuora_Platform/Extensibility/Events_and_Notifications/AB_Custom_Events)を検討します。

CDotの`CustomersDotUser`レコードは1つのメールアドレスに紐付けられています。このメールアドレスは複数の`ZuoraAccount`に関連付けられており、したがって複数の`ZuoraContact`を持つことができます。各`ZuoraContact`は独立して変更できます。例えば、請求管理者が米国の請求エンティティのContact Aのアドレスを変更したいと思うかもしれませんが、同じメールアドレスに関連付けられたContact B（欧州の請求エンティティ用）のアドレスは変更しないかもしれません。この理由から、コンタクトメタデータは最終的に`CustomersDotBillingAccountMembership`モデルに格納される可能性がありますが、スコープを減らすためにまずは軽量に保ちます。最初はZuoraからこのデータを取得します。

#### CustomersDotのサインインオプションとしてGitLab.com SSOのみを使用

CustomersDotの唯一のサインインオプションとしてGitLab.com SSOを使用することで、レガシーのサインアップ（メールとパスワード）を排除し、将来的なサードパーティのeコマースプロバイダーとの統合のためにCDotを準備できます。
私たちの目標は、サブスクリプション情報へのアクセス方法において、SaaS/Self-ManagedとWeb直販/Sales Assisted顧客間のエクスペリエンスを合理化することです。

全体的に、これによりCDotでの顧客のためのより安全な環境が実現され、CDot顧客とGitLab.comアカウントの1:1関係を確立できます。

[GitLab.com SSOをCustomersDotの唯一のサインアップオプションとして](https://gitlab.com/groups/gitlab-org/-/epics/8905)

- [CDot SSO: メールとパスワードのサインアップを削除](https://gitlab.com/groups/gitlab-org/-/epics/9120)
- [CDot SSO: CDotへの初回ログインのエクスペリエンス強化](https://gitlab.com/groups/gitlab-org/-/epics/9156)
- [CDot SSO: より多くのCDot顧客をGitLab SSOでのログインに移行](https://gitlab.com/groups/gitlab-org/-/epics/9155)

#### CustomersDotのOrderをZuoraのOrderに整合させる

この作業は、`CustomersDotOrder`テーブルを分割し、`ZuoraSubscriptions`テーブルをより代表するデータ構造に向かうことに焦点を当てています。

詳細は[アーキテクチャブループリント](https://docs.gitlab.com/ee/architecture/blueprints/cdot_orders/)を参照してください。

[CustomersDotのOrderをZuoraオブジェクトに整合させる](https://gitlab.com/groups/gitlab-org/-/epics/9748)

- [フェーズ1: ZuoraキャッシュモデルをImplementする](https://gitlab.com/groups/gitlab-org/-/epics/11751)
- [フェーズ2: Zuoraキャッシュ同期とバックフィルをImplementする](https://gitlab.com/groups/gitlab-org/-/epics/13630)
- [フェーズ3: Zuoraキャッシュモデルを活用する](https://gitlab.com/groups/gitlab-org/-/epics/11752)
- [フェーズ4: CDot OrderをSubscriptionで置き換える](https://gitlab.com/groups/gitlab-org/-/epics/11753)

### SnowflakeデータウェアハウスとDbt（data build tool）

Quote to CashシステムからSnowflakeへデータを抽出し、dbtを使用してレポートと分析のためのデータモデルに変換します。

#### データアーキテクチャ計画

FulfillmentチームはQuote 2 Cashシステム、特にCustomersDotを、より高い信頼性、持続可能性、柔軟性を促進する方法で再アーキテクチャを進めています。新しいアーキテクチャの重要な成果の1つは、CustomerDot、Zuora、Salesforce間で同じ顧客定義を持つことです。この定義はZuoraのBillingAccountに基づいており、顧客のキーはbilling_account_idです。CustomersDotデータテーブルに顧客定義を整合させるために、Snowflakeとdbtのデータモデルを再アーキテクチャする必要があります。ZuoraとSalesforceシステムをモデル化して構築されたデータモデルは正しい顧客定義を持っており、現時点ではそれらのモデルの再アーキテクチャは不要です。

**統合Q2Cデータモデルにおける顧客定義の重要な注意事項：**

1. 統合顧客キーはBilling_Account_Idであり、システムを結合します。Billing_Account_IdはQ2Cシステムに以下のように存在します：
    1. `Zuora.Account.Account_Id`
    1. `CustomersDot.Billing_Accounts.Billing_Account_Id`
    1. `Salesforce.Billing_Account.Billing_Account_Id`
    1. `ドラフト: GitLab_Dotcom.Organization.Billing_Account_Id` Organization Entity ObjectはGitLab_Dotcomにまだ作成されておらず、検証プロセスの途中です。Billing Account Id外部キーはまだ決定されていません。
1. billing_account_idのソースIDデータ（データが発生してSSOTとみなされる場所）はZuoraにあります。
1. 顧客定義は、ZuoraとSalesforceにある請求アカウントに対してのみ統合されており、一般的に有料・過去に有料であった顧客とEdu/OSSの顧客に限定されます。
1. トライアルの目標状態はZuoraに入れることです。その時点で、CustomersDot、Salesforce、ZuoraにわたるトライアルToPaidアクティビティについての統一された顧客定義を持つことができます。
1. Q2CシステムをまたいだFree顧客の顧客定義の統一方法の目標状態はまだ決定されていません。無料ユーザーの数は、SalesforceとZuoraに入れることに課題を提示します。この領域についてはさらに探索が必要です。
1. SalesforceのAccountオブジェクトは、請求アカウントを持つ顧客または請求アカウントを持たない見込み顧客アカウントを持つことができます。

Q2Cの再アーキテクチャは、各フェーズの予想される成果と成果物について対象者と他のクロスファンクショナルチームへの明確なコミュニケーションとともに、さまざまなフェーズで実施されます。

### 整合次元（Conformed Dimensions）

`整合次元`は、エンタープライズ全体で一貫したレポートを確保しながら、複数のファクトやデータマート間で同じ方法でファクトと指標を分類・記述することを可能にします。

`整合次元`は`マスターデータ`に対応し、あらゆるデータウェアハウジング環境の重要な構成要素です。

以下の`マスターデータオブジェクト`がコアビジネスエンティティのために作成され、組織全体のさまざまなアプリケーションで使用でき、関連するメタデータ、属性、定義、ロール、接続、タクソノミーも含まれます。

- BillingAccount
- Customer/User
- Organization
- Order
- Lead
- License

SnowflakeとDbtでのマスターデータオブジェクト開発作業は、次の2つのEpicで追跡されています：[BillingAccount、Orders、Ramps](https://gitlab.com/groups/gitlab-data/-/epics/870)と[Customers、Contacts/Users、Leads](https://gitlab.com/groups/gitlab-data/-/epics/871)。

以下はSnowflakeにおける再アーキテクチャされたデータモデルのEntity Relationship Diagramです。Target Stateタブには、CustomersDot、Zuora、Salesforce、GitLab.comソースシステムから抽出したビジネスエンティティが互いにどのように接続するかが示されています。

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/c8f1520c-e59b-4551-a9db-bfce88bb84dc" id="0GkOGAjoD_O."></iframe></div>

#### コアビジネスオブジェクトの整合次元設計

<details markdown=1>

<summary><b> BillingAccountマスターデータオブジェクト/エンティティ（整合次元設計） </b></summary>

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/ce1cb165-8cae-4e91-9d15-34fd59148f8c" id="f7t5DXE_uu7L"></iframe></div>

</details>

<details markdown=1>

<summary><b> Orderマスターデータオブジェクト/エンティティ（整合次元設計） </b></summary>

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/a7a3b55a-c33c-4806-b79b-0a0f28917735" id="75t5oZ6PBayn"></iframe></div>

</details>

<details markdown=1>

<summary><b> Customer/Userマスターデータオブジェクト/エンティティ（整合次元設計） </b></summary>

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/0e46bd1c-0d15-40d4-8755-d2b45bcc4346" id="L6t5L7s2wK5-"></iframe></div>

</details>
