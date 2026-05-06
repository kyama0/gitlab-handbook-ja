---
owning-stage: "~devops::data stores" # because Tenant Scale is under this
title: 'Cells ADR 003: Cell ごとに 1 つの GKE クラスタ'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/003_num_gke_clusters_per_cell/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## 背景

[この Issue](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25068) では次のことを議論しました:

- 1 つの GKE クラスタに複数の Cells を置くべきか、1 つだけ置くべきか
- Cell は 1 つの GKE クラスタで動作すべきか、複数のクラスタで動作すべきか

## 決定

Cell ごとに 1 つの GKE クラスタを持つべきと決定しました。この決定の動機はシンプルさです: Cells のツーリングは既存の Dedicated ツーリングを活用し、それは [GitLab Environment Toolkit (GET)](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) を使用して [Reference Architectures](https://docs.gitlab.com/ee/administration/reference_architectures/index.html) をデプロイします。Reference Architectures のいずれも、複数の GKE クラスタにまたがって単一の GitLab インスタンスを実行することはサポートしていません。

[ADR 002](002_gcp_project_boundary.md) で決定された 1 Cell につき 1 GCP プロジェクトという方針と、上記の選択により、複数の GKE クラスタが単一の Cell を担う可能性は排除されます。

## 結果

Cell ごとに 1 つの GKE クラスタを持つことで、GKE クラスタ間で複雑なルーティングロジックを構築する必要がなくなり、Cell の provisioning と管理がより簡単になります。

万が一クラスタあたりのノード数の上限（[現時点では 15000](https://cloud.google.com/kubernetes-engine/quotas)）に達した場合は、複数のクラスタにワークロードを分散させるのではなく、ノードを垂直スケールするしかなくなります。とはいえ、現在の GitLab.com の本番セットアップでは約 300 ノードしか使用していないため、これが起こる可能性は当面、あるいはまったくないと言えます。

## 代替案

上記で議論された代替案は GET に大幅な構造変更を必要とし、既存のツーリングを使わない方が効率的（かつ破壊的でない）になるとさえ言えるでしょう。しかし、それは Cells インフラ全般の [philosophy](../infrastructure/index.md) に反します。
