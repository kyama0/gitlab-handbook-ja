---
title: "GitLab Compliance - ハンズオンラボ: コンプライアンスセンターとフレームワーク"
description: "このハンズオンガイドでは、コンプライアンスセンターのイベントを作成して表示する方法をデモンストレーションします。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandsonlab6/
upstream_sha: d8fb317567e8e271f91f602d97d453ad1a69a00a
translated_at: "2026-08-14T00:53:30+09:00"
translator: claude
stale: false
lastmod: "2026-08-13T07:16:24-04:00"
---

> 完了までの推定時間: 15 分

## 目標

学習者はコンプライアンスセンターに表示される GitLab でのアクションをいくつか実行し、フレームワークがどのように機能するかを確認します。

## タスク A. コンプライアンスセンターイベントの作成

1. `Compliance Project` プロジェクトに移動します。

1. 左サイドバーで **Secure > Compliance Center** を選択します。

      > このセクションでは、プロジェクト内で 3 件の失敗したチェックが表示されます。**Status** が `Fail` の場合、**More information** 列に `View details (fix available)` が表示されます。このセクションに表示される情報を確認しましょう。

1. コンプライアンスセンターレポートの `At least one non-author approval` 行にある `View details (fix available)` を選択します。

1. このセクションに記載されている詳細を確認します。

1. 詳細パネルを閉じます。

このコースのラボを通じて、これらのコンプライアンス上の問題をそれぞれ修正する方法を確認します。

## タスク B. コンプライアンスセンター違反の作成

このタスクでは、コンプライアンスセンターの違反につながるアクションをプロジェクトで実行します。

1. 左サイドバーで **Code > Repository** を選択します。

1. **+ > New file** を選択します。

1. ファイル名に `main.py` と入力します。

1. ファイルに以下の内容を追加します:

      ```python
      print("Start compliance project")
      ```

1. **Commit Message** の下にある **Target Branch** フィールドに `new-main` と入力します。

1. **Start a new merge request with these changes** が選択されていることを確認します。

1. **Commit changes** を選択します。

1. 表示されたマージリクエストで、**Assignees** セクションの **Assign to me** を選択します。

1. **Create merge request** を選択します。

1. **Merge** を選択します。

1. マージリクエストが完了したら、**Secure > Compliance Center** を選択します。

1. **Violations** タブを選択します。

1. **Less than 2 approvers** というラベルの付いた違反を確認します。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandson)を参照できます。

## ご提案はありますか?

このラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
