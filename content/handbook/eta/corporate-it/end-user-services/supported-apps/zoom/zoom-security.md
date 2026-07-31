---
title: Zoom セキュリティ
description: パスコードと認証を設定する
upstream_path: /handbook/eta/corporate-it/end-user-services/supported-apps/zoom/zoom-security/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:07:25+09:00"
translator: codex
stale: false
---

招待された参加者だけがミーティングに参加できるようにするため、可能な限りパスコードを使用してください。

## 目次

- [すべてのミーティングでパスコードを有効にする](#enable-passcodes-for-all-meetings)
- [既存ミーティングでパスコードを有効にする](#enable-passcodes-for-existing-meetings)
  - [方法 1（推奨）](#method-1-recommended)
  - [方法 2](#method-2)
- [認証済みユーザーのみのミーティング参加者を有効にする](#enable-authenticated-only-meeting-attendees)
  - [新規ミーティングの手順](#steps-for-a-new-meeting)
  - [既存ミーティングを編集する手順](#steps-for-editing-an-existing-meeting)
  - [今後のすべてのミーティングで有効にする](#enable-for-all-future-meetings)

## すべてのミーティングでパスコードを有効にする {#enable-passcodes-for-all-meetings}

1. Zoom Web ポータルにサインインし、[Settings](https://zoom.us/profile/setting)に移動します
1. **Meeting** タブをクリックします
1. `Security` で、新規ミーティング、パーソナルミーティング ID のミーティング、インスタントミーティングに対するパスコード設定が有効になっていることを確認します。
1. 設定が無効の場合は、トグルをクリックして有効にします。検証ダイアログが表示されたら、Turn On を選択して変更を検証します。

## 既存ミーティングでパスコードを有効にする {#enable-passcodes-for-existing-meetings}

*面接チームの一員である場合、面接のスケジュール設定に使用するパーソナルミーティングルームにはパスワードを設定せず、待機室を有効にする必要があることを忘れないでください。*

### 方法 1（推奨） {#method-1-recommended}

1. 更新が必要なミーティングを特定し、**かつ**すべてのミーティングでパスコードを有効にしたら、Google Calendar に移動します
1. カレンダーイベントを編集します
1. Zoom ミーティングを削除します
1. 新しいミーティングを追加します
1. このイベント以降またはすべてのイベントで保存します

### 方法 2 {#method-2}

1. Zoom にログインします
1. `Meetings` > `Upcoming meetings` に移動します
1. 更新したいミーティングをクリックし、ページ下部までスクロールして `Edit this meeting` ボタンを見つけます
1. Security セクションで Passcode ボックスにチェックを入れます
1. **重要:** 既存のミーティングで Zoom 内のパスコードを追加する場合、パスコードを含めるためにカレンダーの招待を再送信する必要があります

## 認証済みユーザーのみのミーティング参加者を有効にする {#enable-authenticated-only-meeting-attendees}

- 追加のセキュリティ対策として、参加者が GitLab の Zoom アカウントで Zoom に認証されることを必須にして、ミーティングを制限できます
- これは、Zoom にログインした人だけがミーティングに参加できるようにすることを目的としています
- 顧客や GitLab への就職面接を受ける人など、GitLab チームメンバーではない参加者がいるミーティングにはおすすめしません
- これはミーティング中ではなく、ミーティング前に設定する必要があることに注意してください

これを行う簡単な動画チュートリアルはこちらです:

[![画像の代替テキスト](https://img.youtube.com/vi/ZvaLolwKfAI/0.jpg)](https://www.youtube.com/watch?v=ZvaLolwKfAI)

### 新規ミーティングの手順 {#steps-for-a-new-meeting}

1. ミーティングの作成中、Security セクションには Zoom クライアントで `Only authenticated users can join: GitLab Internal Only` と表示されるオプションがあります。または、任意の Zoom アカウントを持つユーザーが参加できるよう `Sign in to Zoom` オプションを選択します。このオプションの横にあるチェックボックスをクリックします
1. ブラウザから Zoom を使用している場合、オプションは引き続き Security セクションにありますが、`Require authentication to join` と表示されます
1. 通常どおりミーティングを作成し、**Save** をクリックします

**注記:**

- このプロセスは Zoom クライアントまたは [GitLab Zoom Web サイト](https://gitlab.zoom.us/)からのみ利用できます
- Google Calendar 内でスケジュールする場合は、通常どおりスケジュールし、既存ミーティングについて次のセクションの手順に従ってミーティングを編集します

### 既存ミーティングを編集する手順 {#steps-for-editing-an-existing-meeting}

1. クライアントまたはブラウザの Web 経由で Zoom に認証します。
1. "Meetings" に移動します。Zoom クライアントでは上部にあり、ブラウザでは左側にあります。
1. 変更したいミーティングを見つけてクリックします。
1. Edit ボタンをクリックします。
1. Security セクションで認証を要求するオプションを選択し、Save をクリックします。

### 今後のすべてのミーティングで有効にする {#enable-for-all-future-meetings}

1. ブラウザで gitlab.zoom.us から Zoom に認証します。
1. 左側のメニューで Settings を選択します。
1. Security セクションで下にスクロールし、"Only authenticated users can join meetings" を見つけます。右側のボタンをクリックしてオンにします。
1. 下部の Save ボタンで設定を保存します。
1. 前のセクションの手順で該当ミーティングを編集してオフにすることで、特定のミーティングに対して選択的にオフにすることもできます
