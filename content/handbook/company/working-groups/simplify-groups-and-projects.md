---
title: "グループとプロジェクトの簡素化 ワーキンググループ"
description: "GitLab グループとプロジェクトの簡素化 ワーキンググループのビジネス目標、解決すべき問題などについて学ぶ。"
upstream_path: "/handbook/company/working-groups/simplify-groups-and-projects/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T23:18:21Z"
translator: "claude"
stale: false
lastmod: "2024-09-23T12:35:33-07:00"
---

## 属性

| プロパティ      | 値              |
|----------------|-----------------|
| 作成日          | 2020 年 5 月 22 日 |
| 終了日          | 2020 年 10 月 30 日 |
| Slack           | [#wg_simplify-groups-and-projects](https://gitlab.slack.com/archives/C014ZJZP0JC)（社内からのみアクセス可能） |
| Google Doc      | [ワーキンググループ アジェンダ](https://docs.google.com/document/d/1NR9qlJ19n7u99I-usU0Vi2Z1OOlvz_MX00QCk1RCikQ/edit)（社内からのみアクセス可能） |
| ドキュメント / Epic | [Epic](https://gitlab.com/groups/gitlab-org/-/epics/2885)、[機会キャンバス](https://docs.google.com/document/d/1a2xuEMAsWzPK-cb_wnS9DWh9YHXZLs34Lp7jdetODR4/edit#heading=h.4mt5fmtn0ax4) |
| 機能 Issue       | 未定 |
| 関連 OKR        | [90 日未満のアカウントの Active Namespace ごとのステージ数を >1.7 に増加](https://gitlab.com/gitlab-com/Product/-/issues/1103) |

## 解決すべき問題

- グループ、サブグループ、プロジェクトは現在の構成でユーザーにとって混乱を招いており、Plan をはじめ多くのステージでの採用、オンボーディング、リテンションに悪影響を与えています。
- 現在、「プロジェクトレベルで存在する機能をグループレベルに実装してほしい」という多数のリクエストがあります。これはこの問題の一部を解決しようとするアプローチですが、プロジェクトレベルにはすでに存在する機能をグループ内に重複して作成することになります。
- これを行うと、グループレベルで同じエクスペリエンスをきれいに再現できず、欠陥、不足した機能、不良な UX が生じ、顧客にとって不完全で苦痛な重要なパスが生じます。
- **外部的に：** GitLab は企業がチームやワークフローを整理する方法に柔軟性がありません。**内部的に：** グループ内のプロジェクトレベルの機能（またはその逆）の実装（または技術的負債の解消）に数百万ドルを費やしています（または費やすことになります）。
- 機会キャンバスの[「課題」](https://docs.google.com/document/d/1a2xuEMAsWzPK-cb_wnS9DWh9YHXZLs34Lp7jdetODR4/edit#bookmark=id.ncteuke1gqrp)と対応する顧客の視点を参照してください。

## ビジネス目標

- [この複雑な組織モデル](https://docs.google.com/document/d/1a2xuEMAsWzPK-cb_wnS9DWh9YHXZLs34Lp7jdetODR4/edit#bookmark=id.hylkd0o73zah)の代わりに、グループとプロジェクト間で基本機能（Issue、Wiki、Epic など）を重複させることなく、ユーザーが[この簡素化された組織モデル](https://docs.google.com/document/d/1a2xuEMAsWzPK-cb_wnS9DWh9YHXZLs34Lp7jdetODR4/edit#bookmark=id.xb4l42hcom2b)のように GitLab を構造化できるようにします。
- Active Namespace ごとのステージ数 / [ユーザーごとのステージ数](https://internal.gitlab.com/handbook/company/performance-indicators/product/)を向上させます。
- ユーザビリティとパフォーマンスに関する NPS / SUS スコアを向上させます。

### 完了基準

（✅ 完了、✏️ 進行中）

#### 問題を解決するための高レベルのビジョン、MCV、およびイテレーション計画を特定する `=> 100%`

[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/218333)

- **ビジネス実現可能性：** ソリューションは私たちのビジネスに適合するか？ ✅
- **技術的実現可能性：** 構築できるか？ ✅
- **ユーザビリティ：** ユーザーが使い方を理解でき、グループとプロジェクトに対する現在のアプローチより良く受け入れられるか？ ✅
- **価値：** SpU、SPAN、SMAU、AMAU などの主要なビジネスメトリクスの向上をもたらすか？ ✅

機会キャンバス: <https://docs.google.com/document/d/1a2xuEMAsWzPK-cb_wnS9DWh9YHXZLs34Lp7jdetODR4/edit>（内部向け）

## 役割と責任

この問題を解決する広範囲にわたる影響と、製品全体にまたがるため、セクションごとに少なくとも 1 名のメンバー、理想的にはステージごとに 1 名のメンバーを配置したいと考えています。

| ワーキンググループの役割 | 担当者                   | 職位                          |
|-----------------------|-----------------------|-------------------------------|
| エグゼクティブスポンサー  | Anoop Dawar           | VP Product Management          |
| ファシリテーター         | Justin Farris         | Group Product Manager, Plan    |
| ファンクショナルリード              | Liam McAndrew         | Engineering Manager, Manage:Authentication and Authorization |
| ファンクショナルリード              | Gabe Weaver           | Senior Product Manager, Plan   |
| ファンクショナルリード              | UX Mike Long          | Product Design Manager, Dev:Plan & Dev:Manage |
| メンバー                | Melissa Ushakov（Manage）  | Senior Product Manager, Authentication and Authorization |
| メンバー                | Alex Pooley（Manage）      | Senior Backend Engineer, Authentication and Authorization |
| メンバー                | Christen Dybenko（Create） | Senior Product Manager, Knowledge |
| メンバー                | Natalia Tepluhina（Create） | Staff Frontend Engineer, Knowledge |
| メンバー                | Markus Koller（Create） | Backend Engineer, Knowledge |
| メンバー                | Keanon O'Keeffe       | Senior Product Manager, Plan |
| メンバー                | Mark Wood             | Senior Product Manager, Plan |
| メンバー                | Donald Cook           | Frontend Engineering Manager, Plan |

## ミーティング

ミーティングは録画され、YouTube の [グループとプロジェクトの簡素化 ワーキンググループ プレイリスト（未定）](https://www.youtube.com/playlist?list=PL05JrBw4t0KpT_keryiFRk8aJdk-MgqRq) で公開されています。

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL05JrBw4t0KpT_keryiFRk8aJdk-MgqRq" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
