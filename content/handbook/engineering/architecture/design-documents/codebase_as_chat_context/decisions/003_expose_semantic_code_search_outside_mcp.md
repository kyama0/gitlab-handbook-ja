---
title: "ADR 003：MCP 外部に Semantic Code Search を公開する"
description: "Semantic Code Search を REST API と glab CLI で利用可能にするための意思決定記録"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/codebase_as_chat_context/decisions/003_expose_semantic_code_search_outside_mcp/
upstream_sha: e829b207a53856c23a25197426cca945626ade8a
lastmod: "2026-07-01T09:36:08+02:00"
translated_at: "2026-07-05T00:25:00+09:00"
translator: codex
stale: false
---

## コンテキスト

Semantic Code Search は当初、MCP (Model Context Protocol) サーバーツールとして実装され、MCP クライアントを使用する AI エージェントだけが利用できる状態でした。しかし、このアプローチには重大な制約があります。

- MCP クライアントを経由しないワークフローは完全に対象外になる
- MCP には実行中のサーバーと互換性のあるクライアントが必要であり、複雑さが増す
- CLI-first エージェントはますます一般的になっており、低レイテンシ、推論のしやすさ（標準的な CLI 呼び出し）、信頼性の高さ、低コストのため好まれています（[詳細を参照](https://gitlab.com/groups/gitlab-org/-/work_items/21285#note_3159063685)）

## 決定

私たちは以下を決定しました。

1. Semantic Code Search REST API を導入する（[設計の詳細](../semantic_code_search.md#semantic-code-search-on-the-rest-api)）
2. MCP ツールをリファクタリングし、REST API を呼び出すようにする（[設計の詳細](../semantic_code_search.md#semantic-code-search-on-the-gitlab-mcp-server)）
3. REST API を内部で呼び出す `glab search semantic` コマンドとして、Semantic Code Search を `glab` CLI にネイティブに公開する（[設計の詳細](../semantic_code_search.md#semantic-code-search-on-glab-cli)）

## 関連 Work Item

- [Semantic Code Search を MCP 外部で利用可能にする（Epic）](https://gitlab.com/groups/gitlab-org/-/work_items/21285)
