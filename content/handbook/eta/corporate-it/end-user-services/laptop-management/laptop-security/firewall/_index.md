---
title: "ラップトップのファイアウォール"
aliases:
  - /handbook/security/corporate/end-user-services/laptop-management/laptop-security/firewall/
upstream_path: /handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/firewall/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:37:15+09:00"
translator: codex
stale: false
---

## 概要

すべてのラップトップでオペレーティングシステムのファイアウォールを有効にする必要があります。

GitLab は SaaS Web アプリケーションを使用しており、ほとんどのサービスへアクセスするために VPN を使用しません（Infrastructure または Security システム管理者である場合を除きます）。

旅行中および公共ネットワークの使用時のベストプラクティスについては、[ワイヤレスネットワーク](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/networks)ハンドブックページを参照してください。

## 構成手順

### Apple macOS

- [ベンダードキュメント - ファイアウォールを有効にする](https://support.apple.com/guide/mac-help/block-connections-to-your-mac-with-a-firewall-mh34041/mac)
- [ベンダードキュメント - ファイアウォール設定](https://support.apple.com/guide/mac-help/change-firewall-settings-on-mac-mh11783/mac)

### Ubuntu Linux

- [ベンダードキュメント](https://ubuntu.com/server/docs/firewalls)

## 高度なファイアウォール

セキュリティを意識するチームメンバーは、[Little Snitch](https://www.obdev.at/products/littlesnitch/index.html)や [LuLu](https://objective-see.org/products/lulu.html)などのサードパーティ製ファイアウォールソフトウェアを購入して経費精算できます。これらにより、アプリケーションごとに送信トラフィックを監視および制御できます。

Jamf と SentinelOne が管理コンソールと通信できるようにしてください。

## ネットワーク例外

チームメンバーが、ファイアウォールをバイパスする必要がある特定のシナリオをテストする必要がある場合があります。

ラップトップを公共インターネットに公開する目的で、ネットワークファイアウォールを回避するように設計されたツールを使用しないことが重要です。その例は、ローカル開発環境へのアクセス用の公開 URL を生成するために [ngrok](https://ngrok.com/)を使用することです。

私たちの中核製品は、リモートコード実行を機能として提供します。テストする他のアプリケーションも、開発環境の緩やかな性質を通じて、同様の機能を公開することがよくあります。これらをインターネットに公開されたラップトップで実行すると、基本的にリモート攻撃者が悪用するためのバックドアを提供することになります。これにより、自宅ネットワークと、マシンからアクセスしたすべての業務用および個人用アカウントが完全に侵害される可能性があります。

[GitLab 内部利用ポリシー](/handbook/people-group/acceptable-use-policy/)では、GitLab 所有のコンピューターのセキュリティを回避することを禁止しています。この方法で ngrok を使用することは、ファイアウォール要件を回避する例です。

ngrok の代替手段は、[GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started)を使用して一時的なインフラストラクチャを作成することです。

ファイアウォールを回避する必要がある場合は、ラップトップで以下のネットワークシナリオ/構成のいずれかを使用して、可能な限り安全に行ってください:

- テストシナリオ中にインターネットアクセスが不要な場合は、テストでファイアウォールを無効にする前にインターネットから切断し、インターネットへ再接続する前に再び有効にします。

- 接続するネットワークが公共ネットワーク、またはパスワードが広く知られている WiFi パスワードのネットワーク（例: 黒板にパスワードが書かれているコーヒーショップの WiFi ネットワーク）でないことを確認してください。ネットワークを保護するインターネットルーター内蔵のファイアウォールの背後にラップトップがある自宅ネットワークは、非公開ネットワークとみなされます。詳細は[ワイヤレスネットワーク](/handbook/security/network-isolation/)を参照してください。

- ファイアウォールをアクティブのままにし、仮想マシンとコンテナを使用して自己完結型ネットワーク構成を作成します。

- テストを頻繁に行う場合は、テストに必要なポートのみを許可するようファイアウォールを構成し、[分離ネットワーク](/handbook/security/network-isolation/)に留まるか、[個人用 VPN](/handbook/tools-and-tips/personal-vpn/)を使用してください。

- 質問がある場合は、`#security` Slack チャンネルで Security 部門にお問い合わせください。
