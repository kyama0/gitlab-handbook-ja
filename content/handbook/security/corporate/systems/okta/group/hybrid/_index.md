---
title: ハイブリッド Okta グループ
upstream_path: /handbook/security/corporate/systems/okta/group/hybrid/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## 概要

ハイブリッドグループは、両方の良いとこ取りをしたものです。Workday 属性に基づく **自動メンバーシップ** と、アクセス要求を通じて **例外を手動で追加する** 機能を兼ね備えています。これらのグループは通常、メンバーを同期しグループを自動化するために、Google や Slack などの GitLab の他のサービスにプッシュされることを想定しています。

**ハイブリッドグループを使うのは次のような場合です**

* グループの大半のメンバーは Workday 属性によって自動的に追加できる
* 少数の例外を含める必要がある（例: 部門グループを支援するエグゼクティブアシスタント、クロスファンクショナルなパートナー）

**ハイブリッドグループは次の組み合わせを使用します**

* Okta グループルール - 属性に基づいてコアメンバーシップを自動的に投入する
* アクセス要求による手動追加 - 承認された例外を追加できるようにする

### 例

**グループ:** push.google.dept.brand_design - "Brand Design" 部門の全メンバーを含むメーリングリスト

**Google グループ:** dept.brand_design@gitlab.com

**自動メンバー:** Department = Brand Design のすべての従業員

**手動追加:** Marketing 部門グループ（Brand Design の親）を支援するエグゼクティブビジネスアドミニストレーター (EBA) と、6 か月のキャリアエクスペリエンス（両方の役割を同時に担当）を行っている Campaigns 部門のメンバー

## メンバーシップのライフサイクル

**自動メンバー:** Workday データの変更時（1 時間以内）に自動的に追加・削除される

**手動メンバー:** チームメンバーはアクセス要求 Issue を使って手動でグループに追加してもらえる

**両方のタイプ:** ユーザーが GitLab を退職するときには自動的に削除される

## 命名規則

ハイブリッドグループはほとんどの場合アプリケーション push グループであり、一般的に他のアプリグループと同じパターンに従います。

**パターン:** push.{application}.{attribute}.{value}.{secondary_value}.{tertiary_value}

### 例

* **push.google.div.security** - 手動追加が有効化された Security 部門グループの Google グループ

* **push.slack.dept.engineering** - 手動追加が有効化された Engineering 部門の Slack グループ
  * Slack グループは単に dept.engineering と命名される

* **push.google.dept.brand_design.manager** - 手動追加が有効化された Google 内の Brand Design マネージャー
  * Google グループは Brand Design Dept Managers と命名され、メールアドレスは dept.brand_design.manager@gitlab.com になる

注: 私たちの規則どおりに命名できない状況に出くわすこともあります。
例として、アプリケーションがグループ属性マッピングをサポートしていて、Okta グループを特定のフォーマットにする必要がある場合があります。
Push グループは多くの場合、ダウンストリームのアプリケーションでリネームしてそのサービスのニーズに揃えつつ、Okta では正しい規則を維持できます。
Google 内では `push.google.div.security` という Okta グループでも、Google Workspace 上では `Security Division Employees` として表示されるよう構成できます。
