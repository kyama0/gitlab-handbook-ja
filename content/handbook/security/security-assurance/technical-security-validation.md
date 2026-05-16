---
title: "技術的セキュリティ検証 (Technical Security Validation)"
description: "技術的セキュリティ検証 (Technical Security Validation)"
upstream_path: /handbook/security/security-assurance/technical-security-validation/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T05:30:11Z"
translator: claude
stale: false
lastmod: "2025-03-06T12:35:33-05:00"
---

## 技術的セキュリティ検証 (Technical Security Validation, TSV)

技術的セキュリティ検証（TSV）プロセスは、GitLab の Security Risk チームと Security Research チームのパートナーシップであり、ソフトウェア調達時に実施される [TPRM 手順](/handbook/security/security-assurance/security-risk/third-party-risk-management/) を補完するように設計されています。TPRM プロセスが企業の内部統制の設計および運用上の有効性を検証するのに対し、TSV は [セキュリティノーティス](/handbook/security/security-assurance/security-risk/third-party-risk-management/#tprm-security-notice-process) に関連付けられたシステムなどの高リスクシステムに関する追加のデューデリジェンスを実施するために活用されます。これらの手順は、Security の Post Implementation Checklist と整合しており、これは Business Owner からの、サードパーティシステムを保護するために GitLab が適切なコントロールを確立したという証明として機能します。

TSV のアウトプット（コントロールの不備や緩和の機会に関する結論など）は、システムの Business Owner に提示され、情報に基づく購買決定や必要な是正ステップの完了を支援します。

## TSV のワークフロー

TPRM レビュー中に特定されたコントロールギャップや失敗が確認されると、TSV が開かれます。これは、それらの深刻度をよりよく理解し、可能な場合は補完コントロールを特定するためです。TSV の必要性は、特定された不備の性質、送信されるデータ、およびシステムの重要性に基づいて判断されます。

TSV の作成時に、Business Owner は [TSV Issue](https://gitlab.com/gitlab-com/gl-security/security-assurance/technical-security-validation/-/blob/master/.gitlab/issue_templates/TSV%20Intake%20Template.md?ref_type=heads) で要求された必要なドキュメンテーション、システムアクセス、およびサポートを提供する必要があります。これらの項目が TSV エンジニアによってレビューされると、これらの手順をサポートするために追加の証拠やシステムアクセスが必要になる場合があります。これらの項目をタイムリーに提供することはこの取り組みをサポートする上で重要であり、それらをタイムリーに提供できない場合、以下に定義されるエスカレーションが発生する可能性があります。

TSV が完了すると、評価の結論が TSV Issue のコメントセクションに文書化され、Business Owner がタグ付けされます。不利な発見が確認された場合、Business Owner はそれらの発見を認識し、可能な場合はそれらに対処する責任を負います。発見が確認されなかった場合、Issue はクローズされ、可視性のために Business Owner がタグ付けされます。

## 証拠リクエストとエスカレーション

> *これらの手順をサポートし、TSV の効率的な完了を可能にするためには、TPRM、TSV エンジニア、および Business Owner の間で継続的でタイムリーなコラボレーションが必要です。以下のタイムラインは、関係者全員の優先事項を考慮して定義されています。*

### 初回証拠リクエスト

TSV を開始するために必要なステップは TSV Issue Template にリストされており、関連する製品ドキュメンテーション、関連する Issue へのリンク、システムアクセスのプロビジョニングなどの項目のリクエストが含まれています。

**テンプレートで要求された項目は、リクエスト送信から 5 営業日以内に提供する必要があります。** これらの項目を提供できない場合、Security Risk Engineer によるマネジメントエスカレーションが行われる可能性があります。

### 補足リクエスト

システムの複雑さに応じて、これらの手順をサポートするために TSV エンジニアによって追加の項目が必要となる場合があり、これらは Issue のコメントを通じて要求される可能性があります。

**Business Owner は、必要な場合、リクエストから 5 営業日以内に補足証拠を提供することが求められます。** このタイムラインを満たさない場合、TSV エンジニアによるマネジメントエスカレーションが行われる可能性があります。

## サービスレベル合意（SLA）と責任

以下に定義されているサービスレベル合意と責任は、TSV プロセス内のすべての必要項目をタイムリーに完了するために設定されています。

TSV を開く Security Risk Engineer は、上記で定義されたエスカレーション手順に従って、初回証拠リクエストがタイムリーに満たされることを保証する責任があります。エスカレーションは、Business Owner が 10 営業日以内に対応がない場合に実施され、すべての項目が提供されるまでその後毎週フォローアップが行われます。TSV エンジニアは、補足証拠リクエストについても上記で定義されたエスカレーションプロセスに従います。要求されたすべての証拠の提出後、技術的セキュリティ検証は 10 営業日以内に完了します。

| DRI    | アクション | 完了までの時間 |
| ------ | ------ | ---------------- |
| Business Owner     | サポート証拠の提供  | 各リクエストから 5 営業日以内 |
| TSV Engineer       | TSV の完了  | すべての証拠が提供されてから 10 営業日以内 |

## リソース

- [GitLab の Integrated Third Party Risk Management (TPRM) Program](/handbook/security/security-assurance/security-risk/third-party-risk-management/) <br>
- [Third Party Minimum Security Standards](/handbook/security/security-assurance/security-risk/third-party-risk-management/#third-party-minimum-security-standards) <br>
- [GitLab の Security Research チーム](/handbook/security/product-security/security-platforms-architecture/security-research/) <br>
- [TSV Project Workspace](https://gitlab.com/gitlab-com/gl-security/security-assurance/technical-security-validation)
