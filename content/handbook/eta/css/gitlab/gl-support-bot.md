---
title: 'gl-support-bot'
description: 'gl-support-bot のドキュメント'
upstream_path: "/handbook/eta/css/gitlab/gl-support-bot/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:40:02+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

## gl-support-bot を理解する

### gl-support-bot とは

多くのスクリプトと自動化では、チーム全体のサービスアカウントとして [gl-support-bot](https://gitlab.com/gl-support-bot) ユーザーを使用しています。これにより、自動化が特定の人間のユーザーに紐付かず、一貫して実行されます。

## アクセスをリクエストする

{{% alert title="警告" color="warning" %}}

このボットアカウントは多くのデータにアクセスできます。私たちが使用する標準的な方法で使用する場合を除き、サービスアカウントなどの代替手段の使用を検討してください。

{{% /alert %}}

トークンをリクエストするには、[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request)を作成してください。

Issue では、`Service Name` を `gl-support-bot` にします。

現時点では、Issue を Jason Colyer と Dylan Tragjasi に割り当ててください。
