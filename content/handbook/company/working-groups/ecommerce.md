---
title: "E コマース モーション"
description: "セルフサービスの E コマース購入体験を加速させる改善"
upstream_path: /handbook/company/working-groups/ecommerce/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T12:00:00Z"
translator: claude
stale: false
lastmod: "2024-05-14T21:58:35+00:00"
---

## 属性

| プロパティ        | 値           |
|-----------------|-----------------|
| 作成日          | 2022-01-24 |
| 終了日          | 2022-07-29 |
| Slack           | [#wg-ecommerce-motion](https://gitlab.slack.com/archives/C03012Y7UHH)（社内からのみアクセス可） |
| Google Doc      | [E コマース モーション ワーキンググループ アジェンダ](https://docs.google.com/document/d/1FoUek4p2ELwuQT4IY-nQof4ft2udG2Ks_jFQiIrn7is/edit#heading=h.hhbpi9bc829)（社内からのみアクセス可） |

## ビジネスゴール

セルフサービスと E コマースは、ビジネスの成功における重要なレバーです（現在はトップクロスファンクショナルイニシアチブの一部でもあります）。これらは顧客満足と採用を促進し、GTM の効率を高め、チャネル開発を支援し、最終的には収益拡大と市場でのポジション向上につながります。

ビジネスの需要が複雑化し、セルフサービスが関わる領域が増えるにつれて、一つの共通セルフサービス戦略に整合することが重要になります。

このグループのゴールは、セルフサービスを最も効果的に提供する方法を定義し、現状と長期的なビジョン・目標とのギャップを埋めることです。

*注記: [Zuora SSOT](https://gitlab.com/groups/gitlab-org/-/epics/4664) は、このワーキンググループから生じるすべてのシステム変更の前提条件です。COTS ソリューションの活用を推奨する場合でも、この作業を完了することで、よりスケーラブルかつ効率的なイテレーションが可能になります。*

## 前提条件

*このワーキンググループの推奨を進める前に完了しなければならない前提条件を特定しました。これらは今まで大きな進捗を妨げてきており、追加投資（構築または購入）の前に対処しないと状況はさらに悪化します。*

| 前提条件 | 根拠 |
| -------------| ----------|
| [Zuora SSOT](https://gitlab.com/groups/gitlab-org/-/epics/4664) | Zuora が製品カタログおよび顧客の購入情報（サブスクリプション・請求書・支払い等）の SSOT となる必要がある |
| [顧客をファーストクラス市民として扱う](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/1874) | 2022 年 2 月時点ではユーザーをサブスクリプションにマッピングしているが、Zuora アカウントは顧客にマッピングされている。新しいまたは改善されたシステムへのスケールアップ前にこの問題を解決する必要がある |
| [SSO](https://gitlab.com/gitlab-org/customers-gitlab-com#1868) | 2022 年 2 月時点で顧客は GitLab.com アカウントと customers.gitlab.com のアカウントの 2 つのログインを持てる。これらを統合して単一の SSO システム（GitLab.com アカウント）を維持する必要がある |
| アカウント管理アクセス制御 & 請求ロール | 管理者が顧客組織においてサブスクリプション管理責任者とは限らない。正しい担当者がアクセスできるよう、請求ロール・請求権限・権限セット（実際の解決策はまだ TBD）をサポートするソリューションが必要 |

## 終了基準 {#exit-criteria}

1. すべての前提条件を適切なチームのロードマップで特定・優先順位付けする（WG は実施・実行は担当しない）
1. 長期目標を達成する方法に関する推奨事項（構築 vs 購入の評価を含む）
1. E コマース統合作業を実行する追加ロールを提案・公募する

## タイムライン

### パス 1（2022-02-02 > 2022-02-18）- 2 週間

1. JTBD フレームワークですべてのチーム・部門のセルフサービスビジネスニーズの長期 / 将来像を定義する [コラボレーター入力](https://docs.google.com/spreadsheets/d/12dyu-mwO8lOPBFOWzGCbRd8RL3N0WHatPg7VWC6ljUo/edit#gid=1877539157) [ドキュメント](https://docs.google.com/spreadsheets/d/1fLrF03aXN_EOKcRQr09_Ik8UyegWwk355msSJUgZiNA/edit#gid=0)
    1. Kazem Kutob
    1. Omar Fernandez
1. セルフサービス機能の現状を定義する [ドキュメント](https://docs.google.com/spreadsheets/d/1VUToeirsvW1KBfuRuz0Rx0buyBW4Mgv0jn7ufnSZhrU/edit#gid=1280279157)
    1. Omar Fernandez
    1. Alex Martin

### パス 2（2022-02-18 > 2022-04-08）- 7 週間

1. ウィッシュリストをベンダーが活用できる機能ファミリー・機能にまとめ、技術的なコンポーネントもカバーする
    1. Bryan Wise と Mark Quitevis
    1. Kazem Kutob
    1. Jerome Ng
1. ベンダー（および CustomersDot）から機能に関するインプットを受け取る
    1. Bryan Wise と Mark Quitevis
    1. Jerome Ng
1. 統合要件と タイムラインの概算を構築する
    1. Jerome Ng

### パス 3（2022-04-08 > 2022-04-19）- 2 週間

1. 長期目標を達成する方法に関する推奨事項（構築 vs 購入の評価を含む）
    1. Justin Farris

## スコープ外

1. このアクティビティの一環として詳細な RFP やベンダー評価・選定は行わない
1. E コマースを実現するためのクロスファンクショナルな価値観と運用原則の整合はこの WG のスコープ外だが、次フェーズで別の形式でフォローアップされる可能性がある

## ロールと責任

**コントリビューター**

終了基準の達成に責任を持つ DRI。同期的な議論に参加し、レビュアーと協力してインプット・フィードバックを収集することが求められます。RACI フレームワークの「Responsible」および「Accountable」に相当。

**コラボレーター**

ビジネス要件またはドメイン専門知識を持つステークホルダー。コントリビューターにインプットを提供します。定期的または同期的な参加は不要で、コントリビューターと非同期で関与します。RACI フレームワークの「Consulted」および「Informed」に相当。

| ワーキンググループのロール    | 担当者                | 役職                                           |
|-----------------------|-----------------------|-------------------------------------------------|
| エグゼクティブスポンサー | Ryan O'Nell | VP Commercial |
| ファシリテーター | Kazem Kutob | Director, Online Sales & Self Service |
| コントリビューター | Justin Farris | Sr Director, Product Monetization |
| コントリビューター | Alex Martin | Sr Manager, Online Sales |
| コントリビューター | Bryan Wise | VP, IT |
| コントリビューター | Jerome Z Ng | Sr Engineering Manager, Fulfillment |
| コントリビューター | Omar Fernandez | Interim Director of Product, Fulfillment |
| コントリビューター | Jerome Ng | Sr Engineering Manager, Fulfillment |
| コントリビューター | Mark Quitevis | Sr Business Systems Analyst |
| コラボレーター | Tatyana Golubeva | Principal PM, Purchase |
| コラボレーター | Emily Sybrant | Product Designer, Purchase |
| コラボレーター | James Lopez | Backend Engineering Manager, Fulfillment:License |
| コラボレーター | Tyler Amos | Staff Backend Engineer, Fulfillment:License |
| コラボレーター | Hila Qu | Director of Product, Growth |
| コラボレーター | Christopher Nelson | Sr Director, Enterprise Applications |
| コラボレーター | Jessica Salcido | Finance Systems Administrator |
| コラボレーター | Daniel Parker | Senior Integrations Engineer, Business Technology |
| コラボレーター | Sarah McCauley | Finance |
| コラボレーター | Michelle Hodges | VP, Channel Sales |
| コラボレーター | Jack Brennan | Sr Director, Sales Systems |
| コラボレーター | David Duncan | VP Marketing |
| コラボレーター | Michael Preuss | Director, Digital Experience |
| コラボレーター | Sindhu Tatimatla | Director, Analytics & Insights |
| コラボレーター | Cheri Holmes | Chief of Staff to CRO |
| コラボレーター | Jake Bielecki | Sr Director, Sales Strategy and Ops |
| コラボレーター | Shaun McCann | Director, Support Engineering |
| コラボレーター | Jesse Rabbits | Sr. Manager, Deal Desk |
