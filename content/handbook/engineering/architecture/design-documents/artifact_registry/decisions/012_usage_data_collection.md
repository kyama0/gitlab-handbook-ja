---
title: "Artifact Registry ADR 012: 使用状況データ収集"
owning-stage: "~devops::package"
description: "SaaS および Self-Managed のデプロイにまたがるプロダクトアナリティクスとビジネスインテリジェンスのために、Artifact Registry が使用状況データを収集する方法に関する決定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/012_usage_data_collection/
upstream_sha: ae7cb222d67ee0dd31f3319c8c70f0fabda2633b
lastmod: "2026-11-17T11:47:24+01:00"
translated_at: "2026-11-17T21:28:02.744958+00:00"
translator: codex
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## 背景 {#context}

Artifact Registry には、プロダクト分析とビジネスインテリジェンスのための利用データと、それとは別に課金イベントが必要です。
利用データは、どの形式が最も採用されているか、アーティファクトの push と pull が何回行われるか、ストレージがどう増加するか、何人のユーザーがレジストリを使うか、仮想リポジトリがどの程度の頻度でキャッシュにヒットするか、といった質問に答えます。

Artifact Registry は、Rails モノリスの外にある Go サービスです（[ADR-006](006_technology_stack.md)）。
GitLab の主要な計測フレームワークである [Internal Event Tracking](https://docs.gitlab.com/ee/development/internal_analytics/) は、モノリスを中心に Snowplow 上に構築されています。
Snowplow のイベントは、コレクターから仮名化を行うパイプラインを通り、Snowflake のウェアハウスへ流れます。
[LabKit v2](https://gitlab.com/gitlab-org/labkit) は、Go サービスに推奨する経路である、ネイティブの Snowplow トラッカーを提供します。
イベントはバックグラウンドでバッチ送信し、再試行も行います。
AI Gateway や GitLab Language Server など、他のサテライトサービスも、すでに Snowplow にイベントを直接送信しています。

収集は、GitLab.com、Self-Managed、GitLab Dedicated のすべてのデプロイ環境で動作する必要があります。

## 決定 {#decision}

**Artifact Registry は、利用データの唯一の仕組みとして LabKit v2 の Snowplow トラッカーを使い、サービスから Snowplow コレクターへイベントを直接送信します。**
各イベントは、push、pull、削除など、発生したことを記録します。
利用データはベストエフォートです。
課金は利用データとは異なり、信頼性が必要であるため、独自のルールに従います（[課金イベント](#billing-events)）。

GitLab.com では、利用データを常に有効にします。
Self-Managed と Dedicated はデフォルトで送信し、管理者はオプトアウトできます。

Service Ping などによる集計メトリクスは対象外です（[オプトアウトしたインスタンス向けの Service Ping](#service-ping-for-opt-out-instances)）。
リクエストの遅延やエラー率などの運用メトリクスは利用データではなく、この ADR では扱いません。

### 常に満たすべき条件 {#what-must-always-hold}

| # | 制約 | 機械的に検証可能か？ |
| --- | --- | --- |
| 1 | **イベントは Snowplow に直接送信します。** すべてのデプロイ環境で、サービス自身が GitLab の Snowplow コレクターに分析イベントを送信します。分析イベントは、Rails や他のサービスを経由しません。 | はい：分析イベントは、設定されたコレクターに向けてのみサービスから送信します |
| 2 | **分析はベストエフォートです。** 追跡はサービス自身のプロセス内で実行し、他のサービスを待たないため、コレクターの遅延や障害がリクエストの遅延や失敗を招くことはありません。再起動や停止による分析イベントの損失は許容します。 | はい：コレクターが応答しても、停滞しても、停止していても、リクエストは同じように完了します |
| 3 | **オプトアウトで停止するのは分析であり、課金ではありません。** オプトアウトしたインスタンスは分析イベントを送信しません。課金イベントには、オプトアウトを適用しません。 | はい：オプトアウトを設定すると、分析イベントはインスタンスから送信せず、課金イベントは引き続き送信します |
| 4 | **課金イベントを黙って失うことはありません。** 課金の配信は、プロセスの再起動やコレクターの停止に耐え、再送するイベントは同じイベント ID を保持するため、1 回だけ計上します。 | はい：再起動前または停止中にキューに入れた課金イベントは、その後、元のイベント ID のまま配信します |
| 5 | **課金は分析と別に送信します。** GitLab.com では、課金イベントを別のトラッカーで認証付きの課金コレクターに送信します。サービスは、LabKit v2 の課金 API を使わず、独自の [`billable_usage`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/billable_usage/jsonschema) コンテキストを構築します。 | はい：GitLab.com では、課金イベントは課金コレクターにのみ到達し、分析イベントはそこに到達しません |
| 6 | **すべての分析イベントが両方のコンテキストを持ちます。** [`gitlab_standard`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/gitlab_standard/jsonschema) は、共通のアイデンティティと環境のフィールドを保持し、イベントをモノリスと同じウェアハウスの列に格納します。[`artifact_registry_context`](https://gitlab.com/gitlab-org/iglu/-/tree/master/public/schemas/com.gitlab/artifact_registry_context/jsonschema) は、形式やリポジトリ種別など、AR 固有のディメンションを保持します。イベント固有の一度限りの情報は、そのイベント自身のペイロードに入れます。繰り返し使う AR 固有のディメンションにウェアハウスの専用列が必要な場合は、新しいマイナーバージョンで `artifact_registry_context` を拡張します。 | 一部：すべてのイベントが両方のコンテキストを持つことは検証できますが、新しいディメンションをどこに置くかは判断が必要です |
| 7 | **識別子は安定しています。** サービスが UUID だけを保存するため、分析イベントは、組織を整数 ID ではなく UUID で指定します（[ADR-022](022_namespace_decoupling.md)）。スラッグは管理者による再取得で変わる場合があるため、ネームスペースやリポジトリは、読みやすいスラッグや名前とともに、結合キーである UUID を送信します。 | はい：組織の整数 ID を持つ分析イベントはなく、ネームスペースやリポジトリを指定する分析イベントは、必ずその UUID を持ちます |
| 8 | **AR のネームスペースが計測の境界です。** 分析イベントは `artifact_registry_context` に、課金イベントは `billable_usage.metadata` に `ar_namespace_id` を持つため、両方を同じ粒度で集計します。組織の UUID を使って、ネームスペースを組織単位に集計します。課金パイプラインは、`billable_usage` のトップレベルのフィールドと `metadata` だけを読み取り、カスタムコンテキストは読み取らないため、AR 固有の課金ディメンションは、すべて `metadata` に入れます。 | はい：すべての課金イベントはメタデータに `ar_namespace_id` を持ち、ネームスペースに関するすべての分析イベントは、AR コンテキストにそれを持ちます |
| 9 | **pull イベントは、実際の配信モードで観測できる最も強いシグナルを報告します。** プロキシされた pull は、ペイロードのコピーが正常に完了した後にのみ発生します。リダイレクトされた pull は、サービスがリダイレクトを発行したときに発生します。イベントには、設定されたモードではなく、レスポンスで実際に使ったモードを記録します。 | はい：プロキシされた pull は、正常なコピーの後に 1 つのイベントを出力し、コピーが途中で終わった場合は出力しません。リダイレクトは、発行時に 1 つ出力し、各イベントは使用したモードを持ちます |
| 10 | **課金量をリダイレクトモードの pull イベントに基づいて算出することはありません。** サービスがストリーミングしなかったバイト数は、ストレージと CDN のアクセスログから取得します。 | はい：課金量に、リダイレクトモードの pull イベントを計上することはありません |

### pull イベントが発生するタイミング {#when-a-pull-event-fires}

ステータスを確定した後にレスポンスが失敗する可能性があると、「ダウンロードの成功」は曖昧になります。
プロキシモードでは、サービスがバイト列をストリーミングするため、配信が完了したかどうかを把握できます。
ステータスの確定後にクライアントが切断したり、ストレージの読み取りに障害が起きたりした場合は、何も出力しません。部分的な転送はダウンロードではないためです。
リダイレクトモードでは、サービスは署名済みのストレージ URL または CDN URL をクライアントに渡し、転送を観測することはありません。
リダイレクトを発行するときだけが観測できる時点であり、それを 1 回の pull と数えます。
プロキシモードをリダイレクトのルールに合わせて制限すると、サービスが持つ配信シグナルを捨てることになります。また、リダイレクトモードをプロキシのルールに合わせて強化することは不可能です。

[ADR-005](005_artifact_delivery_mode.md)では、ネームスペースがインスタンスの配信モードを上書きできるため、同じアーティファクトを、どちらのルールでも計数する場合があります。
2 つのモードは、確信度が異なります。
リダイレクトモードの pull は、クライアントがリダイレクトをたどらなければ過大計数になり、1 つの署名済み URL が有効期間内に複数の転送に使われたり、CDN が 1 回のオリジンからの取得で多くのクライアントに配信したりすると、過小計数になります。
イベントはモードを持つため、分析で両者を区別できます。両方を合算すると、異なる 2 つの確信度を混ぜることになります。
課金量をリダイレクトモードのイベントに基づいて算出することはできません。ストレージまたは CDN のアクセスログが必要です。

### 課金イベント {#billing-events}

計測対象は、デプロイ環境ごとに異なります。

| 計測対象 | GitLab.com | 接続された Self-Managed と Dedicated | エアギャップの Self-Managed（オフラインライセンス） |
| --- | --- | --- | --- |
| コンポーネントのバージョン | はい | はい | イベントなし。Rails がサービスの日次コンポーネント数を取得し、オフラインの使用量エクスポートに含めます |
| ストレージ | はい | いいえ | いいえ |
| エグレス | はい | いいえ | いいえ |

エグレスイベントは、1 つのネームスペースと 1 つの配信モードについて、1 時間に送信したバイト数を持ちます。
サービスは、自身がストリーミングしたバイト数を数えます。
リダイレクトされた転送は観測しないため、[pull イベントが発生するタイミング](#when-a-pull-event-fires)で求めるとおり、そのバイト数はストレージと CDN のアクセスログから取得します（[ADR-029（社内向け）](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/artifact_registry/decisions/029_egress_metering/)）。

エアギャップ環境での取得は、[オプトアウトしたインスタンス向けの Service Ping](#service-ping-for-opt-out-instances)で却下した Service Ping API ではありません。ネームスペースごとに保存された 1 つの日次数を読み取るため、カーディナリティとクエリコストは小さいままです。

課金のキーは、GitLab.com ではネームスペースの課金アンカー（[ADR-022](022_namespace_decoupling.md)）、Self-Managed と Dedicated ではインスタンスの `unique_instance_id` です。

### 導入手順 {#adoption-path}

1. push、pull、削除、リポジトリ作成などの主要な操作について、それぞれ両方のコンテキストを持つ分析イベントを導入します。
1. 分析のフェーズとは独立して、各デプロイ環境の計測対象に対する課金イベントを導入します。
1. プロダクト分析の要望に応じて、イベントとディメンションを追加します。

## 検討した代替案 {#alternatives-considered}

### 何もしない {#do-nothing}

利用データや課金イベントなしで提供します。
却下理由：前述の採用状況や利用状況に関する質問に答えるものがなくなり、GitLab Credits による従量課金には課金イベントが必要です。

### すべてのイベントを Rails 経由にする {#route-all-events-through-rails}

サービスが、内部 API を通じてすべてのイベントをモノリスに送信し、モノリスが Internal Event Tracking で追跡します。
却下理由：

- 追跡するすべての操作がモノリスへの呼び出しになり、リクエスト経路に実行時の依存関係、または 2 つのサービス間にジョブキューが生じます。
- モノリスの遅延や停止が追跡を劣化させたり妨げたりする一方、プロセス内のエミッターは他のサービスに依存しません。
- LabKit v2 はモノリスと同じ Snowplow パイプラインに送信するため、追加のホップに利点はありません。
- 他のサテライトサービスは、すでに Snowplow に直接送信しており、そのパターンから外れることになります。

### OpenTelemetry から ClickHouse へ {#opentelemetry-to-clickhouse}

[CI Job Telemetry](/handbook/engineering/architecture/design-documents/ci_job_telemetry/) のパターンに従い、ClickHouse に書き込むコレクターに OTLP トレースとメトリクスを送信し、Snowflake の代わりにそこで分析します。
却下理由：

- CI Job Telemetry が扱うのは運用トレースです。利用データはプロダクト分析であり、クエリも利用者も異なります。
- ClickHouse はすべてのデプロイ環境で利用できるわけではなく、Snowplow と Snowflake が、確立されたプロダクト分析の技術スタックです。
- Analytics Instrumentation チームが Snowplow パイプラインと Snowflake ウェアハウスを所有し、Product Manager とアナリストが Snowflake をクエリしています。ClickHouse には、新しいクエリ基盤とデータモデルが必要です。
- この選択は固定ではありません。ClickHouse が標準の分析ストアになれば、サービスを変更せずに、パイプラインで Snowplow イベントの送信先を切り替えられます。

### オプトアウトしたインスタンス向けの Service Ping {#service-ping-for-opt-out-instances}

Snowplow に加え、毎週の Service Ping 実行時に Rails がクエリする内部 API を公開し、Snowplow からオプトアウトしたインスタンスもカバーする集計メトリクスを提供します。
却下理由：

- Service Ping は、メトリクスごとに毎週 1 つの数値を送信します。形式、リポジトリ種別、認証方法、組織、アップストリーム種別などのディメンションを組み合わせると、多数のメトリクスの派生形になります。Service Ping では、それらを平坦化するか、数百の事前集計されたメトリクス定義が必要になります。Snowplow は、各イベントにディメンションを保存します。
- SQL でメトリクスを計算すると、ネームスペースでパーティション分割され、GitLab.com で何十億行にも増加するテーブルを、毎回走査することになります（[ADR-007](007_database_schema.md)、[ADR-003](003_system_requirements.md)）。ウェアハウスには、本番データベースに触れずに、すでに同じデータがあります。
- SQL の代わりに Redis カウンターを使うと、有効期限やフラッシュ後の復旧を伴う運用上の依存関係と、すべての push と pull での計測ポイントが増えます。Snowplow は、その場所ですでに同じデータを取得しています。
- メトリクスの定義はモノリス内にあるため、変更のたびにモノリスのチームが必要です。
- オプトアウトした顧客は、データを共有しないことを選びました。カバレッジの不足は限定的であり、その意図と一致します。
- オプトアウト率が分かった後、プロダクトにそれらのインスタンスの集計カバレッジが必要になれば、後の ADR で再検討できます。

## 影響 {#consequences}

### 利点 {#positive}

1. 既存の Snowplow パイプラインと Snowflake ウェアハウスを使い、新しいインフラなしでイベント単位の分析を実現します。
1. 分析のために Rails と調整せず、1 つの仕組みと 1 つのコード経路を使います。
1. イベントが既存の仮名化パイプラインを通る、プライバシーを標準とした設計です。
1. Organization にアンカーしたアーキテクチャに沿い、UUID を通じて Organization 単位で分析を集計できます（[ADR-001](001_organizations_as_anchor_point.md)）。
1. 課金に対応します。`billable_usage` コンテキストが、realm、計測単位、数量など、GitLab Credits による従量課金に必要なフィールドを提供します。

### 欠点 {#negative}

1. コンテキストのスキーマは、このリポジトリの外にある GitLab のスキーマレジストリにあります。変更したコンテキストを使うイベントが検証を通過するには、先にそこで変更を公開する必要があります。
1. オプトアウトしたインスタンスは分析を送信しませんが、課金イベントは引き続き流れます。これは、顧客の明示的な選択を踏まえて許容します。それらのインスタンスの集計カバレッジがプロダクトに必要になれば、後の ADR で Service Ping と連携できます。
1. エミッターは、分析イベントをメモリ内にバッファリングするため、再起動やオーバーフローで失います。これは分析には許容できますが、課金には許容できません。エミッターのメトリクスに、オーバーフロー率とドロップ率を表示します。

## 参考資料 {#references}

- [LabKit v2 の Snowplow トラッカー](https://gitlab.com/gitlab-org/labkit/-/tree/master/v2/events/snowplow)
- [Self-Managed と Dedicated のイベントデータ収集](https://docs.gitlab.com/administration/settings/event_data)
- [顧客の製品利用情報](/handbook/legal/privacy/customer-product-usage-information/)
- [内部イベントのデータフロー](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/technical-blueprint/current-state/internal-events-data-flows/)
