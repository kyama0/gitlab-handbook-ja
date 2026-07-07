---
title: Sec サブ部門の境界定義
description: "GitLab 製品の AST および SRM ステージにおいて、どのエンジニアリンググループが機能に責任を持つかの定義"
upstream_path: /handbook/engineering/development/sec/delineate-sec/
upstream_sha: e48b48a5e8c7635a5993b5836c0ca253812429d2
translated_at: "2026-07-06T07:58:23+09:00"
translator: codex
stale: false
lastmod: 2026-07-01T10:27:42+02:00
---

{{<devops-diagram "Application Security Testing"  "Security Risk Management">}}

## このページが存在する理由

明確でない場合に備え、各機能セットに [DRI](/handbook/people-group/directly-responsible-individuals/) を設けるという考え方に基づき、このページの目的は、製品のどの部分と特定の意思決定について、どのエンジニアリンググループが責任を持つかを明示的に定義することです。

## ページ/機能の責任

| ページ/機能 | PM | 主担当グループ | 例 |
| ---      | ---      | ---      | ---      |
| [Secure パートナーオンボーディングドキュメント](https://docs.gitlab.com/ee/development/integrations/secure_partner_integration.html) | {{< member-by-gitlab "abellucci" >}} | [カテゴリ別 Sec](/handbook/product/categories/#sec-section) |  |
| [セキュリティ設定](https://docs.gitlab.com/ee/user/application_security/configuration/) | | [カテゴリ別 Sec](/handbook/product/categories/#sec-section) |  |
| 脆弱性の取り込みと DB ストレージ | {{< member-by-gitlab "abellucci" >}} | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) |  |
| 依存関係の取り込みと DB ストレージ | {{< member-by-gitlab "abellucci" >}} | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) |  |
| [依存関係リスト](https://docs.gitlab.com/ee/user/application_security/dependency_list/) | {{< member-by-gitlab "abellucci" >}} | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) | [例](https://gitlab.com/gitlab-examples/security/security-reports/-/licenses#licenses) |
| [ライセンスコンプライアンスページ](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html) | {{< member-by-gitlab "abellucci" >}} | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) |  |
| [検出結果と脆弱性との対話](https://docs.gitlab.com/ee/user/application_security/index.html#interact-with-findings-and-vulnerabilities) | {{< member-by-gitlab "abellucci" >}} | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) |  |
| [マージリクエストセキュリティウィジェット](https://docs.gitlab.com/ee/user/application_security/#view-security-scan-information-in-merge-requests) | {{< member-by-gitlab "abellucci" >}} | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) | [例](https://gitlab.com/gitlab-org/security-products/tests/webgoat/-/merge_requests/26) |
| [マージリクエストライセンスコンプライアンスウィジェット](https://docs.gitlab.com/ee/user/application_security/dependency_list/index.html) | {{< member-by-gitlab "johncrowley" >}} | [Secure:Composition Analysis](/handbook/product/categories/#composition-analysis-group) | [例](https://gitlab.com/gitlab-org/security-products/tests/webgoat/-/merge_requests/28) |
| [パイプラインセキュリティタブ](https://docs.gitlab.com/ee/user/application_security/security_dashboard/#view-vulnerabilities-in-a-pipeline) | {{< member-by-gitlab "abellucci" >}} | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) | [例](https://gitlab.com/gitlab-org/security-products/tests/webgoat/-/pipelines/155052050/security) |
| [セキュリティダッシュボード](https://docs.gitlab.com/ee/user/application_security/security_dashboard/) | {{< member-by-gitlab "abellucci" >}} | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) | [例](https://gitlab.com/gitlab-examples/security/security-reports/-/security/dashboard) |
| [セキュリティスキャナー統合ドキュメント](https://docs.gitlab.com/ee/development/integrations/secure.html) | {{< member-by-gitlab "abellucci" >}} | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) |  |
| [脆弱性ページ](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/) | {{< member-by-gitlab "abellucci" >}} | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) | [例](https://gitlab.com/gitlab-examples/security/security-reports/-/security/vulnerability_report) |
| [脆弱性レポート](https://docs.gitlab.com/ee/user/application_security/vulnerability_report/) | {{< member-by-gitlab "abellucci" >}} | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) | [例](https://gitlab.com/gitlab-org/threat-management/webgoat/-/security/vulnerabilities) |
| [ポリシー](https://docs.gitlab.com/ee/user/application_security/policies/) | {{< member-by-gitlab "g.hickman" >}} | [Govern:Security Policies](/handbook/product/categories/#security-policies-group) | [例](https://gitlab.com/gitlab-examples/wayne-enterprises/wayne-financial/customer-web-portal/-/security/policies) |
| アドバイザリの取り込みと DB ストレージ| {{< member-by-gitlab "johncrowley" >}} | [Secure:Composition Analysis](/handbook/product/categories/#composition-analysis-group) |  |
| 外部ライセンスの取り込みと DB ストレージ | {{< member-by-gitlab "johncrowley" >}} | [Secure:Composition Analysis](/handbook/product/categories/#composition-analysis-group) |  |
| 脆弱性マッチジョブ | {{< member-by-gitlab "johncrowley" >}} | [Secure:Composition Analysis](/handbook/product/categories/#composition-analysis-group) |  |
| ライセンスマッチジョブ | {{< member-by-gitlab "johncrowley" >}} | [Secure:Composition Analysis](/handbook/product/categories/#composition-analysis-group) |  |
| [CVE ID リクエスト - ワークフローと自動化](https://docs.gitlab.com/ee/user/application_security/cve_id_request.html) | {{< member-by-gitlab "sarahwaldner" >}} | [Secure:Vulnerability Management](/handbook/product/categories/#secure-vulnerability-research-group) |  |
| [CVE ID リクエスト - プラットフォーム UI](https://docs.gitlab.com/ee/user/application_security/cve_id_request.html) | {{< member-by-gitlab "abellucci" >}} | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) |  |
| [ユーザー招待フロー](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project) | {{< member-by-gitlab "hsutor" >}} | [Govern:Authentication](https://about.gitlab.com/direction/software_supply_chain_security/authentication/) |  |

## 技術的な境界

エンドツーエンドの技術的ソリューションの所有権は複数のグループにまたがります。このセクションでは、[Threat Insights](/handbook/product/categories/#threat-insights-group) と [Sec セクション](/handbook/product/categories/#sec-section)の残りのグループ間で、コードアーティファクトのクロスグループメンテナーシップを明確にします。

所有権とは、担当グループが以下を行うことを意味します:

1. コードのメンテナンスに責任を持つ。
1. 関連するコードに紐づくエラーバジェットで帰属を受ける。
1. 変更前に相談を受け、マージ前にレビューするべきである。
1. 別のグループが導入した変更のメンテナンスと修正を依頼する際に優先される。

### プロジェクト/機能別のオーナー

これは包括的なリストではありませんが、Sec セクションの傘下にある主要なプロジェクトと機能領域を含みます。

#### 比較とトラッキングロジック

脆弱性を比較しトラッキングするロジックは Threat Insights が所有します。

すべてのレポートタイプに汎用的でないこのロジックのカスタマイズは、対応するグループが所有します（例: Static Analysis グループは SAST 脆弱性のトラッキング改善のメンテナーとなります）。

コードを所有するグループをすぐに特定できない場合があります。エラーバジェット、`CODEOWNERS`、コードコメント、その他の手段による帰属がない場合、Threat Insights がオーナーを特定し、必要に応じて適切なグループへ引き継ぎます。

#### セキュリティレポートスキーマ

[スキーマ](https://gitlab.com/gitlab-org/security-products/security-report-schemas/)は、対応するカテゴリを担当するアナライザーグループのバックエンドチームが所有します。

Threat Insights は[ベーススキーマ](https://gitlab.com/gitlab-org/security-products/security-report-schemas/-/blob/master/src/security-report-format.json)と[汎用詳細スキーマ](https://gitlab.com/gitlab-org/security-products/security-report-schemas/-/blob/master/src/vulnerability-details-format.json)を所有します。

たとえば、Static Analysis グループは SAST カテゴリに責任を持つため、そのバックエンドチームが [`sast` レポート JSON スキーマ](https://gitlab.com/gitlab-org/security-products/security-report-schemas/-/blob/master/src/sast-report-format.json)に責任を持ちます。

所有権に関係なく、Threat Insights はスキーマに準拠したレポートのコンシューマーであるため、すべての変更をレビューする必要があります。

誰にレビューを依頼するかの詳細については、プロジェクトの
[ガイドライン](https://gitlab.com/gitlab-org/security-products/security-report-schemas/-/blob/master/README.md#guidelines)を参照してください。

#### 脆弱性管理

これには[ページ/機能の責任](#pagefunction-responsibilities)で Threat Insights に割り当てられたすべての項目が含まれ、さらに以下も含まれます:

* データベース管理システムオブジェクト
* オブジェクトリレーショナルマッピング
* 統合ポイント
  * API
  * セキュリティレポート取り込みフレームワーク

#### AI 脆弱性説明と脆弱性解決

これらのワークフローは、[脆弱性ページ](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/)の一部として Threat Insights が所有します（上記参照）。
これには、モノリポへの統合、脆弱性ページでの表示、脆弱性解決のマージリクエストインターフェース、脆弱性説明のための Duo Chat への統合が含まれます。Threat Insights は、これらのチームが所有する領域への統合をサポートするため、[AI Core Infra](/handbook/engineering/ai/ai-core-infra/) および [Duo Chat](/handbook/engineering/ai/duo-chat/) と協力します。

脆弱性の種類に基づいて、脆弱性説明と脆弱性解決のプロンプト、テストデータセットのキュレーション、レスポンス品質の検証は、[Secure](/handbook/engineering/development/sec/secure/) の関連グループが所有します。これらのグループはプロンプトエンジニアリングのサポートのために必要に応じて [Vulnerability Research](/handbook/engineering/development/sec/secure/vulnerability-research/) および [AI Core Infra](/handbook/engineering/ai/ai-core-infra/) とコミュニケーション・協力します。これらの機能は現在 [SAST](/handbook/engineering/development/sec/secure/#sast) のみで利用可能です。

プロンプトは Secure のチームが所有していますが、プロンプトエンジニアリングは AI-Powered DevSecOps プラットフォームである GitLab におけるソフトウェア開発の重要な部分です。Threat Insights を含む Govern 内のチームは、これらの機能のプロンプトエンジニアリングをオンボーディングし、サポートできるようになること、またフォローザサンカバレッジを通じてモノリポ内のプロンプト更新を必要に応じて支援することが期待されます。

アプリケーション内のメトリクスと使用状況のモニタリングは Govern: Threat Insights が所有します。[関連 Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/464089)。
