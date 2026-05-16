---
title: Zoom ミーティング
description: ミーティングのスケジュールとホスト
upstream_path: /handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-meetings/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

## 目次

- [Zoom ミーティングのセットアップ](#setting-up-a-zoom-meeting)
  - [ブラウザでの参加を許可する](#allow-for-browsers)
  - [大規模ミーティングに関する考慮事項](#large-meeting-considerations)
  - [小規模ミーティング向けの設定](#settings-for-smaller-meetings)
  - [永続的な Zoom ルームを作成する](#create-a-persistent-zoom-rooms)
- [Zoom ミーティング中](#during-your-zoom-meeting)
  - [マイクをミュートしてミーティングに参加する](#join-meetings-with-muted-microphone)
  - [ミーティングアンケート](#meeting-surveys)
  - [Zoom Clips](#zoom-clips)

## Zoom ミーティングのセットアップ {#setting-up-a-zoom-meeting}

*Zoom ミーティングをセットアップするには、Okta から Zoom にサインインし、自分の「パーソナルミーティングルーム」のリンクを参加者と共有してください。*

### ブラウザでの参加を許可する {#allow-for-browsers}

すべての外部の連絡先が Zoom クライアントをインストールしているとは限らないため、必要に応じてブラウザからミーティングに参加できる機能を有効にしておくべきです。

1. **Settings > In Meeting (Advanced)** に移動します
1. "Show a 'Join from your browser' link" の横をクリックして、このオプションをミーティング招待で利用できるようにします

Zoom のブラウザ版は通常のクライアントほどフル機能ではありませんが、招待された人に Zoom クライアントのダウンロードを強制しません。

### 大規模ミーティングに関する考慮事項 {#large-meeting-considerations}

参加者数が多い通話で、ミュートされていない状態で人々が参加していると、気が散る可能性があります。[Assembly](/handbook/company/gitlab-all-company-meetings/)、CEO の [AMA](/handbook/communication/ask-me-anything)、その他 25 人を超える参加者が見込まれるミーティングでは、人々がミュート状態で入るようにミーティングをスケジュールすべきです。これらの人々は、必要に応じて会話に参加するためにミュートを解除することを選択できます。

ミーティングのチームメンバーがミュートしておらず、気が散るような音を立てている場合、他のチームメンバーは誰でもこの人をミュートにする権限を持つべきです。誰かをミュートするには、その人がコホストまたはホストである必要があります。\
あなたがホストで、人々のミュートのサポートが必要な場合は、Zoom の設定で「コホスト」が有効になっていることを確認してください。ミーティング中、ミーティング内の個人をクリックして、彼らを「コホスト」に指定できます。

### 小規模ミーティング向けの設定 {#settings-for-smaller-meetings}

小規模なミーティング（4 人以下の参加者）があり、より迅速に開始できるようにしたい場合は、ミーティングごとに設定を変更して、待機室を削除したり、デフォルトで音声をオンにしたり（参加者のローカル設定で上書き可能）できます。

これを素早く行うには、以下の操作ができます。

1. GitLab の Chrome プロフィールにデフォルトでインストールされている Zoom 拡張機能にサインインしていることを確認します
1. ミーティングを作成する際、`Make it a Zoom Meeting` をクリックします
1. `Waiting Room` のチェックを外します
1. ホストと参加者のビデオが `On` になっていることを確認します
1. `Mute participants upon entry` が **チェックされていない** ことを確認します
1. `Continue` をクリックします

これにより、小規模なミーティングをよりシームレスに開始することができます。大規模ミーティングのデフォルトは引き続き上記のとおりです。

### 永続的な Zoom ルームを作成する {#create-a-persistent-zoom-rooms}

チームの誰でもいつでも共有して使用できる永続的な Zoom「ルーム」を持ちたい場合は、以下を実施します。

1. Zoom のウェブサイトにログインします
1. Meetings セクションに移動します
1. "Schedule a Meeting" をクリックします
   1. 希望するトピック（タイトル）を入力します
   1. "Recurring meeting" をクリックします
   1. "Recurrence" の下で、"No Fixed Time" を選択します
   1. オプション領域で、必ず "Allow participants to join anytime" を選択します
   1. "Save" をクリックします
1. ルームへのリンクを使用予定のユーザーと共有します

## Zoom ミーティング中 {#during-your-zoom-meeting}

*Zoom はミーティング中に [最小化](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063672#h_29171b3b-71eb-4b42-8bc4-30bf2f778d95) （macOS では `cmd-m`）して、すべてのアプリケーションの上に表示される小さなウィンドウにできます。
このヒントは、小さな画面を使用する際に非常に便利です。画面レイアウトを気にすることなく、参加者を見ながら他のアプリケーションを同時に使用できます。*

### マイクをミュートしてミーティングに参加する {#join-meetings-with-muted-microphone}

進行中のミーティングにマイクのミュートを解除した状態で参加すると、混乱を招く可能性があります。素早く自分をミュートすることを忘れることがあるため、Zoom には [通話に参加する際にミュートにするオプション](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062614) があります。

1. `Zoom > Preferences > Audio` に移動します
1. 下にスクロールして、`Mute my mic when joining a meeting` のボックスを選択します

### ミーティングアンケート {#meeting-surveys}

**すべてのミーティングアンケートで有効にする**

ミーティングアンケートは GitLab の全員に対して有効になっていますが、使用するにはアカウント内でミーティングアンケート機能を有効化する必要があります。

1. [Zoom ウェブポータル](https://zoom.us/signin) にサインインします
1. [アカウント設定](https://gitlab.zoom.us/profile/setting) にアクセスします
1. `Meeting Survey` を検索し、機能をオンに切り替えます

**ミーティングにアンケートを追加する**

1. [ミーティング](https://gitlab.zoom.us/meeting#/upcoming) に移動します
1. ミーティングのいずれかを選択する **か**、新規にスケジュールします
1. 既存のミーティングを編集している場合は、`Survey` タブをクリックします。新しいミーティングをスケジュールしている場合は、`Save` をクリックしてから `Survey` タブをクリックします
   1. **注:** これが機能するためには、Meeting ID が自動生成されている必要があります。アンケートはパーソナルミーティング ID では機能しません
1. `Create new survey` をクリックします
1. ミーティング終了時に、参加者はアンケートを受け取り回答します

**アンケート結果を表示する**

1. [Reports](https://zoom.us/account/report?isPersonal=true#/usageReports/meeting) > Meeting に移動し、`Registration Report` ドロップダウンを `Survey Report` に変更します

### Zoom Clips {#zoom-clips}

**Zoom Clips を有効にする**

Zoom Clips は GitLab の全員に対して有効になっていますが、使用するにはアカウント内で機能を有効化する必要があります。

1. [Zoom ウェブポータル](https://zoom.us/signin) にサインインします
1. [アカウント設定](https://gitlab.zoom.us/profile/setting) にアクセスします
1. `Clips` を検索し、機能をオンに切り替えます

**クリップの作成方法**

1. コンピューター上の Zoom アプリを開きます
1. 上部のメニューバーで `Clips` をクリックします
   1. 注: メニューバーに多くの製品がある場合は、More アイコン `(...)`` をクリックして Clips にアクセスします
1. `Create Clip` をクリックします

**自分のクリップにアクセスする方法**

1. [Zoom ウェブポータル](https://zoom.us/signin) にサインインします
1. 左サイドバーの [Clips](https://gitlab.zoom.us/clips/library) に移動します
