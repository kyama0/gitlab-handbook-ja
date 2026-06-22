---
title: "Code Suggestions Testing Guide"
description: "Code Suggestions の機能をテストするためのガイドライン"
upstream_path: /handbook/engineering/ai/ai-coding/feature-stewardship/code_suggestions/development_guide/testing_guide/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T16:36:51-04:00"
translated_at: "2026-06-22T21:07:39Z"
translator: claude
stale: false
---

このドキュメントは、Code Suggestions の機能をテストするための技術的なハウツーガイドとして機能します。

## エンドツーエンドテスト

Code Suggestions は、[code_suggestions_spec.rb](https://gitlab.com/gitlab-org/gitlab/-/blob/master/qa/qa/specs/features/ee/api/3_create/code_suggestions_spec.rb) で API を使用してテストされ、[code_suggestions_in_web_ide_spec.rb](https://gitlab.com/gitlab-org/gitlab/-/blob/master/qa/qa/specs/features/ee/browser_ui/3_create/web_ide/code_suggestions_in_web_ide_spec.rb) で Web IDE を通じて間接的にテストされます。

### Code Suggestions の Self-managed エンドツーエンドテスト

MR では、エンドツーエンドテストは、`latest` バージョンの AI Gateway と統合された GitLab Linux (Omnibus) パッケージのインスタンスを使用して、self-managed インスタンスに対して Code Suggestions API を実行します。AI Gateway のインスタンスは、[モックレスポンス](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist#mocking-ai-model-responses)を返すように設定されています。これらのテストの結果を表示するには、`e2e:test-on-omnibus-ee` の子パイプラインを開き、`ai-gateway` ジョブを表示します。`ai-gateway` ジョブは、テストの実行前に、クラウドライセンスをアクティブ化し、テストユーザーに Duo Pro のシートを割り当てます。

注意: `e2e:test-on-omnibus-ee` パイプラインは、手動でトリガーする必要があるか、MR に `pipeline:run-all-e2e` ラベルが適用されている必要があります。

詳細については、[GitLab QA documentation](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#aigateway-scenarios) を参照してください。

### ライブ環境での Code Suggestions エンドツーエンドテスト

Code Suggestions のエンドツーエンドテストは、[Staging](https://staging.gitlab.com/users/sign_in) および [Production](https://gitlab.com/) の GitLab 環境に対して継続的に実行されます。

これらのテストはスケジュールされたパイプラインで実行され、エンドツーエンドの Code Suggestions 体験が正しく機能していることを確認します。結果は `#e2e-run-staging` および `#e2e-run-production` の Slack チャンネルで確認できます。パイプラインは以下にあり、アクセスは `#test-platform` でリクエストできます。

- [Staging-canary pipelines](https://ops.gitlab.net/gitlab-org/quality/staging-canary/-/pipelines)
- [Staging pipelines](https://ops.gitlab.net/gitlab-org/quality/staging/-/pipelines)
- [Canary pipelines](https://ops.gitlab.net/gitlab-org/quality/canary/-/pipelines)
- [Production pipelines](https://ops.gitlab.net/gitlab-org/quality/production/-/pipelines)

### エンドツーエンドテストをローカルで実行する

#### GDK インスタンスの使用

GDK が稼働中の AI gateway インスタンスに接続されており、root ユーザーが Code Suggestions をリクエストできることを確認してください。

```shell
cd qa
bundle install
QA_LOG_LEVEL=DEBUG QA_GITLAB_URL=https://gdk.test:3443  bundle exec rspec qa/specs/features/ee/api/3_create/code_suggestions_spec.rb --tag ai_gateway
```

上記のコマンドは、デフォルトの root ユーザーとしてログインし、テストで使用する適切なパーソナルアクセストークンを作成します。これは UI を使って行う必要があるため、明示的に管理者アクセストークンを渡すと、テストがはるかに高速になります。

```shell
GITLAB_QA_ADMIN_ACCESS_TOKEN=<admin_PAT> QA_LOG_LEVEL=DEBUG QA_GITLAB_URL=https://gdk.test:3443  bundle exec rspec qa/specs/features/ee/api/3_create/code_suggestions_spec.rb --tag ai_gateway
```

#### Omnibus インスタンスの使用（orchestrated tests）

AI gateway のエンドツーエンドテスト（Code Suggestions のテストを含む）を [orchestrated tests](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#orchestrated-tests) として実行するには、次のコマンドで最新の GitLab Linux (Omnibus) パッケージと `latest` の AI Gateway イメージを使用します。

```shell
CHROME_DISABLE_DEV_SHM=true DOCKER_DEFAULT_PLATFORM=linux/amd64  GITLAB_LICENSE_MODE=test QA_EE_ACTIVATION_CODE=<1Password> bundle exec gitlab-qa Test::Integration::AiGateway EE --no-teardown
```

AI Gateway のシナリオの詳細については、[GitLab QA documentation](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#aigateway-scenarios) を参照してください。

#### staging.gitlab.com の使用

Code Suggestions のエンドツーエンドテストは、ライブ環境に対して実行できます。次のコマンドは、staging に対してテストを実行します。

```shell
cd qa
bundle install
QA_LOG_LEVEL=debug GITLAB_QA_ADMIN_ACCESS_TOKEN=<1Password> GITLAB_QA_USER_AGENT=<1Password> GITLAB_USERNAME=gitlab-qa GITLAB_PASSWORD=<1Password> GITLAB_QA_ACCESS_TOKEN=<1Password> QA_GITLAB_URL=https://staging.gitlab.com bundle exec rspec qa/specs/features/ee/api/3_create/code_suggestions_spec.rb --tag external_ai_provider
```

1Password でシークレット値を見つけるには、変数名と環境名（例: `staging`）で検索します。サポートされている環境変数の完全なリストについては、[GitLab QA documentation](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#supported-gitlab-environment-variables) を参照してください。
