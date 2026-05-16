---
title: 使用量ベースの請求
category: General
description: 一部の請求関連リクエストは Billing/Accounts Receivable チームの対応が必要です。
upstream_path: /handbook/support/license-and-renewals/workflows/usage_billing/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T11:18:50Z"
translator: claude
stale: false
lastmod: "2026-04-09T20:14:47+00:00"
---
## 使用量請求のサポートワークフロー

ユーザーから **GitLab Duo Agent Platform (DAP) の使用量ベースの料金体系および請求** や **GitLab Credits（無料の .com ネームスペースを含む）** に関する質問や問題が寄せられた場合は、このページを参照してください。Support にとっての **正しい情報源** は、社内ドキュメント **Usage Billing – Support Guide** Google Doc です。

> **Note:** このページは Support のための入口です。詳細を重複させずに、意図的に詳細ガイドへ誘導しています。

---

### 主要なリソース

- **Usage Billing – Support Guide（社内 GDoc）**  
  使用量ベースの請求、GitLab Credits、トライアル、SaaS / Self-Managed / Dedicated の各環境における Duo Agent Platform の挙動について、完全なフィールドガイドを提供しています。
  - **ドキュメント全文：**  
    - [Usage Billing – Support Guide](https://docs.google.com/document/d/1wtJ488t7uKAWZiglmSXMSDGhBBUvgpRllkmH9sRJByo/edit?tab=t.0)
  - **Support にとって重要なセクション：**
    - **Usage-Based Pricing & Billing for Duo Agent Platform** – コンセプト、対象範囲、GitLab Credits、消費順序、ダッシュボード、アクセス遮断時の挙動。  
      - [セクションへの直接リンク](https://docs.google.com/document/d/1wtJ488t7uKAWZiglmSXMSDGhBBUvgpRllkmH9sRJByo/edit?tab=t.0#heading=h.fduj6pcdkua7)
    - **GitLab Credits for Free Namespaces** – 無料 SaaS ネームスペースが月次コミットメントを購入する方法、対象範囲、既知の制限事項やよくある質問。  
      - [セクションへの直接リンク](https://docs.google.com/document/d/1wtJ488t7uKAWZiglmSXMSDGhBBUvgpRllkmH9sRJByo/edit?tab=t.0#heading=h.5kb5y8w1g77h) *（同じドキュメントの "GitLab Credits for Free Namespaces" セクション）*
    - DAP および Credits 向けの Support ツールおよびプロセスのギャップは、オープンの機能要望 [Support tooling and processes for DAP and credits](https://gitlab.com/gitlab-org/gitlab/-/work_items/591374) で追跡されています。ステータスの確認や、見つけた機能ギャップの追記はそちらでお願いします。

### 18.11 における Duo Core の変更

**GitLab 18.11（2026-04-16）** より、**Duo Core** は次の 2 点で変更されます。

- **Duo Core ユーザーから Classic Chat が削除** され、**Agentic Chat** のみが残り、**使用量ベースの請求** が適用されます。  
- Duo Core の **Code Suggestions**（Code Completion と Code Generation）は、基盤モデルにかかわらず **クレジットあたり 50 リクエストの一律レート** で **使用量ベースの請求** になります。

これらの変更は次のとおりです。

- **Duo Pro または Duo Enterprise** のシート保有者には **影響しません**（クラシック機能は引き続き無制限・非計測のまま利用できます）。  
- **付与済みのプロモーションクレジット**（Premium：**12 credits/user/month**、Ultimate：**24 credits/user/month**）に **変更はありません**。  
- **18.11 より前のバージョンの顧客にも適用** されます。ただし、Self-Managed の DAP アクセスについて既存の **18.6.6 最低要件** が適用されます。

サブスクリプション、デプロイメントタイプごとの影響、および詳細な変更マトリクス表を含む完全な内訳については、社内ドキュメント **Usage Billing – Support Guide** の以下のセクションを参照してください。

- **Duo Core 変更マトリクスのセクション：** [Duo Core 18.11 change matrix への直接リンク](https://docs.google.com/document/d/1wtJ488t7uKAWZiglmSXMSDGhBBUvgpRllkmH9sRJByo/edit?tab=t.0#heading=h.5wqzlfdbsbn3)

---

### このワークフローを使用するタイミング

このワークフロー（および GDoc）は、次のようなチケットに使用してください。

- **「GitLab Credits とは何か／どのように消費・価格設定されるのか」**
- **「Duo Agent Platform の利用／オンデマンド超過分について、なぜ請求されたのか」**
- **「自分たちの利用状況／クレジット利用者をどう確認・モニタリングできるか」**（ダッシュボード、通知、Salesforce ビュー）
- **「無料の .com ネームスペースで DAP 用クレジットをどう利用／購入するか」**
- **「GitLab Credits をベースとした Duo Agent Platform のトライアルや評価」**

- **「GitLab Credits とは何か／どのように消費・価格設定されるのか」**
- **「Duo Agent Platform の利用／オンデマンド超過分について、なぜ請求されたのか」**
- **「自分たちの利用状況／クレジット利用者をどう確認・モニタリングできるか」**（ダッシュボード、通知、Salesforce ビュー）
- **「無料の .com ネームスペースで DAP 用クレジットをどう利用／購入するか」**
- **「GitLab Credits をベースとした Duo Agent Platform のトライアルや評価」**
