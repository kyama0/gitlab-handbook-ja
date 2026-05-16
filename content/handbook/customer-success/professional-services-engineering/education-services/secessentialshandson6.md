---
title: "GitLab Security Essentials - ハンズオンラボ: スキャン実行ポリシーを使用したスキャンの有効化と実行"
description: "このハンズオンガイドでは、GitLab プロジェクトでスキャン実行ポリシーを有効化して使用する方法を解説します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/secessentialshandson6/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T05:28:22Z"
translator: claude
stale: false
lastmod: "2025-03-28T10:48:15-04:00"
---

> 推定所要時間: 15 分

## 目標

コンプライアンススキャンを使用すると、インスタンス、グループ、プロジェクト内のマージリクエストとセキュリティスキャンを制御できます。このラボでは、グループレベルでセキュリティポリシーとマージリクエストポリシーを有効化する方法を実演します。

## タスク A. セキュリティポリシーの設定

1. グループに移動します。

1. 左サイドバーで **Secure > Policies** を選択します。

1. **New policy** を選択します。

1. **Scan execution policy** の下で **Select policy** を選択します。

1. **Name** に `Group security policy` と入力します。

1. **Policy status** が **Enabled** に設定されていることを確認します。

1. **Policy Scope** で、**このグループ内のすべてのプロジェクト（例外なし）**に適用します。

1. Actions で、**SAST スキャン**を実行するスキャンを設定します。**Runner Tags** が **selected automatically** に設定され、**Security job template** が **default** に設定されていることを確認します。

1. Conditions で **Triggers** を選択します。ポリシーを**すべてのブランチ**で**例外なし**で実行するように設定します。

1. **Configure with a merge request** を選択します。

1. **Merge** を選択して設定を完了します。

## タスク B. セキュリティポリシースキャンの動作確認

1. グループに移動します。

1. **New project** を選択します。

1. **Create blank project** を選択します。

1. **Project name** フィールドに `Security Compliance Testing` と入力します。

1. 他のすべてのオプションをデフォルトのままにして **Create project** を選択します。

1. プロジェクトリポジトリで **+ > New file** を選択します。

1. **Filename** に `main.py` と入力します。

1. ファイルに次のコードを追加します。

    ```py
    print("Testing scanners!")
    ```

1. **Commit changes** を選択します。

1. 左サイドバーで **Build > Pipelines** を選択します。

1. コミットから作成されたパイプラインを選択します。

1. パイプライン内のジョブを確認します。`.gitlab-ci.yml` 設定が存在しないにもかかわらず、このコミットで `SAST` スキャンが実行されていることを確認します。

これで、`.gitlab-ci.yml` ファイルにまだ定義されていなくても、グループ内のプロジェクトには常にセキュリティスキャンが実行されます。

## タスク C. マージリクエストポリシー

セキュリティスキャンが整備されたので、セキュリティ脆弱性を含むマージリクエストをブロックできるようにすると理想的です。このセクションでは、この目標を達成するためのマージリクエストポリシーを作成します。

1. グループに移動します。

1. 左サイドバーで **Secure > Policies** を選択します。

1. **New policy** を選択します。

1. **Merge request approval policy** の下で **Select policy** を選択します。

1. **Name** に `Merge Request Security` と入力します。

1. **Policy status** で **Enabled** が選択されていることを確認します。

1. **Policy Scope** で、例外なしにこのグループ内のすべてのプロジェクトにポリシーを適用します。

1. **Rules** でスキャンタイプを **Security Scan** に設定します。

1. スキャナーには **All scanners** を選択します。

1. **すべてのデフォルトブランチ**に対してスキャンを実行します。

1. スキャンに**例外なし**で**任意の**脆弱性が見つかることを指定します。

1. 深刻度レベルを **All severity levels** に設定します。

1. ステータスを **New** と **All vulnerability states** に設定します。

1. **Actions** で **Owner** ロールからの承認を 1 件要求します。

1. **Override project approval settings** で、**Prevent approval by merge request's author** と **Prevent approval by commit author** オプションの**チェックを外して**ください。

    > グループに 1 つのアカウントしかないため、これらのオプションをオフに設定しています。本番環境では、これらはしばしばオンに設定されます。

1. 他のすべてのオプションをデフォルトのままにして **Configure with a merge request** を選択します。

1. **Merge** を選択します。

## タスク D. マージリクエストポリシーの動作確認

1. グループに戻ります。

1. **Security Compliance Testing** プロジェクトを選択します。

1. 左サイドバーで **Code > Branches** を選択します。

1. **New branch** を選択します。

1. ブランチ名を `test_policy` にして、**Create branch** を選択します。

1. **Create merge request** を選択します。

1. **Mark as draft** のチェックを外して、**Create merge request** を選択します。

1. **Code > Open in Web IDE** を選択します。

1. `main.py` ファイルを開いて次のコードを追加します。

    ```py

    in = input("Enter your server ip: ")
    subprocess.run(["ping", in])

    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. ブランチアイコンを選択して、`Commit and push to 'test_branch'` を選択します。

1. MR に戻ります。

1. パイプラインが完了するまで待ちます。完了したら、`This merge request has policy violations and errors` というコメントに注目します。

1. これらの問題を解決するには、**Code > Open in Web IDE** を選択します。

1. `main.py` ファイルを開いて `main.py` のコードを次のように編集します。

    ```py
    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. ブランチアイコンを選択して、`Commit and push to 'test_branch'` を選択します。

1. MR に戻ります。

1. パイプラインが完了するまで待ちます。完了したら、`Security policy violations have been resolved` というコメントに注目します。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/secessentialshandson)を参照できます。

## ご提案

*GitLab Security Essentials ハンズオンガイド*への変更を提案される場合は、マージリクエストで提出してください。
