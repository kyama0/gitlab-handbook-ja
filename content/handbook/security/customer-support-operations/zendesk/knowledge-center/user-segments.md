---
title: 'ユーザーセグメント'
description: 'Zendesk ユーザーセグメントに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/knowledge-center/user-segments/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
translated_at: "2026-05-26T22:38:46Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、GitLab における Zendesk ヘルプセンターのユーザーセグメントの作成、編集、管理方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/help-center-user-segments)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/help-center-user-segments)
- `CustSuppOps Zendesk Test Suite Generator` 有効

{{% /alert %}}

注: これは[管理権限グループ](/handbook/security/customer-support-operations/zendesk/knowledge-center/management-permissions-groups)と密接に関連しています。

## ユーザーセグメントを理解する

### ユーザーセグメントとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408831908634-Managing-user-segments) によると:

> ユーザーセグメントとは、特定の属性のセットによって定義されたエンドユーザーやエージェントの集合であり、ヘルプセンターのコンテンツへのアクセスを決定するために使用されます。

要するに、ユーザーセグメントの使用例は次のとおりです:

- 特定のチームへの記事の表示制限
- 記事の編集/公開ができる人を制御する（管理権限経由）
- チーム固有のコンテンツセクションの作成

**注**: 複数のユーザーセグメントに所属することができます。

### 私たちのユーザーセグメントの管理方法

Zendesk は UI を通じてユーザーセグメントを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバック実行などが可能になります。

そのため、私たちは同期リポジトリを利用しています。

## 管理者以外の立場でユーザーセグメントを作成する

ユーザーセグメントの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者以外の立場でユーザーセグメントを編集する

ユーザーセグメントの変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者以外の立場でユーザーセグメントを削除する

ユーザーセグメントの削除については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 現在のユーザーセグメント

### Zendesk Global

| ユーザーセグメント | タグフィルター | 組織フィルター | グループフィルター | 個別ユーザー | システム組み込み |
|--------------|-------------|----------------------|---------------|------------------|:---------------:|
| Signed-in users | N/A | N/A | N/A | N/A | Y |
| Agents and admins | N/A | N/A | N/A | N/A | Y |
| Support Editors | `article_editor` | None | Support AMER<br>Support APAC<br>Support EMEA | None | N |
| Support Publishers | `article_publisher` | None | Support AMER<br>Support APAC<br>Support EMEA | None | N |

### Zendesk US Government

| ユーザーセグメント | タグフィルター | 組織フィルター | グループフィルター | 個別ユーザー | システム組み込み |
|--------------|-------------|----------------------|---------------|------------------|:---------------:|
| Signed-in users | N/A | N/A | N/A | N/A | Y |
| Agents and admins | N/A | N/A | N/A | N/A | Y |
| Support Editors | `article_editor` | None | None | None | N |
| Support Publishers | `article_publisher` | None | None | None | N |

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### ユーザーセグメントを表示する {#viewing-user-segments}

Zendesk で現在のユーザーセグメントを表示するには:

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

### ユーザーセグメントを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。

{{% /alert %}}

ユーザーセグメントを作成するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容は、依頼自体に依存します。

**注**: 属性 `added_user_ids`、`or_tags`、`organization_ids` を使用することは非常にまれであるため、ユーザーセグメントを作成するときには、これらに `[]` の値を使用する可能性が高いです。

利用可能な開始テンプレートは以下のとおりです:

```yaml
---
name: 'Your user segment name here'
previous_name: 'Your user segment name here'
added_user_ids: # Individual user emails to include
- user_email@example.com
- user_email@example.com
group_ids: # Zendesk group names to include
- Group Name 1
- Group Name 2
or_tags: # Tags where ANY match includes the user (OR logic)
- tag_for_filter_1
- tag_for_filter_2
organization_ids:  # Organization Salesforce IDs to include
- salesforce_id_value_1
- salesforce_id_value_2
tags: # Tags where ALL must match (AND logic)
- tag_for_filter_1
- tag_for_filter_2
user_type: 'staff' # All custom user segments should use 'staff'
```

ピアによるレビューと承認の後、MR をマージできます。次のデプロイメントが行われる際に、Zendesk に同期されます。

### ユーザーセグメントを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- これは他のチームの記事管理能力に大きな影響を与える可能性があります。実行時には注意してください。

{{% /alert %}}

ユーザーセグメントを編集するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容は、依頼自体に依存します。

ピアによるレビューと承認の後、MR をマージできます。次のデプロイメントが行われる際に、Zendesk に同期されます。

#### ユーザーセグメントの名前を変更する

ユーザーセグメントのタイトルを変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから `name` 属性を変更します。これにより、同期処理が対象のユーザーセグメントを引き続き特定して更新できます。

### ユーザーセグメントを削除する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- これは他のチームの記事管理能力に大きな影響を与える可能性があります。実行時には注意してください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、グループを削除するには 2 つのアクションを実行する必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアによるレビューと承認の後、MR をマージできます。

それが完了したら、次に Zendesk 自体から削除する必要があります。

Zendesk からユーザーセグメントを削除するには:

1. [ユーザーセグメントのページ](#viewing-user-segments)に移動します
1. 削除したいユーザーセグメントの名前の右側にある縦に並んだ 3 つの点をクリックします
1. `Delete` をクリックします
1. `Delete` をクリックして変更を確認します

### 例外デプロイメントを実行する

ユーザーセグメントの例外デプロイメントを実行するには、対象のユーザーセグメント同期プロジェクトに移動し、スケジュールパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、ユーザーセグメントの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にユーザーセグメントの変更が反映されない

ユーザーセグメントは `Standard` デプロイメントタイプに従うため、通常のデプロイメントサイクル（または例外デプロイメントが行われたとき）にのみデプロイされます。

### ユーザーが想定したセグメントに一致しない

これは通常、対象のユーザーセグメントで定義された基準を満たしていないことを示します。この件についてサポートが必要な場合は、Customer Support Operations チームに相談してください。
