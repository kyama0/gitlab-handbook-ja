---
title: "Adobe Marketo Measure (旧称 Bizible)"
description: "Adobe Marketo Measure (略称 AMM) は、行動データと広告データをセールス成果と機械学習で統合し、適切なマーケティング判断を下せるようにします。"
upstream_path: /handbook/marketing/marketing-operations/bizible/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

<!-- Please treat Bizible terms as proper nouns and capitalize them. Touchpoint instead of touchpoint. -->

## Adobe Marketo Measure (旧称 Bizible) について

Adobe Marketo Measure (AMM) は、行動データと広告データをセールス成果と機械学習で統合し、適切なマーケティング判断を下せるようにします。

### Adobe Marketo Mesure がアトリビューションを追跡する方法

マーケティングアトリビューションとは、収益のクレジットをマーケティング活動に割り当てるプロセスです。AMM は、見込み客が GitLab と最初に接点を持ったときから購入までの顧客ジャーニー全体を追跡します。取引から発生した収益は、その販売を促進したマーケティングの Touchpoint に帰属されます (Touchpoint の詳細については以下を参照)。Touchpoint に与えられる収益クレジットの量は、その Touchpoint が顧客の購買決定にどの程度影響を与えたかによります。

このプロセスにより、Marketing は各マーケティング活動の価値を理解できるようになります。

## Adobe Marketo Measure のコンポーネント

### Touchpoint

AMM では Touchpoint を以下のように定義しています: Touchpoint は、見込み客/リードのオンラインまたはオフラインのマーケティング活動との相互作用を指します。

Touchpoint は、UTM パラメータ、相互作用の日時、相互作用の種類 (フォーム送信、キャンペーン応答など) など、多くの情報を取得します。AMM は SFDC のリードまたはコンタクトレコードに Touchpoint レコードを保存します。

### Buyer Touchpoint (BT)

Buyer Touchpoint はリードまたはコンタクトオブジェクトに直接作成されます。商談には関連付けられず、NET ARR 値はありません。

### Buyer Attribution Touchpoint (BAT)

AMM は、Buyer Touchpoint を持つアカウントに商談が作成されたときに Buyer Attribution Touchpoint (BAT) を作成し、その商談がセールスによって受け入れられる前に作成されます。これらの BAT は、アカウント上のコンタクトに既に関連付けられている BT のコピーであり、商談に関連付けられます。さらに、AMM が BAT を作成するのは、コンタクトからのみです。Buyer Touchpoint と異なり、BAT は NET ARR 値を持っています。

AMM が BAT を作成するとき、商談に関連付けられたコンタクトだけでなく、アカウント上のすべてのコンタクトに関連付けられた BT を使用します。

| Buyer Touchpoint (BT) | Buyer Attribution Touchpoint (BAT) |
| ----- | ----- |
| Lead と Contact に関連 | Contact、Account、Opportunity オブジェクトに関連 |
| Opportunity オブジェクトには関連しない | Lead オブジェクトには関連しない |
| 収益は Buyer Touchpoint に関連付けられない | Opportunity の NET ARR が設定されたとき収益が割り当てられる |

### チャネルとサブチャネル

[AMM は Touchpoint を](#amm-channel-and-subchannel-mapping) [チャネルとサブチャネル](https://experienceleague.adobe.com/docs/marketo-measure/using/channel-tracking-and-setup/online-channels/marketing-channels-and-subchannels.html?lang=en) にマッピングします。

- チャネル - Touchpoint グループの最も広いレベルで、多くのサブチャネルを含みます。チャネルの例には Events、Organic Search、Paid Search、Digital などがあります。
- サブチャネル - ソースに関するより具体的な情報を提供します。例には Google (Paid Search チャネル用)、LinkedIn (Paid Social チャネル用)、Executive Roundtable (events 用) などがあります

AMM はチャネルとサブチャネルをドット表記で表示します。`Paid Search.Google` は `Paid Search` チャネルと `Google` サブチャネルを持っています。

### Touchpoint の位置

AMM は、各人物の他の Touchpoint との時間関係に基づいて Touchpoint の位置を追跡します。以下の略語は SFDC の `Touchpoint Position` フィールドに表示されます。

- FT - First Touch、見込み客の初めての相互作用
- LC - Lead Created、見込み客が情報を送信
- OC - Opportunity Creation、見込み客が意図的に購買決定に進む
- Closed - Customer Close、見込み客が購入
- Pending - [Pending touchpoint position](https://nation.marketo.com/t5/marketo-whisperer-blogs/marketo-measure-pending-touchpoint-position/ba-p/312477) は BAT (Buyer Attribution Touchpoint) のみに付与され、BT (Buyer Touchpoint) には付与されません。この touchpoint の位置は、**商談がまだオープンの場合のみ** に表示され、商談クレジットが 100% に合計されるよう一時的な値を提供します。

### アトリビューションモデル

Adobe Marketo Measure (AMM) は引き続き、**Buyer Touchpoint (BT)** および **Buyer Attribution Touchpoint (BAT)** の system of record として残り、いくつかのすぐに使えるアトリビューションモデル (例: First Touch、U-Shaped、W-Shaped、Custom) を提供しています。AMM の Custom モデルは引き続きアプリケーション内で実行されますが、**マーケティングパイプラインアトリビューションにおける GitLab の主要な信頼源としては扱われなくなりました**。

現在、GitLab の主要なパイプラインレベルのアトリビューションは、AMM Custom モデルではなく、**Snowflake データウェアハウスに実装された GitLab 所有のマルチタッチアトリビューションモデル** で定義されています。このセットアップでは:

- AMM は **生の touchpoint データと touchpoint レベルのモデル出力** を提供します。
- 私たちの Enterprise Data モデル (**`fct_crm_attribution_touchpoint` → `mart_crm_attribution_touchpoint`**) が GitLab の **データドリブンの重み付けと time-decay ロジック** を適用して、touchpoint 全体にパイプラインクレジットを割り当てます。
- これらのウェアハウスモデルが、**Marketing Generated Pipeline (MGP)** および **Marketing Progressed Pipeline (MPP)** を含む FY26+ のマーケティングパイプライン指標を強化します。

データドリブンの touchpoint の重みと time-decay が 365 日のルックバックウィンドウで組み合わされる方法を含む完全な方法論は、[Marketing Analytics ハンドブックページ](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-analytics/marketing_pipeline_attribution) に記載されています。

### オンライン Touchpoint vs オフライン Touchpoint

AMM は、作成された方法に基づいて Touchpoint をオンラインまたはオフラインとして生成します。

#### オンライン

オンライン Touchpoint は、ユーザーが GitLab Web プロパティでフォームを送信したときに作成されます。ディスプレイ広告、検索広告、有料ソーシャル、検索エンジン、オーガニックソーシャル、メール、チャットボットなど、従来のオンラインマーケティングチャネルから生まれます。

オフライン Touchpoint には事前に SFDC キャンペーンを作成する必要がありますが、オンライン Touchpoint には不要です。

**重要:** AMM がオンライン Touchpoint を作成するためには、ユーザーが Cookie を許可しているか、拒否していない必要があります。GitLab は、ユーザーが Web プロパティで [同意を管理する](/handbook/marketing/digital-experience/onetrust/#consent-models) ために OneTrust を使用しており、[ユーザーの所在地によっては](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-analytics/onetrust/) AMM スクリプトをロードするために Cookie を許可する必要がある場合があります。**ユーザーが OneTrust の同意を拒否またはオプトアウトした場合、AMM はオンライン Touchpoint を作成しません。**

#### オフライン

オフライン Touchpoint は、トレードショーブースの訪問、ホスピタリティイベントへの参加、ダイレクトメールの送付など、Web 外での相互作用から作成されます。これらの相互作用は、人物のエンゲージメントをデジタルで追跡できないチャネル、または物理的にイベントに参加したチャネル向けです。簡単な経験則: リストがアップロードされ、その人物がアクションを起こした場合、オフライン buyer touchpoint となります。

オフライン buyer touchpoint は次のいずれかの方法で作成されます:

1. Salesforce Campaign オブジェクトの `Enable Bizible Touchpoints` フィールドを `Include only "Responded" Campaign Members` または `Include All Campaign Members` のいずれかに調整する
1. キャンペーン同期ルールを通じて、明確に定義された基準に基づいて TP を生成します。これらのルールがどのように動作するかを学ぶには、この [Custom Campaign Sync Adobe Marketo Measure documentation](https://experienceleague.adobe.com/docs/marketo-measure/using/channel-tracking-and-setup/offline-channels/custom-campaign-sync.html?lang=en) を参照してください。

2023 年 1 月以降、キャンペーン同期ルールを通じてオフライン Touchpoint を作成しています。この切り替えにより、Marketing Operations チームの手動セットアップ作業が削減されます。

[現在のキャンペーン同期ルール](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564) は、SFDC の `Campaign Type`、`Campaign Member Status`、`Campaign Name`、`Campaign Member Created Date` フィールドに大部分基づいています。

[標準の `Campaign Types` の進行ステータス (オフライン buyer touchpoint が有効化される) を参照](/handbook/marketing/marketing-operations/)

### ページビュートラッキング

AMM のページビュートラッキングは無効化しています。アトリビューションデータにページビューを記録すると [データが大幅に歪む](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/887#note_1130386743) ことが分かったためです。

## Touchpoint の生成とマッピング

Touchpoint は、GitLab の Web サイト、オフライン、またはセールス活動を通じて生成される 3 つの方法のいずれかで生成されます。以下の表は、それぞれがどのようにソースされるかの例を示しています。

Touchpoint が作成されると、AMM は事前定義された [マッピングルール](#amm-channel-and-subchannel-mapping) のセットを使用して、Touchpoint がどのように生成されたかに基づいて、各 Touchpoint に [チャネルとサブチャネル](#channel-and-subchannel) を割り当てます。

| 相互作用のタイプ     | 例                                                                                                                                       | Touchpoint 生成方法                                                                                                                                                                                    | マッピング方法                                                                                                   |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| オンライン (当社の Web サイト経由) | フォーム入力                                                                                                                                     | AMM JavaScript                                                                                                                                                                                                  | UTM 値、セッションのランディングページ、参照元ページ情報を参照することで |
| オフライン                 | トレードショー; BrightTalk Webcasts (Attended ステータス TP の場合)、コンテンツシンジケーションパートナーがコンテンツに関与したリードのリストを提供 | キャンペーンオブジェクトで Touchpoint Generation を有効化することで CRM Campaign メンバーシップ、AMM でキャンペーン同期ルールを設定することで、Marketo Programs Integration 経由の Brighttalk Webcasts (Marketo Program Rules を通じて) | Campaign Type または Marketo Program Channel Mapping を参照することで    |
| セールス活動          | SDR によるアウトバウンド電話                                                                                                                          | CRM Activity (Task または Event) レコードが AMM に同期され、AMM の Activities ページのロジックを通じて                                                                                                                  | Activities ページに割り当てられた Campaign Name を参照することで        |

AMM には、[Touchpoint がどのように生成およびマッピングされるか](https://experienceleague.adobe.com/en/docs/marketo-measure/using/configuration-and-setup/getting-started-with-marketo-measure/touchpoint-generation-and-mapping) に関するより広範なドキュメントがあります。

## AMM チャネルとサブチャネルのマッピング

Adobe Marketo Measure は、オンラインとオフラインの touchpoint 用にカスタマイズ可能なルールセットを別々に保存します。これらは、AMM の Online Channels ページまたは Offline Channels ページから編集できます。

**重要:** AMM のルール変更は 7 日に 1 度しかできません。AMM はこの時間を使用して、すべての touchpoint データを新しいルールで再処理します。

### オンラインチャネルマッピング

チャネルとサブチャネルは 5 つの属性に基づいてマッピングされます:

1. Campaign - フォーム送信が発生するセッションランディングページまたはフォーム URL の `utm_campaign` 値から取得されます。
1. Medium - フォーム送信が発生するセッションランディングページまたはフォーム URL の `utm_medium` 値から取得されます。
1. Source - フォーム送信が発生するセッションランディングページまたはフォーム URL の `utm_source` 値から取得されます。
1. Landing Page - フォーム送信が発生するランディングページの URL です。
1. Referring Website - フォーム送信ページに送信者を紹介した Web サイトです。

これらのルールは階層的でトップダウンで動作するため、最初のルールがチェックされ、次に 2 番目のルールがチェックされる、という順番で進みます。

注: 一部のオンライン Touchpoint は、明確に定義されたソースを持つ特定のルールに該当しません。たとえば、これらの Touchpoint には UTM パラメータが欠けていたり、トラッキング情報がない場合があります。これらの Touchpoint は Direct または Other のいずれかにマッピングされます:

- Other - トラッキング情報 (utm_source、utm_medium など) を持つ Touchpoint だが、ルールに一致しないもの。
- Direct - トラッキング情報を持たない Touchpoint。たとえば、URL を手動で入力した訪問者や、参照元 URL のない別のサイトから来た訪問者など。

| Channel        | Subchannel        | Campaign                   | Medium                             | Source                             | Landing Page                              | Referring Website        |
|----------------|--------------------|----------------------------|------------------------------------|------------------------------------|--------------------------------------------|--------------------------|
| Paid Search    | Google             |                            | cpc                                | google                             |                                            |                          |
| Paid Search    | Google             |                            |                                    |                                    |                                            | [AdWords Paid Search]    |
| Paid Search    | Bing               |                            | cpc                                | bing_yahoo                         |                                            |                          |
| Paid Search    | Bing               |                            |                                    |                                    |                                            | [Bing Paid Search]       |
| Paid Search    | Yahoo              |                            |                                    |                                    |                                            | [Yahoo Paid Search]      |
| Paid Search    | Other              |                            | cpc                                |                                    |                                            |                          |
| Paid Search    | Other              |                            |                                    |                                    |                                            | [Other Paid Search]      |
| Display        | DoubleClick        |                            |                                    |                                    |                                            | [DoubleClick]            |
| Display        | Google             |                            | display                            | google                             |                                            |                          |
| Display        | Google             |                            |                                    |                                    |                                            | [AdWords Display]        |
| Display        | Demandbase         |                            |                                    | ddbase;demandbase                  |                                            |                          |
| Display        | Other              |                            | display                            |                                    |                                            |                          |
| Display        | Other              |                            |                                    | display                            |                                            |                          |
| Paid Social    | Facebook           |                            | paidsocial                         | facebook                           |                                            |                          |
| Paid Social    | Facebook           |                            |                                    |                                    |                                            | [Facebook Paid]          |
| Paid Social    | LinkedIn           |                            | paidsocial                         | linkedin                           |                                            |                          |
| Paid Social    | LinkedIn           |                            |                                    |                                    |                                            | [LinkedIn Paid]          |
| Paid Social    | Twitter            |                            | paidsocial                         | twitter                            |                                            |                          |
| Paid Social    | Other              |                            | paidsocial                         |                                    |                                            |                          |
| Paid Social    | Other              |                            |                                    |                                    |                                            | [Other Paid Search]      |
| Organic Search | Google             |                            |                                    |                                    |                                            | [Google Organic Search]  |
| Organic Search | Bing               |                            |                                    |                                    |                                            | [Bing Organic Search]    |
| Organic Search | Yahoo              |                            |                                    |                                    |                                            | [Yahoo Organic Search]   |
| Organic Search | Other              |                            |                                    |                                    |                                            | [Other Organic Search]   |
| Social         | Facebook           |                            |                                    | Facebook                           |                                            |                          |
| Social         | Facebook           |                            | Facebook                           |                                    |                                            |                          |
| Social         | Facebook           |                            |                                    |                                    |                                            | [Facebook]               |
| Social         | LinkedIn           |                            |                                    | LinkedIn                           |                                            |                          |
| Social         | LinkedIn           |                            | LinkedIn                           |                                    |                                            |                          |
| Social         | LinkedIn           |                            |                                    |                                    |                                            | [LinkedIn]               |
| Social         | Twitter            |                            |                                    | Twitter                            |                                            |                          |
| Social         | Twitter            |                            | Twitter                            |                                    |                                            |                          |
| Social         | Twitter            |                            |                                    |                                    |                                            | [Twitter]                |
| Social         | YouTube            |                            | social                             | youtube                            |                                            |                          |
| Social         | YouTube            |                            |                                    |                                    |                                            | YouTube                  |
| Social         | Other              |                            |                                    | social                             |                                            |                          |
| Social         | Other              |                            | social                             |                                    |                                            |                          |
| Referral       | Partners           |                            |                                    |                                    | *partnerid=*                               |                          |
| Referral       | Partners           |                            |                                    |                                    | *glm_source=partner*                       |                          |
| Referral       | Partners           |                            |                                    | *partner*                          |                                            |                          |
| Referral       | Partners           |                            | *partner*                          |                                    |                                            |                          |
| Email          |                    |                            |                                    | email;eml;e-mail;hs-email;emailsig |                                            |                          |
| Email          |                    |                            | email;eml;e-mail;hs-email;emailsig |                                    |                                            |                          |
| Email          |                    |                            |                                    |                                    |                                            | *email.gitlab.com*       |
| Email          |                    |                            |                                    |                                    |                                            | [Web Mail]               |
| Other         |                    |                            | Any Value                                |                                   |                                            |                          |
| Other         |                    |                            |                                |          Any Value                          |                                            |                          |
| Direct         | Self Managed Trial |                            |                                    |                                    | *about.gitlab.com/free-trial/self-managed/*|                          |
| Direct         | Trial Home         |                            |                                    |                                    | *about.gitlab.com/free-trial/*             |                          |
| Direct         | GitLabCom Trial    |                            |                                    |                                    | *gitlab.com/-/trials/new*                  |                          |
| Direct         |                    |                            |                                    |                                    |                                            | direct;[Account Website] |
| Web Referral   |                    |                            |                                    |                                    |                                            | Any Value                        |

### バケットチャネルマッピング

これらのチャネルとサブチャネルは Salesforce に取り込まれ、重複のあるチャネルには `medium` を使用したり、`Ad Campaign name` を使用して特定の UTM またはキャンペーンを検索したりして、さらにフィルタリングできます。`Bucket Mapping` は、追加のレポートを可能にするために、各サブチャネルセットの高レベルのグループ化です:

| AMM Channel.SubChannel | Bucket Mapping | Online/Offline | マーケティングのタイプ                                                                                                                                                                                          |
|----------------------------- | -------------- | -------------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Content.Content Syndication | Inbound Paid | Offline | サードパーティがホストする White Paper またはその他のコンテンツオファー。                                                                                                                                         |
| Content.Gated Content | Inbound Paid | Offline | White Paper またはその他のコンテンツオファー。                                                                                                                                                                               |
| Content.PF Content | Inbound Free Channels | Online | このキャンペーンタイプは、特定の PathFactory アセットの消費を追跡するために使用されます。                                                                                                                             |
| Inbound - Offline.PQL/Drift/Qualified  | Inbound Free Channels | Offline | オンライン手段で追跡できないあらゆるタイプのインバウンドリクエスト (PQL、Drift、Qualified)。                                                                                                                                                                                 |
| Direct | Inbound Free Channels | Online | 不明または直接 (注: これは SFDC の Web direct/self-serve と同じではなく、元のソースが取得されなかった Web 紹介です)                                                                      |
| Display.Google | Inbound Paid | Online | Google からのディスプレイ広告                                                                                                                                                                                                 |
| Display.Other | Inbound Paid | Online | 不特定のソースからのディスプレイ広告                                                                                                                                                                                   |
| Email | Inbound Free Channels | Online | メールによるエンゲージメント                                                                                                                                                                                                  |
| Event.Conference | Inbound Paid | Offline | Corporate Marketing が運営する大規模イベントで、スポンサーシップを支払い、ブース/プレゼンスを持ち、GitLab の代表者を派遣するイベント (例: AWS re:Invent、DevOps Enterprise Summit)。                         |
| Event.Executive Roundtables | Inbound Paid | Offline |  これは、サードパーティベンダーまたは GitLab を通じて開催されるキャンペーンに使用され、対面式と仮想ラウンドテーブルの両方をカバーします。                                                              |
| Event.Field Event | Inbound Paid | Offline | これは、Field Marketing が運営するイベントで、参加するために費用を支払ったものです                                                                                                                                           |
| Event.Owned Event | Inbound Paid | Offline | これは、私たちが作成し、登録を所有し、スピーカー/会場を手配するイベントです                                                                                                                                     |
| Event.Self-Service Virtual Event | Inbound Free Channels | Offline | これは、GitLabber の個人 Zoom でホストできる軽量の仮想イベントです。                                                                                                                                         |
| Event.Speaking Session | Inbound Paid | Offline | スピーキングエンゲージメントへの参加を追跡するためのものです。                                                                                                                                                       |
| Event.Sponsored Webcast | Inbound Paid | Offline | これは、外部パートナー/ベンダーのプラットフォームでホストされるウェブキャストです。The                                                                                                                                              |
| Event.Vendor Arranged Meetings | Inbound Paid | Offline | サードパーティベンダーが、見込み客または顧客アカウントとの 1 対 1 ミーティングを手配しているキャンペーンに使用されます。                                                                                      |
| Event.Virtual Sponsorship | Inbound Paid | Offline | スポンサーする、または参加する仮想イベントで、登録を所有しないが、参加者リスト、エンゲージメントを生成し、ライブ仮想イベント後にオンデマンドコンテンツの消費があるもの。In |
| Event.Webcast | Inbound Free Channels | Offline | GitLab がホストして開催するすべてのウェブキャスト。                                                                                                                                                                   |
| Event.Workshop | Inbound Free Channels | Offline | GitLab 内の実際のユースケースのアジェンダで参加者がガイドされる対面式または仮想のワークショップ。                                                                                         |
| Organic Search.Bing | Inbound Free Channels | Online | Bing 経由のオーガニック検索                                                                                                                                                                                |
| Organic Search.Google | Inbound Free Channels | Online | Google 経由のオーガニック検索                                                                                                                                                                            |
| Organic Search.Other | Inbound Free Channels | Online | 不特定の検索エンジン経由のオーガニック検索                                                                                                                                                       |
| Organic Search.Yahoo | Inbound Free Channels | Online | Yahoo 検索経由のオーガニック検索                                                                                                                                                                       |
| Other | Other | Online | 不明/不特定の UTM                                                                                                                                                                                                                 |
| Other.Direct Mail | Inbound Paid | Offline | パッケージまたは郵便物が送付されたとき。                                                                                                                                                                  |
| Other.Survey | Inbound Paid | Offline | 私たちまたはサードパーティが送信する調査。                                                                                                                                                                                 |
| Paid Search.AdWords | Inbound Paid | Online |  Google AdWords Paid Search                                                                                                                                                                                          |
| Paid Search.Bing | Inbound Paid | Online | Bing Paid Search                                                                                                                                                                                                       |
| Paid Search.Other | Inbound Paid | Online | 不特定の Paid Search                                                                                                                                                                                               |
| Paid Social.Facebook | Inbound Paid | Online | Facebook Paid Ads                                                                                                                                                                                                  |
| Paid Social.LinkedIn | Inbound Paid | Online | LinkedIn Paid Ads                                                                                                                                                                                                  |
| Paid Social.Other | Inbound Paid | Online | 不特定の Paid Ads                                                                                                                                                                                                  |
| Paid Social.Twitter | Inbound Paid | Online | Twitter Paid Ads                                                                                                                                                                                                    |
| Referral.Referral Program | Inbound Paid | Online | このキャンペーンタイプは、サードパーティの見込み客発掘ベンダーまたはミーティング設定サービスに使用されます                                                                                                                |
| Social.Facebook | Inbound Free Channels | Online | Facebook からの紹介                                                                                                                                                                                         |
| Social.LinkedIn | Inbound Free Channels | Online | LinkedIn からの紹介                                                                                                                                                                                         |
| Social.Other | Inbound Free Channels | Online | 不特定のソーシャルプラットフォームからの紹介                                                                                                                                                                      |
| Social.Twitter | Inbound Free Channels | Online | Twitter からの紹介                                                                                                                                                                                           |
| Trial.Trial | Trial | Online | SaaS トライアル                                                                                                                                                                                                                        |
| Web Referral | Inbound Free Channels | Online | 他に定義されていないサイトからの紹介                                                                                                                                                                      |

## Pathfactory との AMM アトリビューション

**フォーム入力**

アセットビューと同様に、PathFactory アセットでフォームが正常に送信されると、buyer touchpoint が作成されます。

ユーザーが `Cookie ポリシー` を承諾し、`lb_email` パラメータ経由で PathFactory によって識別された場合のみ、touchpoint が生成されます。

AMM は受信した参照 URL を解析して `utm_medium`、`utm_campaign`、`utm_source` を取得します。

**ダウンロードされたアセット**
PathFactory トラックでアセットがダウンロードされたとき、バックエンドスクリプトによって buyer touchpoint が生成されます。

<!-- This diagram is to be used internally and with Pathfactory to understand the attribution touchpoints created through our setup of Pathfactory listening campaigns and how the tracks are used in integrated campaigns and other tactics that drive straight to pathfactory. -->

[figjam フローチャート](https://www.figma.com/file/QFHpUhzIyAim0B7ELOh1gO/Bizible-Online-an-Offline-Touchpoints-with-Pathfactory_2023-08-22_10-59-44?type=whiteboard&t=HDkNJDbCt6265Ezf-1) を参照してください

## SFDC における AMM

### [AMM] SFDC キャンペーン

これらは AMM のネイティブで自動的な機能の一部です。AMM は、touchpoint をアトリビュートするために、すべてのチャネルとサブチャネルに対して、SFDC 内に汎用の `[Bizible]` キャンペーンを作成します。

ただし、これらは公式キャンペーンではないため、メンバーはいませんが、touchpoint はレポートと分析の使用のためにこれらのキャンペーンを参照します。

例: [Web Direct [Bizible]](https://gitlab.my.salesforce.com/70161000000Cnzk)

### SFDC における Bizible レポート

以下は、SFDC でよく使用される bizible レポートとそのユースケースです。

#### ユースケース: GitLab 所有の gated landing page のソース別登録を追跡

**使用される Bizible レポートタイプ: Bizible person with Bizible touchpoints (Custom)**

以下は、about.gitlab または Marketo ページで登録が設定されている zoom ウェブキャストの、駆動チャネル別に登録を追跡する手順です。

- ステップ 1: SFDC レポートタブをクリックします。
- ステップ 2: 新しいレポートを作成します。検索バーで、レポートタイプ `Bizible person with Bizible touchpoints (Custom)` を入力して選択し、`create` をクリックします。
- ステップ 3: SFDC レポート内で、上部のフィルターが `Show All bizible persons` に設定され、`Date Field Range is set to All Time` であることを確認します。
- ステップ 4: フィルターを追加: `Form url contains [insert webcast landing page unique identifier]` (例: Form url contains automate-security-ci)
- ステップ 5: summary フォーマットを選択し、`Marketing Channel - Path` でグループ化します。

トレーニングビデオ:


<div class="relative my-6" style="aspect-ratio: 16 / 9;">
  <iframe src="https://www.youtube.com/embed/VbmqYu7WFOU" title="YouTube video" loading="lazy" allowfullscreen class="absolute inset-0 w-full h-full"></iframe>
</div>


## AMM レビュープロセス

### オンラインチャネルマッピング

オンライン touchpoint と、オンラインアクティビティに基づく touchpoint の作成を管理するルールのレビューは月に 1 度行われ、以下のチェックを含みます:

- Marketo Measure Touchpoint SFDC レポートを引き出し、チャネル別にグループ化し、チャネルが「Other」に関連付けられた touchpoint を監視する;
- 「Other」 touchpoint の Landing Page Raw フィールドデータをレビューし、オンラインルールシートに追加が必要な新しいまたは異常な utm パラメータがあるかどうかを特定する;
- さらに、さまざまなオンラインキャンペーンで使用される URL を含む [UTM Generator スプレッドシート](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=2043976569) をレビューし、新しく追加された utm パラメータがオンラインルールシートに含まれていることを確認する;
- オンライン touchpoint ルールシートへのすべての更新を確定し、Marketo Measure > Online Channels セクションに再アップロードする;
- 最後に、ルール変更によって Channel/Sub-Channel マッピングへの追加/削減が必要になった場合は、それらが Marketo Measure > Create Channels セクションに含まれるようにする。

### オフラインチャネルマッピング

オフラインアクティビティの touchpoint 作成を管理するキャンペーン同期ルールのレビューは月に 1 度行われ、[Adobe Marketo Measure Best Practices for Maintenance](https://experienceleague.adobe.com/docs/marketo-measure/using/channel-tracking-and-setup/offline-channels/best-practices-for-offline-channels.html?lang=en) に基づいています。以下のチェックを含みます:

- チャネル別にグループ化された Marketo Measure touchpoint レポートを引き出し、チャネルが NULL に関連付けられた touchpoint が多く見られるかどうかを監視する;
- NULL touchpoint の Campaign Ad Name データフィールドをレビューし、Campaign Type が選択されているかどうかを特定する。選択されている場合、Campaign Type が Marketo Measure の Offline Channels で表示され、正しい Channel にマッピングされていることを確認する;
- CRM > Offline Channels の下で、すべてのオフラインキャンペーンタイプが適切な Marketo Measure チャネル/サブチャネルにマッピングされていることを確認する。
- CRM > Campaigns の下で、設定されたルールが最新で正確であることを確認する。適切に追跡されていないキャンペーンに対してテストを実行する。
- 行ったすべての変更を発行して、touchpoint を遡って更新する。

### AMM データ更新

すべての AMM データ関連の更新を確認するには、[マーケティング変更ログスプレッドシート](https://docs.google.com/spreadsheets/d/1FHiKhQukMVfwKsBJDzyrsuzuw2bv97xQFhegvFXTeNQ/edit#gid=613524344) にアクセスしてください。すべての更新は、更新日、影響レベル、変更タイプなどの追加情報とともに記録されています。
