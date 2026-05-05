---
title: "断続的バグ"
description: "断続的 Issue に対するツールを構築し、持続可能な早期対策のプロセスを定める"
upstream_path: /handbook/company/working-groups/transient-bugs/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T23:40:34Z"
translator: claude
stale: false
---

## 属性

| プロパティ   | 値                                                                                                                                              |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| 作成日      | 2020年11月16日                                                                                                                                   |
| 終了日      | 2021年2月23日                                                                                                                                    |
| Slack       | [#wg_transient-bugs](https://gitlab.slack.com/archives/C01EUKUM5DK)（社内のみアクセス可能）                                                     |
| Google Doc  | [ワーキンググループ議事録](https://docs.google.com/document/d/14rB6o7udwgWitV9lB7S3fzjHBaaqrG_23WVz89mHqGo/edit#heading=h.gp5w1bjoz2ug)（社内のみアクセス可能）|
| タスクボード| [Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/2190215)                                                                           |
| バグボード  | [`bug::transient` ボード](https://gitlab.com/groups/gitlab-org/-/boards/2206756)                                                                |

## ビジネス目標

断続的 Issue に対するツールを構築し、断続的 Issue を早期に持続可能に防止するためのプロセスを定める。

[断続的バグ](/handbook/product-development/how-we-work/issue-triage/#transient-bugs)は FY21Q4 OKR の重点テーマとなっています。Development と Quality の両部門にわたって複数のクロスファンクショナルな取り組みと KR があり、適切なツールとプロセスを整備してこれらの Issue を早期に解決する勢いをさらに高めたいと考えています。

### 終了基準（進捗 100%）

1. Engineering FY21Q4 OKR を書き換えて、断続的 Issue の予防的対策を反映する。`=> 100%`
1. [断続的バグをローカルで再現するための開発者向けツールを構築する。](https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/759) `=> 100%`
1. 断続的バグを検出するためのテストパイプラインを構築する（GDK、CI、テストフレーキーレポート）。`=> 100%、完了`
1. [断続的バグを修正することで GMAU を向上できる上位 3 プロダクトグループを特定する。](https://gitlab.com/gitlab-org/frontend/general/-/issues/40) `=> 100%、分析完了、ハンドブックへの追記が必要`
1. [断続的バグを防止できるアーキテクチャパターンのドキュメントを更新する。](https://gitlab.com/gitlab-org/gitlab/-/issues/293858) `=> 100%`
   - [https://docs.gitlab.com/ee/development/transient/prevention-patterns.html](https://docs.gitlab.com/ee/development/transient/prevention-patterns.html)
1. [断続的バグを既存のトリアージプロセスと優先順位付けに組み込む。](https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/760) `=> 100%、最低限の優先順位付けは完了、トリアージ自動化に取り組み中`
   - [https://handbook.gitlab.com/handbook/product-development/how-we-work/issue-triage/#merge-requests-experience](/handbook/product-development/how-we-work/issue-triage/#merge-requests-experience)
1. 断続的バグの可視性を高めるための指標を構築する。`=> 100%、Sisense に断続的バグダッシュボードが追加された`

### 役割と責任

| ワーキンググループでの役割 | 氏名                    | 役職                                              |
|---------------------------|------------------------|--------------------------------------------------|
| エグゼクティブスポンサー   | Christopher Lefelhocz  | VP of Development                                |
| ファシリテーター            | Mek Stittri            | Director of Quality                              |
| ファンクショナルリード      | Tim Zallmann           | Director of Development, Dev                     |
| ファンクショナルリード      | Ramya Authappan        | Quality Engineering Manager, Dev                 |
| ファンクショナルリード      | Valerie Karnes         | Director of Product Design                       |
| メンバー                   | Tanya Pazitny          | Quality Engineering Manager, Enablement          |
| メンバー                   | Darva Satcher          | Senior Engineering Manager, Create               |
| メンバー                   | Michelle Gill          | Engineering Manager, Create:Source Code          |
| メンバー                   | André Luís             | Engineering Manager, Create:Source Code, Create:Code Review |
| メンバー                   | Phil Hughes            | Staff Frontend Engineer, Create:Code Review      |
| メンバー                   | Mark Lapierre          | Senior Software Engineer in Test, Create:Source Code |
| メンバー                   | Sofia Vistas           | Software Engineer in Test, Package:Package       |
| メンバー                   | Erick Banks            | Senior Software Engineer in Test, Enablement:Search |
| メンバー                   | Tiffany Rea            | Software Engineer in Test, Verify:Continuous Integration |
