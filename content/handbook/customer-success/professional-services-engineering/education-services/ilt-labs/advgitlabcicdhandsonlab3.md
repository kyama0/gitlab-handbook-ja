---
title: "GitLab Advanced CI/CD - ハンズオンラボ: パイプラインテストの最適化"
description: "このハンズオンガイドでは、テストパイプラインの最適化について説明します"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandsonlab3/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-25T17:26:37+00:00"
---

このラボの目的は、アプリケーションのテストを設定できるさまざまな方法を探ることです。

> 完了までの推定時間: 15 分

## 目標

- 失敗後にパイプラインを停止する
- ユニットテストのレポート

このラボでは、アプリケーションのテストを設定できるさまざまな方法を探ります。現在、プロジェクトには次のテストセットアップがあります:

  ```yml
  stages:
    - deps
    - test

  default:
    image: node:latest

  install deps:
    stage: deps
    script:
      - npm install jest
    cache:
      key: $CI_COMMIT_REF_SLUG
      paths:
        - node_modules

  test binarysearch:
    stage: test
    script:
      - node_modules/.bin/jest binarysearch.test.js
    cache:
      key: $CI_COMMIT_REF_SLUG
      paths:
        - node_modules

  test linearsearch:
    stage: test
    script:
      - node_modules/.bin/jest linearsearch.test.js
    cache:
      key: $CI_COMMIT_REF_SLUG
      paths:
        - node_modules
```

このラボでは、単一のジョブが失敗した場合にテストパイプラインを確実に実行できるようにする方法を探ります。また、テストジョブにテストレポートを追加する方法も確認します。

## タスク A. 失敗後にパイプラインを停止する

この例では、テストの 1 つが失敗した場合にパイプラインをキャンセルする方法を見てみましょう。

1. `Node` プロジェクトリポジトリに移動します。

1. **Build > Pipeline Editor** を選択します。

1. `.gitlab-ci.yml` ファイルの stages セクションのすぐ下に、ジョブを自動キャンセルするワークフローを追加します。

      ```yml
      workflow:
        auto_cancel:
          on_job_failure: all
      ```

1. この設定では、いずれかのジョブが失敗すると、パイプライン全体が失敗します。これをテストするために、意図的に失敗するテストジョブを作成できます。

      ```yml
      test fail:
        stage: test
        script:
          - jet test.js
      ```

1. **Commit changes** を選択します。

      パイプラインが失敗したジョブをどのように処理するかを見てみましょう。

1. 左サイドバーで、**Build > Pipelines** を選択します。

1. 最新のパイプラインを選択して、ジョブを観察します。`test fail` ジョブが失敗すると、他のジョブがキャンセルされ、灰色のスラッシュアイコンが表示されることに注目してください。

      自動キャンセルが機能していることを確認できたので、失敗するジョブを削除しましょう。

1. リポジトリに移動します。

1. **Build > Pipeline Editor** を選択します。

1. `test fail` ジョブを削除します。`.gitlab-ci.yml` ファイルは次のようになります:

      ```yml
      stages:
        - deps
        - test

      workflow:
        auto_cancel:
          on_job_failure: all

      default:
        image: node:latest

      install deps:
        stage: deps
        script:
          - npm install jest
        cache:
          key: $CI_COMMIT_REF_SLUG
          paths:
            - node_modules

      test binarysearch:
        stage: test
        script:
          - node_modules/.bin/jest binarysearch.test.js
        cache:
          key: $CI_COMMIT_REF_SLUG
          paths:
            - node_modules

      test linearsearch:
        stage: test
        script:
          - node_modules/.bin/jest linearsearch.test.js
        cache:
          key: $CI_COMMIT_REF_SLUG
          paths:
            - node_modules
      ```

1. **Commit changes** を選択します。

## タスク B. テストレポートを追加する

このタスクでは、テストジョブにテストレポートを追加します。

1. まだ Pipeline Editor を表示していない場合は、**Build > Pipeline Editor** に移動します。

1. `test binarysearch` と `test linearsearch` ジョブの `jest` コマンドを調整して、コマンドに `testResultsProcessor` を追加します。これは `--ci --testResultsProcessor=jest-junit` フラグをコマンドに追加することで実現できます。`--ci` フラグにより、Jest は CI 環境で実行されていると見なします。これを機能させるには、`install deps` に `jest-junit` を追加してインストールする必要もあります。変更後のジョブの例を以下に示します:

      ```yml
      install deps:
        stage: deps
        script:
          - npm install jest jest-junit
        cache:
          key: $CI_COMMIT_REF_SLUG
          paths:
            - node_modules

      test binarysearch:
        stage: test
        script:
          - node_modules/.bin/jest --ci --testResultsProcessor=jest-junit binarysearch.test.js
        cache:
          key: $CI_COMMIT_REF_SLUG
          paths:
            - node_modules

      test linearsearch:
        stage: test
        script:
          - node_modules/.bin/jest --ci --testResultsProcessor=jest-junit linearsearch.test.js
        cache:
          key: $CI_COMMIT_REF_SLUG
          paths:
            - node_modules
      ```

1. テスト結果をパイプラインからアクセスできるようにするには、JUnit ファイルに保存する必要があります。そのために、両方のテストの `script` キーワードの後に次のコードスニペットを追加する必要があります:

      ```yml
        artifacts:
          when: always
          reports:
            junit: junit.xml
      ```

      テストは次のようになります:

      ```yml
      test binarysearch:
        stage: test
        script:
          - node_modules/.bin/jest --ci --testResultsProcessor=jest-junit binarysearch.test.js
        artifacts:
          when: always
          reports:
            junit: junit.xml
        cache:
          key: $CI_COMMIT_REF_SLUG
          paths:
            - node_modules

      test linearsearch:
        stage: test
        script:
          - node_modules/.bin/jest --ci --testResultsProcessor=jest-junit linearsearch.test.js
        artifacts:
          when: always
          reports:
            junit: junit.xml
        cache:
          key: $CI_COMMIT_REF_SLUG
          paths:
            - node_modules
      ```

1. これらの変更を行った後、**Commit changes** を選択します。

1. 左サイドバーで、**Build > Pipelines** を選択します。

1. 最新のパイプラインを選択します。

1. テストが完了するまで待ちます。テストジョブの完了後にページを更新して、`Tests` タブを選択します。

1. タブにテスト結果のレポートが表示されます。

## ラボガイドの完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandson)を参照できます。

## ご提案は?

ラボへの変更をご希望の場合は、マージリクエストで変更内容を送信してください。
