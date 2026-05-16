---
title: SentinelOne EDR トラブルシューティングガイド
upstream_path: /handbook/security/corporate/systems/sentinelone/troubleshooting/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-06-26T03:27:50+00:00"
---

SentinelOne で問題が発生している場合は、以下のトラブルシューティング手順をお試しください。

## Linux インストールエラー {#linux-installation-error}

> Linux のインストール手順で出力が表示されません。どうすればよいでしょうか？

SentinelAgent が正しくインストールされませんでした。設定ファイルのエラーまたはコマンドの実行が成功しなかったことが原因である可能性が高いです。

1. サポートされている [Linux ディストリビューション](/handbook/security/corporate/systems/linux/)を使用していることを確認します。

1. パッケージをアンインストールします。

    ```shell
    # Fedora 37+ and RPM distributions
    sudo dnf remove sentinelagent
    ```

    ```shell
    # Ubuntu 22.04+ and Debian/Ubuntu distributions
    sudo apt purge sentinelagent
    ```

1. 再度パッケージをインストールします (ディストリビューションによってコマンドは異なる場合があります)。

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

1. 5 分間待ってから、接続性を確認します。

   ```shell
   sudo sentinelctl management status
   ```

1. `Connectivity: On` と有効な SentinelOne URL が表示されるはずです。この結果が得られない場合は、[`#sentinelone`](https://gitlab.slack.com/archives/C043PF9TU4X) チャンネルでサポートを依頼してください。

## CPU 使用率

> macOS で SentinelOne が使用している CPU 量はどのように計算しますか？

CPU 使用率の監視に Activity Monitor を使用している場合、これは単一 CPU スレッドに対する使用率として計算されることに注意してください。例えば M1 Max ラップトップは 10 スレッドを持つため、CPU 容量の合計は 1000% になります。システムで利用可能なスレッド数を確認するには、Terminal を開いて次を実行します。

```shell
sysctl -n hw.ncpu
```

SentinelOne は CPU パワー全体の 10% 未満を使用することが期待されます (例えば、M1 Max の Activity Monitor では 100% 未満として表示されます)。

## 使用状況メトリクス

> 高い CPU や RAM の問題によりサポート用のメトリクスを macOS で収集するにはどうすればよいですか？

1. Terminal または iTerm を開き、次のコマンドを実行します。

    ```shell
    sudo sentinelctl profiler start 30
    ```

2. 問題を引き起こしたシナリオを再現するか、数分間実行します。バックグラウンドで実行されます。出力は表示されません。

3. メトリクスログを収集します。

    ```shell
    sudo sentinelctl profiler stop
    ```

4. 画面右上にレポートが生成されていることを示す通知が表示されるはずです。

    ![S1 Report Generation](/images/security/corporate/systems/sentinelone/troubleshooting/S1ReportProgress.png)

5. しばらくするとレポートが完成し、SentinelOne からログファイルが完成したことを示す別の通知が表示されます。通知をクリックすると、SentinelAgent にデスクトップフォルダ内のファイルへのアクセスを許可するよう求められる場合があります。その後、ファイルがデスクトップフォルダにダウンロードされます。

    ![S1 Completion](/images/security/corporate/systems/sentinelone/troubleshooting/S1ProfileComplete.png)
    ![S1 Allow Desktop Folder](/images/security/corporate/systems/sentinelone/troubleshooting/S1AllowDesktop.png)

6. レポートが生成するデータを分析し、必要に応じて #sentinelone Slack チャンネルでファイルを共有してください。SentinelOne サポートに対するチケットを起票します。

## オフラインエージェント

SentinelOne エージェントがオフラインに見える最も一般的な理由は、ローカルファイアウォールが `*.sentinelone.net` への送信接続を禁止していることです。HTTPS (ポート 443) はそのドメインへの送信接続が許可されている必要があります。

macOS で最も一般的なローカルファイアウォールは Little Snitch、pfSense、または Lulu です。

Linux ユーザーは pfSense または iptables がアクセスをブロックしている可能性があります。

### macOS オフラインエージェント

1. Terminal または iTerm を開き、次のコマンドを実行します。

    ```shell
    sudo sentinelctl status
    ```

1. `Connected:` のステータスを確認します ("on" であるはずです)。

1. ローカルファイアウォールのブロックを解決すると、再接続されるはずです。

### Linux オフラインエージェント

1. Terminal を開き、次のコマンドを実行します。

    ```shell
    sudo sentinelctl management status
    ```

1. `Connectivity: On` と有効な SentinelOne URL が表示されるはずです。

1. この結果が得られない場合は、[`#sentinelone`](https://gitlab.slack.com/archives/C043PF9TU4X) チャンネルでサポートを依頼してください。
