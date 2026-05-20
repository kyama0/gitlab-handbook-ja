---
title: "High Velocity Sales and First Orders - フィードバック収集とベストプラクティス"
description: "HVSが製品、システム、ケースオペレーションのフィードバックをどのように収集し、フィードバックをどう提供するのが最良かを概説"
upstream_path: /handbook/sales/commercial/hvs_fo_feedback/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-18T08:17:29-07:00"
---

## 背景

現在、HVS チームは、Advocates 経由の SFDC Cases、CDot 上のお客様セルフキャンセル、定期的な CSAT/NPS サーベイからフィードバックを得ています。私たちは、これらすべての情報源を集中化し、それぞれのフィードバックの最良のバージョンを得ていることを確実にし、最大限の能力で対応したいと考えています。以下は、この取り組みを取り巻く私たちのベストプラクティスのガイドです。

## フィードバック情報源

### ケースフィードバック

Advocate がケースをクローズする際、当該ケースに関する`Feedback Type`を選択し、`Feedback`フィールドにコメントを追加します。このフィードバックは、ケースのロジック、製品から、お客様体験のフィードバックまで多岐にわたります。例として、この[ケース](https://gitlab.lightning.force.com/lightning/r/Case/500PL00000IkjZNYAZ/view)を参照し、`Feedback`および`Feedback Type`フィールドに移動してください。

### Portal キャンセル

お客様が Customers Portal 上でセルフキャンセルする際、`cancel reason`を選択し、テキストフィールドに追加コメントを記入するよう求められます。HVS チームは、洞察を得るためにこのデータにアクセスできます。キャンセルプロンプトの[スクリーンショット](https://drive.google.com/file/d/1gxz_iAOA43ehUlNDECO0LPJLiFWv2Qod/view?usp=drive_link)を参照してください。

### お客様コール録画またはメール

Advocates はお客様コールを Gong に録画でき、受け取った関連するお客様メールをスクリーンショットできます。これは私たちの#hvs チャネルに投稿できます。HVS リーダーシップも定期的に Gong のコール録画をレビューして、製品関連のフィードバックを集約します。

### #hvs チャネルの非定型投稿

その他の種類のフィードバックは、通常このフィードバック Slack チャネルに投稿されます。

### CSAT/NPS

全社的な CSAT サーベイは Gainsight 経由で年 2 回送信されます。

## Advocates のためのフィードバックベストプラクティス

私たちはチームとして、提供するフィードバックやお客様に行う質問が明確で実行可能なものになるよう最善を尽くす必要があります。

### ケースフィードバック

例付きのベストプラクティスについては、この[ドキュメント](https://docs.google.com/document/d/1z5FHYeM0pId9EPoUL2uz00hJWEzGCBRMiVzrdpmgo-0/edit?tab=t.0#heading=h.m8bvusbfbvqq)を参照してください。これらのベストプラクティスに従うことは非常に重要です。なぜなら、これにより Product および Sales Systems のロードマップに影響を与える最良のチャンスが得られるからです。

### お客様コール録画またはメール

お客様からの直接のフィードバックは、次の 2 つのチャネルのいずれかで提供する必要があります:

1. **ケースフィードバック**: 理想的には、お客様とのやり取りはケースにリンクされています。ケースをクローズする際、コールの内容の簡単な要約とともに Gong コール録画をリンクしてください。メールについては、フィードバックフィールドにメールをコピー+ペーストしていただいて構いません。または、メールをスクリーンショットし、gdrive に保存し、フィードバックフィールド内にリンクできます。
1. **#hvs チャネル**: お客様とのやり取りを特定のケースにリンクできない場合、フィードバック Slack チャネルにコール録画（[例](https://gitlab.slack.com/archives/C06GWAS5RA8/p1731624483166999)）またはメールスクリーンショットを投稿してください。これも問題と潜在的に提案された解決策を説明する簡単な要約と一緒に行う必要があります。

### #hvs チャネル

ケースやお客様とのやり取りに関連しないその他のフィードバックは、フィードバックチャネルにも投稿してください。お客様のフィードバックと同様に、フィードバックを概説するために利用可能な例も強くお勧めします。たとえば、Salesforce のアクションを完了できない場合、受け取っているエラーのスクリーンショットを提供してください。

## フィードバックアクション

フィードバックの種類に応じて、次のいずれかのルートを追求します:

### HVS Leadership issue

上記情報源に由来する HVS leadership がアクション可能なフィードバック（例: ケースタイプの更新）は、issue 作成を通じてアクションされます。

最近のチームオンサイトから生じたフィードバック項目を HVS リーダーシップがどうログし、アクションするかについての[issue](https://gitlab.com/gitlab-com/sales-team/self-service/-/issues/700)の例を参照してください。

### Sales systems または Sales ops issue

SFDC オブジェクト更新、自動化ロジック、営業ツールに関するフィードバックは、HVS リーダーシップが適切な systems または sales ops チームとエンゲージすることで追求します。

たとえば、Q3 の Advocates は、特に Groove Flows を使ったケースアクションのさらなる自動化に関するフィードバックを提供しました。HVS リーダーシップチームは、自動化の機会を探求するためにこの[issue](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/4106)を作成しました。

### HVS <> Product intake issue

製品化を指し示すフィードバックは、Product と合意されたこの[intake-model](https://gitlab.com/gitlab-com/sales-team/self-service/-/issues/721)に従います。このインテイクモデルは、収集する元のフィードバックに具体的な例とスクリーンショットがあることを確実にすることをさらに重視しているため、Product は私たちの項目を最初に優先できます。

### 非定型フィードバック項目

性質がより小さい、または明確化を必要とするだけのフィードバック項目は、まずサポートに最も適したチームの適切な slack チャネルから始まります。以下はいくつかの例です:

- Airbase で Finance チームと支払い指示を更新することについての[Thread](https://gitlab.slack.com/archives/C4XFU81LG/p1728986423537719)
- 単一のお客様が Support チームとの停止に対する保証を必要としていることについての[Thread](https://gitlab.slack.com/archives/C4XFU81LG/p1728986423537719)
- Product チームとのお客様ポータル免責事項の明確化についての[Thread](https://gitlab.slack.com/archives/C029YFPUA6M/p1731013938540769)。これは現在 Product intake [issue](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/2098)になっています。

## フィードバックの進捗更新

HVS チームは、提供したフィードバックについて、`hvs_team channel`の`Friday Weekly SMB update Alert`を通じて毎週最新の状態に保たれます。この更新では、追求しているフィードバック項目を呼び出し、必要に応じて適切な issue をリンクします。

## フィードバックダッシュボード

HVS Feedback Tableau [ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/HVSFeedbackTracker/PortalCancelEventsSummary?:iid=1)は、チームがほとんどのフィードバック情報源を監視する方法です。1 つのワークブックに各フィードバック情報源のビューを作成し、当該フィードバックを読み、対応するのが容易になっています。

### ケースフィードバック

- **ビジュアル**: すべてのケースフィードバックの表形式ビュー
- **フィールド**: Case Owner、Region、Case Type、Case Subject、Description、Date、Resolution Action、Feedback Type、Feedback
- **タイムライン**: 過去 1～2 週間

### Portal キャンセル概要

- **ビジュアル**: スタックグラフ
- **フィールド**: Month、Cancel Reason、SaaS、Self-Managed
- **タイムライン**: 過去 6 か月

### Portal キャンセル詳細

- **ビジュアル**: すべてのお客様キャンセルイベントの表形式ビュー、テキストフィールド付き
- **フィールド**: Date、Cancel Reason、Text field、SaaS、Self-Managed
- **タイムライン**: 過去 3～4 週間

### CSAT/NPS

サーベイ結果は分析され、以下の形式で利用可能になります:

- **Tableau Dashboards**: Snowflake データから作成され、これらのダッシュボードは全体的な CSAT トレンド、主要メトリクス、実行可能な洞察の視覚的表現を提供します。
- **Gainsight**: CSAT スコアは Customer 360 で包括的に追跡され、お客様満足度の詳細なビューを時間の経過とともに提供します。さらに、ユニバーサルダッシュボードは送信されたすべての CSAT サーベイの統合された概要を提供し、簡単な監視と分析を可能にします。
- **Salesforce**: サーベイ回答は、Salesforce の任意のアカウントページに埋め込まれた Gainsight ウィジェットでも見つけられます。

## DRIs

以下は、適切なフィードバックタイプの調査を促進する DRI です。**これは、この個人がフィードバックを解決するという意味ではありません**が、彼らが問題を適切なチームに持って行くという意味です。

<table>
<tr>
<th>Task</th>
<th>Responsibility</th>
<th>Primary DRI(s)</th>
<th>Secondary DRI(s)</th>
</tr>
<tr>
<td>ダッシュボードメンテナンス</td>
<td>

- フィードバックの維持と改善

</td>
<td>

`@Gsodhi`
</td>
<td>

`@mfleisher`
</td>
</tr>
<tr>
<td>ケースフィードバックのファシリテーション</td>
<td>

- 週次または隔週でケースフィードバックを監視し、注目すべきフィードバックを特定
- 必要に応じて追加の HVS リーダーシップチームメンバーを巻き込み、その後、調査を開始するための適切な issue を作成
- 必要に応じてアドボケートやサポートから追加の例を取得

</td>
<td>

`@Gsodhi`
</td>
<td>

`@mhanks`

`@mfleisher`
</td>
</tr>
<tr>
<td>Portal キャンセルフィードバックのファシリテーション</td>
<td>

- 週次でポータルフィードバック詳細を監視し、ケースフィードバックと同様に報告する注目すべきフィードバックを特定
- お客様フィードバックトレンドを月次で分析し、アクション可能な項目を特定し、issue に変換

</td>
<td>

`@Gsodhi`
</td>
<td>

`@mhanks`
</td>
</tr>
<tr>
<td>CSAT / NPS 結果分析</td>
<td>

- CSAT / NPS の発見事項を定期的に要約して共有

</td>
<td>

`@mhanks`
</td>
<td>CSSO</td>
</tr>
<tr>
<td>Gong コール分析</td>
<td>

- [Smart Trackers](https://help.gong.io/docs/create-smart-trackers)を活用して、定期的に製品関連のフィードバックを分析

</td>
<td>

`@Gsodhi`
</td>
<td>

`@mhanks`
</td>
</tr>
<tr>
<td>

`#hvs channel`のコール録画、お客様メール、または非定型投稿
</td>
<td>

- アドボケートフィードバックに応答
- フィードバックを調査し、適切な issue を作成

</td>
<td colspan="2">これの DRI はフィードバック主題に応じて柔軟です</td>
</tr>
</table>
