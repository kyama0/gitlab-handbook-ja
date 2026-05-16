---
title: "GitLab システム管理者 - ハンズオンラボ: GitLab Kubernetes のロギングと監視"
description: "このハンズオンガイドでは、GitLab Kubernetes インスタンスの監視とログ分析の方法を紹介します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandsonlab5k8s/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-27T20:17:50+00:00"
---

> 推定所要時間: 30 分

## 目的

このラボの目的は、ログ分析と監視のために Prometheus と Grafana を使用する方法を示すことです。

## タスク A. Prometheus サービスへのアクセス

1. GitLab の Prometheus サーバーは TCP ポート 9090 経由で接続できます。このポートにアクセスするには、Kubernetes クラスターへのプロキシを作成する必要があります。次のコマンドで実行できます。

    ```bash
    kubectl proxy
    ```

1. Prometheus にアクセスするには、Pod 名を知る必要があります。これを見つけるには、`kubectl get pods` コマンドを実行します。出力で Prometheus を探します。

1. Web ブラウザーで `http://localhost:8001/api/v1/namespaces/default/pods/PROMETHEUS_POD_NAME:9090/proxy/` に移動して、組み込み Prometheus サーバーを表示します。

1. Prometheus で利用可能なメトリクスを表示するには、`http://localhost:8001/api/v1/namespaces/default/pods/PROMETHEUS_POD_NAME:9090/proxy/metrics` に移動します。

    > 各メトリクスの詳細なリストについては、[ドキュメント](https://docs.gitlab.com/ee/administration/monitoring/prometheus/gitlab_metrics.html)を参照してください。

## タスク C. Prometheus メトリクスの表示

> この例では、GitLab インスタンスに送信された HTTP リクエストを監視したいとします。これを実現するために、組み込みの GitLab メトリクスを使用できます。

1. `http://localhost:8001/api/v1/namespaces/default/pods/PROMETHEUS_POD_NAME:9090/proxy/` に移動します。

1. **虫眼鏡**ボタンの横の入力欄に `http_requests_total` と入力します。

1. **Execute** ボタンをクリックします。

1. **Table** をクリックして、クエリによって生成されたすべての結果のテーブルを表示します。

    > 結果にさまざまな HTTP リクエストが表示される可能性があります。各リクエストの `job`、`instance`、`HTTP method`、`status` が確認できます。

1. **Graph** をクリックしてデータのグラフを表示します。

    > グラフの左側に **-** と **+** ボタンがあります。これらのボタンをクリックしてグラフのスケールを変更できます。スケールを調整してデータへの影響を確認してみてください。

## タスク D. アラート設定

> Prometheus は特定のメトリクスに基づいて管理者にアラートを送信するために使用できます。GitLab には Prometheus の定義済みアラートセットが付属しています。

1. `http://localhost:8001/api/v1/namespaces/default/pods/PROMETHEUS_POD_NAME:9090/proxy/` に移動します。

1. 上部メニューで **Alerts** をクリックします。

    > GitLab と Node という 2 つのアラートルールセットがあることに注意してください。GitLab アラートは、サービスのダウン、Postgres のダウン、サービス内の高いキューイングなどのプラットフォームの問題に対応します。Node アラートは GitLab がデプロイされているサーバーに対応します。

1. Kubernetes デプロイメントでは、アラートルールはファイルベースのルールではなく、ConfigMap と Prometheus Helm チャート設定を通じて設定されることに注意してください。

    > 管理者として、Kubernetes ConfigMap を通じて、または Prometheus Helm 値を更新してアラートルールを追加することでカスタムルールを定義できます。

## タスク E. 一般的なパフォーマンスメトリクス

管理者が GitLab インスタンスのパフォーマンスを監視するために使用できるさまざまなメトリクスがあります。インスタンスを監視するために使用できる一般的なクエリをいくつか見てみましょう。

1. `http://localhost:8001/api/v1/namespaces/default/pods/PROMETHEUS_POD_NAME:9090/proxy/` に移動します。

1. **虫眼鏡**ボタンの横の入力欄に、次のクエリを入力します。

    ```text
    sum(rate(gitlab_cache_misses_total[5m])) by (cache_key)
    ```

    > このクエリにより、GitLab のキャッシュミス率が表示されます。これはパフォーマンスの問題を示している可能性があります。標準的なノードメトリクス（メモリ、CPU）は、Kubernetes クラスターに node-exporter や kube-state-metrics などの追加のエクスポーターをインストールする必要があることに注意してください。

1. **Graph** をクリックして、経時的なメモリの割合を表示します。

1. クエリ入力欄で前のクエリを削除し、次のクエリに置き換えます。

    ```text
    sum(rate(http_requests_total[5m])) by (job)
    ```

    > このクエリにより、GitLab インスタンスのジョブごとの HTTP リクエスト率が表示されます。

1. **Graph** をクリックして、経時的な CPU 使用率を表示します。

    > これらのメトリクスや他の多くのメトリクスについて、特定の条件に対してアラートを設定することを検討することをお勧めします。例えば、CPU 使用率が継続的に 50% を超える場合にアラートを設定できます。これは問題の兆候である可能性があります。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
