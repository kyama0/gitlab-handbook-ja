---
title: "GitLab Duo Agent Platform - ハンズオンラボ: GitLab Duo Agent Platform でコードを作成しセキュリティを確保する"
description: "このハンズオンガイドでは、Duo Agent Platform を使用してコードを作成し、セキュリティを確保する方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandsonlab5/
upstream_sha: d5d611a2a400e4ac2527f89559e7ae9a013a9b21
translated_at: "2026-06-15T19:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-15T14:13:50-04:00"
---

> 完了目安時間: 20 分

## 学習目標

このラボを完了すると、次のことができるようになります。

- AI 脆弱性管理を使用して、検出結果を平易な言葉で説明する。
- DAP を使用して、SAST 脆弱性に対する修復マージリクエストを生成する。
- Fix Pipeline フローを使用して、修復ブランチで失敗したパイプラインを診断して修復する。
- セキュリティ修復マージリクエストで Code Review Flow をトリガーし、AI フィードバックを確認する。
- 修復 MR をマージし、脆弱性が解決されたことを確認する。

## 概要

セキュリティ脆弱性は避けられません。早期に発見されるほど、修正がより安価で迅速になります。このラボでは、4 つの DAP 機能が単一の現実的な問題に集約されます。

Swag Shop プロジェクトには、app.py に SQL インジェクションの脆弱性があり、脆弱性レポートで未解決のまま放置されています。修正を生成しますが、マージリクエストがオープンな間に、依存関係も更新する必要があります。パッケージ名のタイプミスがパイプラインを壊します。Fix Pipeline フローを使用してそれを診断して解決し、その後セキュリティ修正に対する AI コードレビューを受けてマージします。

## タスク A: 脆弱性を特定する

出発点は Swag Shop の脆弱性レポートです。プロジェクトのセキュリティスキャナーはすでに実行され、いくつかの検出結果にフラグを付けています。このタスクでのあなたの仕事は、修正するものを見つけることです。

1. まず、必要なフローがプロジェクトレベルでオンになっていることを確認しましょう。プロジェクト内で **Settings > General > GitLab Duo** に移動し、「Turn on SAST false positive detection」と「Turn on SAST vulnerability resolution workflow」の両方がオンに切り替わっていることを確認します。

1. 左サイドバーで **Secure > Vulnerability report** を選択します。

1. 検索フィールドをクリックし、**Report Type** を選択してから **SAST** を選択します。

   > **注:** DAP の脆弱性修復は SAST の検出結果のみで機能します。

1. `app.py` の 214 行目にある **Improper neutralization of special elements used in an SQL Command ('SQL Injection')** という名前の脆弱性を特定します。

1. 脆弱性をクリックして詳細ビューを開き、ノートを確認します。

### 期待される出力: タスク A

- SQL インジェクションの脆弱性が **Vulnerability Report** に SAST でフィルタリングされた状態で表示され、詳細ビューに影響を受けるファイルと行番号が表示されます。

## タスク B: 脆弱性を理解して修復する

これで、扱うべきオープンな脆弱性が 1 つあります。このタスクでは、GitLab Duo にそれを平易な言葉で説明するよう依頼し、その後それを修正するマージリクエストを生成します。タスク B の終わりには、独自のブランチ上に 1 つのオープンなマージリクエスト、つまり修復マージリクエストができます。

### タスク B.1: 脆弱性を説明する

変更を加える前に、GitLab Duo に検出結果を解釈するよう依頼します。これにより、コードに触れる前に、脆弱性が何であり、なぜそれが重要なのかを理解していることを確認できます。

1. 脆弱性の詳細ビューで、右上隅の **AI vulnerability management** を選択します。

1. **Explain with AI** を選択します。

   Agentic Chat セッションが開き、影響を受けるコードパターンと推奨される修復アプローチを含めて、脆弱性を平易な言葉で説明します。

1. 続行する前に説明を確認します。

> **あなたが見ているもの:** app.py の 214 行目にある SQL インジェクションは、ユーザー入力が SQL クエリ文字列に直接埋め込まれているために発生します。攻撃者はその入力を操作してクエリのロジックを変更できます。修正方法は、クエリ構造をデータから分離するパラメータ化クエリを使用することです。

### タスク B.2: 修復マージリクエストを生成する

脆弱性を理解したので、DAP を使用して修正を生成します。

1. 再度 **AI vulnerability management** を選択し、続いて **Resolve with AI** を選択します。

1. セッションが完了するまで待ちます。完了すると、マージリクエストが自動的に開きます。

### タスク B.3: 修復マージリクエストを確認する

ブランチで他の作業をする前に、生成された修正が実際に脆弱性を正しく対処していることを確認します。これは、実際のワークフローでは常に行うステップです。

1. オープンなマージリクエストから、**Changes** タブを選択します。

1. 脆弱な文字列連結クエリがパラメータ化クエリに置き換えられたことを確認します。修正により、この脆弱なパターンが置き換えられるはずです。

   ```python
   vulnerable_query = f"SELECT * FROM demo_products WHERE name LIKE '%{search_term}%' OR description LIKE '%{search_term}%'"
   
   cursor.execute(vulnerable_query)
   ```

   これに置き換えられます。

   ```python
   secure_query = "SELECT * FROM demo_products WHERE name LIKE ? OR description LIKE ?"
   
   search_param = f"%{search_term}%"

   cursor.execute(secure_query, (search_param, search_param))
   ```

1. **Pipelines** タブを選択します。パイプラインが完了したら、**Passed** ステータスを選択してパイプラインの詳細を開きます。**Security** タブを選択し、`app.py` の 214 行目の **Improper neutralization of special elements used in an SQL Command ('SQL Injection')** がもう報告されていないことを確認します。

1. 先ほど開いた修復マージリクエストに戻ります。

### 期待される出力: タスク B

- Agentic Chat セッションが SQL インジェクションの脆弱性を平易な言葉で説明します。
- 1 つのマージリクエスト、つまり修復マージリクエストが **Code > Merge Requests** 配下に表示され、脆弱性に対処する app.py への変更が含まれています。

## タスク C: パイプラインを修正する

修復マージリクエストがオープンな状態で、プロジェクトの依存関係を更新する必要があります。`requirements.txt` にパッケージを追加しますが、パッケージ名にタイプミスをします。パイプラインが実行され、失敗します。脆弱性修正をマージする前に、まずこれを解決する必要があります。

### タスク C.1: 依存関係エラーを導入する

1. 修復マージリクエストのヘッダーに表示されているソースブランチ名に注目します。これは `duo/fix/...` のような名前で始まります。次のステップでこれが必要になります。

1. 左サイドバーで **Code > Repository** に移動します。

1. ブランチのドロップダウンをクリックし、ブランチを `main` から修復ブランチに変更します。ファイルリストに修復ブランチの内容が表示されるようになります。

1. ファイルリストから `requirements.txt` を開きます。

1. **Edit > Open in Web IDE** をクリックします。

1. ファイルの任意の場所に次の行を追加します。`nonexistent-package==1.0.0`

1. 左側のツールバーで **Source Control** アイコンを選択して、保留中の変更を確認します。

1. **Commit message** フィールドに `updated requirements` と入力します。

1. 修復ブランチに変更をコミットします。

新しいマージリクエストを作成する必要はありません。修復ブランチへのコミットは、既存の修復マージリクエストを自動的に更新し、新しいパイプライン実行をトリガーします。

### タスク C.2: 失敗を読む

修正をトリガーする前に、エラーを読んで、Fix Pipeline フローが解決しようとしているものを理解します。

1. 修復マージリクエストから、**Pipelines** タブを選択します。パイプラインが完了するまで待ち、失敗ステータスが表示されていることを確認します。

1. 失敗したパイプラインをクリックして詳細ビューを開きます。

1. 失敗したジョブを特定し、それをクリックしてログを開きます。次のような出力が表示されることを確認します。

   ```yaml
   ERROR: Could not find a version that satisfies the requirement nonexistent-package==1.0.0
   
   ERROR: No matching distribution found for nonexistent-package==1.0.0
   ```

   > **注:** これを手動で修正する必要はありません。ログを読むことで、何が失敗したかを確認し、Fix Pipeline フローが次に何をするかを理解するのに役立ちます。

### タスク C.3: Fix Pipeline フローをトリガーする

1. **Build > Pipelines** に移動し、`updated requirements` パイプラインの #12345 のようなパイプライン ID を選択します。

1. ページの上部で、**Fix pipeline with Duo** をクリックします。

   > **注:** セッションは自動的に開くはずです。開かない場合は、**Automate > Sessions** に移動し、Fix Pipeline フローのセッションを見つけます。

1. **Activity** タブをクリックし、フローが実行しているステップ（ログ分析、根本原因の特定、ファイルの変更）を観察します。

1. 続行する前に、**Details** タブでセッションのステータスが **Finished** に変わるまで待ちます。

> **フローが行っていること:** Fix Pipeline フローは、失敗したジョブのログを読み取り、根本原因（存在しないパッケージ）を特定し、責任のあるファイル（requirements.txt）を見つけ、不正なエントリを削除した新しいマージリクエストを開きます。フローがブランチに直接コミットするのではなく、マージリクエストを作成することに注目してください。これは意図的なものです。DAP は、チームのどの開発者にも期待するのと同じレビュープロセスに従います。

### タスク C.4: 修正マージリクエストを確認してマージする

Fix Pipeline フローは、修復ブランチをターゲットとする新しいマージリクエスト、つまり修正マージリクエストを作成しました。このタスクの残りの部分では、修正マージリクエストで作業します。

1. セッション出力内のリンクをたどって修正マージリクエストに移動します。リンクが見つからない場合は、**Code > Merge Requests** に移動し、Fix Pipeline フローによって作成されたマージリクエストを探します。

1. **Changes** タブで、`nonexistent-package==1.0.0` が `requirements.txt` から削除され、他に変更が加えられていないことを確認します。

1. **Pipelines** タブを選択し、パイプラインが正常に完了するまで待ちます。

1. マージリクエストに戻り、**Overview** タブを選択します。

1. **Mark as ready** を選択してマージリクエストをドラフトから変換し、続いて **Merge** を選択します。これにより、修正が main ブランチではなく修復ブランチにマージされます。

1. 修正を確認するには、**Code > Repository** に移動し、`requirements.txt` を開きます。`nonexistent-package==1.0.0` が削除されていることを確認します。

### 期待される出力: タスク C

- Fix Pipeline フローのセッションが、ステータス **Finished** で **Automate > Sessions** 配下に表示されます。
- フローが `requirements.txt から nonexistent-package==1.0.0` を削除するマージリクエストを開きました。
- 修正マージリクエストが修復ブランチにマージされました。
- 修復マージリクエストのパイプラインが合格するようになりました。

## タスク D: Code Review Flow をトリガーする

この時点で、パイプラインが合格している 1 つのオープンなマージリクエスト、つまり修復マージリクエストがあります。マージする前に、Code Review Flow を実行して修正に関する AI フィードバックを取得します。

1. **Code > Merge Requests** に移動し、修復マージリクエストを開きます。

1. **Overview** ページで、右サイドバーの **Reviewers** セクションを見つけます。

1. **Edit** をクリックし、GitLabDuo を検索します。それを選択して、GitLab Duo をレビュアーとして割り当てます。

   > **代替トリガー:** マージリクエストの任意のコメントボックスに `/assign_reviewer @GitLabDuo` と入力することもできます。

1. マージリクエストの **Overview** タブで、アクティビティフィードまでスクロールダウンし、Code Review Flow がリアルタイムで実行される様子を観察します。

1. GitLab Duo がレビューを完了するまで待ち、マージリクエストに投稿したコメントを読みます。

### 期待される出力: タスク D

- GitLab Duo が修復 MR のレビュアーとして割り当てられています。
- GitLab Duo によって 1 つ以上のレビューコメントが投稿されています。

## タスク E: 修正をマージして解決を確認する

この時点で、パイプラインが合格しコードレビューが完了した 1 つのオープンなマージリクエスト、つまり修復マージリクエストがあります。これが最後のステップです。修正をマージし、脆弱性がなくなったことを確認します。

### タスク E.1: 修復マージリクエストをマージする

1. **Code > Merge Requests** に移動し、修復マージリクエストを開きます。

1. **Overview** タブを選択します。

1. **AI Generated Fix** フィールドを確認します。これは、脆弱性に対処するために行われた具体的なコード変更を要約し、何がなぜ修正されたかを確認します。

1. スクロールダウンし、**Merge** を選択します。

1. パイプライン番号を選択して、マージパイプラインがいつ完了するかを観察します。

### タスク E.2: 脆弱性が解決されたことを確認する

1. 左サイドバーで **Secure > Vulnerability report** を選択します。

1. 検索フィールドで **Report Type** を選択してから **SAST** を選択します。

1. 214 行目の **Improper neutralization of special elements used in an SQL Command ('SQL Injection')** という脆弱性がもう一覧に表示されていないことを確認します。

### 期待される出力: タスク E

- 修復マージリクエストが main ブランチにマージされた後、パイプラインが合格します。
- SQL インジェクションの脆弱性が、SAST でフィルタリングされた Vulnerability Report にもう表示されません。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandson.md)を確認できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストで変更を送信してください。
