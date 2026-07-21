---
title: 'グループ'
description: 'Zendesk グループに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/groups/"
upstream_sha: "db1b52fb5e65d37509c3eaaaebfd50dd491e4b36"
lastmod: "2026-07-21T11:29:58-05:00"
translated_at: "2026-07-22T06:32:52+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk グループの作成、編集、管理方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/groups)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/groups)
- `CustSuppOps Zendesk Test Suite Generator` が有効化されています

{{% /alert %}}

## グループについて

### Zendesk グループとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408886146842-About-organizations-and-groups#topic_iny_3jg_sz)によると、次のとおりです。

> グループは、共通の基準を持つチームメンバーを集めます。グループに含められるのはチームメンバーのみで、エンドユーザーは含められません。すべてのエージェントは少なくとも 1 つのグループに割り当てる必要がありますが、複数のグループのメンバーになることもできます。グループは組織をサポートするために使用できます。アカウントのデフォルトグループを 1 つ指定でき、チームメンバーごとにデフォルトグループを指定することもできます。作成するすべての新しいチームメンバーは、デフォルトグループに追加されます。

### グループの管理方法

Zendesk では UI を通じてグループを完全に管理できますが、私たちはよりバージョン管理された手法を採用しています。これにより、定められたレビュー手順、必要に応じたロールバックの実行などが可能になります。

そのため、同期リポジトリを使用します。

### グループメンバーシップの管理方法

#### Support チーム向け

Support チームのメンバーのグループメンバーシップは、[エージェント同期](/handbook/eta/css/zendesk/users/agents)を通じて管理します。そのため、グループメンバーシップを変更する必要がある場合は、YAML ファイルを更新してください。

#### その他すべての方

これらの変更は技術スタックプロビジョナーが手動で行う必要があるため、[アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new)を作成してください。

## 非管理者としてグループを作成する

グループを作成する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なためです）。

## 非管理者としてグループを編集する

グループを変更する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なためです）。

## 非管理者としてグループを無効化する

グループの無効化をリクエストする場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なためです）。

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

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### グループを表示する

Zendesk でグループを表示するには、次の手順を実行します。

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

- 対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し（標準プロセスを経てから対応してください）。
- エージェント同期も編集する必要がある場合があることに留意してください

{{% /alert %}}

グループを作成するには、同期リポジトリで MR を作成する必要があります。実際の変更内容はリクエスト自体によって異なります。次のテンプレートを出発点として使用できます。

```yaml
---
name: 'Your group name here'
previous_name: 'Your group name here'
description: 'Your description here'
default: false # If the group is the default one for the account
deleted: false # Deleted groups get marked as such
is_public: true # If true, the group is public. If false, the group is private. You can't change a private group to a public group
```

ピアが MR をレビューして承認した後、MR をマージできます。次のデプロイが行われると、Zendesk に同期されます。

### グループを編集する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し（標準プロセスを経てから対応してください）。
- エージェント同期も編集する必要がある場合があることに留意してください

{{% /alert %}}

グループ（名前または説明）を編集するには、同期リポジトリで MR を作成する必要があります。実際の変更内容はリクエスト自体によって異なります。

ピアが MR をレビューして承認した後、MR をマージできます。次のデプロイが行われると、Zendesk に同期されます。

#### グループ名を変更する

グループのタイトルを変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから、`name` 属性を変更します。これにより、同期で更新対象のグループを引き続き特定できます。

### グループを削除する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し（標準プロセスを経てから対応してください）。
- エージェント同期も編集する必要がある場合があることに留意してください

{{% /alert %}}

同期リポジトリは削除を実行しないため、グループを削除するには 2 つのアクションを実行する必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアが MR をレビューして承認した後、MR をマージできます。

その後、Zendesk 自体からも削除する必要があります。

Zendesk からグループを削除するには、次の手順を実行します。

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
1. 削除する対象者をグループから外したいグループの名前をクリックします
1. ページ上部の `Actions` ボタンをクリックします
1. `Delete group` をクリックします
1. 変更を確認するために `Delete` をクリックします

### Support 以外のメンバーをグループに追加する

エージェント同期で管理されていない人をグループに追加するには、次の手順を実行します。

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
1. 追加する人の対象グループ名をクリックします
1. 右端の検索を使用して対象者を見つけます（メールアドレスでの検索が最適です）
1. 対象者の情報の右にある `+` アイコンをクリックします
1. ページ右下の `Save` アイコンをクリックします。

### Support 以外のメンバーをグループから削除する

エージェント同期で管理されていない人をグループから削除するには、次の手順を実行します。

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
1. 対象者をグループから外したいグループの名前をクリックします
1. `Group members` セクションの下の検索を使用して対象者を見つけます（メールアドレスでの検索が最適です）
1. 対象者の情報の右にあるごみ箱アイコンをクリックします
1. ページ右下の `Save` アイコンをクリックします。

### 例外デプロイを実行する

グループの例外デプロイを実行するには、対象のグループ同期プロジェクトに移動し、スケジュールされたパイプラインのページを開いて、同期項目の再生ボタンをクリックします。これにより、グループの同期ジョブがトリガーされます。

## 一般的な問題とトラブルシューティング

### マージ後にグループの変更が表示されない

グループは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行された場合）にのみデプロイされます。
