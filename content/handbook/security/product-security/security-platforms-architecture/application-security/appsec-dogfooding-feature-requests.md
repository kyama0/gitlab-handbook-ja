---
title: "Application Security - ドッグフーディングと製品機能のリクエスト"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/appsec-dogfooding-feature-requests/
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
translated_at: "2026-11-01T05:08:55+00:00"
translator: claude
stale: false
lastmod: "2026-10-30T14:17:26-04:00"
---

## 概要 {#overview}

このページでは、特定の Issue やエピックが Application Security（AppSec）チームの優先事項であることを示すラベルの使用について説明します。このラベルは、GitLab 製品のドッグフーディングの一環として、AppSec チームに有益なプロダクト機能リクエストの分類、追跡、共有に役立ちます。

### `~"Internal Request::AppSec Team"` ラベル {#internal-requestappsec-team-label}

- [gitlab-org でこのラベルが付いた Issue のリストへのリンク](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Internal%20Request%3A%3AAppSec%20Team&first_page_size=20)。
- [gitlab-com でこのラベルが付いた Issue のリストへのリンク](https://gitlab.com/groups/gitlab-com/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Internal%20Request%3A%3AAppSec%20Team&first_page_size=20)。

#### 使用方法 {#usage}

AppSec チームが GitLab（製品）に組み込まれるべき新しいセキュリティ機能や改善をリクエストする場合に、`~"Internal Request::AppSec Team"` ラベルを適用してください。

#### 重要な注意事項 {#important-note}

このラベルは脆弱性には適用されません。脆弱性に関連する Issue は `~bug::vulnerability` ラベルを使用する必要があります。
