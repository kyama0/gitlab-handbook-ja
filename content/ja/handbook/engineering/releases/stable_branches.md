---
title: "ステーブルブランチ"
upstream_path: /handbook/engineering/releases/stable_branches/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

## 概要

ステーブルブランチは、GitLabのお客様に提供されるGitLabリリースパッケージのソースです。バージョン管理されたリリースの基盤として機能し、あらゆるGitLabリリースプロセス（マンスリー、パッチ、内部）において確実に信頼できる状態を保つことが基本です。

## 原則

- GitLabでは、ステーブルブランチをグリーンで信頼できる状態に保つことは全員の責任です。masterブランチの障害と同様に、ステーブルブランチの障害への対応は開発に関連するその他のすべてのことよりも優先されます。
- ステーブルブランチは[メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)に従ってバグ修正とセキュリティパッチを受け取ります。
- ステーブルブランチは維持管理の取り組みやキャッチアップ的な修正改善（パフォーマンスの改善、ドキュメントの更新、specの修正など）も受け取ることができます。

## ワークフロー

1. ステーブルブランチはマンスリーリリースの最初のリリース候補にタグが付けられるときに作成されます。
1. 作成後、ステーブルブランチはリポジトリミラーリングを通じて[security](https://gitlab.com/gitlab-org/security)および[dev](https://dev.gitlab.org/)リポジトリに自動的に伝播されます。
1. バグとセキュリティ修正は[メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)に基づいてステーブルブランチに[バックポート](/handbook/engineering/releases/backports)されます。
1. ステーブルブランチにバックポートされた変更は、GitLabバージョンとの互換性を保証するために[リリース環境](https://gitlab.com/gitlab-com/gl-infra/release-environments)に自動的にデプロイされます。
1. パッチリリースと内部リリースはステーブルブランチのコンテンツから作成されます。

## 特性

- ステーブルブランチのアクセス権限は[メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)に基づいています。[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)に関連付けられたステーブルブランチはGitLabメンテナーがマージできるようにオープンになっており、古いステーブルブランチはリリースマネージャーのみに制限されています。
- セキュリティ修正と[リリース環境](https://gitlab.com/gitlab-com/gl-infra/release-environments)を考慮して、セキュリティリポジトリがステーブルブランチのSSOTとなります。
- ステーブルブランチのテストは正規リポジトリとセキュリティリポジトリで同じですが、GitLabセキュリティリポジトリのみで利用可能なリリース環境を例外とします。

## ビルドインフラストラクチャ

リリースアーティファクトはミラーリングされたリポジトリから専用のCIランナーインフラストラクチャを使用してビルドされます。
どのミラーが存在するか、何がどこでビルドされるか、およびこのアーキテクチャの背後にある理由の詳細については、[ビルドインフラストラクチャドキュメント](../infrastructure-platforms/gitlab-delivery/build-infrastructure.md)を参照してください。

## 壊れたステーブルブランチ

ステーブルブランチのパイプラインが失敗した場合、[壊れたmasterインシデント](/handbook/engineering/workflow/#broken-master-escalation)と同じエスカレーションプロセスに従います。ただし、1つの重要な違いがあります: **インシデントはmaster-broken-incidentsプロジェクトではなく、[gitlab-org/release/tasks](https://gitlab.com/gitlab-org/release/tasks)プロジェクトに作成されます**。

**プロセスの概要:**

- オートメーションがステーブルブランチの障害を検出し、適切なグループ/カテゴリラベルを付けてインシデントを作成します
- Slack通知が帰属するグループチャンネルに送信されます
- masterの壊れたインシデントと同じトリアージ、エスカレーション、解決手順が適用されます
- インシデントは対処されない場合、同じ4時間のエスカレーションタイムラインに従います

エンジニアはステーブルブランチのインシデントをmaster-broken-incidentsと同じ優先度で扱う必要があります。これらは重要なリリースとセキュリティパッチをブロックする可能性があるためです。

## しきい値を超えたステーブルブランチ

- ステーブルブランチのパイプラインが[しきい値](https://gitlab.com/gitlab-org/quality/analytics/ci-alerts/-/blob/c2cf86eea7f0d566de0f9d8f9d9f3d904f073528/lib/shared/constants.rb#L22-26)（過去7日間）を超えると、**Issueが[正規](https://gitlab.com/gitlab-org/gitlab/-/issues?sort=created_date&state=opened&label_name%5B%5D=automation%3Apipeline-duration-threshold&label_name%5B%5D=automation%3Abot-authored&first_page_size=20)プロジェクトに作成され**、`automation:pipeline-duration-threshold`ラベルが付けられます。
- [daily_pipeline_thresholds](https://gitlab.com/gitlab-org/quality/analytics/ci-alerts/-/pipeline_schedules)はIssueの作成と、過去24時間のしきい値違反の更新を既存のIssueへのコメントとして実行する責任があります。
- Issueは最新の3つのステーブルブランチについて、ステーブルブランチとパイプラインティアの組み合わせに基づいて一意に作成されます。
