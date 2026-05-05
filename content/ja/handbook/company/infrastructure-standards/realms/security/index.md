---
title: "Security レルム"
description: "このレルムは、エンジニアリングセキュリティチームが共有およびチーム固有のインフラリソースをデプロイするためのものです。"
upstream_path: "/handbook/company/infrastructure-standards/realms/security/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T15:43:48Z"
translator: "claude"
stale: false
---

### クイックリンク

- [グローバルインフラ標準](/handbook/company/infrastructure-standards/)
- [グローバルラベルとタグ](/handbook/company/infrastructure-standards/labels-tags/)
- [インフラポリシー](/handbook/company/infrastructure-standards/policies/)
- [インフラヘルプデスク](/handbook/company/infrastructure-standards/helpdesk/)

## 概要

このレルムは、エンジニアリングセキュリティチームが共有およびチーム固有のインフラリソースをデプロイするためのものです。


<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**エンジニアリングインフラハンドブックページとの将来のイテレーション**

</div>

<div class="px-4 py-3">

[エンジニアリングインフラ環境ハンドブックページ](/handbook/engineering/infrastructure-platforms/environments/)が現在の環境に関する SSOT です。会社全体のインフラ標準を反復する WIP イニシアチブが進化するにつれて、エンジニアリングインフラページは、標準が文書化・実装され、環境への変更が行われるにつれて段階的にリファクタリングされます。

</div>

</div>


### アクセスリクエスト

グループへのアクセスをリクエストするには、[グループアクセスリクエストチュートリアル](/handbook/company/infrastructure-standards/tutorials/groups/access-request/)をご参照ください。

> メール認証のセキュリティ上の理由から、インフラリクエストにはオーナーまたはカウンターパートへの GitLab の Issue または Slack メッセージのみが許可されています。

### レルムオーナー

| 名前                  | GitLab.com ハンドル | グループロール   | 役職                                            |
|----------------------|-------------------------|------------------|-------------------------------------------------|
| Marco Lancini        | `mlancini`              | オーナー          | Staff Security Engineer - Infrastructure        |
| Paulo Martins        | `pmartinsgl`            | カウンターパート  | Senior Security Engineer - Infrastructure       |
| James Ritchey        | `jritchey`              | カウンターパート  | Sr. Manager, Product Security                   |

## レルムラベルとタグ

[グローバルラベル/タグ](/handbook/company/infrastructure-standards/labels-tags/)と[レルムラベル/タグ](/handbook/company/infrastructure-standards/realms/security/labels-tags/)を各リソースに適用する必要があります。

## レルムグループ

各 gl_dept_group には、グループメンバー向けの共有 GCP プロジェクトおよび/または AWS アカウントがあります。

グループがまだ実装されていない場合は、レルムオーナーにお問い合わせください。グループが実装されると、使用ドキュメントを含む個別のハンドブックページが作成されます。

| グループ名（AWS アカウント/GCP プロジェクト名） | 使用ドキュメント（空のセルはまだ実装されていません）                                                         |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `eng-security-shared-infra`               | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-security-shared-infra)-->                       |
| `eng-security-shared-services`            | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-security-shared-services)-->                    |
| `eng-security-ops-red`                    | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-security-ops-red)-->                            |
| `eng-security-ops-incident-response`      | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-security-ops-incident-response)-->              |
| `eng-security-ops-trust-safety`           | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-security-ops-trust-safety)-->                   |
| `eng-security-risk-compliance`            | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-security-risk-compliance)-->                    |
| `eng-security-eng-app-sec`                | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-security-eng-app-sec)-->                        |
| `eng-security-eng-automation`             | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-security-eng-automation)-->                     |
| `eng-security-eng-research`               | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-security-eng-research)-->                       |

## 使用ガイドライン

これは、このインフラのベストプラクティスと使用ガイドラインに関するレルムオーナーの指示のプレースホルダーです。
