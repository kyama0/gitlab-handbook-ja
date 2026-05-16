---
owning-stage: "~devops::verify"
title: "Usage of the GitLab Steps with .gitlab-ci.yml"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_steps/gitlab-ci/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---

このドキュメントは、[GitLab Steps](index.md) が `.gitlab-ci.yml` にどのように統合されるかを説明します。

GitLab Steps は 3 段階の実行サイクルを使用して統合され、`before_script:`、`script:`、`after_script:` を置き換えます。

- `setup:`: 環境のプロビジョニングを担当する実行ステージ。
  リポジトリのクローン、アーティファクトの復元、またはすべての依存関係のインストールを含みます。
  このステージは暗黙的なクローン、アーティファクトの復元、キャッシュのダウンロードを置き換えます。
- `run:`: テスト、ビルド、またはそのジョブが必要とするその他のメインコマンドの実行を担当する実行ステージ。
- `teardown:`: 環境のクリーンアップ、アーティファクトのアップロード、またはキャッシュの保存を担当する実行ステージ。このステージは暗黙的な
  アーティファクトとキャッシュのアップロードを置き換えます。

3 段階の実行を実現する前に、GitLab との事前の統合を必要としない最小限の初期サポートを提供します。

## Phase 1: 初期サポート

当初、Step Runner は GitLab との事前の依存関係なしに外部で使用されます:

- `step-runner` はコンテナイメージの一部として提供されます。
- `step-runner` は `script:` セクションで明示的に実行されます。
- `$STEPS` 環境変数は [`type: steps`](step-definition.md#the-steps-step-type) として実行されます。

```yaml
hello-world:
  image: registry.gitlab.com/gitlab-org/step-runner
  variables:
    STEPS: |
      - step: gitlab.com/josephburnett/component-hello-steppy@master
        inputs:
          greeting: "hello world"
  script:
    - /step-runner ci
```

## Phase 2: `.gitlab-ci.yml` への `run:` の追加

Phase 2 では、`run:` を GitLab Steps を使用するファーストクラスの方法として追加します:

- `run:` は [`type: steps`](step-definition.md#the-steps-step-type) 構文を使用します。
- `run:` は `before_script`、`script`、`after_script` の使用を置き換えます。
- Git クローン、アーティファクト、キャッシュをサポートするすべての既存機能は引き続きサポートされます。
- `after_script` をサポートする方法はまだ定義されていません。`after_script` はジョブがキャンセルされた場合でも無条件で実行されます。
- `run:` は `before_script:`、`script:`、`after_script:` と組み合わせることは許可されません。
- GitLab Rails は `run:` を解析せず、代わりに Step Runner が提供する JSON スキーマで静的バリデーションのみを実行します。

```yaml
hello-world:
  image: registry.gitlab.com/gitlab-org/step-runner
  run:
    - step: gitlab.com/josephburnett/component-hello-steppy@master
      inputs:
        greeting: "hello world"
```

以下の例は構文バリデーションで**失敗**します:

```yaml
hello-world:
  image: registry.gitlab.com/gitlab-org/step-runner
  run:
    - step: gitlab.com/josephburnett/component-hello-steppy@master
      inputs:
        greeting: "hello world"
  script: echo "This is ambiguous and invalid example"
```

### `before_script:`、`script:`、`after_script:` からの移行

GitLab Rails は `*script:` 構文を自動的に関連する `run:` 仕様に変換します:

- 現在、`before_script:` と `script:` は実行のために単一のスクリプトとして結合されています。
- `after_script:` セクションは常に別のコンテキストで実行され、実行される別のステップを表します。
- `after_script` の既存の動作（ジョブのステータスやタイムアウトに関係なく常に実行され、別のタイムアウトを使用する）を保持する方法はまだ定義されていません。
- `script:` をステップベースの実行に変換する際に、すべての環境変数を定義するすべての暗黙的な動作を保持します。

例えば、この CI/CD 設定:

```yaml
hello-world:
  before_script:
    - echo "Run before_script"
  script:
    - echo "Run script"
  after_script:
    - echo "Run after_script"
```

次の同等の仕様に変換できます:

```yaml
hello-world:
  run:
    - step: gitlab.com/gitlab-org/components/steps/legacy/script@v1.0
      inputs:
        script:
          - echo "Run before_script"
          - echo "Run script"
    - step: gitlab.com/gitlab-org/components/steps/legacy/script@v1.0
      inputs:
        script:
          - echo "Run after_script"
      when: always
```

## Phase 3: `.gitlab-ci.yml` への `setup:` と `teardown:` の追加

`setup:` と `teardown:` の追加により、GitLab Runner が提供する暗黙的な機能（Git クローン、アーティファクトとキャッシュの処理）が置き換えられます:

- `setup:` の使用により、GitLab Runner はリポジトリを暗黙的にクローンしなくなります。
- `artifacts:` と `cache:` が指定された場合、後方互換性を維持するために `setup:` と `teardown:` に変換して追加されます。
- `release:` が指定された場合、後方互換性を維持するために `teardown:` に変換して追加されます。
- `setup:` と `teardown:` を `default:` で使用して、リポジトリのクローン方法やアーティファクトの処理方法などの一般的なワークフローのサポートを簡素化できます。
- 3 段階の実行への分割により、`extends:` を使用したステップのコンポーザビリティがさらに向上します。
- `hooks:pre_get_sources_script` は [`script:`](#before_script-script-after_script-からの移行) と同様に実装され、`setup:` の先頭に追加されます。

例えば、この CI/CD 設定:

```yaml
rspec:
  script:
    - echo "This job uses a cache."
  artifacts:
    paths: [binaries/, .config]
  cache:
    key: binaries-cache
    paths: [binaries/*.apk, .config]
```

step runner によって実行される次の同等の仕様に変換できます:

```yaml
rspec:
  setup:
    - step: gitlab.com/gitlab-org/components/git/clone@v1.0
    - step: gitlab.com/gitlab-org/components/artifacts/download@v1.0
    - step: gitlab.com/gitlab-org/components/cache/restore@v1.0
      inputs:
        key: binaries-cache
  run:
    - step: gitlab.com/gitlab-org/components/steps/legacy/script@v1.0
      inputs:
        script:
          - echo "This job uses a cache."
  teardown:
    - step: gitlab.com/gitlab-org/components/artifacts/upload@v1.0
      inputs:
        paths: [binaries/, .config]
    - step: gitlab.com/gitlab-org/components/cache/restore@v1.0
      inputs:
        key: binaries-cache
        paths: [binaries/*.apk, .config]
```

### `default:` による一般的な操作の継承

`setup:` と `teardown:` は時間の経過とともに非常に冗長になりがちです。これを簡素化する 1 つの方法は、
`default:` で一般的な `setup:` と `teardown:` の操作を継承できるようにすることです。

前の例は以下のように簡素化できます:

```yaml
default:
  setup:
    - step: gitlab.com/gitlab-org/components/git/clone@v1.0
    - step: gitlab.com/gitlab-org/components/artifacts/download@v1.0
    - step: gitlab.com/gitlab-org/components/cache/restore@v1.0
      inputs:
        key: binaries-cache
  teardown:
    - step: gitlab.com/gitlab-org/components/artifacts/upload@v1.0
      inputs:
        paths: [binaries/, .config]
    - step: gitlab.com/gitlab-org/components/cache/restore@v1.0
      inputs:
        key: binaries-cache
        paths: [binaries/*.apk, .config]

rspec:
  run:
    - step: gitlab.com/gitlab-org/components/steps/legacy/script@v1.0
      inputs:
        script:
          - echo "This job uses a cache."

linter:
  run:
    - step: gitlab.com/gitlab-org/components/steps/legacy/script@v1.0
      inputs:
        script:
          - echo "Run linting"
```

### 並列ジョブと `setup:`

将来的に `setup:` の導入により、ジョブを並列化する効率的な方法を導入します:

- `setup:` は環境をプロビジョニングするために必要なすべてのステップを定義します。
- `parallel: N` が使用されている場合、`setup:` の結果がスナップショットとして取得され、すべての並列ジョブのベースとして配布されます。
- `run:` と `teardown:` はクローンされたジョブとそのすべてのサービスの上で実行されます。
- Runner はすべての並列ジョブをインテリジェントに制御および配布し、ジョブの固定部分（Git クローン、アーティファクト、依存関係のインストール）のリソース要件を大幅に削減します。

```yaml
rspec-parallel:
  image: ruby:3.2
  services: [postgres, redis]
  parallel: 10
  setup:
    - step: gitlab.com/gitlab-org/components/git/clone@v1.0
    - step: gitlab.com/gitlab-org/components/artifacts/download@v1.0
      inputs:
        jobs: [setup-all]
    - script: bundle install --without production
  run:
    - script: bundle exec knapsack
```

GitLab Runner の想定フロー:

1. Runner は `setup:` と `parallel:` が設定された `rspec-parallel` ジョブを受信します。
1. Runner は `setup` まで Kubernetes クラスター上のブロックボリュームを使用してジョブを実行します。
1. Runner は 2 のブロックボリュームをオーバーレイして Kubernetes で 10 の並列ジョブを実行し、`run:` と `teardown:` の実行を続けます。
