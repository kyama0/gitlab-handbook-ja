---
title: "GitLab Duo の原則 - ハンズオンラボ: セキュリティ脆弱性に対処する"
description: "このハンズオンガイドでは、GitLab Duo を使ってセキュリティ脆弱性を説明する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduolab5/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:33:12Z
translator: claude
stale: false
---

> 完了までの推定時間: 15 分

## 目標

このラボでは、GitLab Duo がセキュリティ脆弱性の説明と解決をどのように支援するかを確認します。

## タスク A. セキュリティ脆弱性を説明する

1. *Duo Demo* プロジェクトに移動します。

1. **Build > Pipeline editor** を選択します。

1. 既存のすべての YAML を削除し、次のコードを追加します。`.gitlab-ci.yml` は次のようになります:

    ```yml
    stages:
      - test

    include:
      - template: Security/SAST.gitlab-ci.yml
    ```

1. 任意のコミットメッセージを入力し、ターゲットブランチが **main** に設定されていることを確認して **Commit changes** を選択します。

1. 左サイドバーで **Code > Repository** を選択します。

1. `main.go` を選択します。

1. **Edit > Edit single file** を選択します。

1. すべてのコードを次のコードに置き換えます:

    ```go
    package main

    import (
      "net/http"
      "fmt"
      "math/rand"
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

1. 任意のコミットメッセージを入力し、ターゲットブランチを **main** に設定して **Commit changes** を選択します。

1. 左サイドバーで **Build > Pipelines** を選択してパイプラインが完了するまで待ちます。

1. パイプラインが完了したら、左サイドバーで **Secure > Vulnerability Report** に移動します。

1. 脆弱性「Allocation of resources without limits or throttling」を選択します。

    > これにより脆弱性の概要ページに移動します。

1. 脆弱性概要の右上にある **AI vulnerability management** ドロップダウンを選択します。

1. **Explain with AI** を選択します。

1. GitLab Duo が生成した応答を確認して、脆弱性を理解します。

## タスク B. 脆弱性を解決する（オプション）

  > 脆弱性を明確に理解したところで、修正しましょう!

1. 脆弱性概要の右上にある **AI vulnerability management** ドロップダウンを選択します。

1. **Resolve with AI** を選択します。

1. Duo が新しいブランチを作成し、必要なコード変更を行って、MR を作成してリダイレクトします。

1. 新しく作成された MR の **Changes** タブを選択して、Duo が行った変更に問題がないか確認します。

1. 問題がなければ **Overview** タブに戻り、Duo の MR の説明を読んで **Merge** をクリックします。

1. このマージのパイプラインが正常に完了したら、**Vulnerability Report** を再確認して脆弱性が解決されていることを確認します。

## ラボガイド完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduo)を参照できます。

## ご提案について

ラボに変更を加えたい場合は、マージリクエスト経由で変更を送信してください。
