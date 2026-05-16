---
title: "GitLab システム管理 - ハンズオンラボ: GitLab のトラブルシューティング"
description: "このハンズオンガイドでは、GitLab サービス NGINX、Puma、Gitaly のトラブルシューティング手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/sysadminhandsonlab8/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2024-07-03T19:45:59+00:00"
---

> 完了までの目安時間: 30 分

## 目的

このラボの目的は、`gitlab-ctl` コマンドを使って GitLab サーバーをトラブルシューティングする方法を示すことです。このラボ演習では、GitLab の主要なサービスとそれらの相互作用を確認するために、GitLab の[アプリケーションアーキテクチャ](https://docs.gitlab.com/ee/development/architecture.html#simplified-component-overview) を参照してください。

### タスク A. NGINX のトラブルシューティング

1. GitLab インスタンスのシェルセッションから、NGINX のアクティブなログの 1 つを表示します。

   ```bash
   sudo gitlab-ctl tail nginx/gitlab_access.log
   ```

   ログには数秒ごとに新しいエントリーが追加されることに注目してください。これらのエントリーのほとんどは、gitlab-runner が HTTP 経由で GitLab インスタンスにチェックインしているものです。

1. NGINX サービスを停止します。

   ```bash
   sudo gitlab-ctl stop nginx
   ```

1. Web ブラウザーで `http://<your_gitlab_instance>` に移動してみてください。Web ブラウザーには「**This site can't be reached**」または同様のメッセージが表示されるはずです。

1. `nginx/access_log` を再度確認します。

   ```bash
   sudo gitlab-ctl tail nginx/gitlab_access.log
   ```

NGINX を停止した後、クライアントが GitLab に HTTP/HTTPS リクエストを送信できないため、ログは更新されないはずです。

1. Web サービスがどこでも実行されておらず、リッスンしていないことを確認します。

   ```bash
   curl -i http://localhost/nginx_status
   curl -i http://localhost:80
   ```

1. NGINX サービスを再起動します。

   ```bash
   sudo gitlab-ctl restart nginx
   ```

1. クライアント（GitLab Runner など）が再び GitLab と通信できることを確認します。

   ```bash
   sudo gitlab-ctl tail nginx/gitlab_access.log
   ```

1. Web サーバーが稼働してポート 80 でリッスンしていることを確認します。

   ```bash
   curl -i http://localhost/nginx_status
   ```

### タスク B. Puma のトラブルシューティング

1. Web ブラウザーで GitLab インスタンスに接続します。プロジェクトや管理者エリアなどをクリックして移動できることを確認します。

1. GitLab インスタンスのシェルセッションから、Puma を停止します。

   ```bash
   sudo gitlab-ctl stop puma
   ```

1. Web ブラウザーで GitLab を更新します。「**502: GitLab is taking too much time to respond**」というエラーがすぐに表示されるはずです。NGINX は稼働しているので HTTP リクエストを受け付けられます。しかし、workhorse が Rails アプリケーションに HTTP リクエストを渡そうとしても、それを受け付ける稼働中のサービスがありません。

1. GitLab Workhorse のログを表示します。

   ```bash
   sudo gitlab-ctl tail gitlab-workhorse/current
   ```

   出力にはさまざまな **502** および **badgateway** エラーが表示されます。

1. Puma のログを表示します。

   ```bash
   sudo gitlab-ctl tail puma
   ```

   `puma/puma_stdout.log` に Puma サービスのシャットダウンに関するメッセージが表示されているはずです。`puma/puma_stderr.log` にエラーが表示されることもあります。

1. Puma を再起動します。

   ```bash
   sudo gitlab-ctl restart puma
   ```

1. Puma の runit ログを表示します。

   ```bash
   sudo gitlab-ctl tail puma/current
   ```

   Puma が再起動したことを示す出力が見られるはずです。

1. `puma/puma_stdout.log` を表示します。

   ```bash
   sudo gitlab-ctl tail puma/puma_stdout.log
   ```

   Puma が再び稼働してリソースを消費していることが確認できるはずです。

1. 約 2 分待ってから、Web ブラウザーで GitLab を更新します。アプリケーションが再びアクセス可能になっているはずです。

1. GitLab Workhorse のログを表示します。

   ```bash
   sudo gitlab-ctl tail gitlab-workhorse/current
   ```

   最近のエントリーには、Puma へのリクエストが成功していること（つまり Web ブラウザーで GitLab を再読み込みしたとき）が示されているはずです。

### タスク C. Gitaly のトラブルシューティング

1. Web ブラウザーで GitLab インスタンスに接続します。

1. **Menu > Projects > Your Projects** に移動します。

1. **New Project** を選択します。

1. **Create blank project** を選択します。

1. プロジェクトに `Test project` という名前を付けます。プロジェクトの公開範囲を **Public** に設定し、**Initialize repository with a README** が選択されていることを確認します。その他の設定はそのままにします。

1. **Create project** を選択します。プロジェクトのランディングページにリダイレクトされます。

1. **GitLab Runner サーバー**に SSH 接続します。

   ```bash
   ssh -i <SSH_HOST_KEY> root@<GITLAB_runner_host>
   ```

1. Git がまだインストールされていない場合は、ダウンロードします。

   ```bash
   sudo apt-get install -y git
   ```

1. GitLab の **Test project** に戻り、ページの右側にある **Clone** を選択します。

1. **Clone with HTTP** の隣にある **Copy URL** を選択します。

1. GitLab Runner サーバーで、リポジトリをクローンします。

   ```bash
   git clone <URL_copied_from_previous_step>
   ```

1. プロジェクトが正しくクローンされたことを確認します。

   ```bash
   cd ~/test-project
   ls -a
   git status
   ```

1. `exit` を入力して、GitLab Runner サーバーの SSH セッションを終了します。

1. **GitLab Omnibus インスタンス**で SSH セッションを開きます。

   ```bash
   ssh -i <SSH_HOST_KEY> root@<GITLAB_OMNIBUS_HOST>
   ```

1. Gitaly が稼働していることを確認します。

   ```bash
   sudo gitlab-ctl status gitaly
   ```

1. Gitaly のログを表示します。

   ```bash
   sudo gitlab-ctl tail gitaly
   ```

   > **Test Project** に関連する最近の gRPC リクエストが多数表示されるはずです（出力を grep するとリファレンスがより明確に見えます。例: `sudo gitlab-ctl tail gitaly | grep test-project`）。

1. Gitaly サービスを停止します。

   ```bash
   sudo gitlab-ctl stop gitaly
   ```

1. Gitaly（および Gitaly のみ）が停止していることを確認します。

   ```bash
   sudo gitlab-ctl status
   ```

1. Web ブラウザーで **Test Project** に戻ります。プロジェクトページで、プロジェクトタイトルの下にある **main** と表示されているドロップダウンを選択します。通常であれば、切り替える Git ブランチを選択できます。今はエラーが表示され、ブランチリストが読み込まれません。

1. 左サイドバーで **Repository > Files** を選択します。GitLab がリポジトリファイルを取得できないため、404 エラーが表示されることに注目してください。

1. 戻るボタンを選択して、プロジェクトのランディングページに戻ります。その後ページを更新します。

1. 追加のエラーに注目してください。エラーの 1 つは「**An error occurred while fetching folder content**」と表示されている場合があります。Gitaly が稼働してリクエストを処理していないため、GitLab はデフォルトブランチの HEAD をチェックアウトできません。

1. GitLab インスタンスの SSH セッションに戻ります。Gitaly の最近のログエントリーを確認します。

   ```bash
   sudo gitlab-ctl tail gitaly/current
   ```

   > ログ出力に多数のエラーがあることに注目してください。

1. `exit` を入力して、GitLab インスタンスサーバーの SSH セッションを終了します。

1. **GitLab Runner サーバー**に再度 SSH 接続します。

   ```bash
   ssh -i <SSH_HOST_KEY> root@<GITLAB_RUNNER_HOST>
   ```

1. クローンした **Test Project** に移動します。

   ```bash
   cd ~/test-project
   ```

1. GitLab インスタンス上のリモートリポジトリから新しい変更を取得しようとします。

   ```bash
   git fetch
   ```

   > 出力にエラー 503 が表示されることがあり、これは Gitaly に到達できず、リクエストを処理できないことを示しています。

1. `exit` を入力して、GitLab Runner サーバーの SSH セッションを終了します。

1. **GitLab Omnibus インスタンス**で SSH セッションを再開します。

   ```bash
   ssh -i <SSH_HOST_KEY> root@<GITLAB_OMNIBUS_HOST>
   ```

1. Gitaly サービスを再起動します。

   ```bash
   sudo gitlab-ctl start gitaly
   ```

1. Gitaly のログを確認します。

   ```bash
   sudo gitlab-ctl tail gitaly/current
   ```

   > 出力には gRPC リクエストの成功が表示されるはずです。

1. Web ブラウザーで **Test Project** に戻ります。ページを更新します。リポジトリ内を移動したり、ファイルを表示したり、ブランチをチェックアウトしたりできるようになっているはずです。

1. ランナーサーバーに再度 SSH 接続して、`git fetch` をテストします。コマンドはエラーなしで実行されるはずです（GitLab 内のファイルが変更されていないため、出力はおそらく何もありません）。

### タスク D. gitlabsos ユーティリティを実行する

1. [gitlabsos プロジェクトページ](https://gitlab.com/gitlab-com/support/toolbox/gitlabsos/) に移動します。プロジェクトの概要と README に目を通し、ユーティリティの目的と使い方を学びます。

2. SSH 経由で GitLab Omnibus インスタンスに接続します。

3. gitlabsos ユーティリティをクローンします。

   ```bash
   /opt/gitlab/embedded/bin/git clone --recursive https://gitlab.com/gitlab-com/support/toolbox/gitlabsos.git
   ```

4. gitlabsos を実行します。

   ```bash
   cd gitlabsos
   sudo ./gitlabsos.rb
   ```

   > スクリプトの実行には数分かかる場合があります。

5. スクリプトが完了したら、生成されたレポートファイルとその内容を確認します。

   ```bash
   ls
   tar -tvf gitlabsos.<GITLAB_FQDN>.<timestamp>.tar.gz
   ```

   GitLab Support がトラブルシューティングを支援するためにこのレポートを求めることがあります。

## ラボガイド完了

このラボ演習は完了しました。本コースのその他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/sysadminhandson)を確認できます。

### ご提案はありますか？

GitLab システム管理ハンズオンガイドへの変更を提案したい場合は、マージリクエストでお寄せください。
