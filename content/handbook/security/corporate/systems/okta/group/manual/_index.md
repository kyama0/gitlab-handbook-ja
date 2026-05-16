---
title: 手動 Okta グループ
upstream_path: /handbook/security/corporate/systems/okta/group/manual/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-25T19:22:00+01:00"
---

## 概要

手動グループとは、メンバーシップが主にアドホックで、ユーザー属性に基づいて自動化できないグループのことです。メンバーシップは Okta 内で手動調整するか、最終的には Lumos のような Identity Governance and Administration (IGA) ツールを使って投入できます。

## 手動グループを使うべきケース

手動グループは次のような用途に使ってください。

* **アプリのメンバーシップ:** Figma のようなアプリは GitLab の任意のチームメンバーにとって有用な可能性があります。手動グループを使うことで、チームメンバーが必要なアクセスをリクエストし、IGA ツール Lumos 経由で承認を得ることができます
* **プロジェクトベースのチーム:** 組織構造に揃わないクロスファンクショナルなプロジェクトチーム
* **一時的なアクセス:** 業務委託、コンサルタント、特別な取り組み向けの期間限定グループ
* **例外ケース:** 通常の組織属性外のアクセスが必要なユーザー
* **カスタム業務グループ:** 標準化されていない基準でユーザーをまとめるグループ（例: "Product Launch Team"、"Executive Leadership"、"Budget Approvers"）

## 手動グループを使うべきでないケース

**自動化できる場合は自動化すべきです。** 手動グループは保守の負担を生み、メンバーシップが古くなるリスクがあります。
メンバーシップが次のような Workday 属性で定義できる場合は、手動グループを避けてください。

* 部門グループ (Division) または部門 (Department)
* 国 (Country)、会社 (Company)、または所在地 (Location)
* 管理レベル (Management Level) またはユーザータイプ (User Type)
* 上記の組み合わせ

## 命名規則

手動グループは、一般的に [Okta グループの命名規則](/handbook/security/corporate/systems/okta/group/nomenclature/) のアプリケーション固有の命名パターンに従ってください。

例:

* app.figma.collab
* app.zendesk.customer_support.admins
* app.google.kickoff_team_planners
