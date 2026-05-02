---
title: "PMM メトリクス"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/pmm-metrics/
upstream_sha: 214b98c98d2eb739dbe3a358027667a7f128ec69
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

## 目的: PMM チームのベロシティを管理・追跡する

GitLab では、MVC を出荷し、素早くイテレーションして価値を提供します。プロダクトマーケティングの真の尺度は、お客様が GitLab で自身の課題をどれだけ効果的に解決できるかをどれだけ理解できているかにあります。私たちは活動の価値を測定することを志向していますが、その第一歩は活動を捕捉し追跡することです（願わくはビジネスバリューに沿った形で）。

### アプローチ

主要な PMM の活動・成果物を捕捉して、ベロシティを追跡・可視化・測定するために GitLab を使用します。次のハイレベルな PMM 活動に関連する Issue を明確にタグ付けするために、ラベルを使用します:

MVC として、まずは [プロダクトマーケティングプロジェクト](https://gitlab.com/gitlab-com/marketing/product-marketing) で、いくつかの排他的なトップレベルプロジェクトラベルから始めます。

| トピック | 詳細 | ラベル |
|----|---|---|
| アナリストリレーションズ | ブリーフィング、レポート、問い合わせ | pmm::AR |
| カスタマーリレーションズ | 事例 | pmm::Cust |
| コラテラル | ホワイトペーパー、データシート、ROI モデル | pmm::Collateral |
| イネーブルメント | 営業、XDR、パートナーなど | pmm::Enable |
| イベント | 物理・バーチャルイベント: 講演、ブース、抄録執筆など | pmm::Event |
| リサーチ | 市場調査、調査の起草、文書化 | pmm::Research |
| プレゼンテーション | ピッチデッキ、プロダクトデッキなどデッキの構築・更新 | pmm::Deck |
| PR | ブリーフィング、プレスリリースなど | pmm::PR |
| 営業サポート | 特定の営業サポートミーティング、スライドなど | pmm::Sales |
| Web 更新 | ハンドブック、プロダクトページ、ソリューションページ、ブログなどの Web コンテンツ | pmm::Web |

### レポーティングと追跡

1. PMM の四半期ごとの作業を追跡するための四半期マイルストーンがあります。
1. また、[GitLab Insights](https://docs.gitlab.com/ee/user/project/insights/) を使って Insights ダッシュボードを設定することもでき、完了した作業の可視性を得られます。例えば:
![スタックバー](https://docs.gitlab.com/ee/user/project/insights/img/insights_example_stacked_bar_chart_v11_10.png)

または

![棒グラフ](https://docs.gitlab.com/ee/user/project/insights/img/insights_example_bar_time_series_chart_v11_10.png)
