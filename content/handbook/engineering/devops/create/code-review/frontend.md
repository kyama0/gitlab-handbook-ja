---
title: "Create:Code Review FE チーム"
description: Create:Code Review FE チームは、Create ステージの Code Review グループ配下のプロダクトカテゴリにおけるすべてのフロントエンドを担当します。
upstream_path: /handbook/engineering/devops/create/code-review/frontend/
upstream_sha: 3f489816f1fcde506cae1427b280d744ab382621
translated_at: "2026-11-28T06:21:47+09:00"
translator: claude
stale: false
lastmod: "2026-11-27T18:04:05Z"
---

## 共通リンク

| **カテゴリ**            | **ハンドル** |
|-------------------------|-------------|
| **GitLab チームハンドル**  | [@code-review-fe](https://gitlab.com/code-review-fe) |
| **Slack チャンネル**               | [`#g_create_source-code-review-fe`](https://gitlab.enterprise.slack.com/archives/CS5NHHBJ7) |
| **Slack ハンドル**               | `@code_review_fe` |
| **チームボード**         | [`Current Milestone`](https://gitlab.com/groups/gitlab-org/-/boards/2177994) |
| **Issue トラッカー**       | [`gitlab-org` の `group::code review` + `frontend`](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=frontend&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20) |

## 常時監視している Issue リスト

* [Code Review + Frontend issues](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=frontend&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)
* [Milestone Planning Issues](https://gitlab.com/gitlab-org/create-stage/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Planning%20Issue&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)
* [Triage reports](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Aignore&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)
* [Feature flag reports](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/?sort=created_date&state=opened&label_name%5B%5D=triage%20report&label_name%5B%5D=feature%20flag&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)

## プロジェクト

### アクティブなプロジェクト表

| 開始日 | プロジェクト  | 概要 | テックリード |
| ------ | ------ | ------ |  ------ |
| 2019 | Merge Requests Vue app | マージリクエストをレンダリングするフロントエンドアプリケーション | — |
| 2023-09 | [New Diffs](/handbook/engineering/architecture/design-documents/rapid_diffs/) ([Epic](https://gitlab.com/groups/gitlab-org/-/epics/11559)) | GitLab 全体で再利用可能かつパフォーマンスの高い方法で diff をレンダリングするためのプロジェクト | — |

## エンジニアリングのオンボーディング

### 作業

メインの Code Review ページの [Work セクション](/handbook/engineering/devops/create/code-review/#work) を参照してください。

### キャパシティプランニング

<!-- include omitted: includes/engineering/create/weights-fe.md (no localized version under content/ja/) -->

### キックオフ & レトロスペクティブレビュー

各マイルストーンの最初の週に、すべての IC との同期コールを行い、非同期レトロスペクティブで共有されたコメントをレビューします。その後、各エンジニアが新しいマイルストーンの Deliverable に対する自分のプランを順番に発表します。

これはマイルストーンの最初の 5〜10 日以内にアドホックでスケジュールされます。
