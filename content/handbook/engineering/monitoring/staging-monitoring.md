---
title: "ステージングモニタリング"
description: "ステージング環境のモニタリング方法とトラフィック生成方法"
upstream_path: /handbook/engineering/monitoring/staging-monitoring/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T05:26:36Z"
translator: claude
stale: false
---

[ステージング環境](../infrastructure-platforms/environments/#staging)は[本番環境と同じサービスレベルモニタリングルール](../)を採用しています:

> サービスは以下の条件が満たされたときに利用可能とみなされます:
>
> 1. サービスの [Apdex スコア](https://en.wikipedia.org/wiki/Apdex)がサービスレベル目標（[SLO](https://en.wikipedia.org/wiki/Service-level_objective)）を_上回っている_、
> 1. _かつ_ [エラーレート](https://en.wikipedia.org/wiki/Bit_error_rate)がサービスレベル目標（[SLO](https://en.wikipedia.org/wiki/Service-level_objective)）を_下回っている_。

ステージングモニタリングの目標は、進行中のデプロイを停止するために使用できる SLO アラートを持つことです。これにより、問題のあるデプロイが本番環境に到達する前に早期に検出・停止できます。これを実現するには、環境に十分なベースロードトラフィックがあり、SLO 障害のシグナルが十分に強い必要があります。

ステージング環境は、実際のユーザーが本番環境ほど多くないため、本番環境ほどのユーザーアクティビティがありません。この環境は主に [GitLab QA パイプライン](/handbook/engineering/testing/end-to-end-pipeline-monitoring/)などのテスト自動化や、コードを手動でテストするエンジニアによって使用されます。これらのアクティビティは十分なトラフィックを生成しないため、実際のユーザーからのシグナル不足を補うために人工的なトラフィックを生成するカスタムの負荷[エミュレーションツール](#負荷エミュレーション)が設計されました。

## 負荷エミュレーション

[CMBR](https://gitlab.com/gitlab-com/gl-infra/cmbr/) は、対象の GitLab インスタンスにトラフィックを生成する Web クローラーです。Web、API、Git、Registry、Pages のサービスに対してトラフィックを生成できます。

既知の制限事項:

- クローラーは `GET` リクエストのみを実行し、データを作成しません。ただし、ステージングに対して実行される既存の E2E テストが GitLab の基本機能をカバーしているため、この問題はそれほど深刻ではありません。
- 負荷は合成的なものであり、特定のデータに依存するエッジケースなど、すべてのユースケースをカバーしているわけではありません。
- 既存のステージングテストデータは本番環境のものと異なります。
- IP やユーザーのレート制限などのレート制限がトラフィック生成に影響する場合があります。
- ステージング環境は本番環境と比較してスペックが低いです。環境を壊さないように負荷を調整する必要があります。
- Git トラフィックは[現時点](#進行中の作業)では HTTP のみです。

### ステージング上のクローラー設定

CMBR は `gstg` と `cny-gstg` に対して[スケジュールパイプライン](https://staging.gitlab.com/gitlab-com/gl-infra/cmbr-staging-load-generator/-/pipeline_schedules)を使用してステージングのトラフィックを生成しています。このツールは、負荷を生成してレート制限をバイパスするために、監査者ロールを持つ専用ユーザーを使用します（ステージングクローラーの認証情報は 1Password の `Engineering` ボールトに保存されています）。

スループットは環境変数によって制御され、サービスごとに異なる値に調整されています。負荷を増やす必要がある場合は、ステージング環境のパフォーマンスを考慮し、既存の [GitLab QA パイプライン](/handbook/engineering/testing/end-to-end-pipeline-monitoring/)に影響を与えないことを確認する必要があります。そうしないと、テスト実行に断続的なエラーが発生し、デプロイに影響を与える可能性があります。

## ステージングサービスモニタリング

[Alertmanager](https://gitlab.com/gitlab-com/runbooks/-/tree/master/alertmanager) は、特定のサービスで Apdex スコアまたはエラーレートが違反した場合に [`#feed_alerts_staging`](https://gitlab.slack.com/archives/C029L5NMHH8) Slack チャンネルに SLO アラートを送信します。その後、インフラチームがアラートをさらに調査します。

特定のサービスの健全性を確認するには、以下のダッシュボードを使用できます:

- [GitLab Web 概要](https://dashboards.gitlab.net/d/web-main/web-overview?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gstg&var-stage=main)
- [GitLab API 概要](https://dashboards.gitlab.net/d/api-main/api-overview?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gstg&var-stage=main)
- [GitLab Git 概要](https://dashboards.gitlab.net/d/git-main/git-overview?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gstg&var-stage=main)
- [GitLab Registry 概要](https://dashboards.gitlab.net/d/registry-main/registry-overview?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gstg&var-stage=main)
- [GitLab Pages 概要](https://dashboards.gitlab.net/d/web-pages-main/web-pages-overview?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gstg&var-stage=main)

サービスモニタリングの詳細については、[GitLab.com のモニタリング](../)ページをご覧ください。

現在のセットアップについてご質問がある場合は、[`#f_staging_service_level_monitoring`](https://gitlab.slack.com/archives/C02TWDXDPPT) Slack チャンネルにお問い合わせください。

## 進行中の作業

- ステージング SLO アラートの品質改善 - [epic#668](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/668)
- ステージング SLI が低下した場合に本番環境へのデプロイを停止する - [epic#771](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/771)
- CMBR を使用した SSH トラフィックの生成 - [issue#5](https://gitlab.com/gitlab-com/gl-infra/cmbr/-/issues/5)
