---
title: 'OAuth クライアント'
description: 'OAuth クライアントに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/oauth-clients/
upstream_sha: f15ab5a3da7a00a0393f92b1eb69968e8abddf52
translated_at: "2026-06-04T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-04T12:53:57-05:00"
---

## Zendesk OAuth クライアントを理解する

### Grant タイプ

Grant タイプの情報については、[Zendesk のドキュメント](https://developer.zendesk.com/api-reference/ticketing/oauth/grant_type_tokens/) を参照してください。

なお、私たちは [client_credentials](https://developer.zendesk.com/api-reference/ticketing/oauth/grant_type_tokens/#client-credentials-grant-type) Grant タイプの使用を推奨します。

### スコープ

スコープの情報については、[Zendesk のドキュメント](https://developer.zendesk.com/api-reference/ticketing/oauth/grant_type_tokens/#scope) を参照してください。

## OAuth クライアントを使用する

OAuth クライアントを使用する一般的なプロセスは次のとおりです:

- Bearer トークンを生成する
- API アクションを実行する
- トークンを取り消す

### Bearer トークンの生成

{{% alert title="Note" color="primary" %}}

- Bearer トークンは API またはリダイレクト URL フローによってのみ生成できます。リダイレクト URL フローはセットアップごとに異なる可能性があるため、ここでは API の使用に焦点を当てます。

{{% /alert %}}

Bearer トークンを生成するには、OAuth クライアントの識別子とシークレット値を知っている必要があります。次に、必要なペイロードを含めてエンドポイント `oauth/tokens` に POST リクエストを送信します。

使用するペイロードは次の形式である必要があります:

```json
{
  "client_id": "CLIENT_IDENTIFIER",
  "client_secret": "CLIENT_SECRET",
  "grant_type": "client_credentials",
  "scope": "SCOPE VALUES TO USE"
}
```

返されるボディの `access_token` 属性が、Bearer トークンとして使用するものです。

### Bearer トークンの取り消し

#### UI から

UI から Bearer トークンを取り消すには:

1. Zendesk インスタンスの管理者ダッシュボードに移動します。
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > OAuth clients` に移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/oauth-clients)
1. Bearer トークンを取り消したい OAuth クライアントを見つけます。
1. OAuth クライアントの右側にある縦の 3 つの点をクリックします。
1. `View tokens` をクリックします。
1. 取り消す Bearer トークンを見つけ、右側にある縦の 3 つの点をクリックします。
1. `Delete` をクリックします。
1. ポップアップで `Delete` をクリックして確認します。

#### API から

API から Bearer トークンを取り消すには、Bearer トークンの ID を知っている必要があります。次に、エンドポイント `api/v2/oauth/tokens/:token_id`（`:token_id` を Bearer トークンの ID に置き換える）に DELETE リクエストを送信します。

API から Bearer トークンを生成する通常のプロセスでは、生成された Bearer トークンの ID を知らない可能性が高いです。そのため、わかっていること（OAuth クライアントの識別子と Bearer トークン自体）を使用してその目的に到達する必要があるかもしれません。

例として、OAuth クライアント識別子 `test123` と Bearer トークン `abcdefg123456789` の場合のプロセスは次のようになります:

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

{{% alert title="Danger" color="danger" %}}

**セキュリティ上の考慮事項:**

- OAuth クライアントは管理者レベルのタスクを実行でき、非常に危険な可能性があります。

{{% /alert %}}

### OAuth クライアントの作成

OAuth クライアントを作成するには:

1. Zendesk インスタンスの管理者ダッシュボードに移動します。
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > OAuth clients` に移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/oauth-clients)
1. `Add OAuth client` をクリックします。
1. 必要な情報を入力します。
1. `Save` をクリックします。
1. `Secret` 値をどこかにコピーします（Bearer トークンの生成に必要になります）。
1. `Save` をクリックします。
1. `Enforce expiration` をクリックして確認します。

### OAuth クライアントの編集

OAuth クライアントを編集するには:

1. Zendesk インスタンスの管理者ダッシュボードに移動します。
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > OAuth clients` に移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/oauth-clients)
1. 編集したい OAuth クライアントを見つけます。
1. OAuth クライアントの右側にある縦の 3 つの点をクリックし、`Edit` をクリックします。
1. 変更したい値を変更します。
1. `Save` をクリックします。

### OAuth クライアントの削除

OAuth クライアントを削除するには:

1. Zendesk インスタンスの管理者ダッシュボードに移動します。
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > OAuth clients` に移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/oauth-clients)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/oauth-clients)
1. 削除したい OAuth クライアントを見つけます。
1. OAuth クライアントの右側にある縦の 3 つの点をクリックし、`Delete` をクリックします。
1. `Delete client` をクリックして削除を確認します。
