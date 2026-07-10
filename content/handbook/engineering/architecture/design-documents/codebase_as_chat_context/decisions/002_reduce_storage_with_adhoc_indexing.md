---
title: "ADR 002：アドホックインデックス化により Semantic Code Search クラスターのストレージサイズを削減"
description: "Semantic Code Search のベクトルストレージ要件を削減するための意思決定記録"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/codebase_as_chat_context/decisions/002_reduce_storage_with_adhoc_indexing/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
lastmod: "2026-07-01T09:36:08+02:00"
translated_at: "2026-07-10T20:10:12+09:00"
translator: codex
stale: false
---

## コンテキスト

Semantic Code Search を `gitlab-org` 名前空間から GitLab.com 上の対象となるすべての名前空間に拡張する計画を立てた際、ベクトルストアに使用している Elasticsearch クラスターで重大なストレージの課題に直面しました。

`gitlab-org/gitlab` のインデックスに関する[分析](https://gitlab.com/gitlab-org/gitlab/-/work_items/551852#note_2796177006)では、`gitlab-org` に 100 TB を超えるストレージが必要になると推定されました。

`gitlab-org/gitlab` の[ストレージ分布分析](https://gitlab.com/gitlab-org/gitlab/-/work_items/562554#note_2709963740)
により、インデックスの各フィールドが占める割合は次のとおりであることが明らかになりました。

| フィールド | 割合 |
| --------- | ---------- |
| `_source`（未加工のドキュメント） | 74.5% |
| `embeddings_v1`（ベクトルインデックス） | 22.0% |
| `content`（テキストインデックス） | 1.3% |
| その他のメタデータ | ~2% |

必要なストレージは非常に高額で、運用上も困難であると判断されました。
さらに、最適化の対象にする必要があったフィールドは保持が必要なものであり、削除するには大規模なリファクタリングとエンジニアリング作業が必要でした。

## 決定

Semantic Code Search に **アドホックインデックス化** を導入することを決定しました。

これは、まだインデックス化されていないプロジェクトでユーザーが Semantic Code Search を実行しようとしたときに、初回インデックス化を自動的に開始する遅延読み込みメカニズムです。対象となるすべてのプロジェクトを事前にインデックス化するパイプラインの代わりに、必要になったときだけインデックス化を開始することで、アドホックインデックス化は必要なストレージを削減します。

詳細については、[アドホックインデックス化の設計文書](../ad_hoc_indexing.md)を参照してください。

## 検討した代替案

1. **`content` フィールドを削除する**
   - ストレージを削減するため、実際のコードスニペットの内容をインデックスに保存しないようにする。
   - ステータス：却下
   - 理由：
      - `content` フィールドは Semantic Code Search の機能に不可欠である
      - 削除するには、インデックス化パイプラインと Duo Chat 統合の両方で大規模なリファクタリングが必要になる
      - 分析では、`content` を削除してもストレージの約 4% しか削減できず、労力に見合わないことが示された
2. **エンベディングを量子化する**
   - 量子化を使用して、4 バイトの浮動小数点エンベディングを 1 バイトの整数に変換する。
   - ステータス：将来の最適化として延期
   - 延期の理由：
      - エンベディングモデルとベクトル検索の実装を変更する必要がある
      - 検索の品質と関連性に影響する可能性がある
3. **動的パーティション**
   - 実際のストレージ要件に基づく動的なパーティション割り当てを実装する。
   - ステータス：将来の最適化として延期
   - 延期の理由：
     - 大規模なエンジニアリング作業が必要になる

## 関連する作業項目

1. [クラスターのサイジング](https://gitlab.com/gitlab-org/gitlab/-/issues/551852)
1. [number_of_partitions の決定](https://gitlab.com/gitlab-org/gitlab/-/work_items/562554)
1. [アドホックインデックス化のエピック](https://gitlab.com/groups/gitlab-org/-/epics/19655)
