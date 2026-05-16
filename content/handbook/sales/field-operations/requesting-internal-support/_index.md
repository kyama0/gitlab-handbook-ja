---
title: Salesforce で社内サポートを依頼する
upstream_path: /handbook/sales/field-operations/requesting-internal-support/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-22T02:37:39+00:00"
---

## サポートを得る方法

Salesforce で商談やアカウントに取り組む際にサポートを得るための、GitLab 社内ユーザー向けのワークフローです。

### このページの目次

- 概要
- 影響を受けるチーム
- ワークフロー
- ケースのナビゲーション
- バグや修正リクエストの方法
- レポートとダッシュボード

#### 概要

**背景**: GitLab では従来、Chatter を使って Salesforce での社内リクエストを処理していました。ユーザーはサポートを得るために、ユーザーグループ（例: @sales-support、@billing、@renewalops、@partneroperations）に Chatter メッセージを送信できました。このプロセスにより、各四半期に何千ものケースが作成されていましたが、システムには非効率な点がありました。

**課題**: 従来の Chatter ベースのワークフローには、いくつかの課題がありました。

- リクエストのステータスに対する**可視性の欠如**。
- 複数のチームが同じ Chatter ハンドルを使用しており、混乱を招いていた。
- **重複ケース**がしばしば作成されていた。
- リクエストの優先順位付けがされておらず、一部のリクエストが見失われたり遅延したりしていた。
- 提出時の**情報が不十分**で、やり取りが必要になっていた。

**新しいワークフローが提供するもの**:

- **可視性**: リクエスト元は、詳細、メールアップデート、Salesforce 通知を通じてケースのステータスを確認できます。
- **ガイド付きワークフロー**: リクエスト元が適切なチームに正しい情報とともにリクエストを送るのに役立つ、定義済みのチームとリクエストタイプのリスト。
- **差別化された優先順位付け**: 緊急のリクエストは、より迅速な対応のためにフラグが付けられます。
- **完全な情報**: リクエスト元はすべての必須詳細を入力する必要があり、フォローアップの必要性が減ります。

#### 社内サポートを依頼する

社内サポートリクエストを処理できるのは、以下のチームです。

- Billing
- Deal Desk
- Ecosystem Operations
- Renewal Operations
- Sales Operations
- Sales Development & Marketing

**誰がサポートを依頼できますか？** アカウントまたは商談への編集アクセス権を持つすべての Salesforce ユーザーが、社内サポートのリクエストを提出できます。

**他部門への社内サポート依頼** - 以下のチームは別のワークフローでリクエストを管理しているため、各部門の指示に従ってください。

- [Sales Commissions](https://internal.gitlab.com/handbook/sales/sales-commission/#who-to-contact-for-commission-questions)
  - Salesforce Chatter から: @sales-comp
  - メールから: sales-comp@gitlab.com
- [Legal](/handbook/legal/customer-negotiations/#how-to-reach-the-legal-commercial-team)
  - Legal ケースは、Salesforce のオポチュニティからページ上部の「Legal Request」ボタンを選択して作成できます。
  - 貿易コンプライアンス管理によりロックされたアカウントのレビュー用には @Legal
- [CS サポートの依頼](/handbook/customer-success/csm/segment/cse/cse-operating-rhythm/)
  - オポチュニティのドロップダウンメニューから「CS Support」を選択し、以下のいずれかをリクエストしてください。
    - CSE Help（エスカレーションではないもの）
    - At-Risk Account Help（CSM の赤アカウント、CSM/CSE エスカレーション）
- [GitLab カスタマーサポート](/handbook/support/internal-support/)
- Enterprise Applications
  - [Enterprise Applications - CRM Team](/handbook/business-technology/enterprise-applications/entapps-crm/#i-classfas-fa-users-idbiz-tech-iconsi-how-we-operate)
  - [Enterprise Applications - PMO](/handbook/business-technology/enterprise-applications/pmo)
- [Revenue](https://internal.gitlab.com/handbook/finance/accounting/finance-ops/revenue-accounting/#communicating-with-revenue-accounting)
  - Chatter @revenue
- [HelpLab](https://helplab.gitlab.systems/esc)（Okta からアクセス）

#### Salesforce ワークフロー

社内サポートのリクエストを提出する手順は以下のとおりです。

1. サポートが必要な**アカウントまたは商談に移動**します。
2. 「**Request Support**」ボタンをクリックします。
3. サポートを依頼したい**チームをドロップダウンリストから選択**し、Next を選択します。
4. 利用可能なオプションから**リクエストタイプを選択**し、必須情報（赤いアスタリスクのあるフィールド）に入力します。該当する場合は関連ドキュメントをアップロードします。
5. フォームに入力したら、「**Submit**」をクリックしてケースを作成します。
6. 送信後、ケースが作成されたことを確認する通知と、ケース番号へのリンクを受け取ります。

**注意**: 送信前に、ワークフロー内の「**Previous**」ボタンをクリックして戻り、選択内容を変更できます。

#### 社内ケースをナビゲートする

リクエストを送信したら、Salesforce でケースをナビゲートする方法は以下のとおりです。

**送信したケースを見つける:**

1. ツールバーの Case タブに移動します。
2. デフォルトのリストは「Recently Viewed」ケースで、送信したケースをすべて表示するわけではありません。
3. ギアアイコンを使用して NEW を選択し、新しいリストを作成します。
4. リストに名前を付け、「Only I can see this view」を選択します。
5. フィルターを更新します。
   - Owner でフィルタ = All Cases
   - Created by = （あなたのエイリアス）
   - エイリアスは SFDC プロフィールで確認できます。
6. 「Choose what fields to display」を選択して、作成したすべてのケースを 1 か所で表示できます。

**ケースページのレイアウト:**

- レイアウトは Salesforce の標準オブジェクト形式を使って構成されています。
  - **Details**（左側） – ケースに関する重要な情報。
  - **Feed and Related Lists**（右側） – 追加のコンテキストとアップデート。
  - **Buttons and Actions**（右上） – ケースのアップデートやクローズなどの重要なアクション。
    - レイアウトによっては、ボタンの一部がドロップダウンメニューにある場合があります。

**ケースの注目すべきフィールド:**

- **Owner**:
  - 当初、このフィールドはケースキューのオーナーを反映しています。
  - 割り当てられると、ケースを担当する人物の名前が表示されます。
- **Status**:
  - New: ケースは作成されたがまだレビューされていない。
  - Pending Response: 詳細情報またはアクションを待っている。
  - Work in Progress: チームメンバーが所有権を取り、ケースをレビュー中。
  - On Hold: 進行する前に詳細情報が必要。
  - Closed: ケースは解決またはアクションされた。
- **Request Type**:
  - ユーザーが送信したリクエストのタイプを表示します（例: Legal support、Billing inquiry など）。
- **Description**:
  - リクエストや問題に関する詳細な説明。
- **Feed**:
  - ケースに関する追加情報やアップデートを提供できる場所です。
  - **注意**: Chatter フィードを通じてメッセージを送信できるのは個別のユーザーに対してのみで、グループ全体に対してはできません。

#### バグや修正リクエストの方法

社内サポートチーム向けのケース作成やフォームに問題が発生した場合は、OKTA タイルからアクセスできる [HelpLab アプリケーション](/handbook/business-technology/enterprise-applications/guides/helplab-guide/#create-a-ticket--request) を使用してリクエストを送信してください。

1. HelpLab で **IT** を選択します。
2. **Break/Fix Request** タイプをクリックします。
3. インテークフォームが開くので、以下のフィールドに入力します。
   - **どのアプリケーション**にヘルプが必要か: Salesforce
   - **Short description**: 問題の詳細を追加します。
   - **Urgency**: 緊急性を選択します。
   - **describe your issue**: 関連する追加情報を追加してください。
   - **Attachment**: エラーメッセージのスクリーンショットを送信します。
   - **オプション**: チームメンバーを「Watcher」としてチケットに追加できます。
4. フォーム右側の「Submit」ボタンをクリックしてリクエストを送信します。

#### レポートとダッシュボード

**追加予定:**

- ケースやサポートリクエストに関連するレポートとダッシュボードの生成と使用方法の詳細はここに含まれます。今後のアップデートをお待ちください！

この新しいワークフローは、サポートリクエストプロセスを合理化し、チーム間の効率とコミュニケーションを改善することを目的としています。質問がある場合や追加のサポートが必要な場合は、社内リソースを参照するか、適切なチームに連絡してください。

#### リクエストのルーティング

- リクエストに基づいて連絡する相手は以下のとおりです。

Object: OPPORTUNITY

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

Object: CONTACT

| TEAM:                               | REQUEST:                                                                                   |
|-------------------------------------|--------------------------------------------------------------------------------------------|
| SalesDev & Marketing                | Why was this contact assigned to me?                                                       |
|                                     | How do I update the matched account?                                                       |

Object: LEAD

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

Object: CUSTOMER ACCOUNT

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

Object: PARTNER ACCOUNT

| TEAM:                               | REQUEST:                                                                                   |
|-------------------------------------|--------------------------------------------------------------------------------------------|
| Ecosystem Operations                | Traning and Certification                    |
|                                     | Partner Program Admin |
|                                     | Partner Payments |
|                                     | Post-Sale Support |
|                                     | Update Account Owner |
|                                     | Partner Account Merges, Name Changes, and Aquisitions |
| Billing Team                        | Request Reseller Account Creation in Zuora |

Object: DEAL REGISTRATION

| TEAM:                               | REQUEST:                                                                                   |
|-------------------------------------|--------------------------------------------------------------------------------------------|
| Ecosystem Operations                | General Question/Other      |
|                                     | Unable to Approve/Error Message |
|                                     | Update Customer Account |
|                                     | Link Reg to a Closed Opportunity |
|                                     | Linked Customer Account Employee Count/Segment Update |
|                                     | Extension Request > 30 Days |
|                                     | Link Reg to a Different Open Opportunity |

Objects: Labra Leads, Labra Referral, Influence Object

| TEAM:                               | REQUEST:                                                                                   |
|-------------------------------------|--------------------------------------------------------------------------------------------|
| Ecosystem Operations                | General Question     |
