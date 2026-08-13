---
title: "GitLab Compliance - ハンズオンラボ: スキャン実行ポリシー"
description: "このハンズオンガイドでは、プロジェクトでスキャン実行ポリシーを有効化して使用する方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandsonlab2/
upstream_sha: d8fb317567e8e271f91f602d97d453ad1a69a00a
translated_at: "2026-08-14T00:53:30+09:00"
translator: claude
stale: false
lastmod: "2026-08-13T07:16:24-04:00"
---

> 完了までの推定時間: 15 分

## 目標

スキャン実行ポリシーを使用すると、プロジェクトやグループに対して一貫した方法でセキュリティスキャンを実行できます。このラボでは、プロジェクトにスキャン実行ポリシーを追加する方法を学びます。

## タスク A. スキャン実行ポリシーの作成

1. 左サイドバーで **Secure > Policies** を選択します。

1. **New policy** を選択します。

1. **Scan execution policy** の下にある **Select policy** を選択します。

1. 名前に `run scan` と入力します。

1. 説明フィールドに関連する説明を追加します。

1. "Configuration Type" で "Template" から "Custom" に切り替えます。

1. **Actions** では、**Secret Detection** スキャンを実行するように設定します。すべてのアクション設定はデフォルトのままにします。

1. **Conditions** セクションで、**All pipeline sources** を使用して **No exceptions** で **all branches** に対して **Triggers** を設定します。

1. **Configure new project with the new policy** を選択します。

1. **Merge** を選択します。

## タスク B. スキャン実行ポリシーのテスト

1. `Compliance Project` プロジェクトに戻ります。

1. **+ > New file** を選択します。

1. **Filename** とファイルの内容に任意のものを入力します。

1. **Commit changes** を選択します。

1. 任意のコミットメッセージを入力するか、デフォルトのままにします。

1. "Branch" オプションを **Commit to a new branch** に設定します。

1. 任意のブランチ名を入力するか、デフォルトのままにして、**Create a merge request for the change** オプションが選択されていることを確認します。

1. **Commit changes** を選択します。

1. 表示されるマージリクエスト作成ページで、下にスクロールして **Create merge request** を選択します。

1. マージリクエストのパイプラインを確認します。Secret Detection スキャンジョブが追加されていることを確認します。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandson)を参照できます。

## ご提案はありますか?

このラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
