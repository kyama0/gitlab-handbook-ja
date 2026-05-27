---
title: "Zip エンドユーザーガイド"
description: "Zip エンドユーザーガイド"
upstream_path: "/handbook/business-technology/enterprise-applications/guides/zip-guide/"
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
translated_at: "2026-05-27T00:00:00Z"
translator: "claude"
stale: false
lastmod: "2026-05-27T15:58:38-04:00"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Zip とは

Zip は Coupa のアドオンで、承認プロセスを合理化します。関連するすべての情報を収集して承認を管理し、必要なサービスをできるだけ早く提供できるようにします。その結果、購入リクエストの状況や承認プロセスの現在のステージを確認できるようになります。

{{% alert title="Note" color="info" %}}
Zip の詳細と購入リクエストの提出方法については、[2 Minute Zip Overview Video](https://ziphq.wistia.com/medias/d7isqa87qz) をご確認ください。
{{% /alert %}}

### Zip へのアクセス方法

Zip へのアクセスをリクエストするには:

1. [Lumos App Store](/handbook/security/corporate/systems/lumos/ar/) を利用して、Zip のリクエストと Coupa の別々のリクエストを提出します]。Zip へのアクセスをリクエストするすべてのユーザーは、PO と請求書を管理するための Coupa ライセンスも必要です

   - a) 「*このアクセスの正当な理由*」の質問には、管理する予算、マネジメント承認、発注書、請求書承認の内容を記述してください。

   - b) Zip/Coupa へのアクセスが即時必要な場合は、`#coupa_help` Slack チャンネルに投稿してください。

2. アクセスがプロビジョニングされたら、[Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします
3. `Zip` タイルを見つけます。

- *Zip はユーザーがログインした状態で新しいタブで開きます。*
- *Zip のメインページは以下のようになっているはずです。*

![zip-image-1](/images/business-technology/enterprise-applications/guides/zip-guide/login-page.png)

## Zip - はじめに

### 新しいリクエストの開始方法

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします。
2. 上部メニュー右側の `+New Request` をクリックします。
3. 購入内容に合致する具体的なリクエストタイプを選択します。各リクエストタイプは独自の受付フォームを開くため、選択したリクエストのタイプに応じてセクションや必須フィールドが異なる場合があります。
4. 申請フォームを記入します
   - a) リクエストタイプによっては、一般情報、ベンダー詳細、支出情報、IT セキュリティおよびプライバシー、補足資料などのセクションの記入を求められる場合があります。
5. あなたがリクエスト者である場合は、自分の名前を、または誰の代理でリクエストしているかを追加します。
6. `What are you looking to purchase?`（何を購入しようとしていますか?）の質問では、どの商品（コモディティ）を購入するのかを尋ねています。たとえば、この購入が Marketing チームのためのものであれば、Marketing Programs を選択し、次に購入内容を表す適切なサブカテゴリを選択してください。
7. 支払いを Coupa の仮想カードで行うかどうかを選択します。

![zip-image-2](/images/business-technology/enterprise-applications/guides/zip-guide/new-request4.png)

![zip-image-3](/images/business-technology/enterprise-applications/guides/zip-guide/zip-workflows.png)

![zip-image-4](/images/business-technology/enterprise-applications/guides/zip-guide/new-request5.png)

### 購入リクエストの商品カテゴリとサブカテゴリ

1. Consulting, Professional Services & Training
   - Consulting Fees
   - Professional dues, membership fees
   - Revenue Partner Payments
2. Finance & Legal
   - Accounting
   - Insurance - Business
   - Legal
   - Licenses & Registrations
   - Tax Commodities
3. General & Admin
   - Employee Benefit - Bike to work
   - Security Deposits (Greater than 12 months)
   - Credit Card Transaction fees
   - Gifts & Donations
   - Partner Growth Fees
   - Postage & Shipping
   - Printing & Copying
   - Rent or Lease
   - Coworking Space
4. Hosting
   - Hosting Services
5. Marketing Programs
   - Marketing Site
   - Demand Advertising
   - Field Events
   - Swag
   - Email
   - Brand
   - Prospecting
   - Channel Partner Rebates
6. Office Equipment & Supplies
   - Computer & Office Equipment
   - Office Supplies
   - Computer & Office Equipment (Capitalized)
7. People & Recruiting
   - Employee Training
   - Training & Development
8. Software
   - Software Subscription
9. Telecom
   - Internet
   - Telephone
10. Travel & Entertainment, Company Events
    - Airfare
    - Business Meals & Entertainment
    - Company Functions
    - Hotels & Lodging
    - Meals - Company Provided
    - Parking, Gas, Tolls, Mileage
    - Taxis, Car Service, Public Transportation
    - IACV Evangelism Dinner Incentive
    - Team Building

### 新しいベンダーのリクエスト方法

新しいベンダーを設定するプロセスは `Zip` から始まります。新しい購入リクエストを作成するだけで、新しいベンダーを追加するオプションが表示されます。リクエストが提出されると、**Procurement** チームに通知が届き、`Coupa` に新しいベンダーが追加されます。

### 発注書の生成・表示・ベンダーへの送信方法

購入リクエストが Zip で完全に承認されると、Zip は仮想カード以外の購入について発注書を自動的に生成します。
発注書は購入リクエストのリクエスト者に割り当てられるため、リクエスト者はリクエストと、その結果生成された PO の両方にアクセスできます。

発注書は主に 2 つの方法で見つけられます。

1. `My Requests` 内の元のリクエストから
2. 左ナビゲーションの Purchase Orders 項目から（あなたに割り当てられた発注書が表示されます）

発注書を開くと、Zip はベンダー詳細、バイヤー詳細、および元のリクエストから引き継がれた関連する価格・PO 情報を表示します。

発注書をベンダーに送信するには、発注書を開いて送信アクションを使用します。1 人以上のベンダー担当者を選択し、必要に応じて社内連絡先を CC に追加し、メールメッセージを追加し、合計購入金額を非表示にするか表示するかを選択できます。

PO が送信されると、ベンダーに通知が届き、ベンダー担当者としてベンダーポータルにオンボーディング済みであれば、ベンダーポータルで発注書を閲覧できます。

### リクエストの変更方法

更新が必要な既存の発注書がある場合、複数の方法で発注書の変更リクエストを開始できます。

   1. `+ New Request` から PO Change Order / Request a Change オプションを選択する。
   2. 発注書ページの `Request a Change` ボタンを使用する。
   3. PO が生成された後の元のリクエストページから。

**重要** 変更リクエストは、リリース済みの Coupa 発注書 (PO) がある場合にのみ提出できます。Coupa/ZIP で承認プロセス進行中の申請を更新する必要がある場合は、Procurement Team に連絡してください。

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします。
2. ZIP を開きます
3. 上部メニュー右側の `+New Request` をクリックします。
4. `Request a Change (amend contracts or PO change)` を選択します
5. General Information フォームを記入します。既存の `Coupa` 発注書番号（#1000.... で始まる）を入力していることを確認してください。
6. Spend Information フォームを記入します。

   - a) この購入に必要となる新しい総予算は:
   - 元の発注書 (PO) 金額と追加コストの合計である、新しい最終コストを記入します

   - b) 明細項目の内訳を入力してください:
   - 「Line item」セクションで、新しい最終コストを指定します。

   **元の PO に 2 つ以上の明細項目があった場合、Change Order の ZIP リクエストには更新すべき明細項目のみを含めてください（明細項目名は元の PO からコピーします）。**

7. 変更に関するサプライヤーからの補足資料を添付します。これは購入タイプに応じて、SOW、Change Request、Order Form のいずれか、またはそれらの組み合わせとなる場合があります。
8. 変更リクエストを提出します。`Procurement` チームがあなたの代わりに `Coupa` で PO を修正します。

{{% alert color="info" %}}
変更リクエストには新規リクエストと同じ承認が必要となる点にご注意ください。
{{% /alert %}}

**注** 変更リクエストはベンダーの更新のために提出することはできません。PO のベンダーを更新する必要がある場合は、#procurement Slack で Procurement Team に連絡してください。

### POC 契約への署名のリクエスト方法

新しいベンダーと POC を実施する予定で、コストの発生しない契約 (Agreement) がある場合は、以下の手順に従ってください。

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします。
2. ZIP を開きます
3. 上部メニュー右側の `+New Request` をクリックします。
4. `Request a Demo/Trial ($0 Contracts)` を選択します
5. 申請フォームを記入します。
6. POC に関するサプライヤーからの補足資料を添付します。
7. リクエストを提出します。
8. Legal および Security の承認が集まった後、Procurement Team が署名プロセスを進めます。

### 仮想カードのプロセスはどのように機能しますか?

仮想カードのリクエストは、通常の購入リクエストとして Zip を通過します。

   1. `Will a virtual card be used to pay this vendor?`（このベンダーへの支払いに仮想カードを使用しますか?）の質問に `Yes` を選択し、関連するすべての情報を記入します。
   2. 受付の際に、ベンダーが MasterCard を受け付けるかどうかを確認します。受け付ける場合は、購入を仮想カードで支払う旨を示します。
    - ベンダーが仮想カードを受け付けるかどうかまだ分からない場合でも、リクエストを提出して当初は発注書での支払い方法のままにしておくことができます。リクエストがまだ完全に承認されていない限り、Procurement または admin チームが支払い方法を仮想カードに切り替えられます。
   3. リクエストがすでに完全に承認され PO として生成されている場合は、発注書をキャンセルし、元のリクエストをクローンして、支払い方法を仮想カードに変更する必要があります。
   4. リクエストが仮想カードのリクエストとして完全に承認されると、Zip は発注書の代わりに仮想カードを生成し、それをリクエストに添付します。
   5. リクエスト者は仮想カードを開き、カード詳細を表示し、利用限度額、これまでの利用合計、加盟店での取引を確認できます。
   6. 各仮想カード取引について、カード保有者はレシートをアップロードし、取引詳細を確認し、その取引をレビュー済みとしてマークすることが求められます。
   7. カード保有者のレビューが完了すると、Accounts Payable が取引をレビューし、NetSuite へ同期します。元の購入リクエストですでに承認が集められているため、この時点で追加の承認は必要ありません。

### 仮想カードの変更リクエストの提出方法

   1. 既存の仮想カードへの変更をリクエストするには、`+ New Request` をクリックして `Virtual Card Change Requests` を選択します。
   2. 発注書の変更リクエストとは異なり、仮想カードの変更リクエストは発注書ではなく仮想カードそのものに紐づきます。
   3. リクエストのタイトルを付け、既存の仮想カードをリンクします。元の仮想カードリクエストを開き、View Full Virtual Card を選択し、仮想カードのリンクをコピーして受付フォームに貼り付けます。
   4. 新しい開始日や終了日、改定後の合計金額、通貨、各種補足の添付資料など、更新後の仮想カード詳細を受付フォームに記入します。
   5. 提出後、リクエストは通常の承認フローに従います。承認されると、Procurement または admin チームが承認された変更を仮想カードに適用します。

### リクエストの追跡方法

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします。
2. ZIP を開きます
3. Zip のホームページで、ページ左側の `Requests` をクリックします。
   - *提出したすべてのリクエストの一覧が表示されます。*
   - *提出済みリクエストを検索するための複数のオプションがあります（購入名、ベンダー名、リクエスト番号など）。*
   - *下書き状態のリクエストもこのページからアクセスできます。*
4. 特定のリクエストを選択すると、ページ上部に承認ワークフローが表示されます。

![zip-image-6](/images/business-technology/enterprise-applications/guides/zip-guide/submitted-request2.png)

{{% alert title="Note" color="info" %}}
どの承認が完了しており、どの承認がまだ完了していないかを確認できます。リクエストがさまざまな関係者によって承認されるにつれて、Slack とメールで自動通知が送信されます。
{{% /alert %}}

### 新しいリクエストのステータス確認方法

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします。
2. ZIP を開きます
3. Zip のホームページで、ページ左側の `Requests` をクリックします。
4. ステータスを確認したいリクエストを選択します。

- ZIP のリクエストが `Coupa Approval and Execute Contract` ノードに到達している場合、Coupa でリクエストのステータスを確認できます。
  - 承認フローの左上隅にある「Create Purchase Requisition」アイコンをクリックします
  - 次に「View in Coupa」をクリックします
  - Coupa にリダイレクトされ、承認フローと現在の承認者を確認できます。

![zip-image-status](/images/business-technology/enterprise-applications/guides/zip-guide/zip_status.png)

### ドキュメントの署名ステータス確認方法

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします。
2. ZIP を開きます
3. Zip のホームページで、ページ左側の `Requests` をクリックし、対象のリクエストを見つけます。
4. リクエストページで `Documents` セクションまでスクロールダウンします。

契約のタイトルに「Executable」という語が含まれている場合、それは Legal チームによってレビューおよびスタンプ（押印）されたことを示します。これは、Coupa ですべての承認が得られていれば、契約が署名に回す準備ができていることを意味します。

- 契約がすべての関係者によって完全に署名されている場合、そのステータスは `Final` と示され、タイトルに `Signed` という語が含まれます。
- 契約が署名待ちの場合、必要な署名の数とすでに得られている署名に応じて、「0/2」や「1/2」のような分数がステータスに表示されます。たとえば、必要な署名のいずれもまだ得られていなければ、ステータスは「0/2」となります。必要な 2 つのうち 1 つの署名が得られていれば、ステータスは「1/2」となります。

### 請求書の詳細と承認の表示方法

Zip 内の請求書は、いくつかの方法で見つけられます。

1. 請求書が承認のためにあなたに割り当てられている場合は `Needs My Approval` 内
2. PO に紐づく請求書については、元になった購入リクエストから
3. 発注書から（請求情報に、PO とその明細項目にリンクされた請求書が表示されます）

請求書を開くと、次のことができます。

- 請求書の承認ルート、現在および残りの承認者、ベンダーの添付資料、GL および会計関連フィールド、請求書の明細項目を表示する
- `Source` タブを確認して、請求書がどのように Zip に入ってきたかをチェックする — 請求書は、AP にメールするか、ベンダーが発注書に対してベンダーポータル経由で提出するかのいずれかで作成できます
- 請求書内でコメントや @メンションを使用して、質問したり、詳細をエスカレーションしたり、承認者やその他のステークホルダーに通知したりする

請求書が完全に承認されると、GL に適用するために NetSuite へ同期されます。

### Legal の承認 / レッドライン

まだ条件について合意に達していない新しいベンダーが関わるリクエストでは、Legal チームが当社のポリシーや法的要件への準拠を確保するために、ベンダーの契約に編集やレッドラインを加える場合があります。

Legal チームがベンダーの契約をレビューしてレッドラインを加えた場合、次のアクションを取るべきです。

1. ステークホルダー / リクエスト者の役割:

   リクエスト者は、以下のいずれかに該当する場合を除き、メールでベンダーに法務上のレッドラインを送信する責任があります。

   - Procurement チームがすでにベンダーと積極的に交渉または連絡を行っている
   - 契約総額が $100k を超える
   - Procurement が、何らかの理由で自分たちでレッドラインを送信すると具体的にコメントしている

   リクエスト者がベンダーにレッドラインを送信する場合、可視性のために Procurement の承認者をメールの CC に入れることが極めて重要です。

2. Procurement チームのサポート:

   Procurement チームは、Procurement が積極的に交渉しているリクエストや $100k を超えるリクエストについて、Legal のメモをベンダーにルーティングすることでステークホルダーをサポートできます。Procurement は、レッドラインがベンダーに送信された際に Zip リクエストにコメントを残し、リクエスト者がメールの CC に入れられます。

3. ZIP リクエスト番号付きのタイトル:

   ベンダーと連絡を取る際やレッドラインに関連するアクションを取る際は、メールの件名に ZIP リクエスト番号を含めるべきです。これにより、プロセス全体を通じて特定のリクエストを追跡・参照しやすくなります。

4. ZIP リクエストへのコメント:

   レッドラインに関してベンダーに連絡したチームメンバーは誰でも、メモがベンダーに送信されたことを示すために ZIP リクエストにコメントを残す必要があります。これにより、チーム内での適切な文書化とコミュニケーションが確保されます。

### リクエストのキャンセル方法

1. Zip のホームページで `Submitted` タブをクリックします。
2. キャンセルしたい購入リクエストを見つけて選択します。
3. 購入リクエストを選択したら、`…` のロゴをクリックして `Cancel Request` をクリックします。
4. 短いキャンセル理由を記入して `Confirm` をクリックします。

![zip-image-14](/images/business-technology/enterprise-applications/guides/zip-guide/cancel-request1.png)

![zip-image-15](/images/business-technology/enterprise-applications/guides/zip-guide/cancel-request2.png)

![zip-image-16](/images/business-technology/enterprise-applications/guides/zip-guide/cancel-request3.png)

### リクエストのクローン方法

1. Zip のホームページで `Submitted` タブをクリックします。
2. クローンしたい購入リクエストを見つけて選択します。
3. 購入リクエストを選択したら、`…` のロゴをクリックして `Clone request` をクリックします。
4. `Clone` をクリックします。

![zip-image-17](/images/business-technology/enterprise-applications/guides/zip-guide/clone-request1.png)

![zip-image-18](/images/business-technology/enterprise-applications/guides/zip-guide/clone-request2.png)

![zip-image-19](/images/business-technology/enterprise-applications/guides/zip-guide/clone-request3.png)

### リクエストへのコメント方法

すべてのリクエスト詳細ページには `Comments` タブがあり、そのリクエストにアクセスできるすべてのユーザー間のコミュニケーションの場を提供します。組織のメンバーからのコメントに加えて、このタブはベンダーがベンダーポータルでコメントを残したときの通知も提供します。
ユーザーは質問やコメントを投稿でき、その連鎖にいるすべてのステークホルダー（リクエスト者とすべての承認者）に通知が届いて確認・返信できます。または、`@` で特定の人をタグ付けすると、その人だけに通知が届きます。

![zip-image-7](/images/business-technology/enterprise-applications/guides/zip-guide/comments1.png)

## Zip - 承認プロセス

Legal、HR、Procurement、Security、Privacy によって特定された一部のユーザーは、自分に割り当てられた特定の購入リクエストを承認または却下するオプションを持ちます。

### リクエストの承認方法

1. リクエストにあなたの承認が必要な場合、Zip は個人設定に応じて、メール、Slack、アプリ内通知であなたに通知できます。
2. 通知から、または Zip のホームページの Needs My Approvals からリクエストを開けます。
3. リクエスト内で自分の承認ノードを開き、判断に関連する詳細をレビューします。ノードにサブタスクが含まれている場合は、必要に応じて承認前にそれらのタスクを完了します。
4. 承認者は、承認ノードから直接 Approve、Reject、Request More Info を使用できます。
5. 判断を下す前に追加のコンテキストが必要な場合は、コメントや @メンションを使って、リクエスト者、Procurement、AP、またはレコードにアクセスできるその他のステークホルダーを巻き込みます。

![zip-image-8](/images/business-technology/enterprise-applications/guides/zip-guide/approval-request7.png)

{{% alert title="Note" color="info" %}}
承認通知の設定（メールおよび/または Slack）は、Zip にログインして次をクリックすることで設定できます。
Settings -> Personal Settings -> Notifications。
{{% /alert %}}

![zip-image-9](/images/business-technology/enterprise-applications/guides/zip-guide/approval-request9.png)

![zip-image-10](/images/business-technology/enterprise-applications/guides/zip-guide/approval-request8.png)

### 自分の承認が必要なすべてのリクエストの確認方法

あなたが自分のキューのデフォルトの担当者である場合、右上の `Dashboard` をクリックし、Home ダッシュボードページで `Needs My Approval` タブを選択するだけで、承認待ちのすべてのリクエストを表示できます。

承認キューの一員である場合は、Dashboard、次に Queues を使うことで、まだあなたに割り当てられていないがキューの承認チェーンにあるレコードを含め、自分のキューに紐づくすべてのリクエストを表示することもできます。

キューのステータスは、あなたのチームのアクションの準備ができているレコードと、あなたのキューがチェーン内で今後の承認者にすぎないレコードとを区別するのに役立ちます。

Zip はまた、あなたがフォローしているレコードや、最近完了したリクエストへの可視性も提供します。

![zip-image-11](/images/business-technology/enterprise-applications/guides/zip-guide/approval-request4.png)

### 承認の再割り当て方法

保留中の承認を、自分のキューから自分自身または別のユーザーに再割り当てできます。リクエストの横にある鉛筆アイコンをクリックして承認を再割り当てします。

![zip-image-12](/images/business-technology/enterprise-applications/guides/zip-guide/approval-request5.png)

### リクエストに関連するすべてのドキュメントの確認方法

任意のリクエスト上部の `Documents` タブをクリックすると、すべてのドキュメントが表示されます。購入リクエストに関連するドキュメントのすべてのバージョンを表示・管理できます。

![zip-image-13](/images/business-technology/enterprise-applications/guides/zip-guide/approval-request6.png)

### 通知の管理方法

1. Zip で Personal Settings を開き、Notifications に移動します。
2. Zip は、あなたが割り当てられている、フォローしている、または承認者を務めているリクエストでのアクティビティについて通知できます。
3. メール、Slack、アプリ内通知など、チャネルごとに通知の配信を管理できます。
4. 主に承認者である場合は、リクエスト、請求書、発注書であなたの注意を要する更新やアクションについて、設定を有効にしておきましょう。
5. コメント、@メンション、スレッド返信の通知も制御できます。
6. Zip が Slack に接続されている場合、承認通知が Zip の Slack アプリに表示され、Slack 内で承認用のアクションボタンが含まれることがあります。

### 不在時の委任の設定方法

1. Zip で Personal Settings を開き、不在 (out-of-office) オプションを見つけます。
2. 委任期間を選択し、適切なタイムゾーンを選び、その間あなたの委任された承認を受け取るべき人を選択します。
3. 委任を保存すると、選択した期間中、購入リクエストおよび請求書に関連する承認がその委任先にルーティングされます。

## Zip プラットフォームのサポート

- **機能** に関するすべての質問については、**Procurement Team** が最初の問い合わせ先となるべきです。例:
  - なぜ Zip を使っているのですか?
  - Zip で自分のリクエストを見る / Zip を操作するにはどうすればよいですか?
  - どの子会社や商品を選択すればよいですか?
  - リクエストから支払いまで購入を管理するのに、Zip と Coupa の両方を使う必要がありますか?
  - 仮想カードのリクエストはどうやって提出しますか?
  - リクエストのステータス
  - PO Change Request はどこで提出しますか?
  - 新しいサプライヤーのリクエストを提出する必要がありますか?
- あらゆる **技術的** な問題および/または質問（アクセスリクエスト、ログインの問題、バグなど）については、**Finance System Admins** が最初の問い合わせ先となるべきです。

{{% alert title="Note" color="info" %}}
Procurement Team または Finance System Admins に連絡するには、質問を添えて [#zip-faq](https://gitlab.slack.com/archives/C04K1EJGLT1) にメッセージを送ってください。
{{% /alert %}}
