---
title: 'Webhook'
description: 'Zendesk Webhook に関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/webhooks/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T08:09:48+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab で Zendesk Webhook を作成、編集、管理する方法を説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
  - **注記:** 一部の特別な Webhook は Zendesk で手動管理されます（そのため、アドホックなデプロイ方法を使用します）
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/webhooks)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/webhooks)

{{% /alert %}}

## Webhook を理解する

### Webhook とは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems)によると:

> Webhook は、Zendesk Support でトリガーや自動化が実行されるなどのイベントに応答して、指定された URL に HTTP リクエストを送信します。Web 開発者は通常、Webhook を使用して別のシステムの動作を呼び出します。

簡単に言うと、別のシステムに対して行う HTTP リクエストです。GitLab Issue の作成、Slack へのアラートなどに使用できます。

### Zendesk で Webhook を使用する

Webhook は、Zendesk 内の他の項目（通常は Zendesk のイベント、自動化、トリガー）によってのみ使用されます。そのため、直接使用するものではありません。トリガーとなるオブジェクトが実行されたときに、間接的に使用します。

### Webhook を管理する方法

現在、すべての Webhook を Zendesk 自体で管理しています。

## 非管理者として Webhook を作成する

Webhook を作成するには、[Feature Request Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要になるためです）。

## 非管理者として Webhook を編集する

Webhook を変更するには、[Feature Request Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要になるためです）。

## 非管理者として Webhook を削除する

Webhook を削除するには、[Feature Request Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要になるためです）。

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクション内のすべての項目には、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### Zendesk で Webhook を表示する

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > Webhooks > Webhooks` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/webhooks/webhooks)

Webhook の名前をクリックすると、詳細情報を確認できます。

### Webhook のログを表示する

Webhook のログを表示するには、次のようにします。

1. [Webhook ページ](#viewing-webhooks-in-zendesk)に移動します
1. ログを表示する Webhook の名前をクリックします
1. `Activity` タブをクリックします

そこから、イベントの Invocation ID をクリックして詳細を確認できます。

### Webhook をテストする

Webhook をテストするには、次のようにします。

1. [Webhook ページ](#viewing-webhooks-in-zendesk)に移動します
1. ログを表示する Webhook の名前をクリックします
1. ページ右上の `Actions` リンクをクリックします
1. `Test Webhook` をクリックします
1. ペイロード情報を入力します（正確に何を使用するかは Webhook 自体によって異なります）
1. `Send test` ボタンをクリックします

### Webhook サブスクリプション

Webhook はサブスクリプションを使用して、実行するタイミングを決定します。Webhook サブスクリプションの詳細については、[Zendesk のドキュメント](https://developer.zendesk.com/api-reference/webhooks/event-types/webhook-event-types/)を参照してください。

### Webhook リクエスト形式

Zendesk Webhook の有効なリクエスト形式は、次のとおりです。

- JSON（API 値: `json`）
- XML（API 値: `xml`）
- フォームエンコード（API 値: `form_encoded`）

### Webhook 認証

Webhook では、次の認証方法を使用できます。

- なし（API 値: `none`）
- API キー（API 値: `api_key`）
- 基本認証（API 値: `basic_auth`）
- Bearer トークン（API 値: `bearer_token`）

これらの動作の詳細については、[Zendesk のドキュメント](https://developer.zendesk.com/documentation/webhooks/webhook-security-and-authentication/)で確認できます

### Webhook を作成する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実行してください。存在しない場合は、まず 1 つ作成し、作業する前に標準プロセスを通過させる必要があります。
- Webhook を作成しただけでは、それが使用されるとは限らないことを覚えておいてください。

{{% /alert %}}

Webhook のエンドポイントまたはカスタムヘッダーに機密情報が含まれていない場合は、同期リポジトリを利用できます。ただし、エンドポイントまたはカスタムヘッダーに API トークンやシークレットなどの機密情報が含まれている場合は、Zendesk 自体で作成する必要があります。可能な限り、同期リポジトリを使用できる設定を常に優先してください。

同期リポジトリを使用して作成する場合、行う正確な変更はリクエスト自体によって異なります。使用できる開始テンプレートは次のとおりです。

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

同僚が MR をレビューして承認した後、MR をマージできます。次のデプロイが発生すると、Zendesk に同期されます。

Zendesk で手動で作成する必要がある場合:

1. [Webhook ページ](#viewing-webhooks-in-zendesk)に移動します
1. ページ右上の `Create webhook` ボタンをクリックします
1. Webhook の種類を選択します
   - Events: ユーザー作成、組織変更などの Zendesk イベントに基づきます
   - Trigger or automation: トリガーまたは自動化によって実行されます
1. ページ右下の `Next` をクリックします
1. `Events` タイプの Webhook を作成する場合:
   1. 使用するイベントタイプを選択します
   1. ページ右下の `Next` をクリックします
1. Webhook の名前を入力します
1. Webhook の説明を入力します（任意）
1. エンドポイント URL（ペイロードの送信先）を入力します
1. リクエストメソッドを選択します
1. リクエスト形式を選択します
1. 使用する認証の種類を入力します
1. 必要な追加ヘッダーを入力します（最大 5 件）
1. 任意ですが、作成する Webhook をテストする機会があります。正しく動作することを確認するために実行してください。
   - ボタンをクリックするとテストプロンプトが表示されます。詳細については、[Webhook をテストする](#testing-a-webhook)を参照してください。
1. ページ右下の `Create webhook` ボタンをクリックします

### Webhook を編集する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実行してください。存在しない場合は、まず 1 つ作成し、作業する前に標準プロセスを通過させる必要があります。
- Webhook を使用するオブジェクトに、重大な下流への影響を多数与える可能性があります。実行する際は注意してください。

{{% /alert %}}

Webhook を編集するには、それが同期リポジトリで管理されているか、Zendesk で直接管理されているかを判断する必要があります。

同期リポジトリを通じて管理されている場合は、同期リポジトリで MR を作成する必要があります。行う正確な変更はリクエスト自体によって異なります。同僚が MR をレビューして承認した後、MR をマージできます。次のデプロイが発生すると、Zendesk に同期されます。

Zendesk で直接管理されている場合:

1. [Webhook ページ](#viewing-webhooks-in-zendesk)に移動します
1. 編集する Webhook の名前をクリックします
1. ページ右上の `Actions` リンクをクリックします
1. `Edit` をクリックします
1. 必要な変更を行います
1. 任意ですが、変更する Webhook をテストする機会があります。正しく動作することを確認するために実行してください。
   - ボタンをクリックするとテストプロンプトが表示されます。詳細については、[Webhook をテストする](#testing-a-webhook)を参照してください。
1. ページ右下の `Update` ボタンをクリックします

#### 同期リポジトリを通じて Webhook の名前を変更する

Webhook の名前を変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから、`name` 属性を変更します。これにより、同期は更新対象の Webhook を引き続き特定できます。

### 同期リポジトリを通じて Webhook の認証情報を更新する

Webhook に使用する API キーの更新など、Webhook の認証情報を更新する必要がある場合は、同期リポジトリ自体で実行する特別な手順があります。

1. 同期リポジトリに移動します
1. CI/CD 設定に移動します
   - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/webhooks/-/settings/ci_cd)
   - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/webhooks/-/settings/ci_cd)
1. `TOKENS` という名前の `file` タイプの CI/CD 変数を追加します

CI/CD 変数の内容は、必要な情報を含む JSON ブロックになります（配列で囲みます）。

たとえば、Webhook `Do a thing` の `PRIVATE-TOKEN` 値を `abc123` に更新する必要がある場合、`TOKENS` CI/CD ファイル変数の内容は次のようになります。

```json
[
  {
    "name": "Do a thing",
    "PRIVATE-TOKEN": "abc123"
  }
]
```

これにより、次回のデプロイ実行時に同期リポジトリで Webhook `Do a thing` の `PRIVATE-TOKEN` 値が更新されます。

この方法は、1 回の更新で複数の Webhook の認証情報を更新するために使用できます。

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

デプロイ実行の最後に CI/CD ファイル変数 `TOKENS` が削除されます（次のデプロイ実行でその情報を使用して不要な更新が強制されることを防ぐためです）。

### Webhook を無効化する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実行してください。存在しない場合は、まず 1 つ作成し、作業する前に標準プロセスを通過させる必要があります。
- Webhook を使用するオブジェクトに、重大な下流への影響を多数与える可能性があります。実行する際は注意してください。

{{% /alert %}}

Webhook を無効化するには、それが同期リポジトリで管理されているか、Zendesk で直接管理されているかを判断する必要があります。

同期リポジトリを通じて管理されている場合は、同期リポジトリで MR を作成する必要があります。この MR では、対応するトリガーの YAML ファイルに対して次の操作を行います。

1. ファイルを `active` パスから `inactive` パスに移動します
1. `active` 属性の値を `false` に変更します

同僚が MR をレビューして承認した後、MR をマージできます。次のデプロイが発生すると、Zendesk に同期されます。

Zendesk で直接管理されている場合:

1. [Webhook ページ](#viewing-webhooks-in-zendesk)に移動します
1. 無効化する Webhook の名前をクリックします
1. ページ右上の `Actions` リンクをクリックします
1. `Deactivate` をクリックします
1. 無効化を確認するには `Deactivate webhook` をクリックします

### Webhook を削除する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実行してください。存在しない場合は、まず 1 つ作成し、作業する前に標準プロセスを通過させる必要があります。
- Webhook を削除する際は、同期リポジトリからもファイルを削除する必要がある可能性があります。

{{% /alert %}}

同期リポジトリは削除を実行しないため、Zendesk 自体で実行する必要があります。

Zendesk で Webhook を削除するには、次のようにします。

1. [Webhook ページ](#viewing-webhooks-in-zendesk)に移動します
1. 削除する Webhook の名前をクリックします
1. ページ右上の `Actions` リンクをクリックします
1. `Delete` をクリックします
1. 削除を確認するには `Delete webhook` をクリックします

### 例外デプロイを実行する

同期リポジトリで管理される Webhook の例外デプロイを実行するには、対象の Webhook 同期プロジェクトに移動し、スケジュール済みパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより Webhook の同期ジョブがトリガーされます。

## モニタリング

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/webhook-monitor)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/webhook-monitor)

{{% /alert %}}

### 仕組み

[GitLab のスケジュール済みパイプライン](https://docs.gitlab.com/ci/pipelines/schedules/)を使用して、`bin/process` スクリプトは毎時 15 分（UTC タイムゾーン）に実行されます。このスクリプトは次のことを行います。

- Zendesk インスタンス内のすべての Webhook のリストを収集する
- 各 Webhook のすべての呼び出し（過去 1 時間に実行されたもの）のリストを収集する
- 呼び出しのリストから、成功したすべての呼び出しを除外する
- 成功しなかった呼び出しごとに Slack に投稿する

### 失敗した呼び出しに対応する

Zendesk インスタンスで失敗した呼び出しについてアラートを受けた場合は、呼び出し自体を確認して次の手順を判断する必要があります。実行する正確なアクションは、失敗自体によって異なります。

- 失敗が Zendesk で使用されるペイロードに起因する場合は、バグ Issue を作成します
- 失敗がエンドポイントに起因する場合:
  - 次の方法で呼び出しを再試行します。
    - 使用された `Request body` をコピーする
    - カスタムペイロードを使用して[呼び出しに関連付けられた Webhook をテストする](#testing-a-webhook)
  - 再試行が失敗した場合は、バグ Issue を作成します

### Webhook モニターに変更を加える

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実行してください。存在しない場合は、まず 1 つ作成し、作業する前に標準プロセスを通過させる必要があります。

{{% /alert %}}

Webhook モニターを変更するには、対応するプロジェクトリポジトリで MR を作成する必要があります。行う正確な変更はリクエスト自体によって異なります。

同僚が MR をレビューして承認した後、MR をマージできます。これは `Ad-hoc` デプロイタイプであるため、変更は次回のスケジュール済み実行で使用されます。

## 一般的な問題とトラブルシューティング

これは必要に応じて項目が追加される継続的なセクションです。

### マージ後に Webhook の変更が表示されない

Webhook は `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行された場合）にのみデプロイされます
