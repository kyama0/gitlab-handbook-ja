---
title: 内部イベントデータフロー
description: "さまざまなデプロイメントタイプにわたる内部データフローのドキュメント"
upstream_path: /handbook/engineering/data-engineering/analytics/analytics-instrumentation/technical-blueprint/current-state/internal-events-data-flows/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T02:53:44Z"
translator: claude
stale: false
---

## 概要

内部イベントのデータフローは、以下の要素によって異なります:

**デプロイメントタイプ:**

- **セルフマネージド**: お客様がホストする GitLab インスタンス
- **GitLab Dedicated**: GitLab が管理するシングルテナントクラウドインスタンス
- **GitLab.com (SaaS)**: マルチテナントクラウドオファリング

**サービス:**

- **[GitLab モノリス](https://gitlab.com/gitlab-org/gitlab)**: コア GitLab アプリケーションおよびプライマリサービス
- **[AI Gateway](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist)**: AI 機能とリクエストを処理するサービス
- **[GitLab Language Server](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)**: 言語サポートとコードインテリジェンスサービス
- **[Switchboard](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/switchboard)**: GitLab Dedicated のお客様がテナント環境を管理できるサービス

## セルフマネージドインスタンスのデータフロー（GitLab モノリス）

### 正常パスのデータフロー

以下のシーケンス図は、セルフマネージド GitLab インスタンスにおける内部イベントデータが機能使用からデータウェアハウスまでどのように流れるかを示しています:

```mermaid
sequenceDiagram
    participant Monolith as GitLab Monolith
    participant Gateway as AWS Load Balancer
    participant Collector as Snowplow Collector
    participant Kinesis as AWS Kinesis
    participant Enricher as Snowplow Enricher
    participant Iglu as GitLab Iglu Schema
    participant Firehose as AWS Firehose
    participant Lambda as AWS Lambda
    participant S3 as AWS S3
    participant SQS as Amazon SQS
    participant Snowpipe as Snowpipe
    participant Snowflake as Snowflake

    Note over Monolith: User interacts with GitLab features
    Monolith->>Monolith: Execute track_internal_event() calls<br/>(Ruby) or trackEvent() calls (JS)
    Monolith->>Gateway: Send JSON payload to<br/>snowplowprd.trx.gitlab.net
    Gateway->>Collector: Route to autoscaling group<br/>running collector VMs
    Collector->>Collector: Validate event payload
    Collector->>Kinesis: Route to "good events" or<br/>"bad events" streams
    Kinesis->>Enricher: Consume good events via<br/>second autoscaling group
    Enricher->>Iglu: Refer to schema repository
    Iglu->>Enricher: Return schema for enrichment
    Enricher->>Kinesis: Send enriched events
    Kinesis->>Firehose: Consume enriched events
    Firehose->>Lambda: Process events
    Lambda->>S3: Store events in bucket
    S3->>SQS: Send notification for new file
    SQS->>Snowpipe: Trigger data ingestion
    Snowpipe->>S3: Read data from bucket
    Snowpipe->>Snowflake: Load data into warehouse
```

### データフローの説明

内部イベントトラッキングには GitLab 18.0+ が必要で、セルフマネージドインスタンスではお客様のオプトインが必要です。

**イベント生成**: インストルメントされた機能とのユーザーインタラクションにより、Ruby では `track_internal_event()` 呼び出し、JavaScript では `trackEvent()` 呼び出し（Ruby メソッドを API 経由でラップしたもの）がトリガーされます。

**収集**: イベントは JSON ペイロードとして `snowplowprd.trx.gitlab.net` の Snowplow コレクターに送信されます。エンドポイントはオートスケーリンググループで動作する Snowplow コレクター VM にトラフィックをルーティングする AWS ロードバランサーです。

**検証とルーティング**: コレクターは JSON 構造を検証し、有効なデータの「良好なイベント」と無効なデータの「不良なイベント」の AWS Kinesis ストリームにイベントをルーティングします。

**エンリッチメント**: Snowplow エンリッチャー VM を実行する 2番目のオートスケーリンググループが Kinesis から良好なイベントを消費し、GitLab Iglu スキーマリポジトリを参照して検証とエンリッチメントを行い、処理済みイベントを Kinesis に返します。

**ストレージパイプライン**: AWS Firehose がエンリッチされた Kinesis イベントを消費し、Lambda 関数でそれらを処理し、最終的に Firehose がトランスフォームされたデータを S3 バケットに書き込みます。

**データウェアハウス**: S3 へのファイル到着により Amazon SQS に送信されたイベント通知が生成され、Snowpipe がデータを自動的に Snowflake にロードするよう起動されます。

### 失敗パスのデータフロー

以下の図は、イベント処理中に発生する可能性のある 2つの検証失敗パスを示しています:

```mermaid
sequenceDiagram
    participant Monolith as GitLab Monolith
    participant Gateway as AWS Load Balancer
    participant Collector as Snowplow Collector
    participant BadKinesis as Bad Events Kinesis
    participant BadFirehose as Bad Events Firehose
    participant Enricher as Snowplow Enricher
    participant Iglu as GitLab Iglu Schema
    participant EnrichedBadKinesis as Enriched Bad Events Kinesis
    participant EnrichedBadFirehose as Enriched Bad Events Firehose
    participant S3 as AWS S3
    participant SQS as Amazon SQS
    participant Snowpipe as Snowpipe
    participant Snowflake as Snowflake

    Note over Monolith,Collector: Failure Path 1: JSON Structure Validation
    Monolith->>Gateway: Send malformed JSON payload
    Gateway->>Collector: Route to collector VMs
    Collector->>Collector: Validate JSON structure
    Collector-->>BadKinesis: JSON validation fails
    BadKinesis->>BadFirehose: Route bad events
    BadFirehose->>S3: Store in bad_event folder

    Note over Enricher,Snowflake: Failure Path 2: Schema Validation
    Enricher->>Iglu: Request schema validation
    Iglu-->>Enricher: Schema validation fails
    Enricher->>EnrichedBadKinesis: Send to enriched bad events
    EnrichedBadKinesis->>EnrichedBadFirehose: Route enriched bad events
    EnrichedBadFirehose->>S3: Store in enriched_bad_event folder
    S3->>SQS: Notify new enriched bad event file
    SQS->>Snowpipe: Trigger ingestion
    Snowpipe->>Snowflake: Load enriched bad events data
```

#### 失敗パスの説明

内部イベントパイプラインには 2つの検証失敗ポイントがあります:

**JSON 構造検証の失敗**: 1番目のオートスケーリンググループ（コレクター）は受信ペイロードの基本的な JSON 構造を検証します。検証が失敗すると、イベントは専用の「不良なイベント」Kinesis ストリームにルーティングされ、Firehose によって処理されて S3 の `bad_event` フォルダーに保存されます。`bad_event` フォルダーに保存されたペイロードは Snowflake に取り込まれません。

**スキーマ検証の失敗**: 2番目のオートスケーリンググループ（エンリッチャー）は、GitLab の Iglu スキーマリポジトリに対してイベントを検証します。スキーマ検証が失敗すると、イベントは「エンリッチされた不良なイベント」Kinesis ストリームに送信され、Firehose で処理されて S3 の `enriched_bad_event` フォルダーに保存されます。これらのイベントは下流の処理パイプラインに従います。S3 通知が SQS 経由で Snowpipe を起動し、分析とデバッグのためにエンリッチされた不良なイベントデータが Snowflake に取り込まれます。
