---
title: "Work Items API パフォーマンス ワーキンググループ"
description: "Work Items API のパフォーマンス改善を目的とするステージワーキンググループ"
upstream_path: /handbook/engineering/devops/plan/working-groups/work-items-api-performance/
upstream_sha: bb4e4d0fc1a355c00a1d82b1528ff729c83af189
translated_at: "2026-04-28T13:03:31Z"
translator: claude
stale: false
lastmod: "2025-12-05T19:47:34+00:00"
---

## 属性

| プロパティ          | 値                                                                                                      |
|---------------------|---------------------------------------------------------------------------------------------------------|
| 作成日              | 2025-03-03                                                                                              |
| 目標終了日          | 2025-08-29                                                                                              |
| Slack               | [#wg_work-items-api-performance](https://gitlab.enterprise.slack.com/archives/C08G0G394CD)              |
| Google Doc          | [アジェンダ](https://docs.google.com/document/d/1S5ZSbEOSCAUWe0U3gZPGXSUKIaFjjn_HD1UGkz2hhXY/edit?tab=t.0) |
| Epic                | https://gitlab.com/groups/gitlab-org/-/epics/16919                                                      |
| 概要・ステータス    | [終了基準の進捗](#exit-criteria) を参照してください                                                     |

### 背景

Plan の多くの機能は、同じ work-items API・データベース・検索アーキテクチャに依存しています:

- プロジェクトおよびグループの Issue 検索
- ボード
- GLQL

これらの機能には類似したパフォーマンス上の問題があります:

- [大規模グループでの比較的シンプルな検索クエリ](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=closed&label_name%5B%5D=group%3A%3Acode%20review&label_name%5B%5D=bug%3A%3Avulnerability&first_page_size=100) が現在タイムアウトしています。
- GLQL クエリのタイムアウト

これらの API のパフォーマンスは、私たちのエラーバジェットにも影響します。

#### ウィークリー同期

TBD

<span id="exit-criteria"></span>

### 終了基準

- [ ] グループ/プロジェクトの Issue フィルターを Work Items API へ移行する
- [ ] Work Items API のパフォーマンスを計測し、改善目標を設定する（例:）:
  - 特定の一般的なクエリがタイムアウトしない
  - X パーセンタイルのリクエスト所要時間を目標値 X 以内に収める
  - エラーバジェットをグリーンにする
- [ ] 前のステップで設定した目標に到達する

### 役割と責任

| ワーキンググループ役割 | 氏名              | 職位                                                |
|--------------------|-------------------|-----------------------------------------------------|
| ファシリテーター   | Eugenia Grieff    | Senior Backend Engineer - Plan::Product Planning    |
| メンバー           | Alisa Frunza      | Backend Engineer - Plan::Knowledge                  |
| メンバー           | Heinrich Lee Yu   | Staff Backend Engineer - Plan::Project Management   |
| メンバー           | Kassio Borges     | Staff Backend Engineer - Plan::Product Planning     |
| メンバー           | Alexandru Croitor | Senior Backend Engineer - Plan:Project Management   |
| メンバー           | Nicolas Dular     | Staff Backend Engineer - Plan::Product Planning     |
| メンバー           | Dmitry Gruzd      | Staff Backend Engineer - Foundations::Global Search |
