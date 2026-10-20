---
title: "Data Storage"
description: "ClickHouse と GitLab の分析用データストアを内部サービスとして運用します。"
upstream_path: /handbook/engineering/gitlab-brain/data-infrastructure/data-storage/
upstream_sha: ddc319726d9e3f1cfd7f88faf4798bf31af6bf10
lastmod: "2026-10-09T15:20:41-07:00"
translated_at: "2026-10-20T13:35:18+00:00"
translator: codex
stale: false
---

## 担当範囲 {#scope}

このチームは、[ClickHouse](/handbook/company/working-groups/clickhouse-datastore/)と、GitLab のその他の分析用データストアを運用します。複雑なサブシステムを担当するチームとして、深い専門知識を持ち、対象範囲を絞っています。チームは SLO、キャパシティ、コスト、およびアップグレードに責任を持ち、プロダクトのクエリやビジネスロジックには関与しません。最初の顧客は [Query and Semantics](/handbook/engineering/gitlab-brain/intelligence/query-and-semantics/)です。
