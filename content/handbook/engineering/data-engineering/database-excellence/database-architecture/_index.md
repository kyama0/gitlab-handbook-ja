---
title: "Database Architecture チーム"
description: "Database Architecture チームは、データの増加を抑える保持・配置フレームワークと、コードベースに合わせて拡張できるデータベースレビュープロセスを通じて、GitLab のエンジニアリングチームがデータを使って持続可能な開発を行えるよう支援します。"
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-architecture/
upstream_sha: "67bc662bf3f5d3f1c3cbf290ead2d6027341155d"
lastmod: "2026-09-24T18:04:46+02:00"
translated_at: "2026-09-24T21:11:16+00:00"
translator: claude
stale: false
---

Database Architecture チームは、[Database Frameworks チーム](/handbook/engineering/data-engineering/database-excellence/database-frameworks/)の分割によって誕生しました。

## ミッション {#mission}

データベースがプロダクトに先行して肥大化するのではなく、プロダクトとともに成長するように、GitLab のチームがデータを使って持続可能な開発を行えるよう支援します。私たちは、データの増加を抑える保持・配置フレームワークと、少数のレビュアー層の規模に依存せず、コードベースに合わせて拡張できるデータベースレビュープロセスによってこれを実現します。

## スコープ {#scope}

Database Architecture チームは以下に責任を持ちます:

* **データ配置フレームワーク** — PostgreSQL、Redis、OpenSearch、ClickHouse、オブジェクトストレージ、その他のアプリケーションデータストアにわたって、チームがニーズに合ったデータストアを選択するための意思決定フレームワークとガイダンスを提供します。
* **データ増加の制御** — 保持ポリシー、ライフサイクル管理、データベースサイズを長期的にサステナブルに保つための戦略など、チームがデータ増加を積極的に管理するためのフレームワークとツールを構築します。
* **データベースレビューの調整** — データベースレビュープロセスを調整し、データベースメンテナーコミュニティを支援します。Database Excellence の 3 チームすべてがレビューに参加しますが、プロセス・ツール・標準は Database Architecture チームが所有します。

## チーム {#team}

チームは主にバックエンドエンジニアで構成され、インフラ・運用目標の達成を支援するリライアビリティエンジニアも在籍しています。役割にかかわらず、すべてのチームメンバーは、他の Database Excellence チームと並行して、データベースレビュー、オンコールローテーション、運用ニーズなど、ステージレベルの責務を共有します。

{{< group-by-slugs alexander-sosna amritasinha l.rosa mattkasa maximeorefice panoskanell praba.m7n vporalla >}}
