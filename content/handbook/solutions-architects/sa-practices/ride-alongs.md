---
title: "ソリューションアーキテクト（SA）ライドアロング"
description: "ライドアロングは、共有された顧客体験を通じてソリューションアーキテクト同士が学び合うことを可能にします。"
upstream_path: /handbook/solutions-architects/sa-practices/ride-alongs/
upstream_sha: 5449127cc9a1f5b32ba83e3cf8ddab79eac1e3e8
translated_at: "2026-05-08T18:13:56Z"
translator: claude
stale: false
---

ライドアロングは、セグメント（SMB、Mid-Market、エンタープライズ、パブリックセクター）を横断して活動するソリューションアーキテクトに、コールに参加して、ソリューションアーキテクトと顧客が技術評価のさまざまな側面をどのように進めているかを学ぶ機会を提供します。コラボレーション、探求、成長のための追加機会を生み出すことが目的です。

ライドアロングには *ドライバー* と *パッセンジャー* がいます。ドライバーはコールを主導する人で、特定の地域とセグメントの顧客に対する主要なソリューションアーキテクトとしてアサインされています。パッセンジャーは、ドライバーをシャドウしたいソリューションアーキテクトです。

ライドアロングは、パッセンジャーの現在のセグメントや地域内でも、それ以外でも実施できます。

##### ライドアロングのパッセンジャーとして参加する {#participating-as-a-passenger-in-a-ride-along}

ライドアロングのパッセンジャーとして参加するには、ソリューションアーキテクトはこのページのドライバーリストを活用して、同行できるソリューションアーキテクトを見つけることができます。

*パブリックセクターに関心のあるパッセンジャーへ: パブリックセクター内の情報は広くは公開されていません。ライドアロングを調整するため、利用可能なパブリックセクターのドライバーに連絡してください。*

1. [ドライバーのリスト](#list-of-ride-along-drivers)を確認し、関心のある地域やセグメントの担当者を見つけてください。
1. ドライバーのカレンダーを確認し、ライドアロングしたい顧客ミーティングを 3 件特定してください。
1. ドライバーに連絡し、その 3 件のミーティングへの同行に関心がある旨を伝えてください。ドライバーは、その中から 1〜3 件のミーティングをあなたが参加するものとして選ぶことがあります。
1. [コール前にドライバーと同期](#sync-before-call)してください。
1. カレンダー招待を通じてコールでライドアロングに参加してください。
   1. [コール内で自己紹介する](#introducing-yourself)。
   1. 顧客コール全体を通じてドライバーをアシストし、[Customers & Prospects フォルダー](https://drive.google.com/drive/u/0/search?q=parent:0B-ytP5bMib9Ta25aSi13Q25GY1U)にあるはずの Running Notes に貢献してください。
1. [コール後にデブリーフ](#debrief-post-call)してください。完了時に Troops Activity に記入するために、[フィードバックの記述方法](#rattle-feedback-template)を使用してください。

##### ライドアロングのドライバー一覧 {#list-of-ride-along-drivers}

*すべてのソリューションアーキテクトがドライバーになる資格があります。オプトインする場合は、他の人があなたのカレンダーを閲覧できる状態にしておいてください*

ドライバーになるには、このページに対するマージリクエストを提出して下記の表に自分を追加し、マネージャーをレビュアーにアサインしてください。

| Team Member            | Segment                      |
|------------------------|------------------------------|
| **Tim Poffenbarger**   | Americas SMB, Mid-Market     |
| **Noah Ing**           | Americas SMB, Mid-Market     |
| **Madou Coulibaly**    | EMEA, Enterprise             |
| **Alexander Dess**     | EMEA, Enterprise             |
| **Dominique Top**      | EMEA, Enterprise             |
| **Sameer Kamani**      | PubSec                       |
| **Linc Williams**      | PubSec USN, USMC,DHA         |
| **Sophia Manicor**     | Americas SMB, Mid-Market     |
| **Ken McKnight**       | Americas Enterprise West     |
| **__**                 |                              |

##### コール前の同期 {#sync-before-call}

顧客コール前のパッセンジャーは以下を行うべきです。

- アカウントや案件に関連する SA トリアージ Issue チェックリスト、最近の Running Notes、Troops アクティビティをレビューする
- アカウントエグゼクティブに自己紹介する
- レビューした Chorus コールの所見について議論する
- 顧客へのメッセージングについて整合させ、コールで望ましいアウトカムを議論する

##### 自己紹介 {#introducing-yourself}

パッセンジャーは、信頼できるアドバイザーとしての自己紹介を練習する機会としてライドアロングを活用するべきです。パッセンジャーはフレンドリーでオープンであることに集中するべきです。可能であれば、観衆に共鳴する個人的な技術的経験を述べてください（例: 顧客が Jenkins から GitLab CI への移行を計画していて、自分が以前にそれを行ったことがある場合）。

例えば

こんにちは、私の名前は ${PASSENGER} で、${DRIVER_NAME} とともに以下を行うために協力しています:

- 皆さんの技術的・ビジネス的ニーズを聴く
- 皆さんの技術的リソースとして行動する
- GitLab の評価をガイドする

本日皆さんにお会いできて嬉しいです。

##### コール後のデブリーフ {#debrief-post-call}

顧客コール後のパッセンジャーは以下を行うべきです。

- フォローアップが必要なアクションアイテムをレビューする
- クライアントへのメッセージングが成功したかを議論する
- ドライバーにコールに関するフィードバックを提供する
- ライドアロングを推進するために、シャドウ体験を #solutions-architects チャンネルで共有する！

##### Rattle フィードバックテンプレート {#rattle-feedback-template}

ライドアロング活動を Rattle に **アカウント** へのコールとして（案件ではなく）、[適切なアクティビティタイプ](/handbook/solutions-architects/processes/activity-capture/activity-logging)で記録してください。アカウントレベルでの記録が必須であるのは、セグメント間や地域間のライドアロングではライダー側で案件が利用可能でない場合があるためです。
Troops アクティビティの説明をどのように記録するかのガイドとして、以下を使用できます。

```shell
Call Duration:

Region/Segment Currently Assigned:

Region/Segment Ride Along was in:

Differences in how the call was conducted:

Differences in how the customer interacted:

Key Takeaways that you'll be incorporating into your region/segment
```
