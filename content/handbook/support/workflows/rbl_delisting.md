---
title: リアルタイムブロックリストの解除
category: GitLab.com
description: Mailgun サポートに連絡して、私たちの IP アドレスをリアルタイムブロックリスト（RBL）から削除してもらう方法
upstream_path: /handbook/support/workflows/rbl_delisting/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T01:46:59Z"
translator: claude
stale: false
lastmod: "2024-11-14T23:18:47+00:00"
---

### 概要

まれに、Mailgun サポートに連絡して、私たちの IP アドレスをリアルタイムブロックリスト（RBL）から削除してもらう必要があります。このワークフローでは、これらの問題を検証して解決する方法について説明します。

### Mailgun での Suppression の確認

カスタマーから確認メールが届かないと報告された場合、まず [confirmation email](/handbook/support/workflows/confirmation_emails) ワークフローを実施してください。Mailgun パネルで [suppression を確認](/handbook/support/workflows/confirmation_emails/#checking-mailgun) します。

### RBL リスティングの確認

ログでアビューズによる拒否、またはブロックリストの明示的な確認の言及を見つけた場合は、リンクに進んで IP アドレスを検索します。プロバイダーごとに異なりますが、ルックアップデータベースが利用可能であれば、リストされていることと理由が記載されているかを検証してください。

```text
 "delivery-status": {
  "tls": true,
  "mx-host": "mx1.external-mailserver.com",
  "attempt-no": 1,
  "description": "",
  "session-seconds": 1.7985761165618896,
  "code": 550,
  "message": "5.7.1 H:M11 [192.237.158.143] Connection refused due to abuse. Please see https://mailspike.org/iplookup.html or contact your E-mail provider."
```

IP アドレスが私たちのものであることは、その IP アドレスに対して "host" ルックアップを行うことで確認できます。常に `mg.gitlab.com` で終わるはずです。

```text
> host 192.237.158.143
143.158.237.192.in-addr.arpa domain name pointer do158-143.mg.gitlab.com.
```

### Mailgun へのチケット起票

Mailgun > [Support](https://app.mailgun.com/app/support) に移動し、"Create Ticket" をクリックします。次の情報を必ず含めてください:

1. ブロックリスト入りした IP アドレス
1. RBL の名称とそのリンク（メールサーバーから返されたメッセージに記載）
1. ログのコピー

### フォローアップ

カスタマーへの連絡を忘れず、Mailgun を通じてサポートをリクエストしたことを伝えてください。彼らは 24 時間以内に応答を返してくるはずです。特定のアカウントが原因でブロックリスト入りしている場合は、#production の Site Reliability Engineers にも確認してください。
