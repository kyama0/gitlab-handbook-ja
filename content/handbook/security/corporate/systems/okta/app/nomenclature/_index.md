---
title: Okta アプリの命名規則
upstream_path: /handbook/security/corporate/systems/okta/app/nomenclature/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## 概要

Okta アプリは Okta の基本構成要素です。標準化された命名規則により、アプリの検出、管理、追跡が容易になります。明確な命名は、アプリの監査、目的の理解と伝達を容易にします。

### 命名規則

**推奨:**

- アプリ名と機能の論理的な区切りにハイフン (-) を使う
- 環境名を括弧 () で囲む
- 名前の先頭は大文字にする
- Okta がサポートする文字セット: [文字セットのドキュメント](https://developer.okta.com/docs/reference/core-okta-api/#character-sets)

**避けるべき:**

- 長い名前（最大 100 文字）
- テナント ID、Client ID、シークレットなどの機密情報を含めること
- スペースを -、_、. などの文字に置き換えること
- エンドユーザー向けの名前にアイデンティティ技術用語を含めること（例: SAML、OIDC、WS-FED、SCIM）
- GitLab で広く認知されているか、システム上の制約で必要な場合を除き、単語の短縮形や略語を使うこと（例: SFDC ではなく Salesforce を使うが、Amazon Web Services の代わりに AWS を使うのは許容される）

## アプリの種類と命名規則

技術的な理由でできない場合を除き、すべての Okta アプリにこの命名形式を使います。各種アプリの例については下記を参照してください。

**構文:**

`{app name} (environment) - {function}`

### エンドユーザー向けのアプリ

**構文:**

`{app name}`

エンドユーザー向けのアプリは、Okta ユーザーに **可視** であり、**Okta ダッシュボードに表示される** アプリです。

エンドユーザー向けのアプリには次のものが含まれます。

- ブックマークアプリ
- SWA アプリ
- IdP 起点の SAML アプリ
- "Either Okta or App" 起点ログインをサポートする OIDC アプリ

**例:**

- `Slack`
- `Google Workspace`
- `GitLab`

### SSO アプリ

**構文:**

`{app name} - SSO`

SSO アプリは、**SSO** (OIDC、SAML、WS-Fed) を扱う専用アプリで、**エンドユーザーに表示されません**。SSO アプリには、ユーザーがログインするための公開向け URL を提供しない OIDC や SP 起点の SAML アプリが含まれます。

**例:**

- `Slack - SSO`
- `Google Workspace - SSO`
- `GitLab - SSO`

### SCIM アプリ

**構文:**

`{app name} - Provisioning`

プロビジョニングアプリは、**ユーザープロビジョニングのみ** のための専用アプリです。これには SCIM、API、その他アプリ内のユーザープロビジョニングを扱うアプリ統合が含まれます。

**例:**

- `Slack - Provisioning`
- `Google Workspace - Provisioning`
- `GitLab - Provisioning`

### API サービスアプリ

**構文:**

`{app name} - API`

API サービスアプリは、サードパーティアプリが Okta API にアクセスできるようにします。API アプリ名は、それを利用するサービス、自動化、統合と同じ名前にすべきです。

**例:**

- `CorpSec Read Only - API`

### プロファイルソースアプリ

**構文:**

`{app name} - Profile Source`

プロファイルソースアプリは、Okta におけるユーザーアイデンティティの単一の信頼できる情報源として機能するアプリです。プロファイルソースは、アプリと Okta の間でユーザー作成、更新、終了イベントを同期することにより、ユーザーのライフサイクル全体（作成、更新、無効化）の管理を支援します。

**例:**

- `Workday - Profile Source`

### アプリ環境

**構文:**

`{app name} (environment)`

一部のアプリは複数の環境、テナント、組織をサポートします。アプリに複数の環境がある場合は、環境名を含めるべきです。環境名は他のアプリ命名規則 (SSO、SCIM、API、Profile Source) と組み合わせて使用できます。

**例:**

- `Slack (Sandbox)`
- `Google Workspace (Sandbox) - SSO`
- `GitLab (Dedicated) - Provisioning`

## エッジケースと特殊シナリオ

**多目的アプリ**

一般的に、アプリは SSO やプロビジョニングなど、特定の単一の機能を担うべきです。しかし一部のアプリは複数の機能を担うことがあります（例: SSO と SCIM の両方）。これは特に歴史的経緯のあるアプリや、機能を複数のアプリインスタンスに分割できない特定の制約があるアプリに当てはまります。そのような場合、アプリ名はアプリの可視性と目的に基づいて決定されます。

- アプリがエンドユーザーに可視の場合は、ユーザーフレンドリーな名前を使う（例: `GitLab`）
- アプリが SSO と SCIM を組み合わせている場合は、SSO アプリの命名規則を使う（例: `GitLab - SSO`）
