---
title: アカウント削除＆データアクセスリクエスト - ワークフロー
category: GitLab.com
subcategory: Legal
description: "アカウント削除およびデータアクセスのリクエスト処理を行う方法"
controlled_document: true
upstream_path: /handbook/support/workflows/account_deletion_access_request_workflows/
upstream_sha: c6f416c14ee9f53cb671d49ff11a9671c68d9326
lastmod: 2026-06-09T17:46:21+10:00
translated_at: "2026-06-09T00:00:00Z"
translator: claude
stale: false
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## Purpose

このドキュメントには、アカウント削除とデータアクセスを含む各タイプのデータ主体リクエストを処理する方法の手順が含まれています。**Submission Handling** と **Request Processing** の 2 つのステージに分かれており、その順番で進めます。**すべてのリクエストは、データ主体の管轄区域に応じて法的に許可された期間内に履行する必要があります。**

## Procedure

### **Stage 1:** Submission Handling

プライバシーリクエストは、[Privacy Center](https://privacy.gitlab.com/) を通じて送信された場合にのみ処理できます。リクエストがそれ以外の方法で受け取られた場合は、それをクローズし、Privacy Center の `Make a Privacy Request` ボタンからリクエストを開くようユーザーを誘導します。Privacy Center は Transcend によって動作しており、「the system」への言及は、プライバシーリクエストが取り込まれ処理される Transcend プラットフォームへの言及です。

ユーザーが Privacy Center を通じてリクエストを送信すると、*GitLab アカウントが存在しない場合でも*、システムは自動的に新しいリクエストを作成します。ユーザーとのすべてのやり取りは、プライバシーリクエスト内で行われます。

<details>
<summary markdown="span">プライバシーリクエスト内でデータ主体にメッセージを送信するには</summary>

- Incoming Request ビューから該当のリクエストをクリックする
- Messages タブに移動する
- 左側の青い Email アイコンをクリックする
- 上部の Template ドロップダウンボックスから目的のテンプレートを選択する
- 必要に応じてメールの文面を調整する
- Send ボタンをクリックする

</details>

このステージの目的は、Privacy Center を通じて送信されなかったリクエストをクローズする方法を指示することです。

#### Zendesk Submissions

サポートチケットとして Zendesk を通じてリクエストが受け取られた場合、次のいずれかを行います。

- チケットが **Account Deletion**（アカウント削除）リクエストに関するものである場合、[Support::SaaS::Gitlab.com::Account Deletion Instructions - GitLab.com](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Account%20Deletion%20Instructions-%20GitLab.com.md?ref_type=heads) マクロを適用し、チケットを解決済みとしてマークします。

- チケットが **Data Access**（データアクセス）リクエストに関するものである場合、[General::Personal Data Access Request Instructions - GitLab.com](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/General/Personal%20Data%20Access%20Request%20Instructions%20-%20GitLab.com.md?ref_type=heads) マクロを適用して、GitLab の [Privacy Center](https://privacy.gitlab.com) を使用してリクエストを送信するようユーザーをリダイレクトし、チケットを解決済みとしてマークします。

- チケットが **Data Portability**（データポータビリティ）リクエストに関するものである場合、ユーザーにさらに確認します。ポータビリティリクエストは、ユーザーが GitLab から別のプラットフォームへ移行したい場合にのみ適用されます。その場合、GitLab はプロジェクトのインポート／エクスポート機能によるセルフサービスの手順を提供します。あるプラットフォームから別のプラットフォームへ移行または移植するために必要な移行ドキュメントは、通常、移行先のプラットフォームが提供します。

- チケットが **Data Export**（データエクスポート）リクエストに関するものである場合、これはアクセスリクエストとして扱う必要があります。[General::Personal Data Access Request Instructions - GitLab.com](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/General/Personal%20Data%20Access%20Request%20Instructions%20-%20GitLab.com.md?ref_type=heads) マクロを適用して、GitLab の [Privacy Center](https://privacy.gitlab.com) を使用してリクエストを送信するようユーザーをリダイレクトし、チケットを解決済みとしてマークします。

### **Stage 2:** Request Processing

リクエストタイプに基づいて、以下からプライバシーリクエストを処理する適切なワークフローを見つけます。

- [Deletion Requests](#deletion-requests)
- [Data Access Requests](#data-access-requests)
- [Data Portability Requests]*(coming soon)*

#### **Deletion Requests**

以下は、ユーザーが送信できるリクエストのタイプです。各リンクをクリックすると、そのリクエストを処理するための関連ワークフローに移動します。

- [個人ユーザーによる削除](#individual-user-deletion)（GitLab.com アカウント、Zendesk、Customer Portal、およびすべてのマーケティングシステムの個人データを削除）
- [エンタープライズユーザーによる削除](#enterprise-user-deletion)（GitLab.com アカウント、Zendesk、Customer Portal、およびすべてのマーケティングシステムの個人データを削除。Enterprise Account Owner の承認が必要）
- [Customer Portal アカウントの削除](#portal-account-deletion)（customers.gitlab.com のみの個人データを削除）
- [死亡したユーザーの削除](#deceased-account-owner-deletion)（GitLab.com アカウント、Zendesk、Customer Portal、およびすべてのマーケティングシステムの個人データを削除。承認された代理人が送信する必要がある）
- [マーケティング削除](#marketing-deletion)（マーケティングおよび営業関連の個人データのみを削除）

現在、個人ユーザーまたはエンタープライズユーザーによる削除のみが、送信時に自動チェックで検証されます。マーケティング削除は自動的に処理されます。死亡したユーザーの削除リクエストは、代理権の証明に関連する法的要件のため、追加の検証ステップを経ます。

##### **Individual User Deletion**

このワークフローは、データ主体が自身を個人ユーザーであると識別する削除リクエストに適用されます。以下のフォームフィールドの入力は、組み込みの自動チェックを使用して検証されます。

- メールアドレス（存在する必要がある）
- ユーザー名（存在する必要がある）
- ユーザー名とメールアドレスが同じアカウントで一致する必要がある
- アカウントが [Enterprise User](https://docs.gitlab.com/user/enterprise_user/) ではない。

送信後、GitLab アカウントが見つかった場合、自動チェックはリスク評価を返します。リスク評価は、ユーザーアカウントを削除するために追加の検証が必要かどうかを判断するために使用されます。Support Engineer は、リスク評価が計算される方法を [Support Workflow ページ](https://internal.gitlab.com/handbook/support/workflows/data-subject-requests/) *(internal only)* で確認できます。自動チェックでユーザーアカウントが見つからない場合、システムから生成されるメールメッセージでユーザーに通知されます。

###### **Step 0:** Check for duplicate requests

Incoming Request ビューに移動し、コア識別子を使用して検索することで、ユーザーからの既存のリクエストを確認します。同じタイプの既存リクエストが一覧に表示された場合、リクエスト自体をクリックして Status タブを確認することで、元のリクエストの進捗を判断します。既存のリクエストが `compiling` または `deleting` のステージをまだ進行中の場合、`Duplicate Request` メッセージをユーザーに送信して、後続の重複リクエストをクローズします。

注意: 削除リクエストには、Support Engineer に割り当てられる 2 つの別個のタスクがあります。

`Support Engineer (GitLab Deletion)` は、GitLab ユーザーアカウントが **削除可能かどうか** を判断し、可能であれば削除を実行する役割を果たします。*現在、ステップごとのアクションは、タスクを配信するメールにも表示されます。*

`Support Engineer (Zendesk/cDot Deletion)` は、ユーザーの Customers Portal アカウントおよび／または Zendesk アカウントが存在するかどうかを判断する役割を果たします。このタスク内で削除は行われません。ただし、Customers Portal の削除を実行するために console engineer に、Zendesk アカウントを削除するために Support Readiness に、後続のタスクを割り当てるためのトリガーとして機能します。

###### **Step 1:** Review Risk Rating, Confirm Account Type and Send Additional Verification Questions

1.1. アカウントが Enterprise User かどうか

リクエストの Details タブで、Data Subject type が `Enterprise User` **であり**、自動チェックでもアカウントが Enterprise User であることが示されている場合、ここで止めて直接 [Enterprise User Deletion](#enterprise-user-deletion) に進みます。
[エンタープライズユーザーのサポート定義](https://gitlab.com/gitlab-com/content-sites/handbook/blob/main/content/handbook/support/workflows/gitlab-com_overview.md#enterprise-users)も適用される点に注意してください。

1.2 リスク評価のレビュー

自動チェックによって medium または high のリスク評価が生成された場合、ユーザーが何らかのプライベートプロジェクトを持っている場合に **限り**、`Medium Risk GitLab Account Verification Question` メッセージまたは `High Risk GitLab Account Verification Question` メッセージのいずれかをユーザーに送信する必要があります。プライベートプロジェクトがない場合は、追加の検証質問を送信しないでください。ユーザーには、それらの質問に回答するために 7 暦日があります。この間、`Support Engineer (GitLab Deletion)` タスクは開いたままにしておく必要があります。

###### No Response

ユーザーが 7 暦日以内に回答しなかった場合、タスクを `Exception` としてマークし、ユーザーが検証に回答しなかったことを示すノートを追加します。

###### **Step 2:** Blocked or Banned Accounts

ユーザーアカウントがブロックまたは禁止されていない場合は、このセクションをスキップします。

ユーザーが自身のアカウントを削除したことによりブロックされている場合は、`Blocked Account Deletion Request` メッセージを送信し、その後 `Support Engineer (GitLab Deletion)` タスクを Complete としてマークします。

アカウントがブロックまたは禁止されている場合は、ブロックされたアカウントの[再有効化](/handbook/support/workflows/reinstating-blocked-accounts/#blocked-accounts)について Trust and Safety に Issue を開くことで、`Account Reinstatement` ワークフローを進めます。ただし、ブロックまたは禁止状態が、中国でのフリーユーザーのブロックのような規制上の理由による場合は、Support Engineer は #help-transcend で Privacy チームにレビューも依頼する必要があります。`Support Engineer (GitLab Deletion)` タスクは、判断が下されるまで開いたままにしておく必要があります。セキュリティレビューが依頼されたことを示すノートをタスクに追加する必要があります。`Security Review Requested` メッセージをデータ主体に送信します。

アカウントのブロックまたは禁止が解除された場合は、`Security Review Complete` メッセージをデータ主体に送信し、その後通常どおり残りのプロセスに従います。

アカウントがブロックまたは禁止されたままの場合は、`Security Review Denied` メッセージをデータ主体に送信し、その後 `Support Engineer (GitLab Deletion)` タスクを Step 3 の下で Exception としてマークします。

###### **Step 3:** Check non-Enterprise user paid subscription status

1. アカウントが Enterprise user で **ない** ことを確認します。もし Enterprise user であれば、[Enterprise user deletion](#enterprise-user-deletion) のステップに従います。
1. メールアドレスを使用して Customers Portal を検索します。
1. Customers Portal アカウントが存在しない場合は、Step 4 に進みます。
1. Customers Portal アカウントが見つかり、かつ `Subscription` バッジがある場合:
    1. `Zuora Subscriptions` タブをクリックします。
    1. `End Date` と `Auto-renew` の値をメモします。Auto-renew が yes の場合は自動更新が有効、それ以外の場合は無効です。
1. **いずれかの** サブスクリプションの `End Date` が未来の場合:
    1. リクエストの `Details` タブに次の形式でノートを追加します: `Cdot account has active saas subscription (A-S000xxxx) which expires on 202x-xx-xx auto-renewal is <dis/en>abled - https://customers.gitlab.com/admin/customer/<ID>`
    1. `help-transcend` チャンネルで Bronwyn Barnett および／または Stephanie Ebbert をタグ付けして、リクエストに追加したノートを Privacy に通知します。
    1. Gitlab.com アカウント、Zendesk アカウント、CDot アカウントの削除を一切行わないでください。Step 4 に進まないでください。
1. **すべての** サブスクリプションの `End Date` が過去である場合、またはサブスクリプションが一覧にない場合は、Customers Portal アカウントへのリンクを含むノートを追加します。Step 4 に進みます。

アクティブなサブスクリプションを持つ非エンタープライズユーザーに属する削除リクエストについて:

- Privacy チームは、サブスクリプション終了日まで Transcend でアカウント削除リクエストを一時停止します。
- Privacy チームは、アクティブなサブスクリプションが存在する間はアカウント削除（マーケティングアカウントデータを除く）を処理できないことをデータ主体に通知します。これは、アカウントデータ処理の適法な根拠が契約上の義務を履行することであり、その義務には早期解約の規定が含まれていないためです。
- 自動更新期間後を含むサブスクリプション終了後、Privacy チームはアカウント削除プロセスを再開します。その時点で、Support Engineer は該当する関連の GitLab.com アカウント、Zendesk アカウント、または CDot アカウントの削除を進めることができます。
- Privacy チームは、サブスクリプション終了後に有料の非エンタープライズユーザーアカウントを Zuora から削除するよう、30 日ごとに Billing/Accounts チームに通知します。

###### **Step 4:** Proceed with Deletion

Step 4.1 の条件が存在しない限り、4.2 のステップを実行して GitLab アカウントを削除します。

4.1 - **Account Already Deleted**

ユーザーがリクエストの送信後に GitLab アカウントを削除した可能性があります。そのような場合、それ以上のアカウント検証やリクエストの進行はできません。`Account Already Deleted` メッセージをデータ主体に送信し、`Support Engineer (GitLab Deletion)` タスクを完了としてマークします。

4.2 - **GitLab Account Deletion**

- 削除をブロックしているグループ（ユーザーが唯一のオーナーであるグループなど）を削除します。GitLab.com では[グループの削除](https://docs.gitlab.com/user/gitlab_com/#delayed-group-deletion)に 30 日の遅延があるため、グループを削除した後は Advanced Settings に移動し、`Delete group immediately` を選択して削除を完了します。
- `Delete user and contributions` でユーザー削除を開始します。これは、ユーザーが参加していて唯一のオーナーではないプロジェクトは削除しない点に注意してください。ただし、ユーザーが作成した個人プロジェクトはすべて削除します。
- 削除は遅延する可能性があるため、ユーザーが完全に削除されたことを確認します。
- [runbook](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) の [Deleting Data](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) セクションのみに従って、GitLab Data Platform で削除を実行するために既存の .csv を追加または編集します。
- 最新バージョンの .csv を GDPR フォルダーにアップロードします。

4.3 - `Support Engineer (GitLab Deletion)` タスクで:

- ユーザーアカウント削除のすべてのステップが完了したら `Complete` としてマークします。
- ユーザーが追加の検証質問に不合格となった場合、または削除のためにアカウントのブロックや禁止を解除できない場合は `Exception` としてマークします。例外としてマークした理由を示すノートをタスクに追加します。

###### **Step 5:** Check Zendesk and Customers Portal for account

- 両方のシステムでアカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Complete としてマークします。
- どちらのシステムでもアカウントが見つからない場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Not Found としてマークします。
- いずれか一方のシステムでのみアカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Exception としてマークし、どのシステムでアカウントが見つかったかを示すノートを追加します。

Support Engineer は、Zendesk または Customers Portal アカウントの削除を実行しません。`Support Engineer (Zendesk/cDot Deletion)` タスクが解決された後、Console Engineer が customers portal アカウントを削除し、および／または Support Readiness Specialist が Zendesk アカウントを削除するための別個のタスクがトリガーされます。

すべてのタスクが完了すると、システムは自動的に、リクエストが履行されたことを知らせるメッセージをユーザーに送信します。

##### Enterprise User Deletion

このワークフローは、データ主体が自身をエンタープライズユーザーであると識別する削除リクエストに適用されます。以下のフォーム入力は、組み込みの自動チェックを使用して検証されます。

- メールアドレス（存在する必要がある）
- ユーザー名（存在する必要がある）
- ユーザー名とメールアドレスが同じアカウントで一致する必要がある
- アカウントが Enterprise User である

GitLab はエンタープライズユーザーの Controller ではありません。したがって、[Enterprise User](https://docs.gitlab.com/user/enterprise_user/) アカウントは、enterprise account owner の許可なしには削除できません。ただし、送信時に自動チェックが実行され、アカウントが見つかってエンタープライズユーザーであることが確認された場合、リスク評価を返します。リクエストが `Enterprise User` データ主体タイプとして送信されたが、自動チェックでアカウントがエンタープライズユーザーで **ない** ことが検証される場合があります。その場合、リクエストは個人ユーザーによって送信されたものとして扱う必要があります。リスク評価は、ユーザーアカウントを削除するために追加の検証が必要かどうかを判断するために使用されます。Support Engineer は、リスク評価とリスクスコアが計算される方法を Support Workflows *(internal only)* で確認できます。

エンタープライズユーザーに、削除の代わりに再有効化で解決できるアカウントアクセスまたは類似の問題を説明する既存の Zendesk チケットがあるかどうかを確認します。問題に対する適切な解決プロセスに従ってください。既存のチケット上、または下記の Step 1 でグループオーナーへのアウトバウンドチケット上のいずれかで対応します。

自動チェックでユーザーアカウントが見つからない場合、システムから生成されるメールメッセージでユーザーに通知されます。

###### **Step 1:** Obtain Permission

削除リクエストがエンタープライズユーザーのものである場合、`Enterprise User` メッセージをデータ主体に送信します。データ主体には、組織のシステム管理者への連絡を試みることを望むかどうかを回答して示すために 7 日があります。

- データ主体が 7 日以内に回答せず、**かつ** 組織管理者が Support Ticket を通じてアカウントを削除する書面による指示を提供していない場合は、`No Enterprise Admin Permission-Deletion` メッセージを送信し、タスクを Exception としてマークします。
- データ主体がアカウント削除の許可を得るために組織管理者への連絡を試みるよう求めた場合は、エンタープライズユーザーアカウントのオーナーに連絡するための[このワークフロー](/handbook/support/workflows/account_changes/#request-from-an-enterprise-user-that-may-or-may-not-be-part-of-the-group)の `Step 5. Contact Owner` を利用して行う必要があります。管理者には回答のために 10 暦日を与えます。
  - 許可が与えられた場合は、Support Ticket へのリンクを `Support Engineer (GitLab Deletion)` タスクにノートとして追加し、その後下記のとおりエンタープライズユーザーアカウントの削除を進めます。
  - 許可が与えられなかった場合は、許可が得られなかったことを記録するために Support Ticket へのリンクを `Support Engineer (GitLab Deletion)` タスクにノートとして追加し、その後タスクを Exception としてマークします。

###### **Step 2:** Proceed with Deletion

Step 2.1 の条件が存在しない限り、2.2 のステップを実行して Gitlab アカウントを削除します。

2.1 - **Account already deleted**

ユーザーがリクエストの送信後にアカウントを削除した、またはエンタープライズ管理者が削除できた可能性があります。そのような場合、それ以上のアカウント検証はできません。`Account Already Deleted` メッセージを送信し、`Support Engineer (GitLab Deletion)` タスクを完了としてマークします。

2.2 - **GitLab Account Deletion**

- 削除をブロックしているグループ（ユーザーが唯一のオーナーであるグループなど）を削除します。GitLab.com では[グループの削除](https://docs.gitlab.com/user/gitlab_com/#delayed-group-deletion)に 30 日の遅延があるため、グループを削除した後は Advanced Settings に移動し、`Delete group immediately` を選択して削除を完了します。
- `Delete user and contributions` でユーザー削除を開始します。これは、ユーザーが参加していて唯一のオーナーではないプロジェクトは削除しない点に注意してください。ただし、ユーザーが作成した個人プロジェクトはすべて削除します。
- 削除は遅延する可能性があるため、ユーザーが完全に削除されたことを確認します。
- [runbook](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) の [Deleting Data](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) セクションのみに従って、GitLab Data Platform で削除を実行するために既存の .csv を追加または編集します。
- 最新バージョンの .csv を GDPR フォルダーにアップロードします。

###### **Step 3:** Check Zendesk and Customers Portal for account

- 両方のシステムでアカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Complete としてマークします。
- どちらのシステムでもアカウントが見つからない場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Not Found としてマークします。
- いずれか一方のシステムでのみアカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Exception としてマークし、どのシステムでアカウントが見つかったかを示すノートを追加します。

Support Engineer は、Zendesk または Customers Portal アカウントの削除を実行しません。`Support Engineer (Zendesk/cDot Deletion)` タスクが解決された後、Console Engineer が customers portal アカウントを削除し、および／または Support Readiness Specialist が Zendesk アカウントを削除するための別個のタスクがトリガーされます。

すべてのタスクが完了すると、システムは自動的に、リクエストが履行されたことを知らせるメッセージをユーザーに送信します。

##### Marketing Deletion

Support Engineer は、マーケティング削除リクエストにおいてタスクを持ちません。このタイプのリクエストについては、システムから Support にタスクが割り当てられることはありません。

##### **Portal Account Deletion**

このワークフローは、データ主体が自身を customers portal アカウント（customers.gitlab.com）のオーナーであると識別する削除リクエストに適用されます。

- customers portal アカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを complete としてマークします。
- customers portal アカウントが見つからない場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを not found としてマークします。

Support Engineer は、customers portal アカウントの削除を実行しません。`Support Engineer (Zendesk/cDot Deletion)` タスクが解決された後、Console Engineer がアカウントを削除するための別個のタスクがトリガーされます。

すべての関連タスクが完了すると、システムは自動的に、リクエストが履行されたことを知らせるメッセージをユーザーに送信します。

#### Deceased Account Owner Deletion

このワークフローは、個人ユーザーのために、承認された代理人または [Designated Account Successor](https://docs.gitlab.com/user/profile/account/account_succession/) によって送信された削除リクエストに適用されます。このワークフローは、Designated Account Manager によって送信された削除リクエストには適用されません。その権限はアカウントオーナーの死亡時に終了するためです。

以下のフォーム入力は、組み込みの自動チェックを使用して検証されます。

- メールアドレス（存在する必要がある）
- ユーザー名（存在する必要がある）
- ユーザー名とメールアドレスが同じアカウントで一致する必要がある
- アカウントが Enterprise Account ではない

注意: フォームでは、優先順位を指定してメールアドレスを尋ねます。

1) アカウントのプライマリまたはセカンダリのメールアドレス（承認された代理人がアカウントオーナーのメールにアクセスできる場合に使用）
2) Account Success のメールアドレス（承認された代理人が Designated Account Successor として追加されていた場合に使用）
3) 承認された代理人のメール（承認された代理人が、Designated Account Successor として追加された際にどのメールが含まれていたか分からない場合、またはアカウントに紐づくメールアドレスを知らない場合に使用）。

送信後、GitLab アカウントが見つかった場合、自動チェックはリスク評価を返します。Support Engineer は、リスク評価が計算される方法を [Support Workflow ページ](https://internal.gitlab.com/handbook/support/workflows/data-subject-requests/) *(internal only)* で確認できますが、このリスク計算は、リクエストを送信した個人の権限が Privacy Team によって検証された **後** にのみ考慮する必要があります。

自動チェックでユーザーアカウントが見つからない場合、すべてのシステムタスクが完了した後に、システムから生成されるメールメッセージで依頼者に通知されます。

システムに追加の自動化が加わるにつれて、承認された代理人または Designated Account Successor によって送信された削除リクエストは、Privacy Team が法的要件が満たされていることを検証するまで保留されます。この検証が完了すると、リクエストは再開され、[Individual User Deletion](#individual-user-deletion) ワークフローに従う必要があります。

すべてのタスクが完了すると、システムは自動的に、リクエストが履行されたことを知らせるメッセージを依頼者に送信します。

#### **Data Access Requests**

アクセスリクエストは、GitLab がデータ主体について処理する個人データに関する情報をデータ主体に提供します。アクセスリクエストを送信できるのは個人ユーザーのみです。GitLab はエンタープライズユーザーの個人データの Controller ではないため、アカウントがエンタープライズユーザーとして指定されている場合、アクセスリクエストを履行できません。以下のフォーム入力は、組み込みの自動チェックを使用して検証されます。

- メールアドレス（存在する必要がある）
- ユーザー名（存在する必要がある）
- ユーザー名とメールアドレスが同じアカウントで一致する必要がある
- アカウントがエンタープライズユーザーではない

送信後、GitLab アカウントが見つかった場合、自動チェックはリスク評価を返します。リスク評価は、ユーザーアカウントを削除するために追加の検証が必要かどうかを判断するために使用されます。Support Engineer は、リスク評価が計算される方法を [Support Workflow ページ](https://internal.gitlab.com/handbook/support/workflows/data-subject-requests/) (*internal only*) で確認できます。自動チェックでユーザーアカウントが見つからない場合、システムから生成されるメールメッセージでユーザーに通知されます。

アクセスリクエストには、Support Engineer に割り当てられるタスクが 1 つありますが、それは 2 つの別個のシステムからのデータのクエリと取得を組み合わせたものです。

いずれかのシステムでアカウントが識別された場合:

- Personal Data Requests 共有ドライブフォルダーから cDot/Zendesk Google sheet テンプレートをダウンロードし、システムにあるフィールド値を入力します。
- 空のシートテンプレートをダウンロードしていること、入力済みのシートを共有ドライブに保存していないことを確認してください。
- 入力後、シートを `Support Engineer (Access)` タスクにアップロードし、完了としてマークします。

どちらのシステムでもアカウントが識別されない場合は、`Support Engineer (Access)` タスクを not found としてマークします。

すべてのタスクが完了すると、システムは自動的に、リクエストが履行されたことを知らせるメッセージをユーザーに送信します。

#### **Data Export Requests (Right to Portability)**

このワークフローは、データエクスポートリクエストにのみ適用され、データポータビリティリクエストには適用 **されません**。このデータ主体リクエストタイプは、現在 [Privacy Center](https://privacy.gitlab.com) では利用できない点に注意してください。FY27Q1 に提供される見込みです。ただし、データエクスポートまたはデータポータビリティリクエストの Support Ticket は、個人 GitLab アカウントオーナー（無料および有料）に対してこのワークフローを利用する必要があります。

データポータビリティは、個人が GitLab から別のプラットフォームへ移行することを希望する場合に適用されます。現時点では、GitLab はプロジェクトのインポート／エクスポート機能によるセルフサービスの手順のみを提供します。あるプラットフォームから別のプラットフォームへ移行または移植するためにユーザーが必要とする移行ドキュメントは、移行先のプラットフォームが提供します。GitLab はこれについての指示やサポートを提供できません。

データエクスポートリクエストは、スコープが狭められた、アクセスリクエストと類似のワークフローに従います。個人プロジェクト、またはユーザーが *唯一の* メンバーであるグループ内のプロジェクトについてのみ、エクスポートリクエストに対応できます。このワークフローは、リクエストでユーザーの国がキューバ、イラン、北朝鮮、シリア、ロシア、ベラルーシ、またはウクライナのクリミア、ドネツク、ルハンスク地域であることが示されている場合には完了できません。これらは禁輸国であり、貿易コンプライアンス法の下でこれらの場所の個人と関わることが許可されていないためです。質問がある場合は、[#privacy-team_help](https://gitlab.slack.com/archives/C04357HVCJD) Slack チャンネルで連絡してください。

##### **Step 1:** Verify User region

ユーザーの地域が、上記の禁輸国のいずれでもないことを確認します。もしそうである場合は、`Embargoed Country` メッセージを送信し、タスクを例外としてマークします。

##### **Step 2:** Provide instruction for Self-Service

ユーザーに `Project Export Self-Serve` メッセージを送信します。ユーザーには、セルフサービスのステップに関する問題があれば回答するために 7 日があります。この間、`Support Engineer (Access)` タスクは開いたままにしておく必要があります。

- ユーザーが 7 日後に回答しない場合は、回答が得られなかったことを `Support Engineer (Access)` タスクにノートとして追加し、例外としてマークします。
- ユーザーがさらなる支援を求め、**かつ** リクエストに medium または high のリスク評価がある場合は、`Medium Risk GitLab Account Verification Question` メッセージ（ユーザーが何らかのプライベートプロジェクトを持っている場合に限る）または `High Risk GitLab Account Verification Question` メッセージのいずれかをデータ主体に送信します。ユーザーには、それらの質問に回答するために 7 暦日があります。この間、`Support Engineer (Access)` タスクは開いたままにしておく必要があります。

注意: データのエクスポートで問題が発生したフリーユーザーに対して、データエクスポートのサポートを拒否することはできません。ただし、すべての支援とやり取りは、Zendesk Support Ticket ではなくプライバシーリクエスト内で行う必要があります。

##### **Step 3:** Begin the Export

必要な場合にユーザーが追加の検証を通過したら、プロジェクトのエクスポートを取得するためのプロセスを開始します。

- ユーザーがサインインできない場合は、[UI](https://docs.gitlab.com/user/project/settings/import_export/#export-a-project-and-its-data) または [API](https://docs.gitlab.com/api/project_import_export/#schedule-an-export) を使用して、個人 namespace プロジェクト、またはユーザーが唯一のメンバーであるグループ内のプロジェクトのみをエクスポートします。
- エラーがある場合は、[project exports for customers](/handbook/support/workflows/exporting_projects/) ワークフローに従います。追加のトラブルシューティングの助けやアイデアが必要な場合は、有料顧客からの過去のプロジェクトエクスポートチケットの例を ZenDesk で検索できます。
- プロジェクトのエクスポートを `Support Engineer (Access)` タスクにアップロードし、`Project Export Complete` メッセージを送信し、タスクを完了としてマークします。

## Exceptions

リクエストの処理中に、リクエストを Privacy チームにエスカレーションする必要が生じる特定のシナリオが発生する場合があります。これらのシナリオの最も一般的なものは、[Privacy Escalation Meta Issue](https://gitlab.com/gitlab-com/gdpr-request/-/blob/master/.gitlab/issue_templates/Privacy%20Escalation%20Meta%20Issue.md) テンプレートにあります。リクエストを Privacy チームにエスカレーションする必要がある場合は、次を行います。

1. [Privacy Escalation Meta Issue](https://gitlab.com/gitlab-com/gdpr-request/-/blob/master/.gitlab/issue_templates/Privacy%20Escalation%20Meta%20Issue.md) テンプレートを使用して、新しい関連 Issue を作成します。

特定のシナリオがエスカレーションを必要とするかどうか不明な場合は、`#privacy-team_help` Slack チャンネルで Privacy チームに連絡してください。

## Forum User Deletion

データ主体は、GitLab フォーラムアカウントの削除を追加で依頼することもできます。GitLab フォーラムからユーザーを削除できるだけで、Discourse プラットフォームを制御することはできません。このリクエストタイプは現在 Privacy Center では利用できませんが、サポートチケットを通じてリクエストが届く場合があります。フォーラムユーザーを削除するには:

1. ユーザーにユーザープロファイルのリンク、フォーラムのユーザー名、メールアドレスを尋ねます。送信元のメールアドレスはユーザー名のものと一致している必要があり、少なくとも 1 回は返信している必要があります。
1. Issue の内部コメントで [forum admins](https://forum.gitlab.com/about) のいずれかをタグ付けし、ユーザーと関連する投稿を削除するよう依頼します。
1. ユーザーが削除されたことをコメントで返信します。
</content>
