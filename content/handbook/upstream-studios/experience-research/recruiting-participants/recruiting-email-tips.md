---
title: "UX リサーチのリクルーティングメールに関するヒント"
description: "UX リサーチ参加者をメールでリクルーティングする方法に関するガイダンス"
upstream_path: /handbook/upstream-studios/experience-research/recruiting-participants/recruiting-email-tips/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:42-03:00"
translated_at: "2026-07-17T07:37:26+09:00"
translator: codex
stale: false
---

UX リサーチのリクルーティング連絡のほぼすべてを、CRM システムである RallyUXR から送信します。RallyUXR から送信する場合、使用するメールドメインと送信者アドレスは research@rally.gitlab.com です。

Qualtrics または Marketo 経由でメールを送信する必要がある特別なケースもあります。そのツールに頼る必要がある場合に備え、以下の手順にはそれらのツールに関する注記を含めています。

- 常に自分自身に*少なくとも* 1 通のテストメールを送信してください。
- テンプレート内の調査詳細の上に、書き出しの 1 行を追加してください。これは、時期に言及したり、テンプレートにない個別化を加えたりする方法になります。
  - 例：`Cait here, reaching out on behalf of our research team. I hope you had a great weekend! We have a new study available on GitLab Duo and would love to include your perspective! Here are all the details:`
- メールテンプレートの一部を、あなた自身の声により近く聞こえるよう軽く書き直して構いません。UX リサーチ参加者の一部は私たちから多くのメールを受け取るため、少し変えることは、プロセスの向こう側に実際に人がいることを伝える良い補強になります。
- 件名を試してください（`We have a new study for you!`、`See if you're a match with our new study`など）。
- Qualtrics を使用する場合は、`sent from` の表示名を `UX Research @ GitLab` に調整してください。
- RallyUXR を使用する場合は、research@rally.gitlab.com から送信していることを確認してください。これはデフォルトの送信者です。
- すべてのツールにおける返信先メールアドレスは research@gitlab.com にしてください。これにより、チームは受信トレイに届く回答、問い合わせ、懸念を実際に確認できます。
- 回答率が低くても、対象参加者がセグメントに含まれていると考える場合は、新しいセグメントをすぐに開始する代わりに、リマインダーメールを 1 通送る選択肢があります。
- 通常、メールへの回答が届き始めるまでには 24〜48 時間かかることを覚えておいてください。
  - 最初のメールを送信してから 4 日後より早くリマインダーを送信しないでください。
  - 新しい件名を書いてください（`We still want to hear from you!`、`Reminder: Take our quick survey`）
  - セグメントに対象参加者があまり含まれていないと考える場合（つまり、セキュリティ専門家や、これまでリクルーティングに苦労してきた他の人々の場合）は、リマインダーを送らないでください。リマインダーを多く送りすぎると、配信停止のリスクが高まります。

以下は、リサーチ参加者とのコミュニケーションに使用できるメール／メッセージテンプレートです。可能な限り、個人と状況に合わせて各メッセージをカスタマイズすることを強く推奨します。

#### System Usability Scale アンケート {#system-usability-scale-survey}

[System Usability Scale](/handbook/product/ux/performance-indicators/system-usability-scale/)

- 件名：`SURVEY: How would you score GitLab's usability?` `New! Help us measure GitLab's usability over time` `Survey for you! How would you rate GitLab's usability?`
- 本文：

```text
It's time for our regular System Usability Scale survey! This is a critical research project that helps us measure GitLab's usability over time, and we can't do it without you!

Your feedback is really valuable and it will only take a few minutes - will you help us out?

As a thank you for your time, you'll have the opportunity to win 1 of 3 $30 (or equivalent currency Amazon gift cards).
```

#### スクリーニング成功後のユーザーインタビューへの招待 {#invitation-to-partake-in-a-user-interview-following-successful-screening}

```text
Hi! We have a study coming up, and I was wondering if you might be interested in participating with us. Based on your response to our survey, you look like a great fit! Sessions are taking place from `[XX-XX]`, and they last about `[XX]` minutes over Zoom (videoconference).

For this round of testing, we'll be chatting about `[Replace with research subject. Example: What tools you use, what your process is like, etc.]`.

Participants who complete a session will be compensated with a `[Replace with compensation. Example: $60 Amazon gift card, or approximate value in your home currency]`.

If you are interested, go here `[Link to your Calendly]` and choose one time and day that works for you as soon as possible. There are limited spots available.

Please let me know if you have any questions.
```

#### Slack で内部顧客（GitLab）に連絡する {#outreach-internal-customers-gitlab-in-slack}

```text
Hi all! :wave: We are in the process of `[Replace with research subject]` to `[Replace with research goals for context]`.
We need internal customers to answer a few questions. If you would like to help us out, please reply to this survey `[Link to research survey]`. Thank you!
```
