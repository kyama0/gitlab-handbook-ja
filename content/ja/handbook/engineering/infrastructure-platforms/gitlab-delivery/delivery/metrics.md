---
title: "Delivery チームメトリクス"
description: "Delivery チームは GitLab Engineering が GitLab.com とセルフマネージドのお客様に対して、安全でスケーラブルかつ効率的な方法で機能を届けられるよう支援します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/metrics/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## メトリクス

[Delivery チーム](../_index.md) はアプリケーション変更を本番環境にデプロイするスピード能力の指標として、Mean Time To Production（MTTP）を使用しています。

- [パフォーマンス指標](/handbook/engineering/infrastructure/performance-indicators/#mean-time-to-production-mttp)
- **目標: 12時間**

{{< tableau height="900px" toolbar="hidden" src="https://10az.online.tableau.com/t/gitlab/views/InfrastructureKPIs/MeanTimetoProductionKPI" >}}
{{< /tableau >}}

MTTP は gitlab-org/gitlab プロジェクトのマスターブランチに変更をマージしてから、その変更を GitLab.com にデプロイするまでの経過時間（時間単位）を測定します。

## MTTP の内訳

MTTP は以下で構成されます：

- インクルージョンまでの時間: マージリクエストがマージされ、オートデプロイブランチに含まれるのを待っている状態。
- パッケージングまでの時間: デプロイするパッケージがビルドされている状態。
- ステージングまでの時間: パッケージがステージングにデプロイされてテストされるまでにかかる時間。
- カナリアまでの時間: パッケージがカナリアにデプロイされてテストされるまでにかかる時間。
- 本番環境までの時間: パッケージが本番環境にデプロイされるまでにかかる時間。

MTTP のサブコンポーネントを測定するために、以下のメトリクスが使用されます：

- [デプロイ SLO](#deployment-slo)

これらにより、MTTP をさらに削減するために速度と安全性のどちらに注力すべきかを判断できます。

### デプロイ SLO

- **目標: 8時間**
- [ダッシュボード](https://dashboards.gitlab.net/d/delivery-deployment_slo/delivery-deployment-slo?orgId=1&refresh=5m)

デプロイ SLO は、デプロイパイプラインが目標時間内に完了する割合を追跡することで、デプロイの頻度と所要時間を測定します。デプロイ所要時間は、ステージングカナリア（`gstg-cny`）での開始から本番環境（`gprd`）でのデプロイ完了までの経過時間として測定されます。さまざまな環境と[デプロイプロセス](/handbook/engineering/releases/monthly-releases/#monthly-release-overview)のエンドツーエンドの概要については、[リリースページ](/handbook/engineering/releases/)をご覧ください。

![デプロイ SLO apdex](https://gitlab.com/api/v4/projects/430285/jobs/artifacts/master/raw/deployment-slo-apdex.png?job=refresh-delivery-slo-apdex-graph)

次のステップ: [デプロイ SLO メトリクスをリリースプロセスの一部として組み込む](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/533)

### Release Manager 作業負荷メトリクス

[Release Manager 作業負荷メトリクス（社内リンク）](https://docs.google.com/spreadsheets/d/1xENgrQwAQkA3ImtxsnqgQYEGxxevbUeNhXLFRUUKayk/edit#gid=1820673269)は、リリース管理タスクに必要な時間を追跡します。

各プロセスは主要な部分に分解され、最も多くの労力が費やされている箇所を特定するのに役立ちます。全体的な時間が追跡され、平均により時間の経過とともに変化を観察できます。

測定対象と測定方法の詳細については、[リリースドキュメント](https://gitlab.com/gitlab-org/release/docs/-/blob/master/metrics/release_manager_workload.md)をご覧ください。
