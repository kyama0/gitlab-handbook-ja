---
title: ラップトップのディスク暗号化
upstream_path: /handbook/security/corporate/end-user-services/laptop-management/laptop-security/encryption/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

## 概要

すべてのラップトップでハードドライブのディスク暗号化を有効にする必要があります。Jamf ポリシーがディスク暗号化を自動的に有効にします。

すべてのチームメンバーは、新規ラップトップ注文またはオンボーディング Issue でディスク暗号化の証明を提出する必要があります。

## 設定手順

### Apple macOS

> **アクション不要:** 私たちは [Jamf](/handbook/security/corporate/systems/jamf) を使用してハードドライブの暗号化を自動的に有効にし、設定が誤っているラップトップを監視しています。設定を行う必要はありませんが、有効になっていることを確認することをおすすめします。

ラップトップのハードドライブが暗号化されていることを確実にするため、FileVault を有効にする必要があります。

1. Mac で **Apple メニュー > システム設定**を選択します。
2. 「セキュリティとプライバシー」アイコンをクリックします。
3. 「FileVault」タブをクリックします。
4. FileVault が有効になっており、ドライブが暗号化されていることを確認します。

[ベンダードキュメント - FileVault で Mac のデータを保護する](https://support.apple.com/guide/mac-help/protect-data-on-your-mac-with-filevault-mh11785/mac)

### Linux

OS の初期セットアップ時にディスク暗号化を有効にする必要があります。後から機能を有効にすることは、不安定さの原因となる可能性があるため推奨しません。

## 暗号化の証明

完全ディスク暗号化の証明を提出するには、稼働しているシステムに応じて以下を実施してください。

### Apple macOS

完全ディスク暗号化が有効になっていることの確認画面と、シリアル番号を示す情報の両方を、2 つのウィンドウを横並びで表示した 1 枚のスクリーンショットで撮影してください。

両方の情報は、以下の手順で確認できます。

1. メニューバーで ** > システム設定**をクリックします。
2. 「セキュリティとプライバシー」アイコンをクリックします。
3. 「FileVault」タブをクリックします。
4. 次に、メニューバーで ** > この Mac について**をクリックします。
5. 両方のウィンドウを横並びでスクリーンショットに収めます。

### Linux

`sudo dmsetup ls && sudo dmidecode -s system-serial-number && cat /etc/fstab` の出力を示すスクリーンショットを撮影してください。
