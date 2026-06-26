---
title: "AI Context Abstraction Layer ADR-003: 埋め込みモデルの再設計"
description: "新しい埋め込みモデル設計を説明する decision record"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ai_context_abstraction_layer/decisions/003_embedding_model_redesign/
upstream_sha: c9aef34f52e9f619472aeed4981f6aaec80de2b3
lastmod: "2026-06-26T09:16:06+02:00"
translated_at: "2026-06-26T21:24:33+09:00"
translator: codex
stale: false
---

## ステータス

Accepted

## コンテキスト

元の ActiveContext 設計では、埋め込みモデルを埋め込みバージョンのハッシュとしてハードコードしていました。

```ruby
class Ai::ActiveContext::Collections::Code # class implementing an ActiveContext Collection
  embeddings_v1: { model: 'text_embedding_005_vertex', dimensions: 768 }
  embeddings_v2: { model: 'text_embedding_004_vertex', dimensions: 512 }
end
```

### 以前の設計の制限

- ユーザーによるモデル選択をサポートできないため、ユーザーが自分のモデルを選択する必要がある Duo Self-hosted を備えた Self-Managed インスタンスにとってブロッカーになります
- 新しいモデルを追加するには、ハードコードされたバージョンハッシュを更新し、手動のバックフィルプロセスを実行する必要があるため、保守負担が生じます

### 既存の Model Configuration 機能

ほかの AI 機能向けには、既存の [Model Configuration 機能](https://docs.gitlab.com/administration/gitlab_duo/model_selection/)があります。ただし、これは埋め込みモデルを切り替えるときに必要なバックフィルプロセスをサポートできません。

## 決定

私たちは、バックグラウンドでバックフィルプロセスをトリガーする、ワンクリックのモデル切り替えを備えた柔軟なモデル選択をサポートするように、埋め込みモデルを再設計することにしました。

再設計の主な概念は次のとおりです。

- **モデルメタデータ** - 埋め込みモデル設定は、ハードコードではなく `Ai::ActiveContext::Collection` レコードの `metadata` に永続化されます
- **Collection ごとに 3 つのモデル設定** - 各 Collection には、`current_indexing_embedding_model`、`next_indexing_embedding_model`、`search_embedding_model` があります
- **非同期切り替えプロセス** - モデル切り替えは、[Active Context Tasks フレームワーク](../active_context_tasks.md)を活用する一連のバックグラウンドプロセスをトリガーします
- **[AIGW Model Switching フレームワーク](https://docs.gitlab.com/development/ai_features/model_switching/)と同期** - 各 Collection には対応する Embeddings AI Feature キーがあり、AI Gateway でサポートされ、`Ai::FeatureSetting` レコードと同期されます

詳細については、[埋め込みモデル設計ドキュメント](../embedding_models.md)を参照してください。
