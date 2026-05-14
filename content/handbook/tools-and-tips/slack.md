---
title: "Slack"
description: "GitLab における Slack の利用とヒント"
upstream_path: /handbook/tools-and-tips/slack/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## 概要

*Slack は GitLab のチームメンバー間コミュニケーション戦略の重要な一部です。そのため、データの安全性と完全性を確保するために特別な注意が必要です。*

## プロフィール

Slack のプロフィールを記入してください。私たちは Slack のプロフィールをチームディレクトリとして利用し、他のチームメンバーと連絡を取り合うために使っています。重要なフィールドは以下のとおりです:

- 写真（人間的なつながりや認識のしやすさのため、人工的なアバターではなく顔がはっきり見える写真）
- 役職（部署とチーム名を含む GitLab の職位であるべきです）
- GitLab.com プロフィール（ユーザー名を識別するためにリンクをクリックしなくてもよいよう、表示テキストを @gitlabusername に設定）
- タイムゾーン（他の GitLab チームメンバーがあなたの利用可能時間を確認するのに便利です）
- 勤務時間（一般的にあなたが対応可能な時間を他者が把握するのに役立ちます）
- GitLab Birthdays（はい/いいえを選択して Slack での誕生日のお祝いをオプトインまたはオプトアウト）
- 市区町村／州／県および国の Location フィールド（オプション）
- 国コードを含む個人の電話番号を追加できます（オプション）
- ニックネームで呼ばれる方が好みの場合は「Display Name」の変更を検討してください
- Pronouns フィールドに代名詞を追加することを検討してください。代名詞を設定することを当たり前にすることで、伝統的でない代名詞を使う人々にとってよりインクルーシブな環境を作れます。
- 他者が名前を正しく発音できるよう、「Name Pronunciation」フィールドに発音ガイドを追加することを検討してください（例: Sid Sijbrandij なら sid see-brandy）。
- 名前の発音を助けるために「Name recording」を追加することを検討してください。
- [Calendly アカウント](/handbook/tools-and-tips/other-apps/#calendly) をセットアップして利用したい場合を除き、G-Cal Booking! フィールドには何も入力しないでください。

## チャンネル

チャンネルは Slack の中核機能です。このセクションでは Slack チャンネルを管理するためのツールやヒントについて説明します。一般的な GitLab Slack チャンネルのリストについては、[GitLab Communication Chat](/handbook/communication/chat) を参照してください。

### チャンネルを参照する

Slack アプリの左ペインにある "Channels" をクリックすると、すべての利用可能な GitLab チャンネルを参照できます。
そこから、すべてのチャンネル、その作成者、メンバー数を確認できます。
他のチームメンバーにお気に入りのチャンネルを推薦してもらうのも気軽にどうぞ。
全チームメンバーは自動的に `#company-fyi` と `#whats-happening-at-gitlab` チャンネルに追加され、ここで全社向けのアナウンスや情報共有が行われます。
新入社員全員がデフォルトで追加されるチャンネルもいくつかあります。たとえば `#celebrations`、`#new_team_members`、`#questions`、`#random`、`#thanks` などです。これらのチャンネルはオプションですが、チームメンバーが交流し互いを知る素晴らしい場所だと考えています。

### サイドバーセクションでチャンネルを整理する

Slack は [チャンネルをセクションで整理する](https://slack.com/intl/en-de/help/articles/360043207674-Organize-conversations-with-custom-sections) ことをサポートするようになりました。以前はこれは「スター付き」チャンネルでのみ可能でした。Slack の **環境設定** に移動して `Sidebar` ナビゲーション項目を選択します。`Create Section` をクリックして左サイドバーに新しいセクションを作成できます。既存の各セクションの設定メニューからも作成できます。

最も頻繁に使用するチャンネルや、特定のチームのグループ化など、お好みで整理してください。ドラッグ＆ドロップしたり、セクションを非表示にしたりもできます。たとえば、`info` セクションを作成して `#company-fyi` と `#whats-happening-at-gitlab` をチャンネルとして追加できます。さらに、`team` セクションを追加して関連するすべてのチャンネルをそこに移動することもできます。

Slack の <b>[スター付きチャンネル](https://slack.com/help/articles/201331016-Star-channels-and-direct-messages)</b> 機能を使って 3 つのカテゴリのチャンネルにスポットライトを当て、<b>[ミュート機能](https://slack.com/help/articles/204411433-Mute-channels-and-direct-messages)</b> で気を散らしてしまうチャンネルを静かにし、最も重要なものとして **すべてのメッセージを既読にマーク** 機能（デスクトップで `Shift` と `Esc` を同時に押すことで簡単に切り替えできます）を使って瞬時にすっきりさせることを検討してください。

3 つのスポットライトチャンネルアプローチの例を以下に示します。Slack ではスター付きチャンネルのサイドバーを <b>[カスタムセクション](https://slack.com/help/articles/360043207674-Organize-your-sidebar-with-custom-sections)</b> で整理して優先順位を視覚的に上げ下げでき、最初に何を見るかを制御できます。

1. 仕事に重要なチャンネル（例: コーポレートマーケティングのチームメンバーは `#marketing`、`#corp-mktg`、`#newswire`、`#external-comms`、`#website`、`#handbook` にスターを付けるかもしれません）
1. GitLab に重要なチャンネル（例: `#company-fyi`、`#whats-happening-at-gitlab`、`#team-member-updates`、`#e-group`、`#ceo`、`#new-vacancies`）
1. 自分の興味に重要なチャンネル（例: `#travel`、`#remote`、`#daily-gratitude`、`#mental_health_aware`、`#intheparenthood`、`#women`、`#diversity_inclusion_and_belonging`）

### スターでチャンネルとダイレクトメッセージをソートする

ダイレクトメッセージとチャンネルをソートするには、ダイレクトメッセージまたはチャンネルを開いてスターアイコンをクリックします。
詳細は [チャンネルまたはダイレクトメッセージにスターを付ける](https://slack.com/intl/en-gb/help/articles/201331016-Star-channels-and-direct-messages#star-a-channel-or-dm) を参照してください。

### チャンネルへのアクセス

GitLab チームメンバーに加えて、[Core Team](https://about.gitlab.com/community/core-team/) のメンバーや GitLab 外のアドバイザーといった指定されたグループにも、私たちの Slack チャンネルへのアクセスが許可されることがあります。
ただし、`#a_` で始まる内部チャンネルは、招待された GitLab チームメンバーのみに制限されます。
顧客に関する機密会話は `#a_` チャンネルにのみ制限する必要があります。
内部チャンネルの根拠は、第三者が GitLab 顧客の情報を知ることが多くの契約違反になりうるためです。
特に、第三者が顧客の競合相手であるかもしれない場合は顕著です。

### 招待

Slack チャンネルに人々を招待する [複数の方法](https://slack.com/intl/en-gb/help/articles/201980108-Add-people-to-a-channel) があります。
最も簡単な方法は `/invite @jenny` のようにタイプして招待コマンドを使用することです。
メンションメッセージで人を招待することは避けてください。
たとえば `@jenny` は他者の気を散らすメッセージを生み出してしまいます。

### グループ DM をプライベートチャンネルに変更する

複数人とのグループダイレクトメッセージにいる場合、追加の通知を避けたり追加のチームメンバーを追加・削除できるよう、[プライベートチャンネルに変更](https://slack.com/intl/en-gb/help/articles/217555437-Convert-a-group-direct-message-to-a-private-channel) できます。

Slack Enterprise Grid では、グループ DM を開始してチャンネルに変換すると、そのチャンネルは「all workspaces」に置かれることになります。「All workspace」チャンネルには [保持期限がない](https://gitlab.com/gitlab-com/it/security/issue-tracker/-/issues/66) ため、私たちの [90 日保持](/handbook/communication/#slack) ポリシーと矛盾します。これを是正するため、毎日チャンネルをメインの GitLab ワークスペースに移動するスクリプトがあります。影響を受けるチャンネルにいる場合、Slackbot から次のメッセージを受け取ります:

`"Slack Owner has removed #<channel> from all other "GitLab" workspaces using the channel management tool. Only people from "GitLab" can access the channel now. Learn more."`

「GitLab - Finance」ワークスペースまたは他のセカンダリワークスペース内では、グループ DM をプライベートチャンネルに変換しないでください。これらは変換されてメインの「GitLab」ワークスペースに置かれてしまうためです。代わりに、新しいプライベートチャンネルを開始して参加者を追加してください。

### プライベートチャンネルをパブリックチャンネルに変更する

Slack 管理者だけがプライベートチャンネルをパブリックチャンネルに変更できます。

既存のプライベートチャンネルをパブリックにすることを依頼するには、[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests) を提出してください。

## Slack でのノイズの管理と集中の創出

Slack はデフォルト状態では混沌とした場所になりがちです。以下を実装して構造と集中を加えることを検討してください。ただし、アプローチに関わらず、毎日処理して受け入れられる以上に有用な情報が Slack で共有されている可能性が高いことを忘れないでください。

意図的な整理の取り組みは重要ですが、[すべてを知ることは不可能](/handbook/values/#its-impossible-to-know-everything) ということを忘れないでください。チームとして、私たちは他者が見落としている情報を見つけることがあり、[他者の成功を見届ける](/handbook/values/#see-others-succeed) よう努める中で関連性があれば情報を表に出すべきです。Slack チャンネルの管理については、自分にとって最も理にかなったタイミング（1 日に複数回、毎日、毎週など）で特定のチャンネルをレビューする一定の時間ブロックを設定することを検討してください。

以下は通知の管理と Slack のノイズ削減に関するベストプラクティスとヒントへの便利なリンクです。あなたにとって *重要／関連性のある* ことに関する通知を増やし、*そうでない* ことに関する通知を減らせるよう、定期的に通知設定をチェックすることをおすすめします。

- [Slack のノイズを減らす](https://slack.com/intl/en-gb/help/articles/218551977-Reduce-noise-in-Slack)
- [通知を設定する](https://slack.com/intl/en-gb/help/articles/201355156-Guide-to-desktop-notifications#configure-your-notifications)
- [デスクトップ通知ガイド](https://slack.com/intl/en-gb/help/articles/201355156-Guide-to-desktop-notifications#channel-specific-and-group-dm-notifications)
- [チャンネル固有およびグループ DM 通知](https://slack.com/intl/en-gb/help/articles/201355156-Guide-to-desktop-notifications#channel-specific-and-group-dm-notifications)
- [未読の会話のみを表示する](https://slack.com/help/articles/360043207674-Organize-your-sidebar-with-custom-sections-Organize-your-sidebar-with-custom-sections-Organize-your-sidebar-with-custom-sections#manage-conversation-display)
- [GitLab チームメンバー Brendan O'leary による Slack の使い方](https://blog.boleary.dev/how-i-slack/)

### 未読の会話のみを表示する

たくさんのチャンネルとダイレクトメッセージがあると、Slack は圧倒的になり得ます。Slack のアクティビティを追跡しやすくし、インターフェースをシンプルにするために、
[未読の会話のみを表示](https://slack.com/intl/en-au/help/articles/360043207674-Organise-your-sidebar-with-customised-sections-Organise-your-sidebar-with-customised-sections-Organise-your-sidebar-with-customised-sections#manage-conversation-display) することを検討してください。

### Slack リマインダー

Slack リマインダーは、すべてを頭の中に保持することなく物事を覚えておくのに役立ちます。
自分自身や他のチームメンバーにリマインダーを設定できます。
指定した時刻に通知を受け取ります。

`/remind` コマンドで自然言語を使用できます。
ヒントを得るには `/remind help` とタイプしてください。
Slack リマインダーの完全な情報は [Slack ヘルプ](https://slack.com/intl/en-gb/help/articles/208423427-Set-a-reminder) を参照してください。

### 通知を処理する時間を確保する

1 日のうちに専用の時間を組み込むことで、Slack が引き起こす気を散らす要因を最小限にできます。朝や午後に 15 分または 30 分のブロックを設けて、コーヒーを飲みながら見逃したかもしれないメッセージに追いつくことを検討してください。設定した時間が終わったら、Slack アプリを閉じて次のプロジェクトに移ります。終了時間を決めておくことで自分の制御感が高まり、[すべてを知ることは不可能](/handbook/values/#its-impossible-to-know-everything) ということを思い出させてくれます。

### スケジュール送信される Slack メッセージ

完全リモート環境で働いていると、家庭と仕事の境界線を引くのが難しいことがあり、特に勤務時間外に Slack メッセージをチェックしたくなることがあります。GitLab でよりインクルーシブな環境を育むため、メッセージを作成しても受信者が勤務時間を始めるまで送信しないことで、受信者の勤務時間外にメッセージを送信するのを避けられます。Slack ではメッセージを後で送信するようスケジュール設定でき、これは即時の混乱を減らすのに役立ちます。スケジュールされたメッセージは送信前に編集、削除、キャンセルできるため、家族にやさしいツールとして使えます。このアプローチは私たちの [非同期コミュニケーションへのバイアス](/handbook/values/#bias-towards-asynchronous-communication) と整合しています。

簡単です: メッセージを作成中に、紙飛行機アイコンの隣にある矢印アイコンをクリックして、後の時刻にスケジュール設定できます。

Slack でのメッセージスケジューリングの詳細は、[Slack ヘルプ](https://slack.com/help/articles/201457107-Send-and-read-messages#:~:text=hide%20formatting%20tools-,Send%20or%20schedule%20messages,-You%20can%20send) を参照してください。

### 視覚的な気晴らしを最小化する

アニメーション画像と絵文字は会話に意味を加えますが、気を散らすこともあります。
静的な画像と絵文字を好む場合は、アニメーションを無効にしてください。
詳細は [アニメーション画像と絵文字を管理する](https://slack.com/intl/en-gb/help/articles/228023907-Manage-animated-images-and-emoji) を参照してください。

## Slack ステータス

Slack では「Away」や「Lunch」などの標準メッセージや、カスタムメッセージとお好みの絵文字を使って、GitLab チームメンバー向けに [ステータス](https://slack.com/blog/productivity/set-your-status-in-slack) を設定できます。

休日や休暇で仕事を離れる場合、[Time Off by Deel](/handbook/people-group/time-off-and-absence/time-off-types/) を使ってステータスを更新できます。
これは、自分が対応可能かどうかをチームに知らせるのに最適な方法です。

Google カレンダーに基づいて Slack ステータスを「会議中」に自動設定するには、[Google Calendar アプリ](https://gitlab.slack.com/apps/ADZ494LHY-google-calendar?next_id=0) を Slack アカウントに追加してください。

### おやすみ時間

Slack は「おやすみ時間」をサポートしているので、夜中や家族の対応中に通知を受けることはありません。
Slack アプリの左ペイン上部にあるベルをクリックして「おやすみ時間」を設定できます。
20 分から 24 時間までスヌーズすることもできます。
注: おやすみ時間は緊急時にはオーバーライドされる可能性があります。
詳しくは Slack のドキュメントを参照してください。

## クイックスイッチャー

クイックスイッチャーは Slack を生産的に使う上で知っておくべき素晴らしい機能です。
名前のとおり、チャンネルとダイレクトメッセージを素早く切り替えられます。
Mac では <kbd>Cmd</kbd>+<kbd>k</kbd>、Windows または Linux では <kbd>Ctrl</kbd>+<kbd>k</kbd> で起動し、チャットしたい人や興味のあるチャンネルの名前を入力し始めます。
そして <kbd>↑</kbd> と <kbd>↓</kbd> キーで提案を移動し、<kbd>enter</kbd> を押して選択できます。

## メッセージ内のリンクのアンファール

Slack には、Slack に投稿されたメッセージに含まれる [リンクをアンファール](https://api.slack.com/docs/message-link-unfurling) する組み込み機能があります。
これによりメッセージの隣にリンクのプレビューが投稿されます。
プレビューの左上にある「x」を押すと、アンファールされたリンクのプレビューを削除できます。
これにより添付の削除を確認するプロンプトが表示され、「Yes, remove」を押せます。

![アンファール添付の削除](/images/tools-and-tips/unfurl-remove.png)

確認プロンプトでは *「Disable future attachments from this website」* というチェックボックスも見えるかもしれません。
ワークスペース管理者として無効化オプションを選択すると、**ワークスペース全体でリンク／ドメインが拒否リストに登録され、すべてのユーザーに影響します**。
誤ってリンクやドメインを拒否リストに登録した場合、ワークスペース管理者ポータルの [Settings & Permissions](https://gitlab.slack.com/admin/attachments) で変更できます。

`#whats-happening-at-gitlab` のようなチャンネルで、複数のリンクプレビュー付きの投稿を共有しているチームメンバーがおり、それが気を散らすと感じる場合は、[全員がモデレーター](/handbook/communication/#everyone-is-a-moderator) の精神で行動し、次のいずれかを検討してください:

- DM で知らせる: メッセージにノイズを加えていることを伝えます。
- メッセージに `:consider-removing-link-previews-to-keep-the-channel-tidy-please:` 絵文字でリアクションする。

## カスタムテーマ

Slack ではインターフェースの色をカスタマイズできます。
これは複数の Slack アカウントを使用する際に特に便利で、異なるテーマを設定することで瞬時に区別しやすくなります。
テーマセレクタは Preferences > Themes から利用できます。

GitLab テーマをセットアップするには、自分自身に次のメッセージを送信してください: `#643685,#634489,#FC6D26,#ffffff,#71558f,#ffffff,#FCA326,#e24329`。そして `Switch sidebar theme` ボタンを押します。

## Slack アプリ

多くのアプリケーションが Slack と統合できます。
推奨されるアプリ:

1. Google Calendar - カレンダーを Slack と統合することで、ミーティングに関する通知を Slack で直接受け取れます。
最も重要なのは、ミーティングが始まる 1 分前に、Zoom で開催されるミーティングへの参加リンクを含むミーティング情報のメッセージを受け取ることです。
任意のメッセージフィールドに /gcal とタイプして統合をセットアップできます。

### Slack に新しいアプリを追加する必要がある場合

GitLab はアプリのインストール能力を制限することを選択しており、ワークスペース向けに特定のアプリを承認または制限するプロセスがあります。Slack に新しいアプリを追加するには、[ベンダー承認 Issue](https://gitlab.com/gitlab-com/Finance-Division/procurement-team/procurement/-/issues/new?issuable_template=app_integrations) を作成する必要があります。すべての関係者によって承認されたら、アプリを Slack に追加する承認をリクエストしてください:

1. 左サイドバーの Apps をクリックして Available Apps を見つけ、私たちのチームによって事前承認されていないことを確認してください。アプリディレクトリで事前承認済みアプリを見つけるには、左カラムの Categories の下にある Pre-Approved をクリックします。
1. アプリが事前承認されていない場合、Add to Slack をクリックできます。
1. リクエストの詳細について追加コンテキストを含むカスタムメッセージを追加し、ベンダー承認 Issue にリンクしてください。
1. Submit をクリックします。リクエストがチームによってレビューされると、Slackbot からダイレクトメッセージを受け取ります。

**これはレビューまたは承認されていない新しいアプリにのみ必要です。** リクエストが Slack でアプリケーションがどう動作するかについて新しいプロセスを追加したり既存のプロセスを更新したりすることである場合は、私たちの [Business Technology Change Management](https://internal.gitlab.com/handbook/IT/it-change-management/) プロセスを参照してください。

## Slackbot

私たちはよくある質問への対応に役立つ Slackbot をいくつか持っており、その他にもインクルーシブな言葉遣いを保ち、私たちの [ダイバーシティ・インクルージョン・ビロンギング・バリュー](/handbook/values/#diversity-inclusion) と密接に整合させるのに直接役立つ Slackbot もあります。
以下のリストはダイバーシティ・インクルージョン・ビロンギングのために使うものと、使うべき推奨される変更を反映したものです。このリストは代表的なもので完全ではありません。リスト上の用語はイテレーションを重ねるにつれて追加・削除されていきます。
GitLab チームメンバーとして、私たちが Slack で使用しているアクティブな Slackbot を、GitLab > Customize Your Workspace > Slackbot で確認できます。

| `hey guys, hi guys, you guys, salesman, salesmen, businessman, businessmen` | 複数のジェンダーの人々を含めていますか？ 代わりに「everyone」、「team」、「y'all」などの利用を検討してください。[ハンドブックでインクルーシブな言葉遣いについてもっと読めます](/handbook/values/#inclusive-language--pronouns) |
| `on your toes, on anybody's toes` | おそらく問題ありません。<br><br>会社が成長するにつれて、関わる人が増えるため意思決定の速度は遅くなります。私たちは [短いつま先 (short toes) を持つ](/handbook/values/#short-toes) ことでこれに対抗し、他者が自分のドメインに貢献することを快く受け入れるべきです。 |
| `aggressive` | ambitious という意味で言いましたか？ |
| `gitlabber, gitlabbers` | `gitlabber` という用語はよく誤用される用語です。代わりに「GitLab team member」を使用してください。[ハンドブックでこれについてもっと読めます](/handbook/communication/top-misused-terms/) |

## セキュリティ

### サインイン要件

90 日ごとに、すべてのユーザーは Slack からログアウトされ、各デバイスで Okta 経由で再認証する必要があります。これは、すべての BYOD デバイスが現在の Okta Verify クライアントで登録され、Okta 管理ダッシュボードで可視化されることを保証するためです。また、[Okta Verify Device Trust](/handbook/security/corporate/systems/okta/verify/) から一時的に除外されたデバイス上に無期限のセッションが残らないようにします。

### プロフィール削除

2024 年 12 月以降、毎年 6 月と 12 月に、CorpSec は 5 年以上非アクティブ化されているプロフィールの削除を Slack サポートにリクエストします。GitLab を離れて 5 年未満の元チームメンバーについては、Name、GitLab Email、Title、GitLab.com username 以外のすべてのフィールドを API で削除します。これらのフィールドは、現在のチームメンバーが過去のエピック、マージリクエスト、Issue の歴史的コンテキストを見つけられるよう残されます。
