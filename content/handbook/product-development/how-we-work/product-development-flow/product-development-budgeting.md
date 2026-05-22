---
title: プロダクト開発の予算策定プロセス
upstream_path: /handbook/product-development/how-we-work/product-development-flow/product-development-budgeting/
upstream_sha: eff3a749f8927544a08073e8f660283a5d80478b
lastmod: "2026-05-22T14:47:44+02:00"
translated_at: "2026-05-22T00:00:00Z"
translator: claude
stale: false
---

## 新規投資候補に向けた事前計画

事前計画は予算が利用可能になる前に行います。これは投資候補について十分に文書化し、ステークホルダーとの協働を済ませておくためです。

| DRI | タスク |
| --- | --- |
| [プロダクトマネージャー](/job-description-library/product/product-manager/) | プロダクトマネージャーは、将来の投資候補について事前に計画を立てます。これは [`potential investment` Issue テンプレートを使って Issue を作成すること](https://gitlab.com/gitlab-com/Product/-/issues/new?issuable_template=Investment-Case)で、すぐに実行可能なビジネスケースのリストを事前に用意するという形を取ります。これらの提案を作成する際は、[UX デザイナー](/handbook/product/ux/performance-indicators/#product-designer-gearing-ratio)、[UX リサーチャー](/handbook/product/ux/performance-indicators/#ux-researcher-gearing-ratio)、[テクニカルライター](/handbook/product/ux/performance-indicators/#technical-writer-gearing-ratio) など、さまざまなギアリング比率を考慮します。 |
| プロダクトマネージャー | Issue テンプレートを使用して非公開の Issue を作成し、適切な開発ディレクター、UX のステーブルカウンターパートなどを必要に応じてタグ付けすることで、PM チームおよび Engineering チームと協働します。 |
| セクションリーダー | セクション内の提案から精査された次の投資要望について、優先順位を付けたリストを維持します。 |

## 新規投資の精査とコミュニケーション

| DRI | タスク |
| --- | --- |
| セクションリーダー | 機会を成功裏に実行するために予算化が必要だと判明しているすべての事項を資金計画が網羅していることを確認し、ROI 計算における「投資」部分が GitLab という企業全体での真の投資を反映していることを保証します。あなたのセクション内で投資要望の優先順位付けを行います。 |
| [VP of Product](https://gitlab.com/david) | 計画と優先順位をレビューし、プロダクト全体の優先順位とグローバル最適化が考慮されていることを確認します。承認された採用計画について、（スプレッドシートだけでは説明なしに理解しづらいため）非公開の動画ウォークスルーを提供します。 |
| [CTO](https://gitlab.com/edjdev) | Engineering の観点で予算化が必要だと判明しているすべての事項（新規採用だけでなく報酬レビューなども含む）を資金計画が網羅していることを確認します。 |
| プロダクトマネージャー | 採用計画が承認されたら、以前に承認された求人が含まれているか否かを文書化します。 |
| Development、Quality、UX の VP | Development、Quality、UX の VP は、各自のディレクターと協働して予算策定を確認・更新し、適切なリーダーシップ比率が含まれていることを保証します。 |

## 既存の投資候補の閲覧

[`Investment Case` ラベルが付いた Issue を検索する](https://gitlab.com/gitlab-com/Product/-/issues?scope=all&state=opened&label_name[]=Investment%20Case)
