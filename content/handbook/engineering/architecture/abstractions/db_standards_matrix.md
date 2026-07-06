---
title: "データベース標準マトリクス"
description: "PostgreSQL の主要抽象化を拡張し、GitLab の各デプロイメントシナリオで承認されるデータベース技術と調達経路を定義します。"
upstream_path: /handbook/engineering/architecture/abstractions/db_standards_matrix/
upstream_sha: e48b48a5e8c7635a5993b5836c0ca253812429d2
lastmod: "2026-07-03T11:29:57-05:00"
translated_at: "2026-07-06T06:22:10+09:00"
translator: codex
stale: false
---

## 根本的な問い

ある GitLab アプリケーションは、どのデプロイメントシナリオで、どのデータベース技術と調達経路を必要とすべきでしょうか。

このドキュメントは、その問いに 2 つの軸で答えます。

1. **データベース技術** — PostgreSQL、ClickHouse、および正当化された少数の例外。
2. **調達経路** — セルフホスト ↔ N 個のマネージドサービス ↔ 1 個のマネージドサービス。

これは [PostgreSQL の主要抽象化](postgresql.md)と対になるマトリクスです。PostgreSQL の主要抽象化は、GitLab の承認済み OLTP データベースとして PostgreSQL を定めています。このドキュメントでは、すべてのデプロイメントにわたり、その抽象化を取り巻く運用モデルと調達モデルを扱います。

## 標準化の原則

GitLab は OLTP について **Community PostgreSQL** に標準化します。標準は「エンジンとしての PostgreSQL」だけではありません。**GitLab Database チームが運用する Database-as-a-Service オファリングに包まれた、コミュニティに支えられた PostgreSQL** です。

この捉え方には 2 つの帰結があります。

1. Community PostgreSQL のバージョン、拡張、マイグレーションツール、オブザーバビリティ、バックアップ／DR パターンという同じ論理契約が、すべてのデプロイメントコンテキストに適用されます。
2. その DBaaS の*運用形態*はデプロイメントによって異なりますが、*プロダクト向けインターフェース*は変わりません。サービスは DBaaS を対象にし、特定のクラウドプロバイダーの Postgres 派生版を対象にしません。

PostgreSQL ワイヤプロトコルを提示しつつ Community PostgreSQL から逸脱するエンジン、つまり Aurora、AlloyDB、Yugabyte、CockroachDB、EDB Postgres Distributed は**非標準**です。これらには、明確で持続的な正当化、つまり標準では満たせない要件を伴う、明示的で文書化された例外が必要です。この理由は [PostgreSQL の主要抽象化](postgresql.md)に記録されています。単一のコミュニティに支えられたエンジンにより、マイグレーションツール、ランブック、チームの専門知識を、プロダクトと最も広いデプロイメントオプション全体で統一できます。

### 各デプロイメントで DB チームが出荷するもの

| デプロイメント | クラウド | DB チームが出荷しサポートする DBaaS |
| ---------- | ----- | ------------------------------------------ |
| GitLab.com | GCP | 現在は GitLab Postgres stack (Patroni + PgBouncer + Consul)。Cloud SQL は積極的に評価中 — 下記のベンチマークプログラムを参照。 |
| Dedicated | AWS | Amazon RDS (Multi-AZ)。DB チームのツール、ランブック、マイグレーションレイヤーで包まれています。 |
| Self-Managed — Enterprise reference | Customer | **GitLab Postgres stack** — 完全な Patroni + PgBouncer リファレンスデプロイメント。パッケージ化されサポートされます。 |
| Self-Managed — Omnibus | Customer | バンドルされた PostgreSQL。HA デプロイメント向けにオプションの Patroni/PgBouncer を利用できます。 |

プロダクトはデータベースを選びません。プロダクトは DBaaS を選び、DB チームがエンジン、その周囲の運用スタック、プロバイダー間のマイグレーションパスに責任を持ちます。

DBaaS のロードマップ項目の 1 つは、**マネージド機能としての Community PostgreSQL 上のクロスクラウド論理レプリケーション**です。これは、各利用プロダクトではなく DB チームが運用する、GCP と AWS リージョン間の双方向またはフォロワー型レプリケーションです。その意図は、グローバル分散ユースケースで現在非標準エンジンを正当化しているギャップを埋め、最終的に標準 DBaaS 契約が例外なしにクロスクラウドの読み取りファンアウトをカバーするようにすることです。

## マトリクス

|                          | **GitLab.com (GCP)**             |                                   | **Dedicated (AWS)**     | **Self-Managed**         |                  |
| ------------------------ | -------------------------------- | --------------------------------- | ----------------------- | ------------------------ | ---------------- |
| **Environment→**                | Dev / Stage                      | Load / Prod                       | All envs                | Enterprise               | Omnibus          |
| **PG-OLTP applications** | Cloud SQL または GitLab PG stack     | GitLab PG stack (→ Cloud SQL TBD) | RDS                     | GitLab PG stack          | Bundled PG       |
| **Analytics & events**   | GL ClickHouse                    | ClickHouse Cloud                  | ClickHouse Cloud → GL   | BYO ClickHouse           | CH-OAK appliance |
| *Exceptions*             |                                  |                                   |                         |                          |                  |
| **GLAZ (GATE)**          | Cloud SQL / Yugabyte             | Yugabyte (Aeon SaaS)              | RDS                     | GitLab PG stack          | Bundled PG       |
| **Protocells**           | Cloud SQL                        | Spanner（トポロジーのみ）           | RDS                     | n/a                      | n/a              |

**PG-OLTP applications** には、GitLab Rails モノリス（Main、CI、Sec クラスター）、Container Registry、Artifact Registry、将来のトランザクション中心サービスが含まれます。

## ベンチマークプログラム — 今後 6 ヶ月

上記のマトリクスは現在のデフォルトを定めていますが、長期的な問いは、.com で Cells スケールにおいて GitLab Postgres stack が引き続き適切なデフォルトなのか、それともシステム管理の Postgres（Cloud SQL、AlloyDB）の方が安価で高速かつ運用しやすいのか、というものです。

DB チームは、私たちがすでに利用している、または採用する可能性があるプロバイダー間で条件をそろえた比較を行う**標準化されたベンチマークプログラム**を実行しています。対象は VM 上の GitLab Postgres stack、RDS、Cloud SQL、AlloyDB、Yugabyte（GATE ワークロードとの相互参照用）です。目標は、「私たちはそう考えている」という答えを廃止し、測定された答えに置き換えることです。

対象メトリクス:

- **提供コスト（cost to serve）** — 固定されたパフォーマンス範囲における、ワークロードあたりのインフラストラクチャ $。
- **サポートコスト** — クラスターおよびセルあたりの運用と人のコスト（インシデント負荷、オンコール負担、ランブックの変更、プロビジョニング時間）。
- **トランザクションあたりコスト** — 代表的な GitLab ワークロードにおける、正規化された $/tx と p50/p95/p99 レイテンシ。
- **Cells への適合性** — プロビジョニング時間、blast radius、セルあたり COGS、セルフサービス対応度。

見出しとなる問いは、**システム管理の PostgreSQL は、Cells スケールにおいて GitLab Postgres stack よりも安価で高速かつ運用しやすくなれるか**です。答えが「はい」なら、.com の新しいモジュラーサービスのデフォルトになります。「いいえ」なら、GitLab Postgres stack がデフォルトのままとなり、そのセルフサービスプロビジョニングにさらに投資します。選択は嗜好ではなく、メトリクスに基づいて行われます。

## 例外

### GLAZ — GATE 向け Yugabyte

GATE（Auth / Identity）には、**クラウドプロバイダー間の低レイテンシレプリケーション**、つまり GCP と AWS にまたがる L1 読み取りの 1 秒未満の bounded staleness という要件があります。現在、その要件を満たす Community PostgreSQL に支えられたオファリングはありません。私たちは、GATE の L0 コントロールプレーンと L1 リージョン読み取りレプリカに Yugabyte（Aeon SaaS）をデプロイします。

この例外のスコープとガードレール:

- **1 つのサービス、1 つの例外。** Yugabyte は GATE のみに承認されています。
- **標準 PG の表面積。** GATE のコードは標準の `pgx`/Rails パターンと標準 PG DDL/DML に留まるため、Yugabyte からの移行は引き続き可能です。
- **L2（セルローカル）は Community PG に留まります。** Yugabyte 上にあるのは L0 と L1 のみです。セルローカルの認証データは標準 DBaaS を使い続けます。
- **データオーナーシップのセーフティネット。** L0 Yugabyte から GitLab が管理する Community PG インスタンスへの論理レプリケーションにより、マネージド Aeon を利用している間でも GitLab がデータを所有することを保証します。

### Protocells

Protocells はアプリケーションデータに Cloud SQL を使い、Spanner は**トポロジーメタデータのみ**に使います。アプリケーション OLTP には使いません。Cells が成熟するにつれて、トポロジーサービスは上記のベンチマークプログラムに照らして再評価されます。目標は、可能な限り標準に収束することです。

## 関連ドキュメント

- [PostgreSQL の主要抽象化](postgresql.md) — このマトリクスが拡張する基本 OLTP 標準
- [Key Abstractions インデックス](_index.md)
