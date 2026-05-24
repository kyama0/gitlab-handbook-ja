---
title: "GitLab Duo Principles - ハンズオンラボ: Issue とマージリクエストを活用する"
description: "このハンズオンガイドでは、GitLab Duo を使って Issue とマージリクエストを作成する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduolab3/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
lastmod: "2026-05-20T13:54:32+01:00"
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 25 分

## 目標

GitLab Duo はコード生成にとどまりません。GitLab Duo は DevSecOps ライフサイクルのあらゆるステージであなたを支援できます！このラボでは、GitLab Duo がプロジェクト内で Issue とマージリクエストをどのように扱えるかを見ていきます。

## タスク A. GitLab Duo で Issue を作成する

1. *Duo Demo* プロジェクトに移動します。

1. プロジェクトの左サイドバーから、**Plan > Work Items** を選択します。

1. **New item** を選択します。

1. **Type** フィールドで、**Issue** が選択されていることを確認します。

1. タイトルには `Update hello world visuals` を入力します。

1. 説明は今のところ空白のままにし、**Create issue** を選択して Issue を作成します。

1. 説明には Duo の助けを借りましょう。Issue 一覧から新しく作成した Issue を選択して開きます。チャットウィンドウで次のプロンプトを入力します: `Please generate me a description for this issue. We want to make our "hello world" application more visually appealing for the end user. We want to incorporate the Go Figure module into our application to print out more exciting text.`

1. **Submit** を選択します。

   応答は次のようなものになります:

   ```text
   Issue: The "hello world" application lacks visual appeal

   The current "hello world" application prints basic text without any formatting or visual elements. We want to enhance the user experience and make the application output more interesting to look at.

   The Go Figure module allows printing text in different styles and formats. Integrating this module into our "hello world" code will let us customize how the message is displayed, such as changing fonts, colors, effects and more. This will make our application stand out more and be more enjoyable for end users to interact with.
   ```

1. この応答をコピーし、**edit** ボタンを選択して AI が生成した説明を Description フィールドに貼り付けることで、Issue の説明として追加します。

1. Issue を自分自身にアサインし、**Save changes** を選択します。

## タスク B. マージリクエストを作成する

1. たった今作成した Issue から、**Create merge request** を選択します。

1. `This MR introduces the Go Figure module to our "hello world" application` のような簡単な説明を追加します。

1. その他のオプションはすべてデフォルトのままにし、**Create merge request** を選択します。

## タスク C. MR にコードを追加する

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

   > **注意**: `fmt` モジュールをもうインポートしていないことを確認してください。使用しなくなったため、これがパイプラインエラーの原因になります。

1. 生成されたコードをコピーします。

1. 左サイドバーから、Explorer アイコンを選択します。

1. `main.go` を選択します。

1. `main.go` の内容を、コピー＆ペーストするか、Duo Chat ウィンドウのコードスニペットにある insert ボタンを使って、AI が生成したコードで置き換えます。

1. 左サイドバーから、**Source Control** を選択します。

1. 任意のコミットメッセージを入力し、**Commit** ボタンを選択してコード変更をコミットします。

1. **Go to MR** を選択してマージリクエストに戻ります。

   > ここでパイプラインが失敗することに気づくかもしれません。それは想定どおりです！この後すぐにトラブルシューティングを行います。

## タスク D. コード変更を要約する

1. マージリクエストで、**Edit** を選択します。

1. Description 入力欄のすぐ上で、**Summarize code changes** を選択します。

1. 新しく AI が生成した説明を確認します。

1. **Save changes** を選択します。

## タスク E. 根本原因分析

> あれれ！パイプラインが失敗したことに気づいたかもしれません。

1. MR から、失敗した直近のパイプライン実行を選択します。

1. 失敗したジョブを選択します。

1. ジョブ出力の一番下で、**Troubleshoot** を選択します。

1. これにより、`root cause of failure`（失敗の根本原因）の説明とともに Duo チャットウィンドウが開きます。**注意:** Duo チャットを開き、`/troubleshoot` コマンドを使ってこの説明を生成することもできました。

1. 失敗したジョブの説明と修正例を確認します。

   > 提案された修正は、Go の依存関係をローカルで更新するという優れたプラクティスに従っています。このデモの目的のため、私たちはこの依存関係を `.gitlab-ci.yml` ファイルに追加します。この変更を適用するには、以下の手順に従ってください。これらの手順は GitLab Duo の提案された修正を反映しています。

1. マージリクエストに戻ります。

1. **Code > Open in Web IDE** を選択します。

1. `.gitlab-ci.yml` ファイルを開きます。

1. `build app` ジョブの `script` セクションに、`go-figure` 依存関係を取得するスクリプトを追加します。

   設定ファイルは以下のファイルのようになるはずです:

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

1. Go モジュールを扱うことになったので、go.mod ファイルが必要になります。これもまた Duo が手伝ってくれることの一つです！GitLab Duo チャットパネルで、次のように入力します: `Please create the go.mod file for this application`。以下のようなものが返されます:

   ```go
   module hello-world-figure

   go 1.21

   require github.com/common-nighthawk/go-figure v0.0.0-20210622060536-734e95fb86be
   ```

1. このコードをコピーし、`go.mod` という名前の新しいファイルに追加します。

1. 左サイドバーから、Source Control アイコンを選択します。

1. 任意のコミットメッセージを入力し、**Commit** ボタンを選択してコード変更をコミットします。

1. **Go to MR** を選択してマージリクエストに戻ります。

## タスク F. Duo をコードレビュアーとして追加する

GitLab Duo はコードレビュアーとして機能し、コード品質の向上を支援し、コードを改善するための更新や修正を提案できます。

1. MR の **Reviewers** セクションで、**Edit** オプションをクリックし、*Duo* と入力します。ユーザー名 *@GitLabDuo* の GitLab Duo ユーザーオプションが表示されるはずです。

1. @GitLabDuo ユーザーを選択し、Reviewers セクションの外をクリックしてレビュアーを追加します。

1. GitLab Duo アカウントが MR のレビューを開始し、完了まで数分かかります。提案を MR に追加したい場合は、**Apply suggestion** を選択し、コミットメッセージを書き、**Apply** を選択してください。

1. 提案の確認が終わったら、マージリクエストを `Draft` に設定していた場合は `Mark as ready` を選択します。

1. **Merge** を選択して、コード更新を main ブランチにマージします。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduo)を確認できます。

## 提案はありますか？

ラボに変更を加えたい場合は、マージリクエスト経由で変更を提出してください。
</content>
