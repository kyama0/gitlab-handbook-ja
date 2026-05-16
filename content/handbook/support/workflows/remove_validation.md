---
title: 検証の解除
description: "GitLab.com ユーザーアカウントの検証を解除するワークフロー"
category: GitLab.com
subcategory: Accounts
upstream_path: /handbook/support/workflows/remove_validation/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T02:00:00Z"
translator: claude
stale: false
lastmod: "2025-02-04T16:44:03+00:00"
---

## 概要

このワークフローでは、GitLab.com ユーザーアカウントの検証を解除する方法について説明します。[2021 年 5 月 17 日以降に作成された](https://about.gitlab.com/blog/2021/05/17/prevent-crypto-mining-abuse/)無料ユーザーは、GitLab.com で共有 Runner を利用するためにクレジットカードまたはデビットカードによる検証が必要となります。

> クレジットカード検証は customers.gitlab.com アカウントや Zuora サブスクリプションには*紐付けられていません*。

## ワークフロー

検証の解除によって、お客様の GitLab.com アカウントが、改めてクレジットカードまたはデビットカードを提供して検証を行うまで共有 Runner を利用できなくなることを、必ずお客様に認識していただいてください。

1. [アカウント所有権検証ワークフロー](/handbook/support/workflows/account_verification/#workflow)を完了させ、アカウント所有者を確認し、対応を進める許可を得たことを確認します。[標準データ分類定義](https://internal.gitlab.com/handbook/support/#data-classification)を使用してください。これらのケースではピアレビューは必須ではありません。
1. 管理者アカウントでサインインし、お客様のユーザーアカウントを特定します。
1. アカウントタブで `Edit` をクリックします。
    1. 「Validate user account」のチェックボックスを外します。
    1. [Admin Note](/handbook/support/workflows/admin_note/) を追加します。
    1. 変更を保存します。
1. ユーザーに以下のメッセージを送信します:

```text
Hi,

We have now processed this request. Your credit card validation has been removed and your credit card details have been deleted from your GitLab.com account.

Regards,
```
