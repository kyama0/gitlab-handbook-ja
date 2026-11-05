---
title: "GitLab Security Essentials - ハンズオンラボ: テストステージのスキャナー"
description: "このハンズオンガイドは、プロジェクトでテストステージのスキャンを使用するプロセスを案内します。"
upstream_path: "/handbook/customer-experience/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentialslab3/"
upstream_sha: ab93800e4c241789ac67785899fa20ffa1eb0854
translated_at: "2026-11-05T15:29:07.766988+00:00"
translator: claude
stale: false
lastmod: "2026-11-04T12:01:28-05:00"
---


> 推定所要時間: 20 分

## 目標 {#objectives}

多くのプロジェクトは、API コンポーネントを持つ Web アプリケーションとしてデプロイされています。これらのコンポーネントをスキャンするために、DAST スキャナーを活用できます。

このラボでは、DAST スキャンを実装する方法を学び、スキャン結果を確認します。

## タスク A. DAST スキャンのセットアップ {#task-a-setting-up-dast-scans}

DAST スキャンをテストするために、[OWASP Juice Shop](https://owasp.org/www-project-juice-shop/)という脆弱な Web アプリケーションのインスタンスをセットアップします。このアプリケーションをスキャンすることで、期待できる DAST スキャン結果の全範囲を確認できます。

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

1. 専用のサーバーがないため、Juice Shop アプリケーションを Docker サービスとして DAST に渡すことにします。これを行うために、テンプレートのインクルードの下にサービスを定義します:

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

1. これらの値をすべて入力すると、YAML ファイルは以下のようになります:

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

1. これらの変更をコミットし、DAST スキャンを実行させます。**Build > Pipelines** からジョブの進行状況を監視できます。

    > 注: このジョブは完了まで最大 15 分かかることがあります。

1. 完了したら、左サイドバーで **Secure > Vulnerability report** を選択します。

1. DAST スキャナーが検出した結果を確認します。

## ラボガイド完了 {#lab-guide-complete}

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-experience/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentials)を参照できます。

## ご提案・改善点 {#suggestions}

このラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
