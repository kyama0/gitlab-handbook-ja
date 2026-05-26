---
title: 'グループ'
description: 'Zendesk グループに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/groups/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
lastmod: "2026-05-26T12:05:00-05:00"
translated_at: "2026-05-26T18:30:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk グループの作成・編集・管理方法を説明します。管理者は [管理者タスク](#administrator-tasks) のセクションを確認してください。

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/groups)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/groups)
- `CustSuppOps Zendesk Test Suite Generator` 有効

{{% /alert %}}

## Understanding groups

### What are Zendesk groups

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408886146842-About-organizations-and-groups#topic_iny_3jg_sz) によると:

> グループは、チームメンバーが共通して持つ基準に基づいてチームメンバーをまとめます。グループにはチームメンバーのみを含めることができ、エンドユーザーを含めることはできません。すべてのエージェントは少なくとも 1 つのグループに割り当てられる必要がありますが、複数のグループのメンバーになることもできます。グループは組織をサポートするために使用できます。1 つのグループをアカウントのデフォルトグループに指定でき、各チームメンバーにデフォルトグループを指定することもできます。新しく作成したすべてのチームメンバーは、デフォルトグループに追加されます。

### How we manage groups

Zendesk は UI 経由でグループを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、設定されたレビュープロセスや、必要に応じたロールバックの実行などが可能になります。

そのため、私たちは同期リポジトリを活用しています。

### How we manage group membership

#### For the Support team

Support チーム内のメンバーのグループメンバーシップは、[Agent sync](/handbook/security/customer-support-operations/zendesk/users/agents) 経由で管理しています。そのため、グループメンバーシップを変更する必要がある場合は、ご自身の YAML ファイルを更新してください。

#### For everyone else

これらの変更はテックスタックプロビジョナーが手動で実行する必要があるため、[Access Request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) を提出してください。

## Creating a group as a non-admin

グループの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要となるため）。

## Editing a group as a non-admin

グループの変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要となるため）。

## Deactivating a group as a non-admin

グループの無効化をリクエストするには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要となるため）。

## Current groups

### Zendesk Global groups

- `Accounts Receivable`
- `Billing`
- `BPO`
- `General`
- `Support AMER`
- `Support APAC`
- `Support EMEA`
- `Support Focus: Authentication and Authorization`
- `Support Focus: CMOC`
- `Support Focus: L&R`
- `Support Focus: Secure`
- `Support Managers`
- `Support Ops`

### Zendesk US Government groups

- `General`
- `Security`
- `Support 1st Shift`
- `Support 2nd Shift`
- `Support 3rd Shift`
- `Support Managers`
- `Support Operations`
- `Support`

## Administrator tasks

{{% alert title="Note" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### Viewing groups

Zendesk でグループを表示するには:

1. 該当する Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Team > Groups` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/team/groups)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/team/groups)

グループのメンバーシップを確認する必要がある場合は、グループの名前をクリックできます。

### Creating a group

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。
- Agent sync も編集する必要があるかもしれないことに留意してください

{{% /alert %}}

グループを作成するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。使用できる開始テンプレートは次のとおりです:

```yaml
---
name: 'Your group name here'
previous_name: 'Your group name here'
description: 'Your description here'
default: false # If the group is the default one for the account
deleted: false # Deleted groups get marked as such
is_public: true # If true, the group is public. If false, the group is private. You can't change a private group to a public group
```

ピアレビューで承認された後、MR をマージできます。次のデプロイが発生したときに、Zendesk へ同期されます。

### Editing a group

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。
- Agent sync も編集する必要があるかもしれないことに留意してください

{{% /alert %}}

グループを編集する（つまり、その名前や説明を変更する）には、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。

ピアレビューで承認された後、MR をマージできます。次のデプロイが発生したときに、Zendesk へ同期されます。

#### Changing the name of a group

グループのタイトルを変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから `name` 属性を変更します。これにより、同期処理が更新対象のグループを引き続き特定できるようになります。

### Deleting a group

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。
- Agent sync も編集する必要があるかもしれないことに留意してください

{{% /alert %}}

同期リポジトリは削除を実行しないため、グループを削除するには 2 つのアクションを行う必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアレビューで承認された後、MR をマージできます。

それが完了したら、次に Zendesk 自体からそれを削除する必要があります。

Zendesk からグループを削除するには:

1. 該当する Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Team > Groups` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/team/groups)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/team/groups)
1. メンバーを削除したいグループの名前をクリックします
1. ページ上部の `Actions` ボタンをクリックします
1. `Delete group` をクリックします
1. `Delete` をクリックして変更を確定します

### Adding a non-support person to a group

Agent sync で管理されていない人物をグループに追加するには:

1. 該当する Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Team > Groups` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/team/groups)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/team/groups)
1. 人物を追加したいグループの名前をクリックします
1. 右端の検索を使用して人物を探します（メールアドレスで検索するのが最適です）
1. 人物の情報の右側にある `+` アイコンをクリックします
1. ページ右下の `Save` アイコンをクリックします。

### Removing a non-support person from a group

Agent sync で管理されていない人物をグループから削除するには:

1. 該当する Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Team > Groups` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/team/groups)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/team/groups)
1. 人物を削除したいグループの名前をクリックします
1. `Group members` セクションの下にある検索を使用して人物を探します（メールアドレスで検索するのが最適です）
1. 人物の情報の右側にあるゴミ箱アイコンをクリックします
1. ページ右下の `Save` アイコンをクリックします。

### Performing an exception deployment

グループの例外デプロイを実行するには、該当するグループの同期プロジェクトに移動し、スケジュールされたパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、グループの同期ジョブがトリガーされます。

## Common issues and troubleshooting

### Not seeing group changes after a merge

グループは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行されたとき）にのみデプロイされます。
