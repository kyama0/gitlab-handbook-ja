---
title: "プロダクト＆ソリューションマーケティングのメトリクス"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/metrics/
upstream_sha: 214b98c98d2eb739dbe3a358027667a7f128ec69
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

## 北極星指標（北極星指標に関する CEO の依頼）

すべてのマーケティング機能は、GitLab のビジネス成長を支援するために、長期的に改善することを目指す少なくとも 1 つの北極星指標を持つべきです。
以下は、Product and Solution Marketing 内の各マーケティング機能別の指標一覧です。

| Team | Primary Metric | Secondary Metric | Eventual Metric Goal |
| ---- | -------------- | ---------------- | -------------------- |
| PMM | Views | Content Created (pages, docs, talks, blogs, etc) | IACV Attribution |
| TMM | Views | Content Created (demos, videos, etc) | IACV Attribution |
| AR | Views | Analyst Coverage (reports, mentions, MQs, Waves, etc.) | IACV Attribution |
| Cust Ref | Views | Content Created (Case Studies, Quotes, References, etc) | IACV Attribution |
| Comp Intel | Views | Content Created (Comparison Pages, etc) | IACV Attribution |

## 用語の定義

- **Impressions（インプレッション）**: コンテンツを閲覧した人数の合計カウント。
  - ウェブページの場合は、ページビュー。（ソース: Google アナリティクス?）
  - ダウンロード可能なアセットの場合は、ダウンロード数。（ソース: ??）
  - YouTube ビデオは、視聴数。（ソース: YouTube?...）
  - ウェビナー、ワークショップなど（ライブビュー）。（ソース）（注: ウェビナーは YouTube ビデオとなり「視聴数」を蓄積します）。
  - 私たちが講演する対面イベントの場合は、観客数。
- **Content Created（作成コンテンツ）:** 新規に作成された、または大幅に改善・更新されたコンテンツの合計カウント。（ソース: SM Inventory）
- **IACV Attribution:** - パイプラインへの私たちの貢献（ソース: Sisense - attribution dashboard）??  注: キャンペーンには Product and Solution Marketing フィールドが含まれており、私たちのキャンペーンへの貢献を文書化するために使用すべきです。
- **SFDC の SM フィールド:** - キャンペーンへの私たちの「アクティブな貢献」を測定するために、SFDC キャンペーンに新しいフィールドが作成されました。 私たちの貢献を判断するために以下のルーブリックを使用します:
  - **None または Blank**: アクティブな貢献なし
  - **Low**: コンテンツのレビュー、メッセージングの検証
  - **Medium**: コンテンツの修正および／または既存コンテンツのカスタマイズ
  - **High**: 完全に新しいコンテンツの開発および／または（新規または既存の）コンテンツの提供

## Product and Solution Marketing（Ashish）が考える、検討すべきメトリクス

ナラティブを構築するためには、以下のような複数のレンズのメトリクスが必要です:

1. 私たちは何を生み出しているか？
    - 例: 5 つの WP、16 個のデモ、2 つの顧客ケーススタディ
    - 適切なカテゴリー（Outbound、Campaign、Internal）に割り当てる
    - 作成コンテンツ vs キュレーションコンテンツ
1. それはどこに表示されるか？
    - コンテンツを活性化する様々な方法は何か？
    - 活性化方法のリストの例: ウェブサイト、SFDC、メールキャンペーン、イベントブース、キャンペーンデザイン、カンファレンス、イネーブルメントセッション
1. 何人の人がそれを見る（閲覧する）か？ 頻度
    - 例: 四半期あたり 3000 人のウェブサイト訪問者、月あたり 45 人のセールス担当者、四半期の 12 イベントでデモ x の 25,000 人の見込み客、ハンドブックビュー、何人のセールス／チャネルがイネーブルメントを受けたか？
    - なぜ: 特定のアセットのある時間枠における全体的なアクティビティを示します。 タイトル、説明、ランディングページ、アセットに関連するキャンペーンの効果を示す指標です。 内部コンテンツの品質や効果については何も教えてくれません。 何を教えてくれるか: 特定のアセットがアクティブかどうかの度合い。
1. コンテンツに何が起こるか？
    - プログラムにおけるコンテンツの線形アトリビューション？
    - 何件がコンバージョンしたか？
    - そのアセットは何件の MQL を作成したか？
        - なぜ - なぜ: アセットが MQL にどう貢献しているかを示します。 これは、リードのマーケティング適格性全体に対して、特定のアセットが貢献している頻度を示します。 MQL が私たちに教えてくれるもの: この指標はおそらく Asset Views よりも多くの洞察を提供しません。 MQL は、特定のリード／コンタクトが MQL 閾値に達するためのアクティビティの累積セットに過ぎません。 MQL は、Views の洗練された見方に過ぎないかもしれません。
    - そのアセットは何件の SAO を作成したか？
    - そのアセットは何件の機会の作成に貢献したか？
    - そのアセットはいくらの $（ARR）の作成に貢献したか？
        - なぜ: 特定のアセットが収益を支援したことを示します。 エンドユーザーがアセットを消費し、その後購買プロセスを継続したため、アセットコンテンツの品質について何かを推測できる可能性がありますが、他のデータポイントの分析が必要です。 何を教えてくれるか: これは、収益生成と最も結びついているアセットを理解するのに役立ち、したがって促進・再利用すべきです。

課題: なぜ測定するのか？ 学んだことに基づく次のステップ／アクションは何か？

その他の考慮事項:

- プログラム予算支出分析

## CMO（Todd）の測定方法に関する課題

- 出力メトリクスのビュー:
    1. 閲覧／読み取り - Google アナリティクスダッシュボードは目標を設定できるので素晴らしい。 推奨される修正:
        - YouTube とブログコンテンツにタグを付けてフィルタリングできるようにする
        - ユースケースページを公開ウェブサイトページに変更する
    1. プログラムとキャンペーンにおけるコンテンツの線形アトリビューション
    1. 他のチームに対する Product and Solution Marketing の価値
        - セールスへの影響（サーベイ?）
        - その他のマーケティング（サーベイ?）
- 検討すべきその他のメトリクス:
  - ウェブサイトファースト（MR?）
  - 閲覧などに関するメトリクス
  - スタンドアップごとに BOM の色／リンクを更新するかも

## Asset Inventory

Product and Solution Marketing は、何を作成し公開するかについてのインベントリを管理しています。 このインベントリは Learn@GitLab プロジェクトの一部として始まりましたが、他のグループにも拡張されています。 インベントリが完全であればあるほど、それらを使用する際に会社としてより効率的になれるからです。 目標は、このインベントリを利用可能なアセットの SSoT として、SM の内外の他のグループも追加・消費することです。

- [Product and Solution Marketing Content Inventory Issue](https://gitlab.com/gitlab-com/marketing/strategic-marketing/product-marketing/-/issues/3353)
- [MVC1 on Google Sheets](https://docs.google.com/spreadsheets/d/1W5oAlbPV610-ylM7LWv_zc6bEqQK9dI0H9Hrn2f6Jwc/edit#gid=0)
- [Google DataStudio Dashboard](https://datastudio.google.com/u/0/reporting/bb7a37e5-d63e-421a-9b3b-8d1ec80f72dd/page/OjYYB?s=jsv8OeXU4KI)
- YAML ベースのインベントリモデル（MVC） - 追加／変更を行う詳細は [asset_inventory page](../asset_inventory/) で説明されています。 ご自身のチームインベントリファイルを追加する場合は、そのページの情報に従ってください。

## Web Traffic 分析

- [Website and handbook pages](https://datastudio.google.com/u/0/reporting/1jhpxOcfWp9B44smdc6Uv-tGMNyWoludX/page/JKsTB)
- [YouTube Metrics](https://studio.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5AC)
- 学習リンク:
  - [Shane Rice - YouTube video on how to build such a dashboard](https://youtu.be/tNOD5qrH6Ao)
  - [Google Analytics for Beginners](https://analytics.google.com/analytics/academy/course/6)

## マーケティングアトリビューションモデル

- [Marketing attribution](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDCampaigns-L2RInteractions/CampaignDrillDown?:iid=1)
- 学習: [Marketing attribution - quick overview](https://experienceleague.adobe.com/en/docs/marketo-measure/using/introduction-to-marketo-measure/overview-resources/marketo-measure-attribution-models)

## 顧客リファレンス分析

現在の指標 - 月ごとに公開されるケース数 - 現在の目標 - 2 件／月

- 指標は最も効率的とは言えず、顧客リファレンスチームのコントロール下にもない
  - ケーススタディの公開数は常にコントロール下にない - 例えば、いくつかの「完了した」ケーススタディがパイプラインで詰まっている理由は、PR 目的で公開前段階で保留されている（例: EMEA）、まだ顧客の法務またはマーケティング部門の承認待ち、など
  - ビジネスへの真の価値を反映しない。 例:
    - リファレンスは重要な AR レポートで結果を得るのに役立つ - Gartner MQ または Forrester Wave
    - リファレンスは機会のクローズに貢献する（セールスリファレンス）
    - リファレンスはパイプライン生成に貢献する（例: ウェビナーやカンファレンスの顧客講演者）

顧客リファレンスアクティビティの価値とビジネスに提供される価値を測定する追加のメトリクスが必要です。

- 検討すべきアイデア:
    1. プログラムに含まれるチャンピオン／ロゴの全体的成長数
    1. リファレンスリクエスト数
    1. パイプラインで影響を受けた収益
    1. 影響を受けた Closed Won 収益

検討すべきメトリクスのその他のソース:

- [Customer Reference Edge Program](https://gitlab.my.salesforce.com/01Z4M000000slL1)
- [Monthly Marketing Key Metrics Slides](https://docs.google.com/presentation/d/1BGcMMqNfayuGsJVjqFCOXPrt5VK8S-KwHQiGr3d5KII/edit)
- [Case Studies Tracking Board](https://gitlab.com/gitlab-com/marketing/strategic-marketing/customer-reference-content/case-study-content/-/boards/1804878?scope=all&utf8=%E2%9C%93&state=opened)

## 競合インテリジェンス分析

- 検討すべきアイデア:
    1. DevOps Landscape comparisons page の利用状況を追跡する
        - ページ訪問数
        - セッション数
        - 新規訪問者
        - リピート訪問者
        - 平均ページ滞在時間
        - 直帰率
        - クリックスルー率
        - コンバージョン率
    1. 競合リソースページの利用状況を追跡する
        - アクセスする人数
        - 入力／コメント数
        - インバウンドリクエスト数
        - 競合インテリジェンス資料のセールスへのアトリビューション
    1. 競合リソースのセールスクローズへの影響 - ディールサポートと ROI 分析
        - 対応された特定のディールに関する問い合わせ数
        - 特定のディールに関する問い合わせの機会価値
        - ROI 分析の数
        - 実施された ROI 分析の機会価値
        - ROI 分析を含む獲得ディールの機会価値
    1. アウトバウンド（ブログ、ビデオ）:
        - 訪問数（直帰率、ページ滞在時間）
        - エンゲージメント（低閾値の CTA がクリックされた数）
        - リード（登録／サインアップをクリックした数）
    1. キャンペーン（ゲートアセット）
        - 訪問数（ランディングページ） - （これも有効な指標ですよね、はい）
        - リード
    1. 内部（セールスオペレーションに関連）
        - 影響を受けた機会（デッキ、登壇、ROI、顧客リファレンスなど）
        - 内部視聴／ダウンロード（イネーブルメント）

## アナリストリファレンス分析

今日何を測定しているか？

- [Baseline survey data at FY2021 SKO on sales usage of analyst assets](https://docs.google.com/forms/d/10A8ConBSuaxj7D-91jV0PNFMKIIWzu3eq9w1TtFY9co/edit#responses)
- Gartner reprint [info](https://drive.google.com/file/d/1LVaBSFwOwHZ9KJ05TyzB3NHG_Ct0Q68x/view?usp=sharing) スライド、[historical](https://drive.google.com/file/d/14DkA5Ab8E6ZpGgeK6YeMU2FVAzMiljc6/view?usp=sharing)（views など）
Forrester reprint info（views、d/l、dwell）
- [Customer Reference metrics](https://docs.google.com/presentation/d/1ajOzG91G3hxlqWo8uOuVUR8wrslTRVA8-0lFzjYXhZ0/edit?usp=sharing) - スライド 2 は現在のメトリクスの例です（プールと属性、リクエストと属性、いくらかの収益アトリビューション／インパクトの測定開始など）
- 検討すべきアイデア:
  - アナリストニュースレターメトリクス
  - リードしたブリーフィングと問い合わせの数
  - カバレッジヒートマップ - 全体
  - カバレッジヒートマップ - 経時変化
  - アナリストリレーションのウェブトラフィック
  - セールスへの影響（パイプライン、コンバージョン、勝敗）- SFDC タッチポイント
  - TEI メトリクス
  - 満足度 - 定期的な内部および外部のサーベイ／測定指標

## 検討すべき例

- ChangeLog
- サーベイ（セールスチーム）
- 管理されている Issue の分析 - オープン／クローズ、内部 vs 外部
- Pathfactory
- SM Issues 分析
- SM 予算支出分析

## 役立つリンク

- [Marketing KPIs](/handbook/company/kpis/#marketing-kpis)
- Slack チャンネル - #keymonthlymarketingmetric
- [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
  - [Pathfactory](/handbook/marketing/marketing-operations/pathfactory/)
