---
# This is the title of your design document. Keep it short, simple, and descriptive. A
# good title can help communicate what the design document is and should be considered
# as part of any review.
title: Siphon と Data Insights Platform を用いたリアルタイム分析
status: proposed
creation-date: "2025-07-22"
authors: [ "@arun.sori" ]
coaches: [ "@ahegyi" ]
dris: [ "@nicholasklick" ]
owning-stage: "~group::platform insights"
participating-stages: []
# Hides this page in the left sidebar. Recommended so we don't pollute it.
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/analytics_with_siphon_data_insights_platform/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-03T17:49:46+01:00"
---
<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->

{{< engineering/design-document-header >}}


<!--
Don't add a h1 headline. It'll be added automatically from the title front matter attribute.

For long pages, consider creating a table of contents.
-->

## 概要

~group::platform insights では、GitLab 全体で生成されるデータに対する一貫性とパフォーマンスを兼ね備えたリアルタイム分析を実現することを目指して、[Siphon](/handbook/engineering/architecture/design-documents/siphon) のような基盤的なブロックを構築してきました。

本提案では、これらの基盤的なピースを組み合わせ、_スケール_ で分析ユースケースを解決する設計と推奨される実装パターンを提示することを目指しています。
そのために、GitLab.com の既存のユースケースを例として用いて、将来の可能性を掘り下げます。

[Siphon](/handbook/engineering/architecture/design-documents/siphon) や [Data Insights Platform (DIP)](/handbook/engineering/architecture/design-documents/data_insights_platform) のようなブロックの多くには、それぞれの設計の特定の詳細に関する独自のブループリントがあり、別途参照する必要があります。

## 動機

基盤的なブロックを構築する動機は、[Product Usage Data Unification Effort](https://internal.gitlab.com/handbook/product-usage-data-architecture/) における作業から来ています。そこでは、GitLab 全体で生成される分析データを収集・同期・クエリする現在の複数の方法を、まとまりのある抽象化に [統合する必要性](https://gitlab.com/groups/gitlab-org/architecture/gitlab-data-analytics/-/epics/3) が確立されました。

リアルタイムデータレプリケーションのための Siphon のような個々のコンポーネントを正常に構築してきた一方で、GitLab 全体のチームは現在、これらのピースを本番対応の分析ソリューションに組み合わせるための明確なパターンと例を欠いています。

このブループリントは、基盤的なコンポーネントを持つことと、チームが効率的にリアルタイム分析機能を構築できるようにすることの間のギャップに対処します。

確立された一連の推奨アーキテクチャパターンと、それを具体的な実装で実演することで、私たちの統合データプラットフォームの採用を加速し、スケーラブルな分析ワークロードを構築するための実証されたブループリントをチームに提供すべきです。

### ゴール

* Siphon、DIP、ClickHouse を使用したリアルタイム分析のためのアーキテクチャパターンを定義する
* 分析機能を構築するチームのための再利用可能なコンポーネントとベストプラクティスを確立する
* 具体的な実装を通じてパターンを実証する（社内優先の分析ユースケース）
* 既存の分析ワークロードを統合プラットフォームへ移行するための基盤を作る

### 非ゴール

* 個々のコンポーネントの詳細な実装仕様（別のブループリントでカバー）
* 既存の本番分析ワークロードのための移行戦略
* データガバナンスとプライバシーのコンプライアンスフレームワーク（別のイニシアチブ）

## 提案

本ブループリントは、私たちの基盤データプラットフォームコンポーネントである Siphon、[NATS](/handbook/engineering/architecture/design-documents/gitlab_messaging_layer/)、ClickHouse、Data Insights Platform (DIP) を使用して、スケールでリアルタイム分析機能を構築するための **標準化されたアーキテクチャパターン** を提案します。
各チームがデータレプリケーションと分析を独立して解決するのではなく、GitLab 全体で複製できる以下の実証済みパターンを確立します。

1. [Siphon でのデータ取り込み](#1-data-ingestion-with-siphon)
2. [Materialized View による分析向けに最適化されたストレージ](#2-analytics-optimized-storage-with-materialized-views)
3. [Siphon のリフレッシュメカニズムによるデータ整合性](#3-data-consistency-with-refresh-mechanisms-in-siphon)
4. [アクセス向けに最適化されたテーブルのデータ整合性](#4-data-consistency-for-tables-optimized-for-access)
5. [クエリインターフェイスのオプション](#5-query-interface-options)

### リファレンスユースケース: Issue and Value Stream Analytics

これらのパターンを GitLab の分析ユースケースを通じて実演します。これにより、私たち自身の開発ワークフローと生産性メトリクスへのリアルタイムインサイトが提供されます。
また、最初は [社内利用](https://gitlab.com/groups/gitlab-org/architecture/gitlab-data-analytics/-/epics/57) のためにこれらのユースケースを対象としますが、外部のお客様にもさらに拡張することは可能です。

これは [Value Stream Analytics](https://docs.gitlab.com/user/group/value_stream_analytics/) からのメトリクスをカバーし、特に以下を含みます:

* グループの貢献
* ワークアイテムの集約（カウント、指定された期間内のオープン/クローズ、リードタイム）
* マージリクエスト率

また [Issue Analytics](https://docs.gitlab.com/user/group/issues_analytics/) からのメトリクスも含みます。例えば:

* 指定された期間内に作成者やラベルなどでフィルタリング可能なオープン/クローズされた Issue

#### 要件

* PostgreSQL で利用可能なものと一貫した機能を提供する
* インタラクティブダッシュボードのためのクエリパフォーマンスを改善する（サブセカンドから 5 秒）
* ソース変更から数分以内のデータ鮮度
* ワークアイテムのライフサイクル（作成、更新、完了）に対するリアルタイムな可視性

### アーキテクチャコンポーネント

![コンポーネントの概要](/images/engineering/architecture/design-documents/analytics_with_siphon_data_insights_platform/pg_siphon_nats_clickhouse.png)

#### 1. Siphon でのデータ取り込み {#1-data-ingestion-with-siphon}

**パターン**: Siphon と [NATS](https://nats.io/) ストリームを使用した、PostgreSQL から ClickHouse への選択的なテーブルレプリケーション

* Siphon は特定のテーブルデータ（`issues`、`merge_requests`、`issue_assignees`、`label_links`、`audit_events`）を、専用の [NATS](https://nats.io/) サブジェクトに対する Logical Replication (LR) イベントとしてレプリケーションする
* [NATS](https://nats.io/) は変更イベントの順序保証と耐久性を提供する
* レプリケーションされた各テーブルは、ほぼ同一のスキーマを持つ対応する ClickHouse テーブルにマップされる
* ClickHouse コンシューマーは、NATS から LR イベントを読み取り、それらを該当する行に変換してバッチで挿入する

なお、コンシューマーは、知らないカラムをイベントから無視するため、ClickHouse スキーマを同期させておくことが重要です。詳細はこの [決定事項](https://gitlab.com/gitlab-org/architecture/gitlab-data-analytics/design-doc/-/blob/master/decisions/009_downstream_db_schema_management.md?ref_type=heads) を参照してください。

##### Siphon でレプリケーションを有効化し、DIP/ClickHouse からのクエリを有効化する方法

それぞれの GitLab テーブルを Siphon でレプリケーションに含め、クエリで利用可能にするための手順:

0. 分析ユースケース向けに最適化すべきテーブルを認識する（例: [issue](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/issues/52)）
1. ClickHouse でテーブルの対応するスキーマを定義する（例: [マージリクエスト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/196808)）
2. Siphon にテーブル設定を追加する（例: [config](https://gitlab.com/gitlab-org/analytics-section/siphon/-/blob/bfcd805c86c6f9a06784e5fc50b5f260e7b42fd0/e2e-testing/producer_config.yml)）
3. データの使用法を反映するパターンを適用してクエリを定義する（例: [マージリクエスト](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/merge_requests/22/)）
4. ClickHouse で利用可能なデータをクエリする

#### 2. Materialized View による分析向けに最適化されたストレージ {#2-analytics-optimized-storage-with-materialized-views}

**パターン**: 正規化されたデータを分析向けに最適化された構造に変換する

最初は ClickHouse のスキーマが Postgres バージョンと同一になるため、データを [materialized view](https://clickhouse.com/docs/materialized-view/incremental-materialized-view) を使ってより非正規化された分析向きのスキーマに移動する必要があることがよくあります。

Materialized View 戦略:

1. 生データテーブル: PostgreSQL からのダイレクトレプリカがデータの整合性を維持する
2. 非正規化ビュー: 関連するテーブルを結合して分析向きの構造にし、特定のアクセスパターン向けに最適化する
3. 集約ビュー: 一般的なメトリクスと時系列データを事前に計算する

ここで [materialized view](https://clickhouse.com/docs/materialized-view/incremental-materialized-view) について重要なのは、これらは挿入トリガーとして考えるべきだということです。これらは定義された対象にやって来るデータブロックに対してのみ動作します。

具体的な定義は基盤となるスキーマに依存しますが、ネームスペースやプロジェクトのようなフィルターを通じた参照ルックアップを改善するためのいくつかの最適化をまとめています。

* ルックアップを改善するためのカラムへの階層パスの取り込み
* フィルタリングに頻繁に使用されるカラムへのデータスキッピングインデックスの追加

これらの最適化のうち最初のものは、マージリクエスト、Issue、脆弱性などの GitLab データの **改善された階層的ルックアップ** です。詳細はこの [ブループリント](/handbook/engineering/architecture/design-documents/data_insights_platform_hierarchical_data_retrieval_optimization) を参照してください。

要するに、各行には `traversal_path` が付加されており、これは指定されたネームスペースレコードのすべての祖先を含みます。これにより、特定のプロジェクト、グループ、組織のルックアップが大幅に改善されます。

例えば、[Siphon](https://gitlab.com/gitlab-org/analytics-section/siphon/) プロジェクトの `traversal_path='1/9970/55154808/95754906/'` です。

{{% details summary="SQL 定義を示し、特定のユーザーまでフィルターするための具体的な例" %}}
```sql
CREATE TABLE namespace_traversal_paths(
  `id` Int64 DEFAULT 0,
  `traversal_path` String DEFAULT '0/',
  `version` DateTime64(6, 'UTC') DEFAULT now(),
  `deleted` Bool DEFAULT false
)
ENGINE = ReplacingMergeTree(version, deleted)
ORDER BY id
SETTINGS index_granularity = 512; -- optimize single-row value lookups

CREATE MATERIALIZED VIEW namespace_traversal_paths_mv TO namespace_traversal_paths
(
    `id` Int64,
    `traversal_path` String,
    `version` DateTime64(6, 'UTC'),
    `deleted` Bool
)
AS SELECT
    id,
    -- concat organization_id and the traversal_ids array
    if(length(traversal_ids) = 0, concat(toString(ifNull(organization_id, 0)), '/'), concat(toString(ifNull(organization_id, 0)), '/', arrayStringConcat(traversal_ids, '/'), '/')) AS traversal_path,
    _siphon_replicated_at AS version,
    _siphon_deleted AS deleted
FROM gitlab_clickhouse_development.siphon_namespaces

CREATE TABLE IF NOT EXISTS hierarchy_issues
(
        traversal_path String,
        id Int64,
        author_id Nullable(Int64),
        ...
        version DateTime64(6, 'UTC') DEFAULT now(),
        deleted Bool DEFAULT FALSE
)
ENGINE = ReplacingMergeTree(version, deleted)
PRIMARY KEY (traversal_path, id);

CREATE MATERIALIZED VIEW hierarchy_issues_mv TO hierarchy_issues
AS WITH
    cte AS
    (
        SELECT *
        FROM siphon_issues
    ),
    namespace_paths AS
    (
        -- look up `traversal_path` values
        SELECT
            id,
            traversal_path
        FROM namespace_traversal_paths
        WHERE id IN (
            SELECT DISTINCT namespace_id
            FROM cte
        )
    )
SELECT
    -- handle the case where namespace_id is null
    multiIf(cte.namespace_id != 0, namespace_paths.traversal_path, '0/') AS namespace_path,
    cte.id Int64,
    cte.author_id,
    cte.project_id,
    ...
    cte._siphon_replicated_at AS version,
    cte._siphon_deleted AS deleted
FROM cte
LEFT JOIN namespace_paths ON namespace_paths.id = cte.namespace_id

SELECT *
FROM hierarchy_issues
WHERE
  startsWith(traversal_path, '1/9970/') AND
  author_id = 4156052
ORDER BY created_at, id
LIMIT 20;
```

```plaintext
20 rows in set. Elapsed: 0.034 sec. Processed 780.83 thousand rows
```

特定のルックアップ（例: `author_id` を使うもの）を改善するために、[データスキッピングインデックス](https://clickhouse.com/docs/optimize/skipping-indexes) を追加することで、追加の最適化を行うことができます。

```sql
ALTER TABLE hierarchy_issues ADD INDEX idx_author_id author_id TYPE set(1000) GRANULARITY 1;
```

これにより処理される行数が削減されます。

```plaintext
20 rows in set. Elapsed: 0.022 sec. Processed 421.14 thousand rows
```
{{% /details %}}

#### 3. Siphon のリフレッシュメカニズムによるデータ整合性 {#3-data-consistency-with-refresh-mechanisms-in-siphon}

**パターン**: Materialized view と Siphon を使用して自動システムによりデータを最新かつ一貫した状態に保つ

リフレッシュアーキテクチャ:

* 変更検出: materialized view を使用して更新を受けるソーステーブルを認識する

* 依存関係の追跡: Siphon の設定の依存関係に基づいてリフレッシュ順序を管理し、変更時に再挿入をトリガーする

レプリケーションストリームは更新を正しく反映しますが、設定されたテーブルの正規化バージョンに対してのみそれを行います。分析目的でテーブルを非正規化するにつれ、設計したテーブルが更新と一貫した状態を保つようにするための別の取り組みが必要になります。詳細は [Issue](https://gitlab.com/gitlab-org/analytics-section/siphon/-/issues/148) を参照してください。

これは例でより良く説明できます:

![Issue->Assignee->Work Items の概要](/images/engineering/architecture/design-documents/analytics_with_siphon_data_insights_platform/erd_siphon_issues.png)

この例では、`hierarchy_work_items` は `siphon_issues` 上の MV を使用して `id` を取得し、テーブル `siphon_issue_assignees` で JOIN して assignees も取得します。

しかし、`siphon_issue_assignees` のような関連テーブルが変更された場合、MV はそのソーステーブル `siphon_issues` の変更しかリッスンできないため、それらの変更は `hierarchy_work_items` に自動的に反映されません。

Siphon は、依存テーブルの更新を追跡することで、最終テーブルの行を自動的に再挿入するメカニズムを導入することで、この問題を解決します。

これは設定で制御されます:

```yaml
clickhouse:
  host: localhost
  ...
  refresh_on_change:
    - stream_identifier: siphon_issue_assignees # which stream to trigger refresh
      filters: # optional, filter for specific events
        - column: target_type
          value: Issue
      target_keys: # foreign key value columns within the current stream
        - target_id
      target_stream_identifier: 'siphon_issues' # which stream to submit the refresh package
      source_keys:
        - id
```

##### 仕組み

`siphon_issue_assignees` サブジェクトで変更イベントを受信すると、ClickHouse へのイベント書き込みを担当するコンシューマーは:

1. 通常どおり `siphon_issue_assignees` に行を挿入する。
2. メッセージを ack する前に、特別なイベントタイプでマークしてリフレッシュイベントとして識別する論理レプリケーションイベントを `siphon_issues` サブジェクトに発行する。これには、上流（`siphon_issue_assignees`）の関連行の主キー値のみが含まれる。
3. `issues` サブジェクトを処理する goroutine がこのイベントをピックアップし、特別なイベントであることを認識した後で、各主キーの最新の行を `siphon_issues` から選択し、新しいバージョンでその行を再挿入する。

その結果、`hierarchy_work_items` は `siphon_issue` の更新を見て、新しい JOIN をトリガーします — これにより assignees は上流テーブルと同期した状態を保ちます。

##### パフォーマンス上の考慮

ストリームに `refresh_on_change` 設定を追加することは、コンシューマーに追加の処理を導入することになるため、挿入されるデータの鮮度に影響を与える可能性があります。
ストリームがリフレッシュを必要とせずに動作できる場合は、それを検討すべきです。
パフォーマンスへの影響に関する具体的な詳細は、この [Issue](https://gitlab.com/gitlab-org/analytics-section/siphon/-/issues/134) で計画されています。

#### 4. アクセス向けに最適化されたテーブルのデータ整合性 {#4-data-consistency-for-tables-optimized-for-access}

**パターン**: 異なる順序キーを持つ重複テーブルに対して、自動システムによりデータを一貫した状態に保つ

Siphon でレプリケーションされるすべてのテーブルは、当初、元のテーブルの設計に基づく順序キーを持つ `ReplacingMergeTree` エンジンを使用します。
別のアクセスパターン用に最適化されたビューを別の順序キーで作成することが可能です。例えば:

```sql
      CREATE TABLE IF NOT EXISTS siphon_label_links
      (
        id Int64,
        label_id Nullable(Int64),
        target_id Nullable(Int64),
        ...
      )
      ENGINE = ReplacingMergeTree(version, deleted)
      PRIMARY KEY id
```

target_id へのアクセスを最適化するために、これは materialized view を使って次のように複製できます:

```sql
      CREATE TABLE IF NOT EXISTS work_item_label_links
      (
        id Int64,
        label_id Int64,
        target_id Int64,
        ...
      )
      ENGINE = ReplacingMergeTree(version, deleted)
      PRIMARY KEY (target_id, label_id, id) -- notice the change in keys
```

ここで重要なのは、行の更新は INSERT 文として扱われる（ClickHouse と基盤となるテーブルエンジンで効率的に動作するため）ということです。

そのため、上記のようなケースでは、`ReplacingMergeTree` の重複排除メカニズムにより元のテーブル `siphon_label_links` の値が正しく更新されても、最適化されたテーブルが古い行と新しい行の両方のコピーを持つ結果となり、データ整合性の問題が発生する可能性があります。

Siphon にもこれを考慮するためのメカニズムが導入されます。

##### 仕組み

上流テーブルでイベントをリッスンするコンシューマーは、新しい行バージョンをそのまま挿入することはしません。
代わりに、古い行を削除する行と新しいバージョンを挿入する行の 2 行を挿入します。
これは、materialized view に基づく下流テーブルの行に対する削除カスケードとして機能します。

#### 5. クエリインターフェイスのオプション {#5-query-interface-options}

**パターン**: 統一された高性能なクエリ API でデータにアクセスする

**アクセス方法:**

1. **DIP + GraphQL API**: アプリケーション機能のための統一された安全なアクセス
2. **GLQL 統合（設計と調査が必要）**: 高度な分析のための将来の GitLab Query Language サポート
3. **直接 ClickHouse**: 高性能クエリ用、または API での実装が利用できない場合用

統一された抽象化としての Data Insights Platform (DIP) は、ClickHouse に保存されている分析データのクエリも可能にします。

クエリ API の詳細については、それについて詳しく議論する別の [ブループリント](/handbook/engineering/architecture/design-documents/data_insights_platform_querying_api/) があるため、その詳細には立ち入りません。

データを一貫し統一された方法でクエリできるため、API はデータと対話する推奨される方法です。
これは DIP に含まれる [gRPC サービス](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/blob/dc60c9ab85b112fde114dcd5b15bd0a82c506ed6/pkg/proto/gitlab/platform/query/v1/service.proto) として実装されており、各 RPC メソッドはそれに関連するスキーマに固有のものとして設計されています。
ただし、対応する API メソッドがまだ設計または実装されていない場合、GitLab アプリケーション内で既存のツールを使用して ClickHouse に直接アクセスすることは引き続き可能です。詳細についてはこの [設計上の決定事項](https://gitlab.com/gitlab-org/architecture/gitlab-data-analytics/design-doc/-/blob/master/decisions/008_allow_ch_connectiviy.md) を参照してください。

以下は、クエリ API の呼び出しの例です:

```shell
$ grpcurl -plaintext -d '{
  "traversal_path": "1/9970/",
  "start_timestamp": "2023-05-01T00:00:00Z",
  "end_timestamp": "2023-05-23T00:00:00Z"
}' localhost:8083 gitlab.platform.query.v1.DataInsightsPlatformQueryService/GetWorkItemAggregations

{
  "workItems": {
    "createdWorkItemsCount": "474816",
    "closedWorkItemsCount": "119686",
    "leadTimeDuration": "1353s"
  }
}
```

### 実装フェーズ

**フェーズ 1: 基盤** (現在)

* コアテーブルの Siphon レプリケーション
* 基本的な ClickHouse テーブル構造
* 主要メトリクス用の初期 materialized view
* ドキュメントと開発者ツール

**フェーズ 2: 本番準備**

* 自動リフレッシュメカニズム
* モニタリングとアラート
* パフォーマンス最適化

**フェーズ 3: プラットフォーム拡張**

* DIP GraphQL 統合
* 追加のユースケース実装

### メリットとデメリット

メリット:

* **再利用可能なパターン**: 標準化されたアプローチが新しい分析機能の開発時間を削減する
* **リアルタイムなパフォーマンス**: ClickHouse の最適化により大規模データセットでのサブセカンドクエリ
* **運用効率**: 単一プラットフォームによりインフラストラクチャの複雑性を削減
* **スケーラビリティ**: GitLab.com 規模の要件向けに設計されたアーキテクチャ

デメリット:

* **複雑性**: 複数の技術（NATS、ClickHouse、Siphon）の理解が必要
* **データ整合性**: 結果整合性モデルがすべてのユースケースに適しているわけではない
* **リソース要件**: ClickHouse インフラストラクチャは大量のコンピューティング/ストレージリソースを必要とする
* **学習曲線**: チームは新しいパターンと技術のトレーニングを必要とする
