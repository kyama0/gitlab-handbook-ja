---
title: "Ops 品質の向上"
description: "将来のインシデントを軽減するための重要なテストギャップに取り組み、開発者がテストカバレッジを効率的に進められるよう支援します"
upstream_path: "/handbook/company/working-groups/improve-ops-quality/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
---

## 属性

| プロパティ        | 値           |
|-----------------|-----------------|
| 作成日    | 2021年3月3日 |
| 目標終了日 | 2021年7月7日  |
| Slack           | [#wg_improve-ops-quality](https://join.slack.com/share/zt-mvpz7iqd-JHTWucxR3YiCayWM~A25Vg)（社内からのみアクセス可能） |
| Google Doc      | [ワーキンググループアジェンダ](https://docs.google.com/document/d/11iNJ9-KslGfDr6NtVeimLNSa1kWK_2k4uc2wxS4Baw4/edit)（社内からのみアクセス可能） |
| タスクボード      | [Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/2448760) |

## ビジネス目標

開発者がテストカバレッジを効率的に進められるよう支援し、不足しているテストインフラとテストカテゴリーを特定・対処し、リスクの高い製品カテゴリーのテストギャップを埋めることで、将来のインシデントを軽減します。

### 開始基準

1. [リスクの高い製品グループを特定する](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/76328)。

### 終了基準（100% 完了）

1. 過去 3 ヶ月間のすべての高深刻度インシデントを分析し、必要な改善テーマをリストアップする（例：混合デプロイメント、新しいステージング、負荷テスト、ユニットテスト以外のより良いテスト）。`=> 100%`

   - [パッケージインシデントのレビュー](https://gitlab.com/gitlab-org/gitlab/-/issues/323340)
   - [Pipeline Execution/Runner インシデントのレビュー](https://gitlab.com/gitlab-org/gitlab/-/issues/324364)
   - [Runner 実行可能 E2E 環境](https://gitlab.com/gitlab-org/ci-cd/tests/runner-incept)

1. Runner 実行可能 E2E テスト環境を追加する `=> 100%`
1. リスクの高い Runner 機能のテストカバレッジを追加する `=> 100%`
1. [PE 向けの負荷テスト環境を設定する](https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/832) `=> 100%`
1. Package グループ向けの新しいスモークテストで重要なテストギャップに対処する `=> 100%`
1. プロセス、ドキュメント、オンボーディング、および今後のカルチャーを更新する。`=> 100%`

   - [PE](/handbook/engineering/devops/verify/pipeline-execution/risk-map/)、[Runner](/handbook/engineering/devops/runner/risk-map/)、および [Package](https://gitlab-org.gitlab.io/ci-cd/package-stage/risk-mapping/) のリスクマップを作成する `=> 100%`
   - [汎用リスクマッピングフレームワークを作成する](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/83300) `=> 100%`
   - トレーニング用のエンドツーエンド概要動画を 3 本作成する `=> 100%`
   - Package、Runner、PE のエンドツーエンドテストについてそれぞれ 1 名のメンテナーをトレーニングする `=> 100%`

### ワーキンググループ後の計画済み改善事項

ワーキンググループのスコープを超えて継続して取り組む必要がある、Ops 品質の継続的な改善に向けて特定された項目。

1. [Runner ステージング環境](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/27684)
1. [混合デプロイメントテスト環境](https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/888)
1. [Package とコンテナレジストリのパフォーマンステスト環境](https://gitlab.com/gitlab-org/gitlab/-/issues/328209)
1. Pipeline Execution のパフォーマンステストを追加する
1. E2E テストフレームワークでのトレーニングを受けた、または作業経験のある非 SET/EPE エンジニアのために `team.yml` に `e2e test contributor` ロールを追加する

### 役割と責任

| ワーキンググループの役割    | 担当者                | 肩書き                          |
|-----------------------|-----------------------|--------------------------------|
| エグゼクティブスポンサー     | Mek Stittri           | VP of Quality            |
| ファシリテーター           | Joanna Shih           | Quality Engineering Manager, Ops |
| 機能リード       | Sofia Vistas          | Sr. Software Engineer in Test, Package:Package |
| 機能リード       | Tiffany Rea           | Software Engineer in Test, Verify:Pipeline Authoring |
| 機能リード       | Zeff Morgan           | Sr. Software Engineer in Test, Verify:Runner |
| ステークホルダー           | Christopher Lefelhocz | VP of Development              |
| ステークホルダー           | Brent Newton          | Director of Infrastructure, Reliability |
| メンバー                | Kenny Johnston        | Sr. Director of Product Management, Ops |
| メンバー                | Sam Goldstein         | Director of Engineering, Ops   |
| メンバー                | Jackie Porter         | Group Manager, Product, Verify   |
| メンバー                | Dan Croft             | Sr. Manager, Engineering, Continuous Delivery |
| メンバー                | Darby Frey            | Sr. Manager, Engineering, Verify |
| メンバー                | Cheryl Li             | Backend Engineering Manager, Verify:Pipeline Execution |
| メンバー                | Elliot Rushton        | Backend Engineering Manager, Verify:Runner |
| メンバー                | Tanya Pazitny         | Interim Director of Quality Engineering |
| メンバー                | Nailia Iskhakova      | Sr. Software Engineer in Test, Enablement:Distribution |
