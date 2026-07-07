---
title: GitLab Orbit
status: ongoing
creation-date: "2025-10-12"
authors: ["@michaelangeloio", "@michaelusa", "@jgdoyon1", "@bohdanpk"]
coaches: ["@ahegyi", "@shekharpatnaik", "@andrewn", "@dgruzd"]
dris: ["@michaelangeloio"]
owning-stage: "~devops::analytics"
participating-stages: ["~devops::secure", "~devops::platforms", "~devops::ai-powered"]
upstream_path: /handbook/engineering/architecture/design-documents/orbit/
upstream_sha: ce056dce525567fbc30356982fd6468948838617
translated_at: "2026-07-08T06:20:16+09:00"
translator: codex
stale: false
lastmod: "2026-07-07T15:33:26-04:00"
---

{{< engineering/design-document-header >}}

## 概要

GitLab Orbit（旧 GitLab Knowledge Graph）は、GitLab インスタンスのデータ（SDLC メタデータおよびコード構造）からプロパティグラフを構築し、ClickHouse SQL にコンパイルされる JSON ベースの Cypher 風 DSL を通じて公開する Rust サービスです。AI システム（MCP 経由）および人間のユーザー向けの統一コンテキスト API を提供します。

このサービスは 2 種類のデータをプロパティグラフ形式でインデックスします:

- **SDLC メタデータ**: Issue、マージリクエスト、CI パイプライン、ワークアイテム、グループ、プロジェクト、その他の GitLab エンティティを、Siphon CDC によって PostgreSQL から NATS を経由して ClickHouse にストリーミングする。
- **コード**: コールグラフ、定義、参照、リポジトリメタデータを Gitaly から取得し、ClickHouse のグラフテーブルにパースする。

## アーキテクチャ

```mermaid
flowchart LR
    GitLab[GitLab Core] -- CDC replication --> DIP[Data Insights Platform]
    GKG -- Git RPC --> GitLab
    DIP -- datalake --> CH[(ClickHouse)]
    CH <-- graph tables --> GKG[GitLab Orbit]
    GitLab -. gRPC / AuthZ .-> GKG

    style GitLab fill:#333,color:#fff,stroke:#333
    style DIP fill:#6E49CB,color:#fff,stroke:#6E49CB
    style CH fill:#FFCC00,color:#000,stroke:#FFCC00
    style GKG fill:#FC6D26,color:#fff,stroke:#FC6D26
```

## 設計ドキュメント

完全な設計ドキュメントは現在、[knowledge-graph リポジトリ](https://gitlab.com/gitlab-org/orbit/knowledge-graph/-/tree/main/docs/design-documents) のコードと並べて配置されています:

- [概要とアーキテクチャ](https://gitlab.com/gitlab-org/orbit/knowledge-graph/-/blob/main/docs/design-documents/README.md)
- [インデックス作成](https://gitlab.com/gitlab-org/orbit/knowledge-graph/-/tree/main/docs/design-documents/indexing)（SDLC およびコード）
- [クエリ](https://gitlab.com/gitlab-org/orbit/knowledge-graph/-/tree/main/docs/design-documents/querying)（グラフエンジン、クエリ言語）
- [データモデル](https://gitlab.com/gitlab-org/orbit/knowledge-graph/-/blob/main/docs/design-documents/data_model.md)
- [スキーマ管理](https://gitlab.com/gitlab-org/orbit/knowledge-graph/-/blob/main/docs/design-documents/schema_management.md)
- [セキュリティ](https://gitlab.com/gitlab-org/orbit/knowledge-graph/-/blob/main/docs/design-documents/security.md)
- [可観測性](https://gitlab.com/gitlab-org/orbit/knowledge-graph/-/blob/main/docs/design-documents/observability.md)

## リソース

| リソース | 場所 |
|---|---|
| リポジトリ | [gitlab-org/orbit/knowledge-graph](https://gitlab.com/gitlab-org/orbit/knowledge-graph) |
| メインエピック | [#19744](https://gitlab.com/groups/gitlab-org/-/work_items/19744) |
| プログラムページ | [内部ハンドブック](https://internal.gitlab.com/handbook/engineering/r-and-d-pmo/programs/knowledge-graph-ga/) |
