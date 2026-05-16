---
title: Jenkins パイプラインの作成
description: "GitLab の Jenkins インテグレーションを使って Jenkins パイプラインページを作成する方法を解説します"
upstream_path: /handbook/customer-success/demo-systems/tutorials/integrations/create-jenkins-pipeline/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-08T16:54:09+00:00"
---

## 概要

> **非推奨のお知らせ:** このチュートリアルは最新の内容ではなく、教育目的のためにのみ保存されています。これらの手順は GitLab デモシステムでは動作しなくなっています。

GitLab の Jenkins インテグレーションでは、リポジトリにコードをプッシュしたとき、またはマージリクエストが作成されたときに Jenkins ビルドをトリガーできます。さらに、マージリクエストウィジェットおよびプロジェクトのホームページでパイプラインのステータスを確認できます。

このチュートリアルでは、`Jenkinsfile` を含むプロジェクトの作成、Jenkins サーバー上でのプロジェクトの設定、GitLab Jenkins インテグレーション プラグインの設定、GitLab プロジェクトでのインテグレーションの有効化、そしてコミットを実行して GitLab と Jenkins 間でパイプラインがどのように連携するかを示す方法について説明します。

## ステップバイステップの手順

### タスク 1: Jenkins CI パイプライン インテグレーション用のプロジェクトを作成する

Jenkins を初めて使用する場合は、**オプション A** の手順に従い、あらかじめ `Jenkinsfile` が作成されている Ruby アプリケーションのチュートリアルアプリをご利用ください。

既存のプロジェクトを使用する場合は、**オプション B** の手順に従い、アプリケーションに `Jenkinsfile` を追加してください。

#### オプション A: チュートリアルアプリのテンプレートを使って新しいプロジェクトを作成する

1. https://gitlab-core.us.gitlabdemo.cloud にアクセスし、Demo Cloud SSO の認証情報でサインインします。
1. [新しいプロジェクトを作成](https://gitlab-core.us.gitlabdemo.cloud/projects/new)し、**テンプレートから作成** タブを選択します。
1. 利用可能なプロジェクトのリストから **Instance** タブを選択します。
1. `Tutorial App - Jenkins Pipeline` を探し、**テンプレートを使用** ボタンをクリックします。
1. 新しいプロジェクトのフォームに次の値を入力します:
    - プロジェクト名: `Tutorial App - Jenkins Pipeline`
    - プロジェクト URL: `Groups > demosys-users/{MY-USERNAME}`
    - プロジェクトスラッグ: `tutorial-app-jenkins-pipeline`
    - プロジェクトの説明: `(空白のまま)`
    - 公開レベル: `Private`
1. フォームへの入力が完了したら、**プロジェクトを作成** ボタンをクリックします。

#### オプション B: 既存のプロジェクトに `Jenkinsfile` を追加する

注意: `Jenkinsfile` は、パイプラインジョブを作成した場合にのみ使用されます。Jenkins でフリースタイルジョブとのインテグレーションを示したい場合は、このステップをスキップできます。このチュートリアルには両方のオプションの設定が含まれています。

既存のプロジェクトを使用する場合は、README ファイルがあるプロジェクトのルートレベルに `Jenkinsfile`（ファイル拡張子なし）という新しいファイルを作成する必要があります。

```text
/app/
  ...
.gitignore
Jenkinsfile
README.md
```

出発点として、GitLab にステータスを報告するいくつかの基本的な Jenkins ステージを示すサンプルを使用できます。注意: この Jenkinsfile は実際にビルドやテストを実行するわけではなく、`echo` を使用してビルドとテストの具体的なコマンドをどこに置くべきかを示しているだけです。

```json
pipeline {
    agent any
    stages {
       stage('build') {
          steps {
             echo 'Notify GitLab'
             updateGitlabCommitStatus name: 'build', state: 'pending'
             echo 'build step goes here'
             updateGitlabCommitStatus name: 'build', state: 'success'
          }
       }
       stage(test) {
           steps {
               echo 'Notify GitLab'
               updateGitlabCommitStatus name: 'test', state: 'pending'
               echo 'test step goes here'
               updateGitlabCommitStatus name: 'test', state: 'success'

           }
       }
    }
 }
```

Jenkins ドキュメントには、アプリケーションの言語に基づいた追加のサンプルが用意されています。

[Jenkinsfile サンプル](https://www.jenkins.io/doc/pipeline/tour/hello-world/#examples)

より詳細なパイプライン設定については Jenkins ドキュメントを参照できますが、それはこのチュートリアルの範囲外です。

追加オプションの詳細については、オープンソースの [Jenkins GitLab プラグインのドキュメント](https://github.com/jenkinsci/gitlab-plugin#global-plugin-configuration)を参照してください。

### タスク 2. Jenkins サーバーに接続する

1. [https://gitlabdemo.com](https://gitlabdemo.com) にアクセスし、Demo Cloud SSO の認証情報でサインインします。
1. ダッシュボードには、アクセス権のある Demo Cloud リソースが表示されます。
1. **Jenkins Integration** カード（枠線付きのセクション）を見つけます。
1. 青い **Jenkins Dashboard** ボタンをクリックして、新しいタブを開き Jenkins サーバーにアクセスします。
![Jenkins インスタンスカード](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-1.png)
1. ブラウザのセッション状態によっては、Demo Cloud SSO の認証情報でサインインを求められる場合があります。自動的にサインインしてダッシュボードに移動するよう設計されています。

> Demo Cloud では、Jenkins サーバーが認証に GitLab OAUTH を使用するよう設定されています。これは Demo Cloud の認証情報を使用するものであり、GitLab.com の認証情報ではないことにご注意ください。

1. パイプラインジョブとフォルダが表示されたダッシュボードに移動します。

### タスク 3. プロジェクト用の Jenkins フォルダを作成する

これは共有環境であるため、ダッシュボードを整理するためにユーザー名のフォルダを作成し、その中にパイプラインを配置することがベストプラクティスです。

1. 左サイドバーで **New Item** をクリックします。
1. **Enter an item name** フィールドに GitLab Demo Cloud のユーザー名を入力します（例: `jeffersonmartin`）。

> ユーザー名を覚えていない場合は、GitLab プロジェクトを開いているタブに切り替えてください。ブラウザの URL からプロジェクトのパスを確認することでユーザー名がわかります。

1. オプションの一覧から **Folder** タイプをクリックします。
1. 左下隅の **OK** ボタンをクリックします。
![Jenkins フォルダの作成](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-2.png)
1. フォルダが作成されると、フォルダの詳細ページにリダイレクトされます。ここで変更を加える必要はありません。

### タスク 4. Jenkins プロジェクト（フリースタイルプロジェクトまたはパイプライン）を作成する

1. ページ左上の Jenkins ロゴをクリックしてダッシュボードに戻ります。

> Jenkins UI のナビゲーションが難しい場合は、左上の Jenkins ロゴをクリックしてダッシュボードに戻り、そこから移動してください。

1. ユーザー名のフォルダを見つけ、**フォルダ名のリンクをクリック**してフォルダのダッシュボードに移動します。
![Jenkins フォルダ](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-4.png)
1. 左サイドバーで **New item** をクリックします。
*ヒント: フォルダ内に新しいアイテムを作成します。*
フォルダの中にいるため、このアイテムはトップレベルではなくこのフォルダ内に作成されます。分類されていないプロジェクトがダッシュボードを散らかさないよう、これを意識するようにしてください。
1. **Enter an item name** フィールドに、GitLab プロジェクトのハイフン区切り URL 名（スラッグ）を入力します。

```text
例
tutorial-app-jenkins-pipeline
```

1. オプションの一覧から **Freestyle project** または **Pipeline** タイプを選択します。
1. 左下隅の **OK** ボタンをクリックします。
1. プロジェクト設定ページにリダイレクトされます。

### タスク 5. Jenkins プロジェクトを設定する

#### オプション A - フリースタイルプロジェクト（Jenkinsfile は不要）

1. 前のタスクのプロジェクト設定ページにいない場合は、ダッシュボードからフォルダをクリックし、プロジェクトをクリックして、左サイドバーの **Configure** リンクをクリックすることで移動できます。
1. General セクションで **GitHub project** のチェックボックスを有効にします。

> インテグレーションの外見上の制限として、GitLab インテグレーションは GitHub 向けに構築されたものを使用するため、同じ基盤となる Git インテグレーションを使用する用語の重複があります。

1. GitHub project チェックボックスの下にある **Project url** フィールドに GitLab プロジェクトの URL をコピー＆ペーストするか、直接入力します。

```text
例
https://gitlab-core.us.gitlabdemo.cloud/demosys-users/jeffersonmartin/tutorial-app-jenkins-pipeline
```

1. **GitLab Connection** フィールドで、ドロップダウンメニューからまだ選択されていない場合は `GitLab Core US` オプションを選択します。この接続はシステム管理者によって事前に設定されています。
![GitLab 接続](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-5.png)
1. **Source Code Management** セクションまでスクロールします。
1. **Git** のラジオボタンを選択します。
1. 展開されたセクションで **Repository URL** フィールドを見つけ、GitLab プロジェクトの URL をコピー＆ペーストします（手順 2 と同じ URL）。

```text
例
https://gitlab-core.us.gitlabdemo.cloud/demosys-users/jeffersonmartin/tutorial-app-jenkins-pipeline
```

> 接続エラーのメッセージが表示される場合があります。これは認証情報が選択されていないため想定される動作です。次の手順でドロップダウンメニューから認証情報を選択してください。

![認証情報エラーメッセージ](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-6.png)

1. **Credentials** ドロップダウンメニューで `integ_jenkins` オプションを選択します。**デモ環境では新しい認証情報を追加しないでください。**

> `integ_jenkins` オプションを選択すると、Jenkins サーバーは GitLab インスタンスの API に接続してリポジトリ URL を検索しようとします。成功した場合、エラーメッセージは自動的に消えます。

1. **Advanced** ボタンをクリックします。
1. **Name** フィールドに `origin` と入力します。
1. **Refspec** フィールドに以下を入力します。これはドキュメントから直接引用したもので、デモ環境向けにカスタマイズされていません。

```text
+refs/heads/*:refs/remotes/origin/* +refs/merge-requests/*/head:refs/remotes/origin/merge-requests/*
```

1. **Branch Specifier** フィールドで `*/master` を削除して空白にします。これにより、すべてのブランチでジョブが実行されるようになります（MR をテストする際に便利です）。
![ソースコード管理の確認](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-7.png)
1. **Build Triggers** セクションまでスクロールします。`Build when a change is pushed to GitLab` のチェックボックスを有効にします。すべてのオプションはデフォルト値のままにします。
![ビルドトリガー](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-8.png)
1. **Build** セクションまでスクロールします。**Add build step** ドロップダウンメニューをクリックし、`Set build status to "pending" on GitHub commit` オプションを選択します。
1. **Post-build Actions** セクションまでスクロールします。**Add post-build action** ドロップダウンメニューをクリックし、`Publish build status to GitLab` オプションを選択します。
1. **Save** ボタンをクリックします。

#### オプション B - パイプラインプロジェクト

1. 前のタスクのプロジェクト設定ページにいない場合は、ダッシュボードからフォルダをクリックし、プロジェクトをクリックして、左サイドバーの **Configure** リンクをクリックすることで移動できます。
1. General セクションで **GitHub project** のチェックボックスを有効にします。

> インテグレーションの外見上の制限として、GitLab インテグレーションは GitHub 向けに構築されたものを使用するため、同じ基盤となる Git インテグレーションを使用する用語の重複があります。

1. GitHub project チェックボックスの下にある **Project url** フィールドに GitLab プロジェクトの URL をコピー＆ペーストするか、直接入力します。

```text
例
https://gitlab-core.us.gitlabdemo.cloud/demosys-users/jeffersonmartin/tutorial-app-jenkins-pipeline
```

1. **GitLab Connection** フィールドで、ドロップダウンメニューからまだ選択されていない場合は `GitLab Core US` オプションを選択します。この接続はシステム管理者によって事前に設定されています。
![GitLab 接続](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-5.png)
1. **Build Triggers** セクションまでスクロールします。`Build when a change is pushed to GitLab` のチェックボックスを有効にします。すべてのオプションはデフォルト値のままにします。
![ビルドトリガー](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-8.png)
1. Pipeline セクションで、Definition ドロップダウンを使用して `Pipeline Script from SCM` を選択します。
1. SCM には `Git` を選択します。
1. 展開されたセクションで **Repository URL** フィールドを見つけ、GitLab プロジェクトの URL をコピー＆ペーストします（手順 2 と同じ URL）。

```text
例
https://gitlab-core.us.gitlabdemo.cloud/demosys-users/jeffersonmartin/tutorial-app-jenkins-pipeline
```

> 接続エラーのメッセージが表示される場合があります。これは認証情報が選択されていないため想定される動作です。次の手順でドロップダウンメニューから認証情報を選択してください。

![認証情報エラーメッセージ](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-6.png)

1. **Credentials** ドロップダウンメニューで `integ_jenkins` オプションを選択します。**デモ環境では新しい認証情報を追加しないでください。**

> `integ_jenkins` オプションを選択すると、Jenkins サーバーは GitLab インスタンスの API に接続してリポジトリ URL を検索しようとします。成功した場合、エラーメッセージは自動的に消えます。

1. **Branch Specifier** フィールドの `*/master` を `origin/$gitlabSourceBranch` に置き換えます。
![image.png](/images/customer-success/demo-systems/tutorials/integrations/8D6SVFUIdQolYAAAAASUVORK5CYII=)
1. Script Path はデフォルトの `Jenkinsfile` のままにします。
1. `Lightweight checkout` はチェックしたままにします。
1. Save をクリックします。

### タスク 6. GitLab インテグレーション用の API トークンを生成する

デモ環境では、各ユーザーが自分の API トークンを生成します。本番環境では、セキュリティポリシーで許可されている場合、インテグレーション用のサービスアカウント的なユーザーを作成して API トークンの管理を簡素化することを検討してください。

1. ページ左上の Jenkins ロゴをクリックしてダッシュボードに戻ります。
1. 左サイドバーで **People** をクリックします。
1. ユーザーのリストから**自分のアカウントを見つけ**、ユーザー名をクリックします。
1. 左サイドバーで **Configure** をクリックします。
1. API Token セクションで **Add new Token** ボタンをクリックします。
1. `Default name` プレースホルダーがあるフォームフィールドに `GitLab integration` と入力し、**Generate** をクリックします。
1. 新しい 1Password レコードを作成するか、既存の GitLab Demo Account レコードのメモを生成された API トークンで更新します。

> このページから離れる前にトークンをコピーしないと、このトークンは再度表示されないため、新しいキーを生成する必要があります。

### タスク 7. GitLab プロジェクトを Jenkins と連携するよう設定する

GitLab でインテグレーションを設定します。プラグインのドキュメントの一部には、旧世代のインテグレーションである Webhook の設定手順が記載されています。Webhook も使用できますが、GitLab が現在提供しているインテグレーションほどの深さはありません。

GitLab プロジェクトを別のブラウザのタブまたはウィンドウでまだ開いている場合は、手順 5 にスキップできます。

1. [https://gitlabdemo.com](https://gitlabdemo.com) にアクセスします。
1. ダッシュボードで **GitLab Omnibus (US)** カード（枠線付きのセクション）を見つけます。
1. 青い **My Group** ボタンをクリックして、新しいタブを開き GitLab インスタンス上のグループにアクセスします。
1. GitLab のプロジェクトリストで、先ほど使用したアプリケーションのタイトルをクリックします（例: `Tutorial App - Jenkins Pipeline`）。
1. プロジェクトを開いた状態で、リポジトリのルートに `Jenkinsfile` が存在することを確認します。変更を加える必要はありません。

> ファイルが存在しない場合は、タスク 1 に戻って `Jenkinsfile` を作成するか、最初に使用したのと同じ GitLab プロジェクトを参照していることを確認してください。

1. 左サイドバーで **Settings > CI/CD** に移動します。
1. CI/CD 設定ページで **Auto DevOps** を見つけ、**展開** ボタンをクリックします。
1. `Default to Auto DevOps pipeline` のチェックボックスの選択を解除します。**Save changes** をクリックします。
![Auto DevOps 無効](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-9.png)
1. 左サイドバーで **Settings > Integrations** に移動します。
1. インテグレーションのリストで **Jenkins CI** をクリックします。
1. **Active** チェックボックスを見つけ、有効にするよう選択します。
1. **Jenkins URL** フィールドに Jenkins サーバーのベース URL を入力します。

```text
https://jenkins.us.gitlabdemo.cloud
```

1. **Project name** フィールドに、`{フォルダ名}/{プロジェクト名}` の表記でフォルダ名と Jenkins プロジェクト名を入力します。

```text
例
jeffersonmartin/tutorial-app-jenkins-pipeline
```

1. **Username** フィールドに GitLab のユーザー名を入力します（フォルダ名と同じです）。
1. **Enter new password** フィールドに、先ほど生成した新しい API トークンをコピー＆ペーストします。
![GitLab Jenkins CI インテグレーション](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-11.png)
1. **Test settings and save changes** ボタンをクリックします。

> エラーメッセージが表示された場合は、変数が正しいかどうかをデバッグして確認する必要があります。これは問題が発生しやすい部分ですが、軽いトラブルシューティングで大抵は解決できます。

### タスク 8. ブランチと MR を作成し、ファイルを変更してコミットイベントをトリガーする

1. 左サイドバーで **Repository > Branches** に移動します。
1. **Create Branch** ボタンをクリックし、ブランチ名を付けて保存します。
1. **Create Merge Request** ボタンをクリックし、ページ下部までスクロールして **Submit Merge Request** をクリックします。
1. **Open in Web IDE** をクリックします。
1. `README.md` ファイルを見つけてファイル名をクリックします。
1. テキストに変更を加えます（単語を変更する、行を追加するなど）。
1. **Commit changes** ボタンをクリックします。
1. マージリクエストに戻ります。

### タスク 9. GitLab UI で Jenkins パイプラインを確認する

1. マージリクエストに最新のパイプラインステータスが表示されているはずです。これは、Jenkins パイプラインのステータスを GitLab プロジェクトのマージチェック `Pipelines must succeed` と組み合わせることで、コードがマスターにマージされる前にビルドとテストが成功していることを確認できるため、顧客にとって価値があります。
1. パイプライン番号をクリックして詳細を表示します。
1. パイプラインの詳細では、Jenkins フリースタイルジョブを統合した場合は `Jenkins` ジョブが 1 つ表示されます。提示された Jenkinsfile を使ってパイプラインジョブを統合した場合は、`build` と `test` の 2 つのジョブが表示されます。任意のジョブを**右クリック**し、**Open Link in New Tab** を選択します。
![パイプライン Jenkins 右クリック](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-13.png)
1. Jenkins UI が読み込まれ、Jenkins で実行されたビルドジョブが表示されます。
![Jenkins ビルド](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-14.png)
1. Jenkins UI の左サイドバーで **Console Output** をクリックします。
1. コンソール出力を確認して、実行されたジョブの詳細を確認します。
![Jenkins コンソール出力](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/integrations/create-jenkins-pipeline-15.png)

## まとめ

GitLab プロジェクトと Jenkins CI の連携が完了しました。

認証には複数のアプローチ（共有、ユーザー単位、プロジェクト単位）があるため、Jenkins を統合する際は環境に最適なオプションを検討してください。

Jenkins インテグレーションの詳細については、[GitLab 公式ドキュメント](https://docs.gitlab.com/ee/integration/jenkins.html)をご覧ください。

また、`jenkinsci/gitlab-plugin` オープンソースインテグレーションの [GitHub にある README ドキュメント](https://github.com/jenkinsci/gitlab-plugin/blob/master/README.md)でも詳細を確認できます。

基本的な例を超えたステージと複数ステップを使った Jenkins の使い方については、[Jenkins ドキュメント](https://www.jenkins.io/doc/pipeline/tour/running-multiple-steps/)をご覧ください。
