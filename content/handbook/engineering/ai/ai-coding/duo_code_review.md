---
title: "Duo Code Review"
description: "AI を活用したコードレビューの支援とインサイト"
upstream_path: /handbook/engineering/ai/ai-coding/duo_code_review/
upstream_sha: 6329e70e21b29c3cf88be90bd4abee6489b39003
translated_at: "2026-05-20T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-20T12:35:40-05:00"
---

## 概要

Duo Code Review は、コードレビュープロセス中に AI を活用した支援を提供し、開発者が変更を理解し、潜在的な問題を特定し、コード品質を向上させるのを助けます。

## 機能

- マージリクエストとコード変更の AI 生成サマリー
- 自動化されたコードレビューコメントと提案
- カスタマイズされたレビューフィードバックのためのカスタム指示
- GitLab のマージリクエストワークフローとの統合

## ダッシュボードと監視

- [Duo Code Review 監視ダッシュボード](https://log.gprd.gitlab.net/app/r/s/xVFdB) - レビューサマリ、マージリクエストサマリ、Duo Code Review (DCR) のレイテンシ、エラー率、DCR コメントや DCR カスタム指示などのメトリクス (Kibana)
- [Duo Code Review 利用ダッシュボード](https://app.snowflake.com/ys68254/gitlab/#/francoisrose-duo-code-review-dNsR9ByyW) - プロジェクトごとの利用データと統計 (Snowflake)
- [DAP 採用ダッシュボード](https://10az.online.tableau.com/t/gitlab/views/AgenticAIProductAdoption/Overview/c8ccd819-38b8-491f-859b-407e1f5f7490/8725ee67-495d-4947-a489-dcf6dcb2fb9a) - フローごとにフィルタリング可能なユーザー数、セッション数、利用時間、エラー数 (Tableau)
- [AI フィードバックダッシュボード](https://10az.online.tableau.com/t/gitlab/views/AiFeedbackDashboard/AiFeedbackDashboard2/7be4a96b-ed04-41f3-85c1-2fe4e0ea0516/c6a77c31-d4f2-4aa1-b5da-ab9a0a868f44) - Code Review に対するポジティブ／ネガティブのフィードバック率 (Tableau)

## ドキュメント

- [GitLab ドキュメント](https://docs.gitlab.com/user/project/merge_requests/duo_in_merge_requests/)
- [元の Epic](https://gitlab.com/groups/gitlab-org/-/epics/13008)
- [更新された Epic](https://gitlab.com/groups/gitlab-org/-/epics/18142)
