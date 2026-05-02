---
title: "GitLab CI/CD - ハンズオンラボ: アプリケーションをビルドするパイプラインを設定する"
description: "このハンズオンガイドでは、アプリケーションの基本的なパイプラインを構築する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandsonlab1/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:33:12Z
translator: claude
stale: false
---

> 完了までの推定時間: 15 分

## はじめに

Tanuki Enterprises のエンジニアリングチームは現在、個々の開発者のワークステーションで Go アプリケーションを手動でビルドしています。このアプローチはいくつかの重大な問題を引き起こしています:

- **環境の不整合**: Go のバージョンやシステム設定の違いにより、ある開発者のマシンではビルドが成功するが別のマシンでは失敗する
- **時間の無駄**: 開発者が開発のさまざまなステージで同じアプリケーションを繰り返しビルドしている
- **可視性がない**: 経営陣にはビルドステータスやデプロイ準備状況が明確に見えない
- **フィードバックが遅い**: バグが開発サイクルの後半まで発見されない
- **手動プロセス**: 毎回のビルドで開発者が正しいコマンドを覚えて実行する必要がある

## 目標

このラボでは、GitLab を使った基礎的な CI/CD パイプラインを実装し、ビルドを自動化して一貫性を確保し、開発プロセスの可視性を高めます。パイプライン設定の作成、Docker イメージの使用、アーティファクトの管理といったここで練習するテクニックは業界標準のプラクティスであり、Tanuki Enterprises のソフトウェアのビルドとデプロイ方法を変革します。

## タスク A. プロジェクトを作成する

1. GitLab グループに移動します。

1. **Create new project** を選択します。

1. **Create blank project** を選択します。

1. プロジェクト名に `Tanuki App` と入力します。

1. 他のオプションはすべてデフォルトのままにして **Create project** を選択します。

 > このプロジェクトでは、`main.go` が単純に実行されるように設定します。後で、CI/CD プロセスのより複雑な機能を示すためにアプリケーションの機能を拡張します。

## タスク B. Go ファイルをセットアップする

1. プロジェクト内で **+ > New file** を選択します。

1. ファイル名フィールドに `main.go` と入力します。

1. `main.go` 内に次のコードを追加します:

    ```go
    package main

    import(
      "fmt"
    ) 

    func main() {
      fmt.Println("Tanuki Enterprises is up and running!")
    }
    ```

1. **Commit changes** を選択し、適切なコミットメッセージを追加して **Commit changes** を選択します。

    次に `go.mod` ファイルを作成します:

1. プロジェクトのメインページに戻ります。

1. **+ > New file** を選択します。

1. Filename フィールドに `go.mod` と入力します。

1. ファイルに次のコードを追加します:

    ```go
    module array

    go 1.22.2
    ```

1. **Commit changes** を選択し、適切なコミットメッセージを追加して **Commit changes** を選択します。

ローカルで開発している場合、`go run .` コマンドでこのアプリケーションを実行でき、`go build` でビルドできます。GitLab パイプラインでこのプロセスを再現する方法を確認しましょう。

## タスク C. ビルドプロセスを作成する

すべてのパイプラインジョブは `.gitlab-ci.yml` ファイルに記述します。まず、次の手順でプロジェクトのルートにこのファイルを作成します:

1. プロジェクトのホームページに移動します。

1. **+ > New file** を選択します。

1. Filename フィールドに `.gitlab-ci.yml` と入力します。

1. script セクションでは、ジョブの一部として実行するスクリプトやコードを指定する必要があります。Go アプリケーションをビルドするため、次のコードを `.gitlab-ci.yml` ファイルにコピーします:

    ```yaml
    default:
      image: golang

    stages:
      - build

    build go:
      stage: build
      script:
        - go build
    ```

1. **Commit changes** を選択し、適切なコミットメッセージを追加して **Commit changes** を選択します。

## タスク D. ビルドを確認する

1. コードをコミットすると、パイプラインがすぐに開始されます。パイプラインを確認するには **Build > Pipelines** に移動します。

    ここでは、すべてのプロジェクトパイプラインの概要が表示されます。各パイプラインには次の詳細が表示されます:
    - パイプラインのステータス
    - パイプライン名、ID、ブランチ、トリガーとなったコミット
    - パイプラインを作成した人
    - ステージごとのパイプラインステータスの内訳

1. パイプラインの詳細を表示するには、パイプラインの **Status** を選択します。この UI では、各ステージとそのステージに関連するジョブを示すパイプラインのグラフが表示されます。

1. **build go** ジョブを選択します。

      > この画面には、ジョブの実行中に実行されたすべてのコマンドを含むジョブの詳細が表示されます。右側には、ジョブの所要時間、ジョブの完了時刻、ジョブがキューに入っていた時間、ジョブを完了したランナー、ジョブをトリガーしたコミット、およびジョブに関連するパイプラインの詳細が表示されます。

      これらの各項目を詳しく見ていきましょう。まずジョブに移動します:

1. **Build > Jobs** を選択します。

1. **build go** ジョブを選択します。

      ジョブログを順を追って確認し、各ジョブステージをより深く理解しましょう。最初に次のような内容が表示されます:

      **ジョブ環境のセットアップ**

      ```bash
      Running with gitlab-runner 17.0.0 (44feccdf)
        on ilt-gitlab-runner xZL9uN-ry, system ID: s_e1aab81f250d
      Resolving secrets
      Preparing the "docker-autoscaler" executor
      00:33
      Dialing instance https://www.googleapis.com/compute/v1/projects/demosys-ilt-training-cloud/zones/us-central1-c/instances/added-scale-ilt-runner-group-1138177e63ca2c1e...
      Instance https://www.googleapis.com/compute/v1/projects/demosys-ilt-training-cloud/zones/us-central1-c/instances/added-scale-ilt-runner-group-1138177e63ca2c1e connected
      Using Docker executor with image golang ...
      Pulling docker image golang ...
      Using docker image sha256:92c72d51a65b247eb5672073192030d4964cee907770b0569665499e9880fa48 for golang with digest golang@sha256:ab1f5c47de0f2693ed97c46a646bde2e4f380e40c173454d00352940a379af60 ...
      ```

      GitLab ラボ環境はランナーマネージャーを使用してジョブのスケーリングを支援します。ジョブが開始されると、まずキューに入ります。ランナーマネージャーが利用可能になると、ジョブを取得します。その後インスタンスを作成し、定義された Docker イメージ（この場合 golang イメージ）でセットアップします。このイメージはランナーにプルされてロードされ、ジョブリクエストの処理を開始する準備が整います。

      **Git リポジトリのクローン**

      環境のセットアップ後、GitLab はリポジトリをランナーにクローンします。

      ```bash
      Preparing environment
      00:02
      Running on runner-xzl9un-ry-project-25858-concurrent-0 via ilt-autoscale-runner-manager-2...
      Getting source from Git repository
      00:02
      Fetching changes with git depth set to 20...
      Initialized empty Git repository in /builds/training-users/session-c68006ec/iua7f2zr/fundamentals/qa/cool-app-qa/.git/
      Created fresh repository.
      Checking out e4f0de4d as detached HEAD (ref is initial-code)...
      Skipping Git submodules setup
      ```

      この操作が完了すると、すべてのコードがランナーで利用可能になります。重要な点として、ランナーは Git リポジトリにアクセスしてリモートリポジトリへのリンクを持つことになります。これにより次の 2 つのことが可能になります:

      - Git リポジトリ内の任意のファイルにアクセスして使用できる
      - ジョブプロセス中に変更を加えた場合、変更をリポジトリにコミットできる

      **オプションタスク:**
      実際に動作を確認してみましょう。ジョブスクリプトに `ls` コマンドを追加してみてください。これにより現在のディレクトリがリストされ、ランナーにクローンされたすべてのファイルが表示されます。

      ```yaml
      default:
        image: golang

      stages:
        - build

      build go:
        stage: build
        script:
          - ls
          - go build
      ```

      **スクリプトの実行:**
      環境のセットアップとリポジトリのクローンが完了すると、ジョブスクリプトが実行されます。

      ```bash
      Executing "step_script" stage of the job script

      Using docker image sha256:5905f95343e84d1f8f14aff8f8b83747fb39ea0e0fad52a9d14cf41860295fff for golang with digest golang@sha256:f43c6f049f04cbbaeb28f0aad3eea15274a7d0a7899a617d0037aec48d7ab010 ...
      $ go build
      Cleaning up project directory and file based variables

      Job succeeded
      ```

      まとめると、パイプラインでジョブを実行する際に念頭に置くべき重要な考え方がいくつかあります:

      - ジョブは通常、ジョブスクリプトを実行するために Docker イメージを使用する
      - 各ジョブは独自の Docker コンテナ内の別々のランナーで実行されるため、ジョブが相互に干渉する心配がない
      - ジョブの実行中は Git リポジトリや他のシステムリソースに完全にアクセスできる

## タスク E. アーティファクトとステージ間のデータ共有

ジョブの実行方法を確認したとき、各ジョブが独自のランナーで実行されることがわかりました。場合によっては、作業の重複を避けるためにジョブ間でデータを共有したいことがあります。これを行うには、アーティファクトを使用します。アーティファクトはジョブの結果を保存し、他のジョブが使用できるように GitLab に保管します。

アーティファクトがなければ、アプリケーションを 2 回ビルドする必要があります。

1. **Build > Pipeline Editor** を選択してパイプラインエディターに戻ります。

1. `run` という新しいステージと `run go` というジョブを作成します。

      ```yaml
        run go:
        stage: run
        script:
          - go build
      ```

1. `go build` コマンドは `array` という名前の新しいバイナリを作成します。`.array` コマンドを使用してバイナリを実行できます。

      ```yaml
      run go:
        stage: run
        script:
          - go build
          - ./array
      ```

      現時点では、`.gitlab-ci.yml` ファイルは次のようになっているはずです:

      ```yaml
      default:
        image: golang

      stages:
        - build
        - run

      build go:
        stage: build
        script:
          - go build

      run go:
        stage: run
        script:
          - go build
          - ./array
      ```

      このジョブのセットでは、Go アプリケーションを 2 回ビルドすることになります。アプリケーションを 1 回だけビルドしてジョブ間で受け渡す方が効率的です。

1. これを行うには、最初のジョブのアプリバイナリにアーティファクトを定義します。次のコードを追加します:

      ```yaml
        artifacts:
          paths: 
            - array
      ```

      ジョブは次のようになります:

      ```yaml
      build go:
        stage: build
        script:
          - go build
        artifacts:
          paths: 
            - array
      ```

      このジョブが実行されると、`go build` が `array` という名前の新しいバイナリをビルドします。アーティファクトの path プロパティは GitLab に array ファイルを保存するよう指示します。これにより、以降のすべてのジョブが array バイナリをダウンロードして実行時に使用します。

      このセットアップにより、`run go` ジョブで `go build` コマンドを実行する必要がなくなります。前のジョブからダウンロードされたバイナリを実行するだけです。

1. `run go` スクリプトから `go build` コマンドを削除します。これにより次の設定が得られます:

    ```yaml
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

1. **Commit changes** を選択します。

1. 左サイドバーで **Build > Pipelines** を選択してパイプラインに移動します。

1. ジョブが正常に実行されることを確認します。

> `run go` ジョブのログに、`Downloading artifacts for build go (318742)` のような行が表示されます。これはジョブ間でのアーティファクトの実際のダウンロードを示しています。

## まとめ

最初の GitLab CI/CD パイプラインを実装した後、Tanuki Enterprises はすぐに改善を実感しました。コードのコミットごとに Docker コンテナ内で標準化されたビルドが自動的にトリガーされ、「自分のマシンでは動く」という問題が解消されました。ステージ間でコンパイル済みバイナリを共有するためにアーティファクトを使用することで、冗長なビルドが排除され、ビルド時間が 5〜10 分から 2 分未満に短縮され、毎週約 15〜20 時間の節約につながりました。エンジニアリングマネージャーはビルドのステータス、タイミング、ログを完全に把握でき、コード変更後数分以内にコード品質に関するフィードバックが得られるようになりました。

## ラボガイド完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandson)を参照できます。

## ご提案について

ラボに変更を加えたい場合は、マージリクエスト経由で変更を送信してください。
