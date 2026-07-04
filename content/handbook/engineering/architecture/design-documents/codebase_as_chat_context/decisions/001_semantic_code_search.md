---
title: "ADR-001：Semantic Code Search"
description: "Agentic Duo Chat 向けの Semantic Code Search ツールを導入するための意思決定記録"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/codebase_as_chat_context/decisions/001_semantic_code_search/
upstream_sha: e829b207a53856c23a25197426cca945626ade8a
lastmod: "2026-07-01T09:36:08+02:00"
translated_at: "2026-07-05T00:25:00+09:00"
translator: codex
stale: false
---

## コンテキスト

コードベースを意味的に検索する方法を提供する "Codebase as Chat Context" 機能は、Classic Duo Chat と密結合していました。これを Agentic Duo Chat で利用可能にする方法が必要でした。

## 決定

1. Semantic Code Search 機能を **GitLab MCP (Model Context Protocol) Server** 上のツールとして公開することを決定しました。

   MCP を通じて Semantic Code Search を公開することで、Agentic Duo Chat の実装から切り離され、両方のシステムを独立して進化させられます。さらに、他のツールやエージェントが同じ MCP インターフェイスを活用して Semantic Code Search にアクセスできるため、コードの再利用と一貫性が促進されます。

1. このツールを **Semantic Code Search** と呼ぶことを決定し、今後はこの機能をその名称で参照します。

   ツールに "Semantic Code Search" という名前を使うことで、その機能が自明になります。

詳細については、[Semantic Code Search 設計ドキュメント](../semantic_code_search.md)を参照してください。

## 検討した代替案：ネイティブな Agentic Duo Chat ツール

MCP Server を通じて公開せず、Agentic Duo Chat システム内に直接ネイティブツールとして Semantic Code Search を実装する。

このアプローチは不要な結合を生み、システムの拡張性を制限するため、採用しないことにしました。

## 関連 Work Item

- [Semantic Code Search - Agentic Chat Integration](https://gitlab.com/groups/gitlab-org/-/work_items/18193)
