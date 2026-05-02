---
title: "Salesforce モバイルアプリ ユーザーガイド"
description: "Salesforce モバイルアプリのダウンロード先とログイン方法の説明。"
upstream_path: "/handbook/business-technology/enterprise-applications/guides/salesforce-mobile/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T06:02:44Z"
translator: "claude"
stale: false
---

## Salesforce モバイルアプリへのログイン方法

以下に、Okta 経由で Salesforce モバイルアプリにログインする方法を説明します。ログイン試行中に問題が発生した場合は、Slack の #it_help チャンネルでお問い合わせください。

### 前提条件

* 以下のアプリをダウンロードしてインストールしてください
  * Salesforce Mobile
    * [Google Play](https://play.google.com/store/apps/details?id=com.salesforce.chatter)
    * [Apple App Store](https://apps.apple.com/us/app/salesforce/id404249815)
  * Okta Verify
    * [Google Play](https://play.google.com/store/apps/details?id=com.okta.android.auth)
    * [Apple App Store](https://apps.apple.com/us/app/salesforce/id404249815)
  * Android および/または iOS アクセスを可能にする Salesforce 権限
    * モバイルでの Salesforce へのアクセスは Sales 組織のユーザーのみに許可されています。
    * Sales 組織に属さないがアクセスを希望する場合は、[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Individual_Bulk_Access_Request)を開いてビジネス上の正当な理由を記入してください。チームがリクエストの処理を支援します。

## 手順

### Android

#### 推奨方法

1. Salesforce アプリを開きます。
2. ログインページで右下の **Use Custom Domain** を選択します。
3. 「Custom Domain」フィールドに `gitlab` を入力し、**Continue** を選択します。
4. ログインページで **Log in with Okta** を選択します。
5. Okta のユーザー名とパスワードを入力し、**Verify** を選択します。
6. 本人確認のオプションが表示されたら、`Use Okta FastPass` を選択します。
    1. 警告: **Security Key or Biometric Authentication** を選択するとエラーが発生し、ログインできない場合があります。
7. Okta Verify で本人確認を行い、追加のログインプロンプトを完了します。生体認証が必要です。
8. Salesforce アプリにリダイレクトされ、認証プロセスが完了します。
    1. 初めてログインする場合は、「Allow Access?」ページで **Allow** を選択する必要がある場合があります。
9. Salesforce アプリへのログインが完了しました。

#### 代替方法

1. Salesforce アプリを開きます。
2. ログインページで右上のメニュー（三点リーダー）を選択します。
3. **Change Server** を選択します。
4. **Add Connection** を選択します。
5. 新しい接続に名前を付けます（例: GitLab）
6. URL に `https://gitlab.my.salesforce.com` を入力し、**Apply** を選択します。
7. 新しく作成した接続を選択します。
8. <- 矢印を選択してログインページに戻ります。
9. ログインページで **Log in with Okta** を選択します。
10. Okta のユーザー名とパスワードを入力し、**Verify** を選択します。
11. 本人確認のオプションが表示されたら、以下を選択します
    1. `Use Okta FastPass` を選択して Okta Verify 経由でログインします。
    2. Okta Verify で本人確認を行い、追加のログインプロンプトを完了します。生体認証が必要です。
12. Salesforce アプリにリダイレクトされ、認証プロセスが完了します。
    1. 初めてログインする場合は、「Allow Access?」ページで **Allow** を選択する必要がある場合があります。
13. Salesforce アプリへのログインが完了しました。

### iOS

#### 推奨方法

1. Salesforce アプリを開きます。
2. ログインページで右下の Use Custom Domain を選択します。
3. 「Custom Domain」フィールドに `gitlab` を入力し、**Continue** を選択します。
4. ログインページで **Log in with Okta** を選択します。
5. Okta のユーザー名とパスワードを入力し、**Verify** を選択します。
6. 本人確認のオプションが表示されたら、`Use Okta FastPass` を選択します。
    1. 警告: **Security Key or Biometric Authentication** を選択するとエラーが発生し、ログインできない場合があります。
7. Okta Verify で本人確認を行い、追加のログインプロンプトを完了します。生体認証が必要です。
8. Salesforce アプリにリダイレクトされ、認証プロセスが完了します。
    1. 初めてログインする場合は、「Allow Access?」ページで **Allow** を選択する必要がある場合があります。
9. Salesforce アプリへのログインが完了しました。

#### 代替方法

1. Salesforce アプリを開きます。
2. ログインページで ⚙ アイコンを選択します。
3. ➕ を選択してログインホストを追加します。
4. 新しいホストにラベルを付けます（例: GitLab）。
5. ホスト名に `gitlab.my.salesforce.com` を入力し、**Done** を選択します。
6. 新しく作成したホストを選択します。
7. ログインページで **Log in with Okta** を選択します。
8. Okta のユーザー名とパスワードを入力し、**Verify** を選択します。
9. 本人確認のオプションが表示されたら、以下を選択します
    1. `Use Okta FastPass` を選択して Okta Verify 経由でログインします。
    2. Okta Verify で本人確認を行い、追加のログインプロンプトを完了します。生体認証が必要です。
10. Salesforce アプリにリダイレクトされ、認証プロセスが完了します。
    1. 初めてログインする場合は、「Allow Access?」ページで **Allow** を選択する必要がある場合があります。
11. Salesforce アプリへのログインが完了しました。

## FAQ

### Salesforce アプリにログインするためにスマートフォンが満たす必要がある要件は何ですか？

#### スマートフォンは以下のデバイスポスチャー要件を満たす必要があります

* OS の最低バージョン
* 画面ロック
* 生体認証（指紋認証、Face ID、その他サポートされている生体認証方法を含む）
* デバイスが暗号化されていること
* ジェイルブレイクまたはルート化されていないこと

### 代替方法でのログイン時に OAuth クライアントエラーが発生してページが読み込まれません。このログイン問題を修正する方法は？

* エラーが発生してログイン画面が読み込まれない場合は、設定オプションを選択して `Clear Cookies` を選択します。その後アプリを完全に閉じて再起動します。

### Okta Verify での生体認証ログインを使用したくない場合、別の方法でログインできますか？

* Okta アカウントに設定されたセキュリティキーまたはパスキーを使用して代替方法でログインできる場合があります。ただし、すべての Yubikey、セキュリティキー、またはパスキーがサポートされているわけではありません。

### サンドボックスなど複数の異なる Salesforce インスタンスにログインできますか？

* はい。複数の異なる Salesforce インスタンスにログインするには、異なる Salesforce インスタンスごとに新しいコネクタまたは新しいホストを追加する必要があります。
