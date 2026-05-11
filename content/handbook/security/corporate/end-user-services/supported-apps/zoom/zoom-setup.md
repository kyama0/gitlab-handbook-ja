---
title: Zoom セットアップ
description: 基本的なインストールとセットアップ手順
upstream_path: /handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-setup/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

## 目次

- [インストール](#installation)
  - [MacOS](#macos)
  - [Linux](#linux)
- [セットアップ](#setup)
- [Zoom と他のアプリを連携する](#connect-zoom-to-other-apps)
  - [Google Chrome](#google-chrome)
  - [Google カレンダー](#google-calendar)
  - [Slack](#slack)

## インストール {#installation}

GitLab から提供された MacBook を使用している場合、ラップトップを最初にセットアップする際に Zoom が自動的にインストールされているはずです。アプリを手動でインストールするには、以下の手順を参照してください。

### MacOS {#macos}

- **Finder** を開いて **Applications** に移動して見つけられる **Self Service** アプリを開きます。Zoom を検索し、Install オプションを選択します。
- あるいは、[Zoom 公式ダウンロードページ](https://zoom.us/download?os=mac) から直接 Zoom をダウンロードしてインストールすることもできます

### Linux {#linux}

- 最新バージョンの Zoom は [こちら](https://zoom.us/download?os=linux) からダウンロードできます

## セットアップ {#setup}

1. **Zoom** アプリを開きます
1. `or sign in with` の下で、**SSO** をクリックします
1. Chrome が自動的に開き、Okta のログインページに移動します。Okta の認証情報でサインインしてください
1. Chrome のタブで青色の **Launch Zoom Workplace** ボタンをクリックします。Zoom アプリのウィンドウの右上にプロフィール写真が表示されているはずです

## Zoom と他のアプリを連携する {#connect-zoom-to-other-apps}

### Google Chrome {#google-chrome}

1. Zoom 拡張機能はデフォルトでインストールされているはずです
   1. インストールされていない場合は、[Chrome ウェブストア](https://chromewebstore.google.com/detail/zoom-chrome-extension/kgjfgplpablkjnlkjmjdecgdpfankdle) からインストールできます
1. URL バーの隣にある Zoom Chrome 拡張機能ボタンをクリックします（最初にパズルピースのボタンをクリックする必要があるかもしれません）
1. **Sign in to Zoom** をクリックします
1. 次の画面で **SSO** をクリックします
1. `Company Domain` フィールドに **gitlab** と入力し、**Continue** をクリックします
1. Okta でサインインし、プロンプトが表示されたら Chrome に Zoom へのアクセスを許可することを確認します

### Google カレンダー {#google-calendar}

Chrome 拡張機能を使用すると、Google カレンダー経由で Zoom ミーティングを作成できます。ただし、通常のミーティングを作成し、`Add video conferencing` オプション経由で手動で Zoom リンクを追加することもできます

1. Chrome で [Google カレンダー](https://calendar.google.com/) を開きます
1. 画面の右側にある **Zoom** アイコンをクリックします
   1. アイコンが利用できない場合は、画面右側の `+` ボタンをクリックし、`Google Workspace Marketplace` から `Zoom` 拡張機能をインストールしてください
1. 青い **Sign in** ボタンをクリックします
1. アプリの権限を確認し、**Allow** をクリックします
1. `Confirm Connection Between Your Zoom and Google Workspace Accounts` 画面で、**Confirm** をクリックします
1. `Authorization Successful!` 通知が表示されたポップアップ画面を閉じます
1. Google カレンダーと Zoom をより良く同期するために、[Zoom ウェブポータルとカレンダー間で Zoom ミーティングデータを双方向同期](https://zoom.us/profile/setting?tab=zoomMailCalendar#CalendarEventSyncBackToMeeting) を有効にします

### Slack {#slack}

任意の Slack チャンネルまたはチャットで `/zoom` コマンドを使用すると、Slack から直接 Zoom ミーティングを開始できます

1. Slack を開き、検索バーで **Zoom** を検索して、**Zoom**`App` をクリックします
1. Zoom アプリとのチャットで **/zoom** と入力し、**Enter** を押します
1. **Authorize Zoom** をクリックします
1. アプリの権限を確認し、**Allow** をクリックします
1. `Sign in to Zoom with Slack` 画面で、**Accept and continue** に続いて **Confirm** をクリックします
1. 統合設定を確認し、終わったら **Save** をクリックします
1. これで Slack で Zoom 拡張機能を使用できるようになります
1. Slack アプリで **Zoom** を検索することで、追加設定を確認できます
