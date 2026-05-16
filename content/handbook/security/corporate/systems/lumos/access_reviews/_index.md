---
title: Lumos アクセスレビューガイド
upstream_path: /handbook/security/corporate/systems/lumos/access_reviews/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-07T23:50:04+00:00"
---

## 概要

Lumos は私たちのアクセスレビュープラットフォームです。ユーザーアクセスレビューは、GitLab のシステムが適切、安全、コンプライアンスに沿った方法でアクセスされていることを確認する上で極めて重要です。アプリの DRI、技術オーナー、ビジネスオーナーの場合、Lumos からアクセスレビュータスクが割り当てられる可能性があります。アプリを管理するチームメンバーの直属のマネージャーである場合、管理対象者に対するユーザーアクセスレビューの割り当てを受け取る場合もあります。

Lumos での作業を始める前に、[アクセスレビュー手順](/handbook/security/security-assurance/security-compliance/access-reviews/)をお読みください。アクセスレビューが割り当てられると、Lumos はアクセスレビューのタイトルにアプリ名とレビュー対象の権限を含めて、メールと Slack で連絡します。

## アクセスレビューのウォークスルー

レビューが割り当てられると、Slack またはメールで通知を受け取ります。

1. Lumos の[アクセスレビュー](https://app.lumosidentity.com/access_reviews)に移動します

    <img src="/images/security/corporate/systems/lumos/access_reviews/access_review_1.png" alt="通知の Review Accounts をクリック" width="600"/><br>

2. アプリの「Continue Review」をクリックしてレビューを開始します

    <img src="/images/security/corporate/systems/lumos/access_reviews/access_review_2.png" alt="アプリリストで右端の Continue review をクリック" width="600"/><br>

3. 自分に割り当てられたラインアイテムをレビューします

    <img src="/images/security/corporate/systems/lumos/access_reviews/access_review_3.png" alt="自分に割り当てられたユーザーをレビュー" width="600"/><br>

4. 自分に割り当てられたアカウントを承認または却下します

    <img src="/images/security/corporate/systems/lumos/access_reviews/access_review_4.png" alt="一括で承認、却下、またはアクセスを変更" width="600"/><br>

- 任意のラインアイテムにメモを追加して、監査人にコンテキストを追加します

    <img src="/images/security/corporate/systems/lumos/access_reviews/access_review_note.png" alt="+ をクリックしてメモを追加" width="600"/><br>

## アクセスレビューメッセージテンプレート

アクセスレビュー管理者は、不慣れなレビュアーがアクセスレビューを実施する方法を支援するため、アクセスレビューを開始する際にメッセージを含める必要があります。以下のテンプレートを使用してください。

```md
You have been assigned to perform a user access review for a system at GitLab. Please see the instructions listed below.

App name: <insert app name>

https://handbook.gitlab.com/handbook/security/corporate/systems/lumos/access_reviews/
```

## 助けが必要ですか? 質問がありますか?

Slack の #user-access-reviews チャンネルにご連絡ください。

## <i class="fas fa-book" style="color:rgb(110,73,203)" aria-hidden="true"></i> 参考資料

- [アクセスレビュー手順](/handbook/security/security-assurance/security-compliance/access-reviews/)
- [識別と認証のセキュリティコントロール](/handbook/security/security-assurance/security-compliance/sec-controls/)
- [アクセスリクエストハンドブックページ](/handbook/security/corporate/end-user-services/access-requests/access-requests/)
- [アクセス管理ポリシー](/handbook/security/security-and-technology-policies/access-management-policy/)
