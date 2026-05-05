---
title: "カスタムツールとドッグフーディング"
description: "Developer Experience のカスタムツールとドッグフーディングのプラクティス"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/custom-tooling-and-dogfooding/"
upstream_sha: "6a459a3ca969603754a3b5133342edb804d3012c"
translated_at: "2026-04-28T16:51:32Z"
translator: claude
stale: false
---

GitLab は[ドッグフーディング](/handbook/values/#dogfooding)を広範に実践しています。Developer Experience ステージは GitLab の機能ギャップを埋えるためにカスタムツールを構築し、内部ニーズと製品開発の間に貴重なフィードバックループを生み出しています。

## カスタムデータ ↔ カスタムツールループ

長年にわたり、GitLab の不足した機能に対してカスタムツールを構築してきました（triage-ops、テストヘルス管理、CI 観測可能性、ジョブ内メトリクス）。このカスタムツールは GitLab の本番データベースには含まれない**カスタムデータ**を生成します。

**カスタムツールを製品機能として統合することで、以下を達成します:**

- 顧客にメリットをもたらす機能（カスタマーゼロとして役立てば、他の人にも役立つ可能性が高い）
- カスタムデータが製品データになり、可視化でデフォルトで利用可能
- カスタムソリューションの維持に伴う技術的負債の削減
- すべての改善が顧客と内部チームの両方にメリットをもたらす

## 現在のカスタムツール

### CI/CD パイプライン観測可能性

| ツール | 目的 | リポジトリ | ステータス | 製品としての可能性 |
|------|---------|------------|--------|-------------------|
| **CI Alerts** | パイプラインの失敗とパフォーマンス問題のリアルタイムアラート | [ci-alerts](https://gitlab.com/gitlab-org/quality/analytics/ci-alerts) | アクティブ | 高 — ネイティブパイプラインアラートになる可能性 |
| **CI/CD Pipelines Observability** | パイプラインビジュアライザー、失敗の分類、カスタムメトリクスのための CI ログスクレイピング、テストをファーストクラスの市民として扱い、ランナーの改善を必要とする包括的な分析 | [Epic #22](https://gitlab.com/groups/gitlab-org/quality/analytics/-/epics/22)、[Pipeline Visualizer](https://pipeline-visualizer-gitlab-org-quality-engineeri-bcf92e4999c4df.gitlab.io/) と[製品に追加するための Issue](https://gitlab.com/gitlab-org/gitlab/-/work_items/508903)、[Failure Categories](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/doc/failure_categories.md) | アクティブ | 高 — ランナーエピックと製品のネイティブテスト概念が必要 |
| **Snowflake Observability** | GitLab.com の運用とパフォーマンスのカスタムダッシュボードと分析 | [snowflake-dashboard-sql](https://gitlab.com/gitlab-org/quality/analytics/snowflake-dashboard-sql) | アクティブ | 高 — 製品に直接統合できる可能性 |

### トリアージと Issue 管理の自動化

| ツール | 目的 | リポジトリ | ステータス | 製品としての可能性 |
|------|---------|------------|--------|-------------------|
| **Triage Ops (Reactive)** | カスタムポリシーとリアクティブエンジンを使用したリアルタイムの自動化された Issue と MR トリアージ | [triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops) | アクティブ | 高 — 高度なリアルタイムトリアージ自動化 |
| **Triage Ops (Scheduled)** | 週次チームレポートとバッチ処理を含むスケジュールされたトリアージ操作 | [triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops) | アクティブ | 高 — 多くの顧客にメリットをもたらす可能性（例: 週次チームレポート） |

### レビューとコード品質ツール

| ツール | 目的 | リポジトリ | ステータス | 製品としての可能性 |
|------|---------|------------|--------|-------------------|
| **GitLab Roulette** | ドメインの専門知識、可用性、ワークロードを考慮したインテリジェントなレビュアー割り当てシステム | [gitlab-roulette](https://gitlab-org.gitlab.io/gitlab-roulette/) | アクティブ | 高 — コア開発者ワークフローの改善 |
| **GitLab Danger Files** | 標準化された CI ベースのコードレビュー自動化とポリシー適用 | [gitlab-dangerfiles](https://gitlab.com/gitlab-org/ruby/gems/gitlab-dangerfiles) | アクティブ | 高 — 高度なマージリクエスト自動化を実証 |
| **Renovate Bot** | GitLab プロジェクト全体の自動化された依存関係管理 | [renovate-gitlab-bot](https://gitlab.com/gitlab-org/frontend/renovate-gitlab-bot) | アクティブ | 高 — 複数のチームが類似のソリューションを構築、明確な製品ニーズ |

### テストヘルスと品質管理

| ツール | 目的 | リポジトリ | ステータス | 製品としての可能性 |
|------|---------|------------|--------|-------------------|
| **Flaky Tests Management** | ジョブアーティファクトからの RSpec レポート解析、自動化されたテスト動作分析、テストヘルス追跡のための GitLab Issue 作成、GCS/Snowflake へのデータパイプライン | [gitlab_quality-test_tooling](https://gitlab.com/gitlab-org/ruby/gems/gitlab_quality-test_tooling) | アクティブ | 高 — 製品にネイティブテスト結果の概念がない |
| **Slow Tests Management** | テストパフォーマンスインサイトのためのカスタムフロントエンド/バックエンドを使用した RSpec プロファイリングと分析 | [RSpec profiling stats](https://gitlab-org.gitlab.io/rspec_profiling_stats/)、[gitlab_quality-test_tooling](https://gitlab.com/gitlab-org/ruby/gems/gitlab_quality-test_tooling) | アクティブ | 中 — 構築済みだがチームの採用/反応が限定的 |

### インシデントとプロセス管理

| ツール | 目的 | リポジトリ | ステータス | 製品としての可能性 |
|------|---------|------------|--------|-------------------|
| **Main Branch Broken Process** | 自動化された特定、インシデント管理、レスポンス、リバート MR 処理 | [broken main branch workflow](/handbook/engineering/workflow/#broken-master) | アクティブ | 高 — 安定したメインブランチを維持するための重要なワークフロー |

### データと分析インフラ

| ツール | 目的 | リポジトリ | ステータス | 製品としての可能性 |
|------|---------|------------|--------|-------------------|
| **Data Pipelines** | Snowflake ダッシュボードと分析にフィードするカスタムデータ処理パイプライン | [test_tooling project](https://gitlab.com/gitlab-org/ruby/gems/gitlab_quality-test_tooling)、各種 GCS バケット、[internal events](https://docs.gitlab.com/development/internal_analytics/internal_event_instrumentation/)、[Snowflake SQL queries](https://gitlab.com/gitlab-org/quality/analytics/snowflake-dashboard-sql)、[alerting](https://gitlab.com/gitlab-org/quality/analytics/ci-alerts) | アクティブ | 中 — 製品に直接統合できる可能性 |
