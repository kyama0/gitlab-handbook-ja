---
title: アカウント削除＆データアクセスリクエスト - ワークフロー
category: GitLab.com
subcategory: Legal
description: "アカウント削除およびデータアクセスのリクエスト処理を行う方法"
controlled_document: true
upstream_path: /handbook/support/workflows/account_deletion_access_request_workflows/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T19:23:50Z"
translator: claude
stale: false
lastmod: "2026-04-14T09:49:13+00:00"
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

このドキュメントには、アカウント削除とデータアクセスを含む各タイプのデータ主体リクエストを処理する方法の手順が含まれています。**Submission Handling** と **Request Processing** の 2 つのステージに分かれており、その順番で進めます。**すべてのリクエストは、データ主体の管轄区域に応じて法的に許可された期間内に履行する必要があります。**

## 手順

### **Stage 1:** 提出処理

プライバシーリクエストは [Privacy Center](https://privacy.gitlab.com/) を通じて提出された場合のみ処理できます。他の方法で受け取ったリクエストはクローズし、Privacy Center の `Make a Privacy Request` ボタンを通じてリクエストを開くようユーザーに案内します。Privacy Center は Transcend によって提供されており、「the system」への言及はプライバシーリクエストが取り込まれて処理される Transcend プラットフォームへの言及です。

ユーザーが Privacy Center を通じてリクエストを提出すると、システムは自動的に新しいリクエストを作成します。*GitLab アカウントが存在しない場合でも*。ユーザーとのすべてのコミュニケーションはプライバシーリクエスト内で行われます。

<details>
<summary markdown="span">プライバシーリクエスト内でデータ主体にメッセージを送信するには</summary>

- Incoming Request ビューから特定のリクエストをクリックします
- Messages タブに移動します
- 左側の青い Email アイコンをクリックします
- 上部の Template ドロップダウンボックスから希望のテンプレートを選択します
- 必要に応じてメールのテキストに調整を加えます
- Send ボタンをクリックします

</details>

このステージの目的は、Privacy Center を通じて提出されていないリクエストをクローズする方法を指示することです

#### Zendesk への提出

Zendesk でサポートチケットとしてリクエストを受け取った場合、以下のいずれかを行います:

- チケットが **アカウント削除** リクエストに関するものであれば、[Support::SaaS::Gitlab.com::Account Deletion Instructions - GitLab.com](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Account%20Deletion%20Instructions-%20GitLab.com.md?ref_type=heads) マクロを適用し、チケットを solved としてマークします。

- チケットが **データアクセス** リクエストに関するものであれば、ユーザーを GitLab [Privacy Center](https://privacy.gitlab.com) でリクエストを提出するようリダイレクトし、チケットを solved としてマークします。

- チケットが **データポータビリティ** リクエストに関するものであれば、ユーザーにさらに明確化を求めます。ポータビリティリクエストはユーザーが GitLab から別のプラットフォームに移行したい場合のみ適用されます。その場合、GitLab はプロジェクトのインポートとエクスポート機能を介したセルフサービスの手順を提供します。移行先のプラットフォームは通常、ユーザーがあるプラットフォームから別のプラットフォームに移行またはポートするために必要な移行ドキュメントを提供します。

- チケットが **データエクスポート** リクエストに関するものであれば、これはアクセスリクエストとして扱われます。ユーザーを GitLab [Privacy Center](https://privacy.gitlab.com) でリクエストを提出するようリダイレクトし、チケットを solved としてマークします。

### **Stage 2:** リクエスト処理

リクエストタイプに基づいて、以下から該当するワークフローを見つけてプライバシーリクエストを処理します。

- [削除リクエスト](#deletion-requests)
- [データアクセスリクエスト](#data-access-requests)
- [データポータビリティリクエスト]*(coming soon)*

#### **削除リクエスト** {#deletion-requests}

ユーザーが提出できるリクエストのタイプは以下のとおりです。各リクエストの処理に関連するワークフローにジャンプするには、各リンクをクリックしてください。

- [個人ユーザーによる削除](#individual-user-deletion)（GitLab.com アカウント、Zendesk、Customer Portal、およびすべてのマーケティングシステムの個人データを削除）
- [Enterprise ユーザーによる削除](#enterprise-user-deletion)（GitLab.com アカウント、Zendesk、Customer Portal、およびすべてのマーケティングシステムの個人データを削除。Enterprise アカウントオーナーの認証が必要）
- [Customer Portal アカウントの削除](#portal-account-deletion)（customers.gitlab.com の個人データのみ削除）
- [死亡したユーザーの削除](#deceased-account-owner-deletion)（GitLab.com アカウント、Zendesk、Customer Portal、およびすべてのマーケティングシステムの個人データを削除。権限のある代理人によって提出される必要があります）
- [マーケティング削除](#marketing-deletion)（マーケティングおよび販売関連の個人データのみ削除）

現在、個人ユーザーまたは Enterprise ユーザーによる削除のみが提出時の自動チェックで検証されます。マーケティング削除は自動的に処理されます。死亡したユーザーの削除リクエストは、行動権限の証明に関連する法的要件のため、追加の検証ステップを経ます。

##### **個人ユーザーの削除** {#individual-user-deletion}

このワークフローは、データ主体が自身を個人ユーザーと識別する削除リクエストに適用されます。以下のフォームフィールドエントリは組み込みの自動チェックを使って検証されます:

- メールアドレス（存在する必要がある）
- ユーザー名（存在する必要がある）
- ユーザー名とメールが同じアカウントで一致する必要がある
- アカウントが [Enterprise ユーザー](https://docs.gitlab.com/user/enterprise_user/) でない

提出後、自動チェックは GitLab アカウントが見つかった場合にリスク評価を返します。リスク評価は、ユーザーアカウントを削除するために追加の検証が必要かどうかを判断するために使用されます。サポートエンジニアは [サポートワークフローページ](https://internal.gitlab.com/handbook/support/workflows/data-subject-requests/) *(internal only)* でリスク評価の計算方法をレビューできます。自動チェックでユーザーアカウントが見つからない場合、ユーザーはシステムから生成されたメールメッセージで通知されます。

###### **Step 0:** 重複リクエストのチェック

Incoming Request ビューに移動し、コア識別子で検索することで、ユーザーからの既存のリクエストを確認します。同じタイプの既存のリクエストがリストされている場合、リクエストをクリックして Status タブを確認することで元のリクエストの進捗を判断します。既存のリクエストがまだ `compiling` または `deleting` ステージで進行している場合、ユーザーに `Duplicate Request` メッセージを送信して後続の重複リクエストをクローズします。

ご注意ください: 削除リクエストにはサポートエンジニアに割り当てられる 2 つの別々のタスクがあります。

`Support Engineer (GitLab Deletion)` は、GitLab ユーザーアカウントが **削除可能か** を判断し、可能であれば削除を実行することを目的としています。*現在、ステップごとのアクションはタスクを配信するメールにも表示されています。*

`Support Engineer (Zendesk/cDot Deletion)` は、ユーザーに対する Customers Portal アカウントおよび／または Zendesk アカウントが存在するかを判断することを目的としています。このタスク内では削除は実行されません。ただし、このタスクは Customers Portal の削除を実行する console エンジニアと Zendesk アカウントの削除を実行する Support Readiness に割り当てられる後続のタスクのトリガーとなります。

###### **Step 1:** リスク評価のレビュー、アカウントタイプの確認、追加検証質問の送信

1.1. アカウントが Enterprise ユーザーかどうか

リクエストの Details タブで、Data Subject タイプが `Enterprise User` で **かつ** 自動チェックでもアカウントが Enterprise ユーザーであることが示されている場合、停止して直接 [Enterprise User Deletion](#enterprise-user-deletion) に進みます。

1.2 リスク評価のレビュー

自動チェックによって medium または high のリスク評価が生成された場合、ユーザーがプライベートプロジェクトを持っている場合に限り、`Medium Risk GitLab Account Verification Question` メッセージまたは `High Risk GitLab Account Verification Question` メッセージのいずれかを送信します。プライベートプロジェクトがない場合は、追加の検証質問を送信しません。ユーザーには質問に回答する 7 暦日があります。`Support Engineer (GitLab Deletion)` タスクはこの間オープンのままにしておきます。

###### 応答なし

ユーザーが 7 暦日以内に応答しなかった場合は、タスクを `Exception` としてマークし、ユーザーが検証に応答しなかったというノートを追加します。

###### **Step 2:** ブロックまたは禁止されたアカウント

ユーザーアカウントがブロックまたは禁止されていない場合は、このセクションをスキップします。

ユーザーが自分のアカウントを削除したことによりブロックされている場合は、`Blocked Account Deletion Request` メッセージを送信し、`Support Engineer (GitLab Deletion)` タスクを Complete としてマークします。

アカウントがブロックまたは禁止されており、追加の検証質問が必要な場合、合格する応答が検証されたら、[ブロックされたアカウントの復活](/handbook/support/workflows/reinstating-blocked-accounts/#blocked-accounts) ワークフローに進みます。一般的に、評価には Trust and Safety の Issue が必要です。`Support Engineer (GitLab Deletion)` タスクは判断が下されるまでオープンのままにしておく必要があります。タスクにセキュリティレビューがリクエストされたことを示すノートを追加してください。データ主体に `Security Review Requested` メッセージを送信します。

アカウントがブロック解除または禁止解除された場合は、データ主体に `Security Review Complete` メッセージを送信し、その後通常のプロセスに従います。

アカウントがブロックまたは禁止のままの場合は、データ主体に `Security Review Denied` メッセージを送信し、Step 3 で `Support Engineer (GitLab Deletion)` タスクを Exception としてマークします。

###### **Step 3:** 非 Enterprise ユーザーの有償サブスクリプションステータスの確認

1. アカウントが Enterprise ユーザー **でない** ことを確認します。Enterprise ユーザーの場合は、[Enterprise ユーザーの削除](#enterprise-user-deletion) 手順に従います。
1. メールアドレスを使って Customers Portal を検索します。
1. Customers Portal アカウントが存在しない場合は、Step 4 に進みます。
1. Customers Portal アカウントが見つかり、`Subscription` バッジがある場合:
    1. `Zuora Subscriptions` タブをクリックします。
    1. `End Date` と `Auto-renew` の値をメモします。Auto-renew が yes であれば自動更新は有効、そうでなければ無効です。
1. **いずれかの** サブスクリプションの `End Date` が将来である場合:
    1. リクエストの `Details` タブに次の形式でノートを追加します: `Cdot account has active saas subscription (A-S000xxxx) which expires on 202x-xx-xx auto-renewal is <dis/en>abled - https://customers.gitlab.com/admin/customer/<ID>`
    1. `help-transcend` チャンネルで Bronwyn Barnett や Stephanie Ebbert にタグを付けて、リクエストに追加されたノートを Privacy に伝えます
    1. Gitlab.com アカウント、Zendesk アカウント、CDot アカウントの削除を実行しないでください。Step 4 に進まないでください。
1. **すべての** サブスクリプションの `End Date` が過去であるか、サブスクリプションがリストされていない場合は、Customers Portal アカウントへのリンクとともにノートを追加します。Step 4 に進みます。

アクティブなサブスクリプションを持つ非 Enterprise ユーザーに属する削除リクエストの場合:

- Privacy チームは、サブスクリプション終了日まで Transcend でアカウント削除リクエストを一時停止します。
- Privacy チームは、アクティブなサブスクリプションが存在する間はアカウント削除（マーケティングアカウントデータを除く）を処理できないことをデータ主体に伝えます。これは、アカウントデータを処理する適法な根拠が契約上の義務を履行することにあり、早期終了の規定が含まれていないためです。
- 自動更新期間後を含むサブスクリプション終了時に、Privacy チームはアカウント削除プロセスを再開します。その時点で、サポートエンジニアは該当する関連の GitLab.com アカウント、Zendesk アカウント、または CDot アカウントの削除を進められます。
- Privacy チームは、サブスクリプション終了に従い 30 日ごとに Billing/Accounts チームに有償の非 Enterprise ユーザーアカウントを Zuora から削除するよう通知します。

###### **Step 4:** 削除を実行する

Step 4.1 の条件が存在しない限り、Step 4.2 の手順を実行して GitLab アカウントを削除します。

4.1 - **アカウントがすでに削除されている**

ユーザーがリクエストを提出した後に GitLab アカウントを削除した可能性があります。この場合、これ以上のアカウント検証やリクエストの進行は不可能です。データ主体に `Account Already Deleted` メッセージを送信し、`Support Engineer (GitLab Deletion)` タスクを完了としてマークします。

4.2 - **GitLab アカウントの削除**

- 削除をブロックしているグループ（ユーザーが唯一のオーナーであるグループなど）を削除します。GitLab.com では [グループ削除](https://docs.gitlab.com/user/gitlab_com/#delayed-group-deletion) に 30 日の遅延があるため、グループを削除した後は Advanced Settings に移動して `Delete group immediately` を選択して削除を完了します。
- `Delete user and contributions` でユーザー削除を開始します。これは、ユーザーが参加していてユーザーが唯一のオーナーでないプロジェクトを削除しないことに注意してください。ただし、ユーザーが作成した個人プロジェクトは削除されます。
- 削除が遅延する可能性があるため、ユーザーが完全に削除されたことを確認します。
- GitLab Data Platform で削除を実行するために既存の .csv を追加または編集し、[runbook](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) の [Deleting Data](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) セクションのみに従います。
- 最新バージョンの .csv を GDPR フォルダーにアップロードします。

4.3 - `Support Engineer (GitLab Deletion)` タスク内で:

- すべてのユーザーアカウント削除手順が完了したら `Complete` としてマークします。
- ユーザーが追加の検証質問に失敗した場合、またはアカウントを削除するためにブロック解除や禁止解除ができない場合は、`Exception` としてマークします。例外としてマークした理由を示すノートをタスクに追加します。

###### **Step 5:** Zendesk と Customers Portal でアカウントを確認する

- 両方のシステムでアカウントが見つかった場合、`Support Engineer (Zendesk/cDot Deletion)` タスクを Complete としてマークします。
- どちらのシステムにもアカウントが見つからなかった場合、`Support Engineer (Zendesk/cDot Deletion)` タスクを Not Found としてマークします。
- いずれか一方のシステムでのみアカウントが見つかった場合、`Support Engineer (Zendesk/cDot Deletion)` タスクを Exception としてマークし、どのシステムでアカウントが見つかったかを示すノートを追加します。

サポートエンジニアは Zendesk または Customers Portal アカウントの削除を実行しません。`Support Engineer (Zendesk/cDot Deletion)` タスクが解決された後、Console Engineer が Customers Portal アカウントを削除し、および／または Support Readiness Specialist が Zendesk アカウントを削除するための別のタスクがトリガーされます。

すべてのタスクが完了すると、システムは自動的にユーザーにリクエストが履行されたことを伝えるメッセージを送信します。

##### Enterprise ユーザーの削除 {#enterprise-user-deletion}

このワークフローは、データ主体が自身を Enterprise ユーザーと識別する削除リクエストに適用されます。以下のフォームエントリは組み込みの自動チェックを使って検証されます:

- メールアドレス（存在する必要がある）
- ユーザー名（存在する必要がある）
- ユーザー名とメールが同じアカウントで一致する必要がある
- アカウントが Enterprise ユーザーである

GitLab は Enterprise ユーザーの Controller ではありません。したがって、[Enterprise ユーザー](https://docs.gitlab.com/user/enterprise_user/) アカウントは Enterprise アカウントオーナーの許可なしには削除できません。ただし、提出時に自動チェックが実行され、アカウントが見つかり Enterprise ユーザーであることが確認された場合にリスク評価が返されます。リクエストが `Enterprise User` データ主体タイプとして提出されているが、自動チェックでアカウントが Enterprise ユーザーで **ない** ことが検証されることもあります。その場合、リクエストは個人ユーザーが提出したかのように扱う必要があります。リスク評価は、ユーザーアカウントを削除するために追加の検証が必要かどうかを判断するために使用されます。サポートエンジニアは Support Workflows *(internal only)* でリスク評価とリスクスコアの計算方法をレビューできます。

自動チェックでユーザーアカウントが見つからない場合、ユーザーはシステムから生成されたメールメッセージで通知されます。

###### **Step 1:** 許可の取得

削除リクエストが Enterprise ユーザーに対するものである場合、データ主体に `Enterprise User` メッセージを送信します。データ主体は 7 日以内に返答し、組織のシステム管理者に連絡を試みてほしいかを示します。

- データ主体が 7 日以内に応答せず、**かつ** 組織管理者がサポートチケットを通じてアカウントを削除する書面による指示を提供していない場合、`No Enterprise Admin Permission-Deletion` メッセージを送信し、タスクを Exception としてマークします。
- データ主体がアカウントを削除する許可を得るために組織管理者に連絡を試みるよう求めた場合、Enterprise ユーザーアカウントのオーナーに連絡するための [このワークフロー](/handbook/support/workflows/account_changes/#request-from-an-enterprise-user-that-may-or-may-not-be-part-of-the-group) を使用してこれを行います。管理者に応答するための 10 日間を与えます。
  - 許可が付与された場合、サポートチケットへのリンクを `Support Engineer (GitLab Deletion)` タスクにノートとして追加し、その後以下のとおり Enterprise ユーザーアカウントを削除します。
  - 許可が付与されなかった場合、許可を得られなかったことを記録するためにサポートチケットへのリンクを `Support Engineer (GitLab Deletion)` タスクにノートとして追加し、タスクを Exception としてマークします。

###### **Step 2:** 削除を実行する

Step 2.1 の条件が存在しない限り、Step 2.2 の手順を実行して Gitlab アカウントを削除します:

2.1 - **アカウントがすでに削除されている**

ユーザーがリクエストを提出した後にアカウントを削除した可能性、または Enterprise 管理者が削除できた可能性があります。この場合、これ以上のアカウント検証は不可能です。`Account Already Deleted` メッセージを送信し、`Support Engineer (GitLab Deletion)` タスクを完了としてマークします。

2.2 - **GitLab アカウントの削除**

- 削除をブロックしているグループ（ユーザーが唯一のオーナーであるグループなど）を削除します。GitLab.com では [グループ削除](https://docs.gitlab.com/user/gitlab_com/#delayed-group-deletion) に 30 日の遅延があるため、グループを削除した後は Advanced Settings に移動して `Delete group immediately` を選択して削除を完了します。
- `Delete user and contributions` でユーザー削除を開始します。これは、ユーザーが参加していてユーザーが唯一のオーナーでないプロジェクトを削除しないことに注意してください。ただし、ユーザーが作成した個人プロジェクトは削除されます。
- 削除が遅延する可能性があるため、ユーザーが完全に削除されたことを確認します。
- GitLab Data Platform で削除を実行するために既存の .csv を追加または編集し、[runbook](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) の [Deleting Data](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) セクションのみに従います。
- 最新バージョンの .csv を GDPR フォルダーにアップロードします。

###### **Step 3:** Zendesk と Customers Portal でアカウントを確認する

- 両方のシステムでアカウントが見つかった場合、`Support Engineer (Zendesk/cDot Deletion)` タスクを Complete としてマークします。
- どちらのシステムにもアカウントが見つからなかった場合、`Support Engineer (Zendesk/cDot Deletion)` タスクを Not Found としてマークします。
- いずれか一方のシステムでのみアカウントが見つかった場合、`Support Engineer (Zendesk/cDot Deletion)` タスクを Exception としてマークし、どのシステムでアカウントが見つかったかを示すノートを追加します。

サポートエンジニアは Zendesk または Customers Portal アカウントの削除を実行しません。`Support Engineer (Zendesk/cDot Deletion)` タスクが解決された後、Console Engineer が Customers Portal アカウントを削除し、および／または Support Readiness Specialist が Zendesk アカウントを削除するための別のタスクがトリガーされます。

すべてのタスクが完了すると、システムは自動的にユーザーにリクエストが履行されたことを伝えるメッセージを送信します。

##### マーケティング削除 {#marketing-deletion}

サポートエンジニアにはマーケティング削除リクエストにおけるタスクはありません。このタイプのリクエストでは、システムからサポートにタスクが割り当てられることはありません。

##### **Portal アカウントの削除** {#portal-account-deletion}

このワークフローは、データ主体が自身を customers portal アカウント（customers.gitlab.com）の所有者と識別する削除リクエストに適用されます。

- customers portal アカウントが見つかった場合、`Support Engineer (Zendesk/cDot Deletion)` タスクを Complete としてマークします。
- customers portal アカウントが見つからなかった場合、`Support Engineer (Zendesk/cDot Deletion)` タスクを Not Found としてマークします。

サポートエンジニアは customers portal アカウントの削除を実行しません。`Support Engineer (Zendesk/cDot Deletion)` タスクが解決された後、Console Engineer がアカウントを削除するための別のタスクがトリガーされます。

すべての関連タスクが完了すると、システムは自動的にユーザーにリクエストが履行されたことを伝えるメッセージを送信します。

#### 死亡したアカウントオーナーの削除 {#deceased-account-owner-deletion}

このワークフローは、個人ユーザーに対して権限のある代理人または [Designated Account Successor](https://docs.gitlab.com/user/profile/account/account_succession/) によって提出された削除リクエストに適用されます。このワークフローは、Designated Account Manager によって提出された削除リクエストには適用されません。アカウントオーナーの死亡時にその権限は終了するためです。

以下のフォームエントリは組み込みの自動チェックを使って検証されます:

- メールアドレス（存在する必要がある）
- ユーザー名（存在する必要がある）
- ユーザー名とメールが同じアカウントで一致する必要がある
- アカウントが Enterprise アカウントでない

ご注意ください: フォームでは、特定の優先順位でメールアドレスを尋ねます:

1) アカウント上のプライマリーまたはセカンダリーメールアドレス（権限のある代理人がアカウントオーナーのメールにアクセスできる場合に使用）
2) Account Success メールアドレス（権限のある代理人が Designated Account Successor として追加された場合に使用）
3) 権限のある代理人のメール（権限のある代理人が Designated Account Successor として追加されたときに含まれていたメールを知らない場合、またはアカウントに紐づいたメールアドレスを知らない場合に使用）。

提出後、自動チェックは GitLab アカウントが見つかった場合にリスク評価を返します。サポートエンジニアは [サポートワークフローページ](https://internal.gitlab.com/handbook/support/workflows/data-subject-requests/) *(internal only)* でリスク評価の計算方法をレビューできますが、このリスク計算は、Privacy Team によってリクエストを提出した個人の権限が検証された **後** にのみ考慮されるべきです。

自動チェックでユーザーアカウントが見つからない場合、すべてのシステムタスクが完了した時点でリクエスターはシステムから生成されたメールメッセージで通知されます。

システムにより多くの自動化が追加されると、権限のある代理人または Designated Account Successor によって提出された削除リクエストは、Privacy Team が法的要件が満たされていることを検証するまで保留されます。この検証が完了すると、リクエストは再開され、[個人ユーザーの削除](#individual-user-deletion) ワークフローに従う必要があります。

すべてのタスクが完了すると、システムは自動的にリクエスターにリクエストが履行されたことを伝えるメッセージを送信します。

#### **データアクセスリクエスト** {#data-access-requests}

アクセスリクエストは、データ主体に GitLab が処理する自分に関する個人データの情報を提供します。アクセスリクエストを提出できるのは個人ユーザーのみです。GitLab は Enterprise ユーザーの個人データの Controller ではないため、アカウントが Enterprise ユーザーとして指定されている場合はアクセスリクエストを履行できません。以下のフォームエントリは組み込みの自動チェックを使って検証されます:

- メールアドレス（存在する必要がある）
- ユーザー名（存在する必要がある）
- ユーザー名とメールが同じアカウントで一致する必要がある
- アカウントが Enterprise ユーザーでない

提出後、自動チェックは GitLab アカウントが見つかった場合にリスク評価を返します。リスク評価は、ユーザーアカウントを削除するために追加の検証が必要かどうかを判断するために使用されます。サポートエンジニアは [サポートワークフローページ](https://internal.gitlab.com/handbook/support/workflows/data-subject-requests/) (*internal only*) でリスク評価の計算方法をレビューできます。自動チェックでユーザーアカウントが見つからない場合、ユーザーはシステムから生成されたメールメッセージで通知されます。

アクセスリクエストにはサポートエンジニアに割り当てられる 1 つのタスクがありますが、これは 2 つの別々のシステムからのデータのクエリと取得を組み合わせたものです。

いずれかのシステムでアカウントが特定された場合:

- Personal Data Requests 共有ドライブフォルダーから cDot/Zendesk Google sheet テンプレートをダウンロードし、システムにあるフィールド値を入力します。
- 必ず空白のシートテンプレートをダウンロードし、入力済みのシートを共有ドライブに保存しないでください。
- 入力が完了したら、シートを `Support Engineer (Access)` タスクにアップロードし、Complete としてマークします。

どちらのシステムでもアカウントが特定されなかった場合、`Support Engineer (Access)` タスクを Not Found としてマークします。

すべてのタスクが完了すると、システムは自動的にユーザーにリクエストが履行されたことを伝えるメッセージを送信します。

#### **データエクスポートリクエスト（ポータビリティの権利）**

このワークフローは、データエクスポートリクエストにのみ適用され、データポータビリティリクエストには適用されません。なお、このデータ主体リクエストタイプは現在 [Privacy Center](https://privacy.gitlab.com) では利用できません。FY27Q1 におそらく提供されるでしょう。ただし、データエクスポートまたはデータポータビリティリクエストのサポートチケットは、個人 GitLab アカウントオーナー（無償および有償）に対してこのワークフローを利用すべきです。

データポータビリティは、個人が GitLab から別のプラットフォームに移行したい場合に適用されます。現在、GitLab はプロジェクトのインポートとエクスポート機能を介したセルフサービスの手順のみを提供します。移行先のプラットフォームは、ユーザーがあるプラットフォームから別のプラットフォームに移行またはポートするために必要な移行ドキュメントを提供します。GitLab はこれに対する指示やサポートを提供できません。

データエクスポートリクエストは、範囲を絞った形でアクセスリクエストと同様のワークフローに従います。エクスポートリクエストでアクションを取れるのは個人プロジェクトまたはユーザーが *唯一の* メンバーであるグループ内のプロジェクトのみです。リクエストでユーザーの国がキューバ、イラン、北朝鮮、シリア、ロシア、ベラルーシ、またはウクライナのクリミア、ドネツク、ルハンスク地域である場合、これらは禁輸国であり Trade Compliance 法の下でこれらの場所の個人と関わることが許可されていないため、このワークフローは完了できません。質問があれば [#privacy-team_help](https://gitlab.slack.com/archives/C04357HVCJD) Slack チャンネルでお問い合わせください。

##### **Step 1:** ユーザーの地域を確認する

ユーザーの地域が上記の禁輸国のいずれかではないことを確認します。該当する場合は、`Embargoed Country` メッセージを送信し、タスクを Exception としてマークします。

##### **Step 2:** セルフサービスの指示を提供する

ユーザーに `Project Export Self-Serve` メッセージを送信します。ユーザーにはセルフサービス手順での問題に関して 7 日間の応答期間があります。`Support Engineer (Access)` タスクはこの間オープンのままにしておきます。

- ユーザーが 7 日後に応答しなかった場合、応答が受信されなかったことを示すノートを `Support Engineer (Access)` タスクに追加し、Exception としてマークします。
- ユーザーがさらなる支援を求め、**かつ** リクエストに medium または high のリスク評価がある場合、データ主体に `Medium Risk GitLab Account Verification Question` メッセージ（ユーザーがプライベートプロジェクトを持っている場合のみ）または `High Risk GitLab Account Verification Question` メッセージのいずれかを送信します。ユーザーには質問に回答する 7 暦日があります。`Support Engineer (Access)` タスクはこの間オープンのままにしておきます。

ご注意ください: 無償ユーザーがデータエクスポートで問題に遭遇した場合、データのエクスポートに対してサポートを拒否することはできません。ただし、すべての支援とコミュニケーションはプライバシーリクエスト内で行うべきで、Zendesk サポートチケットを通してではありません。

##### **Step 3:** エクスポートを開始する

必要に応じてユーザーが追加の検証に合格したら、プロジェクトエクスポートを取得するプロセスを開始します。

- ユーザーがサインインできない場合、[UI](https://docs.gitlab.com/user/project/settings/import_export/#export-a-project-and-its-data) または [API](https://docs.gitlab.com/api/project_import_export/#schedule-an-export) を使って、個人ネームスペースプロジェクトまたはユーザーが唯一のメンバーであるグループ内のプロジェクトのみをエクスポートします。
- エラーが発生した場合は、[customer のためのプロジェクトエクスポート](/handbook/support/workflows/exporting_projects/) ワークフローに従います。追加のトラブルシューティングのヘルプやアイデアが必要な場合は、ZenDesk で有償顧客の過去のプロジェクトエクスポートチケットの例を検索できます。
- プロジェクトエクスポートを `Support Engineer (Access)` タスクにアップロードし、`Project Export Complete` メッセージを送信し、タスクを Complete としてマークします。

## 例外

リクエストの処理中、Privacy チームへのリクエストのエスカレーションが必要となるシナリオが発生する可能性があります。これらのシナリオの最も一般的なものは [Privacy Escalation Meta Issue](https://gitlab.com/gitlab-com/gdpr-request/-/blob/master/.gitlab/issue_templates/Privacy%20Escalation%20Meta%20Issue.md) テンプレートにあります。リクエストを Privacy チームにエスカレートする必要がある場合、以下を行います:

1. [Privacy Escalation Meta Issue](https://gitlab.com/gitlab-com/gdpr-request/-/blob/master/.gitlab/issue_templates/Privacy%20Escalation%20Meta%20Issue.md) テンプレートを使用して、新しい関連 Issue を作成します。

特定のシナリオにエスカレーションが必要かどうか不確かな場合は、`#privacy-team_help` Slack チャンネルで Privacy チームに連絡してください。

## フォーラムユーザーの削除

データ主体は、追加で GitLab フォーラムアカウントを削除するようリクエストできます。GitLab フォーラムからのみユーザーを削除できますが、Discourse プラットフォームに対するコントロールは持っていません。このリクエストタイプは現在 Privacy Center では利用できませんが、サポートチケット経由でリクエストが来る可能性があります。フォーラムユーザーを削除するには:

1. ユーザーにユーザープロフィールリンク、フォーラムユーザー名、メールアドレスを尋ねます。提出に使用されたメールアドレスはユーザー名と一致する必要があり、少なくとも 1 回応答していなければなりません。
1. Issue の内部コメントで [フォーラム管理者](https://forum.gitlab.com/about) の 1 人にタグを付け、ユーザーと関連する投稿の削除を依頼します。
1. ユーザーが削除されたとコメントで返します。
