---
title: "GitLab with Git Fundamentals - ハンズオンラボ: Static Application Security Testing (SAST)"
description: "このハンズオンガイドでは、コードのセキュリティ上の欠陥を追跡する SAST ジョブのセットアップ方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitbasicshandsonlab6/
upstream_sha: 7b4218e2684ab0e2d919cef32fcfba84065bf46b
lastmod: 2026-06-05T16:14:13+01:00
translated_at: "2026-06-06T12:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 30 分

## 目的 {#objectives}

このラボでは、CI/CD パイプラインのオプション機能である SAST を使って、コード内のセキュリティ脆弱性を特定します。GitLab の Vulnerability Report は、パイプライン実行ごとに見つかった古いまたは新しい脆弱性を表示します。詳しくは[ドキュメント](https://docs.gitlab.com/ee/user/application_security/sast/)で学べます。

## タスク A. `CI Test` プロジェクトで SAST を有効にする {#task-a-enable-sast-in-your-ci-test-project}

1. **CI Test** プロジェクトに移動します。

1. `.gitlab-ci.yml` ファイルをクリックし、**Edit > Edit single file** をクリックします。

1. `gitlab-ci.yml` ファイルの末尾に次の行をコピーします。

    ```yaml
    include:
      - template: Jobs/SAST.gitlab-ci.yml
    ```

    > `SAST` スキャンを `.gitlab-ci.yml` ファイルに統合する方法について詳しくは、[ドキュメント](https://docs.gitlab.com/ee/user/application_security/sast/#configure-sast-in-your-cicd-yaml)を参照してください。

1. 現在の `.gitlab-ci.yml` ファイルは次のようになるはずです。

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

    > **include** を使うと、CI/CD 設定に外部の YAML ファイルを含めることができます。読みやすさを高めるため、または複数の場所で同じ設定が重複するのを減らすために、1 つの長い `.gitlab-ci.yml` ファイルを複数のファイルに分割できます。include キーワードについて詳しくは[ドキュメント](https://docs.gitlab.com/ee/ci/yaml/#include)で読めます。

1. 適切な **Commit message** を入力します。

1. **Target Branch** を `main` に設定します。

1. **Commit changes** ボタンをクリックします。

## タスク B. `run.py` を追加し、SAST スキャンの結果を確認する {#task-b-add-runpy-and-review-sast-scanning-results}

このタスクでは、既知の脆弱性を含むファイルを追加し、SAST がそれを検出するか確認します。

1. パンくずリストのセクションでプロジェクト名をクリックして、**Project overview** ページに戻ります。

1. プロジェクトのランディングページの上部、ブランチのドロップダウンの右側で、**(+) > This directory > New file** をクリックします。

1. **File name** フィールドに `run.py` と入力します。

1. 以下の内容をファイルにコピーします。

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

1. 左側のナビゲーションペインで、**Build > Pipelines** をクリックします。

1. パイプラインのテーブルの行の上部で、**running**（まだ実行中の場合）または **passed**（パイプラインが完了している場合）のステータスラベルをクリックします。

    > SAST スキャンには少し時間がかかることがあるので、待っている間にコーヒーでも淹れてください。

1. パイプラインが完了したら、左側のナビゲーションペインで **Secure > Vulnerability report** をクリックします。

1. いずれかの脆弱性をクリックし、`run.py` で SAST スキャンが検出した潜在的なセキュリティ問題について読みます。

1. 提起された問題を修正するために（`subprocess.run` コマンドを削除するなど）コードを自由に編集し、変更をコミットしてください。脆弱性レポートは、その問題がまだ存在すると示しますか。

## ラボガイド完了 {#lab-guide-complete}

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson)を見ることができます。
