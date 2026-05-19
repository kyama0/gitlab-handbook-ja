---
title: "分散トレーシング機能"
status: proposed
creation-date: "2023-06-20"
authors: [ "@mappelman" ]
approvers: [ "@hbenson", "@nicholasklick" ]
owning-stage: "~devops::monitor"
participating-stages: []
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/observability_tracing/"
upstream_sha: "856dbb5acbecaff51b3ea0c961ad3adb3d37a953"
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-23T15:08:44-08:00"
---


{{< engineering/design-document-header >}}


## 概要

GitLab にはすでに分散トレーシング機能があります。そのため、この提案は機能を GA（一般提供）にするために必要な変更に焦点を当てています。動機セクションで詳しく説明する戦略的方向性の更新を踏まえて、GitLab Observability UI（GOUI）を廃止し、GitLab UI でトレーシング用のネイティブ UI を構築する方向で進めています。

この提案は、新しい UI、API の変更、新しい方向性をサポートするためのバックエンドの変更を含む、GA でリリースされる内容と技術的アプローチのスコープをカバーします。

分散トレーシングは Premium 機能として GA になり、当初は Premium および Ultimate ユーザーのみが利用できます。

## 動機

2021年12月に GitLab は OpsTrace を買収し、オブザーバビリティ機能を DevOps プラットフォームに統合する作業を開始しました。その時点での目標は、GitLab とは独立して実行でき、DevSecOps プラットフォームとうまく統合されたオブザーバビリティディストリビューションを作成することでした。以前の戦略の背景については [Internal Only- Argus FAQ](https://docs.google.com/document/d/1eWZhbRdgQx74udzZjpSMgWnHfpYWETD7AWqnPVD5Sm8/edit) を参照してください。

2021年12月以来、世界と GitLab に多くの変化がありました。GitLab は、機能の断片化を避け、単一の UX を確保するために、オブザーバビリティを GitLab UI 内でネイティブに構築すべきであると考えています。そのため、2021年12月に Grafana のフォークとして始まった GitLab Observability UI を廃止します。

GitLab Observability アーキテクチャと機能の多くは Grafana のフォークを中心に構築されていました。そのため、この提案は次の高レベルの目標を達成するための提案シリーズの一部です。

## Observability グループの目標

以下のグループレベルの目標はコンテキストとして含まれています。**以下の目標はこの設計では完全にカバーされていません。この設計は分散トレーシングに焦点を当てています。ロギング、メトリクス、オートモニター等については、さらに設計ドキュメントが作成されます。**

**タイムライン**: 2024年12月以前に以下を完了

**目標**:

- 完全な（メトリクス、ログ、トレース）オブザーバビリティプラットフォームの GA - GitLab.com のサービスとセルフマネージドユーザー向けの GA を含む、トレーシング、メトリクス、ロギングのデフォルトオン設定を追加する。ユーザーはオープンソースのトレーサーを使用してマイクロサービスや分散システムをトレースできます。さらに、ユーザーはサンプリングのデフォルト設定や、テールベースのサンプリングなどの高度な手法を使用できるべきです。

- カスタマイズされたトリアージワークフロー - ユーザーはメトリクス、ログ、スパン/トレース間のつながりを理解する必要があります。種類に関係なく、すべてのテレメトリデータの発見、クエリ、接続のための設計は、ユーザーが重要なアラートとインシデントをより迅速に解決するのに役立ちます。

- オートモニター - 開発者が新しいプロジェクトを開始すると、アプリケーションは自動的にインストルメント化され、アラートが設定されて GitLab アラート管理にリンクされ、スケジュールが作成され、重要なアラートに対してインシデントが作成されます。

### 目標

最小限の機能セットで価値があるが、イテレーションできる GitLab.com SaaS の一部として、一般提供の分散トレーシング機能をリリースすることです。

具体的な目標:

- [GitLab Observability Backend](https://gitlab.com/gitlab-org/opstrace/opstrace) プロジェクトに実装された HTTPS 書き込み API で、[OTLP（OpenTelemetry Protocol）](https://opentelemetry.io/docs/specs/otel/protocol/)を使用して GitLab に送信されたスパンを受信します。ユーザーは [OpenTelemetry SDK](https://opentelemetry.io/docs/collector/deployment/no-collector/) または [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/) を使用して分散トレースを収集・送信できます。
- ID、サービス、属性、時間でトレースをリストおよびフィルタリング/検索する UI
- トレースとそれに対応するスパンの詳細ビューを表示する UI
- すべての GitLab ティアに対して、トップレベルのネームスペースごとに合理的なインジェストとストレージの制限を適用する

## タイムライン

グループの目標を達成するために、トレーシングの [GitLab フェーズドロールアウト](https://docs.gitlab.com/policy/development_stages_support/)の以下のタイムラインを満たす必要があります。

- **トレーシング実験リリース**: 16.2
- **トレーシングベータリリース**: 16.3
- **トレーシング GA リリース**: 16.4

## 提案

提案されたアーキテクチャの多くはすでに存在し、GitLab.com で運用されています。分散トレーシングはかなり長い間内部の **Beta** 状態にあり、内部ユーザーがいます。GA への進捗は UX 要件によってブロックされています。これらの UX 要件により、新しい UI 戦略が生まれました。

以下の図は GitLab Observability Backend のアーキテクチャと、GitLab UI を含むクライアントがそれとどのように相互作用するかを概説しています。

<img src="/images/engineering/architecture/design-documents/observability_tracing/arch.png" alt="">

### 主要コンポーネント

- Gatekeeper: すべての受信リクエストの認証、認可、レート制限の実施を担当します。NGINX-Ingress は Gatekeeper と直接相互作用します。
- Ingress: NGINX-Ingress はすべての受信リクエストを処理するために使用されます。
- ClickHouse: ClickHouse はすべてのオブザーバビリティデータのバッキングストアです。
- Query Service: クエリに応じて ClickHouse からデータを取得する水平スケーラブルなサービス。
- GitLab UI: GitLab.com でホストされている UI
- Redis: GitLab API レスポンスをキャッシュするための HA Redis クラスター

### データインジェスト

各トップレベルの GitLab ネームスペースに対して1つのデータインジェストパイプラインがデプロイされます。現在は_オブザーバビリティを有効にした各 GitLab グループごとに_ 1つのパイプラインをデプロイしていますが、このアーキテクチャはマルチテナントの Grafana インスタンスがなくなった状態では不必要に高コストで複雑です。このマルチテナントのインジェストシステムには以下の利点があります:

- レート制限を超えて、各ユーザーパイプラインに割り当てられた以上のシステムリソース（メモリ、CPU）を誰も奪えないようにユーザーごとのリソース制限を実施できます。
- より多くの OTEL Collector インスタンスを追加することで、各ユーザーパイプラインの水平スケーリングを細粒度で制御できます。
- ユーザーのテナントを GitLab サブスクリプションティアに応じて管理できます。例えば、クォータ、スループット、コールドストレージ、異なるデータベースへのシャーディング。
- データがせいぜい単一のユーザー/顧客に属する [OpenTelemetry Collector](https://opentelemetry.io/docs/concepts/components/#collector) などのオフザシェルフコンポーネントを活用することで、パイプラインの複雑さを軽減してセキュリティを強化します。

パイプラインは、ユーザーがエラートラッキングのようにプロジェクト設定でオブザーバビリティを有効にした場合にのみデプロイされます。ユーザーのネームスペース内のプロジェクトでオブザーバビリティが有効になると、パイプラインがデプロイされます。このデプロイは Kubernetes スケジューラーオペレーターとテナントオペレーターによって自動化されています。プロビジョニングは現在 iframe を通じて管理されていますが、優先される方法は RESTful API を使用してプロビジョニングすることです。GitLab UI のプロジェクト設定にセクションがあり、ユーザーは今日のエラートラッキングと同じようにオブザーバビリティを有効にできるようになります。

OpenTelemetry Collector は、レシーバー、プロセッサー、エクスポーターの優れたコミュニティ開発のためのコアパイプライン実装として使用されます。[ClickHouse 向けのエクスポーターがコミュニティで出現しており](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/clickhouseexporter)、現在 OpenTelemetry のトレース、メトリクス、ログをサポートしています。これを活用することで、トレースだけでなくメトリクスとログのインジェストに向けた取り組みを加速できます。

### 制限

各インジェストパイプラインの既存の CPU とメモリの制限に加えて、以下の制限とクォータも実施されます:

- トップレベルのネームスペースごとに毎秒 100KB（この値は 1MB に増加する可能性あり）のトレースの合計インジェストレート
- 30 日のデータ保持
- 未定 GB の合計ストレージ

上記のすべての制限は変更される可能性があり、トップレベルのネームスペースの設定によって決定されます。これにより、各ユーザーまたはサブスクリプションティアのスクリプトや将来の機能を構築してこれらをより動的にできます。この設定はテナントオペレーターのカスタムリソースの一部になります。

インジェストレート制限は内部 Redis クラスターを使用して、[Cloudflare のようなシンプルでパフォーマンスの高いスライディングウィンドウレート制限](https://blog.cloudflare.com/counting-things-a-lot-of-different-things/)を実行します。このコードは Redis への接続がすでに管理されている Gatekeeper に置かれます。

データ保持と合計ストレージの制限は、ClickHouse を定期的にクエリしてクォータが超過しなくなるまで最も古い1日全体のデータを継続的に削除するテナントオペレーターのコントロールループによって実施されます。これを効率的に行うために、ClickHouse テーブルが `toDate(timestamp)` を使用して日ごとにパーティション化されていることが重要です。

### クエリ API

クエリサービスによって支えられるクエリ API は、UI にトレース/スパンを返す集中型で水平スケーラブルなコンポーネントとなります。このクエリサービスの良い出発点は、Jaeger クエリサービスのコードと [Jaeger クエリサービス swagger](https://github.com/Jaegertracing/Jaeger-idl/blob/main/swagger/api_v3/query_service.swagger.json) を活用することかもしれません。このクエリサービスは将来的にメトリクスとログのサポートを含むよう拡張され、GitLab UI の vue.js コードによって直接クエリされます。

GA のスコープには2つの API が含まれます:

- `/v1/traces` は[この仕様](https://github.com/Jaegertracing/Jaeger-idl/blob/main/swagger/api_v3/query_service.swagger.json#L64)に従います
- `/v1/traces/{trace_ID}` は[この仕様](https://github.com/Jaegertracing/Jaeger-idl/blob/main/swagger/api_v3/query_service.swagger.json#L142)に従います

### 認証と認可

<!-- markdownlint-disable-next-line MD044 -->
GitLab Observability Backend は[インスタンス全体の信頼された GitLab OAuth](https://docs.gitlab.com/ee/integration/oauth_provider.html#create-an-instance-wide-application) トークンを使用して、GitLab ユーザーを GitLab Observability Backend（GOB）に対して認証するシームレスな OAuth フローを実行します。GOB は認証セッションを作成し、セッション識別子を HTTP のみのセキュアな Cookie に格納します。このメカニズムはすでに AppSec によって審査・承認されています。オブザーバビリティ UI が GitLab.com でホストされる UI にネイティブになったことで、以前依存していた埋め込み iframe（observe.gitLab.com）に対して新しい UI ドメイン（GitLab.com）に対して認証が機能するように小さな調整が必要です。

非表示の iframe が GitLab UI に埋め込まれ、GOB で認証された API を消費する必要があるページでのみ使用されます。これにより GitLab.com UI が Rails の中間プロキシレイヤーを必要とせずに GOB API と直接通信でき、プロキシと GOB 間のよりセキュリティの低い共有トークンに依存することなくなります。この iframe は非表示で、その唯一の目的は OAuth フローを実行して GOB ユーザーセッションを含む HTTP のみのセキュアな Cookie を割り当てることです。このフローはシームレスでユーザーから完全に非表示にできます。**信頼された** GitLab OAuth フローであるためです。セッションは現在 30 日後に期限切れになり、GOB デプロイ Terraform で設定可能です。

<!-- markdownlint-disable-next-line MD044 -->
この方法を使用して GitLab.com から observe.gitLab.com へのリクエストを直接許可するには、すべてのリクエストに Cookie を含めるために `{withCredentials: true}` を含める必要があります。GitLab.com がトレーシングデータのためにクエリするこれらの「読み取り専用」API では、次のことが必要です:

- `"NGINX.Ingress.Kubernetes.io/cors-allow-credentials": "true"` と `"NGINX.Ingress.Kubernetes.io/cors-allow-origin": "GitLab.com"` で Ingress を設定する
- Gatekeeper コンポーネントに効果的な CSRF 保護が有効になっていることを確認する（Gatekeeper はリクエストの認可を担当）

<!-- markdownlint-disable-next-line MD044 -->
GitLab.com からのすべてのリクエストには、observe.gitLab.com が検証するための GOB セッション Cookie が含まれます。認可は、GitLab に対してグループ/プロジェクトのメンバーシップを確認し、適切にアクセスを処理する Gatekeeper コンポーネントによって処理されます。そのプロジェクトの継承された開発者以上のメンバーシップを持つ人誰でも、そのプロジェクトのトレーシング UI にアクセスできます。

### データベーススキーマ

[ClickHouse 向けのコミュニティ開発の OTEL エクスポーター](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/clickhouseexporter)はすでにトレースとスパンを格納するためのデータベーススキーマを実装しています。[ClickHouse のこのブログ記事](https://clickhouse.com/blog/storing-traces-and-spans-open-telemetry-in-clickhouse)はコミュニティ開発のエクスポーターの詳細をさらに掘り下げており、実験とベータフェーズ中にテストする出発点としてこの提案されたスキーマ設計を使用する予定です。スキーマと対応する SQL クエリについてより詳しく学ぶためにブログ記事を読むことをお勧めします。

### UI 設計

新しい UI は GitLab UX デザイン標準に従って Pajamas デザインシステムを使用して構築されます。UI は `{withCredentials: true}` で `observe.gitLab.com/v1/query` サブドメインにフェッチを送信することで、vue.js から GOB クエリサービスと直接やり取りします（上記のアーキテクチャ図を参照）。これがどのように有効になるかの詳細については、認証と認可のセクションを参照してください。

**TODO Figma UI デザインとコメント**

## イテレーション

16.2

- グループ CR に関連付けられたすべてのリソースをテナント CR に移行する
- [Clickhouse エクスポーターをフォークしてビルドする](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/clickhouseexporter)
- すべてのトレース/スパンに project_ID を追加する
- Gatekeeper: グループレベルではなくプロジェクトレベルでメンバーシップを確認する
- トレースをリストするための基本的なクエリサービス（フィルタリング/検索なし）
- iframe ベースの OAuth メカニズムを実装する（GOUI のために行ったことを再利用/適応する）
- トレースリストの UI

16.3

- フィルタリング/検索クエリサービス（traceID、サービス、ステータス、期間の最小/最大、開始/終了時間、スパン属性によるフィルタリング）
- プロジェクトアクセストークンに `read_observability` と `write_observability` スコープを追加し、プロジェクトレベルのインジェスト API への書き込みのためのプロジェクトアクセストークンをサポート
- プロビジョニング API
- 既存の iframe プロビジョニングを削除する
- トレース詳細の UI
- トレースのフィルタリング/検索の UI
- プロビジョニング、データ送信、UI でのクエリのための基本的な e2e テスト
- メトリクス、ダッシュボード、アラート

16.4

- 「オブザーバビリティを有効にする」UI 設定ページ（プロビジョニング API と相互作用する）
- 本番準備レビュー
- ドキュメント完成
- GitLabNamespace CR をテナント（つまりトップレベルのネームスペース）のみを表すように変更する
- グループ CR と対応するコントローラーを削除する
- まだ追加されていない e2e テスト
- クラスター内スモークテスト
