---
title: "UX リサーチのためのプロダクト分析"
description: "ユーザーエクスペリエンスリサーチプロジェクトの一環としてプロダクト分析を使うことに関心のあるチームメンバー向けに、有用な情報とベストプラクティスを提供します。"
upstream_path: /handbook/product/ux/experience-research/product-analytics-for-ux-research/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T13:14:13+00:00"
---

このページは、ユーザーエクスペリエンスリサーチを実行したり情報源にしたりするために、GitLab の利用について収集しているデータを活用することに関心のあるチームメンバーのためのリソースとして機能することを目的としています。GitLab の内部構造、どんなデータがどこで利用可能か、そしてチームメンバーが始められるように役立つベストプラクティスやヒントなどの背景情報を提供します。

ここでの情報は UX リサーチを行う人のための近道として意図されたものですが、データに関する GitLab の能力の表面を引っかいているだけです。より詳細な情報については、[データチームのハンドブック](/handbook/enterprise-data/)を参照してください。

## プロダクト分析の状況を理解する

リサーチに必要な使用データに効率よくたどり着くためには、GitLab のデータと分析に関わるさまざまなツールとチームを理解することが重要です。

### ツール

_UX リサーチャーにとって関連性が高いものから低いものへ:_

- **Tableau** - Snowflake および Service Ping からのデータを分析・視覚化するための「フロントエンド」として使用しているビジネスインテリジェンス分析ツール。
- **Snowflake** - 主に構造化データの保存と分析に使用されるクラウドベースのデータウェアハウスプラットフォーム（つまり、イベントデータを格納するもの）。
- **Service Ping** - Self-Managed インスタンスでイベントトラッキングを行うために GitLab が構築したイベントトラッキングツール（つまり、GitLab Self-Managed でイベントを追跡するもの）。
- **Snowplow** - さまざまなソースからイベントレベルのデータを収集、処理、エンリッチするために使用されるオープンソースのイベントトラッキングプラットフォーム（つまり、GitLab.com でイベントを追跡するもの）。

### 役立つリンク

- [Tableau ワークブック](https://docs.google.com/document/d/10JoLjHSFCUvSzXXN_Fv4CFxj1yu07n5zZoAHka17qV4/edit#heading=h.unc286iee2a)（UX リサーチャーが有用と判断したワークブックのリスト）
- [Tableau ハンドブックページ](/handbook/enterprise-data/platform/tableau/)（Tableau に関する GitLab ハンドブックページ）
- [各プロダクトステージに関連する分析](/handbook/product/groups/product-analysis/crash-course/#learn-about-analytics-relevant-product-stage-topics-grouped-by-section)（プロダクトステージリソース用の GitLab ハンドブックページ）
- [GitLab Metrics Dictionary](https://metrics.gitlab.com/)（Service Ping と Snowplow から収集しているすべてのメトリクスをリストする Web サイト）
- [Data Catalog](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/)（よく使われるデータモデルの例を含む内部ハンドブックページ）
- [DBT](https://dbt.gitlabdata.com/#!/overview)（すべての GitLab データセットの基礎コードとカラム定義を説明）

上記の図は、[この文書](/handbook/enterprise-data/platform/)に基づいた GitLab の利用データスタックの簡略化されたバージョンを示しています。

### アクセスの取得

[Tableau を使用するアクセスリクエスト](/handbook/enterprise-data/platform/tableau/)を完了させてください。UX リサーチャーの中には Explorer ロールを持つ人と Viewer ロールを持つ人がいます。2 つのロール間の機能の違いを確認したい場合は、[このハンドブックページ](/handbook/enterprise-data/platform/tableau/)を確認してください。

一部のダッシュボードとデータを表示するには SAFE アクセスが必要ですが、なしで利用できるものもあります。必要な情報にアクセスできない場合は、Tableau の[SAFE 関連アクセスリクエスト](/handbook/enterprise-data/platform/safe-data/#accessing-a-safe-dashboard)を完了してください。

注: ユーザーデータへの SAFE アクセスを取得すると、[指定インサイダーリスト](/handbook/legal/publiccompanyresources/#designated-insiders)に登録されます。これにより、所有する GitLab 株式を売却するには事前承認を取得する必要があり、また売買できる取引ウィンドウも制限されます。

### コラボレーションするチーム

GitLab でデータを担当するさまざまなグループについては、[より完全な説明](/handbook/enterprise-data/#how-data-works-at-gitlab)がありますが、UX リサーチを実行する場合に知っておきたい 2 つのチームを紹介します。

[Product Data Insights（PDI）](/handbook/product/groups/product-analysis/) – その名のとおり、このチームはプロダクトのメンバーがデータを使ってインサイトを得るのを支援する責任があります。通常、プロダクトの担当領域に割り当てられたチームメンバーがいます（プロダクトデータインサイトチームのパートナーは[こちら](/handbook/product/groups/product-analysis/)から見つかります）。
プロダクトデータインサイトチームは、特定の種類の分析の依頼を（[Issue](/handbook/product/groups/product-analysis/#issue-intake)経由で）受け付け、探しているデータを見つけるのを助けてくれます。また、[オフィスアワー](/handbook/product/groups/product-analysis/#office-hours)や[Slack](/handbook/product/groups/product-analysis/#channels)で質問するための優れたリソースでもあります。彼らは Tableau に精通しています。

[Analytics Instrumentation](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/) - このグループは、GitLab とそのチームメンバーのインストルメンテーション能力を構築することに焦点を当てており、プロダクト全体での[インストルメンテーションカバレッジの拡大](https://gitlab.com/groups/gitlab-org/analytics-section/analytics-instrumentation/-/epics/6)や、より多くのユースケースを扱うために使用するインストルメンテーションシステムのスケーリングなどを含みます。これは、あなたがやりたいことが現時点では利用できないという障害に遭遇したとき（または、わからないが Product Data Insights チームも知らないとき）に連絡するグループです。

Analytics Instrumentation チームのメンバーは、GitLab.com と Self-Managed の両方にわたるデータ収集の DRI です。彼らは Service Ping と Snowplow を所有しています。次のような質問をする相手です:

- Self-Managed の新しい統計をどのようにインストルメントするか？
- Service Ping に追加する際のベストプラクティスは何か？
- GitLab.com でフロントエンドのインタラクションを追跡するために Snowplow をどう使えるか？
- サーバー側のイベントを追跡するために Snowplow を活用できるか？

## 利用可能な情報の状態

[GitLab はテレメトリーのためにサードパーティーソフトウェアを使用しないことを誓っている](https://about.gitlab.com/blog/2019/10/10/update-free-software-and-telemetry/)ので、独自のもの（Service Ping）を構築しました。これと製品の急速な成長のため、現在は利用分析とテレメトリーのためにインストルメントされている部分にギャップがあります。

上記のとおり、analytics instrumentation チームはより多くのカバレッジを得るための取り組みを進めており、新機能がリリース前にインストルメントされるようにし、未インストルメントの機能のバックログに取り組んでいます。

GitLab.com のデータでユーザーレベルの動作を Snowplow イベントと関連付けることは可能ですか（つまり、1 人のユーザーの動作を追跡できますか）？（[出典](/handbook/product/groups/product-analysis/data-model-cheat-sheet/#faqs-1)）

_いいえ。Snowplow のユーザー識別子は匿名化されていますが、GitLab.com のユーザー識別子はそうではありません。ただし、Snowplow と GitLab.com のデータを名前空間（グループ／プロジェクト）レベルで結合することは可能です（つまり、より広く追跡する）。_

### GitLab が追跡する一般的なメトリクスとセグメント

- 月間アクティブユーザー（MAU）
  - 例: ステージごとの MAU、グループごと、セクションごと
- パフォーマンスインジケーター（PI）
  - 例: MAU、コンバージョン率
- ユーザーセグメント
  - 例: 地理的地域、シート数、業界垂直
- プロダクトティア
  - 例: Free、Premium、Ultimate
- プロダクトセクション:
  - 例: Analytics、CD、CI、Dev、Sec
- デリバリー
  - 例: SaaS、Paid SaaS、Self-Managed

## Product Data Insights チームと連携する

[PDI How to work with us](/handbook/product/groups/product-analysis/#working-with-us) は、プロダクトデータインサイトリクエストを開く方法に関する優れたリソースです。

1. **アクセスを取得する:**

   - 適切なツール（通常は Tableau オンラインで十分）
   - データ（SAFE アクセスが必要かどうか）

1. **答えようとしている質問のセットを次の点を含めて決定する:**

   - どのユーザー基準／セグメント？
   - どのメトリクス？
   - どのコンポーネントや機能（該当する場合）？

1. **PM（および／または PDI のカウンターパート）と一緒に次の点を確認する:**

   - 今日追跡されているか？
     - これを判断するのは難しいかもしれません。#data で尋ねるか、PM と PDI カウンターパートと協力してみてください。
     - もしされていない場合は、Analytics Instrumentation チームに連絡するか、#data で尋ねることを検討してください。
   - 既にダッシュボードや分析があるか、それとも新しいチャートやダッシュボードが必要か？
     - リクエストを開く前に、既に分析が存在するかどうか簡単に検索してみてください。判断に困った場合は、#data で尋ねることができます。
     - 新しい分析が必要な場合は PDI リクエストを開きます。あるいは、自分でチャートやダッシュボードを構築してみることもできますが、過去の UXR の経験に基づくと、PDI とのパートナーシップは Tableau と製品の利用データに慣れる優れた方法です。

### 助けを得るにはどうしたらよいですか？

- 行き詰まったり質問がある場合は、#data Slack チャンネルで助けを求めてください。
- [Product Data Insights チームのオフィスアワー](/handbook/product/groups/product-analysis/#office-hours)に参加します。
- [Tableau Training Videos](https://www.tableau.com/learn/training)

## UXR-PDI のユースケース例

- 定性リサーチの結果と三角測量するための定量データを見つける（例: アクティブで一般的に使用されているフローを優先順位付けする、使用の規模と範囲を理解する）。
  - 例: [新規ユーザーのうち、ソフトウェア開発者と他の職種の割合は？](https://10az.online.tableau.com/#/site/gitlab/views/Gitlab_comUserSignups/GrowthMetrics?:iid=1)
- 何人（または何パーセント）のユーザー（月間アクティブユーザー、MAU）が X アクションを行ったか？
  - 例: [SaaS - Ultimate アカウント（ユーザーではない）のうち、過去 3 か月以内にコードレビュー機能を使用したのは何人（何パーセント）か？](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTMetricsDemographics/AccountDemographicDashboard2?:iid=1)
- 何人（または何パーセント）のユーザーがポイント A からポイント B に進んだか？（つまり、ファネル分析）
  - 例: [GitLab.com 登録ファネル分析](https://10az.online.tableau.com/#/site/gitlab/views/SaaSRegistrationFunnel/RegistrationFunnelAnalyses?:iid=1)
- X アクションの使用は時間とともにどう変化したか？（例: 機能の採用について／変更が導入されてから）
  - 例: [過去 1 年間にコードレビュー機能を使用した Self-Managed、Ultimate アカウント数の月次変化（シート数別）](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTMetricsDemographics/AccountUsageforaMetric-OverTime?:iid=1)

## 簡略化されたメトリクス用語集

プロダクト分析ダッシュボードで使用される用語:

- **AMAU** - Action Monthly Active Users（特定の機能と関わったユニーク MAU）
- **CMAU** - Estimated Combined Monthly Active Users（すべてのステージにわたる SMAU の合計）
- **GMAU** - Group Monthly Active Users（特定のグループ内の機能を使用するユニーク MAU）
- **SMAU** - Stage Monthly Active Users（ステージ内の機能を使用したユニーク MAU）
- **Section MAU** - セクション月間アクティブユーザー
- **UMAU** - Unique Monthly Active Users
- **DAU/WAU** - Daily/Weekly Active Users
- **PI** - パフォーマンスインジケーター
- **PPI** - Primary Performance Indicator（一部のステージ／グループは MAU 以外のメトリクスを好む場合がある）
- **SpU** - Stages per user
- **SpO** - Stages per organization

詳細情報（上記にリストされていない場合）:

- [Data catalog metrics and terms index（内部）](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/#metrics-and-terms-index)
- [Product performance indicators（内部）](https://internal.gitlab.com/handbook/company/performance-indicators/product/)

## 有用な Tableau ワークブック

Tableau で検索すると多くのダッシュボードを利用できます。UX チームメンバーが作成または見つけたいくつかのリストを以下に示します:

- [Product Data Insights チームによって作成されたすべてのダッシュボードのリスト](https://10az.online.tableau.com/#/site/gitlab/search/workbooks?search=peterson%20hervas%20raisinghani%20neuberger%20petersen%20braza&tag=Product)
- [PDI Dashboards, Analysis, & Insights ハンドブックページ](/handbook/product/groups/product-analysis/dashboards-analysis-insights/)
- [Firmographic Product Metric Usage Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTMetricsDemographics/README?:iid=1)
- [Centralized Product Usage Metrics Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting?:iid=1)
- [Customer Request Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/CustomerIssueDashboard/README?:iid=1)
- [Subscription Feature Usage Trends](https://10az.online.tableau.com/#/site/gitlab/workbooks/2301184/views)
- [UX KPIs](https://10az.online.tableau.com/#/site/gitlab/views/DRAFT-UXKPIs/Summary?:iid=2)
- [Snowplow Event Exploration last 30 days](https://10az.online.tableau.com/#/site/gitlab/views/SnowplowEventExplorationLast30Days/SnowplowEventExplorationLast30D?:iid=1)
- [Service Ping Metrics Exploration Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/PDServicePingExplorationDashboard/MetricsExploration)
- [GitLab.com Programming Languages](https://10az.online.tableau.com/#/site/gitlab/views/GitLab_comProgrammingLanguages_17061381253400/GitLab_comProgrammingLanguages?:iid=3)
