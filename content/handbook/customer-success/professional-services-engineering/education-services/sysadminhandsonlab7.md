---
title: "GitLab システム管理 - ハンズオンラボ: インスタンス監視を構成する"
description: "このハンズオンガイドでは、Prometheus の構成とメトリクスへのアクセスおよび使用方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/sysadminhandsonlab7/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

> 完了までの目安時間: 30 分

## 目的

このラボの目的は、Prometheus サービスの使い方と Prometheus メトリクスの表示方法を案内することです。詳細については、
[Prometheus による GitLab の監視](https://docs.gitlab.com/administration/monitoring/prometheus/) に関するドキュメントを参照してください。

### タスク A. Prometheus サービスにアクセスする

1. GitLab の Prometheus サーバーは TCP ポート 9090 経由でアクセスできます。残念ながら、トレーニング環境では現在このポートへの受信トラフィックがブロックされています。回避策として、以下のように SSH トンネルを開くことができます。

    ```bash
    ssh -L 9090:localhost:9090 -i <SSH_KEY_NAME> root@<GITLAB_INSTANCE_HOSTNAME>
    ```

1. Web ブラウザーで `http://localhost:9090` に移動して、組み込みの Prometheus サーバーを表示します。

1. Prometheus で利用可能なメトリクスを表示するには、`http://localhost:9090/metrics` に移動します。

    > 各メトリクスのより詳細なリストについては、[ドキュメント](https://docs.gitlab.com/ee/administration/monitoring/prometheus/gitlab_metrics.html) をご確認ください。

### タスク B. Prometheus メトリクスを表示する

> たとえば、GitLab インスタンスに送信される HTTP リクエストを監視したいとします。これを実現するには、組み込みの GitLab メトリクスを利用できます。

1. `http://localhost:9090` に移動します。

1. **虫眼鏡** ボタンの隣の入力欄に `http_requests_total` と入力します。

1. **Execute** ボタンをクリックします。

1. **Table** をクリックすると、クエリで生成されたすべての結果がテーブル表示されます。

    > 結果にはさまざまな種類の HTTP リクエストが表示されるはずです。各リクエストの `job`、`instance`、`HTTP method`、`status` を確認できます。

1. **Graph** をクリックすると、データのグラフが表示されます。

    > グラフの左側に **-** および **+** ボタンが表示されます。これらのボタンをクリックすると、グラフのスケールを変更できます。スケールを調整して、データへの影響を確認してみてください。

### タスク C. アラート設定

> Prometheus は特定のメトリクスに基づいて管理者にアラートを発するために使用できます。GitLab には、Prometheus 用に事前定義されたアラートのセットが用意されています。

1. `http://localhost:9090` に移動します。

1. 上部メニューの **Alerts** をクリックします。

    > アラートルールには 2 つのセットがあります。1 つは GitLab、もう 1 つは Node という名前です。GitLab アラートはサービスダウンや Postgres ダウン、サービス内のキューイング過多などのプラットフォームの問題に対応します。Node アラートは GitLab がデプロイされているサーバーに対応します。

1. アラートルールを含むファイルに注目してください。デフォルトでは、ファイルは `/var/opt/gitlab/prometheus/rules/gitlab.rules` です。

    > 管理者として、このファイルにカスタムルールを定義してアラートに使用できます。これにより、システムを監視して潜在的な問題を発見できます。

### タスク D. 一般的なパフォーマンスメトリクス

管理者が GitLab インスタンスのパフォーマンスを監視するために使用できるメトリクスはさまざまあります。インスタンスの監視に使用できる一般的なクエリをいくつか見てみましょう。

1. `http://localhost:9090` に移動します。

1. **虫眼鏡** ボタンの隣の入力欄に、以下のクエリを入力します。

    ```text
    ((node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes) or ((node_memory_MemFree_bytes + node_memory_Buffers_bytes + node_memory_Cached_bytes) / node_memory_MemTotal_bytes)) * 100
    ```

    > このクエリは、インスタンスで利用可能なメモリの割合を示します。

1. **Graph** をクリックすると、時間経過によるメモリ使用率を表示できます。

1. クエリ入力欄で前のクエリを削除し、以下のクエリに置き換えます。

    ```text
    1 - avg without (mode,cpu) (rate(node_cpu_seconds_total{mode="idle"}[5m]))
    ```

    > このクエリは、インスタンスで使用されている CPU の割合を示します。

1. **Graph** をクリックすると、時間経過による CPU 使用率を表示できます。

    > これらのメトリクスや他の多くのメトリクスについて、特定の条件でのアラート設定を検討するとよいでしょう。たとえば、CPU 使用率が 50% を継続的に超過する場合、問題を示している可能性があるためアラートを設定できます。

## ラボガイド完了

このラボ演習は完了しました。本コースのその他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/sysadminhandson)を確認できます。

### ご提案はありますか？

GitLab システム管理ハンズオンガイドへの変更を提案したい場合は、マージリクエストでお寄せください。
