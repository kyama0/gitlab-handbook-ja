---
title: "GitLab システム管理者 - ハンズオンラボ: GitLab Omnibus のトラブルシューティング"
description: "このハンズオンガイドでは、GitLab Omnibus インスタンスのトラブルシューティング方法を紹介します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandsonlab6/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-23T12:38:59+01:00"
---

> 推定所要時間: 30 分

## 目的

このラボの目的は、ログ分析と監視のために Prometheus と Grafana を使用する方法を示すことです。

## タスク A. リバースプロキシでの問題

1. GitLab インスタンスのシェルセッションから、NGINX のアクティブログの一つを表示します。

   ```bash
   sudo gitlab-ctl tail nginx/gitlab_access.log
   ```

1. これを入力したら、GitLab インスタンスに移動してインスタンスのさまざまなページにアクセスしてみます。各リクエストに Nginx ログメッセージが関連付けられていることに注意してください。

1. Nginx サービスでエラーを発生させてみましょう。次のコマンドを使用して Nginx サービスを停止します。

   ```bash
   sudo gitlab-ctl stop nginx
   ```

1. Web ブラウザーを使用して `http://<your_gitlab_instance>` にアクセスしようとします。Web ブラウザーに「**このサイトにアクセスできません**」または類似のメッセージが表示されます。

1. `nginx/access_log` を再度確認します。

   ```bash
   sudo gitlab-ctl tail nginx/gitlab_access.log
   ```

    > これらのログに新しいログメッセージが表示されていないことに注意してください。Nginx に到達できないため、アクセスリクエストをログに記録できません。この場合、Nginx に問題があることがすぐにわかります。

1. Web サービスがどこでも実行または待機していないことを確認します。

   ```bash
   curl -i http://localhost/nginx_status
   curl -i http://localhost:80
   ```

1. NGINX サービスを再起動します。

   ```bash
   sudo gitlab-ctl restart nginx
   ```

1. ログを表示して、Nginx がリクエストを受信して処理していることを確認します。

   ```bash
   sudo gitlab-ctl tail nginx/gitlab_access.log
   ```

1. Web サーバーが実行されてポート 80 で待機していることを確認します。

   ```bash
   curl -i http://localhost/nginx_status
   ```

## タスク B. GitLab Rails レベルでの問題のトレース

この例では、GitLab Rails で問題が発生したとします。これをシミュレートするには:

1. `sudo gitlab-ctl stop puma` を実行して `puma` サービスを停止します。

1. GitLab インスタンスに移動します。`502 Waiting for GitLab to boot` エラーが表示されることに注意してください。

1. このコンポーネントのリクエストが最初に到達する場所は Nginx です。次のコマンドを実行してログを確認しましょう。

    ```bash
    cat /var/log/gitlab/nginx/gitlab_access.log
    ```

1. この出力で、HTTP リクエストを検索します。次のように見えます。

    ```bash
    173.34.175.144 - - [25/Oct/2024:14:48:00 +0000] "GET / HTTP/1.1" 502 2026 "http://34.56.107.198/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36" -
    ```

    > アクセスされている URL と Nginx のステータスコードに基づいて、これがリクエストであることがわかります。このステータスコードは 502 で、リクエストは Web アプリケーションのルートへのものです。

1. この出力から、リクエストが Nginx に到達したことがわかります。ここから、アーキテクチャの次の場所である `Workhorse` にトレースできます。`Workhorse` のログを表示するには、次のコマンドを実行します。

    ```bash
    cat /var/log/gitlab/gitlab-workhorse/current
    ```

1. この出力で、`Nginx` リクエストの URL に一致するリクエストを探します。次のように見えます。

    ```json
    {"backend_id":"rails","content_type":"text/html; charset=utf-8","correlation_id":"01JB22H7ENN72DH5XNMTB2170Z","duration_ms":0,"host":"34.56.107.198","level":"info","method":"GET","msg":"access","proto":"HTTP/1.1","referrer":"http://34.56.107.198/","remote_addr":"173.34.175.144:0","remote_ip":"173.34.175.144","route":"","route_id":"default","status":502,"system":"http","time":"2024-10-25T14:50:49Z","ttfb_ms":0,"uri":"/favicon.ico","user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36","written_bytes":2026}
    ```

    > このリクエストから、いくつかの重要な詳細を収集できます。リクエストが rails に送信されたことがわかります。リクエストが rails に到達した場合は、`correlation_id` を使用してログで見つけることができます。correlation ID をメモして Rails ログで検索しましょう。

1. Rails アプリケーションのログを表示するには、次のコマンドを実行します。

    ```bash
    cat /var/log/gitlab/gitlab-rails/production_json.log
    ```

1. これらのログにはデータが多いため、correlation ID を検索する場合はログで grep できます。

    ```bash
    cat /var/log/gitlab/gitlab-rails/production_json.log | grep your-correlation-id
    ```

1. 結果は得られません。これは GitLab Rails が Workhorse からリクエストを受信しなかったことを示しています。ここから、ステータスを確認して rails の問題を診断できます。

    ```bash
    sudo gitlab-ctl status
    ```

1. この出力で、Rails が実行されていないことがわかります。これを修正するために Rails プロセスを再起動できます。

    ```bash
    sudo gitlab-ctl restart puma
    ```

### タスク C. 正常なリクエストのトレース

GitLab Rails が再び起動したので、有効なリクエストをトレースしてログでどのように見えるかを確認できます。これにより、correlation ID をリクエストに関連付けることに慣れることができます。

1. GitLab インスタンスにリクエストを送信します。

1. 次のコマンドを実行してリクエストの correlation ID を見つけます。

    ```bash
    cat /var/log/gitlab/gitlab-workhorse/current
    ```

    > 結果で、リクエスト URL に一致するリクエストを探します。最新のリクエストであるはずです。`correlation_id` プロパティをメモします。

1. GitLab Rails ログで correlation ID を検索します。

    ```bash
    cat /var/log/gitlab/gitlab-rails/production_json.log | grep your-correlation-id
    ```

1. 結果として、次のような correlation ID に一致するログメッセージが表示されるはずです。

    ```json
    {"method":"GET","path":"/","format":"html","controller":"RootController","action":"index","status":200,"time":"2024-10-25T15:05:43.089Z","params":[],"correlation_id":"01JB23CG5BM7X1KDDKX5DZ2RCK","meta.caller_id":"RootController#index","meta.feature_category":"groups_and_projects","meta.remote_ip":"173.34.175.144","meta.user":"root","meta.user_id":1,"meta.client_id":"user/1","remote_ip":"173.34.175.144","user_id":1,"username":"root","ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36","queue_duration_s":0.036988,"request_urgency":"low","target_duration_s":5,"redis_calls":68,"redis_allowed_cross_slot_calls":5,"redis_duration_s":0.012599,"redis_read_bytes":7048,"redis_write_bytes":5562,"redis_cache_calls":25,"redis_cache_allowed_cross_slot_calls":3,"redis_cache_duration_s":0.004691,"redis_cache_read_bytes":1971,"redis_cache_write_bytes":2244,"redis_db_load_balancing_calls":3,"redis_db_load_balancing_duration_s":0.000548,"redis_db_load_balancing_write_bytes":104,"redis_feature_flag_calls":31,"redis_feature_flag_duration_s":0.005347,"redis_feature_flag_read_bytes":4694,"redis_feature_flag_write_bytes":2526,"redis_repository_cache_calls":3,"redis_repository_cache_duration_s":0.000853,"redis_repository_cache_read_bytes":203,"redis_repository_cache_write_bytes":79,"redis_sessions_calls":6,"redis_sessions_allowed_cross_slot_calls":2,"redis_sessions_duration_s":0.00116,"redis_sessions_read_bytes":180,"redis_sessions_write_bytes":609,"db_count":52,"db_write_count":0,"db_cached_count":11,"db_txn_count":0,"db_replica_txn_count":0,"db_primary_txn_count":0,"db_main_txn_count":0,"db_ci_txn_count":0,"db_main_replica_txn_count":0,"db_ci_replica_txn_count":0,"db_replica_count":0,"db_primary_count":52,"db_main_count":52,"db_ci_count":0,"db_main_replica_count":0,"db_ci_replica_count":0,"db_replica_write_count":0,"db_primary_write_count":0,"db_main_write_count":0,"db_ci_write_count":0,"db_main_replica_write_count":0,"db_ci_replica_write_count":0,"db_replica_cached_count":0,"db_primary_cached_count":11,"db_main_cached_count":11,"db_ci_cached_count":0,"db_main_replica_cached_count":0,"db_ci_replica_cached_count":0,"db_replica_wal_count":0,"db_primary_wal_count":0,"db_main_wal_count":0,"db_ci_wal_count":0,"db_main_replica_wal_count":0,"db_ci_replica_wal_count":0,"db_replica_wal_cached_count":0,"db_primary_wal_cached_count":0,"db_main_wal_cached_count":0,"db_ci_wal_cached_count":0,"db_main_replica_wal_cached_count":0,"db_ci_replica_wal_cached_count":0,"db_replica_txn_max_duration_s":0.0,"db_primary_txn_max_duration_s":0.0,"db_main_txn_max_duration_s":0.0,"db_ci_txn_max_duration_s":0.0,"db_main_replica_txn_max_duration_s":0.0,"db_ci_replica_txn_max_duration_s":0.0,"db_replica_txn_duration_s":0.0,"db_primary_txn_duration_s":0.0,"db_main_txn_duration_s":0.0,"db_ci_txn_duration_s":0.0,"db_main_replica_txn_duration_s":0.0,"db_ci_replica_txn_duration_s":0.0,"db_replica_duration_s":0.0,"db_primary_duration_s":0.039,"db_main_duration_s":0.039,"db_ci_duration_s":0.0,"db_main_replica_duration_s":0.0,"db_ci_replica_duration_s":0.0,"cpu_s":0.225071,"mem_objects":91945,"mem_bytes":8675485,"mem_mallocs":19041,"mem_total_bytes":12353285,"pid":239709,"worker_id":"puma_2","rate_limiting_gates":[],"db_duration_s":0.02908,"view_duration_s":0.11937,"duration_s":0.20995}
    ```

Rails がリクエストを受け付けている場合、これらのログメッセージはトラブルシューティングとデバッグのための豊富な情報を提供します。

## タスク D. SOS の収集

場合によっては、トラブルシューティングに GitLab サポートの支援が必要になります。GitLab サポートがエラーをトラブルシューティングするのを支援するために、インスタンスログの完全な記録を提供することが有用です。この目的のために、GitLab SOS ツールを使用できます。

1. GitLab SOS を実行するには、次のコマンドを使用します。

    ```bash
    /opt/gitlab/embedded/bin/git clone --recursive https://gitlab.com/gitlab-com/support/toolbox/gitlabsos.git && cd gitlabsos
    sudo /opt/gitlab/embedded/bin/ruby ./gitlabsos.rb
    ```

1. 実行が完了すると、`/root/gitlabsos/gitlabsos.your-instance-name_gitaly-nginx-psql-puma-redis-sidekiq.tar.gz` の形式でサポートバンドルの場所が表示されます。

    > サポートリクエストを申請する際、このバンドルを添付してすべてのインスタンスログを提供できます。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
