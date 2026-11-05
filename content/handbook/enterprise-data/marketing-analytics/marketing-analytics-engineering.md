---
title: Marketing Analytics - Analytics Engineering
description: >-
  Marketing Analytics の Analytics Engineer は、Central Data Team（CDT）と Marketing/Marketing Analytics の間の窓口および連絡役として機能しながら、Marketing Analytics チームおよび Marketing 組織全体を直接支援して SQL コードを開発・改善・精緻化します。
upstream_path: "/handbook/enterprise-data/marketing-analytics/marketing-analytics-engineering/"
upstream_sha: "ab93800e4c241789ac67785899fa20ffa1eb0854"
translated_at: "2026-11-05T14:38:43.466178+00:00"
translator: claude
stale: false
lastmod: "2026-11-04T20:19:30+01:00"
---

## <i class="far fa-newspaper"></i>目標 {#goal}

Marketing Analytics の Analytics Engineering（Robert Kohnke）と関わる際に使用する、明確で簡潔かつ効率的なプロセスを持つこと。

## <i class="far fa-paper-plane"></i>エンゲージメントプロセス / ヘルプのリクエスト方法 {#engagement-processhow-to-request-help}

この情報は、コアページの[Marketing Analytics - 作業方法](_index)セクションに追加されるものです。矛盾する情報がある場合、このページの情報がコアページよりも優先されます。

1. [Marketing Analytics プロジェクト](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/new)で Issue を開き、`MktgAnalytics-Data-Ops` ラベルを付けてください。
1. テンプレート `analytics_engineer_request` に記入して、Issue と対象タスクの対応を迅速に進め、リクエスト者と担当者の間の不要なやり取りをなくしてください。
   1. 主な対象者: Marketing Analytics チーム

## <i class="fas fa-tasks"></i>責任領域 {#areas-of-responsibility}

**所有**

1. モデルの作成、完成、修正、改善/標準化
   1. 例: Lead 2 Revenue モデルの作成、ABM Influence コードベースの調整、標準 SQL スニペット/リポジトリの作成、Marketing 向けの RAW/Source テーブルからの新しい EDM モデルの構築
1. Central Data Team との連携（Analytics Eng の定期的なやり取り）の主要連絡先 - MS&A チームの Issue が優先順位付けられ対応されていることを確認し、チームが取り組んでいるプロジェクトを支持する
   1. 例: CDT との MR の作成・更新、処理/完了
   1. 例: CDT と連携して BATP スナップショットとコホート分析を構築する
1. DBT、Tableau、Snowflake で使用するコードの作成、更新、レビュー
   1. 例: 一般的なコードレビュー: ABM、DG influenced、Marketing Pipe; 最終的には Tableau 固有のモデルとモデルのサブセットの作成

**サポート**

1. 必要に応じて既存コードの維持とバグ修正のサポート
   1. 例: 必要に応じたチームのコードのトラブルシューティング
1. 一般的なコーディング - ヘルプ、サポート、作業、作成
   1. 例: 新しいものを構築したり既存のものを改善したりするためのコーディングレビュー/ディスカッション
