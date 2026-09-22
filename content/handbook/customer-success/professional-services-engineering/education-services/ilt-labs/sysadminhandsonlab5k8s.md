---
title: "GitLab システム管理者 - ハンズオンラボ: GitLab Kubernetes のロギングと監視"
description: "このハンズオンガイドでは、GitLab Kubernetes インスタンスの監視とログ分析の方法を紹介します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandsonlab5k8s/
upstream_sha: ddd8c35a844608b54fcc88bfd8bbe61807f4c820
translated_at: "2026-09-22T21:12:47+00:00"
translator: claude
stale: false
lastmod: "2026-09-22T09:07:08-04:00"
---

> 推定所要時間: 30 分

## 目的

このラボの目的は、ログ分析と監視のために Prometheus と Grafana を使用する方法を示すことです。

## タスク A. Prometheus サービスへのアクセス

1. GitLab の Prometheus サーバーには TCP ポート 9090 で接続できます。このポートにアクセスするには、`kubectl proxy` を使用して Kubernetes クラスターへのプロキシを作成する必要があります。プロキシは GitLab インスタンス上で動作し、そのインスタンスの `localhost:8001` でのみ待ち受けるため、ローカルコンピューターの Web ブラウザーから直接接続することはできません。接続できるようにするには、ローカルコンピューターのポート 8001 をインスタンスに転送する SSH トンネルを使用して、インスタンスに接続します。

1. 現在 GitLab インスタンスへの SSH セッションを開いている場合は、`exit` と入力して Enter を押し、閉じてください。SSH トンネルは接続を開くときに設定されるため、追加するには再接続する必要があります。

1. ローカルコンピューターのターミナルから、今度はポート 8001 のトンネルを設定して、GitLab インスタンスに SSH で再接続します。

      ```bash
      ssh -L 8001:localhost:8001 -i <keyfile_name> student-user@<vm_ip_address>
      ```

      > ローカルコンピューターでポート 8001 がすでに使用されている場合は、代わりに `-L 8081:localhost:8001` のように別のローカルポートを転送し、このラボ全体の URL で `8001` の代わりに `8081` を使用してください。

1. Prometheus にアクセスするには、Pod 名を知る必要があります。これを見つけるには、SSH セッションで `kubectl get pods` コマンドを実行します。出力で Prometheus を探します。

1. 同じ SSH セッションで、次のコマンドを使用してプロキシを起動します。

      ```bash
      kubectl proxy
      ```

      > `kubectl proxy` はフォアグラウンドで動作し続けます。このターミナルを閉じるとプロキシと SSH トンネルの両方が停止するため、ラボの残りの作業中は開いたままにしてください。インスタンスで他のコマンドを実行する必要がある場合は、2 つ目のターミナルを開き、インスタンスに SSH で再接続してください。

1. ローカルコンピューターの Web ブラウザーで `http://localhost:8001/api/v1/namespaces/default/pods/PROMETHEUS_POD_NAME:9090/proxy/` に移動して、組み込み Prometheus サーバーを表示します。

1. Prometheus で利用可能なメトリクスを表示するには、`http://localhost:8001/api/v1/namespaces/default/pods/PROMETHEUS_POD_NAME:9090/proxy/metrics` に移動します。

    > 各メトリクスの詳細なリストについては、[ドキュメント](https://docs.gitlab.com/ee/administration/monitoring/prometheus/gitlab_metrics.html)を参照してください。

## タスク B. Prometheus メトリクスの表示 {#task-b-viewing-prometheus-metrics}

> この例では、GitLab インスタンスに送信された HTTP リクエストを監視したいとします。これを実現するために、組み込みの GitLab メトリクスを使用できます。

1. `http://localhost:8001/api/v1/namespaces/default/pods/PROMETHEUS_POD_NAME:9090/proxy/` に移動します。

1. **虫眼鏡**ボタンの横の入力欄に `http_requests_total` と入力します。

1. **Execute** ボタンをクリックします。

1. **Table** をクリックして、クエリによって生成されたすべての結果のテーブルを表示します。

    > 結果にさまざまな HTTP リクエストが表示される可能性があります。各リクエストの `job`、`instance`、`HTTP method`、`status` が確認できます。

1. **Graph** をクリックしてデータのグラフを表示します。

    > グラフの左側に **-** と **+** ボタンがあります。これらのボタンをクリックしてグラフのスケールを変更できます。スケールを調整してデータへの影響を確認してみてください。

## タスク C. アラート設定 {#task-c-alert-configurations}

> Prometheus は特定のメトリクスに基づいて管理者にアラートを送信するために使用できます。GitLab には Prometheus の定義済みアラートセットが付属しています。

1. `http://localhost:8001/api/v1/namespaces/default/pods/PROMETHEUS_POD_NAME:9090/proxy/` に移動します。

1. 上部メニューで **Alerts** をクリックします。

    > GitLab と Node という 2 つのアラートルールセットがあることに注意してください。GitLab アラートは、サービスのダウン、Postgres のダウン、サービス内の高いキューイングなどのプラットフォームの問題に対応します。Node アラートは GitLab がデプロイされているサーバーに対応します。

1. Kubernetes デプロイメントでは、アラートルールはファイルベースのルールではなく、ConfigMap と Prometheus Helm チャート設定を通じて設定されることに注意してください。

    > 管理者として、Kubernetes ConfigMap を通じて、または Prometheus Helm 値を更新してアラートルールを追加することでカスタムルールを定義できます。

## タスク D. 一般的なパフォーマンスメトリクス {#task-d-common-performance-metrics}

管理者が GitLab インスタンスのパフォーマンスを監視するために使用できるさまざまなメトリクスがあります。インスタンスを監視するために使用できる一般的なクエリをいくつか見てみましょう。

1. `http://localhost:8001/api/v1/namespaces/default/pods/PROMETHEUS_POD_NAME:9090/proxy/` に移動します。

1. **虫眼鏡**ボタンの横の入力欄に、次のクエリを入力します。

      ```text
      sum(rate(gitlab_cache_misses_total[5m])) by (cache_key)
      ```

      > このクエリにより、GitLab のキャッシュミス率が表示されます。これはパフォーマンスの問題を示している可能性があります。標準的なノードメトリクス（メモリ、CPU）は、Kubernetes クラスターに node-exporter や kube-state-metrics などの追加のエクスポーターをインストールする必要があることに注意してください。

1. **Graph** をクリックして、経時的なキャッシュミス率を表示します。

1. クエリ入力欄で前のクエリを削除し、次のクエリに置き換えます。

      ```text
      sum(rate(http_requests_total[5m])) by (job)
      ```

      > このクエリにより、GitLab インスタンスのジョブごとの HTTP リクエスト率が表示されます。

1. **Graph** をクリックして、経時的な HTTP リクエスト率を表示します。

    > これらのメトリクスや他の多くのメトリクスについて、特定の条件に対してアラートを設定することを検討することをお勧めします。例えば、CPU 使用率が継続的に 50% を超える場合にアラートを設定できます。これは問題の兆候である可能性があります。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandsonk8s)を参照できます。

## ご提案はありますか?

このラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
