---
title: "GitLab システム管理者 - ハンズオンラボ: GitLab Omnibus のアップグレード"
description: "このハンズオンガイドでは、GitLab Omnibus インスタンスのアップグレード方法を紹介します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandsonlab4/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

> 推定所要時間: 30 分

## 目的

このラボの目的は、GitLab インスタンスのアップグレード方法を示すことです。

## タスク A. 現在の GitLab バージョンの確認

1. GitLab インスタンスに移動し、root ユーザーとしてサインインします。

1. 左サイドバーで **Help > Help** を選択します。

1. ページの上部に、完全な GitLab バージョンが表示されます。このラボでは、`17.4.1-ee` が表示されます。

## タスク B. 利用可能な GitLab バージョンの確認

GitLab Omnibus のアップデートは、パッケージマネージャーを通じて、GitLab バージョンに対応する Omnibus パッケージをインストールすることで完了します。パッケージで利用可能な GitLab のバージョンを確認するには、インスタンスに SSH 接続し、パッケージマネージャーのパッケージバージョンを確認します。

1. GitLab インスタンスに SSH 接続します。

1. `sudo apt-cache madison gitlab-ee` コマンドを実行します。

1. このラボでは、バージョン `17.5.0-ee.0` を見つけます。このバージョンをメモしておきます。このバージョンの GitLab にアップグレードします。

## タスク C. アップグレードの実行

ターゲットの GitLab バージョンが特定できたので、GitLab のアップグレードを実行できます。

1. まだ行っていない場合は、GitLab インスタンスに SSH 接続します。

1. `sudo gitlab-backup create` を使用してインスタンスのバックアップを取得します。

1. `https://gitlab-com.gitlab.io/support/toolbox/upgrade-path/` に移動します。

1. 現在の GitLab バージョン（`17.4.1`）とターゲットバージョン（`17.5.5`）を入力します。

1. **Edition** が **Enterprise** に設定され、Distro が **Ubuntu** に設定されていることを確認します。

1. `Go!` を選択します。

アップグレードパスでは、`17.5.0` をインストールするという 1 つのステップのみが必要であることがわかります。このプロセスを完了しましょう。

1. GitLab インスタンスで、`sudo apt-get install gitlab-ee=17.5.0-ee.0` コマンドを実行します。

1. インストールが完了するまで待ちます。完了したら、Web ブラウザーでインスタンスに移動します。

`HTTP 502: Waiting for GitLab to boot` というメッセージが表示されます。起動が完了して GitLab インスタンスに戻るまで、この画面で待機します。

## タスク D. アップグレードの検証

この時点で、インスタンスのログインページにリダイレクトされています。アップグレードを検証するには、以下の手順を完了します。

1. root ユーザーとして GitLab インスタンスに認証します。

1. 左サイドバーで **Admin** を選択します。

1. 左サイドバーで **Monitoring > Background migrations** を選択します。

1. **Queued** セクションのマイグレーションについてテーブルを確認します。これらのマイグレーションは、追加のアップグレードを完了する前に完了する必要があります。完了すると、**Finished** タブに表示されます。

    > 例として、このアップグレード後に `BackfillIssuesCorrectWorkItemTypeId: issues` マイグレーションが表示される場合があります。このマイグレーションを **Queued** または **Finished** タブで見つけてみてください。

1. バージョンを検証するには、左サイドバーで **Help** を選択します。表示されるメニューに、バージョン `17.5` が表示されているはずです。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
