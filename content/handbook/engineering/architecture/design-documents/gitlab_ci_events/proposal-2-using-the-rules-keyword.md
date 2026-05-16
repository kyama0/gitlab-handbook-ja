---
title: 'GitLab CI Events 提案 2: rules キーワードを使用'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_ci_events/proposal-2-using-the-rules-keyword/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---

現在の [`rules`](https://docs.gitlab.com/ee/ci/yaml/index.html#rules) システムで実現できるでしょうか？

```yaml
workflow:
  rules:
    - events: ["package/*"]

test_package_published:
  script: echo testing published package
  rules:
    - events: ["package/published"]

test_package_removed:
  script: echo testing removed package
  rules:
    - events: ["package/removed"]
```

1. サブスクリプションをデータベースにアップサートしません。
1. GitLab で何かが起きたときに実行される単一のワーカーを持ちます。
1. ワーカーは正しいパラメーターでパイプラインの作成を試みます。
1. `rules` サブシステムが実行するジョブを見つけたときにパイプラインが実行されます。

## 課題

1. 定義されたイベント実行ごとに、新しいパイプライン作成ワーカーをエンキューする必要があります。
1. パイプラインの作成と実行するビルドの選択は比較的コストがかかる操作です。
1. これは GitLab.com スケールでは機能しません。
