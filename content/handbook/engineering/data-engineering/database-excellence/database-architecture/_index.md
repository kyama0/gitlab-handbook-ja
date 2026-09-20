---
title: "Database Architecture チーム"
description: "Database Architecture チームは、データ配置のための意思決定フレームワーク、データ増加の制御、およびすべてのデータストアにわたるデータベースレビュープロセスの調整を通じて、GitLab のエンジニアリングチームがデータを使ってサステナブルに構築できるよう支援します。"
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-architecture/
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-18T12:11:14-05:00"
translated_at: "2026-09-20T02:14:23.155976+00:00"
translator: claude
stale: false
---

Database Architecture チームは、[Database Frameworks チーム](/handbook/engineering/data-engineering/database-excellence/database-frameworks/)の分割によって誕生しました。

## ミッション {#mission}

データ配置・保持・ライフサイクル管理に関する明確なガイダンス、ベストプラクティス、フレームワークを提供することで、チームがデータを使ってサステナブルに構築できるよう支援します。私たちは、アーキテクチャ上の意思決定が将来の技術的負債を防ぎ、すべてのデータストアにわたる GitLab の長期的なスケーラビリティをサポートすることを保証します。

## スコープ {#scope}

Database Architecture チームは以下に責任を持ちます:

* **データ配置フレームワーク** — PostgreSQL、Redis、OpenSearch、ClickHouse、オブジェクトストレージ、その他のアプリケーションデータストアにわたって、チームがニーズに合ったデータストアを選択するための意思決定フレームワークとガイダンスを提供します。
* **データ増加の制御** — 保持ポリシー、ライフサイクル管理、データベースサイズを長期的にサステナブルに保つための戦略など、チームがデータ増加を積極的に管理するためのフレームワークとツールを構築します。
* **データベースレビューの調整** — データベースレビュープロセスを調整し、データベースメンテナーコミュニティを支援します。Database Excellence の 3 チームすべてがレビューに参加しますが、プロセス・ツール・標準は Database Architecture チームが所有します。

## チーム {#team}

チームは主にバックエンドエンジニアで構成され、インフラ・運用目標の達成を支援するリライアビリティエンジニアも在籍しています。役割にかかわらず、すべてのチームメンバーは、他の Database Excellence チームと並行して、データベースレビュー、オンコールローテーション、運用ニーズなど、ステージレベルの責務を共有します。

{{< group-by-slugs alexander-sosna amritasinha l.rosa mattkasa maximeorefice panoskanell praba.m7n vporalla >}}

