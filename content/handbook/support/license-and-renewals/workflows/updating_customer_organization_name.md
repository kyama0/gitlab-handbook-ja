---
title: 顧客組織名の更新
category: General
description: 顧客の組織名を更新する手順について説明します。
upstream_path: /handbook/support/license-and-renewals/workflows/updating_customer_organization_name/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T11:18:50Z"
translator: claude
stale: false
lastmod: "2025-06-09T10:18:14+00:00"
---

## 一般的なワークフロー

会社名の更新には、以下の情報の更新が含まれます。

1. [CustomersDot](https://customers.gitlab.com/customers/sign_in)
1. SFDC
1. Zuora

リクエストを処理する前に、顧客に **組織名変更の法的証明** *と* **過去の請求書** を求めてください。

[CustomersDot](https://customers.gitlab.com/customers/sign_in) の情報を更新するための案内として、以下の手順を提供できます。

1. [customers portal](https://customers.gitlab.com/customers/sign_in) にサインインする
1. [会社情報の変更手順に従う](https://docs.gitlab.com/subscriptions/customers_portal/#change-your-company-details)

これにより今後自動生成される請求書が更新されます。CustomersDot の情報を更新すると、`Zuora` への同期もトリガーされ、Zuora 側の情報も更新されます。

`SFDC` で名前を変更するには、次の手順で行います。

1. SFDC アカウント内のオープンな Opportunity を見つけます
1. [こちらの手順に従って](/handbook/legal/customer-negotiations/#how-to-reach-the-legal-commercial-team) `Legal Request` を起票します
   - `Type of Legal Request` として `Assignment/Transfer/Novation Agreement` を選択
   - `Summary of actions(s)` の下で `Assist with answering legal question or questionnaire` を選択
   - `Notes` フィールドに Zendesk チケットのリンクとリクエストの概要を入力
   - 顧客から共有された組織名変更の法的証明書類をアップロード
1. Legal の承認を得たら、Sales Ops のケースを起票します。
   - SFDC アカウントページから `Request Support` をクリック
   - `Sales Ops` を選び `Next` をクリック
   - `General Account Support` ドロップダウンリストから `Account name changes` を選択
   - 上記の Legal ケースへのリンクをコピーして貼り付け
   - `Submit` をクリック

Sales Ops から確認が得られたら、Zendesk の Organization 名も更新されていることを確認してください。その後、名前変更が完了したことを顧客に伝えます。

[Legal Case](https://gitlab.lightning.force.com/lightning/r/Case/500PL00000S46I7YAJ/view) と対応する [Sales Support case](https://gitlab.lightning.force.com/lightning/r/Case/500PL00000Ru1WdYAJ/view) の例があります。
