---
title: 米国政府向けオンコール業務の進め方
category: On-call
description: "サポートエンジニアリングにおける米国政府オンコールローテーションの役割と責務について"
upstream_path: /handbook/support/workflows/usgovernment_oncall/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
translated_at: "2026-06-12T21:17:46Z"
translator: claude
stale: false
lastmod: 2026-06-09T22:44:13-07:00
---

## Introduction

US Government Emergencies ローテーションに参加するサポートエンジニアは、GitLab 顧客からの運用上の緊急事態を調整します。

US Government Emergencies ローテーションは、[GitLab Support On-call](/handbook/support/on-call/) を構成するローテーションの 1 つです。

このページは、US Government On-Call ローテーションに参加するためのさまざまなワークフローの概要を示しています。緊急コールへの対応などに関するより詳細なガイドは、[PATRIOT project](https://gitlab.com/gitlab-com/support/us-government/patriot) で確認できます。

## Things to Know

### US Government On-call

US Gov サポートを購入したすべての顧客は「12x5 Emergency Support」を受けられます。顧客は「24x7 Emergency Support」アドオンを購入することもできます。

「12x5」の顧客は、月曜日から金曜日の太平洋時間 0500 から 1700 の間、本番インスタンスの [severity one](https://about.gitlab.com/support) の問題についてページを送信できます。

「24x7」の顧客は、いつでも本番インスタンスの severity one または severity two の問題についてページを送信できます。

現在のオンコールスケジュールは [PagerDuty](https://gitlab.pagerduty.com/schedules#P89ZYHZ)(Internal Link) で確認できます。スケジュールは現在、5a-5p / 5p-5a（太平洋時間）の 2 つの 12 時間シフトに分割されています。

- Day shift: 05:00 - 17:00 PT
- Overnight: 17:00 - 05:00 PT

顧客は、email または US Government サポートポータルの緊急フォームから緊急事態を送信できます。

#### On-call Shift Coverage in US Government

サポートエンジニアが予定されたオンコールシフトのカバーを必要とする場合は、`us-gov-oncall-coverage` テンプレートを使って Support Team Meta に Issue を開き、そのリンクを Slack でチームと共有します。

#### Emergencies outside working hours

12x5 の顧客が [Government Support の営業時間](https://about.gitlab.com/support/us-government-support/#hours-of-operation) 外に緊急ケースを送信した場合、以下が発生します。

- #spt_us-government チャンネルに slack 通知がトリガーされ、時間外の緊急事態をチームに知らせ、営業時間の開始時にフォローアップが必要であることを示します
- `Off hours emergency request` トリガーが、チケット送信者に時間外であることを知らせ、Global support で緊急ケースを作成するか、次の営業時間の開始時に US Government support がフォローアップするのを待つかの選択肢を提示します。<!-- is this correct still?-->

##### Responding to after hours emergencies

12x5 時間外に作業しているチームメンバーは、エンジニア自身の裁量で、本番の緊急事態に直面している顧客にサポートを提供することを選択できます。これに対応する際は、以下が顧客との間で明確になっていることを確認することが重要です。

- 顧客はそのサブスクリプションに基づいて 24x7 サポートを受ける権利はありません
- 緊急サポートはエンジニアの稼働状況に基づく一度限りの例外として提供されており、今後の時間外サポートは保証されません

対応するエンジニアは、自身のマネージャーをフォロワーとして追加し、時間外サポートを提供している旨を内部メモで示す必要もあります。これにより、顧客のアカウントチームとの適切なフォローアップが確実に行われるようになります。

### PagerDuty

私たちは、GitLab 顧客が提起した緊急事態を追跡するために PagerDuty を使用します。顧客の緊急事態については、`#support_us-government` に通知が届きます。

### PagerDuty Status

- **Triggered** - 「顧客がオンコールエンジニアの対応を要求しました」
- **Acknowledged** - 「ページを確認し、チケットをレビュー中です」
- **Resolved** - 「緊急チケットに返信を送信して顧客と関わりました」

**Note:** PagerDuty における「Resolved」は、根本的な問題が解決されたことを意味するものではありません。

## Getting Alerted of an Emergency Case

あなたの担当である*可能性のある*緊急事態について通知を受け取る方法は 2 つあります。

1. **PagerDuty notifications**

    これは、あなたが Engineer On-Call である場合に届きます

1. **The Slack Bot**

    これは平日の dayshift 時間中に届き、緊急ケースを知らせるために*稼働可能な*すべてのエンジニアに ping を送ります。

### Examples of flow

これらの例では、顧客が緊急事態を提起してから、エンジニアがチケットで対応するまでの流れを扱います。ケースをトリアージして対応する方法については、別の場所で扱います。

#### Day Shift, bot flow

平日の営業時間中に緊急事態が提起されると、[#spt_us-government](https://gitlab.enterprise.slack.com/archives/C03RTN3JEJ2) チャンネルに 2 つのメッセージが表示されます。最初に PagerDuty アラート、次に「Support Readiness Bot」からのメッセージで、稼働可能なすべてのエンジニアをタグ付けして緊急事態を知らせます。
ping を受け取ったら、稼働可能なエンジニアはチケットをレビューし、PagerDuty アラートを `acknowledge` します。（acknowledge されていない PagerDuty アラートはエスカレーションします。）
1 人または 2 人のエンジニアがチケットの対応に同意したら、チケットに返信して PagerDuty アラートを `resolve` します。

#### Day Shift Engineer On-call flow

Dayshift エンジニアは通常、週末と、チームが決定した一部の祝日のみオンコールになります。あなたが On-Call Engineer である間に緊急事態が提起されると、あなたの[設定](#configuring-your-pagerduty)に従って PagerDuty 通知が届きます。通知を受け取ったら、エスカレーションを防ぐために、Slack または PagerDuty アプリのいずれかでページを `acknowledge` します。その後、チケットのレビューを開始します。顧客に対応したら、PagerDuty アラートを `resolve` します。

#### Night Shift flow

Nightshift エンジニアは、1 週間単位のオンコールシフトのローテーションを行います。個々のローテーションでは、最初のシフトは**金曜日**の夜（太平洋時間午後 5:00）に始まり、**土曜日**の朝（太平洋時間午前 5:00）に終わります。残りのシフトも同じスケジュールに従い、ローテーションは**金曜日**の朝（太平洋時間午前 5:00）に終わります。あなたが On-Call Engineer である間に緊急事態が提起されると、あなたの[設定](#configuring-your-pagerduty)に従って PagerDuty 通知が届きます。通知を受け取ったら、エスカレーションを防ぐために、Slack または PagerDuty アプリのいずれかでページを `acknowledge` します。その後、チケットのレビューを開始します。顧客に対応したら、PagerDuty アラートを `resolve` します。

### If no one Acknowledges an alert

## Configuring your PagerDuty

## Post-resolution ticket handling

解決後のチケット処理は、このオンコールページの範囲外です。緊急状態に対処した後は、[Working with US Government Support tickets](/handbook/support/workflows/usgovernment_tickets/#emergency-ticket-handling) の解決後チケットワークフローに従ってください。

そのセクションでは、緊急チケットを既存の非緊急チケットにマージするタイミング、緊急チケットを solve または close するタイミング、およびチケットを手動で重み付け調整して非緊急として継続するまれな例外について記載しています。
