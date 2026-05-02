---
title: GitLab.com のモニタリング
upstream_path: /handbook/engineering/monitoring/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T05:26:36Z"
translator: claude
stale: false
---

## GitLab.com サービス可用性

GitLab.com の可用性は顧客ごとにモニタリングされています。顧客のダウンタイムを判定するための方法論は、[サービスレベル契約](/handbook/engineering/infrastructure-platforms/service-level-agreement/)に文書化されています。
このページに記録されている可用性は、選択されたサービスの指標を使用して測定されています。これはカバードエクスペリエンスだけでなく、エラーとレイテンシの両方を対象としています。これは SLA に記載されているものとは異なります。これらの数値は内部的に使用されます。

このページでは、GitLab.com を内部的にモニタリングするために使用しているツールについて説明します。
GitLab.com サービス可用性の計算方法論は[モニタリングポリシー](/handbook/engineering/gitlab-com/policies/monitoring/)に記載されています。

障害、劣化の定義の詳細については、[インシデント管理ページ](/handbook/engineering/infrastructure-platforms/incident-management/#definition-of-outage-vs-degraded-vs-disruption-and-when-to-communicate)をご覧ください。

## 過去のサービス可用性

| **年月** | **可用性** | **コメント** |
| ---- | ----------- | ---- |
| 2026 年 3 月 | 99.93% |  |
| 2026 年 2 月 | 99.95% |  |
| 2026 年 1 月 | 100.00% |  |
| 2025 年 12 月 | 99.99% |  |
| 2025 年 11 月 | 99.98% |  |
| 2025 年 10 月 | 99.95% |  |
| 2025 年 9 月 | 100.00% |  |
| 2025 年 8 月 | 100.00% |  |
| 2025 年 7 月 | 99.91% |  |
| 2025 年 6 月 | 99.84% |  |
| 2025 年 5 月 | 99.73% |  |
| 2025 年 4 月 | 99.97% |  |
| 2025 年 3 月 | 100.00% |  |
| 2025 年 2 月 | 99.99% |  |
| 2025 年 1 月 | 99.98% |  |
| 2024 年 12 月 | 99.95% |  |
| 2024 年 11 月 | 100.00% |  |
| 2024 年 10 月 | 99.66% |  |
| 2024 年 9 月 | 99.85% |  |
| 2024 年 8 月 | 100.00% |  |
| 2024 年 7 月 | 99.99% |  |
| 2024 年 6 月 | 99.99% |  |
| 2024 年 5 月 | 100.00% |  |
| 2024 年 4 月 | 99.96% | |
| 2024 年 3 月 | 100% | |
| 2024 年 2 月 | 99.86% | |
| 2024 年 1 月 | 100% | |
| 2023 年 12 月 | 99.99% |  |
| 2023 年 11 月 | 99.99% |  |
| 2023 年 10 月 | 99.89 | 10 月 30 日 [Sev 1](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17054) |
| 2023 年 9 月 | 99.98% |  |
| 2023 年 8 月 | 100% |  |
| 2023 年 7 月 | 99.78% | 2 件のセビリティ 1 インシデントがサービス障害の約 94% を占めました。[2023-07-07](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/15997)、[2023-07-14](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/16042) |
| 2023 年 6 月 | 100% |  |
| 2023 年 5 月 | 99.92% |  |
| 2023 年 4 月 | 99.98% |  |
| 2023 年 3 月 | 99.99% |  |
| 2023 年 2 月 | 99.98% |  |
| 2023 年 1 月 | 99.80% |  |
| 2022 年 12 月 | 100% |  |
| 2022 年 11 月 | 99.86% |  |
| 2022 年 10 月 | 100% |  |
| 2022 年 9 月 | 99.98% |  |
| 2022 年 8 月 | 99.92% |  |
| 2022 年 7 月 | 99.95% |  |
| 2022 年 6 月 | 99.96% |  |
| 2022 年 5 月 | 99.99% |  |
| 2022 年 4 月 | 99.98% |  |
| 2022 年 3 月 | 99.91% |  |
| 2022 年 2 月 | 99.87% |  |
| 2022 年 1 月 | 99.95% |  |
| 2021 年 12 月 | 99.96% |  |
| 2021 年 11 月 | 99.71% |  |
| 2021 年 10 月 | 99.98% |  |
| 2021 年 9 月 | 99.85% |  |
| 2021 年 8 月 | 99.86% |  |
| 2021 年 7 月 | 99.78% |  |
| 2021 年 6 月 | 99.84% |  |
| 2021 年 5 月 | 99.85% | [PostgreSQL 12 アップグレード](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/4037)の手動調整は含まれていません |
| 2021 年 4 月 | 99.98% | |
| 2021 年 3 月 | 99.34% | |
| 2021 年 2 月 | 99.87% | |
| 2021 年 1 月 | 99.88% | |
| 2020 年 12 月 | 99.96% | |
| 2020 年 11 月 | 99.90% | |
| 2020 年 10 月 | 99.74% | |
| 2020 年 9 月 | 99.95% | |
| 2020 年 8 月 | 99.87% | |
| 2020 年 7 月 | 99.81% | |
| 2020 年 6 月 | 99.56% | |
| 2020 年 5 月 | 99.58% | |

## 関連ページ

* [本番アーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/)
* [GitLab.com 設定](https://docs.gitlab.com/ee/user/gitlab_com/)
* [GitLab パフォーマンスモニタリングドキュメント](https://docs.gitlab.com/ee/administration/monitoring/performance/#gitlab-performance-monitoring)
* [アプリケーションのパフォーマンス](/handbook/engineering/performance/)

## 関連動画

これらの動画は、サーバー、ネットワーク、データベース、セキュリティ、パフォーマンスに関連する障害、欠陥、問題を迅速に特定する方法の例を示しています。

* [モニタリングツールプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KpQMEbnXjeQUA22SZtz7J0e) _（GitLab Unfiltered YouTube アカウントのアクセスが必要）_
* [視覚化ツールプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KrDIsPQ68htUUbvCgt9JeQj) _（GitLab Unfiltered YouTube アカウントのアクセスが必要）_

## モニタリング

### Pingdom 統計

公式の可用性報告には apdex ベースの測定を使用しています（上記参照）。ただし、GitLab.com の全体的なパフォーマンスの代表的なビューとして、いくつかの公開 pingdom テストも実施しています。これらは [https://stats.pingdom.com](https://stats.pingdom.com/81vpf8jyr1h9) で確認できます。具体的には、以下の可用性とレイテンシが含まれています:

* GitLab.com の Issue。参考として、[最初の gitlab-ce Issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/1) です。
* [GitLab.com](https://gitlab.com/) の「シンプルな」チェック（[GitLab パブリックチェック](https://stats.pingdom.com/81vpf8jyr1h9/4932705/history)と呼ばれます）。

#### モニタリングインフラ

メトリクスの取り込みとクエリには Grafana [Mimir](https://grafana.com/oss/mimir/) を使用しています。Mimir は Prometheus を拡張するオープンソースの分散時系列データベースです。実装の詳細については、[Runbook ドキュメント](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/mimir?ref_type=heads#architecture)をご覧ください。

### モニタリングダッシュボード

メトリクスは [Grafana](https://dashboards.gitlab.net/) で確認できます。Grafana の [Explore](https://dashboards.gitlab.net/explore) ダッシュボードでは、PromQL を使用して Mimir のすべてのデータをクエリできます。

* アクセスには Google SSO 経由の `@gitlab.com` メールアドレスが必要です
* 高可用性セットアップ
* このセットアップからアラートが送信されます
* コンプライアンス、セキュリティ、可用性の理由から公開から分離されています

#### ダッシュボードの追加

Grafana を使用して新しいグラフやダッシュボードを設定する方法については、以下のリソースをご覧ください:

* [Grafana によるダッシュボード設定ガイド](https://grafana.com/docs/grafana/latest/getting-started/get-started-grafana-prometheus/)
* [ダッシュボード設定方法を示す YouTube 動画](https://www.youtube.com/watch?v=sKNZMtoSHN4&index=7&list=PLDGkOdUX1Ujo3wHw9-z5Vo12YLqXRjzg2)
* Grafana で作成された InfluxDB ダッシュボードのアーカイブを保管している [Grafana リポジトリ](https://gitlab.com/gitlab-org/grafana-dashboards)。ファイル構造の詳細を確認するためにご使用ください。ただし、このリポジトリは真のアーカイブであり（そこから何もデプロイされません）、古くなっている可能性があります。

ダッシュボードを追加するためのアクセスが必要ですか？[インフラチーム](/handbook/company/team/?department=infrastructure-department)内の任意のチームリードにお問い合わせください。

#### ステージグループ向けダッシュボード

[各ステージグループ](/handbook/product/categories/#devops-stages)向けに設計されたモニタリングダッシュボードのセットがあります。これらのダッシュボードは、機能カテゴリに携わるすべての人が、自分たちのコードが GitLab.com スケールでどのように動作しているかを把握できるように設計されています。機能/コードの変更、デプロイ、フィーチャーフラグの切り替えの影響を示すために、ステージグループごとにグループ化されています。

1. [各ステージグループのダッシュボード一覧（GitLab チームメンバー限定）](https://dashboards.gitlab.net/dashboards/f/stage-groups/stage-groups)
1. [ステージグループダッシュボード入門ガイド](https://docs.gitlab.com/ee/development/stage_group_observability/dashboards/)
1. [ステージグループダッシュボードを紹介する YouTube 動画](https://youtu.be/xB3gHlKCZpQ)

ステージグループのダッシュボードはまだ初期段階です。すべての貢献を歓迎します。質問や提案がある場合は、[Scalability チームの Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/new)に Issue を提出してください。

### モニタリングから選定した有用なダッシュボード

#### ブラックボックスモニタリング

* [GitLab Web Status](https://dashboards.gitlab.net/d/pb3fvC7mk/gitlab-web-status): GitLab のフロントエンド視点。ユーザー視点から GitLab.com がどのように見えるかを理解するのに役立ちます。GitLab のどの部分が遅いかをすばやくトラブルシュートするためにこのグラフを使用してください。
* [GitLab Git Status](https://dashboards.gitlab.net/dashboard/db/gitlab-git-status): GitLab SSH アクセスのフロントエンド視点。

#### プライベートホワイトボックスモニター

* [Host Stats](https://dashboards.gitlab.net/dashboard/db/host-stats): 特定のホストを詳しく調べて何が起きているかを理解するのに役立ちます。上部のドロップダウンからホストを選択してください。
* [Business Stats](https://dashboards.gitlab.net/dashboard/db/business-stats): プッシュ数、新しいリポジトリ、CI ビルドを表示します。
* [Daily overview](https://dashboards.gitlab.net/dashboard/db/daily-overview): コール数とパフォーマンスメトリクスを伴うエンドポイントを表示します。全体的に何が遅いかを理解するのに役立ちます。

## ログ

ネットワーク、システム、アプリケーションのログは、[ELK スタック](https://www.elastic.co/platform)を使用して処理・保存・検索されています。[GCP 上のマネージド Elasticsearch クラスター](https://www.elastic.co/partners/google-cloud)を使用しているため、インターフェースは API、Kibana、elastic.co の Web UI のみです。システムのパフォーマンスとメトリクスのモニタリングには、Elastic の x-pack モニタリングメトリクスを使用しています。これらは専用のモニタリングクラスターに送信されます。長期的には Prometheus と Grafana を優先インターフェースに切り替える予定です。Elastic によって管理されているため、VM は Elastic が運用しており、私たちはアクセスできません。ただし、エラーやインシデントの調査には、生のログが [Kibana](https://log.gprd.gitlab.net) 経由で利用可能です。
ステージングログは、別の [Kibana](https://nonprod-log.gitlab.net/) インスタンスから利用できます。

Kibana ダッシュボードは、アプリケーションアクティビティ、スパムイベント、一時的なエラー、システムおよびネットワーク認証イベント、セキュリティイベントなどのモニタリングに使用されます。よく使用されるダッシュボードは Abuse、SSH、Rack Attack ダッシュボードです。

インフラのロギング方法については、[runbook](https://gitlab.com/gitlab-com/runbooks/blob/master/howto/logging.md) に概要が記載されています。

ログ管理に関するポリシーは[モニタリングポリシー]に記載されています。

### ダッシュボードの追加

Kibana ダッシュボードの作成方法については、以下のリソースをご使用ください:

* [Elastic.com の Kibana ダッシュボードチュートリアル](https://www.elastic.co/guide/en/kibana/current/index.html)
* [ダッシュボードの構築](https://www.elastic.co/guide/en/kibana/current/dashboard.html)
* [時系列可視化のための TimeLion の使用](https://www.elastic.co/guide/en/kibana/current/legacy-editors.html#timelion)

## GitLab プロファイリング

### Go サービス

[Stackdriver Continuous Go Profiling](https://cloud.google.com/profiler) を使用すると、Go サービスのパフォーマンスとリソース消費をより深く理解できます。_（Google Workspace の `stackdriver-profiler-sg` グループへのメンバーシップが必要）_

CPU とメモリ使用データを含む GCP 上のシンプルな UI が提供されます:

* [Gitaly（および Praefect）](https://gitlab.com/gitlab-org/gitaly)
* [Workhorse](https://gitlab.com/gitlab-org/gitlab-workhorse)
* [GitLab Pages](https://gitlab.com/gitlab-org/gitlab-pages)
* [GitLab Container Registry](https://gitlab.com/gitlab-org/container-registry)

詳細については、[クイックビデオチュートリアル](https://www.youtube.com/watch?v=q3uudK1lU8g)をご覧ください。

また、[この Issue](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/479) で各プロジェクトの開発チームとペアリングして一連の詳細調査を行い、以下の動画が生まれました:

* [Gitaly](https://youtu.be/3TSO_evSi5Q)
* [GitLab Pages](https://youtu.be/K7dYSnO0gns)
* [GitLab Registry](https://youtu.be/pZZEvysCyrg)

## パフォーマンスモニタリングのための Ruby のインストルメンテーション

Ruby コードのブロックをパフォーマンス計測のために「インストルメント」できます。

* [インストルメンテーションのドキュメント](https://docs.gitlab.com/ee/api/usage_data.html)と[実装方法](https://docs.gitlab.com/ee/operations/product_analytics/instrumentation/)の詳細
* GitLab 自体に対してこれがどのように使用されているかの例は、この[イニシャライザー](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/initializers/zz_metrics.rb)で確認できます。

## その他のツール

### Sentry

エラートラッキングサービス。

* [ドキュメント](https://docs.gitlab.com/ee/operations/error_tracking.html)
* [500 エラーの調査方法 - Sentry / Kibana デモ](https://youtu.be/o02t3V3vHMs)
* [GitLab.com でのエラー診断 - Sentry の検索](/handbook/support/workflows/500_errors/#searching-sentry)

#### グループ向け Sentry アラートの設定

アラートルールを作成することで、グループが機能をモニタリングし、問題を積極的に検出できるようになります。これにより、エラーバジェット SLO を超える前に問題を修正でき、GitLab.com サービス可用性の維持に貢献します。

アラート作成手順:

1. Sentry の[アラートルールダッシュボード](https://new-sentry.gitlab.net/organizations/gitlab/alerts/rules)を開く。
1. 右上の「Create Alert」ボタンをクリックする。
1. グループの機能カテゴリに応じた必要な条件を設定する。
1. 次の命名規則で新しい公開 Slack チャンネルを作成する: "g_group_name_alerts"。例: [#g_govern_compliance_alerts](https://gitlab.slack.com/archives/C05GEBG97V3)
1. アラート通知を送信するためにこのチャンネルを選択する。
1. 新しいアラートがないかグループをモニタリングし、解決に向けて取り組む。

### Sitespeed.io

ウェブサイトの速度とパフォーマンスをモニタリング、分析、最適化するためのツール。

* [ドキュメント](https://docs.gitlab.com/ee/ci/testing/browser_performance_testing.html#overview)
* [GitLab.com Sitespeed 測定リポジトリ](https://gitlab.com/gitlab-org/frontend/sitespeed-measurement-setup/)
* [sitespeed.io を使用したフロントエンドパフォーマンスの測定方法](https://www.youtube.com/watch?v=6xo01hzW-f4)
