---
title: "UX リサーチ募集メールのヒント"
description: "UX リサーチの参加者をメールで募集する方法に関するガイダンス"
upstream_path: /handbook/product/ux/experience-research/recruiting-participants/recruiting-email-tips/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T13:14:13+00:00"
---

私たちは UX リサーチ募集のアウトリーチのほぼすべてを、CRM システムである RallyUXR から送信しています。RallyUXR から送信する際に使用するメールドメインと送信者アドレスは research@rally.gitlab.com です。

特別な場合に、Qualtrics や Marketo 経由でメールを送る必要があるかもしれません。以下の手順には、それらのツールを使う必要が生じた場合の注意書きがあります。

- 必ず *少なくとも* 1 通のテストメールを自分宛に送ります。
- テンプレートのスタディ詳細の上にオープニングの一行を加えます。これは時期に言及したり、テンプレートにない個人的なメッセージを加えるよい方法です。
  - 例: `Cait here, reaching out on behalf of our research team. I hope you had a great weekend! We have a new study available on GitLab Duo and would love to include your perspective! Here are all the details:`
- メールテンプレートの一部をあなたの声のように軽く書き直しても構いません。私たちの UX リサーチ参加者のなかには多数のメールを受け取っている人もいるので、少し変化を加えることで、実際に人間が反対側にいるという良い補強になります。
- 件名で実験してみてください（`We have a new study for you!`、`See if you're a match with our new study` など）。
- Qualtrics を使う場合は、`sent from` の表示名を `UX Research @ GitLab` に調整します。
- RallyUXR を使う場合は、`research@rally.gitlab.com` から送信していることを確認します。これがデフォルトの送信者です。
- すべてのツールで返信先メールアドレスは `research@gitlab.com` にする必要があります。これにより、私たちのチームが受信トレイに届く返信、問い合わせ、懸念事項を確認できます。
- 反応率が低くても、ターゲットの参加者がセグメント内にいると考えられる場合は、すぐに新しいセグメントを開始するのではなく、1 通のリマインダーメールを送るという選択肢があります。
- メールへの反応は通常 24〜48 時間後から入り始めることに留意してください。
  - 最初のメール送信から 4 日経つよりも早くリマインダーを送らないようにしてください。
  - 新しい件名を書きます（`We still want to hear from you!`、`Reminder: Take our quick survey`）。
  - ターゲット参加者がセグメント内に多くいないと思われる場合（たとえば、セキュリティ専門家など、これまで募集に苦労してきた人たちの場合）は、リマインダーを送らないでください。リマインダーが多すぎると、配信停止のリスクが高まります。

以下は、リサーチ参加者とのコミュニケーションに使用できるメール／メッセージのテンプレートです。可能な限り、個人と状況に応じてカスタマイズすることを強くお勧めします。

#### システムユーザビリティスケール調査

[システムユーザビリティスケール](/handbook/product/ux/performance-indicators/system-usability-scale/)

- 件名: `SURVEY: How would you score GitLab's usability?` `New! Help us measure GitLab's usability over time` `Survey for you! How would you rate GitLab's usability?`
- 本文:

```text
It's time for our regular System Usability Scale survey! This is a critical research project that helps us measure GitLab's usability over time, and we can't do it without you!

Your feedback is really valuable and it will only take a few minutes - will you help us out?

As a thank you for your time, you'll have the opportunity to win 1 of 3 $30 (or equivalent currency Amazon gift cards).
```

#### スクリーニング通過後のユーザーインタビュー参加招待

```text
Hi! We have a study coming up, and I was wondering if you might be interested in participating with us. Based on your response to our survey, you look like a great fit! Sessions are taking place from `[XX-XX]`, and they last about `[XX]` minutes over Zoom (videoconference).

For this round of testing, we'll be chatting about `[Replace with research subject. Example: What tools you use, what your process is like, etc.]`.

Participants who complete a session will be compensated with a `[Replace with compensation. Example: $60 Amazon gift card, or approximate value in your home currency]`.

If you are interested, go here `[Link to your Calendly]` and choose one time and day that works for you as soon as possible. There are limited spots available.

Please let me know if you have any questions.
```

#### Slack での社内顧客（GitLab）へのアウトリーチ

```text
Hi all! :wave: We are in the process of `[Replace with research subject]` to `[Replace with research goals for context]`.
We need internal customers to answer a few questions. If you would like to help us out, please reply to this survey `[Link to research survey]`. Thank you!
```
