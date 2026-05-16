---
title: "エラーバジェット"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/observability/error_budgets/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T02:14:34Z"
translator: claude
stale: false
lastmod: "2025-03-24T14:24:00+00:00"
---

私たちは [エンジニアリングハンドブック](/handbook/engineering/error-budgets/) に記載されているエラーバジェットプロセスを維持しています。

Issue は `Category::Error Budgets` ラベルを付けて [Observability グループトラッカー](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/issues) で管理されています。

エラーバジェットの生成に使用するメトリクスを維持し、レポートが期限通りに公開されるよう確認します。レポートは [エラーバジェットレポート Issue トラッカー](https://gitlab.com/gitlab-org/error-budget-reports/-/issue) の Issue として公開されます。これらは同じ [プロジェクト](https://gitlab.com/gitlab-org/error-budget-reports) のコードによって自動的に生成されますが、送付前に手動の編集が必要です。

私たちはステージグループの SLO 改善を提唱し、達成のためのサポートを提供します。GitLab.com でフィーチャーカテゴリーがどのように機能しているかについてのデータをステージグループに提供することで、フィーチャーカテゴリーの信頼性、可用性、パフォーマンスを効率的に改善するための適切な判断ができるようにします。
