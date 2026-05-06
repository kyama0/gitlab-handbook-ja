---
title: 'GitLab CI Events 提案 3: .gitlab/ci/events フォルダを使用'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_ci_events/proposal-3-using-the-gitlab-ci-events-folder/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

この提案では、イベントのグループごとに別々のファイルを作成したいと考えています。イベントは以下の形式で定義できます。

```yaml
# .gitlab/ci/events/package-published.yml

spec:
  events:
    - name: package/published
---
include:
  - local: .gitlab-ci.yml
    with:
      event: $[[ gitlab.event.name ]]
```

そして `.gitlab-ci.yml` ファイルで、入力を使用できます。

```yaml
# .gitlab-ci.yml

spec:
  inputs:
    event:
      default: push
---
job1:
  script: echo "Hello World"

job2:
  script: echo "Hello World"

job-for-package-published:
  script: echo "Hello World"
  rules:
    - if: $[[ inputs.event ]] == "package/published"
```

イベントが発生したとき:

1. イベントに対する新しいジョブをエンキューします。
1. そのジョブが `.gitlab/ci/events` フォルダ内のイベントファイルを検索します。
1. そのジョブがイベントファイルに対して `Ci::CreatePipelineService` を実行します。

## 問題と質問

1. 定義されたイベント実行ごとに、新しいジョブをエンキューする必要があります。
1. すべてのイベントジョブはファイルを検索する必要があります。
1. これはプロジェクトスコープのイベントにのみ対応します。
1. これは GitLab.com スケールでは機能しません。
