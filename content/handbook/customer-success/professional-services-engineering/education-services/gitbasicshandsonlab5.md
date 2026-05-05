---
title: "GitLab with Git Fundamentals - ハンズオンラボ: 事前定義済みプロジェクトテンプレートを使った Auto DevOps"
description: "このハンズオンガイドでは、Auto DevOps パイプラインのセットアップと実行方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitbasicshandsonlab5/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:52:14Z"
translator: claude
stale: false
---

> 完了までの推定時間: 30 分

## 目標

GitLab Auto DevOps は、ソフトウェアデリバリープロセスをサポートするために連携して動作する、事前設定済みの機能と統合のコレクションです。Auto DevOps はプログラミング言語を検出し、CI/CD テンプレートを使用してアプリケーションをビルド・テストするためのデフォルトパイプラインを作成・実行します。その後、ステージングと本番環境へのデプロイを設定し、ブランチごとに変更をプレビューするための Review Apps をセットアップできます。詳細については[ドキュメント](https://docs.gitlab.com/ee/topics/autodevops/)をご覧ください。

つまり、Auto DevOps は独自の `.gitlab-ci.yml` ファイルを作成・使用する代替手段です。

## タスク A. Auto DevOps を使った新しい Node JS Express プロジェクトを作成する

> Auto DevOps がどのように機能するかを示すために、NodeJS Express の事前定義済みテンプレートを使用します。事前定義済みテンプレートを使用すると、一から始めるのではなく、ベースプロジェクトから始めることができます。すべてのベースプロジェクトの一覧は[こちら](https://gitlab.com/gitlab-org/project-templates)で確認できます。

1. **My Test Group** に移動し、**New project** を選択します。

1. 空のプロジェクトを作成する代わりに、**Create from template** タイルをクリックします。

1. **NodeJS Express** の隣にある **Use template** ボタンをクリックします。

1. **Project name** フィールドに `Auto DevOps Test Project` と入力します。

1. **Visibility Level** が **Private** であることを確認し、**Create project** ボタンをクリックします。

1. プロジェクトの上部に **Auto DevOps** というタイトルのバナーがあります。このバナーの下にある **Enable in settings** ボタンをクリックします。

   > このバナーが表示されない場合は、**Settings > CI/CD** に移動し、**Auto DevOps** の隣にある **Expand** ボタンをクリックします。

1. **Default to Auto DevOps pipeline** チェックボックスをクリックします。

1. **Deployment strategy** で **Automatic deployment to staging, manual deployment to production** をクリックします。

   > 自分のプロジェクトでは、別のデプロイメント戦略を選択することもできます。各戦略の詳細については、各オプションの横にある**青い疑問符**をクリックしてください。

1. **Save changes** ボタンをクリックします。

1. 左側のナビゲーションペインで **Code > Branches** をクリックします。

1. ブランチメニューで **New branch** をクリックします。

1. **Branch name** フィールドに `new-feature` と入力します。

1. **Create from** ブランチが **main** に設定されていることを確認します。

1. **Create branch** ボタンをクリックします。

1. 左側のナビゲーションペインで **Build > Pipelines** をクリックします。先ほど作成したブランチで **Auto DevOps** パイプラインが実行されているのが確認できます。

1. パイプラインの**実行中**ステータスアイコンをクリックし、Auto DevOps が作成したステージ（パイプライングラフの列で表される）とジョブを確認します。

   > パイプラインで `dast` ジョブが失敗する場合があります。このジョブは正常にスキャンするために追加の設定が必要です。DAST スキャン設定の詳細については[ドキュメント](https://docs.gitlab.com/ee/user/application_security/dast/#configuration)をご覧ください。

## タスク B. パイプライン実行をトリガーするために変更をコミットする

> パイプラインを実行する最も一般的な方法は、プロジェクトのリポジトリのブランチにコミットすることです。このセクションでは、新しいコミットを適用して結果のパイプラインを確認します。

1. **Code > Repository** に移動します。

1. ウィンドウ左上で、現在 **main** と表示されているドロップダウンで **new-feature** ブランチを選択して切り替えます。

1. リポジトリファイルの一覧で `server.js` ファイルをクリックします。

1. **Edit > Edit single file** をクリックし、`get` エンドポイントを次のように変更します:

   ```js
      app.get("/", (req, res) => {
         return res.status(200).send({
            message: "Hello World from GitLab!",
         });
      });
   ```

1. ファイルは次のようになります:

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

1. **Target branch** を `new-feature` のままにします。

1. **Commit changes** ボタンをクリックします。

これらの変更をコミットした後、パイプラインが実行され、テストステージが失敗します。これは、テストケースがインデックスファイルの内容と一致しなくなったためです。パイプラインのテストが正常に実行されるようにするには、新しいインデックスファイルに合わせてテストも更新する必要があります。

1. リポジトリファイルの一覧で `tests` ディレクトリをクリックし、次に `server.test.js` ファイルをクリックします。

1. **Edit > Edit single file** をクリックし、`assert.equal(res.body.message, 'Hello World!');` という行を `assert.equal(res.body.message, 'Hello World from GitLab!');` に変更します。編集後のコードは次のようになります:

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

1. **Target branch** を `new-feature` のままにします。

1. **Commit changes** ボタンをクリックします。

1. 変更がコミットされたら、**Create merge request** ボタンをクリックします。

1. **Mark as draft** チェックボックスをクリックして、マージリクエストをドラフトに設定します。

   > タイトルの先頭に `DRAFT:` と入力すると、**Mark as draft** チェックボックスが自動的にチェックされます。

1. **Assignees** の横にある `Assign to me` オプションをクリックして、マージリクエストを自分自身に割り当てます。

1. 他のフィールドはすべてデフォルト値のままにし、ページ下部の **Create merge request** をクリックします。

1. マージリクエストをマージ可能な状態にするには、**Mark as ready** ボタンをクリックします。これにより MR のタイトルから `Draft:` が削除されます。

   > これで `new-feature` ブランチを `main` ブランチにマージするためのアクティブなマージリクエストが用意できました。このページにはそのマージリクエストの詳細が表示されており、`new-feature` ブランチで最後に実行されたパイプラインのステータスも含まれます（パイプラインのステータスを確認するにはページを更新する必要があるかもしれません）。GitLab は `new-feature` ブランチにコミットするたびに新しいパイプラインを実行します。

1. Auto DevOps パイプラインはマージリクエストとともに自動的に実行されます。このパイプラインにはさまざまなステージとジョブが含まれています。パイプラインが実行されると、MR 内に新しいセクションが表示されます。パイプラインが完了したら、ページを更新して結果を確認します。

   > パイプラインが完了すると**警告**ステータスが表示される場合があります。警告は `dast` スキャンが設定されていないためです。この例では `dast` を使用しないため、この警告が表示されても問題ありません。

1. マージリクエストのパイプラインを選択します。

1. パイプラインの詳細で、Auto DevOps パイプラインに関連する 3 つのステージが表示されます:

- **build** ステージ: 既存の Dockerfile または Heroku ビルドパックを使ってアプリケーションのビルドを作成します。作成された Docker イメージは**コンテナレジストリ**にプッシュされ、コミット SHA またはタグでタグ付けされます。ビルドステージが完了したら、**Deploy > Container Registry** に移動してアプリケーションを確認します。

- **test** ステージ: アプリケーションコードにさまざまなテストを実行し、セキュアで高品質であることを確認します。以下にいくつかのジョブの説明を示します:

  - Dependency スキャンは、プロジェクトに追加された新しいライセンスと依存関係を検出するためにスキャンします。License Compliance セクションの **Full report** を選択してスキャンの詳細を確認します。レポートを確認したら、パイプラインに戻ります。

  - Code Quality スキャンは、main とマージリクエストのコード間でコード品質が変化したかどうかを検出するためにスキャンします。コード品質の問題が存在する場合、このセクションでフラグが立てられます。

  - SAST・Dependency・Secret Detection・Container Scan ジョブは、コードに新しい脆弱性が導入されていないかどうかを確認します。Security Scanning セクションの **View all pipeline findings** を選択してスキャンの詳細を確認します。

- **dast** ステージ: アプリケーションの実行中のバージョンを使用し、API コールを実行することで既知の脆弱性がないかを確認します。DAST ジョブがスキャンするためのライブ環境を設定しなかったため、このジョブについては気にする必要はありません。

## ラボガイド完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson)を見ることができます。

## ご提案は？

ラボへの変更を提案したい場合は、マージリクエストを通じて送信してください。
