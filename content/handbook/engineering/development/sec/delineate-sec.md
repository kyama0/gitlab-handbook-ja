---
title: Sec サブ部門の境界定義
description: "GitLab 製品の AST および SRM ステージにおける機能の責任を持つエンジニアリンググループの定義"
upstream_path: /handbook/engineering/development/sec/delineate-sec/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T05:48:28Z"
translator: claude
stale: false
lastmod: "2025-08-22T16:04:10+01:00"
---


<p class="my-3 text-sm text-gray-600 italic">DevOps ステージ図 (Application Security Testing · Security Risk Management)は <a href="https://handbook.gitlab.com" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## このページが存在する理由

明確でない場合に備え、各機能セットに [DRI](/handbook/people-group/directly-responsible-individuals/) を設けるという精神のもと、このページの目的は、どのエンジニアリンググループが製品のどの部分と特定の意思決定に責任を持つかを明示的に定義することです。

<span id="pagefunction-responsibilities"></span>

## ページ/機能の責任

| ページ/機能 | PM | 主担当グループ | 例 |
| ---      | ---      | ---      | ---      |
| [Secure パートナーオンボーディングドキュメント](https://docs.gitlab.com/ee/development/integrations/secure_partner_integration.html) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [カテゴリ別 Sec](/handbook/product/categories/#sec-section) |  |
| [セキュリティ設定](https://docs.gitlab.com/ee/user/application_security/configuration/) | | [カテゴリ別 Sec](/handbook/product/categories/#sec-section) |  |
| 脆弱性の取り込みと DB ストレージ | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) |  |
| 依存関係の取り込みと DB ストレージ | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) |  |
| [依存関係リスト](https://docs.gitlab.com/ee/user/application_security/dependency_list/) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) | [例](https://gitlab.com/gitlab-examples/security/security-reports/-/licenses#licenses) |
| [ライセンスコンプライアンスページ](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) |  |
| [検出結果と脆弱性との対話](https://docs.gitlab.com/ee/user/application_security/index.html#interact-with-findings-and-vulnerabilities) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) |  |
| [マージリクエストセキュリティウィジェット](https://docs.gitlab.com/ee/user/application_security/#view-security-scan-information-in-merge-requests) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) | [例](https://gitlab.com/gitlab-org/security-products/tests/webgoat/-/merge_requests/26) |
| [マージリクエストライセンスコンプライアンスウィジェット](https://docs.gitlab.com/ee/user/application_security/dependency_list/index.html) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Secure:Composition Analysis](/handbook/product/categories/#composition-analysis-group) | [例](https://gitlab.com/gitlab-org/security-products/tests/webgoat/-/merge_requests/28) |
| [パイプラインセキュリティタブ](https://docs.gitlab.com/ee/user/application_security/security_dashboard/#view-vulnerabilities-in-a-pipeline) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) | [例](https://gitlab.com/gitlab-org/security-products/tests/webgoat/-/pipelines/155052050/security) |
| [セキュリティダッシュボード](https://docs.gitlab.com/ee/user/application_security/security_dashboard/) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) | [例](https://gitlab.com/gitlab-examples/security/security-reports/-/security/dashboard) |
| [セキュリティスキャナー統合ドキュメント](https://docs.gitlab.com/ee/development/integrations/secure.html) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) |  |
| [脆弱性ページ](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) | [例](https://gitlab.com/gitlab-examples/security/security-reports/-/security/vulnerability_report) |
| [脆弱性レポート](https://docs.gitlab.com/ee/user/application_security/vulnerability_report/) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) | [例](https://gitlab.com/gitlab-org/threat-management/webgoat/-/security/vulnerabilities) |
| [ポリシー](https://docs.gitlab.com/ee/user/application_security/policies/) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Security Policies](/handbook/product/categories/#security-policies-group) | [例](https://gitlab.com/gitlab-examples/wayne-enterprises/wayne-financial/customer-web-portal/-/security/policies) |
| アドバイザリの取り込みと DB ストレージ | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Secure:Composition Analysis](/handbook/product/categories/#composition-analysis-group) |  |
| 外部ライセンスの取り込みと DB ストレージ | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Secure:Composition Analysis](/handbook/product/categories/#composition-analysis-group) |  |
| 脆弱性マッチジョブ | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Secure:Composition Analysis](/handbook/product/categories/#composition-analysis-group) |  |
| ライセンスマッチジョブ | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Secure:Composition Analysis](/handbook/product/categories/#composition-analysis-group) |  |
| [CVE ID リクエスト - ワークフローと自動化](https://docs.gitlab.com/ee/user/application_security/cve_id_request.html) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Secure:Vulnerability Management](/handbook/product/categories/#secure-vulnerability-research-group) |  |
| [CVE ID リクエスト - プラットフォーム UI](https://docs.gitlab.com/ee/user/application_security/cve_id_request.html) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Threat Insights](/handbook/product/categories/#threat-insights-group) |  |
| [ユーザー招待フロー](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project) | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/development/sec/delineate-sec/) を参照 | [Govern:Authentication](https://about.gitlab.com/direction/software_supply_chain_security/authentication/) |  |

## 技術的な境界

エンドツーエンドの技術的ソリューションの所有権は複数のグループにまたがります。このセクションでは、[Threat Insights](/handbook/product/categories/#threat-insights-group) と [Sec セクション](/handbook/product/categories/#sec-section)の残りのグループ間でのコードアーティファクトのクロスグループメンテナーシップを明確にします。

所有権とは、担当グループが以下の責任を持つことを意味します:

1. コードのメンテナンスに責任を持つ。
1. 関連コードに関連するエラーバジェットでの帰属を受ける。
1. 変更前に相談を受け、マージ前にレビューを行う。
1. 別のグループが導入した変更のメンテナンスと修正を要求する際に優先される。

### プロジェクト/機能別のオーナー

これは包括的なリストではありませんが、Sec セクションの傘下にある主要なプロジェクトと機能領域を含みます。

#### 比較とトラッキングロジック

脆弱性の比較とトラッキングのロジックは Threat Insights が所有します。

すべてのレポートタイプに汎用的でないこのロジックのカスタマイズは、対応するグループが所有します（例: Static Analysis グループは SAST 脆弱性のトラッキング改善のメンテナーとなります）。

コードを所有するグループを迅速に特定できない場合があります。エラーバジェット、`CODEOWNERS`、コードコメント、その他の手段による帰属がない場合、Threat Insights がオーナーを特定し、必要に応じて適切なグループに引き渡します。

#### セキュリティレポートスキーマ

[スキーマ](https://gitlab.com/gitlab-org/security-products/security-report-schemas/)は、対応するカテゴリを担当するアナライザーグループのバックエンドチームが所有します。

Threat Insights は[ベーススキーマ](https://gitlab.com/gitlab-org/security-products/security-report-schemas/-/blob/master/src/security-report-format.json)と[汎用詳細スキーマ](https://gitlab.com/gitlab-org/security-products/security-report-schemas/-/blob/master/src/vulnerability-details-format.json)を所有します。

たとえば、Static Analysis グループは SAST カテゴリに責任を持つため、そのバックエンドチームが [`sast` レポート JSON スキーマ](https://gitlab.com/gitlab-org/security-products/security-report-schemas/-/blob/master/src/sast-report-format.json)に責任を持ちます。

所有権に関係なく、スキーマに準拠したレポートのコンシューマーである Threat Insights はすべての変更をレビューする必要があります。

レビューを依頼する相手については、プロジェクトの[ガイドライン](https://gitlab.com/gitlab-org/security-products/security-report-schemas/-/blob/master/README.md#guidelines)を参照してください。

#### 脆弱性管理

これには[ページ/機能の責任](#pagefunction-responsibilities)で Threat Insights に割り当てられたすべての項目が含まれ、さらに以下も含まれます:

* データベース管理システムオブジェクト
* オブジェクトリレーショナルマッピング
* 統合ポイント
  * API
  * セキュリティレポート取り込みフレームワーク

#### AI 脆弱性説明と脆弱性解決

これらのワークフローは、[脆弱性ページ](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/)の一部として Threat Insights が所有します（上記参照）。これには、モノリポへの統合、脆弱性ページでの表示、脆弱性解決のマージリクエストインターフェース、脆弱性説明のための Duo Chat への統合が含まれます。Threat Insights は、これらのチームが所有する領域への統合をサポートするため、[AI Framework](/handbook/engineering/ai/ai-framework/) および [Duo Chat](/handbook/engineering/ai/duo-chat/) と協力します。

脆弱性の種類に基づいて、脆弱性説明と脆弱性解決のプロンプト、テストデータセットのキュレーション、レスポンス品質の検証は、[Secure](/handbook/engineering/development/sec/secure/) の関連グループが所有します。これらのグループはプロンプトエンジニアリングのサポートのために必要に応じて [Vulnerability Research](/handbook/engineering/development/sec/secure/vulnerability-research/) および [AI Framework](/handbook/engineering/ai/ai-framework/) とコミュニケーション・協力します。これらの機能は現在 [SAST](/handbook/engineering/development/sec/secure/#sast) のみで利用可能です。

プロンプトは Secure チームが所有していますが、プロンプトエンジニアリングは AI Powered DevSecOps プラットフォームである GitLab でのソフトウェア開発の重要な部分です。Threat Insights を含む Govern 内のチームは、オンボードしてこれらの機能のプロンプトエンジニアリングをサポートし、フォローザサンカバレッジを通じてモノリポ内のプロンプト更新に必要に応じて協力できることが期待されます。

アプリケーション内のメトリクスと使用状況の監視は Govern: Threat Insights が所有します。[関連 Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/464089)。
