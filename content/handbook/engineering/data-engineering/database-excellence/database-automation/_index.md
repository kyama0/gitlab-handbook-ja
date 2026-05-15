---
title: "Database Automation チーム"
description: "Database Automation チームは、設定管理、アップグレードの自動化、インフラのプロビジョニングを含め、GitLab の Postgres データベースをスケールで運用しやすくするための自動化フレームワーク、ツール、テンプレートを所有しています。"
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-automation/
upstream_sha: eb0cd26eaccd9a7f0de79c77d9a7773a9913ad81
translated_at: "2026-05-15T00:00:00+00:00"
translator: claude
stale: false
model: claude-opus-4-7
---

Database Automation チームは、[Database Operations チーム](/handbook/engineering/data-engineering/database-excellence/database-operations/)と [Database Frameworks チーム](/handbook/engineering/data-engineering/database-excellence/database-frameworks/)の再編によって誕生しました。

## ミッション

手動でカスタム化されたデータベース運用を、標準化された反復可能な自動化に置き換え、GitLab のデータベースインフラを個別管理のシステムからスケーラブルな自動化プロセスへと移行します。Database Automation チームは、GitLab の PostgreSQL データベースをスケールで運用しやすくする自動化フレームワーク、ツール、テンプレートを所有しています。Database Excellence の 3 つのチームすべてが自動化や運用変更に貢献しますが、Database Automation は基盤となるフレームワークを所有し、インフラ変更のプランニング負荷を管理します。

現時点で、チームの主な焦点は GitLab.com であり、長期的な目標として、これらの機能を Dedicated およびセルフマネージドのデプロイメントへのサポートにも拡張することを目指しています。

## スコープ

Database Automation チームは以下に責任を持ちます:

* **自動化フレームワーク** — Database Excellence の 3 つのチームすべてがデータベース運用を自動化するために使用するフレームワーク、ツール、テンプレートを所有し、インフラ変更のプランニングと優先順位付けを管理します。
* **設定管理** — クラスター全体の PostgreSQL 設定を標準化し自動化し、アドホックなチューニングを反復可能でバージョン管理されたプロセスに置き換えます。
* **アップグレードの自動化** — PostgreSQL バージョンアップグレードを安全で予測可能、かつ次第に自動化されたものにするツールとフレームワークを所有します。3 つのチームすべてがこれらのフレームワークを使ってアップグレード作業に貢献します。
* **インフラのプロビジョニング** — データベースクラスター、レプリカ、関連インフラの作成と管理のパターンとツールを所有します。3 つのチームすべてが標準化されたプロセスを通じてプロビジョニング変更に貢献します。

## チーム

チームは主にリライアビリティエンジニアで構成され、ツール・フレームワーク開発の目標達成を支援するバックエンドエンジニアも在籍しています。チームに関わらず、すべてのチームメンバーは、他の Database Excellence チームと並行して、データベースレビュー、オンコールローテーション、運用上のニーズなど、ステージレベルの役割責務を共有します。

{{< group-by-slugs dazhu1 bshah11 saadullah707 mattkasa jon_jenkins pmistry2 amritasinha >}}
