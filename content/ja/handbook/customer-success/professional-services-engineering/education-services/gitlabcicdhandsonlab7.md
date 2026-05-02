---
title: "GitLab CI/CD - ハンズオンラボ: アーティファクトの使用"
description: "このハンズオンガイドでは、ジョブアーティファクトの作成と保存について解説します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandsonlab7/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T04:07:10Z"
translator: claude
stale: false
---

> 所要時間の目安: 20〜25分

## 目標

GitLab のアーティファクトとは、ジョブ内で生成され、後のステージの他のジョブに渡されるファイルです。同じステージ内の他のジョブにアーティファクトを渡すことはできません。パイプラインで生成されたアーティファクトには、後からアクセスしてダウンロードすることができます。詳細については、[こちら](https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html)をクリックしてください。

このラボでは、`.gitlab-ci.yml` ファイルでアーティファクトを作成する方法を学びます。アーティファクトを作成した後、GitLab の UI でアーティファクトを確認します。

### タスク A: `main.go` ファイルの追加

1. 前のラボで作成した **CICD Demo** プロジェクトを開きます。

1. **Code > Repository** に移動し、**+ > This directory > New file** をクリックして新しいファイルを追加します。

1. **Filename** フィールドに `main.go` と入力します。

1. 以下のコードをファイルに貼り付けます。

    ```go
    package main

    import (
        "fmt"
        "net/http"
    )

    func helloworld() string {
        return "Hello World!!"
    }

    func healthcheck() string {
        return "Health OK!"
    }

    func livenesscheck() string {
        return "I am alive!!!"
    }

    func main() {
        http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
            fmt.Fprintf(w, helloworld())
        })

        http.HandleFunc("/healthz", func(w http.ResponseWriter, r *http.Request) {
            fmt.Fprintf(w, healthcheck())
        })

        http.HandleFunc("/liveness", func(w http.ResponseWriter, r *http.Request) {
            fmt.Fprintf(w, livenesscheck())
        })

        http.ListenAndServe(":8080", nil)
    }

    ```

1. **Commit message** フィールドに `Add main.go file` と入力し、**Target Branch** が `main` に設定されていることを確認して、**Commit changes** をクリックします。

### タスク B: パイプラインにアーティファクトを追加する

1. 左のサイドバーで **Code > Repository** をクリックします。

1. `.gitlab-ci.yml` ファイルを選択して内容を確認します。**Edit > Edit single file** をクリックします。ファイルの末尾に以下のスニペットを貼り付けます。

    ```yml
    build app:
      image: golang:latest
      stage: build
      script:
        - go build -o app main.go
      artifacts:
        paths:
        - app
        expire_in: 1 hour
    ```

1. **Commit message** フィールドに `Add CI artifacts` と入力し、**Target Branch** が `main` に設定されていることを確認して、**Commit changes** をクリックします。

1. 左側のナビゲーションペインで **Build > Pipelines** をクリックし、最新のパイプライン実行のステータスアイコンをクリックします。

1. `build app` ジョブが完了したら、クリックしてジョブの出力ログを確認します。

    > ジョブが `go.mod` が見つからないというメッセージで失敗した場合は、成功するまでジョブを再試行してください。これは断続的に発生する Go ビルドのバグです。

1. ページ右側の **Job artifacts** パネルで **Browse** をクリックし、**build app** パイプラインジョブによって作成された `app` アーティファクトがダウンロード可能であることを確認します。

## ラボガイドの完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson)も参照できます。

## ご意見・ご提案?

*GitLab CI/CD のハンズオンガイド* に変更を加えたい場合は、マージリクエストで変更内容を提出してください！
