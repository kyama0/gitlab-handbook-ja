---
title: "GitLab システム管理者 - ハンズオンラボ: Kubernetes のバックアップとリストア"
description: "このハンズオンガイドでは、GitLab Kubernetes インスタンスのバックアップとリストア方法を紹介します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandsonlab3k8s/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-18T09:17:46-05:00"
---

> 推定所要時間: 30 分

## 目的

このラボの目的は、仮想マシン上の GitLab インスタンスをバックアップし、以前の状態にリストアする方法を示すことです。GitLab インスタンスのバックアップ/リストアの詳細については、[こちら](https://docs.gitlab.com/ee/administration/backup_restore/)をクリックしてください。

## タスク A. バックアップ設定の構成

1. GitLab インスタンスサーバーで SSH セッションを開きます。

1. お好みのテキストエディターで helm 値を開きます。

1. このファイル内で、バックアップを有効にするためにいくつかの設定を更新する必要があります。まず、次の `global` 設定を追加します。

    ```yml
    global:
      appConfig:
        backups:
          bucket: gitlab-k8-bucket
        tmpBucket:
          bucket: gitlab-k8-tmp-bucket
    ```

    > これらの設定は、各バックアップタイプのリモートストレージバケットの名前を設定します。

1. Kubernetes のバックアップは `toolbox` Pod を通じて行われます。この Pod がバックアップを実行できるようにするには、バックアッププロバイダーに接続できる必要があります。次の設定を `gitlab` ブロックに追加することで実現できます。

    ```yml
      toolbox:
        backups:
          objectStorage:
            backend: gcs
            config:
              key: config
              secret: storage-config
              gcpProject: demosys-ilt-training-cloud
    ```

1. これらのバケットにアクセスできるようにするには、GCS サービスアカウントの認証情報を提供する必要があります。これを行うには、`kubectl create secret generic storage-config --from-file=config=storage.config` コマンドを実行します。

1. この設定を追加したら、`helm upgrade --install gitlab gitlab/gitlab --version 9.4.3 --timeout 100s -f values.yml` コマンドを実行します。

## タスク B. GitLab インスタンスのバックアップ

1. フルバックアップを取得するには、まず `toolbox` Pod を見つけます。

    ```bash
    kubectl get pods -lapp=toolbox
    ```

1. 次に、`toolbox` Pod からバックアップユーティリティを実行します。

    ```bash
    kubectl exec <toolbox-name>  -it -- backup-utility
    ```

1. 最後に、Kubernetes シークレットを取得してファイルに保存します。

    ```bash
    #Rails シークレットを取得
    kubectl get secrets | grep rails-secret

    #シークレットをローカルの場所に保存
    kubectl get secrets <rails-secret-name> -o jsonpath="{.data['secrets\.yml']}" | base64 --decode > gitlab-secrets.yaml
    ```

この時点で、バックアップはオブジェクトストレージに保存されます。ファイル名をメモしておきます。例: `s3://bucket/1729261040_2024_10_18_17.4.1-ee_gitlab_backup.tar`

**重要:** タイムスタンプをメモしておきます（この例では: 1729261040_2024_10_18_17.4.1-ee）。リストアプロセスで必要になります。

## タスク C. GitLab 設定の変更

1. Web ブラウザーで GitLab インスタンスにサインインし、サイドバーを開きます。左下隅の **Admin area** をクリックします。

2. 左サイドバーで **Settings** > **General** を選択します。

3. **Account and limit** を展開し、最大添付ファイルサイズを 500 MiB に、デフォルトのプロジェクト制限を 10000 に変更します。

4. **Save changes** をクリックして変更を保存します。

5. ページを更新して変更が適用されたことを確認します。

## タスク D. バックアップからのリストア

1. GitLab インスタンスサーバーの SSH セッションに戻ります。

1. 現在の Kubernetes シークレットを削除します。

    ```bash
    kubectl delete secret <rails-secret-name>
    ```

1. バックアップした Kubernetes シークレットに基づいて新しいシークレットセットを作成します。

    ```bash
    kubectl create secret generic <rails-secret-name> --from-file=secrets.yml=gitlab-secrets.yaml
    ```

1. シークレットを適用するために Kubernetes Pod を再起動します。

    ```bash
    kubectl delete pods -lapp=sidekiq,release=gitlab
    kubectl delete pods -lapp=webservice,release=gitlab
    kubectl delete pods -lapp=toolbox,release=gitlab
    ```

1. リストアプロセスを開始するには、`toolbox` Pod の名前を見つけます。

    ```bash
    kubectl get pods -lapp=toolbox
    ```

1. Kubernetes Pod のレプリカを 0 にスケールダウンします。

    ```bash
    kubectl scale deploy -lapp=sidekiq,release=gitlab --replicas=0
    kubectl scale deploy -lapp=webservice,release=gitlab --replicas=0
    kubectl scale deploy -lapp=prometheus,release=gitlab --replicas=0
    ```

1. バックアップコマンドから取得したタイムスタンプ ID を使用してリストアを実行します。

    ```bash
    kubectl exec <Toolbox pod name> -it -- backup-utility --restore -t your-timestamp-id
    ```

    > リストアプロセスを開始するよう求められた場合は、**yes** と入力します。

1. リストアプロセスが完了したら、Pod をスケールアップします。

    ```bash
    kubectl scale deploy -lapp=sidekiq,release=gitlab --replicas=1
    kubectl scale deploy -lapp=webservice,release=gitlab --replicas=1
    kubectl scale deploy -lapp=prometheus,release=gitlab --replicas=1
    ```

1. Kubernetes インスタンスにアクセスして、リストアが正常に完了したことを確認します。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
