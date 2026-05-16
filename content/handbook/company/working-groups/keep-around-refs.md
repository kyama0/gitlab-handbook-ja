---
title: "Keep Around Refs ワーキンググループ"
description: "Keep Around Refs ワーキンググループは、無制限の keep-around リファレンスの問題に取り組みます"
status: active
upstream_path: "/handbook/company/working-groups/keep-around-refs/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-06-03T23:53:00+00:00"
---

## 属性

| プロパティ        | 値                                                           |
| -------------- | ------------------------------------------------------------ |
| 作成日          | 2024年7月8日                                                  |
| 終了日          | TBD                                                          |
| Slack          | [#wg_keep-around-refs](https://gitlab.slack.com/archives/C076Z1ADEQP)（社内からのみアクセス可能） |
| Google Doc     | [ワーキンググループ アジェンダ](https://docs.google.com/document/d/1ePsKix5IescNQHh2EPhiwlioX1h8HD0JhBp72ATVMB0/edit#heading=h.i8vgmxvelcff) |
| Issue ボード   | [ワーキンググループ Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/7601653?label_name[]=WG%3A%3AKeepAroundRefs) |
| 概要 & ステータス | [メイン Epic](https://gitlab.com/groups/gitlab-org/-/epics/12961) |

### スコープと定義

このワーキンググループにおける定義:

1. keep-around refs: Gitaly によって Git データが Gitaly にプルーニングされないよう保持するために[Gitaly を通じて作成された](https://docs.gitlab.com/ee/development/gitaly.html#gitlab-specific-references) Git リファレンス。

### 完了基準

1. Rails は作成した keep-around リファレンスと、それが保持する Git オブジェクトに依存するエンティティを追跡します。
1. Rails はエンティティが不要になった keep-around リファレンスを削除します。
1. Rails は keep-around リファレンスが無制限に作成されることを防ぎます。

## 全体的なゴール

1. マージリクエスト、パイプラインなどが多い大規模リポジトリでも Git オペレーションが高パフォーマンスであること。

## 将来的なゴール

1. keep-around refs の保持ポリシーを設定する。
1. GitLab.com 上の既存および不要な keep-around refs を移行する:
   - 既存の keep-around リファレンスとデータベースエンティティ間の依存関係を記録・維持する。
   - 既存の不要な keep-around リファレンスを削除する。

## 役割と責任

| ワーキンググループの役割     | 担当者                                             | 役職                                                  |
|------------------------|----------------------------------------------------|-------------------------------------------------------|
| Executive Stakeholder  | [Tim Zallmann](https://gitlab.com/timzallmann)     | Senior Director, ~"Department::Development"           |
| ファシリテーター/DRI    | [James Fargher](https://gitlab.com/proglottis)     | Senior Backend Engineer, ~"group::gitaly"             |
| Product DRI            | [Mark Wood](https://gitlab.com/mjwood)             | Product Manager, ~"group::gitaly"                     |
| メンバー               | [Sami Hiltunen](https://gitlab.com/samihiltunen)   | Staff Backend Engineer, ~"group::gitaly"              |
| メンバー               | [John Cai](https://gitlab.com/jcaigitlab)          | Engineering Manager, ~"group::gitaly"                 |
| メンバー               | [David Kim](https://gitlab.com/dskim_gitlab)       | Senior Backend Engineer, ~"group::code review"        |
| メンバー               | [Kai Armstrong](https://gitlab.com/phikai)         | Principal Product Manager, ~"group::code review"      |
| メンバー               | [Hordur Freyr Yngvason](https://gitlab.com/hordur) | Senior Backend Engineer, ~"group::pipeline execution" |
| メンバー               | [Vasilii Iakliushin](https://gitlab.com/vyaklushin)| Staff Backend Engineer, ~"group::source code"         |
| メンバー               | [Furkan Ayhan](https://gitlab.com/furkanayhan)     | Senior Backend Engineer, ~"group::pipeline authoring" |
