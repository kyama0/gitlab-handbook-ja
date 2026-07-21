---
title: 'ユーザーセグメント'
description: 'Zendesk ユーザーセグメントに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/knowledge-center/user-segments/"
upstream_sha: "db1b52fb5e65d37509c3eaaaebfd50dd491e4b36"
lastmod: "2026-07-21T11:29:58-05:00"
translated_at: "2026-07-22T06:32:52+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk ヘルプセンターのユーザーセグメントを作成、編集、管理する方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/help-center-user-segments)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/help-center-user-segments)
- `CustSuppOps Zendesk Test Suite Generator` が有効

{{% /alert %}}

注記: これは[管理権限グループ](/handbook/eta/css/zendesk/knowledge-center/management-permissions-groups)と密接に関連しています

## ユーザーセグメントを理解する

### ユーザーセグメントとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408831908634-Managing-user-segments)によると:

> ユーザーセグメントは、ヘルプセンターのコンテンツへのアクセスを決定するために使用される、特定の属性セットで定義されたエンドユーザーおよび/またはエージェントの集合です。

要するに、ユーザーセグメントの使用例は次のとおりです。

- 記事の表示を特定のチームに制限する
- 記事を編集または公開できる人を制御する（管理権限を介して）
- チーム固有のコンテンツセクションを作成する

**注記**: 複数のユーザーセグメントに所属できます。

### ユーザーセグメントの管理方法

Zendesk は UI を通じてユーザーセグメントを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバックの実行などが可能になります。

このため、同期リポジトリを使用しています。

## 非管理者としてユーザーセグメントを作成する

ユーザーセグメントを作成する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 非管理者としてユーザーセグメントを編集する

ユーザーセグメントを変更する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 非管理者としてユーザーセグメントを削除する

ユーザーセグメントを削除する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 現在のユーザーセグメント

### Zendesk Global

| ユーザーセグメント | タグフィルター | 組織フィルター | グループフィルター | 個別ユーザー | システム組み込み |
|--------------|-------------|----------------------|---------------|------------------|:---------------:|
| サインイン済みユーザー | N/A | N/A | N/A | N/A | Y |
| エージェントと管理者 | N/A | N/A | N/A | N/A | Y |
| Support Editors | `article_editor` | なし | Support AMER<br>Support APAC<br>Support EMEA | なし | N |
| Support Publishers | `article_publisher` | なし | Support AMER<br>Support APAC<br>Support EMEA | なし | N |

### Zendesk US Government

| ユーザーセグメント | タグフィルター | 組織フィルター | グループフィルター | 個別ユーザー | システム組み込み |
|--------------|-------------|----------------------|---------------|------------------|:---------------:|
| サインイン済みユーザー | N/A | N/A | N/A | N/A | Y |
| エージェントと管理者 | N/A | N/A | N/A | N/A | Y |
| Support Editors | `article_editor` | なし | なし | なし | N |
| Support Publishers | `article_publisher` | なし | なし | なし | N |

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### ユーザーセグメントを表示する

Zendesk で現在のユーザーセグメントを確認するには:

1. [ナレッジセンターにアクセスします](../knowledge-center/#accessing-the-knowledge-center)
1. 左側の `User permissions content` アイコンをクリックします:
   - プライマリブランド:
     - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/knowledge/user_segments/page/1?brand_id=3252896)
     - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/user_segments/page/1?brand_id=12510498177436)
     - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/knowledge/user_segments/page/1?brand_id=360002482351)
     - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/user_segments/page/1?brand_id=360003799392)
   - 内部ブランド:
     - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/knowledge/user_segments/page/1?brand_id=22781249167132)
     - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/user_segments/page/1?brand_id=22687153149724)
     - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/knowledge/user_segments/page/1?brand_id=41824350085780)
     - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/user_segments/page/1?brand_id=41389709130900)

### ユーザーセグメントを作成する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。

{{% /alert %}}

ユーザーセグメントを作成するには、同期リポジトリで MR を作成する必要があります。正確な変更内容は、リクエスト自体によって異なります。

**注記**: `added_user_ids`、`or_tags`、`organization_ids` 属性を使用することは非常にまれなため、ユーザーセグメントを作成するときはこれらに `[]` の値を使用する可能性が高いです。

使用できる開始テンプレートは次のとおりです。

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

ピアが MR をレビューして承認した後、MR をマージできます。次のデプロイ時に Zendesk と同期されます。

### ユーザーセグメントを編集する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。
- 他のチームの記事管理能力に大きな影響を与える可能性があります。続行する際は慎重に進めてください。

{{% /alert %}}

ユーザーセグメントを編集するには、同期リポジトリで MR を作成する必要があります。正確な変更内容は、リクエスト自体によって異なります。

ピアが MR をレビューして承認した後、MR をマージできます。次のデプロイ時に Zendesk と同期されます。

#### ユーザーセグメントの名前を変更する

ユーザーセグメントのタイトルを変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから、`name` 属性を変更します。これにより、同期は更新対象のユーザーセグメントを引き続き特定できます。

### ユーザーセグメントを削除する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。
- 他のチームの記事管理能力に大きな影響を与える可能性があります。続行する際は慎重に進めてください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、グループを削除するには 2 つの操作を行う必要があります。

最初に、同期リポジトリから対応するファイルを削除する必要があります。ピアが MR をレビューして承認した後、MR をマージできます。

その後、Zendesk 自体からも削除する必要があります。

Zendesk からユーザーセグメントを削除するには:

1. [ユーザーセグメントページ](#viewing-user-segments)に移動します
1. 削除するユーザーセグメントの名前の右側にある縦の 3 点をクリックします
1. `Delete` をクリックします
1. `Delete` をクリックして変更を確認します

### 例外デプロイメントを実行する

ユーザーセグメントの例外デプロイメントを実行するには、対象のユーザーセグメント同期プロジェクトに移動し、スケジュールパイプラインページに移動して、同期項目の再生ボタンをクリックします。これにより、ユーザーセグメントの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にユーザーセグメントの変更が表示されない

ユーザーセグメントは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイメントの実行時）にのみデプロイされます

### ユーザーが予想したセグメントに一致しない

通常、これは対象のユーザーセグメントで定義された条件を満たしていないことを示しています。この件については Customer Support Systems チームに問い合わせてください。
