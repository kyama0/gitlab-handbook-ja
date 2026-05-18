---
title: "Lighthouse メトリクス定義"
description: "顧客ユースケース採用における Lighthouse メトリクス定義に関するクロスファンクショナルな整合を推進します。"
status: active
upstream_path: "/handbook/company/working-groups/lighthouse-metric-definitions/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-28T11:26:28-04:00"
---

## 目的

このワーキンググループは、各顧客製品採用ユースケースの [Lighthouse メトリクスおよびリーディングインジケーター](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/product-adoption-lighthouse-metrics/)を定義するために必要なクロスファンクショナルな整合、優先度付け、実行を推進することを担っています。この #lighthouse-metric-defintions ワーキンググループは #customer-use-case-adoption ワーキンググループに積み重なる形で、その入力となります。#lighthouse-metric-defintions ワーキンググループは #customer-use-case-adoption ワーキンググループよりも狭いスコープを持ち、Lighthouse メトリクスとリーディングインジケーターの定義に焦点を当てています。#customer-use-case-adoption ワーキンググループが CI 採用の Lighthouse メトリクスとリーディングインジケーターを定義しました。#lighthouse-metric-definitions ワーキンググループは、ユースケースの顧客採用を最もよく測定するメトリクスを決定するための単一のプレイブックを作成します。このプレイブックは FY24-Q4 において Security と Compliance の Lighthouse メトリクスおよびリーディングインジケーターの定義に使用されます。このワーキンググループの設立により、GitHub に対抗し、チャーンと縮小を減少させる取り組みが加速します。

**望ましい成果**

1. 各顧客製品採用ユースケースの Lighthouse メトリクスとリーディングインジケーターを定義するための、単一のクロスファンクショナルなプレイブックを開発する
1. 販売、カスタマーサクセス、製品、データ、財務などにわたる Lighthouse メトリクスとリーディングインジケーターの定義プロセスに関する**クロスファンクショナルな整合**を推進する
1. CI、Security、Compliance の Lighthouse メトリクスのターゲット比較パフォーマンスを示す認定済み Tableau ダッシュボードを公開する

### FY24-Q4 の対象顧客ユースケース

1. CI
1. Security
1. Compliance

## 属性

| プロパティ                     | 値         |
|--------------------------------|------------|
| 作成日                         | 2023-11-01 |
| 目標終了日                     | 2024-01-31 |
| Slack                          | #wg_lighthouse-metric-definitions |
| Google Doc                     | [Lighthouse メトリクス定義 アジェンダ](https://docs.google.com/document/d/1MFpr7p8nu5qTwo8xaIyX1aPyYT2ulk2yqXKUJYx676M/edit#heading=h.5pzaui1699w8) |
| Epic - Primary                 | [Primary](https://gitlab.com/groups/gitlab-data/-/epics/1083)|
| Epic - Security                | [Security](https://gitlab.com/gitlab-data/analytics/-/issues/18848) |
| Epic - Compliance              | [Compliance](https://gitlab.com/gitlab-data/analytics/-/issues/18849) |
| ボード                         | [Lighthouse メトリクス定義ボード](https://gitlab.com/gitlab-data/analytics/-/boards/7148077?label_name%5B%5D=WorkingGroup%3A%3ALighthouseMetric) |
| 概要 & ステータス              | 以下の[完了基準](#exit-criteria)を参照 |

## 完了基準 {#exit-criteria}

これらのゴールは意欲的なものであり、十分なものを達成できる可能性を秘めた高い水準を設定しています（十分なものを達成できない低い水準を設定するのではなく）。

- [ ] Security と Compliance の Lighthouse メトリクスがハンドブックに定義されている
- [ ] CI、Security、Compliance の Lighthouse メトリクスのターゲット比較パフォーマンスを示す認定済み Tableau ダッシュボードを公開する
- [ ] Lighthouse メトリクスとリーディングインジケーターをハンドブックに定義するための単一のクロスファンクショナルなプレイブックを公開する

## 役割と責任

| ワーキンググループの役割                          | 担当者                        | 役職                                                      |
|----------------------------------------------|-------------------------------|------------------------------------------------------------|
| Executive Sponsor                            | David Sakamoto                | VP, Customer Success                                       |
| DRI/ファシリテーター                          | Israel Weeks                  | Director, Data and Analytics                               |
| Functional Lead - CSM                        | Sherrod Patching              | VP, Customer Success Management                            |
| Functional Lead - CS Strategy & Ops          | Brittney Sinq                 | Senior Director, CS Strategy and Operations                |
| Functional Lead - Product                    | Jackie Porter                 | Director, Product Management                               |
| Functional Lead - Product                    | Sam White                     | Group Manager, Product Management                          |
| Functional Lead - Product                    | Sarah Waldner                 | Group Manager, Product Management                          |
| Functional Lead - Product                    | Justin Farris                 | Senior Director, Product Management                        |
| Functional Lead - Product                    | Sam Kerr                      | Group Manager, Product Management                          |
| Member - Customer Success Operations         | Michael Arntz                 | Sales Strategy Manager                                     |
| Member - Customer Success Operations         | Nishant Khanna                | Senior Customer Success Operations Analyst                 |
| Member - Customer Success Operations         | Brandon Butterfield           | Senior Sales Analytics Analyst                             |
| Member - Product                             | Mike Flouton                  | VP of Product Management                                   |
| Member - Product                             | Hillary Benson                | Senior Director, Product Management                        |
| Member - Product                             | Tanuja Jayarama Raju          | Product Manager, Product Management                        |
| Member - Product                             | Carolyn Braza                 | Senior Manager, Product Data Insights                      |
| Member - Enterprise Data                     | Michelle Cooper               | Senior Analytics Engineer                                  |
| Member - Enterprise Data                     | Miles Russell                 | Senior Analytics Engineer                                  |
| Member - Enterprise Data                     | Amie Bright                   | VP of Enterprise Data and Analytics                        |
| Member - Enterprise Data                     | Jong Lee                      | Data Analyst                                               |
| Member - Enterprise Data                     | Naheil McAvinue               | Senior Manager, Data                                       |
| Member - Office of the CEO                   | David Tuan                    | Director, Strategy and Operations                          |

## ワーキンググループが担う仕事

| 担う仕事                                      | DRI(s)                             | 部門                                                                     |
|-----------------------------------------------|------------------------------------|--------------------------------------------------------------------------|
| 機会キャンバスと成果の定義                     | Brittney Sinq, Sherrod Patching    | Customer Success                                                         |
| 機会キャンバスと成果の定義                     | Jackie Porter, Mike Flouton        | Product Management - CI                                                  |
| 機会キャンバスと成果の定義                     | Hillary Benson, Sam White, Sarah Waldner | Product Management - Compliance                                   |
| 機会キャンバスと成果の定義                     | Hillary Benson, Sarah Waldner, Sam White | Product Management - Security                                     |
| 新規メトリクスの計装                           | Jackie Porter, Sam White, Sam Kerr, Sarah Waldner | Product Management - CI, Security, Compliance, Analytics Instrumentation |
| ハンドブックへの Lighthouse メトリクスの定義   | Israel Weeks                       | Enterprise Data                                                          |
| 認定済み Tableau ダッシュボードの構築と公開    | Naheil McAvinue                    | Enterprise Data                                                          |
| dbt データモデルの構築                         | Israel Weeks                       | Enterprise Data                                                          |

## マルチモーダルコミュニケーション

- Issue と Epic に以下のラベルを付与してトラッキングとチーム全体への可視性を確保します
  - `WorkingGroup::LighthouseMetric`
  - `UseCase::CI`
  - `UseCase::Security`
  - `UseCase::Compliance`
- Issue や Epic に適切な[ワーキンググループステータスラベル](https://gitlab.com/groups/gitlab-com/-/labels?subscribed=&search=wg-status)を付与します
  - `wg-status::Not Started`
  - `wg-status::Ready`
  - `wg-status::In Progress`
  - `wg-status::Blocked`
  - `wg-status::Complete`
  - `wg-status::Cancelled`
- クロスファンクショナルな可視性、コラボレーション、優先度付けを可能にするために、[Epic](https://gitlab.com/groups/gitlab-data/-/epics/1083) に対して Issue を作成することでワーキンググループへの「依頼」を正式化します
