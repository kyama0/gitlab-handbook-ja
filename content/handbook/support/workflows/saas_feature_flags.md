---
title: GitLab.com 上のプロジェクトまたはグループに対するフィーチャーフラグの有効化と無効化
category: GitLab.com
description: "お客様から GitLab.com のプロジェクトまたはグループに対してフィーチャーフラグを有効化するよう依頼された場合に従うワークフロー"
upstream_path: /handbook/support/workflows/saas_feature_flags/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T02:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-10T14:04:57-08:00"
---

## 概要

このワークフローでは、お客様から GitLab.com のグループ、プロジェクト、またはユーザーに対して[フィーチャーフラグ](https://docs.gitlab.com/development/feature_flags/controls/)を有効化するサポートを依頼された場合のケースを取り扱います。

フィーチャーフラグの有効化は ChatOps を使用して行うことができます。ChatOps を使用するには、事前に[アクセスをリクエスト](https://docs.gitlab.com/development/chatops_on_gitlabcom/#requesting-access)する必要があります。

## プロセス

お客様からフィーチャーフラグのリクエストがあった場合:

1. そのフィーチャーフラグの Issue にお客様向けに有効化できる旨が記載されていない場合、フィーチャーフラグの Issue にコメントを残し、サポートが当該フィーチャーフラグをお客様向けに有効化することについて、プロダクトおよび開発チームの了承を確認します。
1. ZenDesk で確認したお客様の Account Owner / Customer Success Manager をチケットの CC に追加し、リクエストを認識してもらえるようにします。
1. 適切な [ChatOps コマンド](#chatops)を実行して有効化します。
1. 有効化後、フィーチャーフラグの Issue に以下を記載した内部コメントを追加します:

- フィーチャーフラグの Issue 上での ChatOps レスポンスのスクリーンショット。これには、フィーチャーフラグのスコープ対象であるグループ、プロジェクト、またはユーザーが含まれている必要があります。
- 関連する ZenDesk チケット。

エンジニアリングチームからお客様に対してフィーチャーフラグを有効化することが推奨された場合:

1. お客様にデバッグを支援する、または問題を解決すると見込まれる機能を有効化したい旨をお伝えします。
1. お客様にこのフィーチャーフラグの Issue へのリンクを送り、フラグが制御している変更内容を認識していただけるようにします。
1. お客様から変更を実施してよいことを確認できたら、フィーチャーフラグを有効化します。
1. ZenDesk で確認したお客様の Account Owner / Customer Success Manager をチケットの CC に追加し、リクエストを認識してもらえるようにします。
1. 適切な [ChatOps コマンド](#chatops)を実行して有効化します。
1. 有効化後、フィーチャーフラグの Issue に以下を記載した内部コメントを追加します:

- フィーチャーフラグの Issue 上での ChatOps レスポンスのスクリーンショット。これには、フィーチャーフラグのスコープ対象であるグループ、プロジェクト、またはユーザーが含まれている必要があります。
- 関連する ZenDesk チケット。

フィーチャーフラグの依頼を断ると、それ以上のトラブルシューティングを妨げる場合があります。フラグでカバーされている機能が、いつリリースされる見込みかをお客様にお知らせしてください。

過去に有効化されたフィーチャーフラグを無効化するよう、お客様から依頼されることもあります。

1. そのフィーチャーフラグがまだアクティブであることを確認します。アクティブでない場合は、フィーチャーフラグはすでに使われておらず、フラグでカバーされていた機能が本番展開されている旨をお客様にお伝えします。
1. ZenDesk で確認したお客様の Account Owner / Customer Success Manager をチケットの CC に追加し、リクエストを認識してもらえるようにします。
1. 適切な [ChatOps コマンド](#chatops)を実行して無効化します。
1. フラグを有効化した際にフィーチャーフラグの Issue に内部コメントを作成していた場合、そのスレッドを以下で更新します:

- フィーチャーフラグの Issue 上での ChatOps レスポンスのスクリーンショット。これには、フィーチャーフラグのスコープ対象であるグループ、プロジェクト、またはユーザーが含まれている必要があります。
- 関連する ZenDesk チケット。

## ChatOps {#chatops}

ChatOps を使用してフィーチャーフラグを有効化するには、フィーチャーフラグのドキュメントに記載された[手順](https://docs.gitlab.com/development/feature_flags/controls/#process)に従ってください。

通常はアクター単位でフィーチャーフラグを設定することになり、#production Slack チャンネルで以下のいずれかを実行します。プレースホルダーの置き換えを忘れないようご注意ください。

- プロジェクトアクター対象: `/chatops run feature set --project=<path/to/project_1,path/to/project_2> feature_flag_to_be_enabled true`
- グループアクター対象: `/chatops run feature set --group=<group_namespace> feature_flag_to_be_enabled true`
- ユーザーアクター対象: `/chatops run feature set --user=<username> feature_flag_to_be_enabled true`

どのように適用すべきか不明な場合は、フィーチャーフラグの Issue で適切なオーナーまたはチームに問い合わせてください。自分自身のグループ、プロジェクト、またはユーザーに対してテストすることもできますが、テストが終わったらフィーチャーフラグを必ず無効化してください。
