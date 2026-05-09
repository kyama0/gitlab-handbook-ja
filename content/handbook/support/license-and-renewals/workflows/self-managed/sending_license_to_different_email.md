---
title: 異なるメールアドレスへのライセンス送信
description: "異なるメールアドレスにライセンスを送信するプロセスに関する情報"
category: GitLab Self-Managed licenses
upstream_path: /handbook/support/license-and-renewals/workflows/self-managed/sending_license_to_different_email/
upstream_sha: 6c73093986242c762a8f4a2769fbfba69b31fcf9
translated_at: "2026-05-08T12:45:20Z"
translator: claude
stale: false
---

## 概要

一時ライセンスは異なるメールアドレスに送信できます。

有償ライセンスは常に注文時に使用された `Sold to` 連絡先に送信され、この連絡先はライセンスファイル内に記載されます。

次のいずれかの場合、ライセンスを別の連絡先に送信できます。

- その連絡先がサブスクリプションにリンクされた Customers Dot アカウントを保有している場合。
- その連絡先が Zuora アカウントの `Sold to` 連絡先である場合。

ライセンスを別のメールアドレスに送信するには、[購入を追加アカウントに関連付ける](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases) のプロセスに従ってください。\
社内からの依頼を理由にこの作業を省略することはできません。これは顧客が提出したチケット経由で実施する必要があります。\
新しい Customers Dot アカウントが作成または変更されたら、ライセンスを再送信できます（または新しいアカウント所有者が取得できます）。

サポートチームは、ライセンス自体に含まれる連絡先情報を変更することは **許可されていません**。

ライセンスまたはアクティベーションコードを転送または再送信するには、次の手順を実行します。

- 顧客のメールまたは会社名を使用してライセンスまたはアクティベーションコードを検索します。
- 同じユーザーにライセンスまたはアクティベーションコードを再送信するには、右側にある `Resend to customer via email` ボタン（封筒のアイコン）をクリックします。
- `Forward license email` 機能を使用してライセンスまたはアクティベーションコードを別のアドレスに転送するには、次の手順を実行します。
    1. ライセンスファイルの場合は `Forward license email` タブに、アクティベーションコードの場合は `Forward Cloud activation email` タブに移動します。
    1. `Destination email address` を入力します。**注**: 現在、複数の連絡先に同時にコピー（cc）または送信することはできません。
    1. **Forward** ボタンをクリックします。
    1. [ライセンスが配信されたかどうかを確認します](/handbook/support/license-and-renewals/workflows/self-managed/license_delivery#check-whether-the-license-has-been-delivered)
