---
title: 'OAuth クライアント'
description: 'OAuth クライアントに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/oauth-clients/
upstream_sha: 228e83810bd79bddf58ab0b0b518b1d52bd74fb7
translated_at: "2026-06-05T21:08:33Z"
translator: claude
stale: false
model: claude-opus-4-7
lastmod: "2026-06-04T12:53:57-05:00"
---

## Zendesk OAuth クライアントを理解する

### グラントタイプ

Grant type に関する情報は、[Zendesk のドキュメント](https://developer.zendesk.com/api-reference/ticketing/oauth/grant_type_tokens/)を参照してください。

なお、私たちは [client_credentials](https://developer.zendesk.com/api-reference/ticketing/oauth/grant_type_tokens/#client-credentials-grant-type) grant type の使用を推奨します。

### スコープ

Scope に関する情報は、[Zendesk のドキュメント](https://developer.zendesk.com/api-reference/ticketing/oauth/grant_type_tokens/#scope)を参照してください。

## OAuth クライアントを使う

OAuth クライアントを使う一般的なプロセスは次のとおりです:

- bearer token を生成する
- API 操作を行う
- トークンを失効させる

### bearer token の生成

{{% alert title="注意" color="primary" %}}

- これらは API またはリダイレクト URL フロー経由でのみ生成できます。リダイレクト URL フローはセットアップによって異なる可能性があるため、ここでは API の使用に焦点を当てます。

{{% /alert %}}

bearer token を生成するには、OAuth クライアントの identifier と secret の値を知っている必要があります。そのうえで、エンドポイント `oauth/tokens` に必要なペイロードを付けて POST リクエストを行います。

使用するペイロードは次のフォーマットでなければなりません:

```json
{
  "client_id": "CLIENT_IDENTIFIER",
  "client_secret": "CLIENT_SECRET",
  "grant_type": "client_credentials",
  "scope": "SCOPE VALUES TO USE"
}
```

返されるボディの `access_token` 属性が、bearer token として使う値です。

### bearer token の失効

#### UI 経由

UI 経由で bearer token を失効させるには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > OAuth clients` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/oauth-clients)
1. bearer token を失効させたい OAuth クライアントを見つけます
1. OAuth クライアントの右側の縦に並んだ 3 点リーダーをクリックします
1. `View tokens` をクリックします
1. 失効させたい bearer token を見つけ、右側の縦に並んだ 3 点リーダーをクリックします
1. `Delete` をクリックします
1. 確認のポップアップで `Delete` をクリックします

#### API 経由

API 経由で bearer token を失効させるには、その bearer token の ID を知っている必要があります。そのうえで、エンドポイント `api/v2/oauth/tokens/:token_id`（`:token_id` を bearer token の ID に置き換えます）に DELETE リクエストを行います。

API 経由で bearer token を生成する通常のプロセスでは、生成された bearer token の ID を知らない可能性が非常に高いです。そのため、分かっている情報（OAuth クライアントの identifier と bearer token そのもの）を使って、その ID にたどり着く必要があるかもしれません。

例として、OAuth クライアントの identifier が `test123`、bearer token が `abcdefg123456789` の場合のプロセスは次のようになります:

```ruby
client_identifier = 'test123'
bearer_token = 'abcdefg123456789'

# Get the OAuth client object

url = 'api/v2/oauth/clients'
oauth_clients = request_with_retry(zendesk_client, :get, url)
client_to_use = oauth_clients['clients'].detect { |c| c['identifier'] == client_identifier }

# Get the bearer token object

url = "api/v2/oauth/tokens?client_id=#{client_to_use['id']}"
tokens = request_with_retry(zendesk_client, :get, url)
token_to_use = tokens['tokens'].detect { |t| t['token'] == "...#{bearer_token[-10..]}" }

# Revoke it

url = "api/v2/oauth/tokens/#{token_to_use['id']}"
request_with_retry(zendesk_client, :delete, url)
```

## 管理者タスク

{{% alert title="危険" color="danger" %}}

**セキュリティ上の考慮事項:**

- OAuth クライアントは管理者レベルのタスクを実行できるため、極めて危険である可能性があります。

{{% /alert %}}

### OAuth クライアントを作成する

OAuth クライアントを作成するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > OAuth clients` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/oauth-clients)
1. `Add OAuth client` をクリックします
1. 必要な情報を入力します
1. `Save` をクリックします
1. `Secret` の値をどこかにコピーしておきます（bearer token の生成時に必要になります）
1. `Save` をクリックします
1. `Enforce expiration` をクリックして確認します

### OAuth クライアントを編集する

OAuth クライアントを編集するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > OAuth clients` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/oauth-clients)
1. 編集したい OAuth クライアントを見つけます
1. OAuth クライアントの右側の縦に並んだ 3 点リーダーをクリックし、`Edit` をクリックします
1. 変更したい値を変更します
1. `Save` をクリックします

### OAuth クライアントを削除する

OAuth クライアントを削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > OAuth clients` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/oauth-clients)
1. 削除したい OAuth クライアントを見つけます
1. OAuth クライアントの右側の縦に並んだ 3 点リーダーをクリックし、`Delete` をクリックします
1. 確認のため `Delete client` をクリックします
