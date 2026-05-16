---
title: "Issue における Traversal ID"
status: ongoing
creation-date: "2025-04-22"
authors: ["@dgruzd", "@nicolasdular"]
coach: ["@ahegyi"]
approvers: []
owning-stage: "~plan::product planning"
participating-stages: []
upstream_path: /handbook/engineering/architecture/design-documents/traversal_ids_on_issues/
upstream_sha: d5f4aa38819ae2b572eb32e0d967394d0361a975
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-19T13:56:02-06:00"
---

## ビジネス目標

ワークアイテムのさらなる展開のために、階層ベースのデータクエリアプローチに内在するスケーリング問題に対処する必要があります。
これらのパフォーマンス問題に対処しなければ、製品は大規模な組織に対して適切にスケールできません。

進行中の開発の詳細については以下を参照してください:

- [Issue の説明を分解する](https://gitlab.com/groups/gitlab-org/-/epics/18643)
- [Issue に namespace_traversal_ids を非正規化する](https://gitlab.com/groups/gitlab-org/-/epics/18644)
- [未使用の Issue インデックスを削除する](https://gitlab.com/groups/gitlab-org/-/epics/18704)

## 問題の説明

ワークアイテムフレームワークの一部として `epics` を `issues` テーブルに移行した後、グループ階層内でワークアイテムをクエリする際の新たなパフォーマンス問題に直面しています。
この移行前は、階層内でクエリする場合に 2 つのケースしかありませんでした:

1. Issue - グループ階層内のすべてのプロジェクトからすべての Issue を取得する。`issues` テーブルの `project_id` を使用できます。
2. Epic - グループ階層内のすべてのグループからすべての Epic を取得する。`epics` テーブルの `group_id` を使用できます。

どちらの場合も、名前空間の数はグループまたはプロジェクトのいずれかに限定されていました。また、`epics` テーブルはサイズが大幅に小さかった（`issues` テーブルの約 0.5%）。

ワークアイテムでは、すべてが 1 つの `issues` テーブルに格納されており、`work_item_type_id` カラムを使用して異なるワークアイテムを区別するだけです。
要件も変わり、グループとプロジェクトの両方からすべてのワークアイテム（Epic、Issue、またはその他のワークアイテムタイプ）をリストしたいと考えています。

最初の実験では、`gitlab-org` や `gitlab-com` などの大規模グループでクエリがタイムアウトするパフォーマンス問題に直面しています。

### 問題の根本原因 - 多数の名前空間でワークアイテムを検索する

グループ内のすべての Issue を検索する際、次のようなクエリを使用します（可読性向上のため認可チェックは省略）:

```sql
WITH namespace_ids AS (
  SELECT id
  FROM namespaces
  WHERE traversal_ids @> ('{9970}')
)
SELECT * from issues WHERE issues.namespace_id IN (
  SELECT id FROM namespace_ids
)
ORDER BY created_at, id LIMIT 100;
```

大規模グループの場合、`IN` 句の namespace_ids が数千 ID になり、クエリがタイムアウトする可能性があります。

## 提案: Issue テーブルに traversal_ids を非正規化する

ボトルネックは大きな IN 句にあるため、`issues` テーブルに階層を非正規化することを提案します。これにより、すべての namespace_ids をクエリに提供するかわりに、グループ階層内のすべての Issue を直接クエリできます。
このアプローチはすでに大きな成果を示しており、`vulnerability_reads` テーブルは[同じ最適化](https://gitlab.com/groups/gitlab-org/-/epics/12372)を行っています。
注目すべき点: `vulnerabilities_reads` テーブルは GitLab.com の `issues` テーブルと同様のカーディナリティを持っていますが、要件に違いがあります。たとえば、ソートオプションが限られており、これは issues テーブルにより多くのインデックスを追加することで対処する必要があります。

### セットアップ

実験を検証するため、`issues` を `new_issues` テーブルにコピーし、レプリカ上で `traversal_ids` カラムをバックフィルしました。
再現するための完全なセットアップはこちらにあります: https://gitlab.com/gitlab-org/plan-stage/product-planning/issue-database-research-benchmarking

#### 有効化前後のパフォーマンス

上記プロジェクトの一部として、traversal_ids を有効化する前後で同一の SQL クエリセットを実行するベンチマークセットアップを実行しています。
すべての有効化前後のクエリプラン、タイミング、バッファ使用量を含む完全なレポートはこちらにあります:

https://gitlab.com/gitlab-org/plan-stage/product-planning/issue-database-research-benchmarking/-/blob/main/report.md

### インデックス

#### トップレベルグループインデックス

大規模なトップレベルグループでワークアイテムをクエリしてソートする機能をサポートするため、すべての `traversal_ids` のルートに BTREE インデックスを追加しています。
これはすべてのソートオプションをサポートするために必要です。

```sql
CREATE INDEX idx_issues_on_root_namespace_id_and_state_id_created_at ON issues USING btree ((traversal_ids[1]), state_id, created_at);
CREATE INDEX idx_issues_on_root_namespace_id_and_state_id_updated_at ON issues USING btree ((traversal_ids[1]), state_id, updated_at);
CREATE INDEX idx_issues_on_root_namespace_id_and_closed_at ON issues USING btree ((traversal_ids[1]), closed_at);
```

これらは提案されたインデックスですが、ワークアイテムタイプのフィルタリングに対応するために `work_item_type_id` をインデックスの一部として追加する必要があるかもしれません。

#### traversal_ids のインデックス

特定のサブグループのクエリを最適化するため、`traversal_ids` に BTREE インデックスを追加します。これは、そのサブグループ内のすべてのワークアイテムのクエリを最適化し、メモリ内でソートを強制するトレードオフです。

```sql
CREATE INDEX idx_issues_on_state_id_traversal_ids ON issues USING btree (state_id, traversal_ids);
```

このインデックスは次の方法でクエリする場合に最も効果的です（この場合、namespace_id `10510295` の場合）:

```sql
WHERE
    state_id = 1
    AND
        traversal_ids >= '{9970, 10510295}'::bigint[] AND
        traversal_ids < '{9970, 10510296}'::bigint[]
```

テストでは、このクエリは大規模なサブグループに対して IN クエリよりも良好なパフォーマンスを発揮することが確認されました。これが、単に root_namespace_id ではなく traversal_ids を使用することを決定した理由です。ただし、より大きなサブグループでパフォーマンスの問題が発生した場合は、第 2 レベルのサブグループ向けにより具体的なインデックスを作成できます。例えば:

```sql
CREATE INDEX idx_issues_on_lvl2_namespace_id_and_state_id_created_at ON issues USING btree ((traversal_ids[2]), state_id, created_at);
```

#### Traversal ID のストレージ

**カラムストレージのオーバーヘッド:**

```sql
SELECT
    pg_size_pretty(
        (SELECT avg_width FROM pg_stats
         WHERE tablename = 'new_issues' AND attname = 'traversal_ids')::bigint
        * (SELECT reltuples FROM pg_class WHERE relname = 'new_issues')::bigint
    ) AS estimated_column_size;
```

```sql
estimated_column_size
-----------------------------
4055 MB
```

#### インデックスストレージ

各ソートインデックスで約 6GB、`traversal_ids` インデックスで約 4GB と見積もられます。
ソートインデックスが 3 つ必要なため、インデックスの合計ストレージサイズは約 22GB になります。

```sql
 SELECT
    indexname,
    pg_size_pretty(pg_relation_size(indexname::regclass)) AS index_size
FROM
    pg_indexes
WHERE
    indexname IN ('idx_new_issues_on_root_namespace_id_and_state_id_created_at', 'idx_new_issues_on_state_id_traversal_ids')
ORDER BY
    pg_relation_size(indexname::regclass) DESC;
                          indexname                          | index_size
-------------------------------------------------------------+------------
 idx_new_issues_on_state_id_traversal_ids                    | 6715 MB
 idx_new_issues_on_root_namespace_id_and_state_id_created_at | 4109 MB
 ```

### 名前空間移動時の traversal_ids 同期の遅延

Issue を別の名前空間に移動する場合、すべての `traversal_ids` を更新する必要があります。これはバックグラウンドジョブで行われるため、Issue が表示されない時間枠が生じます。`vulnerability_reads` の更新ワーカーに基づくと、これらのジョブの P95 実行時間は許容範囲内（3 秒未満）です [[0](https://log.gprd.gitlab.net/app/lens?_g=%28filters%3A%21%28%28%27%24state%27%3A%28store%3AappState%29%2Cmeta%3A%28alias%3A%21n%2Cdisabled%3A%21f%2Cindex%3AAWNABDRwNDuQHTm2tH6l%2Ckey%3Ajson.class%2Cnegate%3A%21f%2Cparams%3A%28query%3A%27Sbom%3A%3ASyncProjectTraversalIdsWorker%27%29%2Ctype%3Aphrase%29%2Cquery%3A%28match_phrase%3A%28json.class%3A%27Sbom%3A%3ASyncProjectTraversalIdsWorker%27%29%29%29%2C%28%27%24state%27%3A%28store%3AappState%29%2Cmeta%3A%28alias%3A%21n%2Cdisabled%3A%21f%2Cindex%3AAWNABDRwNDuQHTm2tH6l%2Ckey%3Ajson.job_status.keyword%2Cnegate%3A%21f%2Cparams%3A%28query%3Adone%29%2Ctype%3Aphrase%29%2Cquery%3A%28match_phrase%3A%28json.job_status.keyword%3Adone%29%29%29%29%2Ctime%3A%28from%3Anow-1w%2Cto%3Anow%29%29#/?_g=h@97e8101)], [1](https://log.gprd.gitlab.net/app/lens?_g=%28filters%3A%21%28%28%27%24state%27%3A%28store%3AappState%29%2Cmeta%3A%28alias%3A%21n%2Cdisabled%3A%21f%2Cindex%3AAWNABDRwNDuQHTm2tH6l%2Ckey%3Ajson.class%2Cnegate%3A%21f%2Cparams%3A%28query%3A%27Vulnerabilities%3A%3AUpdateNamespaceIdsOfVulnerabilityReadsWorker%27%29%2Ctype%3Aphrase%29%2Cquery%3A%28match_phrase%3A%28json.class%3A%27Vulnerabilities%3A%3AUpdateNamespaceIdsOfVulnerabilityReadsWorker%27%29%29%29%2C%28%27%24state%27%3A%28store%3AappState%29%2Cmeta%3A%28alias%3A%21n%2Cdisabled%3A%21f%2Cindex%3AAWNABDRwNDuQHTm2tH6l%2Ckey%3Ajson.job_status.keyword%2Cnegate%3A%21f%2Cparams%3A%28query%3Adone%29%2Ctype%3Aphrase%29%2Cquery%3A%28match_phrase%3A%28json.job_status.keyword%3Adone%29%29%29%29%2Ctime%3A%28from%3Anow-1w%2Cto%3Anow%29%29#/?_g=h@97e8101)

## テーブルサイズの課題

traversal ID を実装する前に、`issues` テーブルのサイズを削減する必要があります。これはすでに大きなテーブルだからです。
このアイデアは既存の `vulnerability_reads` テーブルに似ていますが、重複データを持つ `issues_reads` テーブルを作成するかわりに、`issues` テーブルを縮小して、フィルタリングやソートに使用しないデータを削除したいと考えています。

このテーブル分解は、`traversal_ids` インデックスの導入に必要なだけでなく、テーブル全体のサイズを削減します。

### 現在のストレージ統計

テーブルには以下のカラム + インデックスがあり、テーブルサイズの 60% を占めています:

- `description`（約 20%）
- `description_html`（約 32%）
- `index_issues_on_description_trigram_non_latin`（約 10%）

`title` と `title_html` はテーブルサイズの約 3% を占めています。ただし、タイトルとともにワークアイテムのリストをクエリするアクセスパターンが一般的であり、メリットが最小限のため、これらは分解しません。
その他の各カラムはテーブルサイズ合計の 1% 以下を使用しています。

**issue_search_data の統合**

`issue_search_data` テーブルがあり、全文検索インデックスに使用できる `search_vector tsvector` カラムが含まれています。ただし、`issue_search_data` テーブルには `project_id` のみがあり、それでパーティション分割されています。
エピックワークアイテムに移行したことで、グループに存在するエピックワークアイテムも存在するため、このベクターインデックスを新しい分解テーブルに移動する良い機会です。

**パーティション分割**

テーブルのサイズのため、新しい `work_item_descriptions` テーブルを `root_namespace_id` でパーティション分割することも目指しています。`namespace_id` ではなく `root_namespace_id` を使用する理由は、その説明を含むグループ内のワークアイテムをリストするアクセスパターンのためです。`namespace_id` をパーティションキーとして使用した場合、1 つではなく複数のパーティションでデータを検索する必要があります。

`root_namespace_id` をパーティションキーとすることのデメリットは、Issue をルート名前空間間で移動する際に最新の状態を保つ必要があることです。

**新しい work_item_descriptions テーブル**

これにより、`work_item_descriptions` テーブルのデータは次のようになります:

- `last_edited_at`、`lock_version`、`cached_markdown_version` は `description` カラムの変更に関連しています。そのため、これらのカラムでフィルタリングもソートも行わないため、同じテーブルに保持することが理にかなっています。
- `search_vector` は `issues` テーブルの `title` もエンコードしています。これは完璧な分離ではありませんが、全文検索クエリを簡素化する能力を提供します。

```sql
                                                     Table "public.work_item_descriptions"
                Column                 |            Type             | Collation | Nullable |              Default
---------------------------------------+-----------------------------+-----------+----------+------------------------------------
 work_item_id                          | bigint                      |           | not null |
 description                           | text                        |           |          |
 description_html                      | text                        |           |          |
 cached_markdown_version               | integer                     |           |          |
 last_edited_at                        | timestamp without time zone |           |          |
 last_edited_by_id                     | bigint                      |           |          |
 lock_version                          | integer                     |           |          | 0
 namespace_id                          | bigint                      |           | not null |
 root_namespace_id                     | bigint                      |           | not null |
 search_vector                         | tsvector                    |           | not null |
```

#### work_items_description テーブルインデックス

新しい `work_item_descriptions` テーブルでも、以前と同じインデックスを引き続き使用します:

```sql
CREATE INDEX idx_work_item_descriptions_on_description_trigram ON work_item_descriptions USING gin (description gin_trgm_ops) WHERE description IS NOT NULL;
CREATE INDEX idx_work_item_descriptions_on_search_vector ON ONLY work_item_descriptions USING gin (search_vector);
CREATE INDEX idx_work_item_descriptions_on_last_edited_by_id ON work_item_descriptions USING btree (last_edited_by_id);
```

### issues テーブルからのカラムの追加移動

以下のカラムはフィルタリングやソートには使用されませんが、外部キー制約があるためすべてインデックスが必要です。
これらのカラムは別のテーブル（名前は未定）に移動します:

- `moved_to_id`
- `duplicated_to_id`
- `promoted_to_id`

```sql
                                                      Table "public.work_item_transitions"
                Column                 |            Type             | Collation | Nullable |              Default

---------------------------------------+-----------------------------+-----------+----------+------------------------------------
 work_item_id                          | bigint                      |           | not null |
 moved_to_id                           | bigint                      |           |          |
 duplicated_to_id                      | bigint                      |           |          |
 promoted_to_epic_id                   | bigint                      |           |          |
```

### issues テーブルの新旧インデックス

分解作業により、`issues` テーブルから以下のインデックスを削除できます:

1. `index_issues_on_duplicated_to_id`
2. `index_issues_on_moved_to_id`
3. `index_issues_on_promoted_to_epic_id`
4. `index_issues_on_last_edited_by_id`
5. `index_issues_on_description_trigram_non_latin`

さらに、以下のインデックスも削除できることが判明しました:

1. `idx_issues_on_health_status_not_null`
2. `index_issues_on_project_health_status_asc_work_item_type`
3. `index_issues_on_project_id_and_external_key`

削除できる未使用インデックスも引き続き調査しています: https://gitlab.com/gitlab-org/gitlab/-/issues/557718

`traversal_ids` には 4 つの追加インデックスが必要です（`traversal_ids[0]` のソートオプション用に 3 つ、`traversal_ids` 用に 1 つ）。つまり、テーブルのインデックスは正味 4 つ減少します。

## issues テーブルをパーティション分割しない理由

テーブルを分解した後も、`issues` テーブルのサイズは大規模テーブルの上限である 100GB を超えています。
そのため、`issues` テーブルのパーティション分割も検討しましたが、[前回のリサーチで見つかったデメリットは依然として残っています](/handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/issue-group-search-partitioning/)。`root_namespace_id` でパーティション分割するとした場合:

- アクセスパターンが常にパーティションキーと一致するわけではない（例: ユーザーに割り当てられたワークアイテムや、階層をまたぐリンクされたワークアイテム）
- セルフマネージドインスタンスは GitLab.com と比較して root_namespace_ids が少ない
- セルを使用すると、`issues` のテーブルサイズは小さくなる
- テーブルのパーティション分割を段階的にロールアウトできない

### 実装計画

両方の計画は並行して実施できます:

#### テーブル分解

1. `work_item_descriptions` と `work_item_transitions` テーブルを作成する
2. トリガーを使用した Issue のデュアルライトシステムを構築する
3. 既存の Issue の説明を `work_item_descriptions` と `work_item_transitions` テーブルにバックフィルする
4. 次のリリースまで待機する（必須停止を伴う）
5. 新しいテーブルからクエリするようにアプリケーションコードを更新する
6. 新しいテーブルにのみ書き込むようにアプリケーションコードを更新する
7. トリガーを削除し、カラムを削除する

#### Traversal ID の実装

1. `issues` テーブルに `traversal_ids` カラムを追加する
2. 新しい Issue を作成するとき、または Issue が別の名前空間に移動されるときに traversal ID を設定する機能を実装する
3. 既存のすべての Issue の traversal ID をバックフィルする
4. 次のリリースまで待機する（必須停止を伴う）
5. 必要なインデックスを作成する
6. traversal ID を使用するようにクエリパターンを更新する
