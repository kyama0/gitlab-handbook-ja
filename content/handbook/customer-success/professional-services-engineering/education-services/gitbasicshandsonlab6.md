---
title: "GitLab with Git Fundamentals - ハンズオンラボ: Static Application Security Testing (SAST)"
description: "このハンズオンガイドでは、コードのセキュリティ上の欠陥を追跡する SAST ジョブのセットアップ方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitbasicshandsonlab6/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:52:14Z"
translator: claude
stale: false
lastmod: "2024-08-13T17:18:50+00:00"
---

> 完了までの推定時間: 30 分

## 目標

このラボでは、CI/CD パイプラインのオプション機能である SAST を使用して、コードのセキュリティ上の脆弱性を特定します。GitLab の脆弱性レポートは、パイプラインの実行ごとに検出された古い脆弱性と新しい脆弱性を表示します。詳細については[ドキュメント](https://docs.gitlab.com/ee/user/application_security/sast/)をご覧ください。

## タスク A. `CI Test` プロジェクトで SAST を有効にする

1. **CI Test** プロジェクトに移動します。

1. `.gitlab-ci.yml` ファイルをクリックし、**Edit > Edit single file** をクリックします。

1. `gitlab-ci.yml` ファイルの末尾に以下の行をコピーします:

    ```yaml
    include:
      - template: Jobs/SAST.gitlab-ci.yml
    ```

    > SAST スキャンを `.gitlab-ci.yml` ファイルに統合する方法の詳細については[ドキュメント](https://docs.gitlab.com/ee/user/application_security/sast/#configure-sast-in-your-cicd-yaml)をご覧ください。

1. 現在の `.gitlab-ci.yml` ファイルは次のようになります:

    ```yaml
    stages:
      - build
      - test

    build1:
      stage: build
      script:
        - echo "Do your build here"

    test1:
      stage: test
      script:
        - echo "Do a test here"
        - echo "For example run a test suite"

    include:
      - template: Jobs/SAST.gitlab-ci.yml
    ```

    > **include** を使用すると、CI/CD 設定に外部 YAML ファイルを含めることができます。1 つの長い `.gitlab-ci.yml` ファイルを複数のファイルに分割して可読性を向上させたり、複数の場所で同じ設定の重複を減らしたりすることができます。include キーワードの詳細については[ドキュメント](https://docs.gitlab.com/ee/ci/yaml/#include)をご覧ください。

1. 適切な **Commit message** を入力します。

1. **Target Branch** を `main` に設定します。

1. **Commit changes** ボタンをクリックします。

## タスク B. `run.py` を追加して SAST スキャン結果を確認する

このタスクでは、既知の脆弱性を含むファイルを追加し、SAST がそれを検出するかどうかを確認します。

1. ブレッドクラムセクションでプロジェクト名をクリックして、**Project overview** ページに戻ります。

1. プロジェクトランディングページの上部、ブランチドロップダウンの右側にある **(+) > This directory > New file** をクリックします。

1. **File name** フィールドに `run.py` と入力します。

1. 以下の内容をファイルにコピーします:

    ```python
    import subprocess

    in = input("Enter your server ip: ")
    subprocess.run(["ping", in])

    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. 適切な **Commit message** を追加します。

1. **Target Branch** を `main` に設定します。

1. **Commit changes** ボタンをクリックします。

1. 左側のナビゲーションペインで **Build > Pipelines** をクリックします。

1. パイプラインのテーブルの行の上部にある **running**（まだ実行中の場合）または **passed**（パイプラインが完了した場合）のステータスラベルをクリックします。

    > SAST スキャンには少し時間がかかる場合があります。コーヒーブレイクしながらお待ちください。

1. パイプラインが完了したら、左側のナビゲーションペインで **Secure > Vulnerability report** をクリックします。

1. いずれかの脆弱性をクリックし、`run.py` で SAST スキャンが検出した潜在的なセキュリティ問題を読んでください。

1. 問題を修正するためにコードを自由に編集し（`subprocess.run` コマンドを削除するなど）、変更をコミットしてください。脆弱性レポートでは、その問題が引き続き存在するとして報告されますか?

## ラボガイド完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson)を見ることができます。

## ご提案は？

ラボへの変更を提案したい場合は、マージリクエストを通じて送信してください。
