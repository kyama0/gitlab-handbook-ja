---
title: 米国政府向けオンコール業務の進め方
category: On-call
description: "サポートエンジニアリングにおける米国政府オンコールローテーションの役割と責務について"
upstream_path: /handbook/support/workflows/usgovernment_oncall/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
translated_at: "2026-06-12T13:20:01Z"
translator: claude
stale: false
lastmod: "2026-06-09T22:44:13-07:00"
model: claude-opus-4-7
---

## はじめに {#introduction}

米国政府向け Emergencies ローテーションのサポートエンジニアは、GitLab のお客様からの運用上の緊急事態に対応します。

米国政府向け Emergencies ローテーションは、[GitLab サポートオンコール](/handbook/support/on-call/) を構成するローテーションの 1 つです。

このページは、米国政府向けオンコールローテーションにおけるさまざまなワークフローのハイレベルな概要です。緊急コールへの対応などに関するより詳細なガイドは、[PATRIOT プロジェクト](https://gitlab.com/gitlab-com/support/us-government/patriot) にあります。

## 知っておくべきこと {#things-to-know}

### 米国政府向けオンコール {#us-government-on-call}

米国政府向けサポートを購入したすべてのお客様は、「12x5 緊急サポート」を受けられます。お客様は「24x7 緊急サポート」アドオンを購入することもできます。

「12x5」のお客様は、太平洋時間の月曜日から金曜日の 0500 から 1700 の間に、本番インスタンスの [重大度 1 (severity one)](https://about.gitlab.com/support) の課題についてページング (呼び出し) を行えます。

「24x7」のお客様は、いつでも本番インスタンスの重大度 1 または 2 の課題についてページングを行えます。

現在のオンコールスケジュールは [PagerDuty](https://gitlab.pagerduty.com/schedules#P89ZYHZ) (内部リンク) で確認できます。スケジュールは現在、5a-5p / 5p-5a (太平洋時間) の 2 つの 12 時間シフトに分割されています:

- 日中シフト: 05:00 - 17:00 PT
- 夜間シフト: 17:00 - 05:00 PT

お客様は、米国政府向けサポートポータルのメールまたは緊急フォームを通じて緊急事態を送信することが許可されています。

#### 米国政府向けのオンコールシフトカバレッジ {#on-call-shift-coverage-in-us-government}

サポートエンジニアがスケジュールされたオンコールシフトのカバー (代替) を必要とする場合は、Support Team Meta で `us-gov-oncall-coverage` テンプレートを使用して課題を作成し、そのリンクを Slack でチームに共有してください。

#### 営業時間外の緊急事態 {#emergencies-outside-working-hours}

12x5 のお客様が [政府向けサポートの営業時間](https://about.gitlab.com/support/us-government-support/#hours-of-operation) 外に緊急ケースを送信した場合、以下が発生します:

- #spt_us-government チャンネルで Slack 通知がトリガーされ、時間外の緊急事態についてチームに警告し、営業時間開始時にフォローアップが必要であることを示します
- `Off hours emergency request` トリガーがチケット送信者に時間外であることを通知し、グローバルサポートで緊急ケースを作成するか、米国政府向けサポートが次の営業時間開始時にフォローアップするのを待つかの選択肢を提供します。 <!-- is this correct still?-->

##### 営業時間外の緊急事態への対応 {#responding-to-after-hours-emergencies}

12x5 の時間外に働いているチームメンバーは、本番環境の緊急事態に直面しているお客様に対して、エンジニア自身の裁量でサポートを提供することを選択できます。これらに対応する際は、以下の点をお客様と明確にすることが重要です:

- サブスクリプションに基づいて 24x7 サポートを受ける権利はありません
- 緊急サポートはエンジニアの空き状況に基づく一度限りの例外として提供されており、今後の時間外サポートは保証されません

対応するエンジニアは、自分のマネージャーをフォロワーとして追加し、時間外サポートが提供されていることを内部メモに示してください。これにより、お客様のアカウントチームと適切なフォローアップが行われることが確実になります。

### PagerDuty {#pagerduty}

私たちは PagerDuty を使用して、GitLab のお客様から提起された緊急事態を追跡しています。お客様の緊急事態が発生すると、`#support_us-government` に通知が表示されます。

### PagerDuty のステータス {#pagerduty-status}

- **Triggered** - 「お客様がオンコールエンジニアの対応を要求しました」
- **Acknowledged** - 「私はページを確認し、チケットをレビューしています」
- **Resolved** - 「私は緊急チケットに返信を送信してお客様と関わりました」

**注:** PagerDuty の「Resolved」は、根本的な課題が解決されたことを意味するものではありません。

## 緊急ケースの通知を受ける {#getting-alerted-of-an-emergency-case}

あなたの担当 _かもしれない_ 緊急事態の通知を受ける方法は 2 つあります

1. **PagerDuty 通知**

    これは、あなたがオンコールエンジニアであるときに来ます

1. **Slack ボット**

    これは平日の日中シフトの時間帯に来て、_対応可能な_ すべてのエンジニアにメンションして緊急ケースを警告します。

### フローの例 {#examples-of-flow}

これらの例では、お客様が緊急事態を起票してからエンジニアがチケットで対応するまでのフローを扱います。ケースのトリアージと対応方法については別の場所で扱います。

#### 日中シフト、ボットフロー {#day-shift-bot-flow}

平日の営業時間中に緊急事態が起票されると、[#spt_us-government](https://gitlab.enterprise.slack.com/archives/C03RTN3JEJ2) チャンネルに 2 つのメッセージが表示されます。最初に PagerDuty アラート、次に 'Support Readiness Bot' からの対応可能なすべてのエンジニアにタグ付けして緊急事態を警告するメッセージです。
メンションされたら、対応可能なエンジニアはチケットをレビューし、PagerDuty アラートを `acknowledge` (確認応答) します。(確認応答されていない PagerDuty アラートはエスカレーションされます)。
1〜2 名のエンジニアがチケットの対応に同意したら、チケットに返信し、PagerDuty アラートを `resolve` します。

#### 日中シフトのオンコールエンジニアのフロー {#day-shift-engineer-on-call-flow}

日中シフトのエンジニアは通常、週末と、チームが定めた一部の祝日にのみオンコールになります。あなたがオンコールエンジニアであるときに緊急事態が起票されると、あなたの [設定](#configuring-your-pagerduty) に従って PagerDuty 通知が届きます。通知を受け取ったら、エスカレーションを防ぐため、Slack または PagerDuty アプリでページを `acknowledge` します。その後、チケットのレビューを開始します。お客様に対応したら、PagerDuty アラートを `resolve` します。

#### 夜間シフトのフロー {#night-shift-flow}

夜間シフトのエンジニアは、1 週間単位のオンコールシフトのローテーションを行います。個々のローテーションでは、最初のシフトは **金曜日** の夜 (太平洋時間 午後 5:00) に始まり、**土曜日** の朝 (太平洋時間 午前 5:00) に終わります。残りのシフトもこの同じスケジュールに従い、ローテーションは **金曜日** の朝 (太平洋時間 午前 5:00) に終了します。あなたがオンコールエンジニアであるときに緊急事態が起票されると、あなたの [設定](#configuring-your-pagerduty) に従って PagerDuty 通知が届きます。通知を受け取ったら、エスカレーションを防ぐため、Slack または PagerDuty アプリでページを `acknowledge` します。その後、チケットのレビューを開始します。お客様に対応したら、PagerDuty アラートを `resolve` します。

### 誰もアラートを確認応答しない場合 {#if-no-one-acknowledges-an-alert}

## PagerDuty の設定 {#configuring-your-pagerduty}

## 解決後のチケット処理 {#post-resolution-ticket-handling}

解決後のチケット処理は、このオンコールページの範囲外です。緊急状態が対処された後は、[米国政府向けサポートチケットへの対応](/handbook/support/workflows/usgovernment_tickets/#emergency-ticket-handling) の解決後チケットワークフローに従ってください。

そのセクションでは、緊急チケットを既存の緊急以外のチケットにマージするタイミング、緊急チケットを solve またはクローズするタイミング、そしてチケットを手動で重みを調整して緊急以外として継続するというまれな例外について説明しています。
