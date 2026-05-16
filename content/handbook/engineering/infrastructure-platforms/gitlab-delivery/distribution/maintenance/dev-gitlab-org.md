---
title: "Distribution チームインフラとメンテナンス - dev.gitlab.org"
description: "手動パッケージのアップグレード/ダウングレードや GitLab 設定変更を含む dev.gitlab.org のメンテナンスガイドライン。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/dev-gitlab-org/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:11:38Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:15:15-08:00"
---

## 共通リンク

* [Distribution チームハンドブック](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)
* [Distribution チームインフラとメンテナンス](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/)

## dev.gitlab.org

これは GitLab CE を実行している内部 GitLab インスタンスです。このサーバーの omnibus-gitlab パッケージは、動作を維持するために必要な設定が施された標準パッケージです。このノードでは通常の omnibus-gitlab コマンドを使用できます。

### 自動タスク

1. ナイトリービルド: 毎日 UTC 1:30 に、dev.gitlab.org でナイトリービルドがトリガーされます。cron トリガー時刻は現在 [dev.gitlab.org のスケジュールされたパイプラインページ](https://dev.gitlab.org/gitlab/omnibus-gitlab/pipeline_schedules) で定義されています。

1. デプロイ: 毎日 UTC 7:20 に、ナイトリー CE パッケージが dev.gitlab.org に自動的にデプロイされます。インストールプロセスでエラーが発生した場合は [Sentry](https://sentry.gitlab.net/gitlab/devgitlaborg/) に記録されます。Slack 通知は #dev-gitlab に表示されます。cron タスクは現在 [ロールファイル](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/dev-gitlab-org.json#L304-319) で定義されています。

### メンテナンスタスク

このサーバーの GitLab インスタンスを運用可能な状態に維持することは Distribution チームの責任です。

**要件**:

* ノードへのアクセス権

* タスクが `/etc/gitlab/gitlab.rb` への永続的な変更を必要とするかどうかによって、[Chef リポジトリ](https://gitlab.com/gitlab-com/gl-infra/chef-repo/)へのアクセス権。このリポジトリへのアクセス権がない場合は、[インフラ Issue トラッカーに Issue を作成](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=) して `access request` ラベルを付けてください。

#### パッケージの手動アップグレード/ダウングレード

最新デプロイに問題がある場合、修正が準備できるまでインストールを以前のナイトリーバージョンに戻し、デプロイをロックする必要があるかもしれません。これは dev.gitlab.org を利用する他のユーザーのために安定性を確保するために行います。

1. 最初に、ダウングレードするインストールバージョンと関連 Issue へのリンクを詳述した Issue を team-tasks [issue-tracker] に作成します。Issue を自分自身にアサインします。

1. 次に、パッケージをダウングレードする前に `#announcements` Slack チャンネルでアナウンスします:

    ```text
    I will be manually downgrading package on dev.gitlab.org to <version> as latest nightly is not working as expected. <link to issue>
    ```

1. アップグレード中にデータが変更されないよう、sidekiq と unicorn を停止します。

    ```bash
    sudo gitlab-ctl stop sidekiq
    sudo gitlab-ctl stop unicorn
    ```

1. 以前の動作バージョンのパッケージを見つけてそのバージョンにダウングレードします:

    ```bash
    sudo apt-get install gitlab-ce=<version to be installed>
    ```

    例えば、バージョンが `10.4.0+rnightly.75436.44501791-0` の場合、以下を実行します:

    ```bash
    sudo apt-get install gitlab-ce=10.4.0+rnightly.75436.44501791-0
    ```

    これにより reconfigure が自動的に実行され、必要な変更が適用されます。

1. reconfigure が完了したら、すべてのサービスが稼働していることを確認します。

    ```bash
    sudo gitlab-ctl status
    ```

1. `https://dev.gitlab.org/help` にアクセスして、正しいバージョンがデプロイされていることを確認します。

1. 自動アップグレードを防ぐためにパッケージをホールドします:

    ```bash
    sudo apt-mark hold gitlab-ce
    ```

    ホールドが設定されていることを確認します。

    ```bash
    sudo apt-mark showhold
    ```

1. `#announcements` チャンネルに戻り、ダウングレードが完了したことをメッセージで伝えます:

    ```text
    Downgrade completed. The package has also been put on hold to prevent automatic upgrades. <link to issue>
    ```

**Issue が解決したら、パッケージのホールドを解除して最新バージョンにアップグレードしてください。**

1. まず `#announcements` チャンネルでアナウンスします

    ```text
    I will be removing the package hold and manually upgrading package on dev.gitlab.org to the latest nightly. <link to issue>
    ```

1. 次に、パッケージのホールドを解除します:

    ```bash
    sudo apt-mark unhold gitlab-ce
    ```

1. アップグレードを続けます:

    ```bash
    sudo apt-get update
    sudo apt-get install gitlab-ce
    ```

1. アップグレードが完了したら、`https://dev.gitlab.org/help` にアクセスして最新バージョンがインストールされていることを確認します。

1. 最後に、`#announcements` チャンネルにメモを残します

    ```console
    Upgrade completed. dev.gitlab.org now runs <version>.
    ```

#### GitLab 設定の変更

何らかの理由で `/etc/gitlab/gitlab.rb` に変更を適用する必要がある場合、その変更は [dev-gitlab-org ロール](https://dev.gitlab.org/cookbooks/chef-repo/blob/fa6131d9d06299940a72c51cf60ea62c54fe3461/job-description-library/dev-gitlab-org.json) で導入する必要があります。

このリポジトリへのアクセス権がなく、ホットパッチや設定テストを行う必要がある場合は、以下の手順を実行できます:

1. このノードで chef-client を停止します:

    ```console
    sudo service chef-client stop
    ```

1. インスタンスを再び動作させるために必要な変更を行います。gitlab.rb ファイルへの変更が必要な場合は、手動で変更して reconfigure を実行します。

1. `gitlab.rb` の設定変更を Chef サーバーにコミットするために、Production チームに連絡してサポートを求めます。

1. これが適用されたら、ノードで chef-client を起動します: `sudo service chef-client start`

1. 行ったすべての変更が Issue に記録されていることを確認してください！パッケージに修正が適用されたら、このノードへの変更を元に戻すことはあなたの責任です！
