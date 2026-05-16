---
title: "GitLab Duo Principles - ハンズオンラボ: GitLab Duo Chat によるコード生成"
description: "このハンズオンガイドでは、GitLab Duo を使ってコードを生成・説明する方法について説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduolab2/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-05T14:54:53-05:00"
---

> 完了までの推定時間: 15 分

## 目標

GitLab Duo の基本的なコード生成機能をテストすることから始めます。コード生成を使用すると、特定のプログラミング問題を解決するコードを GitLab Duo にプロンプトで依頼できます。

## タスク A. 簡単なコードを生成する

このタスクでは、GitLab Duo を使用して Go で基本的な「hello world」プログラムを生成します。このタスクは、GitLab Duo を使ってプロジェクトでコードを作成するプロセスに慣れるのに役立ちます。

1. *Duo Demo* プロジェクトに移動します。

1. **Code > Web IDE** を選択します。

    > **注意:** このラボでは Web IDE を使用していますが、ローカルの IDE でも Duo Chat やその他の Duo ツールを使用できます。[利用可能な拡張機能を参照してください](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/supported_extensions.html#supported-editor-extensions)。

1. Web IDE で GitLab Duo Chat アイコンを探します。このアイコンは左サイドバーの最後の項目で、チャットバブルアイコンが表示されています。

1. チャットテキスト入力に `How do I create a hello world Go program?` と入力します。

1. Duo Chat は次のようなコードで応答します:

   ```go
   package main

   import "fmt"

   func main() {
     fmt.Println("hello world")
   }
   ```

   > **注意:** AI ジェネレーターは本質的に非決定論的です。つまり、AI にプロンプトを入力すると、回答が他の人の回答と異なる可能性があります。ラボガイドとは大きく異なる出力を受け取った場合は、ラボガイドのスニペットを使用して他の例に従えるようにしてください。

1. GitLab Duo が生成したコードをコピーします。

1. 左サイドバーのエクスプローラーアイコンを選択してコードに戻ります。

1. プロジェクト名の横にある **New File** アイコンを選択します。新しいファイルはリポジトリのルートレベルに保存されます。

1. ファイルに `main.go` という名前をつけます。

1. ファイル内に AI が生成したコードを貼り付けます。

これで Go で簡単な hello world プログラムを作成しました。次のセクションでは、AI が生成したコードを説明する方法を学びます。

## タスク B. AI コードを説明する

コードを生成できることは、ソフトウェア開発プロセスの一部に過ぎません。多くの場合、書かれたコードを理解することも重要です。コードが同僚や AI によって生成されたものであっても、GitLab Duo は提供したコードスニペットを説明できます。

1. Web IDE で `main.go` ファイルのすべてのコードをハイライトします。

1. 左サイドバーから GitLab Duo Chat アイコンを選択します。

1. コードがハイライトされた状態で、チャットプロンプトのテキストボックスに `/explain` と入力します。

1. プロンプトの結果として、ハイライトしたすべてのコードの説明が表示されます。

## タスク C. コードをコミットする

コードが生成され、コードを理解できたので、コードをプロジェクトにコミットできます。

1. 左サイドバーで **Source Control** を選択します。

1. 任意のコミットメッセージを入力し、`Commit and push to 'main'` を選択します。

1. `You are committing your changes to the default branch` というプロンプトが表示された場合は、`Continue` を選択します。

1. `Go to Project` を選択して GitLab リポジトリに戻ります。

## タスク D. .gitlab-ci.yml ファイルを追加する

このラボの最後のステップは、Go アプリケーションをビルドするための `.gitlab-ci.yml` ファイルを作成することです。

1. プロジェクトリポジトリのルートレベルで、**(+) > This directory > New file** をクリックして main ブランチに新しいファイルを作成します。

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

   > この `.gitlab-ci.yml` ファイルには、ステージの一部として実行される `build app` ジョブを持つ `build` ステージが 1 つあります。このジョブは `main.go` アプリを実行します。

1. このコードをコミットします。**Commit message** には適切なメッセージを入力します。

1. **Branch** の選択が「Commit to the current `main` branch」に設定されていることを確認します。

1. **Commit changes** を選択します。

1. パイプラインを表示するには、**Build > Pipelines** を選択してパイプラインが実行されていることを確認します。

1. パイプラインの実行が正常に完了したら、`build app` ジョブをクリックして main.go アプリの出力を確認します。`build app` ジョブは、build ステージの **Stages** セクションにあります。

## ラボガイドの完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduo)を参照できます。

## ご提案は?

ラボへの変更をご希望の場合は、マージリクエストで変更内容を送信してください。
