---
title: Google Mail (Gmail) ユーザー委任ガイド
description: 他のチームメンバーが自分の受信箱のメールにアクセスして管理できるようにする方法。
upstream_path: /handbook/security/corporate/systems/google/mail/delegation/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-13T15:26:55+10:00"
---

## 概要

他のチームメンバーが自分の受信箱のメールにアクセスして管理できるように許可することができます。これは、Executive Business Administrator や、オフボーディング済みのチームメンバーのカレンダーイベントを変更する必要があるマネージャーにとって特に役立ちます。

- [ベンダードキュメント](https://support.google.com/mail/answer/138350?hl=en)

## 委任された受信箱にアクセスする

> **リマインダー:** Gmail の委任機能は Web インターフェース経由でのみ利用可能で、ローカルやモバイルのメールアプリケーションでは利用できません。

1. GitLab のメールアドレスで `mail.google.com` にログインします。

1. `mail.google.com` の右上隅にある Gmail プロフィールをクリックします。

    <img src="/images/security/corporate/systems/google/mail/delegation/google_delegation_example.png" alt="Google Delegate Example" width="400"/>

1. 委任アクセス権がある場合、`Gmail` アカウントの下にチームメンバーのアカウントが表示されます。

1. チームメンバーのアカウントをクリックします。

1. チームメンバーの受信箱にリダイレクトされ、そのチームメンバーの代理としてメールを閲覧・送信できるようになります。
