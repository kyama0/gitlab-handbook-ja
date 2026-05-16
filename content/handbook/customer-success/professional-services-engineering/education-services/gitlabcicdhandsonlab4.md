---
title: "GitLab CI/CD - ハンズオンラボ: パイプライン情報の表示"
description: "このハンズオンガイドでは、GitLab Runner 内で使用される変数について解説します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandsonlab4/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T04:07:10Z"
translator: claude
stale: false
lastmod: "2024-05-04T10:49:35+00:00"
---

> 所要時間の目安: 15〜20分

## 目標

パイプライン内でジョブが実行されると、そのジョブは環境の中で動作します。ジョブを正常に実行できる環境を確保するために、パイプラインはさまざまな環境変数を定義します。このラボでは、パイプラインの環境変数を表示する方法を学びます。

## タスク A. 環境変数を確認する

1. 前のラボで作成した **CICD Demo** プロジェクトを開きます。

1. `.gitlab-ci.yml` ファイルをクリックして内容を確認します。ファイルを編集するには、**Edit > Edit single file** をクリックします。

1. `.gitlab-ci.yml` の末尾に、以下のスニペットの内容を貼り付けます。ファイルの既存の内容とスニペットの内容の間に空白行を入れてください。

    ```yml
    environment echoes:
      stage: build
      script:
        - echo "Who am I running as..."
        - whoami
        - echo "Where am I..."
        - pwd
        - ls -al
        - echo "Here's what is available in our environment..."
        - env
    ```

1. 貼り付け後、`.gitlab-ci.yml` ファイルは以下のようになります:

    ```yml
    stages:
      - test
      - build

    test job:
      stage: test
      script:
        - echo "I am a unit test!"

    build job:
      stage: build
      script:
        - echo "I am a build image!"

    environment echoes:
      stage: build
      script:
        - echo "Who am I running as..."
        - whoami
        - echo "Where am I..."
        - pwd
        - ls -al
        - echo "Here's what is available in our environment..."
        - env
    ```

1. **Commit message** フィールドに `Display pipeline environment variables` と入力し、**Target Branch** を `main` に設定します。

1. **Commit changes** ボタンをクリックします。

1. 左側のナビゲーションペインで **Build > Pipelines** をクリックします。変更をコミットしたときに開始されたパイプラインは、テーブルの最初の行に表示されます。

1. パイプラインが完了したら、最初の行の左側にあるステータスアイコンをクリックして、パイプラインのジョブを確認します。**environment echoes** ジョブをクリックして、その出力内容を確認し、ランナー上の環境変数を確認します。

## ラボガイドの完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson)も参照できます。

## ご意見・ご提案?

*GitLab CI/CD のハンズオンガイド* に変更を加えたい場合は、マージリクエストで変更内容を提出してください！
