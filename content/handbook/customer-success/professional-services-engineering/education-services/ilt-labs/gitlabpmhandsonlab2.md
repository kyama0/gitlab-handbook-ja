---
title: "GitLab アジャイルポートフォリオ管理 - ハンズオンラボ: プロジェクト計画"
description: "このハンズオンガイドでは、GitLab でエピック、イテレーション、マイルストーンを作成する方法を学習します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabpmhandsonlab2/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 45分

## 目標

作業を整理するために、GitLab ではエピック、イテレーション、マイルストーンが用意されています。このラボでは、プロジェクト内でエピック、イテレーション、マイルストーンを作成、設定、管理する方法を学習します。

## タスク A. GitLab の計画機能を確認する

1. *新しいブラウザタブで*、GitLab プロジェクトのソースコード [https://gitlab.com/gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab) に移動します。ページ上部に示されているネームスペース構造に注意してください。**GitLab.org** グループ内の **GitLab** プロジェクトにいるはずです。

1. ページ上部のプロジェクト名の上にある **GitLab.org** をクリックして親グループに移動します。

1. 左ペインに表示されているエピック、Issue、マージリクエストの数に注意してください。これらの数字は、**Gitlab.org** 内のすべてのサブグループとプロジェクトにわたる作業アイテムを表しています。

1. 左ペインで **Epics** をクリックします。これにより、**GitLab.org** とそのすべてのサブグループのエピックの検索可能なリストに移動します。

1. 左ペインで **Plan > Roadmap** をクリックします。開始日または期日を含むグループのエピックとマイルストーンは、タイムライン（ガントチャート）の形式で視覚化できます。ロードマップページには、グループ、そのサブグループのいずれか、またはグループ内のプロジェクトのエピックとマイルストーンが表示されます。

1. エピックバーでは、各エピックのタイトル、進捗、完了したウェイトのパーセンテージを確認できます。エピックバーの上にカーソルを置くと、エピックのタイトル、開始日、期日、完了したウェイトがポップアップに表示されます。

1. 子エピックを含むエピックを展開して、ロードマップに子エピックを表示できます。エピックタイトルの隣にあるシェブロン（v）を選択して、子エピックを展開または折りたたむことができます。

## タスク B. エピックを作成する

> エピックは、戦略的なテーマを共有するIssueとサブエピックのセットを整理・管理する方法を提供します。論理的なグループ化に加えて、エピックによりプロジェクトマネージャーは高レベルの計画を行い、視覚的なステータス追跡でロードマップを構築できます。エピックの詳細については[ドキュメント](https://docs.gitlab.com/ee/user/group/epics/)を参照してください。

1. *ラボ環境のブラウザタブで*、ページ上部の **Group XXXXX**（Xはランダムな文字と数字に置き換えられます）をクリックします。

1. グループページで、**Awesome Inc** サブグループをクリックします。サブグループ内で **Software** をクリックします。

1. **Software** グループのランディングページの左ペインで、**Plan > Work items** をクリックします。

1. **New item** ボタンをクリックします。

1. **Type** フィールドが **Epic** に設定されていることを確認します。

1. *New Epic* ページで、**Title (required)** フィールドに `Feature Category: Retirement Planning` を入力します。説明的なタイトルを付けることで、エピックに関連付けるべきIssueとサブエピックが明確になります。

1. **Description** フィールドに以下を貼り付けます:

    ```markdown
    # Overview

    This is the top-level epic for all features in the `Retirement Planning` category of Awesome Co.'s personal finance software.

    # Useful Links
    - *To-Do: add link to the feature strategy document*
    - *To-Do: add contributing team member information*
    ```

    > エピックの他のオプションを変更する必要はありませんが、オプションを理解することは重要です。

1. 設定またはデフォルト設定のままにできる追加オプションがあります。

    - **Assignees**: エピックの完了に責任を持つ個人。

    - **Label**: エピックにラベルを適用します。ラベルはエピックのソートとフィルタリングに使用できるメタデータタグです。

    - **Parent**: エピックは他のエピックの子や親になることができます。親と子のエピックは、チームや会社の目標をさらに整理し明確にするために使用できます。次のタスクで子エピックを作成します。

    - **Milestone**: 包括的な計画を確保するためにエピックをマイルストーンに割り当てることができます。

    - **Dates**: エピックの作業が開始・完了する予定のスケジュール。固定（手動設定）と継承（エピックに関連するIssueから「継承」）の2つのオプションがあります。

    - **Health status**: エピックがスケジュールより遅れる危険があるかどうかを識別する方法。

    - **Color**: ロードマップタイムラインバーで使用する際のエピックの表示色をカスタマイズします。タスクAの **GitLab.org** グループのロードマップを参照してください。

1. メタデータを確認したら、**Create epic** を選択します。

## タスク C: 子エピックを作成する

1. 親エピックにリンクする新しい子エピックを作成します。左ペインの **Plan > Epics** をクリックして、エピックページに移動します。

1. 右上角の **New epic** ボタンをクリックします。

1. タイトルセクションに `Investment Tracking` と入力します。

1. **Description** フィールドに以下を貼り付けます:

    ```markdown
    # Overview

    This epic tracks all work on `Investment Tracking` features and integrations, as part of the overall `Retirement Planning` category strategy.
    ```

1. 他のフィールドはすべてそのままにして、**Create epic** をクリックします。

1. ページ上部のパンくずリストの **Epics** をクリックして、Software グループのエピック全リストに戻ります。

1. **Feature Category: Retirement Planning** エピックをクリックします。

1. **Investment Tracking** エピックを **Retirement Planning** エピックの子として指定します。**Child items** タブで、**Add** ドロップダウンメニューを選択し、**Existing epic** をクリックします。

    > このメニューを使用して、子エピックをゼロから作成することもできます。

1. 提供されたフィールドに `&2` と入力し、エピックのリストから **Investment Tracking** を選択します。

    > `&` シンボルを使用すると、エピックを名前ではなく固有のエピックIDで参照できます。これは、似たような名前のエピックが多数ある場合に便利です。

1. **Add Epic** をクリックして、**Investment Tracking** を **Retirement Planning** 親エピックの子エピックとしてリンクします。

## タスク D. マイルストーンを設定して製品目標を表す

> GitLab のマイルストーンは、一定期間内に広い目標を達成するために作成されたIssueとマージリクエストを追跡する方法です。マイルストーンにより、オプションの開始日とオプションの期日とともに、エピック、Issue、マージリクエストを一体的なグループに整理できます。マイルストーンの詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/milestones/)を参照してください。

1. **Awesome Inc** サブグループに移動します。

1. 左ペインで **Plan > Milestones** をクリックします。マイルストーンページに移動します。

1. **New milestone** をクリックします。

1. **Title** セクションに `Organization Kickoff` と入力します。

1. **Start Date** セクションでカレンダーを使って今日の日付を入力します。

1. **End Date** セクションでカレンダーを使って今日から2日後の日付をマイルストーンの終了日として入力します。

    > 説明は必須ではありませんが、マイルストーンが何に使用されるかを明確にするために説明を入力することをお勧めします。

1. **Create milestone** をクリックします。

1. ページ上部のパンくずリストで **Milestones** をクリックします。

1. **New milestone** をクリックして2番目のマイルストーンを作成します。

1. **Title** セクションに `Backend services deployed` と入力します。

1. **Start Date** セクションでカレンダーを使って今日の日付を入力します。

1. **End Date** セクションでカレンダーを使って今日から2週間後の日付をマイルストーンの終了日として入力します。

1. **Create milestone** をクリックします。

1. ページ上部のパンくずリストで **Milestones** をクリックして、新しく作成したマイルストーンを確認します。

後でエピックとマイルストーンにタスクを割り当てることで、ロードマップを使って取り組みの進捗を確認できるようになります。

## タスク E. イテレーションをチームスプリントとしてスケジュールする

> イテレーションはチームのベロシティを追跡するための相互に排他的なタイムボックスで、マイルストーンは重複する可能性がある大きな製品目標を表すことができます。イテレーションの詳細については[ドキュメント](https://docs.gitlab.com/ee/user/group/iterations/)を参照してください。

1. サブグループ構造で **Awesome Inc > Software** に移動します。

1. 左ペインで **Plan > Iterations** をクリックします。

1. 右上角の **New iteration cadence** をクリックします。

1. **Title** セクションに `Team sprints` と入力します。

1. **Description** セクションに `Tracking team progress toward minimum viable product` と入力します。

1. **Automation start date** 入力フィールドで、カレンダーを使って今日の日付を入力します。

1. **Duration** セクションで、各イテレーションの期間として2週間を選択します。

1. **Upcoming iterations** セクションで、今後のイテレーション数として6を選択します。

1. **Enable roll over** チェックボックスが選択されていることを確認します。

    > **Enable roll over** が選択されている場合、現在のイテレーション終了時にすべてのオープンIssueが次のイテレーションに追加されます。

1. **Create cadence** を選択します。

後で個々のタスクをイテレーション（スプリント）に割り当てます。

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabpmhandson)を確認できます。

## ご提案はありますか?

ラボへの変更を希望する場合は、マージリクエストで変更を送信してください。
