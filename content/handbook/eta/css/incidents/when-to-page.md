---
title: "ページ通知するタイミング"
description: "Customer Support Systems チームにページ通知するタイミングの基準"
upstream_path: /handbook/eta/css/incidents/when-to-page/
upstream_sha: 52419353ea755a1ac823553385f8636ff2fcde17
lastmod: "2026-10-30T09:21:53+11:00"
translated_at: "2026-11-01T18:10:38+00:00"
translator: codex
stale: false
---

{{% alert title="ページ通知が必要だとすでに判断していますか？" color="primary" %}}

ページ通知が必要だとすでに判断している場合は、[Customer Support Systems へのページ通知](/handbook/eta/css/pagerduty/oncall/#paging-customer-support-systems)に直接進んでください。

{{% /alert %}}

このページでは、Customer Support Systems チームにページ通知すべき場合と、すべきでない場合を説明します。ページ通知はオンコール担当者の作業を中断させるため、次の CSS チームメンバーがオンラインになるまで本当に待てない状況に限定してください。

インシデントが報告された後に Customer Support Systems がどのように対応するかについては、[インシデント](/handbook/eta/css/incidents/)を参照してください。

## ページ通知は影響に基づいて判断します {#paging-is-based-on-impact}

私たちは、コンポーネントが故障したかどうかではなく、**影響**に基づいてページ通知します。何かが壊れていても、影響が最小限であれば、ページ通知する必要はありません。

判断する際は、次の 1 点を自問してください。

> 私たちは引き続きお客様にサービスを提供できますか？

答えが「いいえ」（または「もう長くは続けられない」）で、実行可能な回避策がなければ、ページ通知すべき状況と考えられます。影響を受けるシステムの[重要度レベル](/handbook/eta/css/criticalities/)も、影響の深刻さを判断する参考になります。

## Customer Support Systems にページ通知する場合 {#page-customer-support-systems-when}

1. **私たちが管理するシステムが停止または故障しており、お客様に大きな影響があり、実行可能な短期的回避策がない場合。**
   - 例：Zendesk Global または Zendesk US Government の停止、または大幅な性能低下。
1. **障害によって Support の相当数のメンバーがチケットへの対応や、お客様に関わる主要なワークフローを実行できなくなっている場合**。お客様がまだ気づいていなくても対象になります。
   - 例：Ticket Processor がチケットを処理していない。
   - 例：Salesforce から Zendesk への同期が動作していない。
   - 例：Support Ops Super App または Salesforce の連携に障害が発生し、Support がお客様のアカウントやチケットに関わる主要なワークフローを実行できない。
1. **私たちが所有する自動化や連携が、現に被害を引き起こしている場合。** これには、お客様への誤った連絡や重複した連絡の送信、データの誤った変更や削除、誤った相手へのデータ公開が含まれます。
   - 例：トリガーや自動化によって、お客様に誤ったメールが大量送信されている。
   - 例：AI エージェントの連携がお客様に不適切な応答をしている。
1. **私たちのシステムに関わるセキュリティ上またはコンプライアンス上の問題が疑われる場合。**
   - 例：トークンや認証情報が侵害された疑いがある。
1. **宣言済みの GitLab インシデントを解決するために、Customer Support Systems の関与が必要な場合。**
   - 例：インシデントによるお客様への影響に対応するため、Support が Zendesk の緊急変更（一時的なトリガー、チケットの一括操作、フォームの変更など）を必要としている。

## Customer Support Systems にページ通知しない場合 {#do-not-page-customer-support-systems-when}

1. **妥当な回避策があり、次の CSS チームメンバーがオンラインになるまで影響を許容できる場合。**
1. **問題が見た目に関するもの、または 1 人もしくは少数のユーザーに影響するものである場合。**
   - 例：1 人の担当者がビューを表示できない、またはマクロに誤字がある。
1. **レポートやダッシュボードだけに影響する場合。**
   - 例：Zendesk Explore のレポートやダッシュボードが壊れている、または誤ったデータを表示している。
1. **変更や新機能のリクエストである場合。**
   - 例：Support Portal の変更、新しいマクロ、既存のトリガーの変更。

## 例 {#examples}

以下の表に、よくある状況を示します。これは指針であり、すべての状況を網羅したものではありません。常に[影響についての問い](#paging-is-based-on-impact)に立ち返ってください。

| 状況 | ページ通知するか？ | 理由 |
|----------|:-----:|-----|
| Zendesk Global または Zendesk US Government が停止している | はい | お客様にサービスを提供できない |
| Ticket Processor がチケットを処理していない | はい | Support の主要なワークフローが機能しなくなる |
| Salesforce から Zendesk への同期が失敗している | はい | Support の主要なワークフローが機能しなくなる |
| Super App または Salesforce の連携に障害が発生し、アカウントやチケットのワークフローが妨げられている | はい | Support の主要なワークフローが機能しなくなる |
| 自動化がお客様に重複したメールを送信している | はい | 現にお客様に被害を与えている |
| Explore のダッシュボードが読み込まれない | いいえ | レポートのみ |
| 1 人の担当者に権限の問題がある | いいえ | 1 人のユーザーに影響する |
| Support Portal を変更するリクエスト | いいえ | 機能リクエストであり、インシデントではない |

## 判断に迷う場合 {#when-you-are-unsure}

上記の基準を満たすかどうか判断できない場合は、まず Slack の [#customer_support_systems](https://gitlab.enterprise.slack.com/archives/C018ZGZAMPD) チャンネルで報告してください。

30 分以内に応答がなく、影響が拡大している場合は、Customer Support Systems にページ通知してください。

{{% alert title="対応時間" color="warning" %}}

Customer Support Systems は現在、Slack での 24 時間 365 日の対応を行っていません。APAC/AMER の勤務時間外に、問題が [Customer Support Systems にページ通知する](#page-customer-support-systems-when)基準を満たす場合は、Slack の応答を待たずにページ通知してください。

{{% /alert %}}
