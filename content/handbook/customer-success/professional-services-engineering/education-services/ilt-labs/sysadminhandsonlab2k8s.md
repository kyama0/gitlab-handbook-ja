---
title: "GitLab システム管理者 - ハンズオンラボ: GitLab Kubernetes インスタンスの探索"
description: "このハンズオンガイドでは、GitLab Kubernetes インスタンスでのコマンドラインツールへのアクセスと操作方法を紹介します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandsonlab2k8s/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-05T09:24:54-05:00"
---

## 目的

このラボでは、GitLab インスタンスに SSH 接続し、インスタンスで使用可能なさまざまなコマンドラインツールを操作します。これにより、GitLab インストールを操作するさまざまな方法を理解できます。

## タスク A. GitLab インスタンスへのアクセス

SSH を使用して GitLab インストールにアクセスします。このクラスの一部として、SSH キーとインスタンス IP が提供されています。提供されたインスタンスは、Kubernetes クラスターへの helm 経由のアクティブな接続を持っています。インスタンスに SSH 接続するには、以下の手順を使用します。

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

1. 割り当てられた IP アドレスと SSH キーファイルを使用して、GitLab Omnibus インストールをホストするサーバーにログインします。

    ```bash
    ssh -i <keyfile_name> student-user@<vm_ip_address>
    ```

    > WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! というエラーが表示された場合は、SSH の known hosts をリセットする必要があるかもしれません。これを行うには、`ssh-keygen -R <vm_ip_address>` コマンドを実行してください。

1. Enter キーを押します。

1. システムに認証警告が表示された場合は、`yes` と入力して Enter キーを押します。

1. yes と入力すると、サーバーに接続されます。

## タスク B. kubectl の操作

`kubectl` コマンドラインツールは、GitLab インスタンスのステータスを確認・検証する主な方法の一つです。このセクションでは、GitLab インスタンスのステータスを確認するさまざまな方法を探ります。

1. インスタンスで `kubectl get pods` コマンドを実行します。以下のような出力が表示されます。

    ```bash
        NAME                                              READY   STATUS      RESTARTS        AGE
        gitlab-certmanager-7c799d587-9czfz                1/1     Running     0               4m5s
        gitlab-certmanager-cainjector-9485f8595-976d7     1/1     Running     0               4m3s
        gitlab-certmanager-webhook-dcf65786c-kfvhg        1/1     Running     0               4m3s
        gitlab-gitaly-0                                   1/1     Running     0               4m3s
        gitlab-gitlab-exporter-76db6c9754-pcscv           1/1     Running     0               4m2s
        gitlab-gitlab-shell-557686d7fc-x6rhm              1/1     Running     0               4m5s
        gitlab-issuer-e45fa94-dp584                       0/1     Completed   0               4m3s
        gitlab-kas-5474bdbfdf-p6qw4                       1/1     Running     4 (2m59s ago)   4m5s
        gitlab-kas-5474bdbfdf-pzqwm                       1/1     Running     4 (2m57s ago)   3m50s
        gitlab-migrations-92d5ea2-x6lc5                   0/1     Completed   1               4m2s
        gitlab-minio-5d646cdfb7-cdgw7                     1/1     Running     0               4m5s
        gitlab-minio-create-buckets-5359da5-rccp6         0/1     Completed   0               4m3s
        gitlab-nginx-ingress-controller-5dd6f5f49-9k2cq   1/1     Running     0               4m5s
        gitlab-nginx-ingress-controller-5dd6f5f49-dgvft   1/1     Running     0               4m3s
        gitlab-postgresql-0                               2/2     Running     0               4m3s
        gitlab-prometheus-server-c7f9d89dc-wz48w          2/2     Running     0               4m5s
        gitlab-redis-master-0                             2/2     Running     0               4m3s
        gitlab-registry-79f74497dd-bk8gw                  1/1     Running     0               4m3s
        gitlab-registry-79f74497dd-g9s84                  1/1     Running     0               3m50s
        gitlab-sidekiq-all-in-1-v2-54dfb45f84-d5gbq       1/1     Running     0               4m2s
        gitlab-toolbox-9cdd66dc5-pz4gz                    1/1     Running     0               4m2s
        gitlab-webservice-default-67f8cbfd9b-cmn7p        2/2     Running     0               4m3s
    ```

    > status コマンドにより、サーバー上で実行されている GitLab コンポーネントの概要が表示されます。ここに示されているものとコンポーネント名が異なる場合があります。

1. 次に、特定の Pod の詳細を確認してみましょう。これを行うには、`kubectl describe pod <your-webservice-pod-name>` コマンドを実行します。

    > この出力では、webservice Pod に関する詳細情報が表示されます。この出力は、GitLab インスタンスコンポーネントのトラブルシューティングと監視に役立ちます。

## タスク C. helm の操作

Kubernetes を操作する場合、管理タスクの多くは helm を通じて実行されます。まず、helm デプロイメントの値を取得し、設定に若干の調整を加えます。

1. helm の値を取得するには、`helm get values gitlab` コマンドを実行します。すべての helm 値の出力が表示されます。

1. `helm get values gitlab > values.yml` コマンドを使用してファイルにコピーします。

1. お好みのテキストエディターで `values.yml` ファイルを開きます。

1. 先頭行に書かれた `USER-SUPPLIED VALUES:` を削除します。

1. 結果のファイルを保存します。

1. これらの値が正常にデプロイされることを確認するために、値ファイルをデプロイしてみましょう。これを行うには、`helm upgrade gitlab gitlab/gitlab --version 9.4.3 -f values.yml` コマンドを実行します。

    > このコマンドの実行には数分かかる場合があります。

1. コマンドが完了したら、`kubectl get pods` を実行します。すべての Pod が正常にデプロイを完了していることを確認します。

## タスク D. GitLab Rails の操作

GitLab Rails は、Ruby on Rails を通じて GitLab と直接やり取りできるコマンドラインツールです。このツールは、インスタンスエラーのトラブルシューティングと修正に役立ちます。

1. GitLab Rails にアクセスするには、`kubectl get pods -lapp=toolbox` コマンドを実行して toolbox Pod を見つけます。

1. toolbox Pod を使用して、`kubectl exec -it -c toolbox <toolbox-pod-name> -- gitlab-rails console` コマンドで `gitlab-rails` のインスタンスを起動します。

1. コマンドが完了したら、`u = User.find_by_username('root')` を実行します。

    > このコマンドにより、GitLab でユーザー名が `root` のユーザーを検索し、変数 `u` に格納します。

1. `pp u.attributes` を使用してユーザーの属性を表示します。

1. `pp u.username` を使用してユーザーのユーザー名を表示します。

1. 完了したら、`quit` と入力して Rails コンソールを終了します。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
