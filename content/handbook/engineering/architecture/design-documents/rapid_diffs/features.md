---
title: "Diffs 機能一覧"
status: proposed
creation-date: "2023-10-10"
authors: [ "@thomasrandolph", "@patrickbajao", "@igor.drozdov", "@jerasmus", "@iamphill", "@slashmanov", "@psjakubowska" ]
coach: [ "@ntepluhina" ]
approvers: [ ]
owning-stage: "~devops::create"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/rapid_diffs/features/
upstream_sha: 4c7d94ca4f485376c886b7c2b9575091c8b7d3cf
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---

これは[再利用可能なラピッド Diffs ドキュメント](index.md)の付録です。

以下はマージリクエストとコミット Diff の機能の完全なリストで、Diff ビューアー（コード、画像、その他）ごとにグループ化されています。

✓ – MR ビューとコミットビューの両方で利用可能。

| 機能                              | コード | 画像  | その他 |
|-----------------------------------|--------|-------|--------|
| ファイル名                        | ✓      | ✓     | ✓      |
| ファイルパスのコピー              | ✓      | ✓     | ✓      |
| ファイルの折りたたみと展開        | ✓      | ✓     | ✓      |
| ファイル統計                      | ✓      | ✓     | ✓      |
| 変更行数（blob の場合は 0）       | ✓      | ✓     | ✓      |
| パーミッション変更                | ✓      | ✓     | ✓      |
| ファイルへの CRUD コメント        | ✓      | ✓     | ✓      |
| ファイル表示リンク                | ✓      | ✓     | ✓      |
| 閲覧済みとしてマーク              | MR     | MR    | MR     |
| すべてのコメントを非表示          | MR     | MR    | MR     |
| フルファイル表示（全行展開）      | MR     |       |        |
| Web IDE で開くリンク              | MR     |       |        |
| 行リンク                          | ✓      |       |        |
| ファイル編集リンク                | ✓      |       |        |
| コードハイライト（複数テーマ）    | ✓      |       |        |
| 行の展開                          | ✓      |       |        |
| 特定の行への CRUD コメント        | Commit |       |        |
| 行範囲への CRUD コメント          | MR     |       |        |
| 行範囲へのドラフトコメント        | MR     |       |        |
| コード品質ハイライト              | ✓      |       |        |
| テストカバレッジハイライト        | ✓      |       |        |
| 空白変更を非表示                  | ✓      |       |        |
| 大きなファイルの自動折りたたみ    | ✓      |       |        |
| Raw として表示                    | Commit |       |        |
| 並列表示                          |        | ✓     |        |
