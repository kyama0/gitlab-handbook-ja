---
title: "Navan Expense テックスタックガイド"
description: "Navan Expenseの実装に関するリファレンスです。"
upstream_path: /handbook/finance/accounts-payable/tech-stack-guide-liquid/
upstream_sha: 8aa1a9efd98433fb2296996366f1023b5675ea70
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2023-11-07T21:47:02+00:00"
---

> **注意:** アプリを閲覧するには**[テックスタックインデックス](/handbook/business-technology/tech-stack/)**、アプリを管理するには**[テックスタックアプリケーション](/handbook/business-technology/tech-stack-applications/)**を参照してください。


<p class="my-2 text-sm text-gray-600"><strong>Navan Expense</strong> — 詳細は <a href="https://handbook.gitlab.com/handbook/business-technology/tech-stack/" rel="external noopener">テックスタック (英語)</a> を参照してください。</p>


### 実装

Navan Expenseは人工知能経費プラットフォームで、チームメンバーが外出中の経費管理を改善します。

### システム図

TBD

### インテグレーション

#### Navan ExpenseとNetSuiteの連携

Navan Expenseのトランザクションデータを自動的にNetSuiteに同期する、すぐに使えるコネクター。

#### Okta SCIMとNavan Expenseの連携

ユーザー情報がWorkdayからOkta SCIMインテグレーションを介してNavan Expenseに同期され、ユーザーが適切な経費ポリシーの下に配置されます。

### 主要レポート・ダッシュボード

TBD
