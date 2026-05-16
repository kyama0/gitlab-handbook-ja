---
title: "GitLab CI/CD - ハンズオンラボ: 基本的な CI 設定を作成する"
description: "このハンズオンガイドでは、.gitlab-ci.yml ファイルの作成と実行方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandsonlab3/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:52:14Z"
translator: claude
stale: false
lastmod: "2024-05-11T00:54:28+00:00"
---

> 完了までの推定時間: 15〜20 分

## 目標

`.gitlab-ci.yml` ファイルでは、CI/CD プロセスのステージとジョブを定義できます。このラボでは、`.gitlab-ci.yml` ファイルの変更方法を学びます。

## タスク A. 基本的な `.gitlab-ci.yml` ファイルを定義する

1. 前のラボの **CICD Demo** プロジェクトを開きます。

1. 左側のナビゲーションペインで **Code > Repository** をクリックします。`.gitlab-ci.yml` ファイルをクリックして内容を表示します。**Edit > Edit single file** をクリックします。`.gitlab-ci.yml` 内のすべてのコードを以下のスニペットの内容に置き換えます:

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
    ```

    > パイプラインのロジックは以前のものとほぼ同じですが、ジョブ名と echo 文が若干変わります。

1. **Commit message** フィールドに `Add CI starter` と入力し、**Target Branch** を `main` に設定して **Commit changes** をクリックします。

1. ページを更新してパイプラインステータスアイコンを表示します。ページ右上のコミットの SHA の左にある **Pipeline: running** または **Pipeline: passed** アイコンにカーソルを合わせて、設定が有効であることとパイプラインが実行されていることを確認します。

1. パイプラインのステータスが **Pipeline: passed** アイコンに変わったら、それをクリックして CI 設定のパイプライングラフを確認します。

## ラボガイド完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson)を見ることができます。

## ご提案は？

*GitLab CI/CD のハンズオンガイド*に変更を加えたい場合は、マージリクエストを通じて変更を送信してください！
