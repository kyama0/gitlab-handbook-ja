---
title: '管理権限グループ'
description: 'Zendesk の管理権限グループに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/knowledge-center/management-permissions-groups/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
translated_at: "2026-05-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、GitLab における Zendesk ヘルプセンターの管理権限グループの作成、編集、管理方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/help-center-management-permissions-groups)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/help-center-management-permissions-groups)
- `CustSuppOps Zendesk Test Suite Generator` 有効

{{% /alert %}}

注: これは[ユーザーセグメント](/handbook/security/customer-support-operations/zendesk/knowledge-center/user-segments)と密接に関連しています。

## 管理権限グループを理解する

### 管理権限グループとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408827952538-Creating-management-permissions-to-define-agent-editing-and-publishing-rights) によると:

> 管理権限はエージェントの編集および公開権限を定義します。記事に管理権限を適用することで、その記事に対するエージェントの編集および公開アクセスを決定します。

### 私たちの管理権限グループの管理方法

Zendesk は UI を通じて管理権限グループを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバック実行などが可能になります。

そのため、私たちは同期リポジトリを利用しています。

### 権限の種類

- **編集 (Edit)**: 記事の下書きを作成・編集できるユーザーセグメント
- **公開 (Publish)**: 記事を公開（公開状態にする）できるユーザーセグメント

通常、品質管理のために、より広いグループに編集アクセスを与え、より小さなグループに公開アクセスを与えます。

## 管理者以外の立場で管理権限グループを作成する

管理権限グループの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者以外の立場で管理権限グループを編集する

管理権限グループの変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者以外の立場で管理権限グループを削除する

管理権限グループの非アクティブ化を依頼するには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 現在の管理権限グループ

### Zendesk Global

| 権限グループ | 編集権限 | 公開権限 |
|------------------|------------------|---------------------|
| Administrators | Admins | Admins |
| Support Team | Admins, Support Editors | Admins, Support Publishers |

### Zendesk US Government

| 権限グループ | 編集権限 | 公開権限 |
|------------------|------------------|---------------------|
| Administrators | Admins | Admins |
| Support Team | Admins, Support Editors | Admins, Support Publishers |

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### 管理権限グループを表示する

Zendesk で現在の管理権限グループを表示するには:

1. [ナレッジセンターにアクセス](../knowledge-center/#accessing-the-knowledge-center)します
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
1. 左側の `Management permissions` をクリックします: {#viewing-management-permission-groups}
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

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。

{{% /alert %}}

管理権限グループを作成するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容は、依頼自体に依存します。利用可能な開始テンプレートは以下のとおりです:

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

**注:** `edit` および `publish` 属性はユーザーセグメント名を使用します。利用可能なユーザーセグメントを確認するには、[ユーザーセグメントのドキュメント](/handbook/security/customer-support-operations/zendesk/knowledge-center/user-segments)を参照してください。

ピアによるレビューと承認の後、MR をマージできます。次のデプロイメントが行われる際に、Zendesk に同期されます。

### 管理権限グループを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。

{{% /alert %}}

管理権限グループを編集するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容は、依頼自体に依存します。

ピアによるレビューと承認の後、MR をマージできます。次のデプロイメントが行われる際に、Zendesk に同期されます。

#### 管理権限グループの名前を変更する

管理権限グループのタイトルを変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから `name` 属性を変更します。これにより、同期処理が対象の管理権限グループを引き続き特定して更新できます。

### 管理権限グループを削除する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- これは他のチームの記事管理能力に大きな影響を与える可能性があります。実行時には注意してください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、グループを削除するには 2 つのアクションを実行する必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアによるレビューと承認の後、MR をマージできます。

それが完了したら、次に Zendesk 自体から削除する必要があります。

Zendesk から管理権限グループを削除するには:

1. [管理権限グループのページ](#viewing-management-permission-groups)に移動します
1. 削除したい管理権限グループの名前の右側にある縦に並んだ 3 つの点をクリックします
1. `Delete` をクリックします

**注**: 確認は求められないので、注意して実行してください。

### 例外デプロイメントを実行する

管理権限グループの例外デプロイメントを実行するには、対象の管理権限グループの同期プロジェクトに移動し、スケジュールパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、管理権限グループの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後に管理権限グループの変更が反映されない

管理権限グループは `Standard` デプロイメントタイプに従うため、通常のデプロイメントサイクル（または例外デプロイメントが行われたとき）にのみデプロイされます。
