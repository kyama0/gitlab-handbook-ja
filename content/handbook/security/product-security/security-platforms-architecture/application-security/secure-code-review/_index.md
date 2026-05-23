---
title: "Secure Code Review"
description: "GitLab で Application Security team がコードのセキュリティ脆弱性をレビューする方法。"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/secure-code-review/
upstream_sha: eff3a749f8927544a08073e8f660283a5d80478b
lastmod: 2026-05-22T09:57:56-04:00
translated_at: "2026-05-22T21:16:58Z"
translator: claude
stale: false
---

Secure code review とは、本番に到達する前に悪用可能な脆弱性、ロジックの欠陥、設計上の問題を発見するため、セキュリティの観点でソースコードの変更を精査する取り組みです。GitLab では、Application Security team が [triage rotation](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/triage-rotation/) の一環として、比較的小規模なアドホックの MR レビュー、および広範な [AppSec review process](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/) の一環として secure code review を実施しており、そのカバレッジを拡大するために自動化への投資を積極的に進めています。

## アプローチ

### 自動 MR セキュリティレビュー

**これは AppSec の triage rotation／アドホック MR セキュリティレビューにおける推奨手法です**

AppSec team は、マージリクエストのセキュリティ問題を自動的にレビューする実験的な AI 駆動のセキュリティレビューフローを運用しています。このフローは MR でサービスアカウントをメンションすることでトリガーされ、人間の AppSec エンジニアが開始しなくても多段階の分析を実行します。

使い方と設定の詳細は [Automated MR Security Reviewer](automated-mr-reviewer/) のページを参照してください。

### 手動レビュー

手動の AppSec レビューは、Application Security エンジニアが 2 つの方法で実施します。

**Triage rotation reviews** は、アドホックでスケジュールされていない MR レビューです。フルでスケジュールされたレビューを必要としない MR についてセキュリティ観点での簡易チェックが必要な場合は、週次の [triage rotation](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/triage-rotation/) の AppSec エンジニアに連絡する前に、[Automated MR Security Reviewer](automated-mr-reviewer/) を試してください。

**Scheduled reviews** は、優先度の高い機能、インフラ変更、および [AppSec review process](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/) を通じて提出されたその他の業務を対象とします。これらのレビューがどのように構成され、文書化されるかについては [AppSec Review Template Process](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/review-process/) を参照してください。
