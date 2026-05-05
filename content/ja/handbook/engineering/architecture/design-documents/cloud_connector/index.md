---
title: "Cloud Connector"
upstream_path: /handbook/engineering/architecture/design-documents/cloud_connector/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-27T03:34:38Z"
translator: claude
stale: false
---

## 概要

Cloud Connector は元々、同名のチームによって作成・所有されていましたが、そのチームは現在新しいグループに分割されています：

- SSCS:Authentication [チーム](../../../../engineering/development/sec/software-supply-chain-security/authentication.md)
- Fulfillment [チーム](../../../../engineering/development/fulfillment/index.md)

各領域の ADR を追跡するには、専用のディレクトリを参照してください：

- SCSS Authentication [ディレクトリ](authentication/index.md): Cloud Connector の認証（トークンの発行とクリア、OIDC ディスカバリ）をカバー。
- Fulfillment [ディレクトリ](fulfillment/index.md): ユニットプリミティブカタログとその同期方法、関連する権限チェックおよびインターフェースをカバー。
