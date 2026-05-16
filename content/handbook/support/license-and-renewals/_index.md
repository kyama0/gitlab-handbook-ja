---
title: ライセンスと更新
description: ライセンスと更新（L&R）は、顧客が GitLab のサブスクリプションを購入または更新する際に直面する問題を解決するための活動全般を指します。
upstream_path: /handbook/support/license-and-renewals/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-02T22:15:45+00:00"
---

## 概要

L&R サポートエンジニアは、顧客が GitLab サブスクリプションを購入または更新する過程で
遭遇する問題の解決を支援します。

L&R 業務は、一般的に顧客や他の GitLab チーム（主にセールスとフルフィルメント）と連携することに加え、
GitLab 内部のシステムを確認したりデータの妥当性検証を行ったりすることを含みます。例:

- サブスクリプションの購入や管理に関するユーザーからの一般的な問い合わせへの回答
- ライセンスアップロードエラーやサブスクリプションの紐付けに関する Issue のトラブルシューティング
- セールスチームメンバーからの L&R に関する依頼の支援

### 沿革

2020 年 7 月、[L&R 業務は当面の間サポートが扱うべきという決定がなされました](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/96#note_384760742)。
当時、[ビジネスクリティカルな優先事項](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/96#note_384808050)
により、[Fulfillment 製品セクション](/handbook/product/categories/#fulfillment-section)
は L&R 関連の主要な Issue に対処・解決するための十分なキャパシティを確保できませんでした。
この業務のために完全に新しいチームを作るのは難しかったのに対し、
サポートはすでに関与しており、顧客ニーズに応えるべく短期間で規模を拡大できる状況にありました。

## 連絡先 {#contacts}

### サポート管理側の連絡先 {#support-management-contacts}

- 各リージョン DRI: Ryan Farber, John Lyttle, Ket Slaats

### Support Stable Counterparts

現在の Support Stable Counterparts については、Product Handbook の
[Fulfillment セクションの説明](/handbook/product/categories/#fulfillment-section) を参照してください。
L&R SSC への参加に興味がある場合は、ご自身のマネージャーまたは
[Regional DRI](#support-management-contacts) のいずれかにご相談ください。

## 方向性

セールス、フルフィルメント、その他のチームと協力して、サブスクリプション管理に関連する顧客体験の
改善を目指します。私たちはこれを以下によって達成します:

- プロセスの自動化
- プロセス改善の提案
- バグの報告と修正
- 外部および内部顧客に対する Service Level Objective の達成

## リージョン別 L&R チーム

- AMER チーム [ページ](/handbook/support/license-and-renewals/amer-region)
- APAC チームページ
- EMEA チームページ

---

## L&R を担当するサポートエンジニア向けの情報

L&R チケットの作業を始める前に、必ず
[L&R / Subscriptions トレーニングモジュール](https://gitlab.com/gitlab-com/support/support-training/-/blob/main/.gitlab/issue_templates/Subscriptions%20License%20and%20Renewals.md)
を完了してください。

### 中核となる概念

L&R エンジニアとして、私たちが日々関わる用語、表現、機能の中核となる概念を理解しておきましょう。
次のいくつかの段落でこれらの概念を説明します。
[用語表](/handbook/support/license-and-renewals/license-and-renewals-glossary) も参照できます。

**Subscription（サブスクリプション）** は、ある期間にわたり特定のティアの機能を購入することを表す用語です。
サブスクリプションを構成する 2 つの要素があります:

- **SaaS** または **Self-Managed**。これはサブスクリプションがどこに「適用」されるかを定義します。
**GitLab Dedicated** は、適用方法の観点では Self-Managed として扱われます。
- **Tier（ティア）**。これは異なる機能へのアクセスを提供します。**Premium** または **Ultimate** が含まれます。

**License（ライセンス）** は、Self-Managed インスタンスでサブスクリプションを有効化するために以前必要とされていた *レガシー* ファイルです。GitLab `14.1` 以降、有効化はほぼ常に
**クラウド有効化コード** で扱われるようになりましたが、いくつかの例外があります:

- [Offline cloud licensing](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/#offline-cloud-licensing)
は、オフライン環境でクラウドライセンスを利用できるようにします。顧客は手動で利用データをダウンロードし、定期的にメールで送信する必要があります。最低でも GitLab `15.0` が必要です。
- GitLab `14.1` より前のバージョンを使用しているインスタンスについては、顧客はセールス購入または更新プロセスの一環として、GitLab 担当者と協力して例外を申請する必要があります。
  - GitLab の [サポート方針](https://about.gitlab.com/support/statement-of-support/#version-support) に記載されている通り、サポートチームは（ほぼすべての状況で）GitLab `14.x` より前を実行している顧客を支援できないので、これは顧客にアップグレードを促す追加の動機づけとなります。
- [Cloud Licensing のための販売後例外](/handbook/support/license-and-renewals/workflows/self-managed/cloud-licensing#post-sale-exemptions-support)
は稀で、社内リクエストとセールス VP の承認を必要とします。
- ライセンスファイルは、Self-Managed の **トライアル** ではいまだに使用されています。

**Namespace（名前空間）** は、ユーザーがサブグループとプロジェクト内で協働できるトップレベルのグループであり、他の名前空間とは別個のエンティティとして扱われます。SaaS 顧客は名前空間に対してサブスクリプションを購入します。これは、その名前空間が購入したティアの機能（Premium や Ultimate など）にアクセスできることを意味します。例として、`"Example Corporation"` 社が `gitlab.com/example-co` にある名前空間を持っているとします:

- このパスの下に作成されたすべてのサブグループ（`gitlab.com/example-co/marketing`）とプロジェクト
（`gitlab.com/example-co/development/webapp`）は、サブスクリプションの有料機能にアクセスできます。
- 同じ会社が使用している別の名前空間 `gitlab.com/example-net` は、サブスクリプションに含まれず、有料機能にアクセスできません。

**Web Direct** 顧客は、GitLab.com および／または customers.gitlab.com を経由して *直接的に* サブスクリプションまたは製品を購入した顧客です。**Sales-assisted** 顧客は、サブスクリプションまたは製品を購入する際に *Salesforce* を経由してセールスから支援を受けた顧客で、契約が関わるエンタープライズ組織でよく見られます。

[**Cloud Licensing**](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/#what-is-cloud-licensing)
（**Cloud Activation**、**Cloud License** とも呼ばれます）は、Self-Managed インスタンスでサブスクリプションを有効化するための、現在のデフォルトかつ推奨される方法です。Cloud License は顧客が Self-Managed インスタンスに適用する 24 桁の英数字コードです。Cloud License のメリットの一例:

- ライセンスファイルを毎年再適用する必要がない
- **Quarterly Subscription Reconciliation (QSR)** を使って Users over Subscription を調整できる

[**Quarterly Subscription Reconciliation (QSR)**](/handbook/support/license-and-renewals/workflows/quarterly_subscription_reconciliations)
は、**Users over Subscription**（サブスクリプションを超過したユーザー）が発生した場合など、サブスクリプション契約を超える追加の利用を調整する方法です。有効化されている場合、QSR は四半期ごと（3 か月ごと）に実行され、シート利用が現在の上限を超えていればインボイスを生成します。

### アドオン

L&R チームは多くの異なる種類の購入を扱い、また単発もしくは継続的な **アドオン** のトラブルシューティングも支援します。GitLab Self-Managed では主にサブスクリプション購入のみが行われますが、GitLab.com では **Compute Minutes** や **Storage and Transfer** など、さまざまな種類のアドオンを購入できます。

#### Compute Minutes

以前は「CI/CD Minutes」または「Compute Credits」として知られていた Compute Minutes は、GitLab.com（SaaS）上で GitLab マネージドの Runner（Shared Runners）を利用するためのものです。各ティアにはサブスクリプションの一部としてユニットが付与され、毎月リフレッシュされます:

- Free（サブスクリプションなし）: `400`
- Premium: `10,000`
- Ultimate: `50,000`

ユニットは **分数と 1:1 で対応していません**。パイプラインで [使用される Runner の種類](https://docs.gitlab.com/ci/pipelines/compute_minutes/#additional-costs-on-gitlab-saas) を含む [コスト係数](https://docs.gitlab.com/ci/pipelines/compute_minutes/#cost-factor) が適用されます。顧客は [いつでも追加ユニットを購入](https://docs.gitlab.com/subscriptions/gitlab_com/compute_minutes/) できます。

#### Storage and Transfer

GitLab.com（SaaS）では、[プロジェクトのストレージ上限](https://docs.gitlab.com/user/usage_quotas/#project-storage-limit)が適用されます。デフォルトのストレージ上限は *プロジェクトあたり* 10 GB です。プロジェクトがストレージ上限に達すると、[超過ストレージ使用](https://docs.gitlab.com/user/usage_quotas/#excess-storage-usage)
として扱われ、追加ストレージが購入されるまで読み取り専用状態に入る可能性があります。追加ストレージは
[いつでも購入できます](https://docs.gitlab.com/subscriptions/gitlab_com/#purchase-more-storage-and-transfer)。

ストレージとトランスファー上限の扱いを [ネームスペースレベル](https://docs.gitlab.com/user/usage_quotas/#namespace-storage-limit) で考慮するための変更が計画されていますが、現時点では適用されていません。詳細は [ストレージ管理改善 Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/375296)
および [Pricing FAQ](https://docs.gitlab.com/user/storage_usage_quotas/) を参照してください。

### 担当する業務

- Zendesk の L&R キュー内のチケット。このキューには、顧客からのチケットだけでなく、GitLab チームメンバー（セールス、CSM など）からのチケットも含まれます。チームメンバーからのチケットは「内部リクエスト」と呼ばれ、それに関する情報は
  [内部リクエスト対応ワークフローページ](/handbook/support/license-and-renewals/workflows/working_internal_requests) で確認できます。
- サブスクリプション、ライセンス、更新関連トピックに関する [マーケティングページ](#marketing-pages)、
  [製品ドキュメント](#product-documentation)、[GitLab ハンドブック](#handbook-pages)、[ワークフロー](#workflows) の作成および／または更新。
- 顧客、サポート、またはその両方にとって重要な製品 Issue の特定、および L&R サポートチーム全体および Fulfillment プロダクトマネジメントチームと連携してエンジニアリングに対する優先順位付けの調整。
- 一部のチームメンバーは、Customers Portal の変更について Fulfillment エンジニアと密接に協力してレビューと共同作業を行います。参加し関連する MR で通知を受け取りたい場合は、レビュアーグループの直接メンバーとして自身を追加してください: https://gitlab.com/groups/gitlab-com/support/licensing-subscription/reviewers。

### アクセスが必要なシステム

この業務を効果的に行うためには、他のサポート問題タイプの業務では普通触れないシステムやツールへのアクセスが必要です。このリストはサポートエンジニアの職種における基本的な権限に追加されるものです。

#### CustomersDot

CustomersDot は、GitLab が構築したウェブアプリケーションの通称で、<https://customers.gitlab.com> にあります。すべてのライセンスとサブスクリプションの管理はこのサイト上で行われます。顧客のライセンスやサブスクリプション情報を生成、転送、変更するためにアクセス権が必要です。CustomersDot の [アクセスリクエスト (AR)](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) を提出する際には、次の情報を使用してください:

- System name:
  > CustomersDot - admin
- Justification for this access:
  > L&R Support Engineers need CustomersDot admin access to work on customer licensing
  > and subscriptions issues and to debug issues on the application itself.

#### Salesforce

Salesforce.com (SFDC) アカウントがあると、Chatter メッセージで自分がタグ付けされた際に通知を受け取れる（[セールスとの協働ワークフロー](/handbook/support/license-and-renewals/workflows/working_with_sales) を参照）ため、セールスチームメンバーとの連携がより効率的になります。

[個別／一括アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) を作成する際には、以下の情報を使用してください:

- System name:
  - If you are a US citizen:
    > SalesForce, Role: Executive - No View All, Profile: Read Only GitLab,
    > with US public sector record visibility
  - If you are not a US citizen:
    > SalesForce, Role: Executive - No View All, Profile: Read Only GitLab
- Justification for this access:
  > L&R Support Engineers need their own Salesforce accounts to better collaborate
  > with Sales team members as they work on customer licensing issues.

#### Slack

ライセンスと更新のチケットや顧客 Issue に関する議論は、Slack の
[#support_licensing-subscription](https://gitlab.slack.com/archives/C018C623KBJ)
チャンネルで行われます。これにより以下が確保されます:

> - L&R team members will have one channel in which to collaborate
> - Increased visibility in queries and shared knowledge
> - Increased cohesion in the L&R team regardless of region

APAC リージョンのサポート時間の開始時（23:00 UTC）に、
[Support Daily Slackbot](https://gitlab.com/gitlab-com/support/toolbox/support-daily-slackbot)
が L&R チケットに何らかの責任を持つ APAC のサポートエンジニア全員にタグ付けする投稿を行います。このスレッドはチームに今週は誰が休暇かを通知し、チームメンバーがキューにいつ取り組んでいるかをお互いに更新できるようにします。これにより、APAC リージョンのサポート時間にわたって L&R チケットのカバー範囲の信頼性を確保するのに役立ちます。

#### Zuora

Zuora は、製品 SKU、サブスクリプション、インボイスなど、サブスクリプションや更新に関連する多くの項目について [single source of truth](/handbook/about/handbook-usage/#single-source-of-truth)
または [system of record](/handbook/about/handbook-usage/#system-of-record) と見なされています。詳細は
[Transition to Zuora as the SSOT issue](https://gitlab.com/groups/gitlab-org/-/epics/4664)
を参照してください。

Zuora にアクセスできると、顧客の CustomersDot と Salesforce のレコードが矛盾していたり混乱していたりする状況でのトラブルシューティングに役立ちます。

[個別／一括アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) を作成する際には、以下の情報を使用してください:

- System name:
  > Zuora READ-ONLY access
- Justification for this access:
  > L&R Support Engineers need read-only Zuora access to troubleshoot Licensing and
  > Renewal customer issues and support requests.

### ワークフロー {#workflows}

- [License & renewals workflows](/handbook/support/license-and-renewals/workflows/)

### 便利なツール

- [slic - Subscription and License Information Copier](https://gitlab.com/rverschoor/punk/-/tree/main/slic)
  -- CustomersDot の情報をコピーして整形し、内部ノートに貼り付けるブラウザ用ユーザースクリプト。

### 連携するチーム

#### Product

キューや Issue に取り組む中で、[Fulfillment バックログ](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=group%3A%3Afulfillment) に、顧客やサポートのために改善できる項目が見つかったら、`Support Interest::Categorize` ラベルを付けてください。詳しくは [サポートの Fulfillment 用 Issue リスト](/handbook/support/license-and-renewals/workflows/managing_product_issues#supports-issue-list-for-fulfillment) を参照してください。

##### Fulfillment ステージ

[Fulfillment](/handbook/product/groups/fulfillment/direction/fulfillment_section/) ステージは、購入とプロビジョニング、CustomersDot の利用、サブスクリプション管理を扱います。これらのチームは、私たちが普段キューで目にするリクエストの種類に対応する責務を持っています。

Slack の `#s_fulfillment` チャンネル

##### Growth ステージ

製品の [Growth](/handbook/product/categories/#growth-stage) ステージを見ると、このチームが私たちが普段キューで目にするリクエストの種類に対応する責務、特に `Conversion` グループの責務を持っていることがわかります。

- Activation Group: [New Group Namespace Verify Stage Adoption Rate](https://internal.gitlab.com/handbook/company/performance-indicators/product/#new-group-namespace-verify-stage-adoption-rate)
- Adoption Group: [New Group Namespace Create Stage Adoption Rate](https://internal.gitlab.com/handbook/company/performance-indicators/product/#new-group-namespace-create-stage-adoption-rate)
- Expansion Group: [New Group Namespace with at least two users added](https://internal.gitlab.com/handbook/company/performance-indicators/product/#new-group-namespace-with-at-least-two-users-added)
- Conversion Group:[New Group Namespace Trial to Paid Conversion Rate](https://internal.gitlab.com/handbook/company/performance-indicators/product/#new-group-namespace-trial-to-paid-conversion-rate)

## サポートにおける L&R 業務の **対象範囲外**

このキューは以下の用途では使用しないでください:

- 支払い、インボイス生成、返金などの請求関連事項
- 製品関連の質問
- [新規ビジネスリクエスト](https://about.gitlab.com/sales/)
- [教育プログラム](https://about.gitlab.com/solutions/education/)
  に関連するリクエスト
- [オープンソースプログラム](https://about.gitlab.com/solutions/open-source/join/)
  に関連するリクエスト

## 便利なリンク

### 製品ドキュメント {#product-documentation}

- [GitLab subscription](https://docs.gitlab.com/subscriptions/)

### マーケティングページ {#marketing-pages}

- [Support SLAs for billing, purchasing, subscriptions or licenses](https://about.gitlab.com/support/#issues-with-billing-purchasing-subscriptions-or-licenses)
- [Licensing and subscription FAQ](https://about.gitlab.com/pricing/licensing-faq/)

### ハンドブックページ {#handbook-pages}

- [Business Ops](/handbook/business-technology/)
  - [Business Systems: Enterprise Applications, Integrations, and Flow](/handbook/business-technology/enterprise-applications/integrations/)
  - [Troubleshooting: True Ups, Licenses + EULAs](/handbook/business-technology/enterprise-applications/entapps-crm/quote-to-cash/troubleshooting/)
- [Sales](/handbook/sales/)
  - [Sales Segmentation](/handbook/sales/field-operations/gtm-resources/)
  - [Sales Territories](/handbook/sales/territories/)
- [Marketing](/handbook/marketing/)
  - [Sales Enablement: GitLab.com subscriptions](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/enablement/dotcom-subscriptions/)

### Issue トラッカー

| Issue トラッカー | 用途 |
| ------------- |------------------------------------------------------------------------------------------------------------------------------------|
| [GitLab Issue Tracker](https://gitlab.com/gitlab-org/gitlab/issues) | self-managed や GitLab.com の機能やバックエンド処理に関連する Issue |
| [CustomersDot](https://gitlab.com/gitlab-org/customers-gitlab-com/issues) | CustomersDot 内の何かによって特に引き起こされた Issue、または self-managed のライセンス生成や生成済みライセンスに影響する Issue |
