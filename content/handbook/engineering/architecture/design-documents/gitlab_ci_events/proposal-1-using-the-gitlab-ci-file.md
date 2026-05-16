---
title: 'GitLab CI Events 提案 1: .gitlab-ci.yml ファイルを使用'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_ci_events/proposal-1-using-the-gitlab-ci-file/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---

現在、2 つの概念実証（POC）実装があります。

- [GitLab CI Workflows PoC](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/91244)
- [PoC NPM CI events](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/111693)

両者は類似したアイデアを持っています。

1. パイプラインイベントを定義するための新しい CI 設定構文を見つける。

    例 1:

    ```yaml
    workflow:
      events:
        - events/package/published

    # または

    workflow:
      on:
        - events/package/published
    ```

    例 2:

    ```yaml
    spec:
      on:
        - events/package/published
        - events/package/removed
      # on:
      #   package: [published, removed]
    ---
    do_something:
      script: echo "Hello World"
    ```

1. 新しい設定がプッシュされたときにワークフロー定義をデータベースにアップサート（upsert）する。
1. GitLab で何かが起きるたびにサブスクリプションとパブリッシャーをマッチングする。

## 議論

1. サブスクリプションへの変更を効率的に検出するにはどうすればよいか？
1. 異なるブランチのワークフロー/イベント/サブスクリプションの違いをどのように処理するか？
1. すべてのプッシュでサブスクリプションをアップサートする必要があるか？
