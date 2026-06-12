---
title: "Analytics Section"
upstream_path: /handbook/product/groups/analytics/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-12T15:50:01-05:00
translated_at: "2026-06-12T21:17:57Z"
translator: claude
stale: false
---

## 担当範囲

## 私たちについて

### Product Groups

ここでは、Analytics Section のいずれかのグループの一員として働いている個人を紹介します。

<div class="container">
    <div class="row">
        <div class="col">{{% product/section-group-table "Analytics Instrumentation" %}}</div>
        <div class="col">{{% product/section-group-table "Product Analytics" %}}</div>
        <div class="col">{{% product/section-group-table "Observability" %}}</div>
    </div>
</div>

## セクションの構成

このセクションは、Engineering と Product という 2 つの主要な部門にまたがるチームのグループによって担われています。これらの部門のチームとチームメンバーは、以下にリンクした独自のハンドブックページを持っています。

- Engineering
  - [Analytics Instrumentation](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/)
  - Product Analytics
  - [Developer Experience](/handbook/engineering/infrastructure-platforms/developer-experience/)
- Product
  - [Upstream Studios](/handbook/upstream-studios/)

## 投資配分

Analytics Section 内の [product groups](/handbook/company/structure/#product-groups) は、[product categories ページ](/handbook/product/categories/#analytics-section)に概説されています。

Product 部門は、開発チームメンバーのヘッドカウントを product group に配分することで、セクション内の[投資](https://internal.gitlab.com/handbook/product/investment/)を決定します。その際、私たちは次の原則に従います。

- すべての product group は、3 つの主要な DRI（Product Manager、Product Designer、Engineering Manager）の間で少なくとも 1:1:1 の比率を維持します。
- 各 product group に少なくとも 6 名の開発者（FE + BE）を維持するよう努めます

### SaaS Performance Indicators

未定

### Analytics Stack のオーナーシップ

[Analytics Stack](https://gitlab.com/groups/gitlab-org/-/epics/8562) は、GitLab 内で Product Analytics 機能を運用するために必要な機能を駆動します。

Analytics Stack は現在、次の機能で構成されています。

- イベントの取り込み: Jitsu、[Snowplow に置き換え予定](https://gitlab.com/groups/gitlab-org/-/epics/9865)
- データの保存: Clickhouse
- データのクエリ: Cube

Analytics Section 内の異なるグループが Analytics Stack の異なる機能を担当しているため、オーナーシップモデルが明示的に定められています。

| 機能 | オーナー | キーステークホルダー |
|---|---|---|
| イベントの取り込み | Analytics Instrumentation | Product Analytics |
| データの保存 | Product Analytics | Analytics Instrumentation |
| データのクエリ | Product Analytics | Analytics Instrumentation |

このモデルでは、いずれかの機能に重要な変更があった場合、上流/下流で機能する他の機能に影響が及ぶ可能性があるため、オーナーはキーステークホルダーに通知する必要があります。

## ミーティング

未定

### Analytics Section Manager Meetings

未定

#### 非同期ミーティング

未定

#### Function Based Performance Indicators (PI) Review

未定

#### 5x5s

意図 `#1` を満たすために、ミーティングシリーズの開始として 5x5s を毎週ローテーションで行います。5 枚のスライドで自己紹介をする 5 分間のプレゼンテーションです。

### Analytics Section Retrospective

未定

#### 意図

Section Retrospective Summary ミーティングの意図は次のとおりです。

1. ステージやグループをまたいで、振り返り、学んだ教訓、ベストプラクティスを共有する
1. 広範な課題や根強いブロッカーを解決するための共同のフォーラムとして機能する
1. 成果を共有して祝い、他のステージやグループが取り組んでいることを可視化する

#### 期待されること

エンジニアリングマネージャー、エンジニア、プロダクトマネージャーが、自分のチームの運営方法やレトロスペクティブの実施方法について、ステージの振り返り、学んだ教訓、ベストプラクティスを共有するドキュメントに貢献することが期待されます。これらの振り返り、学んだ教訓、ベストプラクティスは、グループのハンドブックページのコンテンツという形で共有することが望ましいです。

#### モデレーター

各 Section Retrospective は、グループのチームメンバーが進行します。Analytics チームメンバーは誰でも、以下の表に自分の名前を追加してモデレーターに立候補できます。

| マイルストーン | モデレーター | Issue リンク |
| --------- | --------- | ---------- |
| 15.2  |  |  |
| 15.3  |  |  |
| 15.4  |  |  |
| 15.5  |  |  |
| 15.6  |  |  |
| 15.7  |  |  |
| 15.8  |  |  |
| 15.9  |  |  |
| 15.10  |  |  |

### Analytics PM Meeting

未定

## Analytics Section の最近のニュース、マイルストーン、成果、わくわくすること

### 最近のニュース

未定

### わくわくすること

未定

### 最近の成果

未定

## 参考

- [Product categories](/handbook/product/categories/#analytics-section)
- [Direction](https://about.gitlab.com/direction/monitor/)
