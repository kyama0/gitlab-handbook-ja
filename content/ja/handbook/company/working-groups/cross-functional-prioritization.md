---
title: "クロスファンクショナル優先順位付け"
description: "R&D チームをバックログデータ、SLO ガイドライン、健全な優先順位付け比率に基づく安定した優先順位付け状態へ移行します"
status: active
upstream_path: /handbook/company/working-groups/cross-functional-prioritization/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
---

## 目的

このワーキンググループは、緊急的な「エンジニアリングアロケーション」優先順位付け方法論から新しいプロセスへと移行させる役割を担っています。ワーキンググループは解散前に、新しいプロセスの命名、設計、立ち上げ、実装、フィードバック収集、そして反復的な改善を行う必要があります。新しいプロセスは次の 3 つの主要な目的を達成する必要があります：

1. **最適なバランスを実現する** — 新機能、セキュリティ修正、可用性作業、パフォーマンス改善、バグ修正などについて、会話と連携を促進するフレームワークを通じて最適なバランスを実現します。これらのカテゴリ間のバランスを保つことで、GitLab が収益目標を達成し、プラットフォームの安定性を維持できるような運営が可能になります。
1. **全員の声を届ける** — クアッド（PM、Development、Quality、UX）の全員が意見を言えるようにします
1. **優先順位付けの透明性を提供する** — 社内外のステークホルダーが自分の作業項目を支持できるよう、優先順位付けと作業状況を透明化します

## 属性

| プロパティ        | 値      |
|-----------------|------------|
| 作成日           | 2022-04-13 |
| 目標終了日        | 2023-01-31 |
| Slack           | [#wg_cross-functional-prioritization](https://gitlab.slack.com/archives/C03AWM7780G) |
| Google Doc      | [ワーキンググループ アジェンダ](https://docs.google.com/document/d/1wog8bR7jg6SECefx9BGqIa07sFm_sXJPvelVAganYmc/edit#heading=h.pmtw3ocv2aty)  |
| Issue ボード     | [Issue ボード](https://gitlab.com/groups/gitlab-com/-/boards/4199535?not[label_name][]=wg-cross-functional-prioritization-adoption&label_name[]=wg-crossfunctional-prioritization) |
| ワーキンググループ用オープン MR | [MR リスト](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests?label_name%5B%5D=wg-cross-functional-prioritization) |
| OKR | クロスファンクショナル優先順位付けモデルの成熟化 |
| 概要 & ステータス | 下記の[終了条件](#exit-criteria)を参照 |

### 終了条件

これらの目標は野心的に設定されており（達成できない可能性がある低い目標より、良い目標に向けて高い基準を設ける）、という点に注意してください。

- [x] 新しいプロセスに名前をつける（完了: 「クロスファンクショナル優先順位付け」）[Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13274)
- [x] 全グループが、機能・メンテナンス・バグ・未定義のマージリクエスト比率を分析できるダッシュボードを持つ。[Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13294)、[Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13448)
- [ ] Type:Undefined Issue を 0% まで削減する [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13760)
- [ ] Type:Undefined MR を 0% まで削減する [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13759)
- [ ] サブタイプラベルを定義して実装する [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13650)
- [ ] サブタイプのない Issue とマージリクエストをトレンドで追跡・特定するダッシュボードを追加する [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13781)
- [ ] Undefined MR と Undefined Issue を 0% にし、9月 PI レビューで単一のクロスファンクショナルステージ（Create）に MR サブタイプを適用する。
- [ ] 9月の PI レビューから Create のフィードバックを取り込んでイテレーションを実施し、10月に全ステージへロールアウトする。
- [x] 全グループがダッシュボードをレビューし、ステークホルダーが意思決定に影響を与えられる方法で定期的（月次）に議論している。[Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13304)
- [x] Development エンジニアリングマネージャーが PM にメンテナンスの優先順位を提供している [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13304)
- [x] Quality リードが PM にバグの優先順位を提供している [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13304)
- [x] クアッドの安定したカウンターパート（PM、Development EM、Quality Engineering Manager、UX Design Manager）が協力してどの Issue をどのマイルストーンに計画するかを決定している [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13304)
- [x] プロセスを効率化するためのオートメーションが存在する。[Issue](https://gitlab.com/gitlab-com/quality/engineering-productivity/-/issues/5)、[Issue](https://gitlab.com/gitlab-com/quality/engineering-productivity/-/issues/6)
- [ ] S1/S2 バグの初期イテレーションの自動スケジューリングフレームワークがマージされ、より多くのグループや重要度に自動化を拡大するプロセスを文書化した。[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/368641)

以下の条件は、ワーキンググループを閉鎖する際に完了とマークされます（それまで反復的に取り組みます）。

- [ ] ハンドブックを新しいプロセスを反映するよう更新する
- [ ] [マルチモーダルコミュニケーション計画](#multi-modal-communication)を実施する（下記参照）
- [ ] フィードバックを収集し、各領域の DRI が適切に検討・反映する [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13694)

#### 残りの終了条件の段階的ロールアウト

残りの終了条件をフェーズ別にロールアウトします。このアプローチにより、変更の対象を単一のステージに限定し、迅速なイテレーションを可能にし、R&D 全体の変更による混乱を軽減します。

**フェーズ 1: Create が 9月の Create PI レビューまでに全終了条件を完了する**

1. Undefined MR をゼロにすることを含む
1. Undefined Issue をゼロにすることを含む
1. MR に正しいサブタイプを適用することを含む
1. 15.3 と 15.4 の Issue/MR に適用する - 15.3 より前に遡ることは任意

フェーズ 1 の一環として、Create からの意見とフィードバックを積極的にレビューします。主に Darva Satcher（Dir of Eng）、Sarah Waldner（Create GPM）、Marcel van Remmerden（UX Manager）、Ramya Authappan（QEM）からの意見を取り込み、フェーズ 2 に移行する前にイテレーションを行います。

**フェーズ 2: 10月の PI レビューまでに全ステージ/セクションへロールアウトする**

基本的にフェーズ 1 の内容全て（全ステージ/セクション向けの任意のイテレーションを含む）。

注意: Create 以外のステージが 10月以前に終了条件を完了することを妨げるものではありません。多くのチームが自主的に取り組んでいます。例えば、Wayne は Secure を活性化し、David は PLT 全体に PI レビューでこれを採用し始めるよう要求しています。ワーキンググループのエネルギーはフェーズ 1 で Create に集中させます。

### ロールと責任

| ワーキンググループの役割 | 担当者                                               | 役職                                                      |
|-----------------------|------------------------------------------------------|------------------------------------------------------------|
| エグゼクティブスポンサー | Ashley Kramer                                        | Acting CTO                                                 |
| ファシリテーター        | Justin Farris                                        | Senior Director of Product Management |
| 機能リード             | Wayne Haber                                          | Director of Engineering |
| 機能リード             | Christopher Lefelhocz                                | VP of Development                                          |
| 機能リード             | Valerie Karnes                                       | Director of Product Design |
| 機能リード             | Christie Lenneville                                  | VP of UX |
| 機能リード             | Mek Stittri                                          | VP of Quality |
| 機能リード             | David DeSanto                                        | VP of Product Management |
| 機能リード             | Farnoosh Seifoddini                                  | Head of Product Operations |
| 機能リード             | Lily Mai                                             | Staff Engineering Analyst |
| 機能リード             | Tanya Pazitny                                        | Director of Quality Engineering |
| メンバー               | Jennifer Li                                         | Engineering Manager, Engineering Productivity |
| メンバー               | John Hope                                            | Engineering Manager, Plan:Product Planning & Certify |
| メンバー               | Matt Wilson                                          | Senior Product Manager, Secure |
| メンバー               | Neil McCorrison                                      | Frontend Engineering Manager, Secure |
| メンバー               | Donald Cook                                          | Engineering Manager, Plan:Project Management |
| メンバー               | Cheryl Li                                            | Senior Engineering Manager, Verify |

## クロスファンクショナル優先順位付けプロセス

このプロセスはハンドブックの[ドキュメント](/handbook/engineering/workflow/cross-functional-prioritization/)に記載されています。

## マルチモーダルコミュニケーション

- フィードバックを求めるために、プロダクトに影響を与える全てのマージリクエストで（最低でも）関心のあるワーキンググループの機能リードと `gl-product-leadership` にタグを付けます。
- マージリクエストをコードオーナーのレビューおよびマージのために提出する前に、フィードバックを収集・対応するために 2 営業日待ちます。
- ワーキンググループの Slack チャンネルおよび/またはワーキンググループのスタンドアップミーティングで全マージリクエストをアナウンスして認知を高めます。
- 大きな変更と状況の更新は、`#product` `#vp-development` `#ux_leadership` `#quality-managers` `#eng-managers` `#development` の Slack チャンネルと、週次エンジニアリング作業レビュードキュメントでアナウンスします。
- 全ての Issue とマージリクエストに `wg-cross-functional-prioritization` ラベルを追加してトラッキングできるようにします
- PM オペレーションがラベル/マイルストーンでフィルタリングできるようにマイルストーンを追加します
- ラベル検索および/またはマイルストーンを使用して、PM やその他のクアッドグループ向けに約 2 週間ごとに変更をまとめます
