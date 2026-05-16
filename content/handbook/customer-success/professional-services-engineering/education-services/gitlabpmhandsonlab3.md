---
title: "GitLab アジャイルポートフォリオ管理 - ハンズオンラボ: GitLab の計画ツールを使用する"
description: "このハンズオンガイドでは、GitLab でエピック、イテレーション、マイルストーンを作成する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabpmhandsonlab3/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:14:42Z
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

> 完了までの推定時間: 45〜60 分

## 目標

作業を整理するために、GitLab ではエピック、イテレーション、マイルストーンが用意されています。このラボでは、プロジェクトでエピック、イテレーション、マイルストーンを作成・設定・管理する方法を学びます。

## タスク A. GitLab の計画機能を確認する

1. *新しいブラウザタブで* GitLab プロジェクトのソースコード [https://gitlab.com/gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab) を開いてください。ページ上部に表示されているネームスペース構造を確認してください。**GitLab.org** グループ内の **GitLab** プロジェクトにいることを確認してください。

1. プロジェクト名の上部にある **GitLab.org** をクリックして親グループに移動してください。

1. 左ペインに表示されているエピック数、Issue 数、マージリクエスト数を確認してください。これらの数字は **Gitlab.org** 内のすべてのサブグループとプロジェクトにわたる作業アイテムを表しています。

1. 左ペインの **Epics** をクリックしてください。**GitLab.org** とそのすべてのサブグループのエピックの検索可能な一覧が表示されます。

1. 左ペインの **Plan > Roadmap** をクリックしてください。開始日または終了日を含むグループのエピックとマイルストーンをタイムライン形式（ガントチャート）で可視化できます。ロードマップページには、グループ、そのサブグループの一つ、またはグループ内のプロジェクトのエピックとマイルストーンが表示されます。

1. エピックのバー上で、各エピックのタイトル、進捗状況、完了ウェイトの割合を確認できます。エピックバーにカーソルを合わせると、エピックのタイトル、開始日、終了日、完了ウェイトのポップオーバーが表示されます。

1. 子エピックを含むエピックを展開して、ロードマップ上に子エピックを表示できます。エピックタイトルの横にある山形（v）を選択して、子エピックを展開または折りたたむことができます。

## タスク B. エピックを作成する

> エピックは、戦略的なテーマを共有する Issue とサブエピックのセットを整理・管理する方法を提供します。論理的なグループ化に加え、エピックによってプロジェクトマネージャーは高レベルの計画を実行し、視覚的なステータス追跡のあるロードマップを構築できます。エピックについては[ドキュメント](https://docs.gitlab.com/ee/user/group/epics/)で詳しく読むことができます。

1. *ラボ環境のブラウザタブで、* ページ上部の `GitLab Learn Labs` の横にある `...` をクリックしてください。

1. **My Test Group** をクリックしてください。

1. グループページで **Awesome Inc** サブグループをクリックしてください。サブグループ内で **Software** をクリックしてください。

1. **Software** グループのランディングページの左ペインで **Epics** をクリックしてください。

1. 検索バーの右上にある **New epic** ボタンをクリックしてください。

1. *New Epic* ページで、**Title (required)** フィールドに `Feature Category: Retirement Planning` と入力してください。わかりやすいタイトルを付けることで、どの Issue やサブエピックをエピックに関連付けるべきかが明確になります。

1. **Description** フィールドに以下のテキストを貼り付けてください。

    ```markdown
    # Overview

    This is the top-level epic for all features in the `Retirement Planning` category of Awesome Co.'s personal finance software.

    # Useful Links
    - *To-Do: add link to the feature strategy document*
    - *To-Do: add contributing team member information*
    ```

    > エピックの他のオプションは変更する必要はありませんが、それぞれのオプションを理解しておくことは重要です。

1. 追加のオプションを設定するか、デフォルト設定のままにすることができます。

    - **Confidentiality**: パブリックプロジェクトがある場合、内部使用のためにプライベートエピックを作成します。

    - **Label**: エピックにラベルを適用します。エピックをソートおよびフィルタリングするために使用できるメタデータタグです。

    - **Start Date** と **Due Date**: プロジェクトのマイルストーンに合わせてエピックをスケジュールします。

    - **Color**: ロードマップタイムラインバーでエピックを表示する際の色をカスタマイズします。タスク A で **GitLab.org** グループのロードマップを参考にしてください。

## タスク C: 子エピックを作成する

> 親エピックは複数の子エピックを持つことができます。子エピックを使用して、複雑なトピックをより小さく焦点を絞ったエピックと Issue に整理します。

1. 親エピックにリンクする新しい子エピックを作成してください。左ペインの **Plan > Epics** をクリックしてエピックページに移動してください。

1. 右上の **New epic** ボタンをクリックしてください。

1. タイトルセクションに `Investment Tracking` と入力してください。

1. **Description** フィールドに以下のテキストを貼り付けてください。

    ```markdown
    # Overview

    This epic tracks all work on `Investment Tracking` features and integrations, as part of the overall `Retirement Planning` category strategy.
    ```

1. 他のフィールドはそのままにして、**Create epic** をクリックしてください。

1. ページ上部のパンくずリストの **Epics** をクリックして、Software グループのエピック全件一覧に戻ってください。

1. **Feature Category: Retirement Planning** エピックをクリックしてください。

1. **Investment Tracking** エピックを **Retirement Planning** エピックの子として指定してください。**Child issues and epics** タブで **Add** ドロップダウンメニューを選択し、**Add an existing epic** をクリックしてください。

    > このメニューを使用して、子エピックをゼロから作成することもできます。

1. フィールドに `&` と入力し、エピックの一覧から **Investment Tracking** を選択してください。

    > `&` 記号を使うと、名前ではなくエピックの一意の ID でエピックを参照できます。これは、似た名前のエピックが多数ある場合に便利です。

1. **Add** をクリックして **Investment Tracking** を **Retirement Planning** 親エピックの子エピックとしてリンクしてください。

## タスク D. 製品目標を表すマイルストーンを設定する

> GitLab のマイルストーンは、特定の期間内に広範な目標を達成するために作成された Issue とマージリクエストを追跡する方法です。マイルストーンを使用すると、エピック、Issue、マージリクエストをオプションの開始日と終了日を持つまとまりのあるグループに整理できます。マイルストーンについては[ドキュメント](https://docs.gitlab.com/ee/user/project/milestones/)で詳しく読むことができます。

1. **Awesome Inc** サブグループに移動してください。

1. 左ペインの **Plan > Milestones** をクリックしてください。マイルストーンページに移動します。

1. 右上の **New milestone** をクリックしてください。

1. **Title** セクションに `Organization Kickoff` と入力してください。

1. **Start Date** セクションで、カレンダーを使用して今日の日付を入力してください。

1. **End Date** セクションで、カレンダーを使用して今日から 2 日後の日付をマイルストーンの終了日として入力してください。

    > 説明は必須ではありませんが、マイルストーンの使用目的を明確にするために説明を入力することをお勧めします。

1. **Create milestone** をクリックしてください。

1. ページ上部のパンくずリストの **Milestones** をクリックしてください。

1. **New milestone** をクリックして、2つ目のマイルストーンを作成してください。

1. **Title** セクションに `Backend services deployed` と入力してください。

1. **Start Date** セクションで、カレンダーを使用して今日の日付を入力してください。

1. **End Date** セクションで、カレンダーを使用して今日から 2 週間後をマイルストーンの終了日として入力してください。

1. **Create milestone** をクリックしてください。

1. ページ上部のパンくずリストの **Milestones** をクリックして、新しく作成したマイルストーンを表示してください。

後でエピックとマイルストーンにタスクを割り当てることで、ロードマップを使用してイニシアチブの進捗を確認できるようになります。

## タスク E. チームスプリントとしてイテレーションをスケジュールする

> イテレーションはチームの速度を追跡するための相互排他的なタイムボックスです。一方、マイルストーンは重複する可能性のある大きな製品目標を表します。イテレーションについては[ドキュメント](https://docs.gitlab.com/ee/user/group/iterations/)で詳しく読むことができます。

1. サブグループ構造で **Awesome Inc > Software** に移動してください。

1. 左ペインの **Plan > Iterations** をクリックしてください。

1. 右上の **New iteration cadence** をクリックしてください。

1. **Title** セクションに `Team sprints` と入力してください。

1. **Description** セクションに `Tracking team progress toward minimum viable product` と入力してください。

1. **Automatic start date** の入力欄で、カレンダーを使用して今日の日付を入力してください。

1. **Duration** セクションで、各イテレーションの期間として 2 週間を選択してください。

1. **Upcoming iterations** セクションで、直近のイテレーション数として 6 を選択してください。

1. **Enable roll over** チェックボックスが選択されていることを確認してください。

    > **Enable roll over** が選択されている場合、現在のイテレーションの終了時に未完了の Issue はすべて次のイテレーションに追加されます。

1. **Create cadence** を選択してください。

後でイテレーション（スプリント）に個々のタスクを割り当てます。

## タスク F. プロジェクトドキュメント用の Wiki を作成する

> ドキュメントをリポジトリに保持したくないが、コードと同じプロジェクト内に置きたい場合は、GitLab が各 GitLab プロジェクトで提供している Wiki を使用できます。すべての Wiki は別の Git リポジトリなので、GitLab の UI で、またはローカルで Git を使用して Wiki ページを作成できます。GitLab の Wiki はコンテンツとして Markdown、Rdoc、AsciiDoc、Org をサポートしています。Markdown で書かれた Wiki ページは、すべての Markdown 機能に加え、リンクに対して一部 Wiki 固有の動作を提供します。Wiki については[こちら](https://docs.gitlab.com/ee/user/project/wiki/)で詳しく読むことができます。

1. **Software > Core** サブグループの **Family Budget Calculator** プロジェクトに移動してください。

1. 左ペインの **Plan > Wiki** をクリックしてください。

1. ページ中央の **Create your first page** ボタンをクリックしてください。

1. **Title** セクションに `Family Budget Calculator Documentation` とページタイトルを入力してください。

1. タイトルフィールドの下のコンテンツフィールドに以下のテキストを貼り付けてください。

    ```markdown
    ## Summary

    The Family Budget Calculator helps households stay on budget and save for the future.

    ## Contact

    Contact <YOUR-NAME> with questions or comments.
    ```

1. **Create Page** をクリックしてください。作成したコンテンツを含む新しい Wiki ページが表示されます。

> 必要に応じて **Family Budget Calculator Documentation** ページを編集してコンテンツを追加したり、追加の Wiki ページを作成したりしてください。

## 変更のご提案

変更を提案したい場合は、マージリクエストを使用して送信してください。
