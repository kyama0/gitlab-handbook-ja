---
title: 'サンドボックス'
description: 'Zendesk のサンドボックスに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/sandbox/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
translated_at: "2026-07-19T06:47:27+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
  - **注記:** サンドボックスは現在 Zendesk で手動管理されています（同期リポジトリはまだありません）

{{% /alert %}}

## サンドボックスを理解する

### Zendesk Sandbox とは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408822049818-Creating-a-sandbox-environment-to-test-changes)によると:

> サンドボックス環境は、構成と一部のデータにおいて本番インスタンスを厳密に反映するテスト環境を提供します。これにより、ワークフローの更新を正確にテストし、統合を試し、本番環境を反映した環境で新しいエージェントにトレーニングを提供できます。

Zendesk Sandbox は、本番インスタンスから分離された環境で、テスト、学習、複製などに使用できる Zendesk インスタンスの複製です。

私たちは、すべての変更管理プロセスで Zendesk Sandbox を利用します。これにより、変更・更新などをテストするための安全でセキュアな場所が得られ、本番環境に反映する実装が安定しており、十分に精査されていることを確実にできます。

### 一般的なユースケース

- 本番デプロイ前にトリガーと自動化の変更をテストする
- 新しいワークフローを試す
- 新しいチームメンバーをトレーニングする
- アプリの設定を検証する
- テーマの変更をテストする

### サンドボックスの場所

サンドボックスは次の場所にあります:

- [Zendesk Global](https://gitlab1707170878.zendesk.com/agent/)
- [Zendesk US Government](https://gitlabfederalsupport1585318082.zendesk.com/agent)

### Zendesk Sandbox へのアクセス方法

エンドユーザーのワークフロー（チケットの送信、ポータルへのアクセスなど）をテストする場合は、[Zendesk Sandbox Test Orgs and Users](https://docs.google.com/spreadsheets/d/1g6lJ3AUS4EYqoBYzAdExp4v1dkzOb3GWKaMIoZikjts/edit?usp=sharing)（内部のみ）スプレッドシートに記載されている事前設定済みのテストアカウントを使用します。これらのアカウントは、さまざまな顧客シナリオ（無料ユーザー、有料ユーザー、複数のサブスクリプションレベルなど）をシミュレートします。

可能な限り、事前作成されたテスト組織とユーザーを使用してください。そこにあるユーザーが何らかの理由でケースで機能しない場合は、Customer Support Systems の Fullstack Engineer に連絡してください。

### サンドボックスの制限事項

- API レート制限は本番環境と異なる場合があります
- ライセンスシート数は本番環境と異なります
- 一部の統合は機能しないか、セットアップされていない場合があります

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルアクセスが必要です。

{{% /alert %}}

### サンドボックスの一覧を表示する

Zendesk インスタンスの現在のサンドボックス一覧を表示するには:

1. Zendesk インスタンスの管理ダッシュボードに移動する
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
1. `Account > Sandbox > Environments` に移動する
   - [Zendesk Global](https://gitlab.zendesk.com/admin/account/sandbox/environments)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/sandbox/environments)

### サンドボックスを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、先に作成し（作業を始める前に標準プロセスを経るようにしてください）。

{{% /alert %}}

Zendesk インスタンス用のサンドボックスを作成するには:

1. Zendesk インスタンスの管理ダッシュボードに移動する
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
1. `Account > Sandbox > Environments` に移動する
   - [Zendesk Global](https://gitlab.zendesk.com/admin/account/sandbox/environments)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/sandbox/environments)
1. ページ右上にある `Create sandbox` をクリックする
1. サンドボックスの名前を入力する
1. ドロップダウンから、本番環境からコピーするチケット数を選択する
   - これには `0` を使用することを推奨します
1. 必要な組織（つまり、最低限必要な組織情報）をコピーするチェックボックスをオンまたはオフにする
   - このチェックボックスをオンにすることを推奨します
1. ページ右下にある `Create sandbox` をクリックする

### サンドボックスを削除する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、先に作成し（作業を始める前に標準プロセスを経るようにしてください）。
- これは非常に稀で、本当に必要な場合のみ実行してください。実行時には注意してください。

{{% /alert %}}

Zendesk インスタンスからサンドボックスを削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動する
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
1. `Account > Sandbox > Environments` に移動する
   - [Zendesk Global](https://gitlab.zendesk.com/admin/account/sandbox/environments)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/sandbox/environments)
1. 削除するサンドボックスの右側にある縦に並んだ 3 つの点をクリックする
1. `Delete sandbox` をクリックする
1. 削除を確認するために `Delete sandbox` をクリックする

## 一般的な問題とトラブルシューティング

これは、必要に応じて項目を追加していく継続的なセクションです。
