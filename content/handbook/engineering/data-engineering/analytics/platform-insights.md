---
title: "Analytics:Platform Insights グループ"
description: "Analytics Platform Insights グループは、スケーラブルなアーキテクチャによって、顧客がアナリティクスをセルフサービスで利用できるようにする取り組みを行っています"
upstream_path: /handbook/engineering/data-engineering/analytics/platform-insights/
upstream_sha: e48b48a5e8c7635a5993b5836c0ca253812429d2
translated_at: "2026-07-06T08:13:20+09:00"
translator: codex
stale: false
lastmod: "2026-06-24T22:31:31-04:00"
---

## ビジョン

Platform Insights グループは Analytics セクションの一部です。私たちは、AI を活用し、スケーラブルなデータインフラストラクチャに支えられた包括的な dashboards-as-a-service フレームワークを構築することで、GitLab の顧客がアナリティクスをセルフサービスで利用できるようにすることに注力しています。

私たちの **[FY27 の方向性とロードマップ](https://gitlab.com/groups/gitlab-org/analytics-section/platform-insights/-/wikis/Platform-Insights-Direction-and-Roadmap)** は、私たちが何を、なぜ構築しているのかを示す唯一の信頼できる情報源です。

## 主要なイニシアチブ

以下は、チームが所有している、または主要なコントリビューターとして関わっている主要なイニシアチブです。

- [Dashboard Foundations](https://gitlab.com/groups/gitlab-org/-/work_items/18072)
- [Data Analyst Agent](https://gitlab.com/groups/gitlab-org/-/work_items/19499)
- [GitLab Query Language (GLQL)](https://gitlab.com/gitlab-org/glql)
- [Data Insights Platform (DIP)](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core)
- [Siphon data replication](https://gitlab.com/gitlab-org/analytics-section/siphon)

以下の図は、ソースから顧客まで、アナリティクスプラットフォームスタックを通る典型的なデータフローを非常に高いレベルで示しています。

```mermaid
graph TD
    subgraph Sources
        PG[(PostgreSQL)]
    end

    subgraph Data platform
        S[Siphon]
        CH[(ClickHouse)]
        DIP[Data Insights Platform]
    end

    subgraph GitLab application
        RAILS[🦊 GitLab Rails Monolith]
        GLQL[GitLab Query Language]
    end

    subgraph Customer experiences
        DAA[Data Analyst Agent]
        DF[Dashboard Foundations]
        USER([👤 Customer])
    end

    PG --> S
    S --> CH
    CH --> DIP
    DIP -->|Query API| RAILS
    RAILS -->|GraphQL| GLQL
    GLQL -->|GLQL| DAA
    GLQL -->|GLQL| DF
    DAA -->|Natural language query| USER
    DF -->|Custom dashboard| USER
```

アナリティクスプラットフォームに加えて、このグループには [search チーム](/handbook/engineering/ai/search/) が含まれており、[classic search](https://docs.gitlab.com/user/search/) 機能を担当しています。

## チーム

{{< group-by-slugs arun.sori drosse jiaanlouw john-mason rkumar555 roberthunt siddharthdungarwal vineeth-r snarayanan_gl >}}

### 安定したカウンターパート

{{< group-by-slugs adam-hegyi ankitbhatnagar diegocapetown >}}

### 私たちのバリューと原則

- 私たちは [GitLab バリュー](/handbook/values/) に従って働きます。
- 私たちはチーム内でも Analytics セクション内でも密にコラボレーションします。
- 私たちは自分たちのプロダクトとロードマップに責任を持ちます。
- 私たちは行動への強いバイアスを持っています。
- 私たちはデータにもとづいて意思決定します。

### コミュニケーション

私たちが透明性をもってコミュニケーションし、連絡を受けられる Slack チャンネルは次のとおりです。

- Primary: [#g_monitor_platform_insights](https://gitlab.enterprise.slack.com/archives/C02Q93U8J07)
- Standup: [#g_monitor_platform_insights_standup](https://gitlab.enterprise.slack.com/archives/C02VAHG10HW)
- Internal: [#g_monitor_platform_insights_internal](https://gitlab.enterprise.slack.com/archives/C02QLQUB0JZ)

### ミーティング

- **週次チーム同期:** 進行中の作業や、ロールアウト、大きめのイニシアチブなどの特定の取り組みを整理し、重要なアップデートを共有することに焦点を当てます。
- **Dev sync:** IC が EM や PM の参加を必要とせずに、技術的な Issue について議論したり、技術作業を調整したりできる、エンジニア主導のミーティングです。
- **1:1 コーヒーチャット:** 各チームメンバーは、チーム内およびより広い Analytics セクション内の他のすべてのチームメンバーと、数週間ごとにコーヒーチャットを予定してください。仕事の話題でも仕事以外の話題でもかまいません。タイムゾーンが障壁になる場合は、非同期の Slack スレッドでも問題ありません。目標は 1:1 のつながりを持つことです。

## 私たちの働き方

私たちのワークフローは、会社の [Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/) にもとづいています。ワークフローをどのように適用するかについての変更や補足は、以下に詳述します。

### マイルストーン計画

私たちは、月次リリース cadence に合わせた GitLab マイルストーンで作業します。FY27 ロードマップ wiki は、計画された優先事項に関する唯一の信頼できる情報源です。各マイルストーンの開始前に、チームは利用可能なキャパシティに収まるように Issue を精査し、スコープを調整します。

### 非同期スタンドアップ

チームメンバーは毎週金曜日に [Geekbot](https://geekbot.com/) を使って週次スタンドアップを提出します。私たちはこれらの非同期スタンドアップを使って、達成したこと、現在のブロッカー、次に取り組む予定のことを共有します。

### レトロスペクティブ

私たちは 2 種類のレトロスペクティブを実施します。

**1. マイルストーンレトロスペクティブ（自動）**

各マイルストーンの終了後に自動で実行されます。チーム全体がマイルストーンを振り返るための構造化された機会を提供します。何がうまくいったか、何がつらかったか、次回は何を変えたいかを扱います。

**2. 機能またはインシデントのレトロスペクティブ（必要に応じて）**

主要な機能が出荷された後、または重大なインシデントが発生した後にチームが開催します。機能リリースでは、達成したことを棚卸しし、予定に入れる必要があるフォローアップの技術的負債や品質修正を明らかにする機会です。インシデントでは、責任追及ではなく、何がうまくいかなかったのか、再発をどう防ぐか、対応すべき修復策や監視改善に焦点を当てます。

### ClickHouse Datastore

アナリティクス機能にはビッグデータと大量挿入の要件があり、Postgres や Redis には適していません。[ClickHouse](https://github.com/ClickHouse/ClickHouse) は、これらの機能要件を満たすのに適しているものとして選定されました。ClickHouse はオープンソースのカラム指向データベース管理システムです。多数の行にわたって効率的にフィルター、集計、合計できるため、これらのユースケースにとって魅力的です。ClickHouse は GitLab のスタックにおいて Postgres や Redis を置き換えることを意図したものではありません。

私たちは当初、自己ホスト型の Clickhouse インスタンスを自分たちで管理していましたが、メンテナンスとスケーラビリティを Clickhouse にオフロードしてチームがより速く動けるようにするため、Clickhouse Cloud へ移行することを決めました。

詳細: [Clickhouse Datastore Working Group](/handbook/company/working-groups/clickhouse-datastore/)
