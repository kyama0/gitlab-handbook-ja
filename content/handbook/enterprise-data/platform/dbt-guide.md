---
title: "dbtガイド"
description: "data build tool (dbt) ガイド"
math: true
upstream_path: /handbook/enterprise-data/platform/dbt-guide/
upstream_sha: 228e83810bd79bddf58ab0b0b518b1d52bd74fb7
translated_at: "2026-06-05T21:08:33Z"
translator: claude
stale: false
lastmod: "2026-06-05T08:41:51-06:00"
---

## クイックリンク

- [プライマリプロジェクト](https://gitlab.com/gitlab-data/analytics/)
- [dbt docs](https://dbt.gitlabdata.com/)

## 概要と目的

dbtは[data build tool](https://www.getdbt.com/)の略で、データウェアハウスのデータ変換を管理するための[オープンソースプロジェクト](https://github.com/dbt-labs/dbt-core)です。データがウェアハウスに読み込まれた後、dbtはアナリティクス推進に必要なすべてのデータ変換を管理できます。また、テストとドキュメントが組み込まれているため、生成・分析しているテーブルに高い信頼性を持つことができます。

dbtとは何かについての概要は以下のリンクが参考になります。

- [dbtとは正確に何か？](https://www.getdbt.com/blog/what-exactly-is-dbt) - ツールを理解するための技術的でない概要
- [dbtとは何か？](https://docs.getdbt.com/docs/introduction) - ドキュメントから直接得られるやや技術的な説明

なぜdbtを使うのかについては、いくつかの理由があります。

第一に、活発なコミュニティを持つオープンソースツールであることです。オープンソースツールを選ぶことで、大きなデータコミュニティとコラボレーションし、独自のソリューションよりも速く問題を解決できます。

第二に、バージョン管理を念頭に置いて作られていることです。GitLabにとっては、会社の構築と運営にこの製品を使用しているため、これは不可欠です。

第三に、アナリストの言語であるSQLで話せることです。SQLは多くの人の仕事に不可欠になっているため、貢献できる人の数が増えます。

最後に、最初から[テストとドキュメント](https://docs.getdbt.com/docs/build/sql-models#testing-and-documenting-models)を統合することでチームがより速く動けるようになります。

dbtの基本の詳細については、[データアナリストオンボーディングIssueテンプレート](https://gitlab.com/gitlab-data/analytics/blob/master/.gitlab/issue_templates/Team%3A%20Data%20Onboarding.md)を参照してください。

データ変換にdbtパッケージを使用することもあります。[パッケージ管理](https://docs.getdbt.com/docs/build/packages)はdbtに組み込まれています。利用可能なパッケージの全リストは[dbt Hubサイト](https://hub.getdbt.com)にあります。

## dbtの実行

dbtを使用する場合は、[dbtドキュメントに優れたチュートリアル](https://docs.getdbt.com/docs/get-started-dbt)があります。JaffleShopというフィクションのビジネスのデータに取り組むセットアップについて説明しています。

dbtを使用してデータチームのプロジェクトに貢献する場合は、Snowflakeインスタンスへのアクセスが必要です。これは[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)で行えます。

### ローカル環境

GitLabチームメンバーがdbtプロジェクトに貢献するための「ローカル」開発環境を整備するために、[make](https://www.gnu.org/software/make/manual/make.html)レシピを使用したユーザー専用の開発データベースと[仮想環境](/handbook/enterprise-data/platform/dbt-guide/#venv-workflow)を使用します。

#### 「ローカル」ユーザー専用開発データベース

チームメンバーが必要とする場合、`_PREP`と`_PROD`サフィックスを持つSnowflakeユーザーに対応するローカル開発データベースを作成します。これらはSnowflakeの`PREP`と`PROD`データベースに対応しています。ローカル環境内で実行した場合、メインのdbtプロジェクトはこれらを対象とするため、貢献者はdbtプロジェクトへの変更を開発・テストできます。dbtプロジェクト内の開発プロセスの詳細は[dbt変更ワークフローページ](/handbook/enterprise-data/how-we-work/dbt-change-workflow/)を参照してください。

これらの開発データベース内に構築されたデータは、ローカル開発のためにのみ使用されるため、エフェメラルと見なす必要があります。dbtの最適な使用と適切なセキュリティとコンプライアンスを確保するために、これらのデータベースは所有ユーザーが定期的にクリーニングする必要があります。[このRunbook](https://gitlab.com/gitlab-data/runbooks/-/blob/main/Snowflake/snowflake_dev_clean_up.md)を使用してそのプロセスを迅速かつ簡単に行えます。各開発サイクルの終わりまたは始まりに実行することをお勧めします。さらに、データ保持ポリシーと手順への準拠を確保するために、変更なしに**80日**経過した後、開発環境のすべてのテーブルを自動的に削除します。この保持期間はdbtプロジェクトの`dev_db_object_expiration`変数で設定され、テーブルは毎週末に削除されます。

注意: 開発データベースは、対応するチームメンバーがSnowflakeへのアクセスが削除されると同時に削除されます（オフボーディングや[非アクティブな使用](/handbook/enterprise-data/data-governance/data-management/#snowflake-1)の場合）。開発データベースの[バックアップ](/handbook/enterprise-data/platform/#backups)プロセスはありません。

#### 設定

- Snowflakeインスタンスと自分のSnowflakeユーザー用の専用開発データベースへのアクセスがあることを確認します
- [Make](https://en.wikipedia.org/wiki/Make_(software))がインストールされていることを確認します（新しいMacとXCodeにはインストール済みのはずです）
- ホームディレクトリに`.dbt`という名前のフォルダーを作成します
- `~/.dbt/`フォルダー内に、この[サンプルプロファイル](https://gitlab.com/gitlab-data/analytics/blob/master/admin/sample_profiles.yml)のような`profiles.yml`ファイルが必要です
- 最小のウェアハウスを環境変数として保存します。dbtジョブはウェアハウスを識別するための変数名として`SNOWFLAKE_TRANSFORM_WAREHOUSE`を使用します。環境変数は次のように`.bashrc`または`.zshrc`ファイルで設定できます:
  - `export SNOWFLAKE_TRANSFORM_WAREHOUSE="DEV_XS"`
  - より多くのコンピュートが必要な場合、この変数は実行時に上書きできます。[次のセクション](/handbook/enterprise-data/platform/dbt-guide/#choosing-the-right-snowflake-warehouse-when-running-dbt)でその方法を説明します。
- [analyticsプロジェクト](https://gitlab.com/gitlab-data/analytics/)をクローンします
- Linuxで実行する場合:
  - [Rancher Desktopがインストール](https://rancherdesktop.io/)されていることを確認します

これらのステップの多くは、新しいアナリストが実行することを推奨する[オンボーディングスクリプト](https://gitlab.com/gitlab-data/analytics/-/blob/master/admin/onboarding_script.zsh)で行われます。

#### dbt実行時に適切なSnowflakeウェアハウスを選択する

Snowflakeインスタンスには[複数のサイズのウェアハウス](https://docs.snowflake.com/en/user-guide/warehouses-overview)が含まれており、dbt開発者がクエリに割り当てるコンピュートリソースを異なるレベルで設定できます。ウェアハウスが大きくなり、実行時間が長くなるほど、クエリのコストが高くなります。例えば、X-Smallウェアハウスを1時間実行するコストと比較して、Largeウェアハウスを1時間実行するコストは[8倍](https://docs.snowflake.com/en/user-guide/warehouses-overview#warehouse-size)になります。

複数のウェアハウスにアクセスできる場合、`profiles.yml`ファイルに各ウェアハウスのエントリを作成できます。これにより、`dbt run`を呼び出す際に実行するウェアハウスを指定できます。これは慎重に行う必要があります。大きなウェアハウスを使用するとパフォーマンスは向上しますが、コストが大幅に増加します！小さいウェアハウスを使用する方向で判断してください。小さいウェアハウスのパフォーマンスが不十分な場合は、大きなウェアハウスで再試行する前に原因を調査してください。非効率なモデルを大きなウェアハウスに対して実行すると、開発中のコストが増加するだけでなく、モデルが本番環境で実行されるたびにコストが増加し、Snowflakeコストの意図しない継続的な増加をもたらします。

#### 例

データチームのメンバーとして、dbtモデルに変更を加える必要があると想像してください。X-SmallウェアハウスとLargeウェアハウスの両方にアクセスでき、`profiles.yml`ファイルが次のように設定されています:

```yaml
gitlab-snowflake:
  target: dev
  outputs:
    dev:
      type: snowflake
      threads: 8
      account: gitlab
      user: {username}
      role: {rolename}
      database: {databasename}
      warehouse: DEV_XS
      schema: preparation
      authenticator: externalbrowser
    dev_l:
      type: snowflake
      threads: 16
      account: gitlab
      user: {username}
      role: {rolename}
      database: {databasename}
      warehouse: DEV_L
      schema: preparation
      authenticator: externalbrowser
```

ターミナルとコードエディターを開き、新しいブランチを作成し、dbtモデルを調整して変更を保存します。変更をローカルでテストするためにdbtを実行する準備ができたので、次のコマンドを入力します: `dbt run --models @{model_name}`。dbtはモデルのビルドを開始し、デフォルトでは`ANALYST_XS`ウェアハウスを使用してビルドします。しばらくすると、タイムアウトエラーによりビルドが失敗します。明らかに、ビルドしているモデルツリーには大きなまたは複雑なモデルが含まれています。クエリを完了させるには、より大きなウェアハウスを使用する必要があります。ビルドを再試行したいですが、今度は`ANALYST_XS`の代わりに`ANALYST_L`ウェアハウスを使用させたいです。そこで`dbt run --models @{model_name} --target dev_l`を入力します。これによりdbtに、`profiles.yml`ファイルの`dev_l`ターゲットで指定したウェアハウスを使用するよう指示します。数分後にビルドが完了し、作業の確認を始めます。

#### Venv ワークフロー {#Venv-workflow}

Macシステムを使用している場合に推奨されるワークフローです。

#### dbtを使用する

- `DBT_PROFILE_PATH`環境変数が設定されていることを確認してください。[onboarding_script.zsh](https://gitlab.com/gitlab-data/analytics/-/blob/master/admin/onboarding_script.zsh)（最新版で定期的に更新されているため使用を推奨）を使用した場合は設定されているはずですが、設定されていない場合は`.bashrc`または`.zshrc`に`export DBT_PROFILE_PATH="/<your_root_dir/.dbt/"`を追加するか、ローカルターミナルセッションで同じコマンドを実行することで設定できます
- 特定のユーザー設定で`.dbt/profiles.yml`を更新していることを確認してください
- [GitLabの方向](https://docs.gitlab.com/user/ssh/)に従ってSSH設定がセットアップされていることを確認してください。鍵は`~/.ssh/`にあり、パスワードなしで生成されているべきです。
  - メインプロジェクトで`dbt deps`を実行するには[このプロジェクト](https://gitlab.com/gitlab-data/data-tests)へのアクセスも必要です。
- **注意**: デフォルトのブラウザをChromeに設定してください。組み込みのSSOログインはChromeでのみ動作します
- **注意**: `/analytics`リポジトリがある場所のフォルダーにいることを確認してください。すべてを正しくインストールしていれば、`jump analytics`で`dbt`コマンドを正常に実行するために必要な場所に移動できます
- **注意**: dbtを初めて実行する前に`make prepare-dbt`を実行してください。これにより、venvがインストールされます。

- `dbt`コンテナを起動してその中のシェルからコマンドを実行するには、`make run-dbt`を使用してください。このコマンドはdbtの実行に必要な依存関係をインストールまたは更新します。
- 依存関係のアップデートなしに`dbt`コンテナを起動するには`make run-dbt-no-deps`を使用してください。このコマンドはdbtの依存関係がすでにインストールされていることを前提としています。
- これにより、ローカルの`profiles.yml`とリポジトリファイルを含む、`dbt`が実行に必要なすべてのものが自動的にインポートされます
- 現在のブランチのdocsを表示するには、`make run-dbt-docs`を実行してからWebブラウザで`localhost:8081`にアクセスしてください

#### なぜローカルdbt開発に仮想環境を使用するのか？

ローカルdbt開発に仮想環境を使用するのは、すべての開発者がまったく同じdbtバージョンとまったく同じ依存関係を実行することを確保するためです。これにより、異なるソフトウェアバージョンによる開発者の異なる開発体験のリスクを最小化し、全員のソフトウェアを同時にアップグレードするのが簡単になります。さらに、ステージングと本番環境はコンテナ化されているため、このアプローチにより同じコードがすべての環境で可能な限り予測可能に実行されることが保証されます。

#### ローカルで変更をビルドする

ローカル開発スペースで変更されたすべてのモデルをクローンしてビルドするには、[CIジョブ](/handbook/enterprise-data/platform/ci-jobs/#build_changes)で使用されている`build_changes`プロセスと同じものを使用できます。主な違いは、`WAREHOUSE`変数の代わりに開発者が異なるウェアハウスサイズで設定されたターゲットを使用するための`TARGET`変数を渡すことができる点です。プロセスを実行するには、仮想環境内から`make build-changes`コマンドを実行してください。

```console
 ~/repos/analytics/transform/snowflake-dbt
╰─$ make build-changes DOWNSTREAM="+1" FULL_REFRESH="True" TARGET="dev_xl" VARS="key":"value" EXCLUDE="test_model"
```

[ビデオ紹介](https://youtu.be/0WiljW6Bihw)

#### SQLFluff リンター

SQLFluffを使用して、コードに[SQLスタイルガイド](/handbook/enterprise-data/platform/sql-style-guide/)を適用します。dbt仮想環境内では`make lint-models`を使用できます。デフォルトでは`lint-models`プロセスは変更されたすべてのsqlファイルをリントしますが、`MODEL`変数を使用して特定のsqlファイルをリントしたり、`FIX`変数を使用してsqlファイルに変更を加えるlinterのfixコマンドを実行したりできます。

```console
~/repos/analytics/transform/snowflake-dbt
╰─$ make lint-models
sqlfluff lint models/workspaces/workspace_data/mock/data_type_mock_table.sql

~/repos/analytics/transform/snowflake-dbt
╰─$ make lint-models FIX="True" MODEL="dim_date"
sqlfluff fix ./models/common/dimensions_shared/dim_date.sql
```

[ビデオ紹介](https://youtu.be/MwVJHf7XvrI)

#### ローカルでのSAFEチェック

モデルのSAFEカバレッジをテストするには、[CIジョブ](/handbook/enterprise-data/platform/ci-jobs/#safe_model_script)で使用されている`safe_model_script`プロセスと同じものを使用できます。仮想環境内から`make safe-check`コマンドを実行してください。

```console
 ~/repos/analytics/transform/snowflake-dbt
╰─$ make safe-check
```

#### ローカルでモデルをクローンする

このコマンドにより、dbt選択構文を使用してゼロコピークローニングで完全なリネージをクローンできます。これはdbtを使ってモデルを実行するよりもはるかに速くコスト効率が高いですが、dbtの検証は実行しません。そのため、すべてのdbtユーザーはこのコマンドを使用して環境をセットアップすることをお勧めします。

**前提条件:**

- dbtがセットアップされていてモデルを実行できることを確認してください
- これらのローカルコマンドは`/.dbt/profiles.yml`で設定されているSnowflakeユーザーを使用して実行され、ユーザーに権限のないテーブルはスキップします
- これらのコマンドは、dbt CIパイプラインと同じロジックを使用し、`DBT_MODELS`変数を使用して特定のリネージを選択します
- これらのコマンドを実行するには`/analytics`ディレクトリにいる必要があります

**使用法:**

新しい`clone-dbt-select-local-user-noscript`コマンドを使用するには、`DBT_MODELS`変数を指定する必要があります。例えば、`dim_subscription`モデルのみをクローンするには次のコマンドを実行します:

```console
make DBT_MODELS="dim_subscription" clone-dbt-select-local-user-noscript
```

これにより、dbtモデルが`prod`ブランチからローカルユーザーデータベース（`{user_name}_PROD`）にクローンされます。dbtセレクター（@、+など）を使用して、ローカルデータベースにコピーしたいリネージ全体を選択できます。

### 本番オーケストレーション

本番環境のdbtモデルは[Apache Airflow](https://airflow.apache.org/)を使用してオーケストレーションされます。各スケジュールされたパイプラインはKubernetesポッド内のAirflow DAGとして実行され、dbtコマンドをSnowflakeに対して実行します。

#### 現在の状態

各本番パイプラインは、`extract`リポジトリの[`dags/transformation`](https://gitlab.com/gitlab-data/extract/-/tree/main/dags/transformation)ディレクトリ内の個別のPythonファイルとして定義されています。

| DAG ID | スケジュール | 説明 | ソース |
|---|---|---|---|
| [`dbt_snapshots`](https://gitlab.com/gitlab-data/extract/-/blob/main/dags/transformation/dbt_snapshot.py) | 毎日UTC 07:00 | すべてのdbtスナップショットを実行し、レガシースナップショットモデルをビルドしてテスト | `dbt_snapshot.py` |
| [`dbt_edm_snapshots`](https://gitlab.com/gitlab-data/extract/-/blob/main/dags/transformation/dbt_edm_snapshot.py) | 毎日UTC 17:00 | EDMタグ付きスナップショットを実行し、EDMスナップショットモデルをビルドしてテスト | `dbt_edm_snapshot.py` |
| [`t_gitlab_customers_db_dbt`](https://gitlab.com/gitlab-data/extract/-/blob/main/dags/transformation/gitlab_dot_com_dbt.py) | 毎日UTC 06:30 | GitLab顧客データベースのスナップショット、増分モデルリフレッシュ、テストを実行 | `gitlab_dot_com_dbt.py` |
| [`t_gitlab_com_db_dbt`](https://gitlab.com/gitlab-data/extract/-/blob/main/dags/transformation/gitlab_dot_com_dbt.py) | 毎日UTC 07:00と19:00の2回 | GitLab.comデータベースのスナップショット、増分モデルリフレッシュ、テストを実行 | `gitlab_dot_com_dbt.py` |
| [`dbt`](https://gitlab.com/gitlab-data/extract/-/blob/main/dags/transformation/dbt.py) | 毎日UTC 08:45 | すべての製品・非製品モデル、ワークスペースモデルの増分リフレッシュとテスト | `dbt.py` |
| [`dbt_full_refresh_monthly`](https://gitlab.com/gitlab-data/extract/-/blob/main/dags/transformation/dbt_full_refresh_monthly.py) | 毎月第1日曜日UTC 08:45 | すべてのdbtモデルのフルリフレッシュ | `dbt_full_refresh_monthly.py` |
| [`dbt_sfdc_validation_and_run`](https://gitlab.com/gitlab-data/extract/-/blob/main/dags/transformation/dbt_sfdc_validation_and_run.py) | 6時間ごと | SFDCソースモデルとSalesforce商談モデルをビルドしてテスト | `dbt_sfdc_validation_and_run.py` |
| [`dbt_netsuite_actuals_income_cogs_opex`](https://gitlab.com/gitlab-data/extract/-/blob/main/dags/transformation/dbt_netsuite_actuals_income_cogs_opex.py) | 月〜金の1日4回 | 営業日のみNetSuiteの実績モデルを実行 | `dbt_netsuite_actuals_income_cogs_opex.py` |
| [`t_omamori_external`](https://gitlab.com/gitlab-data/extract/-/blob/main/dags/transformation/dbt_omamori_external_table_transform.py) | 毎時 | Omamori外部テーブルをリフレッシュし、ソースモデルを実行 | `dbt_omamori_external_table_transform.py` |
| [`dbt_gdpr_delete_requests`](https://gitlab.com/gitlab-data/extract/-/blob/main/dags/transformation/dbt_gdpr_delete.py) | 毎日UTC 03:00 | 増分GDPR削除リクエストを処理 | `dbt_gdpr_delete.py` |
| [`dbt_company_scorecard`](https://gitlab.com/gitlab-data/extract/-/blob/main/dags/transformation/dbt_company_scorecard.py) | 毎日UTC 08:00と20:00の2回 | GitLab.comデータが利用可能になった後、会社スコアカードdbtモデルをリフレッシュ | `dbt_company_scorecard.py` |

#### 将来の状態（進行中）

オーケストレーションは[頻度ベースのDAGによるdbtモデルオーケストレーションの標準化](https://gitlab.com/groups/gitlab-data/-/epics/1555)イニシアチブの一環として、設定駆動システムに移行中です。

**設定駆動のDAG生成**

新しいPython DAGファイルを各パイプラインに書く代わりに、ジョブ定義は単一のYAMLマニフェスト（[`dbt_jobs_manifest.yml`](https://gitlab.com/gitlab-data/extract/-/blob/main/dags/transformation/dbt_jobs_manifest.yml)）に一元化されます。

各ジョブエントリは以下をサポートしています:

- **`schedule`** – DAGが実行されるタイミングを定義するcron式
- **`exclusion_schedule`** – スキップする日付や曜日のためのオプションのcron式
- **`warehouse`** – ジョブのデフォルトのSnowflakeウェアハウス
- **`tasks`** – dbtステップの順序付きリスト

**モデルレベルの頻度設定**

長期的なビジョンは、各dbtモデルが`config.meta.frequency`値を使用して独自のリフレッシュケイデンスを宣言することです。

サポートされている頻度の値:

| 頻度 | 説明 |
|---|---|
| `one_hour` | 毎時リフレッシュ |
| `four_hour` | 4時間ごとにリフレッシュ |
| `six_hour` | 6時間ごとにリフレッシュ |
| `eight_hour` | 8時間ごとにリフレッシュ |
| `twelve_hour` | 12時間ごとにリフレッシュ |
| `twenty_four_hour` | 毎日リフレッシュ（すべてのモデルのデフォルト） |
| `weekly` | 毎週リフレッシュ |
| `first_week_of_month` | 毎月第1週にリフレッシュ |
| `monthly` | 毎月リフレッシュ |

### Dockerワークフロー {#docker-workflow}

以下は、venvワークフローの前提条件が少なくかなり速いため、主にLinuxを使用しているユーザーに推奨されるワークフローです。

メインの[analyticsプロジェクト](https://gitlab.com/gitlab-data/analytics/)は`Docker`コンテナ内から`dbt`を使用することをサポートしています。[`data-image`](https://gitlab.com/gitlab-data/data-image)プロジェクトからコンテナをビルドします。

最初の実行前（およびコンテナが更新されるたびに）、以下のコマンドを実行してください:

1. `make update-containers`
1. `make cleanup`

#### コマンドラインチートシート

dbt固有:

- [`dbt clean`](https://docs.getdbt.com/reference/commands/clean) - `/dbt_modules`（depsを実行したときに生成）と`/target`フォルダー（モデルを実行したときに生成）を削除します
- [`dbt run`](https://docs.getdbt.com/reference/commands/run) - 通常の実行
- モデル選択構文（[source](https://docs.getdbt.com/reference/node-selection/syntax)）:
  - `dbt run --models modelname` - `modelname`のみを実行
  - `dbt run --models +modelname` - `modelname`とすべての親を実行
  - `dbt run --models modelname+` - `modelname`とすべての子を実行
  - `dbt run --models +modelname+` - `modelname`、すべての親と子を実行
  - `dbt run --models @modelname` - `modelname`、すべての親、すべての子、すべての子の親を実行
  - `dbt run --exclude modelname` - `modelname`以外のすべてのモデルを実行
- `dbt run --full-refresh` - 増分モデルをリフレッシュ
- [`dbt test`](https://docs.getdbt.com/reference/commands/test) - カスタムデータテストとスキーマテストを実行
- [`dbt seed`](https://docs.getdbt.com/reference/commands/seed) - `data-paths`ディレクトリで指定されたcsvファイルをデータウェアハウスに読み込む
- [`dbt compile`](https://docs.getdbt.com/reference/commands/compile) - モデル内のテンプレートコードをコンパイルして結果を`target/`フォルダーに出力

## スタイルと使用ガイド

### モデル構造

Kimball式のウェアハウスへの移行に伴い、ウェアハウスとプロジェクト構造内でのモデルの整理方法を改善しています。


{{% panel header="**レガシー構造**" header-bg="info" %}}
Kimball次元モデリングへの注力以前は、[「Agile Data Warehouse Design」by Corr and Stagnitto](https://books.google.com/books/about/Agile_Data_Warehouse_Design.html?id=TRWFmnv8jP0C&source=kp_book_description)で紹介されたBEAM\*アプローチに触発されたモデリングを行っていました。
既存のモデルの多くはまだそのパターンに従っています。
{{% /panel %}}



{{% panel header="**FY21-Q4 モデル移行**" header-bg="info" %}}
FY21-Q4に`analytics`データベースを置き換えるために`prod`と`prep`データベースが導入されました。
{{% /panel %}}


#### ソース

すべての生データは引き続きSnowflakeの`RAW`データベースにあります。これらの生テーブルは`source tables`または`raw tables`と呼ばれます。

ソースはdbtで`sources.yml`ファイルを使用して定義されます。

##### ソースモデル

すべての生データの上に非常に薄いソース層を実施しています。このディレクトリはほとんどのソース固有の変換が保存される場所です。

ソースモデルで行うべきこと:
- フィールドをユーザーフレンドリーな名前に変更
- 適切な型に列をキャスト
- 今後も100%確実に有用な最小限の変換
- 論理的に名付けられたスキーマへの配置

ソースモデルで行うべきでないこと:
- データの削除
- 他のテーブルへの結合
- 列の意味を根本的に変える変換

#### センシティブデータ

場合によっては、生の値を公開すべきでない列があります。これには顧客のメールや名前などが含まれます。

##### スタティックマスキング

スタティックマスキングを使用する特定のモデルでは、ソース形式が上記のように従われます。列はソースモデルでハッシュされません。

機密列は`schema.yml`ファイルで`meta`キーを使用して`sensitive`を`true`に設定してドキュメント化されます。

##### ダイナミックマスキング {#dynamic-masking}

機密データを一部のユーザーには公開し、他のユーザーには公開しない場合、ダイナミックマスキングを適用できます。

##### 行レベルセキュリティ

行レベルセキュリティは、ユーザーがテーブルやビューで参照できる行を制御します。個々のカラム値をマスクするのではなく、Snowflakeの[Row Access Policy](https://docs.snowflake.com/en/user-guide/security-row-intro)をリレーションにアタッチし、クエリ実行時に評価することで、現在のユーザーが参照権限を持たない行を完全にフィルタリングして除外します。

これを管理するマクロは`macros/dbt_snowflake_row_access/`にあり、[ダイナミックマスキング](#dynamic-masking)と同じpost-hookパターンに従います。

モデルで行レベルセキュリティを有効にするには、`schema.yml`内のモデルの`meta`設定に`rls_policy`を追加します。2つのモードがあります:

**シンプル（ロールベース）:** `rls_policy`の値は有効なSnowflakeロール名と一致する必要があります。アクセスは、その名前に一致するロールをセッションで保持しているユーザーに付与されます。

```yaml
- name: my_model
  config:
    meta:
      rls_policy: "my_snowflake_role_name"
```

**エンタイトルメントベース:** `rls_policy`の値は、作成されるSnowflake Row Access Policyオブジェクトに付けられる名前にすぎず、Snowflakeのロール名と一致する必要はありません。アクセスは、クエリ実行時にエンタイトルメントモデルを結合することで行単位に決定されます。エンタイトルメントモデルはプロジェクト内のdbtモデルで、Snowflakeユーザー名を識別するカラム（デフォルトは`snowflake_user_name`）と、セキュリティ保護対象テーブルのフィルターカラムと一致する結合カラムを持つ必要があります。検索性のため、使用するエンタイトルメントモデルをモデルの説明で参照することをお勧めします。

```yaml
- name: my_model
  config:
    meta:
      rls_policy: "my_policy_name"
      rls_config:
        entitlement_model: "ent_my_entitlement_model"
        entitlement_column: "my_join_key_column"
        filter_column: "my_join_key_column"
        user_identifier_column: "snowflake_user_name"
```

`rls_config`のキーは以下のとおりです:

- `entitlement_model`: 各ユーザーがアクセスできる行を定義するdbtモデルの名前
- `entitlement_column`: セキュリティ保護対象テーブルと結合するためのエンタイトルメントモデル内のカラム
- `filter_column`: セキュリティ保護対象テーブル内のカラムで、その値がフィルタリングのためにポリシーに渡されます
- `user_identifier_column`: Snowflakeユーザー名を保持するエンタイトルメントモデル内のカラム。省略した場合のデフォルトは`snowflake_user_name`です。

行レベルセキュリティの適用が必要なモデルには、`secure_model`マクロを実行する`post-hook`を設定する必要があります。これは通常、`dbt_project.yml`のディレクトリレベルで設定します:

```yaml
my_schema_directory:
  +post-hook:
    - "{{ secure_model() }}"
```

このマクロは`config.meta`に`rls_policy`がないモデルに対してはno-opであるため、スキーマディレクトリ全体に幅広く適用しても安全です。

`TRANSFORMER`ロールと`LOADER`ロールは、ポリシーモードに関係なく常にフルアクセス権を持ちます。

このパターンを実装するマクロは以下のとおりです:

| マクロ | 役割 |
|---|---|
| `secure_model` | Post-hookのエントリポイント — モデルの`config.meta`から`rls_policy`を読み取り、`apply_row_access_policy`に委譲します |
| `get_tables_to_secure` | dbtグラフを走査して`rls_policy`が設定されたすべてのノードを収集し、完全修飾テーブル名、ポリシー名、およびオプションの`rls_config`を返します |
| `apply_row_access_policy` | オーケストレーター — `information_schema`にテーブルタイプとフィルターカラムのデータ型をクエリし、`create_row_access_policy`と`set_row_access_policy`を呼び出します |
| `create_row_access_policy` | シンプルモードまたはエンタイトルメントベースモードでSnowflake Row Access Policyを作成または変更します |
| `set_row_access_policy` | 最下層のDDL: リレーションから既存の行アクセスポリシーをすべて削除した上で、指定されたポリシーを追加します |

#### ステージング

Kimballモデリングの実装前は、ほとんどすべてのモデルがステージングカテゴリに分類されていました。

#### ワークスペース

dbtプロジェクト内に、すべてのコーディングとスタイルガイドに準拠する必要のないチーム固有のコードのためのスペースを提供しています。

### 全般

- モデル名はできるだけ明確にし、可能な限り完全な単語を使用します（例: `accts`ではなく`accounts`）。
- 新しいdbtモデルのドキュメント化とテストはそれらを作成するプロセスの一部です。テストとドキュメントなしに新しいdbtモデルは完成しません。
- すべての`{{ ref('...') }}`ステートメントはファイルの先頭のCTEに配置する必要があります。

#### モデル設定

- デフォルトのマテリアライゼーションは`view`です
- デフォルトのスキーマは`prep.preparation`です
- モデルの無効化は常に`dbt_project.yml`内で`+enabled: false`宣言を使用して行う必要があります

### シード {#seeds}

シードは[dbtドキュメント](https://docs.getdbt.com/docs/build/seeds)に従ってcsvファイルからデータウェアハウスにデータを読み込む方法です。

### タグ

[dbtのタグ](https://docs.getdbt.com/reference/resource-configs/tags)は、プロジェクトの異なる部分にラベルを付ける方法です。

### ウェアハウスサイズ

モデル内の[ウェアハウスサイズの設定](https://docs.getdbt.com/reference/resource-configs/snowflake-configs#configuring-virtual-warehouses)は、モデルに必要なパフォーマンスを確保する方法です。

### 信頼できるデータフレームワーク

信頼できるデータフレームワーク（TDF）の哲学についての詳細は、プラットフォームページの[信頼できるデータフレームワーク](/handbook/enterprise-data/how-we-work/data-development)セクションを参照してください。

#### スキーマからゴールデンデータカバレッジ

12のカテゴリのTDFモニターとテストを実装しています:

1. `新鮮度モニター` テーブルとフィールドの更新における異常な遅延を監視
1. `スキーマモニター` 追加、削除、変更されたフィールドを監視
1. `ボリュームモニター` 行数に基づくテーブルサイズの異常な変化を監視
1. `フィールドヘルスモニター` nullの割合、ユニークの割合などの統計のディップやスパイクを監視
1. `SQLルールモニター` 1つ以上のテーブルにわたって任意の条件をチェックするSQL文を記述
1. `JSONスキーマモニター` テーブルフィールドに追加されたJSONデータのスキーマ変更を監視
1. `ディメンショントラッキング` 低カーディナリティのテーブルフィールド内の値の分布の変化を監視
1. [スキーマテスト](/handbook/enterprise-data/platform/dbt-guide/#schema-tests)
1. [カラム値テスト](/handbook/enterprise-data/platform/dbt-guide/#column-value-tests)
1. [行数テスト](/handbook/enterprise-data/platform/dbt-guide/#rowcount-tests)
1. [カスタムSQL](/handbook/enterprise-data/platform/dbt-guide/#custom-sql)

#### スキーマテスト

スキーマテストは、既知のテーブル、列、その他のスキーマ構造の存在を検証するように設計されています。

#### カラム値テスト

カラム値テストは、列のデータ値が事前定義された閾値内にあるか、既知のリテラルと一致するかを判断します。

#### 行数テスト

行数テストは、一定期間にわたるテーブルの行数が期待される事前定義された結果を満たすかを判断する特殊なタイプのカラム値テストです。

#### カスタムSQL

上記のカテゴリのいずれにも適合しないテストを考えている場合は、任意のSQLをテストとして書くこともできます。重要な点は、行が返されない場合にテストが*合格*することです。

## dbtモデルのドキュメント化

ドキュメントはすべてのdbtモデルの第一級の要件です。スタイルと使用ガイドで述べているように: **テストとドキュメントなしに新しいdbtモデルは完成しません。**

### なぜドキュメントが重要か

現在、約25%のモデルと1%未満のソース列にのみ説明があります。このギャップには2つの具体的なコストがあります: 開発者はカタログでその情報を見つけるのではなく、モデルの粒度とビジネスロジックを理解するためにSQLを読まなければならず、説明がない場合にAI支援開発ツールが頼れる意味的なコンテキストがほとんどありません。

### 規約の概要

| ドキュメント対象 | 規約 |
|---|---|
| モデルの説明 | ディレクトリレベルの`.md`ファイルの`{% docs model_name %}`ブロック |
| 共有カラムの説明 | `common_columns.md`の`{% docs column_name %}`ブロック |
| モデル固有のカラムの説明 | `schema.yml`のインラインprose（稀） |
| ソーステーブルとカラムの説明 | `sources.yml`に直接インラインprose |

### モデルの説明

#### 5セクションテンプレート

すべてのモデルの説明は以下の構造を使用した`{% docs %}`ブロックとして記述されます:

```jinja
{% docs model_name %}

**説明:** モデルが含むものとその目的を説明する1〜2文。

**データ粒度:**
- プライマリキーの列 - 各行を一意にするディメンションごとに1つの箇条書き

**モデルに適用されるフィルター:**
- アクティブなフィルターごとに別々の箇条書き。フィルターがアップストリームモデルから来ており、ここで再実装されていない場合は`Inherited`を接頭辞として付けます。

**このモデルのビジネスロジック:**
- 主要な変換、導出、またはJoinロジック。

**その他のコメント:**
- 注意点、既知のエッジケース、IssueやHandbookエントリへのリンク。

{% enddocs %}
```

## スナップショット

dbtスナップショットは、可変（SCDタイプ1）ソーステーブルの上に構築された[SCDタイプ2](https://en.wikipedia.org/wiki/Slowly_changing_dimension#Type_2:_add_new_row)テーブルで、ソーステーブルへの変更を時間の経過とともに記録します。

### スナップショットのベストプラクティス

- **データベースとスキーマの設定**: `dbt_project.yml`でデータベースとスキーマを設定します。
- **命名規則に従う**: データウェアハウスのテーブル名は`{source_table_name}_snapshots`の命名規則に従う必要があります。
- **変換を避ける**: 重複排除以外のスナップショットモデルでは最小限の変換を実行します。

### スナップショットとGDPR

時々、データチームはGDPRのためにSnowflakeデータウェアハウスから個人データを削除するリクエストを受けます。これらの削除に対処するために、`dbt`マクロを使用します。詳細は[gdpr-deletionsページ](/handbook/enterprise-data/platform/gdpr-deletions/)を参照してください。

## モデルの効率性

モデルの効率性とは、モデルがSnowflakeリソースをどれだけうまく使用してモデルを生成するかの測定値です。

### 方法

各モデルについて、実行されたクエリは最初にフィルタリングと集計が行われます。`CREATE_VIEW, INSERT, DELETE, CREATE_TABLE_AS_SELECT, MERGE, CREATE_VIEW, SELECT, EXTERNAL_TABLE_REFRESH`の特定のクエリタイプのみが考慮されます。

#### ローカルストレージ効率

\\[E_l = min\{\frac{s-S_l}s,0\}\\]

#### リモートストレージ効率

\\[E_r = min\{\frac{s-S_r}s,0\}\\]

#### パーティションスキャン効率

\\[E_p = if\ p\ >\ 1\ then\ min\{\frac{p-S_p}p,0\}\ else\ 1\\]

#### 効率スコア

<!-- markdownlint-disable MD037 -->
\\[E = [(E_l * w_l) + (E_r * w_r) + (E_p * w_p)]*100\\]
<!-- markdownlint-enable MD037 -->

## モデルパフォーマンス

パフォーマンスはモデルの実行時間（Snowflakeクレジットに直接影響）と開発者の時間（開発者が待つ時間に影響）の間でバランスを取る必要があります。データウェアハウスの全体的なパフォーマンス目標:

- すべてのモデルは個別に60分未満で実行する必要があります。
- すべてのモデルは許容される最小のウェアハウスで実行する必要があります。

### カテゴリ分類

#### モデル実行時間

| 分類 | 実行秒数 > | 実行秒数 >= |
|----------------|---------------------|----------------------|
| XS             | 0                   | 60                   |
| S              | 60                  | 300                  |
| M              | 300                 | 900                  |
| L              | 900                 | 1800                 |
| XL             | 1800                | 3600                 |
| XL+            | 3600                |                      |

#### モデルサイズ

| 分類 | 行数 >        | 行数 <=       | GB >  | GB <= |
|----------------|---------------|---------------|-------|-------|
| XS             | 0             | 1,000,000     | 0     | 1     |
| S              | 1,000,000     | 10,000,000    | 1     | 10    |
| M              | 10,000,000    | 100,000,000   | 10    | 100   |
| L              | 100,000,000   | 1,000,000,000 | 100   | 1,000 |
| XL             | 1,000,000,000 |               | 1,000 |       |

#### モデル効率性

| 分類 | ローカルにスピルしたGB  | リモートにスピルしたGB |
|----------------|-------------------|-------------------|
| Good           | 0                 | 0                 |
| Acceptable     | <= 5 * 書き込みGB | 0                 |
| Poor           | > 5 * 書き込みGB  | 0                 |
| Very Poor      |                   | > 0               |

## dbtのアップグレード

[runbook](https://gitlab.com/gitlab-data/runbooks/-/blob/main/infrastructure/upgrading_dbt_version.md)を参照してください。

### 最新状態を維持する

私たちのポリシーは、クリティカルサポートのある[`dbt-core`](https://docs.getdbt.com/docs/dbt-versions/core)のバージョンを常に使用することです。

### dbtアップグレードのスケジュール

dbtのアップグレードは、大きな世界的な祝日や[ファミリーアンドフレンズデー](/handbook/company/family-and-friends-day/)のない週の火曜日に行う必要があります。

## dbtモデルレベルでのウェアハウスサイズの指定

新しい`product`と`non-product`モデルは今後デフォルトで'L'ウェアハウスサイズを使用します。

dbtモデルレベルでウェアハウスを指定するには（デフォルトのウェアハウスを上書き）、モデルに設定ブロックを追加する必要があります:

```sql
{{ config(
    snowflake_warehouse=generate_warehouse_name('XL')
) }}
```

ウェアハウスの正しいサイズ選択については、このページの「ウェアハウスサイズの実行可能性の確認」セクションを参照してください。
