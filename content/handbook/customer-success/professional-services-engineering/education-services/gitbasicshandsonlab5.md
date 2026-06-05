---
title: "GitLab with Git Fundamentals - ハンズオンラボ: 事前定義済みプロジェクトテンプレートを使った Auto DevOps"
description: "このハンズオンガイドでは、Auto DevOps パイプラインのセットアップと実行方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitbasicshandsonlab5/
upstream_sha: 228e83810bd79bddf58ab0b0b518b1d52bd74fb7
translated_at: "2026-06-05T21:08:33Z"
translator: claude
stale: false
model: claude-opus-4-7
lastmod: "2026-06-05T16:14:13+01:00"
---

> 完了までの所要時間目安: 30 分

## 目的

GitLab Auto DevOps は、ソフトウェアデリバリープロセスをサポートするために連携して動作する、事前構成済みの機能と統合のコレクションです。Auto DevOps はプログラミング言語を検出し、CI/CD テンプレートを使ってデフォルトのパイプラインを作成・実行し、アプリケーションをビルド・テストします。その後、ステージングや本番にアプリをデプロイするデプロイメントを設定したり、ブランチごとに変更をプレビューするための Review Apps を設定したりできます。詳しくは[ドキュメント](https://docs.gitlab.com/ee/topics/autodevops/)を参照してください。

言い換えれば、Auto DevOps は独自の `.gitlab-ci.yml` ファイルを書いて使う代替手段です。

## タスク A. Auto DevOps で新しい Node JS Express プロジェクトを作成する

> Auto DevOps の動作を示すために、NodeJS Express の事前定義テンプレートを使用します。事前定義テンプレートを使うと、ゼロから始める代わりにベースプロジェクトから着手できます。すべてのベースプロジェクトのリストは[こちら](https://gitlab.com/gitlab-org/project-templates)で確認できます。

1. **My Test Group** に移動し、**New project** を選択します。

1. 空のプロジェクトを作成する代わりに、**Create from template** タイルをクリックします。

1. **NodeJS Express** の隣にある **Use template** ボタンをクリックします。

1. **Project name** フィールドに `Auto DevOps Test Project` と入力します。

1. **Visibility Level** が **Private** であることを確認し、**Create project** ボタンをクリックします。

1. プロジェクトの上部に **Auto DevOps** というタイトルのバナーがあります。このバナーの下にある **Enable in settings** ボタンをクリックします。

   > このバナーが表示されない場合は、**Settings > CI/CD** に移動し、**Auto DevOps** の隣にある **Expand** ボタンをクリックします。

1. **Default to Auto DevOps pipeline** チェックボックスをクリックします。

1. **Deployment strategy** で、**Automatic deployment to staging, manual deployment to production** をクリックします。

   > 自分のプロジェクトでは、別のデプロイメント戦略を選んでもかまいません。各戦略の詳細を学ぶには、各オプションの隣にある **青いクエスチョンマーク** をクリックします。

1. **Save changes** ボタンをクリックします。

1. 左側のナビゲーションペインで **Code > Branches** をクリックします。

1. ブランチメニューで **New branch** をクリックします。

1. **Branch name** フィールドに `new-feature` と入力します。

1. **Create from** ブランチが **main** に設定されていることを確認します。

1. **Create branch** ボタンをクリックします。

1. 左側のナビゲーションペインで **Build > Pipelines** をクリックします。先ほど作成したブランチで **Auto DevOps** パイプラインが実行されているのが見えます。

1. パイプラインの **running** ステータスアイコンをクリックし、Auto DevOps が作成したステージ（パイプライングラフでは列として表されます）とジョブを確認します。

   > パイプラインで `dast` ジョブが失敗するかもしれません。このジョブはスキャンを成功させるための追加設定が必要です。DAST スキャン設定について詳しく学ぶには、[ドキュメント](https://docs.gitlab.com/ee/user/application_security/dast/#configuration)を参照してください。

## タスク B. パイプライン実行をトリガーする変更をコミットする

> パイプラインを実行する最も一般的な方法は、プロジェクトのリポジトリのブランチにコミットすることです。このセクションでは、新しいコミットを適用して、結果として走るパイプラインを確認します。

1. **Code > Repository** に移動します。

1. ウィンドウの左上付近で、現在 **main** と表示されているドロップダウンを選択し、**new-feature** ブランチに切り替えます。

1. リポジトリのファイル一覧で `server.js` ファイルをクリックします。

1. **Edit > Edit single file** をクリックし、`get` エンドポイントを次のように修正します:

   ```js
      app.get("/", (req, res) => {
         return res.status(200).send({
            message: "Hello World from GitLab!",
         });
      });
   ```

1. ファイルは次のようになっているはずです:

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

これらの変更をコミットすると、パイプラインが実行され、test ステージが失敗します。これは、テストケースが index ファイルの内容と一致しなくなったためです。パイプラインのテストが成功するようにするには、新しい index ファイルに合わせてテストも更新する必要があります。

1. リポジトリのファイル一覧で `tests` ディレクトリをクリックし、続けて `server.test.js` ファイルをクリックします。

1. **Edit > Edit single file** をクリックし、`assert.equal(res.body.message, 'Hello World!');` という行を `assert.equal(res.body.message, 'Hello World from GitLab!');` に変更します。編集を終えると、コードは次のようになります:

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

1. **Assignees** の隣にある `Assign to me` オプションをクリックして、マージリクエストを自分にアサインします。

1. それ以外のフィールドはデフォルト値のままにし、ページ下部の **Create merge request** をクリックします。

1. マージリクエストをマージ可能としてマークするため、**Mark as ready** ボタンをクリックします。これにより MR のタイトルから `Draft:` が削除されます。

   > これで `new-feature` ブランチを `main` ブランチにマージするためのアクティブなマージリクエストが揃いました。あなたが今いるページにはマージリクエストの詳細が表示されており、その中には `new-feature` ブランチで実行された最後のパイプラインのステータスも含まれます（パイプラインステータスを見るためにページの再読み込みが必要かもしれません）。GitLab は `new-feature` ブランチにコミットするたびに新しいパイプラインを実行します。

1. Auto DevOps パイプラインは、マージリクエストとともに自動的に実行されます。このパイプラインにはさまざまなステージとジョブが含まれます。パイプラインが実行されると、MR の中に新しいセクションが現れるのが見えます。パイプラインが完了したら、ページを再読み込みして結果を確認します。

   > パイプラインが完了すると、**warning** ステータスが表示されることがあります。この警告は `dast` スキャンが設定されていないことが原因です。今回の例では `dast` を使用しないので、この警告のまま進めて問題ありません。

1. マージリクエストパイプラインを選択します。

1. パイプラインの詳細に、Auto DevOps パイプラインに関連する 3 つのステージが見えます:

- **build** ステージ。既存の Dockerfile や Heroku buildpacks を使ってアプリケーションのビルドを作成します。生成された Docker イメージは **Container Registry** にプッシュされ、コミット SHA またはタグでタグ付けされます。build ステージが完了したら、**Deploy > Container Registry** に移動してアプリケーションを確認します。

- **test** ステージ。アプリケーションコードに対してさまざまなテストを実行し、安全で高品質であることを保証します。いくつかのジョブを以下で説明します:

  - Dependency scan は、プロジェクトに追加された新しいライセンスや依存関係を検出するためにスキャンします。スキャン詳細を確認するには、License Compliance セクションで **Full report** を選択します。レポートを確認したら、パイプラインに戻ります。

  - Code Quality scan は、main とマージリクエストのコード間でコード品質に変化があるかを検出するためにスキャンします。コード品質の問題があれば、このセクションでフラグが立てられます。

  - SAST、Dependency、Secret Detection、Container Scan の各ジョブは、コードに新しい脆弱性が混入していないかをチェックします。スキャン詳細を確認するには、Security Scanning セクションで **View all pipeline findings** を選択します。

- **dast** ステージ。アプリケーションの実行中バージョンを使い、アプリケーションに対して API コールを行うことで検出できる既知の脆弱性があるかをチェックします。今回 DAST ジョブがスキャンするためのライブ環境を設定していないため、このジョブを気にする必要はありません。

## ラボガイド完了

このラボ演習は完了です。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson)を確認できます。
