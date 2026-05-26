---
title: '管理権限グループ'
description: 'Zendesk の管理権限グループに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/knowledge-center/management-permissions-groups/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
lastmod: "2026-05-26T12:05:00-05:00"
translated_at: "2026-05-26T12:00:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk ヘルプセンターの管理権限グループの作成、編集、管理方法について説明します。管理者は [管理者向けタスク](#administrator-tasks) のセクションを確認してください。

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/help-center-management-permissions-groups)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/help-center-management-permissions-groups)
- `CustSuppOps Zendesk Test Suite Generator` 有効

{{% /alert %}}

注: これは [ユーザーセグメント](/handbook/security/customer-support-operations/zendesk/knowledge-center/user-segments) と密接に関連しています。

## 管理権限グループを理解する

### 管理権限グループとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408827952538-Creating-management-permissions-to-define-agent-editing-and-publishing-rights) によると:

> 管理権限は、エージェントの編集および公開の権限を定義します。記事に管理権限を適用することで、その記事に対するエージェントの編集および公開アクセスを決定します。

### 管理権限グループの管理方法

Zendesk は UI を通じて管理権限グループを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバックの実行などが可能になります。

そのため、私たちは同期リポジトリを利用しています。

### 権限タイプ

- **Edit**: 記事のドラフトを作成・編集できるユーザーセグメント
- **Publish**: 記事を公開（ライブにする）できるユーザーセグメント

通常、品質管理のために、より広範なグループが編集アクセスを持ち、より小規模なグループが公開アクセスを持ちます。

## 非管理者として管理権限グループを作成する

管理権限グループの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 非管理者として管理権限グループを編集する

管理権限グループの変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 非管理者として管理権限グループを削除する

管理権限グループの無効化をリクエストするには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 現在の管理権限グループ

### Zendesk Global

| Permission group | Edit permissions | Publish permissions |
|------------------|------------------|---------------------|
| Administrators | Admins | Admins |
| Support Team | Admins, Support Editors | Admins, Support Publishers |

### Zendesk US Government

| Permission group | Edit permissions | Publish permissions |
|------------------|------------------|---------------------|
| Administrators | Admins | Admins |
| Support Team | Admins, Support Editors | Admins, Support Publishers |

## 管理者向けタスク

{{% alert title="Note" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセスを必要とします。

{{% /alert %}}

### 管理権限グループを表示する

Zendesk で現在の管理権限グループを確認するには:

1. [ナレッジセンターにアクセス](../knowledge-center/#accessing-the-knowledge-center) します。
1. 左側の `User permissions content` アイコンをクリックします:
   - プライマリブランドの場合:
     - [Zendesk Global (production)](https://gitlab.zendesk.com/knowledge/user_segments/page/1?brand_id=3252896)
     - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/knowledge/user_segments/page/1?brand_id=12510498177436)
     - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/knowledge/user_segments/page/1?brand_id=360002482351)
     - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/user_segments/page/1?brand_id=360003799392)
   - 内部ブランドの場合:
     - [Zendesk Global (production)](https://gitlab.zendesk.com/knowledge/user_segments/page/1?brand_id=22781249167132)
     - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/knowledge/user_segments/page/1?brand_id=22687153149724)
     - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/knowledge/user_segments/page/1?brand_id=41824350085780)
     - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/user_segments/page/1?brand_id=41389709130900)
1. 左側の `Management permissions` をクリックします:
   - プライマリブランドの場合:
     - [Zendesk Global (production)](https://gitlab.zendesk.com/knowledge/permissions/?brand_id=3252896)
     - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/knowledge/permissions/?brand_id=12510498177436)
     - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/knowledge/permissions/?brand_id=360002482351)
     - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/permissions/?brand_id=360003799392)
   - 内部ブランドの場合:
     - [Zendesk Global (production)](https://gitlab.zendesk.com/knowledge/permissions/?brand_id=22781249167132)
     - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/knowledge/permissions/?brand_id=22687153149724)
     - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/knowledge/permissions/?brand_id=41824350085780)
     - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/permissions/?brand_id=41389709130900)

### 管理権限グループを作成する

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして作業を始める前に標準プロセスを通してください）。

{{% /alert %}}

管理権限グループを作成するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。出発点として使用できるテンプレートは次のとおりです:

```yaml
---
name: 'Your name here'
previous_name: 'Your name here'
edit:
- User Segment Name 1
- User Segment Name 2
publish:
- User Segment Name 1
- User Segment Name 2
- User Segment Name 3
```

**注:** `edit` および `publish` 属性はユーザーセグメント名を使用します。利用可能なユーザーセグメントを確認するには、[ユーザーセグメントのドキュメント](/handbook/security/customer-support-operations/zendesk/knowledge-center/user-segments) を参照してください。

ピアがあなたの MR をレビューして承認したら、MR をマージできます。次のデプロイが行われると、Zendesk に同期されます。

### 管理権限グループを編集する

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして作業を始める前に標準プロセスを通してください）。

{{% /alert %}}

管理権限グループを編集するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。

ピアがあなたの MR をレビューして承認したら、MR をマージできます。次のデプロイが行われると、Zendesk に同期されます。

#### 管理権限グループの名前を変更する

管理権限グループのタイトルを変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから `name` 属性を変更します。これにより、同期が更新対象の管理権限グループを引き続き特定できるようになります。

### 管理権限グループを削除する

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして作業を始める前に標準プロセスを通してください）。
- これは他のチームの記事管理能力に大きな影響を与える可能性があります。進める際は注意してください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、グループを削除するには 2 つのアクションを行う必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアがあなたの MR をレビューして承認したら、MR をマージできます。

それが完了したら、次に Zendesk 自体から削除する必要があります。

Zendesk から管理権限グループを削除するには:

1. [管理権限グループのページ](#viewing-management-permission-groups) に移動します。
1. 削除したい管理権限グループの名前の右側にある縦 3 点のドットをクリックします。
1. `Delete` をクリックします。

**注**: 確認は求められないため、注意してください。

### 例外デプロイを実行する

管理権限グループの例外デプロイを実行するには、該当する管理権限グループの同期プロジェクトに移動し、スケジュール済みパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、管理権限グループの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後に管理権限グループの変更が表示されない

管理権限グループは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが行われたとき）にのみデプロイされます。
