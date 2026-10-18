---
title: "Navan Expense Tech Stack ガイド"
description: "Navan Expense の実装に関するリファレンスです。"
upstream_path: /handbook/finance/accounts-payable/tech-stack-guide-liquid/
upstream_sha: 4684d72f27f3401d3ae72a26d72ae46eaeaab929
translated_at: "2026-10-18T21:05:51Z"
translator: claude
stale: false
lastmod: "2026-10-16T19:52:00+02:00"
---

> **注意:** アプリを閲覧するには **[Tech Stack Index](/handbook/business-technology/tech-stack/)**、アプリを管理するには **[Tech Stack Applications](/handbook/business-technology/tech-stack-applications/)**を参照してください。

### 実装

Navan Expense は人工知能経費プラットフォームで、チームメンバーが外出中の経費管理を改善します。

### システム図

未定

### インテグレーション

#### Navan Expense から NetSuite へ

Navan Expense のトランザクションデータを自動的に NetSuite に同期する、すぐに使えるコネクター。

#### Okta SCIM から Navan Expense へ

ユーザー情報が Workday から Okta SCIM インテグレーションを介して Navan Expense に同期され、ユーザーが適切な経費ポリシーの下に配置されます。

### 主要レポート・ダッシュボード

未定
