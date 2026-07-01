---
title: "チャンク化"
description: "Code Embeddings Pipeline のチャンク化コンポーネントの設計ドキュメント"
status: ongoing
creation-date: "2026-06-23"
authors: [ "@partiaga" ]
coaches: []
dris: [ "@wortschi" ]
owning-stage: "~devops::ai platform"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/codebase_as_chat_context/chunking/
upstream_sha: 4253b2ab72b0791916a54411ca71a25276e128bd
lastmod: 2026-06-25T09:42:09+02:00
translated_at: "2026-07-02T06:06:16+09:00"
translator: codex
stale: false
---

## 概要

コードファイルが Semantic Code Search 用にインデックスされる際、埋め込みの前に小さなチャンクに分割されます。
これは検索品質とパフォーマンスの両方に影響する重要なコンポーネントであり、次の要因によって左右されます。

- **埋め込みモデルの制限** - 埋め込みモデルには最大トークン数の制限があります（例: 2048 トークン）
- **検索関連性** - 小さなチャンクは、より精度の高い検索結果を提供します
- **ベクターストア効率** - 少数の大きなベクトルを保存するより、多数の小さなベクトルを保存するほうが効率的です
- **メモリ管理** - 大きなファイルをチャンク単位で処理することで、メモリ過負荷を回避します

## チャンク戦略とチャンクサイズ {#chunk-strategy-and-chunk-size}

**チャンク戦略**は、コードコンテンツをどのように分割するかを決めるアルゴリズムです（例: バイト単位、セマンティック境界単位）。
**チャンクサイズ**は、各チャンクの最大サイズを指します。

- バイト単位
  - コード構造やセマンティクスを考慮せず、コードを固定サイズのバイトチャンクに分割します。
  - チャンクサイズは、チャンクあたりの最大バイト数を指します
- PreBERT トークン化単位
  - BERT ベースの埋め込みモデル向けに最適化されたセマンティック境界を使用し、コード構造を尊重してコードを分割します。
  - チャンクサイズは、チャンクあたりの最大トークン数を指します

## チャンク化の実装とフロー

チャンク化は [**GitLab Code Parser**](https://gitlab.com/gitlab-org/rust/gitlab-code-parser)に実装されています。
これは Rust アプリケーションであり、FFI（Foreign Function Interface）を通じて [Go ライブラリ](https://gitlab.com/gitlab-org/rust/gitlab-code-parser/-/tree/main/bindings/go)を公開します。

[**GitLab Elasticsearch Indexer**](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer)は Code Parser ライブラリを使用してコードコンテンツをチャンク化し、`chunk_strategy` と `chunk_strategy_size` のパラメータを受け取ります。

Rails では、`Ai::ActiveContext::Code::Indexer` が **GitLab Elasticsearch Indexer** を呼び出す際に、設定済みのチャンク戦略パラメータを渡します。

**図**

```mermaid
flowchart LR
  RailsCodeIndexer("Ai::ActiveContext::Code::Indexer")
  ElasticsearchIndexer("GitLab Elasticsearch Indexer")
  Gitaly("Gitaly")
  CodeParser("GitLab Code Parser Go Library")
  VectorStore("Vector Store")

  subgraph Rails
    RailsCodeIndexer
  end

  RailsCodeIndexer -- 1. invokes elasticsearch indexer with configured chunk strategy params --> ElasticsearchIndexer

  ElasticsearchIndexer -- 2. fetches changed files --> Gitaly
  ElasticsearchIndexer -- 3. chunks files with Code Parser passing the given chunk strategy params --> CodeParser
  ElasticsearchIndexer -- 4. stores chunked content --> VectorStore
  ElasticsearchIndexer -- 5. streams IDs of the chunked content --> RailsCodeIndexer
```

## 設定

チャンク化戦略の設定は、たとえば次のように `Ai::ActiveContext::Collection` レコードの `options` に永続化されます。

```ruby
Ai::ActiveContext::Collections::Code.collection_record.options
=> {"chunk_strategy"=>'code_pre_bert', "chunk_strategy_size"=>256}
```

これは、埋め込みモデルを初回設定する際に指定できます。

チャンク化戦略が一度も設定されていない場合は、デフォルト値である
`chunk_strategy='code_bytes'` と `chunk_strategy_size=1000` にフォールバックします。

## 制限

チャンク化戦略は、埋め込みモデルが初回設定された後は変更できません。変更するには、すべてのコンテンツを完全に再インデックスする必要があるためです。

## 今後の機能強化

自動再インデックスを伴うチャンク化戦略の変更をサポートします。
