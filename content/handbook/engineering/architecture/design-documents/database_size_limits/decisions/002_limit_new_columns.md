---
owning-stage: "~devops::data stores"
title: 'データベースサイズ制限 ADR 002: 100 GB を超えるテーブルへの新規カラムの制限'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/database_size_limits/decisions/002_limit_new_columns/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

## コンテキスト

GitLab は最適なパフォーマンスと管理性のためにテーブルサイズを 100 GB 未満に維持することを目標としています。テーブルサイズの増大は以下によって起こります：

- 新しいカラムの追加
- 行数の増加
- 新しいインデックスの作成

この決定は新しいカラムの追加を防ぐことに焦点を当てていますが、パーティショニングやデータ保持ポリシーなどの他のサイズ制御方法は別途対処されます。

## 決定

以下によって 100 GB を超えるテーブルへの新しいカラムの追加を防ぎます：

1. RuboCop 強制（[!173248](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/173248)）
1. 許可された例外の文書化（[!169164](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/169164/diffs)）

このルールの例外は、[開発ガイドライン](https://docs.gitlab.com/ee/development/database/large_tables_limitations.html#requesting-an-exception)に文書化されており、明示的な承認が必要です。

## 結果

- 新機能には追加のエンジニアリング作業が必要になる場合があります。
- 一部の機能はアーキテクチャの変更が必要になる場合があります。
- 大きなテーブルにはパーティショニング戦略が必要になる場合があります。
- データ保持ポリシーがより重要になります。
- 開発者は関連データのために別テーブルを作成する必要がある場合があります（たとえば、名前空間に対する `namespace_settings` など）。これによりデータベーススキーマに複雑さが加わる場合があります。
