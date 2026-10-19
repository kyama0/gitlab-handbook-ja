---
title: 四半期サブスクリプション リコンサイル (QSR)
category: General
description: QSR の異議申し立て、QSR の一時停止、最大シートの解決、リコンサイルの再実行に関するワークフロー。
upstream_path: /handbook/support/license-and-renewals/workflows/quarterly_subscription_reconciliations/
upstream_sha: dae94b0752e749cce0ad81e818ba66cae5ba4a11
translated_at: "2026-10-19T10:36:19Z"
translator: codex
stale: false
lastmod: "2026-10-19T18:59:08+11:00"
---
## 概要

このページは、[四半期サブスクリプションリコンサイルプロセス](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/)に関するチケット（異議申し立て、エスカレーション、QSR の一時停止、最大シートのリセット、リコンサイルの再試行など）への対応ガイダンスを提供します。

## 一般的なワークフロー

お客様が QSR に関してサポートに連絡してきた場合、一次対応として [`Support::L&R::Refund or cancellation request on quarterly subscription reconciliation` マクロ](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/Support/L&R/Refund%20or%20cancellation%20request%20on%20quarterly%20subscription%20reconciliation.yaml)を使用するか、それをベースに手動で返信を作成できます。自分の言葉で返信を送る場合は、マクロで使用されている一般的なガイドラインと情報に従って、適切で一貫した期待値を設定することが重要です。

QSR とその仕組みを説明し、[ドキュメントページ](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/) へのリンクも検討してください。請求対象シートの計算方法を説明する [SaaS 向け](https://docs.gitlab.com/subscriptions/gitlab_com/#how-seat-usage-is-determined)と [Self-Managed 向け](https://docs.gitlab.com/subscriptions/self_managed/#billable-users)の個別のドキュメントページもあります。

詳しい説明は [この Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3540#quarterly-subscription-reconciliation)を参照してください。

**やるべきこと**

- QSR の仕組みを説明し、次のステップについて適切な期待値を設定する。
- 追跡のため、**Transaction Issue Type** を必ず `Quarterly Subscription Reconciliation` に設定する。

**やってはいけないこと**

- チケットを Billing/AR に渡す。
- 文書化された承認なしに [QSR を一時停止](#pausing-qsr-on-a-subscription)したり、[最大シートをリセット](#resolving-max-seats-overages)したりする。

## 異議申し立てのエスカレーションと解決

お客様が、保留中または処理済みのリコンサイルについて異議を申し立てたい場合:

- 担当の sales account manager をお繋ぎする旨をお客様にお伝えします。
- [Sales との連携](/handbook/support/license-and-renewals/workflows/working_with_sales/#general-workflow)のワークフローに従って、SFDC でアカウントマネージャーに通知します。
- やむを得ない事情がない限り、自分で QSR を一時停止/無効化しないでください（[以下を参照](#pausing-qsr-on-a-subscription)）。
- ネームスペースの Max Seats をリセットしないでください（[以下を参照](#resolving-max-seats-overages)）。

この時点で Support team はプロセスに影響を与えられないため、お客様には sales manager とすべてのやり取りを継続するよう案内し、その後チケットをクローズできます。

### サブスクリプションで QSR を一時停止する {#pausing-qsr-on-a-subscription}

**重要:** Support team は、確認済みのバグ動作の場合を除き、サブスクリプションで QSR を無効化すべきではありません。

1. お客様からの異議申し立てやその他のバグ以外の問題 のために QSR を無効化する必要がある場合は、sales-ops ハンドブックページの [四半期サブスクリプションリコンサイルを一時的に停止する方法](/handbook/sales/field-operations/order-processing/#how-to-temporarily-pause-auto-renewal-quarterly-subscription-reconciliation-and-operational-data)を参照してください。sales account manager は、QSR の一時停止を要求するためにこのワークフローに従う必要があります。

1. 誤った QSR 金額が見積もられる原因となっているバグが確認された場合、リコンサイルの時間的制約の関係で、Support team は customersDot Admin インターフェイスを介してサブスクリプションで QSR を手動で無効化することができ、これらのケースでは実施すべきです。

   - お客様のアカウントに移動し、Zuora Subscriptions タブ（`/admin/customer/:id/zuora_subscriptions`）を表示します。
   - **Quarterly Coterms** の下にあるドロップダウンメニューを使用して Yes/No を選択します。
     - `No` に切り替えます。
   - Update をクリックします。

#### QSR を手動で一時停止する場合

1. バグ修正やその他の回避策が実装された後、再アクティブ化されることを保証する責任を負う必要があります。
   - [Zendesk Super App](/handbook/eta/css/zendesk/apps/global#zendesk-super-app)、[リマインダーアプリ](/handbook/eta/css/zendesk/apps/global#gitlab-reminders-app)、Slack 標準のリマインダーツール、その他自分に合ったものを検討してください。

## 最大シート超過の解決 {#resolving-max-seats-overages}

**重要:** chatter での必要な承認なしにネームスペースの `Max Seats` をリセットしないでください。このステップは トゥルーアップの免除と見なし、sales-ops ハンドブックページの [トゥルーアップの免除: ポリシーと承認要件](/handbook/sales/field-operations/order-processing/#waived-true-ups-policy-and-approval-requirements)を参照してください。

**10 シート以下の トゥルーアップ免除の場合:** Sales は標準のトゥルーアップ承認プロセスをバイパスし、Zendesk フォームで L&R Internal Requests オプション、続いて reset max seats for QSR を選択して内部リクエストを送信できます。10 シートを超えるリクエストの場合、サポートが Max Seats をリセットする前に必要な承認を取得する必要があります。

### 承認の確認

チケットで、`Chattr link containing approval` として記載されている URL にアクセスしてください。

多くの場合、承認の表明は関連する商談に対するその chatter への返信で行われます。承認は通常、Sales のリーダー、典型的には Area VP から得られます。承認者の名前にカーソルを合わせると詳細が表示されます。

QSR ケースが Deal Desk チームによって処理されている場合、承認は Salesforce ケース自体にあることがあります。SFDC ケースで、`Approved` と `Approver` のフィールドを探してください。QSR 免除が関連する承認者によって承認されると、これら両方がマークされるはずです。

- SFDC ケースの詳細については [こちら](/handbook/sales/field-operations/requesting-internal-support/#navigating-an-internal-case)を参照してください

リンクされた chatter または SFDC ケースに承認が見つからない場合は、その旨を依頼者に通知し、対応を進めないでください。

### 承認された場合

`Max Seats` のリセットが承認された場合、以下を使用できます:

- CustomersDot Support Admin Tools > [最大シートのリセット](/handbook/support/license-and-renewals/workflows/customersdot/support_tools/#reset-max-seats)
- コンソールアクセス（最後の手段）

該当チケット、または [L&R Internal Requests フォーム](https://gitlab-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=22783840298780)を使用した内部リクエストにアクションを記録してください。`What category of request?` で `GitLab.com Subscription Related > Reset max seats for QSR` を選択してください。QSR が返金で承認された場合でも、`Max seats` リセットの承認は依然として必要です。

承認され免除された超過分のみを排除する値を設定するようにしてください。多くの場合、この値をネームスペースの現在の使用量に設定するだけで済みますが、チケット、スクリーンショット、お客様とのやり取りなどを確認して、適切な数量を設定していることを確認するなど、常識的な判断もしてください。不明な点があれば Slack で質問してください。

**重要:** QSR が返金された場合、サポートでチケットを開いて最大ユーザー数をリセットする必要があります。Deal Desk がこのプロセスをサポートします。[内部プロセスガイドはこちら](https://gitlab.com/gitlab-com/sales-team/field-operations/deal-desk/-/wikis/Web-Direct-Quarterly-Seat-Reconciliation-(QSR)-Refunds)。

## リコンサイルの実行

[Reconciliation](https://customers.gitlab.com/admin/reconciliation/12345)の詳細ページにある `Perform reconciliation` ボタンは、[バグ](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/4317)のため現在動作しません。

customersdot でデフォルトのクレジットカードを更新すると、QSR の支払いが自動的に再トリガーされます（問題がない限り）。再トリガーが成功したかどうかは、リコンサイルイベントのステータスを見ることで確認できます。再トリガーは、QSR イベントが失敗してから最大 3 ヶ月後まで実行できます。支払いがトリガーされなかった場合は、カードが customersdot でデフォルトに設定されていることを確認してください。

リコンサイルが失敗するとお客様は [メール](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/app/views/reconciliation_mailer/payment_failed.text.erb)を受け取り、再試行方法の手順が提供されます。この情報は [ドキュメント](https://docs.gitlab.com/subscriptions/quarterly_reconciliation#troubleshooting-failed-payment) でも確認できます。
