---
title: 'Analytics'
description: 'Zendesk Analytics に関するドキュメント'
date: 2026-01-05
upstream_path: /handbook/security/customer-support-operations/zendesk/analytics/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T20:47:52+00:00"
---

{{% alert title="Technical Details" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- 旧称: `Explore`

{{% /alert %}}

## Zendesk Analytics を理解する

### Zendesk Analytics とは

Zendesk Analytics (旧「Explore」) は、Zendesk が提供する強力な分析・レポートツールであり、カスタマーサポートのメトリクスやトレンドに関する詳細な洞察を提供するように設計されています。Zendesk Analytics により、私たちのチームはサポートデータを分析・可視化し、情報に基づく意思決定を行い、顧客体験を改善し、サポート運用を最適化できます。

Zendesk Analytics は、コーディング知識なしで管理者がカスタマイズされたダッシュボード、レポート、クエリを作成できるユーザーフレンドリーなインターフェースを提供します。Zendesk Support とシームレスに統合され、複数のソースからのデータを組み合わせて、包括的で実行可能な分析を提供します。

Zendesk Analytics は API アクセスも提供しており、プログラム的にデータを取得したり、クエリを作成・管理したり、Zendesk Analytics を他のシステムやカスタムアプリケーションと統合したりできます。

### 一般的な用語

Zendesk Analytics でよく使用される用語は次のとおりです:

- Columns
  > Rows や Explosions と同様に、Columns に属性を追加すると、メトリクスの結果がその属性の値ごとにスライスされます。Rows や Explosions とは異なり、Columns は結果を 1 つのチャート内にレンダリングします。
- Dashboards
  > Dashboards は、複数のレポートを複数の閲覧者と同時に共有できるカスタマイズ可能な場所です。ダッシュボードを異なるタブに分割したり、インタラクティブなコンポーネントを追加したり、レポートを共有したりできます。
- Datasets
  > Datasets は、さまざまな Zendesk データモデルを表し、各製品に関連するメトリクスと属性を含みます。
- Drill in
  > drill in を使うと、選んだ追加属性で結果をスライスしたり、レポート閲覧者に属性の範囲から選ばせたりすることで、Explore レポートの結果を絞り込めます。
- Explosions
  > Rows と同様に、Explosions は複数のチャートを表示し、それぞれが追加した属性の異なる値を表します。
- Metric
  > Metrics は、チケット数、エージェントの待機時間 (分)、返信数、初回返信時間 (分) など、数値化可能な結果です。
- Rows
  > Rows は、属性の各値ごとに個別のチャートを表示します。

より複雑なリファレンスについては、[Zendesk のドキュメント](https://support.zendesk.com/hc/en-us/articles/4408824134810-Reporting-glossary) を参照してください。
