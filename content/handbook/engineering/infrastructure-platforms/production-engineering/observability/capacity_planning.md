---
title: "キャパシティプランニング"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/observability/capacity_planning/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T02:14:34Z"
translator: claude
stale: false
lastmod: "2025-07-02T12:32:50-05:00"
---

私たちは [インフラストラクチャハンドブック](/handbook/engineering/infrastructure-platforms/capacity-planning/) に記載されているキャパシティプランニングプロセスを維持・改善しています。これは SOC 2 の対象となる管理された活動です。詳細については [こちらの Issue](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated/sec-compliance/observation-management/-/issues/604) を参照してください。

このプロセスの目標は、GitLab.com における飽和インシデントを予測し防止することです。

Issue は [キャパシティプランニング Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-com/-/issues) で管理されています。このプロセスをサポートするためのメトリクスを改善する Issue が必要な場合は、`Saturation Metrics` ラベルを付けて [Scalability グループトラッカー](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues) に Issue を起票します。

私たちが開発・使用する予測ツールの詳細については [キャパシティプランニングに関する docs-hub](https://gitlab-com.gitlab.io/gl-infra/observability/docs-hub/capacity-planning/introduction/) を参照してください。

## トリアージ業務

トリアージ業務のドキュメントは Observability チームの [docs-hub](https://gitlab-com.gitlab.io/gl-infra/observability/docs-hub/capacity-planning/triage-duties) に移転しました。
