---
title: 'Data Insights Platform Querying API ADR 002: Rails と Query API の統合境界'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/data_insights_platform_querying_api/decisions/002_rails_dip_integration_boundaries/
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-18T08:38:37+02:00"
translated_at: "2026-09-20T02:50:39+00:00"
translator: codex
stale: false
---

## 背景 {#context}

[ADR 001](001_structured_requests_with_ontology.md)では、Rails が構造化リクエストを送信し、DIP がオントロジー定義を公開することを決定しました。ただし、最初の実際の利用者となる Rails Aggregation Engines は現在 ClickHouse に直接クエリしており、この場合に両者の境界をどこに置くかという疑問が残っています。

[Aggregation Engine 統合のスパイク](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/work_items/172)により、統合する範囲は小さいことが分かりました。エンジンは限定されたインターフェースを通じてバックエンドにアクセスするため、その上の GraphQL、認可、ページネーションの各層に影響を与えずに、ClickHouse の実装と並べて Query API の実装を配置できます。

この ADR は、この[議論](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/work_items/176)で定めた境界を記録し、文書化した契約に基づいて実装を開始できるようにします。実装自体は、[Rails への Analytics Query API の統合](https://gitlab.com/groups/gitlab-org/analytics-section/-/work_items/27)エピックで追跡します。

## 決定 {#decision}

**認可はすべて Rails 内に残します。** リゾルバーはパスをレコードに解決し、スコープを限定し、ソースごとに `Ability.allowed?` を確認してから、トラバーサルパスを計算します。`aggregation/authorization.rb` にある 2 段目の層では、個々のディメンションとメトリクスが `authorize:` を宣言できます。認可されていないメトリクスは結果から除外するのではなく、実行計画から取り除く必要があるため、この層は変換前に実行しなければなりません。DIP は認可済みのトラバーサルパスを受け取り、独自のアクセス判断は行いません。

**DIP がストレージのセマンティクスを管理します。** 重複排除、フィルタリング、グループ化、集計、ページネーションは DIP の責任です。

**Rails がドメインのセマンティクスを管理します。** 列挙型の名前、GlobalID、モデルの関連付け、権限は Rails に残します。既存の `aeq_` エイリアスの契約と `format_data` がすでにこの分離を実装しているため、両方のバックエンドは `format_data` の実行後に同じ構造を生成する必要があります。

**生の SQL は API 境界を越えません。** ドメインは、オントロジー YAML で `measures`（名前付きのサーバー側 SQL 式）、`metrics`（関数、オペランド、条件、パラメーターの許可リスト、値のマッピングを持つ名前付きカタログ）、式に基づく `dimensions` を宣言します。リクエストで渡すのは名前のみです。`AggregateExpr` は `{function, column, alias, condition, quantile_level}` で、`column` には宣言済みメジャーの名前を指定できます。また、`MetricRef` は `{name, alias, parameters}` です。これはマイルストーン 19.5 で[名前付きメトリクス](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/merge_requests/174)と[名前付きメジャー](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/merge_requests/175)によってリリースされました。その結果、DIP は ClickHouse SQL パーサーを必要とせず、別途管理する関数の許可リストもありません。オントロジー自体が許可リストであり、サーバーが管理します。

**メトリクスごとに GraphQL フィールドを設ける方式は維持します。** 型付きでイントロスペクション可能なスキーマには静的な宣言が必要なため、メトリクスは宣言済みフィールドとして残すべきです。そのフィールドより下の処理はすべて集約すべきです。現在、新しいメトリクスには Rails 内で少なくとも 3 段階の変更が必要ですが、新しいメトリクスごとに Rails の宣言 1 つで済み、プラットフォーム側の作業が不要になることを目指します。

**オントロジー定義は生成すべきです。** Rails はすでにテーブル定義を `db/click_house/schema_cache/main/*.yml` に自動でダンプしており、マッピングは機械的です。エンジンの引数は `dedup_config` に、主キーは `dedup_config.group_by_keys` に、列の型は `columns[].type` になります。Rails は `lib/gitlab/database/aggregation/click_house/engine/dsl.rb` のおよそ 8 行でこれを導出しています。導出できる部分は生成でカバーし、メジャー、メトリクス、人間が読みやすい名前など、導出できない部分だけを小規模な手書きのオーバーレイで補うべきです。

**バックエンドはフィーチャーフラグの下でエンジンごとに選択し、デフォルトは ClickHouse とすべきです。** エンジンは `self.query_backend = :query_api` で利用を選択します。ClickHouse の処理経路を稼働中の正解判定基準として維持しながら、エンジンを 1 つずつ移行すべきです。最初のエンジンには Deployments を提案します。ディメンションとメトリクスが 8 つあり、`traversal_path` に加えて `_siphon_replicated_at` と `_siphon_deleted` を持ちます。

**短期的には、ClickHouse スキーマの管理責任は Rails に残します。** Rails の `db/click_house/main.sql` が Siphon DDL と、挿入時に `traversal_path` を設定するトラバーサルパス辞書を管理します。Siphon がデータを書き込み、DIP が読み取ります。オントロジー YAML の生成元については、引き続き Rails を正とすべきです。別のリポジトリへの追加のスキーマ公開は、モノリスのツールで確実に行えます。Gitlab 内ではすでに[データベースマイグレーションフレームワーク](http://gitlab.com/gitlab-org/database-team/database-migration-platform)によってこの流れを効率化する取り組みがあり、私たちはそれと連携します。

## 影響 {#consequences}

### 利点 {#positive}

- バックエンドのインターフェースが限定されているため、最初のエンジンの移行は GraphQL と認可の各層より下の範囲にとどまります。
- 認可が Rails に残るため、DIP は権限モデルを必要とせず、Query API がポリシーエンジンになることもありません。
- 名前付きのメジャーとメトリクスにより、リクエスト時に SQL を受け付ける部分が完全になくなるため、構文解析や拒否リストとの照合をする対象はありません。
- オントロジーの生成により、Rails のスキーマキャッシュが物理構造の唯一の情報源となり、2 つのリポジトリ間のずれを防げるはずです。
- エンジンごとのフラグにより、ClickHouse の処理経路を廃止する前に実際のトラフィックで両方のバックエンドを比較しながら、段階的にロールアウトできます。

### 欠点 {#negative}

- オントロジーに記述された式は、引き続き `Raw()` を通じて構文解析されずに ClickHouse に渡ります。YAML はサーバー側にあり、マージリクエストでレビューされるため、これはリクエストのインジェクションではなく、設定の信頼性に関わる領域です。それでも、特権的な設定として扱い、それに見合うレビューを求めるべきです。
- エンジンごとに 2 つのバックエンドを維持するということは、フォールバックが存在する限り、ClickHouse の抽象化を保守しなければならないということです。

### 今後の対応 {#followups}

- **複数のトラバーサルパス。** Rails は、`OR` で組み合わせた最大 `MAX_SOURCES = 20` 個のグループまたはプロジェクトのパスをサポートしていますが、DIP の `traversal_path` は必須の単一文字列です。これは[共有ディメンションの JOIN](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/work_items/144)とは異なる軸です。共有ディメンションの JOIN は、フィールド 1 の `traversal_path` を単一のスカラーに保ちながら、共有ディメンションで複数のドメインをまとめるために、`QueryRequest` を `repeated QuerySource sources` に再構成します。Rails は 1 つのドメインに対して複数のパスを必要とし、両者は組み合わせられます。パスは認可スコープであり、各ソースで共通で、Rails が一度だけ計算するため、リクエストレベルの `repeated traversal_paths` が適切に見えます。また、JOIN の作業に組み込むこともできます。代替案は Rails 側でリクエストを分岐させることですが、サーバー側のページネーションが機能しなくなります。当初はリクエストレベルの制約が設けられる見込みです。
- **ウィンドウ関数を使用するエンジン。** `retained_count` と `lagged_count` は `lag` を使ったウィンドウ関数を使用しますが、proto ではこれを表現できません。将来的に proto でサポートされる見込みです。
- **Aggregation Engine の ClickHouse バックエンドは恒久的なものですか？** Aggregation Engine は Query API に置き換わる予定です。最初は互換層として機能し、その後、想定されるすべての機能が Query API に移る見込みです。

### 対象外 {#out-of-scope}

- 認可を Rails から別のサービスに切り出すこと。[ADR 001](001_structured_requests_with_ontology.md)で述べたように、そのサービスは存在せず、それを前提に計画すべきではありません。

## 代替案 {#alternatives}

- **Rails から `Expr { sql, alias }` を受け取り、DIP で検証する案。** AST に構文解析して再レンダリングするか、文字列を拒否リストと照合します。名前付きのメジャーとメトリクスを採用するため、不採用としました。セキュリティ境界として機能するほど十分に ClickHouse 方言を構文解析するには、広範な仕組みを構築し、恒久的に保守する必要があります。名前付きカタログのアプローチでは、その必要がなくなります。SQL の拒否リストは防御として成立しません。
- **単一のフラグの下で、すべてのエンジンを一度に移行する案。** 実際のトラフィックで出力の等価性を確認できる、エンジンごとの正解判定基準が失われるため、不採用としました。

## 参考資料 {#references}

- [エピック: Rails への Analytics Query API の統合](https://gitlab.com/groups/gitlab-org/analytics-section/-/work_items/27)
- [Rails から DIP Query API へ: 統合境界と未決定事項](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/work_items/176)
- [スパイク: Aggregation Engine と DIP Query API の統合](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/work_items/172)
- [Rails: モノリスへの Data Insights Service の追加](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/work_items/23)
- [Query API: 複数の ClickHouse ドメインをまたぐ JOIN のサポート追加](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/work_items/144)
- [Query API: 派生（一時的な）ディメンションとメトリクスのサポート追加](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/work_items/175)
- [ドメイン固有の名前付きメトリクスのサポート追加](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/merge_requests/174)
- [名前付きメジャーと集計のサポート追加](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/merge_requests/175)
- [汎用 proto](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/blob/main/pkg/proto/gitlab/generic/v1/generic.proto)
- [オントロジー定義](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/blob/main/pkg/query-api/ontology/ontology.go)
- [Rails Aggregation Engines](https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/database/aggregation)
