---
title: "Application Security - 自動化とモニタリング"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/application-security-automation-monitoring/
upstream_sha: eff3a749f8927544a08073e8f660283a5d80478b
lastmod: "2026-05-22T09:57:56-04:00"
translated_at: "2026-05-22T00:00:00Z"
translator: claude
stale: false
---

## モニタリング

Application Security チームは、GitLab のセキュリティを確保するために多数の自動化イニシアチブを活用しています。すべてが AppSec チームの作成によるものではありませんが、いずれも私たちにとって有用です。項目に特定の順序はありません。

- [Security MR Reviewer Flow](/handbook/security/product-security/security-platforms-architecture/application-security/secure-code-review/automated-mr-reviewer/) は、GitLab プロジェクトのマージリクエストに対して AI 駆動のセキュリティコードレビューを実行できる実験的な自動アプリケーションセキュリティレビューフローです。
- [Gem Checker](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/gem-checker) は、GitLab で使用している gem に関する RubyGems.org 上の不審なアクティビティを監視します
- [sec-appsec-mr-alerts](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/sec-appsec-mr-alerts) は、私たちのプロジェクトで使用している依存関係を変更する MR を特定します
- [Public MR Confidential Issue Detector](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/public-mr-confidential-issue-detector/) は、本来 security ミラーで作成されるべきだったパブリックなマージリクエストを監視します
- 既知の脆弱なコードパターンを検出し、MR 上で AppSec チームにアラートを出すカスタム SAST ルール（関連 [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/109872)）
- ロックファイルの改ざんを防止するために CI に含まれる [untamper-my-lockfile](https://gitlab.com/gitlab-org/frontend/untamper-my-lockfile/)
- [Package Hunter](https://gitlab.com/gitlab-org/security-products/package-hunter) は、ランタイム時に依存関係の不審なアクティビティを検出します（[関連 runbook](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/investigating-package-hunter-findings/)）
- [GitLab Inventory](https://gitlab.com/gitlab-com/gl-security/product-security/inventory) は、私たちのプロジェクトとセキュリティのベストプラクティス・標準への違反を監視します
- GitLab 自身の[アプリケーションセキュリティ機能](https://docs.gitlab.com/ee/user/application_security/)が CI で稼働しています
- [Tokinator](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tokinator) は、漏洩した認証情報を監視します
- [AppSec Escalator](https://gitlab.com/gitlab-private/gl-security/engineering-and-research/automation-team/escalator/appsec-escalator/) は、以下を行うツールです...
  - セキュリティ Issue に適切なラベルが付いていることを監視します
  - セキュリティ Issue に適切な期日を設定します
  - 期限切れの Issue をエスカレーションします
  - パブリックな Issue に投稿された潜在的に機密性の高いファイルを検出します
- [depSASTer](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/depsaster) は、GitLab が使用している依存関係に対して SAST を実行します
- [Maintainer Watcher](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/maintainer-watcher) は、侵害される可能性のある依存関係のメンテナーアカウントを監視します
- [depscore](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/depscore) は、`gitlab-org/gitlab` プロジェクトの新規・更新された依存関係に対して依存関係レビューチェックを実行します。
