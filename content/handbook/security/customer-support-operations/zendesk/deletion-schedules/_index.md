---
title: '削除スケジュール'
description: 'Zendesk 削除スケジュールに関するドキュメント'
date: 2025-12-23
upstream_path: /handbook/security/customer-support-operations/zendesk/deletion-schedules/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk 削除スケジュールの作成、編集、管理方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/deletion-schedules)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/deletion-schedules)

{{% /alert %}}
{{% alert title="危険" color="danger" %}}

重要な安全情報:

- 削除スケジュールは Zendesk からデータを永久に削除し、元に戻せません
- 本番環境にデプロイする前に、必ずサンドボックス環境で削除スケジュールをテストしてください
- 意図したデータのみを削除するように、すべての条件を慎重に確認してください
- 削除スケジュールを有効化する前に、重要なデータをバックアップすることを検討してください

{{% /alert %}}

## 削除スケジュールを理解する

### Zendesk 削除スケジュールとは?

[Zendesk](https://support.zendesk.com/hc/en-us/articles/8301879320474-Managing-deletion-schedules) によると:

> 削除スケジュールは、プライバシー法を遵守するためにデータを自動的に削除して、データ保持を管理するのに役立ちます。エンドユーザーデータ、チケット、添付ファイル、ボットのみの会話、カスタムオブジェクトレコードのスケジュールを作成できます。これらのスケジュールを必要に応じてアクティブ化、編集、複製、非アクティブ化、削除することで、データストレージを管理し、データ保持規制を遵守できます。

### 削除スケジュールは条件ロジックを使用する

削除スケジュールは条件ロジックを使用します:

- `all`: 配列内のすべての条件が true である必要があります（AND ロジック）
- `any`: 少なくとも 1 つの条件が true である必要があります（OR ロジック）
- 1 つのセットだけ、または両方のセットを使用できます（ただし少なくとも 1 つのセットを使用する必要があります）

この条件ロジックは、削除スケジュールが実行されるタイミングを決定します。すべての条件が満たされると、対象のオブジェクトは削除されます。

### 私たちの削除スケジュールの管理方法

Zendesk は UI を通じて削除スケジュールを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバック実行などが可能になります。

そのため、私たちは同期リポジトリと管理コンテンツリポジトリを利用しています。

#### 人間が読みやすい置換

{{% alert title="注意" color="primary" %}}

- YAML ファイル経由で削除スケジュールを作成/編集する `administrators` にのみ適用されます

{{% /alert %}}

現在、同期リポジトリは、人間が読みやすい項目から「Zendesk」相当の項目への、さまざまな項目の置換を実行できます。これには次のものが含まれます:

| 人間が読みやすい項目 | Zendesk フィールド項目 | 条件の場所 | 注 |
|---------------------|--------------------|--------------------|-------|
| `number interval` | `duration_since_created_at` | `value` | `number` を数値に、`interval` を間隔に置き換えます |
| `number interval` | `duration_since_last_update` | `value` | `number` を数値に、`interval` を間隔に置き換えます |

有効な間隔には次のものが含まれます:

- `hour` または `hours`
- `day` または `days`
- `week` または `weeks`
- `month` または `months`
- `year` または `years`

例として、最後の更新から 90 日後に削除スケジュールを実行したい場合は、置換を使用して次のようにします:

```yaml
- field: 'duration_since_last_update'
  operator: 'greater_than'
  value: '90 days'
```

別の例として、作成日から 1 年後に削除を発生させる条件が必要な場合は、置換を使用して次のようにします:

```yaml
- field: 'duration_since_created_at'
  operator: 'greater_than'
  value: '1 year'
```

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### 削除スケジュールを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。

{{% /alert %}}

削除スケジュールを作成するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容は、依頼自体に依存します。利用可能な開始テンプレートは以下のとおりです:

```yaml
---
title: 'Your Title Here'
previous_title: 'Your Title Here'
description: ''
object: 'object type (see below)'
active: true
conditions:
  all:
  - field: 'the_condition_to_use'
    operator: 'the_operator_to_use'
    value: 'the_value_to_use'
  any:
  - field: 'the_condition_to_use'
    operator: 'the_operator_to_use'
    value: 'the_value_to_use'
```

有効なオブジェクトタイプは次のとおりです:

| Object | 意味 | 注 |
|--------|---------------|-------|
| `zen:ticket` | チケット | |
| `zen:user` | ユーザー | |
| `zen:attachment` | 添付ファイル | |
| `zen:bot_only_conversation` | ボットの会話 | |
| `zen:custom_object:CUSTOM_OBJECT_KEY` | カスタムオブジェクト | `CUSTOM_OBJECT_KEY` をカスタムオブジェクトの `key` 値に置き換えます |

ピアによるレビューと承認の後、MR をマージできます。次のデプロイメントが行われる際に、Zendesk に同期されます。

### 削除スケジュールを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。

{{% /alert %}}

削除スケジュールを編集するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容は、依頼自体に依存します。

ピアによるレビューと承認の後、MR をマージできます。次のデプロイメントが行われる際に、Zendesk に同期されます。

#### 削除スケジュールのタイトルを変更する

削除スケジュールのタイトルを変更する必要がある場合は、現在の値を `previous_title` 属性にコピーしてから `title` 属性を変更します。これにより、同期処理が対象の削除スケジュールを引き続き特定して更新できます。

### 削除スケジュールを非アクティブ化する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。

{{% /alert %}}

削除スケジュールを非アクティブ化するには、同期リポジトリで MR を作成する必要があります。ファイルを `inactive` フォルダに移動し、`active` 属性を `false` に変更します。

ピアによるレビューと承認の後、MR をマージできます。次のデプロイメントが行われる際に、Zendesk に同期されます。

### 削除スケジュールを削除する

{{% alert title="警告" color="warning" %}}

- 削除スケジュールが非アクティブ化されている場合のみ削除できます。
- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、これは Zendesk 自体で行う必要があります。

削除スケジュールを削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Account > Security > Deletion schedules` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/account/security/deletion_schedules)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/account/security/deletion_schedules)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/security/deletion_schedules)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/account/security/deletion_schedules)
1. 削除したい削除スケジュールを見つけ、その横（右端）にある縦に並んだ 3 つの点をクリックします
1. `Delete` をクリックします
1. `Delete schedule` をクリックして変更を送信します

### 例外デプロイメントを実行する

削除スケジュールの例外デプロイメントを実行するには、対象の削除スケジュール同期プロジェクトに移動し、スケジュールパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、削除スケジュールの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後に削除スケジュールの変更が反映されない

削除スケジュールは `Standard` デプロイメントタイプに従うため、通常のデプロイメントサイクル（または例外デプロイメントが行われたとき）にのみデプロイされます。
