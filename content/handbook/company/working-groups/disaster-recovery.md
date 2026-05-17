---
title: "ディザスタリカバリ ワーキンググループ"
description: "ディザスタリカバリ ワーキンググループは、GitLab SaaS およびセルフホスト製品のディザスタリカバリ機構を改善します。"
status: active
upstream_path: /handbook/company/working-groups/disaster-recovery/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-19T10:03:11+00:00"
---

## 属性

| プロパティ       | 値                                                           |
| -------------- | ------------------------------------------------------------ |
| 再開日          | 2022 年 8 月 1 日                                                 |
| 作成日          | 2020 年 11 月 11 日                                               |
| 終了日          | 2025 年 1 月 6 日 |
| Slack          | [#wg_disaster-recovery](https://gitlab.slack.com/archives/C01D6Q0DHAL)（社内からのみアクセス可） |
| Google Doc     | [ワーキンググループ アジェンダ](https://docs.google.com/document/d/1dLgmLlvET5WyWF0CpX5JUxiyQKyDzctocs7unwLueY8)（社内からのみアクセス可） |
| 概要 & ステータス | [内部ハンドブック](https://internal.gitlab.com/handbook/engineering/disaster-recovery/) |

### スコープと定義

このワーキンググループにおける用語の定義:

1. **目標復旧時点（RPO）**: インシデントによってデータが失われる可能性のある最大時間。
1. **目標復旧時間（RTO）**: インシデントによってサービスが利用不可になる最大時間。

### ゴール

このワーキンググループは、RTO と RPO の目標値および目標への信頼度を向上させるクロスチームの取り組みを調整するために存在します。

ワーキンググループの終了基準と目標は、内部ハンドブックの[こちら](https://internal.gitlab.com/handbook/engineering/disaster-recovery/)に定義されています。

## ロールと責任

| ワーキンググループのロール     | 担当者                  | 役職                                           |
|------------------------|-------------------------|------------------------------------------------|
| ファシリテーター/DRI        | Andras Horvath          | Engineering Manager, Gitaly                    |
| プロダクト管理 DRI | Mark Wood               | Senior Product Manager, Gitaly                 |
| メンバー                 | Gerardo Lopez-Fernandez | Engineering Fellow, Infrastructure             |
| メンバー                 | Chun Du                 | Director of Engineering, Enablement            |
| メンバー                 | Lucie Zhao              | Engineering Manager, Geo             |
| メンバー                 | Sampath Ranasinghe      | Senior Product Manager, Geo                    |
| メンバー                 | John Jarvis             | Staff SRE, Infrastructure                      |
| メンバー                 | Michele Bursi           | Engineering Manager, Delivery                  |
| メンバー                 | Sami Hiltunen           | Senior Backend Engineer, Gitaly                |
| メンバー                 | Joshua Lambert          | Director of Product Management, Enablement     |
| メンバー                 | Ahmad Sherif            | Senior SRE, Infrastructure                     |
| メンバー                 | Fabian Zimmer           | Director of Product Management, SaaS Platforms |
| メンバー                 | Nick Westbury           | Senior Software Engineer in Test, Geo          |

## 関連リンク

- [gitlab.com のバックアップとリカバリ](/handbook/engineering/gitlab-com/policies/backup/)
- （内部ハンドブック）RTO/RPO 目標を含む [gitlab.com ディザスタリカバリ](https://internal.gitlab.com/handbook/engineering/disaster-recovery/)
- [GitLab Dedicated ディザスタリカバリ計画](https://docs.gitlab.com/administration/dedicated/disaster_recovery/)
- フォローアップ: [GitLab.com と GitLab Dedicated のディザスタリカバリ機能に関するパフォーマンス指標の整合](https://gitlab.com/gitlab-com/gl-infra/mstaff/-/issues/397)
