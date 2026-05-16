---
title: UTM 戦略
description: 接続された結果の Tableau ダッシュボードを通じてインサイトを可能にする、UTM 戦略について知っておくべきすべて。
twitter_image: /images/tweets/handbook-marketing.png
twitter_site: '@gitlab'
twitter_creator: '@gitlab'
upstream_path: /handbook/marketing/utm-strategy/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-17T16:13:00-07:00"
---

## 概要

このハンドブックページの目的は、私たちの UTM 戦略が Sisense の洞察的なダッシュボードをどのように推進するかを概説することです。UTM ビルダーの使用方法と、一貫した有用なレポートのためにすべてのマーケティングチャンネルでこの一貫したプロセスを使用することが重要である理由を学ぶことができます。

[イネーブルメントセッション] UTM パラメータのイテレーションとレビューは、[この YouTube ビデオ](https://youtu.be/QcH2pBH37wU) および [ppt プレゼンテーション](https://docs.google.com/presentation/d/1c59rG6abWe1wVd9KLQLu_TePXMYjGUg2IK9_xb1M2P8/edit#slide=id.p) で利用可能です。

誰もが貢献できます - 議論またはイテレーションしたい項目を見つけましたか？MR を開始し、[#mktg-analytics](https://gitlab.enterprise.slack.com/archives/C01HTAYQBM5) Slack チャンネルに投稿してください。

## UTM とは

UTM パラメータは、URL に追加される特定のテキスト文字列で、[Bizible タッチポイント](/handbook/marketing/marketing-operations/bizible/#bizible-touchpoints) およびその他の Web 分析ツールを通じて Tableau ダッシュボードでパフォーマンス追跡を容易にするために使用されます。

URL の例：

```text
https://page.gitlab.com/resources-ebook-beginners-guide-devops-fr.html?utm_medium=email&utm_source=marketo&utm_campaign=2024_01_20_emea_dmp_webcast_autosd_fr_beginnersguidedevops&utm_content=devguideappsec_ebook&utm_partner_id=gcp
```

UTM パラメータは、疑問符の後に来るすべてです：

* utm_medium=email
* utm_source=marketo
* utm_campaign=2024_01_20_emea_dmp_webcast_autosd_fr_beginnersguidedevops
* utm_content=devguideappsec_ebook
* utm_partnerid=0018X00002zWCjU

## UTM を使用する理由

リンクに UTM を追加すると、マーケティングがトラフィック、フォーム送信、Web プロパティ上の活動のソースを特定でき、マーケティングファネルの最初のステップが作成されます。Web トラフィックとフォーム送信にソースがあると、マーケティングは ROI を計算するための帰属方法を使用できます。

UTM パラメータは 3 つの主要な利点を提供します：

1. 各タッチポイントを通じて顧客のジャーニーを理解するのに役立ちます。
2. マーケティングチャンネルとマーケティングキャンペーンの分類、および人がコンバートしたランディングページを提供し、オファー（ウェビナー、ゲートコンテンツ、無料トライアルなど）を教えてくれます。
3. 組み合わせて使用すると、マーケティングチャンネル、キャンペーン、オファーのどのミックスが最高の結果をもたらすかをよりよく理解できます。

## UTM をいつ使用するか

リンクに UTM が必要な場合と必要でない場合を理解することは、マーケティングデータをクリーンで有用に保つために重要です。一般的なルールとして、リンクが GitLab が管理する Web サイトを指している場合、UTM はリンクに追加する必要があります。

UTM が必要でなく、トラッキングを破壊する可能性のあるいくつかの状況があります。最も一般的なのは、**同じ Web サイト** の別のページにリンクする場合です。たとえば、キャンペーンが pages.gitlab.com のランディングページにトラフィックを誘導し、ランディングページが同じドメインの別のページにリンクする場合、ランディングページのみがリンクに UTM を必要とします。

以下にリンクする場合は **常に** UTM を使用する必要があります：

* about.gitlab.com
* gitlab.com（トライアルと登録ページのみ）
* learn.gitlab.com
* pages.gitlab.com
* docs.gitlab.com

**UTM が必要でない場合：**

* GitLab 以外の Web プロパティにリンクする場合（例：Youtube、LinkedIn など）
* 同じ gitlab.com ドメインの内部リンク。たとえば、about.gitlab.com の Web ページから learn.gitlab.com にリンクする場合。Google Analytics はクロスドメイン追跡用にセットアップされています。内部 gitlab.com リンク内に UTM が検出されると、新しいセッションがカウントされ、コンバージョン帰属は新しい UTM パラメータ値によって上書きされます。元のソースは適切なクレジットを受け取りません。

## UTM の作成方法

[式付き UTM ビルダー googlesheet](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=29481466) を使用してください。スプレッドシートの [ビデオ概要はこちら](https://youtu.be/WRSIZ84027g) です。プロセスには以下のステップが含まれます：

* [Tracking URL Builder](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=29481466) を開く
* 最初の列にページ URL を追加
* `utm_source`、`utm_medium`、`utm_campaign`、`utm_content`、`utm_budget` を含む UTM パラメータの各属性を記入。これらの UTM パラメータの一部がキャンペーンに関連しない場合は、空白のままにするか、最終 URL から削除してください。
* 目的地 URL は列 N に自動的に生成され、キャンペーンで使用できる準備ができています。URL を短縮する必要がある場合は、[bit.ly](https://bitly.com/) などのツールを使用してください。

### 成功の測定

[TD Campaigns Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDCampaigns-L2RInteractions/Overview?:iid=1) の "Bizible Channel Drill Down" または "Regional Campaign Drill Down" セクションでキャンペーンの成功を測定してください。

## UTM 値

### utm_medium

**Campaign Medium** は、メール、ディスプレイなどの包括的なチャンネルバケットです。「彼らはどのように私たちに来たか？」という質問に答えます。utm_source は包括的なチャンネルをさらに分類します。
[URL Builder スプレッドシート](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=2043976569) で提供される値のピックリストから campaign medium を選択できます。新しい campaign medium が必要な場合は、Slack チャンネル：#mktg-strat-perf を使用してリクエストしてください。

`utm_medium` の現在利用可能なオプションは次のとおりです：

* `email` = marketo、outreach、mailjet、highspot などのすべてのメールシステム。
* `cpc` = 有料検索
* `display` = ディスプレイ広告
* `paidsocial` = 有料ソーシャル
* `social` = オーガニックソーシャル
* `sponsorship` = 有料パブリッシャーエンゲージメント/スポンサーシップ
* `chat` = Web サイト会話型ボット
* `pdf`    ホワイトペーパー、電子書籍、レポートなどのリンク
* `referral` = 顧客レビューサイト
* `syndication` = サードパーティ - コンテンツシンジケーション
* `webinar`    = サードパーティ - スポンサーシップイベント
* `video` = ファーストパーティ - 所有ビデオ

### utm_source

**Campaign Source** パラメータは、どの Web サイトがトラフィックを送信しているかを教えることができ、全体的なチャンネルのさらなる「スライス」です。「彼らはどのように私たちに来たか？」という質問に答えますが、utm_medium よりも詳細です。
URL Builder スプレッドシートで提供される値のピックリストから campaign source を選択できます。新しい campaign source が必要な場合は、Slack チャンネル：#mktg-strat-perf を使用してリクエストしてください。

`utm_source` の現在利用可能なオプションは次のとおりです：

| **Source** | **Medium との対応** | **Source**  | **Medium との対応** |
| -------------------------------------- | -------------------- | ------------------------ | --------------------------------|
| `adwords` | cpc に対応 | `marketo` | email に対応、Marketo（マーケティングオートメーション）を介して送信 |
| `bing`                          | cpc に対応  | `mailjet`  | email に対応、基本的に製品を介して送信 |
| `yahoo`  | cpc に対応  | `trustradius` | referral に対応 |
| `doubleclick`  | display に対応 | `highspot`  | email に対応、highspot（セールス）を介して送信 |
| `6sense`    | display に対応                                   | `gmail`       | display に対応 |
| `google`                       | オーガニック検索、cpc、display に対応 | `outreach`  | email に対応、Outreach（SDR/BDR）を介して送信 |
| `demandbase`                         | display に対応 | `g2`       | referral に対応 |
| `facebook`          | オーガニックソーシャルと有料ソーシャルに対応 | `gartnerdigital`       | referral に対応 |
| `linkedin`  | paidsocial、social に対応 | `gartnerpeer` | referral に対応 |
| `twitter` | paidsocial、social に対応 | `integrate-market`       | syndication に対応 |
| `iterable` | email に対応、製品の Iterable（マーケティング）を介して送信 | `youtube` | "video" のドロップダウンメニューに表示されるべき |
| `stack-overflow`  | display に対応 | `vimeo` | "video" のドロップダウンメニューに表示されるべき |
| `agency` | email、paid social、social に対応（エージェンシーがどのように宣伝しているかによる） | | |

`utm_source` の値は、UTM ビルダー googlesheet のオープンピックリストとして利用できます。文字なし、すべて小文字のベストプラクティスを保ち、[リスト](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=3) に新しい値を追加する際は一貫してください。

### 新しい utm_campaign 構造

UTM Campaign の単一の値の代わりに、多くの値を単一のパラメータにエンコードします：
`Date`_`Region`_`Budget`_`Type`_`gtm`_[Language]_[campaign_name]

UTM campaign により多くのデータをエンコードすると、その情報が Bizible タッチポイントに直接転送され、SFDC でドロップダウン/ポイントアンドクリックレポートが可能になります。

| パラメータ | 必須 / オプション | 例 |
|---------------------------|----------------------|----------------------|
| `Date`（ISO 形式 - yyyy_mm_dd） | 必須（キャンペーンがエバーグリーンの場合は eg を使用） | 2024_02_20 |
| `Region`（ドロップダウンから選択） | 必須（複数の地域の場合、x を使用） | emea |
| `Budget`（ドロップダウンから選択） | 必須（該当しない場合、x を使用） | dmp |
| `Type`（ドロップダウンから選択） | 必須（該当しない場合、x を使用） | dmp |
| `GTM`（ドロップダウンから選択） | 必須（該当しない場合、x を使用） | autosd |
| `Language`（ドロップダウンから選択） | オプション | fr |
| `Campaign name`（自由テキストフィールド） | オプション | beginnersguidedevops |
| `Agency`（自由テキストフィールド） | オプション、まれ | 使用されている場合、サードパーティエージェンシーの名前 |

`Agency` に関する注意：イベントへの登録を促進するために、サードパーティエージェンシーが使用されることがあります。これは一般的ではありません。エージェンシーを使用している場合は、`agency` ソースを使用し、UTM ジェネレーターの `Agency` フィールドにエージェンシーの名前を追加します。これにより、utm_campaign 値の一部として適切な場所に名前が追加されます。

#### 現在の GTM UTM

* speedsecurity = Trading off Speed for Security
* devsecopsplat = DevSecOps Platform GTM
* autosd = Automated Software Delivery GTM

#### 廃止されたユースケース UTM

* seccomp = Security and Compliance GTM
* singleappci = CI Campaign
* iacgitops = GitOps Campaign
* vccusecase = VC&C Campaigns（廃止）
* competegh = OctoCat Competitive
* cdusecase = CD Campaign

#### utm_content

**Campaign Content**（`utm_content`）は、`content offer` と `asset type` の 2 つの値をエンコードするオプションのパラメータです：

| パラメータ | 必須 / オプション | 例 |
|---------------------------|----------------------|----------------------|
| Content offer | オプション（該当しない場合、x を使用） | devguideappsec |
| Asset type | オプション（該当しない場合、x を使用） | ebook |
| Industry（垂直） | オプション（該当しない場合、x を使用） | telco |

例: utm_content=seccspackage_ebook_fs

**Asset Type** 値（UTM ビルダー googlesheet のピックリストとして利用可能）：

* ebook = ゲート付き電子書籍
* whitepaper = ホワイトペーパー
* blog = ブログ投稿
* video = ビデオコンテンツ
* briefs = ソリューションブリーフ
* infogr = インフォグラフィック

#### utm_partnerid

UTM パラメータ URL は、パートナーリードルーティングとレポートで大きな役割を果たします。`utm_partnerid` を UTM パラメータ URL で活用して、パートナーアカウントの Account ID (18) をキャプチャし、`CRM Partner ID` に入力します。このプロセスは、すべてのパートナー関連の Marketo フォームの隠しフィールドとして埋め込まれています。各ページに URL の `utm_partnerid` が必要で、そうでない場合パートナーに渡すことができません。

* utm_medium = `partner`（変更されない）
* utm_soure = `partner`（変更されない）
* GTM = `x`（変更されない）
* Partner Name - `utm_partnerid` は、すべてのパートナー名を表示するドロップダウンです。作業しているパートナーを選択すると、utm_partnerid が最終目的地 URL に自動的に入力されます。

[Salesforce Connector](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit?gid=545684823#gid=545684823) を活用して、すべてのパートナー名とその Partner ID を UTM ジェネレーターにプッシュすることに注意してください。これにより、すべてのパートナー情報が Salesforce からのリアルタイムデータで更新されることを確実にできます。

### ナーチャーメール用の UTM 構造

* UTM Medium = `email`（変更されない）
* UTM Source = `marketo`（変更されない）
* UTM campaign = `Date_Region_Budget_Type_gtm_[Language]_[campaign_name]`（例：`2024_02_20_emea_dmp_webcast_devsecopsplat_fr_beginnersguidedevops`）
* UTM content = `content_offer` と `asset type`（例：`utm_content=devguideappsec_ebook`）
  * utm_content には `nurture` を使用しないでください。

### アカウントベースマーケティング用の UTM 構造

#### 6Sense 用の UTM 構造

* UTM Medium = `banner`
* UTM Source = `6sense`
* 受け入れられるオプションについては [utm_campaign を参照](/handbook/marketing/utm-strategy/#the-new-utm_campaign-structure) してください。

  * 広告バリエーションには、コンテンツオプションの末尾に省略形を追加します（つまり、`-accl1` `-accel2`）
  * 実際の例：`utm_content=acceldigtransformation` は、異なる広告コピーを持つ 4 つの広告バリエーションに対して次のように追加されます：
    * `utm_content=acceldigtransformation-accel2`
    * `utm_content=acceldigtransformation-accel1`
    * `utm_content=acceldigtransformation-live2`
    * `utm_content=acceldigtransformation-live1`
