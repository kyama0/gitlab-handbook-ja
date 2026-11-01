---
title: "Artifact Registry ADR 027：レジストリデータの Orbit へのレプリケーション"
owning-stage: "~devops::package"
description: "認可を Artifact Registry 内に維持しながら、固定された Artifact Registry のテーブル群を Siphon CDC で Orbit にレプリケーションする決定"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/artifact_registry/decisions/027_replicating_registry_data_to_orbit/"
upstream_sha: 52419353ea755a1ac823553385f8636ff2fcde17
lastmod: "2026-10-29T20:22:58+01:00"
translated_at: "2026-11-01T07:33:26+00:00"
translator: codex
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## ステータス {#status}

**提案中。**

## 背景 {#context}

### Orbit の概要と、この設計で重要な理由 {#what-orbit-is-and-why-it-matters-here}

Orbit は GitLab のナレッジグラフです。GitLab のエンティティをノードとエッジとして保存し、人や AI エージェントが
エンティティをまたぐ質問をできるようにします。グラフは
[knowledge-graph リポジトリ](https://gitlab.com/gitlab-org/orbit/knowledge-graph)で構築します。

モノリスのパッケージは、すでに Orbit に `Package`、`HAS_PACKAGE`、`BUILT_BY`、
`HAS_VULNERABILITY` として存在します。Artifact Registry のデータも同じパターンに従うべきです。この取り組みは、
[gitlab#605695](https://gitlab.com/gitlab-org/gitlab/-/work_items/605695)と
[エピック 22707](https://gitlab.com/groups/gitlab-org/-/epics/22707)で追跡しています。

### グラフだけが答えられること {#what-only-the-graph-can-answer}

Artifact Registry API は、自身のデータに関する質問に答えます。グラフが価値を発揮するのは、質問が
Artifact Registry とモノリスをまたぐ場合です。

**v0 で答える質問**：

- このリポジトリに公開したのは、どのプロジェクトですか？
- このプロジェクトは、Artifact Registry の全リポジトリを通じて何を公開しましたか？
- 特定の組織の範囲で、これらのモノリスのプロジェクトやグループについて Artifact Registry が保持しているものを、
  1 回のクエリで取得できますか？

依存関係と脆弱性が Artifact Registry のグラフに含まれた**後で答える質問**：

- この脆弱性の影響を受ける Artifact Registry のバージョンはどれですか？
- アップストリームから脆弱なバージョンを提供している仮想リポジトリはどれですか？

v0 だけでは価値は限られます。依存関係と脆弱性を含めることで、グラフの意義が大きくなります。Orbit の
`HAS_VULNERABILITY` が現在対象としているのは、Artifact Registry のバージョンではなく、モノリスのパッケージです。

### 現在 Orbit にデータが届く仕組み {#how-data-reaches-orbit-today}

Orbit は、Siphon を通じてモノリスのデータを取得します。

1. Siphon は、論理レプリケーションでモノリスの Postgres データベースを読み取ります。
2. Siphon のプロデューサーが、変更を NATS に公開します。
3. Siphon のコンシューマーが、それを ClickHouse に書き込みます。
4. Orbit のインデクサーが、それらのテーブルからグラフのノードとエッジを構築します。
5. クエリ実行時に、Rails が結果を秘匿処理します。

Artifact Registry では、次の 2 つの制約が重要です。

- **Siphon のデータソースはモノリスのデータベースに限られます。** Siphon がレプリケーションするのは、モノリスの `main`、`ci`、`sec` データベース
  だけです。
- **秘匿処理はフェイルクローズです。** Rails は、すべての結果を `Ability.allowed?` でチェックします。不明な型や存在しない行は
  拒否します。

### 現在の Artifact Registry が適合しない理由 {#why-the-artifact-registry-does-not-fit-today}

| Orbit が前提とするもの | Artifact Registry の実態 |
| --- | --- |
| モノリス内のソースデータベース（`main`、`ci`、`sec`） | 独立した Postgres データベース（[ADR-006](006_technology_stack.md)、[ADR-024](024_infrastructure_delivery.md)） |
| ノードとエッジの `Int64` ID | UUIDv7 の ID（[ADR-007](007_database_schema.md)）。Orbit には UUID のネイティブサポートが必要です。 |
| 名前空間に属するすべての行の `traversal_path`（`org_id/ns/.../`） | `traversal_path` はありません。すべてのテーブルに `namespace_id` があります。 |
| ActiveRecord モデル上の `Ability.allowed?` による認可 | Artifact Registry 内での認可（[ADR-021](021_authorization.md)） |

この表の背景には、次の 4 つの事情があります。

- **初めての外部プロデューサー。** Siphon がサポートするのは PostgreSQL のみです。データソースの追加には、Siphon と
  データベース間のネットワーク接続、新しい Siphon プロデューサー、取得するテーブルのメタデータが必要です。Artifact Registry は、
  モノリス外のデータベースを対象とする初めてのプロデューサーになります。
- **組織カラムがありません。** Artifact Registry には組織カラムがありません。組織の UUID は、
  `entity_type = 'organization'` のときの `namespaces.entity_id` にあります（[ADR-022](022_namespace_decoupling.md)）。
- **外部から見えないロール。** Artifact Registry は、ロール（Artifact Viewer、Contributor、Manager、Admin）を
  認証・認可プラットフォームの Relationships API 内にタプルとして保存します。GLAZ ポリシーエンジンのサイドカーが評価します（[ADR-021](021_authorization.md)）。
  Rails と Orbit からは見えません。現状では、Artifact Registry のすべての行が、すべてのユーザーから隠されます。
- **イベントストリームがありません。** Artifact Registry には、アウトボックスやドメインイベントのテーブルがありません。Snowplow に送信するのは、
  利用イベントのみです（[ADR-012](012_usage_data_collection.md)）。

### Cells の制約 {#the-cells-constraint}

GitLab の ClickHouse はセルローカルです。グローバルサービスからセルローカルの ClickHouse にデータを送ることはできません。Orbit チームは、次の 2 点を
確認しました。

- 短期から中期では、従来の SaaS インスタンスの ClickHouse への接続が可能です。Orbit は、すでに
  そのインスタンスからインデックスを作成しています。他のセルからその ClickHouse へのデータ流入はありません。
- Artifact Registry がセルローカルになれば、現在の Cells と Siphon の設計に適合します。

今後 1 年にわたり、新しい環境をデプロイします。従来の SaaS インスタンスからデータを移行し、そのインスタンスは最終的に
廃止します。Orbit 自体をセルローカルにするかグローバルにするかは、未決定です。

## 決定 {#decision}

**固定された Artifact Registry のテーブル群を、Siphon CDC で従来の SaaS の ClickHouse にレプリケーションします。Orbit は、そこからグラフの
インデックスを作成します。認可は Artifact Registry 内に維持します。**

### 1. Siphon CDC によるレプリケーション {#1-replicate-with-siphon-cdc}

Artifact Registry の Postgres データベースを、新しい Siphon のデータソースとして追加します。Siphon は、論理レプリケーションで読み取ります。
行は、従来の SaaS の ClickHouse に `siphon_ar_*` テーブルとして取り込まれます。Orbit は、モノリスのテーブルと同様に、
それらのテーブルからインデックスを作成します。

- **適用範囲**：当面は GitLab.com のみです。
- **方向**：データは Postgres からの一方向にのみ流れます。この経路のどの部分も、Artifact Registry の実行場所には依存しません。
- **鮮度**：CDC はほぼリアルタイムです。鮮度は Siphon の遅延と等しくなります。Orbit チームと目標に合意します。

これは、[gitlab#605695](https://gitlab.com/gitlab-org/gitlab/-/work_items/605695)の送出メカニズムに関する問いに答えるものです。
仕組みは継続的なレプリケーションであり、定期的な整合処理ではありません。

### 2. レプリケーション対象テーブルの一覧は契約 {#2-the-replicated-table-list-is-a-contract}

レプリケーションするテーブル群と、Orbit が読み取るカラムは、Artifact Registry と
Orbit/Siphon チーム間の契約です。v0 の正確な一覧は、
[gitlab#605695](https://gitlab.com/gitlab-org/gitlab/-/work_items/605695)で追跡しています。

- レプリケーションするテーブルのスキーマ変更には、Orbit/Siphon のレビューが必要です。
- 一覧は、Artifact Registry のマイグレーションとともにバージョン管理します。
- Orbit がインデックス作成に合意したテーブルだけを、一覧に追加します。
- Artifact Registry は行を論理削除します（[ADR-010](010_data_retention.md#soft-delete)）。論理削除は、削除ではなく更新としてレプリケーション
  されます。ノードの抽出では、論理削除された行と、削除された名前空間の配下の行を除外する必要があります。そうしないと、グラフに
  残ります。

### 3. v0 のグラフモデル {#3-v0-graph-model}

ドメインは `artifact_registry` です。v0 の対象は、リポジトリ、パッケージ、バージョン、仮想リポジトリと
アップストリームリポジトリ間のアップストリームリンク、およびバージョンからそれを公開したモノリスのプロジェクトへのリンクです。

コンテナイメージ、リモートキャッシュテーブル、ファイルとブロブ、依存関係は v0 の対象外です。正確なノード名とエッジ名、
および実装計画は、[gitlab#605695](https://gitlab.com/gitlab-org/gitlab/-/work_items/605695)
と[エピック 22707](https://gitlab.com/groups/gitlab-org/-/epics/22707)で追跡しています。

これは、
[gitlab#605695](https://gitlab.com/gitlab-org/gitlab/-/work_items/605695)のエンティティとエッジに関する問いに答えるものです。`gitlab_project_id` は外部キーのない不透明なテキスト
なので、モノリスのプロジェクトへのリンクは、Orbit がそれをモノリスの `Project` ノードに解決できるかに依存します。

### 4. Orbit は UUID の ID をネイティブにサポートする必要がある {#4-orbit-must-support-uuid-ids-natively}

Orbit は、ノードとエッジの UUID の ID をネイティブにサポートする必要があります。これは要件であり、Orbit チームへの依存事項です。

- **ハッシュ化は採用しません**：v0 であっても、UUID を `Int64` にハッシュ化しません。衝突が起きると、あるノードが、場合によっては別の
  組織のノードを、気付かれずに置き換えてしまいます。その場合、安全性が、すべてのクエリ経路で秘匿処理を完璧に実行することに依存してしまいます。
- **`bigint` カラムは採用しません**：Artifact Registry のテーブルへの追加には、パーティション分割されたテーブルのマイグレーション
  と、2 つ目の ID が必要になります。
- **UUID キーは Artifact Registry の要件です**：[ADR-007](007_database_schema.md#namespace-id-type)（名前空間 ID の型の
  セクション）を参照してください。モノリスから切り出すすべてのサービスで、UUID キーを使用します。

UUID のネイティブサポートが実現するまで、Artifact Registry のデータは Orbit に取り込めません。予定の有無と時期は、
Orbit チームへの未解決の質問です。

### 5. グラフの行は組織ルートのパスを使用する {#5-graph-rows-use-an-org-root-path}

グラフの行は、グローバルノードではなく、組織ルートの `traversal_path`（`<org_id>/`）を使用します。組織ルートのパスによって、
秘匿処理の前に低コストでフィルタリングできるため、Orbit から Artifact Registry への呼び出しが減ります。

`traversal_path` は `organization_id` をエンコードします
（[構造](https://docs.gitlab.com/development/database/clickhouse/clickhouse_table_design_with_siphon/#traversal_path-structure)）。
ClickHouse には、組織の UUID から数値の組織 ID へのマッピングが必要です。Rails は名前空間の UUID の行を保持しており
（[gitlab#603023](https://gitlab.com/gitlab-org/gitlab/-/work_items/603023)）、それをレプリケーションできる可能性があります。

未解決事項：Rails が組織ルートのパスを付与するかの確認。

### 6. 認可は Artifact Registry 内に維持する {#6-authorization-stays-in-the-artifact-registry}

Orbit は Artifact Registry の権限をコピーしません。Orbit の秘匿処理は、Artifact Registry に問い合わせます。

- 秘匿処理に、Artifact Registry のリソース型向けの非 ActiveRecord の分岐を追加します。この分岐は、リソース ID を
  Artifact Registry に送信します。
- 分岐は、エンドユーザーのトークンで、エンドユーザーとして呼び出します（[ADR-020](020_authentication_flow.md)）。サービス
  トークンを使ってユーザーの身元を主張することは、決してしません。[ADR-021](021_authorization.md)がこれを禁止しており、この ADR でもそのルールを維持します。
- 秘匿処理には、新しい Artifact Registry のエンドポイントが必要です。GLAZ の `BatchCheck` の契約は、Artifact
  Registry 内部のものです。現在、Rails が取得するのは、名前空間の範囲に限定された読み取りに埋め込まれた判定のみで、対象も名前空間と
  リポジトリに限られます。
- 新しいエンドポイントは、1 人のユーザーについて、任意の型の ID のリストをチェックします。無効化、一時停止、ブロックされた
  レジストリも隠す必要があります。
- Rails は、Artifact Registry のロールを決してミラーリングしません。
- 分岐はフェイルクローズです。不明な型、Artifact Registry への到達不能、タイムアウト、判定の欠落があれば、
  その行を拒否します。

この方向性は、[ADR-020](020_authentication_flow.md)と
[ADR-021](021_authorization.md)のコールバック禁止の制約に沿っています。この制約は、Artifact Registry がリクエストを処理している間に
GitLab インスタンスを呼び出すことを禁じます。GitLab インスタンスから Artifact Registry を呼び出すことは禁止していません。秘匿処理は、
GitLab から Artifact Registry への呼び出しです。Artifact Registry から GitLab への新しい呼び出しは発生しません。

これは、[gitlab#605695](https://gitlab.com/gitlab-org/gitlab/-/work_items/605695)の権限に関する問いに答えるものです。
強制適用は、クエリ実行時の秘匿処理で行います。グラフ層は、Artifact Registry の権限を一切保持しません。

新しいノード型は、EE の秘匿処理サービスにも登録する必要があります。登録しないと、結果は 0 行になります。

### 7. 続行可否の判断：認可のレイテンシー {#7-gono-go-authorization-latency}

Artifact Registry のデータに関係する Orbit の回答すべてで Artifact Registry への権限確認が必要になると、グラフは、
エージェントが Artifact Registry API を直接呼び出すのと同じくらい遅くなるおそれがあります。そのうえ、データの鮮度は低くなり、
構成要素も増えます。

**合格条件**：Artifact Registry のデータに関係する Orbit のクエリは、権限チェックを含めた p95 が、
Artifact Registry API の直接呼び出しで同じ回答を組み立てる場合よりも高速でなければなりません。

- 本番向けの作業に入る前に、最初のローカルでの技術検証で測定します。
- 技術検証の前に、Orbit チームと絶対値に合意します。

合格条件を満たせなければ、次の順に代替策を取ります。

1. 最初に組織ルートのパスでフィルタリングし、その後、リクエスト内で権限の判定をキャッシュします。
2. ロールのタプルをレプリケーションします（代替案 4）。
3. Artifact Registry のデータをグラフに含めません。エージェントは Artifact Registry API を使用します。

### 8. データベースの要件 {#8-database-requirements}

Artifact Registry のデータベースには、以下が必要です。`wal_level` やパブリケーションの設定は、まだありません。

- **論理デコード**：Runway の CloudSQL インスタンスで有効にします（[ADR-024](024_infrastructure_delivery.md)）。
- **パブリケーションとユーザー**：モノリスの Siphon のセットアップに従う、パブリケーションと Siphon のユーザーです
  （[`gitlab:siphon:setup`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/tasks/gitlab/siphon/setup.rake)）。
- **ネットワーク経路**：Siphon のインフラとデータベース間の接続です。
- **WAL の保護策**：Siphon が停止すると、レプリケーションスロットがインスタンス上に WAL を保持し、ディスクが満杯になるおそれがあります。そうなると、
  Artifact Registry が停止します。次の 3 つの保護策を追加します。
  - モノリスのデータベースと同様に、`max_slot_wal_keep_size` を、プロビジョニングしたディスクの約 10% に設定します。
  - Siphon の
    [緊急モード](https://gitlab.com/gitlab-org/analytics-section/siphon/#emergency-mode-nats-unavailable)を有効にします。NATS が利用できないときに
    WAL データをオブジェクトストレージにバッファリングするため、Postgres に WAL が蓄積しません。
  - レプリケーションスロットの遅延アラートを追加します。

Siphon チームがコンシューマーについて確認したとおり、パーティション分割されたテーブルは `publish_via_partition_root` なしでレプリケーションできます。
レプリケーション対象のすべてのテーブルに主キーがあるため、デフォルトのレプリカ識別が機能します。

### 9. Cells {#9-cells}

Artifact Registry がセルローカルになっても、この設計は書き直さずに使えます。Postgres が引き続き信頼できる唯一の情報源です。
組織が別のセルに移動するときは、次のようになります。

1. 移動先のセルが INSERT を受け取ります。
2. その後、移動元のセルが DELETE を実行します。
3. Siphon は両方をレプリケーションします。
4. ClickHouse と Orbit が追随します。

この設計は、
[Siphon のテーブル設計ドキュメント](https://docs.gitlab.com/development/database/clickhouse/clickhouse_table_design_with_siphon/#working-in-cells-environment)に記載されています。

| 維持するもの | 変更するもの |
| --- | --- |
| レプリケーション対象テーブルの一覧とグラフモデル | Siphon は、従来のインスタンスに対する 1 つのプロデューサーの代わりに、セルごとに 1 つのプロデューサーを実行します |
| Postgres が唯一のデータソースであること | ClickHouse の送信先が、従来の SaaS インスタンスからセルローカルの ClickHouse に移ります |
| Artifact Registry 内での認可 | 秘匿処理は、正しいセルの Artifact Registry に到達する必要があります |
| 組織移動時の動作（INSERT の後に DELETE） | Orbit 自体の配置（グローバルかセルローカルか）によって、セルをまたいでグラフをクエリする方法が決まります |

## 影響 {#consequences}

### 利点 {#positive}

1. **実績のあるパイプラインを再利用します**：同じ Siphon、ClickHouse、インデクサーの経路が、モノリスのパッケージにも使われています。
2. **データのために Artifact Registry の実行時動作を変更する必要がありません**：レプリケーションは、先行書き込みログを読み取ります。リクエスト
   経路に新しいイベントやジョブはありません。認可には、新しいエンドポイントが 1 つ必要です。
3. **ほぼリアルタイムです**：CDC の鮮度は、Siphon の遅延と等しくなります。
4. **権限の信頼できる情報源が 1 つです**：引き続き、アクセスを判断するのは Artifact Registry だけです。ロールの
   ミラーが乖離することはありません。
5. **Cells への移行時にも無駄になりません**：データは Postgres からの一方向にのみ流れるため、この経路を引き継げます。
6. **削除もレプリケーションします**：Siphon は削除された行を論理削除された行に変換するため、グラフからパージされた行が除かれます。

### 欠点 {#negative}

1. **初めての外部プロデューサーです**：Siphon は、これまでモノリス外のデータベースを読み取ったことがありません。初回は、Orbit チームと腰を据えて
   話し合う必要があります。
2. **スキーマの結合があります**：Siphon のテーブル用の ClickHouse スキーマは、現在モノリス内にあります（外部への移動を予定しています）。
   レプリケーションする Artifact Registry のテーブルを追加または変更するには、モノリス内に対応する ClickHouse のマイグレーションが
   必要です。これにより、該当テーブルの Artifact Registry のマイグレーションが遅くなります。
3. **Artifact Registry のノードに関係するすべての Orbit クエリでレイテンシーが増えます**：秘匿処理で、エンドユーザーとして Artifact
   Registry を呼び出します。決定 7 の続行可否の合格条件によって、このリスクを抑えます。
4. **Artifact Registry に新たな負荷がかかります**：Orbit のクエリが、新しい認可エンドポイントの呼び出し元になります。
5. **Orbit チームに依存します**：Orbit が UUID の ID をネイティブにサポートするまで、Artifact Registry のデータを Orbit に取り込めません。
6. **インフラの作業が必要です**：論理デコード、パブリケーション、レプリケーション用ユーザー、ネットワークアクセスは、いずれも Infra の
   作業が必要です。
7. **GitLab.com のみです**：セルフマネージドと Dedicated では、Orbit に Artifact Registry のデータを取り込みません。
8. **レプリケーションスロットが停止すると、データベースのディスクが満杯になるおそれがあります**：そうなると、Artifact Registry が停止します。決定 8 の WAL の
   保護策によって、このリスクを抑えます。

## 検討した代替案 {#alternatives-considered}

| 代替案 | 判断 |
| --- | --- |
| API ベースの定期同期 | 不採用 |
| Artifact Registry 内のドメインイベントのアウトボックス | 不採用 |
| Snowplow から Snowflake への経路を再利用 | 不採用 |
| ロールのタプルを ClickHouse にレプリケーション | v0 では不採用 |
| Rails が Artifact Registry のリソースを ActiveRecord モデルとしてミラーリング | 不採用 |

### 代替案 1：API ベースの定期同期 {#alternative-1-api-based-periodic-sync}

#### アプローチ {#approach}

Artifact Registry が一覧取得エンドポイントを公開します。GitLab 側または Orbit 内のジョブが、定期的にそれらを呼び出し、
結果をグラフに書き込みます。

#### 採用しなかった理由 {#why-not-chosen}

1. **鮮度**：グラフの鮮度はポーリング間隔に制限されます。CDC はほぼリアルタイムです。
2. **削除**：削除された行を見つけるには、ポーリングで全件一覧の差分を取る必要があります。CDC は削除を直接報告します。
3. **双方に新しいコードが必要です**：新しい一覧取得エンドポイント、ページング、同期ジョブが必要です。Siphon はすでに存在します。
4. **負荷**：名前空間をまたぐスキャンが、リクエストのトラフィックとリソースを取り合います。

### 代替案 2：Artifact Registry 内のドメインイベントのアウトボックス {#alternative-2-domain-event-outbox-in-the-artifact-registry}

#### アプローチ {#approach-1}

Artifact Registry が、各変更と同じトランザクション内でイベントの行を書き込みます。リレーが、それらの行を Orbit に公開します。

#### 採用しなかった理由 {#why-not-chosen-1}

1. **アウトボックスが存在しません**：Artifact Registry には、アウトボックスやドメインイベントのテーブルがありません。Snowplow に送られるのは、利用イベントのみです。
2. **書き込み経路に新しいコードが必要です**：すべての変更経路でイベントを書き込みます。漏れた経路があると、気付かれないままグラフに欠落が生じます。
3. **リレーが必要です**：Siphon は、すでに先行書き込みログを読み取っています。アウトボックスを追加すると、同じデータについて 2 つ目の変更フィードができます。
4. **将来の採用を排除しません**：Orbit が行の変更ではなく意味を持つイベントを必要とする場合、後からアウトボックスを追加できます。

### 代替案 3：Snowplow から Snowflake への経路を再利用 {#alternative-3-reuse-snowplow-to-snowflake}

#### アプローチ {#approach-2}

[ADR-012](012_usage_data_collection.md)の利用イベントのパイプラインでレジストリの状態を送り、データウェアハウスから
グラフを構築します。

#### 採用しなかった理由 {#why-not-chosen-2}

1. **データが適しません**：[ADR-012](012_usage_data_collection.md)のイベントは、操作（プッシュ、プル、削除）を表します。
   現在の状態は表しません。Orbit に必要なのは、状態と関係です。
2. **コンシューマーが異なります**：Snowplow のパイプラインは、プロダクト分析のために Snowflake にデータを送ります。Orbit は、ClickHouse からインデックスを作成します。
3. **仮名化**：パイプラインはデータを仮名化します。グラフには実際の識別子が必要です。
4. **オプトインによる対象範囲の制限**：セルフマネージドと Dedicated の Snowplow はオプトイン方式なので、いずれにしても全範囲を網羅できません。

### 代替案 4：ロールのタプルを ClickHouse にレプリケーション {#alternative-4-replicate-role-tuples-into-clickhouse}

#### アプローチ {#approach-3}

Artifact Registry のロール割り当てを ClickHouse にレプリケーションします。Orbit は、それらのタプルに基づいて行をフィルタリングし、Artifact
Registry を呼び出しません。

#### 採用しなかった理由 {#why-not-chosen-3}

1. **2 つ目の評価器が必要です**：タプルは、認証・認可プラットフォームの Relationships API 内にあり、GLAZ が評価します。Orbit には、
   GLAZ と完全に一致する独自の評価器が必要になります。
2. **乖離のリスク**：2 つの評価器の不一致は、単なるバグではなくデータ漏えいです。
3. **対象範囲が広くなります**：Relationships API 用の新しいレプリケーション元と、Orbit 内の新しいフィルタリング経路が必要です。
4. **将来の採用を排除しません**：認可の呼び出しが遅すぎる場合の、続行可否の合格条件（決定 7）における 2 番目の
   代替策です。

### 代替案 5：Rails が Artifact Registry のリソースを ActiveRecord モデルとしてミラーリング {#alternative-5-rails-mirrors-artifact-registry-resources-as-activerecord-models}

#### アプローチ {#approach-4}

Rails が、Artifact Registry のリソースごとに読み取り専用の ActiveRecord モデルを保持します。既存の秘匿処理サービスが、
それらのモデルを読み込み、`Ability.allowed?` を実行します。

#### 採用しなかった理由 {#why-not-chosen-4}

1. **状態が重複します**：Rails が、Artifact Registry のデータの 2 つ目のコピーを保持し、同期を維持します。
2. **権限が重複します**：`Ability.allowed?` には、Rails が保持していない Artifact Registry のロールが必要になります。
   それらのミラーリングは、ロールのタプルをミラーリングすることを意味します（代替案 4 を参照）。
3. **分離の目標に反します**：[ADR-022](022_namespace_decoupling.md)では、Artifact Registry 内に Rails の識別子を
   持ち込みません。Rails がすでに保存しているのは、名前空間ごとに 1 行の名前空間 UUID のみです
   （[gitlab#603023](https://gitlab.com/gitlab-org/gitlab/-/work_items/603023)）。

## 未解決の質問 {#open-questions}

1. **Orbit の UUID ネイティブサポート。** 予定はありますか、また、いつですか？これが実現するまで、Artifact Registry のデータを Orbit に
   取り込めません。これには、
   Orbit チームの対応が必要です。
2. **Rails の組織ルートのパス。** Rails は、組織ルートのパスを付与する必要があります。実際に付与することを確認する必要があります。
3. **Siphon 設定の配置場所。** `db/siphon/tables` が受け付けるのは、`main`、`ci`、`sec` のみです。
   - **短期**：ClickHouse のマイグレーションと Siphon のテーブル定義は、モノリス内に配置します。
     ClickHouse のマイグレーションと Siphon の生成ツールが、そこにしか存在しないためです。そのテストは、対象テーブルが
     モノリスの PostgreSQL データベース内にあることを前提としますが、Artifact Registry のテーブルには当てはまらないため、ツールの改修が必要です。
   - **長期**：Artifact Registry リポジトリが、独自の ClickHouse のマイグレーションと Siphon のテーブル
     定義を持ちます。より多くのサービスがモノリスから切り出されれば、モノリスは Siphon の信頼できる唯一の情報源ではなくなります。
   - **未解決事項**：2 つのリポジトリ間でスキーマ変更の整合性を維持する方法。
4. **アラートとオンコールの担当。**
   - **テーブル変更**：Artifact Registry チームは、自動化されたエンドツーエンドテストを通じて、テーブルの変更時に Siphon の動作を
     維持します。
   - **NATS**：共有インフラなので、NATS のアラートは Siphon/DIP チームに送ります。
   - **Siphon のプロデューサー**：Artifact Registry チームが十分な Siphon の経験を積むまでは、共同で担当します。
   - **ClickHouse への取り込み**：テーブルや識別子のプレフィックス、
     たとえば `artifact_registry_` を使って、Artifact Registry チームにアラートを送ることができます。
   - **DBRE の担当範囲**：現在、Siphon が読み取るのは DBRE がサポートするモノリスのデータベースのみです。DBRE のサポートは、
     Siphon のデータソースの要件でしょうか？Artifact Registry のデータベースは Runway の CloudSQL インスタンスなので、誰が
     担当するか確認する必要があります。
5. **秘匿処理時のエンドユーザーのトークン。** 秘匿処理は、ユーザー自身のリクエストではなく、`gkg-server` が呼び出す内部 Orbit API 内で
   実行されます。Rails には、その時点で、そのユーザーの Artifact Registry のトークンを取得する方法が必要です。これには、
   Auth Platform チームの対応が必要です。
6. **鮮度の目標。** CDC の鮮度は、Siphon の遅延と等しくなります。Orbit は SLA を表明していません。Orbit チームと目標に
   合意します。
7. **Orbit はグローバルかセルローカルか。** これは未決定です。Cells の議題の最優先項目です。この答えによって、
   Cells への移行後のグラフのクエリ方法が変わります。
8. **セルフマネージドと Dedicated。** ClickHouse は、すべてのデプロイ環境で利用できるわけではありません
   （[ADR-012](012_usage_data_collection.md)）。この ADR の対象は GitLab.com のみです。他のデプロイ環境には、別の
   決定が必要です。

## 参考資料 {#references}

- [Siphon のテーブル設計：Cells 環境での運用](https://docs.gitlab.com/development/database/clickhouse/clickhouse_table_design_with_siphon/#working-in-cells-environment)
- [Siphon のテーブル設計：traversal_path の構造](https://docs.gitlab.com/development/database/clickhouse/clickhouse_table_design_with_siphon/#traversal_path-structure)
- [Siphon の緊急モード](https://gitlab.com/gitlab-org/analytics-section/siphon/#emergency-mode-nats-unavailable)
- [Orbit の knowledge-graph リポジトリ](https://gitlab.com/gitlab-org/orbit/knowledge-graph)
- [gitlab#605695：Orbit 内の Artifact Registry データ](https://gitlab.com/gitlab-org/gitlab/-/work_items/605695)
- [エピック 22707](https://gitlab.com/groups/gitlab-org/-/epics/22707)
- [gitlab#603023：Rails が名前空間の UUID を保存](https://gitlab.com/gitlab-org/gitlab/-/work_items/603023)
- [ADR-007：データベーススキーマ](007_database_schema.md)
- [ADR-012：利用データの収集](012_usage_data_collection.md)
- [ADR-020：認証フロー](020_authentication_flow.md)
- [ADR-021：認可](021_authorization.md)
- [ADR-022：名前空間の分離](022_namespace_decoupling.md)
- [ADR-024：GitLab.com ベータ版の提供に向けたインフラ](024_infrastructure_delivery.md)
