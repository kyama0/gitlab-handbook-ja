---
title: "ステーブルブランチ"
upstream_path: /handbook/engineering/releases/stable_branches/
upstream_sha: "322e725aa43e37884fdc7aeb27f1e822a696a656"
translated_at: "2026-10-22T21:12:48Z"
translator: claude
stale: false
lastmod: "2026-10-22T13:26:35+02:00"
---

## 概要 {#overview}

ステーブルブランチは、GitLab のお客様に提供される GitLab リリースパッケージのソースです。
バージョン管理されたリリースの基盤として機能し、あらゆる GitLab リリースプロセス（月次、パッチ、内部）で
信頼できる状態を保つことが不可欠です。

## 原則 {#principles}

- GitLab では、ステーブルブランチのテストを成功させ、信頼できる状態に保つことは全員の責任です。master ブランチの失敗と同様に、ステーブルブランチの失敗への対応は、開発に関連するほかのすべての作業より優先されます。
- ステーブルブランチには、[メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)に従ってバグ修正とセキュリティパッチが適用されます。
- ステーブルブランチには、維持管理の取り組みや、遅れていた修正・改善（パフォーマンス改善、ドキュメント更新、スペックの修正など）も適用できます。

## ワークフロー {#workflow}

1. ステーブルブランチは、月次リリースの最初のリリース候補にタグが付けられるときに作成されます。
1. 作成後、ステーブルブランチはリポジトリミラーリングを通じて[security](https://gitlab.com/gitlab-org/security)および[dev](https://dev.gitlab.org/)リポジトリに自動的に反映されます。
1. バグ修正とセキュリティ修正は、ステーブルブランチに[バックポート](/handbook/engineering/releases/backports)されます。これは[メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)に基づいて行われます。
1. ステーブルブランチにバックポートされた変更は、その GitLab バージョンとの互換性を保証するため、[リリース環境](https://gitlab.com/gitlab-com/gl-infra/release-environments)に自動的にデプロイされます。
1. パッチリリースと内部リリースは、ステーブルブランチの内容から作成されます。

## 特性 {#characteristics}

- ステーブルブランチの権限は、[メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)に基づきます。
[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)に関連付けられたステーブルブランチでは GitLab メンテナーがマージできますが、古いステーブルブランチでは Release Managers のみに制限されます。
- セキュリティ修正と[リリース環境](https://gitlab.com/gitlab-com/gl-infra/release-environments)を考慮し、security リポジトリがステーブルブランチの SSOT となります。
- ステーブルブランチのテストは canonical リポジトリと security リポジトリで同じです。ただし、GitLab security リポジトリでのみ利用できるリリース環境は例外です。

## ビルドインフラストラクチャ {#build-infrastructure}

リリースアーティファクトは、専用の CI ランナーインフラストラクチャを使い、ミラーリングされたリポジトリからビルドされます。
どのミラーが存在するか、何がどこでビルドされるか、このアーキテクチャを採用した理由の詳細については、
[ビルドインフラストラクチャのドキュメント](../infrastructure-platforms/gitlab-delivery/build-infrastructure.md)を参照してください。

## 壊れたステーブルブランチ {#broken-stable-branches}

ステーブルブランチのパイプラインが失敗すると、triage-ops が[gitlab-org/release/tasks](https://gitlab.com/gitlab-org/release/tasks)にインシデントを作成し、`#releases` に投稿します。壊れたステーブルブランチはパッチリリースやセキュリティリリースをブロックする可能性があるため、Release Managers がこれらのインシデントを監視します。これらは CI Health のインシデントではなく、自動的にはエスカレーションされません。

失敗のトリアージや修正を行うには、[インシデントを割り当てられた場合](/handbook/engineering/workflow/#triage-broken-master)の手順に従ってください。

## しきい値を超えたステーブルブランチ {#stable-branches-over-threshold}

- ステーブルブランチのパイプラインが[しきい値](https://gitlab.com/gitlab-org/quality/analytics/ci-alerts/-/blob/c2cf86eea7f0d566de0f9d8f9d9f3d904f073528/lib/shared/constants.rb#L22-26)を超えると（過去 7 日間）、**[canonical](https://gitlab.com/gitlab-org/gitlab/-/issues?sort=created_date&state=opened&label_name%5B%5D=automation%3Apipeline-duration-threshold&label_name%5B%5D=automation%3Abot-authored&first_page_size=20)プロジェクトに Issue が作成され**、`automation:pipeline-duration-threshold` ラベルが付けられます。
- [daily_pipeline_thresholds](https://gitlab.com/gitlab-org/quality/analytics/ci-alerts/-/pipeline_schedules)が Issue を作成し、過去 24 時間のさらなるしきい値違反も、既存の Issue へのコメントとして更新します。
- 最新の 3 つのステーブルブランチについて、ステーブルブランチとパイプラインティアの組み合わせごとに、一意の Issue が作成されます。
