---
title: 'API'
description: 'Zendesk API に関するドキュメント'
date: 2025-12-23
upstream_path: /handbook/security/customer-support-operations/zendesk/api/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T20:47:52+00:00"
---

## Zendesk API を理解する

### Zendesk API とは

[Zendesk Support API](https://developer.zendesk.com/api-reference/ticketing/introduction/) は、さまざまな情報を取得したり、さまざまなタスクを実行したりするために使用できる Zendesk エンドポイントの集合です。非常に堅牢で、私たちが頻繁に使用するものです。

### Zendesk API トークンとは

Zendesk API トークンは、Zendesk API リクエストの認証に使用されます。これらのトークンは常に管理者レベルであり、それより低いパーミッション/ロールレベルでは発行できません。そのため、これらのトークンの使用と発行には常に注意を払う必要があります。

### Zendesk インテグレーションとは

Zendesk インテグレーションは、Zendesk とサードパーティサービス間の永続的な接続です。簡単に取り消せる API トークンとは異なり、インテグレーションは Zendesk の構成により深く埋め込まれており、削除がはるかに困難です。インテグレーションは、永続的なアクセスを必要とする本番システムでのみ使用すべきです。

### API レート制限

Zendesk は API リクエストにレート制限を適用します。現在の制限とベストプラクティスについては、[Zendesk のレート制限ドキュメント](https://developer.zendesk.com/api-reference/introduction/rate-limits/) を参照してください。

### API トークンまたはインテグレーションのリクエスト

API トークンとインテグレーションは、いずれも次の承認プロセスに従います:

1. **リクエストの提出**: [アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) を起票します
1. **マネージャーの承認**: 依頼者のマネージャーがリクエストを承認する必要があります
1. **セキュリティレビュー**: Fullstack Engineer, Customer Support Operations がビジネス上の正当性を確認します
1. **判断**: 承認された場合、エンジニアがトークンまたはインテグレーションを作成します

**主な違い:**

- **API トークン**: Zendesk で直接作成され、1Password 経由で共有
- **インテグレーション**: Integration ボットアカウントを使用して作成、プロセスはインテグレーションの種類によって異なる

### Zendesk API への認証方法

#### 基本認証

{{% alert title="Note" color="primary" %}}

これを行う機能は、本番の Zendesk インスタンスでは有効になっていません。

{{% /alert %}}

基本認証で認証するには、Zendesk アカウントのユーザー名 (メールアドレス) とパスワードを知っている必要があります。それらを使って、直接利用するか、文字列を base64 にエンコードして (ヘッダーで利用する) ことができます。

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

API トークンで認証するには、ユーザー名と該当 API トークンを知っている必要があります。それらを使って、直接利用するか、文字列を base64 にエンコードして (ヘッダーで利用する) ことができます。API トークンを使用する場合、ユーザー名の後に /token を追加する必要があります。

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

OAuth アクセストークンを使用するには、まず Zendesk で OAuth アプリを作成する必要があります (詳細は [Zendesk のドキュメント](https://support.zendesk.com/hc/en-us/articles/4408845965210-Using-OAuth-authentication-with-your-application) を参照)。アクセストークンを使って、それをヘッダーに渡します。

```bash
curl https://example.zendesk.com/api/v2/users.json \
  -H "Authorization: Bearer gErypPlm4dOVgGRvA1ZzMH5MQ3nLo8bo"
```

### Zendesk API の使い方

{{% alert title="Note" color="primary" %}}

これは、curl 経由の Zendesk API のみに焦点を当てています。ライブラリの使用に関する詳細については、対応するライブラリのドキュメントを参照してください。

{{% /alert %}}

開始するには、使用したいエンドポイントを知っておく必要があります。一般的に、すばやいアクションでよく使用される可能性のあるエンドポイントは次のとおりです:

- [Zendesk Support API Tickets エンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/)
- [Zendesk Support API Users エンドポイント](https://developer.zendesk.com/api-reference/ticketing/users/users/)
- [Zendesk Support API Organizations エンドポイント](https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/)

より管理的なタスクで使用される可能性のあるエンドポイントは次のとおりです:

- [Zendesk Support API Ticket Forms エンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_forms/)
- [Zendesk Support API Ticket Fields エンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_fields/)
- [Zendesk Support API Views エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/views/)
- [Zendesk Support API Triggers エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/triggers/)
- [Zendesk Support API Macros エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/)
- [Zendesk Support API Automations エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/)

何をしたいかを決定したら、対応する API エンドポイントのドキュメントに移動し、次の点を確認します:

- リクエストタイプ
  - `GET`
  - `POST`
  - `PUT`
  - `PATCH`
  - `DELETE`
- エンドポイント URL
- 必須パラメーター

そこから、次の形式で curl コマンドを作成します:

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
- `-X REQUEST_TYPE` はドキュメントから得たリクエストタイプ (GET リクエストの場合は不要)
- `-H HEADER_INFO` は必要なヘッダー情報 (常に必要なわけではありません)
- `-u AUTHENTICATION` はユーザー/パス、またはユーザー/トークンの組み合わせ (ヘッダーベースの認証を使用する場合は不要)
- `-d DATA_TO_USE` はリクエストとともに送信するデータ (常に必要なわけではありません)

例として、自動化 `12345` の詳細を取得したい場合、curl コマンドは次のようになります:

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

同様に、自動化 `12345` を更新して `active` を `false` に設定 (つまり無効化) したい場合、curl コマンドは次のようになります:

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"automation": {"active": false}}'
```

自動化 `12345` を削除する場合、curl コマンドは次のようになります:

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X DELETE
```

## 管理者タスク

{{% alert title="Danger" color="danger" %}}

**セキュリティ上の考慮事項:**

- すべての Zendesk API トークンは管理者レベルであり、極めて危険です。絶対に必要な場合にのみ発行してください。
- インテグレーションは API トークンよりも取り消しが大幅に困難で、より高いセキュリティリスクをもたらします。

**要件:**

- インテグレーションは Integration ボットエージェントアカウント経由で作成する必要があります。
- Zendesk US Government のインテグレーションリクエストは、セキュリティ要件のため現在サポートされていません。

{{% /alert %}}

### トークン作成リクエスト

{{% alert title="Important" color="info" %}}

Zendesk のトークン説明文は、追跡と監査のためにアクセスリクエスト Issue の URL でなければなりません。

{{% /alert %}}

API トークンのリクエストはすべて、[アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) 経由で行うべきです。

これには 2 つの例外があります:

- Customer Support Operations チームメンバーの個人利用のための API トークン
- Support Operations のスクリプト/自動化などのための API トークン

アクセスリクエストが起票されると、依頼者のマネージャーがリクエストを承認する必要があります。

その後、インスタンスのプロビジョナー (通常は Fullstack Engineer, Customer Support Operations) がリクエストをレビューします。

このレビューでは、API トークンが提供する重要なアクセスレベルのため、各リクエストのビジネス上の理由とユースケースを慎重に確認します。

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
1. ページ右上の `Add API token` をクリックします
1. 説明を入力します (アクセスリクエスト Issue の URL であるべきです)
1. `Save` をクリックします
1. `Token` フィールドのトークンをコピーします
1. もう一度 `Save` をクリックします

API トークンは、ワンタイムアクセス可能な 1Password アイテム経由で依頼者と共有されます。

### インテグレーションリクエスト

インテグレーションのリクエストはすべて、[アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) 経由で行うべきです。

アクセスリクエストが起票されると、依頼者のマネージャーがリクエストを承認する必要があります。

その後、インスタンスのプロビジョナー (通常は Fullstack Engineer, Customer Support Operations) がリクエストをレビューします。

このレビューでは、インテグレーションが提供する重要なアクセスレベルのため、ビジネス上の理由とユースケースを慎重に分析します。インテグレーションはさらに高いリスクをもたらすため、可能な限り避けるべきです。API トークンはすばやく簡単に取り消せますが、インテグレーションはそうではありません。

許容可能と判断された場合、Fullstack Engineer, Customer Support Operations がインテグレーションを作成します。

正確な手段はインテグレーションの種類によって異なります。セットアップ手順については、特定のインテグレーションのドキュメントを参照してください。すべてのインテグレーションは、適切な追跡と取り消しの能力を確保するために、Zendesk インスタンスの Integration ボットアカウントを使用して作成しなければなりません。

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
1. 該当のトークンを見つけ、その縦三点リーダー (トークンエントリの右端) をクリックします
1. `Deactivate` をクリックします
1. ポップアップの `Deactivate` をクリックして取り消しを確定します

### インテグレーションの取り消し

インテグレーションごとに異なるため、ここでは詳細を提供できません。
