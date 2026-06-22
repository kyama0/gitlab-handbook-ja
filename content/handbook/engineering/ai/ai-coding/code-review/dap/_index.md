---
title: "AI Coding:DAP Code Review"
description: "AI Coding 内の DAP Code Review 機能チーム。マージリクエスト向けの AI を活用したコードレビュー機能に注力しています。"
upstream_path: /handbook/engineering/ai/ai-coding/code-review/dap/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T16:36:51-04:00"
translated_at: "2026-06-22T21:07:39Z"
translator: claude
stale: false
---

## 概要

DAP Code Review チームは、[Duo Code Review](https://docs.gitlab.com/user/project/merge_requests/duo_in_merge_requests/) に注力しています。これは、マージリクエストに対して自動的なインサイトとフィードバックを提供する、AI を活用したコードレビュー機能です。このチームは、AI Coding 内のより広範な Code Review 組織の一部です。

## 機能

- マージリクエストとコード変更の AI 生成サマリー
- 自動化されたコードレビューコメントと提案
- レビューフィードバックをカスタマイズするためのカスタム指示
- GitLab のマージリクエストワークフローとの統合

## 主要情報

| | |
|---|---|
| **Slack Channel** | `#g_code-review` |
| **Stage Label** | `devops::ai coding` |
| **Group Label** | `group::code review` |
| **Category Labels** | `Category:DAP Code Review` |

## ダッシュボードとモニタリング

- [Duo Code Review Monitoring Dashboard](https://log.gprd.gitlab.net/app/r/s/xVFdB) - summarize review、summary merge request、Duo Code Review (DCR) のレイテンシー、エラー率、DCR コメントや DCR カスタム指示のメトリクスなど (Kibana)
- [Duo Code Review Usage Dashboard](https://app.snowflake.com/ys68254/gitlab/#/francoisrose-duo-code-review-dNsR9ByyW) - プロジェクトごとの利用データと統計 (Snowflake)
- [DAP Adoption Dashboard](https://10az.online.tableau.com/t/gitlab/views/AgenticAIProductAdoption/Overview/c8ccd819-38b8-491f-859b-407e1f5f7490/8725ee67-495d-4947-a489-dcf6dcb2fb9a) - フローでフィルタリング可能なユーザー数、セッション、継続時間、エラー (Tableau)
- [AI Feedback Dashboard](https://10az.online.tableau.com/t/gitlab/views/AiFeedbackDashboard/AiFeedbackDashboard2/7be4a96b-ed04-41f3-85c1-2fe4e0ea0516/c6a77c31-d4f2-4aa1-b5da-ab9a0a868f44) - Code Review に対するポジティブ/ネガティブなフィードバック率 (Tableau)

## ドキュメント

- [Duo Code Review documentation](https://docs.gitlab.com/user/project/merge_requests/duo_in_merge_requests/)
- [Original Epic](https://gitlab.com/groups/gitlab-org/-/epics/13008)
- [Updated Epic](https://gitlab.com/groups/gitlab-org/-/epics/18142)
