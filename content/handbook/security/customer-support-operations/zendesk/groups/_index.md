---
title: 'グループ'
description: 'Zendesk グループに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/groups/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、GitLab における Zendesk グループの作成、編集、管理方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/groups)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/groups)
- `CustSuppOps Zendesk Test Suite Generator` を有効化

{{% /alert %}}

## グループを理解する

### Zendesk グループとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408886146842-About-organizations-and-groups#topic_iny_3jg_sz) によると:

> グループは、チームメンバーが共通して持つ基準に基づいてチームメンバーをまとめます。グループにはチームメンバーのみを含めることができます。エンドユーザーを含めることはできません。すべてのエージェントは少なくとも 1 つのグループに割り当てる必要がありますが、複数のグループのメンバーになることもできます。グループは組織をサポートするために使用できます。アカウントのデフォルトグループとして 1 つのグループを指定することができ、各チームメンバーのデフォルトグループも指定できます。作成するすべての新しいチームメンバーはデフォルトグループに追加されます。

### 私たちのグループの管理方法

Zendesk は UI を通じてグループを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバック実行などが可能になります。

そのため、私たちは同期リポジトリを利用しています。

### 私たちのグループメンバーシップの管理方法

#### Support チームの場合

Support チーム内のメンバーのグループメンバーシップは、[Agent sync](/handbook/security/customer-support-operations/zendesk/users/agents) を介して管理しています。そのため、グループメンバーシップを変更する必要がある場合は、自分の YAML ファイルを更新してください。

#### それ以外の人の場合

これらは技術スタックのプロビジョナーが手動で変更を実行する必要があるため、[Access Request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) を提出してください。

## 管理者以外の立場でグループを作成する

グループの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者以外の立場でグループを編集する

グループの変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者以外の立場でグループを非アクティブ化する

グループの非アクティブ化を依頼するには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 現在のグループ

### Zendesk Global グループ

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

### Zendesk US Government グループ

- `General`
- `Security`
- `Support 1st Shift`
- `Support 2nd Shift`
- `Support 3rd Shift`
- `Support Managers`
- `Support Operations`
- `Support`

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### グループを表示する

Zendesk のグループを表示するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Team > Groups` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/team/groups)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/team/groups)

グループのメンバーシップを確認する必要がある場合は、グループ名をクリックできます。

### グループを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- Agent sync も編集する必要がある可能性があることに留意してください

{{% /alert %}}

グループを作成するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容は、依頼自体に依存します。利用可能な開始テンプレートは以下のとおりです:

```yaml
---
name: 'Your group name here'
previous_name: 'Your group name here'
description: 'Your description here'
default: false # If the group is the default one for the account
deleted: false # Deleted groups get marked as such
is_public: true # If true, the group is public. If false, the group is private. You can't change a private group to a public group
```

ピアによるレビューと承認の後、MR をマージできます。次のデプロイメントが行われる際に、Zendesk に同期されます。

### グループを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- Agent sync も編集する必要がある可能性があることに留意してください

{{% /alert %}}

グループを編集する（つまり、その名前や説明を変更する）には、同期リポジトリで MR を作成する必要があります。具体的な変更内容は、依頼自体に依存します。

ピアによるレビューと承認の後、MR をマージできます。次のデプロイメントが行われる際に、Zendesk に同期されます。

#### グループの名前を変更する

グループのタイトルを変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから `name` 属性を変更します。これにより、同期処理が対象のグループを引き続き特定して更新できます。

### グループを削除する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- Agent sync も編集する必要がある可能性があることに留意してください

{{% /alert %}}

同期リポジトリは削除を実行しないため、グループを削除するには 2 つのアクションを実行する必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアによるレビューと承認の後、MR をマージできます。

それが完了したら、次に Zendesk 自体から削除する必要があります。

Zendesk からグループを削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
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
1. `Delete` をクリックして変更を確認します

### サポート以外の人をグループに追加する

Agent sync で管理されていない人をグループに追加するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Team > Groups` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/team/groups)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/team/groups)
1. 人を追加したいグループの名前をクリックします
1. 右端の検索を使ってその人を見つけます（メールアドレスでの検索が最適です）
1. 人の情報の右側にある `+` アイコンをクリックします
1. ページの右下にある `Save` アイコンをクリックします。

### サポート以外の人をグループから削除する

Agent sync で管理されていない人をグループから削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Team > Groups` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/team/groups)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/team/groups)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/team/groups)
1. 人を削除したいグループの名前をクリックします
1. `Group members` セクションの下の検索を使ってその人を見つけます（メールアドレスでの検索が最適です）
1. 人の情報の右側にあるゴミ箱アイコンをクリックします
1. ページの右下にある `Save` アイコンをクリックします。

### 例外デプロイメントを実行する

グループの例外デプロイメントを実行するには、対象のグループ同期プロジェクトに移動し、スケジュールパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、グループの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にグループの変更が反映されない

グループは `Standard` デプロイメントタイプに従うため、通常のデプロイメントサイクル（または例外デプロイメントが行われたとき）にのみデプロイされます。
