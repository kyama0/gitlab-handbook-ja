---
title: プロダクト開発の予算策定プロセス
upstream_path: /handbook/product-development/how-we-work/product-development-flow/product-development-budgeting/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
---

## 新規投資候補に向けた事前計画

事前計画は予算が利用可能になる前に行います。これは、投資候補について十分に文書化し、ステークホルダーとの協働をすませておくためです。

| DRI | タスク |
| --- | --- |
| [プロダクトマネージャー](/job-description-library/product/product-manager/) | プロダクトマネージャーは、将来の投資候補について事前に計画を立てます。これは、すぐに実行できる事業ケースのリストを事前に用意することで、[「potential investment（投資候補）」Issue テンプレートを用いて Issue を作成](https://gitlab.com/gitlab-com/Product/-/issues/new?issuable_template=Investment-Case)します。これらの提案を作成する際は、[UX デザイナー](/handbook/product/ux/performance-indicators/#product-designer-gearing-ratio)、[UX リサーチャー](/handbook/product/ux/performance-indicators/#ux-researcher-gearing-ratio)、[テクニカルライター](/handbook/product/ux/performance-indicators/#technical-writer-gearing-ratio) など、さまざまなギアリング比率を考慮します。 |
| プロダクトマネージャー | Issue テンプレートを使用して非公開の Issue を作成し、適切な開発ディレクター、UX のステーブルカウンターパート、SET のステーブルカウンターパートなどを必要に応じてタグ付けすることで、PM チームおよびエンジニアリングチームと協働します。 |
| セクションリーダー | セクション全体の提案から精査された次の投資要望について、優先順位付きのリストを維持します。 |

## 新規投資の精査とコミュニケーション

| DRI | タスク |
| --- | --- |
| セクションリーダー | 機会を成功裏に実行するために予算化が必要だと判明しているすべての事項を、資金計画が網羅していることを確認します。また、ROI 計算の「投資」部分が GitLab という企業全体での真の投資を反映していることを確認します。あなたのセクション内の投資要望について優先順位付けします。 |
| [VP of Product](https://gitlab.com/david) | 計画と優先順位をレビューし、プロダクト全体の優先順位とグローバル最適化が考慮されていることを確認します。承認された採用計画について、（スプレッドシートだけでは説明なしに理解しづらいため）非公開の動画ウォークスルーを提供します。 |
| [CTO](https://gitlab.com/edjdev) | エンジニアリングの観点で予算化が必要だと判明しているすべての事項（新規採用だけでなく報酬レビューなど）を、資金計画が網羅していることを確認します。 |
| プロダクトマネージャー | 採用計画が承認されたら、以前に承認された求人が含まれているか否かを文書化します。 |
| Development、Quality、UX の VP | Development、Quality、UX の VP は、各自のディレクターと協働して予算策定を確認・更新し、適切なリーダーシップ比率が含まれていることを保証します。 |

## 既存の投資候補の閲覧

[`Investment Case` ラベルが付いた Issue を検索する](https://gitlab.com/gitlab-com/Product/-/issues?scope=all&state=opened&label_name[]=Investment%20Case)
