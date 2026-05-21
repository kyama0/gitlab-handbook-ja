---
title: "Enterprise Applications - CRM チーム"
description: "Enterprise Applications CRM チームは、GitLab 内のビジネスプロセスをサポートする専門アプリケーションを実装し、サポートしています。"
upstream_path: /handbook/sales/field-operations/sales-systems/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T10:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-24T23:47:10+00:00"
---


<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## <i class="fas fa-users" id="biz-tech-icons"></i> ミッション

CRM Systems は、SalesforceCRM および関連する Revenue Systems を主に扱い、日常的に使用するための信頼性が高く、スケーラブルで直感的なテクノロジープラットフォームを提供することによって、GitLab フィールド組織をサポートするために存在します。私たちの目標は、エンドユーザーに継続的に機能の形で価値を提供することです。私たちはまた、ビジネスとテクノロジーの間の結合組織として機能し、社内顧客から要件を収集し、技術仕様を設計し、ソリューションの提供を実行します。

## <i class="fas fa-users" id="biz-tech-icons"></i> 私たちのチーム（組織図）

- **Kiran Chinthapalli - Director, CRM Systems** GitLab handle: [kchinthapalli1](https://gitlab.com/kchinthapalli1) Slack handle: @Kiran Chinthapalli
- **Thiru Subramanian - Manager, CRM Systems** GitLab handle: [Thirusubramanian](https://gitlab.com/Thirusubramanian) Slack handle: @Thiru Subramanian
- **Analissa "Ana" Moreno - IT Enterprise Applications Administrator** GitLab handle: [ana-moreno](https://gitlab.com/ana-moreno) Slack handle: Ana Moreno
- **Andie Wheeler - IT Enterprise Applications Administrator** GitLab handle:[alwheel](https://gitlab.com/alwheel) Slack handle: @Andie Wheeler
- **Brett Latham - Senior Business Systems Administrator** GitLab handle: [Dlatham](https://gitlab.com/Dlatham) Slack handle: @Brett Latham
- **Mohamed Hussain - Business Systems Administrator** GitLab handle: [Moh.hussain](https://gitlab.com/Moh.hussain) Slack handle: @Mohamed Hussain
- **Pooja Chowdary Nayidi - IT Enterprise Applications Administrator** GitLab handle: [pnayidi](https://gitlab.com/pnayidi) Slack handle: @Pooja Chowdary Nayidi
- **Christian Böhme - IT Enterprise Applications Engineer** GitLab handle: [chrisboehme](https://gitlab.com/chrisboehme) Slack handle: @Christian Böhme
- **Deepak Kumar - IT Enterprise Applications Engineer** GitLab handle: [dkumarGitlab](https://gitlab.com/dkumarGitlab) Slack handle: @Deepak Kumar
- **Devansh Devansh - IT Enterprise Applications Engineer** GitLab handle: [DDevansh](https://gitlab.com/DDevansh) Slack handle: @Devansh
- **Harshit Bhandari - IT Enterprise Applications Engineer** GitLab handle: [hbhandari3](https://gitlab.com/hbhandari3) Slack handle: @Harshit
- **Shruti Pisharody - Senior IT Enterprise Applications Engineer** GitLab handle: [shrutisridharan](https://gitlab.com/shrutisridharan) Slack handle: @Shruti Sridharan
- **Kiran Chalamalasetty - Staff IT Enterprise Applications Engineer** GitLab handle: [kChalamalasetty](https://gitlab.com/kChalamalasetty) Slack handle: @KK (Kiran Kumar)

## Salesforce.com 変更管理プロセスと SDLC（ソフトウェア開発ライフサイクル）

Salesforce.com への変更にはさまざまな形式がありますが、すべてが以下の変更管理コントロールを備えています:

- すべての変更は、依頼または問題を定義し、追加の決定とビジネス要件をキャプチャする GitLab Systems Issue から始まります。
- すべての変更は、本番環境にデプロイまたは複製される前に、Salesforce サンドボックス環境で開発およびテストされます。
- すべての変更は、準備ができたら関連する GitLab Issue に Business DRI（リクエスト者）のサインオフを必要とし、デプロイウィンドウを決定します。
- すべての変更は、本番環境にデプロイまたは複製された後、Business DRI によってレビューされます。

CRM Systems ワークフローのために以下の終了ラベルステージを定義しました。ラベル名と SDLC の期待事項を参照してください:

### Salesforce.com への変更なし

| Field | Details |
|-------|---------|
| **Label** | `entapps-RM no-deployment-made` |
| **Description** | この issue は完了し、Closed に移動されます。Salesforce への設定、構成、コードの変更は行われませんでした。サインオフ不要、Change Set は使用されません。 |
| **Sign-Offs** | 不要 |
| **Gearset Utilized** | No |

1. これらの issue は、Salesforce への設定、構成、コードの変更を伴いませんでした。
2. 最も一般的なユースケースは、質問または調査の issue です。
3. 他のオペレーションチーム向けのバックフィルの一部としてのデータ変更は、このカテゴリに該当します。

### Salesforce Metadata API 経由で完了できないか、実用的でない変更

これは、Unsupported Metadata Types としてより一般的に知られています。

| Field | Details |
|-------|---------|
| **Label** | `entapps-RM manual-deployment` |
| **Description** | Salesforce の Metadata API でサポートされていない変更で、Gearset 経由でデプロイできないか、技術的には可能だが実用上の理由から手動で処理されるべき変更です。 |
| **Sign-Offs** | 必須 |
| **Gearset Utilized** | No |

#### Metadata API 経由でデプロイできない

Salesforce の Metadata API でサポートされていない変更で、Gearset 経由でデプロイできないものです。このリストは例であり、さらに多くのタイプを含む可能性があります。

| Category | Unsupported Items |
|----------|-------------------|
| **Object-Specific Changes** | Field Type 変更<br>Field API 名の変更 |
| **Territory Management** | Territory Assignment Rules<br>一般的な Territory オブジェクト管理 |
| **User-Specific Data** | Private list views<br>Personal reports/dashboards<br>Private email templates |
| **Organization Settings** | Company Information、Fiscal Year settings、Multi-Currency 初期セットアップ |

#### Gearset 経由でのデプロイが実用的でない

技術的には可能ですが、実用上の理由から手動で処理されるべき変更です。このリストは例であり、さらに多くのタイプを含む可能性があります。

| Category | Impractical Items |
|----------|-------------------|
| **User Management** | User レコード作成と更新<br>Permission set assignments<br>Profile assignments |
| **Environment-Specific** | Integration endpoints<br>Environment-specific custom settings |
| **Security Configs** | IP restrictions<br>Session settings<br>Login hours<br>Password policies |
| **Operational Data** | Queue membership<br>Public group membership<br>Manual sharing assignments |
| **Certificates & Keys** | SSO certificates<br>Security keys<br>Authentication providers |
| **Package Additions** | Managed packages<br>Unmanaged packages |

> **Unsupported Metadata Types に関する重要な注意:**
>
> - Metadata API でサポートされていないメタデータタイプは Org で一般的に使用されないため、ユーザーの大多数にとって懸念事項ではありません。
> - Salesforce のリリースごとに、Salesforce はますます多くのメタデータタイプをサポートしており、いずれはすべてをサポートしたいと考えています。
> - **手動での再作成が必要:** これらのメタデータタイプへの変更は、各 org で手動で再作成する必要があります。自動的にデプロイすることはできません。

### Salesforce Metadata API 経由の変更

| Field | Details |
|-------|---------|
| **Label** | `entapps-RM deployed-via-metadata-api` |
| **Description** | Salesforce Metadata API 経由で行うことができる変更。完全なタイプリストは [Salesforce の Metadata Coverage Report](https://developer.salesforce.com/docs/metadata-coverage) で確認できます。 |
| **Sign-Offs** | 必須 |
| **Gearset Utilized** | Yes |

#### メタデータ変更の例

このリストは、一般的な GitLab の変更に関連する例です。さらに多くのタイプは、[Salesforce の Metadata Coverage Report](https://developer.salesforce.com/docs/metadata-coverage) で確認できます。

| Category | Components |
|----------|------------|
| **Security & Access** | Field Level Security<br>Sharing Rules<br>Permission Sets<br>Profile adjustments<br>Roles |
| **Data Model** | Custom Fields<br>Custom Objects<br>Record Types<br>Field Dependencies |
| **User Interface** | Page Layouts<br>List Views<br>Custom Tabs<br>Lightning Pages<br>Apps |
| **Data Quality** | Validation Rules<br>Duplicate Rules<br>Picklist Values<br>Field Updates |
| **Process Automation** | Workflow Rules<br>Flows<br>Approval Processes<br>Assignment Rules |
| **Custom Code** | Apex Classes<br>Apex Triggers<br>Visualforce Pages<br>Lightning Components |
| **Integration** | Custom Settings<br>Custom Metadata Types<br>Remote Site Settings<br>Connected Apps |
| **Reporting** | Report Types<br>Custom Report Types |
| **Email & Communication** | Email Templates<br>Email Alerts<br>Letterheads |
| **Other Metadata** | Custom Labels<br>Static Resources<br>Quick Actions<br>Global Value Sets |

### 週次リリースプロセス

毎週、Salesforce Release Management チームは、**水曜日**にすべての推薦された issue をリリースする作業を行います。すべての issue は、その水曜日のリリースの対象となるためには、月曜日 EOD までに完全なサインオフと承認を持っている必要があります。

| Rule | Detail |
|---|---|
| Hard Cutoff | すべての issue は月曜日 EOD までに Weekly Deploy に追加する必要があります。 |
| Approval Requirement | 提出前に、すべてのサインオフが完了し、すべての MR がレビューおよび承認されている必要があります。 |
| RM Removal Right | 未承認または部分的に承認された issue はリストから削除され、関連する DRI に通知されます。 |
| Post-Cutoff Submissions | 月曜日 EOD 以降に追加された issue は IT Director レベルの承認が必要です。 |

**issue が締切を逃した場合、または緊急/緊急事態の場合はどうなりますか？**

月曜日 EOD 以降に提出された issue は、進行する前に **IT Director レベルの承認**が必要となります。

**部分的にしか承認されていない issue を追加した場合はどうなりますか？**

Release チームはそれをリリースリストから削除し、コメントとして追加します。責任ある DRI がタグ付けされ、その週は issue が前進しないことを通知されます。

### リリースプロセス要件

#### デプロイメントツール

すべての変更は Gearset を使用します。メタデータ変更を含むすべての issue には、リンクされた Merge Request が含まれます。

#### 変更管理

開発者と管理者は概説された通りにパイプラインを進みますが、本番環境へのデプロイは（権限により）禁止されます。Salesforce Release Management は Gearset 経由ですべての変更を検証およびデプロイします。**「セルフデプロイは行わない」**というルールは引き続き遵守されます。

#### コード変更の追加要件

Apex Code、Apex Trigger、または Visualforce Page を含む Merge Request は、デプロイメントを通過するために少なくとも 1 名の追加の Salesforce Engineer の承認が必要です。

詳細については、CONTRIBUTING ファイルをご覧ください。

#### Issue サインオフ

Issue サインオフには **3 つのサインオフ**が必要です:

1. **Business DRI:** Business User Acceptance Testing が証拠付きで完了
2. **Business Program Owner:** Business Process Owner サインオフ
3. **Systems Owner:** Systems Owner サインオフ

#### Release Management サインオフ

Gearset から作成されたすべての Merge Request は、すべての Issue サインオフを受け取り、CAB 承認が提供され、未解決の競合が解決されたことを確認するために Salesforce Release Management から最終承認を受けます。

> **注:** この最終的な Release Management ステップは、すべての「チェックリスト」項目が完了し、issue がデプロイメントの準備ができていることを確認するための運用上のレビューです。

#### すべてのデプロイメントタイプのデプロイ後ドキュメント

メタデータ型と非メタデータ型の両方のすべてのデプロイメントについて、スクリーンショットが提供されます。

- Gearset Deployment スクリーンショット必須
- Salesforce 本番環境内での変更の実装後レビュー、スクリーンショット付き
- すべての issue が MR にリンクされていることを確認

### Salesforce フィールド構成への破壊的変更

破壊的なフィールド変更（フィールドの削除など）は、Systems Issue を通じて提起する必要があります。

- CRM Systems チームは、問題のフィールドの影響と使用率を特定する作業を行います。
- Data チームは、フィールドが Snowflake テーブルに関与していないことを確認するためのセカンダリチェックとしてループに入ります。
- フィールドが削除に適しているか、以前に `[Deprecated]` とマークされており削除に適している場合、Gearset パイプライン経由で削除できます。

### Salesforce コードへの破壊的変更

これらのタイプの変更には、**Senior Director of CRM Systems** からのサインオフが必要です。これらの変更は、承認されたら Gearset パイプライン経由で完了されます。

- このようにして、私たちのパイプラインの整合性は健全に保たれ、問題のコードはすべての長期的な環境ブランチおよび `master` から削除されます。

### Milestone コンプライアンスチェックプロセス

Milestone を閉じる前に、以下のステップを実行します:

1. すべての非クローズ issue は削除するか、次の milestone に押し出す必要があります。
1. SalesSystems ラベルを持つすべてのクローズされた issue は、4 つのデプロイメントステージのいずれかで終わる必要があります。
1. すべての Issue は、デプロイメントステージに関連する必要なアーティファクトと承認を持っている必要があります。
1. 見つかった問題はすべて、クローズの遅延を避けるために、直ちに Sales Systems の scrum-master に提起する必要があります。

### 特別承認

以下の非標準状況のいずれかについて、Senior Director of Sales Systems から明示的かつ文書化された承認を求めてください:

1. 指定されたブロックアウト期間中のデプロイメント。
1. 非侵襲的な変更をセルフデプロイする必要性。
1. 重大な issue の時間的緊急トリアージのために、本番環境で非侵襲的な数式フィールドを作成する必要性。

これらの変更は `CMT: Emergency Change` として分類されます。これが発生する issue は、将来のコンプライアンスレビューのためにこのラベルでフラグ付けされる必要があります。

### 重要なフィールドの承認

以下のフィールドに関連するすべての変更には、Senior Director of Sales Systems からの直接の承認が必要です:

1. Opportunity.Net_ARR__c

### Quoting に関連する提案された変更の承認

1. Quoting に影響する全ての変更（例: クォートの作成、検証ルールの作成、クォート PDF の生成、Quote Templates、Approval Module の更新）は、本番環境にプッシュされる前に Deal Desk と Channel Ops からの承認が必要です。目標は、quoting プロセスを遅延させたり quote to cash ライフサイクルにボトルネックを作成する可能性のある変更が本番環境にプッシュされるのを防ぐことです。
1. 承認は、関連する issue のコメントセクションで、以下に概説する Designated Approver から確保されるべきです。
1. さらに、Sales チームの quoting エクスペリエンスに重大な影響を与える可能性のある変更が提案され、**以下にリストされていない**場合は、issue のコメントセクションで Sr. Manager, Deal Desk からのレビューを依頼してください。

|                                                                Change                                                               |                Designated Appover               |                    Back Up Approver                   |
|:-----------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------:|:-----------------------------------------------------:|
| Approval Module Updates  (Discounts, Payment Terms, Approval Structure/Hierarchy, Approval Notifications, Override Functions)       | Sr. Manager, Deal Desk                          | Manager, Deal Desk                                    |
| Channel Quote Approval Module Updates (Validation Rule changes, Discount Thresholds, Approval Structure/Hierarchy, Notifications)   | Manager, Channel Operations  Manager, Deal Desk | Sr. Manager, Deal Desk Manager, Partner Ops/Alliances |
| SuperSonics Logic Updates                                                                                                           | Sr. Manager, Deal Desk                          | Manager, Deal Desk                                    |
| Smart Templates Gate Logic                                                                                                          | Manager, Deal Desk                              | Sr. Manger, Deal Desk                                 |
| Proposed Validation Rules  (Ex. "X" Field is Mandatory on all quote objects, if "X" is blank, user cannot move forward with quote.  | Sr. Manager, Deal Desk &  Manager, Deal Desk    | Manager, Deal Desk                                    |
| Quote Templates / Docusign Order Forms                                                                                              | Manager, Deal Desk                              | Sr. Manager, Deal Desk                                |
| Quoting Workflow Changes  (Ex. Updating Button Behavior (Edit Quote vs Maintain Quote), removing fields or permissions)             | Sr. Manager, Deal Desk                          | Manager, Deal Desk                                    |

1. Deal Desk のレビューを保留中の承認の場合、`Deal Desk::Pending Approval` ラベルが DRI によって issue に追加されます。
1. 承認が確保されたら、Deal Desk は issue に `Deal Desk::Approved` ラベルを追加します。他の承認が不要な場合、systems は作業を進めることができます。
1. 提案された変更が quoting サイクルにマイナスの影響を与える場合、Deal Desk は issue に `Deal Desk::Need More Information` ラベルを追加します。Deal Desk は Issue DRI と協力して代替ソリューションを特定します。
1. 提案された変更が承認されない場合、Deal Desk は issue に `Deal Desk::Rejected` ラベルを追加します。代替ソリューションを提示する必要があります。

Channel Operations と Deal Desk は、quoting プロセスに関連するすべての更新で密接に連携します。目的は、提案された変更が、チームメンバーが認識していない可能性のある既存のプロセスと矛盾しないことを保証することです。

1. Channel Ops のレビューを保留中の承認の場合、`Channel Ops::Pending Approval` ラベルが DRI によって issue に追加されます。
1. 承認が確保されたら、Channel Ops は issue に `Channel Ops::Approved` ラベルを追加します。他の承認が不要な場合、systems は作業を進めることができます。
1. 提案された変更が Channel の優先事項にマイナスの影響を与える場合、Channel Operations は issue に `Channel Ops::Need More Information` ラベルを追加します。Channel Ops は Issue DRI と協力して代替ソリューションを特定します。
1. 提案された変更が承認されない場合、Channel Ops は issue に `Channel Ops::Rejected` ラベルを追加します。代替ソリューションを提示する必要があります。

**Quoting に関連する Channel Operations と Deal Desk の承認の SLA**

Channel Operations と Deal Desk は、上記のラベルを持つ各 issue を 1 営業日以内にレビューします。

## Salesforce 固有のプロセス、ポリシー、コントロール

### 変更分類

Salesforce での変更の性質上、上記のすべての変更は、特に明記されていない限り、監査とコンプライアンスの目的で `CMT: Comprehensive Change` として分類されます。Systems チームによって対処されるすべての issue でこのタグを過負荷にしないために、現時点では issue にこのタグを付けていません。

### Salesforce パスワードポリシー

GitLab の[パスワードセキュリティのベストプラクティス](/handbook/security/#gitlab-password-policy-guidelines)に従い、Salesforce 環境では、ユーザーが少なくとも 12 文字のパスワードを使用すること、およびパスワードリセット時に過去 24 個のパスワードのいずれも再使用してはならないことが要求されます。

### サンドボックスのリフレッシュ

#### 個人サンドボックスのリフレッシュをリクエストする方法

1. 上記の手順に従って Sales Systems チームの issue を作成します。
2. issue の説明に、サンドボックスの名前と、サンドボックスへのアクセスが必要なユーザーの名前を含めます。
3. この環境のリフレッシュ保留中にブロックされている他の issue にこの issue をリンクします。

#### SDLC プロセスの一部として維持されるサンドボックスのリフレッシュプロセス

1. Sales Systems チームは、各環境のリフレッシュのために、`SalesSystems` と `Sandbox Refresh Checklist` ラベルを持ち、リフレッシュ日が期日として設定された GitLab で追跡される issue を持っています。
   1. Sales Systems チームは、各主要なサンドボックスリフレッシュ用の標準テンプレートの使用に移行しました。すべてのステップは、各テンプレートに概説され、必要に応じて更新されます。
2. リフレッシュ日に、割り当てられた Sales Systems チームメンバーが本番環境でリフレッシュを開始します。注: サンドボックスのリフレッシュには完了まで最大 72 時間かかる場合があります。
3. リフレッシュが完了した後、Sales Systems チームは環境を設定するために以下のステップを完了します。

##### リフレッシュ前のステップ

|Pre-Refresh step|Owner|To be completed by|Environments|Action steps|
|-----|-----|-----|-----|-----|
|Date Alignment|Systems|Systems|Developer, Test1, GTLBUAT|チーム内でリフレッシュ日を整合させる|
|Date Publicization|Systems| Salesforce Release Mgmt|Developer, Test1, GTLBUAT|影響を受けるビジネスステークホルダーが認識し、リフレッシュ後の日付ステップに備えられるよう、リフレッシュ日を事前に公表する。|
|Sandbox Access Group Access|Salesforce Release Mgmt|Salesforce Release Mgmt||関連するサンドボックスへの最近のログインアクセスをレビューし、関連する Sandbox Access グループに不足している、または新しいユーザーを追加する。|
|Disable Marketo sync|Marketing Operations|Marketing Operations|Test1|MOPs に連絡して SFDC sync を無効化する（リフレッシュ前）。|

##### リフレッシュ後のステップ

|Post-Refresh step|Owner|To be completed by|Environments|Action steps|
|-----|-----|-----|-----|-----|
|必要に応じて新しい Sandbox Org ID と instance Id を取得|@ana-moreno|@ana-moreno||Refresh issue で Org ID/Instance ID を見つけて更新する|
|データのバックアップと匿名化|@ana-moreno|@ana-moreno (または Own アクセスを持つ Admin user)|Developer, Test1, Test2|サンドボックスのバックアップを作成し、バックアップ完了時にデータを匿名化する。|
|RingLead user の再接続|@rrosue|@rrosu|Test1|RingLead Integration user がリセットされ、1Password で更新された後、以下に進みます: <br> 1. RingLead にログインします。<br>2. SFDC connections ページを見つけます。<br>3. 本番環境 org のユーザーパスワード（1Password に保存）を使用して、RingLead Integration user で認証します。|
|CustomerDot の再接続|@ebaquet|@ebaquet & team||リセットするユーザーについては、関連する Refresh テンプレートの手順に従ってください。<br>1. その org の CustomerDot user をリセットし、Security Token を取得して 1Password で更新します。<br>2. Subscription Customer Portal Consumer Key と Consumer Secret を取得し、1Pass user も更新します。<br> 3. 再接続のために Fulfillment チームにログインを提供します。|
|User パスワードのリセット|@monalibhide <br> @xliawang <br> @bienrcb |@sheelaviswanathan  ||リクエスト/必要に応じてユーザーパスワードをリセットします。ユーザーが凍結されている場合は、解凍してリセットします。|
|API Tokens/Keys の再生成|@sheelaviswanathan |@sheelaviswanathan ||API キーを持つマネージドパッケージがある場合、Systems チームにキーの再生成を依頼し、1Password でユーザーを更新します|
|User Acceptance Testing を調整する「power users」がいる場合 - Delegated Administration 領域にエントリを作成して「login as」できるようにする|@sheelaviswanathan |@sheelaviswanathan |||
|Marketo Sync の再確立|Marketing Operations|Marketing Operations|Marketing Sandbox/Staging| 再接続前に staging で Lead と Contact に `Marketo Sync` (Boolean) の新しいフィールドを作成する必要があります。<br>このボックスはチェック解除されるべきですが、Mops プロファイルによって編集可能で、Mops のページレイアウトに追加されます。Mops は再接続前にカスタム sync を設定するために Marketo support にリクエストする必要があります。 |
|Marketo Sync の再認証 (Systems Tasks)|Sales Systems|Sales Systems|Staging|[Configure connected Oauth App](https://experienceleague.adobe.com/docs/marketo/using/product-docs/crm-sync/salesforce-sync/log-in-using-oauth-2-0.html?lang=en)、consumer secret、key、新しい OrgID を Mops に提供します。 |
|Marketo Sync の再認証 (Mops Tasks)|Marketing Operations|Marketing Operations|Marketo Sandbox| 再マッピングのためにサポートチケットを作成します。再マッピングが完了したら、[OAuth 情報](https://experienceleague.adobe.com/docs/marketo/using/product-docs/crm-sync/salesforce-sync/log-in-using-oauth-2-0.html?lang=en)を更新して接続します。次に、`Login with salesforce` > use custom domain > `gitlab--staging` をクリックし、1pw vault の Marketo Integration の詳細でログインします。Systems は admin email に送信された認証コードを提供する必要がある場合があります。マッピングと sync を確認します。|
| 新しい DKIM キーをセットアップして gitlab.com DNS に追加|Sales Systems|Sales Systems|Test1| [こちらの手順](https://help.salesforce.com/s/articleView?id=sf.emailadmin_setup_dkim_key.htm&type=5)に従って新しい DKIM キーをセットアップします。キーが公開されたら、CNAME と Alternate CNAME の値を gitlab.com の DNS に追加するために GitLab IT チームに提供します。これが完了したら、'Send an Email' 機能を使用して Case から外部メールアドレスにメールが送信でき、メールが問題なく配信されることを確認します。|

#### リフレッシュ後にサンドボックスにアクセスする方法

下位レベルの環境（サンドボックス）がリフレッシュされた場合、本番環境へのアクセスレベルに応じて、アクセスできる場合とできない場合があります。

##### アクティブな本番環境ライセンス

本番環境のアクティブなライセンスを持っており、リフレッシュ前に下位レベルの環境にログインしたことが分かっている場合は、`Sandbox Access - Business Users` Public Group に含まれていることになります。この Salesforce 機能により、メールを更新することなく、リフレッシュ後にユーザーに簡単にアクセスを許可できます。アクセスを取り戻すために、Salesforce User Management チームはリクエストする誰にでもパスワードリセットを提供します。ユーザー名/パスワードを忘れた場合、標準のユーザー名スタイルについては [Refresh Cadence](/handbook/sales/field-operations/sales-systems/#refresh-cadence) テーブルをご覧ください。

##### 非アクティブな本番環境ライセンス（以前のアクセス）

現在本番環境へのアクセスを持っていないが、以前にアクセスを持っていた場合、ユーザーが `Sandbox Access - Business Users` Public Group に含まれていた可能性があります。Salesforce User Management チームに [Access Request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) を作成し、`entapps access requests` ラベルを追加して、再開されたアクセスを連絡してください。

#### リフレッシュ頻度

私たちのチームの SDLC プロセスの一部として管理されているサンドボックスは、以下に詳述されている通常のリフレッシュスケジュールに従います。

|Sandbox name|URL|Sandbox type|Standard Username|Used for|Refresh cadence|Last refresh date|Next refresh issue|Zuora Billing Sandbox|Zuora Billing Sandbox Tenant ID|Other Critical Connected Integrations|
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|[Partial](https://gitlab--partial.sandbox.my.salesforce.com)|https://gitlab--partial.sandbox.my.salesforce.com|Partial| \<email>.partial |Developer integration and testing org. |必要に応じて、最大月 1 回、最低四半期 1 回|[11/06/2025](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/work_items/10357)|TBD Q2 2026|Developer Sandbox (i.e. "Dev Sandbox")|10002574|CustomerDot|
|[Test1](https://gitlab--test1.sandbox.my.salesforce.com)|https://gitlab--test1.sandbox.my.salesforce.com|Full| \<email>.test1 |Pre-production org. リリース前の Systems issue の UAT に使用されます。トラブルシューティングにも使用されます。|必要に応じて、最大月 1 回、最低四半期 1 回|[10/18/2025](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/work_items/10219)|TBD Q4 2025|Central Sandbox 2|10000796|CustomerDot|
|[GTLBUAT](https://gitlab--gtlbuat.sandbox.my.salesforce.com)|https://gitlab--gtlbuat.sandbox.my.salesforce.com|Full| \<email>.gtlbuat |Systems の UAT に使用されます。トラブルシューティングにも使用されます。Gearset パイプラインの最後から 2 番目の org。|必要に応じて、最大月 1 回、最低四半期 1 回|[08/14/2025](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/work_items/9633)|TBD|Central Sandbox 1 (i.e. "Staging Sandbox")|10000719|CustomerDot<br>Marketo<br>RingLead<br>PSQuote|

## <i class="fas fa-users" id="biz-tech-icons"></i> 私たちの運営方法

## 技術ドキュメント

- [Go-To-Market Technical Documentation](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/)
- [Go-To-Market Integrated Environments](/handbook/sales/field-operations/sales-systems/gtm-integrated-environments/)
- [License Usage App Documentation](/handbook/sales/field-operations/sales-systems/license-usage-app/)
- [Salesforce Configuration Documentation](/handbook/sales/field-operations/sales-systems/salesforce-config/)
- [Lead Source Master Data Set](/handbook/marketing/marketing-operations/#initial-source)
- [Salesforce Dataloader Install/Uninstall/Upgrade Instructions](dataloader-installation/)

## 私たちと一緒に働く

- [Sales System Agile Board](https://gitlab.com/groups/gitlab-com/-/boards/1117318?label_name[]=SalesSystems)
- [Sales Systems Project](https://gitlab.com/gitlab-com/sales-team/field-operations/systems)
- [Salesforce.com APEX repository](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src)

## 私たちの働き方

- Sales Systems チームは、`GitLab.com` レベルで Milestones として追跡される 2 週間のスプリント/イテレーションで作業します。これは、私たちのビジネスパートナーの多くが運営する方法と Sale Systems チームを整合させますが、[GitLab が提供する](https://about.gitlab.com/solutions/agile-delivery/)ソリューションの 1 つも活用しています
- Systems チームは、私たちのチームを [GitLab の Values](/handbook/values/#credit) と最も効果的に整合させると信じているため、milestones の計画と実行において以下の原則をエミュレートするよう努めています
  - [「少なく始めて、多く終わらせる」](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/#starting-new-work)
  - [「Issue のチャーンを減らす」](/handbook/engineering/devops/runner)

### Sales Systems からヘルプを得るためのステップ

1. 私たちの[プロジェクト](https://gitlab.com/gitlab-com/sales-team/field-operations/systems)で issue を作成し、依頼または問題について詳細なビジネス要件を提供することを忘れないでください。assignee は空白のままにしてください
    - この issue が既存の機能を削除するか、コンポーネントを非推奨にする必要がある場合は、issue に `technical debt` ラベルを含めてください。
2. 作業スタイルをラベルに合わせるために、Systems チームは追加された順序で issue に取り組むことを優先し、それに応じて issue にラベルが付けられます
3. Systems Label Workflow とラベルの説明は次のとおりです

      ![The Systems Label Workflow](/images/sales/Systemsworkflow.png)

      - ![Sales Systems](/images/sales/Salessystems.png) systems board で作成された新しい Issue は自動的にタグ付けされ、sales systems に関連する既存の issue はこのラベルでタグ付けされます
      - ![Need More Information](/images/sales/SSNeedinformation.png) リクエスト者からの情報を待っている、要件にもっと明確さが必要な issue。milestone に割り当てられている場合と割り当てられていない場合があり、DRI および/または systems チームメンバーに割り当てられます
      - ![Out Of Scope](/images/sales/SSOutscope.png) イニシアチブのパラメータ外であり、現在の機能と組み合わせることができない issue。この issue はクローズされます
      - ![Ready For Assignment](/images/sales/SSReadyassingment.png) 要件収集が完了し受け入れられた issue。milestone なし、systems チームメンバーには割り当てられていない
      - ![Assigned](/images/sales/SSAssign.png) 進めて作業する準備ができた issue。milestone にスロットされ、systems チームメンバーのキューに割り当てられます
      - ![Build](/images/sales/SSBuild.png) 現在の milestone にあり、積極的に取り組まれている systems チームメンバーに割り当てられた issue
      - ![Ready To Business Owner Review](/images/sales/SSBusinessowner.png) 現在の milestone にあり、ゴールラインに近い issue。サインオフのために business owner にレビューおよびデモする必要があります
      - ![Ready To Deploy](/images/sales/SSReadydeploy.png) 現在の milestone にあり、business owner からサインオフを受け、systems チームメンバーによってデプロイする準備ができている issue
      - ![Blocked](/images/sales/SSBlocked.png) 現在の milestone にあり、技術的な困難により停止している systems チームメンバーに割り当てられた issue。および/または、進めるための情報を systems メンバーに提供することを保留中の business owner に割り当てられた issue

4. 私たちのアジャイル[ボード](https://gitlab.com/groups/gitlab-com/-/boards/1117318?label_name[]=SalesSystems)で issue のステータスをご確認ください。
5. ビジネスフローに影響する重大な事態（例: 誰もクオートを作成できない、アカウントが作成されない、Opportunity をクローズできない）がある場合は、上記のプロセスに従い、issue を `Sales-Support` Slack Channel で共有してください

## Sales Systems Issue のデプロイメント＆コンプライアンスステップ

issue をデプロイしてクローズするには、以下のチェックリストにサインオフする必要があります:

- [ ] 1\. \[Change Builder\] 変更されるコンポーネントが change issue に文書化されている
- [ ] 2\. \[Business DRI\] Business User Acceptance Testing が証拠付きで完了
- [ ] 3\. \[Business Program Owner\] Business Process Owner サインオフ
- [ ] 4\. \[Systems Owner\] System Owner サインオフ
- [ ] 5\. \[Change Implementor\] 変更されるコンポーネントが change issue でビルダーによって文書化されていることを確認
- [ ] 6\. \[Change Implementor\] 正しい `entapps-` デプロイメントタイプの GitLab Label を追加
- [ ] 7\. \[Change Implementor or Secondary Reviewer\] PIR を証拠付きで完了。
    1. Salesforce 本番環境でのデプロイメントステータスとデプロイされたコンポーネントのスクリーンショット
    2. 誰が変更をデプロイしたかを示す Gearset デプロイメントスクリーンショット

### [Business DRI] Business User Acceptance Testing が証拠付きで完了

Business DRI は、提供されたソリューションが `definition of done` として期待通りに動作することを検証した後にサインオフする必要があります。Business DRI は issue に証拠を追加するか、いくつかのシナリオでは systems チームメンバーが Business DRI が issue で確認するための証拠を提供します

#### [Business Program Owner] Business Process Owner サインオフ

チームに関係する Business Process Owner がサインオフを提供する必要があります。チーム / 部門に関するサインオフマトリックスは以下のとおりです

| Team / Lane                 | Main Approver                                                                                  | Backup Approver                                  |
|-----------------------------|------------------------------------------------------------------------------------------------|--------------------------------------------------|
| Quote To Cash               | Director, Revenue Systems & Processes                                                                        | Senior Director, Sales Operations                |
| Territory Management        | Director, Sales Operations                                                                     | Senior Director, Sales Operations                |
| Ecosystems                  | Director, Ecosystem Operations                                                                 | Senior Manager, Global Ecosystem Specialists     |
| Customer Success Operations | Senior Director, CS Strategy & Operations                                                      | VP, Field Operations                             |
| Sales Operations            | Director, Sales Operations                                                                     | Senior Director, Sales Operations / Director, Revenue Systems & Processes |
| Deal Desk                   | Sr. Director, Deal Desk                                                                        | Senior Director, Sales Operations                |
| Professional Services       | Director, Professional Services                                                                | VP, Professional Services & Education            |
| Marketing Operations        | Director, Marketing Operations                                                                 | Senior Director, Marketing Strategy & Platforms  |
| Sales Dev Operations        | Director, Sales Development Operations                                                         | VP, Sales Development                            |
| Sales Compensation          | Director, Sales Commissions                                                                    | Senior Director, Sales Operations                |
| Legal                       | Director, Legal Compliance and Ethics                                                          | VP, Legal                                        |
| Sales Systems               | Senior Manager, Sales Systems                                                                  | Senior Director, Enterprise Applications         |
| Fulfillment                 | Group Manager, Fulfillment                                                                     | VP, Product Management                           |
| Data                        | Director, Data Analytics                                                                       | VP, Data & Analytics                             |

#### [Systems Owner] Systems Owner サインオフ

Salesforce CRM System Owner がサインオフを提供する必要があります。サインオフマトリックスは以下のとおりです

| Main Approver                                         | Backup Approver                                                       |
|-------------------------------------------------------|-----------------------------------------------------------------------|
| Thiru Subramanian - Manager, CRM Systems              | Nishanth Sekhar - Director, Enterprise Applications (Lead to Cash)    |
| Kiran Chinthapalli - Director, CRM Systems            | Monali Bhide - Manager, IT Enterprise Applications Engineering        |
|                                                       | Pratik Gupta - Manager, IT Enterprise Applications Engineering        |

#### [Change Implementor] 正しい `entapps-RM::[deployment type]` GitLab Label を追加

issue がデプロイされたら、issue に割り当てられた sales systems チームメンバーが、[SDLC - Software Development Life Cycle](/handbook/sales/field-operations/sales-systems/#salesforcecom-change-management-processes-and-sdlc-software-development-life-cycle) に従って以下のデプロイラベルのいずれかでタグ付けする必要があります

- entapps-RM no-deployment-made
- entapps-RM manual-deployment
- entapps-RM deployed-via-metadata-api

#### [Change Implementor] Completed Change Set Attached のスクリーンショットと MR Attached（コードの場合）

issue がラベル `entapps-RM deployed-via-metadata-api` で終わった場合、issue に割り当てられた systems メンバーは change set のスクリーンショットを追加する必要があります

## Milestone レビューと QA

milestone をクローズする前に、Sales Systems leadership によって以下のチェックが行われます:

1. Sales Systems プロジェクト内で Sales Systems チームメンバーによって作成または割り当てられたすべての issue は、Sales Systems Label を持っている必要があります。
1. Sales Systems ラベルを持つすべてのクローズされた issue は、Milestone に割り当てられている必要があります。
1. Milestone 内のすべてのクローズされた issue は、以下の SDLC ステップが完了し、最終デプロイラベルがあることを確認する必要があります。

### SFDC 開発ガイドライン

**作業を開始する前に、以下を確認してください:**

1. ローカルで完全にセットアップされた SFDC Dev 環境があること。
    - [Visual Studio Code](https://code.visualstudio.com/?wt.mc_id=DX_841432)
    - [Salesforce Trailhead: Setting up your VS Code](https://trailhead.salesforce.com/en/content/learn/projects/find-and-fix-bugs-with-apex-replay-debugger/apex-replay-debugger-set-up-vscode)
2. 個人の [SFDC Dev Sandbox](https://gitlab.my.salesforce.com/07E?retURL=%2Fui%2Fsetup%2FSetup%3Fsetupid%3DDeploy&setupid=DataManagementCreateTestInstance) へのアクセスがあること。
3. SFDC Dev 環境が SFDC Dev Sandbox に正しく向けられていること
4. ローカルの Sandbox 作業ディレクトリに私たちの [Git リポジトリ](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src) をクローンしていること。
5. 合意されたビジネス要件を提供する明確な技術仕様を持つ GitLab issue から作業していること。
6. 私たちの[優先度マトリックス](/handbook/sales/field-operations/sales-systems/)に基づいてリクエストの優先度を特定し、適切なラベルを追加していること: `Priority::Low`、`Priority::Medium`、`Priority::High`

**変更管理ステップ:**

1. master ブランチで開始し、`git pull` することを忘れないでください。
2. issue にリンクする名前で新しいブランチを作成します: `git checkout -b "SalesSystems-158"`。
3. コードを書いている場合は、変更されたクラス、トリガー、またはページに対して `SFDX: Deploy Source To Org` を使用して、頻繁に変更をサンドボックスにプッシュします。
4. 構成を編集している場合は、変更されたオブジェクトまたはメタデータに対して `SFDX: Retrieve Source From Org` を使用して、頻繁に変更をローカル環境にプルダウンします。
5. コードに対するユニットテストを記述して実行し、コードと構成の両方について、SFDC ユーザーインターフェイスで手動で変更をテストします。
6. イテレーションが完了したと感じたら、`git status` を実行して変更されたファイルが期待通りであることを確認します。
7. コミットしたいファイルを `git add [filename]` で追加するか、すべての変更されたファイルを追加したい場合は `git add *` で追加します。
8. 関連するメッセージで変更をコミットします: `git commit -m "Fixing Apex CPU Errors"`。
9. GitLab が提供するリンクを使用して、merge request を開き、[`Draft:` にマーク](/handbook/about/editing-handbook/#marking-a-merge-request-as-draft)し、プロジェクトの Architect に割り当てます。
10. 関連する issue にプロジェクトの Architect への @ でコメントしてレビューを依頼し、merge request へのリンクを提供します。（これにより、merge request が issue に自動的にリンクされます）
11. Architect（または割り当てられた代理人）は、[ここで定義されている](https://internal.gitlab.com/handbook/IT/it-change-management/#change-request-types)変更の範囲に基づいて、ストーリーに変更管理レベルを割り当てます。
12. その後、適切な承認（[Approval Matrix](/handbook/sales/field-operations/sales-systems/#approval-matrix) セクションで定義されている通り）が完了したことを issue に文書化する必要があります。
13. Architect がライブデモを要求した場合は、ミーティングをスケジュールし、エンドカスタマーとリハーサルを行うためにサンドボックスを準備します。
14. Architect がユーザー受け入れテストを要求した場合は、割り当てられたテスターが作業が行われたサンドボックスにアクセスできることを確認し、テストをスケジュールします。
15. ソリューションが合格したら、Architect は `WIP:` ステータスを削除し、変更をマージします。
16. マージされたら、Sandbox から Production（または Architect が要求した場合は Staging インスタンス）へ、すべての関連ファイルを Change Set にパッケージ化します。
17. Change Set に issue/branch と同じ名前を付けます: `SalesSystems-158` で、本番環境にプッシュします。
18. Change Set が本番環境に到着したら、検証します。エラーがある場合は、step 3 に戻ります。Step 3、4、5 に従えば、検証時のエラーはまれであるはずです。
19. Change set が検証されたら、Architect に ping を送ってデプロイメントをスケジュールします。
20. デプロイメント後、新しいフィールドへの可視性を追加するなどのデプロイメント後のステップを実行します。
21. エンドユーザーと機能が期待通りに動作していることを確認します。
22. 私たちの[技術ドキュメント](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/)に新しい機能を追加するか、機能のエントリを編集する merge request を作成します。
23. 次のタスクに移る前に、`git checkout master` してから `git pull` でリベースします。**常にプルし続けてください！**
24. 本番環境にデプロイされたマージされた change set をクローンし、この change set を staging にプッシュおよびデプロイします。（デプロイ後のステップとセットアップはオプションです）

#### インストール済みパッケージ

[インストール済みパッケージ](https://help.salesforce.com/s/articleView?id=sf.distribution_installed_packages.htm&type=5)は、Salesforce プラットフォームで作業する ISV（Independent Software Vendor）から提供され、プラットフォームの機能を拡張する Salesforce のコードと構成を含んでいます。これらは、Salesforce のネイティブ機能を拡張するために、私たちのビジネスパートナーから一般的にインストールおよびリクエストされます。

##### パッケージは Managed か Unmanaged か?

パッケージには、[managed か unmanaged](https://developer.salesforce.com/docs/atlas.en-us.188.0.packagingGuide.meta/packagingGuide/packaging_about_packages.htm) の 2 つの種類があります。Managed パッケージは署名されたアプリと同等で、自己完結型のソースがパッケージ内に封印されています。Unmanaged パッケージは署名されておらず、一般的に raw コードと構成を含んでいます。

通常、ベンダーは [Salesforce AppExchange](https://appexchange.salesforce.com/) を介して、または彼らのリポジトリからの直接インストールを介して managed パッケージを提供します。Unmanaged パッケージは一般的にベンダーから提供され、手動でインストールする必要のある raw ソースまたは構成を含む場合があります。注: GitLab に提供されたコードは、特定の対応が提供されない限り（例: ベンダーの基本機能を拡張するために契約する場合）、提供したベンダーの IP のままです。これらの追加の考慮事項のため、unmanaged パッケージはインストールプロセスの一部として追加のステップを完了する必要があります。

パッケージコードは、それを生み出したベンダーがサポートおよびトラブルシューティングする責任があります。機能で問題が発生した場合は、問題のベンダーに連絡してトラブルシューティングしてください。ベンダーが私たちの環境への変更を推奨する場合は、以下の 2 つのプロセスのいずれかを使用して、ベンダーが要求する変更を追跡するために Systems で issue をログします。

##### システムの安定性が最優先

私たち（Sales Systems）は、このパッケージがシステムパフォーマンスや制限に関連する問題を引き起こすと判断された場合、いつでも managed または unmanaged コードを削除またはアンインストールする権利を留保します。

unmanaged コードまたは config を受け入れる場合、ケースバイケースで受け入れるかどうかを選択します。Unmanaged パッケージは、私たちの managed コードに比べて、重大なリスクとリソース利用をもたらします。私たちの目標は、常にベンダーから managed パッケージを受け入れることです。

##### Managed Package のインストール/アップグレードプロセス

1. パッケージを特定し、なぜインストールまたはアップグレードすべきだと考えるかの理由を特定します。
1. インストールしたいパッケージのバージョンをサンドボックス環境内にインストールします。
1. 提供される機能が要件を満たし、既存の機能にマイナスの影響を与えないことをテストおよび確認します。
1. STAGING 環境にパッケージをインストールするための issue を Sales Systems で開きます。
    - issue の説明にパッケージへのリンクとベンダーから提供されたインストール手順を必ず含めてください。
1. パッケージが STAGING でインストールされ、進めることが確認されたら、提供される機能が要件を満たし、既存の機能にマイナスの影響を与えないことをテストおよび確認します
1. STAGING で正常にインストールされた場合、本番環境へのインストールを進める意図を発表し、トレーニングドキュメントを準備します。
1. ハンドブックの一部としてパッケージに関する関連情報を文書化します。
   - この例として、パッケージの一部である SFDC フィールドや、それがサポートするビジネスプロセスがあげられます。
1. パッケージを本番環境にインストールし、issue を更新してクローズします。

##### Unmanaged Package のインストール/アップグレードプロセス

1. パッケージとそれをインストールまたはアップグレードすべきだと考える理由、および別途インストールする必要のあるカスタムコードまたは構成を特定します。
1. インストールしたいパッケージのバージョンをサンドボックス環境内にインストールします。
1. 提供される機能が要件を満たし、既存の機能にマイナスの影響を与えないことをテストおよび確認します。
1. STAGING 環境にパッケージをインストールするための issue を Sales Systems で開きます。
    - issue の説明にパッケージへのリンクとベンダーから提供されたインストール手順、およびパッケージ外でインストールされたコンポーネントのインベントリを必ず含めてください。
1. unmanaged パッケージの一部として作成され GitLab ソースで追跡されるカスタムコードまたはメタデータを含めるために、私たちの [Git リポジトリ](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src)でブランチを作成します。
1. MR を Sales Systems の開発者に割り当てて、Systems によるブランチのパッケージレビューを依頼します。
1. パッケージが STAGING でインストールされ、進めることが確認されたら、提供される機能が要件を満たし、既存の機能にマイナスの影響を与えないことをテストおよび確認します
1. STAGING で正常にインストールされた場合、本番環境へのインストールを進める意図を発表し、トレーニングドキュメントを準備します。
1. ハンドブックの一部としてパッケージに関する関連情報を文書化します。
   - この例として、パッケージの一部である SFDC フィールドや、それがサポートするビジネスプロセスがあげられます。
1. パッケージを本番環境にインストールし、issue を更新してクローズします。

##### インストール済みパッケージの削除プロセス

アンインストールプロセスは、パッケージが managed か unmanaged かに関係なく同じです。

1. パッケージを特定し、なぜ削除できると考えるかの理由を特定します。
2. パッケージの本来の意図が何だったかについて初期調査を行い、機能の使用を所有/所有していた人物を特定します。
   - GitLab の Tech Stack Google Sheet はこの情報を確認するのに最適な場所であり、[こちらで見つけることができます](https://docs.google.com/spreadsheets/d/1mTNZHsK3TWzQdeFqkITKA0pHADjuurv37XMuHv12hDU/edit?usp=sharing)
3. オーナーと issue を開いてさらに調査します。この議論で、削除可能かどうかの確認を得ます。
   - issue に `technical debt` ラベルを追加します。
4. 進めることが確認されたら、サンドボックスからパッケージを削除してテストします。
5. サンドボックスから正常に削除された場合、削除を進める意図を発表します。
6. パッケージに関する関連情報を文書化します。
   - この例として、パッケージの一部である SFDC フィールドがあげられます。
7. 本番環境からパッケージを削除し、issue を更新してクローズします。

### フィールド & プロセス非推奨

- フィールドとプロセスの非推奨は作成と同じくらい一般的な出来事であるため、systems チームが任意のフィールドやプロセスを非推奨にする際に活用できる繰り返し可能なプロセスを実装することが重要です。

#### フィールド非推奨

- このプロセスは、systems チームによって最も頻繁に使用されます。Salesforce にもう必要のないフィールドがあるか、それを認識している場合は、[sales systems チームからのヘルプを得る](#steps-to-getting-help-from-sales-systems)に概説されているプロセスに従って Sales Systems チームに通知してください

1. 非推奨を調査するすべてのフィールドをリストアップする issue を開きます。issue の説明のテーブルに、フィールド名、フィールド API 名、およびフィールドが関連付けられているオブジェクトを必ず含めてください。issue に `technical debt` ラベルを追加します。
2. issue でタグ付けして、来るべきフィールド非推奨を Data チームに警告します。
3. 必要に応じて、関連するすべてのパートナーチーム（Marketing Ops、Sales Ops、Finance Ops など）に警告します
4. フィールド名の先頭に `[DEPRECATE]` を付加します。フィールド名がそれほど長いフィールド名を収容できない場合は、元の名前を説明にコピー＆ペーストし、名前から不要な文字を削除して再試行します。このため、フィールド名の先頭に `[DELETE]` を付加することも許容されます。
5. Visual Studio Code で、master からプルし、issue 内の各 API 名のスキャンを実行します。フィールドが使用されている場合、このフィールドを含めないようにコードを更新できるかどうかを調査します。
6. 前のステップでコードが更新された場合は、merge request を準備し、issue に関連付けます。
7. サンドボックスが古い場合は、[Systems チームと協力してリフレッシュ](/handbook/sales/field-operations/sales-systems/#sandbox-refreshes)し、最近の編集が次のステップに含まれるようにします。
8. 更新されたコードをサンドボックスにプッシュし（該当する場合）、change set を開始します。
9. 非推奨にする資格がまだあるすべてのフィールドについて、サンドボックスにログインし、それらを 1 つずつ削除しようとします。フィールドと、フィールド更新、ワークフロールール、検証ルールなどの間の接続を記録します（このステップでは Reports、Report Types などは無視できます）
10. 前のステップで見つかった接続を調査し、フィールドがまだ削除可能かどうかを確認します。
11. 削除できないすべてのフィールドについて

    - フィールドの説明に GitLab Issue Link を貼り付けることで、調査済みのフィールドに調査 issue をリンクします。
    - Salesforce のフィールドのオーナーとして誰かを割り当てます

12. 削除できるすべてのフィールドについて

    - issue の最終コメントでそれらをリストアップします
    - issue の期日を、それらが削除される日付に更新します
    - タグ付けされた関連チームと問題がないことを確認します
    - 更新された自動化（該当する場合）の change set を issue 期日前に検証します
    - issue 期日に、change set をデプロイし、本番環境からフィールドを削除します。可能であれば、フィールド削除と Salesforce の `Deleted Fields` セクションからフィールドを削除する間に 1 日のラグタイムを設けます

#### プロセス非推奨

- プロセスを非推奨にすることは、しばしばチームの行動の変化と、プロセスの更新を含みます。Systems チームは、これらの変更などに対処する詳細なドキュメントに取り組んでおり、まもなく詳細情報が来る予定です！

#### Service User の非アクティブ化

- この非アクティブ化プロセスは、サービスユーザープロファイルを非アクティブ化するために作られました。サービスアカウントは、統合 User や接続 user などとして使用されるアカウントです。サービスユーザーアカウントを非アクティブ化するには、[テンプレート](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=)に従ってください。標準ユーザーの非アクティブ化は Sales Operations が行うことに注意してください。

## GitLab と Salesforce での Sales System の CI/CD ジャーニー

私たちは独自の Salesforce 環境のための最初のパイプラインを作成することにより、独自の GitLab ツールをさらに活用するジャーニーを開始しました！

私たち独自のパイプラインは、@mayanktahil と @francispotter による素晴らしい仕事に基づいています: [SFDC CI/CD テンプレート](https://gitlab.com/sfdx/sfdx-project-template)。このプロジェクトに関する詳細情報に興味があり、それが動作しているのを見たい場合は、[GitLab を使った Salesforce 開発](https://www.youtube.com/watch?v=Z1JSIFLdIB4)と [GitLab と Salesforce で DevOps を加速](https://www.youtube.com/watch?v=tylPp9QlLu4) をチェックしてください

これに伴い、STAGING org への手動変更を制限することにより、[コンプライアンスコントロール](/handbook/security/security-assurance/security-compliance/guidance/compliance/)をより厳密に施行している変更が来ます。

2/16/2022 から、以下のメソッドが STAGING へのデプロイの唯一の承認された方法です。

- 別の GitLab 所有のサンドボックスからのインバウンド change sets 経由
- ベンダーパッケージのインストールまたはアップグレード経由
- CI/CD パイプライン経由の自動デプロイメント

### 私たちの CI/CD テンプレート

この CI/CD テンプレートの私たち独自のバージョンは[ここ](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/.gitlab-ci.yml)で見つけることができます。私たちが[イテレート](/handbook/values/#iteration)できるように、簡略化されたバージョンです。

このテンプレートは [Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.234.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm) を使用する機能を削除し、代わりに [Org-based deployment model](https://trailhead.salesforce.com/content/learn/modules/org-development-model) を使用します。この CI/CD ファイルで使用されるモデルには、'STAGING' と表示される単一の環境が構成されています。デプロイメントスクリプトはまた、ルートソースディレクトリに保存された ApexClasses、ApexTriggers、ApexPage、ApexComponents へのデプロイメントのみを制限します。

パイプラインは以下のアクションを実行します:

- Merge Request に関連するブランチにコミットが行われるたびに、SFDX CLI を runner にインストールし、STAGING に対して検証デプロイメントを実行するために sfdx force:source:deploy メソッドを実行します。
- この検証デプロイメントは、新しいコミットソースブランチで見つかったすべての ApexClass、ApexTrigger、ApexComponent、ApexPage オブジェクトをコンパイルします。
- コンパイルが成功した場合、すべてのユニットテストが合格していることを確認するために、SANDBOX org のすべてのユニットテストが実行されます。
- コンパイルまたはユニットテストが失敗した場合、パイプラインはジョブの出力にエラーを個別の行項目として表示します。
  - その後、MR はマージからブロックされます。
- コンパイルが成功し、ユニットテストが合格した場合、コードレビューが完了した後に MR がマージのためにクリアされます。
  - パイプラインはまた、ユーザーが STAGING 環境へのソースコードのデプロイメントをトリガーすることを可能にします。
  - これは現時点では手動プロセスです（[次は何ですか?](#whats-next)を参照）、マージが完了した後、MR をマージしている人によってトリガーされます。
    - チームは、複数の MR が同時にマージされている場合のデプロイメントの柔軟性のために、このステップを手動のままにすることを決定しました。
    - このシナリオでは、最後の MR のみをデプロイします。これは、すべての以前の MR がマージされた最終的な完全な 'master' ブランチを持つためです。

### パイプラインの利点

- Sales Systems ソースに保存された ApexClasses、ApexTriggers、ApexPage、ApexComponents へのすべての変更が、change sets を介して手動で管理されたり、手動デプロイ経由で管理されたりするのではなく、ソースから直接管理されるようになります。
- STAGING 環境への手動変更の数を減らし、潜在的な競合と問題が本番環境に忍び込むのを制限します。
- [GitLab Analytics の力](https://docs.gitlab.com/ee/user/analytics/)を活用して、チームをよりよく運営する方法をよりよく理解できます！

### 次は何ですか?

私たちは、開発者環境からソース管理への構成変更の容易なエクスポートを可能にするために Salesforce が昨年リリースした機能である [Sandbox Source Tracking](https://developer.salesforce.com/blogs/2021/01/learn-moar-with-spring-21-sandbox-source-tracking) を使用することを探求し始めています。

このツールは、私たちの管理者が開発者 org への複雑な変更を追跡し、これらをソース管理に簡単にチェックインできるようにします。

そうしたら、STAGING のパイプラインでこれらのオブジェクトを含めるためにパイプラインを拡張できます。これにより、フィールドのリネーム、ピックリスト値の変更、検証ルール、ワークフロー、フローなどの管理上の変更を検証し、STAGING に迅速にデプロイできるようになります。これにより、管理者が環境から STAGING に change sets をビルドする手動ステップが削除され、他のことに集中する時間を節約できます。

これに続いて、私たちの次の目標は、MR がマージされた時点で STAGING へのデプロイメントを自動化したいかどうかを確認することです。これは私たちにクリックを 1 回節約するだけですが、チームとして STAGING 環境への自動デプロイメントを使用するプロセスに慣れるために、私たちにとって重要なステップです。
