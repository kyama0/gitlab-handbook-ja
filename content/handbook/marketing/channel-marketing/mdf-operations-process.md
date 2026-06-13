---
title: Global Channel Marketing - MDF オペレーションプロセス
description: "このページでは、MDF プログラムの運用プロセスについて詳しく説明します。"
upstream_path: /handbook/marketing/channel-marketing/mdf-operations-process/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-12T14:44:40+00:00
translated_at: "2026-06-12T21:15:00Z"
translator: claude
stale: false
---

## 計画

### ステップ 1: パートナーとの計画

1. CMM は Partner との定例の機会に、イベントの日程、イベント／キャンペーンの詳細、申請金額について話し合います。
     1. Partner が Impartner の Funds Request フォームに入力する情報を、PowerPoint でレビューします。
     1. キャンペーンの詳細は、各自のスプレッドシートで追跡します。

### ステップ 2: Allocadia 項目の作成

1. 次の命名規則でサブカテゴリを作成します: Partner Activity Name Location。例: `GitLab Demo Partner DevSecOps World Tour Paris`
     1. Start Date を追加します。
     1. End Date を追加します。
     1. Is a Channel Partner Involved?
     1. Channel Partner Name
     1. Is Alliance Partner Involved?
     1. Alliance Partner Name
     1. Will there be MDF Funding
     1. Partner MDF Region Budget
     1. Customer Speaker?
     1. Geo
     1. Country
     1. User Handle
     1. Campaign Owner
     1. Campaign Type
     1. MDF Campaign - Type Details
     1. Operational Program Owner
1. 次の命名規則でライン項目を作成します: MDF 000 Partner Activity Name Location。例: `MDF 000 GitLab Demo Partner DevSecOps World Tour Paris`
1. その月のプラン列に予測金額を追加します。
1. 詳細パネル下部の `Create/Update MDF Issue` を選択します。

### ステップ 3: Issue の更新

1. ロケーション、イベントの Web サイト、DR の目標、予算化されたコスト、キャンペーンの総コスト、営業テリトリーなど、キャンペーンの詳細を更新します。
1. ラベルを追加します:
     1. FY25-Q4 を追加します（FY-Q のラベル）。
     1. Region-XXXX を追加します。
     1. `Pending MDF Approval` を追加します - Manager から Issue の承認を得るため（自動化）。
         1. 承認されたら、`MDF-Approved` に更新します。
1. 可視性のためにステークホルダーをタグ付けします: ESM、マーケティング、フィールドセールスに可視性を提供します。
1. `Operations Checklist` に入力します。
1. 完了したら、運用サポートの DRI に依頼して Issue を [Plan から WIP](/handbook/marketing/field-marketing/#process-for-moving-events-from-plan-to-wip) へ移動してもらいます。

### ステップ 4: パートナーがファンドリクエストを提出

1. この時点で、パートナーは Impartner でファンドリクエストを送信します。

## アクティビティ前

### Marketo

#### ステップ 1: Marketo プログラムの作成

1. Marketing Activities に移動します。
1. 「Active Marketing Program」>「Partner Programs」>「MDF Campaigns」>「Templates - MDF Campaigns Folder」に移動します。
1. "YYYYMMDD__MDF_000_PartnerName_EventName_Region" を右クリックして "Clone" を押します。
     1. Clone to - Campaign フォルダを選択します。
     1. Name - Allocadia の Campaign Name を貼り付けます。
     1. Folder - `FY#- Q# - MDF Campaigns` を挿入します。
         1. 例: キャンペーンが FY25 Q4 の期間だった場合、選択するフォルダは `FY25 - Q4 - MDF Campaigns` です。
     1. Description: **Allocadia Line Item ID** と Issue リンク。
         1. 例: 2271710 https://gitlab.com/groups/gitlab-com/marketing/-/epics/4420

#### ステップ 2: Marketo Program を SFDC に同期

1. Marketo Program Name を表示しているタブに移動します。
1. Summary 内の Settings セッションにある Salesforce Campaign Sync で、`not set` をクリックします。
1. Campaign で、ドロップダウンをクリックして `Create New` を選択します。
1. Description に **Allocadia Line Item ID** を貼り付けて保存します。

### Zip

#### ステップ 1: Impartner の MDF リクエストを PDF として保存

1. MDF Funds Request に移動します。
1. すべてのセクションが折りたたまれていないことを確認します。
1. Google Chrome ブラウザで、右端の三点アイコンを選択します。
1. `Print` をクリックします。
1. Destination を「Save as PDF」に変更してから保存します。

#### ステップ 2: 新しい Zip リクエストを作成

1. Zip に移動 > 「New Request」を作成します。
1. 「Request a Purchase」を選択し、Zip 送信の最後に MDF PDF をアップロードします。

<table>
    <tr>
        <td>質問</td>
        <td>回答</td>
    </tr>
    <tr>
        <td>Provide a Short Description of the purchase</td>
        <td>Epic 名を入力</td>
    </tr>
    <tr>
        <td>What are you looking to purchase</td>
        <td>Marketing Programs</td>
    </tr>
    <tr>
        <td>Which detailed category best describes your purchase?</td>
        <td>Channel Partner Rebates</td>
    </tr>
    <tr>
        <td>Is this an MDF Request?</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>Is the request related to the funds covered under the Master Partner Agreement?</td>
        <td>
        <ul>
  <li>Yes - 50/50 split の場合。</li>
  <li>No
    <ul>
      <li>契約があるか、50/50 split でない場合は No </li>
      <li>契約はないが 50/50 split でもない場合、Zip 作成後に「Not a 50/50 split and need legal to confirm if GitLab contract is needed」とメモを追加</li>
      <li>また、契約はないが 50/50 split でない場合、ここに MDF req をアップロードして次に進めるようにする</li>
      <li>契約がある場合はここにアップロード</li>
    </ul>
  </li>
</ul>
        </td>
    </tr>
    <tr>
        <td>What type of purchase is this?</td>
        <td>New</td>
    </tr>
    <tr>
        <td>Will a Virtual Card be used to pay this vendor?</td>
        <td>No</td>
    </tr>
    <tr>
        <td>What’s the Name of the vendor?</td>
        <td>パートナーの名前を入力 - 新規パートナーの場合は Coupa にオンボーディングする必要があります - パートナー名はユニークである場合があり（例: TD SYNNEX Indonesia）、見つけるのが複雑な場合があります</td>
    </tr>
    <tr>
        <td>What subsidiary is this purchase for?</td>
        <td>GitLab inc.</td>
    </tr>
    <tr>
        <td>How much budget will you need for this purchase?</td>
        <td>リクエスト金額を入力</td>
    </tr>
    <tr>
        <td>What is the desired start/end date?</td>
        <td>アクティビティの日付を入力</td>
    </tr>
</table>

| ライン項目の内訳を入力してください:                                                  |                                          |
| ----------------------------------------------------------------------------------------- | ---------------------------------------- |
| Line Type                                                                                 | Amount                                   |
| Commodity                                                                                 | Channel Partner Rebates                  |
| Allocadia ID                                                                              | Allocadia Line Item ID 番号を入力 |
| Is this prepaid?                                                                          | No                                       |
| Amortization Schedule                                                                     | 空白                                    |
| Department                                                                                | Regional Marketing                       |
| Coupa Class - GitLab Inc                                                                  | 空白                                    |
| Do you have any supporting documentation                                                  | None                                     |
| Will the vendor have access to any of the following data or information?                  | None of the above |
| Does this request involve the use of a system to collect, store, or transmit GitLab data? | No                                       |

#### ステップ 4: Issue リンクを Zip のコメント欄に追加

1. 法務から質問があった場合は、回答のために CMM をタグ付けします。
1. 契約が関与する場合は、自分のキューに届いたら承認します。
1. Coupa の申請が作成されたら、Renz Santos をタグ付けし、POP / ROI を承認するまで PO を保留するよう伝えます。彼は引き続き契約書を送付しますが、こうすることで MDF が完了する前に支払われるリスクを回避できます。

### Salesforce

#### ステップ 1: SFDC で MDF 番号を入力してキャンペーンを検索

#### ステップ 2: Allocadia 同期を確認

1. Allocadia が Salesforce と同期するまで最大 5 分かかることがあります。同期が完了するまで SFDC キャンペーンを編集しないでください。同期前に SFDC キャンペーンに変更を加えると、同期が壊れます。
     1. 同期が行われると、次のことが起こります:
         1. Campaign Owner が CMM に更新されます。
         1. Type Details、Start/End Date、Is a Channel Partner Involved?、Will there be MDF Funding?、Channel Partner Name、Region、Sub-Region が更新されます。
         1. Last Modified By に Allocadia Integration と表示されます。

#### ステップ 3: Salesforce Campaign に MDF Request を追加

1. Salesforce キャンペーンを編集して MDF Request を追加します。これは、夜間同期の際に Salesforce、Allocadia、GitLab システム間で MDF request データが流れることを保証する基礎的なステップです。
     1. Allocadia への Field Sync - システムは毎晩、4 つの主要メトリクスを Salesforce から Allocadia の詳細パネルへ自動的に転送します:
         1. MDF Request Number
         1. Target Number of Contacts
         1. Expected Number of Deal Registration
         1. Estimated Pipeline Created (USD)
     1. ライン項目名の自動更新
         1. Partner Marketing がプレースホルダーとして "MDF 000" を使用すると、
         1. システムが自動的に実際の MDF 番号に置き換えます。
         1. GitLab Issue 名の MDF 番号を更新します。
     1. GitLab Integration の機能 - システムは GitLab Issue に次の情報を自動的に入力します:
         1. Salesforce campaign name
         1. Salesforce campaign link
         1. Target Number of Contacts
         1. Expected Number of DR
         1. Estimated Pipeline Created (USD)

## キャンセル

MDF キャンペーンがキャンセルされた場合は常に、作成したすべてのプログラムがキャンセルまたは削除としてマークされるようにします。

### Allocadia

1. Sub Category の詳細パネルで、「Campaign Cancelled」を `Yes` に更新します。
1. Sub Category、Line Item、Campaign Name の名前の先頭に「Cancelled」を追加します。

### Salesforce

1. キャンペーン名の先頭に `[CANCELLED]` を追加します。
1. Status を `Aborted` に更新します。

### PRM MDF Request

1. MDF Request Details の Status を `Cancelled` に更新します - こうすることで、最初に送信された Funds Request がキャンセルまたは却下されたことを通知する自動メールが Partner に届きます。

### Marketo

1. #mktgops に Marketo Program の削除を依頼します。

### Zip

1. 該当する場合は Zip の申請を削除し、MDF がキャンセルされた旨をコメントします。

### Coupa

1. 該当する場合は、CMM が Coupa の申請で procurement と finance に MDF がキャンセルされたことを通知します。

### GitLab Issue

1. すべてのステークホルダーに MDF キャンペーンがキャンセルされたことを通知し、Issue に `Cancelled` ラベルを追加して Issue をクローズします。

## アクティビティ後

これは Carahsoft を除くディストリビューターには適用されません。

### ステップ 1: パートナーが MDF Claim を提出

#### PRM MDF Claim

1. Partner は MDF Claim に POP と Lead List を添付します。
1. POP を確認し、Approval Status を `Approved` に更新します。

### ステップ 2: リストインポート

#### Google Sheet/Drive

1. [List Import Template](https://docs.google.com/spreadsheets/d/143REaMQLyIy7to-CFktL45TTTLZxBQRJUDIOMCA3CVo/edit#gid=257616838) をクローンします。
1. スプレッドシートに情報を貼り付けます - Marketo Program Name、First Name、Last Name、Email、Company Country、Province（USA/Canada のみ）、Member Status、CRM Partner ID は必須項目なので忘れないでください。
     1. ディストリビューターの場合: CRM ID に、各リードが対応する個々の Partner CRM ID を追加します。
1. .csv ファイルをダウンロードします: File > Download > .csv
1. .csv ファイルを [Google Drive Folder](https://drive.google.com/drive/folders/1SvDR2KW8_vtPZjJ7WWihA1iOgSJn0_fv?usp=share_link) にドロップします。

#### Slack

1. リストインポートのステータスを報告する通知を `#event_list_upload` から受け取ります。
1. 失敗したレコードがある場合は、レポートリンクを確認します。
インポートが失敗した理由の詳細については、Status 列を確認してください。

#### Salesforce Campaign

1. キャンペーンメンバーを確認し、すべてが Status = Responded で Salesforce に同期されていることを確認します。
1. Status が Member のままの場合は、次の手順を実行します:
     1. Marketo Program に移動します。
     1. Processing スマートキャンペーンを選択します。
         1. Smart List で Program Status = `Partner - MDF > Member` を追加します。
         1. Schedule で run now を実行します。

#### GitLab Issue

1. Post - Event で、リストインポートのタスクをチェックします。

#### トラッキングシート

1. トラッキングシートの "POP and Leads Uploaded" をチェックします。

### ステップ 3: Procurement チームのサポートで Coupa Req と PO を作成

| いつ                                   | アクション                                                                                                                                                                                                            | トラッキングシート更新                                  |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| POP が受領され承認された           | Coupa Req が作成されるよう Zip の MDF Review ステップを承認<br>契約があった場合、このステップは既に完了しているので、Coupa req を開いて Renz Santos をタグ付けし PO を処理するよう依頼  | "Zip Approved" にチェック                                    |
| Coupa req が作成された                   | PO が作成されるまでステータスを確認                                                                                                                                                                 | Coupa Req # を更新                                      |
| PO が作成された                          | パートナーに請求書アップロードの手順をメール送付                                                                                                                                                                         | `PO Created` と `Informed Partner about invoice` にチェック |
| 請求書アップロードから 24 時間後 | 請求書を承認します。Coupa の受信トレイへ移動し、ライン項目をクリックすると新しい画面が表示されるので、金額が正しいか再確認して Approve ボタン（緑色）をクリック  | "Invoice Approved Coupa" にチェック                         |

## MDF ページアクセスのトラブルシューティング

Partner が MDF ページにアクセスしようとして 404 エラーに遭遇する場合、これは権限が不足していることを示しています。この問題を解決するには、次の要件が満たされていることを確認してください。
Account Level:

- Partner Status が "Authorized" に設定されている必要があります（変更が必要な場合は ESM に連絡してください。Partner Status は直接変更すべきではありません）。

User Level:

- Administrative Privileges に "MDF Administrator" アクセスが含まれている必要があります。

MDF ページに正常にアクセスするには、両方の条件が満たされている必要があります。これらの設定を確認しても 404 エラーが解消しない場合は、さらなる調査のために #MktgOps の Slack チャンネルへエスカレーションしてください。
