---
title: アクセスリクエスト（AR）
controlled_document: true
tags:
  - security_standard
  - security_standard_acia
upstream_path: /handbook/security/corporate/end-user-services/access-requests/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-19T12:25:32-08:00"
---

{{< label name="Visibility: Audit" color="#E24329" >}}

アクセスリクエストは IT チームが所有し、オンボーディング、オフボーディング、内部異動リクエストは People Operations チームが所有します。

アクセスリクエストに関する質問がある場合は、Slack の #it_help またはツールのプロビジョナーにお問い合わせください。

## アクセスリクエストに関連するページ

- [よくある質問](/handbook/security/corporate/end-user-services/access-requests/#application-specific-templates)
- [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
- [Baseline Entitlements](https://internal.gitlab.com/handbook/security/corporate/end-user-services/access-request/baseline-entitlements/)
- [Temporary service providers access requests and onboarding](https://internal.gitlab.com/handbook/security/corporate/end-user-services/access-request/temporary-service-providers/)

## はじめに

すべてのオープンおよびクローズ済みの AR は [access-requests project](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/) で確認でき、新しい Issue は [こちら](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) から作成できます。

新しい AR を作成すると、リクエストを満たすために必要な追加情報や追加の承認が必要かを正確に判断するため、さまざまなテンプレートから選択するオプションが与えられます。
**各 Issue タイプに必要なすべてのラベルを追加するよう努めましたが、見落としがあるかもしれませんので、送信前にリクエストを再確認してください。**

利用可能なテンプレートは多数ありますが、通常以下のいずれかのカテゴリに該当します。

*利用可能なすべてのテンプレートの完全なリストは [こちら](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/tree/master/.gitlab/issue_templates) で確認できます*

### 個別または一括アクセスリクエスト

[個別または一括アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Individual_Bulk_Access_Request) は、他のテンプレートが希望するものと一致しない場合に使用してください。

このテンプレートは、すべての人が同じシステムへのアクセスをリクエストする限り、個人または複数人のアクセスをリクエストするのに使用できます。複数人が異なるシステムへのアクセスを必要とする場合は、複数の Issue を作成してください。

### アクセス変更リクエスト

[アクセス変更リクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Access_Change_Request) は、チームメンバーが現在プロビジョニング済みのシステムへのアクセスを必要としなくなった場合や、同じレベルのアクセスを必要としなくなった場合（管理者からユーザーへのアクセスダウングレードなど）に記録されます。
追加情報については、GitLab ハンドブックの [`For Total Rewards Analysts: Processing Promotions & Compensation Changes`](/handbook/people-group/promotions-transfers/) セクションを参照してください。

Okta にプロビジョニング／プロビジョニング解除の自動化が導入されているものの、これがアクセスのプロビジョニングおよびプロビジョニング解除の完全／正確な反映ではないことに注意することが重要です。
Okta は、ユーザーの役割／グループに基づいて統合／実装されたアプリケーションを割り当てるように構成されています。
これにより、Okta 経由でアプリケーションにアクセスできるようになりますが、ユーザーは依然としてシステムに直接アクセスできる可能性があります。
Okta で設定されたアプリケーションのリストは [Okta Application Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) を参照してください。

### アプリケーション固有のテンプレート

これらの Issue は、特定のアプリケーションおよびサービス内またはそれらへのアクセスに関連します。たとえば、[1Password Request Form](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=1Password_Request) を使用して既存のボルトやグループを変更したり、新しいものを作成したりできます。

### 管理者（Black）アカウント

私たちは Okta、1Password、Google Workspace などのさまざまなコアサービスへの管理者アクセスのプロビジョニングをサポートしています。このプロセスは、通常、まず新しいメールアドレスでの [管理者アカウントの作成](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Creation) のリクエストから始まります。
管理者アカウントが作成されたら、特定のサービスへの管理者アクセスのため、追加の AR を提出する必要があります。

- [管理者（Black）アカウント](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Creation)
- [1Password 管理者](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Role_1Password)
- [AWS 管理者](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Role_AWS)
- [Google Workspace 管理者](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Role_GoogleWorkspace)
- [Okta 管理者](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Admin_Black_Account_Role_Okta)

### 名前変更リクエスト

希望する名前を変更したい場合は、[このテンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/Name_change_request.md) を使用できます。次に、People Ops チームと協力してすべてのシステムであなたの名前を更新し、新しいメールアドレスを提供します。

### Baseline Entitlements

これらの Issue は、新規入社者に適切なアクセスを割り当てるのに役立ちます。これらは多くの役割で自動的に作成され、通常追加の承認は必要ありません。ただし、自動化が Issue を作成しない場合、新規入社者のマネージャーが手動で Issue を作成する責任があります。

Baseline Issue テンプレートのリストは [こちら](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/tree/master/.gitlab/issue_templates/role_baseline_access_request_tasks) で確認でき、自由にカスタマイズできます。

Baseline Entitlement リクエストの作成に関する追加サポートについては、Slack の #it_help にお問い合わせください。

## アクセスリクエストへの取り組み

### 部門アクセスリクエストボード

- 追加のラベルが必要な場合や、完全に自動化できるまでのプロセスの改善提案がある場合は、[Issue を作成](https://gitlab.com/gitlab-com/it/end-user-services/issues/it-help-issue-tracker/-/issues/new) してください。
- AR は可能な限り、部門ごとに自動割り当てと自動ラベル付けが行われます。場合によっては、ツールごとに複数のプロビジョナーがいます。テンプレートが自動割り当てできない場合、Business Technology はプロビジョナーがラベル別に部門の Issue をレビューできるボード（例：`dept::to do`）を提供します。Issue を完了させるために誰が担当するかのワークフロー管理は、部門に委ねられています。
- **Issue を 1 つの列から別の列に移動すると、最初のラベル（列ヘッダーごと）が削除され、2 番目のラベルが追加されます。Issue を列間で移動する際は注意してください。**
- 部門は、以下のボードを表示することで、未解決のアクセスリクエスト Issue を確認できます。

{{% panel header="**AR ボード：to-do：**" header-bg="success" %}}

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

Tech Stack の新しい項目に対してアクセスリクエストプロセスを開始する必要がある場合：

1. ツールが [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) に追加されていることを確認する
1. チームメンバーが `provisioner` `deprovisioner` として含まれていることを確認する
1. 関連するハンドブックページに、アクセスリクエストの提出が必要な要件を文書化する

## 追加のヘルプ

- 特定の SLA はありませんが、Issue で `@gitlab-com/gl-security/corp/helpdesk` をメンションしてください。
- リクエストが緊急の場合、Slack の #it_help チャンネルで `it-help` をメンションし、緊急の理由を記載してください。
