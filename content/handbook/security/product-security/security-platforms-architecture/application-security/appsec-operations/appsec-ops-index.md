---
title: "Application Security オペレーション"
description: Application Security チームオペレーションのホームページ
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/appsec-operations/appsec-ops-index/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:15:15-08:00"
---
<!-- markdownlint-disable MD052 -->
最終更新: 2025年5月27日

[**Application Security サブ部門**](../../../security-platforms-architecture/application-security/) は、[**Secure Development and Design チーム**](sdd-services.md) と [**Product Security Incident Response Team (PSIRT)**](psirt-services.md) の 2 つのチームで構成されています。これら 2 つのチームは、設計と開発中の脆弱性導入を予測・防止し、GitLab の製品およびサービスで発見されたセキュリティ脆弱性を識別・評価・対応するために協働します。

## GitLab エンジニアのための便利なクイックリンク

- [**Application Security レビュー**](../appsec-reviews.md)
- [**脅威モデリング**](../threat-modeling/_index.md)
- **バックログレビュー:** 必要に応じてバックログレビューを開始できます。詳細は[脆弱性管理ページ](../vulnerability-management.md)をご覧ください。
- [**GitLab AppSec インベントリ**](../inventory.md)
- [**お客様のセキュリティスキャナーレビュー依頼への対応**](/handbook/security/product-security/vulnerability-management/customer-scan-review-requests.md)
- [**重大な脆弱性に対する根本原因分析**](../../../../root-cause-analysis.md)

GitLab の[再現可能な脆弱性](../reproducible-vulnerabilities.md)を使った実例で、セキュリティ問題の特定や是正方法を学んでください。

GitLab がビルドプロセスのために [再現可能なビルド](../reproducible-builds.md) をどのように実装しているかを学んでください。

Application Security チームが利用している自動化イニシアティブの詳細は [Application Security 自動化およびモニタリングのページ](../application-security-automation-monitoring.md) を参照してください。

### GitLab セキュアツールのカバレッジ

[ドッグフーディング活動](/handbook/product/product-processes/dogfooding-for-r-d/)の一環として、[セキュアツール](https://docs.gitlab.com/ee/user/application_security/) は多数の GitLab プロジェクトで設定されています（[ポリシー](../inventory.md#policies)を参照）。このリストは動的すぎて本ページに含めることができないため、現在は [GitLab AppSec インベントリ](/handbook/product/ux/navigation/inventory/) で管理しています。

期待される設定が欠けているプロジェクトは、[インベントリ違反リスト](https://gitlab.com/gitlab-com/gl-security/product-security/inventory/-/issues)（社内リンク）にあります。

## AppSec エンジニア向けの有用なリソース

[**Application Security エンジニアのランブック**](../runbooks/)

[**Application Security エンジニアの職務記述書ファミリー**](../../../../../../../content/job-description-library/security/application-security.md)

### PTO

5 日以上の PTO を取得するチームメンバーは、可視性を確保しチームの十分な運用カバレッジを保つために、スケジュールを組む前にマネージャーと休暇について話し合う必要があります。**そして** [PTO カバレッジ Issue を作成](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/new?issuable_template=pto_coverage)して、不在時のカバレッジを整理する必要があります。PTO カバレッジ Issue には次の内容を含めてください:

- PTO 中にチームに来る可能性のある依頼をリスト化
- PTO を取るチームメンバーは、それに応じて作業を整理し、PTO カバレッジ Issue に作業処理に必要なコンテキストが含まれるようにする
- 一次および二次の責任チームメンバーを割り当てる

AppSec チームメンバーは、PTO 中の人の代理で対応する作業に関連する重要な情報を追加すべきであり、AppSec マネージャーは、復帰時に確認すべき重要なお知らせを追加すべきです。

### チームブックマーク

- [他のプライベートサブグループとプロジェクトを含む AppSec のプライベートグループ](https://gitlab.com/gitlab-com/gl-security/product-security/appsec)
- [Staging 上の `appsec-lab` グループ。Ultimate ライセンスがあります。](https://staging.gitlab.com/appsec-lab)
- [Bug Bounty Council 検索](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/bug-bounty-reviewers/bug-bounty-council/-/issues)
- [Bug Bounty Council アーカイブ (2025年11月以前)](https://gitlab.com/gitlab-com/gl-security/security-department-meta/-/issues?scope=all&state=opened&label_name[]=Bug+Bounty+Council)
- [次回パッチリリース](https://gitlab.com/gitlab-org/gitlab/-/issues?sort=created_date&state=opened&label_name%5B%5D=upcoming+security+release)
- [GitLab プロジェクトセキュリティダッシュボード](https://gitlab.com/gitlab-org/gitlab/-/security/dashboard/?project_id=278964&scope=dismissed&page=1&days=90)
- [進行中の Issue を追跡するセキュリティ Issue ボード（HackerOne その他）](https://gitlab.com/groups/gitlab-org/-/boards/1216545?label_name[]=security)
- [最新リリース](https://gitlab.com/gitlab-org/gitlab/-/tags)
- [プロジェクトメンバー権限の概要](https://gitlab.com/help/user/permissions)
- [DevOps ステージとそれぞれのグループ](/handbook/product/categories/)。このページには開発チーム、注力領域、チームメンバーに関する情報が含まれています。
- [所有しているグループ別の製品機能のリスト](/handbook/product/categories/features/)
- [`gitlab-org` でマージされたセキュリティ Issue 一覧](https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&state=merged&label_name[]=security&milestone_title=%23upcoming)。**注:** セキュリティミラー `gitlab-org/security/` の結果が含まれる場合があります。
- Application Security KPI とその他のメトリクス - [セクション、ステージ、グループでフィルタ可能な埋め込み KPI](https://10az.online.tableau.com/#/site/gitlab/views/appsectest2rawdata/AppSec-ApplicationandContainerVulnerabilityDashboard?:iid=4)。
- マイルストーン計画 - GitLab Application Security チームはマイルストーンを中心に作業を計画します。[このページでそのプロセスの説明を確認できます](/handbook/security/product-security/security-platforms-architecture/application-security/milestone-planning/)

上記のリストは網羅的ではなく、私たちのプロセスが進化し続けるにつれて変更される可能性があります。

## ミーティング録画

以下の録画は社内のみで利用可能です:

- [AppSec Sync](https://drive.google.com/drive/folders/1sxnBhPNDofWg5JmKqrhEl5y4_aWldTbt)
- [AppSec Leadership Weekly](https://drive.google.com/drive/folders/1jyNYP2AOqoOPqr4qGMuh7PGha_j-7brb)

## コンテンツのレビューと更新

このページは、会社および部門の優先事項、GitLab セキュリティ製品ロードマップ、関連するビジネスおよび運用上の変更との整合性を確保するため、四半期ごとにレビューされます。ビジネスオペレーションが進化するにつれて、より頻繁に更新が行われる場合もあります。

*次回予定レビュー: 2025年6月30日*
