---
title: "Fulfillment: Seat Management の方向性"
description: "Seat Management グループは、購入したシートとアドオンのユーザー割り当てを扱い、ネームスペースをまたいだシート利用状況の可視性を提供します。"
upstream_path: /handbook/product/groups/fulfillment/direction/seat_management/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

**最終更新日**: 2025-08

## ミッション

直感的なシート割り当て、プロアクティブなコスト管理、シームレスなエンタープライズユーザープロビジョニングを通じて、お客様が GitLab への投資を最適化できるようにします。

## 概要

Seat Management グループは、Seat Cost Management と User Management の製品カテゴリを担当しており、ユーザーアクセスの効率的な管理、シートコストの制御、既存のエンタープライズ ID システムとの GitLab 統合に必要な包括的なツールと機能をお客様に提供します。

これらの領域に注力することで、Seat Management グループは請求のサプライズを排除し、ユーザー管理の管理オーバーヘッドを削減し、セキュリティとコストの統制を維持しながら、組織が効率的に GitLab の利用をスケールできるようにすることを目指しています。

## ビジョン

_私たちの長期的なソリューションコンセプトは何か? 例えとして、山頂に到達したときの景色はどうなっているか?_

現在、シート割り当て、管理、ユーザープロビジョニング、エンタープライズユーザー制御には改善の余地があります。これらの課題がお客様に与えている影響の例:

- 現在、お客様は Duo Pro や Duo Enterprise などのアドオンに対してシート割り当てを手動で管理しており、ベースプラン (Premium/Ultimate) は明示的な割り当てではなくユーザーロールからシートを導出しているため、リソース配分の予測が難しい状態です。
- 組織は、予算計画中の予期しないシート超過を防ぐための、シート利用状況の包括的な可視性とプロアクティブな統制を欠いています。
- SCIM、SAML、LDAP によるエンタープライズユーザー管理はうまく機能していますが、これらの機能を Restricted Access (Block Seat Overages) のようなコスト管理機能とより良く統合し、より幅広い採用を可能にする機会があります。
- 現在のロールベースのシート消費は、ユーザーがロール間を移動する際に予期しない請求シナリオを生み出すことがあります。

これらの問題を解決するために、私たちは以下を行います:

1. **シート割り当てモデル (SAM) を開発する。** ユーザーがグループやプロジェクトに追加されたときに、ロールに基づいて即座にサブスクリプションのシートを消費するモデルから移行します。SAM では、グループオーナーや管理者がまずユーザーをシートタイプに割り当て、そのシートタイプがグループおよびプロジェクトでユーザーが持てるロールを制御します。これにより、ユーザーが意図せずロール間を移動できる状況から脱却します。そのような状況は請求およびコンプライアンスの面で影響をもたらす可能性があります。
2. **意図しない超過を防止する。** 現在、すべてのお客様はシート超過に対して課金されます。今後はデフォルトの体験として、お客様がユーザーに割り当てる前にシートを購入することを必須にします。
3. **エンタープライズユーザー管理とコスト統制の統合を強化する。** SCIM プロビジョニング、SAML Group Sync、LDAP 同期が Restricted Access (Block Seat Overages) とどのように連携するかを改善し、シームレスなユーザーライフサイクル管理を維持しながら、より多くのお客様がこれらのコスト管理機能を採用できるようにします。

これらの変更は、すべてのお客様に同じように感じられるものではありません:

- 新規ユーザーの追加を摩擦なく行うことを最適化したいお客様は、これまでどおり GitLab と関わりつつ、GitLab.com の統合されたユーザービューや最適化された課金対象ユーザー計算といった強化も享受できます。コストに対してより多くの統制が欲しい場合は、それらを選んで有効化できます。
- 一方で、コスト管理を最適化したいお客様 (大多数) には、コスト管理のための追加の統制と可視性を提供します。

### 1 年ロードマップ

_私たちのビジョン達成と機能成熟度の向上に向けた意義ある一歩を踏み出すために、今後 12 か月でどこに注力するか?_

[詳細](https://internal.gitlab.com/handbook/product/fulfillment/seat-cost-management/) (非公開)

| やるべき仕事は何か? | なぜこの仕事を行うのか? |
|---------|--------|
| [Seat Assignment Model](https://gitlab.com/groups/gitlab-org/-/epics/13684) の実装 | Premium および Ultimate プランと Enterprise Agile Planning アドオン向けに、お客様に直感的なセルフサービスのシート割り当てを提供し、摩擦を減らしてリソース配分の効率を改善する。 |
| [Restricted Access 機能の完成](https://gitlab.com/groups/gitlab-org/-/epics/12452) | Restricted Access は利用可能ですが、特にユーザー管理プロトコル (SCIM/SAML/LDAP) に関連する既知の問題があります。 |
| [Dormant User の検出と管理を強化](https://gitlab.com/groups/gitlab-org/-/epics/18322) | 非アクティブユーザーを特定して管理することで、お客様がシート利用を最適化できるよう支援し、コスト削減に直接的なインパクトを与える。 |

Seat Management の [FY26 ロードマップ](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/2379)。

### 将来の検討候補

| やるべき仕事は何か? | なぜそれを検討しているか  |
|---------|--------|
| 合理化された Duo シート管理 |  Duo のシート割り当てを、既存のエンタープライズユーザー管理ワークフローとよりシームレスに統合する。 |
| 予測的なシート計画 | 利用トレンドに基づいて、お客様が将来のシートニーズを予測できるよう、予測機能を提供する。 |

Seat Management グループのすべての Epic と Issue は、[グループの HQ Epic](https://gitlab.com/groups/gitlab-org/-/epics/18073) で整理されています。

## 対象オーディエンス

Seat Management グループは以下にサービスを提供します:

- 自己管理型、GitLab.com、GitLab Dedicated のセルフサービスのお客様
- 自己管理型、GitLab.com、GitLab Dedicated のセールス支援のお客様
- 自己管理型、GitLab.com、GitLab Dedicated のチャネルパートナーとそのお客様

私たちのお客様は [buyer persona](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/) に該当し、会社規模や役割に応じて意思決定および購入プロセスで異なる役割を担うことがあります。

- SMB および中堅企業: [アプリケーション開発マネージャー](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/#app-dev-avery) は、チーム全体の使用状況を可視化し、自社の方針/プロセス/予算に合わせて使用状況を制御できる必要があります。
- 大企業またはエンタープライズ企業: [リリースおよび変更管理ディレクター](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/#release-rory) は、正確な請求と、使用状況情報に基づいた購入判断ができることに関心があります。

私たちがサービスを提供する社内チーム:

- [Support](/handbook/support/)
- [Customer Success](/handbook/customer-success/)
- [Sales](/handbook/sales/)

## 機能の概要と成熟度

_Seat Management グループはどのような機能を担当し、それらはどの程度成熟しているか?_

|  機能 | 成熟度 | 説明 |
|-----------|:--------:|-------------|
| シート利用状況の可視化 | 😊 Viable | お客様が何席使用されているか、誰が使用しているかを把握できる |
| 課金対象ユーザーの計算 | 🙂 Minimal | お客様が課金対象のシートが何席使用されているか、誰が使用しているか、いつ使用されているかを把握できる |
| シート制限 | 😊 Viable | お客様がユーザー数制限のしきい値内にいるかどうか、どう対処するか (削除、追加、シート制限の設定) を把握できる |
| Manage Non-billable Promotions | 🙂 Minimal | お客様が非課金対象ユーザーがいつ課金対象になるかを制御できる |
| Dormant User 管理 | 😊 Viable | お客様が非アクティブユーザーを特定・管理し、シート利用を最適化できる |
| Duo Pro & Enterprise シート割り当て | 😊 Viable | GitLab Duo Pro シートの合理化された割り当てと管理 |
| Enterprise Agile Planning シート割り当て | 🙂 Minimal | Planner ロールを通じた EAP シートの割り当て (統制機構は限定的で、セルフサービスでの購入は不可) |
| Seat Assignment Model (SAM) | 🌱 Planned | Premium および Ultimate ベースプラン向けの統一されたシート割り当て体験 |
| SCIM ユーザープロビジョニング | 😊 Viable | ID プロバイダーを通じた自動化されたユーザー作成、更新、プロビジョニング解除 |
| SAML Group Sync | 😊 Viable | ID プロバイダーのグループに基づいた自動的なロール割り当てとグループメンバーシップ |
| LDAP Group Sync | 😊 Viable | LDAP ディレクトリからのユーザーおよびグループ情報の毎時同期 |

**凡例:**

- 🌱 **Planned**: まだ実装されていないが、ロードマップ上にある。
- 🙂 **Minimal**: 限られたユースケースで利用可能。社内チーム向けの一定の透明性あり。
- 😊 **Viable**: ほとんどのユースケースで利用可能。社内チーム向けの一定の透明性あり。
- 😁 **Complete**: 適格なすべてのユースケースで完全に機能。社内チーム向けの完全な透明性あり。
- 😍 **Lovable**: 外部および社内のユーザーから絶賛されている。
