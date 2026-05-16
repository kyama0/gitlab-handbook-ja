---
title: Google Calendar 委任ガイド
upstream_path: /handbook/security/corporate/systems/google/calendar/delegation/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-09T01:20:19+00:00"
---

## 概要

他のチームメンバーに、自分のカレンダー上のイベント管理を許可することができます。これは Executive Business Administrator や、オフボーディング済みのチームメンバーのカレンダーイベントに変更を加える必要があるマネージャーにとって特に役立ちます。

- [ベンダードキュメント](https://support.google.com/a/users/answer/168126)
- [ベンダードキュメント](https://support.google.com/calendar/answer/37082)

## カレンダーの権限レベル {#calendar-permission-levels}

- `See only free/busy (hide details)` - チームメンバーは、カレンダー上であなたが空いているか取り込み中かのみを確認できます。これは外部（GitLab 外）への共有における唯一のオプションです。
- `See all event details` - チームメンバーは、あなたのカレンダーイベントをすべて閲覧できますが、編集することはできません。
- `Make changes to events` - チームメンバーは、あなたのカレンダーイベントを編集できます。イベント詳細の編集も可能になります。
- `Make changes and manage sharing` - チームメンバーは、あなたのカレンダーイベントを編集できます。イベント詳細の編集も可能になります。さらに、あなたのカレンダー共有設定の変更も可能になります。

## カレンダーを委任する

1. GitLab のメールアドレスで [https://calendar.google.com](https://calendar.google.com) にサインインします。

1. 右上の `Gear`（歯車）アイコンをクリックして [Google Calendar の設定](https://support.google.com/calendar/answer/6084644?hl=en&co=GENIE.Platform%3DAndroid) に進みます。

1. `Settings for my calendars` の下から自分のカレンダーを選択します。

1. カレンダー設定のドロップダウンメニューから `Share with specific people` を選択します。

   <img src="/images/security/corporate/systems/google/calendar/delegation/google_calendar_settings.png" alt="Google Calendar Settings" width="200"/><br>

1. `+ Add People` を選択します。

1. カレンダーを共有する個人のメールアドレスを追加します。

    <img src="/images/security/corporate/systems/google/calendar/delegation/google_calendar_settings_share.png" alt="Google Calendar Settings Share" width="400"/>

1. `Permissions` ドロップダウンメニューを選択し、その個人に適切なアクセス権を付与します。[カレンダーの権限レベル](#calendar-permission-levels) を参照してください。

    <img src="/images/security/corporate/systems/google/calendar/delegation/google_calendar_settings_share_permissions.png" alt="Google Calendar Settings Share Permissions" width="400"/>

1. `Send` を選択します。

## 委任されたカレンダーへのアクセス

1. GitLab のメールアドレスで `calendar.google.com` にログインします。

1. 左側のメニューバーで `Other calendars` に移動し、`+` 記号をクリックして `Subscribe to calendar` を選択します。

    <img src="/images/security/corporate/systems/google/calendar/delegation/google_calendar_add_other_calendars.png" alt="Google Calendar Add Other Calendars" width="300"/>

1. 購読したいカレンダーのチームメンバーを検索します。

    <img src="/images/security/corporate/systems/google/calendar/delegation/google_calendar_add_calendar.png" alt="Google Calendar Add Calendar" width="300"/>

1. カレンダーに戻ると、チームメンバーのカレンダーが `My calendars` の下に表示されます。

1. チームメンバーから付与された権限に応じて、そのカレンダーイベントを `view`（閲覧）または `view and edit`（閲覧および編集）できます。
