---
title: "GitLab アジャイルポートフォリオ管理 - ハンズオンラボ: マージリクエストを使用してコードをレビュー・マージする"
description: "このハンズオンガイドでは、GitLab でマージリクエストと承認ルールを作成する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabpmhandsonlab6/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:14:42Z
translator: claude
stale: false
---

> 完了までの推定時間: 45〜60 分

## 目標

マージリクエストは、ソースブランチからターゲットブランチへの変更を取り込むための提案です。マージリクエストはコードに適用される変更の管理を助けます。このラボでは、プロジェクトでマージリクエストの承認ルールを設定・管理する方法を学びます。マージリクエストについては[ドキュメント](https://docs.gitlab.com/ee/user/project/merge_requests/)で詳しく学ぶことができます。

承認ルールは、マージリクエストがマージされる前に受け取る必要がある承認の数と、誰が承認すべきかを定義します。コードオーナーと組み合わせて使用することで、機能を維持するグループと特定の監視領域を担当するグループの両方によって変更がレビューされるようにできます。詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/rules.html)を参照してください。

## タスク A. マージリクエストの承認ルールを設定する

1. **Software > Core** サブグループ内の **Database** プロジェクトに移動してください。

1. 左ペインの **Settings > Merge Requests** をクリックしてください。

1. **Merge request approvals** セクションまでスクロールし、**Add approval rule** をクリックしてください。

1. **Rule name** フィールドに `Infra team` と入力してください。

1. **Groups** フィールドで **Infrastructure** グループを選択してください。「All groups」オプションを使用してトップレベルグループを検索する必要がある場合があります。

    > 検索結果を絞り込むために、`/awesome/infrastructure` または `yourgroupname/awesome/infrastructure` を検索してみてください。

1. **Save changes** をクリックしてください。

1. **Merge Requests** ページの **Merge request approvals** セクションに戻り、**Add approval rule** をクリックして 2 番目のプロジェクトレベルのルールを作成してください。

1. **Rule name** フィールドに `Security operations` と入力してください。

1. **Groups** フィールドで **Security** グループを選択してください。「all groups」オプションを使用してトップレベルグループを検索する必要がある場合があります。

1. **Save changes** をクリックしてください。

1. **Merge Requests** ページの **Merge request approvals** セクションに戻り、**Approval Settings** の下にある **Prevent editing approval rules in merge requests.** の横のチェックボックスにチェックを入れてください。

1. 同じセクションで、**Prevent approval by the author** が*チェックされていない*ことを確認してください。これはトレーニング環境で自分のマージリクエストを承認できるようにするために必要です。

1. **Save changes** をクリックしてください。

## タスク B. マージリクエストを作成する

1. **Database** プロジェクトで、左ペインの **Issues** をクリックしてください。

1. **Identify tuning parameters to reduce performance bottlenecks** Issue をクリックしてください。

1. Issue のランディングページで **Create merge request** ボタンの横にある下向き矢印のドロップダウンをクリックしてください。

1. **Create merge request and branch** がチェックされていることを確認してください。

1. **Branch name** フィールドのテキストを `update-db-docs-perf-tools` に変更してください。

1. **Source** が `main` に設定されていることを確認してください。

1. **Create merge request** をクリックしてください。

1. **Title** フィールドに `Draft: Add performance tools to database documentation` と入力してください。

    > マージリクエストのタイトルの先頭に **'Draft:'** を付けると、準備完了のマークが付くまでマージリクエストはマージされません。これはマージリクエストがまだマージ準備ができていないことを示し、誤ったマージを防ぐために使用されます。タイトルに **'Draft:'** が追加されると、タイトルの下にある **Mark as draft** チェックボックスも自動的にチェックされることに注意してください。

1. **Description** フィールドから `Closes #<ISSUE NUMBER>` を削除してください。元の Issue を追加作業のために開いたままにしておきたいためです。

    > マージリクエストの説明に「Closes #<ISSUE NUMBER>」がある場合、マージリクエストがマージされると Issue はクローズされます。

1. Assignees セクションを確認して自分がマージリクエストに割り当てられていることを確認してください。また、Issue から継承されたラベルと、プロジェクト設定から継承された承認ルールも確認してください。

1. **Create Merge Request** ボタンをクリックしてください。

1. マージリクエストの詳細ページから **Code > Open in Web IDE** を選択して、**update-db-docs-perf-tools** ブランチのファイルを編集してください。

    > Web IDE はリポジトリブランチへのコミット機能が組み込まれた高度なエディターです。Web IDE を使用して GitLab の UI から複数のファイルに直接変更を加えることができます。詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/web_ide/)を参照してください。

1. 左側のファイルペインから **README.md** をクリックしてください。

1. **README.md** の 3 行目から以下を貼り付けてください。

    ```markdown
    ## Performance tools
    The database currently uses HAProxy for load balancing.
    We are researching and testing additional tools to improve performance.
    ```

1. 左ペインの **Source Control**（上から 3 番目のボタン）をクリックしてください。

1. **Commit message** フィールドに `Update docs with performance tools` と入力してください。

1. コミットメッセージの下の赤い「commit」ボックスに「**Commit and push to update-db-docs-perf-tools branch**」というメッセージが表示されていることを確認してください。

1. **Commit and push to update-db-docs-perf-tools branch** をクリックしてください。

## タスク C. コードレビューを実行して変更をマージする

> コードレビューのベストプラクティスについては[ドキュメント](https://docs.gitlab.com/ee/development/code_review.html)を参照してください。

1. Web IDE の左下隅にある赤い GitLab ボタンをクリックし、**Go to Database project on GitLab** をクリックして `Draft: Add performance tools to database documentation` マージリクエストに移動してください。

1. **Code > Merge Requests** をクリックし、`Draft: Add performance tools to database documentation` をクリックしてください。

1. マージリクエストページで **Changes** タブをクリックして、マージ後にプロジェクトの **main** ブランチに適用される変更を確認してください。

    > コードレビュアーは個々のコード行を批評し、変更を提案できます。詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/)を参照してください。

1. **Overview** タブをクリックしてください。

1. Issue タイトルの右側にある 3 つのドットメニューで **Mark as ready** をクリックして、マージリクエストをドラフトモードから解除してください。マージリクエストのタイトルから **Draft:** が削除されたことを確認してください。

1. **Approve** をクリックしてマージリクエストを承認してください。必要な承認がすべて適用されると **Merge** ボタンが表示されることに注意してください。

1. コメントフィールドまでスクロールして `Approved. Ready to merge.` というコメントを入力してください。**Comment** をクリックしてコメントを投稿してください。

1. **Merge** をクリックして、マージが正常に完了することを確認してください。

1. 左上の **Database** タイトルタイルをクリックしてプロジェクトのランディングページに移動してください。**main** ブランチの `README.md` ファイルに更新が含まれていることを確認してください。

1. 左ペインの **Code > Merge requests** をクリックしてください。マージリクエストはこのページの **Merged** タブの下に表示されます。

## 変更のご提案

変更を提案したい場合は、マージリクエストを使用して送信してください。
