---
title: キャンペーンにおけるコンテンツ
description: マーケティングキャンペーンでコンテンツを活用する方法（ゲートなしコンテンツジャーニーや過去のゲート付きランディングページプロセスを含む）について知っておくべきすべての情報。
twitter_image: /images/tweets/handbook-marketing.png
twitter_site: '@gitlab'
twitter_creator: '@gitlab'
upstream_path: /handbook/marketing/demand-generation/campaigns/content-in-campaigns/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

## 概要 {#overview}

<!-- DO NOT CHANGE THIS ANCHOR -->

このページでは、社内で作成されたコンテンツ、アナリストリレーションのコンテンツ、ダウンロード可能な競合コンテンツなど、キャンペーンでコンテンツが活用される方法を文書化しています。

技術系のオーディエンスを最適にエンゲージするため、私たちはゲート付きランディングページの代わりに、Pathfactory トラックを活用する **ゲートなしコンテンツジャーニー** を追求しています。これにより、視聴者はコンテンツ全体を見るためにサインアップする前にプレビューできるようになります。フォームがいつどのように表示されるかは柔軟に設定でき、実証された結果で最高のエクスペリエンスを提供するためにテストします。このプロセスにより、新しいコンテンツの立ち上げもより効率的になり、キャンペーンでコンテンツを活用する方法に時間を集中できます。

以下の各セクションのエピックコードは、新しいコンテンツを立ち上げるためのアクション項目のリストを「チェックオフ」するために必要な Issue を概説しています。*このページはキャンペーンチームのハンドブックページ内に存在しますが、マーケティングのすべてのチームが貢献することを意図しています。更新が必要な場合は、MR を提出して `@aoetama` に割り当ててください。*

- ゲートなしコンテンツジャーニー（Pathfactory）セットアッププロセスへジャンプ
- ゲート付きコンテンツ（ランディングページ）セットアッププロセスへジャンプ - *段階的に廃止中*

### キャンペーン内のコンテンツの種類 {#content-types}

<!-- DO NOT CHANGE THIS ANCHOR -->

- **マーケティングキャンペーンでの利用のためのコンテンツ:** 私たちはマーケティングチャネル（ウェブサイト、メールナーチャー、有償デジタル、オーガニックソーシャルなど）でコンテンツを活用します
  - [GitLab 内製コンテンツ](/handbook/marketing/demand-generation/campaigns/content-in-campaigns#internal-content): 私たちが社内でコンテンツを作成・開発したもの
  - [外部コンテンツ（例: アナリストリレーション）](/handbook/marketing/demand-generation/campaigns/content-in-campaigns#external-content): 外部ベンダー（アナリストやパブリッシャーなど）から使用権を購入したか、パートナーから受け取ったコンテンツ
  - [オンデマンドウェブキャスト](/handbook/marketing/virtual-events/webcasts/)
- **[コンテンツシンジケーション](/handbook/marketing/marketing-operations/campaigns-and-programs/#content-syndication)** （Digital Marketing 配下）: サードパーティベンダーを通じてコンテンツをプロモートしましたが、自社サイトに人を誘導するわけではありません。これらのケースでは、彼らのオーディエンスがダウンロードできるようにリソースを提供し、アップロードされるリードを受け取ることがよくあります。

## キャンペーン用コンテンツの選び方 {#picking-content-for-campaigns}

<!-- DO NOT CHANGE THIS ANCHOR -->

**Pathfactory コンテンツライブラリ全体を検索する**

https://gitlab.lookbookhq.com/authoring/content-library/content

以下の 1 つ以上でフィルタリング:

- トピック
- コンテンツタイプ
- ファネルステージ
- GTM モーション（Pathfactory 内のビジネスユニット）
- 言語

**何が機能するかを見るためのレポートを表示**

- **分析する主要指標: エンゲージメント時間**
  - *「なぜ総閲覧数ではないのか？」* エンゲージメント時間は、コンテンツの効果性を示すより良い指標です。閲覧数は自己実現的予言になりがちで、閲覧数が多いほど使用され、他のコンテンツと比較してさらに上昇し続けるからです。

## 社内作成コンテンツ（例: eBook、ガイド）{#internal-content}

<!-- DO NOT CHANGE THIS ANCHOR -->

以下のプロセスは、すべての新しいコンテンツ（eBook、ガイド、ホワイトペーパーなど）に使用するべきです。エピックと関連 Issue の作成は、コンテンツの準備ができたときに、Pathfactory に投入するチーム（MOps）とアクティベートするチーム（Campaigns、Digital、ABM）が即座にアクションを取れるようにする **キャンペーンマネージャー** の責任です。

### エピックコードと Issue - 社内 GitLab コンテンツ {#epic-issues-internal-content}

<!-- DO NOT CHANGE THIS ANCHOR -->

#### このプロセスのビデオ概要を見る

[このプロセスのビデオ概要を見る >>](https://youtu.be/RbQ8Hr6DuQo)

このプロセスについて質問がある場合は、[#marketing-campaigns](https://gitlab.slack.com/archives/CCWUCP4MS) Slack チャンネルで `@aoetama` までご連絡ください。このプロセスは、効率性と全チームのプロジェクト管理プラクティスへの適合のために 2018 年から繰り返し改善されており、必要に応じて継続的に更新される予定です！

1. **社内作成コンテンツのエピック:** 統合キャンペーンに整合する `Campaign Manager` がエピックを作成し（以下のコードを使用）、キャンペーンエピックに関連付けます
1. **関連 Issue:** 統合キャンペーンに整合する `Campaign Manager` がエピックコードで指定された Issue を作成し、コンテンツエピックに関連付けます

:calendar: タイムラインを開発する際のガイドとして、**[ワークバックタイムライン計算機](https://docs.google.com/spreadsheets/d/1RvYLEUJvh9QZJZX1uXiKJPcOOSGd7dEeNneqyA2bt3A/edit#gid=969067029)*** をご覧ください

```markdown
<!-- NAME EPIC: [type] <Name of Asset> (ex. [eBook] A beginner's guide to GitOps) -->

## Launch date: `to be added`

## Landing Page: (add when live)

## UTMs for [insert epic title here]

**Example utm structure:**

- `utm_campaign=autosd`
- `utm_content=awssecurityvideo`
- `utm_asset_type=video`
- `utm_budget=cmp`

- :nerd: Read about our UTM strategy in [this handbook page](/handbook/marketing/utm-strategy/).
- :link: Build a link with UTMs through this [UTM builder googlesheet](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=2043976569).

## Pathfactory link: (add when live)

#### :key: Key Details

- **Content Owner:**
- **Campaign Manager:**
- **Official Content Name:**
- **Official Content Type:**
- **Primary Campaign:**
- **Primary Sales Segment:**

  - [x] Enterprise
  - [x] Mid-Market
  - [x] SMB
  - [ ] PubSec
    - [ ] Civilian (CIV)
    - [ ] Department of Defense (DOD)
    - [ ] Federal Systems Integrators (FSI)
    - [ ] National Security Group (NSG)
    - [ ] PUBSEC General Nurture
    - [ ] State, Local and Education (SLED)
- **Primary Buying Stage:**
  - [ ] Awareness
  - [ ] Consideration
  - [ ] Decision/Purchase
- **Primary Persona:**
  - [ ] User (ICs/Managers)
  - [ ] Buyer (Director+)
  - [ ] Default
- ** Region:**
  - [ ] GLOBAL
  - [ ] AMER
  - [ ] APAC
  - [ ] EMEA
  - [ ] LATAM
- **Language:**
- **Key metrics for success:** `Add goals here (e.g. number of downloads, INQs, MQLs, SAOs)`
- **Marketo Program Name:** `YYYY_Type_NameAsset` <!-- as content owner, you make this up. Follow structure, no spaces, keep it short - i.e. `2020_eBook_BegGuideGitOps`. This will be used for MKTO/SFDC program. -->
- [ ] [main salesforce program]() - `to be created`
- [ ] [main marketo campaign]() - `to be created`
- [ ] [asset copy draft]() - `doc to be added by Content Marketing`
- [ ] [pathfactory track link]() - `link to PF track (the track in PF, not the live link) when created`

### :rocket: Promotion tactics and channels

- [ ] Gated Landing page
- [ ] Email Nurture
- [ ] Organic Social
- [ ] Paid Digital
- [ ] Content Syndication
- [ ] Blog
- [ ] Press release
- [ ] Other - `Add`

### :books: Issues - Content Owner to Create

{{% details summary="Expand below for quick links to optional activation issues to be created and linked to the epic." %}}
[Use the workback timeline calculator to assign correct due dates based off of launch date](https://docs.google.com/spreadsheets/d/1RvYLEUJvh9QZJZX1uXiKJPcOOSGd7dEeNneqyA2bt3A/edit#gid=969067029)

**Required Issues:**

- [ ] :calendar: Not an issue, but an action item for content owner: Add to [SSoT Marketing Calendar](https://docs.google.com/spreadsheets/d/1Tk5fVSwpsEZVFbKOtuaPAItTpAE2PjPeyZ4jKoDe42w/edit#gid=571560493)
- [ ] Asset Copy Issue (open based on which team is content owner)
  - [Content Asset Copy Issue](https://gitlab.com/gitlab-com/marketing/inbound-marketing/global-content/content-marketing/-/issues/new?issuable_template=content-resource-request) - Content
  - [PMM Asset Copy Issue](https://gitlab.com/gitlab-com/marketing/strategic-marketing/product-marketing/-/issues/new) - PMM (no issue template)
- [ ] [Nurture Email Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=add-to-intelligent-email-nurture) - Content, Lifecycle & Campaigns
- [ ] [Asset Design Issue](https://gitlab.com/gitlab-com/marketing/inbound-marketing/global-content/content-marketing/-/issues/new?issuable_template=design-request-content-resource) - Digital Design
- [ ] 🧨 Not an issue, but an action item for content owner: upload to Pathfactory
- [ ] :dart: Not an issue, but an action item for content owner: add to HighSpot
- [ ] [Pathfactory Track Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-track) - Campaigns
- [ ] [Resource Page Addition Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-resource-page-addition) - Campaigns

**Supplemental issues:**

- [ ] [Landing Page Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-content-landing-page) - Content & Campaigns _(only if promoting via Facebook and Google AdWords)_
- [ ] [Digital Marketing Promotion Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/digital-marketing/-/issues/new?issuable_template=paid-digital-request) - Digital Marketing
- [ ] [Organic Social Issue](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues/new?issuable_template=social-gtm-organic) - Social
- [ ] [Blog](/handbook/marketing/blog/) - Editorial
- [ ] [PR Announcement Issue](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/issues/new?issuable_template=announcement) - PR
{{% /details %}}

/label ~"Content Marketing" ~"Gated Content" ~"mktg-demandgen" ~"dg-campaigns" ~"mktg-status::wip"
```

## 外部作成コンテンツ（例: アナリストリレーション）{#external-content}

<!-- DO NOT CHANGE THIS ANCHOR -->

外部コンテンツは、アナリストリレーション、パートナー、その他協業しているベンダーから入手できます。例として、ベンダー比較（Gartner/Forrester など）や業界／市場分析（DevOps Institute など）が挙げられます。

GitLab チームメンバー（例: AR）が潜在的なコンテンツのスポンサーシップを評価する際、コンテンツの活用方法やスポンサーシップの妥当性について [GTM モーションチーム](/handbook/marketing/plan-fy22/#core-teams) と協議する責任を負います。これは、[ディシジョンマトリクス Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=decision-tree-matrix) を作成することで行えます（ステップバイステップのプロセスは下記参照）。キャンペーンマネージャーがディシジョンマトリクスのインプットを評価し、スポンサーシップの最終的なゴー／ノーゴー判断を下します。外部コンテンツをスポンサーすることが決定された場合、キャンペーンマネージャーはコンテンツアクティベーションエピックと、関連するすべてのチームの作業をリクエストする関連 Issue を作成します（効率的、包括的、再現可能になるよう以下に概説しています！）。

すべての外部コンテンツは、`少なくとも 30 営業日のローンチ日までの時間` を持って、購入の前に計画されるべきです。これにより、既存および将来の統合キャンペーンと GTM モーションへのアクティベーションを計画する時間が確保されます。

### ディシジョンマトリクス

ディシジョンマトリクスの目的は、新しいアナリストレポートが GitLab の市場でのポジショニングを固める収益性のある投資となるかについて、クロスファンクショナルなフィードバックを集めることです。また、それが整合するキャンペーンとペルソナ、およびアクティベートされるチャネルを概説します。

#### ステップバイステップのディシジョンマトリクスプロセス

1. **アナリストリレーション** が[ディシジョンマトリクス Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=decision-tree-matrix) を作成し、関連するキャンペーンマネージャーに割り当てます。
1. **キャンペーンマネージャー** がディシジョンマトリクス Issue で関連するプロダクトマーケティング、SDR イネーブルメント、フィールドイネーブルメントのカウンターパートにタグを付け、合意された SLA 日までにインプットを提出するようコメントします。| `SLA: 1 営業日`
1. **プロダクトマーケティング、SDR イネーブルメント、フィールドイネーブルメント** が、関連するチャネル、キャンペーン、ペルソナの自分たちの部分を埋めます。インプットのために関連する技術カウンターパートにタグを付けます。| `SLA: 3 営業日`
1. **キャンペーンマネージャー** がプロモーションのための提案チャネルを埋め、スポンサーシップのゴー／ノーゴー判断を下し、アナリストリレーションにタグを付けます | `SLA: 3 営業日`

**ディシジョンマトリクス エンドツーエンドの判断タイムライン (SLA): 7 営業日**

### エピックコードと Issue - 外部コンテンツ {#epic-issues-external-content}

<!-- DO NOT CHANGE THIS ANCHOR -->

#### このプロセスのビデオ概要を見る

[このプロセスのビデオ概要を見る >>](https://youtu.be/RbQ8Hr6DuQo)

このプロセスについて質問がある場合は、[#marketing-campaigns](https://gitlab.slack.com/archives/CCWUCP4MS) Slack チャンネルで `@aoetama` までご連絡ください。このプロセスは、効率性と全チームのプロジェクト管理プラクティスへの適合のために 2018 年から繰り返し改善されており、必要に応じて継続的に更新される予定です！

1. **外部コンテンツのエピック:** `Campaign Manager` がエピックを作成し（以下のコードを使用）、プライマリ GTM モーションエピックに関連付けます
1. **関連 Issue:** `Campaign Manager` がエピックコードで指定された Issue を作成し、外部コンテンツエピックに関連付けます

タイムラインを開発する際のガイドとして、ワークバックタイムライン計算機を [こちら](https://docs.google.com/spreadsheets/d/1RvYLEUJvh9QZJZX1uXiKJPcOOSGd7dEeNneqyA2bt3A/edit#gid=969067029) でご覧ください

```markdown
<!-- NAME EPIC: [type] <Name of Asset> (ex. [Report] Gartner MQ for ARO) -->

- [ ] Make sure epic is CONFIDENTIAL, if applicable (i.e. Analyst Reports)

## Launch date: `to be added`

## [Pathfactory link]() - `to be added when live`

### :key: Key Details

- **Analyst Relations DRI:**
- **Product Marketing DRI:**
- **Campaigns DRI:**
- **Official Content Name:**
- **Official Content Type:**
- **Primary Campaign:**
  - [ ] DevSecOps platform
  - [ ] Automated Software Delivery
  - [ ] Security & Compliance
- **Primary Sales Segment:**
  - [ ] Enterprise
  - [ ] Mid-Market
  - [ ] SMB
- **Primary Buying Stage:**
  - [ ] Awareness
  - [ ] Consideration
  - [ ] Decision/Purchase
- **Primary Persona:**
- **Language:**
- **Budget:** <!-- Match to Allocadia -->
- **Marketo program name:** `YYYY_Type_VendorNameAsset` <!-- as content owner, you make this up. Follow structure, no spaces, keep it short - i.e. `2020_report_GartnerMQARO`. This will be used for MKTO/SFDC program. -->
- [ ] [main salesforce program]() - `to be added`
- [ ] [main marketo campaign]() - `to be added`
- [ ] [pathfactory track link]() - `link to PF track (the track in PF, not the live link) when created`
- [ ] [Pathfactory & Resource Page Copy]() - `doc to be added by Content Owner` ([use template here](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=1837173931)
- [ ] UTMS: `utm_campaign=[add here]&utm_content=[add here]`

#### :dart: Timeline / Promotional asset list (add links when completed) and DRIs
Adjust list as applicable for each report activation:

- [ ] 2023-xx-xx add report to **Pathfactory** `@DRI`
- [ ] 2023-xx-xx **landing page** live `@DRI`
- [ ] 2023-xx-xx add to [Analyst research page](https://about.gitlab.com/analysts/) `@DRI`
- [ ] 2023-xx-xx report live on [**resources page**](https://about.gitlab.com/resources/) `@DRI`
- [ ] 2023-xx-xx publish **blog** `@DRI`
- [ ] 2023-xx-xx publish **commentary page** `@DRI`
- [ ] 2023-xx-xx add on **website pages** (solution pages, homepage) `@DRI`
- [ ] 2023-xx-xx **press release** live `@DRI`
- [ ] Field Enablement `@DRI`
  - [ ] 2023-xx-xx send **field FYI**
  - [ ] 2023-xx-xx conduct **field enablement session**
- [ ] Organic social `@DRI`
  - [ ] 2023-xx-xx **Facebook** post(s)
  - [ ] 2023-xx-xx **LinkedIn** post(s)
  - [ ] 2023-xx-xx **Twitter** post(s)
- [ ] **Executive social sharing** posts `@DRI`
- [ ] 2023-xx-xx add to **Highspot** `@DRI`
- [ ] 2023-xx-xx add to **Intelligent email nurture** `@DRI`
- [ ] 2023-xx-xx add to **paid digital** `@DRI`


### :books: Issues to Create & Tasks to complete

Adjust list as applicable for each report activation. [Use the workback timeline calculator to assign correct due dates based off of launch date](https://docs.google.com/spreadsheets/d/1RvYLEUJvh9QZJZX1uXiKJPcOOSGd7dEeNneqyA2bt3A/edit#gid=969067029)

**Analyst relations** `@DRI`

- [ ] Provide reprint link and expiration date
- [ ] Secure analyst citation review / approval
- [ ] [Open Analyst Report Commentary Page Issue](https://gitlab.com/gitlab-com/marketing/strategic-marketing/product-marketing/-/issues/new?issuable_template=AR-Commentary-Page)
- [ ] Add to the open Product Marketing / Field Communications Planning epic (see [handbook entry](/handbook/sales/field-communications/#recurring-announcements) for more detail & link to latest epic)

**Product Marketing** `@DRI`

- [ ] Add to HighSpot
- [ ] [Open PR Announcement Issue](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/issues/new?issuable_template=announcement)
- [ ] [Open Blog Issue](https://gitlab.com/gitlab-com/marketing/inbound-marketing/global-content/content-marketing/issues/new#?issuable_template=blog-post-pitch)
- [ ] Open MR to add to add to web pages (e.g. solutions pages, homepage etc.)
- [ ] Open issue for executive social sharing

**Campaign Manager** `@DRI`

- [ ] Add to [SSoT Marketing Calendar]https://docs.google.com/spreadsheets/d/1Tk5fVSwpsEZVFbKOtuaPAItTpAE2PjPeyZ4jKoDe42w/edit#gid=571560493)
- [ ] [Open Pathfactory upload Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-upload)
- [ ] [Open Nurture Email Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=add-to-intelligent-email-nurture)
- [ ] [Open Resource Page Addition Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-resource-page-addition)
- [ ] [Open Expiration Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-expire-analyst)
- [ ] [Open Landing Page Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-content-landing-page) - Assign to Content & Campaigns _(only if promoting via Facebook and Google AdWords)_
- [ ] [Open Digital Marketing Promotion Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/digital-marketing/-/issues/new?issuable_template=paid-digital-request)
- [ ] [Open Organic Social Issue](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues/new?issuable_template=social-general-request)

</details>

/label ~"Analyst Relations" ~"Gated Content" ~"mktg-demandgen" ~"dg-campaigns" ~"mktg-status::wip"
```

## リソースページに新しいコンテンツを追加する {#add-to-resources-page}

<!-- DO NOT CHANGE THIS ANCHOR -->

**[ビデオウォークスルー](https://www.youtube.com/watch?v=G8NZV75H7lw): CMS（Contentful）を使用して <https://about.gitlab.com/resources/> にリソースを追加する方法。

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=G8NZV75H7lw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**ステップバイステップの手順は以下:**

1. Contentful の[リソースページ](https://app.contentful.com/spaces/xz1dnu24egyd/entries/5sF9ZMv4xAffzAKEnQGozh?focusedField=title) エントリに移動
1. ページコンテンツの「Browse all resources」セクションをクリック
1. 一番下までスクロールして、+ Add Content -> Card を選択
1. ここから、既存のカードを開いて同じフィールドが入力されていることを確認すると役立つかもしれませんが、要点は:

   - タイトルは `Internal Name` と `Title` の両方に入る
   - 言語は `Subtitle` に入る
   - ティーザーは `Description` に入る
   - トピックは `List` に入る（各トピックの後に enter を押す）
   - ソリューションは `Pills` に入る（各トピックの後に enter を押す）
   - リソースのタイプは `Icon Name` に入る
   - URL は `Card Link` に入る

そのカードを公開し、最初に表示させたい場合はリストの一番上にドラッグして、そのセクションも公開します！

ページの他の部分を編集したい場合、プロセスは似ています。他のカードの既存のパターンに従ってください！注意すべき唯一のセクションは、Featured リソースです - フィーチャーしたいものはそのリストの最初にあり、画像が必要です。

*注: ゲートなしジャーニーの場合、URL はランディングページではなく PF アセット／トラックに誘導します。*

**選択する TYPES（1 つ選択）**

- eBook
- Report
- Webcast
- One-pager
- Whitepaper
- Demo
- Comparison
- Assessment

**選択する LANGUAGES（1 つ選択）**

- English
- Korean
- Japanese
- Spanish

**選択する TOPICS（該当するすべてを追加）:**

*@aoetama からの注意: 効率性のために Pathfactory 内のトピックとこれを整合できるか見てみましょう（Pathfactory エクスプローラページの方向に進まない場合）。*

- Agile
- CD
- CI
- Cloud infrastructure
- Continuous Delivery
- Continuous Development
- Continuous Integration
- Cloud Native
- DevOps
- DevSecOps
- Git
- GitOps
- GitLab
- Infrastructure as code
- Kubernetes
- Public Sector
- Security
- Single Applicaton
- Software Development
- Toolchain
- Version Analytics
- Version Control & Collaboration

**選択する SOLUTIONS（最も整合するものを選択）**

- Accelerated Delivery
- Deliver better products faster
- Executive visibility
- GitLab & AWS
- GitLab & Pulumi
- GitLab & Terraform
- GitOps
- Google Anthos and GitLab
- GitLab & AWS
- Improve operational efficiencies
- Project compliance
- Quality
- Security
- Security and quality

## アナリストアセットの延長方法 {#extend-analyst-assets}

<!-- DO NOT CHANGE THIS ANCHOR -->

セールスで頻繁に使用されているか、キャンペーンで好成績を上げているアセットの場合、私たちはアセットの権利を延長することがあります。その場合、決定は[期限切れ Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-expire-analyst) で示されます。

[Pathfactory Content Library ハンドブック](/handbook/marketing/marketing-operations/pathfactory/content-library/#replacing-or-updating-the-verson-of-an-asset-after-initial-upload) に概説された手順に従ってください。

## アナリストアセットの期限切れ時の廃止方法 {#retire-analyst-assets}

<!-- DO NOT CHANGE THIS ANCHOR -->

各アナリストアセットについて、キャンペーンマネージャー DRI が[期限切れ Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-expire-analyst) を作成し、包括的なエピックに関連付けます（アセットが期限切れになる予定の期日付き）。アセットを期限切れにする決定が下されると、関係するチームはそれぞれの Issue 内のアクション項目をチェックオフします。

### Marketo ランディングページの廃止 {#retire-marketo-page}

<!-- DO NOT CHANGE THIS ANCHOR -->

**まずページからフォームを削除し、「もう利用できません」メッセージを追加します**

- Marketo プログラムで、登録ページの「edit」をクリック
- 右側の「Variables」（「Elements」の下）で、`2column Visibility` を見つけて「Hidden」に切り替え
- 右側の「Variables」（「Elements」の下）で、`2column Sidebar` を見つけて「No Sidebar」に切り替え
- 右側の「Variables」（「Elements」の下）で、`flex1 Visibility` を見つけて「Visible」に切り替え
- flex1 セクションで、ダブルクリックしてから HTML で編集をクリック > 以下のコードをセクションに追加して保存
- ランディングページを承認してライブでテスト。フォームや段落テキストはもう見えず、リソースが利用できなくなったという通知のみが表示されるはずです。

```html
<h1>This resource is no longer available.</h1>
<p>Thank you for your interest in this resource, but it is no longer available for download. <a href="https://about.gitlab.com/analysts/" target="_blank" id="">Click here to visit our industry analysts page to view other reports and best practices!</a></p>
```

### Intelligent Nurture からの削除 {#remove-intelligent-nurture}

<!-- DO NOT CHANGE THIS ANCHOR -->

[Emails/Nurture ハンドブック](/handbook/marketing/lifecycle-marketing/emails-nurture) に概説されているプロセスに従ってください。

### Pathfactory からの削除 {#remove-pathfactory}

<!-- DO NOT CHANGE THIS ANCHOR -->

[Pathfactory ハンドブック](/handbook/marketing/marketing-operations/pathfactory/content-library/#removing-an-asset-from-the-library) に概説されているプロセスに従ってください。

### ゲート付きランディングページのための Marketo 自動化とセットアップ {#steps-gated-landing-pages}

<!-- DO NOT CHANGE THIS ANCHOR -->

**!!! リマインダー: 私たちは Pathfactory 経由でゲートなしコンテンツジャーニーを使用しています。このプロセスは特定のシナリオでのみ使用するべきで、控えめに使用してください。**

[ビデオチュートリアルを見る >](https://www.youtube.com/watch?v=RrmDCZPh1nw)

:exclamation: 依存関係: 最終アセットの納入、最終ランディングページコピーの完成、最終アセットが Pathfactory に追加されトラックに配置されることが、Marketo プログラムをセットアップする前に完了している必要があります。

**実行することの TL;DR:**

- Marketo プログラム、トークン、SFDC キャンペーン同期を作成
- 登録ページとサンキューページの URL を編集
- スマートキャンペーンを編集してアクティベート
- SFDC キャンペーンを更新
- ライブ登録ページとフローをテスト
- 新しいコンテンツをリソースページに追加（別の Issue）

#### Marketo プログラム、トークン、SFDC キャンペーン同期を作成 {#steps-gated-mkto-sfdc}

<!-- DO NOT CHANGE THIS ANCHOR -->

- [Marketo Gated Content Template](https://app-ab13.marketo.com/#PG5111A1) をクローンし、命名規則（YYYY_Type_AssetName、例: 2020_report_GarnterVOC_ARO）を使用して新しいプログラムに名前を付ける
- SFDC プログラムを作成（Program Summary > `Salesforce campaign sync` > 「not set」をクリックしてドロップダウンから「Create New」を選択）- 自動入力される名前のままにし、エピック URL を説明に追加して「Save」
- Marketo トークンを更新（Program Summary > 「My Tokens」タブ）
  - `{{my.bullet1}}` - 承認された [文字数制限](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=905304679) のあるブレットコピー
  - `{{my.bullet2}}` - 承認された [文字数制限](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=905304679) のあるブレットコピー
  - `{{my.bullet3}}` - 承認された [文字数制限](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=905304679) のあるブレットコピー
  - `{{my.bullet4}}` - 承認された [文字数制限](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=905304679) のあるブレットコピー
  - `{{my.contentDescription}}`    - 承認された [文字数制限](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=905304679) のある 2〜3 文。これはソーシャルでのページプレビューに表示され、Pathfactory の説明に使用されます。
  - `{{my.contentDownloadURL}}` - 初期登録ページのセットアップでは更新をスキップ（オンデマンドへの切り替え時に更新）。`https://` も email トラッキング部分（`lb_email=`）も含まない Pathfactory リンク
    - 含めるべき正しいリンクの例: `learn.gitlab.com/gartner-voc-aro/gartner-voc-aro` - Marketo テンプレートアセットのコードが URL `https://learn.gitlab.com/gartner-voc-aro/gartner-voc-aro?lb_email={{lead.email address}}&{{my.utm}}` を作成します
    - この URL の両方の部分にカスタム URL スラグが含まれている点に注意。トラッキングパラメータの簡素化のため、すべての Pathfactory リンクに組み込むべきです
  - `{{my.contentEpicURL}}` - 自動化では使用されなくなりましたが、参照に役立ちます
  - `{{my.contentSubtitle}}` - 視聴者に表示するコンテンツサブタイトル（ランディングページ、メールなどを通じて）
  - `{{my.contentTitle}}`    - 視聴者に表示するコンテンツタイトル（ランディングページ、メール、興味のあるモーメントなどを通じて）、承認された [文字数制限](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=905304679) あり
  - `{{my.contentType}}`    - 視聴者に表示するコンテンツタイプ（ランディングページ、メール、興味のあるモーメントなどを通じて）
  - `{{my.contentTypeSFDC}}` - 以下のリストから選択（Marketo > SFDC 同期エラーを避けるために重要）: whitepaper、report、video、eBook、general
  - `{{my.emailConfirmationButtonCopy}}`    - `Download` のままにする（ただし必要に応じて更新可能）
  - `{{my.formButtonCopy}}`    - `Download  now` のままにする（ただし必要に応じて更新可能）
  - `{{my.formHeader}}`    - `Free Instant Download:` のままにする（ただし必要に応じて更新可能）
  - `{{my.formSubhead}}`    - フォームサブヘッダー（フォームを短くするため、ゲート付きコンテンツのランディングページでは現在使用されていない）
  - `{{my.heroImage}}` - ランディングページフォームの上に表示する画像（[Marketo のオプションはこちら](https://app-ab13.marketo.com/#FI0A1ZN9784)）
  - `{{my.introParagraph}}`    - ランディングページとナーチャーメールで使用するイントロ段落、承認された [文字数制限](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=905304679) あり
  - `{{my.or}}` - `?` のままにする（ただし、Pathfactory アップロード中にカスタム URL スラグがアセットとトラックの両方に適用されなかった場合は `&` に更新可能）。これが正しく適用されず、URL に複数の `?` 疑問符がある場合、壊れます。[ビデオエクスプレイナーを見る](https://www.youtube.com/watch?v=VHgR33cNeJg)
  - `{{my.socialImage}}`    - URL が共有されたときにソーシャル、Slack などのプレビューに表示される画像。この画像は Design/Social から提供されます。ウェブキャスト固有の画像が提示されない限り、デフォルトのままにしてください。
  - `{{my.utm}}` - 整合するキャンペーン utm と一致する必要があります
  - `{{my.valueStatement}}` ウェブキャストから視聴者が得るものに関する短いバリューステートメントのトークン。これはフォローアップメールに結びつき、[文字数制限チェッカー](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=905304679) の最大／最小要件を満たす必要があります

#### 登録ページとサンキューページの URL を編集 {#steps-gated-registration-page}

<!-- DO NOT CHANGE THIS ANCHOR -->

- ランディングページオブジェクトを右クリック > 「URL Tools」 > 「Edit URL Settings」
- 新しい登録ページ URL を入力（フォーマット: `resources-type-name-of-asset`、例: `resources-ebook-ci-best-practices`）
- 新しいサンキューページ URL を入力（フォーマット: `resources-type-name-of-asset-thank-you`、例: `resources-ebook-ci-best-practices-thank-you`）
- 両方とも、`"Throw away" existing url` を選択したままにして保存をクリック

#### フォーム送信の「結果ページ」を編集 {#steps-gated-resulting-page}

<!-- DO NOT CHANGE THIS ANCHOR -->

- クローンされたプログラムは Marketo プログラムテンプレートのサンキューページを自動的に参照します
- 登録ランディングページを右クリック > 「Edit Draft」
- 編集モードの右側、`Elements` の下で `Form Custom` 要素を右クリックして「Edit」をクリック
- `Follow-up page` の隣で、テンプレートへの自動参照をクリアし、プログラム名を入力し始めます - 承認されたサンキューページが表示されるはずです。サンキューページを選択
- 下部の「Swap」ボタンをクリック
- ページの左上で、`Landing Page Actions` > 「Approve and Close」をクリック

#### スマートキャンペーンをアクティベート {#steps-gated-activate-smart-campaigns}

<!-- DO NOT CHANGE THIS ANCHOR -->

- `01 Downloaded Content` スマートキャンペーンをクリック
- `Smart List` をクリック
- `Fills out Form` の最初のトリガーが `Form Name` is any、`Web Page` is（あなたのランディングページの名前）に設定されていることを確認。これはすでに適切に設定されているはずです。
- `Fills out Form` の 2 番目のトリガーは `Form Name` is "Form 2074: PF General" に設定すべきです。`Referrer` contains に Pathfactory アセット名スラグを入力します。例: `guide-to-devops`。
- `Fills out Form` の 3 番目のトリガーは `Form Name` is "Pathfactory Webhook" に設定すべきです。`Referrer` contains に Pathfactory アセット名スラグを入力します。例: `guide-to-devops`。
- フィルター 1 - `Filled Out Form` はすでに適切に設定されているはずです。これは `Form Name` is any、`Web Page` is（あなたのランディングページの名前）になります。
- フィルター 2 - `Filled Out Form` は `Form Name` is "Form 2074: PF General" に設定すべきです。`Referrer` contains に Pathfactory アセット名スラグを入力します。例: `guide-to-devops`。
- フィルター 3 - `Filled out Form` は `Form Name` is "Pathfactory Webhook" に設定すべきです。`Referrer` contains に Pathfactory アセット名スラグを入力します。例: `guide-to-devops`。`Date of Activity` はすでに過去 1 時間に設定されているはずです。
- フィルター 4 - `Pathfactory Engagement Time` greater than 60 はデフォルトとして設定されています。60 は eBook とホワイトペーパーの Pathfactory ビュー閾値です。コンテンツがこのカテゴリに該当する場合、更新は不要です。それ以外のコンテンツタイプは、[Pathfactory スコアリング](/handbook/marketing/marketing-operations/pathfactory/#pathfactory-scoring) に概説されている閾値で更新する必要があります。例えば、アナリストレポートを作成している場合、60 の代わりに 120 を入力します。
- 高度なフィルターは `1 or 2 or (3 and 4)` に設定されます
- フロー: すべて設定済みです！最初のいくつかでは、フローを確認するのは自由です（ただし、すべてトークンを使用しているため、自動的に準備が整っているはずです）
- スケジュールタブ: 「Activate」をクリック（注: 設定は「各人がフローを 7 日ごとに 1 回実行できる」になっているはずです - これはボットが繰り返し再送信することを避けるためです）

#### SFDC キャンペーンを更新 {#steps-gated-update-sfdc}

<!-- DO NOT CHANGE THIS ANCHOR -->

- Salesforce のキャンペーン [https://gitlab.my.salesforce.com/701?fcf=00B61000004NY3B&page=1&rolodexIndex=-1] に移動
- `Campaign Owner` はキャンペーン作成者であるべきです
- `Active` フィールドはチェックされているべきです
- `Description` にはエピック URL を含める必要があり、登録ページ URL を含めることがベストプラクティスです
- `Start Date` はローンチの日付であるべきです
- `End Date` は 1 年後であるべきです
- `Budgeted Cost` は必須です。コストが $0 の場合、`Budgeted Cost` フィールドに `1` をリストします - 注: ROI 計算のためここに少なくとも 1 の値が必要です。さもないと、パイプラインを `0` で割ると、pipe2spend 計算は常に `0` になります。
- `Bizible Touchpoints Enabled` はブランクのままにしてください（これはオンラインタッチポイントになるため）

#### ライブ登録ページとフローをテスト {#steps-gated-testing}

<!-- DO NOT CHANGE THIS ANCHOR -->

- ランディングページオブジェクトをクリックして「View Approved Page」をクリック
- すべてのコピーの最終 QA
- フォームを送信
- フォーム送信がサンキューページに移動することの最終 QA
- サンキューページのリンクが**メールアドレスのトラッキング**（`&lb_email=[email submitted in form]`）付きで Pathfactory に送ることの最終 QA
- フォローアップメールを受信したことを確認
- 確認メールコピーの最終 QA
- 確認メールリンクがメールアドレスのトラッキング（`&lb_email=[email submitted in form]`）付きで Pathfactory に送ることの最終 QA

## 潜在的なバックアッププロセス {#retire-marketo-page}

<!-- DO NOT CHANGE THIS ANCHOR -->

Pathfactory アクセスが付与されている場合、コンテンツオーナーが完了する。アクセスがない場合は、上記のエピックカテゴリに基づいて Campaigns チームに Issue を作成してください。

**/downloads/ リポジトリに追加** （2 MB サイズ未満のアセットのみ利用可能で推奨）

*このステップの目的は、Pathfactory が停止した場合に自動応答装置を切り替えることを可能にすることです。その時点で、Marketo で PDF バージョンを引き続き利用可能にして、迅速な切り替えを行います。*

1. PDF を命名規則 `[asset-type]-short-name-asset` でコンピュータに保存（例: `ebook-agile-delivery-models`）
1. （インデックスから除外された）[`resource/download`](https://gitlab.com/gitlab-com/www-gitlab-com/tree/master/sites/uncategorized/source/resources) ディレクトリに移動
1. `www-gitlab-com / sites / marketing / source / resources / +` と書かれているところで、プラスのドロップダウンをクリックして「Upload File」を選択
1. 上記の命名規則で保存したファイルをアップロード
1. コミットメッセージとして `Upload [Asset Type]: [Asset Name]` を追加し、「create new merge request」のチェックボックスをオンにし、マージリクエストに名前を付け、「Upload file」をクリック
1. MR に説明を追加し、作成者チェックリストを完了し、`@aoetama` に割り当てて「Submit Merge Request」をクリック
1. Marketo プログラムで、`pdfVersion` My Token に MR がマージされたときに利用可能になる上記の命名規則を追加します。（トークンは `https://about.gitlab.com/resources/downloads/add-file-name-here.pdf` のようになります）
