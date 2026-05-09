---
title: サポートエンジニアリング データ分析コミュニティ
description:
upstream_path: /handbook/support/data-analysis/
upstream_sha: c5d40e13183c5a0aeeafefbee88ab3fac48ced5a
translated_at: "2026-05-08T17:40:50Z"
translator: claude
stale: false
---

## 目的

このページは、サポートエンジニアリングのデータ分析
[コミュニティ オブ プラクティス](https://en.wikipedia.org/wiki/Community_of_practice) の
礎となるものです。
興味からあるいは業務の一部として、何らかの形でデータの抽出や分析に取り組む
サポートチームのメンバーは、このページを使ってサポートチームで進行中の計画や
分析の取り組みの概要、データの抽出と分析の現行手法を把握し、関心のある特定の
トピックで誰と協力すべきかを把握できます。

そのためこのページには、以下の情報が含まれています:

- 何が計測されているか、なぜ計測されているか、データの取得方法。
- 誰がそれを担当しているか。
- データ収集と分析に関するベストプラクティス。

### これらのメトリクスは Performance Indicator とどう異なるのか？

[カスタマーサポート部門のパフォーマンス指標](../performance-indicators/) は、
サポートチーム全体としての成果を追跡するために使用される正式な指標です。

このページに含まれるパラメータやメトリクスは、探索的および社内計画用のものであり、
パフォーマンスのレポートには使用すべきではありません。

カスタマーサポート部門のパフォーマンス指標は、これらの指標に関する単一の信頼できる
情報源であり、矛盾がある場合はこのページの内容よりも優先されます。

## パラメータ

### サポート時間セグメント

サポートチームのメンバーが、サポートエンジニアの可用性やワークロードのような、
グローバルな 1 日の特定の時間帯に紐づくトピックを議論する際に参照できる、
共通の時間セグメント。

- DRI: Wei-Meng Lee ([@weimeng](https://gitlab.com/weimeng))

サポート時間セグメントは、[サポートのための優先リージョン](https://about.gitlab.com/support/#effect-on-support-hours-if-a-preferred-region-for-support-is-chosen)
で定義された各リージョンのビジネスアワーを基にしており、
リージョンのセグメント間の重複を最大化するように、また顧客メッセージ受信件数の
ピーク時間帯と整合するように選ばれています。

![サポート時間セグメント](/images/support/support_time_segments.png)

これらは時間セグメントであり地理的セグメントではないことに注意してください。
重要なのは、これらの時間帯にサポートを実際に対応しているメンバーがいることです。
このため、地理的位置との関連付けを避けるために、時間セグメントは「East」、
「Central」、「West」ではなく、「Early」、「Middle」、「Late」と命名されています。

時間セグメントを表形式で示します:

| リージョン   | 基準 TZ  | ローカル開始 | ローカル終了 | UTC 開始 | UTC 終了 | 長さ    |
|-------------|-----------|-------------|-----------|-----------|---------|---------|
| AMER-Early  | PT        | 05:00       | 09:00     | 13:00     | 17:00   | 4 時間 |
| AMER-Middle | PT        | 09:00       | 13:00     | 17:00     | 21:00   | 4 時間 |
| AMER-Late   | PT        | 13:00       | 17:00     | 21:00     | 01:00   | 4 時間 |
| APAC-Early  | AEST      | 09:00       | 12:00     | 23:00     | 02:00   | 3 時間 |
| APAC-Middle | AEST      | 12:00       | 16:00     | 02:00     | 06:00   | 4 時間 |
| APAC-Late   | AEST      | 16:00       | 22:00     | 06:00     | 12:00   | 6 時間 |
| EMEA-Early  | CET       | 08:00       | 14:00     | 07:00     | 13:00   | 6 時間 |
| EMEA-Late   | CET       | 14:00       | 18:00     | 13:00     | 17:00   | 4 時間 |

## メトリクス

### 顧客待機時間 (Customer wait time)

「Customer Wait Time」は [サポート部門の KPI](../performance-indicators/#customer-wait-times) の
一つで、チケットのライフサイクル全体を通じてチケットが「Open」および「New」の状態に
費やした合計時間と定義されます。ライフサイクル時間は「Total Time To Resolve」で計測されます。

- DRI: Ilia Kosenko ([@Ikosenko](https://gitlab.com/Ikosenko))

Zendesk Explore では、Customer Wait Time は以下を使用して計算できます:

```zendesk
VALUE(Requester wait time (hrs)) - VALUE(On-hold time (hrs))
```

`Requester wait time (hrs)` を `Requester wait time - Business hours (hrs)` の代わりに
使用するのは、以下の理由によります:

- ビジネスアワーは週末に経過した時間をカウントしないものの、サポートのための優先リージョンの
  ビジネスアワー外に経過した時間もカウントしません。
- Time to Resolution の測定との整合性を取るためです (これも上記と同じ理由でビジネスアワーを
  使用していません)。

加えて、Customer Wait Time KPI のレポートには中央値を使用しています。これは、
`Requester wait time - Business hours (hrs)` の代わりに `Requester wait time (hrs)` を
使用することで、週末に余分にカウントされる時間を平準化するためです。

このメトリクスから「On-Hold」状態を除外することにしたのは、適切に使用されていれば、
チケットを担当するサポートチームメンバーが、次の更新がいつ予想されるかを顧客と合意して
いるはずだという見方によるものです。これは、顧客が次の返信がいつ来るか分からずに待っている
わけではないため、不必要な待機時間として扱うべきではない、ということを意味します。
