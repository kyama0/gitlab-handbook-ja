---
title: Security Engineer オンコールへのエンゲージ
description: Security Engineer オンコールへのエンゲージ方法
upstream_path: /handbook/security/security-operations/sirt/engaging-security-on-call/
upstream_sha: 6329e70e21b29c3cf88be90bd4abee6489b39003
translated_at: "2026-05-21T11:45:00Z"
translator: claude
stale: false
lastmod: "2026-05-19T05:17:11+00:00"
---

## 概要

[Security Incident Response Team (SIRT)](/handbook/security/security-operations/sirt/) は、あらゆるセキュリティインシデントへの対応支援のために [24/7/365](/handbook/engineering/infrastructure-platforms/incident-management/on-call/#security-team-on-call-rotation) のオンコール体制を取っています。本ハンドブックでは、潜在的なセキュリティインシデントのスコープと重大度を特定するためのガイダンスを提供した上で、必要に応じて Security Engineer オンコール (SEOC) にエンゲージする方法を説明します。

SIRT の責任とインシデントオーナーシップに関する情報は、[SIRT オンコールガイド](/handbook/security/security-operations/secops-oncall/)で確認できます。

## インシデント重大度

SEOC にエンゲージする前に、[私たちの重大度レベル](/handbook/security/security-operations/sirt/severity-matrix/)を確認し、インシデントに適切なレベルの対応が割り当てられていることを確認してください。

フィッシング関連の問題については、後述の[フィッシング](#phishing)セクションを参照してください。その他の緊急性のない問題については、[低重大度の問題](#low-severity-issues)セクションを参照してください。

注: 目標復旧時間 (RTO) および目標復旧時点 (RPO) に関する追加情報は、[BCP ハンドブックページ](/handbook/business-technology/entapps-documentation/policies/gitlab-business-continuity-plan/)で確認できます。

以下の項目は SIRT のスコープ外であり、それぞれ下記のチームにエスカレーションする必要があります。

- **脆弱性報告および HackerOne**: [Application Security](/handbook/security/engaging-with-security/#vulnerability-reports-and-hackerone) にエスカレーションしてください
- **不正利用報告および DMCA 通知**: [Trust & Safety](/handbook/security/security-operations/trustandsafety/) にエスカレーションしてください
- **顧客からの一般的な問い合わせ**: [Field Security](/handbook/security/security-assurance/field-security/) にエスカレーションしてください

## 低重大度の問題 {#low-severity-issues}

一般的な Q&A については、GitLab Security は GitLab Slack の `#security_help` チャンネルで対応しています。

低重大度で緊急性のない問題については、Slack で `@sirt-members` のハンドルを使用するか、Security Engineer オンコール (SEOC) を特に要求する `@sirt-oncall` を使用するか、Slack で `/security` スラッシュコマンドを使用してインシデントフォームのリンクを要求することで [SIRT](/handbook/security/security-operations/sirt/) に連絡できます (注: このコマンドは Slack のスレッド内では動作しません)。

Slack でのメンションに対する SLA は営業日において **6 時間** であることにご留意ください。

## フィッシング {#phishing}

フィッシングメールを受信した疑いがあり、まだ送信者と関わっていない場合は、[メールがフィッシング攻撃と疑われる場合の対応](/handbook/security/security-assurance/governance/phishing/#what-to-do-if-you-suspect-an-email-is-a-phishing-attack)を参照してください。

メールに返信したり、リンクをクリックしたり、テキストメッセージを送受信したり、フィッシャーから要求された商品を購入したりしてフィッシャーと関わってしまった場合は、[SEOC にエンゲージ](#engage-the-security-engineer-on-call)してください。

## Security Engineer オンコールへのエンゲージ {#engage-the-security-engineer-on-call}

セキュリティインシデントを特定した場合、または SIRT からの即時の支援が必要な場合:

- **Slack**: `/security` スラッシュコマンドを使用してください

Slack コマンドは SIRT のエスカレーションワークフローをトリガーします。Tines のウェブフォームを使用してセキュリティインシデントを提出するためのリンクが送信されます。このフォームではインシデントに関する質問が表示され、SIRT が *重大度* を自動的に判定するのに役立ちます。オプションでページ呼び出しを送信することを選択できます (重大度 1 と 2)。

フォームの処理方法とラベルの割り当て方法の詳細については、SIRT の [Security Incident Severity Matrix](/handbook/security/security-operations/sirt/severity-matrix/) を参照してください。

ワークフローはあなたの回答を使用して調査を作成し、SEOC がそれをインシデントにエスカレートする必要があるかどうかを判断します。SEOC の調査を支援するため、自由回答の質問にはできるだけ多くの詳細を提供してください。

何かがセキュリティ上の問題なのかどうかの確認、進行中のインシデントに関する質問、SIRT への FYI などの小さなリクエストに対しては、チームメンバーは以下の Slack ハンドルを使用できます:

- `@sirt-oncall`

これにより現在オンコール中のエンジニアにタグ付けされます。

セキュリティインシデントによって Slack にアクセスできない場合:

- **メール**: 問題の簡単な説明を `panic@gitlab.com` にメールで送信してください

ページングされた場合、SEOC は通常 **15 分以内** に応答し、インシデント報告者からの同期コミュニケーションが必要となる質問をする場合があります。SEOC をページングする際は、インシデントレスポンスの初期段階でこの同期コミュニケーションのために、インシデント報告者が準備し対応可能であることが重要です。
