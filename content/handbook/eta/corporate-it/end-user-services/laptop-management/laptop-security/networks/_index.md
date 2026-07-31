---
title: "ラップトップのワイヤレスネットワーク"
upstream_path: /handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/networks/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:32:14+09:00"
translator: codex
stale: false
---

## 概要

自宅、友人、または家族の家のワイヤレスネットワークへ接続することは安全です。

- [ベンダードキュメント - Wi-Fi: WiFi ネットワークへの接続](https://support.apple.com/guide/mac-help/use-the-wi-fi-status-menu-on-mac-mchlfad426fa/14.0/mac/14.0)
- [ベンダードキュメント - Wi-Fi: ステータス記号](https://support.apple.com/guide/mac-help/wi-fi-menu-icons-on-mac-mchlcedc581e/mac)

## スマートホーム

Amazon Echo や Google Home などの「スマートホームデバイス」の使用には、セキュリティへの影響が伴います。まれに、これらのデバイスが意図していなかった会話を録音する場合があります。多くのスマートホームデバイスは、アクティブ化されたことを知らせる視覚的および/または聴覚的なインジケーターを提供します。そのようなデバイスの多くは、アクティブ化されると、会話を録音し、アクティブな間に発言した内容の文字起こしを保存します。

機密情報を口頭で伝えている間にスマートホームデバイスがアクティブ化された場合は、オフになるのを待つか、手動でオフにしてください。機密情報を口頭で伝えている間にスマートデバイスがアクティブ化された可能性があると思う場合、ほとんどのスマートホームデバイスでは文字起こしと録音を削除できます。

これらのデバイスの設置場所と、GitLab に関連する機密性の高い話し合いの間にマイクを無効にするかどうかについては、最善の判断を行ってください。

## 旅行

自宅の外で旅行する場合に最も安全なワイヤレスネットワークは、可能であれば電話のホットスポットを使用することです。

コーヒーショップ、コワーキングスペース、ホテルのワイヤレスネットワークに接続する場合は、ローカルネットワークトラフィックの傍受を避けるために [NordLayer VPN](/handbook/security/corporate/systems/vpn)を使用して安全な接続を確立してください。

**セキュリティのベストプラクティス:** 公共スペース（例: 空港、飛行機、電車など）で旅行する場合、使用する必要があるまでラップトップの Wi-Fi を無効にすることがセキュリティのベストプラクティスです。ワイヤレスネットワークに接続していない場合でも、ワイヤレスチップは「電波上で」ネットワークをスキャンしており、馴染みのある、または既知のネットワークへの接続を試みる場合があります。

- [システムガイド - NordLayer VPN](/handbook/security/corporate/systems/vpn)
- [ベンダードキュメント - Wi-Fi: iPhone または iPad をホットスポットとして使用する](https://support.apple.com/guide/mac-help/iphone-ipad-connect-mac-internet-mchl7594e36f/14.0/mac/14.0)
- レガシーハンドブックページ: [個人用 VPN](/handbook/tools-and-tips/personal-vpn/)

## 分離されたネットワーク

[ネットワーク分離ガイド](/handbook/security/network-isolation/)を参照して、自宅ネットワーク内のスマートホームデバイスおよび[ホームメディアサーバー](https://thehackernews.com/2023/03/lastpass-hack-engineers-failure-to.html)を含む他の個人用デバイスから業務用ラップトップを分離する専用 WiFi を設定してください。
