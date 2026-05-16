---
title: "Cells のデータベース設定"
owning-stage: "~devops::tenant-scale"
group: cells-infrastructure
creation-date: "2025-12-08"
authors: ["@tkhandelwal3"]
approvers: ["@daveyleach", "@praba.m7n", "@krasio", "@mkozono", "@tkuah"]
coach: "@tkuah"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/023_database_configuration/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-09T09:30:54+05:30"
---

## コンテキスト

個々の Cell が 3 つの**論理**データベースを持つべきか、単一データベースを持つべきかについて、[この Issue](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/507) で議論しました。

## 決定事項

`レガシー Cell` アーキテクチャとの整合性を保つため、Cell には**3 つの論理データベース**（main、ci、sec）を持つ単一 DB インスタンスを作成することを決定しました。

このアプローチは未知の要素を減らし、Cell からレガシー Cell へのより簡単な PostgreSQL ロールバックパスを提供します。

## 結果と影響

- 既存の`レガシークラスター`と整合した均一な Cell クラスターアーキテクチャを維持します。
- 移行が `3→3` になるため（`3→1` ではなく）、組織の PostgreSQL データ移行が簡素化され、ロールバックも同じパターンに従います。
- [こちらのコメント](https://gitlab.com/groups/gitlab-org/-/epics/8631#note_2926361776)で説明されているように、組織データの移行は分解されたデータベースを使用する Cell で機能します。
- [こちらのコメント](https://gitlab.com/groups/gitlab-org/-/epics/8631#note_2926319113)で説明されているように、ディザスタリカバリのための Geo は分解されたデータベースを使用する Cell で引き続き機能します。

## 代替案

**Cell に単一の論理データベース（main）を使用する**

以下の理由で却下：
  - `gitlab_shared_org` スキーマを持つ既存データの移行の課題が生じる。
  - 一部の機能が分解されたデータベースアーキテクチャに依存している可能性があるため、未知の要素が増える。
  - Cell からレガシー Cell へのロールバックが複雑になる（どのテーブルがどのデータベースに属するかを識別する `1→3` データ変換が必要）。
