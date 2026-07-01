---
title: "GitLab Fundamentals - ハンズオンラボ: エピックと Issue ボードを使ったプロジェクト管理"
description: "このハンズオンガイドでは、GitLab でエピックと Issue ボードを操作するプロセスを説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandsonlab2/
upstream_sha: 4253b2ab72b0791916a54411ca71a25276e128bd
translated_at: "2026-07-02T06:06:16+09:00"
translator: codex
stale: false
lastmod: 2026-06-26T10:02:20-04:00
---

> 完了目安時間: 15 分

## 目標

このラボの目的は、エピックや Issue ボードを含む GitLab で利用可能なさまざまな計画機能の概要を把握することです。

## タスク A. エピックを定義する

エピックはグループレベルで作成され、プロジェクトの大きな作業のセットを定義します。エピックを作成するには:

1. **QA** グループに移動します。

1. 左サイドバーで **Plan > Work Items** を選択します。

1. **New item** を選択します。

1. **Type** フィールドが **Epic** に設定されていることを確認します。

1. タイトルに `My first epic` と入力します。

1. 好みの説明を入力して **Create epic** を選択します。

1. `My first epic` を選択します。

このビューでは、エピックの詳細が表示されます。Issue と同様に、エピックには子アイテムとリンクされたアイテム、さらにエピックに関連するアクティビティを含めることができます。右サイドバーには、ラベル、ヘルスステータス、親、タイムトラッキングなど、エピックのメタデータがあります。

## タスク B. マイルストーンを定義する

マイルストーンは、固定期間にわたって完了する作業のセットを表します。マイルストーンにはエピックと Issue の両方を含めることができます。マイルストーンを作成するには:

1. `QA` グループに移動します。

1. 左サイドバーで **Plan > Milestones** を選択します。

1. **New milestone** を選択します。

1. タイトルに `My first milestone` と入力します。

1. 希望する **Start Date** と **Due Date** を入力します。

1. **Description** を入力して **Create milestone** を選択します。

    次に、マイルストーンに Issue を割り当てる必要があります。

1. 左サイドバーで **Plan > Work items** を選択します。

1. `First issue` を選択します。

1. 右サイドバーで **Milestone** の隣の **Edit** を選択します。

1. 結果のドロップダウンから `My first milestone` を選択します。

1. 右サイドバーの `My first milestone` を選択してマイルストーンにリダイレクトされます。

これで、提供したマイルストーンの日付のバーンダウンチャートとバーンアップチャートとともに、マイルストーンに関連するすべての Issue が表示されます。

## タスク C. Issue ボード

Issue とエピックを一箇所で表示するために、Issue ボードとエピックボードを使用できます。開始するには:

1. `QA` グループに移動します。

1. 左サイドバーで **Plan > Issue boards** を選択します。

    > このビューでは、ステータスに関連付けられたすべての Issue が表示されます。

1. 自分に関連付けられた Issue を保存する新しいリストを作成します。右側の **New List** ボタンをクリックします。

1. **Assignee** を選択して、ユーザー名を選択します。

1. **Add to board** を選択します。

1. 以前に作成した Issue が「Open」リストに表示されます。Issue を「Open」リストからユーザー名のリストにクリックしてドラッグします。

1. Issue をクリックします。自動的に自分が Issue に割り当てられていることが確認できます。

要件に応じて異なる情報セットを表示するように Issue ボードをさらにカスタマイズすることができます。Issue ボードの詳細については、[ドキュメント](https://docs.gitlab.com/ee/user/project/issue_board.html)を参照してください。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandson)を確認できます。

## ご意見・ご提案

ラボへの変更を希望する場合は、マージリクエスト経由で変更を送信してください。
