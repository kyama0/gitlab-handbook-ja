---
title: "Okta"
upstream_path: /handbook/eta/corporate-it/end-user-services/okta/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:14:51+09:00"
translator: codex
stale: false
---

## Okta とは？ {#what-is-okta}

Okta Web サイトより

> Okta は、人とテクノロジーの安全な接続の基盤です。
> 従業員、顧客、パートナーが最も重要な仕事に必要なツールへ安全にアクセスできるようにするサービスです。

実際には、Okta はアプリケーションおよびクラウドエンティティ向けの ID とシングルサインオンのソリューションです。
GitLab は、単一のダッシュボードを通じて日常的に使用するアプリケーションへの認証と認可を統合し、すべての GitLab チームメンバーに一貫性があり、安全で監査可能なログイン体験を提供できます。

### GitLab は Okta をどのように使用していますか？

GitLab は、いくつかの主要な目的で Okta を使用しています:

- Okta を使用してアセットに対するゼロトラストベースの認証制御を有効にし、より高い確実性をもって重要なアセットへの認可された接続を許可できます。
- Tech Stack 内で使用する 80 以上のクラウドアプリケーションと増加中のアプリケーションへのログインプロセスをより適切に管理できます。
- 自動化と HRIS システムとの統合を使用し、ユーザーがこれらのアプリケーションにアクセスするためのプロビジョニングおよびプロビジョニング解除プロセスをより適切に管理できます。
- 重要なアセットへの認証要件について信頼とリスクに基づく判断を行い、一貫したユーザー体験を確保するために調整できます。

### ユーザーとして Okta を使用するメリットは？

- 必要なすべてのアプリケーションが 1 か所にある、すべてのユーザーに提供される単一のダッシュボード。
- ログインパターンを学習して適応する管理対象 SSO と多要素認証により、必要なアセットへのアクセスがより簡単になります。
- フレンドリーなユーザー体験による透明性のある Security 制御。

### アプリケーション管理者として Okta を使用するメリットは？

- 自動プロビジョニングとグループ管理
- ユーザーに資格情報を開示せず、Web アプリケーションへの共有資格情報を透過的に管理する能力
- ユーザーの一元化されたアクセスにより、すべてのユーザーを更新しなくてもアプリケーションプロフィールを簡単に追加、削除、変更できます。

## Okta アカウントを設定するには？

すべての GitLab チームメンバーには、オンボーディング中に Okta アカウントが設定されます。開始日前に個人メールアカウントへアクティベーションメールが届くはずです。メールの手順に従って Okta アカウントを有効にしてください。

Okta にサインインしたら、仕事用 Gmail にアクセスし、"Welcome to 1Password!" というタイトルの 1Password アクティベーションメールを探してアカウントを設定します。

<div class="w3-panel w3-yellow">
  <h3>重要:</h3>
  <p>Okta アカウントが正しく設定されるよう、[IT Onboarding Guide](/handbook/eta/corporate-it/end-user-services/onboarding101/)に必ず従ってください</p>
</div>

GitLab では、すべてのチームメンバーに、[Okta 認証](/handbook/eta/corporate-it/end-user-services/onboarding101/onboarding-mobile-devices/#mobile-passkey-and-yubikey-setup)として生体認証または YubiKey のいずれかを使用することを求めています

## Device Trust

Okta Device Trust は、チームメンバーが管理対象デバイスから Okta アプリケーションにアクセスしていることを保証します。追加の詳細とタイムラインについては、[社内ハンドブック](https://internal.gitlab.com/handbook/it/okta-device-trust/)を参照してください。

## Okta に新しいアプリケーションを追加する {#adding-new-applications-to-okta}

[新しい CorpSec Issue](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?description_template=okta_app_change)を作成し、`@gitlab-com/gl-security/corp/identity` をタグ付けします

Okta は現在、チームメンバーのロール／グループに基づく割り当て済みグループ／ロールで設定されています。
アプリケーションが Okta で利用できない理由の詳細については、ハンドブックの[アクセス変更リクエスト](/handbook/eta/corporate-it/end-user-services/access-requests/)セクションを参照してください。

### Okta 内でアプリケーションを設定するには？

アプリケーションオーナーの場合は、アプリケーションの Okta プロジェクトページで [Okta アプリ変更 Issue](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?description_template=okta_app_change)を送信してください。
詳細を確認し、セットアップ手順を提供します。

### チームに共有パスワードを使用するアプリケーションがあります。これを Okta に移行できますか？

はい、できます！
アプリケーションの Okta プロジェクトページで[新しいアプリケーションセットアップ Issue](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?description_template=okta_app_change)を送信してください。
詳細を確認し、セットアップ手順を提供します。

日中に複数の MFA 認証を求められる問題がある場合は、[Issue を記録](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new)し、`gitlab-com/gl-security/corp/identity` をタグ付けしてください。確認します。

### Okta 経由でログインすると、GitLab.com が追加の MFA を要求するのはなぜですか？

gitlab.com アカウントには、ポリシーで要求される 2FA がインストールされています。
GitLab.com の 2FA は、Okta にログインするために使用する MFA とは異なることに注意してください。
ソリューションを提案するために[この Issue](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues/7397)がオープンされています。

## 質問がある場合はどこに行けばよいですか？

- Okta のヘルプ、セットアップ、統合に関する質問: Slack の Compass アプリ（上部の検索バーに "Compass" と入力して見つけます）または it-help@gitlab.com へメールで IT に連絡してください。
