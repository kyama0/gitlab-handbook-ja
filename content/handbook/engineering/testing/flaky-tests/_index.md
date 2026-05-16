---
title: "フレーキーテスト"
upstream_path: /handbook/engineering/testing/flaky-tests/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-21T08:34:43+02:00"
---

## はじめに

このページでは、フレーキーテストの検出、レポート、および管理のためのGitLabの組織的なプロセスについて説明します。フレーキーテストのデバッグと修正に関する技術的なガイダンスについては、[不健全なテスト（開発者ドキュメント）](https://docs.gitlab.com/development/testing_guide/unhealthy_tests/)を参照してください。隔離手順と構文については、[隔離プロセス（ハンドブック）](../quarantine-process/)および[テストの隔離（開発者ドキュメント）](https://docs.gitlab.com/development/testing_guide/quarantining_tests/)を参照してください。

フレーキーテストとは、時折失敗するが、十分にリトライすれば最終的には通過するような、信頼性の低いテストのことです。フレーキーテストは、脆弱なテスト、不安定なテストインフラストラクチャ、または不安定なアプリケーションの結果である可能性があります。原因を特定し、品質を向上させてテスト結果への信頼を構築するために不安定さを取り除くよう努めてください。

## フレーキーテスト管理が重要な理由

- フレーキーテストはテスト結果を損ない、エンジニアがテスト失敗をフレーキーとして無視するようになります。
- フレーキーテストを通過させようとするための手動リトライや、テスト失敗としてフレーキーテストを調査するために必要な労力は、時間の大きな無駄です。
- 原因を素早く修正するか、テストスイートからテストを削除することでフレーキーテストを管理することで、価値を追加する場所でテスト時間とコストを使用できます。

## トップフレーキーテストファイルのレポート

GitLabはカスタムツールを使用して、CI/CDパイプラインをブロックする最も影響の大きいフレーキーテストファイルを自動的に特定してレポートします。[ci-alerts自動化](https://gitlab.com/gitlab-org/quality/analytics/ci-alerts)はパイプライン失敗を繰り返し引き起こすテストファイルのIssueを作成し、それらがエンジニアリングマネージャーにトリアージされて解決のために割り当てられます。

**すべてのトップフレーキーテストファイルIssueを表示:** [automation:top-flaky-test-fileラベル](https://gitlab.com/gitlab-org/quality/test-failure-issues/-/issues/?label_name%5B%5D=automation%3Atop-flaky-test-file)

### 仕組み

ci-alertsシステムはClickHouseからのテスト失敗データを分析して、パイプラインの安定性に最も高い影響を持つテストファイルを特定します。テストファイルを3つのカテゴリに分類します。

1. **フレーキー**: 3日以上にわたって失敗が広がり、まだアクティブに失敗している（最後の失敗から3日以内）
2. **マスターが壊れた**: 大量のインシデント（12時間以内に30件以上で40%以上の集中度、または60件以上）
3. **不明確**: 分類基準を満たしていない

分類アルゴリズムと設定に関する詳細な情報については、[ci-alertsフレーキーテストレポートドキュメント](https://gitlab.com/gitlab-org/quality/analytics/ci-alerts/-/blob/main/doc/flaky_tests_reporting.md)を参照してください。

### 頻度

トップフレーキーテストのIssueは毎週（日曜日の10:00 UTC）作成します

### トリアージプロセス

自動化によって作成されたIssueはDevelopment Analyticsチームによってトリアージされ、責任あるエンジニアリングマネージャーに振り分けられます。完全なトリアージワークフローは[ci-alerts TRIAGE.md](https://gitlab.com/gitlab-org/quality/analytics/ci-alerts/-/blob/main/TRIAGE.md)に文書化されています。

**主なステップ:**

1. 真のフレーキーさを確認するための初期トリアージ
2. EMのメンションとともに責任あるプロダクトグループへの振り分け

### エンジニアリングマネージャーへ

トップフレーキーテストファイルのIssueに割り当てられた場合:

1. **Issueの説明を確認する** - 影響メトリクス、Grafanaダッシュボードリンク、および推奨されるアクションが含まれています
2. **状況を評価する** - Grafanaダッシュボードを使用して失敗パターンを理解します
3. **アクションを取る** - タイムラインのガイダンスについては[緊急度ティアと応答タイムライン](#urgency-tiers-and-response-timelines)を参照してください

テストの隔離に関するガイダンスは、[隔離プロセス（ハンドブック）](../quarantine-process/)および[テストの隔離（開発者ドキュメント）](https://docs.gitlab.com/development/testing_guide/quarantining_tests/)を参照してください。

### 緊急度ティアと応答タイムライン

フレーキーテストはパイプラインの安定性への影響に基づいて緊急度によって分類されます。

- 重大: 48時間 - 重要なワークフロー、デプロイパイプラインをブロックするか、複数のチームに影響するテスト
- 高: 1週間 - パイプラインへの大きな影響を持つテスト
- 中: 2週間 - 中程度の影響を持つテスト

これらのタイムラインは、修正できない場合にテストをいつ隔離すべきかのガイドとなります。隔離手順と技術的な実装については、[隔離プロセス（ハンドブック）](../quarantine-process/)および[テストの隔離（開発者ドキュメント）](https://docs.gitlab.com/development/testing_guide/quarantining_tests/)を参照してください。

## 追加リソース

- [隔離プロセス（ハンドブック）](../quarantine-process/) - GitLabでの隔離されたテストの全体的なプロセス
- [不健全なテスト（開発者ドキュメント）](https://docs.gitlab.com/development/testing_guide/unhealthy_tests/) - フレーキーテストのデバッグと再現のための技術的なリファレンス
- [テストの隔離（開発者ドキュメント）](https://docs.gitlab.com/development/testing_guide/quarantining_tests/) - 隔離構文と実装のための技術的なリファレンス
- [フレーキーテストダッシュボード](https://dashboards.devex.gitlab.net/d/ddjwrqc/flaky-tests-overview)
