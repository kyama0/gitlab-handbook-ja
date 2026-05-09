---
title: "Identity アーキテクチャ境界"
description: "組織レベルおよび製品本番システムへのアクセスについては、デバイス、ユーザー、権限、ラテラルムーブメントの保証のために、パラノイアレベルの多層防御を採用しています。このページでは、Identity チームが城壁の境界を保護するために利用するさまざまなメカニズムとツールについて説明します。"
upstream_path: /handbook/security/identity/boundaries/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## セキュリティリスクの免責事項

私たちは透明性の一環として、何を行っているかについての高レベルな説明を共有しますが、それをどのように行っているかの詳細は公表しません。この高レベルの概要を公開することで、姿勢を改善するために是正できる不備についてコミュニティからフィードバックを受け取れる傾向があります。

世界のソースコードは、ベストプラクティスを共に協力することでより安全になります。もしこれを侵入できる方がいれば、ぜひ私たちのチームに参加することについてお話ししたいです。

脆弱性の報告については、私たちのバグバウンティおよび責任ある開示のプロセスを利用してください。

## 城壁

### 管理 Kingdom

```mermaid
graph TB

subgraph Jamf MDM Profile
subgraph SentinelOne EDM Monitoring
subgraph Separate BLACK 1Password User Account and Vault
subgraph Separate BLACK Okta User Account
subgraph Separate BLACK Google Workspace User Account
subgraph Okta Verify Device Trust
subgraph Okta Hardware 2FA with YubiKey
subgraph NordLayer VPN with Dedicated Gateway Static IPs
subgraph Read-Only Role by Default
subgraph Teleport Two Person Verification for JIT Role Assumption
direction TB
subgraph AWS Identity Center 2FA with YubiKey
BLACK_OPS_KINGDOM["Black Ops Kingdom"]
end
subgraph Google Account Hardware 2FA with YubiKey
PRODUCT_PRD_KINGDOM["Product Prd Kingdom"]
end
end
end
end
end
end
end
end
end
end
end
IDENTITY_USER["Identity Team Member<br />with BLACK Admin Account"]
INFRA_USER["Infrastructure Team Member<br />with BLACK Admin Account"]
BLACK_OPS_KINGDOM --> IDENTITY_USER
PRODUCT_PRD_KINGDOM --> INFRA_USER
```

## インサイダーアクセスの信頼

各 Kingdom のラテラルムーブメント制御は異なり、公にも共有されていません。機密領域には追加の隠れた監視制御があり、すべてのアクティビティがクロスファンクショナルなチームによって監視され、アクションがユーザーと検証され、根拠ドキュメント (インシデント / Issue / チケットなど) にマッピングされていることを保証します。

GitLab Identity v2 から GitLab Identity v3 へとイテレーションを進めるにつれて、ラテラルムーブメントの可能性を防ぐため、スコープ付きアクセスポリシーを洗練していきます。
