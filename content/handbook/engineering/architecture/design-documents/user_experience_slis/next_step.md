---
title: ユーザーエクスペリエンス SLI（次のステップ）
status: proposed
creation-date: "2025-03-24"
authors: [ "@hmerscher" ]
coaches: [ "@reprazent", "@andrewn" ]
dris: []
owning-stage: "~team::Observability"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/user_experience_slis/next_step/
upstream_sha: d5f4aa38819ae2b572eb32e0d967394d0361a975
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-24T17:11:31+02:00"
---

<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->

{{< engineering/design-document-header >}}


## 動機

[ユーザーエクスペリエンス SLI](index.md)からの作業を継続して、この補足資料はユーザーエクスペリエンストラッカーという新しいサービスを導入することで、ユーザーエクスペリエンスフレームワークの拡張に焦点を当てています。このサービスにより、途中でエラーが発生して完了しない（またはその期待される生存期間内に完了しない）ユーザーエクスペリエンスを追跡する機能が追加されます。

これは変更される可能性があるため、メインのブループリントとは別に保持されています。ここに提示されている内容は志向的なものにすぎません。

## スコープ

[ユーザーエクスペリエンストラッカー](#user-experience-sli-tracker)は、ユーザーエクスペリエンスのタイムアウト検証を担当します——特に非同期ユーザーエクスペリエンス SLI の追跡に関連しています。

SDK が統合されたら、イベント発行の機能をこのサービスに移動して一元化し、SDK からの複雑さを取り除くことができます。

プロジェクトは以下で構成されます:

1. [ユーザーエクスペリエンス SLI トラッカー](#user-experience-sli-tracker)
2. [LabKit SDK](#sdk-requirements)

例:

```mermaid
flowchart LR
    User((User))

    subgraph ServiceA
        subgraph ProcessA
            LabKit
        end
    end
    subgraph ServiceB
        subgraph ProcessB
            LabKitB
        end
    end

    subgraph tracker[Tracker]
        missing_end[Missing end event]
        timeout_check{Timeout check}
        timeout_action[Timeout action]

        missing_end --> timeout_check
        timeout_check --No timeout--> missing_end
        timeout_check --Timeout reached--> timeout_action
    end

    User --Request--> ServiceA
    LabKit --Checkpoint--> tracker
    ServiceA --> ServiceB
    LabKitB --Checkpoint--> tracker
```

プロジェクトの作業アイテムは[エピック #1540](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1540)にスコープされています。

## ユーザーエクスペリエンス SLI トラッカー {#user-experience-sli-tracker}

- 一元化されたユーザーエクスペリエンス SLI 状態追跡
- ユーザーエクスペリエンスの期間に対する合理的な TTL（Time to Live）しきい値
- 状態は Redis に保存・管理されます。設定されたしきい値後にタイムアウトする古くなったユーザーエクスペリエンスのクエリを可能にします。
- [認証](#authentication)
- デプロイ:
  - GitLab.com 向けの Runway サービス
  - Dedicated 向けの Runway ホスティングサービス

クライアントが生成したペイロードに応答するエンドポイントを提供します:

| フィールド          | 型                | 必須               | 説明                                                                                                          | 例                                 |
|---------------------|-------------------|--------------------|---------------------------------------------------------------------------------------------------------------|------------------------------------|
| correlation_id      | string (ULID)     | はい               | ユーザーエクスペリエンスの一意識別子                                                                          | "01JP0EM7HB39WSJNR4662MYZ6V"       |
| user_experience_id  | string            | はい               | ユーザーエクスペリエンスの識別                                                                                | "http_request"                     |
| checkpoint          | string            | はい               | ライフサイクルのどのステップか                                                                                | "start" \| "end" \| "intermediate" |
| checkpoint_category | string            | いいえ             | チェックポイントのドメイン固有のカテゴリ。TBD: 限定的なカーディナリティを課す。                               | "authorize"                        |
| type                | string            | はい               | イベントを生成するサービス/コンポーネント                                                                     | "web", "database"                  |
| feature_category    | string            | はい               | [GitLab の機能カテゴリ](https://docs.gitlab.com/development/feature_categorization/#feature-categorization)    | "source_code_management"           |
| urgency             | string            | はい               | ユーザーの期待に基づいてプロセスがどのくらい速く完了する必要があるか                                          | "sync_fast"                        |
| client_timestamp    | string (ISO-8601) | はい               | イベントが発生したときのタイムスタンプ                                                                        | "2025-02-06T14:30:00Z"             |
| server_timestamp    | string (ISO-8601) | いいえ（レスポンスのみ） | サーバー処理タイムスタンプ                                                                               | "2025-02-06T14:30:00.123Z"         |
| meta                | object            | いいえ             | i.e. https://docs.gitlab.com/development/logging/#logging-context-metadata-through-rails-or-grape-requests    |                                    |

バックグラウンドプロセスがすべての古いユーザーエクスペリエンス SLI を確認し、クリアして失敗イベントを発行します。

同期ユーザーエクスペリエンスが与えられたコンポーネントのインタラクション:

```mermaid
sequenceDiagram
    participant User
    participant App as Service A
    participant AppB as Service B
    participant Tracker as User Experience Tracker
    participant Redis
    participant Event as Logs and Metrics

    User->>App: Request
    activate App

    App->>Tracker: Checkpoint 1
    Tracker->>Redis: Store Initial State
    Tracker->>Event: Emit Start Event
    Tracker-->>App: Response

    App->>AppB: Forward Request
    activate AppB

    AppB->>Tracker: Checkpoint 2
    Tracker->>Redis: Update State
    Tracker->>Event: Emit Intermediate Event
    Tracker-->>AppB: Response

    AppB-->>App: Response
    deactivate AppB

    App->>Tracker: Checkpoint 3
    Tracker->>Redis: Mark Complete
    Tracker->>Event: Emit Success Event
    Tracker-->>App: Response

    App-->>User: Response
    deactivate App

    loop Expired User Experience
        Tracker->>Redis: Check for Timeout
        alt Timeout Reached
            Tracker->>Redis: Mark Failed
            Tracker->>Event: Emit Failure Event
        end
    end
```

非同期ユーザーエクスペリエンスが与えられたコンポーネントのインタラクション:

```mermaid
sequenceDiagram
    participant User
    participant Web as Web Service
    participant Worker
    participant Tracker as User Experience Tracker
    participant Redis
    participant Event as Logs and Metrics

    User->>Web: Request
    activate Web

    Web->>Tracker: Checkpoint 1
    Tracker->>Redis: Store Initial State
    Tracker->>Event: Emit Start Event
    Tracker-->>Web: Response

    Web->>Worker: Enqueue Job
    Web-->>User: Response
    deactivate Web

    Note over Worker: Job wait in queue

    Note over Worker: Job starts
    activate Worker
    Worker->>Tracker: Checkpoint 2
    Tracker->>Redis: Update State

    alt Success Case
        Worker->>Tracker: End User Experience (Success)
        Tracker->>Redis: Mark Complete
        Tracker->>Event: Emit Success Event
    else Failure Case
        Worker->>Tracker: End User Experience (Failed)
        Tracker->>Redis: Mark Failed
        Tracker->>Event: Emit Failure Event
    end

    Tracker-->>Worker: Response
    deactivate Worker

    loop Expired User Experiences
        Tracker->>Redis: Check for Missing End Events
        alt Timeout Reached
            Tracker->>Redis: Mark Failed
            Tracker->>Event: Emit Failure Event
        end
    end
```

### 認証 {#authentication}

SDK とユーザーエクスペリエンス SLI トラッカー間の認証は、GitLab 機能の信頼性メトリクスを歪める可能性がある予期しないイベントの送信を防ぐために必要です。
例: ai-gateway の[認証と認可](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/884ec8a1e92c1db13f12a1b0093e4e82aa50cad7/docs/auth.md)。

## SDK 要件 {#sdk-requirements}

- 直接イベントをプッシュするのではなく、トラッカーに向けてイベントをトリガーする
- ユーザーエクスペリエンス SLI トラッカーへのイベント送信に指数バックオフを使用した自動リトライ
