---
title: "GitLab システム管理 - ハンズオンラボ: GitLab のバックアップとリストア"
description: "このハンズオンガイドでは、仮想マシン上の GitLab インスタンスをバックアップし、GitLab インスタンスを以前の状態にリストアする手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/sysadminhandsonlab4/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

> 完了までの目安時間: 30 分

## 目的

このラボの目的は、仮想マシン上の GitLab インスタンスをバックアップし、インスタンスを以前の状態にリストアする方法を示すことです。
詳細については、[GitLab インスタンスのバックアップとリストア](https://docs.gitlab.com/administration/backup_restore/) に関するドキュメントを参照してください。

### タスク A. バックアップ設定を構成する

1. GitLab インスタンスサーバーで SSH セッションを開きます。

1. gitlab.rb 内のバックアップ設定の場所を検索します。

    ```bash
    sudo grep -n backup_path /etc/gitlab/gitlab.rb
    ```

1. `gitlab_rails['backup_path']` 設定の行番号を控えておきます。

1. GitLab バックアップを保存する新しいディレクトリを作成します。

    ```bash
    sudo mkdir /tmp/backups
    ```

1. gitlab.rb を編集してバックアップパスを変更します。"606" を手順 3 で控えた行番号に置き換えてください。

    ```bash
    sudo sed -i '606s@\/var\/opt\/gitlab\/backups@\/tmp\/backups@' /etc/gitlab/gitlab.rb
    sudo sed -i '606s/#//' /etc/gitlab/gitlab.rb
    ```

    > ここでは sed コマンドを使い、vim のようなテキストエディターを使わずに gitlab.rb ファイル内のテキストを置換しています。

1. 変更を適用するために再構成します。

    ```bash
    sudo gitlab-ctl reconfigure
    ```

### タスク B. GitLab インスタンスをバックアップする

1. GitLab インスタンスのフルバックアップを取得します。

    ```bash
    sudo gitlab-backup create
    ```

1. バックアップが完了したら、バックアップの保存先に移動してバックアップファイルを確認します。

    ```bash
    sudo ls /tmp/backups
    sudo tar -tvf /tmp/backups/<backup_filename>
    ```

### タスク C. GitLab 設定にいくつかの変更を加える

1. Web ブラウザーで GitLab インスタンスにサインインし、サイドバーを開きます。左下隅で **Admin area** をクリックします。

2. 左サイドバーで **Settings** > **General** を選択します。

3. **Account and limit** を展開し、最大添付ファイルサイズを 500 MiB に、デフォルトのプロジェクト上限を 10000 に変更します。

4. **Save changes** をクリックして変更を保存します。

5. ページを更新して、変更が適用されたことを確認します。

### タスク D. バックアップからリストアする

1. GitLab インスタンスサーバーの SSH セッションに戻ります。

1. リストアを実行するために、GitLab が必要とする場所にバックアップファイルを移動します。

    ```bash
    sudo cp /tmp/backups/<backup_filename> /var/opt/gitlab/backups/
    ```

1. リストアを実行するために、バックアップファイルが正しい権限を持つようにします。

    ```bash
    sudo chown git:git /var/opt/gitlab/backups/<backup_filename>
    ```

1. リストア前に puma および sidekiq サービスを停止します。

    ```bash
    sudo gitlab-ctl stop puma
    sudo gitlab-ctl stop sidekiq
    sudo gitlab-ctl status
    ```

1. バックアップからリストアします。*<backup_timestamp>* をバックアップファイル名の `-ee` までの部分（`-ee` を含む）に置き換えてください。たとえば、バックアップファイル名が `1663207732_2022_09_15_15.3.3-ee` で始まる場合、コマンドは `sudo gitlab-backup restore BACKUP=1663207732_2022_09_15_15.3.3-ee` になります。

    ```bash
    sudo gitlab-backup restore BACKUP=<backup_timestamp>
    ```

1. リストア操作中にプロンプトが表示されたら `yes` と入力します。エラーメッセージのような表示が見えるかもしれませんが、これは正常です。

1. `authorized_keys` ファイルを再構築するか尋ねられたら、`yes` と入力します。

1. sidekiq および puma サービスを再起動します。

    ```bash
    sudo gitlab-ctl start sidekiq
    sudo gitlab-ctl start puma
    sudo gitlab-ctl status
    ```

1. Web ブラウザーで GitLab を更新する前に最大 5 分待ちます。変更した最大添付ファイルサイズとデフォルトプロジェクト上限が、バックアップ取得時の値（つまりデフォルト）に戻っていることを確認します。

## ラボガイド完了

このラボ演習は完了しました。本コースのその他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/sysadminhandson)を確認できます。

### ご提案はありますか？

GitLab システム管理基礎ハンズオンガイドへの変更を提案したい場合は、マージリクエストでお寄せください。
