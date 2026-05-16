---
title: "GitLab セキュリティ部門における AI ユースケース"
upstream_path: /handbook/tools-and-tips/ai/security_division_ai_usecases/
upstream_sha: c5d40e13183c5a0aeeafefbee88ab3fac48ced5a
translated_at: "2026-05-08T17:40:50Z"
translator: claude
stale: false
lastmod: "2026-02-06T19:27:57-05:00"
---

[セキュリティ部門](/handbook/security/) が [Claude](/handbook/tools-and-tips/ai/claude/) や [GitLab Duo](/handbook/tools-and-tips/ai/gitlab-duo/) などの AI プラットフォームを活用して、ワークフローの最適化、生産性の向上、手作業の自動化をどのように実現しているかをご紹介します。

## AI を活用するセキュリティツール

セキュリティ部門は、さまざまなツールや自動化に AI 機能を組み込んでいます。ほとんどのユースケースは、既存のツールや機能に AI 機能を統合することで、生産性を向上させ、手作業によるプロセスやタスクを自動化することを目的としています。

| ツール | AI エンジン | ユースケース | チーム |
|------|-----------|----------|------|
| [AI 支援によるインシデント報告](https://gitlab.com/gitlab-com/gl-security/security-operations/sirt/tines/-/issues/299) | Claude | 問題の簡単な説明に基づいてインシデントレポートフォームを事前入力することで、ユーザーがセキュリティ問題をより迅速かつ効率的に報告できるよう支援します。 | [Security Incident Response Team (SIRT)](/handbook/security/security-operations/sirt/) |
| [AppSec Assistant](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/assistant) | GitLab Duo | AI が開発 Issue をレビューし、設計時にセキュリティリスクを特定します。 | [Product Security Engineering](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/) ([Application Security](/handbook/security/product-security/security-platforms-architecture/application-security/) を代行) |
| [継続的コントロール監視プログラムの自動化](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance/team/-/tree/AWS-API-test/Continuous%20Control%20Monitoring/AWS?ref_type=heads) | Claude | リソース (AWS など) からのデータ取得、yaml ファイルからのポリシー取得、監査分析と結論の実行に使用するスクリプト全体を生成します ([こちら](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance/continous-control-monitoring-program/-/issues/2) に例があります)。 | [Security Compliance](/handbook/security/security-assurance/security-compliance/) |
| [gitlab-assistant 用テストケース生成](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-assurance-automation-subgroup/gitlab-assistant) |GitLab Duo | チーム全体で GitLab とのやり取りに関するソリューションのスクリプト作成を標準化する Python モジュール用に、基本的および複雑なテストケースを生成します。このモジュールは、基本的な API エンドポイントとのやり取りを超えるビジネスロジックを導入します。 | [Security Assurance](/handbook/security/security-assurance/) |
| [GitLab Duo による CVE 説明文生成](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/automation-team/h1bot/-/merge_requests/46) | GitLab Duo | インポートされた HackerOne レポートから CVE 説明文を生成し、必要に応じて当社の CVE で利用できます。 | [Application Security](/handbook/security/product-security/security-platforms-architecture/application-security/) |
| [インシデント要約 (/sirt_summary)](https://internal.gitlab.com/handbook/security/security_operations/sirt/platforms/slack/bots_commands/#sirtmanager) | Claude | Slack におけるインシデント要約のスラッシュコマンド。 | [Security Incident Response Team (SIRT)](/handbook/security/security-operations/sirt/) |
| [Sir Tanuki](https://internal.gitlab.com/handbook/security/security_operations/sirt/operations/incident_response/sirtanuki/) (SIRT インシデントレビューボット) | GitLab Duo | SecOps Incident Reviewer (Sir) Tanuki は、SIRT の GitLab Duo を活用したインシデントレポートレビューツールです。GitLab Duo を活用してセキュリティインシデント Issue を分析し、Issue 説明の各セクションについてフィードバックを提供します。 | [Security Incident Response Team (SIRT)](/handbook/security/security-operations/sirt/) |
| [TLDR Customer Threat Detections](https://gitlab.com/gitlab-com/gl-security/security-operations/signals-engineering-public/tldr) | Claude | Signals Engineering は Claude を使用して新しい TLDR 脅威検出を生成します。Slack のスラッシュコマンド (/tldr) を使うと、Claude が書いたレビュー用の新しいマージリクエストを起動できます。 | [Signals Engineering](https://internal.gitlab.com/handbook/security/security_operations/signals_engineering/) |
| [Signals Engineering Auto Metric Stats](https://gitlab.com/gitlab-com/gl-security/security-operations/signal-engineering/signal-engineering-automation/auto-sirt-metric-stats) | Claude | 毎週の SET ミーティング前に、Claude が SIRT エンジニアが過去 1 週間にアラートをクローズする際に残したコメントを自動要約し、毎週の検出ダイジェスト Issue に追加します。 | [Signals Engineering](https://internal.gitlab.com/handbook/security/security_operations/signals_engineering/) |

## AI 駆動のプロセス効率化

| プロセス | AI エンジン | 効率化の詳細 | チーム |
|------|-----------|----------|------|
|Tableau データ操作 | Claude |Claude を活用して Tableau の計算フィールドの構文を生成し、データ操作を可能にします。これらのフィールドにより、既存のデータを操作し、セキュリティメトリクスプログラムをサポートする新しいディメンションやメジャーを作成できます。 | Security Governance |
| ポリシー生成と最適化 | Claude | セキュリティおよびテクノロジーポリシーの基礎を作成し、ガバナンスの期待に沿うようポリシー言語の冗長性を減らします。 | Security Governance |
| セキュリティトレーニングコンテンツのスクリプト作成と編集 | Claude | AI で作成されたセキュリティトレーニング動画のスクリプト作成、およびセキュリティトレーニングコンテンツの読みやすさと簡潔さのための編集を行います。 | Security Governance |
| ブログとホワイトペーパーの最適化 | Claude | ブログ記事やホワイトペーパーの言語と読みやすさを最適化し、お客様やコミュニティに洗練された製品を提供します。 | Field Security |

## アイデア、実験、テスト

セキュリティ部門は、AI 統合のアイデア、実験、テストを追跡するために GitLab Issue を活用しています。一般的に、追跡のために Issue に `AI` ラベルを付けることが推奨されます。
