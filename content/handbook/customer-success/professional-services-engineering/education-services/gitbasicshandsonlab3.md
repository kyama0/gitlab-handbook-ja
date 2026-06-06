---
title: "GitLab with Git Fundamentals - ハンズオンラボ: GitLab を使ってコードをマージする"
description: "このハンズオンガイドでは、プロジェクト・Issue・マージリクエストの作成方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitbasicshandsonlab3/
upstream_sha: 7b4218e2684ab0e2d919cef32fcfba84065bf46b
lastmod: 2026-06-05T16:14:13+01:00
translated_at: "2026-06-06T12:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 40 分

## 目標 {#objectives}

このラボでは、GitLab を使ってプロジェクト、Issue、マージリクエストを作成します。また、組み込みの GitLab Web IDE を使ってファイルを編集し、マージリクエストを検証します。GitLab は、Git 単体を使うよりもはるかに簡単にリポジトリを管理できる包括的な UI を提供します。GitLab には、マージリクエストへのインラインコメントなど、Git 言語そのものがサポートしていないさまざまな機能も含まれています。詳しくは [GitLab の機能ページ](https://about.gitlab.com/features/)で学べます。

## タスク A. 新しいプロジェクトを作成する {#task-a-create-a-new-project}

1. ページ上部のパンくずリストにある **My Test Group** をクリックして、そこに移動します。

1. GitLab の **My Test Group** から、**New project** ボタンをクリックします。

1. **Create blank project** タイルをクリックします。

1. プロジェクトに `Second Project` という名前を付けます。

1. プロジェクトの可視性が **Private** に設定されていることを確認します。

1. **Initialize repository with a README** のチェックボックスをオンにします。

1. **Enable Static Application Security Testing (SAST)** はオフのままにします。

1. **Create project** ボタンをクリックし、GitLab が新しいプロジェクトのメインページにリダイレクトするのを待ちます。

## タスク B. 新しい Issue を作成する {#task-b-create-a-new-issue}

1. 左側のナビゲーションペインで、**Plan > Issues** をクリックします。

1. **New issue** ボタンをクリックします。

1. **Title** フィールドに `new issue` と入力します。

1. **Assignees** ドロップダウンの隣で、**Assign to me** をクリックします。

1. **Create issue** ボタンをクリックします。

## タスク C. マージリクエストを作成する {#task-c-create-a-merge-request}

> マージリクエストは、リポジトリ内のドキュメントを更新する提案ができるため、GitLab でのソース管理の中核となる機能です。マージリクエストの詳細は[ドキュメント](https://docs.gitlab.com/ee/user/project/merge_requests/)で学べます。

1. Issue の詳細ページで、**Create merge request** ボタンの右側にある**ドロップダウンの矢印**をクリックします。ここでマージリクエストをカスタマイズできます。

1. **Branch name** を `fix-issue` に設定します。**Source** が `main` に設定されていることを確認します。

   > **Source** の値は、マージリクエストの変更がどこに適用されるかを定義します。この例では、`main` ブランチに適用される変更を行っています。

1. **Create merge request** ボタンをクリックします。

1. **Create merge request** をクリックすると、**New merge request** ページにリダイレクトされます。

1. マージリクエストのタイトルが `Draft: Resolve "new issue"` に設定されていることに注目します。

   > デフォルトでは、マージリクエストのタイトルは `Draft: Resolve "<Issue Name>"` という形式になります。

1. **Title** の下に、**Mark as draft** と書かれたチェックボックスがあります。このチェックボックスが現在オンになっていることに注目します。

   > マージリクエストが作成されると、デフォルトでドラフトとしてマークされます。マージリクエストのタイトル内の `Draft` キーワードは、現在そのマージがドラフトであることを示します。ドラフトのマージは、ready としてマークされるまでマージできません。これは、誤ってマージしてしまうことを防ぐのに役立ちます。

1. マージリクエストの説明に、**Closes #1** というテキストがあることに注目します。この説明により、マージリクエストをマージすると、それに関連付けられた Issue も自動的にクローズされます。

   > `#` 文字の隣には、異なる番号が表示されることがあります。この番号は、マージリクエストが開かれた元の Issue 番号と一致します。

1. すべてのマージリクエストのフィールドをデフォルト値のままにします。

1. このラボでは、すべてのメタデータの値をデフォルト値のままにしますが、それらが何を意味するかを理解することは依然として重要です。

    - **Assignees:** Assignee は、マージリクエスト内の変更の作成・維持に責任を持つ人です。

    - **Reviewers:** Reviewer は、マージリクエスト内の変更のレビューと承認に責任を持つ人です。

    - **Milestone:** GitLab のマイルストーンは、通常はリリースおよび／またはバージョン番号に関連する、一定期間内のより広い目標を達成するために作成された Issue やマージリクエストを追跡する方法です。

    - **Labels:** マージリクエストにラベルを適用します。ラベルは、リクエストの並べ替えやフィルタリングに使えるメタデータのタグです。

    - **Merge request dependencies:** コミットの衝突を防ぐために、マージリクエストが正しい順序でマージされるようにします。

    - **Delete source branch when merge request is accepted:** このオプションを選択すると、マージ元のブランチが削除され、選択しなければ保持されます。

    - **Squash commits when merge request is accepted:** このオプションを選択すると、このブランチからは、すべてのコミットで行われたすべての変更を含む 1 つのコミットだけが見えるようになります。そうでなければ、このブランチからのすべてのコミットが履歴に追加されます。

1. 画面の下部にある **Create merge request** ボタンをクリックします。

マージリクエストを作成したことで、あなたは今、行うべき 1 つの作業に関連する 3 つのリンクされた項目、すなわち Issue、ブランチ、マージリクエストを持つことになりました。Issue は行うべき作業を説明し、ブランチはその Issue に対処する変更を含み、マージリクエストはその変更を `main` のコードブランチに取り込む方法を提案します。

## タスク D. GitLab の Web IDE を使ってブランチ上でファイルを編集する {#task-d-edit-files-on-a-branch-using-gitlabs-web-ide}

> Issue で要求された変更に対処するために、コードブランチ内のファイルを編集できます。ブランチ内でファイルを編集する方法はたくさんあります。前のラボでは、ファイルをローカルで編集する方法を学びました。このラボでは、Web IDE を通じてオンラインでファイルを編集します。Web IDE は、コミットのステージングを備えた高度なエディターです。Web IDE を使うと、GitLab の UI から直接複数のファイルに変更を加えられます。詳しくは[ドキュメント](https://docs.gitlab.com/ee/user/project/web_ide/)で確認できます。

1. マージリクエストページの右上で、**Code** の右側にある矢印をクリックし、**Open in Web IDE** をクリックします。

1. 左側のファイルエクスプローラーで、`README.md` をクリックします。

1. ファイルの 3 行目に `Edit my README.md file` と入力します。

1. IDE の左ペインで、**Source control** ボタン（小さな Git のブランチグラフのように見えます）をクリックします。

1. **Commit Message** に `Updated the README.md file` と入力します。

1. **Commit** ボタンをクリックします。

1. 画面の右下隅に `Success! Your changes have been committed` と書かれた通知ボックスが表示されるはずです。右下隅の通知ボックスから **Go to project** オプションをクリックします。

   > このダイアログボックスが消えた場合は、画面の左下にある GitLab アイコンをクリックすることでプロジェクトに戻れます。このボタンをクリックすると、さまざまなオプションが表示されるダイアログが画面中央に現れます。`Go to Second Project project on GitLab` をクリックします。

1. プロジェクトのランディングページから、**Code > Merge requests** をクリックします。あなたのマージリクエストの名前をクリックします。

## タスク E. マージリクエストの変更を検証する {#task-e-verify-changes-in-a-merge-request}

1. マージリクエストページで、右上隅にある **Assignee** セクションを見つけます（ペインを展開するために、画面の右上にある二重矢印をクリックする必要があるかもしれません）。マージリクエストが自分自身に割り当てられていることを確認します。そうでない場合は、**Assignees > Edit** をクリックし、表示されたリストから自分のユーザー名をクリックします。リストから離れた場所をクリックして変更を適用します。

1. マージリクエストのタイトルのすぐ下にある **Changes** タブをクリックします。

1. テーブルの左側（コミットの変更を含む）の 3 行目にカーソルを合わせ、**コメントアイコン**をクリックします。

1. コメントフィールドに `This is a comment` と入力し、**Start a review** をクリックします。

   > レビューを開始すると、あなたのコメントは、レビューを送信するまではあなただけに表示されます。

1. 通常は、すべてを一度に送信する前にレビューにさらにコメントを追加しますが、このラボでは **Finish review** ボタンをクリックするだけにします。

1. 表示されたダイアログに、**Summary comment** のテキストボックスが見えます。これは、レビューにサマリーを追加できる任意のフィールドです。このレビューでは、**Added comment to README.md** というコメントを追加します。

1. **Summary comment** の下に、3 つのラジオボタンがあります。あなたのレビューには一般的なフィードバックしか含まれていないため、**Comment** をクリックします。

   - **Comment:** レビューに一般的なフィードバックが含まれていることを示します。このオプションはマージリクエストを承認しません。

   - **Approve:** 多くのプロジェクトでは、マージリクエストがマージされる前にレビュアーが承認することを必要とします。このオプションは、あなたのフィードバックを送信し、マージリクエストを承認します。

   - **Request changes:** レビューに、リクエストをマージする前に対処すべきフィードバックが含まれていることを示します。

1. **Submit review** ボタンをクリックします。

1. 誰かがあなたのコメントを見て、それに対処するために別のコミットを追加したと仮定します。コメントが処理されたことを示すために、**Resolve thread** ボタンをクリックします。

## タスク F. ブランチをマージし、マージリクエストをクローズする {#task-f-merge-the-branch-and-close-the-merge-request}

1. MR タイトルの下の **Overview** タブをクリックします。

1. マージリクエストをマージ準備完了としてマークするには、**Mark as ready** をクリックします。これにより、MR のタイトルから `Draft:` が削除されます。

   > このラボでは、このプロジェクトに承認者を指定していません。指定していた場合は、**View eligible approvers** セクションに **Approve** ボタンが表示されます。

1. **Delete source branch** のチェックボックスが有効になっていることを確認し、**Merge** ボタンをクリックします。

1. 左側のナビゲーションペインで **Code > Repository** をクリックして、プロジェクトのリポジトリに戻ります。

1. ページの左上にあるドロップダウンを見て、自分がどのブランチにいるかを確認します。**main** にまだいない場合は、ブランチ名をクリックして `main` ブランチをクリックし、切り替えます。

1. リポジトリのデフォルトビューは `README.md` ファイルの内容を表示するため、マージによって `Edit my README.md file` が `README.md` の内容に追加されたことを簡単に検証できます。

## ラボガイド完了 {#lab-guide-complete}

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson)を見ることができます。
