---
title: "GitLab Brain"
description: "エージェントの時代における GitLab の強みは、コード、レビュー、パイプライン、およびそれらを管理する権限モデルについての知識にあります。GitLab Brain は、その知識を機能する知性に変えます — 発生した出来事を観測し（イベント）、永続的なインフラストラクチャに記憶し（ストレージ）、即座に呼び出し（検索）、推論によって洞察を導きます。このようにして、GitLab はインテリジェンスのシステムになります。"
upstream_path: /handbook/engineering/gitlab-brain/
upstream_sha: ddc319726d9e3f1cfd7f88faf4798bf31af6bf10
lastmod: "2026-10-09T15:20:41-07:00"
translated_at: "2026-10-20T13:31:55+00:00"
translator: codex
stale: false
---

## ミッション {#mission}

私たちは GitLab のインテリジェンスを支えます — 構築に携わるすべての人とエージェントのために。

## 組織構造 {#organization-structure}

各グループが脳の機能を 1 つずつ担います。Event Platform は観測し、Data Infrastructure は処理して記憶し、Code Search は記憶を呼び出し、Intelligence は推論します。

```mermaid
flowchart LR
    BRAIN[GitLab Brain]
    click BRAIN "/handbook/engineering/gitlab-brain/"

    BRAIN --> EP[Event Platform]
    click EP "/handbook/engineering/gitlab-brain/event-platform/"
    BRAIN --> DI[Data Infrastructure]
    click DI "/handbook/engineering/gitlab-brain/data-infrastructure/"
    BRAIN --> SR[Code Search]
    click SR "/handbook/engineering/gitlab-brain/search/"
    BRAIN --> INT[Intelligence]
    click INT "/handbook/engineering/gitlab-brain/intelligence/"

    EP --> EI[Events Instrumentation SDKs]
    click EI "/handbook/engineering/data-engineering/analytics/analytics-instrumentation/"
    EP --> IS[Ingestion and Streaming]
    click IS "/handbook/engineering/gitlab-brain/event-platform/ingestion-and-streaming/"
    EP --> DC[Data Schema, Ontology & Contracts]
    click DC "/handbook/engineering/gitlab-brain/event-platform/data-contracts/"

    DI --> DS[Data Storage]
    click DS "/handbook/engineering/gitlab-brain/data-infrastructure/data-storage/"
    DI --> MQ[Message Queue and Replication/CDC]
    click MQ "/handbook/engineering/gitlab-brain/data-infrastructure/message-queue-and-replication/"

    SR --> GSE["Global Code Search Experience (Retrieval and Ranking)"]
    click GSE "/handbook/engineering/gitlab-brain/search/experience/"
    SR --> SI[Search Indexes and Infrastructure]
    click SI "/handbook/engineering/gitlab-brain/search/indexes/"

    INT --> QS[Query and Semantics]
    click QS "/handbook/engineering/gitlab-brain/intelligence/query-and-semantics/"
    INT --> DIA[Data Intelligence Agent]
    click DIA "/handbook/engineering/gitlab-brain/intelligence/data-intelligence-agent/"
    INT --> SIU[Software Intelligence UI]
    click SIU "/handbook/engineering/gitlab-brain/intelligence/software-intelligence-ui/"
```

## 私たちの働き方 {#how-we-work}

- [四半期計画](/handbook/engineering/data-engineering/quarterly-planning/): 四半期の計画方法です。キャパシティの上限内で、優先順位を付け、適切な規模に調整した施策を計画し、14 日ごとに 20 分間のレビューを実施します。入れ替えと優先順位引き下げのルール、および四半期末の say/do スコアも扱います。
- [優先事項トラッカーのガイド](/handbook/engineering/data-engineering/priorities-tracker/): トラッカースプレッドシートの補足リファレンスです。タブ、2 ページ資料、各行の列、キャパシティの計算方法、および計画確定前に各行が満たす必要のあるチェック項目を説明します。
- [リリースのプレモーテム](/handbook/engineering/data-engineering/pre-mortems/): 出荷日前にリリース固有のリスクを洗い出すための、任意の 45 分間の取り組みです。実施するかどうかはリリースの DRI が判断します。
