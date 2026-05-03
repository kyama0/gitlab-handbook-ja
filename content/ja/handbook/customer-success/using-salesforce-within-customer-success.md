---
title: "Customer Success における Salesforce の活用"
upstream_path: /handbook/customer-success/using-salesforce-within-customer-success/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

- Customer Success における Salesforce の活用 *（現在のページ）*
- [アカウントオンボーディング](/handbook/customer-success/csm/onboarding/)
- [Customer Success Manager サマリー](/handbook/customer-success/csm/)
- [アカウントトリアージ](/handbook/customer-success/csm/health-score-triage/)
- [アカウントエンゲージメント](/handbook/customer-success/csm/engagement/)

Salesforce のアカウントビューには Customer Success セクションがあり、以下のフィールドが含まれています:

- Health Score - 全体的な顧客の健全性を記録するフィールド
CSM Sentiment - CSM が捉えた [顧客の健全性](/handbook/customer-success/csm/health-score-triage/) を記録するフィールド
- GitLab Customer Success Project - 上記のテンプレートを使用して作成したプロジェクトの URL を入力する場所
- Customer Slack Channel - 内部および外部の顧客コラボレーションに使用される Slack チャネルを記録するフィールド。チャネルが社内のものである場合は、[Communication Chat](/handbook/communication/chat/#account-channels-a_) に従って `#a_<customer-name>-internal` という命名規則に従っていることを確認してください
- Solutions Architect - アカウントに割り当てられた Solutions Architect
- Customer Success Manager - アカウントに割り当てられた Customer Success Manager

## Salesforce オブジェクト

Salesforce は一連のオブジェクトを使用して動作します。標準オブジェクトは Salesforce に含まれているオブジェクトです。Account、Contact、Lead、Opportunity などの一般的なビジネスオブジェクトは、すべて標準オブジェクトです。

カスタムオブジェクトは、貴社や業界に固有の情報を保存するために作成するオブジェクトです。GitLab では、Customer Success に固有の 4 つのカスタムオブジェクトを作成しました。これらは POV と PS Engagement（PSE）です。これらのカスタムオブジェクトをアカウントや Opportunity にリンクし、特定のフィールドを自動入力したり、タスクの完了が必要なときにユーザーに通知したりするなどの自動化を作成することができます。

### Professional Services Engagements（PSE）オブジェクト

Salesforce の PSE オブジェクトは、顧客と合意した PSE の進捗を追跡するために使用されます。これらの PSE は、GitLab がクライアントに提供するプロフェッショナルサービスを記述しています。これは、当社がクライアントに提供する請求対象サービスに関連するため、すべての PSE は適切な Opportunity と Account に関連付ける必要があります。ウォークスルーについては、GitLab Unfiltered の [PS Engagement Object 動画](https://www.youtube.com/watch?v=IDvfHYLk7_Y&feature=youtu.be) を参照してください

各 PSE が関連付けられた Opportunity は Opportunity に関連する情報（金額、IACV など）を含み、PSE 自体はメモ、詳細を保管し、PSE の進捗（ゴーライブ日、キックオフ日など）をモニターします。クライアントが多くのプロフェッショナルサービスを一度に進めたい場合は、これらのサービスはすべて 1 つの Opportunity と 1 つの PSE を通じてカプセル化され関連付けられます。

以前に GitLab からプロフェッショナルサービスを購入した既存のクライアントが、追加のプロフェッショナルサービスを購入したい場合は、Salesforce で新しい Opportunity と PSE が作成されます。Opportunity の作成プロセスについて疑問がある場合は、新しい Opportunity の作成に関する [ハンドブック](/handbook/sales/#when-to-create-an-opportunity) のセクションを確認してください。

PSE に関連付けられた連絡先を追跡するために、PSE-Contact Association リストを使用します。これは、PSE のページレイアウトに移動して PSE-Contact Association 関連リストを見つけることでアクセスできます。そこから、この PSE に関連付けられた連絡先を検索することで新しい関連付けを作成できます。複数の連絡先を 1 つの PSE に関連付けることができます。

#### フィールド

**PS Team**

- Owner - プロジェクトの責任者または監督者
- Project Team - プロジェクトの計画チーム

**PS Info**

- PS Engagement Name - プロジェクトの一意の識別子
- Engagement Type - プロジェクトが固定型か時間ベースかなど
- Opportunity - 関連する PS Opportunity へのリンク
- Opportunity Amount - 予約された金額（PS Opportunity から）
- Success Criteria - このエンゲージメントの終了時にどのような成功とみなされるかについての事前定義された基準
- Sertifi EContract - Sertifi 契約へのリンク
- Status - 現在のプロジェクトステータス
  - Backlog - 新規予約、プロジェクト開始はまだ始まっていない
  - On Hold - 顧客の都合でプロジェクトが保留中
  - Initiation - キックオフまたは計画段階
  - In Progress - プロジェクトが作業中
  - Closure - 顧客のサインを待っているか書類を完了している、ただしサービスは提供済み
  - Completed - プロジェクトが 100%、すべての項目がサインオフされ、この PS Engagement オブジェクトが完了している
  - Cancelled - プロジェクトがキャンセルされた
- SOW Link - SOW へのリンク
- Collaboration Project - GitLab コラボレーションプロジェクトへのリンク
- % Complete - PS エンジニアによるプロジェクトの完了見積り
- General Notes - プロジェクトに関するメモのための自由形式テキスト

**Project Tracking**

- Scoped Hours - SOW で範囲定義された時間
- Hours Consumed - 現在までに消費された請求可能時間
- Remaining Project Hours - プロジェクトの残り時間
- Hours Updated Date - Hours Consumed が最後に更新された日付

**PSE Approval**

- Approved - PS マネジメントがプロジェクト開始可能であるとサインオフした
- Approver - `Approved` ボックスにチェックを入れた Salesforce ユーザー
- Passive acceptance language in SOW? - SOW に SOW を完了するためのパッシブ受諾文言が含まれているか
- Signed Acceptance from Customer - GitLab がプロジェクト開始のための顧客からの署名済み承認を受け取ったことの確認
- Passive acceptance used for sign off? - SOW を完了するためにパッシブ受諾を使用したか
- Sign Off Date - サインオフ日、Email で受諾されたかパッシブ受諾を実行されたかにかかわらず

**Project Timeline**

- Kick Off Date - プロジェクト計画とスケジュールが開始された日付
- Expected Start Date - プロジェクトの技術的部分が開始されるべき予測日
- Expected Completion Date - プロジェクトが完了するべき予測日
- Expected Project Length - 予測プロジェクト期間、`Expected Start Date` - `Expected Completion Date`
- Actual Project Start Date - 顧客向けの作業が実際に始まった時点
- Completed Date - 実際の完了日
- Actual Project Length - 実際のプロジェクト期間、`Actual Start Date` - `Completed Date`

#### PS Engagement オブジェクトのキックオフ

PS Engagement を開始する際、以下のフィールドに記入する必要があります:

- Approved By
- Actual Project Start Date
- Expected Completion Date
- Opportunity（自動入力）
- Scoped Hours
- Success Criteria
- Sertifi Contract
- PS Engagement Link
- Collaboration Project
- Signed Acceptance from Customer

##### Approved By

PSE オブジェクトが承認されたとき、SOW の正確性と適切な実行を確保するために以下がレビューされます:

- PS マネジメントチームが SOW をレビューした
- 該当する場合、GitLab Legal が契約をレビューした
- SOW 契約に、顧客が 5 日以内にサインオフしない場合、自動的に完了とみなされることが明示的に記載されている

#### PS Engagement オブジェクトの更新

PS Engagement オブジェクトは頻繁に更新されるべきです。更新する際、さまざまなステークホルダーの利益のために、以下のフィールドを更新する必要があります:

- Status
- Hours Consumed
- Hours Updated Date
- % Complete
- 該当する場合、General Notes やその他のエリアを更新

#### PS Engagement オブジェクトの完了

PS Engagement オブジェクトを完了する際、PS Engagement のすべてのフィールドをレビューして正確性と完全性を確保します。Salesforce の検証ルールは、ステータスを `Complete` としてマークする前にフィールドが完了していることを保証するように設定されています。一般的なルールとして、以下の質問を確認してください:

- 日付は正確か？
- 成功基準を達成したか？
- すべてのリンク（PS Engagement Link、Collaboration Project など）は正しいか？
- すべての必要書類が GitLab および顧客によってサインオフされているか？
- 残りのすべてのフィールドが完了し、Professional Services、Finance、Leadership によるレビューの準備が整っているか？

上記の質問がレビューされた後、PS Engagement を `Completed` としてマークすることができ、これにより Salesforce で各種ステークホルダー向けの特定のイベントがトリガーされます。

### Proof of Value（POV）オブジェクト

POV のドキュメントについては、[このページ](/handbook/solutions-architects/tools-and-resources/pov) を参照してください。

## Salesforce - Customer Success の自動化

### 新規 Zendesk チケット通知

新しく作成されるすべての Zendesk チケットについて、チケットが関連付けられているアカウントの Customer Success Manager と Account Owner に新しいチケットを通知する Email 通知が送信されます。これは現在、Zendesk チケットが Salesforce で初めて作成されたときに 1 回だけ発生する 1 回限りの通知です。

### Salesforce 内の Email を追跡する

顧客と Email でコミュニケーションする人は、自分の Email がアカウントのアクティビティ履歴で Salesforce 内で追跡されていることを確認する必要があります。[Gainsight](/handbook/customer-success/csm/gainsight/) のロールアウト後も、Gainsight のタイムライン内の Email は価値よりもノイズを生成する可能性があるため、Salesforce に Email をログとして残しています。

Salesforce で Email をログとして残すには:

1. [Salesforce](https://gitlab.my.salesforce.com/home/home.jsp) にログイン
1. 右上の自分の名前をクリック
1. "My Settings" をクリック
1. 左サイドバーの "Email" をクリック
1. "My Email to Salesforce" をクリック
1. "Your Email to Salesforce address" の隣にある Email アドレスを保存

顧客に Email を送る際は、その Email を Salesforce 内で追跡できるよう、"email to Salesforce address" を bcc に追加してください。

以下の代替方法もあります:

1. GitLab の Email アドレスと Salesforce アカウントにリンクされた [Outreach](/handbook/business-technology/tech-stack/#outreachio) アカウントを持っている場合、Email は自動的に Salesforce と同期されます
1. Outreach を持っていない場合、顧客関連の Email を簡単にログとして残すために [Salesforce Chrome プラグイン](/handbook/sales/prospect-engagement-best-practices) の使用を検討してください

### Salesforce でレポートを作成する

新しいレポートを作成するよりも、既存のレポートを使用するほうがベストプラクティスであり、整然と保つことができます。不明な場合は、Operations チームに尋ねてください。Salesforce レポートの作成は難しく感じる場合がありますが、ここでいくつかのヒントを示します。お好みであれば、[Report Builder](https://www.youtube.com/watch?v=7_LkmrhKf2g) の動画を視聴することもできます。

1. Salesforce の Reports に移動してください
1. "New Report" をクリックしてください
1. "Report Type" を選択してください
   1. ヒント: 通常、Account（Salesforce アカウントを調査したい場合）または Opportunity（オープン/クローズの Opportunity をレポートしたい場合）を選択するでしょう
   1. ヒント: "Report Type" は使用したいフィールドのグループを選択することです（例: Opportunity: Opportunity に関連するすべてのデータ）
1. レポート構造を設定してください:
   1. Show: どの Account/Opportunity を表示するか選択してください（通常は "all" を選択したい）
   2. Date field: 結果をフィルタする日付を選択してください。常に "All Time" を選択することもできます
   3. Add filters（白いボックス）: 左側の任意のフィールドを使用してフィルタしてください
   4. Preview: 任意のフィールドを新しい列としてドラッグしてください。たとえば、Account Name、Account Owner、Customer Success Manager/Solutions Architect を追加できます
1. 完了したら、"Save" を押すか "Run Report" を押してレポートをプレビューしてください。実行する場合、次のページで Save を押すことができます。
1. 何があっても、透明性のために他のユーザーもアクセスできるフォルダーに保存することを確認してください
1. おめでとうございます！完了です。
