---
title: "Distribution チームのインフラとメンテナンス - dev.gitlab.org"
description: "手動パッケージのアップグレード/ダウングレードや GitLab 設定変更を含む、dev.gitlab.org のメンテナンスガイドライン。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/dev-gitlab-org/"
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
translated_at: "2026-06-12T00:00:00Z"
translator: claude
stale: false
lastmod: 2026-06-11T09:01:46-06:00
---

## 共通リンク

* [Distribution チームハンドブック](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)
* [Distribution チームのインフラとメンテナンス](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/)

## dev.gitlab.org

これは GitLab CE を実行している内部 GitLab インスタンスです。このサーバー上の omnibus-gitlab
パッケージは、稼働を維持するために必要な設定を加えた標準パッケージです。このノードでは通常の
omnibus-gitlab コマンドを使用できます。

### 自動化されたタスク

1. ナイトリービルド: 毎日 UTC 1:30 に、dev.gitlab.org でナイトリービルドがトリガーされます。
   cron トリガーの時刻は現在、
   [dev.gitlab.org のスケジュールパイプラインページ](https://dev.gitlab.org/gitlab/omnibus-gitlab/pipeline_schedules)で定義されています。

1. デプロイ: 毎日 UTC 7:20 に、ナイトリー CE パッケージが
   dev.gitlab.org へ自動的にデプロイされます。インストールプロセス中のエラーは
   [Sentry](https://new-sentry.gitlab.net/organizations/gitlab/discover/homepage/?environment=dev&field=title&field=event.type&field=project&field=user.display&field=timestamp&name=All+Events&query=&sort=-timestamp&statsPeriod=24h&yAxis=count%28%29) に記録されます。gitlabcom や gitaly のようなプロジェクトで dev environment フィルターを使用してください。
   Slack 通知は #dev-gitlab に表示されます。cron タスクは現在、
   [role ファイル](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/dev-gitlab-org.json#L304-319)で定義されています。

### メンテナンスタスク

このサーバー上の GitLab インスタンスが稼働していることを保証するのは、Distribution チームの
責任です。

**要件**:

* ノードへのアクセス

* `/etc/gitlab/gitlab.rb` への恒久的な変更がタスクで必要かどうかに応じて、
  [Chef リポジトリ](https://gitlab.com/gitlab-com/gl-infra/chef-repo/)へのアクセス。
  このリポジトリへのアクセス権がない場合は、
  [Infrastructure の Issue トラッカーで Issue](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=)
  を作成し、`access request` ラベルを付けてください。

#### パッケージの手動アップグレード/ダウングレード

最新のデプロイに問題がある場合、インストールを以前のナイトリーバージョンに戻し、
修正の準備が整うまでデプロイをロックする必要があるかもしれません。これは、インスタンスを
利用する他のユーザーのために dev.gitlab.org の安定性を確保するために行います。

1. まず、team-tasks の [issue-tracker] に、インストール済みバージョンをダウングレードする旨と
   関連 Issue へのリンクを記載した Issue を作成します。
   その Issue を自分自身にアサインしてください。

1. 次に、パッケージをダウングレードする前に `#announcements` slack チャンネルで
   アナウンスします:

    ```text
    I will be manually downgrading package on dev.gitlab.org to <version> as latest nightly is not working as expected. <link to issue>
    ```

1. アップグレード中にデータが変更されないように、sidekiq と unicorn を停止します。

    ```bash
    sudo gitlab-ctl stop sidekiq
    sudo gitlab-ctl stop unicorn
    ```

1. 以前の正常に動作していたパッケージのバージョンを見つけ、そのバージョンに
   ダウングレードします:

    ```bash
    sudo apt-get install gitlab-ce=<version to be installed>
    ```

    例えば、バージョンが `10.4.0+rnightly.75436.44501791-0` の場合、次を
    実行します:

    ```bash
    sudo apt-get install gitlab-ce=10.4.0+rnightly.75436.44501791-0
    ```

    これにより reconfigure が自動的に実行され、必要な変更が適用されます。

1. reconfigure が完了したら、すべてのサービスが起動して稼働していることを確認します。

    ```bash
    sudo gitlab-ctl status
    ```

1. `https://dev.gitlab.org/help` にアクセスして、正しいバージョンがデプロイされている
   ことを確認します。

1. 自動アップグレードを防ぐためにパッケージの hold を作成します:

    ```bash
    sudo apt-mark hold gitlab-ce
    ```

    そして hold が設定されていることを確認します。

    ```bash
    sudo apt-mark showhold
    ```

1. `#announcements` チャンネルに戻り、ダウングレードが完了したことを
   メッセージで残します:

    ```text
    Downgrade completed. The package has also been put on hold to prevent automatic upgrades. <link to issue>
    ```

**問題が解決したら、パッケージの hold を解除し、最新バージョンへアップグレードします。**

1. まず、`#announcements` チャンネルでアナウンスします

    ```text
    I will be removing the package hold and manually upgrading package on dev.gitlab.org to the latest nightly. <link to issue>
    ```

1. 次に、パッケージの hold を解除します:

    ```bash
    sudo apt-mark unhold gitlab-ce
    ```

1. アップグレードを続行します:

    ```bash
    sudo apt-get update
    sudo apt-get install gitlab-ce
    ```

1. アップグレードが完了したら、`https://dev.gitlab.org/help` にアクセスして
   最新バージョンがインストールされていることを確認します。

1. 最後に、`#announcements` チャンネルにメモを残します

    ```console
    Upgrade completed. dev.gitlab.org now runs <version>.
    ```

#### GitLab 設定の変更

何らかの理由で `/etc/gitlab/gitlab.rb` に変更を適用する必要がある場合、その
変更は
[dev-gitlab-org role](https://dev.gitlab.org/cookbooks/chef-repo/blob/fa6131d9d06299940a72c51cf60ea62c54fe3461/job-description-library/dev-gitlab-org.json)に導入する必要があります。

このリポジトリへのアクセス権がないが、ホットパッチや設定テストを行う必要がある場合は、
次の手順を実行できます:

1. このノード上で chef-client を停止します:

    ```console
    sudo service chef-client stop
    ```

1. インスタンスを再び稼働させるために必要な変更を行います。それに gitlab.rb ファイルの
   変更が必要な場合は、手動で変更し reconfigure を実行します。

1. `gitlab.rb` 設定の変更を Chef サーバーにコミットするための支援を得るため、Production
   チームに連絡してください。

1. これが適用された後、ノード上で chef-client を起動します: `sudo service
   chef-client start`

1. 行った変更が必ず Issue に記録されていることを確認してください！ パッケージに修正が
   反映されたら、このノード上の変更を元に戻すのはあなたの責任です！
