---
title: '削除スケジュール'
description: 'Zendesk 削除スケジュールに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/deletion-schedules/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T07:03:38+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk 削除スケジュールを作成、編集、管理する方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/deletion-schedules)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/deletion-schedules)

{{% /alert %}}
{{% alert title="危険" color="danger" %}}

重要な安全情報:

- 削除スケジュールは Zendesk からデータを完全に削除し、元に戻せません
- 本番環境へデプロイする前に、必ずサンドボックス環境で削除スケジュールをテストしてください
- 意図したデータのみを削除するよう、すべての条件を慎重に確認してください
- 削除スケジュールを有効化する前に、重要なデータをバックアップすることを検討してください

{{% /alert %}}

## 削除スケジュールを理解する

### Zendesk 削除スケジュールとは？

[Zendesk](https://support.zendesk.com/hc/en-us/articles/8301879320474-Managing-deletion-schedules)によると:

> 削除スケジュールは、プライバシー法を遵守するためにデータを自動的に削除し、データ保持を管理するのに役立ちます。エンドユーザーデータ、チケット、添付ファイル、ボットのみの会話、カスタムオブジェクトのレコードに対してスケジュールを作成できます。これらのスケジュールは、必要に応じて有効化、編集、複製、無効化、削除し、データストレージの管理を維持して、データ保持規制への準拠を確保できます。

### 削除スケジュールは条件ロジックを使用する

削除スケジュールは条件ロジックを使用します。

- `all`: 配列内のすべての条件が真である必要があります（AND ロジック）
- `any`: 少なくとも 1 つの条件が真である必要があります（OR ロジック）
- 片方のセットのみ、または両方のセットを使用できます（ただし、少なくとも 1 つのセットを使用する必要があります）

この条件ロジックは、削除スケジュールをいつ実行するかを決定します。すべての条件を満たすと、対象のオブジェクトが削除されます。

### 削除スケジュールの管理方法

Zendesk は UI を通じて削除スケジュールを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバックの実行などが可能になります。

このため、同期リポジトリと管理対象コンテンツリポジトリを使用しています。

#### 人が読み取れる表記への置換

{{% alert title="注記" color="primary" %}}

- YAML ファイルを介して削除スケジュールを作成または編集する `administrators` にのみ適用されます

{{% /alert %}}

現在、同期リポジトリでは、人が読み取れるさまざまな項目を「Zendesk」相当の項目に置換できます。以下が含まれます。

| 人が読み取れる項目 | Zendesk フィールド項目 | 条件の場所 | 注記 |
|---------------------|--------------------|--------------------|-------|
| `number interval` | `duration_since_created_at` | `value` | `number` を数値に、`interval` を間隔に置き換えます |
| `number interval` | `duration_since_last_update` | `value` | `number` を数値に、`interval` を間隔に置き換えます |

有効な間隔は次のとおりです。

- `hour` または `hours`
- `day` または `days`
- `week` または `weeks`
- `month` または `months`
- `year` または `years`

たとえば、最終更新から 90 日後に削除スケジュールを実行する場合は、次のように置換を使用します。

```yaml
- field: 'duration_since_last_update'
  operator: 'greater_than'
  value: '90 days'
```

別の例として、作成日から 1 年後に削除する条件が必要な場合は、次のように置換を使用します。

```yaml
- field: 'duration_since_created_at'
  operator: 'greater_than'
  value: '1 year'
```

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### 削除スケジュールを作成する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。

{{% /alert %}}

削除スケジュールを作成するには、同期リポジトリで MR を作成する必要があります。正確な変更内容は、リクエスト自体によって異なります。使用できる開始テンプレートは次のとおりです。

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

有効なオブジェクトタイプは次のとおりです。

| オブジェクト | 意味 | 注記 |
|--------|---------------|-------|
| `zen:ticket` | チケット | |
| `zen:user` | ユーザー | |
| `zen:attachment` | 添付ファイル | |
| `zen:bot_only_conversation` | ボットの会話 | |
| `zen:custom_object:CUSTOM_OBJECT_KEY` | カスタムオブジェクト | `CUSTOM_OBJECT_KEY` をカスタムオブジェクトの `key` 値に置き換えます |

ピアが MR をレビューして承認した後、MR をマージできます。次のデプロイ時に Zendesk と同期されます。

### 削除スケジュールを編集する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。

{{% /alert %}}

削除スケジュールを編集するには、同期リポジトリで MR を作成する必要があります。正確な変更内容は、リクエスト自体によって異なります。

ピアが MR をレビューして承認した後、MR をマージできます。次のデプロイ時に Zendesk と同期されます。

#### 削除スケジュールのタイトルを変更する

削除スケジュールのタイトルを変更する必要がある場合は、現在の値を `previous_title` 属性にコピーしてから、`title` 属性を変更します。これにより、同期は更新対象の削除スケジュールを引き続き特定できます。

### 削除スケジュールを無効化する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。

{{% /alert %}}

削除スケジュールを無効化するには、同期リポジトリで MR を作成する必要があります。ファイルを `inactive` フォルダに移動し、`active` 属性を `false` に変更します。

ピアが MR をレビューして承認した後、MR をマージできます。次のデプロイ時に Zendesk と同期されます。

### 削除スケジュールを削除する

{{% alert title="警告" color="warning" %}}

- 削除スケジュールを削除できるのは、無効化されている場合のみです。
- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、Zendesk 自体でこれを行う必要があります。

削除スケジュールを削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Account > Security > Deletion schedules` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/account/security/deletion_schedules)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/account/security/deletion_schedules)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/security/deletion_schedules)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/account/security/deletion_schedules)
1. 削除する削除スケジュールを見つけ、その横（右端）にある縦の 3 点をクリックします
1. `Delete` をクリックします
1. `Delete schedule` をクリックして変更を送信します

### 例外デプロイメントを実行する

削除スケジュールの例外デプロイメントを実行するには、対象の削除スケジュール同期プロジェクトに移動し、スケジュールパイプラインページに移動して、同期項目の再生ボタンをクリックします。これにより、削除スケジュールの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後に削除スケジュールの変更が表示されない

削除スケジュールは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイメントの実行時）にのみデプロイされます
