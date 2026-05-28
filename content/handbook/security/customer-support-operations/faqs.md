---
title: FAQ
description: Customer Support Operations に関するよくある質問
upstream_path: /handbook/security/customer-support-operations/faqs/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

## アクセスに関する質問 {#access-related}

### Customer Support Readiness が所有するものへのアクセスを希望する場合は？ {#what-if-i-want-access-to-something-owned-by-customer-support-readiness}

セキュリティの[アクセス管理基準](https://internal.gitlab.com/handbook/security/policies_and_standards/access-management-standard/)に従い、私たちは[最小権限の原則](https://csrc.nist.gov/glossary/term/least_privilege)を採用しています。そのため、リクエストごとにケースバイケースで審査を行います。

プロセスを開始するには、[Individual Bulk Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Individual_Bulk_Access_Request) Issue を起票してください。マネージャーの承認後、`@jcolyer` および `@dtragjasi` にアサインしてください。両名が状況を確認し、最適な進め方を判断します。

## チームに関する質問 {#team-related}

### Customer Support Operations の各種コンポーネントの状態を素早く確認するには？ {#how-can-i-quickly-check-the-status-of-the-various-customer-support-operations-components}

[ステータスページ](https://statuspage.incident.io/cust-support-ops/main)から各コンポーネントの状態を確認できます。

## Zendesk に関する質問 {#zendesk-related}

### Zendesk の使用で問題が発生した場合、Zendesk に直接連絡してもよいですか？ {#if-we-receive-any-problem-in-using-zendesk-can-we-contact-zendesk-directly}

まずは Customer Support Operations チームへご連絡ください。チャンネルで質問を投稿し、@support-ops にメンションしてください。私たちが問題解決をサポートできる可能性が高いです。それでも解決できず、Zendesk のサポートに直接連絡が必要な場合は、Customer Support Operations が対応するのが最善です。

### Zendesk が世界的にダウンした場合はどうなりますか？ {#what-will-happen-if-zendesk-is-down-globally}

Zendesk はサービスに Pod を使用しているため、インターネットが世界的に影響を受けたときにのみダウンします。これにより、特定リージョンでダウンタイムが発生しても、Zendesk はサービスを円滑に運用しながら迅速に緩和できます。それでも Zendesk へのアクセスに問題がある場合は、Customer Support Operations チームにご連絡ください。Zendesk が世界的にダウンしている場合、メールサポートのオプションが利用可能です（具体的な利用方法は必要に応じて決定します）。

### 災害復旧計画はありますか？ {#is-there-any-disaster-recovery-plan-available}

Zendesk は十分な注意を払ってバックアップサーバーにデータを保管しています。これにより、必要なときにデータを復旧できます。これらのバックアップは、Zendesk 側の問題でサービスが停止した場合に Zendesk を復旧するために利用されます。

また、Customer Support Operations チームは、すべてのトリガー、自動化、ビュー、マクロ、フォーム、フィールド、条件などをドキュメント化しており、ゼロから書き直す手間を省けるようにしています。

### Zendesk を使用しているとアスペクト比が崩れる {#when-using-zendesk-the-aspect-ratio-is-off}

これは次のような形で現れる可能性があります。

- グループ機能を使う前に 1 つのタブしか表示されない
- 不自然な空白が表示される

正確な原因は特定されていませんが、Zendesk の間隔やグループ化はモニターのアスペクト比と画面サイズに依存しています。これらの問題が発生した場合、ズームインしてからズームアウトする（またはその逆）ことで解決することが多いです。また、ハードリフレッシュ（Ctrl+Shift+R / Cmd+Shift+R）でも解決することがあります。

これらすべてが効かない場合は、ログアウトしてキャッシュとクッキーをクリアし、再度ログインすることをおすすめします。
