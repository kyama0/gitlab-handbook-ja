---
title: "Coupa 前払い自動化プロセス"
description: "Coupa 前払い自動化プロセス（2022-04-01 時点）"
upstream_path: "/handbook/business-technology/enterprise-applications/guides/coupa-prepaid/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T05:49:40Z"
translator: "claude"
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />


<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**重要事項**

</div>

<div class="px-4 py-3">

**2023-02-01 より Zip が実装されたことに伴い、Coupa における前払いフィールドは FP&A が担当します。**

</div>

</div>


効率的なプロセスを実現するため、経理チームは償却仕訳の自動化を実装しました。Coupa での購買依頼のレビュー・承認プロセスの一環として、FP&A チームは以下のいずれかに該当する場合に変更が必要かどうかを判断します:

1. 前払い **または**
1. 敷金 - [前払費用ポリシー](/handbook/finance/accounting/#prepaid-expense-policy)に従って償却・資本化が必要なサービス料、または将来発生するイベントやサービスに対応するもの。

<br>

アイテムが前払いまたは敷金の場合、FP&A チームは以下のように `Cart Items`（カートアイテム）セクションを編集します:

1. 購買依頼を前払いとして処理する必要がある場合、**Is this a prepaid?（これは前払いですか？）** チェックボックスにチェックを入れます。
1. **Is this is a prepaid? = Yes** の場合、**Amortization Schedule（償却スケジュール）** で、ドロップダウンリストから **Prepaid Expense Amortization（前払費用償却）** を選択します。

![coupaprepaid-image-1](/images/business-technology/enterprise-applications/guides/coupa-prepaid/coupaprepaid1a.png)

<br>

- [前払費用ポリシー](/handbook/finance/accounting/#prepaid-expense-policy)またはイベントやサービスが発生する将来の日付に合わせた償却期間の **Service Start Date（サービス開始日）** と **Service End Date（サービス終了日）** を設定します。これにより、この請求書が費用として計上される日付が決まります。日付が選択されていない場合、Coupa は自動的にこれらのフィールドに PO の元の日付を入力し、対応する月の予算に影響が生じます。
  - 開始日と終了日は請求書の償却期間を区切ります。例: 1 年間にわたって償却する請求書の場合、正しい日付は 4/1/22 から 3/31/23 です。

![coupaprepaid-image-2](/images/business-technology/enterprise-applications/guides/coupa-prepaid/coupaprepaid2a.png)

<br>

- この購買依頼に適切な Commodity（商品カテゴリー）を選択します。

![coupaprepaid-image-3](/images/business-technology/enterprise-applications/guides/coupa-prepaid/coupaprepaid3a.png)

<br>
<br>


<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**注意事項**

</div>

<div class="px-4 py-3">

購買依頼で選択した情報はすべて、請求書が提出された際に対応する請求書に引き継がれます。請求書は支払い承認前に追加のレビューが必要です。誤った情報が見つかった場合、請求書はコメント付きで差し戻されます。

</div>

</div>

