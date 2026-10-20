---
title: "Data Infrastructure"
description: "GitLab のデータストアとデータ移動を内部サービスとして運用します。ここにあるすべてのシステムには、SLO、キャパシティ、コスト、およびアップグレードに責任を持つオーナーがいます。"
upstream_path: /handbook/engineering/gitlab-brain/data-infrastructure/
upstream_sha: ddc319726d9e3f1cfd7f88faf4798bf31af6bf10
lastmod: "2026-10-09T15:20:41-07:00"
translated_at: "2026-10-20T13:35:18+00:00"
translator: codex
stale: false
---

## 担当範囲 {#scope}

私たちは、GitLab のデータストアとデータ移動を内部サービスとして運用します。ここにあるすべてのシステムには、SLO、キャパシティ、コスト、およびアップグレードに責任を持つオーナーがいます。私たちはプロダクトのクエリやビジネスロジックを記述しません。[Event Platform](/handbook/engineering/gitlab-brain/event-platform/)がこのレイヤーに書き込み、[Intelligence](/handbook/engineering/gitlab-brain/intelligence/)がそこから読み取ります。

## チーム {#teams}

- [Data Storage](data-storage/): ClickHouse と GitLab の分析用データストアを担当します。
- [Message Queue and Replication/CDC](message-queue-and-replication/): メッセージングの基盤となる NATS と、変更データキャプチャを担う Siphon を担当します。
