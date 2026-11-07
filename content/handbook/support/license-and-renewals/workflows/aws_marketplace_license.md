---
title: AWS Marketplace ライセンス
description: "AWS Marketplace 経由で購入されたライセンスの扱い方"
category: GitLab Self-Managed licenses
upstream_path: /handbook/support/license-and-renewals/workflows/aws_marketplace_license/
upstream_sha: d717b9da633f2989a0b1854384a69a0c31bae680
translated_at: "2026-11-07T00:48:39.009036+00:00"
translator: claude
stale: false
lastmod: "2026-11-05T16:03:26-05:00"
---

## AWS Marketplace ライセンスの概要 {#aws-marketplace-license-overview}

AWS Marketplace では、[Premium](https://aws.amazon.com/marketplace/pp/prodview-amk6tacbois2k) または [Ultimate](https://aws.amazon.com/marketplace/pp/prodview-g6ktjmpuc33zk) ライセンス付きの基本的な GitLab インスタンスを、時間単位または年単位の料金で提供しています。サブスクリプションは AWS の EC タイプにバンドルされており、AWS 側で管理されます。AWS Marketplace を通じて購入した顧客には [Customers Portal](https://customers.gitlab.com/customers/sign_in) アカウントは作成されません。これらの購入から作成されるインスタンスは、以下のデフォルトの 5 シートのライセンスを使用します：

旧ライセンス（GitLab v15.2 より前のバージョンでのみ動作）

- [Premium ライセンス](https://customers.gitlab.com/admin/license/118882)
- [Ultimate ライセンス](https://customers.gitlab.com/admin/license/71075)

新ライセンス

- [Premium ライセンス](https://customers.gitlab.com/admin/license/1099015)
- [Ultimate ライセンス](https://customers.gitlab.com/admin/license/1099017)

顧客が 5 ユーザー分のライセンスシートを超えて利用する必要がある場合は、<aws-sales@gitlab.com> に連絡してプライベートオファーを入手する必要があります。顧客が私たちからプライベートオファーを取得すると、その顧客のために Customers Portal および Zuora アカウントが作成され、プライベートオファーに対する新しいライセンスが生成されます。

---

## ワークフロー {#workflows}

### AMI がライセンスされていない {#ami-not-licensed}

顧客がデフォルトの 5 シートライセンスで AWS AMI を作成したのに、インスタンスにライセンスが表示されない場合：

1. インスタンスの `/etc/gitlab/predefined.gitlab-license` ファイルでライセンスを確認するよう案内します。
1. 次のいずれかを使用して手動でライセンスをアップロードするよう案内します：
    - [Web UI](https://docs.gitlab.com/administration/license_file/#add-license-in-the-admin-area)。
    - [Rails コンソール](https://docs.gitlab.com/administration/license_file/#add-a-license-through-the-console)。

### 顧客リクエストへの対応 {#handling-customer-request}

1. 顧客が AWS インスタンスを使用していること、および[エクスポートされたライセンス](https://docs.gitlab.com/administration/license_usage/#export-a-license-usage-file)が上記のいずれかのライセンスと一致することを確認します。
1. 顧客が引き続き有料機能にアクセスできるかを確認し、できなければ 30 日間の一時ライセンスでブロックを解除します。
1. <aws-sales@gitlab.com> に連絡するよう顧客に依頼します。

このリクエストをエスカレーションするには、SFDC に既に該当顧客の組織がある場合、[Sales へのエスカレーションワークフロー](/handbook/support/license-and-renewals/workflows/working_with_sales#general-workflow)に従ってください。SFDC に組織がない場合や、AWS Marketplace 経由の購入に関して質問がある場合は、Slack の `#cloud-aws` チャンネルで Alliances Partner チームに連絡してください。

- [サンプルケース 1](https://gitlab.zendesk.com/agent/tickets/199133)
- [サンプルケース 2](https://gitlab.zendesk.com/agent/tickets/324283)
