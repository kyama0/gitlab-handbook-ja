---
title: Zoom セキュリティ
description: パスコードと認証の設定
upstream_path: /handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-security/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

招待された参加者のみがミーティングに参加できるようにするため、可能な限りパスコードを使用してください。

## 目次

- [すべてのミーティングでパスコードを有効にする](#enable-passcodes-for-all-meetings)
- [既存のミーティングでパスコードを有効にする](#enable-passcodes-for-existing-meetings)
  - [方法 1（推奨）](#method-1-recommended)
  - [方法 2](#method-2)
- [認証済みユーザーのみのミーティング参加を有効にする](#enable-authenticated-only-meeting-attendees)
  - [新しいミーティングのための手順](#steps-for-a-new-meeting)
  - [既存のミーティングを編集するための手順](#steps-for-editing-an-existing-meeting)
  - [今後のすべてのミーティングで有効にする](#enable-for-all-future-meetings)

## すべてのミーティングでパスコードを有効にする

1. Zoom のウェブポータルにサインインし、[Settings](https://zoom.us/profile/setting) に移動します
1. **Meeting** タブをクリックします
1. `Security` セクションで、新しいミーティング、パーソナルミーティング ID のミーティング、およびインスタントミーティングについてパスコード設定が有効になっていることを確認します。
1. 設定が無効になっている場合は、トグルをクリックして有効にしてください。確認ダイアログが表示された場合は、Turn On を選択して変更を確定します。

## 既存のミーティングでパスコードを有効にする

*面接チームの一員である場合、面接スケジューリングに使用されるパーソナルミーティングルームにはパスワードを設定せず、待機室を有効にしてください。*

### 方法 1（推奨）

1. 更新が必要なミーティングを特定し、**かつ** すべてのミーティングでパスコードを有効にしたら、Google カレンダーに移動します
1. カレンダーイベントを編集します
1. Zoom ミーティングを削除します
1. 新しいミーティングを追加します
1. 「このイベントと以降のイベント」または「すべてのイベント」を選択して保存します

### 方法 2

1. Zoom にログインします
1. `Meetings` > `Upcoming meetings` に移動します
1. 更新したいミーティングをクリックし、ページ下部にスクロールして `Edit this meeting` ボタンを見つけます
1. Security セクションで、Passcode のチェックボックスをオンにします
1. **重要:** Zoom 内で既存のミーティングにパスコードを追加した場合、パスコードを含めるためにカレンダー招待を再送する必要があります

## 認証済みユーザーのみのミーティング参加を有効にする

- 追加のセキュリティ対策として、参加者全員に GitLab の Zoom アカウントで Zoom に認証することを要求してミーティングを制限できます
- これは Zoom にログインした人のみがミーティングに参加できるようにすることを目的としています
- お客様や GitLab の採用面接を受けている人など、GitLab チームメンバー以外の参加者がいるミーティングには推奨されません
- これはミーティング中ではなく、ミーティングの前に設定する必要があることに注意してください

これを行う方法のクイックビデオチュートリアルはこちらです:

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/ZvaLolwKfAI/0.jpg)](https://www.youtube.com/watch?v=ZvaLolwKfAI)

### 新しいミーティングのための手順

1. ミーティング作成中、Security セクションに Zoom クライアントには `Only authenticated users can join: GitLab Internal Only` というオプション、または任意の Zoom アカウントを持つユーザーが参加できるよう `Sign in to Zoom` オプションがあります。このオプションの隣のチェックボックスをクリックします
1. ブラウザ経由で Zoom を使用している場合、オプションは引き続き Security セクションにありますが、`Require authentication to join` というラベルが付いています
1. 通常通りミーティング作成を続行し、**Save** をクリックします

**注意:**

- このプロセスは Zoom クライアントまたは [GitLab Zoom ウェブサイト](https://gitlab.zoom.us/) でのみ機能します
- Google カレンダー内でスケジュールしている場合は、通常通りスケジュールし、次のセクションの既存のミーティングの手順に従ってミーティングを編集してください

### 既存のミーティングを編集するための手順

1. クライアントまたはブラウザ経由で Zoom に認証します。
1. "Meetings" に移動します。Zoom クライアントでは上部、ブラウザでは左側にあります。
1. 変更したいミーティングを見つけてクリックします。
1. Edit ボタンをクリックします。
1. Security セクションで、認証を要求するオプションを選択し、Save をクリックします。

### 今後のすべてのミーティングで有効にする

1. ブラウザで gitlab.zoom.us にアクセスし、Zoom に認証します。
1. 左側のメニューから Settings を選択します。
1. Security セクションで下にスクロールし、"Only authenticated users can join meetings" を見つけます。右側のボタンをクリックしてオンにします。
1. 下部の Save ボタンで設定を保存します。
1. 前のセクションの手順を使用して特定のミーティングを編集し、オフにすることで、特定のミーティングのみ選択的にオフにすることもできます
