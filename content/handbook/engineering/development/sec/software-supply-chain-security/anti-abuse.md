---
title: Anti-Abuse グループ
description: Anti-Abuse グループは GitLab 製品の不正使用を防止するためのコントロールを作成します
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/anti-abuse/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T08:31:27Z"
translator: claude
stale: false
lastmod: "2025-07-19T10:54:34-07:00"
---

## ビジョン

GitLab 自体だけでなく、アプリケーションに対するインサイダー脅威フィーチャーを提供することが目標です。悪意のある活動、偶発的なリスク、侵害されたユーザーアカウントやインフラコンポーネント、GitLab プラットフォームの異常な使用、および実行可能な修復手順が可能なさまざまな高リスク動作を積極的に特定するのに役立ちます。

## 方向性

- [Instance Resiliency](https://about.gitlab.com/direction/software_supply_chain_security/#instance-resiliency)
- [Insider threat](https://about.gitlab.com/direction/software_supply_chain_security/#insider-threat)

## プランニング

私たちの [プランニング Issue](https://gitlab.com/gitlab-org/modelops/anti-abuse/team-tasks/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=Planning%20Issue) は、現在取り組んでいること、および次に取り組むことの SSOT（信頼できる唯一の情報源）です。`workflow` の観点からこれらを確認するための [Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/4292845?not%5Bmilestone_title%5D=Backlog&label_name[]=group%3A%3Aanti-abuse&group_by=epic) もあります。Issue リストを維持するために、リーダーシップ（EM+PM）がリストのトリアージを管理します。

### ワークフロー

私たちは Govern::Authorization の仲間と同じ [ワークフローパターン](authorization.md#workflow) に従います。

## イテレーション

[MVC](/handbook/values/#minimal-valuable-change-mvc) の構成方法を計画する際には、[MR を垂直・水平にスライスするトレードオフ](/handbook/engineering/workflow/iteration/#tradeoffs-between-horizontal-and-vertical-slicing) を意識する必要があります。各イテレーションのスコープ削減を奨励します。

要件が変化したり、コードベースの困難な領域を発見したりすることで複雑さが増す可能性があるため、明確さのために Issue 要件を最新の状態に保つよう努めます。

エンジニアリング機能が定めた [イテレーションプロセス](/handbook/engineering/development/principles/#iteration) に従います。

## 週次非同期 Issue 更新

私たちは Govern::Authorization の仲間と同じ [週次非同期 Issue テンプレート](authorization.md#weekly-async-issue-updates) を使用します。

## グループメンバー

 [Anti-abuse グループ](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/authorization/) は、GitLab で `@gitlab-org/modelops/anti-abuse` とメンションできます。

以下の方々がグループの永続的なメンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/software-supply-chain-security/anti-abuse/#group-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## チームミーティング

私たちのグループは、非同期の議論に追加の明確さと整合性を得るために同期ミーティングを開催します。チームメンバーが複数のタイムゾーンに分散しており、定められた時間に参加できないことも多いため、すべてのミーティングを [録画](/handbook/tools-and-tips/zoom/) することを目指しています。

AMER フレンドリーと AMER/APAC フレンドリーの時間帯を交互に使用した週次チーム同期ミーティングがあります: 火曜日 18:30 UTC と水曜日 00:00 UTC（[AMER](https://drive.google.com/drive/folders/1ZPjzqSaMslSQXe7ZA0IHK4gbCTv25MYC?usp=sharing)、[AMER/APAC](https://drive.google.com/drive/folders/1wLdWWi3f6Aho6E2m4Xbhv1Nuoy_ZSC1e?usp=sharing)）。

## コラボレーション

[安定したカウンターパート](/handbook/product/categories/#software-supply-chain-security-stage) と必要に応じて密接に協力することを奨励します。

コラボレーションする可能性のある他のチーム（これに限定されません）:

- [Govern:Authentication and Authorization](/handbook/engineering/development/sec/software-supply-chain-security/authentication/)
- [Growth:Acquisition and Activation](/handbook/engineering/development/growth/)
- [Fulfillment:Fulfillment Platform](/handbook/engineering/development/fulfillment/fulfillment-platform/#team-members)

カウンターパートと連携するタイミングの例:

- [登録フローに重要な変更を加える際の Govern:Authentication and Authorization レビューを求める](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/99193#note_1120182366)
- [Zuora が関わる変更を加える際の Fulfillment レビューを求める](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/96994#note_1089045221)
- ユーザーのサインアップやログイン方法に影響する変更を加える際は `#f_signup_registration`（Slack、GitLab 内部）で議論する

### アビューズメンテナンス

Anti-abuse チームは [Trust and Safety](/handbook/security/security-operations/trustandsafety/) と密接に協力して、プラットフォームでの不正使用を軽減します。Trust and Safety が不正使用軽減の取り組みを支援するために私たちのチームに [フィーチャーやメンテナンスをリクエスト](https://gitlab.com/gitlab-org/modelops/anti-abuse/team-tasks/-/issues/new?issuable_template=abuse_maintenance) することは珍しくありません。優先されたリクエストは [アビューズメンテナンスエピック](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=group%3A%3Aanti-abuse&or%5Blabel_name%5D%5B%5D=workflow%3A%3Aready%20for%20development&or%5Blabel_name%5D%5B%5D=workflow%3A%3Ain%20dev&or%5Blabel_name%5D%5B%5D=workflow%3A%3Ascheduling&epic_id=773187&first_page_size=20) で整理されています。

#### Pipeline Validation Service の責任

[PVS](https://gitlab.com/gitlab-org/modelops/anti-abuse/pipeline-validation-service) は Anti-abuse チームが所有する内部サービスです。ヒューリスティックベース（テキストマッチングなど）と動作ベースのルール（重複ビルドなど）の組み合わせです。[Trust and Safety チーム](/handbook/security/security-operations/trustandsafety/) がこのサービスを最も活用しており、フィーチャーリクエストの顧客として機能します。

#### ヒューリスティックルール

クリプトマイニング攻撃の性質上、ヒューリスティックは急速に変化し、迅速に実装される必要があります。したがって、T&S はヒューリスティックベースの MR を PVS に提出するよう招待されているか、または Anti-abuse チームに [これらの変更をリクエスト](https://gitlab.com/gitlab-org/modelops/anti-abuse/pipeline-validation-service/-/issues/new?issuable_template=pvs_miss) します。

#### 動作ルール

動作ルールは変化がより遅く、非常に広範なネットをキャストする可能性があります（非常に対象を絞ったヒューリスティックルールとは異なります）。動作ルールの変更は T&S から来ることが期待されており、Anti-abuse チームによって実装されます。

#### 重大度と優先度

[重大度](/handbook/security/#severity-and-priority-labels-on-security-issues) と優先度は、Anti-abuse がそれに応じて対応できるよう T&S が作成したすべての Issue/マージリクエストに追加されます。

優先度は、攻撃者が戻ってくる可能性の影響と可能性に基づきます。

#### イテレーション

Anti-abuse は PVS アラートの精度を定期的にレビューし、真のポジティブに影響を与えることなく偽陽性率を削減する機会を探します。Trust and Safety はこれを実施するために必要な情報を提供します。

## リンクとリソース {#links}

- Slack チャンネル
  - Govern:Authorization [#g_govern_anti-abuse](https://gitlab.enterprise.slack.com/archives/C03EH5HCLPR)
