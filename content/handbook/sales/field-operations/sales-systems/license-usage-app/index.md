---
title: "ライセンス利用率 Salesforce アプリ"
description: "このページでは、ライセンス利用率 Salesforce アプリの概要を説明します。エンドユーザー向けの情報、よくある質問への回答、コード内の関連する技術的なロジックの場所を含みます。"
upstream_path: /handbook/sales/field-operations/sales-systems/license-usage-app/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-23T11:43:11+00:00"
---

## ライセンス利用率 Salesforce アプリの使い方

1. Salesforce で任意の顧客アカウントに移動します。
1. レイアウト上部の「License Utilization」ボタンをクリックします。 ![アカウントレイアウト上のライセンス利用率ボタン](/images/sales/field-operations/sales-systems/license-usage-app/buttonss_v2.png)
1. アカウントに関連するすべてのサブスクリプションについて、Billable と Entitled ユーザーの現在の使用状況を確認します。 ![アカウントレイアウト上のライセンス利用率ボタン](/images/sales/field-operations/sales-systems/license-usage-app/appss.png)
1. すべてのアカウントのライセンス利用率の概要を取得するには、「See License Utilization on all my Accounts」をクリックします。
1. ライセンス利用率アプリに関するフィードバックやアイデアを提供するには、「Give Feedback / Report Bug」をクリックし、Issue にコメントしてください。

## どの顧客が対象ですか？

利用率データは、以下のシナリオでライセンス利用率アプリに表示されます（各シナリオで同期が意図どおりに動作している前提）。

1. 顧客が Cloud Licensing を利用している。
1. 顧客が Cloud Licensing を利用していないが、GitLab バージョン 14.1 以上を使用しており、Operational Metrics が有効化されている。
1. 顧客が Offline Cloud Licensing を利用している。

## よくある質問（FAQ）

**質問: Billable Users は素晴らしいですが、いつ SMAU や他のアクティビティメトリクスを見られるようになりますか？**<br />
回答: プロダクトチームとデータチームは、これらのメトリクスをサブスクリプションレベルで取得するために取り組んでおり、取得できるようになり次第このダッシュに追加します！ [進捗はこちらで確認できます](https://docs.google.com/presentation/d/1_v4hxKdbL6--UjpjVdveGEGD_MjmUnBg0-OIU1R14m8/edit#slide=id.p)（GitLab 内部のみ）。

**質問: アカウントの 1 つを表示したところ、一部のサブスクリプションデータが「Not Available」となっています。何が問題ですか？**<br />
回答: 顧客がデータを送信する必要がある（Service Ping にオプトインしている **または** Cloud License 経由でデータを送信している）かつバージョン 14.1 以上である必要があるため、一部のサブスクリプションでは Billable User データがまだ利用できません。エアギャップホスティングのため、Billable User 数を受信できないサブスクリプションもあります。いずれの場合も、顧客のサブスクリプションデータが利用可能であるべきと思われる場合は [フィードバック Issue に投稿してください](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/1149)。

**質問: アカウントに関連するサブスクリプションが表示されている数よりも多い（または少ない）と予想していたのですが、なぜですか？**<br />
回答: アプリを表示することで顧客のサブスクリプションに関する Issue が明らかになったと思われる場合は、#Sales-Support Slack ルームで確認してください。

## データ定義

| データポイント         | 説明                                              | ソース              |
|-------------------------|-------------------------------------------------|---------------------|
| Plan Name               | サブスクリプション GitLab Tier                  | Zuora 360           |
| Hosting Type            | GitLab.com vs Self Managed                      | Data Team Dashboard |
| Licensed Users          | 販売したライセンス数                            | Zuora 360           |
| Billable Users          | 課金対象としてカウントされるユーザー数          | Service Ping        |
| Seat Price              | Seat Price の最大値                             | Zuora 360           |
| Overage Value           | 超過の場合: (Billable - Licensed) × Seat Price | 計算値              |
| Subscription Start Date | サブスクリプション期間の開始日                  | Zuora 360           |
| Subscription End Date   | サブスクリプション期間の終了日                  | Zuora 360           |
| Reported Date           | Billable User データを最後に受信した日付        | Service Ping        |

## どのように動作しますか？

まず、製品の使用状況データは、ライセンス利用率実行レコードへの .csv ファイル添付として Salesforce にアップロードされます。トリガーされると、実行は .csv を読み取りライセンス利用率レコードを挿入するクラスを呼び出します。これらのライセンス利用率レコードはそれぞれ、どの Zuora サブスクリプションに関連するか、そしてどの顧客サブスクリプションに関連するかを認識しています。次に、ライセンス使用と Zuora サブスクリプション製品チャージレコードから情報を収集し、関連する顧客サブスクリプションにスタンプを付けるプロセスを実行します。各アカウントレコードページには、別のページに移動するボタンが追加されています。このページには、そのアカウントに関連し、顧客にライセンスを付与するすべてのアクティブな顧客サブスクリプションが表示されます。

## ロジックの場所

- [LicenseUsageRun.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/LicenseUsageRun.trigger)
  - 「Execute Run」チェックボックスの値の変更を監視し、新しいライセンス利用率レコードの挿入プロセスを開始します。
- [LicenseUsageBatcher.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/LicenseUsageBatcher.cls)
  - `LicenseUsageRun.trigger` から呼び出されます。ライセンス利用率レコードの挿入をバッチに分割するために使用されます。
- [LicenseUsageCollector.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/LicenseUsageCollector.cls)
  - .csv ファイルの行をライセンス利用率レコードに変換し、挿入できるように返します。
- [CustomerSubscriptionInfoGatherer.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/CustomerSubscriptionInfoGatherer.cls)
  - 最新のライセンス利用率レコードとサブスクリプション製品チャージから情報をバッチで収集します。情報を関連する各顧客サブスクリプションにスタンプします。このクラスは、複数の製品があるかどうかの判定や、合計付与シート数の計算などの基本的なデータ処理も行います。これは `LicenseUsage.cls` でこのデータの表示を簡素化するために行われます。
- [LicenseUsage.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/LicenseUsage.cls)
  - `LicenseUsage.page` のコントローラ。アカウントに関連する顧客サブスクリプションのみを収集します。データが Seat Usage グラフを適切に表示することを保証します。
- [LicenseUsage.page](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/pages/LicenseUsage.page)
  - アカウントページのボタンから移動するページ。収集されたライセンス利用率データを持つすべての顧客サブスクリプションを表示します。
