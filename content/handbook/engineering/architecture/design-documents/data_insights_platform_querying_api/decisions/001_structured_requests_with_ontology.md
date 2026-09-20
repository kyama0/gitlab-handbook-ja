---
title: 'Data Insights Platform Querying API ADR 001: オントロジー定義を使用した構造化リクエスト'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/data_insights_platform_querying_api/decisions/001_structured_requests_with_ontology/
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-18T08:38:37+02:00"
translated_at: "2026-09-20T02:48:43+00:00"
translator: codex
stale: false
---

## 背景 {#context}

[設計ドキュメント](../_index.md)では、UI との通信に GraphQL と REST を選択し、モノリスと DIP 間では Protobuf-over-gRPC API を使用することにしました。その API でクエリをどう表現するか、つまりゲートウェイ経由で渡す SQL にするか、構造化リクエストにするかは未決定でした。

このための初期の基盤はマイルストーン 19.0 で導入されました。ユースケースごとに専用の RPC を必要とせず、ドメインをパラメーターとして受け取る[汎用 `Query` RPC](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/merge_requests/125)と、Go ではなく YAML で新しいドメインを追加できる[オントロジードキュメントからのドメインの読み込み](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/merge_requests/126)です。

2026-08-11 に、チームは Query API 統合の方向性を話し合うために集まりました。

## 決定 {#decision}

SQL ゲートウェイではなく、構造化リクエストとオントロジー定義を使用します。

- `Query` RPC は汎用的に設計されています。その Protobuf 定義は特定のテーブルや列と 1 対 1 で結び付いておらず、API の機能範囲をできる限り広くカバーすることを目指しています。汎用インターフェースでは不十分な場合は、`GetHierarchyContributions` などのドメイン固有の RPC を併せて導入することもできます。
- DIP が、テーブル、マイグレーション、マテリアライズドビューなどの物理ストレージを管理します。各ドメインが公開する内容を記述したオントロジードキュメントを公開します。
- Rails がビジネスロジックを管理します。クエリできる対象を把握するため、オントロジーを読み込む必要があります。
- 新しいテーブルやドメインを追加する際に protobuf の変更は不要です。各ドメインはオントロジー YAML ファイルで記述します。
- Rails は、存在するドメインを把握するためにオントロジーを使用する必要があります。DIP では、列が存在することや主キーが一致することの確認、トラバーサルパスとなる列の指定など、リクエストの検証に使用することを意図しています。現在、DIP はオントロジーに照らしてリクエストを検証します。ドメインは登録済みでなければならず、トラバーサルパスの形式は正しくなければならず、ドメインが宣言していない名前付きメトリクスやメジャーは拒否されます。通常の列名は宣言済みの列とまだ照合していないため、未検証のまま ClickHouse に渡ります。オントロジーファイル自体では、ドメインとテーブルの存在のみを確認しています。
- Rails は、特定の DIP バージョンではなく、互換性のあるオントロジーに依存する必要があります。互換性は CI 時に検証し、場合によっては実行時にも検証して、適切に機能を縮退させる必要があります。たとえば、古い DIP があるメトリクスを提供していない場合、その機能を利用不可として表示します。
- GLQL は DIP に直接クエリしません。Rails は、認可やユーザー ID をユーザーオブジェクトに解決するといった情報の付加を行うため、引き続き処理経路に含まれます。認可を Rails から別のサービスに切り出す動きがあり、理論上は将来 Query API が Rails を経由せずに済む可能性がありますが、そのサービスはまだ存在しないため、これを前提に計画してはいけません。その場合でも、情報の付加には Rails が必要です。

[設計ドキュメント](../_index.md)に、リクエストフローの図とオントロジー YAML の構造を掲載しています。

## 影響 {#consequences}

### 利点 {#positive}

- 新しいテーブルやドメインは、proto を変更せずに YAML ファイルで追加できます。
- DIP は ClickHouse 以外のデータソースもサポートできます。S3/GCS を直接の出力先とする機能がロードマップに含まれていますが、SQL ゲートウェイを採用すると、これらの選択肢は排除されていたはずです。
- ストレージの詳細は DIP の内部にとどまるため、後述のマッピングの問題を解決すれば、DIP は Rails を壊さずにテーブルを再構成できます。
- オントロジーが、DIP（ストレージ）と Rails（ビジネスロジック）の間のインターフェースになります。

### 欠点 {#negative}

- 現在のオントロジー形式は物理テーブルと 1 対 1 で対応していますが、Query API はストレージの詳細を隠し、DIP が Rails を壊さずに再構成できるようにすることを意図しています。内部向けと外部向けのマッピングを分離する必要がありそうです。実現可能に見えますが、調査が必要です。[ADR 002](002_rails_dip_integration_boundaries.md)では、オントロジーを Rails のスキーマキャッシュから生成すべきと決定しており、これは物理構造との 1 対 1 のマッピングを促すため、この分離を設計する際には両方の決定を整合させる必要があります。
- サブクエリ、CTE、UNION、複数ドメインの JOIN はまだサポートしていません。Optimize の DORA と脆弱性に関する取り組みでは、最大 4 段階の入れ子が必要です。私たちは共有ディメンションによって実現可能だと考えていますが、POC が必要です。実証するまでは、これらのケースで API を使用できません。
- スキーマ変更とバックフィルは、最も検討が進んでいない部分です。誰が新しいスキーマを定義するのか、誰が DIP でマイグレーションとバックフィルを実行するのか、ビジネスルールをどこに置くのかが未解決です。サービスをまたぐ汎用的なデータベースマイグレーションのワーキンググループを立ち上げつつあります。
- DIP がテーブルを管理するため、ClickHouse のマイグレーションは事実上、時間をかけて GitLab モノリスから DIP に移っていきます。現在の構成は当面機能します。
- 新しいメトリクスの開発が遅くなる可能性があります。新しいメトリクスには、DIP のリリース、次に Rails のリリース、そして GLQL のリリースが必要になる可能性があり、現在の 2 回に対して 3 回のリリースになります。その後追加された名前付きメトリクスとメジャーのカタログにより、新しいメトリクスは DIP のコードリリースではなくオントロジーの変更で済むことが多くなるため、この負担は軽減されます。また、[ADR 002](002_rails_dip_integration_boundaries.md)では、プラットフォーム側の作業を伴わない Rails の宣言 1 つを目標にしています。

### 未解決の疑問 {#open-questions}

- オントロジーファイルの公開方法と Rails による取得方法は未決定です。[ADR 002](002_rails_dip_integration_boundaries.md)では、当面は Rails を正とし、Rails がすでにダンプしているスキーマ定義からオントロジーを生成すべきとしています。長期的には、Snowplow iglu レジストリのように、Rails がバージョンを指定して取得しキャッシュする共有レジストリを目指しています。また、proto ファイルの配置先の候補として[共有 proto レジストリ](https://gitlab.com/gitlab-org/protos)が挙げられました。

### 対象外 {#out-of-scope}

- ドメイン間でフィールド名（トラバーサルパス、ユーザー ID、名前空間 ID）を標準化することも考えられます。まずは既存の列名を使用して問題ありません。
- メトリクス定義（メタデータ層）は別の議論であり、Analytics Instrumentation の内部メトリクスに関する取り組みと重なります。
- 認可ロジックの切り出しや、Workhorse などの外部 API インターフェースとのやり取り。

## 代替案 {#alternatives}

- SQL ゲートウェイ。SQL ゲートウェイに意味があるのは ClickHouse が唯一のデータソースである場合だけで、DIP には他のデータソースも加わるため、不採用としました。また、ストレージの詳細が Rails に漏れてしまいます。
- Rails の集計ビジネスロジックをすべて DIP に移す案。Rails がドメインの意味を保持するため、不採用としました。より限定的な移行は進行中です。どの関数を、どのオペランドに、どの条件と重複排除を適用して実行するかという集計の仕組みは、DIP のオントロジーで宣言すべきです。Rails は、列挙型の名前や GlobalID など、呼び出し側向けの語彙を保持します。このための仕組みは導入済みで、本番のドメインをそこに移行する作業を進めています。

## 参考資料 {#references}

- [エピック: Data Insights Platform Querying API](https://gitlab.com/groups/gitlab-org/analytics-section/-/work_items/10)
- [アプローチの比較](https://gitlab.com/groups/gitlab-org/analytics-section/-/work_items/10#note_3611607229)
- [具体例](https://gitlab.com/groups/gitlab-org/analytics-section/-/work_items/10#note_3617056760)
- [汎用 RPC インターフェース、最初のイテレーション](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/merge_requests/125)
- [オントロジードキュメントによるドメインの読み込み](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/merge_requests/126)
- [汎用 proto](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/blob/main/pkg/proto/gitlab/generic/v1/generic.proto)
- [オントロジー定義](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/blob/main/pkg/query-api/ontology/ontology.go)
- [オントロジーの例](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/blob/main/pkg/query-api/ontology/testdata/labels.yaml)
- [共有ディメンションの JOIN](https://gitlab.com/gitlab-org/analytics-section/platform-insights/core/-/work_items/144)
