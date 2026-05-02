---
title: "GitLab Security Essentials - ハンズオンラボ: DAST と API スキャン"
description: "このハンズオンガイドは、プロジェクトでコンテナスキャンを使用するプロセスを案内します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentialslab5/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T05:12:10Z"
translator: claude
stale: false
---

> 推定所要時間: 40 分

## 目標

多くのプロジェクトは、API コンポーネントを持つ Web アプリケーションとしてデプロイされています。これらのコンポーネントをスキャンするために、DAST と API セキュリティスキャナーを活用できます。

このラボでは、プロジェクトに両方のスキャナーを実装する方法を学びます。

## タスク A. DAST スキャンのセットアップ

DAST スキャンをテストするために、[OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) という脆弱な Web アプリケーションのインスタンスをセットアップします。このアプリケーションをスキャンすることで、期待できる DAST スキャン結果の全範囲を確認できます。

1. 新しいブランクプロジェクトを作成します。プロジェクト名を `DAST` とします。

1. DAST プロジェクトに `.gitlab-ci.yml` ファイルを作成します。

1. まず、設定に DAST ステージを追加します:

    ```yml
    stages:
      - dast
    ```

1. DAST は現在 CI/CD テンプレートを使用しています。ステージの下に以下を追加します。

    ```yml
    include:
      - template: DAST.gitlab-ci.yml
    ```

1. 専用のサーバーがないため、Juice Box アプリケーションを Docker サービスとして DAST に渡すことにします。これを行うために、テンプレートのインクルードの下にサービスを定義します:

    ```yml
    dast:
      services:
        - name: bkimminich/juice-shop:v16.0.0
          alias: juiceshop
    ```

1. DAST スキャナーには様々な変数を提供できます。DAST スキャナーに以下の値を追加します:

    ```yml
    variables:
        DAST_TARGET_URL: "http://juiceshop:3000/"
        DAST_AUTH_URL: "http://juiceshop:3000/#/login"
        DAST_FULL_SCAN: "false"
        DAST_AUTH_USERNAME: "admin@juice-sh.op"
        DAST_AUTH_PASSWORD: "admin123" # use protected/masked variables, this is only for demonstration purposes
        DAST_AUTH_USERNAME_FIELD: "css:input[id=email]"
        DAST_AUTH_PASSWORD_FIELD: "css:input[id=password]"
        DAST_AUTH_SUBMIT_FIELD: "css:button[id=loginButton]"
        DAST_SCOPE_EXCLUDE_ELEMENTS: "css:[id=navbarLogoutButton]"
        DAST_AUTH_REPORT: "false"
        DAST_REQUEST_COOKIES: "welcomebanner_status:dismiss,cookieconsent_status:dismiss"
        DAST_CRAWL_GRAPH: "false"
    ```

    > いくつかの変数を説明すると、`DAST_TARGET_URL` と `DAST_AUTH_URL` はスキャンと認証のターゲットを提供します。`DAST_AUTH_USERNAME` と `DAST_AUTH_PASSWORD` で認証のための認証情報を提供します。`DAST_AUTH_USERNAME_FIELD` と関連するフィールド変数は DAST にログインデータを入力する場所を指示します。残りの設定はこのデモのスキャン時間を短縮するためのスキャン設定です。

1. これらの値をすべて入力すると、yaml ファイルは以下のようになります:

    ```yml
    stages: # List of stages for jobs, and their order of execution
      - dast

    include:
      - template: DAST.gitlab-ci.yml

    dast:
      services:
        - name: bkimminich/juice-shop:v16.0.0
          alias: juiceshop
      variables:
          DAST_TARGET_URL: "http://juiceshop:3000/"
          DAST_AUTH_URL: "http://juiceshop:3000/#/login"
          DAST_FULL_SCAN: "false"
          DAST_AUTH_USERNAME: "admin@juice-sh.op"
          DAST_AUTH_PASSWORD: "admin123" # use protected/masked variables, this is only for demonstration purposes
          DAST_AUTH_USERNAME_FIELD: "css:input[id=email]"
          DAST_AUTH_PASSWORD_FIELD: "css:input[id=password]"
          DAST_AUTH_SUBMIT_FIELD: "css:button[id=loginButton]"
          DAST_SCOPE_EXCLUDE_ELEMENTS: "css:[id=navbarLogoutButton]"
          DAST_AUTH_REPORT: "false"
          DAST_REQUEST_COOKIES: "welcomebanner_status:dismiss,cookieconsent_status:dismiss"
          DAST_CRAWL_GRAPH: "false"
    ```

1. これらの変更をコミットし、DAST スキャンを実行させます。**ビルド > パイプライン** からジョブの進行状況を監視できます。

    > 注: このジョブは完了まで最大 15 分かかることがあります。

1. 完了したら、左サイドバーで **Secure > 脆弱性レポート** を選択します。

1. DAST スキャナーが検出した結果を確認します。

## タスク B. API スキャナーのセットアップ

API スキャナーを使用すると、アプリケーションの API エンドポイントの潜在的な脆弱性をスキャンできます。このプロセスを示すために、API 設定を含むアプリケーションテンプレートを使用します。

1. **Security Labs** プロジェクトに移動します。

1. `postman_collection.json` ファイルを確認します。このファイルには、このプロジェクトのアプリケーションに対して API スキャンを実行するために必要な定義が含まれています。ファイルと構造を確認した後、API スキャンの有効化に進むことができます。

1. **コード > リポジトリ** に移動し、`.gitlab-ci.yml` を編集します。

1. コンテナに API スキャンを追加するには、`dast` ステージを定義し、API セキュリティテンプレートを追加します。

    ```yml
    include:
    #Other scanners would be here as well.
        - template: API-Security.gitlab-ci.yml

    stages:
        - build
        - test
        - dast
    ```

1. API スキャナーのジョブ定義を追加します。

    ```yml
    api_security:
        services:
            - name: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
              alias: target
        variables:
            APISEC_POSTMAN_COLLECTION: postman_collection.json
            APISEC_TARGET_URL: http://target:7777
    ```

1. これらの変更をコミットし、パイプラインが完了した後に結果を確認します。

## ラボガイド完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentials)を参照できます。

## ご提案・改善点

ラボに変更を加えたい場合は、マージリクエストで変更内容を送信してください。
