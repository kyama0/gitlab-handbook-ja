---
title: "Epicワークアイテム移行"
description: "Epicからワークアイテムへの移行計画とステータスのためのステージワーキンググループ"
upstream_path: /handbook/engineering/devops/plan/working-groups/epic-work-items-migration/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-30T16:57:54+00:00"
---

Epicからワークアイテムへの変換計画とステータス

## 属性

|プロパティ|値|
|---|---|
|作成日|2023-10-02|
|目標終了日| 2024-07-12 |
|Slack|#s_plan, #f_work-item, #g_product_planning (社内からのみアクセス可能)|
|Google Doc|[アジェンダ](https://docs.google.com/document/d/1Mh0U-cH0n9FqyAPn4_OMMvpTTJm74-WAmz5ewLVOuJM/edit) (社内からのみアクセス可能)|
|エピック|[&9290](https://gitlab.com/groups/gitlab-org/-/epics/9290)|
|概要とステータス|[終了基準の進捗](#exit-criteria)を参照|

### コンテキスト

Planステージは、Issues、Epics、Tasksなどの製品ニーズを満たすためにより拡張可能なGitLab機能を構築するためのプラットフォームとして[ワークアイテム](https://docs.gitlab.com/ee/architecture/blueprints/work_items/)を開発しています。このワーキンググループは、[EpicからWorkアイテムへの移行](https://gitlab.com/groups/gitlab-org/-/epics/9290)に焦点を当てており、その取り組みに関わる個人、移行のための技術計画、および現在のステータスと終了基準について詳細な洞察を提供します。

#### 週次同期

WGメンバーは、毎週木曜日のUTC 14:30に同期コールを行い、最後のコール以降に行われたアクションと来週のステップについて議論します。ミーティングは録画され、[GitLab Unfiltered YouTubeチャンネル](https://www.youtube.com/playlist?list=PL05JrBw4t0KrEtDK8xRruSY5VtQb9DmdX)で公開共有されます。

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL05JrBw4t0KrEtDK8xRruSY5VtQb9DmdX" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### 終了基準

更新は[&11777](https://gitlab.com/groups/gitlab-org/-/epics/11777)で追跡されています（毎週月曜日に更新）。

このワーキンググループには次の終了基準があります:

1. 動作するEpicワークアイテムタイプが、最新バージョンのGitLabを実行しているすべての顧客に利用可能。
2. 実装が少なくとも6か月間、重大なスケーリングまたは飽和リスクを生み出さず、機能開発をブロックしない。
3. 6か月以内に技術的負債をクリーンアップする計画が立てられている。

#### ステージ1 - EpicsとWorkアイテム間の機能の同等性の達成

|タスク|進捗|DRI（グループまたは個人）|
|---|---|---|
|[グループレベルでのワークアイテムへのネイティブサポートの追加](https://gitlab.com/groups/gitlab-org/-/epics/8308)| 100% | Project Management |
|[異なる関係タイプに基づいてワークアイテムを関連付けるためのサポートの追加](https://gitlab.com/groups/gitlab-org/-/epics/7459)| 100% | Product Planning |
|[レガシーIssueをワークアイテムの子として関連付けるためのサポートの追加](https://gitlab.com/groups/gitlab-org/-/epics/10851)| 100% | Product Planning |
|[Hierarchyウィジェットでのクロスグループ階層のサポートの追加](https://gitlab.com/gitlab-org/gitlab/-/issues/424896)| 100% | Product Planning |
|[ワークアイテムでの開始日と期日の継承サポート](https://gitlab.com/groups/gitlab-org/-/epics/11409)| 100% | [Kassio Borges](https://gitlab.com/kassio) (BE) & [Himanshu Kapoor](https://gitlab.com/himkp) (FE) - Knowledge |
|[Hierarchyウィジェットでの子の数、ウェイト合計、ヘルスステータスのロールアップ統計](https://gitlab.com/groups/gitlab-org/-/epics/11402)| 100% | Project Management |
|[Ancestorウィジェットのサポートの追加](https://gitlab.com/groups/gitlab-org/-/epics/9291)| 100% | Product Planning |

#### ステージ2 - Epicsデータ移行計画

|タスク|進捗|DRI（グループまたは個人）|
|---|---|---|
|移行されたEpicsで利用できないウィジェットをブロック| 100% | Product Planning |
|データベースのEpicsテーブルとWorkアイテムテーブル間の同期を設定| 100% | Product Planning |
|EpicとWorkアイテム間のウィジェットデータの同期を設定し、Epic WorkアイテムIDの変更を処理| 100% | Product Planning |
|グループレベルでのWorkアイテムEpic作成能力を導入| 100% | Product Planning |

#### ステージ3 - 移行後のロールアウト準備

|タスク|進捗|
|---|---|
|[移行されたEpicsとのREST API相互運用性を確保](https://gitlab.com/groups/gitlab-org/-/epics/10845)| 100% |
|移行Epicsの一意なIDとIIDの移行戦略を決定し、古い参照のリダイレクトを確保| 100% |
|レガシーEpicsの古いカラムと実装ロジックのデータベースクリーンアップ| 80% |

### 役割と責任

| ワーキンググループの役割 | ワークストリーム/専門分野 | 人 | 役職 |
|---|---|---|---|
|ファシリテーター & 機能リード| Backfilling (3) | [Alexandru Croitor](https://gitlab.com/acroitor)|Senior Backend Engineer, Plan:Project Management|
|機能リード| Q4ファシリテーター | [Kushal Pandya](https://gitlab.com/kushalpandya)|Fullstack Engineering Manager, Plan:Product Planning|
|機能リード| 機能の同等性 (1) | [Eugenia Grieff](https://gitlab.com/egrieff)|Senior Backend Engineer, Plan:Product Planning|
|機能リード| 同期 (2) | [Felipe Artur](https://gitlab.com/felipe_artur)|Senior Backend Engineer, Plan:Optimize|
|機能リード| 委任 (4) | [Nicolas Dular](https://gitlab.com/nicolasdular)|Staff Backend Engineer, Plan:Product Planning|
|機能リード| WI epicsのレガシーepicsを作成 (5) | [Mario Celi](https://gitlab.com/mcelicalderong)|Backend Engineer, Plan:Project Management|
|機能リード| 顧客パイロット (6) | [Heinrich Lee Yu](https://gitlab.com/engwan)|Staff Backend Engineer, Plan:Project Management|
|メンバー| | [Kassio Borges](https://gitlab.com/kassioborges)|Staff Backend Engineer, Plan:Knowledge|
|メンバー| | [Himanshu Kapoor](https://gitlab.com/himkp)|Senior Frontend Engineer, Plan:Knowledge|
|メンバー| | [Adam Hegyi](https://gitlab.com/ahegyi)|Staff Backend Engineer, Plan:Optimize|
|メンバー| | [Coung Ngo](https://gitlab.com/cngo)|Senior Frontend Engineer, Plan:Project Management|
|メンバー| | [Florie Guibert](https://gitlab.com/fguibert)|Senior Frontend Engineer, Plan:Product Planning|
|メンバー| | [Rajan Mistry](https://gitlab.com/ramistry)|Frontend Engineer, Plan:Product Planning|
|メンバー| | [Abhilash Kotte](https://gitlab.com/akotte)|Sr Full Stack Engineer, Plan:Product Planning|
|メンバー| | [Donald Cook](https://gitlab.com/donaldcook)|Fullstack Engineering Manager, Plan:Project Management|
|メンバー| | [Gabe Weaver](https://gitlab.com/gweaver)|Senior Product Manager, Plan:Project Management|
|メンバー| | [Amanda Rueda](https://gitlab.com/gweaver)|Senior Product Manager, Plan:Product Planning|
|メンバー| | [Jacki Bauer](https://gitlab.com/jackib)|Product Design Manager, Plan|
