---
title: "Coupa テックスタックガイド"
description: "Coupaの実装に関するリファレンスです。"
upstream_path: /handbook/finance/accounts-payable/tech-stack-guide-coupa/
upstream_sha: 8aa1a9efd98433fb2296996366f1023b5675ea70
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

> **注意:** アプリを閲覧するには**[テックスタックインデックス](/handbook/business-technology/tech-stack/)**、アプリを管理するには**[テックスタックアプリケーション](/handbook/business-technology/tech-stack-applications/)**を参照してください。


<p class="my-2 text-sm text-gray-600"><strong>Coupa</strong> — 詳細は <a href="https://handbook.gitlab.com/handbook/business-technology/tech-stack/" rel="external noopener">テックスタック (英語)</a> を参照してください。</p>


### 実装

Coupaはクラウドベースの購買・支払いプラットフォームです。使いやすいインターフェースにより、サプライヤーとGitLabの連携方法が改善されました。すべての新規購買注文書、請求書、コミュニケーションはCoupaサプライヤーポータルを通じて管理されます。

Coupaは2つのフェーズで実装されました。フェーズ1の対象範囲は、サプライヤー情報管理（SIM）システムとCoupa Pay（デジタル請求書）の米国およびオランダへの全支払いへの実装でした。フェーズ2は、Coupa Payバーチャルカード（10のGitLabエンティティ向け）の実装と、残りのエンティティ（GmbH、PTY LTD、LTD、カナダ、日本、アイルランド、韓国、フランス、シンガポール）向けのサプライヤー情報管理（SIM）システムとCoupa Payの実装で構成され、Tipaltiを完全に置き換えました。

#### 関連リンク

- [Coupaエンドユーザーガイド](/handbook/business-technology/enterprise-applications/guides/coupa-guide)
- [Coupaバーチャルカードガイド](/handbook/business-technology/enterprise-applications/guides/coupa-virtual-cards/)
- [Coupa FAQ](/handbook/finance/procurement/coupa-faq/)

### システム図

### インテグレーション

#### CoupaとNetSuiteの連携

NetSuiteとCoupaの双方向同期。
