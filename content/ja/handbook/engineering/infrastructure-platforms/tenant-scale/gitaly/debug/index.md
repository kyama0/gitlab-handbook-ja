---
title: "Gitaly サービスのデバッグ"
upstream_path: /handbook/engineering/infrastructure-platforms/tenant-scale/gitaly/debug/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T04:54:37Z"
translator: claude
stale: false
---

## このドキュメントについて

このドキュメントは **Gitaly エンジニア**向けに作成されており、GitLab の本番環境のレイアウトを把握し、本番環境の問題を効果的にデバッグする能力を身につけることを目的としています。SaaS に重点を置いていますが、多くのスキルはセルフマネージドインスタンスのデバッグにも応用できます。

## GitLab の一般的な背景

以下を読み/ざっと目を通し、まず概要を把握してから Gitaly に集中してください:

- [本番アーキテクチャ](../../../../infrastructure-platforms/production/architecture/)
- [モニタリング](../../../../monitoring/#monitoring)

その他の有用なリンク:

- [製品のセクション、ステージ、グループ、カテゴリー](/handbook/product/categories/)
- [グループ別機能](/handbook/product/categories/features)

### Gitaly 固有の背景

- Gitaly の [README](https://gitlab.com/gitlab-org/gitaly/-/blob/master/README.md?ref_type=heads) を確認する
- [SRE のランブック](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/gitaly) を参照する

### 本番環境における Gitaly

`gitlab.com` と Dedicated はいずれも「シャード」モード、すなわち Praefect（Gitaly Cluster）を使用しない形で Gitaly を使用しています。

## モニタリングダッシュボード

GitLab の内部 Grafana インスタンスには、便利なプリビルトのモニタリングダッシュボードが用意されています。すべてのダッシュボードは[このフォルダ](https://dashboards.gitlab.net/dashboards/f/gitaly/gitaly-service)に一覧されています。一部は古くなっている場合があることに注意してください。

よく使用されるダッシュボードは次のとおりです:

- [Gitaly: 概要](https://dashboards.gitlab.net/d/gitaly-main/gitaly3a-overview?orgId=1&var-PROMETHEUS_DS=default&var-environment=gprd&var-stage=main) - クラスター全体の集計メトリクスが含まれています。クラスターの全体的な正常性を判断し、外れ値のノードを見つけやすくするために使用します。
- [Gitaly: ホスト詳細](https://dashboards.gitlab.net/d/gitaly-host-detail/gitaly3a-host-detail?orgId=1) - 特定のノードのより詳細なメトリクスが含まれています。
- [Gitaly ハウスキーピング統計](https://dashboards.gitlab.net/d/Z2xwZIP7k/gitaly-housekeeping-statistics?orgId=1&refresh=5m) - [Gitaly ハウスキーピング機能](https://docs.gitlab.com/ee/administration/housekeeping.html)の詳細な運用情報を表示します。
- [Gitaly: リバランスダッシュボード](https://dashboards.gitlab.net/d/gitaly-rebalancing/gitaly3a-rebalance-dashboard?from=now-6h%2Fm&to=now%2Fm&var-PROMETHEUS_DS=default&var-environment=gprd&var-fqdn=gitaly-cny-01-stor-gprd.c.gitlab-production.internal&orgId=1) - Gitaly ノード間の相対的なバランスを表示します。リポジトリをあるノードから別のノードに移動する必要があるタイミングを判断するために使用します。

Gitaly のダッシュボードは自動生成されたものと手動で作成されたものがあります。ダッシュボードをコードとして管理するために Jsonnet（JSON のスーパーセット）を使用しています。このようなダッシュボードの定義は[このフォルダ](https://gitlab.com/gitlab-com/runbooks/-/tree/master/dashboards/gitaly?ref_type=heads)にあります。近年、これが可観測性ダッシュボードを管理する推奨方法です。GitLab の組み込みライブラリを使用でき、高度に標準化されたダッシュボードが実現します。

標準化されたダッシュボードには、環境フィルター、ノードフィルター、フィーチャーフラグアクティビティやデプロイなどの有用なアノテーションを含むトップレベルセクションが必要です。一部のダッシュボードには、Grafana と Kibana をワンクリックで接続する相互リンクシステムがあります。

このようなダッシュボードは通常 2 つの部分で構成されています。後半には Gitaly から収集したカスタムメトリクスのパネルが含まれています。前半はより複雑で、Gitaly が「正常」かどうかを示す GitLab 全体の指標と、ノードレベルのリソースメトリクスが含まれています。集計と計算は高度です。要約すると、これらのダッシュボードは事前定義された[しきい値](https://gitlab.com/gitlab-com/runbooks/-/blob/master/metrics-catalog/services/gitaly.jsonnet)に従って Gitaly が正常に機能しているかどうかを示します。質問があれば[Observability チーム](/handbook/engineering/infrastructure-platforms/production-engineering/observability/)にお問い合わせください。

![Gitaly デバッグインジケーター](/images/engineering/infrastructure-platforms/data-access/gitaly/gitaly-debug-indicators.png)

エンジニアの視点から、組み込みダッシュボードを使用して本番問題を調査した例:

- https://gitlab.com/gitlab-com/gl-infra/production/-/issues/18156#note_1965772736
- https://gitlab.com/gitlab-com/gl-infra/production/-/issues/15980#note_1457815084
- https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/23532#note_1374642198

## Gitaly の Prometheus メトリクス

ダッシュボードのパネルは、基となるメトリクスの集計バージョンを可視化したものです。メトリクスの収集には [Prometheus](https://prometheus.io/docs/introduction/overview/) を使用しています。簡単に説明すると、Gitaly サーバーは HTTP サーバー（[コード](https://gitlab.com/gitlab-org/gitaly/-/blob/master/internal/cli/gitaly/serve.go#L514)）を公開しており、Prometheus インスタンスが定期的にメトリクスを取得できるようにしています。

ダッシュボードでは、右上のハンバーガーボタンをクリックして「Explore」を選択することで、基となるメトリクスにアクセスできます。または[Explore ページ](https://dashboards.gitlab.net/explore)でメトリクスを操作することもできます。

![Gitaly デバッグ Explore](/images/engineering/infrastructure-platforms/data-access/gitaly/gitaly-debug-explore.png)

残念ながら、すべての Gitaly メトリクスとその定義のキュレーションされたリストはありません。そのため、複数の場所で定義を調べる必要があるかもしれません。こちらは [Gitaly 関連メトリクスの全リスト](https://dashboards.gitlab.net/explore?schemaVersion=1&panes=%7B%22pum%22%3A%7B%22datasource%22%3A%22mimir-gitlab-gprd%22%2C%22queries%22%3A%5B%7B%22refId%22%3A%22A%22%2C%22expr%22%3A%22group+by%28__name__%29+%28%7B__name__%3D%7E%5C%22.*gitaly.*%5C%22%2C+job%21%3D%5C%22prometheus%5C%22%7D%29%22%2C%22range%22%3Atrue%2C%22instant%22%3Atrue%2C%22datasource%22%3A%7B%22type%22%3A%22prometheus%22%2C%22uid%22%3A%22mimir-gitlab-gprd%22%7D%2C%22editorMode%22%3A%22code%22%2C%22legendFormat%22%3A%22__auto%22%7D%2C%7B%22refId%22%3A%22B%22%2C%22expr%22%3A%22group+by%28__name__%29+%28%7Btype%3D%5C%22gitaly%5C%22%2C+job%21%3D%5C%22prometheus%5C%22%7D%29%22%2C%22range%22%3Atrue%2C%22instant%22%3Atrue%2C%22datasource%22%3A%7B%22type%22%3A%22prometheus%22%2C%22uid%22%3A%22mimir-gitlab-gprd%22%7D%2C%22editorMode%22%3A%22code%22%2C%22legendFormat%22%3A%22__auto%22%7D%5D%2C%22range%22%3A%7B%22from%22%3A%22now-1h%22%2C%22to%22%3A%22now%22%7D%7D%7D&orgId=1)です。いくつかのソースがあります:

- ノードレベルまたは環境メトリクス。これらのメトリクスは Gitaly プロセスをホストする他のシステムによって提供されます。Gitaly では公開されませんが、たとえば CPU メトリクス、メモリメトリクス、cgroup メトリクスなど非常に有用です。
- Gitaly 固有のメトリクス。これらのメトリクスはコードで直接計上されます。通常、`gitaly_` のプレフィックスが付いています。
- 集計メトリクス（異なるメトリクスを組み合わせたり、高カーディナリティの問題によりメトリクスを縮小したものなど）。Gitaly の集計メトリクスのリストは[このファイル](https://gitlab.com/gitlab-com/runbooks/-/blob/master/mimir-rules/gitlab-gprd/gitaly/gitaly.yml)に一覧されています。

![Gitaly デバッグメトリクスリスト](/images/engineering/infrastructure-platforms/data-access/gitaly/gitaly-debug-list-metrics.png)

コードでは次のようなものが見られます。登録されたメトリクスは Prometheus がエンドポイントからスクレイピングするときに利用可能になります。これらのインスタンスをトレースすることで、Gitaly 固有のメトリクスの使用方法を確認できます。

```go
repoCounter := counter.NewRepositoryCounter(cfg.Storages)
prometheus.MustRegister(repoCounter)

packObjectsServedBytes = promauto.NewCounter(prometheus.CounterOpts{
  Name: "gitaly_pack_objects_served_bytes_total",
  Help: "Number of bytes of git-pack-objects data served to clients",
})
```

メトリクスにはラベルのセットがあります。GitLab はすべてのメトリクスに次のラベルセットを追加します:

- `env` または `environment`: 環境。`gprd`、`gstg`、`ops` などが含まれますが、これらに限られません。
- `fqdn`: 完全修飾ドメイン名。Gitaly は現在 VM で動作しているため、このラベルはホスティングノードの識別子に相当します。
- `region` と `zone`: ノードのリージョンとゾーン。
- `stage`: プロセスの現在のステージ。`main` または `cny` のいずれか。
- `service`/`type`: Gitaly の場合は常に `gitaly`。

将来 Gitaly が K8s で動作するようになったとき、K8s 固有のラベルが追加される予定です。

クエリは [PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/) 言語を使用します。いくつかの例:

- [ノード別の pack-refs ハウスキーピングタスクのレート（ops/s）を計算する](https://dashboards.gitlab.net/explore?schemaVersion=1&panes=%7B%22xxn%22:%7B%22datasource%22:%22PA258B30F88C30650%22,%22queries%22:%5B%7B%22datasource%22:%7B%22type%22:%22prometheus%22,%22uid%22:%22PA258B30F88C30650%22%7D,%22exemplar%22:true,%22expr%22:%22sum%28rate%28gitaly_housekeeping_tasks_total%7Benvironment%3D%5C%22gprd%5C%22,%20housekeeping_task%3D%5C%22packed_refs%5C%22%7D%5B$__rate_interval%5D%29%29%20by%20%28fqdn%29%20%3E%200%22,%22hide%22:false,%22interval%22:%22%22,%22legendFormat%22:%22%7B%7Bhousekeeping_task%7D%7D%22,%22refId%22:%22B%22,%22editorMode%22:%22code%22,%22range%22:true,%22instant%22:true%7D%5D,%22range%22:%7B%22from%22:%22now-6h%22,%22to%22:%22now%22%7D%7D%7D&orgId=1)
- [過去 2 日間のリミットによりドロップされた pack-objects/RPC リクエストを計算する](https://dashboards.gitlab.net/explore?schemaVersion=1&panes=%7B%22rmc%22:%7B%22datasource%22:%22mimir-gitlab-gprd%22,%22queries%22:%5B%7B%22expr%22:%22sum%28rate%28gitaly_pack_objects_dropped_total%7Benv%3D%5C%22gprd%5C%22,environment%3D%5C%22gprd%5C%22,type%3D%5C%22gitaly%5C%22%7D%5B$__rate_interval%5D%29%29%20by%20%28fqdn,%20reason%29%20%3E%200%5Cn%22,%22format%22:%22time_series%22,%22interval%22:%22$__interval%22,%22intervalFactor%22:1,%22legendFormat%22:%22Pack-objects%20%7B%7Bfqdn%7D%7D%20%7B%7Breason%7D%7D%22,%22refId%22:%22A%22,%22datasource%22:%7B%22type%22:%22prometheus%22,%22uid%22:%22mimir-gitlab-gprd%22%7D,%22editorMode%22:%22code%22,%22range%22:true,%22instant%22:true%7D,%7B%22refId%22:%22B%22,%22expr%22:%22sum%28rate%28gitaly_requests_dropped_total%7Benv%3D%5C%22gprd%5C%22,environment%3D%5C%22gprd%5C%22,type%3D%5C%22gitaly%5C%22%7D%5B$__rate_interval%5D%29%29%20by%20%28fqdn,%20reason%29%20%3E%200%22,%22range%22:true,%22instant%22:true,%22datasource%22:%7B%22type%22:%22prometheus%22,%22uid%22:%22mimir-gitlab-gprd%22%7D,%22editorMode%22:%22code%22,%22legendFormat%22:%22Requests%20%7B%7Bfqdn%7D%7D%20%7B%7Breason%7D%7D%22%7D%5D,%22range%22:%7B%22from%22:%22now-2d%22,%22to%22:%22now%22%7D%7D%7D&orgId=1)
- [gitaly-cny ノードのインフライトコマンドを計算する](https://dashboards.gitlab.net/explore?schemaVersion=1&panes=%7B%22imy%22:%7B%22datasource%22:%22mimir-gitlab-gprd%22,%22queries%22:%5B%7B%22refId%22:%22A%22,%22expr%22:%22gitaly_commands_running%7Benv%3D%5C%22gprd%5C%22,%20fqdn%3D%5C%22gitaly-cny-01-stor-gprd.c.gitlab-production.internal%5C%22%7D%22,%22range%22:true,%22instant%22:true,%22datasource%22:%7B%22type%22:%22prometheus%22,%22uid%22:%22mimir-gitlab-gprd%22%7D,%22editorMode%22:%22code%22,%22legendFormat%22:%22__auto%22%7D%5D,%22range%22:%7B%22from%22:%22now-30d%22,%22to%22:%22now%22%7D%7D%7D&orgId=1)。ご覧のとおり、2024-06-17 にピークがありました。これは[このインシデント](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/18156)が発生した時です。

## デバッグおよびパフォーマンステストツール

- [gprcurl](https://github.com/fullstorydev/grpcurl): gRPC 向けの `curl` のようなツール
- [grpcui](https://github.com/fullstorydev/grpcui): gRPC 向けの軽量な `postman` のようなツール
- [hyperfine](https://github.com/sharkdp/hyperfine): 時間経過とともにベンチマークを計測できるパフォーマンスツール
  - hyperfine は grpcurl と組み合わせて、gRPC 呼び出しのレスポンスタイムを確認することができます

### Git トレースを有効にする

`gitaly_log_git_traces` フィーチャーフラグを使用すると、特定のユーザー、グループ、またはプロジェクトの Git trace2 スパンのロギングを有効にできます。有効にすると、Git はその特定のアクターが発行した gRPC ログにすべての trace2 スパンを出力します。

```bash
/chatops run feature set --project=gitlab-org/gitlab gitaly_log_git_traces true
/chatops run feature set --user=myusername gitaly_log_git_traces true
```

ログが大量に流れ込む頻度とノイズの多さを考慮して、カスタマーはサーバー側のログにフィルターを使用して次のいずれかのキーと値に一致させることをお勧めします:

- `"msg":"Git Trace2 API"`
- `"component":"trace2hooks.log_exporter"`

詳細については以下を参照してください:

- [Git 操作のプロファイリング](https://docs.gitlab.com/ee/administration/gitaly/troubleshooting.html#profile-git-operations)
- [ChatOps を使用してフィーチャーフラグを有効/無効にする](https://docs.gitlab.com/ee/development/feature_flags/controls.html)

クライアント側では、Git trace v1 の場合、カスタマーは次を含む `GIT_TRACE*` 変数を有効にすることができます:

```bash
GIT_TRACE=true
GIT_TRACE_PACK_ACCESS=true
GIT_TRACE_PACKET=true
GIT_TRACE_PERFORMANCE=true
```

Git trace v2 の場合:

```bash
# git 操作のデバッグ
# GIT_TRACE2_PERF_BRIEF または trace2.perfBrief が true の場合、time、file、line フィールドは省略されます。
GIT_TRACE2_PERF_BRIEF=1 GIT_TRACE2_PERF=true git clone https://gitlab.com/gitlab-org/gitaly
GIT_TRACE2_PERF_BRIEF=1 GIT_TRACE2_PERF=$(pwd)/git-perf.log git clone https://gitlab.com/gitlab-org/gitaly

# git イベントを json 形式で出力する
GIT_TRACE2_BRIEF=true GIT_TRACE2_EVENT=$(pwd)/trace2.json git clone https://gitlab.com/gitlab-org/gitaly
```

出力はさまざまな形式で設定できます:

```bash
# 通常形式
export GIT_TRACE2=~/log.normal
# またはパフォーマンス形式
export GIT_TRACE2_PERF=~/log.perf
# またはイベント形式
export GIT_TRACE2_EVENT=~/log.event
# または JSON 形式
export GIT_TRACE2_EVENT=~/log.json
```

詳細については以下を参照してください:

- [Git Trace v1 API](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables)
- [Git Trace v2 API](https://git-scm.com/docs/api-trace2)

### strace

gitaly プロセスの `strace(1)`:

```shell
strace -fttTyyy -s 1024 -o /paht/filename -p $(pgrep -fd, gitaly)
```

またはプロセスをラップして strace を簡単に行えるようにする（特に後でさらにプロセスを生成する場合）:

```shell
#!/bin/bash/sh
echo $(date)" $PPID $@" >> /tmp/gitlab-shell.txt
exec /opt/gitlab/embedded/service/gitlab-shell/bin/gitlab-shell-orig "$@"
# strace -fttTyyy -s 1024 -o /tmp/sshd_trace-$PPID /opt/gitlab/embedded/service/gitlab-shell/bin/gitlab-shell-orig
```

[`strace` パーサー](https://gitlab.com/gitlab-com/support/toolbox/strace-parser) は結果をより読みやすくするのに役立ちます。

### fast-stats

[fast-stats](https://gitlab.com/gitlab-com/support/toolbox/fast-stats) は Support が GitLab のログから統計情報を素早く取り出すために開発した便利なツールです。

#### 例

gitaly ログから 60 分間隔で最も多く呼ばれたメソッドを見つけるには:

```shell
fast-stats --interval 60m --limit 1 var/log/gitlab/gitaly/current
```

そのメソッドを呼び出している時間順に上位 10 件の User、Project、Client を見つけるには:

```shell
grep PostUploadPackWithSidechannel var/log/gitlab/gitaly/current | ~/bin/fast-stats --interval 60m top
```

### git

Gitaly の Git コマンドを観察する。

1. Gitaly を停止する
1. gitaly-git プロセスを名前変更する: `find /opt/gitlab/embedded/bin/gitaly-git-v* -exec mv {} {}_orig \;`
1. 各 git バージョンのラッパースクリプトを作成する。スクリプト内の `opt/gitlab/embedded/bin/gitaly-git-vX.XX_orig` を正しいバージョンに置き換えてください。

```shell
#!/bin/bash
GIT="/opt/gitlab/embedded/bin/gitaly-git-vX.XX_orig"
FILE="/tmp/gitaly-$(date +%Y-%m-%d@%H:%M)"
echo -e "\n$(date) $PPID $@\n" >> $FILE
exec $GIT "$@" | tee -a $FILE
echo -e "\n--------------\n" >> $FILE

```

1. スクリプトを実行可能にする: `find /opt/gitlab/embedded/bin/gitaly-git-v* -exec chmod 777 {} \;`
1. Gitaly を起動する

## ログ分析

Kibana（Elastic）ダッシュボード

- [gstg](https://nonprod-log.gitlab.net/app/r/s/J0jWx)
- [gprd](https://log.gprd.gitlab.net/app/r/s/XuXAI)

## CPU とメモリのプロファイリング

[pprof](https://pkg.go.dev/runtime/pprof#hdr-Profiling_a_Go_program) メトリクスは [GCP Cloud Profiler](https://cloud.google.com/profiler/docs/about-profiler) にエクスポートされます。

- [gstg](https://console.cloud.google.com/profiler/gitaly/cpu?project=gitlab-gitaly-gstg-164c)
- [gprd](https://console.cloud.google.com/profiler/gitaly/cpu?project=gitlab-gitaly-gprd-87a9)

Gitaly ノードは複数の GCP プロジェクトに分散しています。トップナビゲーションバーのプロジェクトドロップダウンを使用して、各種 `gitlab-gitaly-gstg-*` および `gitlab-gitaly-gprd-*` プロジェクト間を切り替えることができます。

## キャパシティ管理

Gitaly チームは gitlab.com の適切なサービングキャパシティを維持する責任を負っています。

キャパシティが低下した場合は Tamland からアラートを受け取ります。詳細は[このイシューコメント](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-com/-/issues/1666#note_1786916965)を参照してください。

[キャパシティプランニング](../../../production-engineering/observability/capacity_planning.md) ドキュメントでは、一般的な仕組みについて説明しています。
