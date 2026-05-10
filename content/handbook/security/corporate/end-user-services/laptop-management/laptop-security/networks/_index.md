---
title: ラップトップのワイヤレスネットワーク
upstream_path: /handbook/security/corporate/end-user-services/laptop-management/laptop-security/networks/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

## 概要

自宅、または友人や家族の家のワイヤレスネットワークに接続することは安全です。

- [ベンダードキュメント - Wi-Fi: WiFi ネットワークへの接続](https://support.apple.com/guide/mac-help/use-the-wi-fi-status-menu-on-mac-mchlfad426fa/14.0/mac/14.0)
- [ベンダードキュメント - Wi-Fi: ステータスシンボル](https://support.apple.com/guide/mac-help/wi-fi-menu-icons-on-mac-mchlcedc581e/mac)

## スマートホーム

Amazon Echo や Google Home などの「スマートホームデバイス」の使用には、セキュリティ上の影響があります。まれに、これらのデバイスは意図しない会話を録音する可能性があります。多くのスマートホームデバイスは、起動時に視覚的および/または聴覚的なインジケーターを提供してそれを知らせます。多くのこのようなデバイスは、起動中はあなたを録音しており、起動中に話した内容のトランスクリプトを保存します。

機密情報を口頭で伝えている最中にスマートホームデバイスが起動した場合は、デバイスがオフになるのを待つか、手動でオフにしてください。機密情報を口頭で伝えている最中にスマートデバイスが起動した可能性がある場合、ほとんどのスマートホームデバイスではトランスクリプトと録音を削除できます。

これらのデバイスの設置場所、および GitLab に関連する機密性のある議論中にマイクをオフにするかどうかについては、最善の判断を行ってください。

## 移動中

自宅外への移動中に最も安全なワイヤレスネットワークは、可能であればスマートフォンのホットスポットを使用することです。

コーヒーショップ、コワーキングスペース、ホテルでワイヤレスネットワークに接続する場合は、ローカルネットワークトラフィックの傍受を避けるため、[NordLayer VPN](/handbook/security/corporate/systems/vpn) を使用して安全な接続を確立する必要があります。

**セキュリティのベストプラクティス:** 公共スペース (空港、飛行機、列車など) を移動する際は、必要になるまでラップトップの Wi-Fi を無効にすることがセキュリティのベストプラクティスです。ワイヤレスネットワークに接続していなくても、ワイヤレスチップは「電波上で」ネットワークをスキャンしており、見覚えのある、または既知のネットワークに接続を試みる可能性があります。

- [システムガイド - NordLayer VPN](/handbook/security/corporate/systems/vpn)
- [ベンダードキュメント - Wi-Fi: iPhone または iPad をホットスポットとして使用する](https://support.apple.com/guide/mac-help/iphone-ipad-connect-mac-internet-mchl7594e36f/14.0/mac/14.0)
- 旧ハンドブックページ: [個人 VPN](/handbook/tools-and-tips/personal-vpn/)

## ネットワークの分離

[ネットワーク分離ガイド](/handbook/security/network-isolation/)を参照して、専用の WiFi を設定し、仕事用ラップトップを家庭ネットワーク内の他の個人デバイス (スマートホームデバイスや[ホームメディアサーバー](https://thehackernews.com/2023/03/lastpass-hack-engineers-failure-to.html)を含む) から分離してください。
