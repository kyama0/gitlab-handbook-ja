---
title: "GitLab Linux オンボーディング 101"
upstream_path: /handbook/eta/corporate-it/end-user-services/onboarding101/linux-onboarding101/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:14:51+09:00"
translator: codex
stale: false
---

## GitLab Linux コミュニティへようこそ

Linux は macOS の代替として利用できますが、サポートが限られているため推奨していません。Linux を選択することで、環境の維持に対する全責任を受け入れ、IT がサポートを提供しないことを理解したものとします。

Linux ユーザーには、セキュリティポリシーに準拠しながら、プラットフォームに精通し、作業環境を自律的に設定できることを期待しています。このガイドでは、新しいマシンを設定する際によく発生する問題を扱います。

>**注記**: Linux に対する詳細な技術サポートは提供しませんが、Okta ログインの問題は支援できます。#linux Slack チャンネルはヒントやテクニックの交換に利用できますが、公式ヘルプデスクリソースではありません。

## 目次

1. [開始する前に](#before-you-begin)
1. [セキュリティ要件](#security-requirements)
1. [初期インストールとディスク暗号化](#initial-installation-and-disk-encryption)
1. [初回 Okta ログイン](#initial-okta-login)
1. [デバイス管理とエンドポイントセキュリティ](#device-management-and-endpoint-security)
   1. [SentinelOne のインストール - ドイツ、オランダ、イタリア、オーストリアのみ](#sentinelone-installation---germany-the-netherlands-italy-and-austria-only)
1. [追加リソース](#additional-resources)

## 開始する前に {#before-you-begin}

新しい Linux ラップトップを設定するには、次のものが必要です:

1. GitLab 支給の Dell ラップトップ
1. 起動可能な USB ドライブ（少なくとも 8GB）
1. カメラを備えた最新の iOS または Android デバイス、または YubiKey
1. 初日に個人メールへ送信される Okta アクティベーションメール

## セキュリティ要件 {#security-requirements}

>**注記**: Ubuntu LTS（最新バージョン）は唯一承認された Linux ディストリビューションです。これにより GitLab はすべての規制およびコンプライアンス基準を満たし、Ubuntu は必要なセキュリティツールの実行に高い信頼性を示しています。

Okta にログインするには、以下のセキュリティ要件を満たす必要があります:

1. **フルディスク暗号化:** LUKS 暗号化を有効にする必要があります
1. **ホスト名:** ラップトップのホスト名が標準の命名規則と一致している必要があります
1. **Fleet:** デバイス管理をインストールする必要があります
1. **EDR:** CrowdStrike Falcon または SentinelOne（ドイツ、オランダ、イタリア、オーストリアのみ）をインストールする必要があります

## 初期インストールとディスク暗号化 {#initial-installation-and-disk-encryption}

Dell ラップトップに搭載されているデフォルトバージョンの Ubuntu では、ディスク暗号化が有効になっていません。OS のインストール後にディスクを暗号化することはおすすめせず、問題が発生する可能性があります。暗号化を有効にして OS を再インストールする必要があります。

1. 最新の Ubuntu LTS リリースを[こちら](https://ubuntu.com/download/desktop)からダウンロードします
1. [balenaEtcher](https://etcher.balena.io/)または同様のツールを使用して起動可能な USB ドライブを作成します
1. [このガイド](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview)に従ってディスクを消去し、Ubuntu の新しいコピーをインストールします。
   1. グラフィックと Wi-Fi 用のサードパーティ製ソフトウェアをインストールします
   1. **プロンプトが表示されたら、必ず `Use LVM and encryption` を選択します**
   1. インストールを完了し、デスクトップを起動します
1. ファイアウォールを有効にします:
   1. ターミナルを開き、`sudo ufw status` を実行します
   1. 応答が `Status: inactive` の場合、`sudo ufw enable` を実行します
   1. ufw がインストールされていない場合は、先に `sudo apt install ufw` を実行します。
1. システムを更新します:
   1. ターミナルを開き、`sudo apt update && sudo apt upgrade` を実行します
1. 高速ログインのため、指紋検証を有効にします - [指紋でログインする](https://help.ubuntu.com/stable/ubuntu-help/session-fingerprint.html.en)
   1. 追加リソース: [fprint](https://fprint.freedesktop.org/)

## 初回 Okta ログイン {#initial-okta-login}

>**重要**: 新規採用者は、すべてのセキュリティ要件が満たされていなくても初回 Okta ログインを実行できます。ただし、初日に必要なすべての手順を完了しない場合、以後ログインできなくなります。

続行する前に、[こちら](/handbook/eta/corporate-it/end-user-services/onboarding101/#laptop-setup-linux)で必要なすべての手順を完了してください。

## デバイス管理とエンドポイントセキュリティ {#device-management-and-endpoint-security}

私たちはすべての Linux デバイスを管理するために Fleet を使用しています。Fleet を使用すると Okta へアクセスでき、最もよく使用するアプリケーションの一部（例: Zoom）の中央リポジトリが提供され、ラップトップの潜在的なセキュリティ問題を通知します。

インストールファイルとガイドについては、[このページ](https://internal.gitlab.com/handbook/security/corporate/tooling/fleet/#enrolling-in-fleet)を使用してください。

ラップトップを Fleet に登録すると、ドイツ、オランダ、イタリア、オーストリアを拠点とする場合を除き、CrowdStrike Falcon もマシンに自動インストールされます。

### SentinelOne のインストール - ドイツ、オランダ、イタリア、オーストリアのみ {#sentinelone-installation---germany-the-netherlands-italy-and-austria-only}

CrowdStrike は上記の地域ではまだ承認されていないため、それらの地域のユーザーは Fleet に加えて SentinelOne Endpoint security を手動でインストールする必要があります。

必要なファイルとセットアップ手順については、[こちら](/handbook/security/corporate/systems/sentinelone/setup/)をクリックしてください。

## 追加リソース {#additional-resources}

- [Linux ツールとヒント](/handbook/tools-and-tips/linux/)
- [CrowdStrike - エンドポイントの検知と対応](https://internal.gitlab.com/handbook/security/corporate/tooling/crowdstrike/)
- [YubiKey セルフサービス購入ガイド](/handbook/security/corporate/systems/yubikey/purchasing/)
- [Linux 向け 1Password](https://1password.com/downloads/linux)
- 質問とディスカッション用の Slack の #linux

## サポートが必要ですか？

ラップトップのセットアップにさらに支援が必要な場合は、毎週火曜日に予定されているオンボーディングコール（Calendar を確認してください！）に参加するか、Slack の Compass アプリ（上部の検索バーに "Compass" と入力して見つけます）または it-help@gitlab.com から IT に連絡してください。
