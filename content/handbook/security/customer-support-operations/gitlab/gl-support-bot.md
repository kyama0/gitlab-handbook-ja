---
title: 'gl-support-bot'
description: 'gl-support-bot に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/gitlab/gl-support-bot/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

## gl-support-bot について

### gl-support-bot とは

私たちのスクリプトや自動化処理の多くでは、チーム全体のサービスアカウントとして [gl-support-bot](https://gitlab.com/gl-support-bot) ユーザーを使用します。これは、自動化処理が特定の人間のユーザーに紐付かないようにし、一貫して動作することを保証するためです。

## アクセスの申請

{{% alert title="Warning" color="warning" %}}

このボットアカウントには大量のデータへのアクセス権があります。私たちが標準的に利用している方法以外で使う場合は、サービスアカウントなど別の手段を検討してください。

{{% /alert %}}

トークンを申請するには、[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) を起票してください。

その Issue では、`Service Name` を `gl-support-bot` にしてください。

現時点では Issue は Jason Colyer と Dylan Tragjasi にアサインしてください。
