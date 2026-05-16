---
title: CustomersDot で購入時に発生するエラーのトラブルシューティング
category: CustomersDot
description: CustomersDot 上のエラーに関するトラブルシューティングガイド
upstream_path: /handbook/support/license-and-renewals/workflows/customersdot/troubleshoot_errors_while_making_purchases/
upstream_sha: 6c73093986242c762a8f4a2769fbfba69b31fcf9
translated_at: "2026-05-08T13:00:00Z"
translator: claude
stale: false
lastmod: "2025-05-09T09:59:55+00:00"
---

### 概要

このガイドは [CustomersDot](https://customers.gitlab.com/customers/sign_in) で発生するエラーをトラブルシューティングするためのものです。

### 住所またはクレジットカードに関するエラー

CustomersDot からサブスクリプションを購入する際、住所やクレジットカードに関するエラーをユーザーが受け取った場合は、CustomersDot の `My Account` セクションに記載されている住所を確認してください。これは通常、住所の不備（市区町村、都道府県、郵便番号）が原因です。住所が正しくてもエラーが続く場合は、Sentry で関連するエラーを確認し、必要に応じて [CustomersDot トラッカー](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/) に Issue を起票してください。

### 3D Secure 認証 3DS

> Transaction declined.generic_decline - Your card was declined

GitLab の Zuora との購入連携は、[すべての取引で 3DS 認証を必須とする](https://docs.stripe.com/testing#authentication-and-setup) 支払い方法の認可をサポートしていません。

現時点での代替策として、ユーザーに別のカードを使うよう依頼します。さらに、[セールスに連絡](/handbook/support/license-and-renewals/workflows/working_with_sales#specific-workflows-to-pass-to-sales) して、ユーザーに [請求書による支払い](/handbook/support/license-and-renewals/workflows/billing_contact_change_payments.md#paying-invoices) を提案できます。

> card_error/authentication_required/authentication_required

GitLab の Zuora との購入連携は、[すべての取引で 3DS 認証を必須とする](https://docs.stripe.com/testing#authentication-and-setup) 支払い方法の認可をサポートしていません。そのような取引は、カード追加後に失敗します。

現時点での代替策として、ユーザーに別のカードを使うよう依頼します。さらに、[セールスに連絡](/handbook/support/license-and-renewals/workflows/working_with_sales#specific-workflows-to-pass-to-sales) して、ユーザーに代替の支払い方法を提案できます。

> invalid_request_error/setup_intent_authentication_failure

3DS 認証が失敗しました。

最初のオプションは、ユーザーに再試行するよう、または別のカードで試すよう依頼することです。
[セールスに連絡](/handbook/support/license-and-renewals/workflows/working_with_sales#specific-workflows-to-pass-to-sales) して、ユーザーに代替の支払い方法を提案することもできます。

### インドで発行されたカード

> Transaction declined.402 - [card_error/card_declined/transaction_not_allowed]
> Your card does not support this type of purchase.

顧客に [トラブルシューティングページ](https://docs.gitlab.com/subscriptions/gitlab_com/gitlab_subscription_troubleshooting/#error-transaction_not_allowed) を案内してリセラーから購入してもらうか、[セールスに連絡](/handbook/support/license-and-renewals/workflows/working_with_sales#specific-workflows-to-pass-to-sales) して [請求書による支払い](/handbook/support/license-and-renewals/workflows/billing_contact_change_payments.md#paying-invoices) を提案してください。

### Sentry からのエラーメッセージを取得する

Sentry で特定の顧客に関連するエラーを見つけるには、次の手順を試してください:

1. CustomersDot から顧客 ID を取得する:
   - <https://customers.gitlab.com/admin> にログインします
   - 左パネルの `Customers` をクリックして `Customers` 検索ページに移動します
   - 顧客を次のいずれかで検索します: メール、ドメイン、または名前 / 姓（顧客が異なるメールで登録した場合）
   - 結果のうち、情報、鉛筆、または人物のアイコンのいずれかをクリックします
   - URL から顧客 ID を取得します: <https://customers.gitlab.com/admin/customer/customerID/pagepath>
1. Sentry で顧客のエラーメッセージを見つける:
   - <https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=8> に移動します
   - `user.id:customerID` を使います（`customerID` は CustomersDot から取得した実際の customerID に置き換えます）
   - Sentry の Issue を開く → `All Events` をクリックします
   - 再度 `user.id:customerID` で特定のユーザーをフィルタします
   - 任意のイベントをクリックすると、エラーメッセージの詳細が表示されます
   - 顧客のメールアドレスを使って `user.email:customerFullEmail` で同じ検索を繰り返すこともできます

### CustomersDot Kibana ログからエラーメッセージを取得する

[Kibana](https://log.gprd.gitlab.net/) で `prdsub*` または `stgsub*` でフィルタすることで、それぞれ CustomersDot の本番ログまたはステージングログにアクセスできます。

Kibana の使い方や検索方法のアイデアを得るには、サポートワークフローの [Kibana](/handbook/support/workflows/kibana) ページを確認してください。

CustomersDot で行われた購入の試行については、[Kibana の CustomersDot 購入エラー](/handbook/support/workflows/kibana#customersdot-purchase-errors) のヒントを参照してください。

### GCP Logs Explorer からエラーメッセージを取得する

Logs Explorer の Google 公式ドキュメントは <https://cloud.google.com/logging/docs/view/logs-explorer-interface> にあります。より高度な検索のためのクエリ構築の理解を深めるために、これらのドキュメントを確認すると役立ちます。

[GCP Logs Explorer ダッシュボード](https://console.cloud.google.com/logs/query?project=gitlab-subscriptions-prod) にログインします（`gitlab-subscriptions-prod` を表示していることを確認してください）。

1. Resource Type で `VM Instance` を選択します
   - 必要に応じて、`LOG NAME` から特定のログファイルを選んでクエリの範囲を絞れます
   - 既定では、ログは 1 時間に制限されています。Kibana の検索と同様に、検索ボックスの左側に表示される Duration をクリックすることで時間枠を広げられます
1. 多くの場合、特定のクエリを構築することなく、顧客 ID やサブスクリプション名を検索するだけで必要な情報を見つけられます。

#### 高度な検索のヒント

ログクエリ言語では、ログ自体から動的に構築されたきめ細かい属性で検索できます。たとえば、探している重要情報のほとんどは、任意のログエントリの `jsonPayload` オブジェクトにスコープされています。CustomersDot のコード内でこれらのオブジェクトがどう表現されているかを理解しておくと、構築するクエリの種類を予測しやすくなります。ただし、欲しい情報のほとんどはクエリを構築しなくてもかなり簡単に見つけられます。

1. 検索ボックスの右側に「Show Query」のトグルスイッチがあります。これを ON にします。
1. Query Builder では、検索可能な属性を候補として表示します。たとえば `jsonPayload` と入力すると、検索可能な属性候補のポップアップが表示されます。
1. クエリ条件を更新したら、右側の `Run Query` をクリックします。
1. たとえば、特定の顧客のイベントを見つけるクエリを構築するには:
   - 顧客 ID を取得し、Query フィールドに入力します
   - `jsonPayload.customer_id="customerID"`
1. サブスクリプションでも同じことができますが、エラーの場合は `order_params` 属性にスコープされている可能性があります:
   - `jsonPayload.order_params.subscription_name="A-S00000000"`
   - エラー以外の場合は `jsonPayload.subscription_name="A-S00000000"`。
1. 指定された名前空間のエラーを見つける
   - `jsonPayload.order_params.gl_namespace_id="xxxxxxxx"`

Log Fields パネルでは、特定のログファイルや、`Info`、`Error` などの重要度ラベルを選択することもできます。これらをクエリビルダーに含めることもできます:

1. `severity=ERROR` はエラーのみを返します。
1. `severity=INFO` はエラー以外のみを返します。

### CustomerDot からのメール配信のトラブルシューティング {#troubleshooting-email-delivery-from-customerdot}

ときどき、顧客がパスワードリセットリクエストや新規アカウント確認メールなど、ポータルからのメールを受け取らなかったと報告します。GitLab は送信メール用のサービスとして Mailgun を使っています。Mailgun にログインしてメッセージログを表示し、必要に応じてサプレッションを削除できます。

サポートがこのプロセスで使用する一般的なワークフローは、[サポートハンドブックの確認メール](/handbook/support/workflows/confirmation_emails/#checking-mailgun-logs) ページに記載されており、そのページに Mailgun ダッシュボードのナビゲートとログ検索の詳細な説明があります。

ここでのプロセスはほぼ同じですが、CustomerDot からのメールを調査するため、一般的なワークフローのステップ 4 では検索対象ドメインとして `customers.gitlab.com` を選択していることを確認してください。

顧客が customers.gitlab.com にアクセスできるかを確認するには、顧客レコードの `Edit` ページ（顧客レコード右側のペンアイコン）に移動し、`Login activated` チェックボックスを確認します。チェックされていれば顧客はアクセスできます。チェックされていなければ顧客はアクセスできず、パスワードリセットメールも受け取れません。

リセラーの顧客は、リセラーまたは GitLab セールスチーム経由で購入する必要がある点に注意してください。

### 過去のチケット例

1. 期限切れのサブスクリプションのために新しいサブスクリプションを購入できない顧客:
   - [ZenDesk 162279](https://gitlab.zendesk.com/agent/tickets/162279)
   - [社内リクエスト Issue 2566](https://gitlab.com/gitlab-com/support/internal-requests/-/issues/2566)
   - [Sentry イベントログ](https://sentry.gitlab.net/gitlab/customersgitlabcom/issues/1181887/events/31651984/)
1. `Address`、`City`、`Postal code` に無効な情報があるために購入できない顧客:
   - [ZenDesk 167403](https://gitlab.zendesk.com/agent/tickets/167403)
   - [Sentry イベントログ](https://sentry.gitlab.net/gitlab/customersgitlabcom/issues/1211792/events/32521404/)
1. CustomersDot で `State` が提供されていないために compute 分数を購入できない顧客:
   - [Zendesk 318385](https://gitlab.zendesk.com/agent/tickets/318385)
