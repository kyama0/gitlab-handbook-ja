---
title: 'gl-support-bot-admin'
description: 'gl-support-bot-admin に関するドキュメント'
date: 2026-01-13
upstream_path: /handbook/security/customer-support-operations/gitlab/gl-support-bot-admin/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## gl-support-bot-admin について

### gl-support-bot-admin とは

管理者アクセスを必要とするスクリプトや自動化処理では、チーム全体のサービスアカウントとして [gl-support-bot-admin](https://gitlab.com/gl-support-bot-admin) ユーザーを使用します。これは、自動化処理が特定の人間のユーザーに紐付かないようにし、一貫して動作することを保証するためです。

## アクセスの申請

{{% alert title="Warning" color="warning" %}}

このボットアカウントには大量のデータへのアクセス権があります。私たちが標準的に利用している方法以外で使う場合は、サービスアカウントなど別の手段を検討してください。

{{% /alert %}}

トークンを申請するには、[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) を起票してください。

その Issue では、`Service Name` を `gl-support-bot-admin` にしてください。

現時点では Issue は Jason Colyer と Dylan Tragjasi にアサインしてください。
