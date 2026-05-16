---
title: "Application Security - 自動化とモニタリング"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/application-security-automation-monitoring/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-10T08:37:31-04:00"
---

## モニタリング

Application Securityチームは、GitLabのセキュリティを確保するために多くの自動化イニシアチブを使用しています。これらすべてがAppSecチームによって作成されたわけではありませんが、いずれも私たちにとって有用です。リスト項目は特定の順序ではありません。

- [Security MR Reviewer Flow](https://gitlab.com/components/agents-and-flows/appsec-security-mr-reviewer/) は、GitLabプロジェクトのマージリクエストに対してAI駆動のセキュリティコードレビューを実行できる、実験的な自動アプリケーションセキュリティレビューフローです。
- [Gem Checker](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/gem-checker) は、GitLabで使用しているgemに関するRubyGems.org上の不審なアクティビティを監視します
- [sec-appsec-mr-alerts](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/sec-appsec-mr-alerts) は、私たちのプロジェクトで使用されている依存関係を変更するMRを特定します
- [Public MR Confidential Issue Detector](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/public-mr-confidential-issue-detector/) は、セキュリティミラーで開かれるべきだったパブリックなマージリクエストを監視します
- 既知の脆弱なコードパターンを検出し、MRでAppSecチームにアラートを出すカスタムSASTルール(関連[MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/109872))
- ロックファイルの改ざんを防止するためにCIに含まれる[untamper-my-lockfile](https://gitlab.com/gitlab-org/frontend/untamper-my-lockfile/)
- [Package Hunter](https://gitlab.com/gitlab-org/security-products/package-hunter) は、ランタイム時に依存関係の不審なアクティビティを検出します([関連runbook](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/investigating-package-hunter-findings/))
- [GitLab Inventory](https://gitlab.com/gitlab-com/gl-security/product-security/inventory) は、私たちのプロジェクトおよびセキュリティのベストプラクティスや標準への違反を監視します
- GitLab自身の[アプリケーションセキュリティ機能](https://docs.gitlab.com/ee/user/application_security/)がCIで実行されています
- [Tokinator](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tokinator) は、漏洩した認証情報を監視します
- [AppSec Escalator](https://gitlab.com/gitlab-private/gl-security/engineering-and-research/automation-team/escalator/appsec-escalator/) は、以下を行うツールです...
  - セキュリティIssueに適切にラベルが付いていることを監視します
  - セキュリティIssueに適切な期日を設定します
  - 期限切れのIssueをエスカレーションします
  - パブリックなIssueに投稿された潜在的に機密性の高いファイルを検出します
- [depSASTer](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/depsaster) は、GitLabが使用している依存関係に対してSASTを実行します
- [Maintainer Watcher](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/maintainer-watcher) は、侵害される可能性のある依存関係のメンテナーアカウントを監視します
- [depscore](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/depscore) は、`gitlab-org/gitlab` プロジェクトの新規/更新された依存関係に対して依存関係レビューチェックを実行します。
