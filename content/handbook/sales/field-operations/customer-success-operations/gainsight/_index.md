---
title: "Gainsight 管理"
description: "このページは、GitLab が Gainsight をどのように管理しているかについて、データ構造、統合、その他の技術情報を示します。"
upstream_path: /handbook/sales/field-operations/customer-success-operations/gainsight/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-16T10:16:27-05:00"
---
<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Gainsight の概要

[Gainsight](https://www.gainsight.com/) は、Customer Success Managers (CSMs) と Enterprise Sales チームが顧客をサポートしワークフローを管理するために使用するカスタマーサクセスソフトウェアです。このページは、GitLab が Gainsight をどのように使用しているかについて、データ構造、統合、その他の技術情報を示します。Gainsight は CS Operations が所有しており、Sales Operations と Sales Systems はその継続的な拡張と改善において非常に活発で重要な役割を果たしています。

## Gainsight サポート

すべてのチームは、Gainsight に関する質問や問題について迅速な対応を得るために、`#gainsight-users` Slack チャンネルを使用してください。Customer Success Operations はすべてのカスタマーサクセスチームにサポートを提供しています。

### `#gainsight-users` チャンネルでの質問/懸念への対応を支援する CSOps チームのためのガイドライン

- 一般的な Gainsight の質問については、まずシステム内を探索して明らかな理由を見つけることができるかを確認します。例えば、簡単なセットアップの質問、レポートへのフィルターまたは列の追加、ルールが失敗する明らかな理由などです。
- 製品利用レポートの質問については、通常、懸念を直接サポート/対処できる SME を巻き込みます。製品利用レポートの SME は、必要に応じて他のチームメンバーをいつ巻き込むかを決定できます。SME: @nk312
- デジタルカスタマープログラムに関する質問については、SME @mharris3 と @jgamboa にお問い合わせください。
- Scale プログラム、プロセス、オペレーションに関する質問については、Scale SME: @rgorbanescu にお問い合わせください。

### チャンネル vs Issue で処理できる項目

- 解決するのに最小限の時間がかかる質問（15〜30分）はチャンネルで直接処理できます
- トラブルシューティング時間が積み重なる場合は、Issue を作成するよう依頼します
- 依頼が機能強化、つまり新しいプロセス、既存のプロセスへの変更、機能リクエストなどの場合は、Issue を作成するよう依頼します

セールスチームのために、私たちはこのエスカレーションパスを使用します:

1. ログイン問題（Tier 1 サポート）= Sales Ops
1. Sales Ops が問題をログイン問題よりも重要なものと診断した場合（Tier 2）
   - 権限/アクセスバンドルの更新 = CS Ops
   - sales-specific でないルール、コネクタなどの問題 = CS Ops
     - 例: SFDC でのコンタクトの読み込みに関する問題
   - sales-specific なルール、コネクタなどの問題
     - 例: アカウントプランニングをサポートするプロセス
     - 問題の診断と要件収集 = Sales Ops
     - 問題の修正 = CS Ops

### 解決された重要な古い Issue

- [`Instance Data` テーブル内の重複レコード](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/255)
- [Snowflake > Gainsight コネクタ - 既知のデータ問題](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/98)

## アカウント分類フィールド (FY24)

FY24 で行われたいくつかの変更により、アカウント分類目的で Gainsight で使用される一部のフィールドが変更されました。Sales 組織との整合性をより高めるために、Salesforce で使用されているのと同じフィールドと同じ命名規則が Gainsight でも使用されるようになりました。

### Gainsight でもう使用されていないフィールド

|フィールド                             | 説明                                                                                                                                           |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| CSM Team                         | CSM のチーム名。このフィールドは現在、報酬専用となっており、Gainsight では使用されていません。                                             |
| CSM Segment                      | CS で定義されたセグメント。これは FY23 で使用されていましたが、FY24 ではもはや適用されないため、Gainsight では使用されていません                                        |
| Account Owner Team               | アカウントの Sales アカウントオーナーのチーム名。このフィールドはもはや Salesforce で使用または保守されておらず、Gainsight でも使用されていません。|

### Gainsight で現在使用されているフィールド

|フィールド                             | 説明                                                                                       | 値の例                    |
|----------------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------|
| Sales Segment                    | 従業員数に基づく sales で決定されたセグメント                                              | Large, Mid-Market, SMB, PubSec    |
| Account Demographics: Geo        | アカウントが所在する世界の一般的な場所                                          | AMER, EMEA                        |
| Account Demographics: Region     | 該当する場合、Geo 内のより具体的な場所                                              | WEST, DACH                        |
| Account Demographics: Business Unit | ビジネスのタイプ                                                                           | ENTG, COMM                        |
| Account Demographics: Role Type  | アカウントを担当するチームのタイプ                                                     | MAJ, STR, KEY, TERR               |
| PubSec Type                      | アカウントが PubSec アカウントかどうか、世界のどこに位置するか (US 対 非 US) を判定  | US-PubSec, ROW-PubSec             |

## Gainsight のユーザープロビジョニング

[Gainsight ユーザー管理](/handbook/sales/field-operations/customer-success-operations/gainsight/gainsight-user-management)を参照してください。

## Gainsight のデータ構造

Gainsight は、一連の標準オブジェクトとカスタムオブジェクトを使用します。一部のオブジェクト/データは他のシステム（Salesforce など）に密接に対応し、他のオブジェクトは Gainsight 独自のものです。

### 階層

私たちは階層のために Gainsight でアカウント構造を使用します。アカウントの下にはサブスクリプションもあります。

### 標準オブジェクト

これらは Gainsight の主要な標準/システムオブジェクトの一部です:

| オブジェクト名 | データソース | 説明 |
| --- | --- | --- |
| Company | Salesforce Account、手動入力、Gainsight 内からの計算 | 特定のアカウントに関する情報。Salesforce の Account オブジェクトへのマッピング。最もよく使用されるオブジェクト。CSM が作業を行う場所。 |
| User | Salesforce User オブジェクト | Gainsight ユーザー、Salesforce の User オブジェクトによって入力 |
| Person/Company Person | Salesforce Contact オブジェクト、手動入力 | Gainsight のコンタクト、Salesforce の Contact オブジェクトにマップ |
| Scorecard オブジェクト |  |  |
| Activity Timeline | Gainsight での手動入力 |  |
| Call to Action | ルールエンジン、手動作成 |  |
| Success Plan | ルールエンジン、手動作成 |  |

<br>

### カスタムオブジェクト

これらは Gainsight で作成した主要なカスタムオブジェクトの一部です:

| オブジェクト名 | データソース | 説明 |
| --- | --- | --- |
| Customer Subscription | Salesforce Customer Subscription オブジェクト |  |
| Gainsight Opportunity | Salesforce Opportunity オブジェクト |  |
| Stage Adoption | Account オブジェクト (SFDC) |  |
| CSM History Tracking | Gainsight のリアルタイムルール |  |
| Zendesk Tickets V2 | Zendesk Organization および Ticket オブジェクト |  |
| MonthlyMart SelfManaged Usage Data | Snowflake | [Snowflake union された dbt テーブル](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_product_usage_paid_user_metrics_monthly)からのすべての基本的な製品利用。<br> この製品にはインスタンスごとに多くのレコードがあります。インスタンスごとに月ごとに1つのレコードが必要です。<br> これがどのようにセットアップされたかは[このビデオ](https://gainsight.hubs.vidyard.com/watch/oMU8aPjpxK7azFDr87iFVt?)で参照してください。 |
| Product Usage Metrics | Data Designer: MonthlyMart SelfManaged Usage Data <br> SaaS Usage Data | MonthlyMart テーブルに基づく計算されたメトリクス（A/B = C）。 |
| Instance Data | Data Designer: MonthlyMart SelfManaged Usage Data | 更新されたルールは、MonthlyMart データデザイナーからのフェッチを各 UUID/Hostname/SFDC_AcctID の組み合わせの単一レコードに重複排除するように設定されています。<br>  本番環境かどうかについて、どのインスタンス（セルフマネージド）かの SSOT。<br> このオブジェクトにより、CSM はインスタンスを次のいずれかとしてラベル付けできます:<br>  - Unknown (デフォルト) <br> - Production <br> - Non-production <br> - Obsolete <br> - Geo secondary mode  <br> このオブジェクトはインスタンスごとに1つのレコードのみを持ちます。 |

<br>

### Data designer オブジェクト

- [Issue #276: GS Documentation - Review Data Designer designs and add descriptions](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/276)
- Google ドキュメントで定義: [Gainsight Data Dictionary](https://docs.google.com/spreadsheets/d/1NxDPleVfKK1wnD0Cp8MdfWgGlUdMVdrK4WIIJKwyKMQ/edit?usp=sharing)

## Gainsight のコネクタと統合

[Gainsight のコネクタ](https://support.gainsight.com/gainsight_nxt/Connectors)は、他のシステムから Gainsight にデータを取り込むための主要な方法です。次の外部システム用のコネクタを設定しています:

- Zendesk
- Snowflake
- Salesforce

### Zendesk コネクタ - もはやアクティブではない

Zendesk コネクタには1つのアクティブなジョブ `Zendesk Sync - Tickets` があります。これは `Zendesk Tickets V2` カスタムオブジェクトにマップされ、毎日実行されます。

`Zendesk Ticket V2 MDA` オブジェクトにデータをロードする Connector ジョブで使用される Zendesk オブジェクト:

- Organizations
  - チケットに関連する組織/顧客に関する一般的な情報を含みます。
- Tickets
  - 個々の Zendesk チケットに関連する詳細データを含みます。
  - `Updated_at` フィールドは、クローズされた日付または最終変更日のタイムスタンプの指標として使用されます。
- Users
  - User オブジェクトには、内部（GitLab エージェント）および外部リクエスター（チケットを提出した人）のデータの両方が含まれます。
- Closed Date
  - Zendesk はチケットのクローズ日のフィールドを提供しません。代わりに、`ticket status == closed` のフィルターと一緒に `Updated_at` を使用します。これは、チケットの最後の更新がそのクロージャーであるという仮定に基づいています。

### Snowflake コネクタ

詳細は Product Usage Data セクションを参照してください。

執筆時点では、Snowflake コネクタは Data Designer と Adoption Explorer でのみ使用可能です。Gainsight の Connector 2.0 インターフェイスからはジョブを見ることはできません。

私たちはこれを Data Designer でのみ使用しています。`MonthlyMart SelfManaged Usage Data` オブジェクトで Snowflake から製品利用データを取り込みます。

ユーザー名とパスワードは Jeff Beaumont の 1Password アカウントに保存されています。権限をリセットする必要がある場合は、彼にお尋ねください。

### Salesforce コネクタ

`Connectors` は、Salesforce から Gainsight へのデータの主要なインポート方法の1つとして使用され、2つのシステム間に存在するネイティブの統合です。コネクタは、Salesforce インスタンスの Gainsight Integration ユーザーを使用して認証されます。コネクタとそのセットアップ方法の詳細については、[Gainsight ナレッジベース](https://support.gainsight.com/gainsight_nxt/Connectors/CRM_Integrations/Salesforce_Connector)を参照してください。

`Connectors` は、Salesforce と Gainsight のインスタンス間でこれらのオブジェクトを同期するために使用されます:

| ジョブ名               | SFDC オブジェクト           | Gainsight オブジェクト      |
| ---------------------- | --------------------- | --------------------- |
| SFDC Account Sync      | Account               | Company               |
| SFDC Opportunity Sync  | Opportunity           | Gainsight Opportunity |
| SFDC Contact Sync      | Contact               | Company Person        |
| SFDC Subscription Sync | Customer Subscription | Customer Subscription |
| SFDC User Sync         | User                  | User                  |

注: コンタクトの Upsert キーはメールアドレスです。これは、Gainsight で作成されたコンタクトの双方向同期に関して有用です。

<details>
<summary markdown='span'>Gainsight から Salesforce へのフィールドとデータ型</summary>

|          ソースフィールド (SFDC)         | ソースデータ型 |       ターゲットフィールド (Gainsight)       |
|:------------------------------------:|:----------------:|:------------------------------------:|
| Account ID                           | id               | SFDC Account ID                      |
| Account Name                         | string           | Name                                 |
| Employees                            | int              | Employees                            |
| CARR (All Child Accounts)            | currency         | ARR (All Child Accounts)             |
| CARR (Total)                         | currency         | ARR (Total)                          |
| Federal Account                      | boolean          | Federal Account                      |
| Region/Sub-Region                    | string           | Region/Sub-Region                    |
| Account Description                  | textarea         | Description                          |
| Partner Account                      | boolean          | Is Partner?                          |
| Account Owner Team                   | string           | Account Owner Team                   |
| Count of Active Subscription Charges | double           | Count of Active Subscription Charges |
| Count of Active Subscriptions        | double           | Count of Active Subscriptions        |
| Customer Advisory Board (CAB)        | boolean          | Customer Advisory Board (CAB)        |
| Customer Slack Channel (Internal)    | string           | Customer Slack Channel               |
| Executive Sponsor                    | reference        | Executive Sponsor                    |
| Solutions Architect                  | reference        | Solutions Architect                  |
| Support Level                        | picklist         | Support Level                        |
| Industry                             | picklist         | Industry                             |
| Account Type                         | picklist         | Company Type                         |
| CARR (This Account)                  | currency         | ARR                                  |
| Sales Segment                        | string           | Sales Segment                        |
| Ultimate Parent Account ID           | string           | Ultimate Parent SFDC Account ID      |
| Executive Sponsor Program Status     | picklist         | Executive Sponsor Program Status     |
| Region                               | picklist         | Region                               |
| Is a Child Account                   | double           | Is a Child Account                   |
| Sub-Region                           | string           | Sub-Region                           |
| Account Phone                        | phone            | Phone                                |
| Customer Since                       | date             | Original Contract Date               |
| Next Renewal Date                    | date             | Renewal Date                         |
| License Utilization (%)              | percent          | License Utilization (Rules Engine)   |
| Products Purchased (This Account)    | textarea         | Subscription                         |
| Sub-Industry                         | picklist         | Sub-Industry                         |
| Zendesk Organization ID (ADMIN)      | string           | Zendeal Org ID                       |
| User ID                              | id               | Account Owner                        |
| Manage Tech                          | picklist         | Manage Tech                          |
| Manage Appetite for Replacement      | picklist         | Manage Appetite for Replacement      |
| Manage Contract End Date             | date             | Manage Contract End Date             |
| Billing City                         | string           | Billing City                         |
| Billing Country                      | string           | Billing Country                      |
| Billing State/Province               | string           | Billing State/Province               |
| Billing Street                       | textarea         | Billing Street                       |
| Billing Zip/Postal Code              | string           | Billing Postal Code                  |
| Number of Licenses (This Account)    | double           | Licensed User Count                  |
| Parent Account ID                    | id               | Parent Company                       |
| Customer Success Manager            | id               | CSM                                  |

</details>

### Gainsight のルールチェーン

コネクタを介して取り込まれるデータを Gainsight 内で正しく表示し、双方向データ同期を調整するために、データを補完する必要があります。Gainsight に存在するルールがハイライトされ、Gainsight のさまざまな Rule Chains での使用を反映するように共有されています。

<details>
<summary markdown='span'>ルールチェーンリスト</summary>

これらのルールは、Salesforce のアカウント階層と一致するように、アカウントを互いに正しく関連付けるために構築されています:

- Admin Daily - Load to Company
- Admin - Load Ultimate Parent Accounts
- Admin - Load Non-Customer Child Accounts
- Admin - Load Prospect Details to Company
- Admin - Set Company Status (Active/Inactive)
- Admin - Load Public Sector Flag
- Admin - Load Inactive Users (Permission Set Based)
- Admin - Load Onboarding Start Date to Company
- Admin - Load Onboarding End Date to Company
- Admin - Load First Engagement Date to Company
- Admin - Load Last Activity Date to Company
- Admin - Load Open Zendesk Ticket Count to Company
- Admin - License Utilization Calculation
- Admin - Delete UnMatch Records
- Admin - Load GS Contacts to SFDC
- SFDC RefEdge Reference Status

</details>

### Gainsight から Salesforce への同期データ

以下のフィールドが Gainsight から関連する Salesforce フィールドにプッシュされます:

<details>
<summary markdown='span'>Gainsight から Salesforce へのデータ</summary>

| ソースオブジェクト (Gainsight)        | ソースフィールド (Gainsight)   | ターゲットオブジェクト (Salesforce) | ターゲットフィールド (Salesforce)          |
| -------------------------------- | -------------------------- | -------------------------- | ---------------------------------- |
| Company                          | Architecture Diagram Link  | Account                    | [GS] Architecture Diagram Link     |
| Company                          | Collaboration Project URL  | Account                    | GitLab Customer Success Project    |
| Company                          | Google Doc Notes           | Account                    | [GS] Google Doc Notes              |
| Company                          | Triage Issue URL           | Account                    | [GS] Triage Issue URL              |
| Company                          | Customer Slack Channel     | Account                    | Customer Slack Channel (Internal)  |
| Company                          | Geo?                       | Account                    | [GS] Geo?                          |
| Company                          | High Availability?         | Account                    | [GS] High Availability?            |
| Company                          | Stage Count                | Account                    | [GS] Stage Count                   |
| Company                          | Current Score --> Color    | Account                    | [GS] Health Score Hex code         |
| Company                          | First Value Date           | Account                    | [GS] First Value Date              |
| Company                          | CSM Prioritization         | Account                    | [GS] CSM Prioritization            |
| Company                          | Customer Conversion Source | Account                    | [GS] Customer Type                 |
| Company                          | Hosting                    | Account                    | [GS] Hosting                       |
| Company                          | Provider                   | Account                    | [GS] Provider                      |
| Unified Scorecard Fact - Company | CD Adoption                | Account                    | [GS] Health: CD                    |
| Unified Scorecard Fact - Company | CI Adoption                | Account                    | [GS] Health: CI                    |
| Unified Scorecard Fact - Company | DevSecOps Adoption         | Account                    | [GS] Health: DevSecOps             |
| Unified Scorecard Fact - Company | SCM Adoption               | Account                    | [GS] Health: SCM                   |
| Unified Scorecard Fact - Company | License Utilization        | Account                    | [GS] Health: License Utilization   |
| Unified Scorecard Fact - Company | Product Usage              | Account                    | [GS] Health: Overall Product Usage |
| Unified Scorecard Fact - Company | CSM Sentiment              | Account                    | [GS] CSM Sentiment                 |
| Company Person                   | Email Opt Out              | Contact                    | Email Opt Out                      |
| Company Person                   | Inactive Contact           | Contact                    | Inactive Contact                   |
| Company Person                   | GitLab Role                | Contact                    | Role                               |
| Company Person                   | Email                      | Contact                    | Email                              |
| Company Person                   | First Name                 | Contact                    | First Name                         |
| Company Person                   | Last Name                  | Contact                    | Last Name                          |
| Company Person                   | Title                      | Contact                    | Title                              |

</details>

Gainsight から Salesforce に同期されるフィールドとオブジェクトの完全なリストについては、[Using Gainsight Data in SFDC](/handbook/customer-success/product-usage-data/using-gainsight-data-in-sfdc/)を参照してください。

## Gainsight のルールエンジン

[ルールエンジン](https://support.gainsight.com/gainsight_nxt/03Rules_Engine)は Gainsight の主要な自動化ツールで、他のシステムとのデータの送受信、フィールド値の設定、CTAの作成、スコアの設定など、さまざまなアクションを実行できます。

Gainsight でルール失敗のメールに使用するチームのメールアドレス cs-ops@gitlab.com があります。

### CSM のアサインメントを SFDC にプッシュ

Gainsight は、このフィールド（GS では `CSM Name` というラベルが付けられた `CSM`、SFDC では `Customer Success Manager`）の単一のソースオブトゥルース (SSoT) です。

- このフィールドは Gainsight で更新され、Salesforce に一方向で同期されます。Salesforce ではロックされており、ユーザーはそこで更新できません。
- 更新は `Push CSM change to SFDC` というリアルタイムルールで行われます。これはフィールドが変更されるたびにトリガーされ、変更は数秒以内に Salesforce にロードされます。ルールは、Gainsight の `CSM` フィールドで見つかった SFDC ユーザー ID を使用して、Salesforce の `Customer Success Manager` フィールドにプッシュします。

### CSM History Tracking オブジェクト

このオブジェクトを使用して、アカウントの CSM が変更されたときにレポートを取得できます。

`CSM Change Date Stamp` ルールは、すべてのアカウントについて、Gainsight の `CSM` フィールドが変更されるたびに実行されます。次のような情報を `CSM History Tracking` オブジェクトにロードします:

- 古い CSM 名
- 新しい CSM 名
- `CSM` フィールドが変更されたタイムスタンプ

`CSM First Assigned Date` という `Company` オブジェクトのフィールドは、アカウントごとの CSM Change Date Stamp の MIN 日付に基づいて作成されました。

### Gainsight CTA と Success Plan の作成

Gainsight に CTA や Success Plan などのアイテムを作成するルールがいくつかあります。注目すべきルールは次のとおりです:

- Assignment needed CTA
- Onboarding CTA
- Triggered when an opportunity is greater than $50k
- EBR cta
- ROI success plan

### スコアの設定

Gainsight のすべてのスコアカード測定値は、ルールを使用して設定されます。

設定されているルール:

- Baseline rule
- Changes rule
- Blanks rule
- CSM sentiment
- Engagement
- ROI
- Data designers (null)

#### スコアカード測定値を null にするルール

非 CSM 所有のアカウント、または CSM がアカウントに割り当てられていない場合に、Health Score 測定値（ROI、Engagement、CSM Sentiment）を null にするルールがあります。このルールは月曜日に週に1回実行されます。

### Admin Daily - Stage Adoption

これらのルールは、Gainsight 内のフィールドを計算するフィールドのロールアップとして機能します:

- Admin - Load Stage Counts to Company
- Admin - Load Aggregated Stage Adoption Data to MDA

## 古いレコードの削除とマージ

Salesforce でアカウントレコードが削除またはマージされたとき、Gainsight で一致するレコードは自動的には削除/マージされません。これらのレコードをキャッチして Gainsight でクリーンアップするために、それらを識別するためのいくつかのルールとレポートがあります。

### ルール

- `Admin - Mark old Account records to be Deleted/Merged`: このルールは、Salesforce のすべてのアカウントのリストと Gainsight のすべてのアカウントのリストを取り込みます。次に、リストを比較し、Gainsight に存在するが Salesforce には存在しないアカウントのみを保持します。ルールは、CSM 名、CTA、Success Plan、Timeline の活動など、Gainsight レコードに重要な情報が添付されているかどうかも確認します。Gainsight レコードにこれらの項目がある場合、ブールフィールド `Merge?` がチェックされます。アカウントにこれらの項目がない場合、フィールド `Delete?` がチェックされます。アカウント名にも「TO BE MERGED NO LONGER IN SALESFORCE」または「TO BE DELETED NO LONGER IN SFDC」が付加されます。
  - ルール `Load to Company: Count CTAs`、`Load to Company: Count Success Plans`、`Load to Company: Last Timeline Activity` はすべてアカウントに関する情報を計算し、それが `Admin - Mark old Account records to be Deleted/Merged` ルールでアカウントをマージまたは削除する必要があるかどうかを判断するために使用されます。

### レポート

以下のレポートは、Gainsight の CS Ops ダッシュボードにあります。これらのレポートは、チームのメンバーが毎週レビューするよう促すために、月曜日の朝に CS Ops のメールアドレスに送信されるようにスケジュールされています。

- `Accounts Flagged to Merge`: このレポートは、`Merged?` フィールドがチェックされたアカウントを識別します。このレポートに表示されるアカウントは、レビューして正しいアカウントとマージする必要があります。これは、Gainsight の Data Operations セクションで、`Merge?` = Yes のアカウントにフィルタリングすることで行えます。Gainsight でのアカウントのマージの詳細は、[Gainsight ドキュメンテーションウェブサイト](https://support.gainsight.com/gainsight_nxt/02Data_Management/Managing_Data_in_Gainsight/Company_Merge)で見つけることができます。
- `Accounts Flagged to Delete`: このレポートは、`Delete?` フィールドがチェックされたアカウントを識別します。これらのアカウントは、Gainsight から完全に削除する必要があります。これは、Gainsight の Data Operations セクションで、`Delete?` = Yes のアカウントにフィルタリングすることで行えます。Gainsight でのアカウントの削除の詳細は、[Gainsight ドキュメンテーションウェブサイト](https://support.gainsight.com/gainsight_nxt/02Data_Management/Managing_Data_in_Gainsight/Data_Operations_-_Old#Delete_Records)で見つけることができます。

#### ダッシュボードのリセットに関する GS Admin クイックヒント

私たちの Gainsight ユーザーとチャンピオンの一部は、GS ダッシュボードに追加された新しいフィールド、フィールド値が見えないと報告しています。これが発生する既知の理由の1つは、Gainsight がより迅速にロードするためにダッシュボードをキャッシュすることです。これには、ダッシュボードの状態とレポートのデータの両方が含まれます。GS Admin がダッシュボードに変更を加えると、ユーザーはまだキャッシュされたバージョンのダッシュボード（以前のバージョン）を見る可能性があります。

キャッシュをリセットするには、GS Admin は次のいずれかのアクションを取ることができます:

1. 「Save Layout」の横にある3つのドットをクリックし、「Clear State」を選択します。これはキャッシュされた状態をクリアし、次回ユーザーがダッシュボードをロードするときに、ダッシュボードの最新バージョンになります。
2. GS Admin はダッシュボードにフィルターを追加して削除することができます。フィルターを追加する行為は自動的に状態をクリアします。

## Gainsight の同期タイミング

Gainsight は、Salesforce に情報をプッシュバックする前に、まず Gainsight に更新、新しい顧客アカウントなどを同期します。

| ルール | ルールタイプ | 時刻 | 日タイプ |
|---|---|---|---|
| User、Company、Company Person の同期 | Connector 2.0 | 12:00AM PST | 毎日 |
| Admin Daily - Load to Company | Gainsight Rules Engine | 3:00AM PST | 毎日 |
| Admin Daily - Stage Adoption | Gainsight Rules Engine | 3:30AM PST | 毎日 |
| Scorecard Rules | Gainsight Rules Engine | 4:00AM PST | 毎日 |
| CTAs - Daily | Gainsight Rules Engine | 4:30AM PST | 毎日 |
| Bi-directional Builds - Weekday | Gainsight Rules Engine | 5:00AM PST | 平日 |
| Push to SFDC - Weekday | Gainsight Rules Engine | 5:30AM PST | 平日 |
| Push to SFDC - Weekend | Weekend | 9:00AM PST | 週末 |
| Bi-directional Builds - Weekend | Weekend | 8:00AM PST | 週末 |

## 推奨事項

用語の整理方法を明確にするために、コード化標準と命名規則を使用します。

| Gainsight 機能                  | 管理者のベストプラクティス                                                                                                                                                                                                                                                                                                                                                                                                               | 例                                                                                                                                                                  |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Rules                              | 各ルールの先頭は、その主要な「アクションまたは目的」で名前を付ける必要があります。常にルールに目的の明確な説明が含まれていることを確認してください。<br><br>構築中でまだライブしていない新しいルールを作成するときは、ルール名を STAGING で開始して、現在ビルドプロセスにあるルールが明確になるようにします。これらのルールは STAGING フォルダに入れ、ライブになったら新しい該当するフォルダに移動する必要があります。 | {Insert Name of CTA} Set Score: {Insert Name of Scorecard Measure} Load to {Object}: {Insert Name of Data Load Task}<br><br>Load to People: Load Contact Role from Oppty |
| Folders                            | 各タイプの Rule に対してフォルダを作成する必要があります                                                                                                                                                                                                                                                                                                                                                                                   | (CTA Rules, Load to Object Rules, Set Score Rules, etc).                                                                                                                 |
| Rule Chains                        | より効率的な管理とワークフローのために、該当する場合はルールを Rules チェーンに入れる必要があります。                                                                                                                                                                                                                                                                                                                                                 | CTA ルールを CTA Rule Chain にグループ化します。Scorecard ルールを Scorecard Rule Chain にグループ化します。                                                                                |
| Inactive Rules                     | 非アクティブなルールについては、将来何らかの理由で参照する必要がある場合は、ルールを無効にし、廃止されたフォルダに入れます。将来参照または使用する必要のないルールについては、インスタンスをクリーンに保ち、非アクティブなルールの数を少なく保つために、ルールを完全に削除します。                                                                                                                           |                                                                                                                                                                          |
| Reports and Dashboards             | レポートの命名は、各管理者の裁量に任せて適切に命名する必要があります。テスト目的で作成またはクローンされたレポートを削除するアクティブな状態を維持してください。もう必要ないレポートは保持しないでください。                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                          |
| Report Folders                     | レポートフォルダの最良の命名規則は、レポートが誰のために作成されたか、またはレポートの一般的な目的のいずれかで命名することです。                                                                                                                                                                                                                                                                                                                                                                                                          | C360 Reports TAM Reports Manager Reports Executive Reports                                                                                                               |
| Dashboards                         | ダッシュボードは、ダッシュボードの目的/意味、またはダッシュボードが作成されたユーザープロファイル/チームを明確に示すように命名する必要があります。                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                          |
| Dashboard Folders                  | ダッシュボードフォルダの作成は、多くの場合不要であり、繰り返しになる可能性があります。Gainsight インスタンスが非常に大きく、多くの異なるユーザープロファイル（TAM、Onboarding、CSM など）がある場合に有用です。使用されていないダッシュボードまたはダッシュボードフォルダを削除します。廃止されたダッシュボードを保持する強い理由はめったにありません。                                                                                                 |                                                                                                                                                                          |
| Data Model Improvements and Upkeep | Data Management から MDA データテーブルを管理するとき、技術的負債を制限するために常に未使用のデータテーブルを削除します。存在すべきテーブルは、アクティブまたはステージングのものだけです。すべてのカスタム MDA テーブルに説明を常に追加します。説明は、テーブルにどのデータが存在するかを明確に示す必要があります。                                                                                                                             |                                                                                                                                                                          |
| Journey Orchestrator               | 古いまたは未使用のテンプレート、および将来分析を参照する必要がない、もう使用されていない古いプログラムを削除します。さまざまなタイプのプログラム用にフォルダを作成します                                                                                                                                                                                                                                                                                                                                                                     | (Onboarding Programs, Adoption Programs, Retention Programs, Growth Programs)                                                                                            |
| Templates                          | Email Assist または Programs で使用されるテンプレートについては、すべてのテンプレートを次のように開始します                                                                                                                                                                                                                                                                                                                                                                                                                                       | Email Assist: {Insert Template Name} or Email Program: {insert Template Name} Email # - subject Example: Email Onboarding Program: Email 1 - Intro to GitLab             |
| Email Template Folders             | メールの目的を示すメールテンプレートフォルダを作成します                                                                                                                                                                                                                                                                                                                                                                                              | Email Assist Templates Onboarding Templates Renewal Templates                                                                                                            |

## ルールタイトルのラベリング

ルールを作成するときは、整理と明確化のためにルールタイトルに次のプレフィックスを追加します:

- STAGING: テストされている/ライブでない/アクティブでないまたはスケジュールされていないルール用。テストが完了したら削除/非アクティブ化または名前を変更することを意図しています。
- OTR: 一度実行されるルール。これらは、履歴データの読み込み、フィールドのクリアなどの特定の状況で使用されます。使用後は非アクティブ化する必要があります。
- Load to SFDC: Salesforce にデータをプッシュするルール。例: Load to SFDC - Account Attributes
- Load to Company/GS Object Name: Gainsight オブジェクトを更新するルール。例: Load to Company - Last Timeline Activity
- CTA
- Set Score

ラベリングの詳細については、[この Issue](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/42) を参照してください。

<details>
<summary markdown='span'>Gainsight ルールラベルの推奨事項</summary>

| Gainsight 機能 | 管理者の推奨事項 | 例 |
| --- | --- | --- |
| Rules | <ul><li>各ルールの先頭は、その主要な「アクションまたは目的」で名前を付ける必要があります。</li><li>常にルールに目的の明確な説明が含まれていることを確認してください。</li><li>構築中でまだライブしていない新しいルールを作成するときは、ルール名を STAGING で開始して、現在ビルドプロセスにあるルールが明確になるようにします。これらのルールは STAGING フォルダに入れ、ライブになったら新しい該当するフォルダに移動する必要があります。</li></ul> | `{Insert Name of CTA}` Set Score: `{Insert Name of Scorecard Measure}` Load to `{Object}: {Insert Name of Data Load Task}` Load to People: Load Contact Role from Oppty |
| Folders | 各タイプのルールに対してフォルダを作成する必要があります。 | (CTA Rules, Load to Object Rules, Set Score Rules, etc). |
| Rules Chains | より効率的な管理とワークフローのために、該当する場合はルールをルールチェーンに入れる必要があります。 | CTA ルールを CTA Rule Chain にグループ化します。Scorecard ルールを Scorecard Rule Chain にグループ化します。 |
| Inactive Rules | <ul><li>非アクティブなルールについては、将来何らかの理由で参照する必要がある場合は、ルールを無効にし、廃止されたフォルダに入れます。</li><li>将来参照または使用する必要のないルールについては、インスタンスをクリーンに保ち、非アクティブなルールの数を少なく保つために、ルールを完全に削除します。</li></ul> |  |
| Reports and Dashboards | <ul><li>レポートの命名は、各管理者の裁量に任せて適切に命名する必要があります。</li><li>テスト目的で作成またはクローンされたレポートを削除するアクティブな状態を維持してください。</li><li>もう必要ないレポートは保持しないでください。</li></ul> |  |
| Report Folders | レポートフォルダの最良の命名規則は、レポートが誰のために作成されたか、またはレポートの一般的な目的のいずれかで命名することです。 | C360 Reports CSM Reports Manager Reports Executive Reports |
| Dashboards | ダッシュボードは、ダッシュボードの目的/意味、またはダッシュボードが作成されたユーザープロファイル/チームを明確に示すように命名する必要があります。 |  |
| Dashboard Folders | <ul><li>ダッシュボードフォルダの作成は、多くの場合不要であり、繰り返しになる可能性があります。Gainsight インスタンスが非常に大きく、多くの異なるユーザープロファイル（Onboarding、CSM など）がある場合に有用です。</li><li>使用されていないダッシュボードまたはダッシュボードフォルダを削除してください。廃止されたダッシュボードを保持する強い理由はめったにありません。</li></ul> |  |
| Data Model Improvements and Upkeep | <ul><li>Data Management から MDA データテーブルを管理するとき、技術的負債を制限するために常に未使用のデータテーブルを削除します。存在すべきテーブルは、アクティブまたはステージングのものだけです。</li><li>すべてのカスタム MDA テーブルに説明を常に追加します。説明は、テーブルにどのデータが存在するかを明確に示す必要があります。</li></ul> |  |
| Journey Orchestrator | <ul><li>古いまたは未使用のテンプレート、および将来分析を参照する必要がない、もう使用されていない古いプログラムを削除します。</li><li>さまざまなタイプのプログラム用にフォルダを作成します。</li></ul> | (Onboarding Programs, Adoption Programs, Retention Programs, Growth Programs) |
| Templates | Email Assist または Programs で使用されるテンプレートについては、すべてのテンプレートを次のように開始します | Email Assist: `{Insert Template Name}` または Email Program: `{insert Template Name}` Email # - subject Example: Email Onboarding Program: Email 1 - Intro to GitLab |
| Email Template Folders | メールの目的を示すメールテンプレートフォルダを作成します | Email Assist Templates Onboarding Templates Renewal Templates |

</details>

### 説明の推奨事項

- ルールを作成するときは常にルールの説明を追加してください。
- 説明に GitLab Issue へのリンクを記載します: [Issue #275: GS Documentation - Review rule descriptions and titles](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/275)

## Gainsight スコアカード

私たちは現在、次のスコアカードグループと測定値を使用しています:

| グループ名 | 測定値名 | ルールと方法論 |
| --- | --- | --- |
| Customer Outcomes | ROI |  |
| Customer Sentiment | CSM Sentiment |  |
|  | Engagement |  |
| Support Experience | Support Issues |  |
| Product Usage | License Usage |  |
|  | User Engagement |  |
|  | SCM Adoption |  |
|  | CI Adoption |  |
|  | DevSecOps Adoption |  |

<br>

## Gainsight の製品利用データ

製品利用データを Snowflake から直接 Gainsight に取り込みます。`MonthlyMart SelfManager Usage Data` という Data Designer プロジェクトを使用します。

Gainsight の Snowflake との統合はまだ新しいため、データをインポートするために Data Designer プロジェクトを使用します。Gainsight が Snowflake 接続を強化したら、必要に応じて Connector ジョブを使用できるようになります。

(完了予定:)

- 識別子の説明と、なぜ複数の識別子があるのか
- インスタンスがアカウントにどのようにロールアップするか
- インスタンスのさまざまなタイプ

### トラブルシューティングのヒント

- Gainsight で null 値が表示される場合、Snowflake を確認してください。Snowflake に値があり Gainsight にない場合、Data Designer のリセットとレポートの更新を試してください。

### redis、namespace_ids、および snowplow コレクションの説明

データチームは、新しい Automated Service Ping プロセスのソースとして Snowplow を使用していません。代わりに、GitLab.com postgres と GitLab.com Redis カウンターのクローンを使用します。

これが私たちが持っている4つのタイプの Service Ping です:

1. Self-Managed Service Ping
1. Manual SaaS Service Ping
1. Automated SaaS Instance Service Ping
1. Automated SaaS Namespace Service Ping

SaaS Namespace Service Ping で使用されるネームスペースリストは、GitLab namespaces テーブルのクローンによって駆動されます。

**注意点**: Redis ソースのメトリクス（メトリクスディクショナリで redis または redis_hll として記載）は、まだネームスペースレベルで利用できません。当面、SaaS Namespace Service Ping には Postgres ソースのメトリクスのみが含まれます（2021-09-08 時点）。

### データ定義

- [UUID](https://docs.gitlab.com/ee/api/usage_data.html#export-service-ping-sql-queries): もともと一意の識別子として意図
- `Hostname`: 会社のオンプレミスサーバーの URL（例: gitlab.gainsight.com）
- `Namespace id`: ネームスペースの GitLab 定義 ID（SaaS）
- `Namespace name`: 顧客が定義したネームスペースの名前。注: PII のため多くが "BLOCKED" としてリストされています
- メトリクス定義: https://metrics.gitlab.com/
- `Ping_date`: Service Ping の特定の日付（例: 2021-08-11 12:00）。これは週次の Ping であるため、データの行は最新の Ping 値で更新されます。
  - ユースケース: このフィールドを使用して、Ping が送信された正確な日付を確認します。
- `Snapshot_month`: データの各行はスナップショット月に紐付けられます。ping_date フィールドは、現在の月の `Snapshot_month` の値を更新します。
  - 例: 月次値（フィールド）は週次（金曜日）で更新されます。7月を例にすると、ping date は更新されます（7月1日、7月8日、7月15日、7月22日……）が、snapshot_month は 2021-07-01 のままです。7月と8月を比較すると、7月31日（おおよそ）と8月7日（1週間遅れと仮定）の値が表示されます。言い換えれば、7月と8月の数値は非常に似ている場合があります。
  - ユースケース: 99% の時間、`ping_date` ではなく `snapshot_month` を使用します。
  - スナップショット月が表示されない理由:
    - サブスクリプションのキャンセル（5月にキャンセルし、そのためデータの送信を停止）
    - データ品質（どこかで何かが壊れた）
    - セルフマネージドの場合、顧客がデータの送信を無効化またはブロックした

### 製品利用データフロー

![Product Usage Data Flow Diagram](https://lucid.app/publicSegments/view/cba91861-d0aa-4f96-8848-56a2eec5798b/image.jpeg)

### 製品利用マッピング

GitLab の顧客はアカウントを持ち、複数のサブスクリプションを持つ可能性があります。各サブスクリプションは、本番またはステージングなど、複数のインスタンスを持つ可能性があります。

![Instance Mapping](https://lucid.app/publicSegments/view/74e7b4aa-6e71-4f60-83bb-6439c459358c/image.png)

Gainsight にはトライレベルの構造があるため、アカウントには関連する複数のインスタンスがあります。サブスクリプション ID をマップしてどのサブスクリプションにインスタンスがあるかを確認できますが、Gainsight での可視化は1対多の関係（Account:インスタンス）です。

### Journey Orchestrator のプログラム名

CS Ops チームが Journey Orchestrator で新しいプログラムを作成するとき、簡単に従える命名規則を活用することで、他の Gainsight 管理者がそのコンテキストを理解できるようになります。次の順序を使用するようにしてください:

1. Issue # - Customer Success Operations GitLab プロジェクトの関連する Issue 番号。
2. Segment - この JO プログラムが影響する CSM/CSE または Sales Segment。
3. Title - プログラムの目的または目標の説明。
4. Region - このプログラムが対応するように設計された地域/タイムゾーン。

命名規則は次のとおりです:

<strong>[Issue #] - Segment - Title (Region)</strong>

例: `1661 - Scale - CI Enablement  (APAC)`

このプログラム名から、Issue #1661 に関連し、Asia-Pacific 地域の Scale セグメント顧客に焦点を当てた CI Enablement プログラムであることがすぐに理解できます。プログラムを好みのフォルダに追加することを忘れないでください！

## Snowflake テーブル

- [Monthly](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_product_usage_wave_1_3_metrics_monthly) メトリクス
- [Latest](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_product_usage_wave_1_3_metrics_latest) メトリクス
- [Self-managed と SaaS](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_product_usage_paid_user_metrics_monthly)
