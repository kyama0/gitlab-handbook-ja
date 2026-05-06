---
title: "GitLab Security Essentials - ハンズオンラボ: コンテナスキャンの有効化と設定"
description: "このハンズオンガイドでは、GitLab プロジェクトでコンテナスキャンを有効化して使用する方法を解説します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/secessentialshandson3/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T05:28:22Z"
translator: claude
stale: false
---

> 推定所要時間: 15 分

## 目標

多くのプロジェクトは、コンテナイメージに脆弱性を含む可能性のあるコンテナの使用に依存しています。

このラボでは、コンテナ内の脆弱性をスキャンする方法を学びます。

## 前提条件

1. ラボ 1 で作成した **Security Labs** プロジェクトをブラウザで開きます。

    > タブを閉じたかリンクを失った場合は、ブラウザのタブを開いて URL に https://gitlab.com/gitlab-learn-labs と入力すると、プロジェクトが履歴に表示されるはずです。

1. このラボおよびその後のすべてのラボを開始する前に、前のラボで有効化したスキャナーを無効化してパイプラインの実行時間を短縮してください。これはラボ 2 で完了しているはずです。

## タスク A. Dockerfile を追加する

> `Dockerfile` は、Docker がアプリケーションを Docker イメージにアセンブルする方法を伝える「レシピ」です。単一ファイルの Python アプリケーションを Python 3.4 Docker イメージにインストールし、そのスタック全体を新しい Docker イメージにパッケージ化する `Dockerfile` を作成します。

1. **Code > Repository** に移動します。

1. リポジトリファイルリストの上部で **(+) > This directory > New file** をクリックします。

1. **File name** フィールドに `Dockerfile` と入力します。業界標準に合わせて最初の文字を大文字にすることが重要です。

1. `Dockerfile` はアプリケーションをインストールする Linux イメージを指定する必要があります。このラボでは、コンテナスキャナーが見つけるためのセキュリティ脆弱性を持つ古いバージョンの Python を使用します。`Dockerfile` に以下をペーストします。

    ```dockerfile
    FROM python:3.4-alpine
    ```

1. Dockerfile はアプリケーションを上記で指定した Linux イメージに追加する必要があります。`Dockerfile` の末尾に以下をペーストします。

    ```dockerfile
    ADD main.py .
    ```

1. 完成した `Dockerfile` は次のようになります。必要に応じて修正してください。

    ```dockerfile
    FROM python:3.4-alpine
    ADD main.py .
    ```

1. コミットメッセージを追加し、ターゲットブランチを `main` に設定して **Commit changes** をクリックします。

## タスク B. Docker イメージのビルド

> このセクションでは、Docker イメージをビルドするジョブを定義します。CI/CD パイプラインジョブで Docker イメージをビルドするには、Docker エグゼキューターを使用するよう設定された GitLab Runner を使用する必要があります。

1. **Code > Repository** に移動して `.gitlab-ci.yml` を編集します。

1. `.gitlab-ci.yml` の stages リストの先頭（`-test` ステージの前）に以下をペーストして `build` ステージを定義します。既存の `- test` エントリと同じインデントにしてください。

    ```yml
    stages:
    - build
    - test
    ```

1. 新しいジョブに名前を付けて **build** ステージに割り当てるために、`.gitlab-ci.yml` の末尾に以下をペーストします。

    ```yml
    build-and-push-docker-image:
      stage: build
    ```

1. ジョブは Docker ツールを含む Docker イメージ上で実行する必要があります。このアプローチは「Docker in Docker」または「dind」と呼ばれることがあります。このタスクでテスト済みの動作が確認されているバージョンのイメージを指定する必要があります。前のステップで追加した `build-and-push-docker-image` ジョブの下に以下をペーストします。

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
    ```

1. ジョブには、Docker in Docker ワークフローを有効化する 2 つ目の Docker イメージも必要です。`services` キーワードを使用して 2 つ目のイメージを指定するために、ジョブ定義に以下をペーストします。

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
    ```

1. 作成する Docker イメージの完全な名前とバージョンを保持する変数を定義すると便利です。複数回参照する必要があるためです。GitLab が提供する定義済み変数（定義済み変数は通常 `CI_` で始まります）から名前とバージョンを組み立てることができます。ジョブ定義に以下をペーストします。

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
    ```

1. Docker に TLS を使用しないように指示する変数を設定すると、セキュリティ証明書の設定を気にする必要がなくなります。`DOCKER_TLS_CERTDIR` 変数を追加します。

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
        DOCKER_TLS_CERTDIR: ""
    ```

1. `Dockerfile` のレシピを使用して Docker イメージをビルドするように Docker に指示します。`script:` と `docker-build` 行を追加します。

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
        DOCKER_TLS_CERTDIR: ""
      script:
        - docker build --tag $IMAGE .
    ```

## タスク C. Docker イメージをプロジェクトコンテナレジストリにプッシュする

> ジョブはプロジェクトのコンテナレジストリにログインして、イメージをプッシュする必要があります。定義済み変数に保存されたユーザー名、パスワード、レジストリ URL を使用してログインできます。

1. `script` セクションの末尾に `docker login` 行を追加します。

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
        DOCKER_TLS_CERTDIR: ""
      script:
        - docker build --tag $IMAGE .
        - docker login --username $CI_REGISTRY_USER --password $CI_REGISTRY_PASSWORD $CI_REGISTRY
    ```

1. 単一の Docker コマンドでイメージをプッシュできます。`script` セクションの末尾に `docker push` 行を追加します。

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
        DOCKER_TLS_CERTDIR: ""
      script:
        - docker build --tag $IMAGE .
        - docker login --username $CI_REGISTRY_USER --password $CI_REGISTRY_PASSWORD $CI_REGISTRY
        - docker push $IMAGE
    ```

1. 完成したジョブ定義は次のようになります。`.gitlab-ci.yml` のジョブ定義に必要な修正を加えてください。

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
        DOCKER_TLS_CERTDIR: ""
      script:
        - docker build --tag $IMAGE .
        - docker login --username $CI_REGISTRY_USER --password $CI_REGISTRY_PASSWORD $CI_REGISTRY
        - docker push $IMAGE
    ```

1. 適切なコミットメッセージ（`Adding a docker file definition`）で変更を `main` ブランチにコミットします。

1. **Build > Pipelines** に移動して新しいパイプラインの進行状況を確認します。パイプラインをクリックしてビルドジョブの CI 出力を確認します。

1. パイプラインの実行が完了したら、左ナビゲーションペインに移動して **Deploy > Container Registry** をクリックします。ジョブが新しい Docker イメージを作成してプロジェクトのコンテナレジストリにプッシュしたことを確認します。

## タスク D. コンテナスキャンの有効化

> アプリケーションの Docker イメージには既知の脆弱性が含まれている場合があります。これらの脆弱性が本番環境に到達するのを防ぐために、コンテナスキャンで検出できます。Docker イメージのビルドとプッシュが行われるようになったので、コンテナスキャンを有効化できます。

1. `.gitlab-ci.yml` の既存の `include:` セクションにコンテナスキャンのテンプレートを追加します。

    ```yml
    include:
    - template: Security/SAST.gitlab-ci.yml
    - template: Security/Secret-Detection.gitlab-ci.yml
    - template: Security/Dependency-Scanning.gitlab-ci.yml
    - template: Security/Container-Scanning.gitlab-ci.yml
    ```

    > これはテンプレートのリストのどこにでも追加できます。

1. また、コンテナスキャンツールにスキャンするイメージを伝える必要があります。`secret_detection` ジョブの下に次のコードを追加します。

```yaml
container_scanning:
  variables:
    CS_IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
```

1. 適切なコミットメッセージで変更をコミットします。

1. **Build > Pipelines** に移動して新しいパイプラインの進行状況を確認します。

1. `container_scanning` ジョブを開いて CI 出力を確認します。パイプラインの実行が完了するまで待ちます。

## タスク E. 結果の表示

1. **Secure > Vulnerability Report** に移動します。

1. **Tool** ドロップダウンで **Container Scanning** をクリックします。

1. 表示された脆弱性は、作成した Docker コンテナ内で検出された脆弱性です。個々の脆弱性をクリックして詳細を確認します。

## タスク F. ラボのパイプラインのクリーンアップ

1. **Code > Repository** に移動します。

1. `.gitlab-ci.yml` ファイルを編集します。

1. 以下をコピー＆ペーストして `.gitlab-ci.yml` の内容をすべて上書きします。これにより、パイプラインを遅くする不要なスキャナーが実行されないようにします。`.gitlab-ci.yml` ファイルの書式を維持するために SAST ジョブは残します。

    ```yml
    stages:
    - test

    include:
    - template: Security/SAST.gitlab-ci.yml
    ```

1. コミットメッセージを `Lab 3 pipeline reset` に設定して、変更を `main` ブランチにコミットします。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/secessentialshandson)を参照できます。

## ご提案

*GitLab Security Essentials ハンズオンガイド*への変更を提案される場合は、マージリクエストで提出してください。
