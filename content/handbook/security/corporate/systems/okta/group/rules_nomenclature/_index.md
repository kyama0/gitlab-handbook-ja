---
title: Okta グループルールの命名規則
upstream_path: /handbook/security/corporate/systems/okta/group/rules_nomenclature/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-25T19:22:00+01:00"
---

## 概要

Okta グループルールは、検出、管理、監査をしやすくするために標準化された命名規則に従う必要があります。

### ガイド

可能な場合は、グループルール名はそのルールがメンバーシップを管理しているグループ名と同じにしてください。

> 命名構文の詳細は [Okta グループの命名規則](/handbook/security/corporate/systems/okta/group/nomenclature/) を参照してください。

**例:**

- グループルール: `app.google_worskpace.employees`
  - 条件: `user.userType=="Employee"`
  - グループ: `app.google_workspace.employees`

グループルールが複数のグループのメンバーシップを管理する場合、グループルール名はそのルールの目的を分かりやすく簡潔に説明するものにしてください。

**例:**

- グループルール: `Corporate Security Department`
  - 条件: `user.department=="Corporate Security"`
  - グループ: `dept.corporate_security`、`div.security`、`app.gitlab.corporate_security`
