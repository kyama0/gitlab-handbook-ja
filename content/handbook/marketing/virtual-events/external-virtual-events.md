---
title: 外部バーチャルイベント
description: ブースをスポンサーするバーチャルカンファレンスや、サードパーティベンダーとのスポンサードウェビナーなど、外部バーチャルイベントの概要。
twitter_image: '/images/tweets/handbook-marketing.png'
twitter_site: "@gitlab"
twitter_creator: "@gitlab"
upstream_path: /handbook/marketing/virtual-events/external-virtual-events/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## 概要 {#overview}

<!-- DO NOT CHANGE THIS ANCHOR -->

外部バーチャルイベントとは、その定義上、GitLab が所有・主催しないイベントです。これらは外部のサードパーティ（パートナーや有料ベンダーなど）によって主催されます。外部バーチャルイベントの目的は新規リードの獲得であり、内部データベースへのプロモーションは行いません。さまざまな種類の外部バーチャルイベントは以下のとおりで、エピックと Issue の作成、DRI の指定、Issue 期日内でのワークバックスケジュールの定義が含まれます。

* [パートナー主催ウェビナー](/handbook/marketing/virtual-events/external-virtual-events/#partner-hosted-webinars): チャネルパートナー（WWT など）が主催する、無料の戦術です。チャネルパートナーが自身のプラットフォーム上でランディングページ、モデレーション、ウェビナーのホストを管理します。GitLab はイベントのスピーカーとして登壇し、時にはアライアンスパートナーと共同で登壇します。チャネルパートナーがリードを処理するため、イベント後にリードリストが共有されないことがよくあります。プロモーションを行うこともあり、適切なチャネルを判断します。
* [スポンサードウェビナー](/handbook/marketing/virtual-events/external-virtual-events/#sponsored-webinars): 外部ベンダープラットフォーム（DevOps.com など）で主催される、有料の戦術です。ベンダーが登録の促進、自身のプラットフォーム上でのウェビナーのモデレーションとホスト、イベント後のリードリスト提供を担当します。スポンサードウェビナーの目的は新規リードであり、有料活動のため既存データベースへのプロモーションは行いません。
* [バーチャルカンファレンス](/handbook/marketing/virtual-events/external-virtual-events/#virtual-conferences): 外部ベンダープラットフォームで主催される、有料の戦術です。GitLab はスポンサーシップ料金を支払って、バーチャルブースと、しばしばスピーキングセッションやパネル登壇を受けます。スポンサードバーチャルカンファレンスの目的は新規リードであり、有料活動のため既存データベースへのプロモーションは行いません。
* [エグゼクティブラウンドテーブル](/handbook/marketing/virtual-events/external-virtual-events/#executive-roundtables): 外部ベンダープラットフォームで主催される、ハイレベル CxO 参加者の集まりで、モデレーター/ホスト、GitLab のエキスパート、デリゲートとのオープンディスカッションとして実施されます。通常はプレゼンテーションはなく、誰でも発言に加われるディスカッションが行われます。ホストは議論をリードするための質問を準備し、部屋を回ってデリゲートに質問して答えてもらいます。エグゼクティブラウンドテーブルの目的は新規リードであり、有料活動のため既存データベースへのプロモーションは行いません。
* [ベンダーアレンジドミーティング](/handbook/marketing/virtual-events/external-virtual-events/#vendor-arranged-meetings): 外部ベンダーが主催し、ベンダーが見込み顧客または顧客アカウントとの 1 対 1 のミーティングを設定します。GitLab のチームメンバーが内部で設定したミーティングは含まれません。例として、GitLab が関心のある見込み顧客とのミーティングをベンダーがアレンジする「スピードデート」スタイルのミーティング設定があります。ベンダーアレンジドミーティングの目的は、直接アプローチが困難な関心のあるアカウントとのミーティングを創出することであり、有料活動のため既存データベースへのプロモーションは行いません。

## パートナーウェビナー {#partner-hosted-webinars}

<!-- DO NOT CHANGE THIS ANCHOR -->

*パートナー主催ウェビナーは、新規リード獲得を目的としてパートナーが主催します。パートナーは登録促進、自身のプラットフォーム上でのウェビナーのモデレーションとホスト、場合によってはイベント後のリードリスト提供を担当します。プロジェクトオーナー（Partner Marketing）はエピックと関連 Issue の作成、タイムラインと DRI の最新状態維持を担当します。*

### Partner Marketing サポートをリクエストする方法 {#partner-hosted-webinar-requesting-support}

<!-- DO NOT CHANGE THIS ANCHOR -->

CAM とアライアンスマネージャーは、計画中のイベントやウェビナーに対する Channel Marketing サポートをリクエストするために、この [Issue テンプレート](https://gitlab.com/gitlab-com/marketing/partner-marketing/-/issues/new) を使用してください。

#### Partner Marketing リクエストのトリアージボードの表示方法 {#partner-hosted-webinar-triage-board}

<!-- DO NOT CHANGE THIS ANCHOR -->

[ボードを表示](https://gitlab.com/groups/gitlab-com/-/boards/1779611?label_name[]=Channel&label_name[]=Channel%20Marketing)

### GitLab でエピックと Issue を整理するプロセス {#partner-hosted-webinar-project-management}

<!-- DO NOT CHANGE THIS ANCHOR -->

プロジェクトオーナーは、GitLab でエピックと関連 Issue を作成するために、以下の手順に従う責任があります。

1. プロジェクトオーナーがすべての関連 Issue を収容するエピックを作成する（下記のコード）
1. プロジェクトオーナーが必要な関連 Issue を作成する（下記のエピックコード内のショートカットリンク）
1. プロジェクトオーナーがすべての関連 Issue を新しく作成したエピック、および元の Issue に関連付ける
1. プロジェクトオーナーが各 Issue に対して、各タスクのチーム間で合意した SLA に基づいて期日を設定し、各 Issue の正確なオーナーシップを確認する

*注: 戦術の日付が変更される場合、プロジェクトオーナーはすべての関連 Issue の期日を新しい日付に合わせて変更し、関係するチームメンバーに通知する責任があります。*

### エピックコードと Issue テンプレート {#partner-hosted-webinar-epic-code}

<!-- DO NOT CHANGE THIS ANCHOR -->

```markdown
<!-- Name this epic: Channel Webinar - [Webinar Name] (Partner) - [3-letter Month] [Date], [Year] -->
<!-- Example epic name: Channel Webinar - Modern CI/CD with Anthos (WWT) - Apr 22, 2021 -->

## [Partner Marketing Request Issue >>]() `to be added`

- [ ] Once date is finalized, add to [All Marketing Calendar](https://docs.google.com/spreadsheets/d/1c2V3Aj1l_UT5hEb54nczzinGUxtxswZBhZV8r9eErqM/edit?usp=sharing)

## :notepad_spiral: Key Details
* **Slack channel:** <!-- add slack channel # -->
* **[Meeting Notes]()** <!-- to be added by Partner Marketing -->
* **Speaker(s) and Moderator:** <!-- add GitLab handle and company -->
* **CAM:** <!-- add GitLab handle -->
* **Partner Marketing DRI:** <!-- add GitLab handle -->
* **Other GitLab Sponsors:** <!-- add GitLab handle(s) -->
* **Partner's Marketing Liaison:** <!-- add GitLab handle / name -->
* **Marketo Program Type:** Webinar (Partner)
* **Organizer/Webinar hosting:** <!-- add who is hosting the webinar -->
* **Landing Page/Registration URL:**
* **Persona (choose one):** `Practitioner, Manager, or Executive`
* **Sales Segment:** `Large` (GCP's focus)
* **Sales Region:** `AMER, EMEA, APAC`
* **Topic:**
* **Event Name:** <!-- official name TBD -->
* **Event Date:** YYYY-MM-DD
* **Duration:**  (X min content + X min Q/A)
* **GTM Motion (choose primary):** `CI/CD, DevOps Platform, GitOps`
* **Vertical (optional, if specific):**
* **Goal:** `Please be specific on the metric this is meant to impact.`
* **Total Cost:**
* **MDF Requested:**

## Program Tracking <!-- Delete if not receiving leads -->
* [ ] main SFDC campaign (tbd)
* [ ] main Marketo program (tbd)
* [ ] [List clean and upload issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list)

## Existing Material/Assets/Presentations
- [Name of content]()

## :books: Tasks and Issues Created and Linked to Epic

## If GitLab is hosting

Follow [Webcast process in handbook](/handbook/marketing/virtual-events/webcasts/#partner-webcasts)

## General Checklist
- [ ] Make sure partner is adhering to the GitLab Branding guides and logo usage
- [ ] Provide opt in language to partner
- [ ] Review and approve all email and landing page copy
- [ ] Consider creating separate invite htmls with UTMs for each partner and GitLab to send to GitLab and the partner sales orgs to help drive attendance.  Separate UTMs will help us track registrations coming from each sales org
* [ ] Add to /events/ page - [Handbook Instructions](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents)
* [ ] [Speaker request issue](https://gitlab.com/gitlab-com/marketing/strategic-marketing/product-marketing/-/issues/new?issuable_template=pmm-speaker-request) (optional)
* [ ] [Organic social promotion issue](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues/new?issuable_template=social-gtm-organic) (optional)
* [ ] [Paid digital promotion issue](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/issues/new?issuable_template=mktg-promotion-template) (optional)

## If partner is sharing leads
- [ ] GitLab and partner to determine first touch and follow up
   - Best practice: joint lead follow up: Partner does 3 touches within 2 weeks following the event (a touch is a voicemail and email).  Qualified leads with immediate opportunity will be deal reg as they come in.  After 14 day follow up, full list with follow up notes will be provided to GitLab for list upload and further nurturing by GL
- [ ] [Program tracking issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-program-tracking)
- [ ] [List clean & upload request issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=event-clean-upload-list). (In lead upload, record the opt-in T&Cs used in the upload Issue and in the upload template, set Opt-in = True.
* [ ] [Add to nurture issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-add-nurture)

## If receiving recording and have distribution of webinar
* [ ] [Pathfactory upload issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-upload) (only open if we receive and can use recording, webinar DRI responsible for upload)
* [ ] [Pathfactory track issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-track) (only open if we receive and can use recording)

## Post event tasks
- [ ] [Award swag credits](https://contributors.gitlab.com/rewards) to the [Contributor Success store](https://rewards.gitlab.com/) for speakers
- [ ] [Request add to Resources](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-resource-page-addition)

#### Opt in language applicable to all scenarios below and all geographies
_By registering for this GitLab and [partner name] event, you agree that GitLab and [Partner name] may email you about their products, services and events. You may opt-out at any time by unsubscribing in future emails or visiting the relevant company's preference center._

In order to mark leads as Opt-in = TRUE, a record of the terms and conditions the leads agreed to upon having their data collected must be recorded. Check the terms of service wording has been recorded in the upload issue before opting in leads to receive marketing communications. No ToS, no Opt-in. Period. To find the appropriate language, refer to Marketing Rules and Consent Language
If there are any records who have opted out of contact for any reason, define that on the spreadsheet by selecting Opt-in = FALSE
Leave Opt-In empty if no other option is available

/label ~"mktg-status::wip" ~"Webinar - Channel Partner"  ~"Webinar"

```

## スポンサードウェビナー {#sponsored-webinars}

<!-- DO NOT CHANGE THIS ANCHOR -->

*スポンサードウェブキャストは外部ベンダープラットフォーム（DevOps.com など）で主催されます。これは有料の戦術です。ベンダーが登録の促進、自身のプラットフォーム上でのウェビナーのモデレーションとホスト、イベント後のリードリスト提供を担当します。スポンサードウェビナーの目的は新規リードであり、有料活動のため既存データベースへのプロモーションは行いません。*

### GitLab でエピックと Issue を整理するプロセス {#sponsored-webinar-project-management}

<!-- DO NOT CHANGE THIS ANCHOR -->

プロジェクトオーナーは、GitLab でエピックと関連 Issue を作成するために、以下の手順に従う責任があります。

1. プロジェクトオーナー（FMM）がメインの戦術 Issue を作成する
1. プロジェクトオーナー（FMC）がすべての関連 Issue を収容するエピックを作成する（下記のコード）
1. プロジェクトオーナー（FMC）が必要な関連 Issue を作成する（下記のエピックコード内のショートカットリンク）
1. プロジェクトオーナー（FMC）がすべての関連 Issue を新しく作成したエピック、および元の Issue に関連付ける
1. プロジェクトオーナー（FMC）が各 Issue に対して、各タスクのチーム間で合意した SLA に基づいて期日を設定し、各 Issue の正確なオーナーシップを確認する

*注: 戦術の日付が変更される場合、プロジェクトオーナーはすべての関連 Issue の期日を新しい日付に合わせて変更し、関係するチームメンバーに通知する責任があります。*

### エピックコードと Issue テンプレート {#sponsored-webinar-epic-code}

<!-- DO NOT CHANGE THIS ANCHOR -->

```markdown
<!-- Name this epic: Sponsored Webcast - [Vendor] - [3-letter Month] [Date], [Year] -->

## [Main Issue >>]()

## [Copy document >>]() - template: https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit

## :notepad_spiral: Key Details
* **Project Owner:**
* **FMC/FMS:**
* **Type:** Sponsored Webcast
* **Official Name:**
* **Registration URL:**
* **Persona (choose one):** `Practitioner, Manager, or Executive`
* **Use Case (choose primary):** `CI, VC&C, DevSecOps, Other` (FY21-22 focus on CI and VC&C)
* **Sales Segment (choose primary):** `Large, Mid-Market, or SMB`
* **Sales Region (choose one):** `AMER, EMEA, APAC`
* **Sales Territory (optional, if specific):**
* **Goal:** `Please be specific on the metric this is meant to impact.`
* **Budget:**
* **Campaign Tag:**
* **Launch Date:**  [YYYY-MM-DD]
* [ ] [main salesforce program]()
* [ ] [main marketo campaign]()
* [ ] Campaign UTM - Project Owner/FM to fill in (Format: campaign tag - change to all lowercase, no spaces, hyphens, underscores, or special characters)

## User Experience
[Project Owner to provide a description of the user journey - from communication plan, to what the user experiences upon receipt, plus triggers on our end like confirmation email and how GitLab fulfils with the vendor, up until receipt by the user and answering whether or not we get confirmation that they received it... what is the anticipated journey after that?]

## Additional description and notes about the tactic
[Project Owner/FMM add whatever additional notes are relevant here]

## Issue creation
If you are Field Marketer, see next section below for the issues you need to create.

* [ ] Program Tracking
  - [If tactic owner is Campaigns Team](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-program-tracking)
* [ ] [Write copy issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=write-copy)
* [ ] [Follow up email issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-email-followup)
* [ ] [List clean and upload issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list)
* [ ] [Add to nurture issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-add-nurture)
* [ ] [Pathfactory Upload issue created](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-upload) (*optional*)

## Issue Creation for Field Marketing
Please delete the generic issue creation section above if you are a FMC creating this.
* [ ] [Program Tracking](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=program-tracking) - FMC creates, assigns to FMC
* [ ] [Write copy issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=write-copy) - FMC creates, assigns to FMM
* [ ] [Follow Up Email issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_email_followup) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [Add to Nurture](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_add_nurture) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [List Clean and Upload](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list) - FMC creates, assigns to FMM and MOps
* [ ] [Optional: FM Pathfactory Asset Upload and Track Creation Issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=Pathfactory_Request_Template) - FMM creates, assigns to FMC

Add the team label to indicate the team running the event (Example: Field Marketing, Corporate Marketing)

/label ~"mktg-status::wip" ~"Webcast - Sponsored"
```

☝️ *キャンペーン UTM フォーマットに関する注意: Bizible から SFDC への UTM の受け渡しで過去に問題があったため（これがアトリビューションレポートの基礎です）、特殊文字の使用は避けています。*

## バーチャルカンファレンス {#virtual-conferences}

<!-- DO NOT CHANGE THIS ANCHOR -->

*バーチャルカンファレンスは外部ベンダープラットフォームで主催されます。これは有料の戦術です。GitLab はスポンサーシップ料金を支払って、バーチャルブースと、しばしばスピーキングセッションやパネル登壇を受けます。スポンサードバーチャルカンファレンスの目的は新規リードであり、有料活動のため既存データベースへのプロモーションは行いません。*

このセクションは Corporate Events が最新状態を維持する責任を負います。

**バーチャルブースの存在が、バーチャルイベントがバーチャルカンファレンスとみなされるための要件です。** [クローンされる Marketo プログラムテンプレートへのリンク。](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME7624A1)

### GitLab でエピックと Issue を整理するプロセス {#virtual-conference-project-management}

<!-- DO NOT CHANGE THIS ANCHOR -->

プロジェクトオーナーは、GitLab でエピックと関連 Issue を作成するために、以下の手順に従う責任があります。

1. プロジェクトオーナー（Corp/FMM）がメインの戦術 Issue を作成する
1. プロジェクトオーナー（Corp/FMC）がすべての関連 Issue を収容するエピックを作成する（下記のコード）
1. プロジェクトオーナー（Corp/FMC）が必要な関連 Issue を作成する（下記のエピックコード内のショートカットリンク）
1. プロジェクトオーナー（Corp/FMC）がすべての関連 Issue を新しく作成したエピック、および元の Issue に関連付ける
1. プロジェクトオーナー（Corp/FMC）が各 Issue に対して、各タスクのチーム間で合意した SLA に基づいて期日を設定し、各 Issue の正確なオーナーシップを確認する

*注: 戦術の日付が変更される場合、プロジェクトオーナーはすべての関連 Issue の期日を新しい日付に合わせて変更し、関係するチームメンバーに通知する責任があります。*

### エピックコードと Issue テンプレート {#virtual-conference-epic-code}

<!-- DO NOT CHANGE THIS ANCHOR -->

```markdown
<!-- Name this epic: Sponsored Virtual Conference - [Vendor] - [3-letter Month] [Date], [Year] -->

## [Main Issue >>]()

## [Copy document >>]() - template: https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit

## :notepad_spiral: Key Details
* **Corp Events/Field Marketing Manager/Requester:**
* **Field Marketing Coordinator:**
* **Type:** Conference
* **Official Name:**
* **Date(s):**  [YYYY-MM-DD]
* **Registration URL:**
* **Sales Segment (choose primary):** `Large, Mid-Market, or SMB`
* **Sales Region (choose one):** `AMER, EMEA, APAC`
* **Sales Territory (optional, if specific):**
* **Goal:** `Please be specific on the KPI this is meant to impact.`
* **Budget:**
* **Campaign Tag:**
* [ ] [main salesforce program]()
* [ ] [main marketo campaign]()
* [ ] Campaign UTM - Project Owner to fill in (Format: campaign tag - change to all lowercase, no spaces, hyphens, underscores, or special characters)

## User Experience
[Project owner to provide a description of the user journey - from communication plan, to what the user experiences upon receipt, plus triggers on our end like confirmation email and how GitLab fulfils with the vendor, up until receipt by the user and answering whether or not we get confirmation that they received it... what is the anticipated journey after that?]

## Additional description and notes about the tactic
[Project owner add whatever additional notes are relevant here]

## Issue creation
If you are a Field Marketer, see below for issue creation.
* [ ] Program Tracking
  - [If tactic owner is Campaigns Team](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-program-tracking)
* [ ] [Write copy issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=write-copy)
* [ ] [Follow up email issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-email-followup)
* [ ] [List clean and upload issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list)
* [ ] [Add to nurture issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-add-nurture)
* [ ] [Pathfactory Upload issue created](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-upload) (*optional*)

## Issue Creation for Field Marketing
Please delete the generic issue creation section above if you are a FMC creating this.
* [ ] [Program Tracking](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=program-tracking) - FMC creates, assigns to FMC
* [ ] [Write copy issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=write-copy) - FMC creates, assigns to FMM
* [ ] [Follow Up Email issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_email_followup) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [Add to Nurture](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_add_nurture) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [List Clean and Upload](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list) - FMC creates, assigns to FMM and MOps
* [ ] [Optional: FM Pathfactory Asset Upload and Track Creation Issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=Pathfactory_Request_Template) - FMM creates, assigns to FMC


<details>
<summary>Corporate Marketing Activation: Expand below for quick links to issues to be created and linked to the epic.</summary>

* [ ] Activate*: [Organic Social Issue](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/issues/new?issuable_template=social-general-request) - Corp creates, assignment in issue
* [ ] Activate*: [Blog Issue](https://gitlab.com/gitlab-com/marketing/growth-marketing/global-content/content-marketing/issues/new#?issuable_template=blog-post-pitch) - Corp creates, assignment in issue
* [ ] Activate*: [PR Announcement Issue](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/issues/new?issuable_template=announcement) - Corp creates, assignment in issue

</details>

**Everything with an * is optional: create the optional issues only if we plan to use those outbound activation channels*

Add the team label to indicate the team running the event (Example: Field Marketing, Corporate Marketing)

/label ~"mktg-status::wip" ~"Virtual Conference"
```

### イベント要件/ベストプラクティス

**大規模カンファレンスツールが最適なケース:**

* 複数のブレイクアウトグループ/ステージが必要
* エキスポホールが必要
* Zoom コール以上のネットワーキングオプションが必要
* 500 名以上の参加者がいる
* イベントが 3 時間を超える
* イベントに複数のブレイクアウトまたはトラックがある
* 参加者情報をキャプチャする必要がある
**注:** ツールに含まれる多くの要素は柔軟で、複数の目的に使用できます。アカウント管理者と選択肢について相談してください。

### プラットフォームと帯域幅の制約

* 1 日（24 時間以内）に 1 回のみホスト可能
* イベントを実行するために少なくとも 2 名のフルタイムのサポートスタッフが必要
* 3 時間以上のイベントにのみ推奨（セットアップの複雑さのため）
* 500 名以上のグループをターゲットとするイベント、または OKR と整合するイニシアティブに推奨
* このイベントは複数の人とモデレーターで実行するのが最適
* イベントの予算が 5,000 ドル以上の予算支出があること。ライブイベント時間とドライランの時間のすべてに対するサポート予算が必要

### 手順

**ステップ 1: digital marketing programs プロジェクトで主催バーチャルカンファレンスリクエスト Issue を開始する。**

* [`Event_Request.md` Issue テンプレート](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/blob/master/.gitlab/issue_templates/Event-Request.md) を使用してください
* イベントの目標 LIVE 日を期日として入力してください
* Issue コメントで Campaign Manager DRI に @ メンションして、リクエスト日が実現可能であることを確認します
* Campaign Manager が、事前にスケジュールされた重複するバーチャルイベントがないか [バーチャルイベントカレンダー](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV8xcXZlNmc4MWRwOTFyOWhldnRrZmQ5cjA5OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t) で確認します
* リクエスト日が実現可能で、スピーカーが確保され、アブストラクトが確定している場合、DRI はステータスラベルを `status:plan` から `status:wip` に変更し、該当する `FY..` ラベルを追加します（[ウェブキャスト Issue ボード](https://gitlab.com/groups/gitlab-com/marketing/-/boards/922606?&label_name[]=Webcast) に表示されるように）
* Issue に詳細を必ず完了させる必要があります: タイムライン、予算、オーディエンス目標、必要な機能など

**ステップ 2: DRI は主催バーチャルカンファレンス EPIC を作成する必要がある**

* このステップは、Campaign Manager と日付を確認してからのみ実施してください。必要に応じてステークホルダーとキックオフコールを行います。
* Issue に「status:wip」が付与され、必要な要素が文書化され、スピーカーとウェブキャスト日が確保されたら、イベントプロジェクトは正式に始動です。DRI はカンファレンスのエピックを作成し、対応する Campaign Manager にタグ付けします。
* 命名規則: [Conference Title] - [3-letter Month] [Date], [Year]
* DRI が以下のコードをエピックにコピー＆ペーストします

* このステップは、Campaign Manager と日付を確認し、追加の Hopin 管理者がスタッフとしている場合にのみ実施してください。必要に応じてステークホルダーとキックオフコールを行います。
* Issue に「status:wip」が付与され、必要な要素が文書化され、スピーカーとウェブキャスト日が確保されたら、イベントプロジェクトは正式に始動です。DRI はカンファレンスのエピックを作成し、対応する Campaign Manager にタグ付けします。
* 命名規則: [Conference Title] - [3-letter Month] [Date], [Year]
* DRI が以下のコードをエピックにコピー＆ペーストします

```markdown
## [Main Issue >>]()

## [Campaign Planning Sheet>>]() (copy and create new version from here- https://docs.google.com/spreadsheets/d/1VzLTQW3lYDGcVdwnUq81I_gPGUFl_D_jXjZGhFuFhbU/edit#gid=739236632)

## [Landing Page >>]() - `to be added when live`

## [Copy for landing page and emails >>]() - template: https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit

## Event Details
* `place details from the event issue here`
* **Persona (choose one):** `Practitioner, Manager, or Executive`
* **Use Case (choose primary):** `CI, VC&C, DevSecOps, Other` (FY21-22 focus on CI and VC&C)
* **Sales Segment (choose primary):** `Large, Mid-Market, or SMB`
* **Sales Region (choose one):** `AMER, EMEA, APAC`
* **Sales Territory (optional, if specific):**
* **Goal:** `Please be specific on the metric this is meant to impact.`
* [ ] [main salesforce campaign]()
* [ ] [main marketo program]()

## Issue creation (for event DRI to complete)

* [ ] Secure presenters and dry runs issue created - DRI
* [ ] Landing page issue created - DRI
* [ ] Optional: New design assets issue created for the design team - DRI
* [ ] Invitation and reminder issue created - DRI
* [ ] Organic social issue created for social media manager - DRI
* [ ] Paid Ads issue created for DMP - DRI
* [ ] PathFactory request issue created - DRI
* [ ] Follow up email issue created - DRI
* [ ] Add to nurture stream issue created - DRI
* [ ] On-demand switch issue created - DRI

/label ~"Webcast - GitLab Hosted" ~"Virtual Event" ~"mktg-status::wip"
```

**DRI は、[バーチャルカンファレンス Campaign Planning Sheet にリンクされた](https://docs.google.com/spreadsheets/d/1VzLTQW3lYDGcVdwnUq81I_gPGUFl_D_jXjZGhFuFhbU/edit?usp=sharing) 必要なキャンペーンチームリクエストサポート Issue を作成し、エピックに追加します。**

### プロジェクト計画

DRI は直ちに以下を実施します:

1. 上記で概説した必要なエピックとキャンペーンチームリクエスト Issue を作成する。
2. Campaign Manager は、Virtual Events Google カレンダーに対してそこからウェブキャスト実行チームに Gcal 招待を送信することで、ウェブキャストのドライランとライブ日を追加することを確認する。***注: これは、共有ライセンスとサポート要件によって希望日時に重複するバーチャルイベントがスケジュールされて競合が発生しないようにする重要なステップです。***
3. 1 名以上のスピーカーが外部の場合は、外部スピーカーとキックオフコールを設定する。タイムラインと期日を設定し、スライドデッキテンプレートをスピーカーと共有する。スピーカーのカレンダーにドライランを追加する。
4. [この Conference GANTT テンプレート](https://docs.google.com/spreadsheets/d/1VTrWNX9qfY99b2TnrX93P39aXiRoNnChB6tduTvmysA/edit#gid=1899924336) をクローンして記入する。

各アクションアイテムの期日と DRI は、[Conference Planning Template](https://docs.google.com/spreadsheets/d/1VzLTQW3lYDGcVdwnUq81I_gPGUFl_D_jXjZGhFuFhbU/edit?usp=sharing) に概説されています。

### プロモーションのベストプラクティス

1. 少なくとも 30 営業日のプロモーション期間を確保する。
2. 招待メールを 2 週間前、1 週間前、必要に応じてイベント 2 時間前に送信する。サンプルメールはここで参照できます。
3. 最適な結果を得るためには、プロモーションメールは火曜日、水曜日、または木曜日にのみ送信する。
4. 登録者にイベント前日とイベントの 1 時間前にリマインダーメールを送信する。
5. 推奨: バーチャルイベントは火曜日、水曜日、または木曜日に開催する。スケジューリングについては下記の注を参照。
6. イベント中に、追加の関連リソースへのリンクを投稿する。
7. プレゼンテーションの最後に「お問い合わせ」情報と明確な CTA を含める。
8. イベントからのビデオ録画は、イベント終了後 24 時間以内に YouTube にアップロードすること。
9. 参加した・しないにかかわらず、全登録者に対してイベント後 72 時間以内に録画を送信する。
10. その他のバーチャルイベントベストプラクティスは [こちら](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues/2105) を参照してください。

#### スピーカーへのヒント

ビデオカンファレンスの準備と発表の良い体験を確実にするための基本的なヒントをいくつか紹介します。[スピーカー準備のベストプラクティス](/handbook/marketing/virtual-events/best-practices#speakers) を参照してください。

##### スピーカーとしてコミットする前に

時間的コミットメントや、私たちの期待が具体的にどういうものかについて、質問があれば何でも聞いてください。あなたの空き時間、対応力、興味について迷いがあるなら、マネージャーと話し合ってください。お互いに同じ認識を持っていることを確認してください。これがあなたにとって意味のある専門的成長の機会となることを望んでおり、気乗りしないままの私たちへの好意ではありません - そう感じるなら、私たち全員が最善を尽くせなくなります。私たちは正直であり続けますので、あなたも同じようにしてください。

##### ドライランの前に

プレゼンテーションスペースを選択しセットアップしてください。Wi-Fi が良い場所を選び、音声品質向上のため外部マイクのセットアップを推奨します（オプション）。自宅から発表する場合は、配偶者/ルームメイトに時間/日付を知らせ、必要に応じて家を出てもらうよう依頼してください。あなたの好みと公衆スピーキングの快適レベルに応じて、スクリプトを何度かリハーサルしてください。

##### プレゼンテーションの前に

前夜は十分な睡眠を取り、プレゼンテーションが朝の場合は、ノートを少なくとも 1 度確認できる程度に早く起きてください。[Positioning FAQ](/handbook/marketing/positioning-faq/) を確認するか、Q&A で GitLab が競合と比べてどうかを聞かれる場合に備えてページを手元に置いておいてください。

### ロジスティクスのセットアップ

#### トーク/イベントをカレンダーに追加する

[バーチャルイベントカレンダー](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV8xcXZlNmc4MWRwOTFyOWhldnRrZmQ5cjA5OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t) は、Marketing Campaigns 主催のウェブキャストとそのドライランをすべて記録するために使用されます。**ウェブキャストカレンダーの目的は、Campaign Manager が重複するバーチャルイベントをスケジュールしないようにすることです。**

**ウェブキャストカレンダーへの追加 DRI: ウェブキャストを実行する Campaign Manager。**

##### 計画中の主催バーチャルイベント

1. バーチャルカンファレンスリクエスト用に Issue が作成されたらすぐに、イベントを主催する予定の日にイベントを作成して、計画中のイベントをバーチャルイベントカレンダーに追加します。まだ計画中のイベントには、命名規則 `[Hold WC Hosted] Webcast title`（例: `[Hold VC Hosted] Mastering CI`）を使用し、終日イベントとして作成します（時間スロットは選択しない）。カレンダーの説明に Issue へのリンクも必ず含めてください。
2. 計画中のウェブキャストをバーチャルカンファレンス計画 Issue にも追加してください。Issue に追加する際は、計画中であることを示すために、ウェブキャスト名の前に :asterisk: 絵文字を使用してください。

##### 確定したバーチャル主催カンファレンス

1. カンファレンスの日時が確定したら、カレンダーイベントにアクセスし、イベントタイトルから `Hold` を削除します `[VC Hosted] Webcast title`（例: `[VC Hosted] Mastering CI`）。カレンダーイベントで時間を指定し、カレンダーの説明にある Issue リンクをエピックリンクに置き換えます。*注: 効率性の観点から、複数のカレンダー招待を作成しなくて済むよう、すべてのプレゼンター（GitLab チームメンバーと外部スピーカー）、エピックまたは Issue（ある場合）、イベント招待情報をカレンダー招待に必ず追加してください。*
2. 計画 Issue でも、:asterisk: 絵文字を :white_check_mark: 絵文字に置き換えてウェブキャストが確定したことを更新してください。
3. ドライランもバーチャルイベントカレンダーに必ず追加してください。ドライランイベントを作成する際は、命名規則 `[DR WC Hosted] Event title`（例: `[DR WC Hosted] Mastering CI`）を使用し、カレンダーイベントで日時を指定してください。

### イベント登録ページの作成

* これは使用するツールによって異なります。最適なプロセスを決定するために Corporate Events と連携してください。

#### /events ページにカンファレンスを追加する

* /events ページにウェブキャストを追加するには、この [ステップバイステップガイド](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents) に従ってください。

#### Marketo と SFDC でイベントプログラムをセットアップする

カンファレンス固有に更新が必要です:

1. YYYYMMDD_WebcastTopic_Region（単一時間スロット）テンプレートをクローンして、Marketo でウェブキャストプログラムを作成する。

    * `A campaign folder` にクローンを選択する。
    * ウェブキャストのタイトルを以下の形式で付ける: YYYYMMDD_{Webcast Title}_[Region - only if applicable]。例: 20170418_MovingToGit。
    * `GitLab Hosted` フォルダに保存する。
    * Salesforce campaign sync をクリックし、create new を選択して SFDC でキャンペーンを作成する。ランディングページ URL と説明にエピックへのリンクも必ず入れること。

2. Marketo で smart campaigns を有効にする。

    * `Attended` キャンペーンを有効化する。
    * `Registration from Landing Page` smart campaign 内で、`Fills out Form` トリガーに、https なしのウェブキャストランディングページ URL（例: about.gitlab.com/webcast/securing-serverless/）を追加してから、キャンペーンを有効化する。
    * `Registration From Zoom` キャンペーンを有効化する。
    * `Interesting Moments` キャンペーンを有効化する。

3. salesforce のキャンペーンに移動する。

    * キャンペーンオーナーを自分の名前に変更する。
    * ステータスを `in progress` に変更する。
    * Bizible touchpoint フィールドを `Include only "Responded" Campaign Members` に編集する。

4. **ステップ 3 で作業していた Zoom セットアップウィンドウに戻る。** Integration タブをクリックして Zoom 内で Marketo 統合をセットアップします。

    * Generate Leads in Marketo セクションの横の Edit をクリックする。
    * Send registration information to a Smart Campaign をチェックし、このウェブキャスト用に marketo でセットアップした `Registration From Zoom` smart campaign を選択する。
    * Send attendee information to a Smart Campaign をチェックし、このウェブキャスト用に marketo でセットアップした `Zoom Attended` smart campaign を選択する。
    * `Gather other information to Marketo (optional)` セクションで、ZoomWebinarOtherInfo custom object を選択し、以下のボックスをチェックして、対応する Marketo Custom Object Fields を選択する:
      * Webinar ID
      * Webinar Topic
      * Q&A
      * Poll

#### セットアップをテストする

1. LIVE ランディングページで GitLab メールを使用してテストリードを送信し、登録が Marketo プログラムで適切に追跡され、zoom から確認メールが届くことを確認します。

#### フォローアップメールの送信

1. `No shows` smart campaign に移動し、run once をクリックして no shows が正しいステータスにディスポジションされるようにします。現在、zoom と Marketo の間に自動的に no shows をディスポジションする統合がないため、この smart campaign を実行するまで `Registered` ステータスのままになります。
2. メール `Outbound -attendees` とメール `Outbound -no shows` を、ウェブキャストに関連するコピーの内容で更新する。
3. Follow-up - Attendees と Follow up - No Shows メールプログラムで、`{{my.CTA..}}` トークンを正しいオファーを指すように更新し、ハイパーリンクで使用する。
4. コピーを承認し、リクエスト元とプレゼンター（リクエスト元と異なる場合）にサンプルを送信する。
5. サンプルコピーが承認されたら、follow-up no show と follow-up attended メールプログラム内でメール送信をスケジュールする。

#### イベントコンテンツをオンデマンドゲート資産に変換する

1. 録画をメイン GitLab チャンネルにアップロードし、タイトルにイベントタイトルを入力し、説明にウェブキャストの内容に関する短い段落を入力します。動画は `Unlisted` に設定し、URL を知っている人だけが動画を見つけられるようにします。
2. 録画がアップロードされたら、右側のビデオリンクをコピーします。
3. **PathFactory にログインする。** [こちら](/handbook/marketing/marketing-operations/pathfactory/#how-to-upload-content) で説明されている手順に従って、コピーした YouTube リンクを Pathfactory に新しいコンテンツとして追加します。
4. **Marketo にログインする。** この [プログラムテンプレート](https://app-ab13.marketo.com/#PG3875A1) をクローンして、Marketo で [listening campaign](/handbook/marketing/marketing-operations/pathfactory/#listening-campaigns) を作成します。プログラムにネストされた `PF - Listening (Triggered)` smart campaign で、`PathFactory Content Journey` フィルタを修正して、`[your assets custom url slug]` の形式でアセットの Pathfactory custom URL スラッグを反映させます。smart campaign を有効化し、リスニングキャンペーン用に Salesforce campaign sync をセットアップします。
5. **Salesforce にログインする。** リスニングキャンペーン用の後続 SFDC キャンペーンを見つけます。後続のウェブキャストキャンペーンを `Parent Campaign` フィールドに追加します。`Enable Bizible Touchpoints` フィールドを `Include only "Responded" Campaign Members` に設定します。
6. **戻る: www-gitlab-com/data/webcast.yml.**
7. Edit をクリックして、ランディングページの `url` コードスニペットの下に、以下のコードスニペット `youtube_url: ''` を追加します。
8. `form:` を `2076` に変更します。
9. `success_message:` を `Thank you for downloading. <a id="destination-url" href="YourWebcastPathFactoryLink&lb_email=">Click here</a> to view the on demand webcast. We will also email you a link to the webcast.` に変更します。
10. 構文 `Add PathFactory link for [webcast name] landing page` を使用してマージリクエストに名前を付けるためのコミットメッセージを追加します（例: `Add PathFactory link for Debunking Serverless security myths webcast landing page`）。
11. ターゲットブランチの名前を作成します - 絶対に master のままにしないでください（例: `20191130-Debunking-WC-LP`）。
12. 次の画面（New Merge Request）で、タイトルの先頭に `WIP:` を追加し、簡単な説明を追加します（`Add PathFactory link to LP for [webcast name] will suffice`）。
13. マージアクセスがある場合は、マージリクエストを自分にアサインします。マージアクセスがない場合は、マージリクエストを Jackie Gragnola または Agnes Oetama にアサインします。下にスクロールして、`Delete source branch when merge request is accepted` のボックスをチェックします。
14. Submit Merge Request をクリックします。
15. これでマージリクエストを作成しました。
16. **Marketo にログインする。** ウェブキャストプログラムに移動し、`{{my.ondemandUrl}}` トークンをウェブキャスト PathFactory リンクで更新します。
17. ウェブキャストプログラム内の assets フォルダに移動し、`On-demand Autoresponder` メールをウェブキャストに関連するコピーで更新します。
18. ウェブキャストプログラム内の `Viewed On Demand` Smart campaign に移動します。
19. https なしのウェブキャストランディングページ URL（例: `about.gitlab.com/webcast/securing-serverless/`）でウェブページリンクを修正してから、`Viewed On Demand` smart campaign を有効化します。
20. ウェブキャストプログラム内の `Attended`、`Registration from Landing Page`、`Registration From Zoom` smart campaigns を無効化します。
21. **MR に戻る。** パイプラインが通過し、レビューアプリでもすべて問題なければ、WIP を削除してマージします（マージアクセスがある場合）。マージアクセスがない場合は、MR コメントで @jgragnola または @aoetama に ping を送ってマージを依頼します。
22. ウェブキャストを /resources ページに追加するために、[こちらで概説されている](/handbook/marketing/demand-generation/campaigns/content-in-campaigns/) 手順に従ってください。

## エグゼクティブラウンドテーブル {#executive-roundtables}

<!-- DO NOT CHANGE THIS ANCHOR -->

*エグゼクティブラウンドテーブルは、ハイレベル CxO 参加者の集まりで、モデレーター/ホスト、GitLab のエキスパート、デリゲートとのオープンディスカッションとして実施されます。通常はプレゼンテーションはなく、誰でも発言に加われるディスカッションが行われます。ホストは議論をリードするための質問を準備し、部屋を回ってデリゲートに質問して答えてもらいます。プロジェクトオーナー（field marketing）はエピックと関連 Issue の作成、タイムラインと DRI の最新状態維持を担当します。Marketing Ops はリストをデータベースにアップロードする責任があります。*

### GitLab でエピックと Issue を整理するプロセス {#executive-roundtable-project-management}

<!-- DO NOT CHANGE THIS ANCHOR -->

プロジェクトオーナーは、GitLab でエピックと関連 Issue を作成するために、以下の手順に従う責任があります。

1. プロジェクトオーナー（FMM）がメインの戦術 Issue を作成する
1. プロジェクトオーナー（FMC）がすべての関連 Issue を収容するエピックを作成する（下記のコード）
1. プロジェクトオーナー（FMC）が必要な関連 Issue を作成する（下記のエピックコード内のショートカットリンク）
1. プロジェクトオーナー（FMC）がすべての関連 Issue を新しく作成したエピック、および元の Issue に関連付ける
1. プロジェクトオーナー（FMC）が各 Issue に対して、各タスクのチーム間で合意した SLA に基づいて期日を設定し、各 Issue の正確なオーナーシップを確認する

*注: 戦術の日付が変更される場合、プロジェクトオーナーはすべての関連 Issue の期日を新しい日付に合わせて変更し、関係するチームメンバーに通知する責任があります。*

### エピックコードと Issue テンプレート {#executive-roundtable-epic-code}

<!-- DO NOT CHANGE THIS ANCHOR -->

```markdown
<!-- Name this epic: Executive Roundtable - [Vendor] - [3-letter Month] [Date], [Year] -->

## [Main Issue >>]()

## [Copy document >>]() - template: https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit

## :notepad_spiral: Key Details
* **Project Owner/Field Marketing Manager:**
* **FMC/FMS:**
* **Type:** Executive Roundtable
* **Official Name:**
* **Date(s):**
* **Registration URL:**
* **Sales Segment (choose primary):** `Large, Mid-Market, or SMB`
* **Sales Region (choose one):** `AMER, EMEA, APAC`
* **Sales Territory (optional, if specific):**
* **Goal:** `Please be specific on the metric this is meant to impact.`
* **Budget:**
* **Campaign Tag:**
* **Launch Date:**  [YYYY-MM-DD]
* [ ] [main salesforce program]()
* [ ] [main marketo campaign]()
* [ ] Campaign UTM - Project Owner/FM to fill in (Format: campaign tag - change to all lowercase, no spaces, hyphens, underscores, or special characters)

## User Experience
[Project Owner/FMM to provide a description of the user journey - from communication plan, to what the user experiences upon reciept, plus triggers on our end like confirmation email and how GitLab fulfils with the vendor, up until receipt by the user and answering whether or not we get confirmation that they received it... what is the anticipated journey after that?]

## Additional description and notes about the tactic
[Project Owner/FMM add whatever additional notes are relevant here]

## Issue creation
* [ ] [Program Tracking - FM](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=program-tracking) - FMC creates, assigns to FMC
* [ ] [Write copy issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=write-copy) - FMC creates, assigns to FMM
* [ ] [Sales Nominated Issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_sales_nominated) - FMC creates, assigns to the FMM (issue will be triaged)
* [ ] [Email Invitation Issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_email_invite) - FMC creates one for each invitation requested, assigns to FMM (issue will be triaged)
* [ ] [Follow Up Email issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_email_followup) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [Add to Nurture](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_add_nurture) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [List Clean and Upload](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list) - FMC creates, assigns to FMM and MOps
* [ ] [Optional: FM Pathfactory Asset Upload and Track Creation Issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=Pathfactory_Request_Template) - FMM creates, assigns to FMC

/label ~"mktg-status::wip" ~"Field Marketing" ~"Executive Roundtable"
```

## ベンダーアレンジドミーティング {#vendor-arranged-meetings}

<!-- DO NOT CHANGE THIS ANCHOR -->

*ベンダーアレンジドミーティングは、サードパーティベンダーが見込み顧客または顧客アカウントとの 1 対 1 のミーティングを設定するキャンペーンに使用されます。理想的には、直接ミーティング設定が困難なターゲットアカウントと私たちのチームをつなげます。GitLab のチームメンバーが内部で設定したミーティングは含まれません。例として、GitLab が関心のある見込み顧客とのミーティングをベンダーがアレンジする「スピードデート」スタイルのミーティング設定があります。プロジェクトオーナー（一般的に field marketing）はエピックと関連 Issue の作成、タイムラインと DRI の最新状態維持を担当します。Marketing Ops はリストをデータベースにアップロードする責任があります。*

### GitLab でエピックと Issue を整理するプロセス {#vendor-arranged-meeting-project-management}

<!-- DO NOT CHANGE THIS ANCHOR -->

プロジェクトオーナーは、GitLab でエピックと関連 Issue を作成するために、以下の手順に従う責任があります。

1. プロジェクトオーナー（FMM）がメインの戦術 Issue を作成する
1. プロジェクトオーナー（FMC）がすべての関連 Issue を収容するエピックを作成する（下記のコード）
1. プロジェクトオーナー（FMC）が必要な関連 Issue を作成する（下記のエピックコード内のショートカットリンク）
1. プロジェクトオーナー（FMC）がすべての関連 Issue を新しく作成したエピック、および元の Issue に関連付ける
1. プロジェクトオーナー（FMC）が各 Issue に対して、各タスクのチーム間で合意した SLA に基づいて期日を設定し、各 Issue の正確なオーナーシップを確認する

*注: 戦術の日付が変更される場合、プロジェクトオーナーはすべての関連 Issue の期日を新しい日付に合わせて変更し、関係するチームメンバーに通知する責任があります。*

### エピックコードと Issue テンプレート {#vendor-arranged-meeting-epic-code}

<!-- DO NOT CHANGE THIS ANCHOR -->

```markdown
<!-- Name this epic: Vendor Arranged Meeting - [Vendor] - [3-letter Month] [Date], [Year] -->

## [Main Issue >>]()

## [Copy document >>]() - template: https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit

## :notepad_spiral: Key Details
* **Project Owner:**
* **FMC/FMS:**
* **Type:** Vendor Arranged Meetings
* **Official Name:**
* **Registration URL:**
* **Sales Segment (choose primary):** `Large, Mid-Market, or SMB`
* **Sales Region (choose one):** `AMER, EMEA, APAC`
* **Sales Territory (optional, if specific):**
* **Goal:** `Please be specific on the metric this is meant to impact.`
* **Budget:**
* **Campaign Tag:**
* **Launch Date:**  [YYYY-MM-DD]
* [ ] [main salesforce program]()
* [ ] [main marketo campaign]()
* [ ] Campaign UTM - Project Owner/FM to fill in (Format: campaign tag - change to all lowercase, no spaces, hyphens, underscores, or special characters)

## User Experience
[Project Owner/FMM to provide a description of the user journey - from communication plan, to what the user experiences upon reciept, plus triggers on our end like confirmation email and how GitLab fulfils with the vendor, up until receipt by the user and answering whether or not we get confirmation that they received it... what is the anticipated journey after that?]

## Additional description and notes about the tactic
[Project Owner/FMM add whatever additional notes are relevant here]

## Issue creation

* [ ] [Program Tracking - FM](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=program-tracking) - FMC creates, assigns to FMC
* [ ] [Write copy issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=write-copy) - FMC creates, assigns to FMM
* [ ] [Follow Up Email issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_email_followup) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [Add to Nurture](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=request_add_nurture) - FMC creates, assigns to FMM (issue will be triaged)
* [ ] [List Clean and Upload](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list) - FMC creates, assigns to FMM and MOps
* [ ] [Optional: FM Pathfactory Asset Upload and Track Creation Issue](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=Pathfactory_Request_Template) - FMM creates, assigns to FMC

**Optional: create the optional issues only if we have rights to recording and content is worth gating*

/label ~"mktg-status::wip" ~"Field Marketing" ~"Vendor Arranged Meetings"
```

## 外部バーチャルイベント後のアクション {#post-external-virtual-event}

<!-- DO NOT CHANGE THIS ANCHOR -->

### 外部バーチャルイベント録画を YouTube に投稿する {#post-youtube}

<!-- DO NOT CHANGE THIS ANCHOR -->

[GitLab ブランドの YouTube チャンネル](/handbook/marketing/marketing-operations/youtube/#channels) に [外部ウェブキャスト録画のアップロード](/handbook/marketing/marketing-operations/youtube/#uploading-conversations-to-youtube) 方法について、このハンドブックドキュメントに従ってください。

**このプロセスは戦術オーナーが完了する必要があります。**

*注: これらのリクエストは現在 Campaign Managers を通して進められ、彼らのフォーカスと優先事項はトップファネルキャンペーン戦略の計画、実装、最適化であるため、[5 営業日 SLA](/handbook/marketing/demand-generation/campaigns/#turnaround-time-and-slas) があります。*

即時フォローアップメールについては、送信遅延を避けるために、GitLab YouTube リンク（戦術オーナーがアップロード）を直接指すことを推奨します。

Pathfactory へのアップロード（トラックへの追加）が *必要* な場合、戦術オーナーは [Pathfactory Upload](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-upload) Issue を開き **GitLab YouTube リンクを含めて**、さらに、アセットをトラックに追加するために [Pathfactory Track](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-track) Issue を開く必要があります。

### 外部ウェブキャストのゲーティング {#post-gating}

<!-- DO NOT CHANGE THIS ANCHOR -->

#### テック/アライアンスパートナーなしの外部ウェブキャストを投稿する {#post-gating-non-alliance}

<!-- DO NOT CHANGE THIS ANCHOR -->

録画が以下のすべての基準を満たすこと:

1. コンテンツが GitLab のユースケースまたは既存のキャンペーンメッセージングを強化する。
2. 将来のゲートページにオムニチャネル（最低 2 つ、そのうち 1 つは有料）のプロモーション計画があること。プロモーション計画の Issue はゲーティングリクエストにリンクされている必要があります。

#### テック/アライアンスパートナーありの外部ウェブキャストを投稿する {#post-gating-with-alliance}

<!-- DO NOT CHANGE THIS ANCHOR -->

録画が以下のすべての基準を満たすこと:

1. Select または高優先度パートナー: [Alliances Technology Dashboard](https://docs.google.com/spreadsheets/d/1-EE7vChGkDeyJxoM-LjVmUdwYwboxBmq8_42hjHGw_w/edit#gid=0) で高優先度としてリストされているか、Select チャネルパートナーであること。
2. コンテンツが GitLab のユースケースまたは既存のキャンペーンメッセージングを強化する。
3. 将来のゲートページにオムニチャネル（最低 2 つ、そのうち 1 つは有料）のプロモーション計画があること。プロモーション計画の Issue はゲーティングリクエストにリンクされている必要があります。

または

ゲートなしビデオが投稿後 7 日以内に 550 youtube ビューを獲得すること。

*注: 550 分のしきい値は、2020 年 8 月 11 日から 8 月 18 日の間の GitLab ブランド youtube チャンネルのトップ 10 ビデオの平均に基づいています。*
