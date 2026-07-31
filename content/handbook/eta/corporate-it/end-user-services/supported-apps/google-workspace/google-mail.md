---
title: Google Mail (Gmail)
description: Gmail の利用および設定ガイド
upstream_path: /handbook/eta/corporate-it/end-user-services/supported-apps/google-workspace/google-mail/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:14:51+09:00"
translator: codex
stale: false
---

Gmail は主要なメールアプリケーションです。Okta Dashboard の `G Suite SSO Mail` タイル、または直接 [gmail ページ](https://mail.google.com/)からアプリにアクセスできます。

このページは、よく寄せられる質問の一部に対する解決策を提供することを目的としています。より詳細なサポートについては、[公式 Gmail サポートページ](https://support.google.com/mail/)を参照してください。

## 目次

- [Gmail アクセスリクエスト](#gmail-access-requests)
- [不在時の返信を設定する](#set-up-out-of-office-replies)
- [エイリアスを使用する](#using-aliases)
- [委任アクセスを設定する](#set-up-delegate-access)
- [フィルターとラベルを設定する](#setting-up-filters-and-labels)
  - [ラベル](#labels)
- [スパムメッセージを報告する](#reporting-spam-messages)
- [追加サポート](#additional-support)

## Gmail アクセスリクエスト {#gmail-access-requests}

次のリクエストには、[この AR テンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Google_Gmail_Request)を使用できます:

- 他者の Gmail へのアクセス
- 他者の Gmail に設定する不在メッセージ
- 自分の Gmail アカウントに作成するエイリアス

## 不在時の返信を設定する {#set-up-out-of-office-replies}

1. Gmail の [General Settings](https://mail.google.com/mail/u/0/#settings/general) ページに移動します
1. `Out-of-Office AutoReply:` までスクロールします
1. メッセージの開始日と終了日を設定します
1. 不在時の返信メッセージを記入します。不在中に責任を引き継ぐ人の連絡先詳細を必ず含めてください。

## エイリアスを使用する {#using-aliases}

1. [Gmail サポート AR](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Google_Gmail_Request)を作成し、アカウントへのエイリアス追加をリクエストします
1. 付与されたら、[Gmail Accounts Settings ページ](https://mail.google.com/mail/u/0/#settings/accounts)に移動します
1. `Send mail as:` で `Add another email address` をクリックします
1. 表示されるポップアップに別のメールアドレスを入力し、`Next Step` をクリックします
1. 新しいメールアドレスがアカウントに表示され、デフォルトにするかどうかを選択できます

## 委任アクセスを設定する {#set-up-delegate-access}

メッセージ送信などのタスクを他者がアカウントへアクセスして実行できるようにするには、まずアカウントでこの機能を有効にする必要があります。

1. [Gmail Accounts Settings ページ](https://mail.google.com/mail/u/0/#settings/accounts)に移動します
1. `Grant access to your account:` で、`Add another account` をクリックします
1. 表示されるポップアップの手順に従い、ID を検証します
1. 委任アクセスを付与するユーザーのメールアドレスを入力します
1. 委任アクセスを受け取るユーザーに、確認メッセージのメールを確認するよう依頼します
1. 承認後、そのユーザーは Gmail アカウントの右上にあるプロフィール画像をクリックし、アカウント名を選択することで、あなたの代理としてメッセージを送信できます

## フィルターとラベルを設定する {#setting-up-filters-and-labels}

フィルターとラベルを使用すると、受信メールを自動的に並べ替えて受信トレイを整理したり、不要なメッセージを自動的に削除したりできます。

1. Gmail Settings の [Filters and blocked addresses](https://mail.google.com/mail/u/0/#settings/filters) タブに移動します
1. `Create a new filter` をクリックします
1. フィルターの条件を指定します（例: 特定の送信者からのすべてのメール）
1. `Create Filter` をクリックします
1. 指定した条件に一致するすべてのメールを Gmail がどのように処理するか指定します
1. `Create filter` をクリックします

### ラベル {#labels}

指定した条件に一致するメールを Gmail がどのように処理するかを指定するとき、`Apply the label:...` のチェックボックスがあります。これらのラベルは、内容に基づいて受信メールを簡単にマークしてフィルターするために使用できます。

1. `Apply the label: Choose label..` の横にある矢印をクリックし、`New label..` を選択します
1. ラベルに名前を付けます（例: EUS サポートメール）
    1. 既存のラベルの下にラベルをネストすることもできます
1. `Apply the label..` フィールドの横にあるボックスを必ずチェックし、ドロップダウンメニューからラベルを選択します
1. メールフィルターの設定を続けます

## スパムメッセージを報告する {#reporting-spam-messages}

1. 受信トレイの右側で、`PhishArm` アドオンアイコンをクリックします
1. 不審なメールをクリックします。**メール内のリンクを絶対にクリックしないでください**
1. PhishArm パネルの `Report Email` ボタンをクリックします

## 追加サポート {#additional-support}

追加のサポートが必要な場合は、Slack の Compass アプリ（上部の検索バーに "Compass" と入力して見つけます）または [it-help@gitlab.com](mailto:it-help@gitlab.com) から IT に連絡してください。
