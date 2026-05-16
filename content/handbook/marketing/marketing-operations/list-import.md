---
title: "リストインポート"
description: "Marketo にレコードをインポートするためのプロセス"
upstream_path: /handbook/marketing/marketing-operations/list-import/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

**イベントやその他のリードジェネレーションキャンペーンのリストアップロードについては、[セルフサービスアップロード](/handbook/marketing/marketing-operations/automated-list-import/)の手順を使用してください**。

以下の情報は手動リストアップロード専用です。イベント・キャンペーンのアップロードでセルフサービスインポートが利用できない場合は、マーケティングオペレーションに [Issue を作成](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?type=ISSUE&description_template=event-clean-upload-list)してご支援を依頼してください。

## インポート方法と SLA

イベント・キャンペーン以外のリストアップロードについては、リードを私たちのシステムに取り込む方法がいくつかあります。

| インポート方法 | SLA | 提出方法 | オペレーション手順 |
| :------------ | :-- | :---------- | :-------- |
| SFDC 内の Zoominfo | セルフマネージド | [この方法を行う手順動画はハンドブックで確認できます](/handbook/marketing/marketing-operations/zoominfo/) | 該当なし |
| csv ファイル | **OPS による受付** - 営業時間 24 時間<br><br>**SFDC へのアップロード** - 最大営業日 5 日 | [MktgOPS の **一般** リストインポートリクエストテンプレート](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=general-list-import-request)を使用し、Google Sheet（Gsheet）としてフォーマットして **Issue 内に Gsheet へのリンクを記載**してください<br><br>テンプレートの使い方を文書で記載 | アドホックアップロード |

各インポート方法の SLA は、想定される最適な応答時間に基づいて決定されています。プロスペクトのリストが「ホット」とみなせない場合は、記載された 5 日間の SLA で対応されることを想定し、適切なテンプレートを使用してください。

**直前のリクエストの場合は、Issue にて急ぎのリクエストである旨を明記するか、`#mktgops` Slack チャンネルで OPS にメンションしてオプションを相談してください**

## インポートクリーニングテンプレート - MktgOps への引き渡し前の情報

詳細なデータクリーニング、フォーマット、必要なデータの手順については、[セルフサービスページの「データクリーニング手順」セクション](/handbook/marketing/marketing-operations/automated-list-import/#data-cleaning-instructions)を参照してください。プロセスは両方のタイプのインポートで同じです。

リストロードを MOps が完了させる場合は、データファイルのクリーニング後に以下の追加ステップを完了してください。

1. 該当する MktgOps メンバーにスプレッドシートの `編集アクセス権` を付与する
1. リストアップロード Issue にスプレッドシートへのリンクを投稿する。アップロード Issue では Google Sheet として提供する。データを保護するため、ファイルを Issue に直接アップロードせず **必ずリンクを提供すること**。
1. ~"List Upload: Ready" ラベルを Issue に適用する

### MOps の手動アップロード手順

アップロード時には、`Marketo` にキャンペーンが既に存在しているはずです。キャンペーンはキャンペーンオーナーによって作成されます。キャンペーンテンプレートの一覧については、[こちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#how-to-clone-the-marketo-program)を参照してください。

### アップロードプロセス

#### オペレーショナルアップロード

オペレーショナルまたはトランザクショナルなメールニーズのために手動アップロードが必要な場合があります。なお、このプロセスはアップロードの目的に応じて変動するため、プログラム/スマートキャンペーンを選択・構築する際は適切に判断してください。

- [Non-Event List Loads](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/MF4394A1) フォルダまたは適切な[メールプログラム](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/MF4267A1)内で、現在のプログラムを使用するか新しいプログラムやスマートリストを作成します。
- トランザクショナルメールの場合は、適切なプログラムテンプレートをクローンします。その他のオペレーショナルリストロードの場合は、[このプログラム](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG4420A1)をクローンして開始できます。
- 既に設定されている注目すべき `オペレーショナル` プログラムを以下にリンク付きで列挙します。このセクションは必要に応じて更新されます:
  - [Opt-Outs](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG6625A1)
- セキュリティやその他関連通知のためのトランザクショナルメールリスト処理では、必ず[リスト処理スマートキャンペーン](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC24593C3ZN19)に記載されたフローステップを実現するキャンペーンを実行してください。
- Marketo へのアップロードに推奨される形式は .csv ですが、.xls や .xlsx も受け付けます。

#### キャンペーンアップロード

キャンペーン関連のアップロードです。これらはセルフサービスインポートプロセスを使用すべきですが、まれに不可能な場合は以下の手順が適用されます。

`MQL スコアリング` と `Last Interesting Moments` の適切な属性を保証するため、アップロード前に以下のチェックを実行します:

- キャンペーンが存在しない場合は、`キャンペーンエピック` または `アップロード Issue` で `キャンペーンオーナー` にメンションしてキャンペーン作成とトークンの記入を依頼してください。
- メインキャンペーン内の `My Tokens` タブにあるキャンペーンの `トークン` が記入されていることを確認します。
  - `トークン` は `スマートキャンペーン` を介してキャンペーン内に登場するすべてのリードに `Last Interesting Moments` を適用するために使用されます。使用すべき最低限の `トークン` は、キャンペーンの `Event Name`、`Event Date`、`Landing Page URL` に関するものです。これらが記入されていないと、`Last Interesting Moments` は永続的に `空白` のままになります。
- キャンペーンのコンポーネントをレビューします。必要なコンポーネントには以下が含まれます:
  - リードリストをロードする `静的リスト`。`静的リスト` はプログラム名に似せて改名する必要があります。キャンペーンテンプレートによっては、複数の `静的リスト` が利用可能な場合があります。一部のテンプレートは、すべての関連する `スマートキャンペーン` を完全に起動して、`Campaign Member Statuses` などの重要なフィールドを含むすべての関連データを付加するように自動化されています
  - リードがキャンペーンの静的リストに追加された際に `フロー` をトリガーする `スマートキャンペーン`。このフローは **フィールドが空の場合のみ** 以下のフィールドを設定します: `Acquisition Program` と `Person Source`（SFDC の `Initial Source` と同じ）、および `Change Program Status: to relevant status`。No show の更新の場合は、`Registered > No Show` のフローステップを追加する必要があります。ほとんどのプログラムテンプレートには、これを支援する Manual List Upload Smart Campaign があります。
  - キャンペーン関連のアップロードのみ: `Interesting Moment` を追加する `スマートキャンペーン`。リストに表示される各 `Campaign Member Status` に対して有効化する `トリガー` と `フロー` が十分にあるか確認します。通常これらには、`Attended`、`Attended On-Demand`、`Visited Booth`、`No Show` が含まれますが、これらに限定されません。一般的なルールとしては、`Registered`、`Sales Nominated`、`Marketing Nominated` を含めないことです。前述の `トークン` は、リードに `Interesting Moments` のフルイベントデータを適用するために使用されます。テンプレートによっては、この `スマートキャンペーン` と前述のキャンペーンが同一のものになる場合もあります

#### ベストプラクティスと手順

1. アップロード前に Google Sheet から、`Job Title`、`Company`、`Names`、`Locations` 列の不要なデータ（句読点、`self` など）をすべて削除します。残っている重複や `必須データ` の欠損がないかを確認し、必要に応じて `キャンペーンオーナー` にメンションして修正します
1. 連絡承諾の合意がリストアップロード Issue に記録されている場合のみ `Opt-in=TRUE` を許可します。それ以外は空白のままにします
1. リストを `Campaign Member Status` でソートし、リスト全体を異なるステータスごとに別々のタブに分けます（例: `Attended`、`Registered/No Show` など）
1. タブの .csv ファイルをデスクトップにダウンロードします
1. 対応する .csv ファイルを対応する `静的リスト` にロードし、アップロード時にフィールドをマッチングします。これらのフィールドはほとんど自動的にマッチングされるはずです
     - プログラムに `静的リストが1つだけ` の場合、次のリストをアップロードする前に各アップロード済みリストの `Campaign Member Statuses` を変更します。すべてのリードが一度にアップロードされて、それが不可能な場合は、`スマートリスト` を作成して `Email Address` でフィルタリングし、区別して正しいステータスに変更します
1. `No Show` のリードは常に `Registered` としてロードしてから `No Show` に設定します。そうしないと MQL スコアを受け取りません。確定前に `スマートキャンペーン` がステータスを `No Show` に変更するかを確認し、変更しない場合は `Registered` から `No Show` にステータスを切り替えます
1. テンプレートのセットアップ方法によっては、データ付加の残りのステップが自動化されている場合があります。自動化されていない場合は、上記のデータを適切なフィールドに付加してください
1. しばしば自動化されている `Program Status: Registered -> No Show` を含む、必要な `スマートキャンペーン` のすべてのステップが実行された後、有効化された `スマートキャンペーン` を「スケジュール解除」してオフにします
1. 潜在的なリードロードエラーがないか `Loading Errors` スマートリストをチェックします。
     - スマートリストに表示されたリードの `Person Details` をチェックし、エラーを修正します。Marketo が `重複` を示している場合は、姓に識別しやすいランダムな文字を追加してリードの名前を変更し、リードを SFDC と手動で強制同期します。SFDC でリードを見つけ、既存の重複とマージします。レコード間で `email address` が異なる場合、新しい `email address` をセカンダリメールとして追加します。必要に応じて、適切な `Campaign Member Status` で SFDC キャンペーンに追加します
1. Marketo --> Salesforce 同期が完了したら、[Upload checking template - do not erase](https://gitlab.my.salesforce.com/00Q?fcf=00B4M000004tTvd) リードビューを使用して、データが正しく適用され、スコアリングが行われ、リードがルーティングされたことを確認します。リードビューの `campaign name` フィールドに `キャンペーンタグ` または Marketo プログラム名を入力して、リードをリストとして表示します
1. Salesforce キャンペーン内のリード数が、元のスプレッドシートの合計リード数と一致することを確認します
1. キャンペーンの目的の `Sub-Region` に応じて、`event_list_upload` または `pub-sector-isr` Slack チャンネルでアップロードを発表します。プライベートセクターの投稿には `Region` ラベルを含めます
1. すべてのタスクの完了が確認できたら、~"List Upload: Ready" ラベルを削除し、Issue でアップロード完了を通知します。「MktgOps」ラベルを調整し、マイルストーンを適用します
1. リストアップロード Issue をクローズします

### Trusted インポートと Non-Trusted インポート

Marketo には、信頼できるソースまたは信頼できないソースを選択するオプションがあります。Non-Trusted ソースは、提供されたデータポイントに自信がないリストアップロード用です。例えば、IP から推測された国データを含むリストをロードする場合、より正確な現在の場所データを上書きしたくないでしょう。更新をブロックすると、フィールドが空の場合のみ更新が可能になり、既に値があるフィールドを上書きしません。

以下は、non-trusted インポート時にブロックされるフィールドのリストです。さらにフィールドを追加したい場合は、mops チームに Issue を提出してください。

- First Name
- Last Name
- Job title
- Company
- Country
- City
- State
- Postal Code
