---
title: "GitLab Compliance - ハンズオンラボ: パイプライン実行ポリシー"
description: "このハンズオンガイドでは、プロジェクトでパイプライン実行ポリシーを有効化して使用する方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandsonlab5/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-14T10:08:46+01:00"
---

> 完了までの推定時間: 15分

## 目標

CI/CD ジョブが一貫してコンプライアンスに準拠した方法で実行されるようにするために、パイプライン実行ポリシーを通じてジョブ設定を強制できます。このラボでは、プロジェクトでパイプライン実行ポリシーを有効化および設定する練習をします。

## タスク A. 標準パイプラインの作成

まず、コンプライアンスプロジェクトで使用する標準パイプラインを作成します。

1. ILT グループに戻ります。

1. **New project** を選択します。

1. **Create blank project** を選択します。

1. プロジェクト名に `CICD Template` と入力します。

1. 他のオプションはすべてデフォルトのままにして **Create project** を選択します。

1. **+ > New file** を選択します。

1. **Filename** に `.gitlab-ci.yml` と入力します。

1. ファイルに以下の内容を追加します:

    ```yml
    stages:
        - test

    include:
        component: ilt.gitlabtraining.cloud/components/sast/sast@main

    semgrep-sast:
        rules:
            - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
    ```

1. これらの変更をプロジェクトの main ブランチにコミットします。

この CI/CD 設定には SAST スキャナーが含まれています。これをパイプライン実行ポリシーに追加することで、プロジェクトが常に SAST スキャンを実行するようにできます。これをプロジェクトに設定する方法を見てみましょう。

## タスク B. パイプライン実行ポリシーの追加

1. `Compliance project` に戻ります。

1. 左サイドバーで **Secure > Policies** を選択します。

1. **New policy** を選択します。

1. **Pipeline execution policy** の下にある **Select policy** を選択します。

1. **Name** を `Enforce Security` に設定します。

1. **Actions** の下で、**CICD Template** プロジェクトから **Inject** を選択します。

1. ファイルパスを `.gitlab-ci.yml` ファイルに向けます。

1. すべてのオプションをデフォルトのままにして **Configure with merge request** を選択します。

1. **Merge** を選択します。

1. `Compliance project` プロジェクトに戻ります。

    > これらの変更をテストするために、プロジェクトに変更を加えましょう。

1. 左サイドバーで **Code > Repository** を選択します。

1. **+ > New file** を選択します。

1. **Filename** に `test.py` と入力します。内容に以下のコードを追加します:

```python
import hashlib as h

h.md5('1')
```

1. **Commit changes** を選択します。

1. コミットメッセージに「Added some python code for security scanning to test」などを追加します。

1. **Branch** の選択を **Commit to a new branch** に変更し、新しいブランチに **add-code-for-sast** という名前を付けます。

1. **Create a merge request for this change** が選択されていることを確認して **Commit changes** をクリックします。

1. マージリクエストのすべてのオプションをデフォルトのままにして **Create merge request** をクリックします。

1. 作成されたブランチパイプラインを確認します。`Compliance Project` で定義されていないにもかかわらず `semgrep-sast` ジョブがあることに注目します。このジョブはパイプライン実行ポリシーから来ています。ポリシーを設定した際に 'inject' キーワードを使用したため、パイプラインにジョブを*追加*できたことに注意してください。代わりに 'override' キーワードを使用した場合は、パイプライン内のジョブの*代わりに*このジョブが実行されます。

1. マージリクエストに戻ります。SAST スキャナーによって検出された 1 件の新しい脆弱性があることを確認します。

1. **Merge** を選択してマージリクエストを完了します。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストで変更内容を送信してください。
