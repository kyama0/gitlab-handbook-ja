---
title: 'API'
description: 'Zendesk API に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/api/
upstream_sha: 7b4218e2684ab0e2d919cef32fcfba84065bf46b
lastmod: 2026-06-04T12:53:57-05:00
translated_at: "2026-06-06T12:00:00Z"
translator: claude
stale: false
---

## Zendesk API を理解する

### Zendesk API とは

[Zendesk Support API](https://developer.zendesk.com/api-reference/ticketing/introduction/) は、さまざまな情報を取得したり、さまざまなタスクを実行したりするために使用できる Zendesk のエンドポイント群です。非常に堅牢で、私たちもかなり頻繁に使用しています。

### Zendesk API トークンとは

{{% alert title="警告" color="warning" %}}

Zendesk API トークンの使用は [2027-04-30 に非推奨化されます](https://support.zendesk.com/hc/en-us/articles/10840968198042-Announcing-the-removal-of-API-tokens-as-an-authentication-method-for-API-requests)。

{{% /alert %}}

Zendesk API トークンは、Zendesk API リクエストの認証に使用されます。これらのトークンは常に管理者レベルであり、それより低い権限／ロールのレベルで発行することはできません。そのため、これらのトークンを使用および発行する際は常に注意が必要です。

### Zendesk インテグレーションとは

Zendesk インテグレーションは、Zendesk とサードパーティサービスとの間の永続的な接続です。簡単に取り消せる API トークンとは異なり、インテグレーションは Zendesk の設定により深く組み込まれており、削除するのは大幅に困難です。インテグレーションは、永続的なアクセスを必要とする本番システムにのみ使用してください。

### API レート制限

Zendesk は API リクエストにレート制限を適用します。現在の制限とベストプラクティスについては、[Zendesk レート制限のドキュメント](https://developer.zendesk.com/api-reference/introduction/rate-limits/)を参照してください。

### API トークンまたはインテグレーションのリクエスト

API トークンとインテグレーションは、いずれも次の承認プロセスに従います。

1. **リクエストの提出**: [アクセスリクエストの Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) を作成します
1. **マネージャーの承認**: リクエスト者のマネージャーがリクエストを承認する必要があります
1. **セキュリティレビュー**: Fullstack Engineer, Customer Support Operations がビジネス上の正当性をレビューします
1. **決定**: 承認された場合、エンジニアがトークンまたはインテグレーションを作成します

**主な違い:**

- **API トークン**: Zendesk で直接作成し、1Password を介して共有します
- **インテグレーション**: Integration bot アカウントを使用して作成し、プロセスはインテグレーションの種類によって異なります

### Zendesk API への認証方法

#### Basic 認証

{{% alert title="注意" color="primary" %}}

これを実行する機能は、本番の Zendesk インスタンスでは有効化されていません。

{{% /alert %}}

Basic 認証を使用して認証するには、Zendesk アカウントのユーザー名（メールアドレス）とパスワードを知っている必要があります。これらが手元にあれば、それらを直接使用するか、文字列を base64 にエンコードして（ヘッダーで使用）できます。

そのまま使用する例:

```bash
curl https://example.zendesk.com/api/v2/users.json \
  -u jcolyer@example.com:my_password
```

ヘッダーを介して使用する例:

```bash
echo 'jcolyer@example.com:my_password' | base64
amNvbHllckBnaXRsYWIuY29tOm15X3Bhc3N3b3JkCg==

curl https://example.zendesk.com/api/v2/users.json \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tOm15X3Bhc3N3b3JkCg=="
```

#### API トークン認証

API トークンを介して認証するには、ユーザー名と該当の API トークンを知っている必要があります。これらが手元にあれば、それらを直接使用するか、文字列を base64 にエンコードして（ヘッダーで使用）できます。API トークンを使用する場合は、ユーザー名の後に /token を追加する必要があります。

そのまま使用する例:

```bash
curl https://example.zendesk.com/api/v2/users.json \
  -u jcolyer@example.com/token:api_token
```

ヘッダーを介して使用する例:

```bash
echo 'jcolyer@example.com/token:api_token' | base64
amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=

curl https://example.zendesk.com/api/v2/users.json \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

#### OAuth アクセストークン認証

OAuth アクセストークンを使用するには、まず Zendesk で OAuth アプリを作成する必要があります（詳細は [Zendesk のドキュメント](https://support.zendesk.com/hc/en-us/articles/4408845965210-Using-OAuth-authentication-with-your-application)を参照してください）。アクセストークンが手元にあれば、それをヘッダーに渡します。

```bash
curl https://example.zendesk.com/api/v2/users.json \
  -H "Authorization: Bearer gErypPlm4dOVgGRvA1ZzMH5MQ3nLo8bo"
```

### Zendesk API の使用方法

{{% alert title="注意" color="primary" %}}

これは curl を介した Zendesk API のみに焦点を当てています。ライブラリの使用に関する詳細は、該当ライブラリのドキュメントを確認してください。

{{% /alert %}}

開始するには、使用したいエンドポイントを知っている必要があります。一般的に、クイックなアクションで使用する可能性が最も高いものは次のとおりです。

- [Zendesk Support API Tickets エンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/)
- [Zendesk Support API Users エンドポイント](https://developer.zendesk.com/api-reference/ticketing/users/users/)
- [Zendesk Support API Organizations エンドポイント](https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/)

より管理的なタスクで使用する可能性が高いものは次のとおりです。

- [Zendesk Support API Ticket Forms エンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_forms/)
- [Zendesk Support API Ticket Fields エンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_fields/)
- [Zendesk Support API Views エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/views/)
- [Zendesk Support API Triggers エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/triggers/)
- [Zendesk Support API Macros エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/)
- [Zendesk Support API Automations エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/)

実行したいことを決定したら、対応する API エンドポイントのドキュメントに移動し、次の点をメモします。

- リクエストの種類
  - `GET`
  - `POST`
  - `PUT`
  - `PATCH`
  - `DELETE`
- エンドポイントの URL
- 必須のパラメータ

そこから、次の形式で curl コマンドを作成します。

```bash
curl ZENDESK_URL/api/v2/ENDPOINT \
  -X REQUEST_TYPE \
  -H HEADER_INFO \
  -u AUTHENTICATION \
  -d DATA_TO_USE
```

各項目の意味は次のとおりです。

- `ZENDESK_URL` は Zendesk インスタンスの URL です
- `ENDPOINT` は使用するエンドポイントです
- `-X REQUEST_TYPE` はドキュメントに記載されたリクエストの種類です（GET リクエストを行う場合は不要）
- `-H HEADER_INFO` は必要なヘッダー情報です（常に必要なわけではありません）
- `-u AUTHENTICATION` はユーザー/パスワードまたはユーザー/トークンの組み合わせです（ヘッダーベースの認証を使用する場合は不要）
- `-d DATA_TO_USE` はリクエストとともに送信するデータです（常に必要なわけではありません）

例として、オートメーション `12345` の詳細を取得したい場合、curl コマンドは次のようになります。

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

同様に、オートメーション `12345` を更新して `active` を `false` に設定する（つまり無効化する）場合、curl コマンドは次のようになります。

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"automation": {"active": false}}'
```

オートメーション `12345` を削除したい場合、curl コマンドは次のようになります。

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X DELETE
```

## 管理者タスク

{{% alert title="危険" color="danger" %}}

**セキュリティに関する考慮事項:**

- すべての Zendesk API トークンは管理者レベルであり、極めて危険です。どうしても必要な場合にのみ発行してください。
- インテグレーションは API トークンよりも取り消しが大幅に困難であり、より高いセキュリティリスクをもたらします。

**要件:**

- インテグレーションは Integration bot エージェントアカウントを介して作成する必要があります。
- Zendesk US Government 向けのインテグレーションリクエストは、セキュリティ要件のため現在サポートされていません。

{{% /alert %}}

### トークン作成リクエスト

{{% alert title="重要" color="info" %}}

Zendesk のトークンの説明は、追跡と監査の目的で、アクセスリクエストの Issue の URL にする必要があります。

{{% /alert %}}

API トークンのすべてのリクエストは、[アクセスリクエストの Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) を介して行う必要があります。

これには 2 つの例外があります。

- Customer Support Operations チームメンバーの個人使用のための API トークン
- Support Operations のスクリプト／オートメーション／その他のための API トークン

アクセスリクエストが作成されると、リクエスト者のマネージャーがリクエストを承認する必要があります。

それが完了すると、そのインスタンスのプロビジョナー（通常は Fullstack Engineer, Customer Support Operations）がリクエストをレビューします。

このレビューでは、API トークンが提供する重要なアクセスレベルのため、各リクエストのビジネス上の理由とユースケースを慎重にレビューします。

許容可能と判断された場合、Fullstack Engineer, Customer Support Operations が API トークンを作成します。API トークンを作成するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > API tokens` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/api-tokens)
1. ページの右上にある `Add API token` をクリックします
1. 説明を入力します（説明はアクセスリクエストの Issue の URL にする必要があることを忘れないでください）
1. `Save` をクリックします
1. `Token` フィールドのトークンをコピーします
1. もう一度 `Save` をクリックします

その後、API トークンはワンタイムアクセス可能な 1Password アイテムを介してリクエスト者と共有されます。

### インテグレーションリクエスト

インテグレーションのすべてのリクエストは、[アクセスリクエストの Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) を介して行う必要があります。

アクセスリクエストが作成されると、リクエスト者のマネージャーがリクエストを承認する必要があります。

それが完了すると、そのインスタンスのプロビジョナー（通常は Fullstack Engineer, Customer Support Operations）がリクエストをレビューします。

このレビューでは、インテグレーションが提供する重要なアクセスレベルのため、ビジネス上の理由とユースケースを慎重に分析します。インテグレーションはさらに高いリスクをもたらすため、可能な限り避けるべきです。API トークンはすばやく簡単に取り消せますが、インテグレーションはそうではありません。

許容可能と判断された場合、Fullstack Engineer, Customer Support Operations がインテグレーションを作成します。

このための正確な手段は、インテグレーションの種類によって異なります。セットアップ手順については、該当インテグレーションのドキュメントを参照してください。すべてのインテグレーションは、適切な追跡と取り消しの機能を確保するため、Zendesk インスタンスの Integration bot アカウントを使用して作成する必要があります。

### API トークンの取り消し

API トークンを取り消すには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > API tokens` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/api-tokens)
1. 該当のトークンを見つけ、（トークンエントリの右端にある）縦に並んだ 3 つの点をクリックします
1. `Deactivate` をクリックします
1. ポップアップボックスで `Deactivate` をクリックして取り消しを確認します

### インテグレーションの取り消し

ここでは具体的な手順を示すことはできません。インテグレーションごとに異なるためです。
