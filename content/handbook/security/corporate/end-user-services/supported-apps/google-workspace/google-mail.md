---
title: Google Mail (Gmail)
description: Gmail の使用および設定ガイド
upstream_path: /handbook/security/corporate/end-user-services/supported-apps/google-workspace/google-mail/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

Gmail は私たちの主要なメールアプリケーションです。Okta ダッシュボードの `G Suite SSO Mail` タイル経由、または直接 [gmail ページ](https://mail.google.com/) にアクセスすることで、アプリにアクセスできます。

このページは、これまでに受けた最もよくある質問のいくつかへの解決策を提供することを目的としています。より詳細なサポートについては、[公式 Gmail サポートページ](https://support.google.com/mail/) をご覧ください。

## 目次

- [Gmail アクセスリクエスト](#gmail-access-requests)
- [不在時自動返信の設定](#set-up-out-of-office-replies)
- [エイリアスの使用](#using-aliases)
- [委任アクセスの設定](#set-up-delegate-access)
- [フィルターとラベルの設定](#setting-up-filters-and-labels)
  - [ラベル](#labels)
- [スパムメッセージの報告](#reporting-spam-messages)
- [追加サポート](#additional-support)

## Gmail アクセスリクエスト {#gmail-access-requests}

以下のリクエストには、[こちらの AR テンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Google_Gmail_Request) を使用できます:

- 誰かの Gmail へのアクセス
- 他の人の Gmail に設定する不在時メッセージ
- 自分の Gmail アカウント用のエイリアスの作成

## 不在時自動返信の設定 {#set-up-out-of-office-replies}

1. Gmail の [General Settings](https://mail.google.com/mail/u/0/#settings/general) ページに移動します
1. `Out-of-Office AutoReply:` までスクロールダウンします
1. メッセージの開始日と終了日を設定します
1. 不在時の返信メッセージを記述します。不在中にあなたの責任を引き継ぐ人の連絡先情報を必ず含めてください。

## エイリアスの使用 {#using-aliases}

1. [Gmail サポート AR](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Google_Gmail_Request) を作成して、アカウントにエイリアスを追加するようにリクエストします
1. 付与されたら、[Gmail Accounts Settings ページ](https://mail.google.com/mail/u/0/#settings/accounts) に移動します
1. `Send mail as:` の下で、`Add another email address` をクリックします
1. 表示されたポップアップに代替メールアドレスを入力し、`Next Step` をクリックします
1. 新しいメールアドレスがアカウントに表示され、デフォルトにするかどうかを選択できます

## 委任アクセスの設定 {#set-up-delegate-access}

メッセージの送信などのタスクを実行するために、他の人がアカウントにアクセスできるようにするには、まずアカウントでこの機能を有効にする必要があります。

1. [Gmail Accounts Settings ページ](https://mail.google.com/mail/u/0/#settings/accounts) に移動します
1. `Grant access to your account:` の下で、`Add another account` をクリックします
1. 表示されたポップアップの指示に従って ID を確認します
1. 委任アクセスを付与したい人のメールアドレスを入力します
1. 委任アクセスを受ける人に、確認メッセージのメールを確認するよう依頼します
1. 受け入れたら、その人は Gmail アカウントの右上にあるプロフィール画像をクリックして、あなたのアカウント名を選択することで、あなたに代わってメッセージを送信できるようになります

## フィルターとラベルの設定 {#setting-up-filters-and-labels}

フィルターとラベルを使用すると、受信メールを自動的に振り分けて受信トレイをよりよく整理したり、不要なメッセージを自動的に削除することもできます。

1. Gmail 設定の [Filters and blocked addresses](https://mail.google.com/mail/u/0/#settings/filters) タブに移動します
1. `Create a new filter` をクリックします
1. フィルターの条件を指定します（例: 特定の送信者からのすべてのメール）
1. `Create Filter` をクリックします
1. 指定した条件に一致するすべてのメールを Gmail がどのように処理するかを指定します
1. `Create filter` をクリックします

### ラベル {#labels}

指定した条件に一致するメールを Gmail がどのように処理するかを指定する際に、`Apply the label:...` のチェックボックスがあることに気付くでしょう。これらのラベルは、内容に基づいて受信メールを簡単にマークおよびフィルタリングするために使用できます。

1. `Apply the label: Choose label..` の隣にある矢印をクリックし、`New label..` を選択します
1. ラベルに名前を付けます（例: EUS support emails）
    1. ラベルを既存のラベルの下にネストすることもできます
1. `Apply the label..` フィールドの隣のボックスにチェックを入れ、ドロップダウンメニューからラベルを選択します
1. メールフィルターの設定を続行します

## スパムメッセージの報告 {#reporting-spam-messages}

1. 受信トレイの右側で、`PhishArm` アドオンアイコンをクリックします
1. 疑わしいメールをクリックします **メール内のリンクは絶対にクリックしないでください**
1. PhishArm パネルの `Report Email` ボタンをクリックします

## 追加サポート {#additional-support}

追加サポートが必要な場合は、Slack の #it_help または [it-help@gitlab.com](mailto:it-help@gitlab.com) からお気軽にお問い合わせください。
