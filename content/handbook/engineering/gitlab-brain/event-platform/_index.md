---
title: "Event Platform"
description: "GitLab でイベントが発生してから、そのイベントが安全にキューに格納されるまでのすべてを担当します。計装、取り込み、およびイベントが満たす必要のある契約を扱います。"
upstream_path: /handbook/engineering/gitlab-brain/event-platform/
upstream_sha: ddc319726d9e3f1cfd7f88faf4798bf31af6bf10
lastmod: "2026-10-09T15:20:41-07:00"
translated_at: "2026-10-20T13:35:18+00:00"
translator: codex
stale: false
---

## 担当範囲 {#scope}

「GitLab のどこかでイベントが発生する」から「そのイベントが安全にキューに格納される」までのすべてを、このグループが担当します。アプリケーションへの計装、取り込み処理の運用、およびイベントが満たす必要のある契約の定義です。イベントが [Data Infrastructure](/handbook/engineering/gitlab-brain/data-infrastructure/)のデータ移動レイヤーに到達した後は、そのグループが引き継いで処理します。

## チーム {#teams}

- [Events Instrumentation SDKs](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/): 内部イベント、計装 SDK、および収集バックエンドを担当します。
- [Ingestion and Streaming](ingestion-and-streaming/): Snowplow と CloudEvents の取り込み処理、およびサードパーティーとの連携を担当します。
- [Data Schema, Ontology & Contracts](data-contracts/): Iglu スキーマ、オントロジー、イベントの分類体系、および SDK 契約を担当します。
