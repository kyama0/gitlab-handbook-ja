---
title: GitLab.com のモニタリング
upstream_path: /handbook/engineering/monitoring/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## GitLab.com サービス可用性

GitLab.com の可用性は顧客ごとにモニタリングされています。顧客のダウンタイムを判定するための方法論は、[サービスレベル契約](/handbook/engineering/infrastructure-platforms/service-level-agreement/)に文書化されています。
このページに記録されている可用性は、選択されたサービスの指標を使用して測定されています。これはカバードエクスペリエンスだけでなく、エラーとレイテンシの両方を対象としています。これは SLA に記載されているものとは異なります。これらの数値は内部的に使用されます。

このページでは、GitLab.com を内部的にモニタリングするために使用しているツールについて説明します。
GitLab.com サービス可用性定義の計算方法論は、[モニタリングポリシー](/handbook/engineering/gitlab-com/policies/monitoring/) にあります。

障害や劣化の定義に関する詳細は、[インシデント管理ページ](/handbook/engineering/infrastructure-platforms/incident-management/#definition-of-outage-vs-degraded-vs-disruption-and-when-to-communicate) にあります。

## サービス可用性の履歴

| **年月** | **可用性** | **コメント** |
| ---- | ----------- | ---- |
| 2026年4月 | 99.31% |  |
| 2026年3月 | 99.93% |  |
| 2026年2月 | 99.95% |  |
| 2026年1月 | 100.00% |  |
| 2025年12月 | 99.99% |  |
| 2025年11月 | 99.98% |  |
| 2025年10月 | 99.95% |  |
| 2025年9月 | 100.00% |  |
| 2025年8月 | 100.00% |  |
| 2025年7月 | 99.91% |  |
| 2025年6月 | 99.84% |  |
| 2025年5月 | 99.73% |  |
| 2025年4月 | 99.97% |  |
| 2025年3月 | 100.00% |  |
| 2025年2月 | 99.99% |  |
| 2025年1月 | 99.98% |  |
| 2024年12月 | 99.95% |  |
| 2024年11月 | 100.00% |  |
| 2024年10月 | 99.66% |  |
| 2024年9月 | 99.85% |  |
| 2024年8月 | 100.00% |  |
| 2024年7月 | 99.99% |  |
| 2024年6月 | 99.99% |  |
| 2024年5月 | 100.00% |  |
| 2024年4月 | 99.96% | |
| 2024年3月 | 100% | |
| 2024年2月 | 99.86% | |
| 2024年1月 | 100% | |
| 2023年12月 | 99.99% |  |
| 2023年11月 | 99.99% |  |
| 2023年10月 | 99.89 | 10月30日 [Sev 1](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17054) |
| 2023年9月 | 99.98% |  |
| 2023年8月 | 100% |  |
| 2023年7月 | 99.78% | 2件の Severity 1 インシデントがサービス障害の約94%を占めました。  [2023-07-07](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/15997), [2023-07-14](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/16042) |
| 2023年6月 | 100% |  |
| 2023年5月 | 99.92% |  |
| 2023年4月 | 99.98% |  |
| 2023年3月 | 99.99% |  |
| 2023年2月 | 99.98% |  |
| 2023年1月 | 99.80% |  |
| 2022年12月 | 100% |  |
| 2022年11月 | 99.86% |  |
| 2022年10月 | 100% |  |
| 2022年9月 | 99.98% |  |
| 2022年8月 | 99.92% |  |
| 2022年7月 | 99.95% |  |
| 2022年6月 | 99.96% |  |
| 2022年5月 | 99.99% |  |
| 2022年4月 | 99.98% |  |
| 2022年3月 | 99.91% |  |
| 2022年2月 | 99.87% |  |
| 2022年1月 | 99.95% |  |
| 2021年12月 | 99.96% |  |
| 2021年11月 | 99.71% |  |
| 2021年10月 | 99.98% |  |
| 2021年9月 | 99.85% |  |
| 2021年8月 | 99.86% |  |
| 2021年7月 | 99.78% |  |
| 2021年6月 | 99.84% |  |
| 2021年5月 | 99.85% | [PostgreSQL 12 アップグレード](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/4037) の手動調整は含まれていません |
| 2021年4月 | 99.98% | |
| 2021年3月 | 99.34% | |
| 2021年2月 | 99.87% | |
| 2021年1月 | 99.88% | |
| 2020年12月 | 99.96% | |
| 2020年11月 | 99.90% | |
| 2020年10月 | 99.74% | |
| 2020年9月 | 99.95% | |
| 2020年8月 | 99.87% | |
| 2020年7月 | 99.81% | |
| 2020年6月 | 99.56% | |
| 2020年5月 | 99.58% | |

## 関連ページ

* [本番アーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/)
* [GitLab.com 設定](https://docs.gitlab.com/ee/user/gitlab_com/)
* [GitLab パフォーマンスモニタリングドキュメント](https://docs.gitlab.com/ee/administration/monitoring/performance/#gitlab-performance-monitoring)
* [アプリケーションのパフォーマンス](/handbook/engineering/performance/)

## 関連動画

これらの動画は、サーバー、ネットワーク、データベース、セキュリティ、パフォーマンスに関連する障害、欠陥、問題を素早く特定する方法の例を提供します。

* [モニタリングツールプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KpQMEbnXjeQUA22SZtz7J0e) _(GitLab Unfiltered YouTube アカウントへのアクセス権が必要)_
* [可視化ツールプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KrDIsPQ68htUUbvCgt9JeQj) _(GitLab Unfiltered YouTube アカウントへのアクセス権が必要)_

## モニタリング

### Pingdom 統計

公式の可用性を報告するには apdex ベースの測定を使用します(上記参照)。ただし、GitLab.com の全体的なパフォーマンスを代表する観点で、いくつかの公開 Pingdom テストもあります。これらは [https://stats.pingdom.com](https://stats.pingdom.com/81vpf8jyr1h9) で利用できます。具体的には、次のものへの到達可用性とレイテンシを持っています。

* GitLab.com の Issue。参考までに、これは [最初の gitlab-ce Issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/1) です。
* [GitLab.com](https://gitlab.com/) は「シンプルで分かりやすい」もので、[GitLab パブリックチェック](https://stats.pingdom.com/81vpf8jyr1h9/4932705/history) と呼ばれます。

#### モニタリングインフラストラクチャ

メトリクスの取り込みとクエリには Grafana [Mimir](https://grafana.com/oss/mimir/) を使用しています。Mimir は Prometheus を拡張したオープンソースの分散時系列データベースです。実装の詳細は [Runbook ドキュメント](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/mimir?ref_type=heads#architecture) で読むことができます。

### モニタリングダッシュボード

メトリクスは [Grafana](https://dashboards.gitlab.net/) で表示できます。Grafana の [Explore](https://dashboards.gitlab.net/explore) ダッシュボードでは、PromQL を使って Mimir 内のすべてのデータをクエリできます。

* アクセスには Google SSO 経由の `@gitlab.com` メールアドレスが必要です
* 高可用性セットアップ
* アラートはこのセットアップから供給されます
* コンプライアンス、セキュリティ、可用性の理由から、パブリックとは分離されています

#### ダッシュボードの追加

Grafana を使った新しいグラフまたはダッシュボードのセットアップ方法を学ぶには、次のリソースをご覧ください。

* [Grafana ダッシュボードのセットアップガイド (Grafana 提供)](https://grafana.com/docs/grafana/latest/getting-started/get-started-grafana-prometheus/)
* [ダッシュボードのセットアップ方法を示す YouTube 動画](https://www.youtube.com/watch?v=sKNZMtoSHN4&index=7&list=PLDGkOdUX1Ujo3wHw9-z5Vo12YLqXRjzg2)
* Grafana で作成された InfluxDB ダッシュボードのアーカイブを保管している [Grafana リポジトリ](https://gitlab.com/gitlab-org/grafana-dashboards)。ファイル構造の詳細を確認するのに使用しますが、このリポジトリは実際にはアーカイブであり (そこから何かが取り込まれることはない)、古くなっている可能性があることに注意してください。

ダッシュボードを追加するためのアクセスが必要ですか? [インフラストラクチャチーム](/handbook/company/team/?department=infrastructure-department) 内のチームリードに尋ねてください。

#### ステージグループ向けダッシュボード

[各ステージグループ](/handbook/product/categories/#devops-stages) 向けに設計された一連のモニタリングダッシュボードがあります。これらのダッシュボードは、特定のフィーチャーカテゴリーで働くすべての人に、コードが GitLab.com スケールでどのように動作するかについてのインサイトを提供するように設計されています。ステージグループごとにグループ化され、フィーチャー／コード変更、デプロイ、フィーチャーフラグの切り替えの影響を示します。

1. [各ステージグループ向けダッシュボードのリスト (GitLab チームメンバーのみ)](https://dashboards.gitlab.net/dashboards/f/stage-groups/stage-groups).
1. [ステージグループ向けダッシュボード入門ガイド](https://docs.gitlab.com/ee/development/stage_group_observability/dashboards/)
1. [ステージグループダッシュボードを紹介する YouTube 動画](https://youtu.be/xB3gHlKCZpQ)

ステージグループ向けダッシュボードは非常に初期段階です。すべてのコントリビューションを歓迎します。質問や提案がありましたら、[Scalability チームの Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/new) に Issue を作成してください。

### モニタリングから役立つダッシュボードのセレクション

#### ブラックボックスモニタリング

* [GitLab Web ステータス](https://dashboards.gitlab.net/d/pb3fvC7mk/gitlab-web-status): GitLab のフロントエンドの観点。GitLab.com がユーザーの観点からどのように見えるかを理解するのに便利。GitLab のどの部分が遅いかをすばやくトラブルシューティングするには、このグラフを使用してください。
* [GitLab Git ステータス](https://dashboards.gitlab.net/dashboard/db/gitlab-git-status): GitLab の ssh アクセスのフロントエンド観点。

#### プライベートホワイトボックスモニター

* [Host Stats](https://dashboards.gitlab.net/dashboard/db/host-stats): 特定のホストの状況を深く掘り下げるのに便利。上部のドロップダウンからホストを選択します。
* [Business Stats](https://dashboards.gitlab.net/dashboard/db/business-stats): プッシュ、新規リポジトリ、CI ビルドの数を表示します。
* [Daily overview](https://dashboards.gitlab.net/dashboard/db/daily-overview): 呼び出し数とパフォーマンスメトリクスを持つエンドポイントを表示します。何が遅いかを一般的に理解するのに便利。

## ログ

ネットワーク、システム、アプリケーションのログは、[ELK スタック](https://www.elastic.co/platform) を使用して処理、保存、検索されます。私たちは [GCP 上のマネージド Elasticsearch クラスター](https://www.elastic.co/partners/google-cloud) を使用しており、API、Kibana、および elastic.co の Web UI を通じてのみインタラクトできます。システムのパフォーマンスとメトリクスのモニタリングには、Elastic の x-pack モニタリングメトリクスを使用しています。これらは専用のモニタリングクラスターに送信されます。長期的には、好ましいインターフェースとして Prometheus と Grafana に切り替える予定です。Elastic がマネージドするため、彼らが VM を運用し、私たちはそれらにアクセスできません。ただし、エラーやインシデントを調査するために、生のログは [Kibana](https://log.gprd.gitlab.net) 経由で利用できます。
ステージングのログは別の [Kibana](https://nonprod-log.gitlab.net/) インスタンス経由で利用できます。

Kibana ダッシュボードは、アプリケーションのアクティビティ、スパムイベント、一時的なエラー、システムおよびネットワークの認証イベント、セキュリティイベントなどをモニターするために使用されます。よく使われるダッシュボードは、Abuse、SSH、Rack Attack ダッシュボードです。

私たちのインフラストラクチャをどのようにログ記録しているかは、私たちの [runbook](https://gitlab.com/gitlab-com/runbooks/blob/master/howto/logging.md) で概説されているとおり閲覧できます。

ログ管理に関連するポリシーは [the monitoring policy] にあります。

### ダッシュボードの追加

Kibana ダッシュボードの作成方法を学ぶには、次のリソースを使用してください。

* [Elastic.com の Kibana ダッシュボードチュートリアル](https://www.elastic.co/guide/en/kibana/current/index.html)
* [ダッシュボードの構築](https://www.elastic.co/guide/en/kibana/current/dashboard.html)
* [時系列の可視化用 TimeLion の使い方](https://www.elastic.co/guide/en/kibana/current/legacy-editors.html#timelion)

## GitLab プロファイリング

### Go サービス

[Stackdriver Continuous Go Profiling](https://cloud.google.com/profiler) を使用して、Go サービスのパフォーマンスとリソース消費をより理解できます。 _(Google Workspace の `stackdriver-profiler-sg` グループのメンバーシップが必要)_

GCP 上に CPU とメモリ使用量のデータを表示するシンプルな UI を提供します:

* [Gitaly (および Praefect)](https://gitlab.com/gitlab-org/gitaly)
* [Workhorse](https://gitlab.com/gitlab-org/gitlab-workhorse)
* [GitLab Pages](https://gitlab.com/gitlab-org/gitlab-pages)
* [GitLab Container Registry](https://gitlab.com/gitlab-org/container-registry)

詳細については、[短い動画チュートリアル](https://www.youtube.com/watch?v=q3uudK1lU8g) が利用可能です。

また、[この Issue](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/479) で各プロジェクトの開発チームとペアリングして一連のディープダイブを実施し、次の動画が作成されました。

* [Gitaly](https://youtu.be/3TSO_evSi5Q)
* [GitLab Pages](https://youtu.be/K7dYSnO0gns)
* [GitLab Registry](https://youtu.be/pZZEvysCyrg)

## パフォーマンス計測のための Ruby インストルメンテーション

Ruby コードのブロックを「インストルメント」してパフォーマンスを測定できます。

* [インストルメンテーションのドキュメント](https://docs.gitlab.com/ee/api/usage_data.html) と [その実装方法の詳細](https://docs.gitlab.com/ee/operations/product_analytics/instrumentation/)
* GitLab 自体でこれがどのように使用されているかの例は、この [initializer](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/initializers/zz_metrics.rb) にあります。

## その他のツール

### Sentry

エラートラッキングサービス。

* [ドキュメント](https://docs.gitlab.com/ee/operations/error_tracking.html)
* [500 エラーの調査方法 - Sentry / Kibana デモ](https://youtu.be/o02t3V3vHMs)
* [GitLab.com のエラーの診断 - Sentry の検索](/handbook/support/workflows/500_errors/#searching-sentry)

#### グループ向けの Sentry アラート設定

アラートルールを作成すると、グループが自身のフィーチャーをモニターし、問題をプロアクティブにキャッチするのに役立ちます。これにより、エラー予算 SLO を侵害する前に問題を修正でき、結果として GitLab.com のサービス可用性を高く保つのに役立ちます。

アラートを作成する手順:

1. Sentry の [アラートルールダッシュボード](https://new-sentry.gitlab.net/organizations/gitlab/alerts/rules) にアクセスします。
1. 右上の「Create Alert」ボタンをクリックします。
1. グループのフィーチャーカテゴリーに合わせて必要な条件を設定します。
1. 次の命名規則 "g_group_name_alerts" で新しいパブリック Slack チャンネルを作成します。例: [#g_govern_compliance_alerts](https://gitlab.slack.com/archives/C05GEBG97V3)
1. このチャンネルをアラート通知の送信先に選択します。
1. 新しいアラートがあればグループを監視し、解決に向けて作業します。

### Sitespeed.io

ウェブサイトの速度とパフォーマンスをモニター、分析、最適化するのを助けるツール。

* [ドキュメント](https://docs.gitlab.com/ee/ci/testing/browser_performance_testing.html#overview)
* [GitLab.com Sitespeed 測定リポジトリ](https://gitlab.com/gitlab-org/frontend/sitespeed-measurement-setup/)
* [Sitespeed.io を使用してフロントエンドのパフォーマンスを測定する方法](https://www.youtube.com/watch?v=6xo01hzW-f4)
