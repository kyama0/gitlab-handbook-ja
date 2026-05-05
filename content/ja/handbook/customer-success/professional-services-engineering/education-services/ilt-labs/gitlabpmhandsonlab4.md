---
title: "GitLab アジャイルポートフォリオ管理 - ハンズオンラボ: MRとWikiによるコラボレーション"
description: "このハンズオンガイドでは、GitLab でマージリクエストとWikiを作成する方法を学習します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabpmhandsonlab4/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 45分

## 目標

マージリクエスト（MR）は、ソースブランチからターゲットブランチへの変更を組み込む提案です。マージリクエストは、コードに適用される変更の管理に役立ちます。このラボでは、プロジェクトにマージリクエストの承認ルールを設定・管理する方法を学習します。マージリクエストの詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/merge_requests/)を参照してください。

承認ルールは、マージリクエストがマージされる前に必要な承認の数と、承認すべきユーザーを定義します。コードオーナーと組み合わせて使用することで、機能を維持するグループと特定の監視領域を担当するグループの両方によって変更がレビューされるようにできます。詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/rules.html)を参照してください。

## タスク A. マージリクエストの承認ルールを設定する

1. **Software > Core** サブグループ内の **Family Budget Calculator** プロジェクトに移動します。

1. 左ペインで **Settings > Merge Requests** をクリックします。

1. **Merge request approvals** セクションまでスクロールして、**Add approval rule** をクリックします。

1. **Rule name** フィールドに `Infra team` と入力します。

1. **Groups** フィールドで **Infrastructure** グループを選択します。「All groups」オプションを使用してトップレベルグループを検索する必要があるかもしれません。

    > 検索結果を絞り込むには、`/awesome/infrastructure` または `yourgroupname/awesome/infrastructure` で検索してみてください。

1. **Save changes** をクリックします。

1. **Merge Requests** ページの **Merge request approvals** セクションに戻り、**Add approval rule** をクリックして2番目のプロジェクトレベルのルールを作成します。

1. **Rule name** フィールドに `Security operations` と入力します。

1. **Groups** フィールドで **Security** グループを選択します。「all groups」オプションを使用してトップレベルグループを検索する必要があるかもしれません。

1. **Save changes** をクリックします。

1. **Merge Requests** ページの **Merge request approvals** セクションに戻り、**Approval Settings** の下で **Prevent editing approval rules in merge requests** の隣のボックスにチェックを入れます。

1. 同じセクションで、**Prevent approval by the creator** が*チェックが外れている*ことを確認します。これはトレーニング環境で自分のマージリクエストを承認できるようにするために必要です。

1. **Save changes** をクリックします。

## タスク B. マージリクエストを作成する

1. **Family Budget Calculator** プロジェクトで、左ペインの **Issues** をクリックします。

1. **Third-party financial services integration** Issueをクリックします。

1. Issueの説明の下にある **Create merge request** ボタンをクリックします。

1. **Branch name** フィールドのテキストを `update-db-docs-perf-tools` に変更します。

1. **Source (branch or tag)** が `main` に設定されていることを確認します。

1. **Create merge request** をクリックします。

1. **Title** フィールドに `Draft: Add performance tools to Family Budget Calculator documentation` と入力します。

    > マージリクエストのタイトルの先頭に **'Draft:'** を付けると、マージリクエストは「準備完了」とマークされるまでマージが行われません。これはマージリクエストがまだマージ準備ができていないことを示し、誤ったマージを防ぐために使用されます。タイトルに **'Draft:'** を追加すると、タイトルの下にある **Mark as draft** チェックボックスも自動的にチェックされることに注意してください。

1. **Description** フィールドから `Closes #<issue-number>` を削除します。元のIssueを追加作業のためにオープンのままにしておきたいです。

    > マージリクエストの説明に `Closes #<issue-number>` がある場合、マージリクエストがマージされるとIssueがクローズされます。

1. Assignees セクションを確認して、マージリクエストが自分に割り当てられていることを確認します。Issueから継承されたラベルやプロジェクト設定から継承された承認ルールも確認してください。

1. **Create Merge Request** ボタンをクリックします。

1. マージリクエストの詳細ページから、**Code > Open in Web IDE** を選択して、**update-db-docs-perf-tools** ブランチのファイルを編集します。

    > Web IDE は、リポジトリブランチへのコミット機能が内蔵された高度なエディタです。Web IDE を使用して、GitLab UI から直接複数のファイルに変更を加えることができます。詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/web_ide/)を参照してください。

1. 左ファイルペインから **README.md** をクリックします。

1. **README.md** の3行目から以下の内容を貼り付けます。

    ```markdown
    ## Performance tools
    The Family Budget Calculator currently uses HAProxy for load balancing.
    We are researching and testing additional tools to improve performance.
    ```

1. 左ペインで **Source Control**（上から3番目のボタン）をクリックします。

1. **Commit message** フィールドに `Update docs with performance tools` と入力します。

1. コミットメッセージの下にある赤い「commit」ボックスに「**Commit and push to update-db-docs-perf-tools branch**」というメッセージが書かれていることを確認します。

1. **Commit and push to update-db-docs-perf-tools branch** をクリックします。

## タスク C. コードレビューを実行して変更をマージする

> コードレビューのベストプラクティスについては[ドキュメント](https://docs.gitlab.com/ee/development/code_review.html)を参照してください。

1. Web IDE の左下角にある赤い GitLab ボタンをクリックし、**Go to Family Budget Calculator project on GitLab** をクリックして、`Draft: Add performance tools to Family Budget Calculator documentation` マージリクエストに移動します。

1. **Code > Merge Requests** をクリックし、`Draft: Add performance tools to Family Budget Calculator documentation` をクリックします。

1. マージリクエストページで、**Changes** タブをクリックして、マージ後にプロジェクトの **main** ブランチに適用される変更を確認します。

    > コードレビュアーはコードの個々の行を批評して変更を提案できます。詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/)を参照してください。

1. **Overview** タブをクリックします。

1. マージリクエストタイトルの右側にある三点メニューで、**Mark as ready** をクリックしてマージリクエストをドラフトモードから外します。マージリクエストのタイトルから **Draft:** が削除されたことが確認できます。

1. **Approve** をクリックしてマージリクエストを承認します。必要な承認がすべて適用されたため、**Merge** ボタンが表示されていることに注意してください。

1. コメントフィールドまでスクロールして、`Approved. Ready to merge.` というコメントを入力します。**Comment** をクリックしてコメントを投稿します。

1. **Merge** をクリックして、マージが正常に完了することを確認します。

1. 左上の **Family Budget Calculator** タイトルタイルをクリックしてプロジェクトのランディングページに移動します。**main** ブランチの `README.md` ファイルに更新内容が含まれていることを確認します。

1. 左ペインで **Code > Merge requests** をクリックします。マージリクエストはこのページの **Merged** タブの下に表示されます。

## タスク D. プロジェクトドキュメント用のWikiを作成する

> リポジトリではなく、コードと同じプロジェクト内にドキュメントを保管したい場合は、GitLab が各 GitLab プロジェクトに提供するWikiを使用できます。すべてのWikiは独立したGitリポジトリなので、Webインターフェイスまたはローカルのgitを使用してWikiページを作成できます。GitLab のWikiは、コンテンツとしてMarkdown、Rdoc、AsciiDoc、Orgをサポートしています。Markdownで書かれたWikiページはすべてのMarkdown機能をサポートし、リンクのWiki固有の動作も提供します。Wikiの詳細については[こちら](https://docs.gitlab.com/ee/user/project/wiki/)を参照してください。

1. **Software > Core** サブグループの **Family Budget Calculator** プロジェクトに移動します。

1. 左ペインで **Plan > Wiki** をクリックします。

1. ページ中央の **Create your first page** ボタンをクリックします。

1. **Title** セクションにページタイトルとして `Family Budget Calculator Documentation` を入力します。

1. タイトルフィールドの下にあるコンテンツフィールドに以下のテキストを貼り付けます。

    ```markdown
    ## Summary

    The Family Budget Calculator helps households stay on budget and save for the future.

    ## Contact

    Contact <your-name> with questions or comments.
    ```

1. **Create Page** をクリックします。作成したコンテンツを含む新しいWikiページが表示されます。

> 必要に応じて、**Family Budget Calculator Documentation** ページを編集して追加コンテンツを追加したり、追加のWikiページを作成したりしてください。

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabpmhandson)を確認できます。

## ご提案はありますか?

ラボへの変更を希望する場合は、マージリクエストで変更を送信してください。
