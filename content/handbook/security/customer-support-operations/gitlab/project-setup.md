---
title: 'プロジェクトのセットアップ'
description: 'プロジェクトのセットアップに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/gitlab/project-setup/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
lastmod: 2026-05-26T12:05:00-05:00
---

このページでは、Customer Support Operations 向けに新しい GitLab プロジェクトを作成して構成する一連のプロセスを案内します。

{{% alert title="Warning" color="warning" %}}

- 新しいプロジェクトを作成する Customer Support Operations チームメンバーは全員、私たちのプロジェクトがセキュアで保守しやすい形で適切にセットアップされるよう、このプロセスに従う必要があります。
- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず Issue を作成してください（そして作業に着手する前に標準のプロセスを通してください）。

{{% /alert %}}

## プロセス

このプロセスは 7 つのステップで構成されています。

1. プロジェクトを作成する
1. プロジェクトの設定を調整する
1. 正しいグループを招待する
1. 初期ファイルを追加する
1. CI/CD 変数をセットアップする
1. （必要に応じて）追加要件を構成する
1. プロジェクトをドキュメント化する

### ステップ 1 - プロジェクトを作成する

プロジェクトそのものを作成する出発点です。その際は、次の点を考慮する必要があります。

- プロジェクトの場所
- プロジェクトの名前
- プロジェクトのスラッグ

#### プロジェクトの場所

プロジェクトを作成するには、そのプロジェクトが_どこ_に置かれるのかを知る必要があります。可能な場合は、類似のプロジェクトをまとめてグループ化します。これを利用すると、プロジェクトを置くための既存のサブグループが見つかることがよくあります。

例として、Zendesk Global 用の同期リポジトリを作成する場合、それはサブグループ `gitlab-support-readiness/zendesk-global` の中に置かれます。理由は次のとおりです。

- これは Customer Support Operations の非公開プロジェクトである（したがって私たちのプライベートな名前空間 `gitlab-support-readiness` の中）
- Zendesk Global に関連する（したがってサブグループ `zendesk-global` の中）

作成する同期リポジトリがチケットの属性やメタデータ（チケットフォーム、チケットフィールドなど）に関連するものであれば、`gitlab-support-readiness/zendesk-global/tickets` サブグループに作成することになります。

プロジェクトを置くべき既存のサブグループが見当たらない場合は、これについてチームに相談し、プロジェクトを作成するのに最適な場所を判断してください。

#### プロジェクトの名前

プロジェクトを作成する際は、簡潔で自己説明的な命名を心がけるべきです。これには [場所](#location-of-the-project) を活用するとよいでしょう。

たとえば、Zendesk US Government のチケット処理を扱うプロジェクトを作成する場合、[場所](#location-of-the-project) の判断から、それがサブグループ `gitlab-support-readiness/zendesk-us-government/tickets` の中に置かれることが分かります。それが分かれば、場所のパスがすでに Zendesk US Government のチケットに関連していることを示しているので、プロジェクト名は単に `Processor` とすればよいのです。

プロジェクトに何という名前を付ければよいか分からないときは、これについてチームに相談し、使用するのに最適な名前を判断してください。

#### プロジェクトのスラッグ

[名前](#name-of-the-project) を決めるときと同様に、スラッグもパスと合わせて、簡潔で自己説明的であるべきです。多くの場合、GitLab が生成するスラッグでこの目的を果たせます。

プロジェクトのスラッグをどうすればよいか分からないときは、これについてチームに相談し、使用するのに最適なスラッグを判断してください。

### ステップ 2 - 設定を調整する

プロジェクトを作成したら、設定を手動で次のとおり調整する必要があります。

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
      - NOTE: まれにこれが有効化されることがありますが、デフォルトで有効にすることは決してありません
    - [ ] Automatically resolve merge request diff threads when they become outdated
    - [x] Show link to create or view a merge request when pushing from the command line
    - [x] Enable "Delete source branch" option by default
  - Squash commits when merging: Require
  - Merge checks
    - [x] Pipelines must succeed
      - NOTE: これはプロジェクトのテンプレートタイプによって異なります。
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
    - **NOTE**: プロジェクトが具体的に何を行うかによって、これを調整する必要があるかもしれません
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
    - リストにはプロジェクト自身のみが含まれているべきです
  - Limit access from this project (Deprecated): disabled
  - Add an existing project to the scope
    - リストにはプロジェクト自身のみが含まれているべきです
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

### ステップ 3 - 正しいグループを招待する

新しいプロジェクトの設定を調整したら、正しいグループをメンバーとして招待する必要があります。私たちの継承の仕組みにより、プロジェクトへの_アクセス_はグループメンバーシップを通じて自動的に処理されます。したがってこのステップは、実際には [CODEOWNERS ファイル](https://docs.gitlab.com/user/project/codeowners/) が（マージリクエストの承認のために）何を使うかに関するものです。

- Customer Support Operations のリーダーシップを必要とする題材に関するプロジェクトの場合は、[gitlab-support-readiness/cust_support_ops_critical_access](https://gitlab.com/gitlab-support-readiness/cust_support_ops_critical_access) を招待します
- 米国市民権を_必要とする_プロジェクトの場合は、[gitlab-support-readiness/cust_support_ops_team_us_citizens](https://gitlab.com/gitlab-support-readiness/cust_support_ops_team_us_citizens) を招待します
  - **NOTE** 私たちは、プロジェクトが特定の市民権を必要としないように努めるべきです。プロジェクトがそれを必要とする場合、それはプロジェクト内の何らかの成果物（コード、CI/CD など）が市民権で保護されるデータに関わっていることを示しています。これは常に避けられるわけではありませんが、gitlab.com 内に市民権で保護されるデータを置かないことを_常に_目指すべきです。
- それ以外のものについては、[gitlab-support-readiness/cust_support_ops_team](https://gitlab.com/gitlab-support-readiness/cust_support_ops_team) を招待します

どのグループを招待すればよいか分からないときは、チームに相談して助けを求めてください。

### ステップ 4 - ファイルを追加する

この段階では、プロジェクトに最初のコミットを行ってファイルを追加します。追加が必要となる正確なファイルは、プロジェクトの目的（およびその動作）によって異なります。私たちのプロジェクトのセットアップ方法に沿うよう、さまざまなファイルについて以下のガイドラインを確認してください。

- `.gitlab/CODEOWNERS`
  - この正確な内容は使用するコードによって異なりますが、その出発点は常に次のものであるべきです。

  ```plaintext
  [Customer Support Operations]
  * @GROUP_TO_INVITE
  ```

  - `GROUP_TO_INVITE` の値についての詳細は [ステップ 3](#step-3---invite-the-correct-groups) を参照してください
- `bin/post_in_slack.sh`
  - このファイルには常に実行権限を付与する必要があります
  - このファイルの内容は常に次のものであるべきです。

  ```bash
  curl -ss $SLACK_URL_PIPELINE_FAIL \
    -X POST \
    -H 'Content-type: application/json' \
    --data "{\"text\": \"<$CI_PROJECT_URL|$CI_PROJECT_PATH> pipeline <$CI_PIPELINE_URL|#$CI_PIPELINE_ID> failed $DATE\", \"mrkdwn\": true }"
  ```

- `.gitlab-ci.yml`
  - この正確な内容は使用するコードによって異なりますが、一般的なプロジェクトタイプには次のスタートテンプレートを使用できます。

    <details>
    <summary>Sync repos</summary>

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
    <summary>Zendesk apps</summary>

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

  - ここに何を書けばよいか分からない場合は、チームの他のメンバーに連絡して助けを求めてください
- `.rubocop.yml`
  - このファイルの内容は、私たちが現在扱っている ruby のバージョンに常に合わせる必要があります。つまり、次のようになるべきです。

  ```yaml
  AllCops:
    NewCops: enable
    TargetRubyVersion: 3.2.2
  ```

- `.ruby-version`
  - このファイルの内容は、私たちが現在扱っている ruby のバージョンに常に合わせる必要があります。つまり、次のようになるべきです。

  ```plaintext
  3.2.2
  ```

- `Gemfile`
  - gem のリストはアルファベット順であるべきです
  - 必要となる正確な gem は使用するコードによって異なりますが、その出発点は常に次のものであるべきです。

  ```ruby
  # frozen_string_literal: true

  source 'https://rubygems.org'
  ```

- `README.md`
  - この正確な内容は異なりますが、README.md ファイルには次の項目をドキュメント化しておくべきです。
    - プロジェクト名
    - 簡単な説明
    - ファイルツリーのレイアウト
    - 要件
    - CI/CD パイプラインの情報
  - ここに何を書けばよいか分からない場合は、チームの他のメンバーに連絡して助けを求めてください

### ステップ 5 - CI/CD 変数をセットアップする

プロジェクトに必要な CI/CD 変数を構成します。多くの変数は親の名前空間から継承されるので、プロジェクト固有の値に焦点を当ててください。

**追加する一般的な変数:**

- API トークンの値（例: `ZD_TOKEN`、`GL_TOKEN`、`CALENDLY_API_TOKEN` など）
- Slack webhook（継承される `SLACK_URL_PIPELINE_FAIL` を除く）

**継承される変数を確認するには:**

1. プロジェクトの Settings > CI/CD > Variables に移動します
1. 「Inherited from group」セクションを確認して、すでに利用可能なものを把握します
1. 親の名前空間からまだ提供されていない変数のみを追加します

**変数の保護:**

- 機密性の高いトークンは「Masked」としてマークします

### ステップ 6 - 追加の構成（必要に応じて）

ほとんどのプロジェクトでは、ステップ 1〜5 で十分です。ただし、一部のプロジェクトでは次のような追加の構成が必要になる場合があります。

- 外部統合のための webhook のセットアップ
- [コードを別のプロジェクトにミラーリングする](/handbook/security/customer-support-operations/gitlab/mirroring)
- 外部サービス統合の構成
- スケジュールされたパイプラインのセットアップ

追加の構成が必要かどうか分からない場合は、チームに相談してください。

### ステップ 7 - ドキュメント化する

プロジェクト作成の最後のステップは、プロジェクトに関する情報でハンドブックのページを更新することです。これには次の内容を含めるべきです。

- それが何であるか
- それが何をするか
- それがどのように動作するか
- 使用しているデプロイ戦略のタイプ
- 変更の加え方
- トラブルシューティングの情報

## プロジェクト作成後

プロジェクトを作成してドキュメント化したら、次のようになります。

- プロジェクトは、グループメンバーシップに基づいて適切なチームメンバーがアクセスできるようになります
- CI/CD パイプラインは、構成されたルールに従って実行されます
- 変更には、CODEOWNERS の承認を伴うマージリクエストが必要になります
- すべてが正しく構成されていることを確認するため、プロジェクトの最初のパイプラインを監視します
