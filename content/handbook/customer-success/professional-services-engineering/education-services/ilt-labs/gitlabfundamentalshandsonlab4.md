---
title: "GitLab 基礎 - ハンズオンラボ: コラボレーションとコードレビュー"
description: "このハンズオンガイドでは、変更のコラボレーションとコードレビューの作成方法を学習します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandsonlab4/
upstream_sha: 4253b2ab72b0791916a54411ca71a25276e128bd
translated_at: "2026-07-02T06:06:16+09:00"
translator: codex
stale: false
lastmod: 2026-06-26T10:02:20-04:00
---

> 完了までの推定時間: 30 分

## 目標

このラボでは、マージリクエストの作成とマージのプロセスを学習します。

## タスク A. マージリクエストの作成

前のラボでは、**test-commit** という名前の新しいブランチを作成しました。このセクションでは、このブランチからの変更をメインブランチにマージするためのマージリクエストを作成します。

1. `Cool App QA` プロジェクトに移動します。

1. 左サイドバーで **Code > Branches** を選択します。

1. **test-commit** の行で **New** を選択します。

1. **Title** フィールドに **Merging new file to main** というタイトルを入力します。

1. **Mark as draft** チェックボックスにチェックを入れます。これによりマージリクエストがドラフトとしてマークされ、ドラフト状態が解除されるまでマージできなくなります。

1. **Description** には任意の説明を入力します。

1. **Assignees** で **Assign to me** を選択します。

1. 他のオプションはすべてデフォルトのままにして、**Create merge request** を選択します。

**Create merge request** を選択すると、マージリクエストのページにリダイレクトされます。このページを詳しく見ていきましょう。

## タスク B. マージリクエストの確認

メインのマージリクエストページには、4 つのタブが表示されます。

- **Overview**: マージリクエストの概要（承認状況、マージリクエストのステータス、**Activity**、コメントを追加するためのコメントエリア）が表示されます。

- **Commits**: 現在のマージリクエストに含まれるすべてのコミットが表示されます。

- **Pipelines**: マージリクエストに関連する CI/CD パイプラインが表示されます。

- **Changes**: マージリクエストに関連する変更の差分が表示されます。

**Overview** タブに戻ります。このタブには注意すべき重要な詳細がいくつかあります。右サイドバーには、マージリクエストの詳細が表示されます。マージリクエストは現在あなたに割り当てられており、あなたがマージリクエストの内容に取り組んでいることを意味します。

次のメタデータもあります。

- **Assignees** は、マージリクエストの内容を更新する直接の責任を負う個人です。

- **Reviewers** には、マージリクエストに割り当てられたレビュアーが表示されます。承認はオプションのため、現在この欄は空です。

- **Labels** では、関連する他の作業のコンテキストで追跡するために、マージリクエストに組織的なラベルを追加できます。

- **Milestone** では、マージリクエストにマイルストーンを関連付けることができます。

- **Time Tracking** では、マージリクエストに費やした時間と、マージリクエストに費やすと見込まれる合計時間を追跡できます。

- **Participants** には、マージリクエストにコメントした、メンションされた、またはコミットしたすべての人が表示されます。

## タスク C. レビューを実施する

ブランチにコードを追加して、それをレビューするプロセスを実践してみましょう。

1. マージリクエストから **Code** ドロップダウンをクリックして **Open in Web IDE** を選択します。

1. 画面左上付近にある **New file** ボタンを選択し、`index.js` という名前のファイルを追加します。

1. ファイルに以下のコードを貼り付けます:

    ```js
        const http = require('http');

        var users = [
        { id: 1, name: 'Alice', password: 'password123' },
        { id: 2, name: 'Bob', password: 'admin' }
        ];

        const server = http.createServer((req, res) => {
        res.statusCode = 200;
        
        if (req.url === '/') {
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Welcome to My App!</h1><p>Visit /users to see all users</p>');
        } else if (req.url === '/users') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(users));
        } else if (req.url.startsWith('/user/')) {
            const userId = req.url.split('/')[2];
            const user = users[userId - 1];
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(user));
        } else {
            res.statusCode = 404;
            res.end('Not Found');
        }
        });

        const PORT = 3000;
        server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
        });
    ```

    > コードが正確に何をしているかは今は深く気にしないでください。アプリケーションのすべてのユーザーを表示する Web サイトを作成しています。

1. 画面左側の **Source control** ボタンを選択し、このコードを新しいブランチにコミットします。

    > では「開発者」の帽子を脱ぎ、「レビュアー」の帽子をかぶってこのコードをレビューしてみましょう。

1. マージリクエストに戻り、**Changes** タブを選択します。

1. このタブでコード行にカーソルを合わせると、レビューコメントを追加するオプションが表示されることに注意してください。

1. 新しいコードの数行に好きなコメントを残します。最初のコメントでは **Add comment now** ではなく **Start a review** ボタンを必ず選択し、その後のすべてのコメントでは **Add to review** を押します。

1. レビューが完了したら、画面の右上付近にある **Your review** ボタンを選択し、**Submit review** を選択してレビューコメントを送信します。

1. レビューコメントが公開され、**Overview** タブに移動すれば、マージリクエストの誰もが閲覧できるようになります。

## タスク D. エージェントによるレビュー

GitLab Duo が私たちのレビューコメントに同意するかどうか見てみましょう！

GitLab Duo は私たちの組み込み AI 機能セットです。コードの作成、コードのセキュリティ健全性のチェック、作業計画の支援、そしてこの場合のように、適切な書き方の観点からのコードレビューなど、さまざまなことを実行できます。最後のユースケースをこれから実践します。

1. GitLab Duo にコードレビューを実施させるには、マージリクエストの **Overview** タブに移動します。

1. マージリクエストの右側にある **Reviewers** メタデータセクションで **Edit** を選択し、**GitLab Duo** アカウントを選択します。

    > これにより GitLab Duo のコードレビューセッションがトリガーされます。

1. Duo にレビューを実施させるために 1〜2 分待ちます。

1. 完了すると、Duo があなたと同じようにマージリクエストの **Changes** タブにレビューコメントを追加していることが確認できます。これらのコメントはあなたのコメントのすぐ下の **Overview** タブにも表示されます。

1. Duo の提案に基づいて、先ほど同様にマージリクエストの Web IDE を使ってコードに変更を加えても構いません。

## タスク E. MR をマージする

1. マージリクエストの **Overview** タブに戻ります。

    > 画面の中央に **Merge blocked** というメッセージが表示されます。このセクションでは、コードをメインにマージすることを妨げている問題を確認できます。失敗したパイプラインからセキュリティスキャンの結果まで、設定に応じてさまざまな要因がマージリクエストをブロックする可能性があります。現在、リクエストがブロックされている理由は「Merge request must not be a draft」と表示されています。この問題を解決しましょう。

1. **Merge blocked** ブロック内の **Mark as ready** をクリックします。**Mark as ready** オプションが表示されない場合は、**Merge blocked** ブロックの右側にある矢印をクリックして展開してください。

1. **Merge** を選択します。

1. マージが完了したら、左サイドバーで **Code > Repository** を選択します。

コードリポジトリの **main** ブランチに新しいファイルが表示されます。

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandson)を確認できます。

## ご提案はありますか?

ラボへの変更を希望する場合は、マージリクエストで変更を送信してください。
