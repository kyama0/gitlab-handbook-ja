---
title: "GitLab Advanced CI/CD - ハンズオンラボ: 複雑なプロセスの設定"
description: "このハンズオンガイドでは、複雑な CI/CD プロセスの一般的な設定について説明します"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandsonlab5/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

このラボでは、マージトレインとマージコンフリクトを中心に、より複雑なマージプロセスを分析します。まず、マージトレインから始めます。

> 完了までの推定時間: 15 分

## 目標

- マージトレインの概念とそのメリットを理解する
- GitLab プロジェクトでマージトレインを有効にする
- マージトレインを作成して実行する
- GitLab でマージコンフリクトを特定して解決する
- コンフリクトするマージリクエストの処理を実践する

## タスク A. マージトレインを有効にする

1. プロジェクトでマージトレインを有効にするには、左サイドバーで **Settings > Merge requests** を選択します。

1. Merge options の下で、**Enable merged results pipeline** と **Enable merge trains** オプションをクリックします。

1. ページを少し下にスクロールして **Merge Checks** セクションで、**Pipelines must succeed** オプションをクリックします。

1. セクション下部で **Save changes** を選択します。

## タスク B. マージトレインを実行する

マージトレインをデモンストレーションするために、意図的に長い CI/CD ジョブを作成しましょう。

1. プロジェクトリポジトリに移動します。

1. `.gitlab-ci.yml` ファイルを選択します。

1. 既存の CI/CD ファイルに、次のジョブをパイプラインに追加します:

      ```yml
      pause:
        stage: test
        script:
          - sleep 4m
      ```

      このジョブを追加すると、2 つのマージリクエストを作成するのに十分な時間が確保されます。

1. マージリクエストパイプラインでジョブが実行されるように、次のルールを追加します:

    ```yml
    workflow:
      auto_cancel:
        on_job_failure: all
      rules:
        - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
        - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
    ```

      現在のパイプラインは次のようになります:

      ```yml
      stages:
        - deps
        - test

      workflow:
        auto_cancel:
          on_job_failure: all
        rules:
          - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
          - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH

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
        <<: [*artifactdef, *cachedef]

      test linearsearch:
        stage: test
        script:
          - node_modules/.bin/jest --ci --testResultsProcessor=jest-junit linearsearch.test.js
        <<: [*artifactdef, *cachedef]

      pause:
        stage: test
        script:
          - sleep 4m
      ```

1. **Commit changes** を選択して `.gitlab-ci.yml` ファイルを更新します。

      2 つのマージリクエストを作成します。最初のマージリクエスト:

1. **Code > Branches** を選択します。

1. **New branch** を選択します。

1. ブランチ名として `train` を追加します。

1. その他のオプションはすべてデフォルトのまま **Create branch** を選択します。

1. `README.md` ファイルを選択して、変更を加えます。

1. **Create merge request** を選択します。

1. すべてのオプションをデフォルトのままにして **Create merge request** を選択します。

      2 番目のマージリクエスト:

1. **Code > Branches** を選択します。

1. **New branch** を選択します。

1. ブランチ名として `train-2` を追加します。

1. その他のオプションはすべてデフォルトのまま **Create branch** を選択します。

1. `README.md` ファイルを選択して変更を加えます。前のブランチで行った変更とは異なる変更を加えるようにしてください。

1. **Create merge request** を選択します。

1. すべてのオプションをデフォルトのままにして **Create merge request** を選択します。

      両方のマージリクエストが作成されたら:

1. 両方を自動マージに設定します。`Set by your user to start a merge train when all merge checks pass` というメッセージが表示されます。

1. `A new merge train has started and this merge request is the first of the queue. View merge train details.` のようなメッセージが表示されます。**View merge train details** をクリックして、マージトレインの動作を確認します。

1. マージリクエストの完了を待ち、正常にマージされることを確認します。

## タスク C. マージコンフリクト

複数のユーザーが同時にプロジェクトで作業する場合、マージコンフリクトはしばしば避けられません。このラボでは、プロジェクト内でのマージリクエストの処理方法を学びます。

1. 速度低下を避けるために、`main` ブランチの CI/CD プロジェクトから `pause` ジョブを削除します。現在、ファイルは次のようになります:

      ```yml
      stages:
        - deps
        - test

      workflow:
        auto_cancel:
          on_job_failure: all
        rules:
          - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
          - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH

      default:
        image: node:latest

      .artifactdef: &artifactdef
        artifacts:
          when: always
          reports:
            junit: junit.xml

      install deps: &cachedef
        stage: deps
        script:
          - npm install jest jest-junit
        <<: *cachedef

      test binarysearch:
        stage: test
        script:
          - node_modules/.bin/jest --ci --testResultsProcessor=jest-junit binarysearch.test.js
        <<: [*artifactdef, *cachedef]

      test linearsearch:
        stage: test
        script:
          - node_modules/.bin/jest --ci --testResultsProcessor=jest-junit linearsearch.test.js
        <<: [*artifactdef, *cachedef]
      ```

      次に、コンフリクトする 2 つのマージリクエストを作成しましょう:

1. **Code > Branches** を選択します。

1. **New branch** を選択します。

1. ブランチ名として `conflict` を追加します。

1. その他のオプションはすべてデフォルトのまま **Create branch** を選択します。

1. `index.js` ファイルを選択します。ファイルの先頭に、関数を説明するコメントを追加します。コメントの例は以下のとおりです。

      ```js
      // This method will create a binary search finding the value in list in log(n) time
      module.exports.binarySearch = function binarySearch(arr, val) {
          let start = 0;
          let end = arr.length - 1;
          while (start <= end) {
              let mid = Math.floor((start + end) / 2);
              if (arr[mid] === val) {
                  return mid;
              }
              if (val < arr[mid]) {
                  end = mid - 1;
              } else {
                  start = mid + 1;
              }
          }
          return -1;
      }
      ```

1. このコードをブランチにコミットして、そこから新しいマージリクエストを作成します。その後、新しいブランチを作成します:

1. **Code > Branches** を選択します。

1. **New branch** を選択します。

1. ブランチ名として `conflict-2` を追加します。

1. その他のオプションはすべてデフォルトのまま **Create branch** を選択します。

1. `index.js` ファイルを選択します。ファイルの先頭に、関数を説明する別のコメントを追加します。コメントの例は以下のとおりです:

      ```js
      //A binary search will search a list in log(n) time
      module.exports.binarySearch = function binarySearch(arr, val) {
          let start = 0;
          let end = arr.length - 1;
          while (start <= end) {
              let mid = Math.floor((start + end) / 2);
              if (arr[mid] === val) {
                  return mid;
              }
              if (val < arr[mid]) {
                  end = mid - 1;
              } else {
                  start = mid + 1;
              }
          }
          return -1;
      }
      ```

1. このコードをブランチにコミットして、そこから新しいマージリクエストを作成します。

1. `conflict` マージリクエストに戻ります。マージボタンの横の矢印を選択し、即時マージを選択してリポジトリにマージします。

1. マージ後、`conflict-2` マージリクエストに移動します。*Merge conflicts must be resolved* と表示されてマージがブロックされていることがわかります。

1. **Resolve conflicts** オプションを選択します。現在のマージリクエストのコードを使用するか、main のコードを使用するかを選択するオプションが表示されます。

1. 希望のオプションを選択し、**Commit to source branch** を選択します。

この後、マージリクエストをマージできるようになります。

## ラボガイドの完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandson)を参照できます。

## ご提案は?

ラボへの変更をご希望の場合は、マージリクエストで変更内容を送信してください。
