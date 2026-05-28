---
title: 'カテゴリ'
description: 'Zendesk のトリガーカテゴリに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/triggers/categories/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、GitLab における Zendesk のトリガーカテゴリの作成、編集、管理方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
  - **注意:** トリガーカテゴリは現在 Zendesk で手動管理されています（同期リポジトリはまだありません）

{{% /alert %}}

## トリガーカテゴリを理解する

### トリガーカテゴリとは

トリガーカテゴリは、トリガーをグループ化することと、トリガーの実行順（position）を細かく調整することの両方に使用されます。

トリガーカテゴリの一般的な使用例には以下が含まれます。

- 機能ごとのグループ化
- チームごとのグループ化
- 地域ごとのグループ化
- 優先度ごとのグループ化
- 実行順（position）のさらなる細かい調整

トリガーをカテゴリに割り当てると（トリガーの YAML ファイル内の `category_id` 属性経由）、Zendesk のトリガーリストでそのカテゴリヘッダーの下に表示され、大量のトリガーをナビゲートしやすくなります。

### トリガーカテゴリは実行順に影響する

トリガーが実行されるとき、トリガーカテゴリに基づいて「グループ」で実行されます。そしてそれらのグループ内では、トリガーカテゴリの position が考慮されます。

そのため、以下のセットアップ（position 順に表示）の場合:

- カテゴリ 1
  - トリガー 1
  - トリガー 6
- カテゴリ 2
  - トリガー 2
  - トリガー 5
- カテゴリ 3
  - トリガー 3
  - トリガー 4

実行順は以下のようになります。

1. トリガー 1
1. トリガー 6
1. トリガー 2
1. トリガー 5
1. トリガー 3
1. トリガー 4

### トリガーカテゴリの管理方法

私たちは現在、すべてのトリガーカテゴリを Zendesk 自体内で管理しています。

## 管理者ではない者がトリガーカテゴリを作成する

トリガーカテゴリの作成については、[Feature Request の Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（カスタマーサポートオペレーションチームによる手動対応が必要となるため）。

## 管理者ではない者がトリガーカテゴリを編集する

トリガーカテゴリの変更については、[Feature Request の Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（カスタマーサポートオペレーションチームによる手動対応が必要となるため）。

## 管理者ではない者がトリガーカテゴリを削除する

トリガーカテゴリの削除については、[Feature Request の Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（カスタマーサポートオペレーションチームによる手動対応が必要となるため）。

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### トリガーカテゴリを作成する

{{% alert title="警告" color="warning" %}}

- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成して標準プロセスを通してから対応してください。

{{% /alert %}}

Zendesk でトリガーカテゴリを作成するには:

1. Zendesk インスタンスの管理ダッシュボードに移動
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Triggers` に移動
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/triggers)
1. `Create trigger` ボタンの横の下向きキャレットをクリック
1. `Create category` をクリック
1. トリガーカテゴリ名を入力
1. `Create` ボタンをクリック

### トリガーカテゴリを編集する

{{% alert title="警告" color="warning" %}}

- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成して標準プロセスを通してから対応してください。
- 大きな下流への影響をもたらす可能性があるため、慎重に実行してください。

{{% /alert %}}

Zendesk でトリガーカテゴリを編集する（つまり名前を変更する）には:

1. Zendesk インスタンスの管理ダッシュボードに移動
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Triggers` に移動
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/triggers)
1. 編集するトリガーカテゴリにカーソルを合わせ、その右にある縦の 3 つの点をクリック
1. `Rename` をクリック
1. 使用する新しいトリガーカテゴリ名を入力
1. `Update` ボタンをクリック

### トリガーカテゴリを並べ替える

{{% alert title="警告" color="warning" %}}

- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成して標準プロセスを通してから対応してください。
- 大きな下流への影響をもたらす可能性があるため、慎重に実行してください。

{{% /alert %}}

Zendesk でトリガーカテゴリを並べ替える（つまり position を変更する）には:

1. Zendesk インスタンスの管理ダッシュボードに移動
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Triggers` に移動
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/triggers)
1. `Edit order` ボタン（`Create trigger` ボタンの左）をクリック
1. トリガーカテゴリの右にある上下矢印をクリックして順序を変更
1. ページ右下の `Save` ボタンをクリック

### トリガーカテゴリを削除する

{{% alert title="警告" color="warning" %}}

- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成して標準プロセスを通してから対応してください。
- カテゴリ内にトリガーが存在しない場合（アクティブまたは非アクティブ）にのみ実行できます

{{% /alert %}}

Zendesk でトリガーカテゴリを削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Triggers` に移動
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/triggers)
1. 編集するトリガーカテゴリにカーソルを合わせ、その右にある縦の 3 つの点をクリック
1. `Delete` をクリック

## よくある問題とトラブルシューティング

これは必要に応じて項目が追加されていく、生きたセクションです。
