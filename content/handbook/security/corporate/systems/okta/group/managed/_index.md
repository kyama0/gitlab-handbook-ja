---
title: マネージド Okta グループ
upstream_path: /handbook/security/corporate/systems/okta/group/managed/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## 概要

マネージド、ルールベース、属性ベース、ダイナミック、または自動化グループとは、Okta グループルールを使って作成され、特定の属性を持つすべてのメンバーを確実に含むグループのことです。レポート目的や、Okta workflows のような iPaaS ツールで他のサービスと同期するために使用できます。
"Employee Type" 属性を除き、明示的に言及されていない限り、すべてのマネージドグループは従業員のみで構成されます。
**重要なルール: これらのグループには、決して手動で追加されたメンバーを含めてはいけません。**

## オーナーシップ

CorpSec Identity チームが、私たちがサポートするすべての属性（下記「サポート対象の属性」セクションを参照）について、新規および既存のすべてのマネージドグループの作成と維持を担当します {LINK}。

これらのグループは、部門の追加・削除・変更、会社エンティティ名の変更、新しい国で従業員を雇用するたびに調整されます。

複数の属性にまたがる、複数の部門にまたがる、その他のマネージドグループが必要な場合は、CorpSec Issue を作成し {LINK}、自動化が必要なグループとその理由をお知らせください。

## 命名規則

すべてのマネージドグループは {attribute}.{attributeValue} のパターンに従います。

例:

* dept.engineering
* div.security
* country.us
* mgmt_level.manager

### 検討された代替案

* sot.* (source of truth)
* auto.* (automated)
* dyn.* (dynamic)

私たちはいくつかの理由でこの解決策を選びました。

* **コミュニティ標準** - 他のほとんどの組織は、属性ベースのグループやルールに対してプレフィックスを使用していないようです。
* **グループ名・ルール名の長さ** - プレフィックスを付けないことで、Okta グループルールの名前制限である 55 文字といった長さの制約に引っかかる可能性が低くなります。

## サポート対象の属性

マネージドグループ作成に使用できる Workday からの属性は次のとおりです。

| 属性 | 属性の短縮名 | 値の例 | グループ名の例 |
|-----------|---------------------|---------------|-------------------|
| Division | div | Security、Engineering、Sales | div.security |
| Department | dept | Accounting Operations、Communications、Corporate Security | dept.accounting_operations |
| Country Code | country | NL、US、CA | country.nl |
| Workday Management Level | mgmt_level | Director、Manager、Individual Contributor | mgmt_level.individual_contributor |
| Workday Company | company | GitLab Canada Corp.、GitLab Inc、GitLab Federal, LLC | company.gitlab_canada_corp |
| User Type | user_type | Employee、Contractor、Professional Services Partners | user_type.employee |

## ユースケース

これらのグループが価値を持つ例をいくつか挙げます。

* レポート: 特定の部門や部門グループのメンバー全員を素早く特定する
* コンプライアンス監査: 国や会社エンティティ別の従業員リストを生成する
* コミュニケーション: 特定の組織単位に対して告知を行う
* 自動化: Okta Workflows やその他の iPaaS 統合のソースグループとして使用する
* アプリケーションプロビジョニング: Google、Slack、その他のアプリケーション向けの push グループに供給する

## マルチ属性グループ

マネージドグループは、より具体的なターゲティングのために複数の属性を組み合わせることもできます。
一貫性のためにこの順序を推奨します。

1. Division
2. Department
3. Management Level
4. Workday Company
5. Country Code
6. Employee Type (**デフォルトのスコープ**: グループ名に別の従業員タイプが明示的に含まれない限り、すべてのグループはデフォルトで Employee のみです。例: user_type.contingent_worker)

例:

* **division.security.manager.us** - 米国の Security 部門グループ内のすべてのマネージャー
* **department.engineering.individual_contributor** - Engineering 内のすべての個人貢献者

## 文字数制限の制約

Okta グループルール名には 50 文字の制限があります。
Google グループには 73 文字の制限があります。ダウンストリームアプリケーションとの互換性を確保するため、組み合わせた属性グループは簡潔に保ってください。

## メンバーシップの更新

マネージドグループのメンバーシップは Workday データに基づいて自動的に更新されます。

* Workday の変更は 1 時間以内に Okta に同期される
* 手動介入は不要
* 変更はすべてのダウンストリーム push グループに自動的に伝播する
* これらのマネージドグループのいずれかに誰かを手動で追加してほしいという要求があった場合は、People Ops チームと連携して Workday 内の情報を更新してください。それ以外では、これらのマネージドグループにチームメンバーを手動で割り当てることはありません
