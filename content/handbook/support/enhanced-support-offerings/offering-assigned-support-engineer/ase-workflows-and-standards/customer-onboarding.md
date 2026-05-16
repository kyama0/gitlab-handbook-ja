---
title: ASE アカウントのオンボーディング
description: ASE サービスを新規に利用するアカウントをオンボーディングするためのワークフロー
upstream_path: /handbook/support/enhanced-support-offerings/offering-assigned-support-engineer/ase-workflows-and-standards/customer-onboarding/
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T12:27:22-04:00"
---

## 概要

お客様のアカウントが Assigned Support Engineer (ASE) サービスを含む新規契約を締結すると、サポートチームはお客様のオンボーディングプロセスを開始します。このプロセスを通じて、私たちはお客様とのパートナーシップを開始する際に、円滑でプロフェッショナルな体験を作り、提供することを目指します。これには、お客様およびアカウントチームとの調整、そしてアカウントの新しいステータスについてサポートの他のメンバーへの通知が含まれます。

## お客様とのコミュニケーション

[お客様の ASE として自己紹介を行います](introductory-meeting.html)。

お客様と週次または隔週のいずれかの定例ミーティングのスケジュールについて合意します。ミーティングの目的には、前回のミーティング以降に行った作業のレビューを完了することと、次回のミーティングまでに行う作業内容と相対的な優先順位について合意することを含めるべきです。

## システム構成

### Assigned Support Engineers プロジェクトの README ファイルにアカウントを追加する

[Assigned Support Engineers](https://gitlab.com/gitlab-com/support/assigned-support-engineers) プロジェクトの [README](https://gitlab.com/gitlab-com/support/assigned-support-engineers/-/blob/main/README.md) ファイルには、すべてのアクティブな ASE アカウントとその ASE をリストする Single Source of Truth であるテーブルが含まれています。テーブルには、各アカウントの他の標準情報も含まれます:

1. リンク（Salesforce、Zendesk Org Note）
1. 特記事項
1. Zendesk Org 名
1. Zendesk Account ID
1. Zendesk User (ASE) ID

Zendesk のタイトルが付いたカラムは、誰もが Zendesk で正しいアカウントを見つけるのに役立ちます。

ASE は Salesforce へのアクセス権を持っていないため、必要な詳細を見つけるためにマネージャーと連携してください。その後、新しいアカウントの完全なエントリを README のテーブルに追加する MR を提出します。

#### マネージャー向け手順 {#manager-instructions}

ASE を SFDC Account Team に「Assigned Support Engineer」として追加します。Salesforce のアカウントレコード -> **Account Team** リストに移動します:

1. Add（または Add Default Team / Edit Team を適宜）をクリックします。
1. [ASE Onboarding issue](https://gitlab.com/gitlab-com/support/support-training/-/work_items/new?description_template=ASE-Onboarding) の一部として作成された ASE の Salesforce ユーザーを追加します。
1. Role を `Assigned Support Engineer` に設定します。
1. 変更を保存します。

ASE アカウントごとにこれを繰り返します。これにより、新しいケースが作成されたときに SFDC がそのアカウントの ASE としてあなたを識別できるようになります。

### ASE についてと、チケットの取り扱い方法を記載した Org Note

ASE を持つお客様は、GitLab サポート内外の他のメンバーにとって混乱を招く可能性があります。特定のお客様が ASE を持っていることを彼らはどうやって知るのでしょうか？

これが、チケットの organization note が役立つ理由です。これにより、関心を持つすべての関係者（サポートエンジニア、カスタマーサクセスマネージャー、アカウントエグゼクティブなど）が、何をすべきかの正しいワークフローへ導かれます。

良い organization note は、以下の質問に答えるものです:

- このお客様の Assigned Support Engineer (ASE) は誰ですか？
- ASE はどの地域にいますか？

この情報は、契約および [introductory meeting](./introductory-meeting.html) でのお客様とのディスカッションから得られます。

org note のためのマージリクエストを [Organizations プロジェクト](https://gitlab.com/gitlab-com/support/zendesk-global/organizations) で作成し、レビューのためにマネージャーにアサインしてください。

以下は例です:

```yaml
notes: |
  This organization has an Assigned Support Engineer (ASE).

  Global Support should continue to work this account’s tickets using the org note and ASE documentation for context.

  The ASE will engage based on customer prioritization, current needs, and ticket trends. The ASE is not expected to take every case for the account.

  If the ASE is unavailable, please continue working the ticket and engage the ASE during business hours for clarification or escalation as needed.

  Emergency tickets outside the ASE’s business hours should continue to be handled by the global support on-call rotation. The ASE will follow up during their normal business hours.
```

### 通知アラートのセットアップ

#### Slack webhook を使用して新規ケースメールで Slack 通知を受け取る

前提条件:

- マネージャーが [SFDC Account Team に「Assigned Support Engineer」としてあなたを追加している](#manager-instructions)。
- アカウントの `operationssupport@gitlab.com` からの新規ケースメールを受信している。

Google Apps Script を使用して、新しい Salesforce ケースメールに対する自動 Slack 通知をセットアップできます。これにより、Gmail の受信トレイを常にチェックすることなく、新しいお客様チケットについて把握できます。

[Gmail Slack Warpgate project](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools/gmail-slack-warpgate) の詳細な手順に従ってください。

#### Incident.io を使用して Dedicated インシデントの更新通知を受け取る

注: これは GitLab Dedicated を利用するお客様にのみ適用されます。

[Incident.io](https://app.incident.io) のパーソナルアラートを購読することで、お客様の Dedicated インシデントの更新通知を受け取ることができます。次の手順で設定できます:

1. ユーザープロフィールに移動し、**Incident subscriptions** タブをクリックします。
1. **Subscription destinations** で、Slack やメールなど、希望の通知モードを選択します。
1. **Auto-subscribe** で **Add auto-subscribe rule** をクリックし、**Add condition** をクリックして、**Severity** が少なくとも Severity 2 (High) であることなど、通知の条件を指定します。
   1. お客様の **internal_reference** または **tenant_id** を指定して、お客様に固有のルールを設定します。この情報は、[Dedicated Switchboard](https://console.gitlab-dedicated.com/tenants) でそれぞれ **Internal reference** と **Identifier** から取得できます。
   1. **Create** をクリックしてルールを保存します。

Slack 通知の場合、Slack ユーザー「incident」からのダイレクトメッセージで通知されます。メール通知の場合、メールユーザー「incident.io」から通知されます。

次の画像は設定を示しています。

![Incident.io personal alert configuration](/images/support/incident-io-personal-notifications.png)

### `@dedicated-ase` Slack グループへのアクセスをリクエストする

注: これは GitLab Dedicated のお客様を担当する ASE にのみ適用されます。

アクセスをリクエストするには:

1. [Slack Request テンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Slack_Request) を使用してアクセスリクエストを提出します。
1. **👨‍👩‍👧‍👦 Slack Group** の下に、以下を記載します:
   - **Group handle**: `dedicated-ase`
   - **Members**: あなたの GitLab メールアドレス
   - **Action**: `Update Group`
1. アクセスリクエストに対するマネージャーの承認をリクエストします。
