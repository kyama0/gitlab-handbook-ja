---
title: "AI Context Abstraction Layer ADR-003: 埋め込みモデルの再設計"
description: "新しい埋め込みモデル設計を説明する意思決定記録。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ai_context_abstraction_layer/decisions/003_embedding_model_redesign/
upstream_sha: 4253b2ab72b0791916a54411ca71a25276e128bd
lastmod: 2026-06-26T09:16:06+02:00
translated_at: "2026-07-02T06:06:16+09:00"
translator: codex
stale: false
---

## ステータス

承認済み

## コンテキスト

元の ActiveContext 設計では、埋め込みモデルが埋め込みバージョンハッシュとしてハードコードされていました。

```ruby
class Ai::ActiveContext::Collections::Code # class implementing an ActiveContext Collection
  embeddings_v1: { model: 'text_embedding_005_vertex', dimensions: 768 }
  embeddings_v2: { model: 'text_embedding_004_vertex', dimensions: 512 }
end
```

### 以前の設計の制限

- ユーザーによるモデル選択をサポートできず、ユーザーが独自のモデルを選択する必要がある Duo Self-hosted を利用する Self-Managed インスタンスのブロッカーになる
- 新しいモデルを追加するには、ハードコードされたバージョンハッシュの更新と手動のバックフィルプロセスが必要になり、保守負荷が生じる

### 既存の Model Configuration 機能

他の AI 機能向けには、既存の [Model Configuration 機能](https://docs.gitlab.com/administration/gitlab_duo/model_selection/) がすでにあります。しかし、これは埋め込みモデルを切り替える際に必要なバックフィルプロセスをサポートできません。

## 決定

私たちは、バックグラウンドでバックフィルプロセスをトリガーするワンクリックのモデル切り替えにより、柔軟なモデル選択をサポートできるよう埋め込みモデルを再設計することを決定しました。

再設計の主なコンセプトは次のとおりです。

- **Model Metadata** - 埋め込みモデル設定はハードコードではなく、`Ai::ActiveContext::Collection` レコードの `metadata` に永続化される
- **Collection ごとに 3 つのモデル設定** - 各 Collection には `current_indexing_embedding_model`、`next_indexing_embedding_model`、`search_embedding_model` がある
- **非同期切り替えプロセス** - モデル切り替えにより、[Active Context Tasks フレームワーク](../active_context_tasks.md) を活用する一連のバックグラウンドプロセスがトリガーされる
- **[AIGW Model Switching フレームワーク](https://docs.gitlab.com/development/ai_features/model_switching/)との同期** - 各 Collection には対応する Embeddings AI Feature キーがあり、AI Gateway でサポートされ、`Ai::FeatureSetting` レコードと同期される

詳細については、[Embedding Models 設計ドキュメント](../embedding_models.md)を参照してください。
