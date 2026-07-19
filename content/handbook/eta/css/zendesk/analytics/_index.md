---
title: 'Analytics'
description: 'Zendesk analytics のドキュメント'
upstream_path: "/handbook/eta/css/zendesk/analytics/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:43:41+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- 以前の名称: `Explore`

{{% /alert %}}

## Zendesk analytics を理解する

### Zendesk analytics とは

Zendesk analytics（旧称「Explore」）は、顧客サポートの指標と傾向について詳細な洞察を得られるように設計された、Zendesk 提供の強力な分析およびレポートツールです。Zendesk analytics を使用すると、チームはサポートデータを分析・可視化して、情報に基づいた意思決定、顧客体験の改善、サポート運用の最適化を行えます。

Zendesk analytics は、コーディングの知識がなくても管理者がカスタムダッシュボード、レポート、クエリを作成できる、使いやすいインターフェースを提供します。Zendesk Support とシームレスに統合し、複数のソースからのデータを組み合わせて、包括的で実用的な分析を提供します。

Zendesk analytics は API アクセスも提供しており、プログラムでデータを取得し、クエリを作成・管理して、Zendesk analytics を他のシステムやカスタムアプリケーションと統合できます。

### よく使う用語

Zendesk analytics でよく使用する用語は次のとおりです。

- Columns
  > Rows や Explosions と同様に、属性を Columns に追加すると、指標の結果がその属性の値ごとに分割されます。Rows や Explosions と異なり、Columns は結果を 1 つのグラフに描画します。
- Dashboards
  > Dashboards は、複数のレポートを同時に複数の閲覧者と共有できる、カスタマイズ可能な場所です。ダッシュボードを異なるタブに分け、対話型コンポーネントを追加し、レポートを共有できます。
- Datasets
  > Datasets は異なる Zendesk データモデルを表し、各プロダクトに関連する指標と属性を含みます。
- Drill in
  > Drill in を使用すると、選択した追加の属性で結果を分割したり、レポート閲覧者が属性の範囲から選択できるようにしたりして、Explore レポートの結果を絞り込めます。
- Explosions
  > Rows と同様に、Explosions は追加された属性の異なる値ごとに複数のグラフを表示します。
- Metric
  > Metrics は、チケット数、エージェントの待機時間（分）、返信数、初回返信時間（分）などの定量化できる結果です。
- Rows
  > Rows は、属性の値ごとに個別のグラフを表示します。

より複雑な参照については、[Zendesk ドキュメント](https://support.zendesk.com/hc/en-us/articles/4408824134810-Reporting-glossary)を参照してください。
