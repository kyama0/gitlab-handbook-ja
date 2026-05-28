---
title: '自動ユーザー削除'
description: '自動ユーザー削除に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/users/automated-user-deletion/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
translated_at: "2026-05-09T21:03:24Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このドキュメントは、Zendesk 内で自動ユーザー削除がどのように行われるかを説明します。

## Zendesk Global {#zendesk-global}

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクト: [User deletion](https://gitlab.com/gitlab-support-readiness/zendesk-global/users/deletion)

{{% /alert %}}

毎日 0045 UTC に、`bin/delete` スクリプトを通じて以下の条件を満たすすべてのエンドユーザーが Zendesk インスタンスから削除されます。

- ロールが `end-user` である
- 組織に紐づいていない
- サスペンドされていない（サスペンドされたユーザーは削除前に手動レビューが必要）
- 3 年以上前に作成されている（データ保持ポリシーに従う）

## Zendesk US Government {#zendesk-us-government}

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクト: [User deletion](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/users/deletion)

{{% /alert %}}

毎日 0045 Pacific に、`bin/delete` スクリプトを通じて以下の条件を満たすすべてのエンドユーザーが Zendesk インスタンスから削除されます。

- ロールが `end-user` である
- 属性 `not_in_sfdc` の値が `true` である（つまりチェックボックスがチェックされている）
- サスペンドされていない（サスペンドされたユーザーは削除前に手動レビューが必要）

## コンプライアンスレベルの削除 {#compliance-level-deletions}

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクト:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/maintenance-tasks)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/maintenance-tasks)

{{% /alert %}}

ユーザーは Zendesk から削除された後（自動削除または手動削除を問わず）、一定期間「削除済み」状態のまま残ります。コンプライアンスレベルの削除では、データ保持コンプライアンス要件を満たすため、これらの削除済みユーザーを Zendesk のシステムから完全に永久削除します。

1 日 2 回（0045 と 1245 UTC）、両プロジェクトの `bin/purge_deleted_users` スクリプトが実行され、Zendesk インスタンスから先頭 700 件の削除済みユーザー（Zendesk API の上限）を削除します。
