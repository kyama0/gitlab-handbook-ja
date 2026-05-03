---
title: "請求オペレーション"
upstream_path: "/handbook/finance/accounting/finance-ops/billing-ops/"
upstream_sha: "8aa1a9efd98433fb2296996366f1023b5675ea70"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

請求業務ハンドブックへようこそ
{.h2}

## 憲章

請求業務チームは Revenue Operations 組織の一部です。私たちの請求チームはグローバルアカウントポートフォリオの請求業務を担当します。

**GitLab 請求チームは 3 つの地域チームで構成されています：**

- 米州 - 西部地域
- 米州 - 東部地域
- EMEA/APAC 地域

追加情報とリソースについては、内部の [Wiki](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Billing%20Operations%20&%20Accounts%20Receivable%20Wiki) ページをご覧ください！

## チームメンバーの紹介

- [Tim Cheeney](/handbook/company/team/#tcheeney) - ディレクター、請求＆回収（グローバル）
- [Josephine Hararah](/handbook/company/team/#josephinehararah) - シニアマネージャー、請求オペレーション（グローバル）
- [Kinga Polgardi](/handbook/company/team/#kingapolgardi) - マネージャー、請求オペレーション（EMEA および APAC）
- [Cristine Sotomango Marquardt](/handbook/company/team/#csotomango) - マネージャー、請求オペレーション（AMER）
- [Karen McKinney](/handbook/company/team/#k.mckinney) - シニア請求オペレーションアナリスト（AMER）
- [Ausha Saptouw](/handbook/company/team/#aushas) - シニア請求オペレーションアナリスト（EMEA）
- [Laura Robins](/handbook/company/team/#laurarobins) - シニア請求オペレーションアナリスト（EMEA）
- [Nicole Ann Garcia](/handbook/company/team/#nprecilla) - 請求オペレーションアナリスト（EMEA/APAC）
- [Christian Willis](/handbook/company/team/#christianwillis) - シニア請求オペレーションアナリスト（AMER）
- [Diana Quitevis](/handbook/company/team/#dquitevis) - シニア請求オペレーションアナリスト（AMER）
- [Bernie Jones](/handbook/company/team/#berniej) - 請求オペレーションアナリスト（EMEA/APAC）
- [Francisco da Silva](/handbook/company/team/#franciscodasilva) - 請求オペレーションアソシエイト（EMEA/APAC）
- [Joel Javier](/handbook/company/team/#jjavier3) - 請求オペレーションアナリスト（EMEA/APAC）

*請求チームはセールス、Deal Desk、売掛金、Revenue Operations と緊密に連携して業務を行います。*

### 役立つリンク

- [商談の作成/見積もりの作成方法は？](/handbook/sales/field-operations/sales-operations/deal-desk/)
- [注文要件](/handbook/sales/field-operations/order-processing/)
- [法務チームへの連絡](/handbook/sales/field-operations/order-processing/#process-for-agreement-terms-negotiations-when-applicable-and-contacting-legal)
- [ライセンスとプランに関する質問](/handbook/support/internal-support#common-internal-requests---sales-team--customer-success-managers--accounts-receivable)
- [Zuora 請求テックスタックガイド](https://internal.gitlab.com/handbook/finance/accounting/finance-ops/billing-ops/zuora-billing/)

## 請求チームとの連絡

[Slack でのダイレクトメッセージを避けて](/handbook/communication/#avoid-direct-messages)、請求チームメンバーに直接連絡することは控えてください。#Finance チャンネルで `@billing-ops` をタグ付けしてください。

- メール：`billing@gitlab.com`
- Salesforce：[こちら](/handbook/sales/field-operations/requesting-internal-support/#salesforce-workflow)で説明されている内部サポートリクエストのワークフローに従ってください。これにより、お問い合わせが請求オペレーションチームに確実にルーティングされます。

遅延を避けるために、個別のチームメンバーに商談のタグ付けをしないでください。

**見積もりに関する質問は？** [こちら](/handbook/sales/field-operations/requesting-internal-support/#salesforce-workflow)で説明されている手順に従い、Deal Desk チームにお問い合わせください。

## 標準的な業務プロセス

請求チームは Zuora で毎日の請求照合と請求実行を行います。日次請求実行は前日のすべての受注確定（Close Won）の商談を対象とします。

Deal Desk/受注管理から「Close Won」ステージまでの予想サイクルは、商談の複雑さによって 12〜15 時間です。
「Close Won」から請求書までの予想サイクルは、関連する商談の複雑さによって 24〜48 時間です。

> - 請求書テンプレートに関する手動更新はすべて法務を通じて行う必要があります。
> - 予約エラーに関連する商談については SLA は適用されません。

## 機能上の責任

- **請求情報のレビュー**
  - 承認待ちおよび請求待ちの商談の日次レビュー
  - 関連する請求情報の正確性を検証
  - 顧客アカウントの価格/パッケージングを確認
  - システム情報を照合して適時かつ正確な請求書の配送を確保
- **CRM と ERP 間のデータ/情報の同期管理**
  - 正確性のために毎日システム間の照合を実施
  - 請求書提出前に顧客、法人、見積もり、契約、請求先/販売先情報が確認されていることを確認
- **請求書の準備、検証、送付**
- **コミッションデータレポートと請求書の検証**
- **月末活動**
  - 予約から請求書への照合
  - VAT レポートと検証
  - プロフェッショナルサービスの請求照合
  - 関連する貸借対照表 G/L 勘定の照合

参照：[内部請求チェックリスト](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Billing%20Checklist%202020)

## 請求オペレーションシステム

### Salesforce

Salesforce は顧客のソーシング、見積もりの作成、すべての顧客情報とサポートドキュメントの管理に使用されます。請求チームは SFDC を使用して、すべての関連する顧客ドキュメントとアカウント情報を確認します。

参照：[ビジネスオペレーション - Salesforce リファレンス](/handbook/sales/field-operations/sfdc/)

### Zuora

[Zuora](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/staging/doc/architecture#zuora) は、サブスクリプション管理テクノロジーの分野のリーダーであり、企業のサブスクリプション業務を自動化するプラットフォームを提供します。GitLab では Zuora のプラットフォームを使用して、請求と CRM のための他のプラットフォームとの統合、サブスクリプションフローの自動化、レポート作成のサポートを行っています。このプラットフォームは、プロダクトカタログ、サブスクリプション、請求書など、多くの重要なビジネスオブジェクトの信頼できる情報源とみなされています。Zuora Billing の実装に関する詳細（[Zuora オブジェクトモデル](https://knowledgecenter.zuora.com/Get_Started/Zuora_business_object_model)や CustomersDot などのシステムとの統合を含む）については、**[Zuora 請求テックスタックガイド](https://internal.gitlab.com/handbook/finance/accounting/finance-ops/billing-ops/zuora-billing/)** をご覧ください。

- **Zuora は以下のために使用されます：**
  - すべての顧客アカウントの請求
  - `ar@gitlab.com` 経由の請求書送付
  - すべての現金処理（現金受領）
  - 見積もりのための SFDC との統合（Zuora CPQ）
  - Avalara 税務報告ソフトウェアとの統合
  - Zuora Revenue との統合

> 技術的な実装の詳細については、**[Zuora 請求テックスタックガイド](https://internal.gitlab.com/handbook/finance/accounting/finance-ops/billing-ops/zuora-billing/)** をご覧ください。

### Zendesk

Zendesk は顧客からの問い合わせのサポートキューです。各ケースは Zendesk チケットに変換され、カテゴリ別に「ビュー」にフィルタリングされます。日常のワークフローの一環として、請求オペレーションチームはこれらのビューを監視し、チケットを完了まで処理します。

参照：[Zendesk](/handbook/security/customer-support-operations/zendesk/)

## サポートの受け方

<details>
<summary markdown='span'>
  ライセンスへのアクセスが必要な場合
</summary>

1. https://customers.gitlab.com/customers/sign_in でアカウントにログインします。
1. メールアドレスでログインします（メールアドレスを提供する必要があります）。
1. 「Manage Purchases」をクリックします。
1. 「Download License」をクリックします。

> それでもライセンスにアクセスできない場合は、[こちら](/handbook/support/internal-support#regarding-licensing-and-subscriptions)でサポート Issue を作成してください。

</details>

<details>
<summary markdown='span'>
 支払い方法は？
</summary>

- 現在利用可能な支払い方法には以下が含まれます：
  - ACH
  - 電信送金
  - 小切手（米国のみ）
  - クレジットカード

> 追加の支払い指示も請求書の「bank information」に記載されています。

- クレジットカードで支払うには、https://customers.gitlab.com にログインしてください。
  - `Payment Methods` を選択します。
  - `Add New Payment Method` を選択します。

</details>

<details>
<summary markdown='span'>
サードパーティの請求ポータルを通じた GitLab との接続
</summary>

GitLab は現在、さまざまなサードパーティの請求ポータルをサポートしています。

顧客の請求ポータルは、GitLab が顧客に請求する請求書の PO 受領と提出に使用されます。

顧客がサードパーティの請求ポータルを通じて GitLab と接続する必要があると伝えた場合は、`AR@GitLab.com` にリクエストを送付してください。これにより、請求オペレーションチームがポータルの登録がすでに存在するかどうかを確認できます。

- **一部のサードパーティポータルには以下が含まれます：**
  - SAP Ariba - GitLab ANID: AN01024039298 への取引関係リクエスト（TRR）を `AR@gitlab.com` に送付してください。
  - Coupa Supplier Portal - 接続リクエストを `AR@gitlab.com` に送付してください。
  - Taulia - 接続リクエストを `AR@gitlab.com` に送付してください。

社内チームメンバーの方は、追加情報とリソースについて[顧客請求ポータルの手順](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Customer%20Billing%20Portal%20Instructions)をご覧ください！

</details>

## 請求 FAQ

<details>

<summary markdown='span'>
USD 以外の通貨で請求書を発行できますか？
</summary>

GitLab は例外なく USD のみで請求します。

</details>

<details>
<summary markdown='span'>
顧客が外国源泉徴収税を差し引いて支払いたい場合は？
</summary>

適用されるすべての費用は、利用規約に従って支払い期日に支払うものとします。

標準利用規約の第 6 条（支払い）第 6.7 項：

> 6.7 未払いの料金には、月 1%（1.0%）または法律で許可された最大値のうち低い方の財務費用、加えて合理的な弁護士費用を含むすべての回収費用が課されます。本契約に基づく料金は、現在または今後、いかなる政府機関によっても課される国税、州税または省税、売上税、付加価値税、財産税および類似税を含むすべての税金または関税を除いた金額です。本契約に基づく料金はいかなる源泉徴収または控除なしに支払われます。**源泉徴収または控除の要件がある場合、お客様は必要な源泉徴収を自ら支払い、それに基づいて GitLab に支払う金額を減額しません。**

GitLab のサブスクリプション契約は[こちら](/handbook/legal/subscription-agreement/)でご確認いただけます。

</details>

<details>
<summary markdown='span'>
  ウェブダイレクト注文はどの法人で請求されますか？
</summary>

現在、すべてのウェブダイレクト（ポータル）購入は GitLab, Inc.（US）法人から請求されます。

</details>

<details>
<summary markdown='span'>
請求書を手動で更新できますか？
</summary>

手動（準）請求書の変更は例外的な状況でのみ行われ、請求リーダーシップチームを通じて承認される必要があります。請求書の変更をリクエストする前に適切な承認を取得してください。

</details>

<details>
<summary markdown='span'>
セールスチームは請求書が支払われたかどうかを知る方法はありますか？
</summary>

Salesforce の顧客アカウントの `billing account` セクションをご確認ください。

請求アカウントは顧客について利用可能なすべての請求書と支払い情報を提供します。

社内リソース：[セールスが SFDC で請求書と支払い情報を確認する方法](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/How%20Can%20Sales%20View%20Invoices%20&%20Payment%20Info%20in%20SFDC)

</details>

<details>
<summary markdown='span'>
GitLab は現在どこで販売税を課税していますか？
</summary>

**対象地域は以下の通りです：**

- US > US（ネクサスによって異なります）
- DE > DE
- NL > NL
- UK > UK
- AU > AU
- US > カナダ（ケベック州とブリティッシュコロンビア州のみ）
- US > 南アフリカ
- US > ロシア連邦

社内リソース：[VAT と消費税の情報とリソース](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/VAT%20&%20Sales%20Tax%20Information%20&%20Resources)

参照：[GitLab 税務チーム](/handbook/finance/tax/)

</details>

<details>

<summary markdown='span'>
顧客は GitLab 顧客ポータルで請求書を閲覧できますか？
</summary>

はい、顧客は GitLab 顧客ポータルで請求書を閲覧できます！顧客アカウントの管理者は、ポータルの右上のオプションから `View Invoices` オプションを選択し、発行済みの請求書を閲覧するために `Download as PDF` オプションを選択することでアクセスできます。

</details>

## GitLab の請求法人

グローバル企業として、GitLab は世界中に拠点を持ちます。

- GitLab Inc（米国）
- GitLab BV（オランダ）
- GitLab Ltd（英国）
- GitLab GmbH（ドイツ）
- GitLab PTY LTD（オーストラリア）

[見積もり法人情報](/handbook/sales/field-operations/sales-operations/deal-desk/#quote-entity-information)

**注意：** ポータルを通じて行われる初期のウェブダイレクトサブスクリプションはすべて US 法人に設定されます。

> 補足：初回注文が（セールスアシスト注文を通じて）DE 法人で請求された場合、顧客がポータルでアドオンを注文すると、アドオンも DE 法人で請求されます。

**重要：** アドオンの場合、アドオンの見積もり/注文フォームは初期/ベース取引と同じ請求法人を反映する必要があります。
