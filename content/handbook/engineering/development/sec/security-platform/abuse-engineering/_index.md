---
title: Abuse Engineering グループ
description: "Abuse Engineering グループは、GitLab プロダクトの不正利用を防止するコントロールを作成します"
upstream_path: /handbook/engineering/development/sec/security-platform/abuse-engineering/
upstream_sha: c649549e971e74175edf1d5bc1190fcc86e359e6
lastmod: 2026-08-13T15:10:33+03:00
translated_at: "2026-08-14T06:30:00+09:00"
translator: codex
stale: false
---

Abuse Engineering グループは、
[Security Platform ステージ](/handbook/engineering/development/sec/security-platform/)の一部です。
FY27 の Sec 再編以前は Anti-Abuse という名称でした。`group::anti-abuse` ラベルは
`group::abuse engineering` に変更されたため、その履歴は保持されています。

## ビジョン

私たちの目標は、GitLab 自体だけでなく、皆さんのアプリケーションにも内部脅威機能を提供することです。悪意のある活動、偶発的なリスク、侵害されたユーザーアカウントやインフラストラクチャコンポーネント、GitLab プラットフォームの異常な使用、そして実行可能な修復手順が存在するさまざまな高リスク行動を、事前に特定できるよう支援します。

## 方向性

- [インスタンスのレジリエンス](https://about.gitlab.com/direction/software_supply_chain_security/#instance-resiliency)
- [内部脅威](https://about.gitlab.com/direction/software_supply_chain_security/#insider-threat)

## 計画

私たちの[計画 Issue](https://gitlab.com/gitlab-org/modelops/anti-abuse/team-tasks/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=Planning%20Issue)は、現在取り組んでいることと、次に取り組むことの SSOT です。また、これらを `workflow` の観点から確認できる [Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/4292845?not%5Bmilestone_title%5D=Backlog&label_name[]=group%3A%3Aanti-abuse&group_by=epic)もあります。Issue リストを維持するため、リーダーシップ（EM+PM）がリストをトリアージされた状態に保ちます。

### ワークフロー

私たちは、Govern::Authorization の仲間と同じ[ワークフローパターン](../authorization/#workflow)に従います。

## イテレーション

[MVC](/handbook/values/#minimal-valuable-change-mvc)の構築方法を計画する際には、[マージリクエストを垂直方向と水平方向のどちらで分割するかのトレードオフ](/handbook/engineering/workflow/iteration/#tradeoffs-between-horizontal-and-vertical-slicing)を認識する必要があります。各イテレーションでスコープを縮小することが推奨されます。

要件が変化することがあり、コードベースの難しい領域が明らかになるにつれて複雑さが増す可能性があるため、明確さを保てるよう Issue の要件を最新の状態に維持するよう努めます。

私たちは、Engineering ファンクションが定める[イテレーションプロセス](/handbook/engineering/development/principles/#iteration)に従います。

## 週次の非同期 Issue 更新

私たちは、Govern::Authorization の仲間と同じ[週次の非同期 Issue テンプレート](../authorization/#weekly-async-issue-updates)を使用します。

## グループメンバー

 [Anti-abuse グループ](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/authorization/)には、GitLab 上で `@gitlab-org/modelops/anti-abuse` を使って `@` メンションできます。

次の人々は、グループの常任メンバーです。

{{< team-by-manager-slug manager="jayswain" team="(?i)Engineer(.*)Govern:Anti-abuse" >}}

## チームミーティング

私たちのグループでは、非同期での議論について、さらに明確にして認識を合わせるために同期ミーティングを開催します。チームメンバーは複数のタイムゾーンに分散しており、予定された時間に参加できないことも多いため、すべてのミーティングを[録画する](/handbook/tools-and-tips/zoom/)ことを目指しています。

毎週のチーム同期ミーティングは、[AMER](https://drive.google.com/drive/folders/1ZPjzqSaMslSQXe7ZA0IHK4gbCTv25MYC?usp=sharing)と [AMER/APAC](https://drive.google.com/drive/folders/1wLdWWi3f6Aho6E2m4Xbhv1Nuoy_ZSC1e?usp=sharing)に都合のよい時間帯を交互に設定して開催します。火曜日 18:30 UTC と水曜日 00:00 UTC です。

## コラボレーション

私たちの[ステーブルカウンターパート](/handbook/product/categories/#software-supply-chain-security-stage)と、必要な限り緊密に連携することが推奨されます。

連携する可能性のある他のチームには、次が含まれますが、これらに限定されません。

- [Sec:Authentication](/handbook/engineering/development/sec/security-platform/authentication/)
- [Growth:Acquisition and Activation](/handbook/engineering/development/growth/)
- [Fulfillment:Fulfillment Platform](/handbook/engineering/development/fulfillment/fulfillment-platform/#team-members)

カウンターパートに協力を求める状況の例を次に示します。

- [登録フローに大きな変更を加える際、Govern:Authentication and Authorization のレビューを依頼する](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/99193#note_1120182366)
- [Zuora に関わる変更を行う際、Fulfillment のレビューを依頼する](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/96994#note_1089045221)
- ユーザーのサインアップやログイン方法に影響する変更を行う際、`#f_signup_registration`（Slack、GitLab 社内）で議論する

### Abuse のメンテナンス

Anti-abuse チームは、プラットフォーム上の不正利用を軽減するため、[Trust and Safety](/handbook/security/security-operations/trustandsafety/)と緊密に連携しています。Trust and Safety が、不正利用を軽減する取り組みを支援するために、私たちのチームへ[機能やメンテナンスを依頼する](https://gitlab.com/gitlab-org/modelops/anti-abuse/team-tasks/-/issues/new?issuable_template=abuse_maintenance)ことは珍しくありません。優先順位付けされたリクエストは、[Abuse Maintenance エピック](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=group%3A%3Aanti-abuse&or%5Blabel_name%5D%5B%5D=workflow%3A%3Aready%20for%20development&or%5Blabel_name%5D%5B%5D=workflow%3A%3Ain%20dev&or%5Blabel_name%5D%5B%5D=workflow%3A%3Ascheduling&epic_id=773187&first_page_size=20)に整理されています。

#### Pipeline Validation Service の責任

[PVS](https://gitlab.com/gitlab-org/modelops/anti-abuse/pipeline-validation-service)は、Anti-abuse チームが所有する社内サービスです。ヒューリスティックベース（テキストマッチングなど）のルールと、行動ベース（重複ビルドなど）のルールを組み合わせています。[Trust and Safety チーム](/handbook/security/security-operations/trustandsafety/)がこのサービスを最も活用し、機能リクエストの顧客としての役割を果たします。

#### ヒューリスティックルール

暗号通貨マイニング攻撃の性質上、ヒューリスティックは急速に変化するため、迅速に実装する必要があります。そのため T&S は、ヒューリスティックベースのマージリクエストを PVS に提出するか、代わりに Anti-abuse チームへ[これらの変更を依頼する](https://gitlab.com/gitlab-org/modelops/anti-abuse/pipeline-validation-service/-/issues/new?issuable_template=pvs_miss)ことが推奨されます。

#### 行動ルール

行動ルールは変化がより緩やかで、非常に限定的なヒューリスティックルールと比べて、はるかに広い範囲を対象にする可能性があります。行動ルールへの変更は T&S から提案され、Anti-abuse チームが実装することが期待されています。

#### 重大度と優先度

Anti-abuse が適切に対応できるよう、T&S が作成するすべての Issue とマージリクエストに[重大度](/handbook/security/engaging-with-security/#severity-and-priority-labels-on-security-issues)および優先度が追加されます。

優先度は、攻撃者が再び戻ってくることによる影響と可能性に基づきます。

#### イテレーション

Anti-abuse は、真陽性に影響を与えずに偽陽性率を低減できる機会がないかを確認するため、PVS アラートの正確性を定期的にレビューします。Trust and Safety は、そのために必要な情報の提供を支援します。

## リンクとリソース {#links}

- 私たちの Slack チャンネル
  - Govern:Authorization [#g_govern_anti-abuse](https://gitlab.enterprise.slack.com/archives/C03EH5HCLPR)
