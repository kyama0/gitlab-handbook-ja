---
title: AI Core Infra：Duo Service Infra
description: "AI Core Infra 内の Duo Service Infra ファンクショナルチーム。AI Gateway と Duo Workflow Service の信頼性改善と可観測性に重点を置いています。"
upstream_path: /handbook/engineering/ai/ai-core-infra/duo-service-infra/
upstream_sha: e829b207a53856c23a25197426cca945626ade8a
lastmod: "2026-07-01T10:27:42+02:00"
translated_at: "2026-07-05T01:37:53+09:00"
translator: codex
stale: false
---

## 概要

Duo Service Infra チームは AI Core Infra 組織の一部であり、AI Gateway と Duo Workflow Service の信頼性と可観測性に重点を置いています。

このページは作成中です。

## 重要情報

| | |
|---|---|
| **Slack チャンネル** | `#f_duo-service-infra` |
| **Stage ラベル** | `devops::ai platform` |
| **Group ラベル** | `group::ai core infra` |
| **Category ラベル** | `category:duo service infra` |

## チームミーティング

1. **Duo Service Infra 週次同期**
   * **日時：** 毎週火曜日、15:00 UTC
   * **内容：** ステータス更新、アドホックな作業、長期イニシアチブの進捗を扱う週次同期です。

## ダッシュボード

1. [DWS ログベースダッシュボード](https://dashboards.gitlab.net/goto/efqoxvuthbwu8a?orgId=1)
1. [AI Gateway SLI](https://dashboards.gitlab.net/d/ai-gateway-main/ai-gateway-overview?orgId=1)
1. [Duo Workflow Service SLI](https://dashboards.gitlab.net/d/duo-workflow-svc-main/duo-workflow-svc3a-overview?orgId=1)
1. [LLM Sidekiq completions](https://dashboards.gitlab.net/d/sidekiq-main/sidekiq-overview?orgId=1)
1. [CompletionWorker 経由の Sentry](https://new-sentry.gitlab.net/organizations/gitlab/issues/?query=is%3Aunresolved++CompletionWorker&referrer=issue-list&statsPeriod=14d)
1. [Feature Category 経由の Sentry](https://new-sentry.gitlab.net/organizations/gitlab/issues/?query=is%3Aunresolved+feature_category%3Aai_abstraction_layer&referrer=issue-list&statsPeriod=24h)
1. [Chat REST API エラー率](https://log.gprd.gitlab.net/app/r/s/lDEwi)
1. [モデルごとの ITPM](https://dashboards.gitlab.net/goto/-O0w_rsHg?orgId=1)
1. [プロバイダーごとのリクエスト数](https://dashboards.gitlab.net/goto/Ta-BL_-NR?orgId=1)
1. [エラー予算](https://dashboards.gitlab.net/d/product-ai-powered_error_budget/product-error-budgets-ai-powered?orgId=1)
