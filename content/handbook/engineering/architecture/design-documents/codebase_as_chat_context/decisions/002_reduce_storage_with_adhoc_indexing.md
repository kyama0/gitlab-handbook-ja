---
title: "ADR 002：Ad-hoc Indexing により Semantic Code Search クラスターのストレージサイズを削減する"
description: "Semantic Code Search のベクトルストレージ要件を削減するための意思決定記録"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/codebase_as_chat_context/decisions/002_reduce_storage_with_adhoc_indexing/
upstream_sha: e48b48a5e8c7635a5993b5836c0ca253812429d2
lastmod: "2026-07-01T09:36:08+02:00"
translated_at: "2026-07-06T06:09:17+09:00"
translator: codex
stale: false
---

## コンテキスト

Semantic Code Search を `gitlab-org` namespace から GitLab.com 上の対象となるすべての namespace にスケールする計画を立てたとき、ベクトルストアとして使用している Elasticsearch クラスターに関して、大きなストレージ上の課題に直面しました。

`gitlab-org/gitlab` のインデックスの[分析](https://gitlab.com/gitlab-org/gitlab/-/work_items/551852#note_2796177006)では、`gitlab-org` には 100 TB を超えるストレージが必要になると推定されることが示されました。

`gitlab-org/gitlab` の[ストレージ分布分析](https://gitlab.com/gitlab-org/gitlab/-/work_items/562554#note_2709963740)
では、インデックスの各フィールドが使用している割合として次が明らかになりました：

| フィールド | 割合 |
| --------- | ---------- |
| `_source`（raw documents） | 74.5% |
| `embeddings_v1`（vector index） | 22.0% |
| `content`（text index） | 1.3% |
| その他のメタデータ | ~2% |

ストレージ要件は、非常に高コストで運用上も困難であると判断されました。
さらに、最適化の対象にする必要があったフィールドは、保持する必要があるフィールド、または削除するには大幅なリファクタリングとエンジニアリング作業が必要になるフィールドでした。

## 決定

Semantic Code Search に **Ad-hoc Indexing** を導入することを決定しました。

これは lazy-loading の仕組みであり、まだインデックス化されていないプロジェクトでユーザーが Semantic Code Search を実行しようとしたときに、初期インデックス化を自動的にトリガーします。対象となるすべてのプロジェクトを事前にインデックス化するパイプラインではなく、ad-hoc indexing は必要なときにだけインデックス化を開始することで、必要なストレージを削減します。

詳細については、[Ad-hoc Indexing 設計ドキュメント](../ad_hoc_indexing.md)を参照してください。

## 検討した代替案

1. **`content` フィールドを削除する**
   - ストレージを削減するため、実際のコードスニペット内容をインデックスに保存するのを停止する。
   - ステータス: 却下
   - 理由:
      - `content` フィールドは Semantic Code Search 機能に不可欠である
      - それを削除すると、インデックス化パイプラインと Duo Chat インテグレーションの両方を大きくリファクタリングする必要がある
      - 分析の結果、`content` を削除してもストレージ削減は ~4% にとどまり、労力に見合わないことが示された
1. **エンベディングを量子化する**
   - 量子化を使用して、4 バイト浮動小数点のエンベディングを 1 バイト整数に変換する。
   - ステータス: 将来の最適化として延期
   - 延期の理由:
      - これにはエンベディングモデルとベクトル検索実装の変更が必要になる
      - 検索品質と関連性への潜在的な影響
1. **動的パーティション**
   - 実際のストレージニーズに基づいて、動的なパーティション割り当てを実装する。
   - ステータス: 将来の最適化として延期
   - 延期の理由:
     - これには多大なエンジニアリング作業が必要になる

## 関連 Work Item

1. [Cluster sizing](https://gitlab.com/gitlab-org/gitlab/-/issues/551852)
1. [Determine number_of_partitions](https://gitlab.com/gitlab-org/gitlab/-/work_items/562554)
1. [Ad-hoc indexing epic](https://gitlab.com/groups/gitlab-org/-/epics/19655)
