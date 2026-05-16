---
title: "リニューアルFAQ"
description: "お客様のリニューアル - よくある質問"
upstream_path: /handbook/sales/commercial/renewals-faq/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-11-07T16:42:03+00:00"
---

## お客様リニューアルFAQ

現在、多くのGitLabのお客様が、今後のサブスクリプションのリニューアルに関する質問を持っています。

社内的にも、GitLab従業員は、管理する今後のリニューアル商談に関する同様の質問を持つことがよくあります。

複数の購入経路、デプロイメントタイプ、契約条件、超過/和解プロセスのため、今後のリニューアルにどう対応するかが不明確であることがよくあります。

このページは、お客様のリニューアルに関して最もよく聞かれる質問に答えることを目的としています。

### お客様向けの質問

Q: **GitLabサブスクリプションはいつ更新されますか？**

A: リニューアルまたは有効期限を確認するには、[Customers Portal](https://customers.gitlab.com/customers/sign_in)にサインインしてください。

![renewal.due](/images/when_is_renewal_due_v17_4.png)

Q: **GitLabサブスクリプションと今後の更新をどこで管理できますか？**

A: [Customers Portal](https://customers.gitlab.com/customers/sign_in)にサインインしたら、サブスクリプションに関する*Upgrade Plan*、*Add More Seats*、*Buy GitLab Duo Pro*などの追加アクションのドロップダウンリストオプションを含む、さまざまなオプションが表示されます。

![manage.renewal](/images/manage_renewal_v17_4.png)

Q: **GitLabサブスクリプションは自動更新されますか？**

A: [GitLabドキュメンテーションのサブスクリプションカードでの確認方法を説明しているこのセクションを確認してください](https://docs.gitlab.com/ee/subscriptions/self_managed/#enable-or-disable-automatic-subscription-renewal)。

Q: **今後の更新について通知はありますか？**

A: はい！サブスクリプションが期限切れになる30日前に、サブスクリプション有効期限を含むバナーがGitLabユーザーインターフェイスの管理者向けに表示されます。サブスクリプションが自動更新中の場合、[メール通知](https://docs.gitlab.com/ee/subscriptions/self_managed/#email-notifications)も受信します。

Q: **GitLabサブスクリプションの更新時期が来た際、ライセンスを追加または削除できますか？**

A: サブスクリプションが期限切れになる15日前に、[Customers Portal](https://customers.gitlab.com/customers/sign_in)の既存のサブスクリプションの下に*Renew*ボタンが表示されます。これにより、ユーザー数量を調整できます。

サブスクリプションが期限切れになる15日以上前に手動でサブスクリプションを更新することはできません。[手動で更新する方法の手順については、GitLabドキュメンテーションのこのセクションを確認してください](https://docs.gitlab.com/ee/subscriptions/self_managed/#renew-subscription-manually)。

![manage.renewal](/images/renew_15days_v17_4.png)

手動で更新しない場合、[自動更新](https://docs.gitlab.com/ee/subscriptions/self_managed/#automatic-subscription-renewal)されることに注意してください。

Q: **Quarterly Subscription Reconciliationで請求が来たことが見えます。これは何のためですか？**

A: Quarterly reconciliationは、ライセンス制限を超えた場合に発生します。当該四半期中に使用された最大席数に基づいて超過分を請求されます。最大値を超えた場合は、GitLabインスタンスで警告が表示されます。

![QSR.warning](/images/QSR_disclaimer_v17_5.png)

これに関する詳細な情報は[こちら](https://docs.gitlab.com/ee/subscriptions/quarterly_reconciliation.html)で確認できます。

これらの超過料金に異議を申し立てたい場合は、[Support Ticket](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=360000071293)を開き、問題タイプとして*Quarterly Subscriptions Reconciliation (QSR) Related Problems*を選択できます。

Q: **GitLab Customers Portalで、ドロップダウンリストからサブスクリプションをキャンセルするオプションが表示されます。キャンセルをクリックすると何が起こりますか？**

A: [Customers Portal](https://customers.gitlab.com/customers/sign_in)で、*Cancel subscription*オプションが利用可能な場合、自動更新がオンであることを意味します。*Cancel subscription*をクリックすると、自動更新がオフになります。サブスクリプション有効期限まで有料機能へのアクセスは継続します。

Q: **アドオンを持っていると、リニューアルプロセスに影響しますか？**

A: Duo Pro、Duo Enterprise、またはEnterprise Agile Planningを持つサブスクリプションは自動更新できません。営業チームに連絡するよう求めるバナーが表示されます。Account Executiveを知っている場合は、直接連絡してください。

![add-on.renewal](/images/add_on_renewal_v17_4.png)

Q: **GitLabサブスクリプションの更新時期が来たので更新したいです。どうやってこれを行いますか？**

A: ホスティングモデルに基づいて更新する方法は、以下のコンテンツを参照してください。

SaaSサブスクリプション - [How to Renew](https://docs.gitlab.com/ee/subscriptions/gitlab_com/#renew-gitlabcom-subscription)

Self Managedサブスクリプション - [How to Renew](https://docs.gitlab.com/ee/subscriptions/self_managed/#renew-your-subscription)

Q: **GitLabサブスクリプション期間中、未使用のライセンスを削除して返金を受けることはできますか？**

A: いいえ、現時点ではこれは不可能です。

Q: **営業担当者を通じてGitLab.comサブスクリプションを購入しました。購入をアクティベートし、有料サブスクリプションをグループに適用するにはどうすればよいですか？**

A: GitLab.comサブスクリプションをグループにリンクする方法を学ぶには、[この短い動画](https://www.youtube.com/watch?v=qAq8pyFP-a0)をご覧ください。動画で説明されている手順を実行する前に、グループのOwnerロールを持っていることを確認してください。

Q: **管理者または財務ユーザーをグループに追加した場合、GitLabを使用しなくても、これによりライセンスが消費されますか？**

A: はい、これらのユーザーは課金対象ユーザーとしてカウントされ、課金されます。

Q: **GitLab Customers Portalで他のユーザーにサブスクリプションアカウントへのアクセスを与えたいです。どうやってこれを行いますか？**

A: GitLabの支援なしに所有権を移転できる可能性があります。詳細は、この[ワークフロー](https://docs.gitlab.com/ee/subscriptions/gitlab_com/#add-or-change-subscription-contacts)を参照してください。セルフサービスオプションが利用できない場合は、[Support Ticket](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=360000071293)を開いてください。所有権の検証を提供するよう求められ、その後Supportが所有権を移転します。

Q: **GitLabサブスクリプション期間の途中で、最近採用した人のために追加のライセンスを購入したいです。これは可能ですか？**

A:  はい！ホスティングモデルに基づいてユーザーを追加する方法は、以下のコンテンツを参照してください。

SaaSサブスクリプション - [How to Add User](https://docs.gitlab.com/ee/subscriptions/gitlab_com/#add-seats-to-subscription)

Self Managedサブスクリプション - [How to Add User](https://docs.gitlab.com/ee/subscriptions/self_managed/#add-seats-to-a-subscription)

### GitLab 従業員向けの質問

Q: **お客様のサブスクリプションがいつ更新の時期になるかをどう確認できますか？**

A: AccountのNext Renewal Dateフィールドをチェックすることで、お客様がいつ更新の時期になるかを見つけることができます。Accountに複数のSubscriptionがある場合は、関連するRenewal Opportunityに移動し、Subscription Renewal Dateを確認できます。

Q: **お客様がGitLab.comユーザーアカウントをCustomers Portalユーザーアカウントに正常にリンクしたかどうかをどう確認できますか？**

A: <https://customers.gitlab.com/admin/customer/>に移動し、お客様メールで検索します。*Zuora*および*Impersonate*タブを使用して、これらのポータルの情報がCustomers Portalと一致することを検証します。*Provider*および*Uid*フィールドにも値が入力されます。

![provider.uid.fields](/images/link_subscription_v17_4.png)

Q: **お客様がGitLabサブスクリプションをGitLab名前空間に正常にリンクしたかどうかをどう確認できますか？**

A: お客様に次の場所に移動するよう依頼する必要があります;

*Settings* - *Billings* (またはgitlab.com/groups/<lululemon>namespace>/-/billings) で、プランが請求書と一致するかどうかを確認します。

Q: **お客様の更新商談を表示する際、Close Date、Quote Start Date、Subscription Renewal Dateの違いは何ですか？**

A: Open Opportunitiesの場合、Close Dateはディールがクローズすると期待される予測日です。Closed Opportunitiesの場合、Close Dateはopportunityがクローズされた日です。Quote Start Dateは、Opportunity上のPrimary Quoteで示されるサブスクリプションの最初の日です。Renewal Quotesの場合、Quote Start DateはSubscription Renewal Dateと常に同じであることに注意してください。Subscription Renewal Dateは、更新可能な現在アクティブなSubscriptionの最終日または有効期限です。

Q: **お客様が自動更新中かどうかをどう確認しますか？**

A: SalesforceのAccountのアクティブSubscriptionに移動し、*Turn On AutoRenew*フィールドを表示します。Yesに設定されている場合、自動更新中です。

Q: **お客様が自動更新をオフにしたかどうかをどう確認しますか？**

A: SalesforceのAccountのアクティブSubscriptionに移動し、*Turn On AutoRenew*フィールドを表示します。Noに設定されている場合、自動更新をキャンセル/オフにしています。

Q: **自動更新中のお客様が、予期せぬ結果（例: アカウントのクレジットカードが期限切れ）のために実際には更新しない可能性があると聞きました。お客様が実際に自動更新されるかどうかをどう確認するか？**

A: Renewal OpportunityのAuto Renewal Statusをチェックして、Subscriptionが自動更新されることを確認します。自動更新されない場合、その理由が表示されます。例: *CC Expired*

Q: **お客様が自動更新したが、サブスクリプションを変更/キャンセルしたいと言っています。これをどう管理しますか？**

A: 私たちはお客様がサブスクリプションが自動更新されることを認識していることを常に確保するよう努めています。変更はリニューアル前に行う必要があります。Chatterで@sales-supportに@メンションすることでDeal Deskに連絡し、こうしたお客様の依頼をどう管理するかのガイダンスを得てください。

Q: **お客様が更新のためにどれだけの収益があるかをどう判断しますか？**

A: Renewal OpportunityのARR BasisがAvailable to Renew (ATR)の収益です

Q: **一部のRenewal Opportunityデータが正しくないと思います。レビューのために誰に連絡できますか？**

A: Chatterで@sales-supportに@メンションすることでDeal Deskに連絡してください。

Q: **お客様がQSRsに登録されているかどうかをどう確認しますか？**

A: SalesforceのAccountのアクティブSubscriptionに移動し、SFDCで*Turn On Seat Reconciliation*フィールドを表示します。Yesに設定されている場合、QSRsをオンにしています。

Q: **QSRのステータスをどう確認しますか？つまり、お客様に未払いのQSRがありますか？**

A: [CDot Admin Reconciliations](https://customers.gitlab.com/admin/reconciliation)セクションでサブスクリプションを検索できます。そのサブスクリプションに接続されているすべてのQSRのステータスが表示されます。

また、QSR opportunityが作成後15日後もオープンのままの場合、QSRは未払いと見なされます。このシナリオでは、お客様に連絡し、手動で超過を処理する必要があります。

Q: **更新商談を手動で管理するべきタイミングは？**

A: お客様が自動更新中でない (Turn on Auto Renew = No) 場合、または自動更新が失敗するとわかっている場合 (Auto Renewal Status ≠ On)、お客様に連絡して更新プロセスを直接管理する必要があります。大規模で戦略的なお客様のリニューアルも直接管理するべきです。

Q: **お客様をオンラインで更新するよう案内するべきタイミングと、どう支援できますか？**

A: 認証情報を使用して[Customers Portal](https://customers.gitlab.com/customers/sign_in)にログインするようアドバイスします。*Manage Purchases*ビューに移動したら、*Renew*オプションが表示されるはずです。*Renew*をクリックして注文をレビューしたら、チェックアウトに進み、*Purchase*を選択できます。

Q: **お客様がオンラインWebストア経由でリニューアルしたかどうかをどう確認するか？**

A: お客様が上記のプロセスに従うと、SalesforceのAccount上のリニューアル商談は自動的にclosed wonに設定されます。

Q: **お客様がチャネル経由で購入したいとアドバイスした場合、どのアクションを取るべきですか？**

A: [Channel/Alliance quotes](/handbook/sales/field-operations/channel-operations/sales-faq/#quoting)の見積もりプロセスに従って、既存のRenewal Opportunity内でChannel経由でDirectのお客様を更新できます。

Q: **お客様がSelf-ManagedからSaaSインスタンスに、またはその逆を移動したい場合、どのステップを取る必要がありますか？**

A: これは、お客様が製品提供を入れ替えることを含みます。したがって、お客様がリニューアル時に製品を変更したい場合、標準の[Renewal Quoting process](/handbook/sales/field-operations/sales-operations/deal-desk/#renew-subscription-quote)に従ってください。お客様が契約期間中に製品を切り替えたい場合は、[Amendment Quoting process](/handbook/sales/field-operations/sales-operations/deal-desk/#b--upgrade-or-switch-products-during-the-subscription-term)に従ってください。

Q: **お客様が複数のSubscriptionsを1つに統合したいです。これをどう対応しますか？**

A: できるだけ早くDeal Deskに連絡してガイダンスを得てください。すべての関連Subscriptionsがco-terminated（同じ終了日を持つ）で、統合がRenewalの時に発生する場合、アクティブのままになる名前空間に関連付けられているRenewal Opportunityですべての統合製品を含む見積もりを構築します。Order Formが署名されたら、[Submit the Opportunity for Booking](/handbook/sales/field-operations/order-processing/#submit-an-opportunity-for-booking)を行います。残りのRenewal Opportunitiesについては、Chatter経由でDeal Deskに連絡し、Closed Lost Reason = Merged into another opportunityでClosed Lostするよう依頼します。お客様が複数のサブスクリプションを早期更新する必要がある統合を要請する場合、[Contract Reset](/handbook/sales/field-operations/sales-operations/deal-desk/#contract-reset)経由でサブスクリプションを統合します。

Q: **お客様が初めてライセンス数を超えました。どのアクションを取るべきですか？**

A: お客様がライセンス数を超えた場合（この情報はAccountのDraft *Utilization*の下で表示できます）、Add Onライセンスを販売するか、QSR経由でライセンスを遡及的かつ按分して請求できます。

### その他の役立つリソース

[Auto Renewal FAQ](https://internal.gitlab.com/handbook/product/fulfillment/archive/auto-renewal-old/)

[How to subscribe to GitLab](https://docs.gitlab.com/ee/subscriptions/)

[Licensing FAQ](/handbook/support/license-and-renewals/)

[QSR Process](https://docs.gitlab.com/ee/subscriptions/quarterly_reconciliation.html)

[Cloud Licensing](https://gitlab.highspot.com/items/629a82af9092e7ac989947ca?lfrm=srp.0)
