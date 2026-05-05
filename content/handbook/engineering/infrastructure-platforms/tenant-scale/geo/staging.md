---
title: "staging.gitlab.com 上の Geo"
description: "staging.gitlab.com への Geo インストールのドキュメント"
upstream_path: "/handbook/engineering/infrastructure-platforms/tenant-scale/geo/staging/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

#### 概要


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

ステージング上の Geo は非推奨となっており、現在は [staging-ref](../../../environments/staging-ref.md) で有効になっています。このドキュメントの残りのすべての情報は古くなっており、歴史的な目的のために保持されています。

</div>


Geo は GitLab.com のステージング環境で完全に動作しています。これはチームが新しい機能をスケールでテストおよび検証し、バグを発見し、パフォーマンスの問題を特定できるようにする重要なドッグフーディングの取り組みです。これは、Geo の改善に対する信頼を高めるため、お客様にとって重要です。

以下の項目では、ステージング環境で Geo を有効にする際に対処したいくつかの特定の設定や方法について説明します:

##### アーキテクチャ

[staging.gitlab.com](https://staging.gitlab.com) のために 1 つの [Geo セカンダリノード](https://geo.staging.gitlab.com)が稼働しており、すべてのコンポーネントが 1 つの単一ノードに配置された[オールインワンボックス](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/gstg-infra-geo-secondary.json)として設定されています。現在のところ、[Geo HA デプロイ](https://docs.gitlab.com/ee/administration/geo/replication/multiple_servers.html)は*実行していません*。

![Geo ステージング図](/images/handbook/engineering/geo/geo_staging_diagram.png "Geo ステージング図")

##### PostgreSQL レプリケーション

ステージング環境の Geo プライマリデータベースからデータをレプリケートするためにアーカイブリカバリを使用することにしました。設定方法の完全な説明は、単一ノードのインストールを参照するこの[ランブック](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/geo-patroni-cluster.md#setup-replication-for-a-single-node)の上部セクションにあります。

##### PostgreSQL Foreign Data Wrappers（FDW）- クエリのタイムアウト

GitLab Geo は、セカンダリレプリカとトラッキングデータベース間でいくつかのクロスデータベースクエリを実行するために [PostgreSQL Foreign Data Wrappers（FDW）](https://wiki.postgresql.org/wiki/Foreign_data_wrappers)を使用します。このアプローチの技術的な優雅さにもかかわらず、これらのクエリは Geo にいくつかの問題を引き起こしました。

当初、ステージング環境はまだ PostgreSQL 9.6 を実行しており、Geo は PostgreSQL 10 以降でのみ利用可能な join push-down や aggregate push-down などの FDW の改善の恩恵を受けます。これにより、バックフィルフェーズ中に一部の FDW クエリがタイムアウトしました。この問題が PostgreSQL 10 以降の Geo では問題ではなくなることを知っているため、ステージングでのステートメントタイムアウトを 20 分に増やすことでバックフィルを続行するのに十分でした。

13.2 リリース以降、[バックフィル操作を簡素化することで Geo のスケーラビリティを改善](https://gitlab.com/groups/gitlab-org/-/epics/2851)し、これらのクロスデータベースクエリを排除して FDW 要件を削除しました。

##### PostgreSQL バージョン

ステージングは現在 PostgreSQL バージョン 11.7 を使用しています。2020 年 5 月に、[SRE データストアチームと協力して Geo ノードを Postgres 11 を使用するように更新しました](https://gitlab.com/gitlab-org/gitlab/-/issues/217629)。

##### Gitaly シャード

Geo セカンダリノードの前提条件として、同じ論理 Gitaly シャードセットで設定されることが必要です。つまり、`git_data_dirs` 設定の名前が Geo プライマリノードのものと一致する必要があります。

ステージングでは、ほとんどのプライマリ Git ストレージシャードはほぼ空であり、ZFS ストレージや Praefect などの未完成の機能の実験的なアーティファクトがあります。このため、現時点では 1 つの物理シャードのみを使用し、すべての論理シャードをその上に格納しています。これを実現するために、Geo セカンダリノードの `git_data_dirs` で定義された各論理 Gitaly シャードが同じパスと `gitaly_address` を共有します。

##### シークレット

ステージングシークレットを使用している間に、ステージング上の Geo セカンダリノードで問題が発生しました。Geo セカンダリノードは独自の GKMS シークレットストアを使用する必要があり、これにより競合する設定を削除し、本番環境とは異なるこのノードのシークレットを設定することができました。

##### デプロイ

Geo セカンダリノードへのデプロイは間接的に行われます。staging.gitlab.com へのデプロイの最終ステップの 1 つは、実行するべき GitLab のバージョンで Chef の属性を更新し、その特定のパッケージのインストールを有効にするフラグを設定することです。Chef は Geo セカンダリノードでほぼ 30 分ごとに実行されます。staging.gitlab.com への正常なデプロイ後に、このノードで Chef が次回実行されるとき、Geo ノードはアップグレードを開始します。最悪の場合、Geo セカンダリノードはアップグレードプロセスを開始するまでに 30 分かかります。

##### 既知の問題

ステージング環境には、データベース内のすべてのプロジェクトのファイルシステム上のデータ（リポジトリ、LFS オブジェクト、アップロードなど）がありません。失敗したレジストリの再同期を何度も試みることによる多くの偽陽性エラーとリソースの無駄を避けるために、グループレベルで[選択的同期](https://docs.gitlab.com/ee/administration/geo/replication/configuration.html#selective-synchronization)を有効にすることにしました。現在は `gitlab-org` グループをレプリケートしています。

ステージングには既存のレプリケーション/検証の問題がある場合があります。それらすべてを [Geo ステージングメンテナンス Epic](https://gitlab.com/groups/gitlab-org/-/epics/5094) で追跡することを目指しています。

#### 監視

- [Grafana - Geo プライマリインサイト](https://dashboards.gitlab.net/d/WO9bDCnmz/geo-primary-insights?orgId=1&refresh=10s&var-environment=gstg&var-prometheus=prometheus-01-inf-gstg&var-app_prometheus=prometheus-app-01-inf-gstg&var-interval=1h)
- [Grafana - Geo セカンダリステータス](https://dashboards.gitlab.net/d/l8ifheiik/geo-status?orgId=1&refresh=5m&var-environment=gstg&var-prometheus=prometheus-01-inf-gstg&var-app_prometheus=prometheus-app-01-inf-gstg&var-events_interval=1h)
- [Sentry](https://sentry.gitlab.net/gitlab/geo-staging-gitlabcom/issues/1387504)

#### Geo エンジニアの責任とサポートローテーション

**全員**が自分の MR の QA テストに責任を持ちます（該当する場合）。重要なものは確実に対処し、それ以下のものは追跡してください。ステージング上の Geo で問題に気づいたら、ローテーションエンジニアに DRI として ping/割り当てを行ってください。

毎月、Geo バックエンドエンジニアがステージング上の Geo を監視し、問題を作成/エスカレートする DRI となります。これはオンコールシフトではなく、DRI は問題を自分自身で修正することは必須ではありません。

ローテーションの最後の週に、退任者は着任者とのミーティングを設定して次のことを確認する必要があります:

- ステージング環境への SSH アクセスがある
- ステージング上の Geo 管理 UI を表示できる
- [Sentry の geo-staging-gitlabcom プロジェクト](https://sentry.gitlab.net/gitlab/geo-staging-gitlabcom/)の通知を有効にしている
- ステージング Geo の現在進行中の Issue を把握している

このローテーションの主な目標:

- ステージング上の Geo が機能することを確認する。
- ステージング上の Geo を機能させる責任を分散する。
- カスタマー sysadmin の経験をよりよく理解する。

##### DRI の日次タスク

- https://staging.gitlab.com/admin/geo/nodes を確認する。何か異常に見えるものがあれば、`#geo-for-gitlab-dot-com` で質問する。必要に応じて `#g_geo` にクロスポストする。重要なものは確実に対処する。
- Sentry を確認する。現在はノイズが多いですが、エッジケースを特定したり、内部で何かが問題かどうかを特定するのに役立ちます。
- [トリガーされたアラート](https://gitlab.com/gitlab-org/geo-team/geo-ci/-/alert_management)を確認する。見つかった場合は、対応のための[ドキュメント](scheduled_pipelines.html)に従う。

##### ステージング上の Geo が機能していない場合

- 診断を進める方法:
  - Sentry、Kibana、Grafana などで調査し、SSH でサーバーにアクセスする。
  - Issue を開く
  - 他の人に助けを求める
- エンジニアリングマネージャー、プロダクトマネージャー、インフラのカウンターパートと一緒に Issue の優先順位付けを支援する。

##### ローテーションスケジュール

| 月     | 担当者             |
| -----     | ------           |
| **2023**  | |
| 12 月  | [`@jtapiab`](https://gitlab.com/jtapiab) |
| 11 月  | [`@aakriti.gupta`](https://gitlab.com/aakriti.gupta) |
| 10 月   | [`@brodock`](https://gitlab.com/brodock) |
| 9 月 | [`@dbalexandre`](https://gitlab.com/dbalexandre) |
| 8 月    | [`@vsizov`](https://gitlab.com/vsizov) |
| 7 月      | [`@mkozono`](https://gitlab.com/mkozono) |
| 6 月      | [`@ibaum`](https://gitlab.com/ibaum) |
| **2022**  | |
| 7 月      | [`@dbalexandre`](https://gitlab.com/dbalexandre) |
| 6 月      | [`@mkozono`](https://gitlab.com/mkozono) |
| 5 月       | [`@cat`](https://gitlab.com/cat) |
| 4 月     | [`@mkozono`](https://gitlab.com/mkozono) |
| 3 月     | [`@dbalexandre`](https://gitlab.com/dbalexandre) |
| 2 月  | [`@cat`](https://gitlab.com/cat) |
| 1 月   | [`@vsizov`](https://gitlab.com/vsizov) |
