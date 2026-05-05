---
title: "GitLab アジャイルポートフォリオ管理 - ハンズオンラボ: Issue を整理・管理する"
description: "このハンズオンガイドでは、GitLab で Issue のメタデータを作成することや、説明テンプレートを作成する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabpmhandsonlab5/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:14:42Z
translator: claude
stale: false
---

> 完了までの推定時間: 45〜60 分

## 目標

Issue を管理するために、GitLab は各 Issue にメタデータを提供しています。メタデータを使うと、ウェイトや期限などの Issue の詳細を定義できます。このラボでは、Issue のメタデータを表示・管理する方法を学びます。

- **Epic:** Issue をエピックに関連付けます。

- **Milestone:** GitLab のマイルストーンは、特定の期間内に広範な目標を達成するために作成された Issue とマージリクエストを追跡する方法です。

- **Labels:** Issue にラベルを適用します。Issue をソートおよびフィルタリングするために使用できるメタデータタグです。

- **Weight:** 特定の Issue が持つまたはかかる時間、複雑さ、または価値を測定するためのウェイト値を Issue に適用します。

- **Due date:** Issue に期限を設定し、機能が時間通りに出荷されるようにします。

- **Iteration:** Issue をイテレーションに関連付けて、一定期間にわたって追跡します。これにより、チームは速度と変動性のメトリクスを追跡できます。

Issue とメタデータについては[ドキュメント](https://docs.gitlab.com/ee/user/project/issues/)で詳しく学ぶことができます。

## タスク A. Issue のメタデータを設定する

1. **Family Budget Calculator** プロジェクトで、左ペインの **Plan > Issues** をクリックします。

1. 前のラボで作成した **Third-party financial services integration** Issue をクリックします。

1. Issue のメタデータペイン（画面の右側）で、**Parent** フィールドの横の **Edit** をクリックします。

1. 一覧の **Investment Tracking** をクリックして、この Issue を **Investment Tracking** エピックに割り当てます。

1. Issue のメタデータペイン（画面の右側）で、**Iteration** フィールドの横の **Edit** をクリックします。

1. **Team sprints** の中で最も直近の最初のイテレーションをクリックして、この Issue をそのイテレーションに割り当てます。

1. Issue のメタデータペイン（画面の右側）で、**Due date** フィールドの横の **Edit** をクリックします。

1. カレンダーを使用して、Issue の期限を今日から 1 週間後に設定します。

1. Issue のメタデータペイン（画面の右側）で、**Labels** フィールドの横の **Edit** をクリックします。

1. **Status::WIP** ラベルを適用します。Issue は同じスコープ（ラベルの「Status::」の部分）を持つ複数のラベルを同時に持てないため、これにより以前の **Status::Open** ラベルが置き換えられることに注意してください。

   > スコープ付きラベルの詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels)を参照してください。

1. Issue のメタデータペインで、**Weight** フィールドの横の **Edit** をクリックします。

1. `2` という値を入力し、メタデータペインの外をクリックして Issue のウェイトを設定します。

1. **Awesome Inc > Software** グループに移動します。左ペインの **Epics** をクリックします。**Investment Tracking** エピックをクリックします。エピックの詳細ページに **Third-party financial services integration** Issue が表示されていることを確認します。

1. 左ペインの **Plan > Iterations** をクリックします。Issue を割り当てたイテレーションをクリックします。イテレーションの詳細ページに **Third-party financial services integration** Issue が表示されていることを確認します。

## タスク B. Issue とエピックを整理・昇格・リンクする

1. **Family Budget Calculator** プロジェクトで、左ペインの **Issues** をクリックします。

1. **Backend services** Issue をクリックします。このイニシアチブの規模を考えると、この Issue はエピックとして設定し、説明内の各 To-Do を個別の Issue にする方が適切だと気づきます。

1. この Issue をエピックに昇格させるには、Issue のコメントフィールドに `/promote_to epic` クイックアクションを使用して **Comment** をクリックします。

   > **クイックアクション**は、GitLab のユーザーインターフェースでボタンやドロップダウンを選択することで通常実行される一般的なアクションのテキストベースのショートカットです。Issue、エピック、マージリクエスト、コミットの説明やコメントにこれらのコマンドを入力できます。クイックアクションの詳細については[こちら](https://docs.gitlab.com/ee/user/project/quick_actions.html)をクリックしてください。
   >
   > また、**Edit ボタン**の横の**縦の省略記号**をクリックし、表示されるメニューで **Promote to epic** をクリックすることでも Issue をエピックに昇格できます。

1. クイックアクションを適用すると、**Backend services** は **Core** グループレベルのエピックになります。クイックアクションはコメントを残さないため、「/promote」というコメントは表示されません。ページ上部のパンくずリストを使用して **Core** サブグループをクリックします。

1. 左ペインの **Epics** をクリックします。

1. 新しく作成した **Backend services** エピックをクリックします。

1. エピックの To-Do 項目を個別の Issue としてリンクしたいと思います。Issue をエピックに昇格させることはできますが、To-Do 項目を Issue に昇格させることはできません。代わりに、各 To-Do 項目に対して新しい Issue を作成する必要があります。**Child issues and epics** タブで **Add > Add a new issue** をクリックします。

1. Issue のタイトルとして `Create DB` と入力します。

1. **Project** ドロップダウンで、現在まで作成されている唯一のプロジェクトであり、すべての Issue はプロジェクトに属する必要があるため **Family Budget Calculator** を選択します。

1. 右上の **Create issue** をクリックします。

1. 前の 4 ステップに従って、`Create service infrastructure` と `Backend documentation` の Issue を作成し、どちらも **Backend services** エピックにリンクします。

1. **Create DB** Issue をクリックします。

1. Issue の右側のメタデータペインで、Issue を **Backend Services Deployed** マイルストーンに割り当てます。

1. **Create service infrastructure** と **Backend documentation** の Issue を **Backend Services Deployed** マイルストーンに割り当てます。今まではすべての Issue が必然的に **Family Budget Calculator** プロジェクトで作成されてきましたが、要件が増えるにつれ、一部の Issue をより適切なプロジェクトに移動することがベストです。

1. **Software > Core** サブグループに移動します。

1. **Core** グループのランディングページから **New project** をクリックし、**Create blank project** をクリックします。

1. **Project name** フィールドに `Database` と入力します。

1. **Visibility Level** はデフォルトの選択のままにします。

1. **Initialize repository with a README** チェックボックスを有効にします。

1. **Create project** をクリックします。

1. **Core** サブグループの **Family Budget Calculator** プロジェクトに戻ります。

1. 左ペインの **Issues** をクリックします。

1. **Create DB** Issue をクリックします。

1. Issue の詳細ページで、右側のメタデータペインの下部までスクロールして **Move issue** をクリックします。

1. **Database** プロジェクトを選択し、**Move** をクリックします。

1. ページ上部のプロジェクト見出しとパンくずリストが **Database** プロジェクトの一部であることを示していることを確認します。

## タスク C. 説明テンプレートを作成して適用する

1. ページ上部のパンくずリストを使用して **Awesome Inc** グループに移動します。

1. グループのランディングページの右上で **New Project** をクリックします。

1. **Create blank project** をクリックします。

1. **Project name** セクションに `Description Templates` と入力します。このプロジェクトには、組織全体の Issue とマージリクエストの事前入力に使用できるテンプレートが保存されます。

1. 既存のプロジェクトを他の場所からインポートするのではないため、**Initialize repository with a README** チェックボックスを有効にします。他のオプションはすべてデフォルトのままにします。

1. **Create project** をクリックします。

1. プロジェクトのランディングページで、プロジェクトタイトルの下近くのページ上部にある **(+)** ドロップダウンをクリックします。

1. **This Directory > New file** をクリックします。

1. **File name** フィールドに `.gitlab/issue_templates/technical_spike.md` と入力します。

1. ファイルの内容として以下を貼り付けます。

   ```markdown
   ## Instructions
   Use this issue to capture research that must take place before continued development of a feature.

   ### Summary
   <!--In 2 sentences or fewer, describe the problem to be solved or the question to be answered.  -->

   ### Impact Statement
   <!-- Describe importance of solving the problem. How will it affect the feature or product direction?  -->

   ### Tasks

   - [ ] Assign participants and DRI
   - [ ] Apply appropriate priority and team labels
   - [ ] Assign to an upcoming product sprint

   /label ~"Status::Open"
   ```

   > テンプレートがクイックアクションを使用してラベルを割り当てていることに注意してください。このテンプレートが使用されると、作成時にラベルが自動的に割り当てられます。

1. **Commit changes** をクリックします。

   > **セキュリティに関する注意**: マージリクエストなしでメインブランチに直接コミットすることは、エンタープライズレベルのプロジェクトではお勧めしません。

1. ページ上部のパンくずリストを使用して **Awesome Inc** グループに戻ります。

1. 左ペインの **Settings > General** をクリックします。

1. **Templates** セクションまでスクロールして **Expand** を選択します。

1. **Templates** ドロップダウンで **Description Templates** プロジェクトを選択します。

1. **Save changes** をクリックします。

1. これでテンプレートを Issue 作成時に適用できるようになりました。**Awesome Inc > Software > Core > Database** プロジェクトに移動します。

1. 左ペインの **Plan > Issues** をクリックします。

1. **New issue** をクリックします。

1. **Title** フィールドに `Identify tuning parameters to reduce performance bottlenecks` と入力します。

1. **Description** フィールドで **Choose a template** ドロップダウンを展開し、**technical_spike** 説明テンプレートを選択します。

1. （オプション）説明を編集して Issue に関する詳細情報を追加します。

1. **Assign to me** リンクをクリックして自分自身を Issue に割り当て、**Create issue** をクリックします。

1. Issue の詳細ページで事前入力された説明とメタデータを確認します。

## 変更のご提案

マージリクエストに変更を提案したい場合は、マージリクエストを使用して送信してください。
