---
title: SentinelOne EDR セットアップガイド
upstream_path: /handbook/security/corporate/systems/sentinelone/setup/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-05T13:09:58-05:00"
---

## macOS

> **対応不要:** SentinelOne は Jamf MDM によって自動的にインストールされるため、インストール作業を行う必要はありません。

## Linux

### 前提条件

ファイル整合性の監視と侵入検知に Advanced Intrusion Detection Environment (AIDE) を使用している場合、AIDE に除外設定を作成する必要があります。AIDE と SentinelOne エージェントが同時に実行されていると、AIDE はデータベースを正しく更新できなくなります。AIDE は SentinelOne ディレクトリをスキャンしようとしますが、スキャンできないためです。

SentinelOne の除外を作成するには、`/etc/aide.conf` を編集して末尾に `!/opt/sentinelone/mount` を追加し、SentinelOne エージェントのマウントディレクトリを無視させます。

```shell
echo '!/opt/sentinelone/mount' | sudo tee -a /etc/aide.conf
```

### インストール

> 以下の手順は **Linux** ラップトップでのみ必要です。SentinelOne は macOS では Jamf MDM により既に自動でインストールされています。

1. 承認された Linux ディストリビューション (Ubuntu LTS) を使用していることを確認します。詳細は [承認済みオペレーティングシステム](https://internal.gitlab.com/handbook/security/corporate/operating-systems/) ページを参照してください。

1. 設定ファイルとインストーラ (DEB/RPM) を [ダウンロード](https://gitlab.com/gitlab-com/it/security/sentinelone-installers) します。

1. 以下の例では、これらを次の場所に置き、パッケージ名を `sentinelagent` にリネームしたと仮定します。

   > 設定ファイル: `~/.config/sentinelone/config.cfg`
   > DEB パッケージ: `~/Downloads/sentinelagent.deb`
   > RPM パッケージ: `~/Downloads/sentinelagent.rpm`

1. ラップトップのシリアル番号を取得します。

    ```shell
    sudo dmidecode -s system-serial-number
    ```

1. `config.cfg` を編集し、`S1_AGENT_CUSTOMER_ID` を更新します。

    - `tanuki` を、GitLab のメールアドレスのユーザー名部分 (`@` 記号より前の部分、または [RFC2822 におけるローカルパート](https://www.rfc-editor.org/rfc/rfc2822)) に置き換えます。
    - `ABCD1234` をラップトップのシリアル番号に置き換えます。
    - 編集された変数が GitLab メールとシリアル番号をハイフンで区切る形式で正しくフォーマットされていることを確認します。例: `S1_AGENT_CUSTOMER_ID=jdoe@gitlab.com-ABCD1234`。

1. パッケージをインストールします (ディストリビューションによってコマンドは異なる場合があります)。

    ```shell
    # Fedora 37+ and RPM distributions
    export S1_AGENT_INSTALL_CONFIG_PATH=~/.config/sentinelone/config.cfg
    sudo -E rpm -i --nodigest ~/Downloads/sentinelagent.rpm
    ```

    ```shell
    # Ubuntu 22.04+ and Debian/Ubuntu distributions
    export S1_AGENT_INSTALL_CONFIG_PATH=~/.config/sentinelone/config.cfg
    sudo -E apt install ~/Downloads/sentinelagent.deb
    ```

1. ターミナル出力でエージェントが実行されていることを確認します。

    ```plaintext
    Setting registration token...
    Registration token successfully set
    Setting management device type...
    Device type successfully set
    Setting customer ID...
    Customer ID successfully set
    Starting agent...
    Agent is running
    ```

1. systemd サービスが実行されていることを確認します。

    ```shell
    systemctl status sentinelone
    ```

    ```plaintext
    ● sentinelone.service - Monitor SentinelOne Agent
        Loaded: loaded (/lib/systemd/system/sentinelone.service; enabled; vendor preset: enabled)
        Active: active (running) since Fri 2023-02-10 09:37:35 CET; 4min 5s ago
        Process: 298024 ExecStart=/opt/sentinelone/bin/sentinelctl control run (code=exited, status=0/SUCCESS)
    Main PID: 298039 (s1-agent)
        Status: "Starting agent..."
        Tasks: 50
        Memory: 594.6M (limit: 7.9E)
            CPU: 1min 19.288s
        CGroup: /system.slice/sentinelone.service
                ├─298034 s1-orchestrator "" "" "" "" "" "" "" ""
                ├─298035 s1-network "" "" "" "" "" "" "" "" "" ""
                ├─298037 s1-scanner "" "" "" "" "" "" "" "" "" ""
                ├─298039 s1-agent "" "" "" "" "" "" "" "" "" "" "
                ├─298041 s1-firewall "" "" "" "" "" "" "" "" "" "
                ├─298043 s1-fanotify "" "" "" "" "" "" "" "" "" "
                └─298045 s1-perf "" "" "" "" "" "" "" "" "" "" ""
    ```

1. 前のステップの出力が表示されれば、すべての準備が整いました！

    > うまく動かない場合は、[トラブルシューティング](/handbook/security/corporate/systems/sentinelone/troubleshooting) ハンドブックページの [Linux インストールエラー](/handbook/security/corporate/systems/sentinelone/troubleshooting#linux-installation-error) 手順を参照してください。
