---
title: "ビジネスインパクト分析 (Business Impact Analysis)"
description: "Security Risk チームによって実施されるビジネスインパクト分析に関する情報"
controlled_document: true
upstream_path: /handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T05:30:11Z"
translator: claude
stale: false
---

## 目的

ビジネスインパクト分析（BIA）は、GitLab のお客様にサービスを提供するために重要なシステムを判定するのに役立ちます。BIA のアウトプットは、新しいシステムに対する [Critical System Tier](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/) (CST) の指定です。CST は Security Compliance のスコーピングを支援するとともに、Business Owner が中断発生時のシステム復旧作業の優先順位付けを判断する際にも活用できます。

**注:** BIA に隣接して、システムの [個人データ](/handbook/security/policies_and_standards/data-classification-standard/#data-classification-definitions) 処理に関するグローバルプライバシー規制要件を満たすために質問が行われる場合があります。

## 範囲

BIA 手順は、GitLab の [Tech Stack](/handbook/business-technology/tech-stack-applications/) に追加されるすべての新しいシステムを対象とします。

## 役割と責任

|役割|責任|
|----------|------------------------------|
|[Security Risk Team](/handbook/security/security-assurance/security-risk/)|この手順の実行と維持に責任を負います。|
|システムの [Business/Technical Owner](/handbook/business-technology/tech-stack-applications/#tech-stack-definitions)|調達中に BIA の質問に回答し、Security Risk が提案する CST 指定を検証する責任を負います。|
|Security Assurance Management (Code Owners)|BIA に対する重要な変更と例外を承認する責任を負います。|

## BIA 手順

### 新しいシステム

GitLab データを収集、保管、または送信する新しいシステムの使用を伴う [Zip](/handbook/finance/procurement/#how-to-start-the-procurement-process) のすべての要求には、BIA が必要です。

このタイプの要求を作成する際、Business/Technical Owner は最低でも 2 つの BIA の質問に回答するように促されます。

1. システムの中断（システムが利用不可）の影響は何ですか?
2. システムの中断の潜在的な影響を説明してください。影響を受ける GitLab チーム（複数可）を指定してください。

これらの質問への回答は、Security Risk チームが [TPRM Assessment](/handbook/security/security-assurance/security-risk/third-party-risk-management/#tprm-assessment-requirements) プロセスの中で新しいシステムに対して Critical System Tier を指定するのに役立ちます。Security Risk は、適切な CST の割り当てを検証するために追加の質問をする場合があります。

### 品質レビュー

BIA のアウトプット（新しいシステムに対する Critical System Tier の指定）は、TPRM Assessment の終了時に Security Risk のメンバーによってピアレビューされます。

## レポート

BIA のアウトプットは、HelpLab の [Tech Stack Update Form](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab) を通じて Add a New System リクエストを送信する際に報告されます。この情報を報告するために使用されるフィールドは `critical_system_tier` です。

## 例外

システムの概念実証（PoC）、価値実証（PoV）、およびパイロットは BIA 手順から除外されます。

## 参考文献

- [Critical System Tiering Methodology](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/)
- [Data Classification Standard](/handbook/security/policies_and_standards/data-classification-standard/)
