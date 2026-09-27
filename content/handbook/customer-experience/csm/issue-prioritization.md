---
title: "CSM としての Issue 優先順位付けダッシュボードの使い方"
description: "カスタマーサクセスマネージャーが顧客の成功を推進するために Sisense の Issue 優先順位付けダッシュボードをどのように活用するかについての重要事項。"
upstream_path: /handbook/customer-experience/csm/issue-prioritization/
upstream_sha: 7a2e264cb798305fd5c92b586ef9fe633a730244
translated_at: "2026-09-27T00:10:26+00:00"
translator: codex
stale: false
lastmod: "2026-09-24T21:34:11+02:00"
---

顧客優先付けフレームワークは現在 MVC であり、初期パイロットフェーズにあります。進行中の作業は[WG:Prioritization Framework Issue ボード](https://gitlab.com/groups/gitlab-com/-/boards/2086332?label_name[]=wg%3Aprioritization%20framework)で確認できます。質問や協力については、DRI `@gweaver` に連絡するか、[継続中の隔週同期](https://docs.google.com/document/d/1oBWNxBSOJKrh3ubHwN5pI8243vBjJ-Y_Cax17A5abII/)に参加してください。

---

## ダッシュボード

[Issue 優先順位付けダッシュボード](https://app.periscopedata.com/app/gitlab:safe-intermediate-dashboard/970772/User-Request-Issue-Prioritization---CSM-Customer-View)は Sisense にあります。データは、顧客または見込み客が機能に関心を示した際に使用される[フィードバックテンプレート](/handbook/product/product-management/#feedback-template)から集計されています。

## CSM がダッシュボードをどのように使用するか

カスタマーサクセスマネージャーは、ダッシュボードをフィルタリングできます。これにより、CSM の担当アカウント全体の顧客から要求されたすべての Issue が表示されます。また、特定の顧客または見込み客でフィルタリングすることもできます。これにより、顧客固有の要求 Issue のビューが表示されます。

### カデンスコール

カデンスコール中に `Recently Opened` および `Recently Closed` ダッシュボードビューを活用してください。

`Recently Opened` ビューでは、CSM は `Deliverable` 列を参照することで、顧客から要求された Issue が優先順位付けされているかどうかを確認できます。

`Recently Closed` ビューでは、CSM は顧客が関心を持つ最近リリースされた機能リクエストを共有できます。これにより、GitLab のアップグレード頻度を高めることができます。

### エグゼクティブビジネスレビュー

エグゼクティブビジネスレビュー（EBR）中に `Customer Drill Down` セクションを活用して、顧客の特定の機能リクエストのトレンドを強調します。`Open User Requests` ビューは、顧客がどれだけオープンおよびクローズされたリクエストを持っているかのトレンドを示します。`Open User Requests by Issue/Epic Type` は、機能リクエストとバグ修正のトレンドを示します。

### 上位の Issue/エピック

顧客はよく「この機能に関心を持っているのは私たちだけですか？」と質問します。これに答えるために、`Top Issues/Epics Product Groups For` セクションを活用してください。これにより、GitLab で最も要求されている Issue のビューが表示されます。
