---
title: "GitLab アジャイルポートフォリオ管理 - ハンズオンラボ: 組織の構造化"
description: "このハンズオンガイドでは、GitLab でグループ、プロジェクト、プロジェクトメンバーを作成する方法を学習します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabpmhandsonlab1/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-09T20:42:10+00:00"
---

> 完了までの推定時間: 30分

## 目標

GitLab では、プロジェクトとサブグループがコードベースの整理とプロジェクトの効果的な管理を支援します。このラボでは、組織のサブグループの作成方法、プロジェクトの作成方法、プロジェクトへのユーザーの追加方法を学習します。

**組織のネームスペース:** アクセス権があり、その下にグループを作成する権限がある任意のグループの下にサブグループを作成できます。組織では、グループの構造化や命名方法についてのベストプラクティスを文書化しているはずです。不明な場合は、[グループのメンバー](https://docs.gitlab.com/ee/user/project/members/#display-direct-members)を確認して、`Owner` ロールを持つユーザーの1人に相談してください。

**個人ネームスペース:** 個人ネームスペース（例: `https://gitlab.com/exampleuser/example-project`）に_プロジェクト_を作成することはできますが、個人ネームスペースに_グループ_を作成することはできません。

**セキュリティ警告:** 親または祖父母グループへのアクセス権を持つユーザーは、このグループに対して継承された権限を持ちます。トレーニング環境では、各受講者はサブグループへの直接メンバーアクセスのみを持ち、親グループへの継承されたメンバーアクセスは持ちません。詳細については[サブグループメンバーシップのドキュメント](https://docs.gitlab.com/ee/user/group/subgroups/index.html#subgroup-membership)を参照してください。

> **ヒント:** パンくずリストは、複数レベルのグループとサブグループのコレクションを作成する際にサブグループ間を移動する良い方法です。

## タスク A. GitLab 独自のソースコードのグループとプロジェクトを確認する

1. _新しいブラウザタブで_、[https://gitlab.com/gitlab-org](https://gitlab.com/gitlab-org) に移動してください。このグループには、私たちの会社の価値観に基づいてほとんどがオープンソースで透明性のある GitLab の製品ソースコードがすべて含まれています。

1. グループとプロジェクトの一覧で、**Frontend** サブグループのリンク名をクリックしてください。見つけるためにスクロールダウンまたはページネーションを使用する必要があるかもしれません。

1. **Frontend** サブグループ内で、このグループの一部として存在するすべてのプロジェクトとサブグループを確認できます。しばらくこれらのサブグループとプロジェクトを探索してみましょう。

## タスク B. 組織のサブグループを作成する

1. `ilt.gitlabtraining.cloud` にアクセスして個人のトップレベルグループに移動し、**Groups** をクリックしてください。グループセクションで **Events** の隣にある矢印をクリックし、次に **Session XXXXXXXX apm**（Xはランダムな文字と数字に置き換えられます）の矢印をクリックしてください。**Group YYYYY**（Yはランダムな文字と数字に置き換えられます）というグループがあるはずです。

1. **Group YYYYYY** というタイトルのグループをクリックしてください。そのグループに移動してください。

1. 右上角の **New Subgroup** ボタンをクリックしてください。

1. **Subgroup name** フィールドに `Awesome Inc` と入力してください。

1. **Subgroup URL** は、このグループが作成されるネームスペース階層を示します。

1. **Subgroup slug** は名前に基づいて自動的に入力されます。`awesome-inc` を `awesome` に変更します。

   - **ベストプラクティス:** このスラッグは **プロジェクトパス** として表示されます。つまり、URLパスと `git clone` を実行した際のフォルダ名の両方になります。適切な場合はこれを短縮することがベストプラクティスです。

1. **Visibility level** が `Private` に設定されていることを確認してください。

   > プライベートサブグループにすることで、グループとそのプロジェクトがメンバーのみに表示されるようになります。表示レベルの詳細については[ドキュメント](https://docs.gitlab.com/ee/user/public_access.html)を参照してください。

1. **Create subgroup** ボタンをクリックしてください。
   - `Awesome Inc` というタイトルのグループが表示され、ブラウザのURLが `https://ilt.gitlabtraining.cloud/training-users/session-<INVITATION_CODE>/<USERNAME>/awesome` のパスを反映します。

1. **おめでとうございます!** 最初のグループを作成しました。これで独自の追加グループを作成する準備ができました。**Awesome Inc** グループ内に、この素晴らしい会社の各チームのサブグループを作成します:
   - **Software**
     - **Core**（これは `Awesome Inc` ではなく `Software` のサブグループです）
     - **Android**
     - **iOS**
   - **Infrastructure**
   - **Security**

## タスク C. 新しいプロジェクトを作成する

1. 作成した **Awesome Inc > Software > Core** サブグループに移動してください。

1. **Create project** タイルをクリックしてください。

1. **Create blank project** タイルをクリックしてください。

1. **Project name** フィールドに `Family Budget Calculator` と入力してください。

1. プロジェクトURLに `/awesome/software/core` がパスに表示されていることに注意してください。これはプロジェクトが `core` サブグループにあることを示しています。

1. プロジェクトのスラッグはデフォルト値 `family-budget-calculator` のままにします。

1. **Visibility Level** がプライベートに設定されていることに注意してください。

   > 詳細については[表示設定のドキュメント](https://docs.gitlab.com/ee/user/public_access.html)を参照してください。親グループが `Private` の表示設定の場合、すべての子グループとプロジェクトに継承されるため変更できないことに注意してください。
   >
   > **トレーニング環境の制限:** トレーニング環境では、グループはプライベートな親グループの一部であるため、グループやプロジェクトを `Public` にすることはできません。パブリックプロジェクトの動作をテストするには、個人ネームスペースにプロジェクトを作成してください。

1. **Initialize repository with a README** チェックボックスにチェックが入っていることを確認します（デフォルトでチェック済みです）。

1. **Enable Static Application Security Testing (SAST)** のチェックは外しておきます。

1. **Create project** を選択してください。

## タスク D. プロジェクトメンバーを追加してロールを設定する

1. **Family Budget Calculator** プロジェクトで、左サイドバーの **Manage > Members** をクリックしてください。

1. 右上角の **Invite members** ボタンをクリックしてください。

1. **Username, name or email address** ボックスにメールアドレスを入力し、そのメールアドレスが表示される選択ボックスをクリックしてください。

1. **Select a role** ドロップダウンで **Developer** を選択してください。

   > 各ロールレベルの詳細については[権限とロールのドキュメント](https://docs.gitlab.com/ee/user/permissions.html)を参照してください。

1. **Invite** ボタンをクリックしてください。

1. **Pending Invitations** タブに切り替えて、_Direct Member_ として招待されたユーザーを確認してください。

   > ユーザーはこのプロジェクトが存在する親グループ階層から権限を継承します。ユーザーが親グループですでに高いレベルのアクセス権（例: `Maintainer`）を持っている場合、そのアクセスレベルはプロジェクトレベルで割り当てられた低い権限（例: `Developer`）より優先されます。

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabpmhandson)を確認できます。

## ご提案はありますか?

ラボへの変更を希望する場合は、マージリクエストで変更を送信してください。
