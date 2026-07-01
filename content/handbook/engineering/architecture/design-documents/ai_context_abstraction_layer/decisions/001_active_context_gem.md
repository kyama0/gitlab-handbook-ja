---
title: "AI Context Abstraction Layer ADR-001: gem ベースのアーキテクチャ"
description: "AI Context Abstraction Layer を ActiveContext Ruby gem として実装するための意思決定記録。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ai_context_abstraction_layer/decisions/001_active_context_gem/
upstream_sha: 4253b2ab72b0791916a54411ca71a25276e128bd
lastmod: 2026-06-25T09:42:09+02:00
translated_at: "2026-07-02T06:06:16+09:00"
translator: codex
stale: false
---

## ステータス

承認済み

## コンテキスト

AI Context Abstraction Layer は、異なるベクターストア（Elasticsearch、OpenSearch、pgvector を使用する PostgreSQL）にまたがるセマンティック検索のための統一インターフェースを提供する重要なコンポーネントです。このレイヤーには次が必要です。

1. 複数の GitLab サービスで再利用できること
2. 単体で保守およびテストできること
3. GitLab 固有の実装から明確に分離されていること
4. 将来のベクターストアバックエンド向けに拡張できること

## 決定

私たちは次のように決定しました。

1. ActiveContext Abstraction Layer を、GitLab Rails リポジトリ内の `gems/gitlab-active-context` に配置される Ruby gem として実装する
2. gem の名前を `ActiveContext` とし、したがってすべての gem クラスを `ActiveContext::` の名前空間配下に置く
3. GitLab 固有の実装は `Ai::ActiveContext` の名前空間配下に置く（例: `Ai::ActiveContext::Collections::Code`、`Ai::ActiveContext::References::Code`）

## 参考文献

- [ActiveContext Gem](https://gitlab.com/gitlab-org/gitlab/-/tree/master/gems/gitlab-active-context)
