---
title: "GitLab Duo Agent Platform - ハンズオンラボ: 基本フローを使用する"
description: "このハンズオンガイドでは、GitLab で基本フローを使用する基本を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandsonlab1/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T04:51:58Z"
translator: claude
stale: false
---

> 完了目安時間: 20 分

## 目標

このラボを修了すると、次のことができるようになります。

- GitLab 環境で基本フローを有効化する。
- 事前に作成した説明文を使用して Issue を作成する。
- **Generate MR With Duo** 基本フローを使用して、Issue からマージリクエストを自動作成する。
- エージェントが生成したマージリクエストに対してコードレビューフローをトリガーし、AI フィードバックを確認する。
- エージェントが生成したコード変更をレビューしてマージする。

## 概要

基本フローとは、カスタム設定や追加コードなしに、GitLab に直接組み込まれた一般的な開発タスクを自動化するワークフローです。ブランチのスキャフォールディング、ボイラープレートの作成、マージリクエストの手動オープンを行う代わりに、基本フローはこれらの作業を GitLab Duo に委任し、コンテキスト切り替えを減らしながらアイデアからコードまでの時間を短縮します。

Swag Shop チームの開発者として入社初週を想像してください。ホームページではおすすめ商品が区別されておらず、そうすべきです。あなたは基本フローを使ったことがありませんが、今が試すべきタイミングです。

このラボでは、基本フローを使用して Issue からマージリクエストを生成し、コードレビューフローをトリガーしてマージします。最終的におすすめバッジが公開され、フローが何をできるかについての実践的な理解を得られます。

## タスク A: プロジェクトをセットアップして Issue を作成する

### タスク A.1: 基本フローを有効化する

まず、グループレベルで基本フローを有効化する必要があります。この設定により、GitLab Duo はグループ内のプロジェクトでブランチの作成やマージリクエストの生成などのワークフローを自動化できるようになります。

1. ログイン後、左サイドバーで `Groups` を選択します。

1. グループ一覧から自分のグループを選択します。名前は `Group` で始まります。

1. **Settings > General** に移動します。

1. **GitLab Duo features** セクションを展開します。

1. **Allow foundational flows** の下で、各フローのチェックボックスをオンにしてすべてのフローを有効化します。7 つのフローが一覧表示されます。

1. 下にスクロールして **Save changes** をクリックします。

### タスク A.2: サンプルプロジェクトをフォークする

このラボでは、エージェントが作業する現実的なコードベースを提供するために、事前構築されたサンプルプロジェクトを使用します。自分のネームスペースにフォークすることで、ソースに影響を与えることなく自由に変更できる個人コピーを取得できます。

1. GitLab Swag Shop プロジェクト（https://ilt.gitlabtraining.cloud/professional-services-classes/templates/gitlab-swag-shop）に移動します。

1. 右上隅の **Fork** をクリックします。

1. **Project name** フィールドに `GitLab Swag Shop Flows` と入力します。

1. **Project URL** フィールドの **Select a namespace** で、トップレベルグループ（例: `group-abcde-user_fghijk`）を選択します。

1. 残りの設定はそのままにして **Fork project** をクリックします。

フォークの完了には数分かかる場合があります。完了後、プロジェクトに含まれている事前構築済みファイルを確認してください。これらのファイルは残りのラボ全体で使用されます。

### タスク A.3: フォーク関係を削除する

フォーク関係を削除することで、あなたのコピーが完全に独立したリポジトリとして確立され、基本フローがフォークのみに作用するようになります。

1. 左サイドバーで **Settings > General > Advanced** を選択します。

1. **Remove fork relationship** セクションを見つけて **Remove fork relationship** をクリックします。

1. プロジェクト名を入力して **Confirm** を選択します。

### タスク A.4: 初回パイプラインを実行する

Swag Shop Flows プロジェクトでは、GitLab Pages を使用してウェブアプリケーションをホストしています。Pages のデプロイは CI/CD パイプラインによってトリガーされます。少なくとも 1 回のパイプラインが正常に実行されるまで、デプロイ済みサイトを確認できません。この最初のパイプラインを手動でトリガーする必要があります。

1. 左サイドバーで **Build > Pipelines** を選択します。

1. **New pipeline** をクリックします。

1. すべての設定をデフォルトのままにして **New pipeline** をクリックします。

1. 先に進む前に、パイプラインが正常に完了するまで待ちます。数分かかります。

### タスク A.5: アプリケーションを確認する

パイプラインが完了すると、Swag Shop がデプロイされてプレビュー可能になります。

1. 左サイドバーで **Deploy > Pages** に移動します。

1. **Visit site** をクリックして、ブラウザでライブの Swag Shop を開きます。

   >**注:** ホームページにはまだおすすめ商品がありません。これがベースラインです。後でラボのエージェントの変更をマージすると、ここに戻ってリフレッシュし、おすすめバッジとボーダーが表示されていることを確認します。

1. このタブを開いたままにしてください。

### タスク A.6: Issue を作成する

エージェントは Issue のタイトルと説明を読んで、必要なコード変更を理解します。適切に書かれた Issue は正確な結果を生成するために不可欠です。

1. `GitLab Swag Shop Flows` プロジェクトに戻ります。

1. **Plan > Work items** に移動します。

1. **New item** をクリックします。

1. **Type** フィールドが **Issue** に設定されていることを確認します。

1. 次のタイトルを入力します。

   ```prompt
   Add Featured Products Styling to Homepage
   ```

1. 説明ボックスの下部で `Switch to plain text editing` を選択して、Markdown 編集モードに切り替えます。

1. Issue の説明フィールドに以下の Markdown テキストを貼り付けます。

   ```markdown
   ## Add Featured Products Styling to Homepage

   ### Description
   The homepage currently displays the first six products from the database without any visual distinction. We should add special styling to highlight featured products and improve the shopping experience.

   ### Requirements
   - Style featured products with a special badge and border to distinguish them from regular products
   - Ensure the section is responsive and looks good on mobile devices
   - Featured products should still be clickable and add-to-cart functional

   ### Acceptance Criteria
   - Featured products have a visual indicator (badge and border)
   - All featured products are clickable and functional
   - The layout is responsive on mobile devices
   - No console errors or warnings
   ```

1. **Create issue** をクリックします。

### タスク A の期待される出力

- GitLab Swag Shop Flows プロジェクトが自分のネームスペースに存在し、リポジトリに事前構築済みファイル構造が表示されている。
- **Settings > General > GitLab Duo features** で 7 つの基本フローが有効化されている。
- Pages URL がホームページにおすすめ商品のないライブ Swag Shop を開く。
- エージェントが Markdown テキストから Issue を作成した。

## タスク B: 基本フローを使用してマージリクエストを作成する

### タスク B.1: 基本フローをトリガーする

Issue が作成されたので、Issue ビューから基本フローを直接呼び出すことができます。GitLab Duo は Issue の説明を読み、コードベースを分析し、適切なコード変更を含むマージリクエストを生成します。手動でブランチを作成したりコーディングしたりする必要はありません。

1. **Add Featured Products Styling to Homepage** Issue を開きます。

1. **Generate MR With Duo** ボタンをクリックします。このプロセスは完了するまで数分かかります。

### タスク B.2: セッション完了を確認する

1. セッションは右パネルに自動的に開きます。また、**Automate > Sessions** に移動してセッションを見つけることもできます。

1. **Details** タブをクリックして、セッションのステータスが **Finished** に変わるまで待ちます。

1. **Activity** タブをクリックして、アクティビティフィードにタスク完了のために実行されたアクションのサマリーが表示されていることを確認します。

>**Details と Activity の違い:** Details タブには、セッション全体のステータスと開始時刻や所要時間などの概要メタデータが表示されます。Activity タブには、エージェントが実行した各ステップ（呼び出したツール、読み込んだもの、作成したもの、順序など）のログが表示されます。Details で完了を確認し、Activity で実際に何が起きたかを理解してください。

### タスク B.3: マージリクエストをレビューする

エージェントセッションが完了したら、マージリクエストを開いてエージェントが作成したものをレビューします。まだマージしません。このステップはコードレビューが実行される前に変更を理解するためのものです。

1. **Code > Merge requests** に移動して、エージェントが作成したマージリクエストを開きます。

1. **Changes** タブを選択して、エージェントが変更または作成したすべてのファイルをレビューします。

1. **Pipelines** タブを選択して、パイプラインがすべての検証ステージを完了し、すべてのチェックが通過していることを確認します。

パイプラインはビルド、テスト、Pages へのデプロイを実行します。マージ前に 3 つすべてが通過している必要があります。先に進む前にすべてがグリーンであることを確認してください。

### タスク B の期待される出力

- マージリクエストが **Code > Merge Requests** に表示され、GitLab Duo に帰属している。
- **Automate > Sessions** の Activity タブにエージェントが実行したことのステップごとのログが表示される。
- マージリクエストのパイプラインがすべてのステージでグリーンになっている。

## タスク C: コードレビューフローをトリガーする

コードレビューをトリガーする前に、マージリクエストを準備完了としてマークする必要があります。コードレビューフローはドラフトステータスでないマージリクエストのみで実行されます。ドラフト MR は作業がまだ進行中であることを示し、レビューワークフローから除外されます。

### タスク C.1: マージリクエストを準備完了としてマークする

1. **Code > Merge Requests** に移動して、タスク B で作成したマージリクエストを開きます。

1. **Overview** タブを選択します。

1. 下にスクロールして **Mark as ready** をクリックします。

   >**なぜドラフトステータスなのか？** GitLab Duo は設計上マージリクエストをドラフトステータスで作成します。ドラフトマージリクエストは、作業がまだ進行中であり、まだマージすべきでないことをチームに示します。マージキューや自動マージルールから除外されます。準備完了としてマークすることは、変更がレビューされたことの明示的な確認です。これが「人間がループに入る」原則です: エージェントが生成し、あなたが決定します。

### タスク C.2: レビュアーとして GitLab Duo を割り当てる

1. マージリクエスト概要ページで、右サイドバーの **Reviewers** セクションを見つけます。

1. Reviewers の隣の **Edit** をクリックして GitLabDuo を検索します。選択してレビュアーとして **GitLab Duo** を割り当てます。
   
   >**代替トリガー:** マージリクエストの任意のコメントボックスに `/assign_reviewer @GitLabDuo` と入力してコードレビューフローをトリガーすることもできます。

### タスク C.3: コードレビューの出力をレビューする

1. **Overview** タブから **Activity** セクションまでスクロールします。

1. コメントをリアルタイムで確認します。

   >**表示内容について:** GitLab Duo コードレビューは、レビュアーとしてリクエストされたときにマージリクエストを自動的にレビューします。差分の変更を分析し、発見した内容を説明するサマリーコメントと、影響を受けるコードの行に直接インラインサジェスチョンを投稿します。サジェスチョンはコード品質、保守性、ベストプラクティスなどに焦点を当てています。この場合、デザイントークンを使用すべきハードコードされた値と CSS プロパティの欠落が指摘されました。

1. GitLab Duo が投稿したコメントを読み通してください。それぞれについて、サジェスチョンに同意するかどうか、マージ前にどのように対処するかを検討してください。

### タスク C の期待される出力

- GitLab Duo がマージリクエストの Reviewers セクションに表示されている。
- マージリクエストの **Overview** タブに GitLab Duo からの少なくとも 1 つのコメントが表示されている。

## タスク D: マージリクエストをレビューしてマージする

マージする準備が整いました。これは変更がレビューされ、メインブランチに統合する準備ができたという明示的な承認です。

### タスク D.1: レビューしてマージする

1. **Code > Merge Requests** に移動してマージリクエストを開きます。

1. **Overview** タブに戻ります。

1. **Merge** ボタンを選択します。

### タスク D.2: 更新されたアプリケーションを確認する

変更がマージされると、パイプラインが実行されて更新されたアプリケーションが Pages にデプロイされます。

1. **Build > Pipelines** に移動して、マージパイプラインを見つけます。

1. パイプラインが完了するまで待ちます。

1. Swag Shop ブラウザタブに戻ってページをリフレッシュします。

1. おすすめ商品にホームページで「おすすめ」バッジと新しいボーダーが表示されていることを確認します。

### タスク D の期待される出力

- マージリクエストのステータスが **Merged** を示し、リンクされた Issue がクローズされている。
- Swag Shop のホームページのおすすめ商品に「おすすめ」バッジとボーダーが表示されている。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandson.md)を確認できます。

## ご意見・ご提案

ラボへの変更を希望する場合は、マージリクエスト経由で変更を送信してください。
