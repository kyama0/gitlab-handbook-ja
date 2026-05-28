---
title: 'SKU マッピング'
description: 'Salesforce SKU マッピングに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/salesforce/skus/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、GitLab における SKU マッピングの作成・編集・管理方法について説明します。管理者の方は [管理者タスク](#administrator-tasks) セクションをご確認ください。

## SKU マッピングについて

### SKU マッピングとは

SKU マッピングは、Salesforce の `Product Rate Charge` を Zendesk のサポートサブスクリプションティア (Ultimate、Premium、ASE など) にマッピングするために私たちが用いているプロセスです。

### なぜ必要なのか

(Salesforce の) バックエンドでは名前が変わることがよくあり、それが _正確に_ 何に対応しているかが必ずしも明確ではないためです。これらに対するマッピングを持つことで、バックエンドシステムが「名前」を実際のサブスクリプションティアに変換できるようになります。

### 現在の SKU マッピング

数が多いため、マッピングは [Product Rate Charge Name マッピング Google スプレッドシート](https://docs.google.com/spreadsheets/d/1bJEq_q3h2fM3E8xWxYoFgZLdryWi_Cn5WLtzGSjuUUI/edit?usp=sharing) で文書化しています。

## 管理者タスク {#administrator-tasks}

{{% alert title="重要" color="danger" %}}

- これは Zendesk における顧客のサポート権限の計算結果に直接影響します。意図せず顧客のサポート権限を喪失させてしまうこともあり得ます。変更を加える際は細心の注意を払ってください。

{{% /alert %}}
{{% alert title="注" color="primary" %}}

- このセクションのすべての項目は、Zendesk-Salesforce 同期 [プロセッサプロジェクト](https://gitlab.com/gitlab-support-readiness/zd-sfdc-sync/processor) への `Developer` レベルアクセスが必要です。
- このセクションのすべての項目は、[Product Rate Charge Name マッピング Google スプレッドシート](https://docs.google.com/spreadsheets/d/1bJEq_q3h2fM3E8xWxYoFgZLdryWi_Cn5WLtzGSjuUUI/edit?usp=sharing) への `Editor` レベルアクセスが必要です。
- 以下のすべてのタスクは、対応するリクエスト Issue (機能リクエスト、管理タスク、バグなど) がある場合にのみ実施してください。存在しない場合は、まず Issue を作成してください (そして標準プロセスに沿って進めてから着手してください)。

{{% /alert %}}
{{% alert title="技術詳細" color="primary" %}}

- デプロイ種別: `Ad-hoc`
- プロジェクトリポジトリ: Zendesk-Salesforce 同期 [プロセッサプロジェクト](https://gitlab.com/gitlab-support-readiness/zd-sfdc-sync/processor)
- Google スプレッドシート: [Product Rate Charge Name マッピング](https://docs.google.com/spreadsheets/d/1bJEq_q3h2fM3E8xWxYoFgZLdryWi_Cn5WLtzGSjuUUI/edit?usp=sharing)

{{% /alert %}}

### 新しい SKU マッピングを追加する {#adding-a-new-sku-mapping}

新しい SKU マッピングを追加するには:

1. [Product Rate Charge Name マッピング Google スプレッドシート](https://docs.google.com/spreadsheets/d/1bJEq_q3h2fM3E8xWxYoFgZLdryWi_Cn5WLtzGSjuUUI/edit?usp=sharing) にエントリを追加します
   1. 1 列目 (`Product Rate Plan Charge Name`) を Salesforce の `Rate Plan Charge Name` の値に設定します (Salesforce 上の対象アイテムの URL をハイパーリンクで張ります)
   1. 前の行の 2 列目 (`Subscription Tier`) を新しい行の 2 列目にコピーします
   1. 新しい行の 2 列目のドロップダウンで、対応する正しいサブスクリプションティアを選択します
   1. 前の行の 3 列目 (`In ZD-SFDC sync?`) を新しい行の 3 列目にコピーします
   1. 新しい行の 3 列目で `No` を選択します
   1. 取り組んでいる Issue の URL を新しい行の 4 列目 (`Notes`) に設定します
1. Zendesk-Salesforce 同期 [プロセッサプロジェクト](https://gitlab.com/gitlab-support-readiness/zd-sfdc-sync/processor) に新しいマッピングを追加するマージリクエストを作成します
   - このマージリクエストでは `data/plans.yaml` ファイルを編集します。対象のサブスクリプションのセクションを見つけ、Salesforce の `Rate Plan Charge Name` の値を使って新しい配列エントリを追加してください
1. ピアにマージリクエストの変更をレビューしてもらいます
1. マージリクエストをマージします
1. [Product Rate Charge Name マッピング Google スプレッドシート](https://docs.google.com/spreadsheets/d/1bJEq_q3h2fM3E8xWxYoFgZLdryWi_Cn5WLtzGSjuUUI/edit?usp=sharing) の行を最終化します
   1. 3 列目 (`In ZD-SFDC sync?`) の値を `Yes` に設定します
   1. 4 列目 (`Notes`) の値を削除します

### SKU マッピングを編集する

{{% alert title="注" color="primary" %}}

- 既存のものを編集するよりも、[新しい SKU マッピングを追加する](#adding-a-new-sku-mapping) ほうが適切なことがよくあります。既存のものを直接編集するのではなく、新しい SKU マッピングの追加を検討してください。

{{% /alert %}}

SKU マッピングを編集する (使用する Product Rate Charge Name を変更する) には:

1. Zendesk-Salesforce 同期 [プロセッサプロジェクト](https://gitlab.com/gitlab-support-readiness/zd-sfdc-sync/processor) で既存のマッピングを編集するマージリクエストを作成します
   - このマージリクエストでは `data/plans.yaml` ファイルを編集します。元の名前で既存の SKU を見つけ、Salesforce の新しい `Rate Plan Charge Name` の値に変更してください
1. ピアにマージリクエストの変更をレビューしてもらいます
1. マージリクエストをマージします
1. [Product Rate Charge Name マッピング Google スプレッドシート](https://docs.google.com/spreadsheets/d/1bJEq_q3h2fM3E8xWxYoFgZLdryWi_Cn5WLtzGSjuUUI/edit?usp=sharing) のエントリを編集します
   - 1 列目 (`Product Rate Plan Charge Name`) の値を Salesforce の `Rate Plan Charge Name` の値に変更します (Salesforce 上の対象アイテムの URL をハイパーリンクで張ります)

### SKU マッピングを削除する

SKU マッピングを削除するには:

1. Zendesk-Salesforce 同期 [プロセッサプロジェクト](https://gitlab.com/gitlab-support-readiness/zd-sfdc-sync/processor) で既存のマッピングを編集するマージリクエストを作成します
   - このマージリクエストでは `data/plans.yaml` ファイルを編集します。元の名前で既存の SKU を見つけ、そのエントリを削除してください。
1. ピアにマージリクエストの変更をレビューしてもらいます
1. マージリクエストをマージします
1. [Product Rate Charge Name マッピング Google スプレッドシート](https://docs.google.com/spreadsheets/d/1bJEq_q3h2fM3E8xWxYoFgZLdryWi_Cn5WLtzGSjuUUI/edit?usp=sharing) のエントリを削除します
