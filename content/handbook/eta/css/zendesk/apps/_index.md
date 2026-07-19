---
title: 'アプリ'
description: 'Zendesk アプリに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/apps/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T07:03:38+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk アプリの情報と管理について説明します。

現在使用されているアプリの一覧:

- [Zendesk Global](./global/)
- [Zendesk US Government](./us-government/)

開発者は[開発ドキュメント](./development/)を確認してください。

管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- グループの同期リポジトリ:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/apps)

{{% /alert %}}

## Zendesk アプリを理解する

### Zendesk アプリとは

Zendesk アプリは、Zendesk 内のある場所で実行されるアプリケーション（HTML/CSS/JS で記述）です。実行内容と方法はアプリケーションごとに大きく異なります。アプリケーションは非常に多くの場所で実行できますが、従来の場所は次のとおりです。

- チケットサイドバー
- ユーザーサイドバー
- 組織サイドバー
- ナビゲーションバー
- バックグラウンド

アプリケーションの場所に関するその他のリソースは、[Zendesk Developer Manifest Reference ドキュメント](https://developer.zendesk.com/documentation/apps/app-developer-guide/manifest/#location)で確認できます。

Zendesk アプリケーションは通常、次の 2 つの領域のいずれかから提供されます。

- [Zendesk Marketplace](https://www.zendesk.com/apps/)
- 社内開発

### アプリの管理方法

Zendesk は UI を通じてアプリを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバックの実行などが可能になります。

このため、同期リポジトリと管理対象コンテンツリポジトリを使用しています。

## 管理者タスク

### バージョニング

Zendesk アプリのバージョンには、次の形式を使用します。

`Major.Minor`

これは[セマンティックバージョニング](https://www.geeksforgeeks.org/software-engineering/introduction-semantic-versioning/)（`Patch` 番号を除く）に従います。そのため、通常の `Minor` と `Patch` の定義を 1 つにまとめる必要があります。

一般的なルール:

- マイナーバージョンの変更（Minor 番号をインクリメント）:
  - バグ修正と訂正
  - 小規模な UI の改善
  - パフォーマンスの最適化
  - 小規模な機能追加
- メジャーバージョンの変更（Major をインクリメントし、Minor を 0 にリセット）:
  - 機能の破壊的変更
  - 大規模な再設計または書き換え
  - 重要な新機能
  - 新しい権限が必要な変更

例:

- アプリバージョン `2.9` で小規模な変更を行う場合、新しいバージョンは `2.10` になります
- アプリバージョン `2.9` で大規模な変更を行う場合、新しいバージョンは `3.0` になります

### アプリをインストールする

{{% alert title="情報" color="info" %}}

- ここでは Zendesk へのアプリのインストールを扱います。
  - アプリプロジェクトを作成する必要がある場合は、[プロジェクトのセットアップ](/handbook/eta/css/gitlab/project-setup)を参照してください
  - アプリを開発する必要がある場合は、[アプリ開発](./development/)を参照してください
- Zendesk Marketplace からアプリをインストールする場合は、そのアプリのページにある手順を参照してください。

{{% /alert %}}
{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。

{{% /alert %}}

Zendesk にアプリをインストールするには、まずアプリをパッケージ化する必要があります。これを行うには、プロジェクトリポジトリ内で次のコマンドを（CLI を介して）実行します。

```bash
zip -r data/application.zip assets manifest.json translations
```

次に、以下の手順で `data/application.zip` を使用して、Zendesk にアプリをアップロード（およびインストール）します。

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > Apps > Zendesk Support apps` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apps/support-apps)
1. ページ右上の `Upload private app` をクリックします
1. アプリの名前を入力します（アプリの `manifest.json` ファイルに記載された名前）
1. `Choose File` をクリックし、先ほど作成した `data/application.zip` ファイルを選択します
1. `Upload` をクリックします

ここから、アプリのページ（インストール後）に移動し、制限、パラメータなどを設定できます。

### アプリを更新する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。
- [バージョニング](#versioning)の情報に従ってください

{{% /alert %}}

すでにインストールされているアプリの更新は、対応する同期リポジトリが制御するため、かなり簡単です。アプリを更新するには、アプリの同期リポジトリで MR を作成する必要があります。正確な変更内容は、リクエスト自体によって異なります。

ピアが MR をレビューして承認した後、MR をマージできます。次のデプロイ時に Zendesk と同期されます。

#### サンドボックスでインストール済みアプリを強制更新する

サンドボックスでアプリを強制的に更新する必要がある場合（特に開発中）は、プロジェクトリポジトリ内で（CLI を介して）コマンド `./bin/sync_sandbox force` を実行します。

### アプリを無効化する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。
- アプリを無効化する場合は、その同期メカニズムを制御するスケジュールパイプラインを無効にする必要があります

{{% /alert %}}

アプリを無効化するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > Apps > Zendesk Support apps` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apps/support-apps)
1. 対象のアプリにカーソルを合わせ、下矢印をクリックします
1. `Enabled` オプションの下にあるスライダーをクリックします

### アプリをアンインストールする

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。
- 無効化されたアプリのみをアンインストールしてください

{{% /alert %}}

アプリをアンインストールするには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > Apps > Zendesk Support apps` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apps/support-apps)
1. 対象のアプリにカーソルを合わせ、下矢印をクリックします
1. `Uninstall` をクリックします

### 例外デプロイメントを実行する

アプリの例外デプロイメントを実行するには、対象のアプリプロジェクトに移動し、スケジュールパイプラインページに移動して、同期項目の再生ボタンをクリックします。これにより、アプリの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にアプリの変更が表示されない

アプリは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイメントの実行時）にのみデプロイされます。
