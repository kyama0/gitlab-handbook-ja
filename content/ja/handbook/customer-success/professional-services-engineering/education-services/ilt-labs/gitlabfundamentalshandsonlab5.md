---
title: "GitLab 基礎 - ハンズオンラボ: 継続的インテグレーションと継続的デリバリー"
description: "このハンズオンガイドでは、プロジェクトにCI/CDを追加するプロセスを学習します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandsonlab5/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 30分

## 目標

このラボでは、QAプロジェクト用の基本的なCI/CDパイプラインを作成する方法を学習します。

## タスク A. コードベースのセットアップ

CI/CDプロセスを作成する前に、CI/CDプロセスを実行するコードが必要です。まず、`Cool App QA` プロジェクトに移動します。

1. プロジェクトで **+ > New file** を選択します。

1. **Filename** フィールドに `main.go` と入力します。

1. `main.go` に以下のコードを追加します:

    ``` go
    package main

    import(
        "fmt"
    ) 

    func main() {
        fmt.Println("We are up and running!")
    }

    ```

1. **Commit changes** を選択します。

1. コミットの適切なメッセージを入力し、ブランチ名を `initial-code` に変更します。

1. マージリクエストのチェックボックスにチェックが入っていることを確認し、**Commit changes** をクリックします。

1. マージリクエストのオプションをすべてデフォルトのままにして、**Create merge request** を選択します。

    ここから、コードにもう1つファイル（`go.mod` ファイル）を追加します。追加するには:

1. 左サイドバーで **Code > Branches** を選択します。

1. `initial-code` を選択します。

1. **+ > New file** を選択します。

1. **Filename** フィールドに `go.mod` と入力します。

1. 以下のコードをファイルに追加します:

    ```go
    module array

    go 1.22.2
    ```

1. **Commit changes** を選択します。

1. **Commit to current `initial-code` branch** が選択されていることを確認します。**Commit changes** を選択します。

コードが作成できたので、コードのCI/CDプロセスを作成できます。

## タスク B. CI/CDプロセスの作成

先ほど書いたコードのCI/CDプロセスを作成しましょう。目標は、書いたコードをビルドするプロセスを作成することです。これを行うには、`.gitlab-ci.yml` ファイルを作成する必要があります。このファイルには、CI/CDプロセスのすべてのジョブとステージが含まれます。

1. 左サイドバーで **Code > Repository** を選択します。

1. **+ > New file** を選択します。

1. **Filename** に `.gitlab-ci.yml` を入力します。

1. 以下のコードを `.gitlab-ci.yml` ファイルにコピーします:

      ```yml
      default:
        image: golang

      stages:
        - build

      build go:
        stage: build
        script:
          - go build
          - ./array
      ```

      > このインスタンスのすべてのGitLab CI/CDジョブはDockerコンテナで実行されます。`default` 行は、この `.gitlab-ci.yml` ファイルのジョブを実行するためのDockerイメージを定義します。その下に1つのステージ **build** を定義しています。このステージには1つのジョブがあり、`go build` というスクリプトを実行します。その結果、Goアプリケーションがコンパイルされます。`./array` はコンパイルされたアプリケーションを実行します。

1. **Commit changes** を選択します。**Commit to the current `initial-code` branch** が選択されていることを確認します。

1. **Commit changes** を選択します。

## タスク C. CI/CDプロセスの確認

1. コードをコミットすると、パイプラインがすぐに開始されます。パイプラインを確認するには、**Build > Pipelines** に移動します。

    ここには、プロジェクトのすべてのパイプラインのサマリーが表示されます。各パイプラインには以下の詳細が表示されます:
    - パイプラインのステータス
    - パイプライン名、ID、ブランチ、トリガーとなったコミット
    - パイプラインを作成したユーザー
    - ステージ別のパイプラインステータスの内訳

1. パイプラインの詳細を確認するには、パイプラインの **Status** を選択します。このUIでは、各ステージとそのステージに関連するジョブを示すパイプラインのグラフが表示されます。

1. **build go** ジョブを選択します。

> この画面では、ジョブの実行中に実行されたすべてのコマンドを含むジョブの詳細が表示されます。右側には、ジョブの実行時間、ジョブ完了時刻、ジョブのキュー時間、ジョブを完了したランナー、ジョブをトリガーしたコミット、およびジョブに関連するパイプラインの詳細が表示されます。

各詳細を確認しましょう。まず、ジョブに移動します:

1. **Build > Jobs** を選択します。

1. **build go** ジョブを選択します。

ジョブログを確認して、各ジョブステージをより深く理解しましょう。最初に次のような内容が表示されます:

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

GitLabラボ環境では、ジョブのスケーリングを支援するためにランナーマネージャーを使用しています。ジョブが開始すると、まずキューに入ります。ランナーマネージャーが利用可能になると、ジョブを引き受けます。次に、インスタンスを作成し、定義されたDockerイメージ（この場合はgolangイメージ）でセットアップします。このイメージがランナーにプルされてロードされ、ジョブリクエストの処理を開始する準備が整います。

**Gitリポジトリのクローン**

環境のセットアップ後、GitLabはリポジトリをランナーにクローンします。

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

この後、すべてのコードがランナーで利用可能になります。重要な点として、ランナーにはGitリポジトリへのアクセス権があり、リモートリポジトリへのリンクが設定されています。これは2つのことを意味します:

- Gitリポジトリ内の任意のファイルにアクセスして使用できます
- ジョブプロセス中に変更を加えた場合、リポジトリにコミットして戻すことができます

**オプションのタスク:**
これを実際に確認したいですか? ジョブスクリプトに `ls` コマンドを追加してみましょう。これにより現在のディレクトリが一覧表示され、ランナーにクローンされたすべてのファイルが表示されます。

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
    - ./array
```

**スクリプトの実行:**
環境がセットアップされ、リポジトリがクローンされると、ジョブスクリプトが実行されます。

```bash
Executing "step_script" stage of the job script

Using docker image sha256:5905f95343e84d1f8f14aff8f8b83747fb39ea0e0fad52a9d14cf41860295fff for golang with digest golang@sha256:f43c6f049f04cbbaeb28f0aad3eea15274a7d0a7899a617d0037aec48d7ab010 ...
$ go build
Cleaning up project directory and file based variables

Job succeeded
```

まとめとして、パイプラインでジョブを実行する際に覚えておくべき重要なポイントがあります。

- ジョブは通常、ジョブスクリプトを実行するためにDockerイメージを使用します

- すべてのジョブは独自のDockerコンテナ内の別のランナーで実行されるため、ジョブが互いに干渉する心配はありません

- ジョブの実行中は、Gitリポジトリや他のシステムリソースに完全にアクセスできます

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandson)を確認できます。

## ご提案はありますか?

ラボへの変更を希望する場合は、マージリクエストで変更を送信してください。
