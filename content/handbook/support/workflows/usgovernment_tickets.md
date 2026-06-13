---
title: 米国政府向けサポートチケットへの対応
category: Handling tickets
description: "米国政府向けチケットへの対応方法を解説するサポートエンジニアリングのワークフロー"
upstream_path: /handbook/support/workflows/usgovernment_tickets/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
translated_at: "2026-06-12T21:17:46Z"
translator: claude
stale: false
lastmod: 2026-06-09T22:44:13-07:00
---

US Government Support は、US Government Zendesk インスタンスにおける新規チケットの割り当てに、重み付きラウンドロビンワークフローを使用します。

このページは、チケットの割り当て、フォローアップの期待事項、機密保持要件、緊急対応後のチケット処理を含む、US Government Support チケットの日常業務に関するハンドブックの信頼できる唯一の情報源です。

オンコールのカバレッジ、ページングの流れ、緊急対応の期待事項については、[How to Perform US Government On-Call Duties](/handbook/support/workflows/usgovernment_oncall/) を参照してください。

## 米国市民にのみ許可されたアクセス {#access-limited-to-us-citizens}

[US Government Zendesk Instance](/handbook/security/customer-support-operations/zendesk/#zendesk-us-government) にアクセスできるのは、米国市民のサポートエンジニアのみです。

あなたが米国市民で、アクセスを取得して貢献したい場合は、[light agent](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) または [full agent](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) アカウントのいずれかについて [Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) を開くことができます（Support および Security チームメンバーに限定）。

## コミュニケーションガイドライン {#communication-guidelines}

US Government Zendesk インスタンスで受け取ったチケットに関する問題は、いくつかの重要な注意点を守ったうえで、US Government インスタンスの外で議論できます。

システム名、組織名、顧客名、特定のインフラ詳細（IP アドレス、ホスト名、および類似の詳細）、ログファイルを含む識別情報は、内部チケットに限定する必要があります。技術的な問題の詳細は、一般的にチャット、Issue、その他の内部スペースで議論しても問題ありませんが、ログスニペット、スクリーンショット、その他のデータをやり取りする際は、識別情報が開示されないよう慎重に判断してください。

判断に迷う場合は、その情報を非米国市民に伝えても問題ないかどうかを、マネージャーまたは顧客の CSM に確認してください。

チケット内のログレビューや機密情報に関する支援については、偶発的な開示を避けるため、Zendesk 内で内部コメントを使って US Government インスタンスにアクセスできる他のエンジニアに直接連絡することが推奨されます。

Government チケットは、リンク自体が情報を明らかにしないため、Issue やマージリクエストなどで公開リンクとして使用できます。リンクに識別可能な情報を付けて名前を付けることは避けてください。例:

`[US Government Internal Ticket](<ticket_link>)`

ビデオチャットでペアリングする際は、US Government インスタンスにアクセスできるエンジニアとのみペアリングするようにしてください。US Government Support インスタンスのコンテンツ、ログ、または機密保持が必要なその他の情報の画面共有は避けてください。

ドキュメントへのリンクを提供する際、組織のメールサーバーが、チケットの更新を受信者に配信する前に埋め込みリンクを除去する可能性があります。引き続き顧客にドキュメントを提供するには、返信本文に識別子を使用し、その後チケットの末尾に向けて「脚注」を記載することを検討してください。例:

```text
This is the ticket reply body where we are talking docs Title of documentation Page(1). Here's some more documentation that's relevant, Title of documentation page (2).

---

1. Documentation Link
2. Documentation Link
---
```

### チャット内でお客様情報を安全に参照する方法

情報を安全に提供するために、Salesforce や Zendesk などのアクセス制御されたシステム内のレコードへのリンクを活用できます。Salesforce レコードの Slack リンク展開を有効にしている場合は、コメントを投稿した後すぐに展開を削除する必要がある点に注意してください。

例:

- 「このユーザー [https://gitlab-federal-support.zendesk.com/users/398443026291/](https://gitlab-federal-support.zendesk.com/users/398443026291/) は Geo のセットアップで苦労しています...」

- 「跳ね返されたケースを送信した人物は、この組織のメンバーです: [https://gitlab.my.salesforce.com/0014M00001hHHKF](https://gitlab.my.salesforce.com/0014M00001hHHKF)」

機密情報の開示を防ぐため、`#spt_us-government` チャンネルで組織を議論する際に略語を使用することは許可されていません。

### アクセスの確認

GitLab 内の他者とケースや問題を議論する際、その相手が、チャット、画面共有、または通話を通じて機密情報や機微情報を受け取るための[アクセス要件](#access-limited-to-us-citizens)を満たしているかどうかを確認するのが難しい場合があります。

唯一の信頼できる情報源は、その人物が full agent または light agent として US Government Zendesk アカウントを持っているかどうかです。アクセス権を持つ個人は、People Operations によってこの情報へのアクセスが許可されていることが確認されています。

Support Ops チームは、ある人物が US Government Zendesk へのアクセス権を持っているかどうかをチームメンバーが確認できるツールを構築しました。このツールには、GitLab チームメンバーが[こちらのリンク](https://gitlab-com.gitlab.io/support/support-ops/zendesk-us-federal-project/)からアクセスできます。毎週日曜日の 00:00 UTC に更新されます。

より最近追加された人物の確認が必要な場合は、US Government Support Manager または Support Ops Manager に検証を依頼してください。このツールで人物の名前が見つからない場合、そのユーザーはインスタンスにアクセスする資格がないものとみなし、[Communication Guidelines](#communication-guidelines) に従う必要があります。

## US Government Zendesk インスタンスでのチケット対応

US Government Support には、米国市民であることが検証され、US Government Support Portal の新規ケースおよび既存ケースへの対応に 100% 集中している複数のエンジニアがいます。このインスタンスに集中するエージェントは、[Support view](https://gitlab-federal-support.zendesk.com/agent/filters/360196736831) から労力を分散して新規ケースに対応する必要があります。

新規ケースに返信する際、公開コメントを行うエージェントは、そのケースを自分自身に割り当てる必要もあります。

US Government に 50% 以上集中していないものの、インスタンスへのアクセス権を持つエンジニアも、ペアリングセッション、顧客通話への参加、可能な範囲での知識ギャップの支援を通じて参加することが引き続き推奨されます。完全に集中していないグローバルエンジニアが新規ケースを自分自身に割り当てることは推奨されません。

顧客は時折、Zendesk ケースに同僚を追加するよう要求します。US Government Zendesk インスタンスでは [CC が無効化](https://support.gitlab.com/hc/en-us/articles/11626578409756-Operational-Guidelines-for-U-S-Government-Support#ccs-are-disabled) されているため、代わりに [Shared Organizations](https://support.gitlab.com/hc/en-us/articles/11626528150172-Managing-Support-Contacts#shared-organizations) を提供します。

### フォローアップ

US Government チームは、ケースが 7 日間 `pending` 状態にある場合に、ケースの送信者に確認を行う自動フォローアップシステムを実装しています。送信者からの返信がないまま `pending` 状態が連続 14 日間続くと、ケースは自動的に `solved` 状態に移行します。

#### フォローアップ時間の延長

タスクによっては、顧客が変更を加えてフィードバックを提供するまでに 7 日以上かかる状況があります。

将来の特定の日に顧客が更新すると合意した場合、エージェントは `Support::Block Automatic Reopen` マクロの使用を選択できます。このマクロは `blocked_by` タグを追加し、ケースを保留のままにしておくべき理由を示す詳細をエージェントが記入する必要のある内部コメントを作成します。

標準的な保留からフォローアップへのワークフローを再開するには、合意した日付に達した時点で、エージェントが手動で `blocked_by` タグを削除する必要があります。

マクロを使用するためのベストプラクティスの提案を以下に示します。

- ユーザーからの返信が期待される日付に [タスクリマインダー](/handbook/security/customer-support-operations/zendesk/apps/us-government#zendesk-super-app) を設定します

- 約束した日付までにフォローアップを受け取っていることを確認するため、保留中のケースを定期的にレビューします

- 他のメンバーが認識して代わりにフォローアップできるよう、blocked-by の理由に関連する Issue またはケース番号を記載します

### ラウンドロビンによるチケットアサイン {#ticket-assignment-via-round-robin}

コア業務時間中、チケットは Support Ops が構築したラウンドロビンツールに基づいて、作成されるたびに割り当てられます。このツールは、休暇カレンダーに従って PTO 中のエンジニアを除外し、シフト中の稼働可能なサポートエンジニアのリストを作成します。次に、各エンジニアの全体的なケース重み付けを確認し、全体的な重み付けが最も低いエンジニアに新規ケースを割り当てます。

### 同時期の組織チケットを集約してアサインする

場合によっては、1 人の依頼者または組織が短期間に複数のチケットを作成し、それらが複数のサポートエンジニアにラウンドロビンで割り当てられることがあります。このように作業を分割すると、複数のエンジニアが同様のファイルを求め、環境や最近の変更に関する同じコンテキストを構築しようとするため、作業の重複につながる可能性があります。

これを避けるため、これらのチケットを単一の担当者の下にグループ化する方法は次のとおりです。

1. 顧客が 1 〜 2 日のうちに複数のチケットを作成し、それらのチケットがラウンドロビンで割り当てられます。

2. この顧客からチケットを割り当てられたサポートエンジニアが、Slack または集中作業セッションでチケットについて議論し、それらがおそらく同じ環境に関するものかどうかを判断します。

3. サポートエンジニアの 1 人が、この期間中に作成されたこの顧客のすべてのチケットの割り当てを引き受けることに同意し、その後すぐに新しく作成された関連チケットも引き受ける場合があります。

4. そのエンジニアは、再び新規チケットを引き受ける準備ができたと判断するまでラウンドロビンから外れるため、自身を負荷超過としてマークします。

5. エンジニアが他のチケットの担当を引き受けた直後に同じ顧客から新しいチケットが届いた場合、それらの新しいチケットが同じ環境に該当するかどうかを判断するためにレビューする必要があります。該当する場合、エンジニアはそれらの担当も引き受ける必要があります。

誰もチケットを引き受けたくない場合は、ラウンドロビンが最初に割り当てた人にチケットを割り当てたままにします。

### チケットに関するヘルプを得る

一部の情報を機密に保つ必要があるため、US Government チケットに関する支援を得るのは難しい場合があります。しかし、US Government Support ケースを効率的に解決するために、非 US Government エンジニアが必要な専門家である場合も多くあります。

[Communication Guidelines](#communication-guidelines) に従う限り、`#support_self-managed` やその他の Slack チャンネルで質問することが推奨されます。

チケットについてマネージャーの支援が必要な場合は、米国市民のみが US Government インスタンスにアクセスできることを念頭に置いてください。つまり、一部のマネージャーはチケットレベルの詳細について支援できません。あなたが US Government で働く米国市民で、あなたのマネージャーが米国市民でない場合、機密情報を共有せずに問題に対処できないときは、遠慮なく別のマネージャーに連絡してください。

#### チケットからのディスカッション Issue

US Government チケットシステム内のチケットについて非同期コラボレーションをより促進するため、US Government サポートエンジニアがチケットに紐づく機密 GitLab Issue の作成をトリガーできるマクロがあります。この Issue はチケットの期間中開いたままになり、US Government サポートエンジニアがコラボレーターに情報を伝える手段を提供できます。

これらの Issue 内に顧客固有の情報を決して含めないことが重要です。機密であっても、US Government チケットシステムにアクセスできない人々にはまだ表示されます。

これらの Issue のいずれかの作成をトリガーするには、マクロメニューから `General::Create discussion issue` マクロを選択し、チケットを送信します。Support Ops ボットが Issue を作成し、内部メモにそれへのリンクを記載します。

最初、この Issue にはごくわずかな情報しか含まれていません。タイトルにはチケット番号が含まれ、本文にはチケットへのリンクと、ヘッダーでマークされた空のセクションが含まれており、そこに情報が得られ次第記入できます。これらのセクションはすべて任意です。

機密保持要件に違反しない範囲で、チケットに関するできるだけ多くの情報を含めるよう Issue を編集し、その後 Issue へのリンクをコラボレーターと共有するか、GitLab の To-Do システムを通じて他のメンバーをメンションして関与させます。最後に、自分自身を担当者として設定します。

チケットが解決済みとしてマークされると、Support Ops ボットが自動的に Issue をクローズします。

### 米国政府向けサポート ディスカバリーコール

顧客が GitLab スタックのトラブルシューティングに必要なすべての情報を自分で把握して伝えることが難しい場合があります。US Government ポータルで技術サポートケースを提出する際、顧客は、問題を実演し、必要なログやスクリーンショットを収集し、その後サポートケースで非同期作業に戻るために、ケース担当者とディスカバリーセッションを開きたいと示すことができます。

顧客がセッションを希望することを示すチェックボックスを選択すると、ケース履歴の冒頭に、リクエストを行った旨を示す内部メモが表示されます。担当者は、提供されたすべての情報をレビューし、`General::Discovery call response` マクロを選択してセッションのスケジュール調整を開始する必要があります。担当者は、一度限りの Calendly リンクを記入し、関連する可能性のある追加情報をユーザーに要求する必要があります。

`GitLab US Federal Customer Discovery Call` という Calendly 管理のイベントテンプレートがあり、Calendly admin に依頼することでエージェントに割り当てることができます。このイベントタイプは、1 日のリードタイムを持つ 30 分のセッションです。

ディスカバリーコールセッションを待つ間も、引き続き非同期でケースに対応することが推奨されます。

予定されたセッションが行われる際、エージェントは、顧客に問題を実演してもらい、その後協力して、後でケースにアップロードするアーティファクトのコレクションを作成することを期待事項として設定する必要があります。

両者が次のステップについて同じ理解を持つことを確実にするため、収集されたアーティファクトを顧客に再確認させ、観察された内容の技術的な説明を提供する短いコール後の要約が推奨されます。

## 緊急チケットの処理

オンコールシフトのカバレッジ、ページングの動作、緊急受付の期待事項については、[How to Perform US Government On-Call Duties](/handbook/support/workflows/usgovernment_oncall/) を参照してください。

Support が使用する一般的な緊急対応パターンについては、[How to Perform Customer Emergencies Duties](/handbook/support/workflows/customer_emergencies_workflows/) を参照してください。

このセクションでは、緊急事態が受け入れられ対応された後に、US Government の緊急チケットを Zendesk でどのように処理すべきかを記載しています。

### 緊急事態が進行中の間

緊急チケットは、標準的なサポート業務とは異なるワークフローとして扱う必要があります。

緊急事態が進行中の間:

- 最初に対応したサポートエンジニアにチケットが自動的に割り当てられます

- 緊急チケットは、緊急イベントのアクティブな調整記録として残しておく必要があります

- 一時的な緊急の重み付けは、顧客が積極的に緊急状態にある期間に限って維持する必要があります

### 緊急事態が解決された後

緊急状態が解決されたら、チケットをアクティブな緊急事態として開いたままにすべきではありません。

目標は、緊急ワークフローとその一時的なチケット重み付けを、アクティブな緊急事態の期間に限定することです。

#### 標準的な解決パス

緊急事態が解決された後は、以下の標準的なパスのいずれかを使用します。

1. 関連する非緊急チケットが既に存在する場合は、緊急チケットをそのチケットにマージし、そこで任意のフォローアップ作業を継続します。

2. 関連する非緊急チケットが存在しない場合は、緊急チケットを解決済みにするかクローズします。

緊急対応後のフォローアップ作業は、非緊急チケットで行う必要があります。

必要に応じて、タイムラインを追いやすく保つため、緊急チケットとフォローアップチケットをリンクする内部メモを残します。

#### 推奨されない例外: 同じチケットを非緊急として継続する

まれなケースでは、緊急事態が解決された後も同じチケットから作業を継続するのが理にかなう場合があります。

その場合、サポートエンジニアは、ワークロードバランシングにおいてチケットがアクティブな緊急事態のように振る舞わないよう、手動で緊急の重み付けを削除する必要があります。ほとんどの場合、これはチケットの重みを `5` から `1` に下げることを意味し、残りのフォローアップ作業の量に基づいて判断します。

このパスは推奨されず、フォローアップを別個の非緊急チケットに移すと顧客やチームに不必要な混乱を生じさせる場合にのみ使用すべきです。

この例外パスを使用する場合は、チケットを開いたままにした理由と、重みが手動で調整されたことを説明する内部メモを残します。

#### これが重要な理由

緊急チケットは、ワークロードバランシングのためにチケットの重み `5` を持ちます。

その引き上げられた重みは、エンジニアが積極的に緊急事態を管理している間、新規ケースの割り当てに対する一時的な保留として機能します。緊急事態が解決された後にチケットをクローズまたはマージすることで、重み 5 のボーナスをアクティブな緊急事態の期間に限定し、US Government の割り当てシステムにおける長期的な不均衡を防ぎます。

## GitLab Dedicated for Government

### 高レベルのメモ

1. 慌てないでください。

2. いかなる GitLab Dedicated チケットでも、問題が GitLab アプリケーションの問題なのか、インフラの問題なのかを判断します。[ログ](/handbook/support/workflows/dedicated_logs/)と[オブザーバビリティメトリクス](/handbook/support/workflows/dedicated_instance_health)を手がかりにしてください。

3. ログとメトリクスは境界内にあり、VPN アクセスが必要です。質問や問題がある場合は、`#g_dedicated-us-pubsec` で尋ねてください。セットアップ手順は[こちら](https://gitlab.com/gitlab-com/gl-infra/us-public-sector/documentation/-/blob/main/runbooks/remote-access-vpn.md?ref_type=heads)です。

#### ヘルプを得る

|   |   |
|---|---|
|何|用途|
|[GitLab Dedicated Overview](/handbook/support/workflows/dedicated/)|基本的な質問を始めるのに適した場所|
|[Troubleshooting Tables](/handbook/support/workflows/saas_sm_cheatsheet/)|GitLab Dedicated の何が異なるかを理解する|
|`CompSecGov` で [RFH](/handbook/support/workflows/how-to-get-help/#how-to-formally-request-help-from-the-gitlab-development-team) を開く|顧客に代わって[設定変更](/handbook/support/workflows/dedicated/#configuration-changes)をリクエストする、またはインシデント以外の事項について SRE から支援を得る|
|Slack の [#support_gitlab-dedicated](https://gitlab.enterprise.slack.com/archives/C058LM1RL3V)|商用または政府を問わず、GitLab Dedicated に集中する Support メンバー向けの一般的な質問|

### Requests for Help（ヘルプリクエスト）

Requests for Help は、境界内の [CompSecGov](https://compsecgov.gitlab-dedicated.us/gitlab-dedicated-us-public-sector/customer-support) にあります。CompSecGov へのアクセスは [FedRAMP Okta](https://gitlabus.okta.com) を通じて行われます。アクセスが必要で持っていない場合は、Wade または Kasey に連絡してプロセスを開始してください。

いかなる GitLab Dedicated チケットでも、問題が GitLab アプリケーションの問題なのか、インフラの問題なのかを判断します。インフラ問題の RFH は CompSecGov の手順に従い、アプリケーション問題の RFH は[通常の手順](/handbook/support/workflows/how-to-get-help/#how-to-formally-request-help-from-the-gitlab-development-team)に従います。

CompSecGov で RFH を開くには、`Customer Support` グループに移動し、RFH の Issue テンプレートを使って新しい Issue を開きます。

#### 緊急対応

[GitLab Dedicated for Government](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated_for_government/) の顧客からの緊急事態は、[US Government Emergency support](https://about.gitlab.com/support/us-government-support/#us-government-emergency-support) ローテーションを通じて届きます。

Global Support Team の [Handling GitLab Dedicated emergencies](/handbook/support/workflows/dedicated/#handling-gitlab-dedicated-emergencies) ワークフローがガイドになります。

追加の支援については、GitLab Dedicated に集中する GitLab Support チームのメンバーに ping を送るために `@spt_focus-dedicated` Slack ハンドルの使用を検討してください。

[GitLab Dedicated US PubSec On-call runbook](https://gitlab.com/gitlab-com/gl-infra/us-public-sector/documentation/-/blob/main/runbooks/on-call.md) は SSOT であり、US Government Support チームはこれをブックマークして参照する必要があります。

### アクセスの取得

[FedRAMP Okta](https://gitlabus.okta.com/) または [CompSecGov](https://compsecgov.gitlab-dedicated.us/) へのアクセス権がない場合は、この [Training Module](https://gitlab.com/gitlab-com/support/support-training/-/blob/main/.gitlab/issue_templates/GitLab%20Dedicated%20for%20Government.md) に従ってアクセス取得を進めてください。

### トラブルシューティング

FedRAMP Okta インスタンスは、90 日間の非アクティブ状態の後にアカウントをロックします。アカウントのロックを解除するには、ロックアウトされた CompSecGov 上で [Access Request](https://compsecgov.gitlab-dedicated.us/corporate-security/access-management/-/issues) を開く必要があります。

このプロセスについては、`#g_dedicated-us-pubsec`、Wade、Ian、Kasey、または Nick のいずれかに支援を求めてください。
