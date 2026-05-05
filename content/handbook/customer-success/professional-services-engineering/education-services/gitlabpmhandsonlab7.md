---
title: "GitLab アジャイルポートフォリオ管理 - ハンズオンラボ: Issue ボードを作成・カスタマイズする"
description: "このハンズオンガイドでは、Issue ボードを作成・管理する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitlabpmhandsonlab7/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:14:42Z
translator: claude
stale: false
---
> 完了までの推定時間: 30 分

## 目標

ワークフローの計画、整理、可視化を支援するために Issue ボードを活用できます。

Issue ボードは、機能やプロダクトリリースのワークフローを計画・整理・可視化するためのソフトウェアプロジェクト管理ツールです。カンバンボードまたはスクラムボードとして使用できます。Issue ボードはさまざまなプロジェクト管理フレームワークのニーズに合わせて設定できます。

詳細については[ドキュメント](https://docs.gitlab.com/ee/user/project/issue_board.html)を参照してください。

このラボでは、シンプルな Issue ボードを作成する方法を学びます。

## タスク A. プロジェクトレベルの Issue ボードを表示・カスタマイズする

1. **Software > Core** サブグループの **Family Budget Calculator** プロジェクトに移動します。

2. 左ペインの **Plan > Issue boards** をクリックします。

    > デフォルトの **Development** ボードには、デフォルトで 2 つのリストのみが含まれています: **Open** ステータスの Issue と **Closed** ステータスの Issue です。このラボでは、Issue ラベルを使用するリストを追加します。

3. 右上の **New list** をクリックします。

4. リスト設定ペインの Scope セクションで **Label** ラジオボタンが選択されていることを確認します。他のメタデータに基づいたリストも作成できます。

    - **Assignee:** Issue を直接担当する人。

    - **Milestone:** Issue のリリース / 期日。

    - **Iteration:** Issue の速度。

5. **Value** ドロップダウンを開き、**Status::WIP** を選択します。

6. **Add to board** をクリックします。**Status::WIP** のタグが付いたすべての Issue が新しいリストに表示されます。

7. プロジェクトボードにもう 1 つカスタムリストを追加します: 右上の **New list** をクリックします。

8. 新しいリストは Issue ラベルでスコープを設定します。リスト設定ペインの Scope セクションで **Label** ラジオボタンが選択されていることを確認します。

9. **Value** ドロップダウンを開き、**Status::Done** を選択します。

10. **Add to board** をクリックします。

    > **Development** ボードには、カスタムリスト **Status::WIP** と **Status::Done** がデフォルトリストの **Open** と **Closed** とともに表示されます。

11. **Open** リストにある **Create service infrastructure** Issue に注目してください。マウスを使って **Create service infrastructure** Issue を **Status::WIP** リストにドラッグします。

12. Issue タイトルを直接クリックして **Create service infrastructure** Issue カードをクリックします。新しいリストにドラッグしたときに **Status::WIP** ラベルが自動的に適用されたことを確認します。

13. Issue の詳細ページで、メタデータペインの **Labels** の横にある **Edit** ボタンをクリックします。

14. **Status::Done** ラベルを選択し、メタデータペインの外をクリックしてラベルを適用します。

15. 左ペインを使用して **Plan > Issue boards** に戻ります。

    > **Create service infrastructure** Issue が **Status::Done** リストに表示されるはずです。

## タスク B. グループレベルの Issue ボードを管理する

> ボードはグループレベルでも表示・管理できます。

1. ページ上部のパンくずリストを使用して、トップレベルの **Awesome Inc** グループに移動します。

1. 左サイドバーの **Plan > Issue boards** に移動します。

    > グループレベルのボードは、プロジェクトレベルのボードと同様のデフォルトボードを持ちます。このグループレベルの Issue ボードには、グループのサブグループとプロジェクト全体のすべての Issue が表示されます。

1. ページ上部の検索バーのすぐ右にあるオプションのトグルをクリックします。**Epic swimlanes** をオンにします。ボードのビューが更新され、エピックでグループ化されたリストのスイムレーン表示が表示されます。

1. ページ下部までスクロールして、**Issues with no epic assigned** を展開します。

1. **Identify tuning parameters to reduce performance bottlenecks** Issue をドラッグして **Backend services** エピックに移動します。

1. **Backend services** 見出しにカーソルを合わせます。表示される詳細ボックスから **Go to epic** リンクをクリックします。

1. **Identify tuning parameters to reduce performance bottlenecks** Issue が **Backend services** エピックの一部であることを確認します。

## タスク C. 新しい Issue ボードを作成する

1. **Plan > Issue boards** に移動します。

1. ページ上部の **Development** ドロップダウンをクリックして **Switch board** メニューを開きます。

1. **Create new board** をクリックします。

1. ボードのタイトルを `<YOUR NAME>` にします。

1. **Show the Open list** と **Show the Closed list** の横のチェックボックスを**_チェックを外します_**。これによりカスタムボードからデフォルトリストが削除されます。

1. **Scope** の横の **Expand** ボタンをクリックします。

1. **Assignee** の横の **Edit** をクリックして自分自身を選択します。

1. **Create board** をクリックします。

1. 右上の **New list** をクリックします。

1. リスト設定ペインの Scope セクションで **Label** ラジオボタンが選択されていることを確認します。

1. **Value** ドロップダウンを開き、**Priority::High** を選択します。

1. **Add to board** をクリックします。

1. 右上の **New list** をクリックします。

1. リスト設定ペインの Scope セクションで **Label** ラジオボタンが選択されていることを確認します。

1. **Value** ドロップダウンを開き、**Status::WIP** を選択します。

1. **Add to board** をクリックします。

1. 右上の **New list** をクリックします。

1. リスト設定ペインの Scope セクションで **Milestone** ラジオボタンをクリックします。

1. **Value** ドロップダウンを開き、**Backend services deployed** を選択します。

1. **Add to board** をクリックします。

1. 新しいボードが含まれているブラウザタブをリフレッシュします。

## タスク D: ボード用の新しい Issue を作成する

1. **Priority::High** リストで **(+)** アイコンをクリックして新しい高優先度の Issue を作成します。

1. Issue のタイトルを `Update family budget app personas` にします。

1. Issue が属するプロジェクトとして **Family Budget Calculator** を選択します。

1. **Create issue** をクリックします。

1. ページの右側に Issue の詳細ペインが表示されます。まだ自分自身に割り当てられていない場合は、Issue を自分自身に割り当てます。Issue に追加の **Status::Open** ラベルを追加します。

1. Issue の詳細ペインを閉じるには右上の **X** をクリックします。

1. ページ右上の対角矢印をクリックして _Focus モード_ に入ります。GitLab のナビゲーション UI の残りの部分が非表示になり、ボードの Issue に集中できるようになります。

1. 対角矢印をもう一度クリックして Focus モードを終了します。

## 変更のご提案

変更を提案したい場合は、マージリクエストを使用して送信してください。
