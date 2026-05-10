---
title: Linux デスクトップ OS セットアップガイド
upstream_path: /handbook/security/corporate/systems/linux/setup/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## 前提条件

開始する前に、以下を確認してください:

- 会社支給の Dell ラップトップ（Dell が唯一の承認された Linux ラップトップベンダー）
- Ubuntu LTS（最新バージョン）- 唯一の承認された Linux ディストリビューション

## セットアップとデプロイ手順

### 1. Linux のインストール（必要な場合）

特定の状況（地域とハードウェアの可用性）によっては、OEM Windows が出荷された Dell に Linux を自己インストールする必要がある場合があります。その場合:

1. Ubuntu LTS で USB ドライブをセットアップします
2. インストールを実行します

**オプションのバックアップ:** OEM Windows が出荷されたラップトップの場合、Linux をインストールする前に外部ドライブにフルドライブバックアップ（例: オープンソースユーティリティの [Clonezilla](https://clonezilla.org/) を使用）を作成しておくとよいかもしれません。これにより、必要な場合に RMA プロセスが容易になります。

### 2. フルディスク暗号化の有効化（LUKS が必要）

フルディスク暗号化は必須です。暗号化が有効になっているかを確認するには:

```bash
sudo dmsetup ls
```

出力に `cryptdata` または `dm_crypt-0` への参照がある場合、暗号化は有効です。ない場合は、Ubuntu を再インストールし、インストールプロセス中に LUKS ドライブ暗号化を有効にする必要があります。

### 3. ファイアウォールの有効化

Linux エンドポイントはファイアウォールを有効にする必要があります。ステータスを確認し、必要に応じて有効化します:

```bash
# ファイアウォールステータスの確認
sudo ufw status

# 非アクティブな場合は有効化
sudo ufw enable

# ufw がインストールされていない場合
sudo apt install ufw
```

### 4. ホスト名の設定

Fleet に登録する前に、ホスト名は標準化された命名規則に従う必要があります:

```plaintext
gitlabEmail--dateOfInitialConnect-lastFiveOfSerialNumber
```

例えば、メールが `jsmith@gitlab.com` の場合:

```plaintext
jsmith--20241202-RT7A2
```

**ホスト名を変更するには:**

`hostnamectl` を使用して、手動でホスト名を設定できます:

```bash
# シリアル番号を取得（最後の 5 文字）
sudo dmidecode -s system-serial-number | tail -c 6

# ホスト名を設定（実際の値に置き換え）
sudo hostnamectl set-hostname "yourusername--YYYYMMDD-SERIAL"

# /etc/hosts を更新
sudo sed -i "s/127.0.1.1.*/127.0.1.1\t$(hostname)/" /etc/hosts
```

または、内部ハンドブックで利用可能なホスト名リネームスクリプトを使用することもできます。支援が必要な場合は、`#security_help` までお問い合わせください。

### 5. Fleet のインストール

すべての Linux エンドポイントには Fleet をインストールする必要があります。Fleet は EDR ツール（リージョンに応じて CrowdStrike または SentinelOne）もインストールします。

**パッケージのダウンロード:**

Fleet バイナリは、x86-64 と ARM CPU の両方の DEB および RPM パッケージマネージャー向けに利用可能です。最新リリースを [fleet-builds リポジトリ](https://gitlab.com/gitlab-com/gl-security/corp/engineering/fleet-builds/-/releases)からダウンロードしてください。

**パッケージのインストール:**

Debian/Ubuntu（唯一の承認されたディストリビューション）の場合:

```bash
sudo apt install ./fleet-osquery_*.deb
```

**Fleet がインストールされたことの検証:**

```bash
sudo systemctl is-enabled orbit.service
sudo systemctl is-active orbit.service
```

サポートされている Linux デスクトップ環境（[必要な GNOME Shell 拡張機能](https://extensions.gnome.org/extension/615/appindicator-support/)を持つ GNOME など）では、Fleet Desktop がトップバーに表示されているかを確認できます。

詳細な Fleet 登録手順については、[Fleet ハンドブックページ](https://internal.gitlab.com/handbook/security/corporate/tooling/fleet/)を参照してください。

### 6. EDR インストールの検証

EDR エージェントは Fleet 経由で自動的にインストールされるはずです。検証するには:

**SentinelOne の場合（オランダ、ドイツ、イタリア、オーストリア）:**

```bash
systemctl status sentinelone
```

接続を検証:

```bash
sudo sentinelctl management status
```

`Connectivity: On` と有効な SentinelOne URL が表示されるはずです。

**CrowdStrike の場合（その他すべてのリージョン）:**

```bash
# Falcon センサーが実行中か確認
sudo systemctl status falcon-sensor

# エージェント ID を検証
sudo /opt/CrowdStrike/falconctl -g --aid
```

サービスがアクティブで、エージェント ID（AID）の値が返されるはずです。

支援が必要な場合は、Slack チャンネル `#sentinelone` または `#crowdstrike` までお問い合わせください。

### 7. 標準アプリケーションのインストール

通常の承認済みアプリケーションをインストールします:

- **Google Chrome**（Okta にサインイン）
- **Zoom**
- **Slack**
- 職務記述書のためのその他のアプリケーション（例: 開発ツール）

オンボーディング Issue またはラップトップ機材 Issue の手順を完了します。

## 追加の設定

### 自動更新（推奨）

必須ではありませんが、最新のセキュリティパッチが利用可能であることを確保するために、自動更新の設定を強く推奨します。オプションには以下が含まれます:

- **GNOME Update Manager:** _Software & Updates_ を自動更新用に設定
- **unattended-upgrades:** `unattended-upgrades` パッケージのインストールと設定

詳細は [Ubuntu 自動セキュリティ更新](https://help.ubuntu.com/community/AutomaticSecurityUpdates)を参照してください。

### 指紋リーダー

Dell ラップトップに指紋リーダーがある場合、最新の Ubuntu はそのままでサポートする可能性があります。サポートされていない場合は、以下の手順を検討してください（結果は異なる可能性があります）:

```bash
sudo apt install libpam-fprintd
sudo systemctl status fprintd.service
sudo systemctl restart fprintd.service
```

## トラブルシューティング

### SentinelOne インストールの問題

Advanced Intrusion Detection Environment (AIDE) を使用している場合、SentinelOne 用の除外を作成します:

```bash
echo '!/opt/sentinelone/mount' | sudo tee -a /etc/aide.conf
```

### SentinelOne エージェントがオフライン

SentinelOne エージェントがオフラインに見える最も一般的な理由は、`*.sentinelone.net` への送信接続を禁止しているローカルファイアウォールです。HTTPS（ポート 443）をそのドメインへの送信で許可する必要があります。

エージェントステータスの確認:

```bash
sudo sentinelctl management status
```

アクセスをブロックする可能性のある一般的なローカルファイアウォールには、pfSense や iptables があります。

### Fleet パッケージが利用できない

エンドポイント用の適切な Fleet パッケージが存在しない場合、ソースから fleetd をビルドするための支援について `#security_help` までお問い合わせください。

## サポート

- **Fleet/EDR の問題:** `#security_help`
- **SentinelOne ヘルプ:** `#sentinelone`
- **CrowdStrike ヘルプ:** `#crowdstrike`
- **一般的な Linux Tips:** `#linux`
