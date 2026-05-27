---
title: 'Webhooks'
description: 'Zendesk webhook に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/webhooks/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
lastmod: 2026-05-26T12:05:00-05:00
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk webhook の作成、編集、管理方法を説明します。管理者は [管理者向けタスク](#administrator-tasks)のセクションを確認してください。

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Standard`
  - **注**: 一部の特殊な webhook は Zendesk 内で手動管理されています（そのため、アドホックなデプロイ方法が使われます）
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/webhooks)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/webhooks)

{{% /alert %}}

## Understanding webhooks

### What are webhooks

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems) によると:

> webhook は、Zendesk Support でトリガーやオートメーションが発火するなどのイベントに応じて、指定された URL に HTTP リクエストを送信します。Web 開発者は通常、別のシステムの動作を呼び出すために webhook を使用します。

簡単に言えば、別のシステムに対して行われる HTTP リクエストです。これは、GitLab Issue の作成、Slack への通知などに使用できます。

### Using a webhook in Zendesk

webhook は Zendesk の他の項目（通常は Zendesk のイベント、オートメーション、トリガー）によってのみ使用されます。そのため、これらを「直接」使うことはありません。代わりに、トリガーとなるオブジェクトが実行されたときに「間接的に」使われます。

### How we manage webhooks

現在、すべての webhook は Zendesk 自体の中で管理しています。

## Creating webhooks as a non-admin

webhook の作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動の対応が必要なためです）。

## Editing webhooks as a non-admin

webhook の変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動の対応が必要なためです）。

## Deleting webhooks as a non-admin

webhook の削除については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動の対応が必要なためです）。

## Administrator tasks

{{% alert title="Note" color="primary" %}}

- このセクション内のすべての項目には、Zendesk への `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### Viewing webhooks in Zendesk

1. 対象の Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > Webhooks > Webhooks` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/webhooks/webhooks)

webhook の名前をクリックすると、詳細情報を確認できます。

### Viewing logs for a webhook

webhook のログを表示するには:

1. [webhooks ページ](#viewing-webhooks-in-zendesk)に移動します
1. ログを表示したい webhook の名前をクリックします
1. `Activity` タブをクリックします

そこから、イベントの Invocation ID をクリックすると、より詳細な情報を確認できます。

### Testing a webhook

webhook をテストするには:

1. [webhooks ページ](#viewing-webhooks-in-zendesk)に移動します
1. ログを表示したい webhook の名前をクリックします
1. ページ右上の `Actions` リンクをクリックします
1. `Test Webhook` をクリックします
1. ペイロード情報を入力します（具体的に使用する内容は webhook 自体によって異なります）
1. `Send test` ボタンをクリックします

### Webhook subscriptions

webhook は、いつ実行するかを判断するために subscription を使用します。webhook の subscription の詳細については、[Zendesk のドキュメント](https://developer.zendesk.com/api-reference/webhooks/event-types/webhook-event-types/)を参照してください。

### Webhook request formats

Zendesk webhook で有効なリクエスト形式は次のとおりです:

- JSON (API value: `json`)
- XML (API value: `xml`)
- Form encoded (API value: `form_encoded`)

### Webhook authentication

webhook は次の認証方式を使用できます:

- None (API value: `none`)
- API Key (API value: `api_key`)
- Basic authentication (API value: `basic_auth`)
- Bearer token (API value: `bearer_token`)

これらがどのように機能するかの詳細については、[Zendesk のドキュメント](https://developer.zendesk.com/documentation/webhooks/webhook-security-and-authentication/)で確認できます。

### Creating a webhook

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成してください（そして作業を始める前に標準プロセスを通してください）。
- webhook を作成しただけでは、それが使用されるわけではないことを忘れないでください。

{{% /alert %}}

webhook のエンドポイントやカスタムヘッダーに機密情報が含まれていない場合は、同期リポジトリを利用できます。ただし、エンドポイントやカスタムヘッダーに API トークンやシークレットなどの機密情報が含まれている場合は、Zendesk 自体で作成する必要があります。可能な限り同期リポジトリを使用できる構成を常に優先すべきです。

同期リポジトリを使用して作成する場合、行う具体的な変更はリクエスト自体によって異なります。使用できる出発点となるテンプレートは次のとおりです:

```yaml
---
name: 'Name of webhook'
previous_name: 'Name of webhook'
description: 'Description of webhook'
status: 'active'
subscriptions:
- 'subscription_to_use'
endpoint: 'URL to use'
http_method: 'Method type to use'
request_format: 'Format of the request'
authentication: null
custom_headers: null
```

ピアがあなたの MR をレビューして承認したら、MR をマージできます。次のデプロイが発生したときに、Zendesk に同期されます。

Zendesk で手動で作成する必要がある場合:

1. [webhooks ページ](#viewing-webhooks-in-zendesk)に移動します
1. ページ右上の `Create webhook` ボタンをクリックします
1. webhook のタイプを選択します
   - Events: ユーザー作成、組織の変更など、Zendesk のイベントに基づきます
   - Trigger or automation: トリガーまたはオートメーションによって実行されます
1. （ページ右下の）`Next` をクリックします
1. `Events` タイプの webhook を作成する場合:
   1. 使用するイベントタイプを選択します
   1. （ページ右下の）`Next` をクリックします
1. webhook の名前を入力します
1. webhook の説明を入力します（任意）
1. エンドポイント URL（つまりペイロードの送信先）を入力します
1. リクエストメソッドを選択します
1. リクエスト形式を選択します
1. 使用する認証のタイプを入力します
1. 必要な追加ヘッダーを入力します（最大 5 つ）
1. 任意ですが、作成中の webhook をテストする機会があります。正しく動作することを確認するために、これを行うべきです。
   - ボタンをクリックするとテストプロンプトが表示されます。詳細は [Testing a webhook](#testing-a-webhook) を参照してください。
1. ページ右下の `Create webhook` ボタンをクリックします

### Editing a webhook

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成してください（そして作業を始める前に標準プロセスを通してください）。
- これは、webhook を使用するオブジェクトに対して、多くの深刻なダウンストリームの影響を及ぼす可能性があります。実行時には注意してください。

{{% /alert %}}

webhook を編集するには、それが同期リポジトリで管理されているか、Zendesk で直接管理されているかを判断する必要があります。

同期リポジトリで管理されている場合は、同期リポジトリで MR を作成する必要があります。行う具体的な変更はリクエスト自体によって異なります。ピアがあなたの MR をレビューして承認したら、MR をマージできます。次のデプロイが発生したときに、Zendesk に同期されます。

Zendesk で直接管理されている場合:

1. [webhooks ページ](#viewing-webhooks-in-zendesk)に移動します
1. 編集したい webhook の名前をクリックします
1. ページ右上の `Actions` リンクをクリックします
1. `Edit` をクリックします
1. 必要な変更を行います
1. 任意ですが、変更中の webhook をテストする機会があります。正しく動作することを確認するために、これを行うべきです。
   - ボタンをクリックするとテストプロンプトが表示されます。詳細は [Testing a webhook](#testing-a-webhook) を参照してください。
1. ページ右下の `Update` ボタンをクリックします

#### Changing the name of a webhook via the sync repo

webhook の名前を変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから、`name` 属性を変更します。これにより、同期処理が対象の webhook を引き続き見つけて更新できます。

### Updating authentication information for a webhook via the sync repo

使用する API キーを更新するなど、webhook の認証情報を更新する必要がある場合、同期リポジトリ自体で特別な手順を踏む必要があります:

1. 同期リポジトリに移動します
1. CI/CD 設定に移動します
   - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/webhooks/-/settings/ci_cd)
   - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/webhooks/-/settings/ci_cd)
1. `TOKENS` という名前の `file` タイプの CI/CD 変数を追加します

CI/CD 変数の内容は、必要な情報を含む JSON ブロックになります（配列で囲みます）。

例として、webhook `Do a thing` の `PRIVATE-TOKEN` の値を `abc123` に更新する必要がある場合、`TOKENS` CI/CD file 変数の内容は次のようになります:

```json
[
  {
    "name": "Do a thing",
    "PRIVATE-TOKEN": "abc123"
  }
]
```

これは次のデプロイ実行時に、同期リポジトリによって webhook `Do a thing` の `PRIVATE-TOKEN` の値を更新するために使用されます。

この方法は、1 回の更新で複数の webhook の認証情報を更新するために使用できます:

```json
[
  {
    "name": "Do a thing",
    "PRIVATE-TOKEN": "abc123"
  },
  {
    "name": "Do another thing",
    "PRIVATE-TOKEN": "def456"
  }
]
```

デプロイ実行の最後に、CI/CD file 変数 `TOKENS` を削除します（次のデプロイ実行時にその情報を使って不要な更新を強制的に行わないようにするためです）。

### Deactivating a webhook

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成してください（そして作業を始める前に標準プロセスを通してください）。
- これは、webhook を使用するオブジェクトに対して、多くの深刻なダウンストリームの影響を及ぼす可能性があります。実行時には注意してください。

{{% /alert %}}

webhook を無効化するには、それが同期リポジトリで管理されているか、Zendesk で直接管理されているかを判断する必要があります。

同期リポジトリで管理されている場合は、同期リポジトリで MR を作成する必要があります。この MR では、対応するトリガーの YAML ファイルに対して次の操作を行うべきです:

1. ファイルを `active` パスから `inactive` パスに移動します
1. `active` 属性の値を `false` に変更します

ピアがあなたの MR をレビューして承認したら、MR をマージできます。次のデプロイが発生したときに、Zendesk に同期されます。

Zendesk で直接管理されている場合:

1. [webhooks ページ](#viewing-webhooks-in-zendesk)に移動します
1. 無効化したい webhook の名前をクリックします
1. ページ右上の `Actions` リンクをクリックします
1. `Deactivate` をクリックします
1. `Deactivate webhook` をクリックして無効化を確認します

### Deleting a webhook

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成してください（そして作業を始める前に標準プロセスを通してください）。
- webhook を削除する際には、同期リポジトリからもファイルを削除する必要がある場合が多いです。

{{% /alert %}}

同期リポジトリは削除を実行しないため、これは Zendesk 自体で行う必要があります。

Zendesk で webhook を削除するには:

1. [webhooks ページ](#viewing-webhooks-in-zendesk)に移動します
1. 削除したい webhook の名前をクリックします
1. ページ右上の `Actions` リンクをクリックします
1. `Delete` をクリックします
1. `Delete webhook` をクリックして削除を確認します

### Performing an exception deployment

同期リポジトリで管理されている webhook に対して例外デプロイを実行するには、対象の webhook 同期プロジェクトに移動し、スケジュールパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、webhook の同期ジョブがトリガーされます。

## Monitoring

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/webhook-monitor)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/webhook-monitor)

{{% /alert %}}

### How it works

[GitLab のスケジュールパイプライン](https://docs.gitlab.com/ci/pipelines/schedules/)を使用して、`bin/process` スクリプトが毎時 15 分（UTC タイムゾーン）に実行されます。このスクリプトは次のことを行います:

- Zendesk インスタンス内のすべての webhook のリストを収集します
- 各 webhook のすべての invocation（過去 1 時間に実行されたもの）のリストを収集します
- invocation のリストをフィルタリングして、成功したすべての invocation を除外します
- 成功しなかった invocation ごとに Slack に投稿します

### Actioning on failed invocations

Zendesk インスタンスで失敗した invocation について通知を受けた場合は、invocation 自体を確認して次のステップを判断すべきです。実行する具体的なアクションは、失敗自体によって異なります:

- 失敗が Zendesk が使用するペイロードに起因する場合は、bug issue を起票します
- 失敗がエンドポイントに起因する場合:
  - 次の方法で invocation を再試行します:
    - 使用された `Request body` をコピーします
    - カスタムペイロードを使用して、[invocation に紐づく webhook をテストします](#testing-a-webhook)
  - 再試行が失敗した場合は、bug issue を起票します

### Making changes to the webhook monitor

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成してください（そして作業を始める前に標準プロセスを通してください）。

{{% /alert %}}

webhook monitor を変更するには、対応するプロジェクトリポジトリで MR を作成する必要があります。行う具体的な変更はリクエスト自体によって異なります。

ピアがあなたの MR をレビューして承認したら、MR をマージできます。これは `Ad-hoc` デプロイタイプなので、変更は次のスケジュール実行時に使用されます。

## Common issues and troubleshooting

これは、必要に応じて項目が追加されていく生きたセクションです。

### Not seeing webhook changes after a merge

webhook は `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが行われたとき）にのみデプロイされます。
