---
title: "Go-To-Market 技術文書"
description: "このページは、セールスシステムが取り組み、開発、デプロイしてきた主要プロジェクトと自動化に関連するすべての技術文書のための、主要な GitLab ハンドブックページです。各プロジェクトの技術的な作業を取り巻くハイレベルなビジネス概要と技術的な詳細を含みます。"
upstream_path: /handbook/sales/field-operations/sales-systems/gtm-technical-documentation/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T10:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-27T12:08:00-04:00"
---

## この文書の使い方

以下の文書は機能ごとに整理されています。各セクションには、適切なビジネスプロセスページへのリンク、機能の関連する入力と出力、入力と出力を処理する特定のロジックへの参照が含まれます。

---

## Order Type と First Orders（GTM Systems Hub）

このセクションは、以下の事項に関する唯一の信頼できる情報源（SSoT）です。

- Salesforce における **Order Type** ロジック（7 つの値すべて）。
- **UPA First Order（UPA FO）** ロジック。
- **Domestic First Order（DFO）** ロジック。
- これらのフィールドが GTM システムとプロセス全体でどのように使用されるか。

### ビジネス概要

ハイレベルには、以下のとおりです。

- **Order Type** は、既存の顧客階層（UPA）における ARR の変化方法（land、expand、contract、churn）を示します。
- **UPA FO** は、所定の期間における Ultimate Parent Account レベルでの **最初の適格な有償サブスクリプション** を識別し、EDU/OSS を除外し、180 日のリターン顧客ポリシーを適用します。
- **Domestic First Order（DFO）** は、その **UPA および Domestic Region**（Domestic Region アカウントフィールド）下での最初の適格な New Business 有償サブスクリプションを識別します。

下流では、以下のとおりです。

- **セールスおよびファイナンス** は主に、報酬、C&C、予約分析のために **Order Type** と **UPA FO / DFO** を使用します。
- **Enterprise Applications / Field Ops** は、これらのフィールドを使用して自動化（たとえば Admin Contact Required、CSM スタンプ）を駆動します。
- **セールス** は、日々の営業でこれらのフィールドを解釈する方法について、First Orders – Sales Guide を使用すべきです。

## ARR

専用の [ARR 技術文書ページ](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/sfdc-booking-metric-fields/) を参照してください。

## Gainsight

専用の [Gainsight 技術文書ページ](/handbook/sales/field-operations/customer-success-operations/gainsight/gainsight-gtm/) を参照してください。

## Xactly

詳細は今後追加予定です。Xactly に新しいフィールドを取り込む必要がある場合は、Sales Systems プロジェクトの `AddFieldToXactlySales` [Issue テンプレート](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new?issue%5Bmilestone_id%5D=#) を活用してください。

## Territory Success Planning

**サポートするビジネスプロセス:** [Territory Success Planning](/handbook/sales/field-operations/sales-operations/)

**概要:** TSP の目標は、さまざまなデータソースから一連のステージングフィールドを一貫して最新の状態に保ち、所定の間隔でこれらの値を一般的な使用のために「Actual」フィールドセットにコピーすることです。これにより、継続的に変更を受け取りながらも、それらの変更を制御された方法で適用できます。これにより、例外を簡単に追跡することも可能になります。注: このプロジェクトは元々 ATAM と呼ばれていたため、フィールドの API 名は ATAM を参照しています。

**ロジックの場所:** [AccountJob.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/blob/master/force-app/main/default/classes/AccountJob.cls)

コードユニット:

- highestEmpsAndTSPAddress
- ownerTransfer

**入力:** DataFox、Zoominfo、手動で入力された住所と従業員データ、アカウント親子階層

**出力:** 以下は、Account オブジェクトに設定する 2 つのフィールドセットの概要です。Staging（TSP / ATAM）フィールドは、夜間に APEX ジョブを介して設定されます。Actuals は、ビジネス文書に記載された所定の間隔で設定されます。

| **データ名**  | **Actual - フィールド API 名**             | **TSP - フィールド API 名**     |
|---------------|--------------------------------------------|-----------------------------|
| Owner         | Owner                                      | ATAM_Approved_Next_Owner__c |
| Owner Role    | Owner.Role                                 | ATAM_Next_Owner_Role__c     |
| Owner Team    | Account_Owner_Team__c                      | ATAM_Next_Owner_Team__c     |
| Sales Segment | Ultimate_Parent_Sales_Segment_Employees__c | JB_Test_Sales_Segment__c    |
| Territory     | Account_Territory__c                       | ATAM_Territory__c           |

## Landed Addressable Market（LAM）

**サポートするビジネスプロセス:** [Landed Addressable Market（LAM）](https://internal.gitlab.com/handbook/sales/lam/)

**概要:** LAM は、すでに持っている顧客でどれだけ追加の拡張や成長を達成できるかの指標です。この値は、いくつかの入力に基づいて Salesforce で毎日計算されます。

**ロジックの場所:** [AccountJob.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/blob/master/force-app/main/default/classes/AccountJob.cls)、[AccountJob_SetParentLAMFields.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/blob/master/force-app/main/default/classes/AccountJob_SetParentLAMFields.cls)

コードユニット:

- AccountJob_SetZuoraSubInfo（すべてのメソッド）
- AccountJob_SetParentLAMFields（すべてのメソッド）
- AccountTrigger
- AccountClass.SetLAMOnAccounts

**入力:** Zuora、Zoominfo、LinkedIn、手動で入力された従業員データ、アカウント親子階層

**出力:** ソリューションで使用される各種フィールドと、その設定方法は以下のとおりです。

LAM 計算は 4 つの部分で実行されます。

1. AccountJob が実行され、すべてのアカウントのサブスクリプションデータを計算します。
1. AccountJob_SetZuoraSubInfo が実行され、各アカウントのサブスクリプションデータを計算します。
1. AccountJob_SetParentLAMValues が実行され、アカウント階層全体のサブスクリプションデータを計算します。
1. アカウントの LAM 計算が変更されると AccountTrigger が発火し、各 territory と geo のロジックに基づいて 'LAM__c' フィールドを設定します。

| **データ名**       | **Actual - フィールド API 名**                  | **データ型** | **設定者** |
|----------------|----------------|----------------|----------------|
| LAM                                 | LAM__c|Currency| AccountTrigger, AccountClass.SetLAMOnAccounts|
| LAM Tier (Industry)                 | LAM_Tier_Industry__c| Formula | SFDC |
| LAM Tier (Dev Count)                | LAM_Tier__c | Formula | SFDC |
| LAM Seat (Industry)                 | LAM_Seat_Industry__c | Formula | SFDC |
| LAM Seat (Dev Count)                | LAM_Seat__c | Formula | SFDC |
| LAM Price (Industry)                | LAM_Price_Industry__c| Formula | SFDC |
| LAM Price (Dev Count)               | LAM_Price__c | Formula | SFDC |
| LAM Max (Industry)                  | LAM_Max_Industry__c| Formula | SFDC |
| LAM Max (Dev Count)                 | LAM_Max__c | Formula | SFDC |
| LAM Dev Count | LAM_Dev_Count__c | Formula | SFDC |
| LAM: Ultimate Annualized Seat Price | LAM_Ultimate_Annualized_Seat_Price__c | Formula | SFDC |
| LAM:Ult. Avg Seat Price, this Account    | LAM_Ult_Avg_Seat_Price_this_Account__c | Formula | SFDC |
| LAM:Starter Avg Seat Price, this Account | LAM_Starter_Avg_Seat_Price_this_Account__c | Formula | SFDC |
| LAM: Starter Annualized Seat Price  | LAM_Starter_Annualized_Seat_Price__c | Formula | SFDC |
| LAM: Prevalent Tier Avg Price, this Acct | LAM_Prevalent_Tier_Avg_Price_this_Acct__c | Formula | SFDC |
| LAM: Prevalent Tier Avg Price, Acct Fam |LAM_Prevalent_Tier_Avg_Price_Acct_Fam__c | Formula | SFDC |
| LAM:Premium Avg Seat Price, this Account |LAM_Premium_Avg_Seat_Price_this_Account__c | Formula | SFDC |
| LAM: Premium Annualized Seat Price  | LAM_Premium_Annualized_Seat_Price__c | Formula | SFDC |
| LAM: Est Dev Percent by Industry    | LAM_Est_Dev_Percent_by_Industry__c | Formula | SFDC |
| LAM: Count of Ultimate Subscriptions| LAM_Count_of_Ultimate_Subscriptions__c | Currency | AccountJob_SetZuoraSubInfo |
| LAM: Count of Ultimate Subs, Acct Family| LAM_Count_of_Ultimate_Subs_Acct_Family__c  | Currency | AccountJob_SetParentLAMFields |
| LAM: Count of Starter Subscriptions | LAM_Count_of_Starter_Subscriptions__c  | Currency | AccountJob_SetZuoraSubInfo |
| LAM: Count of Starter Subs, Acct Family | LAM_Count_of_Starter_Subs_Acct_Family__c | Currency | AccountJob_SetParentLAMFields |
| LAM: Count of Premium Subscriptions | LAM_Count_of_Premium_Subscriptions__c | Currency | AccountJob_SetZuoraSubInfo |
| LAM: Count of Premium Subs, Acct Family  | LAM_Count_of_Premium_Subs_Acct_Family__c | Currency | AccountJob_SetParentLAMFields |
| LAM:Aggregate Annual Ultimate Seat Price | LAM_Aggregate_Annual_Ultimate_Seat_Price__c | Currency | AccountJob_SetParentLAMFields |
| LAM: Aggregate Annual Starter Seat Price | LAM_Aggregate_Annual_Starter_Seat_Price__c | Currency | AccountJob_SetParentLAMFields |
| LAM: Aggregate Annual Premium Seat Price | LAM_Aggregate_Annual_Premium_Seat_Price__c | Currency | AccountJob_SetParentLAMFields |
| LAM: Acct Below Land Line            | LAM_Acct_Below_Cut_Line_Form__c | Formula | SFDC |
| CARR (Acct Family)                  | CARR_Acct_Family__c | Formula | SFDC |
| CMRR (Acct Family)                  | CMRR_All_Child_Accounts__c | Currency | AccountJob_SetParentLAMFields |
| Number of Licenses Sold (This Account)    |  Number_of_Licenses_This_Account__c | Number | AccountJob_SetZuoraSubInfo |
| Ultimate license count              | Ultimate_License_Count__c | Number | AccountJob_SetZuoraSubInfo |
| Starter license count               | Starter_License_Count__c | Number | AccountJob_SetZuoraSubInfo |
| Prevalent Tier (Account)            | Prevalent_Tier__c | Formula | SFDC |
| Prevalent Tier (Hierarchy)          | Prevalent_Tier_Hierarchy__c | Formula | SFDC |
| Premium license count               | Premium_License_Count__c | Number | AccountJob_SetZuoraSubInfo |
| Parent LAM: Aggregate Developer Count | Aggregate_Developer_Count__c | Formula | SFDC |
| Estimated Developer Count | Estimated_Developer_Count__c | Formula | SFDC |
| Parent LAM: Sum Ultimate Seat Price | Parent_LAM_Sum_Ultimate_Seat_Price__c | Currency | AccountJob_SetParentLAMFields |
| Parent LAM: Sum Starter Seat Price  | Parent_LAM_Sum_Starter_Seat_Price__c | Currency | AccountJob_SetParentLAMFields |
| Parent LAM: Sum Premium Seat Price  | Parent_LAM_Sum_Premium_Seat_Price__c | Currency | AccountJob_SetParentLAMFields |
| Parent LAM: Sum of Num of Licenses  | Parent_LAM_Sum_of_Num_of_Licenses__c | Number | AccountJob_SetParentLAMFields |
| Parent LAM: Max ZI Number of Developers | Parent_LAM_Max_ZI_Number_of_Developers__c | Number | AccountJob_SetParentLAMFields |
| Parent LAM: Max Potential Users     | Parent_LAM_Max_Potential_Users__c | Number | AccountJob_SetParentLAMFields |
| Parent LAM: LinkedIn Developer Count| Parent_LAM_Max_Decision_Makers_LinkedIn__c | Number | AccountJob_SetParentLAMFields |
| Parent LAM: Industry (Acct Heirarchy) | Parent_LAM_Industry_Acct_Heirarchy__c | Picklist | AccountJob_SetParentLAMFields |
| Parent LAM: Count of Ultimate Subs  | Parent_LAM_Count_of_Ultimate_Subs__c | Number | AccountJob_SetParentLAMFields |
| Parent LAM: Count of Starter Subs   | Parent_LAM_Count_of_Starter_Subs__c | Number | AccountJob_SetParentLAMFields |
| Parent LAM: Count of Premium Subs   | Parent_LAM_Count_of_Premium_Subs__c  | Number | AccountJob_SetParentLAMFields |

## Contact Ownership

**サポートするビジネスプロセス:** これは、私たちの [contact ownership rules](/handbook/sales/field-operations/gtm-resources/) をサポートしています。

**概要:** Contact Ownership コードの目標は、connacts が salesforce 内の適切なユーザーによって自動化された方法で所有されるようにし、チームメンバーによる作業を必要とせずに contact ownership を維持することです。

**ロジックの場所:** [ContactJob](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/blob/master/force-app/main/default/classes/ContactJob.cls)
コードユニット:

- maintainContactOwnership

**入力:** Contact Owner、Account Owner、Account SDR Assigned、Account Type、Sales Segment

**出力:** Contact Owner

## Salesforce SAFE: レコード共有と可視性設定

詳細は内部の [文書](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#heading=h.7meftl8rz0pi) を参照してください。

商談レコードの手動共有については、Field Operations ハンドブック [こちら](/handbook/sales/field-operations/gtm-resources/#how-to-share-an-opportunity) を参照してください。

## クォート承認システム

**サポートするビジネスプロセス:** 割引承認

**概要:** [Deal Approval Matrix](https://docs.google.com/document/d/1-CH-uH_zr0qaVaV1QbmVZ1rF669DsaUeq9w-q1QiKPE/edit) に従い、クォートは割引率と期間の長さに応じて異なる管理レベルによって割引の承認を受ける必要があります。これを実現するために、クォートに各潜在的承認者をスタンプする自動化を作成し、必要な承認を決定するコードを修正し、Salesforce での実際の承認プロセスを修正しました。

**Quote Management Stamp** Quote が挿入されると、関連する商談のオーナーを取得します。次に、オーナーのマネージャーと、各マネージャーの 5 階層上までのマネージャーのマネージャーを見つけます。最初のアクティブな Regional Director、Area Sales Manager、Vice President を Quote に記録します。これらのルックアップフィールドは、必要に応じて承認プロセスで使用されます。

**Quote Approval Code** これは Quote（API 名: zqu__Quote__c）フィールドのテーブルで、quoteApprovals の再計算をトリガーし、何が起こるべきかを示しています。

|**フィールド API 名**|    **必要な動作**|
|----|----|
|Rate_Plan_Count__c|変更|
|zqu__Previewed_TCV__c|変更|
|zqu__Previewed_SubTotal__c|変更|
|zqu__Previewed_Discount__c|変更|
|Non_Standard_Contract_Terms__c|変更|
|Reseller_PO_Status__c|変更|
|zqu__PaymentTerm__c|変更|
|zqu__Previewed_Total__c|変更|
|zqu__Previewed_Discount__c|変更|
|Quote_Amendment_Last_Modified_Date__c|変更|
|zqu__InitialTerm__c|変更|
|zqu__RenewalTerm__c|変更|
|X_Trigger_Quote_Approval_Check__c|true になる|

これらのイベントのいずれかが発生すると、すべての「Required_Approvals」フィールド（Required_Approvals_From_CEO__c、Required_Approvals_From_CFO__c、Required_Approvals_From_CRO__c、Required_Approvals_From_CS__c、Required_Approvals_From_Legal__c、Required_Approvals_From_VP_of_Channel__c、Required_Approvals_From_VP_of_Sales_RD__c、Required_Approvals_From_RD__c、Required_Approvals_From_ASM__c）がクリアされます。これらは、どの管理レベルがページレイアウトで Quote を承認する必要があるかを示すリッチテキストエリアフィールドです。
次に、Quote に関連するすべての該当する Quote Rate Plan Charges（API 名: zqu__QuoteRatePlanCharge__c）がクエリされます。これらは、必要な承認を決定するために必要な期間、製品、割引情報を保持しているものです。[Deal Approval Matrix](https://docs.google.com/document/d/1-CH-uH_zr0qaVaV1QbmVZ1rF669DsaUeq9w-q1QiKPE/edit) に従って、Quote Rate Plan Charge が必要とする管理レベルを決定し、適切な「Required_Approvals」フィールドに割引率、種類、期間をスタンプします。同様のロジックは、プロフェッショナルサービス製品に関連する Quote Rate Plan Charges に対しても実行されます。
最後に、Quote の Approval_Stage__c フィールドは、承認が必要かどうか、承認が不要かどうか、または承認されたかを記録します。

**Quote Approval Process**
これは Salesforce の組み込みの承認プロセス機能を利用しています。
Zuora Quotes に対して 2 つの承認プロセスがあり、1 つは割引なし、もう 1 つは割引ありのものです。
正しい承認プロセスに入るには、ページレイアウト上の「Submit for Approval」ボタンを使用して Quote を送信する必要があります。

- 割引なし承認プロセス
  - Quote の Approval Stage が「Approvals Not Required」または null の場合、Approval Stage は「In Review」に更新され、Quote のオーナーに承認のための送信を確認するメールが送信されます。次に、Special Terms and Notes がある場合、または Requires Deal Desk Review としてフラグが立てられている場合、Deal Desk チームのメンバーが承認する必要があります。これらがどちらも該当しない場合、取引は自動承認されます。承認時に、Quote のオーナーには承認を通知するメールが送信され、Approval Stage は「Approved」に更新されます。Quote が拒否された場合、Approval Stage は「Rejected」に設定され、オーナーに通知メールが送信されます。
- 割引あり承認プロセス
  - Quote の Approval Stage が「Approvals Required」または「Rejected」の場合、Approval Stage は「In Review」に更新され、Quote のオーナーに承認のための送信を確認するメールが送信されます。次に、「Required_Approvals」フィールドに基づいて、Quote はそのステップの担当者による承認を待ちます。すべての承認が取得されると、Approval Stage は「Approved」に設定され、Quote のオーナーにメールが送信されます。承認ステップのいずれかが拒否された場合、Approval Stage は「Rejected」に設定され、オーナーにもメールが送信されます。

**ロジックの場所:**

- [ZuoraQuoteClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraQuoteClass.cls)
コードユニット:
  - stampManagerStack
- [ZuoraQuoteClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraQuoteClass.cls)
コードユニット:
  - quoteApprovals
- [Salesforce Approval Process Setup](https://gitlab.lightning.force.com/lightning/setup/ApprovalProcesses/home)
承認プロセスの管理対象:
  - Quote（インストール済みパッケージ: Zuora Quotes）

## Salesforce Chatter から Case

**サポートするビジネスプロセス:** フィールドチームは、salesforce 内 [(within salesforce)](/handbook/sales/field-operations/sales-operations/) の特定の salesforce レコードに関する懸念に対処するための合理化されたプロセスを必要としています。これは、ファイナンスチームがレコード固有の請求 Issue への対処を支援するため、また Community Advocate チームがチームに寄せられるリクエストの流入を管理するためにも使用されます。

**概要:** Chatter To Cases 機能の目標は、フィールドが活用できる合理化されたコミュニケーションチャンネルを提供すると同時に、フィールドからサポートチームメンバーに送信されるリクエストを管理するための合理化されたケース管理システムを提供することです。チームメンバーが salesforce で適切なタグを使用すると、salesforce ケースレコードが自動的に作成されます。これらのレコードが作成されると、サポートチームメンバーはそれぞれのケースを処理して、フィールドチームのニーズと懸念に対処できます。

**入力:** Salesforce 内の Chatter テキスト

**出力:** Salesforce Case レコード

**ロジックの場所:**
コードユニット:

- Triggers
  - [ChatterFeedCommentTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/ChatterFeedCommentTrigger.trigger)
  - [ChatterFeedItemTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/ChatterFeedItemTrigger.trigger)
- Clases
  - [ChatterFeedCommentClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ChatterFeedCommentClass.cls)
  - [ChatterFeedItemClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ChatterFeedItemClass.cls)
- Tests
  - [ChatterFeedItemTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ChatterFeedItemTest.cls)
  - [ChatterFeedCommentTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ChatterFeedCommentTest.cls)

**サポートされるグループ**

- `@sales-support`: Deal Desk チームがセールスチームからのインバウンドリクエストを管理するために使用します。
- `@billing ops`: 請求関連のインバウンドリクエストを管理するために請求チームが使用します。
- `@revenue`: 商談と収益の記録方法をレビューするために収益チームが使用します。[詳細な回答はこちら](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/859#note_386593491)。
- `@SMB Flat Renewals`: SMB チームによるフラット更新サポートに使用されます。使い方の詳細は、ハンドブックのこのセクションを参照してください。
- `@Partner Help Desk`: Channel Partner Help Desk（PHD）チームが使用します。詳細は [ハンドブックのこのセクション](/handbook/sales/field-operations/channel-operations/#partner-help-desk-support-and-communication) を参照してください。
- `@Sales-Comp`: 報酬チームが使用し、特定の商談に関する分割や報酬などについてアウトリーチするために使用すべきです。
- `@Partner-Ops`: パートナーオペレーションチームが使用し、アウトリーチするために使用すべきです - ビジネスセクションへのリンクは近日公開予定
- `MktgOps-Support`: マーケティングオペレーションチームが使用し、アウトリーチするために使用すべきです - ビジネスセクションへのリンクは近日公開予定

**グループを追加する手順:**

- Salesforce の制限により、マイナーアップデートの多くは本番環境で手動で実装する必要があります
- (本番環境: デプロイ前) エンドユーザーが Salesforce で chatter できるようにしたいエイリアスを持つ Chatter Group を作成します。
- (本番環境: デプロイ前) Case オブジェクトの `Origin` フィールドにピックリスト値を追加します
- (Changeset) `ChatterFeedCommentClass` および `ChatterFeedItemClass` を更新して、Salesforce 内の chatters における Chatter Group の使用を監視します
- (Changeset) `CaseClass` を更新して新しいグループ Id を含めるようにし、このキューが所有するように case owner を更新します。
- (Changeset) ケースを自動的にケースを処理するユーザー名に切り替えるまで、ケースを所有するキューを作成します。
- (本番環境: デプロイ後) キューメンバーとメールオプションをリクエスト者と共にレビューします

**関連エピック**

- [@Sales-Ops Case Epic](https://gitlab.com/groups/gitlab-com/sales-team/field-operations/-/epics/7)

## 法務リクエストシステム

**サポートするビジネスプロセス** セールスサイクル。GitLab のセールス担当者が法務の知識、意見、またはアクションを必要とする Issue に遭遇した場合。

**概要** セールス担当者は、Salesforce の商談ページレイアウトから直接、法務チーム向けのケースを迅速かつ簡単に作成できます。法務チームは、自分たちのために作成されたケースの数や、自分の名前になっているケースの数などを確認するための Salesforce ダッシュボードにアクセスできます。各商談ページの「Legal Request」ボタンをクリックすると、法務チームが知りたいいくつかの質問を尋ねるページに移動します。ページが送信されると、Origin が「Legal Request」とマークされたケースが作成されます。法務チームは Origin が「Legal Request」と等しいケースを表示するダッシュボードを持ち、そこから割り当ておよびアクションを取ることができます。

**ロジックの場所**

- Custom Buttons:
  - [In Setup, under Opportunity, "Buttons, Links, and Actions", Legal Request](https://gitlab.my.salesforce.com/00b4M000001ZNps)
- Visualforce Pages:
  - [LegalCaseCreate.page](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/pages/LegalCaseCreate.page)
- Apex Classes:
  - [LegalCaseCreateController.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/LegalCaseCreateController.cls)

## プライマリクォートシステム

**サポートするビジネスプロセス** セールスサイクルと取引に関する財務プロセス。

**概要** Salesforce 内の商談にプライマリとマークされたクォートが 1 つだけあるように保証しています。同じトランザクション内でプライマリとマークされた商談に複数のクォートが挿入される場合、リストの最初のものだけがプライマリになります。クォートがプライマリとして挿入されている場合、既存のプライマリクォートがあれば、既存のものはプライマリでなくなり、新しいものが新しいプライマリになります。同じ商談下の複数のクォートが同じトランザクション内でプライマリになるように更新される場合、エラーメッセージにより更新が阻止されます。プライマリクォートは削除を許可されません。どのクォートがプライマリかを変更するには、プライマリにしたいクォートに移動し、そのように更新するだけで、以前のプライマリクォートは自動的にプライマリでなくなるように更新されます。

**ロジックの場所**

- [ZuoraQuoteClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraQuoteClass.cls)
コードユニット:
  - primaryCheck

## 商談ステージ進行のトラッキング

**サポートするビジネスプロセス** セールスサイクルと分析。

**概要** この機能の目的は、セールスプロセスのステージを通じた商談の進行を捕捉することです。これをサポートするために、商談がステージを前進または後退するときに、各ステージのチェックボックスと日付スタンプが自動的に設定されます。トラッキングはステージ 0-Pending Acceptance から始まります。商談が前進してステージをスキップする場合、すべてのスキップされたステージは、停止しているステージと同じ日付でスタンプされます。Closed Lost と Unqualified の場合、チェックと日付は実際に到達したステージにのみ適用されます。データ損失と混乱を避けるため、ステージ進行のトラッキングは、ステージを通じて最初に通過したときに 1 回だけ実行されます。

**ロジックの場所**

- 機能が本番環境に入った時点で追加予定

## 締まった会計期間の商談検証ルール

**サポートするビジネスプロセス**  セールス財務と分析

**概要** 目標は、商談の終了日が会計締め日（毎月 10 日）を過ぎた時点で salesforce 内の商談母集団を静的にすることで、取締役会に報告されたすべてのものと一致するようにすることです。また、報酬計算、予約レポート、Adaptive 予約データなどの下流への影響があるため、予約データが変更されないようにし、Deal Desk と Finance からゴーサインを得てから予約関連の商談フィールドをロックするメカニズムを構築する必要があります。過去の期間に小さな調整（必要な場合）がある場合、適切な変更を行うための特定の permission set があります。

**ロジックの場所**

- [Validation Rule](https://gitlab.my.salesforce.com/03d4M000001113V?setupid=OpportunityValidations)

## アカウントオーナー移管時に Salesforce が過去の商談オーナーを移管するのをブロック

**サポートするビジネスプロセス:** 信頼性が高く正確な履歴データを分析チーム、セールス組織、会社全体に提供するためには、商談がクローズしたら、過去の商談と関連情報が変更されないようにする必要があります。

**概要:** このブロックロジックの目標は、Salesforce がシステムに組み込んだバックドアを閉じることです。クローズした商談の情報が変更されないように多数の validation rule が設定されていますが、アカウントを移管する際に過去の商談オーナー（およびオーナーフィールドから派生するフィールド）を変更することが可能です。アカウントのオーナーを変更できた人なら誰でも、本来編集できないはずの過去の商談データを変更することができました。このロジックは、過去の商談に影響を与えずにユーザーがこのアカウントオーナーシップ移管を完了できるようにすると同時に、GitLab のさまざまなビジネスチームが月末締めに商談のオーナーを手動で更新できるようにします。

**入力:** オーナーシップが変更されているアカウントレコード

**出力:** ユーザーがオーナーを変更しようとした場合、商談オーナーを元のオーナーに戻します。

**ロジックの場所:**

- Code Units:
  - ProtectClosedOppOwnersBefore
  - ProtectClosedOppOwnersAfter
- Triggers
  - [AccountTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/AccountTrigger.trigger)
- Classes
  - [AccountClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClass.cls)
- Tests
  - [AccountClassTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClassTest.cls)

### Order Type システム

**ビジネスプロセス:**  
すべての商談を 7 つの Order Type 値のいずれかに分類することで、次のことを可能にします。

- **lands vs expansions vs contractions vs churn** を区別する。
- 正確な **報酬**、**C&C**、**First Order** レポートをサポートする。

このセクションでは、Salesforce における実装ロジックを要約しています。

#### 依存フィールド（Salesforce）

Order Type ロジックで使用される主要フィールドは以下のとおりです。

| オブジェクト  | フィールド（ラベル／概念）         | 目的                                                                                      |
|-------------|------------------------------------|-------------------------------------------------------------------------------------------|
| Account     | Ultimate Parent Account            | FO および Order Type のためにアカウントを階層（UPA）にグループ化します。                  |
| Account     | First Order Available              | このアカウントファミリーに UPA FO がまだ利用可能かどうかを示します（夜間更新）。          |
| Account     | Domestic First Order Available     | この UPA & Domestic Region に対して DFO がまだ利用可能かどうかを示します（夜間更新）。   |
| Account     | Domestic Region                    | DFO ロジックで使用される Domestic Region。                                                |
| Opportunity | Type（Subscription Type）          | New Business / Add-On / Renewal。                                                         |
| Opportunity | Net ARR                            | 符号（正、ゼロ、負）に使用されます。                                                      |
| Opportunity | Recurring Amount                   | マッピングロジックの一部で Net ARR とともに使用されます。                                  |
| Opportunity | Opportunity Category               | Standard、Ramp Deal、Contract Reset、Credit、Decommission など。                          |
| Opportunity | Order Type                         | スタンプされた Order Type（プライマリフィールド）。                                       |
| Opportunity | Order Type（Live）                 | 年内調整に使用される Live Order Type。会計年度終了後は更新されません。                    |
| Opportunity | Order Type Override                | 手動オーバーライドフィールド（厳密なプロセスを伴い稀にしか使用されません）。              |
| Opportunity | New Logo Eligible                  | 商談が FO / New - Connected / 適格な Growth land になり得るかどうかを示すフラグ。         |
| Opportunity | Domestic First Order               | この商談がその UPA & Domestic Region の DFO であるかどうかを示します。                    |
| Opportunity | Link to Decommissioned Opportunity | Decommission 商談で別のレコードから Order Type と DFO を継承するために使用されます。     |

#### ロジック概要（ハイレベル）

以下は、**Subscription Type** と **Net ARR の符号** によってグループ化された、実装されたロジックの Salesforce 中心のサマリーです。

##### New Business

**Net ARR が正**

- **New Logo Eligible = TRUE** の場合:
  - 180 日のウィンドウ内で UPA 下の最初の適格な商談 → `New - First Order`（UPA FO）。
  - すでに UPA FO が存在する場合、同じ UPA 下の別の Account における最初の適格な商談 → `New - Connected`。
  - 同じ Account でその後の適格な商談 → `Growth`。
- **New Logo Eligible = FALSE** の場合:
  - Order Type = `Growth`。

ストレージのみの New Business 商談（たとえば、商談上のストレージ製品のみ）は **New - First Order** や **New - Connected** には **なりません**。これらは **Growth** として扱われます。

**Net ARR が負**

Subscription Type = New Business で、以下のようなカテゴリの場合:

- Standard  
- Internal Correction  
- Contract Reset  
- Ramp Deal  
- Contract Reset/Ramp Deal  
- CloudBlue Public Offer  
- Bad Debt  

→ Order Type = `Contraction`。

**Decommission**

- Decommission 商談が別の商談にリンクされている場合:
  - Order Type はリンク先商談の **Order Type (Live)** から継承されます。
  - Decommission 商談の Domestic First Order は、**Opportunity to Decommission** ルックアップを介して元となった商談の DFO 値から継承されます。これにより、元の FO/DFO 取引が debook されたときに、Finance が「negative DFOs」（first-order ビジネスの削除）を追跡できます。
- リンクが欠落または無効な場合:
  - このロジックでは Order Type (Live) と DFO は変更されません。修復はデータクリーンアップを介して処理されます。
- Decommission が作成された後の元となる商談の DFO 値の変更は、Decommission の DFO を再同期しません。Decom は作成時に持っていた値を保持します。

##### Add-On

**Net ARR が正**

- Order Type = `Growth`。

**Net ARR が負**

- Order Type = `Contraction`、ただし `PS / Other` として明示的にマップされた稀なエッジケース（たとえば、一部の非標準的なクレジットシナリオ）は例外。

**Net ARR = 0、Recurring Amount > 0**

- 通常 **PS / Other** です。ARR を変更しない非繰り返しまたは技術的修正であるためです。

##### Renewal

**Net ARR が正**

- Order Type = `Growth`（ARR を維持または増加する更新）。

**Net ARR が負**

- Open または Closed Won の間:
  - Order Type = `Contraction`。
- Closed Lost に移動した場合:
  - 関連サブスクリプションの終了日後にアカウントファミリーに **アクティブなサブスクリプションが残っていない** 場合 → `Churn - Final`。
  - アカウントファミリーに **1 つ以上のアクティブなサブスクリプション** が残っている場合 → `Churn - Partial`。

**Net ARR = 0、Recurring Amount > 0**

- **フラット更新** として扱われ、`Growth` にマップされます。ビジネスルールでカバーされる特殊なケースもあります。

#### 簡略化されたシナリオ表

| Subscription Type | Net ARR 符号 | カテゴリ例                                       | 典型的な Order Type（Open / Closed Won）       | チャーン挙動（Closed Lost の場合）                          |
|-------------------|-------------:|-----------------------------------------------|----------------------------------------------|--------------------------------------------------------|
| New Business      | 正           | Standard、Ramp Deal、Internal Correction      | FO 履歴と適格性に基づき `New - First Order` / `New - Connected` / `Growth` | 後の負 ARR 更新がチャーン分類を駆動する可能性あり |
| New Business      | 負           | Standard、Internal Correction、Contract Reset、Ramp Deal、CB Offer、Bad Debt | `Contraction`                                | `Contraction`                                          |
| New Business      | 任意         | Decommission                                  | リンクされた商談から継承                     | リンクされた商談から継承                              |
| Add-On            | 正           | Standard、Ramp Deal、Internal Correction      | `Growth`                                     | 後の更新がチャーン分類を駆動                          |
| Add-On            | 負           | Standard、Credit、Contract Reset、Ramp Deal   | `Contraction`                                | `Contraction`                                          |
| Add-On            | ゼロ         | Standard / 修正、recurring amount > 0         | 通常 `PS / Other`                            | 通常 `PS / Other`                                      |
| Renewal           | 正           | Standard、Ramp Deal、Credit、Contract Reset   | `Growth`                                     | n/a                                                    |
| Renewal           | 負           | Standard、Ramp Deal、Credit、Contract Reset   | `Contraction`                                | 残りサブスクリプションに応じて `Churn - Partial` または `Churn - Final` |
| Renewal           | ゼロ         | フラット更新（recurring amount > 0）          | `Growth`                                     | 関連サブスクリプションが後に完全に終了した場合のみチャーン |

#### Domestic First Order ロジック（DFO – ハイレベル）

**Domestic First Order（DFO）** は **New Business** 商談に対して計算されます。

- Type = New Business。  
- Net ARR が正。  
- ストレージのみではない。  
- EDU/OSS ではない。  
- Order Type 2.3 ルールでランドとして適格（New - First Order / New - Connected / Growth、Decommission ではない）。  
- 同じ **UPA および Domestic Region**（Domestic Region アカウントフィールド）下で、180 日ポリシーウィンドウ内で最初のそのようなランド。

主要な性質:

- UPA ごとに同時に **正確に 1 つの UPA FO** が存在します。  
- **UPA ごとに複数の DFO が許可されます** が、**Domestic Region ごとに 1 つの DFO のみ** です。  
- DFO は商談にスタンプされます。**Domestic First Order Available** はアカウントで追跡され、夜間ジョブによって更新されます（クローズ後の更新には **最大 24 時間** かかる場合があります）。  
- 180 日のリターン顧客ルールと FO/DFO の適格性は、**有償サブスクリプション**（現在の MRR > 0）に基づいて評価されます。**MRR が $0** のサブスクリプションは、First Order の目的で顧客を「アクティブ」にせず、180 日タイマーをリセットせず、FO/DFO の適格性をブロックしません。

**Closed Lost 商談での DFO**

- 商談が **Domestic First Order = TRUE** で、後に **Closed Lost** に移動した場合、その商談の Domestic First Order 値は **TRUE** のままで、クリアされません。  
- Closed Lost の DFO 商談は、アカウントが将来の DFO に対して不適格になることは **ありません**:
  - アカウントの **Domestic First Order Available** は TRUE のままです（通常の適格性ルールに従う）。
  - その Domestic Region 内の次の適格なオープン New Business 商談も **Domestic First Order = TRUE** とマークされる可能性があります。  
- これは **Order Type** の挙動（商談に永続化し、取引が勝ったか負けたかに関係なく）と同様です。

**クロスリージョンの例: DFO = TRUE、Order Type = New – Connected**

UPA FO と DFO は異なるレベルで評価されるため:

- UPA FO と Order Type は UPA 全体を見て「この階層は以前に first order があったか？」を問います。
- DFO は単一の Domestic Region を見て「この UPA + Domestic Region は以前に適格な first order があったか（および該当する場合、地域別の 180 日ルールを通過したか）？」を問います。

例:

- UPA に 2 つのアカウントがある:
  - Account A（Domestic Region = AMER）
  - Account B（Domestic Region = ANZ）
- 最初の適格な New Business 商談が Account B（ANZ）で作成される:
  - すべての「first order」基準を満たす。
  - UPA にはまだ事前の FO がない。
  - Order Type = New – First Order。
  - Domestic First Order = TRUE for ANZ。
- 後に、同じ FO サイクル内で初めての適格な New Business 商談が Account A（AMER）で作成される:
  - Account A のすべての「first order」基準を満たす。
  - UPA にはすでに Account B で New – First Order があるため、階層の観点からこれは connected な new logo になります。
  - Order Type = New – Connected。
  - AMER に以前の適格な FO がなく（および該当する地域別 180 日ルールを満たす）場合、Domestic First Order = TRUE for AMER。

このシナリオでは、Account A の商談は Domestic First Order = TRUE および Order Type = New – Connected になります。DFO は「この UPA のこのリージョンで最初」であり、Order Type は UPA 内の最初の FO（New – First Order）と、その同じ UPA 内の追加アカウントでの最初の FO（New – Connected）を区別します。

#### ランタイムとバックフィルの挙動

- Order Type 2.3 ロジックは Salesforce に実装されており、関連フィールドが変更されたときに実行されます。  
- 一部の過去のバックフィルが実行されました（たとえば、ステージ 3 以降の商談と対象を絞った負の ARR 修正）。これらの基準を一度も満たしていない商談には、レガシー値が表示される場合があります。  
- 会計年度終了後、**Order Type (Live)** は、報酬とレポートの整合性を保つために過去の商談では更新されません。  
- Decommission 商談での DFO 継承および Closed Lost DFO 商談での永続性は、Order Type Redesign プロジェクトの Issue ごとに実装およびテストされています。

## リードセグメンテーション

**サポートするビジネスプロセス:** [セールスセグメンテーション](/handbook/sales/field-operations/gtm-resources/)

**概要:** リードは、会社の従業員数に基づいて異なるセールスセグメントに分類され、適切なセールスパーソンが追求できるようにする必要があります。会社の規模を取得するためのさまざまな情報ソースがあるため、それらの階層も確立する必要があります。

| **情報ソース** | **Salesforce Lead フィールド API 名** |
| ---- | ---- |
| Lean Data | Lean_Data_Matched_Account_Sales_Segment__c |
| Web Portal | Web_Portal_Purchase_Company_Size__c |
| Marketing | Employee_Buckets__c |
| DemandBase | DB_Employee_Count__c |
| Zoominfo|    ZI_Employees__c |
| Salesforce User | NumberOfEmployees |

**ロジックの場所:** [LeadClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/LeadClass.cls)
コードユニット:

- determineSegment

## Force Management / Command of The Message / Command Plan

**サポートするビジネスプロセス:** [Command of The Message](/handbook/sales/command-of-the-message/)

**概要:** この Visualforce ページとサポートコントローラは、セールスチームが商談で必要な情報を埋めるための使いやすいボタンを提供します。

**ロジックの場所:**

- [ForceManagement.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ForceManagement.cls)
- [ForceManagement.page](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/pages/ForceManagement.page)

## 線形アトリビューション

詳細は内部の [文書](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#heading=h.80dgbbehbanq) を参照してください。

## Mavenlink

**サポートするビジネスプロセス:** これは私たちのプロフェッショナルサービスチームをサポートします。プロジェクトの調整、プロジェクトに費やした時間、関連タスク、スケジュールなどを Mavenlink プロジェクトで活用しています。

**概要:** 以下のコードセクションは、Salesforce の Mavenlink プロジェクトが作成され、それが Mavenlink によって提供される拡張クラスを活用して Mavenlink にプッシュされるプロセスを制御します。現在、以下のシナリオのいずれかが満たされた場合、Mavenlink プロジェクトが作成されます。

- フラグ付きの Quote Rate Plan Charge（Mavenlink フラグ）を持つプライマリクォートが作成され、関連商談がステージ 5 以降にあり、関連商談に既存の Mavenlink プロジェクトがまだない場合
- 商談がステージ 5 以降に移動し、そのプライマリクォートにフラグ付きの Quote Rate Plan Charge（Mavenlink フラグ）があり、関連商談に既存の Mavenlink プロジェクトがまだない場合
- 上記 2 つの場合に関連する Mavenlink プロジェクトがある場合、プロジェクトは変更された新しい更新情報で更新されます。

**ロジックの場所:**

- [OpportunityClass.CreateAndMaintainMavenLinkProject](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls#L176)
- [QuoteRatePlanChargeClass.CreateAndMaintainMavenLinkProject](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/QuoteRatePlanChargeClass.cls#L3)
- [MavenlinkProjectClass.upsertMavenLinkProject](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/MavenlinkProjectClass.cls)
- [GitlabMavenlinkExtension.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/GitlabMavenlinkExtension.cls)
- [OpportunityClassTests.CreateAndMaintainMavenLinkProject](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClassTests.cls#L227)
- [QuoteRatePlanChargeClassTest.CreateAndMaintainMavenLinkProject](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/QuoteRatePlanChargeClassTest.cls#L3)
- [GitlabMavenlinkExtensionTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/GitlabMavenlinkExtensionTest.cls)

## 商談分割

**サポートするビジネスプロセス:** これは、私たちの報酬チームをサポートする商談分割の自動作成と検証をサポートします。これにより、チームメンバーが関連付けられている商談に対して自動的に報酬が支払われるようになります。

**概要:**

- **分割作成と自動化**
- 以下では、商談分割に関するいくつかの重要なポイントを確認し、その下では自動化をエンドユーザーストーリーで要約しようと試みます。
- 任意の商談の分割は、以下のチームのいずれかの個人によってのみ作成できます。明確にすると、現在の権限は誰が商談分割を作成すべきかを示すものではなく、現在の権限セット割り当てに基づいて誰が作成できるかを示しています。
      - 報酬チーム
      - Deal Desk
      - セールスオペレーション
      - システム管理者
- `Account Executives` / `Opportunity Owner`
  - これらすべての分割は、``Opportunity - Incremental ACV 2`` 分割タイプにのみ表示されるべきです
  - Opportunity Owner が更新されると、Opportunity Owner の分割が更新されます。
  - Owner に対する分割が必要な場合、承認されたユーザーによって分割を手動で作成する必要があります
- `Sales Development Representatives` / `Primary Solutions Architect` / `Channel Manager`: 基本的な分割自動化ルール
  - 商談の対応するルックアップフィールドが入力されると（作成または更新）、ルックアップフィールド内のユーザーに対して 100% の分割が作成され、商談に追加されます
  - 上記のルックアップフィールドの入力は、この自動化のロールアウト前と同じルールとプロセスに従います
  - ルックアップフィールドがユーザー A からユーザー B に変更されると、その商談のそのユーザーロールに対するすべての分割が削除され、ユーザー B に 100% の分割が割り当てられます
  - ルックアップフィールドがユーザーから Null/Empty に変更されると、その商談のそのユーザーロールに対するすべての分割が削除され、その商談にそのチームロールに対する分割はなくなります
  - これらのロールに対して分割が必要な場合、承認されたユーザーによって分割を手動で作成する必要があります
- `Customer Success Manager` の特別なユースケース
  - これは一部のチームでは CSM スタンププロセスを通じて処理され、他の CSM チームでは SA チームと連携しています。分割は Customer Success Manager と報酬には関連しません。詳細はこのページの [CSM Team Stamping](#csm-team-stamping) を参照してください。
- `Channel Manager` の特別なユースケース
  - これは、商談に channel manager をスタンプするか、複数の階層基準に応じて異なる商談分割を行ういくつかのマトリックスを通じて処理されます。
   詳細はハンドブックに近日追加予定です。それまでは、この [Epic](https://gitlab.com/groups/gitlab-com/sales-team/field-operations/-/epics/87) と関連 Issue を参照してください。

**分割検証**

- `OpportunityClass.checkAndConfirmSplitPercentages`
  - 商談のステージが変更されると、商談の分割に対して検証が実行されます。検証は、商談のすべての分割をロールでグループ化したときに合計が 100% になることを保証することを目的としています。分割が 100% にならない場合、エラーがスローされ、商談を前進させる前に分割を更新する必要があります
  - この検証の目的のために、`Opportunity Owner`、`Account Executive`、`null/Empty` のチームロールは同じロールとみなされ、それに応じて合計されます。
- 検証ルール
  - 個々のエンドユーザーが分割を消去されないようにするため - 一般的な自動化のメモの詳細を参照 - 多数の検証ルールが作成されました。これらの検証ルールは、Opportunity Owner が `Sales Development Representatives`、`Primary Solutions Architect` のいずれかのユーザーと同じになることを防ぎます。
    - `Channel Managers` は、クローズ後にしか支払われないため、また検証ルールが既存の自動化と競合し、Channel Managers が分割商談を持つことが想定されていないため、この検証ルールには含まれていません。

**ロジックの場所:**

- [OpportunityClass.maintainTamTeamLookup](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls#L315)
- [OpportunityClass.maintainTeamMembersToSplits](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls#L399)
- [OpportunityClass.checkAndConfirmSplitPercentages](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls#L337)
- このプロセスのニーズと直接連携していないが、分割が処理される [OpportunityClass.singleWonOppSplitOwnerUpdate](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls#L126) も参照してください。

**一般的な自動化のメモ**

- Salesforce にはデフォルトの挙動があり、商談が更新されると、商談の古いオーナーが所有する商談分割が商談の新しいオーナーに更新されます。これは分割の種類、分割されているかどうかに関係なくです。After トリガーでこの例外を回避しようとしても、SFDC の自動化は私たちが書いた After トリガーの後に発火します。

## 返金商談

**サポートするビジネスプロセス:** [Decommission Opportunity Process](/handbook/sales/field-operations/sales-operations/deal-desk/#creating-decommission-opportunties)

**概要:**  このプロセスが正常に機能するには、Opportunity レイアウトに追加されたボタンがあります。このボタンは、私たちの予約（Deal Desk、Finance ユーザーなど）に取り組むべきユーザーにのみ表示されるべきです。このボタンがクリックされると、その商談のチェックボックスを更新して、返金された商談としてマークします。すでに返金された商談に対してボタンがクリックされた場合、返金がすでに完了したことを通知するエラーがユーザーに表示されます。

商談でこのチェックボックスを選択すると、商談トリガーが既存の商談の完全なクローンを作成するメソッドを実行します。さらに、元の商談のオーナーがすでにアクティブでない場合、返金商談のオーナーはそのユーザーのマネージャーに更新されます。そのマネージャーもアクティブでなくなった場合、返金商談はプロセスをトリガーしたユーザーに割り当てられます。

このアクションは、商談のいくつかの値を変更します。主に、多数のフィールドを null に更新するか、オーバーライドフィールドを使用して予約番号を打ち消すためです。具体的な変更は以下のとおりです。

以下のフィールドの値は、返金商談で持ち越され、負の値に反転されます（つまり、元の商談から値を取得し、ボタン経由で作成された返金商談に逆の値をスタンプします）。

- Recurring Amount
- True Up Amount
- ProServ Amount
- Other Non-Recurring Amount

以下のフィールドの値は、元の商談からそのまま持ち越されます。

- DR - Partner
- Resale Partner
- DR - Partner Deal Type
- DR - Channel Manager
- Distributor
- Resale Channel Manager

注: このプロセスはチェックボックスフィールドを使用するため、データロードまたは類似の一括更新を通じて返金をトリガーすることも可能です。

**ロジックの場所:**

- [OpportunityClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls)
コードユニット:
  - CreateRefundOpp
- Create Refund Opportunity Button

## クレジット商談と Contract Reset 商談のリンク

**サポートするビジネスプロセス:** これは、クレジット商談と Contract Reset 商談を処理する Deal Desk プロセスをサポートします。Sales Order Processing の [ハンドブックページ](/handbook/sales/field-operations/order-processing/#what-quotes-can-deal-desk-assist-me-with) を参照してください。

**関連フィールド**

- Opportunity.Contract_Reset_Opportunity__c
- Opportunity.Total_Net_ARR_Credit__c

**概要:**

- 商談がエントリ基準を満たし、`Contract_Reset_Opportunity__c` フィールドを介して別の商談を参照している場合、関連する Contract Reset Opportunity の `Total_Net_ARR_Credit__c` は、基準を満たすすべてのクレジット商談の Net ARR の合計に更新されます。このコードの実行を引き起こす可能性のあるいくつかの変更には以下が含まれます。
  - クレジット商談が有効なステージから（から）無効なステージに移動する（例: Closed won から Duplicate）
  - クレジット商談の Net ARR が変更される（および有効なステージにある）
  - Contract Reset Opportunity へのルックアップフィールドが挿入、削除、または変更される
  - Contract Reset Opportunity が入力されたクレジット商談が挿入、削除、または削除取り消しされる

**ロジックの場所:**

- OpportunityClass.LinkCreditOppsToContractResetOpps
- OpportunityClassTests.LinkCreditOppsToContractResetOpps

## SQS [ Sales Qualified Source] オーバーライド

  **サポートするビジネスプロセス:** セールスサイクル＆オペレーション  [Tracking Sales Qualified Source in the Opportunity](/handbook/sales/field-operations/gtm-resources/#tracking-sales-qualified-source-in-the-opportunity)

  **概要:** Sales Qualified Source をオーバーライドする必要がある場合があります。この場合、これを許可するシステムがあります。この機能は James Harrison と Colleen Farris に限定されています。Sales Qualified Source をオーバーライドするには、対象ユーザーが以下のステップを実行します。

1. Override SQS チェックボックスをチェック
2. Sales Qualified Source で更新された値を選択

これが完了すると、検証ルールにより、上記のユーザー以外がこのフィールドを編集することが禁止されます。このフィールドを更新するすべての自動化には、Override SQS チェックボックスがチェックされている場合に発火しないように除外する基準が含まれています。

**ロジックの場所:**

- Permission Set : [Edit SQS Override](https://gitlab.my.salesforce.com/0PS4M00000113aW)
- Validation Rule : [Cannot edit overridden SQS](https://gitlab.my.salesforce.com/03d4M000001118T?setupid=OpportunityValidations )

## Channel Manager の維持

**サポートするビジネスプロセス:** この自動化は、商談で正しい Channel Manager を維持します。これは、どの Channel Manager がどの商談で報酬を受け取るかを追跡するために重要です。

**概要:**

- 現在、Channel Manager を商談レコードにスタンプするプロセスは更新中です - 詳細は近日公開予定

**ロジックの場所:**

- 近日公開！

## SA Team Stamping

詳細は内部の [文書](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#heading=h.327gn0f9tf3c) を参照してください。

## CSM Team Stamping

**サポートするビジネスプロセス:** このプロセスは、CSM チームのトラッキング、アライメント、報酬をサポートします。ビジネスハンドブックセクションは近日公開予定です。

**関連フィールド**

- User オブジェクト:
  - `[Comp] CSM Team`（`TAM_Team__c`）
- Account オブジェクト:
  - `Customer Success Manager`（`Technical_Account_Manager_LU__c`）
- Opportunity オブジェクト:
  - `[Comp] CSM Team`（`Comp_TAM_Team__c`）

**概要:**

- 商談の作成およびクローズ時に、以下のいずれかの場合、商談関連アカウントの Customer Success Manager のユーザーの CSM チームが商談にスタンプされます
  - ルックアップフィールドのユーザーの CSM チームが `Scale` の場合
  - 商談の Order Type が次のいずれかの場合: `2. New - Connected`、`3. Growth`、`4. Contraction`、`5. Churn - Partial`、`6. Churn - Final`

**ロジックの場所:**

- OpportunityClass.stampTAMTeam
- OpportunityClassTests.stampTAMTeam
- OpportunityTrigger

## GitLab Admin Contact Required

**サポートするビジネスプロセス:** Digital Journey - デジタルジャーニーのイネーブルメントシリーズを新規顧客に提供するために、ビジネス内の特定のペルソナの contact role を識別して、正しい資料を受け取れるようにする必要があります。

**概要:** Commercial および Enterprise マーケットでは、商談の承認送信時に各アカウントで GitLab 管理者を識別することを要求します。商談で「Submit for Approval」ボタンがクリックされると、GitLab 管理者が必要かどうか、および現在定義されている管理者がいるかどうかをチェックする基準（以下で定義）がロジックによって実行されます。GitLab 管理者の提供は、アカウント上の少なくとも 1 つの contact が `Role` に GitLab 管理者を CONTAIN（含む）ことによって定義されます。注: この contact は、このフィールドで GitLab 管理者に加えて、他のロールが定義されている場合があります。

ステージ 4 以上で、少なくとも 1 つの `gitlab admin` が Digital Programs を介してアカウントをサポートするために識別されていることを確認するための Salesforce 検証チェックがあります。ステージ 4 以上および取引クローズで、以下の基準が満たされている場合、2 つの潜在的な結果があります。

1. アカウントにすでに GitLab Admin が定義されている。
   - 結果: 送信は、ステージを進めるための通常の画面、または承認のための Closed Won Reason の要件に進みます。
1. アカウントに GitLab Admin が定義されていない
   - 結果: GitLab Admin を定義するように指示するエラー画面が表示されます。GitLab Admin が定義されると、商談を再送信してステージを進めるか、承認のために closed-won にすることができます。

  **このロジックに入る基準:**

- `Web Portal Purchase` がチェックされていない（false 値）
- `Order Type 2.0` が 1. New - First Order OR 2. New - Connected OR 3. Growth OR 4. Contraction

**ロジックの場所:**

- Flow: [Opp Approval Field Check 3.0 GitLab Admin Check](https://gitlab.lightning.force.com/lightning/setup/Flows/page?address=%2F3004M000000brYQQAY%3FretUrl%3D%2Flightning%2Fsetup%2FFlows%2Fhome)

## Downgrade Reason Required

詳細は内部の [文書](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#heading=h.2mv9t4m7u0jo) を参照してください。

## Next Steps History

**サポートするビジネスプロセス:** セールスは `Next Steps` フィールドで次のステップを追跡します。これらの「Next Steps」値が将来参照できるように、履歴ログを持つことが重要です。このプロセスを合理化するシステムを作成しました。セールスは真の「Next Step」が何かを更新するだけで、システムは履歴データをログに記録します。

**概要:** 商談で `Next Steps` フィールドが更新されると、このフィールドの以前の値が `Next Steps History` フィールドにスタンプされます。これはタイムスタンプ付きで完了し、`Next Steps History` の以前の値を保持して完全なログを保持します。

**このロジックに入る基準:**

- `Next Steps` が変更／更新された、または商談が作成されたばかり。
- `Next Steps` の以前の値が「空白」値ではなかった。

**ロジックの場所:**

- Workflow Rule: [Next Steps History](https://gitlab.my.salesforce.com/01Q4M000000sslN)
- Field Update Action: [Update Next Steps History](https://gitlab.my.salesforce.com/04Y4M000000saO7)

## 統合

## 統合ユーザー

- 統合ユーザーは、専用（人間が使用しない）の完全な Salesforce ライセンスで、カスタムプロファイル、権限セットを持ち、マーケティングオートメーション、CTI、データエンリッチメントツール、カスタム API 作業など、任意のサードパーティ統合に使用されます。Sales Systems には、すべての統合と接続に対して専用の統合ユーザーがあります。統合ユーザーの認証情報は、十分な警告と 1 週間の事前通知なしにサイクルされるべきではありません。
- Salesforce の統合ユーザーの [リスト](https://gitlab.my.salesforce.com/005?isUserEntityOverride=1&retURL=%2Fui%2Fsetup%2FSetup%3Fsetupid%3DUsers&setupid=ManageUsers&fcf=00B8X000009vjvp) は以下のとおりです。
- 新しい統合を確立する新しいリクエストについては、ユースケースと統合に関連する [Issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new) を作成して systems チームにフォローアップしてください。DRI が新しい統合ユーザーを作成するための [AR](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) を作成する必要があります。
- すべての統合ユーザーの認証情報は `SalesSystems 1Password Vault` に保存されます。

## Tesorio 統合

**サポートするビジネスプロセス:** Finance Systems Team は新しいコレクション管理ツール（Tesorio）を実装しています。Tesorio は Zuora に接続され、実行プロセスを管理するために必要なデータの大部分を取得します。これにより、Tesorio が Salesforce と統合され、顧客アカウントに関する追加データ（アカウントオーナーなど）を取得することも要求されます。

**概要:** Tesorio は REST API を使用して Salesforce と統合します。統合では Salesforce 内に Connected App を作成する必要があります。Salesforce からのデータインポートは以下のとおりです。

- Accounts - アカウントデータの一方向同期で Tesorio に入ります。アカウントデータは、ERP システムの顧客レコードの内部 ID を含むカスタムフィールドが存在する場合にのみ、Customers と一致します。
- Contacts - すべての連絡先の一方向同期で Tesorio に入ります。アカウントに関連付けられた連絡先は、自動的に customers にリンクされます。アカウントに連絡先のルックアップであるカスタムフィールドがある場合、それらも Tesorio 内の連絡先として取り込まれます。

**ロジックの場所:**

- [Tesorio Client](https://gitlab.my.salesforce.com/_ui/core/application/force/connectedapp/ForceConnectedApplicationPage/d?applicationId=06P4M000000XZXs)

## 自動化

### メールアラート

**サポートするビジネスプロセス:** セールスサイクル＆すべてのオペレーション

**概要:** メールアラートは、自動化されたプロセスによって生成され、指定された受信者に送信されるメールです。これらのアクションは、メールの標準的なテキストと受信者リストで構成されています。メールアラートはプロセス、フロー、ワークフロールール、承認プロセスに関連付けられています。Salesforce インスタンスから送信されるすべてのメールアラートとそれに関連する自動化詳細、メールテンプレート詳細、ターゲットオーディエンス情報をリストした [メールアラートドキュメント](https://docs.google.com/spreadsheets/d/1F_4Cs46wmHAG-HipRT2Ltu0iafhcE1Z-Lhr5U7XQGRU/edit#gid=859280293) があります。ビジネス上の理由でこれらのメールアラートを無効化または更新するリクエストは、SalesSystems Board の Systems Team Member がレビューして必要な更新を行うために [Issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new) を作成してください。

**ロジックの場所:**

- [Email Alerts](https://gitlab.my.salesforce.com/01W?setupid=WorkflowEmails&fcf=00B61000001XPLx)

### 遅延更新の通知と終了

**サポートするビジネスプロセス:** セールスサイクル - [Late Renewal Notification & Auto Close Process](/handbook/sales/sales-renewal-process/#closed-lost-renewal-management)
**概要:** セールスパイプラインをクリーンに保ち、失効するリスクのある更新商談の商談オーナー（およびマネージャー）に体系的に通知し、[Bookings Policy](/handbook/sales/field-operations/order-processing/#fy22-bookings-policy) に準拠していない遅い更新を自動的にクローズします。この自動化は、商談の Quote Start Date に基づいてすべての Open Renewal Opportunity に対してトリガーされます。この機能には例外プロセスも組み込まれています。これにより、Sales Ops はこの自動化への例外を受け入れることができ、Opportunity の Quote Start Date から `90` 日後まで Opportunity が自動的に Closed Lost されるウィンドウを延長します。これは、関連する Opportunity の `Exempt Late Renewal Automation` チェックボックスをチェックすることによって実現されます。
このロジックは、アクション（フィールド更新）とアラートをトリガーする `OpportunityJob` に含まれています。これらのメールを受信する受信者は、Opportunity Owner、Opportunity Owner のマネージャー、Renewals Manager です。通知に合わせて特定のテンプレートが作成されています。`Admin Poke` フィールドへのフィールド更新は、`Troops` をトリガーして SAs（Primary Solution Architect）にメールアラートを送信するために使用されます。
これらのメールアラート／受信者／アクションの更新をリクエストするには、SalesSystems Board の Systems Team Member がレビューして必要な更新を行うために [Issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new) を作成してください。
参考までに、自動化ロジックの設定表は以下のとおりです。

| Open Renewal Opportunity のみ                                 | 使用される Email Template ID  | ロジック [Opportunity の Quote Date]  | フィールド更新      | メールアラート送信先                         | Troops アラート送信先 |
|-------------------------------------------------------|--------------------|-------------------|-------------------------------------------|--------------|-------------|
| 第 1 通知 - メールアラート - Quote Start Date の 15 日前                      | 00X4M00000121nCUAQ | Today = Quote Start Date - 15 日  | Admin Poke = 15 days prior lapsed renewal alert1 sent                                                                                                                                                                                       | Opportunity owner, RM, opp owner manager | SAs          |
| 第 2 通知 - メールアラート - Quote Start Date 当日                    | 00X4M00000121nFUAQ | Today = Quote Start Date      | Admin Poke = on the day lapsed renewal alert2 sent                                                                                                                                                                                         | Opportunity owner, RM, opp owner manager | SAs          |
| 第 3 通知 - メールアラート - Quote Start Date の 30 日後                      | 00X4M00000121nDUAQ | Today = Quote Start Date + 30 日  | Admin Poke = 30 days prior lapsed renewal alert3 sent                                                                                                                                                                                      | Opportunity owner, RM, opp owner manager | SAs          |
| 最終通知 - メールアラート + Closed Lost 更新 - Quote Start Date の 46 日後 | 00X4M00000121nEUAQ | Today = Quote Start Date + 46 日    | Admin Poke = opp closed lapsed renewal alert4 sent,        Opportunity Stage = Closed Lost,                                 Closed Lost/Unqualified Reason = Other,               Closed Lost/Unqualified Details = Auto closed lapsed renewal | Opportunity owner, RM, opp owner manager | SAs          |

| 例外のある Renewal Opportunity のみ  | 使用される Email Template ID  | ロジック [Opportunity の Quote Date]  | フィールド更新      | メールアラート送信先 | Troops アラート送信先 |
|---|---|---|---|---|---|
| 第 1 通知 - メールアラート - Late Renewal Exception Expiration Date の 30 日前 | 00X8X000002aJxm | Today = Late Renewal Exception Expiration Date - 30 日  | Admin Poke = 30 days before late renewal exception expiration | Opportunity owner, RM, opp owner manager | N/A          |
| 第 2 通知 - メールアラート - Late Renewal Exception Expiration Date の 15 日前 | 00X8X000002aJxr | Today = Late Renewal Exception Expiration Date - 15 | Admin Poke = 15 days before late renewal exception expiration | Opportunity owner, RM, opp owner manager | N/A          |
| 最終通知 - メールアラート + Closed Lost 更新 - Late Renewal Exception Expiration Date 当日  | 00X8X000002aJxw | Today = Late Renewal Exception Expiration Date | Admin Poke = 0 days before late renewal exception expiration, opp closed, Opportunity Stage = Closed Lost, Closed Lost/Unqualified Reason = Other, Closed Lost/Unqualified Details = Auto closed lapsed renewal | Opportunity owner, RM, opp owner manager |  N/A         |

**ロジックの場所:**

- [Email Templates](https://gitlab.my.salesforce.com/00X?setupid=CommunicationTemplatesEmail&retURL=%2Fui%2Fsetup%2FSetup%3Fsetupid%3DCommunicationTemplates)
- [OpportunityJob.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityJob.cls)

### 商談 New Logo トラッキング（Comp/Clari）

**サポートするビジネスプロセス:** これは、セールス報酬およびフォーキャストプロセスをサポートします。このプロセスは、New Logo に対して報酬を支払うべき商談を識別するために使用されます。
**概要:** このプロセスは、商談レコードの 2 つのフィールド `Comp_New_Logo_Override__c` と `New_Logo_Override_Clari__c` の値を維持します。名前が示すとおり、`Comp_New_Logo_Override__c` は報酬プロセスにフィードされ、Xactly で報酬チームが活用するフィールドであり、`New_Logo_Override_Clari__c` は Comp フィールドと同様の特性を共有しながらも、フォーキャストニーズのために Clari に直接フィードされる対応するフィールドです。
**関連 Issue:**

- [New_Logo_Override_Clari__c Issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/3138)

**ロジックの場所:**

- [OpportunityClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls)
  - `stampCompNewLogoOverride`
- [OpportunityClassTests.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClassTests.cls)
  - `stampCompNewLogoOverrideEnt`
  - `stampCompNewLogoOverrideEntAPAC`
  - `stampCompNewLogoOverrideCom`
  - `stampCompNewLogoOverrideSMB`
- [AccountClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClass.cls)
  - `reviewAccOppsLamDevChangingComp`
- [AccountClassTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClassTest.cls)
  - `reviewAccOppsLamDevChangingCompNewLogo`

### Account Pub Sec Type

**サポートするビジネスプロセス:** これは、アカウント上で Pub Sec Type（`PubSec_Type__c`）がどのように決定されるかのプロセスです。これは、所有権ではなくアカウントの人口統計情報に基づいて Public Sector ステータスを決定するために重要です。
**概要:** アカウントが Public Sector かどうかを決定するために使用される基準は、以下にリストされた入力に基づいています。さらに、アカウントが job が生成しているものとは異なる Pub Sec タイプに上書きする必要がある場合、`PubSec_Type_Override__c` フィールドを使用して可能です。

- `Website`
- `zi_sub_industry__c`
- `Industry`
- `Account_Demographics_UPA_Country__c`

**関連 Issue:**

- [Pub Sec Type](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/2663)

**ロジックの場所:**

- [AccountJob_SetPubSecType.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountJob_SetPubSecType.cls)
- [AccountJob_SetPubSecTypeTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountJob_SetPubSecTypeTest.cls)
- [AccountClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClass.cls)

  - `setPubSecType`
  - `determinePubSecType`

- [AccountClassTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClassTest.cls)

  - `determinePubSecType`

### リード変換時にアカウントにリードアドレスを設定

**サポートするビジネスプロセス:** これは、アカウント上で Billing Address がどのように決定されるかのプロセスの一部であり、リードアドレスをアカウントにスタンプします。リードアドレスは、アカウントの場所を決定するために使用されるデータ階層の 1 つの層です。
**概要:** このプロセスは、リード変換時にリードを捕捉し、リードアドレスを使用して、アカウント上の空白のリードアドレスフィールドをスタンプするか、アカウント上のリードアドレスの欠落情報を埋めます。

- アカウント上のリードアドレスが空白で、変換時のリードアドレスに何らかの情報がある場合、リードアドレスはアカウントのリードアドレスフィールドにスタンプされます
- リードが変換されたときにアカウント上のリードアドレスフィールドに部分的なアドレスがあり、アカウント上のすべての情報がリード上の対応する情報と一致する場合 - 追加の新しいアドレス情報がアカウント上の現在空白のフィールドにスタンプされます。アカウントとリード間の重複する情報が異なる場合、部分的な一致があっても新しい情報はアカウントにスタンプされません（例: 同じ州だが異なる Zip Code）

**関連 Issue:**

- [Address Waterfall](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/3139)

**ロジックの場所:**

- [LeadTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/LeadTrigger.trigger)
- [LeadClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/LeadClass.cls)
  - `stampConvertedLeadAddressData`
- [LeadClassTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/LeadClassTest.cls)
  - `stampConvertedLeadAddressDataTest`

### アカウントに Billing Address を設定

**サポートするビジネスプロセス:** これは、アカウント上で Billing Address がどのように決定されるかのプロセスです。
**概要:** アカウント上の Billing Address フィールドは、いくつかのソースから取り込まれるデータ階層を通じて決定されます。階層を経由して（最初から最後まで）、フィールドセットのいずれかのフィールドにデータが含まれている場合、それを使用してアカウントの Billing Address を自動的に設定し、そうでない場合は次のフィールドセットを見ます。階層で使用されるフィールドの多くは、フィールドとの混乱を避けるために管理者にのみ表示されます。

**関連 Issue:**

- [Address Waterfall](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/3139)

**ロジックの場所:**

- [AccountTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/AccountTrigger.trigger)
- [AccountClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClass.cls)
  - `SetBillingAddressOnAccounts`
- [AccountClassTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClassTest.cls)
  - `setBillingAddressOnAccounts_` で始まるすべてのテスト
  - `validateBillingAddress`（ヘルパー関数）

### 商談オーナーに基づくセグメントのスタンプ

 **サポートするビジネスプロセス**-  セールスサイクルと分析

**概要** -

この自動化は、openprise hybrid ユーザーを除き、商談が作成されるか別のオーナーに移管されるたびに、商談レコードのユーザー／オーナーセグメントフィールド（Segment、Geo、Area、Role Type、Region）をスタンプします。

**自動化によってスタンプされるフィールド** -

Stamped Opp Owner User Segment
Stamped Opp Owner User Geo
Stamped Opp Owner User Region
Stamped Opp Owner User Area
Stamped Opp Owner User Role Type

**ロジック** -

- 商談が作成されると、自動化はユーザーのプロファイル属性に応じてフィールドをスタンプします
- `Stamped fields edited by OP` がチェックされている場合、フローは実行されません。商談オーナーが変更されたかどうかに関係なく、フィールド更新を防ぎます。

**ロジックの場所**

[Flow](https://gitlab.lightning.force.com/builder_platform_interaction/flowBuilder.app?flowId=3018X000000oZL0QAM)

### Net ARR 計算式ロジックへの変更

 **サポートするビジネスプロセス**-  comp テーブルからのルックアップ値を持つ新規ビジネスクォートの更新商談の Net ARR

**概要** -

商談の Net ARR 計算式（ARR_Net__c）は、クォートがない場合のステージ 1 ではステージ 1 Net ARR（Stage_1_XDR_Net_ARR__c）に基づいて計算されます。商談が新規サブスクリプションタイプのプライマリクォートに関連する更新商談である場合、Net ARR は Primary quote's MRR（Zuora Quote の zqu__Previewed_Delta_MRR__c）× 12) - Opportunity ARR Basis（Opportunity の ARR_Basis__c）によって駆動されます。他のすべてのユースケースでは、Net ARR フィールドの既存ロジックが優先されます。

**自動化によってスタンプされるフィールド** -

Net_ARR_Automation__c
ARR_Net__c（自動化によって駆動される計算式フィールド）

**ロジック** -

- TF_OpportunityAfterCreateUpdateNetARRAutomation フローは、商談が作成または更新され、新規サブスクリプションタイプのプライマリクォートを持つ場合に発火します。サブスクリプションタイプのプライマリクォートがない場合、ステージ 1 XDR net arr が Net arr automation フィールドにスタンプされ、それが Net arr 計算式フィールドに到達します
- TF_OpportunityAfterUpdate_StampNetARRAutomation は商談更新時のみ発火し、Stamped_ARR_Basis__c が変更されたかをチェックします。変更された場合、フローは net arr automation フィールドを計算します（プライマリクォートの zqu__Previewed_Delta_MRR__c またはプライマリクォートがない場合はステージ 1 xdr net arr に基づく）。正しい値が Net arr automation フィールドにスタンプされ、それが Net arr 計算式フィールドに到達します
- TF_QuoteAfterCreateUpdate_StampNetARRAutomation フローはクォートの観点から書かれています。新規サブスクリプションタイプのプライマリクォートが作成または更新されると、フローは商談が #4349 を満たすかをチェックし、Net arr automation フィールドにスタンプし、それが Net arr 計算式フィールドに到達します
- TF_OpportunityAfterUpdate_SyncStage1NetARR フローは商談更新時に発火し、正しい net arr 計算式値でステージ 1 net arr を埋めます
既存の net arr 計算式フィールドへの変更: 2 つの追加レイヤーが追加されました。レイヤー 1 -> クォートがなく、Opp がステージ 1 にある場合、ステージ 1 xdr net arr が net arr を駆動するかをチェックします。レイヤー 2 -> 商談が更新商談で、net arr オーバーライドがなく、サブスクリプションタイプのプライマリクォートを持つかをチェックします。そうである場合、net arr 計算式フィールドは net arr automation によって駆動されます。他のすべてのシナリオでは、既存の計算式ロジックが機能します

**ロジックの場所**
TF_OpportunityAfterCreateUpdateNetARRAutomation フロー
TF_OpportunityAfterUpdate_StampNetARRAutomation フロー
TF_QuoteAfterCreateUpdate_StampNetARRAutomation フロー
TF_OpportunityAfterUpdate_SyncStage1NetARR フロー
Opportunity の Net_ARR_Automation__c フィールド
Opportunity の ARR_Net__c フィールド

### Opportunity Product

専用の [Opportunity Product](https://internal.gitlab.com/handbook/it-enterprise-applications/documentation/guides/opportunity-product/) を参照してください。
