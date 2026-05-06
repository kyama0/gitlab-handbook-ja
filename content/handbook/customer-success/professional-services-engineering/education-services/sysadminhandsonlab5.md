---
title: "GitLab システム管理 - ハンズオンラボ: サインアップ制限の実装"
description: "このハンズオンガイドでは、GitLab でサインアップ制限を有効にする手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/sysadminhandsonlab5/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

> 完了までの目安時間: 30 分

## 目的

このラボでは、サインアップ時に確認メールを送信するオプションを有効にし、サインアップを自社ドメインからのみ許可するようにすることで、インスタンスのセキュリティを向上させます。詳細については、
[サインアップ制限のドキュメント](https://docs.gitlab.com/administration/settings/sign_up_restrictions/) を参照してください。

### タスク A. サインアップ制限を追加する

1. ラボ 1 で設定した `root` ユーザーとパスワードを使って、GitLab Web インスタンスにログインします。

1. メイン画面のサイドバーの左下隅にある **Admin Area** をクリックします。

1. 左側のナビゲーションペインの一番下で **Settings > General** をクリックします。

1. **Sign-up restrictions** で **Expand** をクリックします。

1. **Email confirmation settings** で、**Hard** の隣のラジオボタンをクリックします。

1. 次に、サインアップが自社ドメインからのみ許可されることを確認します。**Allowed domains for sign-ups** に自社のドメイン名を入力し、<kbd>Enter<kbd> を押します。

1. セクションの末尾までスクロールして、**Save Changes** をクリックします。

## ラボガイド完了

このラボ演習は完了しました。本コースのその他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/sysadminhandson)を確認できます。

### ご提案はありますか？

GitLab システム管理基礎ハンズオンガイドへの変更を提案したい場合は、マージリクエストでお寄せください。
