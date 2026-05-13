---
title: "Salesforce 設定"
description: "このページの目的は、GitLab における Salesforce インスタンスの設定を文書化することです。一般的な Salesforce 設定に関する質問の確認場所として機能します。"
upstream_path: /handbook/sales/field-operations/sales-systems/salesforce-config/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T10:00:00Z"
translator: claude
stale: false
---

## Salesforce 設定

このページの目的は、私たちの SFDC 組織の設定を文書化することです。一般的な設定に関する質問の「確認場所」として機能します。

### Salesforce のプロビジョニング

Salesforce アクセスを自動的に受け取るべきロールについては、Okta によってアカウントと権限が自動的に作成されます。職務上 Salesforce アクセスが必要な他のメンバーは、[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/) を開いてください。

### Salesforce のデプロビジョニング

- ユーザーのオフボーディング - ユーザーはオフボーディング Issue に基づいて OKTA により自動的に無効化されます。OKTA がユーザーを無効化できない場合、依存関係を解消するために systems Issue が作成され、systems チームメンバーが手動でユーザーを無効化します。
- Salesforce ライセンスハーベスティング - ユーザー管理チームは、最終ログインが 60 日以上前のユーザーレポートを月次で実行します。非アクティビティに基づき、ユーザーリストが OKTA チームに提供されてユーザーが無効化されます。関連する AR Issue が作成され、無効化されたユーザーは `Salesforce Licence Harvesting` Slack チャンネルで通知されます。
- サービスアカウント - サービスアカウントユーザーは Systems チームによって手動で無効化され、OKTA は連携ユーザーをデプロビジョニングできません。

### Salesforce にインストールされているパッケージ

[Internal Handbook](https://internal.gitlab.com/handbook/sales/sales-systems/#sfdc-installed-packages) に移動しました。

### SFDC 証明書と期限切れ証明書の更新

#### Salesforce 証明書

Salesforce 証明書と鍵について詳しくは [こちら](https://help.salesforce.com/s/articleView?id=sf.security_keys_about.htm&type=5) を参照してください。

#### 期限切れ証明書の更新

Salesforce のナレッジベースには、期限切れ証明書の対応方法を解説した [リソース](https://help.salesforce.com/s/articleView?id=000385781&type=1) があります。現在、Salesforce では証明書が 2 か所に配置されており、両方を更新する必要があります。更新するには以下の手順に従い、以下の場所で更新してください。

- セットアップで `Certificate and Key Management` を検索して新しい証明書を作成します。そこから自己署名証明書を作成し、置き換える証明書とオプションが一致することを確認します。なお、`Certificate` フィールドの情報は古い証明書と新しい証明書で若干異なる点にご注意ください。その後、以下の場所で証明書を更新します。
  - [SAML シングルサインオン設定](https://gitlab.my.salesforce.com/0LE4M0000004J63)
    - ここで証明書を更新するには、`Request Signing Certificate` ピックリストで証明書を更新します。（Salesforce が作成した証明書を `Identity Provider Certificate` ファイルにアップロードしないでください）
  - [Identity Provider](https://gitlab.my.salesforce.com/setup/secur/idp/IdpPage.apexp)
    - ここで証明書を更新するには、`Label` ピックリストで証明書を更新します。

### SFDC のクリティカル権限

| クリティカル権限      | システム管理者         | セールスオペレーション | その他のすべてのプロファイル | 個人に割り当てられた権限セット                                                                                                |
|-----------------------|-----------------------|------------------|--------------------|----------------------------------------|
| Deploy Change Sets    | Yes                   | No               | No                 | No                                     |
| Customize Application | Yes                   | No              | No                  | No                                     |
| Manage Users          | Yes                   | Yes              | No                 | [Yes](https://gitlab.my.salesforce.com/005?id=0PS4M00000113lT&isUserEntityOverride=1&SetupNode=PermSets) - Sales Comp Team|

### SFDC バックアップ

私たちの Salesforce バックアップソリューションは [Ownbackup](https://www.owndata.com/) です。コンプライアンス情報は [こちら](https://www.owndata.com/trust) にあります。
