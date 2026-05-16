---
title: "Security Risk チーム"
description: "Security Risk チームのチャーター"
upstream_path: /handbook/security/security-assurance/security-risk/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T05:30:11Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:15:15-08:00"
---
## ミッションステートメント

GitLab における Security Risk Team のミッションは、セキュリティおよびテクノロジーリスクの先見的な特定、モニタリング、優先順位付け、レポートを通じて、各チームが情報に基づくインテリジェントな [意思決定](/handbook/leadership/making-decisions/#making-decisions) を行えるようにエンパワーすることで、GitLab のセキュリティおよびテクノロジーリスクの治療を推進することです。

## バリュープロポジション

私たちは、徹底した、コラボレーティブで、効率的なリスク評価を実施し、リスク削減を推進することで、GitLab が高いレベルのセキュリティを維持しながら目標を達成できるようにします。

## コアコンピテンシー

### Security and Technology Operational Risk Management (STORM) プログラム {#storm}

Security Risk チームは、組織全体にわたるセキュリティおよびテクノロジーリスクの特定、評価、継続的なモニタリング、レポートに焦点を当てた統合された [Operational Risk Management](/handbook/security/security-assurance/security-risk/storm-program/) プログラムを管理しています。Risk Reduction は、Security Department の運営原則 5 つのうちの 1 つです（[Security Vision and Mission](/handbook/security/#i-classfas-fa-rocket-idbiz-tech-iconsi-security-vision-and-mission)）。そのため、Security Risk Team は、リーダーシップが Strategic Roadmap を確立し GitLab の [主要イニシアチブ](https://university.gitlab.com/learn/course/draft-fy26-company-memo/main/fy26-company-memo?client=internal-team-members&page=6)（社内のみ）をサポートするために必要な情報を提供する上で主導的な役割を果たします。テンプレートや GitLab における他のリスクプログラムとの統合方法を含む追加の詳細については、[STORM Program & Procedures](/handbook/security/security-assurance/security-risk/storm-program/) ハンドブックページをご覧ください。

{{% panel header="**チームに潜在的なリスクを伝達する必要がありますか?**" header-bg="warning" %}}
チームメンバーが Security Risk Team に潜在的なリスクをエスカレーションするために使用できるさまざまな方法に関する情報については、[STORM Program & Procedures のコミュニケーションセクション](/handbook/security/security-assurance/security-risk/storm-program/#communication-of-risks-to-the-security-risk-team) ページを参照してください。
{{% /panel %}}

### Security Third Party Risk Management (TPRM) プログラム {#tprm}

GitLab は、AI 駆動の自動化と継続的なセキュリティモニタリングを通じて、外部関係者と共有される GitLab データのセキュリティを検証する、業界をリードする Third Party Risk Management (TPRM) Program(/handbook/security/security-assurance/security-risk/third-party-risk-management) を維持しています。ベンダー調達フロー内で TPRM プログラムをシームレスに統合することで、Privacy、Legal、IT、People Operations 間の機能横断的な [コラボレーション](/handbook/values/#collaboration) を可能にし、[透明性のある](/handbook/values/#transparency) データ駆動型の意思決定、ビジネスおよびステークホルダーに焦点を当てた [Results](/handbook/values/#results)、そして GitLab の規制および [Compliance Obligations](/handbook/security/security-assurance/security-compliance/certifications/) の遵守を促進します。このプログラムを通じて維持されるベンダー関係は、組織全体で効率を生み出すために活用されます。

### Business Impact Analysis (BIA) と Critical System Tiering (CST) {#bia}

[Business Impact Analysis](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/) (BIA) は、GitLab のお客様にサービスを提供するために重要なシステムを判定するのに役立ちます。BIA のアウトプットは、Security Risk Team による新しいシステムに対する [Critical System Tier](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/) (CST) の指定です。

### Asset Inventory Maintenance {#asset-inventory}

完全かつ正確な資産インベントリを確立することは、GitLab の Risk Program の成功の鍵です。Security Risk Team は、Business Technology と連携して [Tech Stack](/handbook/business-technology/tech-stack-applications/#roles-and-responsibilities) の監督と正確性を維持しています。

## 運営モデル

### コアプロセス

|機能     |DRI|
|:----------:|:----------:|
|[Annual Risk Assessment](/handbook/security/security-assurance/security-risk/storm-program/#storm-procedures)     |Kyle Smith|
|[Business Impact Analysis](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/)     |Nirmal Devarajan|
|[New System Onboarding Checklist](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)     |Nirmal Devarajan|
|[Critical System Tiering](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/#designating-critical-system-tiers)     |Kyle Smith|
|[Ongoing SecRisk-Related Observations Management](/handbook/security/security-assurance/observation-management-procedure/)     |Nirmal Devarajan|
|[Ongoing Risk Treatment](storm-program#storm-procedures)     |Kyle Smith|
|[Ongoing TPRM Assessments](/handbook/security/security-assurance/security-risk/third-party-risk-management/)     |Ryan Lawson|
|[Periodic SOX CUEC Facilitation](/handbook/security/security-assurance/security-risk/sox_cuec_mapping_procedure/)     |Nirmal Devarajan|
|[Periodic TPRM Assessments](/handbook/security/security-assurance/security-risk/third-party-risk-management/#annual-high-risk-vendor-assessments)     |Eric Geving|
|[Acceptable Use Policy Iteration](/handbook/legal/acceptable-use-policy/) | Eric Geving |
|TPRM Data Quality and Emerging Requirements Management | Eric Geving |
|[STORM Metrics and Reporting](/handbook/security/security-assurance/security-risk/storm-program/#risk-tracking-and-reporting)  |Kyle Smith|
|TPRM Metrics and Reporting     |Ryan Lawson|
|[TPRM Application Integrations](/handbook/security/security-assurance/security-risk/third-party-risk-management/#third-party-application-integrations)  |Ryan Lawson|

### エンゲージメントモデル

1. [セキュリティまたはテクノロジーリスクの報告](/handbook/security/security-assurance/security-risk/storm-program/#communication-of-risks-to-the-security-risk-team)
1. GitLab で `@gitlab-com/gl-security/security-assurance/security-risk-team` を使用して GitLab 全体のチームをタグ付けする

### コミュニケーションチャンネル {#contact}

1. <i class="fas fa-envelope fa-fw" style="color:rgb(219,59,33)" aria-hidden="true"></i> メール: `securityrisk@gitlab.com`
1. <i class="fab fa-slack fa-fw" style="color:rgb(219,59,33)" aria-hidden="true"></i> Slack: [#security_help チャンネル](https://gitlab.enterprise.slack.com/archives/C094L6F5D2A) - `@security-risk` をメンション
1. <i class="fab fa-gitlab fa-fw" style="color:rgb(219,59,33)" aria-hidden="true"></i> GitLab: GitLab で `@gitlab-com/gl-security/security-assurance/security-risk-team` を使用して GitLab 全体のチームをタグ付けする

#### チームメンバー {#team-members}

|チームメンバー|役割|
|:----------:|:----------:|
|[Ty Dilbeck](https://gitlab.com/tdilbeck)|[Senior Manager, Security Risk](/job-description-library/security/security-leadership/#senior-manager-security)|
|[Nirmal Devarajan](https://gitlab.com/ndevarajan)|[Senior Security Risk Engineer](/job-description-library/security/security-assurance-job-family/#security-risk-1)|
|[Eric Geving](https://gitlab.com/ericgeving)|[Senior Security Risk Engineer](/job-description-library/security/security-assurance-job-family/#security-risk-1)|
|[Ryan Lawson](https://gitlab.com/rlawson1)|[Senior Security Risk Engineer](/job-description-library/security/security-assurance-job-family/#security-risk-1)|
|[Kyle Smith](https://gitlab.com/kylesmith2)|[Staff Security Risk Engineer](/job-description-library/security/security-assurance-job-family/#security-risk-2)|

## 戦略的イニシアチブ

Security Risk Team は、リソースをリスク削減の推進に専念させるために、定期的な計画と優先順位付けを実施しています。これには、リスク治療の促進や、該当する場合のコントロール設計と実装の所有権の引き受けが含まれます。Security Risk が関与する機能横断的な取り組みに関する更新については、[GitLab Operating Model](https://gitlab.com/groups/gitlab-operating-model/-/work_items?sort=created_date&state=opened&assignee_username%5B%5D=cynthiamiller&first_page_size=100) を参照してください。

## レビューとアップデート

このチャーターは、以下との整合性を確保するために、四半期ごとにレビューおよび更新されます。

1. [GitLab Strategy](https://about.gitlab.com/direction/)
1. [Security Division Mission and Vision](/handbook/security/#i-classfas-fa-rocket-idbiz-tech-iconsi-security-vision-and-mission)
1. [Security's Multi-year Strategy](https://internal.gitlab.com/handbook/security/information_security_goals_and_priorities/) (社内のみ)
1. [Security Assurance Mission and Vision](/handbook/security/security-assurance/#i-classfas-fa-rocket-idbiz-tech-iconsi-security-assurance-mission-and-vision)
1. [Security Assurance Multi-year Strategy](https://internal.gitlab.com/handbook/security/security-assurance/security_assurance_strategy/) (社内のみ)
