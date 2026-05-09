---
title: 'サンドボックス'
description: 'Zendesk サンドボックスに関するドキュメント'
date: 2025-12-26
upstream_path: /handbook/security/customer-support-operations/zendesk/sandbox/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T22:41:14Z"
translator: claude
stale: false
---

{{% alert title="技術詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
  - **注意:** サンドボックスは現在 Zendesk で手動管理されています (まだ sync リポジトリはありません)

{{% /alert %}}

## サンドボックスを理解する

### Zendesk サンドボックスとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408822049818-Creating-a-sandbox-environment-to-test-changes) より:

> サンドボックス環境は、設定とデータの一部において本番インスタンスを忠実に反映したテスト環境を提供します。これにより、ワークフローの更新を正確にテストし、統合を試し、本番環境を反映した環境で新しいエージェントへの研修を提供できます。

Zendesk サンドボックスはレプリカの Zendesk インスタンスで、本番インスタンスから分離された環境でテスト、学習、複製などができます。

私たちはすべての変更管理プロセスで Zendesk サンドボックスを利用しています。これにより、変更や更新などをテストするための安全で確実な場所が得られ、本番環境にプッシュする実装が安定し、十分に検証されたものであることを保証できます。

### 一般的な使用事例

- 本番デプロイ前のトリガーや自動化変更のテスト
- 新しいワークフローの実験
- 新しいチームメンバーの研修
- アプリ設定の検証
- テーマ変更のテスト

### サンドボックスはどこにあるか

サンドボックスは以下から見つけられます:

- [Zendesk Global](https://gitlab1707170878.zendesk.com/agent/)
- [Zendesk US Government](https://gitlabfederalsupport1585318082.zendesk.com/agent)

### Zendesk サンドボックスへのアクセス方法

エンドユーザーワークフロー (チケット送信、ポータルアクセスなど) のテストには、[Zendesk Sandbox Test Orgs and Users](https://docs.google.com/spreadsheets/d/1g6lJ3AUS4EYqoBYzAdExp4v1dkzOb3GWKaMIoZikjts/edit?usp=sharing) (内部のみ) スプレッドシートに記載されている事前設定済みのテストアカウントを使用してください。これらのアカウントは様々な顧客シナリオ (無料ユーザー、有料ユーザー、各種サブスクリプションレベルなど) をシミュレートします。

可能な限り事前作成済みのテスト組織とユーザーを使用してください。何らかの理由でそこにあるユーザーがあなたのケースで動作しない場合は、Support Operations の Fullstack Engineer に連絡してください。

### サンドボックスの制限

- API レート制限が本番と異なる場合があります
- ライセンスシート数が本番と異なります
- 一部の統合は動作しない、または設定されていない場合があります

## 管理者向けタスク

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセス権を必要とします。

{{% /alert %}}

### サンドボックスの一覧表示

Zendesk インスタンスの現在のサンドボックス一覧を見るには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
1. `Account > Sandbox > Environments` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/account/sandbox/environments)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/sandbox/environments)

### サンドボックスの作成

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue (Feature Request、Administrative、Bug など) がある場合のみ行うべきです。存在しない場合は、まず作成してください(そして対応する前に通常のプロセスを通してください)。

{{% /alert %}}

Zendesk インスタンスのサンドボックスを作成するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
1. `Account > Sandbox > Environments` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/account/sandbox/environments)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/sandbox/environments)
1. ページの右上にある `Create sandbox` をクリックします
1. サンドボックス名を入力します
1. ドロップダウンから本番環境からコピーするチケット数を選択します
   - 推奨される回答は `0` です
1. 必要な組織をコピーするボックスをチェックまたはチェック解除します (つまり最低限の組織情報)
   - このボックスはチェックすることが推奨されます
1. ページの右下にある `Create sandbox` をクリックします

### サンドボックスの削除

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue (Feature Request、Administrative、Bug など) がある場合のみ行うべきです。存在しない場合は、まず作成してください(そして対応する前に通常のプロセスを通してください)。
- これは極めて稀で、絶対に必要な場合にのみ行うべきです。実行する際は注意してください。

{{% /alert %}}

Zendesk インスタンスからサンドボックスを削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
1. `Account > Sandbox > Environments` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/account/sandbox/environments)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/sandbox/environments)
1. 削除したいサンドボックスの右にある縦の三点ドットをクリックします
1. `Delete sandbox` をクリックします
1. `Delete sandbox` をクリックして削除を確定します

## よくある問題とトラブルシューティング

このセクションは必要に応じて項目が追加されていく生きたセクションです。
