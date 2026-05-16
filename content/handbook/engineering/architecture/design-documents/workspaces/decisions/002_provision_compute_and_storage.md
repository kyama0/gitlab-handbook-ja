---
title: "Workspaces ADR 002: ワークスペースのコンピュートとストレージのプロビジョニング"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/002_provision_compute_and_storage/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-19T23:08:59-07:00"
---

## コンテキスト

開発環境を提供するには、必要に応じてリソースを動的にスピンアップできるコンピュートおよびストレージプラットフォームが必要です。

## 決定

以下の理由から [Kubernetes](https://kubernetes.io/) を使用することにしました:

- [CNCF](https://www.cncf.io/) プロジェクトであること。
- クラウド非依存であり、すべてのパブリッククラウドとのファーストクラスの統合を提供して、コンピュート/ストレージを動的にプロビジョニングできること。
- セルフマネージドが基本、つまりユーザーが自分のインフラを持ち込めるため、課金やメータリングを気にする必要がないこと。
- Kubernetes と GitLab のシームレスな統合を可能にする [GitLab Agent for Kubernetes](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent) との統合がすでに存在すること。
- カスタム統合なしに、異なるプライベート/パブリッククラウドで開発環境を最速でデプロイする方法を提供すること。

現時点ではマネージドサービスは提供しません。
必要なすべてのインフラはユーザーが用意し、GitLab Agent for Kubernetes にエージェントモジュールを追加することで GitLab と統合されます。

## 結果

Kubernetes を明示的に対象とした製品の過去の経験から、すべての顧客が Kubernetes を使用しているわけではなく、また Kubernetes システムを管理する専門知識を持っているわけでもないため、顧客との間に障壁が生じたことがありました。

これはこの機能カテゴリを顧客と最速で検証し、フィードバックを反復する方法を提供するため、現時点では許容範囲です。

マネージドサービスを提供しないことは、ユーザーからの一定のインフラに関する期待があるため、採用/利用に影響を与える可能性があります。
ただし、マネージドサービスを提供するには、課金とメータリングを整理するために大幅な追加投資が必要になります。

## 代替案

CI ランナーの使用を簡単に検討しましたが、物事がどのように機能するかのロジスティクスを見つけることができませんでした。

[DevWorkspace Operator](https://github.com/devfile/devworkspace-operator) は devfile のサポートがすでにあるため検討しましたが、以下の理由で採用しませんでした:

- [Kubernetes カスタムリソース](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) であるため、ユーザーは自分の Kubernetes クラスターにサードパーティの依存関係をインストールする必要があります。
- DevWorkspace Operator はクラウドネイティブな証明書管理のための別の Kubernetes カスタムリソースである [cert-manager](https://cert-manager.io/) に対する追加の依存関係があります。
- カスタマイズを追加することは、アップストリームプロジェクトとそのリリースとの調整が必要になるため困難です。
- 詳細は [こちら](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/97449#note_1131215629) をご覧ください。

[Eclipse Che](https://gitlab.com/gitlab-org/gitlab/-/issues/366052) の使用を検討しましたが、以下の理由で採用しませんでした:

- DevWorkspace Operator に依存しているため、上記と同じ問題があります。
- Kubernetes クラスターへの Ingress コントローラー（traefik）について独自のアプローチを持っています。

当初は GitLab Agent for Kubernetes と共に DevWorkspace Operator を使用してスタートし、[DevWorkspace Operator の依存関係の削除](https://gitlab.com/groups/gitlab-org/-/epics/9895) の一環として上記の理由により DevWorkspace Operator の依存関係を削除することになりました。
