---
title: 'GitLab CI Events 提案 5: 統合提案'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_ci_events/proposal-5-combined-proposal/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---

この提案では、凝集したイベントのグループに対して別々のファイルを持ちます。そのファイルはメインの `.gitlab-ci.yml` 設定ファイルにインクルードされます。

```yaml
# my/events/packages.yaml

spec:
  events:
    - events/package/published
    - events/audit/package/*
  inputs:
    env:
---
do_something:
  script: ./run_for $[[ event.name ]] --env $[[ inputs.env ]]
  rules:
    - if: $[[ event.payload.package.name ]] == "my_package"
```

`.gitlab-ci.yml` ファイルでサブスクリプションを有効化できます。

```yaml
# .gitlab-ci.yml

include:
  - local: my/events/packages.yaml
    inputs:
      env: test

```

GitLab はインクルードされたファイルの変更を検出し、スペックをパースします。サブスクリプションを定義するために必要なすべての情報がスペックにカプセル化されるため、ファイル全体を読む必要はありません。`spec` ヘッダーを簡単に読んでチェックサムを計算でき、それがワークフロー識別子になります。

新しい識別子を見つけたら、特定のプロジェクトのサブスクリプションを再定義し、データベースにアップサートします。

パブリッシャーとサブスクライバーをマッチングしてパイプラインを実行するために、効率的な GIN インデックスマッチング技術を使用します。

この構文は CI コンポーネントとも互換性があり、GitLab 内で発生するイベントに対してのみ実行するように設計されたコンポーネントを定義しやすくなります。

## エントリポイントファイルなしのバリアント

この提案の別のバリアントは、単一の GitLab CI YAML 設定ファイルから離れることです。その場合、`.gitlab/workflows/` のような別の検索**ディレクトリ**を定義し、そこにすべての YAML ファイルを保存します。

GitLab が自動的にこれらを見つけるため、ワークフロー/イベントファイルをどこにも `include` する必要がありません。この方法でこの機能を実装するには、「`.gitlab-ci.yml` ファイルのカスタムの場所」などの機能を拡張する必要があります。

例（メインの設定ファイルを使用しない場合、GitLab CI YAML ファイルは引き続きサポートされます）:

```yaml
# .gitlab/workflows/push.yml

spec:
  events:
    - events/repository/push
---
rspec-on-push:
  script: bundle exec rspec
```

```yaml
# .gitlab/workflows/merge_requests.yml

spec:
  events:
    - events/merge_request/push
---
rspec-on-mr-push:
  script: bundle exec rspec
```

```yaml
# .gitlab/workflows/schedules.yml

spec:
  events:
    - events/pipeline/schedule/run
---
smoke-test:
  script: bundle exec rspec --smoke
```
