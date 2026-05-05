---
title: "GitLab における Analytics Engineering"
description: "GitLab Analytics Engineering チームのハンドブック"
upstream_path: "/handbook/enterprise-data/organization/analytics-engineering/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T12:40:32Z"
translator: claude
stale: false
---

Analytics Engineering チームのミッションは、信頼性が高くスケーラブルなデータソリューションでビジネス上の意思決定と戦略のインパクトを**最大化**することです。

私たちは、すべての GitLab チームが[**データ成熟度**](https://internal.gitlab.com/handbook/enterprise-data/direction/#current-data-maturity)を高められるよう支援することでこれを実現しています。その際、私たちの[**GitLab バリュー**](/handbook/values/)と[**Data Team の原則**](/handbook/enterprise-data/organization/principles/)に従います。

## Analytics Engineering の責務

**Analytics Engineering チーム**は以下の事項に**直接責任**を持ちます:

- 50以上のソースから単一のアナリティクスプラットフォームへデータを統合・整合する
- エンタープライズグレードのレポーティングとアナリティクスを支援する dbt データモデルにビジネスロジックを組み込む

さらに、**Analytics Engineering チーム**は以下の責務を支援します:

- **データリーダーシップ**と連携して:
  - GitLab のデータアセットの価値を最大化するためのデータ戦略を策定・公開する
  - データ成果物・進行中のイニシアティブ・今後の計画について定期的な更新情報を発信する
- [**Data Platform チーム**](/handbook/enterprise-data/organization/engineering/#data-platform-responsibilities)と連携して:
  - すべての機能チームのレポーティング・分析・ディメンショナルモデリング・データ開発を支援する会社の中央エンタープライズデータウェアハウスを構築・維持する
- **データガバナンスおよび品質チーム**と連携して:
  - GitLab のデータシステムにおけるデータ品質の実践とプログラムを定義・推進する
- **データサイエンスおよびエンタープライズアナリティクスチーム**と連携して:
  - すべての人がデータとアナリティクスを活用できるセルフサービスのデータ機能を提供する

## Analytics Engineering の組織構成

Analytics Engineering 組織は以下のサブチームで構成されています:

- GTM Analytics Engineering
- R&D Analytics Engineering
- Finance Analytics Engineering
- People Analytics Engineering

## Analytics Engineering のセレモニー

各サブチームには以下のセレモニーがあります。サブチームに合ったケイデンスで実施でき、サブチームの合意に基づいて非同期または同期のアプローチを採用することができます。他の柱のセレモニーへの参加はオプションです。チームメンバーは、参加が価値をもたらすと判断した場合には他の柱のセレモニーに参加することを推奨します。

- バックログリファインメント同期
- イテレーション計画同期
- サブチームミーティング
- Analytics Engineering 機能チーム同期（全サブチーム参加）

## Analytics Engineering のプロセス

- トリアージはエンタープライズデータチームのトリアージプロセスに従います。これは P1-Ops Issue の主要な受付プロセスです。

## Analytics Engineering のリーダーシップロール

- マネージャー（データ）は、[シニアマネージャー、データのジョブファミリー](/job-description-library/marketing/enterprise-data/manager-data/#senior-manager-data)に記載されているとおり、サブチームにリーダーシップを提供します。

- リードアナリティクスエンジニア（ビジネスのステーブルカウンターパート）

  - リードアナリティクスエンジニアは、[シニアアナリティクスエンジニア](/job-description-library/marketing/enterprise-data/analytics-engineer/#senior-analytics-engineer-responsibilities)のジョブ責務から以下の責務を果たします:
  - Go To Market・リサーチ＆開発・一般管理・財務アナリティクス・エンジニアリングアナリティクスのいずれかのビジネス機能において、1つ以上のステークホルダーとの関係を担当する。
  - マネージャー（データ）とともに主要な成果の Co-DRI を務める。
  - OKR の[作業分解](/handbook/enterprise-data/how-we-work/planning/#work-breakdowns)セッションをリードする。
  - 機能ステークホルダーと連携して `P3-Other` Issue を優先順位付けする。
  - Data Team プロジェクトのプライマリまたはバックアップのメンテナーを担う。マージリクエストの最終レビュー・フィードバック・承認を行う。
  - 週次スタンドアップをレビューし、チームメンバーのブロック解除や質問への回答など、必要に応じてサポートを行う。
