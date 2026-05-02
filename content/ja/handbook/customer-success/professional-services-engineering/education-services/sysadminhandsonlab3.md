---
title: "GitLab システム管理 - ハンズオンラボ: GitLab Runner を構成する"
description: "このハンズオンガイドでは、仮想マシンに GitLab Runner をインストールおよび管理する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/sysadminhandsonlab3/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

> 完了までの目安時間: 40 分

## 目的

このラボの目的は、サーバー上で GitLab Runner を作成し、登録する方法を示すことです。詳細については、
[GitLab Runner ドキュメント](https://docs.gitlab.com/runner/) を参照してください。

### タスク A. gitlab-runner パッケージをインストールする

1. 割り当てられた IP アドレスと SSH キーファイルを使って、**GitLab Runner** サーバー（Omnibus サーバーで*はない*ほう）にログインします。

    ```bash
    ssh -i <YOUR_ASSIGNED_SSH_KEYFILE> root@<YOUR_RUNNER_SERVER_PUBLIC_IP>
    ```

1. システムが認証警告を表示した場合は、`yes` と入力して <kbd>Enter</kbd> を押します。

1. GitLab Runner のインストールリポジトリを追加します。

    ```bash
    curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
    ```

1. GitLab Runner エージェントをインストールします。

    ```bash
    sudo apt-get install -y gitlab-runner
    ```

1. インストールが完了したら、サービスが稼働していることを確認します。

    ```bash
    sudo gitlab-runner status
    ```

### タスク B. ランナーを GitLab に登録する

1. Web ブラウザーで GitLab インスタンスにサインインし、左サイドバーから **Admin Area** を選択します。

1. 左サイドバーの **CI/CD** で **Runners** を選択します。

1. **New instance runner** を選択します。

1. **Tags** セクションで **Run untagged jobs** を選択します。

    > これにより、ランナーは特定のタグが付いたジョブだけでなく、あらゆるジョブを取得できるようになります。

1. その他のオプションはデフォルトのままにして、**Create runner** を選択します。

1. ランナーの **Operating system** として **Linux** が選択されていることを確認します。

1. **Step 1** のコマンドをコピーして、コマンドの前に `sudo` を追加します。コマンドプロンプトで実行します。

1. コマンドはまず GitLab インスタンスの URL を尋ねてきます。この URL が GitLab インスタンスと一致することを確認したら、<kbd>Enter</kbd> を押します。

1. ランナーに任意の適切な名前を入力します。

1. エグゼキューターを尋ねられたら、`shell` と入力します。

    > shell エグゼキューターは、インスタンスのシェルを使ってジョブを実行します。エグゼキューターについて詳しくは、[ドキュメント](https://docs.gitlab.com/runner/executors/) を確認してください。

1. 登録後にランナーを確認するため、`sudo gitlab-runner list` を実行します。

1. Web ブラウザーに戻って **View runners** を選択します。登録したランナーが一覧に表示され、オンラインとして表示されていることを確認します。

### タスク C. CI/CD パイプラインでランナーをテストする

1. 左サイドバーの上部にある GitLab アイコンを選択して、GitLab インスタンスのホームページに戻ります。

1. **Create a project** を選択します。

1. **Create blank project** を選択します。

1. プロジェクト名として `CICD Test` と入力します。

1. `Project URL` で、ネームスペースのドロップダウンから `root` を選択します。

1. その他の設定はそのままにして、**Create project** をクリックします。

1. プロジェクトのランディングページの中央、プロジェクトタイトルの下にある **+** ドロップダウンを選択します。**New file** を選択します。

1. 新しいファイルのページで、ファイル名として `.gitlab-ci.yml` を入力します。

1. 以下のコードをファイルの本文に貼り付けます。

    ```yml
    stages:
      - build
      - test

    build_app:
      stage: build
      script:
        - echo "The build stage requires at least one job"

    test_app:
      stage: test
      script:
        - echo "The test stage requires at least one job"
    ```

1. **Commit changes** を選択します。

1. 左サイドバーで **Build > Pipelines** を選択します。

1. パイプラインのステータス（**passed** と表示されているはず）を選択します。

1. **build_app** および **test_app** ジョブのそれぞれをクリックして、ジョブのログとランナー上で実行されたコマンドを確認します。

## ラボガイド完了

このラボ演習は完了しました。本コースのその他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/sysadminhandson)を確認できます。

### ご提案はありますか？

GitLab システム管理ハンズオンガイドへの変更を提案したい場合は、マージリクエストでお寄せください。
