---
title: "GitLab Fundamentals - ハンズオンラボ: リポジトリ管理とブランチ"
description: "このハンズオンガイドでは、GitLab でのコードリポジトリの管理方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandsonlab3/
upstream_sha: 4253b2ab72b0791916a54411ca71a25276e128bd
translated_at: "2026-07-02T06:06:16+09:00"
translator: claude
stale: false
lastmod: 2026-06-26T10:02:20-04:00
---

> 完了目安時間: 15 分

## 目標

このラボでは、コードを整理するためのリポジトリの作成方法と、さまざまなユースケースに合わせてリポジトリを設定する方法を探求します。

## タスク A. プロジェクトを設定する

プロジェクトにいるとき、左サイドバーにいくつかの新しいオプションが表示されます。

1. **Cool App QA** プロジェクトに移動します。

1. 左サイドバーで **Settings** を選択します。結果のドロップダウンから **General** を選択します。

1. General で利用可能なさまざまな設定を確認します。ここではプロジェクトの可視性、有効化されている機能、およびプロジェクトの移動や削除などの高度なオプションを切り替えることができます。

1. 左サイドバーの **Settings** の下で **Repository** を選択します。このセクションにはプロジェクトのコードリポジトリの設定が含まれています。

    ほとんどの設定では、リポジトリのいくつかの設定を切り替えることになります。まず、プロジェクトに一貫したデフォルトブランチがあることを確認します。このブランチはプロジェクトでマージリクエストが作成される対象のブランチになります。このメインブランチでは、保護されており直接プッシュできないことを確認します。これらのオプションを設定する方法を見てみましょう。

1. **Repository Settings** で **Branch defaults** を選択してこのセクションを展開します。

    > ここでは `main` がデフォルトブランチであることがわかります。

1. 次に **Branch rules** を選択します。

1. `main` のルールの隣にある **View details** を選択します。

1. ここで利用可能な設定を探索します。デフォルトで `main` ブランチに対して `Allow force push` が無効になっています。また、`Maintainer` ロールを持つユーザーが `main` にプッシュおよびマージできることも確認できます。これは、その個人がマージリクエストを使わずに main ブランチへコミットできることを意味します。理想的には、誰も `main` に直接プッシュできないようにしたいです。

1. main へのプッシュを防ぐには、**Allowed to push and merge** セクションで **Edit** を選択します。

1. **No one** チェックボックスをオンにします。**Save changes** を選択します。

この設定を変更することで、誰も `main` に直接プッシュできなくなります。これをテストして結果を確認しましょう。

## タスク B. main へのプッシュをテストする

1. 左サイドバーで **Code > Repository** を選択します。

1. リポジトリセクションの上部で **+ > New file** を選択します。

1. **Filename** に `test.txt` と入力します。

1. ファイルの内容に任意のテキストを入力します。

1. **Commit changes** を選択します。

1. **New branch** セクションに「You don't have permission to commit to `main`」と書かれたメモがあります。これはブランチルールの直接的な結果です。この変更を受け入れるために、このウィンドウは自動的に使用する新しいブランチを作成しました。

1. **New branch** でブランチ名を `test-commit` に変更します。

1. **Create a merge request for this change** のチェックを外します。

1. **Commit changes** を選択します。

変更をコミットすると、ファイルが表示されます。これにより、プロジェクトに新しいブランチが作成されました。メインブランチに戻るには、現在 **test-commit** と表示されているドロップダウンを選択します。このドロップダウンから **main** を選択してメインブランチに戻ります。

ブランチに変更が加えられたので、次のラボでマージリクエストを使用して変更を main にマージする概念を探求できます。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandson)を確認できます。

## ご意見・ご提案

ラボへの変更を希望する場合は、マージリクエスト経由で変更を送信してください。
