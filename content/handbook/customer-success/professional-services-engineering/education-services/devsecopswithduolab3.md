---
title: "GitLab Duo Principles - ハンズオンラボ: Issue とマージリクエストの操作"
description: "このハンズオンガイドでは、GitLab Duo を使って Issue とマージリクエストを作成する方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/devsecopswithduolab3/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:19:14Z"
translator: claude
stale: false
lastmod: "2026-03-13T08:28:57-04:00"
---

> 推定所要時間: 20 分

## 目標

GitLab Duo はコード生成だけにとどまりません。GitLab Duo は DevSecOps ライフサイクルのあらゆるステージをサポートできます。このラボでは、GitLab Duo がプロジェクト内の Issue とマージリクエストをどのように操作できるかを確認します。

## タスク A. GitLab Duo で Issue を作成する

1. GitLab Duo Principles プロジェクトに移動します。

1. プロジェクトの左サイドバーから **Plan > Issues** を選択します。

1. **New issue** を選択します。

1. タイトルに `Update hello world visuals` と入力します。

1. Duo Chat に次を入力します: `Create an issue description for our team. We want to make our "hello world" application more visually appealing for the end user. We want to incorporate the Go Figure module into our application to print out more exciting text.`

1. 応答は次のようになります:

   ```text
   Issue: The "hello world" application lacks visual appeal

   The current "hello world" application prints basic text without any formatting or visual elements. We want to enhance the user experience and make the application output more interesting to look at.

   The Go Figure module allows printing text in different styles and formats. Integrating this module into our "hello world" code will let us customize how the message is displayed, such as changing fonts, colors, effects and more. This will make our application stand out more and be more enjoyable for end users to interact with.

   ***
   _Description was generated using AI_

   ```

1. Duo Chat からの応答をコピーして Issue 説明フィールドに貼り付け、自分自身を Issue に割り当て、**Create issue** を選択します。

## タスク B. マージリクエストを作成する

1. 作成した Issue から **Create merge request** を選択します。

1. `This MR introduces the Go Figure module to our "hello world" application` のような簡単な説明を追加します。

1. 他のオプションはデフォルトのままにして **Create merge request** を選択します。

## タスク C. MR にコードを追加する

1. MR で **Code > Open in Web IDE** を選択します。

1. 左サイドバーから Duo Chat アイコンを選択します。

1. チャットに次のプロンプトを入力します: `How could I use the go-figure module of go to print hello world in a different font?`

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

1. 生成されたコードをコピーします。

1. 左サイドバーからエクスプローラーアイコンを選択します。

1. `main.go` を選択します。

1. `main.go` の内容を、コピーして貼り付けるか、Duo Chat ウィンドウのコードスニペットの挿入ボタンを使って AI が生成したコードに置き換えます。

1. `.gitlab-ci.yml` ファイルは次のようになっているはずです:

   ```yml
   stages:
     - build

   default:
     image: golang:latest

   build app:
     stage: build
     script:
       - go run main.go
   ```

1. 左サイドバーから **Source Control** を選択します。

1. 任意のコミットメッセージを入力し、**Commit** ボタンを選択してコード変更をコミットします。

1. **Go to MR** を選択してマージリクエストに戻ります。

## タスク D. コード変更を要約する

1. マージリクエストで **Edit** を選択します。

1. 説明入力の上にある **Summarize code changes** を選択します。

1. AI が生成した新しい説明を確認します。

1. **Save changes** を選択します。

## タスク E. 根本原因分析

> おっと！パイプラインが失敗したことに気づいたかもしれません。

1. MR から最新の失敗したパイプライン実行を選択します。

1. 失敗したジョブを選択します。

1. ジョブ出力の下部にある **Troubleshoot** を選択します。

1. これにより、`根本的な失敗原因` の説明を含む Duo Chat ウィンドウが開きます。**注:** Duo Chat を開いて `/troubleshoot` コマンドを使用してこの説明を生成することもできます。

1. 失敗したジョブの説明と修正例を確認します。

   > 提案された修正は、Go の依存関係をローカルで更新するという良いプラクティスに従っています。デモ目的のため、この依存関係を `.gitlab-ci.yml` ファイルに追加します。以下の手順でこの変更を適用してください。これらの手順は GitLab Duo からの提案された修正を反映しています。

1. マージリクエストに戻ります。

1. **Code > Open in Web IDE** を選択します。

1. `.gitlab-ci.yml` ファイルを開きます。

1. `build app` ジョブの `script` セクションに、`go-figure` の依存関係を取得するスクリプトを追加します。

   設定ファイルは以下のようになっているはずです:

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

1. 左サイドバーから Source Control アイコンを選択します。

1. 任意のコミットメッセージを入力し、**Commit** ボタンを選択してコード変更をコミットします。

1. **Go to MR** を選択してマージリクエストに戻ります。

1. マージリクエストからパイプラインが完了するのを待ちます。パイプラインが成功したことを確認できるはずです。

1. マージリクエストを `Draft` に設定している場合は、`Mark as ready` を選択します。

1. **Merge** を選択してコードの更新をメインブランチにマージします。

## ラボガイド完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/devsecopswithduo)を確認できます。

## ご提案

ラボへの変更を提案したい場合は、マージリクエスト経由でご提出ください。
