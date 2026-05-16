---
title: 署名済みデータ処理付帯条項 (DPA) の処理
category: GitLab.com
subcategory: Legal
description: "署名済みデータ処理付帯条項を受け取った際の処理を詳述するサポートエンジニアリングワークフロー"
upstream_path: /handbook/support/workflows/data_processing_addendums/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:30:00Z"
translator: claude
stale: false
lastmod: "2025-01-09T01:20:19+00:00"
---

## 概要

データ処理付帯条項は、Sales 担当者を通じて GitLab.com の有料サブスクリプション加入者が利用できます。このワークフローでは、顧客から受け取った完全に締結 (署名) された DPA をどう処理するかを詳述します。

## ワークフロー

>**注:** このワークフローは、ユーザーが GitLab.com の **有料サブスクリプションを保有している** 場合にのみ適用されます。

1. 顧客の Salesforce アカウントを見つけます。正しい文字列は `001` で始まり、Zendesk の組織[1] の下、Zendesk チケットに自動的に投稿されたメモにリンクされている[2]、または CustomersDot[3] の **Edit** インターフェースから見つけることができます ([スクリーンショット](#screenshots) は下記)。Salesforce アカウントレコードの URL は次のようになります: `https://gitlab.my.salesforce.com/0014M00001hHV5CQAW`。

1. "Google Docs, Notes, & Attachments" セクションで、"Attach File" をクリックしてファイルをレコードにアップロードします。

1. 自分でファイルを添付できない場合は、[legal@gitlab.com](mailto:<legal@gitlab.com>?subject=Signed DPA) に Salesforce アカウントへのリンクを添えて転送してください。

### スクリーンショット {#screenshots}

1. ![Salesforce ID in Zendesk organization](/images/support/workflows/assets/dpa_1.png)
1. ![Salesforce ID in Zendesk ticket note](/images/support/workflows/assets/dpa_2.png)
1. ![Salesforce ID in CustomersDot](/images/support/workflows/assets/dpa_3.png)

### チケットの例

- [https://gitlab.zendesk.com/agent/tickets/142052](https://gitlab.zendesk.com/agent/tickets/142052)
