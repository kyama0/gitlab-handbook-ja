---
title: AI Core Infra：Duo Service Infra
description: "AI Core Infra 内の Duo Service Infra ファンクショナルチーム。AI Gateway と Duo Workflow Service の信頼性改善と可観測性に重点を置いています。"
upstream_path: /handbook/engineering/ai/ai-core-infra/duo-service-infra/
upstream_sha: 8451bcaa23ef826bedc5422c87ee89de121dd85b
lastmod: "2026-07-13T17:23:35+02:00"
translated_at: "2026-07-14T06:42:18+09:00"
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

## チームリソース

| リソース | リンク |
|---|---|
| **チームプロジェクト** | [Duo Service Infra チームプロジェクト](https://gitlab.com/gitlab-org/ai-powered/duo-service-infra/team) |
| **Issue ボード** | [Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/11425042) |

## チームミーティング

1. **Duo Service Infra 週次同期**
   * **日時：** 毎週火曜日、15:00 UTC
   * **内容：** ステータス更新、アドホックな作業、長期イニシアチブの進捗を扱う週次同期です。

## ダッシュボード

1. [Prometheus ベースのダッシュボード](https://dashboards.gitlab.net/d/duo-workflow-svc-main/duo-workflow-svc3a-overview?orgId=1&from=now-6h%2Fm&to=now%2Fm&timezone=utc&var-PROMETHEUS_DS=mimir-runway&var-environment=gprd)
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
