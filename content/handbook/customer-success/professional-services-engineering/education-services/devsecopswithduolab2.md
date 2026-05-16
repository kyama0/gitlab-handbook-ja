---
title: "GitLab Duo Principles - ハンズオンラボ: GitLab Duo Chat によるコード生成"
description: "このハンズオンガイドでは、GitLab Duo を使ってコードを生成・説明する方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/devsecopswithduolab2/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:19:14Z"
translator: claude
stale: false
lastmod: "2025-07-30T07:18:00-04:00"
---

> 推定所要時間: 15 分

## 目標

GitLab Duo を使い始めるにあたり、基本的なコード生成機能を試します。コード生成では、特定のプログラミング問題を解決するコードを GitLab Duo にプロンプトで要求できます。

## タスク A. シンプルなコードを生成する

このタスクでは、GitLab Duo を使って Go で基本的な「hello world」プログラムを生成します。このタスクにより、GitLab Duo でプロジェクトにコードを作成するプロセスに慣れることができます。

1. GitLab Duo Principles プロジェクトに移動します。

1. **Code > Web IDE** を選択します。

    > **注:** このラボでは Web IDE を使用しますが、ローカル IDE でも Duo Chat やその他の Duo ツールを使用できます。[利用可能な拡張機能を確認する](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/supported_extensions.html#supported-editor-extensions)。

1. Web IDE で GitLab Duo Chat のアイコンを見つけます。このアイコンは左サイドバーの最後のアイテムで、GitLab のアイコンが表示されています。

1. チャットのテキスト入力に `How do I create a hello world Go program?` と入力します。

1. Duo Chat はこれと同様のコードで応答します:

   ```go
   package main

   import "fmt"

   func main() {
     fmt.Println("hello world")
   }
   ```

   > **注:** AI ジェネレーターは本質的に非決定論的です。つまり、AI にプロンプトを入力すると、あなたの回答が他の人の回答と異なる可能性があります。ラボガイドと大幅に異なる出力が表示された場合は、ラボガイドのスニペットを使用して他の例に沿って進められるようにしてください。

1. GitLab Duo が生成したコードをコピーします。

1. 左サイドバーのエクスプローラーアイコンを選択してコードに戻ります。

1. プロジェクト名の横にある **New File** アイコンを選択します。新しいファイルはリポジトリのルートレベルに保存します。

1. ファイル名を `main.go` にします。

1. ファイル内に AI が生成したコードを貼り付けます。

これで Go でシンプルな hello world プログラムが作成できました。次のセクションでは、AI が生成したコードを説明する方法を学びます。

## タスク B. AI コードの説明

コードを生成できることはソフトウェア開発プロセスの一部にすぎません。多くの場合、書かれたコードを理解できることも重要です。同僚が書いたコードであれ AI が生成したコードであれ、GitLab Duo は提供したコードスニペットを説明できます。

1. Web IDE で `main.go` ファイルのすべてのコードをハイライトします。

1. 左サイドバーから GitLab Duo アイコンを選択します。

1. コードをハイライトしたまま、チャットプロンプトのテキストボックスに `/explain` と入力します。

1. プロンプトの結果として、ハイライトされたすべてのコードの説明が表示されます。

## タスク C. コードをコミットする

コードが生成されてコードの内容を理解したら、コードをプロジェクトにコミットできます。

1. 左サイドバーで **Source Control** を選択します。

1. 任意のコミットメッセージを入力し、`Commit and push to 'main'` を選択します。

1. `You are committing your changes to the default branch` というプロンプトが表示された場合は、`Continue` を選択します。

1. `Go to Project` を選択して GitLab リポジトリに戻ります。

## タスク D. `.gitlab-ci.yml` ファイルを追加する

このラボの最後のステップは、Go アプリケーションをビルドするための `.gitlab-ci.yml` ファイルを作成することです。

1. プロジェクトリポジトリのルートレベルで、**(+) > This directory > New file** をクリックしてメインブランチに新しいファイルを作成します。

1. **Filename** フィールドに `.gitlab-ci.yml` と入力します。

1. 以下の YAML をファイルにコピーします。

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

   > この `.gitlab-ci.yml` ファイルには、ステージの一部として実行されるジョブ `build app` を持つ 1 つのステージ `build` があります。このジョブは `main.go` アプリを実行します。
   >
   > YAML をハイライトして、GitLab Duo Chat で `/explain` を使って CI パイプラインを説明させることも、ぜひ試してみてください。

1. **Commit changes** を選択します。**コミットメッセージ**に適切なメッセージを入力します。

1. **Target Branch** フィールドが main に設定されていることを確認します。

1. **Commit changes** を選択します。

1. パイプラインを確認するには、**Build > Pipelines** を選択してパイプラインが実行中であることを確認します。

1. パイプラインが正常に完了したら、`build app` ジョブをクリックして `main.go` アプリの出力を確認します。`build app` ジョブはビルドステージの **Stages** セクションで確認できます。

## ラボガイド完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/devsecopswithduo)を確認できます。

## ご提案

ラボへの変更を提案したい場合は、マージリクエスト経由でご提出ください。
