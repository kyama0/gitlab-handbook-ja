---
title: "AI Context Abstraction Layer ADR-001: Gem ベースのアーキテクチャ"
description: "AI Context Abstraction Layer を ActiveContext Ruby gem として実装することに関する decision record。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ai_context_abstraction_layer/decisions/001_active_context_gem/
upstream_sha: c9aef34f52e9f619472aeed4981f6aaec80de2b3
lastmod: "2026-06-25T09:42:09+02:00"
translated_at: "2026-06-26T21:24:33+09:00"
translator: codex
stale: false
---

## ステータス

Accepted

## コンテキスト

AI Context Abstraction Layer は、さまざまなベクトルストア（Elasticsearch、OpenSearch、pgvector を使用する PostgreSQL）にまたがるセマンティック検索の統一インターフェースを提供する重要なコンポーネントです。このレイヤーには、次の性質が必要です。

1. 複数の GitLab サービスで再利用できる
2. 単独で保守およびテストできる
3. GitLab 固有の実装から明確に分離されている
4. 将来のベクトルストアバックエンド向けに拡張できる

## 決定

私たちは次のように決定しました。

1. ActiveContext Abstraction Layer を、GitLab Rails リポジトリ内の `gems/gitlab-active-context` に置かれる Ruby gem として実装する
2. gem の名前を `ActiveContext` とする。したがって、すべての gem クラスは `ActiveContext::` 配下で名前空間化される
3. GitLab 固有の実装は `Ai::ActiveContext` 配下で名前空間化する（例: `Ai::ActiveContext::Collections::Code`、`Ai::ActiveContext::References::Code`）

## 参考資料

- [ActiveContext Gem](https://gitlab.com/gitlab-org/gitlab/-/tree/master/gems/gitlab-active-context)
