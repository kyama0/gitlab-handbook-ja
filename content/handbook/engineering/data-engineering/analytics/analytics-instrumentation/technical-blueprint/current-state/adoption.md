---
title: チームとカテゴリ全体の採用状況
description: "チームとカテゴリ全体でインストルメンテーションのカバレッジがどの程度充実しているか"
upstream_path: /handbook/engineering/data-engineering/analytics/analytics-instrumentation/technical-blueprint/current-state/adoption/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T02:53:44Z"
translator: claude
stale: false
lastmod: "2025-11-27T20:17:50+00:00"
---

## 概要

[Analytics Instrumentation Coverage](https://10az.online.tableau.com/#/site/gitlab/workbooks/2437638/views) ダッシュボード内の [Current Metrics](https://10az.online.tableau.com/#/site/gitlab/views/AnalyticsInstrumentationCoverage/CurrentMetrics?:iid=1) タブは、GitLab 製品全体のメトリクスカバレッジの概要を提供します。このページでは、[Metrics Dictionary](https://metrics.gitlab.com/) に表示されているデータの集計ビューを示しています。

ダッシュボードに記載されているカテゴリは、[プロダクトカテゴリ](/handbook/product/categories/)のハンドブックページに説明されており、[categories.json](https://about.gitlab.com/categories.json) ファイルから取得されています。チームはインストルメンテーション時に正確なカテゴリ情報を追加する責任があります。[カテゴリルックアップ](/handbook/product/categories/lookup/)ページには、各プロダクトカテゴリの詳細に関するルックアップテーブルが提供されています。

`Product Categories` ディメンションと `Total Metric Count` メトリクスを選択すると、各カテゴリ別の異なるメトリクスの内訳が表示されます。

セクション、ステージ、グループに関する情報は [stages.yaml](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/stages.yml) と [sections.yaml](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/sections.yml) から取得されています。

## 観察事項

### 53.2% のメトリクスでプロダクトカテゴリが欠落している

- 2025年10月時点で、合計 4522 件のメトリクスがあります。
- そのうち、4010 件のメトリクスがアクティブです。
- 4010 件のアクティブなメトリクスのうち、111 件のメトリクスにはセクション+ステージ+グループ情報がありません。
- 4010 件のアクティブなメトリクスのうち、2134 件のメトリクスにはプロダクトカテゴリ情報がありません。
- プロダクトカテゴリ情報がない 2134 件のメトリクスのうち、チーム情報も欠落しているのはわずか 5 件です。
- **つまり、2129 件のアクティブなメトリクスは、それらを所有するチームの協力でプロダクトカテゴリ情報にラベルを付けることができます。**

### すべてのチームがインストルメンテーションを採用しているわけではない

- [stages.yaml](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/stages.yml) と [sections.yaml](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/sections.yml) には、77 グループ、20 ステージ、15 セクションが記載されています。
- メトリクスダッシュボードによると、メトリクスを所有しているのは 16 ステージ、11 セクションにまたがる 39 の異なるグループです。
- つまり、37 グループ、4 ステージ、4 セクションはメトリクスを所有していません。
