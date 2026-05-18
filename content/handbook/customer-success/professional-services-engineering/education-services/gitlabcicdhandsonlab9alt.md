---
title: "GitLab CI/CD - ハンズオンラボ: コード品質スキャン"
description: "このハンズオンガイドでは、コード品質スキャナーを使ってコードの問題を発見・修正する方法を解説します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandsonlab9alt/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T04:07:10Z"
translator: claude
stale: false
lastmod: "2024-05-30T07:49:53+00:00"
---

> 所要時間の目安: 15〜20分

## 目標

コード品質スキャンにより、品質と複雑さについてソースコードを分析できます。コード品質スキャンの目標は、プロジェクトのコードをシンプルで読みやすく、保守しやすい状態に保つことです。このラボでは、プロジェクトでコード品質スキャンを有効化して結果を確認する方法を学びます。コード品質スキャンの詳細については、[こちら](https://docs.gitlab.com/ee/ci/testing/code_quality.html)をクリックしてください。

### タスク A. コード品質の問題を含む Python ファイルの追加

1. 左のナビゲーションペインを使用して、**Code > Repository** をクリックします。

1. ウィンドウ上部の **+ > This directory > New file** をクリックして新しいファイルを作成します。

1. **File name** に `HelloWorld.py` と入力します。

1. 以下の Python コードをファイルの内容として貼り付けます:

    ```python
    def hello_world(a, b, c, d, e, f, g):
        print("Hello world")
        # TODO: improve this function
    ```

1. **Commit message** フィールドに `Add Python code` と入力します。

1. **Target Branch** を `main` に設定します。

1. `Commit changes` をクリックします。

### タスク B. コード品質スキャンを含む .gitlab-ci.yml の設定

1. 左のナビゲーションペインで **Code > Repository** をクリックします。

1. 既存の `.gitlab-ci.yml` ファイルをクリックします。

1. 青い **Edit** ドロップダウンをクリックして **Edit single file** を選択し、ファイルを編集します。

1. ファイル内の既存のコードをすべて削除します。以下のファイル内容でコードを置き換えます:

    ```yml
    stages:
      - test

    test-job:
      stage: test
      script:
        - echo "Pipeline needs at least one job"

    include:
      - template: Code-Quality.gitlab-ci.yml

    # TODO: should we refactor this file?
    ```

  > このコードは、まず `test` という名前の単一ステージを定義します。次に `test-job` という名前の単一ジョブが定義され、`test` ステージの一部として実行されます。`include` セクションはコード品質テンプレートを含めることでコード品質スキャンを有効にします。最後に、`TODO` コマンドがコード品質の問題としてフラグされるコードの例として追加されています。

1. **Commit message** フィールドに `Add CI/CD configuration file that includes code quality scanning` と入力します。

1. **Target Branch** を `main` に設定します。

1. `Commit changes` をクリックします。

### タスク C. コード品質スキャン結果の確認

1. 左のナビゲーションペインで **Build > Pipelines** をクリックします。

1. 一番上の行は、前のセクションで `.gitlab-ci.yml` ファイルをコミットしたときに実行が開始されたパイプラインです。左側のステータスアイコンが **passed** と表示されるまで待ちます。

  > トレーニング環境ではコード品質スキャナーが完了するまで最大5分かかる場合があります。この間、軽食休憩に最適なタイミングです。

1. パイプラインのステータスが **passed** になったら、ステータスアイコンをクリックしてパイプラインの詳細を確認します。

1. パイプラインの詳細画面で、パイプライングラフの上にある **Code Quality** タブをクリックします。

1. スキャナーが2つの異なるファイルで3件のコード品質の問題を発見したことに注目してください: `HelloWorld.py` で2件、`.gitlab-ci.yml` で1件です。

### タスク D. ブランチの作成

1. 左のナビゲーションペインで **Code > Branches** をクリックします。

1. **New branch** をクリックします。**Branch name** フィールドに `branch-A` と入力します。

1. **Create branch** をクリックします。

1. ウィンドウ右上の **Create merge request** をクリックします。すべての設定をデフォルト値のままにします。

1. **Create merge request** をクリックします。

### タスク E. ブランチ上の問題の修正

1. 左のナビゲーションペインで **Code > Repository** をクリックします。

1. ウィンドウ左上のブランチドロップダウンで **branch-A** を選択します。

1. `HelloWorld.py` を開き、**Edit** をクリックします。

1. 1行目を以下のコードに置き換えてコード品質の問題を修正します:

   ```python
   def hello_world(a):
   ```

1. 3行目を削除して別のコード品質の問題を修正します。

1. コミットメッセージ `Fix code quality problems` でこれらの変更をコミットします。

### タスク F. **branch-A** と **main** のコード品質を比較する

1. 左のナビゲーションペインで **Build > Pipelines** をクリックします。

1. 最新のパイプラインが **passed** ステータスを表示するまで待ちます。これには最大5分かかる場合があります。

1. 左のナビゲーションペインで **Merge requests** をクリックします。**Draft: Branch A** MR をクリックして MR の詳細ページを表示します。

1. MR の詳細ページの中ほどで **No changes to code quality** と表示されている場合は、ページを更新する必要があるかもしれません。ペインには **Code Quality scans found 2 fixed findings.** と表示されるはずです。これは **branch-A** で2件のコード品質の問題を修正したことを意味し、それらの問題は **main** では未修正のままです。

1. コード品質ペインを **展開** して、**branch-A** で修正したコード品質の問題を確認します。

1. コード品質スキャンの結果を転送または保存するには、Pipelines ページの右側にある縦の省略記号をクリックすると、JSON アーティファクトを取得できます。

## ラボガイドの完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson)も参照できます。

## ご意見・ご提案?

*GitLab CI/CD のハンズオンガイド* に変更を加えたい場合は、マージリクエストで変更内容を提出してください！
