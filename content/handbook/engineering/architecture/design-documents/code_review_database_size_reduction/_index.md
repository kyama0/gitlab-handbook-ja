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
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/zhaochen.li" class="text-blue-600 hover:underline">@zhaochen.li</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/francoisrose" class="text-blue-600 hover:underline">@francoisrose</a>, <a href="https://gitlab.com/phikai" class="text-blue-600 hover:underline">@phikai</a>, <a href="https://gitlab.com/patrickbajao" class="text-blue-600 hover:underline">@patrickbajao</a>, <a href="https://gitlab.com/dskim_gitlab" class="text-blue-600 hover:underline">@dskim_gitlab</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::create</span></td>
<td class="px-3 py-2 border border-gray-300">2026-04-15</td>
</tr>
</tbody>
</table>
</div>


## 概要

コードレビューグループは、GitLab.com において最も大きなテーブルのいくつかを所有しています。`notes`（3,054 GB）、`events`（2,371 GB）、`merge_requests`（787 GB）、`merge_request_diffs`（389 GB）が含まれます。これらのテーブルを合わせると 6,600 GB 以上のプライマリデータベースストレージを消費しており、特に AI ツールがレコード作成を加速させることで成長を続けています。

このドキュメントでは、キャッシュされた HTML フィールドの古いレコードのクリア、よりコンパクトな表現へのカラム型変換、冗長なカラムとインデックスの削除、位置データの構造化テーブルへの分解、保持ポリシーの施行、テーブルブロートの回収など、複数の戦略の組み合わせによって、これらのテーブルのディスク上のサイズを約 50% 削減するアプローチを提案します。各戦略は、推定節約量、実装の労力、リスクによって優先順位付けされています。

関連: [コードレビュー データベースサイズ削減のブループリント（&20233）](https://gitlab.com/groups/gitlab-org/-/epics/20233)、[コードレビュー データベースサイズ削減（#17571）](https://gitlab.com/groups/gitlab-org/-/work_items/17571)、[データベースサイズ削減ブループリントの初期スパイク（#586185）](https://gitlab.com/gitlab-org/gitlab/-/issues/586185)。

## 動機

GitLab.com の大規模テーブルは、運用と開発の両面で大きな問題です。テーブルが数百ギガバイトを超えて成長するにつれて、いくつかの問題が複合的に生じます：

1. **クエリパフォーマンスが低下します。** 大きなテーブルはインデックスサイズを増加させ、シーケンシャルスキャンを遅くし、バッファキャッシュのヒット率を低下させます。
1. **テーブルのメンテナンスがコストとなります。** `VACUUM`、`ANALYZE`、インデックスの再構築には時間がかかり、アプリケーションの可用性に影響するロックを保持します。
1. **インフラストラクチャコストが増加します。** ストレージ、I/O、レプリケーションラグ、バックアップ時間はすべてディスク上のサイズに比例して増加します。
1. **データ移行が複雑になります。** 大規模なテーブルでのスキーマ変更は実装に大幅な労力を要し、GitLab.com で安定性の問題を引き起こす可能性が高くなります。例えば、`merge_requests` テーブルで bigint カラムと integer カラムを入れ替える作業は 3 つのステージに分割する必要があり、完了するまでに数ヶ月かかりました（[#507695](https://gitlab.com/gitlab-org/gitlab/-/work_items/507695)）。
1. **運用リスクが増大します。** データ量が増加するにつれて、フェイルオーバーと障害回復が遅くなり、脆弱になります。

[データベーススケーラビリティブループリント](/handbook/engineering/architecture/design-documents/database_size_limits/)（2021 年 6 月）は、GitLab.com の個々の物理テーブルを 100 GB 未満に保つという目標を定めました。約 5 年後、GitLab.com の複数のコードレビューテーブルはまだこのしきい値を 7 倍から 30 倍超えており、元の分析以来大幅に成長しています。介入なしには、GitLab.com の使用が増加するにつれてこれらのテーブルは成長し続けるでしょう。

2026 年 1 月時点での GitLab.com でコードレビューが所有または密接に関連する 100 GB を超えるテーブルは以下のとおりです：

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

このドキュメントは、以下の[非ゴール](#non-goals)に記載されている項目を除外した後の残りの大きなテーブル（`notes`、`events`、`merge_requests`、`merge_request_diffs`）に焦点を当てています。

### ゴール

1. `notes`、`merge_requests`、`merge_request_diffs`、`events` テーブルの合計ディスク上サイズを約 50% 削減します。
1. 最低リスクの変更で最大の節約を達成し（クイックウィン）、その後より大きな構造的変更に進みます。
1. ユーザーに見える機能のリグレッションなしに、既存のアプリケーション動作との後方互換性を維持します。
1. 他のグループが `issues` や `work_items` などの大きなテーブルに採用できる再現可能なパターン（例：HTML キャッシュのクリア、保持ポリシー）を確立します。
1. より大きな構造的変更（例：テーブル分解、カラム型変換）をサポートするために必要に応じてアプリケーションとモデルのコードを更新します。
1. 各変更が独立した価値を持つように、複数のマイルストーンにわたって段階的に変更を提供します。

### 非ゴール

このドキュメントは、2 つの最大のコードレビューテーブルである `merge_request_diff_commits` と `merge_request_diff_files` をカバーしません。これらのテーブルはすでに別のエピックで対処されています：

- [merge_request_diff_commits の成長とサイズを削減する（&16385）](https://gitlab.com/groups/gitlab-org/-/epics/16385)
- [merge_request_diff_files のパーティション化とサイズ削減（&11272）](https://gitlab.com/groups/gitlab-org/-/epics/11272)

他にスコープ外の機会については、以下の[スコープ外の機会](#out-of-scope-opportunities)を参照してください。

## 提案

以下のテーブルは、最大の節約から開始して追求する予定の全スコープ内の機会を順番に要約しています。小さな労力の「クイックウィン」を大きな構造的変更と並行して提供できるよう、労力対インパクト比で優先順位をつけながら、これらを段階的に実施していきます。具体的な優先順位はフォローアップ MR で提案されます。各テーブルごとのセクションでは、各機会の詳細分析が続きます。

| 機会 | テーブル | 労力 | 節約量 |
|---|---|---|---|
| 古い MR の `note_html` をクリアする | `notes` | 大 | 1,000 GB |
| システムノートを分解する | `notes` | 大 | 800 GB |
| 位置カラムを構造化テーブルに変換する | `notes` | 大 | 200 GB |
| 古い MR の `description_html` と `title_html` をクリアする | `merge_requests` | 大 | 150 GB |
| `merge_request_diffs` の保持ポリシー | `merge_request_diffs`、`merge_request_diff_commits`、`merge_request_diff_files` | 大 | TBD（大きいと予想） |
| ブロートの回収（`pg_repack`） | `merge_requests` | 小 | 123 GB |
| SHA カラムを `bytea` に変換する | `merge_request_diffs` | 小 | 78 GB |
| 冗長な noteable インデックスを削除する | `notes` | 小 | 63 GB |
| `external_diff` カラムとインデックスを削除する | `merge_request_diffs` | 小 | 52 GB |
| `updated_at` カラムを削除する | `events` | 小 | 34 GB |
| `index_notes_on_line_code` を削除/変換する | `notes` | 小 | 34 GB |
| マージされた MR の `merge_params` を削除する | `merge_requests` | 小 | 25 GB |
| `index_notes_on_organization_id` を部分インデックスに変換する | `notes` | 小 | 19 GB |
| SHA カラムを `bytea` に変換する | `merge_requests` | 小 | 15 GB |
| 整数カラムを小さい型に変換する | `merge_request_diffs` | 小 | 10 GB |
| `merge_status` を `smallint` に変換する | `merge_requests` | 小 | 3.5 GB |
| `assignee_id` カラムとインデックスを削除する | `merge_requests` | 小 | ~2.7 GB |
| **合計** | | | **~2,604 GB** |

**`merge_request_diffs` の保持ポリシー。** [Issue #594843（コメント）](https://gitlab.com/gitlab-org/gitlab/-/issues/594843#note_3194219248)で議論されています。`merge_request_diffs` の保持ポリシーは `merge_request_diff_commits` と `merge_request_diff_files` も削減するため、節約量は大きいと予想されますが、これらのテーブルをすでに対処している別のエピック（[エピック &16385](https://gitlab.com/groups/gitlab-org/-/epics/16385) および [エピック &11272](https://gitlab.com/groups/gitlab-org/-/epics/11272)）と重複しており、そちらで調整する必要があります。節約量の推定はその調整の一部として作成されるべきです。

### スコープ外の機会

以下の機会は調査中に特定されましたが、このデザインドキュメントのスコープ外です。それぞれが可視性と将来のフォローアップのためにここにドキュメント化されています：

| 機会 | テーブル | 労力 | 節約量 |
|---|---|---|---|
| 90 日間の保持ポリシー | `events` | 大 | 1,800 GB |
| `events` テーブルのパーティション化 | `events` | 中 | 0 GB（イネーブラー） |
| 名前空間カラムのマージ | `events` | 大 | 50 GB |
| `st_diff` カラムを削除する | `notes` | 中 | 20 GB |
| `confidential` カラムを削除する | `notes` | 小 | ~0.1 GB |

これらが範囲外である理由：

- **`events` テーブルの変更（90 日間の保持、パーティション化、名前空間カラムのマージ）。** これらのアプローチはこのドキュメントでのコミットに向けてまだ十分に成熟していません。コードレビューは MR 関連データが含まれているため `events` テーブルを共同所有していますが、このデータに依存する機能の多くは他のグループが所有しているため、ここでの変更はクロスチームのコラボレーションと実現可能性、インパクト、保持セマンティクスを検証するためのさらなる POC 作業が必要です。[保持ポリシーの提案（#571288）](https://gitlab.com/gitlab-org/gitlab/-/issues/571288)がその議論の現在の出発点です。
- **`st_diff` カラムの削除。** アプリケーション全体の `LegacyDiffNote` の処理を削除する必要があり、カラムレベルの変更よりも広いスコープを持ち、別の廃止作業として追跡するのが適切です。
- **`confidential` カラムの削除。** 節約量が無視できるほど小さく（~0.1 GB）、より大きな機会よりも優先することは正当化されません。他の `notes` の変更と並行して機会があれば実施できます。

以下のセクションでは、テーブルごとに整理された各機会の詳細分析を提供します。各セクションには[初期スパイク調査](https://gitlab.com/gitlab-org/gitlab/-/issues/586185)からのコンテキストが含まれています。

### `notes` テーブル（合計 3,054 GB：カラム 2,246 GB + インデックス 808 GB）

`notes` テーブルは GitLab.com で 3 番目に大きいテーブルです。サイズ上位 6 カラムは `note_html`、`note`、`original_position`、`position`、`discussion_id`、`change_position` です。

#### 古いマージリクエストの `note_html` をクリアする

- **推定節約量：** 1,000 GB（`notes` テーブルの 44.5%）
- **労力：** 大

`note_html` は `CacheMarkdownField` によって生成された `note` フィールドのキャッシュされたレンダリング版です。1,169 GB（テーブルの 52%）を消費しています。最近アクセスされていないマージリクエストのノートについては、このキャッシュ値をクリアしてオンデマンドで再生成できます。

アプローチ：

1. 「古い」基準を定義する：マージされた MR の場合、例えば `updated_at` が 3 ヶ月以上前；オープンな MR の場合、`updated_at` が 6 ヶ月以上前。
1. 古い MR に属するノートの `note_html` を `NULL` に設定する非同期ワーカーを実行する。
1. 読み取り時に `note_html` が `NULL` の場合、`note` から再生成してデータベースに永続化する。既存の `CacheMarkdownField` モジュールはすでに `cached_markdown_version` を通じてこのパターンをサポートしている。
1. 多数のノートを返す API エンドポイント（例：マージリクエストのディスカッション API）でのオンザフライ再生成のパフォーマンス影響をベンチマークする。

過去にマークダウンキャッシュバージョンのバンプ（例：`492f0853`、`e7a98807`）があり、基本的に同じ再生成をトリガーしており、パフォーマンスへの影響は管理可能であることが示されています。

このパターンは後に `merge_requests`、`issues`、`work_items` テーブルの `description_html` と `title_html` にも適用できます。Plan グループの Nicolas Dular がこのアプローチに支持を表明し、`issues` テーブルにも恩恵をもたらす可能性があると指摘しています。

#### システムノートを分解する

- **推定節約量：** 800 GB（`notes` テーブルの 35.6%）
- **労力：** 大

ノート行の約 79% はシステム生成のノートです。ユーザー作成のノートとは異なり、システムノートはほとんどが全テキストにレンダリングされた構造化データです（例：「3 コミットを追加」、「説明を変更」、「!1234 で言及」）。フルレンダリングされたテキストを保存する代わりに、メッセージをオンザフライで再構成するために必要な構造化パラメーター（例：アクション種別、カウント、参照）のみを保存できます。

考えられる 2 つのアプローチ：

- **新しいテーブルへの分解。** システムノートを各アクション種別に対応する構造化カラムを持つ専用の `system_notes` テーブルに移動する。これにより元のテーブルと新しいテーブルの両方の実効サイズが削減され、各アクセスパターンのクエリパフォーマンスが改善されます。
- **既存テーブルへの構造化カラムの追加。** 構造化パラメーター用のカラムを追加し、システムノートの `note` と `note_html` テキストフィールドをクリアする。テーブル分割の複雑さを回避しながらストレージを回収できます。

#### `position`、`original_position`、`change_position` を構造化テーブルに変換する

- **推定節約量：** 200 GB（`notes` テーブルの 3.9%）
- **労力：** 大

これら 3 つのカラムは `DiffNote` レコードの YAML シリアライズされた位置データを保存しています。現在各フィールドは約 520 バイトを消費する YAML 文字列です。構造化テーブル（既存の `DiffNotePosition` モデルとその `diff_note_positions` テーブルに類似）に変換すると、1 行あたり約 350 バイトに削減されます。

さらに、`position` は約 2.28% の行で `original_position` と全く同じデータを保持しています。この冗長性は排除できます。

YAML 文字列を `jsonb` に変換することの有効性を調査しましたが、YAML 文字列は TOAST 圧縮により実際には `jsonb` よりもスペースが少ないことがわかりました。構造化テーブルのアプローチが最良の節約量をもたらします。

#### 冗長な `noteable_id`/`noteable_type`/`system` インデックスを削除する

- **推定節約量：** 63 GB（`notes` テーブルの 2.1%）
- **労力：** 小

複合インデックス `index_notes_on_noteable_id_and_noteable_type_and_system` は 63 GB であり、最小限の使用しかありません。削除前にクエリが他の既存のインデックスで処理できるかどうかを評価する必要があります。

#### `index_notes_on_line_code` を削除するか部分インデックスに変換する

- **推定節約量：** 34 GB（`notes` テーブルの 1.1%）
- **労力：** 小

このインデックスは 36 GB です。Grafana のメトリクスによると、使用頻度は低く（時折スパイクはあるが 1 秒あたり 0.8 回未満のスキャン）、`LegacyDiffNote` でのみ使用が見つかっています。`LegacyDiffNote` はレガシー実装です（新しい差分ノートは `DiffNote` 型であり、主に `import` がまだレガシー型を作成しています）。アクティブなクエリパスが依存していないことを確認した後、このインデックスを部分インデックスに変換するか削除できます。

#### `st_diff` カラムを削除し `LegacyDiffNote` タイプを削除する

- **推定節約量：** 20 GB（`notes` テーブルの 0.7%）
- **労力：** 中

`st_diff` フィールドは `LegacyDiffNote` でのみ使用されています。レガシーのノートタイプを標準化してこのカラムを削除し、約 20 GB を節約できます。

#### `index_notes_on_organization_id` を部分インデックスに変換する

- **推定節約量：** 19 GB（`notes` テーブルの 0.6%）
- **労力：** 小

このインデックスは 19 GB ですが、過去 90 日間でほぼゼロの使用量です。`organization_id` カラムはほぼ完全に `NULL` です（実際のデータは 451 KB のみ）。アプリケーションコードでの実際の使用はなく；このインデックスは Cells/Organization シャーディングイニシアチブのためだけに存在します。`WHERE organization_id IS NOT NULL` の部分インデックスに変換するとインデックスが 19 GB からほぼゼロに縮小されます。これは Tenant Scale チームによる確認が必要です。

#### `confidential` カラムの削除（`internal` に移行済み）

- **推定節約量：** ~0.1 GB
- **労力：** 小

`confidential` カラムは、[ノートテーブルの confidential カラムの名前変更（#367923）](https://gitlab.com/gitlab-org/gitlab/-/issues/367923)の移行後に `internal` の複製です。カラムと関連する `index_notes_on_id_where_confidential` インデックス（22 MB）を削除することで移行を完了させます。

#### `notes` の合計推定節約量：~1,700 GB（56%）

### `merge_requests` テーブル（合計 787 GB：カラム 551 GB + インデックス 254 GB）

`merge_requests` テーブルの合計サイズは 804 GB（回収可能なブロート ~123 GB を含む）です。サイズ上位のカラムは `description` と `description_html`（251 GB、45.6%）、`title` と `title_html`（41 GB、7.45%）、`merge_params`（26 GB、4.73%）です。

#### 古いマージリクエストの `description_html` と `title_html` をクリアする

- **推定節約量：** 150 GB（`merge_requests` テーブルの 19.9%）
- **労力：** 大

`description_html` は 160 GB を消費し、`title_html` は 27 GB を消費しています。どちらも `CacheMarkdownField` キャッシュであり、正確性の情報源ではありません。`title` と `description` のみが正確性の情報源です。上記の `note_html` で説明したのと同じアプローチが適用されます。

#### テーブルブロートの回収（`pg_repack`）

- **推定節約量：** 123 GB（`merge_requests` 物理サイズの 18.8%）
- **労力：** 小（DB チームの調整が必要）

分析によると、物理テーブルサイズ（551 GB）と実際のカラムデータ（400 GB）の間に 151 GB の差異があります。これは次のように起因します：テーブルブロート（回収可能なデッドタプル ~123 GB）、行メタデータ（~11 GB）、アライメントパディングとページヘッダー（~17 GB）。ブロートは bigint 移行と説明の更新によって引き起こされた可能性が高いです。本番実行のためにデータベースチームと調整しながら `pg_repack` または `VACUUM FULL` を実行することでこのスペースを回収できます。

#### マージされたマージリクエストの `merge_params` を削除する

- **推定節約量：** 25 GB（`merge_requests` テーブルの 3.8%）
- **労力：** 小

`merge_params` には高度に繰り返されるデータが含まれています。例えば、`force_remove_source_branch: '0'` はすべての MR のデフォルト動作ですが、すべての行に永続化されています。MR がマージされると、`merge_params` はアプリケーションでは不要になります。このデータのほとんどは必要であれば Gitaly からも取得できます。

Slack でのコードレビューバックエンドチームとの議論によると、MR がマージされた後に `merge_params` の既知の使用はないことが確認されています。マージ後 7 日以上経過した MR の `merge_params` をクリアする非同期ワーカーを毎日または毎週実行し、カラムを 26 GB から 1 GB 未満に削減できます。別のテーブルに分解しないことを選択した場合、`merge_params` フィールドを `jsonb` に変換することもできます。

#### SHA カラムを `bytea` に変換する

- **推定節約量：** 15 GB（`merge_requests` テーブルの 1.9%）
- **労力：** 小

3 つの SHA フィールドは `character varying` として保存されており、16 進エンコードされたテキスト表現を使用しています：

- `squash_commit_sha`：varchar フィールドは 42 バイト、`bytea` は 20 バイト。65.7M 行 × 節約 22 バイト = 1.31 GB。
- `merge_commit_sha`：varchar フィールドは 42 バイト、`bytea` は 20 バイト。272.3M 行 × 節約 22 バイト = 5.99 GB。
- `merged_commit_sha`：varchar フィールドは 82 バイト（二重エンコード）、`bytea` は 20 バイト。121.4M 行 × 節約 62 バイト = 7.53 GB。

これにより SHA ストレージが標準化されます。既存の `in_progress_merge_commit_sha` カラムはすでに `bytea` を使用しており、このテーブルに先例があります。

#### `merge_status` を `varchar` から `smallint` に変換する

- **推定節約量：** 3.5 GB（`merge_requests` テーブルの 0.5%）
- **労力：** 小

`merge_status` は `character varying(510)` として定義されていますが、7 つのみの可能なenum値（`unchecked`、`preparing`、`checking`、`can_be_merged`、`cannot_be_merged`、`cannot_be_merged_recheck`、`cannot_be_merged_rechecking`）を保存しています。各行は約 11 バイトを消費しています。`smallint`（2 バイト）に変換し Rails の enum マッピングを使用すると、モデルレイヤーを変更することなく 1 行あたり約 10 バイトを節約できます。

#### レガシー `assignee_id` カラムを削除する

- **推定節約量：** ~2.7 GB（カラム + インデックス）
- **労力：** 小

`assignee_id` カラムは `merge_request_assignees` アソシエーションに置き換えられています。カラム自体は 43 MB のみですが、関連するインデックス `index_merge_requests_on_assignee_id` は 2.62 GB です。廃止が完了していることを確認した後、両方を削除できます。

#### `merge_requests` の合計推定節約量：~311.5 GB（47.6%）

### `merge_request_diffs` テーブル（合計 389 GB：カラム 203 GB + インデックス 186 GB）

#### `external_diff` カラムとインデックスを削除する

- **推定節約量：** 52 GB（`merge_request_diffs` テーブルの 13.4%）
- **労力：** 小

`external_diff` カラムはもはや使用されていません。Carrierwave 側で計算されていました。カラムとその関連インデックス `index_merge_request_diffs_on_external_diff`（14 GB）を削除することで、合計約 52 GB を節約できます。

#### 3 つの SHA カラムを `bytea` に変換する

- **推定節約量：** 78 GB（`merge_request_diffs` テーブルの 20.1%）
- **労力：** 小

`base_commit_sha`、`start_commit_sha`、`head_commit_sha` を `character varying` から `bytea` に変換でき、`merge_requests` の SHA カラムと同じアプローチを踏襲します。これらのカラムの各インデックスも約 3 分の 1 縮小します。

#### `real_size`、`state`、`external_diff_store`、`commits_count` を小さい整数型に変換する

- **推定節約量：** 10 GB（`merge_request_diffs` テーブルの 2.6%）
- **労力：** 小

これらのカラムは現在必要以上に大きな整数型を使用しています。値の範囲が許容する範囲で 1 バイトまたは 2 バイト整数に変換すると約 10 GB を節約できます。

#### `merge_request_diffs` の合計推定節約量：~140 GB（36%）

### `events` テーブル（2,371 GB）

`events` テーブルはクリーンなスキーマを持ち、カラムまたはインデックスレベルでの最適化の可能性は限られています。テーブル定義は十分に設計されており、保存しているイベントの観点からコンテンツは十分に構造化されています。主な節約の機会はデータライフサイクル管理から来ています。

#### `updated_at` カラムを削除する

- **推定節約量：** 34 GB（`events` テーブルの 1.4%）
- **労力：** 小

イベントは追記のみで不変です。分析によると、`created_at` と `updated_at` の値が異なる行はわずか 0.02% であり、それらのほとんどはナノ秒またはミリ秒しか違いがありません。Abdul Wadood による詳細な調査により、`updated_at` と `created_at` が 10 秒以上異なる行は過去 1 年間に発生していないことが確認されました（そのような行の最後は 2024 年からです）。

`updated_at` にインデックスがないため、クエリには積極的に使用されていないことが示されています。しかし Shane Maglangit が指摘したように、インデックスの不在はカラムが未使用であることを決定的に証明するわけではありません（例えば `namespaces.updated_at` は大量に使用されているがインデックスがない）。アクションの前にアプリケーションコードのダブルチェックを実施すべきです。後方互換性が必要な場合は、Rails で `updated_at` を `created_at` のエイリアスにできます。

#### `project_id`、`group_id`、`personal_namespace_id` を `namespace_id` にマージする

- **推定節約量：** 50 GB（`events` テーブルの 2.1%）
- **労力：** 大

events テーブルは所有エンティティのために 3 つの独立したカラムを保存しています。これらは単一の `namespace_id` カラムにマージできる可能性があります。しかし、これらのカラムをマージすると（`projects` は `namespaces` とは別のテーブルなので）イベントを見つけるために `namespaces` テーブルとのジョインが必要となり、すでに遅いイベントクエリが遅くなります。進める前に慎重なベンチマークが必要です。

#### 90 日間の保持ポリシー

- **推定節約量：** 1,800 GB（`events` テーブルの 75.9%）
- **労力：** 大

これはすべてのテーブルで最大の単一の機会です。GitHub と Azure DevOps は両方とも 90 日間のイベント保持を提供しています。同様のポリシーにより `events` テーブルのサイズが劇的に削減されます。Christina Lohr（`@lohrc`）は[90 日間の保持期間を推奨](https://gitlab.com/gitlab-org/gitlab/-/issues/571288)しており、`events` は本質的に他のテーブルに存在するか再構築できるデータの複製であるという事実に焦点を当てています。

この戦略には以下が必要です：

1. 許容可能な保持期間についてのプロダクトの意見。
1. 過去のイベントを他のデータソースから再構築できるかの評価。特に `push_event_payloads` は再構築できない可能性がある高度に絡み合ったテーブルであり、オープンな Issue や MR のイベントを削除できるかどうかを考慮する必要があります。
1. 行ごとの削除ではなく効率的なパーティション削除を可能にするために `events` テーブルの時系列パーティション化（時間減衰データパターンではこのアプローチを詳しく説明しています）。
1. コンプライアンスと分析のユースケースのために 90 日以上古いイベントをオブジェクトストレージまたはデータウェアハウスにアーカイブする。

追加のアイデア：ボットと自動化アクションを特定し、異なる扱いをする（保存するフィールドを減らす、または DB にまったく保存しない）。これは特に AI ツールがレコード作成を増加させるにつれてテーブルの成長速度を大幅に削減できる可能性があります。これには最初にプロダクトの意見が必要です。

#### テーブルパーティション化

- **推定節約量：** 0 GB（直接節約はないが、保持と保守を改善）
- **労力：** 中

保持ポリシーなしでも、`events` テーブルを `created_at` でパーティション化するとクエリパフォーマンス、バキューム効率、保守操作が改善されます。効率的な保持ポリシーを実装するための前提条件です。

Kerri Miller は、長期的にはアプローチを組み合わせることが最善であり、短い保持期間でもパーティション化が適切であるかもしれないと指摘しました。時系列パーティションを使用して 90 日ごとに最も古いものを削除できます。

#### `events` の合計推定節約量：~1,884 GB（保持が採用された場合）

## 設計と実装の詳細

TBD

## 代替ソリューション

TBD
