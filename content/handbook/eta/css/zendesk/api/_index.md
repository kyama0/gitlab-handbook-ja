---
title: 'API'
description: 'Zendesk API に関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/api/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T07:47:07+09:00"
translator: codex
stale: false
---

## Zendesk API を理解する

### Zendesk API とは

[Zendesk Support API](https://developer.zendesk.com/api-reference/ticketing/introduction/) は、さまざまな情報を取得したりさまざまなタスクを実行したりするために使用できる Zendesk エンドポイントのコレクションです。非常に堅牢で、私たちが頻繁に使用するものです。

### Zendesk API トークンとは

{{% alert title="警告" color="warning" %}}

Zendesk API トークンの使用は、2027-04-30 に[廃止される予定です](https://support.zendesk.com/hc/en-us/articles/10840968198042-Announcing-the-removal-of-API-tokens-as-an-authentication-method-for-API-requests)。

{{% /alert %}}

Zendesk API トークンは、Zendesk API リクエストの認証に使用します。これらのトークンは常に管理者レベルであり、より低い権限／ロールレベルでは発行できません。そのため、これらのトークンの使用と発行には常に注意してください。

### Zendesk 統合とは

Zendesk 統合は、Zendesk とサードパーティーサービス間の永続的な接続です。簡単に取り消せる API トークンとは異なり、統合は Zendesk の設定により深く組み込まれており、削除が大幅に困難です。統合は、永続的なアクセスを必要とする本番システムにのみ使用してください。

### API レート制限

Zendesk は API リクエストにレート制限を適用します。現在の制限とベストプラクティスについては、[Zendesk のレート制限ドキュメント](https://developer.zendesk.com/api-reference/introduction/rate-limits/)を参照してください。

### API トークンまたは統合をリクエストする

API トークンと統合の両方は、次の承認プロセスに従います。

1. **リクエストの提出**: [アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request)を作成します。
1. **マネージャーの承認**: リクエスターのマネージャーがリクエストを承認する必要があります。
1. **セキュリティレビュー**: Fullstack Engineer, Customer Support Systems がビジネス上の正当性をレビューします。
1. **決定**: 承認された場合、エンジニアがトークンまたは統合を作成します。

**主な違い:**

- **API トークン**: Zendesk で直接作成し、1Password 経由で共有します。
- **統合**: Integration bot アカウントを使用して作成します。プロセスは統合タイプによって異なります。

### Zendesk API への認証方法

#### 基本認証

{{% alert title="注記" color="primary" %}}

これは、本番 Zendesk インスタンスでは有効になっていません。

{{% /alert %}}

基本認証を使用して認証するには、Zendesk アカウントのユーザー名（メールアドレス）とパスワードを知っている必要があります。それらがあれば、直接使用するか、文字列を base64 にエンコードして（ヘッダー内で）使用できます。

そのまま使用する例:

```bash
curl https://example.zendesk.com/api/v2/users.json \
  -u jcolyer@example.com:my_password
```

ヘッダーで使用する例:

```bash
echo 'jcolyer@example.com:my_password' | base64
amNvbHllckBnaXRsYWIuY29tOm15X3Bhc3N3b3JkCg==

curl https://example.zendesk.com/api/v2/users.json \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tOm15X3Bhc3N3b3JkCg=="
```

#### API トークン認証

API トークン経由で認証するには、ユーザー名と該当する API トークンを知っている必要があります。それらがあれば、直接使用するか、文字列を base64 にエンコードして（ヘッダー内で）使用できます。API トークンを使用する場合、ユーザー名の後ろに /token を追加する必要があります。

そのまま使用する例:

```bash
curl https://example.zendesk.com/api/v2/users.json \
  -u jcolyer@example.com/token:api_token
```

ヘッダーで使用する例:

```bash
echo 'jcolyer@example.com/token:api_token' | base64
amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=

curl https://example.zendesk.com/api/v2/users.json \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

#### OAuth アクセストークン認証

OAuth アクセストークンを使用するには、最初に Zendesk で OAuth アプリを作成する必要があります（詳細については、[Zendesk のドキュメント](https://support.zendesk.com/hc/en-us/articles/4408845965210-Using-OAuth-authentication-with-your-application)を参照してください）。アクセストークンがあれば、これをヘッダーに渡します。

```bash
curl https://example.zendesk.com/api/v2/users.json \
  -H "Authorization: Bearer gErypPlm4dOVgGRvA1ZzMH5MQ3nLo8bo"
```

### Zendesk API の使用方法

{{% alert title="注記" color="primary" %}}

これは curl を介した Zendesk API のみに焦点を当てています。ライブラリの使用に関する詳細は、対応するライブラリのドキュメントを確認してください。

{{% /alert %}}

開始するには、使用するエンドポイントを知る必要があります。一般的に、クイックアクションで使用する最も一般的なエンドポイントは次のとおりです。

- [Zendesk Support API チケットエンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/)
- [Zendesk Support API ユーザーエンドポイント](https://developer.zendesk.com/api-reference/ticketing/users/users/)
- [Zendesk Support API 組織エンドポイント](https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/)

より管理的なタスクで使用する一般的なエンドポイントは次のとおりです。

- [Zendesk Support API チケットフォームエンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_forms/)
- [Zendesk Support API チケットフィールドエンドポイント](https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_fields/)
- [Zendesk Support API ビューエンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/views/)
- [Zendesk Support API トリガーエンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/triggers/)
- [Zendesk Support API マクロエンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/)
- [Zendesk Support API 自動化エンドポイント](https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/)

実行したいことを決定したら、対応する API エンドポイントのドキュメントに移動し、次の項目を確認します。

- リクエストタイプ
  - `GET`
  - `POST`
  - `PUT`
  - `PATCH`
  - `DELETE`
- エンドポイント URL
- 必須パラメーター

そこから、次の形式で curl コマンドを作成します。

```bash
curl ZENDESK_URL/api/v2/ENDPOINT \
  -X REQUEST_TYPE \
  -H HEADER_INFO \
  -u AUTHENTICATION \
  -d DATA_TO_USE
```

ここで:

- `ZENDESK_URL` は Zendesk インスタンスの URL です。
- `ENDPOINT` は使用するエンドポイントです。
- `-X REQUEST_TYPE` はドキュメントのリクエストタイプです（GET リクエストを行う場合は不要です）。
- `-H HEADER_INFO` は必要なヘッダー情報です（常に必要なわけではありません）。
- `-u AUTHENTICATION` はユーザー／パスワードまたはユーザー／トークンの組み合わせです（ヘッダーベースの認証を使用する場合は不要です）。
- `-d DATA_TO_USE` はリクエストとともに送信するデータです（常に必要なわけではありません）。

例として、自動化 `12345` の詳細を取得する場合、curl コマンドは次のようになります。

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo="
```

同様に、自動化 `12345` を更新して `active` を `false` に設定する（つまり無効化する）場合、curl コマンドは次のようになります。

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"automation": {"active": false}}'
```

自動化 `12345` を削除する場合、curl コマンドは次のようになります。

```bash
curl https://example.zendesk.com/api/v2/automations/12345 \
  -H "Authorization: Basic amNvbHllckBnaXRsYWIuY29tL3Rva2VuOmFwaV90b2tlbgo=" \
  -H "Content-Type: application/json" \
  -X DELETE
```

## 管理者タスク

{{% alert title="危険" color="danger" %}}

**セキュリティに関する考慮事項:**

- すべての Zendesk API トークンは管理者レベルであり、非常に危険です。絶対に必要な場合にのみ発行してください。
- 統合は API トークンよりも取り消すのが大幅に困難であり、より高いセキュリティリスクをもたらします。

**要件:**

- 統合は Integration bot エージェントアカウントを介して作成する必要があります。
- Zendesk US Government 向けの統合リクエストは、セキュリティ要件のため現在サポートされていません。

{{% /alert %}}

### トークン作成リクエスト

{{% alert title="重要" color="info" %}}

追跡および監査の目的で、Zendesk 内のトークンの説明はアクセスリクエスト Issue の URL にする必要があります。

{{% /alert %}}

API トークンのすべてのリクエストは、[アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request)を介して行う必要があります。

これには 2 つの例外があります。

- Customer Support Systems チームメンバーの個人利用の API トークン
- Support Systems のスクリプト／自動化などの API トークン

アクセスリクエストが作成されると、リクエスターのマネージャーがリクエストを承認する必要があります。

その後、インスタンスのプロビジョナー（従来は Fullstack Engineer, Customer Support Systems）がリクエストをレビューします。

このレビューでは、API トークンが提供する重要なアクセスレベルのため、各リクエストのビジネス上の理由とユースケースを慎重にレビューします。

受け入れ可能と判断された場合、Fullstack Engineer, Customer Support Systems が API トークンを作成します。API トークンを作成するには、次のとおりです。

1. Zendesk インスタンスの管理者ダッシュボードに移動します。
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（Sandbox）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（Sandbox）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > API tokens` に移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk Global（Sandbox）](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government（Sandbox）](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/api-tokens)
1. ページ右上の `Add API token` をクリックします。
1. 説明を入力します（アクセスリクエスト Issue の URL にする必要があることに注意してください）。
1. `Save` をクリックします。
1. `Token` フィールド内のトークンをコピーします。
1. もう一度 `Save` をクリックします。

API トークンはその後、1 回のみアクセスできる 1Password アイテムを介してリクエスターに共有されます。

### 統合リクエスト

統合のすべてのリクエストは、[アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=API_Token_Request)を介して行う必要があります。

アクセスリクエストが作成されると、リクエスターのマネージャーがリクエストを承認する必要があります。

その後、インスタンスのプロビジョナー（従来は Fullstack Engineer, Customer Support Systems）がリクエストをレビューします。

このレビューでは、統合が提供する重要なアクセスレベルのため、ビジネス上の理由とユースケースを慎重に分析します。統合はさらに高いリスクをもたらすため、可能な限り避ける必要があります。API トークンは迅速かつ容易に取り消せますが、統合は取り消せません。

受け入れ可能と判断された場合、Fullstack Engineer, Customer Support Systems が統合を作成します。

正確な方法は統合タイプによって異なります。セットアップ手順については、特定の統合のドキュメントを参照してください。適切な追跡と取り消し機能を確保するため、すべての統合は Zendesk インスタンスの Integration bot アカウントを使用して作成する必要があります。

### API トークンを取り消す

API トークンを取り消すには、次のとおりです。

1. Zendesk インスタンスの管理者ダッシュボードに移動します。
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（Sandbox）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（Sandbox）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > APIs > API tokens` に移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk Global（Sandbox）](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government（Sandbox）](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/api-tokens)
1. 該当するトークンを見つけ、トークンエントリの右端にある縦に並んだ 3 つの点をクリックします。
1. `Deactivate` をクリックします。
1. ポップアップボックス内の `Deactivate` をクリックして取り消しを確認します。

### 統合を取り消す

統合ごとに異なるため、ここでは詳細を説明できません。
