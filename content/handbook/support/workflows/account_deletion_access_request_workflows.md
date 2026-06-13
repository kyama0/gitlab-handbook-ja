---
title: アカウント削除＆データアクセスリクエスト - ワークフロー
category: GitLab.com
subcategory: Legal
description: "アカウント削除およびデータアクセスのリクエスト処理を行う方法"
controlled_document: true
upstream_path: /handbook/support/workflows/account_deletion_access_request_workflows/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
translated_at: "2026-06-12T21:17:46Z"
translator: claude
stale: false
lastmod: 2026-06-11T09:12:49-07:00
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

このドキュメントには、アカウント削除やデータアクセスを含む、各種データ主体リクエストを処理する方法に関する手順が記載されています。**送信処理**と**リクエスト処理**の 2 つのステージに分かれており、この順序で実施します。**すべてのリクエストは、データ主体の管轄区域に応じて法的に許容される期間内に履行する必要があります。**

## 手順

### **Stage 1:** 提出処理

プライバシーリクエストは [Privacy Center](https://privacy.gitlab.com/) を通じて送信された場合にのみ処理できます。それ以外の方法でリクエストを受け取った場合は、そのリクエストをクローズし、Privacy Center の `Make a Privacy Request` ボタンからリクエストを開くようユーザーに案内します。Privacy Center は Transcend によって提供されており、「the system（システム）」への言及は、プライバシーリクエストが取り込まれ処理される Transcend プラットフォームを指します。

ユーザーが Privacy Center を通じてリクエストを送信すると、*GitLab アカウントが存在しない場合でも*、システムが自動的に新しいリクエストを作成します。ユーザーとのすべてのコミュニケーションはプライバシーリクエスト内で行われます。

<details>
<summary markdown="span">プライバシーリクエスト内でデータ主体にメッセージを送信するには</summary>

- Incoming Request ビューから該当のリクエストをクリックします
- Messages タブに移動します
- 左側の青い Email アイコンをクリックします
- 上部の Template ドロップダウンボックスから目的のテンプレートを選択します
- 必要に応じてメールの本文を調整します
- Send ボタンをクリックします

</details>

このステージの目的は、Privacy Center を通じて送信されなかったリクエストをクローズする方法を説明することです。

#### Zendesk への提出

サポートチケットとして Zendesk を通じてリクエストを受け取った場合は、以下のいずれかを行います。

- チケットが**アカウント削除**リクエストに関するものである場合は、[Support::SaaS::Gitlab.com::Account Deletion Instructions - GitLab.com](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Account%20Deletion%20Instructions-%20GitLab.com.md?ref_type=heads) マクロを適用し、チケットを solved としてマークします。

- チケットが**データアクセス**リクエストに関するものである場合は、[General::Personal Data Access Request Instructions - GitLab.com](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/General/Personal%20Data%20Access%20Request%20Instructions%20-%20GitLab.com.md?ref_type=heads) マクロを適用して、GitLab の [Privacy Center](https://privacy.gitlab.com) を使ってリクエストを送信するようユーザーをリダイレクトし、チケットを solved としてマークします。

- チケットが**データポータビリティ**リクエストに関するものである場合は、ユーザーにさらに確認します。ポータビリティリクエストは、ユーザーが GitLab から別のプラットフォームへ移行したい場合にのみ適用されます。その場合、GitLab は Project Import and Export 機能によるセルフサービス向けの手順を提供します。あるプラットフォームから別のプラットフォームへ移行またはポートするためにユーザーが必要とする移行ドキュメントは、通常、移行先プラットフォームが提供します。

- チケットが**データエクスポート**リクエストに関するものである場合は、アクセスリクエストとして扱う必要があります。[General::Personal Data Access Request Instructions - GitLab.com](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/General/Personal%20Data%20Access%20Request%20Instructions%20-%20GitLab.com.md?ref_type=heads) マクロを適用して、GitLab の [Privacy Center](https://privacy.gitlab.com) を使ってリクエストを送信するようユーザーをリダイレクトし、チケットを solved としてマークします。

### **Stage 2:** リクエスト処理

リクエストの種類に基づき、以下の適切なワークフローを見つけてプライバシーリクエストを処理します。

- [削除リクエスト](#deletion-requests)
- [データアクセスリクエスト](#data-access-requests)
- [データポータビリティリクエスト]*(近日提供予定)*

#### **削除リクエスト** {#deletion-requests}

以下はユーザーが送信できるリクエストの種類です。各リンクをクリックすると、そのリクエストを処理するための関連ワークフローに移動します。

- [個人ユーザーによる削除](#individual-user-deletion)（GitLab.com アカウント、Zendesk、Customer Portal、およびすべてのマーケティングシステムの個人データを削除します）
- [エンタープライズユーザーによる削除](#enterprise-user-deletion)（GitLab.com アカウント、Zendesk、Customer Portal、およびすべてのマーケティングシステムの個人データを削除します。Enterprise Account Owner の承認が必要です）
- [Customer Portal アカウント削除](#portal-account-deletion)（customers.gitlab.com 内の個人データのみを削除します）
- [故人ユーザーの削除](#deceased-account-owner-deletion)（GitLab.com アカウント、Zendesk、Customer Portal、およびすべてのマーケティングシステムの個人データを削除します。権限を有する代理人が送信する必要があります）
- [マーケティング削除](#marketing-deletion)（マーケティングおよび営業関連の個人データのみを削除します）

現在、個人ユーザーまたはエンタープライズユーザーによる削除のみが、送信時に自動チェックで検証されます。マーケティング削除は自動的に処理されます。故人ユーザーの削除リクエストは、代理権の証明に関連する法的要件のため、追加の検証ステップを経ます。

##### **個人ユーザーの削除** {#individual-user-deletion}

このワークフローは、データ主体が自身を個人ユーザーであると申告した削除リクエストに適用されます。以下のフォーム入力項目は、組み込みの自動チェックを使用して検証されます。

- メールアドレス（存在する必要があります）
- ユーザー名（存在する必要があります）
- ユーザー名とメールアドレスが同一アカウントで一致する必要があります
- アカウントが [Enterprise User](https://docs.gitlab.com/user/enterprise_user/) でないこと。

送信後、GitLab アカウントが見つかった場合、自動チェックはリスクレーティングを返します。リスクレーティングは、ユーザーアカウントを削除するために追加の検証が必要かどうかを判断するために使用されます。サポートエンジニアは、リスクレーティングが計算される方法を [Support Workflow page](https://internal.gitlab.com/handbook/support/workflows/data-subject-requests/) *(internal only)* で確認できます。自動チェックでユーザーアカウントが見つからない場合、システムが生成するメールメッセージでユーザーに通知されます。

###### **Step 0:** 重複リクエストのチェック

Incoming Request ビューに移動し、コア識別子を使って検索することで、ユーザーからの既存リクエストを確認します。同じ種類の既存リクエストが表示された場合は、そのリクエスト自体をクリックして Status タブを確認し、元のリクエストの進捗を判断します。既存のリクエストがまだ `compiling` または `deleting` ステージを進行中の場合は、`Duplicate Request` メッセージをユーザーに送信して、後続の重複リクエストをクローズします。

注意: 削除リクエストに関してサポートエンジニアに割り当てられるタスクは 2 つあります。

`Support Engineer (GitLab Deletion)` は、GitLab ユーザーアカウントを**削除できる**かどうかを判断し、削除できる場合は削除を実行する役割を担います。*現在、ステップごとのアクションはタスクを配信する email にも表示されます。*

`Support Engineer (Zendesk/cDot Deletion)` は、ユーザーの Customers Portal アカウントおよび/または Zendesk アカウントが存在するかどうかを判断する役割を担います。このタスク内では削除は行われません。ただし、Customers Portal の削除を実行するコンソールエンジニアと、Zendesk アカウントを削除する Support Readiness に対し、後続のタスクが割り当てられるトリガーとして機能します。

###### **Step 1:** リスク評価のレビュー、アカウントタイプの確認、追加検証質問の送信

1.1. アカウントが Enterprise User かどうか

リクエストの Details タブで、データ主体の種類が `Enterprise User` であり、**かつ**自動チェックでもアカウントが Enterprise User のものであると示されている場合は、ここで中止して直接 [Enterprise User Deletion](#enterprise-user-deletion) に進みます。
[エンタープライズユーザーのサポート定義](https://gitlab.com/gitlab-com/content-sites/handbook/blob/main/content/handbook/support/workflows/gitlab-com_overview.md#enterprise-users)も適用される点に注意してください。

1.2 リスクレーティングの確認

自動チェックによって medium または high のリスクレーティングが生成された場合は、**ユーザーがプライベートプロジェクトを持っている場合に限り**、`Medium Risk GitLab Account Verification Question` メッセージまたは `High Risk GitLab Account Verification Question` メッセージのいずれかをユーザーに送信します。プライベートプロジェクトがない場合は、追加の検証質問を送信しません。ユーザーはこれらの質問に対して 7 暦日以内に回答する必要があります。この期間中、`Support Engineer (GitLab Deletion)` タスクは開いたままにしておく必要があります。

###### 応答なし

ユーザーが 7 暦日以内に回答しない場合は、タスクを `Exception` としてマークし、ユーザーが検証に回答しなかった旨のメモを追加します。

###### **Step 2:** ブロックまたは禁止されたアカウント

ユーザーアカウントがブロックまたは禁止されていない場合は、このセクションをスキップします。

ユーザーが自身でアカウントを削除したことによってブロックされている場合は、`Blocked Account Deletion Request` メッセージを送信し、`Support Engineer (GitLab Deletion)` タスクを Complete としてマークします。

アカウントがブロックまたは禁止されている場合は、Trust and Safety に [ブロックされたアカウントの復旧](/handbook/support/workflows/reinstating-blocked-accounts/#blocked-accounts) に関する Issue を開いて `Account Reinstatement` ワークフローを進めます。ただし、中国における無料ユーザーのブロックなど、規制上の理由によるブロックまたは禁止状態の場合は、サポートエンジニアは #help-transcend で Privacy チームにレビューを依頼する必要もあります。判断が下されるまで `Support Engineer (GitLab Deletion)` タスクは開いたままにしておく必要があります。セキュリティレビューを依頼した旨を示すメモをタスクに追加してください。`Security Review Requested` メッセージをデータ主体に送信します。

アカウントのブロックまたは禁止が解除された場合は、`Security Review Complete` メッセージをデータ主体に送信し、残りのプロセスを通常どおり進めます。

アカウントがブロックまたは禁止のままの場合は、`Security Review Denied` メッセージをデータ主体に送信し、`Support Engineer (GitLab Deletion)` タスクを Step 3 の下で Exception としてマークします。

###### **Step 3:** 非 Enterprise ユーザーの有償サブスクリプションステータスの確認

1. アカウントが Enterprise user で**ない**ことを確認します。Enterprise user である場合は、[Enterprise user deletion](#enterprise-user-deletion) のステップに従います。
1. メールアドレスを使って Customers Portal を検索します。
1. Customers Portal アカウントが存在しない場合は、Step 4 に進みます。
1. Customers Portal アカウントが見つかり、かつ `Subscription` バッジがある場合:
    1. `Zuora Subscriptions` タブをクリックします。
    1. `End Date` と `Auto-renew` の値を記録します。Auto-renew が yes の場合、自動更新が有効になっています。それ以外の場合は無効です。
1. **いずれかの**サブスクリプションの `End Date` が将来の日付である場合:
    1. リクエストの `Details` タブに次の形式でメモを追加します: `Cdot account has active saas subscription (A-S000xxxx) which expires on 202x-xx-xx auto-renewal is <dis/en>abled - https://customers.gitlab.com/admin/customer/<ID>`
    1. `help-transcend` チャンネルで Bronwyn Barnett および/または Stephanie Ebbert をタグ付けして、リクエストに追加したメモを Privacy に通知します
    1. Gitlab.com アカウント、Zendesk アカウント、CDot アカウントの削除は一切行いません。Step 4 に進まないでください。
1. **すべての**サブスクリプションの `End Date` が過去である場合、またはサブスクリプションが一覧に表示されていない場合は、Customers Portal アカウントへのリンクを付けたメモを追加します。Step 4 に進みます。

アクティブなサブスクリプションを持つ非エンタープライズユーザーに属する削除リクエストの場合:

- Privacy チームは、サブスクリプションの終了日まで Transcend 内でアカウント削除リクエストを一時停止します。
- Privacy チームは、アクティブなサブスクリプションが存在する間はアカウント削除（マーケティングアカウントデータを除く）を処理できないことをデータ主体に通知します。これは、アカウントデータを処理する私たちの法的根拠が契約上の義務の履行であり、その義務に早期解約条項が含まれていないためです。
- 自動更新期間を含むサブスクリプションの終了後、Privacy チームはアカウント削除プロセスを再開します。その時点で、サポートエンジニアは該当する GitLab.com アカウント、Zendesk アカウント、または CDot アカウントの削除を進めることができます。
- Privacy チームは、サブスクリプション終了後に有料の非エンタープライズユーザーアカウントを Zuora から削除するよう、30 日ごとに Billing/Accounts チームに通知します。

###### **Step 4:** 削除を実行する

Step 4.1 の条件に該当しない限り、4.2 のステップを実行して GitLab アカウントを削除します。

4.1 - **アカウントがすでに削除されている**

ユーザーがリクエストを送信した後に GitLab アカウントを削除している可能性があります。その場合、それ以上のアカウント検証やリクエストの進行はできません。`Account Already Deleted` メッセージをデータ主体に送信し、`Support Engineer (GitLab Deletion)` タスクを completed としてマークします。

4.2 - **GitLab アカウントの削除**

- 削除を妨げているグループ（ユーザーが唯一のオーナーであるグループなど）を削除します。GitLab.com では[グループ削除](https://docs.gitlab.com/user/gitlab_com/#delayed-group-deletion)に 30 日の遅延があるため、グループを削除した後は Advanced Settings に移動し、`Delete group immediately` を選択して削除を完了します。
- `Delete user and contributions` でユーザー削除を開始します。これは、ユーザーが参加していてユーザーが唯一のオーナーではないプロジェクトは削除しない点に注意してください。ただし、ユーザーが作成した個人プロジェクトはすべて削除されます。
- 削除は遅延する場合があるため、ユーザーが完全に削除されたことを確認します。
- [runbook](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) の [Deleting Data](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) セクションのみに従って、GitLab Data Platform で削除を実行するための .csv を追加または既存のものを編集します。
- 最新バージョンの .csv を GDPR フォルダにアップロードします。

4.3 - `Support Engineer (GitLab Deletion)` タスクでの対応:

- ユーザーアカウント削除のすべてのステップが完了したら `Complete` としてマークします。
- ユーザーが追加の検証質問に失敗した場合、または削除のためにアカウントのブロックや禁止を解除できない場合は `Exception` としてマークします。Exception としてマークした理由を示すメモをタスクに追加します。

###### **Step 5:** Zendesk と Customers Portal でアカウントを確認する

- 両方のシステムでアカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Complete としてマークします。
- どちらのシステムでもアカウントが見つからない場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Not Found としてマークします。
- 片方のシステムでのみアカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Exception としてマークし、どのシステムでアカウントが見つかったかを示すメモを追加します。

サポートエンジニアは Zendesk または Customers Portal アカウントの削除を行いません。`Support Engineer (Zendesk/cDot Deletion)` タスクが解決された後、コンソールエンジニアが Customers Portal アカウントを削除するための、および/または Support Readiness Specialist が Zendesk アカウントを削除するための、別個のタスクがトリガーされます。

すべてのタスクが完了すると、システムは自動的にユーザーへリクエストが履行された旨のメッセージを送信します。

##### Enterprise ユーザーの削除 {#enterprise-user-deletion}

このワークフローは、データ主体が自身をエンタープライズユーザーであると申告した削除リクエストに適用されます。以下のフォーム入力項目は、組み込みの自動チェックを使用して検証されます。

- メールアドレス（存在する必要があります）
- ユーザー名（存在する必要があります）
- ユーザー名とメールアドレスが同一アカウントで一致する必要があります
- アカウントが Enterprise User であること

GitLab はエンタープライズユーザーの Controller ではありません。したがって、[Enterprise User](https://docs.gitlab.com/user/enterprise_user/) アカウントは Enterprise Account Owner の許可なしには削除できません。ただし、送信時に自動チェックが実行され、アカウントが見つかり Enterprise User であることが確認された場合はリスクレーティングが返されます。リクエストが `Enterprise User` のデータ主体種別として送信されたものの、自動チェックではアカウントが Enterprise User では**ない**と検証される場合があります。その場合、リクエストは個人ユーザーによって送信されたものとして扱う必要があります。リスクレーティングは、ユーザーアカウントを削除するために追加の検証が必要かどうかを判断するために使用されます。サポートエンジニアは、リスクレーティングとリスクスコアが計算される方法を Support Workflows *(internal only)* で確認できます。

エンタープライズユーザーに、削除ではなく復旧によって解決できるアカウントアクセスや類似の問題を記載した既存の Zendesk チケットがあるかどうかを確認します。問題に応じた適切な解決プロセスを、既存のチケット上で、または下記 Step 1 のグループオーナー宛のアウトバウンドチケット上で実施します。

自動チェックでユーザーアカウントが見つからない場合、システムが生成するメールメッセージでユーザーに通知されます。

###### **Step 1:** 許可の取得

削除リクエストがエンタープライズユーザーに関するものである場合は、`Enterprise User` メッセージをデータ主体に送信します。データ主体には、組織のシステム管理者への連絡を試みてほしいかどうかを示すために 7 日間の回答期間があります。

- データ主体が 7 日以内に回答せず、**かつ**組織管理者がサポートチケットを通じてアカウント削除の書面による指示を提供していない場合は、`No Enterprise Admin Permission-Deletion` メッセージを送信し、タスクを Exception としてマークします。
- データ主体が、アカウント削除の許可を得るために組織管理者への連絡を試みるよう依頼した場合は、エンタープライズユーザーアカウントのオーナーに連絡するための [このワークフロー](/handbook/support/workflows/account_changes/#request-from-an-enterprise-user-that-may-or-may-not-be-part-of-the-group) の `Step 5. Contact Owner` を使ってこれを行います。管理者には 10 暦日の回答期間を与えます。
  - 許可が与えられた場合は、サポートチケットへのリンクを付けたメモを `Support Engineer (GitLab Deletion)` タスクに追加し、下記のとおりエンタープライズユーザーアカウントの削除を進めます。
  - 許可が与えられない場合は、許可が得られなかったことを記録するためにサポートチケットへのリンクを付けたメモを `Support Engineer (GitLab Deletion)` タスクに追加し、タスクを Exception としてマークします。

###### **Step 2:** 削除を実行する

Step 2.1 の条件に該当しない限り、2.2 のステップを実行して Gitlab アカウントを削除します。

2.1 - **アカウントがすでに削除されている**

ユーザーがリクエストを送信した後にアカウントを削除している、またはエンタープライズ管理者がそれを削除できた可能性があります。その場合、それ以上のアカウント検証はできません。`Account Already Deleted` メッセージを送信し、`Support Engineer (GitLab Deletion)` タスクを complete としてマークします。

2.2 - **GitLab アカウントの削除**

- 削除を妨げているグループ（ユーザーが唯一のオーナーであるグループなど）を削除します。GitLab.com では[グループ削除](https://docs.gitlab.com/user/gitlab_com/#delayed-group-deletion)に 30 日の遅延があるため、グループを削除した後は Advanced Settings に移動し、`Delete group immediately` を選択して削除を完了します。
- `Delete user and contributions` でユーザー削除を開始します。これは、ユーザーが参加していてユーザーが唯一のオーナーではないプロジェクトは削除しない点に注意してください。ただし、ユーザーが作成した個人プロジェクトはすべて削除されます。
- 削除は遅延する場合があるため、ユーザーが完全に削除されたことを確認します。
- [runbook](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) の [Deleting Data](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) セクションのみに従って、GitLab Data Platform で削除を実行するための .csv を追加または既存のものを編集します。
- 最新バージョンの .csv を GDPR フォルダにアップロードします。

###### **Step 3:** Zendesk と Customers Portal でアカウントを確認する

- 両方のシステムでアカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Complete としてマークします。
- どちらのシステムでもアカウントが見つからない場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Not Found としてマークします。
- 片方のシステムでのみアカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Exception としてマークし、どのシステムでアカウントが見つかったかを示すメモを追加します。

サポートエンジニアは Zendesk または Customers Portal アカウントの削除を行いません。`Support Engineer (Zendesk/cDot Deletion)` タスクが解決された後、コンソールエンジニアが Customers Portal アカウントを削除するための、および/または Support Readiness Specialist が Zendesk アカウントを削除するための、別個のタスクがトリガーされます。

すべてのタスクが完了すると、システムは自動的にユーザーへリクエストが履行された旨のメッセージを送信します。

##### マーケティング削除 {#marketing-deletion}

サポートエンジニアにはマーケティング削除リクエストにおけるタスクはありません。この種類のリクエストでは、システムからサポートにタスクが割り当てられることはありません。

##### **Portal アカウントの削除** {#portal-account-deletion}

このワークフローは、データ主体が自身を customers portal アカウント（customers.gitlab.com）のオーナーであると申告した削除リクエストに適用されます。

- customers portal アカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを complete としてマークします。
- customers portal アカウントが見つからない場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを not found としてマークします。

サポートエンジニアは customers portal アカウントの削除を行いません。`Support Engineer (Zendesk/cDot Deletion)` タスクが解決された後、コンソールエンジニアがアカウントを削除するための別個のタスクがトリガーされます。

すべての関連タスクが完了すると、システムは自動的にユーザーへリクエストが履行された旨のメッセージを送信します。

#### 死亡したアカウントオーナーの削除 {#deceased-account-owner-deletion}

このワークフローは、個人ユーザーに関して、権限を有する代理人または [Designated Account Successor](https://docs.gitlab.com/user/profile/account/account_succession/) によって送信された削除リクエストに適用されます。このワークフローは、Designated Account Manager によって送信された削除リクエストには適用されません。その権限はアカウントオーナーの死亡をもって消滅するためです。

以下のフォーム入力項目は、組み込みの自動チェックを使用して検証されます。

- メールアドレス（存在する必要があります）
- ユーザー名（存在する必要があります）
- ユーザー名とメールアドレスが同一アカウントで一致する必要があります
- アカウントが Enterprise アカウントでないこと

注意: フォームでは、メールアドレスを以下の優先順位で尋ねています。

1) アカウント上のプライマリまたはセカンダリのメールアドレス（権限を有する代理人がアカウントオーナーのメールアドレスにアクセスできる場合に使用）
2) Account Success のメールアドレス（権限を有する代理人が Designated Account Successor として追加された場合に使用）
3) 権限を有する代理人のメールアドレス（権限を有する代理人が、Designated Account Successor として追加された際にどのメールアドレスが含まれていたか分からない場合、またはアカウントに紐づくメールアドレスが分からない場合に使用）。

送信後、GitLab アカウントが見つかった場合、自動チェックはリスクレーティングを返します。サポートエンジニアは、リスクレーティングが計算される方法を [Support Workflow page](https://internal.gitlab.com/handbook/support/workflows/data-subject-requests/) *(internal only)* で確認できますが、このリスク計算は、リクエストを送信した個人の権限が Privacy チームによって検証された**後**にのみ考慮する必要があります。

自動チェックでユーザーアカウントが見つからない場合、すべてのシステムタスクが完了した後、システムが生成するメールメッセージで依頼者に通知されます。

システムにさらなる自動化が追加されるにつれて、権限を有する代理人または Designated Account Successor によって送信された削除リクエストは、Privacy チームが法的要件が満たされたことを検証するまで保留されます。この検証が完了すると、リクエストが再開され、[Individual User Deletion](#individual-user-deletion) ワークフローに従う必要があります。

すべてのタスクが完了すると、システムは自動的に依頼者へリクエストが履行された旨のメッセージを送信します。

#### **データアクセスリクエスト** {#data-access-requests}

アクセスリクエストは、GitLab が処理している個人データに関する情報をデータ主体に提供するものです。アクセスリクエストを送信できるのは個人ユーザーのみです。GitLab はエンタープライズユーザーの個人データの Controller ではないため、アカウントがエンタープライズユーザーとして指定されている場合はアクセスリクエストを履行できません。以下のフォーム入力項目は、組み込みの自動チェックを使用して検証されます。

- メールアドレス（存在する必要があります）
- ユーザー名（存在する必要があります）
- ユーザー名とメールアドレスが同一アカウントで一致する必要があります
- アカウントがエンタープライズユーザーでないこと

送信後、GitLab アカウントが見つかった場合、自動チェックはリスクレーティングを返します。リスクレーティングは、ユーザーアカウントを削除するために追加の検証が必要かどうかを判断するために使用されます。サポートエンジニアは、リスクレーティングが計算される方法を [Support Workflow page](https://internal.gitlab.com/handbook/support/workflows/data-subject-requests/) (*internal only*) で確認できます。自動チェックでユーザーアカウントが見つからない場合、システムが生成するメールメッセージでユーザーに通知されます。

アクセスリクエストに関してサポートエンジニアに割り当てられるタスクは 1 つですが、2 つの別個のシステムからのデータのクエリと抽出を兼ねています。

いずれかのシステムでアカウントが特定された場合:

- [Personal Data Requests shared drive folder](https://drive.google.com/drive/folders/0AA4kcF3prJ6pUk9PVA) から cDot/Zendesk Google sheet テンプレートをダウンロードし、システムにあるフィールド値を入力します。
- 必ず空白のシートテンプレートをダウンロードし、入力済みのシートを共有ドライブに保存しないようにします。
- 入力後、シートを `Support Engineer (Access)` タスクにアップロードし、complete としてマークします。

いずれのシステムでもアカウントが特定されない場合は、`Support Engineer (Access)` タスクを not found としてマークします。

すべてのタスクが完了すると、システムは自動的にユーザーへリクエストが履行された旨のメッセージを送信します。

#### **データエクスポートリクエスト（ポータビリティの権利）**

このワークフローはデータエクスポートリクエストにのみ適用され、データポータビリティリクエストには適用され**ません**。このデータ主体リクエストの種類は、現時点では [Privacy Center](https://privacy.gitlab.com) では利用できない点に注意してください。FY27Q1 に提供される見込みです。ただし、データエクスポートまたはデータポータビリティリクエストのサポートチケットについては、個人の GitLab アカウントオーナー（無料および有料）に対してこのワークフローを使用する必要があります。

データポータビリティは、個人が GitLab から別のプラットフォームへ移行したい場合に適用されます。現時点で GitLab は、Project Import and Export 機能によるセルフサービス向けの手順のみを提供します。あるプラットフォームから別のプラットフォームへ移行またはポートするためにユーザーが必要とする移行ドキュメントは、移行先プラットフォームが提供します。GitLab はこれに関する手順やサポートを提供できません。

データエクスポートリクエストは、範囲を狭めたうえで、アクセスリクエストと同様のワークフローに従います。私たちが対応できるのは、個人プロジェクト、またはユーザーが*唯一の*メンバーであるグループ内のプロジェクトに対するエクスポートリクエストのみです。リクエストでユーザーの国がキューバ、イラン、北朝鮮、シリア、ロシア、ベラルーシ、またはウクライナのクリミア、ドネツク、ルハンスク地域であると示されている場合、このワークフローは完了できません。これらは禁輸対象国であり、貿易コンプライアンス法の下で私たちはこれらの地域の個人と関わることを許可されていないためです。質問がある場合は、[#privacy-team_help](https://gitlab.slack.com/archives/C04357HVCJD) Slack チャンネルで問い合わせてください。

##### **Step 1:** ユーザーの地域を確認する

ユーザーの地域が上記の禁輸対象国のいずれでもないことを確認します。禁輸対象国である場合は、`Embargoed Country` メッセージを送信し、タスクを exception としてマークします。

##### **Step 2:** セルフサービスの指示を提供する

`Project Export Self-Serve` メッセージをユーザーに送信します。ユーザーには、セルフサービスのステップに関する問題を回答するために 7 日間の期間があります。この期間中、`Support Engineer (Access)` タスクは開いたままにしておく必要があります。

- ユーザーが 7 日後も回答しない場合は、回答が得られなかった旨のメモを `Support Engineer (Access)` タスクに追加し、exception としてマークします。
- ユーザーがさらなる支援を求め、**かつ**リクエストが medium または high のリスクレーティングを持つ場合は、`Medium Risk GitLab Account Verification Question` メッセージ（ユーザーがプライベートプロジェクトを持っている場合に限る）または `High Risk GitLab Account Verification Question` メッセージのいずれかをデータ主体に送信します。ユーザーはこれらの質問に対して 7 暦日以内に回答する必要があります。この期間中、`Support Engineer (Access)` タスクは開いたままにしておく必要があります。

注意: データのエクスポートで問題が発生した無料ユーザーに対して、データエクスポートのサポートを拒否することはできません。ただし、すべての支援とコミュニケーションは、Zendesk サポートチケットではなくプライバシーリクエスト内で行う必要があります。

##### **Step 3:** エクスポートを開始する

必要に応じてユーザーが追加の検証に合格したら、プロジェクトエクスポートを取得するためのプロセスを開始します。

- ユーザーがサインインできない場合は、[UI](https://docs.gitlab.com/user/project/settings/import_export/#export-a-project-and-its-data) または [API](https://docs.gitlab.com/api/project_import_export/#schedule-an-export) を使って、個人ネームスペースのプロジェクト、またはユーザーが唯一のメンバーであるグループ内のプロジェクトのみをエクスポートします。
- エラーが発生した場合は、[customers のプロジェクトエクスポート](/handbook/support/workflows/exporting_projects/)ワークフローに従います。追加のトラブルシューティングの支援やアイデアが必要な場合は、有料顧客による過去のプロジェクトエクスポートチケットの例を ZenDesk で検索できます。
- プロジェクトエクスポートを `Support Engineer (Access)` タスクにアップロードし、`Project Export Complete` メッセージを送信して、タスクを complete としてマークします。

## 例外

リクエストの処理中に、リクエストを Privacy チームにエスカレーションする必要が生じる特定のシナリオが発生することがあります。これらのシナリオで最も一般的なものは、[Privacy Escalation Meta Issue](https://gitlab.com/gitlab-com/gdpr-request/-/blob/master/.gitlab/issue_templates/Privacy%20Escalation%20Meta%20Issue.md) テンプレートに記載されています。リクエストを Privacy チームにエスカレーションする必要がある場合は、以下を行います。

1. [Privacy Escalation Meta Issue](https://gitlab.com/gitlab-com/gdpr-request/-/blob/master/.gitlab/issue_templates/Privacy%20Escalation%20Meta%20Issue.md) テンプレートを使用して、新しい関連 Issue を作成します。

特定のシナリオでエスカレーションが必要かどうか分からない場合は、`#privacy-team_help` Slack チャンネルで Privacy チームに問い合わせてください。

## フォーラムユーザーの削除

データ主体は、自身の GitLab forum アカウントの削除を追加で要求できます。私たちは GitLab forum からのユーザー削除のみが可能であり、Discourse プラットフォームに対する制御権はありません。このリクエスト種別は現時点では Privacy Center 経由では利用できませんが、サポートチケットを通じてリクエストが来ることがあります。フォーラムユーザーを削除するには:

1. ユーザーに、ユーザープロフィールのリンク、フォーラムのユーザー名、メールアドレスを尋ねます。送信元のメールアドレスはユーザー名のものと一致している必要があり、ユーザーは少なくとも一度は返信している必要があります。
1. Issue 上の内部コメントで [フォーラム管理者](https://forum.gitlab.com/about) の 1 人をタグ付けし、そのユーザーと関連する投稿を削除するよう依頼します。
1. ユーザーが削除された旨を返信します。
