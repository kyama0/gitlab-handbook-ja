---
title: "アップグレード改善"
description: "このワーキンググループは、セルフマネージド GitLab インスタンスのアップグレードライフサイクル全体にわたる顧客体験の向上を目指します。"
status: Paused
upstream_path: /handbook/company/working-groups/upgrade-improvements/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T23:40:34Z"
translator: claude
stale: false
lastmod: "2025-08-02T12:19:49+02:00"
---

## 属性

<table>
<tr>
<th>プロパティ</th>
<th>値</th>
</tr>
<tr>
<td>作成日</td>
<td>2024-10-01</td>
</tr>
<tr>
<td>目標終了日</td>
<td>TBD</td>
</tr>
<tr>
<td>Slack</td>
<td>

[#wg_upgrade_improvements](https://gitlab.enterprise.slack.com/archives/C07GYUGJLPM)（社内のみアクセス可能）
</td>
</tr>
<tr>
<td>Google Doc</td>
<td>

[ワーキンググループ議事録](https://docs.google.com/document/d/14vqe2wbsTatp0kYRUntaf7-2XWYKPtvzrPG-eemzAow/edit)（社内のみアクセス可能）

[プロジェクト計画](https://docs.google.com/document/d/1FbZP2bCi25efAxUZQX21NIu_gcMv7jHoR8gEny9BSVI/edit#heading=h.hyca1fd7tvon)（社内のみアクセス可能）
</td>
</tr>
<tr>
<td>Epic</td>
<td>

[GitLab セルフマネージドのアップグレード改善](https://gitlab.com/groups/gitlab-org/-/epics/10949)
</td>
</tr>
<tr>
<td>ラベル</td>
<td>

`WorkingGroup::UpgradeImprovements`
</td>
</tr>
<tr>
<td>ステータス</td>
<td>一時停止中</td>
</tr>
</table>

## 目標

アップグレード改善ワーキンググループは、CTO の最優先事項の一つであるアップグレード改善プロジェクトに取り組むクロスファンクショナルなグループです。このプロジェクトは、セルフマネージド GitLab インスタンスのアップグレードライフサイクル全体にわたる顧客体験の向上を目指します。

具体的なハイレベルな目標は以下のとおりです:

1. GitLab ユーザーのアップグレードサイクルの選択肢を拡大する（例: LTS）
2. コード開発における組織的な変更
3. GitLab のアップグレードに必要な運用コストを削減する
4. GitLab リリースのエンドツーエンドオーナーを任命する

その他の目標:

1. GitLab のアップグレードサイクルから必須のアップグレード停止点を除去する
2. 破壊的変更はメジャーリリースに限定する

### 概要

GitLab のアップグレードは困難を伴うことがあり、アップグレードごと・デプロイ環境ごとに難易度が異なります。ワーキンググループは、[FY25 緊急アップグレードチケット（これまでの分）](https://gitlab.com/gitlab-com/support/readiness/emergencies/-/issues/2808 "FY25 で記録されたアップグレード Issue のレビュー")、gitlab.com [デプロイブロッカーダッシュボード](https://dashboards.gitlab.net/d/delivery-deployment_blockers/delivery3a-deployment-blockers?orgId=1)、および顧客との会話を確認しました。また、Distribution グループは[現在のアップグレードプロセスのレビューと検証](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/1597 "さまざまなアップグレードシナリオをテストして問題点を特定する")を行っています。

現在のアップグレードプロセス自体は概ね機能しており、アップグレードの障壁を下げるためのユーザー体験の改善余地はあるものの、プロセス自体は意図したとおりに動作しています。主な課題はプロダクトのバグ、設定の問題、マイグレーションのバグ、マイグレーションの長時間化であり、これらの問題の多くはアップグレード前後のフェーズに集中しています。

そのため、ワーキンググループはこれらの問題を複数のフェーズで対処することにしました。

<table>
<tr>
<th>フェーズ</th>
<th>重点分野</th>
<th>目標時期</th>
</tr>
<tr>
<td>フェーズ 1</td>
<td>

* データベースの改善
* コード品質
* Support Spikes プロセスの導入
* UX リサーチの実施

</td>
<td>FY25 Q4</td>
</tr>
<tr>
<td>フェーズ 2</td>
<td>

* 長期サポート（LTS）バージョンのオプション提供
* TBD

</td>
<td>TBD</td>
</tr>
<tr>
<td>フェーズ X</td>
<td>

* TBD

</td>
<td>TBD</td>
</tr>
</table>

詳細については、[アップグレード改善プロジェクト計画](https://docs.google.com/document/d/1FbZP2bCi25efAxUZQX21NIu_gcMv7jHoR8gEny9BSVI/edit)（社内限定）およびプロジェクトの [Epic](https://gitlab.com/groups/gitlab-org/-/epics/10949) をご参照ください。

### 終了基準 {#exit-criteria}

このワーキンググループの最終目標は、メンテナンス対象バージョンで稼働しているセルフマネージド GitLab インスタンス数を増やすことです。ただし、指標はさまざまな要因に影響されるものであり、中には私たちのコントロール外のものもあるため、各フェーズの具体的な終了基準を以下に示します:

<table>
<tr>
<th>フェーズ</th>
<th>終了基準</th>
</tr>
<tr>
<td>フェーズ 1</td>
<td>

* データベースマイグレーションに関連するセルフマネージドの緊急アップグレードサポートチケット数を減少させる
* TBD

</td>
</tr>
<tr>
<td>フェーズ 2</td>
<td>

* TBD

</td>
</tr>
<tr>
<td>フェーズ X</td>
<td>

* TBD

</td>
</tr>
</table>

## 役割と責任

| ワーキンググループでの役割               | 氏名                                                      | 役職                                                              |
|----------------------------------------|----------------------------------------------------------|------------------------------------------------------------------|
| エグゼクティブステークホルダー           | [Sabrina Farmer](https://gitlab.com/sabrinafarmer)        | Chief technology officer (CTO)                                   |
| ファシリテーター                         | [Peter Lu](https://gitlab.com/plu8)                       | Engineering Manager, Distribution::Deploy                        |
| ファンクショナルリード - プロダクト & Distribution | [Dilan Orrino](https://gitlab.com/dorrino)          | Senior Product Manager Distribution                              |
| ファンクショナルリード - テストプラットフォーム   | [Kassandra Svoboda](https://gitlab.com/ksvoboda)    | Engineering Manager, Test Platform                               |
| ファンクショナルリード - サポート          | [Brie Carranza](https://gitlab.com/bcarranza)             | Staff Support Engineer                                           |
| ファンクショナルリード - エクスパンション ソフトウェア開発 | [Thomas Woodham](https://gitlab.com/twoodham) | Senior Engineering Manager, Secure                          |
| ファンクショナルリード - コア開発         | [Luke Duncalfe](https://gitlab.com/.luke)                 | Staff Backend Engineer, AI-Powered:Workflow Catalog              |
| ファンクショナルリード - コア開発         | [Erran Carey](https://gitlab.com/erran)                   | Staff Fullstack Engineer, Create::Editor Extensions              |
| メンバー                                | [Gerardo Lopez-Fernandez](https://gitlab.com/glopezfernandez) | Engineering Fellow, Infrastructure                          |
| メンバー                                | [Vincy Wilson](https://gitlab.com/vincywilson)            | Director, Test Platform                                          |
| メンバー                                | [Lyle Kozloff](https://gitlab.com/lyle)                   | Director, Support Engineering                                    |
| メンバー                                | [Stan Hu](https://gitlab.com/stanhu)                      | Engineering Fellow                                               |
