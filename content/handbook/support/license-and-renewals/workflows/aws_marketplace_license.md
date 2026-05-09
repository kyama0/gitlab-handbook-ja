---
title: AWS Marketplace ライセンス
description: "AWS Marketplace 経由で購入されたライセンスの扱い方"
category: GitLab Self-Managed licenses
upstream_path: /handbook/support/license-and-renewals/workflows/aws_marketplace_license/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T09:50:12Z"
translator: claude
stale: false
---

## AWS Marketplace ライセンスの概要

AWS Marketplace では、[Premium](https://aws.amazon.com/marketplace/pp/prodview-amk6tacbois2k) または [Ultimate](https://aws.amazon.com/marketplace/pp/prodview-g6ktjmpuc33zk) ライセンス付きの基本的な GitLab インスタンスを、時間単位または年単位の料金で提供しています。サブスクリプションは AWS の EC タイプにバンドルされており、AWS 側で管理されます。AWS Marketplace を通じて購入した顧客には [Customers Portal](https://customers.gitlab.com/customers/sign_in) アカウントは作成されません。これらの購入から作成されるインスタンスは、以下のデフォルトの 5 シートライセンスを使用します:

旧ライセンス（GitLab v15.2 より前のバージョンでのみ動作）

- [Premium ライセンス](https://customers.gitlab.com/admin/license/118882)
- [Ultimate ライセンス](https://customers.gitlab.com/admin/license/71075)

新ライセンス

- [Premium ライセンス](https://customers.gitlab.com/admin/license/1099015)
- [Ultimate ライセンス](https://customers.gitlab.com/admin/license/1099017)

顧客が 5 ユーザーのライセンスシートを超える必要がある場合は、<aws-sales@gitlab.com> に連絡して private offer を入手する必要があります。顧客が GitLab と private offer を取得すると、その顧客のために Customers Portal および Zuora アカウントが作成され、private offer に対する新しいライセンスが生成されます。

---

## ワークフロー

### AMI がライセンスされていない

顧客がデフォルトの 5 シートライセンスで AWS AMI を作成したのに、インスタンスにライセンスが表示されない場合:

1. インスタンスの `/etc/gitlab/predefined.gitlab-license` ファイルでライセンスを確認するよう案内します。
1. 次のいずれかを使用して手動でライセンスをアップロードするよう案内します:
    - [Web UI](https://docs.gitlab.com/administration/license_file/#add-license-in-the-admin-area)
    - [Rails console](https://docs.gitlab.com/administration/license_file/#add-a-license-through-the-console)

### 顧客リクエストへの対応

1. 顧客が AWS インスタンスを使用していること、および [エクスポートされたライセンス](https://docs.gitlab.com/subscriptions/self_managed/#export-your-license-usage) が上記のいずれかのライセンスと一致することを確認します。
1. 顧客が引き続き有料機能にアクセスできるかを確認し、できなければ 30 日間の一時ライセンスでブロックを解除します。
1. <aws-sales@gitlab.com> に連絡するよう顧客に依頼します。

このリクエストをエスカレーションするには、SFDC に既に該当顧客の組織がある場合、[セールスへのエスカレーションワークフロー](/handbook/support/license-and-renewals/workflows/working_with_sales#general-workflow) に従ってください。SFDC に組織がない場合や、AWS Marketplace 経由の購入に関して質問がある場合は、Slack の `#cloud-aws` チャンネルで Alliances Partner チームに連絡してください。

- [サンプルケース 1](https://gitlab.zendesk.com/agent/tickets/199133)
- [サンプルケース 2](https://gitlab.zendesk.com/agent/tickets/324283)
