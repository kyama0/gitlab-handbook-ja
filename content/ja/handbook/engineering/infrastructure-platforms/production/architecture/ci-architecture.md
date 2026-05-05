---
title: "CI サービスアーキテクチャ"
controlled_document: true
upstream_path: /handbook/engineering/infrastructure-platforms/production/architecture/ci-architecture/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T03:12:43Z"
translator: claude
stale: false
---

このドキュメントは、GitLab.com ユーザー向けに提供され、[インフラチーム](../)が管理している共有ランナーおよび GitLab 共有ランナーのみを対象としています。

## 全体アーキテクチャ {#ci-general-arch}

私たちの CI インフラは Google Cloud Engine (GCE) 上でホストされています。GCE では `us-east1-c` および `us-east1-d` を使用しており、すべて Chef を使用して設定されています。これらのマシンは手動で作成して Chef に追加されており、現時点では Terraform を使用していません。

各リージョンには、いくつかのタイプのマシンがあります。

- **X-runners-manager** - GitLab Runner プロセスをホストするマシンです。これらのホストはジョブの実行とオートスケールされたマシンのスケジューリングを処理します。2 番目のタスクには Docker Machine と使用しているクラウドプロバイダーが公開する API を使用します。
- **autoscaled-machine-N** - GitLab Runner によって作成・管理されるホストです。Docker コンテナ内でジョブのスクリプトを実行するために使用されます。現在、1 つのマシンは同時に 1 つのジョブにのみ使用できます。`gitlab-shared-runners-manager-X` と `private-runners-manager-X` によって作成されたマシンは再利用されます。ただし、`shared-runners-manager-X` によって作成されたマシンはジョブが終了した直後に削除されます。
- **Helpers** - モニタリングやキャッシュなどの補助サービスを提供するホストです。
  - **Prometheus** - 各リージョンの Prometheus サーバーがマシンを監視します。

ランナーマネージャーは GitLab.com および dev.gitlab.org の API に接続し、実行が必要なジョブを取得します。オートスケールされたマシンは HTTPS を介して該当プロジェクトをクローンします。

ランナーは以下のように接続されています。

- **shared-runners-manager-X** (srm): GitLab.com に接続し、すべての GitLab.com ユーザーに共有ランナーとして提供されます。Privileged モードはオフです。
- **gitlab-shared-runners-manager-X** (gsrm): GitLab.com および dev.gitlab.org に接続します。GitLab.com の共有ランナーとして利用可能で、`gitlab-org` タグが付与されています。`gitlab-ce` および `gitlab-ee` プロジェクトとそのすべてのフォークにサービスを提供します。また dev.gitlab.org の汎用共有ランナーでもあります。Privileged モードはオフです。
- **private-runners-manager-X** (prm): GitLab.com および dev.gitlab.org の両方に接続します。GitLab アプリケーションプロジェクトに専用ランナーとして登録されており、私たちだけが使用します。Privileged モードはオンです。

## 詳細アーキテクチャ {#ci-detailed-arch-diagram}

<img src="/images/handbook/engineering/infrastructure/production-architecture/ci-cd-gce-arch.png" alt="">

[ソース](https://docs.google.com/drawings/d/1tskQW-dCHNMN-f6mfrtbcWRGKC4vZzg5UiQrpR28wTU/edit?usp=sharing)

### Windows アーキテクチャ

<img src="/images/handbook/engineering/infrastructure/production-architecture/windows-ci-cd.png" alt="">

[ソース](https://docs.google.com/drawings/d/1oApCYUuh7ft8hnm9ToWjG8Ce9g1Hvo8MKTBL5DtjDk8/edit)

## データフロー {#ci-data-flow}

### 管理データフロー

- `prometheus.gprd.gitlab.net` は、ジョブ `ci-node` を使用して各ランナーホストをスクレイプします。
   Prometheus は [prometheus federation](https://prometheus.io/docs/prometheus/latest/federation/) を使用してランナーのリージョン内の特定の Prometheus ノードもスクレイプします。
- `chef.gitlab.com` サーバーは、オートスケールされたマシンを除く、クラウドプロバイダーリージョン内のすべてのホストからアクセスされます。

### GitLab データフロー

- **runners-manager-X** ホストは 1 つ以上の GitLab インスタンスに接続し、実行すべき新しいジョブを API に継続的に問い合わせます。ジョブが開始された後、ランナーはジョブのトレースとステータスを更新するため、GitLab インスタンスへの更新を送信し続けます。この通信は GitLab APIv4 の Runner API を使用します。

- **autoscaled-machine-N** ホストはまず git+http(s) プロトコルで GitLab にアクセスし、設定に応じて git pull または git fetch 操作でプロジェクトのソースを受け取ります。この操作は一般的な git+http(s) プロトコルと特定の認証方式（gitlab-ci-token 機能を使用）を使用します。ジョブはプロジェクトと同じプロトコルを使用して GitLab 経由でプロジェクトのサブモジュールにもアクセスできます。これらのホストは GitLab との間でアーティファクトをアップロードおよびダウンロードすることもあります。この目的のために `gitlab-runner-helper` バイナリが使用され、GitLab APIv4 の Runner API を利用します。

### クラウドリージョン内部通信

- **runners-manager-X** から **autoscaled-machine-N** へ - ランナーは Docker Engine API を使用してオートスケールされたマシンでジョブを開始します。マシンが作成された後、ランナーは Docker Engine API エンドポイントが利用可能な IP:PORT 情報を受け取ります。GCE ではこれに内部 IP アドレスを使用します。Docker Engine API を使用して、ランナーはまずジョブの目的に使用されるさまざまなコンテナをスケジュールします。次にジョブのスクリプトを開始し、コマンドの出力を受け取ります。この出力は上述のように GitLab の上流へ送信されます。

- **prometheus-X** から **autoscaled-machine-N** へ - Prometheus サーバーは、エクスポートされたメトリクスのためにオートスケールされたマシンにリクエストを送ります。HTTP(S) プロトコルを使用します。

### クラウドリージョン外部通信

- **runner-manager-X** から **クラウドプロバイダー API ゲートウェイ** へ - ランナーは Docker Machine を使用して、ジョブ実行に使用するオートスケールされたマシンを管理します。クラウドプロバイダーの API を使用して、マシンの作成と削除をスケジュールします。また同じ API を使用して既存マシンの情報を収集します。

- マシンの作成後、ランナーは受け取った IP:PORT を使用してコンテナをスケジュールし、そこでジョブスクリプトを実行します。

- **autoscaled-machine-N** から **外部 Docker Registry** へ - Docker Engine は Docker Registry API を使用して外部マシンから Docker イメージをプルします。これは Docker Hub、GitLab Registry、またはその他の Docker 互換レジストリである可能性があります。

## デプロイと設定の更新 {#ci-configuration}

ランナーとその設定は Chef によって処理され、chef.gitlab.com で定義されています。詳細なアップグレードプロセスは[関連するランブック](https://gitlab.com/gitlab-com/runbooks/blob/master/howto/update-gitlab-runner-on-managers.md)に記載されています。

要約すると:

- 設定更新の場合:
  - chef-repo の定義を更新し、新しい定義を chef.gitlab.com にアップロードします。
  - 必要なノードで `sudo chef-client` を実行します。
- ランナーのバージョン更新の場合:
  - chef-repo の定義を更新し、新しい定義を chef.gitlab.com にアップロードします。
  - 必要なノードで `sudo /root/runner_upgrade.sh` を実行します。

なぜ違いがあるのでしょうか?

ランナーを更新する際、プロセスを停止する必要があります。ジョブ実行中にこれを行うと、ジョブが壊れてしまいます。そのため、ランナーの graceful shutdown 機能を使用します。ランナーに SIGQUIT シグナルを送ることで、ランナーが新しいジョブをリクエストせず、既存のジョブが終了するまで待機するようにします。これが `chef-client` の実行中に行われると、予期しない方法で失敗する可能性があります。`/root/runner_upgrade.sh` スクリプトを使用することで、まずランナーを graceful にシャットダウン（7200 分のタイムアウト）し、その後 `chef-client` を起動してバージョンを更新します。

ランナーの設定更新の場合、ランナープロセスを停止/再起動する必要はなく、ランナーのバージョンを変更しないため、`chef-client` はパッケージをアップグレードしません（ランナープロセスの停止を引き起こす可能性があります）。この場合、単純に `sudo chef-client` を実行できます。これにより config.toml ファイルが更新され、ランナーはほとんどの設定を自動的に更新します。

一般的な設定パラメーターの中には、プロセスを再起動しないと更新できないものもあります。その場合は、ランナーのアップグレードと同じスクリプトを使用する必要があります。

## 重要なリンクとメトリクス {#ci-important-info-links}

### モニタリング情報

- `prometheus-app.gprd.gitlab.net` - unicorn エクスポーターと GitLab Monitor プロジェクトを通じて GitLab からスクレイプされたメトリクス用
- `prometheus.gprd.gitlab.net` - ランナーの内部メトリクス、ランナーマネージャーマシンのノードメトリクス、クラウドプロバイダーに関するメトリクス収集、CI Prometheus サーバーからの federation によるオートスケールされたマシンのメトリクス収集用（Ben が現在そこで Thanos を有効にする作業をしており、Grafana が CI Prometheus サーバーに直接アクセスできるようになります）
- `prometheus-01.nyc1.do.gitlab-runners.gitlab.net`、
  `prometheus-01.us-east1-c.gce.gitlab-runners.gitlab.net`、
  `prometheus-01.us-east1-d.gce.gitlab-runners.gitlab.net` - オートスケールされたマシンにインストールされたエクスポーター（現在はノードエクスポーターのみ）からメトリクスをスクレイプするため
  - GCP では Prometheus で利用可能なネイティブ GCP サービスディスカバリーサポートを使用しています。
- アラートは Slack の #ci-cd-alerts チャンネルに送信されます

### モニタリングリンク

- [CI モニタリング概要](https://dashboards.gitlab.net/d/000000159/ci)
- [CI クラウドプロバイダー統計](https://dashboards.gitlab.net/d/sXVh89Imk/ci-autoscaling-providers)
- [CI オートスケーリング統計](https://dashboards.gitlab.net/d/sv_pUrImz/ci-autoscaled-machines-metrics)
- [CI ログ（GCP のみ）](https://log.gprd.gitlab.net/goto/28a7ad7581fa7e86d519247a5456addd)
- [CI 共有ランナー Sentry（srm マシン）](https://sentry.gitlab.net/gitlab/shared-gitlab-runners/)
- [CI 内部ランナー Sentry（gsrm および prm マシン）](https://sentry.gitlab.net/gitlab/internal-gitlab-runners/)
- [CI アラート設定](https://gitlab.com/gitlab-com/runbooks/blob/master/alerts/gitlab-com-ci.yml)
