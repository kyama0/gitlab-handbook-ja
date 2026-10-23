---
title: "ラップトップのディスク暗号化"
aliases:
  - /handbook/security/corporate/end-user-services/laptop-management/laptop-security/encryption/
upstream_path: /handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/encryption/
upstream_sha: "c9949657c5872e30f062664ae031e45198aa8562"
lastmod: "2026-10-23T12:38:14-05:00"
translated_at: "2026-10-23T21:06:59+00:00"
translator: codex
stale: false
---

## 概要 {#overview}

すべてのラップトップでフルディスク暗号化を有効にする必要があります。

すべてのチームメンバーは、新しいラップトップの注文またはオンボーディング Issue でディスク暗号化の証明を提出する必要がありました。

## Apple macOS {#apple-macos}

> **対応は不要です：** 私たちは [Fleet](/handbook/security/corporate/systems/macos/)を使用して FileVault を自動的に有効にし、設定が誤っているラップトップを監視します。新しい Mac では、セットアップ中に FileVault が有効になります。手動登録した Mac では、有効にするためにログアウトして再度ログインするよう求められます。

### 暗号化を確認し、証明を提出する {#verify-and-provide-proof-of-encryption}

1. **Apple メニュー** > **システム設定**を選択します。
2. **プライバシーとセキュリティ**をクリックします。
3. 下にスクロールして **FileVault** がオンになっていることを確認します。
4. **Apple メニュー** > **この Mac について**を選択し、シリアル番号を表示します。
5. 暗号化の証明を提出する必要がある場合は、両方のウィンドウを並べて表示し、1 枚のスクリーンショットを取得します。

[ベンダードキュメント - FileVault で Mac のデータを保護する](https://support.apple.com/guide/mac-help/protect-data-on-your-mac-with-filevault-mh11785/mac)

## Linux {#linux}

OS を最初にセットアップするときにディスク暗号化を有効にする必要があります。後からこの機能を有効にすることは、不安定になる可能性があるため推奨されません。

暗号化の証明を提出するには、`sudo dmsetup ls && sudo dmidecode -s system-serial-number && cat /etc/fstab` の出力を表示するスクリーンショットを取得します。
