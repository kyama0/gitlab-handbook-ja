---
title: "ステーブルブランチ"
upstream_path: "/handbook/engineering/releases/stable_branches/"
upstream_sha: 3640c397d2bcb6ef7ae2c76b0a6996a33b51592e
translated_at: "2026-11-03T21:11:48.175692+00:00"
translator: claude
stale: false
lastmod: "2026-11-03T10:14:54+01:00"
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
