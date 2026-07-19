---
title: '自動ユーザー削除'
description: '自動ユーザー削除に関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/users/automated-user-deletion/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:50:00+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

ここでは、Zendesk 内で自動ユーザー削除がどのように実行されるかを説明します。

## Zendesk Global

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクト: [User deletion](https://gitlab.com/gitlab-support-readiness/zendesk-global/users/deletion)

{{% /alert %}}

毎日 0045 UTC に、次の基準を満たすすべてのエンドユーザーを、`bin/delete` スクリプトによって Zendesk インスタンスから削除します。

- ロールが `end-user` である
- 組織に関連付けられていない
- 一時停止されていない（一時停止中のユーザーは削除前に手動レビューが必要です）
- 作成から 3 年以上経過している（データ保持ポリシーに従う）

## Zendesk US Government

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクト: [User deletion](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/users/deletion)

{{% /alert %}}

毎日 0045 Pacific に、次の基準を満たすすべてのエンドユーザーを、`bin/delete` スクリプトによって Zendesk インスタンスから削除します。

- ロールが `end-user` である
- 属性 `not_in_sfdc` の値が `true` である（チェックボックスがオン）
- 一時停止されていない（一時停止中のユーザーは削除前に手動レビューが必要です）

## コンプライアンスレベルの削除

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクト:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/maintenance-tasks)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/maintenance-tasks)

{{% /alert %}}

ユーザーは Zendesk から削除された後（自動削除または手動削除）、一定期間「削除済み」状態のまま残ります。コンプライアンスレベルの削除では、データ保持コンプライアンス要件を満たすため、これらの削除済みユーザーを Zendesk のシステムから完全に消去します。

毎日 2 回（0045 と 1245 UTC）、両プロジェクトの `bin/purge_deleted_users` スクリプトが実行され、Zendesk インスタンスから最初の 700 件の削除済みユーザーを削除します（Zendesk API の上限）。
