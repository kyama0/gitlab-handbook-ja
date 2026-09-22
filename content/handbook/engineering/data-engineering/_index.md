---
title: "Data Engineering and Monetization"
description: "あらゆる展開モデルで GitLab をスケールし、インテリジェントなマネタイゼーションを実現する、運用・分析両面の統合データ基盤を構築します。"
upstream_path: /handbook/engineering/data-engineering/
upstream_sha: ddd8c35a844608b54fcc88bfd8bbe61807f4c820
lastmod: "2026-09-22T02:49:28Z"
translated_at: "2026-09-22T21:08:10+00:00"
translator: claude
stale: false
---

## ミッション {#mission}

私たちは、あらゆる展開モデルで GitLab をスケールし、インテリジェントなマネタイゼーションを実現する、運用・分析両面の統合データ基盤を構築します。断片化されたシステムをシームレスで低タッチなエコシステムに接続し、移行とアップグレード時のデータ問題をゼロにすることで、顧客が新機能をより速く採用できるようにし、カスタマージャーニー全体にわたるリーディングインジケーターにローデータを変換して成長と競争優位を加速させます。

## ビジョン {#vision}

私たちは GitLab が Developer-Led Economy（開発者主導の経済）を定義することを目指しています: エージェントとデータ駆動型プラットフォームによって力を与えられたソフトウェア開発者が、20 世紀の石油が産業の力を定義したのと同様に、イノベーション・成長・競争優位のコアドライバーとなるグローバルな転換です。

## 組織構造 {#organization-structure}

```mermaid
flowchart LR
    DEAM[Data Engineering and Monetization]
    click DEAM "/handbook/engineering/data-engineering/"

    DEAM --> AN[Analytics]
    click AN "/handbook/engineering/data-engineering/analytics"
    DEAM --> MON[Monetization]
    DEAM --> DE[Database Excellence]
    click DE "/handbook/engineering/data-engineering/database-excellence/"

    AN --> AI[Analytics Instrumentation]
    click AI "/handbook/engineering/data-engineering/analytics/analytics-instrumentation"
    AN --> Optimize
    click Optimize "/handbook/engineering/data-engineering/analytics/optimize"
    AN --> PI[Platform Insights]
    click PI "/handbook/engineering/data-engineering/analytics/platform-insights"

    MON --> Growth
    click Growth "/handbook/engineering/development/growth"
    MON --> Fulfillment
    click Fulfillment "/handbook/engineering/development/fulfillment"

    Fulfillment --> FP[Fulfillment Platform]
    click FP "/handbook/engineering/development/fulfillment/fulfillment-platform"
    Fulfillment --> Provision
    click Provision "/handbook/engineering/development/fulfillment/provision"
    Fulfillment --> SEATM[Seat Management]
    click SEATM "/handbook/engineering/development/fulfillment/seat-management"
    Fulfillment --> SUBM[Subscription Management]
    click SUBM "/handbook/engineering/development/fulfillment/subscription-management"

    Growth --> Acquisition
    click Acquisition "/handbook/engineering/development/growth"
    Growth --> Activation
    click Activation "/handbook/engineering/development/growth"
    Growth --> Engagement
    click Engagement "/handbook/engineering/development/growth"

    DE --> DBF[Database Frameworks]
    click DBF "/handbook/engineering/data-engineering/database-excellence/database-frameworks"
    DE --> DBO[Database Operations]
    click DBO "/handbook/engineering/data-engineering/database-excellence/database-operations"
    DE --> SMDX[Self-Managed Database Experience]
    click SMDX "/handbook/engineering/data-engineering/database-excellence/self-managed-database-experience"
```

## 私たちの働き方 {#how-we-work}

- [リリース前のプレモーテム](/handbook/engineering/data-engineering/pre-mortems/)：リリース日より前に、そのリリースに固有のリスクを洗い出すための、任意の 45 分間の取り組みです。実施するかどうかはリリースの DRI が決定します。
