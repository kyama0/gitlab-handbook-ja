---
title: マーケティングアナリティクス - アナリティクスエンジニアリング
description: >-
  マーケティングアナリティクスのアナリティクスエンジニアは、中央データチーム（CDT）とマーケティング/マーケティングアナリティクスの間の窓口および連絡役として機能しながら、マーケティングアナリティクスチームおよびより広いマーケティング組織を直接支援してSQLコードを開発・改善・精緻化します。
upstream_path: "/handbook/enterprise-data/marketing-analytics/marketing-analytics-engineering/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-27T16:37:34+01:00"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## <i id="biz-tech-icons" class="far fa-newspaper"></i>目標

マーケティングアナリティクスのアナリティクスエンジニアリング（Robert Kohnke）と関わる際に使用する、明確で簡潔かつ効率的なプロセスを持つこと。

## <i id="biz-tech-icons" class="far fa-paper-plane"></i>エンゲージメントプロセス / ヘルプのリクエスト方法

この情報は、コアページの[マーケティングアナリティクス - 作業方法](_index)セクションに追加されるものです。矛盾する情報がある場合、このページの情報がコアページよりも優先されます。

1. [マーケティングアナリティクスプロジェクト](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/new)でIssueを開き、`MktgAnalytics-Data-Ops`ラベルを付けてください。
1. テンプレート`analytics_engineer_request`を記入して、Issue、目前のタスク、リクエスターと担当者間の冗長なやり取りを排除してください。
   1. 主な対象者: マーケティングアナリティクスチーム

## <i id="biz-tech-icons" class="fas fa-tasks"></i>責任領域

**所有**

1. モデルの作成、完成、修正、改善/標準化
   1. 例: Lead 2 Revenueモデルの作成、ABM Influenceコードベースの調整、標準SQLスニペット/リポジトリの作成、マーケティング向けのRAW/ソーステーブルからの新しいEDMモデルの構築
1. 中央データチームとのインターフェース（アナリティクスエンジニアのケイデンス）の主要連絡先 - MS&AチームのIssueが優先順位付けられ対応されていることを確認し、チームが取り組んでいるプロジェクトを支持する
   1. 例: CDTとのMRの作成・更新、処理/完了
   1. 例: CDTと連携してBATPスナップショットとコホート分析を構築する
1. DBT、Tableau、Snowflakeで使用するコードの作成、更新、レビュー
   1. 例: 一般的なコードレビュー: ABM、DG Influenced、マーケティングパイプ; 最終的にはTableau固有のモデルとモデルのサブセットの作成

**サポート**

1. 必要に応じて既存コードの維持とバグ修正のサポート
   1. 例: 必要に応じたチームのコードのトラブルシューティング
1. 一般的なコーディング - ヘルプ、サポート、作業、作成
   1. 例: 新しいものを構築したり既存のものを改善したりするためのコーディングレビュー/ディスカッション
