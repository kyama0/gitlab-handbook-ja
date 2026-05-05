---
title: "GitLab Duo Principles - ハンズオンラボ: セキュリティ脆弱性への対応"
description: "このハンズオンガイドでは、GitLab Duo を使ってセキュリティ脆弱性を説明する方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/devsecopswithduolab5/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:19:14Z"
translator: claude
stale: false
---

> 推定所要時間: 15 分

## 目標

このラボでは、GitLab Duo がセキュリティ脆弱性の説明と解決にどのように役立つかを確認してください。

## タスク A. セキュリティ脆弱性を説明する

1. GitLab Duo Principles プロジェクトに移動してください。

1. `.gitlab-ci.yml` ファイルを選択してください。

1. **Edit > Edit in pipeline editor** を選択してください。

1. 以前の YAML をすべて削除して、以下のコードを追加してください。`.gitlab-ci.yml` は次のようになっているはずです:

    ```yml
    stages:
      - test

    include:
      - component: $CI_SERVER_FQDN/components/sast/sast@3.0.1
    ```

1. 任意のコミットメッセージを入力し、ターゲットブランチを **main** に設定して、**Commit changes** を選択してください。

1. 左サイドバーで **Code > Repository** を選択してください。

1. `main.go` を選択してください。

1. **Edit > Edit single file** を選択してください。

1. すべてのコードを以下のコードに置き換えます:

    ```go
    package main

    import (
      "net/http"
      "fmt"
    )

    func randomGitlab(w http.ResponseWriter, r *http.Request) {
      words := []string{"git", "lab", "repo", "commit", "branch"}
      word := words[rand.Intn(len(words))]

      fmt.Fprintf(w, word)
    }

    func main() {
      http.HandleFunc("/random", randomGitlab)
      http.ListenAndServe(":8080", nil)
    }
    ```

1. 任意のコミットメッセージを入力し、ターゲットブランチを **main** に設定して、**Commit changes** を選択してください。

1. 左サイドバーで **Build > Pipelines** を選択し、パイプラインが完了するまで待ちます。

1. パイプラインが完了したら、左サイドバーで **Secure > Vulnerability Report** に移動してください。

    > レポートに `Slowloris` という 1 つの脆弱性が表示されます。

1. 脆弱性「Uncontrolled resource consumption...」を選択してください。

    > 脆弱性の概要ページに移動してください。

1. 脆弱性概要の右上にある **Explain or Resolve with AI** ドロップダウンを選択してください。

1. **Explain with AI** を選択してください。

1. GitLab Duo が生成した応答を確認して脆弱性を理解します。

## タスク B. 脆弱性を解決する

1. Duo Chat からの提案を `main.go` ファイルに適用してください。

1. 次のようになっているはずです:

    ```go
    package main

    import (
      "net/http"
      "fmt"
      "math/rand"
      "time"
    )

    func randomGitlab(w http.ResponseWriter, r *http.Request) {
      words := []string{"git", "lab", "repo", "commit", "branch"}
      word := words[rand.Intn(len(words))]

      fmt.Fprintf(w, word)
    }


    func main() {

        http.HandleFunc("/random", randomGitlab)
        // Create a new HTTP server with timeout configurations
        server := &http.Server{
            Addr:           ":8080",
            ReadTimeout:    10 * time.Second,
            WriteTimeout:   10 * time.Second,
            MaxHeaderBytes: 1 << 20, // 1 MB
        }

        // Start the server
        server.ListenAndServe()
      
    }
    ```

1. パイプラインを再実行して脆弱性が解決されたことを確認してください。

## ラボガイド完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/devsecopswithduo)を確認できます。

## ご提案

ラボへの変更を提案したい場合は、マージリクエスト経由でご提出ください。
