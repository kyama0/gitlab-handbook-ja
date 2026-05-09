---
title: "Secure Design & Development チームサービス概要"
description: Secure Design & Development チームサービス概要
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/appsec-operations/sdd-services/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---
<!-- markdownlint-disable MD052 -->
最終更新: 2025年5月27日

## Secure Design & Development チームサービス概要

Secure Design & Development チームは、GitLab エンジニアおよび製品チームと協力して、設計および開発中の脆弱性導入を *予測・防止* します。

私たちの責任は、Secure Developer Experience (SDX) の 5 つの柱のうち 4 つを含みます。SDX は、従来の DevSecOps プラクティスに対する開発者 UX 中心のアプローチです。

- **SDX: Learn**: セキュリティトレーニング、ガバナンス、ポリシー、ドキュメント、標準。
- **SDX: Design**: [脅威モデリング](/handbook/security/product-security/security-platforms-architecture/application-security/threat-modeling/_index.md)、機能設計のガイダンスとコンサルティング、[設計レビュー](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews.md)。
- **SDX: Code**: 静的解析、ソフトウェアコンポーネント解析とサプライチェーンセキュリティ、開発における承認済みツールと手法の使用、安全でない関数の非推奨化など。
- **SDX: Verify**: 動的解析テスト、ペネトレーションテスト、重大な脆弱性の是正、リリース前の[最終セキュリティレビュー](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews.md)。

## 便利なクイックリンク

- [**Application Security レビュー**](../appsec-reviews.md)
- [**脅威モデリング**](../threat-modeling/_index.md)
- **バックログレビュー:** 必要に応じてバックログレビューを開始できます。詳細は[脆弱性管理ページ](../vulnerability-management.md)をご覧ください。
- [**GitLab AppSec インベントリ**](../inventory.md)
- [**お客様のセキュリティスキャナーレビュー依頼への対応**](/handbook/security/product-security/vulnerability-management/customer-scan-review-requests.md)
- [**重大な脆弱性に対する根本原因分析**](../../../../root-cause-analysis.md)

GitLab の[再現可能な脆弱性](/handbook/security/product-security/security-platforms-architecture/application-security/reproducible-vulnerabilities/)を使った実例で、セキュリティ問題の特定や是正方法を学んでください。

GitLab がビルドプロセスのために [再現可能なビルド](/handbook/security/product-security/security-platforms-architecture/application-security/reproducible-builds/) をどのように実装しているかを学んでください。

Application Security チームが利用している自動化イニシアティブの詳細は [Application Security 自動化およびモニタリングのページ](/handbook/security/product-security/security-platforms-architecture/application-security/application-security-automation-monitoring/) を参照してください。

### GitLab セキュアツールのカバレッジ

[ドッグフーディング活動](/handbook/product/product-processes/dogfooding-for-r-d/)の一環として、[セキュアツール](https://docs.gitlab.com/ee/user/application_security/) は多数の GitLab プロジェクトで設定されています（[ポリシー](/handbook/security/product-security/security-platforms-architecture/application-security/inventory/#policies)を参照）。このリストは動的すぎて本ページに含めることができないため、現在は [GitLab AppSec インベントリ](/handbook/product/ux/navigation/inventory/) で管理しています。

期待される設定が欠けているプロジェクトは、[インベントリ違反リスト](https://gitlab.com/gitlab-com/gl-security/product-security/inventory/-/issues)（社内リンク）にあります。

## Secure Design & Development チームへの連絡方法

- [製品セクション、ステージ、グループ、カテゴリ](/handbook/product/categories/) ページで Stable Counterpart を見つけてください
- GitLab で `@gitlab-com/gl-security/product-security/appsec` をメンションする
- [AppSec チームリポジトリ](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues)で Issue を提出する
- Slack の `#security-help` で質問するか、`@appsec-team` をメンションする
- チーム横断のコラボレーション改善機会については、[コラボレーション改善機会用のこのテンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/new?issuable_template=cross-team-collaboration-improvement)を使用してください

## コンテンツのレビューと更新

このページは、会社および部門の優先事項、GitLab セキュリティ製品ロードマップ、関連するビジネスおよび運用上の変更との整合性を確保するため、四半期ごとにレビューされます。ビジネスオペレーションが進化するにつれて、より頻繁に更新が行われる場合もあります。

*次回予定レビュー: 2025年6月30日*
