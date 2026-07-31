---
title: "GitLab IT オンボーディング 101"
description: "新入社員が GitLab MacBook または Linux ラップトップをセットアップするための手順ガイドです。Okta、デバイス登録、アカウントアクセスについて説明します。"
aliases:
  - /handbook/security/corporate/end-user-services/onboarding101/
upstream_path: /handbook/eta/corporate-it/end-user-services/onboarding101/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:24:55+09:00"
translator: codex
stale: false
---

## GitLab へようこそ

GitLab への参加、おめでとうございます！このページでは、IT オンボーディングについて説明します。GitLab では、多くのアプリケーションと最新のハードウェアを使用して、皆さんが最大限に能力を発揮して業務を完了できるようにしています。最初は少し圧倒されるかもしれませんが、Team member enablement チームがこのプロセスをできるだけ簡単にします！

## 目次

1. [始める前に](#before-you-begin)
1. [ラップトップのセットアップ: MacBook](#laptop-setup-macbook)
   - [Okta アカウントを有効化する](#macbook-step-1-activate-your-okta-account)
   - [MacBook の初期セットアップ](#macbook-step-2-initial-setup)
   - [システム構成](#macbook-step-3-system-configuration)
   - [Google アカウントのセットアップ](#macbook-step-4-google-account-setup)
   - [Okta アカウントの認証](#macbook-step-5-okta-account-verification)
   - [GitLab メールと GitLab.com アカウントにアクセスする](#macbook-step-6-access-gitlab-email--gitlabcom-account)
1. [ラップトップのセットアップ: Linux](#laptop-setup-linux)
   - [Okta アカウントを有効化する](#linux-step-1-activate-your-okta-account)
   - [Okta のセットアップ](#linux-step-2-okta-setup)
   - [Google アカウントのセットアップ](#linux-step-3-google-account-setup)
   - [GitLab メールと GitLab.com アカウントにアクセスする](#linux-step-4-access-gitlab-email--gitlabcom-account)

## 始める前に {#before-you-begin}

個人用メールアドレスに Okta の有効化メールが届きます。これは GitLab のシステムへアクセスするための最初の手順です。

## ラップトップのセットアップ: MacBook {#laptop-setup-macbook}

> **重要**: 入社日まで業務用 MacBook にはアクセスできません。入社日になったら、このガイドに従ってください。

### MacBook ステップ 1: Okta アカウントを有効化する {#macbook-step-1-activate-your-okta-account}

1. モバイルデバイスで、個人用メールアドレスに届いた Okta の有効化メールを確認します。
1. メール内のリンクをクリックして、パスワードを設定します
1. パスワードの設定後、ブラウザは Okta Dashboard にリダイレクトされます。**重要: ステップ 2 のラップトップセットアッププロセスを完了する前に、Gmail (G Suite SSO Mail) または Google アプリケーション (G Suite SSO Drive、G Suite SSO Calendar、G Suite SSO Account) を開かないでください。これらのアプリケーションを早すぎるタイミングで開くと、ラップトップにログインできなくなります。**
1. Okta から、件名が **Security Method enrolled** のフォローアップメールが届きます。

### MacBook ステップ 2: 初期セットアップ {#macbook-step-2-initial-setup}

> **重要**: ラップトップで `Remote Management` を利用できない場合は、[Jamf MDM Setup Guide](/handbook/security/corporate/systems/jamf/setup/)を使用してデバイスを手動で登録してください。

<ol>
  <li>GitLab ラップトップの電源を入れます</li>
  <li>macOS の初期セットアップを完了します:
    <ol type="a">
      <li>希望する言語を選択します</li>
      <li>国または地域を選択します</li>
      <li>Transfer Your Data to This Mac 画面で、<b>Set up as new</b>を選択します</li>
      <li>アクセシビリティオプションを選択します（または <b>Not Now</b>をクリックします）</li>
      <li>WiFi ネットワークを選択します</li>
      <li>**Remote Management** 画面で、<b>Enroll</b>をクリックします</li>
    </ol>
  </li>
  <li>GitLab Okta にログインします:
    <ol type="a">
      <li>完全な GitLab メールアドレスを使用します（例: yourname@gitlab.com）</li>
      <li>個人用デバイスで作成したパスワードを入力します</li>
      <li><b>Sign in</b>をクリックします</li>
    </ol>
  </li>
  <li>コンピューターアカウントをセットアップします:
    <ol type="a">
      <li>ローカル Mac アカウント用のパスワードを作成します</li>
      <li><b>Continue</b>をクリックします</li>
    </ol>
  </li>
  <li>Apple の利用規約に同意します</li>
  <li>システム設定を構成します:
    <ol type="a">
      <li><b>Enable Location Services</b> 画面で、<b>Enable Location Services on this Mac</b>をオンにします</li>
      <li><b>Continue</b>をクリックします</li>
      <li><b>Touch ID</b> 画面で、<b>Continue</b>をクリックします</li>
      <li>スキャナーに指を置いて Touch ID を登録します（必須です）</li>
      <li><b>Choose Your Look</b> 画面で、<b>Light</b>、<b>Dark</b>、または <b>Auto</b>を選択します</li>
      <li><b>Continue</b>をクリックします</li>
    </ol>
  </li>
</ol>

### MacBook ステップ 3: システム構成 {#macbook-step-3-system-configuration}

<ol>
  <li><b>Welcome to your new Mac!</b> 画面で、アプリケーションが自動的にインストールされるまで待ちます
    <ol type="a">
      <li>数分かかるはずです</li>
      <li>完了したら、<b>Done</b>をクリックします</li>
    </ol>
  </li>
  <li>システムの再起動:
    <ol type="a">
      <li>マシンが次の 1 分以内に再起動する必要があることをポップアップが通知します</li>
      <li>自動的に再起動するまで待つか、自分で再起動を開始します</li>
      <li>再起動後、再度ログインします</li>
    </ol>
  </li>
  <li>FileVault を有効にします:
    <ol type="a">
      <li>FileVault（ディスク暗号化）を有効にするよう求められたら、<b>Enable Now</b>をクリックします</li>
      <li>数分かかるはずです</li>
      <li>完了したら、<b>Done</b>をクリックします</li>
    </ol>
    <p><b>注:</b> FileVault は必須です。次回のログイン時に有効化するよう求められ、有効化しないと先に進めません。</p>
  </li>
</ol>

### MacBook ステップ 4: Google アカウントのセットアップ {#macbook-step-4-google-account-setup}

1. Google Chrome を開きます
1. **Sign in to Chrome** ウィンドウで、**Sign in** をクリックします
1. GitLab メールアドレスを入力します
1. Okta Verify が開いた場合は、**Not now** をクリックするか閉じます
1. ユーザー名とパスワードで Okta にサインインします
1. 表示される Google Workspace ポリシーで、**Agree** をクリックします
1. **Verify it's you** 画面で、**Continue** をクリックします
1. **Enhanced Ad Privacy in Chrome** の通知で、**Got it** をクリックします
1. **Your organization will manage this profile** と表示されたら、**Continue** をクリックします
1. **Turn on Sync** ウィンドウで、**Yes, I'm in** をクリックします

### MacBook ステップ 5: Okta アカウントの認証 {#macbook-step-5-okta-account-verification}

<ol>
  <li>Chrome で https://gitlab.okta.com にアクセスし、Okta Verify が開くまで待ちます
    <ol type="a">
      <li><b>Welcome to Okta Verify</b> ウィンドウで、<b>Get Started</b>をクリックします</li>
      <li>Chrome で Okta パスワードを入力し、<b>Verify</b>をクリックします</li>
      <li>Okta Verify ウィンドウで、<b>Enable Touch ID confirmation</b> の <b>Enable</b>をクリックします</li>
      <li>Chrome で <b>Complete</b> タブを閉じます</li>
    </ol>
  </li>
  <li>セキュリティ認証を完了します:
    <ol type="a">
      <li>Chrome で、<b>Verify it's you with a security method</b>をクリックします</li>
      <li><b>Password</b>を選択し、<b>Verify</b>をクリックします</li>
      <li>Okta Verify で、<b>Yes, it's me</b>をクリックします（または指紋を提示します）</li>
    </ol>
  </li>
  <li>追加のセキュリティ方式をセットアップします:
    <ol type="a">
      <li><b>Set up Security methods</b> 画面で、<b>Security Key or Biometric authenticator</b> の <b>Set up</b>をクリックします</li>
      <li>確認のため、もう一度 <b>Set up</b>をクリックします</li>
      <li><b>Create a passkey for gitlab.okta.com</b> ポップアップで、<b>Save another way</b>をクリックします</li>
      <li><b>Your Chrome profile</b>を選択し、続けて <b>Continue</b>をクリックします</li>
        <ol>
          <li><b>重要</b>: パスキーは必ず Google アカウントでは<b>なく</b> Chrome プロファイルに保存してください。Google アカウントに保存するとキーにアクセスできなくなり、アカウントにログインできなくなります。</li>
        </ol>
    </ol>
   </li>
</ol>

### MacBook ステップ 6: GitLab メールと GitLab.com アカウントにアクセスする {#macbook-step-6-access-gitlab-email--gitlabcom-account}

1. Okta で **G Suite SSO Mail** をクリックして GitLab メールにアクセスします
1. GitLab メールで、件名が "**Welcome to GitLab Onboarding, `yourname`!**" のメールを確認します
1. メールの手順に従って GitLab.com アカウントをセットアップし、Onboarding Issue にアクセスします

## ラップトップのセットアップ: Linux {#laptop-setup-linux}

このガイドは Ubuntu を使用していることを前提としています。使用するディストリビューションに合わせて、コマンドの構文を調整してください。

### Linux ステップ 1: Okta アカウントを有効化する {#linux-step-1-activate-your-okta-account}

1. モバイルデバイスで、個人用メールアドレスに届いた Okta の有効化メールを確認します。
1. メール内のリンクをクリックして、パスワードを設定します
1. パスワードの設定後、ブラウザは Okta Dashboard にリダイレクトされます
1. Okta から、件名が **Security Method enrolled** のフォローアップメールが届きます

### Linux ステップ 2: Okta のセットアップ {#linux-step-2-okta-setup}

> **重要**: Linux の Web ブラウザは Dell ラップトップの指紋リーダーにアクセスできません。Okta のパスキーを保存するには、YubiKey または携帯電話のいずれかを使用する必要があります。<br>
ラップトップと一緒に YubiKey は届きませんが、[こちら](/handbook/security/corporate/systems/yubikey/purchasing/)の手順に従ってリクエストできます。<br>

<ol>
  <li>Linux ラップトップで、[Google Chrome をダウンロードしてインストールします](https://support.google.com/chrome/a/answer/9025903?hl=en)</li>
    <ol type="a">
      <li><code>wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb</code></li>
      <li><code>sudo dpkg -i google-chrome-stable_current_amd64.deb</code></li>
      <li><code> sudo apt --fix-broken install</code></li>
    </ol>
  </li>
  <li>Google Chrome を開き、https://gitlab.okta.com に移動します</li>
  <li>セキュリティ認証を完了します:
    <ol type="a">
      <li><b>Verify it's you with a security method</b>をクリックします</li>
      <li><b>Password</b>を選択し、<b>Verify</b>をクリックします</li>
   </ol>
  </li>
  <li>追加のセキュリティ方式をセットアップします:
    <ol type="a">
      <li><b>Set up Security methods</b> 画面で、<b>Security Key or Biometric authenticator</b> の <b>Set up</b>をクリックします</li>
      <li>確認のため、もう一度 <b>Set up</b>をクリックします</li>
      <li><b>Passkeys & Security Keys</b> ポップアップには、2 つの選択肢があります:</li>
        <ol>
          <li><b>Use your phone or tablet</b>: 携帯電話のカメラアプリで QR コードをスキャンし、パスキーを Password アプリ（iOS）または Google アカウント（Android）に保存します</li>
          <li><b>Use your security key</b>: YubiKey をラップトップに挿入し、キーの認証ボタンを押します</li>
        </ol>
   </ol>
  </li>
</ol>

### Linux ステップ 3: Google アカウントのセットアップ {#linux-step-3-google-account-setup}

1. Google Chrome を開きます
1. **Sign in to Chrome** ウィンドウで、**Sign in** をクリックします
1. GitLab メールアドレスを入力します
1. ユーザー名とパスワードで Okta にサインインします
1. 表示される Google Workspace ポリシーで、**Agree** をクリックします
1. **Verify it's you** 画面で、**Continue** をクリックします
1. **Enhanced Ad Privacy in Chrome** の通知で、**Got it** をクリックします
1. **Your organization will manage this profile** と表示されたら、**Continue** をクリックします
1. **Turn on Sync** ウィンドウで、**Yes, I'm in** をクリックします

### Linux ステップ 4: GitLab メールと GitLab.com アカウントにアクセスする {#linux-step-4-access-gitlab-email--gitlabcom-account}

1. GitLab メールで、件名が "**Welcome to GitLab Onboarding, `yourname`!**" のメールを確認します
1. メールの手順に従って GitLab.com アカウントをセットアップし、Onboarding Issue にアクセスします

### おめでとうございます

GitLab アカウントとラップトップの初期セットアッププロセスが完了しました。問題が発生した場合は、Slack の Compass アプリ（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com へメールで IT にお問い合わせください。

### 次のステップ

オンボーディングの Day 2 に従ってモバイルデバイスで会社のアプリケーションへアクセスするには、[モバイルデバイスのオンボーディング](/handbook/eta/corporate-it/end-user-services/onboarding101/onboarding-mobile-devices)ガイドに従ってください。

## お困りですか？

ラップトップのセットアップについてさらにサポートが必要な場合は、毎週火曜日に予定されているオンボーディングコールに参加するか（Calendar を確認してください！）、Slack の Compass アプリ（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com へメールでお問い合わせください。
