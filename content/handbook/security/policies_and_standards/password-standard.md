---
title: GitLab パスワード標準
toc_hide: true
controlled_document: true
tags:
  - security_standard
  - security_standard_acia
upstream_path: /handbook/security/policies_and_standards/password-standard/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

本書は、技術的に実現可能な範囲において、機密情報（Red および Orange）を含む GitLab の情報システムやその他のリソースを不正利用から保護することを目的とした、情報セキュリティのパスワード標準を定めます。

## 適用範囲

GitLab のコンピューティングリソースに関わり、機密データにアクセスするすべての GitLab チームメンバー、契約社員、アドバイザー、契約当事者に適用されます。

## 役割と責任

| 役割  | 責任 |
|-----------|-----------|
| GitLab チームメンバー | 本標準に記載された要件を遵守する責任を負います |
| Security | クリティカルなアプリケーションについて、本標準の定義および導入状況のモニタリングを行う責任を負います |
| Security Management（コードオーナー） | 本標準への重大な変更および例外を承認する責任を負います |

## 標準

セキュアなパスワードを構築し、適切なパスワード管理を確保することは不可欠です。GitLab のパスワード標準は、[NIST 800-63B](https://pages.nist.gov/800-63-3/sp800-63b.html) の推奨事項を一部参考にしています。本当にセキュアなパスワードとは何かについて学ぶには、こちらの[記事](https://medium.com/peerio/how-to-build-a-billion-dollar-password-3d92568d9277)、またはパスワード強度に関する[カンファレンス発表](https://www.youtube.com/watch?v=vudZnjp5Uq0&t=19183)をご覧ください。

**注: 技術的な制約により、システムが本標準の特定の設定をサポートできない場合は、本標準に最も近い設定を行わなければなりません。例外は[こちら](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-governance)で起票し、リクエスト Issue 内のマトリクスに従って関連するリスク評価と例外レビュー期限が割り当てられます。**

### パスワード要件

- 最小長 = 12 文字
- 特殊文字 = 不要
- パスワードの再利用 = 不可
- パスワードの有効期限 = なし
- 多要素認証（MFA） = 可能な限り使用すること

覚えやすくセキュアなパスワードを作るには、[5 個以上のランダムな単語の組み合わせ](https://medium.com/peerio/how-to-build-a-billion-dollar-password-3d92568d9277#67c2)を使うことを検討してください。「好きな色は何ですか？母親の旧姓は何ですか？」のようなセキュリティ質問は、当てにくいランダムな単語または単語のセットで回答してください。[1Password で回答を生成](/handbook/security/corporate/systems/1password/)し、ノートとして保存できます。これにより回答が容易に推測されず、サイトごとに一意になることが保証されます。

### パスワード管理

- パスワードはプライベートに保ち、安全に保管してください。
- 個人アカウントのパスワードを共有してはなりません。
- パスワードを平文で保存したり、紙に書き留めたりしてはなりません。
- パスワードの「ヒント」を使用してはなりません。パスワードを忘れた場合は、パスワードリセットを要求した者の身元を検証する十分なコントロールを伴う仕組みでパスワード／パスフレーズを置き換えるメカニズムが必要です。
- パスワードはオフライン攻撃に耐性のある方法で保存され、適切な一方向の鍵導出関数を用いてソルト処理およびハッシュ化されなければなりません。
- パスワードを保存する必要がある場合は、承認されたパスワードマネージャーアプリケーション内に保存し、マスターパスワード機能（例: 1Password）を用いて貼り付けることができます。
- アカウントまたはパスワードが侵害されたと疑われる場合は、直ちに Security にインシデントを報告し、速やかに指示に従ってください。

### システムパスワード設定要件

- パスワードを設定可能なシステムでは、最小パスワード長を 12 文字に設定する必要があります。
- 特殊文字の使用は必須ではなく、推奨もされません。
- 特定のシステムでパスワード履歴が必要な場合は、25 個の記憶パスワードに設定してください。
- 既知の漏洩パスワードリスト、辞書ワード、繰り返しまたは連続する文字、サービス名・ユーザー名やその派生といったコンテキスト固有の単語など、よく使われるまたは予測されるパターンと一致するパスワードは許容されず、これらに対してチェックされなければなりません。
- アプリケーションおよび／またはデバイスのシステム管理者は、デフォルトのパスワードを変更しなければなりません。
- システム管理者は、該当する場合、サードパーティアプリケーションおよび／またはツールでパスワード強度設定を有効にする必要があります。
- パスワードのみが認証ソースとなるアプリケーションでは、パスワードは最大 90 暦日以内に有効期限切れにしなければなりません。
- システムはログイン失敗を監視し記録するべきです。
- 認証ログイン失敗に関する情報は、技術的に可能であれば、アプリケーションログ内に記録される必要があります。例えば、名前、日付、失敗回数、一意のログ識別子など。
- 繰り返しのログイン失敗は、10 回失敗後に一時的なアカウントロックアウトをトリガーする必要があります。特定のシステムが 10 回以下のロックアウトをサポートしない場合、そのシステムが許容する最小値にロックアウトを設定する必要があります。ロックアウトは指定期間後に解除されるか、アプリケーションのプロファイルに応じて手動アンロックを必要とする場合があります。
- [二要素認証](https://en.wikipedia.org/wiki/Multi-factor_authentication)（2FA）を強制する必要があります。

#### 二要素認証（MFA または 2FA）

すべての GitLab チームメンバーは [二要素認証](https://www.cisa.gov/resources-tools/resources/multi-factor-authentication-mfa)（2FA）を使用することが必須です。GitLab チームメンバーが本番環境にアクセスするには 2FA の使用が **必須** です。サードパーティ製品や特定のコンプライアンス参照に関連する文言には MFA（多要素認証）への言及が含まれることが多いものの、一般的な概念は「2FA」という用語でも引き続きカバーされます。GitLab チームメンバーが利用できる 2FA の方式にはいくつかあります。これらをセキュリティ強度順にランク付けすると次のとおりです:

- [生体認証](https://aws.amazon.com/what-is/mfa/#:~:text=be%20digitally%20accessed.-,Inherence%20factor,-Inherence%20methods%20use)。生体認証ベースの認証は、認証に「あなた自身の何か」を使用します。例として touch-id（指紋）や face-id（顔認識）があります。これは最も安全な認証方式です。
- [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn)。FIDO2/WebAuthn はハードウェアトークンを使用して認証を行います。ハードウェアトークン自体が物理的に保護されていることを前提に、最も安全な方式の一つです。
- [プッシュ認証](https://en.wikipedia.org/wiki/Authenticator#Mobile_Push)。プッシュ認証が機能するには、認証サービスと補完的なモバイルアプリが通常 RSA 鍵と OOB（アウトオブバンド）通信を使って二次認証を実施します。純粋な暗号学的観点では、WebAuthn が安全なハードウェアストレージを使用するため、WebAuthn より *わずかに* 安全性が劣ります。
- [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm)。TOTP（時間ベースのワンタイムパスワード）は二要素として広く使われる方式です。WebAuthn ほど安全ではなく、Push と同様に TOTP は[フィッシング](https://en.wikipedia.org/wiki/Phishing)される可能性があります（ただし攻撃の窓は極めて短くなります）。それでも非常に安全な認証方式です。GitLab チームメンバーは 1Password を使用しているため、適切な構成を行えば（[1Password ガイドライン](/handbook/security/corporate/systems/1password/)）TOTP に利用することもできます。
- [SMS](https://en.wikipedia.org/wiki/SMS)。SMS（ショートメッセージサービス）は、テキストメッセージを使ってアウトオブバンド（OOB）認証を提供する方式です。メッセージは他の方式よりも容易にスプーフィングや傍受される可能性があるため、SMS は 2FA として強く非推奨です。本書執筆時点で、Security Department は GitLab の資産またはチームメンバーが使用するサードパーティアプリケーションで *SMS のみ* の 2FA をサポートしているものを把握していません。GitLab 用に SMS のみを二要素として提供しているものを使用する必要がある場合は、[Security Department](/handbook/security/controlled-document-procedure/#exceptions) にお問い合わせください。

2FA が GitLab にどう適合しているかをより理解するには、パスワード設定、FIDO2 トークン取得、追加リソースへのリンクなどを含む [Accounts and Passwords](/handbook/security/password-guidelines/) セクションを参照してください。[FIDO2/WebAuthn](/handbook/tools-and-tips/#fido2--webauthn) や[その他の 2FA 方式](/handbook/tools-and-tips/#other-2fa-methods)に関する詳細は、Tools and Tips ページを参照してください。

#### アプリケーション認証要件

- FY23 Q3 以降、GitLab の機密データを格納するすべてのサードパーティアプリケーションは、[GitLab の集中認証・認可アプローチに従って Okta 経由で認証する](/handbook/security/corporate/end-user-services/okta/#what-is-okta)ことが必須です。Okta がサポートされていないすべてのケースでは、[Security Notices](/handbook/security/security-assurance/security-risk/third-party-risk-management/#tprm-security-notice-process) が必要となります。
- アプリケーションへの認証には多要素認証（トークン、OTP ジェネレーター、SSO、YubiKey）が含まれるべきです。
- 認証ポータルへのログイン後の SAML アサーションは、技術的に可能な場合（例: Okta）必須です。
- アプリケーションへの認証は、グループではなく個別のユーザーをサポートするべきです。

## 例外

本標準への例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions) に従って追跡されます。

## 参考資料

- [トークン管理標準](/handbook/company/working-groups/token-management/)
