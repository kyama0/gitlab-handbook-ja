---
title: "Workspaces ADR 003: ワークスペースの作成とアクセスに関するユーザー認可"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/003_authorizing_user_to_create_and_access_workspace/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

> [!WARNING]  
> どのユーザーがどの agentk を使用してワークスペースを作成できるかに関する決定は、[009: GitLab Agent for Kubernetes（agentk）のグループへのマッピングを許可する](./009_allow_mapping_of_agentk_to_groups.md) によって上書きされました。

## コンテキスト

[002: ワークスペースのコンピュートとストレージのプロビジョニング](./002_provision_compute_and_storage.md) で GitLab Agent for Kubernetes を使用することを決定しました。
GitLab Agent for Kubernetes（agentk）は特定のプロジェクトに紐づいています。
プロジェクトが特定の agentk を使用できるようにする簡単な方法を提供したいと考えています。

## 決定

ユーザーは、プロジェクトと同じグループ/サブグループ配下にあるすべての agentk を使用して特定のプロジェクトからワークスペースを作成できます。ユーザーはこれらのグループで Developer アクセス権も持っている必要があります。

ワークスペースにアクセスできるのは、それを作成したユーザーのみです。

## 結果

これらのグループ/サブグループで Developer アクセス権を要求することは、多くの組織にとって制限的になる可能性があります。

これは、この機能カテゴリを顧客と最速で検証し、フィードバックを反復する方法を提供するため、現時点では許容範囲です。

## 代替案

私たちは非常に初期段階にあり、ユーザーが試してフィードバックを提供できるものを早く出したいと考えているため、この時点では代替案を真剣に検討しませんでした。
