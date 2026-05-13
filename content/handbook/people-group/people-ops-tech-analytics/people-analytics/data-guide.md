---
title: "ピープルデータ分析のためのデータガイド"
upstream_path: /handbook/people-group/people-ops-tech-analytics/people-analytics/data-guide/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## このページの目的

このハンドブックページでは、People Analytics チームが使用するデータの定義およびデータモデルの概要を示します。用語、計算式、ピープルデータを利用したモデルについて明確にしたいときに、このページを参照してください。質問がある場合は、遠慮なくチームメンバーに連絡してサポートを受けてください。

## 出発点として役立つ場所

- [DBT Docs](https://dbt.gitlabdata.com/#!/overview) - このリソースには利用可能なすべての dbt モデルに関する包括的なドキュメントが含まれています。私たちのモデルを理解する良い出発点です。People 固有のモデルについては、以下の **よく使われるデータモデル** セクションを起点として参照してください。
- Data チームが管理する[データ主題領域の決定版ガイド](/handbook/enterprise-data/data-governance/data-catalog/)。
- 技術的に好奇心旺盛なアナリスト向けの[データパイプラインのドキュメント](/handbook/enterprise-data/platform/pipelines/)。このページでは各データソースと抽出の詳細について説明しています。
- [People Group Tech Stack Guide](/handbook/people-group/) - 私たちの HR システムへの／からのすべての統合と、私たちが使用するすべてのツールの概要。

## People Group データディクショナリ

### 雇用データ

採用後の GitLab における労働者および雇用に関するデータ

<details><summary>クリックして展開</summary>

| 名称 | 説明 | 計算式 | 機密性 |
|---|---|---|---|
| Team Member | 過去のいずれかの時点で GitLab に勤務した人物で、当社の人事管理システム（HRMS）のいずれかに従業員 ID を持ち、かつ一時雇用（contingent）労働者やインターンではない者 |  |  |
| Employee ID | チームメンバーの GitLab での雇用を追跡するために、採用時に HRMS で割り当てられる固有 ID |  | はい |
| Hire Date | チームメンバーとしての GitLab での雇用初日 |  |  |
| Termination Date | チームメンバーとして GitLab に雇用されなくなった初日 | HRMS の termination effective date + 1 日 | はい（未来日付の場合） |
| [Employee Type](/handbook/people-group/employment-solutions/#team-member-types-at-gitlab) | チームメンバーの主たるポジションの雇用形態。レポーティングでは通常「Consultants」と「Interns」を除外します |  |  |
| [Company / Entity](/handbook/people-group/employment-solutions/#gitlab-entities-and-branches) | チームメンバーを雇用または契約するために使用される、ロケーション固有の会社。これらは法人（Entity）または Professional Employer Organization（PEO）の形を取ることがあります |  |  |
| [Termination Type](/handbook/people-group/offboarding/) | 退職ビジネスプロセスに関連付けられたビジネスプロセス理由カテゴリ。Voluntary（自発的）または Involuntary（非自発的）のいずれかです |  | はい |
| [Exit Impact](/handbook/people-group/offboarding/#offboarding:~:text=Regrettable%3A%20The%20team,or%20performance%20concerns.) | 退職トランザクションで regrettable termination として指定されている場合、その労働者は "regrettable" termination とみなされます。それ以外の場合は "non-regrettable" termination とみなされます |  | はい |
| Headcount | 特定の日に GitLab で雇用されているチームメンバー数 |  |  |
| Available Headcount | 特定の日に GitLab で雇用されているチームメンバーのうち、その日に欠勤の記録がない人数 |  |  |
| Begin Headcount | 平均ヘッドカウントの計算に使用。日付範囲内の各期間の開始時点でアクティブなチームメンバー数。通常は月初の日です。 |  |  |
| End Headcount | 平均ヘッドカウントの計算に使用。日付範囲内の各期間の終了時点でアクティブなチームメンバー数。通常は月末の日です。 |  |  |
| Average Headcount | 指定された日付範囲におけるチームメンバーの平均数。これはビジネス領域横断で比率を標準化するために使用します。 | （期間内の Begin Counts の合計 / 観察された期間数 + 期間内の End Counts の合計 / 観察された期間数）/ 2 |  |
| Net Growth | 選択された期間内の採用数と退職数の差のみに基づく成長を示すメトリック | 期間内の採用数 - 期間内の退職数 |  |
| Turnover / Attrition | 特定の期間に組織を離れたチームメンバーの割合。通常は直近 12 か月のローリングベースで計測 | 退職数 / 平均ヘッドカウント | はい、社内限定 |
| Retention | 一定期間に組織にとどまったチームメンバーの割合。 | 1 - Turnover | はい、社内限定 |
| Voluntary Turnover | Voluntary 退職タイプに該当する離職率の部分 | Voluntary 退職数 / 平均ヘッドカウント | はい、社内限定 |
| Involuntary Turnover | Involuntary 退職タイプに該当する離職率の部分 | Involuntary 退職数 / 平均ヘッドカウント | はい、社内限定 |
| Regrettable Turnover | regrettable termination に該当する離職率の部分 | Regrettable Terminations 数 / 平均ヘッドカウント | はい、社内限定 |
| Non-Regrettable Turnover | non-regrettable termination に該当する離職率の部分 | Non-Regrettable Terminations 数 / 平均ヘッドカウント | はい、社内限定 |

</details>

### Diversity, Inclusion, and Belonging（DIB）

労働者の属性（demographics）と、彼ら自身がどう識別するかに関するデータ

<details><summary>クリックして展開</summary>

| 名称 | 説明 | 計算式 | 機密性 |
|---|---|---|---|
| [Underrepresented Group (URG)](/handbook/company/culture/inclusion/#examples-of-select-underrepresented-groups) | 過小代表グループ（URG）には多くの種類がありますが、レポーティングでは URG は民族性に基づき、White、Asian、または Did Not Identify ではない民族性を URG とみなします。このメトリックは現在、国別ではなくグローバルで測定されています。 |  | はい |
| Non-URG | レポーティングでは、Non-URG は White または Asian の民族性とみなされます |  | はい |
| Gender | レポーティングで使用される労働者の性別。現在は Male、Female、または unidentified のいずれかとしてマークできます |  | はい |
| Gender Identity | 個人の性自認。例: transgender、cisgender、genderfluid、genderqueer、non-binary |  | はい |

</details>

### ポジション

チームメンバーが GitLab で就いているポジションに関する情報

<details><summary>クリックして展開</summary>

| 名称 | 説明 | 計算式 | 機密性 |
|---|---|---|---|
| Management Level | ジョブプロファイルのマネジメントレベル。 |  |  |
| Leadership | director 以上のマネジメントレベルのグループ化（Director、Vice President、Leader、Chief Executive Officer） |  |  |
| Management | manager 以上のマネジメントレベルのグループ化（Manager、Director、Vice President、Leader、Chief Executive Officer） |  |  |
| [Job Level](https://docs.google.com/spreadsheets/d/1kcDb-A2uwchPtTNSJON65BdqS9P0KQmNz0fbNMZMt_M/edit?gid=819074618#gid=819074618) | ジョブプロファイルのジョブレベル。 |  | はい |
| People Managers | Workday で direct reports（直属の部下）が割り当てられているチームメンバー |  |  |
| [Layers](/handbook/company/structure/#layers) | チームメンバーと CEO の間のレイヤー数。レイヤー 1 が CEO |  |  |
| Direct Reports | ピープルマネージャーに報告するチームメンバーのグループ |  |  |
| [Span of Control](/handbook/company/structure/#management-group) | ピープルマネージャーに割り当てられている direct reports の数 |  |  |
| Average Span of Control | ピープルマネージャーに平均で割り当てられている direct reports の数 | Direct Reports の数 / People Managers の数 |  |
| Manager Ratio | チームメンバーのうち people managers である割合 | People Managers の数 / 総チームメンバー数 | |
| Range of Span | 特定の日付時点での span of control の最小値と最大値 | | |
| Compa-Ratio | Compa-ratio は、チームメンバーの給与を社内または対象市場の類似ポジションの中央値報酬と比較する指標です。 | チームメンバーの給与を市場レートの報酬中央値で割る | はい |
| [Discretionary Bonus](/handbook/incentives/#discretionary-bonuses) | 会社のマネジメントの裁量で授与される追加のボーナス額。標準のボーナスプランとは別で、特定のパフォーマンスメトリクスには基づきません。Discretionary Bonus は会社が突出したチームメンバーを報酬する柔軟性を提供します。 |  |  |
| Discretionary Bonus Rate | 母集団のうち discretionary bonus を受け取ったチームメンバーの割合。KPI ではローリング 3 か月平均として報告されます。 | Discretionary Bonuses の数 / 平均ヘッドカウント |  |
| [Promotion](/handbook/people-group/promotions-transfers/#promotions) | HRMS で送信されたビジネスプロセスタイプが "Promote Employee Inbound" の場合、昇進としてカウントされます |  |  |
| [Lateral Transfer](/handbook/people-group/promotions-transfers/) | HRMS で送信されたビジネスプロセスカテゴリが "Lateral Move" で、職務名（job title）に変更があった場合、lateral move としてカウントされます |  |  |
| [Internal Mobility Rate](/handbook/people-group/promotions-transfers/#internal-mobility) | Internal Mobility Rate は、組織内でチームメンバーがポジションを変更する頻度を示し、社員が利用可能な内部の異動とキャリア進展の機会、また成長のパスを提供することで人材を維持する会社の能力を示します。 | Lateral Transfers と Promotions の数 / 平均ヘッドカウント |  |

</details>

### 有給休暇および欠勤

有給休暇（PTO）および欠勤に関する情報

<details><summary>クリックして展開</summary>

| 名称 | 説明 | 計算式 | 機密性 |
|---|---|---|---|
| Paid Time Off (PTO) | Absence Management System で申請・承認された休暇のうち、週末ではなく、1 回の申請で 25 日を超えず、Extended Leave、CEO Shadow Program、Conference などの PTO タイプを除いたもの。 |  |  |
| Average PTO Days | 期間中の PTO 日数の平均。この計算は、レポート期間中の全日を勤務していないチームメンバーを考慮し、全チームメンバーの PTO 利用を正規化します。 | （使用された PTO 日数 / 勤務日数）* 期間内の日数 |  |
| Full-Cycle Tenure Group | レポート期間中の全日を勤務したチームメンバーで、正規化された PTO が実際に使用された PTO と一致するもの |  |  |
| In/Out Tenure Group | レポート期間中の全日を勤務していないチームメンバーで、正規化された PTO は当該期間の実際の使用に基づき期間全体に対して使用された日数を反映するもの |  |  |

</details>

### 採用とオンボーディング

Talent Acquisition が使用するオンボーディングプロセスおよび採用メトリクスに関するデータ

<details><summary>クリックして展開</summary>

| 名称 | 説明 | 計算式 | 機密性 |
|---|---|---|---|
| Onboarding Satisfaction (OSAT) Score | Culture Amp の Week One オンボーディングアンケートのすべての設問について 1-5 スケールで採った平均評価。通常はローリング 3 か月平均として算出。 | （Month 1 オンボーディング応答の平均 + Month 2 オンボーディング応答の平均 + Month 3 オンボーディング応答の平均）/ 3 |  |
| Starts | GitLab からのオファーを承諾し、HRMS で開始日がスケジュールされている外部応募者 |  |  |
| External Applicants | ソースが "Internal Applicant" ではない応募者。応募提出時点で GitLab を通じて雇用されていない |  |  |
| Internal Applicants | ソースが "Internal Applicant" の応募者。応募提出時点で GitLab を通じて雇用されている |  |  |
| Time to Hire / Candidate Throughput | 応募提出日と、受諾されたオファーがある場合に応募が "Hire" ステージに移動した日の間の日数。 |  |  |
| Verbal Accepted Offer % | Offer ステージに移動し承諾された応募 / Offer ステージに移動し決着した応募数 | Offer Stage に移動して Offers を受諾した応募数 / Offer Stage に移動して受諾または拒否された応募数 |  |
| Written Offer Accept % | 日付範囲内に決着したオファー。受諾されたオファー数 / 決着したオファー数。 | オファーを受諾した応募数 / オファーを受諾または拒否した応募数 |  |
| Internal Mobility Rate % | 日付範囲内に決着したオファー。内部応募者からの受諾オファー数 / 受諾オファー数 | オファーを受諾した内部応募数 / オファーを受諾した応募数 |  |
| Source Rate | 日付範囲内に提出された応募のうち、sourced（Sourcing Strategy が "Prospecting" で Source が "SocialReferral" ではない）であり、候補者が（候補者タグに基づき）多様なソースから来たものの割合。sourced 応募全体に対する割合。 | 多様な候補者タグ付きで提出された Sourced Applications 数 / Sourced Applications 数 |  |
| Source Mix | 日付範囲内に決着日を持つ外部ソーシング戦略（内部応募者または買収を除く）による受諾オファーの割合 | 特定の Sourcing Strategy で Accepted Offers を持つ外部応募数 / Accepted Offers を持つ外部応募数 |  |
| Conversion Rate | 日付範囲内に提出された応募数と、それらが進んだ採用プロセスの各ステージ。前ステップから次ステップへ進んだ応募の割合を示す（例：Initial Interview に 10 件あり Team Interview フェーズに 2 件進んだ場合、Initial Interview のコンバージョン率は 20%）。 | 第二ステージの応募数 / 第一ステージの応募数 |  |
| Pending Offers | 送信済みだが受諾も拒否もされていないオファー |  |  |
| Time to Fill | 指定された日付範囲内にクローズし、採用された応募を持つ Openings の、open 日とクローズ日の間の日数 |  |  |
| Time to Start | 採用された応募について、Opening の open 日と予定開始日の間の日数 |  |  |
| Requisition Aging | 日付範囲内のいずれかの時点で open だった Openings の平均日数。この計算ではレポート期間中の全日について open 日数を平均します。 |  |  |

</details>

### システム

People Group が使用するシステム

<details><summary>クリックして展開</summary>

| 名称 | 説明 | 計算式 | 機密性 |
|---|---|---|---|
| [R (Language)](/handbook/enterprise-data/platform/rstudio/)   | 統計分析、グラフィカル表現、レポート作成に使用されるプログラミング言語およびソフトウェア環境。データ分析や科学研究で人気。 |  |  |
| [Tableau](/handbook/enterprise-data/platform/tableau/) | GitLab における主要なデータ可視化ツール |  |  |
| [Workday](/handbook/people-group/) | 現在の人事管理システム（HRMS）。2022-06-16 以降のすべてのチームメンバー関連データの SSoT、および 2024-09-01 以降のすべての Absence データの SSoT。 |  |  |
| [Greenhouse](/handbook/hiring/) | GitLab における現在の応募者追跡システム（ATS）であり、すべての採用メトリクスの SSOT |  |  |
| Time Off by Deel | Workday と統合された GitLab における現在の欠勤管理サポートツール。Absence の SSoT は Workday です。 |  |  |
| Sisense (旧 Periscope) | GitLab における旧データ可視化ツール |  |  |
| FiveTran | Fivetran は、Workday からデータを取り出し Snowflake に移動する自動データ移動プラットフォーム |  |  |
| [SnowFlake](/handbook/enterprise-data/platform/snowflake/) | Snowflake は私たちのエンタープライズデータウェアハウス（EDW）であり、エンタープライズデータプラットフォームのコア技術です。 |  |  |
| [Level Up / GitLab University](/handbook/people-group/learning-and-development/level-up/) | 継続教育とキャリア開発のために Thought Industries が作成したトレーニングプラットフォーム |  |  |

</details>

## データモデル

Data チームは People Analytics チームと協力して、さまざまなピープルデータソースを探索できるデータマートを構築しています。

- "mart" モデルは、簡単に分析できるように結合された dimensions と facts の組み合わせです。
- "rpt"（"report"）モデルは特定のユースケースのための特定のビジネスロジックで構築されます。

各モデルの下には、分析にも使用できるクリーンな dimensions と facts の系譜があります。このリストには、ピープル分析のために作成されたすべての prep テーブル、dimensions、facts、および [Team Member Common ERD](https://lucid.app/lucidchart/17fbbbe5-f652-40e9-905e-1b07ec040520/edit?viewport_loc=153%2C6%2C1472%2C542%2CC6RZ78OfF1Bh&invitationId=inv_f6b923fd-02bb-4786-abd7-bf205c7d1da2) に基づいて今後の四半期で構築予定のものが含まれます。

### Prep、dimension、fact テーブル

|モデル名|テーブル種別|粒度|ソース|状態|ドキュメント|
| ------ | ------ | ------ | ------ | ------ | ------ |
|prep_team_member|Staging|Team Member ID × イベントごとに 1 行|Workday|完了| [DBT docs](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.prep_team_member) |
|dim_team|Dimension|Team ID × イベントごとに 1 行|Workday|完了| [DBT docs](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_team) |
|dim_team_member|Dimension|Team Member ID × イベントごとに 1 行|Workday|完了| [DBT docs](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_team_member) |
|fct_team_member_position|Fact|employee_id、team_id、effective_date、date_time_initiated の組み合わせごとに 1 行|Workday|完了| [DBT docs](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_team_member_position) |
|fct_team_member_status|Fact|employee_id、employment_status、status_effective_date の組み合わせごとに 1 行|Workday|完了| [DBT docs](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_team_member_status) |
|fct_team_status|Fact|employee_id、valid_from の組み合わせごとに 1 行|Workday|完了| [DBT docs](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_team_status) |
|fct_team_member_absence|Fact|Team Member ID、pto_uuid、absence_date の組み合わせごとに 1 行|Time Off By Deel|完了|[DBT docs](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_team_member_absence)|
|fct_team_member_history|Fact|Team Member ID と hired date ごとに 1 行|Workday|完了|[DBT docs](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_team_member_history)|
|fct_team_member_job_history|Fact|Team Member ID と `job_profile_workday_id` ごとに 1 行 |Workday|完了|[DBT docs](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_team_member_job_history)|
|fct_team_member_locality|Fact||Workday|計画中| DBT docs |
|fct_team_demographic|Fact||Workday|計画中| DBT docs |

### Marts

|モデル名|テーブル種別|粒度|状態|ドキュメント|
| ------ | ------ | ------ | ------ | ------ |
|mart_team_member_directory| Mart | employee ID ごとに 1 行| 完了 | [DBT docs](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_team_member_directory) |
|mart_team_member_absence| Mart | Team Member ID、pto_uuid、absence_date の組み合わせごとに 1 行| 完了 | [DBT docs](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_team_member_absence) |

## モデルの利用

### dim_team_member

このテーブルには、チームメンバーの業務情報と個人情報が含まれます。機密性のあるカラムは[動的マスキング](/handbook/enterprise-data/platform/#dynamic-masking)でマスクされ、Snowflake で **analyst_people** ロールが割り当てられているチームメンバーにのみ表示されます。このテーブルは[ハイブリッド SCD（Type 1 + Type 2）](/handbook/enterprise-data/platform/edw/#slowly-changing-dimensions--snapshots)です。

このテーブルには、現在のチームメンバー、開始日前に Workday でレコードが作成された新規採用者、2021 年以降に退職したチームメンバーに関する情報が含まれます。2021 年以前に退職したチームメンバーは現時点ではこのモデルには取り込まれていません。このテーブルの粒度は、**employee_id** × **valid_to/valid_from** の組み合わせごとに 1 行です。

<details>
<summary markdown="span">クエリ - リージョン別のチームメンバー数</summary>

```sql
SELECT
  region,
  COUNT(DISTINCT employee_id)
FROM
  PROD.COMMON.DIM_TEAM_MEMBER
WHERE
  is_current = TRUE AND is_current_team_member = TRUE
GROUP BY
  region
```

</details>

<details>
<summary markdown="span">クエリ - 現在のチームメンバー総数</summary>

```sql
SELECT
  COUNT(DISTINCT employee_id)
FROM
  PROD.COMMON.DIM_TEAM_MEMBER
WHERE
  is_current = TRUE AND is_current_team_member = TRUE
```

</details>

<details>
<summary markdown="span">クエリ - チームメンバー集団におけるキータレントの割合</summary>

*key_talent_status はマスクされたフィールドで、Snowflake で analyst_people ロールを持つチームメンバーのみクエリできます*

```sql
SELECT
  key_talent_status,
  COUNT(*) * 100 / SUM(COUNT(*)) OVER() AS key_talent_percentage
FROM
  PROD.COMMON.DIM_TEAM_MEMBER
WHERE
  is_current = TRUE AND is_current_team_member = TRUE
GROUP BY 1
```

</details>

### dim_team

**dim_team** には team（組織）情報が含まれます。各チームとその階層に関する情報が含まれます。これは [Type 2 SCD](/handbook/enterprise-data/platform/edw/#slowly-changing-dimensions--snapshots) です。

このテーブルの目的は、Workday の各組織の上位組織と階層を判定することです。さらに、このテーブルでは team name、manager、team member count、各組織の非アクティブ化日付などのチームデータも提供します。

このテーブルの粒度は、Team ID × イベントごとに 1 行です。

<details>
<summary markdown="span">クエリ - アクティブな組織の総数</summary>

```sql
SELECT
  COUNT(*)
FROM
  PREP.SENSITIVE.DIM_TEAM
WHERE
  is_current = TRUE AND is_team_active = TRUE
```

</details>

<details>
<summary markdown="span">クエリ - 現在のチームメンバー数 </summary>

```sql
SELECT
  SUM(team_members_count)
FROM
  PREP.SENSITIVE.DIM_TEAM
WHERE
  is_current = TRUE AND is_team_active = TRUE
```

</details>

### fct_team_member_position

**fct_team_member_position** には、チームメンバーの職務履歴（ジョブプロファイルやチームの変更を含む）が含まれます。チームメンバーのジョブプロファイルの履歴を詳細に提供します。このテーブルの粒度は、employee_id、team_id、effective_date、date_time_initiated の組み合わせごとに 1 行です。現在の雇用状態に関わらず、すべてのチームメンバーが含まれます。

<details>
<summary markdown="span">クエリ - エンティティごとのチームメンバー数</summary>

*Entity はマスクされたフィールドで、Snowflake で analyst_people ロールを持つチームメンバーのみクエリできます*

```sql
SELECT
  entity,
  COUNT(*)
FROM
  PROD.COMMON.FCT_TEAM_MEMBER_POSITION
WHERE
  is_current = true
GROUP BY 1
```

</details>

<details>
<summary markdown="span">クエリ - ポジション/ロール別のチームメンバー数 </summary>

```sql
SELECT
  position,
  COUNT(*)
FROM
  PROD.COMMON.FCT_TEAM_MEMBER_POSITION
WHERE
  is_position_active
    AND is_current
GROUP BY 1
```

</details>

<details>
<summary markdown="span">クエリ - 特定のジョブ専門分野を持つチームメンバー数 </summary>

```sql
SELECT
  COUNT(*)
FROM
  PROD.COMMON.FCT_TEAM_MEMBER_POSITION
WHERE
  (job_specialty_single LIKE '%ModelOps%' OR job_specialty_multi LIKE '%ModelOps%')
    AND is_current;
```

</details>

<details>
<summary markdown="span">クエリ - フランスのバックエンドエンジニアであるチームメンバー </summary>

*Entity はマスクされたフィールドで、Snowflake で `analyst_people` ロールを持つチームメンバーのみクエリできます*

```sql
SELECT
  *
FROM
  PROD.COMMON.FCT_TEAM_MEMBER_POSITION
WHERE
  position LIKE '%Backend Engineer%'
    AND entity = 'GitLab France S.A.S.'
     AND is_current
```

</details>

### fct_team_member_status

このテーブルには、退職理由、タイプ、exit impact、雇用状態が含まれます。機密性のあるカラムはマスクされ、Snowflake で `analyst_people` ロールが割り当てられているチームメンバーにのみ表示されます。**このテーブルには過去の退職のみが含まれます。**

このテーブルの粒度は、employee_id、employment_status、status_effective_date の組み合わせごとに 1 行です。

<details>
<summary markdown="span"> 退職が会社に影響を与えたチームメンバー数 </summary>

*Exit impact はマスクされたフィールドで、Snowflake で `analyst_people` ロールを持つチームメンバーのみクエリできます*

```sql
SELECT
  COUNT(*)
FROM
  PROD.COMMON.fct_team_member_status
WHERE
  exit_impact = 'Yes';
```

</details>

<details>
<summary markdown="span"> 自発的に退職したチームメンバー数 </summary>

*Termination type はマスクされたフィールドで、Snowflake で `analyst_people` ロールを持つチームメンバーのみクエリできます*

```sql
SELECT
  COUNT(*)
FROM
  PROD.COMMON.fct_team_member_status
WHERE
  termination_type = 'Resignation (Voluntary)';
```

</details>

<details>
<summary markdown="span"> 自発的に退職し、exit impact を引き起こしたチームメンバーが提供した退職理由 </summary>

*Termination type、termination reason、exit impact はマスクされたフィールドで、Snowflake で analyst_people ロールを持つチームメンバーのみクエリできます*

```sql
SELECT
  DISTINCT termination_reason
FROM
  PROD.COMMON.fct_team_member_status
WHERE
  termination_type = 'Resignation (Voluntary)'
    AND exit_impact = 'Yes';

```

</details>

### fct_team_status

このテーブルは `fct_team_member_status` と `fct_team_member_position` から派生した fact です。機密性のあるカラムはマスクされ、Snowflake で `analyst_people` ロールが割り当てられているチームメンバーにのみ表示されます。このテーブルは、`fct_team_member_position` テーブル（チームメンバーのポジションプロファイルへのすべての変更が、有効になったかどうかに関わらず含まれる）とは対照的に、effective date ごとにチームメンバーのポジションの変更を 1 つだけ含みます。このテーブルには将来の採用者は含まれず、今日時点で GitLab で勤務している人だけが含まれます。

<details>
<summary markdown="span">クエリ - フランスのバックエンドエンジニアであるアクティブなチームメンバー  </summary>

*Entity はマスクされたフィールドで、Snowflake で `analyst_people` ロールを持つチームメンバーのみクエリできます*

```sql
SELECT
  *
FROM
  PROD.COMMON.fct_team_status
WHERE
  position LIKE '%Backend Engineer%'
    AND entity = 'GitLab France S.A.S.'
      AND employment_status = 'Active'
        AND is_current
```

</details>

<details>
<summary markdown="span">クエリ - チームごとの自発的な辞職数 </summary>

*Termination type と termination reason はマスクされたフィールドで、Snowflake で `analyst_people` ロールを持つチームメンバーのみクエリできます*

```sql
SELECT
  team_id,
  COUNT(*)
FROM
  PROD.COMMON.fct_team_status
WHERE
    employment_status = 'Terminated'
       AND termination_type = 'Resignation (Voluntary)'
           AND is_current
GROUP BY 1;
```

</details>

<summary markdown="span">クエリ - マネジメントレベル別の辞職数（voluntary 対 involuntary） </summary>

*Termination type と termination reason はマスクされたフィールドで、Snowflake で `analyst_people` ロールを持つチームメンバーのみクエリできます*

```sql
SELECT
  management_level, COUNT(*)
FROM
  PROD.COMMON.fct_team_status
WHERE
    employment_status = 'Terminated'
       AND termination_type = 'Resignation (Voluntary)'
          AND management_level != 'Individual Contributor'
           AND is_current
GROUP BY 1;
```

</details>

### fct_team_member_history

このテーブルには、採用日や組織を離れた日などのチームメンバーの雇用履歴の詳細が含まれます。このテーブルは [Type 2 SCD)](/handbook/enterprise-data/platform/edw/#slowly-changing-dimensions--snapshots) です。

このテーブルの粒度は、`team member ID` と `hired date` の組み合わせごとに 1 行です。

<details>
<summary markdown="span">クエリ - 在籍期間情報付きのチーム名簿 </summary>

*現在のすべてのチームメンバーをその在籍期間とともに表示し、マネージャーがチーム構成を理解し長期勤続者を認識するのに役立ちます。*

```sql
SELECT 
    t.employee_id,
    e.full_name,
    e.position,
    e.team_manager_name,
    t.hire_date,
    DATEDIFF('month', t.hire_date, CURRENT_DATE()) AS tenure_months,
    ROUND(DATEDIFF('year', t.hire_date, CURRENT_DATE()), 1) AS tenure_years
FROM "PROD".common.fct_team_member_history t
JOIN PROD.COMMON_MART_PEOPLE.MART_TEAM_MEMBER_DIRECTORY e 
    ON t.employee_id = e.employee_id AND is_current= TRUE -- Team member's current information
WHERE e.team_manager_name = 'MANAGER_FULL_NAME'           -- Replace with preferred full name of the people manager
  AND t.term_date IS NULL                                 -- Only current team members
ORDER BY tenure_years DESC
```

</details>

### fct_team_member_job_history

このテーブルには、チームメンバーの職務履歴が含まれます。`job_grade` などの機密性のあるカラムは[動的マスキング](/handbook/enterprise-data/platform/#dynamic-masking)でマスクされ、Snowflake で **analyst_people** ロールが割り当てられているチームメンバーにのみ表示されます。このテーブルは[ハイブリッド SCD（Type 0 + Type 2）](/handbook/enterprise-data/platform/edw/#slowly-changing-dimensions--snapshots)です。

このテーブルには **Workday** からの情報が含まれます。このテーブルの粒度は、`team member ID` と `workday job profile id` の組み合わせごとに 1 行です。

<details>
<summary markdown="span">クエリ - キャリア進展パス分析（最も一般的なジョブ遷移）</summary>

```sql
WITH job_sequences AS (
    SELECT
        dim_team_member_sk,
        job_title AS current_job,
        LEAD(job_title) OVER(PARTITION BY dim_team_member_sk ORDER BY job_start_date) AS next_job
    FROM "PROD".COMMON.fct_team_member_job_history
)
SELECT
    current_job,
    next_job,
    COUNT(*) AS transition_count
FROM job_sequences
WHERE next_job IS NOT NULL
AND NOT current_job = next_job
GROUP BY current_job, next_job
ORDER BY transition_count DESC;
```

</details>

<details>
<summary markdown="span">クエリ - ジョブファミリー別のチームメンバーリテンション</summary>

```sql
WITH retention_by_job_family AS (
SELECT
    job_family,
    COUNT(DISTINCT dim_team_member_sk) AS total_team_members,
    COUNT(DISTINCT CASE WHEN is_active_team_member = TRUE THEN dim_team_member_sk END) AS active_team_members,
    ROUND((COUNT(DISTINCT CASE WHEN is_active_team_member = TRUE THEN dim_team_member_sk END) / COUNT(DISTINCT dim_team_member_sk)::FLOAT) * 100) AS retention_rate
FROM "PROD".common.fct_team_member_job_history
GROUP BY job_family
ORDER BY retention_rate DESC
)
SELECT * 
FROM retention_by_job_family
WHERE NOT active_team_members = 0 --Excluded deprecated job families
```

</details>

### fct_team_member_absence

このテーブルにはチームメンバーの欠勤情報が含まれます。機密性のあるカラムは[動的マスキング](/handbook/enterprise-data/platform/#dynamic-masking)でマスクされ、Snowflake で **analyst_people** ロールが割り当てられているチームメンバーにのみ表示されます。このテーブルは [Type 0 SCD](/handbook/enterprise-data/platform/edw/#slowly-changing-dimensions--snapshots) です。

このテーブルには **Time Off By Deel** からの情報が含まれます。このテーブルの粒度は、`team member ID` × `pto_uuid` × `absence_date` の組み合わせごとに 1 行です。

### mart_team_member_absence

このテーブルは `fct_team_member_absence` と `dim_team_member` から派生した mart です。機密性のあるカラムはマスクされ、Snowflake で `analyst_people` ロールが割り当てられているチームメンバーにのみ表示されます。このテーブルはワークスペーステーブル `wk_pto` の置き換えとなります。このテーブルは[ハイブリッド SCD（Type 0 + Type 2）](/handbook/enterprise-data/platform/edw/#slowly-changing-dimensions--snapshots)です。

このテーブルの粒度は、`team member ID` × `pto_uuid` × `absence_date` の組み合わせごとに 1 行です。

<details>
<summary markdown="span">クエリ - 2024 年の四半期ごとのあるチームメンバーの欠勤日数</summary>

```sql
WITH final AS (
  SELECT
    *,
    DATEDIFF(DAY, absence_start, absence_end) + 1 AS pto_days_requested,
    ROW_NUMBER() OVER (
      PARTITION BY
        employee_id,
        absence_date
      ORDER BY
        absence_end DESC,
        pto_uuid DESC
    )                                             AS pto_rank
  FROM prod.common_mart_people.mart_team_member_absence
  WHERE absence_date <= CURRENT_DATE
    AND pto_days_requested <= 25
    AND COALESCE(pto_group_type, '') != 'EXL'
    AND NOT COALESCE(absence_status, '') IN ('CEO Shadow Program', 'Conference', 'Customer Visit')
  QUALIFY pto_rank = 1
)

SELECT
  QUARTER(absence_date) AS quarter,
  absence_status,
  COUNT(absence_date)   AS absence_count
FROM final
WHERE full_name = 'John Doe'
  AND YEAR(absence_date) = 2024
GROUP BY QUARTER(absence_date), absence_status
ORDER BY quarter ASC, absence_count DESC;
```

</details>

### mart_team_member_directory

このテーブルは `fct_team_member_position` と `dim_team` から派生した fact です。機密性のあるカラムはマスクされ、Snowflake で `analyst_people` ロールが割り当てられているチームメンバーにのみ表示されます。このテーブルは、すべての Workday データが上流テーブルに含まれるようになった時点でレガシーテーブル `employee_directory_*` の置き換えとなります。

このテーブルの粒度は、チームメンバー × valid_from/valid_to の組み合わせごとに 1 行です。

<details>
<summary markdown="span">部門別の平均ロケーション係数</summary>

```sql
SELECT
    directory.division,
    DATE_TRUNC('month', dates.date_actual) AS month,
    ROUND(AVG(location_factors.location_factor),2) AS average_location_factor
  FROM PROD.COMMON_MART_PEOPLE.MART_TEAM_MEMBER_DIRECTORY AS directory
  INNER JOIN PROD.LEGACY.DATE_DETAILS AS dates
    ON dates.date_actual >= directory.valid_from
        AND dates.date_actual < directory.valid_to
  LEFT JOIN PREP.SENSITIVE.EMPLOYEE_LOCATION_FACTOR_SNAPSHOTS AS location_factors
    ON REPLACE(location_factors.bamboo_employee_number,',','') = directory.employee_id
        AND NOT (directory.valid_to <= location_factors.valid_from
          OR directory.valid_from >= location_factors.valid_to)
  WHERE location_factors.location_factor IS NOT NULL
      AND directory.is_current AND directory.is_current_team_member
  GROUP BY 1, 2
```

</details>

<details>
<summary markdown="span">チームメンバーごとの在籍期間バケット</summary>

```sql
SELECT
  employee_id,
  hire_date,
  DATEDIFF(day, hire_date, CURRENT_DATE())           AS tenure_in_days,
  CASE WHEN tenure_in_days BETWEEN 0 AND 183 THEN '0 - 6 Months'
       WHEN tenure_in_days BETWEEN 184 AND 365 THEN '6 - 12 Months'
       WHEN tenure_in_days BETWEEN 366 AND 1095 THEN '1 - 3 Years'
       WHEN tenure_in_days BETWEEN 1096 AND 2190 THEN '4 - 6 Years'
       WHEN tenure_in_days > 2191 THEN '6+ Years'
       ELSE null
   END                                                  AS tenure_bucketed
FROM PROD.COMMON_MART_PEOPLE.MART_TEAM_MEMBER_DIRECTORY
WHERE is_current AND is_current_team_member
```

</details>

## レガシーおよびその他のデータモデル

レガシーモデルとは、いずれは移行する予定だが、現在もまだレポーティングに使用されているモデルです。

### レガシー Workday データモデル

<details>
<summary markdown="span">クリックして展開</summary>

| データベース | スキーマ | テーブル名 | データ粒度 | 説明 | 備考 |
| --- | --- | --- | --- | --- | --- |
| prod | legacy | [employee_directory_analysis](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.employee_directory_analysis) | `employee_id` × `date_actual` | 任意の時点での GitLab のチームメンバーの現在の状態を示します。これはヘッドカウント、チームサイズ、またはチームメンバーに関するピープル関連の分析に使用するモデルです。現在および過去のチームメンバーと、部門・部署・コストセンター、採用日／退職日を含みます。 | |
| prep | sensitive | [employee_directory_intermediate](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.employee_directory_intermediate) | `employee_id` × `date_actual` | 機密情報を含みます。GitLab チームメンバーの最新のポジションに関するすべての情報のマスターコレクション。 | |
| prep | sensitive | [workday_terminations](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.workday_terminations) | `employee_id` | People Analytics チームが退職データを正確に報告できるよう、退職理由と exit impact を提供します | |
| prep | workday | [blended_directory_source](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.blended_directory_source) | `employee_id` × `uploaded_at` × `source_system` | 下流モデルで使用されるチームメンバーデータの日次アップロード。 | Snowflake でのデータ問題を監査するのに役立つソース |

</details>

### Greenhouse データモデル

<details>
<summary markdown="span">クリックして展開</summary>

| データベース | スキーマ | テーブル名 | データ粒度 | 説明 | 備考 |
| --- | --- | --- | --- | --- | --- |
| prod | workspace_people | [rpt_hires](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_hires) | `application_id` | これは talent acquisition 専用のレポートで、受諾されたオファーを採用としてカウントします。 |  |
| prep | greenhouse | [greenhouse_application_stages_source](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.greenhouse_application_stages_source) | `application_id` × `stage_id` × `stage_entered_on` | このテーブルは、応募が取りうるすべてのステージの履歴アクティビティです。各行は応募が取りうるステージと、応募がそのステージに入った／離れたタイムスタンプを表します。注意点：このテーブルには、応募が属するジョブから取得した、応募が取りうるそれぞれのステージに対する行が含まれます。したがって、応募がまだ到達していない、または到達しない（応募が拒否された場合）ステージの行が存在することがあります。 |  |
| prep | sensitive | [greenhouse_recruiting_xf](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.greenhouse_recruiting_xf) | `application_id` | 提出されたすべての応募と、オファーデータ、greenhouse の部署（関連 division）、ソースデータを 1 箇所にまとめて表示します。 |  |

</details>
