---
title: "GitLab システム管理 - ハンズオンラボ: GitLab Kubernetes のトラブルシューティング"
description: "このハンズオンガイドでは、GitLab Kubernetes インスタンスのトラブルシューティング方法を解説します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandsonlab6k8s/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T05:28:22Z"
translator: claude
stale: false
---

> 推定所要時間: 30 分

## 目標

このラボの目標は、ログと診断ツールを使用して GitLab Kubernetes デプロイメントで発生する一般的な問題のトラブルシューティング方法を習得することです。

## タスク A. リバースプロキシでの問題

1. GitLab インスタンスのシェルセッションから、webservice Pod を探してそのログを表示します。

   ```bash
   kubectl get pods | grep webservice
   kubectl logs <webservice-pod-name> -c gitlab-workhorse --tail=10
   ```

    > 注意: webservice Pod には複数のコンテナが含まれています。`-c gitlab-workhorse` を指定すると workhorse/nginx のログを確認でき、`-c webservice` を指定すると Rails のログを確認できます。

1. 上記コマンドを入力した後、GitLab インスタンスに移動してインスタンス上のさまざまなページにアクセスしてみてください。各リクエストに Nginx ログメッセージが関連付けられていることを確認してください。

1. Nginx サービスでエラーを意図的に発生させます。次のコマンドを使用して Nginx サービスを停止します。

   ```bash
   kubectl scale deploy -lapp=webservice,release=gitlab --replicas=0
   ```

1. Web ブラウザで `http://<your_gitlab_instance>` へのアクセスを試みてください。Web ブラウザには「**このサイトにアクセスできません**」または類似のメッセージが表示されるはずです。

1. ログを再度確認しようとしてみてください（Pod が存在しなくなったため失敗します）。

   ```bash
   kubectl logs <webservice-pod-name> -c gitlab-workhorse
   ```

    > これらのログに新しいログメッセージが表示されていないことに注意してください。Nginx にアクセスできないため、アクセスリクエストをログに記録できません。この場合、Nginx に問題があることをすぐに把握できます。

1. webservice Pod が実行されていないことを確認します。

   ```bash
   kubectl get pods | grep webservice
   ```

    > 注意: 出力に webservice Pod が表示されないはずです。

1. NGINX サービスを再起動します。

   ```bash
   kubectl scale deploy -lapp=webservice,release=gitlab --replicas=1
   ```

1. Pod の準備が整うまで待ってから、ログを表示してリクエストを受信していることを確認します。

   ```bash
   kubectl wait --for=condition=ready pod -lapp=webservice --timeout=60s
   kubectl get pods | grep webservice
   kubectl logs <new-webservice-pod-name> -c gitlab-workhorse --tail=5
   ```

1. webservice Pod が実行されていることを確認します。

   ```bash
   kubectl get pods -lapp=webservice
   ```

## タスク B. GitLab Rails レベルでの問題を追跡する

この例では、GitLab Rails で問題が発生したと仮定します。これをシミュレートするために:

1. リクエストが最初に到達する場所は workhorse/nginx レイヤーです。workhorse のログを確認しましょう。

    ```bash
    kubectl logs <webservice-pod-name> -c gitlab-workhorse --tail=20
    ```

1. この出力から、HTTP リクエストを探します。次のように表示されます。

    ```bash
    173.34.175.144 - - [25/Oct/2024:14:48:00 +0000] "GET / HTTP/1.1" 502 2026 "http://34.56.107.198/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36" -
    ```

    > アクセスされた URL と Nginx のステータスコードからこのリクエストであることがわかります。このステータスコードは 502 であり、リクエストは Web アプリケーションのルートへのものです。

1. workhorse のログにはリクエストと相関 ID が表示されます。リクエストから相関 ID（例: `01JB22H7ENN72DH5XNMTB2170Z`）をメモします。

1. この出力で、`Nginx` リクエストの URL と一致するリクエストを探します。次のように表示されます。

    ```json
    {"backend_id":"rails","content_type":"text/html; charset=utf-8","correlation_id":"01JB22H7ENN72DH5XNMTB2170Z","duration_ms":0,"host":"34.56.107.198","level":"info","method":"GET","msg":"access","proto":"HTTP/1.1","referrer":"http://34.56.107.198/","remote_addr":"173.34.175.144:0","remote_ip":"173.34.175.144","route":"","route_id":"default","status":502,"system":"http","time":"2024-10-25T14:50:49Z","ttfb_ms":0,"uri":"/favicon.ico","user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36","written_bytes":2026}
    ```

    > このリクエストから、さらに重要な詳細情報を収集できます。リクエストが rails に送信されたことがわかります。リクエストが rails に到達した場合は、`correlation_id` を使用してログ内でそれを特定できます。相関 ID をメモして Rails ログ内で検索しましょう。

1. Rails アプリケーションのログを表示するには、次のコマンドを実行します。

    ```bash
    kubectl logs <webservice-pod-name> -c webservice --tail=20
    ```

1. これらのログには大量のデータが含まれています。Rails ログで相関 ID を検索するには:

    ```bash
    kubectl logs <webservice-pod-name> -c webservice | grep -i <your-correlation-id>
    ```

1. 結果は表示されないはずです。これは GitLab Rails が Workhorse からリクエストを受信しなかったことを示しています。ここから、まず状態を確認することで Rails の問題を診断できます。

    ```bash
    kubectl get pods
    ```

## タスク C. SOS の収集

場合によっては、トラブルシューティングに GitLab サポートの支援が必要になります。GitLab サポートがエラーをトラブルシューティングするためには、インスタンスのログの完全な記録を提供することが役立ちます。この目的のために、GitLab SOS ツールを使用できます。

1. GitLab SOS を実行するには、次のコマンドを使用します。

    ```bash
    curl -s https://gitlab.com/gitlab-com/support/toolbox/kubesos/raw/main/kubeSOS.sh | bash -s -- -r gitlab
    ```

1. 実行が完了すると、`./kubesos-TIMESTAMP.tar.gz` の形式でサポートバンドルの場所が表示されます。

    > サポートリクエストを提出する際に、このバンドルを添付してインスタンスのすべてのログを提供できます。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson)を参照できます。

## ご提案

ラボへの変更を希望される場合は、マージリクエスト経由で変更を提出してください。
