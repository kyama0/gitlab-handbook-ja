---
title: "プロダクト開発フロー ワーキンググループ"
canonical_path: "/company/team/structure/working-groups/product-development-flow/"
upstream_path: "/handbook/company/working-groups/product-development-flow/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

## 属性

| プロパティ      | 値              |
|-----------------|-----------------|
| 作成日          | 2020年8月31日 |
| 目標終了日      | 2021年1月30日 |
| Slack           | [#wg_product_development_flow](https://gitlab.slack.com/archives/C019KM43H4K)（GitLab チームメンバーのみアクセス可能） |
| Google Doc      | [ワーキンググループ アジェンダ](https://docs.google.com/document/d/10pCsqXVXakRKYVKPmouX7C5g7T_1kBsufLRcN6nGZQI/edit#)（GitLab チームメンバーのみアクセス可能） |
| ドキュメント    | TBD |
| エピック/Issue  | [メインエピック](https://gitlab.com/groups/gitlab-com/-/epics/938/) / [Issue ボード](https://gitlab.com/gitlab-com/www-gitlab-com/-/boards/2012861?label_name[]=wg-product-development-flow) |
| ラベル          | `~wg-product-development-flow` |
| 関連 KPI/OKR    | TBD |
| ワーキンググループ レビュアー向け GitLab グループ | `@wg-product-development-flow` |
| ワーキンググループ コントリビューター（MR 作成者）向け GitLab グループ | `@wg-contributors-pd-flow` |

## 解決すべき問題

詳細については [プロダクト開発フロー サーベイ スライド](https://docs.google.com/presentation/d/1BxUVcoPyjYkR7MOHn1aZGllMCqlH5eb27JKM_bb_uDA/edit#slide=id.g59bfc474c5_2_145) を参照してください。

**クロスファンクショナルなコラボレーションが促進されない**

- プロダクト開発フローにおいてクロスファンクショナルな参加を最適化するにはどうすればよいか（例えば、TW が早い段階で情報を得ることで恩恵を受けられる場面、QE が早期に参加できる場面はどこか）？
- トラックとフェーズがアクティビティをサイロ化し、クロスファンクショナルな貢献（#everyonecancontribute）を妨げないようにするにはどうすればよいか？

**ステップが多すぎる**

- 収束点（ワークフローステータスやリリースノートの集約など）に必要な重要なステップを失うことなく、プロダクト開発フローの「必須」ステップ数を削減するにはどうすればよいか？
- チームが特定のニーズに合わせてカスタマイズできる余地を残しながら、適切な詳細レベルを提供することで効率的な作業を支援するにはどうすればよいか（例: ステップバイステップではなく、アクティビティ/アウトカムモデル）？

**過度に規定的**

- プロダクト開発フローの冗長性を削減するにはどうすればよいか（例: ビジュアルスナップショットと書面による説明のバランスを改善する）？
- 新機能を構築するタイミングと既存機能を改善するタイミングのバランスを独自に取れるようにすることで、チームが価値の提供に集中できるようにするにはどうすればよいか（例: 試験運用として Improve フェーズを別のスタイルで詳述する）？

## ビジネス目標

プロダクト開発フローをイテレーションし、「ステップバイステップ」から脱却して、チームに以下を提供する戦略・戦術のコンテナ/プレイブックへとシフトします：

1. 問題を解決するために何を構築または改善するかを特定するための、各フェーズで採用できるさまざまなアクティビティ/アウトカム
1. クロスファンクショナルで効率的かつ透明性の高い予測可能なワークフローを維持するために、各フェーズでチームが従う必要がある最小限の必須プロセス

### プロトコルとプロセス

**ワーキンググループボード用のエピックと Issue の作成**

[定義された問題](https://gitlab.com/groups/gitlab-com/-/epics/938#problems-to-solve) のいずれかに対処するアイデアや解決策を提案するには、効果的な非同期コラボレーションを確保するために以下の手順に従ってください：

1. 提案に対処する Issue を作成し、[プロダクト開発フロー フレームワーク エピック](https://gitlab.com/groups/gitlab-com/-/epics/938) に追加します
1. [この Issue ボード](https://gitlab.com/gitlab-com/www-gitlab-com/-/boards/2012861?label_name[]=wg-product-development-flow) を唯一の情報源として使用します。Issue はボードの左から右に移動させてください
1. 新規作成した Issue は、優先順位付けのために現在 @fseifoddini である[ファシリテーター](/handbook/company/working-groups/product-development-flow/#roles-and-responsibilities)にアサインします

**MR レビュープロセス**

- コントリビューターは MR を作成し、まずコントリビューターグループ '@wg-contributors-pd-flow' にフィードバックをタグ付けします。[ファシリテーター](/handbook/company/working-groups/product-development-flow/#roles-and-responsibilities)とコントリビューターは、MR がマージ可能（非議論的）かどうか、またはマージ前にさらにフィードバックが必要かどうかを確認してから合意します
- 次に、[ファシリテーター](/handbook/company/working-groups/product-development-flow/#roles-and-responsibilities)または MR 作成者が特定の人物をタグ付けし、またはレビュアーグループ全体（エグゼクティブスポンサーを含む）'@wg-reviewers-pd-flow' をマージ前のフィードバック用にタグ付けします
  - 特定の個人（特にエグゼクティブスポンサー）への独自のアクションが必要な場合は、直接 ping します。それ以外の場合、レビュアーとして ping されるのはマージ前の標準的なレビュー/フィードバックサイクルです
- レビュアー（エグゼクティブスポンサーを含む）への通知を最小化し、効率的に前進するためのフィードバック活動に集中することを目標としています。すべての Issue/MR をフォローしたい場合は、[WG ボード](https://gitlab.com/gitlab-com/www-gitlab-com/-/boards/2012861?label_name[]=wg-product-development-flow)から自由にフォローできます

**注意:** To-Do リストに注意を払ってください！特に非議論的な MR については、24 時間以上 MR を保留にすることはありません。

### 完了基準

**現在のプロダクト開発ワークフローのレビューと最適化**

- 必須および任意のワークフローフェーズを定義する
- 各フェーズで現在必要なラベルを最適化する
- 異なるワークフローで `feature`、`bug`、`experiment` などの異なる Issue タイプを組み込むために、最終的なアウトカム/アクティビティセクションをレビューする
- 必要に応じて各フェーズで全カウンターパートとの早期関与とコラボレーションを組み込む

**PD-FLOW の成功の定義**

- 目標と支援メトリクスを定義する
- 追跡、計測、イテレーションするための定性的および定量的な方法を定義する

**ドッグフーディング**

- 新しいフローをドッグフーディングするセクション/グループを特定する
- 提案とフィードバックを文書化してイテレーションする

**下流プロセスのレビュー**

- レビューが必要な可能性のある下流プロセスの変更を特定する
  - [クアッドプランニングプロセス](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/9130)

**マトリクスとダッシュボード**

- 更新が必要なすべてのダッシュボードを文書化する
- 計測すべきマトリクスとその方法を定義する
- 新しいダッシュボードのニーズを特定する

**コミュニケーション**

- 新しいプロダクト開発フローの変更を広く周知する
- AMA を実施してすべての質問/懸念事項に回答する

## 役割と責任

| ワーキンググループの役割    | 担当者                | 役職                          |
|-----------------------|-----------------------|--------------------------------|
| エグゼクティブスポンサー     | Anoop Dawar | VP, Product Management |
| エグゼクティブスポンサー     | Christie Lenneville | VP of UX |
| ファシリテーター           | Farnoosh Seifoddini | Principal PM, Product Operations |
| ファンクショナルリード       | Vincy Wilson（QE） | Manager, Quality Engineering - Growth & Govern |
| ファンクショナルリード       | Jackie Bauer（UX/プロダクトデザイン） | UX Manager, Enablement & Growth |
| ファンクショナルリード       | Jeff Crow（UX リサーチ） | Senior UX Researcher, Growth|
| ファンクショナルリード       | Michael Karampalas（プロダクトマネジメント） | Principal PM, Growth |
| ファンクショナルリード       | Justin Farris（プロダクトマネジメント） | GPM, Plan |
| ファンクショナルリード       | Craig Norris（テクニカルライティング） | Technical Writing Manager |
| ファンクショナルリード       | Thomas Woodham（エンジニアリング） | Engineering Manager, Secure |
| メンバー                | Wayne Haber（エンジニアリング） | Director Engineering, Threat Management |
| メンバー                | Nadia Udalova（Dev） | Product Design Manager |
| メンバー                | Keanon O'keefe（Plan） | Senior Product Manager |
| メンバー                | Tim Hey（Growth） | Principal Product Manager |
| メンバー                | Eric Schurter（Create） | Senior Product Manager |
| メンバー                | Mark Wood（Plan） | Senior Product Manager |
| メンバー                | Sarah Waldner（Monitor） | Senior Product Manager |
| メンバー                | Fabian Zimmer（Geo） | Senior Product Manager |
| メンバー                | Daniel Croft（Release、Package） | Senior Manager, Engineering |
| メンバー                | Jason Yavorska（CI/CD） | Director Product Management |
| メンバー                | Thiago Figueiró | Engineering Manager, Threat Management |
| メンバー                | Dan Jensen（Manage） | Engineering Manager, Analytics & Compliance |
| メンバー                | TBD（データ） | TBD |

## ワーキンググループ

| ワーキンググループ    | 担当者                | 役職                          |
|-----------------------|-----------------------|--------------------------------|
| コントリビューター     | Farnoosh Seifoddini | Principal PM, Product Operations |
| コントリビューター     | Wayne Haber（エンジニアリング） | Director Engineering, Threat Management |
| コントリビューター     | Vincy Wilson（QE） | Manager, Quality Engineering - Growth & Govern |
| コントリビューター     | Jacki Bauer（UX/プロダクトデザイン） | Product Design Manager, Growth & Fulfillment |
| コントリビューター     | Michael Karampalas（プロダクトマネジメント） | Principal PM, Growth |
| コントリビューター     | Justin Farris（プロダクトマネジメント） | GPM, Plan |
| コントリビューター     | Nadia Udalova（Dev） | Product Design Manager |
| コントリビューター     | Mark Wood（Plan） | Senior Product Manager |
| コントリビューター     | Fabian Zimmer（Geo） | Senior Product Manager |
| コントリビューター     | Daniel Croft（Release、Package） | Senior Manager, Engineering |
| レビュアー            | Anoop Dawar | VP, Product Management |
| レビュアー            | Christie Lenneville | VP of UX |
| レビュアー            | Jeff Crow（UX リサーチ） | Senior UX Researcher, Growth|
| レビュアー            | Craig Norris（テクニカルライティング） | Technical Writing Manager |
| レビュアー            | Keanon O'keefe（Plan） | Senior Product Manager |
| レビュアー            | Tim Hey（Growth） | Principal Product Manager |
| レビュアー            | Eric Schurter（Create） | Senior Product Manager |
| レビュアー            | Sarah Waldner（Monitor） | Senior Product Manager |
| レビュアー            | Jason Yavorska（CI/CD） | Director Product Management |
| レビュアー            | Thiago Figueiró | Engineering Manager, Threat Management |
| レビュアー            | Dan Jensen（Manage） | Engineering Manager, Analytics & Compliance |

## ミーティング

ミーティングは録画され、YouTube の [ワーキンググループ - プロダクト開発フロー](https://www.youtube.com/playlist?list=PL05JrBw4t0KoBbb2mGv4EYvr8tKKapb_6) プレイリストで公開されています。このワーキンググループの内容の性質上、同期ミーティングで機密性の高い顧客情報が議論される可能性が高いため、プレイリストはプライベートで GitLab チームメンバーのみアクセス可能です。
