---
title: データインサイトプラットフォーム 階層的データ検索最適化
status: accepted
creation-date: "2025-02-27"
authors: [ "@ahegyi" ]
coaches: [ "@ankitbhatnagar" ]
dris: [ "@dennis" ]
owning-stage: "~group::platform insights"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/data_insights_platform_hierarchical_data_retrieval_optimization/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->


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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">accepted</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ahegyi" class="text-blue-600 hover:underline">@ahegyi</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ankitbhatnagar" class="text-blue-600 hover:underline">@ankitbhatnagar</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/dennis" class="text-blue-600 hover:underline">@dennis</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~group::platform insights</span></td>
<td class="px-3 py-2 border border-gray-300">2025-02-27</td>
</tr>
</tbody>
</table>
</div>


## 概要

[データインサイトプラットフォーム（DIP）](https://docs.google.com/document/d/1V3XRXfPquBrI_-ob9Fn2Jdskq7W4-heG6zBjJ66AOx8/edit?tab=t.0)を使用することで、データクエリに代替データベースシステムを活用することにより、既存の GitLab 機能を最適化し、スケーラビリティを向上させることができます。プラットフォームはまた ClickHouse を通じてリアルタイムの分析機能を提供します。ClickHouse は大量のデータ処理に適しています。

### 提案

データインサイトプラットフォームを活用し、[Siphon](https://gitlab.com/gitlab-org/analytics-section/siphon) を使用して ClickHouse との効率的なデータ同期を実現します。ClickHouse に取り込まれたデータは、大規模なデータセットに対する階層的クエリをサポートするために特別に設計された[マテリアライズドビュー](https://clickhouse.com/docs/materialized-view/incremental-materialized-view)を使用して拡張されます。

### 問題の説明

PostgreSQL データベースを使用する場合、グループ階層内のデータのクエリには以下の手順が含まれます：

1. グループとそのサブグループを特定する（上限なし、許可されるサブグループ数にアプリケーション制限はない）。
2. 各アイテムに対して、関連するリソース（たとえば Issues）を検索する。
3. 追加のフィルターと JOIN を適用する。
4. レコードをカウントまたはソートする。
5. ユーザーに結果を表示する。

簡略化したデータベースクエリ：

```sql
SELECT
    issues.*
FROM issues
WHERE
                -- このサブクエリには数千のプロジェクトが含まれる場合があります
  project_id IN (SELECT id from projects WHERE ...)
ORDER BY created_at, id
LIMIT 21
```

コードベースからのデータベースクエリの例：

```sql
SELECT
    "issues".*
FROM
    "issues"
    INNER JOIN "projects" ON "projects"."id" = "issues"."project_id"
    LEFT JOIN project_features ON projects.id = project_features.project_id
WHERE (NOT EXISTS (
        SELECT
            1
        FROM
            "banned_users"
        WHERE (issues.author_id = banned_users.user_id)))
AND "projects"."namespace_id" IN (SELECT namespaces.id FROM (
                                            SELECT
                                                namespaces.traversal_ids[array_length(namespaces.traversal_ids, 1)] AS id FROM "namespaces"
                                            WHERE
                                                "namespaces"."type" = 'Group'
                                                AND (traversal_ids @> ('{9970}'))) namespaces)
                        AND (EXISTS (
                                SELECT
                                    1
                                FROM
                                    "project_authorizations"
                                WHERE
                                    "project_authorizations"."user_id" = 4156052
                                    AND (project_authorizations.project_id = projects.id)
                                    AND (project_authorizations.access_level >= 10))
                                OR projects.visibility_level IN (10, 20))
                            AND ("project_features"."issues_access_level" IS NULL
                                OR "project_features"."issues_access_level" IN (20, 30)
                                OR ("project_features"."issues_access_level" = 10
                                    AND EXISTS (
                                        SELECT
                                            1
                                        FROM
                                            "project_authorizations"
                                        WHERE
                                            "project_authorizations"."user_id" = 4156052
                                            AND (project_authorizations.project_id = project_features.project_id)
                                            AND (project_authorizations.access_level >= 10))))
                                AND "issues"."state_id" = 1
                                AND ("issues"."project_id" IS NULL
                                    OR "projects"."archived" = FALSE)
                                AND "issues"."work_item_type_id" IN (1, 2, 5, 7, 6, 3)
                            ORDER BY
                                "issues"."created_at" DESC, "issues"."id" DESC
                            LIMIT 21
```

このようなクエリは現在のプロダクションデータベースで実行に 3〜10 秒かかる場合があります。`gitlab-org` グループの Issue の総数をカウントする同様のクエリは現在タイムアウトします。これらのクエリはデータベースインデックスによってかなりサポートされていますが、主な問題は PostgreSQL がスキャンする必要があるデータ量が大きいことです。これはこれ以上最適化できません。

過去にこのような階層的データベースクエリのパフォーマンスを改善するための最適化が試みられましたが、基本的にこれらの最適化は階層的データベースクエリに関連するすべてのスケーリングの問題を解決しません：

- 高速な階層ルックアップの最適化として namespaces テーブルに `namespaces.traversal_ids` を追加。
- [`IN` 演算子の最適化](https://docs.gitlab.com/development/database/efficient_in_operator_queries)
- [階層キャッシング](https://gitlab.com/groups/gitlab-org/-/epics/11469)

組織レベルのルックアップをサポートする機能を拡張し始めると問題はより複雑になります。組織は複数のグループ階層を含むことができ、データベースがスキャンする必要があるデータを乗算します。

**基本的に、階層的クエリを最適化できる限界に達しています。これは、最大の顧客の一部に対して結果を提供することを非常に困難にしており、今後もそうなり続けます。** エンジニアは機能を開発する際にこれを今日経験しており、非常に大きなグループ/プロジェクト階層に対してパフォーマンスの高いクエリを書くことが非常に困難になっています。

### DIP での最適化の概要

データインサイトプラットフォーム内でこのクエリを最適化するには、いくつかの主要なステップが必要です。これらのステップはかなり一般的であるため、同じアプローチをマージリクエストやエピックなどの他のグループレベルの機能にも適用できます。

#### データ同期

Siphon（[ブループリント](../siphon/_index.md)）は通常わずか 1〜5 秒のデータラグで PostgreSQL テーブルを他のデータベースシステムに低レイテンシでレプリケートできます。これは「リアルタイム」クエリに対してデータが一貫しており使用可能として扱えるほど低い値です。

レプリケートされたテーブルは PostgreSQL と同じ構造を維持するため、統合が簡単です。

PostgreSQL の `project_authorizations` テーブル：

```sql
CREATE TABLE project_authorizations (
  user_id bigint NOT NULL,
  project_id bigint NOT NULL,
  access_level integer NOT NULL,
);

ALTER TABLE ONLY project_authorizations
  ADD CONSTRAINT project_authorizations_pkey PRIMARY KEY (user_id, project_id, access_level);
```

ClickHouse の `siphon_project_authorizations` テーブル：

```sql
CREATE TABLE gitlab_clickhouse_development.siphon_project_authorizations (
  `user_id` Int64,
  `project_id` Int64,
  `access_level` Int64,
  `_siphon_replicated_at` DateTime64(6, 'UTC') DEFAULT now(),
  `_siphon_deleted` Bool DEFAULT false
)
-- バージョンと削除カラムを定義
ENGINE = ReplacingMergeTree(_siphon_replicated_at, _siphon_deleted)
PRIMARY KEY (user_id, project_id)
ORDER BY (user_id, project_id)
```

#### Siphon テーブルのデータベーステーブルエンジン

ClickHouse の Siphon テーブル（慣例として、テーブル名は `siphon_` プレフィックスで始まる）は、データ変更の処理に最適化された [`ReplacingMergeTree`](https://clickhouse.com/docs/engines/table-engines/mergetree-family/replacingmergetree) と呼ばれる特殊なテーブルエンジンを使用します。

ClickHouse は効率的な単一行の更新または削除をサポートしていません。従来の意味での `UPDATE` ステートメントはありません。代わりに、変更は挿入によって処理され、エンジンはプライマリキーに基づいてバックグラウンドでデータを重複排除します。

重複排除は Siphon が管理する 2 つの特別なカラムによって制御されます：

- `_siphon_replicated_at`: 行のバージョン、通常はタイムスタンプ  
- `_siphon_deleted`: 行が削除されたかどうかを示すフラグ

**「更新」** は新しいバージョン値を持つ `INSERT` に過ぎません：

```sql
INSERT INTO siphon_project_authorizations
(user_id, project_id, access_level, _siphon_replicated_at, _siphon_deleted)
VALUES (1, 1, 10, '2025-04-06 18:12:52.234564', false);
```

**「削除」** も `INSERT` ですが、`_siphon_deleted = true` と新しいバージョン値を持ちます：

```sql
INSERT INTO siphon_project_authorizations
(user_id, project_id, access_level, _siphon_replicated_at, _siphon_deleted)
VALUES (2, 1, 10, '2024-04-06 13:43:05.786542', true);
```

任意の時点で、同じプライマリキーを持つ複数の行が存在する可能性があります。

**テーブルデータの例：**

| `user_id` | `project_id` | `access_level` | `_siphon_replicated_at`       | `_siphon_deleted` |
|-----------|--------------|----------------|-------------------------------|-------------------|
| 1         | 1            | 30             | 2025-04-05 03:10:43.118265    | false             |
| 2         | 1            | 10             | 2024-01-03 02:32:37.703416    | false             |
| 1         | 2            | 10             | 2025-03-14 09:07:22.847632    | false             |
| 1         | 1            | 10             | 2025-04-06 18:12:52.234564    | false             |
| 2         | 1            | 10             | 2024-04-06 13:43:05.786542    | true              |

テーブルには 5 行が含まれていますが、重複排除の結果は 1 行のみになります。重複排除は自動で非同期に ClickHouse によって処理されます：

```sql
SELECT * FROM siphon_project_authorizations FINAL
```

| `user_id` | `project_id` | `access_level` | `_siphon_replicated_at`       | `_siphon_deleted` |
|-----------|--------------|----------------|-------------------------------|-------------------|
| 1         | 1            | 10             | 2025-04-06 18:12:52.234564    | false             |

注意：[`FINAL`](https://clickhouse.com/docs/sql-reference/statements/select/from#final-modifier) はクエリ時に行を折りたたむ/マージする可能性があるため、本番環境での使用は推奨されません。

### どのようにしてここに至ったか

プライマリキーのペアを見てみましょう：

- `(1, 1)`: 最初の行は 4 番目の行によって上書きされます。4 番目の行はより新しいバージョンとより低いアクセスレベルを持っています。
- `(2, 1)`: 2 番目の行は 5 番目の行によって上書きされ、削除としてマークされます。

クエリ時に以下を使用して重複排除の効果をシミュレートできます：

```sql
SELECT * FROM (
  SELECT 
    user_id, 
    project_id, 
    argMax(access_level, _siphon_replicated_at) AS access_level, 
    argMax(_siphon_deleted, _siphon_replicated_at) AS deleted 
  FROM siphon_project_authorizations 
  GROUP BY user_id, project_id
) pa
WHERE deleted = false
```

注意：この重複排除パターンは、同じプライマリキーを持つ 2 つのレコードが返されないように、`ReplacingMergeTree` テーブルを操作する際に不可欠です。

#### Siphon テーブルのクエリパフォーマンス

Siphon データベーステーブルは定義されたプライマリキーを介したデータアクセスに最適化されています。テーブルのプライマリキー定義は常に PostgreSQL の対応するものと全く同じです。

これは、他のカラムを対象とするクエリがうまく実行されないことを意味します。ClickHouse でプロジェクトの Issue をフィルタリングする例：

```sql
SELECT *
FROM siphon_issues
WHERE
  project_id = 278964 
ORDER BY created_at, id
LIMIT 20;
```

注意：簡略化のため、重複排除部分はクエリの例に追加していません。

パフォーマンスは非常に遅く、クエリはテーブル全体をスキャンします。

```plaintext
20 rows in set. Elapsed: 40.830 sec. Processed 100+ million rows.
```

グループレベルのクエリはさらに悪い結果になる可能性があります。`siphon_namespaces` テーブルからグループ階層のすべてのプロジェクトまたは名前空間をクエリする必要があるためです。

プライマリキー以外のアクセスパターンに対してクエリを最適化することは、ClickHouse では単純にデータベースインデックスを追加するほど簡単ではありません。データベースインデックスは、プライマリキーもフィルタリングされてスキャンするデータがすでに削減されている場合に効果的です。

#### Siphon テーブル上のマテリアライズドビュー

ClickHouse の[マテリアライズドビュー](https://clickhouse.com/docs/materialized-view/incremental-materialized-view)を使用すると、データベーステーブルに対して効率的なアクセスパターンを定義できます。`INSERT` トリガーとして考えてください。ソーステーブルにデータが挿入されると、マテリアライズドビューも自動的に更新されます。

ClickHouse での `UPDATE` と `DELETE` 操作はどちらも `INSERT` として表現されるため、これは私たちにとってうまく機能します。プライマリキーが変わらない限り（[注意事項セクション](#data-inconsistency)を参照）、マテリアライズドビューはソーステーブルと同期した状態を維持します。

`project_id` によるクエリを高速化するマテリアライズドビューの例：

```sql
CREATE TABLE issues_by_project
(
  -- siphon_issues と同じカラムをリスト
)
ENGINE = ReplacingMergeTree(_siphon_replicated_at, _siphon_deleted)
PRIMARY KEY (project_id, id)
ORDER BY (project_id, id);

CREATE MATERIALIZED VIEW issues_by_project_mv TO issues_by_project
AS SELECT *
FROM siphon_issues;
```

この新しいマテリアライズドビューに対してクエリを実行すると、パフォーマンスがはるかに向上します：

```sql
SELECT *
FROM issues_by_project
WHERE
  project_id = 278964 
ORDER BY created_at, id
LIMIT 20;
```

```plaintext
20 rows in set. Elapsed: 0.024 sec. Processed 125.83 thousand rows
```

見てわかるように、マテリアライズドビューは特定のフィルターでクエリを最適化するのに役立ちます。ClickHouse が 125,000 行以上を処理しましたが、それでも効率的とみなされます。PostgreSQL とは異なり、ClickHouse では低い I/O コストのために 1〜500 万行/クエリのスキャンはかなり一般的です。

クエリにフィルターを追加してもパフォーマンスに大きな影響はありません。これらのフィルターがテーブルの他のカラムを対象としている限り。たとえば、`author_id` へのフィルターの追加は上記のクエリと同様にパフォーマンスを発揮します。

必要に応じて[データスキッピングインデックス](https://clickhouse.com/docs/optimize/skipping-indexes)などの最適化でパフォーマンスをさらに向上させることもできます。

#### 階層ルックアップのためのマテリアライズドビュー

前の例では、PostgreSQL でデータベースインデックスで十分に最適化できる `project_id` ベースのルックアップに対応していました。元の問題に戻ります。グループ階層内のデータアクセスクエリをどのように最適化できるでしょうか？

最適化の重要な要素は、特定の名前空間レコードのすべての祖先を含む `namespaces` テーブルの `traversal_ids` 配列です。

名前空間レコードは以下のいずれかです：

- トップレベルグループ
- サブグループ
- プロジェクト（`ProjectNamespace` と呼ばれる）
- パーソナル名前空間（`UserNamespace` と呼ばれる）

GitLab.com の [Siphon プロジェクト](https://gitlab.com/gitlab-org/analytics-section/siphon)の traversal IDs の値は次のとおりです：`[9970,55154808,95754906]`

- `9970`：`gitlab-org` トップレベルグループ。
- `55154808`：`analytics-section` サブグループ。
- `95754906`：`siphon` プロジェクト名前空間。

プロジェクト名前空間は `projects` テーブルと 1:1 のマッピングを持ちます。この場合、`id=63106760` のプロジェクト行を指しています。

**組織、グループ、サブグループ、プロジェクトレベルのクエリ**は、すべての Issue がそれぞれの `traversal_ids` 値とともに保存されるマテリアライズドビューを作成することで最適化できます。

##### `traversal_ids` のフォーマット

ClickHouse は動的配列プレフィックスのフィルタリングが効率的ではありません。`traversal_ids` を文字列に変換するとはるかに良いパフォーマンスが得られます。組織 ID を前置するだけで、組織を組み合わせることもできます。

`traversal_ids` は `traversal_path` になります：`1/9970/55154808/95754906/`（1 は組織 ID）

`siphon_namespaces` テーブルを基にして、フォーマットされた `traversal_path` を作成するマテリアライズドビューを作成できます：

```sql
CREATE TABLE namespace_traversal_paths(
  `id` Int64 DEFAULT 0,
  `traversal_path` String DEFAULT '0/',
  `version` DateTime64(6, 'UTC') DEFAULT now(),
  `deleted` Bool DEFAULT false
)
ENGINE = ReplacingMergeTree(version, deleted)
PRIMARY KEY id
ORDER BY id
SETTINGS index_granularity = 512; -- 単一行値のルックアップを最適化


CREATE MATERIALIZED VIEW namespace_traversal_paths_mv TO namespace_traversal_paths
(
    `id` Int64,
    `traversal_path` String,
    `version` DateTime64(6, 'UTC'),
    `deleted` Bool
)
AS SELECT
    id,
    -- organization_id と traversal_ids 配列を連結
    if(length(traversal_ids) = 0, concat(toString(ifNull(organization_id, 0)), '/'), concat(toString(ifNull(organization_id, 0)), '/', arrayStringConcat(traversal_ids, '/'), '/')) AS traversal_path,
    _siphon_replicated_at AS version,
    _siphon_deleted AS deleted
FROM gitlab_clickhouse_development.siphon_namespaces
```

このマテリアライズドビューを使用すると、特定の名前空間 ID の `traversal_path` 値を簡単にクエリできます：

```sql
SELECT traversal_path 
FROM namespace_traversal_paths
WHERE
id = 95754906
LIMIT 1;

-- 1/9970/55154808/95754906/
```

##### Issues マテリアライズドビューの作成

マテリアライズドビューの作成には、`namespace_id` カラムを通じて `issues` レコードを `namespace_traversal_paths` テーブルと接続する `JOIN` が含まれます。

マテリアライズドビューには `siphon_issues` テーブルのすべてのカラムに加えて、上記の `JOIN` からの `traversal_path` という追加のカラムが含まれます。オプションで、まったくフィルタリングする必要がないカラムはディスクスペースを節約するために省略できます。

```sql
CREATE TABLE IF NOT EXISTS hierarchy_issues
(
        traversal_path String,
        id Int64,
        title Nullable(String),
        author_id Nullable(Int64),
        project_id Nullable(Int64),
        created_at Nullable(DateTime64(6, 'UTC')),
        updated_at Nullable(DateTime64(6, 'UTC')),
        milestone_id Nullable(Int64),
        iid Nullable(Int64),
        updated_by_id Nullable(Int64),
        weight Nullable(Int64),
        confidential Bool DEFAULT false,
        due_date Nullable(Date32),
        moved_to_id Nullable(Int64),
        time_estimate Nullable(Int64) DEFAULT 0,
        relative_position Nullable(Int64),
        service_desk_reply_to Nullable(String),
        last_edited_at Nullable(DateTime64(6, 'UTC')),
        last_edited_by_id Nullable(Int64),
        closed_at Nullable(DateTime64(6, 'UTC')),
        closed_by_id Nullable(Int64),
        state_id Int8 DEFAULT 1,
        duplicated_to_id Nullable(Int64),
        promoted_to_epic_id Nullable(Int64),
        health_status Nullable(Int8),
        sprint_id Nullable(Int64),
        blocking_issues_count Int64 DEFAULT 0,
        upvotes_count Int64 DEFAULT 0,
        work_item_type_id Nullable(Int64),
        namespace_id Nullable(Int64),
        start_date Nullable(Date32),
        version DateTime64(6, 'UTC') DEFAULT now(),
        deleted Bool DEFAULT FALSE
)
ENGINE = ReplacingMergeTree(version, deleted)
PRIMARY KEY (traversal_path, id);

CREATE MATERIALIZED VIEW hierarchy_issues_mv TO hierarchy_issues
AS WITH
    cte AS
    (
        SELECT *
        FROM siphon_issues
    ),
    namespace_paths AS
    (
        -- `traversal_path` 値を検索
        SELECT
            id,
            traversal_path
        FROM namespace_traversal_paths
        WHERE id IN (
            SELECT DISTINCT namespace_id
            FROM cte
        )
    )
SELECT
    -- namespace_id が null の場合を処理
    multiIf(cte.namespace_id != 0, namespace_paths.traversal_path, '0/') AS namespace_path,
    cte.id Int64,
    cte.title,
    cte.author_id,
    cte.project_id,
    cte.created_at,
    cte.updated_at,
    cte.milestone_id,
    cte.iid,
    cte.updated_by_id,
    cte.weight,
    cte.confidential,
    cte.due_date,
    cte.moved_to_id,
    cte.time_estimate,
    cte.relative_position,
    cte.service_desk_reply_to,
    cte.last_edited_at,
    cte.last_edited_by_id,
    cte.closed_at,
    cte.closed_by_id,
    cte.state_id,
    cte.duplicated_to_id,
    cte.promoted_to_epic_id,
    cte.health_status,
    cte.sprint_id,
    cte.blocking_issues_count,
    cte.upvotes_count,
    cte.work_item_type_id,
    cte.namespace_id,
    cte.start_date,
    cte._siphon_replicated_at AS version,
    cte._siphon_deleted AS deleted
FROM cte
LEFT JOIN namespace_paths ON namespace_paths.id = cte.namespace_id
```

##### マテリアライズドビューのパフォーマンス評価

テーブルに `traversal_path` カラムが存在することで、グループレベルのクエリを効率的に実行できるようになります：

```sql
SELECT *
FROM hierarchy_issues
WHERE
  startsWith(traversal_path, '1/9970/')
ORDER BY created_at, id
LIMIT 20;
```

```plaintext
20 rows in set. Elapsed: 0.047 sec. Processed 780.83 thousand rows
```

クエリには 47 ミリ秒かかり、780,000 行のみをスキャンしました。

状態分布を含む `COUNT` クエリを見てみましょう：

```sql
SELECT state_id, COUNT(*)
FROM hierarchy_issues
WHERE
  startsWith(traversal_path, '1/9970/')
GROUP BY state_id
```

```plaintext
2 rows in set. Elapsed: 0.007 sec. Processed 780.83 thousand rows
```

`author_id` カラムをフィルタリングすることで特定のユーザーに絞り込むことができます：

```sql
SELECT *
FROM hierarchy_issues
WHERE
  startsWith(traversal_path, '1/9970/') AND
  author_id = 4156052
ORDER BY created_at, id
LIMIT 20;
```

```plaintext
20 rows in set. Elapsed: 0.034 sec. Processed 780.83 thousand rows
```

データスキッピングインデックスを使用した最適化も可能です：

```sql
ALTER TABLE hierarchy_issues ADD INDEX idx_author_id author_id TYPE set(1000) GRANULARITY 1;
```

これにより ClickHouse が処理する行数を減らすことができます：

```plaintext
20 rows in set. Elapsed: 0.022 sec. Processed 421.14 thousand rows
```

##### より複雑なケース

Issues のクエリには、いくつかのテーブルと `JOIN` が含まれることが多いです。最適化されたマテリアライズドビューにより、データベースがスキャンする必要があるレコードの量を大幅に減らしました。`JOIN` としての追加フィルターの追加は慎重に検討する必要があります。

現在のユーザーに表示されない Issue もフィルタリングしたい場合を想定しましょう。これは `project_authorizations` テーブルを ClickHouse に複製することで行えます。変更されたクエリは次のようになります：

```sql
SELECT *
FROM hierarchy_issues
WHERE
  startsWith(traversal_path, '1/9970/') AND
  project_id IN (
    SELECT project_id FROM siphon_project_authorizations WHERE user_id = 4156052
  )
ORDER BY created_at, id
LIMIT 20;
```

```plaintext
20 rows in set. Elapsed: 0.050 sec. Processed 895.52 thousand rows
```

注意：禁止ユーザーに対しても同様のフィルターを追加できます。あるいは、フィルタリング速度を向上させるために[ClickHouse ディクショナリ](https://clickhouse.com/docs/dictionary)を構築することもできます。

Issues の直接的な関連付けとフィルターは慎重に計画する必要があります。ClickHouse での `JOIN` ステートメントはプライマリキーに関して PostgreSQL ほど効率的ではないため、Issue のアサイニー、レビュアー、またはラベルをフィルタリングするクエリはおそらく別の解決策が必要です。

1 つのアイデアは、これらのテーブルを `hierarchy_issues` に移動して、`has-many` の関連付けが配列になるようにすることです：

- ラベルリンクは `label_ids[]` になります。
- アサイニーは `assignee_ids[]` になります。
- レビュアーは `reviewer_ids[]` になります。

これは、これらの関連付けのいずれかが変更されると、`hierarchy_issues` テーブルのデータが古くなる可能性があることを意味します。可能な軽減策：

- Rails 側の関連付けが関連する Issue に対して `touch` を呼び出す（`updated_at` タイムスタンプを更新する）と、Siphon は自動的に `issues` 行を再挿入します。これにより、マテリアライズドビューで定義された関連付けも自動的に再読み込みされます。
- 定期的な最終整合性チェックが基礎となるデータを修正します。[注意事項セクション](#data-inconsistency)を参照してください。

#### 実装

データインサイトプラットフォームは必要なデータが ClickHouse で利用可能で最新であることを確保します（Siphon を使用）。ClickHouse でさらにデータが必要な場合、Siphon はそれらのテーブルも複製します。

1. 現在の ClickHouse データベースと Siphon の設定を確認して、どのテーブルがすでに複製されているかを判断します。
1. テーブルが欠けている場合、ClickHouse でデータベーステーブルを作成し、Siphon でレプリケーションを設定します。
1. プライマリキーが `traversal_path` + ソーステーブルのプライマリキーであるマテリアライズドビューを設計します。
1. 以下のオプションのいずれかを選択してクエリメカニズムを実装します。

初期段階では、データをクエリするための 2 つのオプションがあります：

- DIP と Rails アプリケーション間の Proto API。
  - この場合、[DIP クエリ API](../data_insights_platform_querying_api/_index.md) はシンプルなインターフェイスを公開し、データの重複排除やその他の複雑さは隠されます。
- Rails アプリケーションから ClickHouse を直接使用する（このアプローチは[ある時点で非推奨になります](https://gitlab.com/gitlab-org/architecture/gitlab-data-analytics/design-doc/-/blob/master/decisions/008_allow_ch_connectiviy.md)）。
  - ClickHouse クエリは機能オーナーによって Rails アプリケーションで実装されます。

**追加のメンテナンスタスク：**

Siphon は最終的に[データベーススキーマの変更](https://gitlab.com/gitlab-org/analytics-section/siphon/-/issues/127)をサポートします。これは PostgreSQL テーブルと Siphon テーブル間のスキーマ変更がプラットフォームによって自動的に処理されることを意味します。

ドキュメントの以前のセクションで、マテリアライズドビュー内のデータが変更されると一部の不整合が発生する可能性があると述べました。DIP プラットフォームは設定されたマテリアライズドビューが定期的に不整合をチェックし、できるだけ早くデータが修正されることを確保します。

#### 結論

ClickHouse は PostgreSQL と比較して大量のデータに対して大幅に高速なクエリ実行時間を提供します。ただし、データベーススキーマはアプリケーションのデータアクセスパターンに合わせて慎重に設計する必要があります。階層ルックアップ（組織、グループ、プロジェクトレベルなど）に最適化されたマテリアライズドビューを活用することで、リアルタイムの分析機能を実現できます。このアプローチは以下のような他のコアドメインオブジェクトに簡単に拡張できるほど汎用的です：

- マージリクエスト
- エピック
- 脆弱性
- プロジェクトまたはグループレベルで利用可能な他の機能。

DIP 内のコンポーネントの概要：

![Overview of the components](/images/handbook/engineering/architecture/design-documents/data_insights_platform_hierarchical_data_retrieval_optimization/overview.png)

### 注意点と制限

この提案は、現在他に実行可能な代替手段がないスケーラビリティの問題に対する比較的複雑な解決策を示しています。

#### ClickHouse クエリの複雑さ

`ReplacingMergeTree` エンジンのため、Siphon テーブルまたはそれに基づくマテリアライズドビューに対するすべてのクエリは、クエリ時の重複排除を確保する必要があります。これには通常、追加の `GROUP BY` サブクエリが必要であり、クエリの生成が困難で、デバッグが難しくなる可能性があります。

#### 開発コストの増加

この提案は新しいデータベースシステム ClickHouse を導入します。下位互換性を維持するために、クエリとフィルターを 2 回保守する必要があります：PostgreSQL（既存）と ClickHouse（新規）の両方。

注意：[高度な Finder ドキュメント](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/12300)の提案に合わせることで、コストがある程度軽減されます。

#### より多くの可動部分

データインサイトプラットフォームはより多くのインフラコンポーネントを導入します。これはより多くの潜在的な障害点があることも意味します：

- **Siphon**: データ同期を処理  
- **ClickHouse**: 分析データストアとして機能  
- **DIP クエリ API**: クエリレイヤーとして機能

#### データラグ

レプリケーションベースのシステムと同様に、ある程度のデータラグは避けられず、予想されるべきです。このシステムを「リアルタイム」と合理的に表現できますが、時間的に敏感な操作には使用しないでください。

#### データの不整合

[マテリアライズドビュー](#database-table-engine-for-siphon)セクションで述べたように、ほとんどのデータ変更は対応するマテリアライズドビューテーブルに正しく反映されます。

ただし、不整合が発生する可能性があるエッジケースが 1 つあります。`hierarchy_issue` マテリアライズドビューで、たとえばサブグループやプロジェクトが階層内で移動された場合など、`traversal_id` カラムが変更されると、その値は既存のレコードに対して自動的に更新されません。

[この Siphon Issue](https://gitlab.com/gitlab-org/analytics-section/siphon/-/issues/118#note_2428293882)で説明されているこの問題を検出して修正するための技術があります。定期的なバックグラウンドワーカーを使用することで、このような階層変更によるデータラグを大幅に減らすことができます。

この問題の詳細については、[このブログ記事](https://clickhouse.com/blog/using-materialized-views-in-clickhouse#materialized-views-and-joins)を参照してください。
