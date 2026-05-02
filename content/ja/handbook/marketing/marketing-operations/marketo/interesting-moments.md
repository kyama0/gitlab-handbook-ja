---
title: "Marketo インタレスティングモーメント"
description: "よく使われるインタレスティングモーメントとその意味"
upstream_path: /handbook/marketing/marketing-operations/marketo/interesting-moments/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

## 概要

[インタレスティングモーメント](https://experienceleague.adobe.com/docs/marketo/using/product-docs/marketo-sales-insight/msi-for-salesforce/features/tabs-in-the-msi-panel/interesting-moments/using-interesting-moments.html?lang=en)は、Marketo がセールスチームや Salesforce.com の他のメンバーに関連情報を表示するために使用します。

インタレスティングモーメントはレコード上の 2 つの場所に表示されます。Marketo Sales Insight ウィンドウ、または `Last Interesting Moment Description` フィールドです。このフィールドは、インタレスティングモーメントが更新されるたびに動的に更新され、日付スタンプが付けられます。

## 一般的なインタレスティングモーメント

|インタレスティングモーメント|説明|SFDC キャンペーン|SDR アクション|
|-----------|--------------|------------|----------|
|`This lead is part of a namespace that has checked to setup GitLab for Company/Team use`|オーナーがサインアップ時にこのネームスペースが会社またはチーム使用のためであると指示。この人物はそのネームスペースのメンバー|n/a|アクションなし、参考情報|
|`Filled out Contact Us Form - GitLab Dedicated`|GitLab Dedicated への興味フォームに記入|[Request - GitLab Dedicated](https://gitlab.my.salesforce.com/7018X000001lp32?srPos=0&srKp=701)|アクション不要|
|`Filled out startup application form`|スタートアップ申請者|[FY20_Startup Application](https://gitlab.my.salesforce.com/7014M000001lkwy?srPos=0&srKp=701)|`User: Community Advocate` に渡す|
|`HandRaise PQL - Contact Us`|製品内[ハンドレイズ](/handbook/product/product-principles/)経由で連絡をリクエスト|[Request - Hand Raise PQL](https://gitlab.my.salesforce.com/7014M000001viyX?srPos=0&srKp=701)|フォローアップ|
|`Engaged with Content Track: {{lead.PathFactory Experience Name}}, Session Engagement Time (seconds): {{lead.PathFactory Engagement Time}}`| PathFactory からの Fast Moving Buyer アラート |[PF - Fast Moving Buyer Alert](https://gitlab.my.salesforce.com/7014M000001derO?srPos=0&srKp=701)| アクション不要|
|`Logged in through the GitLab Subscription Portal`|サブスクリプションポータル経由でログイン|N/A|`Web Direct` との重複をチェック、フォローアップ不要|
|`Downloaded XX from 3rd Party site: Integrate`| GitLab 所有のアセットがコンテンツシンジケーションプラットフォーム経由でダウンロード|各種|キャンペーン履歴/キャンペーン詳細に移動して、アセットとキャンペーンの説明を確認|
|`Lead has reached 6QA status, and this SMB lead has been autosequenced in Outreach`| 新しい SMB 6QA リードが作成され、Outreach で自動シーケンス処理されました。 | N/A| 返信のために[シーケンス](https://web.outreach.io/sequences/13896/overview)の進捗を監視します。 |
|`Lead has reached 6QA status and this MM/ENTG lead has been added to the SFDC dashboard. Proceed with outreach.` | 新しい MM/ENTG 6QA リードが作成されました。| N/A|  [SFDC ダッシュボード](https://gitlab.my.salesforce.com/01ZPL000000kAPN)でリードをレビューし、アウトリーチを進めます。|
