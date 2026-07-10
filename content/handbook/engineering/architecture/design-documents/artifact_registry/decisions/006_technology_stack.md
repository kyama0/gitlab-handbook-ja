---
title: "Artifact Registry ADR 006: 技術スタック"
owning-stage: "~devops::package"
description: "システム要件とアーキテクチャ決定に基づく Artifact Registry サテライトサービスの技術選定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/006_technology_stack/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
translated_at: "2026-07-10T20:55:36+09:00"
translator: codex
stale: false
lastmod: "2026-07-07T15:33:26-04:00"
---

## 背景

本 ADR では、システム要件（[ADR-003](003_system_requirements.md)）を Artifact Registry サテライトサービス向けの具体的な技術にマッピングします。

Artifact Registry は Rails モノリス外のスタンドアローンサービスとして構築され、[Runway GKE ランタイム](https://docs.runway.gitlab.com/runtimes/kubernetes/getting-started/) を使ってデプロイされます。これには、すべてのシステム要件を独立して満たし、より広い GitLab プラットフォームと統合できる技術スタックの選定が必要でした。

技術選択は次の 2 つの要因によって情報を得ています。

1. **GitLab LabKit**: LabKit は GitLab サービスのために、相関、ロギング、トレーシング、メトリクスなど共通機能を提供するミニマリストなライブラリです。[Go](https://gitlab.com/gitlab-org/labkit) と [Ruby](https://gitlab.com/gitlab-org/ruby/gems/labkit-ruby) の両方で利用可能です。最近の動向では、LabKit を [Rust](https://gitlab.com/gitlab-org/rust/labkit-rs) に移植する作業が進んでいます。
1. **Package ステージチームの専門知識**: [Package ステージ](/handbook/engineering/devops/package/) チームは、Go（コンテナレジストリの構築・運用）と Rails（モノリス内のパッケージレジストリの構築・運用）の両方に深い経験を持っています。

3 つの選択肢が検討されました。

1. **Go (Golang)** — Gitaly、Workhorse、コンテナレジストリといった他の GitLab サテライトサービスのパターンに従う。
1. **Ruby on Rails** — スタンドアローン Rails API 専用アプリケーションとして、GitLab モノリスから選択したパターンとライブラリを再利用する。
1. **Rust** — Knowledge Graph や新しい Auth サービスなどの新しい GitLab プロジェクトの道を辿り、Rust のパフォーマンスと安全性保証を活用する。

## 決定

**Go (Golang)** が新しい GitLab サテライトサービス向けに推奨される言語です。

Go は GitLab のサテライトサービス（Gitaly、Runner、Workhorse、コンテナレジストリ）で最も使用されており、本プロジェクトに対してパフォーマンス、エコシステム成熟度、組織的整合性の最良のバランスを提供します。

**長所**:

1. **十分に確立された**: GitLab サテライトサービス全体で最も使用されており（Gitaly、Runner、Workhorse、コンテナレジストリ）、実証された Go ライブラリとパターンがある。
2. **組織的投資**: LabKit が、可観測性、ロギング、トレーシング、利用イベント、ビリングイベントなどを最初から提供する。Go を中心に構築されたサポートツールとインフラは、既存のサービスにも恩恵をもたらしやすい。Artifact Registry のために構築されたツールやデプロイの改善は、既存の Go サテライトサービスに後付けで適用してメンテナンス負担を軽減できる可能性がある。Go が引き続き最も使用される選択肢である場合、初期投資は Rails サービスのために既存ツールを作成または適応するよりも価値が高い可能性がある。
3. **パフォーマンス特性**: 高スループット、並行 I/O ワークロード（アーティファクトのアップロード／ダウンロード）に対する優れたパフォーマンス、低メモリフットプリント、効率的なリソース活用。長期間のストリーミング接続を含む多数の同時アーティファクト転送を処理するのに適した、強力な並行性プリミティブ（goroutine、channel）。
4. **エージェント開発のための型安全性**: コンパイル時の型安全性と静的型付けにより、AI エージェントが推論しやすい明確なコントラクトを動的型付け言語に比べて提供する。ただし Go の保証は Rust よりも弱い（例えば Go は構造体の意図しない変更を防がない）。Go のツールチェーンも、レース検出器や goroutine リーク検出器など、エージェントワークフローのためのランタイム品質ゲートを提供する。
5. **クラウドネイティブな整合性**: 静的バイナリは、すべてのインストールタイプにわたるデプロイと配布をシンプルにする。
6. **広範な貢献者プール**: Go は GitLab 内で Rust に比べて熟練した貢献者のプールが大きく、スタンドアローン Rails アプリケーションよりサテライトサービスで作業しているチームに馴染み深い。
7. **ベンダーサポートの SDK エコシステム**: すべての主要クラウドプロバイダー（[AWS](https://github.com/aws/aws-sdk-go-v2)、[GCP](https://pkg.go.dev/cloud.google.com/go/storage)、[Azure](https://github.com/Azure/azure-sdk-for-go)）が公式の Go SDK を維持しており、オブジェクトストレージなどクラウドネイティブ統合の長期サポートを保証する。

**短所**:

1. **ツールギャップ**: データベースマイグレーション、データベースロードバランシング、バックグラウンドジョブ、機能フラグのためのライブラリを構築または採用する必要がある。既存のモノリスツールを直接抽出することはできず、Database Frameworks チームはサテライトサービス向けに同等の機能を提供する計画はない。
   - 部分的な緩和: コンテナレジストリで使用されているデータベースロードバランサーを抽出して再利用できる可能性がある
2. **より小さな貢献者プール**: GitLab 内で Ruby/Rails と比較して Go の貢献者が少なく、チームをまたぐ貢献を遅らせる可能性がある。
3. **仮想レジストリの書き直し**: Rails モノリス内の現在の仮想レジストリは完全な書き直しが必要。
   - 部分的な緩和: [PoC](https://gitlab.com/jdrpereira/artifact-registry-poc/-/blob/main/README.md) により、書き直しが実現可能な選択肢であることが証明された。

## コンポーネントと依存関係

以下のライブラリの一部は確定した選択肢（明記されている場合）で、その他は初期候補のままです。フォローアップ MR で残りの候補を調査し、本 ADR は適宜更新されます。

### 1. バックグラウンドジョブ処理: ハイブリッド (River + asynq)

Artifact Registry は、ライフサイクルポリシー実行、ガベージコレクション、アップロードのパージ、イベント処理、アナリティクス集計、カウンタバッチ処理、クリーンアップ操作のためにバックグラウンドジョブ処理を必要とします。これには、信頼性のあるスケジューリング（cron スタイルおよび一回限り）、リトライと失敗処理、優先度キュー、モニタリングと可観測性が含まれます。

[正式な評価](https://gitlab.com/gitlab-org/gitlab/-/work_items/594600) では、両ツールを個別に、またハイブリッド組み合わせとして評価しました。結論は **ハイブリッドアーキテクチャ** です: 整合性が重要なジョブには River、高スループットで結果整合的なジョブには asynq を使用します。両者は、バックエンドをまたいで一貫した OTel トレーシングと Prometheus メトリクスを提供する統一抽象の背後にラップできます。

#### River — PostgreSQL ベース、整合性が重要なジョブ向け

[River](https://github.com/riverqueue/river) は、行レベルロックを使った並行デキューによる PostgreSQL ベースの Go ジョブキューで、GitLab.com 規模でコンテナレジストリの[オンラインガベージコレクション](https://gitlab.com/gitlab-org/container-registry/-/blob/master/docs/spec/gitlab/online-garbage-collection.md) で使われているのと同じ仕組みです。

**重要ジョブで River を選ぶ理由:**

- **トランザクショナルなエンキュー**: ジョブはデータ変更と同じ PostgreSQL トランザクション内でエンキューされます。トランザクションがロールバックされれば、ジョブは決して作成されません。これにより、ビジネス書き込みと別個のキュー登録の間のクラッシュウィンドウが排除され、孤立データに自動的な復旧経路がなくなる事態を防げます。同等の機能セットを持つ、これを実現する他のアクティブにメンテナンスされている Go + PostgreSQL ジョブキューはありません。
- **PgBouncer 互換**: ポーリング専用モードで動作し、PgBouncer のトランザクションプーリングと互換性があります。
- メンテナンスタスク向けの**ビルトインリーダー選出**、定期/cron スケジューリング、ユニークジョブ重複排除、グレースフルシャットダウン、ネイティブな OTel サポート。
- **リニアなスループットスケーリング**: スループットがワーカー数に対してリニアにスケールします。[公式ベンチマーク](https://riverqueue.com/docs/benchmarks) では、2,000 ワーカーで毎秒 46K ジョブが報告されています。

**運用上の考慮事項:**

- **デッドタプルの churn**: 各ジョブはジョブテーブルで insert、update、delete を巡回し、ジョブごとに約 2.4 倍のデッドタプルを生成します。緩和策: (a) 低ボリュームの重要ジョブだけを River にルーティングする、(b) ジョブテーブルでの [autovacuum チューニング](https://www.postgresql.org/docs/16/routine-vacuuming.html#AUTOVACUUM)、(c) 完了ジョブの短い保持期間。ハイブリッドアーキテクチャは影響範囲を限定します。詳細な計測値は [evaluation](https://gitlab.com/gitlab-org/gitlab/-/work_items/594600) を参照してください。
- **ライセンス**: [MPL-2.0](https://github.com/riverqueue/river/blob/master/LICENSE)（弱いコピーレフト、ファイルレベルのみ）。River をライブラリ依存として使用し、そのソースを改変しない限り、AR のコードには影響しません。法務レビュー済み（[gitlab-com/legal-and-compliance#3437](https://gitlab.com/gitlab-com/legal-and-compliance/-/work_items/3437)）。
- **Pro 機能は不要**: River OSS は AR のすべてのニーズをカバーします。Pro 限定機能（グローバル並行性制限、ワークフロー、DLQ、永続的 cron）は AR のワークロードには必要ありません。キューごとのワーカー上限で十分な並行性制御が得られます。

#### asynq — Redis ベース、高スループットで結果整合的なジョブ向け

- [asynq](https://github.com/hibiken/asynq) は MIT ライセンスで Redis ベースです。追加のインフラ依存関係はありません。Redis はキャッシング、レート制限、分散ロックに既に必要です。
- GitLab エンジニアに馴染みの Sidekiq に似たセマンティクス（キュー、リトライ、デッドレターキュー）。
- 重み付き優先度キュー、分散シングルファイアによる cron スタイルスケジューリング、ユニークジョブ重複排除をサポート。
- 内蔵の Prometheus メトリクスエクスポーターと web UI（[asynqmon](https://github.com/hibiken/asynqmon)）。
- PostgreSQL への影響ゼロ — ジョブはアプリケーションデータベースに触れません。
- OTel トレース伝播にはカスタムミドルウェアが必要。
- **単一メンテナーリスク**: [Ken Hibino](https://github.com/hibiken) が主要コントリビュータです。緩和策: asynq には fire-and-forget ジョブだけを乗せ、統一抽象によりバックエンドのスワップがルーティング変更で済むようにしています。

#### ルーティングガイドライン

トランザクショナルなエンキューやデータベース書き込みとのアトミック性を必要とするジョブ（例: ガベージコレクション、ライフサイクルポリシー実行）には River を使用します。高スループット、結果整合的、または fire-and-forget のワークロード（例: イベント処理、アナリティクス集計、カウンタバッチ処理）には asynq を使用します。判断に迷う場合は、エンキュー境界でのアトミック性が必要でない限り、デフォルトで asynq を使用します。

#### 参考文献

- [WI #594600 — Background Job Processing Evaluation](https://gitlab.com/gitlab-org/gitlab/-/work_items/594600)（権威ソース: 評価、PoC、ベンチマーク、議論）

### 2. リレーショナルデータベース: PostgreSQL

**PostgreSQL を選ぶ理由**:

- GitLab の既存インフラとデータベース基準と整合
- GitLab.com の巨大なデータセットでスケールが実証済み
- 豊富な機能セット: 柔軟なメタデータ向けの JSONB、全文検索、高度なインデックス
- 既存の専門知識、運用ランブック、バックアップ／リカバリ手順
- 重要なメタデータに対する強い整合性保証

**データベース分離**: Artifact Registry サテライトサービスは独自の専用 PostgreSQL データベースを使用し、[multiple databases](https://docs.gitlab.com/ee/development/database/multiple_databases.html) 分解パターンを必要とせずに Rails モノリスからの完全な分離を提供します。

#### 2.1 データベーススキーママイグレーション

サテライトサービスは高度なマイグレーションツールを欠いており、開発速度に影響します。データベーススキーママイグレーションは、すべてのサテライトサービスのための再利用可能なインフラとして LabKit 抽象でラップされ、ゼロダウンタイムマイグレーション、安全なスキーマ変更（パーティショニングテーブルを含む）、ロールバック機能、マイグレーション状態追跡を提供します。マイグレーションは自己完結し、分散ロック（PostgreSQL アドバイザリロックまたは Redis）を使ってポッド起動時にトリガーされる必要があり、外部のオーケストレーションやモノリスのポストデプロイマイグレーションモデルを必要としません。アプリケーションはアップグレード周辺で後方スキーマ互換性を強制する必要があります。

**[goose](https://github.com/pressly/goose)** が選択されたマイグレーションツールで、マイグレーションリンティング向けに **[squawk](https://github.com/sbdchd/squawk)** とペアになります。詳細は [database tooling evaluation](https://gitlab.com/gitlab-org/gitlab/-/work_items/592409) を参照してください。

#### 2.2 データベースクエリレイヤー

**[go-jet/jet](https://github.com/go-jet/jet)** が選択されたクエリツールで、GraphQL 向けに **[gqlgen](https://gqlgen.com/)** とペアになります。詳細は [database tooling evaluation](https://gitlab.com/gitlab-org/gitlab/-/work_items/592409) を参照してください。

### 3. Blob ストレージ: オブジェクトストレージ

**オブジェクトストレージを選ぶ理由**:

- GitLab の [統合オブジェクトストレージ](https://docs.gitlab.com/administration/object_storage/#configure-a-single-storage-connection-for-all-object-types-consolidated-form) 戦略と整合
- すべての [サポートされているプロバイダー](https://docs.gitlab.com/administration/object_storage/#supported-object-storage-providers)（AWS S3、Google Cloud Storage、Azure Blob Storage、MinIO など）と互換
- 既存の GitLab レジストリと CI アーティファクトでスケールが実証済み
- 大規模 Blob ストレージにとってコスト効率が良い
- 既存の運用専門知識と統合パターン

**デプロイメント固有の選択**:

- **GitLab.com (SaaS)**: Google Cloud Storage (GCS)。既存のインフラと運用専門知識を活用
- **Dedicated**: Amazon S3。確立された Dedicated デプロイメントパターンと整合
- **Self-Managed**: GCS、S3、または S3 互換プロバイダー。ローカルファイルシステムはサポートされない（サービスは Kubernetes 専用のため）。追加の[プロバイダー](https://docs.gitlab.com/administration/object_storage/#supported-object-storage-providers) は後で追加可能。

**ネイティブ SDK**: Artifact Registry は、サードパーティクライアントや抽象ではなく、内部インターフェースの背後でネイティブプロバイダー SDK を使用します。これにより、抽象ライブラリが最低共通分母 API の背後に隠す可能性のある、プロバイダー固有のプリミティブ（例: GCS のアトミックオブジェクト移動、再開可能なアップロード、細粒度の並列性を持つ S3 マルチパートアップロード）へのアクセスが保証されます。このような依存プロファイルを持つサービスにとって、これらの SDK の長期的なベンダーメンテナンスも不可欠です。

**バケット分離**: 設計はパスプレフィックスを使った共有バケットをサポートしますが、Artifact Registry は専用バケットを使用すべきです。これにより、ライフサイクルポリシー、アクセス制御、コストトラッキング、運用管理を他の GitLab ストレージから分離できます。

### 4. コンテンツデリバリーネットワーク (CDN)

CDN はデプロイメント固有でオプショナルです。

- **GitLab.com (SaaS)**: コンテナレジストリが現在行っているように Google Cloud CDN（[~87% のキャッシュヒット率](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/17524#note_3023542021) を達成）。Cells には AWS CloudFront が必要になる可能性がある。
- **Dedicated**: AWS CloudFront のオプショナル使用、コンテナレジストリでもサポートされている
- **Self-Managed**: オプショナル。顧客は Cloud CDN または CloudFront のいずれかを構成可能

### 5. アナリティクスエンジン: ClickHouse

ClickHouse は MVP のスコープ外です。後で高度なアナリティクス機能（長期イベントレコード、利用トレンド、AI 駆動インサイト）に必要になります。これはオプショナルな依存関係です。Artifact Registry は ClickHouse なしで完全に機能する必要があります。

### 6. キャッシュ: Redis プロトコル互換サービス

Redis プロトコル互換サービス（例: Redis、Valkey）は、asynq バックグラウンドジョブ処理（セクション 1）、キャッシング、レート制限、分散ロック、エフェメラルな共有アプリケーション状態のために必要です。

**候補ライブラリ: [go-redis](https://github.com/redis/go-redis)**。サテライトサービス全体で一貫した使用のため、Redis クライアントを LabKit 抽象でラップすることが関連する可能性があります。

### 7. イベントバス

MVP では、サービス間通信（主に Rails モノリスとの）は直接 API 呼び出しを使用します。

**将来の代替案: NATS**

レジストリが MVP を超えて発展するにつれ、次の場合に **NATS**（具体的には [NATS JetStream](/handbook/engineering/architecture/abstractions/candidate/nats/)）を検討する可能性があります。

- イベント永続化と再生が重要要件になる
- 監査とコンプライアンス要件がイベントソーシングを要求する
- 複雑なイベントルーティングとフィルタリングパターンが現れる
- GitLab のインフラが標準コンポーネントとして NATS を含む

**NATS を選ぶ理由（将来の検討用）**:

- JetStream による永続的なイベントストリーミング
- メッセージ再生とコンシューマグループ
- イベントソーシングパターンに優れている
- [GitLab の NATS 抽象](/handbook/engineering/architecture/abstractions/candidate/nats/) と整合
- 複雑なイベントルーティングとフィルタリングをサポート

**NATS の現状**:

- **提案段階**: Self-Managed と Dedicated インストール向けに [NATS をパッケージ化する提案](https://gitlab.com/gitlab-org/architecture/gitlab-data-analytics/design-doc/-/work_items/184) がある
- **本番使用**: NATS は CustomersDot 環境上の Data Insights Platform (DIP) の本番で現在デプロイされており、[運用ランブック](https://runbooks.gitlab.com/nats/) が利用可能
- **標準インストール**: NATS はまだすべての GitLab インストールタイプで標準インフラとして利用可能ではないため、Artifact Registry には将来のオプションのまま
- **抽象の成熟度**: [NATS abstraction page](/handbook/engineering/architecture/abstractions/candidate/nats/) は開発中

## 代替案

### Ruby on Rails（スタンドアローンアプリケーション）

サテライトサービスをモノリスから分離されたスタンドアローン Rails アプリケーションとして構築するが、Rails エコシステムを再利用する。

**長所**:

- API 専用アプリケーションモードは Rails でネイティブにサポート
- GitLab エンジニアの大多数に馴染みのある技術
- モノリスの既知のパターンと gem を再利用できる（例: ActiveRecord 拡張、Sidekiq）
- 抽出して再利用できる既存のデータベースとバックグラウンドジョブツール（ゼロダウンタイムデータベースマイグレーション、バックグラウンドマイグレーション、データベースロードバランサー、Sidekiq reliable fetcher）。[PoC](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18455#note_3105411409) でこれが技術的に実現可能であることを実証
- 抽出して再利用できる既存の GraphQL ツール（複雑度分析、バッチローダー）
- スタンドアローン gem であるため、既存の認証ロジック（declarative policy）を直接再利用可能
- GitLab スケールでの Rails パフォーマンス最適化の既存専門知識を再利用
- 仮想レジストリロジックを抽出して再利用できる

**短所**:

- Rails スタンドアローンサービスは GitLab で確立されたパターンではない。サテライトサービスは Go または Rust で書かれており、サポートインフラとツールの抽出または構築に費やされる時間は、Rails サービスへの投資を始める意欲がない限り、より低い ROI をもたらす可能性が高い。
- プロセスあたりのメモリフットプリントが高く、コンパイル済みランタイムに比べて起動時間が遅く、ストリーミングファイルアップロード／ダウンロードのような高並行性 I/O ワークロードに対して効率が悪い。
- モノリスから抽出するツールをスタンドアローンライブラリに変換するのは、スコープが不明確で簡単ではない。特にバックグラウンドデータマイグレーションは、Helm がネイティブに表現できない方法でアップグレードライフサイクルに結合されており、init コンテナスクリプトとカスタムオーケストレーションを必要とし、別の長時間実行プロセスとしての Sidekiq に依存する。
  - 緩和: AI ツールが抽出と適応の作業を加速できる
- Delivery は新しいサービスでモノリスのマイグレーションパターンを複製することを [積極的に推奨していない](https://docs.google.com/document/d/1tZLY4px_wiWBe9F2PEcE3M8avp52TCyc1hAS0dF34YM/edit?tab=t.0)。これらは運用上の負担と見なされ、クラウドネイティブデプロイメントと互換性がない。
- 依存関係管理オーバーヘッド（Bundler、ネイティブ拡張）がパッケージングと配布を複雑にする。
- モノリスのパターンに密結合する蓄積リスクがあり、サービスを独立して進化させるのが難しくなる。
  - 緩和: モノリスから抽出するコンポーネントの慎重な選択により、問題のあるパターンの継承を回避できる
- 一部のクライアント（例: `npm`）は直接アップロード用の署名付き URL をサポートせず、Self-Managed セットアップではオブジェクトストレージアクセスを GitLab コンポーネントのみに制限する可能性があるため、長時間アップロードを処理するためのプロキシサイドカー（Workhorse の機能と類似）が必要。これによりランタイムコンポーネントの総数が増え（Redis、PostgreSQL、Rails、プロキシサイドカー）、可用性に影響する可能性のある追加のハード依存関係が追加される（認証にすでに必要なモノリスを超えて）。
- プロキシサイドカーは二重のソフトウェアサプライチェーンを導入する: 1 つはプロキシ用、もう 1 つは Rails アプリケーション用。これにより依存関係管理、セキュリティ監査、脆弱性修正の対象範囲が拡大する。
- プロキシサイドカーはプロキシされる各リクエストに追加のネットワークホップを追加する。リクエストあたりのオーバーヘッドは小さいかもしれないが、既存のプロキシ層（ロードバランサー、ingress、認証用モノリス）と複合し、負荷下のテイルレイテンシに影響する。
- 弱いオブジェクトストレージ SDK エコシステム: Microsoft は公式 Azure Storage Ruby クライアントライブラリを [廃止した](https://azure.microsoft.com/en-us/updates?id=retirement-notice-the-azure-storage-ruby-client-libraries-will-be-retired-on-13-september-2024)。コミュニティの代替が存在するが、ベンダーメンテナンスではない。
- Ruby はインタープリタ型の動的型付け言語であり、コンパイル済みの静的型付け言語と比べて、エージェント開発ワークフロー向けの品質ゲートが弱い。

**却下理由**: サテライトサービスの確立されたパターンではなく、長時間アップロードのためにプロキシサイドカーが必要で、モノリスツールの抽出への投資は Go への投資より組織的 ROI が低くなる可能性が高い。

### Rust

サテライトサービスを Rust で構築し、そのパフォーマンス特性と型システム保証を活用する。

Rust は GitLab 内で勢いを増しています: [Knowledge Graph](https://gitlab.com/gitlab-org/orbit/knowledge-graph)、GLQL、GLFM gem は Rust で構築されています。Rust 用の LabKit が開発中で、Auth Architecture チームはサービスに Rust を選択しました。

**長所**:

- ガベージコレクタオーバーヘッドなし、ゼロコスト抽象。Go の GC は大幅に改善されているが、GC 一時停止がないことはレイテンシに敏感なワークロードにとって意味のある利点
- コンパイラ強制のメモリ安全性が、ランタイムオーバーヘッドなしにバグの大カテゴリ（解放後使用、データ競合、null ポインタ参照外し）を排除
- Rust への GitLab の投資の成長（Knowledge Graph、GLQL、GLFM、Auth Architecture サービス）が内部の前例と専門知識の拡大を提供
- Rust 用 LabKit が開発中
- Rust のコンパイラが AI 生成コードの自然な品質ゲートとして機能

**短所**:

- Go はすでにこのユースケースに必要な型安全性とコンパイルの恩恵を提供している。このコンテキストで Rust の追加保証（例: ガベージコレクタなしのメモリ安全性）への具体的な必要性はない。
- 3 つの選択肢の中で GitLab 内で最も小さな貢献者プール。Go は熟練した貢献者のプールが大幅に大きい。
  - 緩和: AI ツールがオンボーディングを加速し、学習曲線を緩和できる
- すぐに利用可能なエコシステムと GitLab 製品全体の既存統合（LabKit、可観測性、デプロイメントツール）は、強く Go を支持する。Rust 用 LabKit はまだ開発中。プラットフォーム統合はまだ本番準備が整っていない。
- Rust は、データエンジニアリング（Knowledge Graph）やコンパイラなど、より高いパフォーマンスやより表現力のある型システムを必要とする例外的なケースに適している。Artifact Registry はそのカテゴリに該当しない。
- Rust の async ランタイムは言語の一部ではなく、外部クレート（例: tokio）を必要とする。Go の並行性モデル（goroutine、channel）は言語の第一級機能であり、より直接的。
- Go を中心に構築されたインフラツールはより広い組織に恩恵をもたらすが、Rust ツールはより小さなサービスセットに役立つ。
- 現在の仮想レジストリは書き直しが必要。

**却下理由**: Go は GitLab 内でより大きな貢献者プールと、サテライトサービス向けのより成熟したエコシステムを持つ。Rust はより強い保証を提供するが、実用的な利益は、このユースケースで Go のエコシステムと貢献者の利点を上回らない。

## 参考文献

- [ADR-003: System Requirements](003_system_requirements.md)
<!-- - [ADR-005: Implementation Architecture](005_implementation_architecture.md) -->
<!-- - [ADR-010: Data Retention](010_data_retention.md) - Audit log retention policies stored in ClickHouse -->
- [GitLab Object Storage Documentation](https://docs.gitlab.com/administration/object_storage/)
- [GitLab NATS Abstraction](/handbook/engineering/architecture/abstractions/candidate/nats/)
- [Multiple Databases Documentation](https://docs.gitlab.com/ee/development/database/multiple_databases.html)
- [Sidekiq Development Guidelines](https://docs.gitlab.com/ee/development/sidekiq/)
- [Lab Bench: GitLab SOA Architecture](https://docs.google.com/document/d/11Zj918LuZeY3fPcU50ZPhzJtcqzvyXaO0SDamW7cDc8/edit?tab=t.0)
