---
title: "GitLab IT オンボーディング 101"
description: "新入社員が Okta、デバイス登録、アカウントアクセスを含めて GitLab の MacBook または Linux ラップトップをセットアップするためのステップバイステップガイド"
upstream_path: /handbook/security/corporate/end-user-services/onboarding101/
upstream_sha: db1b52fb5e65d37509c3eaaaebfd50dd491e4b36
translated_at: "2026-07-22T06:32:52+09:00"
translator: codex
stale: false
lastmod: "2026-07-21T10:14:54-05:00"
---

## GitLab へようこそ

GitLab への参加おめでとうございます！このページは IT オンボーディング体験に特化しています。GitLab では、あなたが最高の能力で仕事を完了できるようにするために、多くのアプリケーションと最新のハードウェアを使用しています！最初は少し圧倒されるかもしれませんが、Team member enablement チームがプロセスをできるだけ簡単にするためにここにいます！

## 目次

1. [始める前に](#before-you-begin)
1. [ラップトップセットアップ: MacBook](#laptop-setup-macbook)
   - [Okta アカウントの有効化](#macbook-step-1-activate-your-okta-account)
   - [MacBook の初期セットアップ](#macbook-step-2-initial-setup)
   - [システム構成](#macbook-step-3-system-configuration)
   - [Google アカウントのセットアップ](#macbook-step-4-google-account-setup)
   - [Okta アカウントの確認](#macbook-step-5-okta-account-verification)
   - [GitLab メールおよび GitLab.com アカウントへのアクセス](#macbook-step-6-access-gitlab-email--gitlabcom-account)
1. [ラップトップセットアップ: Linux](#laptop-setup-linux)
   - [Okta アカウントの有効化](#linux-step-1-activate-your-okta-account)
   - [Okta セットアップ](#linux-step-2-okta-setup)
   - [Google アカウントのセットアップ](#linux-step-3-google-account-setup)
   - [GitLab メールおよび GitLab.com アカウントへのアクセス](#linux-step-4-access-gitlab-email--gitlabcom-account)

## 始める前に {#before-you-begin}

個人のメールに Okta 有効化メールが届きます。これが GitLab のシステムへのアクセスを取得するための最初のステップです。

## ラップトップセットアップ: MacBook {#laptop-setup-macbook}

> **重要**: 開始日まで仕事用 MacBook にはアクセスできません。開始日に、このガイドに従ってください。

### MacBook ステップ 1: Okta アカウントを有効化する {#macbook-step-1-activate-your-okta-account}

1. モバイルデバイスで、個人のメールから Okta 有効化メールを確認します。
1. メール内のリンクをクリックしてパスワードを設定します
1. パスワードを設定すると、ブラウザは Okta ダッシュボードにリダイレクトされます。**重要: ステップ 2 のラップトップセットアッププロセスを完了する前に、Gmail（G Suite SSO Mail）または任意の Google アプリケーション（G Suite SSO Drive、G Suite SSO Calendar、G Suite SSO Account）を開かないでください。これらのアプリケーションを早く開くと、ラップトップからロックアウトされます。**
1. Okta から **Security Method enrolled** という件名のフォローアップメールが届きます。

### MacBook ステップ 2: 初期セットアップ {#macbook-step-2-initial-setup}

> **重要**: ラップトップで `Remote Management` が利用できない場合は、[Jamf MDM Setup Guide](/handbook/security/corporate/systems/jamf/setup/) を使用してデバイスを手動で登録してください。

<ol>
  <li>GitLab ラップトップの電源を入れます</li>
  <li>初期 macOS セットアップを完了します:
    <ol type="a">
      <li>希望の言語を選択します</li>
      <li>国または地域を選択します</li>
      <li>Transfer Your Data to This Mac 画面で、<b>Set up as new</b> を選択します</li>
      <li>アクセシビリティオプションを選択します（または <b>Not Now</b> をクリックします）</li>
      <li>WiFi ネットワークを選択します</li>
      <li>**Remote Management** 画面で、<b>Enroll</b> をクリックします</li>
    </ol>
  </li>
  <li>GitLab Okta にログインします:
    <ol type="a">
      <li>完全な GitLab メールアドレスを使用します（例: yourname@gitlab.com）</li>
      <li>個人デバイスで作成したパスワードを入力します</li>
      <li><b>Sign in</b> をクリックします</li>
    </ol>
  </li>
  <li>コンピューターアカウントをセットアップします:
    <ol type="a">
      <li>ローカル Mac アカウントのパスワードを作成します</li>
      <li><b>Continue</b> をクリックします</li>
    </ol>
  </li>
  <li>Apple の利用規約に同意します</li>
  <li>システム設定を構成します:
    <ol type="a">
      <li><b>Enable Location Services</b> 画面で、<b>Enable Location Services on this Mac</b> をチェックします</li>
      <li><b>Continue</b> をクリックします</li>
      <li><b>Touch ID</b> 画面で、<b>Continue</b> をクリックします</li>
      <li>スキャナーに指を置いて Touch ID を登録します（これは必須です）</li>
      <li><b>Choose Your Look</b> 画面で、<b>Light</b>、<b>Dark</b>、または <b>Auto</b> を選択します</li>
      <li><b>Continue</b> をクリックします</li>
    </ol>
  </li>
</ol>

### MacBook ステップ 3: システム構成 {#macbook-step-3-system-configuration}

<ol>
  <li><b>Welcome to your new Mac!</b> 画面で、アプリケーションが自動的にインストールされる間お待ちください
    <ol type="a">
      <li>これには数分かかります</li>
      <li>完了したら、<b>Done</b> をクリックします</li>
    </ol>
  </li>
  <li>システム再起動:
    <ol type="a">
      <li>ポップアップが、マシンが次の 1 分以内に再起動する必要があることを通知します</li>
      <li>自動再起動を待つか、自分で開始します</li>
      <li>再起動後、再度ログインします</li>
    </ol>
  </li>
  <li>FileVault を有効化します:
    <ol type="a">
      <li>FileVault（ディスク暗号化）を有効にするよう促されたら、<b>Enable Now</b> をクリックします</li>
      <li>これには数分かかります</li>
      <li>完了したら、<b>Done</b> をクリックします</li>
    </ol>
    <p><b>注:</b> FileVault は必須です。次回のログイン時に有効化するよう促され、そうしなければ先に進めません。</p>
  </li>
</ol>

### MacBook ステップ 4: Google アカウントのセットアップ {#macbook-step-4-google-account-setup}

1. Google Chrome を開きます
1. **Sign in to Chrome** ウィンドウで、**Sign in** をクリックします
1. GitLab メールアドレスを入力します
1. Okta Verify が開いた場合は、**Not now** をクリックするか閉じます
1. ユーザー名とパスワードで Okta にサインインします
1. 表示される Google Workspace ポリシーで **Agree** をクリックします
1. **Verify it's you** 画面で、**Continue** をクリックします
1. **Enhanced Ad Privacy in Chrome** 通知で、**Got it** をクリックします
1. **Your organization will manage this profile** が表示されたら、**Continue** をクリックします
1. **Turn on Sync** ウィンドウで、**Yes, I'm in** をクリックします

### MacBook ステップ 5: Okta アカウントの確認 {#macbook-step-5-okta-account-verification}

<ol>
  <li>Chrome で、https://gitlab.okta.com に移動し、Okta Verify が開くのを待ちます
    <ol type="a">
      <li><b>Welcome to Okta Verify</b> ウィンドウで、<b>Get Started</b> をクリックします</li>
      <li>Chrome で、Okta パスワードを入力し、<b>Verify</b> をクリックします</li>
      <li>Okta Verify ウィンドウで、<b>Enable Touch ID confirmation</b> の <b>Enable</b> をクリックします</li>
      <li>Chrome の <b>Complete</b> タブを閉じます</li>
    </ol>
  </li>
  <li>セキュリティ確認を完了します:
    <ol type="a">
      <li>Chrome で、<b>Verify it's you with a security method</b> をクリックします</li>
      <li><b>Password</b> を選択し、<b>Verify</b> をクリックします</li>
      <li>Okta Verify で、<b>Yes, it's me</b> をクリックします（または指紋を提供します）</li>
    </ol>
  </li>
  <li>追加のセキュリティ方法をセットアップします:
    <ol type="a">
      <li><b>Set up Security methods</b> 画面で、<b>Security Key or Biometric authenticator</b> の <b>Set up</b> をクリックします</li>
      <li>もう一度 <b>Set up</b> をクリックして確認します</li>
      <li><b>Create a passkey for gitlab.okta.com</b> ポップアップで、<b>Save another way</b> をクリックします</li>  
      <li><b>Your Chrome profile</b> を選択し、続いて <b>Continue</b> をクリックします</li>
        <ol>
          <li><b>重要</b>: パスキーは Chrome プロファイルに保存し、Google アカウントには保存<b>しない</b>でください。Google アカウントに保存するとキーがアクセス不能になり、アカウントからロックアウトされる結果になります。</li>
        </ol>
    </ol>
   </li>
</ol>

### MacBook ステップ 6: GitLab メールおよび GitLab.com アカウントへのアクセス {#macbook-step-6-access-gitlab-email--gitlabcom-account}

1. Okta で **G Suite SSO Mail** をクリックして、GitLab メールにアクセスします
1. 「**Welcome to GitLab Onboarding, `yourname`!**」というタイトルのメールを GitLab メールで確認します
1. メール内の指示に従って GitLab.com アカウントをセットアップし、オンボーディング Issue にアクセスします

## ラップトップセットアップ: Linux {#laptop-setup-linux}

このガイドは Ubuntu を使用していることを前提としています。コマンドの構文は、選択したディストリビューションに合わせて調整してください。

### Linux ステップ 1: Okta アカウントを有効化する {#linux-step-1-activate-your-okta-account}

1. モバイルデバイスで、個人のメールから Okta 有効化メールを確認します。
1. メール内のリンクをクリックしてパスワードを設定します
1. パスワードを設定すると、ブラウザは Okta ダッシュボードにリダイレクトされます
1. Okta から **Security Method enrolled** という件名のフォローアップメールが届きます

### Linux ステップ 2: Okta セットアップ {#linux-step-2-okta-setup}

> **重要**: Linux 上のウェブブラウザは、Dell ラップトップの指紋リーダーにアクセスできません。Okta のパスキーを保存するには、YubiKey または携帯電話のいずれかを使用する必要があります。<br>
ラップトップとともに YubiKey は受け取れませんが、[こちら](/handbook/security/corporate/systems/yubikey/purchasing/) の手順に従ってリクエストできます。<br>

<ol>
  <li>Linux ラップトップで、[Google Chrome をダウンロードしてインストール](https://support.google.com/chrome/a/answer/9025903?hl=en) します</li>
    <ol type="a">
      <li><code>wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb</code></li>
      <li><code>sudo dpkg -i google-chrome-stable_current_amd64.deb</code></li>
      <li><code> sudo apt --fix-broken install</code></li>
    </ol>
  </li>
  <li>Google Chrome を開き、https://gitlab.okta.com に移動します</li>
  <li>セキュリティ確認を完了します:
    <ol type="a">
      <li><b>Verify it's you with a security method</b> をクリックします</li>
      <li><b>Password</b> を選択し、<b>Verify</b> をクリックします</li>
   </ol>
  </li>
  <li>追加のセキュリティ方法をセットアップします:
    <ol type="a">
      <li><b>Set up Security methods</b> 画面で、<b>Security Key or Biometric authenticator</b> の <b>Set up</b> をクリックします</li>
      <li>もう一度 <b>Set up</b> をクリックして確認します</li>
      <li><b>Passkeys & Security Keys</b> ポップアップで、2 つのオプションがあります:</li>
        <ol>
          <li><b>携帯電話またはタブレットを使用する</b>: 携帯電話のカメラアプリで QR コードをスキャンし、Password アプリ（iOS）または Google アカウント（Android）にパスキーを保存します</li>
          <li><b>セキュリティキーを使用する</b>: YubiKey をラップトップに挿入し、キーの認証ボタンを押します</li>
        </ol>
   </ol>
  </li>
</ol>

### Linux ステップ 3: Google アカウントのセットアップ {#linux-step-3-google-account-setup}

1. Google Chrome を開きます
1. **Sign in to Chrome** ウィンドウで、**Sign in** をクリックします
1. GitLab メールアドレスを入力します
1. ユーザー名とパスワードで Okta にサインインします
1. 表示される Google Workspace ポリシーで **Agree** をクリックします
1. **Verify it's you** 画面で、**Continue** をクリックします
1. **Enhanced Ad Privacy in Chrome** 通知で、**Got it** をクリックします
1. **Your organization will manage this profile** が表示されたら、**Continue** をクリックします
1. **Turn on Sync** ウィンドウで、**Yes, I'm in** をクリックします

### Linux ステップ 4: GitLab メールおよび GitLab.com アカウントへのアクセス {#linux-step-4-access-gitlab-email--gitlabcom-account}

1. 「**Welcome to GitLab Onboarding, `yourname`!**」というタイトルのメールを GitLab メールで確認します
1. メール内の指示に従って GitLab.com アカウントをセットアップし、オンボーディング Issue にアクセスします

### おめでとうございます

GitLab アカウントとラップトップの初期セットアッププロセスを完了しました。問題が発生した場合は、Slack の Compass アプリ（上部の検索バーに「Compass」と入力すると見つかります）または it-help@gitlab.com から IT にお問い合わせください。

### 次のステップ

オンボーディングの 2 日目に従ってモバイルデバイスで会社のアプリケーションにアクセスするには、[モバイルデバイスのオンボーディング](/handbook/security/corporate/end-user-services/onboarding101/onboarding-mobile-devices) ガイドに従ってください。

## ヘルプが必要ですか？

ラップトップのセットアップでさらなる支援が必要な場合は、毎週火曜日にスケジュールされている週次オンボーディングコール（カレンダーをチェックしてください！）に参加するか、Slack の Compass アプリ（上部の検索バーに「Compass」と入力すると見つかります）または it-help@gitlab.com からお問い合わせください。
