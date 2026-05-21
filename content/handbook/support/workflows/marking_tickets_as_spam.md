---
title: Zendesk でチケットをスパムとしてマークする
description: "Zendesk のチケットをスパムまたは迷惑メールとしてマークするためのワークフロー"
category: Zendesk
upstream_path: /handbook/support/workflows/marking_tickets_as_spam/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-11-13T15:52:42+00:00"
---

### Zendesk でチケットをスパムとしてマークする

Zendesk でチケットをスパムとしてマークする必要が生じる場合があります。
これによりエンドユーザーが停止され、チケットの提出や Service Desk への
アクセスができなくなります。

権限に応じて、チケットをスパムとしてマークする方法は 2 つあります。

1. `Zendesk administrators` および `Support Staff - CMOC` 権限を持つ Support エージェントの場合:
   - チケット右側のドロップダウンメニューをクリックします
   - `Mark as spam` を選択します

1. その他すべての Support エージェントの場合:
   - [`Spam` マクロ](https://gitlab.com/gitlab-support-readiness/zendesk-global/macros/-/blob/master/data/active/Unsorted/Spam.yaml)を適用します
   - これにより、CSAT サーベイを送信せずにチケットが解決されます。
