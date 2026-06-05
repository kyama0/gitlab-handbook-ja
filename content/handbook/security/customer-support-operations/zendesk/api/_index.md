---
title: 'API'
description: 'Zendesk API に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/api/
upstream_sha: f15ab5a3da7a00a0393f92b1eb69968e8abddf52
translated_at: "2026-06-04T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-04T12:53:57-05:00"
---

## Zendesk API を理解する

### Zendesk API とは

[Zendesk Support API](https://developer.zendesk.com/api-reference/ticketing/introduction/) は、各種情報の取得やさまざまな作業に使える Zendesk のエンドポイント群です。非常に堅牢で、私たちもよく利用しています。

### Zendesk API トークンとは

{{% alert title="Warning" color="warning" %}}

Zendesk API トークンの利用は 2027-04-30 に [廃止予定](https://support.zendesk.com/hc/en-us/articles/10840968198042-Announcing-the-removal-of-API-tokens-as-an-authentication-method-for-API-requests) です。

{{% /alert %}}

Zendesk API トークンは、Zendesk API リクエストの認証に使われます。これらのトークンは常に管理者レベルであり、それより低い権限・ロールレベルでは発行できません。そのため、これらのトークンの利用と発行には常に注意してください。

### Zendesk integration とは

Zendesk integration とは、Zendesk とサードパーティサービスとの永続的な接続です。簡単に取り消せる API トークンとは異なり、integration は Zendesk の設定に深く埋め込まれており、削除するのは著しく難しくなります。integration は、永続的なアクセスを必要とする本番システムに対してのみ利用してください。

### API レート制限

Zendesk は API リクエストにレート制限を適用しています。現在の制限とベストプラクティスについては [Zendesk rate limits ドキュメント](https://developer.zendesk.com/api-reference/introduction/rate-limits/) を参照してください。

### API トークンまたは integration をリクエストする

API トークンと integration はどちらも、次の承認プロセスに従います。

1. **リクエストを提出**: [access request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) を作成する
1. **マネージャーの承認**: リクエスト者のマネージャーがリクエストを承認する必要があります
1. **セキュリティレビュー**: Fullstack Engineer, Customer Support Operations がビジネス上の正当性をレビューします
1. **判断**: 承認されたら、エンジニアがトークンまたは integration を作成します

**主な違い:**

- **API トークン**: Zendesk で直接作成し、1Password 経由で共有
- **Integration**: Integration bot アカウントで作成し、プロセスは integration の種類によって異なる

### Zendesk API への認証方法

#### Basic 認証

{{% alert title="Note" color="primary" %}}

これを行う機能は、私たちの本番 Zendesk インスタンスでは有効になっていません。

{{% /alert %}}

Basic 認証で認証するには、Zendesk アカウントのユーザー名 (メールアドレス) とパスワードが必要です。これらを直接渡すか、文字列を base64 エンコードしてヘッダーに使うことができます。

そのまま使う例:

```bash
curl https://example.zendesk.com/api/v2/users.json \
  -u jcolyer@example.com:my_password
```

ヘッダー経由で使う例:

```bash
echo 'jcolyer@example.com:my_password' | base64
amNvbHllckBnaXRsYWIuY29tOm15X3Bhc3N3b3JkCg==

curl https://example.zendesk.com/api/v2/users.json \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tOm15X3Bhc3N3b3JkCg=="
```

#### API トークン認証

API トークンで認証するには、ユーザー名と該当する API トークンが必要です。これらを直接渡すか、文字列を base64 エンコードしてヘッダーに使うことができます。API トークンを使う場合、ユーザー名の後ろに /token を付ける必要があります。

そのまま使う例:

```bash
curl https://example.zendesk.com/api/v2/users.json \
  -u jcolyer@example.com/token:api_token
```

ヘッダー経由で使う例:

```bash
echo 'jcolyer@example.com/token:api_token' | base64
amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=

curl https://example.zendesk.com/api/v2/users.json \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

#### OAuth アクセストークン認証

OAuth アクセストークンを使うには、まず Zendesk で OAuth アプリを作成する必要があります (詳細は [Zendesk ドキュメント](https://support.zendesk.com/hc/en-us/articles/4408845965210-Using-OAuth-authentication-with-your-application) を参照してください)。アクセストークンを取得したら、ヘッダーで渡します。

```bash
curl https://example.zendesk.com/api/v2/users.json \
  -H "Authorization: Bearer gErypPlm4dOVgGRvA1ZzMH5MQ3nLo8bo"
```

### Zendesk API の使い方

{{% alert title="Note" color="primary" %}}

ここでは curl 経由の Zendesk API のみを扱います。ライブラリを使う場合の詳細は、それぞれのライブラリのドキュメントを参照してください。

{{% /alert %}}

始めるには、利用したいエンドポイントを知る必要があります。一般的に、ちょっとした作業でよく使うものは次のとおりです。

- [Zendesk Support API Tickets エンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/)
- [Zendesk Support API Users エンドポイント](https://developer.zendesk.com/api-reference/ticketing/users/users/)
- [Zendesk Support API Organizations エンドポイント](https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/)

管理者向けの作業でよく使うものは次のとおりです。

- [Zendesk Support API Ticket Forms エンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_forms/)
- [Zendesk Support API Ticket Fields エンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_fields/)
- [Zendesk Support API Views エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/views/)
- [Zendesk Support API Triggers エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/triggers/)
- [Zendesk Support API Macros エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/)
- [Zendesk Support API Automations エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/)

何をしたいか決まったら、対応する API エンドポイントのドキュメントで以下を確認します。

- リクエストタイプ
  - `GET`
  - `POST`
  - `PUT`
  - `PATCH`
  - `DELETE`
- エンドポイント URL
- 必須パラメータ

そこから、次のフォーマットの curl コマンドを組み立てます。

```bash
curl ZENDESK_URL/api/v2/ENDPOINT \
  -X REQUEST_TYPE \
  -H HEADER_INFO \
  -u AUTHENTICATION \
  -d DATA_TO_USE
```

ここで、

- `ZENDESK_URL` は Zendesk インスタンスの URL
- `ENDPOINT` は利用するエンドポイント
- `-X REQUEST_TYPE` はドキュメントに記載のリクエストタイプ (GET リクエストの場合は不要)
- `-H HEADER_INFO` は必要なヘッダー情報 (常に必要というわけではない)
- `-u AUTHENTICATION` は user/pass または user/token の組み合わせ (ヘッダー認証を使う場合は不要)
- `-d DATA_TO_USE` はリクエストと一緒に送るデータ (常に必要というわけではない)

例として、automation `12345` の詳細を取得したい場合、curl コマンドは次のようになります。

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

同様に、automation `12345` の `active` を `false` に更新 (つまり無効化) したい場合、curl コマンドは次のようになります。

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"automation": {"active": false}}'
```

automation `12345` を削除したい場合、curl コマンドは次のようになります。

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X DELETE
```

## 管理者向けの作業

{{% alert title="Danger" color="danger" %}}

**セキュリティ上の考慮事項:**

- すべての Zendesk API トークンは管理者レベルで、極めて危険です。本当に必要な場合のみ発行してください。
- Integration は API トークンよりも取り消しが著しく難しく、より高いセキュリティリスクをもたらします。

**要件:**

- Integration は Integration bot エージェントアカウントで作成する必要があります。
- Zendesk US Government に対する integration リクエストは、セキュリティ要件の都合により現在サポートされていません。

{{% /alert %}}

### トークン作成リクエスト

{{% alert title="Important" color="info" %}}

Zendesk 内のトークンの説明欄には、追跡と監査の目的で、対応する access request issue の URL を必ず記載してください。

{{% /alert %}}

API トークンに関するすべてのリクエストは、[access request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) 経由で行ってください。

これには 2 つの例外があります。

- Customer Support Operations チームメンバーの個人利用のための API トークン
- Support Operations のスクリプト/自動化等のための API トークン

access request が作成されたら、リクエスト者のマネージャーが承認する必要があります。

承認が済んだら、そのインスタンスのプロビジョナー (通例 Fullstack Engineer, Customer Support Operations) がリクエストをレビューします。

このレビューでは、API トークンが持つアクセスレベルの大きさを踏まえ、各リクエストのビジネス上の理由とユースケースを慎重に確認します。

問題ないと判断されたら、Fullstack Engineer, Customer Support Operations が API トークンを作成します。API トークンの作成手順は以下のとおりです。

1. Zendesk インスタンスの admin ダッシュボードに移動します
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
1. 説明を入力します (access request issue の URL にすることを忘れずに)
1. `Save` をクリックします
1. `Token` フィールドのトークンをコピーします
1. もう一度 `Save` をクリックします

その後、1Password の一度限りアクセス可能なアイテム経由で、リクエスト者と API トークンを共有します。

### Integration リクエスト

integration に関するすべてのリクエストは、[access request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request) 経由で行ってください。

access request が作成されたら、リクエスト者のマネージャーが承認する必要があります。

承認が済んだら、そのインスタンスのプロビジョナー (通例 Fullstack Engineer, Customer Support Operations) がリクエストをレビューします。

このレビューでは、integration が持つアクセスレベルの大きさを踏まえ、ビジネス上の理由とユースケースを慎重に分析します。Integration はさらに高いリスクをもたらすため、可能な限り避けるべきです。API トークンは素早く簡単に取り消せますが、integration はそうではありません。

問題ないと判断されたら、Fullstack Engineer, Customer Support Operations が integration を作成します。

その具体的な手段は integration の種類によって異なります。セットアップ手順は、各 integration のドキュメントを参照してください。すべての integration は、追跡と取り消し能力を確保するため、その Zendesk インスタンスの Integration bot アカウントで作成しなければなりません。

### API トークンの取り消し

API トークンを取り消すには:

1. Zendesk インスタンスの admin ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > API tokens` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/api-tokens)
1. 該当するトークンを探し、トークンエントリの右端にある縦三点アイコンをクリックします
1. `Deactivate` をクリックします
1. 表示されるポップアップの `Deactivate` をクリックして、取り消しを確定します

### Integration の取り消し

具体的な手順は integration ごとに異なるため、ここでは記載できません。
