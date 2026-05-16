---
title: 請求、インボイス、支払いに関するリクエスト
category: General
description: 請求およびインボイスに関する一部のリクエストには、Billing/Accounts Receivable チームによる対応が必要です。
upstream_path: /handbook/support/license-and-renewals/workflows/billing_contact_change_payments/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-22T14:21:28-10:00"
---

## 概要

請求およびインボイスに関する一部のリクエストには、Billing/Accounts Receivable チームによる対応が必要です。

チケットを移管する際に AR チームへ提供すると役立つ情報は以下の通りです（必須ではありません）。

1. **サブスクリプション番号**
1. **サブスクリプション情報** - [CustomersDot](https://customers.gitlab.com/customers/sign_in) の `Manage Purchases` からコピー & ペーストします。`Impersonate` タブを使ってこの情報を表示します。
1. **Zuora ID** - [CustomersDot](https://customers.gitlab.com/customers/sign_in) で顧客の組織の `Billing account` ページの `Show` タブから確認できます。
1. **Salesforce account ID** - こちらも [CustomersDot](https://customers.gitlab.com/customers/sign_in) で顧客の組織の `Billing account` ページの `Show` タブから確認できます。

## 請求

### Zuora の連絡先変更

以前は Zuora における連絡先の変更は Billing が行っていましたが、最近の [CustomersDot](https://customers.gitlab.com/customers/sign_in) の更新により、Support でも実施できるようになりました。

1. リクエスト元がアカウントに紐づいているか／リクエストを行う権限があるかを、以下を確認することで検証します。
   - リクエスト元が [CustomersDot](https://customers.gitlab.com/customers/sign_in) で現在のサブスクリプション情報にアクセスできるか。
   - リクエスト元が現時点で記録されている `Sold To:` 連絡先として登録されているか。
   - [アカウント所有権の確認](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases#ownership-verification) をパスするか。
1. [CustomersDot](https://customers.gitlab.com/customers/sign_in) から Zuora の連絡先情報を更新するには、ハンドブックの L&R workflow パートにある `Associating purchases with additional accounts` ページの [Update Zuora Sold To contact using CustomersDot](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases/#update-zuora-sold-to-contact-using-customersdot) セクションを参照してください。
1. Zuora への変更が `Bill To:` または `Sold To:` の記録、もしくはそれらの住所情報以外の場合は、`General::Forms::Incorrect form used` マクロを使用して、Support Readiness によりチケットを正しいチーム（Accounts Receivable）に移管するよう依頼します。また、何を変更する必要があるか、なぜ Accounts Receivable 自身に変更してもらう必要があるかを伝えるためのプライベートコメントも追加します。

セルフマネージドの顧客の場合、新しい連絡先情報を反映したライセンスを希望される場合、クラウドライセンスをお持ちであれば自動的に更新されます。これはインスタンスと GitLab の間で毎日行われる同期で実行されます。レガシーライセンスやオフラインクラウドライセンスを使用している顧客は、ライセンス変更時（更新、シート増加、ティア変更、契約リセットなどが該当）に更新された連絡先が反映されたライセンスを受け取ります。

**留意事項：**

1. Zuora の `Sold to:` 連絡先は通常、ライセンス、更新リマインダー、サブスクリプションの変更に関する通知（更新の成功／失敗など）を受け取ります。Zuora の `Bill to:` 連絡先はインボイスと更新リマインダーを受け取ります。

1. Billing は精査プロセスを持たないため、リクエストを引き継ぐ前に可能な限り顧客を精査する必要があります。

### 知っておくべき請求プロセス

- 詳細については、[ここの内部 wiki ページ](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Process-for-BTST-Information-Updates-and-Invoice-Request#update-request-for-st-email) を参照してください。

#### Zuora エンティティ変更

Billing は、顧客のために 2 つ目の Zuora アカウントを作成し、その `Entity` フィールドに該当する国の略称を入力することで [エンティティ変更](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Process-for-change-of-entity) を処理します。国は、顧客の事業拠点がある国です。

エンティティ変更を識別するには、Zuora 内のサブスクリプションで `Renewal subscription` フィールドを確認します。元の（現在はキャンセル済みの）サブスクリプションは、新しい Zuora アカウントを検索するために使用できる `Renewal subscription` を指しています。

##### セルフマネージドサブスクリプションへの影響

更新時にエンティティ変更が発生した場合、ライセンスの生成方法に影響が出る可能性があります。ライセンス問題のトラブルシューティングをしている場合、Zuora で異なるエンティティを持つ 2 つのアカウントがあるかを確認し、エンティティ変更が発生したかを確認します。

最も一般的な問題は、更新ライセンスが過去のユーザー数（PUC）や true-up なしで生成されることです。エンティティ変更によりライセンスに影響が出た場合、手動ライセンスの提供で対応可能です。

##### SaaS サブスクリプションへの影響

エンティティ変更が発生すると、Zuora 内の元のアカウントとそれに紐づくサブスクリプションがキャンセルされ、新しいアカウントとサブスクリプションが作成されます。これにより、元のサブスクリプションに紐づいていたグループは、新しいサブスクリプションがそのグループに紐づけられるまで Free ティアに降格します。

このような状況は、顧客のアカウントマネージャーが [Internal Request](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) を作成することで対応します。**GitLab Support Internal Requests for Global customers** リクエストオプションを使用し、内部リクエストの種類として **Billing Entity change** を選択します。

### 請求エンティティ変更の対応方法

Fulfillment の作業の進捗は、以下の報告 Issue で追跡できます。

- [Spike: Provision an SM License correctly after a Billing Entity Change](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/3044)
- [Billing Entity Change: SaaS Subscriptions should provision correctly](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/4376)
- [Investigate tooling solutions for billing entity change](https://gitlab.com/gitlab-org/gitlab/-/issues/385612)

このワークフローは、上記の Issue が修正されたら削除されます。

請求エンティティ変更が発生すると、2 つの Zuora アカウントと 2 つのサブスクリプションが存在します。古いサブスクリプションはキャンセルされた Zuora アカウントに、新しいサブスクリプションはアクティブな Zuora アカウントにあります。アカウントを区別しやすくするため、古いアカウントは `US` エンティティを持ち、新しいアカウントは顧客の事業拠点国の 2 桁エンティティコードを持ちます。

請求エンティティ変更の完了後、[CustomersDot](https://customers.gitlab.com/customers/sign_in) における顧客のアカウントは、新しいサブスクリプション情報を保持する新しい Zuora アカウントで更新されているはずです。サブスクリプションの変更により、Support は Customer Portal の [force association](https://customers.gitlab.com/admin/saas_full_order/force_reassociate) ツールを使って、新しいサブスクリプションをネームスペースに紐付ける必要が生じることがあります。

#### Zuora アカウントの特定

上記のワークフローで、対象となる両方の Zuora アカウントを特定する必要がある場合があります。エンティティ変更により新しい請求アカウントが作成され、SaaS サブスクリプションがそのアカウント上で再作成されます。

- CustomersDot から: CustomersDot のアカウントが分かっていれば、`History` タブに少なくとも一方の Zuora アカウントが存在し、そこから作業を進められます。
- SFDC から: 通常、SFDC アカウント -> Billing Accounts を見ることで両方の Zuora アカウント ID を見つけられます。最良のケースでは、新旧の 2 つのアカウントだけがリストされます。しかし顧客アカウントには複数の請求アカウントが紐づいていることもよくあります。SFDC の請求アカウントは `A000XXXXX` 形式の Account Number を持ちます。これは Zuora の Customer Accounts 検索ページから直接検索できます。あるいは、SFDC の請求アカウントには Zuora ID の md5 ハッシュが表示されているので、次の URL を編集することで Zuora に渡せます: `https://www.zuora.com/apps/CustomerAccount.do?method=view&id=ZUORA-ID-MD5-HASH-GOES-HERE`

上記の方法で特定できない場合は、別の方法を使うか、後述の [サブスクリプションの特定](#finding-subscriptions) を参照してください。

新しいサブスクリプションの注文を作成する際、`create_order_from_zuora` 関数は Customer オブジェクトをクエリし、Zuora サブスクリプションを参照して注文を作成します。そのため、CustomersDot のアカウントは **新しい Zuora アカウントを指している必要があります**。指していない場合、正しいアカウントを見ているか確認し、見ているならば `Zuora account` フィールドを正しい ID に更新するだけです。通常、これは Billing チームが対応します。

#### サブスクリプションの特定 {#finding-subscriptions}

- コンソール経由で古い／キャンセル済みのサブスクリプションを簡単に特定できます。

   ```ruby
   pp Order.find_by(subscription_name: "old-subscription-name")
   id: 123456,
   customer_id: 123456,
   product_rate_plan_id: "2c92a00d76f0d5060176f2fb0a5029ff",
   subscription_id: "MD5-HASH-HERE",
   subscription_name: "old-subscription-name",
   start_date: timestamp,
   end_date: timestamp,
   quantity: 216,
   gl_namespace_id: "1234567",
   gl_namespace_name: "group-name",
   amendment_type: "RemoveProduct",
   trial: false,
   last_extra_ci_minutes_sync_at: nil,
   zuora_account_id: "MD5-HASH-HERE",
   ```

   グループ namespace に紐づけられたすべてのサブスクリプションを単に特定することもできます。

   ```ruby
   pp Order.where(gl_namespace_id: xxxxxx)
   ...
   ...
   customer_id: 123456,
   product_rate_plan_id: "2c92a00d76f0d5060176f2fb0a5029ff",
   subscription_id: "MD5-HASH-HERE",
   subscription_name: "old-subscription-name",
   ...
   ...
   ```

   `end_date` が **更新後の** `end_date` になっていることに気づくかもしれませんが、これは更新後にキャンセルされたためなので、混乱しないでください。重要なのは `subscription_name` であり、必要に応じて `customer_id`、`subscription_id`、`zuora_account_id` です。
- SFDC からは、両方のサブスクリプションが SFDC アカウントの Subscriptions または Subscription Product & Charges にリストされています。それらは 2 つの異なる請求アカウントを指しており、サブスクリプションの一方は `Cancelled` とマークされていることに気づくはずです。これらを使って、まだ特定していない Zuora アカウントを特定できます。一般に、ID 番号の大きいサブスクリプションが新しいものです。あるいは、SFDC で `Sent to Z-Billing` ステータスの該当する見積を特定できれば、見積には **Zuora Subscription ID の md5 ハッシュ** が含まれます。
- CustomersDot のアカウントが分かっていれば、新しいサブスクリプションは `Zuora Subscriptions` タブにも表示されるはずです。表示されない場合は、別の CustomersDot アカウントが存在する（連絡先メールのドメインだけで検索してみる）か、CustomersDot のアカウントが更新されていない可能性があります。

`subscription_id` を特定したら、次の URL を編集することでそのサブスクリプションに直接アクセスできます: `https://www.zuora.com/apps/Subscription.do?method=view&id=ZUORA-ID-GOES-HERE`。

Zuora で、古い／キャンセル済みのサブスクリプションは `Renewal subscription` フィールドを持ち、新しく作成されたサブスクリプションの名前が記載されている場合があります。

## キャンセル、ダウングレード、契約リセット、返金

### キャンセル

顧客がサブスクリプションのキャンセルを希望し、サブスクリプション期限の満了まで待ちたくない場合：

1. Support チームの対応が必要な他の問い合わせがないか確認します。
1. `General::Forms::Incorrect form used` マクロを使用して、Support Readiness によりチケットを正しいチーム（Accounts Receivable）に移管するよう依頼し、キャンセル処理を行ってもらいます。完了後、彼らが顧客に返信し、該当する場合は返金を発行します。

### ダウングレード

現在、[セルフサービスの観点からはサブスクリプションをダウングレードする機能はありません](https://gitlab.com/gitlab-org/customers-gitlab-com/issues/368)。

プランのダウングレードは更新時にのみ行うべきです。ただし、顧客が新規サブスクリプションとして誤ったプランを購入した場合は、`General::Forms::Incorrect form used` マクロを使用して、Support Readiness によりチケットを正しいチーム（Accounts Receivable）に移管するよう依頼し、誤った購入をキャンセルして正しいプランで新しいサブスクリプションを購入できるよう依頼してください。

SaaS Ultimate の顧客が Premium プランへの更新を希望する場合、Premium サブスクリプションを購入し、グループを新しいサブスクリプションに紐付けるようアドバイスします。Ultimate サブスクリプションが終了日に期限切れ／キャンセルになるよう設定されていることを確認してください。

セルフマネージド Ultimate の顧客が Premium プランへの更新を希望する場合は、Sales に紹介してください。

### GitLab.com の契約リセット

以前は、GitLab.com サブスクリプションで `contract reset` が行われると、namespace は無料ティアにダウングレードされ、L&R Support が手動で新しいサブスクリプションを既存の namespace に紐付ける必要がありました。Sales Operations はその後、SFDC でこれが発生するのを防ぐ新しいワークフロープロセスを実装し、契約リセット時に作成される新しいサブスクリプションが namespace に自動的に紐づけられるようにしました。このワークフロープロセスの詳細なガイダンスは、sales operations ハンドブックの [contract reset](/handbook/sales/field-operations/sales-operations/deal-desk/#contract-reset) のセクションにあります。

### 返金

GitLab はサブスクリプションを年間契約で提供しており、顧客の都合による解約／返金の対象とはなりません。返金リクエストがあった場合、当社の Billing チームは [この内部ガイド](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Refund-Approvals-Sales-Assisted-&-Web-Direct)（GitLab 内部）を使用して返金が適切かを判断します。

1. 顧客がキャンセルおよび返金をリクエストする理由を判断します。
1. Billing チームが返金が可能かどうかを判断し、適切な場合はリクエストを処理することを顧客に伝えます。
1. Support チームの対応が必要な他の問い合わせがないか確認します。
1. `General::Forms::Incorrect form used` マクロを使用して、Support Readiness によりチケットを正しいチーム（Accounts Receivable）に移管するよう依頼し、関連する場合は判断と処理を行ってもらいます。完了後、彼らが顧客に返信します。

注: 部分返金はできないため、返金がリクエストされた場合、サブスクリプション全体をキャンセルして返金する必要があります。誤って更新したケースについては [更新の取消](/handbook/support/license-and-renewals/workflows/billing_contact_change_payments#renewal-reversal) を参照してください。

## インボイス

### インボイスのコピーリクエスト

まず [CustomersDot](https://customers.gitlab.com/customers/sign_in) でインボイスが入手可能かを確認します。

- 入手可能な場合: 今後セルフサービスで対応できるよう、Payment History からインボイスを見つける方法を顧客に案内します。
- 入手不可能な場合: `General::Forms::Incorrect form used` マクロを使用して、Support Readiness によりチケットを正しいチーム（Accounts Receivable）に移管するよう依頼し、リクエストを処理してもらいます。完了後、彼らが顧客に返信します。

### インボイスの修正

顧客が税務上または管理上の目的でインボイスの修正を希望する場合：

1. インボイスがシステム内に存在することを確認します。
1. Support チームの対応が必要な他の問い合わせがないか確認します。
1. `General::Forms::Incorrect form used` マクロを使用して、Support Readiness 経由で正しいチーム（AR）にチケットを移管するよう依頼し、リクエストを処理してもらいます。完了後、彼らが顧客に返信します。

## 支払い

## インボイスの支払い

デビットまたはクレジットカードでのインボイス決済は [Customers Portal で利用可能](https://docs.gitlab.com/subscriptions/customers_portal/#pay-for-an-invoice) です。顧客は次のことができます。

1. Customers Portal にサインインする。
1. サイドバーから Invoices ページ（`/invoices`）に移動する。
1. インボイスの `Pay for invoice` ボタンをクリックする。
1. 支払いフォームに入力して送信する。

購入フローでクレジットカードを追加する場合と異なり、ここで入力された支払い方法は将来の購入のために保存されません。これは [オンセッション](https://support.stripe.com/questions/what-is-the-difference-between-on-session-and-off-session-and-why-is-it-important)／[ワンタイム](https://knowledgecenter.zuora.com/Zuora_Payments/Process_payments/Payment_Pages_2.0/J_Implement_Payment_Pages_2.0_to_support_one-time_payment_flows/Z_Implement_one-time_payment_flows_for_processing_payments_in_India) 支払いだからです。ただし、このプロセスは [すべての取引で 3DS 認証が必要なカード](/handbook/support/license-and-renewals/workflows/customersdot/troubleshoot_errors_while_making_purchases/#3d-secure-authentication-3ds) や [インドで発行されたカード](https://docs.gitlab.com/subscriptions/gitlab_com/gitlab_subscription_troubleshooting/#error-transaction_not_allowed) も受け付けます。
さらに、このフローでは既存の支払い方法にはアクセスできません。

代替の支払い方法は現時点ではサポートされていないため、そのリクエストは [Accounts Receivable チームに移管](#requests-to-make-a-paymentpayment-failed) する必要があります。

### 支払い／支払い失敗のリクエスト {#requests-to-make-a-paymentpayment-failed}

`General::Forms::Incorrect form used` マクロを使用して、Support Readiness によりチケットを正しいチーム（Accounts Receivable）に移管するよう依頼し、リクエストを処理してもらいます。完了後、彼らが顧客に返信します。

### クレジットカードの削除

顧客が CustomersDot アカウントからクレジットカードを削除したい場合：

1. Support チームの対応が必要な他の問い合わせがないか確認します。
1. `General::Forms::Incorrect form used` マクロを使用して、Support Readiness によりチケットを正しいチーム（Accounts Receivable）に移管するよう依頼し、リクエストを処理してもらいます。完了後、彼らが顧客に返信します。

### クレジットカード更新後の再決済

支払い失敗後に顧客がクレジットカードを更新し、新しいカードで再決済を希望する場合：

1. `General::Forms::Incorrect form used` マクロを使用して、Support Readiness によりチケットを正しいチーム（Accounts Receivable）に移管するよう依頼し、再決済を処理してもらいます。
1. 顧客は ar@gitlab.com に直接連絡して再決済をリクエストすることもできます。

### 更新の取消 {#renewal-reversal}

顧客が誤って 2 回更新してしまった、または間違って更新した場合：

1. 更新を取り消す必要がある理由を判断します。
1. `General::Forms::Incorrect form used` マクロを使用して、Support Readiness によりチケットを正しいチーム（Accounts Receivable）に移管するよう依頼し、リクエストを処理してもらいます。彼らは更新前の状態に戻すように更新を取り消し、適切な場合は更新分を返金します。

### 分割支払いのリクエスト

顧客のカードに支払い限度額があり、購入金額の全額を一度に支払えない場合、Billing は「バッチ」でカードに請求できます。

1. 限度額と顧客が希望する購入の総額の情報を取得します。
1. `General::Forms::Incorrect form used` マクロを使用して、Support Readiness によりチケットを正しいチーム（Accounts Receivable）に移管するよう依頼し、リクエストを処理してもらいます。完了後、彼らが顧客に返信します。

総額が大きすぎて 2 バッチで請求できない場合、Billing は代わりに sales-assisted の注文を行うようリクエストすることがある点に注意してください。これに該当するか不明な場合は、SFDC のアカウントまたは Opportunity の Chatter で [at]Billing-ops にタグ付けして再確認できます。
