---
title: "Code Suggestions テストガイド"
description: "Code Suggestions 機能をテストするためのガイドライン"
upstream_path: /handbook/engineering/ai/ai-coding/feature-stewardship/code_suggestions/development_guide/testing_guide/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T12:16:47-05:00"
translated_at: "2026-06-23T07:24:31.0151723+09:00"
translator: codex
stale: false
---

このドキュメントは、Code Suggestions 機能をテストするための技術的なハウツーガイドです。

## エンドツーエンドテスト

Code Suggestions は、[code_suggestions_spec.rb](https://gitlab.com/gitlab-org/gitlab/-/blob/master/qa/qa/specs/features/ee/api/3_create/code_suggestions_spec.rb) で API を使用してテストされ、また [code_suggestions_in_web_ide_spec.rb](https://gitlab.com/gitlab-org/gitlab/-/blob/master/qa/qa/specs/features/ee/browser_ui/3_create/web_ide/code_suggestions_in_web_ide_spec.rb) で Web IDE を介して間接的にテストされます。

### Code Suggestions のセルフマネージドエンドツーエンドテスト

MR では、エンドツーエンドテストが、AI Gateway の `latest` バージョンと統合された GitLab Linux（Omnibus）パッケージのインスタンスを使用して、セルフマネージドインスタンスに対して Code Suggestions API を実行します。AI Gateway のインスタンスは [モックレスポンス](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist#mocking-ai-model-responses)を返すように設定されています。
これらのテスト結果を表示するには、`e2e:test-on-omnibus-ee` の子パイプラインを開いて `ai-gateway` ジョブを表示してください。`ai-gateway` ジョブはクラウドライセンスを有効化し、テストユーザーに Duo Pro のシートを割り当ててから、テストを実行します。

注意：`e2e:test-on-omnibus-ee` パイプラインは手動でトリガーする必要があるか、または MR に `pipeline:run-all-e2e` ラベルを適用する必要があります。

詳細については、[GitLab QA ドキュメント](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#aigateway-scenarios)を参照してください。

### ライブ環境での Code Suggestions エンドツーエンドテスト

Code Suggestions のエンドツーエンドテストは、[Staging](https://staging.gitlab.com/users/sign_in) および [Production](https://gitlab.com/) GitLab 環境に対して継続的に実行されます。

これらのテストはスケジュールされたパイプラインで実行され、エンドツーエンドの Code Suggestions エクスペリエンスが正しく機能していることを確認します。
結果は `#e2e-run-staging` および `#e2e-run-production` Slack チャンネルで確認できます。パイプラインは以下にあり、アクセスは `#test-platform` でリクエストできます。

- [Staging-canary パイプライン](https://ops.gitlab.net/gitlab-org/quality/staging-canary/-/pipelines)
- [Staging パイプライン](https://ops.gitlab.net/gitlab-org/quality/staging/-/pipelines)
- [Canary パイプライン](https://ops.gitlab.net/gitlab-org/quality/canary/-/pipelines)
- [Production パイプライン](https://ops.gitlab.net/gitlab-org/quality/production/-/pipelines)

### エンドツーエンドテストをローカルで実行する

#### GDK インスタンスを使用する

GDK が動作中の AI Gateway インスタンスに接続されていることと、root ユーザーが Code Suggestions をリクエストできることを確認してください。

```shell
cd qa
bundle install
QA_LOG_LEVEL=DEBUG QA_GITLAB_URL=https://gdk.test:3443  bundle exec rspec qa/specs/features/ee/api/3_create/code_suggestions_spec.rb --tag ai_gateway
```

上記のコマンドは、デフォルトの root ユーザーとしてログインし、テストで使用する適切なパーソナルアクセストークンを作成します。これは UI を使って行う必要があるため、明示的に管理者アクセストークンを渡すと、テストはずっと高速になります。

```shell
GITLAB_QA_ADMIN_ACCESS_TOKEN=<admin_PAT> QA_LOG_LEVEL=DEBUG QA_GITLAB_URL=https://gdk.test:3443  bundle exec rspec qa/specs/features/ee/api/3_create/code_suggestions_spec.rb --tag ai_gateway
```

#### Omnibus インスタンスを使用する（オーケストレーションテスト）

AI Gateway のエンドツーエンドテスト（Code Suggestions テストを含む）を [オーケストレーションテスト](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#orchestrated-tests)として実行するには、以下のコマンドが最新の GitLab Linux（Omnibus）パッケージと `latest` の AI Gateway イメージを使用します。

```shell
CHROME_DISABLE_DEV_SHM=true DOCKER_DEFAULT_PLATFORM=linux/amd64  GITLAB_LICENSE_MODE=test QA_EE_ACTIVATION_CODE=<1Password> bundle exec gitlab-qa Test::Integration::AiGateway EE --no-teardown
```

AI Gateway シナリオの詳細については、[GitLab QA ドキュメント](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#aigateway-scenarios)を参照してください。

#### staging.gitlab.com を使用する

Code Suggestions エンドツーエンドテストはライブ環境に対して実行できます。以下は staging に対してテストを実行します。

```shell
cd qa
bundle install
QA_LOG_LEVEL=debug GITLAB_QA_ADMIN_ACCESS_TOKEN=<1Password> GITLAB_QA_USER_AGENT=<1Password> GITLAB_USERNAME=gitlab-qa GITLAB_PASSWORD=<1Password> GITLAB_QA_ACCESS_TOKEN=<1Password> QA_GITLAB_URL=https://staging.gitlab.com bundle exec rspec qa/specs/features/ee/api/3_create/code_suggestions_spec.rb --tag external_ai_provider
```

1Password 内のシークレット値を見つけるには、変数名と環境名（例：`staging`）で検索してください。サポートされている環境変数の完全なリストについては、[GitLab QA ドキュメント](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#supported-gitlab-environment-variables)を参照してください。
