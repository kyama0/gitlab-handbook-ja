---
title: "Distribution チームインフラとメンテナンス - dev.gitlab.org"
description: "手動パッケージのアップグレード/ダウングレードや GitLab 設定変更を含む dev.gitlab.org のメンテナンスガイドライン。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/dev-gitlab-org/"
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
translated_at: "2026-06-12T13:26:18Z"
translator: claude
stale: false
model: claude-opus-4-7
lastmod: "2026-06-11T09:01:46-06:00"
---

## 共通リンク {#common-links}

* [Distribution チームハンドブック](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)
* [Distribution チームインフラとメンテナンス](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/)

## dev.gitlab.org {#dev-gitlab-org}

これは GitLab CE を実行している内部 GitLab インスタンスです。このサーバー上の omnibus-gitlab パッケージは、稼働状態を維持するために必要な設定を施したストックパッケージです。このノードでは通常の omnibus-gitlab コマンドを使用できます。

### 自動化されたタスク {#automated-tasks}

1. ナイトリービルド: 毎日 1:30 UTC に、dev.gitlab.org でナイトリービルドがトリガーされます。cron トリガーの時刻は、現在 [dev.gitlab.org のスケジュールされたパイプラインページ](https://dev.gitlab.org/gitlab/omnibus-gitlab/pipeline_schedules)で定義されています。

1. デプロイ: 毎日 7:20 UTC に、ナイトリー CE パッケージが dev.gitlab.org に自動的にデプロイされます。インストールプロセスでのエラーは [Sentry](https://new-sentry.gitlab.net/organizations/gitlab/discover/homepage/?environment=dev&field=title&field=event.type&field=project&field=user.display&field=timestamp&name=All+Events&query=&sort=-timestamp&statsPeriod=24h&yAxis=count%28%29) にログとして記録されます。gitlabcom や gitaly のようなプロジェクトで dev 環境フィルターを使用してください。Slack 通知は #dev-gitlab に表示されます。cron タスクは、現在 [role ファイル](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/dev-gitlab-org.json#L304-319)で定義されています。

### メンテナンスタスク {#maintenance-tasks}

このサーバー上の GitLab インスタンスが稼働していることを確認するのは、Distribution チームの責任です。

**要件**:

* ノードへのアクセス

* タスクが `/etc/gitlab/gitlab.rb` への恒久的な変更を必要とするかどうかに応じて、[Chef リポジトリ](https://gitlab.com/gitlab-com/gl-infra/chef-repo/)へのアクセス。このリポジトリへのアクセス権がない場合は、必ず [Infrastructure の Issue トラッカーに Issue](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=)を作成し、`access request` ラベルを付けてください。

#### 手動でのパッケージのアップグレード/ダウングレード {#manually-upgradingdowngrading-packages}

最新のデプロイに問題があった場合、インストールを以前のナイトリーバージョンに戻し、修正の準備が整うまでデプロイをロックする必要があるかもしれません。これは、このインスタンスを使用する他のユーザーのために dev.gitlab.org の安定性を確保するために行われます。

1. まず、team-tasks の [issue-tracker] に、インストール済みバージョンをダウングレードすることを詳述し、関連する Issue へのリンクを追加した Issue を作成します。その Issue を自分自身に割り当てます。

1. 次に、パッケージをダウングレードする前に `#announcements` Slack チャンネルでアナウンスします。

    ```text
    I will be manually downgrading package on dev.gitlab.org to <version> as latest nightly is not working as expected. <link to issue>
    ```

1. アップグレード中にデータが変更されないように、sidekiq と unicorn を停止します。

    ```bash
    sudo gitlab-ctl stop sidekiq
    sudo gitlab-ctl stop unicorn
    ```

1. パッケージの以前の動作するバージョンを見つけて、このバージョンにダウングレードします。

    ```bash
    sudo apt-get install gitlab-ce=<version to be installed>
    ```

    たとえば、バージョンが `10.4.0+rnightly.75436.44501791-0` の場合は、次を実行します。

    ```bash
    sudo apt-get install gitlab-ce=10.4.0+rnightly.75436.44501791-0
    ```

    これにより、reconfigure が自動的に実行され、必要な変更が適用されます。

1. reconfigure が完了したら、すべてのサービスが起動して稼働していることを確認します。

    ```bash
    sudo gitlab-ctl status
    ```

1. `https://dev.gitlab.org/help` にアクセスして、正しいバージョンがデプロイされていることを確認します。

1. 自動アップグレードを防ぐためにパッケージの hold を作成します。

    ```bash
    sudo apt-mark hold gitlab-ce
    ```

    そして、hold が適用されていることを確認します。

    ```bash
    sudo apt-mark showhold
    ```

1. `#announcements` チャンネルに戻り、ダウングレードが完了したことをメッセージで残します。

    ```text
    Downgrade completed. The package has also been put on hold to prevent automatic upgrades. <link to issue>
    ```

**Issue が解決したら、パッケージの hold を解除し、最新バージョンにアップグレードします。**

1. まず、`#announcements` チャンネルでこれをアナウンスします。

    ```text
    I will be removing the package hold and manually upgrading package on dev.gitlab.org to the latest nightly. <link to issue>
    ```

1. 次に、パッケージの hold を解除します。

    ```bash
    sudo apt-mark unhold gitlab-ce
    ```

1. アップグレードを続行します。

    ```bash
    sudo apt-get update
    sudo apt-get install gitlab-ce
    ```

1. アップグレードが完了したら、`https://dev.gitlab.org/help` にアクセスして、最新バージョンがインストールされていることを確認します。

1. 最後に、`#announcements` チャンネルにメモを残します。

    ```console
    Upgrade completed. dev.gitlab.org now runs <version>.
    ```

#### GitLab 設定の変更 {#changing-gitlab-configuration}

何らかの理由で `/etc/gitlab/gitlab.rb` に変更を適用する必要がある場合、この変更は [dev-gitlab-org role](https://dev.gitlab.org/cookbooks/chef-repo/blob/fa6131d9d06299940a72c51cf60ea62c54fe3461/job-description-library/dev-gitlab-org.json)で導入する必要があります。

このリポジトリへのアクセス権はないが、ホットパッチや設定テストを行う必要がある場合は、次の手順を実行できます。

1. このノードで chef-client を停止します。

    ```console
    sudo service chef-client stop
    ```

1. インスタンスを再び稼働させるために必要な変更を行います。それに gitlab.rb ファイルの変更が必要な場合は、手動で変更して reconfigure を実行します。

1. `gitlab.rb` 設定の変更を Chef サーバーにコミットするのを手伝ってもらうために、Production チームに連絡します。

1. これが適用されたら、ノードで chef-client を起動します: `sudo service chef-client start`

1. 行った変更が必ず Issue に記録されていることを確認してください！ パッケージに修正が適用されたら、このノードでの変更を元に戻すのはあなたの責任です！
