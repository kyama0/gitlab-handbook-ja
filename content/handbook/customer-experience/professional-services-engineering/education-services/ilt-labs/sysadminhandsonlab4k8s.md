---
title: "GitLab システム管理者 - ハンズオンラボ: GitLab Kubernetes のアップグレード"
description: "このハンズオンガイドでは、GitLab Kubernetes インスタンスのアップグレード方法を紹介します。"
upstream_path: /handbook/customer-experience/professional-services-engineering/education-services/ilt-labs/sysadminhandsonlab4k8s/
upstream_sha: d717b9da633f2989a0b1854384a69a0c31bae680
translated_at: "2026-11-07T00:34:25.759821+00:00"
translator: claude
stale: false
lastmod: "2026-11-05T15:47:39Z"
---

> 推定所要時間： 30 分

## 目的 {#objectives}

このラボの目的は、GitLab インスタンスのアップグレード方法を示すことです。

## タスク A. 現在の GitLab バージョンの確認 {#task-a-view-your-current-gitlab-version}

1. GitLab インスタンスに移動し、root ユーザーとしてサインインします。

1. 左サイドバーで **Help > Help** を選択します。

1. ページの上部に、完全な GitLab バージョンが表示されます。このラボでは、`18.6.0-ee` が表示されます。

## タスク B. 利用可能な GitLab バージョンの確認 {#task-b-view-the-available-gitlab-versions}

GitLab Omnibus のアップデートは、パッケージマネージャーを通じて、GitLab バージョンに対応する Omnibus パッケージをインストールすることで完了します。パッケージで利用可能な GitLab のバージョンを確認するには、インスタンスに SSH 接続し、パッケージマネージャーのパッケージバージョンを確認します。

1. GitLab インスタンスに SSH 接続します。

1. `helm repo update` コマンドを実行して helm チャートを更新します。

1. `helm search repo gitlab/gitlab --versions` コマンドを実行します。

1. このラボでは、バージョン `18.8.11-ee.0`（helm チャートバージョン `9.8.12` に対応）を見つけます。このバージョンをメモしておきます。このバージョンの GitLab にアップグレードします。

## タスク C. アップグレードの実行 {#task-c-run-the-upgrade}

ターゲットの GitLab バージョンが特定できたので、GitLab のアップグレードを実行できます。

1. まだ行っていない場合は、GitLab インスタンスに SSH 接続します。

1. 次のコマンドを使用してインスタンスのバックアップを取得します。

      ```bash
      # find the toolbox pod
      kubectl get pods -lapp=toolbox

      # Run the backup utility
      kubectl exec <toolbox-name>  -it -- backup-utility

      #Get your rails secrets
      kubectl get secrets | grep rails-secret

      #Save the secrets to a local location
      kubectl get secrets <rails-secret-name> -o jsonpath="{.data['secrets\.yml']}" | base64 --decode > gitlab-secrets.yml
      ```

1. `https://gitlab-com.gitlab.io/support/toolbox/upgrade-path/` に移動します。

1. 現在の GitLab バージョン（`18.6.0`）とターゲットバージョン（`18.8.11`）を入力します。

1. `Edition` が **Enterprise** に設定され、`Distro` が **Ubuntu** に設定されていることを確認します。

1. `Go!` を選択します。

アップグレードパスでは、`18.8.11` をインストールするという 1 つのステップのみが必要であることがわかります。このプロセスを完了しましょう。

1. `values.yml` ファイルを開き、`gitlab` ブロックの下に次の設定があることを確認します。ない場合は追加します。この設定により、古い `sidekiq` Pod を停止してから新しい Pod を起動するため、クラスターの CPU が限られていてもアップグレードが滞りません。

      ```yml
        sidekiq:
          deployment:
            strategy:
              type: Recreate
      ```

1. GitLab インスタンスで、次のコマンドを実行します。

      ```bash
      helm upgrade gitlab gitlab/gitlab \
      --version 9.8.12 \
      -f values.yml
      ```

      > 現在デプロイされているチャートより新しいバージョンにのみアップグレードしてください。Helm と GitLab はダウングレードに対応しておらず、古い `--version` でこのコマンドを実行すると、インスタンスが `HTTP 502` を返す状態になります。

1. インストールが完了するまで待ちます。完了したら、Web ブラウザーでインスタンスに移動します。

`HTTP 502: Waiting for GitLab to boot` というメッセージが表示されます。起動が完了して GitLab インスタンスに戻るまで、この画面で待機します。

## タスク D. アップグレードの検証 {#task-d-validate-the-upgrade}

この時点で、インスタンスのログインページにリダイレクトされています。アップグレードを検証するには、以下の手順を完了します。

1. root ユーザーとして GitLab インスタンスにログインします。

1. 左サイドバーで **Admin** を選択します。

1. 左サイドバーで **Monitoring > Background migrations** を選択します。

1. テーブルを確認し、**Queued** セクションにマイグレーションがないか調べます。追加のアップグレードを完了する前に、これらのマイグレーションを完了させる必要があります。完了すると、**Finished** タブに表示されます。

    > 例として、このアップグレード後に `BackfillIssuesCorrectWorkItemTypeId: issues` マイグレーションが表示される可能性が高いです。このマイグレーションを **Queued** または **Finished** タブで見つけてみてください。

1. バージョンを検証するには、左サイドバーで **Help** を選択します。表示されるメニューに、バージョン `18.8.11` が表示されているはずです。

## ラボガイド完了 {#lab-guide-complete}

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-experience/professional-services-engineering/education-services/ilt-labs/sysadminhandsonk8s)を参照できます。

## ご提案はありますか？ {#suggestions}

このラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
