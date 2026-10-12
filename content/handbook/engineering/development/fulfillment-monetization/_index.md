---
title: Fulfillment と Monetization の業務の進め方
description: "Fulfillment セクションと Monetization セクションに共通する、プロジェクト管理プロセス、安定したカウンターパート、チャンネル。"
upstream_path: "/handbook/engineering/development/fulfillment-monetization/"
upstream_sha: "2dbfc49e47c784740ced3e2c617530f365412492"
lastmod: "2026-10-01T08:11:54+02:00"
translated_at: "2026-10-11T23:57:10+00:00"
stale: false
translator: codex
---

[Monetization](/handbook/engineering/development/monetization/)と [Fulfillment](/handbook/engineering/development/fulfillment/)の両セクションは、共通の業務の進め方に従います。Monetization ページの CustomersDot のエンジニアリングやインシデント対応プロセスなど、セクション固有の内容は各セクションのページに記載しています。

## 共通の Slack チャンネル {#shared-slack-channels}

| チャンネル | 目的 |
|---------|---------|
| [#fulfillment_monetization_fyi](https://gitlab.slack.com/app_redirect?channel=fulfillment_monetization_fyi) | 両セクションへの質問窓口 |
| [#fulfillment_monetization_engineering](https://gitlab.slack.com/app_redirect?channel=fulfillment_monetization_engineering) | 共通のエンジニアリング用チャンネル |
| [#fulfillment_monetization_daily](https://gitlab.slack.com/app_redirect?channel=fulfillment_monetization_daily) | 毎日のスタンドアップの報告 |
| [#fulfillment_monetization_pm](https://gitlab.slack.com/app_redirect?channel=fulfillment_monetization_pm) | プロダクトマネジメント |
| [#fulfillment_monetization_design](https://gitlab.slack.com/app_redirect?channel=fulfillment_monetization_design), [#fulfillment_monetization_research](https://gitlab.slack.com/app_redirect?channel=fulfillment_monetization_research) | Product Design と UX Research |
| [#fulfillment_monetization_speak_spark](https://gitlab.slack.com/app_redirect?channel=fulfillment_monetization_speak_spark) | 交流 |

窓口チャンネルで質問した場合は、回答を得たら ✅ のリアクションを付けてください。お客様の緊急の問題には [STAR エスカレーション](/handbook/support/internal-support/support-ticket-attention-requests/)を利用します。お客様に関わるライセンスやサブスクリプションのリクエストには、[内部リクエストフォーム](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/)を利用してください。

## 安定したカウンターパート {#stable-counterparts}

### Sales と Go-To-Market {#sales-and-go-to-market}

{{< member-and-role-by-gitlab "cnodari" "jrabbits" "Gsodhi" >}}

### Finance と IT {#finance-and-it}

{{< member-and-role-by-gitlab "s_mccauley" "annapiaseczna" "andrew_murray" "smundy" "lmendonca2" >}}

### Support Engineering {#support-engineering}

{{< member-and-role-by-gitlab "jlyttle" "mdunninger" "kslaats" >}}

### Product Technical Program Management {#product-technical-program-management}

{{< member-and-role-by-gitlab "cersoz" >}}

## プロジェクト管理プロセス {#project-management-process}

私たちは透明性をもって業務を進め、ほぼすべてを公開し、[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/#workflow-summary)に従います。

### SAFE {#safe}

私たちの業務では、財務情報や機密性の高い情報を扱います。[SAFE](/handbook/legal/safe-framework/)に該当するエピック、Issue、動画、MR は機密扱いとし、公開できない内容には[社内ハンドブック](https://internal.gitlab.com/handbook/product/fulfillment/)を使用してください。[将来のバージョンでの機能提供の約束](https://docs.gitlab.com/ee/development/documentation/styleguide/availability_details.html#promising-features-in-future-versions)を参照してください。

### 計画 {#planning}

[プロダクト開発タイムライン](/handbook/engineering/workflow/#product-development-timeline)に従い、月次のマイルストーンで計画します。各グループには、優先順位を付けた Issue とキャパシティを記載する[計画 Issue](https://gitlab.com/gitlab-org/fulfillment/meta/-/work_items/?sort=priority_desc&state=opened&label_name%5B%5D=Planning%20Issue&first_page_size=100)があります。26 日頃に PM と EM が候補の Issue をレビューし、ウェイトを付けます。1 日までにスコープを確定します。

エンジニアは、最初に `Deliverable` の Issue に取り組み、その後、マイルストーンに残っている Issue の上位から選びます。定期的な運用業務（監視ローテーション、トリアージ）は、キャパシティに算入するため、ウェイトを付けた Issue として計画します。

### 作業依頼の受付 {#intake-request}

ロードマップに関わる作業を依頼するには、[受付 Issue](https://gitlab.com/gitlab-org/fulfillment/meta/-/work_items/new?type=ISSUE&description_template=intake)を作成し、PM にタグ付けします。PM は依頼を評価し、ロードマップ上にエピックを作成し、受付 Issue からリンクしたうえで受付 Issue をクローズします。このプロセス外のリクエストには対応しません。

### 優先順位付け {#prioritization}

[優先順位付けのフレームワーク](/handbook/product/product-processes/#prioritization)と[部門横断の優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/)に従います。判断材料には SLA、OKR、[Support の優先 Issue リスト](/handbook/support/license-and-renewals/workflows/managing_product_issues/#supports-issue-list-for-fulfillment)、技術的負債を含めます。会社の新規作業と保守の 60/40 という配分は、規則ではなく指針として使用します。各グループは OKR でそのバランスを設定し、必要に応じてセクションにエスカレーションします。すべてのチームが、部門横断のダッシュボードレビューのために[月次の優先順位付けテンプレート](https://gitlab.com/gitlab-org/fulfillment-meta/-/blob/master/.gitlab/issue_templates/monthly-prioritization.md)を使用します。

### 見積もり {#estimation}

事前調査の後、通常は計画時に見積もりを行います。

| ウェイト | 説明 |
|--------|-------------|
| 1 | 可能な限り最も単純な変更で、副作用がありません。 |
| 2 | 単純な変更で、要件を完全に理解しています。 |
| 3 | 単純ですが影響範囲がより広い変更です。要件は明確です。 |
| 5 | 複数の領域にまたがる複雑な変更で、リファクタリングを伴う可能性があります。いくらか不明な点が残っていると考えられます。 |
| 8 | コードベースの多くに関わる、または多くの意見を必要とする複雑な変更です。 |
| 13 | 依存関係と不明確な要件を伴う大きな変更です。コミットする前に分割してください。 |

私たちは[予測可能性よりも開発速度](/handbook/engineering/development/principles/#velocity)を重視しますが、業務が部門横断にわたるため、80% の予測可能性を目指します。確信が持てない場合は、多めに見積もるか、[スパイク](/handbook/product/product-processes/#spikes)と実装の Issue に分割します。見積もりが変わった場合はすぐに修正し、PM に伝えてください。

### 毎週の非同期 Issue 更新 {#weekly-async-issue-updates}

エンジニアは、割り当てられた Issue を毎週更新します：

```markdown
### Async issue update

1. Current status (one sentence):
1. Confidence this lands in the milestone: not / slightly / very
1. Can this be broken down further? yes / no
1. Were expectations from the last update met? If not, why:

/health_status on_track | needs_attention | at_risk
```

大規模なプロジェクトでは、親エピックに毎週ステータスを投稿し、完了率、主要な期日に対する進捗、リスクとブロッカーおよびその軽減策、成果を報告します。

### デモ {#demos}

[Fulfillment Demos プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KpOKxufy-slaR-6swIfkDLP)のデモを通じて、[デモのプロセス](/handbook/engineering/workflow/demos/)に従い、複数のマイルストーンにまたがる作業の進捗を共有します。説明欄にエピックまたは MR をリンクしてください。

### ユーザー体験 {#user-experience}

Product Designers は [Product Design のワークフロー](/handbook/upstream-studios/product-design/workflow/)に従い、グループではなくプロジェクトに割り当てられます。その割り当ては、[UX の優先順位 Issue](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/?label_name%5B%5D=Fulfillment%20UX%20Priorities)で四半期ごとにレビューします。中規模・大規模のプロジェクトでは、`[UX]` Issue をデザインの SSOT として使用します。UX の支援や MR レビューは、[#fulfillment_monetization_design](https://gitlab.slack.com/app_redirect?channel=fulfillment_monetization_design)で依頼してください。

### 振り返り {#retrospectives}

月次の[非同期の振り返り](/handbook/engineering/careers/management/group-retrospectives/)を、8 日以降に [gl-retrospectives/fulfillment](https://gitlab.com/gl-retrospectives/fulfillment/issues/)で行い、その後、26 日頃にタイムゾーンを持ち回りにして、録画する同期ディスカッションを行います。グループは、特定の Issue やエピックについて、四半期ごとの[イテレーションの振り返り](/handbook/engineering/workflow/iteration/)を行うこともできます。

## オンボーディングと交流 {#onboarding-and-social}

新しいエンジニアは[オンボーディングテンプレート](https://gitlab.com/gitlab-org/fulfillment-meta/-/blob/master/.gitlab/issue_templates/onboarding.md)を使用し、オンボーディングバディが付きます。任意参加の毎週の交流会と四半期ごとの[チームデー](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues?sort=created_date&state=all&label_name[]=Team+Day)は、[共有カレンダー](https://calendar.google.com/calendar/embed?src=gitlab.com_7199q584haas4tgeuk9qnd48nc%40group.calendar.google.com)に掲載しています。

## リンク {#links}

- [Fulfillment の方向性](/handbook/product/groups/fulfillment/direction/fulfillment_section/)
- [Fulfillment ガイド](/handbook/product/groups/fulfillment/)（CustomersDot の管理とプロセスのドキュメント）
- [Issue トラッカー](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues)
- [パフォーマンス指標](https://internal.gitlab.com/handbook/company/performance-indicators/product/fulfillment-section/)と[エンジニアリングダッシュボード](/handbook/product/groups/product-analysis/engineering/dashboards/)
- [ペアプログラミング](https://gitlab.com/gitlab-org/fulfillment/meta/-/tree/master/docs/pair_programming.md)
