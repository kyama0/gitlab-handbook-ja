---
title: 'アプリ'
description: 'Zendesk アプリに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/apps/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、GitLab における Zendesk アプリの情報と管理について説明します。

現在使用中のアプリの一覧:

- [Zendesk Global](./global/)
- [Zendesk US Government](./us-government/)

開発者は[開発ドキュメント](./development/)を確認してください。

管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Standard`
- グループ同期リポジトリは以下の場所にあります:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/apps)

{{% /alert %}}

## Zendesk アプリを理解する

### Zendesk アプリとは

Zendesk アプリは、Zendesk の場所で実行されるアプリケーション（HTML/CSS/JS で書かれたもの）です。何をするか、どのように行うかはアプリケーションごとに大きく異なります。アプリケーションは多くの場所で実行できますが、伝統的な場所は次のとおりです:

- チケットサイドバー
- ユーザーサイドバー
- 組織サイドバー
- ナビゲーションバー
- バックグラウンド

アプリケーションの場所に関する詳細は、[Zendesk Developer Manifest Reference ドキュメント](https://developer.zendesk.com/documentation/apps/app-developer-guide/manifest/#location)で確認できます。

Zendesk アプリケーションは通常、次の 2 つの領域のいずれかから来ます:

- [Zendesk Marketplace](https://www.zendesk.com/apps/)
- 社内開発

### 私たちのアプリの管理方法

Zendesk は UI を通じてアプリを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバック実行などが可能になります。

そのため、私たちは同期リポジトリと管理コンテンツリポジトリを利用しています。

## 管理者タスク {#administrator-tasks}

### バージョニング {#versioning}

Zendesk アプリのバージョンには、以下のスタイルを使用します:

`Major.Minor`

これは（`Patch` 番号なしの）[セマンティックバージョニング](https://www.geeksforgeeks.org/software-engineering/introduction-semantic-versioning/)に従います。そのため、通常の `Minor` と `Patch` の定義を 1 つに統合する必要があります。

一般的なルールとして:

- マイナーバージョンの変更（Minor 番号をインクリメント）:
  - バグ修正と訂正
  - 小規模な UI の改善
  - パフォーマンスの最適化
  - 小規模な機能追加
- メジャーバージョンの変更（Major をインクリメント、Minor を 0 にリセット）:
  - 機能への破壊的変更
  - 大規模な再設計または書き直し
  - 重要な新機能
  - 新しい権限を必要とする変更

例として:

- アプリバージョン `2.9` で小規模な変更を行うと、新しいバージョンは `2.10` になります
- アプリバージョン `2.9` で大規模な変更を行うと、新しいバージョンは `3.0` になります

### アプリをインストールする

{{% alert title="情報" color="info" %}}

- これは Zendesk へのアプリのインストールについて説明します。
  - アプリプロジェクトを作成する必要がある場合は、[プロジェクトのセットアップ](/handbook/security/customer-support-operations/gitlab/project-setup)を参照してください
  - アプリを開発する必要がある場合は、[アプリ開発](./development/)を参照してください
- Zendesk Marketplace からアプリをインストールする場合は、そのアプリのページの指示を参照してください。

{{% /alert %}}
{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。

{{% /alert %}}

Zendesk にアプリをインストールするには、まずアプリをパッケージ化する必要があります。これを行うには、プロジェクトリポジトリ内で（CLI 経由で）次のコマンドを実行します:

```bash
zip -r data/application.zip assets manifest.json translations
```

その後、`data/application.zip` を使って次のようにして Zendesk にアプリをアップロード（しインストール）します:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > Apps > Zendesk Support apps` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apps/support-apps)
1. ページの右上にある `Upload private app` をクリックします
1. アプリの名前（アプリの `manifest.json` ファイルに記載されている通り）を入力します
1. `Choose File` をクリックして、先ほど作成した `data/application.zip` ファイルを選択します
1. `Upload` をクリックします

そこから、（インストール後）アプリのページに移動し、制限、パラメータなどを設定できます。

### アプリを更新する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- [バージョニング](#versioning)情報に従うようにしてください

{{% /alert %}}

すでにインストール済みのアプリの更新は、対応する同期リポジトリがそれを制御しているため、はるかに簡単です。アプリを更新するには、アプリの同期リポジトリで MR を作成する必要があります。具体的な変更内容は、依頼自体に依存します。

ピアによるレビューと承認の後、MR をマージできます。次のデプロイメントが行われる際に、Zendesk に同期されます。

#### サンドボックスでインストール済みアプリを強制更新する

サンドボックスでアプリを強制更新する必要がある場合（特に開発中）、プロジェクトリポジトリ内で（CLI 経由で）`./bin/sync_sandbox force` コマンドを実行します。

### アプリを非アクティブ化する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- アプリを非アクティブ化する場合は、その同期メカニズムを制御するスケジュールパイプラインを無効化する必要があります

{{% /alert %}}

アプリを非アクティブ化するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > Apps > Zendesk Support apps` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apps/support-apps)
1. 対象のアプリにカーソルを合わせ、下矢印をクリックします
1. `Enabled` オプションの下のスライダーをクリックします

### アプリをアンインストールする

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- アンインストールするのは、必ず非アクティブ化されたアプリのみにしてください

{{% /alert %}}

アプリをアンインストールするには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > Apps > Zendesk Support apps` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apps/support-apps)
1. 対象のアプリにカーソルを合わせ、下矢印をクリックします
1. `Uninstall` をクリックします

### 例外デプロイメントを実行する

アプリの例外デプロイメントを実行するには、対象のアプリプロジェクトに移動し、スケジュールパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、アプリの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にアプリの変更が反映されない

アプリは `Standard` デプロイメントタイプに従うため、通常のデプロイメントサイクル（または例外デプロイメントが行われたとき）にのみデプロイされます。
