---
title: チームの生産性の測定方法
description: 一部の DevOps エンジニアリングチームが追跡する生産性の指標と、その目標および算出方法。
upstream_path: /handbook/engineering/devops/measuring-productivity/
upstream_sha: 2de6fd8dc3b16760e36ce5d9b9fbfcd697d431d8
lastmod: "2026-10-20T15:23:42+02:00"
translated_at: "2026-10-20T21:00:28Z"
stale: false
translator: codex
---

## 概要 {#summary}

[Plan:Planning Views](/handbook/engineering/devops/plan/planning-views/)、[Plan:Portfolio Planning](/handbook/engineering/devops/plan/portfolio-planning/)、[Create:Source Code Hardening and Modernization](/handbook/engineering/devops/create/source-code/hardening-and-modernization/)は、[チーム MR スループットダッシュボード](https://app.snowflake.com/YS68254/gitlab/#/streamlit-apps/PROD.STREAMLIT.PLAN_MR_THROUGHPUT)で 4 つの指標を追跡します。すべての数値は、28 日間の移動期間について、休暇を考慮して調整したエンジニア 1 人あたりのチーム集計値です。個人別のデータは表示しません。

| 指標 | 集計対象 | 目標 |
|---|---|---|
| MR 率 | チームが作成し、マージされた MR の数。エンジニア 1 人あたり、28 日間あたり | 15 〜 30 |
| レビュー収支 | チームが他者に提供したレビュー数から、他者から受けたレビュー数を引いた数 | 0 より大きい |
| マージまでの時間 | レビュー準備完了に設定されてからマージされるまでの日数の中央値。作成した MR とレビューした MR のそれぞれについて集計 | 0.5 〜 1.5 日 |
| オープンな MR | 1 日の終わり時点でのエンジニア 1 人あたりのオープンな MR の数 | 最大 2 件 |

## 指標 {#metrics}

### MR 率 {#mr-rate}

追跡対象プロジェクトでチームメンバーが作成し、マージされた MR の数を、休暇を考慮して調整した、エンジニア 1 人あたり、28 日間あたりの値です。

**目標：15 〜 30。** 目標は単一の数値ではなく範囲です。20 を少し下回っても期待を下回るパフォーマンスとは見なしません。また、20 に到達したらそこで止めるというものでもありません。

### レビュー収支 {#review-balance}

直近 28 日間に、チームメンバーが他者の MR に提供したレビュー数から、他者がチームの MR に提供したレビュー数を引いた数です。チーム内のレビューは相殺されます。GitLab Duo Code Review などのボットレビュアーは集計に含めません。

**目標：0 より大きい。** すべての MR にはレビュアーが必要なので、チームは他者から受けるレビューと少なくとも同じだけのレビューを他者に提供するべきです。コミュニティやボットが作成した MR には所属チームがないため、収支はゼロではなくプラスである必要があります。

### マージまでの時間 {#time-to-merge}

MR がレビュー準備完了に設定されてからマージされるまでの日数の中央値です。ドラフト状態の時間は含めません。長期間残っている少数の MR が平均値に大きく影響するため、中央値を使用します。

次の 2 つの系列を追跡します。

- **作成した MR：** チームメンバーが作成した MR です。チームが自分たちの作業をどれだけ速くマージできるかを示します。
- **レビューした MR：** チームメンバーがレビューした MR です。チームがレビュアーとしてどれだけ素早く対応し、他者の作業のマージを支援できるかを示します。

どちらも**目標は 0.5 〜 1.5 日**です。マージまでの時間は MR 率と連動して変化し、両者のうち議論が分かれにくい指標です。自分の作業がより速くマージされることに反対する人はいないからです。

### オープンな MR {#open-mrs}

各日の終わり時点でのオープンな MR、そのうちレビュー準備完了に設定されている MR、およびオープンな MR の経過日数の中央値です。

**目標：エンジニア 1 人あたり最大 2 件。**

## 算出方法 {#how-it-is-calculated}

- **移動期間。** 各日の値は直近 28 日間を示すため、変更の効果は翌暦月の終わりを待たず、数日以内に確認できます。ダッシュボードには 7 日間と 84 日間の期間もあり、目標は期間に応じて調整されます。
- **休暇による調整。** MR 率とレビュー数は、祝日を含む Workday の不在記録を使用し、チームが稼働可能だった営業日の割合で割ります。マージまでの時間とオープンな MR は調整しません。
- **チームへの所属。** Workday ではチーム異動が実際の異動から数週間〜数ヶ月後に記録されるため、各メンバーの現在の Workday 上の所属チームをすべての履歴に適用します。
- **追跡対象プロジェクト。** 製品を構成するプロジェクト内の MR を集計します。一覧はダッシュボードのソースにある `TRACKED_PROJECTS` です。

厳密な定義、追跡対象プロジェクトの一覧、すべての設定は、[ダッシュボードのソース](https://gitlab.com/gitlab-data/streamlit/-/blob/main/src/applications/plan_mr_throughput/dashboard.py)とその [README](https://gitlab.com/gitlab-data/streamlit/-/blob/main/src/applications/plan_mr_throughput/README.md)、およびダッシュボード最下部の「測定方法」セクションに記載されています。

## ダッシュボード {#dashboard}

[チーム MR スループットダッシュボード](https://app.snowflake.com/YS68254/gitlab/#/streamlit-apps/PROD.STREAMLIT.PLAN_MR_THROUGHPUT)は Snowflake 上の Streamlit で動作し、Snowflake へのアクセス権が必要です。Engineering ディレクトリ内のどのチームでも選択し、並べて比較できます。
