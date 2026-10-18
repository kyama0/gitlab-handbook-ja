---
title: 管理者メモの使用
category: GitLab.com
subcategory: Accounts
description: "GitLab.com アカウントに管理者メモを追加するタイミングと方法のワークフロー"
upstream_path: /handbook/support/workflows/admin_note/
upstream_sha: 4684d72f27f3401d3ae72a26d72ae46eaeaab929
translated_at: "2026-10-18T09:33:43Z"
translator: claude
stale: false
lastmod: "2026-10-16T18:56:09+08:00"
---

### 概要

管理者メモは、GitLab.com ネームスペースに対するアカウント変更や実行されたアクションのクイックリファレンスとして機能します。例えば、ユーザーが以前に違反でフラグ付けされたかを判定して、さらなる不正使用を防ぐのにも役立ちます。

以下のケースの状況に遭遇した場合、管理者メモが必要です。

- ユーザーがリクエストした変更
- コンピューティング時間のリセット
- 法的事案
- セキュリティまたは不正使用事案

### メモの追加 {#adding-the-note}

管理者メモの追加は、以下のいずれかの方法で行えます:

1. 管理者アカウント
1. ユーザー（`/admin/users/username`）またはトップレベルグループ（`admin/groups/namespace_path`）の管理ページに移動します
1. `Edit` をクリックします
1. 関連する 管理者メモを追加します
1. 完了したら `Save` をクリックします
1. ChatOps（ユーザーのみ利用可能）:
1. 適切なアカウントであることを確認するためにユーザーを見つけます: `/chatops gitlab run user find <username or current email>`
1. 管理者メモを追加します: `/chatops gitlab run user note <username or current email> 'admin note here'`

一般的に、フォーマットは標準で 1 行形式にすべきです:

- 違反: `Date | Note | Case | Link`
- 実行されたアクション: `Date | Note | Link`

このタイプのリクエストでチケットが提出されない場合は、リンクとして Slack の会話または Issue へのリンクを使用できます。

#### メモの表示 {#viewing-the-notes}

特定のユーザーの管理者メモを調べる方法として、チームメンバーは 2 つの方法を使用できます:

1. チームメンバーが 管理者権限を持つ場合、関連するネームスペースの管理ページに移動すると 管理者メモが表示されます。
1. （ユーザーのみ）チームメンバーは、ChatOps ボットが招待されている Slack チャンネルで以下のコマンドを使って ChatOps で特定のユーザーの管理者メモを読み取れます
   > `/chatops gitlab run user find <username or email>`

#### メモの例 {#sample-notes}

2FA の無効化:
`2026-01-16 | 2FA removed | user requested | https://gitlab.zendesk.com/agent/tickets/123`

メールアドレスの変更／削除:
`2026-01-16 | Primary Email Change - No Access | User Requested | https://gitlab.zendesk.com/agent/tickets/123`

DMCA リクエスト:
`2026-01-16 | DMCA Violation | Abuse | https://gitlab.zendesk.com/agent/tickets/123`

不正使用事案:
`2026-01-16 | Flagged for terms violation |  Abuse Case | https://gitlab.zendesk.com/agent/tickets/123`

ユーザーがブロックされた:
`2026-01-16 | User blocked by infra | https://gitlab.com/gitlab-com/support/internal-requests/issues/441`

名前占有による名前変更:
`2026-01-16 | Name Squatting Request | https://gitlab.zendesk.com/agent/tickets/123`

コンピューティング時間のリセット:
`2026-01-16 | Compute minutes reset | Bug | https://gitlab.zendesk.com/agent/tickets/123`
