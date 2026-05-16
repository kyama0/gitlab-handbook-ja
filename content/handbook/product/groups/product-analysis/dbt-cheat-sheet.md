---
title: "dbt チートシート"
description: "機能アナリスト向けの data build tool (dbt) チートシート"
upstream_path: /handbook/product/groups/product-analysis/dbt-cheat-sheet/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-23T15:35:45-08:00"
---

## このページの目的

このページは、機能アナリスト向けの dbt チートシートまたはクイックスタートガイドとなることを目的としています。
[Data Team dbt Guide](/handbook/enterprise-data/platform/dbt-guide/) には豊富なドキュメントがありますが、
分析エンジニアリングが新しい人 (機能アナリストなど) にはふるい分けが難しい場合があります。

このページでは、dbt でモデルを更新するための MR を作成・テストするために必要な
基本的な手順をガイドするために、既存のリソースを集約しています。

## dbt 変更ワークフロー

開発は文書化された [dbt 変更ワークフロー](/handbook/enterprise-data/how-we-work/dbt-change-workflow/)に従ってください。
dbt での変更へのアプローチ方法 (計画、テストなど) の詳細については、そのハンドブックページを
ご確認ください。

## ローカルセットアップ

まずは、ローカルマシンで dbt をセットアップする必要があります。詳しい手順については
[このハンドブックページの Configuration セクション](/handbook/enterprise-data/platform/dbt-guide/#configuration)
をお読みください (プロのヒント: まずセクション全体を読んでから、指示に従い始めてください)。
セクションで言及されているように、必要なものの多くはオンボーディングスクリプトを実行することで
処理されます。

### profiles.yml のヒント

- `profiles.yml` ファイルをお探しですか？ ホームディレクトリに移動し、`command` + `shift` +
`.` を押してください。これにより隠しファイル (最初の文字がピリオドのファイル) が表示され、更新する必要のあるファイルが見つかります。
- `user:`: これはあなたの GitLab メールアドレスです (例: `JSMITH@GITLAB.COM`)
- `role:`: これはあなたの Snowflake ロールで、通常はイニシャル + 苗字です (例: `JSMITH`)
- `database:`: これはあなたのイニシャル + 苗字です (例: `JSMITH`)
- 異なるサイズのウェアハウス用にターゲットをセットアップしてください (例: `DEV_XS` 用と `DEV_L` 用に1つずつ)
  - 注意: 常に XS ウェアハウスをデフォルトで使用してください。[dbt ガイドで提供されている例](/handbook/enterprise-data/platform/dbt-guide/#example)では、デフォルトで XS ウェアハウスが使用されています。

## Snowflake での開発データベースのセットアップ

ローカルでテストを行うために、開発用に独自の PROD および PREP データベースが利用できます。
データ量が大きい (特にプロダクトモデル) ため、構築するモデルに必要な依存関係を*強く*
クローンすることをお勧めします。
`dbt run` でこれらを構築*しないでください*。変更したモデルに対してのみ実行してください。
`dbt run` で構築すると、モデルを最初から完全に構築するため、非常に時間がかかり、多くのリソースを
消費します。

Snowflake で依存関係をクローンするためのいくつかのオプションを紹介します。これらの例では、
あなたのロールが `JSMITH` で、開発データベースが `JSMITH_PROD` および `JSMITH_PREP` であると仮定します。

### コマンドラインを使用して系統 (lineage) をクローン

コマンドラインを使用して単一モデルまたは系統全体 (CI ジョブと同様) をクローンする方法については、
[こちらの説明](/handbook/enterprise-data/platform/dbt-guide/#cloning-models-locally)を参照してください。
これはローカルでモデルをクローンするための推奨される方法です。

注意: これは `/analytics` ディレクトリで実行する必要があります。dbt 仮想環境では実行できません。

### Snowflake を使用して単一モデルをクローン

これにより、本番データベースから開発データベースに単一モデルがクローンされます。
単一モデルのクローンには数秒しかかかりません。

```sql
CREATE OR REPLACE TRANSIENT TABLE {DEV_DATABASE}.{SCHEMA_NAME}.{TABLE_NAME}
CLONE {PROD_DATABASE}.{SCHEMA_NAME}.{TABLE_NAME}
;

--Example
CREATE OR REPLACE TRANSIENT TABLE JSMITH_PROD.common.dim_ping_metric
CLONE PROD.common.dim_ping_metric
;
```

注意: モデルをクローンするには、開発データベースにスキーマがすでに存在している必要があります

<details markdown="1"><summary>開発データベースで新しいスキーマを作成する方法</summary>

```sql
CREATE SCHEMA IF NOT EXISTS {DEV_DATABASE}.{SCHEMA_NAME};

--Example
CREATE SCHEMA IF NOT EXISTS JSMITH_PROD.COMMON;
```

</details>

### Snowflake を使用してスキーマ全体をクローン

これにより、本番スキーマ内のすべてのモデルが開発データベースのスキーマにクローンされます。
スキーマ全体のクローンには数分かかる場合があります。

```sql
CREATE OR REPLACE SCHEMA {DEV_DATABASE}.{SCHEMA_NAME}
CLONE {PROD_DATABASE}.{SCHEMA_NAME}
;

--Example
CREATE OR REPLACE SCHEMA JSMITH_PROD.COMMON
CLONE PROD.COMMON
;
```

## dbt でのモデルの実行とテスト

常に XS ウェアハウスをデフォルトで使用し、より大きなウェアハウスを使用してクエリを実行することに伴う
コストに注意してください。dbt を実行する際に適切なウェアハウスを選択するためのガイダンスについては、
[dbt Guide](/handbook/enterprise-data/platform/dbt-guide/#choosing-the-right-snowflake-warehouse-when-running-dbt)
を参照してください。

### dbt でのモデルの実行

作業中のモデルに必要な変更を加えたら、ビルドが成功し、ローカルテストができることを確認するため、
モデルをローカルで構築する必要があります。これを行うには、
[`dbt run`](https://docs.getdbt.com/reference/commands/run) コマンドを使用できます。
他の便利なリソースとヒント:

- [GitLab Data Team dbt コマンドラインチートシート](/handbook/enterprise-data/platform/dbt-guide/#command-line-cheat-sheet)
- [モデル選択構文の概要](https://docs.getdbt.com/reference/node-selection/syntax)
- 名前の間にスペースを入れてコマンドに含めることで、複数のモデルを指定できます
- [グラフオペレーター](https://docs.getdbt.com/reference/node-selection/graph-operators)を使用して、
`+` や `@` などを上流または下流のモデルを参照するために使い、複数のモデルを指定できます
- `target` (ウェアハウス接続) を設定することで、より大きなウェアハウスを使用してモデルを実行
することを指定できます。

```console
dbt run --select my_model                       # my_model を実行
dbt run --select my_model my_model_2            # my_model と my_model_2 を実行
dbt run --select my_model+                      # my_model とすべての子を実行
dbt run --select +my_model                      # my_model とすべての親を実行
dbt run --select +my_model+                     # my_model、そのすべての親、すべての子を実行
dbt run --select @my_model                      # my_model、すべての親、すべての子、AND すべての子のすべての親を実行
dbt run --select my_model+ --exclude my_model_2 # my_model_2 を除く my_model とすべての子を実行
dbt run --select my_model --target dev_l        # L ウェアハウスで my_model を実行 (ターゲットは profiles.yml で定義)
```

### dbt でのモデルのテスト

dbt でモデルをテストするには、`dbt test` を実行するだけです。`dbt test` は `dbt run` と同じ構文
(例: `--select`) を使用します

```console
dbt test --select my_model # my_model のカスタムテストを実行
```

### Linting

dbt を実行できたら、モデルの linting は単一のコマンドで行えます。ローカルマシンに SQLFluff を
インストールする方法と linter 設定の詳細については、
[SQL Style Guide の SQLFluff セクション](/handbook/enterprise-data/platform/sql-style-guide/#sqlfluff)
をお読みください。linter を実行すると、結果がターミナルに表示されます。

`fix` コマンドを利用して、linter にルール違反の修正を適用させることもできます (可能な場合)。

```console
sqlfluff lint models/path/to/file/file-to-lint.sql # ファイルを lint してターミナルに結果を出力
sqlfluff fix models/path/to/file/file-to-lint.sql  # ファイルを lint して修正を適用
```

### 実例ウォークスルー

こちらは、Data チームと機能アナリストの [dbt ワーキングセッション](https://docs.google.com/document/d/1Fqp-IsJDTNf6o8Veyo31CJSRk7yBe8_dhEkQc9a4XC8/edit?usp=sharing)
のアジェンダです。[録画はこちら](https://youtu.be/MSOhgHVjB90)から視聴でき、
モデルの更新とテストのライブデモは ~30:00 から始まります (アジェンダと録画は社内のみ)。

## dbt ドキュメントの更新

dbt Docs を生成するために使用される主なファイルは 1 つあります: schema.yml (例:
[`transform/snowflake-dbt/models/common_mart/schema.yml`](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart/schema.yml))。
dbt Docs に関する dbt ドキュメントは[こちら](https://docs.getdbt.com/docs/build/documentation)でお読みいただけます 🐢️🐢️🐢️。

**TL; DR:** 私たちの dbt ドキュメントは、`schema_name.md` でモデルの説明を設定し、
`common_columns.md` でカラム定義を設定し、それらのファイルを `schema.yml` で参照することで動作します。
追加の詳細と例は以下です。

### schema.yml

`schema.yml` は、(テストなどの他のことに加えて) モデルの説明とカラム定義を定義する主要なファイルです。
このファイルに説明とカラム定義を直接追加することも、[`doc` 関数](https://docs.getdbt.com/reference/dbt-jinja-functions/doc)
を使用して別のファイルのドキュメントを参照することもできます。schema.yml ファイルの例は
[こちら](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart/schema.yml)。

```yaml
models:
- name: mart_event_valid
  description: '{{ doc("mart_event_valid") }}'
  columns:
    - name: event_pk
      description: '{{ doc("event_pk") }}'
      tests:
        - not_null
        - unique
    - name: dim_event_date_id
      description: '{{ doc("dim_event_date_id") }}'
```

私たちのドキュメントの詳細レベルを考えると、すべてのドキュメントをファイルに直接配置すると、
schema.yml ファイルは作業するには*非常に*大きくなってしまいます。その潜在的な問題を軽減するために、
GitLab 中央 Data チームでは追加で 2 つのファイルを使用しています:

1. `schema_name.md`: `transform/snowflake-dbt/models/path/to/model_directory/schema_name.md`。
これらのマークダウンファイルをモデルの説明に使用しています (例:
[`transform/snowflake-dbt/models/common_mart/common_mart.md`](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart/common_mart.md) )
   - ファイル名がスキーマ名と完全に一致しない例外がいくつかあります。マークダウンファイルは
   モデルスキーマのディレクトリで探す必要があります
1. `common_columns.md`: [`transform/snowflake-dbt/models/common/common_columns.md`](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common/common_columns.md)。
このマークダウンファイルをカラム定義に使用しています。

### schema_name.md

`schema_name.md` は、モデルの説明を定義するために使用するファイルです。その後、schema.yml で
ドキュメントを参照できます。schema_name.md ファイルの例は[こちら](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common/common.md)。

新しいモデルを追加するには、マークダウンファイルに以下を追加します:

```markdown
{% docs model_name %}

ここにモデルの説明

{% enddocs %}
```

その後、`'{{ doc("model_name") }}'` を使用してこの schema.yml で定義を参照できます (以下の例)。

```yaml
models:
- name: mart_event_valid
  description: '{{ doc("mart_event_valid") }}'
  columns:
```

### common_columns.md

[`common_columns.md`](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common/common_columns.md)
は、カラム定義を定義するために使用するファイルです。schema_name.md と同じ仕組みで、
schema.yml で定義を参照できます。このファイルを使うと、定義を 1 回設定して何度も参照できます。

新しいカラム定義を追加する前に、定義がすでに存在しているか確認してください。存在しない場合は、
マークダウンファイルに次を追加してください:

```markdown
{% docs column_name %}

カラム定義

{% enddocs %}
```

カラムが定義されたら、`'{{ doc("column_name") }}'` を使用して schema.yml で参照できます
(以下の例)

```yaml
models:
- name: mart_event_valid
  description: '{{ doc("mart_event_valid") }}'
  columns:
    - name: event_pk
      description: '{{ doc("event_pk") }}'
```

## モデル設定

モデル設定は .sql ファイルの先頭で設定できます。設定には、モデルをマテリアライズドテーブルにするか
ビューにするか、フルリフレッシュかインクリメンタルロードか、などが含まれます。

モデル設定の詳細については、[dbt Guide](/handbook/enterprise-data/platform/dbt-guide/#model-configuration)
を参照してください。

### プロダクトデータモデルのタグ

プロダクトデータモデルに関しては、正しい DAG で実行されるように (つまり、他のプロダクト依存関係の後に
ビルドされるように)、モデルに `"product"` タグを含める必要があります。このタグを含めないと、
データの鮮度の遅れにつながる可能性があります (例: 依存関係が更新される前にモデルがビルドされる場合)。
[追加の例](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_namespace) については、
dbt ドキュメントの既存のモデルを参照してください。

``` sql
{{ config(
    tags=["product"]
) }}
```

タグに関する追加のドキュメントは、[dbt Guide ハンドブックページ](/handbook/enterprise-data/platform/dbt-guide/#tags)
にあります。

## MR ワークフロー

Data チームには、十分に文書化された [MR ワークフロー](/handbook/enterprise-data/how-we-work/#merge-request-workflow)
があります。

### MR テンプレート

ユースケースに基づいて適切な MR テンプレートを必ず使用してください。テンプレートには、
テスト、パイプラインなどに関する詳細な指示も含まれています。*大部分の*ユースケースでは、
次のテンプレートの 1 つを使用します:

- [dbt Model Changes](https://gitlab.com/gitlab-data/analytics/-/blob/master/.gitlab/merge_request_templates/dbt%20Model%20Changes.md):
common または legacy (非 workspace) モデルへの変更にはこれを使用
- [dbt Workspace Changes](https://gitlab.com/gitlab-data/analytics/-/blob/master/.gitlab/merge_request_templates/dbt%20Workspace%20Changes.md):
workspace スキーマ (例: `workspace_product`) への変更にはこれを使用
- [All Other Changes](https://gitlab.com/gitlab-data/analytics/-/blob/master/.gitlab/merge_request_templates/All%20Other%20Changes.md):
実際にモデルを変更しない dbt docs の更新にはこれを使用

### MR パイプラインと CI ジョブ

各 CI ジョブに関する最新の情報と詳細については、[Data チーム CI ジョブハンドブックページ](/handbook/enterprise-data/platform/ci-jobs/)
を参照してください。

{{< panel header="**注意**" header-bg="blue" >}}
次のジョブを実行する前に、ジョブが完了するのを待つ必要があります。たとえば、変更されたモデルを
構築する前に、依存関係がすべてクローンされるのを待つ必要があります。
{{< /panel >}}

### Postgres/GitLab.com パイプラインに新しいテーブルまたはカラムを追加する MR

Postgres/GitLab.com パイプラインに新しいテーブルまたはカラムを追加するリクエストのセルフサービスを
促進するために、Data チームでは必要な手順を概説したランブックとビデオを作成しました:

- [ランブック](https://gitlab.com/gitlab-data/runbooks/-/blob/main/Gitlab_dotcom/postgres_new_source_table_.md)
- [ビデオ (Part 1)](https://www.youtube.com/watch?v=kpI8GjQQq3A)
- [ビデオ (Part 2)](https://www.youtube.com/watch?v=Pd3J4eBX1ek)

### レビューの依頼

レビュアーを割り当てる前に、必ず MR テンプレートのチェックリストを通してください。
これにより、Data チームのメンバーがコードのレビューを開始する前に、必要な手順をすべて完了したことを
保証できます。

MR テンプレートの `Auditing` セクションで、すべてのクエリが MR ブランチデータベースを参照していることを
確認してください。MR をレビューする他のチームメンバー (例: アナリティクスエンジニア) も MR データベースに
アクセスでき、それを使って変更をレビュー・検証します。

MR がレビューの準備ができたら、コードオーナーをタグ付けしてレビュアーとして割り当てます (コードオーナーは
MR の承認セクションに表示されます)。workspace モデルへの変更については、Data チームのメンバーを
レビュアーとしてタグ付けする前に、必ず機能アナリストに MR をレビューしてもらってください。

### MR のマージ

MR が必要な数のコードオーナー (MR の承認セクションで指定) によって承認されたら、最終レビューと
マージのためにメンテナーに割り当てることができます。
