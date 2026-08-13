---
title: "GitLab 基礎 - ハンズオンラボ: セキュリティスキャナーの実装"
description: "このハンズオンガイドでは、CI/CD プロセスにセキュリティスキャナーを追加するプロセスを学習します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandsonlab6/
upstream_sha: d8fb317567e8e271f91f602d97d453ad1a69a00a
translated_at: "2026-08-14T01:13:44+09:00"
translator: claude
stale: false
lastmod: "2026-08-13T07:16:24-04:00"
---

> 完了までの推定時間: 30 分

## 目標

このラボでは、CI/CD パイプラインのオプション機能である SAST を使用して、コードのセキュリティ脆弱性を特定します。GitLab の脆弱性レポートは、各パイプライン実行で見つかった新旧の脆弱性を表示します。詳細は[ドキュメント](https://docs.gitlab.com/ee/user/application_security/sast/)を参照してください。

## タスク A. SAST コンポーネントの検索

GitLab には様々な CI/CD コンポーネントが用意されており、プロジェクトに含めることができるビルド済みの CI/CD 設定です。GitLab インスタンスで利用可能なすべてのコンポーネントを確認するには:

1. 左サイドバーで **Search or go to** を選択してください。

1. 表示されるダイアログで **Explore** を選択してください。

1. 左サイドバーで **CI/CD Catalog** を選択してください。これにより、GitLab インスタンスで利用可能なすべての CI/CD カタログアイテムの一覧が表示されます。このラボでは、プロジェクトに SAST を追加してください。SAST コンポーネントを選択してください。

CI/CD コンポーネントを選択すると、コンポーネントの使用方法と設定オプションを説明する `Readme` が表示されます。SAST コンポーネントでは、次のコードを使って含めることができると示されています:

```yaml
include:
  - component: $CI_SERVER_FQDN/components/sast/sast@1.0.0
```

これを CI/CD ファイルに追加しましょう。

## タスク B. SAST コンポーネントの追加

1. ページの左上にある Tanuki ロゴをクリックして CI/CD プロジェクトに移動し、`Cool App QA` プロジェクトをクリックしてください。

1. 左サイドバーで **Code > Branches** を選択してください。

1. `initial-code` ブランチを選択してください。

1. **Build > Pipeline Editor** を選択してください。

1. ファイルの先頭（image の下）に、現在のバージョンの SAST インポートを追加してください。

      ```yaml
      include:
        - component: $CI_SERVER_FQDN/components/sast/sast@1.0.0
      ```

1. ファイルの stages セクションに、以下のように `test` という名前のステージを追加します:

      ```yaml
      stages:
        - build
        - test
      ```

      これらの変更を加えると、ファイルは次のようになります:

      ```yaml
      default:
        image: golang

      include:
        - component: $CI_SERVER_FQDN/components/sast/sast@1.0.0

      stages:
        - build
        - test

      build go:
        stage: build
        script:
          - go build
          - ./array
      ```

1. **Branch** が `initial-code` に設定されていることを確認してください。**Commit changes** を選択してください。

1. 変更をコミットした後、左サイドバーで **Build > Pipelines** に移動してください。

1. 最新のパイプラインを選択してください。

1. *semgrep-sast* という名前の新しいジョブが表示されます。このジョブは、`include` キーワードを使用してインポートされたセキュリティスキャンです。

## タスク C. `run.py` の追加と SAST スキャン結果の確認

このタスクでは、既知の脆弱性を含むファイルを追加し、SAST がそれを検出するかどうかを確認してください。

1. パンくずリストのプロジェクト名をクリックして **Project overview** ページに戻ってください。

1. ブランチのドロップダウンリストを使用して `initial-code` ブランチに切り替えてください。

1. プロジェクトランディングページの上部、ブランチのドロップダウンリストの右側にある **(+) > This directory > New file** をクリックしてください。

1. **File name** フィールドに `run.py` と入力してください。

1. 以下の内容をファイルにコピーします:

      ```python
      import subprocess

      in = input("Enter your server ip: ")
      subprocess.run(["ping", in])

      print("Attempting to connect to the server")
      print("Application authentication was successful")
      ```

1. **Commit changes** を選択し、適切な **Commit message** を追加して、**Commit changes** ボタンをクリックしてください。`initial-code` ブランチのコードをマージします。

1. 左側のナビゲーションペインで **Build > Pipelines** をクリックしてください。

1. パイプラインテーブルの行の上部で、**running**（まだ実行中の場合）または **passed**（パイプラインが完了した場合）のステータスラベルをクリックしてください。

    > SAST スキャンには少し時間がかかる場合があります。コーヒーでも飲みながらお待ちください。

1. SAST スキャンが完了したら、ページを更新して、パイプラインの詳細ページに表示される **Security** という新しいタブをクリックしてください。

1. 一覧表示されている脆弱性をクリックして、`run.py` の SAST スキャンで検出された潜在的なセキュリティ問題について確認してください。

1. 問題を修正するためにコードを編集し（`subprocess.run` コマンドを削除するなど）、変更をコミットしてみてください。脆弱性レポートにまだその問題が表示されますか?

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandson)を確認できます。

## ご提案はありますか?

このラボへの変更を希望する場合は、マージリクエストを通じて変更を送信してください。
