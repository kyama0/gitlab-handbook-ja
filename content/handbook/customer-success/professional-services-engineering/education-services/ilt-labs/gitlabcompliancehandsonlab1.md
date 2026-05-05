---
title: "GitLab Compliance - ハンズオンラボ: 権限の分離"
description: "このハンズオンガイドでは、権限の分離をデモンストレーションします"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandsonlab1/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 10分

## 目標

学習者は GitLab のプロジェクトとグループにおける各種ロールとユーザー権限を確認します。

## タスク A. 権限の分離の概要

1. 招待コードを引き換えた後、提供されたユーザー名とパスワードでログインします。

1. **Create a project** を選択します。

1. **Create blank project** を選択します。

1. **Project name** に `Compliance project` と入力します。

1. その他はすべてデフォルトのままにして **Create project** を選択します。

1. ページ上部のパンくずリストを使用して、`GROUP` で始まるオプションを選択し、ILT インスタンスグループに移動します。

1. 左サイドバーで **Manage > Members** を選択します。

1. グループ内の各メンバーの権限を確認します。

1. あなたのユーザーはグループレベルとプロジェクトレベルの両方でオーナーシップを持っているため、グループレベルとプロジェクトレベルの両方でポリシーを管理できます。

1. これを確認するために、左サイドバーで **Secure > Policies** を選択します。

1. 右上にグループで新しいポリシーを作成するオプションが表示されます。また、プロジェクトポリシーを編集するオプションも表示されます。

1. パンくずリストで、`Session` で始まるセッショングループを選択します。

1. このレベルではこのグループに適切な権限がないため、ポリシーを作成または管理する機能がないことを確認します。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストで変更内容を送信してください。
