---
title: Snowplow
description: Snowplow インフラストラクチャ管理
upstream_path: "/handbook/enterprise-data/platform/snowplow/"
upstream_sha: "b751749fb746d2e0131db68b13218fc2e08cf6b2"
translated_at: "2026-04-29T10:00:00Z"
translator: claude
stale: false
---

### Snowplow 概要

Snowplow はオープンソースのイベント分析プラットフォームで、行動イベントデータを収集・処理します。プラットフォームのアーキテクチャ概要とソースコードは [Snowplow リポジトリ](https://github.com/snowplow/snowplow/#snowplow-technology-101) で公開されており、アーキテクチャと実装に関する包括的なドキュメントが提供されています。

GitLab は 2019 年 6 月から独自の Snowplow インフラストラクチャを管理しており、サードパーティサービスからセルフホスト型インフラストラクチャに移行しました。データチームの観点からは、コアイベントフローは変わらず: イベントはコレクターとエンリッチャーを通じて送信され、S3 に保存されます。

2024 年 12 月現在、`aws-snowplow-prd` という新しい Snowplow 環境にアップグレードされています。現在のインフラストラクチャの包括的な詳細については、[Snowplow Data Pipeline ドキュメント](https://internal.gitlab.com/handbook/enterprise-data/platform/pipelines/snowplow/) を参照してください。
