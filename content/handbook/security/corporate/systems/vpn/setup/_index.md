---
title: NordLayer VPN セットアップガイド
upstream_path: /handbook/security/corporate/systems/vpn/setup/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-06T22:22:44+00:00"
---

## アクセスリクエスト

NordLayer のアクセスは、Okta ポータル経由で [Lumos](/handbook/security/corporate/systems/lumos/ar/) を使ってリクエストしてください。NordLayer のリクエストを送信するには、次の手順に従ってください。

- [Okta ポータル](https://gitlab.okta.com)にログインする
- 「Lumos」アプリケーションを検索して選択する
- 利用可能なアプリケーションから「NordLayer」を選択する
- 自分のニーズに合った「Public WiFi」または[「Dedicated Gateway」](#nordlayer-for-system-administration)のいずれかの権限を選択する
- Lumos が自動的に承認ワークフローを開始し、承認後にプロビジョニングを処理します

リクエストの完了に必要な追加情報があれば、システムが案内してくれます。リクエストのステータスについては、メールで通知が届きます。

## NordLayer のインストール

アクセスリクエストがプロビジョニングされた後、`nordlayer@nordlayer.com` からアプリケーションのダウンロードリンクが記載されたメールが届きます。

- MacOS:

  1. 組織として `gitlab` を入力します。
  2. Okta で認証します。
  3. プロンプトが表示されたら、続いて表示されるプロンプトに対して **Allow** を選択します。

- Linux:

  1. <https://help.nordlayer.com/docs/installing-on-linux> に従ってアプリケーションをダウンロードし、ユーザーをユーザーグループに追加します。
  1. 一度ログアウトし、再度ログインします。
  1. ターミナルで `nordlayer login` を実行します。
  1. 組織として `gitlab` を入力します。
  1. 取得した URL をブラウザで開き、Okta で認証します。

- Android:

  1. Google Play にアクセスして NordLayer を検索します。Install をタップしてアプリをダウンロードします。
  1. 組織 ID として `gitlab` を入力し、`continue` をタップします。
  1. `Log in with Okta` をタップし、プロンプトに従います。
  1. `Allow access` をタップして、NordLayer に VPN 設定へのアクセスを許可します。
  1. NordLayer が VPN 接続をセットアップするための `Ok` をタップします。
  1. `Allow access` をタップして、NordLayer に位置情報（推奨サーバー用）へのアクセスを許可します。
  1. `Allow access` をタップして VPN 設定にアクセスすれば、すべて完了です！

- iOS:

  1. App Store にアクセスして `NordLayer` を検索し、`Get` をタップしてアプリをダウンロードします。
  1. 組織 ID として `gitlab` を入力し、`continue` をタップします。
  1. `Log in with Okta` をタップし、プロンプトに従います。
  1. `Allow access` をタップして、NordLayer に VPN 設定へのアクセスを許可します。
  1. `Allow` をタップして、NordLayer が VPN 構成を追加することを許可します。
  1. `Allow access` をタップして、NordLayer に位置情報（推奨サーバー用）へのアクセスを許可すれば、すべて完了です！

## 構成

信頼できない Wi-Fi（パスワードが設定されていない、または暗号化が脆弱なネットワーク）を使用する際に NordLayer が自動接続するように設定することを推奨します。

- MacOS:

  1. NordLayer の preferences に移動し、**Auto-Connect** タブを選択します。
  1. **When using untrusted Wi-Fi** を選択します（または **When app launches** を選択し、[自宅ネットワークを信頼済みとして追加](#add-your-home-network-to-the-trusted-list-macos-only)します）。

- Linux:

  1. NordLayer が起動している状態で、ターミナルから `nordlayer settings set` を実行します。
  1. **Auto-connect** を選択し、続いて **When using untrusted Wi-Fi** を選択します。

  詳細については、[NordLayer application usage on Linux](https://help.nordlayer.com/docs/nordlayer-application-usage-on-linux) を参照してください。

### 自宅ネットワークを信頼リストに追加（MacOS のみ） {#add-your-home-network-to-the-trusted-list-macos-only}

> 信頼済みネットワークをリストに追加すると、自宅にいる間はノートPCで NordLayer の接続が切断されたままになります。これによりインターネットをフルスピードで利用でき、自宅外の信頼できないネットワークでは自動的に接続されます。
>
> 信頼済みネットワークに接続している間は VPN による保護が無効になることに注意してください。ホテル、ゲストネットワーク、または自宅以外のネットワークでは（最初の Wi-Fi ポータルの利用規約キャプティブポータル画面を通過するために必要な場合を除き）、これを行わないでください。

1. NordLayer の preferences に移動し、**Auto-Connect** タブを選択します。
1. **Current Network** に表示されているネットワークが自宅ネットワークであることを確認し、**Trust** を選択します。

## システム管理向けの NordLayer {#nordlayer-for-system-administration}

NordLayer はシステム管理用途にも利用されており、特定の GitLab チームメンバーに限定された専用 IP アドレスを介して、内部システムやリソースへのセキュアなアクセスを提供します。これらの専用 IP アドレスへのアクセスが必要な場合は、[Lumos](/handbook/security/corporate/systems/lumos/ar/) でアクセスリクエストを行い、`Permission:Dedicated Gateway` を選択してください。

システム管理に NordLayer を利用する際の主なポイントは次のとおりです。

1. アクセス制御: NordLayer はきめ細かなアクセス制御を可能にし、特定のリソースにシステム管理者のみがアクセスできるようにします。

2. 多要素認証: セキュリティを強化するため、NordLayer は Okta Device Trust 認証ポリシーを用いて実装されています。

3. セキュアなリモートアクセス: システム管理者は任意の場所から内部システムにセキュアにアクセスでき、効率的なリモートワークやインシデント対応を可能にします。

4. ネットワークセグメンテーション: NordLayer はネットワークセグメンテーションをサポートしており、管理者が機密システムを分離して潜在的なセキュリティリスクを抑制できます。

5. 暗号化された通信: 管理者の端末と内部システム間のすべてのトラフィックは暗号化されており、転送中の機密データを保護します。

6. 一元管理: NordLayer の admin パネルは、ユーザーアクセスの管理、接続の監視、セキュリティポリシーの構成を一元的に行うインターフェースを提供します。

NordLayer をシステム管理に利用する際は、必ず GitLab のセキュリティベストプラクティスに従い、システムやデータにアクセスする前に適切な権限を持っていることを確認してください。

参考として、Security チームやインシデント対応で利用する専用 IP を以下に示します。

| 拠点 | IP |
| --- | --- |
| GitLab - Los Angeles | 216.74.107.115 |
| GitLab - New York | 146.70.186.59 |
| GitLab - Atlanta | 205.234.251.167 |
| GitLab - Belgium | 146.70.55.7 |
| GitLab - Hungary | 217.138.192.12 |
| GitLab - Japan | 146.70.138.86 |
| GitLab - Australia | 88.216.59.30 |
