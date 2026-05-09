---
title: GitLab パスワードガイドライン
upstream_path: /handbook/security/password-guidelines/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---
<!-- markdownlint-disable MD051 -->
## GitLab におけるパスワード

パスワードは、GitLab の情報システムやその他のリソースを不正利用から保護する主要なメカニズムの 1 つです。GitLab の [パスワード基準](/handbook/security/policies_and_standards/password-standard) は、[NIST 800-63B](https://pages.nist.gov/800-63-3/sp800-63b.html) の推奨事項を参考に作られています。
パスワード基準は、安全なパスワードを構築し、適切なパスワード管理を確保するための要件を定めています。GitLab はパスワード管理に 1Password を活用しています。

## 1Password

1Password は、スタンドアロンアプリケーション (スタンドアロンライセンスを購入) として、またはホスト型サービス (サブスクリプション) として、2 つの方法で利用できるパスワードマネージャーです。GitLab はホスト型サービスである 1Password for Business を使用しています。

**重要:** GitLab の vault に保存された個人のパスワードは、GitLab を退職すると利用できなくなります。個人のパスワードを保存するには、ビジネスアカウントに付属する無料の 1Password Families メンバーシップサブスクリプションを利用してください。このアカウントは、GitLab で働かなくなった場合でもあなたのもとに残ります。
無料サブスクリプションを引き換える方法の詳細については、[こちらの記事](https://support.1password.com/link-family/) の手順に従ってください。

理想的には、強力なパスワード 1 つを記憶し (それゆえこの名前です)、ログインのある各サイトに対して 1Password に強力でユニークなパスワードを生成・管理させます。

GitLab は、すべてのチームメンバーに対して、SaaS およびその他の企業アプリケーションへの主要な入口およびアクセスポイントとして [Okta](/handbook/security/corporate/end-user-services/okta/) を使用することを義務付け、パスワード管理には 1Password を活用することを求めています。GitLab は多くのアプリケーションで SAML/SSO とパスワードレス認証に Okta を活用しているため、パスワードマネージャーにパスワードを保存する必要は時間とともに減っていきます。

GitLab での業務に関係のない個人のパスワードに 1Password を使用したい場合、[いくつかのオプションがあります](/handbook/security/corporate/systems/1password/setup/)。

1Password for Business のライセンス契約には [1Password for Families の機能](https://support.1password.com/link-family/) が含まれており、最大 5 人の家族と共有できます。

Okta のパスワードや、Okta に保存しないその他のパスワードについては、[1Password](https://1password.com/) をパスワードマネージャーとして使用し、**強力でユニークな** マスターパスワードを設定してください。

- マスターパスワードは秘密にしてください。管理者を含め、他のチームメンバーは
  これを知るべきではありません。マスターパスワードが他人に知られたり
  漏洩した場合は、直ちに変更してください。
- マスターパスワードを忘れた場合は #it_help にメッセージを投稿してください。
- 生成されたマスターパスワードの使用を検討してください。人間が作成したパスワードのほとんどは
  推測しやすいものです。1Password に強力なマスターパスワードを作成させてください。ただし、このマスターパスワードは
  *記憶する必要があります*。
- パスワードマネージャーに **マスターパスワード** を保存させないでください。ユーザー名は
  保存しても問題ありません。
- 詳細は、[1Password の Getting Started ガイド](https://support.1password.com/explore/team-member/) を参照し、
  サインアップ手順をガイドする [このビデオ](https://youtu.be/2cFWk0sBgyM) を視聴してください。
- アカウント管理者は、[1Password の管理者ガイド](https://support.1password.com/explore/teams-admin/) を確認してください。

### 用語

このガイドに沿って進めるにあたり、ここで使用されるいくつかの用語を理解しておくと役立ちます。

- **App:** ネイティブの 1Password アプリケーション (macOS、iOS、Windows、Android)。
- **Extension:** **App** と通信し、ブラウザを離れることなく
  安全にパスワードへのアクセスを提供する Web ブラウザの拡張機能/プラグイン。
- **Vault:** ログインやセキュアノートなど、安全なデータのグルーピングを 1Password が呼ぶ名称。
  「キーチェーン」と呼ばれることもあります。

### 1Password ガイドライン

1. macOS アプリケーションをインストールする場合は、このリンクから 1Password をインストールしてください
[1Password](https://1password.com/downloads/mac)
1. YubiKey をお持ちの場合、利便性のために 1Password アカウントの 2 要素認証
方法として追加できます。
1. 旅行する際は、1Password を「トラベルモード」で使用することを検討してください。詳細は [下](#travel-mode) を参照してください。
1. 認証情報をメール、Issue コメント、チャットなどで共有しないでください。これにはログイン用の
   メールアドレスや API キーも含まれます。これらには 1Password の vault を使用し、ワンオフのパスワードを共有する場合は、組み込みの「Share」機能を使用してください。
1. vault へのアクセス権がない場合は、
  [アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) を作成してください。
1. Watchtower を使用して変更が必要なパスワードを見つけてください。Watchtower は
1Password Teams に保存されたウェブサイトでのパスワード漏洩やその他のセキュリティ問題を
ユーザーに通知し、ユーザーが対応できるようにします。これはアカウント管理者がチームメンバーのために
レビューできるものではないため、有効化はあなた次第です!
1Password アプリで **Preferences > Watchtower** に移動して Watchtower を有効化してください。
1. 1Password の「Security Audit」機能を使用して、[パスワード基準](/handbook/security/policies_and_standards/password-standard) を満たしてください。
これは、再利用されたパスワード、弱いパスワード、2 要素認証が欠けているアカウントなどを報告するので、
それらを修正できます。
1. 1Password の vault 内のパスワードを個人のパスワード
vault や他のパスワードストアにコピーしないでください。チームでは 1Password を唯一の
パスワード vault として使用するべきです。チームのパスワードは、漏洩のリスクにさらされる可能性のある
個人のパスワード vault に複製したり配置したりしないでください。
1. セキュリティの質問 (お気に入りのペットは何ですか? など) を尋ねられた際は、
それは調査が容易なため、正直に答えないでください。回答を作り上げ、
質問と回答の両方を 1Password に書き留めてください。これには 1Password のパスワードジェネレーター機能の使用を
検討してください。
1. オフボーディング中に、あなたの 1Password アカウントは削除されます。これには
GitLab チームアカウントの **Employee** vault も含まれます。個人のパスワードを保持したい場合は、
GitLab チームアカウントに加入する前に [個人アカウント](#1password-for-your-private-passwords) にサインアップしていれば持っている **Primary** vault に
パスワードをコピー/移動してください。
1. **非推奨** ハンドブックで共有認証情報の場所を文書化する際は、 NAME_OF_SITE credentials in VAULT_NAME のように項目を参照してください。例:
   "アクセスについては Luddite vault の AOL credentials を参照してください"。
   - 非推奨注記: これは既存のアカウントのみに適用されます。新しいアカウントは、
     [Issue を作成](https://gitlab.com/gitlab-com/business-ops/change-management/issues/new?issuable_template=change_management_okta) して
     Okta に追加する必要があります。

### 1Password for Teams

1Password for Teams はすべての **Vault** を 1Password サーバーに保存し、
同じチームの複数の人の間での共有を可能にします。共有 vault へのアクセスが必要な GitLab チームメンバーは、共有 vault の情報について自分の部門に相談する必要があります。

チームの各メンバーは **Employee** という vault を持ち、これは *自分だけが見ることができ*、*GitLab チームのアカウント内で* 個人の認証情報を保存できます。

1Password の利点を最大限に活かすには、Business アカウントをネイティブアプリの 1 つに接続する必要があります。

#### 1Password アプリへの GitLab チームの追加

このガイドでは [macOS アプリ](https://1password.com/downloads/mac) のセットアップを説明します。これは彼らのリードプラットフォームであり
最も最新です。これらの手順は Windows
バージョンでも動作するかもしれませんし、しないかもしれません。1Password.com アカウントなしで 1Password 6 を使用している場合は、
[こちら](/handbook/security/corporate/systems/1password/setup/) に注意してください。

1. 1Password [macOS アプリ](https://1password.com/downloads/mac) をダウンロードしてインストールします。
1. アプリを起動します。
1. 「Sign in to your 1Password account」ボタンをクリックします。そのようなボタンがない場合は、
[1Password の更新](/handbook/security/corporate/systems/1password/setup/) の手順に従ってください。

ここで、**Business** アカウントを登録した際に 1Password が保存するように指示した **Emergency Kit** PDF が必要になります。注: Emergency Kit は安全に保管してください。
Emergency Kit のコピーを USB フラッシュドライブに保存するか、印刷したコピーを
自宅の金庫または貸金庫に保管してください。オンラインではなく、自分以外の誰もアクセスできないところに保管してください。

PDF ファイルとしてデジタルで保存した場合:

1. PDF ファイルを開きます
1. **Scan QR Code** をクリックします
1. カメラアイコンをクリックしてスキャナーで PDF ファイルを開きます

<div style="text-align:center;">
  <img src="/images/security/1password-setup-open-file-dialog.png" alt="カメラアイコンをクリックしてスキャナーで PDF ファイルを開く" width="700"/>
</div>
<br>

PDF を印刷した場合:

1. **Sign In Manually** をクリックします
1. **Team URL** には **gitlab.1password.com** と入力します
1. **Account Key** には Emergency Kit に記載された Account Key を入力します
1. **Email Address** には `@gitlab.com` のメールアドレスを入力します
1. **Master Password** には **Teams** アカウントのパスワードを入力します (上記で「I'm a new user」を選択した際に作成したパスワード *ではありません*)

チームが追加されると、vault が 1Password に追加されたという通知が表示されるはずです。デフォルトでは **Private** vault がありますが、
他のものへのアクセスもあるかもしれません。

#### 共有 vault のエチケット

1. 一般的に、1Password の項目は自己説明的であるべきです。これは、チームメンバーが GitLab チームの一員になった際にアクセスを得たり、ベースラインエンタイトルメント Issue を通じてアクセスを許可されたりするチーム vault の項目について特に重要です。常に `title`、`username`、`notes` フィールドが意味のあるものであることを確認してください。
1. 項目を削除することは問題ありません。なぜなら「最近削除した項目」タブに無期限に保管されるからです。それぞれの vault に残しつつ、項目に関連付けられたシステム上のアカウントを削除することも問題ありません。後者の場合、チームメンバーを混乱させないために、タイトルを編集して (例: `[Deleted on 2024-02-14]`) アカウントの意図的な削除を反映し、誰がなぜ削除したかを notes で簡潔に説明してください。

#### Vault

ウィンドウの左上隅にある **Vault Selector** をクリックします:

<div style="text-align:center;">
  <img src="/images/security/1password-vault-selector.png" alt="Vault Selector" width="700"/>
</div>
<br>

GitLab チームメンバーはデフォルトで **Employee** vault にアクセスできます。これは GitLab 1Password for Teams アカウントの一部である *ホスト型のプライベート* vault です。Employee vault は GitLab Business アカウントの一部であるため、
会社の財産 (@gitlab.com メールアカウントのような) と考えるべきですが、
管理者を含め、チームの他の誰も vault を *閲覧することはできません*。Employee vault に
本当に個人的な情報を保存することを選択した場合、オフボーディングするとその情報から切り離される
可能性があります。そのような本当に個人的な情報は、
[個人アカウント](/handbook/security/corporate/systems/1password/) を追加していると仮定して、
GitLab Teams アカウントではなく自分自身に関連付けられた **Primary** vault に保存する方が良いです。

人々は自分のチーム/部門が作成した共有 vault などの他の vault へのアクセスをリクエストすることがあります。

### ブラウザ拡張機能

[Browser extensions](https://1password.com/downloads/mac#browsers) に移動し、
使用しているブラウザの拡張機能をインストールします。ここではベータ版は *必要ありません*。

拡張機能をインストールすると、1Password に認証情報を保存しているサイトに移動してログインできるはずです:

<div style="text-align:center;">
  <img src="/images/security/1password-login.gif" alt="Mailchimp ログイン" width="450"/>
</div>

結果ウィンドウにサイトが表示されない場合は、
正しい vault を使用していることを確認してください:

<div style="text-align:center;">
  <img src="/images/security/1password-vault-change.gif" alt="Vault の切り替え" width="450"/>
</div>

### ログインの保存

1Password がログインフォームの送信を検出すると、このようなダイアログでログインを保存するかどうか
尋ねることがあります:

<div style="text-align:center;">
  <img src="/images/security/1password-save-login.png" alt="ログインの保存" width="600"/>
</div>

保存したい場合は、まず適切な **Vault** が選択されていることを
確認してください。

### SSH キーの管理

バージョン 8 以降、1Password は SSH キーの単一の信頼できる情報源として動作できます。これには、秘密鍵の生成、安全な保存、GitLab.com のようなサイトへの公開鍵の入力、git 操作実行時のキーの自動アンロックが含まれます。

詳細は [公式ドキュメント](https://developer.1password.com/docs/ssh/) で確認できます。

### CLI 統合

開発中、開発マシンでローカルにテスト用のシークレットを使用する必要がしばしばあります。
これらのシークレットはアクセス範囲が限定されていても、暗号化されていない状態でディスクに書き込むことを避けるのが依然としてベストプラクティスです。
環境変数に手動で読み込んだり、CLI コマンドで直接使用したりすることも、シェル履歴の一部としてディスクに書き込まれるリスクがあります。
より安全なアプローチとして、ローカルシークレットを安全に管理する 1Password の CLI ユーティリティを使用してください。

[1Password CLI 統合](https://developer.1password.com/docs/cli/) は、コマンドラインツール、設定ファイル、ノート PC で実行されるスクリプトで使用されるシークレットの安全な
取り扱いをサポートします。
CLI 統合をセットアップするには、[Getting Started ガイド](https://developer.1password.com/docs/cli/get-started/) に従ってください。

[パーソナルアクセストークン](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) などのシークレットは
1Password に保存することが推奨されます。シークレットを暗号化されていないファイルに保存したり、CLI で直接使用したりすることは
避けてください。多くのシェルはコマンド履歴をディスクに書き込みます。コマンドラインでシークレットがリテラルで使用される場合、
暗号化されていない形式でコマンド履歴に書き込まれます。

1Password CLI で [glab](https://gitlab.com/gitlab-org/cli) を構成する例 (1password バージョン 8 以上が必要):

- アクセストークンを 1Password に保存します。GitLab アカウントのエントリで、新しいセクション `pat`
 を作成し、フィールド `api` を追加します。新しく作成されたフィールド `api` に PAT の値を挿入します。

<div style="text-align:center;">
  <img src="/images/security/1pass-pat-setup.png" alt="ログインの保存" width="600"/>
</div>

- アクセストークンへのシークレット参照を `.env` ファイルに保存します。

環境変数名は等号の前に、1Password 内のシークレットへのパスは等号の後に置きます。
シークレットを一緒に使用する必要がある場合は、ファイルごとに複数の変数とシークレットのペアを保存できます。
パスは、1Password GUI で認証情報を表示し、ドロップダウンメニューをクリックして「Copy Secret Reference」を選択することで取得できます。

```sh
## format is op://vault-name/item-name/[section-name/]field-name
echo "GITLAB_TOKEN=op://Private/GitLab/pat/api" > $HOME/.gitlab-pat.env
```

- シークレットを使用してプロセスを実行します

シークレットを必要とするプロセスを実行する際は、1Password の制御下で実行することで変数が正しく渡されます。
これを行うには、実行したいコマンドの前に `op run --env-file="<path to your env file>" --` を付けて、シークレットを関連する変数に置き換えてください。

例えば、

```shell
glab api version
```

は次のようになります:

```shell
op run --env-file=$HOME/.gitlab-pat.env -- glab api version
```

プロセスが対話型である場合、または動的な出力 (プログレスバーなど) を持つ場合、表示が正しく動作するようにマスキングを無効化する必要があるかもしれません。これは `--no-masking` を追加することで行えます

一般的なタスクで毎回手動で `op run` を追加するのは面倒なので、よりユーザーフレンドリーな構成については
[tools and tips](../tools-and-tips/onepassword-cli.md) セクションをご覧ください。

### 複数のアカウントとアプリのアンロック

GitLab チームアカウントと別の個人アカウントの両方を使用する予定がある場合は、
最初に個人アカウントをアプリに追加してください
(Preferences > Accounts)。これにより、個人アカウントのマスターパスワードを使用して
1Password アプリのロックを解除できるようになります。

GitLab に加入する前に 1Password を使用していて、**Migrate To Account** というタイトルのプロンプトを受け取った場合は、**I'll move later** を選択してください。これを行っても問題はなく、vault 間で項目を移動するのは簡単です。

### 個人のパスワード用の 1Password{#1password-private-use}

GitLab での業務に関係しない個人のパスワードにも 1Password を使用することが推奨されています。
これにより、セキュリティ侵害が発生する可能性が低くなります。スタンドアロンライセンスを購入するか、個人サブスクリプションを開始するか、
[無料の 1Password for Families 機能](https://support.1password.com/link-family/) を活用できます。
これは最大 5 人の家族と共有できます。

### 二要素認証と時間ベースのワンタイムパスワード

[GitLab パスワード基準](/handbook/security/policies_and_standards/password-standard) に記載のとおり、すべての GitLab チームメンバーに 2FA の使用が義務付けられています。**2FA が有効化されておらず 30 日以上停滞しているユーザーは、解決されるまでブロック/サスペンドされます。これにより、ユーザーと GitLab の両方のセキュリティ姿勢が改善されます。** 第二要素として SMS テキストを使用するオプションを提供するシステムがある場合、これは強く推奨されません。電話会社のセキュリティは攻撃者によって容易に破られ、電話アカウントを乗っ取られる可能性があります。

Okta は WebAuthn の使用のみをサポートするように構成されています。1Password TOTP は WebAuthn が利用できない場合のみ使用するべきです。

FIDO2/WebAuthn ハードウェアトークンは、Okta、Google Workspace、GitLab インスタンス、その他多くのサイトで安全かつ便利な 2 要素認証方法として使用できます。お持ちでない場合は、[Yubibot](https://internal.gitlab.com/handbook/it/it-self-service/it-guides/yubikey/) 経由でリクエストできます。GitLab の標準は Yubico の YubiKey です。FIDO2/WebAuthn の詳細は [Tools and Tips ページ](/handbook/tools-and-tips/#fido2webauthn-devices) をご覧ください。

例えばソーシャルメディアアカウントなど、複数のチームメンバーで単一のアカウントへの共有アクセスが必要な場合は、Okta の [新しいアプリケーションセットアップ Issue](https://gitlab.com/gitlab-com/business-technology/change-management/issues/new?issuable_template=change_management_okta&_gl=1*hvl1g4*_ga*ODQwNzAxNjM0LjE2NjYwNDc2Njc.*_ga_ENFH3X7M5Y*MTY4Njk0MTkzOC43MDIuMS4xNjg2OTQyMTc4LjAuMC4w) を作成する必要があります。認証情報は Okta 経由で保存・共有されます。

1Password で既存の共有アカウントを見つけた場合は、[Issue を作成](https://gitlab.com/gitlab-com/business-technology/change-management/issues/new?issuable_template=change_management_okta) して Okta に移行してもらいます。

1Password はスマートフォンを使用する必要のない代替ソリューションを提供しています: 1Password の時間ベースのワンタイムパスワード
(TOTP) です。2FA コードはノート PC で実行されている 1Password アプリ内に直接表示されます (注: これは 1Password ブラウザ拡張機能や 1Password Web アプリではセットアップできません)。

保存されたアカウントに TOTP を有効化するには:

1. 1Password アプリを開きます
1. TOTP をセットアップしたい項目に移動します
1. 右下隅の **Edit** をクリックします
1. フィールドタイプのドロップダウン (デフォルトでは「Text field」) をクリックして新しいフィールドを追加します
1. **One-Time Password** を選択します

<div style="text-align:center;">
  <img src="/images/security/1password-otp.png" alt="ワンタイムパスワードフィールドタイプ" width="600"/>
</div>

1. 表示された QR コードアイコンをクリックします

<div style="text-align:center;">
  <img src="/images/security/1password-qrcode.png" alt="1password QR コード" width="600"/>
</div>

1. 透明な窓を使用して QR コードをスキャンします
1. **Save** をクリックします
1. 2FA コードが表示されるはずです

デモビデオ [1password TOTP セットアップ](https://support.1password.com/one-time-passwords/) を参照してください

TOTP の動作について詳しくは [1Password ブログ](https://blog.1password.com/totp-for-1password-users/) を参照してください。

最近の macOS で 1Password Mac アプリの「透明な窓」を使用した QR コードのスキャンが
失敗する場合は、代わりに 1Password iOS アプリの使用を検討してください。
このメカニズムは同じ方法で動作し、Touch ID でログインをサポートします。

どのメカニズムを使うか不明な場合、私たちは 2FA の TOTP として WebAuthn の使用 (可能な場合) を要求しています。

Google Authenticator を TOTP メカニズムとして使用していて新しいモバイルデバイスを取得する際は、この [ガイドライン](https://gizmodo.com/how-to-easily-switch-your-two-factor-security-to-a-new-1821808681) に従ってください。

GitLab 以外のアカウントで TOTP を使用する場合があるかもしれません。質問があり、セキュリティチームと話す必要がある場合は、[セキュリティ](_index.md#-contacting-the-team) に連絡できます

### Passkey

1Password には [Okta](/handbook/security/corporate/end-user-services/okta/) などのサイトで FIDO2/WebAuthn で使用される認証情報である Passkey をサポートする機能が実装されています。この機能により、ユーザー名とパスワードを必要とするサイトへのパスワードレスサインインが可能になります。Passkey は MFA の一種としても機能します。Passkey はアプリに公開鍵を、1Password vault 内に秘密鍵を保存します。

Passkey のセットアップはシンプルです。ウェブサイトやアプリでログインページを開くか、サインインボタンを選択します。通常、生体認証または YubiKey で認証ステップを完了するプロンプトが表示されます。下の画像のようなものが表示されることがあります。

<div style="text-align:center;">
  <img src="/images/security/PasskeyAlert.png" alt="下の画像のようなものが表示されることがあります" width="700"/>
</div>
<br>

その時点で、鍵のペアリングが作成され、1Password はこの方法のサインインを今後使用します。すべてのサイトが現在サポートされているわけではないことに注意してください。使用しているサイトでこれをセットアップすることに興味がある場合は、いつでも 1Password を開き、そのログインタブを選択して、「Passkey Available」通知が表示されているかを確認できます。

<div style="text-align:center;">
  <img src="/images/security/PasskeyAvailable.png" alt="notification is showing. width="700"/>
</div>
<br>

Passkey のセットアップを完了するには、特定のサイトで異なる手順に従う必要があるかもしれません。サイトと 1Password のプロンプトに従えば、1Password 経由で Passkey でログインできるようになります。

#### 使用例 {#1password-example-usage}

これは <a href="https://gitlab.com/rspeicher">Robert</a> という
当社の開発者の 1 人が 1Password を使用する方法の例です:

> セキュリティ情報のすべての管理に 1Password を完全にコミットすると、
> 本当に生活が楽になります。
>
> 強力なパスワードを 1 つ記憶し、アプリに
> 残りすべてを生成させます。使用するすべてのサイトはユニークなパスワードを持ち、
> 私自身それを知らないので妥協のしようがなく、ハッキングされたサイトもパスワードが他のサイトで再利用されていないので
> 妥協できません。
>
> 配送先住所とクレジットカード情報を 1Password に保存し、ブラウザ
> 拡張機能を使用してショッピングサイトで配送・請求情報をすばやく入力します。
>
> パスポートデータを、デジタルスキャンと共に 1Password に保存しています。運転
> 免許証情報とスキャン、保険情報、ソフトウェアライセンスキー、安全である必要があるが
> 必要なときにどこからでも簡単にアクセスできる必要のある重要な情報を保存しています。
> 個人の vault を個人の iCloud に同期しているので、
> 携帯電話、タブレット、ノート PC、デスクトップで利用できます。
>
> 私の 1Password for Teams アカウント情報も個人の
> **Primary** vault に保存され、Emergency Kit PDF が安全な添付ファイルとして付いています。
> 私はパスワードが何かを知りません。実際に入力したことはありません。それがアイデアです:

  <div style="text-align:center;">
    <img src="/images/security/1password-teams-login.png" alt="Teams Login" width="560px"/>
  </div>

### 1Password を持って旅行する{#travel-mode}

GitLab 1Password vault へのアクセス権を持つデバイスで旅行する際は、
1Password で必ず [トラベルモードを有効化](https://support.1password.com/travel-mode/) してください。トラベルモードは
モバイルデバイスから「safe for travel」とタグ付けされていない 1Password vault のコピーを削除します。
GitLab の共有 vault のいずれも safe for travel としてマークされていないため、
専用の travel vault を作成するか、Private vault を safe for travel としてマークする必要があります。

トラベルモードを有効化したら、持参する各デバイスで 1Password を開いて
1Password.com と同期し、旅行中に使用できない vault を削除させてください。

トラベルモードとその仕組みの詳細については、[AgileBits ブログ](https://blog.1password.com/introducing-travel-mode-protect-your-data-when-crossing-borders/) を参照してください。

### Docker レジストリのユーザー認証情報の保護

Docker は、Docker 設定ファイルに認証情報を保存する代わりに、より安全な方法として [外部認証情報ストア](https://docs.docker.com/reference/cli/docker/login/#credential-stores) にユーザー認証情報を保存できます。

#### `osxkeychain` の使用 (macOS)

Docker が `osxkeychain` を安全な認証情報ストレージとして使用するように設定するには、以下の手順に従ってください:

1. Homebrew 経由で `docker-credential-osxkeychain` ヘルパーをインストールします:

    ```sh
    brew install docker-credential-helper
    ```

1. `~/.docker/config.json` を、[Docker の credstore として `osxkeychain` を使用する](https://docs.docker.com/reference/cli/docker/login/#credential-stores) ように設定します:

    ```json
    {
        "credsStore": "osxkeychain"
    }
    ```

1. `docker login registry.gitlab.com` を使用してログインし、プロンプトが表示されたらメールアドレスとパスワード (PAT) を入力します。
1. 認証情報が `~/.docker/config.json` に base64 エンコードされたテキストとして保存されていないことを検証します。

#### `pass` の使用 (Linux)

**前提条件**

1. [GPG 鍵を作成する](https://docs.gitlab.com/ee/user/project/repository/signed_commits/gpg.html#create-a-gpg-key)
1. [`pass` をインストールする](https://www.passwordstore.org/#download)

Docker が `pass` を安全な認証情報ストレージとして使用するように設定するには、以下の手順に従ってください:

1. [リリースページ](https://github.com/docker/docker-credential-helpers/releases) から最新の `docker-credential-pass` バイナリをダウンロードします。
1. `chmod +x docker-credential-pass` で `docker-credential-pass` バイナリを実行可能にします。
1. `docker-credential-pass` バイナリを `$PATH` に移動します (例: `sudo mv docker-credential-pass-v0.8.0.linux-amd64 /usr/local/bin/docker-credential-pass`)。
1. `gpg --list-secret-keys --keyid-format LONG` で `pass` が暗号化に使用する GPG 鍵 ID を取得してコピーします。
1. `pass init <gpg-key-id>` で `pass` を初期化します。
1. `~/.docker/config.json` を、[Docker の credstore として `pass` を使用する](https://docs.docker.com/reference/cli/docker/login/#credential-stores) ように設定します:

    ```json
    {
        "credsStore": "pass"
    }
    ```

1. `docker login registry.gitlab.com` を使用してログインし、プロンプトが表示されたらメールアドレスとパスワード (有効な [トークン](https://docs.gitlab.com/ee/user/packages/container_registry/authenticate_with_container_registry.html)) を入力します。
1. 認証情報が `~/.docker/config.json` に base64 エンコードされたテキストとして保存されていないことを検証します。
