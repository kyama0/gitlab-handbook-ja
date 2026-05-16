---
title: "Booking Metric 技術文書"
upstream_path: /handbook/sales/field-operations/sales-systems/gtm-technical-documentation/sfdc-booking-metric-fields/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T10:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

## この文書の使い方

以下は、FY22 に向けて導入した ARR Booking Metrics フィールドのデータ辞書と技術文書です。

---

## フィールドデータ辞書

### ARR フィールド

| **フィールド**     | **定義**                                       | **SFDC API**     | **置き換え対象**    |
|-----------|-------------------------------------------|--------------|-------------|
| Net ARR   | 商談における ARR の純変化                | ARR_Net__c   | iACV        |
| ARR Basis | 現在のサブスクリプション ARR（更新のみ）  | ARR_Basis__c | Renewal ACV |
| Booked ARR | 取引の合計 ARR（Net ARR + ARR Basis）   | ARR__c | ACV |

### 金額と期間のフィールド

| **フィールド**                    | **定義**                                                | **SFDC API**                  |
|----------------------------|---------------------------------------------------------|-------------------------------|
| Amount                     | 商談で請求される総額（すべての種類）                    | Amount                        |
| Recurring Amount           | すべての継続課金額（GitLab Seats、Storage）             | Recurring_Amount__c           |
| True Up Amount             | すべての一回限り True Up 金額                          | True_Up_Amount__c            |
| Pro Serv Amount            | すべてのプロフェッショナルサービス金額                  | ProServ_Amount__c             |
| Other Non-Recurring Amount | その他すべての一回限り料金製品（追加コンピュート分など）| Other_Non_Recurring_Amount__c |
| Subscription Start Date    | 商談の期間の開始日                                      | Start_Date__c                 |
| Subscription End Date      | 商談の期間の終了日                                      | End_Date__c                   |

## 技術文書

### クォートからの Booking Metrics フィールド

このコードがサポートするビジネスプロセス: [ARR](/handbook/sales/sales-term-glossary/arr-in-practice/)

概要: このコードの目的は、Zuora Quote ファミリーオブジェクトのデータに基づいて、商談の Bookings Metrics フィールドを設定することです。Zuora データが存在しない場合、取引がクォートされるまで推定 Net ARR 金額を使用します。商談のメトリックデータの取得元は以下のとおりです。

| 商談ステータス              | Net ARR ソース                          |
|-----------------------------|-----------------------------------------|
| Sales Assisted - Quoted     | Zuora Quote データ                      |
| Sales Assisted - Not Quoted | 推定 Net ARR                            |
| Web Directs（現在）         | 推定 Net ARR -> EOM 手動プロセス        |
| [Web Directs（将来）](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/911)        | Zuora Quote データ                      |

入力: Zuora Quote データ、商談の期間と金額（クォートなしで手動予測される場合）

出力: 関連する商談における Net ARR、Amount、Recurring Amount、True Up Amount、ProServ Amount、Other Non-recurring Amounts、日付フィールドへの値の設定。

ロジックの場所:

- [ZuoraQuoteClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraQuoteClass.cls)
- [ZuoraQuoteTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/ZuoraQuoteTrigger.trigger)

コードユニット:

- [stampOpp](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraQuoteClass.cls#L115)

テスト:

- [ZuoraQuoteTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraQuoteTest.cls)

### 更新のための関連サブスクリプションからの ARR Basis

このコードがサポートするビジネスプロセス: [ARR](/handbook/sales/sales-term-glossary/arr-in-practice/)

概要: 標準の Zuora 360 Sync を介して Zuora サブスクリプションデータを受信します。次に、このデータを使用して更新を作成し、更新を関連サブスクリプションに紐付けるか、サブスクリプションの ARR に変更があった場合は、その ARR を基礎として関連する更新を更新します。最終的な結果として、すべてのサブスクリプションには更新商談があり、その商談の更新基礎はサブスクリプションの現在の ARR と等しくなります（商談がクローズするまで）。

Salesforce における Zuora サブスクリプションはバージョンが上がると永続化されないため、変更を通じてサブスクリプションの概念を永続化できる「ラッパー」オブジェクトとして Customer Subscription を作成しました。

入力: Zuora 360 sync からの Zuora サブスクリプションデータ。

出力: 更新商談、更新商談の最新の ARR Basis。

ロジックの場所:

- [ZuoraSubscriptionClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraSubscriptionClass.cls)
- [ZuoraSubscrioptionTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/ZuoraSubscriptionTrigger.trigger)
- [CustomerSubscriptionClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/CustomerSubscriptionClass.cls)
- [CustomerSubscriptionTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/CustomerSubscription.trigger-meta.xml)

コードユニット:

- [CustomerSubscriptionClass.createRenewalOpportunity](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/CustomerSubscriptionClass.cls#L2)
- [ZuoraSubscriptionClass.createOrUpdateCustomerSubscription](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraSubscriptionClass.cls#L2)

テスト:

- [ZuoraSubscriptionClassTests.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraSubscriptionClassTest.cls)
- [CustomerSubscriptionClassTests.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/CustomerSubscriptionClassTests.cls)
