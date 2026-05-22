---
title: "Create:Code Review FE チーム"
description: Create:Code Review FE チームは、Create ステージの Code Review グループ配下のプロダクトカテゴリにおけるすべてのフロントエンドを担当します。
upstream_path: /handbook/engineering/devops/create/code-review/frontend/
upstream_sha: eff3a749f8927544a08073e8f660283a5d80478b
translated_at: "2026-05-22T21:55:06Z"
translator: claude
stale: false
lastmod: "2026-05-22T14:47:44+02:00"
---

## 共通リンク

| **カテゴリ**            | **ハンドル** |
|-------------------------|-------------|
| **GitLab チームハンドル**  | [@code-review-fe](https://gitlab.com/code-review-fe) |
| **Slack チャンネル**               | [`#g_create_source-code-review-fe`](https://gitlab.enterprise.slack.com/archives/CS5NHHBJ7) |
| **Slack ハンドル**               | `@code_review_fe` |
| **チームボード**         | [`Current Milestone`](https://gitlab.com/groups/gitlab-org/-/boards/2177994) |
| **Issue トラッカー**       | [`gitlab-org` の `group::code review` + `frontend`](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=frontend&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20) |

## チームビジョン

GitLab ユーザーの体験における中心的な存在として、[DevOps ライフサイクル](/handbook/product/categories/#devops-stages) の [Create ステージ](/handbook/product/categories/#create-stage) における [Code Review グループ](/handbook/product/categories/#code-review-group) 配下のすべてのプロダクトカテゴリに、イノベーションと心地よい体験を提供し続けます。

## チームミッション

実装、技術的負債の管理、ディスカバリーフェーズでのタイムリーなフロントエンドの洞察など、フロントエンドエンジニアリングの専門性で全カウンターパートを支援します。

## 常時監視している Issue リスト

* [Code Review + Frontend issues](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=frontend&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)
* [Milestone Planning Issues](https://gitlab.com/gitlab-org/create-stage/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Planning%20Issue&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)
* [Triage reports](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Aignore&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)
* [Feature flag reports](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/?sort=created_date&state=opened&label_name%5B%5D=triage%20report&label_name%5B%5D=feature%20flag&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)
* [OKR (機密)](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=created_date&state=opened&assignee_username%5B%5D=andr3&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)

## チームメンバー

以下は Create:Code Review FE チームの常設メンバーです。

{{< team-by-manager-role role="Senior Engineering Manager(.*)Create:Code Review" team=".*(Frontend|Fullstack).*Create:Code Review" >}}

## ステーブルカウンターパート

以下のメンバーは、ほかの機能チームに所属する私たちのステーブルカウンターパートです。

{{< engineering/stable-counterparts manager-role="Senior Engineering Manager(.*)Create:Code Review" role="(Product Manager|Technical Writer|Senior Security Engineer|Product Designer).*(Create:Code Review|Create \(Code)|Dev\:Create|Code Review" >}}

## 主な責務

* Product と UX と協力し、関連する作業のアイデア出し、洗練、スケジューリングを行います
* [Code Review Workflow プロダクトカテゴリ](https://about.gitlab.com/direction/create/code_review_workflow/) における機能開発・バグ修正のフロントエンドサポートを提供します
* バグ報告とリグレッションに対応します
* 開発者体験を改善するためのメンテナンス作業を特定し準備します
* Frontend 部門全体での取り組みに協力します

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

{{% include "includes/engineering/create/weights-fe.md" %}}

### キックオフ & レトロスペクティブレビュー

各マイルストーンの最初の週に、すべての IC との同期コールを行い、非同期レトロスペクティブで共有されたコメントをレビューします。その後、各エンジニアが新しいマイルストーンの Deliverable に対する自分のプランを順番に発表します。

これはマイルストーンの最初の 5〜10 日以内にアドホックでスケジュールされます。

## その他関連ページ

* [Create:Code Review AI prompts](/handbook/engineering/devops/create/code-review/ai-prompts/)、効率化のために私たちが利用している共通プロンプト集です。

### Issue

* 2020 年 4 月: [Frontend: Iteration Retrospective (Source Code)](https://gitlab.com/gl-retrospectives/create-stage/source-code/-/issues/22)
* 2020 年 12 月: [Merge Request Architecture Walkthrough](https://gitlab.com/gitlab-org/gitlab/-/issues/291035/designs/gl_mr_architecture_boxes.png)
