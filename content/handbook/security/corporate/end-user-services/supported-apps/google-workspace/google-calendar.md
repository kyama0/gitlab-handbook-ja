---
title: Google カレンダー
description: カレンダーの使用および設定ガイド
upstream_path: /handbook/security/corporate/end-user-services/supported-apps/google-workspace/google-calendar/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-21T20:50:55+00:00"
---

Google カレンダーは、ミーティングやイベントをスケジュールするための主要なツールです。Okta ダッシュボードの `G Suite SSO Calendar` タイル経由、または直接 [カレンダーページ](https://calendar.google.com/) にアクセスすることで、アプリにアクセスできます。

このページは、これまでに受けた最もよくある質問のいくつかへの解決策を提供することを目的としています。より詳細なサポートについては、[公式カレンダーサポートページ](https://support.google.com/calendar/) をご覧ください。

## 目次

- [カレンダーアクセスリクエスト](#calendar-access-requests)
- [カレンダーイベントの作成](#create-a-calendar-event)
- [不在中（Out of Office）イベントの作成](#create-out-of-office-events)
- [イベントへのアクセス権限](#access-permissions-for-events)
- [カレンダー委任の設定](#set-up-calendar-delegation)
- [カレンダーへの登録（Subscribe）](#subscribe-to-calendars)

## カレンダーアクセスリクエスト {#calendar-access-requests}

以下のリクエストには、[こちらの AR テンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Google_Calendar_Request) を使用できます:

- カレンダーイベントの削除
- 誰かのカレンダーへのアクセス

## カレンダーイベントの作成 {#create-a-calendar-event}

1. [カレンダー](http://calendar.google.com) を開きます
1. 画面の左上で、`+ Create` ボタンをクリックし、続いて `Event` をクリックします
    1. あるいは、イベントをスケジュールしたい時間帯を直接クリックすることもできます
1. タイトルを指定し、ゲストを追加し、使用したいビデオ会議オプションを選択することで、イベントをカスタマイズします
    1. 詳細については、[Google カレンダー Zoom 拡張機能ガイド](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-setup/#google-calendar) をご覧ください

## 不在中（Out of Office）イベントの作成 {#create-out-of-office-events}

1. [カレンダー](http://calendar.google.com) を開きます
1. 画面の左上で、`+ Create` ボタンをクリックし、続いて `Out of office` をクリックします
1. 不在中イベントの時間枠を指定します
1. 不在中にミーティング招待をどのように処理するかを指定します

## イベントへのアクセス権限 {#access-permissions-for-events}

1. [カレンダー](http://calendar.google.com) を開きます
1. 画面の右上付近の歯車アイコンをクリックし、続いて `Settings` をクリックして [Settings](https://calendar.google.com/calendar/u/0/r/settings?pli=1) を開きます
1. 左側の `Settings for my calendars` の下で、表示設定を変更したいカレンダーを選択します
1. `Calendar settings` をクリックし、続いて `+ Add people and groups` をクリックします
1. `Access permissions for events` の下で、GitLab 内の人々と外部パートナーがあなたのイベントをどのように表示できるかを変更できます

<div class="w3-panel w3-yellow">
  <h3>重要！</h3>
  <p>主要なカレンダーのイベントの詳細ビューを GitLab 外（つまり @gitlab.com メールアドレスを持たない人）と共有することはできません</p>
</div>

## カレンダー委任の設定 {#set-up-calendar-delegation}

1. [カレンダー](http://calendar.google.com) を開きます
1. 画面の右上付近の歯車アイコンをクリックし、続いて `Settings` をクリックして [Settings](https://calendar.google.com/calendar/u/0/r/settings?pli=1) を開きます
1. 左側の `Settings for my calendars` の下で、アクセス権を委任したいカレンダーを選択します
1. `Shared with` をクリックし、続いて `+ Add people and groups` をクリックします
1. 委任者として追加したい人またはグループと、付与する権限レベルを選択します

## カレンダーへの登録（Subscribe） {#subscribe-to-calendars}

1. [カレンダー](http://calendar.google.com) を開きます
1. 画面の左にある `Other calendars` セクションを見つけます
1. `+` ボタンをクリックし、`Subscribe to calendars` を選択します
1. 登録したいカレンダーのユーザーまたはグループのメールアドレスを入力します
