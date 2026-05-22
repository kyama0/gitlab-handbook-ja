---
title: 顧客組織名の更新
category: General
description: 顧客の組織名を更新する手順について説明します。
upstream_path: /handbook/support/license-and-renewals/workflows/updating_customer_organization_name/
upstream_sha: eff3a749f8927544a08073e8f660283a5d80478b
lastmod: "2026-05-21T12:17:18-04:00"
translated_at: "2026-05-22T21:47:45Z"
translator: claude
stale: false
---

## 一般的なワークフロー

会社名の更新には、以下の情報の更新が含まれます。

1. [CustomersDot](https://customers.gitlab.com/customers/sign_in)
1. SFDC
1. Zuora

リクエストを処理する前に、顧客に **組織名変更の法的証明** *と* **過去の請求書** を求めてください。

[CustomersDot](https://customers.gitlab.com/customers/sign_in) の情報を更新するための案内として、以下の手順を提供できます。

1. [customers portal](https://customers.gitlab.com/customers/sign_in) にサインインします
1. [会社情報の変更手順に従います](https://docs.gitlab.com/subscriptions/customers_portal/#change-your-company-details)。

これにより、今後自動生成される請求書が更新されます。CustomersDot の情報を更新すると、`Zuora` への同期もトリガーされ、Zuora 側の情報も更新されます。

`SFDC` で名前を変更するには、次の手順を実施します。

1. SFDC アカウントでオープンな Opportunity を見つけます。
1. [こちらの手順に従って](/handbook/legal/customer-negotiations/#how-to-reach-commercial-legal) `Legal Request` を起票します。
   - `Type of Legal Request` として `Assignment/Transfer/Novation Agreement` を選択します。
   - `Summary of actions(s)` の下で `Assist with answering legal question or questionnaire` を選択します。
   - `Notes` フィールドに Zendesk チケットのリンクとリクエストの概要を入力します。
   - 顧客から共有された組織名変更の法的証明書類をアップロードします。
1. Legal の承認を得たら、Sales Ops のケースを起票します。
   - SFDC アカウントページから `Request Support` をクリックします。
   - `Sales Ops` を選び `Next` をクリックします。
   - `General Account Support` ドロップダウンリストから `Account name changes` を選択します。
   - 上記の Legal ケースへのリンクをコピーして貼り付けます。
   - `Submit` をクリックします。

Sales Ops から確認が得られたら、Zendesk の Organization 名も更新されていることを確認してください。その後、名前変更が完了したことを顧客に伝えます。

[Legal Case](https://gitlab.lightning.force.com/lightning/r/Case/500PL00000S46I7YAJ/view) と対応する [Sales Support case](https://gitlab.lightning.force.com/lightning/r/Case/500PL00000Ru1WdYAJ/view) の例があります。
