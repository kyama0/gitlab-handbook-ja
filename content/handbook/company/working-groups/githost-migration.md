---
title: "GitHost 移行ワーキンググループ"
description: "GitLab GitHost 移行ワーキンググループは、主要な顧客を GitHost.io から GitLab.com へ正常に移行させることを目的としています。"
upstream_path: "/handbook/company/working-groups/githost-migration/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: "claude"
stale: false
lastmod: "2023-09-01T13:37:05+01:00"
---

## 属性

| プロパティ        | 値           |
|-----------------|-----------------|
| 作成日    | 2020 年 1 月 30 日 |
| 目標終了日 | 2020 年 4 月 24 日|
| 実際の終了日 | 2020 年 5 月 12 日 |
| Slack           | [#wg_githost_migration](https://gitlab.slack.com/archives/CRKL886F2)（社内からのみアクセス可能） |
| Google Doc      | [GitHost 移行ワーキンググループアジェンダ](https://docs.google.com/document/d/1O8cF5ylQHJDAXVB3KUoW5FhPRH-RIOpHAOuuuPz0VL0/edit)（社内からのみアクセス可能） |

## ビジネス目標

主要な顧客を GitHost.io から GitLab.com へ正常に移行させます。特定の顧客の詳細については上記の Google Doc を参照してください。

## 終了基準 {#exit-criteria}

1. 顧客の受入基準を定義します。 => **完了** 顧客はすべてのデータの移行を希望していることを確認しました。移行に含まれるデータのスコープを確認しており、[ここ](https://docs.google.com/document/d/1O8cF5ylQHJDAXVB3KUoW5FhPRH-RIOpHAOuuuPz0VL0/edit#heading=h.1jbhsgk81yat)の「移行機能」リンクから確認できます。
1. [この Epic](https://gitlab.com/groups/gitlab-org/-/epics/2584) で移行作業をブロックしている Issue を特定して解決します。 => **完了**。
1. エンドツーエンドのテスト計画を完成させ、移行のドライランを実施します。 => **完了**。
1. 移行プロセスの一部として既知のリスクを文書化します。 => **完了** リスクは[ここ](https://gitlab.com/gitlab-org/manage/-/issues/16366)に記載されています。ワーキンググループは各リスクに対して承認を追加します。
1. 顧客向けの移行を実行します。 => **完了** 開始日：4 月 13 日、終了日：5 月 13 日。

## 役割と責任

| ワーキンググループの役割    | 人物                | 役職                                      |
|-----------------------|-----------------------|--------------------------------------------|
| エグゼクティブステークホルダー | Christopher Lefelhocz | Senior Director of Development             |
| ファシリテーター           | Allison Walker        | Professional Services Project Manager      |
| ファンクショナルリード       | Liam McAndrew         | Backend Engineering Manager, Manage:Import |
| ファンクショナルリード       | Jeremy Watson         | Group Product Manager, Manage              |
| ファンクショナルリード       | Michael Lutz          | Senior Director of Professional Services   |
| ファンクショナルリード       | Paul Harrison         | Security Manager, Security Operations      |
| メンバー                | Haris Delalić         | Product Manager, Manage:Import             |
| メンバー                | George Koltsov        | Backend Engineer, Manage:Import            |
| メンバー                | Désirée Chevalier     | Software Engineer in Test, Manage          |
| メンバー                | Sanad Liaquat         | Senior Software Engineer in Test, Manage   |
| メンバー                | Glen Miller           | Professional Services Engineer             |
| メンバー                | Petar Prokic          | Professional Services Engineer, EMEA       |
| メンバー                | Sean Hoyle            | Customer Success Manager                  |
| メンバー                | Luca Williams         | Product Manager, Manage:Spaces             |
| メンバー                | Lyle Kozloff          | Support Engineering Manager                |

## 成果

主要な顧客は GitHost.io から GitLab.com へ正常に移行されました。このプロセスの一部として、新しい[グループインポート/エクスポート API](https://gitlab.com/groups/gitlab-org/-/epics/1952) が導入され、プロジェクトのインポート/エクスポート機能の信頼性が向上しました。ワーキンググループへの皆様の貢献に感謝します。
