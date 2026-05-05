---
title: "Workspaces ADR 017: ワークスペース内でコンテナをビルド・実行できるようにする"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/017_allow_users_to_build_and_run_containers/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

[016: ワークスペース内で sudo コマンドを実行できるようにする](./016_allow_users_to_run_sudo_commands.md)において、ユーザーがワークスペース内で sudo 権限でコマンドを安全に使用できるようにすることを決定しました。これにより柔軟性が大幅に向上しますが、開発環境では実行時に依存関係を管理・使用するためにコンテナのビルドと実行が必要になることがあります。

ワークスペース内でユーザーが安全にコンテナをビルド・実行できる方法を提供する必要があります。

## 決定事項

[016: ワークスペース内で sudo コマンドを実行できるようにする](./016_allow_users_to_run_sudo_commands.md)で達成した、sudo 権限でコマンドを安全に実行することが、ワークスペース内でコンテナをビルド・実行するための前提条件です。

ワークスペース内でコンテナをビルド・実行するために、引き続き Sysbox を活用することを決定しました。

詳細は[こちら](https://gitlab.com/groups/gitlab-org/-/epics/11319)をご参照ください。

## 影響

ユーザーがワークスペース内でコンテナをビルド・実行できる方法を提供しなければ、ローカル開発環境の代替を目指す Workspaces の価値提案を損なうことになります。

Sysbox を活用することは、機能面でサードパーティツールに依存することを意味します。これは[016: ワークスペース内で sudo コマンドを実行できるようにする](./016_allow_users_to_run_sudo_commands.md)で述べた理由により許容範囲です。

## 代替案

すでにワークスペース内で sudo 権限でコマンドを安全に実行するために Sysbox を使用しているため、他の代替案を探すのではなく Sysbox を活用することにしました。
