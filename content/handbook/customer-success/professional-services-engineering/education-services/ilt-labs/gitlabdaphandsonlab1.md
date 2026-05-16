---
title: "GitLab Duo Agent Platform - ハンズオンラボ: Foundational Flow を使用する"
description: "このハンズオンガイドでは、GitLab で Foundational Flow を使用する基本を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandsonlab1/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-01T11:26:38-04:00"
---

> 完了までの推定時間: 20 分

## 目的

このラボが終了するまでに、以下のことができるようになります。

- GitLab 環境で foundational flow を有効化する。
- 事前に作成された説明を使って Issue を作成する。
- **Generate MR With Duo** foundational flow を使って Issue から自動でマージリクエストを作成する。
- エージェントが生成したマージリクエストで Code Review Flow をトリガーし、AI のフィードバックをレビューする。
- エージェントが生成したコード変更をレビューしてマージする。

## 概要

Foundational flow とは、GitLab に直接組み込まれたワークフローで、カスタム設定や追加コードなしで一般的な開発タスクを自動化します。手動でブランチをスキャフォールディングしたり、ボイラープレートを書いたり、マージリクエストを開いたりするのではなく、foundational flow はその作業を GitLab Duo に委任し、コンテキストスイッチを減らしてアイデアからコードへの移行を素早くします。

あなたは Swag Shop チームの開発者として、初週を迎えていると想像してください。ホームページは featured 製品を区別していないですが、本来は区別すべきです。あなたは foundational flow を使ったことがありませんが、今こそ試すべきタイミングです。

このラボでは、foundational flow を使って Issue からマージリクエストを生成し、Code Review Flow をトリガーしてマージします。最後には、featured バッジが反映され、自分が手を動かさずに flow が何をできるか、実感を持って理解できます。

## タスク A: プロジェクトをセットアップして Issue を作成する

### タスク A.1: Foundational Flow を有効化する

まず、グループレベルで foundational flow を有効化する必要があります。この設定により、GitLab Duo がグループ内のプロジェクトで、ブランチの作成やマージリクエストの生成などのワークフローを自動化できるようになります。

1. ログイン後、左サイドバーで `Groups` を選択します。

1. グループリストから、自分のグループを選択します。名前は `Group` で始まります。

1. **Settings > General** に移動します。

1. **GitLab Duo features** セクションを展開します。

1. **Allow foundational flows** の下で、各 flow の横にあるチェックボックスをチェックしてすべての flow を有効化します。7 個の flow がリストされているはずです。

1. スクロールダウンして **Save changes** をクリックします。

### タスク A.2: サンプルプロジェクトをフォークする

このラボでは、エージェントが対象とするための現実的なコードベースを与えるために、事前にビルドされたサンプルプロジェクトを使用します。自分の名前空間にフォークすることで、ソースに影響を与えずに自由に変更できる個人用のコピーを取得できます。

1. GitLab Swag Shop プロジェクト（https://ilt.gitlabtraining.cloud/professional-services-classes/templates/gitlab-swag-shop）に移動します。

1. 右上のコーナーで **Fork** をクリックします。

1. **Project name** フィールドに `GitLab Swag Shop Flows` と入力します。

1. **Project URL** フィールドの **Select a namespace** で、トップレベルグループ（例: `group-abcde-user_fghijk`）を選択します。

1. 残りの設定はそのままにして **Fork project** をクリックします。

フォーク完了には少し時間がかかることがあります。完了したら、プロジェクトに含まれている事前ビルドのファイルを確認してください。これらは残りのラボを通じて使用されます。

### タスク A.3: フォーク関係を削除する

フォーク関係を削除することで、あなたのコピーが完全に独立したリポジトリとなり、foundational flow が自分のフォークのみに対して作用することが確実になります。

1. 左サイドバーで **Settings > General > Advanced** を選択します。

1. **Remove fork relationship** セクションを見つけて **Remove fork relationship** をクリックします。

1. プロジェクト名を入力して **Confirm** を選択します。

### タスク A.4: 初期パイプラインを実行する

Swag Shop Flows プロジェクトは GitLab Pages を使って Web アプリケーションをホストします。Pages のデプロイは CI/CD パイプラインによってトリガーされます。少なくとも1つのパイプラインが正常に実行されるまで、表示できるデプロイ済みサイトはありません。最初のパイプラインを手動でトリガーする必要があります。

1. 左サイドバーで **Build > Pipelines** を選択します。

1. **New pipeline** をクリックします。

1. すべての設定をデフォルトのままにして **New pipeline** をクリックします。

1. 続行する前に、パイプラインが正常に完了するのを待ちます。これには数分かかります。

### タスク A.5: アプリケーションを表示する

パイプラインが完了し、Swag Shop はデプロイされてプレビューする準備ができました。

1. 左サイドバーで **Deploy > Pages** に移動します。

1. **Visit site** をクリックしてブラウザでライブ Swag Shop を開きます。

   >**注:** ホームページにはまだ featured 製品はありません。これがあなたのベースラインです。後ほどラボでエージェントの変更をマージした後、ここに戻ってリフレッシュし、featured バッジとボーダーが表示されることを確認します。

1. このタブを開いたままにしておきます。

### タスク A.6: Issue を作成する

エージェントは Issue のタイトルと説明を読み取って、どのようなコード変更が必要かを理解します。よく書かれた Issue は、正確な結果を生成するために不可欠です。

1. `GitLab Swag Shop Flows` プロジェクトに戻ります。

1. **Plan > Work items** に移動します。

1. **New item** をクリックします。

1. **Type** フィールドが **Issue** に設定されていることを確認します。

1. 以下のタイトルを入力します。

   ```prompt
   Add Featured Products Styling to Homepage
   ```

1. 説明ボックスの下部で、`Switch to plain text editing` を選択して markdown 編集モードに入ります。

1. 以下の markdown テキストを Issue の説明フィールドに貼り付けます。

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

### 期待される出力: タスク A

- GitLab Swag Shop Flows プロジェクトがあなたの名前空間に存在し、事前ビルドのファイル構造がリポジトリに表示されている。
- 7 つの foundational flow が **Settings > General > GitLab Duo features** で有効化されている。
- Pages URL を開くとライブ Swag Shop が表示され、ホームページに featured 製品はない。
- エージェントが markdown テキストから Issue を作成した。

## タスク B: Foundational Flow を使ってマージリクエストを作成する

### タスク B.1: Foundational Flow をトリガーする

Issue が作成された状態で、Issue ビューから直接 foundational flow を呼び出すことができます。GitLab Duo は Issue の説明を読み取り、コードベースを分析し、適切なコード変更を含むマージリクエストを生成します。手動のブランチ作成やコーディングは必要ありません。

1. **Add Featured Products Styling to Homepage** Issue を開きます。

1. **Generate MR With Duo** ボタンをクリックします。このプロセスには数分かかります。

### タスク B.2: セッションの完了を確認する

1. セッションは右側のパネルで自動的に開くはずです。**Automate > Sessions** に移動してセッションを見つけることもできます。

1. セッションをクリックして開き、アクティビティフィードがタスクを完了するために取ったアクションのサマリーを報告していることを確認します。

### タスク B.3: マージリクエストをレビューする

エージェントセッションが完了したら、マージリクエストを開いてエージェントが生成したものをレビューします。まだマージはしません。このステップは、コードレビューが実行される前に変更を理解することについてです。

1. **Code > Merge requests** に移動し、エージェントによって作成されたマージリクエストを開きます。

1. **Changes** タブを選択して、エージェントによって変更または作成されたすべてのファイルをレビューします。

1. **Pipelines** タブを選択し、パイプラインがすべての検証段階を完了し、すべてのチェックが通過するのを待ちます。

パイプラインは build、test、deploy to Pages を実行します。マージする前に 3 つすべてが通過する必要があります。続行する前にすべてが緑色であることを確認します。

### 期待される出力: タスク B

- マージリクエストが **Code > Merge Requests** に表示され、GitLab Duo に帰属している。
- **Automate > Sessions** の Activity タブにエージェントが行った内容のステップバイステップのログが表示される。
- マージリクエストのパイプラインがすべてのステージにわたって緑色で通過している。

## タスク C: Code Review Flow をトリガーする

コードレビューをトリガーする前に、マージリクエストを ready 状態としてマークする必要があります。Code Review Flow は draft 状態を抜けたマージリクエストでのみ実行されます。Draft の MR は、作業がまだ進行中であることを示し、レビューワークフローから除外されます。

### タスク C.1: マージリクエストを Ready としてマークする

1. **Code > Merge Requests** に移動し、タスク B で作成したマージリクエストを開きます。

1. **Overview** タブを選択します。

1. スクロールダウンして **Mark as ready** をクリックします。

   >**なぜ draft 状態なのか?** GitLab Duo は、設計上、マージリクエストを draft 状態で作成します。Draft のマージリクエストは、作業が進行中であり、まだマージされるべきではないことをチームに伝えます。これらは merge queue や auto-merge ルールから除外されます。Ready としてマークすることは、変更がレビューされたことの明示的な確認です。これは human-in-the-loop の原則です。つまり、エージェントが生成し、あなたが決定します。

### タスク C.2: GitLab Duo をレビュアーに割り当てる

1. マージリクエストの overview ページで、右サイドバーの **Reviewers** セクションを見つけます。

1. Reviewers の横の **Edit** をクリックして GitLabDuo を検索します。それを選択して **GitLab Duo** をレビュアーとして割り当てます。
   
   >**代替トリガー:** マージリクエストの任意のコメントボックスに /assign_reviewer @GitLabDuo と入力することによっても Code Review Flow をトリガーできます。

### タスク C.3: Code Review の出力をレビューする

1. **Overview** タブから、**Activity** セクションまでスクロールします。

1. リアルタイムでコメントを観察します。

   >**今見ているもの:** GitLab Duo Code Review は、レビュアーとしてリクエストされたときにマージリクエストを自動的にレビューします。diff の変更を分析し、見つけたものを記述するサマリーコメントと、影響を受けるコード行に直接インラインの提案を投稿します。提案は、コード品質、保守性、ベストプラクティスといった点に焦点が当てられます。このケースでは、design token を使用すべきハードコードされた値と、適切なレイヤリングのために欠落している CSS プロパティをフラグしました。

1. GitLab Duo によって投稿されたコメントを通して読みます。それぞれについて、提案に同意するかどうか、マージする前にどのように対応するかを検討します。

### 期待される出力: タスク C

- GitLab Duo がマージリクエストの Reviewers セクションに表示される。
- マージリクエストの **Overview** タブに GitLab Duo からのコメントが少なくとも 1 つ表示される。

## タスク D: マージリクエストをレビューしてマージする

これでマージする準備が整いました。これは、変更がレビューされ、main ブランチに対する準備ができていることを明示的に承認するものです。

### タスク D.1: レビューとマージ

1. **Code > Merge Requests** に移動し、マージリクエストを開きます。

1. **Overview** タブに戻ります。

1. **Merge** ボタンを選択します。

### タスク D.2: 更新されたアプリケーションを表示する

変更がマージされた状態で、パイプラインが実行されて更新されたアプリケーションが Pages にデプロイされます。

1. **Build > Pipelines** に移動し、マージパイプラインを見つけます。

1. パイプラインが完了するのを待ちます。

1. Swag Shop ブラウザタブに戻り、ページをリフレッシュします。

1. featured 製品にホームページで Featured バッジと新しいボーダーが表示されていることを確認します。

### 期待される出力: タスク D

- マージリクエストのステータスが **Merged** と表示され、リンクされた Issue がクローズされている。
- Swag Shop のホームページに featured 製品の Featured バッジとボーダーが表示されている。

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandson.md)を見ることができます。

## 提案?

ラボへの変更を加えたい場合は、マージリクエスト経由で変更を提出してください。
