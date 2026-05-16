---
title: "PostgreSQL - OLTP データベース"
upstream_path: /handbook/engineering/architecture/abstractions/postgresql/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-22T14:05:58+02:00"
---

## ステータス

**Graduated** - 使用が承認されています

## オーナー

[割り当て予定]

## 説明

PostgreSQL は、Online Transaction Processing（OLTP）ワークロード向けに承認されている、GitLab のリレーショナルデータベース管理システム（RDBMS）です。トランザクションデータ、ユーザー情報、プロジェクトメタデータ、その他 ACID コンプライアンスを必要とする構造化データの主要なデータストアとして機能します。

## なぜこれが主要抽象化なのか

PostgreSQL は、以下の理由により、GitLab における標準 OLTP データベースとして選定されました:

1. **スケールでの実績**: GitLab.com および大規模な self-managed インスタンスを支えてきた実績
2. **豊富な機能**: 複雑なクエリ、トランザクション、データ整合性に対する堅牢なサポートを提供
3. **オープンソース**: GitLab の価値観に沿っており、ベンダーロックインを排除
4. **強力なエコシステム**: 広範なツール、コミュニティサポート、GitLab 内での運用ノウハウ
5. **一貫性**: 単一の RDBMS を使用することで運用の複雑性を低減し、チームが知識やベストプラクティスを共有可能
6. **Self-Managed 互換**: ライセンスの懸念なく顧客環境にデプロイ可能

## 現状

GitLab.com では、現在 [Scale Cube](/handbook/engineering/architecture/practice/scalability/#the-scale-cube) における座標 `[1,1,0]` で PostgreSQL を運用しています:

- **X 軸（クローニング）**: 完全に複製された複数のインスタンス（プライマリの読み書きと、複数のリードオンリーセカンダリ）
- **Y 軸（コンポーネント化）**: 既に Main、CI、SEC と呼ばれる 3 つの独立した垂直ドメインに全データをパーティション化済み。それぞれが独立した PostgreSQL データベース
- **Z 軸（フェデレーション）**: 現時点では未実装

## ユースケース

PostgreSQL は以下に使用します:

- ACID コンプライアンスを必要とするトランザクションデータ
- 複雑なリレーションシップを持つ構造化データ
- 強い整合性保証を必要とするデータ
- 柔軟にクエリされるアプリケーション状態
- ユーザーデータ、認証、認可
- プロジェクトメタデータ、Issue、マージリクエスト、その他 GitLab の中核エンティティ

## 使用してはいけないケース

以下については代替手段を検討してください:

- **分析 / OLAP クエリ**: ClickHouse（候補主要抽象化）を使用
- **大容量バイナリデータ**: Object Storage を使用
- **高頻度のイベントストリーミング**: NATS（候補主要抽象化）を使用
- **一時的なキャッシュデータ**: Redis を使用
- **全文検索**: Elasticsearch/OpenSearch を使用
- **コード検索**: GitLab Zoekt を使用

### ベストプラクティス

- [Database Guidelines](/handbook/engineering/architecture/guidelines/database/) に従う
- 詳細は [database development docs](https://docs.gitlab.com/development/database/) を読み込んでください

## 関連する主要抽象化

- **Redis**: キャッシングとデータベース負荷の軽減用
- **Object Storage**: 通常はデータベースを肥大化させるバイナリデータ用
- **ClickHouse**（候補）: PostgreSQL では非効率な分析クエリ用

## サポートとリソース

- [Database Guidelines](/handbook/engineering/architecture/guidelines/database/)
- [Scalability Practice](/handbook/engineering/architecture/practice/scalability/)
- [社内 database development ドキュメント](https://docs.gitlab.com/development/database/) と [runbooks](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/patroni)
- Database チームのオフィスアワーと Slack チャンネル

## 質問や Issue

PostgreSQL の使用に関する質問、またはこの主要抽象化への変更提案については:

1. Database Guidelines を参照
2. Database Frameworks チームに連絡
3. アーキテクチャ上の決定については、[Architecture Workflow](/handbook/engineering/architecture/workflow/) を通じて Architecture Board に関与を依頼
