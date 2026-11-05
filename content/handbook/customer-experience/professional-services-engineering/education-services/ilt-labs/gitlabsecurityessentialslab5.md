---
title: "GitLab Security Essentials - ハンズオンラボ: ポリシーの有効化"
description: "このハンズオンガイドは、GitLab でポリシーを有効化する手順を案内します。"
upstream_path: /handbook/customer-experience/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentialslab5/
upstream_sha: ab93800e4c241789ac67785899fa20ffa1eb0854
translated_at: "2026-11-05T15:29:07.766988+00:00"
translator: codex
stale: false
lastmod: "2026-11-04T12:01:28-05:00"
---


> 推定所要時間: 15 分

## 目標 {#objectives}

コンプライアンススキャンにより、インスタンス、グループ、プロジェクトのマージリクエストとセキュリティスキャンを制御できます。このラボでは、グループレベルでセキュリティポリシーとマージリクエストポリシーを有効にする方法を説明します。

## タスク A. セキュリティポリシーのセットアップ {#task-a-setting-up-a-security-policy}

1. `My Test Group - XXXXX` というグループに移動します。X はあなたのユーザー名に置き換えます。

1. 左サイドバーで **Secure > Policies** を選択します。

1. **New policy** を選択します。

1. **Scan execution policy** で、**Select policy** を選択します。

1. **Name** に、`Group security policy` と入力します。

1. **Policy status** が **Enabled** に設定されていることを確認します。

1. **Policy Scope** では、**all projects in this group without exceptions** に適用します。

1. Configuration Type を `Template` から `Custom` に変更します。

1. Actions で、**SAST scan** を実行するように設定します。**Runner Tags** が **selected automatically** に、**Security job template** が **default** に設定されていることを確認します。

1. Conditions で、**Triggers** を選択します。**all branches** を対象に、**No exceptions** でポリシーを実行します。

1. **Create new project with the new policy** を選択します。

1. **Merge** を選択して設定を完了します。

## タスク B. スキャン実行ポリシーの動作確認 {#task-b-scan-execution-policies-in-action}

1. グループに移動します。

1. **New project** を選択します。

1. **Create blank project** を選択します。

1. **Project name** フィールドに `Security Compliance Testing` と入力します。

1. 他のすべてのオプションをデフォルトのままにし、**Create project** を選択します。

1. プロジェクトのリポジトリで、**+ > New file** を選択します。

1. **Filename** に、`main.py` と入力します。

1. ファイルに次のコードを追加します。

    ```py
    print("Testing scanners!")
    ```

1. 変更を main ブランチにコミットします。

1. 左サイドバーで **Build > Pipelines** を選択します。

1. コミットによって作成されたパイプラインを選択します。

1. パイプライン内のジョブを確認します。`.gitlab-ci.yml` の設定がなくても、このコミットで `SAST` スキャンが実行されていることを確認してください。これで、グループ内のプロジェクトでは、`.gitlab-ci.yml` ファイルにまだ定義されていなくても、常にセキュリティスキャンが実行されます。

## タスク C. マージリクエストポリシー {#task-c-merge-request-policies}

セキュリティスキャンを設定したら、セキュリティ脆弱性を含むマージリクエストをブロックできることが望ましいです。このセクションでは、そのためのマージリクエストポリシーを作成します。

1. グループに移動します。

1. 左サイドバーで **Secure > Policies** を選択します。

1. **New policy** を選択します。

1. **Merge request approval policy** で、**Select policy** を選択します。

1. **Name** に、`Merge Request Security` と入力します。

1. **Policy status** で、**Enabled** が選択されていることを確認します。

1. **Policy scope** では、ポリシーが  **all projects in this group without exceptions** に適用されていることを確認します。

1. **Rules** で、**scan type** を **Security Scan** に設定します。

1. スキャナーには **All scanners** を選択します。

1. **all default branches** を対象にスキャンを実行します。

1. スキャンの例外は **No exceptions** とし、検出する脆弱性は **Any** と指定します。

1. 重大度を **All severity levels** に設定します。

1. ステータスを **New** と **All vulnerability states** に設定します。

1. **Actions** で、**Owner** ロールからの承認を 1 件要求します。

1. **Override project approval settings** で、**Prevent approval by merge request's author** と **Prevent approval by commit author** のオプションの**チェックを外す**ようにしてください。

    > グループ内にアカウントが 1 つしかないため、これらのオプションをオフにしています。本番環境では、通常はオンにします。

1. 他のすべてのオプションをデフォルトのままにし、**Configure with a merge request** を選択します。

1. **Merge** を選択します。

## タスク D. マージリクエストポリシーの動作確認 {#task-d-merge-request-policies-in-action}

1. グループに戻ります。

1. **Security Compliance Testing** プロジェクトを選択します。

1. 左サイドバーで **Code > Branches** を選択します。

1. **New branch** を選択します。

1. ブランチに `test_policy` という名前を付け、**Create branch** を選択します。

1. **Create merge request** を選択します。

1. **Mark as draft** のチェックを外し、**Create merge request** を選択します。

1. **Code > Open in Web IDE** を選択します。

1. `main.py` ファイルを開き、次のコードを追加します。

    ```py
    import subprocess

    server_ip = input("Enter your server ip: ")
    subprocess.run(["ping", server_ip])

    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. ソース管理アイコンを選択し、`Commit and push to 'test_policy'` を選択します。

1. MR に戻ります。

1. パイプラインが完了するまで待ちます。完了したら、`This merge request has policy violations and errors` というコメントを確認します。

1. これらの問題を解決するために、**Code > Open in Web IDE** を選択します。

1. `main.py` ファイルを開き、`main.py` のコードを次のように編集します。

    ```py
    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. ソース管理アイコンを選択し、`Commit and push to 'test_policy'` を選択します。

1. MR に戻ります。

1. パイプラインが完了するまで待ちます。完了したら、`Security policy violations have been resolved` というコメントを確認します。

## ラボガイド完了 {#lab-guide-complete}

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-experience/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentials)を参照できます。

## ご提案・改善点 {#suggestions}

このラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
