---
title: Admin Note の使用
category: GitLab.com
subcategory: Accounts
description: "GitLab.com アカウントへの admin note を追加するタイミングと方法のワークフロー"
upstream_path: /handbook/support/workflows/admin_note/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T19:23:50Z"
translator: claude
stale: false
lastmod: "2026-01-13T13:57:51+00:00"
---

### 概要

admin note は、GitLab.com ネームスペースに対するアカウント変更や実行されたアクションのクイックリファレンスとして機能します。例えば、ユーザーが以前に違反でフラグ付けされたかを判定して、さらなる不正使用を防ぐのにも役立ちます。

以下のケースの状況に遭遇した場合、admin note が必要です。

- ユーザーがリクエストした変更
- コンピュート分のリセット
- 法的事案
- セキュリティまたは不正使用事案

### Note の追加

admin note の追加は、以下のいずれかの方法で行えます:

1. Admin アカウント
1. ユーザー（`/admin/users/username`）またはトップレベルグループ（`admin/groups/namespace_path`）の管理ページに移動します
1. `Edit` をクリックします
1. 関連する admin note を追加します
1. 完了したら `Save` をクリックします
1. ChatOps（ユーザーのみ利用可能）:
1. 適切なアカウントであることを確認するためにユーザーを見つけます: `/chatops run user find <username or current email>`
1. admin note を追加します: `/chatops run user note <username or current email> 'admin note here'`

一般的に、フォーマットは標準で 1 行形式にすべきです:

- 違反: `Date | Note | Case | Link`
- 実行されたアクション: `Date | Note | Link`

このタイプのリクエストでチケットが提出されない場合は、リンクとして Slack の会話または Issue へのリンクを使用できます。

#### Note の表示

特定のユーザーの admin note を調べる方法として、チームメンバーは 2 つの方法を使用できます:

1. チームメンバーが admin 権限を持つ場合、関連するネームスペースの管理ページに移動すると admin note が表示されます。
1. （ユーザーのみ）チームメンバーは、chatops bot が招待されている Slack チャンネルで以下のコマンドを使って ChatOps で特定のユーザーの admin note を読み取れます
   > `/chatops run user find <username or email>`

#### サンプル Note

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

Name Squatting によるリネーム:
`2026-01-16 | Name Squatting Request | https://gitlab.zendesk.com/agent/tickets/123`

コンピュート分のリセット:
`2026-01-16 | Compute minutes reset | Bug | https://gitlab.zendesk.com/agent/tickets/123`
