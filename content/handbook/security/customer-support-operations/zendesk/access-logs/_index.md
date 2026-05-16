---
title: 'アクセスログ'
description: 'Zendesk アクセスログに関するドキュメント'
date: 2025-12-23
upstream_path: /handbook/security/customer-support-operations/zendesk/access-logs/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T20:47:52+00:00"
---

このガイドでは、GitLab で Zendesk アクセスログを表示および管理する方法について説明します。アクセスログは Zendesk での読み取り・書き込みイベントを追跡し、管理者およびエージェントのアクションの監査証跡を提供します。

## アクセスログを理解する

### アクセスログとは

[Zendesk](https://developer.zendesk.com/api-reference/ticketing/account-configuration/access_logs/) によると:

> アクセスログは、必ずしも何かを更新、作成、削除することなく、エージェントまたは管理者がアカウント内で何にアクセスしたかを記録する、90 日間のイベント記録です。アクセスログは、アカウントの読み取りおよび書き込みイベントの記録です。

### カーソルを理解する

アクセスログはカーソルベースのページネーションを使用します。カーソルは、ログストリーム内で最後に読み取った位置を示すポインターであり、システムは前回のチェック以降の新しいエントリのみを取得できます。

## 管理者タスク

{{% alert title="Note" color="primary" %}}

- このセクションのすべての内容には、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### アクセスログの表示

アクセスログを表示するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Account > Logs > Access log` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/account/logs/access-log)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/account/logs/access-log)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/logs/access-log)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/account/logs/access-log)

## ログ自動監視

### 概要

{{% alert title="Technical Details" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/access_logs)

{{% /alert %}}

Zendesk Global (production) では、特定のエンドポイントのアクセスログエントリを Devo および Elasticsearch に送信します。他のインスタンス (sandbox インスタンス、US Government) には、現在この自動監視はありません。

これは [Access logs プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/access-logs) を介して行われます。

### 仕組み

スケジュールされたパイプラインを介して、`bin/run` スクリプトが実行され (現在は 10 分ごと)、セキュリティに関連するアクセスイベントを取得し転送します。これにより、機密性の高い管理アクションのほぼリアルタイムな監視が提供されます。

`bin/run` スクリプトは次を行います:

1. `data/endpoints.yaml` ファイルを介して監視対象のエンドポイント情報を読み取る
1. 各エンドポイントに対して以下をループする:
   - 最後にチェックされたカーソル値以降のすべてのエントリを取得する
   - チェックされた新しいカーソル値をログに記録する
1. ログエントリを Devo および Elasticsearch に送信する (存在する場合)
1. `data/endpoints.yaml` ファイルへのカーソル変更をコミットする

### 監視対象のエンドポイント

現在、監視されているエンドポイントは次のとおりです:

- `/admin/api/private/accounts/current/remote_authentications`
- `/admin/api/private/accounts/current/security_settings`
- `/admin/api/private/team_members`

### 非管理者として、より多くのエンドポイントをリクエストする

より多くのエンドポイントを監視するようリクエストしたい場合は、Customer Support Operations チームに [機能リクエスト Issue を起票](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Feature) してください。

### 管理者として、より多くのエンドポイントを追加する

新しいエンドポイントを追加するには、`data/endpoints.yaml` ファイルを変更するマージリクエストをプロジェクト上で作成します。ファイル内に、新しいエンドポイントの完全な URI と開始カーソルを追加する必要があります。

開始カーソルを見つけるには、API を介して ([このエンドポイント](https://developer.zendesk.com/api-reference/ticketing/account-configuration/access_logs/#list-access-logs) を使用) アクセスログを確認します。下の例で `YOUR_EMAIL` と `YOUR_API_TOKEN` を自分の認証情報に置き換えてください:

```bash
jason@laptop:~$ curl -ss "https://gitlab.zendesk.com/api/v2/access_logs?filter[path]=/api/v2/users/search&page[size]=100" \
  --header "Content-Type: application/json" \
  -u YOUR_EMAIL/token:YOUR_API_TOKEN | jq '.meta.after_cursor'
"ABCDEF123456"
```

その例を使用すると、新しいエントリは次のようになります:

```yaml
- endpoint: "/api/v2/users/search"
  cursor: ABCDEF123456
```

ピアがマージリクエストをレビューおよび承認した後、それをマージします。新しいエンドポイントは、次のスケジュール実行から監視され始めます。

## 一般的な問題とトラブルシューティング

これは比較的新しく利用しているものであるため、ここにはまだ何もありません。イテレーションを通じて、必要に応じて記載していきます。
