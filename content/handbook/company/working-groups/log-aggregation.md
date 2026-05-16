---
title: "ログ集約ワーキンググループ"
description: "ログ集約ワーキンググループは、GitLab.com のログの品質、価値、アクセシビリティを向上させることを目指しています。詳しくはこちら！"
upstream_path: "/handbook/company/working-groups/log-aggregation/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: claude
stale: false
lastmod: "2024-09-09T21:38:19+00:00"
---

## 属性

| プロパティ   | 値 |
|--------------|-------|
| 作成日       | 2019年3月6日 |
| 終了日       | 2019年7月 |
| Slack        | [#wg_log-aggregation](https://gitlab.slack.com/messages/CGR0T1C6P)（社内からのみアクセス可能） |
| Google Doc   | [ログ集約ワーキンググループ](https://docs.google.com/document/d/192B68tEuw5KoJEKwlzDlVbXS8PaxOT57M2MAcjCbHVo/edit)（社内からのみアクセス可能） |
| Issue ラベル | WG-LogAgg (gitlab-com/-org) |

## ビジネスゴール

GitLab.com のログの品質、価値、アクセシビリティを向上させます。

意図は次のとおりです:

1. データ分類とアクセス制御の分析を含め、現在の本番ログの場所、保持期間、種類を分析・文書化する
1. GitLab.com のログを最大限に活用するためのトラブルシューティングおよび調査ガイドを開発する
1. ログの品質と完全性のギャップ分析を行い、調査を合理化するための改善箇所を特定する
1. インフラおよび開発チームと協力して提案された改善を GitLab.com に統合する

## 完了基準

1. 既存のログソース、ストレージ場所、集約されたログへのアクセス手段の監査を完了し、これらのログの品質と正確性の評価を行う
1. 以下を提供する標準化されたロギングライフサイクルを作成・提供する:
   1. コントリビューション: 開発者がコードにログイベントを追加すべき方法、タイミング、理由
   1. 本番: GitLab パッケージの一部として各サービスが一貫した設定可能な方法でログを書き込んでいることを確保する
   1. 集約: 定義された場所へのログの一貫した、信頼性が高く、設定可能な収集と転送
   1. アクセシビリティ: ログデータのタイムリーなアクセスと操作を提供するためのツールと機能
   1. 保持: ログデータに必要な保持ポリシーを定義し、施行手段を提供し、検証する
1. GitLab.com サービスとセルフマネージド GitLab が使用できる GitLab ロギングライフサイクルに関するドキュメントとトレーニング資料を公開する

## 役割と責任

| ワーキンググループの役割 | 担当者                | 役職                                   |
|-----------------------|-----------------------|----------------------------------------|
| ファシリテーター       | Paul Harrison         | Senior Security Engineer               |
| メンバー              | Stan Hu               | Engineering Fellow                     |
| セキュリティリード     | Antony Saba           | Senior Threat Intelligence Engineer    |
| インフラリード         | Andrew Newdigate      | Staff Engineer, Infrastructure         |
| メンバー              | Amar Amarsanaa        | Site Reliability Engineer              |
| メンバー              | Alex Groleau          | Security Software Engineer, Automation |
| メンバー              | Shawn Sichak          | Security Engineer, Operations          |
