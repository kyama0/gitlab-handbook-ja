---
title: 米国政府向けサポートチケットへの対応
category: Handling tickets
description: "米国政府向けチケットへの対応方法を解説するサポートエンジニアリングのワークフロー"
upstream_path: /handbook/support/workflows/usgovernment_tickets/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
translated_at: "2026-06-12T13:20:01Z"
translator: claude
stale: false
lastmod: "2026-06-09T22:44:13-07:00"
model: claude-opus-4-7
---

米国政府向けサポートでは、米国政府向け Zendesk インスタンスにおける新規チケットのアサインに、重み付きラウンドロビンのワークフローを用いています。

このページは、チケットのアサイン、フォローアップに関する期待値、機密保持要件、緊急対応後のチケット処理など、米国政府向けサポートチケットの日々の作業に関するハンドブックの信頼できる唯一の情報源 (SSOT) です。

オンコールのカバレッジ、ページング (呼び出し) の流れ、緊急対応に関する期待値については、[米国政府向けオンコール業務の進め方](/handbook/support/workflows/usgovernment_oncall/) を参照してください。

## 米国市民に限定されたアクセス {#access-limited-to-us-citizens}

[米国政府向け Zendesk インスタンス](/handbook/security/customer-support-operations/zendesk/#zendesk-us-government) にアクセスできるのは、米国市民であるサポートエンジニアのみです。

あなたが米国市民であり、アクセス権を取得して貢献したい場合は、[light agent](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) または [full agent](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) アカウントの [アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) を作成できます (サポートおよびセキュリティチームのメンバーに限定されます)。

## コミュニケーションガイドライン {#communication-guidelines}

米国政府向け Zendesk インスタンスで受け付けたチケットに関する課題は、いくつかの重要な注意点を踏まえたうえで、米国政府向けインスタンスの外で議論することができます。

システム名、組織名、お客様名、特定のインフラ詳細 (IP アドレス、ホスト名、その他類似の情報)、ログファイルを含む識別情報は、内部チケットに限定すべきです。技術的な問題の具体的な内容については、チャット、課題、その他の内部スペースで議論しても一般的に問題ありませんが、ログの抜粋、スクリーンショット、その他のデータを共有する際は、識別情報が開示されないよう慎重に判断してください。

判断に迷う場合は、その情報を米国市民以外に伝えてよいかどうか、マネージャーまたはそのお客様の CSM に確認してください。

チケット内のログレビューや機密情報について支援が必要な場合は、偶発的な開示を避けるため、Zendesk 内で米国政府向けインスタンスへのアクセス権を持つ他のエンジニアに内部コメントを使って直接連絡することを推奨します。

政府向けチケットは、リンク自体が情報を明らかにするわけではないため、課題やマージリクエストなどで公開リンクとして共有できます。リンクには識別可能な情報を含む名前を付けないようにしてください。例:

`[US Government Internal Ticket](<ticket_link>)`

ビデオチャットでペアリングを行う際は、米国政府向けインスタンスへのアクセス権を持つエンジニアとのみペアリングするようにしてください。米国政府向けサポートインスタンスのコンテンツ、ログ、その他の機密保持が求められる情報の画面共有は避けてください。

ドキュメントへのリンクを提供する際、組織のメールサーバーがチケット更新を受信者に配信する前に埋め込みリンクを除去してしまう場合があります。お客様にドキュメントを継続して提供するため、返信本文内に識別子を使い、チケットの末尾付近に「脚注」を記載する方法を検討してください。例:

```text
This is the ticket reply body where we are talking docs Title of documentation Page(1). Here's some more documentation that's relevant, Title of documentation page (2).

---

1. Documentation Link
2. Documentation Link
---
```

### チャットでお客様情報を安全に参照する方法 {#how-to-reference-customer-information-securely-in-chat}

Salesforce や Zendesk などのアクセス制御されたシステム内のレコードへのリンクを活用すれば、情報を安全に提供できます。Salesforce レコードに対する Slack のリンク展開を有効にしている場合は、コメントを行った後すぐに展開を削除してください。

例:

- 「このユーザー [https://gitlab-federal-support.zendesk.com/users/398443026291/](https://gitlab-federal-support.zendesk.com/users/398443026291/) が Geo セットアップで苦労していて……」

- 「差し戻されたケースを送信した人物は、この組織のメンバーです: [https://gitlab.my.salesforce.com/0014M00001hHHKF](https://gitlab.my.salesforce.com/0014M00001hHHKF)」

機密情報の開示を防ぐため、`#spt_us-government` チャンネルで組織を議論する際に略語を使用することは許可されていません。

### アクセス権の確認 {#checking-for-access}

GitLab 内の他のメンバーとケースや課題について議論する際、その相手がチャット、画面共有、通話を通じて機密情報や秘匿情報を受け取るための [アクセス要件](#access-limited-to-us-citizens) を満たしているかどうかを確認するのが難しい場合があります。

信頼できる唯一の情報源は、その人物が full agent または light agent として米国政府向け Zendesk アカウントを持っているかどうかです。アクセス権を持つ個人は、この情報へのアクセスを許可されていることが People Operations によって確認されています。

Support Ops チームは、ある人物が米国政府向け Zendesk へのアクセス権を持っているかどうかをチームメンバーが確認できるツールを構築しました。このツールは、GitLab チームメンバーが [このリンク](https://gitlab-com.gitlab.io/support/support-ops/zendesk-us-federal-project/) からアクセスできます。データは毎週日曜日の 00:00 UTC に更新されます。

最近追加された人物について確認が必要な場合は、米国政府向けサポートマネージャーまたは Support Ops マネージャーに検証を依頼してください。このツールで人物の名前が見つからない場合、そのユーザーはインスタンスにアクセスする資格がないものとみなし、[コミュニケーションガイドライン](#communication-guidelines) に従ってください。

## 米国政府向け Zendesk インスタンスでのチケット対応 {#working-tickets-in-the-us-government-zendesk-instance}

米国政府向けサポートには、米国市民権が確認されたエンジニアが複数名おり、米国政府向けサポートポータルにおける新規および既存ケースの対応に 100% フォーカスしています。本インスタンスにフォーカスしているエージェントは、[Support view](https://gitlab-federal-support.zendesk.com/agent/filters/360196736831) から作業を分担し、新規ケースに着手してください。

新規ケースに返信する際、公開コメントを行うエージェントは併せてケースを自分にアサインしてください。

米国政府向けへのフォーカスが 50% 未満ながら本インスタンスへのアクセス権を持つメンバーも、ペアリングセッションへの参加、お客様コールへの同席、可能な範囲での知識ギャップを補う支援などを通じて参加することが推奨されています。フルにフォーカスしていないグローバルエンジニアが新規ケースを自身にアサインすることは推奨されません。

お客様が同僚を Zendesk ケースに追加するよう依頼することがあります。米国政府向け Zendesk インスタンスでは [CC が無効化されている](https://support.gitlab.com/hc/en-us/articles/11626578409756-Operational-Guidelines-for-U-S-Government-Support#ccs-are-disabled) ため、代わりに [Shared Organizations](https://support.gitlab.com/hc/en-us/articles/11626528150172-Managing-Support-Contacts#shared-organizations) を提供しています。

### フォローアップ {#following-up}

米国政府向けチームは、ケースが `pending` 状態で 7 日間経過した際に、ケースの送信者に確認を行う自動フォローアップシステムを実装しています。送信者からの返信がないまま `pending` 状態が連続 14 日間続くと、ケースは自動的に `solved` 状態に移行します。

#### フォローアップ時間の延長 {#extending-the-follow-up-time}

お客様が変更を行ってフィードバックを提供するまでに、タスクが 7 日以上かかる場合があります。

お客様が更新を行う予定日について将来の日付で合意している場合、エージェントは `Support::Block Automatic Reopen` マクロを使用することを選択できます。このマクロは `blocked_by` タグを追加し、エージェントがケースを `pending` のままにすべき理由の詳細を記入する必要のある内部コメントを作成します。

標準の pending から follow-up へのワークフローを再開するため、合意した日付に達した時点で、エージェントが手動で `blocked_by` タグを削除する必要があります。

このマクロを使用する際のベストプラクティスの提案を以下に示します:

- ユーザーから返信があるはずの日付に [タスクリマインダー](/handbook/security/customer-support-operations/zendesk/apps/us-government#zendesk-super-app) を設定する

- pending 状態のケースを定期的に確認し、約束された日付までにフォローアップを受け取れているか確認する

- 他のメンバーが状況を把握し、あなたの代わりにフォローアップできるよう、blocked-by の理由に関連する課題またはケース番号を記載する

### ラウンドロビンによるチケットのアサイン {#ticket-assignment-via-round-robin}

コアビジネスアワー中、チケットは作成されると同時に、Support Ops が構築したラウンドロビンツールに基づいてアサインされます。このツールは、シフト中の対応可能なサポートエンジニアのリストを作成し、休暇カレンダーに従って PTO 中のメンバーを除外します。次に、各エンジニアの全体的なケースの重み付けを確認し、全体の重み付けが最も低いエンジニアに新規ケースをアサインします。

### 同時刻に作成された組織のチケットのアサイン統合 {#consolidating-assignment-for-org-tickets-created-at-the-same-time}

場合によっては、単一の依頼者または組織が短期間に複数のチケットを作成し、それらが複数のサポートエンジニアにラウンドロビンでアサインされることがあります。このように作業を分割すると、複数のエンジニアが同様のファイルを要求し、環境や最近の変更について同じコンテキストを構築しようとするため、作業が重複する可能性があります。

これを避けるため、これらのチケットを単一の担当者の下にグループ化する方法は以下のとおりです:

1. お客様が 1〜2 日のうちに複数のチケットを作成し、それらのチケットがラウンドロビンでアサインされます。

2. このお客様からチケットをアサインされたサポートエンジニアが、Slack またはクラッシュセッションでそれらのチケットについて議論し、おそらく同じ環境に関するものかどうかを判断します。

3. サポートエンジニアの 1 人が、この期間中に作成されたこのお客様の全チケットのアサインを引き受けることに同意し、その直後に新たに作成された関連チケットも引き受ける場合があります。

4. そのエンジニアは、再び新規チケットを引き受ける準備ができたと判断するまでラウンドロビンから外れるよう、自分を過負荷状態としてマークします。

5. エンジニアが他のチケットのオーナーシップを引き受けた直後に同じお客様から新規チケットが来た場合、その新規チケットを確認して同じ環境に該当するかどうかを判断してください。該当する場合は、エンジニアがそれらのオーナーシップも引き受けてください。

誰もそのチケットを引き受けたくない場合は、ラウンドロビンが最初にアサインした担当者にチケットをアサインしたままにします。

### チケットに関する支援を得る {#getting-help-with-a-ticket}

一部の情報を機密として保持する必要があるため、米国政府向けチケットに関する支援を得るのは難しい場合があります。しかし、米国政府向けサポートケースを効率的に解決するために、米国政府向け以外のエンジニアが必要なサブジェクトマターエキスパート (SME) となる場面も多くあります。

[コミュニケーションガイドライン](#communication-guidelines) に従うことを条件として、`#support_self-managed` やその他の Slack チャンネルで質問することが推奨されます。

チケットについてマネージャーの支援が必要な場合、米国政府向けインスタンスにアクセスできるのは米国市民のみであるため、一部のマネージャーはチケットレベルの詳細について支援できない点に留意してください。あなたが米国市民で米国政府向けの業務に携わっており、あなたのマネージャーが米国市民でない場合、機密情報を共有せずに課題に対処できないときは、遠慮なく別のマネージャーに連絡してください。

#### チケットから生成する議論用課題 {#discussion-issues-from-tickets}

米国政府向けチケットシステム内のチケットに関する非同期コラボレーションをより円滑にするため、チケットに紐づく機密の GitLab 課題の作成をトリガーできるマクロを米国政府向けサポートエンジニア向けに用意しています。この課題はチケットが存続する間オープンのままとなり、米国政府向けサポートエンジニアがコラボレーターに情報を伝える手段を提供します。

これらの課題の中に、お客様固有の情報を決して含めないことが重要です。これらは機密ですが、米国政府向けチケットシステムにアクセスできない人にも依然として表示されます。

これらの課題の作成をトリガーするには、マクロメニューから `General::Create discussion issue` マクロを選択し、チケットを送信します。Support Ops ボットが課題を作成し、内部メモにそのリンクを記載します。

最初の時点では、この課題にはごくわずかな情報しか含まれていません。タイトルにはチケット番号が含まれ、本文にはチケットへのリンクと、ヘッダーで区切られた空のセクションが含まれます。これらのセクションには、情報が入手でき次第記入できます。これらのセクションはすべて任意です。

機密保持要件に違反しない範囲で、チケットに関する可能な限り多くの情報を含めるよう課題を編集し、その後コラボレーターに課題へのリンクを共有するか、GitLab の To-Do システムを通じて他のメンバーにメンションして関与を促します。最後に、自分を担当者として設定します。

チケットが solved としてマークされると、Support Ops ボットが自動的に課題をクローズします。

### 米国政府向けサポートのディスカバリーコール {#us-government-support-discovery-calls}

お客様が自力で GitLab スタックのトラブルシューティングに必要なすべての情報を収集して伝えることが難しい場合があります。米国政府向けポータルで技術サポートケースを起票する際、お客様はケースの担当者とディスカバリーセッションを開いて課題を実演し、必要なログやスクリーンショットを収集したうえで、サポートケースでの非同期作業に戻りたいと示すことがあります。

お客様がセッションを希望することを示すチェックボックスを選択すると、ケース履歴の冒頭にリクエストを行ったことを示す内部メモが表示されます。担当者は提供されたすべての情報を確認し、`General::Discovery call response` マクロを選択してセッションのスケジュール調整を開始してください。担当者は使い捨ての Calendly リンクを記入し、関連する可能性のある追加情報をユーザーに要求する必要があります。

`GitLab US Federal Customer Discovery Call` という Calendly 管理のイベントテンプレートがあり、Calendly 管理者に依頼することでエージェントに割り当てられます。このイベントタイプは 1 日のリードタイムを設けた 30 分のセッションです。

ディスカバリーコールのセッションを待つ間も、ケースの作業を非同期で継続することが推奨されます。

スケジュールされたセッションが実施される際、エージェントは、お客様に課題を実演してもらい、その後協力して後でケースにアップロードするアーティファクトのコレクションを作成することになる、という期待値を設定してください。

両者が次のステップについて同じ理解を持つことを確実にするため、収集したアーティファクトをお客様に再確認し、観察された内容の技術的な説明を提供する短いコール後の概要を残すことが推奨されます。

## 緊急チケットの処理 {#emergency-ticket-handling}

オンコールシフトのカバレッジ、ページング (呼び出し) の挙動、緊急受付に関する期待値については、[米国政府向けオンコール業務の進め方](/handbook/support/workflows/usgovernment_oncall/) を参照してください。

サポートで用いられる一般的な緊急対応パターンについては、[お客様緊急対応業務の進め方](/handbook/support/workflows/customer_emergencies_workflows/) を参照してください。

このセクションでは、緊急事態が受理され対応された後、米国政府向けの緊急チケットを Zendesk でどのように処理すべきかを説明します。

### 緊急事態が進行中の間 {#during-an-active-emergency}

緊急チケットは、標準のサポート業務とは異なるワークフローとして扱うべきです。

緊急事態が進行中の間:

- 最初に対応したサポートエンジニアに、チケットが自動的にアサインされます

- 緊急チケットは、その緊急事象に関する有効な調整記録として残すべきです

- 一時的な緊急時の重み付けは、お客様が実際に緊急状態にある期間に限って維持すべきです

### 緊急事態が解決された後 {#after-an-emergency-is-resolved}

緊急状態が解決されたら、そのチケットを有効な緊急事態としてオープンのままにすべきではありません。

目標は、緊急時のワークフローとその一時的なチケットの重み付けを、緊急事態が進行している期間に限定することです。

#### 標準的な解決パス {#standard-resolution-paths}

緊急事態が解決された後は、以下の標準的なパスのいずれかを使用してください:

1. 関連する緊急以外のチケットがすでに存在する場合は、緊急チケットをそのチケットにマージし、フォローアップ作業をそちらで継続します。

2. 関連する緊急以外のチケットが存在しない場合は、緊急チケットを solve またはクローズします。

緊急対応後のフォローアップ作業は、緊急以外のチケットで行うべきです。

必要に応じて、タイムラインを追いやすく保つため、緊急チケットとフォローアップチケットをリンクする内部メモを残してください。

#### 推奨されない例外: 同じチケットを緊急以外として継続する {#discouraged-exception-continuing-the-same-ticket-as-a-non-emergency}

まれに、緊急事態が解決された後も同じチケットから作業を継続するのが理にかなう場合があります。

その場合、サポートエンジニアは緊急時の重み付けを手動で削除し、ワークロードバランシングにおいてチケットが有効な緊急事態として振る舞わないようにする必要があります。多くの場合これは、残りのフォローアップ作業の量に基づいて判断しながら、チケットの重みを `5` から `1` に下げることを意味します。

このパスは推奨されておらず、フォローアップを別の緊急以外のチケットに移すことがお客様やチームにとって不要な混乱を生む場合にのみ使用すべきです。

この例外パスを使用する際は、なぜチケットをオープンのままにしたのか、そして重みを手動で調整したことを説明する内部メモを残してください。

#### なぜこれが重要なのか {#why-this-matters}

緊急チケットは、ワークロードバランシングのためにチケットの重み `5` を持ちます。

この高い重みは、エンジニアが緊急事態に積極的に対応している間、新規ケースのアサインを一時的に保留する役割を果たします。緊急事態が解決された後にチケットをクローズまたはマージすることで、重み 5 のボーナスを緊急事態が進行している期間に限定し、米国政府向けのアサインシステムにおける長期的な不均衡を防ぎます。

## 政府向け GitLab Dedicated {#gitlab-dedicated-for-government}

### ハイレベルな注意点 {#high-level-notes}

1. 慌てないでください。

2. GitLab Dedicated のチケットでは、課題が GitLab アプリケーションの問題なのか、インフラの問題なのかを判断します。[ログ](/handbook/support/workflows/dedicated_logs/) と [オブザーバビリティメトリクス](/handbook/support/workflows/dedicated_instance_health) を手がかりにしてください。

3. ログとメトリクスは境界内 (in-boundary) にあり、VPN アクセスが必要です。質問や問題がある場合は `#g_dedicated-us-pubsec` で尋ねてください。セットアップの手順は [こちら](https://gitlab.com/gitlab-com/gl-infra/us-public-sector/documentation/-/blob/main/runbooks/remote-access-vpn.md?ref_type=heads) です。

#### 支援を得る {#getting-help}

|   |   |
|---|---|
|内容|用途|
|[GitLab Dedicated 概要](/handbook/support/workflows/dedicated/)|基本的な質問のための出発点として適しています|
|[トラブルシューティングテーブル](/handbook/support/workflows/saas_sm_cheatsheet/)|GitLab Dedicated が何が異なるのかを理解する|
|`CompSecGov` で [RFH](/handbook/support/workflows/how-to-get-help/#how-to-formally-request-help-from-the-gitlab-development-team) を起票する|お客様に代わって [構成変更](/handbook/support/workflows/dedicated/#configuration-changes) を依頼する、またはインシデント以外の事項について SRE から支援を得る|
|Slack の [#support_gitlab-dedicated](https://gitlab.enterprise.slack.com/archives/C058LM1RL3V)|商用・政府向けを問わず GitLab Dedicated にフォーカスするサポートメンバー向けの一般的な質問|

### Requests for Help (RFH) {#requests-for-help}

Requests for Help (RFH) は境界内の [CompSecGov](https://compsecgov.gitlab-dedicated.us/gitlab-dedicated-us-public-sector/customer-support) にあります。CompSecGov へのアクセスは [FedRAMP Okta](https://gitlabus.okta.com) を経由します。アクセスが必要でまだ持っていない場合は、Wade または Kasey に連絡してプロセスを開始してください。

GitLab Dedicated のチケットでは、課題が GitLab アプリケーションの問題なのか、インフラの問題なのかを判断します。インフラの問題に関する RFH は CompSecGov の手順に従い、アプリケーションの問題に関する RFH は [通常の手順](/handbook/support/workflows/how-to-get-help/#how-to-formally-request-help-from-the-gitlab-development-team) に従います。

CompSecGov で RFH を起票するには、`Customer Support` グループに移動し、RFH 課題テンプレートを使用して新しい課題を作成します。

#### 緊急事態への対応 {#handling-emergencies}

[政府向け GitLab Dedicated](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated_for_government/) のお客様からの緊急事態は、[米国政府向け緊急サポート](https://about.gitlab.com/support/us-government-support/#us-government-emergency-support) のローテーションを通じて来ます。

グローバルサポートチームの [GitLab Dedicated 緊急事態への対応](/handbook/support/workflows/dedicated/#handling-gitlab-dedicated-emergencies) ワークフローが指針となります。

追加の支援を得るため、`@spt_focus-dedicated` Slack ハンドルを使用して GitLab Dedicated にフォーカスする GitLab サポートチームのメンバーに連絡することを検討してください。

[GitLab Dedicated US PubSec オンコール runbook](https://gitlab.com/gitlab-com/gl-infra/us-public-sector/documentation/-/blob/main/runbooks/on-call.md) が SSOT であり、米国政府向けサポートチームはブックマークして参照すべきです。

### アクセス権の取得 {#getting-access}

[FedRAMP Okta](https://gitlabus.okta.com/) または [CompSecGov](https://compsecgov.gitlab-dedicated.us/) へのアクセス権がない場合は、この [トレーニングモジュール](https://gitlab.com/gitlab-com/support/support-training/-/blob/main/.gitlab/issue_templates/GitLab%20Dedicated%20for%20Government.md) に従ってアクセス権の取得を進めてください。

### トラブルシューティング {#troubleshooting}

FedRAMP Okta インスタンスは、90 日間操作がないとアカウントをロックします。アカウントのロックを解除するには、ロックアウトされた CompSecGov で [アクセスリクエスト](https://compsecgov.gitlab-dedicated.us/corporate-security/access-management/-/issues) を起票する必要があります。

このプロセスについての支援は、`#g_dedicated-us-pubsec`、Wade、Ian、Kasey、Nick のいずれかに依頼してください。
