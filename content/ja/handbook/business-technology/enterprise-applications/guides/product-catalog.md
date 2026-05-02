---
title: "製品カタログガイド"
description: "SKU の作成または変更をリクエストする方法。"
upstream_path: "/handbook/business-technology/enterprise-applications/guides/product-catalog/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T06:02:44Z"
translator: "claude"
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## 変更管理と SDLC プロセス

SOX/監査目的のため、Zuora Billing 製品カタログへのすべての変更は、[Business Technology Change Management](https://internal.gitlab.com/handbook/IT/it-change-management/) のポリシーおよび [Software Development Lifecycle Process for Finance Systems](https://gitlab.com/groups/gitlab-com/business-technology/enterprise-apps/financeops/-/wikis/SDLC-for-Finance-Systems) に準拠して適切にテストされなければなりません。

## SKU の作成または変更をリクエストする方法

**SKU リクエスト Issue を提出する前に**、[Product Launch Process](/handbook/product/product-processes/product-launch/) のすべての手順を読んで完了してください。これにより、製品ローンチが効率的かつ効果的に行われることが確保されます。SKU の作成または変更の Issue を作成する前に、ビジネススポンサーまたはプログラムマネージャーが割り当てられ、ビジネス要件が明確に定義されている必要があります。

ビジネススポンサーが SKU リクエストを記録するために選択できる 3 つの Issue テンプレートが[このディレクトリ](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#)にあります。


<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**一般的なユースケース**

</div>
<div class="px-4 py-3">

1. **Professional Services SKU** を**作成**または**更新**する場合:
    - `CM: Add_New_PS_SKU` テンプレートを使用して[このディレクトリ](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#)に Issue を開きます
    - このハンドブックページの [SKU の新規作成または更新方法](#how-to-create-new-or-update-a-sku) セクションの手順に従います
2. **Non-Professional Services SKU** を**作成**または**更新**する場合:
    - `CM: Add_New_SKU` テンプレートを使用して[このディレクトリ](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#)に Issue を開きます
    - このハンドブックページの [SKU の新規作成または更新方法](#how-to-create-new-or-update-a-sku) セクションの手順に従います。
3. **既存の SKU を廃止**する場合:
    - `CM: Retire_SKU` テンプレートを使用して[このディレクトリ](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#)に Issue を開きます
    - このハンドブックページの [SKU の廃止方法](#how-to-retire-a-sku) セクションの手順に従います

</div>

</div>


## SKU の新規作成または更新方法

要求されている SKU の変更について情報を提供し、必要な承認を取得することはビジネススポンサーの責任です。SKU を構成する前に、SKU Issue テンプレートのステップ 1〜4 を完了して必要な承認を取得する必要があります。**Issue の右側のパネルにある `Edit` ボタンをクリックして、SKU リクエスト Issue をご自身に割り当てください。**

一般的に、新しい SKU の作成には 6〜8 週間かかります。この期間には 4 つの主要なステップが含まれます。この[フロー](https://lucid.app/lucidchart/bc3b2fae-8007-4ecc-b246-83e078ba7b6e/edit?viewport_loc=2618%2C46%2C3328%2C1592%2C0_0&invitationId=inv_700137df-67d0-4833-a808-2ebc12d27f33)は、Enterprise Applications (Salesforce, Zuora) と CDOt（ウェブストア）で SKU を作成する手順を説明しています。これには、GitLab での機能へのカスタマーアクセスのプロビジョニングにかかる時間は含まれていません。

1. SKU の要件収集とクロスファンクショナルな承認
2. Enterprise Apps の SKU ビルドとテストデータ生成
3. ユーザー受け入れテストとクロスファンクショナルな承認
4. SKU のデプロイ


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

新しい SKU のレビューと承認にかかる全体的な時間を短縮するために、[このような](https://gitlab.slack.com/archives/C03KMK6LASY)専用の Slack チャンネルを作成することを検討してください。

</div>


## ステップ 1. SKU 要件の収集とクロスファンクショナルな承認

**オーナー:** ビジネススポンサーまたは割り当てられた TPM
<br>**予想所要時間:** 2〜3 週間

### ステップ 1a. 製品情報

このセクションでは、製品提供に関するビジネスおよびテクニカルの要件を説明します。[Product Launch Process](/handbook/product/product-processes/product-launch/) のすべての手順が完了していれば、ほとんどの質問にはすでに回答されているはずです。SKU の Issue でできる限り回答してください。

**概要 / ビジネス要件**

1. `Overview of Product/Service`（製品/サービスの概要）
    - SKU の概要と顧客に提供される価値を説明してください。
2. `Desired Go-Live Date`（希望する稼働開始日）
    - 新しい SKU の使用が期待される具体的な日付を指定してください。
    - この日付はリクエストの受け付けと優先順位付けに役立つものであり、必ずしも SKU がその日付までに販売可能になることを意味しないことに注意してください
    - 要件からデプロイまで、SKU の作成には 6〜8 週間かかることを覚えておいてください。
3. `Product/Service Type for Quoting`（見積もり用の製品/サービスの種類）
    - SKU がベース製品（Premium、Ultimate、Dedicated など）かアドオン製品（ストレージ、Professional Services など）かを特定してください
4. `How will the SKU be sold to Customers?`（SKU を顧客にどのように販売しますか？）
    - 顧客がセールスチームのサポートなしで SKU を購入できるか、セールス担当者のサポートを受けて購入するかを特定してください
    - セルフサービスの場合は Fulfillment からのクロスファンクショナルな承認が必要
    - 必要に応じて、SKU はセルフサービスとセールス支援の両方で販売できます
5. `What GitLab product features should this SKU enable?`（この SKU はどの GitLab 製品機能を有効にする必要がありますか？）
   - この SKU に対して有効にする必要がある GitLab 製品機能を特定してください
   - 製品機能については Fulfillment からのクロスファンクショナルな承認が必要
6. `What type of GitLab instance will this SKU support? Please check any applicable boxes below:`（この SKU はどの種類の GitLab インスタンスをサポートしますか？該当するものをすべてチェックしてください:）
   - この SKU を購入できる GitLab インスタンスを特定してください。
   - 必要に応じて複数のオプションを選択できます
7. `Will we have restrictions on the type of subscriptions (i.e. SaaS, Self-Managed, Premium, Ultimate, etc.) this product offering can be added to?`（この製品提供を追加できるサブスクリプションの種類（SaaS、セルフマネージド、Premium、Ultimate など）に制限がありますか？）
   - この SKU を購入できる顧客の種類に制限があるかどうかを特定してください
   - 制限がある場合は SalesOps からのクロスファンクショナルな承認が必要
   - SKU の見積もりへの対応に追加の開発作業が必要になるため、利用可能になるまでの時間が増加することに注意してください
8. `Are there restrictions to the minimum or maximum quantity of this SKU?`（この SKU の最小または最大数量に制限がありますか？）
   - 顧客がこの SKU を購入するために最小または最大要件（シート数、ストレージ、ライセンス数など）を満たす必要があるかどうかを特定してください
   - 制限がある場合は SalesOps からのクロスファンクショナルな承認が必要
   - SKU の見積もりへの対応に追加の開発作業が必要になるため、利用可能になるまでの時間が増加することに注意してください
9. `Will renewals be handled via the webstore (self-service) or only by a sales rep (sales-assisted)?`（更新はウェブストア（セルフサービス）で処理されますか、それともセールス担当者（セールス支援）のみを通じて処理されますか？）
    - **これは定期的な製品にのみ適用されます**。サブスクリプションは、更新前に削除されなければ定期 SKU で更新されます
    - 顧客がセールスチームのサポートなしにサブスクリプションを更新できるか、または顧客がセールス担当者を通じなければならないかを特定してください
    - 必要に応じて、両方のオプションを選択できます
10. `Should we allow customers to automatically renew with this SKU?`（顧客がこの SKU で自動更新できるようにするべきですか？）
    - **これは定期的な製品にのみ適用されます**。サブスクリプションは、更新前に削除されなければ定期 SKU で更新されます
    - 顧客がこの SKU でサブスクリプションを自動更新できるようにするべきかどうかを特定してください
11. `Will this SKU replace any of GitLab's current product offerings?`（この SKU は GitLab の現在の製品提供のいずれかを置き換えますか？）
    - この SKU が現在顧客に販売されている SKU を置き換えるかどうかを特定してください
    - この新しい SKU が現在の SKU を置き換える場合は、`CM: Retire_SKU` テンプレートを使用して[このディレクトリ](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#)に Issue を開いて現在の SKU を廃止してください（**[SKU の廃止方法](#how-to-retire-a-sku)** を参照）

**SKU 構成の要件**


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

Issue テンプレートでは、アスタリスク 3 つ（***）は「非標準」の構成リクエストを示しており、**Fulfillment と Sales Operations からの追加のクロスファンクショナルな承認が必要です。**

</div>


1. `Rate Plan Name`（レートプラン名）
    - これは SKU の顧客向け名称です。`Rate Plan Name` は `デプロイメントの種類 - 名前` の形式にする必要があります。例:
   1. `Self Managed - Ultimate`
   1. `SaaS - Ultimate`
   1. `Dedicated - Ultimate`
1. `Rate Plan Charge Description`（レートプランチャージの説明）
    - ウェブストアのチェックアウトでは、顧客に表示される短い説明です
    - セールス支援の場合は、見積もり時に表示される製品の短い説明です
    - Professional Services SKU の場合は通常、ここにサービス説明への URL が含まれます
1. `Charge Type:`（チャージの種類:）
    - チャージの種類は 3 つあります。以下の説明に基づいてユースケースに適したものを選択してください:
    - Recurring Charges（定期チャージ）: サブスクリプションから削除されるまで定期的に請求されるチャージ。
    - One-Time Charges（1 回限りのチャージ）: 1 回のみ請求されるチャージ。
    - Usage Charges（使用量チャージ）: 消費量に基づいて後払いで請求されるチャージ。
    - `Usage`（使用量）を選択した場合は、`Any Included Units?`（含まれるユニットはありますか？）セクションに入力してチャージに含まれるユニットがあるかどうかを特定してください（例: *1000 分を含む電話プランで超過後に追加料金*）。
1. `Charge Model:`（チャージモデル:）
   - チャージモデルは 4 つあります。以下の説明に基づいてユースケースに適したものを選択してください:
   - `Per Unit Pricing`（単価制）では、製品/サービスは単位あたりの価格で設定されます。
   - `Flat Fee`（均一料金）では、製品/サービスは購入ごとに 1 つの固定価格で設定されます。
   - `Tiered`（段階的）では、製品/サービスはボリュームの変化に応じて段階的に価格が設定されます。
   - `Volume`（ボリューム）では、製品/サービスは購入したボリュームに基づいて価格が設定されます。
1. `Unit of Measure (UOM):`（測定単位:）
    - この SKU に使用する既存の UOM を選択してください。最も一般的な測定単位は `Seat`（シート）です
    - 別の UOM が必要な場合は `Other`（その他）を選択して名前を付けてください
    - 製品が `Flat Fee`（均一料金）チャージモデルの場合、このセクションは対象外です
1. `Charge Timing:`（チャージのタイミング:）顧客はどのように支払うことが期待されますか？
   - この SKU に対して顧客が支払う方法を選択してください
1. `List Price:`（定価:）
   - SKU のドル金額の価格を追加してください。この SKU に測定単位が関連付けられている場合は、UOM あたりのドル金額を説明してください（例: *$250/シート/四半期*）

**収益認識の要件**

- 請求書発行、収益、カスタムフィールドのセクションに関するインプットのために Makesh Subramanian `@msubramanian` をアサインしてください
- これは SKU の構成と適切な収益認識のために必要です

**税務要件**

- 税務セクションに関するインプットのために Sally Tian `@stian13` をアサインし、正しい税コードを特定するためのサービス説明を含めてください
- これは SKU の構成と適切な消費税の収集のために必要です

**データ要件**

- [GitLab Handbook](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/tiers/) の定義に基づいて、この製品提供の Product Tier、Delivery、Deployment フィールドに関するインプットのために Israel Weeks `@iweeks` をアサインしてください
- これは SKU の構成とデータの整合性確保のために必要です

### ステップ 1b. 価格と非標準リクエストに対するクロスファンクショナルな承認


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

**価格の承認は常に必要です。** 前のステップで要求された内容に応じて、Fulfillment と Sales Operations からの追加承認が必要になる場合があります。

</div>


**価格の承認は常に必要:**

- Cost of Goods Sold (COGS) スプレッドシートへのリンクを提供してください（[このテンプレート](https://docs.google.com/spreadsheets/d/1em_4RiKOzvA3W9N4FxjmDxH6Rtr4my_o6ZifSXEWz0o/edit#gid=1853638008)のコピーを作成してください）
- 内部提供サービスのプロジェクトマージンが 55% を下回る場合は正当な理由を提供してください
- SKU の Issue で @justinfarrris から承認を取得してください

**Fulfillment の承認が必要な場合:**

- 提案された SKU が（セルフサービスで）顧客に販売される予定の場合
- 提案された SKU を含むサブスクリプションがセルフサービスのサブスクリプション変更（例：セルフサービスでの更新なし）に対して特定の動作をする予定の場合
- 非標準（***）のチャージの種類、チャージモデル、チャージのタイミングのリクエスト
- 提案された SKU が顧客（SaaS または SM）に特定の製品機能をプロビジョニングする予定の場合
- `Fulfillment Product Managers` から承認を取得してください

**Sales Operations の承認が必要な場合:**

- SKU の見積もりの可否に制限がある場合（特定のグループのみ販売可能）
- 非標準（***）のチャージの種類、チャージモデル、チャージのタイミングのリクエスト
- `Senior Manager of Deal Desk` から承認を取得してください

### ステップ 1c. 財務

**非標準の収益認識アプローチ**が必要な場合は Finance の承認が必要です。ビジネススポンサーはステップ 3 のインプットのために担当 DRI と連絡を取る必要があります。

### ステップ 1d. マネジメントの承認

ステップ 4 のマネジメント承認者に Issue をアサインします。ステップ 5 に進む前にすべての前提条件と承認が取得されていることを確認するのはビジネススポンサーの責任です。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

必要な承認は Professional Services SKU か Non-Professional Services SKU のリクエストかによって異なります。各承認者への連絡方法は該当する SKU Issue テンプレートに記載されています。

</div>



<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**次のステップ**

</div>
<div class="px-4 py-3">

- 上記のすべてのステップが完了して必要な承認が取得されたら、~"SKU - Gathering Requirements" ラベルを削除して `@gitlab-com/business-technology/enterprise-apps/financeops` にタグを付け、SKU リクエストを Zuora Billing 製品カタログで構成して Salesforce で見積もり可能にするための受け付けと優先順位付けを行います。すべての変更は SOX/監査目的のため [Business Technology Change Management](https://internal.gitlab.com/handbook/IT/it-change-management/) に従わなければならないことに注意してください。
- SKU がチャンネルを通じて販売される場合は、SKU を四半期更新 Issue、来季の価格表、およびその他の必要な情報に追加するために、ステップ 6 に記載されている `Sales Operations Analyst` に Issue をアサインしてください
- SKU にサービス説明が必要な場合は、ステップ 7 を完了するのはビジネススポンサーの責任です

</div>

</div>


## ステップ 2: SKU ビルドとテストデータ生成

**オーナー:** Enterprise Applications
<br>**予想所要時間:** 2〜3 週間

Enterprise Applications とシステムチームが test1 のステージング環境で SKU をビルドします。

Enterprise Applications は承認されたテストケースに基づいて、ユーザー受け入れテストで使用するテストデータを生成します。

## ステップ 3: ユーザー受け入れテストとクロスファンクショナルな承認

**オーナー:** ビジネススポンサーまたは割り当てられた TPM
<br>**予想所要時間:** テストケース生成と承認に 1 週間（SKU ビルドと並行して実施可能）。テストとサインオフに 2 週間

### ステップ 3a. UAT Issue の作成

[このディレクトリ](https://gitlab.com/gitlab-com/Product/-/issues/new?issuable_template=SKU-UAT-template)に UAT Issue テンプレートがあります。Issue を開き `SKU UAT template` を使用してください。

 **UAT Type（UAT の種類）**: このセクションでは、ユーザー受け入れテストが既存の SKU 向けか新しい SKU 向けかを判断します。

 **Pre-Testing Checklist（テスト前チェックリスト）**:

- *Stakeholder & Timeline Alignment（ステークホルダーとタイムラインの調整）*
  - このセクションは UAT テストの[タイムライン]を概説するために使用されます
- *Test Case Readiness（テストケースの準備状況）*
  - このセクションは以下の目的で使用されます:
    - マスタースプレッドシートのコピーを作成し、このセクションのリンクを Issue に貼り付けます
    - すべての DRI がテストケースを承認していることを確認します
- *System Readiness（システムの準備状況）*
  - Enterprise Apps と Fulfillment が完了するセクション

**Testing DRIs（テスト DRI）**

これらのチームが通常 SKU テストに関与します:

- Deal Desk
- Billing & AR
- Fulfillment
- Data
- Revenue
- Finance

各チームは以下を確認する必要があります:

- そのチームのテストの期待される DRI
- チームが上記のタイムライン調整で定められたテスト可能期間にテストを実施できること
- テスト対象のテストケースを承認していること

**Test Scenarios（テストシナリオ）**
<br> このセクションを使用してテストケースへのリンクを貼り付けてください

**Bugs Identified（特定されたバグ）**
<br> このセクションはユーザー受け入れテスト中のバグを追跡するために使用されます。

**Final Testing Sign Off（最終テストサインオフ）**
<br> このセクションはテストに参加したクロスファンクショナルチームからの最終サインオフを受け取るために使用されます

### ステップ 3b: UAT タイムラインの見積もり

[Testing DRIs] によって承認される必要がある重要な日付とタイミングがいくつかあります:

- Ent Apps が SKU ビルドをステージング/テスト環境で完了する日付
- UAT テストケースがすべての Testing DRIs によって確定・承認される日付
- Ent Apps がテストデータを生成する日付
- クロスファンクショナルな Testing DRIs がテストを実施する日付
  - 2〜3 営業日: Q2C と Deal Desk
  - 2〜3 営業日: Billing & AR
  - 2〜3 営業日: Fulfillment、Data、Revenue、FP&A
- ユーザー受け入れの最終サインオフ/承認の日付

上記の推定日付を概説し、以下のチームがタイムラインを承認していることを確認してください:

- すべての [Testing DRIs]
- Enterprise Applications の Caroline Swanson

### ステップ 3c: UAT テストケースのドラフト作成

- [マスタースプレッドシート](https://docs.google.com/spreadsheets/d/1awATKGhVKLRh3LpyVllCnCQYsV4vjakoijsW5K8dY_4/edit?gid=2069598564#gid=2069598564)のコピーを作成します
- スプレッドシートの列 A から J に入力します
- **列 A:** テストケース番号。テストケースの番号付けにはこの形式を使用してください:
  - TC（テストケース）
  - SKU の略称。例えば Duo Enterprise なら DE
  - 01（テストケース番号）
    - Duo Enterprise のテストケース番号 1 は TC-DE-01 となります
- **列 B:** 購入方法
  - セールス支援またはセルフサービスのどちらかになります
- **列 C:** ディール種別
  - 新規、アップグレード、ダウングレード、更新、解約のいずれかになります
- **列 D:** 購入経路:
  - ダイレクトまたはパートナーシップのどちらかになります
- **列 E:** 期間
  - 期間は契約の長さです（12 か月、24 か月、36 か月）
- **列 F:** ランプ？
  - 複数年契約で価格がランプするかどうか、はいまたはいいえになります
- **列 G:** ランプセグメント
- **列 H:** 製品種別
  - インスタンスの種類: SaaS、セルフマネージド、または Dedicated
- **列 I:** 製品ティア
  - 製品ティア: Free、Premium、Ultimate
- **列 J:** ユースケースの概要
  - このテストケースが何をテストしようとしているかを説明します
- **列 K から AN** はテスト中に Testing DRIs によって入力されます

テストケースは SKU によって異なります。ただし、ほとんどのテストケースには以下のようなシナリオが含まれる可能性があります:

- 製品を含む新規ディール
- 複数年の期間でランプが必要なディール
- 1 つの製品から別の製品へのアップグレードまたはダウングレードのディール
- ディールの更新または解約
- テストが必要な契約条件: 例えば、最小または最大が確実にテストされること、必須アタッチルールがテストされることの確認など

すべての取引シナリオをテストする必要はありません。Jesse Rabbits が初期テストケースの検証と追加に協力できます。

### ステップ 3d: ビジネスオーナーシップの割り当てとタイミングおよびテストケースの承認取得

Issue の [Testing DRIs] セクションに記載されている担当者をアサインします

各チームは以下を確認する必要があります:

- そのチームのテストの期待される DRI
- チームが上記のタイムライン調整で定められたテスト可能期間にテストを実施できること
- テスト対象のテストケースを承認していること

### ステップ 3e: UAT の実施とバグ/Issue の追跡

承認されたタイミングの日付に、概説された [Testing DRIs] が承認されたテストケースのテストケースを実施します

Testing DRIs は UAT Issue を使用して特定されたバグや問題を報告します。これらのバグと問題は Issue の [Bugs Identified] セクションで追跡されます

ほとんどのバグ修正は Testing DRI と Enterprise Applications の間で実施されます。

### ステップ 3f: UAT の完了とクロスファンクショナルな承認

すべての [Testing DRIs] が Issue で最終サインオフと承認を行う必要があります。

完了後、UAT は完了とみなされます

## ステップ 4: Enterprise Applications への SKU デプロイ

**オーナー:** Enterprise Applications
<br>**予想所要時間:** 2〜3 日

Enterprise Applications が本番環境の Enterprise Applications に SKU をデプロイします
SKU は常に水曜日にデプロイされます
[デプロイスケジュールを追加]

## 本番稼働後の SKU 変更

このセクションでは、SKU が Zuora Billing で構成された後に変更できる情報とできない情報を概説します。

### 変更可能な情報

1. 価格
2. 名前（Product、Product Rate Plan、Product Rate Plan Charge）
3. 収益認識ルール: Revenue チームと連携して変更可能
4. Zuora Revenue フィールド
5. 測定単位
6. 税コード

### 変更できない情報

1. Zuora IDs（Fulfillment とデータが使用するため）
2. チャージの種類（1 回限り、定期、使用量）
3. チャージモデル（均一料金、単価制）

### 変更しないことが推奨される情報

1. **Rate Plan あたりのチャージ数。**
    - 例えば、Rate Plan あたり 2 つのチャージ（ライセンスとサービス）がある場合、この Rate Plan にさらにチャージ（例えばストレージ）を追加することは推奨されません
    - 既存の顧客には追加の「チャージ」は適用されませんが、その後のすべての顧客には適用されます

## SKU の廃止方法


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

各ステップを進める前に、SKU 廃止プロセスの各ステップで情報を提供し、必要な承認が取得されていることを確認するのはビジネススポンサーの責任です。フィールドが欠けていたり不完全な場合は、SKU 廃止リクエストのレビューおよび/または承認に遅延が生じます。**Issue の右側のパネルにある `Edit` ボタンをクリックして、SKU リクエスト Issue をご自身に割り当ててください。**

</div>


### ステップ 1. 製品情報

**廃止する Rate Plan の特定**

- このセクションでは、廃止が必要なすべての Rate Plan ID をリストアップしてください。

**SKU の廃止予定日**

- 新しい SKU が廃止される予定の具体的な日付を指定してください。
- これはリクエストの受け付けと優先順位付けに役立つものであり、必ずしも SKU がその日付までに廃止されることを意味しないことに注意してください。

### ステップ 2. SKU 廃止のステークホルダー承認


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

必要な承認は Professional Services SKU か Non-Professional Services SKU のリクエストかによって異なります。各承認者への連絡方法は該当する SKU Issue テンプレートに記載されています。

</div>


**リクエストの種類に基づいて必要な承認**

- Professional Services SKU を廃止する場合は、`Senior Director of Education Services` または `Director of Professional Services` をタグ付けしてください
- Non-Professional Services SKU を廃止する場合は、Fulfillment Product Managers `@gitlab-org/fulfillment/product-managers` をタグ付けしてください

**すべての SKU 廃止リクエストに必要な承認**

- Sales については、`Senior Director of Sales Operations` をタグ付けしてください
- Sales Operations については、`Senior Manager of Deal Desk` をタグ付けしてください
- Finance については、`Senior Director of Revenue Accounting` をタグ付けしてください

### ステップ 3. Business Technology が Zuora と Salesforce で SKU を廃止する

上記のすべてのステップが完了して必要な承認が取得されたら、~"SKU - Gathering Requirements" ラベルを削除して `@gitlab-com/business-technology/enterprise-apps/financeops` にタグを付け、SKU 廃止リクエストを Zuora Billing 製品カタログで廃止して Salesforce での見積もりができないようにするための受け付けと優先順位付けを行ってください。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

すべての変更は SOX/監査目的のため [Business Technology Change Management](https://internal.gitlab.com/handbook/IT/it-change-management/) に従わなければならないことに注意してください。

</div>


## FAQ

1. **SKU の作成にはどのくらいの時間がかかりますか？**
    - SKU の作成と見積もり可能になるまでにかかる時間には複数の要因が影響します
    - ビジネス要件が明確でない場合は時間が大幅に増加するため、新しいまたは更新された SKU の Issue を申請する前に [Product Launch Process](/handbook/product/product-processes/product-launch/) のすべての手順を完了する必要があります。
    - SKU の複雑さ（チャージの種類、販売方法、ガイデッドセリングルール/制限など）、ビジネススポンサーのステークホルダーからの承認取得能力、および SKU をサポートするために必要なその他の開発作業がデリバリー時間に影響する追加要因です。
2. **非標準リクエストとは何ですか？**
    - GitLab が通常サポートしていない/過去にサポートしていない SKU 構成であり、SKU プロセスのステップ 1 製品情報でアスタリスク 3 つ（***）でマークされます。
3. **新しい SKU リクエストの承認取得は誰の責任ですか？**
    - SKU プロセスの各ステップで、すべての必要な情報と適切な承認が事前に取得されていることを確認するのはビジネススポンサーの責任です。
4. **このハンドブックページに記載されている Issue テンプレートはどこで見つけられますか？**
    - リクエストを記録するためにユーザーが選択できる 3 つの Issue テンプレートがこの[ディレクトリ](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#)にあります。
5. **SKU が稼働した後に変更できる情報は何ですか？**
    - このハンドブックページの[本番稼働後の SKU 変更](#post-go-live-sku-modifications)セクションをご参照ください
6. **本番環境で SKU を直接構成してサンドボックスをスキップできますか？**
    - 残念ながら、できません。SOX/監査目的のため、Zuora Billing 製品カタログへのすべての変更は、[Business Technology Change Management](https://internal.gitlab.com/handbook/IT/it-change-management/) のポリシーおよび [Software Development Lifecycle Process for Finance Systems](https://gitlab.com/groups/gitlab-com/business-technology/enterprise-apps/financeops/-/wikis/SDLC-for-Finance-Systems) に準拠して適切にテストされなければなりません。
7. **既存の SKU の名前/説明だけを更新したい場合、このプロセス全体を経る必要がありますか？**
    - チャージの種類、測定単位、チャージモデル、チャージのタイミング、または定価を変更しない場合は、`CM: Configuration Change [Generic]` テンプレートを使用して[このディレクトリ](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#)に Issue を提出し、`Requestor` セクションに入力するだけで構いません。
