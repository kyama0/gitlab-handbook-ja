---
title: Apple macOS
description: "CorpSec が Fleet で GitLab の Mac を管理する方法"
upstream_path: /handbook/security/corporate/systems/macos/
upstream_sha: "c9949657c5872e30f062664ae031e45198aa8562"
translated_at: "2026-10-23T21:08:25+00:00"
translator: claude
stale: false
lastmod: "2026-10-23T12:38:14-05:00"
---

GitLab 管理のすべての Mac は、デバイス管理のために [Fleet](https://fleetdm.com/)に登録されます。Fleet は、私たちの [Linux](/handbook/security/corporate/systems/linux/)および Windows エンドポイントも管理します。Fleet に登録されていない Mac から GitLab Corporate サービスにアクセスしてはいけません。

## 要件 {#requirements}

| 要件 | 詳細 |
| :--- | :--- |
| **Fleet 登録** | すべての Mac で必須です。[Mac を登録する](#enroll-your-mac)を参照してください。 |
| **OS バージョン** | 登録には macOS 15 以降が必要です。アップデート通知に表示される期限までにアップデートをインストールしてください。 |
| **フルディスク暗号化** | FileVault がオンになっている必要があります。 |
| **EDR エージェント** | 自動的にインストールされます。削除しないでください。 |
| **ユーザーアカウント** | セットアップ中に作成されたローカルアカウントを使用してください。 |

## Mac が登録されているか確認する {#check-whether-your-mac-is-enrolled}

1. Apple メニューをクリックし、**システム設定**を開きます。
1. **一般** > **デバイス管理**を選択します。
1. Fleet MDM プロファイルが一覧に表示されていれば、Mac は登録済みであり、それ以上の対応は不要です。**デバイス管理**が空、または表示されない場合は、[Mac を登録する](#enroll-your-mac)の手順に従ってください。

メニューバーで Fleet アイコンを探すこともできます。アイコンをクリックして**マイデバイス**を選択すると、準拠していないポリシーやその修正方法など、Fleet での Mac の状態を確認できます。

## Mac を登録する {#enroll-your-mac}

GitLab を通じて購入された新しい Mac は、設定アシスタントの**デバイス管理**画面で**登録**をクリックし、Okta にサインインすると登録されます。[オンボーディング 101 の Mac セットアップ手順](/handbook/eta/corporate-it/end-user-services/onboarding101/#mac-setup)に従ってください。この手順は、交換用の Mac や IT がワイプした Mac にも適用されます。

セットアップ中に**デバイス管理**画面が表示されない場合、Mac は Fleet に割り当てられていません。代わりに[手動登録](/handbook/eta/corporate-it/end-user-services/onboarding101/#manual-mac-setup)を使用してください。

## 追加リソース {#additional-resources}

- [ラップトップのセキュリティ設定基準](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/)
- [ラップトップのワイプ（初期化）プロセス](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-wipe/)
