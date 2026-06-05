---
title: "GitLab with Git Fundamentals - ハンズオンラボ: .gitlab-ci.yml ファイルを作成する"
description: "このハンズオンガイドでは、.gitlab-ci.yml ファイルを通じた CI/CD パイプラインの作成と実行方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitbasicshandsonlab4/
upstream_sha: 228e83810bd79bddf58ab0b0b518b1d52bd74fb7
translated_at: "2026-06-05T21:08:33Z"
translator: claude
stale: false
lastmod: "2026-06-05T16:14:13+01:00"
---

> 完了までの推定時間: 30 分

## 目標

CI/CD は継続的インテグレーション（Continuous Integration）と継続的デプロイメント（Continuous Deployment）を表しています。つまり、イテレーティブなコード変更を継続的にビルド・テスト・デプロイ・モニタリングする、ソフトウェア開発の継続的な手法です。

このイテレーティブなプロセスにより、バグのある、または失敗した以前のバージョンに基づいて新しいコードを開発するリスクを減らすことができます。GitLab CI/CD は開発サイクルの早い段階でバグを発見し、本番環境にデプロイされるすべてのコードが確立されたコード標準に準拠していることを確認するのに役立ちます。

GitLab CI/CD を使用するには、プロジェクトのルートに `.gitlab-ci.yml` ファイルを用意します。このファイルには CI/CD パイプラインの設定が含まれており、YAML 形式に従った独自の特別な構文を持ちます。詳細については[ドキュメント](https://docs.gitlab.com/ee/ci/)をご覧ください。**このページをブックマークしておくことをお勧めします。**

## タスク A. 新しいプロジェクトを作成し、CI/CD 設定ファイルを追加する

1. **My Test Group** に移動し、**New project** ボタンをクリックして **Create blank project** タイルをクリックします。

1. タイトルに `CI Test` と入力します。

1. プロジェクトの **Visibility Level** を **Private** に設定します。

1. **Initialize repository with a README** チェックボックスを有効にします。

1. **Enable Static Application Security Testing (SAST)** のチェックを外したままにします。

1. **Create project** ボタンをクリックし、GitLab が新しいプロジェクトのメインページにリダイレクトするまで待ちます。

1. **(+) > This directory > New file** をクリックして新しいファイルを作成します。

1. **Filename** ダイアログボックスに `.gitlab-ci.yml` と入力します。

1. **Apply a template** ドロップダウンで **General > Bash** を選択します。これにより最小限の `.gitlab-ci.yml` ファイルの内容がファイルに入力されます。

1. エディタで `build1:` 行より上のすべての行と `- echo "For example run a test suite"` 行より下のすべての行を削除します。これにより **build1** と **test1** ジョブを定義する 2 つのコードセクションが残ります。`.gitlab-ci.yml` ファイルは次のようになります:

    ```yaml
    build1:
      stage: build
      script:
        - echo "Do your build here"

    test1:
      stage: test
      script:
        - echo "Do a test here"
        - echo "For example run a test suite"
    ```

    > ジョブの詳細については[ドキュメント](https://docs.gitlab.com/ee/ci/jobs/)をご覧ください。

1. ファイルの先頭にこれらの 3 行を追加して **build** と **test** ステージを定義します。`stages` キーワードは左端に合わせ、ステージ名は 2 スペースでインデントする必要があります。

    ```yaml
    stages:
      - build
      - test
    ```

    > stages を使用してジョブのグループを含むステージを定義します。ジョブ内で stage を使用して、特定のステージで実行するようにジョブを設定します。詳細については[ドキュメント](https://docs.gitlab.com/ee/ci/yaml/index.html#stages)をご覧ください。

1. 現在の `.gitlab-ci.yml` ファイルは次のようになります:

    ```yaml
    stages:
      - build
      - test

    build1:
      stage: build
      script:
        - echo "Do your build here"

    test1:
      stage: test
      script:
        - echo "Do a test here"
        - echo "For example run a test suite"
    ```

1. **Commit message** と **Target Branch** フィールドのデフォルト値をそのままにし、**Commit changes** ボタンをクリックします。

## タスク B. CI/CD パイプラインを確認する

> パイプラインは継続的インテグレーション・デリバリー・デプロイメントのトップレベルのコンポーネントです。パイプラインは、何をするかを定義する**ジョブ**と、いつジョブを実行するかを定義する**ステージ**で構成されます。例えば、プロジェクトをビルドするすべての操作に対してステージを定義でき、このステージのジョブはコードのコンパイルを行うことができます。詳細については[こちら](https://docs.gitlab.com/ee/ci/pipelines/)をご覧ください。

1. `.gitlab-ci.yml` をプロジェクトのリポジトリにコミットした直後から、GitLab は CI/CD パイプラインを実行し始めました。プロジェクトのパイプラインを確認するには **Build > Pipelines** に移動します。

1. これまでに実行されたパイプラインは 1 つだけです。そのため、パイプラインのテーブルには 1 行しかありません。パイプラインの行の左側にある**ステータス**ラベルをクリックして、そのパイプラインの詳細を確認します。

    > ステータスラベルには **Running** または **Passed** が表示されます。

1. パイプライングラフを確認します。各列はステージを表しています。**Build** ステージには **build1** ジョブを表すウィジェットがあります。**Test** 列には **test1** ジョブを表すウィジェットがあります。**build1** ウィジェットをクリックして、Web ターミナルでジョブの出力を確認します。例えば、出力の中に `Do your build here` というメッセージを探してみてください。

1. ウェブブラウザの戻るボタンをクリックしてパイプライングラフに戻ります。**test1** ウィジェットをクリックして、Web ターミナルでジョブの出力を確認します。例えば、出力の中に `Do a test here` というメッセージを探してみてください。

## ラボガイド完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson)を見ることができます。
