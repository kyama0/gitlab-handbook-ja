---
title: "Workspaces"
status: ongoing
creation-date: "2022-11-15"
authors: [ "@vtak" ]
coach: "@grzesiek"
approvers: [ "@michelle-chen", "@adebayo_a" ]
owning-stage: "~devops::create"
participating-stages: []
toc_hide: true
no_list: true
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-22T12:38:25+10:00"
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">ongoing</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/vtak" class="text-blue-600 hover:underline">@vtak</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/michelle-chen" class="text-blue-600 hover:underline">@michelle-chen</a>, <a href="https://gitlab.com/adebayo_a" class="text-blue-600 hover:underline">@adebayo_a</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::create</span></td>
<td class="px-3 py-2 border border-gray-300">2022-11-15</td>
</tr>
</tbody>
</table>
</div>


## はじめに

開発者がプロジェクトに初めてコントリビュートする際に直面する共通の障壁の一つが、ローカル開発環境のセットアップです。相互に依存するパッケージを管理し、バージョン互換性の問題を解決していくプロセスは時間がかかり、特に偶にしかコントリビュートしない方や複数プロジェクトを頻繁に行き来する方にとっては意欲をそぐ原因になりかねません。複雑な環境では、開発チームが制限や認証情報、ビルド手順、標準を設けることも多く、開発環境の脆弱性をさらに高めることになります。

突き詰めると、開発者は開発環境の管理に費やす時間を減らし、高品質なコードのコントリビュートに集中したいと考えています。GitLab のミッションは「誰もがコントリビュートできるようにする」ことです。Workspaces を通じて、私たちはローカル開発環境の設定・維持管理という責任を取り除くことを目指しています。

## 目標

詳細については [Workspaces direction page](https://about.gitlab.com/direction/create/remote_development/workspaces/) をご覧ください。

## 用語集

1. **GitLab VS Code fork**: VSCode プロジェクトの内部フォーク。
1. **Web IDE**: GitLab VS Code fork を基盤として GitLab コンテキストを追加した IDE。
   この IDE は純粋にブラウザ上で動作します。
1. **GitLab VS Code fork for Workspaces**: GitLab VS Code fork を基盤として、Workspaces での使用に適したパッチを適用した IDE。
   この IDE はサーバーと、リモート接続に使用するオプションのクライアントを実行します。
1. **GitLab Workflow extension**: VS Code に GitLab 機能を追加する拡張機能。
1. **GitLab Agent for Kubernetes（agentk）**: GitLab と Kubernetes の統合タスクを解決するためのコンポーネント。
1. **GitLab Agent for Workspaces（agentw）**: GitLab と Workspace の統合タスクを解決するためのコンポーネント。
1. **GitLab Relay（KAS）**: 異なる GitLab エージェント（agentk、agentw）と GitLab 間の接続を仲介するために、GitLab Rails アプリケーションと並行して動作するサーバー。

## 概要

各ワークスペースは、GitLab Agent for Kubernetes（agentk）との統合を通じて、Kubernetes の Pod 内にあるユーザー提供コンテナのグループとして実行されます。
各 Pod には IDE（例: GitLab VS Code fork for Workspaces）を注入します。私たちは IDE に依存しないアーキテクチャを目指しています。
ワークスペースへのアクセス方法は、ユーザーの Kubernetes クラスターにデプロイされた GitLab Workspaces Proxy 経由か、ワークスペースに注入された GitLab Agent for Workspaces（agentw）が確立する双方向 gRPC トンネル経由のいずれかとなります。

## アーキテクチャ

詳細な実装については [Kubernetes セットアップのアーキテクチャ](./architecture_kubernetes_setup.md) をご覧ください。

## 決定事項

1. [001: 使用する設定フォーマット](./decisions/001_configuration_format_to_use.md)
1. [002: ワークスペースのコンピュートとストレージのプロビジョニング](./decisions/002_provision_compute_and_storage.md)
1. [003: ワークスペースの作成とアクセスに関するユーザー認可](./decisions/003_authorizing_user_to_create_and_access_workspace.md)
1. [004: ワークスペースへのアクセスに関するユーザートラフィックの認証](./decisions/004_authentication_of_user_traffic_to_access_workspace.md)
1. [005: コンテナのユーザー/グループ ID の明示的な定義](./decisions/005_explicitly_set_user_group_id_of_containers.md)
1. [006: ワークスペースの自動終了](./decisions/006_automatic_termination_of_workspace.md)
1. [007: プライベートプロジェクトからのワークスペース作成](./decisions/007_create_workspace_from_private_projects.md)
1. [008: ワークスペース内の非 HTTP サービスへのアクセスに SSH を使用する](./decisions/008_use_ssh_to_access_non_http_services.md)
1. [009: GitLab Agent for Kubernetes（agentk）のグループへのマッピングを許可する](./decisions/009_allow_mapping_of_agentk_to_groups.md)
1. [010: GitLab VS Code fork for Workspaces の拡張機能マーケットプレイス](./decisions/010_extensions_marketplace_for_vscode.md)
1. [011: ワークスペース内への GitLab Duo 機能の統合](./decisions/011_integrate_duo_features_inside_workspace.md)
1. [012: ワークスペースの自動サスペンション](./decisions/012_automatic_suspension_of_workspace.md)
1. [013: プライベートコンテナイメージからのワークスペース作成](./decisions/013_create_workspace_from_private_container.md)
1. [014: Workspaces のデフォルトコンテナイメージと設定](./decisions/014_default_container_image_and_configuration.md)
1. [015: GitLab Agent for Kubernetes（agentk）の GitLab クラスターへのマッピングを許可する](./decisions/015_allow_mapping_of_agentk_to_gitlab_cluster.md)
1. [016: ワークスペース内での sudo コマンド実行をユーザーに許可する](./decisions/016_allow_users_to_run_sudo_commands.md)
1. [017: ワークスペース内でのコンテナビルドおよび実行をユーザーに許可する](./decisions/017_allow_users_to_build_and_run_containers.md)
1. [018: セットアップを簡素化するための GitLab Workspaces Proxy の削除](./decisions/018_remove_gitlab_workspaces_setup.md)

## 参考リンク

- [Workspaces direction](https://about.gitlab.com/direction/create/remote_development/workspaces/)
- [Workspaces | Category Strategy epic](https://gitlab.com/groups/gitlab-org/-/epics/7419)
- [Workspaces | Market analysis](https://gitlab.com/groups/gitlab-org/-/epics/8131)
- [Create Remote Development Group YouTube playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KrRQhnSYRNh1s1mEUypx67-)
