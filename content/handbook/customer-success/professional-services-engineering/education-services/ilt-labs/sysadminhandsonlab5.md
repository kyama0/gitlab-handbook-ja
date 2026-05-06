---
title: "GitLab システム管理者 - ハンズオンラボ: GitLab Omnibus のロギングと監視"
description: "このハンズオンガイドでは、GitLab Omnibus インスタンスの監視とログ分析の方法を紹介します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandsonlab5/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

> 推定所要時間: 30 分

## 目的

このラボの目的は、ログ分析と監視のために Prometheus と Grafana を使用する方法を示すことです。

## タスク A. Prometheus サービスへのアクセス

1. GitLab の Prometheus サーバーは TCP ポート 9090 経由で接続できます。残念ながら、トレーニング環境では現在そのポートへのインバウンドトラフィックがブロックされています。回避策として、次のように SSH トンネルを開くことができます。

    ```bash
    ssh -L 9090:localhost:9090 -i <SSH_KEY_NAME> student-user@<BASTION_SERVER_IP>
    ssh -L 9090:localhost:9090 -i ~/.ssh/ilt_key root@<OMNIBUS_IP>
    ```

1. Web ブラウザーで `http://localhost:9090` に移動して、組み込み Prometheus サーバーを表示します。

1. Prometheus で利用可能なメトリクスを表示するには、`http://localhost:9090/metrics` に移動します。

    > 各メトリクスの詳細なリストについては、[ドキュメント](https://docs.gitlab.com/ee/administration/monitoring/prometheus/gitlab_metrics.html)を参照してください。

## タスク B. Prometheus メトリクスの表示

> この例では、GitLab インスタンスに送信された HTTP リクエストを監視したいとします。これを実現するために、組み込みの GitLab メトリクスを使用できます。

1. `http://localhost:9090` に移動します。

1. **虫眼鏡**ボタンの横の入力欄に `http_requests_total` と入力します。

1. **Execute** ボタンをクリックします。

1. **Table** をクリックして、クエリによって生成されたすべての結果のテーブルを表示します。

    > 結果にさまざまな HTTP リクエストが表示される可能性があります。各リクエストの `job`、`instance`、`HTTP method`、`status` が確認できます。

1. **Graph** をクリックしてデータのグラフを表示します。

    > グラフの左側に **-** と **+** ボタンがあります。これらのボタンをクリックしてグラフのスケールを変更できます。スケールを調整してデータへの影響を確認してみてください。

## タスク C. アラート設定

> Prometheus は特定のメトリクスに基づいて管理者にアラートを送信するために使用できます。GitLab には Prometheus の定義済みアラートセットが付属しています。

1. `http://localhost:9090` に移動します。

1. 上部メニューで **Alerts** をクリックします。

    > GitLab と Node という 2 つのアラートルールセットがあることに注意してください。GitLab アラートは、サービスのダウン、Postgres のダウン、サービス内の高いキューイングなどのプラットフォームの問題に対応します。Node アラートは GitLab がデプロイされているサーバーに対応します。

1. アラートルールを含むファイルをメモします。デフォルトでは、ファイルは `/var/opt/gitlab/prometheus/rules/gitlab.rules` です。

    > 管理者として、このファイル内にカスタムルールを定義してアラートに使用できます。これにより、潜在的な問題に対してシステムを監視できます。

## タスク D. 一般的なパフォーマンスメトリクス

管理者が GitLab インスタンスのパフォーマンスを監視するために使用できるさまざまなメトリクスがあります。インスタンスを監視するために使用できる一般的なクエリをいくつか見てみましょう。

1. `http://localhost:9090` に移動します。

1. **虫眼鏡**ボタンの横の入力欄に、次のクエリを入力します。

    ```text
    ((node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes) or ((node_memory_MemFree_bytes + node_memory_Buffers_bytes + node_memory_Cached_bytes) / node_memory_MemTotal_bytes)) * 100
    ```

    > このクエリにより、インスタンスで利用可能なメモリの割合が表示されます。

1. **Graph** タブをクリックして、経時的なメモリの割合を表示します。

1. クエリ入力欄で前のクエリを削除し、次のクエリに置き換えます。

    ```text
    1 - avg without (mode,cpu) (rate(node_cpu_seconds_total{mode="idle"}[5m]))
    ```

    > このクエリにより、インスタンスで使用された CPU の割合が表示されます。

1. **Graph** をクリックして、経時的な CPU 使用率を表示します。

    > これらのメトリクスや他の多くのメトリクスについて、特定の条件に対してアラートを設定することを検討することをお勧めします。例えば、CPU 使用率が継続的に 50% を超える場合にアラートを設定できます。これは問題の兆候である可能性があります。

## タスク E. Grafana のインストール

Grafana は、GitLab インスタンスのログとメトリクスを可視化する方法を提供します。まず Grafana をインストールしましょう。

1. GitLab インスタンスに SSH 接続します。

1. `wget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor > /etc/apt/keyrings/grafana.gpg` を使用して Grafana キーをインスタンスにプルします。

1. `echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | tee /etc/apt/sources.list.d/grafana.list` を使用してリポジトリをパッケージマネージャーに追加します。

1. apt リポジトリを更新します: `sudo apt-get update`

1. `apt-get install loki promtail grafana` を使用して Grafana と関連コンポーネントをインストールします。

1. `sudo systemctl start grafana-server` を使用して Grafana サーバーを起動します。

1. Grafana が実行されていることを確認するには、`http://your-omnibus-ip:3000/login` に移動します。デフォルトのユーザー名とパスワードは `admin` です。

## タスク F. ログを収集するための Grafana の設定

Grafana は、ログの収集と分析のための便利なツールを提供します。Grafana が GitLab のログファイルをキャプチャして表示するように設定する方法を見てみましょう。

1. GitLab インスタンスに SSH 接続します。

1. お好みのテキストエディターで `/etc/promtail/config.yml` ファイルを開きます。

1. このファイルで、サーバー、positions、クライアントを確認します。

    ```yml
    server:
    http_listen_port: 9080
    grpc_listen_port: 0

    positions:
    filename: /tmp/positions.yaml

    clients:
    - url: http://localhost:3100/loki/api/v1/push
    ```

1. 特に `loki` の URL とポートをメモします。後で使用します。

1. ログ収集設定は、設定ファイルの `scrape_configs` セクションで設定されます。これらの設定には、次の値を設定する必要があります。

    - `targets`: ターゲットログファイルの場所（通常は `localhost`）
    - `job`: ログスクレイピングジョブの一意の名前
    - `__path__`: ログファイルの場所

1. 例として、次の `scrape_configs` を Grafana 設定ファイルにコピーして、既存の `scrape_configs` ファイルを置き換えます。

    ```yml
    scrape_configs:
    - job_name: nginx
    static_configs:
    - targets:
        - localhost
        labels:
        job: nginx
        __path__: /var/log/gitlab/nginx/*
    - job_name: workhorse
    static_configs:
    - targets:
        - localhost
        labels:
        job: workhorse
        __path__: /var/log/gitlab/gitlab-workhorse/*
    - job_name: rails
    static_configs:
    - targets:
        - localhost
        labels:
        job: rails
        __path__: /var/log/gitlab/gitlab-rails/production_json.log

    ```

    > この設定により、3 つのログファイル（Nginx、Workhorse、rails）が Grafana に追加されます。

1. このデータを追加したら、ファイルを保存します。`sudo systemctl restart promtail` を使用して `promtail` を再起動します。`sudo systemctl status promtail` でサービスが実行されていることを確認します。

1. 任意のテキストエディターで `/etc/loki/config.yml` ファイルを開きます。`querier:` に関する最後の 3 行をコメントアウトまたは削除します。最終的なファイルは次のようになります。

    ```yml
    auth_enabled: false

    server:
    http_listen_port: 3100
    grpc_listen_port: 9096
    log_level: debug
    grpc_server_max_concurrent_streams: 1000

    common:
    instance_addr: 127.0.0.1
    path_prefix: /tmp/loki
    storage:
        filesystem:
        chunks_directory: /tmp/loki/chunks
        rules_directory: /tmp/loki/rules
    replication_factor: 1
    ring:
        kvstore:
        store: inmemory

    query_range:
    results_cache:
        cache:
        embedded_cache:
            enabled: true
            max_size_mb: 100

    limits_config:
    metric_aggregation_enabled: true

    schema_config:
    configs:
        - from: 2020-10-24
        store: tsdb
        object_store: filesystem
        schema: v13
        index:
            prefix: index_
            period: 24h

    pattern_ingester:
    enabled: true
    metric_aggregation:
        loki_address: localhost:3100

    ruler:
    alertmanager_url: http://localhost:9093

    frontend:
    encoding: protobuf

    #querier:
    #  engine:
    #    enable_multi_variant_queries: true
    ```

1. ファイルを保存します。`sudo systemctl restart loki` を使用して `loki` を再起動します。`sudo systemctl status loki` でサービスが実行されていることを確認します。

1. また、ログが promtail と loki で読み取れるようにする必要があります。これを行うには、`chmod -R 755 /var/log/gitlab` コマンドを使用してパーミッションを変更します。

1. これが完了したら、`http://your-gitlab-ip:3000/login` で Grafana に移動します。

1. admin ユーザーとして認証します。

1. 左サイドバーで **Connections > Add new connection** を選択します。

1. **Loki** を選択します。

1. **Add new data source** を選択します。

1. **URL** に `http://localhost:3100` を入力します。

1. **Save & Test** を選択します。

1. **Data source successfully connected** というメッセージが表示されます。

## タスク G. Grafana でデータを分析する

1. Grafana インスタンスに移動します。

1. 左サイドバーで **Explore** を選択します。

1. **Outline** の横のドロップダウンで **Loki** が選択されていることを確認します。

1. **Label filters** に `job` を入力します。

1. 値に **nginx** を入力します。

    > 必要に応じて、設定ファイルに定義されている任意のジョブ名に置き換えることができます。

1. **Run query** を選択して結果を表示します。ここで時間をとって、Grafana でのログのレビューとフィルタリングオプションを確認してください。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
