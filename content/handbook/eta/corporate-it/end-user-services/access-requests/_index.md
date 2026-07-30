---
title: アクセスリクエスト（AR）
controlled_document: true
tags:
  - security_standard
  - security_standard_acia
upstream_path: /handbook/eta/corporate-it/end-user-services/access-requests/
upstream_sha: c75ccd81af7d76262c8cb188bf7e7e2a7f838894
lastmod: 2026-07-30T18:56:53+01:00
translated_at: "2026-07-31T07:54:55+09:00"
translator: codex
stale: false
---

{{< label name="Visibility: Audit" color="#E24329" >}}

Access Requests は IT チームが担当し、オンボーディング、オフボーディング、社内異動のリクエストは People Operations Team が担当します。

アクセスリクエストに関する質問がある場合は、Slack の Compass アプリ（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com からお問い合わせください。

## Lumos でアクセスをリクエストする

現在、ほとんどのアクセスリクエストは Issue を作成するのではなく、[Lumos App Store](https://app.lumosidentity.com/app_store) で行います。Lumos はリクエストを Manager、システム所有者、およびその他の必要な承認者に自動的にルーティングし、自動化がある場合はアプリを自動的にプロビジョニングします。

### アクセスリクエストを作成する

1. Okta タイルまたは Slack サイドバーから Lumos を開きます。
1. リストからアプリを選択します。
1. 次の情報を入力します。
   - アクセスを取得する人
   - 必要な権限
   - アクセス期間
   - ビジネス上の正当性 — アクセスが必要な「理由」

Slack から直接アクセスをリクエストすることもできます。Lumos アプリを見つけて **Request Access** をクリックし、アプリ、権限、対象ユーザーを選択します。すべての承認が完了しアクセスが付与されると、Lumos から通知されます。

### リクエストのステータスを確認する

Lumos Slack アプリの *Messages* タブを開きます。作成したすべてのリクエストがそこに表示され、ステータスの変更に応じて動的に更新されます。

### リクエストを承認する

Slack またはメールで通知を開くか、Okta タイルから Lumos にアクセスして、承認、コメント、または拒否します。Slack の承認画面で **Edit** をクリックすると、承認前にユーザーを追加するグループを変更できます。

まだすべてのアプリケーションが Lumos に含まれているわけではありません。プロビジョニング自動化とリクエスト量が多いアプリを優先し、tech stack をイテレーションごとに移行しています。必要なアプリが表示されない場合は、以下の Issue テンプレートを使用してください。

スクリーンショットと、アプリを Lumos App Store に追加するリクエスト方法を含む完全な手順については、[Lumos Access Request Guide](/handbook/security/corporate/systems/lumos/ar/)を参照してください。

## アクセスリクエストに関連するページ

- [よくある質問](/handbook/eta/corporate-it/end-user-services/access-requests/#application-specific-templates)
- [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
- [Baseline Entitlements](https://internal.gitlab.com/handbook/eta/corporate-it/end-user-services/access-request/baseline-entitlements/)
- [一時的なサービスプロバイダーのアクセスリクエストとオンボーディング](https://internal.gitlab.com/handbook/eta/corporate-it/end-user-services/access-request/temporary-service-providers/)

## はじめに

すべてのオープンおよびクローズ済みの AR は [access-requests project](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/)で確認でき、新しい Issue は[こちら](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new)から作成できます。

新しい AR を作成すると、リクエストを満たすために必要な追加情報と追加承認が必要かどうかを正確に判断するため、さまざまなテンプレートから選択できます。
**Issue タイプごとに必要なラベルをすべて追加したことを確認していますが、見落としがある可能性もあるため、送信前にリクエストを必ず再確認してください**

多数のテンプレートを利用できますが、通常は以下のいずれかのカテゴリに分類されます。

*利用可能なすべてのテンプレートの完全な一覧は[こちら](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/tree/master/.gitlab/issue_templates)で確認できます*

### 個別または一括のアクセスリクエスト

[Individual or Bulk Access Requests](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Individual_Bulk_Access_Request) は、探している内容に他のテンプレートが一致しない場合に使用してください。

このテンプレートは、すべての人が同じシステムへのアクセスをリクエストしている場合に、個人または複数の人へのアクセスをリクエストするために使用できます。複数の人が異なるシステムへのアクセスを必要とする場合は、複数の Issue を作成してください。

### アクセス変更リクエスト

[Access Change Requests](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Access_Change_Request) は、チームメンバーが現在プロビジョニング済みのシステムへのアクセスを必要としなくなった場合、または同じアクセスレベルを必要としなくなった場合（admin から user へのアクセスのダウングレードなど）に記録されます。
追加情報については、GitLab ハンドブックの [`For Total Rewards Analysts: Processing Promotions & Compensation Changes`](/handbook/people-group/promotions-transfers/) セクションを参照してください。

Okta にはプロビジョニング／プロビジョニング解除の自動化がありますが、これはアクセスのプロビジョニングおよびプロビジョニング解除を完全かつ正確に反映するものではないことに注意してください。
Okta は、ユーザーのロール／グループに基づいて統合済み／実装済みのアプリケーションを割り当てるよう設定されています。
これによりアプリケーションには Okta 経由でアクセスできますが、ユーザーはシステムに直接アクセスすることも可能です。
Okta で設定されているアプリケーションの一覧については、[Okta Application Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)を参照してください。

### アプリケーション固有のテンプレート

これらの Issue は、特定のアプリケーションおよびサービスへの、またはそれらに関するアクセスに関連します。たとえば、既存の vault やグループの変更、または新規作成には [1Password Request Form](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=1Password_Request)を使用できます。

### Admin（Black）アカウント

Okta、1Password、Google Workspace など、さまざまなコアサービスへの admin アクセスのプロビジョニングをサポートしています。このプロセスでは通常、まず新しいメールアドレスを使った[admin アカウントの作成](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Creation)をリクエストします。
admin アカウントを作成した後、特定のサービスへの admin アクセスについて追加の AR を送信する必要があります。

- [Admin（Black）Account](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Creation)
- [1Password Admin](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Role_1Password)
- [AWS Admin](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Role_AWS)
- [Google Workspace Admin](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Role_GoogleWorkspace)
- [Okta Admin](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Role_Okta)

### 氏名変更リクエスト

希望する名前を変更したい場合は、[このテンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/Name_change_request.md)を使用できます。その後、People Ops チームと連携してすべてのシステムで名前を更新し、新しいメールアドレスを提供します。

### Baseline Entitlements

これらの Issue は、新規採用者に適切なアクセスを割り当てるために役立ちます。多くのロールで自動的に作成され、通常は追加承認を必要としません。ただし、自動化で Issue が作成されない場合は、新規採用者の Manager が手動で Issue を作成する責任を負います。

baseline Issue テンプレートの一覧は[こちら](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/tree/master/.gitlab/issue_templates/role_baseline_access_request_tasks)で確認でき、自由にカスタマイズできます。

Baseline Entitlement Requests の作成に関する追加サポートについては、Slack の Compass アプリ（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com からお問い合わせください。

## Access Requests に取り組む

### 部門の Access Request ボード

- 完全に自動化できるまでの間に追加のラベルが必要な場合や、プロセス改善の提案がある場合は、[Issue を作成してください](https://gitlab.com/gitlab-com/it/end-user-services/issues/it-help-issue-tracker/-/issues/new)。
- AR は可能な場合に部門別に自動割り当ておよび自動ラベル付けされます。場合によっては、ツールごとに複数の provisioner がいます。テンプレートを自動割り当てできない場合、Business Technology は provisioner がラベルごとに部門の Issue を確認できるボードを提供します（例：`dept::to do`。Issue を完了まで担当する人のワークフロー管理は部門の責任です。
- **Issue をある列から別の列へ移動すると、最初のラベル（列ヘッダーごと）が削除され、2 番目のラベルが追加されます。列間で Issue を移動する際は注意してください。**
- 部門は以下のボードを表示して、未解決のアクセスリクエスト Issue を確認できます。

{{% panel header="**AR boards: to-do:**" header-bg="success" %}}

1. [Data](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319045)
1. [Finance](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319048)
1. [Infra](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1262513)
1. [IT](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1262521)
1. [Legal](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319051)
1. [PeopleOPs](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1318841)
1. [Prod+Eng](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319057)
1. [Marketing](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1284066)
1. [Sales](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1262518)
1. [Security](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319052)
1. [Support](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319053)
{{% /panel %}}

## Tech Stack の新しい項目に Access Request プロセスを追加する

tech stack の新しい項目に対する Access Request プロセスを開始する必要がある場合：

1. ツールが [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)に追加されていることを確認してください。
1. チームメンバーが `provisioner` `deprovisioner` として含まれていることを確認してください。
1. 関連するハンドブックページに Access Request を送信する要件を文書化してください。

## 追加のサポート

- 特定の SLA はありませんが、Issue で `@gitlab-com/gl-security/corp/helpdesk` に @メンションしてください。
- リクエストが緊急の場合は、Slack の Compass アプリ（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com からお問い合わせください。
