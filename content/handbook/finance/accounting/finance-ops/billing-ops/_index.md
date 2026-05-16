---
title: "Billing Operations"
upstream_path: "/handbook/finance/accounting/finance-ops/billing-ops/"
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-30T16:57:54+00:00"
---

Billing Operationsハンドブックへようこそ
{.h2}

## チャーター

Billing OperationsチームはRevenue Operations組織の一部です。私たちのBillingチームは、グローバルアカウントポートフォリオの請求機能を担当しています。

**GitLab Billingチームは3つのリージョナルチームで構成されています:**

- Americas - West Region
- Americas - East Region
- EMEA/APAC Region

追加情報とリソースについては、内部 [Wiki](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Billing%20Operations%20&%20Accounts%20Receivable%20Wiki) ページをご覧ください！

## チーム紹介

- [Tim Cheeney](https://gitlab.com/tcheeney) - Director, Billing & Collections (Global)
- [Josephine Hararah](https://gitlab.com/josephinehararah) - Senior Manager, Billing Operations (Global)
- [Kinga Polgardi](https://gitlab.com/kingapolgardi) - Manager, Billing Operations (EMEA and APAC)
- [Cristine Sotomango Marquardt](https://gitlab.com/csotomango) - Manager, Billing Operations (AMER)
- [Karen McKinney](https://gitlab.com/k.mckinney) - Senior Billing Operations Analyst (AMER)
- [Ausha Saptouw](https://gitlab.com/aushas) - Senior Billing Operations Analyst (EMEA)
- [Laura Robins](https://gitlab.com/laurarobins) - Senior Billing Operations Analyst (EMEA)
- [Nicole Ann Garcia](https://gitlab.com/nprecilla) - Billing Operations Analyst (EMEA/APAC)
- [Christian Willis](https://gitlab.com/christianwillis) - Senior Billing Operations Analyst (AMER)
- [Diana Quitevis](https://gitlab.com/dquitevis) - Senior Billing Operations Analyst (AMER)
- [Bernie Jones](https://gitlab.com/berniej) - Billing Operations Analyst (EMEA/APAC)
- [Francisco da Silva](https://gitlab.com/franciscodasilva) - Billing Operations Associate (EMEA/APAC)
- [Joel Javier](https://gitlab.com/jjavier3) - Billing Operations Analyst (EMEA/APAC)

*BillingチームはSales、Deal Desk、Accounts Receivable、Revenue Operationsと緊密に連携しています。*

### 便利なリンク

- [オポチュニティの作成／クォートの構築方法](/handbook/sales/field-operations/sales-operations/deal-desk/)
- [注文要件](/handbook/sales/field-operations/order-processing/)
- [リーガルチームへの連絡](/handbook/sales/field-operations/order-processing/#process-for-agreement-terms-negotiations-when-applicable-and-contacting-legal)
- [ライセンスとプランに関する質問](/handbook/support/internal-support#common-internal-requests---sales-team--customer-success-managers--accounts-receivable)
- [Zuora Billing Tech Stack Guide](https://internal.gitlab.com/handbook/finance/accounting/finance-ops/billing-ops/zuora-billing/)

## Billingとのコミュニケーション

Billingチームメンバーに [Slackで直接連絡](/handbook/communication/#avoid-direct-messages) することは避けてください。#Financeチャンネルで `@billing-ops` にタグ付けしてください。

- メール: `billing@gitlab.com`
- Salesforce: [こちら](/handbook/sales/field-operations/requesting-internal-support/#salesforce-workflow) で説明されているRequesting Internal Supportワークフローに従ってください。これにより、お問い合わせがBilling Operationsチームにルーティングされます。

潜在的な遅延を避けるため、オポチュニティで個別のチームメンバーにタグ付けしないでください。

**クォートに関する質問は？** [こちら](/handbook/sales/field-operations/requesting-internal-support/#salesforce-workflow) で説明されている手順に従ってDeal Deskチームに連絡してください。

## 標準オペレーティングプロセス

BillingチームはZuoraで毎日請求照合とBill Runを実施します。日次のbill runは、前日のすべてのclosed wonオポチュニティを網羅します。

期待されるDeal Desk/Order ManagementからStage `Close Won` までのサイクルは、オポチュニティの複雑さによって12〜15時間です。
期待される `Close Won` から請求書発行までのサイクルは、関連するオポチュニティの複雑さによって24〜48時間です。

> - 請求書テンプレートに関する請求書への手動更新は、Legalを経由する必要があります。
> - SLAは、関連するブッキングエラーにより拒否されたオポチュニティには適用されません。

## 機能的責任

- **請求情報のレビュー**
  - 承認と請求書発行を待つオポチュニティの日次レビュー
  - 関連する請求情報を正確性のために検証
  - 顧客アカウントの価格／パッケージの確認
  - タイムリーで正確な請求書配信を確保するためのシステム情報の照合
- **CRMとERP間のデータ／情報同期の管理**
  - 正確性のためのシステム間の日次照合の実施
  - 請求書送信前に、顧客、エンティティ、クォート、契約、bill-to/sold-to情報が検証されていることを確認
- **請求書の準備、検証、送信**
- **コミッションデータレポートと請求書検証**
- **月末アクティビティ**
  - ブッキングから請求書への照合
  - VATレポートと検証
  - プロフェッショナルサービス請求書の照合
  - 関連するBalance Sheet G/L Accountsの照合

参照: [Internal Billing Checklist](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Billing%20Checklist%202020)

## Billing Operationsシステム

### Salesforce

Salesforceは顧客のソーシング、クォートの作成、すべての顧客情報とサポートドキュメンテーションの保管に使用されます。BillingチームはSFDCを使用してすべての関連顧客ドキュメンテーションとアカウント情報を表示します。

参照: [Business Operations - Salesforce Reference](/handbook/sales/field-operations/sfdc/)

### Zuora

[Zuora](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/staging/doc/architecture#zuora) は、サブスクリプションマネジメント技術スペースのリーダーで、ビジネスのサブスクリプションオペレーションの自動化を可能にするプラットフォームを提供しています。GitLabではZuoraのプラットフォームを使用して、請求書とCRMの他のプラットフォームと統合し、サブスクリプションフローを自動化し、レポート作成を支援します。このプラットフォームは、プロダクトカタログ、サブスクリプション、請求書などの多くの重要なビジネスオブジェクトのsource of truthと見なされています。Zuora Billingの実装に関する詳細については、[Zuora Object Model](https://knowledgecenter.zuora.com/Get_Started/Zuora_business_object_model) とCustomersDotなどのシステムとの統合を含む **[Zuora Billing Tech Stack Guide](https://internal.gitlab.com/handbook/finance/accounting/finance-ops/billing-ops/zuora-billing/)** を参照してください。

- **Zuoraは以下のために使用されます:**
  - すべての顧客アカウントの請求書発行
  - `ar@gitlab.com` を介した請求書送信
  - すべての現金適用（現金レシート）
  - クォーティングのためのSFDCとの統合（Zuora CPQ）
  - Avalara Tax Reporting Softwareとの統合
  - Zuora Revenueとの統合

> Zuora Billingの実装の詳細については、**[Zuora Billing Tech Stack Guide](https://internal.gitlab.com/handbook/finance/accounting/finance-ops/billing-ops/zuora-billing/)** を参照してください。

### Zendesk

Zendeskは顧客からの問い合わせのためのサポートキューです。各ケースはZendeskチケットに変換され、カテゴリ順に `View` にフィルタリングされます。日次ワークフローの一環として、Billing Operationsチームはこれらのビューを監視し、完了までチケットを処理します。

参照: [Zendesk](/handbook/security/customer-support-operations/zendesk/)

## ヘルプの取得方法

<details>
<summary markdown='span'>
  ライセンスへのアクセスにヘルプが必要
</summary>

1. https://customers.gitlab.com/customers/sign_in でアカウントにログイン
1. ログインはメールアドレスです。彼らにメールアドレスを提供する必要があることに注意してください
1. 「Manage Purchases」をクリック
1. 「Download License」をクリック

> それでもライセンスにアクセスできない場合は、[こちら](/handbook/support/internal-support#regarding-licensing-and-subscriptions) でサポートIssueを作成してください。

</details>

<details>
<summary markdown='span'>
 支払いはどのように行えますか？
</summary>

- 現在利用可能な支払い方法は以下を含みます:
  - ACH
  - Wire
  - 小切手（米国のみ）
  - クレジットカード

> 追加の支払い指示は、請求書の `bank information` の下でも利用可能です。

- クレジットカードで支払うには、https://customers.gitlab.com でアカウントにログインしてください
  - `Payment Methods` を選択
  - `Add New Payment Method` を選択

</details>

<details>
<summary markdown='span'>
サードパーティ請求ポータル経由でGitLabに接続する
</summary>

GitLabは現在、さまざまなサードパーティ請求ポータルをサポートしています。

カスタマー請求ポータルは、GitLabが顧客に請求した請求書のPO受領と提出に使用されます。

顧客がサードパーティ請求ポータル経由でGitLabに接続する必要があることを通知した場合、`AR@GitLab.com` にリクエストを提出してください。これにより、Billing Operationsチームがポータル登録がすでに存在するかどうかを確認できます。

- **サードパーティポータルの一部には以下が含まれます:**
  - SAP Ariba - Trade Relationship Request (TRR) をGitLab ANID: AN01024039298宛に `AR@gitlab.com` に送付してください
  - Coupa Supplier Portal - 接続リクエストを `AR@gitlab.com` に送付してください
  - Taulia - 接続リクエストを `AR@gitlab.com` に送付してください

内部チームメンバーは、追加情報とリソースについて [Customer Billing Portal Instructions](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Customer%20Billing%20Portal%20Instructions) を参照してください！

</details>

## Billing FAQ

<details>

<summary markdown='span'>
USD以外の通貨で請求書を発行できますか？
</summary>

GitLabは例外なくUSDのみで請求書を発行します。

</details>

<details>
<summary markdown='span'>
顧客が外国源泉徴収税で支払いを減額したい場合はどうすればよいですか？
</summary>

すべての適用される料金は、私たちのサービス利用規約に従って期限内に支払う必要があります。

私たちの標準サービス利用規約のセクション6. PAYMENT OF FEES、article 6.7。

> 6.7 未払いの料金は、月1パーセント（1.0%）、または法律で許可されている最大値のいずれか低い方の財務料金、および回収費用（合理的な弁護士費用を含む）の対象となります。この契約の料金は、政府機関によって今後または将来課せられるすべての税金または関税を除外し、国家、州、または地方税、売上税、付加価値税、財産およびそれに類する税金（ある場合）を含みます。この契約の料金は、源泉徴収または控除なしで支払われるものとします。**控除または源泉徴収要件の場合、顧客は必要な源泉徴収を自分で支払い、その代わりにGitLabに支払う金額を減額しません。**

GitLab Subscription Agreementは [こちら](/handbook/legal/subscription-agreement/) で確認できます。

</details>

<details>
<summary markdown='span'>
  Webダイレクト注文はどのエンティティで請求されますか？
</summary>

現在、すべてのWebダイレクト（ポータル）購入はGitLab, Inc.（米国）エンティティから請求されています。

</details>

<details>
<summary markdown='span'>
請求書を手動で更新できますか？
</summary>

手動（pro-forma）請求書の修正は例外的な状況でのみ行われ、Billing Leadership Teamによって承認される必要があります。請求書の修正をリクエストする前に、適切な承認があることを確認してください。

</details>

<details>
<summary markdown='span'>
セールスチームは請求書が支払われたかどうかをどうやって知ることができますか？
</summary>

Salesforceの顧客アカウントの `billing account` セクションをレビューしてください。

billing accountは、顧客に利用可能なすべての請求書と支払い情報を提供します。

内部リソース: [How Can Sales View Invoices & Payment Info in SFDC](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/How%20Can%20Sales%20View%20Invoices%20&%20Payment%20Info%20in%20SFDC)

</details>

<details>
<summary markdown='span'>
GitLabは現在、どこで売上に対する税金を課しますか？
</summary>

**場所は以下を含みます:**

- US > US（nexusによる）
- DE > DE
- NL > NL
- UK > UK
- AU > AU
- US > Canada（ケベック州とブリティッシュコロンビア州のみ）
- US > South Africa
- US > Russian Federation

内部リソース: [VAT & Sales Tax Information & Resources](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/VAT%20&%20Sales%20Tax%20Information%20&%20Resources)

参照: [The GitLab Tax Team](/handbook/finance/tax/)

</details>

<details>

<summary markdown='span'>
顧客はGitLab Customers Portalから請求書を閲覧できますか？
</summary>

はい、顧客はGitLab Customers Portalで請求書を閲覧できます！顧客アカウント管理者は、ポータルの右上のオプションから `View Invoices` オプションを選択し、`Download as PDF` オプションを選択して発行済みの請求書を閲覧することで請求書にアクセスできます。

</details>

## GitLab Billing Entities

グローバル企業として、GitLabは世界中に場所を持っています。

- 米国のGitLab Inc
- オランダのGitLab BV
- 英国のGitLab Ltd
- ドイツのGitLab GmbH
- オーストラリアのGitLab PTY LTD

[Quote Entity Information](/handbook/sales/field-operations/sales-operations/deal-desk/#quote-entity-information)

**注:** ポータル経由で注文された初回Webダイレクトサブスクリプションはすべて、米国エンティティに配置されます。

> 明確化: 初回注文がDEエンティティから請求された場合（セールスアシスト注文経由）、顧客がポータル経由でアドオンを注文すると、アドオンもDEから請求されます。

**重要:** アドオンの場合、アドオンクォート／注文フォームには初回／ベース取引と同じ請求書エンティティが反映されている必要があります。
