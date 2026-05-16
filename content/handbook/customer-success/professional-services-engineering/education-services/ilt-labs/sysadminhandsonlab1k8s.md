---
title: "GitLab システム管理者 - ハンズオンラボ: Kubernetes 管理ダッシュボードの探索"
description: "このハンズオンガイドでは、Kubernetes 上の GitLab インストールの管理ダッシュボードを紹介します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandsonlab1k8s/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-23T12:38:59+01:00"
---

## 目的

このラボでは、GitLab 管理ダッシュボードに慣れ親しんでいきます。管理ダッシュボードは、管理者が GitLab インスタンスを管理するために使用する主要なエリアの一つです。

## タスク A. 管理ダッシュボードへのアクセス

1. GitLab インスタンスに移動します。

1. root 管理者ユーザーとしてインスタンスに認証します。

1. 左サイドバーで **Admin** を選択します。

1. 管理エリアのさまざまなセクションを時間をかけて確認してください。

## タスク B. インスタンスのサインアップとサインインの設定

GitLab インスタンスのセキュリティを高めるために、ユーザーのサインアップおよびインスタンスへの認証方法をカスタマイズできます。このタスクでは、二要素認証と Admin Mode を有効にします。Admin Mode は、GitLab インスタンスの管理タスクに追加の認証を導入します。

1. GitLab インスタンスの管理エリアに移動します。

1. 左サイドバーで **Settings > General** を選択します。

1. **Sign-up restrictions** の隣にある **Expand** を選択します。

1. **Allowed domains for sign-ups** に自社のドメインを入力します。これにより、自社のユーザーのみがアカウントを登録できるようになります。

1. **Save** を選択します。

1. **Sign-in restrictions** の隣にある **Expand** を選択します。

1. **Enforce two-factor authentication** にチェックを入れます。

1. **Enable Admin Mode** にチェックを入れます。

1. **Save** を選択します。

1. 二要素認証ページに移動したら、**Configure Later** を選択します。

1. Admin Mode に再入するには、左サイドバーのプロフィール画像を選択します。表示されるメニューで **Enter Admin Mode** を選択します。

1. プロンプトに Admin パスワードを入力し、**Enter admin mode** を選択します。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
