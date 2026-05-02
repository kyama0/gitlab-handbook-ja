---
title: "GitLab Security Essentials - ハンズオンラボ: コンテナスキャン"
description: "このハンズオンガイドは、プロジェクトでコンテナスキャンを使用するプロセスを案内します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentialslab4/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T05:12:10Z"
translator: claude
stale: false
---

> 推定所要時間: 15 〜 20 分

## 目標

多くのプロジェクトは、コンテナイメージに脆弱性が含まれている可能性のあるコンテナを使用しています。

このラボでは、コンテナの脆弱性をスキャンする方法を学びます。

## タスク A. Docker イメージのビルド

> このセクションでは、Docker イメージをビルドするジョブを定義します。CI/CD パイプラインジョブで Docker イメージをビルドするには、Docker executor を使用するように設定された GitLab Runner が必要です。

1. **Security Labs** プロジェクトに移動します。

1. **コード > リポジトリ** に移動し、`.gitlab-ci.yml` を編集します。

1. `.gitlab-ci.yml` のステージリストの先頭（既存の `test` ステージの**前**）に以下を追加して、`build` ステージを定義します。既存の `test` ステージと同じインデントになるようにしてください:

    ```yml
    stages:
      - build
      - test
    ```

1. 新しいジョブに名前を付けて **build** ステージに割り当てるため、`.gitlab-ci.yml` の末尾に以下のコードを貼り付けます:

    ```yml
    build-and-push-docker-image:
      stage: build
    ```

1. ジョブは Docker ツールを含む Docker イメージ上で実行する必要があります。このアプローチは「Docker in Docker」または「dind」と呼ばれることがあります。このタスクに適したテスト済みのバージョンのイメージを指定する必要があります。前のステップで追加した `build-and-push-docker-image` ジョブに以下を追加します:

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
    ```

1. ジョブには Docker in Docker ワークフローを有効にする 2 番目の Docker イメージも必要です。`services` キーワードを使用して 2 番目のイメージを指定します。ジョブ定義に以下を追加します:

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
    ```

1. 作成する Docker イメージの完全な名前とバージョンを保持する変数を定義すると便利です。GitLab が提供する定義済み変数（一般的に `CI_` で始まる）から名前とバージョンを組み立てることができます。ジョブ定義に以下を追加します:

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
    ```

1. Docker に TLS を使用しないよう指示する変数を設定すれば、セキュリティ証明書の設定を心配する必要がありません。`DOCKER_TLS_CERTDIR` 変数を追加します。

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

1. `Dockerfile` のレシピを使用して Docker イメージをビルドするよう Docker に指示します。`script:` と `docker-build` の行を追加します。

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

## タスク B. Docker イメージをプロジェクトコンテナレジストリにプッシュ

> ジョブがイメージをプッシュできるよう、プロジェクトのコンテナレジストリにログインする必要があります。定義済み変数に保存されているユーザー名、パスワード、レジストリ URL を使用してログインできます。

1. `script` セクションの末尾に `docker login` の行を追加します。

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

1. 単一の Docker コマンドでイメージをプッシュできます。`script` セクションの末尾に `docker push` の行を追加します。

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

1. 完成したジョブ定義は以下のようになります。`.gitlab-ci.yml` のジョブ定義に必要な修正を加えてください。

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

1. 適切なコミットメッセージ（`Adding a Docker build job`）で `main` ブランチに変更をコミットします。

1. **ビルド > パイプライン** に移動して新しいパイプラインの進行状況を確認します。パイプラインをクリックしてビルドジョブの CI 出力を確認します。

1. パイプラインの実行が完了したら、左ナビゲーションペインで **デプロイ > コンテナレジストリ** をクリックします。ジョブが新しい Docker イメージを作成し、プロジェクトのコンテナレジストリにプッシュしたことを確認します。

## タスク C. コンテナスキャンの有効化

> アプリケーションの Docker イメージには既知の脆弱性が含まれている可能性があります。これらの脆弱性が本番環境に到達するのを防ぐために、コンテナスキャンで検出できます。Docker イメージがビルドされてプッシュされているので、コンテナスキャンを有効化できます。

1. `.gitlab-ci.yml` の既存の `include:` セクションにコンテナスキャンコンポーネントを追加します:

    ```yml
    - component: ilt.gitlabtraining.cloud/components/container-scanning/container-scanning@~latest
    ```

    > これはコンポーネントリストのどこにでも追加できます。

1. コンテナスキャナーがスキャンするコンテナを認識できるようにするため、`container_scanning` ジョブをオーバーライドする必要があります。以下のコードをコピーして `container_scanning` ジョブの `CS_IMAGE` 変数をオーバーライドします:

    ```yml
    container_scanning:
      variables:
        CS_IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
    ```

1. 適切なコミットメッセージで変更をコミットします。

1. **ビルド > パイプライン** に移動して新しいパイプラインの進行状況を確認します。

1. `container_scanning` ジョブを開いて CI 出力を確認します。パイプラインの実行が完了するまで待ちます。

## タスク D. 結果の確認

1. **Secure > 脆弱性レポート** に移動します。

1. **レポートタイプ** フィルターを選択し、オプションから **コンテナスキャン** を選択します。

1. 表示されている脆弱性は、作成した Docker コンテナ内で検出された脆弱性です。個々の脆弱性をクリックして詳細を確認します。

## ラボガイド完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentials)を参照できます。

## ご提案・改善点

ラボに変更を加えたい場合は、マージリクエストで変更内容を送信してください。
