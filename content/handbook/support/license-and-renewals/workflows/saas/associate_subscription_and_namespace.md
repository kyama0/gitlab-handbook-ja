---
title: サブスクリプションと名前空間の関連付けおよびエラーのトラブルシューティング
description: "GitLab.com サブスクリプションのプロビジョニング方法"
category: GitLab.com subscriptions & purchases
upstream_path: /handbook/support/license-and-renewals/workflows/saas/associate_subscription_and_namespace/
upstream_sha: 6c73093986242c762a8f4a2769fbfba69b31fcf9
translated_at: "2026-05-08T12:45:20Z"
translator: claude
stale: false
---

## リセラー顧客向けのサブスクリプションのプロビジョニング

GitLab パートナー、リセラー、AWS、または GCP から購入する顧客は、[Customers Portal](https://customers.gitlab.com/customers/sign_in) でサブスクリプションへの **読み取り専用** アクセス権を持ちます。

すべての SaaS 顧客は、[顧客セルフサービス: サブスクリプションと名前空間の関連付け](/handbook/support/license-and-renewals/workflows/saas/associate_subscription_and_namespace#customer-self-serve-associating-the-subscription-and-namespace) で説明されているように、CustomersDot からサブスクリプションをプロビジョニングする必要があります。

## サブスクリプションのプロビジョニング中の 502 エラーのトラブルシューティング

サブスクリプションのプロビジョニングリクエストを処理する際、顧客ポータルでユーザーになりすました際に 502 エラーが発生することがあります。これは、管理者が誤って自分の GitLab.com 管理者アカウントを顧客ポータルアカウントとリンクしてしまった場合に発生します。これにより、顧客ポータルが GitLab.com 上の管理者ユーザーがアクセスできるすべてのグループを取得しようとして、最終的に 502 エラーを返します。

- これを確認するには [トークン情報を取得](https://docs.gitlab.com/api/oauth2/#retrieving-the-token-information)（顧客ポータルから `access_token` を取得し、API エンドポイントを呼び出して `resource_owner_id` 属性を取得します。これは GitLab.com の `userID` と同じである必要があります）。

これを修正するには、[unlink_customer console function](/handbook/support/license-and-renewals/workflows/customersdot/customer_console#unlink_customer) または [CustomersDot Support Admin Tools](/handbook/support/license-and-renewals/workflows/customersdot/support_tools/#unlink-gitlabcom-account) の `Unlink GitLab.com account` を使用して、**GitLab.com アカウントと顧客ポータルアカウントのリンクを完全に解除する** 必要があります。

## SaaS サブスクリプションの強制関連付け

> <i class="fas fa-exclamation-triangle color-orange"></i> **注**: 近日中に [非推奨化](/handbook/support/license-and-renewals/workflows/customersdot/mechanizer#mechanizer-notice) されます

サブスクリプションのプロビジョニングリクエストの処理中、顧客ポータル管理者を使用した通常の手順（上記のワークフロー）に従ってもサブスクリプションを関連付けることができないケースに遭遇することがあります。

- 名前空間にサブスクリプションのシート数より多くのアクティブユーザーがいる場合、システムは GitLab.com グループのアクティブユーザー数に合わせるために追加シートを購入するための支払いページにリダイレクトします。このシナリオで顧客が事前に追加シートを購入することに関心がない場合、サブスクリプションを強制的に関連付けることができ、追加シートはグループの課金ページにトゥルーアップとして反映されます。

- 別のシナリオ: EDU/OSS の顧客向けのプロビジョニングリクエスト。この場合、サブスクリプション上の ```Change Linked Namespace``` ボタンが存在しないため、[Force Associate Zendesk App](/handbook/support/license-and-renewals/workflows/customersdot/support_tools/#force-associate) を使用してサブスクリプションを関連付ける必要があります。

- 成功した場合、レスポンスは {:success=>true} となり、名前空間を確認して Issue をクローズできます。
- 成功しなかった場合は `~Console Escalation - customers` ラベルを追加します。これはコンソールアクセス権を持つエンジニアが調査します。

注意: 強制関連付けツールを使用する場合、サブスクリプションが関連付けられている customersdot アカウントに、（該当する名前空間のオーナーロールを持つ）gitlab.com ユーザーがリンクされていることを確認してください。関連付けは行われたが gitlab.com ユーザーがリンクされていない場合、その後のサブスクリプションへの変更は gitlab.com の名前空間に反映されないか、または名前空間が Free にダウングレードされてしまいます。

サブスクリプションを強制関連付けすると、コンピュート分の使用量はリセットされません。強制関連付けはクォータを変更するだけです。使用量は名前空間の Admin メニューからリセットできます。ただし、Admin によるリセットはクォータと追加ユニットの両方の使用量をクリアします。場合によっては、使用量をリセットする代わりに、名前空間に追加分を提供して、顧客がサブスクリプションのコンピュート分のクォータ全額を受け取れるようにすることが望ましい場合があります。

## サブスクリプションのクリア

サブスクリプションを名前空間に関連付ける際に何らかのエラーが発生する場合（例: `unable to associate the subscription as the destination namespace is already associated with a subscription` のようなエラー）、その名前空間に関連付けられたサブスクリプションのリンクを解除できます。

[CustomersDot Support Admin Tools の Clear subscription](/handbook/support/license-and-renewals/workflows/customersdot/support_tools#clear-subscription) は、その名前空間に関連付けられたサブスクリプションをクリアするために使用されます。

## 顧客セルフサービス: サブスクリプションと名前空間の関連付け {#customer-self-serve-associating-the-subscription-and-namespace}

### ユーザーが CustomersDot でサブスクリプションを確認できる場合

ユーザーが CustomersDot にアクセスでき、サブスクリプションを確認できるが、GitLab.com の課金ページに有償プランの詳細が表示されていない場合は、ユーザーに CustomersDot 経由でグループをサブスクリプションに関連付けてもらってください。

CustomersDot でグループをサブスクリプションに関連付ける手順:

1. [GitLab Customers Portal](https://customers.gitlab.com/customers/sign_in) にサインインします。
1. **Manage Purchases** に移動します。
1. 次のいずれかを実行します:
   - サブスクリプションが名前空間にリンクされていない場合、**Link subscription to a group** を選択します。
   - サブスクリプションが既に名前空間にリンクされている場合、**Subscription actions**（&nbsp;<i class="me-1 fa-solid fa-ellipsis-vertical"></i>）> **Change linked group** を選択します。
1. **Change subscription namespace** ページで、**namespace** ドロップダウンリストから希望のグループを選択します。
1. 課金情報を確認し、**Confirm purchase** を選択します。

**注**: 該当する名前空間がグレーアウトしている場合や、namespace ドロップダウンリストに表示されていない場合、ユーザーは進めません。関連付けを完了するためにサポートからの支援が必要です。次の情報を使用して、正しい次のステップを判断してください:

1. [1 つの名前空間で複数のアクティブな注文](https://gitlab.com/groups/gitlab-org/-/epics/9486) がサポートされるまで、名前空間がグレーアウトしているのは、既にサブスクリプションが関連付けられているためです。これは最近期限切れになったサブスクリプション、または消費型サブスクリプションである可能性があります。
1. **新しい** サブスクリプションが **シート付きのプラン** であることを確認します。コンピュート分のサブスクリプションである場合は STOP し、購入内容を確認して既存のコンピュート分を上書きして失わないようにしてください（これは L&R の専門家が行えます）。
1. **新しい** サブスクリプションが **シート付きのプラン** である場合、現在のグループに表示されているシート数を確認し、新しいサブスクリプションと比較してください。**シート数は同じである必要があります**。サブスクリプションがグループの使用中シート数と大幅に異なる場合は STOP し、予期しない QSR 計算（例: 40 ユーザーがいる場合に 10 シートのライセンスを強制適用する）を作成しないように確認してください。進める前に顧客と方針を確認してください。
1. シート数が同じであることを確認した後、[CustomersDot Support Admin Tools の Force Associate オプション](/handbook/support/license-and-renewals/workflows/customersdot/support_tools#force-associate) を使用して、新しいサブスクリプションを名前空間に適用できます。
1. この時点で、L&R の専門家による追加の根本原因分析が実施される場合があります（例: 根本的な問題が Zuora または SFDC アカウントに起因する場合、Billing Ops チームへの連絡が必要となることがあります）。

### ユーザーが CustomersDot でサブスクリプションを確認できない場合

ユーザーが CustomersDot でサブスクリプションを確認できない場合は、
[購入の関連付けワークフロー](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases) に従って、
ユーザーにサブスクリプションへのアクセス権を付与してください。
