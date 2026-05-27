---
title: 'チケット'
description: 'Zendesk のチケットに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/tickets/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
lastmod: 2026-05-26T12:05:00-05:00
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
---

このガイドでは、チケットのステータス、システム設定、よくある Support Operations のワークフローなど、Zendesk でのチケット管理について説明します。

## チケットを理解する

### チケットの作成

従来から、私たちはエンドユーザー自身にチケットを作成してもらうことを望んでいます。それが理想的でない場面では、利用できるオプションがいくつか用意されています。

#### Zendesk Super App 経由

{{% alert title="Note" color="primary" %}}

- このオプションは Customer Support Operations チームまたは Support チームのメンバーのみが利用できます

{{% /alert %}}

既存のユーザーから新しいチケットを作成する必要がある場合に使用します。これには、対応するアプリを使用します。

- Zendesk Global の場合: [Zendesk Super App](/handbook/security/customer-support-operations/zendesk/apps/global#zendesk-super-app)
- Zendesk US Government の場合: [Zendesk Super App](/handbook/security/customer-support-operations/zendesk/apps/us-government#zendesk-super-app)

#### アウトバウンドコミュニケーション用

{{% alert title="Note" color="primary" %}}

- このオプションは次の人のみが利用できます。
  - Customer Support Operations チームのメンバー
  - Support チームのメンバーであり、かつ `Support Staff - CMOC` のエージェントロールを持つ人（Zendesk Global のみ）

{{% /alert %}}

詳細は、Support チームの [Sending Notices documentation](/handbook/support/workflows/sending_notices) を参照してください。

### チケットの閲覧

チケットの閲覧については、以下を参照してください。

- [Views](/handbook/security/customer-support-operations/zendesk/views/)
- [Searching](/handbook/security/customer-support-operations/zendesk/searching/)

### ステータス

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408832151834-Updating-and-solving-tickets#topic_i3y_np1_vt) によると、各ステータスは次のように定義されています。

- New
  - チケットに対してまだ何のアクションも取られていないことを示します。New チケットのステータスが一度変更されると、二度と New に戻すことはできません。
- Open
  - チケットがエージェントによるアクションを待っていることを示します。
- Pending
  - エージェントがリクエスターからの追加情報を待っていることを示します。リクエスターが応答して新しいコメントが追加されると、チケットのステータスは自動的に Open にリセットされます。
- On-hold
  - エージェントがリクエスター以外の誰かからの情報やアクションを待っていることを示します。Pending ステータスと同様に、エージェントである you は他の誰かから追加情報を受け取るまでチケットの解決を進められません。ただし、On-hold はチケットのリクエスターには決して見えない内部ステータスです。チケットが On-hold に設定されている間、リクエスターにはステータスが Open として表示されます。
- Solved
  - エージェントが解決策を提出した、またはエンドユーザーが解決済みとしてマークしたことを示します。Solved チケットは引き続き編集や再オープンが可能です。
- Closed
  - チケットがもう更新を受け付けられない状態にあることを示します。Closed チケットに返信するとフォローアップチケットが開かれ、それには以前のタグがすべて含まれ、以前のチケットへのリンクが付きます。

GitLab では、これらを少し異なる形で定義しています。

- New
  - 新しいチケットです。GitLab がまだ対応していないことを意味します。
- Open
  - チケットが私たちの返信を待っていることを意味します。
- Pending
  - エンドユーザーの返信を待っていることを意味します。これは、ユーザーがチケットに返信してくる（またはチケットが自動的に解決される）場合に限って使うべきです。長期間にわたってチケットを「pending」のような状態に保つ必要がある場合は、On-hold を使ってください。
- On-hold
  - エンドユーザーが私たちを待っているが、私たちは返信を妨げている何かを待っていることを意味します。これは、別の部門や、時間の経過（namesquatting リクエストなど）、あるいは同様の概念に当てはまる何らかの条件など、何かを待っている場面でのみ使うべきです。
- Solved
  - チケットは解決されたが、エンドユーザーが私たちのところに戻ってくる可能性があることを意味します。
- Closed
  - Zendesk が定義しているとおりに使用します。

### 現在のシステムチケット設定

これらの設定は参照用にここに記載しており、めったに変更すべきではありません。

<details>
<summary>Zendesk Global の場合</summary>

- Comments
  - [x] Turn on emoji text replacement
  - [x] Turn on color text
  - [x] Set composed to public channel by default
  - [x] Agent comments via email are public by default
  - [ ] Allow first comment on tickets to be private
  - Render URIs are hyperlinks: `["[]"]`
  - [ ] Make email comments from CCed end users public (not recommended)
- Attachments
  - [x] Customers can attach files
  - [x] Enable secure downloads
- Tags
  - [x] Enable tags on tickets
    - [ ] Enable automatic ticket tagging
- CCs
  - [x] Enable CCs on tickets
    - [ ] Only agents can add CCs
    - [x] Enable CCs for end users on Help Center
    - CC blacklist: `noreply@google.com`
    - CC email subject: `[{{ticket.account}}] Update: {{ticket.title}}`
    - CC email text:

      ```plaintext
      You are registered as a CC on this support request ({{ticket.link}}). Reply to this email to add a comment to the request.

      {{ticket.comments_formatted}}

      ```

- Assignment
  - [x] Auto-assign tickets upon solve
  - [x] Allow re-assignment back to the general group
- Follow-Ups
  - [ ] Copy original assignee and group to follow-up ticket
- Suspended Ticket Notifications
  - `Never` How often you want to receive email about new suspended tickets.
  - Email list:
- Ticket IDs
  - Set the ticket ID counter
    - This value is going to change based on ticket volume. Do not touch it
- Modify closed ticket
  - [ ] Turn on
- Email Archiving
  - Archive email address:
- Transcript visibility
  - How conversation transcript is incrementally appended to the ticket: `As public reply`
- Continuous conversations
  - [ ] Switch messaging conversations to email
- Translations
  - [x] Agents can translate conversations
- Solved Ticket Reassignment
  - [ ]  Turn on solved ticket reassignment
    - [ ] Show solved ticket reassignment
    - Set an account level default for solved ticket reassignment option for newly created groups: `To an admin or longest active team member`
    - [ ] Force all the groups to assume the account level default now
- Agent collaboration for messaging
  - [x]  Multiple agents can collaborate in messaging conversations

</details>
<details>
<summary>Zendesk US Government の場合</summary>

- Comments
  - [x] Turn on emoji text replacement
  - [x] Turn on color text
  - [x] Set composed to public channel by default
  - [x] Agent comments via email are public by default
  - [ ] Allow first comment on tickets to be private
  - Render URIs are hyperlinks: `["[]"]`
  - [ ] Make email comments from CCed end users public (not recommended)
- Attachments
  - [x] Customers can attach files
  - [x] Enable secure downloads
- Tags
  - [x] Enable tags on tickets
    - [ ] Enable automatic ticket tagging
- CCs
  - [x] Enable followers
    - Follower email subject: `{{ticket.title}}`
    - Follower email template:

      ```plaintext
      You are a follower on this request ({{ticket.link}}). {{ticket.follower_reply_type_message}}

      {{ticket.comments_formatted}}
      ```

  - [ ] Enable CCs
  - [ ] Automatically make an agent CC a follower
- Requester
  - [ ] Agents can change requester
- Assignment
  - [x] Auto-assign tickets upon solve
  - [x] Allow re-assignment back to the general group
- Follow-Ups
  - [ ] Copy original assignee and group to follow-up ticket
- Suspended Ticket Notifications
  - `Never` How often you want to receive email about new suspended tickets.
  - Email list:
- Ticket IDs
  - Set the ticket ID counter
    - This value is going to change based on ticket volume. Do not touch it
- Modify closed ticket
  - [ ] Turn on
- Email Archiving
  - Archive email address:
- Transcript visibility
  - How conversation transcript is incrementally appended to the ticket: `As public reply`
- Continuous conversations
  - [ ] Switch messaging conversations to email
- Translations
  - [x] Agents can translate conversations
- Solved Ticket Reassignment
  - [ ]  Turn on solved ticket reassignment
    - [ ] Show solved ticket reassignment
    - Set an account level default for solved ticket reassignment option for newly created groups: `To an admin or longest active team member`
    - [ ] Force all the groups to assume the account level default now
- Agent collaboration for messaging
  - [x]  Multiple agents can collaborate in messaging conversations

</details>

### 現在のチケット共有設定

これらの設定は参照用にここに記載しており、めったに変更すべきではありません。

<details>
<summary>Zendesk Global の場合</summary>

- Sending agreements: 0
- Receiving agreements
  - `Pivotal @ Zendesk` `Public comments allowed. Sync status and share tags` `Accepted`
- Opt out of sharing
  - [ ] Decline all sharing agreement invites

</details>
<details>
<summary>Zendesk US Government の場合</summary>

- Sending agreements: 0
- Receiving agreements: 0
- Opt out of sharing
  - [ ] Decline all sharing agreement invites

</details>

## 管理者タスク

{{% alert title="Note" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### Closed チケットの変更

Zendesk には Closed チケット内の一部の値を更新する機能がありますが、これは私たちが実行するアクションではありません。Zendesk のデータを利用している複数のチームと議論し、Closed チケットの変更が顧客に与える影響をレビューした結果、次の理由に基づいてこの判断を下しました。

- Closed チケットの更新は顧客に悪影響を及ぼす（実行可能な回避策がない）
- Closed チケットの更新は Zendesk Explore のレポート/ダッシュボードに深刻な影響を与え、全面的な再設定が必要になる
- Closed チケットの更新は私たちのデータウェアハウス内のレポートに深刻な影響を与え、全面的な再設定が必要になる
- Closed チケットの更新は私たちのデータウェアハウス内のデータの全面的な再インデックスを必要とする（膨大なリソースを消費し、5 日以上かかる）
- 私たちにはカスタムビュー、カスタムテーブル、AI を使ってデータウェアハウス内で実行できる実行可能な回避策があり、Closed チケットへの更新を行うことで得られると思われるメリットを打ち消している

### システムチケット設定の変更

{{% alert title="Danger" color="danger" %}}

- これを行う際は細心の注意を払ってください。サポートポータルの使い勝手に大きな影響を与える可能性があります。
- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。
- システムチケット設定を変更した場合は、必ずこのページの [現在のシステムチケット設定](#current-system-ticket-settings) を更新してください。

{{% /alert %}}

システムチケット設定を変更するには、次の手順を実行します。

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Tickets > Settings` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/tickets/ticket-settings)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/tickets/ticket-settings)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/tickets/ticket-settings)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/tickets/ticket-settings)
1. 変更したい設定に修正を加えます
1. ページ右下の `Save` をクリックします

### チケット共有設定の変更

{{% alert title="Danger" color="danger" %}}

- これを行う際は細心の注意を払ってください。サポートポータルの使い勝手に大きな影響を与える可能性があります。
- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。
- チケット共有設定を変更した場合は、必ずこのページの [現在のチケット共有設定](#current-ticket-sharing-settings) を更新してください。

{{% /alert %}}

チケット共有設定を変更するには、次の手順を実行します。

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Tickets > Sharing` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/tickets/ticket-sharing)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/tickets/ticket-sharing)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/tickets/ticket-sharing)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/tickets/ticket-sharing)
1. 変更したい設定に修正を加えます
1. ページ右下の `Save tab` をクリックします

## Customer Support Operations のワークフロー

### チケットの対応

{{% alert title="Note" color="primary" %}}

- これは Customer Support Operations チームと、彼らがどのようにチケットに対応するかにのみ関係します。他のチームがチケットにどう対応するかを反映するものではありません。

{{% /alert %}}

#### サポートコンタクトの管理

コンタクト管理に関する Zendesk Global のチケットについては、私たちの [Organization association documentation](/handbook/security/customer-support-operations/zendesk/organizations/association) を参照してください。

コンタクト管理に関する Zendesk US Government のチケットについては、すべてのサポートコンタクトの関連付けは Salesforce アカウントとの同期によって行われます。そのため、ここで私たちが支援することはできません。リクエスターに対して、新しいメールでアカウントマネージャーに連絡するよう指示する必要があります。その際、必ずアカウントマネージャーのメールアドレスを提供してください。

#### 共有 Organization のリクエスト

私たちの [Shared Organization setup documentation](/handbook/security/customer-support-operations/zendesk/organizations/shared-orgs) を参照してください。

#### ポータルの問題

これらはサポートポータル内の問題の報告です。それぞれの問題には固有の課題が生じる可能性がありますが、ユーザー向けの共通のトラブルシューティングガイドは次の場所にあります。

- [Zendesk Global](https://support.gitlab.com/hc/en-us/articles/11626501035292-Support-Portal-User-Guide#support-portal-troubleshooting)
- [Zendesk US Government](https://federal-support.gitlab.com/hc/en-us/articles/22616053222292-Support-Portal-User-Guide#support-portal-troubleshooting)

チケットを受け取った時点で、ユーザーはそれらすべてを実行済みかもしれませんし、そうでないかもしれません。実行していない場合は、まずそれらすべてを試すよう案内してください。

実行済みの場合は、送られてきた詳細を分析して次のステップを判断する必要があります。

#### セカンダリメールの追加リクエスト

ときどき、顧客がサポートポータルアカウントにセカンダリメールを追加したいという問題を提起することがあります。セカンダリメールは、提出されたチケットを特定のアカウントに紐づけるために使われますが、送信者として使われ（したがって通知を受け取る）のはプライマリメールアドレスのみです。

- GitLab.com ユーザーの場合:
  - リクエスターのメールアドレスに関連付けられた GitLab.com アカウントで、セカンダリメールが検証済みとして掲載されている必要があります。これは User Lookup app で確認できます。GitLab.com アカウントにセカンダリメールを追加するには、[このドキュメント](https://docs.gitlab.com/user/profile/#add-emails-to-your-user-profile) に従ってもらえます。
- Self Managed および GitLab Dedicated ユーザーの場合:
  - チケットは、既存のプロファイルに追加したいメールアドレスから提出する必要があります
  - 顧客は、このセカンダリメールアドレスを通じて再度サポート資格の証明を提供する必要があります
  - 顧客は、サポートポータルアカウントのプライマリメールアドレスを CC に入れ、そのメールからチケットに返信して、セカンダリメールアドレスをサポートポータルアカウントに追加するリクエストを確認する必要があります。
- パートナーの場合:
  - Self Managed および GitLab Dedicated ユーザーと同じ手順を使用します

#### 誤ったフォームのチケット

チケットが誤ったフォームを使っている場合、エージェントは `General::Forms::Incorrect form used` マクロを使用します。これにより、フォームが Support Ops に変更され、チケットにタグが付き、内部ノートが残されます。そこから、私たちはチケットをレビューして次のステップを判断することが求められます。

ここでの最終的な目標は、正しいフォームに移動することです。そこに至る道は数多くの要因に左右されますが、一般的には次のとおりです。

- 「有料のみ」のフォームに移動し、ユーザーが関連付けられていない場合:
  - Organization association のプロセスに従ってユーザーを関連付けます
    - 関連付けができない場合、チケットを移動できません
  - チケットの `Assignee` の値を `Support Ops`（グループ）に設定します
    - これによりチケットの割り当てが解除されます。私たちに送られてきた際に追加された内部ノートで別途指示がない限り、常にこれを行うべきです
  - チケットの `Form` の値を新しいフォームに変更します
  - 新しいフォームについて、可能なすべてのチケットメタデータを記入します
    - チケットに `Ticket Stage` フィールドがある場合は、`FRT` に設定します
  - 次のタグを削除します。
    - `base_weight_set`
  - チケットを、私たちに送られてきたときと _同じ状態_ で送信するようにしてください
- 「有料のみ」のフォームに移動し、ユーザーが関連付けられている場合:
  - チケットの `Assignee` の値を `Support Ops`（グループ）に設定します
    - これによりチケットの割り当てが解除されます。私たちに送られてきた際に追加された内部ノートで別途指示がない限り、常にこれを行うべきです
  - チケットの `Form` の値を新しいフォームに変更します
  - 新しいフォームについて、可能なすべてのチケットメタデータを記入します
    - チケットに `Ticket Stage` フィールドがある場合は、`FRT` に設定します
  - チケットを、私たちに送られてきたときと _同じ状態_ で送信するようにしてください
- 誰でも利用できるフォームに移動する場合:
  - チケットの `Assignee` の値を `Support Ops`（グループ）に設定します
    - これによりチケットの割り当てが解除されます。私たちに送られてきた際に追加された内部ノートで別途指示がない限り、常にこれを行うべきです
  - チケットの `Form` の値を新しいフォームに変更します
  - 新しいフォームについて、可能なすべてのチケットメタデータを記入します
    - チケットに `Ticket Stage` フィールドがある場合は、`FRT` に設定します
  - チケットを、私たちに送られてきたときと _同じ状態_ で送信するようにしてください

##### フォームに関する特別な注意

- チケットを `2FA Removal` フォームに移動する場合
  - 削除リクエストがリクエスターとは異なるユーザーに対するものである場合、リクエスターは対象ユーザーのメールアドレスを **必ず** 提供する必要があります。提供していない場合は、リクエスターがその情報を提供する必要がある旨の内部ノートを残してください。その後、チケットを代わりに `SaaS Accounts` フォームに移動します。
- チケットを `L&R` フォームに移動する場合
  - チケットを L&R フォームに移動する際は、最初に正しいサブチームにルーティングされるようにする必要があります。これを行うには、（チケットメタデータの一番下にある）`BPO Ticket` チェックボックスがチェックされていることを確認します。これを怠ると、チケットのルーティングで問題が発生する可能性があります。
- チケットを `Billing` フォームに移動する場合
  - チケットの `Billing/AR Team` 属性が入力されていることを確認する必要があります。どの値を使うか不明な場合は、`Billing` に設定します

#### 悪意のあるユーザーへの対応

{{% alert title="Danger" color="danger" %}}

- 悪意のあるユーザーへの対応には細心の注意を払ってください。疑わしい場合は、ためらわずに私たちのセキュリティチームに助けを求めてください。侵害を引き起こすよりも、助けを求めるほうが **常に** 良いです。

{{% /alert %}}

潜在的な悪意のある行為（ハッキング、フィッシング、不正利用など）を含むチケットが発生した場合、私たちは常にそれを真剣に受け止める必要があります。

徹底的な調査の結果、悪意があると判断された場合は、[ユーザーを BAN します](/handbook/security/customer-support-operations/zendesk/users/end-users#banning-an-end-user)。

疑わしい場合は、その件をマネージャー、Customer Support Operations Fullstack Engineer、および／または GitLab Security チームにエスカレーションしてください。

## よくある問題とトラブルシューティング

これは生きたセクションであり、必要に応じて項目が追加されます。
