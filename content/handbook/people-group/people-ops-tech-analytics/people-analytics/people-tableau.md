---
title: "People Analytics Tableau ダッシュボード概要"
upstream_path: /handbook/people-group/people-ops-tech-analytics/people-analytics/people-tableau/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T22:00:00Z"
translator: claude
stale: false
---

## 出発点として役立つ場所

- [Tableau ハンドブックページ](/handbook/enterprise-data/platform/tableau/) - これは Data チームが管理する Tableau のすべての利用に関する SSOT です。GitLab における Tableau の最新ロードマップとワークフローの概要が確認できます。
- [Tableau People フォルダ](https://10az.online.tableau.com/#/site/gitlab/projects/300909) - すべての People ダッシュボードを探すためのメインフォルダ。現在は Development プロジェクトにありますが、将来的に Production の場所に移動します。
- [Tableau ワークショップ](https://docs.google.com/document/d/1ChdkC7Tep_HL6UqvJ6PNzLxDmR7QNo5LN823wS0ZAZU/edit#heading=h.2e7gftq6eevx) - People Analytics チームが Tableau の利用と現在利用可能なダッシュボードのナビゲーションへの入門として開催しています。

## People Group ダッシュボード一覧

私たちは Greenhouse や Workday などのソースシステムから日次でリフレッシュされるデータを使用して、Tableau にいくつかの People Analytics ダッシュボードを作成しました。以下にこれらのダッシュボードとその場所の概要を示します。基礎となるデータモデルの詳細については、[データガイド](/handbook/people-group/people-ops-tech-analytics/people-analytics/data-guide/#prep-dimension-and-fact-tables)を、メトリクスの定義の詳細については[データディクショナリ](/handbook/people-group/people-ops-tech-analytics/people-analytics/data-guide/#people-group-data-dictionary)を参照してください。

### General プロジェクト

これらのダッシュボードは、GitLab の Tableau ユーザー全体が安全に一般利用できます。

- [Attrition Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2024177?:origin=card_share_link) - このダッシュボードは組織の離職率メトリクスを示します。`Rolling 12 Months`、`Fiscal Year to Date`、`Month to Date`、`Quarter to Date` で比率をフィルターでき、異なる期間を選択できます。小さなカウントになるデータの次元的な分解は、チームメンバーの匿名性を保護するために非表示にされます。
- [DIB Identity Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2188641?:origin=card_share_link) - このダッシュボードは前年度の同日と比較したダイバーシティメトリクスを割合で示します。このダッシュボードはハンドブックの[アイデンティティページ](/handbook/company/culture/inclusion/identity-data/)に埋め込まれています。
- [Discretionary Bonus Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2177808?:origin=card_share_link) - このダッシュボードは時間経過に伴う Discretionary Bonus を、ボーナス数、ヘッドカウントに対する割合としてのボーナス率、ヘッドカウントに対するローリング 3 か月平均でのボーナス率で追跡します。
- [Elevate Completions Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2118590?:origin=card_share_link) - このダッシュボードは Elevate トレーニングプログラムに割り当てられたリーダーの割合と参加者の完了進捗を追跡します。
- [Headcount Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/1864887?:origin=card_share_link) - このダッシュボードは会社内のさまざまなカテゴリでヘッドカウントメトリクスを取得するために使用されます。特定の日付や期間にフィルターしてヘッドカウントの変化を評価できます。
- [People Group Dashboard Activity](https://10az.online.tableau.com/#/site/gitlab/workbooks/2236727?:origin=card_share_link) - このダッシュボードは過去 90 日間の People Group が所有するすべてのダッシュボードの利用状況を追跡します。
- [People KPIs](https://10az.online.tableau.com/#/site/gitlab/workbooks/2147990?:origin=card_share_link) - このダッシュボードは、組織の健全性を判断するために People Group が追跡する主要パフォーマンス指標を示します。
- [PTO Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2217877?:origin=card_share_link) - このダッシュボードは選択された日付範囲におけるチームメンバーの PTO アクティビティ（長期休暇を除く）を追跡します。
- [Span of Control Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/1964349?:origin=card_share_link) - このダッシュボードでは、ユーザーが部署、部門などごとに現在（および過去）の span of control を特定できます。
- [Talent Acquisition Productivity Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2028013?:origin=card_share_link) - このダッシュボードは Talent Acquisition 部門が四半期目標に対する採用チームとビジネス領域別の社内チームメトリクスを追跡するために使用します。

### People Restricted プロジェクト

このプロジェクトには、少数のユーザーのみが閲覧できる機密ダッシュボードが含まれます。

- [Attrition Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2018838?:origin=card_share_link) - General にあるものと同じユースケースですが、小グループの結果を非表示にすることなく、追加のフィルターが含まれます。
- [DIB Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/1953472?:origin=card_share_link) - このダッシュボードは、異なる DIB カテゴリ別の入社、離職、表現に関するビューとメトリクスを提供します。
- [People Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/1887121?:origin=card_share_link) - 私たちの [People Business Partners](/handbook/people-group/people-business-partners/#people-business-partner-alignments) を対象としており、PBPs がステークホルダーの People Data に深掘りし、グループの比率サイズ、URG の表現、離職率などのメトリクスに関するさまざまな傾向を 1 箇所で特定する方法となることを意図しています。
- [Talent Flow Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/1907866?:origin=card_share_link) - リーダーと共有される [People Weekly Overview Report](https://docs.google.com/spreadsheets/d/1L8Hl301wDqJlGg8JyxHdpa4DZdttuaX23-BRyWruMA4/edit#gid=221950393) の Tableau バージョンです。このバージョンには機密データが含まれ、現時点では Restricted フォルダでのみ利用可能です。
- [People Metrics Executive Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/3097379?:origin=card_share_link) - このダッシュボードは、People Leadership に主要メトリクスの統合ビューを提供し、すべての可視化に適用される division、department、現在の supervisory hierarchy のフィルターを備えています。KPI はそれぞれ前年比のトレンドとともに表示されます。下では、ユーザーがさまざまな変数でヘッドカウントをスライスでき、ダッシュボードの一番下では離職率と昇進率のトレンドを同じ変数で分解できます。このダッシュボードはクイックリファレンスとアドホックな探索の両方のために設計されています。

## Tableau アクセスのリクエスト

Tableau アクセスは [Lumos](/handbook/security/corporate/systems/lumos/ar/) を通じてリクエストできます。詳細なロールの説明については、[Tableau ハンドブックページ](/handbook/enterprise-data/platform/tableau/#access)を参照してください。

**People Group のチームメンバーの場合：**

1. **Okta** にログイン
2. Okta タイルから **Lumos** を開く
3. 適切な権限レベルを選択：
   - **Tableau Access**（**Viewer** 権限）- 機密性のある People メトリクスを扱わない場合
   - **Tableau Special Permissions**（**People - Restricted Access** 権限）- People Business Partner であるか、機密性のある People メトリクスを扱う場合

**重要：** ライセンスは 90 日間の非アクティブの後に無効化されます。これが発生した場合はアクセスを再度リクエストする必要があります。
