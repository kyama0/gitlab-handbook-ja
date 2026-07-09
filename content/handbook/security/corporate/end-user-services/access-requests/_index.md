---
title: アクセスリクエスト（AR）
controlled_document: true
tags:
  - security_standard
  - security_standard_acia
upstream_path: /handbook/security/corporate/end-user-services/access-requests/
upstream_sha: 82fbf0e2626c904de9d6bd562ea4359a0c7e8ab2
translated_at: "2026-07-09T10:06:13+09:00"
translator: claude
stale: false
lastmod: "2026-07-08T11:09:01-04:00"
---

{{< label name="Visibility: Audit" color="#E24329" >}}

アクセスリクエストは IT チームが所有し、オンボーディング、オフボーディング、内部異動リクエストは People Operations Team が所有します。

アクセスリクエストに関する質問がある場合は、Slack の Compass app（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com から私たちにお問い合わせください。

## アクセスリクエストに関連するページ

- [よくある質問](/handbook/security/corporate/end-user-services/access-requests/#application-specific-templates)
- [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
- [Baseline Entitlements](https://internal.gitlab.com/handbook/security/corporate/end-user-services/access-request/baseline-entitlements/)
- [Temporary service providers access requests and onboarding](https://internal.gitlab.com/handbook/security/corporate/end-user-services/access-request/temporary-service-providers/)

## はじめに

オープン中およびクローズ済みのすべての AR は [access-requests project](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/) で確認でき、新しい Issue は [こちら](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) から作成できます。

新しい AR を作成する際には、リクエストを満たすためにどの追加情報が必要か、追加の承認が必要かを正確に把握できるよう、さまざまなテンプレートから選択するオプションが提示されます。
**各 Issue タイプに必要なすべてのラベルを追加するようにしましたが、見落としがある可能性もあるため、送信前にリクエストを必ず再確認してください。**

利用可能なテンプレートは多数ありますが、通常は以下のカテゴリのいずれかに分類されます。

*利用可能なすべてのテンプレートの完全なリストは [こちら](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/tree/master/.gitlab/issue_templates) にあります*

### 個別または一括アクセスリクエスト

[個別または一括アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Individual_Bulk_Access_Request) は、探している内容に他のテンプレートが一致しない場合に使用してください。

このテンプレートは、すべての人が同じシステムへのアクセスをリクエストしている限り、個人または複数人のアクセスをリクエストするために使用できます。複数人が異なるシステムへのアクセスを必要とする場合は、複数の Issue を作成してください。

### アクセス変更リクエスト

[アクセス変更リクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Access_Change_Request) は、チームメンバーが現在プロビジョニングされているシステムへのアクセスを必要としなくなった場合、または同じレベルのアクセスを必要としなくなった場合（管理者からユーザーへのアクセス降格など）に記録されます。
追加情報については、GitLab ハンドブックの [`For Total Rewards Analysts: Processing Promotions & Compensation Changes`](/handbook/people-group/promotions-transfers/) セクションを参照してください。

Okta にはプロビジョニング／デプロビジョニングの自動化が導入されていますが、これはアクセスのプロビジョニングおよびデプロビジョニングを完全かつ正確に反映するものではない点に注意することが重要です。
Okta は、ユーザーのロール／グループに基づいて統合済み／実装済みのアプリケーションを割り当てるよう構成されています。
これにより、アプリケーションは Okta 経由でアクセス可能になりますが、ユーザーがシステムに直接アクセスできる可能性は残ります。
Okta に設定されているアプリケーションの一覧については、[Okta Application Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) を参照してください。

### アプリケーション固有のテンプレート

これらの Issue は、特定のアプリケーションおよびサービスへのアクセス、またはその内部でのアクセスに関連します。たとえば、[1Password Request Form](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=1Password_Request) を使用して既存のボルトやグループを変更したり、新しいボルトやグループを作成したりできます。

### 管理者（Black）アカウント

私たちは Okta、1Password、Google Workspace など、さまざまなコアサービスへの管理者アクセスのプロビジョニングをサポートしています。このプロセスでは通常、まず新しいメールアドレスで[管理者アカウントの作成](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Creation)をリクエストします。
管理者アカウントが作成されたら、特定のサービスへの管理者アクセスについて追加の AR を提出する必要があります。

- [管理者（Black）アカウント](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Creation)
- [1Password 管理者](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Role_1Password)
- [AWS 管理者](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Role_AWS)
- [Google Workspace 管理者](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Role_GoogleWorkspace)
- [Okta 管理者](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Role_Okta)

### 名前変更リクエスト

希望する名前を変更したい場合は、[このテンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/Name_change_request.md) を使用できます。その後、私たちは People Ops チームと協力して、すべてのシステムであなたの名前を更新し、新しいメールアドレスを提供します。

### Baseline Entitlements

これらの Issue は、新規入社者に適切なアクセス権を割り当てるのに役立ちます。これらは多くのロールで自動的に作成され、通常は追加の承認を必要としません。ただし、自動化によって Issue が作成されない場合、新規入社者のマネージャーが手動で Issue を作成する責任を負います。

baseline Issue テンプレートの一覧は [こちら](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/tree/master/.gitlab/issue_templates/role_baseline_access_request_tasks) にあり、自由にカスタマイズできます。

Baseline Entitlement Requests の作成時に追加のサポートが必要な場合は、Slack の Compass app（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com から私たちにお問い合わせください。

## アクセスリクエストへの対応

### 部門アクセスリクエストボード

- 完全に自動化できるまでの間に追加ラベルが必要な場合やプロセス改善の提案がある場合は、[Issue を作成](https://gitlab.com/gitlab-com/it/end-user-services/issues/it-help-issue-tracker/-/issues/new) してください。
- AR は可能な場合、部門別に自動割り当ておよび自動ラベル付けされます。場合によっては、1 つのツールに複数のプロビジョナーがいます。テンプレートを自動割り当てできない場合、Business Technology は、プロビジョナーが自部門の Issue をラベル（例: `dept::to do`）別にレビューできるボードを提供します。Issue を完了まで進める担当者のワークフロー管理は、各部門の責任です。
- **Issue を 1 つの列から別の列に移動すると、最初のラベル（列ヘッダーに従う）が削除され、2 つ目のラベルが追加されます。列間で Issue を移動する際は注意してください。**
- 各部門は、以下のボードを表示して未対応のアクセスリクエスト Issue を確認できます。

{{% panel header="**AR ボード: to-do:**" header-bg="success" %}}

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

## Tech Stack の新しい項目にアクセスリクエストプロセスを追加する

Tech Stack の新しい項目についてアクセスリクエストプロセスを開始する必要がある場合:

1. ツールが [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) に追加されていることを確認する
1. チームメンバーが `provisioner` `deprovisioner` として含まれていることを確認する
1. 関連するハンドブックページに、アクセスリクエスト提出の要件を文書化する

## 追加のヘルプ

- Issue で `@gitlab-com/gl-security/corp/helpdesk` をメンションしてください。特定の SLA はありません。
- リクエストが緊急の場合は、Slack の Compass app（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com から私たちにお問い合わせください。
