---
title: 'GitLab CI Events 提案 4: 専用設定ファイルでのサブスクリプション定義'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_ci_events/proposal-4-creating-events-via-ci-files/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

各プロジェクトは、イベントへのサブスクリプションを定義するための独自の設定ファイルを持つことができます。例えば `.gitlab-ci-event.yml` です。このファイルでは、以下の形式でイベントを定義できます。

```yaml
events:
  - package/published
  - issue/created
```

このファイルがプロジェクトリポジトリで変更されると、パースされてイベントが作成、更新、または削除されます。これは毎回パイプラインの作成を追跡する必要がない点を除いて、[提案 1](proposal-1-using-the-gitlab-ci-file.md) と非常に似ています。

1. `.gitlab-ci-event.yml` が更新されたときにイベントをデータベースにアップサートします。
1. パイプラインをトリガーするために、コード内でイベントへのインラインリアクションを作成します。

## ジョブのフィルタリング

`rules` キーワードを使用してジョブをフィルタリングできます。例えば:

```yaml
test_package_published:
  script: echo testing published package
  rules:
    - events: ["package/published"]

test_package_removed:
  script: echo testing removed package
  rules:
    - events: ["package/removed"]
```

または、CI 変数を使って機能させることもできます。

```yaml
test_package_published:
  script: echo testing published package
  rules:
    - if: $CI_EVENT == "package/published"

test_package_removed:
  script: echo testing removed package
  rules:
    - if: $CI_EVENT == "package/removed"
```

あるいは [提案 3](proposal-3-using-the-gitlab-ci-events-folder.md) のような入力を使う方法もあります。

```yaml
spec:
  inputs:
    event:
      default: push

---

test_package_published:
  script: echo testing published package
  rules:
    - if: $[[ inputs.event ]] == "package/published"

test_package_removed:
  script: echo testing removed package
  rules:
    - if: $[[ inputs.event ]] == "package/removed"
```

## 課題

1. これは GitLab.com スケールでは機能しません。
