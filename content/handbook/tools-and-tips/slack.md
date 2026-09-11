---
title: "Slack"
description: "GitLab における Slack の利用とヒント"
upstream_path: /handbook/tools-and-tips/slack/
upstream_sha: 0b4843d337f9f8173d56982fff942cb2b5a78543
translated_at: "2026-09-11T13:14:29+00:00"
translator: claude
stale: false
lastmod: "2026-09-11T13:54:05+02:00"
---

## 概要

*Slack は GitLab のチームメンバー間コミュニケーション戦略の重要な一部です。そのため、データの安全性と完全性を確保するために特別な注意が必要です。*

## はじめに

Slack を初めて使いますか？ワークスペースは、人々と会話を一か所に集めます。チャンネルはトピックごとに会話を整理し、ダイレクトメッセージ（DM）は特定の人との会話に使います。スレッドは、メッセージへの返信をまとめます。

1. 他のチームメンバーにあなたを認識してもらえるように、[プロフィールを設定します](#profile)。
1. チームや自分の興味に合った [チャンネルを探して参加します](#browse-channels)。
1. [スレッドへの返信とメンションの使い方](#threads-and-mentions) を学びます。
1. 勤務時間に合わせて [通知スケジュールを設定します](#do-not-disturb-hours)。

投稿する前に、GitLab の [Slack コミュニケーションガイドライン](/handbook/communication/#general-guidelines) を読んでください。Slack は非同期のツールなので、すべてを読む必要はなく、即時の返信を期待する必要もありません。

## プロフィール {#profile}

Slack のプロフィールを記入してください。私たちは Slack のプロフィールをチームディレクトリとして利用し、他のチームメンバーと連絡を取り合うために使っています。人間的なつながりや認識のしやすさのため、人工的なアバターではなく顔がはっきり見える写真を使ってください。Slack の [プロフィール写真のアップロードガイド](https://slack.com/help/articles/115005506003-Upload-a-profile-photo) を参照してください。

デスクトップで Slack のプロフィールを開くには、次の操作を行います。

1. 左サイドバーで自分のプロフィール写真（アバター）を選択します。
1. メニューから **Profile** を選択します。

デスクトップとモバイルでの操作手順は、Slack の [プロフィールの編集ガイド](https://slack.com/help/articles/204092246-Edit-your-profile) を参照してください。
**About me** のカスタムフィールドはデスクトップで編集してください。Slack のモバイルアプリはカスタムプロフィールフィールドの編集に対応していません。GitLab のプロフィールには、**Edit your profile** と **About me** の両方に **Pronouns** フィールドがあります。

### プロフィールの編集

プロフィールで、右側の最初の **Edit** ボタンを選択します。

- **Full name。** フルネームを入力します。
- **Display name。** ニックネームで呼ばれることを希望する場合はニックネームを使うか、`nickname (full name)` のようにフルネームと組み合わせます。
- **Title。** 部署とチーム名を含む GitLab での職位を使います。
- **Pronouns。** よりインクルーシブな環境づくりに役立つよう、代名詞の追加を検討してください。
- **Name recording。** 名前の発音を助けるために、録音の追加を検討してください。
- **Name pronunciation。** 発音ガイドの追加を検討してください。たとえば、Michael Friedrich の英語での発音は `MY-kul FREED-rick` です。
- **Time zone。** 他の GitLab チームメンバーがあなたの対応可能な時間を確認できるようにします。

### 連絡先情報

プロフィールで、**Contact information** の横にある **Edit** を選択します。

- **Phone（オプション）。** 国コードを含む個人の電話番号を追加します。

### 自己紹介

プロフィールで、**About me** の横にある **Edit** を選択します。

- **Location（オプション）。** 市区町村、州または県、国を追加します。
- **Job Description。** 表示テキストと URL を追加します。例：[Developer Advocate](/handbook/marketing/developer-relations/developer-advocacy/#team-members-and-focus-areas)。
- **Address（オプション）**
- **G-Cal booking。** [Calendly](/handbook/tools-and-tips/other-apps/#calendly) を使う場合は、予約ページの URL と `Book a meeting` などの表示テキストを追加します。それ以外の場合は、このフィールドを空欄にしてください。
- **Pronouns。** よりインクルーシブな環境づくりに役立つよう、代名詞の追加を検討してください。
- **Spoken Languages。** 社外の人々との部門横断の業務に役立つよう、話せる言語を追加します。
- **Hobbies（オプション）**
- **Working hours。** 一般的にあなたが対応可能な時間を他の人が把握できるようにします。
- **README Link。** 他の人があなたについて詳しく知ることができる個人の README へのリンクを、`About me` などの表示テキストで追加します。[README の概要](/handbook/communication/#readmes) を参照してください。
- **GitLab Birthdays。** はいまたはいいえを選択し、Slack での誕生日のお祝いに参加するかどうかを設定します。

## チャンネル

チャンネルは Slack の中核機能です。このセクションでは Slack チャンネルを管理するためのツールやヒントについて説明します。一般的なチャンネルや質問先については、[GitLab の Slack チャンネルとその用途](/handbook/communication/chat/#key-slack-channels) を参照してください。

### チャンネルを参照する {#browse-channels}

[パブリックチャンネルを参照する](https://slack.com/help/articles/205239967-Join-a-channel) には、**Home** から **Directories** を選択し、**Channels** タブを選択します。
チャンネル名や説明で検索するか、チャンネルを選択して参加前にプレビューします。
パブリックチャンネルに参加するには、**Join channel** を選択します。プライベートチャンネルに参加するには、既存のメンバーに追加を依頼してください。
他のチームメンバーにお気に入りのチャンネルを推薦してもらうのも気軽にどうぞ。
全チームメンバーは自動的に `#company-fyi` と `#whats-happening-at-gitlab` チャンネルに追加され、ここで全社向けのアナウンスや情報共有が行われます。
新入社員全員がデフォルトで追加されるチャンネルもいくつかあります。たとえば `#celebrations`、`#new_team_members`、`#questions`、`#random`、`#thanks` などです。これらのチャンネルはオプションですが、チームメンバーが交流し互いを知る素晴らしい場所だと考えています。

### スレッドとメンション {#threads-and-mentions}

スレッドはメッセージの下に返信をまとめ、会話を追いやすくします。デスクトップで返信するには、メッセージにカーソルを合わせて **Reply in thread** を選択し、そこで返信を送信します。Slack の [スレッドの使用ガイド](https://slack.com/help/articles/115000769927-Use-threads-to-organize-discussions) を参照してください。

- 既存の質問や議論に返信する際は、GitLab の [Slack コミュニケーションガイドライン](/handbook/communication/#general-guidelines) に従って **スレッド内で返信します**。
- 相手の注意を引く必要がある場合は、`@` を入力して名前を選択し、**その人をメンションします**。単にその人について言及する場合は、メンションせずに名前を書いてください。
- **`@here` と `@channel` は緊急かつ重要なメッセージにのみ使ってください。** GitLab の [他の人の時間を尊重するためのガイダンス](/handbook/communication/#be-respectful-of-others-time) を参照してください。Slack のメッセージは非同期なので、即時の返信を期待しないでください。

### サイドバーセクションでチャンネルを整理する

[サイドバーのカスタムセクション](https://slack.com/help/articles/360043207674-Organize-your-sidebar-with-custom-sections) を使って、チャンネルとダイレクトメッセージをグループ化します。チャンネルまたはダイレクトメッセージを開き、上部のスターアイコン（または現在のセクションの絵文字）を選択して、**Create new section** を選択します。セクションに名前を付け、**Create** を選択します。

最も頻繁に使用するチャンネルや、特定のチームのグループ化など、お好みで整理してください。ドラッグ＆ドロップしたり、セクションを非表示にしたりもできます。たとえば、`info` セクションを作成して `#company-fyi` と `#whats-happening-at-gitlab` をチャンネルとして追加できます。さらに、`team` セクションを追加して関連するすべてのチャンネルをそこに移動することもできます。

目的に合った操作を選んでください。

- **会話にスターを付ける** と、**Starred** セクションで見つけやすくなります。[チャンネルとダイレクトメッセージにスターを付ける方法](https://slack.com/help/articles/201331016-Star-channels-and-direct-messages) を参照してください。
- **会話をミュートする** と、その会話からの通知を減らせます。[チャンネルとダイレクトメッセージをミュートする方法](https://slack.com/help/articles/204411433-Mute-channels-and-direct-messages) を参照してください。
- Slack 全体の未読表示を消したい場合は、デスクトップで `Shift` + `Esc` を押して **すべてのメッセージを既読にマークします**。実際に読んでいないメッセージも既読になります。

たとえば、用途に応じて会話を 3 つのカスタムセクションに分類します。

1. 仕事に重要なチャンネル（例：Product and Technical Marketing のチームメンバーは `#marketing`、`#gitlab-gtm`、`#ask-product-and-technical-marketing`、`#external-comms`、`#handbook` にスターを付けるかもしれません）
1. GitLab に重要なチャンネル（例：`#company-fyi`、`#whats-happening-at-gitlab`、`#team-member-updates`、`#ceo`、`#field-fyi`、`#engineering-fyi`、`#thanks`）
1. 自分の興味に重要なチャンネル（例：`#travel`、`#parenting`、`#women`、`#diversity_inclusion_and_belonging`、`#music`、`#dog`、`#i-made-this`、`#all-caps`、`#lego`）

### スターでチャンネルとダイレクトメッセージをソートする

ダイレクトメッセージまたはチャンネルにスターを付けるには、その会話を開いて上部のスターアイコンを選択します。カスタムセクションを使っている場合は、メニューから **Starred** を選択します。
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

既存のプライベートチャンネルをパブリックにすることを依頼するには、[アクセスリクエスト](/handbook/eta/corporate-it/end-user-services/access-requests) を提出してください。

## Slack でのノイズの管理と集中の創出

Slack はデフォルト状態では混沌とした場所になりがちです。以下を実装して構造と集中を加えることを検討してください。ただし、アプローチに関わらず、毎日処理して受け入れられる以上に有用な情報が Slack で共有されている可能性が高いことを忘れないでください。

意図的な整理の取り組みは重要ですが、[すべてを知ることは不可能](/handbook/values/#its-impossible-to-know-everything) ということを忘れないでください。チームとして、私たちは他者が見落としている情報を見つけることがあり、[他者の成功を見届ける](/handbook/values/#see-others-succeed) よう努める中で関連性があれば情報を表に出すべきです。Slack チャンネルの管理については、自分にとって最も理にかなったタイミング（1 日に複数回、毎日、毎週など）で特定のチャンネルをレビューする一定の時間ブロックを設定することを検討してください。

以下は通知の管理と Slack のノイズ削減に関するベストプラクティスとヒントへの便利なリンクです。あなたにとって *重要／関連性のある* ことに関する通知を増やし、*そうでない* ことに関する通知を減らせるよう、定期的に通知設定をチェックすることをおすすめします。

- [Slack のノイズを減らす](https://slack.com/intl/en-gb/help/articles/218551977-Reduce-noise-in-Slack)
- [Slack の通知を設定する](https://slack.com/help/articles/201355156-Configure-your-Slack-notifications)
- [未読の会話のみを表示する](https://slack.com/help/articles/360043207674-Organize-your-sidebar-with-custom-sections)
- [Brendan O'Leary による Slack の使い方](https://blog.boleary.dev/how-i-slack/)

### 未読の会話のみを表示する

たくさんのチャンネルとダイレクトメッセージがあると、Slack は圧倒的になり得ます。Slack のアクティビティを追跡しやすくし、インターフェースをシンプルにするために、
[未読の会話のみを表示](https://slack.com/help/articles/360043207674-Organize-your-sidebar-with-custom-sections) することを検討してください。

### Slack リマインダー

Slack リマインダーは、すべてを頭の中に保持することなく物事を覚えておくのに役立ちます。
自分自身またはチャンネルにリマインダーを設定できます。
個人用のリマインダーでは、**Later** を開き、プラス記号を選択して日付、時刻、リマインダーのテキストを指定します。
チャンネルのリマインダーでは、`/remind [#channel] [what] [when]` を使います。
詳細は、Slack の [リマインダーの設定ガイド](https://slack.com/help/articles/208423427-Set-a-reminder) を参照してください。

### 通知を処理する時間を確保する

1 日のうちに専用の時間を組み込むことで、Slack が引き起こす気を散らす要因を最小限にできます。朝や午後に 15 分または 30 分のブロックを設けて、コーヒーを飲みながら見逃したかもしれないメッセージに追いつくことを検討してください。設定した時間が終わったら、Slack アプリを閉じて次のプロジェクトに移ります。終了時間を決めておくことで自分の制御感が高まり、[すべてを知ることは不可能](/handbook/values/#its-impossible-to-know-everything) ということを思い出させてくれます。

### スケジュール送信される Slack メッセージ

オールリモート環境で働いていると、家庭と仕事の境界線を引くのが難しいことがあり、特に勤務時間外に Slack メッセージをチェックしたくなることがあります。GitLab でよりインクルーシブな環境を育むため、メッセージを作成しても受信者が勤務時間を始めるまで送信しないことで、受信者の勤務時間外にメッセージを送信するのを避けられます。Slack ではメッセージを後で送信するようスケジュール設定でき、これは即時の混乱を減らすのに役立ちます。スケジュールされたメッセージは送信前に編集、削除、キャンセルできるため、家族にやさしいツールとして使えます。このアプローチは私たちの [非同期コミュニケーションへのバイアス](/handbook/values/#bias-towards-asynchronous-communication) と整合しています。

簡単です: メッセージを作成中に、紙飛行機アイコンの隣にある矢印アイコンをクリックして、後の時刻にスケジュール設定できます。

Slack でのメッセージスケジューリングの詳細は、[Slack ヘルプ](https://slack.com/help/articles/201457107-Send-and-read-messages) を参照してください。

### 視覚的な気晴らしを最小化する

アニメーション画像と絵文字は会話に意味を加えますが、気を散らすこともあります。
静的な画像と絵文字を好む場合は、アニメーションを無効にしてください。
詳細は [アニメーション画像と絵文字を管理する](https://slack.com/intl/en-gb/help/articles/228023907-Manage-animated-images-and-emoji) を参照してください。

## Slack ステータス

[Slack ステータス](https://slack.com/help/articles/201864558-Set-your-Slack-status-and-availability) を使って、他の GitLab チームメンバーにメッセージと絵文字を共有します。ステータスは、アクティブか離席中かを示す在席状況の表示とは別のものです。

休日や休暇で仕事を離れる場合、[Time Off by Deel](/handbook/people-group/time-off-and-absence/time-off-types/) を使ってステータスを更新できます。
これは、自分が対応可能かどうかをチームに知らせるのに最適な方法です。

Google Calendar に基づいて Slack ステータスを「会議中」に自動設定するには、[Google Calendar アプリ](https://gitlab.slack.com/apps/ADZ494LHY-google-calendar?next_id=0) を Slack アカウントに追加してください。

### おやすみ時間 {#do-not-disturb-hours}

集中したいときや仕事を離れているときは、通知を一時停止してください。デスクトップでは、サイドバーのプロフィール写真を選択し、**Notifications** にカーソルを合わせて、期間または **Custom** を選択します。

定期的に通知を止める時間を設定するには、プロフィールメニューから **Preferences** を開き、**Working hours** で通知スケジュールを設定します。
緊急のダイレクトメッセージでは、送信者は 1 日 1 回、一時停止中でも通知を送信できます。
Slack の [通知の一時停止とスケジュール設定のガイド](https://slack.com/help/articles/214908388-Pause-your-Slack-notifications) を参照してください。

## クイックスイッチャー

クイックスイッチャーは Slack を生産的に使う上で知っておくべき素晴らしい機能です。
名前のとおり、チャンネルとダイレクトメッセージを素早く切り替えられます。
Mac では <kbd>Cmd</kbd>+<kbd>k</kbd>、Windows または Linux では <kbd>Ctrl</kbd>+<kbd>k</kbd> で起動し、チャットしたい人や興味のあるチャンネルの名前を入力し始めます。
そして <kbd>↑</kbd> と <kbd>↓</kbd> キーで提案を移動し、<kbd>enter</kbd> を押して選択できます。

## メッセージ内のリンクのアンファール

**アンファール** とは、Slack がメッセージ内の URL の隣にリンクのプレビューを自動表示することです。プレビューには、ページのタイトル、説明、画像などの詳細を表示できます。
デスクトップでプレビューを削除するには、プレビューにカーソルを合わせ、左側の **x** を選択します。
Slack の [リンクの共有とプレビューの管理ガイド](https://slack.com/help/articles/204399343-Share-links-and-set-preview-preferences) を参照してください。

![アンファール添付の削除](/images/tools-and-tips/unfurl-remove.png)

確認プロンプトでは *「Disable future attachments from this website」* というチェックボックスも見えるかもしれません。
ワークスペース管理者として無効化オプションを選択すると、**ワークスペース全体でリンク／ドメインが拒否リストに登録され、すべてのユーザーに影響します**。
誤ってリンクやドメインを拒否リストに登録した場合、ワークスペース管理者ポータルの [Settings & Permissions](https://gitlab.slack.com/admin/attachments) で変更できます。

`#whats-happening-at-gitlab` のようなチャンネルで、複数のリンクプレビュー付きの投稿を共有しているチームメンバーがおり、それが気を散らすと感じる場合は、[全員がモデレーター](/handbook/communication/#everyone-is-a-moderator) の精神で行動し、次のいずれかを検討してください:

- DM で、メッセージにノイズを加えていることを伝えます。
- メッセージに `:consider-removing-link-previews-to-keep-the-channel-tidy-please:` 絵文字でリアクションする。

## カスタムテーマ

Slack ではインターフェースの色をカスタマイズできます。
これは複数の Slack アカウントを使用する際に特に便利で、異なるテーマを設定することで瞬時に区別しやすくなります。
テーマセレクタは Preferences > Themes から利用できます。

GitLab テーマをセットアップするには、自分自身に次のメッセージを送信してください: `#643685,#634489,#FC6D26,#ffffff,#71558f,#ffffff,#FCA326,#e24329`。そして `Switch sidebar theme` ボタンを押します。

## Slack アプリ

多くのアプリケーションが Slack と統合できます。
これらのアプリを、ミーティングのリマインダー、情報の検索、チームのワークフローに使ってください。
キーワードへの自動応答については、[Slackbot](#slackbots) セクションで別途説明しています。

- **[Google Calendar](/handbook/eta/corporate-it/end-user-services/supported-apps/google-workspace/google-calendar/)** - カレンダーを Slack と統合することで、ミーティングに関する通知を Slack で直接受け取れます。
  最も重要なのは、ミーティングが始まる 1 分前に、Zoom で開催されるミーティングへの参加リンクを含むミーティング情報のメッセージを受け取ることです。
  任意のメッセージフィールドに `/gcal` とタイプして統合をセットアップできます。
- **Workday** - Slack 連携を通じて休暇を入力します。ハンドブックの [Workday への PTO の入力手順](/handbook/people-group/time-off-and-absence/time-off-types/#how-to-enter-pto-in-workday) に従ってください。
- **Claude** - 文章の下書き、推論、コーディングの支援を受けられます。一般的なアクセス方法と使用方法については、[ハンドブックの Claude ガイド](/handbook/eta/ai/tools/claude/) を参照してください。
- **Glean** - チャンネル内で `/glean` を使って GitLab の社内ナレッジを検索したり、`@Glean` をメンションして質問したりできます。Slack のセットアップと応答設定については、[ハンドブックの Glean ガイド](/handbook/eta/ai/tools/glean/) を参照してください。
- **GitLab Duo** - 有効になっている場合は Slack で GitLab Duo を使って、プロジェクトに関する質問や議論の要約を行えます。前提条件と使用手順については、[Slack の GitLab Duo のドキュメント](https://docs.gitlab.com/user/project/integrations/gitlab_slack_application/#gitlab-duo) を参照してください。

### Slack に新しいアプリを追加する必要がある場合

GitLab はアプリのインストール能力を制限することを選択しており、ワークスペース向けに特定のアプリを承認または制限するプロセスがあります。Slack に新しいアプリを追加するには、[ベンダー承認 Issue](https://gitlab.com/gitlab-com/Finance-Division/procurement-team/procurement/-/issues/new?issuable_template=app_integrations) を作成する必要があります。すべての関係者によって承認されたら、アプリを Slack に追加する承認をリクエストしてください:

1. 左サイドバーの Apps をクリックして Available Apps を見つけ、私たちのチームによって事前承認されていないことを確認してください。アプリディレクトリで事前承認済みアプリを見つけるには、左カラムの Categories の下にある Pre-Approved をクリックします。
1. アプリが事前承認されていない場合、Add to Slack をクリックできます。
1. リクエストの詳細について追加コンテキストを含むカスタムメッセージを追加し、ベンダー承認 Issue にリンクしてください。
1. Submit をクリックします。リクエストがチームによってレビューされると、Slackbot からダイレクトメッセージを受け取ります。

**これはレビューまたは承認されていない新しいアプリにのみ必要です。** リクエストが Slack でアプリケーションがどう動作するかについて新しいプロセスを追加したり既存のプロセスを更新したりすることである場合は、私たちの [Business Technology Change Management](https://internal.gitlab.com/handbook/IT/it-change-management/) プロセスを参照してください。

## Slackbot {#slackbots}

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
