---
title: "AI Coding：DAP Code Review"
description: "AI Coding 内の DAP Code Review ファンクショナルチーム。マージリクエスト向けの AI を活用したコードレビュー機能に注力しています。"
upstream_path: /handbook/engineering/ai/ai-coding/code-review/dap/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T12:16:47-05:00"
translated_at: "2026-06-23T07:32:46+09:00"
translator: codex
stale: false
---

## 概要

DAP Code Review チームは、[Duo Code Review](https://docs.gitlab.com/user/project/merge_requests/duo_in_merge_requests/) に注力しています。これは AI を活用したコードレビュー機能で、マージリクエストに対して自動化されたインサイトとフィードバックを提供します。このチームは、AI Coding 内のより広い Code Review 組織の一部です。

## 機能

- マージリクエストとコード変更の AI 生成サマリー
- 自動化されたコードレビューコメントと提案
- カスタマイズされたレビューフィードバックのためのカスタム指示
- GitLab のマージリクエストワークフローとの統合

## 主な情報

| | |
|---|---|
| **Slack チャンネル** | `#g_code-review` |
| **Stage ラベル** | `devops::ai coding` |
| **Group ラベル** | `group::code review` |
| **Category ラベル** | `Category:DAP Code Review` |

## ダッシュボードと監視

- [Duo Code Review 監視ダッシュボード](https://log.gprd.gitlab.net/app/r/s/xVFdB) - summarize review、summary merge request、Duo Code Review (DCR) のレイテンシ、エラー率、DCR コメント、DCR カスタム指示などのメトリクス (Kibana)
- [Duo Code Review 利用ダッシュボード](https://app.snowflake.com/ys68254/gitlab/#/francoisrose-duo-code-review-dNsR9ByyW) - プロジェクトごとの利用データと統計 (Snowflake)
- [DAP 採用ダッシュボード](https://10az.online.tableau.com/t/gitlab/views/AgenticAIProductAdoption/Overview/c8ccd819-38b8-491f-859b-407e1f5f7490/8725ee67-495d-4947-a489-dcf6dcb2fb9a) - フローごとにフィルタリング可能なユーザー数、セッション数、利用時間、エラー数 (Tableau)
- [AI フィードバックダッシュボード](https://10az.online.tableau.com/t/gitlab/views/AiFeedbackDashboard/AiFeedbackDashboard2/7be4a96b-ed04-41f3-85c1-2fe4e0ea0516/c6a77c31-d4f2-4aa1-b5da-ab9a0a868f44) - Code Review に対するポジティブ／ネガティブのフィードバック率 (Tableau)

## ドキュメント

- [Duo Code Review ドキュメント](https://docs.gitlab.com/user/project/merge_requests/duo_in_merge_requests/)
- [元のエピック](https://gitlab.com/groups/gitlab-org/-/epics/13008)
- [更新されたエピック](https://gitlab.com/groups/gitlab-org/-/epics/18142)
