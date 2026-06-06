---
title: "GitLab with Git Fundamentals - ハンズオンラボ: 事前定義済みプロジェクトテンプレートを使った Auto DevOps"
description: "このハンズオンガイドでは、Auto DevOps パイプラインのセットアップと実行方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitbasicshandsonlab5/
upstream_sha: 7b4218e2684ab0e2d919cef32fcfba84065bf46b
lastmod: 2026-06-05T16:14:13+01:00
translated_at: "2026-06-06T12:00:00Z"
translator: claude
stale: false
---

> 所要時間の目安: 30 分

## 目標

GitLab Auto DevOps は、ソフトウェアデリバリープロセスを支援するために連携して動作する、事前設定された機能とインテグレーションの集まりです。Auto DevOps はプログラミング言語を検出し、CI/CD テンプレートを使ってデフォルトのパイプラインを作成・実行し、アプリケーションをビルド・テストします。その後、アプリをステージング環境や本番環境にデプロイするようデプロイを設定したり、ブランチごとに変更をプレビューできる Review Apps を設定したりできます。詳しくは[ドキュメント](https://docs.gitlab.com/ee/topics/autodevops/)をご覧ください。

言い換えると、Auto DevOps は自分で `.gitlab-ci.yml` ファイルを書いて使うことの代替手段です。

## タスク A. Auto DevOps を使った新しい Node JS Express プロジェクトを作成する

> Auto DevOps のしくみを示すために、NodeJS Express の事前定義済みテンプレートを使います。事前定義済みテンプレートを使うと、ゼロから始める代わりにベースプロジェクトから始められます。すべてのベースプロジェクトの一覧は[こちら](https://gitlab.com/gitlab-org/project-templates)にあります。

1. **My Test Group** に移動し、**New project** を選択します。

1. 空のプロジェクトを作成する代わりに、**Create from template** タイルをクリックします。

1. **NodeJS Express** の横にある **Use template** ボタンをクリックします。

1. **Project name** フィールドに `Auto DevOps Test Project` と入力します。

1. **Visibility Level** が **Private** になっていることを確認し、**Create project** ボタンをクリックします。

1. プロジェクトの上部に **Auto DevOps** というタイトルのバナーがあります。このバナーの下にある **Enable in settings** ボタンをクリックします。

   > このバナーが表示されない場合は、**Settings > CI/CD** に移動し、**Auto DevOps** の横にある **Expand** ボタンをクリックします。

1. **Default to Auto DevOps pipeline** チェックボックスをクリックします。

1. **Deployment strategy** で、**Automatic deployment to staging, manual deployment to production** をクリックします。

   > 自分のプロジェクトでは、別のデプロイ戦略を選んでもかまいません。各戦略について詳しくは、各オプションの横にある **青い疑問符** をクリックしてください。

1. **Save changes** ボタンをクリックします。

1. 左側のナビゲーションペインで **Code > Branches** をクリックします。

1. ブランチメニューで **New branch** をクリックします。

1. **Branch name** フィールドに `new-feature` と入力します。

1. **Create from** ブランチが **main** に設定されていることを確認します。

1. **Create branch** ボタンをクリックします。

1. 左側のナビゲーションペインで **Build > Pipelines** をクリックします。先ほど作成したブランチで **Auto DevOps** パイプラインが実行されているのが見えます。

1. パイプラインの **running** ステータスアイコンをクリックし、Auto DevOps が作成したステージ（パイプライングラフの列で表されます）とジョブを確認します。

   > パイプラインで `dast` ジョブが失敗することがあります。このジョブは、スキャンを正常に実行するために追加の設定が必要です。DAST スキャンの設定について詳しくは[ドキュメント](https://docs.gitlab.com/ee/user/application_security/dast/#configuration)をご覧ください。

## タスク B. 変更をコミットしてパイプラインの実行をトリガーする

> パイプラインを実行する最も一般的な方法は、プロジェクトのリポジトリのブランチにコミットすることです。このセクションでは、新しいコミットを適用し、その結果として実行されるパイプラインを確認します。

1. **Code > Repository** に移動します。

1. ウィンドウの左上付近で、現在 **main** と表示されているドロップダウンを選択し、**new-feature** ブランチに切り替えます。

1. リポジトリファイルの一覧で `server.js` ファイルをクリックします。

1. **Edit > Edit single file** をクリックし、`get` エンドポイントを次のように変更します。

   ```js
      app.get("/", (req, res) => {
         return res.status(200).send({
            message: "Hello World from GitLab!",
         });
      });
   ```

1. ファイルは次のようになっているはずです。

   ```js
   const express = require("express");
   const app = express();

   const port = process.env.PORT || 5000;

   app.get("/", (req, res) => {
      return res.status(200).send({
         message: "Hello World from GitLab!",
      });
   });

   app.listen(port, () => {
      console.log("Listening on " + port);
   });

   module.exports = app;
   ```

1. **Commit message** に `Update welcome message in server.js` と入力します。

1. **Target branch** は `new-feature` のままにします。

1. **Commit changes** ボタンをクリックします。

これらの変更をコミットすると、パイプラインが実行され、test ステージが失敗します。これは、テストケースが index ファイルの内容と一致しなくなったためです。パイプラインのテストが正常に実行されるようにするには、新しい index ファイルに合わせてテストも更新する必要があります。

1. リポジトリファイルの一覧で `tests` ディレクトリをクリックし、続いて `server.test.js` ファイルをクリックします。

1. **Edit > Edit single file** をクリックし、`assert.equal(res.body.message, 'Hello World!');` の行を `assert.equal(res.body.message, 'Hello World from GitLab!');` に変更します。編集が完了すると、コードは次のようになります。

   ```js
   const request = require('supertest');
   const assert = require('assert')
   const app = require('../server');

   describe('GET /', () => {
   it('responds responds to the world', async function() {
      const res = await request(app)
         .get('/')
         .set('Accept', 'application/json');

      assert.equal(res.status, 200);
      assert.equal(res.type, 'application/json');
      assert.equal(res.body.message, 'Hello World from GitLab!');
      });
   });

   describe('GET /404', () => {
      it('responds with a 404', async function() {
         const res = await request(app)
            .get('/404')
            .set('Accept', 'application/json');

         assert.equal(res.status, 404);
      });
   });

   ```

1. **Commit message** に `Update welcome message test` と入力します。

1. **Target branch** は `new-feature` のままにします。

1. **Commit changes** ボタンをクリックします。

1. 変更がコミットされたら、**Create merge request** ボタンをクリックします。

1. **Mark as draft** チェックボックスをクリックして、マージリクエストをドラフトに設定します。

   > タイトルの先頭に `DRAFT:` と入力すると、**Mark as draft** チェックボックスが自動的にチェックされます。

1. **Assignees** の横にある `Assign to me` オプションをクリックして、マージリクエストを自分に割り当てます。

1. その他のフィールドはすべてデフォルト値のままにし、ページ下部の **Create merge request** をクリックします。

1. マージリクエストをマージ可能な状態にするには、**Mark as ready** ボタンをクリックします。これで MR のタイトルから `Draft:` が削除されます。

   > これで、`new-feature` ブランチを `main` ブランチにマージするためのアクティブなマージリクエストができました。今いるページには、`new-feature` ブランチで最後に実行されたパイプラインのステータスを含む、そのマージリクエストの詳細が表示されています（パイプラインのステータスを確認するにはページの再読み込みが必要な場合があります）。GitLab は `new-feature` ブランチにコミットするたびに新しいパイプラインを実行します。

1. Auto DevOps パイプラインは、マージリクエストとともに自動的に実行されます。このパイプラインにはさまざまなステージとジョブが含まれます。パイプラインが実行されるにつれて、MR の中に新しいセクションが現れます。パイプラインが完了したら、ページを再読み込みして結果を確認します。

   > パイプラインが完了すると、**warning** ステータスが表示されることがあります。この警告は、`dast` スキャンが設定されていないことによるものです。この例では `dast` を使用しないため、この警告のまま進めて問題ありません。

1. 自分のマージリクエストパイプラインを選択します。

1. パイプラインの詳細には、Auto DevOps パイプラインに関連する 3 つのステージが表示されます。

- **build** ステージは、既存の Dockerfile または Heroku buildpack を使ってアプリケーションのビルドを作成します。作成された Docker イメージは **Container Registry** にプッシュされ、コミット SHA またはタグでタグ付けされます。build ステージが完了したら、**Deploy > Container Registry** に移動してアプリケーションを確認します。

- **test** ステージは、アプリケーションコードに対してさまざまなテストを実行し、コードが安全で高品質であることを確認します。いくつかのジョブを以下に説明します。

  - Dependency scan は、プロジェクトに追加された新しいライセンスや依存関係を検出するためにスキャンします。スキャンの詳細を確認するには、License Compliance セクションで **Full report** を選択します。レポートを確認したら、パイプラインに戻ります。

  - Code Quality scan は、main とマージリクエストのコードの間でコード品質が変化したかどうかを検出するためにスキャンします。コード品質の問題があれば、このセクションでフラグが立てられます。

  - SAST、Dependency、Secret Detection、Container Scan の各ジョブは、コードに新しい脆弱性が持ち込まれていないかをチェックします。スキャンの詳細を確認するには、Security Scanning セクションで **View all pipeline findings** を選択します。

- **dast** ステージは、実行中のバージョンのアプリケーションを使って、アプリケーションに対して API 呼び出しを実行することで見つけられる既知の脆弱性がないかをチェックします。DAST ジョブがスキャンするためのライブ環境を設定しなかったため、このジョブについては気にする必要はありません。

## ラボガイド完了

このラボ演習は完了です。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson)を見ることができます。
