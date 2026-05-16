---
title: "GitLab CI/CD - ハンズオンラボ: セキュリティスキャン"
description: "このハンズオンガイドでは、SAST を使ってコードのセキュリティ脆弱性を発見・修正する方法を解説します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandsonlab9/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T04:07:10Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

> 所要時間の目安: 15〜20分

## 目標

SAST（Static Application Security Testing）は、CI/CD パイプラインのオプション機能で、既知の脆弱性についてソースコードを分析します。GitLab の脆弱性レポートは、各パイプライン実行で発見された新旧の脆弱性を表示します。このラボでは、CI/CD パイプラインで SAST スキャンを有効にするプロセスを学びます。SAST スキャナーの詳細については、[こちら](https://docs.gitlab.com/ee/user/application_security/sast/)をクリックしてください。

### タスク A. テストファイルの作成

1. 前のラボで作成した **CICD Demo** プロジェクトを開きます。

1. 左上付近にあるブランチドロップダウンの右側で、**(+) > This directory > New file** をクリックします。

1. ファイル名として `run.py` と入力します。

1. 以下のコードを本文にコピー＆ペーストします:

    ```python
    import subprocess

    ip = input("Enter your server ip: ")
    subprocess.run(["ping", ip])

    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. コミットメッセージに `Create Run.py as a test file` と入力します。

1. **Target branch** を `main` に設定します。

1. **Commit changes** をクリックします。

    > このファイルにはコマンドインジェクションの脆弱性があり、セキュリティ侵害につながる可能性があります。SAST スキャナーを使用してコード内の問題を検出します。

### タスク B. SAST スキャンの作成と実行

1. 前のラボで作成した **CICD Demo** プロジェクトを開きます。

1. `.gitlab-ci.yml` ファイルをクリックして内容を確認します。

1. **Edit > Edit single file** をクリックします。ファイルの末尾に以下のスニペットを貼り付けます。

    ```yml
    include:
      - template: Jobs/SAST.gitlab-ci.yml
    ```

1. **Commit message** フィールドに `Enable SAST` と入力し、**Target Branch** を `main` のままにして、**Commit changes** をクリックします。

1. この変更によって開始されたパイプラインに移動し、`semgrep-sast` ジョブをクリックして実行中であることを確認します。

    > `Build` ステージが完了するまで1〜2分かかる場合があります。

1. SAST スキャンの結果を確認するには、左側のナビゲーションペインで **Secure > Vulnerability Report** をクリックします。**Tool** ドロップダウンリストで **SAST** を選択します。脆弱性をクリックして詳細を確認します。

### タスク C. 主要な問題の修正

1. サイドバーで **Code > Repository** に移動します。

1. `run.py` ファイルをクリックします。

1. `run.py` ファイルで、青い **Edit** ドロップダウンをクリックして **Edit single file** を選択します。

1. スキャンにより、1行目と4行目に脆弱性が含まれていることが示されました。

    ```python
    # main.py Line 1
    import subprocess
    ```

    ```python
    # main.py Line 4
    subprocess.run(["ping", ip])
    ```

    > 問題は、これらの行がシステムコマンドの実行にユーザー入力を使用していることです。この状況では、攻撃者が意図しないコマンドをアプリケーションに実行させる入力を巧みに作成できます。これを解決するには、コマンドを削除するか、コマンドからユーザー入力を取り除く方法があります。

1. コードから2行を削除します。ファイルは以下のようになるはずです。

    ```python
    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. コミットフィールドに `Fix changes as suggested by SAST scan` と入力し、**Target Branch** を `main` のままにして、**Commit changes** をクリックします。

    > 変更を更新するには、SAST スキャンを再度実行する必要があります。

1. パイプラインの実行が完了したら、左側のナビゲーションペインで **Secure > Vulnerability Report** をクリックします。**Tool** ドロップダウンリストで **SAST** を選択します。セキュリティ問題が修正されているか確認します。

## ラボガイドの完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson)も参照できます。

## ご意見・ご提案?

*GitLab CI/CD のハンズオンガイド* に変更を加えたい場合は、マージリクエストで変更内容を提出してください！
