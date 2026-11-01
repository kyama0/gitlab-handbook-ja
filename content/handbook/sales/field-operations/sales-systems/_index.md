---
title: "Enterprise Applications - CRM チーム"
description: "Enterprise Applications CRM チームは、GitLab 内のビジネスプロセスをサポートする専門アプリケーションを実装し、サポートしています。"
upstream_path: /handbook/sales/field-operations/sales-systems/
upstream_sha: 52419353ea755a1ac823553385f8636ff2fcde17
translated_at: "2026-11-01T16:40:09.181479+00:00"
translator: claude
stale: false
lastmod: "2026-10-30T14:17:26-04:00"
---


<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## <i class="fas fa-users" id="biz-tech-icons"></i> ミッション {#mission}

CRM Systems は、SalesforceCRM および関連する Revenue Systems を主に扱い、日常的に使用するための信頼性が高く、スケーラブルで直感的なテクノロジープラットフォームを提供することによって、GitLab フィールド組織をサポートするために存在します。私たちの目標は、エンドユーザーに継続的に機能の形で価値を提供することです。私たちはまた、ビジネスとテクノロジーの間の結合組織として機能し、社内顧客から要件を収集し、技術仕様を設計し、ソリューションの提供を実行します。

## <i class="fas fa-users" id="biz-tech-icons"></i> 私たちのチーム（組織図） {#our-team-org-chart}

- **Kiran Chinthapalli - Director, CRM Systems** GitLab ユーザー名： [kchinthapalli1](https://gitlab.com/kchinthapalli1) Slack ユーザー名： @Kiran Chinthapalli
- **Thiru Subramanian - Manager, CRM Systems** GitLab ユーザー名： [Thirusubramanian](https://gitlab.com/Thirusubramanian) Slack ユーザー名： @Thiru Subramanian
- **Analissa "Ana" Moreno - IT Enterprise Applications Administrator** GitLab ユーザー名： [ana-moreno](https://gitlab.com/ana-moreno) Slack ユーザー名： Ana Moreno
- **Andie Wheeler - IT Enterprise Applications Administrator** GitLab ユーザー名：[alwheel](https://gitlab.com/alwheel) Slack ユーザー名： @Andie Wheeler
- **Brett Latham - Senior Business Systems Administrator** GitLab ユーザー名： [Dlatham](https://gitlab.com/Dlatham) Slack ユーザー名： @Brett Latham
- **Mohamed Hussain - Business Systems Administrator** GitLab ユーザー名： [Moh.hussain](https://gitlab.com/Moh.hussain) Slack ユーザー名： @Mohamed Hussain
- **Pooja Chowdary Nayidi - IT Enterprise Applications Administrator** GitLab ユーザー名： [pnayidi](https://gitlab.com/pnayidi) Slack ユーザー名： @Pooja Chowdary Nayidi
- **Christian Böhme - IT Enterprise Applications Engineer** GitLab ユーザー名： [chrisboehme](https://gitlab.com/chrisboehme) Slack ユーザー名： @Christian Böhme
- **Deepak Kumar - IT Enterprise Applications Engineer** GitLab ユーザー名： [dkumarGitlab](https://gitlab.com/dkumarGitlab) Slack ユーザー名： @Deepak Kumar
- **Devansh Devansh - IT Enterprise Applications Engineer** GitLab ユーザー名： [DDevansh](https://gitlab.com/DDevansh) Slack ユーザー名： @Devansh
- **Harshit Bhandari - IT Enterprise Applications Engineer** GitLab ユーザー名： [hbhandari3](https://gitlab.com/hbhandari3) Slack ユーザー名： @Harshit
- **Shruti Pisharody - Senior IT Enterprise Applications Engineer** GitLab ユーザー名： [shrutisridharan](https://gitlab.com/shrutisridharan) Slack ユーザー名： @Shruti Sridharan
- **Kiran Chalamalasetty - Staff IT Enterprise Applications Engineer** GitLab ユーザー名： [kChalamalasetty](https://gitlab.com/kChalamalasetty) Slack ユーザー名： @KK (Kiran Kumar)

## Salesforce.com 変更管理プロセスと SDLC（ソフトウェア開発ライフサイクル） {#salesforcecom-change-management-processes-and-sdlc-software-development-life-cycle}

Salesforce.com への変更にはさまざまな形式がありますが、すべてが以下の変更管理コントロールを備えています:

- すべての変更は、依頼または問題を定義し、追加の決定とビジネス要件をキャプチャする GitLab Systems Issue から始まります。
- すべての変更は、本番環境にデプロイまたは複製される前に、Salesforce サンドボックス環境で開発およびテストされます。
- すべての変更は、準備ができたら関連する GitLab Issue に Business DRI（リクエスト者）のサインオフを必要とし、デプロイウィンドウを決定します。
- すべての変更は、本番環境にデプロイまたは複製された後、Business DRI によってレビューされます。

CRM Systems ワークフローのために以下の終了ラベルステージを定義しました。ラベル名と SDLC の期待事項を参照してください:

### Salesforce.com への変更なし {#no-changes-to-salesforcecom}

| 項目 | 詳細 |
|-------|---------|
| **ラベル** | `entapps-RM no-deployment-made` |
| **説明** | この Issue は完了し、Closed に移動されます。Salesforce への設定、構成、コードの変更は行われませんでした。サインオフ不要、Change Set は使用されません。 |
| **サインオフ** | 不要 |
| **Gearset の使用** | なし |

1. これらの Issue は、Salesforce への設定、構成、コードの変更を伴いませんでした。
2. 最も一般的なユースケースは、質問または調査の Issue です。
3. 他のオペレーションチーム向けのバックフィルの一部としてのデータ変更は、このカテゴリに該当します。

### Salesforce Metadata API 経由で完了できないか、実用的でない変更 {#changes-that-cannot-be-made-or-are-impractical-to-complete-via-the-salesforce-metadata-api}

これは、サポート対象外のメタデータタイプとしてより一般的に知られています。

| 項目 | 詳細 |
|-------|---------|
| **ラベル** | `entapps-RM manual-deployment` |
| **説明** | Salesforce の Metadata API でサポートされていない変更で、Gearset 経由でデプロイできないか、技術的には可能だが実用上の理由から手動で処理されるべき変更です。 |
| **サインオフ** | 必須 |
| **Gearset の使用** | なし |

#### Metadata API 経由でデプロイできない {#cannot-be-deployed-via-metadata-api}

Salesforce の Metadata API でサポートされていない変更で、Gearset 経由でデプロイできないものです。このリストは例であり、さらに多くのタイプを含む可能性があります。

| カテゴリ | サポート対象外の項目 |
|----------|-------------------|
| **オブジェクト固有の変更** | フィールド型の変更<br>フィールド API 名の変更 |
| **テリトリー管理** | Territory Assignment Rules<br>一般的な Territory オブジェクトの管理 |
| **ユーザー固有のデータ** | 非公開リストビュー<br>個人のレポート/ダッシュボード<br>非公開メールテンプレート |
| **組織の設定** | Company Information、会計年度の設定、複数通貨の初期設定 |

#### Gearset 経由でのデプロイが実用的でない {#impractical-to-deploy-via-gearset}

技術的には可能ですが、実用上の理由から手動で処理されるべき変更です。このリストは例であり、さらに多くのタイプを含む可能性があります。

| カテゴリ | 実用的でない項目 |
|----------|-------------------|
| **ユーザー管理** | User レコードの作成と更新<br>権限セットの割り当て<br>プロファイルの割り当て |
| **環境固有の設定** | 統合エンドポイント<br>環境固有のカスタム設定 |
| **セキュリティ設定** | IP 制限<br>セッション設定<br>ログイン時間<br>パスワードポリシー |
| **運用データ** | キューのメンバーシップ<br>公開グループのメンバーシップ<br>手動共有の割り当て |
| **証明書とキー** | SSO 証明書<br>セキュリティキー<br>認証プロバイダー |
| **パッケージの追加** | マネージドパッケージ<br>アンマネージドパッケージ |

> **サポート対象外のメタデータタイプに関する重要な注意:**
>
> - Metadata API でサポートされていないメタデータタイプは組織で一般的に使用されないため、ユーザーの大多数にとって懸念事項ではありません。
> - Salesforce のリリースごとに、Salesforce はますます多くのメタデータタイプをサポートしており、いずれはすべてをサポートしたいと考えています。
> - **手動での再作成が必要:** これらのメタデータタイプへの変更は、各組織で手動で再作成する必要があります。自動的にデプロイすることはできません。

### Salesforce Metadata API 経由の変更 {#changes-via-the-salesforce-metadata-api}

| 項目 | 詳細 |
|-------|---------|
| **ラベル** | `entapps-RM deployed-via-metadata-api` |
| **説明** | Salesforce Metadata API 経由で行うことができる変更。完全なタイプリストは [Salesforce の Metadata Coverage Report](https://developer.salesforce.com/docs/metadata-coverage)で確認できます。 |
| **サインオフ** | 必須 |
| **Gearset の使用** | あり |

#### メタデータ変更の例 {#examples-of-metadata-changes}

このリストは、一般的な GitLab の変更に関連する例です。さらに多くのタイプは、[Salesforce の Metadata Coverage Report](https://developer.salesforce.com/docs/metadata-coverage)で確認できます。

| カテゴリ | コンポーネント |
|----------|------------|
| **セキュリティとアクセス** | Field Level Security<br>Sharing Rules<br>Permission Sets<br>Profile adjustments<br>Roles |
| **データモデル** | Custom Fields<br>Custom Objects<br>Record Types<br>Field Dependencies |
| **ユーザーインターフェイス** | Page Layouts<br>List Views<br>Custom Tabs<br>Lightning Pages<br>Apps |
| **データ品質** | Validation Rules<br>Duplicate Rules<br>Picklist Values<br>Field Updates |
| **プロセスの自動化** | Workflow Rules<br>Flows<br>Approval Processes<br>Assignment Rules |
| **カスタムコード** | Apex Classes<br>Apex Triggers<br>Visualforce Pages<br>Lightning Components |
| **統合** | Custom Settings<br>Custom Metadata Types<br>Remote Site Settings<br>Connected Apps |
| **レポート** | Report Types<br>Custom Report Types |
| **メールとコミュニケーション** | Email Templates<br>Email Alerts<br>Letterheads |
| **その他のメタデータ** | Custom Labels<br>Static Resources<br>Quick Actions<br>Global Value Sets |

### 週次リリースプロセス {#weekly-release-process}

毎週、Salesforce Release Management チームは、**水曜日**にすべての推薦された Issue をリリースする作業を行います。すべての Issue は、その水曜日のリリースの対象となるためには、月曜日 EOD までに完全なサインオフと承認を持っている必要があります。

| ルール | 詳細 |
|---|---|
| 厳守すべき締切 | すべての Issue は月曜日 EOD までに Weekly Deploy に追加する必要があります。 |
| 承認要件 | 提出前に、すべてのサインオフが完了し、すべての MR がレビューおよび承認されている必要があります。 |
| RM による削除権限 | 未承認または部分的に承認された Issue はリストから削除され、関連する DRI に通知されます。 |
| 締切後の提出 | 月曜日 EOD 以降に追加された Issue は IT Director レベルの承認が必要です。 |

**Issue が締切を逃した場合、または緊急/緊急事態の場合はどうなりますか？**

月曜日 EOD 以降に提出された Issue は、進行する前に **IT Director レベルの承認**が必要となります。

**部分的にしか承認されていない Issue を追加した場合はどうなりますか？**

Release チームはそれをリリースリストから削除し、コメントとして追加します。責任ある DRI がタグ付けされ、その週は Issue が前進しないことを通知されます。

### リリースプロセス要件 {#release-process-requirements}

#### デプロイメントツール {#deployment-tool}

すべての変更は Gearset を使用します。メタデータ変更を含むすべての Issue には、リンクされた Merge Request が含まれます。

#### 変更管理 {#change-control}

開発者と管理者は概説された通りにパイプラインを進みますが、本番環境へのデプロイは（権限により）禁止されます。Salesforce Release Management は Gearset 経由ですべての変更を検証およびデプロイします。**「セルフデプロイは行わない」** というルールは引き続き遵守されます。

#### コード変更の追加要件 {#code-changes-additional-requirements}

Apex Code、Apex Trigger、または Visualforce Page を含む Merge Request は、デプロイメントを通過するために少なくとも 1 名の追加の Salesforce Engineer の承認が必要です。

詳細については、CONTRIBUTING ファイルをご覧ください。

#### Issue サインオフ {#issue-sign-offs}

Issue サインオフには **3 つのサインオフ**が必要です:

1. **Business DRI:** ビジネスユーザー受け入れテストが証拠付きで完了
2. **Business Program Owner:** Business Process Owner サインオフ
3. **Systems Owner:** Systems Owner サインオフ

#### Release Management サインオフ {#release-management-sign-off}

Gearset から作成されたすべての Merge Request は、すべての Issue サインオフを受け取り、CAB 承認が提供され、未解決の競合が解決されたことを確認するために Salesforce Release Management から最終承認を受けます。

> **注:** この最終的な Release Management ステップは、すべての「チェックリスト」項目が完了し、Issue がデプロイメントの準備ができていることを確認するための運用上のレビューです。

#### すべてのデプロイメントタイプのデプロイ後ドキュメント {#post-deployment-documentation-for-all-deployment-types}

メタデータ型と非メタデータ型の両方のすべてのデプロイメントについて、スクリーンショットが提供されます。

- Gearset デプロイメントのスクリーンショット必須
- Salesforce 本番環境内での変更の実装後レビュー、スクリーンショット付き
- すべての Issue が MR にリンクされていることを確認

### Salesforce フィールド構成への破壊的変更 {#destructive-changes-to-salesforce-fields-configration}

破壊的なフィールド変更（フィールドの削除など）は、Systems Issue を通じて提起する必要があります。

- CRM Systems チームは、問題のフィールドの影響と使用率を特定する作業を行います。
- Data チームは、フィールドが Snowflake テーブルに関与していないことを確認するためのセカンダリチェックとしてループに入ります。
- フィールドが削除に適しているか、以前に `[Deprecated]` とマークされており削除に適している場合、Gearset パイプライン経由で削除できます。

### Salesforce コードへの破壊的変更 {#destructive-changes-to-salesforce-code}

これらのタイプの変更には、**Senior Director of CRM Systems** からのサインオフが必要です。これらの変更は、承認されたら Gearset パイプライン経由で完了されます。

- このようにして、私たちのパイプラインの整合性は健全に保たれ、問題のコードはすべての長期的な環境ブランチおよび `master` から削除されます。

### マイルストーンのコンプライアンスチェックプロセス {#milestone-compliance-check-process}

マイルストーンを閉じる前に、以下のステップを実行します:

1. すべての非クローズ Issue は削除するか、次のマイルストーンに押し出す必要があります。
1. SalesSystems ラベルを持つすべてのクローズされた Issue は、4 つのデプロイメントステージのいずれかで終わる必要があります。
1. すべての Issue は、デプロイメントステージに関連する必要なアーティファクトと承認を持っている必要があります。
1. 見つかった問題はすべて、クローズの遅延を避けるために、直ちに Sales Systems のスクラムマスターに提起する必要があります。

### 特別承認 {#special-approvals}

以下の非標準状況のいずれかについて、Senior Director of Sales Systems から明示的かつ文書化された承認を求めてください:

1. 指定されたブロックアウト期間中のデプロイメント。
1. 非侵襲的な変更をセルフデプロイする必要性。
1. 重大な Issue の時間的緊急トリアージのために、本番環境で非侵襲的な数式フィールドを作成する必要性。

これらの変更は `CMT: Emergency Change` として分類されます。これが発生する Issue は、将来のコンプライアンスレビューのためにこのラベルでフラグ付けされる必要があります。

### 重要なフィールドの承認 {#critical-field-approvals}

以下のフィールドに関連するすべての変更には、Senior Director of Sales Systems からの直接の承認が必要です:

1. Opportunity.Net_ARR__c

### 見積もりに関連する変更案の承認 {#approval-for-proposed-changes-related-to-quoting}

1. 見積もりに影響する全ての変更（例: 見積もりの作成、検証ルールの作成、見積もり PDF の生成、Quote Templates、Approval Module の更新）は、本番環境にプッシュされる前に Deal Desk と Channel Ops からの承認が必要です。目標は、見積もりプロセスを遅延させたり見積もりから入金までのライフサイクルにボトルネックを作成する可能性のある変更が本番環境にプッシュされるのを防ぐことです。
1. 承認は、関連する Issue のコメントセクションで、以下に概説する指定承認者から確保されるべきです。
1. さらに、Sales チームの見積もり体験に重大な影響を与える可能性のある変更が提案され、**以下にリストされていない**場合は、Issue のコメントセクションで Sr. Manager, Deal Desk からのレビューを依頼してください。

|                                                                変更                                                               |                指定承認者               |                    代理承認者                   |
|:-----------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------:|:-----------------------------------------------------:|
| 承認モジュールの更新（割引、支払い条件、承認構造/階層、承認通知、上書き機能）       | Sr. Manager, Deal Desk                          | Manager, Deal Desk                                    |
| Channel の見積もり承認モジュールの更新（検証ルールの変更、割引のしきい値、承認構造/階層、通知）   | Manager, Channel Operations  Manager, Deal Desk | Sr. Manager, Deal Desk Manager, Partner Ops/Alliances |
| SuperSonics ロジックの更新                                                                                                           | Sr. Manager, Deal Desk                          | Manager, Deal Desk                                    |
| Smart Templates のゲートロジック                                                                                                          | Manager, Deal Desk                              | Sr. Manger, Deal Desk                                 |
| 検証ルールの提案（例：すべての見積もりオブジェクトで "X" フィールドを必須とし、"X" が空白の場合、ユーザーは見積もりを進められません。  | Sr. Manager, Deal Desk &  Manager, Deal Desk    | Manager, Deal Desk                                    |
| 見積もりテンプレート / Docusign 注文書                                                                                              | Manager, Deal Desk                              | Sr. Manager, Deal Desk                                |
| 見積もりワークフローの変更（例：ボタンの動作（Edit Quote と Maintain Quote）の更新、フィールドや権限の削除）             | Sr. Manager, Deal Desk                          | Manager, Deal Desk                                    |

1. 承認に Deal Desk のレビューを待っている場合、`Deal Desk::Pending Approval` ラベルが DRI によって Issue に追加されます。
1. 承認が確保されたら、Deal Desk は Issue に `Deal Desk::Approved` ラベルを追加します。他の承認が不要な場合、Systems は作業を進めることができます。
1. 提案された変更が見積もりサイクルにマイナスの影響を与える場合、Deal Desk は Issue に `Deal Desk::Need More Information` ラベルを追加します。Deal Desk は Issue DRI と協力して代替ソリューションを特定します。
1. 提案された変更が承認されない場合、Deal Desk は Issue に `Deal Desk::Rejected` ラベルを追加します。代替ソリューションを提示する必要があります。

Channel Operations と Deal Desk は、見積もりプロセスに関連するすべての更新で密接に連携します。目的は、提案された変更が、チームメンバーが認識していない可能性のある既存のプロセスと矛盾しないことを保証することです。

1. 承認に Channel Ops のレビューを待っている場合、`Channel Ops::Pending Approval` ラベルが DRI によって Issue に追加されます。
1. 承認が確保されたら、Channel Ops は Issue に `Channel Ops::Approved` ラベルを追加します。他の承認が不要な場合、Systems は作業を進めることができます。
1. 提案された変更が Channel の優先事項にマイナスの影響を与える場合、Channel Operations は Issue に `Channel Ops::Need More Information` ラベルを追加します。Channel Ops は Issue DRI と協力して代替ソリューションを特定します。
1. 提案された変更が承認されない場合、Channel Ops は Issue に `Channel Ops::Rejected` ラベルを追加します。代替ソリューションを提示する必要があります。

**見積もりに関連する Channel Operations と Deal Desk の承認の SLA**

Channel Operations と Deal Desk は、上記のラベルを持つ各 Issue を 1 営業日以内にレビューします。

## Salesforce 固有のプロセス、ポリシー、コントロール {#salesforce-specific-processes-policies-and-controls}

### 変更分類 {#change-classifications}

Salesforce での変更の性質上、上記のすべての変更は、特に明記されていない限り、監査とコンプライアンスの目的で `CMT: Comprehensive Change` として分類されます。Systems チームによって対処されるすべての Issue でこのタグを過負荷にしないために、現時点では Issue にこのタグを付けていません。

### Salesforce パスワードポリシー {#salesforce-password-policies}

GitLab の[パスワードセキュリティのベストプラクティス](/handbook/security/#gitlab-password-policy-guidelines)に従い、Salesforce 環境では、ユーザーが少なくとも 12 文字のパスワードを使用すること、およびパスワードリセット時に過去 24 個のパスワードのいずれも再使用してはならないことが要求されます。

### サンドボックスのリフレッシュ {#sandbox-refreshes}

#### 個人サンドボックスのリフレッシュをリクエストする方法 {#how-to-request-a-sandbox-refresh-for-a-personal-sandbox}

1. 上記の手順に従って Sales Systems チームの Issue を作成します。
2. Issue の説明に、サンドボックスの名前と、サンドボックスへのアクセスが必要なユーザーの名前を含めます。
3. この環境のリフレッシュ保留中にブロックされている他の Issue にこの Issue をリンクします。

#### SDLC プロセスの一部として維持されるサンドボックスのリフレッシュプロセス {#refresh-process-for-sandboxes-maintained-as-part-of-the-sdlc-process}

1. Sales Systems チームは、各環境のリフレッシュのために、`SalesSystems` と `Sandbox Refresh Checklist` ラベルを持ち、リフレッシュ日が期日として設定された GitLab で追跡される Issue を持っています。
   1. Sales Systems チームは、各主要なサンドボックスリフレッシュ用の標準テンプレートの使用に移行しました。すべてのステップは、各テンプレートに概説され、必要に応じて更新されます。
2. リフレッシュ日に、割り当てられた Sales Systems チームメンバーが本番環境でリフレッシュを開始します。注: サンドボックスのリフレッシュには完了まで最大 72 時間かかる場合があります。
3. リフレッシュが完了した後、Sales Systems チームは環境を設定するために以下のステップを完了します。

##### リフレッシュ前のステップ {#pre-refresh-steps}

|リフレッシュ前のステップ|オーナー|実行担当者|環境|実行手順|
|-----|-----|-----|-----|-----|
|日付の調整|Systems|Systems|Developer, Test1, GTLBUAT|チーム内でリフレッシュ日を整合させる|
|日付の周知|Systems| Salesforce Release Mgmt|Developer, Test1, GTLBUAT|影響を受けるビジネスステークホルダーが認識し、リフレッシュ後の手順に備えられるよう、リフレッシュ日を事前に公表する。|
|Sandbox Access グループへのアクセス|Salesforce Release Mgmt|Salesforce Release Mgmt||関連するサンドボックスへの最近のログインアクセスをレビューし、関連する Sandbox Access グループに不足している、または新しいユーザーを追加する。|
|Marketo 同期の無効化|Marketing Operations|Marketing Operations|Test1|MOPs に連絡して SFDC 同期を無効化する（リフレッシュ前）。|

##### リフレッシュ後のステップ {#post-refresh-steps}

|リフレッシュ後のステップ|オーナー|実行担当者|環境|実行手順|
|-----|-----|-----|-----|-----|
|必要に応じて新しいサンドボックスの Org ID と instance Id を取得|@ana-moreno|@ana-moreno||リフレッシュの Issue で Org ID/Instance ID を見つけて更新する|
|データのバックアップと匿名化|@ana-moreno|@ana-moreno (または Own アクセスを持つ Admin ユーザー)|Developer, Test1, Test2|サンドボックスのバックアップを作成し、バックアップ完了時にデータを匿名化する。|
|RingLead ユーザーの再接続|@rrosue|@rrosu|Test1|RingLead Integration ユーザーがリセットされ、1Password で更新された後、以下に進みます: <br> 1. RingLead にログインします。<br>2. SFDC の接続ページを見つけます。<br>3. 本番環境の組織のユーザーパスワード（1Password に保存）を使用して、RingLead Integration ユーザーで認証します。|
|CustomerDot の再接続|@ebaquet|@ebaquet & team||リセットするユーザーについては、関連するリフレッシュテンプレートの手順に従ってください。<br>1. その組織の CustomerDot ユーザーをリセットし、Security Token を取得して 1Password で更新します。<br>2. Subscription Customer Portal Consumer Key と Consumer Secret を取得し、1Pass ユーザーも更新します。<br> 3. 再接続のために Fulfillment チームにログイン情報を提供します。|
|ユーザーパスワードのリセット|@monalibhide <br> @xliawang <br> @bienrcb |@sheelaviswanathan  ||リクエスト/必要に応じてユーザーパスワードをリセットします。ユーザーが凍結されている場合は、凍結を解除してリセットします。|
|API トークン/キーの再生成|@sheelaviswanathan |@sheelaviswanathan ||API キーを持つマネージドパッケージがある場合、Systems チームにキーの再生成を依頼し、1Password でユーザーを更新します|
|ユーザー受け入れテストを調整する「パワーユーザー」がいる場合 - Delegated Administration 領域にエントリを作成して「login as」できるようにする|@sheelaviswanathan |@sheelaviswanathan |||
|Marketo Sync の再確立|Marketing Operations|Marketing Operations|Marketing Sandbox/Staging| 再接続前に Staging で Lead と Contact に `Marketo Sync`（Boolean）の新しいフィールドを作成する必要があります。<br>このボックスはチェック解除されるべきですが、Mops プロファイルで編集可能にし、Mops 用のページレイアウトに追加する必要があります。Mops は再接続前にカスタム同期の設定を Marketo サポートに依頼し、Marketo インスタンスを[新しい SFDC ORG ID](https://experienceleaguecommunities.adobe.com/adobe-marketo-engage-27/sfdc-sandbox-refresh-new-org-id-160996)へ再接続する必要があります。 |
|Marketo Sync の再認証（Systems のタスク）|Sales Systems|Sales Systems|Staging|[接続された Oauth アプリを設定](https://experienceleague.adobe.com/docs/marketo/using/product-docs/crm-sync/salesforce-sync/log-in-using-oauth-2-0.html?lang=en)、consumer secret、key、新しい OrgID を Mops に提供します。 |
|Marketo Sync の再認証（Mops のタスク）|Marketing Operations|Marketing Operations|Marketo Sandbox| 再マッピングのためにサポートチケットを作成します。再マッピングが完了したら、[OAuth 情報](https://experienceleague.adobe.com/docs/marketo/using/product-docs/crm-sync/salesforce-sync/log-in-using-oauth-2-0.html?lang=en)を更新して接続します。次に、`Login with salesforce` > use custom domain > `gitlab--staging` をクリックし、1pw 保管庫の Marketo Integration の詳細でログインします。Systems は管理者のメールアドレスに送信された認証コードを提供する必要がある場合があります。マッピングと同期を確認します。|
| 新しい DKIM キーをセットアップして gitlab.com DNS に追加|Sales Systems|Sales Systems|Test1| [こちらの手順](https://help.salesforce.com/s/articleView?id=sf.emailadmin_setup_dkim_key.htm&type=5)に従って新しい DKIM キーをセットアップします。キーが公開されたら、CNAME と Alternate CNAME の値を gitlab.com の DNS に追加するために GitLab IT チームに提供します。これが完了したら、'Send an Email' 機能を使用して Case から外部メールアドレスにメールが送信でき、メールが問題なく配信されることを確認します。|

#### リフレッシュ後にサンドボックスにアクセスする方法 {#how-to-access-a-sandbox-after-a-refresh}

下位レベルの環境（サンドボックス）がリフレッシュされた場合、本番環境へのアクセスレベルに応じて、アクセスできる場合とできない場合があります。

##### アクティブな本番環境ライセンス {#active-production-license}

本番環境のアクティブなライセンスを持っており、リフレッシュ前に下位レベルの環境にログインしたことが分かっている場合は、`Sandbox Access - Business Users` Public Group に含まれていることになります。この Salesforce 機能により、メールを更新することなく、リフレッシュ後にユーザーに簡単にアクセスを許可できます。アクセスを取り戻すために、Salesforce User Management チームはリクエストする誰にでもパスワードリセットを提供します。ユーザー名/パスワードを忘れた場合、標準のユーザー名スタイルについては [リフレッシュ頻度](/handbook/sales/field-operations/sales-systems/#refresh-cadence)テーブルをご覧ください。

##### 非アクティブな本番環境ライセンス（以前のアクセス） {#inactive-production-license-previous-access}

現在本番環境へのアクセスを持っていないが、以前にアクセスを持っていた場合、ユーザーが `Sandbox Access - Business Users` Public Group に含まれていた可能性があります。[アクセスリクエストの Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new)を作成して `entapps access requests` ラベルを追加し、Salesforce User Management チームにアクセスの再開を依頼してください。

#### リフレッシュ頻度 {#refresh-cadence}

私たちのチームの SDLC プロセスの一部として管理されているサンドボックスは、以下に詳述されている通常のリフレッシュスケジュールに従います。

|サンドボックス名|URL|サンドボックスの種類|標準ユーザー名|用途|リフレッシュ頻度|前回のリフレッシュ日|次回のリフレッシュの Issue|Zuora Billing サンドボックス|Zuora Billing サンドボックスの Tenant ID|その他の重要な接続済み統合|
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|[Partial](https://gitlab--partial.sandbox.my.salesforce.com)|https://gitlab--partial.sandbox.my.salesforce.com|Partial| \<email>.partial |開発者の統合とテスト用の組織。 |必要に応じて、最大月 1 回、最低四半期 1 回|[11/06/2025](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/work_items/10357)|未定 Q2 2026|Developer Sandbox（つまり "Dev Sandbox"）|10002574|CustomerDot|
|[Test1](https://gitlab--test1.sandbox.my.salesforce.com)|https://gitlab--test1.sandbox.my.salesforce.com|Full| \<email>.test1 |本番前の組織。 リリース前の Systems Issue の UAT に使用されます。トラブルシューティングにも使用されます。|必要に応じて、最大月 1 回、最低四半期 1 回|[10/18/2025](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/work_items/10219)|未定 Q4 2025|Central Sandbox 2|10000796|CustomerDot|
|[GTLBUAT](https://gitlab--gtlbuat.sandbox.my.salesforce.com)|https://gitlab--gtlbuat.sandbox.my.salesforce.com|Full| \<email>.gtlbuat |Systems の UAT に使用されます。トラブルシューティングにも使用されます。Gearset パイプラインの最後から 2 番目の組織。|必要に応じて、最大月 1 回、最低四半期 1 回|[08/14/2025](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/work_items/9633)|未定|Central Sandbox 1（つまり "Staging Sandbox"）|10000719|CustomerDot<br>Marketo<br>RingLead<br>PSQuote|

## <i class="fas fa-users" id="biz-tech-icons"></i> 私たちの運営方法 {#how-we-operate}

## 技術ドキュメント {#technical-documentation}

- [Go-To-Market 技術ドキュメント](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/)
- [Go-To-Market 統合環境](/handbook/sales/field-operations/sales-systems/gtm-integrated-environments/)
- [License Usage アプリのドキュメント](/handbook/sales/field-operations/sales-systems/license-usage-app/)
- [Salesforce 構成ドキュメント](/handbook/sales/field-operations/sales-systems/salesforce-config/)
- [Lead Source マスターデータセット](/handbook/marketing/marketing-operations/#initial-source)
- [Salesforce Dataloader のインストール/アンインストール/アップグレード手順](dataloader-installation/)

## 私たちと一緒に働く {#working-with-us}

- [Sales System アジャイルボード](https://gitlab.com/groups/gitlab-com/-/boards/1117318?label_name[]=SalesSystems)
- [Sales Systems プロジェクト](https://gitlab.com/gitlab-com/sales-team/field-operations/systems)
- [Salesforce.com APEX リポジトリ](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src)

## 私たちの働き方 {#how-we-work}

- Sales Systems チームは、`GitLab.com` レベルで Milestones として追跡される 2 週間のスプリント/イテレーションで作業します。これは、私たちのビジネスパートナーの多くが運営する方法と Sale Systems チームを整合させますが、[GitLab が提供する](https://about.gitlab.com/solutions/agile-delivery/)ソリューションの 1 つも活用しています
- Systems チームは、私たちのチームを [GitLab のバリュー](/handbook/company/operating-principles/#acknowledging-credit)と最も効果的に整合させると信じているため、マイルストーンの計画と実行において以下の原則を実践するよう努めています
  - [「少なく始めて、多く終わらせる」](/handbook/engineering/development/sec/security-platform/secrets-manager/#starting-new-work)
  - [「Issue のチャーンを減らす」](/handbook/engineering/devops/runner)

### Sales Systems からヘルプを得るためのステップ {#steps-to-getting-help-from-sales-systems}

1. 私たちの[プロジェクト](https://gitlab.com/gitlab-com/sales-team/field-operations/systems)で Issue を作成し、依頼または問題について詳細なビジネス要件を提供することを忘れないでください。担当者は空白のままにしてください
    - この Issue が既存の機能を削除するか、コンポーネントを非推奨にする必要がある場合は、Issue に `technical debt` ラベルを含めてください。
2. 作業スタイルをラベルに合わせるために、Systems チームは追加された順序で Issue に取り組むことを優先し、それに応じて Issue にラベルが付けられます
3. Systems のラベルワークフローとラベルの説明は次のとおりです

      ![Systems のラベルワークフロー](/images/sales/Systemsworkflow.png)

      - ![Sales Systems](/images/sales/Salessystems.png) Systems ボードで作成された新しい Issue は自動的にタグ付けされ、Sales Systems に関連する既存の Issue はこのラベルでタグ付けされます
      - ![Need More Information](/images/sales/SSNeedinformation.png)リクエスト者からの情報を待っている、要件にもっと明確さが必要な Issue。マイルストーンに割り当てられている場合と割り当てられていない場合があり、DRI および/または Systems チームメンバーに割り当てられます
      - ![Out Of Scope](/images/sales/SSOutscope.png)イニシアチブのパラメータ外であり、現在の機能と組み合わせることができない Issue。この Issue はクローズされます
      - ![Ready For Assignment](/images/sales/SSReadyassingment.png)要件収集が完了し受け入れられた Issue。マイルストーンなし、Systems チームメンバーには割り当てられていない
      - ![Assigned](/images/sales/SSAssign.png)進めて作業する準備ができた Issue。マイルストーンにスロットされ、Systems チームメンバーのキューに割り当てられます
      - ![Build](/images/sales/SSBuild.png)現在のマイルストーンにあり、積極的に取り組まれている Systems チームメンバーに割り当てられた Issue
      - ![Ready To Business Owner Review](/images/sales/SSBusinessowner.png)現在のマイルストーンにあり、ゴールラインに近い Issue。サインオフのためにビジネスオーナーにレビューおよびデモする必要があります
      - ![Ready To Deploy](/images/sales/SSReadydeploy.png)現在のマイルストーンにあり、ビジネスオーナーからサインオフを受け、Systems チームメンバーによってデプロイする準備ができている Issue
      - ![Blocked](/images/sales/SSBlocked.png)現在のマイルストーンにあり、技術的な困難により停止している Systems チームメンバーに割り当てられた Issue。および/または、進めるための情報を Systems メンバーに提供することを保留中のビジネスオーナーに割り当てられた Issue

4. 私たちのアジャイル[ボード](https://gitlab.com/groups/gitlab-com/-/boards/1117318?label_name[]=SalesSystems)で Issue のステータスをご確認ください。
5. ビジネスフローに影響する重大な事態（例: 誰も見積もりを作成できない、アカウントが作成されない、Opportunity を Closed Won にできない）がある場合は、上記のプロセスに従い、Issue を `Sales-Support` Slack Channel で共有してください

## Sales Systems Issue のデプロイメント＆コンプライアンスステップ {#sales-systems-issue-deployment--compliance-steps}

Issue をデプロイしてクローズするには、以下のチェックリストにサインオフする必要があります:

- [ ] 1\. \[Change Builder\] 変更されるコンポーネントが変更の Issue に文書化されている
- [ ] 2\. \[Business DRI\] ビジネスユーザー受け入れテストが証拠付きで完了
- [ ] 3\. \[Business Program Owner\] Business Process Owner サインオフ
- [ ] 4\. \[Systems Owner\] System Owner サインオフ
- [ ] 5\. \[Change Implementor\] 変更されるコンポーネントが変更の Issue でビルダーによって文書化されていることを確認
- [ ] 6\. \[Change Implementor\] 正しい `entapps-` デプロイメントタイプの GitLab ラベルを追加
- [ ] 7\. \[Change Implementor or Secondary Reviewer\] PIR を証拠付きで完了。
    1. Salesforce 本番環境でのデプロイメントステータスとデプロイされたコンポーネントのスクリーンショット
    2. 誰が変更をデプロイしたかを示す Gearset デプロイメントスクリーンショット

### [Business DRI] ビジネスユーザー受け入れテストが証拠付きで完了 {#business-dri-business-user-acceptance-testing-complete-with-evidence}

Business DRI は、提供されたソリューションが `完了の定義` として期待通りに動作することを検証した後にサインオフする必要があります。Business DRI は Issue に証拠を追加するか、いくつかのシナリオでは Systems チームメンバーが Business DRI が Issue で確認するための証拠を提供します

#### [Business Program Owner] Business Process Owner サインオフ {#business-program-owner-business-process-owner-sign-off}

チームに関係する Business Process Owner がサインオフを提供する必要があります。チーム / 部門に関するサインオフマトリックスは以下のとおりです

| チーム / レーン                 | 主承認者                                                                                  | 代理承認者                                  |
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

#### [Systems Owner] Systems Owner サインオフ {#systems-owner-systems-owner-sign-off}

Salesforce CRM System Owner がサインオフを提供する必要があります。サインオフマトリックスは以下のとおりです

| 主承認者                                         | 代理承認者                                                       |
|-------------------------------------------------------|-----------------------------------------------------------------------|
| Thiru Subramanian - Manager, CRM Systems              | Nishanth Sekhar - Director, Enterprise Applications (Lead to Cash)    |
| Kiran Chinthapalli - Director, CRM Systems            | Monali Bhide - Manager, IT Enterprise Applications Engineering        |
|                                                       | Pratik Gupta - Manager, IT Enterprise Applications Engineering        |

#### [Change Implementor] 正しい `entapps-RM::[deployment type]` GitLab ラベルを追加 {#change-implementor-add-the-correct-entapps-rmdeployment-type-gitlab-label}

Issue がデプロイされたら、Issue に割り当てられた Sales Systems チームメンバーが、[SDLC - ソフトウェア開発ライフサイクル](/handbook/sales/field-operations/sales-systems/#salesforcecom-change-management-processes-and-sdlc-software-development-life-cycle)に従って以下のデプロイラベルのいずれかでタグ付けする必要があります

- entapps-RM no-deployment-made
- entapps-RM manual-deployment
- entapps-RM deployed-via-metadata-api

#### [Change Implementor] 完了した変更セットのスクリーンショットと MR を添付（コードの場合） {#change-implementor-screenshot-of-completed-change-set-attached-and-mr-attached-if-code}

Issue がラベル `entapps-RM deployed-via-metadata-api` で終わった場合、Issue に割り当てられた Systems メンバーは変更セットのスクリーンショットを追加する必要があります

## マイルストーンのレビューと QA {#milestone-review-and-qa}

マイルストーンをクローズする前に、Sales Systems のリーダーシップによって以下のチェックが行われます:

1. Sales Systems プロジェクト内で Sales Systems チームメンバーが作成した、または Sales Systems チームメンバーに割り当てられたすべての Issue は、Sales Systems ラベルを持っている必要があります。
1. Sales Systems ラベルを持つすべてのクローズされた Issue は、マイルストーンに割り当てられている必要があります。
1. マイルストーン内のすべてのクローズされた Issue は、以下の SDLC ステップが完了し、最終デプロイラベルがあることを確認する必要があります。

### SFDC 開発ガイドライン {#sfdc-development-guidelines}

**作業を開始する前に、以下を確認してください:**

1. ローカルで完全にセットアップされた SFDC 開発環境があること。
    - [Visual Studio Code](https://code.visualstudio.com/?wt.mc_id=DX_841432)
    - [Salesforce Trailhead：VS Code のセットアップ](https://trailhead.salesforce.com/en/content/learn/projects/find-and-fix-bugs-with-apex-replay-debugger/apex-replay-debugger-set-up-vscode)
2. 個人の [SFDC Dev Sandbox](https://gitlab.my.salesforce.com/07E?retURL=%2Fui%2Fsetup%2FSetup%3Fsetupid%3DDeploy&setupid=DataManagementCreateTestInstance)へのアクセスがあること。
3. SFDC 開発環境が SFDC Dev Sandbox に正しく向けられていること
4. ローカルの Sandbox 作業ディレクトリに私たちの [Git リポジトリ](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src)をクローンしていること。
5. 合意されたビジネス要件を提供する明確な技術仕様を持つ GitLab Issue から作業していること。
6. 私たちの[優先度マトリックス](/handbook/sales/field-operations/sales-systems/)に基づいてリクエストの優先度を特定し、適切なラベルを追加していること: `Priority::Low`、`Priority::Medium`、`Priority::High`

**変更管理ステップ:**

1. master ブランチで開始し、`git pull` することを忘れないでください。
2. Issue にリンクする名前で新しいブランチを作成します: `git checkout -b "SalesSystems-158"`。
3. コードを書いている場合は、変更されたクラス、トリガー、またはページに対して `SFDX: Deploy Source To Org` を使用して、頻繁に変更をサンドボックスにプッシュします。
4. 構成を編集している場合は、変更されたオブジェクトまたはメタデータに対して `SFDX: Retrieve Source From Org` を使用して、頻繁に変更をローカル環境にプルダウンします。
5. コードに対するユニットテストを記述して実行し、コードと構成の両方について、SFDC ユーザーインターフェイスで手動で変更をテストします。
6. イテレーションが完了したと感じたら、`git status` を実行して変更されたファイルが期待通りであることを確認します。
7. コミットしたいファイルを `git add [filename]` で追加するか、すべての変更されたファイルを追加したい場合は `git add *` で追加します。
8. 関連するメッセージで変更をコミットします: `git commit -m "Fixing Apex CPU Errors"`。
9. GitLab が提供するリンクを使用して、マージリクエストを開き、[`Draft:` にマーク](/handbook/about/editing-handbook/#marking-a-merge-request-as-draft)し、プロジェクトの Architect に割り当てます。
10. 関連する Issue にプロジェクトの Architect への @ でコメントしてレビューを依頼し、マージリクエストへのリンクを提供します。（これにより、マージリクエストが Issue に自動的にリンクされます）
11. Architect（または割り当てられた代理人）は、[ここで定義されている](https://internal.gitlab.com/handbook/IT/it-change-management/#change-request-types)変更の範囲に基づいて、ストーリーに変更管理レベルを割り当てます。
12. その後、適切な承認（[承認マトリックス](/handbook/sales/field-operations/sales-systems/#approval-matrix)セクションで定義されている通り）が完了したことを Issue に文書化する必要があります。
13. Architect がライブデモを要求した場合は、ミーティングをスケジュールし、エンドカスタマーとリハーサルを行うためにサンドボックスを準備します。
14. Architect がユーザー受け入れテストを要求した場合は、割り当てられたテスターが作業が行われたサンドボックスにアクセスできることを確認し、テストをスケジュールします。
15. ソリューションが合格したら、Architect は `WIP:` ステータスを削除し、変更をマージします。
16. マージされたら、Sandbox から Production（または Architect が要求した場合は Staging インスタンス）へ、すべての関連ファイルを Change Set にパッケージ化します。
17. Change Set に Issue/ブランチと同じ名前を付けます: `SalesSystems-158` で、本番環境にプッシュします。
18. Change Set が本番環境に到着したら、検証します。エラーがある場合は、ステップ 3 に戻ります。ステップ 3、4、5 に従えば、検証時のエラーはまれであるはずです。
19. 変更セットが検証されたら、Architect に ping を送ってデプロイメントをスケジュールします。
20. デプロイメント後、新しいフィールドへの可視性を追加するなどのデプロイメント後のステップを実行します。
21. 機能が期待通りに動作していることをエンドユーザーに確認します。
22. 私たちの[技術ドキュメント](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/)に新しい機能を追加するか、機能のエントリを編集するマージリクエストを作成します。
23. 次のタスクに移る前に、`git checkout master` してから `git pull` でリベースします。**常にプルし続けてください！**
24. 本番環境にデプロイされたマージされた変更セットをクローンし、この変更セットを Staging にプッシュおよびデプロイします。（デプロイ後のステップとセットアップはオプションです）

#### インストール済みパッケージ {#installed-packages}

[インストール済みパッケージ](https://help.salesforce.com/s/articleView?id=sf.distribution_installed_packages.htm&type=5)は、Salesforce プラットフォームで作業する ISV（Independent Software Vendor）から提供され、プラットフォームの機能を拡張する Salesforce のコードと構成を含んでいます。これらは、Salesforce のネイティブ機能を拡張するために、私たちのビジネスパートナーから一般的にインストールおよびリクエストされます。

##### パッケージはマネージドかアンマネージドか? {#is-the-package-managed-vs-unmanaged}

パッケージには、[マネージドかアンマネージド](https://developer.salesforce.com/docs/atlas.en-us.188.0.packagingGuide.meta/packagingGuide/packaging_about_packages.htm)の 2 つの種類があります。マネージドパッケージは署名されたアプリと同等で、自己完結型のソースがパッケージ内に封印されています。アンマネージドパッケージは署名されておらず、一般的に生のコードと構成を含んでいます。

通常、ベンダーは [Salesforce AppExchange](https://appexchange.salesforce.com/)を介して、または彼らのリポジトリからの直接インストールを介してマネージドパッケージを提供します。アンマネージドパッケージは一般的にベンダーから提供され、手動でインストールする必要のある生のソースまたは構成を含む場合があります。注: GitLab に提供されたコードは、特定の対応が提供されない限り（例: ベンダーの基本機能を拡張するために契約する場合）、提供したベンダーの IP のままです。これらの追加の考慮事項のため、アンマネージドパッケージはインストールプロセスの一部として追加のステップを完了する必要があります。

パッケージコードは、それを生み出したベンダーがサポートおよびトラブルシューティングする責任があります。機能で問題が発生した場合は、問題のベンダーに連絡してトラブルシューティングしてください。ベンダーが私たちの環境への変更を推奨する場合は、以下の 2 つのプロセスのいずれかを使用して、ベンダーが要求する変更を追跡するために Systems で Issue をログします。

##### システムの安定性が最優先 {#system-stability-comes-first}

私たち（Sales Systems）は、このパッケージがシステムパフォーマンスや制限に関連する問題を引き起こすと判断された場合、いつでもマネージドまたはアンマネージドコードを削除またはアンインストールする権利を留保します。

アンマネージドコードまたは構成を受け入れる場合、ケースバイケースで受け入れるかどうかを選択します。アンマネージドパッケージは、私たちのマネージドコードに比べて、重大なリスクとリソース利用をもたらします。私たちの目標は、常にベンダーからマネージドパッケージを受け入れることです。

##### マネージドパッケージのインストール/アップグレードプロセス {#managed-package-installationupgrade-process}

1. パッケージを特定し、なぜインストールまたはアップグレードすべきだと考えるかの理由を特定します。
1. インストールしたいパッケージのバージョンをサンドボックス環境内にインストールします。
1. 提供される機能が要件を満たし、既存の機能にマイナスの影響を与えないことをテストおよび確認します。
1. STAGING 環境にパッケージをインストールするための Issue を Sales Systems で開きます。
    - Issue の説明にパッケージへのリンクとベンダーから提供されたインストール手順を必ず含めてください。
1. パッケージが STAGING でインストールされ、進めることが確認されたら、提供される機能が要件を満たし、既存の機能にマイナスの影響を与えないことをテストおよび確認します
1. STAGING で正常にインストールされた場合、本番環境へのインストールを進める意図を発表し、トレーニングドキュメントを準備します。
1. ハンドブックの一部としてパッケージに関する関連情報を文書化します。
   - この例として、パッケージの一部である SFDC フィールドや、それがサポートするビジネスプロセスがあげられます。
1. パッケージを本番環境にインストールし、Issue を更新してクローズします。

##### アンマネージドパッケージのインストール/アップグレードプロセス {#unmanaged-package-installationupgrade-process}

1. パッケージとそれをインストールまたはアップグレードすべきだと考える理由、および別途インストールする必要のあるカスタムコードまたは構成を特定します。
1. インストールしたいパッケージのバージョンをサンドボックス環境内にインストールします。
1. 提供される機能が要件を満たし、既存の機能にマイナスの影響を与えないことをテストおよび確認します。
1. STAGING 環境にパッケージをインストールするための Issue を Sales Systems で開きます。
    - Issue の説明にパッケージへのリンクとベンダーから提供されたインストール手順、およびパッケージ外でインストールされたコンポーネントのインベントリを必ず含めてください。
1. アンマネージドパッケージの一部として作成され GitLab ソースで追跡されるカスタムコードまたはメタデータを含めるために、私たちの [Git リポジトリ](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src)でブランチを作成します。
1. MR を Sales Systems の開発者に割り当てて、Systems によるブランチのパッケージレビューを依頼します。
1. パッケージが STAGING でインストールされ、進めることが確認されたら、提供される機能が要件を満たし、既存の機能にマイナスの影響を与えないことをテストおよび確認します
1. STAGING で正常にインストールされた場合、本番環境へのインストールを進める意図を発表し、トレーニングドキュメントを準備します。
1. ハンドブックの一部としてパッケージに関する関連情報を文書化します。
   - この例として、パッケージの一部である SFDC フィールドや、それがサポートするビジネスプロセスがあげられます。
1. パッケージを本番環境にインストールし、Issue を更新してクローズします。

##### インストール済みパッケージの削除プロセス {#installed-package-removal-process}

アンインストールプロセスは、パッケージがマネージドかアンマネージドかに関係なく同じです。

1. パッケージを特定し、なぜ削除できると考えるかの理由を特定します。
2. パッケージの本来の意図が何だったかについて初期調査を行い、機能の使用を所有/所有していた人物を特定します。
   - GitLab の Tech Stack Google Sheet はこの情報を確認するのに最適な場所であり、[こちらで見つけることができます](https://docs.google.com/spreadsheets/d/1mTNZHsK3TWzQdeFqkITKA0pHADjuurv37XMuHv12hDU/edit?usp=sharing)
3. オーナーと Issue を開いてさらに調査します。この議論で、削除可能かどうかの確認を得ます。
   - Issue に `technical debt` ラベルを追加します。
4. 進めることが確認されたら、サンドボックスからパッケージを削除してテストします。
5. サンドボックスから正常に削除された場合、削除を進める意図を発表します。
6. パッケージに関する関連情報を文書化します。
   - この例として、パッケージの一部である SFDC フィールドがあげられます。
7. 本番環境からパッケージを削除し、Issue を更新してクローズします。

### フィールド & プロセス非推奨 {#field--process-deprecation}

- フィールドとプロセスの非推奨は作成と同じくらい一般的な出来事であるため、Systems チームが任意のフィールドやプロセスを非推奨にする際に活用できる繰り返し可能なプロセスを実装することが重要です。

#### フィールド非推奨 {#field-deprecation}

- このプロセスは、Systems チームによって最も頻繁に使用されます。Salesforce にもう必要のないフィールドがあるか、それを認識している場合は、[Sales Systems チームからのヘルプを得る](#steps-to-getting-help-from-sales-systems)に概説されているプロセスに従って Sales Systems チームに通知してください

1. 非推奨を調査するすべてのフィールドをリストアップする Issue を開きます。Issue の説明のテーブルに、フィールド名、フィールド API 名、およびフィールドが関連付けられているオブジェクトを必ず含めてください。Issue に `technical debt` ラベルを追加します。
2. Issue でタグ付けして、来るべきフィールド非推奨を Data チームに警告します。
3. 必要に応じて、関連するすべてのパートナーチーム（Marketing Ops、Sales Ops、Finance Ops など）に警告します
4. フィールド名の先頭に `[DEPRECATE]` を付加します。フィールド名がそれほど長いフィールド名を収容できない場合は、元の名前を説明にコピー＆ペーストし、名前から不要な文字を削除して再試行します。このため、フィールド名の先頭に `[DELETE]` を付加することも許容されます。
5. Visual Studio Code で、master からプルし、Issue 内の各 API 名のスキャンを実行します。フィールドが使用されている場合、このフィールドを含めないようにコードを更新できるかどうかを調査します。
6. 前のステップでコードが更新された場合は、マージリクエストを準備し、Issue に関連付けます。
7. サンドボックスが古い場合は、[Systems チームと協力してリフレッシュ](/handbook/sales/field-operations/sales-systems/#sandbox-refreshes)し、最近の編集が次のステップに含まれるようにします。
8. 更新されたコードをサンドボックスにプッシュし（該当する場合）、変更セットを開始します。
9. 非推奨にする資格がまだあるすべてのフィールドについて、サンドボックスにログインし、それらを 1 つずつ削除しようとします。フィールドと、フィールド更新、ワークフロールール、検証ルールなどの間の接続を記録します（このステップでは Reports、Report Types などは無視できます）
10. 前のステップで見つかった接続を調査し、フィールドがまだ削除可能かどうかを確認します。
11. 削除できないすべてのフィールドについて

    - フィールドの説明に GitLab Issue のリンクを貼り付けることで、調査済みのフィールドに調査 Issue をリンクします。
    - Salesforce のフィールドのオーナーとして誰かを割り当てます

12. 削除できるすべてのフィールドについて

    - Issue の最終コメントでそれらをリストアップします
    - Issue の期日を、それらが削除される日付に更新します
    - タグ付けされた関連チームと問題がないことを確認します
    - 更新された自動化（該当する場合）の変更セットを Issue 期日前に検証します
    - Issue 期日に、変更セットをデプロイし、本番環境からフィールドを削除します。可能であれば、フィールド削除と Salesforce の `Deleted Fields` セクションからフィールドを削除する間に 1 日のラグタイムを設けます

#### プロセス非推奨 {#process-deprecation}

- プロセスを非推奨にすることは、しばしばチームの行動の変化と、プロセスの更新を含みます。Systems チームは、これらの変更などに対処する詳細なドキュメントに取り組んでおり、まもなく詳細情報が来る予定です！

#### サービスユーザーの非アクティブ化 {#deactivate-service-user}

- この非アクティブ化プロセスは、サービスユーザープロファイルを非アクティブ化するために作られました。サービスアカウントは、統合ユーザーや接続ユーザーなどとして使用されるアカウントです。サービスユーザーアカウントを非アクティブ化するには、[テンプレート](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=)に従ってください。標準ユーザーの非アクティブ化は Sales Operations が行うことに注意してください。

## GitLab と Salesforce での Sales System の CI/CD ジャーニー {#sales-systems-journey-with-cicd-using-gitlab-and-salesforce}

私たちは独自の Salesforce 環境のための最初のパイプラインを作成することにより、独自の GitLab ツールをさらに活用するジャーニーを開始しました！

私たち独自のパイプラインは、@mayanktahil と @francispotter による素晴らしい仕事に基づいています: [SFDC CI/CD テンプレート](https://gitlab.com/sfdx/sfdx-project-template)。このプロジェクトに関する詳細情報に興味があり、それが動作しているのを見たい場合は、[GitLab を使った Salesforce 開発](https://www.youtube.com/watch?v=Z1JSIFLdIB4)と [GitLab と Salesforce で DevOps を加速](https://www.youtube.com/watch?v=tylPp9QlLu4)をチェックしてください

これに伴い、STAGING 組織への手動変更を制限して[コンプライアンスコントロール](/handbook/security/security-assurance/security-compliance/guidance/compliance/)をより厳密に適用するため、いくつかの変更が生じます。

2/16/2022 から、以下のメソッドが STAGING へのデプロイの唯一の承認された方法です。

- 別の GitLab 所有のサンドボックスからのインバウンド変更セット経由
- ベンダーパッケージのインストールまたはアップグレード経由
- CI/CD パイプライン経由の自動デプロイメント

### 私たちの CI/CD テンプレート {#our-cicd-template}

この CI/CD テンプレートの私たち独自のバージョンは[ここ](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/.gitlab-ci.yml)で見つけることができます。私たちがイテレーションできるように、簡略化されたバージョンです。

このテンプレートは [Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.234.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm)を使用する機能を削除し、代わりに [組織ベースのデプロイモデル](https://trailhead.salesforce.com/content/learn/modules/org-development-model)を使用します。この CI/CD ファイルで使用されるモデルには、'STAGING' と表示される単一の環境が構成されています。デプロイメントスクリプトはまた、デプロイ対象をルートソースディレクトリに保存された ApexClasses、ApexTriggers、ApexPage、ApexComponents のみに限定します。

パイプラインは以下のアクションを実行します:

- Merge Request に関連するブランチにコミットが行われるたびに、SFDX CLI を Runner にインストールし、STAGING に対して検証デプロイメントを実行するために sfdx force:source:deploy メソッドを実行します。
- この検証デプロイメントは、新しいコミットソースブランチで見つかったすべての ApexClass、ApexTrigger、ApexComponent、ApexPage オブジェクトをコンパイルします。
- コンパイルが成功した場合、すべてのユニットテストが合格していることを確認するために、SANDBOX 組織のすべてのユニットテストが実行されます。
- コンパイルまたはユニットテストが失敗した場合、パイプラインはジョブの出力にエラーを個別の行項目として表示します。
  - その後、MR はマージからブロックされます。
- コンパイルが成功し、ユニットテストが合格した場合、コードレビューが完了した後に MR がマージのためにクリアされます。
  - パイプラインはまた、ユーザーが STAGING 環境へのソースコードのデプロイメントをトリガーすることを可能にします。
  - これは現時点では手動プロセスです（[次は何ですか?](#whats-next)を参照）、マージが完了した後、MR をマージしている人によってトリガーされます。
    - チームは、複数の MR が同時にマージされている場合のデプロイメントの柔軟性のために、このステップを手動のままにすることを決定しました。
    - このシナリオでは、最後の MR のみをデプロイします。これは、すべての以前の MR がマージされた最終的な完全な 'master' ブランチを持つためです。

### パイプラインの利点 {#benefits-of-the-pipeline}

- Sales Systems ソースに保存された ApexClasses、ApexTriggers、ApexPage、ApexComponents へのすべての変更が、変更セットを介して手動で管理されたり、手動デプロイ経由で管理されたりするのではなく、ソースから直接管理されるようになります。
- STAGING 環境への手動変更の数を減らし、潜在的な競合と問題が本番環境に忍び込むのを制限します。
- [GitLab Analytics の力](https://docs.gitlab.com/ee/user/analytics/)を活用して、チームをよりよく運営する方法をよりよく理解できます！

### 次は何ですか? {#whats-next}

私たちは、開発者環境からソース管理への構成変更の容易なエクスポートを可能にするために Salesforce が昨年リリースした機能である [Sandbox Source Tracking](https://developer.salesforce.com/blogs/2021/01/learn-moar-with-spring-21-sandbox-source-tracking)を使用することを探求し始めています。

このツールは、私たちの管理者が開発者組織への複雑な変更を追跡し、これらをソース管理に簡単にチェックインできるようにします。

そうしたら、STAGING のパイプラインでこれらのオブジェクトを含めるためにパイプラインを拡張できます。これにより、フィールドのリネーム、ピックリスト値の変更、検証ルール、ワークフロー、フローなどの管理上の変更を検証し、STAGING に迅速にデプロイできるようになります。これにより、管理者が環境から STAGING に変更セットをビルドする手動ステップが削除され、他のことに集中する時間を節約できます。

これに続いて、私たちの次の目標は、MR がマージされた時点で STAGING へのデプロイメントを自動化したいかどうかを確認することです。これは私たちにクリックを 1 回節約するだけですが、チームとして STAGING 環境への自動デプロイメントを使用するプロセスに慣れるために、私たちにとって重要なステップです。
