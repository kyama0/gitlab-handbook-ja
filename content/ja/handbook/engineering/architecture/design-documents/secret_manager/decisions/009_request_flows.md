---
title: 'GitLab Secrets Manager ADR 009: リクエストフロー図'
owning-stage: "~devops::verify"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/secret_manager/decisions/009_request_flows/
upstream_sha: 86cfa2bd7d73df5a673fe5ebd33b028d0f540434
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

オフサイトの一環として、以下のリクエストフローと Kubernetes 固有のアーキテクチャ図が作成されました。

## リクエストフロー

### Runner によるシークレット取得

```mermaid
sequenceDiagram
    Runner->>+Puma: Fetch Next Job
    Puma->>+Runner: Resp: JWT + job metadata (auth, secret fetch URIs)
    Runner->>+OpenBao: Auth with JWT
    OpenBao->>+Runner: Resp: with Token
    Runner->>+OpenBao: Fetch Secret
    OpenBao->>+Runner: Resp: Secret Value
```

### ユーザー→Rails 管理インタラクション

```mermaid
sequenceDiagram
    User->>+Puma (GraphQL): List Secrets for Project
    Puma (GraphQL)->>+OpenBao: List Secrets for Project (User-specific Signed JWT)
    OpenBao->>+Puma (GraphQL): Resp: Secret List
    Puma (GraphQL)->>+User: Resp: Secret List
```

### ユーザー→Rails プロビジョニングステップ

```mermaid
sequenceDiagram
    User->>+Puma (GraphQL): Enable Secrets Management for Project
    Puma (GraphQL)->>+Puma (GraphQL): Enqueue Provision Job
    Puma (GraphQL)->>+User: Resp: Enqueue Success
    Sidekiq->>+Sidekiq: Dequeue Job
    Sidekiq->>+OpenBao: Create Project Resources (auth, policies, secret engine)
    OpenBao->>+Sidekiq: Resp: OK
    User->>+Puma (GraphQL): Get Provisioning Status
    Puma (GraphQL)->>+Puma (GraphQL): Lookup Job Status
    Puma (GraphQL)->>+User: Resp: Finished
```

### リクエスト転送フロー

```mermaid
sequenceDiagram
    Client->>+OpenBao Standby: Request
    OpenBao Standby->>+OpenBao Standby: Refresh active node GRPC connection (background, continuous)
    OpenBao Standby->>+OpenBao Active: Forward Request (GRPC)
    OpenBao Active->>+OpenBao Standby: Respond Request (GRPC)
    OpenBao Standby->>+Client: Response
```

現時点（OpenBao v2.3.0 まで、おそらく v2.4.0 終了時）では、このフローはリクエストの種類に関わらず発生します。すべてのリクエストはアクティブノードによってのみ処理されます。

### アクティブノードの内部リクエストフロー

GitLab では、`OpenBao` とラベル付けされているすべてのものが単一のアクティブノードプロセスの一部となります。

```mermaid
sequenceDiagram
    Client->>+OpenBao Core: Request (may be proxied by standby)
    OpenBao Core->>+OpenBao Core: Check authentication (token store)
    OpenBao Core->>+OpenBao Core: Check authorization (policy store)
    OpenBao Core->>+OpenBao Plugin: Route Request
    OpenBao Plugin->>+OpenBao Cache: Storage Operation
    OpenBao Cache->>+PostgreSQL: Storage Requests (cache miss and writes)
    PostgreSQL->>+OpenBao Cache: Result: Storage Operation
    OpenBao Cache->>+OpenBao Plugin: Result: Storage Operation
    OpenBao Plugin->>+OpenBao Core: Response
    OpenBao Core->>+OpenBao Core: Create Token (login request only)
    OpenBao Core->>+Client: Response
```

キャッシュは分離されており、スケーラブルな環境においてストレージが変更された場合にキャッシュ無効化を処理する必要があることを把握しています。今日は Raft によってクラスタ化された方法で処理されています。PostgreSQL では、そのためのメカニズムがありません。これは GRPC になる可能性がありますが、アップストリームの OpenBao 水平スケーラビリティワーキンググループによって決定されます。

### OIDC 登録の動作

```mermaid
sequenceDiagram
    Initializer->>+OpenBao: Set JWT Config with OIDCDiscoveryURL=gitlab
    OpenBao->>+GitLab Puma: Fetch OIDC Issuer Info
    GitLab Puma->>+OpenBao: Return OIDC Issuer Info
    OpenBao->>+Initializer: Return OK
```

認証時：

```mermaid
sequenceDiagram
    Client->>+OpenBao: Login with JWT
    OpenBao->>+GitLab Puma: Fetch OIDC Issuer Info (Once Per Startup)
    GitLab Puma->>+OpenBao: Return OIDC Issuer Info (Once Per Startup)
    OpenBao->>+OpenBao: Cache OIDC Issuer (Once Per Startup)
    OpenBao->>+OpenBao: Validate JWT against cached issuer
    OpenBao->>+Client: Return Token
```

---

将来的には、以下のようにしたいと考えています：

```mermaid
sequenceDiagram
    Initializer->>+OpenBao: Set JWT Config with OIDCDiscoveryURL=gitlab
    OpenBao->>+Initializer: Return OK
```

認証時またはマニュアルの `jwt/config/verify` エンドポイントでのみ発行者情報を取得するようにします。これは [openbao#1306](https://github.com/openbao/openbao/pull/1306) によって処理され、v2.3.0 の一部となる予定です。

### 監査ログ

```mermaid
sequenceDiagram
    OpenBao->>+OpenBao: Enqueue Audit Log
    OpenBao->>+Puma: Emit Audit Log
    Puma->>+PostgreSQL: Persit Audit Log
    Puma->>+Destination: Stream Audit Log
```

詳細については、[監査イベントストリーミング](https://docs.gitlab.com/administration/compliance/audit_event_streaming/)ドキュメントを参照してください。

## アーキテクチャ

### KMS なしの Kubernetes

```mermaid
flowchart TD
    Ingress


        Service_OB([HTTP API])

    subgraph OpenBao
        OB_1[Primary]
        OB_2[Standby A]
        OB_3[Standby B]

        Service_Primary([Primary gRPC])
        end

    Ingress --> Service_OB
    Service_OB --> OB_1
    Service_OB --> OB_2
    Service_OB --> OB_3

    OB_2 -. forward .-> Service_Primary
    OB_3 -. forward .-> Service_Primary

    Service_Primary --> OB_1

    OB_1 -->Service_DB
    OB_1 -. lock maintenance .->Service_DB
    OB_2 -. lock monitor .->Service_DB
    OB_3 -. lock monitor .->Service_DB

    Service_DB([PostgreSQL]) -->    DB[(PostgreSQL)]

```

この場合、Kubernetes シークレットを使用してデータベースアクセス認証情報に加え、自動アンシール用の静的シークレットをプロビジョニングします。

### KMS ありの Kubernetes

KMS または HSM を含む追加図：

```mermaid
flowchart TD
    Ingress


        Service_OB([HTTP API])

    subgraph OpenBao
        OB_1[Primary]
        OB_2[Standby A]
        OB_3[Standby B]

        Service_Primary([Primary gRPC])
        end

    Ingress --> Service_OB
    Service_OB --> OB_1
    Service_OB --> OB_2
    Service_OB --> OB_3

    OB_2 -. forward .-> Service_Primary
    OB_3 -. forward .-> Service_Primary

    Service_Primary --> OB_1

    OB_1 -->Service_DB
    OB_1 -. lock maintenance .->Service_DB
    OB_2 -. lock monitor .->Service_DB
    OB_3 -. lock monitor .->Service_DB

    Service_DB([PostgreSQL]) -->    DB[(PostgreSQL)]

    OB_1 -- auto-unseal --> KMS
    OB_2 -- auto-unseal --> KMS
    OB_3 -- auto-unseal --> KMS
```

機能的には、すべての KMS/HSM フローは同等です。KMS は、すべての鍵マテリアルが同じである限り、別々のインスタンスを使用できます。

スタンバイノードは、タイムリーなフェイルオーバー耐障害性への参加準備を確保するために、自動アンシール機能が必要です。
