---
title: "Analytics Section"
upstream_path: /handbook/product/groups/analytics/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
lastmod: "2026-05-22T14:47:44+02:00"
translated_at: "2026-05-23T12:00:00Z"
translator: claude
stale: false
---

## 担当範囲

## 私たちは誰か

### プロダクトグループ

Analytics Section のグループのいずれかの一員として働いている個人を以下に示します。

<div class="container">
    <div class="row">
        <div class="col">{{% product/section-group-table "Analytics Instrumentation" %}}</div>
        <div class="col">{{% product/section-group-table "Product Analytics" %}}</div>
        <div class="col">{{% product/section-group-table "Observability" %}}</div>
    </div>
</div>

## セクションの構成

このセクションは、Engineering と Product という 2 つの主要な部門にまたがるチームのグループでカバーされています。これらの部門のチームおよびチームメンバーには、以下にリンクされた独自のハンドブックページがあります。

- Engineering
  - [Analytics Instrumentation](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/)
  - Product Analytics
  - [Developer Experience](/handbook/engineering/infrastructure-platforms/developer-experience/)
- Product
  - [UX](/handbook/product/ux/)

## 投資配分

Analytics Section 内の[プロダクトグループ](/handbook/company/structure/#product-groups)は、[プロダクトカテゴリーページ](/handbook/product/categories/#analytics-section)に概説されています。

プロダクト部門は、開発チームメンバーの人員をプロダクトグループに割り当てることで、セクション内の[投資](https://internal.gitlab.com/handbook/product/investment/)を決定します。その際、私たちは以下の原則に従います:

- すべてのプロダクトグループは、3 つの主要な DRI（プロダクトマネージャー、プロダクトデザイナー、エンジニアリングマネージャー）の間で少なくとも 1:1:1 の比率を維持します。
- 各プロダクトグループに少なくとも 6 名の開発者（FE + BE）を維持するよう努めます

### SaaS パフォーマンス指標

TBD

### Analytics Stack のオーナーシップ

[Analytics Stack](https://gitlab.com/groups/gitlab-org/-/epics/8562) は、GitLab 内で Product Analytics の機能を運用するために必要な機能を提供します。

Analytics Stack は現在、以下の機能で構成されています:

- イベント取り込み: Jitsu、[Snowplow に置き換え予定](https://gitlab.com/groups/gitlab-org/-/epics/9865)
- データストレージ: Clickhouse
- データクエリ: Cube

Analytics Section 内の異なるグループが Analytics Stack 内の異なる機能を担当しているため、オーナーシップモデルが明示的に定められています:

| 機能 | オーナー | 主要ステークホルダー |
|---|---|---|
| イベント取り込み | Analytics Instrumentation | Product Analytics |
| データストレージ | Product Analytics | Analytics Instrumentation |
| データクエリ | Product Analytics | Analytics Instrumentation |

このモデルでは、いずれかの機能の重要な変更が upstream／downstream で動作する他の機能に影響を与える可能性があるため、オーナーは主要ステークホルダーにそうした変更を通知することが求められます。

## ミーティング

TBD

### Analytics Section マネージャーミーティング

TBD

#### 非同期ミーティング

TBD

#### 機能ベースのパフォーマンス指標（PI）レビュー

TBD

#### 5x5s

目的 `#1` を満たすために、ミーティングシリーズは、5x5s の週次ローテーション（5 枚のスライドで自分をチームの他のメンバーに紹介する 5 分間のプレゼンテーション）から始めます。

### Analytics Section レトロスペクティブ

TBD

#### 目的

Section Retrospective Summary ミーティングの目的は以下のとおりです:

1. ステージやグループをまたいで、振り返り、学んだ教訓、ベストプラクティスを共有する
1. 広範囲にわたる問題や継続的なブロッカーを解決するための共同フォーラムとして機能する
1. 成果を共有し祝うことで、他のステージやグループが取り組んでいることへの可視性を提供する

#### 期待されること

エンジニアリングマネージャー、エンジニア、プロダクトマネージャーが、チームの運営方法やレトロスペクティブの実施方法に関するステージの振り返り、学んだ教訓、ベストプラクティスを共有するドキュメントに貢献することが期待されています。これらの振り返り、学んだ教訓、ベストプラクティスは、グループのハンドブックページのコンテンツの形で共有することが望ましいです。

#### モデレーター

各 Section Retrospective は、グループのチームメンバーが主導します。Analytics チームのメンバーは誰でも、以下の表に名前を追加することでモデレーターとして立候補できます:

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

### Analytics PM ミーティング

TBD

## Analytics Section の最近のニュース、マイルストーン、成果、ワクワクすること

### 最近のニュース

TBD

### ワクワクすること

TBD

### 最近の成果

TBD

## 参考

- [プロダクトカテゴリー](/handbook/product/categories/#analytics-section)
- [Direction](https://about.gitlab.com/direction/monitor/)
