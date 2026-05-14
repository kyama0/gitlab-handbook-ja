---
title: "GitLab.com におけるコードレビュー データベースサイズ削減"
status: proposed
creation-date: "2026-04-15"
authors: [ "@zhaochen.li" ]
coaches: [ ]
dris: [ "@francoisrose", "@phikai", "@patrickbajao", "@dskim_gitlab" ]
owning-stage: "~devops::create"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/code_review_database_size_reduction/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

{{< engineering/design-document-header >}}

## サマリー

Code Review グループは GitLab.com で最大級のテーブルのいくつかを所有しており、`notes` (3,054 GB)、`events` (2,371 GB)、`merge_requests` (787 GB)、`merge_request_diffs` (389 GB) などがあります。これらのテーブルを合わせると、6,600 GB を超えるプライマリデータベースストレージを消費しており、特に AI ツーリングによってレコード作成が加速するにつれて、増え続けています。

このドキュメントは、ストラテジーの組み合わせを通じて、これらのテーブルのディスク上のサイズを約 50% 削減するアプローチを提案します。ストラテジーには、古いレコードのキャッシュされた HTML フィールドのクリア、列タイプのよりコンパクトな表現への変換、冗長な列とインデックスの削除、位置データの構造化テーブルへの分解、保持ポリシーの強制、テーブルの膨張の再利用が含まれます。ストラテジーは、推定節約量、実装の労力、リスクによって優先順位付けされています。

関連: [Blueprint for Code Review database size reduction (&20233)](https://gitlab.com/groups/gitlab-org/-/epics/20233)、
[Code Review database size reduction (#17571)](https://gitlab.com/groups/gitlab-org/-/work_items/17571)、
[Initial spike for database size reduction blueprint (#586185)](https://gitlab.com/gitlab-org/gitlab/-/issues/586185)。

## 動機

GitLab.com 上の大きなテーブルは、運用と開発の両方にとって主要な問題です。テーブルが数百ギガバイトを超えて成長すると、いくつかの問題が複合します:

1. **クエリパフォーマンスが劣化します。** より大きなテーブルはインデックスサイズを増やし、シーケンシャルスキャンを遅くし、バッファキャッシュヒット率を低下させます。
1. **テーブルメンテナンスのコストが高くなります。** `VACUUM`、`ANALYZE`、インデックスのリビルドに時間がかかり、アプリケーションの可用性に影響するロックを保持します。
1. **インフラコストが増加します。** ストレージ、I/O、レプリケーション遅延、バックアップ時間はすべてディスク上のサイズに比例して拡大します。
1. **データ移行が複雑になります。** 大きなテーブルでのスキーマ変更は、実装に大幅に多くの労力を必要とし、GitLab.com の安定性問題を引き起こす可能性が高くなります。たとえば、`merge_requests` の bigint 列を integer 列と入れ替えるには、3 段階に分割する必要があり、完了に数か月かかりました ([#507695](https://gitlab.com/gitlab-org/gitlab/-/work_items/507695))。
1. **運用リスクが増大します。** データ量が増加するにつれて、フェイルオーバーと災害復旧が遅くなり、より脆弱になります。

[Database Scalability blueprint](/handbook/engineering/architecture/design-documents/database_size_limits/) (2021 年 6 月) は、GitLab.com の個々の物理テーブルを 100 GB 未満に保つというターゲットを確立しました。ほぼ 5 年後、GitLab.com の複数の Code Review テーブルがこの閾値を 7 倍から 30 倍超え、元の分析以来著しく成長しています。介入なしでは、これらのテーブルは GitLab.com の使用量が増加するにつれて成長し続けます。

2026 年 1 月時点で、Code Review が所有または密接に関連する 100 GB 超のテーブルは次のとおりです:

| テーブル | サイズ |
|---|---|
| `merge_request_diff_commits` | 7,875 GB |
| `merge_request_diff_files` | 3,290 GB |
| `notes` | 3,156 GB |
| `events` | 2,371 GB |
| `merge_requests` | 787 GB |
| `merge_request_diffs` | 451 GB |
| `note_diff_files` | 170 GB |
| `approval_merge_request_rules_users` | 160 GB |
| `merge_request_metrics` | 140 GB |

このドキュメントは、以下に [Non-Goals](#non-goals) でリストされた項目を除外した残りの大きなテーブルに焦点を当てます: `notes`、`events`、`merge_requests`、`merge_request_diffs`。

### 目標

1. `notes`、`merge_requests`、`merge_request_diffs`、`events` テーブルの合計ディスク上サイズを約 50% 削減する。
2. 最も低リスクの変更で最大の節約を最初に達成し (クイックウィン)、その後より大きな構造的変更に進む。
3. ユーザー向け機能のリグレッションなしに、既存のアプリケーション動作との後方互換性を維持する。
4. 他のグループが自分の大きなテーブル (`issues` や `work_items` など) のために採用できる、繰り返し可能なパターン (HTML キャッシュクリア、保持ポリシーなど) を確立する。
5. 必要なときに、より大きな構造変更 (テーブル分解、列タイプ変換など) をサポートするため、アプリケーションとモデルコードを更新する。
6. 複数のマイルストーンにわたって変更を段階的に提供し、各変更が独立して価値があるようにする。

### 非目標

このドキュメントは、Code Review の最大の 2 つのテーブル `merge_request_diff_commits` と `merge_request_diff_files` をカバーしません。これらのテーブルは別個のエピックですでに対処されています:

- [Reduce the growth and size of the merge_request_diff_commits (&16385)](https://gitlab.com/groups/gitlab-org/-/epics/16385)
- [Partition and reduce size of merge_request_diff_files (&11272)](https://gitlab.com/groups/gitlab-org/-/epics/11272)

調査中に特定された、最初はスコープ外の他の機会については、以下の [スコープ外の機会](#out-of-scope-opportunities) を参照してください。

## 提案

以下のテーブルは、追求する予定の順序で、すべてのスコープ内の機会を要約しています。並列で実行できる 2 つのトラックに作業を分割します: 大規模イニシアチブと小規模イニシアチブ。以下に指定された順序で作業を実行し、2 つのトラックを並行して進める予定です。次の項目を実行不可能にするブロッカー (たとえば、同じテーブルでの並行作業) がある場合、項目は並べ替えられる可能性があります。

各機会の詳細な分析は、テーブルごとのセクションに続きます。

### 大規模イニシアチブ

影響と準備度によって順序付けされています。2 つの HTML キャッシュクリア項目 (`notes` の `note_html` と `merge_requests` の `description_html`/`title_html`) は、同じ `CacheMarkdownField` パターンを共有し、一緒に実装できるため、最初にグループ化されています。`merge_request_diffs` の保持ポリシーは、より高い予想される上限を持つため、位置列の分解の前にあります。しかし、破壊的変更として顧客への影響をナビゲートする必要があります — その評価に基づいて順序を調整します。

| 機会 | テーブル | 労力 | 節約 |
|---|---|---|---|
| 古い MR の `note_html` をクリア | `notes` | 大 | 1,000 GB |
| 古い MR の `description_html` と `title_html` をクリア | `merge_requests` | 大 | 150 GB |
| システムノートを分解 | `notes` | 大 | 800 GB |
| `merge_request_diffs` の保持ポリシー | `merge_request_diffs`、`merge_request_diff_commits`、`merge_request_diff_files` | 大 | TBD (大きいと予想) |
| 位置列を構造化テーブルに変換 | `notes` | 大 | 200 GB |
| **小計** | | | **~2,150 GB + TBD** |

**`merge_request_diffs` の保持ポリシー。** [Issue #594843 (コメント)](https://gitlab.com/gitlab-org/gitlab/-/issues/594843#note_3194219248) で議論されています。
`merge_request_diffs` の保持ポリシーは `merge_request_diff_commits` と `merge_request_diff_files` も削減するため、節約は大きいと予想されますが、これはこれらのテーブルにすでに対処している別のエピック ([エピック &16385](https://gitlab.com/groups/gitlab-org/-/epics/16385) と [エピック &11272](https://gitlab.com/groups/gitlab-org/-/epics/11272)) と重複するため、そこで調整する必要があります。その調整の一部として節約見積もりを生成すべきです。

### 小規模イニシアチブ

主に ROI (労力単位あたりの節約) によって順序付けされています。`merge_request_diffs` 項目は、このテーブルが大規模な `notes` と `merge_requests` 作業と並列に進捗できるよう、上位に持ち上げられています。`merge_params` のクリアは、グループの中で最も動作に敏感であるため、`merge_requests` の小規模項目の中で意図的に最後に置かれています。

| 機会 | テーブル | 労力 | 節約 |
|---|---|---|---|
| 膨張を再利用 (`pg_repack`) | `merge_requests` | 小 | 123 GB |
| SHA 列を `bytea` に変換 | `merge_request_diffs` | 小 | 78 GB |
| 整数列をより小さい型に変換 | `merge_request_diffs` | 小 | 10 GB |
| 冗長な noteable インデックスを削除 | `notes` | 小 | 63 GB |
| `external_diff` 列とインデックスを削除 | `merge_request_diffs` | 小 | 52 GB |
| `updated_at` 列を削除 | `events` | 小 | 34 GB |
| `index_notes_on_line_code` を削除/変換 | `notes` | 小 | 34 GB |
| `index_notes_on_organization_id` を部分インデックスに変換 | `notes` | 小 | 19 GB |
| SHA 列を `bytea` に変換 | `merge_requests` | 小 | 15 GB |
| `merge_status` を `smallint` に変換 | `merge_requests` | 小 | 3.5 GB |
| `assignee_id` 列とインデックスを削除 | `merge_requests` | 小 | ~2.7 GB |
| マージ済み MR の `merge_params` を削除 | `merge_requests` | 小 | 25 GB |
| **小計** | | | **~459 GB** |

**両トラックの合計: ~2,604 GB + TBD。**

### スコープ外の機会

調査中に特定されたが、この設計ドキュメントのスコープ外である機会を以下に示します。それぞれは、可視性と将来のフォローアップのためにここで文書化されています:

| 機会 | テーブル | 労力 | 節約 |
|---|---|---|---|
| 90 日間の保持ポリシー | `events` | 大 | 1,800 GB |
| `events` テーブルをパーティション化 | `events` | 中 | 0 GB (イネーブラー) |
| namespace 列をマージ | `events` | 大 | 50 GB |
| `st_diff` 列を削除 | `notes` | 中 | 20 GB |
| `confidential` 列を削除 | `notes` | 小 | ~0.1 GB |

これらは以下の理由でスコープ外です:

- **`events` テーブルの変更 (90 日間の保持、パーティション化、namespace 列のマージ)。** これらのアプローチは、このドキュメントでコミットするにはまだ十分に成熟していません。Code Review は MR 関連データを含むため `events` テーブルを共同所有していますが、このデータに依存する機能の多くは他のグループに所有されているため、ここでの変更にはクロスチームコラボレーションと、実現可能性、影響、保持セマンティクスを検証するためのさらなる POC 作業が必要です。
  [保持ポリシー提案 (#571288)](https://gitlab.com/gitlab-org/gitlab/-/issues/571288) は、その議論の現在の出発点です。
- **`st_diff` 列を削除。** アプリケーション全体で `LegacyDiffNote` 処理を削除する必要があり、これは列レベルの変更よりも広いスコープを持ち、別個の非推奨化として追跡する方が良いです。
- **`confidential` 列を削除。** 節約はわずか (~0.1 GB) であり、より大きな機会よりもこれを優先することを正当化しません。他の `notes` 変更と共に機会主義的に最終化できます。

以下のセクションは、テーブルごとに整理された、各機会の詳細な分析を提供します。それぞれには、[初期スパイク調査](https://gitlab.com/gitlab-org/gitlab/-/issues/586185) からのコンテキストが含まれます。

### `notes` テーブル (合計 3,054 GB: 2,246 GB の列 + 808 GB のインデックス)

`notes` テーブルは GitLab.com で 3 番目に大きいテーブルです。サイズによる上位 6 列は `note_html`、`note`、`original_position`、`position`、`discussion_id`、`change_position` です。

#### 古いマージリクエストの `note_html` をクリア

- **推定節約:** 1,000 GB (`notes` テーブルの 44.5%)
- **労力:** 大

`note_html` は、`CacheMarkdownField` によって生成された `note` フィールドのキャッシュされたレンダリング済みバージョンです。これは 1,169 GB (テーブルの 52%) を消費します。最近アクセスされていないマージリクエストのノートでは、このキャッシュ値をクリアして、要求に応じて再生成できます。

アプローチ:

1. 「古い」基準を定義する: マージされた MR では、たとえば `updated_at` が 3 か月より古い、オープン MR では、`updated_at` が 6 か月より古い。
1. 古い MR に属するノートの `note_html` を `NULL` に設定する非同期ワーカーを実行する。
1. 読み取り時、`note_html` が `NULL` の場合、`note` から再生成し、データベースに保持する。既存の `CacheMarkdownField` モジュールはすでに `cached_markdown_version` を通じてこのパターンをサポートしています。
1. 多くのノートを返す API エンドポイント (たとえば、マージリクエストディスカッション API) について、オンザフライ再生成のパフォーマンス影響をベンチマークする。

過去にマークダウンキャッシュバージョンのバンプ (`492f0853`、`e7a98807` など) があり、これらは本質的に同じ再生成をトリガーしていることから、パフォーマンスへの影響は管理可能であることが示唆されます。

このパターンは、後で `merge_requests`、`issues`、および `work_items` テーブルの `description_html` と `title_html` に適用できます。Plan グループの Nicolas Dular は、このアプローチへの支持を表明し、`issues` テーブルにも利益をもたらす可能性があると指摘しています。

#### システムノートの分解

- **推定節約:** 800 GB (`notes` テーブルの 35.6%)
- **労力:** 大

ノート行の約 79% はシステム生成のノートです。ユーザー作成のノートとは異なり、システムノートはほとんどが構造化データを完全なテキストにレンダリングしたものです (たとえば、「3 コミット追加」、「説明を変更」、「!1234 で言及」)。完全にレンダリングされたテキストを格納する代わりに、メッセージをオンザフライで再構築するために必要な構造化パラメータのみを格納できます (たとえば、アクションタイプ、カウント、リファレンス)。

考えられる 2 つのアプローチがあります:

- **新しいテーブルに分解する。** システムノートを、各アクションタイプの構造化列を持つ専用 `system_notes` テーブルに移動する。これにより、元のテーブルと新しいテーブルの両方の実効サイズが減り、各アクセスパターンのクエリパフォーマンスが向上します。
- **既存のテーブルに構造化列を追加する。** 構造化パラメータの列を追加し、システムノートの `note` および `note_html` テキストフィールドをクリアします。これにより、テーブル分割の複雑さを回避しながらストレージを再利用できます。

#### `position`、`original_position`、`change_position` を構造化テーブルに変換

- **推定節約:** 200 GB (`notes` テーブルの 3.9%)
- **労力:** 大

これら 3 つの列は、`DiffNote` レコードの YAML シリアライズされた位置データを格納します。現在、各フィールドは行ごとに約 520 バイトを消費する YAML 文字列です。構造化テーブル (既存の `DiffNotePosition` モデルとその `diff_note_positions` テーブルに似たもの) に変換すると、ストレージは行ごとに約 350 バイトに削減されます。

加えて、`position` は約 2.28% の行で `original_position` とまったく同じデータを保持しています。この冗長性は排除できます。

YAML 文字列から `jsonb` への変換が役立つかどうかを調査しましたが、YAML 文字列は TOAST 圧縮により `jsonb` よりも実際に少ないスペースを使用します。構造化テーブルアプローチが最良の節約を提供します。

#### 冗長な `noteable_id`/`noteable_type`/`system` インデックスを削除

- **推定節約:** 63 GB (`notes` テーブルの 2.1%)
- **労力:** 小

複合インデックス `index_notes_on_noteable_id_and_noteable_type_and_system` は 63 GB あり、使用は最小限です。削除前に、クエリが他の既存のインデックスで処理できるかどうかを評価する必要があります。

#### `index_notes_on_line_code` を削除または部分インデックスに変換

- **推定節約:** 34 GB (`notes` テーブルの 1.1%)
- **労力:** 小

このインデックスは 36 GB です。Grafana メトリクスは、これがめったに使用されないこと (時折のスパイクを伴って毎秒 0.8 スキャン未満) を示しています。見つかった唯一の使用は `LegacyDiffNote` のためで、これはレガシー実装です (新しい diff ノートは `DiffNote` タイプで、主に `import` のみがレガシータイプを作成します)。このインデックスは、アクティブなクエリパスがそれに依存していないことを確認した後、部分インデックスに変換するか削除できます。

#### `st_diff` 列を削除し、`LegacyDiffNote` タイプを削除

- **推定節約:** 20 GB (`notes` テーブルの 0.7%)
- **労力:** 中

`st_diff` フィールドは `LegacyDiffNote` でのみ使用されます。レガシーノートタイプを標準化し、この列を削除して、約 20 GB を節約できます。

#### `index_notes_on_organization_id` を部分インデックスに変換

- **推定節約:** 19 GB (`notes` テーブルの 0.6%)
- **労力:** 小

このインデックスは 19 GB ですが、過去 90 日間にわたって使用がほぼゼロでした。`organization_id` 列はほぼ完全に `NULL` です (実際のデータはわずか 451 KB)。アプリケーションコードでの実際の使用はありません。インデックスは Cells/Organization シャーディングイニシアチブのためだけに存在します。`WHERE organization_id IS NOT NULL` の部分インデックスに変換すると、インデックスは 19 GB からほぼゼロに縮小します。これには Tenant Scale チームからの確認が必要です。

#### `confidential` 列を削除 (`internal` に移行済み)

- **推定節約:** ~0.1 GB
- **労力:** 小

`confidential` 列は、[ノートテーブルの confidential 列の名前変更 (#367923)](https://gitlab.com/gitlab-org/gitlab/-/issues/367923) での移行後の `internal` の複製です。列と関連する `index_notes_on_id_where_confidential` インデックス (22 MB) を削除することで移行を最終化します。

#### `notes` の推定合計節約: ~1,700 GB (56%)

### `merge_requests` テーブル (合計 787 GB: 551 GB の列 + 254 GB のインデックス)

`merge_requests` テーブルの合計サイズは 804 GB (約 123 GB の再利用可能な膨張を含む) です。サイズによる上位列は `description` と `description_html` (251 GB、45.6%)、`title` と `title_html` (41 GB、7.45%)、`merge_params` (26 GB、4.73%) です。

#### 古いマージリクエストの `description_html` と `title_html` をクリア

- **推定節約:** 150 GB (`merge_requests` テーブルの 19.9%)
- **労力:** 大

`description_html` は 160 GB、`title_html` は 27 GB を消費します。両方とも `CacheMarkdownField` キャッシュであり、信頼できる情報源ではありません。`title` と `description` のみが信頼できる情報源です。上記の `note_html` で説明された同じアプローチがここに適用されます。

#### テーブルの膨張を再利用 (`pg_repack`)

- **推定節約:** 123 GB (`merge_requests` 物理サイズの 18.8%)
- **労力:** 小 (DB チームとの調整が必要)

分析によると、物理テーブルサイズ (551 GB) と実際の列データ (400 GB) の間に 151 GB の差があります。これは以下に起因します: テーブル膨張 (再利用可能な~123 GB の死んだタプル)、行メタデータ (~11 GB)、アライメントパディングとページヘッダ (~17 GB)。膨張はおそらく bigint 移行と説明の更新によって引き起こされています。本番実行のために Database チームと調整して `pg_repack` または `VACUUM FULL` を実行することでこのスペースを再利用できます。

#### マージされたマージリクエストの `merge_params` を削除

- **推定節約:** 25 GB (`merge_requests` テーブルの 3.8%)
- **労力:** 小

`merge_params` には非常に繰り返しの多いデータが含まれています。たとえば、`force_remove_source_branch: '0'` は任意の MR のデフォルト動作ですが、すべての行に永続化されています。MR がマージされた後、`merge_params` はアプリケーションでもう必要ありません。このデータのほとんどは、後で必要な場合に Gitaly でも利用可能です。

Slack 上の Code Review バックエンドチームとの議論で、MR がマージされた後の `merge_params` の既知の使用はないことが確認されました。7 日以上前にマージされた MR の `merge_params` をクリアするために、毎日または毎週非同期ワーカーを実行でき、列を 26 GB から 1 GB 未満に削減できます。`merge_params` フィールドは、別個のテーブルに分解しないことを選択した場合、`jsonb` に変換することもできます。

#### SHA 列を `bytea` に変換

- **推定節約:** 15 GB (`merge_requests` テーブルの 1.9%)
- **労力:** 小

3 つの SHA フィールドは `character varying` として格納されており、16 進エンコードされたテキスト表現を使用します:

- `squash_commit_sha`: varchar フィールドは 42 バイト、`bytea` は 20 バイトを使用します。
  65.7M 行 x 22 バイト節約 = 1.31 GB。
- `merge_commit_sha`: varchar フィールドは 42 バイト、`bytea` は 20 バイトを使用します。
  272.3M 行 x 22 バイト節約 = 5.99 GB。
- `merged_commit_sha`: varchar フィールドは 82 バイト (二重エンコード)、`bytea` は 20 バイトを使用します。121.4M 行 x 62 バイト節約 = 7.53 GB。

これにより SHA ストレージが標準化されます。既存の `in_progress_merge_commit_sha` 列はすでに `bytea` を使用しているため、このテーブルには先例があります。

#### `merge_status` を `varchar` から `smallint` に変換

- **推定節約:** 3.5 GB (`merge_requests` テーブルの 0.5%)
- **労力:** 小

`merge_status` は `character varying(510)` として定義されていますが、7 つの enum 値 (`unchecked`、`preparing`、`checking`、`can_be_merged`、`cannot_be_merged`、`cannot_be_merged_recheck`、`cannot_be_merged_rechecking`) のみを格納します。
各行は約 11 バイトを消費します。Rails enum マッピングで `smallint` (2 バイト) に変換すると、モデルレイヤーの上では変更なしに、行ごとに約 10 バイト節約されます。

#### レガシー `assignee_id` 列を削除

- **推定節約:** ~2.7 GB (列 + インデックス)
- **労力:** 小

`assignee_id` 列は `merge_request_assignees` アソシエーションに置き換えられました。列自体はわずか 43 MB ですが、関連するインデックス `index_merge_requests_on_assignee_id` は 2.62 GB です。非推奨化が完了したことを確認した後、両方とも削除できます。

#### `merge_requests` の推定合計節約: ~311.5 GB (47.6%)

### `merge_request_diffs` テーブル (合計 389 GB: 203 GB の列 + 186 GB のインデックス)

#### `external_diff` 列とインデックスを削除

- **推定節約:** 52 GB (`merge_request_diffs` テーブルの 13.4%)
- **労力:** 小

`external_diff` 列はもう生成されません。これは Carrierwave 側で計算されました。列と関連するインデックス `index_merge_request_diffs_on_external_diff` (14 GB) を削除でき、合計で約 52 GB 節約できます。

#### 3 つの SHA 列を `bytea` に変換

- **推定節約:** 78 GB (`merge_request_diffs` テーブルの 20.1%)
- **労力:** 小

`base_commit_sha`、`start_commit_sha`、`head_commit_sha` は、`merge_requests` SHA 列と同じアプローチに従って、`character varying` から `bytea` に変換できます。これらの列の各インデックスも約 3 分の 1 縮小します。

#### `real_size`、`state`、`external_diff_store`、`commits_count` をより小さい整数型に変換

- **推定節約:** 10 GB (`merge_request_diffs` テーブルの 2.6%)
- **労力:** 小

これらの列は現在、必要よりも大きい整数型を使用しています。値範囲が許可する場合に 1 バイトまたは 2 バイトの整数に変換すると、約 10 GB 節約されます。

#### `merge_request_diffs` の推定合計節約: ~140 GB (36%)

### `events` テーブル (2,371 GB)

`events` テーブルはクリーンなスキーマを持ち、列またはインデックスレベルでの最適化の可能性は限定的です。テーブル定義はよく設計されており、保存するイベントの種類の点でコンテンツも十分に構造化されているように見えます。主な節約の機会は、データライフサイクル管理から来ます。

#### `updated_at` 列を削除

- **推定節約:** 34 GB (`events` テーブルの 1.4%)
- **労力:** 小

イベントは追記のみで不変です。分析によると、行のわずか 0.02% が異なる `created_at` と `updated_at` の値を持ち、それらのほとんどはわずかナノ秒またはミリ秒の違いです。Abdul Wadood によるより深い調査により、`updated_at` と `created_at` が 10 秒以上異なる行は過去 1 年間発生していないことが確認されました (最後のそのような行は 2024 年からです)。

`updated_at` にインデックスがないため、それがクエリのためにアクティブに使用されていないことが示唆されます。しかし、Shane Maglangit が指摘したように、インデックスがないことは、列が使用されていないことを決定的に証明するものではありません (たとえば、`namespaces.updated_at` は重く使用されていますがインデックスがありません)。アクションの前にアプリケーションコードの二重チェックを実行する必要があります。後方互換性に必要な場合、Rails で `updated_at` を `created_at` にエイリアスできます。

#### `project_id`、`group_id`、`personal_namespace_id` を `namespace_id` にマージ

- **推定節約:** 50 GB (`events` テーブルの 2.1%)
- **労力:** 大

events テーブルには、所有エンティティの 3 つの別個の列があります。これらは単一の `namespace_id` 列にマージできる可能性があります。しかし、これらの列をマージすると、イベントを検索するために `namespaces` テーブルと結合する必要が生じ (`projects` は `namespaces` とは異なるテーブルであるため)、すでに遅いイベントクエリを遅くします。進行前に慎重なベンチマークが必要です。

#### 90 日間の保持ポリシー

- **推定節約:** 1,800 GB (`events` テーブルの 75.9%)
- **労力:** 大

これは、すべてのテーブルにわたる単一の最大の機会です。GitHub と Azure DevOps の両方が 90 日間のイベント保持を提供しています。同様のポリシーは `events` テーブルのサイズを劇的に削減します。Christina Lohr (`@lohrc`) は、[90 日間の保持期間を推奨しました](https://gitlab.com/gitlab-org/gitlab/-/issues/571288)。`events` は本質的に、他のテーブルから見つけることができるか、再構築できるデータの複製であるという事実に焦点を当てています。

この戦略には以下が必要です:

1. 許容できる保持期間に関するプロダクトの入力。
1. 歴史的イベントを他のデータソースから再構築できるかどうかの評価。注目すべきは、`push_event_payloads` は再構築できない可能性のある高度にもつれたテーブルであり、オープン Issue や MR のためのイベントを削除できるかどうかを考慮する必要があります。
1. 行ごとの削除ではなく、効率的なパーティション削除を可能にするための `events` テーブルの時間ベースのパーティション化 (時間減衰データパターンがこのアプローチを詳細に説明しています)。
1. コンプライアンスとアナリティクスのユースケースのために、90 日より古いイベントをオブジェクトストレージまたはデータウェアハウスにアーカイブする。

もう 1 つの追加アイデア: ボットと自動化アクションを特定し、それらを異なって扱う (格納するフィールドを少なくする、または DB に保存しないなど)。これは、特に AI ツーリングがレコード作成を増加させるにつれて、テーブルの成長率を大幅に削減する可能性があります。これにはプロダクトの入力が必要です。

#### テーブルパーティション化

- **推定節約:** 0 GB 直接 (保持を有効化し、メンテナンスを改善)
- **労力:** 中

保持ポリシーがなくても、`created_at` で `events` テーブルをパーティション化すると、クエリパフォーマンス、vacuum 効率、メンテナンス操作が改善されます。これは、効率的な保持ポリシーを実装するための前提条件です。

Kerri Miller は、長期的にはアプローチのブレンドが最も役立つこと、そして短い保持期間でも時間ベースのパーティションを使用して 90 日ごとに最も古いものをドロップできるため、パーティション化が適切である可能性があると指摘しました。

#### `events` の推定合計節約: ~1,884 GB (保持が採用されている場合)

## 設計と実装の詳細

TBD

## 代替ソリューション

TBD
