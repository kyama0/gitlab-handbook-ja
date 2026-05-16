---
title: "Duo Code Review"
description: "AI を活用したコードレビューの支援とインサイト"
upstream_path: /handbook/engineering/ai/ai-coding/duo_code_review/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-15T16:03:12-06:00"
---

## 概要

Duo Code Review は、コードレビュープロセス中に AI を活用した支援を提供し、開発者が変更を理解し、潜在的な問題を特定し、コード品質を向上させるのを助けます。

## 機能

- マージリクエストとコード変更の AI 生成サマリー
- 自動化されたコードレビューコメントと提案
- カスタマイズされたレビューフィードバックのためのカスタム指示
- GitLab のマージリクエストワークフローとの統合

## ダッシュボードと監視

- [Duo Code Review 監視ダッシュボード](https://log.gprd.gitlab.net/app/r/s/xVFdB) - レビューサマリ、マージリクエストサマリ、Duo Code Review（DCR）のレイテンシ、エラー率、DCR コメントや DCR カスタム指示などのメトリクス（Kibana）
- [Duo Code Review 利用ダッシュボード](https://app.snowflake.com/ys68254/gitlab/#/francoisrose-duo-code-review-dNsR9ByyW) - プロジェクトごとの利用データと統計（Snowflake）

## ドキュメント

- [GitLab ドキュメント](https://docs.gitlab.com/user/project/merge_requests/duo_in_merge_requests/)
- [元の Epic](https://gitlab.com/groups/gitlab-org/-/epics/13008)
- [更新された Epic](https://gitlab.com/groups/gitlab-org/-/epics/18142)
