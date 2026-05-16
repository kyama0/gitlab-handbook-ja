---
title: "Yubikey WebAuthn 2FA ユーザーガイド"
description: "YubiKey は WebAuthn プロトコルを使用した二要素認証 (2FA) に使用します。YubiKey は他にも複数のプロトコル (OTP、U2F など) をサポートしていますが、GitLab では使用しません。このガイドでは、WebAuthn 用に YubiKey を使い始める方法を説明します。"
upstream_path: /handbook/security/corporate/systems/yubikey/2fa/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-09T20:42:10+00:00"
---

## オンボーディングガイド

二要素認証 (2FA) に使用する YubiKey を受け取られたみなさん、おめでとうございます。Touch ID の使用に慣れているなら、YubiKey もほぼ同じように動作します。ただし指紋を登録する必要はありません。

詳しくは[仕組み](#how-it-works)をご覧ください。

> 各キーについて以下のステップを繰り返してください。各アプリケーションで 2FA を設定する際、両方のキーを挿した状態で並行してステップを実行できます。

1. ラップトップ、モニター、またはドッキングステーションの利用可能な USB ポートに YubiKey を挿入します。

2. テキストエディタや空のブラウザウィンドウを開き、YubiKey の金色の接点をタップします。[文字列が入力される](#webauthn-authentication)のが見えるはずです。`cccccbchbneclfhiefkkdgfkiuvukginvnhlefdcbuuc`。あなたの YubiKey は動作しています！

3. 各アプリケーションのガイドに従って、2FA 認証器として YubiKey を設定します。複数のアカウントがある場合は、各アカウントについてステップを繰り返します。

    - [Okta ガイド](/handbook/security/corporate/end-user-services/onboarding101/#macbook-step-5-okta-account-verification)
    - [Google ガイド](/handbook/security/guides/yubikey/2fa/google)
    - [GitLab ガイド](/handbook/security/guides/yubikey/2fa/gitlab)

4. これで完了です！

## 日々の利用

### 2FA で YubiKey を使用する

今後、設定済みアプリケーションへのサインインを求められる際、QR コードが表示されたり、パスキーや Touch ID の使用を求められることがあります。Passkey や Touch ID と表示されていても、YubiKey をタッチすれば動作します。キーをタッチするか、プロンプト内の USB サムドライブのアイコンをクリックしてからキーをタッチするだけです。

<img src="/images/security/corporate/systems/yubikey/yubikey-touchid.png" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

### 新しいアプリケーションの追加

今後 2FA を有効化するよう求められた際は、QR コードが表示されたら、Touch ID を有効化する際、またはパスキーを追加する際にキーをタップするだけです。

そのアプリケーションで YubiKey が動作しない場合は、Touch ID の使用を試し、それからフォールバックとして 1Password で QR コードをスキャンし、適切なレコードに 1Password のボルト内へワンタイムパスワード (OTP) を保存してください。

<img src="/images/security/corporate/systems/yubikey/yubikey-passkey-1password.png" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

<img src="/images/security/corporate/systems/yubikey/yubikey-passkey-step1.png" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

<img src="/images/security/corporate/systems/yubikey/yubikey-passkey-step2.png" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

### モバイルデバイスでの YubiKey の使用

NFC キーを設定済みの場合は、FaceID や生体認証を使用しない承認済みのモバイルアプリケーションに YubiKey でサインインする手順について、[Android](android/) と [iOS](ios/) のガイドを参照してください。

### YubiKey を挿したままにするか取り外すか

よく寄せられる質問として、YubiKey を常に挿したままにすべきかというものがあります。

これは個人の好みであり、ご自身の判断で使用できます。

#### Nano キーは挿したままにする

YubiKey を初めて使用する方で Touch ID に慣れている場合は、Nano キーを使用して挿したままにしておくことを推奨します。在宅勤務の場合は挿したままにしておけます。コーヒーショップ（リスクの低い場所）に行く場合でも問題ありません。

長期出張、休暇、空港に向かうときなどは、YubiKey を取り外してラップトップとは別の場所に保管してください。

Nano キーは小さく、紛失しやすいです。Nano キーをお持ちなら、挿したままにするか、安全な場所に保管することを推奨します。決まった保管場所がないままポケットやラップトップバッグに入れないでください。ライフハックとして、USB-C ポート付きのワイヤレスヘッドホンを持っている場合、移動時の保管としてその底部に挿しておくことができます。

#### NFC キーでの分離

エンジニアリングやセキュリティ意識の高い人々の多くは（例: キーリングに付けた NFC キーを使用するなど）分離させることを好みますが、（例: モニターやドッキングステーションに挿したまま）常に挿したままにする人もいます。

NFC キーはラップトップを移動する際に折れやすいので、ラップトップを持ち上げて別の席に移動する前には必ずキーを抜いてください。

（サムドライブのように）「切断／取り出し」をすることなく、いつでも抜き挿しできます。

## 仕組み {#how-it-works}

各 YubiKey は内部に回路基板を持つ黒いプラスチック片で、金色の接点（露出した金属の薄片）を持っています。USB-A または USB-C のプラグがあり、ラップトップ、モニターの側面、ドッキングステーションに挿入します。

*どの*ポートにも挿入できます。電源コード、モニターケーブル、ドッキングステーションのケーブルとして普段使わないポートを選ぶことを推奨します。

<img src="/images/security/corporate/systems/yubikey/yubikey-models.jpg" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

<img src="/images/security/corporate/systems/yubikey/yubikey-nano-port.jpg" alt="YubiKey Nano Port" style="border: 1px #888 solid; padding: 3px;" /><br />

<img src="/images/security/corporate/systems/yubikey/yubikey-nfc-port.jpg" alt="YubiKey NFC Port" style="border: 1px #888 solid; padding: 3px;" /><br />

### WebAuthn 認証 {#webauthn-authentication}

パスキー／2FA／Touch ID が求められたとき、（TouchID センサーの指紋リーダーをタッチするのと同様に）金色の接点に一瞬指を置くだけで、YubiKey が自身を起動し、コンピューターおよびサーバー側の 2FA 技術 (FIDO2/WebAuthn) によって認識される暗号化レスポンスを送信します。

もっとシンプルな説明でしょうか？単純化したアナロジーは、SSH（または Git）経由で認証する際に使用される SSH キーの公開鍵と秘密鍵のペアと概念的に似ているということです。

<img src="/images/security/corporate/systems/yubikey/yubikey-nano-touch.jpg" alt="YubiKey Nano Port" style="border: 1px #888 solid; padding: 3px;" /><br />

<img src="/images/security/corporate/systems/yubikey/yubikey-nfc-touch.jpg" alt="YubiKey NFC Port" style="border: 1px #888 solid; padding: 3px;" /><br />

### その他の認証方式

YubiKey は、FIDO2/WebAuthn（ハードウェアバインドのパスキー）、FIDO U2F、Yubico OTP、OATH-TOTP、OATH-HOTP、スマートカード (PIV)、OpenPGP など、幅広い認証方式をサポートしています。

**GitLab では FIDO2/WebAuthn のみを使用しています。** これは **YubiKey ソフトウェアをインストールせずに** ラップトップ上でネイティブに動作します。USB ポートにキーを挿し、任意の Web サイトで 2FA やパスキーをセットアップする際に金色の接点にタッチするだけです。

IT の観点では、Web アプリケーションで認証する際、ユーザーが（箱から出した状態の）YubiKey を挿し、Touch ID の代わりに（FIDO2/WebAuthn を使用するために）キーにタッチすることだけを期待しています。それ以外の使い方は、チーム（例: サイトリライアビリティエンジニア）のオンボーディング指示に含まれている場合を除き、各エンジニアの裁量に任されています。

裁量で使用する上級パワーユーザー向け（IT が必須化やサポートをするものではない）には、[YubiKey Manager](https://www.yubico.com/support/download/yubikey-manager/) のインストール、YubiKey へのオプションでの PIN コード設定、SSH や GPG キー保管への YubiKey の使用、スロット 1（短押し）とスロット 2（長押し）の設定なども歓迎です。

GitLab では Yubikey OTP は使用していないため、生成された文字列が再利用される可能性があるため Yubikey OTP は無効化することを推奨します。WebAuthn/FIDO2 ダイアログ外で Yubikey を短くタッチすると、ユニークな文字列が送信されます。誤ってこのボタンを押してしまった場合は、その文字列を [Yubico OTP テスター](https://demo.yubico.com/otp/verify) で実行してください。これらの OTP 文字列は有効期限がなく、検証サーバーで使用されるまで有効なままです。

文字列の例:

`cccccbchbneclfhiefkkdgfkiuvukginvnhlefdcbuuc`

### プライマリキーとセカンダリキー

YubiKey は車のキーに似ています。車のキーをなくすと車のエンジンを始動できません。セカンダリ／バックアップの車のキーがあれば、それでも約束の時間に間に合うように到着できます。

YubiKey をなくすと、Web アプリケーションへのサインインを可能にする車のキーをなくすようなものです。2 本目の YubiKey があれば、両方のキーが 2FA 認証器として登録されており、セカンダリ／バックアップを使用することは時々しかなくても、まだサインインできるという保証になります。リモート企業として、廊下を歩いて IT ヘルプデスクから新しいキーを受け取りに行くことはできず、翌日配送で YubiKey を発送することも物流的に現実的ではありません。

IT がリセットして再登録できるソフトウェア認証器とは異なり、YubiKey 認証を使用するシステムへのアクセスは、私たちのセキュリティ姿勢を低下させるバイパス 2FA ポリシーにあなたを追加しない限り、私たちでもサインインさせることができません。必要な場合は対応しますし、全員にセカンダリ／バックアップキーを配り終えるまでの YubiKey の初期展開期間中も対応しています。
