---
title: "マーケティング指標"
description: "私たちは複数のデータソースからマーケティング指標を閲覧・分析するためにTableauを使用しています。"
upstream_path: "/handbook/enterprise-data/marketing-analytics/marketing-metrics/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

## マーケティング指標

以下は私たちの主要なマーケティング指標の定義です。

### Inquiry（問い合わせ）

Inquiryは、SFDCのリード/コンタクトオブジェクトのステージです。GitLabはInquiryを、インバウンドリクエストまたは[アウトバウンドマーケティング活動](/handbook/marketing/marketing-operations/#lead-and-contact-statuses)への応答として定義しています。

#### First Order Inquiry

GitLabを通じて注文を行っていない親アカウントの一部であるInquiryは、First Order Inquiryとして分類されます。これらを見つけるには、アカウントテーブルをInquiryのアカウントIDでpersonテーブルに結合します。対応するアカウントオブジェクトで`has_first_order_available`フィールドがtrueの場合、そのInquiryはFirst Orderです。Inquiryにアカウントが関連付けられていない場合も、First Orderとなります。

#### Inquiryの日付

personがInquiryになった時期を特定するには、Inquiryステージをスキップしたpersonレコードを考慮する必要があります。そのためには`inquiry_date`と`inquiry_inferred_date`の小さい方を使用します。

personがInquiryになった時期を特定するためのロジックは`true_inquiry_date`フィールドに格納されています。特定のものを検索している場合を除き、常にこのフィールドをInquiryの報告に使用してください。

#### 技術的定義

`Status != Raw`であり、Inquiry DateとInquiry Inferred Dateの最初の日付を持つリードまたはコンタクト。
`Status != Raw`であり、`inquiry_date`または`inquiry_inferred_date`がnullでないfct_crm_personテーブルのすべてのリードまたはコンタクト。

クエリ例（Inquiryのリストとそれらがいつ Inquiryになったかの日付を返します）:

```sql
  SELECT
  dim_crm_person_id,
  sfdc_record_id,
  email_hash,
  inquiry_reporting_date
  FROM common_mart_marketing.mart_crm_person
  where
  lower(Status) != 'raw'
  and true_inquiry_date is not null
```

#### ソースと指標

Inquiryは[Person Mart](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_person)のレコードによって定義されます。Inquiry数を求めるには、`email_hash`のユニークカウントを使用します。

### MQL

マーケティング資格リード（MQL）は、SFDCのリード/コンタクトオブジェクトのステージです。GitLabはMQLを、[体系的な手段によりマーケティング資格を得た](/handbook/marketing/marketing-operations/#lead-and-contact-statuses)人物として定義しています。

#### First Order MQL

GitLabを通じて注文を行っていない親アカウントの一部であるMQLは、First Order MQLとして分類されます。これらを見つけるには、アカウントテーブルをMQLのアカウントIDでpersonテーブルに結合します。アカウントで`has_first_order_available`フィールドがtrueの場合、そのMQLはFirst Orderです。MQLにアカウントが関連付けられていない場合も、First Orderとなります。

First Order（FO）ステータスに関する情報を示すフィールドセットがあります:

1. `Is First Order Person` - レコードが現在FOレコードであるかどうかを示します
1. `FO Intial MQL` - `Intitial MQL DateTime`（レコードが最初にMQLになった時点）の時点でレコードがFOレコードであったかどうかを示します
1. `FO MQL` - `MQL DateTime`（レコードが最後にMQLになった時点）の時点でレコードがFOレコードであったかどうかを示します

#### MQLの日付

誰かがMQLになった日付を見つけるには、MarketoからのDateフィールド（SFDCの`Marketo MQL DateTime`）を使用します。このフィールドはスタンプされておらず、誰かが再MQLした場合に変更される可能性がありますが、レポートを理解しやすくし、Sales Developmentが使用するものと一致し、Marketoのデータと一致します。

#### 技術的定義

MQLがnullでない[fct_crm_person](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_crm_person)テーブルのすべてのリードまたはコンタクト。

これは[fct_crm_person](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_crm_person)テーブルの`is_mql = TRUE`によって格納されています。

クエリ例（MQLのリストとそれらがいつMQLになったかの日付を返します）:

```sql
  SELECT
  dim_crm_person.dim_crm_person_id,
  dim_crm_person.sfdc_record_id,
  Dim_crm_person.email_hash,
  collate(mql_date_latest_pt, inferred_mql_date_latest) as mql_date
  FROM mart_crm_person
  where
  is_mql = TRUE
```

#### ソース

MQLは[Person Mart](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_person)のレコードによって定義されます。

### SAO

Sales Accepted Opportunity（SAO）は、承認ステージに達したOpportunityです。オポチュニティを承認または拒否するための基準はセールスによって設定され、[セールスのハンドブック](/handbook/sales/field-operations/gtm-resources/)で定義されています。

#### First Order SAO

SFDCはSAOが作成された時点でオーダータイプをスタンプします。つまり、各SAOはそのオーダータイプを知っています。`order_type`フィールドにこの情報が格納されています。
First Order SAOのロジックは`is_new_logo_first_order`フラグに格納されています。FO SAOをクエリする際は常にこのフラグを使用してください。

#### SAOの日付

オポチュニティがSAOになった日付を確認するには、`sales_accepted_date`フィールドを使用します。

#### 技術的定義

`stage_name`が`10-Duplicate`でなく、`is_edu_oss`が0で、`sales_accepted_date`がnullでない[fct_crm_opportunity](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_crm_opportunity#description)テーブルのすべてのオポチュニティ。
これらの条件はfct_crm_opportunityテーブルの`is_sao`フィールドに格納されています。

クエリ例

```sql
SELECT
sales_accepted_date,
dim_crm_opportunity_id
FROM mart_crm_opportunity
WHERE
is_sao = TRUE
and is_new_logo_first_order = TRUE
```

#### ソース

SAOは[Opportunity Mart](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_opportunity)のレコードによって定義されます。

### Closed Won Opportunity（成約済みオポチュニティ）

Closed Won Opportunity（CW）は、セールスチームが取引を獲得したオポチュニティです。

#### First Order CW Opportunity

Closed Wonの案件はオポチュニティであるため、`order_type`フィールドにFirst Order情報が格納されています。
First Order Closed Wonをクエリする際は`is_new_logo_first_order`フラグを使用するのが最善です。これにより、すべてのダッシュボードがFO CWを見つけるために同じロジックを使用することが保証されます。

#### 成約日

オポチュニティがクローズした日付を確認するには、`close_date`フィールドを使用します。

#### Closed Dealのための Net ARRの算出

[Net ARR](/handbook/sales/sales-term-glossary/arr-in-practice/)の報告においては、取引が会社のNet ARRに貢献することを確認する必要があります。そのためには`is_net_arr_closed_deal`フラグをtrueとしてクエリに追加します。

#### 技術的定義

`stage_name`が`10-Duplicate`でなく、`is_edu_oss`が0で、`is_won`がtrueで、`is_closed`がtrueである[fct_crm_opportunity](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_crm_opportunity#description)テーブルのすべてのオポチュニティ。

これらの条件はfct_crm_opportunityテーブルの`is_closed_won`フィールドに格納されています。Closed Wonの案件をクエリする際は常に`is_closed_won`フィールドを使用してください。

クエリ例

```sql
SELECT
sales_accepted_date,
dim_crm_opportunity_id
FROM mart_crm_opportunity
WHERE
is_closed_won = TRUE
and is_new_logo_first_order = TRUE
and is_net_arr_closed_deal = TRUE
```

#### ソース

CW OpportunityはOpportunity Mart（[Opportunity Mart](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_opportunity)）のレコードによって定義されます。

### マーケティングトライアルサインアップフロー

私たちはリードを収集し、人々がどのようにGitLabを発見するかを理解するために、さまざまな方法とシステムを使用しています。以下は、これらの訪問者がマーケティングシステムを通じてどのように移動するかの基本的な概要です。
注意: レコードがSFDCに追加されてからMarketoで処理され、スコアが付与されてMQLとしてSFDCに返されるまでの時間の遅れにより、特定の日または月（トライアルが月の最初/最後の日に発生した場合）において、[マーケティング指標ダッシュボード](https://app.periscopedata.com/app/gitlab/431555/Marketing-Metrics)で表示されるトライアルのInquiryとMQLの間に不一致が生じます。

![トライアルサインアップフロー](/images/handbook/marketing/marketing-operations/trial-sign-up-flow.png)

## リードソースバケット

エグゼクティブにリードソースのより良いビューを提供し、リードとコンタクトがどこからソーシングされているかを示すために、バケット化されたフィールドを作成しました。Tableauでは`lead source buckets`と呼ばれることが多いです。

以下は各リードソースとそのソースバケットのマッピングテーブルです。

| Initial Source                                                                                                         | Source Bucket      |
|------------------------------------------------------------------------------------------------------------------------|--------------------|
| Advertisement                                                                                                          | paid demand gen    |
| AE Generated                                                                                                           | AE Generated       |
| CE Download                                                                                                            | product            |
| CE Usage Ping                                                                                                          | product            |
| Channel Qualified Lead                                                                                                 | partner marketing  |
| Clearbit                                                                                                               | SDR prospecting    |
| Conference                                                                                                             | paid demand gen    |
| CORE Check-Up                                                                                                          | product            |
| Datanyze                                                                                                               | SDR prospecting    |
| Demo                                                                                                                   | organic inbound    |
| DiscoverOrg                                                                                                            | SDR prospecting    |
| Drift                                                                                                                  | organic inbound    |
| Education                                                                                                              | organic inbound    |
| Email Request                                                                                                          | organic inbound    |
| Email Subscription                                                                                                     | organic inbound    |
| Employee Referral                                                                                                      | other              |
| Event Partner                                                                                                          | partner marketing  |
| Executive Roundtable                                                                                                   | paid demand gen    |
| Existing Client                                                                                                        | product            |
| External Referral                                                                                                      | product            |
| Field Event                                                                                                            | paid demand gen    |
| Gainsight                                                                                                              | product            |
| Gated Content                                                                                                          | organic inbound    |
| Gated Content -                                                                                                        | organic inbound    |
| Gated Content - Demo                                                                                                   | organic inbound    |
| Gated Content - eBook                                                                                                  | organic inbound    |
| Gated Content - General                                                                                                | organic inbound    |
| Gated Content - Report                                                                                                 | organic inbound    |
| Gated Content - Reports                                                                                                | organic inbound    |
| Gated Content - select one (you may NOT choose from an option other than these): whitepaper,report,video,eBook,general | organic inbound    |
| Gated Content - study                                                                                                  | organic inbound    |
| Gated Content - Video                                                                                                  | organic inbound    |
| Gated Content - webcast                                                                                                | organic inbound    |
| Gated Content - Whitepaper                                                                                             | organic inbound    |
| GitLab DataMart                                                                                                        | product            |
| GitLab Subscription Portal                                                                                             | product            |
| GitLab.com                                                                                                             | product            |
| hopin                                                                                                                  | paid demand gen    |
| Impartner                                                                                                              | partner marketing  |
| Investor                                                                                                               | organic inbound    |
| Leadware                                                                                                               | SDR prospecting    |
| LinkedIn                                                                                                               | SDR prospecting    |
| List - DB - GACoreUpsert - 20200706                                                                                    | SDR prospecting    |
| List - Demandbase - GACoreInsert - 20200706                                                                            | SDR prospecting    |
| List-2HCentric-DB-20200914                                                                                             | SDR prospecting    |
| Newsletter                                                                                                             | product            |
| OSS                                                                                                                    | organic inbound    |
| Other                                                                                                                  | other              |
| Owned Event                                                                                                            | paid demand gen    |
| Partner                                                                                                                | partner marketing  |
| Prof Serv Request                                                                                                      | organic inbound    |
| Promotion                                                                                                              | paid demand gen    |
| Prospecting                                                                                                            | SDR prospecting    |
| Prospecting - General                                                                                                  | SDR prospecting    |
| Prospecting - LeadIQ                                                                                                   | SDR prospecting    |
| Public Relations                                                                                                       | organic inbound    |
| Purchased List                                                                                                         | SDR prospecting    |
| Registered                                                                                                             | organic inbound    |
| Request - Contact                                                                                                      | organic inbound    |
| Request - Professional Services                                                                                        | organic inbound    |
| Request - Public Sector                                                                                                | organic inbound    |
| SDR Generated                                                                                                          | SDR prospecting    |
| Security Newsletter                                                                                                    | product            |
| Startup Application                                                                                                    | product            |
| Trial - Enterprise                                                                                                     | Trial - Enterprise |
| Trial - GitLab.com                                                                                                     | Trial - GitLab.com |
| Virtual Sponsorship                                                                                                    | paid demand gen    |
| Web                                                                                                                    | organic inbound    |
| Web Chat                                                                                                               | organic inbound    |
| Web Direct                                                                                                             | Web Direct         |
| Webcast                                                                                                                | paid demand gen    |
| Word of mouth                                                                                                          | organic inbound    |
| Workshop                                                                                                               | paid demand gen    |
| ZI-EMEA-MM-OutboundQ4-2020.08.19                                                                                       | SDR prospecting    |
| Zoominfo                                                                                                               | SDR prospecting    |

## レポートフィールドのソース・オブ・トゥルース

このセクションでは、Salesforceレポートを作成する際に、誰もが正しいフィールドを使用でき、かつPeriscopeレポート/ダッシュボードで使用されているフィールドと同じフィールドを使用できるよう、最もよく使用されるフィールドを収集・リンクしています。

注意: 現在[Territory Success Planningフィールド](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/)への移行が進行中です。

### リード

1. [リードソース](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=LeadSource&type=Lead&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DLead%26setupid%3DLeadFields%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DLead&setupid=LeadFields)
1. [MQL日付](https://gitlab.my.salesforce.com/00N6100000CJuLB?setupid=LeadFields) - これが空白の場合、レコードは`MQL`としてカウント*されません*
1. [セールスセグメント](https://gitlab.my.salesforce.com/00N6100000HHdoa?setupid=LeadFields)

### コンタクト

1. [リードソース](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=LeadSource&type=Contact&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DContact%26setupid%3DContactFields%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DContact&setupid=ContactFields)
1. [MQL日付](https://gitlab.my.salesforce.com/00N4M00000IW0Jx?setupid=ContactFields) - これが空白の場合、レコードは`MQL`としてカウント*されません*
1. セールスセグメント - アカウントの`Sales Segment`フィールドを参照してください。

### アカウント

1. `Sales Segment` - [アカウントオーナーの](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=Owner&type=Account&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DAccount%26setupid%3DAccountFields%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DAccount&_CONFIRMATIONTOKEN=VmpFPSxNakF5TVMwd05DMHhOMVF4TlRveE5qb3dOaTQzTnpOYSxURnIyR3gyTDhNSWx5dWJmTW1ObUxGLFl6UTNNekF5&setupid=AccountFields) - `User Segment`を使用

### オポチュニティ

1. [SDR/BDR](https://gitlab.my.salesforce.com/00N6100000I1Y02?setupid=OpportunityFields)
1. [クローズ日](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=CloseDate&type=Opportunity&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DOpportunity%26setupid%3DOpportunityFields&setupid=OpportunityFields)
1. [Net ARR](https://gitlab.my.salesforce.com/00N4M00000Ib5n8?setupid=OpportunityFields)
1. [リードソース](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=LeadSource&type=Opportunity&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DOpportunity%26setupid%3DOpportunityFields%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DOpportunity&setupid=OpportunityFields)
1. [営業承認日](https://gitlab.my.salesforce.com/00N6100000HmPaK?setupid=OpportunityFields)
1. [Sales Qualified Source](https://gitlab.my.salesforce.com/00N6100000HZPjd?setupid=OpportunityFields)
1. [ステージ名](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=StageName&type=Opportunity&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DOpportunity%26setupid%3DOpportunityFields%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DOpportunity&setupid=OpportunityFields)
1. [オーダータイプ](https://gitlab.my.salesforce.com/00N4M00000Ib8Ok?setupid=OpportunityFields)

## TableauとSFDCデータを比較する際に知っておくべきこと

私たちのシステムが接続・同期されている方法により、Tableau内のデータとSalesforce.comのデータに不一致が見られることがあります。注意すべき点がいくつかあります:

1. Opportunityの金額はSalesforce内で即座に更新されますが、データが翌晩に同期するため、翌日まではTableauに表示されません。
1. TableauとSFDCの間には約7時間の時差があるため、このタイムラグにより不一致が生じることもあります。

## フィールドマーケティング指標

このセクションでは、フィールドマーケターが結果を確認するためのワークフローの詳細について説明します。

最上位レベルでは、フィールドマーケティングはMQLの進行を支援し、パイプラインに影響を与える責任があります。これらのMQLは最終的にSales Developmentチームによって[Sales Accepted Opportunity](/handbook/sales/field-operations/gtm-resources/#opportunities)を作成します。

### デジタル戦術のROIを追跡する方法

#### サードパーティデジタルエージェンシー

デジタル面での作業に対するエンゲージメントを追跡するために、キャンペーンUTMコードが作成されます。GitLabでのUTMに関する詳細は[こちら](/handbook/marketing/integrated-marketing/digital-strategy/digital-strategy-management/#utm-tracking)をご覧ください。

ターゲットオーディエンスに広告/LinkedIn InMailを配信するためにサードパーティデジタルエージェンシーと作業する際には、このプロセスに従います。

最上位レベルでは、支出、クリック数、インプレッション数、CPC（クリック単価）、Inquiry数、CPI（Inquiry単価）を確認することが興味深いです。これは、デジタルチームが提供するフィールドマーケティング固有のデジタル支出ダッシュボードで、キャンペーンのUTMコードを使用してキャンペーンを検索することで行います。また、ここにリポートも記載しています。なぜなら、探しているまさにその場所にリンクが欲しいこともありますから ;) [WW SFDC Field Marketing Digital Report](https://gitlab.my.salesforce.com/00O4M000004aA0V)

Inquiry（イベントへの登録や広告とのエンゲージメントが最終的に行われる人）は最も重要で、そのイベントへの参加状況やキャンペーンとのインタラクション、最終的にはSAOそしてパイプラインへとつながるかどうかを確認する必要があります。

何かに登録するように人々を誘導していた場合は、SFDCキャンペーンに移動してください。次に`Custom Links`セクションに移動し、`View All Campaign Members`レポートをクリックします。

次に`Ad Campaign Name (FT)`でソートします。これは「このレコードが最初にインタラクションした広告は何だったか？」という質問に答えます。また`Ad Campaign Name (LC)`も確認します。これは「このリードを作成した広告は何か？」という質問に答えます。

登録先の特定のSFDCキャンペーンがなく、キャンペーンの成功を確認したい場合は、引き続き[WW SFDC Field Marketing Digital Report](https://gitlab.my.salesforce.com/00O4M000004aA0V)を参照し、`Ad Campaign Name` [含む]フィルターを使用してUTMを追加します。

リードはSFDCキャンペーンやUTMレポートで追跡できますが、生成されたパイプラインは[Tableau](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDCampaigns-L2RInteractions/Overview?:iid=2)のみで確認してください。SFDCのラストタッチモデルはマルチタッチアトリビューションモデルとは異なるためです。

## チャネルマーケティングレポーティング

私たちはチャネルのオポチュニティに対するマーケティングの影響と、[Market Development Funds](/handbook/resellers/channel-program-guide/mdf/)からのディール登録の影響を追跡しています。

| レポート名                                    | プラットフォーム   | 説明                                                                                                                                                                                                                                  | リンク                                                                                                                                  |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Partner Lead Status                            | Tableau   | このダッシュボードは[Impartner](/handbook/marketing/marketing-operations/impartner/)を通じてパートナーと共有されるリードの概要を示します。パートナー別のシェアステータス、パートナーのリード、キャンペーン、地域が含まれます。 | [🖇️](https://10az.online.tableau.com/#/site/gitlab/views/DraftPartnerMarketingv2/PartnerLeadsContacts?:iid=1)                             |
| Partner Sourced Opportunities                  | Tableau    | このダッシュボードはマーケティングキャンペーンによって生成されたオポチュニティを示します。                                                                                                                                                     | [🖇️](https://10az.online.tableau.com/#/site/gitlab/views/DraftPartnerMarketingv2/PartnerSourcedOpps?:iid=1)                  |
| Focus Partner Tech Capabilities                | Salesforce | このレポートはすべてのフォーカスパートナーと会社情報の概要を示します。                                                                                                                                                        | [🖇️](https://gitlab.my.salesforce.com/00O8X00000963VI)                                                                               |
| Partner Marketing Trials Funnel - SaaS & Self Managed        | Tableau    | このダッシュボードはパートナーによるすべてのSaaSおよびセルフマネージドの無料トライアル送信の概要を示します。                                                                                                                                                         | [🖇️](https://10az.online.tableau.com/#/site/gitlab/views/DraftPartnerMarketingv2/PartnerTrials?:iid=1) |
| Channel Partner Participation                  | Salesforce | このレポートはパートナーが積極的に参加している[パートナープログラムの提供](/handbook/marketing/channel-marketing/)の概要を示します。                       | [🖇️](https://gitlab.my.salesforce.com/00O8X00000963dq)                                                                               |
| Partner Recall Leads & Contacts                        | Salesforce | このレポートは現在のFYに回収されたパートナーリードを示します。                                                                                                                                                            | [🖇️ リード](https://gitlab.my.salesforce.com/00O8X000008muTH)  [🖇️ コンタクト](https://gitlab.my.salesforce.com/00O8X000008muWG)                                                                        |
| MDF Funds Request with Funds Claim                       | Salesforce | このレポートは現在のFYに受領した資金申請のリストとそれに対応するクレームを示します。                                                                                                                                                            | [🖇️](https://gitlab.my.salesforce.com/00OPL0000002ILp)                                                                               |
| MDF Funds Request with Partner Account                       | Salesforce | このレポートはステータスでフィルタリングされたパートナーアカウント名と共に現在のFYの資金申請のリストを示します。                                                                                                                                                            | [🖇️](https://gitlab.my.salesforce.com/00OPL0000002IP3)                                                                               |
| Instant Marketing Campaigns Asset Report                       | Impartner | このレポートはInstant Marketing Campaignsとアセットのビュー数、ダウンロード数、シェア数、コブランド数を示します。                                                                                                                                                             | [🖇️](https://prod.impartner.live/en/s/channel-intel/dashboard/65e60883f43d1e0033b33d6e)                                                                               |

### SFDCレポートテンプレート - パートナーに渡されたレコード

これらのレポートはご参考のためのテンプレートとして使用します。調査したいキャンペーン名に基づいてレポートをクローンして変更してください。SFDCはリードとコンタクトを別々に扱うため、全体像を確認するにはリードとコンタクトの両方のレポートが必要です。

注意: キャンペーン名は、このレポートを実行したいキャンペーンの実際の名前に変更する必要があります。

1. [リードとのキャンペーン](https://gitlab.my.salesforce.com/00O4M000004enu7)
1. [コンタクトとのキャンペーン](https://gitlab.my.salesforce.com/00O4M000004enuC)

- [パートナーに渡されたレコード](https://gitlab.my.salesforce.com/00O8X000008RSHg) - [チャネルパートナーと共同で実施するキャンペーン](/handbook/marketing/marketing-operations/campaigns-and-programs/#joint-gitlabpartner-campaign)の一環として、パートナーに渡したレコードのステータスを把握したいと考えており、このレポートがそのインサイトを提供します。
