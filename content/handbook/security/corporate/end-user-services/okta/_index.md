---
title: "Okta"
upstream_path: /handbook/security/corporate/end-user-services/okta/
upstream_sha: 82fbf0e2626c904de9d6bd562ea4359a0c7e8ab2
translated_at: "2026-07-09T10:22:00+09:00"
translator: claude
stale: false
lastmod: "2026-07-08T14:46:05-04:00"
---

## Okta とは

Okta のウェブサイトより

> Okta は、人とテクノロジー間の安全な接続の基盤です。
> 従業員、顧客、パートナーが最も重要な業務を行うために必要なツールへ安全にアクセスできるサービスです。

実際には、Okta はアプリケーションおよびクラウドエンティティ向けの ID およびシングルサインオンソリューションです。
これにより GitLab は、毎日使用するアプリケーションへの認証と認可を単一のダッシュボードを通じて統合し、すべての GitLab チームメンバーに対して一貫した、安全で監査可能なログイン体験を確保できます。

### GitLab はどのように Okta を使用していますか？

GitLab は Okta をいくつかの主要な目的で使用しています。

- 当社の資産に対するゼロトラストベースの認証制御を有効にするために Okta を使用でき、これによりより高い確実性で重要な資産への認可された接続を許可できます。
- 当社の技術スタック内で使用している 80 以上、そして増え続けるクラウドアプリケーションへのログインプロセスをより適切に管理できます。
- 自動化と HRIS システムへの統合を活用することで、これらのアプリケーションへのアクセスのためのユーザーのプロビジョニングおよびデプロビジョニングプロセスをより適切に管理できます。
- 主要な資産への認証要件について信頼およびリスクベースの判断を行い、一貫したユーザー体験を確保するためにそれらを適応させることができます。

### ユーザーとして Okta を使用するメリットは何ですか？

- すべてのユーザーに提供される単一のダッシュボードで、必要なすべてのアプリケーションを 1 か所で利用できます。
- ログインパターンを学習して適応する管理された SSO および多要素認証により、必要な資産へのアクセスがシンプルになります。
- 親しみやすいユーザー体験で透明性のあるセキュリティ制御。

### アプリケーション管理者として Okta を使用するメリットは何ですか？

- 自動化されたプロビジョニングとグループ管理
- 認証情報をユーザーに公開せずに、ウェブアプリケーションへの共有認証情報を透過的に管理できる
- ユーザー向けの集中化されたアクセスにより、すべてのユーザーを更新する必要なく、アプリケーションプロファイルの追加、削除、変更が容易

## Okta アカウントを設定するにはどうすればよいですか？

すべての GitLab チームメンバーは、オンボーディング中に Okta アカウントが設定されます。開始日の前に、個人のメールアカウントにアクティベーションメールが届くはずです。メール内の手順に従って Okta アカウントをアクティベートしてください。

Okta にサインインしたら、業務用 Gmail にアクセスし、「Welcome to 1Password!」というタイトルの 1Password アクティベーションメールを探してアカウントを設定してください。

<div class="w3-panel w3-yellow">
  <h3>重要:</h3>
  <p>Okta アカウントが正しく設定されていることを確認するため、当社の [IT オンボーディングガイド](/handbook/security/corporate/end-user-services/onboarding101/) に綿密に従ってください</p>
</div>

GitLab はすべてのチームメンバーに対し、[Okta 認証](/handbook/security/corporate/end-user-services/onboarding101/onboarding-mobile-devices/#mobile-passkey-and-yubikey-setup)として生体認証または YubiKey のいずれかを使用することを必須としています

## デバイス信頼

Okta デバイス信頼により、チームメンバーが管理されたデバイスから Okta アプリケーションにアクセスしていることが保証されます。詳細とタイムラインについては、[内部ハンドブック](https://internal.gitlab.com/handbook/it/okta-device-trust/)を参照してください。

## Okta への新しいアプリケーションの追加

[新しい CorpSec Issue](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?description_template=okta_app_change) を作成し、`@gitlab-com/gl-security/corp/identity` をタグ付けしてください

Okta は現在、チームメンバーのロール／グループに基づいて割り当てられたグループ／ロールで設定されています。
アプリケーションが Okta で利用できない理由に関する追加情報については、ハンドブックの[アクセス変更リクエスト](/handbook/security/corporate/end-user-services/access-requests/)セクションを参照してください。

### Okta 内でアプリケーションをセットアップするにはどうすればよいですか？

アプリケーションオーナーの方は、ご自身のアプリケーションの Okta プロジェクトページで [Okta アプリ変更 Issue](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?description_template=okta_app_change) を提出してください。
詳細を確認し、セットアップ手順を提供するために協力します。

### チームで共有パスワードを使用しているアプリケーションがありますが、これを Okta に移行できますか？

はい、できます！
ご自身のアプリケーションの Okta プロジェクトページで [新しいアプリケーションセットアップ Issue](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?description_template=okta_app_change) を提出してください。
詳細を確認し、セットアップ手順を提供するために協力します。

日中に複数の MFA 認証を求められて問題が発生している場合は、[Issue を起票](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new) し、`gitlab-com/gl-security/corp/identity` をタグ付けしていただければ調査いたします。

### Okta 経由でログインする際に、なぜ GitLab.com は追加の MFA を要求するのですか？

ご自身の gitlab.com アカウントには、当社のポリシーで要求されているとおり 2FA がインストールされています。
GitLab.com 用の 2FA は、Okta にログインするために使用する MFA とは異なることに注意してください。
解決策を提案するために [この Issue](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues/7397) がオープンされています。

## 質問がある場合はどこに行けばよいですか？

- Okta のヘルプ、セットアップ、統合に関する質問: Slack の Compass アプリ（上部の検索バーに「Compass」と入力すると見つかります）または it-help@gitlab.com から IT にお問い合わせください。
