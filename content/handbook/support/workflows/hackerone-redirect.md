---
title: バグバウンティ／脆弱性レポートの異議申し立てを HackerOne にリダイレクトする（返信テンプレート）
description: "リクエスターが HackerOne バグバウンティレポートに関してサポートに連絡してきた場合、サポートで二次レビューを試みる代わりに HackerOne にルーティングして戻します。コピー＆ペースト用の返信テンプレートも含まれます。"
category: Zendesk
upstream_path: /handbook/support/workflows/hackerone-redirect/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-06T12:15:40-05:00"
---

リクエスターが GitLab のバグバウンティプログラム（HackerOne）で扱われている脆弱性レポートに関してサポートに連絡してきた場合（例: トリアージの不一致、報奨金の異議、または調停リクエスト）、サポートで二次レビューを試みるのではなく、リクエスターを HackerOne のレポートスレッドに戻すようにルーティングします。

## 返信テンプレート

```text
Hi <Person's Name>,

Thank you for reaching out and for your commitment to responsible disclosure. We appreciate security researchers like yourself who contribute to GitLab's bug bounties.

GitLab manages all vulnerability reports through our HackerOne bug bounty program, which is the appropriate channel for report submissions, triage decisions, and any disputes regarding those decisions.

If you filed a report through HackerOne at https://hackerone.com/gitlab then HackerOne will reply there. If you believe a triage decision was made in error, we encourage you to continue the conversation directly on your HackerOne report.

The HackerOne platform provides a mechanism to request mediation if you and the triage team are unable to reach an agreement.

Unfortunately, we are unable to provide secondary reviews or override triage decisions through our support channels, as this would bypass the structured process that ensures fair and consistent handling of all submissions.

We value your contribution and encourage you to continue working with us through HackerOne.
```

## 注意事項

- 機密性のあるレポートの詳細をサポートチケットに貼り付けないでください。
- チケットが実際には HackerOne／バグバウンティの提出に関するものでない場合は、代わりに通常のサポートワークフローを使用してください。
