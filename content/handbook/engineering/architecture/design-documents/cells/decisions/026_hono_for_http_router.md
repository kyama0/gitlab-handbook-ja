---
title: "Cells ADR 026: HTTP Router のパスベースルーティングに Hono を使用する"
owning-stage: "~devops::data stores"
group: cells-infrastructure
creation-date: "2026-02-20"
authors: ["@daveyleach"]
approvers: ["@samihiltunen"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/026_hono_for_http_router/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-24T12:22:41+05:30"
---

## コンテキスト

HTTP Router にパスベースのルーティングを実装する一環として、ルーティングルールの数が大幅に増加することが予想されます。現在の JSON ベースのルールエンジンは `path` タイプのルーティングルールをサポートしていますが、このアプローチはルート定義において大きな重複と冗長性を生み出します。

例えば、現在のアプローチでは 2 つのパスベースのルールは以下のようになります：

```json
{
  "id": "o_prefix",
  "action": "classify",
  "classify": {
    "type": "ORGANIZATION_PATH",
    "value": "${organization_path}"
  },
  "match": {
    "type": "path",
    "regex_value": "^/o/(?<organization_path>[^/]+)"
  }
},
{
  "id": "groups_prefix",
  "action": "classify",
  "classify": {
    "type": "GROUP_PATH",
    "value": "${group_path}"
  },
  "match": {
    "type": "path",
    "regex_value": "^/groups/(?<group_path>[^/]+)"
  }
}
```

定義のほとんどは重複しており、実際の違いは正規表現の値とキャプチャグループのみです。よりコンパクトな表現は以下のようになります：

```plaintext
o/:ORGANIZATION_PATH
groups/:GROUP_PATH
```

さらに、カスタムルールエンジンはルールを線形に順番に適用するため、ルールの数が増えるにつれて効率が低下します。

## 決定事項

HTTP Router のパスベースのルーティングルール用のルーティングフレームワークとして [Hono](https://hono.dev) を統合します。

Hono は人気があり、高速でシンプルなルーティング実装で、私たちのニーズに対応しています：

- **シンプルなパス変数構文**: カスタムルートマッチングロジックを必要とせずに、求めるシンプルなパス変数ベースのルール（例：`/o/:organization_path`）をサポートする
- **パフォーマンス**: Hono は Cloudflare Workers に向けた[パフォーマンスベンチマーク](https://hono.dev/docs/concepts/benchmarks#cloudflare-workers)を提供しており、他の既製ソリューションよりも優れたパフォーマンスを発揮する
- **実績と最適化**: 独自のルーター実装を構築・保守するのではなく、既製の十分にテストされたルーター実装を使用する
- **段階的な移行**: 既存のルーティングエンジンと並行して Hono を統合し、移行が完了していないルールは既存のエンジンにフォールスルーさせながら段階的にルールを移行できる

## 結果と影響

- **シンプルなルール定義**: パスベースのルーティングルールがより簡潔になり、保守が容易になります
- **より良いパフォーマンス**: Hono の最適化されたルーティングにより、線形ルール処理よりも増加するルール数をより効率的に処理します
- **メンテナンス負荷の軽減**: 独自のルーター実装を構築・最適化する必要がありません
- **段階的な移行**: 既存のルーティングルールはそのまま機能しながら、段階的に Hono ベースの定義に移行します
- **依存関係の追加**: Hono が HTTP Router コードベースへの新しい依存関係として追加されます

## 実装

[初期統合](https://gitlab.com/gitlab-org/cells/http-router/-/merge_requests/1039)により Hono が HTTP Router に追加され、バージョンエンドポイントが最初のパスベースのルールとして移行されます。Hono でまだ定義されていないルートについては、リクエストが既存のカスタムルーティングエンジンにフォールスルーし、ルーティングルールの段階的な移行が可能です。

## 代替案

- **カスタムルーター実装**: コンパクトなルール構文をサポートした独自の最適化ルーターを構築します。これには大幅な開発・テストの労力が必要で、確立されたルーターライブラリのパフォーマンスや成熟度には及ばない可能性があります。
- **他のルーティングライブラリ**: 他の JavaScript/TypeScript ルーティングライブラリも存在します（例：Express Router、Fastify）が、Hono は Cloudflare Workers のようなエッジランタイム環境向けに特別に最適化されており、優れたパフォーマンス特性を持っています。
- **既存のルール形式を維持**: 冗長な JSON ベースのルール定義を継続します。これにより、パスベースのルーティングルールの数が増えるにつれてメンテナンスがますます困難になります。
