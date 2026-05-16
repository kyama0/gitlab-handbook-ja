---
title: "セルフマネージド スケーラビリティ ワーキンググループ"
description: "GitLab 内のこのグループは、すべての新規顧客がニーズに合わせてスケールする標準化された環境に設定されることを確保します。詳細はこちら！"
upstream_path: "/handbook/company/working-groups/self-managed-scalability/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T23:18:21Z"
translator: "claude"
stale: false
lastmod: "2024-05-11T00:54:28+00:00"
---

## 属性

| プロパティ      | 値             |
|----------------|---------------|
| 作成日          | 2019年5月21日 |
| 目標終了日      | 2020年6月23日 |
| Slack           | [#wg_sm-scalability](https://gitlab.slack.com/messages/CJBEAQ589)（社内からのみアクセス可能） |
| Google Doc      | [セルフマネージド スケーラビリティ ワーキンググループ アジェンダ](https://docs.google.com/document/d/1H9ENjGO5vNI1e0j3lm2e6zeK8F8o8H-69M3V7m3uYt8/edit)（社内からのみアクセス可能） |
| Issue ボード    | [gitlab-org boards 1131633](https://gitlab.com/groups/gitlab-org/-/boards/1131633) |

## ビジネス目標

すべての新規顧客がニーズに合わせてスケールする標準化された環境に設定されることを確保します。既存の顧客を適切なリファレンス環境に移行します。

## 完了基準（100%）

- [GitLab セルフマネージド パフォーマンスメトリクスの完成](https://gitlab.com/groups/gitlab-org/-/epics/1352) => `100%`
- [すべての大規模顧客に対してデフォルトで有効化されたモニタリング（Prometheus、Grafana、およびすべてのエクスポーター）](https://gitlab.com/groups/gitlab-org/-/epics/1339) => `100%`
- [環境スコアを持つセルフマネージド顧客のインベントリ](https://gitlab.com/groups/gitlab-org/-/epics/1338) => `100%` スコアリングシステムが定義されました。
- [1つの顧客をリファレンスアーキテクチャに移行](https://gitlab.com/gitlab-org/quality/performance/-/issues/65) => `100%`
- [追加のリファレンスアーキテクチャのリスト](https://gitlab.com/gitlab-org/quality/performance/issues/15) => `100%` 10K、25K、50K と次の即時ニーズを特定しました。
- [10,000ユーザー リファレンスアーキテクチャ](https://gitlab.com/groups/gitlab-org/-/epics/1336) => `100%`
- [25,000ユーザー リファレンスアーキテクチャ](https://gitlab.com/gitlab-org/quality/performance/issues/57) => `100%`
- [50,000ユーザー リファレンスアーキテクチャ](https://gitlab.com/gitlab-org/quality/performance/issues/66) => `100%`
- [Kubernetes Omnibus 混合アーキテクチャの初回イテレーション](https://gitlab.com/gitlab-org/quality/performance/issues/145) => `100%`

## ビジネス成果

- パフォーマンステストを完了したことで、私たちのリファレンスアーキテクチャはセルフマネージド顧客が HA をセットアップしようとする際のデフォルトの出発点となっています。
  これにより、SA がお客様の適切なサイジング / セットアップの決定を支援するために費やす時間が削減され、効率が大幅に向上しました。
- パフォーマンステストキットは、購入前のデューデリジェンスの一環として大規模なパフォーマンスを証明する必要がある見込み顧客に活用されています。
  以前はお客様が自分でこれを行う必要があり、時間がかかり、複雑で、取引の進展にリスクがありました。

## 役割と責任

| ワーキンググループの役割 | 担当者                   | 職位                          |
|----------------------|-----------------------|-------------------------------|
| ファシリテーター        | Mek Stittri           | Director of Quality            |
| サポートリード          | Aric Buerer           | Support Engineer               |
| CS リード             | Brian Wald            | Solutions Architects Manager   |
| クオリティリード        | Grant Young           | Sr. Software Engineer in Test  |
| 開発リード             | Matt Nohr             | Engineering Manager, Monitor   |
| PM リード             | Dov Hershkovitch      | Senior Product Manager, Monitor:APM |
| テクニカルライティングリード | Achilleas (Axil) Pipinellis | Technical Writer         |
| メンバー               | Tom Cooney            | Director of Support            |
| メンバー               | Francis Potter        | Solutions Architect            |
| メンバー               | John Woods            | CSM Manager                    |
| メンバー               | Tanya Pazitny         | Quality Engineering Manager    |
| メンバー               | Andrew Newdigate      | Distinguished SRE              |
| メンバー               | Nailia Iskhakova      | Software Engineer in Test      |
| メンバー               | John Skarbek          | Senior Site Reliability Engineer, Delivery |
| メンバー               | Jason Plum            | Senior Distribution Engineer   |
| メンバー               | Vincy Wilson          | Quality Engineering Manager    |
| メンバー               | Catalin Irimie        | Support Engineer               |
| エグゼクティブスポンサー  | Eric Johnson          | VP of Engineering              |
