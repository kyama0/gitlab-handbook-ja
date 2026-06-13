---
title: "People Analytics"
description: "GitLab People Analytics チームハンドブックページ"
upstream_path: /handbook/people-group/people-ops-tech-analytics/people-analytics/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-12T09:20:53-04:00
translated_at: "2026-06-12T21:15:15Z"
translator: claude
stale: false
---

## 概要

People Analytics は、データに基づくインサイトを活用して、GitLab における人材の意思決定とワークフォースのプロセスを改善します。私たちは People Strategy チームの一員として、レポーティング、データソリューション、統計分析を通じて、あらゆる組織レベルでの People Group の意思決定に役立つ情報を提供します。

## People Analytics チームメンバー

- [Shane McCormack](https://gitlab.com/mccormack514): [Manager, People Analytics](/job-description-library/people-group/people-systems-and-analytics/#manager-people-analytics)

## 私たちの活動

**私たちのミッション:** 組織、人、人材に関するデータを収集・分析してビジネス成果を改善することで、GitLab 全体の People に関する意思決定に役立つデータインサイトを提供します。

**主要な目標:**

- **レポーティングソリューション** - ステークホルダーと協力して、関連する People の指標を効率的かつ正確に提供する自動化されたレポーティングソリューションを開発します
- **データソリューション** - [データチーム](/handbook/enterprise-data/)と協力して、レポーティングと分析を支えるスケーラブルなデータモデルを構築します
- **分析ソリューション** - 高度な統計手法（クラスタリング、回帰、生存時間分析）を適用して、GitLab 全体の People Group とリーダーシップ向けに、実行可能なインサイトとデータに基づく意思決定を生み出します

## ツールとリソース

### 主要なツール

- **Tableau** - データの可視化、ダッシュボード、アドホック分析
- **RStudio/R** - 統計モデリングとデータクレンジング。詳細は [Rstudio ハンドブックページ](/handbook/enterprise-data/platform/rstudio/) を参照してください
- **Snowflake** - データウェアハウスと SQL 探索
- **Culture Amp** - 従業員サーベイとアセスメント
- **Google Sheets** - 必要に応じたステークホルダー固有のソリューション

### People Analytics ハンドブックの内容

- [People Analytics データガイド](data-guide.md) - データモデルと指標の定義
- [People データガバナンス](/handbook/people-group/people-ops-tech-analytics/people-analytics/data-governance/) - データ品質とコンプライアンス
- [People Analytics Tableau ダッシュボード概要](/handbook/people-group/people-ops-tech-analytics/people-analytics/people-tableau/) - 一般的なダッシュボードと使い方
- [People Analytics サーベイサポート](/handbook/people-group/people-ops-tech-analytics/people-analytics/survey-support/) - Culture Amp サーベイの運用
- [People Analytics オフィスアワー](/handbook/people-group/people-ops-tech-analytics/people-analytics/office-hours/) - 協力し、質問する方法

### 外部リソース

- [Wharton People Analytics](https://wpa.wharton.upenn.edu/) - 年次カンファレンスとリサーチ
- [AIHR People Analytics](https://www.aihr.com/blog/people-analytics-resource-library/) - HR と分析のリソース
- [HR Predictive Analytics](https://www.koganpage.com/hr-learning-development/predictive-hr-analytics-9781398615656) - 実践的な例を含む教科書
- [Google re:Work](https://rework.withgoogle.com/en/subjects/people-analytics) - 入門リソース
- [Handbook of Regression Modeling in People Analytics](https://peopleanalytics-regression-book.org/index.html) - Keith McNulty によるオープンソースの回帰モデリングの書籍。R と Python の例を掲載
- [Handbook of Graphs and Networks in People Analytics](https://ona-book.org/index.html) - Keith McNulty による組織ネットワーク分析（Organizational Network Analysis）のためのオープンソース書籍
- [The Fundamentals of People Analytics](https://link.springer.com/content/pdf/10.1007/978-3-031-28674-2.pdf?pdf=button) - Craig Starbuck によるオープンソース書籍。People Analytics チームが一般的に用いる統計分析の例を R で掲載

## データガバナンスとセキュリティ

透明性と効率性に対する GitLab のコミットメントは、私たちのデータガバナンスのフレームワークにも及んでいます。People Analytics チームは、People チームおよび Legal チームと緊密に協力し、使用を許可されたデータのみにアクセスすることを確実にしています。私たちのプロセスには、すべてのデータリクエストに対するアクセスの検証とステークホルダーの承認が含まれており、適用される法令や規制への厳格なコンプライアンスを維持しています。

**コアとなるガバナンス原則:**

- **ソースシステム優先** - People Group の日々の業務は、データの整合性とワークフローの効率を保つため、引き続きソースシステム上で行います
- **戦略的なデータウェアハウジング** - [dbt](/handbook/enterprise-data/platform/dbt-guide/) や [Snowflake](/handbook/enterprise-data/platform/snowflake/) などの技術上に構築された私たちのデータウェアハウスは、上位・対外向け（up and out）の組織レポーティングと分析のために確保されています
- **データの最小化** - 私たちはレポーティングに必要なデータのみを取り込み、個人のプライバシーを保護するために可能な限り情報を匿名化します
- **包括的なトラッキング** - 私たちはソースシステムから下流のすべてのシステムに至るまでデータを追跡し、データライフサイクル全体を通じてリスクを理解し、軽減します

このガバナンスのフレームワークにより、機微な情報を保護しながら、データの一貫性と信頼性を保ち、扱いやすい状態に保ちます。データガバナンスのプロセスに関する詳細は、[データガバナンスのハンドブックページ](data-governance.md) を参照してください。

## 私たちと一緒に働く

[People Analytics プロジェクト](https://gitlab.com/gitlab-com/people-group/people-analytics/general/) の Issue テンプレートを使って、リクエストやアイデアを送信してください。
