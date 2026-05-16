---
title: "Distributionチームのインフラとメンテナンスーーdev.gitlab.org"
description: "dev.gitlab.orgのメンテナンスガイドライン。手動によるパッケージのアップグレード/ダウングレード、GitLab設定変更を含みます。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/build/maintenance/dev-gitlab-org/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T23:09:27Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:15:15-08:00"
---

## 共通リンク

* [DistributionチームのHandbook](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)
* [DistributionチームのインフラとメンテナンスHandbook](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/)

## dev.gitlab.org

これはGitLab CEを実行している内部GitLabインスタンスです。このサーバー上のomnibus-gitlab
パッケージは、運用を維持するために必要な設定が施されたストックパッケージです。
このノードでは通常のomnibus-gitlabコマンドを使用できます。

### 自動化タスク

1. ナイトリービルド: 毎日UTC 1:30に、dev.gitlab.orgでナイトリービルドがトリガーされます。
   cronのトリガー時刻は現在[dev.gitlab.orgのスケジュールパイプラインページ](https://dev.gitlab.org/gitlab/omnibus-gitlab/pipeline_schedules)で定義されています。

1. デプロイ: 毎日UTC 7:20に、ナイトリーCEパッケージがdev.gitlab.orgに自動的にデプロイされます。
   インストールプロセス中のエラーは[Sentry](https://sentry.gitlab.net/gitlab/devgitlaborg/)に記録されます。
   Slack通知は#dev-gitlabに届きます。cronタスクは現在
   [roleファイル](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/dev-gitlab-org.json#L304-319)で定義されています。

### メンテナンスタスク

このサーバーのGitLabインスタンスを運用状態に保つのはDistributionチームの責任です。

**前提条件：**

* ノードへのアクセス権

* タスクが`/etc/gitlab/gitlab.rb`への永続的な変更を必要とする場合は、
  [Chef repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo/)へのアクセス権。
  このリポジトリへのアクセス権がない場合は、
  [InfrastructureのIssueトラッカーでIssueを作成](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=)し、
  `access request`ラベルを付けてください。

#### パッケージの手動アップグレード/ダウングレード

最新のデプロイに問題がある場合、修正が完了するまでインストールを前のナイトリーバージョンに
戻し、デプロイをロックする必要があります。これはdev.gitlab.orgを利用する他のユーザーのために
安定性を確保するために行われます。

1. まず、ダウングレードするインストールバージョンの詳細と関連するIssueへのリンクを記載した
   team-tasksの[issue-tracker]にIssueを作成してください。Issueを自分にアサインしてください。

1. 次に、パッケージをダウングレードする前に`#announcements` Slackチャンネルでアナウンスしてください：

    ```text
    I will be manually downgrading package on dev.gitlab.org to <version> as latest nightly is not working as expected. <link to issue>
    ```

1. アップグレード中にデータが変更されないよう、sidekiqとunicornを停止してください。

    ```bash
    sudo gitlab-ctl stop sidekiq
    sudo gitlab-ctl stop unicorn
    ```

1. 前の動作していたバージョンのパッケージを見つけてダウングレードしてください：

    ```bash
    sudo apt-get install gitlab-ce=<インストールするバージョン>
    ```

    例えば、バージョンが`10.4.0+rnightly.75436.44501791-0`の場合、以下を実行します：

    ```bash
    sudo apt-get install gitlab-ce=10.4.0+rnightly.75436.44501791-0
    ```

    これにより自動的にreconfigureが実行され、必要な変更が適用されます。

1. reconfigureが完了したら、すべてのサービスが稼働していることを確認してください。

    ```bash
    sudo gitlab-ctl status
    ```

1. `https://dev.gitlab.org/help`にアクセスして、正しいバージョンがデプロイされていることを確認してください。

1. 自動アップグレードを防ぐためにパッケージのホールドを作成してください：

    ```bash
    sudo apt-mark hold gitlab-ce
    ```

    そしてホールドが設定されていることを確認してください。

    ```bash
    sudo apt-mark showhold
    ```

1. `#announcements`チャンネルに戻り、ダウングレードが完了したことを知らせるメッセージを残してください：

    ```text
    Downgrade completed. The package has also been put on hold to prevent automatic upgrades. <link to issue>
    ```

**Issueが解決したら、パッケージのホールドを解除して最新バージョンにアップグレードします。**

1. まず`#announcements`チャンネルでアナウンスします。

    ```text
    I will be removing the package hold and manually upgrading package on dev.gitlab.org to the latest nightly. <link to issue>
    ```

1. 次に、パッケージのホールドを解除します：

    ```bash
    sudo apt-mark unhold gitlab-ce
    ```

1. アップグレードを続けます：

    ```bash
    sudo apt-get update
    sudo apt-get install gitlab-ce
    ```

1. アップグレードが完了したら、`https://dev.gitlab.org/help`にアクセスして最新バージョンが
   インストールされていることを確認します。

1. 最後に、`#announcements`チャンネルにノートを残します。

    ```console
    Upgrade completed. dev.gitlab.org now runs <version>.
    ```

#### GitLab設定の変更

何らかの理由で`/etc/gitlab/gitlab.rb`に変更を適用する必要がある場合、
その変更は[dev-gitlab-org role](https://dev.gitlab.org/cookbooks/chef-repo/blob/fa6131d9d06299940a72c51cf60ea62c54fe3461/job-description-library/dev-gitlab-org.json)に導入する必要があります。

このリポジトリへのアクセス権がないが、ホットパッチや設定テストを行う必要がある場合は、
以下の手順を実行できます：

1. このノードでchef-clientを停止します：

    ```console
    sudo service chef-client stop
    ```

1. インスタンスを再稼働させるために必要な変更を行います。gitlab.rbファイルの変更が必要な場合は、
   手動で変更してreconfigureを実行します。

1. Productionチームに連絡して、`gitlab.rb`の設定変更をChefサーバーにコミットするサポートを
   依頼します。

1. これが適用されたら、ノードでchef-clientを起動します：`sudo service chef-client start`

1. 行ったすべての変更をIssueにメモしてください！パッケージに修正が入ったら、
   このノードへの変更を元に戻す責任はあなたにあります。
