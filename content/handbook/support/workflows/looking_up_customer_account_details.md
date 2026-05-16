---
title: 顧客アカウント詳細の検索
description: "Zendesk と customers.gitlab.com 内で顧客アカウントの詳細を検索する方法"
category: Handling tickets
subcategory: Customer Info
upstream_path: /handbook/support/workflows/looking_up_customer_account_details/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-21T12:28:59-06:00"
---

## 顧客アカウント詳細の検索

チケットに対応する際、顧客情報を検索する必要がある場合があります。一般的な
ユースケースには、チケットを適切な組織に関連付けること、顧客のサブスクリプ
ションプランの確認、テクニカルアカウントマネージャーの検索などがあります。

一般的に、顧客の詳細は以下の順序で検索してください。

1. [Zendesk の GitLab User Lookup アプリ](#gitlab-user-lookup-app-in-zendesk)
1. [customers.gitlab.com 内](#within-customersgitlabcom)
1. [CustomersDot のライセンス内](#within-licenses-in-customersgitlabcom)
1. [Salesforce 内](#within-salesforce)（アクセス権がある場合）

SFDC、customers.gitlab.com の手動検索の概要と通読については、Amanda Rueda の
[How to use Salesforce from a support perspective](https://drive.google.com/drive/u/0/search?q=Amanda%27s%20Salesforce%20Class%20parent:1JDdcj2ESdCc_ReG0-n7RyAIxbIFkcQ1K)
動画をご覧ください。

## Zendesk の GitLab User Lookup アプリ {#gitlab-user-lookup-app-in-zendesk}

Zendesk の [GitLab User Lookup アプリケーション](/handbook/security/customer-support-operations/zendesk/apps/global#gitlab-super-app)から、SFDC と GitLab.com の依頼者の詳細にアクセスできます。

## customers.gitlab.com 内 {#within-customersgitlabcom}

1. [customers.gitlab.com](https://customers.gitlab.com/admin) 管理エリアにログインします
   （Okta でサインイン）。

1. **Customers** セクションで、ドメインまたは完全なメールアドレスを検索します。

   ![customers.gitlab.com の customers セクションの検索ボックス](/images/support/workflows/assets/customers-gitlab-com-search.png)

1. 検索結果で `i` アイコンをクリックして顧客の詳細を表示します。

   ![customers.gitlab.com の customers セクションの検索結果](/images/support/workflows/assets/customers-gitlab-com-search-results.png)

1. アカウントを*なりすまし*して、現在のサブスクリプションを持っているか
   を確認できます。これは顧客の詳細ページから行うか、検索結果の `home`
   アイコンをクリックすることで行えます。

**注:** 顧客のドメインで検索するときは特に注意してください。あなたが知らない汎用ドメインが
存在することがあり、また同じドメインを使用する複数の組織を持つ大規模な顧客が存在することも
あります。そのため、メールでの検索の方が信頼できます。

## CustomersDot のライセンス内 {#within-licenses-in-customersgitlabcom}

トライアルを含むすべての Self-managed ライセンスは、[CustomerDot Licenses](https://customers.gitlab.com/admin/license) で確認できます。
アクセスは Okta 経由でプロビジョニングされます。

## ライセンス ID が提供された場合

顧客がライセンス ID を提供した場合、[CustomersDot](https://customers.gitlab.com/admin) で確認する必要が
あるかもしれません。

ID を以下の URL に追加することで確認できます。

- <https://customers.gitlab.com/admin/license/>

  *例:* `https://customers.gitlab.com/admin/license/<LICENSE_ID>`

## 完全なライセンスファイルが提供された場合

顧客がサポートの権利を証明するために完全なライセンスファイルを含めることがあります。
ライセンスをデコードする方法は 2つあります。1つはスクリプトを使用する方法で、もう 1つは
Self-managed インスタンスで Rails コンソールを使用する方法です。

### License Decoder

最も簡単な方法は、[License Decoder](https://gitlab.com/gitlab-com/support/toolbox/license-decoder) Ruby スクリプトを使用することです。
サブスクリプション情報へのリンクや CustomersDot License ページへの直接リンクを含む、
きれいで分かりやすい情報を出力します。

インストールおよび使用方法については、プロジェクトの[手順](https://gitlab.com/gitlab-com/support/toolbox/license-decoder#gitlab-license-decoder)
に従ってください。

### Rails コンソールから

ID を抽出することで、ライセンス ID（つまり組織）を特定できます。

まず、キャリッジリターンや改行をトリミングします。

```text
tr -d '\r\n' < file_name.gitlab-license
```

次に、自身の Self-managed インスタンスの Rails コンソールから:

```text
license = ::License.new(data: "<paste entire license key without the carriage returns>")
"https://customers.gitlab.com/admin/license/".concat(license.license_id.to_s)
```

これにより、CustomersDot の関連ライセンスへ移動するきれいな URL が返されます。

```text
=> "https://customers.gitlab.com/admin/license/<license_id>"
```

## Salesforce 内 {#within-salesforce}

アクセス権がある場合、Salesforce で直接、チケット依頼者の組織を検索できます。

### 顧客の組織を見つける

1. Salesforce UI 上部の検索バーで、顧客のドメイン（例: `customer.com`）または完全なメールアドレス
   （例: `flastname@customer.com`）を検索します。

   ![検索バー（待機中）](/images/handbook/support/zendesk_needs_org-sfdc-search.png)

1. **Accounts** セクションの結果を探します。サポートレベルがある場合、サポートレベルも確認できます。

   ![Salesforce 検索結果における Account Name と Support Level](/images/support/workflows/assets/salesforce-search-results-accounts.png)

1. **Account Name** をクリックして顧客の組織ページを表示します。

**注:** 場合によっては、メールとドメインの両方で検索する必要があります。例えば、
そのメールアドレスがトライアルアカウントに以前関連付けられていた場合、SFDC ではまだ表示されますが、
これは組織が使用しているアカウントとは異なる可能性があります。

### 顧客の GitLab サブスクリプション情報を見つける

顧客の組織ページで、**GitLab Subscription Information** セクションを探します。
このセクションでサポートに最も関連する情報は以下のとおりです。

- **Support Level**: Starter または Premium ティアのサポートかどうか
- **GitLab Plan (TEST)**: 加入しているサブスクリプションプラン
- **Number of Licenses**: 顧客が支払っているライセンスシート数
- **CARR**: この顧客がもたらす年間定期収益の総額

組織が有料顧客であるかは、**Account Detail** セクションの `Type` フィールドでも確認できます。
`Customer` と表示されているはずです。

### 顧客のアカウントオーナーを見つける

顧客の組織ページで、**Account Detail** セクションを探します。
`Account Owner` フィールドがあるはずです。これがその顧客アカウントの責任者です。

または、**Account Detail** セクションのすぐ上にあるリンク一覧を探します。注: ページの残りの部分が
読み込まれた後にのみリストが読み込まれるため、しばらく待つ必要があるかもしれません。

![アカウント詳細の上にあるリンク一覧](/images/support/workflows/assets/salesforce-account-detail-links.png)

「Account Team」リンクにマウスオーバーすると、顧客アカウントを担当した人のリストが表示されます。

![アカウントチームメンバーのリスト](/images/support/workflows/assets/salesforce-account-team-list.png)

### 顧客の更新オポチュニティオーナーを見つける

顧客の組織ページで、**Opportunities** テーブルを探します。`Close Date` が将来で、ステージが
`Closed Won` でも `10-Duplicate` でもない行を探します。これは通常、最初の行であるはずです。

![アカウントオポチュニティのリスト](/images/support/workflows/assets/salesforce-account-team-list.png)

顧客のライセンス更新の責任者は、`Owner Full Name` の下に記載されています。
