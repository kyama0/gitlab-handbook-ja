---
title: 'OAuth Clients'
description: 'OAuth クライアントに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/oauth-clients/
upstream_sha: 7b4218e2684ab0e2d919cef32fcfba84065bf46b
lastmod: 2026-06-04T12:53:57-05:00
translated_at: "2026-06-06T12:00:00Z"
translator: claude
stale: false
---

## Zendesk の OAuth クライアントを理解する

### グラントタイプ

グラントタイプについては、[Zendesk のドキュメント](https://developer.zendesk.com/api-reference/ticketing/oauth/grant_type_tokens/)をご覧ください。

なお、私たちは [client_credentials](https://developer.zendesk.com/api-reference/ticketing/oauth/grant_type_tokens/#client-credentials-grant-type) グラントタイプの使用を推奨します。

### スコープ

スコープについては、[Zendesk のドキュメント](https://developer.zendesk.com/api-reference/ticketing/oauth/grant_type_tokens/#scope)をご覧ください。

## OAuth クライアントを使う

OAuth クライアントを使う一般的な流れは次のとおりです。

- ベアラートークンを生成する
- API アクションを実行する
- トークンを失効させる

### ベアラートークンを生成する

{{% alert title="Note" color="primary" %}}

- これらは API またはリダイレクト URL フローでのみ生成できます。リダイレクト URL フローはセットアップによって異なる場合があるため、ここでは API の使用に焦点を当てます。

{{% /alert %}}

ベアラートークンを生成するには、OAuth クライアントの識別子（identifier）とシークレット（secret）の値を知っておく必要があります。そのうえで、必要なペイロードとともにエンドポイント `oauth/tokens` に POST リクエストを行います。

使用するペイロードは次の形式にします。

```json
{
  "client_id": "CLIENT_IDENTIFIER",
  "client_secret": "CLIENT_SECRET",
  "grant_type": "client_credentials",
  "scope": "SCOPE VALUES TO USE"
}
```

返されたボディの中で、`access_token` 属性がベアラートークンとして使用するものです。

### ベアラートークンを失効させる

#### UI 経由

UI からベアラートークンを失効させるには次のようにします。

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
1. ベアラートークンを失効させたい OAuth クライアントを見つけます
1. その OAuth クライアントの右側にある縦に並んだ 3 つの点をクリックします
1. `View tokens` をクリックします
1. 失効させるベアラートークンを見つけ、その右側にある縦に並んだ 3 つの点をクリックします
1. `Delete` をクリックします
1. 確認のポップアップで `Delete` をクリックします

#### API 経由

API からベアラートークンを失効させるには、そのベアラートークンの ID を知っておく必要があります。そのうえで、エンドポイント `api/v2/oauth/tokens/:token_id`（`:token_id` をベアラートークンの ID に置き換えます）に DELETE リクエストを行います。

API でベアラートークンを生成する通常のプロセスでは、生成されたベアラートークンの ID を知らない可能性が非常に高いです。そのため、すでに知っていること（OAuth クライアントの識別子とベアラートークンそのもの）を使って、そこにたどり着く必要があるかもしれません。

例として、OAuth クライアントの識別子が `test123`、ベアラートークンが `abcdefg123456789` の場合のプロセスは次のようになります。

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

## 管理者のタスク

{{% alert title="Danger" color="danger" %}}

**セキュリティに関する考慮事項:**

- OAuth クライアントは管理者レベルのタスクを実行でき、極めて危険な場合があります。

{{% /alert %}}

### OAuth クライアントを作成する

OAuth クライアントを作成するには次のようにします。

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
1. `Secret` の値をどこかにコピーします（ベアラートークンの生成に必要になるため）
1. `Save` をクリックします
1. `Enforce expiration` をクリックして確認します

### OAuth クライアントを編集する

OAuth クライアントを編集するには次のようにします。

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
1. その OAuth クライアントの右側にある縦に並んだ 3 つの点をクリックし、`Edit` をクリックします
1. 変更したい値を変更します
1. `Save` をクリックします

### OAuth クライアントを削除する

OAuth クライアントを削除するには次のようにします。

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
1. その OAuth クライアントの右側にある縦に並んだ 3 つの点をクリックし、`Delete` をクリックします
1. 確認のために `Delete client` をクリックします
