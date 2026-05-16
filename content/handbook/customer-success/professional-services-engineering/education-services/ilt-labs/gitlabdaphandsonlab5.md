---
title: "GitLab Duo Agent Platform - ハンズオンラボ: GitLab Duo Agent Platform でコードを作成しセキュリティを確保する"
description: "このハンズオンガイドでは、Duo Agent Platform を使用してコードを作成し、セキュリティを確保する方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandsonlab5/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-01T11:26:38-04:00"
---

> 完了までの推定時間: 35 分

## 学習目標

このラボが終了するまでに、以下のことができるようになります。

- AI 脆弱性管理を使って、発見内容を平易な言葉で説明する。
- DAP を使って、SAST 脆弱性のための修正マージリクエストを生成する。
- Fix Pipeline フローを使って、修正ブランチで失敗したパイプラインを診断し修復する。
- セキュリティ修正のマージリクエストで Code Review Flow をトリガーし、AI のフィードバックをレビューする。
- 修正 MR をマージし、脆弱性が解決されたことを確認する。

## 概要

セキュリティ脆弱性は避けられません。早く捕捉されるほど、安く速く修正できます。このラボでは、4 つの DAP 機能が一つの現実の問題に集約されます。

Swag Shop プロジェクトには、未解決のまま vulnerability report に残されていた `app.py` の SQL インジェクションの脆弱性があります。修正を生成しますが、マージリクエストがオープン中に、依存関係も更新する必要があります。パッケージ名のタイプミスがパイプラインを壊します。Fix Pipeline フローを使って診断および解決し、セキュリティ修正に対する AI コードレビューを取得してマージします。

## タスク A: 脆弱性を特定する

開始点は Swag Shop の vulnerability report です。プロジェクトのセキュリティスキャナーはすでに実行され、いくつかの結果がフラグされています。このタスクでのあなたの仕事は、修正するものを見つけることです。

1. まず、必要なフローがプロジェクトレベルで有効化されていることを確認しましょう。プロジェクト内で **Settings > General > GitLab Duo** に移動し、「Turn on SAST false positive detection」と「Turn on SAST vulnerability resolution workflow」の両方がオンになっていることを確認します。

1. 左サイドバーで **Secure > Vulnerability report** を選択します。

1. 検索フィールドをクリックし、**Report Type** を選択して、次に **SAST** を選択します。

   >**注:** DAP の脆弱性修正は SAST の発見でのみ機能します。

1. `app.py` の 214 行目にある **Improper neutralization of special elements used in an SQL Command ('SQL Injection')** という名前の脆弱性を特定します。

1. 脆弱性をクリックして詳細ビューを開き、ノートを確認します。

### 期待される出力: タスク A

- SQL インジェクションの脆弱性が **Vulnerability Report** で SAST フィルター付きで表示され、詳細ビューに該当ファイルと行番号が表示される。

## タスク B: 脆弱性を理解して修正する

これで、対応すべきオープンな脆弱性が 1 つあります。このタスクでは、GitLab Duo に平易な言葉で説明させた後、それを修正するマージリクエストを生成します。タスク B の終了時には、独自のブランチに 1 つのオープンマージリクエスト（修正マージリクエスト）があります。

### タスク B.1: 脆弱性を説明させる

何か変更する前に、GitLab Duo に発見内容を解釈させてください。これにより、コードに触れる前に、脆弱性が何で、なぜ重要であるかを理解していることが確認できます。

1. 脆弱性の詳細ビューで、右上隅の **AI vulnerability management** を選択します。

1. **Explain with AI** を選択します。

   エージェント型チャットセッションが開き、影響を受けるコードパターンと推奨される修正アプローチを含めて、脆弱性を平易な言葉で説明します。

1. 続行する前に説明をレビューします。

>**今見ているもの:** `app.py` の 214 行目の SQL インジェクションは、ユーザー入力が SQL クエリ文字列に直接埋め込まれているために発生します。攻撃者はその入力を操作してクエリのロジックを変更できます。修正は parameterized クエリを使用することで、これはクエリの構造をデータから分離します。

### タスク B.2: 修正マージリクエストを生成する

脆弱性を理解したので、DAP を使って修正を生成します。

1. **AI vulnerability management** を再度選択し、次に **Resolve with AI** を選択します。

1. セッションが完了するのを待ちます。完了すると、マージリクエストが自動的に開きます。

### タスク B.3: 修正マージリクエストをレビューする

ブランチで他のことをする前に、生成された修正が実際に脆弱性を正しく対処していることを確認します。これは、実際のワークフローでも常に取るべきステップです。

1. 開いたマージリクエストから、**Changes** タブを選択します。

1. 脆弱な文字列連結クエリが parameterized クエリに置き換えられていることを確認します。修正は、以下の脆弱なパターン:

   ```python
   vulnerable_query = f"SELECT * FROM demo_products WHERE name LIKE '%{search_term}%' OR description LIKE '%{search_term}%'"
   
   cursor.execute(vulnerable_query)
   ```

   を、以下のように置き換える必要があります:

   ```python
   secure_query = "SELECT * FROM demo_products WHERE name LIKE ? OR description LIKE ?"
   
   search_param = f"%{search_term}%"

   cursor.execute(secure_query, (search_param, search_param))
   ```

1. **Pipelines** タブを選択します。パイプラインが完了したら、**Passed** ステータスを選択してパイプラインの詳細を開きます。**Security** タブを選択し、`app.py` の 214 行目の **Improper neutralization of special elements used in an SQL Command ('SQL Injection')** がもう報告されていないことを確認します。

1. 開いていた修正マージリクエストに戻ります。

### 期待される出力: タスク B

- エージェント型チャットセッションが SQL インジェクションの脆弱性を平易な言葉で説明する。
- **Code > Merge Requests** に 1 つのマージリクエスト（修正マージリクエスト）が表示され、脆弱性に対処する `app.py` への変更が含まれている。

## タスク C: パイプラインを修正する

修正マージリクエストがオープン中に、プロジェクトの依存関係を更新する必要があります。`requirements.txt` にパッケージを追加しますが、パッケージ名にタイプミスがあります。パイプラインが実行され失敗します。脆弱性修正をマージする前に、これをまず解決する必要があります。

### タスク C.1: 依存関係エラーを導入する

1. 修正マージリクエストヘッダーに表示されているソースブランチ名をメモします。`duo/fix/...` のようなもので始まります。次のステップで必要になります。

1. 左サイドバーで **Code > Repository** に移動します。

1. ブランチドロップダウンをクリックして、ブランチを `main` から修正ブランチに変更します。ファイルリストには修正ブランチの内容が表示されるようになります。

1. ファイルリストから `requirements.txt` を開きます。

1. **Edit > Open in Web IDE** をクリックします。

1. ファイル内のどこかに以下の行を追加します: `nonexistent-package==1.0.0`

1. 左ツールバーで、**Source Control** アイコンを選択して保留中の変更を確認します。

1. **Commit message** フィールドに `updated requirements` と入力します。

1. 変更を修正ブランチにコミットします。

新しいマージリクエストを作成する必要はありません。修正ブランチにコミットすると、既存の修正マージリクエストが自動的に更新され、新しいパイプライン実行がトリガーされます。

### タスク C.2: 失敗を読む

修正をトリガーする前に、Fix Pipeline フローが解決しようとしているものを理解できるよう、エラーを読みます。

1. 修正マージリクエストから **Pipelines** タブを選択します。パイプラインが完了するのを待ち、failed ステータスを示していることを確認します。

1. 失敗したパイプラインをクリックして詳細ビューを開きます。

1. 失敗したジョブを特定し、それをクリックしてログを開きます。以下に類似の出力が表示されることを確認します:

   ```yaml
   ERROR: Could not find a version that satisfies the requirement nonexistent-package==1.0.0
   
   ERROR: No matching distribution found for nonexistent-package==1.0.0
   ```

   >**注:** これを手動で修正する必要はありません。ログを読むことで何が失敗したかを確認し、Fix Pipeline フローが次に何をするかを理解できます。

### タスク C.3: Fix Pipeline フローをトリガーする

1. **Build > Pipelines** に移動し、`updated requirements` パイプラインのパイプライン ID（#12345 など）を選択します。

1. ページの上部で **Fix pipeline with Duo** をクリックします。

   >**注:** セッションは自動的に開くはずです。そうでない場合は、**Automate > Sessions** に移動して Fix Pipeline フローのセッションを見つけます。

1. **Activity** タブをクリックし、フローが実行しているステップ（ログ分析、根本原因の特定、ファイル修正）を観察します。

1. 続行する前に、セッションステータスが **Details** タブで **Finished** に変わるのを待ちます。

>**フローが行っていること:** Fix Pipeline フローは失敗したジョブログを読み取り、根本原因（存在しないパッケージ）を特定し、責任のあるファイル（requirements.txt）を特定し、不正なエントリを削除した新しいマージリクエストを開きます。フローがブランチに直接コミットするのではなくマージリクエストを作成することに注目してください。これは意図的なものです。DAP はチームの開発者から期待される同じレビュープロセスに従います。

### タスク C.4: 修正マージリクエストをレビューしてマージする

Fix Pipeline フローは新しいマージリクエスト（修正マージリクエスト）を作成しました。これは修正ブランチをターゲットとします。このタスクの残りでは修正マージリクエストで作業します。

1. セッション出力から修正マージリクエストへのリンクをたどります。リンクが表示されない場合は、**Code > Merge Requests** に移動し、Fix Pipeline フローによって作成されたマージリクエストを探します。

1. **Changes** タブで、`nonexistent-package==1.0.0` が `requirements.txt` から削除されていること、そして他の変更が行われていないことを確認します。

1. **Pipelines** タブを選択し、パイプラインが正常に完了するのを待ちます。

1. マージリクエストに戻り、**Overview** タブを選択します。

1. **Mark as ready** を選択してマージリクエストを draft から変換し、次に **Merge** を選択します。これにより、修正は main ブランチではなく修正ブランチにマージされます。

1. 修正を確認するには、**Code > Repository** に移動して `requirements.txt` を開きます。`nonexistent-package==1.0.0` が削除されていることを確認します。

### 期待される出力: タスク C

- Fix Pipeline フローのセッションが **Automate > Sessions** で **Finished** のステータスで表示される。
- フローが `requirements.txt` から `nonexistent-package==1.0.0` を削除するマージリクエストを開いた。
- 修正マージリクエストが修正ブランチにマージされた。
- 修正マージリクエストのパイプラインが通過するようになった。

## タスク D: Code Review Flow をトリガーする

この時点で、パイプラインが通過しているオープンマージリクエスト（修正マージリクエスト）が 1 つあります。マージする前に、Code Review Flow を実行して修正に対する AI のフィードバックを取得します。

1. **Code > Merge Requests** に移動し、修正マージリクエストを開きます。

1. **Overview** ページで、右サイドバーの **Reviewers** セクションを特定します。

1. **Edit** をクリックして GitLabDuo を検索します。それを選択して GitLab Duo をレビュアーに割り当てます。

   >**代替トリガー:** マージリクエストの任意のコメントボックスに `/assign_reviewer @GitLabDuo` と入力することもできます。

1. マージリクエストの **Overview** タブで、アクティビティフィードまでスクロールして、Code Review Flow がリアルタイムで実行されていることを観察します。

1. GitLab Duo がレビューを完了するのを待ち、マージリクエストに投稿されたコメントを読みます。

### 期待される出力: タスク D

- GitLab Duo が修正 MR のレビュアーとして割り当てられている。
- GitLab Duo によって 1 つ以上のレビューコメントが投稿されている。

## タスク E: 修正をマージし解決を確認する

この時点で、パイプラインが通過し、コードレビューが完了したオープンマージリクエスト（修正マージリクエスト）が 1 つあります。これが最終ステップです: 修正をマージし、脆弱性がなくなったことを確認します。

### タスク E.1: 修正マージリクエストをマージする

1. **Code > Merge Requests** に移動し、修正マージリクエストを開きます。

1. **Overview** タブを選択します。

1. **AI Generated Fix** フィールドをレビューします。これは脆弱性に対処するために行われた特定のコード変更の概要を示し、何が修正されたかとなぜ修正されたかを確認します。

1. スクロールダウンして **Merge** を選択します。

1. パイプライン番号を選択して、マージパイプラインが完了するのを観察します。

### タスク E.2: 脆弱性が解決されたことを確認する

1. 左サイドバーで **Secure > Vulnerability report** を選択します。

1. 検索フィールドで **Report Type** を選択し、次に **SAST** を選択します。

1. 214 行目の **Improper neutralization of special elements used in an SQL Command ('SQL Injection')** という脆弱性がもうリストされていないことを確認します。

### 期待される出力: タスク E

- 修正マージリクエストが main ブランチにマージされた後、パイプラインが通過する。
- SQL インジェクションの脆弱性が SAST フィルター付きの Vulnerability Report にもう表示されない。

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandson.md)を見ることができます。

## 提案?

ラボへの変更を加えたい場合は、マージリクエスト経由で変更を提出してください。
