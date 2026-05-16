---
title: Okta Verify
upstream_path: /handbook/security/corporate/systems/okta/verify/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-31T14:58:28-07:00"
---

Okta Verify は多要素認証 (MFA) アプリです。Okta または Okta で保護されたアプリケーションにサインインする際、Verify は 2 つ目の証明形式を求めることで、本当にあなたであることを確認します。

## 機能

MFA を超えて、Okta Verify は [Okta Device Trust](https://internal.gitlab.com/handbook/security/corporate/tooling/okta/okta-device-security/) を有効化します — デバイスを Okta に登録することで、サインイン時にデバイスポスチャチェック (OS バージョン、暗号化、画面ロックなど) を評価できるようになります。これにより、GitLab は資格情報だけでなくデバイスのセキュリティ状態に基づいてアクセスポリシーを適用できます。
