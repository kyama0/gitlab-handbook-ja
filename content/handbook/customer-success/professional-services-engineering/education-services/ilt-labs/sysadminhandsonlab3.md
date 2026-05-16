---
title: "GitLab システム管理者 - ハンズオンラボ: Omnibus のバックアップとリストア"
description: "このハンズオンガイドでは、GitLab Omnibus インスタンスのバックアップとリストア方法を紹介します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandsonlab3/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-23T12:38:59+01:00"
---

> 推定所要時間: 30 分

## 目的

このラボの目的は、仮想マシン上の GitLab インスタンスをバックアップし、以前の状態にリストアする方法を示すことです。GitLab インスタンスのバックアップ/リストアの詳細については、[こちら](https://docs.gitlab.com/ee/administration/backup_restore/)をクリックしてください。

## タスク A. バックアップ設定の構成

1. GitLab インスタンスサーバーで SSH セッションを開きます。

1. gitlab.rb のバックアップ設定の場所を検索します。

    ```bash
    sudo grep -n backup_path /etc/gitlab/gitlab.rb
    ```

1. `gitlab_rails['backup_path']` 設定の行番号をメモします。

1. GitLab バックアップを保存する新しいディレクトリを作成します。

    ```bash
    sudo mkdir /tmp/backups
    ```

1. gitlab.rb を編集してバックアップパスを変更します。まず、テキストエディターでファイルを開きます。例: `sudo nano /etc/gitlab/gitlab.rb`

1. `# gitlab_rails['backup_path'] = "/var/opt/gitlab/backups"` の行を検索します。`nano` を使用している場合は、`control-w` を押して検索できます。

1. `gitlab_rails['backup_path']` 行の先頭にある `#` 文字を削除します。これにより、行がコメント解除され、有効になります。

1. パスを `"/tmp/backups"` に置き換えます。結果は次の設定行になります。

    ```bash
    gitlab_rails['backup_path'] = "/tmp/backups"
    ```

1. 結果のファイルを保存します。`nano` を使用している場合は、`control-x` を押すことで保存できます。

1. 変更を適用するために再設定します。

    ```bash
    sudo gitlab-ctl reconfigure
    ```

## タスク B. GitLab インスタンスのバックアップ

1. GitLab インスタンスのフルバックアップを取得します。

    ```bash
    sudo gitlab-backup create
    ```

    > 本番環境では、`/etc/gitlab/gitlab.rb` と `/etc/gitlab/gitlab-secrets.json` のコピーも取得する必要があります。

1. バックアップが完了したら、バックアップの場所に移動してバックアップファイルを確認します。

    ```bash
    sudo ls /tmp/backups
    sudo tar -tvf /tmp/backups/<backup_filename>
    ```

## タスク C. GitLab 設定の変更

1. Web ブラウザーで GitLab インスタンスにサインインし、サイドバーを開きます。左下隅の **Admin area** をクリックします。

2. 左サイドバーで **Settings** > **General** を選択します。

3. **Account and limit** を展開し、最大添付ファイルサイズを 500 MiB に、デフォルトのプロジェクト制限を 10000 に変更します。

4. **Save changes** をクリックして変更を保存します。

5. ページを更新して変更が適用されたことを確認します。

## タスク D. バックアップからのリストア

1. GitLab インスタンスサーバーの SSH セッションに戻ります。

1. バックアップファイルをリストアの実行に GitLab が必要とする場所に移動します。

    ```bash
    sudo cp /tmp/backups/<backup_filename> /var/opt/gitlab/backups/
    ```

1. リストアを実行するためのバックアップファイルに正しいパーミッションがあることを確認します。

    ```bash
    sudo chown git:git /var/opt/gitlab/backups/<backup_filename>
    ```

1. リストアの前に puma と sidekiq サービスを停止します。

    ```bash
    sudo gitlab-ctl stop puma
    sudo gitlab-ctl stop sidekiq
    sudo gitlab-ctl status
    ```

1. バックアップからリストアします。*<backup_timestamp>* を `-ee` を含むバックアップファイル名の一部に置き換えます。例えば、バックアップファイル名が `1663207732_2022_09_15_15.3.3-ee` で始まる場合、コマンドは `sudo gitlab-backup restore BACKUP=1663207732_2022_09_15_15.3.3-ee` になります。

    ```bash
    sudo gitlab-backup restore BACKUP=<backup_timestamp>
    ```

1. リストア操作中にプロンプトが表示されたら、`yes` と入力します。エラーメッセージのように見える出力が表示される場合があります。これは正常です。

1. `authorized_keys` ファイルの再構築を求めるプロンプトが表示されたら、`yes` と入力します。

1. sidekiq と puma サービスを再起動します。

    ```bash
    sudo gitlab-ctl start sidekiq
    sudo gitlab-ctl start puma
    sudo gitlab-ctl status
    ```

1. Web ブラウザーで GitLab を更新する前に最大 5 分待ちます。変更した最大添付ファイルサイズとデフォルトのプロジェクト制限が（バックアップ取得時の）デフォルト値に戻っていることを確認します。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
