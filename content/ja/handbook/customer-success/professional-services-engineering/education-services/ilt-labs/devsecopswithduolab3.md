---
title: "GitLab Duo の原則 - ハンズオンラボ: Issue とマージリクエストを活用する"
description: "このハンズオンガイドでは、GitLab Duo を使って Issue とマージリクエストを作成する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduolab3/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:33:12Z
translator: claude
stale: false
---

> 完了までの推定時間: 25 分

## 目標

GitLab Duo はコード生成だけにとどまりません。GitLab Duo は DevSecOps ライフサイクルのあらゆるステージをサポートします! このラボでは、GitLab Duo がプロジェクト内の Issue とマージリクエストでどのように機能するかを確認します。

## タスク A. GitLab Duo を使って Issue を作成する

1. *Duo Demo* プロジェクトに移動します。

1. プロジェクト内の左サイドバーから **Plan > Work Items** を選択します。

1. **New item** を選択します。

1. **Type** フィールドで **Issue** が選択されていることを確認します。

1. タイトルに `Update hello world visuals` と入力します。

1. 今は説明欄を空白のままにして、**Create issue** を選択して Issue を作成します。

1. Duo に説明の作成を手伝ってもらいましょう。Issue 一覧から新しく作成した Issue を選択して開きます。チャットウィンドウに次のプロンプトを入力します: `Please generate me a description for this issue. We want to make our "hello world" application more visually appealing for the end user. We want to incorporate the Go Figure module into our application to print out more exciting text.`

1. **Submit** を選択します。

   応答は次のようになります:

   ```text
   Issue: The "hello world" application lacks visual appeal

   The current "hello world" application prints basic text without any formatting or visual elements. We want to enhance the user experience and make the application output more interesting to look at.

   The Go Figure module allows printing text in different styles and formats. Integrating this module into our "hello world" code will let us customize how the message is displayed, such as changing fonts, colors, effects and more. This will make our application stand out more and be more enjoyable for end users to interact with.
   ```

1. この応答をコピーし、**edit** ボタンを選択して AI が生成した説明を Description フィールドに貼り付け、Issue の説明として追加します。

1. Issue を自分自身にアサインして **Save changes** を選択します。

## タスク B. マージリクエストを作成する

1. 作成した Issue から **Create merge request** を選択します。

1. `This MR introduces the Go Figure module to our "hello world" application` のような簡単な説明を追加します。

1. 他のオプションはすべてデフォルトのままにして **Create merge request** を選択します。

## タスク C. MR にコードを追加する

1. MR 内で **Code > Open in Web IDE** を選択します。

1. 左サイドバーから Duo Chat アイコンを選択します。

1. チャットに次のプロンプトを入力します: `How could I use the go-figure module of go to print hello world in a different font?`

   次のような応答が返ってきます:

   ```go
   package main

   import (
       "github.com/common-nighthawk/go-figure"
   )

   func main() {
       myFigure := figure.NewFigure("hello world", "", true)
       myFigure.Print()
   }
   ```

   > **注意**: `fmt` モジュールをインポートしなくなっていることを確認してください。使用しないモジュールをインポートするとパイプラインエラーが発生します。

1. 生成されたコードをコピーします。

1. 左サイドバーから Explorer アイコンを選択します。

1. `main.go` を選択します。

1. `main.go` の内容を AI が生成したコードで置き換えます（コピー&ペースト、または Duo Chat ウィンドウのコードスニペットにある挿入ボタンを使います）。

1. 左サイドバーから **Source Control** を選択します。

1. 任意のコミットメッセージを入力して **Commit** ボタンを選択し、コード変更をコミットします。

1. **Go to MR** を選択してマージリクエストに戻ります。

## タスク D. コード変更を要約する

1. マージリクエスト画面で **Edit** を選択します。

1. Description 入力欄の直上にある **Summarize code changes** を選択します。

1. AI が生成した新しい説明を確認します。

1. **Save changes** を選択します。

## タスク E. 根本原因分析

> パイプラインが失敗していることに気づいたかもしれません。

1. MR から、失敗した直近のパイプラインを選択します。

1. 失敗したジョブを選択します。

1. ジョブ出力の下部にある **Troubleshoot** を選択します。

1. これにより、`失敗の根本原因` の説明が記載された Duo チャットウィンドウが開きます。**注意:** Duo チャットを開いて `/troubleshoot` コマンドを使ってこの説明を生成することもできます。

1. 失敗したジョブの説明と修正例を確認します。

   > 推奨される修正はローカルで Go の依存関係を更新するというグッドプラクティスに従っています。このデモでは `.gitlab-ci.yml` ファイルにこの依存関係を追加します。以下の手順に従ってこの変更を適用してください。これらの手順は GitLab Duo が提案する修正を反映しています。

1. マージリクエストに戻ります。

1. **Code > Open in Web IDE** を選択します。

1. `.gitlab-ci.yml` ファイルを開きます。

1. `build app` ジョブの `script` セクションに、`go-figure` 依存関係を取得するスクリプトを追加します。

   設定ファイルは次のようになります:

   ```yml
   stages:
     - build

   default:
     image: golang:latest

   build app:
     stage: build
     script:
       - go get github.com/common-nighthawk/go-figure
       - go run main.go
   ```

1. Go モジュールを扱うようになったので、go.mod ファイルが必要になります。ここでも Duo が助けてくれます! GitLab Duo のチャットパネルに次のように入力します: `Please create the go.mod file for this application`。すると次のような返答が返ってきます:

   ```go
   module hello-world-figure

   go 1.21

   require github.com/common-nighthawk/go-figure v0.0.0-20210622060536-734e95fb86be
   ```

1. このコードをコピーして `go.mod` という名前の新しいファイルに追加します。

1. 左サイドバーから Source Control アイコンを選択します。

1. 任意のコミットメッセージを入力して **Commit** ボタンを選択し、コード変更をコミットします。

1. **Go to MR** を選択してマージリクエストに戻ります。

## タスク F. Duo をコードレビュアーとして追加する

GitLab Duo はコードレビュアーとして機能し、コード品質の向上を支援してコードの改善提案を行います。

1. MR の **Reviewers** セクションで **Edit** オプションをクリックし、*Duo* と入力します。ユーザー名 *@GitLabDuo* の GitLab Duo ユーザーオプションが表示されます。

1. @GitLabDuo ユーザーを選択し、Reviewers セクションの外側をクリックしてレビュアーを追加します。

1. GitLab Duo アカウントが MR のレビューを開始します。レビューには数分かかります。提案された変更を **Apply suggestion** を選択し、コミットメッセージを入力して **Apply** を選択することで MR に適用できます。

1. 提案のレビューが完了したら、マージリクエストを `Draft` に設定している場合は `Mark as ready` を選択します。

1. **Merge** を選択してコードの更新をメインブランチにマージします。

## ラボガイド完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduo)を参照できます。

## ご提案について

ラボに変更を加えたい場合は、マージリクエスト経由で変更を送信してください。
