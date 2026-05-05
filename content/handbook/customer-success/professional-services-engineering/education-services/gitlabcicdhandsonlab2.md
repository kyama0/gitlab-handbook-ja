---
title: "GitLab CI/CD - ハンズオンラボ: ステージ・ジョブ・Runner を定義する"
description: "このハンズオンガイドでは、.gitlab-ci.yml ファイルと GitLab Runner の作成方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandsonlab2/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:52:14Z"
translator: claude
stale: false
---

> 完了までの推定時間: 15〜20 分

## 目標

このラボでは、GitLab プロジェクトで CI/CD を有効にします。最初の `.gitlab-ci.yml` ファイルを作成した後、CI/CD パイプラインを調べてジョブとステージについてより深く理解します。最後に、Runner をインストール・実行・GitLab インスタンスに登録する方法を学びます。

> このラボの**パート D〜G** は、ローカルマシンの管理者権限が必要です。GitLab Runner をローカルにインストールできない場合は、パート D〜G をスキップして、トレーニング環境の共有 Runner を使用することができます。

## タスク A. ラボ環境にアクセスする

1. ウェブブラウザで [**https://gitlabdemo.com/invite**](https://gitlabdemo.com/invite) にアクセスします。

1. **Invitation Code** フィールドに、インストラクターまたは LevelUp LMS から提供された招待コードを入力します。

1. **Provision Training Environment** を選択します。

1. セルフペースのコースでは **GitLab.com** のユーザー名が必要です。ユーザー名を確認するには [GitLab](https://gitlab.com) にアクセスします。

1. 左サイドバーでプロフィール画像を選択します。

1. 表示されるドロップダウンに `@` から始まる値があります。これが GitLab のユーザー名です。

1. 招待コードを入力すると、ポータルが **GitLab.com** のユーザー名を求めます。先頭の `@` を除いた GitLab.com ユーザー名を入力します。

1. **Provision Training Environment** を選択します。

1. ページ下部の **My Group** を選択します。

1. GitLab.com の認証情報でサインインします。

1. トレーニングラボの手順を実行するためのサンドボックスとなる **My Test Group** グループにリダイレクトされます。

   > このグループには GitLab Ultimate ライセンスが付与されており、すべての機能を確認できます。個人のユーザー名前空間では、すべての機能にアクセスするために有料サブスクリプションまたは無料トライアルが必要です。
   >
   > グループにアクセスしたときに 404 エラーが表示される場合は、ラボのプロビジョニング時に入力したユーザー名が原因である可能性があります。GitLab ユーザー名が正しく入力されているかどうかを確認してください。

1. **My Test Group** トレーニングサブグループから **New project** ボタンをクリックします。

1. タスク B に進みます。

## タスク B: プロジェクトを作成する

1. **My Test Group** トレーニングサブグループから **New project** ボタンをクリックします。

1. **Create blank project** タイルをクリックします。

1. **Project name** テキストボックスに `CICD Demo` と入力します。

   > プロジェクトスラッグは自動的に入力されます。自分のプロジェクトに合わせて短い文字列に変更することもできますが、このラボではデフォルトのままにしてください。

1. Project URL フィールドで URL の後半部分のドロップダウンをクリックし、グループ名（SPT の場合は **gitlab-learn-labs/**、ILT の場合は **training-users/** から始まる）を指していることを確認し、ユーザー名ではないことを確認します。このプロジェクトはユーザーの名前空間ではなく、グループ内に作成してください。

1. **Visibility Level** で **Private** が選択されていることを確認します。

   > 上位グループがプライベートであるため、その下のすべての子グループとプロジェクトもプライベートになります。プロジェクトの可視性レベルの詳細については[ドキュメント](https://docs.gitlab.com/ee/user/public_access.html)をご覧ください。

1. **Initialize repository with a README** にチェックを入れます。

1. **Enable Static Application Security Testing (SAST)** チェックボックスのチェックが外れていることを確認します。

1. **Create project** ボタンをクリックします。

### タスク C. `.gitlab-ci.yml` ファイルを追加する

> GitLab CI/CD を使用するには、プロジェクトのルートに `.gitlab-ci.yml` ファイルを用意します。`.gitlab-ci.yml` ファイルには CI/CD パイプラインの設定が含まれています。このセクションでは、シンプルな `gitlab-ci.yml` ファイルを作成します。

1. **(+) > This directory > New file** をクリックして、main ブランチに新しいファイルを作成します。

1. **Filename** フィールドに `.gitlab-ci.yml` と入力します。

1. `Apply a template` ドロップダウンから `Bash` テンプレートを選択します。これによりファイルが事前に入力されます。

1. 最小限の `.gitlab-ci.yml` ファイルを作成するには:
   * `build1` より上のすべての行を削除します。
   * `test1` セクションの `echo "For example run a test suite"` より下のすべての行を削除します。

1. ファイルの先頭に以下の行を貼り付けて `build` と `test` ステージを追加します。

   ```yml
   stages:
     - build
     - test
   ```

   > YAML ファイルは 2 スペースでインデントする必要があることに注意してください。Web IDE が 4 スペースのタブを使用しようとする場合があります。コピー・アンド・ペーストしていない場合は、バックスペースで 2 スペースに設定してください。

1. コミットメッセージを `Creating a simple .gitlab-ci.yml file` に設定し、**Target Branch** を `main` に設定します。

1. **Commit changes** をクリックします。

1. 変更をコミットした後、次のような `.gitlab-ci.yml` が作成されます:

   ```yml
   stages:
     - build
     - test

   build1:
     stage: build
     script:
       - echo "Do your build here"

   test1:
     stage: test
     script:
       - echo "Do a test here"
       - echo "For example run a test suite"
   ```

このファイルは `build` と `test` の 2 つのステージを定義しています。`build1` ジョブは `build` ステージ中に実行され、`script` 内のすべてのコマンドを実行します。`test1` ジョブは `test` ステージ中に実行され、`script` 内のすべてのコマンドを実行します。

### タスク D. パイプラインのステータス・ステージ・ジョブ・GitLab Runner を表示する

> `.gitlab-ci.yml` ファイルをコミットすると、パイプラインが作成されます。パイプラインはジョブとステージで構成されています。前のセクションでは、`build` と `test` の 2 つのステージを定義しました。これらのステージにはそれぞれ `script` で定義されたジョブが含まれていました。このセクションでは、`.gitlab-ci.yml` ファイルから作成されたパイプラインを表示します。

1. 左側のナビゲーションペインで **Build > Pipelines** をクリックして、すべてのパイプラインの概要を表示します。概要の一番上の行には、`.gitlab-ci.yml` をコミットした数秒後に開始されたパイプラインが表示されます。行の左側のステータスアイコンには **running** または **passed** のいずれかが表示されます。

1. 一番上の行のステータスアイコンをクリックして、最新のパイプラインの詳細を表示します。パイプラインのステージを表す列と、各ステージ内のジョブを表すウィジェットが表示されます。

> ステージの実行順序は一般的に左から右に読みます。この例では、`build` ステージが最初に実行されるステージなので、最左の列に表示されます。

1. 2 つのジョブのそれぞれをクリックして、Web ターミナルの出力を確認します。各ジョブの gitlab-runner を特定します。

   > ヒント: 各ジョブの出力の上部付近に記載されています。

### タスク E. GitLab Runner のローカルインストールを準備する

> ジョブは `runner` によって実行されます。プロジェクトが `GitLab.com` でホストされている場合、アプリケーションをさまざまな環境でビルド・テスト・デプロイするための SaaS Runner が提供されています。場合によっては、独自の Runner をホストしたいこともあります。パート D・E・F では、GitLab インスタンスに Runner をインストールして登録するプロセスを概説します。

1. 使用している OS に応じて、適切なコマンドを実行します:

   * **Linux** ターミナルの場合:

     ```sh
     sudo gitlab-runner status
     ```

   * **macOS** ターミナルの場合:

     ```sh
     gitlab-runner status
     ```

   * **Windows** PowerShell ウィンドウの場合:

     ```powershell
     cd C:\GitLab-Runner
     .\gitlab-runner.exe status
     ```

1. コマンドの出力に `gitlab-runner: Service is running` と表示された場合、Runner はすでにシステムにインストールされています。Runner がすでにシステムにインストールされている場合は、以下のパート F にスキップしてください。コマンドがエラーをスローした場合は、次のセクションに進んでください。

### タスク F. GitLab Runner バイナリをコンピューターにインストールする

> このセクションでは、コンピューターに GitLab Runner をインストールするために必要な手順を概説します。使用しているオペレーティングシステムに一致する手順のみに従ってください。

#### Linux

1. [このドキュメント](https://docs.gitlab.com/runner/install/linux-repository.html#installing-gitlab-runner)の**手順 1 と 2 のみ**に従います。

1. 次のコマンドを実行して gitlab-runner サービスが開始されたことを確認します:

```sh
sudo gitlab-runner status
```

出力に `Service is running` と表示されれば、gitlab-runner サービスは正常に動作しています。

#### macOS

1. [このドキュメント](https://docs.gitlab.com/runner/install/osx.html#manual-installation-official)の**手順 1 と 2 のみ**に従います。

1. gitlab-runner をサービスとしてインストールし、サービスを開始します:

   ```sh
   cd ~
   gitlab-runner install
   gitlab-runner start
   ```

1. 次のコマンドを実行して gitlab-runner サービスが開始されたことを確認します:

   ```sh
   gitlab-runner status
   ```

出力に `Service is running` と表示されれば、gitlab-runner サービスは正常に動作しています。

#### Windows

1. [このドキュメント](https://docs.gitlab.com/runner/install/windows.html#installation)の**手順 1 と 2 のみ**に従います。

1. 管理者権限の PowerShell ウィンドウを開きます:
   1. **Start** をクリックします。

   1. `PowerShell` と入力します。

   1. **Windows PowerShell** を右クリックします。

   1. **Run as administrator** をクリックします。

1. 管理者権限の PowerShell ウィンドウから、gitlab-runner サービスをインストールして開始します:

   ```powershell
   cd C:\GitLab-Runner
   .\gitlab-runner.exe install
   .\gitlab-runner.exe start
   ```

1. 次のコマンドを実行して gitlab-runner サービスが開始されたことを確認します:

   ```powershell
   .\gitlab-runner.exe status
   ```

出力に `Service is running` と表示されれば、gitlab-runner サービスは正常に動作しています。

### タスク G. プロジェクト専用の特定の Runner を登録する

> この時点で、システムに Runner がインストールされています。GitLab がこの Runner を CI/CD ジョブに使用できるようにするには、UI で Runner を登録する必要があります。

1. **CICD Demo** プロジェクトで、左側のナビゲーションペインの **Settings > CI/CD** をクリックします。

1. **Runners** セクションまでスクロールして、その隣の **Expand** ボタンをクリックします。

1. **Project runners** セクションで **New project runner** ボタンをクリックします。

1. **Tags** で **Run untagged jobs** を選択します。その他のオプションは空白のままにします。

   > タグのない Runner はあらゆるジョブを実行します。Runner が実行できるジョブを制御するには、Runner にタグを定義できます。このプロセスの詳細については[こちら](https://docs.gitlab.com/ee/ci/runners/configure_runners.html#use-tags-to-control-which-jobs-a-runner-can-run)をご覧ください。

1. **Create runner** ボタンをクリックします。

1. 次のページで、オペレーティングシステム（Linux・MacOS・Windows）を選択します。

1. **Step 1** のコマンドをクリップボードにコピーします。

1. ターミナルに戻り、前のステップでコピーしたコマンドを貼り付けて実行します。インスタンス URL とRunner名はデフォルト値を使用するために **Enter** を押します（必要に応じてカスタム名を付けることもできます）。

1. エグゼキュータを求められたら `shell` と入力します。

1. OS に応じた適切なコマンドを実行して、gitlab-runner が正しく登録されたことを確認します:
   * **Linux** ターミナルの場合:

     ```sh
     sudo gitlab-runner list
     ```

   * **macOS** ターミナルの場合:

     ```sh
     gitlab-runner list
     ```

   * 通常の（管理者権限でない）**Windows** PowerShell ウィンドウの場合:

     ```powershell
     cd C:\GitLab-Runner
     .\gitlab-runner.exe list
     ```

> Runner が正しく登録されている場合は、次のような出力が表示されます: </br>`gitlab-runner run Executor=shell Token=your-gl-token URL=https://gitlab.com`

1. Windows を使用している場合は、gitlab-runner が PowerShell を起動する正しいコマンドを使用するように設定するために、以下の追加手順に従ってください:
   1. テキストエディタで `C:\GitLab-Runner\config.toml` を開きます。

   1. 次の行を変更します:

      ```toml
      shell = "pwsh"
      ```

     変更後:

      ```toml
      shell = "powershell"
      ```

1. ファイルを保存します。

## （オプション）タスク H: GitLab Runner の登録解除

デバイスに GitLab Runner を保持したくない場合は、以下の手順に従って GitLab Runner の登録を解除できます。

1. OS に応じたコマンドを実行して、GitLab Runner の URL とトークンを取得します:

   * Linux ターミナルの場合: ```sudo gitlab-runner list```
   * macOS ターミナルの場合: ```gitlab-runner list```
   * 通常の（管理者権限でない）Windows PowerShell ウィンドウの場合:

   ```ps
   cd C:\GitLab-Runner
   .\gitlab-runner.exe list
   ```

1. URL とトークンを使用して、登録解除コマンドを実行します: ```gitlab-runner unregister --url "https://gitlab.example.com/" --token t0k3n```

## ラボガイド完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson)を見ることができます。

## ご提案は？

*GitLab CI/CD のハンズオンガイド*に変更を加えたい場合は、マージリクエストを通じて変更を送信してください！
