---
title: "GitLab アジャイルポートフォリオ管理 - ハンズオンラボ: タスク管理と進捗追跡"
description: "このハンズオンガイドでは、GitLab で Issue とラベルを作成する方法を学習します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabpmhandsonlab3/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-10T08:39:48-04:00"
---

> 完了までの推定時間: 45分

## 目標

Issue は GitLab のコアとなる構成要素で、コラボレーション、ディスカッション、作業の計画と追跡を可能にします。Issue は**プロジェクト**のスコープで定義され、グループではありません。詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/issues/)を参照してください。

## タスク A. ラベルの作成と管理

> ラベルを使用して、バグ、機能リクエスト、ドキュメントなどの色と説明的なタイトルを使ってエピック、Issue、マージリクエストを分類できます。これにより、エピック、Issue、マージリクエストを動的にフィルタリングして管理できます。詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/labels.html)を参照してください。

1. **Awesome Inc** グループに移動します。

1. 左ペインで **Manage > Labels** をクリックします。

1. **New label** ボタンをクリックします。

1. **Title** フィールドに `Status::Open` と入力します。ラベルタイトルの2つのコロンは、これが[スコープラベル](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels)であることを意味します。

    > スコープラベルは、タイトルに二重コロン（::）の構文を使用します（例: `workflow::in review`）。Issue、マージリクエスト、またはエピックは、同じキーを持つ2つのスコープラベル（`key::value` の形式）を持つことができません。同じキーで異なる値の新しいラベルを追加すると、以前のキーラベルが新しいラベルに置き換えられます。

1. **Description** フィールドに `Item that is ready to begin work` と入力します。

1. ラベルの色として、GitLab は任意の16進数カラーコードをサポートします。このラベルには、推奨カラーパレットから **Blue-gray** を選択します（または **Background color** フィールドに `#6699cc` と入力します）。

1. **Create label** をクリックします。

1. 次の追加ラベルを作成し、任意の説明と背景色を設定します。スコープラベルとスコープなしラベルが混在していることに注意してください。
    - `Status::WIP`
    - `Status::Done`
    - `Priority::High`
    - `Priority::Medium`
    - `Priority::Low`
    - `Dev`
    - `QA`
    - `Security`

1. **Awesome Inc > Software > Core** グループ階層内の **Family Budget Calculator** プロジェクトに移動します。

1. 左サイドバーから **Manage > Labels** をクリックします。

1. 以下のラベルを優先ラベルとして指定するために、**Subscribe** ボタンの左側にある星アイコンをクリックします。優先ラベルはラベルリストの上部に表示されます。

     - **Priority::High**
     - **Priority::Medium**
     - **Priority::Low**

## タスク B. 作業追跡のためのIssueを作成する

1. **Family Budget Calculator** プロジェクトで、左サイドバーから **Plan > Work items** をクリックします。

1. **New item** ボタンをクリックします。

1. **Type** フィールドが **Issue** に設定されていることを確認します。

1. タイトルセクションに `Third-party financial services integration` と入力します。

1. 説明はオプションのセクションですが、このIssueに独自の説明を入力しても構いません。

1. **Assignees** ドロップダウンを使用してIssueを自分自身に割り当てます。ドロップダウンをクリックしてから、自分のユーザー名をクリックします。現時点ではオプションをそのままにしますが、それぞれが何をするかを理解することは重要です:

    - **Parent:** Issue をエピックと関連付けます。

    - **Milestone:** GitLab のマイルストーンは、一定期間内に広い目標を達成するために作成されたIssueとマージリクエストを追跡する方法です。

    - **Labels:** Issueにラベルを適用します。ラベルはIssueのソートとフィルタリングに使用できるメタデータタグです。

    - **Weight:** Issueにウェイト値を適用して、そのIssueが持つ時間、複雑さ、または価値を測定します。

    - **Dates:** 期限を把握して機能が予定通りにリリースされるよう、Issueで使用します。

    - **Iteration:** Issueをイテレーションに関連付けて、一定期間追跡します。これにより、チームはベロシティとボラティリティの指標を追跡できます。

1. **Create issue** ボタンをクリックします。

1. 名前をクリックして作成したばかりのIssueを開きます。

1. Issueのメタデータペインで、**Labels** フィールドの隣の **Edit** をクリックします。

1. **Status::Open** ラベルを選択し、メタデータペインの外をクリックしてIssueにラベルを適用します。

1. 前の2つのステップを繰り返して、**Priority::Medium** と **Dev** ラベルをIssueに適用します。

1. 左ペインで **Plan > Work items** をクリックします。作成したIssueとそのラベルが一覧に表示されます。

1. Issue一覧ページの右上にある **New item** をクリックして2番目のIssueを作成します。

1. **Title** セクションに `Backend services` と入力します。

1. **Description** セクションに以下を貼り付けます:

    ```markdown
    - Create DB
    - Create service infrastructure
    - Write documentation
    ```

1. **Assignees** ドロップダウンを使用してIssueを自分自身に割り当てます。ドロップダウンをクリックしてから、自分のユーザー名をクリックします。

1. **Create issue** ボタンをクリックします。

1. ラベルをクリックし、メタデータペインの外をクリックしてラベルをIssueに適用します: **Backend services** Issueに **Dev**、**Status::Open**、**Priority::High** の各ラベルを適用します。

1. 左ペインで **Plan > Work items** をクリックして、ラベル付きの両Issueを確認します。

1. Issue一覧ページの右上にある **New item** をクリックして3番目のIssueを作成します。

1. **Title** セクションに `Frontend services` と入力します。

1. **Description** セクションに以下を貼り付けます:

    ```markdown
    - UX design
    - Integration
    - Write documentation
    ```

1. **Assignees** ドロップダウンを使用してIssueを自分自身に割り当てます。ドロップダウンをクリックしてから、自分のユーザー名をクリックします。

1. **Create issue** をクリックします。

1. ラベルをクリックし、メタデータペインの外をクリックしてラベルをIssueに適用します: **Frontend services** に **Dev**、**Status::WIP**、**Priority::High** の各ラベルを適用します。

1. 左ペインで **Plan > Work items** をクリックして、ラベル付きの3つのIssueすべてを確認します。

## タスク C. ラベルに基づいたビューを作成する

> ラベルが用意できたので、これらを使って独自のパーソナライズされたワークアイテムビューを作成できます。これにより、特定の条件に一致するワークアイテムを簡単に確認できます。自分に割り当てられたワークアイテム、特定のラベルを持つワークアイテム、またはその他のフィルタリング機能を持つビューを作成できます。

1. **Plan > Work items** に移動します。

1. フィルターバー（現在は「State is Open」でフィルタリングされているはずです）をクリックします。ドロップダウンから **Label** を選択し、次に **is** を選択し、最後に **Priority::High** ラベルを選択します。

1. フィルターボタン（フィルターバーの右端にある虫めがねアイコン）を押してこのラベルでワークアイテムリストをフィルタリングします。

    > これにより、優先度の高いIssueだけに絞り込まれます。

1. これをビューにするには、フィルターバーの上にある **All Items** ヘッダーの右側にある **+ Add View** ボタンをクリックし、**New View** を選択します。

1. ビューに `High Priority Issues` というタイトルを付け、任意の説明を追加します。

1. **Create View** をクリックします。

1. **All items** タブの隣に `High Priority Issues` というタイトルの新しいタブが表示され、選択したフィルターが維持されていることに注意してください。

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabpmhandson)を確認できます。

## ご提案はありますか?

ラボへの変更を希望する場合は、マージリクエストで変更を送信してください。
