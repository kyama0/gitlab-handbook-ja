---
title: 米国政府向けサポートチケットへの対応
category: Handling tickets
description: "米国政府向けチケットへの対応方法を解説するサポートエンジニアリングのワークフロー"
upstream_path: /handbook/support/workflows/usgovernment_tickets/
upstream_sha: "aa6010901a621fcf51a4f7f1b2dc39f5e40f5ecc"
translated_at: "2026-05-29T21:19:23Z"
translator: claude
stale: false
lastmod: "2026-05-28T19:25:37-07:00"
---

米国政府向けサポートでは、[重み付きラウンドロビンアルゴリズム](#ticket-assignment-via-round-robin) を用いてサポートエンジニアにチケットをアサインしています。

米国政府向けサポートには、[米国市民権が確認された](#access-limited-to-us-citizens) エンジニアが複数名おり、米国政府向けサポートポータルにおける新規および既存ケースの対応に 100% フォーカスしています。本インスタンスにフォーカスしているエージェントは、[Support view](https://gitlab-federal-support.zendesk.com/agent/filters/360196736831) から作業を分担し、新規ケースに着手します。新規ケースに返信する際、公開コメントを行うエージェントは併せてケースを自分にアサインしてください。米国政府向けへのフォーカスが 50% 未満ながら本インスタンスへのアクセス権を持つメンバーも、ペアリングセッションへの参加、お客様コールへの同席、知識ギャップを補う支援などを通じて積極的に貢献することが推奨されています。フルにフォーカスしていないグローバルエンジニアが新規ケースを自身にアサインすることは推奨されません。

ケースが `pending` 状態になってから 7 日経過すると、自動化が動作し、依頼者に応答を待っている旨を通知します。さらに `pending` 状態が 7 日続くと、自動化によりケースは `solved` 状態に移されます。

お客様は、Zendesk ケースに同僚を追加するよう依頼することがあります。米国政府向け ZenDesk インスタンスでは [CC が無効化されている](https://support.gitlab.com/hc/en-us/articles/11626578409756-Operational-Guidelines-for-U-S-Government-Support#ccs-are-disabled) ため、代わりに [Shared Organizations](https://support.gitlab.com/hc/en-us/articles/11626528150172-Managing-Support-Contacts#shared-organizations) を提供しています。

## 米国市民にのみ許可されたアクセス {#access-limited-to-us-citizens}

[US Government Zendesk Instance](/handbook/security/customer-support-operations/zendesk/#zendesk-us-government) には米国市民権を持つサポートエンジニアのみがアクセスできます。米国市民であってアクセスして貢献したい場合は、[Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) を起票し、[Light エージェント](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) または [フルエージェント](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)（Support / Security チームメンバーに限定）のいずれかを申請できます。

## コミュニケーションガイドライン {#communication-guidelines}

米国政府向け Zendesk インスタンスで受けたチケットに関する話題は、いくつかの重要な留意点付きで、米国政府向けインスタンス外でも議論することができます。システム名、組織名、お客様名、特定のインフラ詳細（IP アドレス、ホスト名など）、ログファイルといった個人を特定し得る情報は、社内チケット内に限定すべきです。技術的な問題の性質に関する具体的内容はチャットや Issue などの公開の場で議論しても構いませんが、ログスニペット、スクリーンショット、その他のデータをやり取りする際は、識別可能な情報が開示されないよう慎重に判断してください。判断に迷う場合は、マネージャーまたは該当顧客の CSM に、その情報を米国市民以外に伝えても問題ないかを確認してください。

ログレビューやチケット内の機密情報に関する支援を求める際は、誤って開示してしまうことを防ぐため、Zendesk 内の内部コメントを使って米国政府向けインスタンスへのアクセス権を持つ他のエンジニアに直接連絡することを推奨します。

政府向けチケットは、Issue やマージリクエスト内で公開リンクとして共有しても構いません。リンク自体は何の情報も明らかにしないためです。ただし、リンク名に識別可能な情報を含めないようにしてください。例: `[US Government Internal Ticket](<ticket_link>)`。

ビデオチャットでペア作業をする際は、必ず米国政府向けインスタンスへのアクセス権を持つエンジニアとのみペアリングし、米国政府向けサポートインスタンスのコンテンツ、ログ、その他機密保持が必要な情報の画面共有は避けてください。

ドキュメントへのリンクを提供する際、組織のメールサーバーが受信者にチケット更新を配信する前に埋め込みリンクを除去する場合があります。お客様にドキュメントを提供し続けるために、返信本文に識別子を使い、チケット末尾に「脚注」を置くことを検討してください。例:

```text
This is the ticket reply body where we are talking docs Title of documentation Page(1). Here's some more documentation that's relevant, Title of documentation page (2).

---

1. Documentation Link
2. Documentation Link
---
```

### フォローアップ

米国政府向けチームでは、ケースが `pending` 状態で 7 日経過した時点で、ケース送信者に確認を入れる自動フォローアップシステムを導入しています。送信者から返信のないまま pending 状態が 14 日連続で続くと、ケースは自動的に `solved` 状態に移動します。

#### フォローアップ時間の延長

7 日以上の時間がお客様の作業やフィードバック提供に必要となる状況もあります。お客様と将来の特定日に状況を更新する旨で合意済みの場合、エージェントは `Support::Block Automatic Reopen` マクロの利用を選択できます。このマクロは `blocked_by` タグを追加し、エージェントがなぜケースを pending 状態のままにすべきかの詳細を記載する内部コメントを作成します。`blocked_by` タグは合意した日付に達したときにエージェントが手動で削除する必要があり、削除後に標準の pending → フォローアップワークフローが再開されます。マクロを使う際のベストプラクティス例:

- ユーザーから連絡が戻ってくるべき日付に [タスクリマインダー](/handbook/security/customer-support-operations/zendesk/apps/us-government#zendesk-super-app) を設定する。
- 約束された日付までに確実にフォローアップを受けられるよう、定期的に pending ケースをレビューする。
- 他のメンバーが認識し代理でフォローアップできるよう、blocked-by の理由欄に関連する Issue やケース番号を記載する。

### チャット内でお客様情報を安全に参照する方法

Salesforce や Zendesk のようなアクセス制御されたシステム内のレコードへのリンクを活用することで、安全に情報を提供できます。SFDC レコードに対する Slack のリンク展開を有効にしている場合は、コメント投稿後すぐにその展開を削除する必要がある点に注意してください。

例:

- "This user <https://gitlab-federal-support.zendesk.com/users/398443026291/> is struggling with Geo setup..."
- "The person who submitted the case that got bounced back is a member of this organization: <https://gitlab.my.salesforce.com/0014M00001hHHKF>"

`#spt_us-government` チャンネルでは、機密情報の開示を防ぐため、組織を表す略称（acronym）の使用は**許可されていません**。

## ラウンドロビンによるチケットアサイン {#ticket-assignment-via-round-robin}

コアビジネス時間中は、Support Ops が構築したラウンドロビンツールに基づき、チケットが作成されると同時にアサインされます。このツールは時刻管理用カレンダーで PTO 中の人を除いたうえで、シフトに入っている対応可能なサポートエンジニアのリストを作成します。次に各エンジニアの全体的なケース重み付けを確認し、最も低い全体重み付けのエンジニアに新規ケースをアサインします。

### 同時期の組織チケットを集約してアサインする

特定の依頼者または組織が短期間（1〜2 日）に複数のチケットを作成し、それらが複数のサポートエンジニアにラウンドロビンでアサインされる場合があります。この方法で作業を分担すると、複数のエンジニアが同様のファイルを依頼し、同じ環境や直近の変更に関する文脈を構築しようとして、作業が重複しがちです。これを避けるため、これらのチケットを単一の担当者にまとめる方法は次のとおりです:

1. お客様が 1〜2 日以内に複数のチケットを作成し、それらがラウンドロビンでアサインされる。
1. このお客様からアサインされたサポートエンジニアたちは、Slack やクラッシュセッションで議論し、それらのチケットがおそらく同じ環境に関するものかを判断する。
1. サポートエンジニアの 1 人が、この期間中に作成された当該お客様のすべてのチケット（それから少しあとに作成された新規チケットも含む可能性がある）のアサインを引き受けることに同意する。
1. そのエンジニアは自分を overburdened とマークし、新規チケットを引き受ける準備ができたと判断するまでラウンドロビンから外れる。
1. あるエンジニアが他のチケットの担当を引き受けたあと間もなく同じお客様から新規チケットが入ってきた場合、それらのチケットも同じ環境に該当するかを確認する。該当する場合、エンジニアはそれらの担当も引き受ける。これにより、エンジニアがラウンドロビンから外れる時間がさらに延びることになる。

**誰もチケットを引き受けたくない場合はどうするか？** ラウンドロビンが最初にアサインしたメンバーにチケットを割り当てたままにします。

## チケットに関するヘルプを得る

機密に保つ必要がある情報があるため、米国政府向けチケットに関する支援を得るのは難しい場合があります。とはいえ、米国政府向けサポートケースを効率的に解決するうえで、米国政府向けではないエンジニアが必要な専門知識を持つことも多くあります。[コミュニケーションガイドライン](#communication-guidelines) に従っていれば、`#support_self-managed` などの Slack チャンネルで質問することは推奨されています。

チケットに関してマネージャーの支援が必要な場合、米国政府向けインスタンスにアクセスできるのは米国市民のみであることを念頭に置いてください。つまり、一部のマネージャーはチケットの支援を行えないことになります。米国市民で米国政府向けの仕事に従事しており、自分のマネージャーがそうでない場合、機密情報の共有なしには問題に対処できないときには、別のマネージャーに相談しても構いません。

### チケットからのディスカッション Issue

米国政府向けチケットシステム内のチケットに対して非同期コラボレーションを促進するため、米国政府向けサポートエンジニアがチケットに紐づく機密扱いの GitLab Issue の作成をトリガーできるマクロを用意しています。この Issue はチケットが続く間ずっとオープン状態にあり、米国政府向けサポートエンジニアが共同作業者に情報を伝える手段として利用できます。

**注意:
これらの Issue は機密扱いであっても、米国政府向けチケットシステムへのアクセス権を持たない人にも見える状態にあります。したがって、これらの Issue にお客様固有の情報を一切含めないことが重要です。**

これらの Issue の作成をトリガーするには、マクロメニューから `General::Create discussion issue` マクロを選択してチケットを送信します。すると Support Ops のボットが Issue を作成し、内部メモにそのリンクを記載します。最初の段階では、この Issue の内容は最低限です。タイトルにはチケット番号が含まれ、本文にはチケットへのリンクと、必要に応じて情報を記入できる空のセクション（見出し付き）が含まれます。これらのセクションはすべて任意です。

機密性要件に違反しない範囲で、可能な限り多くのチケット情報を Issue に記入し、コラボレーターに Issue へのリンクを共有するか、GitLab の To-Do システム経由で他のメンバーをメンションします。最後に、自分を assignee に設定します。

チケットが解決済みとマークされると、Support Ops のボットがその Issue を自動的にクローズします。

## アクセスの確認

GitLab 内の他のメンバーとケースや Issue について議論する際、その人がチャット、画面共有、または通話を介して機密情報や慎重情報を受け取ることが許可されている [アクセス要件](#access-limited-to-us-citizens) を満たしているかを確認するのは難しい場合があります。唯一の信頼できる情報源は、その人が米国政府向け Zendesk アカウント（フルエージェントまたはLight エージェント）を持っているかどうかです。アクセス権を持つメンバーは、people-ops によってこの情報へのアクセスが許可されていることが確認されています。Support-Ops チームは、ある人が米国政府向け Zendesk へのアクセス権を持っているかをチームメンバーが確認できる便利なツールを構築しました。このツールは GitLab チームメンバーから [このリンク](https://gitlab-com.gitlab.io/support/support-ops/zendesk-us-federal-project/) 経由でアクセスできます。データは毎週日曜 00:00 UTC に更新されることに注意してください。それより最近追加されたメンバーの確認が必要な場合は、米国政府向けサポートマネージャーまたは Support-Ops マネージャーに検証を依頼できます。このツールでその人の名前が見つからない場合、そのユーザーはインスタンスへのアクセス資格がないと判断し、対応の手順については [コミュニケーションガイドライン](#communication-guidelines) を参照してください。

## 米国政府向けサポート ディスカバリーコール

GitLab スタックのトラブルシューティングに必要なすべての情報を、お客様だけで取得・伝達するのが難しい場合があります。米国政府向けポータルで技術サポートケースを起票する際、お客様はケースのアサイニーとディスカバリーセッションを行い、問題のデモ、必要なログ／スクリーンショットなどの収集を行ったうえで、サポートケースで非同期作業に戻りたいと表明できます。

お客様がセッションを希望するチェックボックスを選択した場合、ケース履歴の冒頭に内部メモが付き、リクエストが行われたことが示されます。アサイニーは提供された情報をすべてレビューし、`General::Discovery call response` マクロを選択してセッションのスケジューリングを開始してください。アサイニーは使い切りの Calendly リンクを記入し、関連する追加情報をユーザーに依頼します。

Calendly に管理されたイベントテンプレートとして **GitLab US Federal Customer Discovery Call** があり、Calendly 管理者に依頼するとエージェントに割り当てられます。このイベントタイプは 30 分のセッションで、リードタイムは 1 日です。

ディスカバリーコールを待つ間も、ケースを非同期で進めることが推奨されます。

スケジュールされたセッションが行われたら、エージェントは「お客様に問題のデモをお願いし、その後一緒に成果物のセットを作成して、後ほどケースにアップロードする」という期待値を設定してください。

両者で次のステップに関する共通認識を確実にするため、コール後の短い要約として、収集した成果物の整理と、観測された内容の技術的な記述を行うことを推奨します。

## 米国政府向けシフトエンジニアのワークフロー

米国政府向けシフトエンジニアは、米国政府向けサポートとグローバルサポートのハイブリッドな役割を担い、両方のサポートポータルで作業します。シフトエンジニアが従うべき優先順位の階層を以下に示します:

1. 米国政府向け Emergencies（オンコール時）
1. 24x7 適用対象の米国政府向け High priority ケース（[24x7 Entitled Customers view](https://gitlab-federal-support.zendesk.com/agent/filters/20166453511316)）
1. Custom Personal view 内のグローバルサポートケース（[Create the view](#create-the-personal-view-in-global-support)）
1. SLA 違反済みまたは違反目前の米国政府向けケース

### グローバルサポートでパーソナルビューを作成する {#create-the-personal-view-in-global-support}

以下では、米国政府向けシフトエンジニアが貢献できるグローバル側のケースをリスト化するパーソナルビューの作成方法を説明します。

1. GitLab のグローバルサポートポータルの [create new view](https://gitlab.zendesk.com/admin/workspaces/agent-workspace/views/new) セクションに移動します。
1. 名前を `US Government Shift View` に設定します。
1. **Tickets must meet all of these conditions to appear in the view** には次の条件を使用します:
    - `Status` - `Less than` - `Solved`
    - `Assignee` - `is` `-`
    - `Preferred Region for Support` - `is` - `Americas, USA`
1. **Tickets can meet any of these conditions to appear in the view** には次の条件を使用します:
    - `Form` - `is` - `Self-Managed`
    - `Form` - `is` - `SaaS`
    - `Form` - `is` - `SaaS Account`
    - `Form` - `is` - `GitLab Dedicated`
1. **Formatting Options** には次の列を使用します:
    - `ID`
    - `SLA`
    - `Subject`
    - `Requester`
    - `Assignee`
    - `Organization`
    - `Priority`
    - `Request date`
1. Group by: `Priority` - 降順
1. Order by: `SLA` - 昇順

## GitLab Dedicated for Government

### 高レベルのメモ

1. パニックにならない。
1. **アプリケーションかインフラか**？ GitLab Dedicated のチケットでは、それが GitLab アプリケーションの問題なのかインフラの問題なのかを判別することが重要です。判断のためには [ログ](/handbook/support/workflows/dedicated_logs/) と [可観測性メトリクス](/handbook/support/workflows/dedicated_instance_health) を使ってください。
1. ログとメトリクスは "in-boundary" にあり、VPN アクセスが必要です。質問や問題があれば `#g_dedicated-us-pubsec` で確認してください。セットアップ手順は [こちら](https://gitlab.com/gitlab-com/gl-infra/us-public-sector/documentation/-/blob/main/runbooks/remote-access-vpn.md?ref_type=heads) です。

#### ヘルプを得る

| 何 | 用途 |
| ------ | ------ |
| [GitLab Dedicated Overview](/handbook/support/workflows/dedicated/) | 基本的な質問の出発点として最適 |
| [Troubleshooting Tables](/handbook/support/workflows/saas_sm_cheatsheet/) | GitLab Dedicated で「何が異なるか」を理解するため |
| `CompSecGov` で [RFH](/handbook/support/workflows/how-to-get-help/#how-to-formally-request-help-from-the-gitlab-development-team) を起票 | お客様に代わって [構成変更](/handbook/support/workflows/dedicated/#configuration-changes) を依頼する場合や、インシデントではない事項に関して SRE のヘルプを求める場合 |
| Slack の [#support_gitlab-dedicated](https://gitlab.enterprise.slack.com/archives/C058LM1RL3V) | GitLab Dedicated（コマーシャルまたは政府向け）にフォーカスしているサポート関係者への一般的な質問 |

### Requests for Help

Requests for Help は [CompSecGov](https://compsecgov.gitlab-dedicated.us/gitlab-dedicated-us-public-sector/customer-support) 上の "In-Boundary" に存在します。CompSecGov へのアクセスは [FedRAMP Okta](https://gitlabus.okta.com) 経由です。アクセスが必要なのにまだ持っていない場合は、Wade または Kasey に連絡してプロセスを開始してください。

GitLab Dedicated のチケットでは、それが GitLab アプリケーションの問題なのかインフラの問題なのかを判別することが重要です。インフラ起因の RFH は CompSecGov の手順に従い、アプリケーション起因の RFH は [通常の手順](/handbook/support/workflows/how-to-get-help/#how-to-formally-request-help-from-the-gitlab-development-team) に従います。

CompSecGov 上で RFH を起票するには、`Customer Support` グループに移動し、RFH の Issue テンプレートを使って新規 Issue を起票します。

#### Emergency 対応

[GitLab Dedicated for Government](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated_for_government/) のお客様からの Emergency は、[US Government Emergency support](https://about.gitlab.com/support/us-government-support/#us-government-emergency-support) ローテーションを通じて入ってきます。

[GitLab Dedicated emergency 対応](/handbook/support/workflows/dedicated/#handling-gitlab-dedicated-emergencies) のグローバルワークフローがあなたのガイドです。

GitLab Dedicated にフォーカスしている GitLab Support チームメンバーへの追加支援を依頼するために、`@spt_focus-dedicated` Slack ハンドルでメンションすることも検討してください。

[GitLab Dedicated US PubSec オンコールランブック](https://gitlab.com/gitlab-com/gl-infra/us-public-sector/documentation/-/blob/main/runbooks/on-call.md) が SSOT です。米国政府向けサポートチームはブックマークして参照してください。

### アクセスの取得

[FedRAMP Okta](https://gitlabus.okta.com/) または [CompSecGov](https://compsecgov.gitlab-dedicated.us/) へのアクセス権がない場合は、この [トレーニングモジュール](https://gitlab.com/gitlab-com/support/support-training/-/blob/main/.gitlab/issue_templates/GitLab%20Dedicated%20for%20Government.md) に従ってアクセス取得を進めてください。

### トラブルシューティング

FedRAMP Okta インスタンスは、90 日間アクティビティがないとアカウントをロックします。アカウントのロックを解除するには、ロックアウトされた CompSecGov 上で [アクセスリクエスト](https://compsecgov.gitlab-dedicated.us/corporate-security/access-management/-/issues) を起票する必要があります。

このプロセスについては、#g_dedicated-us-pubsec、Wade、Ian、Kasey、または Nick のいずれかにヘルプを依頼してください。
