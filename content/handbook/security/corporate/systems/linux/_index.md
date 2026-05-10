---
title: Linux デスクトップ OS
upstream_path: /handbook/security/corporate/systems/linux/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

Linux は GitLab チームメンバーにとって macOS の代替として利用可能ですが、サポートが限定的なため推奨されていません。Linux を選択することにより、ご自身の環境を維持する全責任を引き受けたものとし、IT がサポートを提供しないことを理解したものとみなされます。Slack には Tips やコツを交換するための `#linux` チャンネルがありますが、これは公式のヘルプデスクリソースではありません。

## 承認されたディストリビューション

**Ubuntu LTS（最新バージョン）が唯一の承認された Linux ディストリビューションです。** Dell が唯一の承認された Linux ラップトップベンダーです。Ubuntu LTS は、リモート管理および EDR ソリューションに必要なソフトウェアパッケージをサポートするために必要です。

## 要件

すべての Linux エンドポイントは、以下のセキュリティおよびコンプライアンス標準を満たす必要があります:

| 要件 | 詳細 |
| :--- | :--- |
| **Fleet 登録** | すべての Linux エンドポイントで必須。[登録手順](https://internal.gitlab.com/handbook/security/corporate/tooling/fleet/#enrolling-in-fleet)（内部リンク） |
| **EDR エージェント** | CrowdStrike または SentinelOne（リージョン依存、Fleet 経由で自動インストール） |
| **フルディスク暗号化** | LUKS 暗号化が必要 |
| **ファイアウォール** | 有効化必須（`ufw`） |
| **OS バージョン** | Ubuntu LTS（最新） |
| **セキュリティパッチ** | リリースから 7 日以内に適用必須 |
| **ユーザーアカウント** | 通常のユーザーアカウントである必要があり、管理操作には `sudo` を使用すること |
| **YubiKey** | 認証には YubiKey 5 FIPS が必要 |

YubiKey のセットアップについては、[注文ガイド](/handbook/security/corporate/systems/yubikey/purchasing/)および[ユーザーガイド](/handbook/security/corporate/systems/yubikey/2fa/)を参照してください。

## リージョン別の EDR 要件

EDR の展開は、仮想マシンを含むすべてのチームメンバーのエンドポイントシステムで必須です。Docker コンテナは MDM/EDR 登録要件から除外されます。

| EDR ソリューション | リージョン |
| :--- | :--- |
| **SentinelOne** | オランダ、ドイツ、イタリア、オーストリア |
| **CrowdStrike** | その他すべてのリージョン |

**注:** ラップトップ上の仮想ホストにも EDR エージェントをインストールする必要があります。

## Fleet 登録

Fleet は、Linux エンドポイント向けの osquery ベースのデバイス管理および可視化プラットフォームです。以下の用途で使用されます:

- セキュリティ設定の確認
- 暗号化およびファイアウォールステータスの検証
- EDR ソリューションの展開
- リモートワイプ機能の有効化
- デバイス状態のリアルタイムクエリの提供
- ソフトウェアインベントリと脆弱性検出

すべての Linux エンドポイントは Fleet に登録する必要があります。登録手順については、[Fleet ハンドブックページ](https://internal.gitlab.com/handbook/security/corporate/tooling/fleet/)を参照してください。

## ファイアウォール

Linux マシンは、Fleet 経由で管理される組み込みファイアウォール (`ufw`) を使用します。これは、CrowdStrike 統合ファイアウォールを使用する macOS および Windows デバイスとは異なります。

## あなたの責任

Linux ユーザーとして、あなたは以下の責任を負います:

- Linux 環境の維持
- セキュリティパッチおよびバージョンアップグレードの適用
- すべてのエンドポイント管理ポリシーへのコンプライアンスの確保
- システムを Fleet に登録し続け、必要な EDR エージェントを実行し続けること

## サポート

- **Slack チャンネル:** `#linux` - Tips やコツ用（公式ヘルプデスクではありません）
- **セキュリティサポート:** `#security_help` - Fleet および EDR 支援用
- **EDR ヘルプ:** `#crowdstrike` または `#sentinelone`（リージョンに応じて）

## 追加リソース

- [Linux セットアップガイド](/handbook/security/corporate/systems/linux/setup/)
- [Linux セキュリティ標準](/handbook/security/corporate/systems/linux/security/)
- [Linux ツールと Tips](/handbook/tools-and-tips/linux/)
- [Fleet ドキュメント](https://fleetdm.com/docs)
