---
title: "Workspaces ADR 018: セットアップを簡略化するために GitLab Workspaces Proxy を削除する"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/018_remove_gitlab_workspaces_setup/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

[004: ワークスペースにアクセスするためのユーザートラフィックの認証](./004_authentication_of_user_traffic_to_access_workspace.md)において、ワークスペースへのユーザートラフィックを認証・認可するために、ユーザーの Kubernetes クラスター内の集中型プロキシである GitLab Workspaces Proxy を使用することが決定されました。

GitLab Workspaces Proxy のセットアップには多くのステップが必要です。ドメインの購入・管理、TLS 証明書のプロビジョニングと自動更新の設定、OAuth アプリケーションの作成などが含まれます。これらの各ステップは複数の方法で失敗する可能性があり、セットアップが複雑になります。

ユーザーにドメインの購入・管理、TLS 証明書の管理、その他の付随的なタスクを負担させることなく、Workspaces の価値をユーザーが享受できるようにセットアップを簡略化する必要があります。Workspaces のセットアップへの参入障壁を低くしたいと考えています。

## 決定事項

ユーザーの Kubernetes クラスターから GitLab Workspaces Proxy が不要になるように、トラフィックを適切なワークスペースにプロキシするロジックを、GitLab Relay（KAS）の一部として GitLab がホスト・管理するサーバーに移行します。GitLab Agent for Workspaces（agentw）が各ワークスペース内に注入され、上記のサーバーとの双方向 gRPC 接続を開始します。ユーザートラフィックがサーバーに到達すると、認証・認可され、先に確立した双方向 gRPC 接続を使用して適切なワークスペースにプロキシされます。

詳細は[こちら](https://gitlab.com/groups/gitlab-org/-/epics/16785)をご参照ください。

## 影響

ユーザーの Kubernetes クラスターにおける GitLab Workspaces Proxy の必要性がなくなったため、ユーザーは Ingress Controller をインストールする必要がなくなります。これにより、ユーザーへの要求がさらに減り、全体的なアーキテクチャが簡略化されます。ワークスペースへのすべてのトラフィックは、ワークスペース内から確立されたリバース gRPC トンネルを通じて行われます。

すべてのワークスペースが GitLab が管理するドメインで利用可能になります。各ワークスペースは引き続き一意のホストを持ちます。

## 代替案

Rails をすべてのドメインロジックをモノリスに保つために[ワークスペースへのユーザートラフィックを Rails 経由でルーティングする](https://gitlab.com/gitlab-org/gitlab/-/issues/519307#note_2350473507)ことを検討しましたが、Puma サーバーは各リクエストでブロックされるため採用しませんでした。Workspaces のトラフィックは長期間持続する接続になるため、スケーリングの問題になります。

チームが所有するサービスにすべてのドメインロジックを保つために[ワークスペースへのユーザートラフィックを新しいサービス「GitLab Workspaces Server」経由でルーティングする](https://gitlab.com/gitlab-org/gitlab/-/issues/519307#note_2365114887)ことを検討しましたが、Rails モノリスの外部にあるこのようなアーキテクチャのためのモジュール化されたモノリスである GitLab Relay（KAS）または GitLab Agent にロジックを置くことと比べて、優位性を見出せなかったため採用しませんでした。
