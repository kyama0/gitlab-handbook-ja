---
title: "GitLab アジャイルポートフォリオ管理 - ハンズオンラボ: Issue を作成する"
description: "このハンズオンガイドでは、GitLab で Issue とラベルを作成する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabpmhandsonlab4/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:14:42Z
translator: claude
stale: false
---

> 完了までの推定時間: 45 分

## 目標

Issue は GitLab のコアとなる構成要素で、コラボレーション、ディスカッション、作業の計画・追跡を可能にします。Issue は**グループ**ではなく**プロジェクト**のスコープ内で定義されます。詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/issues/)を参照してください。

## タスク A. ラベルを作成・管理する

> ラベルを使用すると、バグ、機能リクエスト、ドキュメントなどの色や説明タイトルを使ってエピック、Issue、マージリクエストを分類できます。これにより、エピック、Issue、マージリクエストを動的にフィルタリング・管理できます。詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/labels.html)を参照してください。

1. **Awesome Inc** グループに移動します。

1. 左ペインの **Manage > Labels** をクリックします。

1. 右上の **New label** をクリックします。

1. **Title** フィールドに `Status::Open` と入力します。ラベルタイトル内の 2 つのコロンは、これが[スコープ付きラベル](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels)になることを意味します。

    > スコープ付きラベルはタイトルに二重コロン（::）の構文を使用します（例: `workflow::in review`）。Issue、マージリクエスト、エピックは、同じキーを持つ `key::value` 形式の 2 つのスコープ付きラベルを持つことができません。同じキーで異なる値を持つ新しいラベルを追加すると、以前のキーラベルは新しいラベルに置き換えられます。

1. **Description** フィールドに `Item that is ready to begin work` と入力します。

1. ラベルの色については、GitLab は任意の16進カラーコードをサポートしています。このラベルには、提案されたカラーパレットから **Blue-gray** を選択してください（または **Background color** フィールドに `#6699cc` と入力してください）。

1. **Create label** をクリックします。

1. 以下の追加ラベルを、任意の説明と背景色を設定して作成してください。スコープ付きのものとスコープなしのものがあることに注意してください。
    - `Status::Open`
    - `Status::WIP`
    - `Status::Done`
    - `Priority::High`
    - `Priority::Medium`
    - `Priority::Low`
    - `Dev`
    - `QA`
    - `Security`

1. **Family Budget Calculator** プロジェクトに移動します。プロジェクトは **Awesome Inc > Software > Core** グループ階層の中にあります。

1. 左サイドバーの **Manage > Labels** をクリックします。

1. **Subscribe** ボタンの左にある星アイコンをクリックして、以下のラベルを優先ラベルとして指定します。優先ラベルはラベル一覧の上部に表示されます。

     - **Priority::High**
     - **Priority::Medium**
     - **Priority::Low**

## タスク B. 作業を追跡する Issue を作成する

1. **Family Budget Calculator** プロジェクトで、左サイドバーの **Plan > Issues** をクリックします。

1. **New issue** ボタンをクリックします。

1. タイトルセクションに `Third-party financial services integration` と入力します。

1. 説明はオプションのセクションですが、この Issue の説明を自由に入力してください。

1. **Assignees** ドロップダウンを使用して、ドロップダウンをクリックしてから自分のユーザー名をクリックし、自分自身を Issue に割り当てます。現時点ではオプションはそのままにしますが、それぞれの機能を理解しておくことが重要です。

    - **Epic:** Issue をエピックに関連付けます。

    - **Milestone:** GitLab のマイルストーンは、特定の期間内に広範な目標を達成するために作成された Issue とマージリクエストを追跡する方法です。

    - **Labels:** Issue にラベルを適用します。Issue をソートおよびフィルタリングするために使用できるメタデータタグです。

    - **Weight:** 特定の Issue が持つまたはかかる時間、複雑さ、または価値を測定するためのウェイト値を Issue に適用します。

    - **Due date:** Issue に期限を設定し、機能が時間通りに出荷されるようにします。

    - **Iteration:** Issue をイテレーションに関連付けて、一定期間にわたって追跡します。これにより、チームは速度と変動性のメトリクスを追跡できます。

1. **Create issue** ボタンをクリックします。

1. Issue のメタデータペインで **Labels** フィールドの横の **Edit** をクリックします。

1. **Status::Open** ラベルを選択し、メタデータペインの外をクリックして Issue にラベルを適用します。

1. 前の 2 つのステップを繰り返して、**Priority::Medium** と **Dev** ラベルを Issue に適用します。

1. 左ペインの **Plan > Issues** をクリックします。先ほど作成した Issue がラベルとともに一覧に表示されます。

1. Issue 一覧ページの右上の **New issue** をクリックして 2 つ目の Issue を作成します。

1. **Title** セクションに `Backend services` と入力します。

1. **Description** セクションに以下を貼り付けます。

    ```markdown
    - Create DB
    - Create service infrastructure
    - Write documentation
    ```

1. **Assignees** ドロップダウンを使用して、ドロップダウンをクリックしてから自分のユーザー名をクリックし、自分自身を Issue に割り当てます。

1. **Create issue** ボタンをクリックします。

1. **Backend services** Issue に以下のラベルを適用します。ラベルをクリックしてから、メタデータペインの外をクリックしてラベルを適用してください: **Dev**、**Status::Open**、**Priority::High**。

1. 左ペインの **Plan > Issues** をクリックして、両方の Issue をラベルとともに確認します。

1. Issue 一覧ページの右上の **New issue** をクリックして 3 つ目の Issue を作成します。

1. **Title** セクションに `Frontend services` と入力します。

1. **Description** セクションに以下を貼り付けます。

    ```markdown
    - UX design
    - Integration
    - Write documentation
    ```

1. **Assignees** ドロップダウンを使用して、ドロップダウンをクリックしてから自分のユーザー名をクリックし、自分自身を Issue に割り当てます。

1. **Create issue** をクリックします。

1. **Frontend services** に以下のラベルを適用します。ラベルをクリックしてから、メタデータペインの外をクリックしてラベルを適用してください: **Dev**、**Status::WIP**、**Priority::High**。

1. 左ペインの **Plan > Issues** をクリックして、3 つすべての Issue をラベルとともに確認します。

## 変更のご提案

変更を提案したい場合は、マージリクエストを使用して送信してください。
