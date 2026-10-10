---
title: "Theseus ADR 008: モジュール型 HTTP API にプラットフォームの品質基準を満たす OpenAPI 仕様を同梱する"
owning-stage: ""
description: "GitLab が設計した HTTP JSON API を公開するすべてのモジュール型機能に、API Platform の品質基準を満たす OpenAPI 3.1 仕様を同梱し、その作成方法はチームに委ね、Lab Bench がひな形を生成して基準への準拠を強制するという決定。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/theseus_platform_vision/decisions/008_openapi_specification_for_modular_http_apis/
upstream_sha: 2c77a1f5b8c8a80cb7b5151ff11cfad84f98bfbb
lastmod: "2026-10-07T11:19:03+01:00"
translated_at: "2026-10-10T06:59:43+00:00"
stale: false
translator: codex
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## ステータス {#status}

**ドラフト。**

## 背景 {#context}

### 目標 {#goals}

この ADR は、モジュール型機能が HTTP API を記述するための共通の方法を定めます。

1. **ガードレール。**すべてのモジュール型 HTTP API に仕様を用意し、利用者に届く前に lint を実行し、宣言したルートを網羅していることと、破壊的変更の有無をチェックします。
1. **一貫性。**API 利用者とプラットフォームのツールは、チームごとに異なる方法ではなく、ランタイムを問わずすべてのモジュール型機能から同じ形式の契約を得られます。
1. **手作業の削減。**Lab Bench が仕様のひな形を生成し、CI が基準への準拠を強制するため、新しいモジュール型機能を構築するチームは、独自の API プロセスを設計する代わりに、動作する仕様から始められます。

### 経緯 {#background}

Theseus のモジュール型機能は、複数のランタイムで動作する HTTP サービスです。Lab Bench は現在 Rust と Go をサポートしており、ハンドラースキーマでは将来の対応に向けて Ruby と Python も挙げています（決定 [LB-D5](https://gitlab.com/gitlab-org/lab-bench/bench/-/blob/main/docs/decisions/LB-D5-assembly-runtime.md)）。モノリス内の Ruby 機能は別のケースです。

GitLab には仕様を作成する 2 つのモデルがすでに存在しますが、どちらを選ぶかについての社内標準はありません。最初に出荷されたモジュール型機能である [Artifact Registry](https://gitlab.com/gitlab-org/ops/artifact-registry/-/tree/main/api/openapi)は、[API スタイルガイド](https://gitlab.com/gitlab-org/ops/artifact-registry/-/blob/main/docs/dev/api-style.md)に従い、`api/openapi/` に OpenAPI 3.1 を手書きし、CI で Redocly による lint を実行し、テストで `kin-openapi` を使ってハンドラーを仕様と照合しています。モノリスは、[`gitlab-grape-openapi`](https://gitlab.com/gitlab-org/ruby/gems/gitlab-grape-openapi) gem を使い、Grape のエンドポイント定義から[仕様](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/api/openapi/openapi_v3.yaml)を生成しています。

生成された仕様の完全性は、ジェネレーターがコードをどこまで把握できるかに限られます。ジェネレーターが調査できないものはドキュメントに含まれず、その欠落を報告する仕組みもありません。

[ADR 001](001_protobuf_as_preferred_schema_language.md)は、契約が HTTP 境界を越える場合、proto 定義から OpenAPI を生成すると定めています。この方法には HTTP 契約の proto 定義が必要です。Lab Bench の [`config/gitlab/bench/v1/inbound.proto`](https://gitlab.com/gitlab-org/lab-bench/bench/-/blob/main/config/gitlab/bench/v1/inbound.proto)にある `HTTPEndpoint` メッセージは、`methods`、`route`、`handler` のみを持ち、リクエストやレスポンスの型はありません。一方、隣にある `GRPCEndpoint` は完全なスキーマを備えています。そのため、現在の Lab Bench の HTTP エンドポイントには、どれにも生成元となる proto がありません。

この選択は、スタイル以外にも影響します。契約テストが実質的な検証の役割を担うか、同じ内容を確認するだけになるか、破壊的変更チェックで何を比較するか、ツールへの投資がランタイムを越えて積み上がるか、言語ごとに分岐するかが決まります。後続の 3 つのエピックがこの決定を待っています。[エピック 429](https://gitlab.com/groups/gitlab-org/quality/-/work_items/429)（すべてのモジュール型機能に仕様を同梱する）、[エピック 432](https://gitlab.com/groups/gitlab-org/quality/-/work_items/432)（CI で破壊的な API 変更を阻止する）、[エピック 434](https://gitlab.com/groups/gitlab-org/quality/-/work_items/434)（契約テストフレームワーク）です。親エピックは[エピック 465](https://gitlab.com/groups/gitlab-org/quality/-/work_items/465)です。

API Platform チームは、コードと仕様の乖離を何によって防ぐかという軸で、7 つのモデルを列挙しました。コードファーストでの生成、テストで検証する仕様ファースト、生成したサーバーコードで強制する仕様ファースト、Lab Bench のシャーシで強制する仕様ファースト、`HTTPEndpoint` スキーマを通じた proto ファースト、gRPC トランスコーディングを通じた proto ファースト、そして成果物と品質基準は必須としつつ方法は指定しない成果基準です。完全な表は [`gitlab-org/gitlab#624041`](https://gitlab.com/gitlab-org/gitlab/-/work_items/624041#note_3896261398)にあります。

API Platform チームはその後、lint ルールセット案（名前付きの lint ルールをそれぞれ `error`、`warn`、`off` のいずれかに設定した設定ファイル）と、`bench.yaml` から生成したスケルトンを、Artifact Registry の 2 つの仕様とモノリスの仕様に対して検証しました。結果は [`gitlab-org/gitlab#624043`](https://gitlab.com/gitlab-org/gitlab/-/work_items/624043#note_3928667883)にあります。以下の項目 3 と 7、および影響のセクションで、その結果を引用します。

## 決定 {#decision}

**GitLab が設計した HTTP JSON API を公開するすべてのモジュール型機能には、API Platform の品質基準を満たす OpenAPI 3.1 仕様を同梱します。仕様の作成方法は、項目 5 で定めるルートの正本に関する規則を除き、指定しません。**

1. **スコープ。**GitLab が設計した外部向けおよび内部向けの HTTP JSON API に適用します。内部エンドポイントも除外せず仕様に記述し、タグを付けるか、別の内部向けドキュメントに配置することで公開ドキュメントから除外します（項目 2）。プロトコルで定義される API 群とは、GitLab が制御しない外部のプロトコル（npm、Maven、OCI のレジストリプロトコル、MCP JSON-RPC）によって契約が定められたエンドポイントです。これらは、それぞれのプロトコルのドキュメントですでに仕様が定義されています。品質基準は API 設計を規定するものであり、GitLab は lint ルールを満たすために npm や OCI などのプロトコルを変更できないため、これらは対象外です。Lab Bench はプロトコルで定義される API 群についてもルーティングする必要があるため、`HTTPEndpoint` に、ルートを名前付きドキュメントに割り当てるか、プロトコル定義であることを示す印を付けるフィールドを追加します。項目 3 の網羅性チェックでは、プロトコルで定義されたルートをスキップします。
1. **配置場所とバージョン。**各アセンブリは、コンポーネントリポジトリ内の `api/openapi/` に、1 つ以上の名前付き OpenAPI 3.1 ドキュメントを同梱します。どのドキュメントも複数のアセンブリにはまたがりません。アセンブリは独自のリスナーを持つデプロイ単位です（[LB-D20](https://gitlab.com/gitlab-org/lab-bench/bench/-/blob/main/docs/decisions/LB-D20-scaffold-layout.md)、[LB-D21](https://gitlab.com/gitlab-org/lab-bench/bench/-/blob/main/docs/decisions/LB-D21-template-split.md)）。そのため、コンポーネントごとに 1 ドキュメントとすると、独立してデプロイする API 群を 1 つのファイルにまとめることになります。ただし、1 つのアセンブリが複数の API 群を提供することは可能です。Artifact Registry は単一のリスナー上の単一アセンブリで、管理 API のドキュメント（`v1.yaml`）と内部 GitLab API のドキュメント（`gitlab-v1.yaml`）を同梱しています。1 つの API 群を持つアセンブリは、1 つのドキュメントを同梱します。
1. **API Platform チームが管理する品質基準：**GitLab 標準の lint ルールセット、宣言済みの受信 HTTP ルートの網羅性（アセンブリのドキュメント全体で、プロトコル定義のものを除くすべての宣言済みルートを、それぞれ割り当て先のドキュメントに含めること）、バージョン間の破壊的変更の検出、コンポーネントがオプトアウトする場合や内部向けドキュメントの場合を除く[公開 API リファレンス](https://gitlab.com/groups/gitlab-org/quality/-/work_items/428)への登録です。基準となるのはルールセットであり、その実行ツールは実装の詳細です。現在のツールは、Artifact Registry がすでに使用している Redocly です。
   - **ルールセット。**[ルールセット案](https://gitlab.com/gitlab-org/gitlab/-/work_items/624043#note_3928667883)は、Redocly が提供する名前付きプリセットの 1 つである `minimal` を拡張し、その他のすべてのルールを明示的に設定します。そのため、この 1 ファイルがプラットフォームの品質基準全体を表します。未解決の参照、未宣言のパスパラメーター、`operationId` の欠落、説明の欠落など、違反によって API 利用者やジェネレーターを誤解させたり、その動作を妨げたりするルールはエラーとします。実際の欠陥を示していてもクライアントの動作を壊さないルールは警告とします。純粋なスタイルのルールは無効にします。ルールセットは最低基準です。Artifact Registry が `x-gitlab-lifecycle` に対して行っているように、サービスは独自のルールを追加できます。
   - **基準の調整。**ルールセットは新しいモジュール型機能向けに設定します。モノリスの生成仕様に合わせて緩和することはしません（項目 7）。
   - **ティアのメタデータ。**モノリスのジェネレーターがデフォルトで `free` に設定する `x-gitlab-tier` は、現時点では基準に含めません。モジュール型機能にもティアが引き続き適用される可能性は十分にありますが、従量課金によってその表現方法が変わる可能性があるため、この決定では対応を設計せず、不足事項として記録します。
1. **方法はチームが選択します：**コードファーストでの生成（モノリスの Grape による方法や、ランタイム固有のジェネレーター）、仕様ファーストでの手書き（Artifact Registry の方法）、または HTTP 契約の proto 定義がある場合は proto からの生成です。いずれも、基準を満たすドキュメントを作成しなければなりません。Lab Bench サービスでは、ルート集合を除くすべてをその方法で定めます。ルート集合は `bench.yaml` に由来します（項目 5）。
1. **Lab Bench がひな形を生成し、基準への準拠を強制します**（この部分は Lab Bench の合意が必要です）。
   - **正本。**`bench.yaml` が存在する場合、ルート集合についてはこれを正本とし、それ以外のすべて、つまりリクエストとレスポンスのスキーマ、説明、例については仕様を正本とします。`bench.yaml` が存在しない場合は、仕様をすべての正本とします。
   - **ひな形の生成とビルド。**`bench build` は、ハンドラーのスケルトンにすでに適用している規則（[Lab Bench MR 140](https://gitlab.com/gitlab-org/lab-bench/bench/-/merge_requests/140)）に従います。存在しないファイルは作成しますが、作成済みのファイルの内部には一切書き込みません。各ルートのドキュメント割り当てを使用して、名前付きドキュメントごとに処理します。ドキュメントが存在しない場合、`bench build` は、そのドキュメントに割り当てられたルートから初期内容を生成します（パス、メソッド、パスパラメーター、`operationId`、基本的なグループ分け、リクエストとレスポンスのスキーマのプレースホルダー）。ドキュメントが存在する場合は、`bench build` が 2 つのルート集合を比較し、不一致があれば失敗して、追加すべき記述ブロックを出力します。生成された初期ドキュメントは出発点であり、基準に合格したものではありません。ルールセットが求める要約と説明は、引き続きチームが記述します。
   - **Lint。**ルールセットの lint は、API Platform チームが管理する CI コンポーネントを通じて、マージリクエストパイプラインとリリースパイプラインで実行します。合格した仕様がなければリリースは失敗します。`bench` バイナリの内部では実行しません（以下の Redocly に関する影響を参照）。
   - **既存サービス。**Artifact Registry のように仕様はすでにあるものの `bench.yaml` がないサービスでは、仕様から `handler: TODO` を指定した `bench.yaml` のルート記述ブロックを一度だけインポートして初期内容を生成し、各ルートを元のドキュメントに割り当てたうえで、人が一度レビューすることもできます。継続的な双方向同期はサポートしません。どちらのファイルも正本ではなくなり、どちらの方向の変換でも情報が失われるためです。
1. **ADR 001 との関係。**この ADR は ADR 001 を再検討するものではありません。HTTP アノテーションを持つ gRPC サービスなど、HTTP 契約を proto で定義している場合は、ADR 001 の proto から生成する OpenAPI が引き続き推奨です。この ADR は、生成元となる proto がない場合に ADR 001 の第 4 ステップが残す空白を埋めます。現在の Lab Bench の HTTP エンドポイントはすべてこの場合に当たります。将来 Lab Bench が `HTTPEndpoint` にリクエストとレスポンスのスキーマを追加すれば、proto からの生成も、同じ基準の下で認められる方法の 1 つになります。
1. **既存仕様の位置付け。**Artifact Registry の両方のドキュメントは、現在、ルールセット案にエラーなしで合格します。内部 GitLab API のドキュメントには `operation-tag-defined` の警告が 9 件あります。操作が使用するタグがトップレベルに列挙されていないためです。Artifact Registry は、ローカルの Redocly 設定を標準ルールセットで置き換えれば準拠します。`bench.yaml` を導入したら、そのファイルでプロトコルのルートにプロトコル定義であることを示す印を付け、残りを 2 つのドキュメントに割り当てることも必要です。現在の例は代表的なルートの一部しか宣言していないため（デメリット 2）、項目 5 の一度限りのインポートが、その実現方法として想定されています。モノリスの生成仕様はこの決定の対象外です。ルールセット案に対して 89 件のエラーで不合格となり、そのうち 83 件は操作の説明の欠落です。これらの結果をモジュール型機能の基準にはしません。モノリスがルールセットを採用するかどうか、いつ採用するかは別の決定です。

## 影響 {#consequences}

### メリット {#positive}

1. **言語とフレームワークに依存しません。**方法を指定しないため、どのランタイムも GitLab が管理するジェネレーターを待つ必要がなく、Rust、Go、将来のランタイムを初日から同等に扱えます。
1. **すべてのコンポーネントが、最初のひな形生成時から仕様を持ちます。**また、`bench.yaml` で宣言したプロトコル以外のルートが割り当て先のドキュメントに欠けている場合、ビルドは必ず失敗します。
1. **1 つのルールセットが、すべての仕様に同じ基準を与えます。**API 利用者は、すべてのモジュール型機能のリファレンスが同じ基準を満たしていることを前提にできます。すべての操作には `operationId`、要約、説明があり、すべてのパラメーターに説明があります。モジュールやチーム間を移るエンジニアは、各チーム独自の基準を学ぶ代わりに、共通の基準に従って作業できます。
1. **ツールへの投資が積み上がります。**ルールセット、差分ツール、リファレンスのレンダラーをすべての方法で共用できます。
1. **後続のエピックのスコープが明確になります。**破壊的変更の検出は仕様の差分比較であり、契約テストはペイロードが仕様に忠実であることを確認する最低限の検証です。
1. API 利用者に提供する契約を統一しながら、**ワークフローに関するチームの自律性を維持します**。

### デメリット {#negative}

1. **ペイロードが仕様に忠実であることは保証されません。**ほとんどの方法でリクエストとレスポンスのスキーマは手書きされ、この決定にはそれらをハンドラーと照合する仕組みがありません。契約テスト（[エピック 434](https://gitlab.com/groups/gitlab-org/quality/-/work_items/434)）は任意ではなく、検証を支える不可欠なものになります。ペイロードの契約はコード内にすでに存在します。生成された Lab Bench エントリーポイントは各ルートをそのハンドラーパッケージの `Request` 型と `Response` 型に結び付け、シャーシがそれらの型へデシリアライズします。将来のステップとして、これらの型から仕様のスキーマを導出することも考えられます。
1. **`bench.yaml` の網羅性が不可欠になります。**Lab Bench リポジトリ内の現在の Artifact Registry の例のように、代表的なルートの一部だけを記述すると、仕様も不完全になります。その例は、Artifact Registry の Go ハンドラーが提供する約 96 組のメソッドとルートのうち、8 組を宣言しています。また、その例から生成したスケルトンは、Artifact Registry の 2 つのドキュメントにある 59 組のメソッドとパスのうち、2 組にしか一致しません。スケルトンの残り 6 ルートは、プロトコルで定義されたものです。
1. **ルートの比較には変換が必要です。**ルートの構文は異なり（`bench.yaml` では `:id`、OpenAPI では `{id}`）、`HTTPMethod` はまだ `HEAD` や `OPTIONS` に対応していません。そのため、列挙型を拡張するまで、それらのルートの初期生成や比較はできません（[追跡中の不足事項](https://gitlab.com/gitlab-org/lab-bench/bench/-/tree/main/examples/artifact-registry?ref_type=heads#gaps-found)）。Artifact Registry の npm、Maven、OCI ハンドラーには `HEAD` があるため、これらのプロトコルのルートを比較対象から除外していても、`bench.yaml` はまだこのサービスのルート集合全体を宣言できません。
1. **Redocly は Node のツールですが、**`bench` CLI は Rust 製で Node に依存していません。そのため lint は CLI バイナリ内ではなく、CI コンポーネントを通じて実行します。`bench build` はローカルでルートの一致をチェックしますが、ルールセットはチェックしません。
1. 複数のドキュメントや、プロトコルで定義される API 群を持つサービスで、ひな形生成と網羅性チェックを適切に機能させるには、**`HTTPEndpoint` にドキュメント割り当てフィールドが必要です**。このフィールドは、ルートがプロトコル定義であることも示せる必要があります。Artifact Registry は両方の条件に当てはまります。
1. メリットを得るのは API 利用者と API Platform チームですが、**コストは Lab Bench チームが負担します**。
1. **公開リファレンスには一定期間、2 つのバージョンの仕様が存在します：**モノリスの 3.0 とモジュール型コンポーネントの 3.1 です。レンダラー（[エピック 433](https://gitlab.com/groups/gitlab-org/quality/-/work_items/433)）は両方に対応しなければなりません。

## 検討した代替案 {#alternatives-considered}

### 代替案：コードファーストでの生成を必須にする {#alternative-mandate-code-first-generation}

#### アプローチ {#approach}

モノリスが `gitlab-grape-openapi` で行っているように、各ランタイムがハンドラーコードから OpenAPI を出力するジェネレーターを採用または構築します。

#### 採用しなかった理由 {#why-not-chosen}

1. GitLab が管理するジェネレーターは 1 つだけで、Grape を使う Ruby アプリケーションにしか対応していません。Lab Bench はランタイムごとに HTTP フレームワークを 1 つに固定しており（Rust では `axum`、Go では LabKit httpserver）、その一部にはサードパーティのジェネレーターがあります。しかし、それぞれを GitLab の規約とルールセットに適合させる必要があり、GitLab はランタイムごとに 1 つの統合を管理することになります。現在 Grape 向けに行っているように、将来ジェネレーターを提供することは検討できますが、今それを必須にすると、すべてのランタイムがその作業の完了待ちになります。
1. 生成された仕様の完全性は、ジェネレーターがコードをどこまで把握できるかに限られ、欠落は報告されません。
1. 仕様は生成元のコードと食い違いようがないため、契約テストは同じ内容を確認するだけになります。

### 代替案：契約テストまたは生成したサーバーコードを伴う仕様ファーストの作成を必須にする {#alternative-mandate-spec-first-authoring-with-contract-tests-or-generated-server-code}

#### アプローチ {#approach-1}

手書きのドキュメントを唯一の情報源とします。乖離は言語ごとの契約テストで検出するか（現在の Artifact Registry）、ドキュメントからサーバーインターフェースを生成して防ぎます（Go の `oapi-codegen`）。

#### 採用しなかった理由 {#why-not-chosen-1}

1. 検証は言語ごとに必要であり、Go では成熟していますが、Rust では弱く、Ruby にはありません。
1. モノリスで機能している生成方式を禁止することになり、利用者へのメリットがないまま移行を強制します。
1. この方法を自主的に採用しても同じ品質基準を満たせるため、必須にしても保証は増えず、制約だけが増えます。

### 代替案：Lab Bench のシャーシによって強制する仕様ファースト {#alternative-spec-first-enforced-by-the-lab-bench-chassis}

#### アプローチ {#approach-2}

Lab Bench が OpenAPI ドキュメントを読み取ってルートテーブルを導出します。これは Lab Bench のメンテナーが [Lab Bench Issue 46](https://gitlab.com/gitlab-org/lab-bench/bench/-/issues/46#note_3695983088)で提案した「OpenAPI のエスケープハッチ」です。受信レイヤーは実行時にリクエストをドキュメントと照合して検証するため、サービス側のコード生成なしで、仕様が実際の動作を支えるものになります。

#### 採用しなかった理由 {#why-not-chosen-2}

1. 乖離を防ぐ保証としては最も強力ですが、`bench.yaml` と仕様の関係を逆転させ、各シャーシのランタイムで実行時の検証を必要とします。受信レイヤーがまだ構築中であるにもかかわらず、上記の決定よりも多くを Lab Bench に求めることになります。
1. ペイロードの乖離に大きなコストがかかると判明した場合には、これが自然な次のステップとなります。この決定はそれを妨げるものではありません。

### 代替案：`HTTPEndpoint` スキーマまたは gRPC トランスコーディングを通じた proto からの生成 {#alternative-proto-derived-through-httpendpoint-schemas-or-grpc-transcoding}

#### アプローチ {#approach-3}

`HTTPEndpoint` にリクエストとレスポンスの型を追加し、buf プラグインで OpenAPI を出力するか（[`gitlab-org/gitlab#624042`](https://gitlab.com/gitlab-org/gitlab/-/work_items/624042)で追跡）、HTTP JSON API を `google.api.http` アノテーション付きの gRPC サービスとして宣言し、シャーシがトランスコードします。

#### 採用しなかった理由 {#why-not-chosen-3}

1. 構造上言語に依存せず、ADR 001 と完全に一致しますが、現在は利用できません。`HTTPEndpoint` はスキーマを持たず、`config/buf.yaml` は lint のみでコード生成が設定されておらず、Lab Bench のメンテナーが示している方向性は逆です。
1. 宣言が実際の動作を支えるのは、受信レイヤーがその宣言した型へデシリアライズする場合だけです。そうでなければ、ほかの手書きドキュメントと同じように乖離します。
1. トランスコーディングは REST の表現方法を制約し、エラーの形式を `google.rpc.Status` に固定するうえ、プロトコルで定義される API 群を記述できません。
1. proto による方法が実現した場合に備え、基準の下で認められる方法として可能性を残します。

## 参考資料 {#references}

- [ADR 001](001_protobuf_as_preferred_schema_language.md) — この ADR が proto のないケースについて具体化する、proto から OpenAPI を生成するステップ。
- [セクション 2.3 — インターフェースとは？](../#23-what-is-an-interface) — この決定が HTTP の形式を規定するインターフェース。
- [セクション 2.3.2 — 推奨技術：Protobuf](../#232-preferred-technology-protobuf) — この ADR と並立する proto ファーストの方針。
- [エピック 465](https://gitlab.com/groups/gitlab-org/quality/-/work_items/465) — 親エピック。
- [`gitlab-org/gitlab#624041`](https://gitlab.com/gitlab-org/gitlab/-/work_items/624041) — 選択肢の表と決定に関する議論。
- [`gitlab-org/gitlab#624042`](https://gitlab.com/gitlab-org/gitlab/-/work_items/624042) — `HTTPEndpoint` のスキーマに関する論点。
- [`gitlab-org/gitlab#624043`](https://gitlab.com/gitlab-org/gitlab/-/work_items/624043) — Artifact Registry とモノリスに対する、ルールセット案と `bench.yaml` スケルトンの評価。
- [`gitlab-org/gitlab#624045`](https://gitlab.com/gitlab-org/gitlab/-/work_items/624045) — 既存仕様の準拠に関する位置付け。
- [`gitlab-org/gitlab#624046`](https://gitlab.com/gitlab-org/gitlab/-/work_items/624046) — 破壊的変更と契約テストのエピックのスコープ見直し。
- [エピック 429](https://gitlab.com/groups/gitlab-org/quality/-/work_items/429) — すべてのモジュール型機能に仕様を同梱する。
- [エピック 432](https://gitlab.com/groups/gitlab-org/quality/-/work_items/432) — CI で破壊的な API 変更を阻止する。
- [エピック 433](https://gitlab.com/groups/gitlab-org/quality/-/work_items/433) — 公開 API リファレンスのレンダラー。
- [エピック 434](https://gitlab.com/groups/gitlab-org/quality/-/work_items/434) — 契約テストフレームワーク。
- [エピック 428](https://gitlab.com/groups/gitlab-org/quality/-/work_items/428) — 公開 API リファレンスへの登録。
- [Lab Bench `inbound.proto`](https://gitlab.com/gitlab-org/lab-bench/bench/-/blob/main/config/gitlab/bench/v1/inbound.proto) — この ADR が比較する `HTTPEndpoint` と `GRPCEndpoint` メッセージ。
- [Lab Bench Issue 46](https://gitlab.com/gitlab-org/lab-bench/bench/-/issues/46) — ルート列挙の負担と OpenAPI のエスケープハッチ。
- [Lab Bench MR 140](https://gitlab.com/gitlab-org/lab-bench/bench/-/merge_requests/140) — `bench build` は存在しないファイルのひな形を生成し、作成済みのファイルの内部には一切書き込まない。
- [Lab Bench の決定 LB-D5](https://gitlab.com/gitlab-org/lab-bench/bench/-/blob/main/docs/decisions/LB-D5-assembly-runtime.md) — サポートするランタイム。
- [Lab Bench の決定 LB-D20](https://gitlab.com/gitlab-org/lab-bench/bench/-/blob/main/docs/decisions/LB-D20-scaffold-layout.md)と [LB-D21](https://gitlab.com/gitlab-org/lab-bench/bench/-/blob/main/docs/decisions/LB-D21-template-split.md) — デプロイ単位としてのアセンブリ。
- [Artifact Registry API スタイルガイド](https://gitlab.com/gitlab-org/ops/artifact-registry/-/blob/main/docs/dev/api-style.md) — この ADR が参考にしている仕様ファーストの方法。
- [Artifact Registry `api/openapi/`](https://gitlab.com/gitlab-org/ops/artifact-registry/-/tree/main/api/openapi) — 手書きの仕様ディレクトリ。
- [モノリスの OpenAPI ドキュメント](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/api/openapi/openapi_v3.yaml) — モノリスの生成仕様。
- [`gitlab-grape-openapi` gem](https://gitlab.com/gitlab-org/ruby/gems/gitlab-grape-openapi) — その仕様を出力するジェネレーター。
- [LabKit Configuration の設計ドキュメント](/handbook/engineering/architecture/design-documents/labkit_configuration/) — protobuf ファーストの設定の先例。
