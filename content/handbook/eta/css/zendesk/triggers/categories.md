---
title: 'トリガーカテゴリ'
description: 'Zendesk トリガーカテゴリに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/triggers/categories/"
upstream_sha: "db1b52fb5e65d37509c3eaaaebfd50dd491e4b36"
lastmod: "2026-07-21T11:29:58-05:00"
translated_at: "2026-07-22T06:32:52+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk トリガーカテゴリを作成、編集、管理する方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
  - **注記:** トリガーカテゴリは現在 Zendesk で手動管理されています（同期リポジトリはまだありません）

{{% /alert %}}

## トリガーカテゴリを理解する

### トリガーカテゴリとは

トリガーカテゴリは、トリガーのグループ化と、トリガーの実行順序（位置）の細かな調整の両方に使用されます。

トリガーカテゴリの一般的な使用例は次のとおりです。

- 機能別のグループ化
- チーム別のグループ化
- 地域別のグループ化
- 優先度別のグループ化
- 実行順序（位置）のさらなる微調整

トリガーをカテゴリに割り当てると（トリガーの YAML ファイルの `category_id` 属性を介して）、Zendesk のトリガー一覧ではそのカテゴリの見出しの下に表示されます。これにより、多数のトリガーを簡単に移動できます。

### トリガーカテゴリが実行順序に与える影響

トリガーは、トリガーカテゴリに基づく「グループ」単位で実行されます。そして、それらのグループではトリガーカテゴリの位置が考慮されます。

次の設定の場合（位置順に表示）:

- カテゴリ 1
  - トリガー 1
  - トリガー 6
- カテゴリ 2
  - トリガー 2
  - トリガー 5
- カテゴリ 3
  - トリガー 3
  - トリガー 4

実行順序は次のようになります。

1. トリガー 1
1. トリガー 6
1. トリガー 2
1. トリガー 5
1. トリガー 3
1. トリガー 4

### トリガーカテゴリの管理方法

現在、すべてのトリガーカテゴリを Zendesk 内で管理しています。

## 非管理者としてトリガーカテゴリを作成する

トリガーカテゴリを作成する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 非管理者としてトリガーカテゴリを編集する

トリガーカテゴリを変更する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 非管理者としてトリガーカテゴリを削除する

トリガーカテゴリを削除する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### トリガーカテゴリを作成する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。

{{% /alert %}}

Zendesk でトリガーカテゴリを作成するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Triggers` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/triggers)
1. `Create trigger` ボタンの横にある下向きのキャレットをクリックします
1. `Create category` をクリックします
1. トリガーカテゴリの名前を入力します
1. `Create` ボタンをクリックします

### トリガーカテゴリを編集する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。
- 下流に大きな影響を与える可能性があるため、慎重に実施してください。

{{% /alert %}}

Zendesk でトリガーカテゴリを編集する（つまり名前を変更する）には:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Triggers` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/triggers)
1. 編集するトリガーカテゴリにカーソルを合わせ、その右側にある縦の 3 点をクリックします
1. `Rename` をクリックします
1. 使用する新しいトリガーカテゴリ名を入力します
1. `Update` ボタンをクリックします

### トリガーカテゴリを並べ替える

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。
- 下流に大きな影響を与える可能性があるため、慎重に実施してください。

{{% /alert %}}

Zendesk でトリガーカテゴリを並べ替える（つまり位置を変更する）には:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Triggers` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/triggers)
1. `Edit order` ボタン（`Create trigger` ボタンの左）をクリックします
1. トリガーカテゴリの右側にある上矢印と下矢印をクリックして順序を変更します
1. ページ右下の `Save` ボタンをクリックします

### トリガーカテゴリを削除する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。
- カテゴリ内にトリガーが存在しない場合にのみ実施できます（有効か無効かを問いません）

{{% /alert %}}

Zendesk でトリガーカテゴリを削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Triggers` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/triggers)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/triggers)
1. 削除するトリガーカテゴリにカーソルを合わせ、その右側にある縦の 3 点をクリックします
1. `Delete` をクリックします

## よくある問題とトラブルシューティング

これは必要に応じて項目が追加される継続的なセクションです。
