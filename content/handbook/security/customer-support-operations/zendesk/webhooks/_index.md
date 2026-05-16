---
title: 'Webhook'
description: 'Zendesk webhook に関するドキュメント'
date: 2026-02-23
upstream_path: /handbook/security/customer-support-operations/zendesk/webhooks/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T21:03:24Z"
translator: claude
stale: false
lastmod: "2026-03-31T12:34:03-05:00"
---

このガイドは、GitLab で Zendesk webhook を作成、編集、管理する方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Standard`
  - **注意:** 一部の特殊な webhook は Zendesk 内で手動管理されています（そのため ad-hoc デプロイメント方式を使用）
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/webhooks)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/webhooks)

{{% /alert %}}

## webhook の理解 {#understanding-webhooks}

### webhook とは {#what-are-webhooks}

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems) によると:

> webhook は、Zendesk Support のトリガーや自動化が発火するなどのイベントに応じて、指定された URL に HTTP リクエストを送信します。Web 開発者は通常、別のシステムでの動作を呼び出すために webhook を使用します。

簡単に言うと、別のシステムへの HTTP リクエストです。これは GitLab Issue 作成、Slack へのアラートなどに使用できます。

### Zendesk での webhook の使用 {#using-a-webhook-in-zendesk}

webhook は Zendesk 内の他の項目（通常は Zendesk のイベント、自動化、トリガー）からのみ使用されます。そのため「直接」使用することはありません。代わりに、トリガーオブジェクトが実行されたときに「間接的に」使用されます。

### webhook の管理方法 {#how-we-manage-webhooks}

現在、すべての webhook を Zendesk 自体で管理しています。

## 管理者以外による webhook の作成 {#creating-webhooks-as-a-non-admin}

webhook の作成については、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者以外による webhook の編集 {#editing-webhooks-as-a-non-admin}

webhook の変更については、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者以外による webhook の削除 {#deleting-webhooks-as-a-non-admin}

webhook の削除については、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目には Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### Zendesk での webhook の表示 {#viewing-webhooks-in-zendesk}

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Apps and integrations > Webhooks > Webhooks` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/webhooks/webhooks)

詳細を確認するには、webhook の名前をクリックします。

### webhook のログ表示 {#viewing-logs-for-a-webhook}

webhook のログを表示するには:

1. [webhook ページ](#viewing-webhooks-in-zendesk)に移動します
1. ログを表示する webhook の名前をクリックします
1. `Activity` タブをクリックします

そこから、イベントの Invocation ID をクリックして詳細を確認できます。

### webhook のテスト {#testing-a-webhook}

webhook をテストするには:

1. [webhook ページ](#viewing-webhooks-in-zendesk)に移動します
1. ログを表示する webhook の名前をクリックします
1. ページ右上の `Actions` リンクをクリックします
1. `Test Webhook` をクリックします
1. ペイロード情報を入力します（実際に使用する内容は webhook 自体によって異なります）
1. `Send test` ボタンをクリックします

### webhook のサブスクリプション {#webhook-subscriptions}

webhook は実行タイミングを決定するためにサブスクリプションを使用します。webhook サブスクリプションの詳細については、[Zendesk のドキュメント](https://developer.zendesk.com/api-reference/webhooks/event-types/webhook-event-types/)をご覧ください。

### webhook のリクエスト形式 {#webhook-request-formats}

Zendesk webhook の有効なリクエスト形式は以下の通りです。

- JSON（API 値: `json`）
- XML（API 値: `xml`）
- Form encoded（API 値: `form_encoded`）

### webhook の認証 {#webhook-authentication}

webhook は以下の認証方式を使用できます。

- なし（API 値: `none`）
- API Key（API 値: `api_key`）
- Basic 認証（API 値: `basic_auth`）
- Bearer トークン（API 値: `bearer_token`）

これらの動作の詳細については、[Zendesk のドキュメント](https://developer.zendesk.com/documentation/webhooks/webhook-security-and-authentication/)をご覧ください。

### webhook の作成 {#creating-a-webhook}

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合のみ実施してください。存在しない場合は、まず作成し（標準プロセスを通してから対応）してください。
- webhook を作成しただけでは使用されないことに注意してください。

{{% /alert %}}

webhook のエンドポイントやカスタムヘッダーに機密情報が含まれていない場合、同期リポジトリを利用できます。ただし、エンドポイント/カスタムヘッダーに API トークンや秘密鍵などの機密情報が含まれる場合は、Zendesk 自体で作成する必要があります。可能な限り同期リポジトリを使用できるセットアップが常に推奨されます。

同期リポジトリを使用して作成する場合、実際の変更内容はリクエスト自体によります。使用できる開始テンプレートは以下の通りです。

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

ピアレビューと承認の後、MR をマージできます。次回のデプロイメント時に Zendesk へ同期されます。

Zendesk で手動作成する必要がある場合:

1. [webhook ページ](#viewing-webhooks-in-zendesk)に移動します
1. ページ右上の `Create webhook` ボタンをクリックします
1. webhook のタイプを選択します
   - Events: ユーザー作成、組織変更などの Zendesk イベントに基づくもの
   - Trigger or automation: トリガーまたは自動化経由で実行
1. ページ右下の `Next` をクリックします
1. `Events` タイプの webhook を作成する場合:
   1. 使用するイベントタイプを選択します
   1. ページ右下の `Next` をクリックします
1. webhook の名前を入力します
1. webhook の説明を入力します（任意）
1. エンドポイント URL（つまりペイロードの送信先）を入力します
1. リクエストメソッドを選択します
1. リクエスト形式を選択します
1. 使用する認証タイプを入力します
1. 必要な追加ヘッダーを入力します（最大 5 つ）
1. 任意ですが、作成中の webhook をテストする機会があります。正しく動作することを確認するため、これを実施してください。
   - ボタンをクリックするとテストプロンプトが表示されます。詳細は[webhook のテスト](#testing-a-webhook)を参照してください。
1. ページ右下の `Create webhook` ボタンをクリックします

### webhook の編集 {#editing-a-webhook}

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合のみ実施してください。存在しない場合は、まず作成し（標準プロセスを通してから対応）してください。
- これは webhook を使用するオブジェクトに多くの深刻な下流影響を及ぼす可能性があります。慎重に行ってください。

{{% /alert %}}

webhook を編集するには、同期リポジトリで管理されているか、Zendesk で直接管理されているかを判断する必要があります。

同期リポジトリで管理されている場合、同期リポジトリで MR を作成する必要があります。実際の変更内容はリクエスト自体によります。ピアレビューと承認の後、MR をマージできます。次回のデプロイメント時に Zendesk へ同期されます。

Zendesk で直接管理されている場合:

1. [webhook ページ](#viewing-webhooks-in-zendesk)に移動します
1. 編集する webhook の名前をクリックします
1. ページ右上の `Actions` リンクをクリックします
1. `Edit` をクリックします
1. 必要な変更を行います
1. 任意ですが、変更中の webhook をテストする機会があります。正しく動作することを確認するため、これを実施してください。
   - ボタンをクリックするとテストプロンプトが表示されます。詳細は[webhook のテスト](#testing-a-webhook)を参照してください。
1. ページ右下の `Update` ボタンをクリックします

#### 同期リポジトリ経由で webhook の名前を変更する {#changing-the-name-of-a-webhook-via-the-sync-repo}

webhook の名前を変更する必要がある場合、現在の値を `previous_name` 属性にコピーし、`name` 属性を変更します。これにより、同期は対象の webhook を引き続き特定して更新できます。

### 同期リポジトリ経由で webhook の認証情報を更新する {#updating-authentication-information-for-a-webhook-via-the-sync-repo}

API キーの更新など、webhook の認証情報を更新する必要がある場合、同期リポジトリ自体で実施する特別な手順があります。

1. 同期リポジトリに移動します
1. CI/CD 設定に移動します
   - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/webhooks/-/settings/ci_cd)
   - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/webhooks/-/settings/ci_cd)
1. `TOKENS` という名前の `file` タイプ CI/CD 変数を追加します

CI/CD 変数の内容は、必要な情報を含む JSON ブロック（配列で囲まれたもの）になります。

例として、webhook `Do a thing` の `PRIVATE-TOKEN` 値を `abc123` に更新する場合、`TOKENS` CI/CD ファイル変数の内容は以下のようになります。

```json
[
  {
    "name": "Do a thing",
    "PRIVATE-TOKEN": "abc123"
  }
]
```

これは同期リポジトリが、次回のデプロイメント実行時に webhook `Do a thing` の `PRIVATE-TOKEN` 値を更新するために使用します。

このメソッドは、1 回の更新で複数の webhook の認証情報を更新するために使用できます。

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

デプロイメント実行は、CI/CD ファイル変数 `TOKENS` を削除して終わります（その情報を使って次回のデプロイメント実行時に不要な強制更新が行われるのを防ぐため）。

### webhook の無効化 {#deactivating-a-webhook}

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合のみ実施してください。存在しない場合は、まず作成し（標準プロセスを通してから対応）してください。
- これは webhook を使用するオブジェクトに多くの深刻な下流影響を及ぼす可能性があります。慎重に行ってください。

{{% /alert %}}

webhook を無効化するには、同期リポジトリで管理されているか、Zendesk で直接管理されているかを判断する必要があります。

同期リポジトリで管理されている場合、同期リポジトリで MR を作成する必要があります。この MR では、対応するトリガーの YAML ファイルに対して以下を行ってください。

1. ファイルを `active` から `inactive` パスに移動します
1. `active` 属性の値を `false` に変更します

ピアレビューと承認の後、MR をマージできます。次回のデプロイメント時に Zendesk へ同期されます。

Zendesk で直接管理されている場合:

1. [webhook ページ](#viewing-webhooks-in-zendesk)に移動します
1. 無効化する webhook の名前をクリックします
1. ページ右上の `Actions` リンクをクリックします
1. `Deactivate` をクリックします
1. 無効化を確認するため、`Deactivate webhook` をクリックします

### webhook の削除 {#deleting-a-webhook}

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合のみ実施してください。存在しない場合は、まず作成し（標準プロセスを通してから対応）してください。
- webhook を削除する場合、同期リポジトリからファイルも削除する必要があるでしょう。

{{% /alert %}}

同期リポジトリは削除を実行しないため、Zendesk 自体で実施する必要があります。

Zendesk で webhook を削除するには:

1. [webhook ページ](#viewing-webhooks-in-zendesk)に移動します
1. 削除する webhook の名前をクリックします
1. ページ右上の `Actions` リンクをクリックします
1. `Delete` をクリックします
1. 削除を確認するため、`Delete webhook` をクリックします

### 例外デプロイメントの実施 {#performing-an-exception-deployment}

同期リポジトリで管理される webhook の例外デプロイメントを実施するには、対象の webhook 同期プロジェクトに移動し、スケジュールパイプラインページに移動して、同期項目の再生ボタンをクリックします。これにより webhook の同期ジョブがトリガーされます。

## 監視 {#monitoring}

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/webhook-monitor)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/webhook-monitor)

{{% /alert %}}

### 動作の仕組み {#how-it-works}

[GitLab スケジュールパイプライン](https://docs.gitlab.com/ci/pipelines/schedules/)を使用し、`bin/process` スクリプトが毎時 15 分（UTC タイムゾーン）に実行されます。このスクリプトは以下を行います。

- Zendesk インスタンス内のすべての webhook のリストを取得
- 各 webhook の過去 1 時間に実行されたすべての実行のリストを取得
- 実行リストから成功した実行をフィルタリング除外
- 成功しなかった各実行について Slack に投稿

### 失敗した実行への対応 {#actioning-on-failed-invocations}

Zendesk インスタンスの失敗した実行についてアラートを受け取ったら、次のステップを判断するために実行自体をレビューしてください。実行する具体的なアクションは失敗自体によって異なります。

- 失敗が Zendesk が使用するペイロードに起因する場合は、バグ Issue を起票
- 失敗がエンドポイントに起因する場合:
  - 以下の方法で実行を再試行:
    - 使用された `Request body` をコピー
    - カスタムペイロードを使用して、[実行に紐づく webhook をテスト](#testing-a-webhook)
  - 再試行が失敗した場合は、バグ Issue を起票

### webhook モニターへの変更 {#making-changes-to-the-webhook-monitor}

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合のみ実施してください。存在しない場合は、まず作成し（標準プロセスを通してから対応）してください。

{{% /alert %}}

webhook モニターを変更するには、対応するプロジェクトリポジトリで MR を作成する必要があります。実際の変更内容はリクエスト自体によります。

ピアレビューと承認の後、MR をマージできます。これは `Ad-hoc` デプロイメントタイプであるため、変更は次回のスケジュール実行時に使用されます。

## よくある問題とトラブルシューティング {#common-issues-and-troubleshooting}

これは必要に応じて項目が追加されていくセクションです。

### マージ後に webhook の変更が反映されない {#not-seeing-webhook-changes-after-a-merge}

webhook は `Standard` デプロイメントタイプに従うため、通常のデプロイメントサイクル時（または例外デプロイメントが行われた時）にのみデプロイされます。
