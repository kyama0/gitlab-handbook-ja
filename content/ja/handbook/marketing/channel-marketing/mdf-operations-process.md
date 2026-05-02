---
title: "Global Channel Marketing - MDF オペレーションプロセス"
description: "MDF プログラムのオペレーションプロセスについて詳述したページです。"
upstream_path: /handbook/marketing/channel-marketing/mdf-operations-process/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

## 計画

### ステップ 1: パートナーとの計画

1. CMM がパートナーと定期的に行う打ち合わせで、イベントの日程、イベント／キャンペーンの詳細、リクエスト金額について議論します。
     1. パートナーが Impartner のファンドリクエストフォームに入力する内容を、PowerPoint 上でレビューします
     1. キャンペーン詳細はそれぞれのスプレッドシートでトラッキングされます

### ステップ 2: Allocadia 項目の作成

1. 命名規則「Partner Activity Name Location」でサブカテゴリーを作成します。例: `GitLab Demo Partner DevSecOps World Tour Paris`
     1. Start Date を追加
     1. End Date を追加
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
1. 命名規則「MDF 000 Partner Activity Name Location」でライン項目を作成します。例: `MDF 000 GitLab Demo Partner DevSecOps World Tour Paris`
1. その月のプラン列に予測金額を追加
1. 詳細パネル下部の `Create/Update MDF Issue` を選択

### ステップ 3: Issue の更新

1. 場所、イベントウェブサイト、DR 目標、予算コスト、キャンペーン総コスト、セールステリトリーを含むキャンペーン詳細を更新
1. ラベルを追加:
     1. FY25-Q4 を追加（FY-Q のラベル）
     1. Region-XXXX を追加
     1. `Pending MDF Approval` を追加 - マネージャーからの Issue 承認を求めるため（自動）
         1. 承認後、`MDF-Approved` に更新
1. 可視性のためにステークホルダー（ESM、マーケティング、フィールドセールス）をタグ付け
1. キャンペーン詳細が入力され、必要な承認がすべて得られたら、ラベル `Asana-Sync-Project` を追加して GitLab Issue を Asana に同期

このラベルを適用する前に、Issue が最終状態にあることを確認してください。これ以降の変更は GitLab と Asana の両方で個別に手動更新する必要があります。

同期をアクティベートすると、対応するタスクが含まれる Asana プロジェクトが自動作成されます。GitLab Issue の説明が Asana の概要に入力され、タスクが自動的にアサインされます。タスクごとに 1 人のアサイニーしか指定できないことに注意してください。プライマリアサイニーを変更せずに可視性を維持するため、追加のチームメンバーをコラボレーターとして追加できます。

### ステップ 4: パートナーがファンドリクエストを提出

1. この時点で、パートナーは Impartner でファンドリクエストを提出します

#### ステップ 5: Impartner MDF リンクを Asana MDF Portfolio View に追加

## アクティビティ前

### Marketo

#### ステップ 1: Marketo プログラムの作成

1. Marketing Activities へ移動
1. "Active Marketing Program" > "Partner Programs" > "MDF Campaigns" > "Templates - MDF Campaigns Folder" へ移動
1. "YYYYMMDD__MDF_000_PartnerName_EventName_Region" を右クリックし "Clone" を選択
     1. Clone to - Campaign フォルダを選択
     1. Name - Allocadia の Campaign Name を貼り付け
     1. Folder - `FY#- Q# - MDF Campaigns` を挿入
         1. 例: キャンペーンが FY25 Q4 中の場合、選択するフォルダは `FY25 - Q4 - MDF Campaigns`
     1. Description: **Allocadia Line Item ID** と Issue リンク
         1. 例: 2271710 https://gitlab.com/groups/gitlab-com/marketing/-/epics/4420

#### ステップ 2: Marketo Program を SFDC に同期

1. Marketo Program Name が表示されているタブへ移動
1. Summary の Settings セッション、Salesforce Campaign Sync の `not set` をクリック
1. Campaign の下、ドロップダウンで `Create New` を選択
1. Description に **Allocadia Line Item ID** を貼り付けて保存

### Zip

#### ステップ 1: Impartner の MDF リクエストを PDF として保存

1. MDF Funds Request へ移動
1. すべてのセクションが折りたたまれていないことを確認
1. Google Chrome ブラウザで右上の三点リーダーを選択
1. `Print` をクリック
1. Destination を「Save as PDF」に変更して保存

#### ステップ 2: 新しい Zip リクエストを作成

1. Zip > "New Request" を作成
1. "Request a Purchase" を選択し、Zip 提出の最後で MDF PDF をアップロード

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
        <td>What's the Name of the vendor?</td>
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

#### ステップ 4: Zip リンクを Asana MDF Portfolio View に追加

#### ステップ 5: Issue リンクを Zip のコメント欄に追加

1. 法務から質問があれば、CMM をタグ付けして回答してもらいます
1. 契約が伴う場合は、自分のキューに来たら承認します
1. Coupa req が作成されたら、Renz Santos をタグ付けし、POP／ROI を承認するまで PO を保留するよう伝えます。彼は契約自体は送付しますが、これにより MDF 完了前に支払われるリスクを避けられます

### Salesforce

#### ステップ 1: SFDC で MDF 番号を入力してキャンペーンを検索

#### ステップ 2: Allocadia 同期を確認

1. Allocadia から Salesforce への同期には最大 5 分かかります。同期前に SFDC キャンペーンを編集しないでください。同期前に SFDC キャンペーンに変更を加えると同期が壊れます。
     1. 同期が完了すると次のことが起こります:
         1. Campaign Owner が CMM に更新されます
         1. Type Details、Start／End Date、Is a Channel Partner Involved?、Will there be MDF Funding?、Channel Partner Name、Region、Sub-Region が更新されます。
         1. Last Modified By が Allocadia Integration と表示されます

#### ステップ 3: Salesforce Campaign に MDF Request を追加

1. Salesforce Campaign を編集して MDF Request を追加します。これは Salesforce、Allocadia、GitLab システム間で MDF リクエストデータが nightly sync 中にフローすることを確実にする基礎ステップです。
     1. Allocadia へのフィールド同期 - システムは毎晩 Salesforce から Allocadia 詳細パネルへ 4 つのキーメトリクスを自動的に転送します:
         1. MDF Request Number
         1. Target Number of Contacts
         1. Expected Number of Deal Registration
         1. Estimated Pipeline Created（USD）
     1. ライン項目名の自動更新
         1. Partner Marketing が "MDF 000" をプレースホルダーとして使用すると
         1. システムが実際の MDF 番号で自動置換します
         1. GitLab Issue 名の MDF 番号を更新します
     1. GitLab 統合機能 - システムは GitLab Issue に以下を自動的に入力します:
         1. Salesforce campaign name
         1. Salesforce campaign link
         1. Target Number of Contacts
         1. Expected Number of DR
         1. Estimated Pipeline Created（USD）

## キャンセル

MDF キャンペーンがキャンセルされた場合はいつでも、作成されたすべてのプログラムが Cancelled としてマークされるか削除されることを確認します。

### Allocadia

1. Sub Category 詳細パネルで、"Campaign Cancelled" を `Yes` に更新
1. Sub Category、Line Item、Campaign Name の名前の先頭に "Cancelled" を追加

### Salesforce

1. キャンペーン名の先頭に `[CANCELLED]` を追加
1. Status を `Aborted` に更新

### PRM MDF Request

1. MDF Request Details の下で Status を `Cancelled` に更新 - これにより、最初に提出されたファンドリクエストがキャンセルまたは却下されたことを通知する自動メールがパートナーに送信されます。

### Marketo

1. #mktgops に Marketo プログラムの削除を依頼

### Zip

1. 該当する場合、Zip req を削除し、MDF がキャンセルされたことをコメントに残します。

### Coupa

1. 該当する場合、CMM が Coupa req で procurement と finance に ping を送って MDF がキャンセルされたことを通知します。

### GitLab Issue

1. すべてのステークホルダーに MDF キャンペーンがキャンセルされたことを通知し、Issue に `Cancelled` ラベルを追加して Issue をクローズします。

### Asana プロジェクト

1. #mktgops Slack チャンネルで、Asana プロジェクト名を `Cancelled` で始まるように変更し、プロジェクトをアーカイブするよう依頼します。

## アクティビティ後

これは Carahsoft を除き、ディストリビューターには適用されません。

### ステップ 1: パートナーが MDF Claim を提出

#### PRM MDF Claim

1. パートナーは MDF Claim に POP とリードリストを添付します
1. POP を確認後、Approval Status を `Approved` に更新

### ステップ 2: リストインポート

#### Google Sheet／Drive

1. [List Import Template](https://docs.google.com/spreadsheets/d/143REaMQLyIy7to-CFktL45TTTLZxBQRJUDIOMCA3CVo/edit#gid=257616838) をクローン
1. スプレッドシートに情報を貼り付け - Marketo Program Name、First Name、Last Name、Email、Company Country、Province（米国／カナダのみ）、Member Status、CRM Partner ID は必須なので忘れずに。
     1. ディストリビューターの場合: CRM ID で、各リードに対応する個別のパートナー CRM ID を追加します。
1. .csv ファイルをダウンロード: File > Download > .csv
1. .csv ファイルを [Google Drive Folder](https://drive.google.com/drive/folders/1SvDR2KW8_vtPZjJ7WWihA1iOgSJn0_fv?usp=share_link) にドロップ

#### Slack

1. リストインポートのステータスを報告する `#event_list_upload` から通知を受信します
1. 失敗したレコードがある場合、レポートリンクを確認します
ステータス列を確認して、インポートが失敗した理由の詳細を確認してください。

#### Salesforce Campaign

1. キャンペーンメンバーをチェックして、すべてが Status = Responded で Salesforce に同期されていることを確認
1. ステータスが Member のままの場合、以下の手順を実行:
     1. Marketo Program へ移動
     1. Processing smart campaign を選択
         1. Smart List で、Program Status = `Partner - MDF > Member` を追加
         1. Schedule で、今すぐ実行

#### GitLab Issue

1. Post - Event でリストインポートタスクをチェック

#### トラッキングシート

1. トラッキングシートで "POP and Leads Uploaded" にチェック

### ステップ 3: Procurement チームのサポートで Coupa Req と PO を作成

| いつ                                   | アクション                                                                                                                                                                                                            | トラッキングシート更新                                  |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| POP が受領され承認された           | Coupa Req が作成されるよう Zip の MDF Review ステップを承認<br>契約があった場合、このステップは既に完了しているので、Coupa req を開いて Renz Santos をタグ付けし PO を処理するよう依頼  | "Zip Approved" にチェック                                    |
| Coupa req が作成された                   | PO が作成されるまでステータスを確認                                                                                                                                                                 | Coupa Req # を更新                                      |
| PO が作成された                          | パートナーに請求書アップロードの手順をメール送付                                                                                                                                                                         | `PO Created` と `Informed Partner about invoice` にチェック |
| 請求書アップロードから 24 時間後 | 請求書を承認します。Coupa の受信トレイへ移動し、ライン項目をクリックすると新しい画面が表示されるので、金額が正しいか再確認して Approve ボタン（緑色）をクリック  | "Invoice Approved Coupa" にチェック                         |

## MDF ページアクセスのトラブルシューティング

パートナーが MDF ページにアクセスしようとして 404 エラーが発生する場合、これは権限不足を示します。この問題を解決するには、以下の要件が満たされていることを確認してください:
アカウントレベル:

- Partner Status が "Authorized" に設定されている必要があります（変更が必要な場合は ESM に連絡してください。パートナーステータスは直接変更すべきではありません）

ユーザーレベル:

- Administrative Privileges に "MDF Administrator" アクセスが含まれている必要があります

両方の条件が満たされている必要があります。これらの設定を確認しても 404 エラーが続く場合は、さらなる調査のために #MktgOps Slack チャンネルにエスカレーションしてください。
