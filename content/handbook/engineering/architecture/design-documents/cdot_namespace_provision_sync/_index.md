---
title: "Namespace プロビジョニング同期"
status: proposed
creation-date: "2025-02-12"
authors: [ "@bhrai", "@cwiesner" ]
coach: ""
approvers: [ "@ppalanikumar", "@rhardarson" ]
owning-stage: "~devops::fulfillment"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cdot_namespace_provision_sync/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/bhrai" class="text-blue-600 hover:underline">@bhrai</a>, <a href="https://gitlab.com/cwiesner" class="text-blue-600 hover:underline">@cwiesner</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ppalanikumar" class="text-blue-600 hover:underline">@ppalanikumar</a>, <a href="https://gitlab.com/rhardarson" class="text-blue-600 hover:underline">@rhardarson</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::fulfillment</span></td>
<td class="px-3 py-2 border border-gray-300">2025-02-12</td>
</tr>
</tbody>
</table>
</div>


## サマリー

セルフマネージド/Dedicated と GitLab.com 間のプロビジョニングを揃える取り組みの一環として、私たちは GitLab.com 上での namespace プロビジョニングの仕組みを再構築しています。

## 動機

このための作業により、GitLab.com のプロビジョニングをセルフマネージド/Dedicated のプロビジョニング方法により近づけます。

`GitLab.com` では、`Namespace` プロビジョニング用に生成されたパラメータを新しい `gitlab_namespaces_syncs` テーブルに記録し、各同期試行の結果ステータスを `gitlab_namespacess_sync_attempts` テーブルに記録します。これは `セルフマネージド` 向けの `License` の扱い方と類似しており、両方のプロビジョニングプロセスをより近づける結果となります。

## ゴール

このブループリントのゴールは以下を生み出すことです:

- 新しいプロセスを通じて namespace がどのようにプロビジョニングされるかのアーキテクチャ設計
- 選択した設計を実現するためのイテレーション計画

## 提案

生成された `namespace` プロビジョニングパラメータのレコードを保持する新しいテーブル `gitlab_namespace_syncs` を作成します。`gitlab_namespaces_sync` レコードは、`gitlab_namespaces_sync` のステータスをログする多数の `gitlab_namespaces_sync_attempts` を持ちます。状態は `[started, failed, skipped, completed]` のいずれかとなります。

`gitlab_namespaces_sync` レコードが作成されるたびに、`started` 状態の関連する `gitlab_namespaces_sync_attempt` レコードが必ず存在します。その後、関連する `params` を使って namespace をプロビジョニングするため、`GitLab` への **内部 HTTP リクエスト** を行います。`params` には、プロビジョニング対象のすべてのリソース (`[base_product, compute_minutes, storage, add_on_purchases]`) に対するプロビジョニング情報が含まれます。詳細は [API 契約](#api-contract) を参照してください。`GitLab` へのプロビジョニング中、いずれかのリソースのプロビジョニングが失敗しても他のリソースのプロビジョニングは継続されます。たとえば、`Compute Minutes` リソースのプロビジョニングが失敗しても、`Storage` および `AddOnPurchase` リソースのプロビジョニングは継続されます。

プロビジョニング同期のレスポンスに基づいて、`gitlab_namespaces_sync_attempt` レコードの状態を更新します。`200 OK` レスポンスの場合はステータスが `completed` に更新され、それ以外の場合は `failed` になります。

失敗レスポンスコードに基づき、私たちはさらにアクションを実行します:

- `5XX` : これは `Server` エラーで、同期は数回リトライされます
- `4XX` : これはバリデーションエラーで、`Client` 側のパラメータ生成に関連します。これをログし、ケースごとに調査します。

## イテレーション 1

イテレーション 1 では、`CustomersDot` および `GitLab` 上で実装する予定の `シーケンス図`、`フローチャート`、`データベーステーブル`、および `内部 API` を以下に示します。

### CustomersDot (CDot) 側

#### シーケンス図

```mermaid
sequenceDiagram
    participant User
    participant CDot
    participant GitLab

    alt 新規サブスクリプションまたは情報変更
        User->>CDot: サブスクリプションを作成/更新
        CDot->>CDot: 新しい gitlab_namespaces_syncs を作成し、<br/>新しい gitlab_namespaces_sync_attempts (状態: started) を作成
        CDot->>GitLab: 同期をトリガー
        GitLab-->>CDot: レスポンス
        alt 成功: 200
            CDot->>CDot: gitlab_namespaces_sync_attempts の状態を completed に更新
        else エラー
            CDot->>CDot: gitlab_namespaces_sync_attempts の状態を failed に更新し、<br/>レスポンスエラーを処理
        end
    end

    User->>CDot: 手動再同期リクエスト
    CDot->>CDot: 既存の gitlab_namespaces_syncs に対して<br/>新しい gitlab_namespaces_sync_attempts (状態: started) を作成
    CDot->>GitLab: 同期をトリガー
    GitLab-->>CDot: レスポンス
    alt 成功: 200
        CDot->>CDot: gitlab_namespaces_sync_attempts の状態を completed に更新
    else エラー
        CDot->>CDot: gitlab_namespaces_sync_attempts の状態を failed に更新し、<br/>レスポンスエラーを処理
    end
```

#### フローチャート

```mermaid
graph TD
    A[開始] --> B{新規サブスクリプションまたは情報変更?}
    B -->|Yes| C[新しい gitlab_namespaces_syncs と<br/>新しい gitlab_namespaces_sync_attempts を作成]
    B -->|No| D[新規レコードは作成しない]
    C --> E[GitLab に同期をトリガー]
    E --> F[GitLab: レスポンス]
    F --> G{成功: 200?}
    G -->|Yes| H[gitlab_namespaces_sync_attempts の状態を更新]
    G -->|No| I[gitlab_namespaces_sync_attempts の状態を更新しエラーレスポンスを処理]
    H --> J[終了]
    I --> J
    D --> J

    K[手動再同期リクエスト] --> L[GitLab に同期をトリガー]
    L --> M[GitLab: レスポンス]
    M --> N{成功: 200?}
    N -->|Yes| O[gitlab_namespaces_sync_attempts の状態を更新]
    N -->|No| P[gitlab_namespaces_sync_attempts の状態を更新しエラーレスポンスを処理]
    O --> Q[終了]
    P --> Q
```

#### データベース

```mermaid
erDiagram
    gitlab_namespaces_sync_attempts {
        bigint id PK
        bigint namespaces_sync_id FK
        timestamptz created_at
        timestamptz updated_at
        integer state
    }
    gitlab_namespaces_syncs {
        bigint id PK
        timestamptz created_at
        timestamptz updated_at
        integer namespace_id
        string attrs_sha256
        jsonb attrs
    }

  gitlab_namespaces_syncs ||--o{ gitlab_namespaces_sync_attempts : "has many"
```

### GitLab.com 側

#### シーケンス図

```mermaid
sequenceDiagram
    participant BW as CDot バックグラウンドワーカー
    participant DB as CDot データベース
    participant GL as GitLab
    participant GLDB as GitLab データベース

    Note over BW: namespace プロビジョニング<br>ジョブ開始

    BW->>DB: namespace_id の最新の namespace_syncs を取得
    activate DB
    DB-->>BW: namespace_sync レコードを返す
    deactivate DB

    Note over BW: namespace<br>属性を処理

    BW->>GL: HTTP POST /api/v4/internal/gitlab_subscriptions/namespaces/:id/provision
    activate GL

    Note over GL: ステップ 1:<br>gitlab_subscription を更新
    GL->>GLDB: プラン詳細で gitlab_subscriptions テーブルを更新
    activate GLDB
    GLDB-->>GL: サブスクリプション更新を確認
    deactivate GLDB

    Note over GL: ステップ 2:<br>compute_minutes と storage の<br>namespace を更新
    GL->>GLDB: compute_minutes と storage の制限値で namespaces テーブルを更新
    activate GLDB
    GLDB-->>GL: namespace 更新を確認
    deactivate GLDB

    Note over GL: ステップ 3:<br>add_on_purchase をプロビジョニング
    GL->>GLDB: add_on_purchases テーブルを upsert
    activate GLDB
    GLDB-->>GL: アドオン購入の upsert を確認
    deactivate GLDB

    Note over GL: 失敗確認
    alt いずれかのステップが失敗
        GL-->>BW: 失敗詳細を含むエラーレスポンス (422) を返す
    else すべてのステップが成功
        GL-->>BW: 成功レスポンス (200) を返す
    end
    deactivate GL

    alt 成功レスポンス (200)
        Note over BW: ジョブ正常完了
    else クライアントエラー (4XX)
        Note over BW: エラー詳細をログ<br>gitlab_namespaces_sync を<br>partially failed として更新
    else サーバーエラー (5XX)
        Note over BW: ジョブのリトライをスケジュール<br>リトライ用にジョブステータスを<br>更新
    end
```

#### API 契約

`GitLab` 上に namespace のフルプロビジョニングを行う新しい内部エンドポイントを作成します。

`POST /api/v4/internal/gitlab_subscriptions/namespaces/:id/provision`

このエンドポイントは以下の JSON ボディ構造を受け付けます:

```json
{
  "provision": {
    "base_product": {
      "plan_code": "string_value",
      "start_date": "2023-06-01",
      "end_date": "2024-05-31",
      "seats": 100,
      "max_seats_used": 90,
      "trial": false,
      "trial_starts_on": "2023-07-01",
      "trial_ends_on": "2024-07-01",
      "auto_renew": true
    },
    "compute_minutes": {
      "shared_runners_minutes_limit": 50000,
      "extra_shared_runners_minutes_limit": 10000,
      "packs": [
        {
          "purchase_xid": "purchase_1",
          "number_of_minutes": 5000,
          "expires_at": "2023-12-31"
        },
        {
          "purchase_xid": "purchase_2",
          "number_of_minutes": 5000,
          "expires_at": "2024-06-30"
        }
      ]
    },
    "storage": {
      "additional_purchased_storage_size": 1000,
      "additional_purchased_storage_ends_on": "2024-05-31"
    },
    "add_on_purchases": {
      "duo_pro": [
        {
          "quantity": 100,
          "started_on": "2023-06-01",
          "expires_on": "2024-05-31",
          "purchase_xid": "purchase_123",
          "trial": false
        }
      ],
      "duo_enterprise": [
        {
          "quantity": 100,
          "started_on": "2023-06-01",
          "expires_on": "2024-05-31",
          "purchase_xid": "purchase_123",
          "trial": false
        }
      ],
      "product_analytics": [
        {
          "quantity": 100,
          "started_on": "2023-06-01",
          "expires_on": "2024-05-31",
          "purchase_xid": "purchase_123",
          "trial": false
        }
      ]
    }
  }
}
```

##### レスポンス

1. `200` : リクエスト成功
1. `400` : 不正なリクエスト
1. `401` : 認証されていないリクエスト
1. `404` : Namespace が見つからない
1. `422` : 処理不可能なエンティティ
1. `500`: サーバーエラー
