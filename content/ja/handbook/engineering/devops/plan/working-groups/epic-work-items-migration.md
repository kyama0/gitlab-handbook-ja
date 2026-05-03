---
title: "Epic ワークアイテム移行"
description: "Epic からワークアイテムへの移行計画とステータスのためのステージワーキンググループ"
upstream_path: /handbook/engineering/devops/plan/working-groups/epic-work-items-migration/
upstream_sha: bb4e4d0fc1a355c00a1d82b1528ff729c83af189
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

Epic からワークアイテムへの変換計画とステータス

## 属性

|プロパティ|値|
|---|---|
|作成日|2023-10-02|
|目標終了日| 2024-07-12 |
|Slack|#s_plan, #f_work-item, #g_product_planning（社内からのみアクセス可能）|
|Google Doc|[アジェンダ](https://docs.google.com/document/d/1Mh0U-cH0n9FqyAPn4_OMMvpTTJm74-WAmz5ewLVOuJM/edit)（社内からのみアクセス可能）|
|Epic|[&9290](https://gitlab.com/groups/gitlab-org/-/epics/9290)|
|概要とステータス|[終了基準の進捗](#exit-criteria)を参照|

### コンテキスト

Plan ステージは、Issue、Epic、タスクなどの GitLab 機能を構築するためのプラットフォームとして [ワークアイテム](https://docs.gitlab.com/ee/architecture/blueprints/work_items/) を開発しており、製品ニーズへのより高い拡張性を持たせています。このワーキンググループは [Epic からワークアイテムへの移行](https://gitlab.com/groups/gitlab-org/-/epics/9290)に焦点を当て、取り組みに関わる個人、移行の技術計画、および現在のステータスと終了基準について詳細な洞察を提供します。

#### 週次シンク

WG メンバーは毎週木曜日 14:30 UTC にシンクコールを行い、前回のコール以来取られたアクションと次週のステップを議論します。ミーティングは録画されて [GitLab Unfiltered YouTube チャンネル](https://www.youtube.com/playlist?list=PL05JrBw4t0KrEtDK8xRruSY5VtQb9DmdX)で公開共有されます。

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL05JrBw4t0KrEtDK8xRruSY5VtQb9DmdX" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<span id="exit-criteria"></span>

### 終了基準

アップデートは [&11777](https://gitlab.com/groups/gitlab-org/-/epics/11777)（毎週月曜日に更新）で追跡されています。

このワーキンググループには以下の終了基準があります:

1. 機能する Epic ワークアイテムタイプが最新バージョンの GitLab を実行しているすべての顧客に利用可能になること。
1. 実装が少なくとも6ヶ月間、重大なスケーリングまたはサチュレーションリスクを生み出さず、機能開発をブロックしないこと。
1. 6ヶ月以内に技術的負債をクリーンアップするための計画が整っていること。

#### ステージ1 - Epic とワークアイテム間の機能同等性の達成

|タスク|進捗|DRI（グループまたは個人）|
|---|---|---|
|[グループレベルでワークアイテムのネイティブサポートを追加](https://gitlab.com/groups/gitlab-org/-/epics/8308)| 100% | Project Management |
|[異なる関係タイプに基づいてワークアイテムを関連付けるサポートを追加](https://gitlab.com/groups/gitlab-org/-/epics/7459)| 100% | Product Planning |
|[ワークアイテムの子としてレガシー Issue を関連付けるサポートを追加](https://gitlab.com/groups/gitlab-org/-/epics/10851)| 100% | Product Planning |
|[階層ウィジェットでのクロスグループ階層のサポートを追加](https://gitlab.com/gitlab-org/gitlab/-/issues/424896)| 100% | Product Planning |
|[ワークアイテムでの開始日と終了日の継承サポート](https://gitlab.com/groups/gitlab-org/-/epics/11409)| 100% | [Kassio Borges](/handbook/company/team/#kassio)（BE）& [Himanshu Kapoor](/handbook/company/team/#himkp)（FE）- Knowledge |
|[階層ウィジェットでの子供の数、ウェイトの合計、ヘルスステータスのロールアップ統計](https://gitlab.com/groups/gitlab-org/-/epics/11402)| 100% | Project Management |
|[祖先ウィジェットのサポートを追加](https://gitlab.com/groups/gitlab-org/-/epics/9291)| 100% | Product Planning |

#### ステージ2 - Epic データ移行計画

|タスク|進捗|DRI（グループまたは個人）|
|---|---|---|
|移行された Epic で利用不可能なウィジェットをブロック| 100% | Product Planning |
|データベースの Epic テーブルとワークアイテムテーブル間の同期をセットアップ| 100% | Product Planning |
|Epic ワークアイテム ID の変更処理とともに、Epic とワークアイテム間のウィジェットデータの同期をセットアップ| 100% | Product Planning |
|グループレベルでのワークアイテム Epic 作成機能を導入| 100% | Product Planning |

#### ステージ3 - 移行後のロールアウト準備

|タスク|進捗|
|---|---|
|[移行された Epic との REST API 相互運用性の確保](https://gitlab.com/groups/gitlab-org/-/epics/10845)| 100% |
|古い参照がリダイレクトされることを確保するための移行 Epic の一意の ID と IID の移行戦略の決定| 100% |
|レガシー Epic の古くなった列と実装ロジックのデータベースクリーンアップ| 80% |

### 役割と責任

| ワーキンググループの役割 | ワークストリーム/専門性 | 人物 | 役職 |
|---|---|---|---|
|ファシリテーター & 機能リード| バックフィル（3） | [Alexandru Croitor](/handbook/company/team/#acroitor)|シニアバックエンドエンジニア、Plan:Project Management|
|機能リード| Q4 ファシリテーター | [Kushal Pandya](/handbook/company/team/#kushalpandya)|フルスタックエンジニアリングマネージャー、Plan:Product Planning|
|機能リード| 機能同等性（1） | [Eugenia Grieff](/handbook/company/team/#egrieff)|シニアバックエンドエンジニア、Plan:Product Planning|
|機能リード| 同期（2） | [Felipe Artur](/handbook/company/team/#felipe_artur)|シニアバックエンドエンジニア、Plan:Optimize|
|機能リード| 委任（4） | [Nicolas Dular](/handbook/company/team/#nicolasdular)|スタッフバックエンドエンジニア、Plan:Product Planning|
|機能リード| WI Epic 用のレガシー Epic 作成（5） | [Mario Celi](/handbook/company/team/#mcelicalderong)|バックエンドエンジニア、Plan:Project Management|
|機能リード| 顧客パイロット（6） | [Heinrich Lee Yu](/handbook/company/team/#engwan)|スタッフバックエンドエンジニア、Plan:Project Management|
|メンバー| | [Kassio Borges](/handbook/company/team/#kassioborges)|スタッフバックエンドエンジニア、Plan:Knowledge|
|メンバー| | [Himanshu Kapoor](/handbook/company/team/#himkp)|シニアフロントエンドエンジニア、Plan:Knowledge|
|メンバー| | [Adam Hegyi](/handbook/company/team/#ahegyi)|スタッフバックエンドエンジニア、Plan:Optimize|
|メンバー| | [Coung Ngo](/handbook/company/team/#cngo)|シニアフロントエンドエンジニア、Plan:Project Management|
|メンバー| | [Florie Guibert](/handbook/company/team/#fguibert)|シニアフロントエンドエンジニア、Plan:Product Planning|
|メンバー| | [Rajan Mistry](/handbook/company/team/#ramistry)|フロントエンドエンジニア、Plan:Product Planning|
|メンバー| | [Abhilash Kotte](/handbook/company/team/#akotte)|シニアフルスタックエンジニア、Plan:Product Planning|
|メンバー| | [Donald Cook](/handbook/company/team/#donaldcook)|フルスタックエンジニアリングマネージャー、Plan:Project Management|
|メンバー| | [Gabe Weaver](/handbook/company/team/#gweaver)|シニアプロダクトマネージャー、Plan:Project Management|
|メンバー| | [Amanda Rueda](/handbook/company/team/#gweaver)|シニアプロダクトマネージャー、Plan:Product Planning|
|メンバー| | [Jacki Bauer](/handbook/company/team/#jackib)|プロダクトデザインマネージャー、Plan|
