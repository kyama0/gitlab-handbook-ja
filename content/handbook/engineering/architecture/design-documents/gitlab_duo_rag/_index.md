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


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">implemented</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/shinya.maeda" class="text-blue-600 hover:underline">@shinya.maeda</a>, <a href="https://gitlab.com/mikolaj_wawrzyniak" class="text-blue-600 hover:underline">@mikolaj_wawrzyniak</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/stanhu" class="text-blue-600 hover:underline">@stanhu</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/pwietchner" class="text-blue-600 hover:underline">@pwietchner</a>, <a href="https://gitlab.com/oregand" class="text-blue-600 hover:underline">@oregand</a>, <a href="https://gitlab.com/tlinz" class="text-blue-600 hover:underline">@tlinz</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::ai-powered</span></td>
<td class="px-3 py-2 border border-gray-300">2024-01-25</td>
</tr>
</tbody>
</table>
</div>


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
