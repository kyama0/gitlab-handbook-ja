---
title: "Secure Code Review"
description: "GitLab で Application Security team がコードのセキュリティ脆弱性をレビューする方法。"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/secure-code-review/
upstream_sha: cc6de46eb0003927fce00d6bb2ac38cf31e1cffd
lastmod: "2026-11-17T22:59:57Z"
translated_at: "2026-11-19T06:16:51+09:00"
translator: claude
stale: false
---

Secure code review とは、本番に到達する前に悪用可能な脆弱性、ロジックの欠陥、設計上の問題を発見するため、セキュリティの観点でソースコードの変更を精査する取り組みです。GitLab では、Application Security team が [triage rotation](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/triage-rotation/) の一環として、比較的小規模なアドホックの MR レビュー、および広範な [AppSec review process](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/) の一環として secure code review を実施しており、そのカバレッジを拡大するために自動化への投資を積極的に進めています。

## アプローチ

### 自動 MR セキュリティレビュー

**これは AppSec の triage rotation／アドホック MR セキュリティレビューにおける推奨手法です**

GitLab Duo の [Security Review Flow](security-review-flow/)は、マージリクエストにセキュリティ上の問題がないかを確認します。対象プロジェクトは順次拡大しており、それらのプロジェクトでは MR に対して自動で実行されます。レビュアーとして指名することもできます。実行される条件や使い方は、[Security Review Flow](security-review-flow/)のページを参照してください。

Security Review Flow は、MR でサービスアカウントをメンションすると実行される従来のカスタムフロー [Automated MR Security Reviewer](automated-mr-reviewer/)を置き換えます。カスタムフローを使っているプロジェクトでは、移行まで引き続き使用できます。

### 手動レビュー

手動の AppSec レビューは、Application Security エンジニアが 2 つの方法で実施します。

**トリアージローテーションでのレビュー**は、事前に日程を決めず、必要に応じて行う MR レビューです。日程を組んで全面的にレビューするほどではないものの、セキュリティの観点から簡単な確認が必要な MR では、まず [Security Review Flow](security-review-flow/)を試してください。まだ従来のフローを使っているプロジェクトでは、[従来の Automated MR Security Reviewer](automated-mr-reviewer/)を試してください。そのうえで、必要に応じて週次の[トリアージローテーション](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/triage-rotation/)を担当する AppSec エンジニアに連絡してください。

**Scheduled reviews** は、優先度の高い機能、インフラ変更、および [AppSec review process](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/) を通じて提出されたその他の業務を対象とします。これらのレビューがどのように構成され、文書化されるかについては [AppSec Review Template Process](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/review-process/) を参照してください。
