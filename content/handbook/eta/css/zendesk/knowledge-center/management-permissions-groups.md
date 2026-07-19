---
title: '管理権限グループ'
description: 'Zendesk 管理権限グループに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/knowledge-center/management-permissions-groups/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T07:24:00+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk ヘルプセンターの管理権限グループを作成、編集、管理する方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/help-center-management-permissions-groups)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/help-center-management-permissions-groups)
- `CustSuppOps Zendesk Test Suite Generator` が有効

{{% /alert %}}

注記: これは[ユーザーセグメント](/handbook/eta/css/zendesk/knowledge-center/user-segments)と密接に関連しています

## 管理権限グループを理解する

### 管理権限グループとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408827952538-Creating-management-permissions-to-define-agent-editing-and-publishing-rights)によると:

> 管理権限は、エージェントの編集および公開権限を定義します。記事に管理権限を適用して、その記事に対するエージェントの編集および公開アクセスを決定します。

### 管理権限グループの管理方法

Zendesk は UI を通じて管理権限グループを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバックの実行などが可能になります。

このため、同期リポジトリを使用しています。

### 権限の種類

- **編集**: 記事の下書きを作成および編集できるユーザーセグメント
- **公開**: 記事を公開できる（ライブにできる）ユーザーセグメント

通常、より広いグループに編集アクセスを付与し、品質管理のためにより小さいグループに公開アクセスを付与します。

## 非管理者として管理権限グループを作成する

管理権限グループを作成する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 非管理者として管理権限グループを編集する

管理権限グループを変更する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 非管理者として管理権限グループを削除する

管理権限グループの無効化をリクエストする場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

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

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### 管理権限グループを表示する

Zendesk で現在の管理権限グループを確認するには:

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
1. 左側の `Management permissions` をクリックします:
   - プライマリブランド:
     - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/knowledge/permissions/?brand_id=3252896)
     - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/permissions/?brand_id=12510498177436)
     - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/knowledge/permissions/?brand_id=360002482351)
     - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/permissions/?brand_id=360003799392)
   - 内部ブランド:
     - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/knowledge/permissions/?brand_id=22781249167132)
     - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/permissions/?brand_id=22687153149724)
     - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/knowledge/permissions/?brand_id=41824350085780)
     - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/permissions/?brand_id=41389709130900)

### 管理権限グループを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。

{{% /alert %}}

管理権限グループを作成するには、同期リポジトリで MR を作成する必要があります。正確な変更内容はリクエスト自体によって異なります。次の開始テンプレートを使用できます:

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

**注記:** `edit` および `publish` 属性では、ユーザーセグメント名を使用します。利用可能なユーザーセグメントを確認するには、[ユーザーセグメントのドキュメント](/handbook/eta/css/zendesk/knowledge-center/user-segments)を参照してください。

ピアが MR をレビューして承認した後、MR をマージできます。次回のデプロイ時に Zendesk に同期されます。

### 管理権限グループを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。

{{% /alert %}}

管理権限グループを編集するには、同期リポジトリで MR を作成する必要があります。正確な変更内容はリクエスト自体によって異なります。

ピアが MR をレビューして承認した後、MR をマージできます。次回のデプロイ時に Zendesk に同期されます。

#### 管理権限グループ名を変更する

管理権限グループのタイトルを変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから、`name` 属性を変更します。これにより、同期は更新対象の管理権限グループを引き続き特定できます。

### 管理権限グループを削除する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。
- これは、他のチームによる記事の管理能力に大きく影響する可能性があります。続行する際は注意してください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、グループを削除するには 2 つのアクションを行う必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアが MR をレビューして承認した後、MR をマージできます。

その後、Zendesk 自体から削除する必要があります。

Zendesk から管理権限グループを削除するには:

1. [管理権限グループページに移動します](#viewing-management-permission-groups)
1. 削除する管理権限グループ名の右側にある縦に並んだ 3 つの点をクリックします
1. `Delete` をクリックします

**注記**: 確認を求められないため、注意してください。

### 例外デプロイを実行する

管理権限グループの例外デプロイを実行するには、該当する管理権限グループ同期プロジェクトに移動し、スケジュールパイプラインページで同期項目の再生ボタンをクリックします。これにより、管理権限グループの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後に管理権限グループの変更が表示されない

管理権限グループは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行された場合）にのみデプロイされます
