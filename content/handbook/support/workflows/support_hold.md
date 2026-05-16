---
title: アカウントホールド
category: Sales
subcategory: Accounts Receivable
description: "アカウント／サポートホールドに関する問い合わせを処理するワークフロー"
upstream_path: /handbook/support/workflows/support_hold/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T03:10:58Z"
translator: claude
stale: false
lastmod: "2024-08-28T23:15:44+00:00"
---

## アカウントホールドについて

アカウントホールドは、顧客が請求書を期日までに支払わない場合に発生します。連絡と調整を何度か試みた後、債権管理 (accounts receivable) チームは次のことを行います。

- 当該アカウントの担当 AE に Chatter でメンション
- アカウントを「Support Hold」状態にする

その結果、ホールド中の顧客が作成しようとしたすべてのチケットは、営業担当に連絡するようメッセージで拒否されます。

Salesforce でホールドが解除されると、変更が Zendesk に同期され、そのアカウントの担当者がチケットを開けるようになります。

## ホールド中アカウントのサポートワークフロー

時折、アカウントホールドに関する支援を求める内部リクエストを目にすることがあります。

これは Support の問題ではなく、debtor 管理チームと解決する必要があります。

1. 内部のリクエスト元に、これは未払いの請求書による経理上の問題であることを伝えます。
1. SFDC のアカウントで `@[Shannon Williams]`（または現在の Accounts Receivable Manager）に Chatter で連絡するよう案内します。
1. AR と状況が解決すれば、変更が Zendesk に同期されることを伝えます。

### ホールドが解除されたアカウントのアクセス復旧

変更が行われると、Salesforce から Zendesk へ比較的速やかに同期されます。

Zendesk のアカウントビューで「Support Hold」のチェックボックスを確認できます。チェックが外れていれば、そのアカウントにホールドはありません。

同期に問題があると考えられ、Salesforce と Zendesk で異なるデータが表示されている場合は、`#support_operations` で Slack できます。
