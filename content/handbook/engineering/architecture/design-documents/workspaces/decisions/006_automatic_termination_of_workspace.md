---
title: "Workspaces ADR 006: ワークスペースの自動終了"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/006_automatic_termination_of_workspace/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-19T23:08:59-07:00"
---

> [!WARNING]  
> この決定は [012: ワークスペースの自動サスペンション](./012_automatic_suspension_of_workspace.md) によって上書きされました。

## コンテキスト

ワークスペースが作成されると、終了するまでコンピュートとストレージのコストが発生し続けます。
ユーザーがワークスペースを停止できるようにすることで、少なくともコンピュートコストを節約できます。
しかし、ユーザーはその日の作業が終わった後にワークスペースを停止しないことがあります。
そのため、ユーザーの行動に依存せずに組織がコストを節約できる方法を提供する必要があります。

## 決定

不必要なリソース使用とコストを避けるために、ワークスペースは一定期間後に自動的に終了されるべきです。

詳細は [こちら](https://gitlab.com/groups/gitlab-org/-/epics/10595) をご覧ください。

## 結果

ユーザーが作業を保存しない場合、一定期間後にワークスペースが自動終了されると作業を失う可能性があります。

## 代替案

他の代替案は検討しませんでした。
