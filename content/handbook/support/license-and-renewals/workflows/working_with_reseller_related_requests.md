---
title: リセラー関連のリクエストへの対応
category: General
description: リセラーが関わるリクエストの対応方法に関するガイドです。
upstream_path: /handbook/support/license-and-renewals/workflows/working_with_reseller_related_requests/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T11:18:50Z"
translator: claude
stale: false
lastmod: "2025-06-16T14:19:42-07:00"
---

## 概要

リセラーは [Channel Partner](/handbook/resellers/) の別の呼び方です。
[Alliance Partner](/handbook/support/partnerships/alliance) は Channel Partner とは異なり、リセラーでは **ありません**。アライアンスについて詳しくは
[GitLab Alliances Handbook ページ](/handbook/alliances/) と
[Internal Alliances Handbook ページ](https://internal.gitlab.com/handbook/alliances/) を参照してください。

リセラー経由で顧客が購入した場合、私たちは WebDirect や Sales Assisted での購入とは異なるワークフローに従います。リセラー経由の購入については以下に注意してください。

1. 顧客は customersDot にアクセスできますが、サブスクリプションを [いかなる方法でも変更することはできず](https://docs.gitlab.com/subscriptions/customers_portal/#customers-that-purchased-through-a-reseller)、請求書を表示することもできません。
1. 追加、変更、更新はリセラーを経由する必要があります。

**Note: ユーザーはポータルや GitLab.com グループ上で「サブスクリプションは read-only である」という警告メッセージを目にすることがあります。これはサブスクリプションを直接変更できないことを示すだけで、サブスクリプション自体の機能には一切影響しません**

### 顧客がリセラー経由で購入したかどうかの確認 {#identifying-whether-a-customer-purchased-through-reseller}

リセラー経由で購入されたかどうかの正しい情報源は Zuora です。ただし、この情報は Zuora と SalesForce の両方から確認できます。認定済みリセラーは [GitLab Partner directory](https://partners.gitlab.com/English/directory/) に掲載されています。

#### Zuora で確認する場合

サブスクリプションがリセラー経由で購入されたかどうかは、Zuora の顧客アカウントで `Invoice Owner` を見つけることで確認できます。

1. まず [CustomerDot](https://customers.gitlab.com/) にログインします
1. `Customers` タブを選び、検索テキストフィールドに顧客の連絡先情報を入力します
1. 顧客を特定したら、`Show` ボタン（i のアイコン）をクリックし、顧客の詳細情報を確認します
1. `Zuora Subscriptions` タブを選び、サブスクリプション名（例：A-S000860000）をクリックします
1. これにより `Zuora` 上の関連サブスクリプションページが開きます
1. `Basic Information` の下を見ると、サブスクリプションページの `Invoice Owner` フィールドにリセラーが表示されているはずです
1. `Zuora Subscription` ページで `SSPChannel` を検索することもでき、その値は `Reseller` となります

Note: エンドユーザーの SFDC アカウントでも Partners セクションが表示されることがあります。

#### Salesforce で確認する場合

1. ある Opportunity に対して `Status` が `Sent to Z-Billing` になっている見積を開きます
1. Zuora の iframe が読み込まれるまで待ちます
1. サブスクリプションがリセラー経由で購入された場合、iframe テーブルの **Customer Account Details** セクションに **Resale Partner** として GitLab パートナーの詳細が表示されます。
   - **Resale Partner** は **Required Approvals From VP of Channel** ノートにも表示される場合があります。

### エンドユーザーの連絡先情報の更新リクエスト

**重要:** リセラーパートナーにライセンスファイルを送信しないでください。

リセラーパートナーがエンドユーザーの連絡先情報を更新する必要がある場合（ライセンスを誰が受け取るべきか）、以下のいずれかの方法を取ります。

- 現在の Sold-To コンタクトに [Add subscription management contact workflow](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases#add-subscription-management-contact-workflow) のワークフローに従ってサポートチケットを起票してもらう
- リセラーパートナーは、エンドユーザーを代行して連絡先変更を依頼する場合、サブスクリプション請求書のコピーを **必ず** 添付する必要があります

### リセラー顧客から直接更新したい旨のリクエスト

リセラー経由ではなく GitLab と直接サブスクリプションを更新したいという顧客の対応にあたっては、[working with sales workflow](/handbook/support/license-and-renewals/workflows/working_with_sales) に従い、その顧客が以前にリセラーから購入していたことを必ず明記してください。

リセラー経由で購入した顧客が別のアカウントで新規購入を行うことを決めた場合、そのサブスクリプションは更新ではなく新規購入となります。したがって、生成されるライセンスには以前のサブスクリプションのカウントは含まれません。チケットを進めるには [troubleshooting license upload errors](/handbook/support/license-and-renewals/workflows/self-managed/troubleshoot_license_upload_issues) ワークフローに従ってください。

### その他のリセラーワークフロー

- [購入の関連付け - 所有権の確認](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases#ownership-verification)
- [Pass to Sales - リセラー除外申請](/handbook/support/license-and-renewals/workflows/self-managed/cloud-licensing#2-are-reseller-purchases-considered-the-same-as-sales-assisted-if-a-customer-purchased-after-2022-07-07-and-needs-a-legacy-license-should-we-send-them-to-their-account-manager-to-go-through-the-exemption-process-or-do-we-treat-them-the-same-as-web-direct-and-give-them-a-legacy-license-file-no-questions-asked)
- [Pass to Sales - リセラーのサブスクリプション変更や質問](/handbook/support/license-and-renewals/workflows/working_with_sales#a-reseller-or-reseller-customer-wants-to-change-their-subscription-or-ask-a-question)
- [Not-for-Resale (NFR) プログラムとポリシー](/handbook/resellers/channel-working-with-gitlab/#not-for-resale-nfr-program-and-policy)
