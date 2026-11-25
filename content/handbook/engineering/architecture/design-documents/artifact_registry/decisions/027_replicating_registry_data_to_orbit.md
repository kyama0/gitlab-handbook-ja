---
title: "Artifact Registry ADR 027：レジストリデータの Orbit へのレプリケーション"
owning-stage: "~devops::package"
description: "認可を Artifact Registry 内に維持しながら、固定された Artifact Registry のテーブル群を Siphon CDC で Orbit にレプリケーションする決定"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/artifact_registry/decisions/027_replicating_registry_data_to_orbit/"
upstream_sha: "c376e869c4e8737e946fb52ff739963c44730e6d"
lastmod: "2026-11-25T10:26:17+01:00"
translated_at: "2026-11-25T23:19:01+00:00"
translator: codex
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## ステータス {#status}

**提案中。**

## 背景 {#context}

Orbit は GitLab のナレッジグラフです。
GitLab のエンティティをノードとエッジとして保存し、人や AI エージェントがエンティティをまたぐ質問をできるようにします。
モノリスのパッケージはすでに Orbit に含まれており、Artifact Registry のデータも同じ方式で扱うべきです。

Artifact Registry API は、Artifact Registry 自体のデータに関する質問に答えます。
グラフが価値を発揮するのは、Artifact Registry とモノリスをまたぐ質問です。

- このリポジトリに公開したのは、どのプロジェクトですか？
- このプロジェクトは、Artifact Registry の全リポジトリを通じて何を公開しましたか？
- ある組織の範囲に絞って、これらのモノリスのプロジェクトやグループについて Artifact Registry が保持しているものを、1 回のクエリで取得できますか？

これらの質問だけで得られる価値は限られています。
依存関係と脆弱性がグラフに加わると、その価値が高まります。ある脆弱性の影響を受ける Artifact Registry のバージョンや、アップストリームから脆弱なバージョンを提供している仮想リポジトリが分かります。

Orbit はモノリスのデータを Siphon から取得します。
Siphon は論理レプリケーションで Postgres を読み取り、NATS を経由して変更を ClickHouse に書き込みます。
Orbit のインデクサーは、それらのテーブルからノードとエッジを構築します。
クエリ実行時に、Rails はすべての結果に秘匿処理を行います。秘匿処理はフェイルクローズで、不明な型や存在しない行は拒否します。

Artifact Registry は、次の 4 点でモノリスと異なります。

| Orbit が前提とするもの | Artifact Registry が持つもの |
| --- | --- |
| モノリス内のソースデータベース | 独立した Postgres データベース（[ADR-006](006_technology_stack.md)、[ADR-024](024_infrastructure_delivery.md)） |
| ノードとエッジの `Int64` ID | UUIDv7 の ID（[ADR-007](007_database_schema.md)） |
| ネームスペースに属するすべての行の `traversal_path` | 各行のネームスペース ID と、各ネームスペースの組織アンカー（[ADR-022](022_namespace_decoupling.md)） |
| Rails の Ability による認可 | Artifact Registry 内での認可。Rails からはそこで使用するロールが見えません（[ADR-021](021_authorization.md)） |

GitLab の ClickHouse は Cell 内にあり、グローバルサービスは Cell 内の ClickHouse にデータを送れません。
短期から中期にかけては、Artifact Registry はレガシー SaaS インスタンスの ClickHouse にデータを送れます。Orbit はすでにこの ClickHouse をインデックス化しています。
Orbit 自体をグローバルに配置するか Cell 内に配置するかは未定です。

## 決定 {#decision}

**Siphon CDC を使い、あらかじめ定めた Artifact Registry のテーブル群をレガシー SaaS の ClickHouse にレプリケーションします。
Orbit はそのデータをもとにグラフをインデックス化します。
認可は Artifact Registry が引き続き担当します。**

この決定は GitLab.com のみを対象とします。
Self-Managed と Dedicated は、すべてのデプロイメントに ClickHouse があるわけではないため、別途決定が必要です（[ADR-012](012_usage_data_collection.md)）。

### 常に満たすべき制約 {#what-must-always-hold}

| # | 制約 | 機械的に検証可能か？ |
| --- | --- | --- |
| 1 | **データソースは Postgres に限ります。** Orbit へのデータの受け渡しは、Artifact Registry のデータベースからのレプリケーションだけで行います。リクエスト処理経路ではグラフ用の書き込みをせず、その処理は Artifact Registry の稼働場所に依存しません。 | はい。リクエストは自身に関わるデータベース行にのみ書き込み、グラフが変わるのはレプリケーション対象の行が変わったときだけです |
| 2 | **レプリケーション対象のテーブルは連携時の契約です。** Orbit が読み取るテーブルや列を変更するには、Orbit と Siphon のレビューが必要です。Orbit がインデックス化に同意したテーブルのみ、対象に追加します。 | 一部。対象テーブルのスキーマ変更は検出できます。レビューは人が行います |
| 3 | **削除済みのデータはグラフから取り除きます。** ソフト削除は、削除操作ではなく更新操作としてレプリケーションします（[ADR-010](010_data_retention.md)）。グラフからは、ソフト削除済みの行、削除済みのネームスペースに属する行、パージ済みの行を取り除きます。 | はい。グラフの応答に該当する行が含まれません |
| 4 | **Artifact Registry のデータは専用のノード型とエッジを使います。** モノリスのパッケージとノード型やエッジテーブルを共有しません。 | はい。Artifact Registry の行が、モノリスの管理するノード型やエッジテーブルに入ることはありません |
| 5 | **ID は処理全体で UUID のまま扱います。** Orbit は、Artifact Registry の ID をすべての境界で不透明な UUID 文字列として保持し、ハッシュ化して `Int64` に変換することはありません。Artifact Registry も、数値の ID を別に追加しません。 | はい。グラフ内の Artifact Registry のノードとエッジの ID は、すべて元の行の UUID と一致します |
| 6 | **グラフの行は組織ルートのパスを使います。** Artifact Registry のグラフの各行には、所属する組織のルート `traversal_path` を格納します。グローバルパスやネームスペースごとのパスは使いません。 | はい。Artifact Registry のグラフの各行のパスは、組織を示す 1 つのセグメントだけで構成されます |
| 7 | **組織ルートパスの付与だけではデータを読み取れません。** Rails が組織ルートパスを付与するのは、Artifact Registry を有効にした組織のメンバーに限ります。付与に用いるアクセスレベルは全テーブルの最低レベルを下回り、ロールとしては付与しません。Orbit で付与済みのパスを使う読み取りは、ステータス確認やインデックス化のための読み取りを含め、すべてアクセスレベルに従います。 | はい。組織ルートパスの付与しか受けていないユーザーは、Artifact Registry 以外のテーブルの行や件数を読み取れません |
| 8 | **秘匿処理はエンドユーザーとして Artifact Registry に問い合わせます。** 秘匿処理はエンドユーザー自身のトークンで、Artifact Registry のリソース ID を Artifact Registry に送信します（[ADR-020](020_authentication_flow.md)）。サービストークンでユーザーの身元を表明することはありません（[ADR-021](021_authorization.md)）。Rails は Artifact Registry のロールをミラーリングしません。 | はい。秘匿処理の呼び出しにはすべてエンドユーザーのトークンが含まれ、Rails は Artifact Registry のロールを保持しません |
| 9 | **秘匿処理はフェイルクローズで動作します。** 型が不明、Artifact Registry に到達できない、タイムアウトが発生、または判定結果がない場合、その行へのアクセスを拒否します。秘匿処理が認識しないノード型については、行を返しません。 | はい。いずれの場合も行を返しません |
| 10 | **1 回のチェックで Artifact Registry と同じ対象を非表示にします。** 1 人のユーザーについて、型を問わず複数の ID を 1 回の呼び出しで確認します。セキュリティ上の理由でブロックされたか、無効化されたレジストリ内の ID は拒否します。利用停止中や使用量上限によりブロックされたレジストリは読み取りに応じるため（[ADR-022](022_namespace_decoupling.md)）、それらの ID へのアクセスはユーザーのロールに従います。 | はい。セキュリティ上の理由でブロックされたか、無効化されたレジストリの ID は拒否され、利用停止中のレジストリの ID に対する判定は、直接読み取る場合と同じになります |
| 11 | **すべての件数に秘匿処理を適用します。** 件数の秘匿処理に対応するまでは、Orbit は管理者以外に Artifact Registry ノードの集計結果を返しません。表示できない行が件数に含まれると、非表示のリソースの存在が分かってしまいます（[ADR-021](021_authorization.md)）。 | はい。管理者以外が Artifact Registry ノードを集計しようとすると、拒否されるか、結果に秘匿処理が適用されます |
| 12 | **ユーザーは複数の組織に所属できます。** ユーザーが所属する組織ごとに、その組織のルートパスを 1 つ追加します。 | はい。2 つの組織に所属するメンバーは、両方の組織の行を参照でき、それ以外の組織の行は参照できません |
| 13 | **Orbit にアクセスできることが前提です。** ユーザーが Orbit 内の Artifact Registry データにアクセスするには、自身が Orbit にアクセスできる必要があります。Artifact Registry へのアクセス権限だけでは閲覧できません。 | はい。Orbit にアクセスできないユーザーには Artifact Registry の行が返りません |
| 14 | **レプリケーションによるデータベースのディスク枯渇を防ぎます。** レプリケーションスロットが停止すると、先行書き込みログがインスタンスに残ります。ログの保持量にディスク容量を下回る上限を設け、NATS が停止している間は Siphon が Postgres の外でバッファリングします。スロットの遅延により上限に達する前にアラートを出します。 | 一部。保持上限の設定は読み取って検証できます。バッファとアラートは運用で対応します |

### レプリケーションを採用する理由 {#why-replication}

レプリケーションは先行書き込みログを読み取るため、リクエスト処理経路は変わりません。
データの鮮度は Siphon の遅延で決まります。削除は変更として届くため、ポーリングで欠落を探す必要がありません。
モノリスのパッケージも、すでに同じ Siphon、ClickHouse、インデクサーの経路を利用しています。
どのトポロジーでもデータソースは Postgres のままなので、この経路は Cells でも使えます（[Cells](#cells)を参照）。

### ID に UUID を使う理由 {#why-uuid-ids}

UUID をハッシュ化して `Int64` に変換すると、衝突する可能性があります。
衝突が起きると、あるノードが別のノードに気付かないうちに置き換わります。組織が異なる場合もあるため、安全性はすべてのクエリ経路で秘匿処理が正しく機能することに依存します。
Artifact Registry のテーブルに数値の列を設けるには、パーティション分割されたテーブルのマイグレーションと 2 つ目の ID が必要です。
UUID キーは Artifact Registry の要件です（[ADR-007](007_database_schema.md)）。モノリスから分離されるサービスは、どれも UUID キーを持ち込みます。

### 組織ルートのパスを使う理由 {#why-the-org-root-path}

Orbit は組織ルートのパスを使って、秘匿処理の前に低コストで絞り込めるため、Artifact Registry への呼び出しを減らせます。
組織ルートのパスにロールを付けると、管理者以外に組織内の大部分へのアクセスを許可してしまうため、この付与にはすべてのテーブルの最低レベルを下回るアクセスレベルを使います。
Artifact Registry のノード型では、このアクセスレベルを明示的に有効化します。アクセス可否は引き続き秘匿処理で判定します。
共有エッジテーブルの最低アクセスレベルでは組織ルートの行を参照できないため、Artifact Registry のエッジには専用のテーブルが必要です（制約 4）。

### Artifact Registry が認可を担当し続ける理由 {#why-authorization-stays-in-the-artifact-registry}

アクセス可否を決めるのは引き続き Artifact Registry だけです。ロールのコピーがないため、ロール間の不整合は生じません。
コールバックを禁止するルール（[ADR-020](020_authentication_flow.md)、[ADR-021](021_authorization.md)）では、Artifact Registry がリクエストの処理中に GitLab インスタンスを呼び出すことを禁止しています。
秘匿処理では GitLab インスタンスから Artifact Registry を呼び出すため、このルールを守れます。

### 続行可否の判断：認可のレイテンシー {#gono-go-authorization-latency}

Artifact Registry データに触れるすべての Orbit の応答に権限確認の呼び出しが必要だと、グラフは Artifact Registry API を直接呼ぶエージェントと同じ程度まで遅くなるおそれがあります。その場合、データの鮮度も低く、関わるコンポーネントも増えます。

**判断基準**：Artifact Registry のデータを扱う Orbit クエリは、権限チェックを含めても、Artifact Registry API の直接呼び出しから同じ回答を組み立てる場合より、p95 で速いことが条件です。
Orbit チームと先に基準値を合意し、本番環境に向けた作業を始める前に計測します。

基準に達しない場合、次の順で代替策を取ります。

1. 最初に組織ルートのパスで絞り込み、リクエスト内で権限の判定結果をキャッシュします。
1. ロールのタプルをレプリケーションします（[代替案 4](#alternative-4-replicate-role-tuples-into-clickhouse)）。
1. Artifact Registry のデータをグラフに含めません。エージェントは Artifact Registry API を使います。

### Cells {#cells}

Artifact Registry が Cell 内で稼働するようになっても、この設計は書き直さずに使えます。
組織の移動は、移動先 Cell での挿入と移動元 Cell での削除としてレプリケーションされ、ClickHouse と Orbit はその両方を反映します。

| 維持する点 | 変わる点 |
| --- | --- |
| レプリケーション対象のテーブルとグラフモデル | Siphon はレガシーインスタンス向けの 1 つのプロデューサーから、Cell ごとに 1 つのプロデューサーを実行する構成に移行します |
| Postgres を唯一のデータソースとすること | レプリケーション先は、レガシー SaaS インスタンスの ClickHouse から Cell 内の ClickHouse に変わります |
| Artifact Registry 内での認可 | 秘匿処理は該当する Cell の Artifact Registry に到達する必要があります |
| 組織の移動を挿入とそれに続く削除で扱うこと | Cell をまたぐグラフのクエリ方法は、Orbit 自体の配置によって決まります |

### 導入手順 {#adoption-path}

1. Orbit が、処理全体での UUID ID、組織ルートパスの付与、組織を範囲とするデータソースのインデックス化に対応します。3 つがそろうまで、Artifact Registry のデータは Orbit に入りません。
1. 続行可否の基準を満たすか測定します。
1. Artifact Registry のデータベースに、論理デコーディング、パブリケーション、Siphon 用のユーザー、Siphon へのネットワーク経路、制約 14 の保護措置を用意します。
1. 最初のグラフの対象は、リポジトリ、パッケージ、バージョン、仮想リポジトリとそのアップストリームリポジトリを結ぶリンク、および各バージョンと、その元になったモノリスのプロジェクト、パイプライン、ユーザーを結ぶリンクです。
1. コンテナイメージ、リモートキャッシュデータ、ファイルと blob、依存関係、およびバージョンを pull したプロジェクトへのリンクを追加するには、項目ごとに別途決定が必要です。

## 影響 {#consequences}

### 利点 {#positive}

1. **実績のあるパイプラインを再利用できます**：モノリスのパッケージは同じ経路で Orbit に届きます。
1. **データ処理のためのランタイム変更が不要です**：レプリケーションは先行書き込みログを読み取ります。認可には新しいエンドポイントが 1 つ必要です。
1. **ほぼリアルタイムで反映できます**：データの鮮度は Siphon の遅延で決まります。
1. **権限の情報源が 1 つにまとまります**：ロールのコピーとの不整合が起こりません。
1. **Cells に移行しても機能します**：データは Postgres からのみ流れます。

### 欠点 {#negative}

1. **初めての外部プロデューサーです**：Siphon がモノリス外のデータベースを読み取ったことはありません。
1. **スキーマが結合します**：レプリケーション対象のテーブルを変更するたびに、対応する ClickHouse のマイグレーションが必要となり、それらのテーブルの Artifact Registry 側のマイグレーションが遅くなります。
1. **修復が ClickHouse の ID 型に依存します**：Siphon の整合性チェックと補正によって UUID を主キーとする行を修復できるのは、ClickHouse がそのキーを文字列として保持する場合だけです。ClickHouse の `UUID` 型の列は Postgres とソート順が異なるため、チェックの対象外になり、欠落した行が復元されません。
1. **レイテンシーが増えます**：Artifact Registry のノードを扱うすべての Orbit クエリで、秘匿処理によって Artifact Registry への呼び出しが増えます。続行可否の判断基準によってこのリスクを抑えます。
1. **新たな負荷が生じます**：Orbit クエリが新しい認可エンドポイントを呼び出すようになります。
1. **Orbit チームに依存します**：Orbit が UUID ID、組織ルートパスの付与、組織を範囲とするデータソースのインデックス化に対応するまで、データは取り込まれません。
1. **インフラ作業が必要です**：論理デコーディング、パブリケーション、レプリケーション用のユーザー、ネットワークアクセスが必要です。
1. **当初は回答できる内容が限られます**：最初に挙げた 3 つの質問はすべて、バージョンとそのプロジェクトの間のリンクに依存します。プロジェクトを記録しているバージョンが少なければ、グラフの構造が正しくても、ほとんど回答できません。
1. **GitLab.com に限定されます**：Self-Managed と Dedicated の Artifact Registry データは Orbit に入りません。
1. **ディスク容量にリスクがあります**：レプリケーションスロットが停止すると、データベースのディスクが埋まり、Artifact Registry が停止する可能性があります。制約 14 でこのリスクを抑えます。

## 検討した代替案 {#alternatives-considered}

### 現状を維持し、Artifact Registry のデータをグラフに含めない {#do-nothing-keep-artifact-registry-data-out-of-the-graph}

エージェントは Artifact Registry API を呼び出します。
Artifact Registry とモノリスをまたぐ質問には 1 回で回答できないため、デフォルトの方針としては却下しました。
続行可否の判断では、最後の代替策として残します。

### 代替案 1：API ベースの定期同期 {#alternative-1-api-based-periodic-sync}

スケジュール済みジョブが Artifact Registry の一覧取得エンドポイントを呼び出し、結果をグラフに書き込みます。
データの鮮度がポーリング間隔で決まり、削除を検出するために一覧全体の差分を取る必要があり、新しい一覧取得エンドポイントと同期ジョブが必要で、ネームスペースをまたぐスキャンが通常のリクエスト処理とリソースを取り合うため、却下しました。

### 代替案 2：Artifact Registry 内のドメインイベントのアウトボックス {#alternative-2-domain-event-outbox-in-the-artifact-registry}

Artifact Registry は、各変更と同じトランザクションでイベントの行を書き込み、リレーが公開します。
すべての変更経路でイベントを書き込む必要があり、漏れがあるとグラフに気付かないうちに欠落が生じます。また、Siphon がすでに読み取っているデータについて、リレーが 2 つ目の変更フィードになるため、却下しました。
Orbit に行の変更ではなく意味を持つイベントが必要になった場合の選択肢として残します。

### 代替案 3：Snowplow から Snowflake への経路を再利用 {#alternative-3-reuse-snowplow-to-snowflake}

使用量イベントのパイプラインを通じてレジストリの状態を送信します（[ADR-012](012_usage_data_collection.md)）。
イベントが表すのは操作であり現在の状態ではないこと、パイプラインの送信先が ClickHouse ではなく Snowflake であること、グラフに必要な識別子を仮名化すること、管理者がこのパイプラインを無効化できることから、却下しました。

### 代替案 4：ロールのタプルを ClickHouse にレプリケーション {#alternative-4-replicate-role-tuples-into-clickhouse}

Orbit はレプリケーションしたロール割り当てに基づいて行をフィルタリングし、Artifact Registry を呼び出しません。
Orbit 側に Artifact Registry と完全に同じ結果を返す 2 つ目の判定機構が必要です。結果の食い違いがデータ漏えいにつながるため、現時点では却下しました。
続行可否の判断では、2 番目の代替策とします。

### 代替案 5：Rails が Artifact Registry リソースを ActiveRecord モデルとしてミラーリング {#alternative-5-rails-mirrors-artifact-registry-resources-as-activerecord-models}

秘匿処理では Artifact Registry リソースの Rails モデルを読み込み、Rails の Ability で確認します。
Rails はデータのコピーを保持し、Artifact Registry のロールも必要とします。これは代替案 4 に該当するため、却下しました。
また、Rails が保持するのはネームスペースごとに 1 行と定める [ADR-022](022_namespace_decoupling.md)にも反します。

## 未解決の質問 {#open-questions}

1. **Orbit 側の依存事項。** 現時点では Orbit は対応していませんが、処理全体での UUID ID のサポート（制約 5）、すべての読み取りでアクセスレベルを考慮する組織ルートパスの付与（制約 7）、組織を範囲とするデータソースのインデックス化が必要です。誰が実装しますか？ Orbit チームの関与が必要です。
1. **組織ルートパスに使う組織 ID。** `traversal_path` には組織の数値 ID をエンコードします（[構造](https://docs.gitlab.com/development/database/clickhouse/clickhouse_table_design_with_siphon/#traversal_path-structure)）。そのため、制約 6 を満たすには、組織 UUID から数値 ID への対応表が ClickHouse に必要です。Rails はネームスペース UUID の行を保持しているため、その行をレプリケーションできる可能性があります。誰が対応表を提供しますか？
1. **UUID ノードと `Int64` ノードをつなぐエッジ。** バージョンからモノリスのプロジェクト、パイプライン、ユーザーへのリンクは、UUID ノードと `Int64` ノードをつなぎます。グラフをたどる際、その比較にはどれだけのコストがかかりますか？ Orbit チームの関与が必要です。
1. **リモートに由来するキャッシュ済みバージョン。** 問題のあるパッケージは通常アップストリームから来るため、バージョンを利用者と結び付けるには、リモートに由来するキャッシュ済みバージョンをグラフに含める必要があります。それらはバージョンノードにするのか、専用のノード型にするのかを決める必要があります。Artifact Registry チームと Orbit チームの関与が必要です。
1. **Siphon の設定を置く場所。** 現時点ではツールがモノリスにしかなく、ソーステーブルもモノリスのデータベースにあることを前提とするため、短期的には ClickHouse のマイグレーションと Siphon のテーブル定義をモノリスに置きます。長期的には Artifact Registry が自ら定義します。2 つのリポジトリでスキーマ変更の整合性をどのように維持しますか？
1. **アラートとオンコールの担当。** Artifact Registry チームは自チームのテーブルが変わっても Siphon が動作するように対応します。NATS のアラートは Siphon チームが受け取ります。Artifact Registry チームが Siphon の経験を積むまではプロデューサーを共有します。ClickHouse への取り込みに関するアラートは、テーブル名のプレフィックスで振り分けられます。Siphon のデータソースとしてのデータベースは誰が担当しますか？
1. **秘匿処理時のエンドユーザーのトークン。** 秘匿処理は Orbit の内部呼び出しで実行され、ユーザー自身のリクエストでは実行されません。その時点で Rails は、そのユーザーの Artifact Registry トークンをどのように取得しますか？ Auth Platform チームの関与が必要です。
1. **データの鮮度の目標。** Orbit は SLA を明示していません。Orbit チームと目標値を合意します。
1. **Orbit のグローバル配置と Cell 内配置。** どちらを選ぶかにより、Cells への移行後にグラフをクエリする方法が変わります。
