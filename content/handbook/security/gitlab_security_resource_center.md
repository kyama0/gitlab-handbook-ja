---
title: "GitLab セキュリティリソースセンター"
description: "GitLab の顧客と見込み顧客に向けて、人気で重要なリンクと情報を集約してリストします。"
upstream_path: /handbook/security/gitlab_security_resource_center/
upstream_sha: d92acb119be844b83eb2f76de26d722afea570c3
translated_at: "2026-07-21T06:21:42+09:00"
translator: codex
stale: false
lastmod: "2026-07-20T13:03:25-03:00"
---

## よく要求されるリソース

### セキュリティ Issue を報告するために GitLab に連絡する

- [不正利用の報告](/handbook/security/security-operations/trustandsafety/abuse-on-gitlab-com/)
- [協調的開示プロセス](https://about.gitlab.com/security/disclosure/)
- [HackerOne 報告プロセス](/handbook/security/product-security/psirt/runbooks/hackerone-process/)

### GitLab の Customer Assurance Package (CAP)

私たちの Customer Assurance Package には、SOC2 レポート、ISO 27001 認証書、ペネトレーションテストのエグゼクティブサマリ、事前に記入された CAIQ および SIG アンケートなど、多数のドキュメントが含まれています。パッケージのリクエストについては [CAP ページ](https://trust.gitlab.com/) を参照してください。

### GitLab の Trust Center

私たちの [Trust Center](https://about.gitlab.com/security/) は、GitLab が維持するさまざまなコンプライアンスおよびアシュアランス資格の概要を示します。このページには、[セキュリティ慣行の概要](/handbook/security/)、[環境・社会・ガバナンス戦略](/handbook/legal/esg/)、[本番アーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/)など、重要なセキュリティ、法務／プライバシー、可用性に関するリソースへのリンクも含まれています。

## よくある質問

以下のリンクには、よくあるセキュリティ、法務／プライバシー、可用性に関する質問が含まれます。

- [Security FAQs](https://about.gitlab.com/security/faq/)
- [Legal & Privacy FAQs](https://about.gitlab.com/privacy/)
- [Availability FAQs](/handbook/engineering/infrastructure-platforms/faq/)

## コントロールトピック

### 目次

| [利用許諾](/handbook/security/gitlab_security_resource_center/#acceptable-use) | [アクセス管理](/handbook/security/gitlab_security_resource_center/#access-management) | [事業継続](/handbook/security/gitlab_security_resource_center/#business-continuity) | [暗号化](/handbook/security/gitlab_security_resource_center/#cryptography) | [データ分類](/handbook/security/gitlab_security_resource_center/#data-classification)
| [災害復旧](/handbook/security/gitlab_security_resource_center/#disaster-recovery) | [エンドポイント管理](/handbook/security/gitlab_security_resource_center/#endpoint-management) | [ハードニング](/handbook/security/gitlab_security_resource_center/#gitlabcom-hardening-techniques) | [インシデント対応とコミュニケーション](/handbook/security/gitlab_security_resource_center/#incident-response-and-communication) | [独立アシュアランス](/handbook/security/gitlab_security_resource_center/#independent-assurance)
| [ロギングとモニタリング](/handbook/security/gitlab_security_resource_center/#logging-and-monitoring) | [ネットワークセキュリティ](/handbook/security/gitlab_security_resource_center/#network-security) | [プライバシー](/handbook/security/gitlab_security_resource_center/#privacy) | [セキュリティ意識向上](/handbook/security/gitlab_security_resource_center/#security-awareness) | [サードパーティリスク管理](/handbook/security/gitlab_security_resource_center/#third-party-risk-management)
| [脅威モデリング](/handbook/security/gitlab_security_resource_center/#threat-modeling) | [脆弱性管理](/handbook/security/gitlab_security_resource_center/#vulnerability-management) |

### 利用許諾 {#acceptable-use}

- [社内利用許諾ポリシー](/handbook/people-group/acceptable-use-policy/)
- [GitLab 利用規約](https://about.gitlab.com/terms/)

### アクセス管理 {#access-management}

- [アクセス管理ポリシー](/handbook/security/security-and-technology-policies/access-management-policy/)
- [アクセスレビュー手順](/handbook/security/security-assurance/security-compliance/access-reviews)
- [アクセスリクエストプロセス](/handbook/security/corporate/end-user-services/access-requests/access-requests/)

### 事業継続 {#business-continuity}

- [事業継続計画](/handbook/business-technology/entapps-documentation/policies/gitlab-business-continuity-plan/)
- [ビジネスインパクト分析](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/)
- [情報システム緊急時対応計画](/handbook/security/information-system-contingency-plan-iscp)

### 暗号化 {#cryptography}

- [GitLab 暗号化標準](/handbook/security/policies_and_standards/cryptographic-standard/)
- [暗号化ポリシー](/handbook/security/product-security/vulnerability-management/encryption-policy/)

### データ分類 {#data-classification}

- [データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)
- [記録保持ポリシー](/handbook/legal/record-retention-policy/)
- [記録保持および廃棄標準](/handbook/security/policies_and_standards/records-retention-deletion/)

### 災害復旧 {#disaster-recovery}

- [災害復旧計画](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/library/disaster-recovery/index.md)
- [データベース災害復旧](/handbook/engineering/infrastructure-platforms/database/disaster-recovery/)
- [データベース概要](/handbook/engineering/infrastructure-platforms/database/)

### エンドポイント管理 {#endpoint-management}

- [GitLab のエンドポイント管理](https://internal.gitlab.com/handbook/it/endpoint-tools/)
  - [Jamf](https://internal.gitlab.com/handbook/it/endpoint-tools/jamf/)
  - [EDR](https://internal.gitlab.com/handbook/security/corporate/tooling/crowdstrike/)
- [ノートパソコンで Gitleaks をプリコミット git フックとして使う](/handbook/security/gitleaks/)

### GitLab.com ハードニング技術 {#gitlabcom-hardening-techniques}

- [GitLab プロジェクトのベースライン要件](/handbook/security/policies_and_standards/gitlab_projects_baseline_requirements/)
- [デプロイと開発のための GitLab セキュリティ要件](/handbook/security/planning/security-development-deployment-requirements/)
- [自己マネージド GitLab インスタンスをハードニングする方法](https://about.gitlab.com/blog/2023/05/23/how-to-harden-your-self-managed-gitlab-instance/)
- [GitLab.com 上でコードをセキュアにするための究極のガイド](https://about.gitlab.com/blog/2023/05/31/securing-your-code-on-gitlab/)

### インシデント対応とコミュニケーション {#incident-response-and-communication}

- [セキュリティインシデントコミュニケーションプラン手順](/handbook/security/security-operations/sirt/security-incident-communication-plan/)
- [セキュリティインシデント対応ガイド](/handbook/security/security-operations/sirt/sec-incident-response/)

### 独立アシュアランス {#independent-assurance}

- [独立セキュリティアシュアランス](/handbook/security/security-assurance/field-security/independent_security_assurance/)

### ロギングとモニタリング {#logging-and-monitoring}

- [gitlab.com のモニタリング](/handbook/engineering/monitoring/)
- [gitlab.com のログ管理](/handbook/engineering/monitoring/#logs)
- [ロギングとモニタリングのアーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/#monitoring-and-logging)
- [GitLab 監査ロギングポリシー](/handbook/security/security-and-technology-policies/audit-logging-policy/)
- [ログおよび監査リクエストプロセス](/handbook/support/workflows/log_requests/)
- [インフラストラクチャ本番 runbook](https://gitlab.com/gitlab-com/runbooks/)

### ネットワークセキュリティ {#network-security}

- [ネットワークセキュリティ管理手順](/handbook/engineering/infrastructure-platforms/network-security/)
- [デプロイと開発のための GitLab セキュリティ要件](/handbook/security/planning/security-development-deployment-requirements/)

### プライバシー {#privacy}

- [GitLab プライバシーステートメント](/handbook/legal/privacy/)
- [チームメンバープライバシー通知](/handbook/legal/privacy/employee-privacy-policy/)
- [米国州別プライバシー権利と開示](https://about.gitlab.com/privacy/us-state-privacy-rights-and-disclosures/)
- [アカウント削除とデータアクセスリクエストワークフロー](/handbook/support/workflows/account_deletion_access_request_workflows/)

### セキュリティ意識向上 {#security-awareness}

- [セキュリティトレーニング](/handbook/security/security-assurance/governance/security-training/)
- [セキュリティ意識向上トレーニングプログラム](/handbook/security/security-assurance/governance/sec-awareness-training/)
- [セキュリティ意識向上トレーニング手順](/handbook/security/security-assurance/governance/sec-training/)
- [フィッシングプログラム](/handbook/security/security-assurance/governance/phishing/)

### サードパーティリスク管理 {#third-party-risk-management}

- [セキュリティサードパーティリスク管理](security-assurance/security-risk/third-party-risk-management/)

### 脅威モデリング {#threat-modeling}

- [GitLab における脅威モデリング](product-security/security-platforms-architecture/application-security/threat-modeling/)
- [脅威モデリング How To ガイド](product-security/security-platforms-architecture/application-security/threat-modeling/howto/)
- [アプリケーションセキュリティ脅威モデリングプロセス](product-security/security-platforms-architecture/application-security/runbooks/threat-modeling/)

### 脆弱性管理 {#vulnerability-management}

- [脆弱性管理標準](product-security/vulnerability-management/)
- [アプリケーション脆弱性管理手順](product-security/security-platforms-architecture/application-security/vulnerability-management/)
- [インフラストラクチャ脆弱性管理手順](/handbook/security/product-security/vulnerability-management/infrastructure-vulnerability-procedure/)
