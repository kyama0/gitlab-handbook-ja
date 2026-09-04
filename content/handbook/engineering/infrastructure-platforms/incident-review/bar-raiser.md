---
title: "インシデントレビュー Bar Raiser"
description: "インシデントレビュー Bar Raiser になることの意味、レビューの割り当て方法、Bar Raiser になる方法を説明します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/incident-review/bar-raiser/"
upstream_sha: "bc76a1a59f8b471f304263e712307581bdc7d128"
lastmod: "2026-08-20T12:31:43-06:00"
translated_at: "2026-09-04T22:10:05+09:00"
translator: "codex"
stale: false
---

このページでは、[Bar Raiser](/handbook/engineering/infrastructure-platforms/incident-review/#bar-raiser)のロールについて、
そのロールが何であるか、レビューがどのように割り当てられるか、参加するにはどうすればよいかを詳しく説明します。他のロールや完了基準を含む
インシデントレビュープロセス自体については、
[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)ページを参照してください。

## Bar Raiser とは {#what-a-bar-raiser-is}

Bar Raiser パネルは、すべてのインシデントレビューをレビューします。**レビューを終了するには、Bar Raiser の承認が必要です。**

Bar Raiser は、メンテナーがコードの基準を維持するのと同じように、インシデントレビューの高い基準を維持します。このロールの概要は、[インシデントレビューの Bar Raiser](/handbook/engineering/infrastructure-platforms/incident-review/#bar-raiser)セクションにあります。

## Bar Raiser ではないもの {#what-a-bar-raiser-is-not}

1. **作成者ではありません。** Bar Raiser は、レビューを書いたり、タイムラインを記入したり、是正措置を作成したりしません。
1. **スケジュールの責任者ではありません。** [レビュー SLO](/handbook/engineering/infrastructure-platforms/incident-review/#timeline-that-we-expect-for-reviews-to-be-completed)を
   満たせなかった場合、それは Bar Raiser ではなく DRI の責任です。
1. **修正の正式な承認者ではありません。** 承認は、レビューが理解と
   是正措置に関する私たちの基準を満たしていることを意味し、Bar Raiser 自身がコードや設定の変更を検証したことを意味するものではありません。
1. **責任追及を判定する関門ではありません。** レビューでは[責任を追及しません](/handbook/engineering/infrastructure-platforms/incident-review/#introduction)。
   レビューに責任追及が含まれていることに気付いた Bar Raiser は、表現を見直すよう求める必要があります。

## プロセス {#process}

### Bar Raiser の探し方 {#finding-a-bar-raiser}

Bar Raiser は、Primary と Secondary のローテーションがある
[Bar Raiser のオンコールスケジュール](https://app.incident.io/gitlab/on-call/schedules/01M0DVR0FZKQ2DSAKKGJQY26FX)を使用して、ローテーションで割り当てられます。

レビューを担当する Bar Raiser は、次の手順で探します。

1. [Bar Raiser のオンコールスケジュール](https://app.incident.io/gitlab/on-call/schedules/01M0DVR0FZKQ2DSAKKGJQY26FX)を確認し、
   **Primary** にレビューを依頼します。
1. Primary が不在の場合は、**Secondary** に依頼します。
1. 両方とも不在の場合は、
   [#incident-review-bar-raisers](https://gitlab.enterprise.slack.com/archives/C0BPK9Y6GMR)で `@gitlab-com/gl-infra/incident-review-bar-raisers` にメンションし、支援を依頼します。

このローテーションは、作業を公平に分担し、DRI が依頼先に迷わないようにするためのものです。インシデント対応のローテーションと同じ意味での
オンコールの義務ではありません。レビューは非同期で行われるため、Primary であっても
即時に応答する必要はなく、休暇やその他の予定に影響するべきではありません。不在時には、Secondary と
パネル全体が代わりに対応します。

### Bar Raiser レビューの依頼 {#requesting-a-bar-raiser-review}

[DRI](/handbook/engineering/infrastructure-platforms/incident-review/#dri)は、BR が迅速にフィードバックを提供できるように、インシデントレビューの初稿を作成したら、できるだけ早く Bar Raiser にレビューを依頼する必要があります。DRI は、インシデントレビュー Issue で Bar Raiser に「@」メンションしてレビューを依頼します。

### Bar Raiser レビューの実施 {#giving-a-bar-raiser-review}

Bar Raiser は、議論がレビューに紐づいた状態を保つため、インシデントレビュー Issue のコメントでフィードバックを提供します。レビューが
基準を満たしたら、Bar Raiser は Issue に承認を記録し、DRI がレビューを終了できるようにします。

Bar Raiser は次のことを行います。

1. レビューへのメンションや依頼から 12 時間以内の初回応答を目指します。これには、他の Bar Raiser に支援を求めるための返答も含まれます。

1. 新鮮な視点でレビューを読み、まだ尋ねられていない質問をするか、十分に深く
   回答されていない質問を改めて尋ねます
1. 寄与原因が単に記述されているだけでなく、本当に理解されているかを掘り下げます
1. 是正措置が本当の問題に対処しているか、また規模と優先度が
   適切かを問い直します
1. レビューが不完全、表面的、または明白な論点を掘り下げずに残している場合は、異議を唱えます
1. レビューが基準を満たしたら承認し、DRI がレビューを終了できるようにします

[レビュー実施のガイダンス](/handbook/engineering/infrastructure-platforms/incident-review/#guidance-for-conducting-a-review)
セクションには、是正措置を根本原因の種類にどのように合わせるべきかを含め、Bar Raiser が尋ねる可能性の高い質問を記載しています。
これらの質問は、両方のロールに共通する基準です。DRI はレビューを書きながら質問を検討し、
Bar Raiser はレビューしながら確認する必要があります。

## Bar Raiser になる方法 {#how-to-become-a-bar-raiser}

Bar Raiser には、お客様のためにオペレーショナルエクセレンスと信頼性の文化を築くことに関心がある人なら誰でもなれます。インシデントレビューの質の向上を支援したい場合は、次のようにします。

1. Slack の [#incident-review-bar-raisers](https://gitlab.enterprise.slack.com/archives/C0BPK9Y6GMR)に参加します。
1. そのチャンネルの既存の Bar Raiser に、
   [incident-review-bar-raisers グループ](https://gitlab.com/groups/gitlab-com/gl-infra/incident-review-bar-raisers/-/group_members)の Owner として自分を追加するよう依頼します。
1. レビューを担当する準備ができたら、Steve Abrams に、
   [Bar Raiser のオンコールスケジュール](https://app.incident.io/gitlab/on-call/schedules/01M0DVR0FZKQ2DSAKKGJQY26FX)の Primary と Secondary のローテーションへ自分を追加するよう依頼します。

参加前に背景情報を把握するには、最近のインシデントレビューを読み、
[#incident-review-bar-raisers](https://gitlab.enterprise.slack.com/archives/C0BPK9Y6GMR)の議論を追い、
最近発生した重大度の高いインシデントについて、まだ記憶が新しく、レビューが進行中である可能性のある段階で議論する
[週次インシデントレビュー会議](/handbook/engineering/infrastructure-platforms/incident-review/#weekly-incident-review-meeting)に参加するか録画を視聴するのが効果的です。
