---
title: "Elasticsearch"
status: proposed
creation-date: "2024-01-25"
authors: [ "@shinya.maeda", "@mikolaj_wawrzyniak" ]
coach: [ "@stanhu" ]
approvers: [ "@pwietchner", "@oregand", "@tlinz" ]
owning-stage: "~devops::ai-powered"
participating-stages: ["~devops::data stores", "~devops::create"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_duo_rag/elasticsearch/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T10:36:33Z"
translator: claude
stale: false
---

Elasticsearch と RAG 全般の詳細については、[RAG at GitLab](../gitlab_rag/index.md) 内の [Elasticsearch の記事](../gitlab_rag/elasticsearch.md) を参照してください。

## GitLab ドキュメントの取得

ドキュメントの埋め込みをエンベディングデータベースから Elasticsearch に移行するための [概念実証（PoC）](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/145392) が実施されました。

### データソースとの埋め込み同期

Elasticsearch 上の埋め込みを最新の状態に保つには、[PostgreSQL](postgresql.md) が使用しているのと同じ手順に従います。

### 検索（Retrieval）

最近傍を取得するために、埋め込みを含むインデックスに対して以下のクエリを実行できます:

```ruby
{
  "knn": {
    "field": vector_field_containing_embeddings,
    "query_vector": embedding_for_question,
    "k": limit,
    "num_candidates": number_of_candidates_to_compare
  }
}
```

### セルフマネージドへの要件

- PoC [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/145392) を本番環境に対応させる。
- [GitLab に Elasticsearch を同梱する](https://gitlab.com/gitlab-org/gitlab/-/issues/438178) ことで、Elasticsearch をインストールするセルフマネージドインスタンスを増やす。Elastic は無償ライセンスでの同梱を承認済み。顧客が Elasticsearch を容易にホストできるようにするための作業は、2 マイルストーン以上かかる見込みです。
