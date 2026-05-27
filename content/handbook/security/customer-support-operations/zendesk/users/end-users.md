---
title: 'End-users'
description: 'Zendesk のエンドユーザーに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/users/end-users/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
lastmod: 2026-05-26T12:05:00-05:00
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk のエンドユーザーの作成、編集、管理方法を説明します。また、Zendesk のエンドユーザー設定についても説明します。管理者は [管理者向けタスク](#administrator-tasks)のセクションを確認してください。

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Ad-hoc`

{{% /alert %}}

## Understanding end-users

### What are end-users

エンドユーザーは、エージェントの下位に位置する Zendesk ユーザーの分類です。一般に公開されているサポートポータルにアクセスしたり、チケットを送信したりできます。Zendesk のエージェント機能やバックエンドにはアクセスできません。

### How we manage end-users

- Zendesk Global: エンドユーザーは Zendesk で手動管理されます  
- Zendesk US Government: エンドユーザーは [Zendesk-Salesforce Sync](/handbook/security/customer-support-operations/zendesk-salesforce-sync/) を介して自動的に同期されます

### User notes

ユーザーノートと詳細（details）は、カスタム情報を保存するユーザープロファイル上の 2 つの別々のテキストフィールドです:

- Notes: エージェントのみが閲覧できる内部情報
- Details: ユーザーに関する追加のコンテキスト

どちらのフィールドも、[Zendesk のトリガー](/handbook/security/customer-support-operations/zendesk/triggers/)を介して、新しいチケットの内部ノートとして自動的に投稿されます。

#### Requesting a user note update as a non-admin

ユーザーノートの追加、変更、削除が必要な場合は、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動の対応が必要なためです）。

#### Requesting the ban of an end-user as a non-admin

エンドユーザーの BAN が必要な場合は、#support_operations Slack チャンネルにユーザーの BAN が必要であることを投稿してください。Customer Support Operations チームのメンバーが（ダイレクトメッセージで）連絡を取り、この件について一緒に対応します。

### Current system end-user settings

以下の設定は、エンドユーザーがどのように登録、認証、サポートポータルとのやり取りを行えるかを制御します。これらの設定は参考用にここに記載されており、変更されることはほとんどありません。

<details>
<summary>Zendesk Global の場合</summary>

- Anybody can submit tickets
  - [x] Enabled
    - [x] Require authentication for request and uploads APIs.
    - [ ] Ask users to register
    - User registration message
      > Please fill out this form, and we'll send you a welcome email to verify your email address and log you in.
  - Allowlist
    > gitlab@gitlab.com google.com
  - Blocklist: Zendesk 管理パネルで直接確認 - 機密データを含みます
- Account emails
  - [ ]  Include a list of active Help Centers in account emails
  - User welcome email text:
    > Welcome to GitLab Support. Please click the link below to create a password and login.
  - [ ] Also send a welcome email when a new user is created by an agent or administrator.
  - Email verification email text
    > We need to verify that you are the owner of this email address. Please follow the link below to verify.
- Allow users to view and edit their profile data
  - [x] Enabled
- Allow users to change their password
  - [x] Enabled
- Validate user phone numbers
  - [ ] Enabled
- Tags on users and organizations
  - [x] Enabled
- Allow users to belong to multiple organizations
  - [ ] Enabled

</details>
<details>
<summary>Zendesk US Government の場合</summary>

- Anybody can submit tickets
  - [x] Enabled
    - [x] Require authentication for request and uploads APIs.
    - [ ] Ask users to register
    - User registration message
      > Please fill out this form, and we'll send you a welcome email so you can verify your email address and sign in.
  - Allowlist
    > gitlab@gitlab.com google.com
  - Blocklist: Zendesk 管理パネルで直接確認 - 機密データを含みます
- Account emails
  - [ ]  Include a list of active Help Centers in account emails
  - User welcome email text:
    > Welcome to GitLab Federal Support. Please click the link below to create a password and sign-in.
  - [ ] Also send a welcome email when a new user is created by an agent or administrator.
  - Email verification email text
    > We need to verify that you are the owner of this email address. Please follow the link below to verify.
- Allow users to view and edit their profile data
  - [x] Enabled
- Allow users to change their password
  - [x] Enabled
- Validate user phone numbers
  - [ ] Enabled
- Tags on users and organizations
  - [x] Enabled
- Allow users to belong to multiple organizations
  - [ ] Enabled

</details>

## Administrator tasks

{{% alert title="Note" color="primary" %}}

- このセクション内のすべての項目には、Zendesk への `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### Creating an end-user

{{% alert title="Warning" color="warning" %}}

- これを手動で行う必要があることは極めてまれです。これを行う理由を慎重に検討し、すべてのドキュメントを確認して、代替プロセスを使用すべきかどうかを判断してください。
- 私たちはエンドユーザーの `Access` 設定（つまり、自分自身のチケット以外を閲覧する権限）を変更しません。エンドユーザーが組織のチケットを閲覧したい場合は、[Shared Organization の設定](/handbook/security/customer-support-operations/zendesk/organizations/shared-orgs)を使用する必要があります。

{{% /alert %}}

Zendesk でエンドユーザーを作成するには:

1. （管理パネルにいないときに）ページ左上の `+ Add` にカーソルを合わせます
1. `User` をクリックします
1. `Name` を入力します
1. `Email` を入力します
1. `User type` が `End user` になっていることを確認します
1. `Add` をクリックします

### Editing an end-user

{{% alert title="Warning" color="warning" %}}

- 組織関連付けに関する情報については、[組織関連付けのドキュメント](/handbook/security/customer-support-operations/zendesk/organizations/association)を参照してください。

{{% /alert %}}

デフォルトでは、私たちはエンドユーザーを編集しません。代わりに、サポートポータル自体を使って自分で編集することを推奨しています:

- [Zendesk Global のエンドユーザー向け](https://support.gitlab.com/hc/en-us/articles/11626501035292-Support-Portal-User-Guide#account-management)
- [Zendesk US Government のエンドユーザー向け](https://federal-support.gitlab.com/hc/en-us/articles/22616053222292-Support-Portal-User-Guide#account-management)

ただし、私たちがエンドユーザーを編集する非常に特定の状況もあります。

#### Resending confirmation email

{{% alert title="Warning" color="warning" %}}

- これは未確認のメールアドレスに対してのみ実行できます。一度確認されると、そのアドレスに確認メールを再送することはできません。

{{% /alert %}}

ユーザーが未確認のエンドユーザーアカウント（つまりアカウントのメールアドレスをまだ確認していない）で確認メールの再送を必要とする場合、次の手順で再送できます:

1. Zendesk のエンドユーザーのページに移動します
1. 確認メールを再送する必要のあるメールアドレスの横にあるドロップダウンキャレットをクリックします
1. `Resend verification email` をクリックします

#### Sending a password reset email

エンドユーザーにパスワードリセットメールを送信するには:

1. Zendesk のエンドユーザーのページに移動します
1. `Security settings` タブをクリックします
1. `Reset` リンクをクリックします
1. 使用するブランドを選択します
   - Zendesk Global の場合: `GitLab Support`
   - Zendesk US Government の場合: `GitLab`
1. `Reset password` をクリックします

#### Adding or removing a secondary email

{{% alert title="Warning" color="warning" %}}

- そのメールアドレスが別のアカウントで使用されている場合は実行できません

{{% /alert %}}

エンドユーザーにセカンダリメールを追加するには:

1. Zendesk のエンドユーザーのページに移動します
1. ページ左側（`Primary email` 属性の下）の `+ add contact` をクリックします
1. `Email` をクリックします
1. セカンダリメールアドレスを入力します（そして Enter/Return を押します）

#### Setting a secondary email as the primary

Zendesk でセカンダリメールアドレスをプライマリメールに設定するには:

1. Zendesk のエンドユーザーのページに移動します
1. プライマリにしたいメールアドレスの横にあるドロップダウンキャレットをクリックします
1. `Make primary contact` をクリックします

#### Managing the user note

エンドユーザーのユーザーノート（または詳細）を変更するには:

1. Zendesk のエンドユーザーのページに移動します
1. 変更したいテキストエリア（`Notes` または `Details`）をクリックします
1. 必要に応じてテキストを変更します
1. テキストエリアの外側のどこかをクリックします

### Suspending an end-user

ユーザーを停止するには:

1. Zendesk のエンドユーザーのページに移動します
1. ユーザーのページの `+ New ticket` の右にあるドロップダウンキャレットをクリックします
1. `Suspend` をクリックします
1. 理由が `Other reason` になっていることを確認します
1. `Additional comment` が空欄になっていることを確認します
1. `Suspend user` をクリックします

### Deleting an end-user

エンドユーザーの削除は、主に 3 つの異なるソースから発生します。

#### By end-user request

これは、エンドユーザーがサポートポータルアカウントの削除を求めるチケットを私たちに起票したときに発生します。これに対するプロセスは次のとおりです:

1. チケット内でエンドユーザーにマクロ `Support::Support-Ops::Confirm Deletion` を送信します
1. エンドユーザーが削除を確認する返信をした場合、チケット内でエンドユーザーにマクロ `Support::Support-Ops::Deletion Forthcoming` を送信します
1. Zendesk のエンドユーザーのページに移動します
1. ユーザーのページの `+ New ticket` の右にあるドロップダウンキャレットをクリックします
1. `Delete` をクリックします
1. 表示されるポップアップで `Confirm` をクリックします

#### By data-privacy request

これは（Transcend を介して）ユーザーがデータプライバシーの削除を要求したときに発生します。実行するようシステムから ping が届くはずです。まず Zendesk にユーザーが存在するかどうかを確認します。存在する場合は、次の手順でエンドユーザーを削除すべきです:

1. Zendesk のエンドユーザーのページに移動します
1. ユーザーのページの `+ New ticket` の右にあるドロップダウンキャレットをクリックします
1. `Delete` をクリックします
1. 表示されるポップアップで `Confirm` をクリックします

#### By scheduled deletion

ユーザー削除の詳細については、[自動ユーザー削除](/handbook/security/customer-support-operations/zendesk/users/automated-user-deletion)のドキュメントを参照してください。

### Compliance level deletion

コンプライアンスレベルの削除の詳細については、[自動ユーザー削除](/handbook/security/customer-support-operations/zendesk/users/automated-user-deletion)のドキュメントを参照してください。

### Banning an end-user

{{% alert title="Danger" color="danger" %}}

- これは多くの場合、複数のチームを巻き込む必要のある深刻な事柄です。ユーザーをサポートポータル以外からも BAN する必要があるかどうかを確認し、必要に応じて関連チーム（security、legal、fulfillment、billing など）と連携してください。

{{% /alert %}}

エンドユーザーを BAN する必要がある場合（さまざまな理由がありますが、特に不正行為による場合）、誰かがこの件について #support_operations チャンネルに投稿します。

投稿に応答し、その人にダイレクトメッセージを送って詳細を入手します。

すべての詳細を入手したら、次のことを行います:

1. クローズされていないチケットをすべてクローズします（必要な場合）
   - Zendesk Global の場合（`TICKET_ID` をチケットの ID に、`API_TOKEN` をあなたの API トークンに置き換えます）:

   ```bash
   curl -ss -X PUT https://gitlab.zendesk.com/api/v2/tickets/TICKET_ID \
     -H "Content-Type: application/json" \
     -d '{"ticket": {"status": "closed"}}' \
     -u support-ops@gitlab.com/token:API_TOKEN
   ```

   - Zendesk US Government の場合（`TICKET_ID` をチケットの ID に、`API_TOKEN` をあなたの API トークンに置き換えます）:

   ```bash
   curl -ss -X PUT https://gitlab-federal-support.zendesk.com/api/v2/tickets/TICKET_ID \
     -H "Content-Type: application/json" \
     -d '{"ticket": {"status": "closed"}}' \
     -u supportops@gitlab.com/token:API_TOKEN
   ```

1. [エンドユーザーのノートを変更](#managing-the-user-note)して、BAN に関する情報（BAN される旨の記述、理由、詳細が必要な場合の連絡先）を追加します。次のような内容がうまく機能します:
   > This user has been banned from the support portal as of YYYY-MM-DD by request of TEAM_NAME team.
   >
   > This was due to REASON.
   >
   > If more details are needed, please reach out to the Customer Support Operations team via the #support_operations Slack channel.
   - 置き換える内容:
     - `YYYY-MM-DD` を現在の日付（ISO 形式）に
     - `TEAM_NAME` を BAN を要求したチームの名前に（例: Support、Security、Legal など）
     - `REASON` を理由に（関連するチケットが理由の一部である場合は、メッセージにそれが含まれていることを確認してください）
1. [ユーザーを停止します](#suspending-an-end-user)
1. [システムのエンドユーザー設定を変更](#modifying-system-end-user-settings)します。具体的には、`Blocklist` 設定に `reject:EMAIL_ADDRESS` を追加します（`EMAIL_ADDRESS` をエンドユーザーのメールアドレスに置き換えます）。

すべて完了したら、元のリクエスト投稿でエンドユーザーが BAN されたことを確認します。

### Unbanning an end-user

これが発生することは非常にまれであり、おそらく非常にカスタムなプロセスが必要になります。この状況は Fullstack Engineer に照会して調査してもらってください。

### Modifying system end-user settings

{{% alert title="Danger" color="danger" %}}

- これはサポートポータルの使いやすさに大きく影響する可能性があるため、実行時には細心の注意を払ってください。
- これは次の 2 つのシナリオでのみ行うべきです:
  - [エンドユーザーの BAN](#banning-an-end-user)
  - 対応するリクエスト issue（Feature Request、Administrative、Bug など）がある
- システムのエンドユーザー設定を変更した場合は、必ずこのページの [Current system end-user settings](#current-system-end-user-settings) を更新してください

{{% /alert %}}

システムのエンドユーザー設定を変更するには:

1. 対象の Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Configuration > End users` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/configuration/settings)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/configuration/settings)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/configuration/settings)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/configuration/settings)
1. 変更したい設定に変更を加えます
1. ページ右下の `Save tab` をクリックします

## Common issues and troubleshooting

これは、必要に応じて項目が追加されていく生きたセクションです。
