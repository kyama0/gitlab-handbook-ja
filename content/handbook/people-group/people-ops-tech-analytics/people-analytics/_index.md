---
title: "People Analytics"
description: "GitLab People Analytics チームハンドブックページ"
upstream_path: /handbook/people-group/people-ops-tech-analytics/people-analytics/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T18:43:26Z"
translator: claude
stale: false
lastmod: "2026-04-30T16:57:54+00:00"
---

## 概要

People Analytics は、データ駆動の洞察を使って GitLab のタレント意思決定と労働力プロセスを改善します。私たちは People Strategy チームの一部であり、レポート、データソリューション、統計分析を通じて、組織のすべてのレベルでピープルグループの意思決定を支援しています。

## People Analytics チームメンバー

- [Shane McCormack](https://gitlab.com/mccormack514): [Staff Analyst, People Analytics](/job-description-library/people-group/people-systems-and-analytics/#staff-analyst-people-analytics)

## 私たちが行うこと

**私たちのミッション:** 組織、ピープル、タレントデータを収集・分析して、ビジネス成果を改善するために、GitLab 全体のピープル意思決定を情報提供するためのデータ洞察を提供します。

**主要な目的:**

- **レポートソリューション** - ステークホルダーと協力して、関連するピープルメトリクスを効率的かつ正確に提供する自動レポートソリューションを開発する
- **データソリューション** - [Data Team](/handbook/enterprise-data/) と協力して、レポートおよびアナリティクスをサポートするためのスケーラブルなデータモデルを構築する
- **分析ソリューション** - 高度な統計手法（クラスタリング、回帰、生存分析）を適用して、ピープルグループおよび GitLab 全体のリーダーシップ向けに、実行可能な洞察とデータ情報に基づく意思決定を生成する

## ツール & リソース

### 主要ツール

- **Tableau** - データ可視化、ダッシュボード、アドホック分析
- **RStudio/R** - 統計モデリングとデータクリーニング。[Rstudio ハンドブックページ](/handbook/enterprise-data/platform/rstudio/) で詳細を学べます
- **Snowflake** - データウェアハウスと SQL 探索
- **Culture Amp** - 従業員調査と評価
- **Google Sheets** - 必要に応じてステークホルダー固有のソリューション

### People Analytics ハンドブックの内容

- [People Analytics Data Guide](data-guide.md) - データモデルとメトリクス定義
- [People Data Governance](/handbook/people-group/people-ops-tech-analytics/people-analytics/data-governance/) - データ品質とコンプライアンス
- [People Analytics Tableau Dashboard Overview](/handbook/people-group/people-ops-tech-analytics/people-analytics/people-tableau/) - 一般的なダッシュボードと使用方法
- [People Analytics Survey Support](/handbook/people-group/people-ops-tech-analytics/people-analytics/survey-support/) - Culture Amp 調査管理
- [People Analytics Office Hours](/handbook/people-group/people-ops-tech-analytics/people-analytics/office-hours/) - コラボレーションと質問の方法

### 外部リソース

- [Wharton People Analytics](https://wpa.wharton.upenn.edu/) - 年次カンファレンスと研究
- [AIHR People Analytics](https://www.aihr.com/blog/people-analytics-resource-library/) - HR とアナリティクスのリソース
- [HR Predictive Analytics](https://www.koganpage.com/hr-learning-development/predictive-hr-analytics-9781398615656) - 実践的な例を含む教科書
- [Google re:Work](https://rework.withgoogle.com/en/subjects/people-analytics) - 入門リソース
- [Handbook of Regression Modeling in People Analytics](https://peopleanalytics-regression-book.org/index.html) - Keith McNulty による R と Python のサンプル付きオープンソース回帰モデリング書
- [Handbook of Graphs and Networks in People Analytics](https://ona-book.org/index.html) - Keith McNulty による組織ネットワーク分析のオープンソース書
- [The Fundamentals of People Analytics](https://link.springer.com/content/pdf/10.1007/978-3-031-28674-2.pdf?pdf=button) - Craig Starbuck による People Analytics チームが一般的に使用する統計分析の R サンプル付きオープンソース書

## データガバナンス & セキュリティ

GitLab の透明性と効率へのコミットメントは、データガバナンスフレームワークに拡張されます。People Analytics チームは People および Legal チームと緊密に連携し、認可されたデータのみにアクセスすることを確保します。私たちのプロセスには、すべてのデータリクエストに対するアクセス検証とステークホルダーの承認が含まれ、適用される法律および規制への厳格な遵守を維持します。

**コアガバナンス原則:**

- **ソースシステム優先** - ピープルグループの日々のオペレーションは、データの整合性とワークフロー効率を維持するために、ソースシステムに留まります
- **戦略的データウェアハウジング** - [dbt](/handbook/enterprise-data/platform/dbt-guide/) および [Snowflake](/handbook/enterprise-data/platform/snowflake/) などの技術上に構築された当社のデータウェアハウスは、「up and out」の組織レポートおよびアナリティクス専用です
- **データ最小化** - レポートに必要なデータのみを取り込み、個人のプライバシーを保護するために、可能な限り情報を匿名化します
- **包括的な追跡** - データライフサイクル全体でリスクを理解し軽減するために、ソースシステムから全ダウンストリームシステムへのデータを追跡します

このガバナンスフレームワークにより、機密情報を保護しながら、データが一貫し、信頼でき、扱いやすい状態を保ちます。データガバナンスプロセスの詳細については、[Data Governance ハンドブックページ](data-governance.md) を参照してください。

## 私たちと一緒に働く

[People Analytics プロジェクト](https://gitlab.com/gitlab-com/people-group/people-analytics/general/) の Issue テンプレートを使用してリクエストとアイデアを提出してください。
