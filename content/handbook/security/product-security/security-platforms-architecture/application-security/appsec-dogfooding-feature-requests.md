---
title: "Application Security - Dogfoodingおよびプロダクト機能リクエスト"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/appsec-dogfooding-feature-requests/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-06T19:27:57-05:00"
---

## 概要

このページでは、特定のIssueやエピックがApplication Security(AppSec)チームの優先事項であることを示すラベルの使用について説明します。このラベルは、[GitLab製品のdogfooding](/handbook/values/#dogfooding)の一環として、AppSecチームに有益なプロダクト機能リクエストの分類、追跡、共有に役立ちます。

### `~"Internal Request::AppSec Team"` ラベル

- [gitlab-orgでこのラベルが付いたIssueのリストへのリンク](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Internal%20Request%3A%3AAppSec%20Team&first_page_size=20)。
- [gitlab-comでこのラベルが付いたIssueのリストへのリンク](https://gitlab.com/groups/gitlab-com/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Internal%20Request%3A%3AAppSec%20Team&first_page_size=20)。

#### 使用方法

AppSecチームがGitLab(製品)に組み込まれるべき新しいセキュリティ機能や改善をリクエストする場合に、`~"Internal Request::AppSec Team"` ラベルを適用してください。

#### 重要な注意事項

このラベルは脆弱性には適用されません。脆弱性に関連するIssueは `~bug::vulnerability` ラベルを使用する必要があります。
