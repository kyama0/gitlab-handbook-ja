---
title: "Python スチュワードシップ ワーキンググループ"
description: "GitLab 内での Python 開発の集約"
status: completed
upstream_path: "/handbook/company/working-groups/python-stewardship/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-19T15:20:08+00:00"
---


## 属性

| プロパティ         | 値              |
|------------------|-----------------|
| 作成日            | 2024-11-01 |
| 目標終了日         | 2025-03-01 |
| エピック           | https://gitlab.com/groups/gitlab-org/-/epics/15580 |
| Slack            | #wg_python-stewardship（社内からのみアクセス可能） |
| Google Doc       | アジェンダ（https://docs.google.com/document/d/1gs-OrjjyfxQ3BDaKxOXcrMuUl3z1jmsxGmbdmEgIBF8/edit?tab=t.dma9z3zh8fwb）（社内からのみアクセス可能） |
| ミーティングカレンダー | カレンダー（https://calendar.google.com/calendar/u/0?cid=Y18xZWE4ZTViZWZiYmUzMDk0MDgzNGJiZWViMWY1NTFlODVjNWQ0NzQwZDc0MzJhMWQyMDkzOWQ4MzU0YjhkNjU3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20）（社内からのみアクセス可能） |

## 目標

- GitLab 内での Python 開発を集約し、高品質な Python コードベースの開発に対して開発者が自信を持てるようにします。
- Python のサービスやライブラリを GitLab でどのように作成・維持・デプロイするかについて、意見のあるガイドラインを提供することで、開発者の意思決定を簡素化します。
- Python コードベースへの貢献を希望する、または必要とする開発者のトレーニングのためのリソース（コース、メンタリング）を定義します。

## 背景

Python は長年にわたり小規模で会社に存在していましたが、AI インフラの進化により Python は私たちのプロダクトの重要な部分になりました。しかし、その周辺の開発文化はまだ集約されていません。

その結果、開発者は Python コードの書き方、Python コードのレビュー方法、新機能の設定方法について混乱しています。Ruby の開発者もコードベースの理解とコントリビューションにおいてサポートの不足を感じています。Ruby コードベースと Python コードベースの重要な違いの一つは、Python コードベースがより分散していることです：単一のリポジトリではなく、各エリアを担当する複数のリポジトリが存在します。

既存の Python コードベースの例：

- AI Gateway https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/
- Prompt ライブラリ https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library
- Duo Workflow サービス https://gitlab.com/gitlab-org/duo-workflow/duo-workflow-service

## 主要マイルストーン

- 17.7 - ワーキンググループのキックオフ
- 17.8 - ドキュメントへの貢献
- 17.9 - Python サービス、ライブラリ、リンティングおよびユーティリティのテンプレートを定義する

## 完了基準

| 基準 |  DRI |
| :---- | :---- | :---- |
| Python 以外の開発者が Python コードベースの理解とコントリビューション方法についてのガイダンスを得られる | @mhamda |
| Python コードベース作成のガイドラインとテンプレート（アウトカムに記載）がマージされている | @tle_gitlab |
| Python コードベースのコードレビューとメンテナーシップのガイドラインがマージされている | @brytania |
| 3 種類のアプリケーションタイプそれぞれのデプロイガイドライン | @eduardobonet |

## アウトカム

ドキュメントとプロセス：

- Python 以外の開発者向けトレーニング
- 開発ガイドライン
  - リポジトリの種類：
    - Python サービス（AIGW、ワークフロー）
    - Python ユーティリティ（CEF）
    - ライブラリ
  - コードベースの作成
  - 認証
  - テストガイドライン
- コードレビューとメンテナーシップのガイドライン
- デプロイガイドライン
  - Python サービス（AIGW、ワークフロー）
  - Python ユーティリティ（CEF）
  - ライブラリ

開発者エクスペリエンス：

- 共通セットアップの抽出
  - リンター
  - フレームワーク
  - コード構造
  - デプロイ用 CI

## 役割と責任

| ワーキンググループの役割 | 担当者 | 役職 |
|-----------------------|-----------------------|--------------------------------|
| エグゼクティブスポンサー | Tim Zallmann | VP of Engineering |
| ファシリテーター | Eduardo Bonet | Staff Fullstack Engineer, Custom models |
| メンバー | Fred de Gier | Staff Fullstack Engineer, MLOps |
| メンバー | Alejandro Rodríguez | Senior Backend Engineer, AI Framework |
| メンバー | Alexander Chueshev | Staff ML Engineer, AI Framework |
| メンバー | Tan Le | Staff ML Engineer, Model Validation |
| メンバー | Stephan Rayner | Senior ML Engineer, Model Validation |
| メンバー | Tetiana Chupryna | Senior Backend Engineer, Duo Chat |
| メンバー | Mohamed Hamda | Senior Backend Engineer, Custom models |
| メンバー | Dylan Bernardi | Backend Engineer, Editor Extensions |
| メンバー | Shola Quadri | Associate Backend Engineer, Code Creation |
| メンバー | Vitali Tatarintev | Senior Backend Engineer, Code Creation |
| メンバー | Mikołaj Wawrzyniak | Staff Backend Engineer, Agent Foundations（借受） |
| メンバー | Ryan Egesdahl | Senior Distribution Engineer, Distribution Build |

## 同期録画

- https://www.youtube.com/playlist?list=PL05JrBw4t0KpgQYHyThWFSHkRQWoDgcWT

### 対象外

- AI Gateway の進化は、この WG の提案に関連していますが、スコープ外です。
- データサイエンスのユースケース（新しい ML モデルを開発するためのコードなど）はシステム開発とは大きく異なり、それ固有のガイドラインセットが必要です。
