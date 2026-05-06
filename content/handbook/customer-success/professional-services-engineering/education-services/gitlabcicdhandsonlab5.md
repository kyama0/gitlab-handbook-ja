---
title: "GitLab CI/CD - ハンズオンラボ: 変数の階層"
description: "このハンズオンガイドでは、インライン変数、プロジェクト変数、グループ変数の使い方を解説します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandsonlab5/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T04:07:10Z"
translator: claude
stale: false
---

> 所要時間の目安: 15〜20分

## 目標

CI/CD プロセスをカスタマイズするために、独自の環境変数を定義することができます。このラボでは、インライングローバル変数、インラインローカル変数、グループおよびプロジェクトレベルの変数の定義方法を学びます。

### タスク A: インライン変数の追加

このセクションでは、グローバルインライン変数とジョブスコープインライン変数という2種類のインライン変数について説明します。これらの変数は、宣言された `.gitlab-ci.yml` ファイル内でのみ定義されます。

GitLab CI/CD の変数には優先順位があり、上位の「レベル」の変数が下位の「レベル」の変数の値を上書きします。これにより意図しない結果が生じる場合があるため、変数名の再利用は注意深く管理する必要があります。詳細については、[こちら](https://docs.gitlab.com/ee/ci/variables/#cicd-variable-precedence)をクリックしてください。

1. 前のラボで作成した **CICD Demo** プロジェクトを開きます。

1. `.gitlab-ci.yml` ファイルをクリックして内容を確認します。ファイルを編集するには、**Edit > Edit single file** をクリックします。

1. ファイルの末尾に、ファイルの既存の内容とスニペットの内容の間に空白行を入れて、以下のスニペットを貼り付けます。

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

    environment variables:
      stage: build
      script:
        - echo "Do a test here"
        - echo "Here are some default, global, & local variables..."
        - echo $CI_COMMIT_SHORT_SHA
        - echo $group_level_variable
        - echo $project_level_variable
        - echo $INLINE_GLOBAL_VARIABLE
        - echo $INLINE_LOCAL_VARIABLE
    ```

1. この操作を行った後、`.gitlab-ci.yml` ファイルは以下のようになります:

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

    environment variables:
      stage: build
      script:
        - echo "Do a test here"
        - echo "Here are some default, global, & local variables..."
        - echo $CI_COMMIT_SHORT_SHA
        - echo $group_level_variable
        - echo $project_level_variable
        - echo $INLINE_GLOBAL_VARIABLE
        - echo $INLINE_LOCAL_VARIABLE
    ```

1. `.gitlab-ci.yml` の上部付近、`stages` セクション全体の下の新しい行に、以下を貼り付けてグローバルインライン変数を宣言します:

    ```yml
    variables:
      INLINE_GLOBAL_VARIABLE: "I'm an inline variable set at the global level of the CI/CD configuration file"
    ```

    > トップレベルで宣言された変数はグローバルに利用可能です。この例では、すべてのジョブが `INLINE_GLOBAL_VARIABLE` 変数を使用できます。

1. `environment variables` ジョブの内側で、そのジョブの `stage: build` 行の直下（ただし `script` 行の前）に、以下を貼り付けてローカルインライン変数を宣言します。`variables` キーワードは、そのジョブの `stage` および `script` キーワードと同じインデントにする必要があります。

    ```yml
    variables:
      INLINE_LOCAL_VARIABLE: "I'm an inline variable set at the job level of the CI/CD configuration file"
    ```

    > この変数はジョブ内にあるため、そのジョブからのみアクセス可能です。この例では、`INLINE_LOCAL_VARIABLE` は `environment variables` ジョブからのみアクセス可能です。

1. この時点で、`.gitlab-ci.yml` ファイルは以下のようになります:

    ```yml
    stages:
      - test
      - build

    variables:
      INLINE_GLOBAL_VARIABLE: "I'm an inline variable set at the global level of the CI/CD configuration file"

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

    environment variables:
      stage: build
      variables:
        INLINE_LOCAL_VARIABLE: "I'm an inline variable set at the job level of the CI/CD configuration file"
      script:
        - echo "Do a test here"
        - echo "Here are some default, global, & local variables..."
        - echo $CI_COMMIT_SHORT_SHA
        - echo $group_level_variable
        - echo $project_level_variable
        - echo $INLINE_GLOBAL_VARIABLE
        - echo $INLINE_LOCAL_VARIABLE
    ```

    > 変数を定義する際は、インデントに注意してください。グローバル変数は2スペースのインデントが必要で、ジョブ定義の外にある左詰めの `variables` キーワードの直下に配置する必要があります。ローカル変数は4スペースのインデントが必要で、ジョブ定義内にある2スペースインデントの `variables` キーワードの直下に配置する必要があります。

1. **Commit message** フィールドに `Add custom variables` と入力し、**Target Branch** が `main` に設定されていることを確認して、**Commit changes** をクリックします。

### タスク B: グループおよびプロジェクトレベル変数の追加

> このセクションでは、グループ変数とプロジェクトレベル変数という2種類の変数について説明します。これらの変数はグループまたはプロジェクトのどちらかのレベルでアクセス可能で、CI/CD 変数をより広い範囲に適用できます。

1. ページ上部のパンくずリストから **My Test Group** グループをクリックして移動します。

1. 左側のナビゲーションペインで **Settings > CI/CD** をクリックします。

1. **Variables** セクションで **Expand** ボタンをクリックします。

1. **Add Variable** をクリックします。**Key** ダイアログボックスに `group_level_variable` と入力します。*ヒント: スペル、大文字小文字、アンダースコアに注意してください！*

1. **Value** ダイアログボックスに `I'm a variable set at the group level` と入力します。

1. 他のオプションはすべてデフォルトのままにして **Add variable** をクリックします。

    > これはグループレベル変数であり、**My Test Group** 内のすべてのプロジェクトからアクセス可能です。

1. ページ上部のパンくずリストで **My Test Group** をクリックし、次に `CICD Demo` プロジェクトをクリックしてプロジェクトに移動します。

1. 手順 2〜6 を繰り返し、**Key** フィールドに `project_level_variable`、**Value** フィールドに `I'm a variable set at the project level` と入力します。

    > これはプロジェクトレベル変数であり、現在のプロジェクト内でのみアクセス可能です。

1. 変数の設定ではパイプラインの実行がトリガーされないため、左のナビゲーションペインで **Build > Pipelines** をクリックし、**New Pipeline** ボタンをクリックして、**Run Pipeline** ボタンをクリックします。

1. 実行中のパイプラインから `environment variables` ジョブのウィジェットをクリックし、ジョブの出力に変数とその値が正しく表示されていることを確認します。

## ラボガイドの完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson)も参照できます。

## ご意見・ご提案?

*GitLab CI/CD のハンズオンガイド* に変更を加えたい場合は、マージリクエストで変更内容を提出してください！
