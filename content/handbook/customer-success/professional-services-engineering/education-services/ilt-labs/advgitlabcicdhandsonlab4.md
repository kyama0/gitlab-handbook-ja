---
title: "GitLab Advanced CI/CD - ハンズオンラボ: ベストプラクティスの確認"
description: "このハンズオンガイドでは、GitLab の CI/CD に関する一般的なベストプラクティスについて説明します"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandsonlab4/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-25T17:26:37+00:00"
---

このラボの目的は、隠しジョブやマップマージなどを活用して、コードをより簡潔にして繰り返しを避けることです。

> 完了までの推定時間: 15 分

## 目標

- パイプラインの繰り返しを減らす
- 隠しジョブとマップマージ

テストパイプラインには、コードや定義が繰り返されている箇所がいくつかあります。npm でパッケージをインストールする際の繰り返しを、キャッシュを使用して減らせることを既に確認しました。このラボでは、コードの繰り返しをさらに減らす方法を学びます。

現在の `.gitlab-ci.yml` ファイルの定義は次のとおりです:

```yml:
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
    - npm install jest jest-junit
  cache:
    key: $CI_COMMIT_REF_SLUG
    paths:
      - node_modules
  
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

## タスク A. ジョブを簡略化する

1. プロジェクトリポジトリに移動してください。

1. **Build > Pipeline Editor** を選択してください。

1. 現在の `.gitlab-ci.yml` ファイルでは、すべてのテストに同じアーティファクトセットが含まれています。各ジョブにアーティファクトを定義する代わりに、次の定義で最初に隠しジョブを作成してください:

    ```yml
    .artifactdef: &artifactdef
      artifacts:
        when: always
        reports:
          junit: junit.xml
    ```

1. その後、マップマージを使用して、すべてのテストジョブにアーティファクト定義を追加してください:

    ```yml
    test binarysearch:
      stage: test
      script:
        - node_modules/.bin/jest --ci --testResultsProcessor=jest-junit binarysearch.test.js
      <<: *artifactdef
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules

    test linearsearch:
      stage: test
      script:
        - node_modules/.bin/jest --ci --testResultsProcessor=jest-junit linearsearch.test.js
      <<: *artifactdef
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules
    ```

1. さらに、繰り返しを避けるためにキャッシュも隠しジョブに移動してください。この例では、これらの定義を `cachedef` 隠しジョブに移動しています:

    ```yml
    stages:
      - deps
      - test
    
    workflow:
      auto_cancel:
        on_job_failure: all

    default:
      image: node:latest

    .artifactdef: &artifactdef
      artifacts:
        when: always
        reports:
          junit: junit.xml

    .cachedef: &cachedef
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules

    install deps:
      stage: deps
      script:
        - npm install jest jest-junit
      <<: *cachedef

    test binarysearch:
      stage: test
      script:
        - node_modules/.bin/jest --ci --testResultsProcessor=jest-junit binarysearch.test.js
      <<: [ *artifactdef, *cachedef ]

    test linearsearch:
      stage: test
      script:
        - node_modules/.bin/jest --ci --testResultsProcessor=jest-junit linearsearch.test.js
      <<: [ *artifactdef, *cachedef ]
    ```

    > この変更により、コードの総行数が減るだけでなく、アーティファクトが変更された場合に複数の場所ではなく 1 か所だけ変更すれば済むようになります。

1. これらの変更を行った後、**Commit changes** を選択してください。

1. 左サイドバーで **Build > Pipelines** を選択してパイプラインを監視してください。

1. パイプラインが正常に実行されたことを確認したら、`.gitlab-ci.yml` ファイルに戻ってください。このファイルに他の最適化点はありますか?

## ラボガイドの完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandson)を参照できます。

## ご提案は?

ラボへの変更をご希望の場合は、マージリクエストで変更内容を送信してください。
