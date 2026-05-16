---
title: "エンタープライズデータウェアハウス"
upstream_path: /handbook/enterprise-data/platform/edw/
upstream_sha: d638a3d5418a620365f135648ea547e0992abbf1
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-17T09:57:28+02:00"
---

## エンタープライズデータウェアハウスの概要

### アーキテクチャの概要

EDWは一連のレイヤーとして捉えられています。5つの連続したレイヤーがあり、データはこのレイヤーを通じて処理されます。また、データが探索・開発される1つの開発レイヤーがあります。各レイヤーはEDWの全体的な運用と有効性における役割を持っています。EDW内のすべてのデータは`Landing`に格納されます。その後のすべてのレイヤーはオプションですが、Tableauは`prod`データベーススキーマにのみ[接続](/handbook/enterprise-data/platform/#data-storage)する必要があることに注意してください。

| レイヤー    | 目的                                                                                                       | スキーマ例                 |
|-------------|---------------------------------------------------------------------------------------------------------------|----------------------------|
| Landing     | ソースシステムからの読み込み<br>非冪等データの生成                                                    | _raw.salesforce_v2_stitch_ |
| Staging     | カラム名とデータ型の標準化<br>フィルタリングと重複排除（クレンジング）                          | _prep.salesforce_          |
| Preparation | 処理中のステップと変換<br>汎用ビジネスロジックの適用                                                  | _prod.common_prep_         |
| Model       | 磨かれた製品<br>エンタープライズ次元モデル<br>機能データモデル<br>信頼性が高く、検証済みでサポートされている | _prod.common_              |
| Semantic    | 論理的および物理的な構成<br>レポートと分析のエントリポイント                                    | _prod.common_mart_         |
| Workspace   | 開発中<br>探索<br>高速イテレーション                                                        | _prod.workspace_sales_     |

各レイヤーで実行される活動の詳細については、[レイヤー](#layers)セクションを参照してください。

### 重要なスキーマ

EDWの本番データベースは、GitLabのデータコンシューマーによるレポートと分析に使用されます。主要な4つのスキーマ`COMMON_`、`SPECIFIC`、`LEGACY_`、`WORKSPACE_`で構成されています。

1. **COMMON スキーマ:** エンタープライズ次元モデル（EDM）を格納し、統合されたアプリケーションデータの中核として機能します。Kimball手法を実装して最高のデータ品質基準を確保します。
1. **SPECIFIC スキーマ:** 他のシステムとの統合を必要とせず独立したアプリケーションデータを維持します。
1. **WORKSPACE スキーマ:** 実験とプロトタイピングのための柔軟な環境を提供します。
1. **LEGACY スキーマ:** 現代のアーキテクチャへの移行に際して、歴史的なモデリングアプローチを維持します。

## 次元モデリングの基礎

次元モデリングは[Ralph Kimball](https://en.wikipedia.org/wiki/Ralph_Kimball)によって開発されたビジネス次元ライフサイクル手法の一部です。

<a id="layers"></a>

## レイヤー

### Landing

LandingレイヤーはソースシステムからのデータがEDWにコピーされる場所です。従来のSQLテーブルとファイルベースのデータの両方を含むことができます。

### Staging

Stagingレイヤーは最初の管理的な変換が行われる場所です。これらの変換により、予測可能な動作をするデータセットが作成され、GitLab標準の規則に準拠したデータになります。

**データ型の適合:**
NULLおよびブランク値の処理は、データのステージング中に行う必要があります。ブランク値はNULLに変換する必要があります。

**カラム名の標準化:**
カラム名を適合させることで、変換がより自己文書化され、将来の変換の可読性が向上します。

**データのクレンジング:**
誤ったデータレコード（重複など）の削除は、ダウンストリームの変換を効率化します。

**非表形式データのフラット化:**
Landingレイヤーのデータが非表形式で格納されている場合、他のステージングステップを実行できるようにデータをフラット化することが必要です。

### Preparation

Preparationレイヤーは一般的なビジネスロジックの変換がデータに初めて適用される場所です。

**フィールドの計算:**
計算フィールドは、ソースシステムに由来しないが、単一のデータセット内のデータにビジネスロジックを適用することで形成できるフィールドです。

**フィールドの導出:**
導出フィールドは、ソースシステムに由来しないが、複数のデータセットにわたるデータへのビジネスロジックの適用によって形成できるフィールドです。

**レコードの導出:**
日付間隔データのファンアウトなどの導出レコードは、ソースシステムに由来しないが、JoinまたはAggregationを通じて形成されるレコードです。

### モデリング

モデリングレイヤーは、データが保守と拡張を容易にする正式な構造に変換される場所です。

**ファクトとディメンションの作成:**
Kimball次元モデリングの原則を使用して、データをフィルタリング、グループ化、結合して再利用可能なディメンションモデルとファクトを作成します。

**ビッグテーブルの作成:**
ビッグテーブルモデルは、できるだけ多くの関連する属性を単一の広いテーブルに提供することを目的としています。

**エンタイトルメントテーブルの作成:**
エンタイトルメントモデルは、SnowflakeとTableauなどのツールでデータレコードへの明示的なアクセスを許可するための人物識別子とJoin条件のリストを作成することを目的としています。

### セマンティック

セマンティックレイヤーは、ビジネスレポートのニーズに合わせてデータが変換される場所です。

**マートテーブルの作成:**
マートテーブルは、多くの関連するビジネス質問に答えるために必要なレコードと列を提供します。

**レポートテーブルの作成:**
レポートテーブルは、単一のビジネス質問に答えるために必要なレコードと列を提供します。

### ワークスペース

ワークスペースは、データウェアハウス内で探索と初期開発が行われるレイヤーです。

ワークスペースを使用する場合:
1. EDWでこれまでモデル化されたことのない完全に新しいデータソースを探索する
2. 継続的なレポートには使用されない一時的な分析を作成する
3. EDM標準を満たさない可能性のある実験的な変換を実行する
4. 本番レポートに影響を与える可能性のある既存のEDMモデルへの主要な変更をテストする

## エンタープライズ次元モデル（COMMON スキーマ）

### 有用なリンクとリソース

- [現代のデータウェアハウスにおけるKimball次元モデリング](https://discourse.getdbt.com/t/is-kimball-dimensional-modeling-still-relevant-in-a-modern-data-warehouse/225/6)
- [次元モデリングマニフェスト](https://www.kimballgroup.com/1997/08/a-dimensional-modeling-manifesto/)
- [次元モデリング技法](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/)
- [Kimballバスマトリクス](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/kimball-data-warehouse-bus-architecture/)
- [次元モデリング開発プロセス](/handbook/enterprise-data/how-we-work/data-development/#trusted-data-development)

### コアコンセプト

次元モデリングは2つの主要なコンポーネントを使用します:

- **ファクト（メジャー）**: データの数値的な値。これらは分析したい「いくつ」「いくら」の値です。
- **ディメンション（コンテキスト）**: ファクトに意味を与える記述的な属性。ディメンションはデータの「誰が、何を、いつ、どこで、なぜ」に答えます。

このアプローチにより、いくつかのスキーマパターンが作成されます:

- **スタースキーマ**: 中央のファクトテーブルをディメンションテーブルにリンク
- **スノーフレークスキーマ**: 他のディメンションテーブルにリンクするディメンションテーブル
- **ギャラクシースキーマ**: 相互に接続された複数のファクトテーブル

### 開発プロセス

次元モデルは4つの主要なステップで構築されます:

1. ビジネスプロセスを選択する（例: 年間収益の追跡）
1. 粒度を宣言する（例: 顧客ごと）
1. ディメンションを特定する
1. ファクトを特定する

## スキーマ

## Common Prep スキーマ

Common Prepスキーマはデータアーキテクチャの重要な中間レイヤーとして機能します。

### コア原則

4つの基本原則が開発と保守を導きます:

1. **真実の単一ソース** 次元エンティティごとに1つのprepモデルを維持します。
1. **最低粒度の保持** 次元エンティティの最低可能粒度でprepモデルを維持します。
1. **包括的なデータ保持** `COMMON_PREP`スキーマでのレコードのフィルタリングを避けます。
1. **実用的なモデル作成** Commonスキーマへの直接変換がより効率的な場合、prepレイヤーをスキップします。

## Common Mapping スキーマ

ディメンションテーブルをサポートするマッピング/ルックアップ（map_）テーブルは`common_mapping`スキーマで作成する必要があります。

## Common スキーマ

Commonスキーマはエンタープライズ次元モデルを構成するすべてのファクトとディメンションが格納される場所です。

### ディメンションテーブル

ディメンションテーブルはビジネスイベントにコンテキストを与える記述的な属性を提供します。

#### ゆっくりと変化するディメンションとスナップショット

**タイプ1ディメンション**
- 変更時に値を上書き
- 現在の状態のみを維持
- 最もシンプルな実装

**タイプ2ディメンション（SCD）**
- 変更に対して新しいレコードを追加
- `valid_from`と`valid_to`日付で有効期間を追跡
- 履歴分析を有効化

**タイプ3ディメンション**
- 現在の値と代替の値を維持
- 現在EDMでは実装されていない

### ファクトテーブル

ファクトテーブルは分析したいビジネスイベントを記録します。

**アトミックファクト**: ビジネスイベントを最も細粒な形で捉えるファクトテーブル。

**派生ファクト**: アトミックファクトの上に構築された特定の分析ニーズに対応する特殊なビュー。

## Common Mart スキーマ

Common Martスキーマはディメンションとファクトをビジネスに即したアナリティクスモデルに組み合わせます。

## Specific スキーマ

`SPECIFIC`スキーマは、エンタープライズ次元モデルの次元モデリング構造に準拠しないがレポート機能を実行し、真実のソースとして機能するテーブルに使用されます。

## 変換なしビュー

**変換なしビュー**は、さらなる変換なしにレポートに必要な生ソースデータの直接ビューである必要があります。常にビューとして`ntv_`プレフィックスで作成する必要があります。

## エンタイトルメント

SnowflakeとTableauの両方での行レベルセキュリティの使用を促進するために、エンタイトルメントテーブル専用のスキーマが使用されます。

### 命名

エンタイトルメントテーブルの名前は、他のテーブルへの参照と使用するアプリケーションを示す必要があります。例: `ent_team_member_directory_tableau`

## 技術的な実装詳細

### Tableau統合のベストプラクティス

Tableauは主要な可視化ツールであるため、すべてのEDWモデルはTableauの互換性を念頭に置いて設計する必要があります。

### 命名標準

1. PREP テーブル: `prep_<subject>`
1. FACT テーブル: `fct_<verb>`
1. DIMENSION テーブル: `dim_<noun>`
1. MART テーブル: `mart_<subject>`
1. REPORT テーブル: `rpt_<subject>`
1. PUMP テーブル: `pump_<subject>`
1. MAP テーブル: `map_<subjects>`
1. BRIDGE テーブル: `bdg_<subjects>`
1. SCAFFOLD テーブル: `rpt_scaffold_<subject>`
1. 単数命名を使用する（例: dim_customer、dim_customersではない）
1. テーブルと列名にプレフィックスを使用して同様のデータをグループ化する

### テストフレームワーク

モデルは[信頼できるデータフレームワーク（TDF）](/handbook/enterprise-data/platform/dbt-guide/#trusted-data-framework)に従ってschema.ymlファイルによるテストとドキュメントが必要です。

### 時間標準

すべてのシステムで月曜日を週の最初の日として標準化します:

```sql
CASE WHEN day_name = 'Mon' THEN date_day
    ELSE DATE_TRUNC('week', date_day)
END AS first_day_of_week
```

## エンティティ関係図（ERD）ライブラリ

これらの図は主要なビジネスプロセスフライホイール全体でエンタープライズ次元モデル内のデータオブジェクト間の関係を示します。

### Lead to Cash ERDs

<details markdown=1>

<summary><b>ERDライブラリ</b></summary>

- [Sales Funnel ERD](https://lucid.app/lucidchart/invitations/accept/inv_aaf2071b-0e70-446c-bc7f-1f8dcfdd650c)
- [Annual Recurring Revenue (ARR) ERD](https://lucid.app/lucidchart/invitations/accept/inv_8914efa4-00a6-4705-8ce3-d422d052cc22)
- [Common Subscription Model ERD](https://lucid.app/lucidchart/invitations/accept/inv_776b0a6b-70f9-44e2-bc60-cfbf56dcc7bb)
- [Common Behavior ERD](https://lucid.app/lucidchart/5d5c918d-2e6d-47d6-a2e5-db3c4951c531/edit?viewport_loc=-109%2C105%2C3982%2C1787%2CFb93ppTmuaDu&invitationId=inv_a4c5f29c-930f-4103-a121-320dd8009b5a)
- [Delta ARR: Subscription Lineage Monthly ERD](https://lucid.app/lucidchart/invitations/accept/inv_07d25d39-3076-408f-b768-67d1895ea064)
- [DRAFT: Quota ERD](https://lucid.app/lucidchart/invitations/accept/inv_2d4d5137-8aa6-488f-89a1-4295bf9ebde5)
- [DRAFT: Orders ERD](https://lucid.app/lucidchart/invitations/accept/inv_b726f4d1-7d92-4a21-832e-68f9db4fb104)

</details>

### Product Release to Adoption ERDs

<details markdown=1>

<summary><b>ERDライブラリ</b></summary>

- [Common Product Usage Data Model ERD](https://lucid.app/lucidchart/3a42e56a-028e-45d7-b2ca-5ef489bafd32/edit?viewport_loc=2142%2C1704%2C4416%2C1626%2C8XAjn~AniBES&invitationId=inv_e0a19114-45d5-4a78-9123-dc3b8991d826)
- [Common Behavior ERD](https://lucid.app/lucidchart/5d5c918d-2e6d-47d6-a2e5-db3c4951c531/edit?viewport_loc=-109%2C105%2C3982%2C1787%2CFb93ppTmuaDu&invitationId=inv_a4c5f29c-930f-4103-a121-320dd8009b5a)

</details>

### Team Member ERDs

<details markdown=1>

<summary><b>ERDライブラリ</b></summary>

- [Common Team Member Data Model ERD](https://lucid.app/lucidchart/17fbbbe5-f652-40e9-905e-1b07ec040520/edit?viewport_loc=153%2C6%2C1472%2C542%2CC6RZ78OfF1Bh&invitationId=inv_f6b923fd-02bb-4786-abd7-bf205c7d1da2)
- [DRAFT: Recruiting ERD](https://lucid.app/lucidchart/caa98a41-649a-4af0-9d2b-129360dbce96/edit?viewport_loc=-1384%2C-550%2C3649%2C1344%2C0_0&invitationId=inv_5af17fdd-3d57-4966-823a-bba083d80718)

</details>

### Lucidchartを使用したエンティティ関係（ER）図の作成

`Lucidchart`はユーザーが図表を視覚的にコラボレーションして描画・修正・共有できるWebベースの作図アプリケーションです。

<details markdown=1>
<summary><b>ステップ1:</b> 'Lucidchartアプリ'からブランクのlucidドキュメントを作成します。</summary>

![create-lucid-chart.png](/images/enterprise-data/platform/edw/create-lucid-chart.png)
</details>

<details markdown=1>
<summary> <b>ステップ2:</b> ページの左下にある「シェイプライブラリ」の下に表示される「データのインポート」をクリックします。</summary>

![import-data.png](/images/enterprise-data/platform/edw/import-data.png)
</details>

<details markdown=1>
<summary><b>ステップ3:</b> 「すべてのデータソース」から「エンティティ関係（ERD）」を選択します。</summary>

![import-sql-database.png](/images/enterprise-data/platform/edw/import-sql-database.png)
</details>

<details markdown=1>
<summary> <b>ステップ4:</b>  データをインポートするDBMSソースとして「MySQL」を選択します。</summary>

![sql-script.png](/images/enterprise-data/platform/edw/sql-script.png)
</details>

<details markdown=1>
<summary> <b>ステップ5:</b>  Snowflakeで以下のスクリプトを実行します。</summary>

```sql
The below query can be run in Prod database in Snowflake to get all the Models/tables from COMMON and COMMON_PREP Schemas:

SELECT 'mysql' dbms,
        t.TABLE_SCHEMA,
        t.TABLE_NAME,
        c.COLUMN_NAME,
        c.ORDINAL_POSITION,
        c.DATA_TYPE,
        c.CHARACTER_MAXIMUM_LENGTH,
        '' CONSTRAINT_TYPE,
        '' REFERENCED_TABLE_SCHEMA,
        '' REFERENCED_TABLE_NAME,
        '' REFERENCED_COLUMN_NAME
FROM INFORMATION_SCHEMA.TABLES t
LEFT JOIN INFORMATION_SCHEMA.COLUMNS c
ON t.TABLE_SCHEMA=c.TABLE_SCHEMA
AND t.TABLE_NAME=c.TABLE_NAME
WHERE t.TABLE_SCHEMA NOT IN('INFORMATION_SCHEMA')
AND t.TABLE_SCHEMA IN ('COMMON', 'COMMON_PREP')
```

</details>

<details markdown=1>
<summary><b>ステップ6:</b> Snowflakeからクエリの結果をcsvファイルにダウンロード・エクスポートします。</summary>

![export-results.png](/images/enterprise-data/platform/edw/export-results.png)
</details>

<details markdown=1>
<summary><b>ステップ7:</b>  Lucidchartアプリに戻り、result.csvファイルを選択してアップロードし、「インポート」をクリックします。</summary>

![import-tables.png](/images/enterprise-data/platform/edw/import-tables.png)
</details>

<details markdown=1>
<summary><b>ステップ8:</b> 選択した「table_schema」リストのすべてのテーブル/モデルが「ERD インポート」の下に表示されます。</summary>

![schemas.png](/images/enterprise-data/platform/edw/schemas.png)

![tables.png](/images/enterprise-data/platform/edw/tables.png)
</details>

<details markdown=1>
<summary><b>ステップ9:</b>  必要なテーブル/エンティティをキャンバスにドラッグし、リボンからエンティティ間の関係を定義してER図を作成します。</summary>

![ERD.png](/images/enterprise-data/platform/edw/ERD.png)
</details> <br>

## ビッグデータ

ビッグデータは、データサービスの限界を理解するために使用するコンセプトです。一般的に、ビッグデータとは現在のデータサービスの処理・提供能力を超えるまたは負荷をかけるものです。

### ビッグデータとエンタープライズデータウェアハウス

EDWのビッグデータは3つの一般的なトピックで分類されます:

1. ボリューム - 関連するソース、コンセプト、またはモデルに対してどれだけのデータがあるか
1. ベロシティ - データがどれだけ速く変化し、取り込まれ、消費されるか
1. バラエティ - データソースの構造とフォーマットが他のソースとどれだけ異なるか

## アナリティクスパフォーマンスポリシーフレームワーク

### 問題の説明

EDWのデータボリュームとビジネスロジックの複雑さの増加により、EDWで構築されたデータモデルの変換は時間の経過とともにパフォーマンスが低下しており、日次のdbtモデル本番実行が12時間以上かかっています。

dbtモデルの実行を3つの主要な次元で考えます:

1. **パフォーマンス** モデルのビルドにかかる時間に関連
1. **効率性** モデルがローカルストレージ、リモートストレージ、パーティションプルーニングをどれだけうまく使用するかに関連
1. **コスト** モデルの実行に必要なSnowflakeクレジット数に関連

### パフォーマンスターゲット

1. 本番dbt DAGの実行時間を8時間未満に維持します。
1. 個々のdbtモデルの実行時間は一貫して1時間未満であり、予測されるデータボリュームの増加を考慮した設計になっています。
1. SnowplowのビッグデータセットのSnowflakeでのシンプルなクエリはLまたはXLウェアハウスで1分未満で完了します。

### パフォーマンス向上のためのアーキテクチャアプローチ

1. データモデルで変換・表示するデータ量を削減します。
1. データモデルへのクラスタリングキーの追加を検討します。
1. データモデルでの`simple_cte`マクロの使用を評価します。
1. データモデルをインクリメンタルに設定することを検討します。

### 履歴アーカイブプロセス

1. パフォーマンスポリシーの考慮によりデータモデルで再作成またはサーフェスできない非冪等データの場合は、データプラットフォームのアーカイブ方法論を活用して履歴アーカイブを作成します。
