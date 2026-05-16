---
title: "主要抽象化"
upstream_path: /handbook/engineering/architecture/abstractions/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-22T14:05:58+02:00"
---

## 概要

主要抽象化（Key Abstractions、別名 Key Primitives）は、GitLab のエンジニアリング組織全体で使用が承認された基盤技術、パターン、コンポーネントです。主要抽象化が一度承認されると、エンジニアはその機能を必要とする実装を行う際に、必ずこれを使用しなければなりません。

## ガバナンス

- **承認プロセス**: 新しい主要抽象化の追加には VP の承認が必要です
- **オーナーシップ**: 承認された各主要抽象化には、社内で指定されたオーナーが必要です
- **コンプライアンス**: 技術や抽象化が承認済みカタログにある場合、チームは代替手段を導入するのではなく、それを使用しなければなりません
- **Architecture Board**: Architecture Board が主要抽象化のカタログに対する項目をレビュー・承認します

必要な機能がカタログに無い場合、チームは Architecture Board と協議すべきです。

## Architecture Board

Architecture Board は、主要抽象化のカタログをレビューしスチュワードする、軽量で非公式に構成されたグループです。このグループは、GitLab のエンジニアリング組織全体で技術的一貫性を保ちながら、アーキテクチャの意思決定が協調的に行われることを保証します。

ボードは、コラボレーションと迅速なイテレーションを優先しつつ、基盤となる技術的意思決定の適切な監督を確保する、軽量で非公式なアプローチで運営されています。これは Architecture Board のスタートポイントを表しています。組織のニーズが進化するにつれて、ボードの構造、スコープ、プロセスは拡張・公式化される可能性があります。

### 構成

- VP が Architecture Board のメンバーを任命します
- 当初は、Distinguished Engineer 以上の全員をメンバーとして任命することからスタートしました
- メンバーシップは `architecture/abstractions` ディレクトリの CODEOWNERS で管理されます
- 主要抽象化カタログに対する変更を承認・マージできるのは Architecture Board メンバーのみです

### 責務

Architecture Board は以下をレビュー・承認します:

- 新規主要抽象化の提案
- 候補抽象化から graduated（承認済み）ステータスへの昇格
- 既存の主要抽象化ドキュメントの更新
- カタログからの抽象化の非推奨化または削除

## 成熟度の状態

主要抽象化は、以下のいずれかの状態にあります:

- **Candidate（候補）**: 検討中で、Architecture Board のレビューが必要
- **Graduated（承認済み）**: 使用が承認されており、オーナーの割り当てが必要

すべての graduated 主要抽象化には、指定されたオーナーが必要です。

## 承認済み主要抽象化

| 抽象化 | カテゴリ | 説明 | オーナー |
|-------------|----------|-------------|-------|
| [**PostgreSQL**](postgresql/) | データ＆ストレージ | OLTP データベース | TBD |

## 候補主要抽象化

| 抽象化 | カテゴリ | 説明 | 備考 |
|-------------|----------|-------------|-------|
| **Siphon** | データ＆ストレージ | データ取り込みと変換 | |
| **ClickHouse** | データ＆ストレージ | 分析 / OLAP クエリ | |
| **Redis** | データ＆ストレージ | キャッシュとグローバルロック | |
| **Object Storage** | データ＆ストレージ | バイナリと大容量ファイルのストレージ | |
| **Elasticsearch/OpenSearch** | データ＆ストレージ | 自然言語検索 | |
| **GitLab Zoekt** | データ＆ストレージ | コード検索 | |
| [**NATS**](candidate/nats/) | メッセージング＆処理 | 高スループットのイベントストリーミング向けメッセージバス | 非常に高いスループットと永続化メッセージに使用します。 |
| [**Sidekiq**](candidate/sidekiq/) | メッセージング＆処理 | バックグラウンド処理 | バックグラウンドジョブのデフォルト選択肢。 |
| **Active Context** | 検索＆AI | セマンティック検索（埋め込み） | |
| **Ruby, Go, Python, Rust** | 言語＆フレームワーク | LabKit サポート付きバックエンド言語 | |
| **VueJS, JavaScript, TypeScript** | 言語＆フレームワーク | フロントエンド技術 | |
| **gRPC, REST** | 言語＆フレームワーク | 通信プロトコル | |
| **RAFT** | 分散システム | コンセンサスアルゴリズム | |
| **GitLab Zoekt** | 分散システム | ステートフルサービスのパターン | |
| **Secrets Storage** | セキュリティ | セキュアなシークレット管理 | 適切なデータベース暗号化を含む（初期化ベクトルの再利用を回避） |
| **JSON Schema** | セキュリティ | データ検証 | |
| **OpenMetrics** | 可観測性 | メトリクス収集 | Prometheus 互換 |
| **OpenTelemetry** | 可観測性 | 分散トレーシング | LabKit 経由で構成 |
| **Rate Limiter** | アーキテクチャパターン | リクエストレート制限 | 可能な限り LabKit 経由で実装 |
| **Circuit Breaker** | アーキテクチャパターン | フォールトトレランスパターン | 可能な限り LabKit 経由で実装 |
| **UBI-9** | インフラストラクチャ | サポートされる Cloud Native GitLab イメージ | |

## 使用したくないサービス

以下の技術は **使用すべきではありません**:

- **Consul**
- **Kafka** - 代わりに [NATS](candidate/nats/) または [Sidekiq](candidate/sidekiq/) を使用してください

## コントリビューション

新しい主要抽象化を提案する、または候補を graduated ステータスに昇格させるには:

1. 以下を含むドキュメントを準備します:
   - 明確な説明とユースケース
   - なぜ主要抽象化であるべきか
   - 提案されるオーナー
   - 統合上の考慮事項
2. Architecture Board にレビューのため提示します
3. VP of Data Engineering と VP of Infrastructure から承認を得ます

## 関連リソース

- [Architecture Workflow](/handbook/engineering/architecture/workflow/)
- [Scalability Practice](/handbook/engineering/architecture/practice/scalability/)
