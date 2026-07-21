---
title: 'アクセスログ'
description: 'Zendesk のアクセスログに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/access-logs/"
upstream_sha: "db1b52fb5e65d37509c3eaaaebfd50dd491e4b36"
translated_at: "2026-07-22T06:32:52+09:00"
translator: codex
stale: false
lastmod: "2026-07-21T11:29:58-05:00"
---

このガイドでは、GitLab で Zendesk のアクセスログを表示・管理する方法を説明します。アクセスログは Zendesk の読み取りおよび書き込みイベントを追跡し、管理者とエージェントのアクションの監査証跡を提供します。

## アクセスログを理解する

### アクセスログとは

[Zendesk](https://developer.zendesk.com/api-reference/ticketing/account-configuration/access_logs/)によると:

> アクセスログは、必ずしも何かを更新、作成、削除することなく、エージェントまたは管理者がアカウントで何にアクセスしたかを記録する 90 日間のイベント記録です。アクセスログは、アカウントの読み取りおよび書き込みイベントの記録です。

### カーソルを理解する

アクセスログではカーソルベースのページネーションを使用します。カーソルは、ログストリーム内の最後に読み取った位置を示すポインターで、システムが前回の確認以降の新しいエントリだけを取得できるようにします。

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### アクセスログを表示する

アクセスログを表示するには:

1. Zendesk インスタンスの管理ダッシュボードに移動する
   - [Zendesk Global（本番）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Account > Logs > Access log` に移動する
   - [Zendesk Global](https://gitlab.zendesk.com/admin/account/logs/access-log)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/account/logs/access-log)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/logs/access-log)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/account/logs/access-log)

## 自動ログ監視

### 概要

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/access_logs)

{{% /alert %}}

Zendesk Global（本番）では、特定のエンドポイントのアクセスログエントリを Devo と Elasticsearch に送信します。その他のインスタンス（サンドボックスインスタンス、US Government）には現在、この自動監視はありません。

これは [Access logs プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/access-logs)を通じて行われます。

### 仕組み

スケジュールされたパイプラインを通じて、`bin/run` スクリプトが実行され（現在は 10 分ごと）、セキュリティに関連するアクセスイベントを取得して転送します。これにより、機密性の高い管理者アクションをほぼリアルタイムで監視できます。

`bin/run` スクリプトは次の処理を行います。

1. `data/endpoints.yaml` ファイルを介して監視対象エンドポイントの情報を読み取る
1. 各エンドポイントについて次を繰り返す:
   - 最後に確認したカーソル値以降のすべてのエントリを取得する
   - 確認した新しいカーソル値をログに記録する
1. ログエントリを Devo と Elasticsearch に送信する（存在する場合）
1. カーソルの変更を `data/endpoints.yaml` ファイルにコミットする

### 監視対象のエンドポイント

現在監視しているエンドポイントは次のとおりです。

- `/admin/api/private/accounts/current/remote_authentications`
- `/admin/api/private/accounts/current/security_settings`
- `/admin/api/private/team_members`

### 管理者以外がエンドポイントを追加リクエストする

さらに多くのエンドポイントの監視をリクエストしたい場合は、Customer Support Systems チームに[機能リクエスト Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?issuable_template=Feature)を作成してください。

### 管理者がエンドポイントを追加する

新しいエンドポイントを追加するには、`data/endpoints.yaml` ファイルを変更するプロジェクトの MR を作成します。ファイルでは、新しいエンドポイントの完全な URI と開始カーソルを追加する必要があります。

開始カーソルを見つけるには、API を使用してアクセスログを確認します（[このエンドポイント](https://developer.zendesk.com/api-reference/ticketing/account-configuration/access_logs/#list-access-logs)を使用します）。以下の例では、`YOUR_EMAIL` と `YOUR_API_TOKEN` を認証情報に置き換えてください。

```bash
jason@laptop:~$ curl -ss "https://gitlab.zendesk.com/api/v2/access_logs?filter[path]=/api/v2/users/search&page[size]=100" \
  --header "Content-Type: application/json" \
  -u YOUR_EMAIL/token:YOUR_API_TOKEN | jq '.meta.after_cursor'
"ABCDEF123456"
```

この例を使用すると、新しいエントリは次のようになります。

```yaml
- endpoint: "/api/v2/users/search"
  cursor: ABCDEF123456
```

ピアが MR をレビューして承認したら、マージします。新しいエンドポイントは、次回のスケジュール実行から監視されます。

## よくある問題とトラブルシューティング

これは私たちが利用しているかなり新しい項目のため、まだ記載はありません。イテレーションを通じて、必要に応じて記載を追加します。
