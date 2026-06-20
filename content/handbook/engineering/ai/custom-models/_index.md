---
title: Custom Models グループ
description: "Custom Models グループは、GitLab Duo の customer-facing model operations/intelligence layer を所有します。利用可能な models と選択方法、customer experience の health and connectivity、gateway service surface（prompts、internal events、AIGW billing）を扱います。"
upstream_path: /handbook/engineering/ai/custom-models/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
lastmod: "2026-06-16T17:58:42+02:00"
translated_at: "2026-06-20T15:03:34Z"
translator: claude
stale: false
---

## ビジョン

Custom Models グループは、customers 固有の data と use-cases を支える GitLab Duo functionality を動かす、追加の custom models に注力します。

## ミッション、私たちが所有するもの

Custom Models は、GitLab の **customer-facing model intelligence layer** の end-to-end owner です。どの models が利用可能か、どのように選択されるか、customer experience の health and connectivity、そして gateway service surface（prompts、internal events、AIGW billing）を所有します。Customer zero、SaaS、Self-Managed、Dedicated にまたがる 1 つの full stack team です。

私たちは、[DevOps ライフサイクル](/handbook/product/categories/#devops-stages)の [AI Powered stage](/handbook/product/categories/#ai-powered-stage) にある [Custom Models group](/handbook/product/categories/#custom-models-group) に属する product categories のすべての backend aspects に責任を持ちます。product direction は [Category Direction, Custom Models Management](https://about.gitlab.com/direction/ai-powered/custom_models/) ページにあり、私たちが扱う機能は [Features by Group page](/handbook/product/categories/features/#custom-models) に一覧化されています。

## 組織

このグループは 3 つの functional teams に編成されています。各 functional team は、自分の area にある Requests for Help (RFHs) と support escalations を含め、自分の scope を end-to-end で所有します（[Customer support](#customer-support--requests-for-help)を参照）。Staff Engineers は、必要に応じて複数の functional teams を support することが期待されます。

### Model Selection

`.com` と self-hosted 全体で、どの models が利用可能か、どのように選ばれるかを所有します。

| Scope | |
| --- | --- |
| Model lifecycle | Customer Zero、`.com`、Self-Managed、Dedicated 全体の model additions/removals |
| Selection Engine | Unit Primitives、large/small models、agents |
| Selection UI | Customer zero、SaaS、Self-Managed、Dedicated |
| Supporting | 新しく追加された models 向けの prompts、evals、docs |

Model Evaluation Infra の evaluation results は、2 つの groups 間の shared review cadence を通じて selection decisions に反映されます（[What falls outside our scope](#what-falls-outside-our-scope)を参照）。

### Health & Connectivity

diagnostic surface と、customer-facing setup and connectivity issues のより広い category を所有します。

| Scope | |
| --- | --- |
| Diagnostics | Duo Health Check diagnostic surface |
| Setup & config | Customer setup and configuration |
| Connectivity | GitLab / AIGW / Models / DWS 全体の connectivity |
| Operations | debugging、version drift、関連する support escalations |
| LLMOps Expanding | monitoring、observability、LLM performance の tracking、errors の特定、将来的な model connectivity の最適化 |

"Health" は意図的に広い言葉です。diagnostic surface *および* それら diagnostics が surface することを意図した failure modes を含みます。そのため、diagnostics を作る人々が同じ issues を field します。

### Gateway Services

gateway の上にある event-driven surfaces、つまり入ってくる prompts、通過する telemetry、外へ出る billing/credit events を所有します。

| Scope | |
| --- | --- |
| Prompt Registry | gateway 上の prompt management |
| Telemetry | internal events and tracking |
| AIGW billing | AIGW 側の billing、self-hosted billing、SaaS billing、on-demand credits、AWS Marketplace flows 向けの metering and billing events |

> **Billing boundary:** Gateway Services は billing の **AIGW side**（metering and billing events）を所有します。purchasing and subscription side、buying、plan management は **Fulfillment** team が所有します。
> **Instrumentation boundary:** Analytics Instrumentation は tooling、internal events（Snowplow）、billing-events tooling、Service Ping collection を所有します。私たちは gateway/AIGW surface 向けの domain-specific events、billing events、metrics を所有し、その tooling を使って instrument します。

### functional teams への編成方法

**Acting Engineering Manager:** Mohamed Hamda

**Engineering Manager & Engineers**

{{< team-by-manager-slug "mhamda" >}}

**Staff Engineer (cross-team):** Manoj M J。functional teams 全体に貢献し、最も必要な initiatives を引き受けます。

| Functional team | Members |
| --- | --- |
| Model Selection | Julie Huang; Manoj M J (supporting) |
| Health & Connectivity | Cindy Halim, Newick Lee; Manoj M J (main team) |
| Gateway Services | Patrick Cyiza; Manoj M J (supporting) |

### Stable Counterparts

他の functional teams の以下の members は、私たちの stable counterparts です:

| **Name** | **Role** |
| --- | --- |
| Jordan Janes | [Principal Product Manager](/job-description-library/product/product-manager/) |

## 私たちの scope 外にあるもの {#what-falls-outside-our-scope}

org 内外の teams に対して boundaries を明確にするため、以下の areas は counterpart teams が所有します。work がこれらの areas に触れる場合は、listed owner を巻き込んでください。

| Area | Owner | Relationship to Custom Models |
| --- | --- | --- |
| Subscription purchase / buying flows, plan management | Fulfillment | Gateway Services の counterpart。私たちは AIGW-side billing/metering を所有し、Fulfillment は purchasing and subscriptions を所有します。 |
| Product analytics tooling & instrumentation | [Analytics Instrumentation](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/) | Gateway Services の counterpart。私たちは internal events and tracking に彼らの tooling を使います。 |
| Raw gateway infrastructure, routing, streaming, self-hosted AIGW | AI Platform Engineering (Duo Service Infra) | 彼らは infrastructure として gateway を所有します。私たちはその上で動く customer-visible service surface を所有します。 |
| Model evaluation infrastructure, CEF as a service, benchmark pipelines | AI Platform Engineering (Model Evaluation Infra) | 彼らは evaluation infra を run and maintain します。私たちはその results を consume して model selection を drive します。 |

## 連絡方法

- Issue Tracker: [`~group::custom models`](https://gitlab.com/dashboard/issues?sort=title_asc&state=opened&label_name[]=group::custom+models)
- Slack Channel: [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F)
- Label Subscription: [`~group::custom models`](https://gitlab.com/groups/gitlab-com/-/labels?subscribed=&search=group%3A%3Acustom+models)

### 組織ラベル

Custom Models group が所有する Issues には、必要に応じて以下の labels を付けるべきです:

- `~"group::custom models"`
- `~"devops::ai-powered"`
- `~"section::data science"`
- `~"Category:Model personalization"`
- `~"Category:Self-Hosted models"`

加えて、Issues には関連する `~type:` と subtype labels を含めるべきです。

## 働き方

私たちの operating framework は、ownership を visible に保ち、progress について team を honest にし、priorities が意味をなさない場合に push back する余地を作ります。bureaucracy は増やしません。

### Directly Responsible Individuals (DRIs)

team が active に取り組んでいるすべての issue、機能、bug fix、initiative には、1 人の named **DRI** がいます。DRI は必ずしもすべての work を行う人ではありません。前に進め、unblocked に保つ責任を持つ人です。

DRI であることは次を意味します:

- **outcome** を所有します。task だけではありません。stuck しているなら、聞かれるのを待たずに raise します。
- planning issue に少なくとも週 1 回 status を update します。
- work を delegate できますが、accountability はあなたに残ります。
- scope、priority、timeline が意味をなさない場合は、明確な理由を添えて push back できます（そしてそうすべきです）。

DRI の assign 方法:

- **New issues:** weekly sync で議論され、誰かが volunteer するか proposed されます。誰も volunteer しない場合は、その理由を議論します。実際には priority ではない、または team が overloaded なのかもしれません。
- **RFHs and escalations:** relevant functional team の triage DRI が ownership を取るか、context とともに明示的に hand off します。
- DRI assignment は team の planning issue で tracking されます。誰が何を所有しているかの single source of truth です。

DRI の再 assign は normal で low-friction なことであり、political event ではありません。これは **explicitly**（drift ではなく）行われるべきであり、新しい DRI がゼロから始めなくてよいだけの context を hand over する必要があります。

### Weekly status updates

各 active DRI は team planning issue に短い async update を投稿します。数行でよく、novel ではありません:

- 今週進んだこと
- blocked していることと必要なもの
- coming week の next

Example:

---

**Async Status Update YYYY-MM-DD**

**issue-title (link)**

- Progress: ...
- Blockers: ...
- Confidence for current milestone: 🟡 Slightly confident

**issue-title (link)**

- Progress: ...
- Blockers: ...
- Confidence for current milestone: 🟢 Very confident

**Confidence key:** 🔴 Not confident · 🟡 Slightly confident · 🟢 Very confident

---

planning issue 上の async updates が default であり、すべての active work の state を見る single place です。既存の engineering sync は主に blockers について hand を raise するために使われます。attendance は optional であり、参加できなくても他は何も変わりません（例: timezones）。

### 早めに手を挙げる

stuck している、overloaded である、または work が想定より大きいと気づいた場合は、手を挙げてください。これは healthy team の運営方法であり、failure の sign ではありません:

- weekly update で flag する。
- Slack で team に明確な ask とともに ping する: "I need help with X" または "I need someone to take over Y because Z."
- Blocked items は weekly sync で最初に議論されます。

### Push back と quantity より quality

team は、current priorities と align しない work や、quality を compromise する work に対して push back する権限を持ちます:

- Push back には **reason** を添えます（"We can't take this on this milestone because we're committed to X and Y"）。
- request した person ではなく、work に向けます。
- decision の record が残るよう documented します（issue への comment で十分です）。

既存のものが solid になるまで、新しい models や configurations を追加する pressure には抵抗します。New model onboarding は lightweight readiness check を通ります:

1. documentation は complete か？

1. known issues は resolved されているか？

1. support は tickets に対応できる状態か？

"We're not adding this yet; here's what we need to get right first" は valid で encouraged な答えです。

### Cadence

| Activity | Frequency | Owner |
| --- | --- | --- |
| Weekly sync (review blockers, assign DRIs) | Weekly | EM |
| Status update on planning issue | Weekly (async) | Each active DRI |
| Triage of new RFHs / escalations | Ongoing | Triage DRI per functional team |
| Retrospective on process health | Monthly | Team |

## Epics と Tech Leads を使った作業の scope 設定

Epics は、single issue より大きい任意の work item、新機能、complex refactor、bug の primary definition of scope です。epic 内の issues が work item の entire scope を構成し、それらがすべて closed になると work は complete になり epic も closed になります。epic は clear improvement を加えるイテレーションを enclose すべきですが、必ずしも機能全体を表すわけではありません。機能には複数 epics が必要な場合があります。

epic によって定義された work の technical ownership は **Tech Lead** に委譲されます。Tech Lead は epic に assigned された engineer であり、scope が correct であることを保証します。Tech Lead は EM、PM、他の engineers と連携します。team の任意の engineer は、Tech Lead 自身を含め、Kanban process を使って self-assigned し、epic 内の issues に取り組めます。

## Team Milestone Planning Process

Custom Models は [Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/) と [Cross Functional Prioritization](/handbook/engineering/workflow/cross-functional-prioritization/) に従います。team は planning issue と boards を使って planning process を管理します。これを簡単にするための [Planning automation](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/blob/main/doc/planning/index.md) scripts が利用できます。

各 milestone の [Planning issues](https://gitlab.com/groups/gitlab-org/-/epics/13440) は PM によって作成され、PM、EM、stable counterparts の間で upcoming work を coordinate するために使われます。

各 milestone 中に、次の milestone の planning が完了します:

1. planning issues and boards の作成（EM or PM）
1. [automation](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/merge_requests/95) で refinement issues を毎週作成
1. milestone の candidate issues を特定し Planning Board に追加（PM, EM）
1. team member capacity planning（EM）
1. weights を使った effort estimation（Engineers and EM）
1. planning board を finalise する joint planning session（PM, EM）
1. engineers への work assignment、`~Deliverable` label の追加、planning issue の update（EM）

### Planning Issue

毎月、PM が automation と [Custom Models Planning template](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/blob/main/.gitlab/issue_templates/milestone-planning-template.md) を使って planning issue を作成します。これは specific milestone の planning team members（PM, EM）向け discussion area であり、Planning and Build Boards へ link します。

### Planning Board

[Planning Board](https://gitlab.com/groups/gitlab-org/-/boards/7762631?milestone_title=17.7&label_name[]=group%3A%3Acustom%20models) は各 milestone について PM が作成し、category 別に curated された issues の list です。issues を多めに載せることができ、excess は planning call 中に next milestone または Next 1-3 Milestones board へ移されます。

PM は issues に `~workflow::planning breakdown` を mark し、issue description が clear で development ready であることを engineers に review してもらうよう EM に signal します。その後 engineer は weight を assign し、`~workflow::ready for development` label を apply します。

### Ready for Development Status

作業可能な issues は `workflow::ready for development` と label されます。この label が付いた issues だけを Deliverable として engineer に assign すべきです。research が必要な場合は `~spike` label が assign されます。spike の scope は明確に stated されるべきで、outcome は code または refined issue になる場合があります。

### Capacity Planning

EM は team capacity を計算し、priority に基づいて release へ work lanes を assign する方法を maintain します。EM は planning issue に team capacity and DRIs を post します。

### Build Board

EM は previous-milestone slippage、PM preference、weight、priority に基づき、[Planning Board](#planning-board) から issues を選びます。その後 EM は release 内の各 issue に `~Deliverable` label を apply し、engineer に assign します。Issues は release を通じて Build Board で tracking されます。

### Say / Do Ratio

Say / Do ratio は `Completed Issues / Assigned Issues` を使って計算されます:

- `~Deliverable` label とともに Build Board に追加された issues が Assigned Issues です。
- milestone の終わりまでに closed された issues が Completed Issues です。

### Issue Weights

各 issue には、それを close する work の estimate として weight が assign されます。weight 1 はおよそ 2 working days の effort です。issues は通常 3 を超えて weighted されません。大きな weights は、その issue をさらに分解すべきことを示します。

### Planning and Delivery Boards

[Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/) のすべての workflow statuses が valid です。[Next 1-3](https://gitlab.com/groups/gitlab-org/-/boards/7472817?milestone_title=Next%201-3%20releases&label_name[]=group%3A%3Acustom%20models) と [Next 4-6 milestones](https://gitlab.com/groups/gitlab-org/-/boards/7472821?milestone_title=Next%204-6%20releases&label_name[]=group%3A%3Acustom%20models) boards は、refinement が必要な、または作業可能な issues を収容します。

| Board | Filters | Columns |
| --- | --- | --- |
| Planning Board | Milestone, `~group::custom models` | `~type::bug`, `~type::maintenance`, `~type::feature` |
| Build Board | Milestone, `~group::custom models`, `~Deliverable` | `~workflow::ready for development`, `~workflow::in dev`, `~workflow::in review`, `~workflow::awaiting security release`, `~workflow::blocked` |
| Next 1-3 Milestones | `%Next 1-3 Milestones` | `~workflow::problem validation`, `~workflow::design`, `~workflow::solution validation`, `~workflow::planning breakdown`, `~workflow::ready for development` |
| Next 4-6 Milestones | `%Next 4-6 Milestones` | Same as Next 1-3 Milestones |

### Issue Milestones

- issues は planned されている、または現在作業中の場合、current or next milestone に assign されます。
- 作業予定のない issues には `%Backlog` が assign されます。ただし community contribution で対応される場合があります。
- `%Awaiting Customer Feedback` は customer interest に応じて作業される場合があります。

[issue triage report](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/17099) は milestone assignment が必要な issues を highlight します。

## Customer support & Requests for Help

customers（existing and prospective）との calls をよりよく support するため、Custom Models は customer support requests を prioritize する engineers を提供し、load and knowledge が team 全体で shared されるようにします。

**RFHs は、その scope に該当する functional team が所有します**。Gateway Services は gateway RFHs を扱い、Health & Connectivity は setup/connectivity RFHs を扱う、という形です。各 functional team は **triage DRI** を assign し、その DRI が RFH を resolution まで drive するか、context とともに明示的に hand off します。Support requests は 24h 以内に acknowledged されるべきです。

customer の help を request するには、[request for help issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?description_template=SupportTemplateRequest-SelfHostedModels) を作成し、[#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) で共有してください。同じ channel で他の team members に help を求めることをためらわないでください。

### support における triage DRI の責任

- [Requests for Help](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Acustom%20models&first_page_size=20) を triage する。
- [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) と [#custom_model_rfh](https://gitlab.enterprise.slack.com/archives/C0B4URWF2PN) に届く requests を monitor する。
- request-for-help issues が作成されていることを確認する。
- Slack で support questions に答え、可能な限り documentation へ redirect する。
- 必要に応じて Solution Architects または Sales reps が lead する customer calls に参加し、resolved されるか support engineer に handed off されるまで customer との communication を own する。
- outcomes に基づいて act する:
  1. SAs and customers がより self-sufficient になるために documentation を追加できるか？
  1. better tooling が役立つか？必要な changes を含む issue を作成する。
  1. 見逃していた bug だったか？次回どう avoid するか？
- 対応できない場合は EM に事前に notify する。
- 次の support engineer に必要な context を hand over する。

support 中の engineers に期待されないこと:

- preferred working hours 外に available であること。ただし urgent な requests は翌 working day の最初に対応すべき場合があります。そのような状況では EM and PM に consult してください。
- specific case で agreed されない限り、customer calls を lead すること。
- specific case で agreed されない限り、demos を present すること。

## Communication

Custom Models は以下の guidelines に基づいて communication します:

1. sync meetings より async communication を常に優先する。
1. async が inefficient であることが分かった場合は、[sync call](#ad-hoc-sync-calls) を arrange することをためらわない。ただし team members と share できるよう record するよう努める。
1. [Transparency by Default](/handbook/security/transparency-by-default/)。
1. work-related communication の primary channel は [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack channel です。
1. Internal team issues and projects は [`gitlab-org/ai-powered/custom-models`](https://gitlab.com/gitlab-org/ai-powered/custom-models) の下に namespaced されています。

## Pings の確認

Slack または GitLab で名前を指定して ping された場合は、threaded comment または emoji のいずれかで acknowledge してください。

## Time Off

team members は、capacity planning 中に EM が proper number of days off を使えるように、すべての [Paid Time Off](/handbook/people-group/time-off-and-absence/time-off-types/) を "Workday" Slack app に追加すべきです。可能であれば、full milestone 1 つ分前に time off を追加してください。

last-minute で unplanned な PTO needs は常に起こりえます。必要な time は取得してください。ただし、Workday に入力し、できるだけ早く EM と communicate してください。

## Ad-hoc sync calls

私たちは default で async communication を使って運営しています。sync discussion が有益な場合もあり、必要に応じて required people と sync calls を schedule することを team members に推奨します。

## Blog Posts

Custom Models team members が書いた blog posts:

- [Developing GitLab Duo: How we validate and test AI models at scale](https://about.gitlab.com/blog/2024/05/09/developing-gitlab-duo-how-we-validate-and-test-ai-models-at-scale/), [@susie.bee](https://gitlab.com/susie.bee)
- [GitLab Duo Self-Hosted: Enterprise AI built for data privacy](https://about.gitlab.com/blog/2025/02/27/gitlab-duo-self-hosted-enterprise-ai-built-for-data-privacy/), [@susie.bee](https://gitlab.com/susie.bee)
- [Speed meets governance: Model Selection comes to GitLab Duo](https://about.gitlab.com/blog/speed-meets-governance-model-selection-comes-to-gitlab-duo/), [@susie.bee](https://gitlab.com/susie.bee)
