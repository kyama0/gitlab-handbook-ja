---
title: "データベース標準マトリクス"
description: "GitLab の各デプロイシナリオで承認されるデータベース技術と調達経路を定義し、PostgreSQL の主要抽象化を拡張します。"
upstream_path: /handbook/engineering/architecture/abstractions/db_standards_matrix/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
lastmod: "2026-07-03T11:29:57-05:00"
translated_at: "2026-07-10T20:00:13+09:00"
translator: codex
stale: false
---

## 根本的な問い

特定の GitLab アプリケーションは、どのデプロイシナリオで、どのデータベース技術と調達経路を必要とするべきでしょうか？

このドキュメントでは、2 つの軸からその問いに答えます。

1. **データベース技術** — PostgreSQL、ClickHouse、および正当な理由がある少数の例外。
2. **調達経路** — セルフホスト ↔ N 個のマネージドサービス ↔ 1 個のマネージドサービス。

これは、PostgreSQL を GitLab で承認された OLTP データベースとして確立する [PostgreSQL の主要抽象化](postgresql.md)に対応するマトリクスです。このドキュメントでは、すべてのデプロイにわたって、この抽象化を取り巻く運用モデルと調達モデルを扱います。

## 標準化の原則

GitLab は、OLTP を **Community PostgreSQL** に標準化します。この標準は単に「エンジンとしての PostgreSQL」ではありません。**コミュニティに支えられ、GitLab Database チームが運用する Database-as-a-Service サービスとして提供される PostgreSQL** です。

この考え方には、2 つの帰結があります。

1. Community PostgreSQL のバージョン、拡張機能、マイグレーションツール、可観測性、バックアップ／DR パターンという同じ論理的な契約が、すべてのデプロイ環境に適用されます。
2. DBaaS の *運用形態* はデプロイによって異なりますが、*プロダクト向けインターフェース* は変わりません。サービスは、特定のクラウドプロバイダー独自の Postgres ではなく、DBaaS を対象とします。

PostgreSQL のワイヤープロトコルを提供しながら Community PostgreSQL とは異なる Aurora、AlloyDB、Yugabyte、CockroachDB、EDB Postgres Distributed は、**非標準** です。これらを使用するには、標準では満たせない要件という、明確で永続的な正当性を文書化した明示的な例外が必要です。その理由は、[PostgreSQL の主要抽象化](postgresql.md)に記載されています。コミュニティに支えられた単一のエンジンにより、製品全体と最も幅広いデプロイ選択肢にわたって、マイグレーションツール、ランブック、チームの専門知識を統一できます。

### 各デプロイで DB チームが提供するもの

| デプロイ | クラウド | DB チームが提供およびサポートする DBaaS |
| ---------- | ----- | ------------------------------------------ |
| GitLab.com | GCP | 現在は GitLab Postgres スタック（Patroni + PgBouncer + Consul）。Cloud SQL は積極的に評価中です。以下のベンチマークプログラムを参照してください。 |
| Dedicated | AWS | Amazon RDS（Multi-AZ）。DB チームのツール、ランブック、マイグレーションレイヤーでラップされています。 |
| Self-Managed — Enterprise リファレンス | Customer | **GitLab Postgres スタック** — 完全な Patroni + PgBouncer リファレンスデプロイ。パッケージ化され、サポートされます。 |
| Self-Managed — Omnibus | Customer | PostgreSQL を同梱し、HA デプロイではオプションで Patroni/PgBouncer を使用できます。 |

プロダクトがデータベースを選ぶのではなく、DBaaS を選びます。DB チームは、エンジン、その周囲の運用スタック、プロバイダー間のマイグレーション経路を担当します。

DBaaS のロードマップ項目には、**Community PostgreSQL 上のクロスクラウド論理レプリケーションをマネージド機能として提供すること** があります。これは GCP と AWS のリージョン間で双方向またはフォロワー形式のレプリケーションを行い、利用する各プロダクトではなく DB チームが運用するものです。その目的は、現在グローバル分散のユースケースで非標準エンジンを正当化しているギャップを解消し、最終的に標準の DBaaS 契約で、例外を必要とせずクロスクラウドの読み取りファンアウトを扱えるようにすることです。

## マトリクス

|                          | **GitLab.com（GCP）**             |                                   | **Dedicated（AWS）**     | **Self-Managed**         |                  |
| ------------------------ | -------------------------------- | --------------------------------- | ----------------------- | ------------------------ | ---------------- |
| **環境→**                | Dev / Stage                      | Load / Prod                       | すべての環境                | Enterprise               | Omnibus          |
| **PG-OLTP アプリケーション** | Cloud SQL または GitLab PG スタック     | GitLab PG スタック（→ Cloud SQL 未定） | RDS                     | GitLab PG スタック          | 同梱 PG       |
| **アナリティクスとイベント**   | GL ClickHouse                    | ClickHouse Cloud                  | ClickHouse Cloud → GL   | BYO ClickHouse           | CH-OAK アプライアンス |
| *例外*             |                                  |                                   |                         |                          |                  |
| **GLAZ（GATE）**          | Cloud SQL / Yugabyte             | Yugabyte（Aeon SaaS）              | RDS                     | GitLab PG スタック          | 同梱 PG       |
| **Protocells**           | Cloud SQL                        | Spanner（トポロジーのみ）           | RDS                     | n/a                      | n/a              |

**PG-OLTP アプリケーション**には、GitLab Rails モノリス（Main、CI、Sec クラスター）、Container Registry、Artifact Registry、および将来のトランザクション中心のサービスが含まれます。

## ベンチマークプログラム — 今後 6 か月

上記のマトリクスは現在のデフォルトを確定しますが、長期的な問いは、GitLab.com が Cells 規模になったときに GitLab Postgres スタックが引き続き適切なデフォルトなのか、それともシステム管理型 Postgres（Cloud SQL、AlloyDB）のほうが安価で高速かつ運用しやすいのかということです。

DB チームは、すでに使用している、または採用する可能性があるプロバイダー間で同条件の比較を行う **標準化されたベンチマークプログラム** を実施しています。対象は VM 上の GitLab Postgres スタック、RDS、Cloud SQL、AlloyDB、Yugabyte（GATE ワークロードとの相互参照用）です。その目標は、「私たちはそう考えている」という答えを廃止し、測定結果に置き換えることです。

対象となるメトリクス:

- **提供コスト（cost to serve）** — 固定されたパフォーマンス範囲における、ワークロードあたりのインフラストラクチャ費用（ドル）。
- **サポートコスト** — クラスターおよびセルあたりの運用・人件費（インシデント負荷、オンコール負荷、ランブックの更新、プロビジョニング時間）。
- **トランザクションあたりのコスト** — GitLab の代表的なワークロードにおける、正規化された $/tx と p50/p95/p99 のレイテンシー。
- **Cells への適合性** — プロビジョニング時間、影響範囲、セルあたりの COGS、セルフサービス対応状況。

中心となる問いは、**Cells 規模で、システム管理型 PostgreSQL を GitLab Postgres スタックよりも安価、高速、かつ運用しやすくできるか？** です。可能であれば、GitLab.com 上の新しいモジュラーサービスのデフォルトになります。不可能であれば、GitLab Postgres スタックがデフォルトのままとなり、セルフサービスプロビジョニングへさらに投資します。選択は好みではなく、メトリクスに基づいて行います。

## 例外

### GLAZ — GATE 向け Yugabyte

GATE（Auth / Identity）には、**クラウドプロバイダー間の低レイテンシーレプリケーション**、すなわち GCP と AWS にまたがる L1 読み取りで 1 秒未満の制限付きステイルネスという要件があります。現在、この要件を満たす Community PostgreSQL ベースのサービスはありません。GATE の L0 コントロールプレーンと L1 リージョン読み取りレプリカには、Yugabyte（Aeon SaaS）をデプロイします。

この例外の範囲とガードレール:

- **1 つのサービス、1 つの例外。** Yugabyte は GATE にのみ承認されています。
- **標準の PG 対象範囲。** GATE のコードは標準の `pgx`/Rails パターンと標準の PG DDL/DML を維持し、Yugabyte からのマイグレーションを引き続き可能にします。
- **L2（セルローカル）は Community PG のまま。** Yugabyte を使用するのは L0 と L1 のみです。セルローカルの認証データでは、引き続き標準の DBaaS を使用します。
- **データ所有権のセーフティネット。** L0 Yugabyte から GitLab が管理する Community PG インスタンスへの論理レプリケーションにより、マネージド Aeon を利用している間も GitLab がデータを所有します。

### Protocells

Protocells はアプリケーションデータに Cloud SQL を使用し、Spanner は **トポロジーメタデータにのみ** 使用します。アプリケーション OLTP には使用しません。Cells が成熟するにつれて、上記のベンチマークプログラムに照らしてトポロジーサービスを再評価します。その目標は、可能な限り標準に収束させることです。

## 関連ドキュメント

- [PostgreSQL の主要抽象化](postgresql.md) — このマトリクスが拡張する基本的な OLTP 標準
- [主要抽象化の索引](_index.md)
