---
title: "Create:Code Review FE チーム"
description: Create:Code Review FE チームは、Create ステージの Code Review グループ配下のプロダクトカテゴリにおけるすべてのフロントエンドを担当します。
upstream_path: /handbook/engineering/devops/create/code-review/frontend/
upstream_sha: 81a617744130f76604f641d4483828edd0d60d2f
translated_at: "2026-04-28T10:21:26Z"
translator: claude
stale: false
lastmod: "2025-12-05T19:47:34+00:00"
---

## 共通リンク

| **カテゴリ**            | **ハンドル** |
|-------------------------|-------------|
| **GitLab チームハンドル**  | [@code-review-fe](https://gitlab.com/code-review-fe) |
| **Slack チャンネル**               | [`#g_create_source-code-review-fe`](https://gitlab.enterprise.slack.com/archives/CS5NHHBJ7) |
| **Slack ハンドル**               | `@code_review_fe` |
| **チームボード**         | [`現在のマイルストーン`](https://gitlab.com/groups/gitlab-org/-/boards/2177994) |
| **Issue トラッカー**       | [`group::code review` + `gitlab-org` の `frontend`](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=frontend&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20) |

## チームビジョン

GitLab ユーザーのエクスペリエンスにおける中心的な存在として、[DevOps ライフサイクル](/handbook/product/categories/#devops-stages)の [Create ステージ](/handbook/product/categories/#create-stage)の [Code Review グループ](/handbook/product/categories/#code-review-group)配下のすべてのプロダクトカテゴリにおいて、革新を続け、すべてのユーザーにとって快適なエクスペリエンスを提供します。

## チームミッション

実装、技術的負債の管理、ディスカバリーフェーズにおけるタイムリーなフロントエンドの知見の提供を含む、フロントエンドエンジニアリングの専門知識を持ってすべてのカウンターパートをサポートします。

## 定期的に監視する Issue リスト

* [Code Review + フロントエンド Issue](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=frontend&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)
* [マイルストーン計画 Issue](https://gitlab.com/gitlab-org/create-stage/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Planning%20Issue&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)
* [トリアージレポート](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Aignore&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)
* [フィーチャーフラグレポート](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/?sort=created_date&state=opened&label_name%5B%5D=triage%20report&label_name%5B%5D=feature%20flag&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)
* [OKR（機密）](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=created_date&state=opened&assignee_username%5B%5D=andr3&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=20)

## チームメンバー

以下は Create:Code Review FE チームの正式メンバーです。


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/code-review/frontend/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 安定したカウンターパート

以下のメンバーは他の機能チームに所属しており、私たちの安定したカウンターパートです。


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/code-review/frontend/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 中核的な責務

* プロダクトおよび UX と連携し、関連する作業のアイデア出し、リファインメント、スケジューリングを行います
* [Code Review ワークフロープロダクトカテゴリ](https://about.gitlab.com/direction/create/code_review_workflow/)の下での機能開発とバグ修正に対するフロントエンドサポートを提供します
* バグレポートとリグレッションに対応します
* 開発者体験を向上させるメンテナンス作業を特定し、準備します
* フロントエンド部門全体での取り組みに協力します

## プロジェクト

### アクティブプロジェクト一覧

| 開始日 | プロジェクト  | 説明 | テックリード |
| ------ | ------ | ------ |  ------ |
| 2019 | マージリクエスト Vue アプリ | マージリクエストをレンダリングするフロントエンドアプリケーション | — |
| 2023-09 | [New Diffs](/handbook/engineering/architecture/design-documents/rapid_diffs/) ([Epic](https://gitlab.com/groups/gitlab-org/-/epics/11559)) | GitLab 全体で再利用可能かつ高パフォーマンスな差分レンダリングを実現するプロジェクト | — |

## エンジニアリングオンボーディング

### 業務

メインの Code Review ページの[業務セクション](/handbook/engineering/devops/create/code-review/#work)をご覧ください。

### キャパシティ計画


<!-- include omitted: includes/engineering/create/weights-fe.md (no localized version under content/ja/) -->


### キックオフ & レトロスペクティブレビュー

各マイルストーンの第1週に、全 IC との同期ミーティングを開催します。非同期レトロスペクティブで共有されたコメントをレビューした後、各エンジニアが順番に新しいマイルストーンの成果物に向けた計画を発表します。

これはマイルストーンの最初の5〜10日以内に臨時でスケジュールされます。

## その他の関連ページ

* [Create:Code Review AI プロンプト](/handbook/engineering/devops/create/code-review/ai-prompts/)：効率化のために使用する共通のプロンプト集

### Issue

* 2020年4月: [フロントエンド: イテレーションレトロスペクティブ（ソースコード）](https://gitlab.com/gl-retrospectives/create-stage/source-code/-/issues/22)
* 2020年12月: [マージリクエストアーキテクチャウォークスルー](https://gitlab.com/gitlab-org/gitlab/-/issues/291035/designs/gl_mr_architecture_boxes.png)
