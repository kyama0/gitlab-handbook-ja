---
title: "分離ワーキンググループ"
description: "GitLab の分離ワーキンググループは、予期しない事態が発生したときに顧客への影響を最小限に抑える計画を策定します。詳しくはこちら！"
upstream_path: "/handbook/company/working-groups/isolation/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-19T18:08:14+00:00"
---

## 属性

| プロパティ      | 値               |
|-----------------|------------------|
| 作成日          | 2019 年 10 月 7 日    |
| 終了日          | 2020 年 2 月 28 日    |
| Slack           | [#wg_isolation](https://gitlab.slack.com/messages/CNTFF3RB5)（社内からのみアクセス可能） |
| Google Doc      | [分離ワーキンググループ アジェンダ](https://docs.google.com/document/d/12PjNkkklBM3dIDXcDqlR6kXBanBbqbXu9LRmcjvuJgc/edit#)（社内からのみアクセス可能） |

## ビジネスゴール

「ノイジーネイバー」や他の予期しない事態が発生した際に、顧客への影響を最小限に抑える計画を策定します。

## 完了基準

1. ワーキンググループのスコープを決定し、具体的な調査ラインを選定する
1. 各調査ラインについて
    - 適切なゴールを決定する
    - Issue のバックログを定義する
    - 推定タイムラインを提供する
    - グループとともに Issue をスケジュールする
1. [分離問題への対処方法についてのガイダンスを作成する](https://gitlab.com/gitlab-org/gitlab/issues/196829)

**グループ閉鎖情報:** すべての調査ラインが [Availability and Performance Weekly Meeting](https://docs.google.com/document/d/1SanPUz86cIyRQR5kRmXyCLLE8sZVpx0auu_W6jY94W4/edit#heading=h.mbjsiz6n6jlo) に組み込まれました。

## 具体的な調査ライン

- [アプリケーションレベルの Redis シャーディング](https://gitlab.com/groups/gitlab-org/-/epics/2391)（Grzegorz Bizon）
- [ファイルストレージの分離](https://gitlab.com/groups/gitlab-org/-/epics/2307)（Marin Jankovski）
- [データベースパーティショニング](https://gitlab.com/groups/gitlab-org/-/epics/2023)（Craig Gomes）

[分離サービス](https://gitlab.com/gitlab-org/gitlab/issues/31121)（Craig Gomes）は、Memory グループの将来の取り組みとなるため、このワーキンググループから外されました。

## 役割と責任

| ワーキンググループの役割                     | 担当者                          | 役職                                     |
|------------------------------------------|---------------------------------|------------------------------------------|
| Executive Stakeholder                    | Christopher Lefelhocz           | Senior Director of Development           |
| ファシリテーター                           | Rachel Nienaber                 | Engineering Manager, Geo                 |
| アプリケーションレベル Redis シャーディングの DRI | Grzegorz Bizon             | Staff Backend Engineer, Configure:System |
| ファイルストレージ分離の DRI               | Andrew Newdigate                | Distinguished Engineer, Infrastructure   |
| データベースパーティショニングの DRI        | Craig Gomes                     | Engineering Manager, Memory              |
| Functional Lead                          | Ramya Authappan                 | Quality Engineering Manager, Dev         |
| Functional Lead                          | Fabian Zimmer                   | Senior Product Manager, Geo              |
| Functional Lead                          | Gerardo "Gerir" Lopez-Fernandez | Engineering Fellow, Infrastructure       |
| Functional Lead                          | Stan Hu                         | Engineering Fellow, Development          |
| メンバー                                  | George Burdell                  | Campus Alumni Representative             |
| メンバー                                  | Chun Du                         | Director of Engineering, Enablement      |
| メンバー                                  | Wayne Haber                     | Director of Engineering, Protect          |
| メンバー                                  | Nicholas Klick                  | Engineering Manager, Configure:System    |
