---
title: "Zip エンドユーザーガイド"
description: "Zip エンドユーザーガイド"
upstream_path: "/handbook/business-technology/enterprise-applications/guides/zip-guide/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T06:02:44Z"
translator: "claude"
stale: false
lastmod: "2025-08-15T16:07:26+02:00"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Zip とは

Zip は Coupa のアドオンで、承認プロセスを合理化します。関連するすべての情報を収集して承認を管理し、必要なサービスをできるだけ早く提供できるようにします。これにより、購入リクエストの状況や承認プロセスの現在のステージを確認できるようになります。


{{% alert %}}
**Note**
Zip の詳細と購入リクエストの提出方法については、[2 Minute Zip Overview Video](https://ziphq.wistia.com/medias/d7isqa87qz) をご確認ください。
{{% /alert %}}


### Zip へのアクセス方法

Zip へのアクセスをリクエストするには:

1. [Lumos App Store](/handbook/security/corporate/systems/lumos/ar/) を利用して Zip と Coupa の別々のアクセスリクエストを提出します。Zip へのアクセスをリクエストするすべてのユーザーは、PO と請求書を管理するための Coupa ライセンスも必要です

   - a) 「このアクセスの正当な理由」の質問には、管理する予算、マネジメント承認、発注書、請求書承認の内容を記述してください。

   - b) Zip/Coupa へのアクセスが即時必要な場合は、`#coupa_help` Slack チャンネルに投稿してください。

2. アクセスがプロビジョニングされたら、[Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします
3. `Zip` タイルを見つけます。

- *Zip はユーザーがログインした状態で新しいタブで開きます。*
- *Zip のメインページは以下のようになっているはずです。*

![zip-image-1](/images/business-technology/enterprise-applications/guides/zip-guide/login-page.png)

## Zip - はじめに

### 新しいリクエストの開始方法

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします。
2. 上部メニューの右側にある `+New Request` をクリックします。
3. 必要なリクエストの種類を選択します。
4. リクイジション（購入依頼）フォームに入力します
5. リクエスターの場合は自分の名前を入力するか、代理でリクエストしている人の名前を入力します。
6. 「What are you looking to purchase?」（何を購入しようとしていますか？）の質問では、購入するコモディティを尋ねています。例えば、この購入が Marketing チームのためのものであれば、Marketing Programs を選択し、購入内容を説明する適切なサブカテゴリを選択します。
7. Coupa バーチャルカードで支払うかどうかを選択します。

![zip-image-2](/images/business-technology/enterprise-applications/guides/zip-guide/new-request4.png)

![zip-image-3](/images/business-technology/enterprise-applications/guides/zip-guide/zip-workflows.png)

![zip-image-4](/images/business-technology/enterprise-applications/guides/zip-guide/new-request5.png)

### 購入リクエストのコモディティカテゴリとサブカテゴリ

1. コンサルティング、Professional Services、トレーニング
   - コンサルティング費用
   - 専門会員費
   - Revenue パートナーへの支払い
2. 財務・法務
   - 会計
   - ビジネス保険
   - 法務
   - ライセンスと登録
   - 税務コモディティ
3. 総務・管理
   - 従業員福利厚生 - 通勤自転車
   - セキュリティ預金（12 か月超）
   - クレジットカード手数料
   - ギフト・寄付
   - パートナー成長費
   - 郵便・配送
   - 印刷・コピー
   - 賃料・リース
   - コワーキングスペース
4. ホスティング
   - ホスティングサービス
5. マーケティングプログラム
   - マーケティングサイト
   - デマンド広告
   - フィールドイベント
   - スワッグ
   - メール
   - ブランド
   - プロスペクティング
   - チャンネルパートナーリベート
6. オフィス機器・用品
   - コンピューター・オフィス機器
   - オフィス用品
   - コンピューター・オフィス機器（資産計上）
7. People・採用
   - 従業員トレーニング
   - トレーニング・能力開発
8. ソフトウェア
   - ソフトウェアサブスクリプション
9. 通信
   - インターネット
   - 電話
10. 出張・交際費、会社イベント
    - 航空運賃
    - ビジネス食事・交際費
    - 会社の機能
    - ホテル・宿泊
    - 食事 - 会社提供
    - 駐車料金、ガソリン、通行料、走行距離
    - タクシー、カーサービス、公共交通機関
    - IACV 伝道者ディナーインセンティブ
    - チームビルディング

### 新規ベンダーのリクエスト方法

新規ベンダーの設定プロセスは `Zip` から始まります。新しい購入リクエストを作成するだけで、新規ベンダーを追加するオプションが表示されます。リクエストが提出されると、**Procurement** チームに通知され、`Coupa` に新規ベンダーが追加されます。

### 変更リクエストの方法

既存の発注書（PO）を変更する必要がある場合は、以下の手順に従って変更リクエストを処理してください:

**重要** 変更リクエストは、リリースされた Coupa 発注書（PO）がある場合にのみ提出できます。Coupa/ZIP の承認処理中のリクイジションを更新する必要がある場合は、Procurement チームにお問い合わせください。

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします。
2. ZIP を開きます
3. 上部メニューの右側にある `+New Request` をクリックします。
4. `Request a Change (amend contracts or PO change)` を選択します
5. General Information フォームに入力します。既存の `Coupa` 発注書番号（#1000... で始まる）を必ず入力してください。
6. Spend Information フォームに入力します:

   - a) この購入に必要な新しい合計予算は何ですか:
   - 元の発注書（PO）金額と追加費用の合計である新しい最終費用を入力してください

   - b) ライン項目の内訳を入力してください:
   - 「Line item」セクションに新しい最終費用を指定してください。

   **元の PO に複数のライン項目がある場合、変更注文 ZIP リクエストには更新する必要があるライン項目のみを含めてください（元の PO からライン項目名をコピーしてください）。**

7. サプライヤーからの変更に関するサポート文書を添付します。購入の種類に応じて、SOW、変更リクエスト、および/または注文書が必要な場合があります。
8. 変更リクエストを提出します。`Procurement` チームが代わりに `Coupa` で PO を修正します。


{{% alert %}}
変更リクエストには新しいリクエストと同様の承認が必要になることに注意してください。
{{% /alert %}}


**注意** 変更リクエストはベンダーの更新には使用できません。PO のベンダーを更新する必要がある場合は、#procurement Slack で Procurement チームにお問い合わせください。

### POC 契約への署名リクエスト方法

費用のない契約で新しいベンダーとの POC（概念実証）を実施する予定の場合は、以下の手順に従ってください:

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします。
2. ZIP を開きます
3. 上部メニューの右側にある `+New Request` をクリックします。
4. `Request a Demo/Trial ($0 Contracts)` を選択します
5. リクイジションフォームに入力します。
6. POC のサプライヤーからのサポート文書を添付します。
7. リクエストを提出します。
8. Legal と Security の承認が取得された後、Procurement チームが署名プロセスを進めます。

### バーチャルカードのプロセスはどのように機能しますか？

バーチャルカードのリクエストは通常の購入リクエストとして Zip を経由します。

   1. 「Will a virtual card be used to pay this vendor?」の質問に `Yes` を選択して、関連するすべての情報を入力します。
   2. 「What's the name of the vendor?」フィールドで `American Express- Virtual Card` を選択します。
   3. Zip リクエストが承認されて Coupa に統合されると、財務およびマネジメントの承認が行われ、Coupa でバーチャルカードの作成がトリガーされます。
   4. バーチャルカードが準備できたらメールが届きます。Coupa で直接アクセスすることもできます。

### リクエストの追跡方法

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします。
2. ZIP を開きます
3. Zip ホームページで左側の `Requests` をクリックします。
   - *提出されたすべてのリクエストの一覧が表示されます。*
   - *提出されたリクエストを検索するための複数のオプションがあります（購入名、ベンダー名、リクエスト番号など）。*
   - *このページでは下書きのリクエストにもアクセスできます。*
4. 特定のリクエストが選択されると、ページ上部に承認ワークフローが表示されます。

![zip-image-6](/images/business-technology/enterprise-applications/guides/zip-guide/submitted-request2.png)


{{% alert %}}
**Note**
どの承認が完了していて、どの承認がまだ完了していないかを確認できます。リクエストが異なる当事者によって承認されると、Slack とメールで自動通知が送信されます。
{{% /alert %}}


### 新しいリクエストのステータス確認方法

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします。
2. ZIP を開きます
3. Zip ホームページで左側の `Requests` をクリックします。
4. ステータスを確認したいリクエストを選択します。

- ZIP 内のリクエストが `Coupa Approval and Execute Contract` ノードに到達した場合、Coupa でリクエストのステータスを確認できます:
  - 承認フローの左上にある「Create Purchase Requisition」アイコンをクリックします
  - その後「View in Coupa」をクリックします
  - Coupa にリダイレクトされ、承認フローと現在の承認者を確認できます。

![zip-image-status](/images/business-technology/enterprise-applications/guides/zip-guide/zip_status.png)

### 書類の署名状況の確認方法

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします。
2. ZIP を開きます
3. Zip ホームページで左側の `Requests` をクリックしてリクエストを見つけます。
4. リクエストページで `Documents` セクションまでスクロールします。

契約書のタイトルに「Executable」という用語が含まれている場合、Legal チームによってレビューされスタンプが押されていることを示します。これは、Coupa でのすべての承認が取得された場合に、契約書が署名のために回覧される準備ができていることを意味します。

- 契約書がすべての関係者によって完全に署名されている場合、そのステータスは `Final` と表示され、タイトルには「Signed」という用語が含まれます。
- 契約書の署名が保留中の場合、必要な署名の数と取得済みの署名に応じて、「0/2」や「1/2」などの分数でステータスが表示されます。例えば、必要な署名のいずれも取得されていない場合は「0/2」、2 つのうち 1 つの署名が取得された場合は「1/2」と表示される場合があります。

### Legal の承認 / 修正案

まだ条件について合意に至っていない新しいベンダーが関係するリクエストの場合、Legal チームは会社のポリシーと法的要件へのコンプライアンスを確保するために、ベンダーの契約に修正案を提供することがあります。

Legal チームがベンダーの契約をレビューして修正案を提供する場合、以下のアクションを取る必要があります:

1. ステークホルダー / リクエスターの役割:

   リクエスターは、以下のいずれかが該当しない限り、メールでベンダーに Legal の修正案を送ることに責任を持ちます:

   - Procurement チームがすでに積極的にベンダーとの交渉またはコミュニケーションを行っている
   - 契約総額が $100k を超えている
   - Procurement がいかなる理由においても自分たちが修正案を送ることをコメントで明示している

   リクエスターがベンダーに修正案を送る場合は、状況を把握するために Procurement の承認者をメールに CC することが重要です。

2. Procurement チームのサポート:

   Procurement チームは、積極的に Procurement が交渉しているリクエストまたは $100k を超えるリクエストについて、ステークホルダーを代わってベンダーに Legal のノートを送ることでサポートできます。Procurement は修正案をベンダーに送ったときに Zip リクエストにコメントを残し、リクエスターはメールに CC されます。

3. ZIP リクエスト番号付きのタイトル:

   ベンダーとのコミュニケーションや修正案に関連するアクションを取る場合、メールの件名には ZIP リクエスト番号を含める必要があります。これにより、プロセス全体を通じて特定のリクエストの追跡と参照が容易になります。

4. ZIP リクエストへのコメント:

   修正案に関してベンダーに連絡したチームメンバーは誰でも、ノートがベンダーに送られたことを示す ZIP リクエストにコメントを残す必要があります。これにより、チーム内での適切な文書化とコミュニケーションが確保されます。

### リクエストのキャンセル方法

1. Zip ホームページで `Submitted` タブをクリックします。
2. キャンセルしたい購入リクエストを見つけて選択します。
3. 購入リクエストを選択したら、`…` ロゴをクリックして `Cancel Request` をクリックします。
4. 簡単なキャンセル理由を入力して `Confirm` をクリックします。

![zip-image-14](/images/business-technology/enterprise-applications/guides/zip-guide/cancel-request1.png)

![zip-image-15](/images/business-technology/enterprise-applications/guides/zip-guide/cancel-request2.png)

![zip-image-16](/images/business-technology/enterprise-applications/guides/zip-guide/cancel-request3.png)

### リクエストのクローン方法

1. Zip ホームページで `Submitted` タブをクリックします。
2. クローンしたい購入リクエストを見つけて選択します。
3. 購入リクエストを選択したら、`…` ロゴをクリックして `Clone request` をクリックします。
4. `Clone` をクリックします。

![zip-image-17](/images/business-technology/enterprise-applications/guides/zip-guide/clone-request1.png)

![zip-image-18](/images/business-technology/enterprise-applications/guides/zip-guide/clone-request2.png)

![zip-image-19](/images/business-technology/enterprise-applications/guides/zip-guide/clone-request3.png)

### リクエストへのコメント方法

すべてのリクエスト詳細ページには、リクエストにアクセスできるすべてのユーザー間のコミュニケーションのスペースを提供する `Comments` タブがあります。組織のメンバーからのコメントに加えて、このタブではベンダーポータルでベンダーからコメントが残されると通知が表示されます。
ユーザーは質問やコメントを投稿でき、連鎖内のすべてのステークホルダー（リクエスターとすべての承認者）が確認して返答するよう通知されます。または特定の人に `@` タグを付けると、その人だけが通知されます。

![zip-image-7](/images/business-technology/enterprise-applications/guides/zip-guide/comments1.png)

## Zip - 承認プロセス

Legal、HR、Procurement、Security、Privacy によって特定されたユーザーには、自分に割り当てられた特定の購入リクエストを承認または却下するオプションがあります。

### リクエストの承認方法

1. 新しい購入リクエストが承認を必要とする場合、メールまたは Slack のアラートが届きます。通知にはリクエストに関する重要な情報がハイライトされており、通知から直接リクエストを承認または却下できます。
2. 通知の View Request リンクをクリックして詳細を確認し、Zip でリクエストを表示します
3. 承認に必要な関連情報を確認します。
4. レビューチェーンの承認ノードをクリックして、期限、完了日、サブタスク、組み込みの統合情報を表示します。
5. セクションタブをクリックして、必要なページのセクションに移動します。

![zip-image-8](/images/business-technology/enterprise-applications/guides/zip-guide/approval-request7.png)


{{% alert %}}
**Note**
承認通知設定（メールおよび/または Slack）は、Zip にログインして以下の設定で変更できます:
Settings -> Personal Settings -> Notifications。
{{% /alert %}}


![zip-image-9](/images/business-technology/enterprise-applications/guides/zip-guide/approval-request9.png)

![zip-image-10](/images/business-technology/enterprise-applications/guides/zip-guide/approval-request8.png)

### 承認が必要なすべてのリクエストを確認する方法

キューのデフォルトアサイニーである場合は、ホームダッシュボードページで右上の `Dashboard` をクリックして `Needs My Approval` タブを選択することで、承認待ちのすべてのリクエストを確認できます。

キューのデフォルトアサイニーでない場合は、右上の `Dashboard` をクリックして `Queues` タブを選択し、キューを選択することで、キューの承認待ちのすべてのリクエストを確認できます。キュー内のすべてのリクエストが表示されます。`Status`（ステータス）フィルターを更新して、以前に承認されたリクエストや今後のリクエストを確認することもできます。

![zip-image-11](/images/business-technology/enterprise-applications/guides/zip-guide/approval-request4.png)

### 承認を再割り当てする方法

キューからの保留中の承認を自分自身または別のユーザーに再割り当てできます。リクエストの横にある鉛筆アイコンをクリックして承認を再割り当てします。

![zip-image-12](/images/business-technology/enterprise-applications/guides/zip-guide/approval-request5.png)

### リクエストに関連するすべての書類を確認する方法

任意のリクエストの上部にある `Documents` タブをクリックして、すべての書類を確認します。購入リクエストに関連する書類のすべてのバージョンを表示および管理できます。

![zip-image-13](/images/business-technology/enterprise-applications/guides/zip-guide/approval-request6.png)

## Zip プラットフォームサポート

- **機能**に関するすべての質問については、**Procurement チーム**が最初の窓口です。例:
  - なぜ Zip を使用するのですか？
  - Zip でリクエストを確認 / Zip を操作するにはどうすればよいですか？
  - どの子会社やコモディティを選択すればよいですか？
  - リクエストから支払いまでの購入管理に Zip と Coupa の両方を使用する必要がありますか？
  - バーチャルカードのリクエストを提出するにはどうすればよいですか？
  - リクエストのステータス
  - PO 変更リクエストはどこに提出しますか？
  - 新しいサプライヤーのリクエストを提出する必要がありますか？
- **技術的**な問題やご質問（アクセスリクエスト、ログイン問題、バグなど）については、**Finance System Admins** が最初の窓口です。


{{% alert %}}
**Note**
Procurement チームまたは Finance System Admins に連絡するには、質問内容を記載したメッセージを [#zip-faq](https://gitlab.slack.com/archives/C04K1EJGLT1) に送ってください。
{{% /alert %}}

