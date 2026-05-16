---
title: Very Breached Ticket（重度SLA違反チケット）
description: Very Breached Ticket の定義と、これらに対処するためのツールおよびプロセスを説明します。
category: Manager
subcategory: 
last-reviewed: 2023-09-14
upstream_path: /handbook/support/workflows/very_breached_tickets/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T05:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-18T16:23:34+13:00"
---

## 概要

Very Breached Ticket（VBT）とは、FRT SLA に違反したまま、違反後さらに 2 営業日が経過しても応答されていない New 状態のチケットを指します。発生頻度は低いものの、発生した際には緊急の介入が必要となります。チケットがこの状態に至るのを未然に防ぐことが望ましいですが、本プロセスは万一の発生時に検出するセーフティーネットとして機能し、これらのチケットが緊急対応で FRT 応答を受けられるようにします。

### Very Breached Ticket（VBT）の判定基準

以下のすべての条件を満たすチケットが VBT と見なされます。

- チケットが FRT（First Response Time）ステージにある
- チケットがその優先度に該当する FRT SLA に違反している
- FRT SLA 違反から 2 営業日が経過している

これに加えて、Emergency フォームで受け付けたチケットのうち NRT SLO に 2 営業日以上違反したものについてもアラートが発報されます。

### Very Breached Ticket（VBT）の顧客への影響

チケットが VBT の基準に達した時点で、顧客は最初の応答を以下の期間にわたって待たされていることになります。

- 高優先度チケット（応答時間 4 時間）: SLA 時間の **13 倍** を待っている状態
- 通常優先度チケット（応答時間 8 時間）: SLA 時間の **7 倍** を待っている状態
- 低優先度チケット（応答時間 24 時間）: SLA 時間の **3 倍** を待っている状態

## アラートのプロセス

VBT Slackbot は各リージョンの業務開始時刻付近で 1 日に 3 回実行されます。実行時に VBT が存在する場合、Slack の [`#spt_leaders-daily`](https://gitlab.enterprise.slack.com/archives/C03LL7Z2291) チャンネルに、基準を満たすチケットのリストを伴った Slack アラートを送信します。

## 対応と結果

アラートに記載されたすべてのチケットは、次のリージョンの業務開始までに First Response を受け取ることが期待されます。各リージョンには、リスト内のチケットへの対処方法について柔軟性があります。

アラートに挙げられたすべてのチケットに first response の明確な計画ができたら、bot のメンションに `:white_check_mark:` リアクションを追加してアラートが対処済みであることを示してください。

各リージョンにおける対応と結果の達成方法の詳細は以下のとおりです。

### APAC

- サポートマネージャーが `:eyes:` 絵文字をメンションに追加し、自身がアラートの DRI であることを示します。
  - 03:00 UTC までにメンションに `:eyes:` が付かない場合は、オンコール中のサポートマネージャーが DRI を務める必要があります。
    - マネージャー DRI は、その日のシニアサポートエンジニアに代わりに責任を委譲することもできます。アラートへのスレッド返信で `@` メンションし、リスト内のすべてのチケットに FRT を提供する SE を見つけるよう支援を依頼します。この場合、シニア SE が `:eyes:` および後の `:white_check_mark:` 絵文字を付ける責任を負います。
- DRI はリストを確認し、サポートエンジニアと連携して、EMEA のアラート実行前に各チケットへ応答が行われるようにします。
- VBT DRI の役割は以下の理由により、APAC 時間の早めの時間帯に実施する必要があります。
  - 全般的に、VBT がさらに違反状態となるのを避けるため。
  - EMEA が業務を開始する前に VBT を解消するための十分な時間が必要となるため（EMEA のメンションは 07:00 UTC に発生します）。

### EMEA

- TBD

### AMER

- TBD

## 付録: 参考資料とリソース

- 起点となった議論の [Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/5231)
- ロールアウト通知の [Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/5486)（変更記録）
- Support Ops VBT Slackbot [プロジェクト](https://gitlab.com/gitlab-com/support/support-ops/other-software/vbt-slackbot)
