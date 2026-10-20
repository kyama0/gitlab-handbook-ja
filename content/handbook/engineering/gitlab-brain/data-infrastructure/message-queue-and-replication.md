---
title: "Message Queue and Replication/CDC"
description: "データの経路を運用します。NATS がメッセージングの基盤となり、Siphon が分析用ストアへのレプリケーションと変更データキャプチャを担います。"
upstream_path: /handbook/engineering/gitlab-brain/data-infrastructure/message-queue-and-replication/
upstream_sha: ddc319726d9e3f1cfd7f88faf4798bf31af6bf10
lastmod: "2026-10-09T15:20:41-07:00"
translated_at: "2026-10-20T13:35:18+00:00"
translator: codex
stale: false
---

## 担当範囲 {#scope}

このチームは、データの経路を運用します。NATS がメッセージングの基盤となり、[Siphon](https://gitlab.com/gitlab-org/analytics-section/siphon)が GitLab の[トランザクションデータベース](/handbook/engineering/data-engineering/database-excellence/)から [Data Storage](data-storage/)へのレプリケーションと変更データキャプチャを処理します。生成元は [Event Platform](/handbook/engineering/gitlab-brain/event-platform/)の取り込み処理を通じて書き込み、すべての下流システムは、公表された単一の遅延値を基準に、ここから読み取ります。
