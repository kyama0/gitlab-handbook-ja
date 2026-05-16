---
title: ライセンス購入エラーのトラブルシューティング
description: "GitLab ライセンス購入エラーのトラブルシューティング方法"
category: GitLab Self-Managed licenses
upstream_path: /handbook/support/license-and-renewals/workflows/self-managed/troubleshoot_license_purchase_issues/
upstream_sha: 6c73093986242c762a8f4a2769fbfba69b31fcf9
translated_at: "2026-05-08T12:45:20Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

顧客がライセンスのある GitLab Self-Managed インスタンス向けに追加シートを購入する際、次のエラーメッセージに遭遇したと報告することがあります:

> The Charge is not allowed to be updated on MM/DD/YYYY

これは、顧客がライセンスを 2 回以上更新することで、最新のライセンスが 1 年以上先の将来日付から開始されるようになり、その将来日付のライセンスを返金した結果として発生します。システム内の将来日付付けが、追加シートの追加など現在の操作に問題を引き起こします。

## 例

- 顧客がライセンスを `2020-03-01` から `2021-03-01` まで更新し、その後再度 `2021-03-01` から `2022-03-01` まで更新します。
- `2021` から `2022` までの最新ライセンスが、ダウンロード可能な唯一のライセンスとなります。
- 顧客は `support` および `accounts receivable` と協力し、最新のライセンスに対する返金を依頼します。
- Zuora 課金システムの性質により、これは既存ライセンスを修正するための実質的な将来日付を作成し、変更できなくなります。
- 顧客はシートを追加しようとすると `The Charge is not allowed to be updated on 03/19/2021` というエラーが表示されるようになります。
- これを修正するには、`accounts receivable` チームがサブスクリプションに入り、顧客には見えない内部目的のための `0` インボイスを作成することで Zuora 内のサブスクリプションを完全に再構築する必要があります。
