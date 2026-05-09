---
title: "Product Security Incident Response Team (PSIRT) サービス概要"
description: Product Security Incident Response Team (PSIRT) サービス概要
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/appsec-operations/psirt-services/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---
<!-- markdownlint-disable MD052 -->
最終更新: 2025年9月4日

## Product Security Incident Response Team (PSIRT)

Product Security Incident Response Team (PSIRT) は、GitLab の製品およびサービスにおける脆弱性報告を分析・検証し、GitLab エンジニアおよび製品チームと協力して、お客様を保護するためにセキュリティ脆弱性を是正・軽減します。PSIRT は GitLab の [Coordinated Vulnerability Disclosure プログラム](https://about.gitlab.com/security/disclosure/) も管理しています。

PSIRT の責任は、5 番目で最後の Secure Developer Experience (SDX) の柱を含みます。SDX は、従来の DevSecOps プラクティスに対する開発者 UX 中心のアプローチです。

- **SDX: Maintain**: インシデント対応計画の確立、[Coordinated Vulnerability Disclosure](https://about.gitlab.com/security/disclosure/) の管理、[バグバウンティプログラムの管理](https://hackerone.com/gitlab?type=team)、重大な製品セキュリティインシデント対応 [リリース](https://about.gitlab.com/releases/categories/releases/) およびリリース後の運用。

## 便利なクイックリンク

[**重大な脆弱性に対する根本原因分析**](/handbook/security/root-cause-analysis)

[**priority::1/severity::1 Issue の処理**](/handbook/security/product-security/psirt/runbooks/handling-s1p1/)

[**SIRT との協働**](/handbook/security/product-security/psirt/runbooks/working-with-sirt/)

[**CVSS 計算**](/handbook/security/product-security/psirt/runbooks/cvss-calculation/)

[**Application Security チームによるパッチリリース時の一般プロセス**](/handbook/security/product-security/psirt/runbooks/security-engineer/)

[**PSIRT ケースライフサイクル**](/handbook/security/product-security/psirt/runbooks/psirt-case-lifecycle/)

[**HackerOne プロセス**](/handbook/security/product-security/psirt/runbooks/hackerone-process/)

[**意図しない脆弱性開示への対応**](/handbook/security/product-security/psirt/runbooks/unintended-vuln-disclosure/)

[**アップストリームのセキュリティパッチへの対応方法**](/handbook/security/product-security/psirt/runbooks/upstream-security-patches/)

GitLab の[**再現可能な脆弱性**](/handbook/security/product-security/security-platforms-architecture/application-security/reproducible-vulnerabilities/)を使った実例で、セキュリティ問題の特定や是正方法を学んでください。

GitLab がビルドプロセスのために [**再現可能なビルド**](/handbook/security/product-security/security-platforms-architecture/application-security/reproducible-builds/) をどのように実装しているかを学んでください。

## Product Security Incident Response Team への連絡方法

- GitLab で `@gitlab-com/gl-security/product-security/appsec/psirt-group` をメンションする
- Slack の `#security_help` で質問し、`@psirt-team` をメンションする
- チーム横断のコラボレーション改善機会については、[コラボレーション改善機会用のこのテンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/new?issuable_template=cross-team-collaboration-improvement)を使用してください

## コンテンツのレビューと更新

このページは、会社および部門の優先事項、GitLab セキュリティ製品ロードマップ、関連するビジネスおよび運用上の変更との整合性を確保するため、四半期ごとにレビューされます。ビジネスオペレーションが進化するにつれて、より頻繁に更新が行われる場合もあります。

*次回予定レビュー: 2025年6月30日*
