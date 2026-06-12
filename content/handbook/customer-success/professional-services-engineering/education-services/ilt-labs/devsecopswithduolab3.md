---
title: "GitLab Duo の原則 - ハンズオンラボ: Issue とマージリクエストを扱う"
description: "このハンズオンガイドでは、GitLab Duo を使って Issue とマージリクエストを作成する方法を順を追って説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduolab3/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
lastmod: 2026-06-09T10:04:35-04:00
translated_at: "2026-06-12T14:06:50Z"
translator: claude
stale: false
model: claude-opus-4-7
---

> 完了までの推定時間: 25分

## 目的 {#objectives}

GitLab Duo はコード生成にとどまりません。GitLab Duo は DevSecOps ライフサイクルのあらゆる段階であなたを支援できます。このラボでは、GitLab Duo がプロジェクト内の Issue とマージリクエストをどのように扱えるかを確認します。

## タスク A. GitLab Duo で Issue を作成する {#task-a-creating-an-issue-with-gitlab-duo}

1. *Duo Demo* プロジェクトに移動します。

1. プロジェクトの左サイドバーから、**Plan > Work Items** を選択します。

1. **New item** を選択します。

1. **Type** フィールドで、**Issue** が選択されていることを確認します。

1. タイトルに `Update hello world visuals` と入力します。

1. 説明は今のところ空白のままにして、**Create issue** を選択して Issue を作成します。

1. 説明文を Duo に手伝ってもらいましょう。Issue 一覧から作成したばかりの Issue を選択して開きます。チャットウィンドウで、次のプロンプトを入力します: `Please generate me a description for this issue. We want to make our "hello world" application more visually appealing for the end user. We want to incorporate the Go Figure module into our application to print out more exciting text.`

1. **Submit** を選択します。

   応答は次のようなものになります:

   ```text
   Issue: The "hello world" application lacks visual appeal

   The current "hello world" application prints basic text without any formatting or visual elements. We want to enhance the user experience and make the application output more interesting to look at.

   The Go Figure module allows printing text in different styles and formats. Integrating this module into our "hello world" code will let us customize how the message is displayed, such as changing fonts, colors, effects and more. This will make our application stand out more and be more enjoyable for end users to interact with.
   ```

1. この応答をコピーし、**Edit** ボタンを選択して AI が生成した説明を Description フィールドに貼り付けることで、Issue の説明として追加します。

1. Issue を自分自身に割り当て、**Save changes** を選択します。

## タスク B. マージリクエストを作成する {#task-b-creating-a-merge-request}

1. 先ほど作成した Issue から、**Create merge request** を選択します。

1. ソースブランチ名はそのままにして、**Create merge request** を選択します。

1. `This MR introduces the Go Figure module to our "hello world" application` のような簡単な説明を追加します。

1. その他のオプションはすべてデフォルトのままにして、**Create merge request** を選択します。

## タスク C. MR にコードを追加する {#task-c-add-code-to-your-mr}

1. MR で、**Code > Open in Web IDE** を選択します。

1. 左サイドバーから Duo Chat アイコンを選択します。

1. チャットで、次のプロンプトを入力します: `How could I use the go-figure module of go to print hello world in a different font?`

   次のような応答が得られます:

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

   > **注意**: `fmt` モジュールを使用しなくなったため、これをインポートしていないことを確認してください。インポートしたままだとパイプラインエラーの原因になります。

1. 生成されたコードをコピーします。

1. 左サイドバーから、Explorer アイコンを選択します。

1. `main.go` を選択します。

1. コピー＆ペーストするか、Duo Chat ウィンドウのコードスニペットにある挿入ボタンを使って、`main.go` の内容を AI が生成したコードで置き換えます。

1. 左サイドバーから、**Source Control** を選択します。

1. 任意のコミットメッセージを入力し、**Commit and push to `name-of-branch`** ボタンを選択してコードの変更をコミットします。

1. **Go to MR** を選択して、マージリクエストに戻ります。

   > ここでパイプラインが失敗することに気づくかもしれません。それは想定どおりです。すぐにトラブルシューティングを行います。

## タスク D. コードの変更を要約する {#task-d-summarizing-your-code-changes}

1. マージリクエストで、**Edit** を選択します。

1. Description 入力欄のすぐ上にある **Summarize code changes** を選択します。

1. 新しく AI が生成した説明を確認します。

1. **Save changes** を選択します。

## タスク E. 根本原因分析 {#task-e-root-cause-analysis}

> おっと！パイプラインが失敗していることに気づいたかもしれません。

1. MR から、失敗した最新のパイプライン実行を選択します。

1. 失敗したジョブを選択します。

1. ジョブ出力の一番下で、**Troubleshoot** を選択します。

1. これにより、`root cause of failure`（失敗の根本原因）の説明とともに Duo チャットウィンドウが開きます。**注意:** Duo チャットを開いて `/troubleshoot` コマンドを使うことでも、この説明を生成できます。

1. 失敗したジョブの説明と修正例を確認します。

   > 提案された修正は、Go の依存関係をローカルで更新するというグッドプラクティスに従っています。このデモの目的では、`.gitlab-ci.yml` ファイルにこの依存関係を追加します。次の手順に従ってこの変更を適用してください。これらの手順は、GitLab Duo が提案した修正を反映したものです。

1. マージリクエストに戻ります。

1. **Code > Open in Web IDE** を選択します。

1. `.gitlab-ci.yml` ファイルを開きます。

1. `build app` ジョブの `script` セクションに、`go-figure` 依存関係を取得するスクリプトを追加します。

   設定ファイルは次のようになっているはずです:

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

1. Go モジュールを扱うようになったため、`go.mod` ファイルが必要になります。これもまた Duo が手伝ってくれます。GitLab Duo チャットパネルで、次のように入力します: `Please create the go.mod file for this application`。次のようなものが返ってきます:

   ```go
   module hello-world-figure

   go 1.21

   require github.com/common-nighthawk/go-figure v0.0.0-20210622060536-734e95fb86be
   ```

1. このコードをコピーし、`go.mod` という名前の新しいファイルに追加します。

1. 左サイドバーから、Source Control アイコンを選択します。

1. 任意のコミットメッセージを入力し、**Commit** ボタンを選択してコードの変更をコミットします。

1. **Go to MR** を選択して、マージリクエストに戻ります。

## タスク F. Duo をコードレビュアーとして追加する {#task-f-adding-duo-as-a-code-reviewer}

GitLab Duo はコードレビュアーとして機能し、コード品質の向上を支援したり、コードを改善するための更新や修正を提案したりできます。

1. MR の **Reviewers** セクションで、**Edit** オプションをクリックし、*Duo* と入力します。ユーザー名が *@GitLabDuo* の GitLab Duo ユーザーオプションが表示されるはずです。

1. *@GitLabDuo* ユーザーを選択し、Reviewers セクションの外側をクリックしてレビュアーを追加します。

1. これで GitLab Duo アカウントが MR のレビューを開始します。完了まで数分かかります。**Apply suggestion** を選択し、コミットメッセージを記述してから **Apply** を選択することで、提案された内容を自由に MR に追加できます。

1. 提案の確認が終わったら、マージリクエストを `Draft`（ドラフト）に設定していた場合は `Mark as ready` を選択します。

1. **Merge** を選択して、コードの更新を main ブランチにマージします。

## ラボガイド完了 {#lab-guide-complete}

このラボ演習を完了しました。[このコースのその他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduo)を参照できます。

## 提案はありますか？ {#suggestions}

このラボに変更を加えたい場合は、マージリクエストで変更を送信してください。
