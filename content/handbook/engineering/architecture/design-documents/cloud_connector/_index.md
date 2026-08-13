---
title: "Cloud Connector"
upstream_path: /handbook/engineering/architecture/design-documents/cloud_connector/
upstream_sha: d8fb317567e8e271f91f602d97d453ad1a69a00a
translated_at: "2026-08-14T00:19:19+09:00"
translator: claude
stale: false
lastmod: "2026-08-13T15:10:33+03:00"
---

## 概要

Cloud Connector は元々、同名のチームによって作成・所有されていましたが、そのチームは現在新しいグループに分割されています：

- Sec:Authentication [チーム](../../../../engineering/development/sec/security-platform/authentication/_index.md)
- Fulfillment [チーム](../../../../engineering/development/fulfillment/_index.md)

各領域の ADR を追跡するには、専用のディレクトリを参照してください：

- SCSS Authentication [ディレクトリ](authentication/_index.md): Cloud Connector の認証（トークンの発行とクリア、OIDC ディスカバリ）をカバー。
- Fulfillment [ディレクトリ](fulfillment/_index.md): ユニットプリミティブカタログとその同期方法、関連する権限チェックおよびインターフェースをカバー。
