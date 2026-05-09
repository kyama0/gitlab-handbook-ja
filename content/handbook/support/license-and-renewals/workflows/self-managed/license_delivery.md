---
title: ライセンスファイルの配信
description: "ライセンスの生成と配信"
category: GitLab Self-Managed licenses
upstream_path: /handbook/support/license-and-renewals/workflows/self-managed/license_delivery/
upstream_sha: 460f0fe6722bfe52b151b6a8641368ea38885df5
translated_at: "2026-05-08T12:00:00Z"
translator: claude
stale: false
---

## 概要

サポートチームは、自動システムがライセンスを生成できない場合、または誤りがあった場合に、ライセンスを生成する責任を負います。これは [CustomerDot](https://customers.gitlab.com/admin) の `Licenses` セクションを通じて行われます。

ライセンスの生成は、[社内リクエスト](/handbook/support/license-and-renewals/workflows/working_internal_requests)から始まる場合もあれば、サポートチケットを前進させるために必要なアクションとして行われる場合もあります。

いずれの場合も、CustomersDot は作成後すぐに顧客に直接ライセンスをメール送信します。状況により必要な場合を除き、GitLab の従業員にライセンスを送信すべきではありません。例外には、エアギャップインストールや、顧客がメールでライセンスを受信できない他の状況が含まれます。

ライセンスは常に売却先連絡先（sold-to contact）の名前とメールアドレスで生成すべきであることに注意してください。顧客向けのライセンスを、リセラーや GitLab チームメンバーの情報で生成してはいけません。

### ライセンスはどこに送られるのか？

ライセンスがどのメールアドレスに送信されるか、また正しいメールアドレスにライセンスが届くようにする方法については、しばしば混乱が生じます。[CustomersDot の BillingAccount と User を Zuora オブジェクトに整合させる](https://gitlab.com/groups/gitlab-org/-/epics/8950)作業により、これは大幅にシンプルになりました。

ライセンスは、すべての売上について Zuora の売却先連絡先（sold-to contact）に送信されます（[コードリファレンス](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/app/models/license.rb#L98)）。売却先連絡先のメールアドレスは、[Zuora の売却先連絡先変更](/handbook/support/license-and-renewals/workflows/billing_contact_change_payments#zuora-contact-change)を通じて変更できます。

#### 注意点

1. CustomersDot Admin 経由でアクティベーションコードを再送する場合、Zuora の売却先連絡先のメールアドレスが使用されます。
1. CustomersDot Admin 経由でレガシーライセンスやオフラインクラウドライセンスを再送する場合、**Zuora の売却先連絡先に関係なく**、ライセンスに設定されているメールアドレスが使用されます。
1. CustomersDot Admin 経由でアクティベーションコードやレガシーライセンス、オフラインクラウドライセンスを転送する場合、`Destination email address` フィールドに入力したメールアドレスが使用されます。

### ライセンスが配信されたかを確認する

メール配信は MailGun に 30 日間ログとして残ります。ライセンスが 30 日以上前に生成されたものであれば、配信されたかどうかを知ることはできません。ライセンスのメール配信ログを確認するには：

1. [checking mailgun](/handbook/support/workflows/confirmation_emails#checking-mailgun) の手順に従います。
1. mailgun 確認手順の **Step 4** で、`Domain` として `customers.gitlab.com` を使用します。
1. ライセンス生成日をカバーするように日付範囲を更新します。
