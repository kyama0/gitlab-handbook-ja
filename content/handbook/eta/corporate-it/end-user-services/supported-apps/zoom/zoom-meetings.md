---
title: Zoom ミーティング
description: ミーティングをスケジュールし、ホストする
aliases:
  - /handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-meetings/
upstream_path: /handbook/eta/corporate-it/end-user-services/supported-apps/zoom/zoom-meetings/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:07:25+09:00"
translator: codex
stale: false
---

## 目次

- [Zoom ミーティングを設定する](#setting-up-a-zoom-meeting)
  - [ブラウザを許可する](#allow-for-browsers)
  - [大規模ミーティングに関する考慮事項](#large-meeting-considerations)
  - [小規模ミーティングの設定](#settings-for-smaller-meetings)
  - [永続的な Zoom Rooms を作成する](#create-a-persistent-zoom-rooms)
- [Zoom ミーティング中](#during-your-zoom-meeting)
  - [マイクをミュートしてミーティングに参加する](#join-meetings-with-muted-microphone)
  - [ミーティングアンケート](#meeting-surveys)
  - [Zoom Clips](#zoom-clips)

## Zoom ミーティングを設定する {#setting-up-a-zoom-meeting}

*Zoom ミーティングを設定するには、Okta 経由で Zoom にサインインし、参加者と「パーソナルミーティングルーム」のリンクを共有します。*

### ブラウザを許可する {#allow-for-browsers}

すべての外部連絡先に Zoom クライアントがインストールされているわけではないため、必要に応じてブラウザからミーティングに参加できる機能を有効にしてください。

1. **Settings > In Meeting (Advanced)** に移動します
1. "Show a 'Join from your browser' link" の横をクリックし、このオプションをミーティング招待で利用可能にします。

Zoom のブラウザ版は通常のクライアントほど多機能ではありませんが、招待者に Zoom クライアントのダウンロードを強制しません。

### 大規模ミーティングに関する考慮事項 {#large-meeting-considerations}

多数の参加者がいる通話で、ミュートされていない人が参加すると気が散る場合があります。[Assembly](/handbook/company/gitlab-all-company-meetings/)、CEO の [AMA](/handbook/communication/ask-me-anything)、および 25 人を超える参加が予想されるその他のミーティングでは、参加者がミュート状態で入室するよう、ミーティングをスケジュールする必要があります。その後、参加者は会話に参加する必要に応じてミュートを解除できます。

ミーティングのチームメンバーがミュートされておらず気が散る音を出している場合、他のチームメンバーはこの人をミュートしてよいと感じられる必要があります。誰かをミュートするには共同ホストまたはホストである必要があります。\
ホストで、他の人のミュートに支援が必要な場合は、Zoom 設定で "co-host" が有効であることを確認してください。ミーティング中は参加者をクリックし、"co-host" に指定できます。

### 小規模ミーティングの設定 {#settings-for-smaller-meetings}

小規模なミーティング（参加者が 4 人以下）で、より迅速に開始できるようにしたい場合は、ミーティングごとに設定を変更して待機室を削除するか、デフォルトで音声をオンにできます（参加者のローカル設定で上書き可能）。

すばやく行うには:

1. GitLab Chrome プロフィールにデフォルトでインストールされている Zoom 拡張機能にサインインしていることを確認します
1. ミーティングの作成時に `Make it a Zoom Meeting` をクリックします
1. `Waiting Room` のチェックを外します
1. Host と Participant Video が `On` であることを確認します
1. `Mute participants upon entry` が**チェックされていない**ことを確認します
1. `Continue` をクリックします

これにより、小規模ミーティングの開始によりシームレスに移行できるようになります。大規模ミーティングのデフォルトは、引き続き上記に記載のとおりです。

### 永続的な Zoom Rooms を作成する {#create-a-persistent-zoom-rooms}

チームの誰もがいつでも共有して使用できる永続的な Zoom "Room" が必要な場合は、次を行います:

1. Zoom Web サイトにログインします
1. Meetings セクションに移動します
1. "Schedule a Meeting" をクリックします
   1. 希望するトピック（タイトル）を入力します
   1. "Recurring meeting" をクリックします
   1. "Recurrence" で "No Fixed Time" を選択します
   1. オプション領域で、"Allow participants to join anytime" を必ず選択します
   1. "Save" をクリックします
1. 想定するユーザーとルームへのリンクを共有します

## Zoom ミーティング中 {#during-your-zoom-meeting}

*Zoom はミーティング中に、すべてのアプリケーションの上部に表示され続ける小さなウィンドウへ[最小化](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063672#h_29171b3b-71eb-4b42-8bc4-30bf2f778d95)できます（macOS では `cmd-m`）。
このヒントは小さな画面を使用する際に非常に便利です。画面レイアウトを気にせず、参加者を見ながら他のアプリケーションを同時に使用できます。*

### マイクをミュートしてミーティングに参加する {#join-meetings-with-muted-microphone}

マイクをミュートせずに進行中のミーティングに参加すると、混乱を引き起こすことがあります。すぐに自分をミュートすることを忘れることがあるため、Zoom には[ミュートした状態で通話に参加するオプション](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062614)があります:

1. `Zoom > Preferences > Audio` に移動します
1. 下にスクロールし、`Mute my mic when joining a meeting` ボックスを選択します

### ミーティングアンケート {#meeting-surveys}

**すべてのミーティングアンケートで有効にする**

Meeting Surveys は GitLab のすべての人で有効ですが、使用するにはアカウント内で Meeting Surveys 機能を有効にする必要があります。

1. [Zoom Web ポータル](https://zoom.us/signin)にサインインします
1. [アカウント設定](https://gitlab.zoom.us/profile/setting)に移動します
1. `Meeting Survey` を検索し、機能をオンに切り替えます

**ミーティングにアンケートを追加する**

1. [ミーティング](https://gitlab.zoom.us/meeting#/upcoming)に移動します
1. 既存のミーティングを 1 つ選択する**か**、新しいミーティングをスケジュールします
1. 既存のミーティングを編集する場合は `Survey` タブをクリックします。新しいミーティングをスケジュールする場合は、`Save` をクリックしてから `Survey` タブをクリックします
   1. **注記:** これを機能させるにはミーティング ID を自動生成する必要があります。パーソナルミーティング ID ではアンケートは機能しません
1. `Create new survey` をクリックします
1. ミーティング終了時に、参加者は入力するアンケートを受け取ります

**アンケート結果を表示する**

1. [Reports](https://zoom.us/account/report?isPersonal=true#/usageReports/meeting) > Meeting > `Registration Report` ドロップダウンを `Survey Report` に変更します

### Zoom Clips {#zoom-clips}

**Zoom Clips を有効にする**

Zoom Clips は GitLab のすべての人で有効ですが、使用するにはアカウント内でこの機能を有効にする必要があります。

1. [Zoom Web ポータル](https://zoom.us/signin)にサインインします
1. [アカウント設定](https://gitlab.zoom.us/profile/setting)に移動します
1. `Clips` を検索し、機能をオンに切り替えます

**Clip を作成する方法**

1. コンピューターで Zoom アプリを開きます
1. 上部メニューバーで `Clips` をクリックします
   1. 注記: メニューバーに多くの製品がある場合は、More アイコン `(...)`` をクリックして Clips にアクセスします
1. `Create Clip` をクリックします

**Clips にアクセスする方法**

1. [Zoom Web ポータル](https://zoom.us/signin)にサインインします
1. 左側のサイドバーにある [Clips](https://gitlab.zoom.us/clips/library) に移動します
