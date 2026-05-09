---
title: ASE アカウントのオンボーディング
description: ASE サービスを新規に利用するアカウントをオンボーディングするためのワークフロー
upstream_path: /handbook/support/enhanced-support-offerings/offering-assigned-support-engineer/ase-workflows-and-standards/customer-onboarding/
upstream_sha: c1bf211b73eb496a1cb1e97c36f3e2aceeb892ba
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

## 概要

顧客アカウントが Assigned Support Engineer (ASE) サービスを含む新規契約を締結し次第、サポートチームは顧客のオンボーディングプロセスを開始します。このプロセスを通じて、私たちは顧客とのパートナーシップを開始するにあたり、スムーズでプロフェッショナルな体験を作り上げ、提供することを目指します。これには、顧客およびアカウントチームとの調整に加え、サポート全体にそのアカウントの新しいステータスを周知することも含まれます。

## 顧客とのコミュニケーション

[顧客の ASE として自己紹介します](introductory-meeting.html)。

毎週または隔週のいずれかのスケジュールで、定期的なケイデンスコールについて顧客と合意します。コールの目標には、前回のコール以降に行った業務のレビューを完了することと、次回のコールまでに何を、どの相対的優先順位で行うかについて合意することが含まれます。

## システム設定

### Assigned Support Engineers プロジェクト README ファイルへのアカウント追加 {#add-the-account-to-the-assigned-support-engineers-project-readme-file}

[Assigned Support Engineers](https://gitlab.com/gitlab-com/support/assigned-support-engineers) プロジェクトの [README](https://gitlab.com/gitlab-com/support/assigned-support-engineers/-/blob/main/README.md) ファイルには、すべてのアクティブな ASE アカウントとそれを担当する ASE をリストする、Single Source of Truth となるテーブルが含まれています。このテーブルには、各アカウントについて他の標準情報も含まれています。

1. リンク (Salesforce、Zendesk Org Note)
1. Special Notes
1. Zendesk Org Name
1. Zendesk Account ID
1. Zendesk User (ASE) ID

Zendesk のタイトルが付いた列は、Zendesk で正しいアカウントを見つけ、自動チケット割り当て用の Zendesk 設定を管理するうえで全員に役立ちます。

ASE は Salesforce へのアクセス権を持たないため、必要な詳細情報を見つけるためにマネージャーと連携してください。その後、README のテーブルに新規アカウントの完全なエントリを追加するための MR を提出します。

#### マネージャー向けの指示 {#manager-instructions}

正しい Account ID と User ID を取得するには、[Support Super Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) で次のオプションを選択して提供されるガイダンスに従ってください。

   1. `What is this request concerning?` オプションは `Modifications to a Zendesk Global Organization` を選択
   1. `What kind of modification are you looking to make?` は `Set an Assigned Support Engineer for an organization` を選択

`What is the Zendesk organization's ID?` フィールドをクリックし、右側に記載されている手順に従ってください。

次に `What is the Zendesk user ID of the assigned support engineer? (put None to remove the current ASE)` フィールドをクリックし、右側に記載されている手順に従ってください。

ASE を「Assigned Support Engineer」として SFDC Account Team に追加します。Salesforce の Account レコード -> **Account Team** リストに移動します。

1. Add (または適宜 Add Default Team / Edit Team) をクリックします。
1. [ASE Onboarding issue](https://gitlab.com/gitlab-com/support/support-training/-/work_items/new?description_template=ASE-Onboarding) の一環として作成された ASE の Salesforce ユーザーを追加します。
1. Role を `Assigned Support Engineer` に設定します。
1. 変更を保存します。

各 ASE アカウントについてこれを繰り返します。これにより、SFDC は新規 Case が作成されたときにあなたをそのアカウントの ASE として識別できるようになります。

### 顧客のチケットを自動割り当てする

アカウントの連絡先が、緊急ではないすべてのチケットを引き受けることをあなたの最優先事項にしたい場合があるでしょう。そのような期間中は、Zendesk でアカウントのチケットを自動割り当てするよう設定してください。顧客チケットの自動割り当てには 2 つの前提条件があります。

1. Zendesk の組織に指定 ASE が設定されていること
1. Salesforce のサブスクリプションに ASE 関連の `Product Charge` があること

これら両方について、マネージャーに連絡し、以下を依頼してください。

1. [Support Super Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) でリクエストを提出し、次のオプションを選択する:
   1. `What is this request concerning?` オプションは `Modifications to a Zendesk Global Organization` を選択
   1. `What kind of modification are you looking to make?` は `Set an Assigned Support Engineer for an organization` を選択
   正しい組織 ID とユーザー ID は、アカウントのオンボーディング中に [README](https://gitlab.com/gitlab-com/support/assigned-support-engineers/-/blob/main/README.md) ファイル内の[オンボーディング](#add-the-account-to-the-assigned-support-engineers-project-readme-file)に追加されているはずです。まだ行われていない場合は、それらの指示に従ったうえで、自動チケット割り当てのリクエスト提出に戻ってください。

   *NOTE*: このリクエストは自動化されており、ステータスを反映する追跡 Issue を作成します。

1. リストアップされた製品料金について、Zendesk で `Subscription: Support Services - ASE` のチェックボックスがオンになっていることを確認してもらう。オンになっていない場合は、Sales Ops に連絡してサポートを依頼します。

毎週アカウントと業務の優先順位について合意していくなかで、必ずしもアカウントの全チケットを引き受けることが含まれるとは限りません。これが変更されるたびに、以下を忘れないでください。

1. マネージャーに Zendesk での変更を依頼する
1. アカウントの Zendesk [org note](#org-note-mentioning-the-ase-and-how-to-treat-the-ticket) を更新する

### ASE とチケットの取り扱い方を記載した Org Note {#org-note-mentioning-the-ase-and-how-to-treat-the-ticket}

顧客が ASE を持っているということは、GitLab Support 内外の人々にとって混乱を招く可能性があります。特定の顧客に ASE がいることを、彼らはどうやって知るのでしょうか？ ASE が業務時間外や多忙なときに、彼らはこの顧客のチケットをどう扱えばよいでしょうか？ 顧客が緊急チケットを作成した場合はどうなるのでしょうか？

これが、チケットでの組織ノートが有用になる理由です。これは上記の質問に答え、何をすべきかについての正しいワークフローへすべての関係者（サポートエンジニア、Customer Success Manager、Account Executive など）を導きます。

良い組織ノートは以下の質問に答えます。

- この顧客の Assigned Support Engineer (ASE) は誰か？
- ASE がいるリージョンはどこか？
- ASE の業務時間外に来たチケットはどう扱うか？
- ASE が対応できないとき、サポートエンジニアはこの顧客のチケットをどうすべきか？
- この ASE 導入以前のチケットはどう扱うか？
- 顧客が緊急チケットを提出した場合はどうするか？

これらの情報は、契約および顧客との[紹介ミーティング](./introductory-meeting.html)での議論から得られます。

[Organizations プロジェクト](https://gitlab.com/gitlab-com/support/zendesk-global/organizations)で org note のマージリクエストを作成し、レビューのためにマネージャーにアサインしてください。

例を以下に示します。

```yaml
notes: |
  This organization has an Assigned Support Engineer (ASE).

  Global Support should continue to work this account’s tickets using the org note and ASE documentation for context.

  The ASE will engage based on customer prioritization, current needs, and ticket trends. The ASE is not expected to take every case for the account.

  If the ASE is unavailable, please continue working the ticket and engage the ASE during business hours for clarification or escalation as needed.

  Emergency tickets outside the ASE’s business hours should continue to be handled by the global support on-call rotation. The ASE will follow up during their normal business hours.
```

### 通知アラートのセットアップ

#### Slack webhook を使用して新規 case メールの Slack 通知を受け取る

前提条件:

- マネージャーがあなたを [SFDC Account Team の「Assigned Support Engineer」として追加済み](#manager-instructions)であること。
- アカウントについて `operationssupport@gitlab.com` から新規 case メールを受信していること。

Google Apps Script を使用して、新規 Salesforce case メールに対する自動 Slack 通知を設定できます。これにより、Gmail の受信トレイを常時確認することなく、新規顧客チケットについて把握できます。

[Gmail Slack Warpgate プロジェクト](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools/gmail-slack-warpgate)の詳細な指示に従ってください。

#### Incident.io を使用して Dedicated インシデントの更新通知を受け取る

NOTE: これは GitLab Dedicated を利用している顧客にのみ適用されます。

[Incident.io](https://app.incident.io) のパーソナルアラートを購読することで、担当顧客の Dedicated インシデントの更新通知を受け取れます。以下の手順で設定できます。

1. ユーザープロファイルに移動し、**Incident subscriptions** タブをクリックします。
1. **Subscription destinations** 配下で、Slack やメールなど、希望する通知方法を選択します。
1. **Auto-subscribe** 配下で、**Add auto-subscribe rule** をクリックし、続いて **Add condition** をクリックして、通知の条件を指定します（例: **Severity** is at least Severity 2 (High)）。
   1. 顧客に固有の **internal_reference** または **tenant_id** を指定して、ルールを設定します。これらの情報は [Dedicated Switchboard](https://console.gitlab-dedicated.com/tenants) の **Internal reference** および **Identifier** からそれぞれ取得できます。
   1. **Create** をクリックしてルールを保存します。

Slack 通知の場合、Slack ユーザー「incident」からのダイレクトメッセージで通知されます。メール通知の場合、メールユーザー「incident.io」から通知されます。

下の画像が設定例です。

![Incident.io personal alert configuration](/images/support/incident-io-personal-notifications.png)

### `@dedicated-ase` Slack グループへのアクセスをリクエストする

NOTE: これは GitLab Dedicated 顧客を担当する ASE にのみ適用されます。

アクセスをリクエストするには:

1. [Slack Request テンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Slack_Request)を使用してアクセスリクエストを提出します。
1. **👨‍👩‍👧‍👦 Slack Group** 配下で、以下を指定します。
   - **Group handle**: `dedicated-ase`
   - **Members**: あなたの GitLab メールアドレス
   - **Action**: `Update Group`
1. アクセスリクエストについてマネージャーの承認を依頼します。
