---
title: "Marketing Operations"
description: "Marketing Operations (MktgOps) は、マーケティングチーム全体をサポートし、プロセスを合理化し関連ツールを管理します。これらのツールにより、GitLab の他のチームもしばしばサポートします。"
upstream_path: /handbook/marketing/marketing-operations/
upstream_sha: "db1b52fb5e65d37509c3eaaaebfd50dd491e4b36"
translated_at: "2026-07-22T06:32:52+09:00"
translator: "claude"
stale: false
lastmod: "2026-07-21T09:53:23-06:00"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## <i class="far fa-newspaper" id="biz-tech-icons"></i> 憲章

Marketing Operations は、マーケティング組織がプロセスを合理化し関連ツールを管理することを支援します。私たちは複数のチームと密接に協力し、システム間の情報がシームレスであり、データが可能な限り正確であり、それぞれのシステムでの用語が一貫していることを確実にします。私たちのチームの主な機能は次のとおりです:

- マーケティングテクノロジースタックのプロジェクト管理
- ツールに関連するプロセスの合理化と標準化
- データのクリーンさと正確性
- マーケティングテクノロジーに関するベストプラクティスと戦略
- マーケティングシステムの継続的な改善
- 新しいマーケティングテクノロジーの評価
- 新しいマーケティングテクノロジーの調達のサポート

## <i class="fas fa-users" id="biz-tech-icons"></i> チームメンバー紹介

| 担当者 | 役職 |
| ------ | ------ |
| [Andy Ramirez](https://gitlab.com/anramirez) | VP, Growth Marketing |
| [Amy Waller](https://gitlab.com/amy.waller) | [Director, Marketing Operations](/job-description-library/marketing/marketing-operations-manager/#director-marketing-operations) |
| [Gill Murphy](https://gitlab.com/gillmurphy) | [Manager, Marketing Operations Manager](/job-description-library/marketing/marketing-operations-manager/#manager-marketing-operations) |
| [Rob Rosu](https://gitlab.com/RobRosu) | [Manager, Marketing Operations Manager](/job-description-library/marketing/marketing-operations-manager/#manager-marketing-operations)|
| [Jenny Tiemann](https://gitlab.com/jennyt) | [Staff Marketing Operations Manager](/job-description-library/marketing/marketing-operations-manager/#staff-marketing-operations-manager) |
| [Salina Tran](https://gitlab.com/stran5) | [Senior Marketing Operations Manager](/job-description-library/marketing/marketing-operations-manager/#senior-marketing-operations-manager) |
| [Jameson Burton](https://gitlab.com/jburton) | [Senior Marketing Operations Manager](/job-description-library/marketing/marketing-operations-manager/#senior-marketing-operations-manager)  |
| [Evan Mathis](https://gitlab.com/emathis) | [Senior Marketing Operations Manager](/job-description-library/marketing/marketing-operations-manager/#senior-marketing-operations-manager)  |
| [Abhilash Mohanty](https://gitlab.com/abhilash_mohanty) | [Senior Marketing Operations Manager](/job-description-library/marketing/marketing-operations-manager/#senior-marketing-operations-manager)  |
| [Nish Sharma](https://gitlab.com/nishusha) | [Senior Marketing Operations Manager](/job-description-library/marketing/marketing-operations-manager/#senior-marketing-operations-manager)  |
| [Bryce Weatherford](https://gitlab.com/bweatherford) | [Marketing Operations Manager](/job-description-library/marketing/marketing-operations-manager/#marketing-operations-manager-intermediate) |
| [Esmira Khalilova](https://gitlab.com/ekhalilova) | [Associate Marketing Operations Manager](/job-description-library/marketing/marketing-operations-manager/#associate-marketing-operations-manager) |

## <i class="far fa-life-ring" id="biz-tech-icons"></i> ヘルプの取得方法 {#how-to-get-help}

**重要**: [個人を特定できる情報 (PII) データ](/handbook/support/workflows/pii_removal_requests/#overview)（スクリーンショットを含む）を含む可能性のある Issue を提出する前に、その Issue が confidential としてマークされていることを確認してください。Issue 説明の中で送信前に [クイックアクション](https://docs.gitlab.com/ee/user/project/quick_actions.html#issues-merge-requests-and-epics) を使用して実現できます。

<div class="flex-row" markdown="0">
  <div>
    <a href="https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=bug_request" class="btn btn-purple" style="width:170px;margin:5px;">バグを報告</a>
    <a href="https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new" class="btn btn-purple" style="width:170px;margin:5px;">Issue トラッカー</a>
    <a href="https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=process_change_request" class="btn btn-purple" style="width:170px;margin:5px;">プロセス変更リクエスト</a>
    <a href="/handbook/marketing/emergency-response" class="btn btn-purple" style="width:170px;margin:5px;">緊急コミュニケーション</a>
  </div>
</div>

### ハンドブックの更新 {#handbook-updates}

ハンドブックページのワークフローを更新する際は、関連する Slack チャンネルにマージされた MR をプッシュするように設定し、ページに加えられた変更をチームが認識できるようにしてください。マージされた MR が該当する Slack チャンネルに表示されるようにするには、MR に以下の対応する `labels` のいずれかを追加する必要があります。

| 追加するラベル | マージされた MR がプッシュされる Slack チャンネル |
| ------------- | ------------------------------------- |
| `MktgOps - HB Update` | `#hbupdate-mktgops` `#mktgops` |

## <i class="far fa-paper-plane" id="biz-tech-icons"></i> 連絡方法

**Slack チャンネル**

- [#hbupdate-mktgops](https://gitlab.slack.com/archives/mktgops) - このチャンネルは、マージされた新しい [ハンドブック更新](#handbook-updates) を自動的に投稿するために使用されます。
- [#mktgops](https://gitlab.slack.com/archives/mktgops) - 一般的なマーケティングオペレーションサポート、毎週のマーケティングオペレーションチームのスタンドアップ更新、および主要なシステムステータス更新にこのチャンネルを使用しています。コラボレーションを阻害するため、できる限り [ダイレクトメッセージを避けています](/handbook/communication/#avoid-direct-messages)。
  - 一般的なリクエストを効率的にトリアージするため、このチャンネルで自動応答を活用しています。誰でも以下の表の Slack 絵文字リアクションを使用して #mktgops slack チャンネルでリクエストのトリアージを支援できます。

| 問い合わせ | Slack リアクション |
| ------ | ------ |
| SFDC 固有の質問 | `:mktgops_salesforce:` |
| Issue を必要とする複雑な質問（自動的に Issue を作成）| `:mktgops_issue:` |
| バグ | `:mktgops_bug:` |
| ツールステータスに関する質問 | `:mktgops_status:` |
| リストインポートに関する質問 | `:mktgops_lists:` |
| ツールアクセスが必要 | `:mktgops_AR:` |

**Salesforce**

Marketing Operations チームは、Salesforce の Lead オブジェクトの変更や管理を支援するために '@mktgops-support' Chatter を作成しました。サポートリクエストでより多くの情報を提供できるほど、リクエストはより早く解決されることに注意してください。サポートに '@mktgops-support' Chatter を使用してください:

- リードを新しい所有者に割り当てる
- 異なる所有者の重複リードをマージする
- リードが不適切にルーティングされたと思われる場合のルーティングロジックの調査
- Marketing Operations チームから追加のリードサポートをリクエストする
- Marketing Ops チームは、Contact、Account、または Opportunity オブジェクトに関連するリクエストは管理しません。
- 個別の Marketing Ops チームメンバーをメンションするのは避け、代わりにこの Chatter を使用してください。

**緊急コミュニケーション**

緊急の通信を送信する必要がある場合、Marketing Ops の支援が必要となります。緊急対応を開始するためにこの [ページ](/handbook/marketing/emergency-response/) の指示に従い、[カバレッジマトリックス](/handbook/marketing/emergency-response#coverage-matrix) を確認してください。セキュリティ関連の問題については [セキュリティインシデントコミュニケーションプラン](/handbook/security/security-operations/sirt/security-incident-communication-plan/) に従うこともできます。

## <i class="fas fa-tasks" id="biz-tech-icons"></i> 業務の進め方

### Issue ボード

1. [MktgOps チーム（チームメンバーごとの Issue）](https://gitlab.com/groups/gitlab-com/-/boards/2629685)
2. [MktgOps Open Milestone Issues](https://gitlab.com/groups/gitlab-com/-/boards/2629685?milestone_title=Started)
3. [MktgOps Open Issues w/ Sales Systems](https://gitlab.com/groups/gitlab-com/-/boards/2626681)

### Issue

MktgOps チームは Issue と Issue ボードから作業します。私たちの支援が必要な場合は、以下のいずれかを行ってください:

[Issue を開いて](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new) リクエストを作成し、`~MktgOps::00: Triage` ラベルを使用してください。

以前のマイルストーンで閉じられた Issue を再オープンしないでください。

### OKR

達成した key result について詳しく知るには、[四半期ごとのハイライトトラッカー](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/?sort=created_date&state=all&label_name%5B%5D=mktgops-highlights&first_page_size=20) をチェックしてください。

### ラベリング

私たちはラベルを 3 つの目的で使用します:

1. 影響を受けるツールまたはエリアを分類
1. 優先度を表示
1. 現在のステージを特定

<details>
<summary markdown='span'>
カテゴリ
</summary>

- `MktgOps - FYI`: Issue は直接オペレーションに関連しないが、MktgOps のアクションアイテムはなく、Issue を認識する必要がある
- `MktgOps - List Import`: あらゆる種類のリストインポートに使用 - イベントまたは一般/アドホック（To Be Triaged のスコープラベルは併用しない）
- `Marketo`、`Bizible`、`6sense`、`Qualified`、`LinkedIn Sales Navigator`、`PathFactory`、`ZoomInfo`、`Goldcast`、`Outreach-io`、`Iterable`: 私たちのテックスタックツールの 1 つを強調するために使用
- `MktgOps - bug`: MktgOps が対処または特定するバグ Issue
- `MktgOps - changelog`: マーケティングチェンジログに記録する必要がある Issue または Epic を追跡し、マーケティング全体の主要な変更を追跡するために使用
- `SMOps/Systems - Changelog`: Sales Operations または Systems に影響を与えるチェンジログ Issue を追跡するために使用
- `MktgOps-Support`: フィールドマーケティングランディングページやメールなど、フィールドマーケティングおよびイベントサポートを追跡する Issue に使用
- `MktgOps-Future Feature`: 時間が許せば将来のプロジェクトとして検討するもの。タイムフレーム: 時間が許す限り
- `dg-campaigns`、`ABM`、`lifecycle-mktg`: これらのチームによって作成された Issue で、リクエストの追跡を容易にするために使用
- `MktgOps::Events/FM Copy Review`: フィールドマーケティングおよびコーポレートイベントが `MktgOps-Support` Issue で、Issue がコピーレビューの準備ができていることを示すために使用

</details>

<details>
<summary markdown='span'>
Sales Systems とのプロセスステップ
</summary>

- `MktgOpsPrio::00: Requested`: 新しい Issue
- `MktgOpsPrio::01: In Approved`: ビジネスプロセスオーナーの承認を受けた Issue
- `MktgOpsPrio::02: In Queue - Mops`: Sales Systems との優先順位付けの準備ができた Issue
- `MktgOpsPrio::03: In Queue - Systems`: Systems チームとスコープを設定し議論されているが、まだマイルストーンに割り当てられていない
- `MtkgOpsPrio::04: Actioned`: Issue は現在または将来のマイルストーンにあり、UAT の準備はまだできていない
- `MktgOpsPrio::05: Business Owner UAT`: Issue はビジネスオーナーによる UAT 中であり、サインオフなしには Systems は前進できない
- `MtkgOpsPrio::06: Pending Release`: Issue はステージングで完全にテスト・承認済み。Systems チームによるデプロイ待ち
- `MtkgOpsPrio::07: Complete`: Issue は本番にデプロイされた

</details>

<details>
<summary markdown='span'>
Systems 関連ラベル
</summary>

- `ETA Customer:: Marketing Ops`: Enterprise Technology and AI。この Issue は Marketing Ops とのパートナーシップにあります
- `MktgOps/Systems-Request`: Marketing Operations と Sales Systems 全体の作業を追跡し、優先順位を付けるために使用
- `MktgSystems-PMO`: 優先順位付けの支援とワークストリームの決定のために、コミットされた PMO プロジェクトに関する Issue に使用

ビジネスインパクトラベル: どのビジネスインパクトまたは主題エリアがこれらの変更を駆動しているか

- `MktgImpact - Partner Lead Lifecycle` - Impartner および Partner Lead Lifecycle への影響。Partner lead、Partner campaign、チャネルイベントの ROI、リードトラッキングなど。
- `MktgImpact - Sales Enablement` - セールスの生産性と効率を向上させるマーケティング施策
- `MktgImpact - Sales Dev Productivity` - SLA や可視性など、Sales Dev チームの生産性を向上させる
- `MktgImpact - Product Launches` - 製品ローンチまたはリリースを巡る Issue
- `MktgImpact - Team Productivity and Efficiency` - 一般的なマーケティングチームの生産性向上
- `MktgImpact - Analytics and Data Quality` - データ更新または分析ニーズ

タイプラベル: どのタイプの SFDC 作業が必要か

- `MktgType - Break/Fix`
- `MktgType - Tool Installation / Configuration`
- `MktgType - Package Updates`
- `MktgType - FLS or Access`
- `MktgType - Tech Debt`
- `MktgType - Operational Improvements`

</details>

<details>
<summary markdown='span'>
優先度
</summary>

- `MktgOpsPriority:: 00-Urgent`: 破壊的変更、セキュリティ問題、またはビジネスクリティカルなアイテムに関連する Issue。すべてが優先事項とは限らないため、このカテゴリは限定されます。タイムフレーム: 即時のアクションが必要。
- `MktgOpsPriority:: 01-High`: 破壊的変更、OKR フォーカス、その他高いビジネス価値を持つ Issue に関連。タイムフレーム: マイルストーン内のアクション
- `MktgOpsPriority:: 02-Medium`: MktgOps が完了する具体的なアクションアイテムがある Issue。タイムフレーム: 数週間以内
- `MktgOpsPriority:: 03-Low`: チームを支援する機能、または MktgOps にとって役立つ具体的なアクションアイテムだが、他の Issue のために後回しにできる。タイムフレーム: 数ヶ月以内

</details>

<details>
<summary markdown='span'>
ステージ
</summary>

- `MktgOps::00: Triage`: MktgOps の注意、作業のリクエスト、関与が必要な Issue の一般的なラベル
- `MktgOps::01: Scoping`: 割り当てられているが、作業を開始するかバックログに追加するためにスコープを設定する必要がある Issue
- `MktgOps::02: On Hold`: タイミングまたはその他の理由により現在保留中の Issue
- `MktgOps::03: Backlog`: 作業の準備ができている Issue で、将来のマイルストーンまたは現在のマイルストーンで作業待ち
- `MktgOps::03: Assigned`: 前進する準備ができ、マイルストーンに割り当てられ、MktgOps チームメンバーに割り当てられた Issue
- `MktgOps::04: In Progress`: MktgOps チームメンバーに割り当てられ、積極的に作業中の Issue
- `MktgOps::05: Business Owner Review`: 現在のマイルストーンにあり、ビジネスオーナーによるレビュー・サインオフが必要な Issue
- `MktgOps::06: Ready to Deploy`: 現在のマイルストーンにあり、ビジネスオーナーのサインオフ済み、MktgOps チームメンバーによるデプロイ準備完了
- `MktgOps::07: Blocked`: Issue がブロックされており、MktgOps による他のアクションは不可能。誰か/別のチームのアクションアイテム完了を待っている。または、外部当事者（ベンダーなど）のアクション完了によりブロックされている可能性もあります。詳細なコンテキストを追加するため、対応する `Mktgops-Blocked` ラベルが追加されているはずです。
- `MktgOps::08: Completed`: MktgOps はこの Issue のタスクを完了したが、Issue は閉じていない可能性がある。

</details>

<details>
<summary markdown='span'>
Blocked ラベル
</summary>

- `Mktgops-Blocked:: Blocked by related issue` - 別の Issue によりブロック。その Issue はリンクされているはずです。
- `Mktgops-Blocked:: Pending review / approval` - MktgOps チームのブロック - ビジネスオーナーのレビューまたは承認が必要
- `Mktgops-Blocked:: Needs more information` - Issue を前進させるために、リクエスト元または他者からの追加情報が必要

</details>

### マイルストーン

各個人貢献者（IC）は、2 週間のタイムフレーム内で完了する Issue をマイルストーンに追加する責任があります。必要に応じて、IC はメインの Issue を、より大きなリクエストの _実行可能な_ セグメントである小さなパーツに分割します。

各マイルストーンの終わりに、完了していない場合、担当者は Issue が新しいマイルストーンに移動する理由のコンテキストを追加するべきです。これの目標は、ビジネスパートナーに対して積極的かつ透明にコミュニケーションを取り、マーケティングオペレーションのチームメンバーが各マイルストーンで意図的かつ思慮深く自分の作業を管理できるようにすることです。

各マイルストーン内には、ハンドブックへのすべての変更コミットを含む `WIP` マージリクエストがあります。すべてのチームメンバーは変更をマイルストーンマージリクエストに貢献します。マージリクエストには、マーケティングオペレーションラベルと現在のマイルストーンがタグ付けされている必要があります。

<div class="flex-row" markdown="0">
  <div>
    <a href="https://gitlab.com/groups/gitlab-com/-/milestones?utf8=%E2%9C%93&search_title=mktgops&state=&sort=" class="btn btn-purple" style="width:170px;margin:5px;">マイルストーンを表示</a>
  </div>
</div>

### Marketing Ops カレンダー

[私たちのチーム Google カレンダーは、こちらで GitLab チームメンバーが利用可能です](https://calendar.google.com/calendar/u/0?cid=Y191M2dhYWltcWhyYzNkNzUzbmJvbDNob3VrZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t)。今後のチームの PTO と祝日が表示されます。

### マーケティングチェンジログ

定期的に、Marketing Operations やマーケティング組織内の他のチームは、ツール全体、データ・レポートに影響する重要な変更を加えたり、レポートに影響する重要な変更を発見したりします。そのため、共有 [チェンジログ](https://docs.google.com/spreadsheets/d/1FHiKhQukMVfwKsBJDzyrsuzuw2bv97xQFhegvFXTeNQ/edit#gid=0) を持っています。MktgOps と Marketing Analytics チームは、変更が行われるたびに必要に応じてこのドキュメントを更新します。マーケティング全体に大きな影響を与える Issue または Epic に取り組んでいる場合は、`MktgOps - changelog` ラベルを追加して、Marketing Operations が GitLab 全体の変更を追跡できるようにしてください。

## <i class="far fa-handshake" id="biz-tech-icons"></i> 緊密に協力するチーム

### SFDC 更新のための Sales Systems との協力

MktgOps チームは、Salesforce.com (SFDC) で変更を加えるために [Sales Systems チーム](/handbook/sales/field-operations/sales-systems/) と頻繁に協力しています。これらの変更のための Sales Systems との協力プロセスと遵守する SLA については、以下の情報を参照してください。

Marketo と SFDC の両方でフィールドを作成する必要がある場合は、まず SFDC で作成し、その後 SFDC 内の Marketo User Permission セットに追加する必要があります。そこから、フィールドが Marketo に同期されます。この操作順を間違えてフィールドが最初に Marketo で作成された場合は、上記の指示に従い、その後フィールドを再マッピングするためのサポートを開く必要があります。**フィールドタイプについては [Marketo ドキュメント](https://experienceleague.adobe.com/en/docs/marketo/using/product-docs/administration/field-management/custom-field-type-glossary) を使用してください。

Sales Systems の支援が必要な場合は、次の手順に従ってください:

1. 彼らのプロジェクトで [Sales System Issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new) を開き、`ETA Customer::Marketing Ops` ラベルを割り当てます。
   - Issue がコミットされた PMO プロジェクトの一部である場合は、`MktgSystems-PMO` ラベルを追加してください
2. `MktgOpsPrio::00: Requested` の [優先順位付けラベル](/handbook/marketing/marketing-operations/#labeling) を追加します
3. ビジネスプロセスオーナー（BPO）がレビューし、ビジネスの観点からリクエストを承認する場合は、適切なボックスをチェックして `MktgOpsPrio::01: Approved` ラベルを追加します。そうでない場合、リクエストはブロッカーまたは未解決の質問が解決されるまで `MktgOpsPrio::00: Requested` ステータスのままとなります。
4. 承認されると、リクエストはビジネスプロセスオーナーによって優先順位付けキューに追加され、Sales Systems または PMO とレビューされ、`MktgOpsPrio::02: In Queue - Mops` とラベル付けされます
5. Systems が割り当てるが、まだマイルストーンに追加されていない場合、Issue は `MktgOpsPrio::03: In Queue - Systems` とラベル付けされます
6. マイルストーンが追加され、Issue が議論されると、優先順位付けコールに参加している MktgOps 代表者によって、ラベルが `MktgOpsPrio::04: Actioned` に更新されます。
    - ラベルが `MktgOpsPrio::04: Actioned` に更新されたら、Sales Systems ラベルに従って次のステップに進みます。
7. Systems が Issue に取り組み、更新をまずステージング環境にプッシュします
8. Systems がビルドしたら、テストして受け入れるのはビジネスオーナーの責任です。ビジネスオーナーは、ソリューションがステージング環境で正しく機能していることを示す証拠（テスト計画やスクリーンショットなど）を示さなければなりません。これは、ソリューション、そのテスト、関連プロセスを変更する権限の受諾を表す重要なステップです。この間、Issue は `MktgOpsPrio:: 05: Business Owner UAT` のままとなります。
9. デプロイの準備ができたら、Systems マネージャーは `entapps-status:: ready to deploy` を追加して、リリースマネージャーに本番リリースの準備ができていることをフラグします。Marketing Ops ラベルは `MktgOpsPrio::05: Pending Release` に更新されるべきです
10. 本番に入ったら、MktgOps は SFDC のフィールド/更新と関連する/影響を受けるシステムが期待通りに機能していることを再度確認するべきです。ラベルは `MktgOpsPrio::06: Completed` に更新されます
11. Issue は閉じられ完了します。

**その他の便利なリンク:**

- [Sales Systems からヘルプを得る手順](/handbook/sales/field-operations/sales-systems/#steps-to-getting-help-from-sales-systems)

### Workato 関連 Issue における Integrations チームとの協力

Workato は、GitLab のさまざまなチーム間での自動化と統合に使用される low-code/no-code ツールです。Marketing Operations のいくつかのプロセスを構築、テスト、デプロイするために、Integrations チームと頻繁に協力しています。Integrations チームと協力する最善の方法は Issue を開くことです。シナリオに応じて、2 つの方法があります:

1. 新しい自動化/統合の作成をリクエスト
      - ゼロから何かを構築する必要があり、Integrations チームの支援が必要なリクエスト
        1. [Integrations Work](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/integrations-work/-/issues/new) で Issue を開き、Issue テンプレートの指示に従ってください。
        2. Issue がマーケティングオペレーションに関連する場合は、必ず @stran5 または @amy.waller をタグ付けしてください
2. テスト環境で開発されたレシピのバグ修正またはデプロイ
      - 現在動作しているレシピの問題を修正するため、または独自に構築されたレシピを本番に移す前にテスト・レビューするため。SOX コンプライアンスのため、本番のレシピへの変更には変更管理 Issue を伴う必要があります。
        1. [Integrations Work プロジェクト](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/integrations-work/-/issues/new) で Issue を開き、特定のニーズに応じて _Bug_、_Change_、または _Default_ のテンプレートを選択し、Issue テンプレートの指示に従ってください。
        2. [Change Management プロジェクト](https://gitlab.com/gitlab-com/business-technology/change-management/-/issues/new) で Issue を開き、[このテンプレート](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/integrations-work/-/blob/main/.gitlab/issue_templates/change%20management.md?ref_type=heads) を Issue 説明にコピー＆ペーストしてください
        3. テンプレートの指示に従ってください。Integrations チームに通知するために必要なすべてのラベルとタグが含まれています
        4. Durgesh Thakkar と Karuna Singh とのミーティングを設定して、変更/レシピ/Issue を確認してください。

**便利なリンク**

- [Integrations チームの仕事の進め方](/handbook/business-technology/enterprise-applications/integrations/)

### マイルストーン MR

マーケティングオペレーションチームは、ハンドブック全体で複数の更新を行い、1 つの MR で高レベルの更新を確認し、お互いに競合を避けるため、マイルストーン MR と呼ばれる集合マージリクエストを使用しています。[こちらが例](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/71109) です。説明にすべての主要な変更を GitLab ユーザー名でコミット後にリストし、コミットがクローズする関連 Issue をリンクします。マーケティングオペレーションのハンドブックに更新がある場合は、お気軽に当社のマイルストーン MR を使用してコミットを行い、競合を避けるためにレビュー用にタグ付けしてください。

## ステークホルダーマッピング

ステークホルダーマッピングは、ロールを定義し、チーム間でクロスファンクショナルな責任を委任するためのツールです。ステークホルダーマッピングは、マーケティング全体の主要な機能と仕事を、主要なマーケティングオペレーションのステークホルダー、マーケティングオペレーションチームメンバーのサポートチーム、マーケティングオペレーション以外のステークホルダーと結びつけます。ステークホルダーマッピングの主な目的は、マーケティングオペレーション施策の戦略的方向性を設定することに関与するステークホルダーを特定し、結びつけることです。

ステークホルダーマッピングはゲートキーピングの方法ではなく、コミュニケーション、コラボレーション、効率を抑制することを意図したものでもありません。特定の機能は、その機能にマッピングされた戦略的パートナーまたはサポートチームメンバーとのみコミュニケーションを取ることに限定されません。同様に、特定の機能の戦略的パートナーまたはサポートチームメンバーではないマーケティングオペレーションチームメンバーも、さまざまな方法でその機能をサポートできます。

### ステークホルダーマッピングが重要な理由

ステークホルダーマッピングは、マーケティングオペレーション施策の戦略的方向性を設定するためのプロセスを正式化するのに役立つため重要です。ステークホルダーマッピングは、マーケティングオペレーションがステークホルダーが直面する課題と機会をよりよく理解するのを助け、マーケティングオペレーションチームがより積極的なビジネスパートナーとなり、戦略的プロジェクトを計画し提供する能力を高めることができるようにします。

加えて、ステークホルダーマッピングは Marketing Operations とステークホルダーの間に、より緊密な整合を作り出します。これは、ステークホルダーに特定の連絡先と、戦略的施策で協力できる予測可能なケイデンスを提供します。

#### 戦略的パートナーであることの意味

戦略的パートナーは、マッピングされた機能から戦略的機会を理解、文書化、共有するための主要な連絡先です。これは、典型的には会計年度ごとに 2 回行われる Marketing Operations Discovery research を通じて行うことができます。

Discovery research の発見は、マーケティングオペレーションのロードマップとバックログのインプットとして使用されます。

### サポートチームメンバーであることの意味

サポートチームメンバーは、典型的には機能内の特定のユースケースまたはエリアにおける主題専門家です。サポートチームメンバーは Discovery research に参加し、追加の洞察を捕捉するために、特定の焦点エリアに向けた質問をすることが推奨されます。サポートチームメンバーは、典型的には Discovery research コール中のノート取りを担当します。

### Discovery research とは何か、どのように実施するか

Discovery research は、ユーザーについてもっと学ぶ方法です。私たちのユーザーは、ティア 1 およびティア 2 のマーケティングテクノロジーを使用するマーケティング部門のメンバーです。Discovery research は、同期インタビューまたは非同期で実施できます。可能な場合は、関係を構築し、リアルタイムでフォローアップ質問ができるため、同期インタビューが推奨されます。Discovery research コールは、戦略的パートナーとステークホルダーの裁量で四半期ごとに行われるべきです。

#### Discovery research の洞察は何に使用されるか

Discovery research コールからの洞察は、Marketing Operations の戦略的計画とロードマッピングに情報を提供するために使用されます。

## <i class="fas fa-file-import" id="biz-tech-icons"></i> リストインポート

[リストインポート](/handbook/marketing/marketing-operations/list-import)

## <i class="fas fa-toolbox" id="biz-tech-icons"></i> マーケティングテクノロジースタック

### マーケティングテクノロジーの階層化システム

Marketing Operations チームは、リクエストの優先順位付け、サポートの提供、プロセスの最適化のために [マーケティングテクノロジー階層化システム](/handbook/marketing/marketing-operations/marketing-technology-tiering-system/) をメンテナンスしています。

### スタック内のツール

GitLab のすべてのツールの SSoT は [Tech Stack Applications ページ](/handbook/business-technology/tech-stack-applications/) です。

私たちは、効率、データの正確性を生み出し、追加機能を提供するために、新しいツールを常に評価しています。問題点があるか、さらに探索したい新しいテクノロジーに出会った場合は、ツール評価 Issue を作成してお知らせください。現在のリストを確認するには、`Ops Tool Evaluation` ラベルを使用するか [こちら](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Ops%20Tool%20Evaluation&first_page_size=20) をクリックしてください。また、[セクションに記載されている](/handbook/marketing/marketing-operations/#new-tool-purchase-process) プロセスと指示に従ってください。

Tech Stack の補完として、ティア 1 およびティア 2 のツールを顧客ジャーニーに沿った [マーケティングテクノロジースタック](https://docs.google.com/presentation/d/1K2BOlZNYmN4DdufC_OrVUe1HaJgjlKpsnVc-Gd-gb-o/edit?slide=id.p#slide=id.p) として視覚化したものを作成しました。

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRw2uP4L3iNIzfQfrkohsvpNnCGex7Qu1LRov6bpAH2S-l9aU5zO6qmZO1flMGqoii-CO2V8GxrcPx8/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

以下は、ティア別に整理されたマーケティングテクノロジースタック内のツールです。

#### ビジネスクリティカルテクノロジー - ティア 1

- [6sense](/handbook/marketing/marketing-operations/6sense/)
- [Bizible / Marketo Measure](/handbook/marketing/marketing-operations/bizible/)
- [Cognism](/handbook/marketing/marketing-operations/cognism/)
- [Iterable](/handbook/marketing/marketing-operations/iterable/)
- [Marketo](/handbook/marketing/marketing-operations/marketo)
- [Outreach](/handbook/marketing/marketing-operations/outreach/)
- [Goldcast](/handbook/marketing/marketing-operations/goldcast/)
- [PathFactory](/handbook/marketing/marketing-operations/pathfactory/)
- [Qualified](/handbook/marketing/marketing-operations/qualified/)
- [Traction](/handbook/marketing/marketing-operations/traction-lead-complete)
- [ZoomInfo](/handbook/marketing/marketing-operations/zoominfo/)
- [Impartner - MDF and Lead Sharing](/handbook/marketing/marketing-operations/impartner/)

#### オペレーショナルテクノロジー - ティア 2

- [Allocadia](/handbook/enterprise-data/marketing-analytics/allocadia/)
- [Hightouch](/handbook/marketing/marketing-operations/hightouch/)
- [LinkedIn Sales Navigator](/handbook/sales/training/social-selling/)
- [OneTrust](/handbook/marketing/digital-experience/onetrust/)
- [RingLead](/handbook/marketing/marketing-operations/ringlead/)
- [Mutiny](/handbook/marketing/marketing-operations/mutiny)
- [JiffleNow](/handbook/marketing/marketing-operations/jifflenow/)
- [Google Analytics](/handbook/enterprise-data/marketing-analytics/google-analytics-4)

#### マネジメントテクノロジー - ティア 3

- [Litmus](/handbook/marketing/marketing-operations/litmus)
- [Brilliant Gifts](/handbook/marketing/marketing-operations/brilliant/)
- [OpenSense](/handbook/marketing/marketing-operations/opensense/)
- [BeeFree](/handbook/marketing/marketing-operations/beefree/)

#### 機能テクノロジー - ティア 4

- [Bitergia](/handbook/marketing/developer-relations/workflows-tools/) (Developer Relations)
- [Canva](/handbook/marketing/brand-and-product-marketing/design/#canva-best-practices) (Brand)
- [Common Room](/handbook/marketing/developer-relations/workflows-tools/) (Devoper Relations)
- Figma (UX)
- [Optimizely](/handbook/marketing/digital-experience/optimizely/)
- [MeetUp](/handbook/marketing/developer-relations/workflows-tools/)
- [SEMRush](/handbook/marketing/inbound-marketing/search-marketing/seo-strategy/) (Search Marketing)
- [Similarweb](/handbook/marketing/marketing-operations/similarweb) (Search Marketing)
- [EveryOne Social](/handbook/marketing/integrated-marketing/digital-strategy/social-marketing/team-member-social-advocacy/#team-member-social-media-advocacy-and-enablement)
- [Vimeo](/handbook/marketing/marketing-operations/vimeo/) (Brand)
- [Zendesk Community](/handbook/marketing/developer-relations/workflows-tools/)

### 既存ツールへのアクセスのリクエスト

ほとんどのツールはプロビジョニングのために Lumos に移行されています。Lumos でツールを見つけられない場合は、ビジネスオペレーションハンドブックに記載されている [アクセスリクエストプロセス](/handbook/security/corporate/end-user-services/access-requests/access-requests/) に従ってください。

スタック内のツールへのアクセスが必要なコントラクターまたはコンサルタントと作業している場合は、調達ハンドブックに記載されている [プロフェッショナルサービスアクセスリクエストプロセス](/handbook/finance/procurement/) に従ってください。

## ツールユーザー管理

技術所有者は、四半期ごと、半期ごと、および一部のツールでは毎月のユーザー監査を実施するべきです。チームメンバーが 45 日（Zoominfo は 30 日）以上ツールを積極的に活用していない場合、メールまたは Slack（Zoominfo の場合）による通知から 5 営業日以内にそのツールへのアクセスが取り消されます。アクティビティはツールの技術所有者によって取得されたユーザーレポートによって決定されます。これらのレポートは、Issue ラベル `Mktg Tool Audit` を持つ Marketing Ops プロジェクトの Issue を表示することで見つけることができます。レポートは Marketing Ops プロジェクトの監査 Issue テンプレートを利用します。取り消されたツールへのアクセスを再取得するには、チームメンバーは新しいアクセスリクエストを提出し、標準のアクセスリクエスト手順に従う必要があります。ただし、追加のシートを購入するべきと判断されない限り、ユーザーシートは先着順となります。

### Tech Stack ステータスページ

以下は、いくつかのリストされた MktgOps DRI ツールのステータスページへのリンクのコレクションです。クリックできないリンクは、利用可能な Web ページの 2023 年のレビュー時点で **公式** ステータスページを提供していませんでしたが、Web ページの稼働時間チェックをサービスとして提供する **非公式** および **無関係** な Web サイトがいくつかあります。たとえば、www.isitdownrightnow.com、www.downdetector.com、www.downforeveryoneorjustme.com です。停止中と思われる場合はこれらのサイトで自由に検索してください。ただし、公式ソースほど正確ではない場合があることに留意してください。

<details>
<summary markdown='span'>
利用可能なステータスページ URL のドロップダウンリストを表示するにはクリック。
</summary>

- [Asana](https://status.asana.com/)
- [Marketo/Marketo Measure (formerly Bizible)](https://status.adobe.com/products/503491)
- [Qualified](https://status.qualified.com/)
- [LinkedIn Sales Navigator](https://www.linkedin-apistatus.com/)
- [PathFactory](https://status.pathfactory.com/)
- [Opensense](https://status.opensense.com/)
- [ZoomInfo](https://status.zoominfo.com/)
- [Allocadia](https://support.allocadia.com/hc/en-us/sections/115001724228-System-Maintenance-Alerts)
- [Iterable](https://status.iterable.com/)
- [Litmus](https://status.litmus.com/)
- [OneTrust](https://status.onetrust.com/)
- [Hightouch](https://status.hightouch.io/)
- [Outreach](https://status.outreach.io/)
- [Goldcast](https://status.goldcast.io/)
- [Aceelevents](https://status.accelevents.com/)

</details>

### マーケティングテクノロジー予算所有者の更新プロセス

- 更新の議論のタイミングはティアによって決まります。
- 承認された新しいソフトウェアについては、Zip Request に添付するビジネスケースを作成します（[例](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/6171)）。
- 調達と共に 2 年ごと、または 50K ドル以上のツールごとに RFP を提出します。
- 契約締結前に、新しいツールまたは新機能の POC を実施します。
- 自動更新なし

調達およびファイナンスとの整合:

- 調達と協力して契約を構築・交渉します。また、競争力のある価格設定のために複数のベンダーと RFP を実施します。
- ファイナンスと整合し、FY24 で予算が計上されていることを確認します。

Marketing Operations の役割:

- Marketing Operations は要件の定義を支援し、信頼できるアドバイザーとなります。
- 新しいソフトウェア評価のために Issue を提出します（[例](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/6513#note_1079813146)）。

## MarTech 変更管理

### 新しいツール購入プロセス

新しいツールをテックスタックに追加することを希望する場合、または興味がある場合は、Marketing Operations リポジトリの [tools eval Issue テンプレートを使用して Issue を提出してください](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=tools_eval)。Marketing Operations は、システム統合や予算などを考慮するため、すべての新しいツール評価に含まれる必要があります。予算設定後に必要となる新しいツールは、他の部門から Marketing Operations への予算移転によって処理されます。Issue が提出されると、Marketing Operations はリクエストを評価し、ツールにティアを割り当てます。現在および以前のツール評価を確認するには、[こちらをクリックしてください](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Ops%20Tool%20Evaluation&first_page_size=20)。

新しいツールをリクエストするプロセスは次のとおりです:

1. [Tool Eval Request](https://form.asana.com/?k=1i4lL5h0RLzfTqNWBTH84Q&d=306855239930259) が提出される
1. Marketing Operations メンバーがリクエストをレビューする担当に割り当てられる。この人物は、ティアを決定するためにリクエストされたツールをスコアリングします。ツールのビジネスオーナーと技術オーナーが特定されます。
1. ティア 1 および 2 のツールについては、リクエストがレビューされた後、Marketing Operations マネージャーは:
   - インテイク Issue から関連する詳細を取得して、新しい評価 Epic を作成
   - 新しい Epic をビジネスオーナーと技術オーナーに割り当て
   - インテイク Issue 説明を新しい Epic へのリンクで更新
1. ティア 3 ツールはケースバイケースで処理されます。ツールが広範な評価と Marketing Operations のサポートを必要とする場合、上記のプロセスが適用されます。
1. ビジネスオーナーがティア 4 ツール評価と実装の DRI ですが、Marketing Operations を含める必要があります。

Marketing Ops チーム - 新しいプロジェクト実装のために、Issue と Epic 作成を効率化するための DAP プロンプトを [こちら](https://docs.google.com/document/d/1z0JWKHOcfwWS0VmoOO577sxKguun4oQJj4tvf3jVpRk/edit?tab=t.0) で活用してください。

評価 Epic が作成された後、以下の評価ステップに従う必要があります:

1. Discovery - 私たちが解決しようとしているリクエスト/問題を理解する
1. ステークホルダー特定 - 以下に概説されている役割と責任に基づいて評価チームを構築する
1. 要件収集 - [この要件収集テンプレート](https://docs.google.com/spreadsheets/d/1JsUcCnePqWnc8ownZQEsjsDtMea6pLPk2k-6TV3M_uI/edit#gid=0) を使用して、ユーザーストーリー、要件、影響を受けるプロセス、機能を文書化する
1. 評価 - デモに参加し機能を比較する
1. ステークホルダー整合 - 選択するベンダーについてステークホルダーを整合させる
1. プライバシーとセキュリティのレビュー - 選択されたツールが準拠していることを確認する
1. 交渉と調達
1. 実装
1. 実装後レビューとレトロ

### 役割と責任

| 役割 | 責任 |
| ------ | ------ |
| **技術オーナー** | ツール評価のファシリテーターを務める |
| | 規範を確立する（ミーティングの頻度、ステータス更新、結果のコミュニケーションなど） |
| | 技術要件が文書化されており実現可能であることを確認する |
| | ツール評価中に特定されたリスクや競合を文書化・報告する |
| | ミーティングをファシリテートし、評価の運用効率を支援する |
| **ビジネスオーナー** | ツール評価 Issue を完成させる |
| | 要件とユーザーストーリーを文書化し、ツールに対する承認を取得する |
| | レビューし、すべてが期待通りに機能するよう承認を提供する |
| **リーダーシップスポンサー** | プロジェクトに関与し続け、リードをサポートし、エスカレーション（必要な場合）をサポートする責任を負う |
| **ピアレビュアー（任意）** | リクエストされた変更が文書化されており、文書化されていないダウンストリームの影響がないことをレビューし確認する |
| **実装後レビュアー（任意）** | 変更が行われた後、本番での変更をレビューし、すべてが期待通りに機能していることを確認する |

#### リソース

1. [要件収集テンプレート](https://docs.google.com/spreadsheets/d/1JsUcCnePqWnc8ownZQEsjsDtMea6pLPk2k-6TV3M_uI/edit#gid=0)
1. [週次実装更新テンプレート](https://docs.google.com/document/d/10-C4ZP_GTmG164-1DwV_KPDlcxpIknfPrq0Qv1TccKQ/edit#)
1. [Epic&Issue 作成プロンプト](https://docs.google.com/document/d/1z0JWKHOcfwWS0VmoOO577sxKguun4oQJj4tvf3jVpRk/edit?tab=t.0)

## リードスコアリング、リードライフサイクル、MQL 基準

リードライフサイクルの詳細については、[このハンドブックページ](/handbook/marketing/marketing-operations/lead-lifecycle/) を参照してください

Marketing Qualified Lead (MQL) は、人口統計/属性および/または行動情報に基づいて、当社が決定した特定の閾値（累計 100 ポイント）に達したリードです。`Person Score` は、ポジティブまたはネガティブなポイント値で重み付けされたさまざまなアクションおよび/またはプロファイルデータで構成されています。スコアリングモデルの詳細については、[Marketo ページ](/handbook/marketing/marketing-operations/marketo/#scoring-models) を参照してください

### MQL SLA とは何か?

SLA（または Service Level Agreement）は、MQL となり Sales Development Representative にルーティングされたリードがアクションされる合意された時間です。現在、SLA 時間は 2 営業時間に設定されています。SLA レポート機能の動作の詳細については、[こちら](/handbook/marketing/marketing-operations/mql-sla) を参照してください。

## キャンペーンとプログラム

キャンペーンは、フィールドイベント、ウェブキャスト、コンテンツダウンロードなどのマーケティング戦術の活動を追跡するために使用されます。キャンペーンタイプは、マーケティングがどのように支出を追跡するかと整合し、一貫した追跡のためにレコードがどのように 3 つのコアシステム（Marketo、Salesforce、Bizible）にわたって追跡されるかと整合しています。キャンペーンを活用することで、マーケティング、セールス、ファイナンス間で取り組みが整合されます。

すべてのキャンペーンタイプ、進行ステータス、コスト追跡を確認するには、[キャンペーンとプログラムのページ](/handbook/marketing/marketing-operations/campaigns-and-programs/#campaigns) に移動してください。そのページには、Marketo と Salesforce でのセットアップ手順も含まれています。

Marketing Ops は Field Marketing および Corporate Events チームと提携し、Marketo プログラムのセットアップと構成を提供し、これらのチームが目標を達成するための最適な技術セットアップに関するアドバイスを提供する内部パートナーとなり、より複雑なプログラム要件を合理化します。詳細は [Marketo Program/Campaign Support ページ](/handbook/marketing/marketing-operations/campaign-operations/) を参照してください。

## メール管理

Marketing Ops はメールマーケティングデータベースの維持を担当しています。ポリシーや詳細情報については [メール管理ページ](/handbook/marketing/marketing-operations/email-management) に移動してください。

## 初期ソース

`Initial Source` は、最初の「既知」のタッチアトリビューション、つまり Web サイト訪問者がデータベース内の既知の名前になる時のことです。一度設定すると、決して変更または上書きされるべきではありません。このため、Salesforce は `Initial Source` フィールドを更新できないように設定されています。レコードをマージする場合は、最も古い（または最初に設定された）`Initial Source` を保持してください。Marketo の `Initial Source` は `Person Source` という名前で、空の場合のみ更新されるべきです。

[このシートが Initial Source の SSOT です](https://docs.google.com/spreadsheets/d/1s0n1vrcROrG7qjJ55hz3qs5UyOLvSO-ljEx4IT5ENf4/edit?usp=sharing)。これらの初期ソースのいずれかを使用せずに Salesforce にリードまたはコンタクトをアップロード/インポートしようとすると、検証ルールエラーが発生します。

新しい Initial Source を追加したい場合は、Mops の誰かに [このシートに追加する](https://docs.google.com/spreadsheets/d/1s0n1vrcROrG7qjJ55hz3qs5UyOLvSO-ljEx4IT5ENf4/edit?gid=2063842207#gid=2063842207) よう依頼してください。新しい初期ソースとバケットが追加されると、自動的にレポーティングに反映されます。使用する前に SFDC に追加するために、sales systems の Issue も必要となります。

## Lead と Contact のステータス

Salesforce の Lead および Contact オブジェクトは、以下の定義で統一されたステータスを持っています。ステータス間の遷移方法については [Re-MQL workflow](/handbook/marketing/marketing-operations/marketo/#re-mql) も参照してください。lead/contact ステータスや Lifecycle Classification を含む当社のライフサイクル管理についての詳細は、[こちら](/handbook/marketing/marketing-operations/lead-lifecycle/) を参照してください。

| ステータス | 定義 |
| ------ | ---------- |
| Raw | 未接触の見込み客、デフォルトステータス |
| Inquiry | レコードが GitLab に連絡先情報を提供するために具体的にアクションを取った |
| MQL | 体系的な手段で Marketing Qualified された |
| Accepted | 積極的に lead/contact に連絡を取ろうとしている |
| Qualifying | lead/contact と双方向の会話中 |
| Qualified | セールスファネルの次のステップに進む（典型的には SAO が作成され Sales チームへハンドオフ） |
| Disqualified | 連絡先情報が現在も将来も有効ではない; スパムフォーム入力 |
| Recycle | レコードは現在、当社のサービスや購入の会話の準備ができていない、おそらく後で |
| Bad Data | 不正なデータ - 他の手段で連絡するための正しいデータを見つけるために調査される可能性がある |
| Ineligible | 初回レビュー後にセールスプロセスを通過する資格のないすべての lead/contact |

リードが `Raw` から `Inquiry` に移行するには、以下のいずれかが発生する必要があります

1. マーケティングプログラムのメンバーになる（無アクション/デフォルトステータスは除く、メールも除く）
1. フォームを送信（ソーシャルまたは Web サイト）
1. [Behavior score](/handbook/marketing/marketing-operations/marketo/#behavior-scoring) > 10 ポイント。

## Lead Address フィールド

lead オブジェクトには 3 種類の住所情報があります。`Person Address`（住所タイプフィールド）に保存される、そのリードのローカル/個人的な住所情報、`Company Address: [XXX]` テキストフィールドに保存される `Ultimate Parent Account Company` 情報、および Contact（ローカル情報）と Company レベル情報の両方の `Zoominfo enrichment address information` です:

- `Person Address` は Marketo フォーム入力から部分的に入力され、欠けている場合は ZI エンリッチメントによって完成されます;
  - これは Marketo がメールリストで参照する住所です。フォーム入力、リストアップロード、または ZI エンリッチメントを通じて既知の場合、レコードのローカル住所が含まれます。
- `UPA Company Address` - `Company Adress: Country`、`Company Adress: State`、`Company Adress: City`、`Company Adress: Street`、`Company Adress: Postal Code` テキストフィールドに保存されます。これらのフィールドは、3 段階のウォーターフォールアプローチで APEX コードを通じて更新されます。
  1. `Account Demographics Fields`（例: `Account Demographics: UPA City`） - リードが既存のアカウントに一致する場合、住所はこのリードに関連付けられたアカウントから取得した Account Demographic フィールドを通じて入力されます;
  2. `Admin Override Fields`（例: `[Admin] Company Address Country`） - リードがアカウントに一致しない場合、Company Address フィールドは空白か、ウォーターフォールのステップ 3（以下参照）を通じて入力されます。住所が空白か、ステップ 3 からの住所情報が間違っている場合、SDR/BDR はこれらの Admin Override フィールドを使用して住所情報を自分で更新できます。このプロセスの詳細については、[Sales Dev Handbook の Overriding Incorrect Account Assignments セクション](/handbook/marketing/sales-development/#scheduling-iqms) または [動画](https://www.youtube.com/watch?v=QT-oOceFU6k&ab_channel=GitLabUnfiltered) を参照してください。
  3. `Zoominfo Company Address Fields`（例: `[ZI] Company Country`） - リードがアカウントに一致せず、上記の Admin Override Fields を使用して上書きされておらず、リードが Zoominfo のデータベースに一致する場合、Company Address フィールドは Zoominfo Company Address フィールドからの Zoominfo Company Address 情報で入力されます。
- `Zoominfo enrichment address information` は、個人（ローカル）または会社レベルの住所の 2 つのタイプがあります;

1. Zoominfo 個人（ローカル）住所情報は、`[ZI] Contact Country`、`[ZI] Contact State`、`[ZI] Contact City`、`[ZI] Contact Street`、`[ZI] Contact Zip Code` フィールドにあります;
2. Zoominfo Company Address 情報は、`[ZI] Company Country`、`[ZI] Company State`、`[ZI] Company City`、`[ZI] Company Street`、`[ZI] Company Zip Code` フィールドにあります;

## データクリーンリネスとエンリッチメントプロセス

Marketing Operations は、最も完全で最新の情報で lead/contact のデータベースをクリーニングし、エンリッチする責任があります。

このプロセスのクリーニング部分は、lead/contact 重複排除ツール Ringlead の Cleanse 機能で行われます。

エンリッチメント部分は、データ追加/エンリッチメントツール [Zoominfo](/handbook/marketing/marketing-operations/zoominfo/) を使用して行われます。これは、アカウント/lead/contact データに関する SSoT です。[Cognism](/handbook/marketing/marketing-operations/cognism/) は別のエンリッチメントツールですが、当社のリードデータの小規模なサブセット用です。現時点では、BDR と Cognism 管理者のみがログインアクセスを持っています。ただし、Cognism データは lead/contact レイアウト上の Cognism フィールドで確認できます。

このクリーニングとエンリッチメントプロセスには 5 つの主要な優先事項があります:

1. **Marketo Webhook で純新規 Marketo リードをエンリッチ** - Marketo を通じて作成されたすべてのリードは、即座に ZI データでエンリッチされます。
2. **リードのインスタントエンリッチ** - SFDC で新しいリードが作成されると、Instant Enrich 機能が起動し、レコードの **[ZI] フィールド** が作成時にエンリッチされます。
3. **スケジュールエンリッチで純新規リードをエンリッチ** - Instant Enrich 機能のバックアップとして（何らかの理由で失敗した場合）、過去 24 時間以内に作成されたすべてのリードはスケジュールエンリッチメントを通じてエンリッチされ、最も更新された情報が含まれていることを保証します。
4. **既存データベースのエンリッチメント** - SFDC のすべてのリードレコードは、役割/会社を変更するリードが最新の情報で更新されることを保証するために、定期的にエンリッチされます。
5. **データのクリーンリネスと正確性の保証** - Marketing Operations チームは、以下に詳述されている推奨される重複排除の操作順に従います:
    - Lead 対 Lead の重複排除（異なるツールによって作成された重複を修正するため _一時停止_）
    - Account 重複排除（この部分は現在 Sales Operations によって Openprise を使用して実行されています）
    - リードを新しいコンタクトに変換（このステップは、セールスワークフローに大きく影響するため、私たちのケースではスキップされます。セールスチームが今のように lead に重点を置いていない場合、再評価します）
    - Contact 対 Contact の重複排除（注文処理とオープン見積もりに対する不要なコンタクトマージの影響をテスト中）
    - Lead 対 Contact の重複排除（このプロセスの一部は、Contact 重複排除が完了したら開始されます）
    - カスタムオブジェクトの重複排除（Bizible Person ID - Contact 重複排除と Lead 対 Contact 重複排除が完了するまで保留中）

データ重複排除プロセスの詳細については、[Ringlead Handbook ページ](/handbook/marketing/marketing-operations/ringlead/) を参照してください。

**クリーニングとエンリッチメントの頻度:** 純新規リードのエンリッチメントジョブは継続的に動作しますが、SFDC の既存の lead と contact のエンリッチメントについては、以下のようにスケジュールされたエンリッチメントジョブを通じて行われます:

1. すべてのリードは、月の最後の土曜日に毎週エンリッチされます。
2. 過去 7 日以内に作成されたすべてのリードは、リストアップロードからの新しいリードがエンリッチメントを逃さないように、また、セールスチームが作業時に最新の情報を持つように、毎日エンリッチされます。
3. SFDC インスタンスのすべての contact は、月の最後の土曜日に毎週エンリッチされます。

エンリッチメントプロセスの詳細については、[Zoominfo Handbook ページ](/handbook/marketing/marketing-operations/zoominfo/) を参照してください。

### Lead リストアップロードエンリッチメント

SFDC にリードをアップロードできるようにするには、リードがメールアドレスを持っていることが必須です。メールアドレスが利用できない状況に遭遇することがあります。

この課題を回避し、リードを SFDC にアップロードできるようにするには、この [リクエストフォーム](https://form.asana.com/?k=1i4lL5h0RLzfTqNWBTH84Q&d=306855239930259) で **List Upload - Enrichment Request** を作成し、CSV ファイルを Issue にアップロードしてください。Mops は **Zoominfo Enhance**、**Zoominfo ListMatch**、**Cognism Enhance** 機能を使用して、これらのレコードを最新の情報（メールアドレスを含む）でエンリッチします。

**注意:** メールアドレスのないリードリストアップロードで、Zoominfo/Cognism エンリッチメントを通じて後にメールアドレスがエンリッチされたようなレコードは、`Opt-out` としてマークする必要があります。**これらの個人は連絡可能であるという明示的な同意を当社に提供していない** ためです;

### テストリードのクリーニング

テストプロセスと自動化は、当社のシステムの品質保証にとって極めて重要です。

テスターとして、プロセスが期待通りに動作することを確実にするためにテストリードを作成します。これらのテストリードは実際のレコードに混在し、レポートに不正確さを引き起こします。Marketing Operations は、テストリードを発見・削除しやすくするためのベストプラクティスを作成しました。

次にプログラムをテストするときは、`Job Title` = `Test` に設定することを忘れないでください。そうすれば、迅速に削除されます。

テストリードに気づきましたか? Marketing Operations チームに [Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new) を開いてください。

## コミュニケーションコンプライアンスベストプラクティス

### 内部 DNC（Do Not Call）リスト

内部 DNC リストは、lead/contact レコードレイアウトの `Do Not Call` チェックボックスを使用してメンテナンスされます。sales development 組織は、このボックスをいつ、どのコンテキストでチェックすべきかについて明確なプロセスを持っています。詳細については、[Sales Development Handbook ページ - Cold Calling Checklist](/handbook/marketing/sales-development/#cold-calling-and-email-checklist) セクションを参照してください。

### 外部 DNC（Do Not Call）リスト

国際的な DNC（Do Not Call）規制に準拠し、訴訟リスクを最小限に抑えるため、外部 DNC リストに表示されるレコードが電話で連絡されないことを確実にするためのプロセスが実装されました（これは `Direct Dial Phone Numbers` と `Mobile Phone Numbers` の両方に適用されます）。

この情報は、Zoominfo の助けで当社に渡されます。Zoominfo は、電話番号が外部 DNC リストにあることが判明した場合、`[ZI] Do Not Call - Direct Phone` および `[ZI] Do Not Call - Mobile Phone` フィールドに `Yes` 値を入力します。

Marketo 自動化を使用して、これら 2 つのフィールドを使用して、次のフィールドの電話番号情報を非表示にしています: `[ZI] Phone Number`、`Phone`（標準フィールド - `[ZI] Phone Number` 値と一致する場合のみ）、`[ZI] Mobile Phone Number`、`Mobile Phone`（標準フィールド - `[ZI] Mobile Phone Number` 値と一致する場合のみ）。

詳細については、この [figjam フローチャート](https://www.figma.com/file/wzZ7RDnB1cZdnvusqwW5gN/Communication-Compliance---Process-Updates---External-DNC-Lists_2023-09-11_14-17-56?type=whiteboard&t=5P5tqzwIXFwJe8jd-1) を参照してください。

#### Do Not Do Business

場合によっては、当社が取引しない会社があります。アカウントがフラグ立てされている場合、Mops は今後それらが当社の通信に含まれないことを確実にするために、以下の手順を実行する必要があります。

1. 顧客アカウントを Marketo の [DNDB campaign](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC34761A1ZN19) に追加します。SFDC Account ID を使用し、その会社固有の場合はメールドメインで `contains` を更新します。Schedule > `Run once` をクリックします。（これは毎晩も実行されます。）このフローは lead/contact を `unsubscribe` に更新し、Security Distro から削除し、メールを無効としてマークし、`Do Not Call` としてマークし、person status を `Ineligible` に更新し、理由を `ECCN - Do Not do Business` としてマークします
2. メールアドレスについて Iterable をチェックする必要はありません。`unsubscribe = true` になると、Marketo が webhook を介して Iterable に unsubscribe を自動的に送信するため、API 経由で削除されます。

### Zoominfo Opt Out リスト

[Zoominfo](/handbook/marketing/marketing-operations/zoominfo/) は、当社の lead/contact およびアカウントのデータエンリッチメントに関する SSoT です。

最新のプライバシーポリシーに準拠し、潜在的な訴訟からデータベースを保護するため、Zoominfo のデータベースからオプトアウトしたコンタクトに対する Zoominfo の推奨は次のとおりです:

>これらのコンタクトレコードのいずれかを ZoomInfo からダウンロードした場合、または内部システムにアップロードした場合は、当該人物の個人データを保有および使用する独立した法的根拠がない限り、それらを削除する必要があります。

**注意:** これは、現時点で既存のビジネス関係を持っていない lead/contact にのみ適用されます

GitLab のプライバシー部門と協力した結果、当社のデータベースから当該コンタクトを削除するためのプロセスを作成することが決定されました。

現在のプロセスは毎週行われ、Marketo プログラムの助けで実装されています。Zoominfo によって入力される `Zoominfo Non-Matched Reason` フィールドを活用しています。`OPT_OUT` 値を持つすべての lead/contact がプロセスに入り、保持される独立した法的根拠として認められる可能性のある追加のアクティビティをチェックされます。そのようなアクティビティが欠けている場合、データベースから削除されます。

詳細については、この [figjam フローチャート](https://www.figma.com/file/wzZ7RDnB1cZdnvusqwW5gN/Communication-Compliance---Process-Updates---External-DNC-Lists_2023-09-11_14-17-56?type=whiteboard&t=5P5tqzwIXFwJe8jd-1) を参照してください。

ご質問やご懸念がある場合は、お気軽に Marketing Operations チームに [Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new) を開いてください。
