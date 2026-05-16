---
title: Keycloak のテストインスタンスのデプロイ
category: Infrastructure for troubleshooting
description: "サポートエンジニア向けのテスト環境セットアップオプションとガイドライン"
upstream_path: /handbook/support/workflows/keycloak-test-server/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-11T09:03:18+01:00"
---

## Keycloak のテストインスタンスのデプロイ

### 前提条件

- 外部 IP アドレスを持つ VM を作成します。本例では RHEL8 ベースのコマンドを使用します。
- この VM 上でポート 8080 と 8443 にアクセスできることを確認します。
- Keycloak インスタンスに使用するホスト名を決め、VM の外部 IP を取得し、IP アドレスとホスト名を紐付ける A レコードを DNS サーバーに設定します。詳細は [テストインスタンス用 DNS](test_env.md#dns-for-test-instances) を参照してください。
- https://punchsalad.com/ssl-certificate-generator/ を使って証明書を生成します。DNS チャレンジが最も簡単な検証方法です。証明書と秘密鍵をローカルに保存しておきます。

### インストール

1. PostgreSQL をインストールします:

   ```shell
   dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm
   dnf -qy module disable postgresql
   dnf install -y postgresql16-server
   sudo /usr/pgsql-16/bin/postgresql-16-setup initdb
   sudo systemctl enable postgresql-16
   sudo systemctl start postgresql-16
   ```

1. Keycloak 用のデータベースとユーザーを作成します:

   ```shell
   sudo -u postgres psql
   CREATE USER keycloak WITH PASSWORD 'your-database-password';
   CREATE DATABASE keycloak OWNER keycloak;
   GRANT ALL PRIVILEGES ON DATABASE keycloak TO keycloak;
   ```

1. java と keycloak をインストールします:

   ```shell
   yum install java-21-openjdk-devel wget -y
   cd /opt
   sudo wget https://github.com/keycloak/keycloak/releases/download/26.0.7/keycloak-26.0.7.tar.gz
   sudo tar -xzf keycloak-26.0.7.tar.gz
   sudo mv keycloak-26.0.7 keycloak
   ```

1. DB 接続が正しく機能するか確認するため、`/opt/keycloak/conf/keycloak.conf` に以下の行を追加してシンプルなインスタンスを設定します:

   ```shell
   db=postgres
   db-username=keycloak
   db-password=your-database-password
   hostname=your-host-name.domain.tld
   http-enabled=true
   http-port=8080
   ```

1. keycloak を起動し、ブラウザで http://your-host-name.domain.tld:8080 を開いて動作を確認します。UI は開きますが、HTTPS なしでは使用できません:

   ```shell
   cd /opt/keycloak
   ./bin/kc.sh bootstrap-admin user --bootstrap-admin-username admin --bootstrap-admin-password keycloak-password
   ./bin/kc.sh start
   ```

1. keycloak を停止し、`/opt/keycloak/conf/keycloak.conf` に以下の値を追加して HTTPS を設定します。証明書と鍵を所定の場所に配置することを忘れないでください:

   ```shell
   https-port=8443
   https-certificate-file=/opt/keycloak/conf/certificate.pem
   https-certificate-key-file=/opt/keycloak/conf/key.pem
   ```

1. 再度 keycloak を起動します。コマンドラインで設定した認証情報を使って https://your-host-name.domain.tld:8443 からログインできるようになっているはずです。
