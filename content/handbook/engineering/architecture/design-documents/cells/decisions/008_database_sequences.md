---
stage: core platform
group: Database
title: "Cells ADR 008: クラスター全体で一意なデータベースシーケンス"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/008_database_sequences/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

クラスター全体でシーケンスが重複しない一意性を持つことは、Cell 間での Organization 移動のために必要です。
この点は [core-platform-section/-/epics/3](https://gitlab.com/groups/gitlab-org/core-platform-section/-/epics/3) でも強調されており、
異なる解決策が <https://gitlab.com/gitlab-org/core-platform-section/data-stores/-/issues/102> で議論されました。

## 決定事項

すべての Cell は作成時に bigint の ID を使用します。プロビジョニング時に、各 Cell は [Topology Service](../topology_service.md) から使用するシーケンスの範囲を割り当てられます。

Topology Service は[こちら](../topology_service.md#logic-to-compute-the-range)で説明されているロジックを使用してシーケンス範囲を計算し、既存および新規作成されるすべてのシーケンス ID に対して `minval`、`maxval` を設定します。

- データベースが読み込まれると、`gitlab:db:alter_cell_sequences_range` が呼び出されてシーケンス範囲を変更します。
- 上記の rake タスクは内部的に EVENT TRIGGER [alter_new_sequences_range](https://gitlab.com/gitlab-org/gitlab/blob/e51a48ba87ecbc70d2c65976e320773f78445045/lib/gitlab/database/alter_cell_sequences_range.rb#L36) を登録し、新しい ID に対して正しいシーケンス範囲を設定します。

## 代替案

この問題に対して検討された各種解決策を以下に示します。

- [解決策 1: シーケンスを要求するグローバルサービス](https://gitlab.com/gitlab-org/core-platform-section/data-stores/-/issues/102#note_1853252715)
- [解決策 2: すべての int ID を bigint に変換して一意な ID を生成](https://gitlab.com/gitlab-org/core-platform-section/data-stores/-/issues/102#note_1853260434)
- [解決策 3: 複合主キー [(既存 PK), 元の Cell ID] を使用](https://gitlab.com/gitlab-org/core-platform-section/data-stores/-/issues/102#note_1853265147)
- [解決策 4: Cell のみで bigint ID を使用](https://gitlab.com/gitlab-org/core-platform-section/data-stores/-/issues/102#note_1853328985)
- [解決策 5: 論理レプリケーションを使用](https://gitlab.com/gitlab-org/core-platform-section/data-stores/-/issues/102#note_1857486154)
