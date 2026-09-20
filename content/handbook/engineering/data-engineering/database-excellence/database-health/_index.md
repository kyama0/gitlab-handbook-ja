---
title: "Database Health チーム"
description: "Database Health チームは FY27 初めから 2026 年 9 月まで活動し、その時点で担当範囲が Self-Managed Database Experience と Database Automation に分割されました。"
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-health/
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-18T12:11:14-05:00"
translated_at: "2026-09-20T02:04:59.673212+00:00"
translator: claude
stale: false
---

Database Health チームは、[Database Frameworks チーム](/handbook/engineering/data-engineering/database-excellence/database-frameworks/)の分割により、FY27-Q1 の再編成で誕生した 3 つのチームのうちの 1 つでした。2026 年 9 月に活動を終了し、その担当範囲は、それまでもチーム内に存在していた GitLab.com とセルフマネージドという区分に沿って分割されました。

## 業務の移管先 {#where-the-work-went}

* **セルフマネージドのヘルスフレームワーク**は、別の Database Migrations チームが担当する予定だったアップグレードおよびマイグレーションの業務とともに、新設された [Self-Managed Database Experience](/handbook/engineering/data-engineering/database-excellence/self-managed-database-experience/) チームに移管されました。
* **GitLab.com のヘルスモニタリング、シフトレフトによる飽和の特定、マネージド Postgres のモニタリング**は、その業務を担当していたエンジニアとともに [Database Automation](/handbook/engineering/data-engineering/database-excellence/database-automation/) に移管されました。

現在発生している飽和ポイントの特定と緩和は、このチームの存続時と同様、引き続きすべての Database Excellence チームで共有する責任です。

## チームが担当していた業務 {#what-the-team-did}

Database Health のミッションは、飽和ポイントをお客様への影響が生じる前に積極的に特定して緩和することで GitLab のデータベースの運用上の余力を維持し、GitLab.com とセルフマネージドの両方のデプロイメントでデータベースを健全に保つための可視性、ツール、フレームワークを提供することでした。担当範囲は以下のとおりでした。

* **データベースのヘルスモニタリングとオブザーバビリティ**: GitLab.com とセルフマネージドインスタンス全体のデータベースの健全性を把握するためのダッシュボード、メトリクス、モニタリングシステム。
* **シフトレフトによる飽和の特定**: 潜在的な飽和ポイントを、本番環境に到達する前の開発サイクルの早い段階で検出するツールとプロセス。
* **セルフマネージドのヘルスフレームワーク**: セルフマネージドのお客様が自社の GitLab データベースの健全性と運用性を把握できるフレームワーク。
