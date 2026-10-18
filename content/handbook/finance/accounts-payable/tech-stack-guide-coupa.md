---
title: "Coupa Tech Stack ガイド"
description: "Coupa の実装に関するリファレンスです。"
upstream_path: /handbook/finance/accounts-payable/tech-stack-guide-coupa/
upstream_sha: 4684d72f27f3401d3ae72a26d72ae46eaeaab929
translated_at: "2026-10-18T21:05:51Z"
translator: claude
stale: false
lastmod: "2026-10-16T19:52:00+02:00"
---

> **注意:** アプリを閲覧するには **[Tech Stack Index](/handbook/business-technology/tech-stack/)**、アプリを管理するには **[Tech Stack Applications](/handbook/business-technology/tech-stack-applications/)**を参照してください。

### 実装

Coupa はクラウドベースの購買・支払いプラットフォームです。使いやすいインターフェースにより、サプライヤーと GitLab の連携方法が改善されました。すべての新規購買注文書、請求書、コミュニケーションは Coupa Supplier Portal を通じて管理されます。

Coupa は 2 つのフェーズで実装されました。フェーズ 1 の対象範囲は、米国とオランダのすべての支払いにサプライヤー情報管理（SIM）システムと Coupa Pay（デジタル請求書）を導入することでした。フェーズ 2 は、Coupa Pay Virtual Card（10 の GitLab 法人向け）の実装と、残りの法人（GmbH、PTY LTD、LTD、カナダ、日本、アイルランド、韓国、フランス、シンガポール）向けのサプライヤー情報管理（SIM）システムと Coupa Pay の実装で構成され、Tipalti を完全に置き換えました。

#### 関連リンク

- [Coupa エンドユーザーガイド](/handbook/business-technology/enterprise-applications/guides/coupa-guide)
- [Coupa バーチャルカードガイド](/handbook/business-technology/enterprise-applications/guides/coupa-virtual-cards/)
- [Coupa FAQ](/handbook/finance/procurement/coupa-faq/)

### システム図

### インテグレーション

#### Coupa から NetSuite へ

NetSuite から Coupa への双方向同期。
