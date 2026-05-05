---
owning-stage: "~devops::data stores"
title: 'データベースサイズ制限 ADR 001: テーブルの分類'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/database_size_limits/decisions/001_table_classification/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

## コンテキスト

データベーステーブルのサイズは機能の開発とメンテナンスに大きな影響を与えます。現在：

- 開発者は機能を開発する際にテーブルサイズを把握していない場合があります
- 大きなテーブル（100 GB 超）は追加のメンテナンス作業が必要です
- チームはサイズ制限に近づいているテーブルの可視性が必要です

## 決定

テーブルの成長を追跡・管理するために、テーブルをサイズカテゴリに分類します：

| 分類 | サイズの範囲 |
| ------------- | ---------- |
| Small         | 10 GB 未満 |
| Medium        | 10 GB 〜 50 GB |
| Large         | 50 GB 〜 100 GB |
| Over limit    | 100 GB 超 |

これらの分類はデータベーステーブルのデータディクショナリに `table_size` として保存されます。

## 結果

- データディクショナリの `table_size` を最新の状態に保つための月次チョアを作成します。これは自動化できます。
- サイズの分類は開発上の意思決定に役立てることができます
