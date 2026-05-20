---
title: "GitLabでGainsightを使用する"
description: "GitLabでGainsightを使用してお客様の成功を推進するための主要な側面"
upstream_path: /handbook/sales/gainsight/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-07T23:50:04+00:00"
---

## Gainsightとは何ですか?

Gainsightは、進行中の顧客ライフサイクルを管理するためにカスタマーサクセスマネージャー、リニューアルマネージャー、アカウントエグゼクティブ、ソリューションアーキテクトが使用するツールです。

### Gainsightの主な利点

Gainsightは顧客のライフサイクルのいくつかの異なる領域で役立ちます。いくつかのハイライトには以下が含まれます:

- 効率: 統合されたアカウントビュー(Book of Business、アカウント)、製品分析、Zendesk統合、メモ、コラボプロジェクト、to-do
- 一貫性: 顧客ライフサイクルプロセスを確立し、エンゲージメントを管理・追跡
- 可視性: ヘルススコア、リスク、採用、データビジュアル
- 自動化: デジタルジャーニーのプロセス化、定着促進、イネーブルメント
- メトリックと分析: ステージ採用、顧客のヘルス、time-to-value、製品利用データ
- ネットリテンションを成長させる: サクセスプラン主導のエンゲージメント、エクスパンドプレイ

## はじめに

Gainsightにアクセスする方法は2つあります: [Salesforce経由](#access-through-salesforce)(強く推奨)、および[直接ログイン](#logging-in-directly)。

### Salesforce経由でアクセス

*Salesforceは、商談、サブスクリプション情報、活動を含む完全なアカウント情報セットにアクセスできるため、Gainsightにアクセスする推奨される方法です。*

Salesforceにログインし、画面上部の"Gainsight NXT"タブをクリックします。"Gainsight NXT"が選択肢として表示されない場合は、"+"記号をクリックし、"Customize My Tabs"を選択し、アプリケーションリストからGainsight NXTを選択することで追加できます。

Gainsightの画面スペースを最大化するためにSalesforceヘッダーを非表示にするには、プロフィールアイコンの隣にあるGainsightヘッダーの右上隅の"二重矢印"アイコンをクリックします。

Salesforce経由でログインしている場合は、Gainsightアカウントページの右上(ユーザー画像の下)にある縦の3つの点をクリックし、"View Account"をクリックすることで、アクセスしているGainsightアカウントのSalesforceリンクをすばやく開くこともできます。

### 直接ログイン

**注: Okta経由で直接ログインできますが、サブスクリプションデータ、商談、Salesforce活動はありません。**

Gainsightに直接アクセスするには、[gitlab.gainsightcloud.com](https://gitlab.gainsightcloud.com/)にアクセスし、ユーザー名とパスワードのプロンプトが表示されたら、GitLabのメールアドレス *のみ* を入力します。入力するとすぐに、画面はシングルサインオンを使用していることを示すように変わり、"log in"をクリックするとOktaにリダイレクトされます。

**ログインできませんか?ヘルプを得る方法は次のとおりです:**

- Gainsightへのアクセスをリクエストする必要がある場合は、[Access Request](/handbook/security/corporate/end-user-services/access-requests/#individual-or-bulk-access-request)に記入し、マネージャーにmanager approvedラベルを追加してもらってください。
- Gainsight関連のアクセスに関する質問がある場合は、[#gainsight-users](https://gitlab.enterprise.slack.com/archives/C011ACG9MJB) SlackチャンネルでGainsightアドミンチームにpingしてください。

### タイムゾーンを確認

タイムゾーンはSalesforceのタイムゾーンに依存するため、Gainsightで変更しても、Salesforceで正しくない場合は翌日に上書きされます。Salesforceでタイムゾーンを更新するには(自動的にPSTです)、右上の名前をクリックし、"My Settings"をクリックし、左サイドバーで"Personal"をクリックし、"Language & Time Zone"をクリックし、正しいタイムゾーンを選択して保存します。翌日にGainsightで正しいタイムゾーンが表示されます。Salesforceのタイムゾーンは自動的にPSTになるので、イベントをログするのを容易にするためにこれをタイムゾーンに更新したいでしょう(イベントをログするとき、選択したタイムゾーンの現在の時刻を入力します)。

### 通知を構成する

個別の通知を調整するには、右上の名前をクリックし、"My Settings"を選択し、上部中央の"Notifications"を選択します。下の写真はデフォルトを示しており、好みに基づいて選択できる以下のオプションがあります。詳細はGainsightの[ドキュメント](https://support.gainsight.com/gainsight_nxt/Notifications/User_Guides/Setup_User_Notifications)を参照してください。

![Gainsight Channel Subscriptions](/images/handbook/customer-success/gainsight-channel-subscriptions.png "Gainsight Channel Subscriptions")

![Gainsight Event Subscriptions](/images/handbook/customer-success/gainsight-event-subscriptions.png "Gainsight Event Subscriptions")

## Gainsightに関するフィードバック

### 機能リクエスト

新しい機能リクエストは、Customer Success OperationsプロジェクトでIssueを作成し、[Gainsight Requestテンプレート](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/issues/new)を選択することで提出できます。Issueをオープンするときに、`gainsight`ラベルと、オプションで`gainsight::feature_request`、`gainsight::enhancement_request`、または`gainsight::bug`ラベルが正常に適用されていることを確認してください。すべてのGainsight関連IssueのステータスはGainsight [Issueボード](https://gitlab.com/groups/gitlab-com/-/boards/1609037?label_name[]=gainsight)で表示できます。

新しいメールテンプレートをGainsightに追加するようリクエストするには、[Customer Success Operationsプロジェクト](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/new)でIssueをオープンし、関連する場合はprogram requestまたはnew programテンプレートを適用します。Issueをオープンする前にチームメンバーの1人と接続している場合は、リクエストでそれらに@メンションしてください。それ以外の場合は、すべての要求を定期的にレビューし、受諾された場合は作業負荷に応じて今後のマイルストーンの1つにアサインします。

Gainsightへの最近の更新を表示するには、[ランニング変更履歴](https://docs.google.com/spreadsheets/d/1QknfSfX50JFOhkHZoz2VjovREWK2fJkYBxr5HEjkT9Q/edit#gid=0)を表示してください。

### サポートチケット

Gainsightに関するサポートチケットを提出するには、2つのオプションがあります。

1. support@gainsight.com にメールを送り、GitLab GainsightアドミンチームをCCに入れます。オプションで、Gainsight CSMをCCに入れることができます。
1. [Gainsightサポートウェブサイト](https://support.gainsight.com/)に移動し、Gainsight NXTを選択し、必須フィールドに記入します。

### 一般的なエラーとトラブルシューティング

#### Query API invalid response

"Query API invalid response"エラーメッセージを受け取った場合は、ブラウザのキャッシュとクッキーをクリアしてみてください。プライベートブラウザ(Incognito Modeなど)でもチェックして、ブラウザ構成の問題であることを確認することをお勧めします。

#### Success plan objectives updated failed

サクセスプランまたはアカウントプランのステータスをDraftからActiveに変更するときに"SUCCESS_PLAN_OBJECTIVES_UPDATED_FAILED"エラーメッセージを受け取った場合は、タスクの期日よりも早い期日を持つCTAが1つ以上あるためかもしれません。これを修正するには、CTAの期日を更新するタスクの期日を再適用し、その後サクセスプランをActiveに変更してみてください。

#### アカウントが"TO BE DELETED NO LONGER IN SFDC"と表示される

これは2つのSFDCアカウントが1つに統合されたためです。何が起こるかは次のとおりです:

1. Salesforceに同じアカウントの2つのレコードがある
1. SAEまたは誰かがSalesOps/Deal Deskに統合をリクエストする
1. 2つのSalesforceアカウントが統合される
1. すでにSalesforceで統合されているため、Gainsightは"統合"しない
1. Gainsightは1つが削除されたことを認識し、CS Opsがレビューおよび/または削除するために"TO BE DELETED"タイトルでマークする
1. Salesforceに残っている(統合された)ものはGainsightに同期されたままになる

#### エラー"Timeline: Invalid authentication credentials. Authentication failed" (Chromeユーザーのみ)

通常、このタイプのエラーは、Chrome拡張機能のバージョンが古い場合に発生します。Chrome拡張機能を最新バージョンに[更新](https://communities.gainsight.com/customer-success-cs-15/update-your-chrome-plugin-10392)してみてください。自動的にリフレッシュされて動作を開始するはずですが、すぐに解決しない場合は、ログアウトしてログインし直してください。

これで問題が解決しない場合は、[Gainsightサポート](#support-tickets)に連絡し、すでに拡張機能の更新とログアウト・ログインを試したことを伝えてください。

### 役割固有のGainsight利用

- Salesがどのようにgainsightを使用するかについての詳細は、[Using Gainsight within Sales](/handbook/sales/gainsight/account-planning/)ページで見つけることができます。
- カスタマーサクセスマネージャーがどのようにGainsightを使用するかについての詳細は、[Using Gainsight for CSMs](/handbook/customer-success/csm/gainsight/)ページで見つけることができます。
