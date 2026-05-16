---
title: 'プロジェクトのセットアップ'
description: 'プロジェクトのセットアップに関するドキュメント'
date: 2026-01-13
upstream_path: /handbook/security/customer-support-operations/gitlab/project-setup/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T20:47:52+00:00"
---

このページでは、Customer Support Operations 向けに新しい GitLab プロジェクトを作成・構成する一連のプロセスをガイドします。

{{% alert title="Warning" color="warning" %}}

- 新しいプロジェクトを作成する Customer Support Operations のチームメンバーは全員、プロジェクトがセキュアかつメンテナンス可能な形で正しくセットアップされるよう、このプロセスに従う必要があります。
- これは対応するリクエスト Issue（機能リクエスト、管理業務、バグなど）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し、標準のプロセスを通してから作業を進めてください。

{{% /alert %}}

## プロセス

このプロセスは 7 つのステップで構成されます。

1. プロジェクトの作成
1. プロジェクト設定の調整
1. 適切なグループの招待
1. 初期ファイルの追加
1. CI/CD 変数のセットアップ
1. 追加要件の構成（必要な場合）
1. プロジェクトのドキュメント化

### ステップ 1 - プロジェクトを作成する

まずはプロジェクト本体を作成するところから始めます。その際、次の点を考慮する必要があります。

- プロジェクトの場所
- プロジェクトの名前
- プロジェクトのスラグ

#### プロジェクトの場所 {#location-of-the-project}

プロジェクトを作成するには、プロジェクトを _どこに_ 配置するかを決める必要があります。可能な限り、類似のプロジェクトはまとめて配置します。これに従えば、配置先となる既存のサブグループが見つかることが多いはずです。

例えば Zendesk Global の同期リポジトリを作成する場合、サブグループ `gitlab-support-readiness/zendesk-global` 内に配置されます。理由は次のとおりです。

- Customer Support Operations の非公開プロジェクトであるため（私たちのプライベート名前空間 `gitlab-support-readiness` 内）
- Zendesk Global に関連するため（サブグループ `zendesk-global` 内）

作成する同期リポジトリがチケットの属性やメタデータ（チケットフォーム、チケットフィールドなど）に関するものであれば、`gitlab-support-readiness/zendesk-global/tickets` サブグループに作成します。

プロジェクトを配置する既存のサブグループが見当たらない場合は、最適な作成場所を決めるためにチームに相談してください。

#### プロジェクトの名前 {#name-of-the-project}

プロジェクトを作成する際は、簡潔で自己説明的な命名を心がけるべきです。これは [場所](#location-of-the-project) を活かすことで実現できます。

例えば Zendesk US Government のチケット処理を扱うプロジェクトを作成する場合、[場所](#location-of-the-project) の決定からそれが `gitlab-support-readiness/zendesk-us-government/tickets` サブグループ内になることが分かります。これを踏まえると、場所のパスがすでに Zendesk US Government のチケットに関するものであることを示しているため、プロジェクト名はシンプルに `Processor` とできます。

プロジェクトの名前に迷ったときは、最適な名前を決めるためにチームに相談してください。

#### プロジェクトのスラグ

[名前](#name-of-the-project) を決めるときと同じく、スラグもパスと合わせて簡潔で自己説明的であるべきです。多くの場合、GitLab が生成するスラグでこの目的に十分です。

プロジェクトのスラグに迷ったときは、最適なスラグを決めるためにチームに相談してください。

### ステップ 2 - 設定を調整する

プロジェクトを作成したら、設定を以下のとおり手動で調整する必要があります。

<details>
<summary>General</summary>

- Visibility, project features, permissions
  - Project visibility: Private
  - Additional options
    - [x] Require authentication to view media files
  - Issues: disabled
  - Repository: enabled
    - Merge requests: enabled
    - Forks: disabled
    - Git Large File Storage (LFS): disabled
    - CI/CD: enabled
  - Container registry: disabled
  - Analytics: disabled
  - Requirements: disabled
  - Security and Compliance: disabled
  - Wiki: disabled
  - Snippets: enabled
  - Package registry: disabled
  - Model experiments: disabled
  - Model registry: disabled
  - Pages: disabled
  - Monitor: disabled
  - Environments: disabled
  - Feature flags: disabled
  - Infrastructure: disabled
  - Releases: disabled
  - Email notifications
    - [x] Enable email notifications
      - [x] Include diff previews
    - [x] Show default emoji reactions
    - [x] Warn about Potentially Unwanted Characters
  - CI/CD Catalog project: disabled
- Badges
  - None
- GitLab Duo
  - GitLab Duo: enabled
  - Allow flow execution: enabled
- Service Desk
  - Disabled

</details>
<details>
<summary>Integrations</summary>

- None

</details>
<details>
<summary>Webhooks</summary>

- None

</details>
<details>
<summary>Access tokens</summary>

- None

</details>
<details>
<summary>Repository</summary>

- Branch defaults
  - Default branch: master
  - [x] Auto-close references issues on default branch
- Branch rules
  - All branches
    - Squash commits: Require
  - master
    - Requires CODEOWNERS approval
    - Allowed to merge: Developers+Maintainers
    - Allowed to push and merge: 1 user
      - **NOTE**: ここでの 1 user は `gl-support-bot` ユーザーです
- Push rules
  - [ ] Reject unverified users
  - [ ] Reject inconsistent user name
  - [ ] Reject unsigned commits
  - [ ] Reject commits that aren't DCO certified
  - [ ] Do not allow users to remove Git tags with git push
  - [ ] Check whether the commit author is a GitLab user
  - [ ] Prevent pushing secret files
  - Require expression in commit messages: blank
  - Reject expression in commit messages: blank
  - Branch name: blank
  - Commit author's email: blank
  - Prohibited file names: blank
  - Maximum file size (MB): 0
- Mirroring repositories
  - None
- Protected branches
  - master
    - Allowed to merge: Maintainers
    - Allowed to push and merge: GitLab Support Bot
    - Allowed to force push: disabled
    - Code owner approval: enabled
- Protected tags
  - None
- Deploy tokens
  - None
- Deploy keys
  - None

</details>
<details>
<summary>Merge Requests</summary>

- Merge requests
  - Merge method: Merge commit
  - Merge options
    - [ ] Enable merged results pipelines
      - NOTE: まれな状況でこれを有効にする場合がありますが、デフォルトで有効にすることはありません
    - [ ] Automatically resolve merge request diff threads when they become outdated
    - [x] Show link to create or view a merge request when pushing from the command line
    - [x] Enable "Delete source branch" option by default
  - Squash commits when merging: Require
  - Merge checks
    - [x] Pipelines must succeed
      - NOTE: これはプロジェクトテンプレートのタイプによって変わります。
    - [x] All threads must be resolved
    - [ ] Status checks must succeed
  - Status checks
    - None
  - Merge suggestions: blank
  - Merge commit message template

    ```plaintext
    Merge branch '%{source_branch}' into '%{target_branch}'

    %{title}

    %{issues}

    See merge request %{reference}
    ```

  - Squash commit message template

    ```plaintext
    %{title}
    ```

  - Default description template for merge requests: blank
- Merge request approvals
  - Coverage-Check: disabled
  - Minimum required approvals: 0
  - Approval settings
    - [x] Prevent approval by author
    - [x] Prevent approvals by users who add commits
    - [x] Prevent editing approval rules in merge requests
    - [ ] Require user re-authentication (password or SAML) to approve
  - When a commit is added: Removal all approvals
- Merge request branch workflow
  - None

</details>
<details>
<summary>CI/CD</summary>

- General pipelines
  - [x] Project-based pipeline visibility
  - [x] Auto-cancel redundant pipelines
  - [x] Prevent outdated deployment jobs
    - [x] Allow job retries even if the deployment job is outdated.
  - [x] Use separate caches for protected branches
  - Minimum role required to cancel a pipeline or job: Developer
  - CI/CD configuration file: blank
  - Git strategy: git fetch
  - Git shallow clone: 20
  - Timeout: 15m
    - **NOTE**: プロジェクトの内容によってはこれを調整する必要があるかもしれません
  - Automatic pipeline cleanup: 5d
- Auto DevOps
  - [ ] Default to Auto DevOps pipeline
- Protected environments
  - None
- Pipeline trigger tokens
  - None
- Automatic deployment rollbacks
  - [ ] Enable automatic rollbacks
- Deploy freezes
  - None
- Job token permissions
  - Authorized groups and projects: Only this project and any groups and projects in the allowlist
  - CI/CD job token allowlist
    - 一覧にはプロジェクト自身のみが存在するべきです
  - Limit access from this project (Deprecated): disabled
  - Add an existing project to the scope
    - 一覧にはプロジェクト自身のみが存在するべきです
- Secure files
  - None
- Pipeline subscriptions
  - Subscriptions
    - None
  - Subscribed to this project
    - None

</details>
<details>
<summary>Monitor</summary>

- Error tracking
  - Enable error tracking
    - [ ] Active
  - Error tracking backend: GitLab
- Alerts
  - None
- Incidents
  - Active: disabled
- Status page
  - [ ] Active
  - Status page URL: blank
  - S3 Bucket name: blank
  - AWS region: blank
  - AWS access key ID: blank
  - AWS Secret access key: blank

</details>

### ステップ 3 - 適切なグループを招待する {#step-3---invite-the-correct-groups}

新しいプロジェクトの設定を調整したら、メンバーとして適切なグループを招待する必要があります。継承の仕組みにより、プロジェクトへの _アクセス_ はグループメンバーシップを通じて自動的に処理されます。そのためここでの本質は、（マージリクエスト承認のために）[CODEOWNERS ファイル](https://docs.gitlab.com/user/project/codeowners/) が何を使うかという点です。

- Customer Support Operations のリーダーシップを必要とするテーマに関するプロジェクトでは、[gitlab-support-readiness/cust_support_ops_critical_access](https://gitlab.com/gitlab-support-readiness/cust_support_ops_critical_access) を招待します
- 米国市民権を _必要とする_ プロジェクトでは、[gitlab-support-readiness/cust_support_ops_team_us_citizens](https://gitlab.com/gitlab-support-readiness/cust_support_ops_team_us_citizens) を招待します
  - **NOTE** プロジェクトが特定の市民権を必要としないように努めるべきです。プロジェクトがそれを必要としている場合、それはプロジェクト内の何らかの出力（コード、CI/CD など）に市民権で保護されたデータが関わっていることを示します。これは常に避けられるわけではありませんが、_常に_ gitlab.com 内に市民権で保護されたデータを置かないように目指してください。
- それ以外のものについては、[gitlab-support-readiness/cust_support_ops_team](https://gitlab.com/gitlab-support-readiness/cust_support_ops_team) を招待します

招待すべきグループに迷ったときは、チームに相談して支援を求めてください。

### ステップ 4 - ファイルを追加する

このステージでは、ファイルを追加するための初回コミットをプロジェクトに対して行います。追加すべきファイルは、プロジェクトの目的（と挙動）によって異なります。各種ファイルについては以下のガイドラインを確認し、私たちのプロジェクトのセットアップ方法と整合させてください。

- `.gitlab/CODEOWNERS`
  - このファイルの正確な内容は使用するコードによって異なりますが、開始点は常に次のようにしてください。

  ```plaintext
  [Customer Support Operations]
  * @GROUP_TO_INVITE
  ```

  - `GROUP_TO_INVITE` の値については [ステップ 3](#step-3---invite-the-correct-groups) を参照してください
- `bin/post_in_slack.sh`
  - このファイルには常に実行可能パーミッションを付与する必要があります
  - このファイルの内容は常に次のようにしてください。

  ```bash
  curl -ss $SLACK_URL_PIPELINE_FAIL \
    -X POST \
    -H 'Content-type: application/json' \
    --data "{\"text\": \"<$CI_PROJECT_URL|$CI_PROJECT_PATH> pipeline <$CI_PIPELINE_URL|#$CI_PIPELINE_ID> failed $DATE\", \"mrkdwn\": true }"
  ```

- `.gitlab-ci.yml`
  - このファイルの正確な内容は使用するコードによって異なりますが、よくあるプロジェクトタイプ向けに以下の出発点となるテンプレートを使用できます。

    <details>
    <summary>同期リポジトリ</summary>

    ```yaml
    image: "registry.gitlab.com/gitlab-support-readiness/images/ruby:3.2.2"

    stages:
    - compare
    - sync
    - notify

    before_script:
    - ruby -v
    - gem install bundler
    - bundle install

    compare:
      stage: compare
      script:
      - ./bin/compare
      rules:
      - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
      retry:
        max: 2
        when:
        - runner_system_failure
        - stuck_or_timeout_failure

    sync:
      stage: sync
      script:
      - ./bin/sync
      rules:
      - if: $CI_PIPELINE_SOURCE == 'trigger'
      retry:
        max: 2
        when:
        - runner_system_failure
        - stuck_or_timeout_failure

    post_in_slack_on_failure:
      before_script: ''
      stage: notify
      when: on_failure
      image: registry.gitlab.com/gitlab-support-readiness/images/curl:latest
      script:
      - ./bin/post_in_slack.sh
    ```

    </details>
    <details>
    <summary>Zendesk アプリ</summary>

    ```yaml
    image: "registry.gitlab.com/gitlab-support-readiness/images/ruby:3.2.2"

    stages:
    - compare
    - sync
    - notify

    before_script:
    - ruby -v
    - gem install bundler
    - bundle install

    compare_instances:
      stage: compare
      script:
      - ./bin/compare_sandbox
      - ./bin/compare_production
      rules:
      - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
      retry:
        max: 2
        when:
        - runner_system_failure
        - stuck_or_timeout_failure

    force_sandbox_sync:
      stage: sync
      script:
      - ./bin/sync_sandbox force
      needs: ['compare_instances']
      when: manual
      rules:
      - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
      retry:
        max: 2
        when:
        - runner_system_failure
        - stuck_or_timeout_failure

    perform_sandbox_sync:
      stage: sync
      script:
      - ./bin/sync_sandbox
      rules:
      - if: $CI_PIPELINE_SOURCE == 'schedule' && $SANDBOX == 'true'
      retry:
        max: 2
        when:
        - runner_system_failure
        - stuck_or_timeout_failure

    perform_production_sync:
      stage: sync
      script:
      - ./bin/sync_production
      rules:
      - if: $CI_PIPELINE_SOURCE == 'schedule' && $SANDBOX == 'false'
      retry:
        max: 2
        when:
        - runner_system_failure
        - stuck_or_timeout_failure

    post_in_slack_on_failure:
      before_script: ''
      stage: notify
      when: on_failure
      image: registry.gitlab.com/gitlab-support-readiness/images/curl:latest
      script:
      - ./bin/post_in_slack.sh
    ```

    </details>

  - 何を入れるべきか分からない場合は、チームの他のメンバーに連絡して支援を求めてください
- `.rubocop.yml`
  - このファイルの内容は常に、私たちが扱っている現在の Ruby バージョンに揃えてください。つまり、次のようになります。

  ```yaml
  AllCops:
    NewCops: enable
    TargetRubyVersion: 3.2.2
  ```

- `.ruby-version`
  - このファイルの内容は常に、私たちが扱っている現在の Ruby バージョンにしてください。つまり、次のようになります。

  ```plaintext
  3.2.2
  ```

- `Gemfile`
  - gem の一覧はアルファベット順に並べてください
  - 必要になる gem は使用するコードによって異なりますが、開始点は常に次のようにしてください。

  ```ruby
  # frozen_string_literal: true

  source 'https://rubygems.org'
  ```

- `README.md`
  - 正確な内容は内容によって異なりますが、README.md ファイルには以下を文書化してください。
    - プロジェクト名
    - 簡単な説明
    - ファイルツリーのレイアウト
    - 要件
    - CI/CD パイプライン情報
  - 何を入れるべきか分からない場合は、チームの他のメンバーに連絡して支援を求めてください

### ステップ 5 - CI/CD 変数をセットアップする

プロジェクトに必要な CI/CD 変数を構成します。多くの変数は親の名前空間から継承されるので、プロジェクト固有の値に注力してください。

**追加する一般的な変数:**

- API トークンの値（例: `ZD_TOKEN`、`GL_TOKEN`、`CALENDLY_API_TOKEN` など）
- Slack の Webhook（継承される `SLACK_URL_PIPELINE_FAIL` を除く）

**継承された変数の確認方法:**

1. プロジェクトの Settings > CI/CD > Variables に移動する
1. 「Inherited from group」セクションを確認して、すでに利用可能なものを把握する
1. 親の名前空間で提供されていない変数のみを追加する

**変数の保護:**

- 機密性の高いトークンは「Masked」としてマークする

### ステップ 6 - 追加の構成（必要な場合）

ほとんどのプロジェクトでは、ステップ 1〜5 で十分です。ただし、プロジェクトによっては次のような追加構成が必要になる場合があります。

- 外部統合のための Webhook をセットアップする
- [コードを別のプロジェクトにミラーリングする](/handbook/security/customer-support-operations/gitlab/mirroring)
- 外部サービス連携を構成する
- スケジュール実行のパイプラインをセットアップする

追加構成が必要かどうか分からない場合は、チームに相談してください。

### ステップ 7 - ドキュメント化する

プロジェクト作成の最後のステップは、ハンドブックページにこのプロジェクトの情報を反映することです。次の内容を含めてください。

- それは何か
- 何をするか
- どう動くか
- 使用するデプロイ戦略のタイプ
- 変更方法
- トラブルシューティング情報

## プロジェクト作成後

プロジェクトを作成しドキュメント化したら、次のことが行われます。

- グループメンバーシップに基づき、適切なチームメンバーがプロジェクトにアクセスできるようになります
- CI/CD パイプラインは構成されたルールに従って実行されます
- 変更には CODEOWNERS の承認が必要なマージリクエストが必要です
- すべてが正しく構成されているかを確認するため、プロジェクトの初回パイプラインを監視してください
