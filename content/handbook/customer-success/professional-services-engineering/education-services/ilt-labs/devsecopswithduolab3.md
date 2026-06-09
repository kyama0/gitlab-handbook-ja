---
title: "GitLab Duo Principles - ハンズオンラボ: Issue とマージリクエストを活用する"
description: "このハンズオンガイドでは、GitLab Duo を使って Issue とマージリクエストを作成する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduolab3/
upstream_sha: c6f416c14ee9f53cb671d49ff11a9671c68d9326
lastmod: 2026-06-09T10:04:35-04:00
translated_at: "2026-06-09T00:00:00Z"
translator: claude
stale: false
---

> 完了までの目安時間: 25 分

## 目的 {#objectives}

GitLab Duo はコード生成にとどまりません。GitLab Duo は DevSecOps ライフサイクルのあらゆる段階であなたを支援できます。このラボでは、GitLab Duo がプロジェクト内で Issue とマージリクエストをどのように扱えるかを見ていきます。

## タスク A. GitLab Duo で Issue を作成する {#task-a-creating-an-issue-with-gitlab-duo}

1. *Duo Demo* プロジェクトに移動します。

1. プロジェクト内で、左サイドバーから **Plan > Work Items** を選択します。

1. **New item** を選択します。

1. **Type** フィールドで **Issue** が選択されていることを確認します。

1. Title に `Update hello world visuals` と入力します。

1. 説明は今は空のままにし、**Create issue** を選択して Issue を作成します。

1. 説明の作成を Duo に手伝ってもらいましょう。Issue リストから先ほど作成した Issue を選択して開きます。Chat ウィンドウで、次のプロンプトを入力します: `Please generate me a description for this issue. We want to make our "hello world" application more visually appealing for the end user. We want to incorporate the Go Figure module into our application to print out more exciting text.`

1. **Submit** を選択します。

   レスポンスは次のようなものになります:

   ```text
   Issue: The "hello world" application lacks visual appeal

   The current "hello world" application prints basic text without any formatting or visual elements. We want to enhance the user experience and make the application output more interesting to look at.

   The Go Figure module allows printing text in different styles and formats. Integrating this module into our "hello world" code will let us customize how the message is displayed, such as changing fonts, colors, effects and more. This will make our application stand out more and be more enjoyable for end users to interact with.
   ```

1. このレスポンスをコピーし、**Edit** ボタンを選択して、AI が生成した説明を Description フィールドに貼り付けて Issue の説明として追加します。

1. Issue を自分自身にアサインし、**Save changes** を選択します。

## タスク B. マージリクエストを作成する {#task-b-creating-a-merge-request}

1. 先ほど作成した Issue から、**Create merge request** を選択します。

1. ソースブランチ名はそのままにし、**Create merge request** を選択します。

1. `This MR introduces the Go Figure module to our "hello world" application` のような簡単な説明を追加します。

1. その他のオプションはすべて既定のままにし、**Create merge request** を選択します。

## タスク C. MR にコードを追加する {#task-c-add-code-to-your-mr}

1. MR で、**Code > Open in Web IDE** を選択します。

1. 左サイドバーから Duo Chat アイコンを選択します。

1. チャットで、次のプロンプトを入力します: `How could I use the go-figure module of go to print hello world in a different font?`

   次のようなレスポンスが返ってきます:

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

   > **NOTE**: `fmt` モジュールはもうインポートしていないことを確認してください。使わなくなったため、インポートが残っているとパイプラインエラーの原因になります。

1. 生成されたコードをコピーします。

1. 左サイドバーから Explorer アイコンを選択します。

1. `main.go` を選択します。

1. `main.go` の内容を、コピー＆ペーストするか、Duo Chat ウィンドウのコードスニペットにある挿入ボタンを使って、AI が生成したコードで置き換えます。

1. 左サイドバーから **Source Control** を選択します。

1. 任意のコミットメッセージを入力し、**Commit and push to `name-of-branch`** ボタンを選択してコード変更をコミットします。

1. **Go to MR** を選択してマージリクエストに戻ります。

   > ここでパイプラインが失敗することに気づくかもしれません。これは想定どおりです。この後すぐにトラブルシューティングを行います。

## タスク D. コード変更を要約する {#task-d-summarizing-your-code-changes}

1. マージリクエストで、**Edit** を選択します。

1. Description 入力欄のすぐ上で、**Summarize code changes** を選択します。

1. AI が新しく生成した説明を確認します。

1. **Save changes** を選択します。

## タスク E. 根本原因分析 {#task-e-root-cause-analysis}

> おっと！パイプラインが失敗したことに気づいたかもしれません。

1. MR から、失敗した最新のパイプライン実行を選択します。

1. 失敗したジョブを選択します。

1. ジョブ出力の下部で、**Troubleshoot** を選択します。

1. これにより、`root cause of failure`（失敗の根本原因）の説明とともに Duo チャットウィンドウが開きます。**注:** Duo チャットを開いて `/troubleshoot` コマンドを使い、この説明を生成することもできました。

1. 失敗したジョブの説明と修正例を確認します。

   > 提案された修正は、Go の依存関係をローカルで更新するというグッドプラクティスに従ったものです。このデモの目的のために、この依存関係を `.gitlab-ci.yml` ファイルに追加します。以下の手順に従ってこの変更を適用してください。これらの手順は GitLab Duo が提案した修正を反映しています。

1. マージリクエストに戻ります。

1. **Code > Open in Web IDE** を選択します。

1. `.gitlab-ci.yml` ファイルを開きます。

1. `build app` ジョブの `script` セクションに、`go-figure` 依存関係を取得するスクリプトを追加します。

   設定ファイルは次のようになるはずです:

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

1. Go モジュールを扱うようになったので、`go.mod` ファイルが必要になります。これもまた Duo が手伝ってくれます。GitLab Duo チャットパネルで、次のように入力します: `Please create the go.mod file for this application`。次のようなものが返ってきます:

   ```go
   module hello-world-figure

   go 1.21

   require github.com/common-nighthawk/go-figure v0.0.0-20210622060536-734e95fb86be
   ```

1. このコードをコピーし、`go.mod` という名前の新しいファイルに追加します。

1. 左サイドバーから Source Control アイコンを選択します。

1. 任意のコミットメッセージを入力し、**Commit** ボタンを選択してコード変更をコミットします。

1. **Go to MR** を選択してマージリクエストに戻ります。

## タスク F. Duo をコードレビュアーとして追加する {#task-f-adding-duo-as-a-code-reviewer}

GitLab Duo はコードレビュアーとして機能し、コード品質の向上を支援したり、コードを改善するための更新や修正を提案したりできます。

1. MR の **Reviewers** セクションで、**Edit** オプションをクリックし、*Duo* と入力します。*@GitLabDuo* というユーザー名の GitLab Duo ユーザーオプションが表示されるはずです。

1. *@GitLabDuo* ユーザーを選択し、Reviewers セクションの外をクリックしてレビュアーを追加します。

1. これで GitLab Duo アカウントが MR のレビューを開始し、完了まで数分かかります。**Apply suggestion** を選択し、コミットメッセージを入力してから **Apply** を選択することで、提案を MR に自由に追加できます。

1. 提案の確認が終わったら、マージリクエストを `Draft` に設定していた場合は `Mark as ready` を選択します。

1. **Merge** を選択して、コードの更新を main ブランチにマージします。

## ラボガイド完了 {#lab-guide-complete}

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduo)を参照できます。

## 提案はありますか？ {#suggestions}

ラボに変更を加えたい場合は、マージリクエスト経由で変更を送信してください。
