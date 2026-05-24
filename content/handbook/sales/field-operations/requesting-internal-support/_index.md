---
title: Requesting Internal Support in Salesforce
upstream_path: /handbook/sales/field-operations/requesting-internal-support/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-21T12:17:18-04:00"
---

## サポートを得る方法

Salesforce で商談やアカウントに取り組む際にヘルプを得る方法に関する、GitLab 社内ユーザー向けのワークフローです。

### このページの内容

- 概要
- 影響を受けるチーム
- ワークフロー
- ケースのナビゲーション
- バグの報告や修正の依頼方法
- レポートとダッシュボード

#### 概要

**背景**: 従来、GitLab は Salesforce での社内リクエストを処理するために Chatter を使用していました。ユーザーはサポートのために、ユーザーグループ（@sales-support、@billing、@renewalops、@partneroperations など）に Chatter メッセージを送信できました。このプロセスにより、四半期ごとに数千件のケースが作成されていましたが、システムには非効率性がありました。

**課題**: 以前の Chatter ベースのワークフローには、いくつかの課題がありました。

- リクエストのステータスに対する **可視性の欠如**。
- **複数のチーム** が同じ Chatter ハンドルを使用しており、混乱を招いていた。
- **重複したケース** がしばしば作成されていた。
- リクエストが優先順位付けされておらず、一部のリクエストが失われたり遅延したりしていた。
- 送信時に提供される **情報が不十分** で、やり取りが必要だった。

**新しいワークフローが提供するもの**:

- **可視性**: リクエスト者は、詳細、メール更新、Salesforce 通知を通じて自分のケースのステータスを確認できます。
- **ガイド付きワークフロー**: リクエスト者が正しい情報とともに適切なチームにリクエストを振り向けるのを助ける、定義済みのチームとリクエストタイプのリスト。
- **差別化された優先順位付け**: 緊急のリクエストは、より迅速な対応のためにフラグが立てられます。
- **完全な情報**: リクエスト者は必要な詳細をすべて入力する必要があり、フォローアップの必要性が減ります。

#### 社内サポートの依頼

以下のチームが社内サポートリクエストの処理に対応しています。

- Billing
- Deal Desk
- Ecosystem Operations
- Renewal Operations
- Sales Operations
- Sales Development & Marketing

**誰がサポートを依頼できるのか？** アカウントまたは商談への編集アクセス権を持つ Salesforce ユーザーは誰でも、社内サポートのリクエストを送信できます。

**他の部門への社内サポートの依頼** - 以下のチームは、別のワークフローでリクエストを管理していることにご注意ください。各部門について、以下の手順に従ってください。

- [Sales Commissions](https://internal.gitlab.com/handbook/sales/sales-commission/#who-to-contact-for-commission-questions)
  - Salesforce Chatter 経由: @sales-comp
  - メール経由: sales-comp@gitlab.com
- [Legal](/handbook/legal/customer-negotiations/#how-to-reach-commercial-legal)
  - Legal ケースは、Salesforce の商談からページ上部の「Legal Request」ボタンを選択して作成できます。
  - 貿易コンプライアンス管理のためにロックされたアカウントのレビューには @Legal
- [CS サポートの依頼](/handbook/customer-success/csm/segment/cse/cse-operating-rhythm/)
  - 商談で、ドロップダウンメニューに移動して「CS Support」を選択し、以下のいずれかを依頼します。
    - CSE Help（エスカレーションではない）
    - At-Risk Account Help（CSM の赤アカウントと CSM/CSE エスカレーション）
- [GitLab Customer Support](/handbook/support/internal-support/)
- Enterprise Applications
  - [Enterprise Applications - CRM Team](/handbook/business-technology/enterprise-applications/entapps-crm/#i-classfas-fa-users-idbiz-tech-iconsi-how-we-operate)
  - [Enterprise Applications - PMO](/handbook/business-technology/enterprise-applications/pmo)
- [Revenue](https://internal.gitlab.com/handbook/finance/accounting/finance-ops/revenue-accounting/#communicating-with-revenue-accounting)
  - Chatter @revenue
- [HelpLab](https://helplab.gitlab.systems/esc)（あなたの Okta 内）

#### Salesforce のワークフロー

社内サポートのリクエストを送信する方法は以下のとおりです。

1. 支援が必要な **アカウントまたは商談に移動** します。
2. 「**Request Support**」ボタンをクリックします。
3. サポートを依頼する **チームをドロップダウンリストから選択** し、Next を選択します。
4. 利用可能なオプションから **Request Type** を選択し、必要な情報（赤いアスタリスクが付いたフィールド）を入力します。該当する場合は、関連するドキュメントをアップロードします。
5. フォームに入力したら、「**Submit**」をクリックしてケースを作成します。
6. 送信後、ケースが作成されたことを確認する通知が、ケース番号へのリンクとともに届きます。

**注**: 送信前に、ワークフロー内の **「Previous」** ボタンをクリックして戻り、選択を変更できます。

#### 社内ケースのナビゲーション

リクエストを送信したら、Salesforce でケースに移動する方法は以下のとおりです。

**送信したケースを見つける:**

1. ツールバーの Case タブに移動します。
2. デフォルトのリストは「Recently Viewed」ケースで、送信したすべてのケースが表示されるわけではありません。
3. ギアアイコンを使い、NEW を選択して新しいリストを作成します。
4. リストに名前を付け、「Only I can see this view」を選択します。
5. フィルターを更新します。
   - Owner = All Cases でフィルター
   - Created by =（あなたのエイリアス）
   - あなたのエイリアスは SFDC プロフィールで確認できます。
6. 「Choose what fields to display」を選択して、作成したすべてのケースを 1 か所で表示できるようになります。

**ケースのページレイアウト:**

- レイアウトは Salesforce の標準オブジェクト形式を使用して構成されています。
  - **Details**（左側）– ケースに関する重要な情報。
  - **Feed and Related Lists**（右側）– 追加の文脈と更新。
  - **Buttons and Actions**（右上隅）– ケースの更新やクローズなどの重要なアクション。
    - レイアウトによっては、一部のボタンがドロップダウンメニューにある場合があります。

**ケースの注目すべきフィールド:**

- **Owner**:
  - 当初、このフィールドはケースキューのオーナーを反映します。
  - 割り当てられると、ケースを処理する人の名前が表示されます。
- **Status**:
  - New: ケースは作成されたが、まだレビューされていない。
  - Pending Response: より多くの情報またはアクションを待っている。
  - Work in Progress: チームメンバーがオーナーシップを引き受け、ケースをレビューしている。
  - On Hold: 進行する前により多くの情報が必要。
  - Closed: ケースが解決された、または対処された。
- **Request Type**:
  - ユーザーが送信したリクエストのタイプを表示します（例: Legal support、Billing inquiry など）。
- **Description**:
  - リクエストまたは問題の詳細な説明。
- **Feed**:
  - ケースに関する追加情報や更新を提供できる場所です。
  - **注**: Chatter フィードを通じてメッセージを送信できるのは個々のユーザーに対してのみで、グループ全体には送信できません。

#### バグの報告や修正の依頼方法

社内サポートチーム向けのケース作成やフォームで問題が発生した場合は、OKTA タイルからアクセスできる [HelpLab アプリケーション](/handbook/business-technology/enterprise-applications/guides/helplab-guide/#create-a-ticket--request)を使用してリクエストを送信してください。

1. HelpLab で **IT** を選択します。
2. **Break/Fix Request** タイプをクリックします。
3. 受付フォームが開き、以下のフィールドを入力する必要があります。
   - ヘルプが必要な **アプリケーション**: Salesforce
   - **Short description**: 問題の詳細を追加します。
   - **Urgency**: 緊急度を選択します。
   - **問題を説明** してください: 関連する追加情報を追加します。
   - **Attachment**: エラーメッセージのスクリーンショットを送信します。
   - **オプション**: チームメンバーを「Watcher」としてチケットに追加できます。
4. フォーム右側の「Submit」ボタンをクリックしてリクエストを送信します。

#### レポートとダッシュボード

**追加予定:**

- ケースやサポートリクエストに関連するレポートとダッシュボードの生成・使用方法の詳細は、ここに含まれる予定です。今後の更新にご注目ください！

この新しいワークフローは、サポートリクエストプロセスを合理化し、チーム間の効率とコミュニケーションを向上させることを目指しています。ご質問がある場合やさらなる支援が必要な場合は、社内リソースを参照するか、適切なチームに連絡してください。

#### リクエストのルーティング

- リクエストに応じて連絡すべき相手は以下のとおりです。

オブジェクト: OPPORTUNITY

| TEAM:                               | REQUEST TYPE:                  | SUB REQUEST:                       |
|-------------------------------------|--------------------------------|------------------------------------|
| Deal Desk                           | Opportunity Help               | Debook/Rebook                      |
|                                     | Opportunity Help               | ARR Review                         |
|                                     | Opportunity Help               | Product Category                   |
|                                     | Opportunity Help               | Error Message                      |
|                                     | Opportunity Help               | PO Exception                       |
|                                     | Opportunity Help               | Other Field Update                 |
|                                     | Quote Help                     | Create Quote                       |
|                                     | Quote Help                     | Quote Question                     |
|                                     | Quote Help                     | Error Message                      |
|                                     | Quote Help                     | Process Related Question           |
|                                     | Quote Help                     | Private Offer                      |
|                                     | Quote Help                     | CPPO                               |
|                                     | Quote Help                     | Deal Structure                     |
|                                     | Quote Help                     | Order Form                         |
|                                     | Quote Help                     | Quote Approval Override            |
|                                     | Quote Help                     | Contract Reset                     |
|                                     | Finance Use                    | Internal Only Correction           |
|                                     | Finance Use                    | Customer Involved Correction       |
|                                     | Other                          |                                    |
| Billing Team                        | Payment Portals (e.g. portal set-ups, Ariba, Coupa) |                |
|                                     | Billing Disputes (e.g. customer refusing to pay due to incorrect start date) |   |
|                                     | Cancellation Requests | |
|                                     | Currency Related Questions | |
|                                     | Invoice Copy Requests |  |
|                                     | Invoice Update (incl. VAT ID, name update, address update, PO) |    |
|                                     | Payment Status Confirmation/Questions |       |
|                                     | Request for Financial Documentation | |
|                                     | Tax Exemption |    |
|                                     | Bill to/Sold to Address OR Bill to Email Address Updates |  |
|                                     | Internal Support |    |
|                                     | Request Reseller Account Creation in Zuora |  |
| Sales Operations                    | Churn Exception Request - Comp |               |
|                                     | Opportunity Splits |    |
|                                     | Opportunity Owner Reassignment | |
|                                     | Opportunity Reassigment (xDR/SA/CSM)| |
|                                     | Order Type |  |
|                                     | Stage Reversion | |
|                                     | System Error |     |  
|                                     | Other | |
| Renewal Operations                  | Compensation Question | |
|                                     | Churn Exception Request | |
|                                     | Duplicate Opportunities | |
|                                     | Opportunity Reassignment/ROE | |
|                                     | Opportunity Segment/ROE | |
|                                     | Opportunity Approvals | |
|                                     | Opportunity Data Review | |
|                                     | Opportunity Update | |
|                                     | Subscription Review| |
|                                     | System Error| |
|                                     | Usage/Best Practices | |
|                                     | General Question | |
| Ecosystem Operations                | Quote to Order/Discounts | |
|                                     | SQS/Opp Splits Question | |
|                                     | CPPO | |
|                                     | Link a deal reg to this closed opportunity | |

オブジェクト: CONTACT

| TEAM:                               | REQUEST:                                                                                   |
|-------------------------------------|--------------------------------------------------------------------------------------------|
| SalesDev & Marketing                | Why was this contact assigned to me?                                                       |
|                                     | How do I update the matched account?                                                       |

オブジェクト: LEAD

| TEAM:                               | REQUEST:                                                                                   |
|-------------------------------------|--------------------------------------------------------------------------------------------|
| SalesDev & Marketing                | I get an error blocking me from being able to edit/update a Lead                           |
|                                     | I need help with merging duplicate Leads                                                   |
|                                     | I am not seeing my activity showing up on the Lead                                         |
|                                     | I get an error when trying to convert a Lead to Opp or Contact                             |
|                                     | I get an error when trying to override address information on a Lead                       |
|                                     | The record is remaining in my view because the High Priority check isn't being removed     |
|                                     | I am not seeing my activity showing up on the Lead                                         |
|                                     | I don't understand what behavior occured that would cause this Lead to MQL                 |
|                                     | This Lead does not seem to warrant MQL score i.e student, spam, etc                        |
|                                     | This person wants to enlist back into email comms, need help removing their opt out status |
|                                     | Why was this Lead assigned to me?                                                          |
|                                     | Why did this Lead move to a queue?                                                         |

オブジェクト: CUSTOMER ACCOUNT

| TEAM:                               | REQUEST:                                                                                   |
|-------------------------------------|--------------------------------------------------------------------------------------------|
| Sales Operations                    | Account Merges/Duplicate account                         |
|                                     | Account Name Changes |
|                                     | Account Hirearchy Correction |
|                                     | Account Merger or Acquisition  |
|                                     | Employee Count/Segment Correction |
|                                     | Address Correction |
|                                     | LAM Dev Correction |
|                                     | Account Creation |
|                                     | System Error |
|                                     | Other |

オブジェクト: PARTNER ACCOUNT

| TEAM:                               | REQUEST:                                                                                   |
|-------------------------------------|--------------------------------------------------------------------------------------------|
| Ecosystem Operations                | Traning and Certification                    |
|                                     | Partner Program Admin |
|                                     | Partner Payments |
|                                     | Post-Sale Support |
|                                     | Update Account Owner |
|                                     | Partner Account Merges, Name Changes, and Aquisitions |
| Billing Team                        | Request Reseller Account Creation in Zuora |

オブジェクト: DEAL REGISTRATION

| TEAM:                               | REQUEST:                                                                                   |
|-------------------------------------|--------------------------------------------------------------------------------------------|
| Ecosystem Operations                | General Question/Other      |
|                                     | Unable to Approve/Error Message |
|                                     | Update Customer Account |
|                                     | Link Reg to a Closed Opportunity |
|                                     | Linked Customer Account Employee Count/Segment Update |
|                                     | Extension Request > 30 Days |
|                                     | Link Reg to a Different Open Opportunity |

オブジェクト: Labra Leads、Labra Referral、Influence Object

| TEAM:                               | REQUEST:                                                                                   |
|-------------------------------------|--------------------------------------------------------------------------------------------|
| Ecosystem Operations                | General Question     |
