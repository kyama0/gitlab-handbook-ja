---
title: "セルフマネージド版 GitLab Duo のための Retrieval Augmented Generation（RAG）"
status: implemented
creation-date: "2024-01-25"
authors: [ "@shinya.maeda", "@mikolaj_wawrzyniak" ]
coach: [ "@stanhu" ]
approvers: [ "@pwietchner", "@oregand", "@tlinz" ]
owning-stage: "~devops::ai-powered"
participating-stages: ["~devops::data stores", "~devops::create"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_duo_rag/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


{{< engineering/design-document-header >}}


RAG は、大規模言語モデルのトレーニングセットに存在しない知識をモデルに提供し、ユーザーの質問に答えるためにその知識を活用できるようにするアプリケーションアーキテクチャです。RAG の詳細については、[GitLab の RAG](../gitlab_rag/) を参照してください。

## このブループリントの目標

このブループリントは、セルフマネージド版 GitLab Duo の RAG ソリューションに関する決定を推進することを目的としています。具体的には、GitLab のドキュメントへのアクセスを持つ GitLab Duo を提供することです。3 つの潜在的なソリューションの概要を示し、このユースケースの実現可能性を実証するためにそれぞれの PoC を含めています。

## 制約

- このソリューションはセルフマネージドの顧客が実行・維持できるものでなければなりません
- このソリューションは 1〜2 マイルストーンで出荷可能でなければなりません <!-- 実際にこれが正しいかは分かりませんが、時間の制約として追加しています -->
- GitLab での RAG の長期的な技術ソリューションをまだ決定中のため、このソリューションはロックインが低いものである必要があります

## GitLab ドキュメント用 GitLab Duo Chat RAG の提案

GitLab ドキュメントユースケースのための GitLab Duo Chat に対して、以下のソリューションが提案・評価されています。

- [Vertex AI Search](vertex_ai_search.md)
- [Elasticsearch](elasticsearch.md)
- [PostgreSQL（PGVector 拡張付き）](postgresql.md)

各評価がどのように行われたかについては、上記のリンクを参照してください。

## 選択されたソリューション

低ロックインで顧客に迅速にリーチできることから、[Vertex AI Search](vertex_ai_search.md) が実装されることになりました。将来的には別のソリューションに移行する可能性があります。
