---
title: "Security Risk チーム"
description: "Security Risk チームのチャーター"
upstream_path: /handbook/security/security-assurance/security-risk/
upstream_sha: fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f
translated_at: "2026-09-19T21:18:00+00:00"
translator: codex
stale: false
lastmod: "2026-09-17T12:39:20-07:00"
---
## ミッションステートメント

GitLab における Security Risk Team のミッションは、セキュリティおよびテクノロジーリスクの先見的な特定、モニタリング、優先順位付け、レポートを通じて、各チームが情報に基づくインテリジェントな [意思決定](/handbook/leadership/making-decisions/#making-decisions)を行えるようにエンパワーすることで、GitLab のセキュリティおよびテクノロジーリスク対応を推進することです。

## バリュープロポジション

私たちは、徹底した、コラボレーティブで、効率的なリスク評価を実施し、リスク削減を推進することで、GitLab が高いレベルのセキュリティを維持しながら目標を達成できるようにします。

## コアコンピテンシー

### セキュリティおよびテクノロジーのリスク管理{#storm}

Security Risk チームは、[セキュリティおよびテクノロジーのオペレーショナルリスク管理（STORM）](/handbook/security/security-assurance/security-risk/storm-program/)、私たちの ISO42001 認証を支える AI リスク管理、[統合セキュリティリスク管理（USRM）](/handbook/security/security-observations-risk-management/)などのリスク管理サービスを提供します。これらのプログラムは、組織全体でセキュリティおよびテクノロジーリスクの特定、評価、継続的なモニタリング、報告を推進します。リスク削減は、Security Division の運営原則の 1 つです（[セキュリティのビジョンとミッション](/handbook/security/#i-classfas-fa-rocket-idbiz-tech-iconsi-security-vision-and-mission)）。そのため、Security Risk Team は、リーダーシップが戦略的ロードマップを策定し、GitLab の[主要イニシアチブ](https://internal.gitlab.com/handbook/company/gitlab-operating-model/)（社内のみ）を支えるために必要な情報を提供するうえで主導的な役割を果たします。

{{% panel header="**チームに潜在的なリスクを伝える必要がありますか?**" header-bg="warning" %}}
チームメンバーが Security Risk Team に潜在的なリスクをエスカレーションするさまざまな方法については、[STORM プログラムと手順のコミュニケーションセクション](/handbook/security/security-assurance/security-risk/storm-program/#communication-of-risks-to-the-security-risk-team)を参照してください。
{{% /panel %}}

### サードパーティのセキュリティリスク管理（TPRM）{#tprm}

GitLab は、AI による自動化と継続的なセキュリティモニタリングを通じて、外部関係者と共有される GitLab データのセキュリティを検証する、業界をリードする[サードパーティリスク管理（TPRM）の取り組み](/handbook/security/security-assurance/security-risk/third-party-risk-management)を維持しています。ベンダーのオンボーディングの一環として、チームは[導入後チェックリスト（PIC）](/handbook/security/security-assurance/security-risk/third-party-risk-management/#new-system-onboarding--post-implementation-controls-pic)の実施を促進し、ベンダーとの取引が開始された際に、合意されたセキュリティコントロールが導入されていることを確認します。ベンダー調達フローに TPRM プログラムをシームレスに統合することで、Privacy、Legal、IT、People Operations 間の部門横断的な[コラボレーション](/handbook/values/#collaboration)を可能にし、[透明性のある](/handbook/values/#transparency)データに基づく意思決定、ビジネスとステークホルダーを重視した[成果](/handbook/values/#results)、GitLab の規制上の義務および[コンプライアンス義務](/handbook/security/security-assurance/security-compliance/certifications/)の遵守を促進します。このプログラムを通じて維持されるベンダーとの関係を活用し、組織全体の効率を高めます。

### 資産インベントリの支援{#asset-inventory}

完全かつ正確な資産インベントリの確立は、GitLab のリスクプログラムを成功させる鍵です。Security Risk Team は Business Technology と連携し、[Tech Stack](/handbook/business-technology/tech-stack-applications/#roles-and-responsibilities)の監督と正確性を維持します。[ビジネス影響分析](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/)（BIA）は、GitLab のお客様にサービスを提供するうえで重要なシステムを特定するのに役立ちます。BIA の結果に基づき、Security Risk Team は新しいシステムに[重要システム階層](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/)（CST）を指定します。

## 運営モデル

### コアプロセス

|機能     |DRI|
|:----------:|:----------:|
|[年次リスク評価（ARA）](/handbook/security/security-assurance/security-risk/storm-program/#storm-procedures)     |Kyle Smith|
|[ビジネス影響分析（BIA）](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/)|Kyle Smith|
|[導入後チェックリスト（PIC）](/handbook/security/security-assurance/security-risk/third-party-risk-management/#new-system-onboarding--post-implementation-controls-pic)|Ryan Lawson|
|[重要システムの階層化（CST）](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/#designating-critical-system-tiers)|Kyle Smith|
|[統合セキュリティリスク管理（USRM）](/handbook/security/security-observations-risk-management/)|Kyle Smith|
|[継続的な TPRM 評価](/handbook/security/security-assurance/security-risk/third-party-risk-management/)     |Ryan Lawson|
|[定期的な SOX CUEC の実施支援](/handbook/security/security-assurance/security-risk/sox_cuec_mapping_procedure/)     |Eric Geving|
|[定期的な TPRM 評価](/handbook/security/security-assurance/security-risk/third-party-risk-management/#annual-high-risk-vendor-assessments)     |Eric Geving|
|[利用規定（AUP）のイテレーション](/handbook/legal/acceptable-use-policy/) | Eric Geving |
|TPRM データ品質と新たな要件の管理 | Eric Geving |
|[STORM の指標と報告](/handbook/security/security-assurance/security-risk/storm-program/#risk-tracking-and-reporting)  |Kyle Smith|
|TPRM の指標と報告     |Ryan Lawson|
|[TPRM アプリケーション統合](/handbook/security/security-assurance/security-risk/third-party-risk-management/#third-party-application-integrations)  |Ryan Lawson|

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
|[Madeline Lake](https://gitlab.com/madlake)|[Manager, Security Risk](/job-description-library/security/security-assurance-job-family/#security-risk-4)|
|[Eric Geving](https://gitlab.com/ericgeving)|[Senior Security Risk Engineer](/job-description-library/security/security-assurance-job-family/#security-risk-1)|
|[Ryan Lawson](https://gitlab.com/rlawson1)|[Staff Security Risk Engineer](/job-description-library/security/security-assurance-job-family/#security-risk-2)|
|[Kyle Smith](https://gitlab.com/kylesmith2)|[Staff Security Risk Engineer](/job-description-library/security/security-assurance-job-family/#security-risk-2)|

## 戦略的イニシアチブ

Security Risk Team は、リソースをリスク削減の推進に専念させるために、定期的な計画と優先順位付けを実施しています。これには、リスク対応の促進や、該当する場合のコントロール設計と実装の所有権の引き受けが含まれます。Security Risk が関与する機能横断的な取り組みに関する更新については、[GitLab Operating Model](https://gitlab.com/groups/gitlab-operating-model/-/work_items?sort=created_date&state=opened&assignee_username%5B%5D=cynthiamiller&first_page_size=100)を参照してください。

## レビューとアップデート

このチャーターは、以下との整合性を確保するために、四半期ごとにレビューおよび更新されます。

1. [GitLab の戦略](https://about.gitlab.com/direction/)
1. [Security Division のミッションとビジョン](/handbook/security/#i-classfas-fa-rocket-idbiz-tech-iconsi-security-vision-and-mission)
1. [Security の複数年戦略](https://internal.gitlab.com/handbook/security/information_security_goals_and_priorities/) (社内のみ)
1. [Security Assurance のミッションとビジョン](/handbook/security/security-assurance/#i-classfas-fa-rocket-idbiz-tech-iconsi-security-assurance-mission-and-vision)
1. [Security Assurance の複数年戦略](https://internal.gitlab.com/handbook/security/security-assurance/security_assurance_strategy/) (社内のみ)
