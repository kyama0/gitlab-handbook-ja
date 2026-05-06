---
title: "Engineering Infrastructure レルム"
description: "SaaS レルムには適さない、エンジニアリングインフラチーム共有およびチーム固有のインフラリソースをデプロイするためのレルムです。"
upstream_path: "/handbook/company/infrastructure-standards/realms/eng-infra/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: "claude"
stale: false
---

### クイックリンク

- [グローバルインフラストラクチャ標準](/handbook/company/infrastructure-standards/)
- [グローバルラベルおよびタグ](/handbook/company/infrastructure-standards/labels-tags/)
- [インフラストラクチャポリシー](/handbook/company/infrastructure-standards/policies/)
- [インフラストラクチャヘルプデスク](/handbook/company/infrastructure-standards/helpdesk/)

## 概要

このレルムは、`saas` レルムには適さない、エンジニアリングインフラチーム共有およびチーム固有のインフラリソースをデプロイするためのものです。


{{% panel header="**Engineering Infrastructure ハンドブックページとの将来的なイテレーション**" header-bg="info" %}}
[Engineering Infrastructure Environments ハンドブックページ](/handbook/engineering/infrastructure-platforms/environments/)が現在の環境に関する SSOT（信頼できる唯一の情報源）です。会社全体のインフラストラクチャ標準をイテレーションする WIP イニシアチブが進むにつれ、Engineering Infrastructure ページは、標準の文書化・実装・環境変更が行われるたびに段階的にリファクタリングされていきます。
{{% /panel %}}


### アクセスリクエスト

グループへのアクセスをリクエストするには、[グループアクセスリクエストチュートリアル](/handbook/company/infrastructure-standards/tutorials/groups/access-request/)をご参照ください。

> メール認証のセキュリティ上の理由から、インフラストラクチャリクエストはオーナーまたはカウンターパートへの GitLab Issues または Slack メッセージのみが許可されています。

### レルムオーナー

| 氏名                 | GitLab.com ハンドル     | グループ役割     | 役職                                               |
|----------------------|-------------------------|------------------|----------------------------------------------------|
| Dave Smith           | `dawsmith`              | オーナー         | Engineering Manager, Reliability Engineering       |
| Gerardo (Gerir) Lopez Fernandez | `glopezfernandez` | カウンターパート | Engineering Fellow, Infrastructure              |

## レルムラベルおよびタグ

各リソースには[グローバルラベル/タグ](/handbook/company/infrastructure-standards/labels-tags)と[レルムラベル/タグ](/handbook/company/infrastructure-standards/realms/eng-infra/labels-tags)を適用してください。

## レルムグループ

各インフラストラクチャグループには、グループメンバー用の共有 GCP プロジェクトおよび/または AWS アカウントがあります。

グループがまだ実装されていない場合は、レルムオーナーにお問い合わせください。グループが実装された後、使用方法のドキュメントを含む別のハンドブックページが作成されます。

| グループ名（AWS アカウント/GCP プロジェクト名） | 使用ドキュメント（空のセルは未実装）                                                                                    |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| `eng-infra-shared-infra`                      | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-infra-shared-infra)-->      |
| `eng-infra-shared-services`                   | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-infra-shared-services)-->   |
| `eng-infra-analytics`                         | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-infra-analytics)-->         |
| `eng-infra-scalability`                       | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-infra-scalability)-->       |
| `eng-infra-deliverability`                    | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-infra-deliverability)-->    |
| `eng-infra-reliability`                       | <!--[グループドキュメント](/handbook/company/infrastructure-standards/realms/eng-infra/groups/eng-infra-reliability)-->       |

## 使用ガイドライン

このインフラストラクチャに関するベストプラクティスおよび使用ガイドラインは、レルムオーナーが提供します（プレースホルダー）。
