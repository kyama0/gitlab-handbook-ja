---
title: "UX リサーチのためのプロダクト分析"
description: "このページでは、ユーザー体験リサーチプロジェクトの一部としてプロダクト分析を使用することに関心のあるチームメンバーに向けて、有用な情報とベストプラクティスを提供します。"
upstream_path: /handbook/upstream-studios/experience-research/product-analytics-for-ux-research/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:42-03:00"
translated_at: "2026-07-17T07:37:26+09:00"
translator: codex
stale: false
---

このページは、ユーザー体験リサーチを実施または支援するために、GitLab の利用に関して収集したデータを活用したいチームメンバー向けのリソースです。GitLab の内部構造、利用可能なデータとその場所、チームメンバーが始めるためのベストプラクティスとヒントに関する背景情報を提供します。

ここにある情報は UX Research を行う人の近道となることを意図していますが、GitLab のデータ活用能力の表面をなぞるにすぎません。より詳細な情報については、[Data チームのハンドブック](/handbook/enterprise-data/)を参照してください。

## プロダクト分析の全体像を理解する

リサーチに必要な利用データへ効率的にたどり着くには、GitLab のデータと分析に関わるさまざまなツールとチームを理解することが重要です。

### ツール

_UX Researcher にとっての関連性が高い順：_

- **Tableau** - Snowflake と Service Ping のデータを分析・可視化するための「フロントエンド」として使用するビジネスインテリジェンス分析ツール。
- **Snowflake** - 主に構造化データを保存・分析するために使用するクラウドベースのデータウェアハウスプラットフォーム（つまり、イベントデータを保存するもの）。
- **Service Ping** - GitLab が自己管理インスタンスでイベントトラッキングを行うために構築したイベントトラッキングツール（つまり、GitLab Self-Managed でイベントを追跡するもの）。
- **Snowplow** - さまざまなソースからイベントレベルのデータを収集、処理、拡充するために使用するオープンソースのイベントトラッキングプラットフォーム（つまり、GitLab.com のイベントを追跡するもの）。

### 便利なリンク

- [Tableau ワークブック](https://docs.google.com/document/d/10JoLjHSFCUvSzXXN_Fv4CFxj1yu07n5zZoAHka17qV4/edit#heading=h.unc286iee2a)（UX Researcher が有用だと考えたワークブックの一覧）
- [Tableau ハンドブックページ](/handbook/enterprise-data/platform/tableau/)（Tableau に関する GitLab ハンドブックページ）
- [各プロダクトステージに関連する分析](/handbook/product/groups/product-analysis/crash-course/#learn-about-analytics-relevant-product-stage-topics-grouped-by-section)（プロダクトステージのリソースに関する GitLab ハンドブックページ）
- [GitLab Metrics Dictionary](https://metrics.gitlab.com/)（Service Ping と Snowplow から収集するすべてのメトリクスを一覧にした Web サイト）
- [Data Catalog](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/)（よく使用されるデータモデルの例を含む内部ハンドブックページ）
- [DBT](https://dbt.gitlabdata.com/#!/overview)（すべての GitLab データセットの基礎となるコードと列定義を説明）

上の図は、[このドキュメント。](/handbook/enterprise-data/platform/)に基づく、GitLab の利用データスタックを簡略化したものです。

### アクセスを取得する

[Tableau を使用するためのアクセスリクエスト](/handbook/enterprise-data/platform/tableau/)を完了してください。一部の UX Researcher には Explorer ロールが、一部には Viewer ロールが付与されています。2 つのロールの機能差を確認するには、[このハンドブックページ](/handbook/enterprise-data/platform/tableau/)を確認してください。

一部のダッシュボードとデータを閲覧するには SAFE アクセスが必要ですが、必要ないものもあります。必要な情報にアクセスできない場合は、Tableau のために [SAFE 関連のアクセスリクエスト](/handbook/enterprise-data/platform/safe-data/#accessing-a-safe-dashboard)を完了してください。

注：ユーザーデータへの SAFE アクセスを取得すると、[指定インサイダーリスト](/handbook/legal/publiccompanyresources/#designated-insiders)に追加されます。そのため、保有する GitLab 株式を売却するには事前承認を得る必要があり、売却できる取引期間も制限されます。

### 連携するチーム

GitLab でデータを担うさまざまなグループについては、[より完全な説明](/handbook/enterprise-data/#how-data-works-at-gitlab)があります。ここでは、UX Research を実施する場合に知っておくべき 2 つのチームを紹介します。

[Product Data Insights (PDI)](/handbook/product/groups/product-analysis/) – 名前が示すとおり、このチームは Product のメンバーがデータからインサイトを得ることを支援します。通常、プロダクトの担当領域にはチームメンバーが割り当てられます（Product Data Insights チームのパートナーは[こちら](/handbook/product/groups/product-analysis/)で確認できます）。
Product Data Insights チームは、特定の種類の分析に関するリクエストを（[Issue](/handbook/product/groups/product-analysis/#issue-intake)を通じて）受け付け、探しているデータを見つける支援をします。また、[Office Hours](/handbook/product/groups/product-analysis/#office-hours)や [Slack](/handbook/product/groups/product-analysis/#channels)で質問する際にも優れたリソースです。Tableau に精通しています。

[Analytics Instrumentation](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/) - このグループは、プロダクト全体での[インストルメンテーションのカバレッジ拡大](https://gitlab.com/groups/gitlab-org/analytics-section/analytics-instrumentation/-/epics/6)や、より多くのユースケースを扱えるようインストルメンテーションシステムを拡張することを含め、GitLab とそのチームメンバーのインストルメンテーション能力を構築することに注力しています。現在利用できないことをしたい場合（または不明で、Product Data Insights チームにも分からない場合）に連絡するグループです。

Analytics Instrumentation チームのメンバーは、GitLab.com と Self-Managed の両方におけるデータ収集の DRI です。Service Ping と Snowplow を所有しています。次のような質問はこのチームに尋ねてください。

- 自己管理向けに新しい統計情報をインストルメントするにはどうすればよいですか？
- Service Ping に追加する際のベストプラクティスは何ですか？
- GitLab.com でフロントエンドの操作を追跡するために Snowplow を使用するにはどうすればよいですか？
- サーバー側のイベントを追跡するために Snowplow を利用できますか？

## 利用可能な情報の状況

[GitLab はテレメトリーにサードパーティーソフトウェアを使用しないと約束しています](https://about.gitlab.com/blog/2019/10/10/update-free-software-and-telemetry/)。そのため、独自の Service Ping を構築しました。このこととプロダクトの急速な成長により、現在、利用分析とテレメトリーのためにインストルメントされているプロダクトの範囲には不足があります。

前述のとおり、Analytics Instrumentation チームは、より多くをカバーし、新機能がリリース前にインストルメントされるようにし、インストルメントされていない機能のバックログに取り組んでいます。

GitLab.com データのユーザーレベルの行動を Snowplow イベントに関連付けることはできますか（つまり、1 人のユーザーの行動を追跡できますか）？（[出典](/handbook/product/groups/product-analysis/data-model-cheat-sheet/#faqs-1)）

_できません。Snowplow のユーザー識別子は匿名化されていますが、GitLab.com のユーザー識別子は匿名化されていません。ただし、Snowplow と GitLab.com のデータはネームスペース（グループ／プロジェクト）レベルで結合できます（つまり、より広い単位で追跡できます）。_

### GitLab が追跡する一般的なメトリクスとセグメント

- 月間アクティブユーザー（MAU）
  - 例：ステージ別、グループ別、セクション別の MAU
- パフォーマンス指標（PI）
  - 例：MAU、コンバージョン率
- ユーザーセグメント
  - 例：地域、シート数、業界区分
- プロダクトティア
  - 例：Free、Premium、Ultimate
- プロダクトセクション：
  - 例：Analytics、CD、CI、Dev、Sec
- デリバリー
  - 例：SaaS、Paid SaaS、Self-Managed

## Product Data Insights チームとの連携

[PDI の連携方法](/handbook/product/groups/product-analysis/#working-with-us)は、プロダクトデータインサイトのリクエストを出す方法を知るための優れたリソースです。

1. **次へのアクセスを取得します：**

   - 適切なツール（通常は Tableau Online で十分です）
   - データ（SAFE アクセスが必要ですか）

1. **答えようとしている質問のセットを、次を含めて決めます：**

   - どのユーザー条件／セグメントですか？
   - どのメトリクスですか？
   - どのコンポーネントまたは機能ですか（該当する場合）？

1. **PM（および／または PDI の担当者）に確認し、次を判断します：**

   - 現在、これは追跡されていますか？
     - これは判断が難しい場合があります。#data で質問するか、PM と PDI の担当者と協力してください。
     - 追跡されていない場合は、Analytics Instrumentation チームに連絡するか、#data で質問することを検討してください。
   - 既存のダッシュボードまたは分析がありますか、それとも新しいグラフやダッシュボードが必要ですか？
     - リクエストを出す前に、分析が既に存在するかを簡単に検索してください。判断が難しい場合は、#data で質問できます。
     - 新しい分析が必要な場合は、PDI リクエストを出してください。独自のグラフやダッシュボードを作成することもできますが、これまでの UXR の経験では、PDI と連携することは Tableau とプロダクト利用データにより慣れる優れた方法です。

### どのように支援を受けられますか？

- 行き詰まったり質問があったりした場合は、#data Slack チャンネルで支援を求めてください。
- [Product Data Insights チームの Office Hours](/handbook/product/groups/product-analysis/#office-hours)に参加してください。
- [Tableau トレーニング動画](https://www.tableau.com/learn/training)

## UXR-PDI ユースケースの例

- 定性的リサーチの発見を三角測量するための定量データを見つける（例：活発に、一般的に使われるフローを優先し、利用の規模と範囲を理解する）。
  - 例：[新規ユーザーのうち、ソフトウェア開発者は他の職種と比べて何 % ですか？](https://10az.online.tableau.com/#/site/gitlab/views/Gitlab_comUserSignups/GrowthMetrics?:iid=1)
- ユーザー（またはその割合）のうち、X のアクションを行った人数はどれくらいですか（月間アクティブユーザー、MAU）？
  - 例：[SaaS - Ultimate のアカウント（ユーザーではない）のうち、過去 3 か月にコードレビュー機能を使用したアカウント数（および %）はどれくらいですか？](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTMetricsDemographics/AccountDemographicDashboard2?:iid=1)
- ユーザー（またはその割合）のうち、ポイント A からポイント B へ移行した人数はどれくらいですか（つまり、ファネル分析）？
  - 例：[GitLab .com 登録ファネル分析](https://10az.online.tableau.com/#/site/gitlab/views/SaaSRegistrationFunnel/RegistrationFunnelAnalyses?:iid=1)
- X のアクションの利用は時間とともにどのように変化しましたか？（例：機能の採用、変更導入後）
  - 例：[過去 1 年間に Code Review 機能を使用した Self-Managed、Ultimate アカウント数の月次変化（シート数別）](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTMetricsDemographics/AccountUsageforaMetric-OverTime?:iid=1)

## 簡易メトリクス用語集

プロダクト分析ダッシュボードで使用される用語：

- **AMAU** - アクション月間アクティブユーザー（特定の機能を利用したユニーク MAU）
- **CMAU** - 推定合計月間アクティブユーザー（すべてのステージの SMAU の合計）
- **GMAU** - グループ月間アクティブユーザー（特定のグループ内の機能を使用するユニーク MAU）
- **SMAU** - ステージ月間アクティブユーザー（特定のステージ内の機能を使用したユニーク MAU）
- **Section MAU** - セクション月間アクティブユーザー
- **UMAU** - ユニーク月間アクティブユーザー
- **DAU/WAU** - 日次／週次アクティブユーザー
- **PI** - パフォーマンス指標
- **PPI** - 主要パフォーマンス指標（一部のステージ／グループは MAU とは異なるメトリクスを優先する場合があります）
- **SpU** - ユーザーあたりのステージ数
- **SpO** - 組織あたりのステージ数

詳細情報（または上記にないもの）については：

- [データカタログのメトリクスと用語索引（内部）](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/#metrics-and-terms-index)
- [プロダクトパフォーマンス指標（内部）](https://internal.gitlab.com/handbook/company/performance-indicators/product/)

## 便利な Tableau ワークブック

Tableau では、検索すると多くのダッシュボードを利用できます。以下は UX チームメンバーが作成または見つけたものの一部です：

- [Product Data Insights チームが作成したすべてのダッシュボードの一覧](https://10az.online.tableau.com/#/site/gitlab/search/workbooks?search=peterson%20hervas%20raisinghani%20neuberger%20petersen%20braza&tag=Product)
- [PDI Dashboards、Analysis、& Insights ハンドブックページ](/handbook/product/groups/product-analysis/dashboards-analysis-insights/)
- [Firmographic Product Metric Usage Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTMetricsDemographics/README?:iid=1)
- [Centralized Product Usage Metrics Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting?:iid=1)
- [Customer Request Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/CustomerIssueDashboard/README?:iid=1)
- [Subscription Feature Usage Trends](https://10az.online.tableau.com/#/site/gitlab/workbooks/2301184/views)
- [UX KPI](https://10az.online.tableau.com/#/site/gitlab/views/DRAFT-UXKPIs/Summary?:iid=2)
- [直近 30 日間の Snowplow イベント探索](https://10az.online.tableau.com/#/site/gitlab/views/SnowplowEventExplorationLast30Days/SnowplowEventExplorationLast30D?:iid=1)
- [Service Ping メトリクス探索ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/PDServicePingExplorationDashboard/MetricsExploration)
- [GitLab.com プログラミング言語](https://10az.online.tableau.com/#/site/gitlab/views/GitLab_comProgrammingLanguages_17061381253400/GitLab_comProgrammingLanguages?:iid=3)
