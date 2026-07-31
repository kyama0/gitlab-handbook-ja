---
title: "ラップトップのディスク暗号化"
upstream_path: /handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/encryption/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:37:15+09:00"
translator: codex
stale: false
---

## 概要

すべてのラップトップでハードドライブのディスク暗号化を有効にする必要があります。Jamf ポリシーによりディスク暗号化は自動的に有効になります

すべてのチームメンバーは、新しいラップトップの注文またはオンボーディング Issue でディスク暗号化の証明を提出する必要があります。

## 構成手順

### Apple macOS

> **対応は不要です:** [Jamf](/handbook/security/corporate/systems/jamf)を使用してハードドライブ暗号化を自動的に有効にし、構成が誤っているラップトップを監視します。何かを構成する必要はありませんが、有効であることを確認することを推奨します。

ラップトップのハードドライブが暗号化されていることを確保するには、FileVault を有効にする必要があります。

1. Mac で、Apple メニュー ** > System Settings** を選択します。
2. "Security & Privacy" アイコンをクリックします。
3. "FileVault" タブをクリックします。
4. FileVault がオンで、ドライブが暗号化されていることを確認します。

[ベンダードキュメント - FileVault で Mac のデータを保護する](https://support.apple.com/guide/mac-help/protect-data-on-your-mac-with-filevault-mh11785/mac)

### Linux

OS を最初にセットアップするときにディスク暗号化を有効にする必要があります。後からこの機能を有効にすることは、不安定になる可能性があるため推奨されません。

## 暗号化の証明

フルディスク暗号化の証明を提出するには、使用しているシステムに応じて以下を実施してください。

### Apple macOS

フルディスク暗号化が有効である確認とシリアル番号を示す情報の両方を、2 つのウィンドウを並べて表示した 1 枚のスクリーンショットとして取得します。

両方の情報は以下で確認できます:

1. メニューバーで ** > System Settings** をクリックします。
2. "Security & Privacy" アイコンをクリックします。
3. "FileVault" タブをクリックします。
4. 次にメニューバーで ** > About This Mac** をクリックします。
5. 両方のウィンドウを並べてスクリーンショットを取得します

### Linux

`sudo dmsetup ls && sudo dmidecode -s system-serial-number && cat /etc/fstab` の出力を表示するスクリーンショットを取得します
