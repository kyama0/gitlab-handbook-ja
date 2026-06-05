---
title: 'API'
description: 'Zendesk API に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/api/
upstream_sha: 228e83810bd79bddf58ab0b0b518b1d52bd74fb7
translated_at: "2026-06-05T21:08:33Z"
translator: claude
stale: false
lastmod: "2026-06-04T12:53:57-05:00"
---

## Zendesk API を理解する

### Zendesk API とは

[Zendesk Support API](https://developer.zendesk.com/api-reference/ticketing/introduction/) は、さまざまな情報を取得したり、さまざまなタスクを実行したりするために使用できる Zendesk エンドポイントのコレクションです。非常に堅牢で、私たちが頻繁に使用するものです。

### Zendesk API トークンとは

{{% alert title="警告" color="warning" %}}

Zendesk API トークンの使用は 2027-04-30 に [廃止される予定です](https://support.zendesk.com/hc/en-us/articles/10840968198042-Announcing-the-removal-of-API-tokens-as-an-authentication-method-for-API-requests)。

{{% /alert %}}

Zendesk API トークンは Zendesk API リクエストの認証に使用されます。これらのトークンは常に管理者レベルのものであり、より低い権限／ロールレベルで発行することはできません。そのため、これらのトークンの使用および発行には常に注意を払う必要があります。

### Zendesk インテグレーションとは

Zendesk インテグレーションは、Zendesk とサードパーティサービスとの間の永続的な接続です。簡単に取り消せる API トークンとは異なり、インテグレーションは Zendesk の設定により深く埋め込まれており、削除するのが大幅に困難です。インテグレーションは、永続的なアクセスを必要とする本番システムのみに使用する必要があります。

### API レート制限

Zendesk は API リクエストにレート制限を適用しています。現在の制限とベストプラクティスについては [Zendesk レート制限ドキュメント](https://developer.zendesk.com/api-reference/introduction/rate-limits/) を参照してください。

### API トークンまたはインテグレーションのリクエスト

API トークンとインテグレーションのいずれも、以下の承認プロセスに従います:

1. **リクエストの提出**: [アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) を作成する
1. **マネージャー承認**: リクエスト者のマネージャーがリクエストを承認する必要があります
1. **セキュリティレビュー**: Fullstack Engineer, Customer Support Operations がビジネス上の正当性をレビューします
1. **決定**: 承認された場合、エンジニアがトークンまたはインテグレーションを作成します

**主な違い:**

- **API トークン**: Zendesk で直接作成され、1Password で共有されます
- **インテグレーション**: Integration ボットアカウントを使用して作成され、プロセスはインテグレーションの種類によって異なります

### Zendesk API への認証方法

#### 基本認証

{{% alert title="注意" color="primary" %}}

これを行う機能は、本番 Zendesk インスタンスでは有効になっていません。

{{% /alert %}}

基本認証で認証するには、Zendesk アカウントのユーザー名（メール）とパスワードを知る必要があります。それらを使って、直接使用するか、文字列を base64 にエンコードしてヘッダー内で使用するかのいずれかが可能です。

そのまま使用する例:

```bash
curl https://example.zendesk.com/api/v2/users.json \
  -u jcolyer@example.com:my_password
```

ヘッダー経由で使用する例:

```bash
echo 'jcolyer@example.com:my_password' | base64
amNvbHllckBnaXRsYWIuY29tOm15X3Bhc3N3b3JkCg==

curl https://example.zendesk.com/api/v2/users.json \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tOm15X3Bhc3N3b3JkCg=="
```

#### API トークン認証

API トークン経由で認証するには、ユーザー名と該当する API トークンを知る必要があります。それらを使って、直接使用するか、文字列を base64 にエンコードしてヘッダー内で使用するかのいずれかが可能です。API トークンを使用する場合、ユーザー名の後に /token を追加する必要があります。

そのまま使用する例:

```bash
curl https://example.zendesk.com/api/v2/users.json \
  -u jcolyer@example.com/token:api_token
```

ヘッダー経由で使用する例:

```bash
echo 'jcolyer@example.com/token:api_token' | base64
amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=

curl https://example.zendesk.com/api/v2/users.json \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

#### OAuth アクセストークン認証

OAuth アクセストークンを使用するには、まず Zendesk で OAuth アプリを作成する必要があります（詳細は [Zendesk ドキュメント](https://support.zendesk.com/hc/en-us/articles/4408845965210-Using-OAuth-authentication-with-your-application) を参照）。アクセストークンを取得したら、それをヘッダーに渡します。

```bash
curl https://example.zendesk.com/api/v2/users.json \
  -H "Authorization: Bearer gErypPlm4dOVgGRvA1ZzMH5MQ3nLo8bo"
```

### Zendesk API の使用方法

{{% alert title="注意" color="primary" %}}

これは curl 経由での Zendesk API のみに焦点を当てています。ライブラリの使用に関する詳細については、該当するライブラリのドキュメントを確認してください。

{{% /alert %}}

開始するには、使用したいエンドポイントを知る必要があります。一般的に、クイックアクションで使用する可能性が最も高い一般的なものは:

- [Zendesk Support API Tickets エンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/)
- [Zendesk Support API Users エンドポイント](https://developer.zendesk.com/api-reference/ticketing/users/users/)
- [Zendesk Support API Organizations エンドポイント](https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/)

より管理的なタスクの場合、使用する可能性が高い一般的なものは:

- [Zendesk Support API Ticket Forms エンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_forms/)
- [Zendesk Support API Ticket Fields エンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_fields/)
- [Zendesk Support API Views エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/views/)
- [Zendesk Support API Triggers エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/triggers/)
- [Zendesk Support API Macros エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/)
- [Zendesk Support API Automations エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/)

何をしたいかを決定したら、該当する API エンドポイントドキュメントに移動し、以下に注意します:

- リクエストの種類
  - `GET`
  - `POST`
  - `PUT`
  - `PATCH`
  - `DELETE`
- エンドポイント URL
- 必要なパラメータ

そこから、以下の形式で curl コマンドを作成します:

```bash
curl ZENDESK_URL/api/v2/ENDPOINT \
  -X REQUEST_TYPE \
  -H HEADER_INFO \
  -u AUTHENTICATION \
  -d DATA_TO_USE
```

ここで:

- `ZENDESK_URL` は Zendesk インスタンスの URL
- `ENDPOINT` は使用するエンドポイント
- `-X REQUEST_TYPE` はドキュメントからのリクエストの種類（GET リクエストの場合は不要）
- `-H HEADER_INFO` は必要なヘッダー情報（常に必要なわけではない）
- `-u AUTHENTICATION` はユーザー／パスまたはユーザー／トークンの組み合わせ（ヘッダーベースの認証を使用する場合は不要）
- `-d DATA_TO_USE` はリクエストとともに送信するデータ（常に必要なわけではない）

例として、automation `12345` の詳細を取得したい場合、curl コマンドは次のようになります:

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

同様に、automation `12345` の `active` を `false` に設定（つまり非アクティブ化）したい場合、curl コマンドは次のようになります:

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"automation": {"active": false}}'
```

automation `12345` を削除したい場合、curl コマンドは次のようになります:

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X DELETE
```

## 管理者タスク

{{% alert title="危険" color="danger" %}}

**セキュリティに関する考慮事項:**

- すべての Zendesk API トークンは管理者レベルであり、極めて危険です。絶対に必要な場合のみ発行してください。
- インテグレーションは API トークンよりも取り消しが大幅に困難であり、より高いセキュリティリスクをもたらします。

**要件:**

- インテグレーションは Integration ボットエージェントアカウント経由で作成する必要があります。
- Zendesk US Government に対するインテグレーションリクエストは、セキュリティ要件のため現在サポートされていません。

{{% /alert %}}

### トークン作成リクエスト

{{% alert title="重要" color="info" %}}

Zendesk 内のトークン説明は、追跡および監査目的でアクセスリクエスト Issue の URL でなければなりません。

{{% /alert %}}

API トークンのすべてのリクエストは、[アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) 経由で行う必要があります。

これには 2 つの例外があります:

- Customer Support Operations チームメンバーの個人使用のための API トークン
- Support Operations スクリプト／自動化などのための API トークン

アクセスリクエストが作成されたら、リクエスト者のマネージャーがリクエストを承認する必要があります。

それが完了したら、インスタンスのプロビジョナー（伝統的には Fullstack Engineer, Customer Support Operations）がリクエストをレビューします。

このレビュー中、API トークンが提供する重要なアクセスレベルのため、各リクエストのビジネス上の理由とユースケースを慎重にレビューします。

許容可能と判断された場合、Fullstack Engineer, Customer Support Operations が API トークンを作成します。API トークンを作成するには:

1. Zendesk インスタンスの管理ダッシュボードに移動
   - [Zendesk Global（本番）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > API tokens` に移動
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/api-tokens)
1. ページ右上の `Add API token` をクリック
1. 説明を入力（アクセスリクエスト Issue の URL であるべきことを忘れずに）
1. `Save` をクリック
1. `Token` フィールドのトークンをコピー
1. もう一度 `Save` をクリック

その後、API トークンは 1 回限りアクセス可能な 1Password アイテム経由でリクエスト者と共有されます。

### インテグレーションリクエスト

インテグレーションのすべてのリクエストは、[アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) 経由で行う必要があります。

アクセスリクエストが作成されたら、リクエスト者のマネージャーがリクエストを承認する必要があります。

それが完了したら、インスタンスのプロビジョナー（伝統的には Fullstack Engineer, Customer Support Operations）がリクエストをレビューします。

このレビュー中、インテグレーションが提供する重要なアクセスレベルのため、ビジネス上の理由とユースケースを慎重に分析します。インテグレーションはさらに高いリスクをもたらすため、可能な限り避けるべきです。API トークンは迅速かつ簡単に取り消せますが、インテグレーションはそうではありません。

許容可能と判断された場合、Fullstack Engineer, Customer Support Operations がインテグレーションを作成します。

このための正確な方法は、インテグレーションの種類によって異なります。セットアップ手順については、特定のインテグレーションのドキュメントを参照してください。すべてのインテグレーションは、適切な追跡と取り消し機能を確保するため、Zendesk インスタンスの Integration ボットアカウントを使用して作成する必要があります。

### API トークンの取り消し

API トークンを取り消すには:

1. Zendesk インスタンスの管理ダッシュボードに移動
   - [Zendesk Global（本番）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > API tokens` に移動
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/api-tokens)
1. 該当するトークンを見つけ、3 つの縦の点（トークンエントリの右端）をクリック
1. `Deactivate` をクリック
1. ポップアップボックスで `Deactivate` をクリックして取り消しを確認

### インテグレーションの取り消し

これはインテグレーションごとに異なるため、ここで詳細を提供することはできません。
