---
title: "SIRT との連携"
upstream_path: /handbook/security/product-security/psirt/runbooks/working-with-sirt/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-10T12:42:46-06:00"
---

このランブックは、HackerOne 報告、発見された脆弱性、その他のセキュリティインシデントへの対応のために SIRT を巻き込んで作業する必要のある PSIRT エンジニア向けです。

## /security を使用して SIRT を巻き込むための要件

P1S1 の場合は、[P1S1 ランブック](/handbook/security/product-security/psirt/runbooks/handling-s1p1/)に従い、[セキュリティオンコールを巻き込みます](/handbook/security/security-operations/sirt/engaging-security-on-call/)。

`/security` を使用して SIRT を巻き込む際:

- 脆弱性を検証した後、またはインシデントが確認できた後にのみ `/security` を使用してください
- フォームをできるだけ完全に記入してください
- 関連する HackerOne 報告、GitLab Issue/MR、Slack メッセージへのリンク、これまでに発生した内容のサマリー、セキュリティリスクの説明を含めてください
- 適切な緊急度を選択してください (以下のガイドラインを参照)
- `/security` を使用すると、SIRT がインシデントの追跡と対応に使用する Tines ケースが開かれます
- PSIRT は Tines ケースにアクセスして進捗を追跡し、追加の詳細・メモ・質問を追加できます

## SIRT を巻き込む必要がある状況

注: これは網羅的なリストではありません。SIRT を巻き込む必要のある他の状況がある可能性があります。

- P1 脆弱性
- 公に利用可能な悪用コードがある、公に知られた P2 脆弱性
- シークレットの漏洩
- アカウント乗っ取りに繋がる可能性のある脆弱性
- 通常のプロセスに加えて顧客とのコミュニケーションが必要となる脆弱性
- セキュリティリポジトリで行われるべきだったセキュリティ修正が公開で行われた場合
- 個人情報の漏洩
- DNS テイクオーバー

## 緊急度ガイドライン

`/security` フォームで緊急度を選択する際のガイドラインです。

| インシデントの種類 | 緊急度 | 備考 |
| --- | --- | --- |
| 何らかの S1 | Urgent (即座にページ) | クリティカルな脆弱性、red データの公開、まだ有効なチームメンバーのトークン漏洩などが該当 |
| 個人情報の漏洩 | Not Urgent (24 時間以内にレビュー) | 量とデータによっては Urgent になる可能性があります |
| `security-fix-in-public` ラベルが付いていない、脆弱性を修正する公開マージリクエスト | 備考を参照 | S2 以上は Urgent の可能性が高く、S3 以下は Not Urgent |

詳細については、[SIRT のインシデント分類および重大度マトリックス](/handbook/security/security-operations/sirt/severity-matrix/)ページの閲覧を検討してください。

## /security を使用せずに SIRT の注意を引く

何かが起こっている、またはまもなくインシデントになる可能性があることを、ただ SIRT に認識してもらいたい状況もあります。例としては、信頼できる HackerOne 報告者からの未検証で重大度の高い HackerOne 報告などが挙げられます。

`#sd_security_operations` Slack チャンネルに状況の簡単な説明を含むメッセージを投稿してください。`/sirtoncall` を使用してオンコール担当者を判定し、メンションすることを検討してもよいでしょう。

HackerOne 報告については、報告を GitLab Issue にインポートし、その上で `@gitlab-com/gl-security/security-operations/sirt` にメンションすることもできます。これは SIRT のすべてのチームメンバーにピンを送ることになるため、適切でない可能性があることに留意してください。

## 一般的なインシデント支援

- SIRT のブリッジに参加するか、SIRT と非同期で協力できる準備をしておきます
- サマリーの作成、再現手順の文書化、Tines ケースのタイムライン/メモを最新に保つことを支援します
- SIRT Tines ケースとディスカッションスレッドに情報とコンテキストを追加します
- ログレビューを支援するため、アクセスタイムスタンプ、自分の IP アドレス、HackerOne 報告者 (および/または HackerOne トリアージチーム) の IP アドレスで Tines ケースを更新します
