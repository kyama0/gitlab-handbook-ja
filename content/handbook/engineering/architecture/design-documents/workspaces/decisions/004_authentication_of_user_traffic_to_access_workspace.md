---
title: "Workspaces ADR 004: ワークスペースへのアクセスに関するユーザートラフィックの認証"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/004_authentication_of_user_traffic_to_access_workspace/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-19T23:08:59-07:00"
---

## コンテキスト

[002: ワークスペースのコンピュートとストレージのプロビジョニング](./002_provision_compute_and_storage.md) で、必要なすべてのインフラはユーザーが用意し、GitLab Agent for Kubernetes にエージェントモジュールを追加することで GitLab と統合されることを決定しました。

[003: ワークスペースの作成とアクセスに関するユーザー認可](./003_authorizing_user_to_create_and_access_workspace.md) で、ワークスペースにアクセスできるのはその作成者のみとすることを決定しました。

ユーザーのインフラでこれらの認可ルールを適用する方法が必要です。

## 決定

ユーザーの Kubernetes クラスターにデプロイされる新しいサービスを作成します。
このサービスは、それぞれのワークスペースにプロキシする前に、すべてのユーザートラフィックの認証と認可を担当します。

特定のドメインで Kubernetes クラスターに入ってくるすべてのトラフィックは `gitlab-workspaces-proxy` に転送され、そのトラフィックをどのように処理するかを決定します。

```mermaid
flowchart TB
  UserTraffic[User Traffic] --> Ingress
  subgraph KubernetesCluster[Kubernetes Cluster]
    Ingress --> GitLabWorkspacesProxy[GitLab Workspaces Proxy]
    GitLabWorkspacesProxy --4.1. Proxy--> Workspace1[Workspace 1]
    GitLabWorkspacesProxy --4.2. Proxy--> Workspace2[Workspace 2]
    GitLabWorkspacesProxy --4.3. Proxy--> Workspace3[Workspace 3]
  end
  GitLabWorkspacesProxy --1. OAuth 2--> GitLab
  GitLab --2. Redirect--> GitLabWorkspacesProxy
  GitLabWorkspacesProxy --3. Authorization API--> GitLab
```

詳細は [こちら](https://gitlab.com/groups/gitlab-org/-/epics/9940) をご覧ください。

## 結果

ユーザーは Workspaces をセットアップするために、GitLab Agent for Kubernetes と共に Kubernetes クラスターに別のコンポーネントをインストールする必要があります。

## 代替案

サイドカープロキシアプローチの使用を検討しました。このアプローチでは、トラフィックをプロキシするアプリケーションが各ワークスペースに注入され、ワークスペースへのすべてのトラフィックがこのプロキシを通じて流れます。プロキシは単一のワークスペースのトラフィックのみを処理します。Kubernetes の Ingress コントローラーが適切なプロキシに転送します。プロキシと Kubernetes Pod 内にある同じネットワーク名前空間を共有するため、プロキシはループバックインターフェース（localhost）経由でワークスペースと通信できます。

```mermaid
flowchart TB
  UserTraffic[User Traffic] --> Ingress
  subgraph WorkspaceCluster[Workspace Cluster]
    Ingress --> Workspace1Proxy
    Ingress --> Workspace2Proxy
    Ingress --> Workspace3Proxy
    subgraph workspace1[Workspace 1]
      Workspace1Proxy[Workspace Sidecar Proxy] --Proxy--> Workspace1Server[Workspace 1 Server]
    end
    subgraph workspace2[Workspace 2]
      Workspace2Proxy[Workspace Sidecar Proxy] --Proxy--> Workspace2Server[Workspace 2 Server]
    end
    subgraph workspace3[Workspace 3]
      Workspace3Proxy[Workspace Sidecar Proxy] --4.3. Proxy--> Workspace3Server[Workspace 3 Server]
    end
  end

  Workspace3Proxy --1. OAuth 2--> GitLab
  GitLab --2. Redirect--> Workspace3Proxy
  Workspace3Proxy --3. Authorization API--> GitLab
```

集中型アプローチの方が変更/アップグレードを容易に行えるため、このアプローチは採用しませんでした。

また、[Kubernetes Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) リソースに認証 [アノテーション](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/) を追加して、[Ingress コントローラー](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/)（例: `ingress-nginx`）が認証と認可を別のプロセスに委任できるようにすることも検討しました。課題は、これらのアノテーションが標準化されていないことです。[Ingress 仕様](https://kubernetes.io/docs/concepts/services-networking/ingress/) の一部ではなく、異なる Ingress コントローラーでサポートされていない場合があります。各 Ingress コントローラーに対して認証プロバイダーをセットアップするプロセスをドキュメント化する必要があります。このためこのアプローチは採用しませんでした。
