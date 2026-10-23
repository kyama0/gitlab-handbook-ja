---
title: "GitLab IT オンボーディング 101"
description: "新入社員が Okta を有効化し、GitLab の Mac または Linux コンピューターをセットアップして、Google と GitLab のアカウントにアクセスするための手順ガイドです。"
aliases:
  - /handbook/security/corporate/end-user-services/onboarding101/
upstream_path: /handbook/eta/corporate-it/end-user-services/onboarding101/
upstream_sha: "c9949657c5872e30f062664ae031e45198aa8562"
lastmod: "2026-10-23T12:38:14-05:00"
translated_at: "2026-10-23T21:05:36+00:00"
translator: codex
stale: false
---

## GitLab へようこそ {#welcome-to-gitlab}

GitLab への参加、おめでとうございます！このページでは、IT オンボーディングについて説明します。GitLab では、多くのアプリケーションと最新のハードウェアを使用して、皆さんが最大限に能力を発揮して業務を完了できるようにしています。最初は少し圧倒されるかもしれませんが、私たちはこのプロセスをできるだけ簡単にします！

> **重要**：入社日まで業務用 Mac にはアクセスできません。入社日になったら、このガイドに従ってください。

## 目次 {#table-of-contents}

1. [Okta アカウントを有効化する](#activate-your-okta-account)
1. コンピューターをセットアップします：
   - [Mac のセットアップ](#mac-setup)
   - [Linux のセットアップ](#linux-setup)
1. [Mac で Okta Verify をセットアップする](#set-up-okta-verify-on-mac)
1. [Google アカウントのセットアップ](#google-account-setup)
1. [GitLab メールと GitLab.com にアクセスする](#access-gitlab-email-and-gitlabcom)

## Okta アカウントを有効化する {#activate-your-okta-account}

個人用メールアドレスに Okta の有効化メールが届きます。これは GitLab のシステムへアクセスするための最初の手順です。

1. モバイルデバイスで、個人用メールアドレスに届いた Okta の有効化メールを確認します。
1. メール内のリンクをクリックしてパスワードを設定し、モバイルデバイスで Okta Verify を設定します。
1. アカウントのセットアップ後、ブラウザは Okta ダッシュボードにリダイレクトされます。

> **重要**：GitLab 管理の Mac をセットアップするには、Okta Verify または登録済みの FIDO2 キー（YubiKey など）が必要です。Okta アカウントのオンボーディング時に、必ずいずれかをセットアップしてください。

## Mac のセットアップ {#mac-setup}

> **重要**：セットアップ中に**デバイス管理**画面が表示されない場合は、[手動登録](#manual-mac-setup)の手順に従ってデバイスを MDM に登録してください。

セットアップが完了するまで、Mac を電源に接続し、安定したインターネット接続を維持してください。

1. GitLab 管理の Mac の電源を入れます。
1. 国または地域を選択します。\
   ![米国が選択され、続けるボタンが表示されている国または地域の選択画面](/images/eta/corporate-it/end-user-services/onboarding101/mac-setup-country.png)
1. **この Mac にデータを転送**画面で、**新規として設定**を選択します。\
   ![新規として設定が選択されている、この Mac にデータを転送画面](/images/eta/corporate-it/end-user-services/onboarding101/mac-setup-transfer-data.png)
1. アクセシビリティのオプションを選択するか、**今はしない**をクリックします。\
   ![視覚、操作、聴覚、認知のオプションと今はしないボタンが表示されているアクセシビリティ画面](/images/eta/corporate-it/end-user-services/onboarding101/mac-setup-accessibility.png)
1. Wi-Fi ネットワークを選択します。\
   ![ネットワークの一覧と続けるボタンが表示されている Wi-Fi ネットワークの選択画面](/images/eta/corporate-it/end-user-services/onboarding101/mac-setup-wifi.png)
1. **デバイス管理**画面で、登録プロファイルが読み込まれるまで待ち、**登録**をクリックします。\
   ![Mac が GitLab Inc. の所有であることと登録ボタンが表示されているデバイス管理画面](/images/eta/corporate-it/end-user-services/onboarding101/mac-setup-device-management.png)
1. 指示が表示されたら、Okta にサインインします。Okta アカウントの有効化時に作成したパスワードを使用します。\
   ![Fleet に接続というタイトルで、ユーザー名フィールドと次へボタンがある Okta サインインウィンドウ](/images/eta/corporate-it/end-user-services/onboarding101/mac-setup-okta-sign-in.png)
1. **セキュリティ方式で本人確認**画面で、**プッシュ通知を受信**（Okta Verify）または**セキュリティキーまたは生体認証**（YubiKey など）を選択し、本人確認を完了します。\
   ![プッシュ通知を受信とセキュリティキーまたは生体認証のオプションが表示されている Okta のセキュリティ方式による本人確認画面](/images/eta/corporate-it/end-user-services/onboarding101/mac-setup-okta-verify.png)
1. Mac が MDM に登録され、必要な設定がインストールされます。完了すると、アカウントの作成に進みます。
1. コンピューターアカウントをセットアップします。氏名とユーザー名は自動入力されています。[GitLab パスワード基準](/handbook/security/policies_and_standards/password-standard/#password-requirements)を満たすローカル Mac アカウント用のパスワードを作成します。Okta と同じパスワードを使用してもかまいません。\
   ![氏名とユーザー名が自動入力され、12 文字以上などのパスワード要件が表示されている Mac アカウント作成画面](/images/eta/corporate-it/end-user-services/onboarding101/mac-setup-account.png)
1. 外観を選択します：**ライト**、**ダーク**、または**自動**。
1. 位置情報サービスを有効にします。\
   ![この Mac で位置情報サービスを有効にするがオンになっている位置情報サービスの有効化画面](/images/eta/corporate-it/end-user-services/onboarding101/mac-setup-location.png)
1. 指示が表示されたら、Touch ID をセットアップします。\
   ![Touch ID をあとで設定と続けるボタンが表示されている Touch ID 画面](/images/eta/corporate-it/end-user-services/onboarding101/mac-setup-touch-id.png)
1. デスクトップが表示されると、GitLab のオンボーディングアプリ（Exit0）が**Mac を設定**ウィンドウを開きます。**設定を開始**をクリックするか、自動的に開始するまで 10 秒待ちます。主要なアプリ（Google Chrome、Slack など）がインストールされ、必要な設定が適用され、使用前にセキュリティコンプライアンスが確認されます。
1. **準備ができました！** 画面が表示されたら、セットアップは完了です。FileVault のフルディスク暗号化がすでに有効な場合は、Mac を使用できます。FileVault が有効でない場合は、有効にするために Mac の再起動を求められます。**再起動**をクリックするか、60 秒のカウントダウンを待ち、ローカル Mac アカウントのパスワードで再度ログインします。

セットアップが停止したり、エラーが表示されたりする場合は、個人用メールアドレスから it-help@gitlab.com にメールを送信してください。

### Mac の手動セットアップ {#manual-mac-setup}

手動登録は、GitLab の認定ベンダーから購入されなかった Mac など、自動登録を利用できない Mac のみを対象としています。Mac の手動登録は最終手段であり、標準的なプロセスとはみなされません。GitLab が Mac を発送できない国に住んでいる場合は、it-help@gitlab.com にメールを送信して、手動登録が適切な選択肢か確認してください。

開始する前に、Mac が macOS 15 以降を実行しており、管理者アカウントでサインインできることを確認してください。

<!-- TODO: confirm the final Okta tile name from https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/work_items/5723 and replace "Fleet macOS Manual Enrollment" below. -->

1. it-help@gitlab.com にメールを送信し、Mac の手動登録へのアクセスをリクエストします。IT が手動登録用の Okta グループに追加し、完了したら通知します。
1. Mac で Safari を開きます。Google Chrome はまだインストールされていません。
1. [Okta ダッシュボード](https://gitlab.okta.com)にサインインします。
1. **Fleet macOS Manual Enrollment** タイルをクリックします。Fleet の登録ページが開きます。
   <!-- TODO: add a screenshot of the Okta dashboard tile. -->
1. 指示が表示されたら、Okta に再度サインインします。
1. **Mac で MDM を有効にする方法**ページで、**会社所有**が選択されていることを確認し、**ダウンロード**をクリックします。Safari でダウンロードの許可を求められたら、**許可**をクリックします。**プロファイルがダウンロードされました**と表示されたら、**OK**をクリックします。
1. **Apple メニュー** > **システム設定**を選択し、**一般** > **デバイス管理**を選択します。**GitLab enrollment** プロファイルをダブルクリックします。\
   ![ダウンロード済みの GitLab enrollment プロファイルと、プロファイルがインストールされていません。ダブルクリックして確認という表示があるデバイス管理設定](/images/eta/corporate-it/end-user-services/onboarding101/mac-manual-device-management.png)
1. **インストール...** をクリックし、**インストール**をクリックして確定します。\
   ![GitLab enrollment プロファイルをインストールしてよいかを確認し、インストール、詳細を表示、キャンセルのボタンがある画面](/images/eta/corporate-it/end-user-services/onboarding101/mac-manual-install-profile.png)
1. GitLab のオンボーディングアプリが**Mac を設定**ウィンドウを開くまで、数分待ちます。Mac を電源とインターネットに接続したままにしてください。

以降のセットアップは自動登録と同じです。[Mac のセットアップ](#mac-setup)の**Mac を設定**と**準備ができました！** の手順を続け、次に [Okta Verify をセットアップ](#set-up-okta-verify-on-mac)します。

登録に失敗した場合は、it-help@gitlab.com にメールを送信してください。

## Linux のセットアップ {#linux-setup}

[Linux デスクトップ OS セットアップガイド](/handbook/security/corporate/systems/linux/setup/)に従って、Linux ラップトップをセットアップして登録してください。

## Mac で Okta Verify をセットアップする {#set-up-okta-verify-on-mac}

Okta Verify は Mac のセットアップ中に自動的にインストールされ、GitLab で使用するアプリへの認証の主な手段となります。最も簡単なセットアップ方法は、モバイルデバイスから Okta Verify アカウントをインポートすることです。

開始する前に：

- モバイルデバイスを Mac の近くに置き、両方で Bluetooth をオンにします。
- モバイルデバイスで Okta Verify を開き、GitLab アカウントに警告やエラーが表示されていないことを確認します。

1. Mac で **Okta Verify** を開きます。
1. **Okta Verify へようこそ**ウィンドウで、**アカウントをインポート**をクリックします。\
   ![開始とアカウントをインポートのボタンがある Okta Verify へようこそウィンドウ](/images/eta/corporate-it/end-user-services/onboarding101/mac-okta-verify-welcome.png)
1. モバイルデバイスで Okta Verify を開き、GitLab アカウント、**アカウントをエクスポート**、**許可**の順にタップします。モバイルデバイスに QR コードと 8 文字のコードが表示されます。
1. Mac で 8 文字のコードを入力し、**続ける**をクリックします。Okta は 5 分後に Bluetooth 接続を終了するため、コードの有効期限が切れた場合は最初からやり直してください。\
   ![もう一方のデバイスのコードを入力する 8 つの欄と続けるボタンがある Okta Verify のコード入力画面](/images/eta/corporate-it/end-user-services/onboarding101/mac-okta-verify-code.png)
1. Mac に 6 桁の PIN が表示されます。モバイルデバイスの Okta Verify にその PIN を入力します。他の人から伝えられた PIN は絶対に入力しないでください。
1. 指示が表示されたら、Touch ID を有効にします。

モバイルデバイスに Okta Verify がない場合は、**アカウントをインポート**の代わりに**開始**をクリックします。サインイン URL が `gitlab.okta.com` であることを確認し、**次へ**をクリックして、Okta のユーザー名、パスワード、セキュリティ方式でサインインします。

## Google アカウントのセットアップ {#google-account-setup}

1. Google Chrome を開きます。**Chrome にログイン**ウィンドウで、**ログイン**をクリックします。\
   ![ログインせずに続行とログインのボタンがある Chrome にログインウィンドウ](/images/eta/corporate-it/end-user-services/onboarding101/chrome-sign-in.png)
1. GitLab メールアドレスを入力し、**次へ**をクリックします。\
   ![GitLab メールアドレスが入力され、次へボタンが表示されている Chrome にログインウィンドウ](/images/eta/corporate-it/end-user-services/onboarding101/chrome-sign-in-email.png)
1. Chrome で GitLab の Okta サインイン画面が開きます。**セキュリティ方式で本人確認**画面で、**Okta FastPass を使用**を選択します。Linux では、代わりに**セキュリティキーまたは生体認証**を選択します。\
   ![Okta FastPass を使用、パスワード、セキュリティキーまたは生体認証のオプションが表示されている Okta のセキュリティ方式による本人確認画面](/images/eta/corporate-it/end-user-services/onboarding101/chrome-okta-fastpass.png)
1. 初回サインイン時に、Google が Google Workspace の利用規約を表示します。**同意する**をクリックします。
1. Google の**本人確認**画面で、GitLab メールアドレスが表示されていることを確認し、**続行**をクリックします。\
   ![GitLab メールアドレスと続行ボタンが表示されている Google の本人確認画面](/images/eta/corporate-it/end-user-services/onboarding101/chrome-google-verify.png)
1. **このプロファイルは管理されます**画面で、**続行**をクリックします。
1. Chrome に **既存のプロファイルデータをどのように扱いますか？** と表示されたら、**既存のデータを含めずに仕事用の新しいプロファイルを作成**を選択し、**確認**をクリックします。\
   ![既存のプロファイルデータの扱いを確認する Chrome の画面で、既存のデータを含めずに仕事用の新しいプロファイルを作成が選択され、確認ボタンが表示されている](/images/eta/corporate-it/end-user-services/onboarding101/chrome-profile-data.png)

## GitLab メールと GitLab.com にアクセスする {#access-gitlab-email-and-gitlabcom}

1. Okta ダッシュボードから **Google Workspace Mail** をクリックするか、<https://mail.google.com> にアクセスして GitLab メールを開きます。
1. GitLab メールで、件名が「**Welcome to GitLab Onboarding, `yourname`!**」のメールを確認します。
1. メールの手順に従って GitLab.com アカウントをセットアップし、オンボーディング Issue にアクセスします。

### おめでとうございます {#congratulations}

GitLab アカウントとコンピューターの初期セットアッププロセスが完了しました。問題が発生した場合は、Slack の Compass アプリ（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com へメールで IT にお問い合わせください。

## お困りですか？ {#need-help}

Mac のセットアップについてサポートが必要な場合は、it-help@gitlab.com にメールを送信してください。GitLab メールにまだアクセスできない場合は、個人用メールアドレスから送信してください。
