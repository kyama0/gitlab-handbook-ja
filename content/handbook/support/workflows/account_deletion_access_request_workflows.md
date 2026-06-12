---
title: アカウント削除＆データアクセスリクエスト - ワークフロー
category: GitLab.com
subcategory: Legal
description: "アカウント削除およびデータアクセスのリクエスト処理を行う方法"
controlled_document: true
upstream_path: /handbook/support/workflows/account_deletion_access_request_workflows/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
lastmod: "2026-06-11T09:12:49-07:00"
translated_at: "2026-06-12T00:00:00Z"
translator: claude
stale: false
model: claude-opus-4-7
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的 {#purpose}

このドキュメントには、アカウント削除やデータアクセスを含む、各種のデータ主体リクエストを処理する方法に関する手順が記載されています。手順は **送信処理 (Submission Handling)** と **リクエスト処理 (Request Processing)** の 2 つの段階に分かれており、この順序で実施します。**すべてのリクエストは、データ主体の管轄区域に応じて法的に許容される期間内に対応する必要があります。**

## 手順 {#procedure}

### **段階 1:** 送信処理 {#stage-1-submission-handling}

プライバシーリクエストは、[Privacy Center](https://privacy.gitlab.com/) を通じて送信された場合にのみ処理できます。それ以外の方法でリクエストを受け取った場合は、リクエストをクローズし、Privacy Center 上の `Make a Privacy Request` ボタンからリクエストを開くようユーザーを案内します。Privacy Center は Transcend を基盤としており、本ドキュメント内の「システム (the system)」とは、プライバシーリクエストが取り込まれ処理される Transcend プラットフォームを指します。

ユーザーが Privacy Center を通じてリクエストを送信すると、*GitLab アカウントが存在しない場合であっても*、システムが自動的に新しいリクエストを作成します。ユーザーとのすべてのやり取りは、当該プライバシーリクエスト内で行われます。

<details>
<summary markdown="span">プライバシーリクエスト内でデータ主体にメッセージを送信するには</summary>

- Incoming Request ビューから該当のリクエストをクリックします
- Messages タブに移動します
- 左側の青い Email アイコンをクリックします
- 上部の Template ドロップダウンボックスから目的のテンプレートを選択します
- 必要に応じてメール本文を調整します
- Send ボタンをクリックします

</details>

この段階の目的は、Privacy Center を通じて送信されなかったリクエストをクローズする方法を説明することです。

#### Zendesk からの送信 {#zendesk-submissions}

サポートチケットとして Zendesk 経由でリクエストを受け取った場合は、次のいずれかを行います。

- チケットが **アカウント削除 (Account Deletion)** リクエストに関するものである場合は、[Support::SaaS::Gitlab.com::Account Deletion Instructions - GitLab.com](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Account%20Deletion%20Instructions-%20GitLab.com.md?ref_type=heads) マクロを適用し、チケットを solved としてマークします。

- チケットが **データアクセス (Data Access)** リクエストに関するものである場合は、[General::Personal Data Access Request Instructions - GitLab.com](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/General/Personal%20Data%20Access%20Request%20Instructions%20-%20GitLab.com.md?ref_type=heads) マクロを適用して、GitLab の [Privacy Center](https://privacy.gitlab.com) を使ってリクエストを送信するようユーザーをリダイレクトし、チケットを solved としてマークします。

- チケットが **データポータビリティ (Data Portability)** リクエストに関するものである場合は、ユーザーにさらに確認します。ポータビリティリクエストは、ユーザーが GitLab から別のプラットフォームに移行したい場合にのみ適用されます。その場合、GitLab は Project Import and Export 機能によるセルフサービスの手順を提供します。あるプラットフォームから別のプラットフォームへの移行またはポーティングに必要な移行ドキュメントは、通常、移行先のプラットフォームが提供します。

- チケットが **データエクスポート (Data Export)** リクエストに関するものである場合は、アクセスリクエストとして扱う必要があります。[General::Personal Data Access Request Instructions - GitLab.com](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/General/Personal%20Data%20Access%20Request%20Instructions%20-%20GitLab.com.md?ref_type=heads) マクロを適用して、GitLab の [Privacy Center](https://privacy.gitlab.com) を使ってリクエストを送信するようユーザーをリダイレクトし、チケットを solved としてマークします。

### **段階 2:** リクエスト処理 {#stage-2-request-processing}

リクエストの種類に応じて、以下から適切なワークフローを見つけてプライバシーリクエストを処理します。

- [削除リクエスト](#deletion-requests)
- [データアクセスリクエスト](#data-access-requests)
- [データポータビリティリクエスト]*(近日公開)*

#### **削除リクエスト** {#deletion-requests}

以下は、ユーザーが送信できるリクエストの種類です。各リンクをクリックすると、そのリクエストを処理するための関連ワークフローに移動します。

- [個人ユーザーによる削除](#individual-user-deletion)（GitLab.com アカウント、Zendesk、Customer Portal、およびすべてのマーケティングシステムの個人データを削除します）
- [エンタープライズユーザーによる削除](#enterprise-user-deletion)（GitLab.com アカウント、Zendesk、Customer Portal、およびすべてのマーケティングシステムの個人データを削除します。Enterprise Account Owner の承認が必要です）
- [Customer Portal アカウントの削除](#portal-account-deletion)（customers.gitlab.com の個人データのみを削除します）
- [死亡したユーザーの削除](#deceased-account-owner-deletion)（GitLab.com アカウント、Zendesk、Customer Portal、およびすべてのマーケティングシステムの個人データを削除します。権限を持つ代理人が送信する必要があります）
- [マーケティング削除](#marketing-deletion)（マーケティングおよびセールス関連の個人データのみを削除します）

現在、個人ユーザーまたはエンタープライズユーザーによる削除のみが、送信時に自動チェックで検証されます。マーケティング削除は自動的に処理されます。死亡したユーザーの削除リクエストは、行為する権限の証明に関連する法的要件により、追加の検証ステップを経ます。

##### **個人ユーザーの削除** {#individual-user-deletion}

このワークフローは、データ主体が自身を個人ユーザーとして特定する削除リクエストに適用されます。次のフォームフィールドの入力内容が、組み込みの自動チェックを使って検証されます。

- メールアドレス（存在している必要があります）
- ユーザー名（存在している必要があります）
- ユーザー名とメールアドレスが同一アカウントで一致している必要があります
- アカウントが [Enterprise User](https://docs.gitlab.com/user/enterprise_user/) ではないこと。

送信後、GitLab アカウントが見つかった場合、自動チェックがリスク評価 (risk rating) を返します。リスク評価は、ユーザーアカウントを削除するために追加の検証が必要かどうかを判断するために使用されます。Support Engineer は、リスク評価の算出方法を [Support Workflow ページ](https://internal.gitlab.com/handbook/support/workflows/data-subject-requests/) *(社内限定)* で確認できます。自動チェックでユーザーアカウントが見つからない場合は、システムから生成されるメールメッセージでユーザーに通知されます。

###### **ステップ 0:** 重複リクエストの確認 {#step-0-check-for-duplicate-requests}

Incoming Request ビューに移動し、コア識別子を使って検索することで、ユーザーからの既存のリクエストを確認します。同じ種類の既存リクエストが一覧に表示された場合は、リクエスト自体をクリックして Status タブを確認し、元のリクエストの進行状況を判断します。既存のリクエストがまだ `compiling` または `deleting` の段階を進んでいる場合は、`Duplicate Request` メッセージをユーザーに送信して、後続の重複リクエストをクローズします。

注意: 削除リクエストでは、Support Engineer に割り当てられる別々のタスクが 2 つあります。

`Support Engineer (GitLab Deletion)` は、GitLab ユーザーアカウントが **削除可能かどうか** を判断し、可能であれば削除を実行する役割を果たします。*現在、ステップごとのアクションは、タスクを配信するメールにも表示されます。*

`Support Engineer (Zendesk/cDot Deletion)` は、ユーザーの Customers Portal アカウントおよび／または Zendesk アカウントが存在するかどうかを判断する役割を果たします。このタスク内で削除は行われません。ただし、Customers Portal の削除を console engineer に、Zendesk アカウントの削除を Support Readiness に割り当てる後続タスクのトリガーとして機能します。

###### **ステップ 1:** リスク評価の確認、アカウントタイプの確定、追加検証質問の送信 {#step-1-review-risk-rating-confirm-account-type-and-send-additional-verification-questions}

1.1. アカウントが Enterprise User かどうか

リクエストの Details タブで、Data Subject タイプが `Enterprise User` であり、**かつ** 自動チェックでもアカウントが Enterprise User のものであることが示されている場合は、ここで中止し、直接 [エンタープライズユーザーの削除](#enterprise-user-deletion) に進みます。
[エンタープライズユーザーのサポート上の定義](https://gitlab.com/gitlab-com/content-sites/handbook/blob/main/content/handbook/support/workflows/gitlab-com_overview.md#enterprise-users) も適用される点に注意してください。

1.2 リスク評価の確認

自動チェックによって medium または high のリスク評価が生成された場合は、ユーザーがプライベートプロジェクトを持っている場合に限り、`Medium Risk GitLab Account Verification Question` メッセージまたは `High Risk GitLab Account Verification Question` メッセージのいずれかをユーザーに送信します。プライベートプロジェクトがない場合は、追加の検証質問を送信しません。ユーザーには、これらの質問に回答するための猶予期間が 7 暦日あります。この期間中、`Support Engineer (GitLab Deletion)` タスクはオープンのままにしておきます。

###### 応答なし {#no-response}

ユーザーが 7 暦日以内に応答しない場合は、タスクを `Exception` としてマークし、ユーザーが検証に応答しなかった旨のメモを追加します。

###### **ステップ 2:** ブロックまたは BAN されたアカウント {#step-2-blocked-or-banned-accounts}

ユーザーアカウントがブロックまたは BAN されていない場合は、このセクションをスキップします。

ユーザーが自身のアカウントを削除したことによりブロックされている場合は、`Blocked Account Deletion Request` メッセージを送信してから、`Support Engineer (GitLab Deletion)` タスクを Complete としてマークします。

アカウントがブロックまたは BAN されている場合は、[ブロックされたアカウントの復元](/handbook/support/workflows/reinstating-blocked-accounts/#blocked-accounts) のために Trust and Safety で Issue を開いて `Account Reinstatement` ワークフローを進めます。ただし、中国でのフリーユーザーのブロックのように、ブロックまたは BAN の状態が規制上の理由による場合は、Support Engineer は #help-transcend で Privacy チームにもレビューを依頼する必要があります。判断が下されるまで、`Support Engineer (GitLab Deletion)` タスクはオープンのままにしておく必要があります。セキュリティレビューが依頼されたことを示すメモをタスクに追加してください。`Security Review Requested` メッセージをデータ主体に送信します。

アカウントのブロックまたは BAN が解除された場合は、`Security Review Complete` メッセージをデータ主体に送信してから、残りのプロセスを通常どおり進めます。

アカウントがブロックまたは BAN されたままの場合は、`Security Review Denied` メッセージをデータ主体に送信してから、`Support Engineer (GitLab Deletion)` タスクをステップ 3 の下で Exception としてマークします。

###### **ステップ 3:** 非エンタープライズユーザーの有料サブスクリプションステータスの確認 {#step-3-check-non-enterprise-user-paid-subscription-status}

1. アカウントが Enterprise ユーザー **ではない** ことを確認します。Enterprise ユーザーである場合は、[エンタープライズユーザーの削除](#enterprise-user-deletion) のステップに従います。
1. メールアドレスを使って Customers Portal を検索します。
1. Customers Portal アカウントが存在しない場合は、ステップ 4 に進みます。
1. Customers Portal アカウントが見つかり、かつ `Subscription` バッジがある場合:
    1. `Zuora Subscriptions` タブをクリックします。
    1. `End Date` と `Auto-renew` の値を確認します。Auto-renew が yes の場合は自動更新が有効、それ以外の場合は無効です。
1. **いずれかの** サブスクリプションの `End Date` が将来の日付である場合:
    1. リクエストの `Details` タブに次の形式でメモを追加します: `Cdot account has active saas subscription (A-S000xxxx) which expires on 202x-xx-xx auto-renewal is <dis/en>abled - https://customers.gitlab.com/admin/customer/<ID>`
    1. Bronwyn Barnett および／または Stephanie Ebbert をタグ付けして、`help-transcend` チャンネル経由でリクエストに追加したメモを Privacy に通知します
    1. Gitlab.com アカウント、Zendesk アカウント、CDot アカウントの削除を一切行いません。ステップ 4 には進みません。
1. **すべての** サブスクリプションの `End Date` が過去の日付である、またはサブスクリプションが一覧にない場合は、Customers Portal アカウントへのリンクを含むメモを追加します。ステップ 4 に進みます。

アクティブなサブスクリプションを持つ非エンタープライズユーザーに属する削除リクエストについて:

- Privacy チームは、サブスクリプションの終了日まで Transcend でアカウント削除リクエストを一時停止します。
- Privacy チームは、アクティブなサブスクリプションが存在する間はアカウント削除（マーケティングアカウントデータを除く）を処理できない旨をデータ主体に通知します。これは、アカウントデータを処理する適法な根拠が契約上の義務を履行することにあり、その義務には早期解約の規定が含まれていないためです。
- 自動更新期間を含むサブスクリプションの終了後、Privacy チームはアカウント削除プロセスを再開します。その時点で、Support Engineer は該当する場合に応じて、関連する GitLab.com アカウント、Zendesk アカウント、または CDot アカウントの削除を進めることができます。
- Privacy チームは、サブスクリプション終了後に Zuora から有料の非エンタープライズユーザーアカウントを削除するよう、30 日ごとに Billing/Accounts チームに通知します。

###### **ステップ 4:** 削除を進める {#step-4-proceed-with-deletion}

ステップ 4.1 の条件に該当しない限り、ステップ 4.2 の手順を実行して GitLab アカウントを削除します。

4.1 - **アカウントが既に削除済み**

ユーザーがリクエストを送信した後に GitLab アカウントを削除している可能性があります。そのような場合は、追加のアカウント検証を行ったり、リクエストを進めたりすることはできません。`Account Already Deleted` メッセージをデータ主体に送信し、`Support Engineer (GitLab Deletion)` タスクを completed としてマークします。

4.2 - **GitLab アカウントの削除**

- ユーザーが唯一の所有者であるグループなど、削除を妨げているグループを削除します。GitLab.com では [グループ削除](https://docs.gitlab.com/user/gitlab_com/#delayed-group-deletion) に 30 日の遅延があるため、グループを削除した後は Advanced Settings に移動し、`Delete group immediately` を選択して削除を完了します。
- `Delete user and contributions` でユーザー削除を開始します。これにより、ユーザーが参加しているがユーザーが唯一の所有者ではないプロジェクトは削除されない点に注意してください。ただし、ユーザーが作成した個人プロジェクトはすべて削除されます。
- 削除には遅延が生じる場合があるため、ユーザーが完全に削除されたことを確認します。
- [runbook](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) の [Deleting Data](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) セクションのみに従い、GitLab Data Platform で削除を実行するための .csv を追加または既存のものを編集します。
- 最新バージョンの .csv を GDPR フォルダにアップロードします。

4.3 - `Support Engineer (GitLab Deletion)` タスクで:

- すべてのユーザーアカウント削除ステップが完了したら、`Complete` としてマークします。
- ユーザーが追加の検証質問に不合格となった場合、または削除のためにアカウントのブロックや BAN を解除できない場合は、`Exception` としてマークします。例外としてマークした理由を示すメモをタスクに追加します。

###### **ステップ 5:** Zendesk および Customers Portal でアカウントを確認する {#step-5-check-zendesk-and-customers-portal-for-account}

- 両方のシステムでアカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Complete としてマークします。
- どちらのシステムでもアカウントが見つからなかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Not Found としてマークします。
- いずれか一方のシステムのみでアカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Exception としてマークし、どのシステムでアカウントが見つかったかを示すメモを追加します。

Support Engineer は、Zendesk または Customers Portal アカウントの削除を行いません。`Support Engineer (Zendesk/cDot Deletion)` タスクが解決された後、Customers Portal アカウントを削除する Console Engineer 向けの、および／または Zendesk アカウントを削除する Support Readiness Specialist 向けの別タスクがトリガーされます。

すべてのタスクが完了すると、リクエストが対応された旨を知らせるメッセージがシステムから自動的にユーザーに送信されます。

##### エンタープライズユーザーの削除 {#enterprise-user-deletion}

このワークフローは、データ主体が自身をエンタープライズユーザーとして特定する削除リクエストに適用されます。次のフォーム入力内容が、組み込みの自動チェックを使って検証されます。

- メールアドレス（存在している必要があります）
- ユーザー名（存在している必要があります）
- ユーザー名とメールアドレスが同一アカウントで一致している必要があります
- アカウントが Enterprise User であること

GitLab はエンタープライズユーザーの管理者 (Controller) ではありません。したがって、[Enterprise User](https://docs.gitlab.com/user/enterprise_user/) アカウントは、エンタープライズアカウント所有者の許可なしに削除することはできません。ただし、送信時に自動チェックが実行され、アカウントが見つかってエンタープライズユーザーであることが確認された場合はリスク評価を返します。リクエストが `Enterprise User` のデータ主体タイプとして送信されたものの、自動チェックがアカウントはエンタープライズユーザーでは「ない」ことを検証する場合があります。その場合、リクエストは個人ユーザーによって送信されたものとして扱う必要があります。リスク評価は、ユーザーアカウントを削除するために追加の検証が必要かどうかを判断するために使用されます。Support Engineer は、リスク評価とリスクスコアの算出方法を Support Workflows *(社内限定)* で確認できます。

エンタープライズユーザーに、アカウントへのアクセスまたは同様の問題を説明する既存の Zendesk チケットがあり、その問題が削除ではなく復元によって解決できるかどうかを確認します。問題に対して適切な解決プロセスに従います。これは、既存のチケット上、または下記ステップ 1 のグループ所有者へのアウトバウンドチケット上のいずれかで行います。

自動チェックでユーザーアカウントが見つからない場合は、システムから生成されるメールメッセージでユーザーに通知されます。

###### **ステップ 1:** 許可を得る {#step-1-obtain-permission}

削除リクエストがエンタープライズユーザーに関するものである場合は、`Enterprise User` メッセージをデータ主体に送信します。データ主体には、組織のシステム管理者への連絡を当社が試みることを希望するかどうかを応答して示すための猶予期間が 7 日間あります。

- データ主体が 7 日以内に応答せず、**かつ** 組織管理者がサポートチケットを通じてアカウントを削除する旨の書面による指示を提供していない場合は、`No Enterprise Admin Permission-Deletion` メッセージを送信し、タスクを Exception としてマークします。
- データ主体が、アカウントを削除する許可を得るために組織管理者への連絡を当社が試みるよう求めた場合は、エンタープライズユーザーアカウントの所有者に連絡するための [このワークフロー](/handbook/support/workflows/account_changes/#request-from-an-enterprise-user-that-may-or-may-not-be-part-of-the-group) の `Step 5. Contact Owner` を利用して行う必要があります。管理者には応答のための猶予期間を 10 暦日与えます。
  - 許可が与えられた場合は、サポートチケットへのリンクを含むメモを `Support Engineer (GitLab Deletion)` タスクに追加してから、以下のとおりエンタープライズユーザーアカウントの削除を進めます。
  - 許可が与えられなかった場合は、許可が得られなかったことを記録するためにサポートチケットへのリンクを含むメモを `Support Engineer (GitLab Deletion)` タスクに追加してから、タスクを Exception としてマークします。

###### **ステップ 2:** 削除を進める {#step-2-proceed-with-deletion}

ステップ 2.1 の条件に該当しない限り、ステップ 2.2 の手順を実行して Gitlab アカウントを削除します。

2.1 - **アカウントが既に削除済み**

ユーザーがリクエストを送信した後にアカウントを削除した、またはエンタープライズ管理者が削除できた可能性があります。そのような場合は、追加のアカウント検証を行うことはできません。`Account Already Deleted` メッセージを送信し、`Support Engineer (GitLab Deletion)` タスクを complete としてマークします。

2.2 - **GitLab アカウントの削除**

- ユーザーが唯一の所有者であるグループなど、削除を妨げているグループを削除します。GitLab.com では [グループ削除](https://docs.gitlab.com/user/gitlab_com/#delayed-group-deletion) に 30 日の遅延があるため、グループを削除した後は Advanced Settings に移動し、`Delete group immediately` を選択して削除を完了します。
- `Delete user and contributions` でユーザー削除を開始します。これにより、ユーザーが参加しているがユーザーが唯一の所有者ではないプロジェクトは削除されない点に注意してください。ただし、ユーザーが作成した個人プロジェクトはすべて削除されます。
- 削除には遅延が生じる場合があるため、ユーザーが完全に削除されたことを確認します。
- [runbook](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) の [Deleting Data](https://gitlab.com/gitlab-data/runbooks/-/blob/main/gdpr_deletions/gdpr_deletions.md?ref_type=heads#deleting-data) セクションのみに従い、GitLab Data Platform で削除を実行するための .csv を追加または既存のものを編集します。
- 最新バージョンの .csv を GDPR フォルダにアップロードします。

###### **ステップ 3:** Zendesk および Customers Portal でアカウントを確認する {#step-3-check-zendesk-and-customers-portal-for-account}

- 両方のシステムでアカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Complete としてマークします。
- どちらのシステムでもアカウントが見つからなかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Not Found としてマークします。
- いずれか一方のシステムのみでアカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを Exception としてマークし、どのシステムでアカウントが見つかったかを示すメモを追加します。

Support Engineer は、Zendesk または Customers Portal アカウントの削除を行いません。`Support Engineer (Zendesk/cDot Deletion)` タスクが解決された後、Customers Portal アカウントを削除する Console Engineer 向けの、および／または Zendesk アカウントを削除する Support Readiness Specialist 向けの別タスクがトリガーされます。

すべてのタスクが完了すると、リクエストが対応された旨を知らせるメッセージがシステムから自動的にユーザーに送信されます。

##### マーケティング削除 {#marketing-deletion}

Support Engineer には、マーケティング削除リクエストにおけるタスクはありません。この種類のリクエストについては、システムから Support にタスクが割り当てられることはありません。

##### **Portal アカウントの削除** {#portal-account-deletion}

このワークフローは、データ主体が自身を customers portal アカウント (customers.gitlab.com) の所有者として特定する削除リクエストに適用されます。

- customers portal アカウントが見つかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを complete としてマークします。
- customers portal アカウントが見つからなかった場合は、`Support Engineer (Zendesk/cDot Deletion)` タスクを not found としてマークします。

Support Engineer は、customers portal アカウントの削除を行いません。`Support Engineer (Zendesk/cDot Deletion)` タスクが解決された後、アカウントを削除する Console Engineer 向けの別タスクがトリガーされます。

関連するすべてのタスクが完了すると、リクエストが対応された旨を知らせるメッセージがシステムから自動的にユーザーに送信されます。

#### 死亡したアカウント所有者の削除 {#deceased-account-owner-deletion}

このワークフローは、個人ユーザーについて、権限を持つ代理人または [Designated Account Successor](https://docs.gitlab.com/user/profile/account/account_succession/) によって送信された削除リクエストに適用されます。このワークフローは、Designated Account Manager によって送信された削除リクエストには適用されません。その権限はアカウント所有者の死亡をもって消滅するためです。

次のフォーム入力内容が、組み込みの自動チェックを使って検証されます。

- メールアドレス（存在している必要があります）
- ユーザー名（存在している必要があります）
- ユーザー名とメールアドレスが同一アカウントで一致している必要があります
- アカウントが Enterprise Account ではないこと

注意: フォームでは、メールアドレスを次の優先順位で尋ねます。

1) アカウント上のプライマリまたはセカンダリのメールアドレス（権限を持つ代理人がアカウント所有者のメールにアクセスできる場合に使用）
2) Account Success のメールアドレス（権限を持つ代理人が Designated Account Successor として追加された場合に使用）
3) 権限を持つ代理人のメール（権限を持つ代理人が、Designated Account Successor として追加された際にどのメールが含まれていたかを知らない場合、またはアカウントに紐づくメールアドレスを知らない場合に使用）。

送信後、GitLab アカウントが見つかった場合、自動チェックがリスク評価を返します。Support Engineer は、リスク評価の算出方法を [Support Workflow ページ](https://internal.gitlab.com/handbook/support/workflows/data-subject-requests/) *(社内限定)* で確認できますが、このリスク計算は、リクエストを送信した個人の権限が Privacy チームによって検証された「後」にのみ考慮する必要があります。

自動チェックでユーザーアカウントが見つからない場合は、すべてのシステムタスクが完了した時点で、システムから生成されるメールメッセージでリクエスト送信者に通知されます。

システムに追加の自動化が加わるにつれて、権限を持つ代理人または Designated Account Successor によって送信された削除リクエストは、Privacy チームが法的要件が満たされていることを検証するまで保留されます。この検証が完了すると、リクエストが再開され、[個人ユーザーの削除](#individual-user-deletion) ワークフローに従う必要があります。

すべてのタスクが完了すると、リクエストが対応された旨を知らせるメッセージがシステムから自動的にリクエスト送信者に送信されます。

#### **データアクセスリクエスト** {#data-access-requests}

アクセスリクエストは、GitLab が処理する当該データ主体に関する個人データについての情報をデータ主体に提供するものです。アクセスリクエストを送信できるのは個人ユーザーのみです。GitLab はエンタープライズユーザーの個人データの管理者 (Controller) ではないため、アカウントがエンタープライズユーザーとして指定されている場合はアクセスリクエストに対応できません。次のフォーム入力内容が、組み込みの自動チェックを使って検証されます。

- メールアドレス（存在している必要があります）
- ユーザー名（存在している必要があります）
- ユーザー名とメールアドレスが同一アカウントで一致している必要があります
- アカウントがエンタープライズユーザーではないこと

送信後、GitLab アカウントが見つかった場合、自動チェックがリスク評価を返します。リスク評価は、ユーザーアカウントを削除するために追加の検証が必要かどうかを判断するために使用されます。Support Engineer は、リスク評価の算出方法を [Support Workflow ページ](https://internal.gitlab.com/handbook/support/workflows/data-subject-requests/) (*社内限定*) で確認できます。自動チェックでユーザーアカウントが見つからない場合は、システムから生成されるメールメッセージでユーザーに通知されます。

アクセスリクエストには、Support Engineer に割り当てられるタスクが 1 つありますが、これは 2 つの別々のシステムからのデータの照会と取得を兼ねています。

いずれかのシステムでアカウントが特定された場合:

- [Personal Data Requests 共有ドライブフォルダ](https://drive.google.com/drive/folders/0AA4kcF3prJ6pUk9PVA) から cDot/Zendesk の Google シートテンプレートをダウンロードし、システムにあるフィールド値を入力します。
- 空白のシートテンプレートをダウンロードしていること、また入力済みのシートを共有ドライブに保存していないことを確認します。
- 入力が完了したら、シートを `Support Engineer (Access)` タスクにアップロードし、complete としてマークします。

どちらのシステムでもアカウントが特定されない場合は、`Support Engineer (Access)` タスクを not found としてマークします。

すべてのタスクが完了すると、リクエストが対応された旨を知らせるメッセージがシステムから自動的にユーザーに送信されます。

#### **データエクスポートリクエスト（ポータビリティ権）** {#data-export-requests-right-to-portability}

このワークフローは、データエクスポートリクエストのみに適用され、データポータビリティリクエストには適用されません。なお、この種類のデータ主体リクエストは現在 [Privacy Center](https://privacy.gitlab.com) では利用できません。おそらく FY27Q1 に提供される予定です。ただし、データエクスポートまたはデータポータビリティリクエストのサポートチケットでは、個人の GitLab アカウント所有者（無料および有料）についてこのワークフローを利用する必要があります。

データポータビリティは、個人が GitLab から別のプラットフォームに移行したい場合に適用されます。現時点では、GitLab は Project Import and Export 機能によるセルフサービスの手順のみを提供しており、あるプラットフォームから別のプラットフォームへの移行またはポーティングにユーザーが必要とする移行ドキュメントは移行先のプラットフォームが提供します。GitLab はこれについて手順やサポートを提供できません。

データエクスポートリクエストは、アクセスリクエストと同様のワークフローに従いますが、スコープが絞られています。エクスポートリクエストに対応できるのは、個人プロジェクト、またはユーザーが「唯一の」メンバーであるグループ内のプロジェクトのみです。このワークフローは、リクエストがユーザーの国をキューバ、イラン、北朝鮮、シリア、ロシア、ベラルーシ、またはウクライナのクリミア、ドネツク、ルハンスク地域と示している場合は完了できません。これらは禁輸対象国であり、貿易コンプライアンス法の下でこれらの地域の個人と関わることが許可されていないためです。ご不明な点があれば、[#privacy-team_help](https://gitlab.slack.com/archives/C04357HVCJD) Slack チャンネルでお問い合わせください。

##### **ステップ 1:** ユーザーの地域を確認する {#step-1-verify-user-region}

ユーザーの地域が上記の禁輸対象国のいずれにも該当しないことを確認します。該当する場合は、`Embargoed Country` メッセージを送信し、タスクを exception としてマークします。

##### **ステップ 2:** セルフサービスの手順を案内する {#step-2-provide-instruction-for-self-service}

`Project Export Self-Serve` メッセージをユーザーに送信します。ユーザーには、セルフサービスの手順で問題があれば応答するための猶予期間が 7 日間あります。この期間中、`Support Engineer (Access)` タスクはオープンのままにしておきます。

- ユーザーが 7 日後も応答しない場合は、応答が得られなかった旨のメモを `Support Engineer (Access)` タスクに追加し、exception としてマークします。
- ユーザーがさらなる支援を求めており、**かつ** リクエストのリスク評価が medium または high の場合は、`Medium Risk GitLab Account Verification Question` メッセージ（ユーザーがプライベートプロジェクトを持っている場合に限る）または `High Risk GitLab Account Verification Question` メッセージのいずれかをデータ主体に送信します。ユーザーには、これらの質問に回答するための猶予期間が 7 暦日あります。この期間中、`Support Engineer (Access)` タスクはオープンのままにしておきます。

注意: データのエクスポートで問題が発生した場合、フリーユーザーに対してデータのエクスポートのサポートを拒否することはできません。ただし、すべての支援とコミュニケーションは、Zendesk サポートチケットを通じてではなく、プライバシーリクエスト内で行う必要があります。

##### **ステップ 3:** エクスポートを開始する {#step-3-begin-the-export}

必要に応じてユーザーが追加の検証に合格したら、プロジェクトのエクスポートを取得するプロセスを開始します。

- ユーザーがサインインできない場合は、[UI](https://docs.gitlab.com/user/project/settings/import_export/#export-a-project-and-its-data) または [API](https://docs.gitlab.com/api/project_import_export/#schedule-an-export) を使って、個人のネームスペースプロジェクト、またはユーザーが唯一のメンバーであるグループ内のプロジェクトのみをエクスポートします。
- エラーが発生した場合は、[顧客向けプロジェクトエクスポート](/handbook/support/workflows/exporting_projects/) ワークフローに従います。追加のトラブルシューティングの支援やアイデアが必要な場合は、有料顧客からの過去のプロジェクトエクスポートチケットの例を ZenDesk で検索できます。
- プロジェクトのエクスポートを `Support Engineer (Access)` タスクにアップロードし、`Project Export Complete` メッセージを送信して、タスクを complete としてマークします。

## 例外 {#exceptions}

リクエストの処理中に、リクエストを Privacy チームにエスカレーションする必要が生じる特定のシナリオが発生する場合があります。これらのうち最も一般的なものは、[Privacy Escalation Meta Issue](https://gitlab.com/gitlab-com/gdpr-request/-/blob/master/.gitlab/issue_templates/Privacy%20Escalation%20Meta%20Issue.md) テンプレートに記載されています。リクエストを Privacy チームにエスカレーションする必要がある場合は、次を行います。

1. [Privacy Escalation Meta Issue](https://gitlab.com/gitlab-com/gdpr-request/-/blob/master/.gitlab/issue_templates/Privacy%20Escalation%20Meta%20Issue.md) テンプレートを使って、新しい関連 Issue を作成します。

特定のシナリオでエスカレーションが必要かどうか確信が持てない場合は、`#privacy-team_help` Slack チャンネルで Privacy チームに連絡してください。

## フォーラムユーザーの削除 {#forum-user-deletion}

データ主体は、加えて自身の GitLab フォーラムアカウントの削除を要求できます。当社は GitLab フォーラムからユーザーを削除できるのみで、Discourse プラットフォームに対する制御権はありません。この種類のリクエストは現在 Privacy Center 経由では利用できませんが、サポートチケットを通じて寄せられる場合があります。フォーラムユーザーを削除するには:

1. ユーザーにユーザープロフィールのリンク、フォーラムのユーザー名、メールアドレスを尋ねます。送信元のメールアドレスはユーザー名のものと一致している必要があり、また少なくとも 1 回は投稿している必要があります。
1. Issue 上の社内コメントで [フォーラム管理者](https://forum.gitlab.com/about) のいずれかをタグ付けし、ユーザーと関連する投稿を削除するよう依頼します。
1. ユーザーが削除された旨をコメントで返信します。
</content>
</invoke>
