---
title: "Runner"
description: "GitLab Runner チームページ。"
upstream_path: /handbook/engineering/devops/runner/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-06T10:00:00Z"
translator: claude
stale: false
---

## ビジョン

2025 年までに、GitLab Runner に関して私たちが掲げるビジョンは、大規模環境でのセットアップと日常運用がほぼゼロフリクションな体験になることです。

## ミッション

私たちのミッションは、あらゆるコンピューティングプラットフォーム上で GitLab CI/CD ジョブを効率的に実行できるよう組織を支援し、あらゆる規模において運用効率が高く高度なセキュリティを持つ方法でそれを実現することです。

## チーム構成

Verify:Runner は 2 つのチームで構成されています。

- [CI Functions Platform](/handbook/engineering/devops/runner/ci-functions-platform/_index.md)
- [Runner Core](/handbook/engineering/devops/runner/runner-core/_index.md)

### CI Functions Platform

{{< team-by-manager-slug manager="nicole-williams" team="(Principal|Functions)" >}}

### Runner Core

{{< team-by-manager-slug manager="adebayo_a" >}}

### Runner Leadership

{{< team-by-manager-slug manager="nicole-williams" team="(Principal|Manager)" >}}

## 連絡方法

Slack

- [`#runner_help`](https://gitlab.slack.com/archives/CBQ76ND6W)
- [`#g_runner_core`](https://gitlab.slack.com/archives/C09EDQXBMPH)
- [`#g_ci_functions_platform`](https://gitlab.slack.com/archives/C09HJ2UL9L4)

サポート依頼:
お客様のサポート依頼については、Request for Help プロジェクトで [Issue を作成](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Runner)してください。

## Stable Counterpart

カウンターパートの包括的なリストについては、[Runner プロダクトカテゴリー](/handbook/product/categories/#runner-group)を参照してください。

## 技術ビジョン

Runner Core および CI Functions Platform チームの優先事項と技術ロードマップは、[Runner technical vision](/handbook/engineering/architecture/design-documents/runner_technical_vision/) によって導かれています。これは、GitLab Runner があらゆる規模での CI/CD ワークロードを容易にインストール・設定・実行できるよう進化していくためのアーキテクチャ設計図です。

## 私たちの働き方

### 優先順位付けフレームワーク

私たちのチームは、いくつかの重要な要因に基づいて作業の優先順位付けとスケジュールを行うという明確なコミットメントを維持しています（優先度順）。

- **強制優先付け Issue**（infradev、セキュリティ、可用性）は最優先としてただちにリソースを割り当てます
- **重大なバグ解決** によって品質と信頼性を維持します
- **戦略的方向性に沿った機能** で長期ビジョンを推進します
- **技術的負債の削減** によって持続的な開発速度を確保します
- **メンテナンス活動** でシステムの健全性を保ちます
- **コミュニティコントリビューション** によりユーザーへ価値を届け、コントリビューターのエンゲージメントをサポートします

このフレームワークにより、リソース配分の意思決定を導き、GitLab Runner の信頼性、セキュリティ、継続的な進化において最も重要なものに集中できるようにします。

## 共有責任

Runner Core グループと CI Functions Platform グループは自律的に運営されますが、メンテナンスのオーバーヘッドを分散するために特定の責任については協力しています。

### リリース

各イテレーションの終わりに、Runner および関連プロジェクトをリリースします。リリースプロセスは [releases プロジェクトの README](https://gitlab.com/gitlab-org/ci-cd/runner-tools/releases/-/blob/main/README.md) にドキュメント化されています。

[リリース済み Runner バージョンのリスト](https://gitlab.com/gitlab-org/gitlab-runner/-/wikis/Released-runner-versions)を Runner プロジェクトの wiki でメンテナンスしています。

#### リリースマネージャーローテーション

各マイルストーンで、[team-tasks プロジェクト](https://gitlab.com/gitlab-com/runner-group/team-tasks/-/issues?sort=created_date&state=opened&first_page_size=100)に Issue が自動作成され、そのイテレーションのリリースマネージャーとして 1 名のエンジニアが割り当てられます。この自動化は [team-tasks-release-rotation プロジェクト](https://gitlab.com/gitlab-org/ci-cd/runner-tools/team-tasks-release-rotation)で管理されています。

生成された各 Issue には、リリースプロセスを完了するための詳細な手順が含まれています。割り当てられたチームメンバーが担当期間中にオフィスを離れる予定の場合は、代替を見つける責任があります。

### メンテナンスローテーション

Runner チームには、サポート、トリアージ、コミュニティへのエンゲージメント活動について一貫したカバレッジを確保するため、毎週ローテーションするメンテナンスアサインメントがあります。

#### 仕組み

毎週、その週の役割割り当てを含む Issue が [team-tasks プロジェクト](https://gitlab.com/gitlab-com/runner-group/team-tasks/-/issues)に自動作成されます。チームメンバーは、ワークロードのバランスを取り、全員がチーム運営のあらゆる側面に精通し続けるために、自動的に異なる責任にローテーションされます。

#### 責任

各セクションの詳細な手順は、チームタスクジェネレーターの [Issue テンプレート](https://gitlab.com/gitlab-org/ci-cd/runner-tools/runner-team-task-issue-generator/-/blob/main/template.md?ref_type=heads)で確認できます。

| タスク | 説明 |
| ------ | ------ |
|    **🐛 Bug Wrangler 🤠**     |   入ってくるバグをトリアージし、適切な重要度と優先度のラベルが付いていることを確認する責任があります。     |
|   **🛟 Support & Security Responder 🚒**     |    入ってくるセキュリティ脆弱性とサポート依頼の監視、ラベル付け、対応を行う責任があります。セキュリティレビュープロセスの詳細は、チームリソースページで確認できます。    |
|     **🥷 Merge Marauder 🏴‍☠️**    |    コミュニティコントリビューターからのマージリクエストがタイムリーに対応されるよう確認する責任があります。    |
|     **💬 Community Contribution Triager 📌**    |    新しいコミュニティコントリビューションの初期トリアージを担当します。    |

#### あなたのアサインメントを確認する

担当を確認するには、[team-tasks プロジェクト](https://gitlab.com/gitlab-com/runner-group/team-tasks/-/issues)でその週の Issue をチェックしてください。Issue は毎週月曜日にその週のローテーションスケジュールとともに自動作成され、週を通して担当業務の完了を追跡するためのチェックボックスが含まれています。

## チームリソース

[専用ページ](/handbook/engineering/devops/runner/team-resources/#overview)を参照してください。
