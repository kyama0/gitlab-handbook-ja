---
title: "GitLab CI/CD - ハンズオンラボ: ジョブポリシーパターン"
description: "このハンズオンガイドでは、rules キーワードを使った CI/CD ジョブの操作について解説します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandsonlab6/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T04:07:10Z"
translator: claude
stale: false
---

> 所要時間の目安: 25〜30分

## 目標

ジョブポリシーパターンを使用すると、`rules` キーワードを使ってジョブをいつ・どのように実行するかをパイプラインが制御できます。このラボでは、rules を使ったジョブの作成方法を学びます。これらの rules がパイプラインに与える影響を確認し、パイプラインの rules と変数を組み合わせて使用する方法を学びます。

> 同様の結果を達成できる `only` および `except` キーワードは、現在積極的に開発されておらず推奨されていません。詳細については、[こちら](https://docs.gitlab.com/ee/ci/jobs/job_control.html)をクリックしてください。

## タスク A: rules を使ったジョブの作成

1. 前のラボで作成した **CICD Demo** プロジェクトを開きます。

1. `.gitlab-ci.yml` ファイルをクリックして内容を確認します。**Edit > Edit single file** をクリックします。

1. 設定ファイルを整理するために、`environment echoes` と `environment variables` ジョブを削除します。また、`variables` キーワードと関連する変数も削除します。これらの手順を完了すると、以下の `.gitlab-ci.yml` ファイルになります:

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

1. ファイルの末尾に、以下のコードスニペットを貼り付けます:

    ```yml
    deploy review:
      stage: review
      script:
        - echo "Do your average deploy here"
      rules:
        - if: '$CI_COMMIT_REF_NAME == "main"'
          when: never
        - if: '$CI_COMMIT_TAG'
          when: never
        - when: always
      environment:
        name: review/$CI_COMMIT_REF_NAME

    deploy release:
      stage: deploy
      script:
        - echo "Deploy to a production environment"
      rules:
        - if: '$CI_COMMIT_TAG =~ /^v.*/'
          when: manual
      environment:
        name: production

    deploy staging:
      stage: deploy
      script:
        - echo "Deploy to a staging environment"
      rules:
        - if: '$CI_COMMIT_REF_NAME == "main"'
          when: always
        - when: never
      environment:
        name: staging
    ```

1. `.gitlab-ci.yml` の上部にある `stages` セクションに、`review` と `deploy` ステージを追加します。

1. 完成後、`.gitlab-ci.yml` ファイルは以下のようになります:

    ```yml
   stages:
      - test
      - build
      - review
      - deploy

    test job:
      stage: test
      script:
        - echo "I am a unit test!"

    build job:
      stage: build
      script:
        - echo "I am a build image!"

    deploy review:
      stage: review
      script:
        - echo "Do your average deploy here"
      rules:
        - if: '$CI_COMMIT_REF_NAME == "main"'
          when: never
        - if: '$CI_COMMIT_TAG'
          when: never
        - when: always
      environment:
        name: review/$CI_COMMIT_REF_NAME

    deploy release:
      stage: deploy
      script:
        - echo "Deploy to a production environment"
      rules:
        - if: '$CI_COMMIT_TAG =~ /^v.*/'
          when: manual
      environment:
        name: production


    deploy staging:
      stage: deploy
      script:
        - echo "Deploy to a staging environment"
      rules:
        - if: '$CI_COMMIT_REF_NAME == "main"'
          when: always
        - when: never
      environment:
        name: staging
    ```

1. **Commit message** フィールドに `Add CI structure job definitions` と入力し、**Target Branch** が `main` に設定されていることを確認して、**Commit changes** をクリックします。

1. 左側のナビゲーションペインで **Build > Pipelines** をクリックし、最新のパイプライン実行の横にあるステータスアイコンをクリックします。

1. ウィジェットをクリックして、パイプラインがどの環境にコードをデプロイしているかを確認します。左のサイドバーで **Operate > Environments** をクリックして、作成された環境を確認します。

    > 各ジョブに定義された rules に基づいて、3つのジョブのうち `deploy staging` だけが実行されていることがわかります。

1. **オプション:** 異なるブランチやタグを使ってパイプラインのトリガーを実験してみてください。**deploy release**、**deploy review**、**deploy staging** ジョブを実行する異なるパイプラインを起動できますか？

    > ヒント: 関連する `.gitlab-ci.yml` ジョブ定義の `rules` キーワードを確認してください。

## 解答例

### タスク B1: `deploy review` ジョブの実行

1. `deploy review` の `rules` セクションで指定されたルールを確認します。このジョブは A) ブランチ名（`$CI_COMMIT_REF_NAME` で表される）が `main` と等しくない、かつ B) ブランチにタグが付いていない（`$CI_COMMIT_TAG` で表される）場合にのみ実行されます。

    > `if` キーワードで単独で使用される変数は、その変数に何らかの値が関連付けられているかどうかを確認します。他のプログラミング言語では偽とみなされる `False` などの値を含む、どのような値があっても true です。値がない場合、ステートメントは false です。値として空白を持つ変数も false とみなされます。

1. `Code > Branches` をクリックして新しいブランチを作成します。

1. **New branch** ボタンをクリックします。

1. **branch name** セクションに **Dev** と入力し、**Create branch** をクリックします。

1. **Build > Pipelines** をクリックします。

1. **Run Pipeline** ボタンをクリックします。

1. **Run for branch name or tag** の下で、**Dev** が選択されていることを確認します。

1. **Run Pipeline** ボタンをクリックします。

`deploy review` ジョブのみが実行されます。

### タスク B2: `deploy release` ジョブの実行

1. `.gitlab-ci.yml` ファイルを開き、`deploy release` の rules セクションで指定されたルールを確認します。このジョブは A) ブランチ名（`$CI_COMMIT_REF_NAME` で表される）が main と等しくない、かつ B) ブランチに `v` の文字で始まるタグが付いている（`$CI_COMMIT_TAG =~ /^v.*/` で表される）場合にのみ実行されます。

1. このジョブを実行するためにタグを作成する必要があります。タグを作成するには、**Code > Tags** をクリックします。

1. **New tag** ボタンをクリックします。

1. Tag name セクションに `v1.0` と入力します。

1. **Create from** オプションを `Dev` に変更します。

1. **Create tag** ボタンをクリックします。

1. **Build > Pipelines** をクリックします。

1. **Run Pipeline** ボタンをクリックします。

1. Run for branch name or tag の下で、**v1.0** が選択されていることを確認します。

1. **Run Pipeline** ボタンをクリックします。

1. `deploy release` ジョブのみが利用可能になります。ジョブは手動に設定されているため、明示的に開始するまで実行されません。ジョブの横にある矢印をクリックしてジョブを開始します。

### タスク B3: `deploy staging` ジョブの実行

1. `.gitlab-ci.yml` ファイルを開き、`deploy staging` の `rules` セクションで指定されたルールを確認します。このジョブは A) ブランチ名（`$CI_COMMIT_REF_NAME` で表される）が `main` と等しい場合にのみ実行されます。

1. 左上のコーナーで **Dev** と表示されているボタンをクリックし、オプションを **main** に変更します。

1. **Build > Pipelines** をクリックします。

1. **Run Pipeline** ボタンをクリックします。

1. **Run for branch name or tag** の下で、**main** が選択されていることを確認します。

1. **Run Pipeline** ボタンをクリックします。

`deploy staging` ジョブのみが実行されます。

## ラボガイドの完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson)も参照できます。

## ご意見・ご提案?

*GitLab CI/CD のハンズオンガイド* に変更を加えたい場合は、マージリクエストで変更内容を提出してください！
