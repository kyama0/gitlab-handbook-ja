---
title: GitLab と連携する Jira
description: このガイドでは Jira Server のセットアップ手順と、サポートエンジニアの観点でのトラブルシューティング手順を提供します
category: Self-managed
upstream_path: /handbook/support/workflows/jira-server/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-27T18:13:57+00:00"
---

### Jira Software とは

Jira Software は、あらゆるタイプのチームが作業を管理するのを支援するために設計された製品ファミリーの一部です。元々、Jira はバグおよび Issue トラッカーとして設計されました。しかし今日、Jira は要件管理やテストケース管理からアジャイルソフトウェア開発まで、あらゆる種類のユースケース向けの強力な作業管理ツールに進化しています。

Jira のさまざまな用途について詳しくは、[Get started with Jira Software](https://www.atlassian.com/software/jira/guides/getting-started/basics) をご覧ください。

### Jira Server のセットアップ方法

1. Jira Server のインストール用に [GitLab Sandbox Cloud](https://gitlabsandbox.cloud) を使用して新しいホストを作成します。これは GitLab インスタンスとは別にすべきです。GitLab 連携で HTTPS を使用するように Jira をセットアップするので、この新しいホストでポート 443 が利用可能であることを確認します。

#### 前提となるソフトウェア

- Jira は java JVM を使用するため Java をインストールする必要があります。
- HTTPS の証明書を生成するために certbot および python3-certbot-apache をインストールする必要があります。

#### Jira と前提条件のインストール

1. Jira は Java JVM を使用するため Java をインストールします

   ```bash
   apt install openjdk-11-jdk  openjdk-11-jre
   ```

1. インストール用に Jira ソフトウェアを保存するフォルダを作成します。

   ```bash
   mkdir  jira && cd jira
   ```

1. [Atlassian Jira Web サイト](https://www.atlassian.com/software/jira/download-archives) からダウンロードしたい Jira のバージョンを選択します。

   サポートされているすべての GitLab 連携をテストできるよう、Jira 8.13 バージョンを使用します。ただし、これは OAuth2.0 連携では機能しないので、後で接続テストのために Jira をアップグレードします。

1. ダウンロードしたい Jira バージョンを選択します。

   ![Download Jira Screenshot](/images/support/workflows/assets/JIRA_1_Download.png)

1. Submit ボタンを承諾し右クリックしてダウンロード URL を取得します。（ファイルダウンロード時に「リンクのアドレスをコピー」を選択）

1. `wget <URL>` コマンドで Jira インストーラーをダウンロードします。例:

   ```bash
   wget https://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-software-8.13.7-x64.bin
   ```

   ![wget data](/images/support/workflows/assets/Jira_wget.png)

1. 以下を使ってスクリプトを実行可能に変更します

   ```bash
   chmod a+x atlassian-jira-software-8.13.7-x64.bin
   ```

1. インストーラーを実行し、OpenJDK のインストールを求められた場合は Y を入力します。

   ```bash
   sudo ./atlassian-jira-software-8.13.7-x64.bin
   ```

   ![Jira bin](/images/support/workflows/assets/Jira_bin.png)

1. インストール手順に従い、インストールで尋ねられたすべての質問に対してデフォルトを入力します。

   ![Jira bin process](/images/support/workflows/assets/Jira_bin_process.png)

1. Jira セットアップを実行します。30 日間のトライアル期間がアクティベートされます。Jira を手動でセットアップを選択します。
1. localhost:8080 で Jira がセットアップされ、アクセスできるようになりました。
1. 使用前に Jira をセットアップする必要があります。ブラウザからアクセスした後、`I'll set it up myself` を選択します。

   ![Jira Set It Up Myself Screenshot](/images/support/workflows/assets/JIRA_Setupmyself.png)

1. 次のステップで `Built-in (for evaluation or demonstration)` を選択します。

   ![Jira Database setup](/images/support/workflows/assets/Jira_db_setup.png)

1. データベースの作成を待つ間、atlassian アカウントにログインし [https://my.atlassian.com/product](https://my.atlassian.com/product) を開きます。サーバー用のトライアルライセンスを生成します。

   ![Jira Licenses](/images/support/workflows/assets/Jira_licenses.png)

1. 次のページで、Product に `Jira Software`、License type に `Jira Software (Data Center)` を選択します。残りのフィールドには任意の詳細を入力します。`Server ID` は、サーバーがデータベースのセットアップを完了したときに取得できます。

   ![Jira License Setup](/images/support/workflows/assets/Jira_license_setup.png)

1. データベース作成が完了した後、次のセクションはアプリケーションプロパティの設定です。デフォルトのままにし、`Next` をクリックします。

   ![Jira Application Propertpplication_properties.png

1. 次のシーンで、ライセンスキーを指定します。`Server ID` をコピーし `New trial License Generation` 画面に貼り付けて、`Generate License` をクリックします。

   ![Jira Generate License](/images/support/workflows/assets/Jira_generate_license.png)

1. 生成されたライセンスキーをコピーして貼り付け、Jira セットアップでライセンスを更新します。

   ![Jira License Atlassian](/images/support/workflows/assets/Jira_license_atlassian.png)

   ![Jira Specify License](/images/support/workflows/assets/Jira_specify_license.png)

1. Jira Admin ユーザーを作成し、次のステップに進みます。
1. セットアップを続行し、テストプロジェクトを作成します。"GITLAB"。
1. テストに使用するテスト Issue を作成します。

#### HTTPS 接続を有効にするための Let's Encrypt 証明書の追加

NOTE:
HTTPS 接続は DVCS Connector に **必須** です

1. 証明書を生成できるよう certbot をインストールします

   ```bash
   sudo apt-get update && apt-get upgrade
   sudo apt-get install certbot
   ```

   オプションで Certbot Apache プラグインをインストールできます:

   ```bash
   sudo apt-get install python3-certbot-apache
   ```

1. ドメイン用の証明書を生成します。プロンプトが表示されたらメールアドレスを入力します。

   ```bash
   sudo certbot certonly --standalone -d www.example.com
   ```

   ![Jira certbot](/images/support/workflows/assets/Jira_certbot_successful.png)

1. すべて順調にいけば、新しい SSL が以下の場所に発行されます。以下のディレクトリに移動してファイルを表示します。

   ```bash
   cd /etc/letsencrypt/live/example.com
   ls
   ```

   以下のリストが表示されるはずです:

   - cert.pem
   - chain.pem
   - fullchain.pem
   - privkey.pem

   NOTE:
   `Problem binding to port 80: Could not bind to IPv4 or IPv6.` エラーが発生した場合は、ポート 80 を使用しているアプリケーションの PID を確認し、そのポートで実行中のアプリケーションを停止してから証明書の生成を再試行します。

   ![Error Message: Problem binding to port 80: Could not bind to IPv4 or IPv6.](/images/support/workflows/assets/Jira_port80error.png)

   ```bash
   # Check with lsof
   lsof -i :80

   # You can also use
   netstat -antlup | grep 80

   # If it's Apache, you can run the following:
   systemctl stop apache2
   systemctl disable apache2
   ```

#### キーペアと証明書を Java Keystore に変換する

NOTE:
残りの例では、`dwainaina-gitlab-jira-test-runner.sr.gitlab.support` をドメインとして使用します。

1. フルチェーンと秘密鍵の両方を含む PKCS12 を作成します。これには OpenSSL がインストールされている必要があります。

   ```text
   openssl pkcs12 -export -out /tmp/dwainaina-gitlab-jira-test-runner.sr.gitlab.support.p12 \
      -in /etc/letsencrypt/live/dwainaina-gitlab-jira-test-runner.sr.gitlab.support/fullchain.pem \
      -inkey /etc/letsencrypt/live/dwainaina-gitlab-jira-test-runner.sr.gitlab.support/privkey.pem \
      -name tomcat
   ```

   値は適切に置き換えてください。`name` には `tomcat` を指定しています。エイリアスは好きなものに変更できますが、この名前を覚えておいてください。

1. 以下のコマンドで `.p12` ファイルを `.jks` ファイルに変換します。`<your-domain-name>` をドメイン名に、`<password>` を `.p12` ファイルの生成に使用したパスワードに置き換えます:

   ```bash
   keytool -importkeystore \
   -deststorepass <password> -destkeypass <password> -destkeystore /tmp/<your-domain-name>.jks \
   -srckeystore /tmp/<your-domain-name>.p12  -srcstoretype PKCS12 -srcstorepass <password> \
   -alias tomcat
   ```

1. 生成された JKS ファイルを /opt/atlassian/jira/conf にコピーします

   ```bash
   cp /tmp/dwainaina-gitlab-jira-test-runner.sr.gitlab.support.jks  /opt/atlassian/jira/conf/
   ```

1. ディレクトリを `/opt/atlassian/jira/conf/` に変更し、`server.xml` を編集します。`server.xml` ファイルを編集する前に、すぐにロールバックする必要がある場合に備えて、まずバックアップを取ることを検討してください。

   ```bash
   cd /opt/atlassian/jira/conf
   cp server.xml server_backup.xml
   vim server.xml
   ```

1. HTTP を無効にするためコメントアウトします。

   ```xml
    <!--
           <Connector port="8080" relaxedPathChars="[]|" relaxedQueryChars="[]|{}^&#x5c;&#x60;&quot;&lt;&gt;"
                      maxThreads="150" minSpareThreads="25" connectionTimeout="20000" enableLookups="false"
                      maxHttpHeaderSize="8192" protocol="HTTP/1.1" useBodyEncodingForURI="true" redirectPort="8443"
                      acceptCount="100" disableUploadTimeout="true" bindOnInit="false"/>
            -->
   ```

1. `server.xml` の `</Service>` ブロックの閉じ括弧の直前に以下を追加します

   ```xml
   <Connector port="443" protocol="org.apache.coyote.http11.Http11NioProtocol"
                 maxHttpHeaderSize="8192" SSLEnabled="true"
                 maxThreads="150" minSpareThreads="25"
                 enableLookups="false" disableUploadTimeout="true"
                 acceptCount="100" scheme="https" secure="true"
                 sslEnabledProtocols="TLSv1.2,TLSv1.3"
           clientAuth="false" useBodyEncodingForURI="true"
           relaxedPathChars="[]|" relaxedQueryChars="[]|{}^&#x5c;&#x60;&quot;&lt;&gt;"
                 keyAlias="tomcat" keystoreFile="conf/dwainaina-gitlab-jira-test-runner.sr.gitlab.support.jks" keystorePass="Jira_PASSWORD" keystoreType="JKS" />
   ```

   `keyAlias`、`keystoreFile`、`keystrokePass` の値は適切に置き換えてください。

1. すべてのリクエストが HTTPS で処理されるよう、conf フォルダの `web.xml` を編集して以下を追加します。やはり `web.xml` ファイルを編集する前に、すぐにロールバックする必要がある場合に備えて、まずバックアップを取ることを検討してください。

   ```bash
   cd /opt/atlassian/jira/conf
   cp web.xml web_backup.xml
   vim web.xml
   ```

   `<web-app ... version="3.1">` タグの直後に以下の行を追加します:

   ```xml
   <security-constraint>
     <web-resource-collection>
       <web-resource-name>all-except-attachments</web-resource-name>
       <url-pattern>*.jsp</url-pattern>
       <url-pattern>*.jspa</url-pattern>
       <url-pattern>/browse/*</url-pattern>
       <url-pattern>/issues/*</url-pattern>
    </web-resource-collection>
     <user-data-constraint>
       <transport-guarantee>CONFIDENTIAL</transport-guarantee>
     </user-data-constraint>
   </security-constraint>
   ```

1. **Optional**: Jira ホームディレクトリがデフォルトの場所にない場合は [Jira ホームディレクトリを指定](https://confluence.atlassian.com/adminjiraserver/setting-your-jira-application-home-directory-938847747.html) します:

   ```bash
   vim <installation-directory>/atlassian-jira/WEB-INF/classes/jira-application.properties
   jira.home = /PATH/TO/JIRA-HOME
   ```

1. tomcat を再起動し、サイトが HTTPS で利用可能か確認します。tomcat という名前のサービスが見つからない場合は、jira サービスを再起動します:

   ```bash
   systemctl status jira
   systemctl restart jira
   systemctl status jira
   ```

   **NOTE:**
   tomcat を再起動した後でも HTTPS ポートにアクセスできない場合があります。以下のコマンドを実行してポートを有効化し、設定を適用します:

   ```bash
   echo 'net.ipv4.ip_unprivileged_port_start=0' > /etc/sysctl.d/50-unprivileged-ports.conf
   sysctl --system
   ```

1. これでサイトが HTTPS アドレスとして利用できるはずです。設定に使用した認証情報を使用してログインしてください。

   **NOTE:**
   それでも HTTPS でサイトにアクセスできない場合は、`/opt/atlassian/jira/conf/<your-domanin-name>.jks` ファイルの権限を確認します。すべてのユーザーが少なくともファイルを読めるようにする必要があります。`<your-domain-name>` をドメイン名に置き換えます。

   ```bash
   ll /opt/atlassian/jira/conf/<your-domanin-name>.jks

   #If you need to change permissions, set it to at least 444 and restart the jira service
   chmod 444 /opt/atlassian/jira/conf/<your-domanin-name>.jks

   #Restart the jira service for changes to take effect
   systemctl status jira
   systemctl restart jira
   systemctl status jira
   ```

### Jira チケットの一般的なトラブルシューティング手順

1. ドキュメントに記載されている一般的な既知のエラーをご確認ください: [Jira - Troubleshooting](https://docs.gitlab.com/integration/jira/troubleshooting/) と [Troubleshooting your DVCS connection](https://docs.gitlab.com/integration/jira/dvcs/troubleshooting/)
1. お客様がどの連携について言及しているかを明確にしてください。GitLab Jira Integration と Jira Development Panel integration があります。
1. お客様の Jira バージョンを取得することも役立ちます。特に: Cloud か Server か？Server ならどのバージョン？（Note: 8.14 以降は [リンク方法が異なります](https://confluence.atlassian.com/adminjiraserver/linking-gitlab-accounts-1027142272.html)）
1. 設定を確認し、手順を確認します。
   **NOTE**:
   一部のお客様は 2 つの連携の設定を混同しており、例えば GitLab Jira Integration で作成された `jira` ユーザーを Jira Development Panel 用の DVCS アカウントのセットアップ用 Term/Account として使用している場合があります。これは通常 0 リポジトリしか持たない `jira` ユーザーの個人 Namespace のリポジトリをロードします。
1. 設定がすべて正しい場合、エラーが発生している場所に応じてログを取得する必要があるかもしれません。[Jira のログファイル](https://confluence.atlassian.com/jirakb/useful-log-files-in-jira-1027120387.html) を確認し、エラーを再現しながら `tail JIRA_HOME/log/atlassian-jira.log` を実行する必要があるかもしれません。`Jira DVCS connection has wrong oauth scope: Issue when integrating with Jira DVCS` の場合、[回避策](https://docs.gitlab.com/integration/jira/dvcs/troubleshooting/#scope-error-when-connecting-to-jira-with-dvcs) を確認してください。
1. 役立つ [Rails チートコード](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/administration/troubleshooting/gitlab_rails_cheat_sheet.md#bulk-update-to-change-all-the-jira-integrations-to-jira-instance-level-values) のリストもあります。これは GitLab 上の Jira 設定の値を確認する必要がある場合に便利です。
