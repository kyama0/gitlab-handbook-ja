---
title: "GitLab システム管理 - ハンズオンラボ: GitLab ログを管理する"
description: このハンズオンガイドでは、仮想マシン上の GitLab ログを管理する手順を説明します。
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/sysadminhandsonlab6/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-06-03T11:53:00+10:00"
---

> 完了までの目安時間: 30 分

## 目的

このラボの目的は、`gitlab-ctl` および `sed` コマンドを使って GitLab ログを管理する方法を案内することです。詳細については、
[GitLab ロギングのドキュメント](https://docs.gitlab.com/administration/logs/) を参照してください。

### タスク A. アクティブなログを表示する

`gitlab-ctl` コマンドを使うと、すべての GitLab ログファイルを tail したり、GitLab サービス別にフィルタリングしたりできます。

1. GitLab インスタンスのシェルセッションから、以下のコマンドを実行してすべてのアクティブな GitLab ログを表示します。

    ```bash
    sudo gitlab-ctl tail
    ```

    出力の中で、コマンドが各ログのフルファイルパスを表示することに気付くはずです。ほとんどの GitLab ログは `/var/log/gitlab` にあります。（注: `tail` コマンドを終了するには `CTRL-C` を入力できます。）

1. サービス別に GitLab ログを表示することもできます。以下のコマンドを実行して、NGINX ログ（つまり `/var/log/gitlab/nginx` 内のログファイル）のみを表示します。

    ```bash
    sudo gitlab-ctl tail nginx
    ```

    NGINX Web サーバー固有のログファイルの最新エントリーが表示されるはずです。

1. 最後に、個別のログファイルにドリルダウンできます。

    ```bash
    sudo gitlab-ctl tail nginx/gitlab_access.log
    ```

### タスク B. 最小ログレベルを設定する

管理者は、一部の GitLab サービスに対して最小ログレベルを設定できます。NGINX や Gitaly など一部のサービスのみが管理者による最小ログレベルの変更を許可しており、その場合でも一部のログファイルに限られます。Sidekiq や Redis など他のサービスの `log_level` は変更できません。

1. GitLab サービスの現在の最小ログレベルを確認します。

    ```bash
    sudo grep -n -E 'log_level|logging_level' /etc/gitlab/gitlab.rb
    ```

1. `nginx['error_log_level']` の行番号を控えておきます。

1. `nginx` の最小ログレベルを変更します。"1731" を、前のステップの `grep` 出力から得た適切な行番号に置き換えてください。

    ```bash
    sudo sed -i '1731s/\"error\"/\"warn\"/' /etc/gitlab/gitlab.rb
    sudo sed -i '1731s/# //' /etc/gitlab/gitlab.rb
    ```

1. 手順 1 の `grep` コマンドを再実行して、行が意図通り変更されたことを確認します。

1. 変更を適用するために再構成します。

    ```bash
    sudo gitlab-ctl reconfigure
    ```

### タスク C. ログ保持を管理する

GitLab は、**runit** サービスマネージャーが管理するログ（**runit** は **svlogd** と呼ばれる別のサービスロギングデーモンを使用）を除くすべてのログの保持を **logrotate** で管理しています。ログ保持は `/etc/gitlab/gitlab.rb` で設定できます。

1. デフォルトの logrotate 保持設定を確認します。

    ```bash
    sudo grep -n 'logrotate' /etc/gitlab/gitlab.rb
    ```

1. **オプション**: runit が管理するログのデフォルト保持設定を表示します。

    ```bash
    sudo grep -n 'svlogd' /etc/gitlab/gitlab.rb
    ```

1. logrotate（および svlogd）はログファイルを毎日ローテーションし、30 日分のログを保持しているようです。これはサービスログディレクトリの中身を見ることで確認できます。

    ```bash
    sudo ls /var/log/gitlab/puma
    ```

    過去数日間の Puma の stdout および stderr ログの gzip 圧縮アーカイブファイルがあることに注目してください。

1. logrotate の動作を変更して、ログファイルを週単位でローテーションするようにします。前と同様に、grep の出力から得た行番号を使って `sed` の編集行を適宜修正してください。

    ```bash
    sudo sed -i '1234s/daily/weekly/g' /etc/gitlab/gitlab.rb
    sudo sed -i '1234s/# //' /etc/gitlab/gitlab.rb
    ```

1. logrotate の保持期間を 1 年分のログファイル保持に変更します。前と同様に、grep の出力から得た行番号を使って `sed` の編集行を適宜修正してください。

    ```bash
    sudo sed -i '1234s/30/52/g' /etc/gitlab/gitlab.rb
    sudo sed -i '1234s/# //' /etc/gitlab/gitlab.rb
    ```

1. 以下を再実行して、変更が `gitlab.rb` に正しく書き込まれたことを確認します。

    ```bash
    sudo grep -n 'logrotate' /etc/gitlab/gitlab.rb
    ```

1. 変更を適用するために再構成します。

    ```bash
    sudo gitlab-ctl reconfigure
    ```

### タスク D. ログのフォーマットを変更する

多くのログはデフォルトで JSON 形式です。管理者は使用するログ取り込みシステムや可読性に応じて、テキスト形式に設定したい場合があります。

1. Gitaly の現在のログ形式を確認します。

    ```bash
    sudo grep -n -F "gitaly['configuration']" -A20 /etc/gitlab/gitlab.rb
    ```

    > このコマンドは、まず grep で gitaly 構成の開始位置を見つけ、その後に続く 20 行を `-A20` フラグで表示します。これにより Gitaly 構成ファイルのフル設定が表示されます。

1. 出力の中で、以下の行を見つけて、それぞれの行番号を控えておきます。

    ```bash
    # gitaly['configuration'] = {
    ...
    #   logging: {
    #     dir: "/var/log/gitlab/gitaly",
    #     level: 'warn',
    #     format: 'json',
    #     sentry_dsn: 'https://<key>:<secret>@sentry.io/<project>',
    #     sentry_environment: 'production',
    # },
    ```

1. `sudo gitlab-ctl tail gitaly/current` を実行して、Gitaly ロギングの現在の JSON 出力を確認します。

1. Gitaly のログ形式を JSON からテキスト形式に変更します。行番号が前述の正しい行と一致していることを確認してください。

    ```bash
    sudo sed -i '2588s/json/text/' /etc/gitlab/gitlab.rb
    sudo sed -i '2574s/# //' /etc/gitlab/gitlab.rb
    sudo sed -i '2588s/# //' /etc/gitlab/gitlab.rb
    sudo sed -i '2585s/# //' /etc/gitlab/gitlab.rb
    sudo sed -i '2591s/# //' /etc/gitlab/gitlab.rb
    sudo sed -i '2591s/,/ }/' /etc/gitlab/gitlab.rb
    ```

    > これらの sed コマンドでは、まず JSON 形式をテキストに置き換えています。次に、format と Gitaly 構成ブロックの前のコメントを削除して、それらを有効化しています。

1. `grep` コマンドを再実行して構成を確認します: `sudo grep -n -F "gitaly['configuration']" -A20 /etc/gitlab/gitlab.rb`。最終結果は以下のようになります。

```bash
gitaly['configuration'] = {
...
   logging: {
##     dir: "/var/log/gitlab/gitaly",
##     level: 'warn',
      format: 'text'
##     sentry_dsn: 'https://<key>:<secret>@sentry.io/<project>',
##     sentry_environment: 'production',
}}
```

1. 変更を適用するために再構成します。

```bash
sudo gitlab-ctl reconfigure
```

1. 更新された形式を確認します。

```bash
sudo gitlab-ctl tail gitaly/current
```

ログ出力が JSON 形式ではなくテキスト形式になっているのが確認できるはずです。

## ラボガイド完了

このラボ演習は完了しました。本コースのその他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/sysadminhandson)を確認できます。

### ご提案はありますか？

GitLab システム管理基礎ハンズオンガイドへの変更を提案したい場合は、マージリクエストでお寄せください。
