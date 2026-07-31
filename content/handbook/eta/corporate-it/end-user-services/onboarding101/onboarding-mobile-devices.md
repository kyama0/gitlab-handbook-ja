---
title: "GitLab IT - モバイルデバイスのオンボーディング"
upstream_path: /handbook/eta/corporate-it/end-user-services/onboarding101/onboarding-mobile-devices/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:14:51+09:00"
translator: codex
stale: false
---

モバイルデバイスで、Okta の背後にあるアプリケーション（例: Slack、GMail、Calendar など）にアクセスするには、デバイスを Okta Verify に登録し、パスキーをデバイスに保存する必要があります。

## 目次

1. [モバイルパスキーと YubiKey のセットアップ](#mobile-passkey-and-yubikey-setup)
1. [Okta Verify](#okta-verify)

### モバイルパスキーと YubiKey のセットアップ {#mobile-passkey-and-yubikey-setup}

> モバイルデバイスにパスキーを追加しても、GitLab がスマートフォン上のデータへアクセスできるようにはなりません。詳細は https://support.okta.com/help/s/article/Passkey-Management を参照してください
> 以下の手順は iOS と Android の両方のデバイスに適用されます

<ol>
  <li>ラップトップで Chrome を開き、<a href="https://gitlab.okta.com/enduser/settings"> Okta Settings</a> に移動します</li>
  <li><b>Security Key or Biometric Authenticator</b> の横にある <b>Set up another</b> をクリックします</li>
  <li>希望する方法（例: Touch ID、1Password など）で本人確認を行います</li>
  <li><b>Set up</b> をクリックし、続いて <b>set up</b> をクリックします
    <ol type="a">
      <li>1Password の <b>Save Passkey</b> ポップアップが表示された場合は、<b>x</b> をクリックします</li>
      <li><b>Use Touch ID to sign in?</b> ポップアップが表示された場合は、<b>Cancel</b> をクリックします</li>
    </ol>
  </li>
  <li><b>gitlab.okta.com のパスキーを保存する場所を選択</b>するよう求められたら、<b>スマートフォン、タブレット、またはセキュリティキーを使用</b>を選択します。画面に QR コードが表示されます
    <ol type="a">
      <li><b>YubiKey</b>: YubiKey を挿入してボタンを押します</li>
      <li><b>iOS</b>:
        <ol type="i">
          <li><a href="https://support.apple.com/en-gb/guide/iphone/iph3e504502/ios">iOS が最新であることを確認します</a></li>
          <li><b>Password</b> アプリが<a href="https://support.apple.com/en-gb/guide/iphone/iphf538ea8d0/ios">システム設定でインストールおよび有効化</a>されていることを確認します</li>
            <li><b>Settings</b> > <b>General</b> > <b>AutoFill & Passwords</b> > <b>Set Up Codes In</b> が <b>Passwords</b> アプリを使用することを確認します。</li>
          <li>カメラアプリを開き、QR コードをスキャンします</li>
          <li>パスキーの保存を選択し、スマートフォンの手順に従ってパスキーを保存します</li>
        </ol>
      </li>
      <li><b>Android</b>:
        <ol type="i">
          <li><a href="https://support.google.com/android/answer/7680439?">Android が最新であることを確認します</a></li>
          <li>デバイスに応じて、<b>Camera</b> アプリまたは <b>Google Lens</b> を開きます</li>
          <li>QR コードをスキャンし、Google アカウントにパスキーを保存するオプションを選択します</li>
          <li>Samsung デバイスでは、<b>次回は QR コードをスキップ<b>するよう求められたら、<b>今はしない</b>を選択し、Google アカウントにパスキーを保存します。パスキーは Samsung Passkey ではなく Google のパスキーマネージャーに保存してください。
        </ol>
     </li>
   </ol>
  </li>
</ol>

### Okta Verify {#okta-verify}

> これらの手順は Apple および Android デバイスに適用されます

<ol>
  <li>App Store（Apple）／Play Store（Android）から Okta Verify アプリをダウンロードします</li>
  <li>ラップトップで、画面上部のバッテリーインジケーター付近にある <br>Okta Verify</b> アイコンをクリックし、<b>Open Okta Verify</b> を選択します</li>
  <li>名前とメールアドレスで示されるアカウントをクリックします</li>
  <li><b>Export account</b> をクリックします</li>
  <li>Touch ID で本人確認を行い、求められた場合は Bluetooth を有効にします
    <ol type="a">
      <li>画面に QR コードが表示されます</li>
    </ol>
  </li>
  <li>モバイルデバイスで Bluetooth が有効になっており、デバイスがラップトップと同じ Wi-Fi ネットワーク上にあることを確認します</li>
  <li>モバイルデバイスで Okta Verify アプリを開きます
    <ol type="a">
      <li>アプリを初めて使用する場合は、<b>Add account from another device</b> を選択します</li>
      <li>以前にアプリを使用したことがある場合は、画面上部付近の <b>+</b> ボタンを押します</li>
    </ol>
  </li>
  <li><b>Choose account type</b> 画面で、<b>Organization</b> を選択します</li>
  <li><b>Import Account</b>、続いて <b>Scan QR code</b> を選択します</li>
  <li>ラップトップ画面の QR コードをスキャンします</li>
  <li>ラップトップで、スマートフォン画面に表示される 6 桁の PIN を入力します</li>
  <li>モバイルデバイスで、求められたら生体認証を有効にします</li>
  <li><a href="https://gitlab.okta.com/enduser/settings">Okta Settings</a>に移動し、スマートフォンが <b>Okta Verify</b> の下に表示されていることを確認すると、スマートフォンが正常に登録されたことを検証できます</li>
</ol>

### Okta Verify - 手動セットアップ

> モバイルアプリがラップトップアプリへの接続に失敗した場合、またはラップトップアプリが利用できない場合は、これらの手順を使用します

<ol>
 <li>スマートフォンに<a href="#mobile-passkey-and-yubikey-setup">Okta パスキーが保存されている</a>ことを確認します</li>
  <li>App Store（Apple）／Play Store（Android）から Okta Verify アプリをダウンロードします</li>
  <li>モバイルデバイスで Okta Verify アプリを開きます
    <ol type="a">
      <li>アプリを初めて使用する場合は、<b>Get started</b> を選択し、<b>Choose account type</b> 画面に到達するまで続行します</li>
      <li>以前にアプリを使用したことがある場合は、画面上部付近の <b>+</b> ボタンを押します</li>
    </ol>
  </li>
  <li><b>Choose account type</b> 画面で、<b>Organization</b>、次に <b>Skip</b> を選択します</li>
  <li><b>No, Sign in Instead</b> を選択します</li>
  <li><b>Organization's sign-in URL</b> に <b>gitlab.okta.com</b> を入力します</li>
  <li><b>Okta Username</b> と <b>Password</b> を入力してサインインします</li>
  <li>画面上の利用規約に同意し、Touch ID を有効にします</li>
</ol>

## サポートが必要ですか？

ラップトップのセットアップにさらに支援が必要な場合は、毎週火曜日に予定されているオンボーディングコール（Calendar を確認してください！）に参加するか、Slack の Compass アプリ（上部の検索バーに "Compass" と入力して見つけます）または it-help@gitlab.com からお問い合わせください。
