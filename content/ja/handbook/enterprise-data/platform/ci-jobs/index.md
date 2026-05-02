---
title: "データチーム CI ジョブ"
description: "GitLab データチーム CI ジョブ"
upstream_path: /handbook/enterprise-data/platform/ci-jobs/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T08:00:00Z"
translator: claude
stale: false
---

---

このページでは、[Data Tests](https://gitlab.com/gitlab-data/data-tests) プロジェクトと [Analytics](https://gitlab.com/gitlab-data/analytics) プロジェクトの両方においてマージリクエストでデータチームが使用する CI ジョブについて説明します。マージリクエストの開始と CI ジョブの使用方法のクイックスタートガイドは、「How We Work」にある[この実践ガイド](/handbook/enterprise-data/how-we-work/practical-guide/)を参照してください。

## パイプラインが失敗した場合の対処

- 週末が過ぎていた場合は、以前に実行した CLONE ステップを再実行してください。毎週日曜日（5:00AM UTC）に 14 日以上経過した古いパイプラインデータベースがすべて SnowFlake から[削除](https://gitlab.com/gitlab-data/analytics/-/blob/master/orchestration/drop_snowflake_objects.py)されます。
![ci-db-deletion-schema.png](/images/enterprise-data/platform/ci-jobs/ci-db-deletion-schema.png)
- master ブランチをマージします。dbt がパッケージを処理する方法により、最新ブランチで常に処理されるべきパッケージの失敗によってパイプラインが失敗することがあります。
- [モデル選択構文](https://docs.getdbt.com/reference/node-selection/syntax)を確認します。一般的には、変更しているモデルのファイル名を使用するだけで最も簡単です。
- それでも不明な場合や問題が発生している場合は、#data Slack チャンネルでアシスタンスを求めてください。

### CI パイプラインジョブで変数名が見つからない場合

この種のエラーはパイプラインで `KeyError: 'GITLAB_COM_CI_DB_USER'` のように表示されます。これは変数が CI/CD 設定の変数セクションで定義されていないことを意味します。解決するには、変数名を [CI/CD 設定](https://gitlab.com/gitlab-data/analytics/-/settings/ci_cd)（settings --> ci_cd --> variable）に追加し、変数の値も提供します。
**注意：** フラグをオフにすることで、変数が CI パイプラインからアクセス可能になります。
変数の値が正しくない場合も、上記リンクで更新できます。

## Analytics パイプライン

## ステージ

CI ジョブはステージ別にグループ化されています。

### ❄️ Snowflake

これらのジョブは [`.gitlab-ci.yml`](https://gitlab.com/gitlab-data/analytics/-/blob/master/.gitlab-ci.yml) で定義されています。CI クローンジョブによって作成されたすべての Snowflake オブジェクトは、手動で削除されるか[週次の Snowflake オブジェクトクリーンアップ](/handbook/enterprise-data/platform/ci-jobs/#what-to-do-if-a-pipeline-fails)によって削除されるまで存在し続けます。

#### `clone_prep_specific_schema`

prep データベースで利用可能なスキーマのクローンが必要な場合に実行します。`SCHEMA_NAME` 変数でクローンするスキーマを指定します。クローンがすでに存在する場合は何もしません。

#### `clone_prod_specific_schema`

prod データベースで利用可能なスキーマのクローンが必要な場合に実行します。`SCHEMA_NAME` 変数でクローンするスキーマを指定します。クローンがすでに存在する場合は何もしません。

#### `clone_prod`

dbt ジョブを実行できるように MR が開くと自動的に実行されます。このジョブの後続の実行はクローンが存在するかどうかを検証するだけなので高速です。これは `prod` および `prep` データベースの空のクローンです。

#### `clone_prod_real`

`prod` と `prep` データベースの実際のクローンを実行する必要がある場合に実行します。両データベースのフルクローンです。

#### `clone_raw_full`

extract、freshness、snapshot ジョブを実行する必要がある場合に実行します。このジョブの後続の実行はクローンが存在するかどうかを検証するだけなので高速です。

#### `clone_raw_postgres_pipeline`

postgres パイプラインまたはマニフェストファイルへの変更をテストするために raw の `tap_postgres` スキーマのクローンのみが必要な場合に実行します。raw クローンがすでに存在する場合は何もしません。

#### `clone_raw_sheetload`

sheetload への変更や追加をテストするために raw の `sheetload` スキーマのクローンのみが必要な場合に実行します。raw クローンがすでに存在する場合は何もしません。

#### `clone_raw_specific_schema`

変更や追加をテストするために他の raw スキーマのクローンが必要な場合に実行します。`SCHEMA_NAME` 変数でクローンする raw スキーマを指定します。raw クローンがすでに存在する場合は何もしません。

#### `clone_raw_by_schema`

RAW DB 全体をクローンします。SF コマンドを使用して DB をクローンしようとするときのタイムアウトの問題が原因で作成されました。

**注意：実行によって作成される DB のサイズのため、完全なプラットフォームテストを実行する必要があるときのみ実行してください。インフラのアップグレードにのみ適用されます。**

#### `force_clone_both`

raw、prod、prep を強制的にリフレッシュしたい場合に実行します。raw のフルクローンですが、`prep` と `prod` のシャロークローンです。

### 🚂 抽出

これらのジョブは [`extract-ci.yml`](https://gitlab.com/gitlab-data/analytics/-/blob/master/extract/extract-ci.yml) で定義されています。

#### `boneyard_sheetload`

新しい boneyard sheetload のロードをテストしたい場合に実行します。実際の `prod` と `prep` のクローンが利用可能である必要があります。

#### `sheetload`

新しい sheetload のロードをテストしたい場合に実行します。このジョブは `RAW` のクローンに対して実行されます。`clone_raw_specific_schema`（パラメーター `SCHEMA_NAME=SHEETLOAD`）ジョブが実行されている必要があります。

#### `🛢 gitlab_saas_pgp_test`

`extract/gitlab_saas_postgres_pipeline/manifests` 配下のマニフェストファイルに変更を加えるときにこのパイプラインを実行します。

**ステップ 1：** `clone_raw_postgres_pipeline` CI ジョブ（`❄️ Snowflake` ステージの一部）を実行して TAP_POSTGRES スキーマをクローンします。

**ステップ 2：** `gitlab_saas_pgp_test` CI ジョブを以下の変数で実行します：

- `MANIFEST_NAME`（必須）：拡張子なしのフルマニフェストファイル名（例：`el_gitlab_dotcom_db_manifest_main`）
- `TASK_INSTANCE`（オプション）：`advanced_metadata: true` の **SCD** マニフェストにのみ必要。任意の一意の値を使用（例：`my_task_instance_123`）

<details>
<summary>マニフェストファイルの一覧</summary>

| マニフェストファイル | タイプ |
|---|---|
| `el_gitlab_dotcom_db_manifest_ci.yaml` | GitLab DB |
| `el_gitlab_dotcom_db_manifest_ci_scd.yaml` | GitLab DB（SCD） |
| `el_gitlab_dotcom_db_manifest_main.yaml` | GitLab DB |
| `el_gitlab_dotcom_db_manifest_main_scd.yaml` | GitLab DB（SCD） |
| `el_gitlab_dotcom_db_manifest_secure.yaml` | GitLab DB |
| `el_gitlab_dotcom_db_manifest_secure_scd.yaml` | GitLab DB（SCD） |
| `el_saas_customers_scd_db_manifest.yaml` | Customers DB（SCD） |

</details>

### ⚙️ dbt 実行

これらのジョブは [`snowflake-dbt-ci.yml`](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/snowflake-dbt-ci.yml) で定義されています。

> DBT モデル変更 MR の一部として、変更が本番環境を壊さないことをテストするためにパイプラインジョブをトリガーする必要があります。これらのジョブをトリガーするには、この MR の下部にある「Pipelines」タブに移動し、適切なステージ（dbt_run または dbt_misc）をクリックします。

これらのジョブは `ci` ターゲットにスコープされています。このターゲットは Snowplow とバージョンデータセットのデータのサブセットを選択します。

dbt 実行ジョブではすべてのジョブアーティファクトが利用可能です。コンパイルされたコードと実行結果が含まれます。

これらのジョブはプライマリの `RAW` データベースに対して実行されます。

ほとんどの dbt 実行ジョブは、テストが必要な dbt モデルを指定する変数でパラメーター化できます。

変数 `SELECTION` は [dbt ドキュメントのモデル選択構文](https://docs.getdbt.com/reference/node-selection/syntax#section-specifying-models-to-run)の例のいずれかを表すプレースホルダーです。

`data-tests` プロジェクトのテストへの変更をテストする場合は、手動ジョブにブランチ名とともに `DATA_TEST_BRANCH` を渡すことができます。これにより data-tests パッケージの `packages.yml` のブランチが更新されます。これは `dbt test` を実行するすべてのジョブで機能します。

また、モデル選択の末尾に `--fail-fast` を追加することで、最初の失敗で dbt コールをすぐに終了できます。詳細については [dbt ドキュメント](https://docs.getdbt.com/reference/commands/run#failing-fast)を参照してください。

利用可能なセレクターは [selector.yml](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/selectors.yml) ファイルで確認できます。dbt build コマンドは選択の一部であるすべてのシード、スナップショット、モデル、テストを実行します。これは以下のシナリオで役立ちます：

- Airflow DAG の新しいセレクターのテスト
- dbt 環境のバージョンアップグレードのテスト

#### DBT CI ジョブのサイズ

`🏗️🏭build_changes` または `🎛️custom_invocation` 経由で dbt ジョブを実行する場合は、CI ジョブで使用する Snowflake ウェアハウスのサイズを選択できます。XS から始まり、L、最後に XL サイズのウェアハウスを選択できます。CI ジョブを開始するときに `WAREHOUSE` 変数を設定することで行えます：

- `WAREHOUSE` を `DEV_XS` に設定すると `XS` ウェアハウスが使用されます。
- `WAREHOUSE` を `DEV_L` に設定すると `L` ウェアハウスが使用されます。
- `WAREHOUSE` を `DEV_XL` に設定すると `XL` ウェアハウスが使用されます。

大きいウェアハウスを使用するとより短い実行時間になりますが（大きなモデルのタイムアウトを防ぎます）、ウェアハウスが 1 分未満の実行の場合 GitLab のコストも高くなります。
ローカル開発の実行時間とモデル選択を参考にして使用するウェアハウスを特定してください。
不確かな場合または合理的な実行時間の見積もりができない場合は、`L` ウェアハウスから始めてください。
また、モデルのテストと本番環境での実行方法の間で一致を見つけることも重要です。
もちろん、複雑な変換や大量のデータ処理が必要な場合など、大きいウェアハウスを使用する正当な理由がある場合もあります。
しかし、モデルも必ず確認してください。モデルをより効率的に実行できるよう調整できる可能性があります。
大きいウェアハウスでテストを実行すると**この** CI ジョブのコストが増加するだけでなく、本番環境でも非効率に実行される可能性があり、長期的にはるかに大きな影響をもたらす可能性があります。

#### `🏗️🏭build_changes`

このジョブはユーザーの設定なしにほとんどの dbt 変更で動作するよう設計されています。変更されたすべての新しいモデル、変更されたモデル、および変更されたモデルの間にあるすべてのモデルをクローン、実行、テストします。また、変更されたマクロに依存するモデルも特定し、ビルドプロセスに含めることで、影響を受けるすべてのコンポーネントの包括的なテストを確保します。

選択に含まれないテーブルについては、[dbt ドキュメント](https://dbt.gitlabdata.com/)の最新バージョンに従ってライブデータベース（`PROD`、`PREP`、`RAW`）を参照します。ジョブが失敗する場合、コード自体の問題を示しており、変更を加える開発者が対処する必要があります。

変更が このジョブのデフォルト選択から外れる場合は、以下の方法で設定できます：

- `WAREHOUSE`：デフォルトは `DEV_XL` ですが `DEV_XS` と `DEV_L` も受け付けます。
- `CONTIGUOUS`：デフォルトは `True` ですが、変更されたモデルのみを実行するには `False` を受け付けます。`True` の場合は `DOWNSTREAM` や `EXCLUDE` などの他の設定は無視されます。
- `SELECTION`：デフォルトは変更された SQL または CSV ファイルのリストですが、有効な dbt 選択ステートメントを受け付けます。他のモデル選択を上書きします。
- `DOWNSTREAM`：デフォルトは `None` ですが、`plus` と `n-plus` 演算子を受け付けます。`CONTIGUOUS` が `True`（デフォルト）の場合 `DOWNSTREAM` はバイパスされます。そのため `DOWNSTREAM` を使用したい場合は `CONTIGUOUS` を手動で `False` に設定する必要があります。`SELECTION` を上書きする場合 `DOWNSTREAM` は影響しません。各演算子の詳細については[ドキュメント](https://docs.getdbt.com/reference/node-selection/graph-operators)を参照してください。
- `FAIL_FAST`：デフォルトは `True` ですが、テストが失敗またはモデルが構築できない場合でも実行を継続するには `False` を受け付けます。詳細は[ドキュメント](https://docs.getdbt.com/reference/global-configs/failing-fast)を参照してください。
- `EXCLUDE`：デフォルトは `None` ですが、任意の dbt ノード選択を受け付けます。`CONTIGUOUS` が `True` の場合 `EXCLUDE` はバイパスされます。詳細は[ドキュメント](https://docs.getdbt.com/reference/node-selection/exclude)を参照してください。
- `FULL_REFRESH`：デフォルトは `False` ですが、インクリメンタル状態で実行されるテーブルを再クローンして再構築するには `True` を受け付けます。詳細は[ドキュメント](https://docs.getdbt.com/reference/commands/run#refresh-incremental-models)を参照してください。
- `VARS`：デフォルトは `None` ですが、引用符付きキーバリューペアのカンマ区切りリストを受け付けます。例：`"key1":"value1","key2":"value2"`。
- `RAW_DB`：デフォルトは `Live` ですが `Dev` を受け付けます。`Dev` を選択すると、ジョブはライブ `RAW` データベースのブランチ固有バージョンを使用し、明示的にロードされたデータのみが存在します。同じブランチで新しい extract に基づいて構築されるモデルをテストする際に必要です。

このジョブをマージリクエストパイプラインで実行すると、プロジェクトボットからのコメントとしてマージリクエストに直接追加される出力レポートが生成されます。このレポートはジョブの結果を要約し、合計実行時間、モデル数、実行されたモデル、1 時間以上実行されたモデルを表示します。このレポートはマージリクエストに <span class="inline-block rounded px-2 py-0.5 text-xs font-medium" style="background-color:#6b7280;color:#ffffff">Supress Results Report</span> ラベルを追加することで抑制できます。

<details markdown="1">
<summary>クロスウォーク</summary>

|変更の例 | 以前の CI プロセス | 新しい CI プロセス|
| --- | --- | --- |
| 小さなテーブルやビューにカラムを追加 | <ol><li>🏗️🔆run_changed_️clone_model_dbt_select</li><ul><li>ANCESTOR_TYPE : +</li></ul><li>🏗🛺️run_changed_models_sql</li></ol> | <ol><li>🏗️🏭build_changes</li><ul><li>WAREHOUSE : DEV_XS</li></ul></ol> |
| カラムの説明を更新 | <ol><li>📚✏️generate_dbt_docs</li></ol> | <ol><li>📚✏️generate_dbt_docs</li></ol> |
| 小さな dbt スナップショットを更新または作成 | <ol><li>🥩clone_raw_full</li><li>🐭🥩specify_raw_model</li><ul><li>DBT_MODELS : snapshot_name</li></ul></ol> | <ol><li>🏗️🏭build_changes</li><ul><li>WAREHOUSE : DEV_XS</li></ul></ol> |
| シードを追加または更新 | <ol><li>🌱specify_csv_seed</li><ul><li>DBT_MODELS : seed_name</li></ul></ol> | <ol><li>🏗️🏭build_changes</li><ul><li>WAREHOUSE : DEV_XS</li><li>FULL_REFRESH : True</li></ul></ol> |
| モデルを更新してダウンストリームへの影響をテスト | <ol><li>🏗️🔆run_changed_️clone_model_dbt_select</li><ul><li>DEPENDANT_TYPE : +</li><li>ANCESTOR_TYPE: +1</li></ul><li>🏗🛺️run_changed_models_sql</li><ul><li>DEPENDANT_TYPE : +</li></ul></ol> | <ol><li>🏗️🏭build_changes</li><ul><li>WAREHOUSE : DEV_XS</li><li>DOWNSTREAM : +</li></ul></ol> |
| モデルを更新して特定のモデルをテスト | <ol><li>🔆⚡️clone_model_dbt_select</li><ul><li>DBT_MODELS : 1+specific_models+1</li></ul><li>🐭specify_model</li><ul><li>DBT_MODELS : specific_models+1</li></ul></ol> | <ol><li>🏗️🏭build_changes</li><ul><li>WAREHOUSE : DEV_XS</li><li>SELECTION : specific_models+1</li></ul></ol> |
| フルリフレッシュなしでインクリメンタルモデルを変更 | <ol><li>🏗️🔆run_changed_️clone_model_dbt_select</li><ul><li>ANCESTOR_TYPE : +</li></ul><li>🏗️🛺🐘run_changed_models_sql_xl</li><ul><li>REFRESH : ' ' </li></ul></ol>| <ol><li>🏗️🏭build_changes</li></ul></ol> |
| フルリフレッシュありでインクリメンタルモデルを変更 | <ol><li>🏗️🔆run_changed_️clone_model_dbt_select</li><ul><li>ANCESTOR_TYPE : +</li></ul><li>🏗️🛺🐘run_changed_models_sql_xl</li></ol> | <ol><li>🏗️🏭build_changes</li><ul><li>FULL_REFRESH : True</li></ul></ol>|
| モデルを更新してダウンストリームへの影響をテストし特定のモデルをスキップ | <ol><li>🏗️🔆run_changed_️clone_model_dbt_select</li><ul><li>DEPENDANT_TYPE : +</li><li>ANCESTOR_TYPE: +1</li></ul><li>🐘specify_xl_model</li><ul><li>DBT_MODELS : specific_model+ --exclude other_model</li></ul></ol> | <ol><li>🏗️🏭build_changes</li><ul><li>EXCLUDE : other_model</li><li>DOWNSTREAM : +</li></ul></ol> |
| 変数が必要なモデルを変更 | NA | <ol><li>🏗️🏭build_changes</li><ul><li>VARS : "key1":"value1","key2":"value2"</li></ul></ol> |
| 変更してすべてのエラーを確認 | <ol><li>🏗️🔆run_changed_️clone_model_dbt_select</li><ul><li>ANCESTOR_TYPE : +</li></ul><li>🏗🛺️run_changed_models_sql</li></ol> | <ol><li>🏗️🏭build_changes</li><ul><li>WAREHOUSE : DEV_XS</li><li>FAIL_FAST : False</li></ul></ol> |
| セレクターを使用または変更 | <ol><li>➕🐘🏭⛏specify_selector_build_xl</li><ul><li>DBT_SELECTOR : customers_source_models</li></ul></ol> | <ol><li>🎛️custom_invocation</li><ul><li>STATEMENT : build --selector customers_source_models</li></ul></ol> |
| 同じ MR で新しい Sheetload 上に構築されたモデルを追加 | <ol><li>❄️ Snowflake: clone_raw_sheetload</li><li>Extract: sheetload</li><li>specify_raw_model</li><ul><li>DBT_MODELS : sheetload_file_name_source</li></ul></ol> | <ol><li>❄️ Snowflake: clone_raw_sheetload</li><li>Extract: sheetload</li><li>🏗️🏭build_changes</li><ul><li>RAW_DB : Dev</li></ul></ol> |

</details>

#### `🎛️custom_invocation`

このジョブは他のあらかじめ設定されたジョブでは解決できないエッジケースに対応するために設計されています。ジョブは選択されたウェアハウスを使用して提供された dbt コマンドを処理します。`defer` コマンドの場合、参照 `manifest.json` は `--state reference_state` を使用して参照できます。

このジョブは以下の方法で設定できます：

- `WAREHOUSE`：デフォルトなし。`DEV_XL`、`DEV_L`、または `DEV_XS` の値を提供する必要があります。
- `STATEMENT`：デフォルトなし。完全な `dbt` ステートメントを提供する必要があります。例：`run --select +dim_date`。
- `RAW_DB`：デフォルトは `Live` ですが `Dev` を受け付けます。`Dev` を選択すると、ジョブはライブ `RAW` データベースのブランチ固有バージョンを使用し、明示的にロードされたデータのみが存在します。同じブランチで新しい extract に基づいて構築されるモデルをテストする際に必要です。

#### `📚📝generate_dbt_docs`

`transform/snowflake-dbt/` フォルダ配下の `*.md` または `.yml` ファイルが変更された場合に手動でこのパイプラインを実行する必要があります。このパイプラインの目的は `dbt` ドキュメントの変更を確認・検証することです。デフォルトでは、ドキュメントの作成方法に対するチェックはなく、エラーは許可されて検証されません。このパイプラインにはパラメーターはありません。

### 🛠 dbt Misc

これらのジョブは [`snowflake-dbt-ci.yml`](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/snowflake-dbt-ci.yml) で定義されています。

#### `🧠all_tests`

すべてのテストを実行します

- 注意：dbt_run ステージのジョブを実行した場合はテストが含まれているため、このジョブを実行する必要はありません。

#### `💾data_tests`

データテストのみを実行します

#### `🔍ds_exposure_dependencies_query`

dbt プロジェクトの SQL ファイルが更新されると自動的に実行されます。変更されたモデルがデータサイエンスの露出に関連付けられているかどうかを確認し、関連付けられている場合はジョブを失敗させてユーザーに通知します。その後、MR 作成者はデータサイエンスチームに通知し、潜在的な影響を確認する機会を与える責任があります。

これらの更新を早期に検出することで、ジョブはデータサイエンスワークフローの円滑な維持と、dbt モデル変更による意図しない混乱の防止に役立ちます。

#### `🔍tableau_direct_dependencies_query`

このジョブは自動的に実行され、`.sql` ファイルが変更された場合にのみ表示されます。最も単純な形では、現在変更されているモデルが Tableau のビュー、Tableau データ抽出、および/または Tableau フローに**直接**接続されているかどうかを確認します。接続されている場合、ジョブは失敗し、関連する依存関係を確認するよう通知します。クエリされない場合、ジョブは成功します。

現在のジョブの注意事項：

- どの Tableau ワークブックを確認すべきかは通知されません
- 間接的に接続されたダウンストリーム依存関係は通知されません。この機能はこのジョブの今後のイテレーションの一部となります。
- dbt エイリアスを使用するテーブルの依存関係は検出されません。[モデルでのエイリアス使用は推奨していません](/handbook/enterprise-data/platform/dbt-guide/#general)が、エイリアスを使用しているレガシーテーブルがあるため、エイリアスされたテーブルを扱う際は注意が必要です。ダウンストリーム依存関係はエイリアスを使用して MonteCarlo で手動確認できます。
- Tableau に変更（ダッシュボードへの依存関係の追加・削除など）がある場合、その変更がリネージに反映されるまで MonteCarlo で最大 8 日かかる場合があります

##### 説明

このセクションでは `tableau_direct_dependencies_query` がどのように機能するかを説明します。

`git diff origin/$CI_MERGE_REQUEST_TARGET_BRANCH_NAME...HEAD --name-only | grep -iEo "(.*)\.sql" | sed -E 's/\.sql//' | awk -F '/' '{print tolower($NF)}' | sort | uniq`

これにより master ブランチ（ターゲットブランチ）から現在のコミット（HEAD）までに変更されたファイルのリストを取得します。次に SQL ファイルのみを検出（grep）し、`.sql` を空の文字列に置換（sed）します。`awk` を使用して、スラッシュ（/）をフィールドセパレーターとして使用してファイルの各行の最後のカラムを小文字で出力します。出力は directory/directory/filename で、ほとんどの dbt モデルがそのファイル名のテーブルに書き込むと仮定しているため、期待通りに機能します。その後、結果をソートし、ユニークなセットを取得し、ダウンストリーム依存関係を確認するスクリプトで使用されます。

`orchestration/tableau_dependency_query/src/tableau_query.py`

データ観測可能性ツールでもある [Monte Carlo](/handbook/enterprise-data/platform/monte-carlo/) を活用してダウンストリーム依存関係を検出します。[Monte Carlo API](https://apidocs.getmontecarlo.com/) を使用して、[`GetTableLineage` GraphQL エンドポイント](https://apidocs.getmontecarlo.com/#query-getTableLineage)を使用して `tableau-view`、`tableau-published-datasource-live`、`tableau-published-datasource-extract` タイプの直接接続されたダウンストリームノードを検出します。

モデルの依存関係が見つからない場合、CI ジョブのログに `INFO:root:No dependencies returned for model <model_name>` という出力が表示され、ジョブは成功としてマークされます。

モデルの依存関係が見つかった場合、`ValueError: Check these models before proceeding!` というバリューエラーでジョブが失敗します。ジョブのログには、指定のモデルに対して見つかった直接依存関係の数、Tableau オブジェクトのタイプ、Tableau リソース名、Monte Carlo アセットリンクが以下の形式で含まれます：

```bash
Found <number of tableau dependencies> downstream dependencies in Tableau for the model <model name>
INFO:root: <tableau resource type> : <name of tableau resource> - : <monte_carlo_connection_asset_url>
ValueError: Check these models before proceeding!
ERROR: Job failed: command terminated with exit code 1
```

より詳しい実装の詳細は[こちらの Issue](https://gitlab.com/gitlab-data/analytics/-/issues/19885)をご覧ください。

#### `🛃dbt_sqlfluff`

`transform/snowflake-dbt/models` ディレクトリ内の変更されたすべての `sql` ファイルで SQLFluff リンターを実行します。現在は手動で実行され、失敗が許可されていますが、dbt モデルを開発している人は出力を確認してリンターの仕様に従ってフォーマットすることをお勧めします。このフォーマットが標準になります。

#### `🚫safe_model_script`

すべての [SAFE](/handbook/legal/safe-framework/) データが適切なスキーマに保存されていることを確認するために、[MNPI データを持つソースモデル](/handbook/enterprise-data/how-we-work/new-data-source/#mnpi-data)のダウンストリームにあるすべてのモデルは、例外タグを持つか `PROD` の制限スキーマにある必要があります。この CI ジョブはこの状態への準拠を確認します。

この[動画](https://www.youtube.com/watch?v=ICOuerPeAUU)は Snowflake での SAFE データプログラムの実装の概要を提供します。

<details><summary>safe_model_script がどのように機能するか - 内部動作</summary>

CI ジョブは `snowflake-dbt-ci.yml` で設定されており、関連する行は以下のとおりです：

```sh
- dbt --quiet ls $CI_PROFILE_TARGET --models tag:mnpi+
  --exclude
    tag:mnpi_exception
    config.schema:restricted_safe_common_mapping
    config.schema:some_other_restricted_schema_etc
    ...
  --output json > safe_models.json
- python3 safe_model_check.py
```

上記には 2 つの部分があります：`dbt ls` コマンド（メイン部分）と Python スクリプトです。

`dbt ls` は以下を実行します：

- まず mnpi でタグ付けされたすべてのモデルとすべての**ダウンストリーム**モデルを返します。
- 次に、`--exclude` 引数で*有効な*モデルを除外します。上記のステップのモデルは以下のいずれかの条件を満たす場合に除外されます：
  - `mnpi_exception` でタグ付けされている
  - `restricted` スキーマ内にある
- 残ったすべてのモデルは、制限スキーマに配置するか `mnpi_exception` でタグ付けして修正する必要があります

第 2 部では、Python スクリプトが上記の `dbt ls` コマンドの出力を読み込みます。出力が空でない場合は、失敗したモデルのリストとともに例外が発生します。

</details>

##### スクリプト失敗の対処方法

失敗は 2 つのことのいずれかを示しています：

- モデルに MNPI データがある（直接またはダウンストリームモデルとして）
  - 修正：モデルを制限スキーマに移動します
- モデルに MNPI データはないが、MNPI データを持つモデルのダウンストリームにある
  - 修正：モデルに `mnpi_exception` タグを追加します

##### mnpi_exception タグの使用時期の決定方法

MNPI 例外タグ `mnpi_exception` は、モデルが MNPI データを含まない場合にモデルに追加できます。MNPI データとは、有料ライセンスユーザー数、ARR、Net_ARR、収益、純保持率、費用などの情報を含むカラムです。基本的に、GitLab の公開された財務メトリクスを傾向ベースで把握でき、投資判断にとって重要な情報をもたらす財務データです。データモデルに財務データが表面化されると、保守的なアプローチとして制限スキーマにモデルを配置します。この場合、制限スキーマ内にあるためタグは不要です。

#### `🔍macro_name_check`

snowflake-dbt/macros フォルダで変更を加えると自動的に実行され、新しく作成されたマクロが正しい名前形式に一致するかどうかを確認します。

#### `🗂schema_tests`

スキーマテストのみを実行します

#### `📸snapshots`

スナップショットを実行します。このジョブは `RAW` のクローンに対して実行されます。`clone_raw_full` ジョブが実行されている必要があります。

#### `📝specify_tests`

変数 `DBT_MODELS` で指定されたモデルテストを実行します

#### `🌱manual_seed`

フルシード操作を実行します。dbt シード自体への変更で作業しているときに結果を確認するために使用します。

#### `run_grants`

ブランチの `prep` と `prod` のコピーまたはクローンへのアクセスをあなたのロールまたはビジネスパートナーのロールに付与したい場合に実行します。`GRANT_TO_ROLES` CI 変数を使用してアクセスを付与する Snowflake ロール（[roles.yml](https://gitlab.com/gitlab-data/analytics/-/blob/master/permissions/snowflake/roles.yml) を参照）を指定します。単一のロール、または `role1 role2` のようにスペース区切りで複数を渡すことができます。このジョブはコミットで変更されたモデルをチェックし、提出されたロールが `PREP` と `PROD` で適切なアクセスを持っているかどうかを検証して、クローンでのアクセスを付与します。将来の付与は作成されないため、**適切なオブジェクト付与を確保したい場合は、このジョブを実行する前にクローンに関連するすべてのオブジェクトが構築されている必要があります。**

提出されたロールが `PREP` と `PROD` で適切なアクセスを持っていない場合、ジョブのログに次のエントリが表示されます：

`INFO:root::rotating_light: upstream objects in OBJECT_NAME did not match upstream grants for ROLE :rotating_light:`

run grants ジョブが `PREP` と `PROD` の既存の付与を比較できない断続的な問題があります。Snowflake で既存の付与を照会するためのソースが派生状態を持つテーブルであり、断続的に付与が欠落している場合があるためです。

この場合、提出されたロールが `PREP` と `PROD` で適切なアクセスを持っているかどうかを確認してください。問題が続く場合は再実行（1 時間程度かかることがあります）で修正できるはずです。```

**注意：** `run_grants` ジョブは開発プロセス中に複数回実行できます。最初の実行後に新しいモデルが作成された場合、ジョブを再実行してこれらの新しいオブジェクトにも付与が適用されることを確認できます。

### 🐍 Python

これらのジョブは [`.gitlab-ci.yml`](https://gitlab.com/gitlab-data/analytics/-/blob/master/.gitlab-ci.yml) で定義されています。

`.py` ファイルが変更された場合にのみ表示される複数のジョブがあります。これらはすべて `.py` ファイルが存在する新しいコミットごとに自動的に実行されます。

自動実行されるパイプライン：

#### `⚫python_black`

[`black`](https://github.com/psf/black) ライブラリを使用して Python コードのフォーマットを処理します。パイプラインは `/analytics` リポジトリ全体（すべての `*.py` ファイル）を確認します。

#### `✏️python_mypy`

[`mypy`](https://mypy.readthedocs.io/en/stable/) ライブラリを使用してコードの正確性を確認します。パイプラインは `/analytics` リポジトリ全体（すべての `*.py` ファイル）を確認します。

#### `🗒️python_pylint`

[`pylint`](https://pylint.pycqa.org/en/latest/) ライブラリを使用して Python ファイルのコードリンティングを確認します。パイプラインは `/analytics` リポジトリ内の**変更された** Python ファイル（`*.py`）のみを確認します。

#### `🌽python_flake8`

[`flake8`](https://flake8.pycqa.org/en/latest/) ライブラリを使用して Python ファイルのコードリンティングを確認します。パイプラインは `/analytics` リポジトリ内の**変更された** Python ファイル（`*.py`）のみを確認します。

#### `🦅python_vulture`

[`vulture`](https://pypi.org/project/vulture/0.5/) ライブラリを使用して Python ファイルの未使用コードを確認します。`Vulture` はコード内の未使用のクラス、関数、変数を見つけます。これによりプログラムのクリーンアップとエラーの発見が助けられます。
パイプラインは `/analytics` リポジトリ内の**変更された** Python ファイル（`*.py`）のみを確認します。

#### `🤔python_complexity`

[`xenon`](https://pypi.org/project/xenon/) ライブラリを使用して Python ファイルのコード複雑度を確認します。パイプラインは `/analytics` リポジトリ全体（すべての `*.py` ファイル）を確認します。

#### `✅python_pytest`

[`pytest`](https://docs.pytest.org/en/7.1.x/contents.html) ライブラリとテストケースを実行してコード品質を確保します。パイプラインは `/analytics` リポジトリ全体（`pytest` ライブラリを含むすべての `*.py` ファイル）のすべてのテストファイルを確認します。

手動で実行するパイプライン：

#### `🧊⚙permifrost_run`

[Permifrost](https://gitlab.com/gitlab-data/permifrost/) のドライランを実行する手動ジョブ。

#### `🧊 permifrost_spec_test`

`permissions/snowflake/roles.yml` へのすべての変更がマージされる前に少なくとも 1 回実行する必要があります。完了まで約 30 分かかります。

[Permifrost](https://gitlab.com/gitlab-data/permifrost/) の `spec-test` CLI を実行して、変更がデータベースで正しく設定されていることを検証します。

#### `📁 yaml_validation`

`permissions/snowflake/roles.yml` が変更された場合にトリガーされます。YAML が正しくフォーマットされていることを検証します。

#### `snowflake_provisioning_snowflake_users`

`snowflake_users.yml` への変更に基づいて、指定されたユーザーとロールを Snowflake に直接追加・削除します。

##### クイックサマリー

- Snowflake に新しいユーザー/ロールを追加するには、新しいユーザー名を [`snowflake_users.yml`](https://gitlab.com/gitlab-data/analytics/-/blob/master/permissions/snowflake/snowflake_users.yml?ref_type=heads) に追加します。
- 新しいユーザー用の開発データベースを作成するには、CI 変数 `IS_DEV_DB: True` を追加します。

<details><summary>詳細説明</summary>

##### 詳細説明

内部では、この CI ジョブは Python スクリプト [`orchestration/snowflake_provisioning_automation/provision_users/provision_user.py`](https://gitlab.com/gitlab-data/analytics/-/blob/master/orchestration/snowflake_provisioning_automation/provision_users/provision_users.py?ref_type=heads) を呼び出しています。

CI ジョブの引数のフルリスト（すべて**オプション**）：

1. `IS_TEST_RUN`：
    - デフォルトは `False` ですが `True` を受け付けます。
    - True の場合、`GRANT` SQL 文を**印刷する**だけで実行しません。
1. `IS_DEV_DB`：
    - デフォルトは `False` ですが `True` を受け付けます。
    - True の場合、`usernames_to_add` の各ユーザー名の開発データベースを作成します。

注意：セキュリティリスクを最小化するため、このジョブでは `USERS_TO_ADD/USERS_TO_REMOVE` オプション引数は利用できません。
</details>

#### `snowflake_provisioning_roles_yaml`

`snowflake_users.yml` への変更に基づいて `roles.yml` を自動的に更新します。

##### クイックサマリー

- `roles.yml` に新しいユーザーエントリを追加するには、新しいユーザー名を [`snowflake_users.yml`](https://gitlab.com/gitlab-data/analytics/-/blob/master/permissions/snowflake/snowflake_users.yml?ref_type=heads) に追加します。
- 同様に、`roles.yml` からユーザーエントリを削除するには、[`snowflake_users.yml`](https://gitlab.com/gitlab-data/analytics/-/blob/master/permissions/snowflake/snowflake_users.yml?ref_type=heads) からユーザー名を削除します。
- CI ジョブにオプション引数が渡されない場合、ハンドブックの [roles.yml の自動化：共通テンプレート](/handbook/enterprise-data/platform/#common-custom-templates) セクションで説明されているデフォルト引数で実行されます。

<details><summary>詳細説明</summary>

##### 詳細説明

内部では、この CI ジョブは Python スクリプト [`orchestration/snowflake_provisioning_automation/update_roles_yaml/update_roles_yaml.py`](https://gitlab.com/gitlab-data/analytics/-/blob/master/orchestration/snowflake_provisioning_automation/update_roles_yaml/update_roles_yaml.py?ref_type=heads) を呼び出しています。

CI ジョブの引数のフルリスト（すべて**オプション**）：

1. `IS_TEST_RUN`：
    - デフォルトは `False` ですが `True` を受け付けます。
    - True の場合、`roles.yml` に追加される値を**印刷するだけ**です
1. `USERS_TO_ADD`：
    - デフォルトは MR 内の [`snowflake_users.yml`](https://gitlab.com/gitlab-data/analytics/-/blob/master/permissions/snowflake/snowflake_users.yml?ref_type=heads) に**追加された**ユーザー名。
    - オーバーライドするには、`USERS_TO_ADD: username_to_add1 username_to_add2` のような文字列値を渡します
1. `USERS_TO_REMOVE`：
    - デフォルトは MR 内の [`snowflake_users.yml`](https://gitlab.com/gitlab-data/analytics/-/blob/master/permissions/snowflake/snowflake_users.yml?ref_type=heads) から**削除された**ユーザー名。
    - オーバーライドするには、`USERS_TO_REMOVE: username_to_remove1 username_to_remove2` のような文字列値を渡します
1. `DATABASES_TEMPLATE`：
    - デフォルトは None ですが、任意の JSON 文字列を受け付けます。詳細/例については、ハンドブックの[「データベース」セクション](/handbook/enterprise-data/platform/#databases)を参照してください。
1. `ROLES_TEMPLATE`：
    - デフォルトは 'SNOWFLAKE_ANALYST' ロールと 'DEV_XS' ウェアハウスですが、任意の JSON 文字列を受け付けます。詳細/例については、ハンドブックの[「ロール」セクション](/handbook/enterprise-data/platform/#roles)を参照してください。
1. `USERS_TEMPLATE`：
    - デフォルトは標準のユーザーエントリです。詳細/例については、ハンドブックの[「ユーザー」セクション](/handbook/enterprise-data/platform/#users)を参照してください。この値は任意の JSON 文字列でオーバーライドできますが、通常は必要ありません。

注意：`USERS_TO_REMOVE` 引数は使用できません。非アクティブなユーザーはすべて別の Airflow ジョブを介して Snowflake から削除されるためです。
</details>

#### 📈namespace_metrics_check

ファイル [usage_ping_namespace_queries.json](https://gitlab.com/gitlab-data/analytics/-/blob/master/extract/saas_usage_ping/usage_ping_namespace_queries.json) が変更されたときにのみ実行され、すべてのルールが満たされていることを確認します。パイプラインは自動的に実行されます。

### 🛑 Snowflake 停止

これらのジョブは [`.gitlab-ci.yml`](https://gitlab.com/gitlab-data/analytics/-/blob/master/.gitlab-ci.yml) で定義されています。

#### `clone_stop`

MR がマージまたはクローズされると自動的に実行されます。通常、手動で実行する必要はありませんが、MR 開発データベースの削除にも使用できます。完了すると、新しいパイプラインを開始するか `clone_prod` ジョブを再実行すると空のデータベースが再クローンされ、最初から始めることができます

## データテストパイプライン

以下はすべてリポジトリで提供される変更を使用して Prod DB に対して実行されます。以下を実行するためにクローニングは不要です。

### `🧠 all_tests_prod`

analytics と data tests リポジトリのすべてのテストを実行します。

### `💾 data_tests_prod`

analytics と data tests リポジトリのすべてのデータテストを実行します。

### `schema_tests_prod`

analytics と data tests リポジトリのすべてのスキーマテストを実行します。

### `specify_tests_prod`

変数 `DBT_MODELS` で指定されたモデルテストを実行します
