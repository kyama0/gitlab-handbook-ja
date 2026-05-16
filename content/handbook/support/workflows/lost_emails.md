---
title: メールアカウントを失った場合
category: GitLab.com
subcategory: Accounts
description: "アカウント認証用のセキュリティメールをユーザーが受信できなくなったケースに対応するワークフロー"
upstream_path: /handbook/support/workflows/lost_emails/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T14:41:15+00:00"
---

## 概要

このワークフローは、ユーザーがメールアドレスの変更を要求するケースを扱います。例えば、アカウントに紐づくすべてのメールアドレスへのアクセスを失い、アカウントへのアクセスのために [Account email verification](https://docs.gitlab.com/security/email_verification/#accounts-without-two-factor-authentication-2fa) を行うよう求められた場合などです。

## **ステージ 0:** チケットのトリアージ

チケットが以下の正しい設定になっていることを確認します。

- フォームが `SaaS Account`
- カテゴリ（例: `Cannot access account`）
- サブカテゴリ（例: `Need to change my username/email`）
- 影響を受けるメールアドレス

## **ステージ 1:** プロセス

ユーザーは、GitLab.com アカウントに関連付けられたメールアドレスへのアクセスを失ったと報告しているため、
別のメールアドレスを使用してチケットを起票している可能性が高いです。すべてのアカウント関連の活動と同様に、
特に注意し、公開されていないアカウントに関する情報や、アカウント認証が完了していない場合に該当する情報を
共有しないように気をつけてください。

Support がアカウントに対して取れるアクションは、無償ユーザーと有償ユーザーで異なります。ユーザーのティアステータスを
確認するには、Zendesk の User Lookup GitLab Super App を使用してユーザーを検索し、ユーザーのグループメンバーシップを
確認します。ユーザーが Premium グループのメンバーでない場合、無償ユーザーとみなされます。

### 有償ユーザー

有償ユーザーで利用可能なオプションについては、[ユーザーの代わりに変更を加えアクションを取る](/handbook/support/workflows/account_changes)を参照してください。

### 無償ユーザー

GitLab.com アカウント上のすべてのメールアドレスへのアクセスを失った無償ユーザーには、以下のオプションがあります。

1. **セルフサービス（推奨）:** ユーザーがまだログインできる場合は、[プロフィール設定](https://gitlab.com/-/user_settings/profile)でメールアドレスを更新するよう案内します。
1. **サブスクリプションの購入:** 無償ユーザーは GitLab サブスクリプションを購入することで、顧客アカウント復旧の支援のための優先サポートにアクセスできます。ただし、それでも[アカウント認証チャレンジ質問](https://internal.gitlab.com/handbook/support/#account-verification-challenge-questions)に合格する必要があります。

どちらのオプションも該当しない場合、Zendesk マクロ `Support::SaaS::GitLab.com::Email::Free user verification code` を適用し、チケットを `Solved` として送信します。これによりチケットがクローズされ、ユーザーからのさらなる返信の機会が失われるため、追加のやり取りが必要だと思う場合はマクロを使用しないでください。

**注:** 無償ユーザーがアカウントデータに関するデータ主体の権利についての懸念を提起した場合、チケットをクローズしないでください。代わりに、追加のガイダンスについては[無償ユーザーのデータ訂正リクエスト](https://internal.gitlab.com/handbook/support/workflows/data-subject-requests/#free-user-data-correction-requests)プロセスを参照してください。
