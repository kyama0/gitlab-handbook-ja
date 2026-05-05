---
title: "GitLab Security Essentials - ハンズオンラボ: 依存関係スキャンの有効化と設定"
description: "このハンズオンガイドでは、GitLab プロジェクトで依存関係スキャンを有効化して使用する方法を解説します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/secessentialshandson2/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T05:28:22Z"
translator: claude
stale: false
---

> 推定所要時間: 15 分

## 目標

多くのプロジェクトはオープンソースソフトウェアやライブラリに依存しています。プロジェクトが使用する依存関係にもセキュリティ脆弱性が含まれている場合があります。

このラボでは、プロジェクトの依存関係における脆弱性をスキャンする方法を学びます。

## 前提条件

このラボおよびその後のすべてのラボを開始する前に、前のラボで有効化したスキャナーを削除してパイプラインの実行時間を短縮してください。

1. ラボ 1 で作成した **Security Labs** プロジェクトをブラウザで開きます。

2. DAST ステージと DAST スキャナーを含む行を削除します。次の例のようになります。

    ```yml
    stages:
    - test

    include:
    - template: Security/SAST.gitlab-ci.yml
    - template: Security/Secret-Detection.gitlab-ci.yml

    variables:
      SAST_EXCLUDED_PATHS: venv/

    secret_detection:
      variables:
        SECRET_DETECTION_EXCLUDED_PATHS: tests/
    ```

    > プロジェクトに CI 変数（`DAST_DISABLED=true`、`SECRET_DETECTION_DISABLED=true` など）を設定することでこれらの機能を無効化することも可能です。詳細は[ドキュメント](https://docs.gitlab.com/ee/topics/autodevops/cicd_variables.html#job-disabling-variables)を参照してください。

## タスク A. プロジェクトの依存関係を追加する

> Python ベースのプロジェクトでは、パッケージ管理に pip がよく使用されます。pip では、開発者は `requirements.txt` というファイルに依存関係のリストを記述することが多いです。この例では pip パッケージマネージャーを使用した Python を扱いますが、GitLab はさまざまな他のパッケージマネージャーもサポートしています。サポートされている言語とパッケージマネージャーの完全なリストは[こちら](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/#supported-languages-and-package-managers)を参照してください。

1. `Security Labs` プロジェクトで、**Code > Repository** に移動します。

1. **+ > This directory > New file** をクリックしてファイルを作成します。

1. ファイル名を `requirements.txt` に設定し、次のテキストを追加します。

    ```text
    requests==2.27.1
    ```

1. 適切なコミットメッセージ（例: `Adding requirements file`）を入力し、**Target Branch** を `main` に設定して **Commit changes** ボタンをクリックします。

## タスク B. 依存関係スキャンの有効化

> 依存関係スキャナーはプロジェクトの依存関係を走査してセキュリティ脆弱性を探します。CI/CD 設定ファイルに GitLab 提供のテンプレートを含めることで依存関係スキャンを有効化できます。手動で行うか、GitLab GUI を使用してそれを行うマージリクエストを作成することができます。前のラボで SAST、シークレット検出、DAST を有効化するために手動の方法を使用したので、このラボでは GUI を使用して依存関係スキャンを有効化します。

1. **Secure > Security configuration** に移動します。

1. **Dependency Scanning** ペインで **Configure with a merge request** をクリックします。これにより次の 3 つのことが行われます。
    1. 新しいブランチの作成
    2. ブランチに対して依存関係スキャンを有効化するための CI/CD 設定ファイルの編集コミットの追加
    3. そのブランチの MR 作成ページへのリダイレクト

1. マージリクエスト（MR）作成ページで、すべてのフィールドをデフォルト値のままにして **Create merge request** ボタンをクリックします。作成した MR の詳細ページにリダイレクトされます。

1. ページの中央で、MR のブランチでパイプラインが実行中という通知を確認します。

    * 前のラボからスキャンを無効化していても、パイプラインが完了するまでに数分かかる場合があります。
    * 予期しない動作を引き起こす可能性があるため、**Auto-merge** ボタンはクリック**しないでください**。
    * パイプラインが完了するまで待ちます。**Build > Pipelines** に移動するか、マージリクエストのパイプライン番号をクリックして進行状況を確認できます。

1. パイプラインが完了したら、MR の **Merge** ボタンをクリックします。このボタンを表示するにはページを更新する必要がある場合があります。

1. **Code > Repository** に移動して `.gitlab-ci.yml` を開きます。MR によりドキュメントが上部に追加され、ファイルが再フォーマットされ、`include:` セクションに依存関係スキャンのテンプレートが追加されたことを確認します。

## タスク D. 依存関係スキャンの設定

> `.gitlab-ci.yml` ファイルに変数を設定することで依存関係スキャンを設定できます。このタスクでは、依存関係スキャナーのログレベルを `info` に変更します。

1. **Build > Pipeline editor** に移動します。

1. `.gitlab-ci.yml` ファイルの末尾にこのジョブ定義を追加します。これにより依存関係スキャンのテンプレートで定義された既存のジョブがオーバーライドされます。*最初の行にはハイフン 2 つとアンダースコア 1 つが含まれていることに注意してください。*

    ```yml
    gemnasium-python-dependency_scanning:
      variables:
        SECURE_LOG_LEVEL: "info"
    ```

    > 依存関係スキャンで利用可能な変数の完全なリストは[ドキュメント](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/#available-cicd-variables)を参照してください。

1. この変更を **main** ブランチにコミットします。コミットメッセージには `Change log level for Python dependency scanner` を使用します。**Commit changes** をクリックします。

    > このコミットにより、新しい依存関係スキャン設定を使用したパイプラインの実行がトリガーされます。

1. **Build > Pipelines** に移動して、最新のパイプラインが完了するまで待ちます。進行状況を確認したい場合は、パイプラインの詳細ページに移動して **gemnasium-python-dependency_scanning** ボタンをクリックするとジョブのコンソール出力が確認できます。依存関係スキャンの実行には数分かかる場合があることを覚えておいてください。

## タスク E. 脆弱性に対処する

> 依存関係ベースの脆弱性を管理する最初のステップは、その依存関係の使用方法で脆弱性が実際に存在することを確認することです。脆弱性がプロジェクトに存在する場合は、問題を解決するための手順を踏む必要があります。

1. **Secure > Vulnerability Report** に移動します。

1. **Activity** フィルターでオプションを **Tool** に変更し、**Dependency Scanning** の下のオプションを選択します。依存関係スキャンが requirements ファイルで見つけたセキュリティ脆弱性を確認します。

1. **Unintended leak of Proxy-Authorization header in requests** という説明の脆弱性を表示します。説明をクリックします。

1. 説明ページには、脆弱性の影響を含む脆弱性の説明が表示されます。また、脆弱性のパッチと回避策に関する情報も表示されます。

1. 右上隅で **Status** ドロップダウンをクリックして **Confirm** を選択します。

1. 脆弱性の説明の **Linked items** セクションで **Create issue** ボタンをクリックします。

1. Issue を自分自身に割り当てて **Create issue** ボタンをクリックします。

    > 脆弱性の説明が Issue にコピーされていることに注意してください。

1. **Secure > Vulnerability report** に戻ります。Issue を作成した脆弱性の **Activity** 列にその Issue へのリンクが表示されていることを確認します。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/secessentialshandson)を参照できます。

## ご提案

*GitLab Security Essentials ハンズオンガイド*への変更を提案される場合は、マージリクエストで提出してください。
