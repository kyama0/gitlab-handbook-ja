---
owning-stage: "~devops::data stores"
title: 'データベースサイズ制限 ADR 003: 50 GB を超えるテーブルへの新規インデックスの制限'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/database_size_limits/decisions/003_limit_new_indexes/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

## コンテキスト

データベースインデックスはクエリパフォーマンスにおいて重要な役割を果たしながら、テーブルサイズに大きな影響を与えます。テーブルが成長するにつれて：

- パフォーマンスを維持するためにインデックスが追加されることが多い
- 各インデックスがテーブルの合計サイズを増加させる
- インデックスは以下を含む追加の[メンテナンスオーバーヘッド](https://docs.gitlab.com/ee/development/database/adding_database_indexes.html#maintenance-overhead)を導入する：
  - 書き込み増幅
  - バックアップサイズの増加
  - より高いバキュームオーバーヘッド

## 決定

以下によって 50 GB を超えるテーブルへの新しいインデックスを防ぎます：

このルールの例外は、[開発ガイドライン](https://docs.gitlab.com/ee/development/database/large_tables_limitations.html#requesting-an-exception)に文書化されており、明示的な承認が必要です。

これらの制限は以下に影響します：

- 新しいスタンドアロンインデックス
- 外部キーに必要なインデックス
- 複合インデックス
- 部分インデックス

## 結果

- 必要なインデックスの作成により、新しい外部キーカラムが制限される
- インデックスを通じたクエリの最適化能力が制限される
- フィルタリングと検索のオプションが削減される
- 複雑なクエリのパフォーマンス低下の可能性
- チームは代替の最適化戦略を検討する必要がある
- 一部の機能実装は再設計が必要になる場合がある

### 軽減戦略

- 50 GB に近づいているテーブルにはテーブルパーティショニングを検討する
- 適切なデータ保持ポリシーを実装する
- 代替のクエリ最適化技術を探索する
- 可能な限り既存のインデックスを使用する
