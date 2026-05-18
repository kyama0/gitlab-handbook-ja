---
title: "GitLab Duo Principles - ハンズオンラボ: GitLab Duo を使って新しいコードを書く"
description: "このハンズオンガイドでは、GitLab Duo を使ってコードとテストを生成する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduolab4/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:33:12Z
translator: claude
stale: false
lastmod: "2025-12-01T18:31:34+00:00"
---

> 完了までの推定時間: 25 分

## 目標

このラボでは、GitLab Duo がプロジェクト内でどのようにコードの作成とテストを支援するかを確認します。

## タスク A. コードサジェストを使って新しい関数を書く

1. *Duo Demo* プロジェクトのルートに移動します。

1. `main.go` ファイルを選択します。

1. **Edit > Open in Web IDE** を選択します。

1. `import` ブロックと `main` 関数の間に、次のコメントを入力します:

   ```text
   // write a function called print_phrase that contains a list of string values. It takes in an index of the list and returns the value at the provided index from a list as a string
   ```

1. Enter キーを押すと、コードの余白に小さな Tanuki アイコンが表示されます。コードが表示されるまで待ちます。コードが表示されたら Tab キーを押します。

1. 新しい `myFigure` オブジェクトの一部として `main()` 関数内で新しい関数を呼び出します。引数としてインデックスを必ず指定してください。サンプルコードでは、インデックスとして 0 が指定されています。

1. この操作を行うと、コードは次のようになります:

   ```go
   package main

   import (
       "github.com/common-nighthawk/go-figure"
   )

    // write a function called print_phrase that contains a list of string values. It takes in an index of the list and returns the value at the provided index from a list as a string
    func print_phrase(index int) string {
        phrases := []string{
            "Hello, world!",
            "Go is awesome",
            "Programming is fun",
            "Keep coding",
            "Practice makes perfect",
        }

        if index < 0 || index >= len(phrases) {
            return "Invalid index"
        }

        return phrases[index]
    }

   func main() {
       myFigure := figure.NewFigure(print_phrase(0), "", true)
       myFigure.Print()
   }
   ```

   > 入力したプロンプトの性質上、リストからランダムな単語を求めているため、ほとんどのユーザーで異なるコードが生成されます。`phrases :=` の定義で異なる単語が表示されても問題ありません。

## タスク B. コードテストを生成する

> GitLab Duo が生成するコードは概して正しいですが、本番環境で使用する前にコードのエラーをテストするのがベストプラクティスです。幸いなことに、GitLab Duo はテスト生成プロセスも支援してくれます!

1. `func print_phrase() string` 関数内のコードをすべて選択します。

1. 左サイドバーの GitLab Duo Chat アイコンを選択します。

1. プロンプト `/tests` を入力します。次のようなテストが返ってきます:

   ```go
    package main

    import (
        "testing"
    )

    func TestPrintPhrase(t *testing.T) {
        tests := []struct {
            name     string
            index    int
            expected string
        }{
            {"Valid index 0", 0, "Hello, world!"},
            {"Valid index 2", 2, "Programming is fun"},
            {"Valid index 4", 4, "Practice makes perfect"},
            {"Negative index", -1, "Invalid index"},
            {"Index out of range", 5, "Invalid index"},
        }

        for _, tt := range tests {
            t.Run(tt.name, func(t *testing.T) {
                result := print_phrase(tt.index)
                if result != tt.expected {
                    t.Errorf("print_phrase(%d) = %s; want %s", tt.index, result, tt.expected)
                }
            })
        }
    }
   ```

   > いつでも `/explain` を使ってこのコードが何をしているかを確認できます。

1. テストをプロジェクトに追加するには、まず GitLab Duo が生成したコードをコピーします。

1. 左サイドバーから Explorer アイコンを選択します。

1. テストをプロジェクトに追加するために、`print_phrases.test.go` という名前の新しいファイルを作成します。

1. Duo がパッケージとテストのインポートをまだ追加していない場合は、ファイルの先頭に次のコードを追加します:

   ```go
   package main

   import "testing"
   ```

1. テストのインポートの下に、GitLab Duo が生成したテストを新しい行に貼り付けます。

1. 左サイドバーから Source Control を選択し、任意のコミットメッセージを入力して **Commit and push to main** を選択します。

1. **Go to Project** を選択してプロジェクトに戻ります。

## タスク C. CI/CD パイプラインでテストを実行する

1. **Build > Pipeline editor** に移動します。

1. `stages` セクションに `test` という新しいステージを追加します。

1. `build app` ジョブの下に `test` という新しいジョブを作成します。

1. テストを実行するために `go test` コマンドを追加します。`.gitlab-ci.yml` ファイルは次のようになります:

   ```yml
   stages:
       - build
       - test

   default:
       image: golang:latest

   build app:
       stage: build
       script:
           - go get github.com/common-nighthawk/go-figure
           - go run main.go

   test:
       stage: test
       script:
           - go get github.com/common-nighthawk/go-figure
           - go test ./...
   ```

1. **Commit changes** を選択します。

1. パイプラインが完了するまで待ち、結果を確認します。

テストに合格したパイプラインが確認できるはずです。ジョブが失敗した場合は、**Troubleshoot** を使ってエラーをトラブルシューティングしてください。

## ラボガイド完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduo)を参照できます。

## ご提案について

ラボに変更を加えたい場合は、マージリクエスト経由で変更を送信してください。
