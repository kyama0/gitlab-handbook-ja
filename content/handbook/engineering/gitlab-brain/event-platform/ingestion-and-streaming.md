---
title: "Ingestion and Streaming"
description: "すべてのイベントを生成元からメッセージキューに送り込みます。Snowplow と CloudEvents の取り込み処理、およびサードパーティーとの連携を担当します。"
upstream_path: /handbook/engineering/gitlab-brain/event-platform/ingestion-and-streaming/
upstream_sha: ddc319726d9e3f1cfd7f88faf4798bf31af6bf10
lastmod: "2026-10-09T15:20:41-07:00"
translated_at: "2026-10-20T13:35:18+00:00"
translator: codex
stale: false
---

## 担当範囲 {#scope}

このチームは、生成元からメッセージキューへイベントを送り込みます。対象は、Snowplow の取り込み処理、CloudEvents の取り込み処理、およびサードパーティーとの連携です。キュー自体は私たちの担当ではありません。NATS と Siphon は、Data Infrastructure の [Message Queue and Replication/CDC](/handbook/engineering/gitlab-brain/data-infrastructure/message-queue-and-replication/)が担当し、私たちはそこに書き込みます。
