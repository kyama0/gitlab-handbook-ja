---
title: "カスタマーサクセスにおける Salesforce の活用"
upstream_path: /handbook/customer-success/using-salesforce-within-customer-success/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T14:07:20+02:00"
---

- カスタマーサクセスにおける Salesforce の活用 *（現在のページ）*
- [アカウントオンボーディング](/handbook/customer-success/csm/onboarding/)
- [カスタマーサクセスマネージャーサマリー](/handbook/customer-success/csm/)
- [アカウントトリアージ](/handbook/customer-success/csm/health-score-triage/)
- [アカウントエンゲージメント](/handbook/customer-success/csm/engagement/)

Salesforce のアカウントビューには、以下のフィールドを持つカスタマーサクセスセクションがあります。

- Health Score - 顧客の全体的なヘルスを記録するフィールド
CSM Sentiment - CSM が[顧客のヘルス](/handbook/customer-success/csm/health-score-triage/)についての所見を記載するフィールド
- GitLab Customer Success Project - 上記で説明したテンプレートを使って作成したプロジェクトの URL を入力するフィールド
- Customer Slack Channel - 顧客の内部および外部コラボレーションに使用される Slack チャンネルを記録するフィールド。チャンネルが内部のものである場合、[コミュニケーションチャット](/handbook/communication/chat/#account-channels-a_)に従って `#a_<customer-name>-internal` という命名規則に従うことを確認する
- Solutions Architect - アカウントに割り当てられた Solutions Architect
- Customer Success Manager - アカウントに割り当てられたカスタマーサクセスマネージャー

## Salesforce オブジェクト

Salesforce はオブジェクトの集まりを使って動作します。標準オブジェクトは Salesforce に含まれているオブジェクトです。アカウント、コンタクト、リード、商談のような一般的なビジネスオブジェクトはすべて標準オブジェクトです。

カスタムオブジェクトは、会社や業界に固有の情報を格納するために作成するオブジェクトです。GitLab では、カスタマーサクセス固有の4つのカスタムオブジェクトを作成しました。これらは POV と PS Engagements（PSE）です。これらのカスタムオブジェクトをアカウントと商談にリンクし、特定のフィールドの自動入力やタスク完了時のユーザー通知などの自動化を作成できます。

### Professional Services Engagements（PSE）オブジェクト

Salesforce 内の PSE オブジェクトは、お客様と合意した PSE の進捗を追跡するために使用されます。これらの PSE は、GitLab がクライアントに提供するプロフェッショナルサービスを説明します。これはクライアントに提供する有料サービスに関連するため、すべての PSE は適切な商談とアカウントに関連付けられている必要があります。ウォークスルーについては、GitLab Unfiltered の [PS Engagement Object ビデオ](https://www.youtube.com/watch?v=IDvfHYLk7_Y&feature=youtu.be)を参照してください。

各 PSE が関連付けられる商談には、商談に関連する情報（Amount、IACV など）が含まれ、PSE 自体にはノート、詳細、進捗の監視情報（Go Live Date、Kick Off Date など）が含まれます。クライアントが多くのプロフェッショナルサービスを一度に進めたい場合、これらすべてのサービスは 1 つの商談と 1 つの PSE を通じてカプセル化されて関連付けられます。

以前 GitLab からプロフェッショナルサービスを購入した既存のクライアントが追加のプロフェッショナルサービスを購入したい場合、Salesforce で新しい商談と PSE が作成されます。新しい商談の作成に関する質問がある場合は、[ハンドブック](/handbook/sales/#when-to-create-an-opportunity)の新規商談作成セクションを確認してください。

PSE に関連付けられたコンタクトを追跡するために、PSE-Contact Association リストを活用しています。これには、PSE ページレイアウトに移動し、PSE-Contact Association 関連リストを見つけることでアクセスできます。そこから、この PSE に関連付けられたコンタクトを検索することで、新しい関連付けを作成できます。複数のコンタクトを単一の PSE に関連付けることができます。

#### フィールド

**PS Team**

- Owner - プロジェクトのオーナーまたは監督者
- Project Team - プロジェクトの計画チーム

**PS Info**

- PS Engagement Name - プロジェクトの一意の識別子
- Engagement Type - プロジェクトが fixed か time based かなど
- Opportunity - 関連する PS 商談へのリンク
- Opportunity Amount - 予約された金額（PS 商談から）
- Success Criteria - このエンゲージメントの終了時の成功の状態を示す事前定義された基準
- Sertifi EContract - Sertifi 契約へのリンク
- Status - 現在のプロジェクトステータス
  - Backlog - 新規予約、プロジェクト開始未着手
  - On Hold - 顧客都合でプロジェクトが保留中
  - Initiation - キックオフまたは計画段階
  - In Progress - プロジェクトに着手中
  - Closure - 顧客の署名待ちまたは書類最終調整中、サービスは提供済み
  - Completed - プロジェクトは 100% 完了、すべての項目が承認済み、この PS Engagement オブジェクトは完了
  - Cancelled - プロジェクトはキャンセルされた
- SOW Link - SOW へのリンク
- Collaboration Project - GitLab コラボレーションプロジェクトへのリンク
- % Complete - プロジェクト完了に関する PS エンジニアの見積もり
- General Notes - プロジェクトに関するノートの自由形式テキスト

**Project Tracking**

- Scoped Hours - SOW でスコープされた時間
- Hours Consumed - これまでに消費された請求可能時間
- Remaining Project Hours - プロジェクトの残時間
- Hours Updated Date - Hours Consumed が最後に更新された日付

**PSE Approval**

- Approved - PS マネジメントがプロジェクト開始可能と承認した
- Approver - `Approved` ボックスにチェックを入れた Salesforce ユーザー
- Passive acceptance language in SOW? - SOW に SOW 完了のための受動的受諾文言が含まれているか?
- Signed Acceptance from Customer - GitLab がプロジェクト開始のために顧客から承認を取得していることの確認
- Passive acceptance used for sign off? - SOW 完了に受動的受諾を使用したか?
- Sign Off Date - メール経由で受諾されたか受動的受諾を実行したかにかかわらず、サインオフ日

**Project Timeline**

- Kick Off Date - プロジェクト計画とスケジューリングが開始された日付
- Expected Start Date - プロジェクトの技術部分が開始される予定の日付
- Expected Completion Date - プロジェクトが完了する予定の日付
- Expected Project Length - 予定プロジェクト期間、`Expected Start Date` - `Expected Completion Date`
- Actual Project Start Date - お客様向けに実際に作業が開始された日
- Completed Date - 実際の完了日
- Actual Project Length - 実際のプロジェクト期間、`Actual Start Date` - `Completed Date`

#### PS Engagement オブジェクトのキックオフ

PS Engagement の開始時には、以下のフィールドを記入する必要があります。

- Approved By
- Actual Project Start Date
- Expected Completion Date
- Opportunity（自動入力される）
- Scoped Hours
- Success Criteria
- Sertifi Contract
- PS Engagement Link
- Collaboration Project
- Signed Acceptance from Customer

##### Approved By

PSE オブジェクトが承認された際には、SOW の正確性と適切な実行を確保するために、以下がレビューされます。

- PS マネジメントチームが SOW をレビューした
- 該当する場合、GitLab 法務が契約をレビューした
- 顧客が 5 日以内にサインオフしない場合、SOW 契約には自動的に完了とみなされることが明示的に記載されている

#### PS Engagement オブジェクトの更新

PS Engagement Object は頻繁に更新されるべきです。更新時には、さまざまなステークホルダーの利益のために、以下のフィールドを更新する必要があります。

- Status
- Hours Consumed
- Hours Updated Date
- % Complete
- 該当する場合、General Notes やその他の領域を更新

#### PS Engagement オブジェクトの完了

PS Engagement オブジェクトを完了する際には、PS Engagement のすべてのフィールドをレビューして、正確性と完全性を確認します。Salesforce のバリデーションルールは、Status を `Complete` に設定する前にフィールドが完了していることを確認するために設定されています。一般的なルールとして、以下の質問を確認してください。

- 日付は正確か?
- Success Criteria を達成したか?
- すべてのリンク（PS Engagement Link、Collaboration Project など）は正しいか?
- 必要なすべての文書は GitLab と顧客によってサインオフされているか?
- すべての残りのフィールドが完了しており、Professional Services、Finance、Leadership によるレビュー準備ができているか?

上記の質問が確認されたら、PS Engagement を `Completed` としてマークでき、これにより Salesforce 内のさまざまなステークホルダー向けの特定のイベントがトリガーされます。

### Proof of Value（POV）オブジェクト

POV のドキュメントについては[このページ](/handbook/solutions-architects/playbooks/pov)を参照してください。

## Salesforce - カスタマーサクセスの自動化

### 新規 Zendesk チケット通知

新規 Zendesk チケットが作成されるたびに、チケットが関連付けられているアカウントのカスタマーサクセスマネージャーと Account Owner に新規チケットを知らせるメール通知が送信されます。これは現在、Zendesk チケットが Salesforce で最初に作成された時に発生する 1 回限りの通知です。

### Salesforce 内でのメール追跡

メールで顧客とコミュニケーションを取る人は、自分のメールがアカウントのアクティビティ履歴内で Salesforce 内で追跡されることを確実にする必要があります。[Gainsight](/handbook/customer-success/csm/gainsight/) の展開後も、Gainsight のタイムライン内のメールは価値よりノイズを生み出す可能性があるため、引き続き Salesforce にメールをログします。

Salesforce にメールをログするには:

1. [Salesforce](https://gitlab.my.salesforce.com/home/home.jsp) にログインする
1. 右上の自分の名前をクリックする
1. "My Settings" をクリックする
1. 左サイドバーで "Email" をクリックする
1. "My Email to Salesforce" をクリックする
1. "Your Email to Salesforce address" の横に提供されているメールアドレスを保存する

顧客にメールを送るたびに、"email to Salesforce address" をメールに BCC して、Salesforce 内で追跡されるようにします。

これらの代替手段が存在します:

1. GitLab メールアドレスと Salesforce アカウントにリンクされている [Outreach](/handbook/business-technology/tech-stack/#outreachio) アカウントを持っている場合、メールは自動的に Salesforce と同期されます
1. Outreach を持っていない場合は、顧客関連メールを簡単にログするために [Salesforce Chrome プラグイン](/handbook/sales/prospect-engagement-best-practices)を検討してください

### Salesforce でのレポート構築

新規に作成するよりも既存のレポートを使用することがベストプラクティスであり、整理整頓を保つことができます。不明な場合は、Operations チームに尋ねてください。Salesforce レポートの構築は気が遠くなるように感じるかもしれませんが、いくつかのヒントを紹介します。お好みであれば、[Report Builder](https://www.youtube.com/watch?v=7_LkmrhKf2g) のビデオを見ることもできます。

1. Salesforce の Reports に移動する
1. "New Report" をクリックする
1. "Report Type" を選択する
   1. ヒント: 通常、Account（Salesforce アカウントを調査したい場合）または Opportunity（オープン／クローズ済み商談のレポートを作成したい場合）を選択することになります
   1. ヒント: "Report Type" は使用したいフィールドのグループを選択することです（例: Opportunity: 商談に関連するすべてのデータ）
1. レポートの構造:
   1. Show: 表示する Account/Opportunity を選択する（通常は "all" を選択することになります）
   2. Date field: 結果をフィルタする日付を選択する。常に "All Time" を選択することもできます
   3. Add filters（白いボックス）: 左側の任意のフィールドを使ってフィルタできます
   4. Preview: 任意のフィールドを新しい列としてドラッグできます。例えば、Account Name、Account Owner、Customer Success Manager/Solutions Architect を追加できます
1. 完了したら、"Save" を押すか、"Run Report" を押してレポートをプレビューします。実行する場合、次のページで Save を押すことができます。
1. いずれにしても、他の人もアクセスできるフォルダに保存して、透明性を確保してください
1. おめでとうございます! 完了しました。
