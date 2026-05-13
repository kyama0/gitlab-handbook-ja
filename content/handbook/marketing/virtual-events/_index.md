---
title: バーチャルイベント
description: ウェブキャスト、バーチャルワークショップ、外部バーチャルイベントなど、GitLab におけるバーチャルイベントの概要。
twitter_image: '/images/tweets/handbook-marketing.png'
twitter_site: "@gitlab"
twitter_creator: "@gitlab"
upstream_path: /handbook/marketing/virtual-events/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## 概要 {#overview}

GitLab では、誰もが貢献できると信じています。インターネット接続とデバイスさえあれば、ほぼ誰でもスピーカーや参加者としてバーチャルイベントに参加できるため、バーチャルイベントはそのミッションを実現する上で重要な要素です。この領域における私たちの専門性はまだ発展途上ですが、本ページでは GitLab のバーチャルイベントについて研究し確立したベストプラクティスを文書化しています。

## カレンダー {#calendar}

**今後のマーケティング活動をすべて確認するには、[All-Marketing SSoT Calendar](https://docs.google.com/spreadsheets/d/1c2V3Aj1l_UT5hEb54nczzinGUxtxswZBhZV8r9eErqM/edit#gid=571560493) を参照してください**

<figure>
<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23B39DDB&amp;ctz=America%2FLos_Angeles&amp;src=Z2l0bGFiLmNvbV9uMnNibXZmMjlqczBzM3BiM2ozaHRwa3FmZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Z2l0bGFiLmNvbV8xcXZlNmc4MWRwOTFyOWhldnRrZmQ5cjA5OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Z2l0bGFiLmNvbV8xOGVqOHN0NmlxajZpYXB1NTNrajUzNHBsa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%239E69AF&amp;color=%23009688&amp;title=All%20GitLab%20Virtual%20Events&amp;showCalendars=1" style="border:solid 1px #777" width="1000" height="600" frameborder="0" scrolling="no"></iframe>
</figure>

GitLab では、種類とプラットフォームの異なるバーチャルイベントを管理するために 3 つの Google カレンダーを用意しています。

* [GitLab-Hosted On24 Webcasts/Workshops](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV8xcXZlNmc4MWRwOTFyOWhldnRrZmQ5cjA5OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)
* [GitLab-Hosted Zoom Webcasts/Workshops](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV8xcXZlNmc4MWRwOTFyOWhldnRrZmQ5cjA5OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)
* [External/Sponsored Virtual Events](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV8xOGVqOHN0NmlxajZpYXB1NTNrajUzNHBsa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

これら 3 つのカレンダーは、単一の GitLab バーチャルイベントカレンダービュー（上記 - プレゼンター用のセキュアログインが含まれるためカレンダー自体は公開されません）に統合されています。**統合ビューの目的は、イベント主催者が同時期に開催される他の GitLab バーチャルイベントとのトピック重複を最小化するのを助け、GitLab が運営・参加するすべてのバーチャルイベントへのエグゼクティブの可視性を提供することです。**

### カレンダーイベント命名規則の用語集 {#calendar-glossary}

* `[Hold WC Hosted] Webcast title` - 計画中の GitLab 主催ウェブキャスト
* `[WC Hosted] Webcast title` - 確定した GitLab 主催ウェブキャスト
* `[DR WC Hosted] Webcast title` - GitLab 主催ウェブキャストのドライラン
* `[Hold WC sponsored] Webcast title` - 計画中のスポンサードウェブキャスト
* `[WC sponsored] Webcast title` - 確定したスポンサードウェブキャスト
* `[Hold VC sponsored] Conference title` - 計画中のスポンサードバーチャルカンファレンス
* `[VC sponsored] Conference title` - 確定したスポンサードバーチャルカンファレンス

## 外部バーチャルイベントのカレンダー追加 {#calendar-external-virtual-events}

[外部バーチャルイベント](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV8xOGVqOHN0NmlxajZpYXB1NTNrajUzNHBsa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t) のカレンダーは、計画済みおよびスケジュール済みのスポンサードウェブキャストとバーチャルカンファレンスすべてを記録するために使用します。**このカレンダーの目的は、可視性を提供し、スポンサーチームが同時期に開催される他の GitLab バーチャルイベントとのトピック重複を最小化するのを助け、GitLab の外部バーチャルイベントすべてへのエグゼクティブの可視性を提供することです。**

**外部バーチャルイベントカレンダーへの追加 DRI: スポンサーオーナー**

### 計画中の外部バーチャルイベント {#calendar-planned-external-virtual-event}

スポンサードバーチャルイベントのエピックを作成したらすぐに、スポンサードバーチャルイベントの開催日にカレンダーイベントを作成して、外部バーチャルイベントカレンダーにイベントを追加してください。カレンダーの説明にエピックへのリンクも必ず含めてください。

* スポンサードウェブキャストの場合は、命名規則 `[Hold WC sponsored] Event title` を使用してください（例: `[Hold WC sponsored] Securing your pipeline with GitLab and WhiteSource`）。
* スポンサードバーチャルカンファレンスの場合は、命名規則 `[Hold VC sponsored] Event title` を使用してください（例: `[Hold VC sponsored] Predict 2021`）。
* エグゼクティブラウンドテーブルの場合は、命名規則 `[Hold ER sponsored] Event title` を使用してください（例: `[Hold ER sponsored] DevOps 101`）。
* ベンダーアレンジドミーティングの場合は、命名規則 `[Hold VA sponsored] Vendor Name Region` を使用してください（例: `[Hold VA sponsored] Captive Eight APAC`）。

### 確定した外部バーチャルイベント {#calendar-confirmed-external-virtual-event}

スポンサーシップが確定したら、カレンダーイベントにアクセスしてイベントタイトルから `Hold` を削除してください。**注:** 効率性の観点から、また複数のカレンダー招待を作成しないようにするため、エピックまたは Issue、マーケティング DRI、GitLab スピーカーや参加者（SAE、SA など）、その他カレンダー招待に含めることが有益なチームメンバーを含めてください。この招待はイベントに参加するチームメンバーのための予定確保となります。サードパーティスポンサーが追加のイベント詳細を別途送付します。

* スポンサードウェブキャストの場合は、イベントタイトルを `[WC sponsored] Event title` に変更してください（例: `[WC sponsored] Securing your pipeline with GitLab and WhiteSource`）。
* スポンサードバーチャルカンファレンスの場合は、イベントタイトルを `[VC sponsored] Event title` に変更してください（例: `[VC sponsored] Predict 2021`）。
* エグゼクティブラウンドテーブルの場合は、イベントタイトルを `[ER sponsored] Event title` に変更してください（例: `[ER sponsored] DevOps 101`）。
* スポンサードバーチャルカンファレンスの場合は、イベントタイトルを `[ER sponsored] Vendor Name Region` に変更してください（例: `[ER sponsored] Captive Eight APAC`）。

## 外部バーチャルイベントのリスケジュール

最新のリスケジュール手順については、[このハンドブックページ](/handbook/marketing/field-marketing/#rescheduling-or-canceling-events) を参照してください。

## 外部バーチャルイベントのキャンセル

最新のリスケジュール手順については、[このハンドブックページ](/handbook/marketing/field-marketing/#rescheduling-or-canceling-events) を参照してください。

## バーチャルイベントの意思決定ツリー {#decision-tree}

どのタイプの GitLab 主催バーチャルイベントが最適かを判断するために、[FigJam 上の意思決定ツリー](https://www.figma.com/file/Imb5xNnRryAPs59A79fseu/Virtual-Events-Decision-Tree_2023-09-14_18-05-13?type=whiteboard&node-id=0%3A331&t=jxFHr7UTeRBDPXq7-1) を用意しています。

## バーチャルイベントの種類 {#types}

### ウェブキャスト {#webcast}

これは `Webcast` タイプの設定を持つ GitLab 主催のバーチャルイベントで、Marketo 同期を有効化するため **登録が必要** です。ウェブキャストには 2 つの技術プラットフォームが使用されます（オーディエンス/ゴールに基づく）。

* On24（Campaigns Team）: 目標は新規顧客獲得で、ターゲットアカウントとより広範な見込み顧客データベースで MQL を促進するキャンペーンモーションに整合しています。On24 での登録が必要です。
* Zoom（Field Marketing）: 目標は MQL から SAO、および/または SAO から Closed Won への変換/速度を向上させることで、キャンペーンモーションに整合しています。1000 人の参加者で登録上限あり、Marketo ランディングページでの登録が必要です。
* かつてセルフサービスイベントというバーチャルイベントタイプがありました。このタイプは非推奨となりましたが、Marketing Campaigns または Field Marketing と連携することでウェブキャストとして実行できます。

[ウェブキャストハンドブック](/handbook/marketing/virtual-events/webcasts/)

#### ウェブキャストのサブカテゴリ - バーチャルハンズオンワークショップ {#workshops}

Field Marketing はハンズオンワークショップをバーチャルで運営しています。これらのワークショップに広告費を投じるかどうかにかかわらず、マーケターはウェブキャストイベントタイプを使用する必要があります。さらに留意すべきポイント:

* GitLab デモ環境は 250 人を超えるとサポートできないため、登録上限を 400 ～ 500 人以内に設定する必要があります。セルフサービスオプションでは登録上限を設定できません。承認制にすることはできますが、Zoom では拒否メールのカスタマイズができません（また、そもそも拒否メールが送信されるかも不明確です）。
* これらのワークショップに Zoom ウェブキャストを使用することで、より大きなオーディエンスからの Q&A を簡単に追跡・管理できます。セルフサービス Zoom 提供のチャット機能では、チャットが長くなり混乱しやすくなります。
* セルフサービス運用のイベントよりも、ウェブキャスト運用のイベントの方がよりプロフェッショナルな見た目と雰囲気になります。

バーチャルワークショップの詳細については、[Field Marketing ページ](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#virtual-workshops) を参照してください。

### バーチャルカンファレンス {#virtual-conference}

これらの大規模イベントの企画には、Corporate Marketing Events チームと連携してください。[バーチャルカンファレンスハンドブック](/handbook/marketing/virtual-events/external-virtual-events/#virtual-conference) このイベントタイプは、Zoom が対応できる以上の追跡可能な参加者数が必要な場合、および/または複数の同時進行トラックが必要な場合にのみ意図されています。また、パートナーエキスポホールも可能になります。私たちが導入しているツールにより、Zoom コール間を切り替えるよりも、エンドユーザーにとってクリーンな体験が可能になります。基調講演ステージ、トラック、エキスポホール、ネットワーキングオプションを備え、より物理的なイベント体験に近い形になっています。

### 外部バーチャルイベント {#external}

注: これらのイベントは GitLab 主催イベントではないため、上記の意思決定ツリーには含まれていません。[外部バーチャルイベントハンドブック](/handbook/marketing/virtual-events/external-virtual-events/)

* **スポンサードデマンドジェネレーションウェブキャスト:** 外部パートナー/ベンダープラットフォーム（例: DevOps.com）で開催されるウェブキャストです。パートナー/ベンダーが登録の促進、モデレーション、自身のプラットフォームでのウェブキャストのホストを担当します。Mktg-Ops がリストをデータベースにアップロードする責任を持ち、MPM がイベント後のフォローアップメール送信を担当します。*[Marketo プログラムテンプレートへのリンク。](https://app-ab13.marketo.com/#PG5523A1)*
* **スポンサードバーチャルカンファレンス:** これはウェブキャストではなく、スポンサーシップ料金を支払ってバーチャルブースと、時にはスピーキングセッションスロットを得るバーチャルカンファレンスです。Campaigns Team が主にイベント後のフォローアップメール送信を担当します。*[Marketo プログラムテンプレートへのリンク。](https://app-ab13.marketo.com/#ME5121A1)*

### GitLab 主催バーチャルイベントの種類別詳細 {#detail-by-type}

|                           |  ウェブキャスト | バーチャルカンファレンス  |
|---------------------------|------------------|----------|
| 参加者数             | 201-1000 | 500+ |
| SLA                       |  45 営業日   |45 営業日+  |
| タイプ                      |  ウェブキャスト |カンファレンス  |
| トラッキング                  | あり     | あり  |
| LP/登録           |  あり     | あり  |
| マーケ<br>プロモーション         |  あり     | あり  |
| マーケ<br>モデレート          | あり     | あり |
| マーケ <br>フォローアップ         |  あり     | あり  |
| ブレイクアウト<br>ルーム         | なし      | あり  |
| 投票/Q&A                 | あり/あり | あり |
| 確認/<br>リマインダー  | あり/あり | あり  |

**FAQ ＆ 注意事項:**

* ブレイクアウトルームは参加者が選択することはできません。ホストのみが参加者をルームに追加できます。各ブレイクアウトルーム内では、ホストから許可を与えられた共同ホストが録画できます。

## ライブ配信方法 {#going-live}

### ウェブキャスト {#go-live-webcast}

現在、Zoom で `Webcast` タイプ設定の GitLab 主催バーチャルイベントを運営できるのは Campaigns Team のみです。この設定には特別な Zoom ライセンスと Marketo との統合が必要だからです。ウェブキャストリクエストを開始するには、[ウェブキャストページ](/handbook/marketing/virtual-events/webcasts/) にアクセスし、指示に従ってください。

## バーチャルイベントのプロモーション方法 {#promotion}

### ウェブキャスト {#promotion-webcast}

以下はウェブキャストのプロモーション計画の概要です。MPM はウェブキャストプロジェクト管理プロセスの一環として、すべてのプロモーションリクエスト Issue の作成を担当します。リクエスト元は [バーチャルイベントリクエスト Issue](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/blob/master/.gitlab/issue_templates/MPM_VirtualEvent_Request.md) から開始し、MPM が必要なエピックと関連 Issue を作成します。

* **ブログマーチャンダイジング:** ライブイベントの 30 日前に 1 投稿、DRI = Content チーム
* **オーガニックソーシャル:** ライブイベントの 14 ～ 7 日前に 1 ～ 2 投稿、DRI = Social チーム（シェア用画像が必要）
* **有料広告:** 該当なし、ライブイベントの 21 日前、DRI = DMP（GitLab 所有ページが必要 - about.gitlab または pages.gitlab）
* **ターゲットメール:** ライブイベントの 14 日前と 7 日前に 2 ～ 3 回送信、DRI = MPM（コピーはリクエスト元が提供）
* **ニュースレター:** ライブイベントの 15 日前から 1 日前に 1 投稿、DRI = MPM（英語版のみ対応）

## バーチャルイベントの運用 {#operations}

### Zoom の機能 {#zoom-capabilities}

イベントをスケジュールする際、使用したい機能に基づいて適切なイベントタイプを選択するためのガイドとしてこの表を使用できます。GitLab 主催のバーチャルイベントは、Zoom Webcast タイプまたは Zoom Meeting タイプのいずれかに該当する必要があります。

|                                       | Zoom Webcast                | Zoom Meeting                                  |
|---------------------------------------|-----------------------------|-----------------------------------------------|
| 画面共有                           | あり                         | あり                                           |
| ビデオ/音声共有                   | ホスト/パネリストのみ          | 全参加者                              |
| 参加者<br>リスト                   | ホスト/パネリスト<br>に表示 | 全参加者                              |
| 複数ホスト                        | あり                         | あり                                           |
| 参加者数の上限                        | 1,000                       | 200                                           |
| 登録<br>Zoom                  | あり<br>（オプション）           | あり<br>（オプション）                             |
| 登録<br>Marketo               | あり                         | なし                                            |
| Marketo<br>連携                | あり                         | なし                                            |
| 自動追跡<br>とリードフロー   | あり                         | なし                                            |
| 確認メール                    | あり <br>（Zoom から）         | あり<br>（Zoom から）                            |
| 自動リマインダー<br>メール送信           | あり<br>（Zoom から）          | なし*                                           |
| 練習セッション                      | あり                         | あり*<br>（待機室の<br>有効化が必要） |
| ブレイクアウトルーム /<br>最大参加者  | 0 / 0                       | 50 / 200                                      |
| 投票                                 | あり                         | あり                                           |
| Q&A                                   | あり                         | なし                                            |
| チャット                                  | あり                         | あり                                           |
| 手を挙げる                            | あり                         | なし                                            |
| ライブ配信                            | あり                         | あり                                           |

### 参加者エンゲージメント {#participant-engagement}

#### リソース {#zoom-resources}

* [ウェブキャストでの参加者の管理](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063276)
* [ミーティングでの参加者の管理](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065566)

#### チャット {#zoom-chat}

* [ミーティング内チャット](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064400) / [ミーティング内チャットの保存](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0067312)
* [ウェブキャストチャット](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0067761)

**チャットアナウンス**

チャットアナウンスにより、特定のユーザーが同じアカウントの全員に一方向のアナウンスを送信できます。アカウントオーナーと管理者は、アナウンスを送信できるユーザーを最大 50 人追加できます。

[チャットアナウンスの使用](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062229)

#### Q&A {#zoom-questions}

ウェブキャストの Q&A 機能により、参加者がウェブキャスト中に質問を投げかけ、パネリスト、共同ホスト、ホストがその質問に回答できます。公開 Q&A 機能を使うと、参加者は互いの質問に答えることができ、有効化されていれば、互いの質問に賛成投票を行うこともできます。

* [Q&A の使い方を始める](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064380)

#### 投票 {#zoom-polling}

ミーティングやバーチャルイベントで投票を有効にして参加者にアンケートを取ることができます。投票を有効にする方法は [前提条件](/handbook/marketing/virtual-events/self-service-virtual-events/#prerequisites) を参照してください。

投票の結果はダウンロードもできます - [レポート](/handbook/marketing/virtual-events/#reporting) を参照してください。

* [ウェブキャストの投票](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0066668)
* [ミーティングの投票](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0066150)

#### ネットワーキング {#zoom-networking}

現在、上記の参加機能以外に Zoom で利用可能なネットワーキング機能はありません。しかし、イベント終了後に会話を続けるための創造的な方法がいくつかあります。

* イベント用のカスタム Twitter ハッシュタグを作成し、参加者に会話への参加を呼びかける
* LinkedIn グループを作成し、イベント前に参加者を招待する
* セルフサービスイベントを実施する場合は、ブレイクアウトルームを使用して、より親密なディスカッションと 1:1 の機会を作る

### セキュリティ {#zoom-security}

バーチャルイベントを設定する際は、[前提条件](/handbook/marketing/virtual-events/self-service-virtual-events/#prerequisites) に従ってください。[前提条件](/handbook/marketing/virtual-events/self-service-virtual-events/#prerequisites) には、バーチャルイベントとアカウントの安全を確保するための手順が含まれています。

### GDPR とプライバシーコンプライアンス {#zoom-compliance}

マーケティングに関するすべての規制ポリシーへのコンプライアンスを維持するため、登録または参加者リストとイベント確認メールを扱う際は以下のガイドラインに従ってください。

* リスト用のシートにパスワード保護をかける（GitLab ID のみで使用、GitLab のみアクセス可）
* イベント後に Zoom 内の情報を削除する
* スプレッドシートのコピーは使用後に削除する
* 確認メールにオプトアウトリンクを追加する

Zoom 登録ランディングページを作成する際は、以下の文言を追加してください。

>このイベントに登録することで、GitLab がその製品、サービス、イベントについてメールを送信することに同意したものとみなされます。メール内の購読解除リンクまたは [コミュニケーション設定センター](https://about.gitlab.com/company/preference-center/) からいつでもオプトアウトできます。

セルフサービスパートナーバーチャルイベントを作成する場合は、Zoom 登録ランディングページを作成する際に以下の文言を追加し、`[partner name]` をパートナー名に置き換えてください。

>この GitLab と `[partner name]` のイベントに登録することで、GitLab と `[Partner name]` がその製品、サービス、イベントについてメールを送信することに同意したものとみなされます。メール内の購読解除または該当する会社の設定センターからいつでもオプトアウトできます。

### レポート {#reporting}

#### リソース {#reporting-resources}

* [レポートを始める](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060623)

Zoom からバーチャルイベント用にエクスポートできるレポートには 2 種類あります。

1. **Usage:** 指定した期間内のミーティング、参加者、ミーティング時間を確認
1. **Meeting:** ミーティングの登録レポートと投票レポートを確認

登録リストの場合:

1. `Reports` > `Meeting` に移動
1. レポートタイプを選択します。登録レポートの場合は `Registration Report` を選択します。バーチャルイベントやミーティングで投票を有効にしていた場合、`Poll Report` を選択して投票結果をダウンロードできます。
1. イベントの日付を選択します。最大レポート期間は 1 ヶ月です。
1. イベントの横のチェックボックスを選択し、`Generate` をクリックします。
1. ポップアップボックスが表示され、登録者のタイプ（すべて、承認済み、または拒否済み）を選択できます。`all` を選択し、`Continue` をクリックします。
1. 処理後、`Report Queue` にリダイレクトされ、結果を .csv ファイルとしてダウンロードできます。

参加者リストの場合:

1. `Reports` > `Usage` に移動
1. イベントの日付を選択し、`Search` をクリックします。最大レポート期間は 1 ヶ月です。レポートには、少なくとも 30 分前に終了したミーティングの情報が表示されます。
1. 画面右側の `Toggle columns` ドロップダウンから、結果に表示する可視列を切り替えられます（オプション）。
1. イベントが結果に表示されたら、右にスクロールして `Participants` 列を確認し、青色のハイパーリンクで表示された参加者数を確認します。リンクされた参加者数をクリックします。
1. `Meeting Participants` というポップアップボックスが表示されます。ここから、このリストをミーティングデータとともにエクスポートするかどうかをチェックボックスで選択できます。ミーティングデータには、ミーティング ID、所要時間（分）、参加者数、トピック、開始時間、終了時間、ユーザーメールが含まれます。
1. `Export` をクリックします。リストが .csv ファイルとしてエクスポートされます。

### リストアップロード {#list-uploads}

バーチャルイベントから **最低 20 件のリード** をアップロードする場合、マーケティングオペレーションを通じた [同じリストアップロードプロセス](/handbook/marketing/marketing-operations/list-import/) を利用できます。マーケティングオペレーションプロジェクトで [`event-clean-list-upload.md`](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/master/.gitlab/issue_templates/event-clean-upload-list.md) Issue テンプレートを使用して Issue を作成し、`@jburton` にアサインしてください。

### Zoom ランディングページ登録ソーストラッキング {#zoom-registration}

ウェブキャストの登録を Zoom ランディングページに誘導する場合、Zoom 登録ソーストラッキングは登録者がどこから来ているかを追跡するのに役立ちます。

[Zoom ランディングページでの登録ソーストラッキング](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065543) は、MPM が運用する `Webcast` タイプでのみ利用可能で、セルフサービスバーチャルイベントの `Meeting` タイプ設定では利用できません。

現在、MPM が about.gitlab ランディングページを作成しフォーム入力を Marketo 経由で Zoom と統合してウェブキャスト登録プロセスを管理しているため、ウェブキャスト登録に Zoom のランディングページは使用していません。Zoom 統合は UTM パラメータを使用して登録元のソースを追跡します。[UTM の使い方と使うタイミングに関する完全なドキュメント](/handbook/marketing/integrated-marketing/digital-strategy/digital-strategy-management/#utms-for-url-tagging-and-tracking) を参照してください。

### ライブ配信 {#live-streaming}

現在のセキュリティ上の懸念により、Zoom から YouTube へのライブ配信は [一時的に停止](https://gitlab.com/gitlab-com/gl-security/secops/operations/-/issues/871) されています。[クラウドに録画される](https://gitlab.com/gitlab-com/gl-security/secops/operations/-/issues/833) Zoom ミーティングに関するセキュリティ上の懸念もあります。バーチャルイベントを録画して後で YouTube にアップロードしたい場合は、ローカルマシンに録画し（クラウドではなく）、[digital production プロジェクト](https://gitlab.com/gitlab-com/marketing/growth-marketing/global-content/digital-production) で Issue を作成し、デジタルプロダクションチームに YouTube アップロード前の録画レビューを依頼してください。

## バーチャルイベントのベストプラクティス {#best-practices}

[GitLab Video Playbook](/handbook/communication/) も参照することをお勧めします。これは魅力的なビデオコンテンツを作成するためのガイダンスを提供しており、その多くはバーチャルイベントにも適用できます。

### イベントプランナーのベストプラクティス {#best-practices-event-planners}

* イベントの目標と、イベント/プレゼンテーションの構成に基づいて技術を選択する。
* ナラティブを考慮する - 関連性のないトークが並ぶよりも、1 日を通してストーリーを語ると、人々はより視聴したくなる。
* イベント前にすべてのプレゼンターに A/V のセットアップをテストしてもらう。
* ライブで発表するスピーカーに、イベント前に Wi-Fi 接続をテスト（必要に応じてトラブルシューティング）してもらうよう依頼する。ライブデモやコーディングでは特に重要。
* 時間があれば、すべてのスピーカーとスピーカーランスルーを行い、スライドのレビューやフィードバック、フローに関する質問への回答を行う。
* MC、モデレーター、スピーカーと最終チェックインミーティングを持つ。可能であれば、イベント前にモデレーターがビデオ通話でスピーカーと顔を合わせ、信頼関係を築く。
* モデレーターに詳細な指示を出す。特に対面とオンラインの両方のプレゼンターを調整する場合は重要。
* スピーカーに対しても同じことを行う。参加者とは異なるどのようなアクセス権を持っているか？
* 参加者にプラットフォームの使い方を簡単な動画で説明する。書面での説明も提供する。
* プレゼンターには少なくとも 20 分前にサインインしてオーディオとセットアップを再テストしてもらう。準備が整ったら、自由に時間を使ってもらい、開始 5 分前に再参加してもらうよう依頼する。これにより、必要に応じてトラブルシューティングする時間を確保できる。
* ビデオをよりアクセシブルにするためにライブキャプションを有効にする。
* 特定の人々以外が誤ってストリームを閉じないようにする。
* 技術的な問題があったり、現れなかったりするスピーカー、その他のトラブルに備えてバックアッププランを用意する。すべてのライブデモにバックアップを用意する。
* 可能であれば、1 日を通して参加者が再参加する必要がないようにする（つまり、1 つの長いハングアウト/Zoom）。再参加が必要だと離脱率が大幅に増加する。
* 休憩/移行スライドに、視聴者向けのヒントを入れる。視聴者を確保したのだから、最大限活用しよう！
* 視聴者のエンゲージメントを維持する:
  * 視聴者にアンケートを取る。
  * 景品やスワッグのチャンスを追加する - バックエンドでこれをどのように実行するかのプロセスを事前に構築すること。例えば、スワッグベンダーが無料で 25 アイテムを発送できる場合は、25 名の抽選を行うか、人々が自分の連絡先情報を入力できるスワッグプラットフォームを使用する。
  * 参加者向けに Slack チャンネルなどを作成して、コミュニティを形成し、そこで会話を続ける -- CTA を忘れずに！
  * 可能であれば、トーク後にコミュニティ/参加者がスピーカーと交流できるようにする。
* ディスカッションを続ける方法を見つける - カメラが止まってもイベントは終わってはいけない。CTA を決める。次のステップと、引き続きエンゲージメントと自己学習を続ける方法を知らせる。
* イベント後のコンテンツの使用と配布の計画を立てる。スライド/録画を受け取れるかどうか、また受け取れる場合はいつまでに受け取れるかを参加者に伝える。
  * GitLab 主催および外部イベントの両方で、スピーカーとコンテンツ DRI は、資料の提出期限の前に、公開資料に対する必要関係者からの法的承認のステップを組み込むこと。

### イベントプランナーのベストプラクティス（バーチャルスポンサードカンファレンス/イベント） {#best-practices-sponsored-events}

* 対面イベントとは異なり、バーチャルイベントには通常、ドリンクレセプション、食事、その他バーチャルブースに人を惹きつけるアクティビティはない。ゲーミフィケーションがあっても、誰かが実際にブースで会話するという保証はない。対面イベントと同じ種類のトラフィックは期待しないこと。
* トラフィックを促進するために、SDR その他のスタッフを配置し、ブースの外でもネットワーキングするようスケジュールを組む。ダイレクトメッセージ、セッション、その他イベントが提供するネットワーキング機能を通じて行うこと。SDR には戦略的にダイレクトメッセージを送るよう奨励し、カンファレンス全員に一斉送信するのは避けること。これはしばしば歓迎されないアウトリーチであり、無視される。
* AMER では、特に指定がない限り、ソリューションアーキテクトは地域のバーチャルスポンサードカンファレンスに参加しない。イベント中に技術的な質問が発生した場合は、`#cs-questions` Slack チャンネルに質問を投稿してください。SA マネージャーをイベント Issue に含めて、`#cs-questions` Slack チャンネルで事前通知を行い、SA チームがイベント発生と質問予測を把握できるようにする。
* スタッフはブースリードと接続したらすぐにアプローチし、イベント中のエンゲージメントと会話を促進する。イベント後のアポイント設定を目指す。
* GitLab に関連するセッション/トラックのリストを作成し、スタッフに参加を奨励する。
* 内部のイベント Slack チャンネルで増分更新を投稿するか、イベントの目標、最新情報、その日に予期されること（スピーキングスロットや他の関連セッションなど）について毎日同期する。
* イベントプランナーである場合、「GitLab Moderator」というイベントプロフィールを作成すると、自分自身に紐づけずにブランド認知を高めたり、イベントのより多くの側面を管理したりすることができる。また、人々がどこから始めればよいかわからない場合に、ブランドとの追加のインタラクションの機会も提供する。
* イベントが無料または安価な場合、採用について問い合わせる人が多くなる可能性が高い。これらの質問への返答スクリプトを用意しておくこと。

### スピーカーのベストプラクティス {#best-practices-speakers}

* 使用するアプリケーション（例: Zoom、WebEx）を含めて、事前にテクノロジーをテストする。
* ダイヤルインする必要がある場合に備えて、バックアップヘッドフォンと電話を用意する。
* ノートパソコンのマイクではなく、専用マイクを用意する。多くの Bluetooth マイクは遅延と品質の問題があるため、有線マイク（ヘッドフォンに接続できるもの）を推奨する。
* 可能であれば、質問対応をしてくれる人を確保する。
* 自分一人で話す場合は、ミーティングや講義のように感じないよう、トークを補完するスライドやビジュアルを用意する。
  * 可能な場合は事前にスライドを共有し、セッション開始時にも共有する。技術的な困難があった場合に、参加者がついていきやすくなる。
* カメラ映えする色を着る - [ドキュメントを参照](https://docs.google.com/document/d/1rPvewsTWm8uqGv-6Wr4-_j4ZmBVjL75fU5_YGV98d24/edit?ts=5e74125a)
* 背景を覚えておく: これは録画されオンラインで公開される。
  * [GitLab ブランドのバーチャル背景](https://about.gitlab.com/press/press-kit/) の使用を推奨する。
* スライド: 大きく明瞭なフォントを使う。視聴者がどのデバイスを使っているかわからない。
* あまり動き回らない。
* カメラを見る。
* 実際のカンファレンスにいるかのように服装する。
* 紹介する人がいる場合は、その人があなたの名前、肩書き、GitLab を正しく発音できるようにする。
* 録画のコピーを依頼し、該当するチャンネルに録画を投稿する。
* スピーキングセッションにチャット機能がある場合:
  * スピーキングスロット開始前に出席する指定スタッフを配置する。
  * GitLab の代表者として歓迎であり、質問にお答えできることをチャットに投稿してもらう。
  * プレゼンテーションで言及されているリンクやトピックを把握し、それらの UTM リンクを事前に用意して投稿できるようにする。さらに、会社のハンドブック、オールリモートガイド、無料トライアルへのリンクを手元に持っておくとよい。
  * スポンサードイベントでブースがある場合 - 最後に、参加者にまだ質問があればバーチャルブースに立ち寄るよう勧め、ブースへのリンクを提供する。

### 参加者: バーチャルイベントへの参加を最大限活用する方法 {#best-practices-attendees}

* ソーシャルでの共有を支援・促進する。
* イベント後にコンテンツにアクセスする方法を知らせる。
* イベントを実施するプラットフォームの使い方を教える。
* イベント内で表示される内容に応じて、イベントプロフィールの名前の末尾に「- GitLab」や「- あなたの肩書き」を追加する。これは、チャットルームや他のインタラクティブエリアで表示される場合に便利。イベントプラットフォームが絵文字を受け入れる場合（モバイルアプリがある場合に可能）、キツネ絵文字やあなたの個性を示す絵文字を自由に使ってよい。
* オプションがあればバーチャルプロフィールにプロフィール画像を追加する。これにより、より人間味のあるタッチが加わる。画像の使用に違和感がある場合は、代わりに会社のロゴの 1 つを使ってください。

### 参加者/スタッフのベストプラクティス（バーチャルスポンサードカンファレンス）{#best-practices-attendees-staff}

* バーチャルカンファレンスの最大の利点の 1 つは、会社や肩書きで参加者リストを検索できることが多いことです。営業はこれを、自分のアカウントから他の参加者を見つけて接続するための簡単な方法として特に活用するべきです。何千人もの参加者に汎用メッセージを送信しても良い印象を与えたり、意味のあるつながりを作ったりすることはないため、その連絡先に関連性のあるカスタムアウトリーチを使用するよう注意してください。
* 自分に関連性のあるトピックのセッション、チャットルーム、イベントプラットフォームが提供する他のエリアでのディスカッションに参加してください。これは、私たち自身のスピーキングスロット以外にもソートリーダーとして示し、イベント全体でつながりを得るのに役立ちます。
* バーチャルイベントへのコミットメントを対面イベントと同じように扱ってください。バーチャルイベントは、長時間のフライトを避けたり、常に静かな場所で電話を受けたりする柔軟性を提供しますが、対面イベントと同じようにイベントに取り組む時間を確保すべきです。本当にエンゲージし参加するために、イベント中はスケジュールの大部分をブロックしてください。

### パートナーのベストプラクティス {#best-practices-partners}

* バーチャルブースを管理するためのベストプラクティス - 投資から最大の効果を得て、最も親密なインタラクションを持ち、最高の参加者体験を提供するための提案。
  * 常にバーチャル提供、割引、または景品を用意する。
  * 可能であれば、1 人または複数の人がブースに常駐し、質問に答える。
  * 視聴用のビデオまたは消化しやすいスライドデッキを用意する。
