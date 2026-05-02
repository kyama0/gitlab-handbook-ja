---
title: "GitLab CI/CD - ハンズオンラボ: ルールと変更のマージ"
description: "このハンズオンガイドでは、ルールとマージリクエストパイプラインの設定方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandsonlab2/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:33:12Z
translator: claude
stale: false
---

> 完了までの推定時間: 15 分

## はじめに

自動ビルドを正常に実装した後、Tanuki Enterprises のチームは新しい問題を発見しました。コードをコミットするたびにパイプライン全体がトリガーされます。これには本番リリースを作成するリリースジョブも含まれます。これにより:

- **早まったリリース**: 開発ブランチの実験的な機能が本番リリースを誤ってトリガーする
- **リソースの無駄**: 作業中のコードでも、小さなコミットのたびにビルドとテストのジョブが実行される
- **品質ゲートがない**: マージリクエストで適切な検証を経ずに、コードが直接 main にマージされる
- **パイプラインの混乱**: リリースジョブがタグを作成し、それがさらにパイプラインをトリガーして無限ループが発生する
- **コンテキストの喪失**: どのパイプライン実行がマージリクエストに関連しているかを開発者が簡単に確認できない

## 目標

このラボでは、CI/CD パイプラインが実行されるタイミングと方法を制御するために、ワークフロールールとマージリクエストパイプラインを実装します。開発ワークフローと本番リリースを区別する方法を学び、コード変更のコンテキストに基づいて適切なタイミングで適切なジョブが実行されるようにします。

## タスク A. ワークフロールール

ビルドプロセスが完成したので、コードに変更を加え始めることができます。ほとんどの変更はマージリクエストで行われます。マージリクエストのブランチでコードが変更されると、そのマージリクエストに対してパイプラインを実行するのが理想的です。これにより、すべてのコード変更が本番環境に対応した状態になり、変更を本番環境にマージしやすくなります。パイプラインをセットアップして設定するいくつかの方法を見ていきましょう。

ワークフロールールを使用すると、パイプラインが実行されるタイミングを制御できます。これらのルールにより、CI/CD パイプライン全体の実行フローを制御できます。たとえば、現在の `.gitlab-ci.yml` ファイルを見てみましょう:

```yml
default:
  image: golang

stages:
  - build
  - run

build go:
  stage: build
  script:
    - go build
  artifacts:
    paths: 
      - array

run go:
  stage: run
  script:
    - ./array
```

現在のプロジェクトコードに基づいてリリースを追加する新しいジョブを導入しましょう。

1. GitLab はプロジェクトのリリースを **Deploy > Releases** セクションで追跡します。新しいリリースを作成するには **Build > Pipeline Editor** を選択します。

1. パイプラインエディターで `release` ジョブを `stages` に追加します:

    ```yml
    stages:
      - build
      - run
      - release
    ```

1. `run go` ジョブの下に release ステージの新しいジョブを追加します:

    ```yml
    release go:
      stage: release
      script:
        - echo "Generating the latest Tanuki App release!"
    ```

1. リリースジョブには特別な CLI ツールが必要です。必要なツールを含むイメージをリリースジョブに追加します:

    ```yml
    release go:
      stage: release
      image: registry.gitlab.com/gitlab-org/release-cli:latest
      script:
        - echo "Generating the latest Tanuki App release!"
    ```

1. リリースを作成するには、リリースの `tag_name` と `description` を指定する必要があります。一意のバージョン番号を生成するために、組み込み変数 `CI_PIPELINE_IID` を使用します。この変数には現在のパイプラインのプロジェクトレベルの ID が含まれます。`release job` の `script` の下に release キーワードを追加します:

    ```yml
      image: registry.gitlab.com/gitlab-org/release-cli:latest
      script:
        - echo "Generating the latest Tanuki App release!"
      release: 
        tag_name: 'v0.$CI_PIPELINE_IID'
        description: 'The latest release!'
    ```

    ジョブは次のようになります:

    ```yml
    release go:
      stage: release
      image: registry.gitlab.com/gitlab-org/release-cli:latest
      script:
        - echo "Generating the latest Tanuki App release!"
      release: 
        tag_name: 'v0.$CI_PIPELINE_IID'
        description: 'The latest release!'
    ```

    リリースジョブが実行されると、リポジトリにタグが作成されます。タグの作成はデフォルトでパイプラインの実行をトリガーします。これにより、パイプラインが完了するたびに新しいタグが作成され、新しいパイプラインがトリガーされるという無限ループが生じます。

    無限ループを防ぐために、新しいコミットタグが追加されたときにパイプラインがトリガーされないようにするワークフローを使用できます。

1. `.gitlab-ci.yml` ファイルの先頭に次のワークフローを定義します:

    ```yml
    workflow:
      rules:
        - if: $CI_COMMIT_TAG
          when: never 
        - when: always
    ```

1. **Commit changes** を選択します。

      このルールはパイプライン全体に適用されます。`CI_COMMIT_TAG` が存在する場合、if 文が true と評価され、パイプラインは実行されません。`CI_COMMIT_TAG` が存在しない場合、パイプラインが実行されます。

      > 特定の `CI_COMMIT_TAG` の値を検索して、リリースの場合のみ実行を停止することもできます。この場合、`v0.*` の形式のタグはリリースの一部なので、この特定のパターンを検索できます。

## タスク B. マージリクエストパイプライン

新しいリリースジョブについて考慮すべきもう一つの点は、リリースを作成するジョブが実行されるタイミングです。現在、このジョブはすべてのコミットで実行されます。しかし、ideally では main または default ブランチへのコミットでのみ実行されることを望みます。これを実現するために、マージリクエストパイプラインを実装できます。

マージリクエストパイプラインは、オープンなマージリクエストのあるブランチに変更を加えるたびに実行されます。マージリクエストのフローを制御することで、変更が完全にマージされるまでリリースが実行されないようにできます。

マージリクエストで実行されるジョブを定義するために、ジョブに rules の定義を追加します。追加するルールは `CI_PIPELINE_SOURCE` が merge_request_event かどうかを確認します。

1. **Build > Pipeline Editor** を選択してパイプラインエディターで `.gitlab-ci.yml` ファイルを開きます。

1. `build go` と `run go` ジョブの `script` の下に次のルールを追加します:

    ```yml
      rules:
        - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
    ```

    > このルールが 2 スペースでインデントされていることを確認してください。`script` キーワードと同じ位置に揃える必要があります。

    build および run ジョブは次のようになります:

    ```yml
    build go:
      stage: build
      script:
        - go build
      artifacts:
        paths: 
          - array
      rules:
        - if: $CI_PIPELINE_SOURCE == 'merge_request_event'

    run go:
      stage: run
      script:
        - ./array
      rules:
        - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
    ```

    > これで、build と run ジョブはパイプラインがマージリクエストの一部である場合にのみ実行されます。

1. 次に、ルールを否定することでマージリクエストでリリースジョブが実行されないようにします。`release job` の script の下に次のルールを追加します:

    ```yml
      rules:
        - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
    ```

    > これが `script` キーワードと同じレベル（2 スペース）にインデントされていることを確認してください。

    リリースジョブは次のようになります:

    ```yml
    release go:
      stage: release
      image: registry.gitlab.com/gitlab-org/release-cli:latest
      script:
        - echo "Generating the latest Tanuki App release!"
      release: 
        tag_name: 'v0.$CI_PIPELINE_IID'
        description: 'The latest release!'
      rules:
        - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
    ```

1. これらの変更を加えたら **Commit changes** を選択して `.gitlab-ci.yml` ファイルを更新します。

1. main にコミットすると、**Build > Pipelines** を選択して実行中のジョブを確認します。コミットが `main` で実行されたため、リリースジョブのみが実行されることに気づくでしょう。

      他のジョブを実行するためにマージリクエストを作成しましょう。

1. **Code > Branches** に移動します。

1. **New Branch** を選択します。

1. 任意のブランチ名を入力して **Create Branch** を選択します。

1. **Code > Merge requests** を選択します。

1. **New Merge Request** を選択します。

1. 作成したブランチをソースブランチとして選択します。

1. **Compare branches and continue** を選択します。

1. すべてのオプションをデフォルトのままにして **Create Merge Request** を選択します。

      マージリクエストパイプラインをトリガーするには、コードに何らかの変更を加える必要があります。

1. **Code > Open in Web IDE** を選択します。

1. `README.md` ファイルを選択して、ファイル内の任意の内容を変更します。

1. 完了したら、**Source Control > Commit and push** を選択します。

1. 画面の右下に表示されるポップアップから **Go to MR** を選択してマージリクエストに戻ります。

1. **Build > Pipelines** に移動します。マージリクエストのラベルが付いた新しいパイプラインが表示されます。

1. それを選択して進捗を確認します。`.gitlab-ci.yml` ファイルで指定した build と run の 2 つのジョブが実行されているのが確認できます。

1. **Code > Merge Requests** を選択してマージリクエストに戻ります。

1. マージリクエストを選択します。マージリクエストパイプラインというセクションが表示されています。このセクションはマージリクエストパイプラインの進捗を示します。

## まとめ

ワークフロールールとマージリクエストパイプラインの導入により、Tanuki Enterprises の CI/CD プロセスがカオスから制御された状態に変わりました。ワークフロールールはリリースタグでパイプラインがトリガーされるのを防ぐことで無限ループの問題を解消し、マージリクエストパイプラインはビルドとテストのジョブがアクティブな開発作業にのみ実行され、main へのすべてのコミットでは実行されないことを保証します。最も重要なのは、リリースジョブが main ブランチでのみ実行されるようになり、フィーチャーブランチからの本番リリースの誤ったトリガーが防止されました。

## ラボガイド完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandson)を参照できます。

## ご提案について

ラボに変更を加えたい場合は、マージリクエスト経由で変更を送信してください。
