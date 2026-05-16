---
title: "ランディングページの作成"
description: "GitLab における Marketo ランディングページの概要。このページは Demand Generation の下に移動される予定です。"
twitter_image: '/images/tweets/handbook-marketing.png'
twitter_site: "@gitlab"
twitter_creator: "@gitlab"
upstream_path: /handbook/marketing/demand-generation/campaigns/landing-pages/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-08T16:59:33-05:00"
---

## ベストプラクティス

## ランディングページのコンバージョンに関するベストプラクティス

`Brand & Digital のベストプラクティスページが作成されたら削除してリンクします`

1. *「ユーザーに考えさせるな」 - Steven Krug*
1. ヘッダーは最大 3〜7 語にする
1. ヘッダー、オプションのブラーブ、画像はインバウンドの文脈（例: クリックされた広告）と直接結びつくべき
1. 平易で、価値志向かつ行動志向の言葉を使う
1. 「ファーストデート」コンテンツを使って、最高の姿を見せる

   * 私たちがどれほどクールで、私たちのスタンプコレクションがどれほど素晴らしいかを伝えるのではなく、彼ら自身に関するものにし、フォーム入力という望ましいアクションを促しましょう。

## ランディングページ URL のベストプラクティス

* about.gitlab.com ページの場合: H1／ページタイトルが URL のスラグになります
* H1 は簡潔で、キャンペーンのキーワードに焦点を当てるべきです
* Marketo および PathFactory のランディングページの場合は、ランディングページの命名規則に従ってください。[Content URL Builder](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit?gid=1807603787#gid=1807603787) を活用してください。

## リソースと関連 Issue

* [文字数チェッカー](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=868164112)
* 関連する Brand & Digital の Issue:
  * [新しい Marketo ランディングページテンプレートの作成 フェーズ 1](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/7259)
  * [Marketo ランディングページ フェーズ 1 - KPI と検証](https://gitlab.com/gitlab-com/marketing/growth-marketing/brand-and-digital/brand-and-digital/-/issues/52)
  * [Marketo ランディングページテンプレート設計、フェーズ 2](https://gitlab.com/gitlab-com/marketing/growth-marketing/brand-and-digital/brand-and-digital/-/issues/43/)
  * [既存および新規ランディングページのコンバージョン改善のため Marketo フォーム（デザイン + コピー）を更新](https://gitlab.com/gitlab-com/marketing/growth-marketing/brand-and-digital/brand-and-digital/-/issues/66)

## ランディングページ作成のオプション

私たちはいくつかの場所でランディングページを作成しています。Marketo は最も効率的なオプションで、トークンと自動化があらかじめプログラムに組み込まれているため、より迅速かつ一貫性のある実行が可能です。events yml は、特定のコードが含まれている場合にランディングページを作成します。ゲート付きコンテンツページは Marketo で作成され、その後 /resources/ yml にリスティングとして追加されます。キャンペーンページは現在 about.gitlab.com で作成されています。

## Marketo ランディングページ（一般）

*注: これにはランディングページを作成および承認するアクセス権を持つ Marketo ライセンスが必要です。*

以下のセクションでは、ランディングページの種類別に Marketo ランディングページのより詳細なプロセスと、作成プロセスに関する一般的な情報を扱います。

> Marketo で最も高度かつ効率的なランディングページプロセスを構築するため、Marketo プログラムテンプレートで `My Tokens` を活用し、コンバージョンのベストプラクティスに基づく文字数制限とともにコピーを作成しています。

**グラフィック**  
現在の Marketo ランディングページテンプレートでは、ヘッダーの右側に小さな画像を配したチャコール背景を使用しています。ランディングページを編集する際に `Hero1 Image` 変数にデザインスタジオの画像へのリンクを入れることで、カスタム画像を使用できます。`Hero1 Color` 変数に `highlight-white` を入力することで、背景を白に変更できます。

カスタムヘッダー（チャコールまたは白背景を使用できないもの）が必要な場合、必要な大まかな寸法は `1920 x 600 px` で、グラフィックの寸法は 500 x 250 px、垂直方向に中央揃え、右端に 100 px のパディングが必要です。`Nav Background Image Path` 変数にデザインスタジオの画像へのリンクを入れます。`Hero1 Image` 変数には何も入力しないでください。カスタム画像の下の黒い線を削除するには、`Hero1 Color` を「highlight-white」に変更します。

### Marketo ランディングページの手順、文字数制限、ワークバックタイムライン

ランディングページの期日をいつに設定すべきか見積もる方法に興味がありますか？私たちは、ランディングページコピー（別の Issue テンプレート）も含めたランディングページ作成の**依存関係**が明確に見えるよう、ワークバックを使って簡単にできるようにしました。

* ゲート付きコンテンツ（社内コンテンツ、アナリストコンテンツ、競合コンテンツ）
  * [Content URL Builder](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit?gid=1807603787#gid=1807603787)
  * [プロセスと詳細を参照するハンドブックページ](/handbook/marketing/demand-generation/campaigns/content-in-campaigns/)
  * [ワークバックスケジュール計算機](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=1648326617)
  * [文字数制限チェッカー](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=905304679)
* ウェブキャストの登録ページ
  * [プロセスと詳細を参照するハンドブックページ](/handbook/marketing/virtual-events/webcasts/)
  * [ワークバックスケジュール計算機](https://docs.google.com/spreadsheets/d/1A4c2OodEAsOlN4Ek-rBiLlwkdF0AvX5YBiY4mhkZd-M/edit#gid=666473040)
  * [文字数制限チェッカー](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* イベントミーティング依頼または一般情報ページ
  * [プロセスと詳細を参照するハンドブックページ](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents)（YML）

### 一般的な Marketo ランディングページ作成手順

1. Marketo では、すでにキャンペーンタイプに合わせて[正しいテンプレートをクローン](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-1-clone-the-marketo-program-indicated-below)し、Marketo プログラム作成と SFDC キャンペーン同期作成の標準プロセスに従っているはずです。
1. 作成中のテンプレートに対して、Marketo プログラムで適切な Marketo トークン（Marketo program > `My Tokens`）を入力します
1. `Assets` フォルダで、`Landing Page` を左クリック > `Edit Draft`
1. ほとんどの場合、Marketo ランディングページのコピーには上記の `My Tokens` が含まれており、ランディングページへの編集は不要です。
1. 文字数制限を満たす承認済みのコピーを使用してランディングページを更新します。コピーが[コンバージョンのベストプラクティス](/handbook/marketing/demand-generation/campaigns/landing-pages/#landing-page-conversion-best-practices)を満たしていることを確認してください。
1. ランディングページが完成したら、`Preview` をクリックしてすべてのトークンが正しく適用され、ページが意図通り（コピー、デザインなど）に表示されることを確認します。`Preview Actions` > `Approve and Close` をクリックします。

   * 注: 望むテキストの代わりにトークンが表示される場合は、トラブルシューティングが必要かもしれません。ページ内のトークンコードが Marketo プログラムのトークン名と完全に一致していることを確認してください。

1. `Landing Page Actions` > `URL Tools` > `Edit URL setting` をクリックして URL を更新します。新しい URL は[ランディングページの命名規則](/handbook/marketing/demand-generation/campaigns/landing-pages/#landing-page-naming-convention)を反映する必要があります
1. `confirmation` や `sales alert` などの関連するメールを編集し、編集を承認します
1. フローのステップを確認し、関連するスマートキャンペーンをアクティベートします
1. [QA レビュー手順](/handbook/marketing/demand-generation/campaigns/landing-pages/#landing-page-qa-review-steps)を使用してランディングページをテストします
1. テストして必要な更新が行われたら、関連する Issue にコメントして、他の承認者にレビューと承認のアラートを行います
1. ページが公開されたら、ライブバージョンで最終 QA を行い、Marketo を介してすべてのフローが適切に機能していることをテストします
1. ランディングページの URL を `landingpageURL` トークンに入力します。メールで使用するためにトークン内の `page.gitlab.com` の前の `https://` を削除する必要があります。これは Marketo トラッキングに問題を引き起こすためです。私たちのメールテンプレートは `https://` をハードコーディングするようにコーディングされているので、トークンを正しく使用すれば問題は発生しません。
1. メールや utm 値を伴う他の用途で URL を使用する場合、Marketo ページ URL（page.gitlab.com で始まる）はページ URL の末尾の `?` の前に `/` を持つべきではありません。これによりページがリダイレクトされる可能性があります。（正しい例: https://page.gitlab.com/webcast-example?{{my.utm}}）。about.gitlab.com ページは `/` を使用すべき点にご注意ください。

**特定のランディングページの手順**

* イベントランディングページ（events yml）- [イベントハンドブックページを参照](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents)（現状）
* ゲート付きコンテンツのランディングページ - [ゲート付きコンテンツハンドブックページを参照](/handbook/marketing/demand-generation/campaigns/content-in-campaigns/)
* ウェブキャストランディングページ - [ウェブキャストハンドブックページを参照](/handbook/marketing/virtual-events/webcasts/)

## ランディングページの命名規則

Marketo ランディングページは、以下の命名規則を使用するべきです:

* `**type-monthdd-shortcampaignname-region**`（グローバルの場合は region なし）
* 共同パートナーイベントの場合、ショートネームに `partner` を含めます
* ランディングページがゲート付きコンテンツまたはエバーグリーンアセット（1 年以上オンデマンドで提供されるウェブキャストなど）の場合、日付は省略します。[Content URL Builder](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit?gid=1807603787#gid=1807603787) を活用してください。

「type」は以下の表に概説されています。タイプがリストにない場合は、`program-` を使用してください。

ショートネームは説明的にし、ユーザーがページにランディングしたときに何に登録しているのかが明確であるべきです。「emeawebcast」のようなショートネームは受け入れられず、代わりにウェブキャストのトピックを参照するべきです。例: webcast-march15-techdemo-cioverview、event-march19-connect-day-paris-emea、ebook-may23-connect-melbourne-apac

これにより、レポーティングや ABM ツールなどのシステムでのページ名が標準化されます。この命名規則に関連する詳細は、[この Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/7974) で確認できます。

| Type | URL Path: `https://page.gitlab.com/[first word below]` |
| ------ | ------ |
| ウェブキャスト | /webcast-    |
| ワークショップ | /workshop-  |
| 自社主催の対面イベント | /event- |
| 自社主催のバーチャルイベント（ワインテイスティング、料理など、ウェブキャストに該当しないもの） | /event- |
| ゲート付きコンテンツ - ebook | /ebook_ |
| ゲート付きコンテンツ - デモ | /demo_ |
| ゲート付きコンテンツ - 動画 | /video- |
| ゲート付きコンテンツ - その他すべて | /resources_ |
| ミーティング依頼 | /event- |
| エグゼクティブラウンドテーブル | /event- |
| アンケート | /survey_ |
| 興味フォーム | /interest- |
|お問い合わせフォーム（例: ローカライズ版） | /contact- |
| ダイレクトメール | /direct- |
|キャッチオール（上記のいずれにも該当しないもの） | /program- |

## about.gitlab キャンペーンランディングページの QA プロセス

* ランディングページのパイプラインがパスしたら、レビューアプリをクリックして新しいランディングページに移動します
* 文法、スペル、デザイン要素を確認します
* （個人のメールアドレスを使用して）フォームに記入し、結果として表示される成功メッセージとフローが行われることをテストします:
  * ウェブキャストの場合、成功メッセージが正しく表示されることを確認します
  * Pathfactory エクスペリエンスの場合、リンクに Pathfactory が個人を既知のリードとして認識し、アクティビティをリード／コンタクトレコードに追跡するために必要な正しいコード（`&lb_email=<email-of-user>`）が含まれていることを確認します。
* 確認メールを受信したことを確認し、Marketo プログラムの `Add to Campaign` スマートキャンペーンを確認することですべてのフローを実行します（注: `@gitlab.com` メールアドレスを使用している場合、従業員のフォーム入力でプログラムの合計を膨らませないようにするためにフローから削除されます）
* メールや utm 値を伴う他の用途で URL を使用する場合、about.gitlab.com ページ URL（about.gitlab.com で始まる）はページ URL の末尾の `?` の前に `/` を持つ必要があります。`/` を省略すると、ページにフォームが表示されない可能性があります。（正しい例: `https://about.gitlab.com/webcast-example/?{{my.utm}}`）。Marketo ページは `/` を使用すべきではない点にご注意ください。

## ランディングページの QA レビュー手順

* テストするページに移動します:
  * Marketo ランディングページの場合、シークレットウィンドウを開いてテストするページの URL に移動します
  * MR 内のランディングページの場合、パイプラインが承認されたら、レビューアプリに移動してテストするページに移動します
* スペルと文法のエラーを確認します（注: これらは理想的にはランディングページ作成前のコピーレビューで捕捉されるべきです）
* [コンバージョンのベストプラクティス](/handbook/marketing/demand-generation/campaigns/landing-pages/#landing-page-conversion-best-practices)が満たされていることを確認します
* フォームに記入し、Marketo の全フローステップが適切にトリガーされることを確認します（例: 確認メールの受信、興味のあるモーメントの適用、プログラムメンバーシップの更新、該当する場合はアラートの送信など）
* フォーム送信後に正しい場所に到着していることを確認します（例: 正しいフォーム成功メッセージまたは結果のサンキューページ）

## レポーティング: なぜ URL 構造が重要なのか

### 自動化されたコンテンツレポーティング

Tableau の [コンテンツパフォーマンスダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/ContentPerformance/GatedContent) は、Google Analytics、Marketo Measure (Bizible)、Salesforce など複数のソースからのウェブとパイプラインの指標についてレポートします。1 つのコンテンツには、Marketo フォームページや複数の PathFactory トラックなど、複数の関連するウェブページと Salesforce キャンペーンがある場合があります。一貫した URL 構造により、ダッシュボードは page.gitlab.com、about.gitlab.com、learn.gitlab.com、およびコンテンツシンジケーション全体のページを自動的にマッピングできます。このプロセスにより、ダッシュボードはコンテンツ名とタイプの変数を正確に表示できます。ページとコンテンツが Tableau レポートで自動的に取得されることを確実にするため、[Content URL Builder](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit?gid=1807603787#gid=1807603787) を使用してください。

### 手動プロセス

URL が現行の構造に従っていないレガシーコンテンツの場合、マーケティングアナリティクスチームは [content_keystone.yaml](https://gitlab.com/gitlab-data/analytics/-/blob/master/extract/gitlab_data_yaml/content_keystone.yaml) ファイルを使用してコンテンツ、ウェブ、キャンペーンの変数を手動でマッピングしています。
