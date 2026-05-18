---
title: "GitLab アジャイルポートフォリオ管理 - ハンズオンラボ: GitLab で組織構造を作成する"
description: "このハンズオンガイドでは、GitLab でグループ、プロジェクト、プロジェクトメンバーを作成する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabpmhandsonlab2/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:14:42Z
translator: claude
stale: false
lastmod: "2025-01-06T21:04:53+00:00"
---

> 完了までの推定時間: 30 分

## 目標

GitLab では、プロジェクトとサブグループを使用することでコードベースを整理し、プロジェクトを効率的に管理できます。このラボでは、組織のサブグループを作成する方法、プロジェクトを作成する方法、ユーザーをプロジェクトに追加する方法を学びます。

**組織ネームスペース:** アクセス権とグループ作成権限を持つ任意の親グループの下にサブグループを作成できます。組織では、グループの構造や命名方法についてのベストプラクティスをドキュメント化しておくべきです。不明な場合は、別の[グループのメンバー](https://docs.gitlab.com/ee/user/project/members/#display-direct-members)を確認し、`Owner` ロールを持つユーザーに相談してください。

**個人ネームスペース:** 個人ネームスペース（例: `https://gitlab.com/exampleuser/example-project`）に_プロジェクト_を作成することはできますが、個人ネームスペースに_グループ_を作成することはできません。

**セキュリティに関する注意:** 親グループや祖先グループへのアクセス権を持つユーザーは、このグループへの権限を継承します。トレーニング環境では、各受講者は自分のサブグループへの直接メンバーアクセスのみを持ち、親グループへの継承されたメンバーアクセスは持ちません。詳細については[サブグループメンバーシップのドキュメント](https://docs.gitlab.com/ee/user/group/subgroups/index.html#subgroup-membership)を参照してください。

> **ヒント:** グループとサブグループの複数レベルのコレクションを作成する際、パンくずリストはサブグループ間を移動するのに便利な方法です。

## 前提条件

1. 招待コード / バウチャーコードをすでに利用済みであること。

1. 既存のユーザー名で https://gitlab.com にサインイン済みであること。

1. `My Group` ボタンをクリックして、URL が `https://gitlab.com/gitlab-learn-labs/environments/session-{id}/iu{######}` となる新しいブラウザタブを開いていること。グループのタイトルが `My Test Group - iu{######}` と表示されていることを確認してください。

## タスク A. GitLab 自身のソースコードのグループとプロジェクトを確認する

1. _新しいブラウザタブで_ [https://gitlab.com/gitlab-org](https://gitlab.com/gitlab-org) を開きます。このグループには GitLab の製品ソースコードがすべて含まれており、会社のバリューに基づいてほぼオープンソース・透明性を持って公開されています。

2. グループとプロジェクトの一覧から、**Frontend** サブグループのリンク名をクリックします。2 ページ目にある場合は、スクロールするかページネーションを使って探す必要があるかもしれません。

3. **Frontend** サブグループ内で、このグループに属するプロジェクトとサブグループを確認できます。少し時間をとってこれらのサブグループとプロジェクトを探索してみましょう。

## タスク B. 組織のサブグループを作成する

1. _ラボ環境タブで_、自分の **My Test Group** グループにいることを確認します。**My Test Group** グループにいない場合（つまり `https://gitlab.com/gitlab-learn-labs` のスプラッシュページにいる場合）、`https://gitlab.com/gitlab-learn-labs/environments/session-{id}/iu{######}` に移動し、`{id}` は使用した招待コードに、`iu{######}` はユーザー名に置き換えてください。

1. 右上の **New Subgroup** ボタンをクリックします。

1. **Subgroup name** フィールドに `Awesome Inc` と入力します。

1. **Subgroup URL** は、このグループが作成されるネームスペース階層を示します。

   - **このクラスでは Subgroup URL を変更しないでください。これらのステップでは、トップレベルの組織グループとなる `https://gitlab.com/gitlab-learn-labs/...` の下に常にプロジェクトを作成します。**

1. **Subgroup slug** は名前に基づいて自動入力されます。`awesome-inc` を `awesome` に変更してください。

   - **ベストプラクティス:** このスラッグは**プロジェクトパス**として表示され、URL パスと `git clone` を実行したときのフォルダ名の両方に使われます。適切な場合は短縮することがベストプラクティスです。

1. **Visibility level** が `Private` になっていることを確認します。

   > プライベートなサブグループにすることで、グループとそのプロジェクトはメンバーのみが表示できるようになります。公開レベルの詳細については[ドキュメント](https://docs.gitlab.com/ee/user/public_access.html)を参照してください。

1. **Create subgroup** ボタンをクリックします。
   - `Awesome Inc` というタイトルのグループが表示され、ブラウザの URL が `https://gitlab.com/gitlab-learn-labs/environments/session-{id}/iu{######}/awesome` というパスになります。

1. **おめでとうございます！** 最初のグループを作成しました。次は自分でグループを追加してみましょう。**Awesome Inc** グループ内に、各チームのサブグループを作成してください。
   - **Software**
     - **Core**（これは `Software` のサブグループで、`Awesome Inc` の直下ではありません）
     - **Android**
     - **iOS**
   - **Infrastructure**
   - **Security**

## タスク C. 新しいプロジェクトを作成する

1. 先ほど作成した **Awesome Inc > Software > Core** サブグループに移動します。

1. **Create new project** タイルをクリックします。

1. **Create blank project** タイルをクリックします。

1. **Project name** フィールドに `Family Budget Calculator` と入力します。

1. プロジェクト URL に `/awesome/software/core` が含まれていることを確認します。これはプロジェクトが `core` サブグループ内にあることを示しています。

1. プロジェクトスラッグはデフォルト値 `family-budget-calculator` のままにしておきます。

1. **Visibility Level** を private に設定します。

   > 詳細については[公開設定のドキュメント](https://docs.gitlab.com/ee/user/public_access.html)を参照してください。`Private` の公開設定を持つ親グループの設定は、すべての子グループとプロジェクトに継承され、変更できないことに注意してください。
   >
   > **トレーニング環境の制限:** トレーニング環境では、グループはプライベートな親グループの一部となっているため、グループやプロジェクトを `Public` に設定することはできません。パブリックプロジェクトを使って作業をテストするには、個人ネームスペースにプロジェクトを作成してください。

1. **Initialize repository with a README** チェックボックスを有効にします。

1. **Enable Static Application Security Testing (SAST)** のチェックは外したままにします。

1. **Create project** を選択します。

## タスク D. プロジェクトメンバーを追加してロールを設定する

1. **Family Budget Calculator** プロジェクトで、左サイドバーの **Manage > Members** をクリックします。

1. 右上の **Invite members** ボタンをクリックします。

1. 招待するユーザーとして講師を検索・選択します。セルフペースコースを受講中の場合は、自分のメールアドレスを入力してください。

1. **Select a role** ドロップダウンで **Developer** を選択します。セルフペースコースを受講中の場合は **Owner** を選択してください。

   > 各ロールレベルの詳細については[権限とロールのドキュメント](https://docs.gitlab.com/ee/user/permissions.html)を参照してください。

1. **Invite** ボタンをクリックします。

1. ページを更新して、ユーザーが _Direct Member_ として招待されたことを確認します。

   > ユーザーはこのプロジェクトが存在する親グループ階層から権限を継承します。ユーザーが親グループですでに高いレベルのアクセス権（例: `Maintainer`）を持っている場合、そのアクセスレベルはプロジェクトレベルで設定された低い権限（例: `Developer`）より優先されます。

## 変更のご提案

変更を提案したい場合は、マージリクエストを使用して送信してください。
