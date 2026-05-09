---
title: 営業およびカスタマーサクセスへのエスカレーション
description: "サポートから GitLab 営業またはカスタマーサクセスへエスカレーションする方法"
category: Handling tickets
upstream_path: /handbook/support/workflows/support-sales-escalations/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T03:10:58Z"
translator: claude
stale: false
---

## 目的

サポートが営業／カスタマーサクセスにチケットをエスカレーションしたり、彼らの注意を喚起したりする必要があるケースがあります。このページでは、よくあるシナリオとワークフローをいくつか挙げます。

> 注: 営業／CS の方で、Support Management にチケットをエスカレーションしたい場合は、代わりに [`I want to escalate a ticket`](/handbook/support/internal-support/#i-want-to-escalate-a-ticket) ワークフローを使用してください。

## エスカレーションシナリオのマッピング

### **役割: アカウントオーナー (AO)**

アカウントオーナーは通常、更新および拡張に関する議論で顧客のメインの窓口となります。

[顧客のアカウントオーナーを見つける](/handbook/support/workflows/looking_up_customer_account_details#finding-the-customers-account-owner) ワークフローを使ってアカウントオーナーを特定します。誰も記載されていない場合、最新のオポチュニティオーナーを代わりに見つけられないか確認してください。どちらも利用できない場合は、誰もタグ付けせずに該当チャンネルに連絡してください。

|エスカレーションシナリオ|チャンネル|関連性|
|--|--|--|
|顧客を組織に追加する|Slack: `#account-management`|Needs Org ワークフロー|
|[リードを営業に渡す](/handbook/support/license-and-renewals/workflows/working_with_sales#specific-workflows-to-pass-to-sales)|Zendesk: cc @AM、Slack: 新規ビジネスは `#sales`、更新は `#account-management`|チケットワークフロー: License and Renewals キュー|
| [プロフェッショナルサービスのエンゲージメント依頼](https://about.gitlab.com/services/)|Slack: `#account-management` で AO を @mention | チケットワークフロー: 全キュー|

### **役割: カスタマーサクセスマネージャー (CSM)**

カスタマーサクセスマネージャー（旧称 Technical Account Manager または TAM）は、通常、顧客との GitLab の関係を管理します。彼らが提供するサービスの包括的な一覧は [こちら](/handbook/customer-success/csm/services/#responsibilities-and-services) に記載されています。

CSM は [特定の基準](/handbook/customer-success/csm/services/#csm-alignment) に基づいて割り当てられているため、すべての顧客に CSM が割り当てられているとは限りません。CSM が割り当てられている顧客については、SFDC で上記と同じプロセスに従いますが、`Customer Success Manager` フィールドを参照します。

|エスカレーションシナリオ|チャンネル|関連性|
|--|--|--|
|緊急および／または高優先度チケットを CSM に通知|Zendesk: cc @CSM、Slack: @mention CSM|チケットワークフロー: 全キュー|
|顧客がチケットでエスカレーションを要求した場合に CSM を関与させる|Zendesk: cc @CSM、Slack: @mention CSM|チケットワークフロー: 全キュー|
|顧客が [アップグレード支援](/handbook/support/workflows/upgrade-assistance#the-process) を求めるチケットを起票したが、対応する内部 Issue がない場合に CSM を関与させる|Zendesk: cc @CSM、Slack: @mention CSM|チケットワークフロー: Self Managed|
|顧客側のユーザーへのトレーニングが必要だと判断した場合、または顧客が直接それを求めた場合に CSM を関与させる|Zendesk: cc @CSM、Slack: @mention CSM|チケットワークフロー: 全キュー|
|期待値のミスマッチによる顧客関係の管理が必要なチケットを CSM に通知|Zendesk: cc @CSM、Slack: @mention CSM|チケットワークフロー: 全キュー|
|顧客を組織に追加する |Slack: #account-management|Needs Org ワークフロー|

## Success On-Demand (CSE)（別名 Scale）エンゲージメント

専任の CSM／A はいないものの、カスタマーサクセスのエンゲージメントから恩恵を受けられる組織もあります。Zendesk のノートで `Customer Success Manager: TAM Scale` と表示されている場合がそうです。適切な場合は、アカウントオーナーに連絡し、[CSE エンゲージメントリクエスト](/handbook/customer-success/csm/segment/cse/cse-operating-rhythm/) を開くことを相談できます。

これが適切となりうる例:

- アーキテクチャのベストプラクティス
- 同様の組織が GitLab をどのように使用しているかの議論
- 移行、または GitLab.com と Self-Managed インスタンスの違い
- 成長への対応や機能採用の阻害要因への対処

## リソース

- [CSM の責任範囲とサービス](/handbook/customer-success/csm/services/#csm-alignment)
- [カスタマーサクセスのエスカレーションプロセス](/handbook/customer-success/csm/escalations/)
