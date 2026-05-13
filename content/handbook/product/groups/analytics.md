---
title: "Analytics Section"
upstream_path: /handbook/product/groups/analytics/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

## 担当範囲

## 私たちは誰か

### プロダクトグループ

Analytics Section の各グループの一員として働く個人を以下に示します。

<div class="container">
    <div class="row">
        <div class="col">{{% product/section-group-table "Analytics Instrumentation" %}}</div>
        <div class="col">{{% product/section-group-table "Product Analytics" %}}</div>
        <div class="col">{{% product/section-group-table "Observability" %}}</div>
    </div>
</div>

## セクション構造

このセクションは、Engineering と Product という2つの主要な部門に跨るチームのグループでカバーされています。これらの部門のチームとチームメンバーには、以下にリンクされた独自のハンドブックページがあります。

- Engineering
  - [Analytics Instrumentation](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/)
  - Product Analytics
  - [Developer Experience](/handbook/engineering/infrastructure-platforms/developer-experience/)
- Product
  - [UX](/handbook/product/ux/)

## 投資配分

Analytics Section 内の [プロダクトグループ](/handbook/company/structure/#product-groups) は、[プロダクトカテゴリーページ](/handbook/product/categories/#analytics-section) に概説されています。

プロダクト部門は、開発チームメンバーをプロダクトグループに配分することで、セクション内の [投資](https://internal.gitlab.com/handbook/product/investment/) を決定します。その際、次の原則を遵守します。

- すべてのプロダクトグループは、Product Manager、Product Designer、Engineering Manager という3つの主要 DRI 間で少なくとも 1:1:1 の比率を維持します。
- 追加の Software Engineer in Test (SET) DRI に対して現在 1:1:1:1 の比率は維持していませんが、SET とプロダクトグループの間で単一の安定したカウンターパートを持つことを希望しています。
- 各プロダクトグループで少なくとも6人の開発者（FE + BE）を維持するよう努めます。

### SaaS パフォーマンス指標

TBD

### Analytics Stack のオーナーシップ

[Analytics Stack](https://gitlab.com/groups/gitlab-org/-/epics/8562) は、GitLab 内で Product Analytics 機能を運用するために必要な機能を駆動します。

Analytics Stack は現在、次の機能で構成されています。

- イベント取り込み: Jitsu、[Snowplow に置き換え予定](https://gitlab.com/groups/gitlab-org/-/epics/9865)
- データストレージ: Clickhouse
- データクエリ: Cube

Analytics Section 内の異なるグループが Analytics Stack の異なる機能部分を担当しているため、オーナーシップモデルが明示的に呼び出されています。

| 機能 | 所有者 | 主要ステークホルダー |
|---|---|---|
| イベント取り込み | Analytics Instrumentation | Product Analytics |
| データストレージ | Product Analytics | Analytics Instrumentation |
| データクエリ | Product Analytics | Analytics Instrumentation |

このモデルでは、所有者は機能の重要な変更を主要ステークホルダーに通知する必要があります。上流/下流で動作する他の機能の部分に影響がある可能性があるためです。

## ミーティング

TBD

### Analytics Section マネージャーミーティング

TBD

#### Async ミーティング

TBD

#### Function Based Performance Indicators (PI) レビュー

TBD

#### 5x5

意図 `#1` を満たすため、ミーティングシリーズは 5x5 の週次ローテーションから開始します。5x5 とは、自己紹介を含む5枚のスライドを使った5分間のプレゼンテーションです。

### Analytics Section レトロスペクティブ

TBD

#### 意図

Section Retrospective Summary ミーティングの意図は次のとおりです。

1. ステージとグループを横断して、振り返り、学び、ベストプラクティスを共有する
1. 広範な問題や持続的なブロッカーを解決するためのコミュニティフォーラムとして機能する
1. 他のステージやグループが取り組んでいることを可視化するため、成果を共有し祝う

#### 期待

エンジニアリングマネージャー、エンジニア、プロダクトマネージャーが、各ステージの振り返り、学び、チームの運営方法やレトロスペクティブの実施方法に関するベストプラクティスを共有するドキュメントに貢献することが期待されています。これらの振り返り、学び、ベストプラクティスをグループのハンドブックページコンテンツの形で共有することが推奨されます。

#### モデレーター

各 Section Retrospective は、グループのチームメンバーが主導します。Analytics チームメンバーは、以下の表に自分の名前を追加することで、モデレーターとしてボランティアできます。

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

## Analytics Section の最近のニュース、マイルストーン、成果、エキサイティングなこと

### 最近のニュース

TBD

### エキサイティングなこと

TBD

### 最近の成果

TBD

## 参考資料

- [プロダクトカテゴリ](/handbook/product/categories/#analytics-section)
- [方向性](https://about.gitlab.com/direction/monitor/)
