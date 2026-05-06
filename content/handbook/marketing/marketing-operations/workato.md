---
title: "Workato"
upstream_path: /handbook/marketing/marketing-operations/workato/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-01T01:00:00Z"
translator: claude
stale: false
---

## Workato とは

Workato は、サードパーティアプリの統合や、本来であればより多くのリソースを必要とするビジネスワークフローを自動化できる、自動化プラットフォームです。

私たちは、データクレンジング、Marketo や Iterable へのデータ転送、Asana でのプロジェクト作成といったマーケティングプロセスを支援するために、Workato 上でいくつかのワークフローを稼働させています。詳細については、[Internal Workato handbook ページ](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/workato/#mops-managed-workato-workflows) または各ファンクション固有のハンドブックページをご覧ください。

### SaaS トライアルと登録

新しいトライアルが開始されたとき、または gitlab.com 上で特定の無償 SaaS 登録が完了したときに、リードデータを Marketo と SFDC に取り込むために開発されたプロセスです。

これは [Iterable](/handbook/marketing/marketing-operations/iterable/#overview) への送信にも対応するよう取り組んでいます。

### List import Bot

Marketo へのリストインポートを自動化するワークフローです。詳細については[ハンドブックページ](/handbook/marketing/marketing-operations/automated-list-import/)を参照してください。

### メールドメイン

メールアドレスからドメインを抽出し、Marketo の `Email Domain` フィールドに値を設定するために開発されたプロセスです。

### データクレンジングと正規化

Country の値を SFDC のピックリストと完全に一致させるためにクレンジングするプロセスです。

### Asana プロジェクト作成

GitLab と Asana の間で双方向の同期があります。詳細は [internal handbook ページ](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/asana/#overview)をご覧ください。
