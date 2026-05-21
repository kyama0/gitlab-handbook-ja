---
title: パブリックネットワークおよびシステム管理向けノート PC 用 VPN
upstream_path: /handbook/security/corporate/systems/vpn/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-06-26T03:27:50+00:00"
---

## 概要

NordLayer は、GitLab チームメンバー向けにサポートされている VPN（Virtual Private Network）プラットフォームです。

NordLayer の利用は任意ですが、[ゲストネットワークやパブリック Wi-Fi を利用する場合](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/networks)には推奨されます。言い換えれば、自宅以外でノート PC を利用する際は、いつでもトラフィックを保護するために VPN に接続すべきということです。コワーキングスペース、空港、コーヒーショップ、あるいは顧客オフィスのゲストネットワーク上などが該当します。

メンバーによっては、こうしたシナリオで別の VPN ソリューションを利用している場合がありますが、都合の良いタイミングで NordLayer への移行を推奨します。

- [ワイヤレスネットワークセキュリティ標準](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/networks)
- [セットアップガイド](/handbook/security/corporate/systems/vpn/setup)
- [トラブルシューティングガイド](/handbook/security/corporate/systems/vpn/troubleshooting)
- [ベンダーのドキュメント](https://help.nordlayer.com/)

## 背景情報

従業員が自宅以外で働く場面（コーヒーショップ、列車、飛行機など）に向けたシンプルな VPN というアイデアに最初に取り組んだとき、私たちは多くの選択肢を見つけました。多くの VPN オプションが存在しますが、私たちが必要とする以上に高機能なものもあれば、まったく不足しているものもあります。

NordLayer を選定するにあたって、私たちは次のような複数の点を確認しました。

- セキュアか？
- 管理しやすいか？
- 複数のオペレーティングシステムに対応しているか？
- 管理者の操作はログに記録されるか？

多くの選択肢を検証した結果、これらのうちいくつかを満たすものは複数ありましたが、NordLayer が最も多くを満たしており、なかでも最も重要視したセキュリティ要件に合致していました。

## システムオーナーとサポート

- DRI: `@cshankgitlab`
- `#security-corpsec` Slack チャンネル
