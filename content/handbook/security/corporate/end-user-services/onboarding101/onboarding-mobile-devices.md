---
title: "GitLab IT - モバイルデバイスオンボーディング"
upstream_path: "/handbook/security/corporate/end-user-services/onboarding101/onboarding-mobile-devices/"
upstream_sha: 82fbf0e2626c904de9d6bd562ea4359a0c7e8ab2
lastmod: "2026-07-08T11:09:01-04:00"
translated_at: "2026-07-09T10:30:13+09:00"
translator: claude
stale: false
---

モバイルデバイス上で Okta の背後にあるアプリケーション（例: Slack、GMail、カレンダーなど）にアクセスできるようにするには、デバイスを Okta Verify に登録し、パスキーをデバイスに保存する必要があります。

## 目次

1. [モバイルパスキーと YubiKey のセットアップ](#mobile-passkey-and-yubikey-setup)
1. [Okta Verify](#okta-verify)

### モバイルパスキーと Yubikey のセットアップ {#mobile-passkey-and-yubikey-setup}

> モバイルデバイスにパスキーを追加しても、GitLab は携帯電話上のデータにアクセスできるようにはなりません。詳細については https://support.okta.com/help/s/article/Passkey-Management を参照してください。
> 以下の手順は iOS と Android 両方のデバイスに適用されます

<ol>
  <li>ノートパソコンで Chrome を開き、<a href="https://gitlab.okta.com/enduser/settings"> Okta 設定</a>に移動します</li>
  <li><b>Security Key or Biometric Authenticator</b> の隣にある <b>Set up another</b> をクリックします</li>
  <li>お好みの方法（例: Touch ID、1Password など）で本人確認を行います</li>
  <li><b>Set up</b> をクリックし、続けて <b>set up</b> をクリックします
    <ol type="a">
      <li>1Password の <b>Save Passkey</b> ポップアップが表示された場合は <b>x</b> をクリックします</li>
      <li><b>Use Touch ID to sign in?</b> ポップアップが表示された場合は <b>Cancel</b> をクリックします</li>
    </ol>
  </li>
  <li><b>choose where to save your passkey for gitlab.okta.com</b> と尋ねられたら、<b>Use a phone, tablet or security key</b> を選択します - 画面に QR コードが表示されるはずです
    <ol type="a">
      <li><b>YubiKey</b>: YubiKey を挿入してボタンを押します</li>
      <li><b>iOS</b>:
        <ol type="i">
          <li><a href="https://support.apple.com/en-gb/guide/iphone/iph3e504502/ios">iOS が最新であることを確認します</a></li>
          <li><b>Password</b> アプリが<a href="https://support.apple.com/en-gb/guide/iphone/iphf538ea8d0/ios">インストールされ、システム設定で有効化されている</a>ことを確認します</li>
            <li><b>設定</b> > <b>一般</b> > <b>自動入力とパスワード</b> に移動し、<b>Set Up Codes In</b> が <b>Passwords</b> アプリを使用していることを確認します</li>
          <li>カメラアプリを開き、QR コードをスキャンします</li>
          <li>パスキーを保存することを選択し、画面の手順に従ってパスキーを保存します</li>
        </ol>
      </li>
      <li><b>Android</b>:
        <ol type="i">
          <li><a href="https://support.google.com/android/answer/7680439?">Android が最新であることを確認します</a></li>
          <li>デバイスに応じて <b>カメラ</b> アプリまたは <b>Google レンズ</b> を開きます</li>
          <li>QR コードをスキャンし、Google アカウントにパスキーを保存するオプションを選択します</li>
          <li>Samsung デバイスでは、<b>Skip the QR code next time<b> というメッセージが表示されたら <b>not now</b> を選択し、Google アカウントへのパスキー保存に進みます。Samsung Passkey ではなく、Google のパスキーマネージャーにパスキーを保存していることを必ず確認してください。
        </ol>
     </li>
   </ol>
  </li>
</ol>

### Okta Verify {#okta-verify}

> これらの手順は Apple と Android のデバイスに適用されます

<ol>
  <li>App Store（Apple）/ Play Store（Android）から Okta Verify アプリをダウンロードします</li>
  <li>ノートパソコンで、画面上部のバッテリーインジケーター付近にある <br>Okta Verify</b> アイコンをクリックし、<b>Open Okta Verify</b> を選択します</li>
  <li>名前とメールアドレスで示されているご自身のアカウントをクリックします</li>
  <li><b>Export account</b> をクリックします</li>
  <li>Touch ID で本人確認を行い、プロンプトが表示されたら Bluetooth を有効にします
    <ol type="a">
      <li>画面に QR コードが表示されるはずです</li>
    </ol>
  </li>
  <li>モバイルデバイスで Bluetooth が有効であり、ノートパソコンと同じ Wi-Fi ネットワークに接続されていることを確認します</li>
  <li>モバイルデバイスで Okta Verify アプリを開きます
    <ol type="a">
      <li>初めてアプリを使用する場合は <b>Add account from another device</b> を選択します</li>
      <li>以前にアプリを使用したことがある場合は、画面上部付近の <b>+</b> ボタンを押します</li>
    </ol>
  </li>
  <li><b>Choose account type</b> 画面で <b>Organization</b> を選択します</li>
  <li><b>Import Account</b> を選択し、続けて <b>Scan QR code</b> を選択します</li>
  <li>ノートパソコンの画面の QR コードをスキャンします</li>
  <li>ノートパソコンで、携帯電話の画面に表示された 6 桁の PIN を入力します</li>
  <li>モバイルデバイスで、プロンプトが表示されたら生体認証を有効にします</li>
  <li><a href="https://gitlab.okta.com/enduser/settings">Okta 設定</a>に移動し、ご自身の携帯電話が <b>Okta Verify</b> の下にリストされていることを確認することで、携帯電話が正常に登録されたことを確認できます</li>
</ol>

### Okta Verify - 手動セットアップ

> モバイルアプリがノートパソコンのアプリに接続できない場合や、ノートパソコンのアプリが利用できない場合は、これらの手順を使用してください

<ol>
 <li>携帯電話に <a href="#mobile-passkey-and-yubikey-setup">Okta パスキーが保存されている</a>ことを確認します</li>
  <li>App Store（Apple）/ Play Store（Android）から Okta Verify アプリをダウンロードします</li>
  <li>モバイルデバイスで Okta Verify アプリを開きます
    <ol type="a">
      <li>初めてアプリを使用する場合は <b>Get started</b> を選択し、<b>Choose account type</b> 画面に到達するまで進みます</li>
      <li>以前にアプリを使用したことがある場合は、画面上部付近の <b>+</b> ボタンを押します</li>
    </ol>
  </li>
  <li><b>Choose account type</b> 画面で <b>Organization</b> を選択し、続けて <b>Skip</b> を選択します</li>
  <li><b>No, Sign in Instead</b> を選択します</li>
  <li><b>Organization's sign-in URL</b> には <b>gitlab.okta.com</b> を入力します</li>
  <li><b>Okta ユーザー名</b>と<b>パスワード</b>を入力してサインインします</li>
  <li>画面の利用規約に同意し、Touch ID を有効にします</li>
</ol>

## ヘルプが必要な場合

ノートパソコンのセットアップでさらなるサポートが必要な場合は、毎週火曜日に予定されているオンボーディングコールに参加するか（カレンダーをご確認ください！）、Slack の Compass app（上部検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com からお問い合わせください。
