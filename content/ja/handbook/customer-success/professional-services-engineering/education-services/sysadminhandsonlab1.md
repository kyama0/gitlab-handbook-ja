---
title: "GitLab システム管理 - ハンズオンラボ: GitLab のインストール"
description: "このハンズオンガイドでは、仮想マシンに GitLab をインストールする手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/sysadminhandsonlab1/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

> 完了までの目安時間: 30 分

## 目的

このラボでは、コマンドラインを使用して仮想マシン上に GitLab とその必要な依存関係をインストールします。
始める前に、次の準備を完了してください。

- 別のブラウザータブで [GitLab Linux インストール](https://about.gitlab.com/install/#almalinux-8) ページを開いて、参照できるようにしておきます。
- インストラクターから提供されたラボセットアップ手順を開き、Omnibus サーバーに割り当てられたパブリック IPv4 アドレスを確認します。SSH を使用してトレーニング環境にアクセスします。

### タスク A. トレーニング環境にアクセスする

> トレーニング環境は AWS 上の 2 つの EC2 インスタンスで構成されています。1 つ目のインスタンスは GitLab をデプロイするために、2 つ目のインスタンスは GitLab インスタンス用のランナーをデプロイするために使用します。このセクションのラボでは、GitLab インストール用に指定されたインスタンスを使用してください。

1. ローカルコンピューター上でターミナルウィンドウを開きます。

1. サーバー用の SSH キーファイルを含むディレクトリへ移動します。

1. SSH 接続では、秘密鍵ファイルが他のユーザーからアクセスできない状態になっている必要があります。Linux と MacOS では、次のコマンドで設定できます。

    ```bash
    chmod 400 <keyfile_name>
    ```

    Windows では、次のコマンドで設定できます。

    ```bash
    icacls .\keyname.pem /inheritance:r
    ```

1. 割り当てられた IP アドレスと SSH キーファイルを使用して、GitLab Omnibus をインストールするサーバーにログインします。

    ```bash
    ssh -i <keyfile_name> student-user@<vm_ip_address>
    ```

    > `WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!` のようなエラーが発生した場合は、SSH の known hosts をリセットする必要があるかもしれません。これを行うには、`ssh-keygen -R <vm_ip_address>` コマンドを実行してください。

1. <kbd>Enter</kbd> を押します。

1. システムが認証警告を表示した場合は、`yes` と入力して <kbd>Enter</kbd> を押します。

1. yes と入力すると、サーバーに接続されます。

### タスク B. 必要な依存関係をインストールする

1. 依存関係のインストールに進む前に、`sudo apt-get update` を実行してリポジトリが更新されていることを確認します。

1. GitLab が通知メールを送信できるように、以下のコマンドで Postfix をインストールします。

    ```bash
    sudo apt-get install -y curl policycoreutils perl postfix
    ```

1. このコマンドの実行中に Postfix の設定ダイアログが表示された場合は、まず右矢印キーで `Ok` を選択し、**Enter** を押します。次のページで上下の矢印キーを使って `No configuration` を選択し、<kbd>Enter</kbd> を押します。

    > 本番システムでは、この設定を使用することで postfix によるメール設定を構成できます。これにより、GitLab からメールを送信できるようになります。

1. `systemctl enable` および `systemctl start` コマンドで Postfix を起動および有効化します。

    ```bash
    sudo systemctl enable postfix
    sudo systemctl start postfix
    ```

### タスク C. GitLab をインストールする

1. `curl` コマンドで GitLab のインストールリポジトリを追加します。

    ```bash
    curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
    ```

1. 以下のコマンドで GitLab パッケージをインストールします。完全修飾ドメイン名の代わりに、トレーニングシステムに割り当てられたパブリック IP アドレスを使用してください。<> 記号は含めないでください。

    ```bash
    sudo EXTERNAL_URL="http://<your_assigned_public_ip>" apt-get install -y gitlab-ee
    ```

    > このステップは完了までに数分かかる場合があります。
    > この例では、URL の前に `https://` を付けていません。このラボのセットでは `http` プロトコルを使用しています。本番環境に GitLab をインストールする場合は、`https` プロトコルを使用するため `https://` を使用することを推奨します。

### タスク D. ログインとパスワードのリセット

1. インストール時に、パスワードがランダムに生成され、`/etc/gitlab/initial_root_password` に 24 時間保存されます。生成されたパスワードを表示するには、以下のコマンドを使用します。

    ```bash
    sudo cat /etc/gitlab/initial_root_password
    ```

2. 出力に表示されたパスワードをクリップボードにコピーします。

3. Web ブラウザーで `http://<your_assigned_public_IP>/` にアクセスします。

4. ログインするには、ユーザー名に `root` と入力し、パスワードには先ほどコピーしたパスワードを入力します。

5. ログイン後、GitLab ランディングページの左上にある root ユーザーのアバターを選択し、**Edit Profile** を選択します。

6. 左側のナビゲーションペインで **Password** を選択します。

7. **Current password** テキストボックスに、初回ログインで使用した一時的な root パスワードを入力します。

8. 残りのフィールドに、自分で選んだ新しい恒久的なパスワードを入力します。

9. **Save password** をクリックして変更を保存します。ログアウトされるので、新しいパスワードで再度サインインする必要があります。

## ラボガイド完了

このラボ演習は完了しました。本コースのその他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/sysadminhandson)を確認できます。

### ご提案はありますか？

GitLab システム管理ハンズオンガイドへの変更を提案したい場合は、マージリクエストでお寄せください。
