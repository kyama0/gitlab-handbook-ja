---
title: 'アカウントのマージ'
description: 'Salesforce アカウントのマージに関するドキュメント'
upstream_path: "/handbook/eta/css/salesforce/account-merges/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:40:02+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このページは、Salesforce（SFDC）の顧客アカウントマージリクエストをレビューする必要がある場合のガイダンスを提供することを目的としています。Zendesk に顧客に関する正確な詳細を最新の状態で保持し、Sales による顧客アカウントの変更中も一貫したサポート体験を提供するために、これらのリクエストをレビューするプロセスを作成しました。この種のリクエストの例は[こちら](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/4026)にあります。

## SFDC アカウントマージリクエストのレビュー

1. Zendesk での組織の初回レビュー
   - サポート利用資格の確認:
     - 対象の組織にサポート利用資格があることを確認します。対象の組織が見込み顧客でも Support Hold 状態でもないことを確認してください。
     - 注記: 対象の組織がこの基準を満たさない場合、顧客がサポート対象になるまでアカウントマージを進めるべきではありません。代わりに、対象の組織は現在サポート対象ではないこと、およびアカウントマージを進める前に解決すべきであることを Sales Ops に伝えるため、元のアカウントマージリクエスト Issue に返信してください。
   - 特別な構成の確認:
     - 元の組織に Contact Management Project（CMP）があるか、共有組織であるかを確認します。
     - アクション: どちらかの条件が真である場合、アカウントマージを進められます。ただし、対象の組織が同じ構成を自動的に持つわけではないことを、Customer Support Systems は Issue で Sales Ops に伝える必要があります。アカウントマージ後に対象の組織を更新するよう明示的にリクエストするには、顧客が Customer Support Systems にチケットを起票する必要があります。
   - アカウントマージの対象となることを確認した後:
     - Customer Support Systems は、アカウントマージに対する承認と最終確認を記載して、元の Issue に返信する必要があります。
1. マージ後のアクション
   - 連絡:
     - アカウントマージが完了したら、Sales Ops はマージの成功を Customer Support Systems に通知する必要があります。
