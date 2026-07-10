---
title: "Zoominfo"
description: "ZoomInfo は、ビジネスや専門職のコンタクト情報のデータベースを提供するセールスインテリジェンスソフトウェアです。"
upstream_path: /handbook/marketing/marketing-operations/zoominfo/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
translated_at: "2026-07-10T07:06:29+09:00"
translator: codex
stale: false
lastmod: "2026-07-07T17:29:07+00:00"
---

### ZoomInfo について

ZoomInfo は、ビジネスや専門職のコンタクト情報のデータベースを提供するセールスインテリジェンスソフトウェアです。

### セットアップ

ZoomInfo には Okta からアクセスします。チームメンバーは [Lumos](https://app.lumosidentity.com/app_store) から ZoomInfo へのアクセスをリクエストできます。

Zoominfo プラットフォームへのアクセス権を受け取ったら、[Zoominfo ReachOut Chrome 拡張機能](https://chrome.google.com/webstore/detail/zoominfo-reachout/fofjcndophjadilglgimelemjkjblgpf)をダウンロードする必要があります。リンクは、ホームページの右下にスクロールしても見つけられます。

Zoominfo を SFDC のタブに追加することを推奨します。

そのためには :heavy_plus_sign: をクリック > `Customize My Tabs` をクリック > スクロールして Zoominfo を見つける > ハイライト > 右矢印ボタン :arrow_right: を押す > `Save` ボタンを押します。

### Zoominfo へのアクセス方法

直接ログインすると、SFDC への直接エクスポートが可能です。ただし、SFDC 内のリード、コンタクト、アカウントレコードから直接アクセスすることも、上記のようにタブビューからアクセスすることもできます。最後に、Chrome 拡張機能では、LinkedIn や企業のウェブサイトを閲覧しているときに追加機能が利用できます。

### トレーニング

**Zoominfo University にアクセスするには:**

- Zoominfo にログインします
- 右側の名前の下で Zoominfo University をクリックします
- Zoominfo University のログインを作成すると、以下のリンクから直接アクセスできるようになります

**Zoominfo はまったく初めて！ ここから始めましょう:**

| タイトル | 概要 |
| ------ | ------ |
| [Getting Started with SalesOS)](https://university.zoominfo.com/salesos-essential-features-on-demand) | コアコンセプト、プロフィール情報、検索の構築、保存とサブスクライブ、タグ付けをカバーする一般的な概要。 |
| [SalesOS Advanced Features (Condensed)](https://university.zoominfo.com/salesos-advanced-features-condensed) | スクープと高度な機能の使用。現在 Intent はないため、このセクションをスキップできます。 |
| [Salesforce Integration Made Easy](https://university.zoominfo.com/salesforce-integration-made-easy) | これは、SFDC 内のネイティブ統合の使用方法に関する一般的な概要です。|

**すでに Zoominfo を使用している、またはさらに学びたい！ 興味のあるトピックにスキップしてください:**

| タイトル | 概要 |
| ------ | ------ |
| [ZoomInfo Sales Feature Highlight: Using Tags](https://university.zoominfo.com/salesos-feature-highlight-using-tags/91744) | タグの使用方法に関するクイックレビュー。 |
| [SalesOS Feature Highlight: Search & Subscribe to Scoops](https://university.zoominfo.com/salesos-feature-highlight-search-subscribe-to-scoops) | Scoops アラートの検索とフィルタリングのガイド。 |
| [SalesOS Best Practices: ListMatch](https://university.zoominfo.com/salesos-best-practices-listmatch) | ListMatch を使用すると、コンタクトまたは会社情報のリストを一括でアップロードして Zoominfo 検索を実行できます。 |
| [SalesOS Best Practices: Technology Filters](https://university.zoominfo.com/salesos-best-practices-technology-filters) | 会社プロファイル内の技術情報にアクセスする方法を学びます。 |
| [Save and Subscribe Function Explained](https://help.zoominfo.com/s/article/Save-and-Subscribe-Function-Explained) | ZoomInfo Sales の Save and Subscribe 機能は、プラットフォームに戻ったときにユーザーがリストを再構築する必要がないように保護します。|
| [How to Make a (Sales) Splash with ReachOut](https://university.zoominfo.com/best-practices-reachout) | ZoomInfo Chrome Extension を使用して、LinkedIn のような公開フォーラムでアウトリーチを最大化するベストプラクティスを学びます。 |

**セールスイネーブルメントの録画:**

| タイトル | 時間 | 概要 |
| ------ | ------ | ------ |
|[Sales Enablement: Saved Searches](https://youtu.be/OpTgvoOQ1jM) | 10:38 | ワークフロー向けに保存された検索を最適化します。アクセスするには GitLab Unfiltered にログインしてください。 |
|[Sales Enablement: List Match](https://youtu.be/vl1kpsNa874) | 8:18 | リストマッチを活用します。アクセスするには GitLab Unfiltered にログインしてください。 |
|[Sales Enablement: Tagging in LinkedIn](https://youtu.be/GQWTZWbMgg8) | 3:44 | LinkedIn とバルクエクスポートのためのタグ付けを活用します。アクセスするには GitLab Unfiltered にログインしてください。 |

カバーされていないトピックを見たいものがありますか？ Slack の #zoominfo ルームに参加するか、marketing operations にお問い合わせください。

GitLab 専用の Zoominfo トレーニングセッションにアクセスするには、[このリンク](https://hello.chorus.ai/listen?guid=380d82a7cfbf46e6b0dff3b7957cb0e0)に従ってください。

追加の Zoominfo オンデマンドトレーニングにアクセスするには、[このリンク](https://university.zoominfo.com/salesos-advanced-features-on-demand)に従ってください。

### Do Not Call と Do Not Email の自動化

適切な条件が設定されている場合、Zoominfo は SFDC のリード/コンタクトに `Do not email` および `Do not call` のラベルを付けることができます。ルールの詳細については、[sales development handbook ページ](/handbook/marketing/sales-development/#do-not-call-and-do-not-email-automations)を参照してください。

### Zoominfo ライセンスポリシーと手順

ZoomInfo の admin 管理は、Field Sales ロール (AE/SAE/ASM/ISR) のライセンスを管理する Revenue Technology チームと、Sales Development 組織 (BDA/SDR/BDR) のライセンスを管理する Marketing Operations チームの間で共有されています。
ZoomInfo の admin 管理は、Field Sales ロール (AE/SAE/ASM/ISR) のライセンスを管理する Revenue Technology チームと、Sales Development 組織 (BDA/SDR/BDR) のライセンスを管理する Marketing Operations チームの間で共有されています。

### アクセスとヘルプ

セールス組織と Sales Development のメンバーは、ロール エンタイトルメント リクエストの一部として ZoomInfo へのアクセスを受け取ります。チームメンバーがアクセスを受け取らなかった場合、またはアクセスが削除されて取り戻したい場合は、アクセスリクエストをオープンする必要があります。

具体的には、マーケティング関連のロール (SDR/BDR) の場合は、[個別アクセスリクエスト - 略して AR](/handbook/security/corporate/end-user-services/access-requests/access-requests/) をオープンし、承認のためにマネージャーと `RobRosu` (Mops) をタグ付けしてください。Field Sales 関連のロール (AE/SAE/ASM/ISR) の場合は、AR をオープンし、承認のためにマネージャーと `@kbetances` (Sales Operations) をタグ付けしてください。

ZoomInfo に問題が発生している場合、最初の連絡先は ZoomInfo です。次のメールアドレスで連絡できます: helpmenow@zoominfo.com。

Slack の #dataintelligencehelp または #mktgops で Data Intelligence または Mops チームに連絡することもできます。

### 月次レビュー

**詳細プロセス**

1. ZoomInfo にログインし、Admin Portal、Users、Export to CSV
2. Google Sheet ピボットテーブルにインポートし、過去 30 日間にアクセスしていないユーザーを確認
3. Slack でユーザーに連絡
4. アクセスが不要になったユーザーを無効化
5. Marketing と Sales のライセンスの分割を追跡。Sales ライセンスが不足した場合、次のメッセージで Marketing からいくつか借りることができます。
6. Data Intelligence プロジェクトで、無効化されたユーザーを毎月追跡するための issue を作成。Mktg Tool Audit と Data Intelligence :: Tech Stack のラベルを使用する必要があります。これは、可能な監査のサポートとして機能します。

**注:** ライセンスがマーケティングチームから借りられた場合、いつでも取り消すことができます。ユーザーに次のように伝えてください: 「ご挨拶！ 現在、フィールドセールス用の Zoominfo ライセンスがありません。プラットフォームへのアクセスを可能にするため、マーケティングチームから借りた一時的な ZoomInfo ライセンスを割り当てました。利用可能なライセンスが限られているため、マーケティングチームがチームメンバーの一人のためにライセンスを返却する必要がある場合、ライセンスが取り消される可能性があります。そのような場合は、ライセンスが取り消される前に通知し、Sales Operations ライセンスの調達に取り組みます。ご理解ありがとうございます。」

### コントロール

1. すべてのユーザーが @gitlab.com のメールアドレスを持っていることを確認
2. ロールが社内の現在のロールと一致していることを確認 (社内の異動により、ユーザーに新しいロールを割り当てる必要がある場合があります)

### クレジット

ZoomInfo クレジットは、ZoomInfo プラットフォームから専門職または会社プロファイルの消費 (エクスポート) を表します。このエクスポートは、プライマリの ZoomInfo プラットフォーム、ReachOut Chrome Extension、または CRM、マーケティング自動化プラットフォーム、セールス自動化ツールを含むさまざまな統合のいずれかから API コールが行われたときに発生します。

- **ユーザー** -  月次クレジットは 1,000 に設定され、バルククレジットは 2,000 に設定されています。
各ユーザーには、プロスペクティング用の 1,000 月次クレジットがあります。ユーザーがプラットフォームからコンタクトまたは会社をエクスポートするたびに、クレジットが消費されます。これらのクレジットは毎月 1 日にリセットされます。ユーザーが「export」を押すと、ユーザーが 1,000 月次クレジットすべてを利用するまで月次クレジットから自動的に引き出されます。これらの月次クレジットが消費された後、バルククレジットを使用できます。バルククレジットは調整可能です。月次クレジットはそうではありません。ユーザーには、コンタクトをクリックしてコンタクト情報を表示/ロック解除するために使用できる 2,000 のビューもあります。
- **アカウント** - ユーザーが SFDC にエクスポートできるアカウントの最大数は 100 に設定されています。
- **コンタクト** - ユーザーが SFDC にエクスポートできるコンタクトの最大数は、アカウントと一致する必要があり、100 に設定されています。これは、コンタクトが SFDC でアカウントに関連付けられている必要があるためです。コンタクトをエクスポートするとき、Zoominfo は、コンタクトが働いている会社と一致するアカウントが SFDC 内に存在するかどうかを確認します。存在しない場合、ユーザーはコンタクトを関連付ける新しいアカウントを作成できます。コンタクト作成がアカウント以下になるよう強制するのは、同じ数のアカウントを作成できないためにコンタクトのエクスポートが失敗するシナリオがないようにするためです。
- **リード** - ユーザーが SFDC にエクスポートできるリードの最大数は 1,000 に設定されています。これにより、ユーザーが 1 回のエクスポートで月次割り当てを使い切らないようにします。
- **バルクリクエスト** キャンペーン用にバルクダウンロードが必要な場合、marketing operations プロジェクト用の[issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new)をオープンしてください。Admin はバルクリストをエクスポートするための無制限のクレジットを持っているか、個々のユーザー向けに一時的なリフトを行うことができます。
- **不正なリードの報告** - リードが不正であることが判明した場合、ユーザーは `Suggest Contact Update` を送信でき、リサーチチームは通常 1〜2 営業日以内に更新します。リードが更新されると、ユーザーはクレジットを消費せずに手動で追加するか、SFDC にプロスペクトを再プッシュできます (「管理下」の 2 ヶ月間)。
- **API クレジット** - リード、コンタクト、アカウントは[以下に詳述](/handbook/marketing/marketing-operations/zoominfo/#sfdc-account-enrichment)のとおりエンリッチされており、特定のレコードでフィールドがいくつ更新されるかにかかわらず、webhook が呼び出されるたびに API クレジットが使用されます (リード/コンタクト/アカウントごとに 1)。

### フィールドマッピング

すべての現在のフィールドマッピングは[こちら](https://docs.google.com/spreadsheets/d/1lZ2BgNER_OYR5jjYDHreCMRbpODQbprUpGKVRD5TMnY/edit#gid=504148174)にドキュメント化されています。

カスタムフィールドは [ZI] で始まり、SFDC の Zoominfo セクションに表示されます。例: `[ZI] Company Phone`。すべての [ZI] フィールドは、リード、コンタクト、アカウントで新しいデータが利用可能になった場合にフィールドを上書きできるように設定されています。標準フィールドにマップされている情報は、基本的なリード、コンタクト、アカウント作成に必要なフィールドのみです。例: `First Name`、`Last Name`、`Email Address`。

### SFDC ネイティブ統合

- Salesforce Native App は、SFDC 内の任意のリード、コンタクト、アカウントで利用可能です。
- Salesforce Native App では、ユーザーは一度に 25 件しかエクスポートできません。一方、直接ログインして標準の Salesforce ウェブコネクタを使用すると、一度に最大 2,000 件をプッシュできます。バルクプッシュには、通常の ZoomInfo ウェブサイトを使用することをお勧めします。

## SFDC アカウントエンリッチメント

SFDC のアカウントオブジェクトは **Sales Operations** が所有しています。

すべての SFDC アカウントは、現在 ZoomInfo で日次でエンリッチおよび再エンリッチされており、Instant Enrich がオンになっており、新しいアカウントが作成されたときにエンリッチされます。

Sales Operations は、アカウントエンリッチメントを **RingLead Enrich Premium** に積極的に移行しています。移行が完了すると、アカウントエンリッチメントは ZoomInfo のスケジュールジョブを通じて実行されなくなり、代わりに RingLead によって処理されます。

## SFDC リードエンリッチメント

SFDC のすべてのリードは、毎月第 3 金曜日に月次でエンリッチされます。

リードが月次でエンリッチされることに加えて、Lead 用の Instant Enrich を有効にしたばかりで、すべての新規リードが SFDC に到達するときにエンリッチされます。

Instant Enrich ジョブが失敗した場合のバックアップジョブとして、新規リードのスケジュール エンリッチを毎日実行し、セールスチームが最新の情報を持っていることを確認しています。

## SFDC コンタクトエンリッチメント

SFDC のすべてのコンタクトは、毎月第 3 金曜日に月次でエンリッチされます。

## キャンペーンメンバーエンリッチメント (リードとコンタクト)

Zoominfo Campaign Member Enrichment は、リードとコンタクトの両方のリストビューとエンリッチメントジョブを使用したスケジュール エンリッチで実現できます。

これを行うには、以下のステップに従ってください:

- **MktgOPS_C** などの操作フィールドを使用して、リードとコンタクトをマーク
- リードリストビューとコンタクトリストビューを作成し、操作フィールドを使用してフィルタリング
- リードとコンタクト両方の Zoominfo エンリッチメントジョブを作成およびスケジュールし、前のステップで作成したリストビュー経由のエンリッチメントを選択

## リードの重複作成を許可

以前は、Zoominfo Chrome 拡張機能は、Salesforce にすでに一致するリードが存在する場合、リードのエクスポートをブロックしていました。重複シナリオでは、担当者は ZoomInfo Chrome 拡張機能から直接インポートできず、代わりにリードを手動で作成する必要があり、これによりシーケンスのエンロールが遅くなり、ワークフローに不要な摩擦が加わりました。

私たちは現在、ZoomInfo が Salesforce で重複リードを作成できるようにし、新しい重複を毎日午後 3 時 ET に実行される [RingLead 重複排除ジョブ](https://gitlab.ringlead.com/deduplication/96556301/general/)に依存して特定およびマージしています。

このトグルは、ZoomInfo Salesforce 統合設定 (リードエクスポート/重複処理設定の下) にあり、「Allow Lead Duplicate Creation」をオンにできます。これにより、Chrome 拡張機能は、担当者が最も気にするシナリオ (新鮮なエンリッチメントを素早く取得し、プロスペクトをすぐにシーケンスに入れること) で有用なままになり、スケジュールされたクリーンアップによってデータ品質が維持され、重複ボリュームが制御下に置かれます。

## Marketo 統合

Marketo 統合は、ZoomInfo の **Enrich** 製品を活用しています。これは、webhook を活用して自動化された方法で行われます。

Marketo/ZoomInfo webhook は、人物レコードが以下のフォームを記入したときに、フォーム入力時にトリガーされます (継続的/将来的に):

1. SaaS Trial フォームに記入
1. Self-managed Trials フォームに記入
1. Contact Us フォームに記入

Enrich は主に ZoomInfo フィールドをエンリッチするように設定されています。ZoomInfo ([ZI]) フィールドは、最新の情報で値が上書きされます。`Employees Bucket` のような他の標準フィールドや、(First Name、Last Name、Job Title) のような他の Marketo 標準フィールドは、情報が欠落している場合のみエンリッチされます。

## Zoominfo タグ付け

ZoomInfo からリードをインポートするとき、Zoominfo Tag を使用して SFDC でリードにタグを付けることができます。SFDC にレコードをタグ付けしてインポートすると、そのタグは `Groove tag` という名前の SFDC フィールドに同期されます。このフィールドは、他のタグ付け目的にも使用できます。

Zoominfo タグを使用するときは、ZoomInfo を他のタグから簡単に区別できるように、タグの先頭に `ZI` と入力してください。たとえば、特定のプレイに基づいて ZoomInfo で人々のセットにタグを付けている場合、`ZI Premium to Ultimate` と書くか、特定の日付を使用したい場合は `ZI 11-4-24` と書いてもらいたいでしょう。

ルールに自分の名前のリード (My Unconverted Leads) を表示し、Groove Tag に自分のタグ名に基づくルールが含まれているリードビューを作成したいでしょう。ここから、ビューはリードを表示するので、フローに人を追加できます。

エクスポートする前にレコードにタグを付ける必要があることに注意してください。タグ付けは、Zoominfo Sales OS または Zoominfo Chrome Extension (拡張バージョン) のいずれかで行うことができます。1 つのレコードに複数のタグを適用することも可能です。

`リマインダー:` 人々を SFDC にインポートするとき、その人物がリードではなくコンタクトとして既に SFDC に存在している場合があります。Zoominfo は、SFDC に既に存在する個人をエンリッチし、タグが適用されます。これらの個人を表示するには、コンタクトリストビューを同じように作成する必要があります。

## Google Chrome がストールしていますか？

これは Zoominfo Google Chrome 拡張機能に関連している可能性があります。発生している問題のトラブルシューティングを行うには、以下に概説するステップに従うことをお勧めします:

1. 拡張機能の削除と再インストール:
   - [Chrome ストアで拡張機能を見つけるにはここをクリック](https://chromewebstore.google.com/detail/zoominfo-chrome-extension/fofjcndophjadilglgimelemjkjblgpf?hl=en-US)

1. Chrome ブラウザーが最新であることを確認:
   - Chrome ブラウザーの右上にある 3 点を選択 > 「Settings」を選択。「Settings」ページから、ページ左下の「About Chrome」を選択
   - Google Chrome が最新か更新中かがページの上部に表示されます
   - 必要に応じてブラウザーが更新する時間を許可し、プロンプトが表示されたらブラウザーを再起動します

1. ブラウザー設定ですべての Cookie を許可:
    - Chrome ブラウザーの右上にある 3 点を選択 > 「Settings」を選択
    - 「Settings」ページから、「Privacy and Security」を選択 > 次に「Third-party cookies」を選択 > 次に「Allow third-party cookies」を選択

1. 全期間でブラウザーのキャッシュと Cookie をクリア:
    - Chrome ブラウザーの右上にある 3 点をクリック > 「More Tools」をクリック > 次に「Clear Browsing Data」を選択
    - ポップアップウィンドウで、「Advanced」タブを選択 > 次に Time Range を「All Time」にします
    - 「Cookies and other site data」と「Cached images and files」の 2 つのチェックボックスを選択
    - 「Clear data」をクリック

1. 最後に、まず ZoomInfo プラットフォームに再度ログインしてから、Extension にログインします
