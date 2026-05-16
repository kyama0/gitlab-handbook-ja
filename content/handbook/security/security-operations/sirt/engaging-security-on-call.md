---
title: セキュリティエンジニアオンコールへのエンゲージ
description: セキュリティエンジニアオンコールへのエンゲージ方法
upstream_path: /handbook/security/security-operations/sirt/engaging-security-on-call/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T16:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-25T07:10:33-08:00"
---

## 概要

[セキュリティインシデントレスポンスチーム (SIRT)](/handbook/security/security-operations/sirt/) は、あらゆるセキュリティインシデントの支援のために [24/7/365](/handbook/engineering/infrastructure-platforms/incident-management/on-call/#security-team-on-call-rotation) のオンコール体制を取っています。本ハンドブックでは、潜在的なセキュリティインシデントの範囲と重大度を判断するためのガイダンス、およびその後必要に応じてセキュリティエンジニアオンコール (SEOC) にエンゲージする方法を説明します。

SIRT の責任とインシデントオーナーシップに関する情報は、[SIRT オンコールガイド](/handbook/security/security-operations/secops-oncall/) で確認できます。

## インシデント重大度

SEOC にエンゲージする前に、[私たちの重大度および優先度レベル](/handbook/security/security-operations/sirt/severity-matrix/) を確認し、インシデントに適切なレベルのレスポンスが割り当てられているかを確認してください。

フィッシング関連の問題については、後述の [フィッシング](#phishing) セクションを参照してください。その他の緊急性のない問題については、[低重大度の問題](#low-severity-issues) セクションを参照してください。

注: 目標復旧時間 (RTO) および目標復旧時点 (RPO) に関する追加情報は、[BCP ハンドブックページ](/handbook/business-technology/entapps-documentation/policies/gitlab-business-continuity-plan/) で確認できます。

以下の項目は SIRT のスコープ外であり、それぞれ下記のチームにエスカレーションする必要があります。

- **脆弱性報告および HackerOne**: [Application Security](/handbook/security/engaging-with-security/#vulnerability-reports-and-hackerone) にエスカレーションしてください
- **不正利用報告および DMCA 通知**: [Trust & Safety](/handbook/security/security-operations/trustandsafety/) にエスカレーションしてください
- **顧客からの一般的な問い合わせ**: [Field Security](/handbook/security/security-assurance/field-security/) にエスカレーションしてください

## 低重大度の問題 {#low-severity-issues}

GitLab Security に関する一般的な Q&A については、GitLab Slack の `#security` チャンネルで対応しています。

低重大度で緊急性のない問題については、Slack で `@sirt-members` のハンドルを使用するか、セキュリティエンジニアオンコール (SEOC) を特に要求する `@sirt-oncall` を使用するか、Slack で `/security` スラッシュコマンドを使用してインシデントフォームのリンクを要求することで [SIRT](/handbook/security/security-operations/sirt/) に連絡できます (注: このコマンドは Slack のスレッド内では動作しません)。

Slack でのメンションに対する SLA は営業日において **6 時間** であることにご留意ください。

## フィッシング {#phishing}

フィッシングメールを受信した疑いがあり、まだ送信者と関わっていない場合は、[メールがフィッシング攻撃と疑われる場合の対応](/handbook/security/security-assurance/governance/phishing/#what-to-do-if-you-suspect-an-email-is-a-phishing-attack) を参照してください。

メールに返信したり、リンクをクリックしたり、テキストメッセージを送受信したり、フィッシャーから要求された商品を購入したりしてフィッシャーと関わってしまった場合は、[SEOC にエンゲージ](#engage-the-security-engineer-on-call) してください。

## セキュリティエンジニアオンコールへのエンゲージ {#engage-the-security-engineer-on-call}

セキュリティインシデントを特定した場合、または SIRT からの即時の支援が必要な場合:

- **Slack**: `/security` スラッシュコマンドを使用する

Slack コマンドは SIRT のエスカレーションワークフローをトリガーします。Tines のウェブフォームを使用してセキュリティインシデントを提出するためのリンクが送信されます。このフォームではインシデントに関する質問が表示され、SIRT が *重大度* と *優先度* を自動的に判定するのに役立ちます。割り当てられたラベルに応じて、SEOC がページングされます。

フォームの処理方法とラベルの割り当て方法の詳細については、SIRT の [インシデント分類](/handbook/security/security-operations/sirt/severity-matrix/) 方法論を参照してください。

ワークフローは回答を使用して新しい Issue を作成し、報告されたインシデントを追跡します。SEOC のインシデント調査を支援するため、自由回答の質問にはできるだけ多くの詳細を提供してください。インシデント Issue へのリンクが届かない場合は、SIRT エンジニアに連絡してください (次の段落を参照)。

何かがセキュリティ上の問題なのかどうかの確認、進行中のインシデントに関する質問、SIRT への FYI などの小さなリクエストに対しては、チームメンバーは以下を使用できます。

- @sirt-oncall

これにより現在オンコール中のエンジニアにタグ付けされます。

セキュリティインシデントによって Slack にアクセスできない場合:

- **メール**: 問題の簡単な説明を `panic@gitlab.com` にメールで送信する

SEOC は、適切な [SLA](/handbook/engineering/infrastructure-platforms/incident-management/on-call/#security-team-on-call-rotation) 内に該当の Issue にエンゲージします。SLA が超過した場合は、[セキュリティマネージャーオンコール (SMOC)](/handbook/engineering/infrastructure-platforms/incident-management/on-call/#security-managers) がページングされます。メール経由で SEOC をページングすると、報告されているインシデントを追跡するための新しい Issue も作成されます。インシデントの詳細な説明は、Issue に直接記載できます。

ページングされた場合、SEOC は通常 **15 分以内** に応答し、インシデント報告者からの同期コミュニケーションが必要となる質問をする場合があります。SEOC をページングする際は、インシデントレスポンスの初期段階でこの同期コミュニケーションのために、インシデント報告者が準備し対応可能であることが重要です。
