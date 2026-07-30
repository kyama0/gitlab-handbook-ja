---
title: Google Calendar
description: Calendar の利用および設定ガイド
upstream_path: /handbook/eta/corporate-it/end-user-services/supported-apps/google-workspace/google-calendar/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:14:51+09:00"
translator: codex
stale: false
---

Google Calendar は、ミーティングとイベントをスケジュールするための主要なツールです。Okta Dashboard の `G Suite SSO Calendar` タイル、または直接 [Calendar ページ](https://calendar.google.com/)からアプリにアクセスできます。

このページは、よく寄せられる質問の一部に対する解決策を提供することを目的としています。より詳細なサポートについては、[公式 Calendar サポートページ](https://support.google.com/calendar/)を参照してください。

## 目次

- [Calendar アクセスリクエスト](#calendar-access-requests)
- [カレンダーイベントを作成する](#create-a-calendar-event)
- [不在イベントを作成する](#create-out-of-office-events)
- [イベントのアクセス権限](#access-permissions-for-events)
- [カレンダーの委任を設定する](#set-up-calendar-delegation)
- [カレンダーを購読する](#subscribe-to-calendars)

## Calendar アクセスリクエスト

次のリクエストには、[この AR テンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Google_Calendar_Request)を使用できます:

- カレンダーイベントの削除
- 他者のカレンダーへのアクセス

## カレンダーイベントを作成する

1. [Calendar](http://calendar.google.com)を開きます
1. 画面左上の `+ Create` ボタンをクリックし、続いて `Event` をクリックします
    1. または、イベントをスケジュールする時間枠を直接クリックすることもできます
1. タイトルを指定し、ゲストを追加し、使用するビデオ会議オプションを選択してイベントをカスタマイズします
    1. 詳細は、[Google Calendar Zoom 拡張機能ガイド](/handbook/eta/corporate-it/end-user-services/supported-apps/zoom/zoom-setup/#google-calendar)を参照してください

## 不在イベントを作成する

1. [Calendar](http://calendar.google.com)を開きます
1. 画面左上の `+ Create` ボタンをクリックし、続いて `Out of office` をクリックします
1. 不在イベントの期間を指定します
1. 不在中のミーティング招待をどのように処理するか指定します

## イベントのアクセス権限

1. [Calendar](http://calendar.google.com)を開きます
1. 画面右上付近の歯車アイコンをクリックし、`Settings` をクリックして [Settings](https://calendar.google.com/calendar/u/0/r/settings?pli=1) を開きます
1. 左側の `Settings for my calendars` で、公開設定を変更するカレンダーを選択します
1. `Calendar settings` をクリックし、続いて `+ Add people and groups` をクリックします
1. `Access permissions for events` で、GitLab 内のユーザーと外部パートナーがイベントを閲覧する方法を変更できます

<div class="w3-panel w3-yellow">
  <h3>重要！</h3>
  <p>GitLab 外のユーザー（つまり @gitlab.com のメールアドレスを持たないユーザー）に、プライマリカレンダーのイベントの詳細表示を共有することはできません</p>
</div>

## カレンダーの委任を設定する

1. [Calendar](http://calendar.google.com)を開きます
1. 画面右上付近の歯車アイコンをクリックし、`Settings` をクリックして [Settings](https://calendar.google.com/calendar/u/0/r/settings?pli=1) を開きます
1. 左側の `Settings for my calendars` で、アクセスを委任するカレンダーを選択します
1. `Shared with` をクリックし、続いて `+ Add people and groups` をクリックします
1. 委任者として追加するユーザーまたはグループと、そのユーザーが持つべき権限レベルを選択します

## カレンダーを購読する

1. [Calendar](http://calendar.google.com)を開きます
1. 画面左側の `Other calendars` セクションを見つけます
1. `+` ボタンをクリックし、`Subscribe to calendars` を選択します
1. 購読するユーザーまたはグループのカレンダーのメールアドレスを入力します
