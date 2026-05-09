---
title: "Application Security"
description: Application Securityのホームページ
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---
<!-- markdownlint-disable MD052 -->
最終更新日: 2025年5月27日

## Application Securityミッション

**Product Application Securityサブ部門は、GitLabのエンジニアおよびプロダクトチームと協力し、設計および開発時に脆弱性が混入することを予測・防止し、GitLabのお客様が信頼できる高品質なソフトウェアの提供を実現します。また、[Coordinated Vulnerability Disclosure（協調的脆弱性開示）プラクティス](https://about.gitlab.com/security/disclosure/)を通じて報告された、GitLab製品およびサービスで発見されたセキュリティ脆弱性を特定、評価、対応します。**

## 価値提案

Application Securityサブ部門は、DevSecOpsエンジニアリングと方法論の運用適用、ならびにデータインサイトとセキュリティコンサルテーションを提供し、GitLabのエンジニアが機能性と市場投入速度を維持しながら、お客様に高品質でセキュアな製品とサービスを容易に提供できるようにします。

## スコープと責任範囲

私たちは、伝統的なDevSecOpsプログラムの文脈で開発者UXを重視する5つの柱に作業を組織しています。これをSecure Developer eXperience(SDX)と呼びます。

- **SDX: Learn**: セキュリティトレーニング、ガバナンス、ポリシー、ドキュメント、標準。
- **SDX: Design**: [脅威モデリング](threat-modeling/_index.md)、機能設計のガイダンスとコンサルテーション、[設計レビュー](appsec-reviews.md)。
- **SDX: Code**: 静的解析、ソフトウェアコンポーネント解析とサプライチェーンセキュリティ、開発における承認済みツールおよび方法論の使用、安全でない関数の非推奨化など。
- **SDX: Verify**: 動的解析テスト、ペネトレーションテスト、重大な脆弱性の修正、リリース前の[最終セキュリティレビュー](appsec-reviews.md)。
- **SDX: Maintain**: インシデント対応計画の策定、[Coordinated Vulnerability Disclosure](https://about.gitlab.com/security/disclosure/)の管理、[バグバウンティプログラムの運営](https://hackerone.com/gitlab?type=team)、重大なプロダクトセキュリティインシデント対応の[リリース](https://about.gitlab.com/releases/categories/releases/)およびリリース後のオペレーション。

Application Securityサブ部門には、[*Secure Design & Developmentチーム*](appsec-operations/sdd-services.md)と[*Product Security Incident Response Team (PSIRT)*](appsec-operations/psirt-services.md)の2つのチームがあります。

### 共有される責任とコラボレーション

Application Securityチームは、Securityディビジョン全体の他のいくつかのチームと連携し、GitLabのエンジニアにとって機能するエンドツーエンドのセキュリティソリューションを提供します。以下の戦略的セキュリティプログラムには、Securityディビジョンおよび会社全体に複数のステークホルダーが存在します。

#### サプライチェーンセキュリティ

Application Securityの責任は[SD&D](appsec-operations/sdd-services.md)と[PSIRT](appsec-operations/psirt-services.md)の両方によって共有されます。サプライチェーンセキュリティに関与するその他のProduct Securityチームには、[Security Platforms & Architecture](../../security-platforms-architecture/)、[脆弱性管理](vulnerability-management.md)、[Infrastructure Security](../../infrastructure-security/)が含まれます。

#### Dogfooding

Application Securityの責任は、私たちの作業でGitLabセキュリティ製品を使用し、Product SecurityのDogfooding DRIである[Security Platforms & Architectureチーム](../../security-platforms-architecture/)を通じて、実用的なCustomer Zeroフィードバックの提供に参加することです。

#### 脆弱性管理

Application Securityチームの責任は、[SD&D](appsec-operations/sdd-services.md)と[PSIRT](appsec-operations/psirt-services.md)の両方によって共有されます。[脆弱性管理](../../vulnerability-management/)が脆弱性管理ツールの開発と実装のDRIです。

#### Secure by design

Secure Design and Developmentチームの責任は機能に焦点を当てており、[脅威モデリング](threat-modeling/_index.md)と[機能設計レビュー](appsec-reviews.md)を通じて脅威を評価します(SDX: Design)。[Security Platforms & Architectureチーム](../../security-platforms-architecture/)は全社的な脅威モデリング戦略のDRIであり、AppSecはこの戦略の重要なステークホルダーです。

#### セキュリティレスポンス

[Product Security Incident Response Team](appsec-operations/psirt-services.md)の責任は、重大かつ悪用可能な脆弱性をトリアージし技術的に評価し、会社および顧客のリスクを判断し、これらの問題に関する外部とのコミュニケーションを調整することです。PSIRTには、社内全体に渡る複数のパートナーがいます。

- [Security Operations](/handbook/security/security-operations/)はインシデントコマンドおよび脅威検出(IOC、TTP)のDRIです
- [Security Research](/handbook/security/product-security/security-platforms-architecture/security-research/)は悪用可能性とPOC開発における重要なパートナーです
- [PRおよびコミュニケーション](/handbook/security/external-security-communications-procedure/)
- [Legal](/handbook/legal/)
- [Delivery](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/)
- [カスタマーサポート](/handbook/security/customer-support-operations/)

## スコープ外

- [SBOMの生成](/handbook/security/security-assurance/security-compliance/sbom-plan/)
- コンテナスキャン
- [セキュリティスキャナーの検出結果に関する顧客エスカレーション](/handbook/security/product-security/vulnerability-management/customer-scan-review-requests.md)
- [セキュリティコンプライアンス](/handbook/security/security-assurance/)

## Application Security組織

[チーム組織](appsec-organization.md)を確認して、私たちが作業をどのように計画し、毎日どのリポジトリを使用しているかを理解してください。

## お問い合わせ

チームメンバーは、以下の方法でAppSecチームに連絡できます。

- GitLabで `@gitlab-com/gl-security/product-security/appsec` をメンションする
- [AppSecチームリポジトリ](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues)にIssueを提出する
- Slackで `#security_help` で質問するか、`@appsec-team` をメンションする
- クロスチームコラボレーション改善の機会については、[コラボレーション改善機会用のこのテンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/new?issuable_template=cross-team-collaboration-improvement)を使用する

## FY26主要重点領域

FY26における主な重点領域は以下のとおりです。

**組織のレベルアップ:**

- [Product Security Incident Response Team (PSIRT)](appsec-operations/psirt-services.md)の確立
- [Security Design & Development](appsec-operations/sdd-services.md)チームのサービスを大規模に拡大

**会社および[ディビジョン](/handbook/security/)の優先事項のサポート:**

- 認可と認証
- AIセキュリティと安全性
- サプライチェーンセキュリティ
- [Security Interlock](../../security-platforms-architecture/security-interlock/)

## FY26メトリクス

Application SecurityはFY26にオペレーショナルなビジネスヘルスメトリクスを再構築しています。これらのメトリクスは、Key Risk Indicators、プロジェクトレベルのメトリクス、サブチーム固有のメトリクスに加えて存在します。これらの多くについては、メトリクスの計装とレポートのメカニズムがまだ準備中です。チームが成熟するにつれて、これらのメトリクスは進化し、このページで共有されます。

## AppSecエンジニアに役立つリソース

### PTO

5日以上のPTOを取得するチームメンバーは、可視性と適切なチームのオペレーションカバレッジを確保するため、スケジュールを組む前にマネージャーと休暇について話し合い、**かつ** [PTOカバレッジIssueを作成](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/new?issuable_template=pto_coverage)して休暇中のカバレッジを整理する必要があります。PTOカバレッジIssueには次の内容を記載してください。

- PTO中にチームに来る可能性のあるリクエストをリストアップ
- PTOを取得するチームメンバーは、それに応じて作業を整理し、PTOカバレッジIssueに作業を処理するために必要なコンテキストが含まれていることを確認する
- 主担当および副担当のチームメンバーを割り当てる

AppSecチームメンバーはPTO中の人の作業をカバーするために重要な情報を追加し、AppSecマネージャーは復帰時に確認すべき重要なお知らせを追加してください。

### 役割と責任

[Application SecurityのJob Familyページ](/job-description-library/security/application-security)を参照してください。

### 便利なクイックリンク

- [他のプライベートサブグループとプロジェクトを含むAppSecプライベートグループ](https://gitlab.com/gitlab-com/gl-security/product-security/appsec)
- [Staging環境上の `appsec-lab` グループ。Ultimateライセンス付き。](https://staging.gitlab.com/appsec-lab)
- [Bug Bounty Council検索](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/bug-bounty-reviewers/bug-bounty-council/-/issues)
- [Bug Bounty Councilアーカイブ(2025年11月以前)](https://gitlab.com/gitlab-com/gl-security/security-department-meta/-/issues?scope=all&state=opened&label_name[]=Bug+Bounty+Council)
- [今後のパッチリリース](https://gitlab.com/gitlab-org/gitlab/-/issues?sort=created_date&state=opened&label_name%5B%5D=upcoming+security+release)
- [GitLabプロジェクトセキュリティダッシュボード](https://gitlab.com/gitlab-org/gitlab/-/security/dashboard/?project_id=278964&scope=dismissed&page=1&days=90)
- [進行中のIssueを追跡するセキュリティIssueボード(hackeroneなど)](https://gitlab.com/groups/gitlab-org/-/boards/1216545?label_name[]=security)
- [最新リリース](https://gitlab.com/gitlab-org/gitlab/-/tags)
- [プロジェクトメンバー権限の概要](https://gitlab.com/help/user/permissions)
- [DevOpsステージとそれぞれのグループ](/handbook/product/categories/)。このページには、開発チーム、それぞれの注力領域、チームメンバーに関する情報が記載されています。
- [グループごとに所有する製品機能の一覧](/handbook/product/categories/features/)
- [`gitlab-org` でマージされたセキュリティIssueの一覧](https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&state=merged&label_name[]=security&milestone_title=%23upcoming)。**注意:** セキュリティミラー `gitlab-org/security/` からの結果が含まれる場合があります。
- [Application Security KPIとその他のメトリクスダッシュボード(社内)](https://10az.online.tableau.com/#/site/gitlab/views/appsectest2rawdata/AppSec-ApplicationandContainerVulnerabilityDashboard?:iid=4)。セクション、ステージ、グループでフィルタリング可能な埋め込みKPIを含みます。

上記のリストは網羅的ではなく、私たちのプロセスが進化するにつれて修正されます。

## 主要リソース

- [Application Securityレビュー](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/)
- [重大な脆弱性の根本原因分析](/handbook/security/root-cause-analysis)
- [Application Security Engineer Runbooksインデックス](runbooks)

## バックログレビュー

バックログレビューが必要な場合は、[脆弱性管理手順書](/handbook/security/product-security/security-platforms-architecture/application-security/vulnerability-management/)で定義されているプロセスに従ってください。

## GitLab Secureツールカバレッジ

[Dogfooding活動](/handbook/product/product-processes/dogfooding-for-r-d/)の一環として、
[Application Securityツール](https://docs.gitlab.com/ee/user/application_security/)は多くの異なるGitLabプロジェクトでセットアップされています([私たちのポリシー](/handbook/security/product-security/security-platforms-architecture/application-security/inventory/#policies)を参照)。
このリストはこのページに含めるには動的すぎるため、現在は[GitLab AppSecインベントリ](/handbook/product/ux/navigation/inventory/)で管理されています。

期待される構成のないプロジェクトは、[インベントリ違反リスト](https://gitlab.com/gitlab-com/gl-security/product-security/inventory/-/issues)(社内リンク)で確認できます。

## GitLabインベントリ

[GitLab AppSecインベントリ](/handbook/product/ux/navigation/inventory/)についてさらに学んでください。

## 顧客スキャンレビューリクエストへの対応

脆弱性管理チームが現在、顧客スキャンレビューリクエストを処理しています。詳細は[Customer Scan Reviewプロセス](/handbook/security/product-security/vulnerability-management/customer-scan-review-requests/)を参照してください。

## Reproducible Vulnerabilities

GitLabの[Reproducible Vulnerabilities](/handbook/security/product-security/security-platforms-architecture/application-security/reproducible-vulnerabilities/)を使用して、実例を用いてセキュリティ問題を特定または修正する方法を学んでください。

## Reproducible Builds

GitLabがビルドプロセスのために[Reproducible Builds](/handbook/security/product-security/security-platforms-architecture/application-security/reproducible-builds/)をどのように実装しているかを学んでください。

## Application Securityの自動化とモニタリング

Application Securityチームが使用している[自動化とモニタリングのイニシアチブ](/handbook/security/product-security/security-platforms-architecture/application-security/application-security-automation-monitoring/)を確認してください。

## コンテンツのレビューと更新

このチャーターは、会社およびディビジョンの優先事項、GitLab Security製品ロードマップ、関連するビジネスおよびオペレーション上の変更との整合性を確保するため、四半期ごとにレビューされます。ビジネスオペレーションが進化するにつれて、更新がより頻繁に行われる場合があります。

*次回予定レビュー: 2025年6月30日*
