---
title: "GitLab オブザーバビリティ - メトリクス"
status: proposed
creation-date: "2022-11-09"
authors: [ "@ankitbhatnagar" ]
coach: "@mappelman"
approvers: [ "@sguyon", "@nicholasklick" ]
owning-stage: "~monitor::observability"
participating-stages: []
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/observability_metrics/"
upstream_sha: "856dbb5acbecaff51b3ea0c961ad3adb3d37a953"
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ankitbhatnagar" class="text-blue-600 hover:underline">@ankitbhatnagar</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/mappelman" class="text-blue-600 hover:underline">@mappelman</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/sguyon" class="text-blue-600 hover:underline">@sguyon</a>, <a href="https://gitlab.com/nicholasklick" class="text-blue-600 hover:underline">@nicholasklick</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~monitor::observability</span></td>
<td class="px-3 py-2 border border-gray-300">2022-11-09</td>
</tr>
</tbody>
</table>
</div>


## 概要

OpenTelemetry などの広く受け入れられた業界標準フォーマットで一般的にフォーマットされたオブザーバビリティデータを、長期的なデータ保持と集計のサポートを備えた基盤となるストレージとして Clickhouse を使用して、格納・クエリするためのマルチユーザーシステムを開発しています。

## 動機

オブザーバビリティの6本の柱（`TEMPLE` と略されます - Traces（トレース）、Events（イベント）、Metrics（メトリクス）、Profiles（プロファイル）、Logs（ログ）& Errors（エラー））の中で、メトリクスは現代のシステムにとって最も重要なもののひとつです。監視されたシステムの運用状況についてユーザーが洞察を得るのに役立ちます。

時系列データとして一般的に構造化されるメトリクスには次の特性があります:

- 対応するタイムスタンプでインデックス付けされている
- 継続的にサイズが拡大している
- 通常、集計、ダウンサンプリング、範囲でのクエリが行われる
- 非常に書き込み集約型の要件を持つ

GitLab Observability Backend 内では、顧客がシステムとアプリケーションに関するオブザーバビリティデータをインジェストおよびクエリするためのサポートを追加し、システムの運用状態の改善を支援することを目指しています。

### 目標

提案されたシステムの開発により、以下の目標を達成します:

- 繰り返し可能なベンチマークによって性能が実証された Clickhouse を基盤としたスケーラブルで低レイテンシかつコスト効率の良い監視システム。

- OpenTelemetry 準拠のエージェントを介してインジェストされ、GitLab ネイティブ UI を通じてクエリされるメトリクスの長期ストレージサポート。メタデータとエグゼンプラーのサポートも予定。

上記の目標はさらに次の4つのサブ目標に分解できます:

#### データのインジェスト

- 大量の書き込みと読み取りに対応できるシステムのために、水平スケール可能であり、インジェスト後に書き込みがドロップされないよう耐久性保証を提供する必要があります。

#### データの永続化

- OpenTelemetry 仕様を使用してインストルメント化されたテレメトリ/データのインジェストをサポートすることを目指します。最初のイテレーションでは、データセットに設計するあらゆる永続化は、デフォルトでマルチテナントとなり、同じストレージバックエンド内の複数のグループ/プロジェクトのオブザーバビリティデータを格納できます。

#### データの読み取り

- GitLab ネイティブ UX を介したデータのクエリをサポートすることを目指します。これはカスタム DSL/クエリビルダーを使用してバックエンドに API リクエストを送信し、それを Clickhouse SQL に変換することを意味します。これに関する社内での議論から、[Product Analytics Visualisation Designer](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/analytics/dashboards/visualization-designer) がこのための良いインスピレーション源です。

#### データの削除

- 必要に応じてインジェストされたデータを削除できるようにするサポートを目指します。設定された TTL が期限切れになった場合や、対応する保持ポリシーが実施された場合の自然な削除に加えてのものです。スキーマ内に、ラベルまたはコンテンツによってデータを削除する方法を構築し、それを行うために必要なツールも提供しなければなりません。

### 非目標

上記の目標が確立されたことで、現在の提案に関して非目標となる特定の事項も確立したいと思います:

- 最初のイテレーションでは、ビジネスニーズが生じたときに対応するとして、インジェストされたテレメトリを [PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/) でクエリするサポートは目指しません。ただし、ユーザーは OpenTelemetry Line Protocol（OTLP）でメトリクスをインジェストできます。例えば、Prometheus メトリクスの場合は [Prometheus Receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/prometheusreceiver/README.md) を介して行えます。

## 提案

メトリクス実装のフレームワークとして GitLab Observability Backend（GOB）を使用する予定です。そのライフサイクルが既に確立されたバックエンドコンポーネントを通じて管理できるようにするためです。

![アーキテクチャ](/images/engineering/architecture/design-documents/observability_metrics/metrics_indexing_at_ingestion.png)

上の図に示されているように、OTEL コレクターパイプライン、インデクサー、クエリサービスはここで提案されているように開発が必要なコンポーネントです。残りの周辺コンポーネントはすでに存在しているか、GOB 内の集中型 `scheduler` の既存コードを通じてプロビジョニングできます。

**書き込みパスでは**:

- 既存のサービス（例: エラートラッキング、トレーシング）で行っているものと同様に、`HTTP/JSON` 経由で受信データを受け取ることを期待します。

- ストレージフットプリントを削減するため、シリーズごとのメタデータをインデックス/キャッシュして受信時系列を大幅に重複排除することを目指します。

- ClickHouse に書き込む前にデータをバッチ処理することで、Clickhouse への多数の小さな書き込みを避けることを目指します。

**読み取りパスでは**:

![MetricsReadPath](/images/engineering/architecture/design-documents/observability_metrics/metrics-read-path.png)

- ユーザーが GitLab 自体を使用してインジェストされたデータを読み取れるようにすることを目指します。これには GitLab から発信された API リクエストに対応できる専用の `Query Service` をバックエンドに構築する必要があります。

- 基盤となるシステムが常に良好な運用状態を維持できるよう、あらゆるリソース消費に対して必要なクエリ検証、サニタイゼーション、レート制限を実装することを目指します。

### GitLab Observability テナント

バックエンド設計に対する最近の変更、特に Grafana ベースの UX の使用廃止に伴い、システム内でテナントをプロビジョニングする方法を合理化する機会を見つけました。このイニシアチブは、**トップレベルの GitLab ネームスペースごとに** 専用リソースセットをモデル化することを意図したカスタム CR - `GitLabObservabilityTenant` の開発につながりました。スケーラビリティの観点から、これはトップレベルの GitLab ネームスペースごとに専用の `Ingress` と `Ingester` インスタンスをデプロイし、それぞれのグループとプロジェクトのトラフィックボリュームに応じて各テナントをスケールできるようにします。また、マルチテナントシステムでのテナント間のリソース消費の分離にも役立ちます。

### シリーズごとのメタデータのインデックス作成

`ingester` の内部コンポーネントとして、シリーズごとのラベルやメタデータをインデックス化して、受信する時系列データを重複排除し、それらをメタデータとポイントデータに分離することを目指します。これにより、総運用コストを低く保ちながらストレージフットプリントを桁違いに削減できます。このインデックス化されたデータは、`Query Service` がすべての受信読み取りリクエストの時系列を効率的に計算するためにも活用できます。このアーキテクチャの部分は [Proposal: Indexing metrics labels for efficiently deduplicating & querying time series data](https://gitlab.com/gitlab-org/opstrace/opstrace/-/issues/2397) でも詳しく説明されています。

### クエリサービス

`Query Service` は2つの主要コンポーネントで構成されています - 1. リクエストパーサーと 2. バックエンド固有のクエリア実装。リクエストパスでは、指定されたエンドポイントで受信されると、リクエストパーサーの一部であるハンドラーによって処理されます。パーサーの責任は受信クエリのペイロードをアンマーシャリングし、コンテンツを検証して、このクエリ/リクエストをどのように処理すべきかを記述する `SearchContext` オブジェクトを生成することです。`SearchContext` オブジェクト内には `QueryContext` 属性があり、これはさらに1つ以上の `Query` オブジェクトを定義します。それぞれが特定のバックエンドに対する完全に独立したデータクエリです。

![QueryServiceInternals](/images/engineering/architecture/design-documents/observability_metrics/query-service-internals.png)

#### API 構造

ユーザー向け API では、リクエストボディ内のペイロードとしてユーザークエリをマーシャリングした HTTP/JSON エンドポイントを通じてサポートを追加する予定です。例えば、ラベル `instance` のすべての値にわたってメトリクス `apiserver_request_total` の 1 分ごとのデルタの合計を計算するには、次のボディを `https://observe.gitlab.com/query/$GROUP/$PROJECT/metrics` に POST リクエストとして送信します:

```json
{
  "queries": {
    "A": {
      "type": "metrics",
      "filters": [
        {
          "key": "__name__",
          "value": "apiserver_request_total",
          "operator": "eq"
        }
      ],
      "aggregation": {
        "function": "rate",
        "interval": "1m"
      },
      "groupBy": {
        "attribute": [
          "instance"
        ],
        "function": "sum"
      },
      "sortBy": {},
      "legend": {}
    }
  },
  "expression": "A"
}
```

#### AST としてのクエリ表現

```plaintext
type SearchContext struct {
  UserContext    *UserContext    `json:"authContext"`
  BackendContext *BackendContext `json:"backendContext"`

  StartTimestamp      int64 `json:"start"`
  EndTimestamp        int64 `json:"end"`
  StepIntervalSeconds int64 `json:"step"`

  QueryContext       *QueryContext          `json:"queryContext"`
  CorrelationContext *CorrelationContext    `json:"correlationContext"`
  Variables          map[string]interface{} `json:"variables,omitempty"`
}
```

一般的に:

- `SearchContext` は検索がどのように実行されるかを定義します。
  - 内部に `QueryContext` が含まれており、これは特定のバックエンドをターゲットとする1つ以上の `Query` を指します。
  - 各 `Query` は、`QueryContext` または `SearchContext` 内の他の共通属性で補完されながら、独立して解析・処理される必要があります。

- `Query` はクエリをどのように実行するかを記述する AST のようなオブジェクトを定義します。
  - 意図的にスキーマに依存せず、システム全体でシリアライズして渡すことができます。
  - クエリエンティティからデータベース内部のデータモデルの詳細を隠す抽象化でもあります。
  - 受信クエリを `Query` オブジェクトに解析・検証できれば、`Querier` がそれに対して検索/クエリを実行できます。

- `UserContext` はリクエストが検索されているデータへのアクセスを持っているかどうかを定義します。
  - リクエストクォータ、レート制限などをモデル化・実施するための良い場所かもしれません。
  - この属性の一部を埋めることは、パーサーが API ゲートウェイまたは Gatekeeper を介して他のグローバル状態を読み取ることに依存します。

- `BackendContext` はリクエストをどのバックエンドに対して処理する必要があるかを定義します。
  - マルチテナント環境で適切なバックエンドにリクエストをルーティングするのに役立ちます。
  - ただし、このイテレーションでは現在のアーキテクチャと同様に1つのバックエンドのみで作業する予定です。

- `CorrelationContext` は複数のクエリがどのように相互に関連付けられてフロントエンドで一貫したビューを構築できるかを定義します。
  - ただし、このイテレーションでは空のままにして、後でコリレーションベクターを追加する作業のみを行います。

## 対象ターゲット環境

現在の運用構造に合わせて、以下の2つのターゲット環境に GitLab Observability Backend の一部としてメトリクスオファリングをデプロイする予定です:

- kind クラスター（ローカル開発用）
- GKE クラスター（ステージング/本番環境用）

## 本番準備

### バッチング

Clickhouse に大量の小さな書き込みをインジェストする前にデータをバッチ処理する必要があることを考慮すると、設計はアプリがローカルで受信データをバッチ処理してから、パフォーマンスを向上させてテーブルエンジンがデータを正常に永続化し続けられるよう、事前に決定されたサイズのバッチで Clickhouse に着地させるためのアプリローカルな永続化を考慮する必要があります。

アプリローカルなバッチングを実装するための以下の代替案を検討しました:

- インメモリ - 永続化なし
- BadgerDB - 永続化あり、組み込み、高性能
- Redis - 簡単、外部依存関係
- Kafka - 非簡単、外部依存関係だが複数の他のユースケースを補完し、GitLab の他の問題ドメインを助けることができる

**注意**: 同様の課題が CH との `errortracking` の相互作用でも浮上しています - このサブシステムの現在の実装にもあります。過去にこの問題ドメインを解決するための複数の試みがありました - [この MR](https://gitlab.com/gitlab-org/opstrace/opstrace/-/merge_requests/1660) はインメモリの代替を実装し、[こちら](https://gitlab.com/gitlab-org/opstrace/opstrace/-/merge_requests/1767) はオンディスクの代替を試みました。

この懸念領域での作業は、エラートラッキング、ロギングなどの他のサブシステムにも利益をもたらします。

### スケーラビリティ

初期の仮説をテスト/確立するために、最初は毎秒 10K メトリクスポイントで提案された実装のテストを開始する予定ですが、理想的には毎秒 100 万ポイントのインジェストに対応できるよう基盤となるバックエンドを設計しなければなりません。

### ベンチマーキング

提案された実装のベンチマーキング中にテストする以下の3つの次元を提案します:

- データインジェストパフォーマンス（機能的）
- 平均クエリ応答時間（機能的）
- ストレージ要件（運用的）

パフォーマンスを理解するためには、まずインジェストするデータに対してそのようなクエリのリストをコンパイルする必要があります。これを行う際に Clickhouse のクエリログは非常に役立ちます。

注意:
理想的には、毎秒 100 万以上のメトリクスポイントをインジェストし、ほとんどのクエリに一貫して 1 秒未満で応答できるようにシステムをベンチマークすることを目指します。

### 過去の作業と参考文献

- [ClickHouse をメトリクスにベンチマーク](https://gitlab.com/gitlab-org/opstrace/opstrace/-/issues/1666)
- [Incubation:APM ClickHouse 評価](https://gitlab.com/gitlab-org/incubation-engineering/apm/apm/-/issues/4)
- [Incubation:APM ClickHouse メトリクススキーマ](https://gitlab.com/gitlab-org/incubation-engineering/apm/apm/-/issues/10)
- [TimescaleDB に関する私たちの調査](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/14137)
- [Thanos ベースのセットアップでの現在のワークロード](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/15420#current-workload)
- [Scaling-200m-series](https://opstrace.com/blog/scaling-200m-series)

### コスト見積もり

- インジェストとクエリのテレメトリデータをユーザーにとってコスト効率よくすることを目指します。基盤となるコストに影響する大きな要因の1つは、意図した提案がデータ冗長性の削減や未使用メトリクスの削除などの対策によって最適化しなければならない、インジェストされたデータのモデリングと格納方法です。

- 複数のストレージメディアの使用を検討しなければなりません。特に:
  - 階層型ストレージ
  - オブジェクトストレージ

### ツーリング

ここでの包括的な結果として、インジェストされたデータに関する必要なツーリングや/またはテレメトリを構築して、すべてのユーザーペルソナが高カーディナリティのメトリクスを可視化し、未使用のメトリクスを削減または削除できるようにすることを目指します。エンドユーザーが必要以上のボリュームでデータをインジェストしていないことを確認するために、メトリクスごとのスクレイプ頻度などの使用統計を持つことが賢明です。

## 将来のイテレーション

### テレメトリの柱をまたいだリンク、エグゼンプラー

インジェストされたデータをトレース、ログ、エラーなどの他のテレメトリの柱とクロスリファレンスできるよう、メトリクスシステムを構築する必要があります。これにより、システムが送信するすべてのインストルメンテーションのより総合的なビューが提供されます。

### データの集計やマテリアライズドビューの生成のためのユーザー定義 SQL クエリのサポート

Prometheus レコーディングルールが既存のものからカスタムメトリクスを生成するのに役立つ方法と同様に、システムのユーザーがユーザー定義のアドホッククエリを実行できるようにするべきです。

### スケーラブルなデータインジェストのサポート

データインジェストアプリケーションにローカルなバッファリングを開始したり、Clickhouse からデータの永続化を離れたりする必要を感じた場合、他の監視システムで広く使用されていることを考慮すると、オンディスク WAL が進むべき良い方向だと考えます。

### クエリサービスの機能

- 複合クエリや式のサポートを追加する。
- クエリエンジンを介したトレーシング、ログ、エラートラッキングのクエリ機能の統合。
- クエリエンジンを使用してアラートなどの統合を構築する。
- PromQL、MetricQL、OpenSearch などの他の監視/クエリ標準のサポートを追加する。
- メトリクスのカーディナリティとリソース消費に関する自動的なインサイトを追加する。

## 計画されたロードマップ

以下のセクションでは、GitLab Observability Service にメトリクスのサポートを構築する上記の提案を実装する方法を列挙します。各対応するドキュメントと/または Issue には、次の各ステップをどのように計画・実行するかの詳細が含まれています。

### 16.5

- 設計提案と/または要件を研究・草案化する。
- アーキテクチャのブループリントを作成し、フィードバックのために公開する。

### 16.6

- OpenTelemetry ベースのインジェストのサポートを開発する。
- データのクエリのサポートを開発する。特定のテナントにスコープされたすべてのインジェストされたメトリクスをリストアップする API から始める。
- GitLab UI 内でインジェストされたメトリクスのリストを表示するサポートを開発する。
- 実験バージョンをリリースする。

### 16.7

- データのクエリのサポートを開発し、サポートされているメトリクスタイプのためのメトリクス検索エンドポイントを追加する。
- 最初のイテレーションのクエリビルダーを開発し、バックエンド API のクエリを有効にする。
- バックエンド API を通じてデータをグラフ化できるメトリクス詳細ページを開発する。
- テストをセットアップし、繰り返し可能なベンチマーキング/テストが実行できることを確認する。
- ベータバージョンをリリースし、内部および外部の顧客による早期使用のために公開する。

### 16.9（GA リリースのためのユーザーフィードバック期間）

- エンドツーエンドテストを開発し、必要な本番準備を完了させ、ユーザーからのフィードバックに対応する。
- GA バージョンをリリースする。
