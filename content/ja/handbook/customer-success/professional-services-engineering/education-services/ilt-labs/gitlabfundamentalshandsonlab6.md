---
title: "GitLab 基礎 - ハンズオンラボ: セキュリティスキャナーの実装"
description: "このハンズオンガイドでは、CI/CDプロセスにセキュリティスキャナーを追加するプロセスを学習します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandsonlab6/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 30分

## 目標

このラボでは、CI/CDパイプラインのオプション機能であるSASTを使用して、コードのセキュリティ脆弱性を特定します。GitLabの脆弱性レポートは、各パイプライン実行で見つかった新旧の脆弱性を表示します。詳細は[ドキュメント](https://docs.gitlab.com/ee/user/application_security/sast/)を参照してください。

## タスク A. SASTコンポーネントの検索

GitLabには様々なCI/CDコンポーネントが用意されており、プロジェクトに含めることができるビルド済みのCI/CD設定です。GitLabインスタンスで利用可能なすべてのコンポーネントを確認するには:

1. 左サイドバーで **Search or go to** を選択します。

1. 表示されるダイアログで **Explore** を選択します。

1. 左サイドバーで **CI/CD Catalog** を選択します。これにより、GitLabインスタンスで利用可能なすべてのCI/CDカタログアイテムの一覧が表示されます。このラボでは、プロジェクトにSASTを追加します。SASTコンポーネントを選択します。

CI/CDコンポーネントを選択すると、コンポーネントの使用方法と設定オプションを説明する `Readme` が表示されます。SASTコンポーネントでは、次のコードを使って含めることができると示されています:

```yaml
include:
  - component: $CI_SERVER_FQDN/components/sast/sast@1.0.0
```

これをCI/CDファイルに追加しましょう。

## タスク B. SASTコンポーネントの追加

1. ページの左上にあるTanukiロゴをクリックしてCI/CDプロジェクトに移動し、`Cool App QA` プロジェクトをクリックします。

1. 左サイドバーで **Code > Branches** を選択します。

1. `initial-code` ブランチを選択します。

1. **Build > Pipeline Editor** を選択します。

1. ファイルの先頭（imageの下）に、mainバージョンのSASTインポートを追加します。

    ```yaml
    include:
      - component: $CI_SERVER_FQDN/components/sast/sast@1.0.0
    ```

1. ファイルのstagesセクションに、以下のように `test` という名前のステージを追加します:

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

1. **Branch** が `initial-code` に設定されていることを確認します。**Commit changes** を選択します。

1. 変更をコミットした後、左サイドバーで **Build > Pipelines** に移動します。

1. 最新のパイプラインを選択します。

1. *semgrep-sast* という名前の新しいジョブが表示されます。このジョブは、`include` キーワードを使用してインポートされたセキュリティスキャンです。

## タスク C. `run.py` の追加とSASTスキャン結果の確認

このタスクでは、既知の脆弱性を含むファイルを追加し、SASTがそれを検出するかどうかを確認します。

1. パンくずリストのプロジェクト名をクリックして **Project overview** ページに戻ります。

1. ブランチドロップダウンを使用して `initial-code` ブランチに切り替えます。

1. プロジェクトランディングページの上部、ブランチドロップダウンの右側にある **(+) > This directory > New file** をクリックします。

1. **File name** フィールドに `run.py` と入力します。

1. 以下の内容をファイルにコピーします:

    ```python
    import subprocess

    in = input("Enter your server ip: ")
    subprocess.run(["ping", in])

    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. **Commit changes** を選択し、適切な **Commit message** を追加して、**Commit changes** ボタンをクリックします。`initial-code` ブランチのコードをマージします。

1. 左側のナビゲーションペインで **Build > Pipelines** をクリックします。

1. パイプラインテーブルの行の上部で、**running**（まだ実行中の場合）または **passed**（パイプラインが完了した場合）のステータスラベルをクリックします。

    > SASTスキャンには少し時間がかかる場合があります。コーヒーでも飲みながらお待ちください。

1. SASTスキャンが完了したら、ページを更新して、パイプラインの詳細ページに表示される **Security** という新しいタブをクリックします。

1. 一覧表示されている脆弱性をクリックして、`run.py` のSASTスキャンで検出された潜在的なセキュリティ問題について確認します。

1. 問題を修正するためにコードを編集し（`subprocess.run` コマンドを削除するなど）、変更をコミットしてみてください。脆弱性レポートにまだその問題が表示されますか?

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandson)を確認できます。

## ご提案はありますか?

ラボへの変更を希望する場合は、マージリクエストで変更を送信してください。
