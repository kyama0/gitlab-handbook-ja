---
title: "Developer Experience ダッシュボード"
description: "このハンドブックページは、すべての Developer Experience ダッシュボードの詳細の中央リポジトリとして機能します"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/dashboards/"
upstream_sha: "60e1e842aebbbe87a0eecbd25b42d9650d13ed6a"
translated_at: "2026-10-06T22:25:54+00:00"
translator: codex
stale: false
lastmod: "2026-10-05T13:20:55-07:00"
---

> 耐障害性があり効率的で堅牢なプラットフォームを追求するにあたり、私たちのテストプラットフォームサブ部門は
> 多数のダッシュボードの作成と維持を通じて重要なサポートを提供しています。これらの重要なツールは、
> 環境全体の詳細なテストヘルスを把握し、パフォーマンスの異常をフラグし、
> 厳格なテストインフラに貢献します。

## ダッシュボード

|カテゴリ|リンク（内部のみ）|説明|DRI|
|---|---|---|---|
|CI メトリクス|[dx: CI Overview](https://dashboards.gitlab.net/d/dx-ci-overview)| プロジェクト別の CI パイプライン。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Pipeline Metrics](https://dashboards.gitlab.net/d/dx-pipeline-metrics)| 階層化パイプラインの概要。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Job Metrics](https://dashboards.gitlab.net/d/dx-job-metrics)| CI ジョブメトリクスの概要。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Failure Analysis Dashboard](https://dashboards.gitlab.net/d/dx-failure-analysis)| CI パイプラインの失敗分析。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Master-Broken Incident Detection](https://dashboards.gitlab.net/d/dx-master-broken-incident-detection)| Master-broken インシデント関連ダッシュボード。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Test Governance Key Metrics](https://dashboards.gitlab.net/d/dx-test-governance)| gitlab-org/gitlab の CI/CD パイプライン実行に関連する主要メトリクス。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
|テストメトリクス|[dx: Test Health](https://dashboards.gitlab.net/d/dx-test-health)| Flaky、Quarantine、Slow の各ピラーにわたるグループごとのテストスイート健全性スコア。[Test Health スコアの読み方](/handbook/engineering/infrastructure-platforms/developer-experience/development-health/test-health)。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Test Suite Overview](https://dashboards.gitlab.net/d/dx-suite-overview/dx3a-test-suite-overview)| テストスイートのヘルスとステータスの概要。|[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Predictive Tests](https://dashboards.gitlab.net/d/dx-predictive-tests)| 予測テストのメトリクス。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Quarantined Tests](https://dashboards.gitlab.net/d/dx-quarantined-tests)| 隔離されたテストの概要。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Test File Failure Overview](https://dashboards.gitlab.net/d/dx-test-file-failure-overview)| テストファイル別に集計されたすべてのテスト失敗。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Single Test Overview](https://dashboards.gitlab.net/d/dx-single-test-overview)| テストファイルごとの個別テストの概要。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Flaky Tests Overview](https://dashboards.gitlab.net/d/dx-flaky-tests-overview)| フレーキーテストの全般的な概要。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Flaky Test File Failure Overview](https://dashboards.gitlab.net/d/dx-flaky-test-file-overview)| テストファイル別のテスト失敗の概要。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Test File Runtime Overview](https://dashboards.gitlab.net/d/dx-test-file-runtime-overview)| テストファイルごとのランタイムの全般的な概要。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: E2E pipeline metrics](https://dashboards.gitlab.net/d/dx-e2e-metrics)| gitlab-org/gitlab の E2E テスト実行に関連する日次メトリクス。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
|コード & テストカバレッジ|[dx: Code Coverage Health Check](https://dashboards.gitlab.net/d/dx-code-coverage-health-check)| コードカバレッジのヘルス。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Source to Test Coverage](https://dashboards.gitlab.net/d/dx-source-to-test)| ソースファイルごとのコードカバレッジ概要。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Test to Source File Coverage](https://dashboards.gitlab.net/d/dx-test-to-source-file-coverage)| テストファイルごとのコードカバレッジ概要。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Coverage Actionables](https://dashboards.gitlab.net/d/dx-code-coverage-actionables)| テストカバレッジのギャップダッシュボード。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Coverage Infrastructure](https://dashboards.gitlab.net/d/dx-code-coverage-infrastructure)| テストカバレッジにおけるテストタイプの分布。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|
||[dx: Coverage Trends](https://dashboards.gitlab.net/d/dx-code-coverage-trends)| カテゴリ、ステージ、製品レベル別の時間経過によるカバレッジメトリクス。 |[Development Health](../../infrastructure-platforms/developer-experience/development-health)|

## ダッシュボードへの貢献

ダッシュボードについてご質問やご提案がある場合は、各 DRI にお問い合わせいただくか、[トラッキングシステム](https://gitlab.com/gitlab-org/quality/quality-engineering/team-tasks/-/issues/new)に Issue を提出してください。
