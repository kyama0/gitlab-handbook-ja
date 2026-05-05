---
title: "GitLab システム管理者 - ハンズオンラボ: GitLab Omnibus インスタンスの探索"
description: "このハンズオンガイドでは、GitLab Omnibus インスタンスでのコマンドラインツールへのアクセスと操作方法を紹介します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandsonlab2/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

## 目的

このラボでは、GitLab インスタンスに SSH 接続し、インスタンスで使用可能なさまざまなコマンドラインツールを操作します。これにより、GitLab インストールを操作するさまざまな方法を理解できます。

## タスク A. GitLab インスタンスへのアクセス

SSH を使用して GitLab インストールにアクセスします。このクラスの一部として、SSH キーと 2 つのインスタンス IP が提供されています。これらのサーバーのうち一方は、ジャンプボックスまたはバスティオンサーバーと呼ばれます。まずバスティオンサーバーに SSH 接続します。このサーバーから、root ユーザーとして GitLab インスタンスにアクセスできます。GitLab インスタンスに SSH 接続するには、以下の手順を使用します。

1. ローカルコンピューターでターミナルウィンドウを開きます。

1. サーバーの SSH キーファイルが含まれているディレクトリに移動します。

1. SSH 接続では、プライベートキーファイルに他のユーザーがアクセスできないようにする必要があります。Linux および MacOS では、次のコマンドで設定できます。

    ```bash
    chmod 400 <keyfile_name>
    ```

    Windows では、次のコマンドで設定できます。

    ```bash
    icacls .\keyname.pem /inheritance:r
    ```

1. 割り当てられたバスティオン IP アドレスと SSH キーファイルを使用して、`student-user` としてサーバーにログインします。

    ```bash
    ssh -i <keyfile_name> student-user@<vm_ip_address>
    ```

1. バスティオンサーバーから、割り当てられた Omnibus IP アドレスを使用して Omnibus サーバーに root としてログインします。

    ```bash
    ssh -i ~/.ssh/ilt_key root@<omnibus_ip_address>
    ```

    > WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! というエラーが表示された場合は、SSH の known hosts をリセットする必要があるかもしれません。これを行うには、`ssh-keygen -R <vm_ip_address>` コマンドを実行してください。

1. Enter キーを押します。

1. システムに認証警告が表示された場合は、`yes` と入力して Enter キーを押します。

1. yes と入力すると、サーバーに接続されます。

## タスク B. gitlab-ctl の操作

`gitlab-ctl` コマンドラインユーティリティは、GitLab インスタンスの管理とトラブルシューティングのためのツールを提供します。このタスクでは、`gitlab-ctl` ツールを通じて GitLab インストールと対話するさまざまな方法を確認します。

1. GitLab インスタンスで、`sudo gitlab-ctl status` コマンドを実行します。以下のような出力が表示されます。

    ```bash
    run: alertmanager: (pid 904) 110s; run: log: (pid 899) 110s
    run: gitaly: (pid 910) 110s; run: log: (pid 884) 110s
    run: gitlab-exporter: (pid 903) 110s; run: log: (pid 886) 110s
    run: gitlab-kas: (pid 893) 110s; run: log: (pid 881) 110s
    run: gitlab-workhorse: (pid 894) 110s; run: log: (pid 888) 110s
    run: logrotate: (pid 900) 110s; run: log: (pid 892) 110s
    run: nginx: (pid 901) 110s; run: log: (pid 896) 110s
    run: node-exporter: (pid 907) 110s; run: log: (pid 889) 110s
    run: postgres-exporter: (pid 898) 110s; run: log: (pid 885) 110s
    run: postgresql: (pid 890) 110s; run: log: (pid 882) 110s
    run: prometheus: (pid 906) 110s; run: log: (pid 891) 110s
    run: puma: (pid 905) 110s; run: log: (pid 895) 110s
    run: redis: (pid 897) 110s; run: log: (pid 883) 110s
    run: redis-exporter: (pid 902) 110s; run: log: (pid 887) 110s
    run: sidekiq: (pid 911) 110s; run: log: (pid 909) 110s
    ```

    > status コマンドにより、サーバー上で実行されている GitLab コンポーネントの概要が表示されます。

1. 次に、`sudo gitlab-ctl stop nginx` コマンドを使用して GitLab コンポーネントを停止してみます。

    > 出力として `ok: down: nginx: 0s, normally up` が表示されます。

1. `Nginx` が実行されていないことを確認するには、`sudo gitlab-ctl status` コマンドを実行します。出力で `Nginx` が実行されていないことを確認できます。

    ```bash
    down: nginx: 58s, normally up; run: log: (pid 896) 1070s
    ```

1. `Nginx` を再起動するには、`sudo gitlab-ctl restart nginx` コマンドを実行します。

    > 出力として `ok: run: nginx: (pid 1869) 0s` が表示されます。

1. `sudo gitlab-ctl status` を実行して、`Nginx` が再び起動して実行されていることを確認します。

## タスク C. GitLab Rails の操作

GitLab Rails は、Ruby on Rails を通じて GitLab と直接やり取りできるコマンドラインツールです。このツールは、インスタンスエラーのトラブルシューティングと修正に役立ちます。

1. GitLab Rails にアクセスするには、`sudo gitlab-rails console` コマンドを実行します。

    > このコマンドの完了には数分かかる場合があります。

1. コマンドが完了したら、`u = User.find_by_username('root')` を実行します。

    > このコマンドにより、GitLab でユーザー名が `root` のユーザーを検索し、変数 `u` に格納します。

1. `pp u.attributes` を使用してユーザーの属性を表示します。

1. `pp u.username` を使用してユーザーのユーザー名を表示します。

1. 完了したら、`quit` と入力して Rails コンソールを終了します。

## タスク D. PostgreSQL の操作

GitLab はすべてのアプリケーション関連データに PostgreSQL を使用しています。`psql` を通じてこのデータを表示すると役立つ場合があります。

1. PostgreSQL にアクセスするには、`sudo gitlab-psql -d gitlabhq_production` コマンドを実行します。

1. `\x on` コマンドを実行して、クエリ結果を拡張形式にします。

1. PostgreSQL データベース内のすべてのテーブルを表示するには、`\dt` を実行します。

1. いくつかのテーブルをクエリしてみましょう！例えば、`SELECT * FROM projects;`、`SELECT * FROM users;` などです。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
