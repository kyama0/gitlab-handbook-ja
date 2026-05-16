---
title: "セキュリティ意識向上トレーニング標準"
description: "セキュリティトレーニング標準"
controlled_document: true
tags:
  - security_standard
  - security_standard_at
upstream_path: /handbook/security/security-assurance/governance/sec-training/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T21:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-19T12:25:32-08:00"
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

セキュリティトレーニングと意識向上は、進化する脅威、コンプライアンス義務、安全な職場慣行に関する継続的なユーザー教育活動と演習を GitLab チームメンバーに提供し、彼らの意識を磨き向上させるために重要です。

## 適用範囲

この標準は、GitLab の法令、規制および契約上の要件をサポートするために、GitLab データを取り扱い、管理し、保管し、または送信するすべての GitLab チームメンバー、コントラクター/Temporary Service Provider (TSP)、コンサルタント、ベンダーおよびその他のサービスプロバイダーに適用されます。

### 定義

- GitLab チームメンバー: gitlab.com のメールアドレスを持つユーザー
- コントラクター/TSP およびコンサルタント: GitLab の外部にいて gitlab.com のメールアドレスを持たず、GitLab の法令、規制および契約上の要件をサポートするために GitLab データの取り扱い、管理、保管、または送信に関わる契約/合意のもとにある人員。

## 役割と責任

| 役割 | 責任 |
|------|----------|
| GitLab チームメンバー | この標準の要件に従う責任を負う |
| Security Governance チーム | この標準で概説されているセキュリティトレーニングおよびプログラムの管理と実行に責任を負う |
| Security Governance Management | この標準の監督、エスカレーション、および例外承認に責任を負う |
| Security Assurance Management (Code Owners) | この標準への重要な変更および例外を承認する責任を負う |

## 標準

すべての GitLab チームメンバーおよびコントラクター/TSP は、GitLab の General Security Awareness Training、新入社員トレーニング、および継続的なフィッシングシミュレーションとトレーニングに参加するか、暦年内に同等のトレーニング完了の証拠を提示することが求められます。参加が必要なセキュリティトレーニングには以下が含まれます。

### 新入社員セキュリティトレーニング

[新入社員セキュリティトレーニング](/handbook/security/security-assurance/governance/sec-awareness-training/#when-will-security-awareness-training-occur)は、すべての GitLab チームメンバーおよびコントラクター/TSP が GitLab でのオンボーディング中に完了することが求められます。このセキュリティトレーニングは、新入社員にサイバーセキュリティの脅威、脆弱性、攻撃を識別するための知識を提供します。

### General Security Awareness Training (GSAT)

GitLab の[セキュリティ意識向上トレーニングプログラム](/handbook/security/security-assurance/governance/sec-awareness-training/)は、GitLab チームメンバーに継続的なトレーニングを提供し、サイバーセキュリティの脅威、脆弱性、攻撃に関する知識と識別を強化するとともに、外部規制要件を満たします。GitLab のハンドブックファーストの General Security Awareness Training は、GitLab のサードパーティープロバイダーである Right Hand Cybersecurity を通じて毎年提供され、すべての GitLab チームメンバーおよびコントラクター/TSP の参加と完了が必要です。

アクティブなキャンペーン中、長期休暇中の GitLab チームメンバーには例外が設けられます。

### フィッシングトレーニング

GitLab の[フィッシングトレーニングプログラム](/handbook/security/security-assurance/governance/phishing/)は、GitLab のフィッシング試行を検出・防止する能力を教育・評価するために設計されています。継続的な[フィッシングシミュレーションとトレーニング](/handbook/security/security-assurance/governance/security-training/)は、GitLab のサードパーティープロバイダーである Right Hand Cybersecurity を通じて四半期ごとに 1 回実施され、割り当てられたすべての GitLab チームメンバーおよびコントラクター/TSP の参加と完了が必要です。

覚えておいてください: 何かを見たら声を上げ、不審なメールは必ず [PhishArm](/handbook/security/security-assurance/governance/phishing/#what-to-do-if-you-suspect-an-email-is-a-phishing-attack) 経由で報告してください。

### セキュアコーディングトレーニング

[GitLab セキュアコーディングトレーニング](/handbook/security/secure-coding-training/)は、Engineering 部門の GitLab チームメンバーおよびコントラクター/TSP のサブグループが完了する必須トレーニングです。このトレーニングには、GitLab コードベースで一般的に特定されるセキュリティ脆弱性に対処する OWASP (Open Web Application Security Project) からの説明と[セキュアコーディングガイドライン](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html)が含まれています。このトレーニングは、開発者が潜在的なセキュリティ脆弱性を早期に特定するのに役立ち、時間の経過とともにリリースされる脆弱性の数を減らすことを目的としています。

アクティブなキャンペーン中、長期休暇中の GitLab チームメンバーには例外が設けられます。

### その他のセキュリティトレーニング

セキュリティトレーニングプログラムが成熟するにつれて、追加のトレーニングが特定され追加されます。

## 例外

この手順への例外は、[Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions) に従って追跡されます。

## 参考資料

- [Security Awareness Training Program](/handbook/security/security-assurance/governance/sec-awareness-training/)
- [Phishing Program](/handbook/security/security-assurance/governance/phishing/)
- [Data Classification Standard](/handbook/security/policies_and_standards/data-classification-standard/)
