---
title: パブリックネットワークおよびシステム管理向けノート PC 用 VPN
upstream_path: /handbook/security/corporate/systems/vpn/
upstream_sha: a6d55368c73e5825dab217629d9ddb5d23a5fb53
translated_at: "2026-07-30T07:19:19+09:00"
translator: claude
stale: false
lastmod: "2026-07-28T16:24:24+01:00"
---

## 概要

NordLayer は、GitLab チームメンバー向けにサポートされている VPN（Virtual Private Network）プラットフォームです。

NordLayer の利用は任意ですが、[ゲストネットワークやパブリック Wi-Fi を利用する場合](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/networks)には推奨されます。言い換えれば、自宅以外でノート PC を利用する際は、いつでもトラフィックを保護するために VPN に接続すべきということです。コワーキングスペース、空港、コーヒーショップ、あるいは顧客オフィスのゲストネットワーク上などが該当します。

メンバーによっては、こうしたシナリオで別の VPN ソリューションを利用している場合がありますが、都合の良いタイミングで NordLayer への移行を推奨します。

- [ワイヤレスネットワークセキュリティ標準](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/networks)
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

- DRI: `@lennyv-glab`
- `#security_help` Slack チャンネル
