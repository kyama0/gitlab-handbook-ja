---
title: "GitLab Security Essentials - ハンズオンラボ: ビルドステージのスキャナー"
description: "このハンズオンガイドは、プロジェクトでビルドステージのスキャナーを有効化・使用するプロセスを案内します。"
upstream_path: "/handbook/customer-experience/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentialslab1/"
upstream_sha: ab93800e4c241789ac67785899fa20ffa1eb0854
translated_at: "2026-11-05T15:23:57.350605+00:00"
translator: claude
stale: false
lastmod: "2026-11-04T12:01:28-05:00"
---

> 推定所要時間: 25 分

## タスク A. プロジェクトの作成 {#task-a-create-a-project}

このコースセクションでは、セキュリティスキャナーをテストするために、あらかじめコードが用意されたテンプレートを使用します。

1. **New project** ボタンを選択します。

1. **Create from template** タイルを選択します。

1. **Instance** タブを選択します。

1. **Security Essentials Labs** テンプレートの横にある **Use template** を選択します。

1. **Project name** フィールドに `Security Labs` と入力します。

      > プロジェクトスラグは自動的に入力されます。必要に応じて短い文字列に変更することもできますが、このラボではデフォルトのままにしてください。

1. **Project URL** フィールドで、URL の後半部分のドロップダウンリストをクリックして、**グループ名**（`training-users/*` で始まる）を指しているか確認します。**ユーザー名** を指していないことを確認します。ユーザーの名前空間に直接作成せず、グループ内にプロジェクトを作成してください。

1. **Visibility level** が **Private** に設定されていることを確認します。

      > 親グループがプライベートに設定されているため、その配下のすべての子グループとプロジェクトもプライベートになります。プロジェクトの公開レベルについては[ドキュメント](https://docs.gitlab.com/ee/user/public_access.html)でさらに詳しく学べます。

1. **Create project** をクリックします。

## タスク B. SAST の有効化と設定 {#task-b-enable-and-configure-sast}

> 静的アプリケーションセキュリティテスト（SAST）は、ソースコードの脆弱性を検査するプロセスです。SAST スキャンを使用することで、コードリポジトリの既知の脆弱性を自動的にスキャンできます。また、マージリクエストのマージ前に脆弱性を確認するためにも使用できます。このプロセスにより、コードに脆弱性が混入しないようにできます。

1. **(+) > This directory > New file** をクリックして、`main` ブランチに新しいファイルを作成します。

1. **Filename** フィールドに `.gitlab-ci.yml` と入力します。自動的にテンプレートが表示されますが、このタスクでは空白のままにしておいて構いません。

1. 単一の **test** ステージを定義します:

      ```yml
      stages:
        - test
      ```

      > YAML ファイルはスペース 2 つでインデントする必要があります。Web IDE ではタブ 4 スペースに設定されている場合があります。サンプルをコピー&ペーストしない場合は、バックスペースで 2 スペースに調整してください。

1. `.gitlab-ci.yml` のステージ定義の後に以下のテキストを貼り付けて SAST を有効化します:

      ```yml
      include:
        - component: ilt.gitlabtraining.cloud/components/sast/sast@~latest
      ```

      > GitLab UI から SAST を設定することも可能です。その場合は **Secure > Security configuration** に移動し、**Configure SAST** ボタンをクリックします。このラボでは CI ファイルを編集して設定することで、仕組みをより深く理解できるようにしています。

1. `.gitlab-ci.yml` ファイルの末尾に inputs セクションを追加し、`excluded_paths: venv/` を設定します。

      ```yml
      include:
        - component: ilt.gitlabtraining.cloud/components/sast/sast@~latest
          inputs:
            excluded_paths: venv/
      ```

      > `.gitlab-ci.yml` ファイルの inputs セクションに設定を追加することで SAST をカスタマイズできます。たとえば、`excluded_paths` 変数を使用すると、SAST スキャンからプロジェクトのパスを除外できます。不要なファイルのスキャンを防ぐために設定できます。
      >
      > 例として、Python プロジェクトには `venv` ディレクトリが含まれていることが多く、プロジェクトが使用するパッケージが格納されています。このディレクトリには私たちのソースコードが含まれていないため、SAST スキャンから除外するべきです。
      >
      > SAST 変数の完全なリストは[ドキュメント](https://docs.gitlab.com/ee/user/application_security/sast/#available-cicd-variables)で確認できます。

1. 完成すると、`.gitlab-ci.yml` ファイルは以下のようになります:

      ```yml
      stages:
        - test

      include:
        - component: ilt.gitlabtraining.cloud/components/sast/sast@~latest
          inputs:
            excluded_paths: venv/
      ```

1. **Commit changes** ボタンをクリックし、適切なコミットメッセージを追加します（例: `Add SAST template to .gitlab-ci.yml`）。

1. **Commit to a new branch** オプションを選択し、ブランチ名を `add-security` に変更します。**Create a new merge request for this change** にチェックが入っていることを確認し、**Commit changes** ボタンをクリックします。

1. **New merge request** ウィンドウで、マージリクエストの名前を入力します。**Create merge request** を選択します。

## タスク C. マージリクエストの脆弱性レポート {#task-c-merge-request-vulnerability-report}

> セキュリティスキャンの主な目的の一つは、安全でないコードがリポジトリに取り込まれるのを防ぐことです。マージリクエストの脆弱性レポートを使用して、1 つのマージリクエストで検出されたすべての脆弱性を確認できます。このレポートには、現在のマージリクエストで新たに導入された脆弱性のみが表示されます。リポジトリにすでに存在する脆弱性はここには表示されませんが、プロジェクトレベルの脆弱性レポートには表示されます。

1. パイプラインが完了した後、マージリクエストの画面を更新します。

1. **Security Scanning detected 15 new potential vulnerabilities** というメッセージが表示されます。

1. **View all pipeline findings** を選択します。

1. MR に表示されている脆弱性を確認します。ここでは他のセキュリティ機能を示すために、これらの脆弱性をそのままマージします。ただし、実際のケースではここで問題を解決することを目指してください。

1. マージリクエストに戻ります。

1. `Delete source branch` にチェックを入れたまま、**Merge** をクリックします。

## タスク D. Advanced SAST の有効化 {#task-d-enable-advanced-sast}

より徹底的なスキャンと脆弱性検出を提供するために、プロジェクトで Advanced SAST を有効化します。これを行うには、SAST スキャンコンポーネントに別の入力を追加する必要があります。

1. 左サイドバーで **Code > Repository** に移動します。

1. `.gitlab-ci.yml` ファイルを選択します。

1. **Edit > Edit single file** を選択します。

1. `excluded_paths` の入力の下に、`run_advanced_sast` という名前で値 `true` の別の入力を追加します。完成すると、ファイルは以下のようになります:

      ```yml
      stages:
        - test

      include:
        - component: ilt.gitlabtraining.cloud/components/sast/sast@~latest
          inputs:
            excluded_paths: venv/
            run_advanced_sast: true
      ```

1. **Commit changes** をクリックします。

1. 適切なコミットメッセージを追加します（例: `Add Advanced SAST functionality`）。**Commit to a new branch** オプションが選択されていることを確認します。ブランチ名を `sast-update` に設定し、**Create a new merge request for this change** にチェックが入っていることを確認します。**Commit changes** ボタンをクリックします。

1. その後の MR ページで、適切なタイトル（例: `Enabled Advanced SAST in our pipeline`）を入力し、**Create Merge Request** をクリックします。

1. 左サイドバーで **Build > Pipelines** を選択します。

1. 現在実行中のパイプラインを選択します。`gitlab-advanced-sast` というジョブがあることを確認します。

1. パイプラインが正常に完了したら、MR に戻り、**Merge** ボタンをクリックします。

GitLab Advanced SAST スキャナーは SAST スキャナーからより多くの情報を提供します。ラボの後半で脆弱性レポートを確認する際に、その結果がどのように表示されるかを見ていきます。

## タスク E. シークレット検出の有効化と設定 {#task-e-enable-and-configure-secret-detection}

> 前のセクションでは、ソースコードの脆弱性を検出するために SAST を適用しました。コードの脆弱性をスキャンするだけでなく、GitLab はキーや API トークンなどのシークレットについてもコードをスキャンできます。シークレット検出をコードに追加することで、リポジトリに機密データが漏洩するのを防ぐことができます。

シークレット検出ジョブはデフォルトで **test** ステージに属します。`.gitlab-ci.yml` にすでにそのステージが定義されているため、再度定義する必要はありません。

1. 左サイドバーで **Code > Repository** に移動します。

1. **Build > Pipeline Editor** を選択します。

1. `.gitlab-ci.yml` の既存の `include:` セクションの末尾（SAST のコンポーネントの下）に以下のコンポーネントを追加して、シークレット検出を有効化します。インデントは前のテンプレートと同じレベルにしてください。

      ```yml
      include:
        - component: ilt.gitlabtraining.cloud/components/sast/sast@~latest
          inputs:
            excluded_paths: venv/
            run_advanced_sast: true
        - component: ilt.gitlabtraining.cloud/components/secret-detection/secret-detection@~latest
      ```

      > GitLab UI からシークレット検出を設定することも可能です。その場合は **Secure > Security configuration** に移動し、**Configure Secret Detection** ボタンをクリックします。このラボでは `.gitlab-ci.yml` ファイルを編集して設定することで、仕組みをより深く理解できるようにしています。

1. コンポーネントのインポートの下に以下のジョブ定義を貼り付けて、シークレット検出ジョブが test ディレクトリを無視するように設定します。

      ```yml
      secret_detection:
        variables:
          SECRET_DETECTION_EXCLUDED_PATHS: tests/
      ```

      > デフォルト以外の動作を使用するようにシークレット検出を設定するには、**secret_detection** ジョブ定義をオーバーライドし、その中に変数を追加します。
      >
      > シークレット検出変数の完全なリストは[ドキュメント](https://docs.gitlab.com/ee/user/application_security/secret_detection/#available-cicd-variables)で確認できます。

1. `.gitlab-ci.yml` ファイルは以下のようになります:

      ```yml
      stages:
        - test

      include:
        - component: ilt.gitlabtraining.cloud/components/sast/sast@~latest
          inputs:
            excluded_paths: venv/
            run_advanced_sast: true
        - component: ilt.gitlabtraining.cloud/components/secret-detection/secret-detection@~latest

      secret_detection:
        variables:
          SECRET_DETECTION_EXCLUDED_PATHS: tests/
      ```

1. ブランチを `main` に設定し、**Commit changes** を選択します。

      > 注: リポジトリへのすべての変更は MR を通じて行い、MR はマージ前に他のチームメンバーによって承認されることがベストプラクティスとされています。ただし、このプロジェクトのメンバーはラボを実施している人一人だけなので、そのようなレビューは不可能です。そのため、小規模なチームやデモ環境では main ブランチに直接コミットすることが一般的に許容されています。実際の業務環境では、マージリクエストを使用してください。

1. **Build > Pipelines** に移動し、ジョブを確認して、すべてのパイプラインが完了するまで待ちます。

## タスク F. IaC スキャンの追加 {#task-f-add-iac-scanning}

プロジェクトにコードとしてのインフラストラクチャのスキャンを追加するには、次の操作を行います。

1. **Build > Pipeline Editor** を選択します。

1. `include` セクションに、次のコンポーネントを追加します。

    ```yml
      - component: ilt.gitlabtraining.cloud/components/sast/iac-sast@~latest
    ```

1. **Commit changes** を選択します。

1. 生成されたパイプラインを確認し、`kics-iac-sast` ジョブが追加されたことを確認します。

1. パイプラインが完了するまで待ちます。

## タスク G. プロジェクトレベルの脆弱性レポートの表示 {#task-g-view-the-project-level-vulnerability-report}

> main ブランチにコードをマージするたびに、セキュリティパイプラインが実行され、*デフォルトブランチの最新コミットの*すべての脆弱性を表示するプロジェクトレベルの脆弱性レポートが生成されます。これは、他のブランチの脆弱性と比較する際のベースラインとなる脆弱性セットと考えてください。

1. **Secure > Vulnerability Report** に移動します。

1. **Development vulnerabilities** テーブルの **Report Type** 列を確認すると、有効にした各ツールの様々な脆弱性検出結果が表示されています。

1. Advanced SAST スキャナーが検出した脆弱性のみを表示します。**Search or filter vulnerabilities...** バーの **Scanner** フィルターオプションを選択し、**GitLab Advanced SAST** を選択してフィルタリングします。

1. **Improper neutralization of special elements used in an SQL command ('SQL Injection')** の脆弱性の 1 つを選択します。ここには **Details** と **Code flow** の 2 つのタブがあります。**Details** タブには脆弱性に関する一般的な詳細が表示されます。**Code flow** タブは Advanced SAST スキャナーが提供する特別な機能です。コードの中でその脆弱性がどのように発生するかが表示されます。

1. これらのさまざまな結果を確認します。次のラボでは、これらの脆弱性のトリアージと解決方法について説明します。

## ラボガイド完了 {#lab-guide-complete}

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-experience/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentials)を参照できます。

## ご提案・改善点 {#suggestions}

このラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
