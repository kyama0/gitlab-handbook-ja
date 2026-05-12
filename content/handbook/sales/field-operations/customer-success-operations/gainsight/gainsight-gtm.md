---
title: "Gainsight: Go-To-Market 技術ドキュメント"
description: "このページは、Gainsight に関連するすべての技術ドキュメントを扱う GitLab ハンドブックの主要ページです。ツールのさまざまな機能と、統合と自動化のニーズを達成するために各機能をどのように使用するかが含まれています。"
upstream_path: /handbook/sales/field-operations/customer-success-operations/gainsight/gainsight-gtm/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T00:00:00Z"
translator: claude
stale: false
---

## Gainsight

Gainsight は、CSM が顧客をサポートしワークフローを管理するために使用するシステムです。Salesforce と Gainsight の統合はこのページに文書化されています。システム間でデータを同期する該当ルールと、システム内で設定されているシステムプロセスが含まれます。

### Gainsight ルールエンジン

Rules engine は Gainsight 内に構築されたビジネス自動化ツールであり、Gainsight 内で自動化を構築できるだけでなく、他のシステムへの同期も可能です。Salesforce から取り込むデータの強化（例: Company Hierarchies）から Call To Action の自動化、さらには Gainsight から Salesforce へのデータの同期まで、私たちのインスタンスでさまざまな方法で使用されます。詳細は [Gainsight ウェブサイトの Rules Engine](https://support.gainsight.com/gainsight_nxt/03Rules_Engine/Rules_Engine_(Bionic_Rules)/About/Rules_Engine_Overview) で確認できます。

## 双方向の同期: Salesforce <> Gainsight

- Salesforce と Gainsight 間の双方向の同期は、2つのシステム間のデータの整合性を保つために、スケジュールに従って調整する必要があります。これを達成するために、双方向のフィールドが更新されたときの日付スタンプを活用して、Salesforce に更新された情報のみを取り込みます。これが完了した後、すべてのデータを Salesforce にプッシュバックして、Gainsight 内で更新された情報が Salesforce に戻るようにします。これにより、両方のシステムが更新された情報を持つことが保証されます。

### 双方向のルール

- Bi-Directional Builds
  - Pull/Push CSM changes: このルールは、2つのシステム間でアカウントの Customer Success Manager を維持します。

### Salesforce から Gainsight へのデータの同期

#### Connectors 2.0

`Connectors 2.0` は Salesforce から Gainsight へのデータの主要な取り込み方法の1つとして使用され、2つのシステム間に存在するネイティブの組み込み統合です。コネクタは Salesforce インスタンスの Gainsight Integration ユーザーを使用して認証されます。コネクタとそのセットアップ方法の詳細については、[Gainsight ナレッジベース](https://support.gainsight.com/gainsight_nxt/Connectors/CRM_Integrations/Salesforce_Connector)を参照してください。

`Connectors 2.0` は、Salesforce インスタンスと Gainsight インスタンスの間で主に3つのオブジェクトを同期するために使用されます:

- Accounts
- Contacts
  - コンタクトの Upsert キーはメールアドレスです。これは、Gainsight で作成されたコンタクトの双方向同期に関して有用です。
- Salesforce ユーザー

Connector 2.0 を介して Salesforce から取り込まれるフィールドのリストについては、[Gainsight GTM Technical Documentation](https://docs.google.com/spreadsheets/d/15ppKZ164nRWbDm4LDm0FQBslxS5d8A6S2UJLWFDgzUA/edit#gid=0) を参照してください。

## ルールエンジン

`Connectors 2.0` は非常に強力ですが、コネクタを介して取り込まれるデータを Gainsight 内で正しく表示し、双方向データ同期を調整するために、データを補完する必要もあります。Gainsight に存在するルールがハイライトされ、Gainsight のさまざまな Rule Chains での使用を反映する方法で共有されています。

- Admin Daily - Load to Company

- Admin - Load Ultimate Parent Accounts

- Admin - Load Non-Customer Child Accounts

- Admin - Load Prospect Details to Company

    これらのルールは、Salesforce のアカウント階層と一致する方法で、アカウントを互いに正しく関連付けるために構築されています。

*これは CSM と最終的な成果について作業しているため、保留中です*。

- Admin - Set Company Status (Active/Inactive)

    これは、Gainsight でどのアカウントがアクティブであるかを制御する管理者ルールです。これは、顧客でないアカウントに対して追加で請求されないようにするのに役立ちます。

- Admin - Load Public Sector Flag

    Gainsight でアカウントを Public Sector としてフラグ付けします。これは共有設定にとって重要です。

- Admin - Load Inactive Users (Permission Set Based)

    このルールは、Gainsight でユーザーのステータスをアクティブまたは非アクティブとして維持します。Gainsight でのユーザーアクセスとステータスは、ユーザーが Salesforce で `Gainsight NXT` 権限セットに割り当てられているかどうか、また Salesforce のアクティブユーザーであるかどうかによって制御されます。

- Admin - Load Onboarding Start Date to Company

- Admin - Load Onboarding End Date to Company

- Admin - Load First Engagement Date to Company

- Admin - Load Last Activity Date to Company

    これらのルールは、Gainsight 内に存在し、ネイティブの Gainsight オブジェクトであるデータのロールアップとして機能します。

- Admin - Load Open Zendesk Ticket Count to Company

    このルールは、Gainsight 内の ZenDesk チケットに使用されるロールアップ計算として機能します。

- Admin - License Utilization Calculation

    これは、アカウントの計算フィールドを毎晩更新します。

- Admin - Delete UnMatch Records

    これは、Salesforce からマージされたか削除されたために削除されたアカウントをフラグ付けし、Gainsight から削除する必要があります。

- Admin - Load GS Contacts to SFDC

    これは、Gainsight と Salesforce の間のコンタクトの双方向同期の後半です。Gainsight は、重複を避けるために、External Contact Id がなく、Salesforce にまだ存在しない一意のメールアドレスを持つコンタクトを Salesforce にプッシュバックします。この External Id は、次のスケジュールされた同期で Connector 2.0 によって追加されます。

- SFDC RefEdge Reference Status

    これは、SFDC の Reference Profile に、Gainsight 指向の Reference Status がどのようなものであるかをプッシュします。目標は、Reference Team と Customer Success Team の間のより良い整列を得ることです。また、Reference Team が私たちの参照アカウントの改善点や問題について知るのにかかる時間を減らすのにも役立ちます。

## Admin Daily - Stage Adoption

- Admin - Load Stage Counts to Company
- Admin - Load Aggregated Stage Adoption Data to MDA

    これらのルールは、Gainsight 内のフィールドを計算するフィールドのロールアップとして機能します。

- Admin - Load Usage Ping Data to Company

    このルールは、最新の利用 Ping を Gainsight のアカウントに関連付けます。

## CTAs - Daily

- CTA - New Account CSM Assignment v2
- CTA - Onboarding v2
- CTA - Success Planning v2
- CTA - Post Onboarding Check-ins

    これらのルールは、さまざまな Calls To Action の作成をトリガーし、それぞれが独自の基準を持っています。

## スコアカードルール

- Set Score - Support Issues
- Set Score - Load Sentiment Scores from Timeline

    これらのルールは、Gainsight のさまざまな health スコアの更新と維持を支援します。Gainsight 内の全体的な health スコアを制御するのではなく、アカウントの health スコアの全体的なロールアップで使用される個々のサブスコアを制御します。

## Gainsight から Salesforce へのデータの同期

データはオブジェクトに応じていくつかの異なる方法で Salesforce に同期されます。Gainsight には、ベース統合を介して Salesforce に自動的に同期できるオブジェクトもありますが、他のオブジェクトとデータポイントは Rules Engine を介して同期する必要があります。

### Connector 2.0

Activity Timeline は Gainsight から Salesforce に自動的に同期されます

### Push to SFDC

さまざまなデータポイントが Gainsight から Salesforce にプッシュバックされます。Gainsight から Salesforce に同期されるフィールドとオブジェクトの完全なリストについては、[Using Gainsight Data in SFDC](/handbook/customer-success/product-usage-data/using-gainsight-data-in-sfdc/) を参照してください。

このルールはまた、誰かが Gainsight で連絡先を marketing communication からオプトアウトした人としてマークした場合、および Gainsight で作成されて Salesforce に存在しない連絡先について、Salesforce の連絡先にプッシュバックします。

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

<br>

## Zendesk から Gainsight へのデータの同期

Zendesk は `Connectors` を介して Gainsight に直接同期されます。これは Gainsight 内の `Connectors 2.0` とは異なります。

Zendesk、Gainsight、Salesforce 間の統合の制限により、チケットの同期が中断される可能性があります。

Zendesk は Zendesk Organization ID を Salesforce にプッシュしません。これに対処するために、Salesforce で Zendesk Organization ID の1回限りのアップロードが完了しました（[Zendesk Organization ID (ADMIN)](https://gitlab.my.salesforce.com/00N4M00000Ib2z1?setupid=AccountFields)）。このフィールドは、その後 Salesforce `Connectors 2.0` を介して Gainsight にインポートされます。Gainsight はこの Organization ID を使用して、Zendesk から同期されたチケットを Salesforce から同期されたアカウントと一致させます。

この欠点に対処するための[未解決の Issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/761) があり、私たちはこれに対する解決策を模索しています。この制限がフローに影響を与えると感じた場合、できるだけ多くのアカウントに Zendesk Organization ID が関連付けられるように、Salesforce に Zendesk ID を再インポートしてください。

Gainsight 内の会社ビューに表示されるチケットは、ドロップダウンリストから1つのレポートを選択することによって表示されます。特定のレポートが選択されると、その会社に関連付けられ、レポートのフィルター基準を満たす Zendesk チケットが表示されます。これは、Salesforce のリストビューに似た、アカウントに関連付けられた Zendesk チケットの異なるビューを作成することは比較的簡単ですが、1つの会社に固有のものであることを意味します。

## Gainsight ロール (バンドル)

以下は Gainsight のバンドル（権限セット）と関連するアクセスカテゴリです。

| 領域                                  | 機能                                                   | `Default Bundle` (Admin role) | `SAL_Users` | `View_Group` | `CSM Journey Orchestrator` | `TAM_Users` | `GS Admin sans provisioning` |
| ------------------------------------- | ------------------------------------------------------------ | ----------------------------- | ----------- | ------------ | -------------------------- | ----------- | ----------- |
| Home                                  | ダッシュボードビューアクセス                                        | ✓                             | ✓           |              | ✓                          | ✓           | ✓           |
| Timeline                              | エンドユーザーアカウント Timeline 履歴ビュー                       | ✓                             | ✓           | ✓            |                            | ✓           | ✓           |
| Cockpit                               | Calls to Action (CTAs) の表示と実行                      | ✓                             | ✓           | ✓            |                            | ✓           | ✓           |
| C360 Account                          | 顧客アカウントデータの表示と編集                          | ✓                             | ✓           |              | ✓                          | ✓           | ✓           |
| Surveys                               | アンケート作成へのアクセス                                     | ✓                             |             |              | ✓                          |             | ✓           |
| Surveys                               | アンケートの分析と NPS 結果の表示へのアクセス                                     | ✓                             | ✓            | ✓             | ✓                          | ✓            | ✓           |
| Admin: Journey Orchestrator           | one-to-many メールキャンペーンの作成と展開への管理アクセス | ✓              |             |              | ✓                          |             | ✓           |
| Admin: Data / Integrations Operations | Gainsight 顧客データと統合のための管理アクセス | ✓                       |             |              |                            |             | ✓           |
| Admin: Email Configuration            | CNAME セットアップを含むメールドメインのバックエンドへの管理アクセス | ✓                          |             |              |                            |             | ✓           |
| Admin: Reporting                      | レポートとダッシュボードの構築、共有、変更への管理アクセス | ✓                          |             |              |                            |             | ✓           |
| Admin: Rules Engine                   | CTA やその他の操作を実行するルール（ワークフロー）を作成するための管理アクセス | ✓                |             |              |                            |             | ✓           |
| Admin: User Provisioning              | 管理アクセス: ユーザープロビジョニングとデプロビジョニングアクセス    | ✓                             |             |              |                            |             |             |
