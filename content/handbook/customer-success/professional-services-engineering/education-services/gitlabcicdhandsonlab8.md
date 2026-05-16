---
title: "GitLab CI/CD - ハンズオンラボ: GitLab コンテナレジストリの操作"
description: "このハンズオンガイドでは、GitLab で Docker コンテナをビルドして保存する方法を解説します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandsonlab8/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T04:07:10Z"
translator: claude
stale: false
lastmod: "2024-11-01T18:42:22+00:00"
---

> 所要時間の目安: 15〜20分

## 目標

Docker は、開発者がコンテナアプリケーションをビルドするために広く使用されるプラットフォームです。CI/CD のビルドプロセスの一部として Docker コンテナを生成することができます。このラボでは、プロジェクトの `Dockerfile` を定義し、`.gitlab-ci.yml` ファイルに統合する方法を学びます。

### タスク A: `Dockerfile` の追加

1. 前のラボで作成した **CICD Demo** プロジェクトを開きます。

1. **+ > This directory > New file** を選択して、**CICD Demo** プロジェクトに新しいファイルを追加します。

1. **Filename** フィールドに `Dockerfile` と入力します。

1. 新しいファイルの本文に以下の内容を貼り付けます。

    ```dockerfile
    FROM golang:1.11-alpine as builder
    WORKDIR /usr/build
    ADD main.go .
    RUN go build -o app .

    FROM alpine:latest

    WORKDIR /usr/src

    COPY --from=builder /usr/build/app .
    EXPOSE 8080

    CMD ["/usr/src/app"]
    ```

1. **Commit message** フィールドに `Add Dockerfile` と入力し、**Target Branch** が `main` に設定されていることを確認して、**Commit changes** をクリックします。

### タスク B: `build image` ジョブの定義

1. 左のナビゲーションバーで **Code > Repository** をクリックします。

1. `.gitlab-ci.yml` ファイルを開き、**Edit > Edit single file** をクリックします。ファイルの末尾に以下の新しいジョブ定義を貼り付けます。

    ```yml
    build image:
      stage: build
      image: docker:27
      services:
        - docker:27-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
      script:
        - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
        - docker build -t $IMAGE .
        - docker push $IMAGE
    ```

    > Docker ベースのイメージをビルドするための代替方法があります。ランナーが Docker in Docker をサポートしていない場合は、以下の設定に示すように `kaniko` などのツールの使用を検討してください:

    ```yml
    build image:
      stage: build
      image:
        name: gcr.io/kaniko-project/executor:v1.14.0-debug
        entrypoint: [""]
      script:
        - /kaniko/executor
          --context "${CI_PROJECT_DIR}"
          --dockerfile "${CI_PROJECT_DIR}/Dockerfile"
          --destination "${CI_REGISTRY_IMAGE}:${CI_COMMIT_TAG}"
    ```

1. **Commit message** フィールドに `Add "build image" job definition` と入力し、**Target Branch** が `main` に設定されていることを確認して、**Commit changes** をクリックします。

### タスク C: パイプラインの実行確認

1. **Build > Pipelines** に移動します。最新のパイプライン実行をクリックします。

1. **build image** ジョブのウィジェットをクリックして進行状況を確認します。ジョブが完了するまで待ちます。

1. 左のナビゲーションペインで **Deploy > Container Registry** をクリックし、`build image` ジョブによってアップロードされたコンテナを確認します。

## ラボガイドの完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson)も参照できます。

## ご意見・ご提案?

*GitLab CI/CD のハンズオンガイド* に変更を加えたい場合は、マージリクエストで変更内容を提出してください！
