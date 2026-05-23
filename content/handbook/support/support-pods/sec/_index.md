---
title: Sec サポートポッド
description: GitLab Sec セクションの機能に注力する技術的関心領域別サポートポッドです。
upstream_path: /handbook/support/support-pods/sec/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-19T07:21:04-04:00"
---

Sec ポッドは、GitLab の [Sec セクション](/handbook/product/categories/#sec-section) 機能に注力する技術的関心領域別の [サポートポッド](https://gitlab.com/groups/gitlab-com/support/-/epics/191) です。

## Secure ポッドメンバー

- リード: {{< member-by-name "Katrin Leinweber" >}} (`@katrinleinweber-gtlb`)
- リード: {{< member-by-name "Brie Carranza" >}} (`@bcarranza`)
- リード: {{< member-by-name "Duncan Harris" >}} (`@duncan_harris`)
- リード: {{< member-by-name "Kate Grechishkina" >}} (`@kategrechishkina`)
- リード: {{< member-by-name "Christopher Chewa Mutua" >}} (`@cmutua`)
- {{< member-by-name "Mario Mora" >}} (`@mmora`)
- {{< member-by-name "Caleb Williamson" >}} (`@calebw`)
- {{< member-by-name "Ronnie Alfaro" >}} (`@ralfaro`)
- {{< member-by-name "Cleveland Bledsoe Jr" >}} (`@cleveland`)

## 目的、主要な成果、終了条件 (該当する場合)

Sec ポッドは、Sec セクションの機能に関心のあるサポートエンジニアが、関連するチケットやプロジェクトに一緒に取り組むための仕組みです。

Sec ポッドの目標は次のとおりです:

- Sec チケット全体の根本的なパターンや傾向を特定する
- Sec 機能を改善するための的を絞った Issue や詳細なバグレポートを起票する
- セルフサービスサポートとチケット削減のために GitLab ドキュメントへ MR を提出する
- Sec セクションの機能に関する問題や質問について、お客様やチームメンバーを支援する

## FAQ

Sec ポッドにはどうすれば参加できますか？

1. マネージャーに相談してください。
1. [Support Team data](https://gitlab.com/gitlab-support-readiness/support-team/-/tree/master/data/agents?ref_type=heads) の自身の ZenDesk Groups に `'Support Focus: Secure'` を追加するマージリクエストを提出してください。
1. チームメイトやグループメンバーに、新しい注力領域について知らせてください。
1. `#spt_pod_sec` Slack チャネルに参加してください。
1. Sec ポッドのペアリングセッションに参加してください。(ミーティング時間は GitLab Support カレンダーで確認してください)

## Sec ポッドの仕組み

- `#spt_pod_sec` の [Slack チャネル](https://gitlab.slack.com/archives/C03FV8G5LV7) では、同僚のために注視している 🎫 チケットの Slack メッセージを [ピン留め](https://slack.com/help/articles/205239997-Pin-messages-and-bookmark-links) します。これは通常、その同僚が [不在](/handbook/support/workflows/ooo-ticket-management/) の場合に行います。
  - 🍐 ペアリングセッション中は、ピン留めされたメッセージを確認して、そこにあるチケットが対応を要するかを確認しましょう。
  - チケットをピン留めした場合は、ポッドからの対応が不要になった時点で削除してください。
- 私たちが作成する [ペアリング Issue](https://gitlab.com/gitlab-com/support/support-pairing/-/issues/) には、スコープ付きラベル `pod::secure` を付けます。

## サポートポッドのリソース

- 週次セッション: GitLab Support Team Calendar の「Sec Pod Pairing」。現在は毎週木曜日 15:00 UTC に開催されています。
- Slack チャネル: [#spt_pod_sec](https://gitlab.slack.com/archives/C03FV8G5LV7)
 GitLab.com ラベル: ~"devops::secure"

## Sec ポッドのトラブルシューティング用リソース

### Secure ステージ

- Slack: `#s_secure`
- GitLab.com ラベル: ~"devops::secure"
- グループ別機能: https://handbook.gitlab.com/handbook/product/categories/features/#secure
- ヘルプ依頼の提出: https://gitlab.com/gitlab-com/sec-sub-department/section-sec-request-for-help#how-to-submit-a-request-for-help--to-the-sec-section-development-team
- アナライザーのコード: https://gitlab.com/gitlab-org/security-products/analyzers/
- アナライザーイメージのコンテナレジストリ: https://gitlab.com/security-products/
- スキャナーレポートスキーマ: https://gitlab.com/gitlab-org/security-products/security-report-schemas/
- 15.0 Readiness - Secure: https://gitlab.com/groups/gitlab-com/support/-/epics/202
- Secure & Protect の用語: https://docs.gitlab.com/user/application_security/terminology/
- 脆弱性の重大度レベル: https://docs.gitlab.com/user/application_security/vulnerabilities/severities/
- セキュリティレポートの例: https://gitlab.com/gitlab-examples/security/security-reports/

### SAST (**S**tatic **A**pplication **S**ecurity **T**esting)

- Slack: `#g_secure-static-analysis`
- GitLab.com ラベル: ~"group::static analysis"
- ドキュメント: https://docs.gitlab.com/user/application_security/sast
- テンプレート: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/SAST.gitlab-ci.yml
- テスト/デモプロジェクト: https://gitlab.com/gitlab-com/support/test-projects/ci-examples/sast
- 個別デモプロジェクト集: https://gitlab.com/gitlab-com/support/test-projects/ci-examples/secure/static-analysis

### シークレット検出

- Slack: `#g_secure-secret-detection`
- GitLab.com ラベル: ~"group::secret detection", ~"Category:Secret Detection"
- ドキュメント: https://docs.gitlab.com/user/application_security/secret_detection/
- CI/CD テンプレート: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/Secret-Detection.gitlab-ci.yml
- シークレットスキャナーのコードベース: https://gitlab.com/gitlab-org/security-products/analyzers/secrets/
- シークレット検出ルール: https://gitlab.com/gitlab-org/security-products/analyzers/secrets/-/blob/master/gitleaks.toml
- アップストリームプロジェクト: https://github.com/gitleaks/gitleaks
- テスト/デモプロジェクト: https://gitlab.com/gitlab-com/support/test-projects/ci-examples/secret-detection/

### 依存関係スキャン

- Slack: `#g_secure-composition-analysis`
- GitLab.com ラベル: ~"group::composition analysis"
- ドキュメント: https://docs.gitlab.com/user/application_security/dependency_scanning/
- テンプレート: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/Dependency-Scanning.gitlab-ci.yml
- テスト/デモプロジェクト: https://gitlab.com/gitlab-com/support/test-projects/ci-examples/dependency-scanning/
- 依存関係リストのドキュメント: https://docs.gitlab.com/user/application_security/dependency_list/

### DAST (**D**ynamic **A**pplication **S**ecurity **T**esting)

- Slack: `#g_secure-dynamic-analysis`
- GitLab.com ラベル: ~"group::dynamic analysis"
- DAST ドキュメント: https://docs.gitlab.com/user/application_security/dast/
- DAST CI/CD テンプレート: https://gitlab.com/gitlab-org/gitlab/blob/master/lib/gitlab/ci/templates/Security/DAST.gitlab-ci.yml
- DAST API スキャン: https://docs.gitlab.com/user/application_security/dast_api/
- DAST API スキャン CI/CD テンプレート: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Security/DAST-API.gitlab-ci.yml
- DAST API テスト/デモプロジェクト: https://docs.gitlab.com/user/application_security/api_security_testing/#example-dast-api-scanning-configurations
- DAST テスト/デモプロジェクト: https://gitlab.com/gitlab-org/security-products/demos/dast/

### IaC (Infrastructure as Code) スキャン

- Slack: `#g_secure-static-analysis`
- GitLab.com ラベル: ~"group::static analysis"
- ドキュメント: https://docs.gitlab.com/user/application_security/iac_scanning/
- CI/CD テンプレート: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/SAST-IaC.latest.gitlab-ci.yml
- IaC スキャナーのコードベース: https://gitlab.com/gitlab-org/security-products/analyzers/kics

### セキュリティダッシュボード / 脆弱性レポート

- Slack: `#s_srm_security_insights`
- GitLab.com ラベル: ~"group::security insights"
- セキュリティダッシュボードのドキュメント: https://docs.gitlab.com/user/application_security/security_dashboard/
- 脆弱性レポートのドキュメント: https://docs.gitlab.com/user/application_security/vulnerability_report/
- 脆弱性ページのドキュメント: https://docs.gitlab.com/user/application_security/vulnerabilities/

### セキュリティスキャンポリシー

- Slack: `#g_protect_container_security`
- GitLab.com ラベル: ~"devops::protect", ~"Category:Container Scanning", ~"group::container security",
- スキャンポリシー概要: https://docs.gitlab.com/user/application_security/policies/
- スキャン結果ポリシーのドキュメント: https://docs.gitlab.com/user/application_security/policies/merge_request_approval_policies/
- スキャン実行ポリシーのドキュメント: https://docs.gitlab.com/user/application_security/policies/scan_execution_policies/

### コード品質

技術的にはシークレット検出が所有していますが、セキュリティ脆弱性とは _関係ありません_。

- Slack: `#g_secure-secret-detection`
- GitLab.com ラベル: ~"Category:Code Quality"
- ドキュメント: https://docs.gitlab.com/ci/testing/code_quality/
- CI/CD テンプレート: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/Code-Quality.gitlab-ci.yml
- GitLab Code Quality アナライザーのコードベース: https://gitlab.com/gitlab-org/ci-cd/codequality

### コンテナスキャン

- Slack: `#g_protect_container_security`
- GitLab.com ラベル: ~"devops::protect", ~"Category:Container Scanning", ~"group::container security"
- ドキュメント: https://docs.gitlab.com/user/application_security/container_scanning/
- CI/CD テンプレート: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Security/Container-Scanning.gitlab-ci.yml

### ライセンススキャン

- Slack: `#g_secure-composition-analysis`
- GitLab.com ラベル: ~"group::composition analysis"
- ドキュメント: https://docs.gitlab.com/user/compliance/license_approval_policies/
- CI/CD テンプレート: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/License-Scanning.gitlab-ci.yml

### ファズテスト

- Slack: `#g_secure-dynamic-analysis`
- GitLab.com ラベル: ~""
- API ファジングのドキュメント: https://docs.gitlab.com/user/application_security/api_fuzzing/
- カバレッジファジングのドキュメント: https://docs.gitlab.com/user/application_security/coverage_fuzzing/
- API ファズテスト/デモプロジェクト: https://gitlab.com/gitlab-org/security-products/demos/api-fuzzing/
- カバレッジファジングのテスト/デモプロジェクト: https://gitlab.com/gitlab-org/security-products/demos/coverage-fuzzing/

### 学習リソース

- [GitLab Certified Security Specialist](https://gitlab.edcast.com/pathways/gitlab-certified-security-specialist-pathway)
- [GitLab Security Essentials](https://university.gitlab.com/pages/security-training/)
- [Security Essentials Hands-on](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentials/)
- [Support DAST Deep Dive](https://youtu.be/-WeA12bl-Iw)
