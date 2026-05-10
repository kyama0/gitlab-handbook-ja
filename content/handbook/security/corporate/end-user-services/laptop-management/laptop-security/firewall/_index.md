---
title: ラップトップのファイアウォール
upstream_path: /handbook/security/corporate/end-user-services/laptop-management/laptop-security/firewall/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

## 概要

すべてのラップトップで、オペレーティングシステムのファイアウォールを有効にする必要があります。

GitLab は SaaS ベースの Web アプリケーションを使用しており、ほとんどのサービスへのアクセスに VPN を使用しません (Infrastructure または Security のシステム管理者を除く)。

移動中や公衆ネットワークの使用に関するベストプラクティスについては、[ワイヤレスネットワーク](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/networks)ハンドブックページを参照してください。

## 設定手順

### Apple macOS

- [ベンダードキュメント - ファイアウォールを有効にする](https://support.apple.com/guide/mac-help/block-connections-to-your-mac-with-a-firewall-mh34041/mac)
- [ベンダードキュメント - ファイアウォール設定](https://support.apple.com/guide/mac-help/change-firewall-settings-on-mac-mh11783/mac)

### Ubuntu Linux

- [ベンダードキュメント](https://ubuntu.com/server/docs/firewalls)

## 高度なファイアウォール

セキュリティ意識の高いチームメンバーは、[Little Snitch](https://www.obdev.at/products/littlesnitch/index.html) や [LuLu](https://objective-see.org/products/lulu.html) などのサードパーティ製ファイアウォールソフトウェアを購入し、経費精算できます。これらを使用すると、アプリケーションごとにアウトバウンドトラフィックを監視および制御できます。

Jamf と SentinelOne がそれぞれの管理コンソールと通信できるよう、必ず許可してください。

## ネットワークの例外

チームメンバーが、ファイアウォールのバイパスを必要とする特定のシナリオをテストする必要がある場合があります。

ラップトップを公衆インターネットに公開する目的で、ネットワークファイアウォールを回避するように設計されたツールを使用しないことが重要です。例として、[ngrok](https://ngrok.com/) を使ってローカル開発環境にアクセスするための公開 URL を生成するケースがあります。

私たちのコア製品は、リモートコード実行を機能として提供しています。私たちがテストする他のアプリケーションも、開発環境の緩い性質によって同様の機能を露出することがよくあります。これらをインターネットに公開されたラップトップで実行することは、リモート攻撃者が悪用できるバックドアを実質的に提供することになります。これにより、自宅ネットワークと、そのマシンからアクセスしたすべての業務および個人アカウントが完全に侵害される可能性があります。

私たちの[利用規程 (Acceptable Use Policy)](/handbook/people-group/acceptable-use-policy/) は、GitLab が所有するコンピューターのセキュリティを回避することを禁じており、このような形での ngrok の使用は、私たちのファイアウォール要件を回避する例に該当します。

ngrok の代替として、[GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) を使用して一時的なインフラストラクチャを作成することができます。

ファイアウォールを回避する必要がある場合は、ラップトップに対して以下のいずれかのネットワークシナリオ／構成が使用されていることを確認し、可能な限り安全に行ってください。

- テストシナリオ中にインターネットアクセスが不要な場合は、テスト用にファイアウォールを無効にする前にインターネットから切断し、インターネットに再接続する前にファイアウォールを再有効化してください。

- 接続しているネットワークが公衆ネットワーク、または公開されている WiFi パスワードを持つネットワーク (例: パスワードが黒板に書かれているコーヒーショップの WiFi ネットワーク) でないことを確認してください。インターネットルーターに内蔵されているファイアウォールでネットワークを保護した上で、その背後にあるラップトップで使用する自宅ネットワークは、非公衆ネットワークと見なされます。詳細は[ワイヤレスネットワーク](/handbook/security/network-isolation/)を参照してください。

- ファイアウォールを有効にしたまま、仮想マシンとコンテナを使用して、自己完結型のネットワーク構成を作成してください。

- テストが頻繁な場合は、テストに必要なポートのみを許可するようにファイアウォールを設定し、[分離されたネットワーク](/handbook/security/network-isolation/)に接続するか、[個人 VPN](/handbook/tools-and-tips/personal-vpn/) を使用してください。

- これに関する質問がある場合は、`#security` Slack チャネルで Security 部門に連絡してください。
