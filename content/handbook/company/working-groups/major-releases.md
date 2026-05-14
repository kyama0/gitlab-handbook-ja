---
title: "メジャーリリース ワーキンググループ"
description: "スムーズでシンプルなメジャーリリースを実現するためのワーキンググループ。"
status: active
upstream_path: "/handbook/company/working-groups/major-releases/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: "claude"
stale: false
---

## 属性

| プロパティ       | 値                                                        |
| -------------- | ------------------------------------------------------------ |
| 作成日   | 2024-02-22                                                   |
| 終了日       | 2025-07-01                                                   |
| Slack          | [#wg_major-releases](https://gitlab.enterprise.slack.com/archives/C073MV570F7)（社内からのみアクセス可能） |
| Google Doc     | [Major Releases Working Group Agenda](https://docs.google.com/document/d/1jxl4SDDeoQgR9DOCZ63_D38OglE1OGkJBq_fC_z46BA/edit?usp=sharing)|
| Epic           | [Future Major Release Coordination & Improvements](https://gitlab.com/groups/gitlab-com/-/epics/2363) |
| 概要とステータス | クローズ |

## クローズに際して

このグループは、組織が採用できる破壊的変更に関する見解を統合した成果をもって終了しました:

- [Migrations over breaking things 2024 Executive Brief（社内）](https://docs.google.com/document/d/1ByVZEhGJfjb6XTwiDeaSDRVwUiF6dsEQI01TW4BJA0k/edit?tab=t.0)
- [Migrations over breaking things 2024 SLides（社内）](https://docs.google.com/presentation/d/1VRywg9xQR7yHqlphL-jWyApPrNsSSvmydlmgU88vSJk/edit#slide=id.g31bf0854b0a_0_0)
- [Migrations over breaking things 2024 Recording（社内）](https://www.youtube.com/watch?v=GkhYD6QAy-4)

## 目的

メジャーリリース ワーキンググループは、SaaS およびセルフマネージドの GitLab ユーザーにおけるメジャーリリースと破壊的変更に関連する顧客へのネガティブな影響を最小化することを目指します。

### 概要

メジャーリリース ワーキンググループは、廃止予定ポリシーに従ってメジャーリリースで廃止されるすべての機能が発表された時点から、メジャーリリースの少なくとも1マイルストーン後まで、メジャーアップグレードに伴う顧客の問題を把握し対応計画を策定するまでの期間を対象に活動します。この大まかなスケジュールは上記の属性テーブルに概説されています。

### 目標

以下は検討すべきトピックの非網羅的なリストです。

- 破壊的変更とメジャーリリースによる顧客への影響を最小化します。
- [製品の廃止予定を精査し、さらなる分析のために影響の大きいものを抽出します](https://gitlab.com/groups/gitlab-com/-/epics/2293#specific-asks-for-pms)。
- 廃止予定とアップグレードに関する顧客の質問に対応できるようサポートと CS を準備します - [内部スライド](https://docs.google.com/presentation/d/1YjEsBpemHC5eLfNbfSCFWQK5hA3z0iysdNx6SGBw8K4/edit#slide=id.g1ef4929c487_0_34)。
- 顧客を準備させるためのリリースコミュニケーションを行います。
- 廃止予定ポリシーと GitLab の実際の運用解釈が一致しているか、変更が必要かを検討します。
- 次のメジャーリリースの状況を改善し、次のイテレーションでこのワーキンググループが不要になるための計画を策定します。

### 終了基準 {#exit-criteria}

終了基準は [Future Major Release Coordination & Improvements Epic](https://gitlab.com/groups/gitlab-com/-/epics/2363#exit-criteria) に記載されています。

## 役割と責任

| ワーキンググループの役割                       | 担当者                           | 役職                                                          |
|------------------------------------------|----------------------------------|----------------------------------------------------------------|
| エグゼクティブスポンサー            | Sabrina Farmer (@sabrinafarmer)           | CTO |
| エグゼクティブステークホルダー        | Josh Lemos (@joshlemos)                   | CISO |
| ファシリテーター/DRI              | Sam Wiskow (@swiskow)                     | Sr. PM, Delivery & Scalability - Infra |
| プロダクトマネジメント           | Mike Flouton (@mflouton)                  | VP - Product |
| メンバー                       | Marin Jankovski (@marin)                  | Senior Director - Infrastructure, SaaS Platforms  |
| メンバー                       | Fabian Zimmer (@fzimmer)                  | Product Director - SaaS Platforms    |
| メンバー                       | Michele Bursi (@mbursi)                   | Engineering Manager, Delivery Group |
| メンバー                       | Steve Evangelista (@steve-evangelista)    | Senior Product Director - Dev & Analytics |
| メンバー                       | Martin Bruemmer (@mbruemmer)              | Staff Customer Success Manager |
| メンバー                       | Lyle Kozloff (@lyle)                      | Director of Support, Global Readiness |
| メンバー                       | Stephen Denham (@denhams)                 | Engineering Manager, Environment Automation, Dedicated |
| メンバー                       | Cheryl Li (@cheryl.li)                    | Senior Engineering Manager, Verify |
| メンバー                       | Conley Rogers (@conleyr)                  | Staff Customer Success Architect |
