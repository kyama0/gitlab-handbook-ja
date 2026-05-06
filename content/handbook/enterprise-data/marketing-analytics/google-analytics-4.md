---
title: "Google Analytics 4"
upstream_path: "/handbook/enterprise-data/marketing-analytics/google-analytics-4/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

## Google Analytics 4

[Google Analytics 4](https://analytics.google.com/analytics/web/#/p267713722/)（GA4）はウェブ解析ツールであり、2024年7月に廃止されたユニバーサルGoogle Analyticsの後継です。GA4はGitLabのウェブプロパティにおけるウェブサイトトラフィックとユーザーエクスペリエンスの指標とディメンションを提供しています。対象プロパティは以下の通りです:

* about.gitlab.com
* docs.gitlab.com
* page.gitlab.com
* learn.gitlab.com
* university.gitlab.com
* forum.gitlab.com
* customers.gitlab.com（チェックアウトページ）
* gitlab.com（登録ページ）
  * /sign_up/
  * /users/sign_in
  * /users/almost_there
  * /users/sign_up/welcome
  * /users/sign_up/company/new
  * /users/sign_up/groups/new
  * /users/terms
  * /users/sign_up/groups
  * /trial_registrations
  * /trial_registrations/new
  * /trials/new
  * /profile/usage_quotas
  * /subscriptions/new
  * /subscriptions/buy_minutes

### Googleコンセントモード

Cookie同意に関するプライバシー要件への準拠を確保するため、GA4は実際のデータ（ファーストパーティCookie経由）と匿名化されたデータ（Cookieなしのping）を組み合わせたハイブリッドアプローチを採用しています。ウェブサイト訪問者が分析用Cookieを拒否した場合、Google AnalyticsはブラウザにいかなるCookieも設置しません。代わりに、ユーザーエージェント情報と位置情報データを含むCookieなしのペイロードをGoogle Analyticsサーバーに送信します。このGA4の更新バージョンは、Cookieが拒否された場合でもイベントを記録することでデータの整合性を高め、すべてのイベントを効果的に捕捉します。ただし、同意が拒否された場合のクライアントIDがないため、コンバージョンを適切に帰属させることはできません。ユーザーがブラウザ設定でDNT（Do Not Track）またはGPC（Global Privacy Control）シグナルを有効にしている場合は、データはまったく収集されません。

OneTrustはCookie同意管理ツールです。データ収集のバナーマトリクスとジオロケーションルールは[このハンドブック](/handbook/marketing/digital-experience/onetrust/#consent-models)で確認できます。OneTrustのCookieカテゴリはGoogleコンセントモードのカテゴリにマッピングされています。

### イベント

GA4で収集されるすべてのデータはイベントとして追跡され、各イベントには追加情報を格納するパラメーターを含めることができます。以下は2024年7月時点でのイベントと関連パラメーターの完全なリストです:

| イベント名                      | イベントパラメーター                                                                                       | イベントの説明                                                                                                                     |
|---------------------------------|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| cta_click                       | cta_click_location<br>cta_click_name                                                                  | リンクのクリック。ページセクションと要素名を含みます。                                                                             |
| navigation_menu_click           | navigation_menu_level1<br>navigation_menu_level2                                                      | ナビゲーションメニューからのリンクのクリック                                                                                                  |
| video_start                     | video_title<br>video_id<br>video_host                                                                | 動画の再生開始。タイトル、ID、ホスティングプラットフォームを含みます。                                                                                |
| video_progress_25               | video_title<br>video_id<br>video_host                                                                | 動画の25%マイルストーン通過。タイトル、ID、ホスティングプラットフォームを含みます。                                                         |
| video_progress_50               | video_title<br>video_id<br>video_host                                                                | 動画の50%マイルストーン通過。タイトル、ID、ホスティングプラットフォームを含みます。                                                         |
| video_progress_75               | video_title<br>video_id<br>video_host                                                                | 動画の75%マイルストーン通過。タイトル、ID、ホスティングプラットフォームを含みます。                                                         |
| video_complete                  | video_title<br>video_id<br>video_host                                                                | 動画の完了。タイトル、ID、ホスティングプラットフォームを含みます。                                                                            |
| pricing_faq_expand              | pricing_faq_question                                                                            | 価格ページでのFAQ展開トグル。FAQ質問を含みます。                                                                 |
| pricing_faq_collapse            | pricing_faq_question                                                                           | 価格ページでのFAQ折りたたみトグル。FAQ質問を含みます。                                                               |
| pricing_feature_expand          |                                                                                                        | 価格ページでの機能セクションの展開トグル。                                                                                                  |
| pricing_feature_collapse        |                                                                                                        | 価格ページでの機能セクションの折りたたみトグル。                                                                                |
| pricing_feature_info_click      | pricing_feature                                                                                | 価格ページの箇条書き情報クリック。機能名を含みます。                                                                     |
| pricing_user_calculator         |                                                                                                        | /pricing/premium/ および /pricing/ultimate/ ページのユーザー計算機。フィールドに数字が入力されたときにトリガーが発火します。 |
| account_register                | register_method<br>register_type                                                                     | トライアル登録とサインアップページでのアカウント登録。フォーム送信とSSOクリックを含みます。                        |
| saas_trial_form                 |                                                                                                        | 「Ultimate トライアルを開始」ページでのフォーム送信。SaaSトライアルのコンバージョンポイントです。既存のGitLabアカウントを持つユーザーがこのページにアクセスできます。 |
| saas_trial_company              | saas_trial_company_type                                                                               | 「会社について」ページでのフォーム送信。SaaSトライアルのコンバージョンポイントです。新規ユーザーはアカウント登録フローからこのページにアクセスできます。 |
| saas_trial_create_group         |                                                                                                        | SaaSトライアル内の「もう少しで完了」ページでのフォーム送信。既存ユーザーは「Ultimate トライアルを開始」ページの後にこのページにアクセスできます。 |
| saas_trial_create_group_project |                                                                                                        | 「最初のプロジェクトを作成またはインポート」ページでのフォーム送信。新規ユーザーは「会社について」ページの後にこのページにアクセスできます。   |
| saas_trial_import_project       | saas_trial_import_project_platform                                                              | 「最初のプロジェクトを作成またはインポート」ページのプラットフォームCTAへのクリック。新規ユーザーは「会社について」ページの後にこのページにアクセスできます。 |
| form_submit                     | form_type<br>form_id                                                                                | About、Page、Learnサブドメインにわたるリードジェネレーションフォームへのフォーム送信。フォームIDと種類を含みます。                       |
| scroll_depth_25                 |                                                                                                        | ページの縦方向スクロールで25%深度を通過。                                                                                            |
| scroll_depth_50                 |                                                                                                        | ページの縦方向スクロールで50%深度を通過。                                                                                            |
| scroll_depth_75                 |                                                                                                        | ページの縦方向スクロールで75%深度を通過。                                                                                            |
| scroll_depth_100                |                                                                                                        | ページの縦方向スクロールで100%深度を通過。                                                                                           |
| search_suggestion               | searched_query                                                                                        | サイト内検索サジェストのクリック。検索クエリを含みます。                                                                           |
| search_result                   | searched_query                                                                                        | 検索結果の読み込み。検索クエリを含みます。                                                                                     |
| search_result_click             | searched_query                                                                                        | 検索結果アイテムへのクリック。検索クエリを含みます。                                                                          |
| search_filter                   | searched_query<br>search_source_name                                                                 | 検索結果ページでのフィルター選択。フィルター名と検索クエリを含みます。                                             |
| search_sort                     | searched_query<br>search_sort_name                                                                   | 検索結果の並び替え。並び替え名と検索クエリを含みます。                                                                |
| features_stage_click            | features_stage                                                                                        | 機能ページのステージタブクリック。ステージ名を含みます。                                                                      |
| features_category_click         | features_stage<br>features_category                                                                  | 機能ページの各ステージのカテゴリクリック。ステージとカテゴリ名を含みます。                                             |
| cta_click                       | cta_click_location<br>cta_click_name<br>features_stage<br>features_category<br>features_card         | 機能ページのリンククリック。ステージ、カテゴリ、機能カードタイトル、要素名を含みます。                                 |
| features_filter                 | features_stage<br>features_filter_tier                                                               | 機能ページでの価格ティア別カードのフィルタリング。ステージとティアを含みます。                                                        |
| language_selection              | language_selected                                                                                    | ローカライゼーション言語のドロップダウンメニュー選択                                                                                         |
| qualified_event                 | "qualified_category<br>qualified_action"                                                              | Qualifiedチャットボットのインタラクション: 会話開始、メール送信、会議予約。                                         |
| navattic_demo                   | "navattic_event_name<br>navattic_flow_name<br>navattic_project_name<br>navattic_click_url<br>navattic_step_number" | Navatticインタラクティブデモ（例: https://about.gitlab.com/small-business/）                                                             |
| 6sense_loaded                   | "Sixsense Employee Range<br>Sixsense Confidence<br>Sixsense Country<br>Sixsense Blacklisted<br>Sixsense Sales Segment<br>Sixsense Company<br>Sixsense Industry<br>Sixsense Revenue Range" | ページビューごとに6senseウェブスクリプトが正常に読み込まれます。イベントパラメーターはユーザースコープに格納され、後続のイベントのクライアントIDに付加されます。 |
| saas_trial_duopro               |                                                                                                        | gitlab.com/-/trials/duo_pro/new でのDuo Proトライアル登録 - 2024年4月1日                                                                 |

### カスタムディメンション

GA4にはデフォルトでイベントをさらに詳細に分類できるデバイスや位置情報などのディメンションが含まれています。カスタムディメンションはウェブサイト訪問者の分析を強化するために設定されています。企業レベルで訪問者を特定するABMツールである6senseがGA4データセットと統合されています。以下の6senseディメンションはユーザースコープで設定されており、ユーザーが分析用Cookieに同意した場合に特定のクライアントIDのすべてのイベントに適用されます。

| ディメンション              | 説明                                     | 例の値         | Snowflakeカラム     |
|------------------------|-------------------------------------------------|-----------------------|----------------------|
| Sixsense Employee Range| 訪問者の会社の従業員数範囲            | 1,000 - 4,999         | SSENSE_EMPLOYEE_RANGE|
| Sixsense Confidence    | 6Senseがユーザーを特定する確信度| 低、中、高   | SSENSE_CONFIDENCE    |
| Sixsense Country       | 訪問者の会社の国                   | 米国         | SSENSE_COUNTRY       |
| Sixsense Blacklisted   | 訪問者の会社がブラックリストに入っているか        | false                 | SSENSE_BLACKLISTED   |
| Sixsense Sales Segment | 従業員数範囲に基づく訪問者の会社の規模 | SMB、エンタープライズ、ミドルマーケット | SSENSE_SALES_SEGMENT |
| Sixsense Company       | 訪問者の会社名                     | GitLab                | SSENSE_COMPANY       |
| Sixsense Industry      | 訪問者の会社の業種                 | ソフトウェアとテクノロジー | SSENSE_INDUSTRY  |
| Sixsense Revenue Range | 訪問者の会社の収益範囲            | $1M - $5M             | SSENSE_REVENUE_RANGE |

### eコマース

マネタイズタブの下にあるeコマース購入レポートは、[価格ページ](https://about.gitlab.com/pricing/)と[チェックアウトページ](https://customers.gitlab.com/subscriptions/new?plan_id=2c92a01176f0d50a0176f3043c4d4a53&test=capabilities)でのeコマース活動の詳細を示します。アイテムパラメーターをディメンションとして使用することで、希望するイベントを詳細に分類できます。次の表はeコマースイベントと関連するアイテムパラメーターの概要です。

| イベント名      | イベントの説明                                              | イベントパラメーター                                        | アイテムパラメーター                                                                                   |
|-----------------|----------------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| view_item       | 価格ページの「Buy Premium」または「Buy Ultimate」CTAクリック時。| -                                                    | item_id（01 = Ultimate、02 = Premium）<br> item_name（Ultimate、Premium）<br> item_category（DevOps） |
| add_to_cart     | 価格ページの「Purchase SaaS」または「Purchase Self Managed」クリック時。| -                                                    | item_id<br> item_name<br> item_category<br> item_category2（SaaS）                                 |
| begin_checkout  | チェックアウトページの読み込み時。                                            | -                                                    | item_id<br> item_name<br> item_category<br> item_category2                                       |
| purchase        | チェックアウトページでの取引成功時。                                  | トランザクションID<br> 収益<br> 通貨<br> 税金           | item_id<br> item_name<br> item_category<br> item_category2<br> item_price<br> item_quantity       |

注: purchaseイベントは年間経常収益と混同しないようにしてください。初回のセルフサービス取引のみを追跡しており、年間の経常取引は追跡していません。

### キーイベント

「キーイベント」は、ビジネス目標に沿ったウェブサイト上の重要なイベントを測定するコンバージョン指標です。GA4で収集されたイベントはコンバージョンとして設定できます。次の表はコンバージョンのリストとイベント条件に基づく定義の概要です。

| コンバージョン               | イベント条件                                                                  | 説明                                                                                                                |
|---------------------------|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| `generate_lead`             | `form_type` ディメンションが「self managed trial」または「newsletter」と等しくない `form_submit` イベント | ブログ購読とセルフマネージドトライアルを除いた、gitlabのウェブプロパティ全体のすべてのMarketoフォーム送信。      |
| `saas_trial`                | `saas_trial_form` イベントと `saas_trial_company_type` が「ultimate_trial」と等しい `saas_trial_company` イベント | [会社について](https://gitlab.com/users/sign_up/company/new)ページと[Ultimate無料トライアルを開始](https://gitlab.com/-/trials/new)ページでのSaaSトライアルフォーム送信。                            |
| `self_managed_trial`        | `form_type` ディメンションが「self managed trial」と等しい `form_submit` イベント        | [無料トライアル](https://about.gitlab.com/free-trial/?hosted=self-managed)ページでのセルフマネージドトライアルフォーム送信。                                                                  |
| `purchase`                  | `purchase` イベント                                                                    | チェックアウトページでの取引成功。                                                                              |
| `qualified_email_submit`    | -                                                                                 | Qualifiedチャットボット経由のメール送信。                                                                             |
| `qualified_meeting_booked`  | -                                                                                 | Qualifiedチャットボット経由での営業チームとの会議予約。                                                                  |

### アトリビューション

レポートペインのアクイジションレポートは、セッションに基づくトラフィックの参照元の概要を提供します。主要な指標は次のディメンションと組み合わせられます: デフォルトチャネルグループ、ソース、メディア、キャンペーン。

UTMパラメーターがランディングページのURLに適用されると、Google Analyticsは相関するチャネルグループ、ソース、メディア、キャンペーンに基づいてトラフィックを分類します（UTMが利用できない場合は`document.referrer`を使用）。[UTM戦略についての詳細はこちらをご覧ください。](/handbook/marketing/utm-strategy/)

コンバージョンは、レポートUIの左上角にあるドロップダウンメニューから選択できます。

異なるアトリビューションモデルを表示するには、広告ペインのモデル比較レポートをご覧ください。ユーザーのジャーニーに基づいて、コンバージョンに対する広告プラットフォームの影響を分析するための希望するアトリビューションモデルを選択します。例えば、ディスプレイ広告はブランド認知戦略の一部である可能性があり、ラストクリックコンバージョンが少ないかもしれませんが、ファーストクリックコンバージョンの促進においてはより効果的かもしれません。GA4アトリビューションモデルについての詳細は[こちら](https://support.google.com/analytics/answer/10596866#models&zippy=%2Cin-this-article)をご覧ください。

### エクスプロレーション

[エクスプロレーション](https://analytics.google.com/analytics/web/#/analysis/p267713722)ペインは、カスタム分析レポートを作成・視覚化するためのユーザーフレンドリーな方法を提供します。ディメンションとイベントはドラッグアンドドロップで操作でき、視覚化はリアルタイムで更新されます。利用可能なビジュアル: テーブル、ドーナツグラフ、折れ線グラフ、散布図、棒グラフ、マップ。テーブルビジュアル内では、フリーフォーム、コホート、ファネル、セグメントオーバーラップ、パスエクスプロレーション、ユーザーエクスプロレーション、ユーザーライフタイムなど、さまざまな手法を適用できます。エクスプロレーションレポートは、レポートを生成したり時間の経過に伴うトレンドを監視するためのセルフサービス手段を提供します。カスタムレポートの作成を始めるには、イベントGoogleスプレッドシートを参照してください。

#### サンプルレポートテンプレート

カスタムレポートを作成するための出発点として[サンプルレポート](https://analytics.google.com/analytics/web/#/analysis/a37019925p267713722/edit/J2l0ms7fQ8OsqLLxLlHC4g)が利用可能です。テンプレートには5つの事前設定されたタブが含まれています:

* ランディングページ: ホスト名とページパス別のセッション数、エンゲージメント率、直帰率（`session_start`イベントでフィルタリング）
* ページ: ホスト名とページパス別のページビュー数、スクロール深度（75%）、離脱数
* コンバージョン: コンバージョンイベント（`saas_trial`、`form_submit`、`purchase`）のイベント数、セッション数、総ユーザー数
* ページコンバージョン: 全ユーザーとコンバージョンイベント（`saas_trial`、`form_submit`、`purchase`）を比較するセッションスコープのセグメントによるページパフォーマンス
* クリック: ページパス、CTAの位置、CTA名、総ユーザー数を示すCTAクリック追跡（about.gitlab.comと`cta_click`イベントでフィルタリング）

テンプレートを使用するには、サンプルレポートのコピーを作成し、必要に応じてディメンション、指標、フィルターをカスタマイズします。右上隅の緑のチェックマークまたは感嘆符アイコンに注意してください。これはレポートがサンプリングされたデータを使用しているかどうかを示しています。

## 高度な視覚化のためのデータ可用性

### データフロー

GA4は毎日BigQueryプロジェクト`mktg-goog-analytics4-5e6dc7d6`にイベントをネイティブでエクスポートします。エンタープライズデータチームはBigQueryからGA4イベントを[エクスポートして](https://gitlab.com/groups/gitlab-com/marketing/-/epics/5047)、以下のSnowflakeテーブルに格納します:

* `PROD.WORKSPACE_MARKETING.WK_GOOGLE_ANALYTICS_4_EVENTS`
* `PROD.WORKSPACE_MARKETING.WK_GOOGLE_ANALYTICS_4_PSEUDONYMOUS_USERS`

GA4のデータは2023年12月24日以降から利用可能です。それ以前の履歴データにはGA360テーブルをご使用ください:

* `PROD.LEGACY.GA360_SESSION_HIT`
* `PROD.LEGACY.GA360_SESSION`

### 製品データとの結合

SnowplowはSQLベースのウェブ解析ツールであり、製品データ分析のメインツールです。Snowplowには、Analytics実装チームが[SnowplowのGAクッキープラグイン](https://gitlab.com/gitlab-org/gitlab/-/issues/469410)を活用することで利用可能になったGA4クライアントIDを取得するカラムが含まれています。クライアントIDはGA4とSnowplowの間の主キーとして使用できます。SnowplowのネームスペースIDは、ウェブから製品の使用に関する他のテーブルとの結合に利用できます。

* `PROD.COMMON.FCT_BEHAVIOR_WEBSITE_PAGE_VIEW`
* `PROD.COMMON_PREP.PREP_SNOWPLOW_SESSIONS_ALL`（新しいテーブルに更新予定）

### SFDCデータとの結合

Marketoフォームには、about.gitlab.com、page.gitlab.com、learn.gitlab.comでGA4クライアントIDを収集する隠しフィールドが含まれています。`GACLIENTID__c`フィールドで確認できます。その後、Marketoは[クライアントIDをSFDCテーブルに送り](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/1639)、ウェブからの営業支援サブスクリプションを分析することができます。

### ダッシュボード

Tableauは、特に（例えば、ウェブ訪問者を有料サブスクリプションにリンクする）他のソースとウェブデータを接続する際の高度なBIデータ視覚化に推奨されます。GAクライアントIDを活用することができます。

ウェブデータのみに焦点を当てた視覚化には、直感的なドラッグアンドドロップインターフェースを持つLooker Studioの使用を検討してください。これにより、BigQueryを使用しない限り、各指標のSQL CTEを作成する必要なく、より迅速にダッシュボードを作成できます。
