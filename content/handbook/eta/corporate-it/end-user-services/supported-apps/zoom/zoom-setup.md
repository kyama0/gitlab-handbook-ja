---
title: Zoom のセットアップ
description: 基本的なインストールとセットアップ手順
aliases:
  - /handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-setup/
upstream_path: /handbook/eta/corporate-it/end-user-services/supported-apps/zoom/zoom-setup/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:07:25+09:00"
translator: codex
stale: false
---

## 目次

- [インストール](#installation)
  - [MacOS](#macos)
  - [Linux](#linux)
- [セットアップ](#setup)
- [Zoom を他のアプリに接続する](#connect-zoom-to-other-apps)
  - [Google Chrome](#google-chrome)
  - [Google Calendar](#google-calendar)
  - [Slack](#slack)

## インストール {#installation}

GitLab 支給の MacBook を使用している場合、最初にラップトップをセットアップすると Zoom が自動的にインストールされます。手動でアプリをインストールするには、以下の手順を参照してください。

### MacOS {#macos}

- **Finder** を開き、**Applications** に移動して見つかる **Self Service** アプリを開きます。Zoom を検索し、インストールオプションを選択します。
- または、[Zoom 公式ダウンロードページ](https://zoom.us/download?os=mac)から Zoom を直接ダウンロードしてインストールすることもできます

### Linux {#linux}

- Zoom の最新バージョンは[こちら](https://zoom.us/download?os=linux)からダウンロードできます

## セットアップ {#setup}

1. **Zoom** アプリを開きます
1. `or sign in with` の下にある **SSO** をクリックします
1. Chrome が自動的に開き、Okta 資格情報でサインインする必要がある Okta ログインページに移動します
1. Chrome タブの青い **Launch Zoom Workplace** ボタンをクリックします。Zoom アプリウィンドウの右上にプロフィール画像が表示されます

## Zoom を他のアプリに接続する {#connect-zoom-to-other-apps}

### Google Chrome {#google-chrome}

1. Zoom 拡張機能はデフォルトでインストールされているはずです
   1. そうでない場合は、[Chrome Web Store](https://chromewebstore.google.com/detail/zoom-chrome-extension/kgjfgplpablkjnlkjmjdecgdpfankdle)からインストールできます
1. URL バーの横にある Zoom Chrome 拡張機能ボタンをクリックします（最初にパズルピースのボタンをクリックする必要がある場合があります）
1. **Sign in to Zoom** をクリックします
1. 次の画面で **SSO** をクリックします
1. `Company Domain` フィールドに **gitlab** と入力し、**Continue** をクリックします
1. Okta でサインインし、求められた場合は Chrome に Zoom へのアクセスを許可することを確認します

### Google Calendar {#google-calendar}

Chrome 拡張機能を使用すると、Google Calendar を通じて Zoom ミーティングを作成できます。ただし、通常のミーティングを作成し、`Add video conferencing` オプションから Zoom リンクを手動で追加することもできます

1. Chrome で [Google Calendar](https://calendar.google.com/) を開きます
1. 画面右側の **Zoom** アイコンをクリックします
   1. アイコンが利用できない場合は、画面右側の `+` ボタンをクリックし、`Google Workspace Marketplace` から `Zoom` 拡張機能をインストールします
1. 青い **Sign in** ボタンをクリックします
1. アプリの権限を確認し、**Allow** をクリックします
1. `Confirm Connection Between Your Zoom and Google Workspace Accounts` 画面で、**Confirm** をクリックします
1. `Authorization Successful!` 通知が表示されたポップアップ画面を閉じます
1. Google Calendar と Zoom をより適切に同期するため、[Zoom Web ポータルとカレンダー間で Zoom ミーティングデータの双方向同期](https://zoom.us/profile/setting?tab=zoomMailCalendar#CalendarEventSyncBackToMeeting)を有効にします

### Slack {#slack}

任意の Slack チャンネルまたはチャットで `/zoom` コマンドを使用して、Slack から直接 Zoom ミーティングを開始できます

1. Slack を開き、検索バーで **Zoom** を検索して **Zoom**`App` をクリックします
1. Zoom App とのチャットで **/zoom** と入力し、**Enter** を押します
1. **Authorize Zoom** をクリックします
1. アプリの権限を確認し、**Allow** をクリックします
1. `Sign in to Zoom with Slack` 画面で、**Accept and continue** をクリックした後、**Confirm** をクリックします
1. 統合設定を確認し、完了したら **Save** をクリックします
1. Slack で Zoom 拡張機能を使用できるようになります
1. Slack アプリで **Zoom** を検索すると、追加設定を確認できます
