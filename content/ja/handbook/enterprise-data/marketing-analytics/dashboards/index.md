---
title: "マーケティングダッシュボード"
description: "マーケティングアナリティクスはマーケティングメトリクスを使用してダッシュボードを作成・維持します"
upstream_path: "/handbook/enterprise-data/marketing-analytics/dashboards/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

## マーケティングダッシュボードの階層

マーケティングアナリティクスは、ダッシュボードを構築する際に、許容される複雑さを導き、意図したユーザー向けにデータをフレームするために階層的なシステムを使用します。

最高レベルでは、TD Marketing Key Dashboards は主要な KPI へのインサイトを提供することを目的としており、TD Marketing Functional Dashboards は機能別マーケティングチームに必要な詳細なインサイトを提供します。アドホックダッシュボードは一度限りの質問に答えることを目的としており、継続的な KPI レポートには使用しません。「TD」とは Trusted Data の略であり、共通スキーマ内のモデルおよびそこから得られるモデルを指します（詳細は[データチームハンドブックページ](/handbook/enterprise-data/how-we-work/data-development)をご覧ください）。

| レベル | 対象ユーザー | 使用例 |
|--------------------|---------------------------------|------------------------------|
| Marketing Key Dashboards | 役員 / GitLab チームメンバー全員 | 主要 KPI とターゲット |
| Marketing Functional Dashboards | 機能別マーケティングチーム | リーディング指標の追跡 / アトリビューションパイプライン / キャンペーンパフォーマンス / SDR パフォーマンス / パートナーソースオポチュニティ |
| Ad-Hoc | 特定のチームメンバー | 一度限りの質問へのインサイト |

## MS&A がサポートするマーケティングダッシュボード

### Marketing Key Dashboards

| **ダッシュボード** | **プラットフォーム** | **アクセスタイプ** | **説明** |
|:--------------|:-------------|:----------------|:----------------|
| [Unified Marketing Funnel Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/MarketingUnifiedFunnel_16934325416300/MarketingUnifiedFunnel?:iid=2) | Tableau | 一般 | マーケティングチャンネル、Web エンゲージメント、SaaS トライアルから有料転換までのユーザージャーニーを可視化します。このダッシュボードは、Digital Marketing、Digital Experience、Growth チームが実施した戦略的変更のトレンドと影響を評価するのに役立ちます。 |
| [Marketing Generated Pipeline](https://10az.online.tableau.com/#/site/gitlab/views/MarketingGeneratedPipelineDashboard/ExecutiveOverview) | Tableau | SAFE | Adobe Marketo Measure タッチポイントと Sales Qualified Source（SQS）の組み合わせを通じて、マーケティングによって影響を受けたオポチュニティを見つけることで、全体的なパイプライン創出へのマーケティングの貢献を追跡します。詳細は[ハンドブックページ](hhttps://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-analytics/marketing_pipeline_attribution/)をご覧ください。 |
| [Event Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/EventAnalyticsHub/Execoverview) | Tableau | 一般 | 対面およびオンラインイベントのパフォーマンスを追跡します。|

### Marketing Functional Dashboards

| **機能** | **ダッシュボード** | **プラットフォーム** | **アクセスタイプ** | **説明** |
|:--------------|:---------------|:---------------|:-----------------|:-----------------|
| SalesDev | [Sales Dev Analytics Hub](https://10az.online.tableau.com/#/site/gitlab/views/WIP-SalesDevelopmentAnalyticsOverview/xDRPipelineOverview?:iid=1) | Tableau | SAFE | 主要メトリクス別の SDR 全体パフォーマンスの管理レベルビュー。 |
| Partner Marketing | [Partner Marketing](https://10az.online.tableau.com/#/site/gitlab/views/DraftPartnerMarketingv2/PartnerSourcedOpps?:iid=1) | Tableau | SAFE | パートナーソースオポチュニティ、パートナーソースパーソン、パートナートライアルプログラムのビュー。 |
| Digital Experience | [GitLab - Digital Experience](https://lookerstudio.google.com/reporting/c47c1759-6d08-4f9b-aae3-3f6b4a3f8d0e/page/PUsnC) | Looker Studio | 一般 | Google Analytics から about.gitlab.com のトラフィック、エンゲージメント、ファネルトップの Web コンバージョンに関するメトリクスを可視化します。 |
| Technical Writing | [GitLab - Docs Website](https://lookerstudio.google.com/reporting/d6af7a2b-2aaa-4f30-8742-811e62777c93/page/p_ihbvblyl2c) | Looker Studio | 一般 | Google Analytics から docs.gitlab.com のトラフィックとエンゲージメントに関するメトリクスを可視化します。 |
| Brand Strategy | [GitLab - Brand Awareness - Web Performance](https://lookerstudio.google.com/reporting/27b962b9-f6f8-443b-bc93-baf1c8a6a268/page/PUsnC) | Looker Studio | 一般 | Google Analytics と Search Console からブランドアウェアネスキャンペーンのトラフィック、エンゲージメント、ファネルトップの Web コンバージョンに関するメトリクスを可視化します。 |
| Product Marketing | [GitLab - Product Marketing](https://lookerstudio.google.com/reporting/9b877a27-0b80-40cd-8e8b-1f68f80573dd/page/IeVBD) | Looker Studio | 一般 | Google Analytics からブログとカスタマーストーリーのトラフィック、エンゲージメント、ファネルトップの Web コンバージョンに関するメトリクスを可視化します。 |
| Content | [Content Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/ContentPerformance/GatedContent?:iid=1) | Tableau | 一般 | コンテンツパフォーマンスの単一ペインビューを表示します。 |

## ダッシュボード開発と公開のステージ

MS&A は以下のステージを使用してダッシュボードのステージを示します。
アドホックダッシュボードにはステージがありません。

- Work in Progress (WIP) - アクティブな開発がまだ進行中です。メトリクス、デザイン、場所はいつでも変更される可能性があります。このステージでは、ステークホルダーと協力してニーズを満たす最終製品を作成します。

- User Acceptance Testing (UAT) - 主要な開発が完了し、意図したユーザーからフィードバックを収集し、バグを修正しています。

- Production - ダッシュボードが本番と見なされるためには、Tableau の本番エリアで公開され、[Tableau 承認プロセス](/handbook/enterprise-data/platform/tableau/#governance-model)を経る必要があります。

## ダッシュボード構築ガイドライン

MS&A は、あらゆるビジュアライゼーションでデータを提示する際の高レベルのガイドラインに合意しています：

- パーセンテージでない主要メトリクスに分数 KPI を表示することを避けます（SAO、MQL、INQ）。代わりに数字を切り捨てます。例：43.21 ではなく 43
