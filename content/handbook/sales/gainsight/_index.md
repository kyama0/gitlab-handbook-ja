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

## Gainsight とは何ですか?

Gainsight は、進行中の顧客ライフサイクルを管理するためにカスタマーサクセスマネージャー、リニューアルマネージャー、アカウントエグゼクティブ、ソリューションアーキテクトが使用するツールです。

### Gainsight の主な利点

Gainsight は顧客のライフサイクルのいくつかの異なる領域で役立ちます。いくつかのハイライトには以下が含まれます:

- 効率: 統合されたアカウントビュー(Book of Business、アカウント)、製品分析、Zendesk 統合、メモ、コラボプロジェクト、to-do
- 一貫性: 顧客ライフサイクルプロセスを確立し、エンゲージメントを管理・追跡
- 可視性: ヘルススコア、リスク、採用、データビジュアル
- 自動化: デジタルジャーニーのプロセス、採用、イネーブルメント
- メトリックと分析: ステージ採用、顧客のヘルス、time-to-value、製品利用データ
- ネットリテンションを成長させる: サクセスプラン主導のエンゲージメント、エクスパンドプレイ

## はじめに

Gainsight にアクセスする方法は 2 つあります: [Salesforce 経由](#access-through-salesforce)(強く推奨)、および[直接ログイン](#logging-in-directly)。

### Salesforce 経由でアクセス

*Salesforce は、商談、サブスクリプション情報、活動を含む完全なアカウント情報セットにアクセスできるため、Gainsight にアクセスする推奨される方法です。*

Salesforce にログインし、画面上部の"Gainsight NXT"タブをクリックします。"Gainsight NXT"が選択肢として表示されない場合は、"+"記号をクリックし、"Customize My Tabs"を選択し、アプリケーションリストから Gainsight NXT を選択することで追加できます。

Gainsight の画面スペースを最大化するために Salesforce ヘッダーを非表示にするには、プロフィールアイコンの隣にある Gainsight ヘッダーの右上隅の"二重矢印"アイコンをクリックします。

Salesforce 経由でログインしている場合は、Gainsight アカウントページの右上(ユーザー画像の下)にある縦の 3 つの点をクリックし、"View Account"をクリックすることで、アクセスしている Gainsight アカウントの Salesforce リンクをすばやく開くこともできます。

### 直接ログイン

**注: Okta 経由で直接ログインできますが、サブスクリプションデータ、商談、Salesforce 活動はありません。**

Gainsight に直接アクセスするには、[gitlab.gainsightcloud.com](https://gitlab.gainsightcloud.com/)にアクセスし、ユーザー名とパスワードのプロンプトが表示されたら、GitLab のメールアドレス *のみ* を入力します。入力するとすぐに、画面はシングルサインオンを使用していることを示すように変わり、"log in"をクリックすると Okta にリダイレクトされます。

**ログインできませんか?ヘルプを得る方法は次のとおりです:**

- Gainsight へのアクセスをリクエストする必要がある場合は、[Access Request](/handbook/security/corporate/end-user-services/access-requests/#individual-or-bulk-access-request)に記入し、マネージャーに manager approved ラベルを追加してもらってください。
- Gainsight 関連のアクセスに関する質問がある場合は、[#gainsight-users](https://gitlab.enterprise.slack.com/archives/C011ACG9MJB) Slack チャンネルで Gainsight アドミンチームに ping してください。

### タイムゾーンを確認

タイムゾーンは Salesforce のタイムゾーンに依存するため、Gainsight で変更しても、Salesforce で正しくない場合は翌日に上書きされます。Salesforce でタイムゾーンを更新するには(自動的に PST です)、右上の名前をクリックし、"My Settings"をクリックし、左サイドバーで"Personal"をクリックし、"Language & Time Zone"をクリックし、正しいタイムゾーンを選択して保存します。翌日に Gainsight で正しいタイムゾーンが表示されます。Salesforce のタイムゾーンは自動的に PST になるので、イベントをログするのを容易にするためにこれをタイムゾーンに更新したいでしょう(イベントをログするとき、選択したタイムゾーンの現在の時刻を入力します)。

### 通知を構成する

個別の通知を調整するには、右上の名前をクリックし、"My Settings"を選択し、上部中央の"Notifications"を選択します。下の写真はデフォルトを示しており、好みに基づいて選択できる以下のオプションがあります。詳細は Gainsight の[ドキュメント](https://support.gainsight.com/gainsight_nxt/Notifications/User_Guides/Setup_User_Notifications)を参照してください。

![Gainsight Channel Subscriptions](/images/handbook/customer-success/gainsight-channel-subscriptions.png "Gainsight Channel Subscriptions")

![Gainsight Event Subscriptions](/images/handbook/customer-success/gainsight-event-subscriptions.png "Gainsight Event Subscriptions")

## Gainsight に関するフィードバック

### 機能リクエスト

新しい機能リクエストは、Customer Success Operations プロジェクトで Issue を作成し、[Gainsight Request テンプレート](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/issues/new)を選択することで提出できます。Issue をオープンするときに、`gainsight`ラベルと、オプションで`gainsight::feature_request`、`gainsight::enhancement_request`、または`gainsight::bug`ラベルが正常に適用されていることを確認してください。すべての Gainsight 関連 Issue のステータスは Gainsight [Issue ボード](https://gitlab.com/groups/gitlab-com/-/boards/1609037?label_name[]=gainsight)で表示できます。

新しいメールテンプレートを Gainsight に追加するようリクエストするには、[Customer Success Operations プロジェクト](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/new)で Issue をオープンし、関連する場合は program request または new program テンプレートを適用します。Issue をオープンする前にチームメンバーの 1 人と接続している場合は、リクエストでそれらに@メンションしてください。それ以外の場合は、すべての要求を定期的にレビューし、受諾された場合は作業負荷に応じて今後のマイルストーンの 1 つにアサインします。

Gainsight への最近の更新を表示するには、[ランニング変更履歴](https://docs.google.com/spreadsheets/d/1QknfSfX50JFOhkHZoz2VjovREWK2fJkYBxr5HEjkT9Q/edit#gid=0)を表示してください。

### サポートチケット

Gainsight に関するサポートチケットを提出するには、2 つのオプションがあります。

1. support@gainsight.com にメールを送り、GitLab Gainsight アドミンチームを CC に入れます。オプションで、Gainsight CSM を CC に入れることができます。
1. [Gainsight サポートウェブサイト](https://support.gainsight.com/)に移動し、Gainsight NXT を選択し、必須フィールドに記入します。

### 一般的なエラーとトラブルシューティング

#### Query API invalid response

"Query API invalid response"エラーメッセージを受け取った場合は、ブラウザのキャッシュとクッキーをクリアしてみてください。プライベートブラウザ(Incognito Mode など)でもチェックして、ブラウザ構成の問題であることを確認することをお勧めします。

#### Success plan objectives updated failed

サクセスプランまたはアカウントプランのステータスを Draft から Active に変更するときに"SUCCESS_PLAN_OBJECTIVES_UPDATED_FAILED"エラーメッセージを受け取った場合は、タスクの期日よりも早い期日を持つ CTA が 1 つ以上あるためかもしれません。これを修正するには、CTA の期日を更新するタスクの期日を再適用し、その後サクセスプランを Active に変更してみてください。

#### アカウントが"TO BE DELETED NO LONGER IN SFDC"と表示される

これは 2 つの SFDC アカウントが 1 つに統合されたためです。何が起こるかは次のとおりです:

1. Salesforce に同じアカウントの 2 つのレコードがある
1. SAE または誰かが SalesOps/Deal Desk に統合をリクエストする
1. 2 つの Salesforce アカウントが統合される
1. すでに Salesforce で統合されているため、Gainsight は"統合"しない
1. Gainsight は 1 つが削除されたことを認識し、CS Ops がレビューおよび/または削除するために"TO BE DELETED"タイトルでマークする
1. Salesforce に残っている(統合された)ものは Gainsight に同期されたままになる

#### エラー"Timeline: Invalid authentication credentials. Authentication failed" (Chrome ユーザーのみ)

通常、このタイプのエラーは、Chrome 拡張機能のバージョンが古い場合に発生します。Chrome 拡張機能を最新バージョンに[更新](https://communities.gainsight.com/customer-success-cs-15/update-your-chrome-plugin-10392)してみてください。自動的にリフレッシュされて動作を開始するはずですが、すぐに解決しない場合は、ログアウトしてログインし直してください。

これで問題が解決しない場合は、[Gainsight サポート](#support-tickets)に連絡し、すでに拡張機能の更新とログアウト・ログインを試したことを伝えてください。

### 役割固有の Gainsight 利用

- Sales がどのように gainsight を使用するかについての詳細は、[Using Gainsight within Sales](/handbook/sales/gainsight/account-planning/)ページで見つけることができます。
- カスタマーサクセスマネージャーがどのように Gainsight を使用するかについての詳細は、[Using Gainsight for CSMs](/handbook/customer-success/csm/gainsight/)ページで見つけることができます。
