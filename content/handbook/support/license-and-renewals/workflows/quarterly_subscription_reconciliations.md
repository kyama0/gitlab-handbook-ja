---
title: 四半期サブスクリプション リコンサイル (QSR)
category: General
description: QSR の異議申し立て、QSR の一時停止、最大シートの解決、リコンサイルの再実行に関するワークフロー。
upstream_path: /handbook/support/license-and-renewals/workflows/quarterly_subscription_reconciliations/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T10:35:08Z"
translator: claude
stale: false
---
## 概要

このページは、[四半期サブスクリプションリコンサイルプロセス](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/) に関するチケット（異議申し立て、エスカレーション、QSR の一時停止、最大シートのリセット、リコンサイルの再試行など）への対応ガイダンスを提供します。

## 一般的なワークフロー

顧客が QSR について Support に問い合わせた場合、最初の連絡先として [`Support::L&R::Refund or cancellation request on quarterly subscription reconciliation` マクロ](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/Support/L&R/Refund%20or%20cancellation%20request%20on%20quarterly%20subscription%20reconciliation.yaml) を使用するか、それに基づいて手動で返信を作成できます。自分の言葉で返信を送る場合は、適切で一貫した期待値を設定するために、マクロで使用されている一般的なガイドラインと情報に従うことが重要です。

QSR とは何か、それがどのように機能するかを説明し、[ドキュメンテーションページ](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/) へのリンクを検討してください。請求対象シートの計算方法を説明する個別の [SaaS focused](https://docs.gitlab.com/subscriptions/gitlab_com/#how-seat-usage-is-determined) および [self-managed focused](https://docs.gitlab.com/subscriptions/self_managed/#billable-users) のドキュメントページもあります。

詳しい説明については [この Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3540#quarterly-subscription-reconciliation) を参照してください。

**やるべきこと**

- QSR の仕組みを説明し、次のステップに対する適切な期待値を設定します。
- 追跡目的のため、**Transaction Issue Type** を `Quarterly Subscription Reconciliation` に必ず設定します。

**やってはいけないこと**

- チケットを Billing/AR に渡すこと。
- 文書化された承認なしに [QSR を一時停止](#pausing-qsr-on-a-subscription) したり、[最大シートをリセット](#resolving-max-seats-overages) したりすること。

## 異議申し立てのエスカレーションと解決

顧客がリコンサイル（保留中または処理済み）に異議を申し立てたい場合：

- 顧客に対して、Sales のアカウントマネージャーに繋ぐことを伝えます。
- [Working with Sales](/handbook/support/license-and-renewals/workflows/working_with_sales/#general-workflow) のワークフローに従って、SFDC でアカウントマネージャーに通知します。
- 緊急の事情がある場合を除き、自分で QSR を一時停止／無効化しないでください（[後述](#pausing-qsr-on-a-subscription) 参照）。
- namespace の Max Seats をリセットしないでください（[後述](#resolving-max-seats-overages) 参照）。

この時点で Support チームはこのプロセスに影響力を持たないため、顧客には Sales マネージャーとすべての議論を継続するよう伝え、その後チケットをクローズしてかまいません。

### サブスクリプションの QSR を一時停止する {#pausing-qsr-on-a-subscription}

**重要：** Support チームは、確認されたバグの動作の場合を除き、サブスクリプションで QSR を無効化すべきではありません。

1. 顧客の異議申し立てやその他の非バグ問題により、サブスクリプションで QSR を無効化する必要がある場合、sales-ops ハンドブックの [How To Temporarily Pause Quarterly Subscription Reconciliation](/handbook/sales/field-operations/order-processing/#how-to-temporarily-pause-auto-renewal-quarterly-subscription-reconciliation-and-operational-data) を参照してください。Sales のアカウントマネージャーは、QSR の一時停止をリクエストするためにこのワークフローに従う必要があります。

1. 不正な QSR 金額が見積もられる原因となっているバグが確認された場合、リコンサイルの時間的制約上、Support チームは customersDot の Admin インターフェイスを通じてサブスクリプションで手動で QSR を無効化する権限を持っており、そのような場合にはそうすべきです。

   - 顧客のアカウントに移動し、Zuora Subscriptions タブ（`/admin/customer/:id/zuora_subscriptions`）を表示します。
   - **Quarterly Coterms** の下のドロップダウンメニューを使用して Yes/No を選択します。
     - `No` に切り替えます。
   - Update をクリックします。

#### 手動で QSR を一時停止する場合

1. バグ修正やその他の回避策が実装された後に、QSR が再有効化されることを保証する責任を負う必要があります。
   - [Zendesk Super App](/handbook/security/customer-support-operations/zendesk/apps/global#zendesk-super-app)、[reminder app](/handbook/security/customer-support-operations/zendesk/apps/global#gitlab-reminders-app)、Slack の組み込みリマインダーツール、または自分に合うものを検討してください。

## 最大シート超過の解決 {#resolving-max-seats-overages}

**重要：** chatter で必要な承認を得ずに、namespace の `Max Seats` をリセットしないでください。このステップは true-up を免除することと考え、sales-ops ハンドブックページ [Waived True-Ups: Policy and Approval Requirements](/handbook/sales/field-operations/order-processing/#waived-true-ups-policy-and-approval-requirements) を参照してください。

**10 シート以下の True-Up 免除について：** Sales は True-Up 承認プロセスをバイパスし、L&R 内部リクエストオプションを使用して直接 Support Super Form にチケットを送信できます。その後、QSR のために最大シートをリセットします。免除されるシート数が 10 以下の場合、フォームフィールド「What is the link to the chatter in SFDC where this was approved?」は自動的に削除され、事前承認なしでチケットを送信できます。

### 承認の確認

チケット内で、`Chattr link containing approval` として与えられた URL に従ってください。

多くの場合、関連する Opportunity の chatter への返信に承認の文言が示されます。承認は Sales のリーダー、通常は area VP から来ます。承認者の名前にカーソルを合わせて詳細を確認してください。

QSR ケースが Deal Desk チームによって処理されている場合、承認は Salesforce のケース自体に存在することがあります。SFDC のケースで `Approved` および `Approver` フィールドを探してください。両方とも、QSR の免除が関連する承認者によって承認されたときにマークされているはずです。

- SFDC のケースに関する詳細は [こちらを参照](/handbook/sales/field-operations/requesting-internal-support/#navigating-an-internal-case)

リンクされた chatter または SFDC ケースに承認が見つからない場合は、リクエスト元にその事実を伝え、進めないでください。

### 承認された場合

`Max Seats` のリセットの承認が得られた場合、次を使用できます。

- CustomersDot Support Admin Tools > [Reset Max Seats](/handbook/support/license-and-renewals/workflows/customersdot/support_tools/#reset-max-seats)
- コンソールアクセス（最終手段）

実施した処置を関連チケットまたは [internal-request](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) に文書化します。**GitLab Support Internal Requests for Global customers** リクエストオプションを使用し、内部リクエストの種類として **Reset max seats for QSR** を選択します。QSR が返金で承認された場合でも、`Max seats` リセットの承認が必要です。

承認された免除超過分のみが排除されるようにこの値を設定するようにしてください。多くの場合、この値を namespace の現在の使用量に単純に設定することもできますが、ここでもチケットの確認、スクリーンショット、顧客とのやり取りなどを確認して、適切な金額を設定する常識を働かせてください。不明な場合は Slack で質問してください。

**重要：** QSR が返金される場合、最大ユーザー数は Support にチケットを開いてリセットする必要があります。Deal Desk がこのプロセスをサポートします。[内部プロセスガイドはこちら](https://gitlab.com/gitlab-com/sales-team/field-operations/deal-desk/-/wikis/Web-Direct-Quarterly-Seat-Reconciliation-(QSR)-Refunds)。

## リコンサイルの実行

[Reconciliation](https://customers.gitlab.com/admin/reconciliation/12345) の詳細ページにある `Perform reconciliation` ボタンは、現在 [バグ](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/4317) のため動作しません。

customersdot でデフォルトのクレジットカードを更新すると、自動的に QSR の支払いが再トリガーされます（何らかの問題が発生しない限り）。リコンサイルイベントのステータスを確認することで、再トリガーが成功したことを確認できます。再トリガーは、QSR イベントの失敗から最長 3 か月後まで実行できます。支払いがトリガーされなかった場合、customersdot でカードがデフォルトに設定されているか確認してください。

リコンサイルが失敗すると、顧客は [メール](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/app/views/reconciliation_mailer/payment_failed.text.erb) を受け取り、再試行する方法に関する手順が提供されます。この情報は当社の [docs](https://docs.gitlab.com/subscriptions/quarterly_reconciliation#troubleshooting-failed-payment) でも入手可能です。
