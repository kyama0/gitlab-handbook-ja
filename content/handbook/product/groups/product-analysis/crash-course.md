---
title: プロダクトステージリソースのクラッシュコース
description: 各プロダクトステージの最も重要な Product Analytics 関連リソースの概要
upstream_path: /handbook/product/groups/product-analysis/crash-course/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-23T15:08:44-08:00"
---

## このページの目的

このページは、各プロダクトステージの最も重要な Product Analytics 関連リソースのクラッシュコース形式の概要を提供することを意図しています。
プロダクトアナリストやその他の好奇心旺盛な GitLab チームメンバーとして、各プロダクトステージのクイックリファレンスを持つことは、高レベルの機能、主要な目標または蒸留されたプロダクトロードマップ、現在 GitLab 内の特定のステージまたはグループの下で使用されている主要なデータリソースを素早く理解するのに役立ちます。分析に飛び込む前にです。

このページがその目的を果たすなら、プロダクトアナリストは、ステージまたはグループと作業する前にこのハンドブックページを訪問し、何十ものハンドブックページを横断してスカベンジャーハント検索を行うことなく、関連情報を見つけるのに役立つコンテキスト情報を取得できるようになるはずです。

## 始めるのに役立つ場所

- [内部ハンドブックのパフォーマンス指標 (PIs)](https://internal.gitlab.com/handbook/company/performance-indicators/) - この内部ハンドブックページは、各ステージ/グループの PI を理解し、各チームが達成しようとしている結果が何かを理解するのに最適な場所です。

- [プロダクトカテゴリーハンドブックページ](/handbook/product/categories/) は、膨大な量の有用な情報を含み、セクション、ステージ、グループ、カテゴリーを定義しています。

- 特定のステージ/グループの機能の動作を素早く学ぶ必要がありますか? [GitLab Docs](https://docs.gitlab.com/)

- [メトリクス辞書](https://metrics.gitlab.com/) は、Service Ping と Snowplow で収集されるメトリクスとイベントを含んでいます。詳細については、専用の [Analytics Instrumentation ガイド](/handbook/product/product-processes/analytics-instrumentation-guide/) を参照してください。

- [Features by Group ハンドブックページ](/handbook/product/categories/features/#product-planning) は、Core、Premium、Ultimate カテゴリー別に各ステージグループに含まれる機能の表形式の内訳を含んでいます。

- データチームによって管理されている [Data Guides](/handbook/enterprise-data/data-governance/data-catalog)。

- [Centralized Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2069845/views): GitLab プロダクト使用メトリクスの主要レポーティングダッシュボード。

- [Technical Marketing ハンドブックページ](/handbook/marketing/developer-relations/technical-marketing/) は、プロダクトデモ、ウェビナー、リリースビデオへのリンクを含んでいます。

- GitLab の会計年度は2月1日から1月31日まで実行されます。GitLab の会計四半期から月へのマップは [こちら](/handbook/finance/#fiscal-year) のリンクです。

## セクション別にグループ化された分析関連のプロダクトステージトピックについて学ぶ

なぜこれらのグループ化は「Stage」と呼ばれるのか? GitLab では、DevOps ライフサイクルのすべての **ステージ** をサポートする製品を構築しています。

### Dev Section

#### Plan Stage

チームが単一のアプリケーションで作業を効果的に計画し実行できるようにします。このステージは、エピック、グループ（プログラム）、マイルストーンなどを通じてポートフォリオ計画と管理を可能にし、進捗を組織化し追跡します。

<details markdown="1"><summary>クリックして展開</summary>

**このチームが参照する主要ダッシュボード**

- [Centralized Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2069845/views): GitLab プロダクト使用メトリクスの主要レポーティングダッシュボード。

- [Plan stage .com events](https://10az.online.tableau.com/#/site/gitlab/workbooks/2325883/views)  Snowplow events テーブルを扱う分析

- [Fulfillment:Platform PIs Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2131145/views)

- [Growth Section Analytics Hub](https://10az.online.tableau.com/#/site/gitlab/workbooks/2058563/views)

- [Code Suggestions](https://10az.online.tableau.com/#/site/gitlab/workbooks/2260169/views)

- [Verify Performance Indicator Hub](https://10az.online.tableau.com/#/site/gitlab/views/VerifyPerformanceIndicatorDashboard/VerifyPerformanceIndicatorHub)

**有用なビデオリソース**

[Plan Stage YouTube プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KoceqcTneOVmAzhEp6NinY0)

**Plan Stage チームが取り組んでいること**

[1 年計画へのリンク](https://about.gitlab.com/direction/plan/#1-year-plan)

Plan のロードマップとフォーカスを理解するのに目を通す素晴らしいハンドブックページ

**パフォーマンス指標**

[パフォーマンス指標へのリンク](https://internal.gitlab.com/handbook/company/performance-indicators/product/dev-section/)

Dev Section のパフォーマンス指標を理解するためのリソース - ページはステージとグループで検索できます

**主要ハンドブックページ**

[Main Plan ページ](/handbook/product/categories/#plan-stage)

[Plan 方向性ページ](https://about.gitlab.com/direction/plan/)

**Slack チャンネル**

**#s_plan**

**チームメンバー**

[Plan チームメンバーと協力するためのハンドブックページ](/handbook/product/categories/#plan-stage)

</details>

#### Create Stage

Create は、DevOps ライフサイクルの始まりをサポートするツールを提供します。ソースコード管理、コードレビュー、Wiki、Web IDE などです。

このステージに含まれる機能を理解するため、Create に特化した [GitLab ウェブサイトページから始めてください](https://about.gitlab.com/features/)。

<details markdown="1"><summary>クリックして展開</summary>

**このチームが参照する主要ダッシュボード**

- [Centralized Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2069845/views): GitLab プロダクト使用メトリクスの主要レポーティングダッシュボード。

- [Performance indicators internal handbook page](https://internal.gitlab.com/handbook/company/performance-indicators/product/dev-section/)  Create : Gitaly グループは、主にパフォーマンス指標の内部ハンドブックページを意思決定のガイドとして使用します

**有用なビデオリソース**

GitLab Unfiltered アカウントにログインする必要があります

[Create Stage YouTube プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KrJEKqwt57ljmbkOuVwaR0d)

[Create Stage UX YouTube プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KrUvA91eFQedd6zrvH0_kGY)

**プロダクトロードマップへのリンク**

[製品方向性 / ビジョンへのリンク](/handbook/engineering/devops/create/#vision)

このチームのゴールを理解するためのリソース

**パフォーマンス指標**

[パフォーマンス指標へのリンク](https://internal.gitlab.com/handbook/company/performance-indicators/product/dev-section/)

Dev Section のパフォーマンス指標を理解するためのリソース - ページはステージとグループで検索できます

**主要ハンドブックページ**

[Primary Create Stage ハンドブックページ](/handbook/engineering/devops/create/)

Create がどのように運営されているか、現在のチームメンバーに関する有用な情報を含む

**Slack チャンネル**

**#s_create**

**#s_create_pm**

**チームメンバー**

[Create チームメンバーと協力するためのハンドブックページ](/handbook/product/categories/#create-stage)

</details>

### CI Section

#### Verify Stage

Verify は、継続的インテグレーションを促進するのに役立つツールをチームに提供します。これにはパイプラインやランナーが含まれますが、これらに限定されません。

<details markdown="1"><summary>クリックして展開</summary>

**このチームが参照する主要ダッシュボード**

- [Centralized Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2069845/views): GitLab プロダクト使用メトリクスの主要レポーティングダッシュボード。

- [Verify Performance Indicator Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/VerifyPerformanceIndicatorDashboard/VerifyGitLab_comPerformanceIndicators)

- [Error Budget Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2270342/views)

**重要なデータドキュメンテーション**

Verify ステージ専用で SSOT として参照できるいくつかのモデルがあります:

- `wk_gitlab_dotcom_monthly_ci_compute_minutes` は、プロジェクト単位、namespace 単位でランナー数、パイプライン数、CI Build Minutes 使用量を特定するために使用できるモデルです。
**有用なビデオリソース**

[Tanuki Tech: Verify and Secure](https://youtu.be/TgRamhC3ujg)

このビデオは、Verify と Secure のプロダクト機能と、それらの機能をセールスの観点から話す方法を紹介しています。

[Verify Team 概要](https://youtu.be/9iF9zWAxdH0)

**プロダクトロードマップへのリンク**

[Section Direction: Verify Stage](https://about.gitlab.com/direction/ops/#verify)
Verify チームの長期的なゴールを理解するためのリソース

**パフォーマンス指標**

[Ops Section PI](https://internal.gitlab.com/handbook/company/performance-indicators/product/ops-section/)
Operations セクションのすべてのパフォーマンス指標をリストする内部ハンドブックページ

**主要ハンドブックページ**

[Verify Stage プロダクトページ](/handbook/engineering/devops/verify/)

Verify ステージに関連するすべてのページの中央ハブ

**Slack チャンネル**

**#s_verify**
Verify の全体的なチャンネル

**#g_pipeline-execution**
Verify:Pipeline Execution プロダクトカテゴリーの Slack チャンネル。

**#g_pipeline-authoring**
Verify:Pipeline Authoring プロダクトカテゴリーの Slack チャンネル。

**#g_runner**
Verify:Runner プロダクトカテゴリーの Slack チャンネル。

**#g_pipeline-security**
Verify:Pipeline Security プロダクトカテゴリーの Slack チャンネル。

**チームメンバー**

[Verify チームメンバーと協力するためのハンドブックページ](/handbook/product/categories/#verify-stage)

</details>

#### Package Stage

Package チームは、package と container レジストリ、および Dependency Proxy に取り組んでいます。

<details markdown="1"><summary>クリックして展開</summary>

**このチームが参照する主要ダッシュボード**

- [Package Performance Indicator Hub](https://10az.online.tableau.com/#/site/gitlab/workbooks/2284774/views)

GitLab.com 上の Package 機能の主に時系列分析

- [Centralized Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2069845/views): GitLab プロダクト使用メトリクスの主要レポーティングダッシュボード。

**重要なデータドキュメンテーション**

- `wk_gitlab_dotcom_package_events` は、Package に関連するすべての Snowplow イベントに使用できるモデルです。これには、GitLab.com 上で利用可能なすべての Package タイプのパッケージアクションが含まれますが、これらに限定されません。

**有用なビデオリソース**

[User Interviews YouTube チャンネル](https://www.youtube.com/playlist?list=PL05JrBw4t0KpxCv3B5S-6LFCpBB6NCnga)

Package チーム向けの一般的および機能固有のユーザーインタビュー

[Demos and Speedruns](https://www.youtube.com/playlist?list=PL05JrBw4t0KoPiSySNHTfvxC20i0LppMf)

デモ、スピードラン、その他のコンテンツを特集する Package チャンネル

**プロダクトロードマップへのリンク**

[プロダクトロードマップへのリンク](https://about.gitlab.com/direction/package/)

このチームの長期的なゴールを理解するためのリソース

**主要ドキュメンテーション**

[Main Package Team ハンドブックページ](/handbook/engineering/devops/package)

Package チームの主要ページで特定のトピックを検索するのが役立ちます

[GitLab Docs Package ページ](https://docs.gitlab.com/administration/packages/)

GitLab Docs は素晴らしいです!

**Slack チャンネル**

**#s_package**

**チームメンバー**

[Package チームメンバーと協力するためのハンドブックページ](/handbook/product/categories/#package-stage)

[Package チームメンバーと、必要に応じて連絡する安定したカウンターパートのリスト](/handbook/engineering/devops/package/#team-members)

</details>

### CD Section

#### Deploy Stage

Deploy チームは、GitLab のデプロイメントとリリース機能を担当します

<details markdown="1"><summary>クリックして展開</summary>

**このチームが参照する主要ダッシュボード**

- [Centralized Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2069845/views): GitLab プロダクト使用メトリクスの主要レポーティングダッシュボード。

- [Deploy Performance Indicator Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2280622/views): GitLab.com 上の Deploy 機能の主に時系列分析

**プロダクトロードマップへのリンク**

[Product Direction - Delivery](https://about.gitlab.com/direction/delivery/)
このチームの長期的なゴールを理解するためのリソース

**パフォーマンス指標**

[パフォーマンス指標へのリンク](https://internal.gitlab.com/handbook/company/performance-indicators/product/ops-section/)

Ops Section のパフォーマンス指標を理解するためのリソース - ページはステージとグループで検索できます

**主要ハンドブックページ**

[Deploy Primary ハンドブックページ](/handbook/engineering/devops/runner/environments)

**Slack チャンネル**

**#cd-section**

**#g_environments**

**#s_deploy**

**チームメンバー**

[Create チームメンバーと協力するためのハンドブックページ](/handbook/engineering/devops/runner/environments/)

</details>

### Sec Section

#### Secure Stage

Static Application Security Testing (SAST)、Dynamic Application Security Testing (DAST)、Container Scanning、Dependency Scanning

<details markdown="1"><summary>クリックして展開</summary>

**このチームが参照する主要ダッシュボード**

- [Dynamic Analysis Metrics](https://10az.online.tableau.com/#/site/gitlab/views/PDSecDynamicAnalysisMetrics/DynamicAnalysisDashboard) Secure:Dynamic Analysis グループ

Dynamic Analysis Metrics の一見重複しているように見えるチャートは、異なるデータセットの合計を比較するためにチームによって使用されます。

- [Threat Management Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2238072/views) Security Risk Management: Security Insights グループ

- [Centralized Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2069845/views): GitLab プロダクト使用メトリクスの主要レポーティングダッシュボード。

**有用なビデオリソース**

[DevSecOps 概要](https://www.youtube.com/watch?v=XnYstHObqlA&t=15s) Secure 機能に関連する高レベル概要から始めるのに最適な場所。

**プロダクト方向性へのリンク**

[Secure プロダクト方向性ページ - 1年計画](https://about.gitlab.com/direction/application_security_testing/#1-year-plan)

**パフォーマンス指標**

[Secure ハンドブックページにリンクされたパフォーマンス指標](/handbook/engineering/development/sec/#performance-indicators)

**主要ハンドブックページ**

[Secure ステージの主要ハンドブックページ](/handbook/engineering/development/sec/secure/)

**Slack チャンネル**

**#s_secure**

**チームメンバー**

[Secure チームメンバーと協力するためのプロダクトカテゴリーページセクション](/handbook/product/categories/#sec-section)

[Secure エンジニアリングチームメンバーと協力するための Secure ハンドブックページセクション](/handbook/engineering/development/sec/secure/#team-members)

</details>

#### Software Supply Chain Security Stage

組織全体のセキュリティ脆弱性、ポリシー、コンプライアンスを管理します。

<details markdown="1"><summary>クリックして展開</summary>

**このチームが参照する主要ダッシュボード**

- [Centralized Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2069845/views): GitLab プロダクト使用メトリクスの主要レポーティングダッシュボード。

- [PD: Sec: Software Supply Chain Security Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2200383/views)

**有用なビデオリソース**

[Software Supply Chain Security Stage YouTube チャンネル](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq4CHpCTMv3OdquJXm6ggYr)

[Software Supply Chain Security UX YouTube チャンネル](https://www.youtube.com/playlist?list=PL05JrBw4t0KrUL59mDTOdERpYEXGyMPVz)

**プロダクト方向性へのリンク**

[Software Supply Chain Security プロダクト方向性ページ - 1年計画](https://about.gitlab.com/direction/software_supply_chain_security/#1-year-plan)

**パフォーマンス指標**

[Secure セクションの内部ハンドブックのパフォーマンス指標](https://internal.gitlab.com/handbook/company/performance-indicators/product/sec-section/)

**主要ハンドブックページ**

[Software Supply Chain Security ステージの主要ハンドブックページ](/handbook/engineering/development/sec/software-supply-chain-security/)

**Slack チャンネル**

**#s_software-supply-chain-security**

**チームメンバー**

[Software Supply Chain Security チームメンバーと協力するためのハンドブックページ](/handbook/product/categories/#software-supply-chain-security-stage)

[Software Supply Chain Security エンジニアリングチームメンバーと協力するための Software Supply Chain Security ハンドブックページセクション](/handbook/engineering/development/sec/software-supply-chain-security/)

</details>

### Core Platforms Section

#### Systems Stage (Distribution, Gitaly, Geo Groups)

合理化されたデプロイメントとメンテナンス、災害復旧、セキュアな検索と発見可能性から、高可用性、スケーラビリティ、パフォーマンスまで、GitLab 製品のエンタープライズグレードの運用体験をサポートします。Systems Stage には Distribution、Gitaly、Geo Groups が含まれています。

<details markdown="1"><summary>クリックして展開</summary>

**このチームが参照する主要ダッシュボード**

- すべての Tableau ダッシュボードは Collections で組織されており、特に [Core & SaaS Platforms General Collection](https://10az.online.tableau.com/#/site/gitlab/collections/78d30546-2f24-4a4a-8378-c88711f479c4?:origin=card_share_link) と [Core & SaaS Platforms SAFE Collection](https://10az.online.tableau.com/#/site/gitlab/collections/1c106c47-64b3-4cbf-b95d-c75fe2a0e9b4?:origin=card_share_link) で組織されています

**重要なデータドキュメンテーション**

GitLab.com の Postgres Replica データには、現在 Enablement メトリクスが収集されていません

以下のテーブルは、Service Ping メトリクスのレポーティングに使用できます。

- common_mart.mart_ping_instance_metric_all_time - 全期間タイムフレームメトリクス用

- common_mart.mart_ping_instance_metric_7_day - 7日タイムフレームメトリクス用

- common_mart.mart_ping_instance_metric_28_day - 28日タイムフレームメトリクス用

- common_mart.mart_ping_instance_metric_monthly - 全期間、7日、28日タイムフレームメトリクス（月の最後の ping にプレフィルタされたもの、none または null タイムフレームメトリクスは含まれない）用

- workpace_product.wk_fct_ping_instance_metric_none - none タイムフレームのメトリクス用

- workpace_product.wk_fct_ping_instance_metric_null - null タイムフレームのメトリクス用

[メトリクス辞書](https://metrics.gitlab.com/) を使用して、任意のサービス ping メトリクスのタイムフレーム値を判別してください。

**有用なビデオリソース**

Enablement::Systems は比較的新しいステージです。PDI は有用なビデオ概要を利用可能になり次第追加します。

**プロダクトロードマップへのリンク**

[Enablement Product Direction](https://about.gitlab.com/direction/core_platform/)
ステージとグループレベルの詳細を含む

**パフォーマンス指標**

[Engineering PI 内部ハンドブックページ](https://internal.gitlab.com/handbook/company/performance-indicators/engineering/)

**主要ハンドブックページ**

[Engineering 全体のデータアクセスセクションハンドブックページ](/handbook/engineering/infrastructure-platforms/data-access/)

**Slack チャンネル**

**#s_enablement**

**#g_distribution**

**#g_geo**

**チームメンバー**

[Systems チームメンバーと協力するためのハンドブックページ](/handbook/product/categories/#systems-stage)

または

[エンジニアリングページのすべてのチームメンバーセクション](/handbook/engineering/development/growth/#all-team-members)

</details>

### Growth Section

[Growth Section](/handbook/marketing/growth/) は Marketing & Strategy 部門内に位置しますが、Growth Section は私たちのオーナーシップ領域内のトピックについて、Product Data Insights からの専用のサポートを受けています。

#### Growth Stage (Acquisition, Activation Groups)

Growth は、無料およびトライアル登録と新規ユーザーオンボーディング体験を所有します。

<details markdown="1"><summary>クリックして展開</summary>

**このチームが参照する主要ダッシュボード**

- - すべての Tableau ダッシュボードは Collections で組織されており、特に [Growth General Collection](https://10az.online.tableau.com/#/site/gitlab/collections/9fce437d-d001-412a-a4c4-a327aeb882ff?:origin=card_share_link) と [Growth SAFE Collection](https://10az.online.tableau.com/#/site/gitlab/collections/8740c9bc-6d9d-4e3e-af5a-11b48f48e925?:origin=card_share_link) で組織されています

- [Growth Section Product Data Insights Hub in Tableau](https://10az.online.tableau.com/t/gitlab/views/GrowthSectionProductDataInsightsHub/GrowthSectionProductDataInsightsHub)

- [Filterable Growth Experiment Analysis Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/USETHISFINALGLEX/GLEXExperimentAnalysisDashboard?:iid=1)

- [Growth Experiment Event Validation](https://10az.online.tableau.com/#/site/gitlab/workbooks/2241316/views)

- [Snowplow Event Exploration L30D](https://10az.online.tableau.com/#/site/gitlab/views/SnowplowEventExplorationLast30Days/SnowplowEventExplorationLast30D) - イベント検証のためによくエンジニアに送られます。

**重要なデータドキュメンテーション**

- [common_mart_product.rpt_namespace_onboarding](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_namespace_onboarding) このモデルには、namespace と namespace 作成者属性、SaaS 製品の挙動を含む、最も一般的に分析される Growth ユースケースが含まれています。このモデルには PDI、DEX、Marketing Analytics チームが貢献できます。
- [common_mart_product.rpt_plg_funnel](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_plg_funnel) このモデルは主要な PLG/Growth レポーティングで使用され、GitLab.com とセルフマネージドプロダクトエンティティの両方を含みます。

- Growth のトピックは広範でクロスファンクショナルなため、Growth プロダクト分析の質問に答えるためによく使用される多くのデータモデルがあります。より包括的なドキュメンテーションは [Product Data Insights Data Models Cheat Sheet](/handbook/product/groups/product-analysis/data-model-cheat-sheet/) で見つけることができます。

**有用なビデオリソース**

[Growth YouTube プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Kr_-AowJmbhGk9yj_zIZySf)

**プロダクトロードマップへのリンク**

[Growth Direction ハンドブックページ](/handbook/marketing/growth/)

**パフォーマンス指標**

- [SaaS Team Activation](https://docs.google.com/presentation/d/1rJG8FaqEjfgA-Nz9Ww3blgcUwRGzri7CeKkn1e2eEHY/edit?usp=sharing)

- [Valuable Sign-up](https://docs.google.com/presentation/d/1xHBrnvwdMxQGqmX0TtcQz5tUYsAeU6CAMnpcDlhHUpc/edit?usp=sharing)

- 上記のメトリクスは両方とも [Growth Section Product Data Insights Hub in Tableau](https://10az.online.tableau.com/t/gitlab/views/GrowthSectionProductDataInsightsHub/GrowthSectionProductDataInsightsHub) で監視されています

**主要ハンドブックページ**

[Engineering 全体の Growth Section ハンドブックページ](/handbook/engineering/development/growth/)

[Growth Direction ページ](/handbook/marketing/growth/)

**Slack チャンネル**

**#s_growth**

**チームメンバー**

[エンジニアリングページのすべてのチームメンバーセクション](/handbook/engineering/development/growth/#all-team-members)

</details>
