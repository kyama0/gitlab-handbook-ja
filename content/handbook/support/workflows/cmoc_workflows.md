---
title: CMOC業務の遂行方法
category: On-call
description: "Support EngineeringにおけるIncident CMOCローテーションの役割と責任について説明します"
upstream_path: /handbook/support/workflows/cmoc_workflows/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:14:55Z"
translator: claude
stale: false
---

## はじめに

GitLab SaaS Incident [Communications Manager on Call (CMOC)](/handbook/engineering/infrastructure-platforms/incident-management/#incident-response-roles) として、あなたはインシデント中、ユーザーおよびステークホルダーに対するGitLabの声となります。これを効果的に行うため、主に [Incident Manager (IM) と Engineer on Call (EOC)](/handbook/engineering/infrastructure-platforms/incident-management/#incident-response-roles) と協力し、[ステータスページ](https://status.gitlab.com/)（[Status.io](https://status.io) で動作）、Slack、Zendesk、incident.io、およびGitLab自体の組み合わせを使用します。CMOCローテーションは、[GitLab Support On-call](/handbook/support/on-call) を構成するローテーションの1つです。

他のページでこの用語を区別するため、頭字語ICMOCを目にしたり、この役割が「Incident CMOC」と呼ばれているのを目にすることがあります。このページではこの役割のみを対象としているため、CMOC、Incident CMOC、ICMOCを同じ意味で使用しています。

私たちのSlackボット [Woodhouse](https://gitlab.com/gitlab-com/gl-infra/woodhouse) は、[Status.io](https://status.io) でインシデントを素早く立ち上げるためのコマンド（`/woodhouse incident post-statuspage`）を提供しています。それ以降、Status.ioでインシデントを更新・クローズする基本的な方法は、Status.ioの [Incident Overview](https://kb.status.io/incidents/incident-overview/) ドキュメントでカバーされています。このドキュメントでは、GitLabがそれらのタスクを遂行するためにStatus.ioをどのように具体的に使用するかを説明します。

### CMOC PagerDutyローテーションへの追加方法

CMOCローテーションに追加されるには:

1. まず、[GitLab-com CMOCトレーニングモジュール](https://gitlab.com/gitlab-com/support/support-training/-/issues/new?description_template=GitLab-com%20CMOC) を完了します。
1. マネージャーと話し合い合意した後、新しい [PagerDuty Issue](https://gitlab.com/gitlab-com/support/support-ops/other-software/pagerduty/-/issues) を作成し、適切なリージョンのCMOCローテーションへの追加をリクエストします。

## 知っておくべきこと

開始する前に、以下のセクションを参照するか、ワークフローに直接進む場合は [Incident Management](#incident-management) から始めてください。

### インシデントについて

このセクションでは、インシデントがどのように開始されるか、PagerDutyの各種ステータスメッセージの意味、およびインシデント中のEOCとIMの違いに固有の情報を扱います。

#### インシデントの宣言方法

Infrastructureチームは [incident.io](https://incident.io/) を使って [Slackからインシデントを宣言](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident) します。これにより、次のことが行われます:

1. EOC、IM、CMOCに自動的にページが送信されます。
1. [Production](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/) Issueトラッカーにインシデント用のIssueが作成されます。
1. インシデント専用のSlackチャンネルが作成されます。また、インシデントのZoom通話およびincident.ioのホームページが生成され、プライベートコメントとタイムラインが追跡されます。詳細は [こちら](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/incident-io-onboard/incident-management.md?ref_type=heads) を参照してください。

この情報はすべて、incident.io によって `#incidents` チャンネルにSlackで投稿され、次の例のような形で表示されます。

![Incident declared by incident.io](/images/support/cmoc_incident_declared.png)

GitLabのチームメンバーは、GitLab.comがインシデントに直面しそうだと疑った場合、この方法でインシデントを報告することが推奨されています。

#### PagerDutyステータスの定義

- **Triggered** -「CMOCの注意を必要とするインシデントが存在する。」
- **Acknowledged** -「ページを確認し、インシデントSlackチャンネルとZoom通話に参加するプロセスにある。」
- **Resolved** -「インシデント専用のSlackチャンネルとZoom通話に参加し、Status.ioでインシデントを作成し、社内のステークホルダーに通知し、インシデントIssueにラベルを付け、現在インシデントに対応している。」

**注:** PagerDutyの「Resolved」は、根本的な問題が解決されたことを意味するわけではありません。

#### ステータスページの通信を開始するかの判断: EOC vs. IM

ステータスページを介して公開コミュニケーションを開始するかどうかの決定のDRIはIMです。CMOCとしてインシデントに参加する際は、現時点でコミュニケーションが必要かどうかを尋ねるべきです。まれにインシデントにIMがいない場合、EOCがこの責任を引き受けるため、代わりにEOCに尋ねることもできます。

#### 過去のインシデントのレビュー

現在のインシデントの詳細を記入するための例やインスピレーションが必要な場合は、いつでも [過去のインシデントを確認](https://status.gitlab.com/pages/history/5b36dc6502d06804c08349f7) できます。

### Status.ioについて

#### Current StatusとCurrent Stateの更新

インシデントへの正式な更新を行うことなしに、影響を受けるインフラの `Current Status` やその `Current State` を変更することはできません。最後の更新が公開されてからどれだけ時間が経過していなくても、`Current Status` または `Current State` のいずれかを変更するために、インシデントへの新しい更新を公開することは認められています。

#### 更新頻度

Status.io は、ステークホルダーが知るべきアクティブなインシデントに関する新しい情報を得たときに、いつでも更新する必要があります。それ以外の場合は、以下の表に示すインシデントの重大度に応じた一定の頻度で更新する必要があります。

インシデントのZoom通話に参加したら、Status.ioに加えられた更新内容と更新時刻に注意してください。リマインダー用のタイマーをセットし、次の更新までの時間が示されている場合を除き、以下の時間間隔を厳守してください。たとえば、「monitoring」中であれば、次の更新までに1時間と指定するのが適切な場合もあります。

#### 明確なメッセージと進む道を提示する

{{% alert title="Note" color="primary" %}}
以下の表は **ガイドライン** として使用してください。投稿する実質的な更新がない場合でも、更新頻度に近づいている場合は、その旨を説明する更新を投稿することについてインシデントマネージャーに尋ねることもできます。
{{% /alert %}}

たとえば、問題の解決過程にあり、そのプロセスにある程度の時間（たとえば1時間か2時間）かかることがわかっている場合、その旨を説明する更新を提供し、次の更新がいつ投稿されるかを説明することもできます。

| インシデントステータス | Severity 1 更新頻度 | Severity 2 更新頻度 | Severity 3/4 更新頻度 |
|--|--|--|--|
|Investigating| 10m | 15m | 15m |
| Identified | 10m | 30m | 30m |
| Monitoring | 30m | 60m | 60m |
| Resolved | これ以上の更新は不要 | | |

#### 何を言うべきかわからないときは？

- 持っている最良の情報に基づいて、汎用的な更新を提供します:

- *We're seeing elevated error rates on GitLab.com, investigation is underway in: link*
- *Some users are reporting connection issues to GitLab.com, we're working on it in: link*
- 自分が正しいと思うものの草案を作成します。可能な限り、IMやEOCとコミュニケーションするときは [「I intend to...」言葉遣い](https://www.youtube.com/watch?v=7KnPjakwqeI) を使用します:

  - *@incident-manager - I'm going to post: "We've isolated the network problem to the APAC region and are working with Cloudflare support to get it resolved*.
  - *"In my next update I'm going to move the status to monitoring"*
- 行動に偏る - 前回の更新に誤りがあった場合は、別の更新を投稿できます。

- 報告すべき実質的な更新がない場合でも、人々が私たちが気にかけて取り組んでいることを知れるよう、何かを発信してください。以下にいくつかの例文を示します:
   1. *"No material updates to report. We're discussing if we should restore from backup or let the replica catch up first but we have not made a decision."*
   1. *"No material updates to report. We tried starting the Gitaly servers but we're still missing connectivity."*
   1. *"No material updates to report. We are doing a handover to a new CMOC since the current CMOC has been at it for three hours straight."*
   1. *"No material updates to report. We would like to thank Google for the #hugops tweet we received. LINK"*

- 本当にわからないときは、尋ねることは大丈夫です！

#### Status.io上の管理タスク

GitLab System Statusページへの管理者アクセスが必要となる **ドキュメント化されたインシデント更新以外** のすべての更新は、[このテンプレート](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=Status%20page%20administrative%20task) で開始する必要があります。

このテンプレートは、コンポーネントを更新または追加する必要があるシナリオでCMOC DRIに通知します。コンポーネントを追加または変更する前に、適切な [Reliability Team](/handbook/engineering/infrastructure/team/) のインフラストラクチャ担当者からのレビューを必ず取得してください。

### コンタクトリクエストについて

進行中のインシデントに関連するかどうかにかかわらず、Infrastructure や Security から、異常な使用を検出した場合に1人または複数のユーザーに連絡するよう依頼されることがあります。これらのリクエストに対応するには、[Sending Notices](/handbook/support/workflows/sending_notices/) ワークフローに従ってください。また、コンタクトリクエストの引き継ぎの詳細については [End of Shift Handover Procedure](#end-of-shift-handover-procedure) を参照してください。

### CMOCにページを送る方法

CMOCには [インシデント宣言プロセス](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident) 中にページを送信できます。インシデントが作成された後やその他の理由でCMOCにページを送る必要がある場合は、メインのインシデント管理ハンドブックの [How to engage the EOC, IM or CMOC?](/handbook/engineering/infrastructure-platforms/incident-management/#how-to-engage-response-teams) セクションを参照してください。

### サポート対応の調整について

予期しないお客様への影響をもたらし、Supportによる非標準のワークフローやコミュニケーションを必要とするインシデントが発生した場合は、[Support Response](https://gitlab.com/gitlab-com/support/support-team-meta/-/blob/master/.gitlab/issue_templates/Support%20Response.md) Issue を作成してSupportのアクションと対応を調整してください。

このIssueは、コミュニケーションのガイドラインやワークフローが変化するたびに更新し、Support関連情報の唯一の情報源として保つようにしてください。

### CMOCのパフォーマンス指標

CMOCとしての成功は、以下のパフォーマンス指標によって判断されます:

- **PagerDutyページの確認時間**: すべてのPagerDuty通知を15分以内に確認し、インシデントブリッジに参加します。[Acknowledge the PagerDuty Page](#acknowledge-the-pagerduty-page) を参照してください。
- **ステータス更新間の頻度**: 重大度に応じて、ドキュメントに記載された間隔（または別途連絡された頻度）でステータスページを更新します。[Frequency of Updates](#frequency-of-updates) を参照してください。
- **インシデントごとに作成されたステークホルダーへのコミュニケーションスレッド**: ドキュメント化されたプロセスに従ってインシデントの存在をステークホルダーに伝達します。[Notify Stakeholders](#notify-stakeholders) を参照してください。
- **シフト後に作成された引き継ぎIssue**: 各シフトの終わりに、次のCMOCを準備するための引き継ぎIssueを作成します。[End of Shift Handover Procedure](#end-of-shift-handover-procedure) を参照してください。
- **シフト中に開かれたコンタクトリクエストごとの完了済みコンタクトリクエストIssue**: すべての受信したコンタクトリクエストを完了、引き継ぎ、または完了予定の伝達をします。[About Contact Requests](#about-contact-requests) を参照してください。
- **四半期ごとに1回のトレーニングイベントへの参加**: 少なくとも1回のインシデントに参加するか、トレーニングアクティビティに参加（または企画）します。[CMOC Training Activities](#cmoc-training-activities) を参照してください。

## インシデント管理

CMOCとして、以下の段階を通じてインシデントをガイドします。

1. **Stage 1: Engage** - Status.ioでインシデントを作成し、インシデントZoom通話に参加し、[ステークホルダーに通知](#notify-stakeholders)、インシデントIssueにラベルを付けます。
1. **Stage 2: Manage** - EOCと支援エンジニアによってインシデントを解決するために行われている作業に従いながら、[Frequency of Updates](#frequency-of-updates) のスケジュールを遵守してStatus.ioを更新します。さらに、Zendeskでインシデント用のタグを作成し、チケットにタグ付けして返信します。
1. **Stage 3: Monitor (Situational)** - 問題が再発しないことを確認するために、Status.ioでインシデントを一定期間 **Monitoring** に設定します。この段階は IM の要請でスキップされることがあります。
1. **Stage 4: Resolve** - インシデントを **Resolved** に設定し、Status.io にポストモーテムリンクを追加し、タグ付けと返信が必要なZendeskチケットが残っていないことを確認します。

以下のセクションでは、これらの段階の各ステップをどのように実行するかを概説しており、順番に実行する必要があります。

### **Stage 1: Engage**

PagerDutyページを受信した直後に、以下のすべてのステップを順番に実行します。

#### PagerDutyページを確認する

ページを [acknowledged](#pagerduty-status-definitions) としてマークします。これは、モバイルアプリ、Webインターフェース、または `#support_gitlab-com` SlackチャンネルのPagerDuty Appを通じて行えます。

#### インシデントチャンネルとZoomに参加する

通話へのリンクは、`#incidents` で incident.io によるインシデント宣言の投稿に記載されています。

通話中のあなたの役割は、インシデントが対応されている間、それに沿って進み、求められたとき、または必要なときに Status.io を更新することです。多くの場合、このルームでのやり取りは活発で、特にインシデントの初期段階で問題の原因が発見されている間はそうです。不適切なタイミングで発言しないよう、いつ発言するのが適切かについて最善の判断を使ってください。状況について緊急ではない質問があれば、Slackで通話の参加者にいつでもpingを送ることができます。

#### 最初に参加したとき

最初にすべきことは、ルーム内の他の人にあなたの声が聞こえることを確認することです。これを行うには、次のように発言します:

> "Hi, I'm the CMOC on duty. I intend to send an update, please review this in the Slack thread."
>
> "Hi, I'm the CMOC on duty, how can I help?"

何を発言するにせよ、インシデントの他の側面に集中する前に、自分宛の口頭での確認を必ず受け取ってください。

#### CMOCがアクションを取るよう求められたとき

ときどき、ルーム内で特定のタスクを実行するよう求められることがあります。そのような依頼については、依頼者に対して理解した依頼内容を口頭で繰り返し、必ず確認してください。これは、依頼が聞き取られたことを全員が理解するのに役立ち、また実行されるべきアクションについて全員が同じ理解を持っていることを検証する役割も果たします。

場合によっては、依頼が明示的ではなく暗黙的なこともあります。疑問がある場合は、必ず発言して確認を求めてください。たとえば:

> **IM:** CMOC is here, we need to roll out a first update.

良い対応は、アクションが要求されたかの確認を求めることでしょう:

> **CMOC:** IM, do you want me to send a first update on status.io?

より良い対応は、アクションが要求されたと仮定し、それに対する意図したアクションコースを伝え、依頼者にインプットを提供する機会を与えることです:

> **CMOC:** IM, acknowledged, I will draft an update for status.io and ping you in Slack for input.

#### 関連するGitLab Issueを特定する

`status.io` で共有する場合は、関連するインシデントIssueを特定する必要があるかもしれません。

Issueを特定するには:

- Slackインシデントチャンネルの上部にある `Overview` をクリックします

  ![Incident channel overview](/images/support/incident-channel-overview.png)

- 関連する `incident.io` インシデントページを開きます

  ![Incident IO Link](/images/support/incident-io-link.png)

- GitLab Issueはページの右側にあります

  ![Incident IO Page](/images/support/incident-io-gitlab-link.png)

#### インシデントを作成する

`status.io` のWebサイトを通じて直接インシデントを作成できます。

インシデントがGitLab Duo機能に関連している場合は、[GitLab Duo Special Handling](#gitlab-duo-special-handling) を確認してください。

#### Status.ioを通じて作成する

Status.ioを通じてインシデントを作成するには、メインダッシュボードから `New Incident` ボタンをクリックします:

![New incident](/images/support/cmoc_new_incident.png)

その後、インシデントのすべての詳細を入力します。以下の値を変更する必要があります:

`Title` - これは簡潔で要点を押さえたものにします。インシデントタイトルは「**シンプルに言うと、何が問題なのか?**」という質問に答えるものでなければなりません。

`Current State` - これはほぼ常に `Investigating` に設定する必要があります。なぜなら通常、私たちはこの初期段階ではインシデントの原因を知らないからです。そうではなく、IM や EOC から原因が判明していると伝えられている場合は、代わりに `Identified` に設定します。

`Details` - [transparency](/handbook/values/#transparency) という私たちの価値観に沿って、聴衆に対して期待を超え、インシデントについてできる限り多くの情報を提供すべきです。このフィールドには、聴衆が情報を追えるよう、[production issue tracker](https://gitlab.com/gitlab-com/gl-infra/production/issues) からのインシデントIssueへのリンクを **常に** 含める必要があります。

`Incident Status` - これはインシデントの [severity](/handbook/product-development/how-we-work/issue-triage/#availability) に応じて、`Degraded Performance`、`Partial Service Disruption`、または `Service Disruption` のいずれかに設定する必要があります。どれを選ぶかわからない場合は、IMに案内を求めてください。

`Broadcast` - すべてのボックスにチェックが入っていることを確認します。

`Message Subject` - デフォルト値のままにしておきます。

`Affected Infrastructure` - これはチェックを入れず、その下にあるインシデントの影響を受ける各特定コンポーネントの横のボックスにチェックを入れます。このボックスにチェックを入れると、上記で設定した `Incident Status` の値が *すべて* のインフラコンポーネントに適用されます。

以下は、GitLab.com 上のジョブ処理の遅延に関するインシデントを作成する準備ができている例で、上記のガイドラインに基づくと、送信前の一般的なページの見え方です。

![Incident details](/images/support/cmoc_incident_details.png)

#### ステークホルダーに通知する

CMOCは、Incident Notifier Slackワークフローを使用してインシデントを社内のステークホルダーに通知する必要があります。これは、IMによってインシデントの重大度が確認された後に行うべきです。

このワークフローは、使用されると、インシデントの詳細を入力するフォームを求められ、その後、これらの詳細を `#developer-relations` と `#customer-success` に投稿します。これにより、それらのチームにインシデントを通知します。ワークフローを実行するには:

1. `#support_gitlab-com` チャンネル内で、メッセージボックスに `/` を入力して使用可能なワークフローのリストを表示し、`Incident Notifier` ワークフローを選択します。
1. #incidents-dotcom チャンネルで共有される以下の詳細を入力します
   - **Summary**: 簡潔な要約。CMOC通知と同じものにできます。
   - **Severity**: インシデントと同じ severity を選択します。
   - **Production issue**: インシデントIssueへのリンク。例: `https://gitlab.com/gitlab-com/gl-infra/production/-/issues/12345`
   - **Incident Slack Channel**: インシデントSlackチャンネルへのリンク。例: `#incident-12345`
   - **Status Page**: インシデントをクリックして完全なステータスページURLを展開します。例: `https://status.gitlab.com/pages/incident/xxxxxxxx/xxxxxxxx`
1. `Submit` をクリックします

これにより、`#developer-relations` と `#customer-success` の両方のチャンネルに送信されます。

#### PagerDutyページを解決する

この段階の他のすべてのタスクが完了したら、PagerDutyページを [resolved](#pagerduty-status-definitions) としてマークします。モバイルアプリ、Webインターフェース、または `#support_gitlab-com` SlackチャンネルのPagerDuty Appを通じてページを解決します。

### **Stage 2: Manage**

すべての [Stage 1](#stage-1-engage) タスクが完了したら、インシデントに更新を加え、Zendeskでタグを作成し、関連するZendeskのチケットに返信することで、インシデントを管理します。

#### インシデントを更新する

公開コミュニケーションでの注意と進捗を伝えるため、インシデントは [インシデント更新頻度の表](/handbook/support/workflows/cmoc_workflows#frequency-of-updates) に従って更新する必要があります（別途連絡されている場合を除く）。

アクティブなインシデントを更新するには、ダッシュボードからインシデントアイコンをクリックします。

![Active incident dashboard icon](/images/support/cmoc_update_incident_dashboard.png)

次に、インシデントの横にある編集ボタンをクリックします。

![Incident edit button](/images/support/cmoc_update_incident.png)

以下の値を変更します:

`Current State` - IMまたはEOCからインシデントの原因が特定されたと伝えられた場合は `Identified` に変更します。そうでない場合は `Investigating` のままにします。インシデントに対する修正を展開し、監視期間に入る場合は、`Monitoring` に設定し、[Stage 3](#stage-3-monitor-situational) に進みます。

`Details` - 前回の更新からインシデントに関して何が変わったかを、できる限り簡潔かつ要点を押さえて記述します。文字数制限内に収まるなら、インシデントIssueへのリンクを再度含めることも検討してください。

`Broadcast` - すべてのボックスにチェックが入っていることを確認します。

`Message Subject` - デフォルト値のままにしておきます。

`Current Status` - インシデントの範囲が拡大または縮小していない限り、インシデントを作成したときに以前設定した値のままにします。不明な場合は IM に相談してください。

`Set Status Level` - チェックを入れたままにします。インシデントの範囲が拡大し、当初選択されたコンポーネントに加えて追加のコンポーネントが影響を受けるようになった場合は、更新を公開した後に [Update Affected Infrastructure](#affected-infrastructure) に進みます。

公開準備が整った更新は、次のように見えるはずです。

![Incident update](/images/support/cmoc_post_incident_update.png)

X（旧 Twitter）には280文字の制限がありますが、いくつかのツイートは230文字に切り詰められることが確認されています。たとえば [このツイート](https://twitter.com/gitlabstatus/status/1641150257936601088) です。これは、X が任意のURLを23文字のURLに変換するリンクシートサービスによる場合があります。

公開する前に [更新の長さを確認](https://wordcounter.net/character-count) し、メッセージの本文（最終的なIssueへのURLの前）を220文字に収めるようにしてください。これにより、最終的なURLが切り詰められた場合でも、それを表示する約10文字を残せます。

更新が公開された後、[ライブステータスページ](https://status.gitlab.com/) にアクセスして公開されたことを確認します。

#### 影響を受けるインフラまたはタイトルの更新（状況に応じて）

[Title](#title) または [Affected Infrastructure](#affected-infrastructure) のいずれかに進み、それぞれを変更する方法を学んでください。

#### Title

インシデントのタイトルを更新するには、ナビゲーションバーの `Incidents` をクリックし、対象のインシデントの横の `View Incident` ボタンをクリックします:

![Update incident title - 1](/images/support/cmoc_update_title_or_infra.png)

現在のインシデントタイトルの横にある鉛筆アイコンをクリックして変更し、`Save` をクリックします。

#### Affected Infrastructure

インシデントの影響を受けるインフラを更新するには、ナビゲーションバーから `Incidents` をクリックし、対象のインシデントの横の `View Incident` ボタンをクリックします:

![Update affected infrastructure - 1](/images/support/cmoc_update_title_or_infra.png)

`Affected Infrastructure` の横にある鉛筆をクリックし、追加で影響を受けるインフラの横のボックスにチェックを入れ、`Save` をクリックします。次に、ナビゲーションメニューから `Dashboard` をクリックし、`Current Status` メニューから追加で影響を受けるインフラをクリックして、それらのステータスを変更します:

![Change affected infrastructure](/images/support/cmoc_update_infra.png)

#### Zendeskタグ

インシデントに関連してZendesk経由で送信されたチケットを追跡するため、インシデントIssueに言及するすべてのチケットにZendeskタグが自動的に追加されます。

このタグは他のチケットでも使用できます。インシデントに関連するすべてのタグは、`gitlab-com_gl-infra_production_issues_#####` の形式で、`#####` の部分はインシデント番号で、インシデントIssueで確認できます。

その他の社内インシデントや機密インシデント（セキュリティ関連のインシデントなど）の場合、公開チケット返信に公開リンクを共有しないため、手動でタグを作成できます。手動でタグを作成するには:

1. チケットを作成または編集します。
1. `Tags` フィールドに `com_incident_###` の形式で新しいタグの名前を入力し始めます。
1. `Enter` を押します。
1. 返信を含めるかどうかにかかわらず、チケットを送信します。

これでタグは他のチケットでも使用できるようになります。

#### Zendeskを監視する

`Manage Incident` ステージにいる間、インシデントに関連する新規および既存のチケットがないか定期的にZendeskを監視し、それらにタグを付けて返信します。過去4時間以内に作成されたすべての新規チケットを表示するには [このZendesk検索](https://gitlab.zendesk.com/agent/search/1?type=ticket&q=created%3E4hours%20order_by%3Acreated_at%20sort%3Adesc%20group%3Anone%20group%3A%22support%22%20-form%3Abilling%20-form%3Asecurity) を使用します。または、Zendeskの検索バーに以下を貼り付けます。

```plain
created>4hours order_by:created_at sort:desc group:none group:"support" -form:billing -form:security
```

インシデントが4時間以上前に始まった場合は、`4` を調整します。

### **Stage 3: Monitor (Situational)**

インシデントが緩和された後は、問題が再発しないことを確認するため、しばしば監視期間を開始します。監視は通常30分続きますが、変動する場合があり、IMによって特定の監視時間が要請されることもあります。**監視ステージを完全にスキップするように要請される場合もあります。** その場合は、直接 [Stage 4](#stage-4-resolve) に進みます。

監視を開始するには、インシデントを編集し、以下のフィールドを変更します。

`Current State` - `Monitoring` に変更します。

`Details` - インシデント固有の情報に加えて、すべてのシステムが通常の運用に戻ったこと、問題が再発しないことを確認するために監視中であること、およびインシデントを解決するまでの監視時間の見積もりを必ず記述します。たとえば:

> *While all systems are online and fully operational, out of an abundance of caution we'll leave affected components marked as degraded as we monitor. If there are no recurrences in the next 30 minutes, we'll resolve this incident and mark all components as fully operational.*

`Broadcast` - すべてのボックスにチェックが入っていることを確認します。

`Message Subject` - デフォルト値のままにしておきます。

`Current Status` - 以前設定した値のままにします。この時点で、影響を受けるインフラは通常通りに動作するようになっているはずですが、混乱を避けるため、インシデントをクローズする準備が整うまでは、これを `Operational` に戻 **しません**。

公開準備が整った、インシデントを監視期間に切り替える更新は、次のように見えるはずです。

![Switch to monitoring](/images/support/cmoc_monitoring_stage.png)

監視期間中のいずれかの時点で問題の再発が見られた場合は、[Stage 2](#stage-2-manage) に戻ります。問題の再発なく監視期間が完了した場合は、[Stage 4](#stage-4-resolve) に進みます。

### **Stage 4: Resolve**

監視期間を完了した後、または監視期間がスキップされた場合、インシデントをクローズし、インシデントのポストモーテムセクションへのリンクを追加し、タグ付けと返信が必要な残りのチケットがないかZendeskを確認します。

#### インシデントを解決する

問題が解決され、**IMからGo判定が出たら**、Status.ioのインシデントをクローズします。これらの条件が満たされたら、インシデントを更新し、以下のフィールドを変更します。

`Current State` - `Resolved` に変更します。

`Details` - 問題が解決され、システムが通常通りに動作するようになったことを記述します。前回の更新ですでに行っている場合でも、それを見逃したユーザーが詳細情報を取得できる場所がわかるよう、必ずインシデントIssueへのリンクも含めるようにしてください。

`Broadcast` - すべてのボックスにチェックが入っていることを確認します。

`Message Subject` - デフォルト値のままにしておきます。

`Current Status` - `Operational` に変更します。

`Set Status Level` - このボックスにチェックを入れます。

公開準備が整った、インシデントをクローズする更新は、次のように見えるはずです。

![Resolve incident](/images/support/cmoc_resolve_incident.png)

インシデントをクローズした後、ステータスページが正しく表示されているかをダブルチェックします。

#### Zendeskを確認する

最後のステップとして、Zendeskをもう一度チェックし、タグ付けと返信が必要な残りのチケットがないことを確認します。これを行う方法については [Monitor Zendesk](#monitor-zendesk) セクションを参照してください。

## メンテナンス管理

Infrastructureチームは時折、GitLab.comのスケジュールされたメンテナンスイベントを計画します。その一部はユーザーに直接影響を与えます。新しいメンテナンスイベントは、[external_communication.md](https://gitlab.com/gitlab-com/gl-infra/production/-/blob/master/.gitlab/issue_templates/external_communication.md) Issueテンプレートと [**Scheduled Maintenance**](https://gitlab.com/gitlab-com/gl-infra/production/-/labels?utf8=%E2%9C%93&subscribed=&search=scheduled+maintenance) ラベルを使って、[gl-infra/production](https://gitlab.com/gitlab-com/gl-infra/production/-/issues) Issueトラッカーで作成されたIssueとして発表されます。

メンテナンスがユーザーに影響を与える場合、Infrastructureはメンテナンスをステータスページに表示するよう要請できます。メンテナンスイベントには自動化が有効になっており、各イベントが予定された時刻に開始されることが保証されます。CMOCは、メンテナンスイベントを通じて積極的にステータス更新を提供するよう要請される場合があります。これが必要な場合、タスクの自動化は無効になり、メンテナンスウィンドウの最終完了を含むすべての将来の更新は手動で実施する必要があります。~~このような場合、InfrastructureはIssueに [**CMOC Required**](https://gitlab.com/gitlab-com/gl-infra/production/-/labels?utf8=%E2%9C%93&subscribed=&search=cmoc+required) ラベルを適用し、オンコールCMOCにメンションする通知が `#support_gitlab-com` チャンネルに送信されます。この通知が受信されると、CMOCはIssue内の詳細を使用してStatus.io でメンテナンスを作成します。~~ **これらの通知は現在機能していません。** 代わりに、メンテナンス作成者は `#support_gitlab-com` で `@cmoc` メンションを使用して、新しいメンテナンスのセットアップが必要であることをCMOCに通知します。

新しいメンテナンスイベントを作成するには、Status.ioダッシュボードから `New Maintenance` をクリックします。

![New Maintenance](/images/support/cmoc_new_maintenance.png)

メンテナンスの内容は、メンテナンスIssueで提供される詳細に従って入力する必要があります。完了すると、次のように見えるはずです。

![Maintenance Details](/images/support/cmoc_maintenance_details_automation.png)

### メンテナンスのタイムゾーンと日付

Status.ioのタイムゾーンはUTCに設定されています。

日付形式は2022-08-12時点でISO形式が選択肢にないため、DD-MM-YYYY となっています。

### メンテナンスイベントのリスケジュール

メンテナンスウィンドウのリスケジュールが必要な場合は、*status.io* > *Maintenances* タブに移動します。
![Maintenance Tab](/images/support/cmoc_select_maintenance.png)

リスケジュールが必要なメンテナンスを選択します。
![Maintenance selected](/images/support/cmoc_get_in_maintenance.png)

*Reschedule Maintenance* ボタンを押して新しいスケジュール時刻を更新します。**更新時に正しいタイムゾーンの詳細が設定されていることを確認してください。** その後 saveを押します。

### メンテナンスイベントの更新を送信する

> **自動化されたメンテナンスイベントについての注意**: メンテナンスイベントページで、`Automation: Running` の右に括弧書きの赤い文字で `(Disable)` が表示される場合があります。
`(Disable)` をクリックして無効化された後、再有効化することはできません。
`Post Update` と `Finish Maintenance` を行うには、自動化されたメンテナンスイベントは `(Disable)` でなければなりません。
無効化された後、メンテナンスイベントの開始を含むすべての将来の更新は、その時点から手動で実行する必要があります。

メンテナンスイベントについてのリマインダーなどの更新を送信するには、Status.ioの *Maintenances* タブに移動し、更新が必要なものを選択します。メンテナンスの情報ページで、自動メールリマインダーが送信されるよう設定されているかどうかを確認します。「はい」の場合、購読者に重複したリマインダーが送信されないよう、更新のメールブロードキャストは送信しないようにしてください。更新の準備ができたら、*Post Update Without Starting* ボタンを選択します。

![Post Update Without Starting](/images/support/cmoc_post_without_rescheduling.png)

Infrastructureチームから提供された更新の詳細を入力し、更新を送信する前に適切なブロードキャストチャンネルを確認してもらいます。メンテナンス情報ページで「Send Reminders」が有効になっていた場合は、ブロードキャスト設定で「Notify email subscribers」にチェックを入れないようにしてください。

![Broadcast Maintenance Update](/images/support/cmoc_broadcast_maintenance_update.png)

GitLab Status の Twitter アカウントがメンテナンススケジュールについて投稿したら、ツイートのリンクを `#social_media_action` チャンネルに送り、GitLab ブランドの Twitter アカウントでの増幅を希望する旨をソーシャルチームに知らせます。これは、選択されたスケジュールメンテナンスのタイムラインで一度だけ、できれば予定されたメンテナンスの前の中盤に使用してください。

## シフト終了の引き継ぎ手順

CMOCローテーションには、一般的な [On-call - Ending your on-call shift](/handbook/support/on-call/#ending-your-on-call-shift)) セクションの内容を補強する、いくつかの引き継ぎに固有の手順があります。

引き継ぎを行う際には、シフト中に発生した関連するアクティビティや、現在進行中のインシデントがあるかどうかを、後任のCMOCに伝える必要があります。引き継ぎを行うには、[Handover](https://gitlab.com/gitlab-com/support/dotcom/cmoc-handover/-/issues/new?description_template=Default) テンプレートを使用して [CMOC Handover](https://gitlab.com/gitlab-com/support/dotcom/cmoc-handover/issues) Issueトラッカーで Issueを作成します。シフト中に何も起こらなかった場合でも、すべてが順調であるというシグナルを送ることも有用な情報なので、必ず行ってください。

引き継ぎがアクティブなインシデント中に発生し、Issueで提供する簡単な要約では後任のCMOCに状況を適切に準備するのに不十分な場合は、[#support_gitlab-com](https://gitlab.slack.com/archives/C4XFU81LG) でZoom通話を開始し、後任のCMOCを招待して、状況を同期的に把握してもらうことが推奨されます。次のスラッシュコマンドを使用すると、ミーティングのセットアップを迅速に行えます。

```plain
/zoom meeting CMOC Handover Briefing
```

CMOC Handover Issue トラッカーは公開されていますが、機密情報の偶発的な漏洩を防ぐ取り組みとして、テンプレートは [デフォルトで confidential](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3504) になっています。

シフト中に CMOC が新規または進行中の SIRT インシデントに参加するよう求められた場合、引き継ぎ時に後任の CMOC を関連する機密 Issue / Slack チャンネルに招待してください。

シフト中に開かれたコンタクトリクエストは、デフォルトでチケットを作成したサポートエンジニアに割り当てられます。次のシフトの認知のためにリクエストに言及することは有用な場合があります。ただし、アクションが必要でない限り、コンタクトリクエストを再割り当てしたり、後続の引き継ぎに含め続ける必要はありません。多くの場合、ユーザーはコンタクトリクエストに応答しません。たとえば、OOO予定の場合、コンタクトリクエストを再割り当てして別のシフトに引き継ぐことを検討するとよいでしょう。

## CMOCトレーニングリソース

### CMOC Shadow PagerDuty スケジュール

**注:** このローテーションに自分を追加する際は、ページ上部の `Time Zone` フィールドの調整が、自分だけでなくすべてのユーザーに対して調整されることに注意してください。離れる前に、必ずタイムゾーンをUTCにリセットしてください。

[CMOC Shadow Schedule](https://gitlab.pagerduty.com/schedules/P1UHNJP) は、正式に CMOC として活動する前に CMOC をシャドウして学びたい人なら誰でも使用できます。CMOC になる予定の人は、ローテーションに追加してもらうために、マネージャーに相談する必要があります。または、短期間シャドウする場合は、*Schedule an Override* をクリックし、*Custom duration* をクリックしてから、タイムゾーンと開始・終了の日時を選択し、*Create Override* ボタンをクリックして変更を保存できます。オーバーライドを削除するには、画面右側の **Upcoming Overrides** リストで削除するオーバーライドの **x** をクリックします。

> **CMOC シャドウについての注意**: CMOC シャドウ PagerDuty スケジュールがアクティブな場合、エンジニアは CMOC スケジュールにいるときと同じように通知を受け取り、ページ送信されます。**CMOC シャドウスケジュールにいるときに、いかなるインシデントも acknowledge または resolve しないでください。これにより、実際の CMOC へのページ送信が停止されてしまうためです！**

### CMOCトレーニングアクティビティ

CMOC の「トレーニングアクティビティ」とは、[CMOCパフォーマンス指標](#cmoc-performance-indicators) に対するパフォーマンスを維持または向上させる明示的な目的で、CMOC がワークフローの項目に触れるアクティビティです。

トレーニングアクティビティの例は次のとおりです:

- 卓上演習
- リージョン内のCMOCがプロセス改善やヒント・コツを同期的または非同期的に議論する「CMOC Squawk」
- 実際のインシデントでのCMOCまたはシャドウ：実生活でのトレーニングもトレーニングです！
- [Practice Events](/handbook/support/workflows/cmoc_workflows#cmoc-practice-events)

#### CMOC練習イベント

練習イベントは、実際のインシデントでCMOCを担当したい人により多くの経験を提供することを目的としています。これらには、ステータスページを更新し、インシデントマネージャーとコミュニケーションし、より多くの自信を提供することを必要とする練習シナリオが含まれています。

CMOC練習イベントを開始するには、トレーナーまたは任意のサポートエンジニアに [Support Team Meta Issueトラッカー](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=CMOC%20Practice%20Event) に移動して、[CMOC Practice Event](https://gitlab.com/gitlab-com/support/support-team-meta/-/blob/master/.gitlab/issue_templates/CMOC%20Practice%20Event.md) Issueテンプレートを使ってIssueを作成するように依頼してください。

## GitLab Duo の特別な取り扱い

GitLab Duo 機能は積極的に開発中であるため、個別の機能の可用性を追跡する専用のIssueを <https://gitlab.com/gitlab-com/gl-infra/production/-/issues/18352> に用意しています。

GitLab Duo 機能でインシデントが宣言された場合は、インシデントIssueが <https://gitlab.com/gitlab-com/gl-infra/production/-/issues/18352> とクロスリンクされていることを確認してください。
