---
title: "インシデントレスポンスライフサイクル"
description: "インシデントレスポンスライフサイクル ワーキンググループは、共有インシデントレスポンスプロトコルとナレッジベースを文書化することを目的としています。"
upstream_path: "/handbook/company/working-groups/incident-response-lifecycle/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
---

## 属性

| プロパティ     | 値 |
|--------------|-------|
| 作成日 | 2022年2月1日 |
| 目標終了日   | 2022年4月30日 |
| Slack        | [wg-incident-respose-management-framework](https://gitlab.slack.com/archives/C02UMD8S8NM) |
| Google Doc   | [インシデントレスポンス管理 ワーキンググループ](https://docs.google.com/document/d/1SwbD-Vbt813DUtS5VaXWI7p80yE5rqyNBwJFwmVT_Ko/edit#)（社内） |
| Issue ラベル | WG-IRM（gitlab-com/-org） |

## ビジネス目標

1. 共通のインシデントレスポンス、分析、文書化、継続的な管理・報告手法を通じて[効率性](/handbook/values/#efficiency)を向上させます。
1. インシデントのビジネスおよび E グループへの可視性とコミュニケーションを改善することで[透明性](/handbook/values/#transparency)を向上させます。
1. インシデント発生時に GitLab が迅速に解決・連絡できる能力への顧客の信頼を構築することで[成果](/handbook/values/#results)を支援します。
1. インシデント管理の活動と優先順位をビジネスと一致させます。
1. GitLab でのインシデント管理プロセスについてエンジニアリング部門向けのトレーニングモジュール作成のための資料を準備します。
1. ドッグフーディングの機会を浮き彫りにします。

## 終了基準

1. エンジニアリングのすべての領域およびインシデントレスポンスを提供するチームに適用できる、インシデントレスポンス管理を文書化した単一の情報源
   - エンジニアリングの各機能エリアは、サービス停止またはセキュリティ脅威の特定と対応に向けた独自のインシデント管理要件を策定します。
1. インシデントレスポンスチームが IR プロセスをどのように実装するかを理解するための、GitLab チームメンバー向けの包括的なナレッジベースを作成する

## 成果

1. GitLab 全体のチームが MTTR を低下させるための支援

## その他の調査事項

1. インシデントからのフィードバックと学習の改善による回復力の構築
1. サービスカタログ

### 他社ではどのように行われているか？

- [Pagerduty Response docs](https://response.pagerduty.com/)

### 現在の IR の実施方法は？

1. SIRT
   - [インシデントレスポンスガイダンス](/handbook/security/product-security/vulnerability-management/incident-response-guidance/)
   - [セキュリティエンジニアオンコールへの連絡](/handbook/security/security-operations/sirt/engaging-security-on-call/)
   - [GitLab SIRT オンコールガイド](/handbook/security/security-operations/secops-oncall/)
1. [オンコール](/handbook/engineering/on-call/)
1. Reliability
   - [インシデント管理](/handbook/engineering/infrastructure-platforms/incident-management/)
1. Support
   - [CMOC 業務の遂行方法](/handbook/support/workflows/cmoc_workflows/)
   - [インシデントや変更に関するユーザーへの連絡](/handbook/support/internal-support/#contacting-users-about-gitlab-incidents-or-changes)
   - [通知の送信](/handbook/support/workflows/sending_notices/)（少数のユーザー向け）

### 注目すべき Issue

## 関連 Issue

## 役割と責任

| ワーキンググループの役割  | 担当者           | 肩書き                                  |
|---------------------|------------------|----------------------------------------|
| ファシリテーター         | [Anna Liisa Moter](https://gitlab.com/amoter)| Manager Reliability|
| エグゼクティブスポンサー        | [Steve Loyd](https://gitlab.com/sloyd)      | VP Infrastructure                          |
| メンバー              | [Anthony Fappiano](https://gitlab.com/afappiano)          | Manager Reliability                   |
| Development 機能リード | [Dan Croft](https://gitlab.com/dcroft) | Senior Engineering Manager, Ops |
| メンバー              | [Sam Goldstein](https://gitlab.com/sgoldstein) | Director of Engineering, Ops |
| メンバー（CMOC）       | [Kenneth Chu](https://gitlab.com/kenneth) | Support team  |
| メンバー              | [Kevin Chu](https://gitlab.com/kbychu)    | Group Manager of Product, Monitor |

## 要件と考慮事項

### アクター

- Reliability エンジニア
- SIRT エンジニア
- 開発チーム
- Quality チーム
- サポートチーム

### 全般

- インシデントを報告できる GitLab チームメンバーとして、インシデントをどのように開始できるかを理解しています
- インシデントを報告できる GitLab チームメンバーとして、インシデントの深刻度レベルについて一般的な理解があります
- インシデントを報告できる GitLab チームメンバーとして、インシデント管理の高レベルなプロセスとビジネスへの重要性を理解しています
- インシデントを報告できる GitLab チームメンバーとして、専用の Slack チャンネル経由で適切なチームに連絡できます
- インシデントを報告できる GitLab チームメンバーとして、インシデントレスポンス手順を文書化したハンドブックのページを簡単に見つけられます

#### SIRT エンジニア

- SIRT エンジニアとして、支援が必要なときに他のチームから関連リソースを引き込む方法を知っています
- SIRT エンジニアとして、インシデントを簡単に分類できます
- SIRT エンジニアとして、トリガーと指標を特定できます
- SIRT エンジニアとして、インシデントの詳細をどこに文書化するかを知っています
- SIRT エンジニアとして、インシデントの特定から緩和、修復、そしてポストインシデント活動への移行タイミングを知っています
- SIRT エンジニアとして、インシデントを引き継ぐ、または管理職に更新を提供するための報告プロセスを実行できます

#### Reliability エンジニア

- Reliability エンジニアとして、組織全体で一貫した方法でインシデントのレベルを設定する方法を知っています
- Reliability エンジニアとして、インシデント中に他の役割を巻き込む方法を知っています
- Reliability エンジニアとして、インシデントの特定から緩和、解決、そしてポストインシデント活動への移行タイミングを知っています

#### 開発チーム

- インシデントマネージャーローテーションの一員である開発リーダーとして、役割の責任とインシデント管理プロセスへの役割のサポート方法を明確に理解しています

#### Quality チーム

#### サポートチーム

- サポートエンジニアとして、ステータスページの作成方法を知っています
- サポートエンジニアとして、ステータスページのインシデントステータス状態の違いを知っています
- サポートエンジニアとして、ステータスページの更新頻度を知っています
- サポートエンジニアとして、ステータスページに投稿しようとしている更新についてインシデントマネージャーまたは EOC からフィードバックを求める方法を知っています
- サポートエンジニアとして、ステークホルダーへの通知方法を知っています
- サポートエンジニアとして、インシデントの影響を評価するために Zendesk と GitLab Issue トラッカーの関連チケットを見つける方法を知っています
- サポートエンジニアとして、インシデントにより GitLab SaaS の利用が制限されたユーザーに連絡する方法を知っています
