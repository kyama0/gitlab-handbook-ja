---
title: Linux デスクトップ OS セキュリティ標準
upstream_path: /handbook/security/corporate/systems/linux/security/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

Linux は macOS の代替として利用可能ですが、サポートが限定的なため推奨されていません。Linux を選択することにより、ご自身の環境を維持する全責任を引き受けたものとし、IT がサポートを提供しないことを理解したものとみなされます。Slack には Tips やコツを交換するための #linux チャンネルがありますが、これは公式のヘルプデスクリソースではありません。

**Ubuntu LTS（最新バージョン）が唯一の承認された Linux ディストリビューションです。**

## セキュリティ要件

すべての Linux エンドポイントは、以下のセキュリティ標準を満たす必要があります:

| 要件 | 詳細 |
| :--- | :--- |
| **Fleet 登録** | すべての Linux エンドポイントで必須 |
| **EDR エージェント** | CrowdStrike または SentinelOne（リージョン依存） |
| **フルディスク暗号化** | LUKS 暗号化が必要 |
| **OS バージョン** | Ubuntu LTS（最新） |
| **セキュリティパッチ** | リリースから 7 日以内に適用必須 |
| **ユーザーアカウント** | 通常のユーザーアカウントである必要があり、管理操作には `sudo` を使用すること |
| **YubiKey** | 認証には YubiKey 5 FIPS が必要 |

YubiKey のセットアップについては、[注文ガイド](/handbook/security/corporate/systems/yubikey/purchasing/)および[ユーザーガイド](/handbook/security/corporate/systems/yubikey/2fa/)を参照してください。

Fleet は、セキュリティ設定の確認、暗号化およびファイアウォールステータスの検証、EDR ソリューションの展開、リモートワイプ機能の有効化に使用されます。
